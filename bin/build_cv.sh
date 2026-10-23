#!/usr/bin/env bash
# Build the CV PDFs (A4) with headless Chrome from the rendered Jekyll pages:
#   /cv/         -> assets/pdf/Mirko_Casu_CV.pdf      (academic CV, all publications)
#   /cv/resume/  -> assets/pdf/Mirko_Casu_Resume.pdf  (two-page resume)
# Content lives in _data/curriculum.yml and _bibliography/papers.bib; update them first.
# Usage: bin/build_cv.sh   (uses a running `jekyll serve` on port 4000, otherwise runs `jekyll build`;
#                           set CHROME=/path/to/chrome or CV_BASE=http://host:port to override)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
BASE="${CV_BASE:-http://127.0.0.1:4000}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if ! curl -sf -o /dev/null "$BASE/cv/"; then
  echo "No server at $BASE, building the site..."
  (cd "$ROOT" && bundle exec jekyll build -q)
  BASE="file://$ROOT/_site"
fi

render() { # page path, output file, expected maximum pages
  local url="$BASE/$1" out="$ROOT/assets/pdf/$2" max="$3"
  [[ "$BASE" == file://* ]] && url="$BASE/$1index.html"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=10000 --print-to-pdf="$TMP/out.pdf" "$url" 2>/dev/null
  # Optional: set PDF metadata and check the page count (needs PyMuPDF: pip install pymupdf).
  if python3 -c "import fitz" 2>/dev/null; then
    python3 - "$TMP/out.pdf" "$2" "$max" <<'EOF'
import sys, fitz
path, name, max_pages = sys.argv[1], sys.argv[2], int(sys.argv[3])
doc = fitz.open(path)
kind = "Resume" if "Resume" in name else "Curriculum Vitae"
doc.set_metadata({
    "title": f"Mirko Casu - {kind}",
    "author": "Mirko Casu",
    "subject": "AI researcher and licensed clinical psychologist",
    "keywords": "AI, LLM, AI safety, human-AI interaction, digital mental health, deepfake forensics, psychology",
})
if len(doc) > max_pages:
    print(f"warning: {name} has {len(doc)} pages, expected at most {max_pages}", file=sys.stderr)
doc.save(path + ".tmp")
print(f"{name}: {len(doc)} pages")
EOF
    mv "$TMP/out.pdf.tmp" "$TMP/out.pdf"
  fi
  cp "$TMP/out.pdf" "$out"
  echo "Wrote $out"
}

render "cv/" Mirko_Casu_CV.pdf 6
render "cv/resume/" Mirko_Casu_Resume.pdf 2
