#!/usr/bin/env python3
"""Scala verify_results.json + verify_results_extra.json, deduplikuje
i generuje src/data/tools.json — kuratorowany katalog narzędzi dla hostów.

Wybór narzędzi: tylko zweryfikowane OK (istnieją na GitHub), z polskim
opisem i kategorią. Skrypt padnie głośno, jeśli któreś wybrane repo
nie przeszło weryfikacji.
"""
import json
from pathlib import Path

SCRIPTS = Path("/home/blaise/MARKETING/platforma/scripts")
DATA_DIR = Path("/home/blaise/MARKETING/platforma/src/data")
DATA_DIR.mkdir(parents=True, exist_ok=True)

# --- scal i deduplikuj wyniki weryfikacji ---
merged = {}
for fname in ("verify_results.json", "verify_results_extra.json"):
    p = SCRIPTS / fname
    if not p.exists():
        continue
    for r in json.loads(p.read_text(encoding="utf-8")):
        name = r.get("full_name")
        if not name:
            continue
        if r.get("ok") or name not in merged:
            merged[name] = r

ghosts = sorted(n for n, r in merged.items() if not r["ok"])

# --- kuratorowany wybór: full_name -> (kategoria, krótki opis PL, dla kogo) ---
# Kategorie: pms, ical, locks, ai, comm, auto, data
TOOLS = {
    # --- PMS / zarządzanie obiektem ---
    "aelassas/movinin": ("pms", "Kompletna platforma zarządzania najmem: panel admina, frontend rezerwacji i aplikacja mobilna. Licencja MIT pozwala używać komercyjnie.", "Direct booking engine dla hosta z kilkoma obiektami"),
    "microrealestate/microrealestate": ("pms", "System dla wynajmujących: najemcy, czynsze, dokumenty, umowy. Wzorzec rozliczeń właścicielskich (owner statements).", "Moduł rozliczeń dla zarządzających wieloma obiektami"),
    "open-condo-software/condo": ("pms", "Ticketing usterek, kontakty, faktury, mini-aplikacje. Dojrzały wzorzec modułowego systemu serwisowego.", "Śledzenie usterek i zleceń napraw"),
    "Qloapps/QloApps": ("pms", "Hotelowy PMS z booking engine i modułem housekeeping. Ciężki, ale dojrzały — jako referencja lub hosting dla większego obiektu.", "Większe obiekty / pensjonaty"),
    "Kamra-PMS/kamra-pms": ("pms", "PMS z fakturowaniem na frameworku Frappe (Python).", "Fakturowanie najmu — kraje wymagające faktur"),
    "pesanio/pesan-pms": ("pms", "Lekki PMS (Bun + React, MIT) — zarządzanie obiektami i rezerwacjami.", "Prosty starter PMS do własnej rozbudowy"),
    "captainarcher/roost": ("pms", "Operacje najmu w Python/FastAPI (Apache-2.0).", "Baza pod własne narzędzie operacyjne w Pythonie"),
    "Gribadan/RentTools.io": ("ical", "Narzędzia dla gospodarzy oparte o kalendarze iCal (Next.js + SQLite, MIT).", "Sync kalendarzy wielu kanałów"),
    "senatroxx/OpenKos": ("pms", "Najem krótko- i długoterminowy w Laravelu (MIT).", "Mieszany portfel najmu"),
    # --- Kalendarze iCal ---
    "pixelcrash/Sync-Rentals-Calendar": ("ical", "Najprostszy self-hosted sync kalendarzy Airbnb/Booking — PHP, na własnym serwerze.", "Pierwszy krok do własnej automatyzacji kalendarza"),
    "jens-maus/node-ical": ("ical", "Parser iCal dla Node z obsługą URL i reguł cyklicznych (Apache-2.0).", "Komponent do budowy własnych integracji"),
    "collective/icalendar": ("ical", "Standardowy parser/generator iCal w Pythonie (BSD).", "Komponent bazowy dla Pythona"),
    "ics-py/ics-py": ("ical", "Pythoniczne czytanie i tworzenie plików ICS.", "Generowanie np. kalendarza sprzątań dla ekipy"),
    "kewisch/ical.js": ("ical", "Parser iCal/vCard w JS używany w Thunderbirdzie (MPL-2.0).", "Parser do dashboardów frontendowych"),
    "niccokunzmann/python-recurring-ical-events": ("ical", "Rozwijanie zdarzeń cyklicznych z ICS (LGPL-3.0).", "Cykliczne kontrole i zadania"),
    "Kozea/Radicale": ("ical", "Lekki serwer CalDAV — self-hosted magazyn kalendarzy subskrybowanych w telefonie (GPL: używać jako usługa, nie odsprzedawać zmodyfikowanego).", "Wspólny kalendarz dla ekipy sprzątającej"),
    "nextcloud/calendar": ("ical", "Kalendarz z subskrypcją iCal — jeśli już używasz Nextclouda (AGPL).", "Hosty już na Nextcloudzie"),
    # --- Zamki / IoT ---
    "tykeal/homeassistant-rental-control": ("locks", "Najdojrzalsza open-source ścieżka iCal → kod do zamka: czyta kalendarz Airbnb, generuje kody w turnusach check-in/out (Apache-2.0).", "Automatyczne kody do drzwi z rezerwacji"),
    "FutureTense/keymaster": ("locks", "Zarządzanie slotami kodów w zamkach Z-Wave/Zigbee w Home Assistant (MIT).", "Para do Rental Control"),
    "home-assistant/core": ("locks", "Hub IoT dla apartamentu: temperatura, hałas, wycieki, energia → alerty (Apache-2.0, 75k+ gwiazdek).", "Monitoring obiektu bez abonamentu"),
    "seamapi/python": ("locks", "Ujednolicone SDK do zamków August, Yale, Schlage, Nuki, TTLock (MIT; samo API Seam płatne).", "Wielozamkowe portfele 20+ obiektów"),
    "pschmitt/pynuki": ("locks", "Klient Python dla Nuki Bridge — integracja bez chmury (GPL-3.0).", "Hosty z zamkami Nuki"),
    "esphome/esphome": ("locks", "Firmware dla własnych czujników (hałas, wilgoć) za kilkadziesiąt złotych.", "DIY czujniki do demo"),
    "Koenkk/zigbee2mqtt": ("locks", "Bramka Zigbee → MQTT dla tanich czujników (GPL-3.0).", "Sensorika obiektu bez chmury"),
    # --- AI / automatyzacja ---
    "openbnb-org/mcp-server-airbnb": ("ai", "Serwer MCP: agent AI przeszukuje oferty Airbnb (MIT). Wzorzec do budowy własnego MCP dla PMS.", "Analiza konkurencji przez agenta AI"),
    "prosperkartik/hostaway-mcp": ("ai", "Serwer MCP dla PMS Hostaway — dowód wzorca 'MCP dla systemu najmu' (MIT).", "Wzorzec integracji agent ↔ PMS"),
    "n8n-io/n8n": ("auto", "Wizualna automatyzacja workflow z węzłami AI, HTTP, cron (fair-code: wewnętrzne użycie i wdrożenia u klientów OK, hostowanie jako własny SaaS NIE).", "Automatyzacje bez kodu — kursy no-code"),
    "activepieces/activepieces": ("auto", "Alternatywa dla n8n z czystym MIT — można osadzać we własnym produkcie.", "Automatyzacje embedowane w produkcie"),
    "FlowiseAI/Flowise": ("ai", "Wizualny builder agentów LLM/RAG — demo AI koncjercierka w 20 minut (Apache-2.0 core).", "Szybkie demo AI dla gości"),
    "langflow-ai/langflow": ("ai", "Wizualny builder przepływów LLM w Pythonie (MIT).", "Prototypowanie agentów bez kodu"),
    # --- Komunikacja ---
    "chatwoot/chatwoot": ("comm", "Omnichannel inbox: WhatsApp, Telegram, e-mail, czat na stronie — gotowy frontend operatora (MIT core, 36k+ gwiazdek).", "Wspólna skrzynka gości i właścicieli"),
    "evolution-foundation/evolution-api": ("comm", "Self-hosted API WhatsApp z webhookami (Apache-2.0; część kanałów nieoficjalna — ryzyko banów).", "Komunikacja z ekipą sprzątającą"),
    "WhiskeySockets/Baileys": ("comm", "Biblioteka WhatsApp Web (MIT) — komponent pod Evolution API (ToS WhatsApp).", "Prototypy integracji WA"),
    "wwebjs/whatsapp-web.js": ("comm", "Klient WhatsApp Web przez Puppeteer (Apache-2.0, 22k+ gwiazdek).", "Szybkie prototypy WA"),
    "devlikeapro/waha": ("comm", "WhatsApp HTTP API w Dockerze (Core darmowy).", "Alternatywa dla Evolution"),
    "python-telegram-bot/python-telegram-bot": ("comm", "Pełny wrapper Telegram Bot API (LGPL-3.0, 29k+ gwiazdek).", "Boty dla ekip i alertów"),
    "aiogram/aiogram": ("comm", "Async framework Telegram z czystym MIT.", "Boty — gdy liczy się licencja"),
    "grammyjs/grammY": ("comm", "Nowoczesny framework Telegram dla TS (MIT).", "Boty w Node"),
    "freescout-help-desk/freescout": ("comm", "Lekki helpdesk e-mail — skrzynka dla wiadomości Booking.com, które przychodzą mailem (AGPL-3.0).", "Tickety z maili OTA"),
    # --- Dane / ceny ---
    "johnbalvin/pyairbnb": ("data", "Scraper Airbnb: ceny, recenzje, kalendarze (MIT; uwaga na ToS Airbnb — tylko dane publiczne).", "Research konkurencji"),
    "rsanjabi/short-term-rentals-warehouse": ("data", "Hurtownia BI danych najmu: dbt + model danych (MIT).", "Wzorzec raportów rentowności"),
    "UPGo-McGill/strr": ("data", "Akademickie narzędzia analizy rynku najmu krótkoterminowego (R).", "Metodologia analizy rynku"),
    "api-evangelist/beds24": ("data", "Specyfikacja OpenAPI Beds24 — mapa endpointów przed budową integracji.", "Dokumentacja API Beds24"),
    "Hostaway/api": ("data", "Dokumentacja API Hostaway w formacie Slate (MIT).", "Wzorzec dokumentacji API PMS"),
    # --- Sprzątanie / operacje ---
    "lkilpatrick/OpenSTR": ("pms", "Self-hosted zarządzanie sprzątaniem: checklisty, obowiązkowe zdjęcia before/after (GPL-3.0 — jako inspiracja/własna instancja).", "Kontrola jakości sprzątania"),
    "DrBookings/drbookings": ("pms", "Desktop: rezerwacje + plan sprzątań + finanse w jednym (Java).", "Inspircja: iCal → sprzątanie → finanse"),
}

