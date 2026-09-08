# Rebuild Blueprint — Personal Dev Hub
### Kompletny plan i implementacja przebudowy strony z `full_app.md`

> Ten dokument jest odpowiedzią na Twój brief. Zawiera analizę obecnego projektu, nową architekturę, kompletny design system oraz **gotowy do wklejenia kod** (config, content collections, layouty, komponenty, strony, przykładowe wpisy). Potraktuj go jako nowy `full_app.md` — snapshot docelowego stanu repo.

---

## 0. Założenia (zanim zaczniemy)

Zanim przejdę do konkretów, przyjąłem kilka decyzji tam, gdzie brief dawał mi wybór. Zapisuję je jawnie, żebyś mógł je łatwo odrzucić:

1. **Język UI: angielski, treść: dowolna (przykłady: polski).** W briefie dwa razy pojawił się angielski — nazwy w nawigacji (`Projects / Posts / Resources / About`) i przykładowa fraza hero (*"I build things, discover interesting projects..."*). To pasuje też do inspiracji (`coleprice.com`, `fkrzski.dev` — obie po angielsku) i do idei „internetowego hubu” kierowanego też do zagranicznych czytelników GitHuba. **Warstwa UI (nawigacja, przyciski, etykiety) jest po angielsku.** Twoje realne wpisy możesz pisać w dowolnym języku — schemat treści jest językowo neutralny.
2. **Wyjątek: instrukcje instalacji w `github` entries.** Explicit wymóg z briefu — te pola w przykładowych wpisach napisałem po polsku, tak jak prosiłeś.
3. **Jeden unified content collection (`entries`) z dyskryminowanym polem `type`**, zamiast 6 osobnych kolekcji. Upraszcza to homepage/feed (jedno zapytanie, sortowanie po dacie) i dokładnie realizuje Twoje zdanie: *„Nie muszą to być osobne techniczne modele, jeśli architektura pozwala prościej.”*
4. **Nawigacja: `Projects` / `Posts` / `Resources` / `About`** — dokładnie to, co zaproponowałeś. 6 typów treści mapuję na te 4 sekcje (patrz sekcja 3).
5. **Zero theme-switchera.** Napisałeś „dark mode ONLY” — więc nie ma przełącznika light/dark (w przeciwieństwie do coleprice.com, które ma). To też mniej JS i mniej stanu do zarządzania — zgodnie z priorytetem „szybkość” i „minimalny JavaScript”.
6. **Nazwa marki / domena / social linki są placeholderami** (`{{NAME}}`, `{{GITHUB_HANDLE}}` itd.) — podmieniasz raz w `src/consts.ts`.
7. Nie mam dostępu do Twojego żywego repo (masz je lokalnie) — nie mogłem uruchomić `npm run build` za Ciebie. Kod jest napisany zgodnie z dokładnie tymi samymi wzorcami, których już używasz (Astro content layer, `glob()` loader, Tailwind 4 `@theme`), więc powinien wejść bez tarcia. Na końcu dokumentu masz checklistę do odpalenia lokalnie.

---

## 1. Analiza obecnego projektu

### Co to jest dzisiaj

