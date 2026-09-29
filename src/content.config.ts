import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Status words used across projects and the bench. Keep this list short.
const status = z.enum(['Prototyping', 'Testing', 'Live', 'Ongoing', 'Shipped', 'Archived']);

const essays = defineCollection({
  loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    number: z.number(),                    // PROJECT 03
    year: z.number(),
    category: z.string(),                  // "Robotics / Mechanical"
    status,
    tags: z.array(z.string()).default([]),
    role: z.string().optional(),
    team: z.string().optional(),
    system: z.string().optional(),
    tools: z.array(z.string()).default([]),
    image: z.string().optional(),          // cover, shown as FIG.01
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

// "On the bench": what is being worked on right now. Edit src/data/bench.yaml.
const bench = defineCollection({
  loader: file('src/data/bench.yaml'),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    status,
    next: z.string().optional(),
    href: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { essays, projects, bench };
