# Round three: the restructure prompts

For you, not for the tool. Paste them one at a time, in order, and run the check between
each one.

The section map these implement is in `docs/03-content.md`. The reasoning is in
`DECISIONS.md`. Neither is repeated here, on purpose: the tool should read a current spec
rather than your recollection of one.

## Before you start

0. **Run `08-prerender.md` first.** It fixes the prerender pipeline, and it is not optional
   sequencing. The site serves a stale HTML snapshot of the pre-round-one build to every
   crawler and link preview. If the pipeline still only runs once, Prompt C ships a
   restructured homepage to browsers while the old page keeps serving to Google.
1. **Sync the docs into the site repo.** This repo holds the spec; the site lives elsewhere.
   Copy `docs/`, `AGENTS.md` and `checks/spec-check.js` across before prompt A, or the tool
   will read round-two rules and rebuild what you are trying to remove.
2. **Re-paste `00-paste-this-first.md`** — but note it still describes ten sections in its
   step-2 questions. Answer "seven" when the tool parrots ten back at you, and point it at
   `docs/03-content.md`, which is authoritative for the homepage.
3. **Nothing left to decide.** All three copy decisions were settled on 2026-08-19 and the
   sentences are in the next section. The homepage should render no unresolved token when
   this is done, so `spec-check.js`'s token check must PASS on `/`. It will still fail on
   `/components` and `/build`, which carry `{{WEBSITE_CANCELLATION_TERMS}}` and
   `{{TEXT_ALLOWANCE_POLICY}}`. Those two are older than this round and stay open.

## Run BOTH checks after every prompt

**`checks/spec-check.js`** goes in the browser console on the page you just changed. It
enforces seven sections, 1,200 words, 7,500px, the new ordering, and that the five moved
things are on `/build` and not on the homepage. Run it at 1280px wide and again at 375px;
the mobile block only fires under 768px.

**`checks/served-html-check.sh`** runs from a terminal and reads what `curl` gets, which is
not what your browser gets:

```bash
bash checks/served-html-check.sh
```

You need both, and neither substitutes for the other. `spec-check.js` runs after hydration
and is structurally blind to the served document; on 2026-08-19 every one of its checks was
green while the HTML this site actually sends contained nine rule-violating strings from the
pre-round-one build.

---

## The three copy decisions, all settled

One new sentence, two relocations. Nothing here is open.

**`{{HERO_H1}}` — the one-liner. APPROVED 2026-08-19. The sentence is:**

> ### Marketing for small business that never stops.

The `--honey` hand-drawn underline goes on **never stops**, and on nothing else.

Two things about it that a later session will undo if they are not written down:

1. **It echoes the Stakes headline** two sections below, "You're the system. That's why your
   marketing stops when you get busy." Hero states the resolution, Stakes names the problem,
   same verb. Rewrite one and you have to check the other.
2. **It says what the system does, not who operates it.** That work is done by the subhead's
   last clause, "Then we run it." Software the owner operates is Dead End 1 in the very next
   section, so if that clause is ever cut, the hero starts arguing for the thing the page
   argues against. Keep it.

It passes Rule 2: "never stops" describes how the system behaves, not a result the business
will get. The site already speaks this way — "Runs continuously" is in the before/after
module and "Follow Up Automatically" is system 06.

**`{{FINAL_CTA_HEADLINE}}` — the statement of success. APPROVED 2026-08-19:**

> ### You stop being the part that breaks.

A **move**, not a new sentence. It is currently the last sentence of the hero subhead, where
it competes with the headline. At the bottom of the page it is what the frame asks for: what
the owner's week looks like once this works. It passes Rule 2 because it describes their
experience and not a business result.

It also closes the loop the page opens. Stakes says "You're the system"; the last line on the
page says you stop being it.

**`{{STAKES_CLOSING_LINE}}` — the handoff into the plan. APPROVED 2026-08-19:**

> Someone builds the system for your business, then it runs.

A **move**, not a new sentence. It is currently inside the third-option card, which this
restructure deletes. It is the only sentence in that card doing work the hero does not
already do, and it hands straight into How it works, which is now the next section.