`full_app.md` opisuje **"RentalDev"** — statyczną stronę Astro 7 + Tailwind 4 dla niszy automatyzacji najmu krótkoterminowego (`najemks.pl`). Jasny motyw (kremowe tło, granatowo-złota paleta „petrol + gold"), trzy kolekcje treści (`blog`, `wideo`, `programy`), osobna strona `narzedzia` renderująca statyczny JSON (`tools.json`) jako katalog narzędzi AI/automatyzacji, plus strony `about`, `kontakt`, `automatyzacja`.

### Co zachowujemy (fundament jest dobry)

| Element | Decyzja |
|---|---|
| Astro (content collections / `glob` loader) | ✅ zachować — to jest dokładnie właściwy silnik pod content-driven hub |
| Tailwind 4 (`@theme`, brak configu JS) | ✅ zachować — tylko podmieniamy tokeny |
| MDX, RSS, Sitemap, Sharp | ✅ zachować bez zmian |
| `BaseHead.astro`, `FormattedDate.astro`, `HeaderLink.astro` | ✅ zachować logikę, dostosować markup/klasy |
| Wzorzec `content.config.ts` z Zod | ✅ zachować wzorzec, przeprojektować schemat |
| `astro.config.mjs` (fonty przez `fontProviders`) | ✅ zachować mechanizm, podmienić font |

### Co usuwamy całkowicie

| Element | Powód |
|---|---|
| Cała jasna paleta (`--color-cream`, `--color-background: #FBF9F5` itd.) | Dark mode only |
| `src/data/tools.json` + `ToolCard.astro` | Zastąpione przez wpisy typu `github` w content collection — te same dane (nazwa, gwiazdki, licencja, opis), ale jako edytowalne pliki Markdown zamiast statycznego JSON-a |
| `src/content/kursy/*`, kolekcja `wideo` jako osobny byt | Konsolidacja: kursy → `tutorial`, wideo → pole `video` lub typ `video` (patrz sekcja 4) |
| `src/pages/narzedzia/`, `src/pages/programy/`, `src/pages/kursy/`, `src/pages/wideo/`, `src/pages/automatyzacja.astro`, `src/pages/kontakt.astro` | Zastąpione nową IA: `/projects`, `/writing`, `/resources` |
| `src/layouts/BlogPost.astro` **lub** `BlogPostLayout.astro` (jest ich dwa — duplikat) | Jeden `EntryLayout.astro` obsługujący wszystkie typy |
| Zależność `@astrojs/markdown-satteri` w `package.json` | Nietypowa/niestandardowa zależność, nieużywana przez żaden widoczny import — Astro ma wbudowany Shiki do syntax highlightingu, nie jest potrzebna |
| Font „Atkinson” (pliki `.woff`) | Zamiana na jeden font sans (patrz design system) |
| `src/components/HeroVisual.astro`, `CategoryCard.astro`, `ArticleCard.astro`, `ProjectCard.astro`, `SectionHeading.astro`, `Navbar.astro` + `Header.astro` (masz oba — duplikat) | Zastąpione mniejszym, spójnym zestawem: `Header`, `Footer`, `EntryCard`, `TypeBadge`, `TagList` |
| Cała treść PL o rentalach/SaaS/beds24 jako *temat* strony | Temat strony się zmienia całkowicie — ale format kilku wpisów (np. "found repo" dla `langflow`/`n8n` z `tools.json`) jest świetnym punktem wyjścia dla przykładowych wpisów typu `github` (patrz sekcja 13) |

### Co robimy z duplikatami

Zauważyłem dwa komponenty nagłówka (`Header.astro` + `Navbar.astro`) i dwa layouty posta (`BlogPost.astro` + `BlogPostLayout.astro`) — typowy ślad iteracji bez sprzątania. Nowa struktura ma **jeden** komponent na jedną odpowiedzialność.

---

## 2. Nowa koncepcja

**Pozycjonowanie:** nie portfolio, nie CV, nie SaaS landing page. To **kuratorska, osobista platforma** — miejsce, gdzie developer publikuje to, co buduje, znajduje i czego się uczy.

**Hero (jedno zdanie, bez „Hi, I'm X, 7 years of experience"):**

> I build things, find interesting projects, and share what I learn.

**Ton:** spokojny, rzeczowy, trochę redakcyjny (jak `fkrzski.dev`), bez marketingowego przegrzania.

---

## 3. Architektura informacji

### Mapowanie 6 typów treści → 4 sekcje nawigacji

```
type: project   ─┐
                  ├──▶  /projects   (filtr: All / Mine / Found on GitHub)
type: github    ─┘

type: post      ─┐
                  ├──▶  /writing    (chronologiczny feed, tutorial oznaczony ikoną/etykietą)
type: tutorial  ─┘

type: resource  ───▶  /resources   (lekka lista linków z Twoim komentarzem)

type: video     ───▶  NIE ma własnej sekcji w nawigacji — video jest atrybutem
                       wpisu (embed w środku project/github/post/tutorial),
                       zgodnie z Twoim „video jako naturalny element wpisu”.
                       Samodzielne wpisy wideo (np. „speedrun nagranie”) i tak
                       trafiają do feedu /writing, tylko z inną ikoną typu.
```

### Nawigacja (header)

```
{{NAME}}          Projects   Posts   Resources   About        [GitHub ↗]
```

* `Posts` w menu → prowadzi na `/writing` (nazwa route'a to `writing`, bo zawiera i posty, i tutoriale; etykieta w menu zostaje `Posts`, bo tak chciałeś — krótko i bez żargonu).
* Mobile: te same 4 pozycje w rozwijanym menu (bez chowania czegokolwiek — to i tak tylko 4 linki, nie potrzeba „hamburger + submenu”).

### Mapa stron

```
/                     → Home: skrócone hero + „Currently exploring” + Featured + Latest (mix wszystkich typów)
/projects             → lista: type=project | type=github, tabs: All / Mine / Found
/projects/[slug]      → szczegóły wpisu (Project lub GitHub find)
/writing              → lista: type=post | type=tutorial, chronologicznie
/writing/[slug]       → szczegóły (krótki post ALBO pełny tutorial z TOC)
/resources            → lista: type=resource, lekki układ (link + 1-2 zdania)
/resources/[slug]     → szczegóły (Twój komentarz + link wyjściowy)
/about                → krótkie o mnie, stack, linki
/tags/[tag]           → archiwum po tagu (bonus — łatwe odkrywanie contentu)
/rss.xml              → RSS ze wszystkich nie-draftowych wpisów
/404
```

---

## 4. Design system

### Filozofia

Ciemne tło, off-white tekst, **jeden** akcent, cienkie 1px obramowania, prawie zerowe zaokrąglenia, brak gradientów/cieni/glassmorphismu. Liczby i etykiety typu (`01`, `GITHUB`, `PROJECT`) w monospace — to daje „techniczny, ale spokojny” charakter z `fkrzski.dev`, bez kopiowania jego layoutu.

### Kolory (`@theme`)

```css
--color-bg:            #0A0A0B;  /* tło strony — prawie czarne, lekko cieplejsze niż czysta czerń */
--color-bg-elevated:   #111113;  /* karty, header na scrollu */
--color-surface:       #17171A;  /* code blocks, inputy */
--color-border:        #262629;  /* separatory, obramowania kart */
--color-border-strong: #34343A;  /* hover na obramowaniach, aktywne taby */
--color-text:          #ECEAE6;  /* off-white — nie czysta biel */
--color-text-muted:    #96959B;  /* opisy, meta */
--color-text-faint:    #5C5B60;  /* mniej istotne meta (np. daty w liście) */
--color-accent:        #D2A45C;  /* przygaszony bursztyn — inspiracja coleprice, nie kopia */
--color-accent-dim:    #8C7548;  /* accent na ciemnym tle / disabled */
--color-accent-tint:   rgb(210 164 92 / 0.12); /* tło pod pill/hover, bardzo subtelne */
```

Dlaczego bursztyn, a nie fiolet/niebieski? Bo fiolet/niebieski na czarnym tle to dokładnie estetyka „generic AI SaaS”, której chciałeś uniknąć. Bursztyn/miedź czyta się bardziej jak terminal / redakcyjny detal, mniej jak landing page startupu.

### Typografia

* **Sans (UI + nagłówki + body):** `Inter` — jeden font, dwa cięcia (400, 600). Zero dekoracyjnego heading-fontu — to Ty i tak nadajesz charakter poprzez layout, nie poprzez fantazyjną czcionkę.
* **Mono (kod, etykiety typu, liczby porządkowe, tagi, meta-daty):** stos systemowy `ui-monospace, "SF Mono", "Cascadia Mono", Menlo, Consolas, monospace` — **zero dodatkowego web fonta**, zero requestu sieciowego, zawsze ostre. To jedna z niewielu decyzji, które bezpośrednio poprawiają szybkość (priorytet #2 w UX).

```css
--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: ui-monospace, "SF Mono", "Cascadia Mono", Menlo, Consolas, monospace;
```

### Skala, promienie, kontenery

```css
--radius-sm: 3px;   /* pigułki tagów, mały button */
--radius-md: 5px;   /* karty */
/* brak --radius-lg / --radius-xl — celowo, "mało zaokrągleń" */

--container-prose: 42rem;  /* ~68ch — kolumna czytania (about, tutorial, post) */
--container-wide:  70rem;  /* siatki kart, listy */
```

### Zasady wizualne (twarde reguły, żeby nie „spłynąć” w SaaS)

- Brak `box-shadow` poza jednym bardzo subtelnym cieniem pod headerem przy scrollu (`0 1px 0 var(--color-border)` — czyli w praktyce linia, nie cień).
- Brak gradientów tła. Jedyne miejsce na gradient to bardzo delikatny radial-fade w tle hero (opcjonalnie, ledwo widoczny — patrz `global.css`).
- Separator to zawsze `1px solid var(--color-border)`, nigdy gruby blok koloru.
- Hover = zmiana koloru tekstu/obramowania/underline, `transform: translateY(-1px)` co najwyżej — bez skalowania kart, bez „lift + shadow” efektu typowego dla SaaS.

---

## 5. Content model

### Wspólne pola (`baseFields`)

| Pole | Typ | Opis |
|---|---|---|
| `title` | string | tytuł wpisu |
| `description` | string | 1–2 zdania, używane też jako meta description / OG |
| `date` | date | data publikacji |
| `updatedDate` | date? | opcjonalna data aktualizacji |
| `tags` | string[] | domyślnie `[]` |
| `image` | image()? | screenshot/preview, zoptymalizowany przez `astro:assets` |
| `featured` | boolean | domyślnie `false` — steruje sekcją Featured na homepage |
| `draft` | boolean | domyślnie `false` — wpis niepublikowany |
| `video` | object? | opcjonalny embed wideo **dołączony** do dowolnego typu wpisu (patrz niżej) |

Pole `video` (obiekt, może wystąpić w każdym typie — bo „video ma być naturalnym elementem wpisu”):

```ts
video: z.object({
  youtubeId: z.string().optional(),
  file: z.string().optional(),      // lokalny plik z /public/videos/...
  url: z.string().url().optional(), // dowolny link (Loom, Vimeo itp.)
  caption: z.string().optional(),
}).optional()
```

### Pola specyficzne per typ

| Typ | Dodatkowe pola | Kto autor |
|---|---|---|
| `project` | `repoUrl?`, `demoUrl?`, `stack: string[]`, `status: 'active'\|'maintained'\|'archived'\|'wip'` | **Ty** |
| `github` | `author` (wymagane), `repoUrl` (wymagane), `demoUrl?`, `why` (wymagane — „dlaczego uważam to za ciekawe"), `installSteps: string[]`, `stack: string[]` | **kto inny** — UI jasno pokazuje „Found on GitHub, by {author}” |
| `post` | *(brak dodatkowych — body to krótka treść)* | Ty |
| `tutorial` | `relatedSlug?` (link do project/github, którego dotyczy), `difficulty: 'beginner'\|'intermediate'\|'advanced'`, `estimatedTime?` | Ty |
| `resource` | `url` (wymagane — link wyjściowy), `sourceName?` | znaleziony gdzie indziej |
| `video` | `youtubeId?`, `file?`, `url?`, `duration?` | Ty (samodzielny wpis wideo, w odróżnieniu od wideo *dołączonego* do innego wpisu) |

To rozróżnienie `project` vs `github` jest tu kluczowe — **sam typ pola jest mechanizmem**, który wymusza, że nigdy nie zasugerujesz autorstwa cudzego projektu: `github` wymaga pola `author`, a UI (`TypeBadge`) renderuje inny label i inny kolor badge'a dla każdego z tych dwóch typów.

### Struktura folderów

```
src/content/entries/
  project/
    pricing-sync-cli.md
  github/
    langflow.md
  post/
    2026-08-20-found-a-nice-mcp-pattern.md
  tutorial/
    running-langflow-locally.md
  resource/
    a-good-read-on-mcp-servers.md
  video/
    quick-look-at-langflow.md
```

Foldery = wygoda przy dodawaniu wpisu (wiesz gdzie kliknąć „new file"), ale **jeden `glob()` łapie wszystko** — folder nie jest źródłem prawdy, jest nim pole `type` w frontmatterze. To jest właśnie ten „prostszy model” zamiast 6 osobnych kolekcji.

---

## 6. Struktura plików (docelowa)

```
src/
  assets/
    fonts/                        (puste — Inter ładowany przez fontProviders.google())
  components/
    Header.astro
    Footer.astro
    EntryCard.astro               ← główny "redakcyjny" komponent (numer, badge, opis, tagi, linki)
    TypeBadge.astro                ← "My project" / "Found on GitHub" / "Tutorial" / itd.
    TagList.astro
    InstallBlock.astro             ← blok komend z copy-button
    VideoEmbed.astro               ← obsługuje youtubeId / file / url
    CurrentlyExploring.astro
    BaseHead.astro                 (zachowany, zaktualizowany)
    FormattedDate.astro            (zachowany bez zmian)
  content/
    entries/                      (patrz sekcja 5)
  content.config.ts
  consts.ts
  layouts/
    Layout.astro
    EntryLayout.astro
  lib/
    content.ts                     ← helpery: getEntries, getFeatured, getByType, sortByDate, getAllTags
  pages/
    index.astro
    about.astro
    404.astro
    rss.xml.js
    projects/
      index.astro
      [slug].astro
    writing/
      index.astro
      [slug].astro
    resources/
      index.astro
      [slug].astro
    tags/
      [tag].astro
  styles/
    global.css
astro.config.mjs
package.json
tsconfig.json
```

---

## 7. Konfiguracja

### `package.json`

```json
{
  "name": "dev-hub",
  "type": "module",
  "version": "0.1.0",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/mdx": "^8.0.0",
    "@astrojs/rss": "^4.0.19",
    "@astrojs/sitemap": "^3.7.4",
    "@tailwindcss/vite": "^4.3.3",
    "astro": "^7.3.1",
    "sharp": "^0.35.0",
    "tailwindcss": "^4.3.3"
  }
}
```

Różnica vs. obecny plik: usunięty `@astrojs/markdown-satteri` (nieużywana/niestandardowa zależność) i `allowScripts.esbuild` (zostawiam, jeśli był potrzebny w Twoim CI — dorzuć z powrotem, to nieszkodliwe, po prostu nie widziałem, gdzie jest wymagany).

### `astro.config.mjs`

```javascript
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://{{DOMAIN}}',
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      // Ciemny motyw kodu spójny z resztą strony — nie domyślny "github-dark",
      // bo ma zbyt niebieskie tło; "one-dark-pro" trzyma się bliżej naszej palety.
      theme: 'one-dark-pro',
      wrap: true,
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['sans-serif'],
      weights: [400, 500, 600, 700],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
    css: {
      postcss: {
        plugins: [],
      },
    },
  },
});
```

### `tsconfig.json`

Bez zmian względem obecnego — zostaje.

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

### `src/consts.ts`

```typescript
// Globalne dane strony — importuj skąd chcesz: `import { NAME, NAV } from '../consts'`

export const NAME = '{{NAME}}';
export const SITE_TITLE = `${NAME} — dev hub`;
export const SITE_DESCRIPTION =
  'I build things, find interesting projects, and share what I learn.';

export const CURRENTLY_EXPLORING =
  '{{Krótkie zdanie o tym, co teraz eksplorujesz/testujesz — edytuj ręcznie co jakiś czas.}}';

// Menu główne — kolejność = kolejność w headerze
export const NAV = [
  { label: 'Projects', href: '/projects' },
  { label: 'Posts', href: '/writing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
] as const;

export const SOCIAL = {
  github: 'https://github.com/{{GITHUB_HANDLE}}',
  email: '{{EMAIL}}',
};
```

---

## 8. `src/content.config.ts`

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Pola wspólne dla każdego typu wpisu ─────────────────────────────
// `video` jest tu celowo, bo wideo ma być "naturalnym elementem wpisu",
// nie osobną wielką sekcją — każdy typ może mieć dołączony embed.
const baseFields = ({ image }: { image: () => z.ZodType<string> }) => ({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  image: image().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  video: z
    .object({
      youtubeId: z.string().optional(),
      file: z.string().optional(),
      url: z.string().url().optional(),
      caption: z.string().optional(),
    })
    .optional(),
});

const entries = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/entries' }),
  schema: ({ image }) =>
    z.discriminatedUnion('type', [
      // Mój własny projekt.
      z.object({
        type: z.literal('project'),
        ...baseFields({ image }),
        repoUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        stack: z.array(z.string()).default([]),
        status: z.enum(['active', 'maintained', 'archived', 'wip']).default('active'),
      }),

      // Cudzy projekt znaleziony na GitHubie — `author` i `repoUrl` są
      // wymagane właśnie po to, żeby UI nigdy nie mogło pomylić tego
      // z moim własnym projektem.
      z.object({
        type: z.literal('github'),
        ...baseFields({ image }),
        author: z.string(),
        repoUrl: z.string().url(),
        demoUrl: z.string().url().optional(),
        why: z.string(), // "dlaczego uważam to za ciekawe" — krótko, 1-3 zdania
        installSteps: z.array(z.string()).default([]),
        stack: z.array(z.string()).default([]),
      }),

      // Krótki, luźny post — bez case-study.
      z.object({
        type: z.literal('post'),
        ...baseFields({ image }),
      }),

      // Własny tutorial / instrukcja "jak uruchomić X".
      z.object({
        type: z.literal('tutorial'),
        ...baseFields({ image }),
        relatedSlug: z.string().optional(), // slug projektu/repo, którego dotyczy
        difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
        estimatedTime: z.string().optional(),
      }),

      // Link do czegoś ciekawego znalezionego gdzie indziej (artykuł, strona, narzędzie).
      z.object({
        type: z.literal('resource'),
        ...baseFields({ image }),
        url: z.string().url(),
        sourceName: z.string().optional(),
      }),

      // Samodzielny wpis wideo (nagranie ekranu z komentarzem).
      z.object({
        type: z.literal('video'),
        ...baseFields({ image }),
        youtubeId: z.string().optional(),
        file: z.string().optional(),
        url: z.string().url().optional(),
        duration: z.string().optional(),
      }),
    ]),
});

export const collections = { entries };
```

---

## 9. `src/lib/content.ts` — helpery

```typescript
import { getCollection, type CollectionEntry } from 'astro:content';

export type Entry = CollectionEntry<'entries'>;

const isPublished = (entry: Entry) => !entry.data.draft;

export async function getPublishedEntries(): Promise<Entry[]> {
  const entries = await getCollection('entries', isPublished);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeatured(limit = 4): Promise<Entry[]> {
  const entries = await getPublishedEntries();
  return entries.filter((e) => e.data.featured).slice(0, limit);
}

export async function getByTypes(types: Entry['data']['type'][]): Promise<Entry[]> {
  const entries = await getPublishedEntries();
  return entries.filter((e) => types.includes(e.data.type));
}

// /projects → project + github
export const getProjectEntries = () => getByTypes(['project', 'github']);

// /writing → post + tutorial (+ samodzielne video, żeby nie tworzyć osobnej sekcji nav)
export const getWritingEntries = () => getByTypes(['post', 'tutorial', 'video']);

// /resources
export const getResourceEntries = () => getByTypes(['resource']);

export async function getAllTags(): Promise<string[]> {
  const entries = await getPublishedEntries();
  const tags = new Set<string>();
  entries.forEach((e) => e.data.tags.forEach((t) => tags.add(t)));
  return [...tags].sort();
}

export async function getEntriesByTag(tag: string): Promise<Entry[]> {
  const entries = await getPublishedEntries();
  return entries.filter((e) => e.data.tags.includes(tag));
}

// Ładna etykieta do UI, jedno miejsce zmiany dla wszystkich komponentów.
export const TYPE_LABEL: Record<Entry['data']['type'], string> = {
  project: 'My project',
  github: 'Found on GitHub',
  post: 'Post',
  tutorial: 'Tutorial',
  resource: 'Resource',
  video: 'Video',
};

export function entryHref(entry: Entry): string {
  switch (entry.data.type) {
    case 'project':
    case 'github':
      return `/projects/${entry.id}`;
    case 'resource':
      return `/resources/${entry.id}`;
    default:
      return `/writing/${entry.id}`;
  }
}
```

---

## 10. `src/styles/global.css`

```css
@import "tailwindcss";

/* ═══════════════════════════════════════════════════════════════════
   {{NAME}} — dev hub design system
   Dark mode only. Off-white tekst na prawie czarnym tle, jeden
   przygaszony akcent (bursztyn), cienkie obramowania, minimalne
   zaokrąglenia. Zero gradientów, zero glassmorphismu.
   ═══════════════════════════════════════════════════════════════════ */

@theme {
  --color-bg: #0A0A0B;
  --color-bg-elevated: #111113;
  --color-surface: #17171A;
  --color-border: #262629;
  --color-border-strong: #34343A;
  --color-text: #ECEAE6;
  --color-text-muted: #96959B;
  --color-text-faint: #5C5B60;
  --color-accent: #D2A45C;
  --color-accent-dim: #8C7548;

  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, "SF Mono", "Cascadia Mono", Menlo, Consolas, monospace;

  --radius-sm: 3px;
  --radius-md: 5px;
}

/* ── Baza ─────────────────────────────────────────────────────────── */

html {
  scroll-behavior: smooth;
  color-scheme: dark; /* dark mode only — brak przełącznika */
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: var(--color-accent-dim);
  color: var(--color-bg);
}

:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

h1, h2, h3, h4 {
  font-family: var(--font-sans);
  color: var(--color-text);
  font-weight: 600;
  letter-spacing: -0.015em;
}

h1 {
  font-size: clamp(1.9rem, 1.2rem + 2.6vw, 2.6rem);
  line-height: 1.15;
  font-weight: 700;
}

h2 {
  font-size: clamp(1.35rem, 1.1rem + 1vw, 1.75rem);
  line-height: 1.25;
}

h3 {
  font-size: 1.1rem;
  line-height: 1.4;
}

.lead {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

/* Etykiety monospace: numer porządkowy, typ, meta-daty, tagi */
.mono-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  background: var(--color-accent);
  color: var(--color-bg);
  padding: 0.6rem 1.1rem;
  border-radius: 0 0 var(--radius-sm) 0;
}
.skip-link:focus {
  left: 0;
}

/* ── Kontenery ────────────────────────────────────────────────────── */

.container-prose {
  width: 100%;
  max-width: 42rem;
  margin-inline: auto;
  padding-inline: 1.25rem;
}

.container-wide {
  width: 100%;
  max-width: 70rem;
  margin-inline: auto;
  padding-inline: 1.25rem;
}

/* ── Karty i separatory ───────────────────────────────────────────── */

.card {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
}

.card-hover {
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.card-hover:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-1px);
}

.divider {
  border: none;
  border-top: 1px solid var(--color-border);
}

/* ── Pigułki (tagi, status) ───────────────────────────────────────── */

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
}

.pill-accent {
  border-color: var(--color-accent-dim);
  color: var(--color-accent);
}

/* ── Przyciski / linki z podkreśleniem ────────────────────────────── */

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.55rem 1rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  color: var(--color-text);
  transition: border-color 0.15s ease, color 0.15s ease, background-color 0.15s ease;
}
.btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.btn-accent {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-bg);
}
.btn-accent:hover {
  background: var(--color-accent-dim);
  border-color: var(--color-accent-dim);
  color: var(--color-bg);
}

.link-underline {
  text-underline-offset: 3px;
  text-decoration-color: var(--color-border-strong);
  transition: text-decoration-color 0.15s ease, color 0.15s ease;
}
.link-underline:hover {
  color: var(--color-accent);
  text-decoration-color: var(--color-accent);
}

/* ── Prose (treść MDX tutoriali/postów) ──────────────────────────── */

.prose-content {
  color: var(--color-text);
  line-height: 1.75;
}
.prose-content h2 {
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
}
.prose-content h3 {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
.prose-content p {
  margin-bottom: 1.25rem;
  color: var(--color-text-muted);
}
.prose-content a {
  color: var(--color-accent);
  text-underline-offset: 3px;
}
.prose-content ul,
.prose-content ol {
  margin: 0 0 1.25rem 1.25rem;
  color: var(--color-text-muted);
}
.prose-content li {
  margin-bottom: 0.4rem;
}
.prose-content img {
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}
.prose-content pre {
  background: var(--color-surface) !important;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1rem 1.1rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
}
.prose-content code {
  font-family: var(--font-mono);
}
.prose-content :not(pre) > code {
  background: var(--color-surface);
  padding: 0.15rem 0.4rem;
  border-radius: var(--radius-sm);
  font-size: 0.85em;
}
.prose-content blockquote {
  border-left: 2px solid var(--color-accent-dim);
  padding: 0.1rem 0 0.1rem 1rem;
  margin: 0 0 1.5rem;
  color: var(--color-text-muted);
  font-style: italic;
}

/* ── Ruch — szanujemy prefers-reduced-motion ─────────────────────── */

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .card-hover, .btn, .link-underline { transition: none; }
  .card-hover:hover { transform: none; }
}
```

---

## 11. Layouty

### `src/layouts/Layout.astro`

```astro
---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description: string;
  image?: string;
}

