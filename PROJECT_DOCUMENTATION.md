# The Crescent Beach Hotel - Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Current State Analysis](#current-state-analysis)
3. [Technical Stack](#technical-stack)
4. [Features & Functionality](#features--functionality)
5. [Known Issues](#known-issues)
6. [Migration Strategy](#migration-strategy)
7. [New Architecture Plan](#new-architecture-plan)
8. [Content Inventory](#content-inventory)

---

## Project Overview

**Project Name:** The Crescent Beach Hotel & Leisure Resort  
**Type:** Luxury Hotel Website  
**Purpose:** Online presence for a beachfront hotel in Baku, Azerbaijan  
**Target Audience:** International and local guests, business travelers, event organizers  

### Key Business Requirements
- Multi-language support (English, Azerbaijani, Russian)
- Room booking capabilities
- Restaurant and amenity showcases
- Conference facilities information
- Photo galleries
- Contact and reservation systems

---

## Current State Analysis

### What's Working
- Basic page structure exists for all major sections
- Translation files are in place for 3 languages
- Design system with Azerbaijani flag-inspired colors
- Responsive layouts
- Component structure is organized

### What's Not Working
1. **Translation System**: Partially implemented, not working across all pages
2. **Dependency Conflicts**: Major version incompatibilities
3. **Visual Issues**: 
   - Poor text visibility on hero sections
   - Inappropriate color gradients (green to red on buttons)
   - Overlay/background contrast problems
4. **Build System**: Mix of static export and dynamic rendering causing confusion
5. **Legacy Code**: Remnants from GitHub Pages deployment

---

## Technical Stack

### Current Stack (Problematic)
```json
{
  "next": "15.5.2",          // Updated but causing issues
  "react": "19.1.1",          // Latest
  "typescript": "5.9.2",      // Latest
  "tailwindcss": "4.1.12",    // v4 breaking PostCSS
  "next-intl": "4.3.5"        // Partially working
}
```

### Recommended Stack for Rebuild
```json
{
  "next": "15.5.2",           // Keep latest
  "react": "19.1.1",          // Keep latest
  "typescript": "5.9.2",      // Keep latest
  "tailwindcss": "3.4.x",     // Use stable v3
  "next-intl": "4.3.5",       // Proper implementation
  "@radix-ui/*": "latest",    // Modern UI components
  "framer-motion": "11.x"     // Animations
}
```

---

## Features & Functionality

### Core Pages
1. **Homepage**
   - Hero carousel with 5 slides
   - Booking widget
   - Feature cards
   - Statistics section
   - Restaurant previews
   - Testimonials
   - Instagram integration

2. **Rooms & Accommodations**
   - 262 rooms across 9 buildings
   - Room types: Standard Single/Twin, Deluxe Sea View, Junior Suite, Family Suite, Presidential Suite
   - Building selector
   - Price display
   - Amenity lists
   - Photo galleries

3. **Dining**
   - The Terrace (International)
   - Wild West (American)
   - Shade Bar
   - Pool Bar
   - Menu sections
   - Reservation forms

4. **Amenities**
   - Beach access
   - Multiple pools
   - Wellness center & spa
   - Kids club
   - Entertainment stage
   - Fitness facilities

5. **Conferences**
   - Multiple meeting rooms
   - Corporate packages
   - Event planning services

6. **Gallery**
   - Photo collections
   - Instagram widget
   - Video tours

7. **Contact**
   - Contact form
   - Location map
   - Social links
   - WhatsApp integration

### Components Library
- Header with language switcher
- Footer with newsletter
- Booking widget
- Weather widget
- Room cards
- Restaurant cards
- Testimonial cards
- Feature cards
- Statistics counters
- WhatsApp button

---

## Known Issues

### Critical Issues
1. **Build Fails**: Tailwind v4 incompatible with current PostCSS setup
2. **Type Errors**: Metadata imports breaking with Next.js 15
3. **Translation Broken**: Pages show hardcoded English text
4. **Visual Problems**: Text invisible on hero, wrong button colors

### Technical Debt
- Mixed static/dynamic rendering logic
- Custom LocaleProvider duplicating next-intl
- Legacy static-translations.ts file
- Unused out/ directory from static export
- Inconsistent component patterns

### Performance Issues
- Large unoptimized images
- No lazy loading on some components
- Redundant re-renders
- Bundle size not optimized

---

## Migration Strategy

### Phase 1: Setup (Day 1)
1. Create fresh Next.js 15 project
2. Configure TypeScript with strict mode
3. Set up Tailwind CSS v3 with custom config
4. Implement next-intl properly from start
5. Set up ESLint & Prettier

### Phase 2: Core Structure (Day 2)
1. Create app directory structure
2. Set up i18n routing
3. Create layout components
4. Implement design system
5. Set up fonts and assets

### Phase 3: Content Migration (Day 3-4)
1. Copy translation JSON files
2. Migrate images (optimize as we go)
3. Transfer hotel data constants
4. Recreate components with modern patterns
5. Implement pages one by one

### Phase 4: Features (Day 5-6)
1. Booking widget functionality
2. Form validations
3. Gallery implementations
4. Map integrations
5. Social media widgets

### Phase 5: Testing & Optimization (Day 7)
1. Cross-browser testing
2. Mobile responsiveness
3. Performance optimization
4. SEO implementation
5. Accessibility audit

---

## New Architecture Plan

### Directory Structure
```
cbh-v2/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── rooms/
│   │   │   ├── dining/
│   │   │   ├── amenities/
│   │   │   ├── conferences/
│   │   │   ├── gallery/
│   │   │   └── contact/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/           # Radix UI components
│   │   ├── layout/       # Header, Footer, etc
│   │   ├── features/     # Feature-specific
│   │   └── shared/       # Reusable components
│   ├── lib/
│   │   ├── i18n.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── hooks/
│   ├── types/
│   └── styles/
├── public/
│   ├── images/
│   ├── fonts/
│   └── locales/
├── messages/             # Translation files
├── .env.local
└── next.config.ts
```

### Design System
```typescript
// Color Palette
const colors = {
  primary: {
    green: '#00966F',    // Azerbaijan Green
    blue: '#00B5E2',     // Azerbaijan Blue
    red: '#E30A17',      // Azerbaijan Red (use sparingly)
  },
  neutral: {
    // Grays for text and backgrounds
  },
  semantic: {
    success: '',
    warning: '',
    error: '',
  }
}

// Typography
const typography = {
  fonts: {
    sans: 'Inter, system-ui',
    serif: 'Playfair Display',
  },
  sizes: {
    // Consistent scale
  }
}
```

### Component Patterns
```typescript
// Server Component (default)
export default async function PageName() {
  const t = await getTranslations();
  return <div>{t('key')}</div>;
}

// Client Component
'use client';
export default function Interactive() {
  const t = useTranslations();
  return <button>{t('key')}</button>;
}
```

---

## Content Inventory

### Essential Assets
- **Logo**: /public/logo.png
- **Hero Images**: 5 carousel images
- **Room Photos**: 6 room types × 4 photos each
- **Restaurant Images**: 4 venues × 3 photos each
- **Amenity Photos**: Beach, pools, spa, etc.

### Translation Keys Structure
```json
{
  "common": {},      // Shared UI text
  "navigation": {},  // Menu items
  "hero": {},       // Hero section
  "homepage": {},   // Home specific
  "rooms": {},      // Rooms section
  "dining": {},     // Restaurant info
  "amenities": {},  // Facilities
  "booking": {},    // Booking widget
  "footer": {}      // Footer content
}
```

### Data Constants
- Hotel info (name, address, contact)
- Room types and pricing
- Restaurant details
- Amenity descriptions
- Business hours
- Social media links

---

## Implementation Notes

### Best Practices to Follow
1. **Server Components by Default**: Only use client components when needed
2. **Proper Image Optimization**: Use next/image with proper sizes
3. **Translation at Build Time**: Server-side translations for better performance
4. **Type Safety**: Leverage TypeScript for all components
5. **Accessibility**: WCAG 2.1 AA compliance
6. **SEO**: Proper meta tags and structured data

### Pitfalls to Avoid
1. Don't mix static export with dynamic features
2. Don't duplicate translation logic
3. Avoid inline styles
4. Don't hardcode text in components
5. Avoid large client-side bundles

---

## Deployment Strategy

### Vercel Configuration
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["fra1"],  // Europe for Azerbaijan
  "functions": {
    "app/api/*": {
      "maxDuration": 10
    }
  }
}
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://crescentbeachhotel.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_MAPS_API_KEY=
```

---

## Success Criteria

### Technical
- [ ] All pages load without errors
- [ ] Translations work in all 3 languages
- [ ] Lighthouse score > 90
- [ ] No TypeScript errors
- [ ] Mobile responsive on all devices

### Business
- [ ] Booking widget functional
- [ ] Contact forms working
- [ ] Gallery displays properly
- [ ] SEO optimized
- [ ] Fast load times (< 3s)

---

## Timeline Estimate

**Total Duration**: 7-10 days

- **Setup & Architecture**: 1-2 days
- **Core Development**: 3-4 days
- **Content Migration**: 1-2 days
- **Testing & Optimization**: 1-2 days
- **Deployment & Launch**: 1 day

---

## Contact & Resources

**Developer Notes**:
- Use Radix UI for accessible components
- Consider Framer Motion for animations
- Implement progressive enhancement
- Focus on Core Web Vitals

**Reference Sites**:
- Four Seasons Hotels (luxury reference)
- Ritz Carlton (booking flow reference)
- Marriott (multi-language reference)

---

*Document created: November 27, 2024*  
*Last updated: November 27, 2024*  
*Version: 1.0*