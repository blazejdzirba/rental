# Blueprint: Platforma Najem KŚ

> Wygenerowano z 26 plików źródłowych


---
## src/consts.ts

```ts
1|// Globalne dane strony — importuj skąd chcesz: `import { NAV } from '../consts'`
2|
3|export const SITE_TITLE = 'Najem KŚ';
4|export const SITE_DESCRIPTION =
5|	'Poradniki, kursy i gotowe narzędzia automatyzacji dla najmu krótkoterminowego (Airbnb, Booking, Beds24).';
6|
7|// Menu główne — kolejność = kolejność w navbarze
8|export const NAV = [
9|	{ label: 'Start', href: '/' },
10|	{ label: 'Poradniki', href: '/blog' },
11|	{ label: 'Kursy', href: '/kursy' },
12|	{ label: 'Narzędzia', href: '/narzedzia' },
13|	{ label: 'Projekty', href: '/programy' },
14|	{ label: 'O mnie', href: '/about' },
15|] as const;
16|
17|// Główny przycisk sprzedaży (navbar + CTA na stronie)
18|export const CTA_MAIN = { label: 'Automatyzacja pod klucz', href: '/automatyzacja' };
19|
20|// Kontakt — {{DO_UZUPEŁNIENIA}}: podaj swoje dane
21|export const CONTACT = {
22|	telegram: '{{DO_UZUPEŁNIENIA}}', // np. https://t.me/twojanick
23|	email: '{{DO_UZUPEŁNIENIA}}', // np. kontakt@twojadomena.pl
24|};
25|
```


---
## src/content.config.ts

```ts
1|import { defineCollection, z } from 'astro:content';
2|import { glob } from 'astro/loaders';
3|
4|const blog = defineCollection({
5|  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
6|  schema: z.object({
7|    title: z.string(),
8|    description: z.string(),
9|    pubDate: z.coerce.date(),
10|    updatedDate: z.coerce.date().optional(),
11|    heroImage: z.string().optional(),
12|    tags: z.array(z.string()).default([]),
13|    access: z.enum(['free', 'paid']).default('free'),
14|    readingTime: z.string().optional(),
15|  }),
16|});
17|
18|const kursy = defineCollection({
19|  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/kursy' }),
20|  schema: z.object({
21|    title: z.string(),
22|    description: z.string(),
23|    pubDate: z.coerce.date(),
24|    heroImage: z.string().optional(),
25|    level: z.enum(['początkujący', 'średni', 'zaawansowany']).default('początkujący'),
26|    access: z.enum(['free', 'paid']).default('free'),
27|    price: z.string().optional(),
28|  }),
29|});
30|
31|const programy = defineCollection({
32|  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programy' }),
33|  schema: z.object({
34|    title: z.string(),
35|    description: z.string(),
36|    pubDate: z.coerce.date(),
37|    repoUrl: z.string().optional(),
38|    demoUrl: z.string().optional(),
39|    tags: z.array(z.string()).default([]),
40|    access: z.enum(['free', 'paid']).default('free'),
41|    thumbnail: z.string().optional(),
42|  }),
43|});
44|
45|export const collections = { blog, kursy, programy };
46|
```


---
## astro.config.mjs

```mjs
1|// @ts-check
2|
3|import mdx from '@astrojs/mdx';
4|import sitemap from '@astrojs/sitemap';
5|import { defineConfig, fontProviders } from 'astro/config';
6|
7|import tailwindcss from '@tailwindcss/vite';
8|
9|// https://astro.build/config
10|export default defineConfig({
11|  site: 'https://example.com',
12|  integrations: [mdx(), sitemap()],
13|
14|  fonts: [
15|      {
16|          provider: fontProviders.local(),
17|          name: 'Atkinson',
18|          cssVariable: '--font-atkinson',
19|          fallbacks: ['sans-serif'],
20|          options: {
21|              variants: [
22|                  {
23|                      src: ['./src/assets/fonts/atkinson-regular.woff'],
24|                      weight: 400,
25|                      style: 'normal',
26|                      display: 'swap',
27|                  },
28|                  {
29|                      src: ['./src/assets/fonts/atkinson-bold.woff'],
30|                      weight: 700,
31|                      style: 'normal',
32|                      display: 'swap',
33|                  },
34|              ],
35|          },
36|      },
37|	],
38|
39|  vite: {
40|    plugins: [tailwindcss()],
41|    css: {
42|      postcss: {
43|        plugins: [],
44|      },
45|    },
46|  },
47|});
```


---
## package.json

```json
1|{
2|  "name": "rental",
3|  "type": "module",
4|  "version": "0.0.1",
5|  "engines": {
6|    "node": ">=22.12.0"
7|  },
8|  "scripts": {
9|    "dev": "astro dev",
10|    "build": "astro build",
11|    "preview": "astro preview",
12|    "astro": "astro"
13|  },
14|  "dependencies": {
15|    "@astrojs/markdown-satteri": "^0.4.0",
16|    "@astrojs/mdx": "^8.0.0",
17|    "@astrojs/rss": "^4.0.19",
18|    "@astrojs/sitemap": "^3.7.4",
19|    "@tailwindcss/vite": "^4.3.3",
20|    "astro": "^7.3.1",
21|    "sharp": "^0.35.0",
22|    "tailwindcss": "^4.3.3"
23|  },
24|  "allowScripts": {
25|    "esbuild": true
26|  }
27|}
28|
```


---
## src/styles/global.css

```css
1|@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,500&display=swap');
2|
3|@import "tailwindcss";
4|@import "tailwindcss/theme";
5|
6|@theme {
7|  --color-primary: #173643;
8|  --color-primary-light: #2C4854;
9|  --color-primary-dark: #0E232C;
10|  --color-secondary: #FAF6EE;
11|  --color-secondary-dark: #F0EADC;
12|  --color-accent: #B3862C;
13|  --color-accent-light: #C9A24D;
14|  --color-accent-dark: #8F6B22;
15|  --color-background: #FFFFFF;
16|  --color-text: #2C2F33;
17|  --color-text-muted: #5C6066;
18|  --color-line: #DED5C4;        /* linie/obramowania z oferty PDF */
19|  --color-cream: #F7F4EE;       /* kremowe tło z oferty PDF */
20|
21|  --font-heading: "Playfair Display", serif;
22|  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
23|}
24|
25|/* ── Klasy pomocnicze (design system z oferty PDF) ───────────────── */
26|
27|.container-site {
28|  max-width: 1080px;
29|  margin-inline: auto;
30|  padding-inline: 1rem;
31|}
32|@media (min-width: 768px) {
33|  .container-site { padding-inline: 2rem; }
34|}
35|
36|.section { padding-block: 3.5rem; }
37|@media (min-width: 768px) {
38|  .section { padding-block: 5rem; }
39|}
40|
41|/* Ciemna sekcja CTA — granat + kremowy tekst (jak w ofercie) */
42|.section-dark {
43|  background-color: var(--color-primary);
44|  color: var(--color-cream);
45|}
46|.section-dark h1, .section-dark h2, .section-dark h3 { color: #fff; }
47|
48|/* Przyciski */
49|.btn {
50|  display: inline-flex;
51|  align-items: center;
52|  justify-content: center;
53|  gap: 0.5rem;
54|  border-radius: 8px;
55|  padding: 0.7rem 1.4rem;
56|  font-weight: 600;
57|  font-size: 0.95rem;
58|  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
59|  cursor: pointer;
60|  text-decoration: none;
61|}
62|.btn-gold {
63|  background-color: var(--color-accent-light);
64|  color: var(--color-primary-dark);
65|}
66|.btn-gold:hover { background-color: var(--color-accent); }
67|.btn-outline {
68|  border: 1.5px solid var(--color-line);
69|  color: var(--color-text);
70|  background: transparent;
71|}
72|.btn-outline:hover { border-color: var(--color-accent); color: var(--color-accent-dark); }
73|.section-dark .btn-outline { border-color: rgba(247,244,238,0.4); color: var(--color-cream); }
74|.section-dark .btn-outline:hover { border-color: var(--color-accent-light); color: var(--color-accent-light); }
75|
76|/* Karta */
77|.card {
78|  background: #fff;
79|  border: 1px solid var(--color-line);
80|  border-radius: 12px;
81|  box-shadow: 0 1px 3px rgba(23, 54, 67, 0.08);
82|  padding: 1.5rem;
83|}
84|
85|/* Pigułka / badge (jak "OBSŁUGA 24/7" w ofercie) */
86|.badge {
87|  display: inline-block;
88|  border: 1px solid var(--color-line);
89|  border-radius: 999px;
90|  padding: 0.25rem 0.9rem;
91|  font-size: 0.8rem;
92|  font-weight: 500;
93|  letter-spacing: 0.03em;
94|  background: var(--color-secondary);
95|  color: var(--color-primary);
96|}
97|.badge-gold {
98|  background: var(--color-accent-light);
99|  border-color: var(--color-accent);
100|  color: var(--color-primary-dark);
101|}
102|.badge-free {
103|  background: #dcfce7; /* zielony */
104|  border-color: #bbf7d0;
105|  color: #166534;
106|}
107|.badge-paid {
108|  background: var(--color-primary);
109|  border-color: var(--color-primary);
110|  color: var(--color-cream);
111|}
112|
113|body {
114|  @apply bg-background text-text font-sans antialiased;
115|}
116|
117|h1, h2, h3, h4 {
118|  @apply font-heading text-primary;
119|}
120|
121|h1 {
122|  @apply text-4xl md:text-5xl font-bold leading-tight;
123|}
124|
125|h2 {
126|  @apply text-3xl md:text-4xl font-semibold leading-snug;
127|}
128|
129|h3 {
130|  @apply text-xl md:text-2xl font-semibold;
131|}
132|
133|a {
134|  @apply transition-colors duration-200;
135|}
```


