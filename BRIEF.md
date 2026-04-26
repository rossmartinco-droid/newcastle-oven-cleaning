# BRIEF.md — Newcastle Oven Cleaning

**The complete strategy and execution roadmap.** Read this top to bottom before doing anything. Every decision is captured here with the reasoning. If you (Claude Code) hit something this brief doesn't cover, default to the most conservative interpretation of the principles below and flag it in your completion report.

---

## Part 1 — Who and what

### The business
- **Trading name:** Newcastle Oven Cleaning
- **Owner:** Ross Smith, sole trader, registered with HMRC
- **Address:** 60 Brighton Grove, Fenham, Newcastle upon Tyne, NE4 5NS, United Kingdom
- **Phone:** 07949 529741
- **Domain:** newcastleovencleaning.co.uk (registered with Namecheap)
- **Insurance:** Simply Business public liability, policy CHBS5491775XB, £1m cover, valid Apr 2026 – Apr 2027
- **Google account:** newcastlehomecleaning@gmail.com (legacy email — predates the rebrand from "Home Cleaning" to "Oven Cleaning". Don't try to change this; it's tied to the GBP listing.)

### What the business does
**Specialist oven cleaning only.** Not general domestic cleaning, not commercial cleaning, not carpet cleaning. The full service list:
- Single oven clean (~£55–80)
- Double oven clean (~£75–100)
- Range cooker clean (~£90–120) — covers Rangemaster, Stoves, Belling, similar; **does NOT cover Aga**
- Hob clean (add-on or standalone)
- Extractor / cooker hood clean (add-on)
- Microwave clean (add-on)

### Hard constraints
- **Cannot clean Agas.** Ross has not been trained on them. The website must explicitly say so on the range cooker page. **Do NOT name a specific competitor as the alternative** — naming Ovenu or any other firm hands them free SEO and indexes a competitor on Ross's own site permanently. Use phrasing along the lines of: *"We don't service Aga cookers. Aga has specific cleaning requirements that need specialist training we haven't undertaken — we want to be upfront rather than do the job poorly. If you'd like a recommendation for an Aga specialist in the area, give us a call and we'll point you in the right direction."* This keeps the AI-search transparency signal, doesn't promote a competitor, and turns the disclaimer into a customer touchpoint (they call → Ross gets to qualify whether they have other ovens too).
- **20-mile drive radius from NE4 5NS.** Anything beyond gets declined. This is a hard limit because Ross drives a regular hatchback (no van), operates as a sole trader with no employees, and the unit economics don't work past 20 miles.
- **Target market:** affluent and elderly homeowners. Not students, not council estates, not budget-end. Houses with double ovens or range cookers, owners who value reliability over price.

### Competitors
Three franchise networks dominate the local market: **Ovenu, Ovenclean, Oven Doctor**. They are all franchises operated by salaried franchisees. Ross's wedge:
- **Independent, not franchise** — Ross is the owner-operator
- **Named, not anonymous** — real face on the site, real address, real story
- **Fenham-local** — actually based in Newcastle, not a franchise territory holder
- **Transparent pricing** — published £ ranges, not "request a quote"
- **Honest about limits** — explicit "we don't do Agas" rather than taking the booking and disappointing

"Caustic-free / eco / biodegradable" is **table stakes** by 2026 — every competitor claims it. It gets mentioned on the site but is NOT the differentiator.

---

## Part 2 — Why this strategy (the research foundations)

The strategy below is grounded in 2026 specialist research. Don't second-guess these core findings:

