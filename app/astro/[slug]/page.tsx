import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getAstroBySlug, getAllAstro } from '@/lib/content/loader';
import { Prose } from '@/components/ui/Prose';
import { ImageRail } from '@/components/ui/ImageRail';
import { formatDate } from '@/lib/content/utils';

export async function generateStaticParams() {
  const astro = await getAllAstro();
  return astro.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const astro = await getAstroBySlug(slug);
  if (!astro) return {};

  return {
    title: astro.title,
    description: `${astro.target} captured on ${formatDate(astro.date)}`,
  };
}

export default async function AstroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const astro = await getAstroBySlug(slug);

  if (!astro) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          href="/#astro"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Astrophotography
        </Link>

        {/* Hero Image */}
        <div className="relative aspect-video mb-8 overflow-hidden rounded-xl">
          <Image
            src={astro.heroImage}
            alt={astro.title}
            fill
            className="object-contain bg-black"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-white mb-6">{astro.title}</h1>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
          <div>
            <h3 className="text-gray-400 text-sm mb-1">Target</h3>
            <p className="text-white">{astro.target}</p>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-1">Date</h3>
            <p className="text-white">{formatDate(astro.date)}</p>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-1">Location</h3>
            <p className="text-white">{astro.location}</p>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-1">Gear</h3>
            <p className="text-white">{astro.gear}</p>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-1">Exposure</h3>
            <p className="text-white">{astro.exposure}</p>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-1">Integration</h3>
            <p className="text-white">{astro.integration}</p>
          </div>
        </div>

        {/* Content */}
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: astro.content }} />
        </Prose>

        {/* Additional Images */}
        {astro.images.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">More Images</h2>
            <ImageRail images={astro.images} alt={astro.title} />
          </div>
        )}
      </div>
    </div>
  );
}

