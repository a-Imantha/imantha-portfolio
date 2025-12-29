'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Building2, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const experiences = [
    {
      role: 'Machine Learning Engineering Lead',
      company: 'CML Insights',
      logo: '/images/logos/cml-insights.png',
      location: 'Remote',
      period: 'July 2022 - Present',
      current: true,
      description: 'Leading end-to-end ML architecture and infrastructure for multiple production applications.',
      responsibilities: [
        'Planned and designed end-to-end architectures for applications, including database schemas, microservices, and scalable cloud solutions',
        'Managed cloud infrastructure using Terraform and Kustomize, building CI/CD pipelines and deploying microservices on Kubernetes clusters',
        'Contributed to all phases of the application lifecycle, including architecture design, backend development, database schema creation, and Python microservices implementation',
        'Designed and implemented machine learning pipelines using frameworks like Sklearn and Kubeflow, integrating automated workflows for multiple projects',
        'Processed and analyzed large datasets to derive actionable insights and formulated algorithms tailored to address diverse business needs',
        'Led the team by creating design documents, allocating tasks, providing guidance, and maintaining proper documentation to ensure project success',
      ],
      techStack: 'Google Cloud, Azure Cloud, Kubernetes, Python, Golang, Dagster, Kubeflow, MLFlow, Dask, Sklearn, OpenAI, Terraform, ArgoCD, Grafana, Keycloak, Kong',
      products: ['CML Insights App', 'Evidence Hub App', 'Evidence Hub Curator App', 'Fair Appraisal App'],
      projects: ['Kids Read Now', 'JG Wentworth'],
    },
    {
      role: 'Software Engineer',
      company: 'IFS R&D International (Pvt) Ltd.',
      logo: '/images/logos/ifs.png',
      location: 'Sri Lanka',
      period: 'February 2020 - July 2022',
      current: false,
      description: 'Developed enterprise solutions for airline and defense operators.',
      responsibilities: [
        'Developed and integrated optimization solutions for Fleet Planner, leveraging scheduling engines for planning airline fleet maintenance',
        'Acted as QA Champion, managing a team of 7 developers and improving application quality through rigorous testing and debugging',
        'Resolved critical performance issues and became go-to person for critical customer-focused bug fixes, ensuring timely delivery',
        'Gained extensive experience in global collaboration with teams from Canada, Sweden, and the UK',
      ],
      techStack: 'AWS, IFS Aurena, Oracle PL/SQL, .NET C#',
      products: ['Fleet Planner', 'Aviation Technical Content Manager'],
      projects: [],
    },
    {
      role: 'Trainee Software Engineer',
      company: 'Nikini Automation Systems (Pvt) Ltd.',
      logo: '/images/logos/nikini.png',
      location: 'Sri Lanka',
      period: 'September 2018 - December 2018',
      current: false,
      description: 'Industrial automation and control systems development.',
      responsibilities: [
        'Worked on industrial automation projects',
        'Gained hands-on experience with PLC programming',
        'Learned SCADA systems and industrial control protocols',
      ],
      techStack: 'PLC Programming, SCADA Systems',
      products: [],
      projects: [],
    },
    {
      role: 'Trainee Engineer',
      company: 'Ceylon Electricity Board',
      logo: '/images/logos/ceb.png',
      location: 'Sri Lanka',
      period: 'June 2018 - September 2018',
      current: false,
      description: 'Power systems engineering and grid management.',
      responsibilities: [
        'Analyzed power distribution networks',
        'Conducted feasibility studies for renewable energy integration',
        'Learned about grid management and electrical infrastructure',
      ],
      techStack: 'Power Systems, Electrical Engineering',
      products: [],
      projects: [],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section id="experience" title="Professional Experience" className="bg-gray-900">
      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all"
            >
              {/* Compact Header - Always Visible */}
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-6 text-left hover:bg-gray-800/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4 flex-1">
                    {/* Company Logo */}
                    {exp.logo && (
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 relative bg-white rounded-lg p-1.5 flex items-center justify-center">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-2">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium text-blue-400">{exp.company}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm line-clamp-2">{exp.description}</p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />

                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-6 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex gap-3">
                          <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Products & Projects */}
                  {(exp.products.length > 0 || exp.projects.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                      {exp.products.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Products ({exp.products.length})
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.products.map((product, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs bg-purple-950/50 text-purple-300 border border-purple-500/30 rounded-full"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {exp.projects.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Notable Projects ({exp.projects.length})
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.projects.map((project, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs bg-cyan-950/50 text-cyan-300 border border-cyan-500/30 rounded-full"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Technologies
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{exp.techStack}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

