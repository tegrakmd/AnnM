# 🎨 Architecture Visuelle - Système ToC + Auteurs Interactif

## 📐 Diagramme d'Architecture Global

```
┌─────────────────────────────────────────────────────────────────┐
│                  USER VISITS POST PAGE                          │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  Page Component (app/BlP/posts/[slug]/page.tsx)                 │
│  ├─ getPost(slug) → Fetch MDX content + frontmatter             │
│  ├─ extractHeadings(post.content) → Heading[]                  │
│  ├─ getAuthorsBySlug(post.authors) → Author[]                  │
│  └─ Render components with data                                 │
└──────────┬──────────────────────────────────┬───────────────────┘
           │                                  │
           ▼                                  ▼
    ┌────────────────┐              ┌────────────────────┐
    │ Main Content   │              │  Sticky Sidebar    │
    │ (lg:flex 1fr)  │              │  (lg:sticky top-20)│
    │                │              │                    │
    │ • Cover Image  │              │ ┌────────────────┐ │
    │ • MDX Content  │              │ │  TableOfContents
    │   (with auto   │              │ │  (Interactive) │ │
    │    heading IDs)│              │ │ ┌──────────────┤ │
    │                │              │ │ │ § Heading 1  │ │
    │ h2#heading-1   │◄─────────────┼─┤ │ § Heading 2  │ │
    │ h3#heading-1-1 │              │ │ │   § Sub 2.1  │ │
    │ h2#heading-2   │◄─────────────┼─┤ │ § Heading 3  │ │
    │                │              │ │ └──────────────┤ │
    │                │              │ └────────────────┘ │
    │                │              │                    │
    │                │              │ ┌────────────────┐ │
    │                │              │ │ AuthorsSection │ │
    │                │              │ │                │ │
    │                │              │ │ 👤 Author 1    │ │
    │                │              │ │ 👤 Author 2    │ │
    │                │              │ └────────────────┘ │
    │                │              │                    │
    └────────────────┘              └────────────────────┘
           │                                  ▲
           │                                  │
           └──────────────────────────────────┘
                  (Smooth scroll link)
```

## 🔄 Flow d'Extraction d'En-têtes

```
┌──────────────────────────────────────────────┐
│  Raw MDX Content                             │
│  ─────────────────────────────────────────── │
│  ## The Rise of Flexibility                  │
│                                              │
│  Remote work has opened doors...             │
│                                              │
│  ### Benefits for Employees                  │
│                                              │
│  Employees can now...                        │
│                                              │
│  ## The Benefits for Businesses              │
│  ...                                         │
└────────────┬─────────────────────────────────┘
             │
             ▼
┌──────────────────────────────────────────────┐
│  extractHeadings(content) Function           │
│  ─────────────────────────────────────────── │
│  RegEx: /^## (.+)$|^### (.+)$/gm            │
│  Match & Extract:                            │
│  • "The Rise of Flexibility" → level: 2     │
│  • "Benefits for Employees" → level: 3      │
│  • "The Benefits for Businesses" → level: 2 │
│                                              │
│  Slugify text:                               │
│  • "The Rise of Flexibility"                │
│    → "the-rise-of-flexibility"              │
└────────────┬─────────────────────────────────┘
             │
             ▼
┌──────────────────────────────────────────────┐
│  Heading[] Array                             │
│  ─────────────────────────────────────────── │
│  [                                           │
│    {                                         │
│      id: "the-rise-of-flexibility",         │
│      text: "The Rise of Flexibility",       │
│      level: 2                                │
│    },                                        │
│    {                                         │
│      id: "benefits-for-employees",          │
│      text: "Benefits for Employees",        │
│      level: 3                                │
│    },                                        │
│    {                                         │
│      id: "the-benefits-for-businesses",    │
│      text: "The Benefits for Businesses",  │
│      level: 2                                │
│    }                                         │
│  ]                                           │
└────────────┬─────────────────────────────────┘
             │
             ▼
┌──────────────────────────────────────────────┐
│  TableOfContents Component                   │
│  ─────────────────────────────────────────── │
│  ✨ On this page                             │
│  ├─ The Rise of Flexibility                  │
│  │  ├─ Benefits for Employees                │
│  ├─ The Benefits for Businesses              │
│                                              │
│  (Interactive: Active link highlighted)      │
│  (Smooth scroll on click)                    │
│  (Track scroll position)                     │
└──────────────────────────────────────────────┘
```

## 👥 Flow de Résolution des Auteurs

