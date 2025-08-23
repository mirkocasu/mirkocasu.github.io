create_news.py - quick guide

Purpose
-------
Create a new news item in `_news/` and optionally commit & push it to the repository.

Requirements
------------
- Run from the repository root.
- Git remote configured and authenticated (SSH key or credential helper).
- Python 3.8+

Examples
--------
# Create inline Italian news and commit
python tools/create_news.py --title "Intervista" --body "Sono stato intervistato..." --lang it --inline

# Create news from file, commit and push
# Create news from file, commit and push
python tools/create_news.py --title "Paper" --file /tmp/body.md --lang en --push

# Create multilingual news in one command (provide translated markdown files)
python tools/create_news.py --title "Announcement" --file-en /tmp/en.md --file-it /tmp/it.md --file-fr /tmp/fr.md --push

# Puoi specificare titoli diversi per lingua e la data
python tools/create_news.py --title "Announcement" --title-it "Annuncio" --title-fr "Annonce" --file-en /tmp/en.md --file-it /tmp/it.md --file-fr /tmp/fr.md --date "2025-08-20T12:00:00+02:00" --push

# Dry run
python tools/create_news.py --title "Test" --body "Hello" --dry-run

Notes
-----
- The script creates files named `_news/announcement_<timestamp>.<lang>.md` where <lang> is e.g. `it` or `fr`.
- The generated front-matter includes `layout: post`, `date`, `inline`, `related_posts` and `lang`.
- The `--push` flag will run `git push` after commit. Make sure your local branch is tracking the remote.
- For production workflows you may want a more robust check (conflicts, branch protection, PR-based flow).
