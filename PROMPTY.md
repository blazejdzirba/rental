# Prompty wdrożeniowe — Platforma najmu krótkoterminowego (Astro + Cloudflare Pages)

> UWAGA TECHNICZNA: projekt działa na **Tailwind CSS v4** (konfiguracja w `@theme`
> w `src/styles/global.css`, bez pliku tailwind.config.js). Prompty poniżej zakładają
> czysty CSS z `:root` — przy wykonaniu mapujemy je na zmienne `@theme` Tailwinda.
> Paleta już istnieje i pokrywa się ~90% z ofertą PDF (v6.pdf):
> primary #173643 ≈ granat, accent-light #C9A24D ≈ złoty, secondary #FAF6EE ≈ krem,
> fonty: Playfair Display (nagłówki) + Inter (tekst).

## KONTEKST PROJEKTU

Platforma / hub dla osób z najmem krótkoterminowym (Airbnb, Booking, Beds24).
Zawartość: poradniki, instrukcje, kursy video, repozytoria GitHub, projekty, szablony.

**Model biznesowy:**
- Pierwszy poradnik/projekt — DARMOWY (leadmagnet).
- Kolejne treści — symboliczna opłata (paywall).
- Cel główny: pozyskanie klientów na wdrożenie automatyzacji (kilka tysięcy PLN).

**Stack:** Astro 7, Tailwind v4, Content Collections (blog, kursy, programy),
deploy: commit na main = Cloudflare Pages, Node >=22.

## PROMPT 1 — Fundament wizualny i design system
- consts.ts: SITE_TITLE, SITE_DESCRIPTION, NAV (Start/Poradniki/Kursy/Narzędzia/Projekty/Automatyzacja/O mnie), CONTACT.
- global.css: paleta z oferty + klasy pomocnicze (container, btn-gold, card, section-dark).
- BaseHead: fonty Google, meta OG, theme-color granat.

## PROMPT 2 — Navbar + Footer
- Logo: złoty kwadrat z inicjałem + nazwa; CTA „Automatyzacja pod klucz" → /automatyzacja.
- Mobile hamburger (czysty JS, bez bibliotek). Sticky, blur.
- Footer: 3 kolumny + granatowy pasek copyright, złoty separator.

## PROMPT 3 — Strona główna (lejek)
Hero ciemny → pasek zaufania (40+ nieruchomości) → 4 karty „co znajdziesz" →
leadmagnet → 3 najnowsze poradniki → sekcja usługi (section-dark) → newsletter.

## PROMPT 4 — Content Collections
Schematy zod: blog (access free|paid, tags), kursy (level, videoUrl, price),
programy (repoUrl, demoUrl). Po 2 wpisy przykładowe do każdej.

## PROMPT 5 — Strony listujące
index dla blog/kursy/programy/narzedzia. Karty: badge Darmowe/Premium,
data, tagi, siatka 1/2/3 kolumny.

## PROMPT 6 — Wpis + PAYWALL
free → całość; paid → teaser 2-3 akapity + zasłona gradientowa + CTA „Odblokuj".
Na dole każdego wpisu box → /automatyzacja. `// TODO: integracja płatności`.

## PROMPT 7 — Landing /automatyzacja (KONWERSJA)
1. Hero ciemny + CTA konsultacja
2. Tabela „Stan obecny vs Po wdrożeniu"
3. Jak działa: Beds24 ↔ VPS+AI → Telegram/Ekipa/Konserwator
4. 4 filary: Master Brief, Smart Cost Router, Brama Telegram-First, Revenue Manager
5. Zakres + „Zapytaj o wycenę" (bez sztywnej ceny)
6. Harmonogram 4 tygodnie (timeline)
7. HITL + rozliczenie 50/50
8. CTA końcowe section-dark

## PROMPT 8 — About + SEO
about.astro (bio inżyniera), rss dla bloga, robots.txt, sitemap, OG image,
spójność kolorów. Checklista do uzupełnienia ręcznie.

## ZASADY
1. Bez ciężkich bibliotek. 2. UI po polsku. 3. Paleta z Prompt 1.
4. Komentarze po polsku. 5. Po zmianie: pliki + jak podejrzeć + co doinstalować.
6. `npm run build` musi przechodzić. 7. Placeholdery: `{{DO_UZUPEŁNIENIA}}`.