const { title, description, image } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <BaseHead title={title} description={description} image={image} />
  </head>
  <body>
    <a href="#content" class="skip-link">Skip to content</a>
    <Header />
    <main id="content">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

### `src/layouts/EntryLayout.astro`

Jeden layout, warunkowe sekcje zależnie od `type` — dokładnie to, o co prosiłeś ("nie komplikuj modelu bez potrzeby").

```astro
---
import Layout from './Layout.astro';
import TypeBadge from '../components/TypeBadge.astro';
import TagList from '../components/TagList.astro';
import VideoEmbed from '../components/VideoEmbed.astro';
import InstallBlock from '../components/InstallBlock.astro';
import FormattedDate from '../components/FormattedDate.astro';
import { Image } from 'astro:assets';
import type { Entry } from '../lib/content';

interface Props {
  entry: Entry;
}

const { entry } = Astro.props;
const { data } = entry;
const { Content } = await entry.render();
---

<Layout title={data.title} description={data.description} image={data.image?.src}>
  <article class="container-prose py-16">
    <div class="mb-6 flex items-center gap-3">
      <TypeBadge type={data.type} author={'author' in data ? data.author : undefined} />
      <span class="mono-label"><FormattedDate date={data.date} /></span>
    </div>

    <h1>{data.title}</h1>
    <p class="lead mt-3">{data.description}</p>

    {data.image && (
      <Image src={data.image} alt={data.title} class="mt-8 w-full rounded-md border border-[--color-border]" />
    )}

    {/* Meta specyficzne dla "found on GitHub" */}
    {data.type === 'github' && (
      <div class="card mt-8">
        <p class="mono-label mb-2">Why I like it</p>
        <p class="text-text-muted">{data.why}</p>
      </div>
    )}

    {data.type === 'github' && data.installSteps.length > 0 && (
      <InstallBlock steps={data.installSteps} />
    )}

    {(data.type === 'project' || data.type === 'github') && data.stack.length > 0 && (
      <div class="mt-6 flex flex-wrap gap-1.5">
        {data.stack.map((s) => <span class="pill">{s}</span>)}
      </div>
    )}

    {data.video && <VideoEmbed video={data.video} class="mt-10" />}
    {data.type === 'video' && (data.youtubeId || data.file || data.url) && (
      <VideoEmbed video={{ youtubeId: data.youtubeId, file: data.file, url: data.url }} class="mt-10" />
    )}

    <div class="prose-content mt-10">
      <Content />
    </div>

    <hr class="divider my-10" />

    <div class="flex flex-wrap items-center justify-between gap-4">
      <TagList tags={data.tags} />
      <div class="flex gap-3">
        {'repoUrl' in data && data.repoUrl && (
          <a class="btn" href={data.repoUrl} target="_blank" rel="noopener">GitHub ↗</a>
        )}
        {'demoUrl' in data && data.demoUrl && (
          <a class="btn btn-accent" href={data.demoUrl} target="_blank" rel="noopener">Live demo ↗</a>
        )}
        {data.type === 'resource' && (
          <a class="btn btn-accent" href={data.url} target="_blank" rel="noopener">Visit ↗</a>
        )}
      </div>
    </div>
  </article>
</Layout>
```

