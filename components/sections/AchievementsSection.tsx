import React from 'react';
import Image from 'next/image';
import { ExternalLink, Award, Trophy, BookOpen, Briefcase, Users } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import type { Achievement } from '@/lib/content/types';
import { formatDate } from '@/lib/content/utils';

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const typeIcons = {
  Award: Trophy,
  Publication: BookOpen,
  Education: Award,
  Certification: Award,
  Professional: Briefcase,
  Leadership: Users,
  Achievement: Award,
};

const typeColors = {
  Award: 'from-yellow-500 to-orange-500',
  Publication: 'from-blue-500 to-cyan-500',
  Education: 'from-purple-500 to-pink-500',
  Certification: 'from-green-500 to-emerald-500',
  Professional: 'from-indigo-500 to-blue-500',
  Leadership: 'from-red-500 to-pink-500',
  Achievement: 'from-blue-500 to-purple-500',
};

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  // Find the Gold Award to feature it
  const goldAward = achievements.find(a => a.title.includes('Gold Award'));
  const otherAchievements = achievements.filter(a => !a.title.includes('Gold Award'));

  return (
    <Section id="achievements" title="Achievements & Recognition" className="bg-gray-950">
      {/* Featured: Gold Award */}
      {goldAward && (
        <div className="mb-12">
          <div className="relative bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/30 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left: Image */}
              <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/nbqsa-award-landscape.jpg"
                  alt="National ICT Awards 2024 - Gold Award"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center gap-2 self-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">
                    Featured Achievement
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white">
                  {goldAward.title}
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  {goldAward.description}
                </p>
                
                <p className="text-sm text-gray-400">
                  {formatDate(goldAward.date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherAchievements.map((achievement, index) => {
          const Icon = typeIcons[achievement.type as keyof typeof typeIcons] || Award;
          const colorClass = typeColors[achievement.type as keyof typeof typeColors] || typeColors.Achievement;
          
          return (
            <Card key={index}>
              <div className="space-y-3">
                {/* Icon and Type */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {achievement.type && (
                    <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                      {achievement.type}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {formatDate(achievement.date)}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Links */}
                {achievement.links && achievement.links.length > 0 && (
                  <div className="pt-3 border-t border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {achievement.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

