import { NextResponse } from 'next/server';
import { fetchMediumArticles } from '@/lib/content/medium';

export const runtime = 'nodejs';
export const revalidate = 21600; // 6 hours

export async function GET() {
  try {
    const articles = await fetchMediumArticles();
    return NextResponse.json(articles, {
      headers: {
        'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    console.error('Error in Medium RSS route:', error);
    return NextResponse.json([], { status: 200 });
  }
}

