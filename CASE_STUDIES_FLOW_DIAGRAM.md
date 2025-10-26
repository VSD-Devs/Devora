# 📊 Case Studies Flow Diagram

## User Click Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      DEVORA HOMEPAGE                         │
│                    (app/page.tsx)                            │
│                                                               │
│  ┌─ Header ─────────────────────────────────────────────┐   │
│  │                                                       │   │
│  ├─ Hero ───────────────────────────────────────────────┤   │
│  │                                                       │   │
│  ├─ Client Logos ───────────────────────────────────────┤   │
│  │                                                       │   │
│  ├─ About ───────────────────────────────────────────────┤   │
│  │                                                       │   │
│  ├─ Why Us ──────────────────────────────────────────────┤   │
│  │                                                       │   │
│  ├─ Our Services ────────────────────────────────────────┤   │
│  │                                                       │   │
│  ├─ [OUR WORK SECTION] 👈 ← YOU ARE HERE               │   │
│  │  (components/our-work.tsx)                           │   │
│  │                                                       │   │
│  │  📱 MOBILE VIEW                                       │   │
│  │  ┌─────────────────┐                                 │   │
│  │  │ [Case Study 1]  │ ← Carousel (Embla)              │   │
│  │  │ "View Case" →  │                                 │   │
│  │  └─────────────────┘                                 │   │
│  │  [Prev] [Next] buttons                               │   │
│  │                                                       │   │
│  │  🖥️ DESKTOP VIEW                                       │   │
│  │  ┌────────────────┐  ┌────────────────┐              │   │
│  │  │[Case Study 1]  │  │[Case Study 2]  │              │   │
│  │  │"View Case"  →  │  │"View Case"  →  │              │   │
│  │  └────────────────┘  └────────────────┘              │   │
│  │                                                       │   │
│  │  ┌────────────────┐  ┌────────────────┐              │   │
│  │  │[Case Study 3]  │  │[Case Study 4]  │              │   │
│  │  │"View Case"  →  │  │"View Case"  →  │              │   │
│  │  └────────────────┘  └────────────────┘              │   │
│  │                                                       │   │
│  │  ┌────────────────┐                                  │   │
│  │  │[Case Study 5]  │                                  │   │
│  │  │"View Case"  →  │                                  │   │
│  │  └────────────────┘                                  │   │
│  │                                                       │   │
│  ├─ Success Stories ─────────────────────────────────────┤   │
│  │                                                       │   │
│  ├─ Contact Form ─────────────────────────────────────────┤   │
│  │                                                       │   │
│  └─ Footer ──────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
         ⬇ USER CLICKS "View Case Study"
         ⬇ 
┌─────────────────────────────────────────────────────────────┐
│          DYNAMIC CASE STUDY PAGE                             │
│     (app/case-studies/[slug]/page.tsx)                      │
│                                                               │
│  Parameters: {slug: string}                                  │
│                                                               │
│  ┌─ HEADER ──────────────────────────────────────────────┐   │
│  │                                                       │   │
│  ├─ HERO SECTION ────────────────────────────────────────┤   │
│  │ [Back to Portfolio ←] Button                         │   │
│  │ Title: "{Study.title}"                               │   │
│  │ Subtitle: "{Study.subtitle}"                         │   │
│  │                                                       │   │
│  ├─ CHALLENGE & SOLUTION ────────────────────────────────┤   │
│  │ ┌─────────────┐    ┌──────────────┐                  │   │
│  │ │ Challenge   │    │ Our Solution │                  │   │
│  │ │ {content}   │    │ {content}    │                  │   │
│  │ └─────────────┘    └──────────────┘                  │   │
│  │                                                       │   │
│  ├─ RESULTS SECTION ─────────────────────────────────────┤   │
│  │ ┌──────────┐  ┌──────────┐  ┌──────────┐             │   │
│  │ │Metric 1  │  │Metric 2  │  │Metric 3  │             │   │
│  │ │"Value"   │  │"Value"   │  │"Value"   │             │   │
│  │ └──────────┘  └──────────┘  └──────────┘             │   │
│  │                                                       │   │
│  ├─ SERVICES & TECH ─────────────────────────────────────┤   │
│  │ Services: • Item 1  |  Technologies: [Badge] [Badge] │   │
│  │           • Item 2  |                      [Badge]    │   │
│  │           • Item 3  |                                │   │
│  │                                                       │   │
│  ├─ CTA SECTION ─────────────────────────────────────────┤   │
│  │ "Ready for your next project?"                      │   │
│  │ [Get in touch →] Button                             │   │
│  │                                                       │   │
│  └─ FOOTER ──────────────────────────────────────────────┘   │
│                                                               │
│  Navigation Options:                                         │
│  • [Back to Portfolio] → Returns to /#work                   │
│  • [Get in touch] → Scrolls to #contact                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## File Structure & Data Flow

