---
type: project
title: pricing-sync-cli
description: A small CLI that keeps calendar pricing in sync across two booking platforms.
date: 2026-08-12
tags: [CLI, Automation, TypeScript]
featured: true
status: active
repoUrl: https://github.com/blaisedev/pricing-sync-cli
stack: [TypeScript, Node.js, SQLite]
---

I kept manually copying prices between two calendars every week, so I wrote
a CLI that does it on a cron job instead. Nothing fancy — reads one source
of truth, pushes diffs to the other side, logs what changed.

Still rough around the edges, but it's saved me a couple hours a week since June.