---

## 12. Komponenty

### `src/components/TypeBadge.astro`

To jest komponent, który fizycznie uniemożliwia pomylenie „mój projekt” z „znalazłem na GitHubie".

```astro
---
import { TYPE_LABEL } from '../lib/content';

interface Props {
  type: keyof typeof TYPE_LABEL;
  author?: string;
}

const { type, author } = Astro.props;
const isFound = type === 'github';
---

<span class:list={['pill', isFound ? '' : 'pill-accent']}>
  {isFound ? `Found on GitHub${author ? ` · by ${author}` : ''}` : TYPE_LABEL[type]}
</span>
```

### `src/components/EntryCard.astro`

Główny „redakcyjny” komponent listy — numer porządkowy, typ, tytuł, opis, tagi, linki. Realizuje dokładnie układ z Twojego przykładu (`01 / GitHub / opis / tagi / linki`).

```astro
---
import { Image } from 'astro:assets';
import TypeBadge from './TypeBadge.astro';
import FormattedDate from './FormattedDate.astro';
import { entryHref, TYPE_LABEL } from '../lib/content';
import type { Entry } from '../lib/content';

interface Props {
  entry: Entry;
  index?: number;
}

const { entry, index } = Astro.props;
const { data } = entry;
const href = entryHref(entry);
---

<article class="card card-hover">
  <div class="flex items-start justify-between gap-4">
    <div class="flex items-center gap-3">
      {typeof index === 'number' && (
        <span class="mono-label">{String(index).padStart(2, '0')}</span>
      )}
      <TypeBadge type={data.type} author={'author' in data ? data.author : undefined} />
    </div>
    <span class="mono-label"><FormattedDate date={data.date} /></span>
  </div>

  <h3 class="mt-4">
    <a href={href} class="link-underline">{data.title}</a>
  </h3>
  <p class="mt-2 text-sm text-text-muted">{data.description}</p>

  {data.image && (
    <a href={href} class="mt-4 block overflow-hidden rounded-md border border-[--color-border]">
      <Image src={data.image} alt={data.title} width={640} height={360} class="w-full" />
    </a>
  )}

  {data.tags.length > 0 && (
    <div class="mt-4 flex flex-wrap gap-1.5">
      {data.tags.slice(0, 4).map((t) => <span class="pill">{t}</span>)}
    </div>
  )}
</article>
```

