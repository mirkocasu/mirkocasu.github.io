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


def fetch_wos(researcher_id: str, api_url: str, api_key: str):
    """
    Optional fetch from Web of Science API.
    The function expects an API endpoint and key provided via environment variables.
    The exact payload depends on the WOS API you have access to; this implementation
    uses a generic GET with Authorization header and expects JSON with citationCount/hIndex/paperCount-ish fields.
    If your WOS API returns different keys, adapt accordingly.
    """
    try:
        headers = {'Authorization': f'Bearer {api_key}', 'Accept': 'application/json'}
        params = {'researcherId': researcher_id}
        r = requests.get(api_url, headers=headers, params=params, timeout=20)
        r.raise_for_status()
        data = r.json()

        # Try multiple common keys
        citations = data.get('citationCount') or data.get('citations') or data.get('timesCited') or 0
        h_index = data.get('hIndex') or data.get('h_index') or data.get('hindex') or 0
        papers = data.get('paperCount') or data.get('publications') or data.get('worksCount') or 0

        return {
            'citations': int(citations),
            'h_index': int(h_index),
            'papers': int(papers),
        }
    except Exception as e:
        print('Error fetching Web of Science:', e)
        return {}

def main():
    semantic_id = os.getenv('SEMANTIC_SCHOLAR_AUTHOR_ID', '2146586547')  # Mirko Casu
    wos_id = os.getenv('WOS_RESEARCHER_ID', 'HMD-8254-2023')
    wos_api_url = os.getenv('WOS_API_URL')
    wos_api_key = os.getenv('WOS_API_KEY')

    out = {'last_updated': datetime.datetime.utcnow().isoformat()}

    print('Fetching Semantic Scholar metrics...')
    ss = fetch_semantic_scholar(semantic_id)
    if ss:
        out['semantic_scholar'] = ss

    # Optionally fetch Web of Science metrics if API details are provided
    if wos_api_url and wos_api_key:
        print('Fetching Web of Science metrics...')
        wos = fetch_wos(wos_id, wos_api_url, wos_api_key)
        if wos:
            out['web_of_science'] = wos

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with OUT_PATH.open('w', encoding='utf8') as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
    print('Saved metrics to', OUT_PATH)

if __name__ == '__main__':
    main()
