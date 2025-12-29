# Imantha Ahangama - Portfolio Website

A modern, production-ready personal portfolio website built with Next.js, TypeScript, TailwindCSS, and MDX content management.

## Features

- 🎨 **Stunning Hero Section**: Eye-catching hero with portrait, quick stats, and current role
- 📱 **Responsive Design**: Beautiful dark theme optimized for all devices
- 🎯 **Single-Page Navigation**: Smooth scrolling with sticky header and hamburger menu
- 🔍 **ScrollSpy**: Automatic section highlighting as you scroll
- 📝 **MDX Content**: Projects and articles stored in Git as MDX files with frontmatter
- 🎨 **Project Showcase**: Filterable projects (work/university/personal) with tech stack linking
- 💻 **Tech Stack Pages**: Each technology links to related projects with usage notes
- 🏆 **Featured Achievements**: Visual achievement cards with featured Gold Award display
- 📰 **Articles**: Local MDX articles + automatic Medium RSS import
- 🌌 **Astrophotography Gallery**: Real astrophotography images with detailed metadata
- ⚡ **Performance**: Optimized with Next.js 15, App Router, and Server Components
- ♿ **Accessibility**: Keyboard navigation, ARIA labels, focus management

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Content**: MDX with gray-matter, remark-gfm, rehype plugins
- **Validation**: Zod for type-safe frontmatter
- **Icons**: Lucide React
- **Animation**: Framer Motion (minimal usage)
- **Deployment**: Vercel-ready

## Project Structure

```
imantha-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage with all sections
│   ├── globals.css        # Global styles
│   ├── api/
│   │   └── medium-rss/    # Medium RSS API route
│   ├── projects/[slug]/   # Project detail pages
│   ├── stack/[slug]/      # Tech stack detail pages
│   ├── astro/[slug]/      # Astrophotography detail pages
│   └── articles/          # Articles index page
├── components/
│   ├── header/            # Header and mobile menu
│   ├── sections/          # Homepage sections
│   └── ui/                # Reusable UI components
├── content/               # All content in MDX/JSON
│   ├── resume/
│   ├── projects/
│   ├── stack/
│   ├── articles/
│   ├── astro/
│   └── achievements/
├── lib/
│   └── content/           # Content loading & validation
├── public/
│   ├── avatar.jpg
│   └── images/
└── styles/
    └── mdx.css            # MDX prose styling
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

#### Quick Setup (Recommended)

```bash
# Clone the repository
git clone https://github.com/yourusername/imantha-portfolio.git
cd imantha-portfolio

# Complete setup (install dependencies + git hooks)
make setup

# Start development
make dev
```

#### Manual Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/imantha-portfolio.git
cd imantha-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Install git hooks for quality checks:
```bash
make hooks-install
```

4. (Optional) Configure Medium RSS:
```bash
cp .env.example .env
# Edit .env and set NEXT_PUBLIC_MEDIUM_RSS_URL
```

5. Run the development server:
```bash
npm run dev
# or
make dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands (Makefile)

This project includes a comprehensive Makefile for common development tasks. Run `make help` to see all available commands.

### Quick Reference

```bash
# Development
make dev              # Start development server
make dev-turbo        # Start with turbopack (faster)
make install          # Install dependencies

# Build & Deploy
make build            # Build production bundle
make start            # Start production server
make export           # Export static site

# Quality Checks
make lint             # Run ESLint
make lint-fix         # Fix linting issues
make format           # Format code (auto-fix)
make type-check       # Run TypeScript checks
make preflight        # Run all quality checks (format + lint + type-check)

# Content
make add-content      # Show content addition guide
make validate-content # Validate all MDX content

# Cleanup
make clean            # Remove build artifacts
make reset            # Fresh install
```

For more details, see `make/README.md` or run `make help`.

## 🔒 Quality Assurance & CI/CD

### Git Hooks

This project uses git hooks to maintain code quality and catch issues before they reach the remote repository.

#### Pre-Push Hook

Automatically runs before every `git push`:
- ✅ ESLint checks
- ✅ TypeScript type checking
- ✅ Tests (when configured)

**Setup:**
```bash
# Install hooks (included in 'make setup')
make hooks-install

# Check hook status
make hooks-status

# Remove hooks
make hooks-remove
```

**Bypass Hook** (not recommended):
```bash
git push --no-verify
```

### GitHub Actions CI/CD

Every pull request automatically runs quality checks:

#### Workflows

1. **Code Quality**
   - ESLint validation
   - TypeScript type checking
   - Runs on every PR to `main` or `develop`

2. **Build Verification**
   - Ensures production build succeeds
   - Validates all content and routes
   - Catches build-time errors

3. **Tests** (ready when configured)
   - Unit and integration tests
   - Test coverage reporting

#### Configuration

The CI pipeline is defined in `.github/workflows/quality-checks.yml` and runs automatically on:
- Pull requests to `main` or `develop`
- Direct pushes to `main` or `develop`

**Environment Variables:**
- `MEDIUM_RSS_URL`: Optional, for Medium RSS integration

### Local Quality Checks

Run the same checks locally before pushing:

```bash
# Run all quality checks
make preflight

# Or run individually
make lint           # ESLint
make type-check     # TypeScript
make build          # Build verification
```

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Development workflow
- Code style standards
- Pull request checklist
- Troubleshooting CI failures

## Content Management Guide

All content is stored in the `/content` directory as MDX files or JSON. This makes it easy to update without touching code.

### Projects

Create a new MDX file in `content/projects/`:

```mdx
---
title: "Project Name"
slug: "project-slug"  # Used in URL: /projects/project-slug
type: "work"  # Options: "work", "university", "personal"
org: "Organization Name"
period: "July 2022 - Present"
role: "Your Role"
tech: ["python", "kubernetes", "postgres"]  # Must match tech slugs
highlights:
  - "Key achievement with measurable impact"
  - "Technical challenge you solved"
  - "Business value delivered"
heroImage: "/images/projects/your-image.png"
images: []  # Additional images for gallery
links:  # Optional
  - label: "View Demo"
    url: "https://example.com"
techNotes:  # Optional - shows on tech detail pages
  python: "Built ML pipelines and data processing workflows"
  kubernetes: "Deployed microservices with auto-scaling"
---

## Your Project Story

Write engaging content here in Markdown. Include:
- Problem you solved
- Your approach and architecture
- Technical challenges
- Results and impact
- What you learned

Use ## for main sections and ### for subsections.
```

**Tips:**
- Use descriptive, action-oriented highlights
- Keep slug URL-friendly (lowercase, hyphens)
- Reference tech slugs exactly as they appear in `/content/stack/`
- Add high-quality hero images (recommended: 1200x630px)

### Tech Stack

Create a new MDX file in `content/stack/` (filename: `{slug}.mdx`):

```mdx
---
name: "Technology Name"
slug: "tech-slug"  # Must match filename
category: "Backend"  # Options: Frontend, Backend, ML, Database, Infrastructure
description: "One-line description of the technology"
---

## Why [Technology]?

Explain why you use this technology and what makes it valuable.

## Key Features

List the main features or capabilities you leverage.

## My Experience

Describe your hands-on experience:
- Projects where you used it
- Challenges you solved
- Best practices you follow
- Advanced techniques you employ

## Integration

How this tech works with others in your stack.
```

**Categories:**
- `Frontend` - UI frameworks, styling
- `Backend` - Server languages, APIs
- `ML` - Machine learning frameworks and tools
- `Database` - Data storage solutions
- `Infrastructure` - DevOps, cloud, orchestration

**Related Projects:**
Projects listing this tech in their `tech` array will automatically appear on the tech detail page.

### Articles

Create a new MDX file in `content/articles/`:

```mdx
---
title: "Article Title"
slug: "article-slug"
date: "2024-01-15"
tags: ["tag1", "tag2"]
summary: "Brief summary"
---

# Article content
```

### Astrophotography

Create a new MDX file in `content/astro/`:

```mdx
---
title: "Object Name"
slug: "object-slug"
date: "2024-01-15"
target: "M42 Orion Nebula"
gear: "Telescope and camera"
location: "Location"
exposure: "300s"
integration: "6 hours"
heroImage: "/images/astro/object.jpg"
images: []
---

## Details about the image
```

### Achievements

Edit `content/achievements/achievements.json`:

```json
[
  {
    "title": "Achievement Title",
    "date": "2024-01-15",
    "description": "Description",
    "type": "Award",
    "links": [
      {
        "label": "Link Text",
        "url": "https://example.com"
      }
    ]
  }
]
```

### Resume

Edit `content/resume/resume.mdx` with your experience and education.

## Section Linking

Each homepage section has a unique ID:
- Hero section (top) - Landing with portrait and quick intro
- `#projects` - Projects showcase
- `#stack` - Tech stack
- `#achievements` - Achievements and recognition
- `#articles` - Articles and publications
- `#astro` - Astrophotography gallery

You can link directly to sections: `https://yoursite.com/#projects`

Each section heading has a "copy link" button for easy sharing.

## Medium RSS Integration

To import your Medium articles:

1. Set the environment variable:
```bash
NEXT_PUBLIC_MEDIUM_RSS_URL=https://medium.com/feed/@yourusername
```

2. The API route at `/api/medium-rss` will fetch and cache articles
3. Articles appear automatically in the Articles section
4. Cached for 6 hours to minimize API calls

If the RSS feed is unavailable, the site still builds successfully showing only local articles.

## Build & Deploy

### Production Build

```bash
pnpm build
pnpm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Set environment variables (if using Medium RSS)
4. Deploy!

Vercel automatically detects Next.js and configures everything.

### Deploy to Other Platforms

The app is a standard Next.js application and can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted with Docker

## Performance Optimizations

- Server Components by default (minimal client JS)
- `next/image` for automatic image optimization
- Static generation for all content pages
- Lazy loading for images
- CSS-only animations where possible
- Efficient MDX compilation at build time

## Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --border: rgba(255, 255, 255, 0.1);
}
```

### Fonts

Edit `app/layout.tsx` to use custom fonts with `next/font`.

### Sections

Add, remove, or reorder sections in `app/page.tsx` and update the navigation in `components/header/Header.tsx`.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this as a template for your own portfolio!

## Credits

Built by Imantha Ahangama

## Support

For issues or questions, please open an issue on GitHub.