### The five sources that anchor everything
1. **Whitespark 2026 Local Search Ranking Factors** (Darren Shaw, 47 contributors, 6 Nov 2025) — categorises GBP at ~32% of Local Pack weight; reviews ~20%; on-page ~19%; links ~11%; behaviour ~10%; citations ~7%.
2. **BrightLocal 2026 Local Consumer Review Survey** — 45% of consumers now use AI for local recommendations (up from 6% in 2025, +650%). 47% won't use businesses with <20 reviews. 31% ignore <4.5-star businesses. 80% prefer businesses that respond to every review.
3. **SOCi 2026 Local Visibility Index** — AI visibility is ~30× harder than traditional Google ranking. Brands with response rates <5% and ratings near 3.4 stars are "effectively invisible" in AI recommendations.
4. **Sterling Sky** (Joy Hawkins, Colan Nielsen) — operational guidance on SAB optimisation, video verification, hidden vs visible address, service-area page strategy, the 80/20 rule for unique content per page.
5. **Sterling Sky's Diversity Update** (April 2025) — Google demotes a domain in organic search if the same domain ALSO ranks in the local pack for the same query. This is why our homepage IS the Newcastle hub; we don't build a separate /oven-cleaning-newcastle-upon-tyne/ page.

### What's changed since the original PDFs
A research pass in April 2026 produced 18 corrections to earlier strategy documents. The most important:
- **"Google Guaranteed" was discontinued 7 Nov 2025**, consolidated into "Google Verified" on 20 Oct 2025
- **GBP Q&A is dead** (API retired 3 Nov 2025, public section retired 3 Dec 2025), replaced by Gemini-powered "Ask Maps" launched 12 Mar 2026
- **Bing Places relaunched at bing.com/forbusiness** on 3 Oct 2025; Bing Webmaster Tools gained an AI Performance report in Feb 2026 (the only free first-party AI citation data available)
- **Apple Business launched 14 April 2026** — claim the Maps place card
- **March 2026 core update** (27 Mar 2026) penalised thin AI-generated service-area pages with city-name swaps
- **The "50-page warning threshold" attributed to Joy Hawkins is a myth** — quality matters, not count
- **Hidden SAB addresses can hurt rankings** — 2026 Whitespark evidence suggests showing the address is better than hiding it
- **UK LSAs are NOT viable for sole-trader oven cleaners** — no dedicated UK oven-cleaning category yet, and LSA requires Companies House or VAT registration. Park this.
- **The "Conor Treacy 90% similarity rule" couldn't be independently verified.** Sterling Sky's documented rule is **80/20** (80%+ similarity acceptable when geographic targeting is clear). We use the 80/20 rule.

---

## Part 3 — The decisions (already made, don't relitigate)

These were deliberated and settled. If you find yourself wanting to reopen one, write it in your completion report instead.

### Strategy decisions
1. **18 service-area pages** (was originally 20; Corbridge and Hexham dropped as both are 22 miles, over the 20-mile limit)
2. **Homepage = Newcastle hub** — no separate /oven-cleaning-newcastle-upon-tyne/ page (Diversity Update penalty)
3. **Show GBP address (60 Brighton Grove)** once verified — don't hide. Whitespark 2026 evidence supports visible
4. **Aga capability stays out of scope.** Aga training is a future expansion lever (worth £20k+/yr incremental turnover from Corbridge/Hexham/Morpeth/Darras Hall) but it's a Tier 4 item, not v1
5. **20-mile drive radius from NE4 5NS** as the absolute service area limit
6. **Citations tracked separately** in Ross's existing localhost:8080 citation tracker — not on this tracker
7. **No SMS/email/Zapier automation in v1** — focus is purely on findability (SEO + AI discoverability)

### Tech decisions
8. **Migrate website from GHL to Astro on Cloudflare Pages** (free tier)
9. **Build on staging URL until GBP verification completes**, then flip DNS
10. **Domain stays at newcastleovencleaning.co.uk throughout** — only the underlying platform changes
11. **GitHub free plan, private repo** — Ross's preference
12. **Free tier only** for v1 — Cloudflare Pages, GitHub, Astro all free; nothing paid without explicit approval

### Workflow decisions
13. **Maximum delegation to Claude Code.** Ross hands off the full roadmap; Claude Code executes end-to-end without per-task check-ins. Strategic review happens once, after Claude Code reports completion.
14. **Claude (chat) reviews only at the end.** No mid-build coordination. After Claude Code completes everything, Ross gives the staging URL + completion report to Claude (chat) for one comprehensive review pass. Corrections come back in one batch; Claude Code fixes in one shot.
15. **Single source of truth = the GitHub repo.** state.json holds task statuses; tracker.html visualises them; BRIEF.md (this file) holds strategy.

