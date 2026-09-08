import { getCollection, type CollectionEntry } from 'astro:content';
import { TYPE_META, type ContentType } from '../consts';

export type Entry = CollectionEntry<'entries'>;

/** All published entries, newest first */
export async function getEntries(opts?: {
  type?: ContentType | ContentType[];
  featured?: boolean;
  exploring?: boolean;
  tag?: string;
  limit?: number;
}): Promise<Entry[]> {
  let list = await getCollection('entries', ({ data }) => {
    if (data.draft) return false;
    if (opts?.featured !== undefined && data.featured !== opts.featured) return false;
    if (opts?.exploring !== undefined && data.exploring !== opts.exploring) return false;
    if (opts?.tag && !data.tags.map((t) => t.toLowerCase()).includes(opts.tag.toLowerCase())) {
      return false;
    }
    if (opts?.type) {
      const types = Array.isArray(opts.type) ? opts.type : [opts.type];
      if (!types.includes(data.type)) return false;
    }
    return true;
  });

  list = list.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  if (opts?.limit) list = list.slice(0, opts.limit);
  return list;
}

export function entryHref(entry: Entry): string {
  return `/entries/${entry.id}/`;
}

export function typeLabel(type: ContentType): string {
  return TYPE_META[type].label;
}

export function typeShort(type: ContentType): string {
  return TYPE_META[type].short;
}

/** Effective ownership: explicit field wins, else type default */
export function ownershipOf(entry: Entry): 'mine' | 'found' {
  if (entry.data.ownership) return entry.data.ownership;
  return TYPE_META[entry.data.type].ownership;
}

export function ownershipLabel(entry: Entry): string {
  return ownershipOf(entry) === 'mine' ? 'My work' : 'Found';
}

/** Zero-padded index like 01, 02 … */
export function padIndex(n: number, width = 2): string {
  return String(n).padStart(width, '0');
}

export function formatDate(date: Date, locale = 'en-GB'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** Group entries by year for archive views */
export function groupByYear(entries: Entry[]): { year: string; entries: Entry[] }[] {
  const map = new Map<string, Entry[]>();
  for (const e of entries) {
    const y = String(e.data.date.getFullYear());
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(e);
  }
  return [...map.entries()].map(([year, entries]) => ({ year, entries }));
}

export function allTags(entries: Entry[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const e of entries) {
    for (const t of e.data.tags) {
      const key = t;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
