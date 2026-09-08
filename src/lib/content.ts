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

export const getProjectEntries = () => getByTypes(['project', 'github']);
export const getWritingEntries = () => getByTypes(['post', 'tutorial', 'video']);
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
