---
title: "Ile naprawdę płacisz za SaaS-y do najmu? Policz to, zanim kupisz kolejny"
description: "PMS, channel manager, narzędzie do sprzątania, dynamiczne ceny — host z 5 obiektów płaci 300–800 zł/mies. Pokazuję, ile z tego pokrywają darmowe odpowiedniki z katalogu."
pubDate: 2026-09-08
tags: ["koszty", "saas", "open-source"]
readingTime: "6 min"
---

Cena abonamentu nigdy nie boli, bo jest rozłożona. Ale zsumuj kwartalne wyciągi — większość
hostów tego nie robi.

## Tabela prawdy (5 obiektów, PL, 2026)

| Funkcja | Typowy SaaS | Darmowy odpowiednik z katalogu |
|---|---|---|
| Channel manager / sync iCal | 150–400 zł/mies | Sync-Rentals-Calendar + cron |
| Kody do zamków z rezerwacji | 100–250 zł/mies | Home Assistant + własny skrypt |
| Skrzynka wiadomości gości | 80–200 zł/mies | FreeScout + bot Telegram |
| Plan sprzątań dla ekipy | 100–200 zł/mies | własny kalendarz iCal + czat |
| Raporty rentowności | 150–300 zł/mies | Metabase + dbt (wzorce warehouse) |

Suma SaaS: **580–1350 zł/mies.** Rocznie: **7–16 tys. zł.** To ceny za narzędzia, które
raz skonfigurowane, robią rzeczy, do których nie potrzebujesz cudzej chmury.

## Ale (i to ważne „ale”)

Open-source nie jest darmowy w sensie „zero pracy”:

1. **Ktoś musi to skonfigurować** — kilka godzin jednorazowo (Twoje albo kogoś, kto w to wchodzi).
2. **Ktoś musi to utrzymywać** — aktualizacje, kopie zapasowe. To godziny w miesiącu, nie dni.
3. **Nie każde narzędzie ma polskie wsparcie** — dokumentacje czytasz po angielsku.

Dlatego zasada: **automatyzuj open-source tam, gdzie proces jest stabilny**
(kalendarze, kody, alerty), i **płać za SaaS tam, gdzie liczy się wsparcie i szybka reakcja**
(np. channel manager przy 10+ kanałach: każda godzina awarii to puste noce).

## Kalkulator na marginesie kartki

Zanim kupisz kolejny abonament, policz trzy liczby:

1. Ile **godzin/mies.** realnie Cię to kosztuje dziś ręcznie?
2. Ile kosztuje SaaS **rocznie**, z podatkiem?
3. Po ilu miesiącach zwróciłyby się **godziny konfiguracji** na open-source?

Jeśli punkt 3 wychodzi poniżej 12 miesięcy — zastanów się poważnie nad przejściem na
open-source. Nie wiesz, które narzędzia z [katalogu](/narzedzia/) pasują do Twojej liczby
obiektów? Podaj szczegóły przez [stronę kontaktową](/kontakt/) — pomogę dobrać zestaw
i opiszę go w kolejnym poradniku.