---
## src/layouts/Layout.astro

```astro
1|---
2|import Navbar from '../components/Navbar.astro';
3|import Footer from '../components/Footer.astro';
4|import '../styles/global.css';
5|
6|interface Props {
7|  title?: string;
8|  description?: string;
9|}
10|
11|const {
12|  title = 'Nazwa Twojej Strony',
13|  description = 'Praktyczne poradniki, kursy i narzędzia dla gospodarzy najmu krótkoterminowego.',
14|} = Astro.props;
15|---
16|
17|<!DOCTYPE html>
18|<html lang="pl">
19|  <head>
20|    <meta charset="UTF-8" />
21|    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
22|    <meta name="description" content={description} />
23|    <title>{title}</title>
24|  </head>
25|  <body class="flex min-h-screen flex-col bg-background text-text">
26|    <Navbar />
27|    <main class="flex-1">
28|      <slot />
29|    </main>
30|    <Footer />
31|  </body>
32|</html>
```


---
## src/layouts/BlogPostLayout.astro

```astro
1|---
2|import Layout from './Layout.astro';
3|
4|interface Props {
5|  title: string;
6|  description?: string;
7|  pubDate: Date;
8|  tags?: string[];
9|  heroImage?: string;
10|  access?: 'free' | 'paid';
11|}
12|
13|const { title, description, pubDate, tags = [], heroImage, access = 'free' } = Astro.props;
14|
15|const formattedDate = pubDate.toLocaleDateString('pl-PL', {
16|  day: 'numeric',
17|  month: 'long',
18|  year: 'numeric',
19|});
20|---
21|
22|<Layout title={title} description={description}>
23|  <article class="mx-auto max-w-3xl px-4 py-12 md:px-8">
24|    {heroImage && (
25|      <img
26|        src={heroImage}
27|        alt={title}
28|        class="mb-8 h-64 w-full rounded-lg object-cover md:h-96"
29|      />
30|    )}
31|
32|    <div class="mb-6 flex flex-wrap items-center gap-3 text-sm text-text/60">
33|      <time datetime={pubDate.toISOString()}>{formattedDate}</time>
34|      {tags.length > 0 && (
35|        <div class="flex flex-wrap gap-2">
36|          {tags.map((tag) => (
37|            <span class="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
38|              {tag}
39|            </span>
40|          ))}
41|        </div>
42|      )}
43|    </div>
44|
45|    <h1 class="mb-8">{title}</h1>
46|
47|    {access === 'paid' ? (
48|      <div class="rounded-xl border-2 border-accent bg-secondary p-6 text-center">
49|        <h2 class="text-2xl text-primary mb-3">Ten materiał jest częścią dostępu Premium</h2>
50|        <p class="text-text-muted mb-6">Kup dostęp, aby odblokować pełną treść tego poradnika.</p>
51|        <a href="/automatyzacja" class="btn btn-gold mb-3 inline-block">
52|          Odblokuj dostęp
53|        </a>
54|        {/* TODO: integracja płatności */}
55|        <p class="mt-4 text-sm text-text-muted">
56|          Masz pytania? <a href="/automatyzacja" class="text-accent underline">Napisz do nas</a>.
57|        </p>
58|      </div>
59|    ) : (
60|      <div class="prose-content">
61|        <slot />
62|      </div>
63|    )}
64|
65|    <div class="mt-12 rounded-xl border-2 border-accent bg-secondary p-6 text-center">
66|      <h3 class="text-xl text-primary mb-3">Wolisz mieć to wdrożone bez wysiłku?</h3>
67|      <p class="text-text-muted mb-4">Zamów usługę automatyzacji pod klucz i zacznij oszczędzać czas.</p>
68|      <a href="/automatyzacja" class="btn btn-gold inline-block">Zobacz usługę wdrożenia</a>
69|    </div>
70|  </article>
71|</Layout>
72|
73|<style is:global>
74|  /* Style wpisu blogowego — czysty CSS (Tailwind v4 @apply nie działa w <style>) */
75|  .prose-content h2 { margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.5rem; line-height: 2rem; color: var(--color-primary); }
76|  .prose-content h3 { margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.25rem; line-height: 1.75rem; color: var(--color-primary); }
77|  .prose-content p { margin-bottom: 1.25rem; line-height: 1.625; color: var(--color-text); }
78|  .prose-content a { color: var(--color-accent); text-decoration: underline; }
79|  .prose-content a:hover { color: var(--color-primary); }
80|  .prose-content ul,
81|  .prose-content ol { margin-bottom: 1.25rem; margin-left: 1.5rem; list-style: disc; }
82|  .prose-content ol { list-style: decimal; }
83|  .prose-content li + li { margin-top: 0.5rem; }
84|</style>
```


---
## src/components/Navbar.astro

```astro
1|---
2|import { NAV, CTA_MAIN } from '../consts';
3|---
4|
5|<header class="sticky top-0 z-50 border-b border-line bg-secondary/80 backdrop-blur-md">
6|  <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
7|    <!-- Logo: złoty kwadrat z inicjałem "B" + nazwa marki -->
8|    <a href="/" class="flex items-center gap-2">
9|      <span class="flex h-8 w-8 items-center justify-center rounded bg-accent-light font-heading text-lg font-bold text-primary-dark">B</span>
10|      <span class="font-heading text-lg font-bold text-primary">Najem KŚ</span>
11|    </a>
12|
13|    <!-- Menu desktop -->
14|    <ul class="hidden md:flex md:items-center md:gap-6">
15|      {NAV.map((link) => (
16|        <li>
17|          <a
18|            href={link.href}
19|            class="text-sm font-medium uppercase tracking-wide text-primary hover:text-accent"
20|          >
21|            {link.label}
22|          </a>
23|        </li>
24|      ))}
25|    </ul>
26|
27|    <!-- CTA + hamburger (mobile) -->
28|    <div class="flex items-center gap-3">
29|      <a href={CTA_MAIN.href} class="btn-gold hidden rounded px-4 py-2 text-sm font-semibold md:inline-block">
30|        {CTA_MAIN.label}
31|      </a>
32|      <button id="menu-toggle" class="md:hidden" aria-label="Otwórz menu" aria-expanded="false">
33|        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
34|          <path id="icon-open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
35|          <path id="icon-close" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
36|        </svg>
37|      </button>
38|    </div>
39|  </nav>
40|
41|  <!-- Menu mobilne -->
42|  <ul id="mobile-menu" class="hidden flex-col gap-1 border-t border-line bg-secondary px-4 pb-4 md:hidden">
43|    {NAV.map((link) => (
44|      <li>
45|        <a
46|          href={link.href}
47|          class="block py-2 text-sm font-medium uppercase tracking-wide text-primary hover:text-accent"
48|        >
49|          {link.label}
50|        </a>
51|      </li>
52|    ))}
53|    <li class="mt-2">
54|      <a href={CTA_MAIN.href} class="btn-gold block rounded px-4 py-2 text-center text-sm font-semibold">
55|        {CTA_MAIN.label}
56|      </a>
57|    </li>
58|  </ul>
59|</header>
60|
61|<script>
62|  const toggle = document.getElementById('menu-toggle');
63|  const menu = document.getElementById('mobile-menu');
64|  const iconOpen = document.getElementById('icon-open');
65|  const iconClose = document.getElementById('icon-close');
66|
67|  toggle?.addEventListener('click', () => {
68|    const nowHidden = menu?.classList.toggle('hidden');
69|    toggle.setAttribute('aria-expanded', String(!nowHidden));
70|    iconOpen?.classList.toggle('hidden');
71|    iconClose?.classList.toggle('hidden');
72|  });
73|</script>
74|
```


