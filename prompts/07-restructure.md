# Round three: the restructure prompts

For you, not for the tool. Paste them one at a time, in order, and run the check between
each one.

The section map these implement is in `docs/03-content.md`. The reasoning is in
`DECISIONS.md`. Neither is repeated here, on purpose: the tool should read a current spec
rather than your recollection of one.

## Before you start

1. **Sync the docs into the site repo.** This repo holds the spec; the site lives elsewhere.
   Copy `docs/`, `AGENTS.md` and `checks/spec-check.js` across before prompt A, or the tool
   will read round-two rules and rebuild what you are trying to remove.
2. **Re-paste `00-paste-this-first.md`** — but note it still describes ten sections in its
   step-2 questions. Answer "seven" when the tool parrots ten back at you, and point it at
   `docs/03-content.md`, which is authoritative for the homepage.
3. **Decide the two open copy gaps**, below. `{{HERO_H1}}` is settled and its sentence is in
   this file. The tool will render `{{FINAL_CTA_HEADLINE}}` and `{{STAKES_CLOSING_LINE}}`
   literally until you approve sentences for them, and `spec-check.js` will fail on
   unresolved tokens until you do. That failure is correct. Do not let the tool write its
   way out of it.

## Run the check after every prompt

Paste `checks/spec-check.js` into the browser console on the page you just changed. It now
enforces seven sections, 1,200 words, 7,500px, the new ordering, and that the five moved
things are on `/build` and not on the homepage.

Run it at 1280px wide and again at 375px. The mobile block only fires under 768px.

---

## The copy gaps

One is settled. The other two are resolved by moving a sentence that already exists on the
site, and both still need your yes.

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

**`{{FINAL_CTA_HEADLINE}}` — the statement of success.** Proposed: *"You stop being the part
that breaks."* It is currently the last sentence of the hero subhead, where it competes with
the headline. At the bottom of the page it is exactly what the frame asks for: what the
owner's week looks like once this works. It passes Rule 2 because it describes their
experience and not a business result.

**`{{STAKES_CLOSING_LINE}}` — the handoff into the plan.** Proposed: *"Someone builds the
system for your business, then it runs."* It is currently inside the third-option card, which
this restructure deletes.

One of the three is now settled and the other two are still yours. Approve them as proposed
and the restructure adds exactly one new sentence to the site.

---

## Prompt A, routing and the header

Do this first and alone. Round two specified it and never shipped it, and everything else
assumes it.

```
Read docs/00-START-HERE.md and the routing section of docs/02-architecture.md before you
touch anything.

Three routes are still live that were supposed to be gone. Verified on gosystematic.com
2026-08-19: /signal, /pricing and /calibration all return 200. /signal serves an entirely
separate old page titled "Marketing should be a system, not a gamble."

1. Delete the /signal page and 301 it to /#signal.
2. Delete the /pricing page and 301 it to /#pricing.
3. 301 /calibration to /build.
4. Confirm the anchor ids #signal and #pricing exist on the homepage and that the redirects
   land on them. Do not create new sections to receive them.

Then the header. It currently renders two buttons, "Get my free Six-Point Scorecard" and
"Audit". Delete the "Audit" button. The Scorecard is the only call to action on this site
and a second button in the header competes with it.

Do not touch homepage sections in this prompt. Report the status code and Location header
for each of the three routes when you are done.
```

**Verify yourself, do not take its word:**

```bash
for u in signal pricing calibration; do curl -s -o /dev/null -w "/$u %{http_code} -> %{redirect_url}\n" "https://gosystematic.com/$u"; done
```

---

## Prompt B, /build absorbs what the homepage is about to drop

Second, and before prompt C. Moving copy out of a page that has nowhere to put it is how
copy gets lost.

```
Read the /build section of docs/03-content.md. It lists five things that move here from the
homepage and the order they go in.

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
5. Confirm the inclusion list is already here.

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

Two other places need a sentence that is not approved yet, and they are tokens: render
{{FINAL_CTA_HEADLINE}} and {{STAKES_CLOSING_LINE}} literally. Do not write a sentence for
either, do not assemble one from nearby copy, and do not remove the element so the token has
nowhere to render. spec-check.js will fail on unresolved tokens and that failure is expected
here.

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
   paragraphs, and the entire third-option card. Closing line is {{STAKES_CLOSING_LINE}}.
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

6. FINAL CTA headline becomes {{FINAL_CTA_HEADLINE}}. Delete "Find out which of six is
   costing you the most."

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
| Live legacy routes | 3 | 0 |

## After it ships

Recapture the baseline. `checks/baseline/2026-08-18-pre-refactor.json` is now two rounds
stale and its `/` hash will never match again. Write a new one dated the day it ships, and
note in it that round three deliberately changed rendered copy, so it is a new baseline
rather than a failed pure-move.
