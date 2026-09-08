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
    access: z.enum(['free', 'paid']).default('free'),
    readingTime: z.string().optional(),
  }),
});

const kursy = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/kursy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    level: z.enum(['początkujący', 'średni', 'zaawansowany']).default('początkujący'),
    access: z.enum(['free', 'paid']).default('free'),
    price: z.string().optional(),
  }),
});

const programy = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    access: z.enum(['free', 'paid']).default('free'),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { blog, kursy, programy };
