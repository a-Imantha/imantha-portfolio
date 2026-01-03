import { MetadataRoute } from 'next';
import {
  getAllProjects,
  getAllTech,
  getAllArticles,
  getAllAstro,
} from '@/lib/content/loader';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.imantha.dev';
  
  // Get all dynamic content
  const projects = await getAllProjects();
  const techStack = await getAllTech();
  const articles = await getAllArticles();
  const astro = await getAllAstro();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Tech stack pages
  const techPages: MetadataRoute.Sitemap = techStack.map((tech) => ({
    url: `${baseUrl}/stack/${tech.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Article pages (if you add individual article pages in future)
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Astrophotography pages
  const astroPages: MetadataRoute.Sitemap = astro.map((astroItem) => ({
    url: `${baseUrl}/astro/${astroItem.slug}`,
    lastModified: new Date(astroItem.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...projectPages,
    ...techPages,
    ...articlePages,
    ...astroPages,
  ];
}

