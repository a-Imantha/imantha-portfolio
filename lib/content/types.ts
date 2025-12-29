// Content type definitions

export interface Project {
  title: string;
  slug: string;
  type: 'work' | 'university' | 'personal';
  org: string;
  period: string;
  role: string;
  tech: string[];
  links?: { label: string; url: string }[];
  highlights: string[];
  heroImage: string;
  images: string[];
  techNotes?: Record<string, string>;
  content: string;
}

export interface Tech {
  name: string;
  slug: string;
  category: string;
  description: string;
  content: string;
}

export interface Article {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  summary: string;
  heroImage?: string;
  content: string;
  source?: 'local' | 'medium';
  url?: string;
}

export interface Astro {
  title: string;
  slug: string;
  date: string;
  target: string;
  gear: string;
  location: string;
  exposure: string;
  integration: string;
  heroImage: string;
  images: string[];
  content: string;
}

export interface Resume {
  content: string;
  frontmatter?: Record<string, unknown>;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
  links?: { label: string; url: string }[];
  type?: string;
}

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