**Net for the whole restructure: one new sentence.** Everything else is a move, a deletion or
a treatment change.

---

## Prompt A, routing and the header

Run this after `08-prerender.md`, and before Prompt B.

**The premise of this prompt changed on 2026-08-19.** An earlier version said `/signal`,
`/pricing` and `/calibration` were still live, on the evidence that `curl` returned 200 for
all three. That was wrong. This is a client-side SPA, so the server answers **every** path
with `index.html` and a 200; the status code says nothing about whether a route exists.
Checked properly, by navigating in a browser, all three already redirect to the homepage.

What is actually still wrong is narrower, and neither part is visible from a browser:

1. **`/signal` and `/pricing` land on `/` with no anchor**, so a visitor arrives at the top
   of the homepage rather than at the section the link promised. `/calibration` does go to
   `/build`, which is the right destination — but `/build` renders a 404, which Prompt B
   fixes.
2. **All three are client-side redirects, not 301s.** The spec asks for 301s and the
   difference is real: a client-side redirect passes no link equity, and a crawler sees a
   200 with a page of content rather than a permanent move. `/signal` additionally still has
   a prerendered snapshot of its old self, so to anything that does not run JavaScript it
   looks like a live page.

```
Read the routing section of docs/02-architecture.md before you touch anything.

Three legacy routes redirect client-side today. They need to be real server-side 301s, and
one of them points at the wrong place. Do not remove the client-side redirects until the
server-side ones are confirmed working; for a moment both will exist and that is fine.

1. /signal      301 to /#signal    <- currently lands on / with no anchor
2. /pricing     301 to /#pricing   <- currently lands on / with no anchor
3. /calibration 301 to /build      <- destination is right; /build itself 404s, see Prompt B

These must be issued by the server or the edge, not by the React router. Where they are
configured depends on the host: a _redirects file, a redirects array in the build config, a
Cloudflare rule, or a platform setting. Find the mechanism this site actually uses and tell
me which one before you change it.

Confirm the anchor ids #signal and #pricing exist on the homepage and that the redirects
land on them. Do NOT create sections to receive them: after round three, #the-six and
#pricing are ids on sub-blocks INSIDE the #signal section, and #signal is the section
itself. An anchor does not care what element carries it.

Any prerendered snapshot for /signal, /pricing or /calibration must be deleted. A 301 with
a stale snapshot behind it still serves the old page to some clients.

Then the header. It renders two buttons today, "Get my free Six-Point Scorecard" and
"Audit". Delete the "Audit" button. The Scorecard is the only lead capture on this site and
a second header button competes with it. Also remove "The Six" from the nav: it is now a
sub-block of Signal and two nav items pointing into one section is noise. Nav becomes
Signal, Pricing, About.

Do not touch homepage sections in this prompt.

Report: the redirect mechanism you used, and the status code plus Location header for each
of the three routes, taken with curl and not from a browser.
```

**Verify it yourself. A browser will lie to you here** — it follows client-side redirects
happily and shows you the right page whether or not a 301 exists.

```bash
for u in signal pricing calibration; do curl -s -o /dev/null -w "/$u %{http_code} -> %{redirect_url}\n" "https://gosystematic.com/$u"; done
```

Three `301`s, with `/calibration` pointing at `/build`. A `200` means the SPA fallback is
still answering and nothing was fixed at the server.

## Prompt B, build /build, then move things into it

Second, and before prompt C. Moving copy out of a page that has nowhere to put it is how
copy gets lost.

**`/build` does not exist.** Verified in a browser 2026-08-19: it renders the 404 component.
An earlier version of this file said it returned 200 and was fixed; that came from a `curl`
status code, which is meaningless on this site because the SPA answers every path with
`index.html` and a 200. This prompt therefore builds the page before it fills it.