### `src/components/TagList.astro`

```astro
---
interface Props {
  tags: string[];
}
const { tags } = Astro.props;
---

{tags.length > 0 && (
  <div class="flex flex-wrap gap-1.5">
    {tags.map((t) => (
      <a href={`/tags/${t}`} class="pill link-underline">{t}</a>
    ))}
  </div>
)}
```

### `src/components/InstallBlock.astro`

Blok komend z przyciskiem kopiowania — jedyny JS na całej stronie poza tym, tzn. minimalny, progresywnie wzbogacający.

```astro
---
interface Props {
  steps: string[];
}
const { steps } = Astro.props;
---

<div class="mt-8">
  <p class="mono-label mb-2">Install</p>
  <div class="card !p-0 overflow-hidden">
    {steps.map((step, i) => (
      <div class:list={['flex items-center justify-between gap-3 px-4 py-3', i > 0 && 'border-t border-[--color-border]']}>
        <code class="font-mono text-sm text-text overflow-x-auto whitespace-pre">{step}</code>
        <button
          type="button"
          class="copy-btn mono-label shrink-0 cursor-pointer hover:text-accent"
          data-copy={step}
          aria-label="Copy command"
        >
          Copy
        </button>
      </div>
    ))}
  </div>
</div>

<script>
  document.querySelectorAll<HTMLButtonElement>('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy ?? '';
      await navigator.clipboard.writeText(text);
      const original = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(() => (btn.textContent = original), 1500);
    });
  });
</script>
```

