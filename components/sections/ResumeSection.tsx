import React from 'react';
import { Section } from '@/components/ui/Section';
import { getResume } from '@/lib/content/loader';
import { Prose } from '@/components/ui/Prose';
import { markdownToHtml } from '@/lib/content/markdown';

export async function ResumeSection() {
  const resume = getResume();
  const htmlContent = await markdownToHtml(resume.content);

  return (
    <Section id="resume" title="Resume" className="bg-gradient-to-b from-gray-950 to-gray-900">
      <Prose>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Prose>
    </Section>
  );
}

