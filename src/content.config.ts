import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Poradniki — wszystkie treści są darmowe (schemat bez `access`/`price`
// uniemożliwia przypadkowe przywrócenie paywalla).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
  }),
});

// Wideo / tutoriale — miejsce pod przyszłe materiały wideo.
// `videoUrl` (YouTube/Vimeo) — gdy puste, karta pokazuje stan "w przygotowaniu".
const wideo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/wideo' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    level: z.enum(['początkujący', 'średni', 'zaawansowany']).default('początkujący'),
    videoUrl: z.string().optional(),
    duration: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Projekty do samodzielnego uruchomienia (GitHub / open source / własne).
const programy = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    guideUrl: z.string().optional(),
    level: z.enum(['początkujący', 'średni', 'zaawansowany']).default('początkujący'),
    requirements: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, wideo, programy };
