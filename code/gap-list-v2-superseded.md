> ⚠️ SUPERSEDED by code/audit-2026-04-26.md (reconciled against BRIEF.md, max-delegation model). Kept for historical reference.

# Gap list — target URLs that need building from scratch

10 target URLs have no existing page on the site. These cover the affluent/elderly market Ross actually wants to serve, and currently have **zero coverage**. The existing 15 pages are mostly targeting the wrong postcodes.

---

## Priority 0 — build first (highest-ROI target market)

### 1. `/oven-cleaning-newcastle-upon-tyne/` — **hub**
- **Option to skip:** per recommendation in audit-report-v2.md, use the homepage `/` as the Newcastle hub instead of building this URL separately. Redirect all deletes to `/`.
- **If built anyway:** should be a broad Newcastle overview page covering the whole postcode footprint (NE1–NE7), linking out to every sub-area page.

### 2. `/oven-cleaning-ponteland/`
- **Why:** affluent commuter belt (~9mi NW of Fenham). High range-cooker density. Under-served by competitors.
- **Key hooks:** Darras Hall boundary, Broadway West, Northumberland Avenue, The Fox & Hounds landmark, St Mary's Church.
- **Demographic:** retired professionals, 1970s–80s detached family homes, Rangemaster/Stoves/Neff common.
- **Word count target:** 750–900.

### 3. `/oven-cleaning-darras-hall/`
- **Why:** single highest-income postcode in the North East. Premium-ticket range cooker jobs.
- **Key hooks:** Western Way, The Runway, Middle Drive, Broadway, Darras Hall Estate as a residents' association.
- **Demographic:** very high disposable income, 1960s–2000s executive homes, AGA/Lacanche/Miele common (note: Ross doesn't do AGA — explicit "we don't service Agas" line required).
- **Word count target:** 800–1000 (premium market = longer, more considered copy).

---

## Priority 1 — build within 4 weeks

### 4. `/oven-cleaning-morpeth/`
- **Why:** 16mi, in range, affluent market town, low competition.
- **Key hooks:** Bridge Street, Newgate Street, Oldgate, Morpeth Clock Tower, Carlisle Park.
- **Demographic:** retirees, market-town homeowners.
- **Word count target:** 700–850.

### 5. `/oven-cleaning-newcastle-great-park/`
- **Why:** new-build affluent estate ~4mi, high-income demographic, under-served.
- **Key hooks:** The Spinney, Kingsmere, Edith Place, Sage Close, near Tesco Extra.
- **Demographic:** professionals, 2000s–2020s new-builds, typically double ovens + induction hobs + extractors.
- **Word count target:** 700–850.

### 6. `/oven-cleaning-low-fell/`
- **Why:** ONLY Gateshead postcode worth targeting. Affluent pocket within a broadly mixed town.
- **Key hooks:** Durham Road, Belle Vue Bank, Saltwell Park boundary, Eighton Banks, Chowdene Bank.
- **Demographic:** long-term homeowners, detached/semi family homes.
- **Word count target:** 700–850.

---

## Priority 2 — build over 4–8 weeks

### 7. `/oven-cleaning-south-gosforth/`
- **Why:** sister area to Gosforth, differentiated enough to be its own page.
- **Key hooks:** Station Road, Church Road, Haddricks Mill Road, South Gosforth Metro.
- **Demographic:** Victorian/Edwardian terraces, young professionals and families.
- **Word count target:** 650–800.

### 8. `/oven-cleaning-cullercoats/`
- **Why:** coastal affluent, between Tynemouth and Whitley Bay.
- **Key hooks:** Beverley Terrace, John Street, Front Street, Cullercoats Bay.
- **Demographic:** coastal retirees, second-home owners, fishing-village cottages + newer semis.
- **Word count target:** 650–800.

### 9. `/oven-cleaning-benton/` *(or `/oven-cleaning-forest-hall/` — pick by search volume)*
- **Why:** established residential, elderly homeowners.
- **Key hooks:** Station Road, Front Street Benton, Church Road, Forest Hall shops.
- **Demographic:** long-term residents, 1950s–70s semis.
- **Word count target:** 650–800.
- **Note:** Benton and Forest Hall are adjacent — decide which URL to build based on which has stronger local search volume. Don't build both.

### 10. `/oven-cleaning-wideopen/` *(or `/oven-cleaning-killingworth/` — pick by search volume)*
- **Why:** established residential north of Gosforth, target demographic.
- **Key hooks:** Great North Road, Brunton Lane, Wideopen High School, Killingworth Lake.
- **Demographic:** 1970s–80s family estates, older homeowners.
- **Word count target:** 650–800.
- **Note:** same as Benton/Forest Hall — build whichever has stronger search volume.

---

## Build process

Each page should follow the existing `_page_template.py` pattern so the CSS + schema + polish layer are consistent. Each new page must:

1. Have FAQPage + BreadcrumbList JSON-LD schema.
2. Contain 3–5 named streets with local knowledge.
3. Reference 1 landmark.
4. Cite a property-type / demographic hook specific to that area.
5. **Explicitly NOT mention Aga cleaning as a service.** If referencing high-end ranges, list: Rangemaster, Stoves, Belling, Neff, Bosch, Smeg, Lacanche — no Aga.
6. Word count 650–1000 (bigger for P0 pages).
7. Use the new URL structure `/oven-cleaning-[town]/`, not `/areas/[town]/`.
