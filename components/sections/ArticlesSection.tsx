'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import type { Article, MediumArticle } from '@/lib/content/types';
import { formatDate } from '@/lib/content/utils';

interface ArticlesSectionProps {
  localArticles: Article[];
}

export function ArticlesSection({ localArticles }: ArticlesSectionProps) {
  const [mediumArticles, setMediumArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/medium-rss')
      .then((res) => res.json())
      .then((data) => {
        setMediumArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const allArticles = [
    ...localArticles.map((a) => ({
      title: a.title,
      date: a.date,
      summary: a.summary,
      url: `/articles#${a.slug}`,
      source: 'local' as const,
    })),
    ...mediumArticles.map((a) => ({
      title: a.title,
      date: a.pubDate,
      summary: a.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
      url: a.link,
      source: 'medium' as const,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Section id="articles" title="Articles" className="bg-gray-900">
      {loading && (
        <p className="text-gray-400 text-center">Loading articles...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allArticles.slice(0, 6).map((article, index) => (
          <Card key={index} href={article.url}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white line-clamp-2">
                {article.title}
              </h3>
              {article.source === 'medium' && (
                <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
              )}
            </div>
            <p className="text-gray-400 text-sm mb-3">
              {formatDate(article.date)}
            </p>
            <p className="text-gray-300 text-sm line-clamp-3">
              {article.summary}
            </p>
          </Card>
        ))}
      </div>

      {allArticles.length > 6 && (
        <div className="mt-8 text-center">
          <a
            href="/articles"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </a>
        </div>
      )}
    </Section>
  );
}

