# Build log

Append-only. Most recent at top.

---

## 2026-04-26 — Phase 1 audit complete

**Actor:** claude-code
**Phase:** 1 (audit)

- Cloned repo into `~/Documents/newcastle-oven-cleaning/`
- Extracted scaffolding (BRIEF.md, DECISIONS.md, README.md, SETUP.md, state.json, tracker.html, .gitignore at root)
- Read BRIEF.md fresh — confirmed Aga policy update (no competitor naming) and `sameAs: []` empty-array guidance
- Created `code/` directory
- Ported prior audits with SUPERSEDED headers:
  - `code/audit-report-v1-2026-04-23.md`
  - `code/audit-report-v2-2026-04-24.md`
  - `code/redirect-map-v2-superseded.txt`
  - `code/gap-list-v2-superseded.md`
- Wrote reconciled audit at `code/audit-2026-04-26.md`. Maps all 22 existing GHL pages → 28 final Astro pages (1 home + 4 supporting + 5 service variants + 18 location). Includes redirect map, Aga cleanup plan (~80 mentions sitewide), and 4 open questions for completion report.
- Marked `r-t1-011` done (Ross has set up GitHub + Cloudflare; repo cloned successfully).
- Marked `k-t1-001` in-progress (Astro project setup begins next).

Next: Phase 2 — Astro project scaffold + Cloudflare Pages connection.

---

## 2026-04-26 — Phase 2 partial (Astro scaffold + foundation)

**Actor:** claude-code
**Phase:** 2 (Astro project setup) — partial: foundation done, Cloudflare Pages connection pending Ross-side step

Built:
- `package.json`, `astro.config.mjs`, `tsconfig.json` — Astro 5, sitemap integration, static output, trailingSlash always
- `src/lib/nap.ts` — single source of truth for NAP, geo, hours, insurance, the 18 SERVICE_AREAS array (in BRIEF priority order), the 5 SERVICES array
- `src/styles/global.css` — full design system ported from existing GHL build (navy + orange palette, Inter, all components: hero, FAQ, CTA banner, footer, breadcrumb, body content, WhatsApp float button, fade-in animations)
- `src/layouts/BaseLayout.astro` — header (with logo + nav + Call CTA), footer (with NAP + dynamic areas list), WhatsApp floating button, FAQ accordion JS
- `src/components/schema/`:
  - `LocalBusiness.astro` (with full areaServed, hasOfferCatalog, geo, hours)
  - `Person.astro` (Ross, with `sameAs: []` empty-array pattern per BRIEF Part 5)
  - `FAQPage.astro` (parameterised)
  - `BreadcrumbList.astro` (parameterised)
  - `Service.astro` (parameterised, with AggregateOffer price ranges)
- `src/components/FAQ.astro` (visible accordion, paired with FAQPage schema)
- `src/components/ContactCTA.astro`
- `public/robots.txt` — full AI-crawler allowlist per BRIEF Part 8
- `public/llms.txt` — business overview for AI engines
- Ported `favicon.svg`, `favicon.png`, `newcastle-logo.svg` from existing GHL build
- `src/pages/index.astro` — homepage built end-to-end (hero, services grid, Note from Ross block, areas grid, FAQ accordion, CTA banner, all schema types injected). Strips Aga from FAQ; areaServed schema reflects new 18 only.

Not yet done in Phase 2:
- `npm install` not yet run (Ross can run locally, or I run on next session)
- Cloudflare Pages connection to GitHub repo (Ross does this in the Cloudflare dashboard — connects repo, sets build cmd `npm run build`, output dir `dist`, branch `main` for production / `dev` for staging)
- `wrangler.toml` (optional — can be configured via dashboard, deferring)
- Schema validation pass via Rich Results Test (deferred to Phase 4)

State updates:
- `k-t1-001` marked done (Astro project scaffold complete)
- `k-t1-002` marked todo (Cloudflare Pages connection — needs dashboard step)
- `k-t1-003`, `k-t1-004` marked done (folder structure + base layout)

Phase 3 (content build, 28 pages) is the largest remaining chunk. Beginning in the next session — drafting content for the 5 service variant pages first (highest commercial value), then the 18 location pages in BRIEF priority order, then the 4 supporting pages.

---

## 2026-04-26 — Phase 3 + 4 complete (full content build)

**Actor:** claude-code
**Phases:** 3 (content build) and 4 (technical SEO) — both complete

Built:
- `src/content.config.ts` (Astro 5 glob loader pattern, schema for service-areas collection)
- 18 area markdown files in `src/content/service-areas/` — each 250–700 words of unique local content + FAQ frontmatter, passing Sterling Sky 80/20 rule
- 5 service variant pages in `src/pages/` (single, double, range cooker with explicit non-Aga statement, hob+extractor merged page, microwave)
- 4 supporting pages: about (Fenham-local angle, Person schema with `sameAs: []`), contact (NAP + areas list), pricing (transparent £ ranges, no "from £X"), before-and-after (placeholder gallery structure)
- Dynamic `src/pages/oven-cleaning-[slug].astro` consuming the content collection
- 404 page (noindex)
- `public/_redirects` (30 rules: GHL → Astro URL renames, area drops, service merges)

Verified:
- `npm install` clean
- `npm run build` succeeds: 29 HTML files generated (28 indexable + 404)
- Sitemap `dist/sitemap-0.xml` includes all 28 URLs
- All schema rendered as JSON-LD partials per BRIEF Part 5

Aga cleanup verified:
- Zero "Aga"/"AGA" tokens in any page except the explicit "we don't service Agas — call for a recommendation" disclosure block
- No competitor named per BRIEF Part 1 (updated guidance)
- Range cooker page uses BRIEF-recommended phrasing verbatim

State updates:
- `k-t1-005` (homepage), `k-t1-006` (4 supporting), `k-t1-007` (5 service variants), `k-t1-008` (18 location), `k-t1-009` (schema injection), `k-t1-010` (301 redirect map): all done
- Tier-2 tasks `k-t2-001` (robots.txt), `k-t2-002` (llms.txt), `k-t2-003` (FAQ schema): all done
- `k-t1-002` still todo (Cloudflare Pages connection — Ross-side dashboard step)
- `k-t1-011` blocked (final cutover, post GBP verification)

Wrote `code/completion-report.md` with full status, build verification, deferred items, open questions, and next-steps workflow per BRIEF Phase 5.

**Status: ready for Ross to spin up Cloudflare Pages staging URL, then for Claude (chat) Phase 6 review.**
