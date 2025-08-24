# Mirko Casu — Personal Website

This repository contains the source for the personal website of Mirko Casu. The site is built with Jekyll using the al-folio theme and is intended to present Mirko's academic profile, publications, news, and project information in a clean, responsive format.

## About

Mirko Casu is a clinical psychologist and a PhD student in Computer Science at the University of Catania. He collaborates with the SAMOTHRACE project and the Image Processing Laboratory (IPLab), Multimedia Security & Forensics group. His research connects psychology with technology and covers topics such as artificial intelligence, deepfakes, cognitive bias, digital forensics, eHealth/mHealth and virtual reality.

## What this repo contains

- Jekyll source (Liquid templates, includes and layouts) powering the site.
- Content collections: `_news`, `_pages`, `_bibliography` (publications).
- Static assets: `assets/` (images, fonts, JS, CSS).
- Build & utility scripts in `bin/` and `tools/`.
- Local development helpers (Gemfile, package.json).

The repository intentionally keeps generated or environment-specific folders out of version control (for example: `_site`, `.venv`, `node_modules`).

## Technology stack

- Jekyll (static site generator) + Liquid templates
- SCSS for styles
- Minimal JS for small UX behavior (language switcher, search, etc.)
- GitHub Actions workflows for build/deploy

## Local development

1. Install Ruby and Bundler (macOS example using Homebrew):

```bash
brew install ruby
gem install bundler
```

2. Install gems and build locally:

```bash
bundle install --jobs 4 --retry 3
bundle exec jekyll build --trace
```

3. Optional: install node dependencies if you modify JS/CSS tooling:

```bash
npm install
```

4. Serve locally:

```bash
bundle exec jekyll serve
# then open http://127.0.0.1:4000
```

## Deployment

This project uses GitHub Actions to build and publish the generated `_site` contents to GitHub Pages. See `.github/workflows` for the CI configuration. When making changes, push to a working branch and open a PR; the CI will run the build and you can verify the generated output before merging.

## Contributing

- Keep generated files out of commits. Add local environment folders to `.gitignore` when necessary (for example: `.venv/`, `node_modules/`, `_site/`).
- Use the `tools/` scripts and `bin/` helpers for routine tasks (check their headers for usage examples).
- For content changes, edit the corresponding markdown or Liquid include and run a local build to verify.

## License

Content and code in this repository are provided under the repository `LICENSE` file (see `LICENSE` for details).