```
┌────────────────────────────────────┐
│  Post Frontmatter                  │
│  ──────────────────────────────    │
│  authors:                          │
│    - tegra_kmd                     │
│    - meschac_irung                 │
└────────────┬──────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│  getAuthorsBySlug(slugs)           │
│  ──────────────────────────────    │
│  For each slug:                    │
│    lookup AUTHORS[slug]            │
└────────────┬──────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│  AUTHORS Database                  │
│  ──────────────────────────────    │
│  {                                 │
│    tegra_kmd: {                    │
│      name: "Tegra Kmd",            │
│      image: "/avat.webp",          │
│      bio: "Dev & Creator"          │
│    },                              │
│    meschac_irung: {                │
│      name: "Méschac Irung",        │
│      image: "https://cdn.san...",  │
│      bio: "Data Analyst & Writer"  │
│    }                               │
│  }                                 │
└────────────┬──────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│  Author[] Array                    │
│  ──────────────────────────────    │
│  [                                 │
│    {                               │
│      name: "Tegra Kmd",            │
│      image: "/avat.webp",          │
│      bio: "Dev & Creator"          │
│    },                              │
│    {                               │
│      name: "Méschac Irung",        │
│      image: "https://cdn.san...",  │
│      bio: "Data Analyst & Writer"  │
│    }                               │
│  ]                                 │
└────────────┬──────────────────────┘
             │
             ▼
┌────────────────────────────────────┐
│  AuthorsSection Component          │
│  ──────────────────────────────    │
│  👥 Written by                     │
│  ┌──────────────────────────────┐  │
│  │ 👤 │ Tegra Kmd               │  │
│  │    │ Developer & Content...  │  │
│  ├──────────────────────────────┤  │
│  │ 👤 │ Méschac Irung           │  │
│  │    │ Data Analyst & Tech...  │  │
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

## ⚡ Scroll Tracking Interactive

```
┌─────────────────────────────────────────────┐
│  USER SCROLLS DOWN PAGE                     │
└───────────────┬─────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────┐
│  Intersection Observer (on each Heading)    │
│                                             │
│  If element enters viewport:                │
│    → setActiveId(element.id)                │
└───────────────┬─────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────┐
│  TableOfContents Re-renders                 │
│                                             │
│  ✨ On this page                            │
│  ├─ The Rise of Flexibility  (inactive)     │
│  ├─ Benefits for Employees   ← ACTIVE       │
│  ├─ The Benefits for Businesses (inactive)  │
│                                             │
│  Active link styling:                       │
│  className = "text-foreground font-medium"  │
└─────────────────────────────────────────────┘
```

## 🎯 Click → Scroll → Track Flow

```
USER CLICKS LINK
       │
       ▼
Link href="#heading-id"
       │
       ├─ Prevents default navigation
       │
       └─ Finds element by ID
              │
              ▼
         scrollIntoView({ behavior: 'smooth' })
              │
              ▼
         Smooth Scroll Animation
              │
              ▼
         Element comes into view
              │
              ▼
         Intersection Observer detects
              │
              ▼
         setActiveId(heading.id)
              │
              ▼
         Link gets highlighted ✨
              │
              ▼
         User sees they arrived ✅
```

## 📱 Responsive Breakpoints

```
MOBILE (< 768px)
┌──────────────────────┐
│ Article Content      │
│                      │
│ ✓ Full width         │
│ ✓ No sidebar         │
│ ✓ All content visible│
│                      │
└──────────────────────┘


TABLET (768px - 1024px)
┌──────────────────┬─────────┐
│ Article Content  │ Sidebar │
│                  │ (small) │
│ Flexbox layout   │         │
└──────────────────┴─────────┘


DESKTOP (1024px+)
┌────────────────────┬──────────┐
│                    │          │
│ Article Content    │ Sidebar  │
│ (lg:max-w-2xl)     │ (sticky) │
│                    │          │
│ Full width layout  │ Fixed    │
│ Optimal reading    │ position │
│                    │          │
└────────────────────┴──────────┘
```

## 🔗 Data Flow Complet

```
┌────────────────────────────────────────────────────────────┐
│                    START: USER VISITS POST                 │
└────────────────────┬───────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
   ┌──────────────┐         ┌───────────────┐
   │ Get Post MD  │         │ Extract       │
   │ (server-side)│         │ Headings      │
   └──────┬───────┘         │ (from content)│
          │                 └───────┬───────┘
          │ (content + frontmatter) │
          │                         │
          ├─────────────┬───────────┤
          │             │           │
          ▼             ▼           ▼
       Content    Authors slugs  Heading[]
          │             │           │
          │      ┌──────▼──────┐    │
          │      │ Resolve     │    │
          │      │ Authors IDs │    │
          │      └──────┬──────┘    │
          │             │           │
          │             ▼           │
          │          Author[]       │
          │             │           │
          └──┬──────────┴───────────┤
             │                      │
             ▼                      ▼
    ┌─────────────────────┐  ┌──────────────┐
    │ Render JSX          │  │ Render React │
    │ (Server)            │  │ Components   │
    │ • MDX content       │  │ (Client)     │
    │ • Auto IDs on h2/h3 │  │ • ToC        │
    │                     │  │ • Authors    │
    └──────────┬──────────┘  │              │
               │             │ • Scroll     │
               │             │   tracking   │
               │             │ • Smooth     │
               │             │   scroll     │
               └─────┬────────┴──────────────┘
                     │
                     ▼
          ┌────────────────────────┐
          │  HTML sent to Browser  │
          │  (Interactive)         │
          │                        │
          │  ✓ Static content      │
          │  ✓ Client side JS      │
          │  ✓ Event listeners     │
          └────────────┬───────────┘
                       │
                       ▼
            ┌──────────────────────────┐
            │  USER INTERACTS          │
            │  ├─ Scroll               │
            │  ├─ Click ToC links      │
            │  └─ See active highlight │
            │                          │
            │  Experience ✨           │
            └──────────────────────────┘
```

## 📊 Performance Metrics

```
OPERATION              COMPLEXITY    TIME (approx)
─────────────────────────────────────────────────
Read MDX file          O(1)          ~5ms
Parse frontmatter      O(1)          ~2ms
Extract headings       O(n)          ~1-5ms
Lookup authors         O(k)          <1ms
Render to HTML         O(n)          ~50-200ms
─────────────────────────────────────────────────
Total (first load)                   ~60-220ms

INTERACTIVE OPERATIONS
─────────────────────────────────────────────────
Scroll detection       Intersection   Real-time
                       Observer
Click ToC link         Navigate       <100ms
Scroll animation       Smooth scroll  ~500-1000ms
State update           React          <50ms
```

---

**Cette architecture garantit :**

- ✅ Performance optimale
- ✅ Expérience utilisateur fluide
- ✅ Code maintenable et scalable
- ✅ Zéro impact sur le SEO
- ✅ Accessibilité complète
