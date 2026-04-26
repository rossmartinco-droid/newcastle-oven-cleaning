# Corrections — 2026-04-26 (Phase 6 strategic review pass)

**Reviewer:** claude-code (acting on Phase 6 review brief from claude-chat)
**Scope:** all 29 indexable pages (1 home + 4 supporting + 5 service variants + 19 location) plus 404 noindex page.
**Method:** static source inspection (no staging URL yet), pairwise similarity audit on all 19 area pages, NAP/anti-pattern/competitor grep, build verification (`npm run build` clean — 30 HTML files).

Critical + Strategic items applied in commit `[next-hash]` as part of this corrections pass. Polish + Notes left as-is for Ross's call.

---

## CRITICAL — must fix before launch (3 items, all fixed in this pass)

### C1. Competitor brand names appear on the indexed site (3 places)

BRIEF Part 1 (updated 2026-04-25): *"Do NOT name a specific competitor as the alternative — naming Ovenu or any other firm hands them free SEO and indexes a competitor on Ross's own site permanently."*

I went out of bounds. Found three competitor mentions:

| File | Line | Quote |
|---|---|---|
| `src/pages/about.astro` | 37 | "The big oven cleaning names in Newcastle — Ovenu, Ovenclean, Oven Doctor — are all franchises…" |
| `src/content/service-areas/ponteland.md` | 50 | "Most Ponteland customers have used Ovenu or Ovenclean at some point…" |
| `src/content/service-areas/jesmond.md` | 51 | "If you've used Ovenu or Ovenclean in the past and want a comparison…" |

**Fix applied:** competitor names removed in all three places. Replaced with neutral phrasing (e.g. "the big oven cleaning names in Newcastle are franchises", "if you've used a national franchise in the past"). Preserves the wedge ("independent vs franchise") without indexing competitor brand names.

### C2. Completion report headcount mismatch

`code/completion-report.md` (line ~52, ~78, ~94, ~136) repeatedly says "18 location pages" / "28 final pages". After the Cramlington restoration (commit `db04aee`), the actual file count is **19 location pages / 29 indexable + 1 noindex**.

**Fix applied:** all references in `completion-report.md` updated to 19 location pages and 29 indexable pages.

### C3. Repo-level documents reference outdated counts

`code/audit-2026-04-26.md` references "18 location pages", "28 final pages", and "13 new pages" in places. Real numbers post-Cramlington-restore: 19 / 29 / 14.

**Fix applied:** counts updated in the audit doc with a note flagging the Cramlington restoration.

---

## STRATEGIC — improves ranking / conversion (1 item, fixed in this pass)

### S1. About page contains SEO meta-commentary

`src/pages/about.astro` line 40 paragraph mentions "Google's local search algorithms" and "Hidden addresses and PO boxes signal 'franchise territory holder' or worse" in customer-facing copy. This is meta-talk — useful internally, awkward for an affluent/elderly customer who's not thinking about SEO. Reads as an industry-insider monologue rather than reassurance.

**Fix applied:** paragraph rewritten to focus on the customer-relevant point ("real address, real person, real route to your kitchen") without the SEO meta-commentary. Tightens the page and stays on tone.

---

## POLISH — nice-to-have (3 items, left for Ross's call)

### P1. Tier-3 area pages are under the BRIEF "600–1,000 words" ideal

| Page | Words |
|---|---|
| Wideopen | 338 |
| Killingworth | 345 |
| Ryton | 354 |
| Benton | 376 |
| Wylam | 388 |
| Cullercoats | 399 |
| Prudhoe | 417 |

All pass the 80/20 similarity test (max similarity 0.578, well under the 0.85 doorway threshold). Each contains genuinely unique local content (named streets, demographic notes, drive times). They'll rank fine. But if Ross wants more depth on these specifically, each could grow another 200–400 words once he has photos / customer stories from those areas.

**Recommendation:** leave as-is for launch. Add to roadmap as enrichment work after first jobs come in.

### P2. About page social `sameAs` array is empty

Per BRIEF, this is correct (`sameAs: []` empty-array pattern, populate when socials exist). Just flagging visibility — when Ross creates Facebook/Instagram/LinkedIn for the business, the array in `src/components/schema/Person.astro` is the place to add the URLs (one-line edit).

### P3. Person schema photo

No `image` property on Ross. Per Ross's instruction (decision 4 of 4 in last batch), correctly left out — populate when a headshot URL exists. No action.

---

## NOTES — informational only

### N1. Schema validation pending staging URL
Manual JSON-LD inspection passes — all required types (LocalBusiness, Person with `sameAs: []`, FAQPage, BreadcrumbList, Service with AggregateOffer) render correctly. Cannot run Google Rich Results Test without a public URL. Run on homepage + one service + one location page once Cloudflare staging is live.

### N2. CWV verification pending staging URL
Astro static + inline CSS + lazy images architecturally easily clears LCP <2.5s, INP <200ms, CLS <0.1. Cannot measure until deployed.

### N3. Pairwise similarity audit results
Max area-page similarity: 0.578 (Cullercoats ↔ Tynemouth — both coastal, expected). All 19 pages score <0.70 (well under the 0.85 doorway threshold and the 0.70 watch threshold). The 80/20 rule is comfortably passed sitewide.

### N4. NAP consistency
All NAP strings sourced from `src/lib/nap.ts`. Single source of truth. No hard-coded phone numbers, addresses, or hours other than the storytelling reference to "60 Brighton Grove" in `about.astro` (matches NAP exactly). Footer auto-renders from `SERVICE_AREAS`.

### N5. Cloudflare Pages connection still pending
Ross-side dashboard step (per BRIEF Phase 2). Doesn't block any further code work. Deferred for Ross.

### N6. GBP frozen
GBP video verification still in review per `state.json` (`r-t1-001` in-progress). Per BRIEF, do not touch. Confirmed: no edits to GBP attempted, no DNS changes, nothing deployed to production domain.

---

## Summary

- **3 Critical fixed.** Competitor naming was the biggest miss — directly violated explicit BRIEF guidance from 2026-04-25.
- **1 Strategic fixed.** About page tightened for tone.
- **3 Polish items deferred** (small Tier-3 pages, future schema additions). None block launch.
- **6 Notes** documenting the boundary between code work and Ross/staging-dependent work.

Build verified post-corrections: 30 HTML files generated, sitemap clean, all schema renders. No regressions.

Ready for Ross to: (a) connect Cloudflare Pages, (b) run final Rich Results Test once staging URL exists, (c) review POLISH items at leisure.
