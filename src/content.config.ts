import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
      z.object({
        type: z.literal('project'),
        ...baseFields({ image }),
        repoUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        stack: z.array(z.string()).default([]),
        status: z.enum(['active', 'maintained', 'archived', 'wip']).default('active'),
      }),
      z.object({
        type: z.literal('github'),
        ...baseFields({ image }),
        author: z.string(),
        repoUrl: z.string().url(),
        demoUrl: z.string().url().optional(),
        why: z.string(),
        installSteps: z.array(z.string()).default([]),
        stack: z.array(z.string()).default([]),
      }),
      z.object({
        type: z.literal('post'),
        ...baseFields({ image }),
      }),
      z.object({
        type: z.literal('tutorial'),
        ...baseFields({ image }),
        relatedSlug: z.string().optional(),
        difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
        estimatedTime: z.string().optional(),
      }),
      z.object({
        type: z.literal('resource'),
        ...baseFields({ image }),
        url: z.string().url(),
        sourceName: z.string().optional(),
      }),
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
