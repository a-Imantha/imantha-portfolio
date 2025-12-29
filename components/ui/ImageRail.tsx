import React from 'react';
import Image from 'next/image';

interface ImageRailProps {
  images: string[];
  alt: string;
}

export function ImageRail({ images, alt }: ImageRailProps) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

