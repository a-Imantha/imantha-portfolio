import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
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

  return (
    <>
      <Header />
      <main>
        <HeroSection />
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

