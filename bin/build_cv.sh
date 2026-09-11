#!/usr/bin/env bash
# Build assets/pdf/Mirko_Casu_CV.pdf (A4, 2 pages) from _pages/cv.html with headless Chrome.
# Usage: bin/build_cv.sh   (set CHROME=/path/to/chrome to override the browser)
# Before running, update the "Last updated" date and the figures (citations, downloads) in _pages/cv.html.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/_pages/cv.html"
OUT="$ROOT/assets/pdf/Mirko_Casu_CV.pdf"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Drop the Jekyll front matter and point site-absolute asset paths at the local checkout.
awk 'BEGIN{c=0} /^---$/ && c<2 {c++; next} c>=2' "$SRC" \
  | sed "s#\"/assets/#\"file://$ROOT/assets/#g" > "$TMP/cv.html"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=8000 --print-to-pdf="$TMP/cv.pdf" "file://$TMP/cv.html" 2>/dev/null

# Optional: set PDF metadata and check the layout (needs PyMuPDF: pip install pymupdf).
if python3 -c "import fitz" 2>/dev/null; then
  python3 - "$TMP/cv.pdf" <<'EOF'
import sys, fitz
path = sys.argv[1]
doc = fitz.open(path)
doc.set_metadata({
    "title": "Mirko Casu - Curriculum Vitae",
    "author": "Mirko Casu",
    "subject": "CV: AI researcher and licensed psychologist",
    "keywords": "AI, LLM, deepfake forensics, impostor bias, digital mental health, psychology",
})
if len(doc) != 2:
    print(f"warning: {len(doc)} pages, expected 2", file=sys.stderr)
for i, page in enumerate(doc):
    hit = page.search_for(f"{i + 1} / {len(doc)}")
    if not hit or hit[0].y1 > page.rect.y1 - 15:
        print(f"warning: page {i + 1} content overflows the A4 sheet", file=sys.stderr)
doc.save(path + ".tmp")
EOF
  mv "$TMP/cv.pdf.tmp" "$TMP/cv.pdf"
fi

cp "$TMP/cv.pdf" "$OUT"
echo "Wrote $OUT"
