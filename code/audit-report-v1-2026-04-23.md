> ⚠️ SUPERSEDED by code/audit-2026-04-26.md (reconciled against BRIEF.md, max-delegation model). Kept for historical reference.

# Service-Area Page Audit — newcastleovencleaning.co.uk

**Date:** 2026-04-24
**Pages audited:** 15 area pages
**Method:** Cosine-similarity analysis, local-signal detection, distance check, market-cluster review.
**Thresholds:** Treacy 90% test = FAIL if cosine >0.85 against any other page.

---

## Executive Summary

- **15 pages total.**
- **Breakdown: 11 KEEP · 4 REWRITE · 0 CONSOLIDATE · 0 DELETE+301.**
- **Overall verdict: current strategy is helping, not hurting.** Zero pages cross the 90% similarity threshold. Max similarity = **0.789** (North Shields ↔ South Shields), well under the 0.85 danger line. All pages are within the 30-mile realistic service radius.
- **But — 4 pages have weak street-level specificity** and lean on neighbourhood/postcode detail only. Not doorway-level thin, but a Google reviewer doing a manual check would struggle to tell you exactly why these pages were written. Rewrite brief included.

### Top 3 risks

1. **Coastal cluster similarity.** North Shields ↔ South Shields = 0.789. Tynemouth ↔ Wallsend = 0.703. All pass today; if coastal SEO scales further (more pages, more shared copy) they drift toward doorway.
2. **Newcastle core cluster cannibalisation.** Jesmond, Gosforth, Heaton all target "oven cleaning Newcastle" intent. The homepage ALSO targets that intent. Long-term: homepage may lose rank to its own sub-pages, or vice versa.
3. **4 pages (Cramlington, Gateshead, Sunderland, Washington) have 0–1 unique street names.** They use neighbourhood names instead (Low Fell, Concord, Ashbrooke etc.) which passes Google's human-reviewer test for local knowledge, but is weaker signal than named streets.

---

## Per-page verdict table

| URL | Town | Words | T1 Sim | T2 Local | T3 Dist | Max sim | Verdict |
|---|---|---|---|---|---|---|---|
| /areas/blyth/ | Blyth | 660 | PASS | PASS | PASS (14mi) | 0.646 | KEEP |
| /areas/chester-le-street/ | Chester-le-Street | 680 | PASS | PASS | PASS (9mi) | 0.639 | KEEP |
| /areas/cramlington/ | Cramlington | 620 | PASS | **FAIL** | PASS (10mi) | 0.630 | **REWRITE** |
| /areas/durham/ | Durham | 720 | PASS | PASS | PASS (16mi) | 0.642 | KEEP |
| /areas/gateshead/ | Gateshead | 700 | PASS | **FAIL** | PASS (1.5mi) | 0.595 | **REWRITE** |
| /areas/gosforth/ | Gosforth | 750 | PASS | PASS | PASS (2mi) | 0.634 | KEEP |
| /areas/heaton/ | Heaton | 790 | PASS | PASS | PASS (1mi) | 0.608 | KEEP |
| /areas/jesmond/ | Jesmond | 720 | PASS | PASS | PASS (1mi) | 0.669 | KEEP |
| /areas/north-shields/ | North Shields | 710 | PASS | PASS | PASS (8mi) | 0.789 | KEEP (watch) |
| /areas/south-shields/ | South Shields | 710 | PASS | PASS | PASS (10mi) | 0.789 | KEEP (watch) |
| /areas/sunderland/ | Sunderland | 700 | PASS | **FAIL** | PASS (13mi) | 0.615 | **REWRITE** |
| /areas/tynemouth/ | Tynemouth | 710 | PASS | PASS | PASS (9mi) | 0.703 | KEEP |
| /areas/wallsend/ | Wallsend | 680 | PASS | PASS | PASS (4mi) | 0.703 | KEEP |
| /areas/washington/ | Washington | 720 | PASS | **FAIL** | PASS (8mi) | 0.621 | **REWRITE** |
| /areas/whitley-bay/ | Whitley Bay | 700 | PASS | PASS | PASS (10mi) | 0.692 | KEEP |

**Test definitions:**
- **T1** = Cosine similarity against every other page. FAIL if >0.85 with any other.
- **T2** = Local-signal check (named streets + local indicators). FAIL if fewer than 2 unique street names AND fewer than 10 local references.
- **T3** = Distance check. FAIL if town is >30 miles from Newcastle city centre.

---

## Consolidation plan

**None required.** No page pair crosses the 0.85 duplicate threshold. However, **strategic observation**:

The brief's Market Cluster Test flags Newcastle + Gateshead + Wallsend + Jesmond + Gosforth + Heaton as one market. If rankings plateau after 6 months, consider consolidating Jesmond + Gosforth + Heaton into the homepage as an expanded "Newcastle neighbourhoods" section and 301-ing those URLs to the homepage. **Don't do this now — they rank independently and your SEO investment is still maturing.**

---

## Rewrite brief

### /areas/cramlington/

- **Issue:** 0 named streets, only 5 local indicators. Uses village names (Northburn, Eastfield, Mayfield, Beaconhill, Shankhouse) but no street-level detail.
- **Add:**
  - 3–5 named streets (Station Road, Arcot Drive, Eastfield Dene, Mayfield Park, Beaconhill Glade)
  - Reference to Manor Walks shopping centre (main local landmark)
  - Mention proximity to Morpeth / Ashington / Seaton Delaval for breadth
  - One named property type (e.g. 1960s Cramlington new-town estate homes)
- **Target word count:** keep at 620–700 (don't bloat).

### /areas/gateshead/

- **Issue:** 0 named streets. Uses postcodes (NE8/NE9/NE10/NE11) and neighbourhoods (Low Fell, Felling, Team Valley) but no street-level specificity.
- **Add:**
  - 3–5 named streets (High West Street, Durham Road, Sheriff Hill, Coatsworth Road, Saltwell Road)
  - Reference to The Sage / Gateshead Quays or Saltwell Park (landmarks)
  - Mention of the Tyne crossings for access detail
- **Target word count:** keep at 700–780.

### /areas/sunderland/

- **Issue:** Only 1 named street (Chester Road). Uses SR1–SR6 postcode areas and neighbourhoods but thin on streets.
- **Add:**
  - 4–6 named streets (Chester Road, Hylton Road, Durham Road, Ryhope Road, Queen Alexandra Road, The Promenade in Seaburn)
  - University of Sunderland / Stadium of Light reference (landmark anchors)
  - Specific end-of-tenancy hook for student-heavy streets around Chester Road & Ashbrooke
- **Target word count:** keep at 700–780.

### /areas/washington/

- **Issue:** 0 named streets. Uses village names (Concord, Oxclose, Sulgrave, Fatfield, Albany) but nothing street-level.
- **Add:**
  - 3–5 named streets (Washington Highway, Victoria Road in Concord, The Galleries main arteries, Spout Lane, Biddick Lane)
  - Reference to Washington Galleries shopping centre / Washington Services (landmarks)
  - Note on proximity to Nissan plant / A1(M) access for logistical breadth
- **Target word count:** keep at 720–800.

---

## Coastal cluster — watch, don't rewrite yet

**North Shields ↔ South Shields = 0.789** and **Tynemouth ↔ Wallsend = 0.703** are the highest similarity pairs on the site. They pass today. But if:

- You add more coastal pages (e.g. Jarrow, Hebburn, Seaburn, Seaton Sluice), OR
- You use shared intro/closing copy across coastal pages

…the similarity will climb toward 0.85. **Action:** when you next edit these four pages, deliberately vary opening hooks and service framing. E.g.:

- **North Shields** — lead with ferry-port/commercial-property angle
- **South Shields** — lead with beach/seaside-residential angle
- **Tynemouth** — lead with tourist/short-let/holiday-home angle
- **Wallsend** — lead with Segedunum/industrial-heritage angle

Same service, same prices, distinctly positioned paragraphs.

---

## Schema check

All 15 pages have the following JSON-LD blocks, confirmed:
- `FAQPage` (for FAQ rich snippets)
- `BreadcrumbList` (for sitelink crumbs)
- No per-area `LocalBusiness` schema (homepage has the canonical one — this is correct, don't duplicate)

---

## Inaccessible pages

None. All 15 files present and parseable.

---

## Redirect map (for later, if any page is rewritten as a hub)

No redirects needed today. If you later consolidate Jesmond/Gosforth/Heaton into the homepage:

```
/areas/jesmond/   → /
/areas/gosforth/  → /
/areas/heaton/    → /
```

But **do not implement this yet.** Wait 6 months, review Search Console data, then decide.

---

## Overall verdict

The 15-page strategy is **healthy and defensible** as it stands. You're not running doorway pages. Google's August 2025 spam update targeted sites with template-filled location pages (literally the same text with town name swapped). Your pages pass that test easily — highest similarity is 0.789, most are in the 0.60–0.70 range.

The 4 REWRITE pages are a tune-up, not a crisis. Adding 3–5 named streets and one landmark reference to each will lift them from 0 street mentions to competitive local authority. 1–2 hours of copywriting per page.

Raw extraction data: `/tmp/audit-raw-data.json`