---
## src/components/Footer.astro

```astro
1|---
2|import { NAV, CONTACT } from '../consts';
3|const year = new Date().getFullYear();
4|---
5|
6|<footer class="bg-primary text-white">
7|  <div class="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
8|    <!-- Kolumna 1: O platformie -->
9|    <div>
10|      <h3 class="mb-3 font-heading text-lg font-semibold text-white">O platformie</h3>
11|      <p class="text-sm text-white/70">
12|        Praktyczne poradniki, kursy i narzędzia AI dla gospodarzy najmu krótkoterminowego. Automatyzacja, Beds24, systemy operacyjne.
13|      </p>
14|    </div>
15|
16|    <!-- Kolumna 2: Nawigacja -->
17|    <div>
18|      <h3 class="mb-3 font-heading text-lg font-semibold text-white">Nawigacja</h3>
19|      <ul class="space-y-2 text-sm text-white/70">
20|        {NAV.map((link) => (
21|          <li>
22|            <a href={link.href} class="hover:text-accent">
23|              {link.label}
24|            </a>
25|          </li>
26|        ))}
27|      </ul>
28|    </div>
29|
30|    <!-- Kolumna 3: Kontakt -->
31|    <div>
32|      <h3 class="mb-3 font-heading text-lg font-semibold text-white">Kontakt</h3>
33|      <ul class="space-y-2 text-sm text-white/70">
34|        {CONTACT.telegram && CONTACT.telegram !== '{{DO_UZUPEŁNIENIA}}' ? (
35|          <li>
36|            <a href={CONTACT.telegram} class="hover:text-accent" target="_blank" rel="noopener">
37|              Telegram →
38|            </a>
39|          </li>
40|        ) : null}
41|        {CONTACT.email && CONTACT.email !== '{{DO_UZUPEŁNIENIA}}' ? (
42|          <li>
43|            <a href={`mailto:${CONTACT.email}`} class="hover:text-accent">
44|              {CONTACT.email}
45|            </a>
46|          </li>
47|        ) : null}
48|        {(!CONTACT.telegram || CONTACT.telegram === '{{DO_UZUPEŁNIENIA}}') && (!CONTACT.email || CONTACT.email === '{{DO_UZUPEŁNIENIA}}') ? (
49|          <li class="text-white/40 italic">Dane kontaktowe w przygotowaniu</li>
50|        ) : null}
51|      </ul>
52|    </div>
53|  </div>
54|
55|  <!-- Pasek dolny z granatowym tłem + złoty separator -->
56|  <div class="border-t-2 border-accent bg-primary-dark py-6 text-center text-xs text-white/50">
57|    © {year} Najem KŚ. Wszelkie prawa zastrzeżone.
58|  </div>
59|</footer>
60|
```


---
## src/components/BaseHead.astro

```astro
1|---
2|// Import the global.css file here so that it is included on
3|// all pages through the use of the <BaseHead /> component.
4|import '../styles/global.css';
5|import type { ImageMetadata } from 'astro';
6|import FallbackImage from '../assets/blog-placeholder-1.jpg';
7|import { SITE_TITLE } from '../consts';
8|import { Font } from 'astro:assets';
9|
10|interface Props {
11|	title: string;
12|	description: string;
13|	image?: ImageMetadata;
14|}
15|
16|const canonicalURL = new URL(Astro.url.pathname, Astro.site);
17|
18|const { title, description, image = FallbackImage } = Astro.props;
19|---
20|
21|<!-- Global Metadata -->
22|<meta charset="utf-8" />
23|<meta name="viewport" content="width=device-width,initial-scale=1" />
24|<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
25|<link rel="icon" href="/favicon.ico" />
26|<link rel="sitemap" href="/sitemap-index.xml" />
27|<link
28|	rel="alternate"
29|	type="application/rss+xml"
30|	title={SITE_TITLE}
31|	href={new URL('rss.xml', Astro.site)}
32|/>
33|<meta name="generator" content={Astro.generator} />
34|
35|<Font cssVariable="--font-atkinson" preload />
36|
37|<!-- Theme color — granatowy z oferty (dla mobile status bar) -->
38|<meta name="theme-color" content="#173643" />
39|
40|<!-- Canonical URL -->
41|<link rel="canonical" href={canonicalURL} />
42|
43|<!-- Primary Meta Tags -->
44|<title>{title}</title>
45|<meta name="description" content={description} />
46|
47|<!-- Open Graph / Facebook -->
48|<meta property="og:type" content="website" />
49|<meta property="og:url" content={Astro.url} />
50|<meta property="og:title" content={title} />
51|<meta property="og:description" content={description} />
52|<meta property="og:image" content={new URL(image.src, Astro.url)} />
53|
54|<!-- Twitter -->
55|<meta name="twitter:card" content="summary_large_image" />
56|
```


---
## src/pages/index.astro

