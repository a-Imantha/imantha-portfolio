import { XMLParser } from 'fast-xml-parser';
import type { MediumArticle } from './types';

export async function fetchMediumArticles(): Promise<MediumArticle[]> {
  const rssUrl = process.env.NEXT_PUBLIC_MEDIUM_RSS_URL;

  if (!rssUrl) {
    console.warn('NEXT_PUBLIC_MEDIUM_RSS_URL not configured');
    return [];
  }

  try {
    const response = await fetch(rssUrl, {
      next: { revalidate: 21600 }, // 6 hours
    });

    if (!response.ok) {
      console.warn(`Failed to fetch Medium RSS: ${response.status}`);
      return [];
    }

    const xml = await response.text();
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const items = parsed?.rss?.channel?.item || [];
    const articles = Array.isArray(items) ? items : [items];

    return articles
      .map((item: any) => ({
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        description: item.description || item['content:encoded'] || '',
      }))
      .filter((article) => article.title && article.link)
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}

