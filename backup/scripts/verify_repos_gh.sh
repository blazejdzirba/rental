#!/usr/bin/env bash
# Weryfikacja pozostałych repozytoriów przez gh CLI (bez limitu 60/h).
# Czyta repo_list.txt, pomija te już zweryfikowane OK w verify_results.json,
# i dopisuje wyniki do verify_results_extra.json w tym samym formacie.
set -u
cd "$(dirname "$0")"

python3 - <<'EOF'
import json, subprocess, time
from pathlib import Path

HERE = Path(__file__).parent if '__file__' in dir() else Path('.')
HERE = Path('/home/blaise/MARKETING/platforma/scripts')
repos = []
for line in (HERE / 'repo_list.txt').read_text().splitlines():
    line = line.strip()
    if line and not line.startswith('#'):
        repos.append(line.split('|')[0].strip())

done = set()
res_files = [HERE / 'verify_results.json', HERE / 'verify_results_extra.json']
out = []
for f in res_files:
    if f.exists():
        for r in json.loads(f.read_text()):
            if r.get('ok'):
                done.add(r['full_name'])
            out.append(r) if f.name.endswith('extra.json') else None

results = []
for slug in repos:
    if slug in done:
        continue
    p = subprocess.run(
        ['gh', 'api', f'repos/{slug}', '--jq',
         '{full_name: .full_name, description: .description, stars: .stargazers_count, forks: .forks_count, pushed_at: .pushed_at, license: .license.spdx_id, archived: .archived, html_url: .html_url}'],
        capture_output=True, text=True, timeout=30)
    if p.returncode == 0:
        d = json.loads(p.stdout)
        d['ok'] = True
        d['message'] = None
    else:
        code = p.stderr.strip().splitlines()
        msg = next((l for l in code if '"message"' in l or 'Not Found' in l), p.stderr.strip()[:120])
        d = {'ok': False, 'full_name': slug, 'message': msg[:160]}
    results.append(d)
    status = 'OK ' if d['ok'] else 'FAIL'
    extra = f"  stars={d.get('stars')} lic={d.get('license')}" if d['ok'] else f"  -> {d['message'][:60]}"
    print(f"[{status}] {slug}{extra}")
    time.sleep(0.15)

(HERE / 'verify_results_extra.json').write_text(json.dumps(results, ensure_ascii=False, indent=2))
ok = sum(1 for r in results if r['ok'])
print(f"\nExtra: {len(results)} sprawdzonych, {ok} OK, {len(results)-ok} FAIL")
EOF