```astro
1|---
2|import Layout from '../layouts/Layout.astro';
3|import { getCollection } from 'astro:content';
4|
5|const posts = (await getCollection('blog'))
6|  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
7|  .slice(0, 3);
8|---
9|
10|<Layout title="Najem KŚ — Automatyzacja, Systemy, Rozwój">
11|  <!-- HERO -->
12|  <section class="section-dark">
13|    <div class="container-site mx-auto text-center py-24 md:py-32">
14|      <h1 class="text-white text-5xl md:text-6xl mb-6">Automatyzacja i systemy dla najmu krótkoterminowego</h1>
15|      <p class="text-xl text-cream/90 max-w-2xl mx-auto mb-10">Uwolnij swój czas, zwiększ zyski i wyeliminuj stres dzięki architekturze operacyjnej przetestowanej w boju.</p>
16|      <div class="flex flex-col sm:flex-row gap-4 justify-center">
17|        <a href="/blog" class="btn btn-gold">Zacznij za darmo</a>
18|        <a href="/automatyzacja" class="btn btn-outline">Zobacz usługę wdrożenia</a>
19|      </div>
20|      <div class="mt-10 flex justify-center gap-3">
21|        <span class="badge">Poradniki</span>
22|        <span class="badge">Gotowe szablony</span>
23|        <span class="badge badge-gold">Wdrożenie pod klucz</span>
24|      </div>
25|    </div>
26|  </section>
27|
28|  <!-- PASEK ZAUFANIA -->
29|  <section class="border-y border-line bg-cream">
30|    <div class="container-site mx-auto py-8 text-center text-primary font-heading text-lg">
31|      <p>Architektura przetestowana na <strong>40+ nieruchomościach</strong></p>
32|    </div>
33|  </section>
34|
35|  <!-- CO ZNAJDZIESZ -->
36|  <section class="section container-site mx-auto">
37|    <h2 class="text-center mb-12">Co znajdziesz na platformie?</h2>
38|    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
39|      {[
40|        { t: 'Poradniki', d: 'Krok po kroku o Beds24, AI i automatyzacji.' },
41|        { t: 'Kursy video', d: 'Techniczne wdrożenia dla opornych.' },
42|        { t: 'Narzędzia i GitHub', d: 'Gotowy kod do skopiowania.' },
43|        { t: 'Własne projekty', d: 'Szablony, które działają.' }
44|      ].map(item => (
45|        <div class="card">
46|          <h3 class="mb-3 text-accent">{item.t}</h3>
47|          <p class="text-sm text-text-muted">{item.d}</p>
48|        </div>
49|      ))}
50|    </div>
51|  </section>
52|
53|  <!-- DARMOWY START -->
54|  <section class="container-site mx-auto pb-16">
55|    <div class="card border-accent border-2 text-center p-8">
56|      <h2 class="text-2xl mb-4">Potrzebujesz szybkiego startu?</h2>
57|      <p class="mb-6">Odbierz darmowy poradnik i automatyzuj najem jeszcze dziś.</p>
58|      <a href="/blog" class="btn btn-gold">Odbierz poradnik gratis</a>
59|    </div>
60|  </section>
61|
62|  <!-- NAJNOWSZE PORADNIKI -->
63|  <section class="section container-site mx-auto">
64|    <h2 class="text-center mb-10">Najnowsze poradniki</h2>
65|    <div class="grid gap-8 md:grid-cols-3">
66|      {posts.map((post) => (
67|        <a href={`/blog/${post.slug}`} class="card block hover:shadow-lg transition-shadow">
68|          <time class="text-xs uppercase tracking-wide text-accent font-medium">
69|            {post.data.pubDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
70|          </time>
71|          <h3 class="mb-2 mt-2 text-primary">{post.data.title}</h3>
72|          <p class="text-sm text-text-muted">{post.data.description}</p>
73|        </a>
74|      ))}
75|    </div>
76|  </section>
77|
78|  <!-- SEKCJA USŁUGI -->
79|  <section class="section-dark section text-center">
80|    <div class="container-site mx-auto">
81|      <h2 class="text-white mb-6">Chcesz to wszystko wdrożone u siebie?</h2>
82|      <p class="text-cream/80 max-w-xl mx-auto mb-10">Beds24, bot Telegram, AI, grafiki sprzątania — zajmę się techniczną stroną Twojego biznesu, abyś Ty mogła zająć się rozwojem.</p>
83|      <a href="/automatyzacja" class="btn btn-gold text-lg px-10 py-4">Umów konsultację wdrożeniową</a>
84|    </div>
85|  </section>
86|</Layout>
87|
```


---
## src/pages/automatyzacja.astro

```astro
1|---
2|import Layout from '../layouts/Layout.astro';
3|
4|const CONTACT_TELEGRAM = '{{DO_UZUPEŁNIENIA}}';
5|const CONTACT_EMAIL = '{{DO_UZUPEŁNIENIA}}';
6|
7|const problemRows = [
8|  { before: 'Pisanie do gości z telefonu', after: 'Auto-odpowiedzi i statusy w Telegramie' },
9|  { before: 'Koordynacja ekipy', after: 'Automatyczne harmonogramy + bot' },
10|  { before: 'Urlop wymaga pełnej dostępności', after: 'Człowiek w pętli (HITL) + systemy' },
11|  { before: 'Brak nadzoru nad cenami', after: 'Revenue manager + cennik dynamiczny' },
12|];
13|
14|const filary = [
15|  { title: 'Master Brief', desc: 'Architektura sprawdzona na 40+ obiektach.' },
16|  { title: 'Smart Cost Router', desc: 'Dwuetapowe AI: decyzja i optymalizacja kosztów.' },
17|  { title: 'Brama Telegram-First', desc: 'Główny kanał komunikacji z gośćmi i ekipą.' },
18|  { title: 'Revenue Manager', desc: 'Cennik dynamiczny bez ręcznego klikania.' },
19|];
20|
21|const weeks = [
22|  'Tydzień 1: Audyt i fundamenty',
23|  'Tydzień 2: Integracja systemów',
24|  'Tydzień 3: Testy i poprawki',
25|  'Tydzień 4: Start produkcyjny',
26|];
27|---
28|
29|<Layout title="Automatyzacja pod klucz — Najem KŚ" description="Cyfryzacja, automatyzacja i architektura operacyjna najmu krótkoterminowego.">
30|  <!-- HERO -->
31|  <section class="section-dark">
32|    <div class="container-site mx-auto py-24 md:py-32 text-center">
33|      <h1 class="text-white text-4xl md:text-6xl mb-6">Cyfryzacja, automatyzacja i architektura operacyjna najmu</h1>
34|      <p class="text-cream/80 text-lg max-w-2xl mx-auto mb-10">Wdrażam pełne środowisko: Beds24, boty Telegram, AI, ekipa sprzątająca i revenue manager — tak, żebyś Ty mógł spać spokojnie.</p>
35|      <a href={CONTACT_TELEGRAM} class="btn btn-gold text-lg px-10 py-4">Umów bezpłatną konsultację</a>
36|      <p class="mt-4 text-sm text-cream/50">Wypełnij formularz lub napisz na Telegram</p>
37|    </div>
38|  </section>
39|
40|  <!-- PROBLEM / DIAGNOZA -->
41|  <section class="section container-site mx-auto">
42|    <h2 class="text-center mb-12">Stan obecny vs Po wdrożeniu</h2>
43|    <div class="overflow-x-auto">
44|      <table class="w-full text-sm md:text-base border-collapse">
45|        <thead>
46|          <tr class="border-b-2 border-primary">
47|            <th class="py-3 px-4 text-left text-primary-light">Stan obecny</th>
48|            <th class="py-3 px-4 text-left text-primary-light">Po wdrożeniu</th>
49|          </tr>
50|        </thead>
51|        <tbody>
52|          {problemRows.map((row) => (
53|            <tr class="border-b border-line">
54|              <td class="py-3 px-4 text-text-muted">{row.before}</td>
55|              <td class="py-3 px-4 font-medium text-accent">{row.after}</td>
56|            </tr>
57|          ))}
58|        </tbody>
59|      </table>
60|    </div>
61|  </section>
62|
63|  <!-- JAK TO DZIAŁA -->
64|  <section class="section container-site mx-auto bg-cream">
65|    <h2 class="text-center mb-12">Jak to działa?</h2>
66|    <div class="card text-center max-w-2xl mx-auto p-8">
67|      <p class="text-lg text-primary mb-6">Beds24 ↔ Serwer VPS + AI → Telegram / Ekipa / Konserwator</p>
68|      <p class="text-text-muted">Całość spięta w jeden spójny system. Gość rezerwuje → system aktualizuje kalendarz → bot powiadamia ekipę → AI odpowiada na wiadomości → Ty widzisz raport.</p>
69|    </div>
70|  </section>
71|
72|  <!-- 4 FILARY -->
73|  <section class="section container-site mx-auto">
74|    <h2 class="text-center mb-12">4 filary wdrożenia</h2>
75|    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
76|      {filary.map((f) => (
77|        <div class="card">
78|          <h3 class="text-accent mb-3">{f.title}</h3>
79|          <p class="text-sm text-text-muted">{f.desc}</p>
80|        </div>
81|      ))}
82|    </div>
83|  </section>
84|
85|  <!-- ZAKRES I WYCENA -->
86|  <section class="section container-site mx-auto bg-cream">
87|    <div class="card max-w-2xl mx-auto border-accent border-2 p-8 text-center">
88|      <h2 class="mb-4">Zakres i orientacyjna wycena</h2>
89|      <p class="text-text-muted mb-6">Każde wdrożenie jest inne — poniżej pakiet, który najczęściej wybierają klienci.</p>
90|      <ul class="text-left text-text mb-6 space-y-2 list-disc pl-5">
91|        <li>Audyt obecnych procesów</li>
92|        <li>Konfiguracja Beds24 + API</li>
93|        <li>Bot Telegram dla gości i ekipy</li>
94|        <li>Integracja z AI (obsługa wiadomości)</li>
95|        <li>Revenue manager / cennik dynamiczny</li>
96|        <li>Monitoring i dokumentacja</li>
97|      </ul>
98|      <p class="text-2xl font-bold text-primary mb-6">od 2900 PLN</p>
99|      <a href={CONTACT_TELEGRAM} class="btn btn-gold">Zapytaj o indywidualną wycenę</a>
100|    </div>
101|  </section>
102|
103|  <!-- HARMONOGRAM -->
104|  <section class="section container-site mx-auto">
105|    <h2 class="text-center mb-12">Harmonogram wdrożenia</h2>
106|    <div class="grid md:grid-cols-4 gap-4">
107|      {weeks.map((w, i) => (
108|        <div class="card text-center">
109|          <div class="text-accent font-bold text-2xl mb-2">{i + 1}</div>
110|          <p class="text-sm text-primary font-medium">{w}</p>
111|        </div>
112|      ))}
113|    </div>
114|  </section>
115|
116|  <!-- GWARANCJA -->
117|  <section class="section container-site mx-auto bg-cream">
118|    <div class="card max-w-3xl mx-auto p-8 text-center">
119|      <h2 class="mb-4">Gwarancja</h2>
120|      <p class="text-text-muted mb-4">„Człowiek w pętli (HITL)” — żaden proces nie zostawia Cię sam na sam z systemem. Rozliczenie etapowe 50/50: pierwsza po akceptacji fundamentów, druga po uruchomieniu produkcyjnym.</p>
121|      <p class="text-sm text-text-muted">Jeśli po wdrożeniu okaże się, że system nie działa zgodnie z ustaleniami — naprawiam na własny koszt.</p>
122|    </div>
123|  </section>
124|
125|  <!-- CTA KOŃCOWE -->
126|  <section class="section-dark section text-center">
127|    <div class="container-site mx-auto">
128|      <h2 class="text-white mb-6">Jak zaczynamy?</h2>
129|      <div class="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto text-cream/80">
130|        <div>
131|          <div class="text-accent font-bold text-3xl mb-2">1</div>
132|          <p>Umów bezpłatną konsultację</p>
133|        </div>
134|        <div>
135|          <div class="text-accent font-bold text-3xl mb-2">2</div>
136|          <p>Otrzymasz plan i wycenę</p>
137|        </div>
138|        <div>
139|          <div class="text-accent font-bold text-3xl mb-2">3</div>
140|          <p>Startujemy w ciągu tygodnia</p>
141|        </div>
142|      </div>
143|      <a href={CONTACT_TELEGRAM} class="btn btn-gold text-lg px-10 py-4">Umów bezpłatną konsultację</a>
144|      {CONTACT_EMAIL !== '{{DO_UZUPEŁNIENIA}}' && (
145|        <p class="mt-4 text-cream/60 text-sm">lub napisz: {CONTACT_EMAIL}</p>
146|      )}
147|    </div>
148|  </section>
149|</Layout>
150|
```


