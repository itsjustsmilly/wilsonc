import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  const sorted = essays.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sorted.map(essay => ({
      title: essay.data.title,
      pubDate: essay.data.date,
      description: essay.data.description,
      link: `/essays/${essay.id}/`,
    })),
  });
}
