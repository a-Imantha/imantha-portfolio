import { z } from 'zod';

export const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  type: z.enum(['work', 'university', 'personal']),
  org: z.string(),
  period: z.string(),
  role: z.string(),
  tech: z.array(z.string()),
  links: z.array(z.object({
    label: z.string(),
    url: z.string(),
  })).optional(),
  highlights: z.array(z.string()),
  heroImage: z.string(),
  images: z.array(z.string()),
  techNotes: z.record(z.string()).optional(),
});

export const TechSchema = z.object({
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  description: z.string(),
});

export const ArticleSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  summary: z.string(),
  heroImage: z.string().optional(),
});

export const AstroSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  target: z.string(),
  gear: z.string(),
  location: z.string(),
  exposure: z.string(),
  integration: z.string(),
  heroImage: z.string(),
  images: z.array(z.string()),
});

export const AchievementSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  links: z.array(z.object({
    label: z.string(),
    url: z.string(),
  })).optional(),
  type: z.string().optional(),
});

