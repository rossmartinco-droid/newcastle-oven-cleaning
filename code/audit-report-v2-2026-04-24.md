> ⚠️ SUPERSEDED by code/audit-2026-04-26.md (reconciled against BRIEF.md, max-delegation model). Kept for historical reference.

# Service-Area Page Audit V2 — newcastleovencleaning.co.uk

**Date:** 2026-04-24
**Scope:** 15 area pages + 7 service pages + homepage (23 pages total)
**New criteria:** 20-mile drive range, affluent/elderly demographic only, no Aga services, new `/oven-cleaning-[town]/` URL structure.

---

## Executive Summary

This is a **major restructure**, not a tune-up. Under the original "build for SEO coverage" brief, the 15-page layout passed all tests. Under the new "affluent homeowners within 20 miles of Fenham, no Aga" brief, **two-thirds of the existing area pages fail**.

### Headline numbers

- **15 area pages audited** → **3 KEEP · 2 REWRITE · 10 DELETE+301**
- **7 service pages** → **4 RENAME · 1 RENAME+REWRITE · 2 MERGE · 1 DELETE**
- **Homepage has 5 Aga mentions** that need removing (including in JSON-LD schema, the FAQ section, the offer catalog, and the `SMEGs, AGAs and Lacanches` line in the Ross note)
- **10 of the target 15 location URLs don't exist yet** — need building from scratch
- **Existing `/areas/[slug]/` URL structure needs migrating to `/oven-cleaning-[slug]/`** for every surviving page

### Top 3 risks

1. **The Aga problem is sitewide, not confined to the range-cooker page.** The homepage schema explicitly lists `"Range Cooker & AGA Cleaning"` as an offered service. The FAQ answers "Yes, we clean Agas". If a customer books an Aga on the basis of that copy and Ross declines, that's a consumer-protection issue and a trust kill. **Fix the homepage first, before anything else.**

2. **Most existing area pages target the wrong market.** Current pages for Wallsend, North/South Shields, Sunderland, Durham, Washington, Cramlington, Chester-le-Street, Blyth, and generic Gateshead are actively **attracting the wrong customer** — working-class end-of-tenancy / landlord traffic in areas Ross doesn't want to drive to. Ranking for these is a negative signal, not a positive one.

3. **Gap: 10 target URLs don't exist.** Ponteland, Darras Hall, Morpeth, Newcastle Great Park, South Gosforth, Cullercoats, Benton/Forest Hall, Low Fell, Wideopen/Killingworth, and the hub page `/oven-cleaning-newcastle-upon-tyne/` are all missing. These are where the affluent/elderly market actually is. Current site has zero coverage of the core target areas.

### Overall verdict

**The 15-page strategy as it stands is hurting ranking AND brand positioning.** Google is learning "Newcastle Oven Cleaning = end-of-tenancy / landlord / council-stock" service. That's the opposite of what you want.

**Recommendation:** execute the full restructure in one sprint — not page-by-page. Delete-and-301 the 10 wrong-demographic pages, rewrite the 2 mixed pages, rename the 3 survivors, strip Aga mentions sitewide, then build the 10 missing target pages.

---

## Per-page verdict table (area pages)

