# Decisions

Why the spec says what it says. **The build tool does not read this file.** It exists so the
reasoning survives without diluting the instructions in `docs/`, which are deliberately
terse and imperative. When a rule in `docs/` looks arbitrary, the reason is here.

## One product name

Signal. The offer used to carry three public names (Calibration, Signal, Signal+) for one
thing, split across five pages. A reviewer had to visit `/`, `/signal`, `/pricing`,
`/calibration` and `/components` to work out what was being sold. Signal now has a one-time
build and a monthly price, the way any serious software has implementation plus licence.
The build is called "the build" and has no brand name.

## Two sixes became one

The site ran a diagnostic six (Delivery, Visibility, Responsiveness, Repeat Business,
Follow-Up, New Leads) on the homepage and a *different* six of build deliverables elsewhere.
The CTA said "find out which of the six is costing you the most" and landed on a page
scoring the other six. The six systems won because they are priced, concrete, in plain
language, and four of them share names with the Components, which makes the entry ladder
self-explanatory.

## Scorecard vs Audit

Two different things that were sharing one name. The Scorecard is instant, automated,
scored from public data, and is the front door every button points at. The Audit takes about
an hour with a person and is step one of the build. The homepage used to promise an hour and
link to a 60-second scan.

## Why the homepage got cut from 2,325 words to ~1,200

It was written to be understood rather than acted on. Three consecutive pain sections ran
before the reader learned what we sell; the pricing section alone was 34% of the page and
held about 46 discrete items; and there was no call to action across roughly 8,000px of
scroll. Each cut removed a *second* place saying something already said once.

## Why the hero carries both prices and a product screenshot

Published pricing is the differentiator, so hiding half of it six sections down contradicts
the entire pitch. And the core claim is "one login instead of nine" on a page that had 2,325
words about software and no picture of software. A screenshot does more than any paragraph.

## Why the Math calculator moved to /diagnostic

It is a scorecard tool. On the homepage it was interactive friction before the reader knew
what we sell, and the third of three sections about the same pain. It survives Rule 2 only
because every number is the visitor's own input, the output says "estimated", and it prices
the current situation rather than a promised result. The live site had quietly moved the
default customer value from $300 to $750, doubling the scary number, which is exactly the
flattering default the rule exists to prevent.

## Why Components left the homepage

A homepage selling two things makes a first-time visitor choose before they are equipped to.
Components remain a strong sales tool in conversation and in ads, and they keep their own
page.

## Why the FAQ kept all twelve entries

The count was never the problem. Twelve collapsed rows eating 1,300px was. Grouped, two
columns, ~56px rows.

## Why there is a spec-check script

Prose rules decay. Every correction written as a prompt is a patch the repo does not know
about, so the next session rebuilds toward the repo and the correction is silently undone.
`checks/spec-check.js` converts the rules into pass/fail so drift is caught in seconds. A
rule nobody tests is a rule that decays.

## Round three: why the page was restructured again, 2026-08-19

Round two cut the page to be understood in fewer words. Round three reorders it to be acted
on. They are different jobs and round two only did the first one, and only halfway: measured
live on 2026-08-19 the homepage was 10,748px and 1,771 words, which is *more* than the 1,666
it started at.

The frame is the standard seven-beat landing page: hero, stakes, plan, guide credibility,
offer breakdown, proof, final CTA with an explicit statement of success. Measured against
it, four things were wrong and all four were positional rather than verbal. The copy was
mostly fine. The order was not.

## Why the plan moved from seventh to third

"Audit, Build, Run, and we do two of them" is the most reassuring sentence on the site and it
sat at 66% scroll, behind 4,800px of product and pricing. A reader decides whether working
with someone sounds survivable *before* they evaluate what is being sold. Moving it cost
nothing and it is the highest-leverage change in the round.

## Why three pain sections became one

Round two was supposed to fix this and did not. The hero was pain, "You are the marketing"
was pain, and "Two options" was pain a third time as two dead ends. 21% of the page ran
before Signal was named. The hero's headline, "You're the system. That's why your marketing
stops when you get busy," is the best sentence on the site and it is a *stakes* statement,
not a hero statement, so it moved down into the merged section rather than being deleted.

## Why the offer became one section

Signal, The Six and Pricing were three sections, three eyebrow pills, and 45% of the page,
making a single argument: here is the thing, here is what is in it, here is what it costs.
Three eyebrow pills is what tells a reader they are on their third topic. One pill and two
`h3`s is the same content read as one beat.

## Why the decision-depth rule was overturned

The round-two rule was: a visitor must be able to decide without clicking anything. That rule
is what put the six-row build table, the eight-item guarantee, the full system descriptions
and the before/after module on the homepage, and it is the direct cause of a 10,748px page.
It optimised for the rare reader who wants every line before talking to anyone. That reader
exists, and `/build` is now a real page that serves them — it 404'd when the rule was
written, which is probably why the rule was written.

The homepage still publishes both prices and all six system prices, because published pricing
is the entire differentiator. It stops publishing the arithmetic behind them.

## Why the credential strip left the hero

The hero's job is one message and one button. A four-item credential strip inside it is a
competing element. The strip is also the guide-credibility beat, and the frame puts that next
to the plan, so it moved to sit under How it works. It renders exactly once either way.

## Why the final CTA stopped restating the problem

It read "Find out which of six is costing you the most" — a problem statement at the exact
moment the page should describe the resolution. The replacement is "You stop being the part
that breaks," which was already on the page as the last sentence of the hero subhead. It
survives Rule 2 because it describes the owner's experience rather than a business result.

## Why the FAQ moved below the final CTA

Twelve entries were never the problem and 1,300px between Proof and the CTA was. Proof exists
to make the button feel safe; anything between them wastes it. Below the CTA the FAQ still
catches the reader who scrolls past.

## Why nothing here is a copy rewrite

Every round-three change is a move, a deletion, or a treatment change. The three places that
needed a sentence that did not exist are tokens awaiting approval rather than invented copy:
`{{HERO_H1}}`, `{{FINAL_CTA_HEADLINE}}` and `{{STAKES_CLOSING_LINE}}`. Each has a proposed
source sentence already on the site. Rule 1 held.
