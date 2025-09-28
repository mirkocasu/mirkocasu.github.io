#!/usr/bin/env python3
"""
python3 tools/create_news.py --title "moritz" --interactive --date "2025-09-25T12:00:00+02:00" --auto-push
"""
import argparse
import datetime
import os
import subprocess
import sys
import platform

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NEWS_DIR = os.path.join(ROOT, '_news')


def slugify(s):
    return ''.join(c if c.isalnum() or c in '-_' else '-' for c in s).strip('-').lower()


def main():
    parser = argparse.ArgumentParser(description='Create and push a news item into _news')
    # support multilingual bodies: default lang uses --body/--file (or --body-en/--file-en)
    group = parser.add_mutually_exclusive_group(required=False)
    group.add_argument('--body', help='Inline body text for the default news language (use quotes)')
    group.add_argument('--file', help='Path to a markdown file to use as body for the default language')
    parser.add_argument('--title', required=True, help='Short title for commit message and filename (used as fallback)')
    # per-language titles (optional, fall back to --title)
    parser.add_argument('--title-en', help='Title for English news')
    parser.add_argument('--title-it', help='Title for Italian news')
    parser.add_argument('--title-fr', help='Title for French news')
    parser.add_argument('--lang', default='en', help='Language code for the default body (en, it, fr)')
    # explicit per-language bodies (user provides translated markdown for each)
    parser.add_argument('--body-en', help='Body text for English news (overrides --body for en)')
    parser.add_argument('--file-en', help='Path to markdown file for English news')
    parser.add_argument('--body-it', help='Body text for Italian news')
    parser.add_argument('--file-it', help='Path to markdown file for Italian news')
    parser.add_argument('--body-fr', help='Body text for French news')
    parser.add_argument('--file-fr', help='Path to markdown file for French news')
    parser.add_argument('--date', help='Date for front-matter (RFC3339 or "now")', default='now')
    parser.add_argument('--inline', action='store_true', help='Mark news as inline (rendered in about)')
    parser.add_argument('--related', action='store_true', help='related_posts: true')
    parser.add_argument('--push', action='store_true', help='Run git push after commit (disabled unless NEWS_ALLOW_PUSH=1)')
    parser.add_argument('--auto-push', action='store_true', help='Automatically run git push after commit (no env var required)')
    parser.add_argument('--interactive', action='store_true', help='Interactive mode: edit bodies in your $EDITOR')
    parser.add_argument('--dry-run', action='store_true', help='Do not write or run git, just show what would be done')
    args = parser.parse_args()

    # helper to read body text from either inline or file
    def read_body_from_args(inline_text, file_path):
        if file_path:
            with open(file_path, 'r', encoding='utf-8') as f:
                return f.read().strip()
        if inline_text:
            return inline_text.strip()
        return None

    # gather bodies per language
    bodies = {}
    # default language (args.lang) body can be provided via --body/--file or --body-<lang>/--file-<lang>
    default_body = read_body_from_args(args.body, args.file)
    bodies[args.lang] = default_body

    # explicit language-specific overrides
    en_body = read_body_from_args(args.body_en, args.file_en)
    if en_body:
        bodies['en'] = en_body
    it_body = read_body_from_args(args.body_it, args.file_it)
    if it_body:
        bodies['it'] = it_body
    fr_body = read_body_from_args(args.body_fr, args.file_fr)
    if fr_body:
        bodies['fr'] = fr_body

    # Interactive mode: prompt user to provide content via editor or stdin
    if args.interactive:
        import tempfile
        import subprocess as sp
        print('\nInteractive mode: you will be asked to provide content for each language.')
        langs_input = input('Enter languages to create (comma-separated, default: en,it,fr): ').strip() or 'en,it,fr'
        langs = [l.strip() for l in langs_input.split(',') if l.strip()]
        for lang in langs:
            # skip if already provided
            if bodies.get(lang):
                print(f'Body for {lang} already provided via CLI, skipping editor.')
                continue
            use_editor = input(f'Open $EDITOR to write the {lang} body? (Y/n): ').strip().lower()
            body_text = None
            if use_editor in ('', 'y', 'yes'):
                editor_env = os.getenv('EDITOR')
                with tempfile.NamedTemporaryFile('w+', suffix=f'.{lang}.md', delete=False) as tf:
                    # Do not prefill the title in the temp file; user will write only the body
                    tf.write('')
                    tf.flush()
                    tfname = tf.name
                try:
                    # Prefer $EDITOR if set.
                    if editor_env:
                        sp.run([editor_env, tfname])
                    else:
                        if platform.system() == 'Darwin':
                            # On macOS: open the file in TextEdit and wait until the document is closed
                            # open TextEdit and wait until the app exits; closing the app confirms the news
                            sp.run(['open', '-W', '-n', '-a', 'TextEdit', tfname])
                        else:
                            # fallback to vi for other systems
                            sp.run(['vi', tfname])

                    # read the content the user wrote
                    with open(tfname, 'r', encoding='utf-8') as f:
                        body_text = f.read().strip()
                finally:
                    try:
                        os.unlink(tfname)
                    except Exception:
                        pass
            else:
                print('Enter the body. Finish with a line containing only a single dot (.)')
                lines = []
                while True:
                    line = input()
                    if line.strip() == '.':
                        break
                    lines.append(line)
                body_text = '\n'.join(lines).strip()

            if body_text:
                bodies[lang] = body_text
            else:
                print(f'No content provided for {lang}; skipping.')

    if args.date == 'now':
        now = datetime.datetime.now(datetime.timezone.utc)
        date_str = now.isoformat(timespec='seconds')
    else:
        date_str = args.date

    # create one file per language present in bodies dict
    ts = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
    created_files = []

    if args.dry_run:
        print('Dry run: would create files for languages:', ', '.join(k for k,v in bodies.items() if v))

    os.makedirs(NEWS_DIR, exist_ok=True)
    # decide inline behaviour: if interactive, prefer inline unless user explicitly set --inline False
    inline_flag = True if (args.inline or args.interactive) else False

    for lang, body_text in bodies.items():
        if not body_text:
            continue
        # determine title for this language (fallback to generic title)
        if lang == 'en':
            title_local = args.title_en or args.title
        elif lang == 'it':
            title_local = args.title_it or args.title
        elif lang == 'fr':
            title_local = args.title_fr or args.title
        else:
            title_local = args.title

        # slugify title for filename
        slug = slugify(title_local) or 'news'
        fname = f'announcement_{ts}_{slug}.{lang}.md'
        out_path = os.path.join(NEWS_DIR, fname)

        # prepare escaped title (avoid backslashes inside f-string expressions)
        escaped_title = title_local.replace('"', '\\"')
        front_matter = [
            '---',
            'layout: post',
            f'date: "{date_str}"',
            f'inline: {"true" if inline_flag else "false"}',
            f'related_posts: {"true" if args.related else "false"}',
            f'lang: {lang}',
            '---',
            '',
        ]

        content = '\n'.join(front_matter) + body_text + '\n'

        print('Will create:', out_path)
        if args.dry_run:
            print('---FRONT-MATTER---\n' + '\n'.join(front_matter))
            print('---BODY (preview)---\n' + body_text[:300] + ('...' if len(body_text) > 300 else ''))
            continue

        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(content)
        created_files.append(out_path)

    if args.dry_run:
        return

    if not created_files:
        print('No news files were created: provide --body/--file or --body-it/--file-it/--body-fr/--file-fr', file=sys.stderr)
        sys.exit(1)

    # git add all created files
    subprocess.run(['git', 'add'] + created_files, check=True)
    langs = ','.join([os.path.splitext(os.path.basename(p))[0].split('.')[-1] for p in created_files])
    commit_msg = f'Add news: {args.title} ({langs})'
    subprocess.run(['git', 'commit', '-m', commit_msg], check=True)
    print('Committed:', commit_msg)

    # pushing behavior
    if args.auto_push:
        # auto-push requested: push unconditionally
        subprocess.run(['git', 'push'], check=True)
        print('Auto-pushed to remote')
    elif args.push:
        # require explicit env var to allow push
        if os.getenv('NEWS_ALLOW_PUSH') == '1':
            subprocess.run(['git', 'push'], check=True)
            print('Pushed to remote')
        else:
            print('\nPush skipped: pushing is disabled by default for safety.')
            print('If you really want to push from this tool, set environment variable NEWS_ALLOW_PUSH=1 and re-run with --push, or use --auto-push to force push.')


if __name__ == '__main__':
    main()
