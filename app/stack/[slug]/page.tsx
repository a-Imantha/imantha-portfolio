import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getTechBySlug, getAllTech, getProjectsByTech } from '@/lib/content/loader';
import { Prose } from '@/components/ui/Prose';
import { Card } from '@/components/ui/Card';

export async function generateStaticParams() {
  const tech = await getAllTech();
  return tech.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = await getTechBySlug(slug);
  if (!tech) return {};

  return {
    title: tech.name,
    description: tech.description,
  };
}

export default async function TechPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tech = await getTechBySlug(slug);
  const relatedProjects = await getProjectsByTech(slug);

  if (!tech) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/#stack"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Tech Stack
        </Link>

        <h1 className="text-4xl font-bold text-white mb-4">{tech.name}</h1>
        <p className="text-xl text-gray-400 mb-8">{tech.description}</p>

        {/* Content */}
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: tech.content }} />
        </Prose>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Projects Using {tech.name}</h2>
            <div className="space-y-4">
              {relatedProjects.map((project) => (
                <Card key={project.slug} href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.org} • {project.period}
                  </p>
                  {project.techNotes?.[slug] && (
                    <p className="text-gray-300 text-sm">
                      <span className="text-blue-400 font-medium">How I used it:</span>{' '}
                      {project.techNotes[slug]}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

