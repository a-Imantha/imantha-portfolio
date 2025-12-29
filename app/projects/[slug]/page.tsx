import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { getProjectBySlug, getAllProjects } from '@/lib/content/loader';
import { Chip } from '@/components/ui/Chip';
import { Prose } from '@/components/ui/Prose';
import { ImageRail } from '@/components/ui/ImageRail';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.highlights[0] || project.role,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="relative aspect-video mb-8 overflow-hidden rounded-xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
          <span>{project.org}</span>
          <span>•</span>
          <span>{project.period}</span>
          <span>•</span>
          <span>{project.role}</span>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Chip key={tech} label={tech} href={`/stack/${tech}`} />
            ))}
          </div>
        </div>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">Key Highlights</h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-300 flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-4">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {link.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}

        {/* Content */}
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </Prose>

        {/* Additional Images */}
        {project.images.length > 0 && (
          <ImageRail images={project.images} alt={project.title} />
        )}
      </div>
    </div>
  );
}