| Current URL | Verdict | Target URL | Aga mentions | Notes |
|---|---|---|---|---|
| /areas/jesmond/ | **KEEP** | /oven-cleaning-jesmond/ | 3 | Affluent, <1mi, copy is solid. Rename URL, strip Aga. |
| /areas/gosforth/ | **KEEP** | /oven-cleaning-gosforth/ | 4 | Affluent, 2mi, copy is solid. Rename URL, strip Aga. |
| /areas/tynemouth/ | **KEEP** | /oven-cleaning-tynemouth/ | 4 | Affluent coastal, 9mi, target market. Rename URL, strip Aga. |
| /areas/heaton/ | **REWRITE** | /oven-cleaning-high-heaton/ | 2 | Current copy leans on Tyneside flats (working-class south end). Rewrite to target High Heaton family homes only — Chillingham Road north, Heaton Park, Newton Road, Cartington Terrace. |
| /areas/whitley-bay/ | **REWRITE** | /oven-cleaning-whitley-bay/ | 3 | Narrow focus to Monkseaton / Marden end — the affluent residential side. Remove generic town-centre copy. |
| /areas/gateshead/ | **DELETE** | (no redirect — no Low Fell page yet) | 2 | Generic Gateshead = wrong demographic. Only Low Fell is target. Delete page, build `/oven-cleaning-low-fell/` from scratch. |
| /areas/wallsend/ | **DELETE** | /oven-cleaning-newcastle-upon-tyne/ | 3 | Working-class east end. 301 to hub. |
| /areas/north-shields/ | **DELETE** | /oven-cleaning-tynemouth/ | 3 | Not on target-15. 301 to nearest surviving coastal page. |
| /areas/south-shields/ | **DELETE** | /oven-cleaning-newcastle-upon-tyne/ | 3 | Wrong demographic + not on target-15. 301 to hub. |
| /areas/sunderland/ | **DELETE** | /oven-cleaning-newcastle-upon-tyne/ | 6 | Separate market, 13mi, not on target-15. |
| /areas/durham/ | **DELETE** | /oven-cleaning-newcastle-upon-tyne/ | 4 | Separate market, 16mi (in range but distinct). |
| /areas/washington/ | **DELETE** | /oven-cleaning-newcastle-upon-tyne/ | 4 | Not on target-15. New-build estate demographic mixed. |
| /areas/cramlington/ | **DELETE** | /oven-cleaning-newcastle-upon-tyne/ | 2 | Not on target-15. Council-stock heavy. |
| /areas/chester-le-street/ | **DELETE** | /oven-cleaning-newcastle-upon-tyne/ | 4 | Not on target-15. Durham-corridor market. |
| /areas/blyth/ | **DELETE** | /oven-cleaning-newcastle-upon-tyne/ | 3 | 14mi, not affluent, not on target-15. |

---

## Per-page verdict table (service pages)

| Current URL | Verdict | Target URL | Aga mentions | Notes |
|---|---|---|---|---|
| /services/single-oven-cleaning/ | **RENAME** | /single-oven-cleaning-newcastle/ | 1 | URL restructure only. Strip single Aga ref. |
| /services/double-oven-cleaning/ | **RENAME** | /double-oven-cleaning-newcastle/ | 1 | URL restructure only. Strip single Aga ref. |
| /services/range-cooker-cleaning/ | **RENAME+REWRITE** | /range-cooker-cleaning-newcastle/ | **20** | Heavy Aga content. Rewrite to cover Rangemaster, Stoves, Belling, Lacanche, Smeg etc. — drop all Aga references. Add explicit `"We don't clean traditional Agas — [recommendation link]"` to manage expectations. |
| /services/hob-cleaning/ | **MERGE** | /hob-and-extractor-cleaning-newcastle/ | 1 | Merge with extractor page. Combined page covers both. |
| /services/extractor-fan-cleaning/ | **MERGE** | /hob-and-extractor-cleaning-newcastle/ | 1 | Merge with hob page. |
| /services/microwave-cleaning/ | **RENAME** | /microwave-cleaning-newcastle/ | 1 | URL restructure only. |
| /services/oven-hob-extractor-bundle/ | **DELETE** | /single-oven-cleaning-newcastle/ | 1 | Bundle messaging now lives on homepage tier banner + estimator. Redirect to single oven page as the most relevant survivor. |

---

## Homepage Aga cleanup (critical)

**5 places on the homepage reference Aga — all need editing.** In order of impact:

