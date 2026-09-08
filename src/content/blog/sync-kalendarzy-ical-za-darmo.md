---
title: "Sync kalendarzy Airbnb i Booking za darmo: iCal na własnym serwerze"
description: "Krok po kroku: zbierasz feedy iCal wszystkich kanałów na własnym serwerze i widzisz jeden kalendarz. Zero abonamentu, pełna kontrola. Na bazie Sync-Rentals-Calendar."
pubDate: 2026-09-08
tags: ["kalendarze", "ical", "poradnik"]
readingTime: "7 min"
---

Podwójne rezerwacje biorą się z tego, że każdy kanał ma „swój” kalendarz. Rozwiązanie znasz:
channel manager za 150–400 zł/mies. Jest też droga darmowa — na własnym serwerze, na otwartych
komponentach z [katalogu](/narzedzia/). Pokażę najprostszą wersję.

## Co zbudujemy

- jeden zbiorczy kalendarz wszystkich Twoich obiektów i kanałów,
- odświeżany automatycznie (np. co godzinę),
- dostępny w przeglądarce i do subskrypcji w telefonie,
- koszt: 0 zł (zakładam, że masz VPS — jeśli nie, zacznij od [Radicale](#krok-0)).

## Krok 0. Wybierz bazę

- **Sync-Rentals-Calendar** (PHP) — najprostszy self-hosted „iCal middle layer” dla hostów.
- **Radicale** (Python, GPL) — lekki serwer CalDAV: kalendarz subskrybowany w kalendarzu telefonu.
- **node-ical** (Node) lub **icalendar** (Python) — jeśli chcesz napisać własny kawałek logiki.

## Krok 1. Zbierz adresy feedów

W panelu każdego kanału znajdź eksport kalendarza (Airbnb: Profil → Ustawienia → Integracje →
Kalendarz → Eksport; Booking podobnie). Zapisz URL-e — to zwykłe linki `.ics`.

## Krok 2. Postaw Sync-Rentals-Calendar na VPS

```bash
git clone https://github.com/pixelcrash/Sync-Rentals-Calendar.git
cd Sync-Rentals-Calendar
# postępuj wg README: PHP + lekki serwer (php -S lub nginx)
```

Wklej feedy wszystkich kanałów. Od tej chwili masz **jedno miejsce prawdy** dla dostępności.

## Krok 3. Spraw, żeby kanały mówiły prawdę

Ważne: samo „oglądanie” nie chroni przed podwójną rezerwacją. W panelu każdego kanału
podaj też **import** z Twojego serwera (feed zwrotny). Kanały będą się blokować nawzajem
w ciągu kilku minut od rezerwacji, zamiast czekać na ręczną aktualizację.

## Krok 4. Automatyczne odświeżanie

Cron wystarczy:

```cron
0 * * * * curl -s https://twoj-serwer.pl/sync.php > /dev/null
```

## Typowe problemy

- **Feed przestaje działać po zmianie hasła Airbnb** — wygeneruj nowy link, podmień.
- **Kanał cache'uje import** — Booking potrafi odświeżać rzadziej niż deklaruje; przy
  obiektach z krótkimi horyzontami ustaw przypomnienie weryfikacji ręcznej wieczorem.
- **Strefy czasowe** — iCal operuje na UTC; wyświetlaj lokalne, loguj UTC.

## Kiedy to nie wystarcza

Powyżej ~4 obiektów i 2 kanałów sam kalendarz to za mało — chcesz reguł: minimalnego pobytu,
blokad serwisowych, stref cen. Wtedy ma sens bardziej rozbudowany PMS z [katalogu](/narzedzia/)
albo własna warstwa reguł nałożona na ten zestaw.

Uważasz, że brakuje tu jakiegoś scenariusza albo kolejności kroków? Napisz przez
[stronę kontaktową](/kontakt/) — tematy z największym zainteresowaniem trafiają do kolejnych
poradników.