catalog = []
missing = []
for full_name, (cat, desc, who) in TOOLS.items():
    r = merged.get(full_name)
    if not r or not r.get("ok"):
        missing.append(full_name)
        continue
    catalog.append({
        "name": full_name.split("/")[1],
        "repo": full_name,
        "url": r.get("html_url") or f"https://github.com/{full_name}",
        "category": cat,
        "description": desc,
        "who": who,
        "stars": r.get("stars"),
        "license": r.get("license") or "brak/zobacz w repo",
        "pushed_at": (r.get("pushed_at") or "")[:10],
        "archived": bool(r.get("archived")),
    })

if missing:
    print("UWAGA — wybrane, ale NIE zweryfikowane jako OK (pomijam):")
    for m in missing:
        print("  -", m)

catalog.sort(key=lambda t: (t["category"], -(t["stars"] or 0)))
out = DATA_DIR / "tools.json"
out.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")

# --- raport ---
(SCRIPTS / "ghost_repos.md").write_text(
    "# Repozytoria-widma z researchu (404 na GitHub)\n\n"
    + "Te projekty NIE istnieją pod podanym adresem — nie publikować w katalogu,\n"
    + "przywrócić tylko po ręcznym znalezieniu prawdziwego adresu:\n\n"
    + "\n".join(f"- {g}" for g in ghosts) + "\n",
    encoding="utf-8")

print(f"Katalog: {len(catalog)} narzędzi -> {out}")
print(f"Widma (404): {len(ghosts)} -> {SCRIPTS/'ghost_repos.md'}")
cats = {}
for t in catalog:
    cats[t["category"]] = cats.get(t["category"], 0) + 1
print("Kategorie:", ", ".join(f"{k}={v}" for k, v in sorted(cats.items())))