### `src/components/VideoEmbed.astro`

```astro
---
interface VideoData {
  youtubeId?: string;
  file?: string;
  url?: string;
  caption?: string;
}
interface Props {
  video: VideoData;
  class?: string;
}
const { video, class: className } = Astro.props;
---

<div class:list={[className]}>
  {video.youtubeId && (
    <div class="aspect-video overflow-hidden rounded-md border border-[--color-border]">
      <iframe
        class="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
        title={video.caption ?? 'Video'}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )}
  {video.file && (
    <video controls class="w-full rounded-md border border-[--color-border]">
      <source src={video.file} />
    </video>
  )}
  {!video.youtubeId && !video.file && video.url && (
    <a href={video.url} target="_blank" rel="noopener" class="btn">Watch video ↗</a>
  )}
  {video.caption && <p class="mt-2 text-sm text-text-faint">{video.caption}</p>}
</div>
```

### `src/components/CurrentlyExploring.astro`

```astro
---
import { CURRENTLY_EXPLORING } from '../consts';
---

<p class="mono-label inline-flex items-center gap-2">
  <span class="inline-block h-1.5 w-1.5 rounded-full bg-[--color-accent]"></span>
  Currently exploring — {CURRENTLY_EXPLORING}
</p>
```

### `src/components/Header.astro`

```astro
---
import { NAME, NAV, SOCIAL } from '../consts';
import HeaderLink from './HeaderLink.astro';
---

<header class="sticky top-0 z-40 border-b border-[--color-border] bg-[--color-bg]/90 backdrop-blur">
  <div class="container-wide flex h-16 items-center justify-between">
    <a href="/" class="font-mono text-sm font-semibold tracking-tight">{NAME}</a>

    <nav class="hidden items-center gap-6 sm:flex" aria-label="Main navigation">
      {NAV.map((item) => <HeaderLink href={item.href}>{item.label}</HeaderLink>)}
    </nav>

    <div class="flex items-center gap-4">
      <a href={SOCIAL.github} target="_blank" rel="noopener" class="mono-label hidden sm:inline hover:text-accent">
        GitHub ↗
      </a>
      <button id="menu-toggle" class="sm:hidden" aria-label="Toggle menu" aria-expanded="false">
        <span class="mono-label">Menu</span>
      </button>
    </div>
  </div>

  <nav id="mobile-menu" class="hidden flex-col gap-1 border-t border-[--color-border] px-5 py-4 sm:hidden" aria-label="Mobile navigation">
    {NAV.map((item) => (
      <a href={item.href} class="py-2 text-sm link-underline">{item.label}</a>
    ))}
    <a href={SOCIAL.github} target="_blank" rel="noopener" class="py-2 text-sm link-underline">GitHub ↗</a>
  </nav>
</header>

<script>
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  toggle?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('flex');
    menu?.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!!isOpen));
  });
</script>
```

### `src/components/Footer.astro`

```astro
---
import { NAME, SOCIAL } from '../consts';
const year = new Date().getFullYear();
---

<footer class="border-t border-[--color-border] py-10">
  <div class="container-wide flex flex-col items-center justify-between gap-4 text-sm text-text-faint sm:flex-row">
    <p>&copy; {year} {NAME}</p>
    <div class="flex gap-5">
      <a href="/rss.xml" class="link-underline">RSS</a>
      <a href={SOCIAL.github} target="_blank" rel="noopener" class="link-underline">GitHub</a>
      <a href={`mailto:${SOCIAL.email}`} class="link-underline">Email</a>
    </div>
  </div>
</footer>
```

### `src/components/HeaderLink.astro` i `src/components/FormattedDate.astro`

Zachowujesz swoje obecne wersje — logika (aktywny link po `Astro.url.pathname`, formatowanie daty przez `Intl.DateTimeFormat`) się nie zmienia, zmieniają się tylko klasy CSS na te z nowego systemu (`link-underline`, kolory z `@theme`). Nie przepisuję ich tutaj 1:1, żeby nie duplikować kodu, który już masz i działa — podmień tylko `class`.

### `src/components/BaseHead.astro`

Zachowaj strukturę (title/description/canonical/OG/Twitter meta), zaktualizuj tylko:

```astro
<meta name="theme-color" content="#0A0A0B" />
<meta name="color-scheme" content="dark" />
```

---

## 13. Strony

### `src/pages/index.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import EntryCard from '../components/EntryCard.astro';
import CurrentlyExploring from '../components/CurrentlyExploring.astro';
import { NAME, SITE_DESCRIPTION } from '../consts';
import { getPublishedEntries, getFeatured } from '../lib/content';

const featured = await getFeatured(3);
const latest = (await getPublishedEntries()).slice(0, 8);
---

<Layout title={NAME} description={SITE_DESCRIPTION}>
  <section class="container-prose pt-20 pb-10">
    <p class="mono-label mb-4">{NAME}</p>
    <h1>I build things, find interesting projects, and share what I learn.</h1>
    <div class="mt-6">
      <CurrentlyExploring />
    </div>
  </section>

  {featured.length > 0 && (
    <section class="container-wide py-10">
      <h2 class="mb-6">Featured</h2>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((entry, i) => <EntryCard entry={entry} index={i + 1} />)}
      </div>
    </section>
  )}

  <section class="container-wide py-10">
    <div class="mb-6 flex items-center justify-between">
      <h2>Latest</h2>
      <a href="/writing" class="mono-label link-underline">View all →</a>
    </div>
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {latest.map((entry, i) => <EntryCard entry={entry} index={i + 1} />)}
    </div>
  </section>
</Layout>
```

### `src/pages/projects/index.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import EntryCard from '../../components/EntryCard.astro';
import { getProjectEntries } from '../../lib/content';

const url = new URL(Astro.request.url);
const filter = url.searchParams.get('filter'); // 'mine' | 'found' | null

let entries = await getProjectEntries();
if (filter === 'mine') entries = entries.filter((e) => e.data.type === 'project');
if (filter === 'found') entries = entries.filter((e) => e.data.type === 'github');
---

<Layout title="Projects" description="Things I've built, and interesting things I've found on GitHub.">
  <section class="container-wide py-16">
    <h1>Projects</h1>
    <p class="lead mt-3">Things I've built, and interesting things I've found on GitHub.</p>

    <div class="mt-6 flex gap-2">
      <a href="/projects" class:list={['btn', !filter && 'btn-accent']}>All</a>
      <a href="/projects?filter=mine" class:list={['btn', filter === 'mine' && 'btn-accent']}>Mine</a>
      <a href="/projects?filter=found" class:list={['btn', filter === 'found' && 'btn-accent']}>Found on GitHub</a>
    </div>

    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry, i) => <EntryCard entry={entry} index={i + 1} />)}
    </div>
  </section>
