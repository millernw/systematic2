# Prompt 0: the prerender

**Run this before anything in `07-restructure.md`.** It fixes a pipeline, not a page. Once
the pipeline is right, every later deploy self-heals; if you leave it broken, Prompts A
through C will each ship a homepage that crawlers never see.

## What is wrong

`gosystematic.com` serves a **prerendered HTML snapshot** to clients it classifies as bots,
and the live React SPA to real browsers. That is a legitimate and normal SEO technique. The
problem is that **the snapshots are stale.** They are from the pre-round-one build.

Verified 2026-08-19:

```bash
curl -s https://gosystematic.com | grep -o "Not a Gamble"
```

The document served for `/` is a complete copy of the old site. It carries:

| In the served HTML | Rule it breaks |
|---|---|
| "Marketing should be a **System, Not a Gamble**" | Retired positioning |
| **Calibrate** in the offer ladder | The retired name. `Calibration` must not appear in rendered output |
| **Signal+** as a public tier | Signal+ appears in exactly four places and this is not one |
| "Measurable ROI", "leads, calls, and revenue" | **Rule 2**, claims about results |
| "Book a free discovery call", "SCHEDULE A DISCOVERY CALL" | **Rule 3**, and the Scorecard is the only lead capture |
| No price anywhere | **Rule 3**, every price is published |

Nine rule-violating strings, in the version that Google, Facebook, LinkedIn, iMessage and
Slack all read. The baked `<title>`, `<meta name="description">` and every `og:` tag are the
old ones, so **every link anyone shares previews the old pitch.**

Three rounds of review missed this because it is invisible from a browser. `spec-check.js`
runs after hydration, so every check in it is green on a page whose served document breaks
four rules. That is not a bug in the check; it is a thing that check structurally cannot see.

## What else the snapshots get wrong

- `/`, `/about`, `/work` and `/signal` have **stale** snapshots.
- `/build`, `/diagnostic`, `/components` and `/signal-plus` have **no** snapshot, so they
  fall back to a generic title. Four routes serve the same `<title>`.
- `/signal` has a snapshot for a route that now redirects, which is why it looks like a live
  page to anything that does not run JavaScript.

## Paste this

```
Read docs/00-START-HERE.md and AGENTS.md first. Do not change any page content in this
task. This is an infrastructure fix.

THE PROBLEM. This site serves a prerendered HTML snapshot to non-browser clients and the
live SPA to browsers. The snapshots are stale: they are from a build that predates the
current offer entirely. Reproduce it:

  curl -s https://gosystematic.com | grep -o "Not a Gamble"

That string is from a version of this site that no longer exists. The served document also
contains "Calibrate", "Signal+", "Measurable ROI", "leads, calls, and revenue", and "Book a
free discovery call". None of those appear in the site a browser renders. Google, and every
link preview on every platform, reads the stale one.

STEP 1, DIAGNOSE. Do not write a fix yet. Tell me:
  a. What generates these snapshots. A hosting-platform feature, a Vite plugin, a
     prerender service, a Cloudflare Worker, or something else. Name it.
  b. When it runs. On deploy, on a schedule, on demand, or once, long ago.
  c. Why /build, /diagnostic, /components and /signal-plus have no snapshot of their own
     while /, /about, /work and /signal do.
  d. Where the route list it prerenders is configured.

STEP 2, FIX THE PIPELINE. Once I approve the diagnosis:
  - Prerendering must regenerate on EVERY deploy. A snapshot that is generated once and
    never refreshed is the entire bug and it will come back the moment we ship Prompt C.
  - Every published route gets its own snapshot: /, /about, /work, /build, /diagnostic,
    /components, /signal-plus. Each with its own title and meta description, the ones the
    app already sets. Do not hand-write them into a static template.
  - Purge the existing stale snapshots. A correct generator plus a cached old artifact is
    still a broken site.
  - The snapshot for a route must match what a browser renders at that route. If they can
    disagree, the setup is wrong.

WHAT NOT TO DO:
  - Do not fix this by hand-editing meta tags into index.html. That papers over one symptom
    and leaves the body content stale.
  - Do not fix it by disabling prerendering. Bots would then get an empty <div id="root">
    and the site would have no indexable content at all. That is worse.
  - Do not change any copy, any section, or any route's behaviour. That is Prompts A to D.

STEP 3, VERIFY. Run checks/served-html-check.sh against the deployed URL and paste me the
whole output. It must reach "PASS" on everything except the three redirect lines, which
Prompt A fixes. Then show me, for the homepage:
  - the served <title> and <meta name="description">
  - the served og:title and og:description
  - whether the served document contains "$9,240"

Report the diagnosis from Step 1 first and wait for my approval before touching anything.
```

## Why this comes first

Prompt C rewrites the homepage. If the prerender pipeline still only runs once, the
restructured page ships to browsers and the pre-round-one page keeps serving to crawlers,
and the check that would have caught it is the one nobody thought to write. Fix the pipeline
while there is one page to verify against, not three.
