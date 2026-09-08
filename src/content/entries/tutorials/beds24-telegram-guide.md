---
title: "How to wire Beds24 to Telegram"
description: "Free booking alerts on your phone. Your bot, your server, no subscription. Step-by-step."
date: 2026-09-01
type: tutorial
ownership: mine
tags: [beds24, telegram, automation, tutorial]
readingTime: "9 min"
github: https://github.com/example/beds24-telegram
featured: false
---

Instead of refreshing the Beds24 panel, let it message you. Below is the simplest fully free version: Beds24 hook → small script on your server → Telegram bot. Cost: 0 / month (assuming you already have a VPS).

## What you get

- Instant phone message on events you choose (new booking, cancellation, modification)
- Full control over copy, recipients, and event types
- No middlemen

## What you need

1. Beds24 account with webhook settings
2. A Telegram bot (two minutes with BotFather)
3. An HTTPS URL on a server you control (Caddy makes certificates easy)

## 1. Create the bot

1. Open Telegram → **@BotFather** → `/newbot`
2. Pick a name and username
3. Save the **token** — treat it like a password

## 2. Get your chat_id

1. Message your new bot anything
2. Open `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Find `"chat":{"id":123456789}` — that’s your `chat_id`

## 3. Webhook in Beds24

**Settings → Hooks** and add:

1. Events — start with one (`Booking created`)
2. URL — e.g. `https://your-server.example/hook/beds24`
3. Optional shared secret header

## 4. The endpoint

```bash
pip install fastapi uvicorn httpx
```

`webhook.py`:

```python
import os
import httpx
from fastapi import FastAPI, Request, HTTPException

app = FastAPI()

TOKEN = os.environ["TG_BOT_TOKEN"]
CHAT_ID = os.environ["TG_CHAT_ID"]
SECRET = os.environ.get("HOOK_SECRET")

@app.post("/hook/beds24")
async def beds24_hook(request: Request):
    if SECRET and request.headers.get("x-hook-secret") != SECRET:
        raise HTTPException(status_code=403)

    data = await request.json()
    event = data.get("hook_name") or data.get("event") or "event"
    fields = data.get("data") or data
    lines = [f"Beds24: {event}"]
    if isinstance(fields, dict):
        lines += [f"{k}: {v}" for k, v in list(fields.items())[:8]]
    text = "\n".join(lines)

    async with httpx.AsyncClient(timeout=10) as client:
        await client.post(
            f"https://api.telegram.org/bot{TOKEN}/sendMessage",
            json={"chat_id": CHAT_ID, "text": text},
        )
    return {"ok": True}
```

Run it:

```bash
TG_BOT_TOKEN="..." TG_CHAT_ID="123456789" HOOK_SECRET="..." \
  uvicorn webhook:app --host 0.0.0.0 --port 8000
```

**Tip:** log the raw payload on the first few events — Beds24 field shapes vary. Shape the message after you’ve seen real data.

## 5. HTTPS and autostart

```text
# Caddyfile
your-server.example {
    reverse_proxy localhost:8000
}
```

- Prefer an unguessable path (`/hook/x8k2m9`)
- Verify a secret header if Beds24 allows it
- `systemd` or `pm2` for restart on reboot

## Test

1. Trigger a test hook in Beds24 (or wait for a real event)
2. Check reverse-proxy and app logs for the POST
3. Telegram should show the message

## Limits

This is one-way: alerts in, no guest replies out. Auto-replies need the Beds24 API and a proper bot framework — a separate guide.