---
## src/pages/about.astro

```astro
1|---
2|import Layout from '../layouts/Layout.astro';
3|---
4|
5|<Layout title="O mnie" description="Kim jestem i czym się zajmuję.">
6|  <section class="mx-auto max-w-3xl px-4 py-16 md:px-8">
7|    <h1 class="mb-6">O mnie</h1>
8|    <div class="prose-content">
9|        <p>Inżynier Systemów & Automatyzacji. Pomagam gospodarzom najmu krótkoterminowego wdrażać systemy, które oszczędzają czas i pieniądze.</p>
10|        <p>Specjalizuję się w łączeniu Beds24 z botami Telegram, AI oraz narzędziami do automatyzacji procesów operacyjnych.</p>
11|    </div>
12|  </section>
13|</Layout>
14|
```


---
## src/pages/blog/index.astro

```astro
1|---
2|import Layout from '../../layouts/Layout.astro';
3|import { getCollection } from 'astro:content';
4|import { SITE_TITLE } from '../../consts';
5|
6|const posts = (await getCollection('blog'))
7|  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
8|---
9|
10|<Layout title={`${SITE_TITLE} – Poradniki`} description="Poradniki, narzędzia i strategie dla gospodarzy najmu krótkoterminowego.">
11|  <section class="mx-auto max-w-6xl px-4 py-16 md:px-8">
12|    <h1>Poradniki</h1>
13|    <p class="mt-4 text-lg text-text-muted">
14|      Praktyczne poradniki dla gospodarzy najmu krótkoterminowego.
15|    </p>
16|
17|    {posts.length === 0 ? (
18|      <p class="mt-8 text-text-muted">Brak wpisów.</p>
19|    ) : (
20|      <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
21|        {posts.map((post) => (
22|          <a
23|            href={`/blog/${post.id}/`}
24|            class="group block rounded-xl border border-secondary-dark bg-secondary p-6 transition-shadow hover:shadow-lg"
25|          >
26|            <div class="flex items-center justify-between">
27|              <time class="text-xs font-semibold uppercase tracking-wide text-accent">
28|                {post.data.pubDate.toLocaleDateString('pl-PL', {
29|                  day: 'numeric',
30|                  month: 'long',
31|                  year: 'numeric',
32|                })}
33|              </time>
34|              <span class={`badge ${post.data.access === 'free' ? 'badge-free' : 'badge-paid'}`}>
35|                {post.data.access === 'free' ? 'Darmowe' : 'Premium'}
36|              </span>
37|            </div>
38|            <h3 class="mt-3 text-primary group-hover:text-accent transition-colors">
39|              {post.data.title}
40|            </h3>
41|            <p class="mt-2 text-sm leading-relaxed text-text-muted">{post.data.description}</p>
42|            {post.data.tags && post.data.tags.length > 0 && (
43|              <div class="mt-4 flex flex-wrap gap-2">
44|                {post.data.tags.map((tag: string) => (
45|                  <span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
46|                    {tag}
47|                  </span>
48|                ))}
49|              </div>
50|            )}
51|          </a>
52|        ))}
53|      </div>
54|    )}
55|  </section>
56|</Layout>
57|
```


---
## src/pages/blog/[...slug].astro

```astro
1|---
2|import { type CollectionEntry, getCollection, render } from 'astro:content';
3|import BlogPostLayout from '../../layouts/BlogPostLayout.astro';
4|
5|export async function getStaticPaths() {
6|  const posts = await getCollection('blog');
7|  return posts.map((post) => ({
8|    params: { slug: post.id },
9|    props: post,
10|  }));
11|}
12|type Props = CollectionEntry<'blog'>;
13|
14|const post = Astro.props;
15|const { Content } = await render(post);
16|---
17|
18|<BlogPostLayout {...post.data} access={post.data.access}>
19|  <Content />
20|</BlogPostLayout>
21|
```


---
## src/pages/kursy/index.astro

```astro
1|---
2|import Layout from '../../layouts/Layout.astro';
3|import { getCollection } from 'astro:content';
4|
5|const courses = (await getCollection('kursy'))
6|  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
7|
8|const levelLabels: Record<string, string> = {
9|  'początkujący': '🌱 Początkujący',
10|  'średni': '📈 Średni',
11|  'zaawansowany': '🚀 Zaawansowany',
12|};
13|---
14|
15|<Layout title="Kursy — Najem KŚ" description="Kursy wideo i szkolenia z automatyzacji najmu krótkoterminowego.">
16|  <section class="mx-auto max-w-6xl px-4 py-16 md:px-8">
17|    <h1>Kursy</h1>
18|    <p class="mt-4 text-lg text-text-muted">
19|      Szkolenia wideo i kursy krok po kroku dla gospodarzy najmu krótkoterminowego.
20|    </p>
21|
22|    {courses.length === 0 ? (
23|      <p class="mt-8 text-text-muted">Brak kursów.</p>
24|    ) : (
25|      <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
26|        {courses.map((course) => (
27|          <a
28|            href={`/kursy/${course.id}/`}
29|            class="group block rounded-xl border border-secondary-dark bg-secondary p-6 transition-shadow hover:shadow-lg"
30|          >
31|            <div class="flex items-center justify-between">
32|              <time class="text-xs font-semibold uppercase tracking-wide text-accent">
33|                {course.data.pubDate.toLocaleDateString('pl-PL', {
34|                  day: 'numeric',
35|                  month: 'long',
36|                  year: 'numeric',
37|                })}
38|              </time>
39|              <span class={`badge ${course.data.access === 'free' ? 'badge-free' : 'badge-paid'}`}>
40|                {course.data.access === 'free' ? 'Darmowy' : 'Premium'}
41|              </span>
42|            </div>
43|            <h3 class="mt-3 text-primary group-hover:text-accent transition-colors">
44|              {course.data.title}
45|            </h3>
46|            <p class="mt-2 text-sm leading-relaxed text-text-muted">{course.data.description}</p>
47|            {course.data.level && (
48|              <div class="mt-3 text-xs font-medium text-accent">
49|                {levelLabels[course.data.level] || course.data.level}
50|              </div>
51|            )}
52|            {course.data.price && (
53|              <div class="mt-2 text-sm font-semibold text-primary">
54|                {course.data.price}
55|              </div>
56|            )}
57|          </a>
58|        ))}
59|      </div>
60|    )}
61|  </section>
62|</Layout>
63|
```


