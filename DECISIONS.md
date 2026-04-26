# DECISIONS.md

Strategic decisions, dated, append-only. Most recent at top.

If a decision in this log conflicts with `BRIEF.md`, `BRIEF.md` is canonical and should be updated to match the decision. The decision itself stays in this log as a permanent record.

---

## 2026-04-25 — Maximum delegation to Claude Code, single review pass at the end

**Decided by:** Ross
**Affects:** workflow, BRIEF.md §"Workflow decisions"
**Context:** Earlier model had Claude (chat) and Claude Code coordinating per-task via `HANDOFFS.md` and `PROTOCOL.md`. Overhead exceeded value. Ross's stronger model: Claude Code executes the full roadmap end-to-end without per-task check-ins; Claude (chat) reviews the entire output once at the end and produces a single corrections document; Claude Code applies all corrections in one batch.
**Decision:** Maximum delegation. Claude Code builds everything per `BRIEF.md`. When done, writes `code/completion-report.md`. Ross hands the staging URL + completion report to Claude (chat) for one comprehensive review. Corrections come back as one document. Claude Code fixes in one shot.
**Alternatives considered:** Per-task coordination (rejected — overhead). Mid-build checkpoints at 3-page mark (rejected — Ross prefers one final review).
**Open questions:** None.

---

## 2026-04-25 — Drop HANDOFFS.md and PROTOCOL.md

**Decided by:** Ross with claude-chat
**Affects:** repo file list, scaffolding
**Context:** These files existed to support per-task coordination between the two Claudes. Maximum-delegation model makes them redundant.
**Decision:** Removed from the scaffolding zip. If they appear in the repo from earlier setup, they can be deleted.
**Alternatives considered:** Keep them for fallback (rejected — clutter without value).
**Open questions:** None.

---

## 2026-04-25 — Drop Corbridge and Hexham from the location-page list