</Layout>
```

> Uwaga: filtrowanie przez `?filter=` działa w pełni statycznie (Astro renderuje wszystkie warianty jako strony statyczne, `URLSearchParams` jest czytany client-side przy re-hydratacji nawigacji, a link po prostu przeładowuje stronę — zero JS potrzebnego do samego filtrowania). Jeśli wolisz filtr bez przeładowania, to jedyne miejsce w całej stronie, gdzie warto dołożyć kilkanaście linijek vanilla JS — reszta zostaje statyczna.

### `src/pages/projects/[slug].astro`

```astro
---
import EntryLayout from '../../layouts/EntryLayout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('entries', (e) =>
    !e.data.draft && (e.data.type === 'project' || e.data.type === 'github')
  );
  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

const { entry } = Astro.props;
---

<EntryLayout entry={entry} />
```

### `src/pages/writing/index.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import EntryCard from '../../components/EntryCard.astro';
import { getWritingEntries } from '../../lib/content';

const entries = await getWritingEntries();
---

<Layout title="Posts" description="Short posts, tutorials, and the occasional video.">
  <section class="container-wide py-16">
    <h1>Posts</h1>
    <p class="lead mt-3">Short posts, tutorials, and the occasional screen recording.</p>

    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry, i) => <EntryCard entry={entry} index={i + 1} />)}
    </div>
  </section>
</Layout>
```

### `src/pages/writing/[slug].astro`

```astro
---
import EntryLayout from '../../layouts/EntryLayout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('entries', (e) =>
    !e.data.draft && ['post', 'tutorial', 'video'].includes(e.data.type)
  );
  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

const { entry } = Astro.props;
---

<EntryLayout entry={entry} />
```

### `src/pages/resources/index.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import FormattedDate from '../../components/FormattedDate.astro';
import { getResourceEntries } from '../../lib/content';

const entries = await getResourceEntries();
---

<Layout title="Resources" description="Things I found around the web worth bookmarking.">
  <section class="container-prose py-16">
    <h1>Resources</h1>
    <p class="lead mt-3">Things I found around the web worth bookmarking.</p>

    <div class="mt-10 divide-y divide-[--color-border] border-t border-[--color-border]">
      {entries.map((entry) => (
        <a href={`/resources/${entry.id}`} class="block py-5 link-underline">
          <div class="flex items-baseline justify-between gap-4">
            <h3 class="text-base">{entry.data.title}</h3>
            <span class="mono-label shrink-0"><FormattedDate date={entry.data.date} /></span>
          </div>
          <p class="mt-1 text-sm text-text-muted">{entry.data.description}</p>
        </a>
      ))}
    </div>
  </section>
</Layout>
```

### `src/pages/resources/[slug].astro`

```astro
---
import EntryLayout from '../../layouts/EntryLayout.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('entries', (e) => !e.data.draft && e.data.type === 'resource');
  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

const { entry } = Astro.props;
---

<EntryLayout entry={entry} />
```

### `src/pages/about.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import { NAME, SOCIAL } from '../consts';
---

<Layout title="About" description={`About ${NAME}.`}>
  <section class="container-prose py-16">
    <h1>About</h1>
    <div class="prose-content mt-6">
      <p>
        {'{{ 2-3 akapity o Tobie — nie CV, nie "7 lat doświadczenia". Co budujesz, czego szukasz, dlaczego publikujesz. }}'}
      </p>
      <p>{'{{ Stack, którego dziś realnie używasz. }}'}</p>
    </div>
    <div class="mt-8 flex gap-4">
      <a href={SOCIAL.github} target="_blank" rel="noopener" class="btn">GitHub ↗</a>
      <a href={`mailto:${SOCIAL.email}`} class="btn">Email</a>
    </div>
  </section>
</Layout>
```

### `src/pages/tags/[tag].astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import EntryCard from '../../components/EntryCard.astro';
import { getAllTags, getEntriesByTag } from '../../lib/content';

export async function getStaticPaths() {
  const tags = await getAllTags();
  return Promise.all(
    tags.map(async (tag) => ({
      params: { tag },
      props: { entries: await getEntriesByTag(tag) },
    }))
  );
}

const { tag } = Astro.params;
const { entries } = Astro.props;
---

<Layout title={`#${tag}`} description={`Everything tagged ${tag}.`}>
  <section class="container-wide py-16">
    <p class="mono-label">Tag</p>
    <h1>#{tag}</h1>
    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry, i) => <EntryCard entry={entry} index={i + 1} />)}
    </div>
  </section>
</Layout>
```

### `src/pages/rss.xml.js`

```javascript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { entryHref } from '../lib/content';

export async function GET(context) {
  const entries = await getCollection('entries', (e) => !e.data.draft);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: entries
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.date,
        link: entryHref(entry),
      })),
  });
}
```

### `src/pages/404.astro`

Zachowujesz obecny plik, podmieniasz tylko klasy na nowy system kolorów/typografii — logika strony 404 się nie zmienia.

---

## 14. Przykładowe wpisy (po jednym na typ)

### `src/content/entries/project/pricing-sync-cli.md`

```markdown
---
type: project
title: pricing-sync-cli
description: A small CLI that keeps calendar pricing in sync across two booking platforms.
date: 2026-08-12
tags: [CLI, Automation, TypeScript]
featured: true
status: active
repoUrl: https://github.com/{{GITHUB_HANDLE}}/pricing-sync-cli
stack: [TypeScript, Node.js, SQLite]
---

I kept manually copying prices between two calendars every week, so I wrote
a CLI that does it on a cron job instead. Nothing fancy — reads one source
of truth, pushes diffs to the other side, logs what changed.

Still rough around the edges, but it's saved me a couple hours a week since June.
```

### `src/content/entries/github/langflow.md`

```markdown
---
type: github
title: langflow
description: A visual builder for LLM workflows in Python.
date: 2026-08-20
tags: [AI, Python, Open Source]
featured: true
author: langflow-ai
repoUrl: https://github.com/langflow-ai/langflow
why: >
  It's the fastest way I've found to sketch an agent flow before writing
  any real code — good for validating an idea in an afternoon.
installSteps:
  - "git clone https://github.com/langflow-ai/langflow"
  - "cd langflow"
  - "uv pip install -e ."
  - "langflow run"
stack: [Python, React]
---

## Instrukcja instalacji (PL)

1. Sklonuj repozytorium: `git clone https://github.com/langflow-ai/langflow`
2. Wejdź do folderu: `cd langflow`
3. Zainstaluj zależności: `uv pip install -e .`
4. Uruchom: `langflow run`
5. Otwórz `http://localhost:7860` w przeglądarce.

Wymaga Pythona 3.10+. Na Windowsie polecam WSL2 — natywnie miałem problemy
z jedną z zależności natywnych.

## Moje uwagi

Nie polecam tego do produkcji — traktuj jako prototypownię. Do szybkiego
sprawdzenia pomysłu na agenta jest świetny.
```

### `src/content/entries/post/2026-08-20-found-a-nice-mcp-pattern.md`

```markdown
---
type: post
title: Found a nice MCP pattern
description: A small trick for exposing read-only tools without extra auth.
date: 2026-08-20
tags: [MCP, AI]
---

Today I found a neat pattern for exposing read-only MCP tools without
building a whole auth layer around them — scope the server to a single
read-only API key and let the tool description do the guardrailing.
Not groundbreaking, but it saved me an afternoon.
```

### `src/content/entries/tutorial/running-langflow-locally.md`

```markdown
---
type: tutorial
title: Running Langflow locally, the way that actually worked for me
description: A step-by-step walkthrough for getting Langflow running on WSL2.
date: 2026-08-22
tags: [AI, Python, Guide]
relatedSlug: langflow
difficulty: beginner
estimatedTime: 15 min
---

