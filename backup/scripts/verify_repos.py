#!/usr/bin/env python3
"""Weryfikacja repozytoriów GitHub przez API (bez tokenu, limit 60 req/h).

Wczytuje listę owner/repo z repo_list.txt (jedna nazwa na linię),
odpytuje api.github.com/repos/{owner}/{repo} i zapisuje wynik do verify_results.json.
"""
import json
import time
import urllib.request
import urllib.error
from pathlib import Path

HERE = Path(__file__).parent
REPOS_FILE = HERE / "repo_list.txt"
OUT_FILE = HERE / "verify_results.json"


def load_repos():
    repos = []
    for line in REPOS_FILE.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        # format: owner/repo|etykieta kategorii (etykieta ignorowana przy API)
        slug = line.split("|")[0].strip()
        if "/" in slug:
            repos.append(slug)
    return repos


def fetch_repo(slug):
    url = f"https://api.github.com/repos/{slug}"
    req = urllib.request.Request(url, headers={
        "Accept": "application/vnd.github+json",
        "User-Agent": "repo-verify-script",
    })
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            data = json.loads(r.read().decode())
            return {
                "ok": True,
                "full_name": data.get("full_name"),
                "description": data.get("description"),
                "stars": data.get("stargazers_count"),
                "forks": data.get("forks_count"),
                "pushed_at": data.get("pushed_at"),
                "license": (data.get("license") or {}).get("spdx_id"),
                "archived": data.get("archived"),
                "html_url": data.get("html_url"),
                "message": None,
            }
    except urllib.error.HTTPError as e:
        return {"ok": False, "full_name": slug, "message": f"HTTP {e.code}"}
    except Exception as e:  # sieciowe/timeout
        return {"ok": False, "full_name": slug, "message": str(e)}


def main():
    repos = load_repos()
    print(f"Sprawdzam {len(repos)} repozytoriów...")
    results = []
    for i, slug in enumerate(repos, 1):
        res = fetch_repo(slug)
        status = "OK " if res["ok"] else "FAIL"
        print(f"[{i:2}/{len(repos)}] {status} {slug}"
              + (f"  gwiazdki={res['stars']} licencja={res['license']}"
                 if res["ok"] else f"  -> {res['message']}"))
        results.append(res)
        if i < len(repos):
            time.sleep(0.4)  # ostrożnie z limitem 60/h bez tokenu
    OUT_FILE.write_text(
        json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    ok = sum(1 for r in results if r["ok"])
    print(f"\nZapisano {len(results)} wyników do {OUT_FILE.name}: {ok} OK, "
          f"{len(results) - ok} nie istnieje/błąd.")


if __name__ == "__main__":
    main()