---
## src/pages/programy/index.astro

```astro
1|---
2|import Layout from '../../layouts/Layout.astro';
3|import { getCollection } from 'astro:content';
4|
5|const projects = (await getCollection('programy'))
6|  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
7|---
8|
9|<Layout title="Projekty — Najem KŚ" description="Gotowe projekty i szablony automatyzacji dla najmu krótkoterminowego.">
10|  <section class="mx-auto max-w-6xl px-4 py-16 md:px-8">
11|    <h1>Projekty</h1>
12|    <p class="mt-4 text-lg text-text-muted">
13|      Gotowe projekty i szablony automatyzacji — kod do skopiowania i uruchomienia u siebie.
14|    </p>
15|
16|    {projects.length === 0 ? (
17|      <p class="mt-8 text-text-muted">Brak projektów.</p>
18|    ) : (
19|      <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
20|        {projects.map((project) => (
21|          <div class="group block rounded-xl border border-secondary-dark bg-secondary p-6 transition-shadow hover:shadow-lg">
22|            <div class="flex items-center justify-between">
23|              <time class="text-xs font-semibold uppercase tracking-wide text-accent">
24|                {project.data.pubDate.toLocaleDateString('pl-PL', {
25|                  day: 'numeric',
26|                  month: 'long',
27|                  year: 'numeric',
28|                })}
29|              </time>
30|              <span class={`badge ${project.data.access === 'free' ? 'badge-free' : 'badge-paid'}`}>
31|                {project.data.access === 'free' ? 'Darmowe' : 'Premium'}
32|              </span>
33|            </div>
34|            <h3 class="mt-3 text-primary group-hover:text-accent transition-colors">
35|              {project.data.title}
36|            </h3>
37|            <p class="mt-2 text-sm leading-relaxed text-text-muted">{project.data.description}</p>
38|            {project.data.tags && project.data.tags.length > 0 && (
39|              <div class="mt-4 flex flex-wrap gap-2">
40|                {project.data.tags.map((tag: string) => (
41|                  <span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
42|                    {tag}
43|                  </span>
44|                ))}
45|              </div>
46|            )}
47|            {/* Przyciski GitHub / Demo */}
48|            <div class="mt-4 flex gap-3">
49|              {project.data.repoUrl && (
50|                <a
51|                  href={project.data.repoUrl}
52|                  target="_blank"
53|                  rel="noopener"
54|                  class="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-light"
55|                >
56|                  <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14" fill="currentColor">
57|                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
58|                  </svg>
59|                  GitHub
60|                </a>
61|              )}
62|              {project.data.demoUrl && (
63|                <a
64|                  href={project.data.demoUrl}
65|                  target="_blank"
66|                  rel="noopener"
67|                  class="inline-flex items-center gap-1.5 rounded-lg border border-accent px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-primary-dark"
68|                >
69|                  Demo →
70|                </a>
71|              )}
72|            </div>
73|          </div>
74|        ))}
75|      </div>
76|    )}
77|  </section>
78|</Layout>
79|
```


---
## src/pages/narzedzia/index.astro

