import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { entryHref } from '../lib/content';

export async function GET(context) {
  const entries = await getCollection('entries', (e) => !e.data.draft);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: entries
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.date,
        link: entryHref(entry),
      })),
  });
}
