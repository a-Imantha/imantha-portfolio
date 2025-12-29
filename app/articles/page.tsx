import Link from 'next/link';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { getAllArticles } from '@/lib/content/loader';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { formatDate } from '@/lib/content/utils';

export const metadata = {
  title: 'Articles',
  description: 'Technical articles and writings',
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/#articles"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Articles</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.slug} id={article.slug}>
              <Card>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {formatDate(article.date)}
                </p>
                <p className="text-gray-300 mb-4">{article.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </div>
                {article.url && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