```astro
1|---
2|import Layout from '../../layouts/Layout.astro';
3|import tools from '../../data/tools.json';
4|
5|const CATS: Record<string, { label: string; desc: string }> = {
6|  ical: { label: 'Kalendarze iCal', desc: 'Sync kalendarzy Airbnb/Booking, parsowanie feedów, kalendarze dla ekipy.' },
7|  pms: { label: 'Zarządzanie obiektem (PMS)', desc: 'Rezerwacje, sprzątanie, usterek, rozliczenia właścicielskie.' },
8|  locks: { label: 'Zamki i IoT', desc: 'Kody do drzwi generowane z rezerwacji, czujniki temperatury/hałasu/wilgoci.' },
9|  comm: { label: 'Komunikacja', desc: 'Skrzynki omnichannel, boty Telegram, WhatsApp dla ekip sprzątających.' },
10|  ai: { label: 'Agenci AI', desc: 'Serwery MCP, wizualne buildery agentów — AI konierże i asystenci hosta.' },
11|  auto: { label: 'Automatyzacja', desc: 'Wizualne workflow bez kodu: n8n i alternatywy.' },
12|  data: { label: 'Dane i ceny', desc: 'Scrapery, hurtownie BI, analizy rynku i dokumentacje API.' },
13|};
14|
15|const LIC_COLORS: Record<string, string> = {
16|  MIT: 'green',
17|  'Apache-2.0': 'green',
18|  BSD: 'green',
19|  'BSD-2': 'green',
20|  'BSD-3': 'green',
21|  'MPL-2.0': 'amber',
22|  'LGPL-3.0': 'amber',
23|  EPL: 'amber',
24|  'GPL-3.0': 'amber',
25|  'AGPL-3.0': 'amber',
26|  'OSL-3.0': 'amber',
27|  NOASSERTION: 'amber',
28|  None: 'red',
29|};
30|
31|function licColor(l: string | undefined): string {
32|  if (!l || l === 'null') return 'red';
33|  return LIC_COLORS[l] ?? 'amber';
34|}
35|
36|const sorted = [...tools].sort((a, b) => (b.stars || 0) - (a.stars || 0));
37|---
38|
39|<Layout
40|  title="Katalog narzędzi"
41|  description="46 zweryfikowanych darmowych narzędzi open-source dla hostów najmu krótkoterminowego: kalendarze, zamki, komunikacja, AI. Z licencjami i polskimi opisami."
42|>
43|  <section class="mx-auto max-w-6xl px-4 py-16 md:px-8">
44|    <h1>Katalog narzędzi</h1>
45|    <p class="mt-4 text-text-muted">
46|      Wszystkie pozycje zweryfikowane przez API GitHub ({new Date().getFullYear()}) — linki prowadzą
47|      wprost do repozytoriów. Kolor licencji:{' '}
48|      <span class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
49|        >MIT/Apache/BSD</span
50|      >{' '}
51|      = komercyjnie OK,{' '}
52|      <span class="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800"
53|        >copyleft / wymagka</span
54|      >{' '}
55|      = używaj jako usługi,{' '}
56|      <span class="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800"
57|        >brak licencji</span
58|      >{' '}
59|      = all rights reserved, nie używaj komercyjnie.
60|    </p>
61|
62|    <nav class="mt-8 flex flex-wrap gap-3" aria-label="Kategorie narzędzi">
63|      {Object.entries(CATS).map(([k, c]) => (
64|        <a
65|          href={`#${k}`}
66|          class="rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/5"
67|        >
68|          {c.label} ({tools.filter((t) => t.category === k).length})
69|        </a>
70|      ))}
71|    </nav>
72|
73|    {Object.entries(CATS).map(([k, c]) => (
74|      <section id={k} class="mt-12 scroll-mt-24">
75|        <h2 class="text-primary">{c.label}</h2>
76|        <p class="mt-2 text-text-muted">{c.desc}</p>
77|        <div class="mt-6 overflow-x-auto">
78|          <table class="w-full border-collapse text-sm">
79|            <thead class="border-b-2 border-primary/20 bg-secondary">
80|              <tr>
81|                <th class="px-4 py-3 text-left font-semibold text-primary">Narzędzie</th>
82|                <th class="px-4 py-3 text-left font-semibold text-primary">Do czego</th>
83|                <th class="px-4 py-3 text-left font-semibold text-primary">Gwiazdki</th>
84|                <th class="px-4 py-3 text-left font-semibold text-primary">Licencja</th>
85|                <th class="px-4 py-3 text-left font-semibold text-primary">Ostatnia zmiana</th>
86|              </tr>
87|            </thead>
88|            <tbody>
89|              {sorted
90|                .filter((t) => t.category === k)
91|                .map((t) => (
92|                  <tr id={t.repo} class="border-b border-secondary-dark scroll-mt-24">
93|                    <td class="px-4 py-3">
94|                      <a
95|                        href={t.url}
96|                        rel="noopener"
97|                        class="font-semibold text-accent hover:text-primary"
98|                        >{t.name}</a
99|                      >
100|                      {t.archived && (
101|                        <span
102|                          class="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800"
103|                          title="Repo zarchiwizowane"
104|                          >archiwum</span
105|                        >
106|                      )}
107|                      <div class="mt-1 text-xs text-text-muted">{t.who}</div>
108|                    </td>
109|                    <td class="px-4 py-3 text-text-muted">{t.description}</td>
110|                    <td class="px-4 py-3">⭐ {t.stars}</td>
111|                    <td class="px-4 py-3">
112|                      <span
113|                        class={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
114|                          licColor(t.license) === 'green'
115|                            ? 'bg-green-100 text-green-800'
116|                            : licColor(t.license) === 'amber'
117|                              ? 'bg-amber-100 text-amber-800'
118|                              : 'bg-red-100 text-red-800'
119|                        }`}
120|                      >
121|                        {t.license}
122|                      </span>
123|                    </td>
124|                    <td class="px-4 py-3 text-xs text-text-muted">{t.pushed_at}</td>
125|                  </tr>
126|                ))}
127|            </tbody>
128|          </table>
129|        </div>
130|      </section>
131|    ))}
132|
133|    <section class="mt-16 rounded-xl border-2 border-accent bg-secondary p-8">
134|      <h2 class="text-primary">Chcesz, żeby to zadziałało u Ciebie?</h2>
135|      <p class="mt-3 text-text">
136|        Katalog mówi <em>co</em> istnieje. Jeśli chcesz <em>jak</em> — konkretny plan wdrożenia dla
137|        Twoich obiektów —{' '}
138|        <a href="/kontakt" class="font-semibold text-accent underline hover:text-primary">
139|          napisz do mnie
140|        </a>
141|        . Audyt zaczyna się od 490 zł, zaliczane na wdrożenie.
142|      </p>
143|    </section>
144|  </section>
145|</Layout>
146|
```


---
## src/content/blog/sync-kalendarzy-ical-za-darmo.md

```md
1|---
2|title: "Sync kalendarzy Airbnb i Booking za darmo: iCal na własnym serwerze"
3|description: "Krok po kroku: zbierasz feedy iCal wszystkich kanałów na własnym serwerze i widzisz jeden kalendarz. Zero abonamentu, pełna kontrola. Na bazie Sync-Rentals-Calendar."
4|pubDate: 2026-09-08
5|tags: ["kalendarze", "ical", "poradnik"]
6|access: free
7|---
8|
9|Podwójne rezerwacje biorą się z tego, że każdy kanał ma „swój” kalendarz. Rozwiązanie znasz:
10|channel manager za 150–400 zł/mies. Jest też droga darmowa — na własnym serwerze, na otwartych
11|komponentach z [katalogu](/narzedzia/). Pokażę najprostszą wersję.
12|
13|## Co zbudujemy
14|
15|- jeden zbiorczy kalendarz wszystkich Twoich obiektów i kanałów,
16|- odświeżany automatycznie (np. co godzinę),
17|- dostępny w przeglądarce i do subskrypcji w telefonie,
18|- koszt: 0 zł (zakładam, że masz VPS — jeśli nie, zacznij od [Radicale](#krok-0)).
19|
20|## Krok 0. Wybierz bazę
21|
22|- **Sync-Rentals-Calendar** (PHP) — najprostszy self-hosted „iCal middle layer” dla hostów.
23|- **Radicale** (Python, GPL) — lekki serwer CalDAV: kalendarz subskrybowany w kalendarzu telefonu.
24|- **node-ical** (Node) lub **icalendar** (Python) — jeśli chcesz napisać własny kawałek logiki.
25|
26|## Krok 1. Zbierz adresy feedów
27|
28|W panelu każdego kanału znajdź eksport kalendarza (Airbnb: Profil → Ustawzenia → Integracje →
29|Kalendarz → Eksport; Booking podobnie). Zapisz URL-e — to zwykłe linki `.ics`.
30|
31|## Krok 2. Postaw Sync-Rentals-Calendar na VPS
32|
33|```bash
34|git clone https://github.com/pixelcrash/Sync-Rentals-Calendar.git
35|cd Sync-Rentals-Calendar
36|# postępuj wg README: PHP + lekki serwer (php -S lub nginx)
37|```
38|
39|Wklej feedy wszystkich kanałów. Od tej chwili masz **jedno miejsce prawdy** dla dostępności.
40|
41|## Krok 3. Spraw, żeby kanały mówiły prawdę
42|
43|Ważne: samo „oglądanie” nie chroni przed podwójną rezerwacją. W panelu każdego kanału
44|podaj też **import** z Twojego serwera (feed zwrotny). Kanały będą się blokować nawzajem
45|w ciągu kilku minut od rezerwacji, zamiast czekać na ręczną aktualizację.
46|
47|## Krok 4. Automatyczne odświeżanie
48|
49|Cron wystarczy:
50|
51|```cron
52|0 * * * * curl -s https://twoj-serwer.pl/sync.php > /dev/null
53|```
54|
55|## Typowe problemy
56|
57|- **Feed przestaje działać po zmianie hasła Airbnb** — wygeneruj nowy link, podmień.
58|- **Kanał cache'uje import** — Booking potrafi odświeżać rzadziej niż deklaruje; przy
59|  obiektach z krótkimi horyzontami ustaw przypomnienie weryfikacji ręcznej wieczorem.
60|- **Strefy czasowe** — iCal operuje na UTC; wyświetlaj lokalne, loguj UTC.
61|
62|## Kiedy to nie wystarcza
63|
64|Powyżej ~4 obiektów i 2 kanałów chcesz już reguł (min. pobyt, blokady serwisowe, ceny).
65|To moment na [audyt](/kontakt/) — pokażę Ci, które elementy z katalogu złożyć w system,
66|który robi to bez abonamentu, albo dlaczego w Twoim przypadku Beds24 + automatyzacje
67|wyjdzie taniej niż klejenie wszystkiego ręcznie.
68|
```


---
## src/content/blog/licencje-open-source-dla-hostow.md

```md
1|---
2|title: "Zanim użyjesz darmowego narzędzia z GitHub: licencje dla hostów, łamanie po polsku"
3|description: "MIT, Apache, GPL, AGPL — co wolno Ci robić z darmowym narzędziem jako host najmu krótkoterminowego, a co grozi mandatem. Bez prawnika, na przykładach."
4|pubDate: 2026-09-08
5|tags: ["licencje", "open-source", "poradnik"]
6|access: free
7|---
8|
9|Darmowe nie znaczy „rób co chcesz”. Każde narzędzie z [katalogu](/narzedzia/) ma licencję,
10|która mówi, co wolno Ci zrobić z kodem. Krótki przewodnik dla hosta — bez prawnika.
11|
12|## Trzy kolory, którymi oznaczam narzędzia
13|
14|- **Zielony (MIT, Apache-2.0, BSD)** — używaj jak chcesz: komercyjnie, w swojej ofercie,
15|  zmodyfikowany, nawet sprzedawaj. Jedyne wymagania: zachowaj informację o autorach w plikach
16|  licencji. To jest „darmowe” w potocznym sensie.
17|- **Żółty (GPL, AGPL, LGPL, MPL)** — wolno Ci **używać** narzędzia (uruchamiać je dla siebie
18|  i klientów), ale jeśli zmienisz kod i rozpowszechniasz go dalej, musisz udostępnić swoje
19|  zmiany na tych samych zasadach. AGPL dodatkowo „widzi” przez serwer. Praktyczna zasada dla hosta:
20|  **używaj jako usługi, nie wbuduj w produkt, który sprzedajesz**.
21|- **Czerwony (brak licencji)** — „all rights reserved”. Autor nie dał Ci żadnych praw.
22|  Możesz patrzeć i uczyć się, ale nie kopiuj kodu.
23|
24|## Co to znaczy dla Twojego biznesu
25|
26|1. **PMS na MIT (np. Movin' In)** — możesz go postawić dla swoich obiektów, zmienić logo
27|   i obsługiwać nim 10 apartamentów. Możesz nawet wziąć pieniądze od innych hostów za „zarządzanie
28|   ich obiektami w Twoim systemie”.
29|2. **Narzędzie na AGPL (np. FreeScout)** — postaw dla siebie, podłącz maila Booking.com,
30|   używaj. Nie pakuj jego kodu w aplikację, którą sprzedasz jako swoją.
31|3. **Scraper (np. pyairbnb)** — licencja MIT, ale to **warunki Airbnb**, nie licencja, są tu
32|   problemem. Publiczne dane do analizy własnej — OK; systematyczne masowe pobieranie — ryzyko.
33|
34|## Szybka ściąga
35|
36|| Chcesz… | Licencja, której szukasz |
37||---|---|
38|| używać narzędzia w swojej firmie | dowolna z zielonych |
39|| wbudować w usługę dla klientów | MIT / Apache / BSD |
40|| zmienić kod narzędzia dla siebie | dowolna, ale GPL wymaga publikacji zmian |
41|| sprzedawać zmodyfikowaną wersję | tylko MIT / Apache / BSD |
42|
43|## Lista kontrolna przed wdrożeniem
44|
45|1. Sprawdź plik `LICENSE` w repo (nie opis na stronie).
46|2. Jeśli GPL/AGPL: planujesz używać jako usługa? Jeśli tak — spokój.
47|3. Jeśli brak licencji: napisz do autora o zgodę albo wybierz coś innego z katalogu.
48|4. Zachowaj oryginalne pliki licencji w swoich wdrożeniach (to obowiązek w MIT/Apache).
49|
50|---
51|
52|Chcesz, żebym sprawdził licencje pod Twoje konkretne wdrożenie? [Napisz](/kontakt/) — audyt
53|zaczyna się od 490 zł.
54|
```


---
## src/content/blog/ile-placisz-za-saas.md

```md
1|---
2|title: "Ile naprawdę płacisz za SaaS-y do najmu? Policz to, zanim kupisz kolejny"
3|description: "PMS, channel manager, narzędzie do sprzątania, dynamiczne ceny — host z 5 obiektów płaci 300–800 zł/mies. Pokazuję, ile z tego pokrywają darmowe odpowiedniki z katalogu."
4|pubDate: 2026-09-08
5|tags: ["koszty", "saas", "open-source"]
6|access: free
7|---
8|
9|Cena abonamentu nigdy nie boli, bo jest rozłożona. Ale zsumuj kwartalne wyciągi — większość
10|hostów, których pytam, nie robi tego nigdy.
11|
12|## Tabela prawdy (5 obiektów, PL, 2026)
13|
14|| Funkcja | Typowy SaaS | Darmowy odpowiednik z katalogu |
15||---|---|---|
16|| Channel manager / sync iCal | 150–400 zł/mies | Sync-Rentals-Calendar + cron |
17|| Kody do zamków z rezerwacji | 100–250 zł/mies | Home Assistant + Rental Control |
18|| Skrzynka wiadomości gości | 80–200 zł/mies | Chatwoot + bot Telegram |
19|| Plan sprzątań dla ekipy | 100–200 zł/mies | OpenSTR / własny kalendarz iCal ekipy |
20|| Raporty rentowności | 150–300 zł/mies | hurtownia dbt (wzorzec: STR warehouse) |
21|
22|Suma SaaS: **580–1350 zł/mies.** Rocznie: **7–16 tys. zł.** To ceny za narzędzia, które
23|raz skonfigurowane, robią rzeczy, do których nie potrzebujesz cudzej chmury.
24|
25|## Ale (i to ważne „ale”)
26|
27|Open-source nie jest darmowy w sensie „zero pracy”:
28|
29|1. **Ktoś musi to skonfigurować** — godziny Twoje albo wdrożeniowe (jednorazowo).
30|2. **Ktoś musi to utrzymywać** — aktualizacje, kopie zapasowe. To godziny w miesiącu, nie dni.
31|3. **Nie każde narzędzie ma polskie wsparcie** — dokumentacje czytasz po angielsku.
32|
33|Dlatego moja zasada: **automatyzuj open-source tam, gdzie to proces stabilny**
34|(kalendarze, kody, alerty), i **płać za SaaS tam, gdzie liczy się wsparcie i rapid response**
35|(np. channel manager przy 10+ kanałach: każda godzina awarii to puste noce).
36|
37|## Kalkulator na marginesie kartki
38|
39|Zanim kupisz kolejny abonament, policz trzy liczby:
40|
41|1. Ile **godzin/mies.** realnie Cię to kosztuje dziś ręcznie?
42|2. Ile kosztuje SaaS **rocznie**, z podatkiem?
43|3. Po ilu miesiącach zwróciłoby się **jednorazowe wdrożenie** na open-source?
44|
45|Jeśli punkt 3 wychodzi poniżej 12 miesięcy — zastanów się poważnie nad wdrożeniem.
46|[Audyt (490 zł)](/kontakt/) liczy to dla Twoich konkretnych obiektów, z konkretnymi narzędziami
47|z [katalogu](/narzedzia/), i wchodzi w cenę wdrożenia, jeśli zdecydujesz się na nie.
48|
```


---
## src/content/blog/jak-podpiac-beds24-do-telegrama.md

```md
1|---
2|title: "Jak podpiąć Beds24 do Telegrama"
3|description: "Darmowa automatyzacja powiadomień o rezerwacjach."
4|pubDate: 2026-09-01
5|access: free
6|tags: ["beds24", "telegram", "automatyzacja"]
7|---
8|To jest treść poradnika.
9|
```


---
## src/content/kursy/szablon-cennika-dynamicznego.md

```md
1|---
2|title: "Szablon cennika dynamicznego dla Airbnb i Booking"
3|description: "Jak obniżyć stawkę przy 7-dniowej przerwie bez ręcznego klikania?"
4|pubDate: 2026-09-02
5|access: paid
6|level: średni
7|tags: ["cennik", "revenue", "automatyzacja"]
8|---
9|Treść kursu.
10|
```


---
## src/content/kursy/pierwsze-kroki-w-automatyzacji.md

```md
1|---
2|title: "Pierwsze kroki w automatyzacji najmu"
3|description: "Darmowy kurs dla początkujących — od mapowania procesów po pierwszy automatyzacja."
4|pubDate: 2026-08-15
5|access: free
6|level: początkujący
7|tags: ["start", "automatyzacja", "dla-początkujących"]
8|---
9|Treść kursu.
10|
```


---
## src/content/programy/beds24-telegram-bot.md

```md
1|---
2|title: "Beds24 Telegram Bot"
3|description: "Bot do akceptowania wiadomości gości z poziomu Telegrama."
4|pubDate: 2026-08-20
5|access: free
6|repoUrl: "https://github.com/example/beds24-telegram-bot"
7|demoUrl: "https://example.com/demo"
8|tags: ["beds24", "telegram", "python"]
9|---
10|Opis projektu.
11|
```


---
## src/content/programy/ical-cleaner.md

```md
1|---
2|title: "iCal Cleaner"
3|description: "Skrypt Python do łączenia kalendarzy iCal z różnych kanałów."
4|pubDate: 2026-08-10
5|access: free
6|repoUrl: "https://github.com/example/ical-cleaner"
7|demoUrl: ""
8|tags: ["python", "ical", "kalendarze"]
9|---
10|Opis projektu.
11|
```
