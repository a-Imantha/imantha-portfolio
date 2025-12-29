'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import type { Project } from '@/lib/content/types';
import { 
  SiNextdotjs, 
  SiGo, 
  SiPostgresql, 
  SiKubernetes, 
  SiAmazon, 
  SiPytorch,
  SiPython,
  SiTerraform
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface ProjectsSectionProps {
  projects: Project[];
}

// Map tech slugs to their icons (same as TechStackSection)
const techIcons: Record<string, IconType> = {
  'nextjs': SiNextdotjs,
  'golang': SiGo,
  'postgres': SiPostgresql,
  'kubernetes': SiKubernetes,
  'aws': SiAmazon,
  'pytorch': SiPytorch,
  'python': SiPython,
  'terraform': SiTerraform,
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [highlightedTech, setHighlightedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesType = !selectedType || project.type === selectedType;
      const matchesTech = !highlightedTech || project.tech.includes(highlightedTech);
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.org.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesTech && matchesSearch;
    });
  }, [projects, selectedType, highlightedTech, searchQuery]);

  return (
    <Section id="projects" title="Projects" className="bg-gray-900">
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          <Chip
            label="All"
            active={!selectedType}
            onClick={() => setSelectedType(null)}
          />
          <Chip
            label="Work"
            active={selectedType === 'work'}
            onClick={() => setSelectedType('work')}
          />
          <Chip
            label="University"
            active={selectedType === 'university'}
            onClick={() => setSelectedType('university')}
          />
          <Chip
            label="Personal"
            active={selectedType === 'personal'}
            onClick={() => setSelectedType('personal')}
          />
        </div>

        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-96 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.slug} href={`/projects/${project.slug}`}>
            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-gray-800">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              {project.org} • {project.period}
            </p>
            <p className="text-gray-300 text-sm mb-4">{project.role}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech) => {
                const Icon = techIcons[tech];
                return (
                  <div
                    key={tech}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg transition-all ${
                      highlightedTech === tech
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 border border-gray-700'
                    }`}
                    title={tech}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{tech}</span>
                  </div>
                );
              })}
              {project.tech.length > 4 && (
                <span className="inline-flex items-center px-3 py-1.5 text-xs text-gray-400 bg-gray-800 rounded-lg border border-gray-700">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-gray-400 text-center py-12">
          No projects found matching your filters.
        </p>
      )}
    </Section>
  );
}

