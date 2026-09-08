---
title: "Beds24 → Telegram"
description: "A tiny FastAPI webhook that forwards Beds24 booking events to a Telegram bot. Zero monthly cost."
date: 2026-08-20
type: project
ownership: mine
featured: true
tags: [python, telegram, beds24, automation]
github: https://github.com/example/beds24-telegram
why: "I was tired of refreshing a PMS panel. Push notifications on my phone took one evening."
install: |
  pip install fastapi uvicorn httpx
  export TG_BOT_TOKEN=...
  export TG_CHAT_ID=...
  uvicorn webhook:app --host 0.0.0.0 --port 8000
readingTime: "6 min"
exploring: false
---

## The idea

Beds24 fires webhooks. Telegram has a dead-simple `sendMessage` API. Glue them with ~40 lines of Python and you get instant booking alerts without another SaaS.

## Stack

- FastAPI for the webhook endpoint
- httpx for outbound Telegram calls
- Caddy in front for automatic HTTPS

A full walkthrough lives in the tutorial:
[How to wire Beds24 to Telegram](/entries/tutorials/beds24-telegram-guide/).
