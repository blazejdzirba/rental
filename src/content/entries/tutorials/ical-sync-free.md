---
title: "Free iCal sync between booking channels"
description: "Merge Airbnb, Booking.com and direct calendars without a channel manager. Cron, a script, done."
date: 2026-08-28
type: tutorial
ownership: mine
tags: [ical, calendars, tutorial, python]
readingTime: "7 min"
---

If you only need **block-out sync** (not full two-way pricing and content), you do not need a channel manager.

## The shape of the solution

1. Each channel exports an `.ics` feed
2. A script downloads and merges them on a schedule
3. Each channel imports the merged feed as an “external calendar”

## Minimal merger

```python
from icalendar import Calendar
from pathlib import Path

def load(path: str) -> Calendar:
    return Calendar.from_ical(Path(path).read_bytes())

def merge(paths: list[str]) -> Calendar:
    out = Calendar()
    out.add("prodid", "-//ical-cleaner//EN")
    out.add("version", "2.0")
    seen = set()
    for p in paths:
        cal = load(p)
        for component in cal.walk():
            if component.name != "VEVENT":
                continue
            uid = str(component.get("uid"))
            if uid in seen:
                continue
            seen.add(uid)
            out.add_component(component)
    return out

if __name__ == "__main__":
    cal = merge(["airbnb.ics", "booking.ics", "direct.ics"])
    Path("combined.ics").write_bytes(cal.to_ical())
```

## Cron

```bash
*/30 * * * *  cd /opt/ical && ./fetch-and-merge.sh >> /var/log/ical-sync.log 2>&1
```

Serve `combined.ics` over HTTPS (even a static file on Caddy is fine). Point each channel’s “block calendar” URL at it.

## Watch-outs

- Some channels cache external calendars aggressively — allow an hour when testing
- UIDs must be stable or you’ll duplicate events
- This does **not** push prices or listing content — only availability blocks