```
Read the /build section of docs/03-content.md. The page is spec'd there in full.

FIRST, BUILD THE PAGE. /build currently renders the 404 component. Load it in a browser and
confirm that before you start; do not trust a curl status code on this site, because the SPA
returns 200 for every path including ones that 404.

Build /build using the same section components, tokens and card idiom as the rest of the
site. It is not in the nav and not on the primary path. Everything on it is read-only: no
checkboxes, no selectors, no running total, no estimate language.

THEN MOVE THE FIVE THINGS IN. It lists them and the order they go in.

This is a PURE MOVE. Not one word may change in transit. Before you start, save
document.querySelector('main').textContent from the homepage with whitespace collapsed to
single spaces, into baseline/home-pre-round-three.txt, and commit it. Every sentence you
move must appear in that file, character for character.

Move these five things onto /build, in the order docs/03-content.md gives:

1. Each system's "what gets built in Signal" prose, from the SixStack detail panel, onto
   that system's card.
2. The six-row build price table with its 20% off pill, plus the "Already have a site that
   works?" paragraph and the "An agency quote is one number with no line items" line.
3. The entire "No surprises" block: heading, body paragraph, and all eight list items.
4. The before/after module, "Same business. Different week.", with all four pairs. On mobile
   it stacks as paired rows, each mark with its match, never two columns of four.
5. The add-ons link target and the add-on catalogue itself. The homepage keeps ONE link to
   /build and loses the separate add-ons link, so this page has to carry both.

The twenty-item inclusion list also belongs here, behind "See everything included". It was
moved off the homepage in round two, so it may already exist in src/content/ even though the
page that renders it does not. Find it before you rebuild it.

{{TEXT_ALLOWANCE_POLICY}} renders literally on this page. It is reported missing from
src/content/noSurprises.ts entirely; if that is right, add the token, not a sentence.

Do NOT remove anything from the homepage yet. For this prompt the copy exists in both
places. Prompt C removes it from the homepage.

Everything on /build is read-only. No checkboxes, no selectors, no running total, no
estimate language.

Then run checks/spec-check.js on /build and paste me the table.
```

---

## Prompt C, the homepage restructure

The big one. If the tool starts improvising, stop it and re-paste
`docs/03-content.md`'s Homepage section rather than arguing.

```
Read the Homepage section of docs/03-content.md completely. It is the authority for this
prompt and it was rewritten on 2026-08-19. Where docs/00-START-HERE.md disagrees with it
about the homepage, 03-content.md wins.

Restructure the homepage from ten rendered sections to seven. The new order is Hero,
Stakes, How it works, Signal, Proof, Final CTA, FAQ, plus Industries which renders null.

This is almost entirely a MOVE, not a rewrite. There is exactly ONE new sentence in this
whole restructure and it is the hero headline, given verbatim in step 1 below. Add it to
src/content/ like any other copy; do not hardcode it in a component.

There are NO tokens to render on the homepage. All three round-three copy decisions are
settled and every sentence you need is written out below, verbatim. When you are done, the
homepage must render no {{TOKEN}} at all and spec-check.js's token check must pass on /.

Work section by section, in this order, and show me the diff for each before moving on:

1. HERO. Remove the credential strip; it goes to How it works. Remove the honey accent line
   above the headline.

   The headline becomes this exact sentence, which is new and approved:

       Marketing for small business that never stops.

   Put it in src/content/, not in the component. Apply the hand-drawn honey underline to the
   words "never stops" and to nothing else.

   Subhead is the existing "We build the system that answers for you..." sentence with only
   its LAST sentence removed. "Then we run it." STAYS. "You stop being the part that breaks."
   goes to the Final CTA. Do not cut both; the hero needs "Then we run it." to say that a
   person runs this and not the owner.

   Price line is the existing line with its first clause removed, so it opens at "$9,240".
   One amber button, one reassurance line. Keep the photograph. Nothing else may sit in this
   section.

2. STAKES. One new section absorbing all of "You are the marketing" and all of "Two
   options". Its headline is the sentence moved down from the hero: "You're the system.
   That's why your marketing stops when you get busy." Keep two body paragraphs and the two
   dead-end lines. Delete the four pills, both card containers, the two follow-on
   paragraphs, and the entire third-option card INCLUDING its two pills and its "Built for
   you, then it runs 24/7" line.

   Rescue exactly one sentence out of that card before you delete it, and make it this
   section's closing steel line:

       Someone builds the system for your business, then it runs.

   Zero cards, zero pills except the eyebrow, no CTA. It must not be taller than the hero.

3. HOW IT WORKS moves from position seven to position three, unchanged, and gains the
   credential strip beneath its Signal+ line as one steel line with no heading and no cards.

4. SIGNAL becomes ONE section with three sub-blocks. One eyebrow pill at the top; blocks B
   and C open with an h3 and no eyebrow. Block A adds the Signal interface screenshot and
   loses the before/after module. Block B keeps the stack and its prices and loses "what
   gets built in Signal" from the detail panel. Block C keeps the monthly, the three example
   rows, the build figure and the comparison sentence, and loses the six-row table, the two
   paragraphs after it, and the whole No surprises block, replaced by one steel line. One
   link to /build, not two. One amber button closing the section.

5. PROOF is unchanged and now sits with nothing between it and the Final CTA.

6. FINAL CTA. Delete the headline "Find out which of six is costing you the most." The new
   headline is the sentence you removed from the end of the hero subhead in step 1:

       You stop being the part that breaks.

   It moves, it is not copied: after this it exists once on the page, here. The button and
   the line beneath it are unchanged.

7. FAQ moves BELOW the Final CTA, otherwise unchanged.

Every sentence you delete must already exist on /build after the previous prompt, or be
listed in 03-content.md as deleted outright. If you are about to delete something that is in
neither category, stop and ask me.

Do not add a section. Do not add an animation. Do not restyle anything. Count the rendered
sections before you tell me you are done.
```