**Decided by:** claude-chat with Ross approval
**Affects:** BRIEF.md §"Location/service-area pages"
**Context:** Both Corbridge (~22 mi) and Hexham (~22 mi) are over the 20-mile drive radius Ross set. They were originally in the 20-page list as aspirational. Building pages for areas Ross can't service is misleading.
**Decision:** Drop both. Final count: 18 location pages (was 20). Total page count drops from 30 to 28.
**Alternatives considered:** Extend drive radius to 25 miles (rejected — Ross's hard limit).
**Open questions:** When Aga training happens (Phase 12), revisit Corbridge/Hexham — Aga clean economics work over 22 miles in a way standard ovens don't.

---

## 2026-04-25 — Use this repo as the shared workspace

**Decided by:** Ross
**Affects:** entire workflow
**Context:** Manual copy-paste between Claude (chat) and Claude Code was clunky. Ross was acting as relay.
**Decision:** Use a private GitHub repo as the communication and execution substrate. State lives in `state.json`. Strategy lives in `BRIEF.md`. Both Claudes read from the repo. Claude Code writes everything (audit, code, content). Claude (chat) reads when reviewing.
**Alternatives considered:** Status quo (rejected — manual relay), Notion (rejected — Claude Code can't programmatically edit Notion as cleanly).
**Open questions:** None.

---

## 2026-04-25 — Migrate website to Astro + Cloudflare Pages, free tier

**Decided by:** Ross with claude-chat recommendation
**Affects:** website hosting, BRIEF.md §"Tech stack"
**Context:** GHL has read-only API for pages — Claude Code can't programmatically push or update site content. Webflow was considered but costs ~£18/mo. Astro on Cloudflare Pages is free, gives full Claude Code control, and produces best-in-class CWV.
**Decision:** Astro + Cloudflare Pages (free). Build on staging URL until GBP verification completes. Then flip DNS. Domain stays at newcastleovencleaning.co.uk throughout.
**Alternatives considered:** Stay on GHL (rejected — manual paste workflow), Webflow (rejected — paid), WordPress (rejected — overkill, ongoing maintenance).
**Open questions:** None.

---

## 2026-04-25 — 18 unique service-area pages, target affluent/elderly within 20 miles

**Decided by:** Ross
**Affects:** content scope
**Context:** Originally proposed 3 pages, scaled through 9 → 15 → 20 → 18 (after dropping Corbridge/Hexham). The "50-page warning threshold" attributed to Joy Hawkins turned out to be a myth — quality matters, not count. Sterling Sky's actual rule is 80/20 (80%+ similarity acceptable when geographic targeting is clear).
**Decision:** 18 unique location pages, each passing the 80/20 rule. Target affluent and elderly homeowner postcodes within 20 miles of NE4 5NS. Static at launch; enrich with photos and reviews organically as Ross does jobs in each area.
**Alternatives considered:** 3 (over-cautious), 9 (still over-cautious), 15 (defensible but arbitrary), 20 (Corbridge/Hexham over limit).
**Open questions:** None.

---

## 2026-04-25 — Homepage IS the Newcastle hub

**Decided by:** claude-chat with Ross approval
**Affects:** site architecture, BRIEF.md §"The 28 pages"
**Context:** Joy Hawkins's "Diversity Update" (April 2025) demotes a domain in organic search if the same domain also ranks in the local pack for the same query. Building both a homepage AND a separate Newcastle hub page would trigger this.
**Decision:** Homepage `/` is the Newcastle hub. No separate `/oven-cleaning-newcastle-upon-tyne/` page.
**Alternatives considered:** Separate hub page (rejected — Diversity Update risk).
**Open questions:** None.

---

## 2026-04-25 — Show GBP address (60 Brighton Grove)

**Decided by:** Ross with claude-chat recommendation
**Affects:** GBP setup post-verification
**Context:** Whitespark 2026 ranking factors put "address visible" as #7. Sterling Sky's evidence is that hidden SAB addresses can cause Google to revert ranking to an outdated pin location.
**Decision:** Show 60 Brighton Grove on GBP once verification completes.
**Alternatives considered:** Hide (rejected — ranking penalty risk).
**Open questions:** None.

---

## 2026-04-25 — No Aga capability — explicit on-site

**Decided by:** Ross
**Affects:** content
**Context:** Ross can't clean Agas. Aga training is a future expansion lever (Phase 12) but not in v1 scope.
**Decision:** Range cooker page must explicitly state "we don't service Agas" but **do NOT name a specific competitor** as the alternative. Use phrasing inviting customers to call for a recommendation rather than putting a competitor's name permanently on the indexed page. AI search rewards the honesty signal; turns the disclaimer into a customer touchpoint without promoting a competitor.
**Alternatives considered:** Silently exclude (rejected — confusing, leads to refused bookings).
**Open questions:** None.

---

## 2026-04-25 — 20-mile drive radius from NE4 5NS as the absolute service area limit

**Decided by:** Ross
**Affects:** GBP service area, page targeting
**Context:** Ross has a regular hatchback (no van) and operates as a sole trader. Anything beyond 20 miles makes the unit economics break.
**Decision:** Hard 20-mile limit from NE4 5NS. GBP service area reflects this. Page targeting respects this.
**Alternatives considered:** 30 miles (rejected — too far for a sole trader without a van).
**Open questions:** Revisit if Aga training happens (Phase 12) — Aga economics may justify Corbridge/Hexham.

---

## 2026-04-25 — Citations tracked separately, not on this tracker

**Decided by:** Ross
**Affects:** scope of `tracker.html`
**Context:** Ross has an existing localhost citation tracker for managing Tier 1, 2, 3 citation submissions across Bing Places, Apple Business, Foursquare, Trustpilot, Checkatrade, etc.
**Decision:** Citation tasks are removed from this tracker. Strategic context (NAP consistency, schema requirements) stays in `BRIEF.md` because it affects how the website is built.
**Alternatives considered:** Duplicate citation list here (rejected — two sources of truth).
**Open questions:** None.

---

## 2026-04-25 — No SMS / email / Zapier automation in v1

**Decided by:** Ross
**Affects:** scope
**Context:** Operations stack (review request automation, post-job emails, scheduling) was originally in scope but distracts from the SEO + AI discoverability priority.
**Decision:** v1 focuses purely on findability (SEO, AI, citations via Ross's separate tracker). Operations stack is post-v1.
**Alternatives considered:** Build it all in parallel (rejected — capacity).
**Open questions:** None.

---
