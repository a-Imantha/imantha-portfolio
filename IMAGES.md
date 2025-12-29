# Image Assets Guide

This document lists all image assets used in the portfolio and where to find/update them.

## Profile & Hero Images

### Avatar/Portrait
- **Location**: `/public/avatar.jpg`
- **Used in**: 
  - Header (circular avatar)
  - Hero section (main portrait)
  - Favicon reference
- **Source**: `photos/me potrait.jpg`
- **Recommended size**: 800x800px (square)

### Hero Portrait
- **Location**: `/public/images/hero-portrait.jpg`
- **Used in**: Hero section main image
- **Source**: `photos/me potrait.jpg`
- **Recommended size**: 1000x1000px

## Achievement Images

### National ICT Awards 2024
- **Portrait**: `/public/images/nbqsa-award.jpg`
  - Source: `photos/me holding nbqsa award portrait.jpg`
  - Vertical orientation

- **Landscape**: `/public/images/nbqsa-award-landscape.jpg`
  - Source: `photos/me NBQSA award landscape.jpg`
  - Used in: Featured achievement card on homepage
  - Recommended size: 1200x800px

## Project Images

### Motor Fault Diagnosis Project
- **Location**: `/public/images/projects/motor-fault-diagnosis.jpg`
- **Used in**: uni-fault-diagnosis project
- **Source**: `photos/me undergrad project-motor fault prediction.jpg`
- **Shows**: Raspberry Pi-based fault diagnosis system

### Other Projects
Project images are referenced in MDX frontmatter:
- `/public/images/projects/ml-platform.png` - CML Insights platform (placeholder)
- `/public/images/projects/xai-nowcasting.png` - XAI research (placeholder)
- `/public/images/projects/astromind-agents.png` - AstroMind project (placeholder)

**To add project images**: 
1. Add image to `/public/images/projects/`
2. Update `heroImage` in project MDX frontmatter

## Astrophotography Images

### Orion Nebula
- **Location**: `/public/images/astro/orion.jpg`
- **Source**: `photos/orion astrophotography.jpg`
- **Project**: orion-nebula.mdx

### Moon
- **Location**: `/public/images/astro/moon.jpg`
- **Source**: `photos/moon astrophotography.jpg`
- **Project**: moon.mdx

### Other Astrophotography
Other astro images are placeholders and should be replaced:
- `/public/images/astro/carina.jpg` - Carina Nebula
- `/public/images/astro/pleiades.jpg` - Pleiades
- `/public/images/astro/andromeda.jpg` - Andromeda Galaxy
- `/public/images/astro/lagoon.jpg` - Lagoon Nebula
- `/public/images/astro/rosette.jpg` - Rosette Nebula

**To add astrophotography images**:
1. Add high-quality image to `/public/images/astro/`
2. Create/update MDX file in `/content/astro/`
3. Set `heroImage` to your image path

## Image Optimization Tips

1. **Formats**: Use `.jpg` for photos, `.png` for graphics with transparency
2. **Size**: 
   - Hero images: 1200-2000px wide
   - Project thumbnails: 800-1200px wide
   - Astro images: 1500-3000px wide (detail important)
3. **Compression**: Use tools like ImageOptim or Squoosh.app before uploading
4. **Next.js**: Will automatically optimize images via `next/image` component

## Updating Images

To replace an image:
1. Place new image in appropriate `/public` directory
2. Use exact same filename, OR
3. Update references in:
   - MDX frontmatter (`heroImage` field)
   - Component code (if hardcoded)

## Adding New Images

For projects:
```mdx
---
heroImage: "/images/projects/my-new-project.png"
images: [
  "/images/projects/my-project-1.png",
  "/images/projects/my-project-2.png"
]
---
```

For astrophotography:
```mdx
---
heroImage: "/images/astro/my-target.jpg"
images: [
  "/images/astro/my-target-detail-1.jpg",
  "/images/astro/my-target-detail-2.jpg"
]
---
```

All images in `images` array will display in a gallery on detail pages.

