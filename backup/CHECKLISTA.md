# Rzeczy do ręcznego uzupełnienia przed produkcją

## Linki i kontakty
- [ ] **Telegram link** — w `src/consts.ts` zmień `{{DO_UZUPEŁNIENIA}}` na prawdziwy link (np. `https://t.me/TwojKanal`)
- [ ] **Email** — w `src/consts.ts` zmień `{{DO_UZUPEŁNIENIA}}` na prawdziwy adres email
- [ ] **Domena** — w `astro.config.mjs` zmień placeholder na `https://najemks.pl`
- [ ] **Favicon** — wrzuć plik `favicon.ico` do `public/`
- [ ] **Open Graph image** — wrzuć plik `og-image.png` (1200x630) do `public/`

## Treści
- [ ] **Blog** — uzupełnij wpisy w `src/content/blog/` (3 z 4 mają placeholder treści)
- [ ] **Kursy** — uzupełnij treść kursów w `src/content/kursy/`
- [ ] **Projekty** — uzupełnij opisy projektów w `src/content/programy/`

## Płatności
- [ ] **Paywall** — zaimplementuj integrację płatności (szukaj `TODO: integracja płatności` w `BlogPostLayout.astro`)
- [ ] **Cena** — w `src/pages/automatyzacja.astro` zmień `od 2900 PLN` na rzeczywistą cenę

## SEO i monitoring
- [ ] **Google Analytics / Plausible** — dodaj kod śledzenia do `BaseHead.astro`
- [ ] **Cloudflare Pages** — skonfiguruj deploy z gałęzi `main`
- [ ] **Google Search Console** — dodaj weryfikację domeny