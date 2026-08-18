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
