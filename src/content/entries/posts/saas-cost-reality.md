---
title: "What you actually pay for rental SaaS"
description: "A host with five units can quietly spend 300–800 PLN a month on tools. Free alternatives cover more of that bill than people expect."
date: 2026-09-08
type: post
ownership: mine
tags: [costs, saas, open-source, notes]
readingTime: "6 min"
featured: false
---

Subscription prices never hurt in isolation. Add the quarterly statements and most hosts are surprised.

## A rough table (5 units, PL, 2026)

| Job | Typical SaaS | Free-ish stand-in |
|---|---|---|
| Channel / iCal sync | 150–400 PLN/mo | merge script + cron |
| Lock codes from bookings | 100–250 PLN/mo | Home Assistant + a small script |
| Guest message inbox | 80–200 PLN/mo | FreeScout + Telegram bot |
| Cleaner scheduling | 100–200 PLN/mo | shared iCal + chat |
| Profit reports | 150–300 PLN/mo | Metabase on your own data |

SaaS total: **580–1350 PLN/mo**. Yearly: **7–16k PLN**. That’s real money for tools that, once configured, don’t need someone else’s cloud.

## The honest “but”

Open source is free of license fees, not free of work:

1. Someone has to set it up — hours, once.
2. Someone has to keep it alive — hours per month, not days.
3. Docs are often English-only.

Rule of thumb: automate the stable processes (calendars, codes, alerts) with open source; pay for SaaS where support and uptime are the product (e.g. a channel manager at 10+ channels).

## Three numbers before the next checkout

1. Hours/month the manual process costs you now
2. SaaS cost per year, tax included
3. Months until setup hours would pay for themselves on open source

If (3) is under twelve, look harder at the free stack.
