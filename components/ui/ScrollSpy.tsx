'use client';

import { useEffect, useState } from 'react';

interface ScrollSpyProps {
  sectionIds: string[];
  children: (activeSection: string) => React.ReactNode;
}

export function ScrollSpy({ sectionIds, children }: ScrollSpyProps) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
              // Update URL hash without scrolling
              if (window.history.replaceState) {
                window.history.replaceState(null, '', `#${id}`);
              }
            }
          });
        },
        {
          rootMargin: '-20% 0px -70% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return <>{children(activeSection)}</>;
}

