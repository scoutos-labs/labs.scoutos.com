import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const reports = await getCollection('reports');
  const sorted = reports.sort((a, b) =>
    b.data.number.localeCompare(a.data.number)
  );

  return rss({
    title: 'ScoutOS Labs — Lab Reports',
    description: 'Experimental AI research & development dispatches from ScoutOS Labs.',
    site: context.site!,
    items: sorted.map((report) => ({
      title: `Lab Report #${report.data.number}: ${report.data.title}`,
      pubDate: new Date(report.data.date),
      link: `/reports/${report.data.number}/`,
      description: report.data.highlights.join(' • '),
    })),
    customData: '<language>en-us</language>',
  });
}
