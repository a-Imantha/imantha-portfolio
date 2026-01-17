import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { AstroSection } from '@/components/sections/AstroSection';
import {
  getAllProjects,
  getAllTech,
  getAllArticles,
  getAllAstro,
  getAchievements,
} from '@/lib/content/loader';

export default async function HomePage() {
  const projects = await getAllProjects();
  const techStack = await getAllTech();
  const articles = await getAllArticles();
  const astro = await getAllAstro();
  const achievements = getAchievements();

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Imantha Ahangama",
    "url": "https://www.imantha.dev",
    "image": "https://www.imantha.dev/avatar.jpg",
    "jobTitle": "Machine Learning Engineering Lead",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Astromind",
        "url": "https://astromind.ai"
      },
      {
        "@type": "Organization",
        "name": "CML Insights"
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University of Moratuwa",
        "url": "https://uom.lk"
      }
    ],
    "knowsAbout": [
      "Machine Learning",
      "MLOps",
      "Python",
      "PyTorch",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Next.js",
      "Golang",
      "LLM Fine-tuning",
      "Explainable AI",
      "Cloud Architecture"
    ],
    "sameAs": [
      "https://github.com/a-Imantha",
      "https://linkedin.com/in/imanthaahangama"
    ],
    "description": "Building production ML systems at scale. ML Engineering Lead specializing in MLOps, cloud architecture, LLMs, and explainable AI."
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection projects={projects} />
        <TechStackSection techStack={techStack} />
        <AchievementsSection achievements={achievements} />
        <ArticlesSection localArticles={articles} />
        <AstroSection astro={astro} />
      </main>
      <Footer />
    </>
  );
}

