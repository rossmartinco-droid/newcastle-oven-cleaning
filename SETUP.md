# SETUP.md — One-time setup for Ross

This is what you do once. After this, Claude Code handles everything end-to-end. ~20 minutes total.

---

## Step 1 — Create a GitHub account (5 min, free)

1. Go to **https://github.com/signup**
2. Email: same one you use for Newcastle Oven Cleaning
3. Username: simple, e.g. `newcastleovencleaning` or `ross-newcastle-oven`
4. Strong password
5. Verify email
6. Skip the team/usage tutorial questions

---

## Step 2 — Create the repo (2 min)

1. Top-right of GitHub → **+** → **New repository**
2. Name: `newcastle-oven-cleaning`
3. Description: "Newcastle Oven Cleaning website + business strategy"
4. **Visibility: Private**
5. Tick "Add a README file"
6. Click **Create repository**

---

## Step 3 — Upload the scaffolding files (5 min)

You have a folder with:
- `BRIEF.md` — the full strategy and roadmap (Claude Code reads this first)
- `DECISIONS.md` — log of decisions made
- `state.json` — task tracker data
- `tracker.html` — visual board
- `README.md` — repo front page
- `.gitignore`

Upload all of them via the GitHub web interface:
1. On the repo page → **Add file** → **Upload files**
2. Drag the folder contents into the upload area
3. Commit message: `Initial scaffolding`
4. Commit directly to main
5. Click **Commit changes**

---

## Step 4 — Cloudflare account (5 min)

1. Go to **https://dash.cloudflare.com/sign-up**
2. Same email, strong password
3. Verify email
4. When asked "What would you like to do?" → **"Add a website"**
5. Enter `newcastleovencleaning.co.uk`
6. Cloudflare scans (~60 sec)
7. Choose **Free** plan
8. **STOP HERE.** Do NOT change nameservers. We don't want anything pointing through Cloudflare until your GBP verifies.

---

## Step 5 — Hand off to Claude Code (1 min)

Open your terminal, run Claude Code, and tell it:

> "Clone the repo at https://github.com/<your-username>/newcastle-oven-cleaning into ~/Projects (or wherever you keep code). Read BRIEF.md and DECISIONS.md. Then execute the full roadmap in BRIEF.md Part 9 — start to end, no check-ins. When done, write code/completion-report.md and stop."

Claude Code does the rest. You're free to do other things.

---

## How you check progress

Open `tracker.html` in your browser (your local copy works, or upload it from GitHub). It reads `state.json` from the repo. When Claude Code commits a state update, refresh the page and you'll see it.

If you opened `tracker.html` directly via `file://`, you'll see a yellow warning badge at the bottom right ("Local view only"). To see live state, you need to either:
- Use GitHub's "raw" view of state.json + tracker.html (open both via raw URL)
- Or set up a quick GitHub Pages publish of the repo (free, takes 30 seconds)

Either works. The local view is fine for visualising your tasks — it just doesn't reflect Claude Code's commits in real time.

---

## When Claude Code says "done"

Come back to me (Claude in chat). Hand me:
- The staging URL (e.g. `newcastle-oven-cleaning-staging.pages.dev`)
- A link to the GitHub repo
- A copy/paste of `code/completion-report.md`

I'll do one comprehensive review pass and produce a single corrections document. You give that to Claude Code; it fixes everything in one batch. Then you wait for GBP verification and approve the DNS cutover when ready.

---

That's it. Steps 1-5 are ~20 minutes of clicking. Go.
