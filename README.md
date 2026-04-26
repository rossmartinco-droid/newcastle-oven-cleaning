# Newcastle Oven Cleaning

Repo for Ross Smith's specialist oven cleaning business in Newcastle upon Tyne.

## What's here

- **`BRIEF.md`** — the complete strategy and execution roadmap (read this first, every session)
- **`DECISIONS.md`** — log of strategic decisions
- **`state.json`** — single source of truth for task statuses
- **`tracker.html`** — visual task board (reads state.json)
- **`SETUP.md`** — Ross's one-time setup guide
- **`README.md`** — you are here

When Claude Code starts work, it'll add:
- `code/audit-2026-04-25.md` — audit of existing GHL site against new brief
- `code/completion-report.md` — end-of-build report
- `code/log.md` — build/deploy history
- The actual Astro project files (src/, astro.config.mjs, package.json, etc.)

## Workflow model: Maximum delegation

Claude Code reads `BRIEF.md` and executes the full roadmap end-to-end. No per-task check-ins.

When everything is built, Claude Code writes `code/completion-report.md` and stops. Ross then hands the staging URL + completion report to Claude (chat) for one comprehensive review pass. Corrections come back as a single document. Claude Code applies all corrections in one batch.

## Status

🟡 **GBP video verification in review** — submitted 24 Apr 2026, awaiting Google decision (5-14 working days)

🟢 **Building Astro site on staging URL in parallel** — safe per Sterling Sky guidance during verification

📋 **Track progress** in `tracker.html`

## For Claude Code

Read `BRIEF.md` (especially Part 9 — the full execution roadmap) and `DECISIONS.md` first.

Update `state.json` as you complete tasks (atomic per-task updates, see PROTOCOL section in BRIEF.md if it exists, otherwise just write the status object for each task ID).

Don't:
- Touch the GBP profile (in verification — frozen)
- Change DNS or deploy to production domain
- Add anything that costs money
- City-name-swap location pages (use the 80/20 rule with genuinely unique local content)
- Build a separate `/oven-cleaning-newcastle-upon-tyne/` page (homepage IS the hub)

When you're done, write `code/completion-report.md` and tell Ross "done — ready for review."

## For Claude (chat)

You only get involved when Ross asks for a strategic review at the end of the build. Read the completion report, browse the staging URL, produce a single corrections document. That's the deal.

If Ross asks for new strategic research mid-build (e.g. "verify a new SEO claim"), do that — but otherwise stay out of Claude Code's way.
