import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Single unified collection — every entry is a curated piece of content.
 * Type field drives presentation; optional fields stay optional.
 */
const entries = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/entries',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    type: z.enum(['project', 'github', 'post', 'tutorial', 'resource', 'video']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // Visual
    image: z.string().optional(),
    imageAlt: z.string().optional(),

    // Links
    url: z.string().url().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),

    // Attribution (for found/github/resource — never imply authorship)
    author: z.string().optional(),
    authorUrl: z.string().url().optional(),
    ownership: z.enum(['mine', 'found']).optional(),

    // Editorial extras
    why: z.string().optional(), // "Why I like it"
    install: z.string().optional(), // short install blurb / commands
    exploring: z.boolean().default(false), // "Currently exploring"

    // Video
    videoUrl: z.string().optional(), // YouTube/Vimeo embed or direct
    videoFile: z.string().optional(), // local public path
    duration: z.string().optional(),

    // Reading / meta
    readingTime: z.string().optional(),
  }),
});

export const collections = { entries };
