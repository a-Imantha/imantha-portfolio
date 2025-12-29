import React from 'react';
import { CopyLinkButton } from './CopyLinkButton';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <CopyLinkButton sectionId={id} label={`Copy link to ${title} section`} />
        </div>
        {children}
      </div>
    </section>
  );
}

