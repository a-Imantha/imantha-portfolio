'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
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
  SiGithubactions,
  SiHuggingface,
  SiOpenai,
  SiLangchain,
  SiMongodb,
  SiPulumi,
  SiGooglecloud,
  SiScikitlearn,
  SiArgo,
  SiGrafana
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { Layers, Code, Database, Cloud } from 'lucide-react';

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
  'mlflow': SiGithubactions,
  'kubeflow': SiKubernetes,
  'huggingface': SiHuggingface,
  'openai': SiOpenai,
  'langchain': SiLangchain,
  'langgraph': SiLangchain, // Using LangChain icon
  'mongodb': SiMongodb,
  'pulumi': SiPulumi,
  'gcp': SiGooglecloud,
  'azure': SiGooglecloud, // Using cloud icon as fallback
  'dagster': SiPython, // Using Python icon as fallback
  'sklearn': SiScikitlearn,
  'dask': SiPython, // Using Python icon
  'argocd': SiArgo,
  'grafana': SiGrafana,
  'keycloak': SiKubernetes, // Using Kubernetes icon as fallback
  'kong': SiKubernetes, // Using Kubernetes icon as fallback
  'kustomize': SiKubernetes, // Using Kubernetes icon
  'mcp': SiPython, // Using Python icon as fallback
  'transformers': SiHuggingface, // Using HuggingFace icon
  'runpod': SiAmazon, // Using cloud icon as fallback
  'pinecone': SiPython, // Using Python icon as fallback
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
  'huggingface': 'from-yellow-400 to-orange-500',
  'openai': 'from-emerald-500 to-teal-600',
  'langchain': 'from-green-500 to-emerald-600',
  'langgraph': 'from-green-600 to-teal-600',
  'mongodb': 'from-green-600 to-emerald-700',
  'pulumi': 'from-purple-500 to-pink-600',
  'gcp': 'from-red-500 to-blue-500',
  'azure': 'from-blue-600 to-cyan-600',
  'dagster': 'from-indigo-600 to-purple-700',
  'sklearn': 'from-orange-500 to-blue-600',
  'dask': 'from-orange-400 to-red-500',
  'argocd': 'from-orange-600 to-red-600',
  'grafana': 'from-orange-500 to-red-500',
  'keycloak': 'from-cyan-600 to-blue-700',
  'kong': 'from-green-600 to-teal-700',
  'kustomize': 'from-blue-600 to-purple-600',
  'mcp': 'from-gray-600 to-blue-600',
  'transformers': 'from-yellow-500 to-orange-600',
  'runpod': 'from-purple-600 to-pink-700',
  'pinecone': 'from-teal-500 to-cyan-600',
};

// Custom logo paths for technologies with uploaded logos
const customLogos: Record<string, string> = {
  'azure': '/images/stack/Microsoft_Azure.svg.png',
  'gcp': '/images/stack/google-cloud-logo-png_seeklogo-336116.png',
  'dagster': '/images/stack/dagster-primary-mark.svg',
  'dask': '/images/stack/dask_icon.svg',
  'keycloak': '/images/stack/Keycloak_Logo.png',
  'kong': '/images/stack/Kong_inc.png',
  'kubeflow': '/images/stack/kubeflow.png',
  'mcp': '/images/stack/Model_Context_Protocol_logo.svg.png',
};

// Category icons for visual interest
const categoryIcons: Record<string, React.ReactNode> = {
  'Frontend': <Code className="w-4 h-4" />,
  'Backend': <Database className="w-4 h-4" />,
  'Infrastructure': <Cloud className="w-4 h-4" />,
  'ML/Data': <Layers className="w-4 h-4" />,
};

export function TechStackSection({ techStack }: TechStackSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Group by category
  const categories = Array.from(new Set(techStack.map(t => t.category)));
  
  // Filter tech by selected category
  const filteredTech = selectedCategory === 'All' 
    ? techStack 
    : techStack.filter(t => t.category === selectedCategory);

  return (
    <Section id="stack" title="Hands On" className="bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Category Sidebar - Vertical on Desktop, Horizontal on Mobile */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-2">
            {/* All button */}
            <button
              onClick={() => setSelectedCategory('All')}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
                ${selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700/50'
                }
              `}
            >
              <Layers className="w-5 h-5" />
              <span className="flex-1 text-left">All Technologies</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                selectedCategory === 'All' 
                  ? 'bg-white/20' 
                  : 'bg-gray-700 text-gray-400'
              }`}>
                {techStack.length}
              </span>
            </button>

            {/* Category buttons */}
            {categories.map((category) => {
              const count = techStack.filter(t => t.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
                    ${selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700/50'
                    }
                  `}
                >
                  {categoryIcons[category] || <Code className="w-5 h-5" />}
                  <span className="flex-1 text-left">{category}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category 
                      ? 'bg-white/20' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTech.map((tech) => {
              const Icon = techIcons[tech.slug];
              const colorClass = techColors[tech.slug] || 'from-gray-600 to-gray-800';
              const customLogo = customLogos[tech.slug];
              
              return (
                <Link
                  key={tech.slug}
                  href={`/stack/${tech.slug}`}
                  className="group relative bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500/50 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-xl transition-all duration-300" />
                  
                  <div className="relative flex flex-col items-center text-center space-y-3">
                    {/* Icon with glow effect - use custom logo if available */}
                    <div className={`w-14 h-14 ${customLogo ? 'bg-white/5' : `bg-gradient-to-br ${colorClass}`} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg p-2`}>
                      {customLogo ? (
                        <Image
                          src={customLogo}
                          alt={`${tech.name} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        Icon && <Icon className="w-7 h-7 text-white" />
                      )}
                    </div>
                    
                    {/* Name */}
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredTech.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <Layers className="w-12 h-12 mb-4 opacity-50" />
              <p className="text-lg font-medium">No technologies found</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

