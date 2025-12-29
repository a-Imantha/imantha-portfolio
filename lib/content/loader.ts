import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  ProjectSchema,
  TechSchema,
  ArticleSchema,
  AstroSchema,
  AchievementSchema,
} from './schema';
import type {
  Project,
  Tech,
  Article,
  Astro,
  Resume,
  Achievement,
} from './types';
import { markdownToHtml } from './markdown';

const contentDir = path.join(process.cwd(), 'content');

function readMdxFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}

function getAllMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

// Projects
export async function getAllProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentDir, 'projects');
  const files = getAllMdxFiles(projectsDir);

  return Promise.all(files.map(async (file) => {
    const filePath = path.join(projectsDir, file);
    const { frontmatter, content } = readMdxFile(filePath);
    const validated = ProjectSchema.parse(frontmatter);
    const htmlContent = await markdownToHtml(content);
    return { ...validated, content: htmlContent };
  }));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find((p) => p.slug === slug) || null;
}

// Tech
export async function getAllTech(): Promise<Tech[]> {
  const techDir = path.join(contentDir, 'stack');
  const files = getAllMdxFiles(techDir);

  return Promise.all(files.map(async (file) => {
    const filePath = path.join(techDir, file);
    const { frontmatter, content } = readMdxFile(filePath);
    const validated = TechSchema.parse(frontmatter);
    const htmlContent = await markdownToHtml(content);
    return { ...validated, content: htmlContent };
  }));
}

export async function getTechBySlug(slug: string): Promise<Tech | null> {
  const tech = await getAllTech();
  return tech.find((t) => t.slug === slug) || null;
}

// Articles
export async function getAllArticles(): Promise<Article[]> {
  const articlesDir = path.join(contentDir, 'articles');
  const files = getAllMdxFiles(articlesDir);

  const articles = await Promise.all(files.map(async (file) => {
    const filePath = path.join(articlesDir, file);
    const { frontmatter, content } = readMdxFile(filePath);
    const validated = ArticleSchema.parse(frontmatter);
    const htmlContent = await markdownToHtml(content);
    return { ...validated, content: htmlContent, source: 'local' as const };
  }));
  
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Astro
export async function getAllAstro(): Promise<Astro[]> {
  const astroDir = path.join(contentDir, 'astro');
  const files = getAllMdxFiles(astroDir);

  const astro = await Promise.all(files.map(async (file) => {
    const filePath = path.join(astroDir, file);
    const { frontmatter, content } = readMdxFile(filePath);
    const validated = AstroSchema.parse(frontmatter);
    const htmlContent = await markdownToHtml(content);
    return { ...validated, content: htmlContent };
  }));
  
  return astro.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getAstroBySlug(slug: string): Promise<Astro | null> {
  const astro = await getAllAstro();
  return astro.find((a) => a.slug === slug) || null;
}

// Resume
export async function getResume(): Promise<Resume> {
  const resumePath = path.join(contentDir, 'resume', 'resume.mdx');
  if (!fs.existsSync(resumePath)) {
    return { content: '', frontmatter: {} };
  }
  const { frontmatter, content } = readMdxFile(resumePath);
  const htmlContent = await markdownToHtml(content);
  return { content: htmlContent, frontmatter };
}

// Achievements
export function getAchievements(): Achievement[] {
  const achievementsPath = path.join(contentDir, 'achievements', 'achievements.json');
  if (!fs.existsSync(achievementsPath)) {
    return [];
  }
  const fileContents = fs.readFileSync(achievementsPath, 'utf8');
  const data = JSON.parse(fileContents) as unknown[];
  return data.map((item) => AchievementSchema.parse(item));
}

// Utility: Get projects by tech slug
export async function getProjectsByTech(techSlug: string): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((p) => p.tech.includes(techSlug));
}