```
PROJECT ROOT
│
├── 📄 app/page.tsx (MAIN HOMEPAGE)
│   │
│   └─→ 📦 components/our-work.tsx
│       │
│       └─→ 📝 projects array
│           │
│           ├── { slug: "envirotech-plumbing", ... }
│           ├── { slug: "sandalwood-memorials", ... }
│           ├── { slug: "sandalwood-memories", ... }
│           ├── { slug: "slush-dating", ... }
│           └── { slug: "sky-limit-travels", ... }
│
├── 📂 app/case-studies/
│   │
│   └── 📂 [slug]/
│       │
│       └── 📄 page.tsx (DYNAMIC CASE STUDY PAGE)
│           │
│           └─→ caseStudies object (all case study data)
│               │
│               ├── "envirotech-plumbing": { ... }
│               ├── "sandalwood-memorials": { ... }
│               ├── "sandalwood-memories": { ... }
│               ├── "slush-dating": { ... }
│               └── "sky-limit-travels": { ... }
│
└── 📂 public/case-studies/
    │
    ├── 🖼️ envirotech-plumbing.png
    ├── 🖼️ sandalwood-memorials.png
    ├── 🖼️ sandalwood-memories.png
    ├── 🖼️ slush-dating.png
    └── 🖼️ sky-limit-travels.png
```

---

## Route Mapping

```
ROUTE                                    RENDERS
─────────────────────────────────────────────────────────────
/                                    → Homepage with OurWork component
                                       ↓
                                    Each project has "View Case Study"
                                       ↓
/case-studies/envirotech-plumbing    → Dynamic page for EnviroTech
/case-studies/sandalwood-memorials   → Dynamic page for Sandalwood Memorials
/case-studies/sandalwood-memories    → Dynamic page for Sandalwood Memories
/case-studies/slush-dating           → Dynamic page for Slush Dating
/case-studies/sky-limit-travels      → Dynamic page for Sky Limit Travels
/case-studies/[any-other-slug]       → 404: "Case Study Not Found"
```

---

## Component Relationship

```
┌─────────────────────────────────────────┐
│         app/page.tsx                    │
│  (Main Homepage)                        │
└──────────────────┬──────────────────────┘
                   │ imports
                   ▼
┌─────────────────────────────────────────┐
│   components/our-work.tsx               │
│  (Case Studies Display)                 │
│                                         │
│  • Mobile: Embla Carousel              │
│  • Desktop: 2-Column Grid              │
│  • Each card has "View Case Study" CTA │
└──────────────────┬──────────────────────┘
                   │ onClick → Link href
                   ▼
┌─────────────────────────────────────────┐
│ app/case-studies/[slug]/page.tsx        │
│ (Dynamic Case Study Page)               │
│                                         │
│ • Receives slug from URL params         │
│ • Looks up caseStudies[slug]           │
│ • Renders full case study content      │
└─────────────────────────────────────────┘
```

---

## Data Structure Inside [slug]/page.tsx

```typescript
caseStudies = {
  "slug-key": {
    title: string,              // "EnviroTech Emergency Plumbing"
    subtitle: string,           // "24/7 Emergency Service Platform"
    challenge: string,          // Problem description
    solution: string,           // How we solved it
    results: {                  // Key metrics
      "Metric Name": "Value",
      "Metric Name": "Value",
      ...
    },
    services: string[],         // ["Web Dev", "UI/UX Design", ...]
    technologies: string[],     // ["Next.js", "TypeScript", ...]
  },
  ...
}
```

---

## Navigation Link Examples

```javascript
// In components/our-work.tsx
<Link href={`/case-studies/${project.slug}`}>
  <Button>View Case Study</Button>
</Link>

// In app/case-studies/[slug]/page.tsx
<Link href="/#work">
  <Button>Back to Portfolio</Button>
</Link>

<Link href="#contact">
  <Button>Get in touch</Button>
</Link>
```

---

## SEO & Metadata Generation

```typescript
// In app/case-studies/[slug]/page.tsx

export async function generateStaticParams() {
  // Creates static pages for all 5 case studies at build time
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const study = caseStudies[params.slug]
  return {
    title: `${study?.title} Case Study - Devora`,
    description: study?.challenge,
    // Automatically creates unique metadata for each page
  }
}
```

---

## Summary

✅ **5 case studies fully integrated**
✅ **Dynamic routing with static generation**
✅ **Responsive design (mobile carousel, desktop grid)**
✅ **SEO-friendly metadata**
✅ **Seamless navigation between pages**
✅ **Images optimized and cached**

All case studies are live and ready to receive user clicks! 🚀