---

## Part 4 — The 28 pages

### Page count breakdown
- **1** homepage (also the Newcastle hub)
- **4** supporting pages: About, Contact, Pricing, Before/After
- **5** service variant pages
- **18** location/service-area pages

**Total: 28 pages.**

### URL structure

#### Homepage
- `/` — Newcastle hub. Do NOT also build `/oven-cleaning-newcastle-upon-tyne/`.

#### Supporting pages
- `/about/` — Fenham-local angle, named sole trader, Ross's story, photo, non-Aga honesty statement
- `/contact/` — phone, hours, service areas list, contact form
- `/pricing/` — transparent £ ranges (NOT "from £X" — specific bands)
- `/before-and-after/` — gallery template, area-tagged, ready for photos as Ross does jobs

#### Service variant pages (`/{service}-newcastle/`)
- `/single-oven-cleaning-newcastle/`
- `/double-oven-cleaning-newcastle/`
- `/range-cooker-cleaning-newcastle/` — **must explicitly state we don't service Agas (see Hard constraints in Part 1 for exact phrasing — do NOT name a competitor)**
- `/hob-and-extractor-cleaning-newcastle/`
- `/microwave-cleaning-newcastle/` (typically positioned as add-on)

#### Location/service-area pages (`/oven-cleaning-{slug}/`)
Priority order (build in this sequence — these are the affluent/elderly postcodes within the 20-mile radius):

1. `/oven-cleaning-jesmond/` — Victorian terraces, older homeowners, mix of academic + professional
2. `/oven-cleaning-gosforth/` — affluent suburb, family demographic, larger ovens
3. `/oven-cleaning-high-heaton/` — affluent end of Heaton specifically (NOT generic Heaton)
4. `/oven-cleaning-newcastle-great-park/` — newer high-end development north of Gosforth
5. `/oven-cleaning-south-gosforth/` — established residential, retirees + young families
6. `/oven-cleaning-ponteland/` (~10 miles) — wealthy commuter village
7. `/oven-cleaning-darras-hall/` (~10 miles) — premium positioning, separate from Ponteland; Premier League footballer territory
8. `/oven-cleaning-tynemouth/` (~12 miles) — coastal affluent, older demographic, larger houses
9. `/oven-cleaning-whitley-bay/` (~13 miles) — focus Monkseaton/Marden end (the affluent part)
10. `/oven-cleaning-cullercoats/` (~12 miles) — small but wealthy coastal pocket
11. `/oven-cleaning-morpeth/` (16 miles, within range) — market town, older homeowners
12. `/oven-cleaning-low-fell/` — Gateshead's affluent pocket only (NOT Gateshead generic)
13. `/oven-cleaning-wylam/`
14. `/oven-cleaning-ryton/`
15. `/oven-cleaning-benton/` (or Forest Hall — pick whichever existing GHL page best matches)
16. `/oven-cleaning-wideopen/`
17. `/oven-cleaning-killingworth/`
18. `/oven-cleaning-prudhoe/`

