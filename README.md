# Corner

A minimal dark-mode personal hub for builders — projects, GitHub finds, posts, tutorials, resources, and video. Built with Astro 7 + Tailwind CSS 4 + MDX.

Not a job portfolio. A curated corner of the internet.

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Requires **Node ≥ 22.12**.

## Add content

Drop a Markdown/MDX file into `src/content/entries/<folder>/`:

```
src/content/entries/
  projects/     # things you built
  github/       # other people's repos you recommend
  posts/        # short notes
  tutorials/    # how-tos
  resources/    # links & references
  videos/       # screen recordings
```

Folders are only for your sanity — the collection is unified. Frontmatter `type` drives the UI.

### Frontmatter

```yaml
---
title: "Title"
description: "One or two sentences."
date: 2026-09-08
type: project          # project | github | post | tutorial | resource | video
tags: [astro, tools]
featured: false
exploring: false
draft: false

# optional
image: /images/shot.png
imageAlt: "Screenshot"
url: https://…
github: https://github.com/…
demo: https://…
author: "Jane Doe"           # for found work
authorUrl: https://…
ownership: found             # mine | found (defaults from type)
why: "Why this matters to me."
install: |
  git clone …
  npm install
videoUrl: https://youtube.com/watch?v=…
videoFile: /videos/demo.mp4
duration: "8 min"
readingTime: "5 min"
---
```

**Ownership chips**

- `project` / `post` / `tutorial` / `video` → default **My work**
- `github` / `resource` → default **Found**
- Override anytime with `ownership: mine | found`

Found entries always show an attribution note so you never look like the author.

## Site identity

Edit `src/consts.ts`:

- `SITE_TITLE`, `SITE_DESCRIPTION`
- `AUTHOR` (email, GitHub, socials)
- `NAV` labels

Set `site` in `astro.config.mjs` to your real domain (RSS + sitemap + canonical URLs).

## Routes

| Path | Purpose |
|---|---|
| `/` | Short hero + exploring + featured + latest |
| `/explore/` | Full feed + tags |
| `/explore/projects/` etc. | Filtered by type |
| `/explore/tag/<slug>/` | Filtered by tag |
| `/entries/<id>/` | Entry detail |
| `/about/` | About |
| `/rss.xml` | RSS |
| `/sitemap-index.xml` | Sitemap |

## Design notes

- Dark only — near-black surfaces, off-white type, one warm accent
- Editorial entry rows (index · type · ownership · title · body), not SaaS cards
- Minimal JS (mobile nav + code copy)
- Semantic HTML, skip link, focus styles, RSS, sitemap