---

## Prompt D, verify

```
Run checks/spec-check.js on the homepage at 1280px wide, then again at 375px wide, then on
/build. Paste me all three tables in full, including the passes.

Then run checks/served-html-check.sh from a terminal and paste its whole output. This reads
what curl gets rather than what a browser gets, and the two have disagreed on this site
before. It must PASS everything, including the three redirect lines by now.

If the served homepage does not contain the new hero headline, the prerender pipeline is
still only running once and Prompt 0 did not hold. Say so rather than working around it.

Then report these five numbers for the homepage at 1280px:
  - document.body.scrollHeight
  - word count of document.querySelector('main').innerText
  - count of rendered sections taller than 50px
  - the y position of every Scorecard button, and the largest gap between consecutive ones
  - the height of the Signal section as a percentage of scrollHeight

Targets: under 7,500px, under 1,200 words, exactly 7 sections, no gap over 30%, Signal under
30%.

Do not fix anything in this prompt. Report only. If a check fails, tell me which and why you
think it failed, and wait.
```

---

## What "done" looks like

| | 2026-08-19 before | Target |
|---|---|---|
| Rendered sections | 10 | 7 |
| Words in `main` | 1,771 | ~1,050 |
| Page height at 1280px | 10,748px | ~6,700px |
| Largest CTA gap | 3,825px | under 1,900px |
| Plan position | 66% scroll | ~25% scroll |
| Offer share of page | 45% | under 30% |
| Legacy routes as real 301s | 0 of 3 | 3 of 3 |
| Rule-violating strings in served HTML | 9 | 0 |
| Routes with a stale or missing snapshot | 8 of 8 | 0 of 8 |

## The order, end to end

| | Prompt | Fixes |
|---|---|---|
| 0 | `08-prerender.md` | The pipeline. Crawlers see the current site |
| A | Prompt A below | Three legacy routes become real 301s; header drops a button |
| B | Prompt B | `/build` absorbs the five things the homepage is about to drop |
| C | Prompt C | The homepage restructure itself |
| D | Prompt D | Verify, report only |

0 before A because A deletes snapshots, and deleting snapshots from a generator that never
re-runs leaves those routes with nothing. A before B and C because both assume the
redirects resolve.

## After it ships

Recapture the baseline. `checks/baseline/2026-08-18-pre-refactor.json` is now two rounds
stale and its `/` hash will never match again. Write a new one dated the day it ships, and
note in it that round three deliberately changed rendered copy, so it is a new baseline
rather than a failed pure-move.
