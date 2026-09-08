---
title: "iCal Cleaner"
description: "A small Python utility that merges iCal feeds from multiple booking channels into one tidy calendar file."
date: 2026-08-10
type: project
ownership: mine
featured: true
tags: [python, ical, calendars, cli]
github: https://github.com/example/ical-cleaner
why: "Channel managers are expensive for a simple merge. This does the 80% case in under a hundred lines."
install: |
  git clone https://github.com/example/ical-cleaner
  cd ical-cleaner
  python -m venv .venv && source .venv/bin/activate
  pip install -r requirements.txt
  python cleaner.py --inputs airbnb.ics booking.ics --out combined.ics
readingTime: "4 min"
---

## What it does

Point it at several `.ics` files (or URLs), and it produces a single, de-duplicated calendar. Overlaps get flagged instead of silently dropped.

## Why I built it

Most short-term rental hosts juggle Airbnb, Booking.com, and a direct calendar. Paid channel managers solve this — and bill monthly for what is essentially HTTP + parsing.

## Status

Working prototype. The merge logic is solid; the CLI flags could be cleaner. Issues and PRs welcome once the public repo is up.