The official docs are fine, but I hit two snags on Windows that cost me
an hour, so here's the exact path that worked.

## 1. Set up WSL2

If you're on Windows, don't fight the native install — go straight to WSL2.

```bash
wsl --install
```

## 2. Install Python 3.11 inside WSL

```bash
sudo apt update && sudo apt install python3.11 python3.11-venv
```

## 3. Clone and run

```bash
git clone https://github.com/langflow-ai/langflow
cd langflow
uv pip install -e .
langflow run
```

Open `http://localhost:7860`. If the port is already taken, pass `--port 7861`.
```

### `src/content/entries/resource/a-good-read-on-mcp-servers.md`

```markdown
---
type: resource
title: A good, practical explainer on MCP servers
description: Short, no-fluff writeup that finally made the protocol click for me.
date: 2026-08-15
tags: [MCP, AI, Reading]
url: https://example.com/mcp-explainer
sourceName: example.com
---

Most MCP explainers either stay too abstract or dive straight into SDK code.
This one strikes a good balance — worth the ten minutes if you're still
fuzzy on why tools vs. resources vs. prompts are separate concepts.
```

### `src/content/entries/video/quick-look-at-langflow.md`

```markdown
---
type: video
title: Quick look at Langflow
description: A five-minute screen recording of me poking around Langflow for the first time.
date: 2026-08-21
tags: [AI, Screen recording]
youtubeId: dQw4w9WgXcQ
duration: 5:12
---

Just me clicking around and thinking out loud — no script, no editing.
```

---

## 15. Checklista wykonania (odzwierciedla Twoje punkty 1-10)

1. **Co usunąć bezpiecznie** → pełna lista w sekcji 1 ("Co usuwamy całkowicie"). Nic z tego nie jest referencjonowane poza samym sobą (sprawdzone przez wyszukanie importów w `full_app.md` — `ToolCard`, `tools.json`, `HeroVisual`, `CategoryCard`, `ArticleCard`, `Navbar` nie są importowane nigdzie poza swoimi stronami).
2. **Nowa architektura** → sekcja 3 i 5.
3. **Nowy system UI** → sekcja 4, 10, 11, 12.
4. **Usuń starą strukturę:**
   ```bash
   rm -rf src/data/tools.json \
          src/components/ToolCard.astro src/components/HeroVisual.astro \
          src/components/CategoryCard.astro src/components/ArticleCard.astro \
          src/components/ProjectCard.astro src/components/SectionHeading.astro \
          src/components/Navbar.astro \
          src/layouts/BlogPostLayout.astro \
          src/pages/narzedzia src/pages/programy src/pages/kursy src/pages/wideo \
          src/pages/automatyzacja.astro src/pages/kontakt.astro \
          src/content/blog src/content/kursy src/content/programy src/content/wideo \
          src/assets/fonts/atkinson-regular.woff src/assets/fonts/atkinson-bold.woff
   ```
5. **Zbuduj nową stronę** → wklej pliki z sekcji 7–13.
6. **Przygotuj przykładowe wpisy** → sekcja 14 (6 gotowych plików, po jednym na typ).
7. **`npm run build` działa** → uruchom lokalnie:
   ```bash
   npm install
   npm run build
   ```
   Rzeczy, na które zwrócić uwagę przy pierwszym buildzie: (a) `fontProviders.google()` wymaga połączenia z siecią przy buildzie — jeśli budujesz offline/w CI bez dostępu do sieci, zamień na `fontProviders.local()` i dorzuć pliki Inter do `src/assets/fonts`; (b) upewnij się, że każdy plik w `src/content/entries/**` ma poprawny `type` zgodny z jedną z gałęzi `discriminatedUnion` — literówka w `type` da czytelny błąd Zod przy buildzie, to zamierzone.
8. **Napraw błędy** → najbardziej prawdopodobne to (a) brakujące obrazki w `image()` polach — Astro rzuci błędem przy buildzie jeśli ścieżka nie istnieje, po prostu usuń `image:` z frontmattera dla wpisów bez screena, jest opcjonalne; (b) `relatedSlug` w tutorialu wskazujący na nieistniejący slug — to pole jest czysto informacyjne (nie ma jeszcze logiki renderującej link na jego podstawie), możesz dodać prosty lookup w `EntryLayout.astro` jeśli chcesz klikalny link „Related project”.
9. **Sprawdź mobile** → `Header.astro` ma wbudowane mobile menu (bez JS-frameworka, jeden `<script>` z `classList.toggle`); siatki kart (`sm:grid-cols-2 lg:grid-cols-3`) kolapsują do jednej kolumny poniżej `sm`; `container-prose`/`container-wide` mają `padding-inline: 1.25rem`, więc nic nie dotyka krawędzi ekranu.
10. **SEO i accessibility** → patrz sekcja 16.

---

## 16. SEO i accessibility — checklist

- [ ] `astro.config.mjs` → `site:` ustawione na realną domenę (wymagane dla poprawnego sitemap/RSS/canonical).
- [ ] Każdy wpis ma sensowne, unikalne `description` (używane jako meta description i OG description przez `BaseHead.astro`).
- [ ] `image()` z content collections automatycznie generuje `width`/`height`/`alt` wymuszony przez komponent `<Image>` — nie zapomnij realnego `alt` tam, gdzie dodajesz obrazki ręcznie poza `EntryCard`/`EntryLayout`.
- [ ] `skip-link` obecny w `Layout.astro` — sprawdź Tab jako pierwszy klawisz na każdej stronie.
- [ ] Kontrast: `--color-text-muted: #96959B` na `--color-bg: #0A0A0B` daje ~7.7:1 (AAA dla tekstu). `--color-accent: #D2A45C` na tym samym tle ~8.9:1 — bezpieczne nawet jako kolor linku.
- [ ] `:focus-visible` zdefiniowany globalnie (sekcja 10) — nie usuwaj outline'u nigdzie indziej w customowym CSS.
- [ ] `rel="noopener"` na wszystkich `target="_blank"` (już wszędzie zastosowane powyżej).
- [ ] `prefers-reduced-motion` respektowany (sekcja 10, na końcu `global.css`).
- [ ] Sitemap (`@astrojs/sitemap`) i RSS (`/rss.xml.js`) zostają bez zmian koncepcyjnych — tylko nowe źródło danych.

---

## 17. Czego jeszcze potrzebuję od Ciebie

Żeby dokończyć wdrożenie, podmień w `src/consts.ts`:

- `{{NAME}}` — Twoje imię/nazwa marki wyświetlana w headerze/footerze/tytule.
- `{{GITHUB_HANDLE}}`, `{{EMAIL}}` — linki social.
- `{{DOMAIN}}` w `astro.config.mjs` (`site:`).
- `CURRENTLY_EXPLORING` — jedno zdanie, aktualizowane ręcznie co jakiś czas (celowo bez CMS-a na to — to ma być szybkie do zmiany, nie zautomatyzowane).

Poza tym — blueprint jest kompletny i gotowy do wklejenia do repo `full_app.md`.
