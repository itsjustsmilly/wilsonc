// Shared queries so every page numbers and orders things the same way.
import { getCollection } from 'astro:content';
import { readingMinutes } from './format';

/** Projects, newest number first. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.number - a.data.number);
}

/** Essays newest first, each with a stable number (oldest = 01) and read time. */
export async function getEssays() {
  const all = await getCollection('essays', ({ data }) => !data.draft);
  const oldestFirst = [...all].sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
  return oldestFirst
    .map((essay, i) => ({ essay, n: i + 1, minutes: readingMinutes(essay.body) }))
    .reverse();
}

export async function getBench() {
  const all = await getCollection('bench');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const variants = ['lead', 'left', 'right'] as const;
export const variantFor = (i: number) => (i === 0 ? 'lead' : i % 2 === 1 ? 'right' : 'left');
