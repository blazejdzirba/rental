---
title: "Zanim użyjesz darmowego narzędzia z GitHub: licencje dla hostów, łamanie po polsku"
description: "MIT, Apache, GPL, AGPL — co wolno Ci robić z darmowym narzędziem jako host najmu krótkoterminowego, a co grozi mandatem. Bez prawnika, na przykładach."
pubDate: 2026-09-08
tags: ["licencje", "open-source", "poradnik"]
---

Darmowe nie znaczy „rób co chcesz”. Każde narzędzie z [katalogu](/narzedzia/) ma licencję,
która mówi, co wolno Ci zrobić z kodem. Krótki przewodnik dla hosta — bez prawnika.

## Trzy kolory, którymi oznaczam narzędzia

- **Zielony (MIT, Apache-2.0, BSD)** — używaj jak chcesz: komercyjnie, w swojej ofercie,
  zmodyfikowany, nawet sprzedawaj. Jedyne wymagania: zachowaj informację o autorach w plikach
  licencji. To jest „darmowe” w potocznym sensie.
- **Żółty (GPL, AGPL, LGPL, MPL)** — wolno Ci **używać** narzędzia (uruchamiać je dla siebie
  i klientów), ale jeśli zmienisz kod i rozpowszechniasz go dalej, musisz udostępnić swoje
  zmiany na tych samych zasadach. AGPL dodatkowo „widzi” przez serwer. Praktyczna zasada dla hosta:
  **używaj jako usługi, nie wbuduj w produkt, który sprzedajesz**.
- **Czerwony (brak licencji)** — „all rights reserved”. Autor nie dał Ci żadnych praw.
  Możesz patrzeć i uczyć się, ale nie kopiuj kodu.

## Co to znaczy dla Twojego biznesu

1. **PMS na MIT (np. Movin' In)** — możesz go postawić dla swoich obiektów, zmienić logo
   i obsługiwać nim 10 apartamentów. Możesz nawet wziąć pieniądze od innych hostów za „zarządzanie
   ich obiektami w Twoim systemie”.
2. **Narzędzie na AGPL (np. FreeScout)** — postaw dla siebie, podłącz maila Booking.com,
   używaj. Nie pakuj jego kodu w aplikację, którą sprzedasz jako swoją.
3. **Scraper (np. pyairbnb)** — licencja MIT, ale to **warunki Airbnb**, nie licencja, są tu
   problemem. Publiczne dane do analizy własnej — OK; systematyczne masowe pobieranie — ryzyko.

## Szybka ściąga

| Chcesz… | Licencja, której szukasz |
|---|---|
| używać narzędzia w swojej firmie | dowolna z zielonych |
| wbudować w usługę dla klientów | MIT / Apache / BSD |
| zmienić kod narzędzia dla siebie | dowolna, ale GPL wymaga publikacji zmian |
| sprzedawać zmodyfikowaną wersję | tylko MIT / Apache / BSD |

## Lista kontrolna przed wdrożeniem

1. Sprawdź plik `LICENSE` w repo (nie opis na stronie).
2. Jeśli GPL/AGPL: planujesz używać jako usługa? Jeśli tak — spokój.
3. Jeśli brak licencji: napisz do autora o zgodę albo wybierz coś innego z katalogu.
4. Zachowaj oryginalne pliki licencji w swoich wdrożeniach (to obowiązek w MIT/Apache).

---

Chcesz, żebym sprawdził licencje pod Twoje konkretne wdrożenie? [Napisz](/kontakt/) — audyt
zaczyna się od 490 zł.