### Areas EXPLICITLY EXCLUDED — do not build pages, do not include in GBP service areas
- Fenham, Arthurs Hill (Ross's home — wrong demographic, mostly student lets)
- West Denton, Blakelaw, Kenton, Cowgate (council stock)
- Byker, Walker, Wallsend (working-class east end)
- Scotswood, Benwell (deprived)
- Newburn, Throckley (mixed, lower priority)
- Most of Gateshead (only Low Fell qualifies)
- South Shields, Jarrow, Hebburn (not target market)
- Sunderland, Durham (separate markets, deprioritised)
- Corbridge, Hexham (over 20-mile drive limit)

---

## Part 5 — Content rules per page

### The Sterling Sky 80/20 rule
Each location page can have ~80% templated content (service offerings, pricing, FAQ structure, schema) and **must have at least 20% genuinely unique content** about that specific area. "Unique" means:
- Real local landmarks / streets / neighbourhoods named
- Demographic notes (e.g. "many Jesmond Victorian terraces have original ovens needing extra care")
- Demand patterns specific to the area (e.g. end-of-tenancy turnover in student areas, pre-Christmas family entertaining in affluent suburbs)
- Local price/service notes if genuinely different (e.g. "Tynemouth coastal salt air can pit oven elements faster")

**Do NOT** city-name-swap. Do NOT generate generic boilerplate. Each page must pass a "navigation test": with the town name removed, could a stranger tell which town this page is for? If no, rewrite.

### Tone
- **Calm, professional, reassuring.** Affluent and elderly readers are the audience.
- **Not chirpy. Not cheeky tradesman. Not deals/discounts/urgency.**
- **Not "best in Newcastle" / "#1 oven cleaner" superlatives.** Flag for suspension on GBP and read as low-trust on-site.
- **Specific over vague.** "I've been cleaning ovens in Newcastle for [X] years" beats "experienced professional service."
- **Honest about limits.** The non-Aga statement is a feature, not a bug — AI search rewards transparency signals.

### Schema (JSON-LD on every page)
Always render:
- `Organization` (root identity)
- `LocalBusiness` (with address, telephone, url, openingHoursSpecification, geo lat/long, areaServed)
- `BreadcrumbList`

Service variant pages additionally render:
- `Service` with `provider` ref to LocalBusiness, `areaServed`, `offers` (price ranges)
- `FAQPage` (3–5 service-specific Qs)

Location pages additionally render:
- `Service` with `areaServed` set to the named area
- `FAQPage` (3 area-specific Qs minimum)

Homepage additionally renders:
- `Person` for Ross Smith (with `sameAs` array linking to social profiles)
- `WebSite` with optional `SearchAction`

About page additionally renders:
- Full `Person` for Ross Smith with `sameAs` array

**On `sameAs` when no social profiles exist yet:** render the property as an empty array (`"sameAs": []`). This keeps the schema valid and makes population trivial later — Ross just adds URLs to the array as Facebook/Instagram/LinkedIn profiles get created. Don't omit the property entirely; that means refactoring the schema templates later instead of editing one line.

**Never render:**
- `AggregateRating` populated from Google reviews not visible on the page (structured-data spam penalty)
- `Review` schema for testimonials we can't independently verify

Validate every page via Google Rich Results Test before committing.

---

## Part 6 — NAP, locked exactly

Use these strings verbatim everywhere. Identical across site, GBP, Bing Places, Apple Business, Foursquare, Trustpilot, Checkatrade, every citation.

- **Name:** `Newcastle Oven Cleaning`
- **Address:** `60 Brighton Grove, Fenham, Newcastle upon Tyne, NE4 5NS`
- **Phone:** `07949 529741` (UK national format. International: `+44 7949 529741`)
- **Website:** `https://newcastleovencleaning.co.uk` (no trailing slash, https not http)
- **Owner / sole trader name:** `Ross Smith trading as Newcastle Oven Cleaning`

Schema must use these strings verbatim. No abbreviations. No casual variants.

---

## Part 7 — Anti-patterns (do NOT do these)

Each one is a real risk in 2026, documented in the source research:

- **No fake / bought / incentivised reviews.** Illegal under UK DMCCA 2025. Against Google/Trustpilot TOS. CMA fines possible.
- **No GBP business name keyword stuffing.** Name = "Newcastle Oven Cleaning" exactly. No "Newcastle Oven Cleaning - Best Oven Cleaner Newcastle" or similar. Suspension risk.
- **No virtual office / coworking / mailbox addresses on GBP.** Immediate SAB suspension.
- **No `AggregateRating` schema with third-party reviews not visible on the page.** Structured-data spam penalty.
- **No exact-match anchor text from old forum/blog comments.** Devalued by August 2025 spam update.
- **No mass citations on low-DA UK directories** (TrustATrader, Opendi, Approved Business, BusinessMagnet, n49 UK, Yalwa UK, Tuugo UK, Wampit, FinderMaster). Devalued.
- **No GBP Q&A seeding.** Feature retired Nov/Dec 2025. Use FAQ schema on-site instead.
- **No AI-generated thin pages with city-name swap only.** March 2026 core update penalty.
- **No blanket-blocking AI crawlers in robots.txt.** Allow them all (list below).
- **No editing the GBP profile while verification is pending.** Currently in verification — frozen.
- **No deploying to the production domain until GBP verification completes** AND Ross has approved go-live.

---

## Part 8 — Tech stack and conventions

### Stack
- **Astro** (latest stable). Static output preferred. SSR only where strictly needed (none in v1).
- **Cloudflare Pages** (free tier) for hosting. GitHub auto-deploy on push to `main`. Staging on `dev` branch.
- **Cloudflare DNS.** Domain stays at `newcastleovencleaning.co.uk` throughout. Only the underlying platform changes.
- **GHL stays live until DNS flip.** Verification must complete before flip.
- **No JavaScript frameworks beyond what Astro ships with.** No React unless a specific component genuinely needs it. Keep bundle small for Core Web Vitals.

### Performance targets (must pass on every page)
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- Total page weight < 500KB on initial paint

### Image rules
- WebP format (Astro `<Image>` component handles conversion)
- Lazy-loaded below the fold
- Alt text required on every image — descriptive, oven-context-specific, not "oven cleaning Newcastle" repeated as keyword stuffing

### robots.txt — full allowlist
```
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: FacebookBot
Allow: /

Sitemap: https://newcastleovencleaning.co.uk/sitemap-index.xml
```

### llms.txt at root
Publish a basic `/llms.txt` describing the business and key pages. Mueller has said no AI currently uses it, but cost is near-zero.

### Folder structure
```
src/
├── pages/
│   ├── index.astro                   (homepage = Newcastle hub)
│   ├── about.astro
│   ├── contact.astro
│   ├── pricing.astro
│   ├── before-and-after.astro
│   ├── single-oven-cleaning-newcastle.astro
│   ├── double-oven-cleaning-newcastle.astro
│   ├── range-cooker-cleaning-newcastle.astro
│   ├── hob-and-extractor-cleaning-newcastle.astro
│   ├── microwave-cleaning-newcastle.astro
│   └── oven-cleaning-{slug}.astro    (× 18)
├── content/
│   ├── service-areas/                (markdown for each location page)
│   └── services/                     (markdown for each service variant)
├── components/
│   ├── Layout.astro
│   ├── Hero.astro
│   ├── ServiceList.astro
│   ├── PriceTable.astro
│   ├── BeforeAfter.astro
│   ├── FAQ.astro
│   ├── Testimonial.astro
│   ├── ContactCTA.astro
│   └── schema/
│       ├── LocalBusiness.astro
│       ├── Service.astro
│       └── FAQPage.astro
├── layouts/
│   └── BaseLayout.astro
├── styles/
│   └── global.css
└── lib/
    └── nap.ts                        (single source of NAP strings)
```

---

## Part 9 — The full execution roadmap (start to end)

This is what happens, in order, from "today" to "everything live."

### Phase 0 — Today (parallel, currently in progress)
- **Ross**: GBP video verification submitted 24 Apr 2026, awaiting Google decision (5–14 working days)
- **Ross**: Setting up GitHub account (private, free)
- **Ross**: Creating GitHub repo `newcastle-oven-cleaning`
- **Ross**: Uploading scaffolding files (BRIEF.md, tracker.html, state.json, README.md, SETUP.md, .gitignore, DECISIONS.md) to the repo
- **Ross**: Setting up Cloudflare account (NOT changing nameservers — just account creation)
- **Ross**: Hands repo URL to Claude Code, says "go"

### Phase 1 — Audit (Claude Code, ~1 hour)
- Clone the repo
- Read BRIEF.md and DECISIONS.md
- **Ingest any prior audits** Claude Code has already produced for this domain (typically located under Claude Code's local working directory at `~/Documents/Claude Coding/newcastle-oven-cleaning/audit-report-v*.md`). Mark them superseded by adding this header at the top of each prior audit file:
  ```
  > ⚠️ SUPERSEDED by audit-2026-04-25.md (reconciled against BRIEF.md, max-delegation model). Kept for historical reference.
  ```
- Re-audit existing newcastleovencleaning.co.uk against the new brief, using prior audit findings as input where useful (saves time vs starting from zero)
- Output `code/audit-2026-04-25.md` with:
  - A "supersedes" line at top noting which prior audits this replaces
  - A short diff: what changed in scope from the latest prior audit (e.g. "expanded from 15 → 18 location pages, added Wylam/Ryton/Prudhoe, dropped Corbridge/Hexham, tightened demographic exclusions")
  - Keep/rewrite/redirect/gap mapping for every existing GHL page against the 28 target pages in BRIEF.md
- Commit and push

### Phase 2 — Astro project setup (Claude Code, ~2-3 hours)
- Spin up Astro project in the repo
- Set up Cloudflare Pages connection to the repo's `dev` branch (staging) — get a URL like `newcastle-oven-cleaning-staging.pages.dev`
- Set up production branch config (no DNS flip yet — production target stays unconfigured until GBP verifies)
- Build folder structure per BRIEF.md Part 8
- Set up `lib/nap.ts` as the single source of NAP strings
- Build `BaseLayout.astro` and core components
- Verify Cloudflare Pages auto-deploys on every push
- Update state.json: `k-t1-001` through `k-t1-004` done

### Phase 3 — Content build (Claude Code, ~10-15 hours of work)
Build all 28 pages directly. No mid-build check-ins with Ross or Claude (chat).

For each page:
1. Write content following the tone rules in Part 5
2. Apply 80/20 rule for location pages (genuinely unique local content)
3. Inject all required schema (Part 5)
4. Add WebP-optimised images with proper alt text
5. Validate via Google Rich Results Test
6. Commit and push (auto-deploys to staging URL)

Build order:
1. Homepage (the Newcastle hub)
2. About + Contact + Pricing + Before/After
3. 5 service variant pages
4. 18 location pages (in priority order from Part 4)

Update state.json as each page completes.

### Phase 4 — Technical SEO (Claude Code, ~2-3 hours)
- robots.txt (full allowlist per Part 8)
- llms.txt at root
- sitemap.xml auto-generated by Astro
- 301 redirect map from old GHL URLs to new Astro URLs (saved as Cloudflare Bulk Redirects config, ready to deploy at cutover)
- CWV verification on all pages: LCP <2.5s, INP <200ms, CLS <0.1
- Schema validation pass (every page through Rich Results Test)
- NAP consistency audit across all pages
- Internal linking audit (homepage → service variants → location pages structure)
- Alt text completeness check
- Update state.json: Tier 2 + Tier 3 technical tasks done

### Phase 5 — Completion report (Claude Code, ~30 min)
Write `code/completion-report.md` covering:
- Page-by-page summary of what got built
- Schema validation results (link to Rich Results Test for each page)
- CWV results (PageSpeed Insights for each page)
- 80/20 uniqueness check across the 18 location pages
- Anything skipped or judgement-called
- Anything Ross needs to decide before go-live
- Cutover checklist (what happens when GBP verifies)

Tell Ross "done — ready for review."

### Phase 6 — Strategic review (Claude chat, ~1-2 hours)
Ross gives Claude (chat):
- The staging URL
- Link to `code/completion-report.md`
- Link to `code/audit-2026-04-25.md`
- Current `state.json`

Claude (chat) does ONE comprehensive review pass:
- Browse every page on the staging URL
- Check tone, positioning, accuracy
- Verify the 80/20 rule held across location pages
- Check schema correctness
- Check the no-Aga disclosure on the range cooker page
- Check the homepage works as a Newcastle hub (no separate hub page)
- Identify any strategic drift

Output: **a single corrections markdown file** at `code/corrections-YYYY-MM-DD.md`, structured by severity:

```
## Critical (fix before considering go-live)
- [page or area] — [problem] — [suggested fix]

## Strategic (drift from BRIEF, fix in this batch)
- ...

## Polish (small improvements, fix while you're in there)
- ...

## Notes / non-issues (things noticed but not problems)
- ...
```

Claude Code triages by section: Critical first, Polish last. Notes are FYI only — no action required.

### Phase 7 — Corrections (Claude Code, ~1-2 hours)
Read `code/corrections-YYYY-MM-DD.md`. Apply all fixes in Critical → Strategic → Polish order in one batch. Skip the Notes section unless it contains anything genuinely problematic. Push. Tell Ross "fixes done."

### Phase 8 — Wait for GBP verification
- If verification has completed before this point: skip ahead to Phase 9
- If not: do nothing on the staging site, do nothing on GBP, just wait

### Phase 9 — GBP optimisation (Ross, ~3-4 hours, post-verification)
- Set primary category = "House cleaning service"
- Add secondary categories: Cleaner, Commercial cleaning service (max 2 secondaries)
- Show address (60 Brighton Grove)
- Set service area to 20-mile radius from NE4 5NS (cover all 18 location-page towns + add a few for surrounding pickup)
- Set business hours (Mon–Sat 08:00–18:00 typical)
- Write GBP description (750 chars)
- Populate Services section with full price list
- Upload 25 starter photos
- Generate reviewable link (g.page/r/...)
- Pin placement check (drag to 60 Brighton Grove if it's on road centre)

### Phase 10 — DNS cutover (Claude Code, ~1 hour, after Ross says "go")
- Ross changes Namecheap nameservers to Cloudflare
- Cloudflare DNS now serves newcastleovencleaning.co.uk
- Production deploy of Astro site goes live
- Cloudflare Bulk Redirects activate (301s from old GHL URLs)
- Verify the live domain serves the new Astro site
- Submit sitemap to Google Search Console
- Submit sitemap to Bing Webmaster Tools
- Run final CWV pass on production URLs
- Update state.json: Phase 10 tasks done

### Phase 11 — Post-launch (ongoing)
This is where the daily/weekly/monthly recurring tasks in tracker.html kick in. See "Recurring tasks" section in tracker.html.

Highest priorities:
- **Review velocity**: 5–10 new Google reviews/month, 100% response rate within 24–48h
- **Cross 20 reviews ASAP** (BrightLocal cliff: 47% won't use businesses with <20)
- **Maintain 4.5+ star rating** (BrightLocal: 31% ignore <4.5)
- **Weekly photo uploads to GBP** (3–5 fresh photos)
- **Letting agent + estate agent B2B outreach** (end-of-tenancy + pre-sale verticals — huge recurring revenue)

### Phase 12 — Future (Tier 4, post-90-days)
- **Aga training** (£300–500 course, ~£20k/yr incremental turnover)
- **Apply for UK LSAs once Google adds an oven-cleaning category**
- **Consider Ltd Co conversion** at £30k+ turnover
- **MTD ITSA-compliant accounting** if income exceeds £50k

---

## Part 10 — The repo and its files (orientation)

When you (Claude Code) clone the repo, here's what you'll find:

| File | Owner | Purpose |
|---|---|---|
| `BRIEF.md` (this file) | Claude (chat) authors | Strategy + execution roadmap. Source of truth. |
| `DECISIONS.md` | Append-only, both edit | Log of strategic decisions (don't relitigate) |
| `state.json` | Both update | Single source of truth for task statuses |
| `tracker.html` | Visualises state.json | Open in browser to see progress |
| `README.md` | Static | Front page of the repo |
| `.gitignore` | Static | Standard ignores |
| `claude/draft-*.md` | Claude (chat) writes (not used in maximum-delegation model) | Optional content drafts |
| `code/audit-*.md` | Claude Code writes | Audit findings |
| `code/completion-report.md` | Claude Code writes | End-of-build report |
| `code/log.md` | Claude Code writes | Build/deploy history |
| Astro project files | Claude Code creates | The website itself |

**Files dropped from the original scaffolding:**
- `HANDOFFS.md` (was for back-and-forth communication; not needed in maximum-delegation model)
- `PROTOCOL.md` (was for back-and-forth coordination; not needed)
- `SETUP.md` (one-time use; can be deleted from the repo after Ross is set up)

If you find HANDOFFS.md or PROTOCOL.md in the repo, ignore them and feel free to delete.

---

## Part 11 — Other systems Ross runs (context for Claude Code)

Things outside this repo that affect strategy:

### Citations tracker (separate site)
Ross has a localhost-based citation tracker (his own internal tool) for managing submissions to:
- **Tier 1 citations**: Bing Places, Apple Business, Foursquare, Trustpilot, Nextdoor, Facebook, Instagram, YouTube, LinkedIn, Checkatrade
- **Tier 2 citations**: Yell (free), Thomson Local, Yelp UK, 192.com, FreeIndex, BICSc, Information Now Newcastle, ChronicleLive directory
- **Tier 3 (minimal)**: Hotfrog UK, Brownbook, Cylex UK, etc.
- **Removed/excluded**: TrustATrader, LocalLife, BusinessMagnet, Opendi UK, Approved Business, Tipped, iGlobal, n49 UK, Yalwa UK, Tuugo UK, Wampit, FinderMaster UK

These citations live outside this tracker. Ross handles them in his own time. **What matters for the website**:
- NAP consistency across all citations (use the locked NAP strings in Part 6)
- Schema accurately reflects business identity (so AI engines see one consistent entity)

### Tracker.html (in this repo)
This is the visual board Ross uses to see progress. It reads `state.json` and shows tasks grouped by tier and actor.

When you (Claude Code) update `state.json`, Ross sees the change next time he opens tracker.html in his browser.

### GHL site (still live)
The current website is on GHL. It stays live until DNS flips post-verification. **Don't touch it.** Don't try to log in to GHL. Don't try to scrape it for content (use the audit findings from Phase 1 instead). The cutover is handled via DNS change, not via deleting the GHL site.

### Estimator app (Ross uses, mentioned for context)
Ross has an estimator app where customers submit details for quotes. It captures: name, area, oven type, etc. Future integration could feed a "recent work" widget on service-area pages (showing real recent jobs by area) — but this is post-v1.

### Insurance certificate (already have)
Simply Business cert (CHBS5491775XB) is the proof-of-business document. PDF is held by Ross. Used in GBP video verification. Not needed for the website itself.

### Domain registrar
Domain is at Namecheap. Cloudflare will handle DNS once Ross changes Namecheap nameservers (Phase 10). Until then, Namecheap manages DNS for the live GHL site.

---

## Part 12 — When in doubt

- **Ross is busy.** Don't ask him things this brief covers.
- **Default to the most conservative interpretation** of these rules. Better to under-build a feature than break something.
- **The GBP is in verification.** Frozen. Don't touch it. Even adjacent things (NAP changes on the website) need to be consistent with what Google has on file.
- **If you genuinely hit a blocker** that requires a real decision: stop, document the decision point clearly in your completion report, and continue with the rest of the work. Don't wait for Ross.
- **Stay on free tiers.** Don't add anything that costs money. If something genuinely requires payment to proceed, document it and stop.

---

## Part 13 — Ross's checklist (what Ross does, no Claude can do)

For full transparency, here's what's on Ross's plate that no Claude can do:

### Now (during GBP verification)
- Set up GitHub account (free, private repo)
- Create the `newcastle-oven-cleaning` repo
- Upload the scaffolding files (BRIEF.md, tracker.html, state.json, README.md, SETUP.md, .gitignore, DECISIONS.md) to the repo
- Set up Cloudflare account (do NOT change nameservers yet)
- Tell Claude Code the repo URL and say "go"

### Once GBP verifies
- Optimise GBP per Phase 9 (~3-4 hours)
- Approve DNS cutover when ready
- Change Namecheap nameservers to Cloudflare (this triggers Phase 10)

### Ongoing (post-launch)
- Take before/after photos every job
- Ask for reviews verbally + send reviewable link via text
- Respond to reviews within 24–48h
- Upload 3–5 fresh photos to GBP weekly
- Letting agent + estate agent B2B outreach
- Reddit participation in r/NewcastleUponTyne (3+ months of authentic comments before any self-promotion)
- Apply to BICSc, Checkatrade
- Claim Bing Places, Apple Business, Foursquare, Trustpilot, etc.

---

**End of brief.**

This is the complete strategy and execution roadmap. Read end-to-end. Apply consistently. When everything is built, write the completion report and stop.

Ross will then hand off to Claude (chat) for the strategic review. Corrections will come back as a single document. Apply corrections in one batch. Then everything is ready for go-live as soon as GBP verifies.
