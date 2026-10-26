# esaletternew-york

Next.js 16 (App Router, Cache Components) build of **esaletternewyork.com**, implementing the
*Content Structure & Development Spec v1*: 72 templated URLs + 13 launch blog posts.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Where things live

| Path | What |
| --- | --- |
| `app/globals.css` | **All styling.** Starts with the shared Trust & Clarity typography system (same `globals.css` as ESA Letter Colorado, with New York brand colors `#0F75BC` / `#429ED7`), followed by component classes (layout and color only). No inline styles. |

**Typography:** use only the seven named classes in markup: `text-h1`, `text-h2`, `text-h3`, `text-h4`, `text-body-large`, `text-body-normal`, `text-body-small` (+ `text-body-small-semibold`). Plain `h1`–`h4` and `p` elements get their style from the base layer. Never set font sizes in component CSS; the minimum size is 14px.
| `lib/site.ts` | Site config, primary nav (spec 3.1), footer (3.2), pricing, contact. Values marked `CONFIRM` are placeholders. |
| `lib/content/*.ts` | Page data for every URL: H1, meta title/description, robots (I/F, NI/F), schema, body sections, FAQs, related links. |
| `lib/content/registry.ts` | Lookups, hub→spoke mapping, breadcrumbs, sitemap source. |
| `lib/seo.ts` | Metadata builder (robots, canonical, OG) and JSON-LD schema builders. |
| `components/layout/` | Header, footer, breadcrumbs, sticky mobile CTA. |
| `components/modules/` | Reusable modules M1–M14 (Hero, TrustBar, StepProcess, CtaBand, FaqAccordion, ChildGrid, LatestPosts, RelatedPages, Callout, ComparisonTable, ReviewerBox, SampleLetter, PricingBlock, CityInfoPanel) plus the #appForm form. |
| `components/templates/` | Page templates T2–T11. Home (T1) is `app/page.tsx`. |

## Routes

| URL | Template | File |
| --- | --- | --- |
| `/` | T1 | `app/page.tsx` (contains `#appForm`) |
| `/{core, support, legal}/` | T2 / T10 / T11 | `app/[slug]/page.tsx` |
| `/rights/`, `/conditions/`, `/locations/` | T3 | `app/<silo>/page.tsx` |
| `/rights/*`, `/conditions/*` | T4 / T5 | `app/<silo>/[slug]/page.tsx` |
| `/locations/*` | T6 | `app/locations/[slug]/page.tsx` |
| `/blog/`, `/blog/page/n/` | T7 | `app/blog/…` |
| `/blog/category/*` | T8 | `app/blog/category/[category]/…` |
| `/blog/{post}/` | T9 | `app/blog/[slug]/page.tsx` |
| 404 | T11 | `app/not-found.tsx` (real HTTP 404) |

`sitemap.xml` and `robots.txt` are generated (`app/sitemap.ts`, `app/robots.ts`). The sitemap includes I/F URLs only.

## Adding content

- **Blog post:** add an entry to `blogPosts` in `lib/content/blog.ts`. It needs a category, plus a `siloLink`, which is required.
- **City page:** add a `place({...})` entry in `lib/content/locations.ts` with unique local copy and M14 fields.
- **Any page:** remove its `reviewNote` once legal or clinical review is complete.

## Before launch

- Confirm pricing, support email and hours in `lib/site.ts`.
- Have counsel review legal citations, especially the HUD 2026 memo page and bill S9086.
- Add real provider profiles (`/about-our-therapists/`) and real reviews (`/reviews/`).
- Connect `app/api/apply/route.ts` and `app/api/contact/route.ts` to the secure intake system and support inbox.
