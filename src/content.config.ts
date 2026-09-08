import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
 const blog = defineCollection({
loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
schema: z.object({
title: z.string(),
description: z.string(),
pubDate: z.coerce.date(),
updatedDate: z.coerce.date().optional(),
heroImage: z.string().optional(),
tags: z.array(z.string()).default([]),
}),
});
 const kursy = defineCollection({
loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/kursy' }),
schema: z.object({
title: z.string(),
description: z.string(),
kolejnosc: z.number(), // numer lekcji w kursie
modul: z.string(), // np. "Moduł 1: Podstawy"
wideoUrl: z.string().optional(), // link do YouTube/Vimeo
czasTrwania: z.string().optional(), // np. "12 min"
darmowa: z.boolean().default(false), // czy lekcja jest darmowym preview
}),
});
const programy = defineCollection({
loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programy' }),
schema: z.object({
nazwa: z.string(),
opis: z.string(),
kategoria: z.string(), // np. "Automatyzacja", "Cennik dynamiczny"
stronaWWW: z.string(),
cena: z.string().optional(), // np. "od 15 USD/mies."
ocena: z.number().min(1).max(5).optional(),
kraj: z.string().optional(), // pochodzenie programu
}),
});
 export const collections = { blog, kursy, programy };