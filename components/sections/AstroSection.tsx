import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import type { Astro } from '@/lib/content/types';
import { formatDate } from '@/lib/content/utils';

interface AstroSectionProps {
  astro: Astro[];
}

export function AstroSection({ astro }: AstroSectionProps) {
  return (
    <Section id="astro" title="Astrophotography" className="bg-gradient-to-b from-gray-950 to-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {astro.map((item) => (
          <Card key={item.slug} href={`/astro/${item.slug}`}>
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-900">
              <Image
                src={item.heroImage}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mb-1">{item.target}</p>
            <p className="text-gray-500 text-xs">{formatDate(item.date)}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

