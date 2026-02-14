#!/usr/bin/env python3
"""Scaffold a multilingual news item for this site.

Creates three files in `_news/` with the same basename and language suffixes
(.en.md, .fr.md, .it.md) and prefilled front-matter.

Usage:
  python tools/create_news.py slug [--title "My title"] [--date ISO] [--open]

Examples:
  python tools/create_news.py new-project --title "New project announced" --open

The script is intentionally minimal and uses $EDITOR to open files if --open is set.
"""
from __future__ import annotations
import argparse
import datetime
import os
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NEWS_DIR = ROOT / "_news"

TEMPLATE = """---
layout: post
date: "{date}"
inline: true
related_posts: false
lang: {lang}
{title_field}
---

{body}
"""

PLACEHOLDERS = {
    "en": "Write the English content here.",
    "fr": "Écrire ici le contenu en français.",
    "it": "Scrivi qui il contenuto in italiano.",
}


def iso_now() -> str:
    return datetime.datetime.now(datetime.timezone.utc).astimezone().replace(microsecond=0).isoformat()


def safe_slug(s: str) -> str:
    # keep simple: allow letters, numbers, hyphen, underscore
    return "".join(c for c in s if c.isalnum() or c in "-_") or "news"


def make_filenames(basename: str) -> dict[str, Path]:
    return {
        lang: NEWS_DIR / f"{basename}.{lang}.md"
        for lang in ("en", "fr", "it")
    }


def render_frontmatter(lang: str, date: str, title: str | None, body: str) -> str:
    title_field = f'title: "{title}"' if title else ""
    return TEMPLATE.format(date=date, lang=lang, title_field=title_field, body=body)


def create_files(basename: str, title: str | None = None, date: str | None = None, open_files: bool = False) -> list[Path]:
    NEWS_DIR.mkdir(parents=True, exist_ok=True)
    now = date or iso_now()
    names = make_filenames(basename)
    created: list[Path] = []
    for lang, path in names.items():
        if path.exists():
            print(f"Skipping existing file: {path}")
            continue
        body = PLACEHOLDERS.get(lang, "")
        content = render_frontmatter(lang, now, title, body)
        path.write_text(content, encoding="utf-8")
        created.append(path)
        print(f"Created: {path}")

    if open_files and created:
        editor = os.environ.get("EDITOR") or os.environ.get("VISUAL") or "vi"
        try:
            subprocess.run([editor, *map(str, created)])
        except Exception as e:
            print("Could not open editor:", e)

    return created


def main() -> None:
    p = argparse.ArgumentParser(description="Scaffold multilingual news (EN/FR/IT) in _news/")
    p.add_argument("slug", help="slug to use in filename (e.g. visiting-phd)")
    p.add_argument("--title", help="optional title to add to front-matter")
    p.add_argument("--date", help="ISO date string to set in front-matter (default: now)")
    p.add_argument("--open", action="store_true", help="open created files in $EDITOR")
    args = p.parse_args()

    slug = safe_slug(args.slug)
    timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    basename = f"announcement_{timestamp}_{slug}"
    created = create_files(basename, title=args.title, date=args.date, open_files=args.open)
    if not created:
        print("No files created (all already exist).")
    else:
        print("Done. Edit the files to add translations and content.")


if __name__ == "__main__":
    main()