1. **JSON-LD schema, `hasOfferCatalog`:** `"name": "Range Cooker & AGA Cleaning"` → change to `"name": "Range Cooker Cleaning"`
2. **FAQ schema + visible FAQ "Can you clean an AGA or range cooker?"** → rewrite to: `"Can you clean range cookers?"` with answer that removes Aga entirely, OR reword to: `"Can you clean an Aga?"` with answer `"I don't service traditional Agas. I recommend a specialist like [name]. For Rangemaster, Stoves, Belling, Lacanche, Smeg or any other range cooker, yes — from £99."`
3. **Visible FAQ "How much does oven cleaning cost":** `"range cookers and AGAs from £99"` → `"range cookers from £99"`
4. **Service grid card "Range Cooker & AGA":** rename to `"Range Cooker"`
5. **Ross note:** `"SMEGs, AGAs and Lacanches are quoted individually"` → `"SMEGs and Lacanches are quoted individually"` (remove the middle term)

---

## Gap list — pages that need building from scratch

10 target URLs have no existing equivalent on the site. These are the affluent/elderly postcodes Ross actually wants to serve, and currently they have zero coverage.

| Target URL | Priority | Rationale |
|---|---|---|
| /oven-cleaning-newcastle-upon-tyne/ | P0 hub | All deletes redirect here. Must exist before any redirect fires. Could be either a new page OR the homepage itself (see architectural note below). |
| /oven-cleaning-ponteland/ | P0 | Affluent commuter belt, known high-ticket range-cooker market, ~9mi. |
| /oven-cleaning-darras-hall/ | P0 | Premium demographic (highest income postcode in NE). Target client density. |
| /oven-cleaning-morpeth/ | P1 | 16mi, affluent market town, under-served by competitors. |
| /oven-cleaning-newcastle-great-park/ | P1 | New-build affluent estate, 4mi. Strong target match. |
| /oven-cleaning-low-fell/ | P1 | Only Gateshead postcode worth targeting. Affluent pocket. |
| /oven-cleaning-south-gosforth/ | P2 | Sister area to Gosforth, differentiated enough to be its own page. |
| /oven-cleaning-cullercoats/ | P2 | Coastal affluent, between Tynemouth and Whitley Bay. |
| /oven-cleaning-benton/ | P2 | Established residential, elderly homeowners. (Use `/benton/` unless Forest Hall is stronger locally.) |
| /oven-cleaning-wideopen/ | P2 | Similar — Killingworth alternative. Pick one per existing search volume. |

**Recommendation:** P0 group first (hub + Ponteland + Darras Hall). These are the 3 pages that will drive the most direct-match bookings for Ross's ideal customer. The rest build out the long tail over subsequent months.

### Architectural note on the hub URL

Current homepage sits at `/` (GHL's default). The target structure wants `/oven-cleaning-newcastle-upon-tyne/`. You have three options:

- **A) Keep `/` as home, create `/oven-cleaning-newcastle-upon-tyne/` as a separate "Newcastle" deep-dive page.** All deletes 301 to the deep-dive page. Homepage stays generic/branded.
- **B) Move homepage content to `/oven-cleaning-newcastle-upon-tyne/` and 301 `/` to it.** Bad for branding — your domain root shouldn't redirect. Avoid.
- **C) Treat the homepage AS the Newcastle hub. Delete-301 targets redirect to `/`.** Simplest. You already have the rankings on `/`; keep building them there.

**My recommendation: C.** Change the redirect map so every DELETE target becomes `/` instead of `/oven-cleaning-newcastle-upon-tyne/`. Drop that URL from the gap list.

---

## Redirect map (paste-ready for GHL)

Assuming Option C (homepage = hub). Save this as `redirect-map.txt`:

```
# Area page renames (KEEP + REWRITE — 301 old URL to new URL)
/areas/jesmond/                 → /oven-cleaning-jesmond/
/areas/gosforth/                → /oven-cleaning-gosforth/
/areas/tynemouth/               → /oven-cleaning-tynemouth/
/areas/heaton/                  → /oven-cleaning-high-heaton/
/areas/whitley-bay/             → /oven-cleaning-whitley-bay/

# Area page deletions (301 to nearest surviving page or hub)
/areas/gateshead/               → /oven-cleaning-low-fell/   (after Low Fell page is built; to / until then)
/areas/wallsend/                → /
/areas/north-shields/           → /oven-cleaning-tynemouth/
/areas/south-shields/           → /
/areas/sunderland/              → /
/areas/durham/                  → /
/areas/washington/              → /
/areas/cramlington/             → /
/areas/chester-le-street/       → /
/areas/blyth/                   → /

# Service page renames
/services/single-oven-cleaning/     → /single-oven-cleaning-newcastle/
/services/double-oven-cleaning/     → /double-oven-cleaning-newcastle/
/services/range-cooker-cleaning/    → /range-cooker-cleaning-newcastle/
/services/microwave-cleaning/       → /microwave-cleaning-newcastle/

# Service page merges
/services/hob-cleaning/             → /hob-and-extractor-cleaning-newcastle/
/services/extractor-fan-cleaning/   → /hob-and-extractor-cleaning-newcastle/

# Deleted service page
/services/oven-hob-extractor-bundle/ → /single-oven-cleaning-newcastle/
```

---

## Rewrite brief (for the 2 REWRITE pages)

### /oven-cleaning-high-heaton/ (rewrite from existing Heaton page)

- **Remove:** all Tyneside flat references, Chillingham Road student/rental copy, end-of-tenancy framing
- **Add:**
  - Named streets in High Heaton specifically: Heaton Park Road, Newton Road, Cartington Terrace, Rothbury Terrace, Heaton Hall Road
  - Heaton Park as the key landmark
  - Property-type angle: 1920s–30s three-bed semi-detached, well-maintained family homes
  - Customer demographic: long-term homeowners, annual oven maintenance, often retired professionals
- **Keep:** service offering, pricing, insurance, guarantee copy
- **Target word count:** 700–800
- **Remove all Aga mentions** — replace with "Rangemaster, Stoves, Belling, Smeg, Lacanche"

### /oven-cleaning-whitley-bay/ (rewrite existing page)

- **Remove:** generic Whitley Bay town-centre and seafront copy
- **Narrow to:** Monkseaton and Marden end specifically
- **Add:**
  - Named streets: Hillheads Road, Marden Park, Monkseaton Drive, Brierdene Crescent, Rockcliffe Avenue
  - Property-type angle: 1930s semi-detached, bungalows, mid-century family homes
  - Customer demographic: long-term residents, retirees, established families
- **Target word count:** 700–800
- **Remove all Aga mentions**

---

## Inaccessible pages

None. All 22 pages (15 area + 7 service + homepage) local and parseable.

---

## Deliverables

1. **`/tmp/audit-v2-raw-data.json`** — raw extracted data
2. **`audit-report-v2.md`** — this document
3. **`redirect-map.txt`** — below, separate file
4. **`gap-list.md`** — below, separate file
5. **Screenshots** — tool constraint, can't capture live pages; take them yourself (Cmd+Shift+4) for the 3 representative pages if useful.

## Order of operations (recommended)

**Before you delete anything**, to avoid losing rankings in a live environment:

1. Fix the Aga problem on the homepage first. Live. Today.
2. Rename the 3 KEEP pages to their new URLs with 301s. Don't delete the old URLs — just redirect.
3. Build `/oven-cleaning-high-heaton/` and `/oven-cleaning-whitley-bay/` at their new URLs with rewritten content. 301 the old `/areas/heaton/` and `/areas/whitley-bay/` URLs.
4. Build the P0 gap pages (Ponteland, Darras Hall) before deleting the DELETE pile — this gives Google fresh target-market content to rank.
5. Only then, 301 the 10 DELETE pages to `/`. Wait 2 weeks, monitor Search Console for 404s or referring-link issues.
6. Build P1 and P2 gap pages over the following 4–8 weeks.
