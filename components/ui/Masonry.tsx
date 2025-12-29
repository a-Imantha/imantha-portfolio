'use client';

import React from 'react';

interface MasonryProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
}

export function Masonry({ children, columns = 3, gap = '1rem' }: MasonryProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}
      className="masonry-grid"
    >
      {children}
    </div>
  );
}

