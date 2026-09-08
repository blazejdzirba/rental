---
title: "Jak podpiąć Beds24 do Telegrama"
description: "Darmowe powiadomienia o rezerwacjach, anulowaniach i zmianach kalendarza prosto na Twój telefon. Własny bot, własny serwer, zero abonamentu."
pubDate: 2026-09-01
tags: ["beds24", "telegram", "automatyzacja"]
readingTime: "9 min"
---

Zamiast co godzinę odświeżać panel Beds24, niech on sam napisze do Ciebie — na Telegrama.
Poniżej najprostsza, w pełni darmowa wersja: hook z Beds24 → mały skrypt na Twoim serwerze →
wiadomość do Twojego bota. Koszt: 0 zł/mies. (zakładając, że masz VPS — jeśli nie, zacznij od
najtańszego dostępnego, wystarczy 1 vCPU).

## Co dostaniesz

- natychmiastową wiadomość na telefon przy zdarzeniu, które wybierzesz (np. nowa rezerwacja,
  anulowanie, zmiana danych rezerwacji),
- pełną kontrolę: treść, do kogo, jakie zdarzenia,
- zero abonamentów i zero pośredników.

## Czego potrzebujesz

1. Konto Beds24 (z dostępem do ustawień hooków/webhooków).
2. Bot w Telegramie (uruchomisz w 2 minuty).
3. Adres URL do Twojego serwera z protokołem HTTPS (VPS + dowolny serwer web; do HTTPS
   polecam Caddy — certyfikat załatwia sam).

## Krok 1. Stwórz bota w Telegramie

1. Otwórz Telegrama i znajdź **@BotFather** → `/newbot`.
2. Podaj nazwę i użytkownika bota (np. `TwojNajemBot` / `twoj_najem_bot`).
3. Zapisz **token** — wygląda jak `123456789:AAH...`. Trzymaj go jak hasło.

## Krok 2. Pobierz swój chat_id

1. Napisz do swojego bota cokolwiek (np. `start`).
2. Otwórz w przeglądarce: `https://api.telegram.org/bot<TOKEN>/getUpdates`.
3. W odpowiedzi JSON znajdziesz `"chat":{"id":123456789}` — to Twój `chat_id`.

## Krok 3. Stwórz webhook w Beds24

W panelu Beds24 wejdź w **Ustawienia → Hooks (Webhooks)** i dodaj nowy hook:

1. **Zdarzenia** — zaznacz te, które Cię interesują (np. `Booking created`, `Booking cancelled`,
   `Reservation modified`). Zaczynaj od jednego, żeby nie tonąć w wiadomościach.
2. **URL** — podaj adres swojego endpointu, np. `https://twoj-serwer.pl/hook/beds24`.
3. Jeśli Beds24 oferuje pole na dodatkowe nagłówki/sekret — użyj go (patrz Krok 5).

Od tej chwili Beds24 przy każdym wybranym zdarzeniu wyśle do Twojego URL-a żądanie POST z
danych tego zdarzenia.

## Krok 4. Endpoint, który wysyła wiadomość

Minimalny serwer w Pythonie (FastAPI) — na serwerze:

```bash
pip install fastapi uvicorn httpx
```

`webhook.py`:

```python
import os

import httpx
from fastapi import FastAPI, Request, HTTPException

app = FastAPI()

TOKEN = os.environ["TG_BOT_TOKEN"]   # token z kroku 1
CHAT_ID = os.environ["TG_CHAT_ID"]   # chat_id z kroku 2
SECRET = os.environ.get("HOOK_SECRET")  # opcjonalny wspólny sekret z Beds24


@app.post("/hook/beds24")
async def beds24_hook(request: Request):
    # Weryfikacja sekretu (jeśli podałeś go w ustawieniach hooka)
    if SECRET and request.headers.get("x-hook-secret") != SECRET:
        raise HTTPException(status_code=403)

    data = await request.json()

    # Struktura payloadu zależy od zdarzenia — na start zaloguj całość
    # (print(data)), sprawdź, jakie pola interesują Ciebie, i zbuduj treść.
    event = data.get("hook_name") or data.get("event") or "zdarzenie"
    fields = data.get("data") or data
    lines = [f"🔔 Beds24: {event}"]
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

Uruchomienie:

```bash
TG_BOT_TOKEN="..." TG_CHAT_ID="123456789" HOOK_SECRET="..." \
  uvicorn webhook:app --host 0.0.0.0 --port 8000
```

**Ważne:** dokładnie nie znam struktury payloadu dla każdego zdarzenia (Beds24 zmienia formaty) —
dlatego skrypt na start loguje całość (`print(data)`). Obejrzyj 2–3 pierwsze zdarzenia i
dopasuj listę pól do tego, co chcesz widzieć.

## Krok 5. HTTPS, firewall i auto-start

```Caddyfile
# Caddyfile — Caddy sam wystawi i odnowi certyfikat
twoj-serwer.pl {
    reverse_proxy localhost:8000
}
```

- **Nagłówek sekretu** — jeśli Beds24 pozwala na dodatkowe nagłówki, wstaw `x-hook-secret`
  z losową wartością (skrypt powyżej go weryfikuje).
- **Nieprzewidywalny path** — `/hook/beds24` jest OK, ale lepiej `/hook/x8k2m9` —
  chroni przed losowymi skanami internetu.
- **Auto-start** — systemd albo `pm2 start webhook.py --name beds24-webhook && pm2 save`.

## Testowanie

1. W panelu Beds24 wyszukaj opcję testu hooka (jednorazowe wywołanie) — albo poczekaj na
   pierwsze naturalne zdarzenie.
2. Sprawdź `journalctl -u caddy` / logi uvicorn, że dotarł POST.
3. Telegram: powinna pojawić się wiadomość z nagłówkiem zdarzenia.

## Ograniczenia i następne kroki

- To **jednostronna** automatyzacja: dostajesz powiadomienia, ale nie odpowiadasz gościom.
  Na auto-odpowiady gości potrzebujesz API Beds24 + frameworka botowego (aiogram/grammy —
  oba w [katalogu](/narzedzia/)) i osobnego poradnika, który powstaje.
- Hooki to „push”. Jeśli wolisz „pull” (sam co godzinę sprawdzasz API), Beds24 ma API
  REST — to temat na kolejny wpis.

Masz inne zdarzenie, które chcesz łapać (np. zmiana cen, wiadomość gościa)? Napisz przez
[stronę kontaktową](/kontakt/) — jeśli temat się powtórzy, powstanie z niego osobny poradnik.
