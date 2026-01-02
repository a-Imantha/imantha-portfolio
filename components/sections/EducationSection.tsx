'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { GraduationCap, Award, BookOpen, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function EducationSection() {
  const [expandedModules, setExpandedModules] = useState<number | null>(null);
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Moratuwa',
      logo: '/images/logos/university-moratuwa.png',
      period: '2021 - 2024',
      specialization: 'Data Science and Machine Learning',
      gpa: '3.9',
      grade: 'A',
      highlight: true,
      description: 'Advanced study in machine learning, data science, and AI with focus on explainable AI for weather prediction.',
      modules: [
        'Data Science',
        'Pattern Recognition',
        'Big Data Analytics Technologies',
        'Advanced Databases',
        'Machine Learning',
        'Neural Networks',
        'Natural Language Processing',
        'Advanced Algorithms',
        'Statistical Inference',
        'Data Mining',
        'Business Intelligence',
        'Bio-Informatics',
      ],
      thesis: {
        title: 'Explainable Image Segmentation for Spatio-Temporal and Multivariate Image Data in Precipitation Nowcasting',
        grade: 'A',
        award: 'Gold Award - National ICT Awards 2024',
        publication: 'Published in "Results in Engineering" (Elsevier, 2025)',
        publicationLink: 'https://doi.org/10.1016/j.rineng.2025.105595',
      },
    },
    {
      degree: 'Bachelor of Science (Honours) in Engineering',
      institution: 'University of Moratuwa',
      logo: '/images/logos/university-moratuwa.png',
      period: '2015 - 2020',
      specialization: 'Electrical Engineering',
      grade: 'Second Class Lower Division',
      achievement: "Dean's List in Final Semester",
      highlight: false,
      description: 'Comprehensive engineering education with focus on electrical systems, power electronics, and embedded systems.',
      capstone: {
        title: 'Predictive and Standalone Fault Diagnosis System for Induction Motors',
        grade: 'A+',
        publication: 'Published in IESL Journal "Engineer" (2021)',
      },
    },
    {
      degree: 'Minor Degree in Entrepreneurship',
      institution: 'University of Moratuwa',
      logo: '/images/logos/university-moratuwa.png',
      period: '2015 - 2020',
      specialization: null,
      grade: null,
      highlight: false,
      description: 'Interdisciplinary program combining technical knowledge with business and entrepreneurial skills.',
    },
    {
      degree: 'GCE Advanced Level',
      institution: "President's College Embilipitiya",
      logo: '/images/logos/presidents-college.png',
      period: '2014',
      specialization: 'Physical Science',
      grade: 'All A Passes (First Attempt)',
      highlight: false,
      description: 'Ranked 715th island-wide among 300,000+ students. Qualified for University of Moratuwa, the premier engineering university in Sri Lanka.',
    },
    {
      degree: 'GCE Ordinary Level',
      institution: "President's College Embilipitiya",
      logo: '/images/logos/presidents-college.png',
      period: '2011',
      specialization: null,
      grade: '9 A Passes',
      highlight: false,
      description: 'Strong foundation across all subjects with excellent results.',
    },
  ];

  return (
    <Section id="education" title="Education" className="bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`relative ${
              edu.highlight
                ? 'bg-gradient-to-br from-blue-950/30 to-purple-950/30 border-2 border-blue-500/30'
                : 'bg-gray-800/50 border border-gray-700'
            } backdrop-blur-sm rounded-xl p-6 hover:border-gray-600 transition-all hover:shadow-lg ${
              edu.highlight ? 'hover:shadow-blue-500/20' : 'hover:shadow-gray-500/10'
            }`}
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1.5">
                  {edu.logo ? (
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-gray-800" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium">{edu.institution}</p>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                {edu.gpa && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/50 text-green-300 border border-green-500/30 rounded-full text-sm font-semibold">
                    <Award className="w-4 h-4" />
                    GPA: {edu.gpa}/4.0
                  </div>
                )}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              {/* Left Column */}
              <div className="space-y-3">
                {edu.description && (
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                )}
                
                {edu.specialization && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Specialization
                    </h4>
                    <p className="text-sm text-white">{edu.specialization}</p>
                  </div>
                )}
                
                {edu.grade && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Classification
                    </h4>
                    <p className="text-sm text-white">{edu.grade}</p>
                  </div>
                )}

                {edu.achievement && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Achievement
                    </h4>
                    <p className="text-sm text-green-400 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {edu.achievement}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {edu.thesis && (
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Master&apos;s Thesis
                    </h4>
                    <p className="text-sm text-white mb-2 leading-relaxed">{edu.thesis.title}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-green-950/50 text-green-300 border border-green-500/30 rounded">
                        Grade: {edu.thesis.grade}
                      </span>
                      {edu.thesis.award && (
                        <span className="px-2 py-1 text-xs bg-yellow-950/50 text-yellow-300 border border-yellow-500/30 rounded flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {edu.thesis.award}
                        </span>
                      )}
                      {edu.thesis.publication && (
                        <a
                          href={edu.thesis.publicationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 text-xs bg-blue-950/50 text-blue-300 border border-blue-500/30 rounded hover:bg-blue-900/50 transition-colors"
                        >
                          {edu.thesis.publication}
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {edu.capstone && (
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Capstone Project
                    </h4>
                    <p className="text-sm text-white mb-2 leading-relaxed">{edu.capstone.title}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-green-950/50 text-green-300 border border-green-500/30 rounded">
                        Grade: {edu.capstone.grade}
                      </span>
                      {edu.capstone.publication && (
                        <span className="px-2 py-1 text-xs bg-blue-950/50 text-blue-300 border border-blue-500/30 rounded text-[10px]">
                          {edu.capstone.publication}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modules - Collapsible */}
            {edu.modules && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button
                  onClick={() => setExpandedModules(expandedModules === index ? null : index)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 hover:text-blue-400 transition-colors"
                >
                  <span>Modules Completed ({edu.modules.length})</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedModules === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedModules === index && (
                  <div className="flex flex-wrap gap-2 animate-in fade-in duration-200">
                    {edu.modules.map((module, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gray-900/50 text-gray-300 border border-gray-700 rounded-full hover:border-blue-500/50 transition-colors"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

