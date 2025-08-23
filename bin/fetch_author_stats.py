#!/usr/bin/env python3
"""
Fetch author metrics from Semantic Scholar only.

Usage: run the script. It writes to _data/author_stats.json
Semantic Scholar's public Graph API does not require an API key for these fields.
"""

import os
import json
import datetime
from pathlib import Path
import requests

OUT_PATH = Path(__file__).resolve().parents[1] / '_data' / 'author_stats.json'


def fetch_semantic_scholar(author_id: str):
    base = 'https://api.semanticscholar.org/graph/v1/author/'
    fields = 'citationCount,hIndex,paperCount'
    try:
        url = f'{base}{author_id}'
        params = {'fields': fields}
        r = requests.get(url, params=params, timeout=20)
        r.raise_for_status()
        data = r.json()
        return {
            'citations': int(data.get('citationCount', 0)),
            'h_index': int(data.get('hIndex', 0)),
            'papers': int(data.get('paperCount', 0))
        }
    except Exception as e:
        print('Error fetching Semantic Scholar:', e)
        return {}

def main():
    semantic_id = os.getenv('SEMANTIC_SCHOLAR_AUTHOR_ID', '2146586547')  # Mirko Casu

    out = {'last_updated': datetime.datetime.utcnow().isoformat()}

    print('Fetching Semantic Scholar metrics...')
    ss = fetch_semantic_scholar(semantic_id)
    if ss:
        out['semantic_scholar'] = ss

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with OUT_PATH.open('w', encoding='utf8') as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
    print('Saved metrics to', OUT_PATH)

if __name__ == '__main__':
    main()
