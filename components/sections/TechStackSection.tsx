'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import type { Tech } from '@/lib/content/types';
import { 
  SiNextdotjs, 
  SiGo, 
  SiPostgresql, 
  SiKubernetes, 
  SiAmazon, 
  SiPytorch,
  SiPython,
  SiTerraform,
  SiGithubactions
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface TechStackSectionProps {
  techStack: Tech[];
}

// Map tech slugs to their icons
const techIcons: Record<string, IconType> = {
  'nextjs': SiNextdotjs,
  'golang': SiGo,
  'postgres': SiPostgresql,
  'kubernetes': SiKubernetes,
  'aws': SiAmazon,
  'pytorch': SiPytorch,
  'python': SiPython,
  'terraform': SiTerraform,
  'mlflow': SiGithubactions, // MLflow doesn't have an icon, using similar
  'kubeflow': SiKubernetes, // Kubeflow uses K8s, so using K8s icon
};

// Color schemes for each tech
const techColors: Record<string, string> = {
  'nextjs': 'from-black to-gray-800',
  'golang': 'from-cyan-500 to-blue-500',
  'postgres': 'from-blue-600 to-blue-800',
  'kubernetes': 'from-blue-500 to-indigo-600',
  'aws': 'from-orange-500 to-yellow-600',
  'pytorch': 'from-red-500 to-orange-600',
  'python': 'from-blue-400 to-yellow-400',
  'terraform': 'from-purple-600 to-indigo-600',
  'mlflow': 'from-blue-500 to-cyan-500',
  'kubeflow': 'from-indigo-500 to-blue-600',
};

export function TechStackSection({ techStack }: TechStackSectionProps) {
  // Group by category
  const grouped = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Tech[]>);

  return (
    <Section id="stack" title="Tech Stack" className="bg-gradient-to-b from-gray-900 to-gray-950">
      {Object.entries(grouped).map(([category, techs]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techs.map((tech) => {
              const Icon = techIcons[tech.slug];
              const colorClass = techColors[tech.slug] || 'from-gray-600 to-gray-800';
              
              return (
                <Card key={tech.slug} href={`/stack/${tech.slug}`}>
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center`}>
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {tech.name}
                      </h4>
                      <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </Section>
  );
}

