'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { MobileMenuDrawer } from './MobileMenuDrawer';
import { ScrollSpy } from '@/components/ui/ScrollSpy';

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'articles', label: 'Articles' },
  { id: 'astro', label: 'Astrophotography' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ScrollSpy sectionIds={sections.map((s) => s.id)}>
      {(activeSection) => (
        <>
          <header className="sticky top-0 z-30 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Left: Avatar + Name */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700">
                    <Image
                      src="/avatar.jpg"
                      alt="Imantha Ahangama"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <span className="text-white font-semibold text-lg">
                    Imantha Ahangama
                  </span>
                </div>

                {/* Right: Hamburger */}
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Open menu"
                  aria-expanded={isMenuOpen}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </header>

          <MobileMenuDrawer
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            activeSection={activeSection}
            sections={sections}
          />
        </>
      )}
    </ScrollSpy>
  );
}

