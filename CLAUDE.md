# Personal site (mirkocasu.github.io)

Jekyll with the al-folio theme, deployed to GitHub Pages by GitHub Actions on every push to `main`. Site text is English; blog posts may be Italian.

## Commands

- Serve locally: `PATH="$HOME/.rbenv/versions/3.2.2/bin:$PATH" bundle exec jekyll serve --livereload` (port 4000). The system Ruby 2.6 cannot run the bundle.
- **Before every push**: `npx prettier --write .` then `npx prettier --check .`. Both must pass.
- Regenerate the CV PDFs: `bin/build_cv.sh` (headless Chrome; needs the server above or builds `_site` itself).

## Where content lives

- `_data/curriculum.yml`: single source for `/cv/` (academic) and `/cv/resume/` (two pages). Never duplicate its text in the templates.
- `_bibliography/papers.bib`: all papers. `selected={true}` marks the homepage papers, but their order is the fixed key list in `_includes/selected_papers.liquid` (newest first), because jekyll-scholar ignores sort options. Keep both in sync. `cvtype={workshop}` moves an entry to the workshop section of the CV.
- `_news/`, `_posts/`, `_pages/about.md` (homepage text), `_data/socials.yml`.
- `assets/pdf/` holds only the two CV PDFs.

## Gotchas

- Timezone is Europe/Rome: a post dated in the future is not built.
- CI: `broken-links.yml` (lychee) cannot be run by hand. Flaky external hosts go in `.lycheeignore`; the Liquid CV templates are excluded from its source scan. Workflows are pinned to `ubuntu-24.04` because `ubuntu-latest` has no Ruby 3.3.5.
- The CV and resume are standalone pages (`layout: none`) styled by `_includes/cv/style.liquid`.
- Use `mirko.casu@live.it` as the contact email, never the university address.

## Keeping context small

- Search with Grep, not by reading directories. Never read `_site/`, `node_modules/`, `.jekyll-cache/` or binaries in `assets/`.
- Check the live page with `curl -s http://127.0.0.1:4000/... | grep ...`, not by reading `_site`.
- Pipe large outputs through `head`, `grep` or `wc -l`; never `cat` a whole page, stylesheet or log.

## Compact instructions

When compacting, keep: files changed and why, decisions the user made, open tasks, and the commit and push state. Drop raw command output and page dumps.
