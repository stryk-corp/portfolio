# migrate_sample.py
# REMOVED: Modernization toolkit content removed.

"""This file has been removed as part of the modernization toolkit cleanup."""

import csv
import json

INPUT_CSV = 'sample_export.csv'
# migrate_sample.py
# Example: read CSV and produce normalized JSON
import csv
import json

INPUT_CSV = 'sample_export.csv'
OUTPUT_JSON = 'normalized.json'

def normalize_row(row):
    return {
        'id': int(row.get('id') or 0),
        'name': row.get('name') or '',
        'email': row.get('email') or '',
        'created_at': row.get('created_at') or None
    }

if __name__ == '__main__':
    rows = []
    try:
        with open(INPUT_CSV, newline='', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for r in reader:
                rows.append(normalize_row(r))
    except FileNotFoundError:
        print('Sample CSV not found, writing a small sample...')
        sample = [{'id':1,'name':'Alice','email':'alice@example.com','created_at':'2023-01-01'}]
        with open(INPUT_CSV, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=['id','name','email','created_at'])
            writer.writeheader()
            for s in sample:
                writer.writerow(s)
        rows = sample

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as out:
        json.dump(rows, out, indent=2)

    print(f'Wrote {len(rows)} records to {OUTPUT_JSON}')