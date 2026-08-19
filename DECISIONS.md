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

Every round-three change is a move, a deletion, or a treatment change, with exactly one
exception. `{{FINAL_CTA_HEADLINE}}` and `{{STAKES_CLOSING_LINE}}` are tokens awaiting
approval rather than invented copy, and each has a proposed source sentence already on the
site.

`{{HERO_H1}}` is the exception and the only new sentence in the round: **"Marketing for small
business that never stops."** Nathan approved it on 2026-08-19. It was written rather than
moved because the hero had nothing to move: the old headline was a problem statement, which
is why it went to Stakes, and the only what-we-do sentence on the page carried no result.

Two options were on the table. The other was "Small business marketing, automated and run for
you", which does its own anti-software work in the phrase "run for you". This one is shorter
and it pays off structurally, because it echoes the Stakes headline two sections down: hero
says marketing that never stops, Stakes says marketing that stops when you get busy. Same
verb, resolution then problem.

The cost of choosing it is that the hero no longer says who operates the system, so the
subhead's "Then we run it." became load-bearing and can no longer be cut. Software the owner
operates is Dead End 1 in the section immediately after. That dependency is recorded in
`AGENTS.md` and in the Hero spec, because it is exactly the kind of thing a later session
tidies away.

## The other two round-three sentences, settled 2026-08-19

Both approved as proposed, and both are relocations rather than new writing.

**"You stop being the part that breaks."** was the last sentence of the hero subhead, where
it competed with the headline for the same job. At the bottom of the page it is the statement
of success the frame asks for, and it closes the loop the page opens: Stakes says "You're the
system", and the last line says you stop being it. It clears Rule 2 because it describes the
owner's experience and not a result the business will get, which is the bar any replacement
has to meet.

**"Someone builds the system for your business, then it runs."** was inside the third-option
card that round three deletes. It is the only sentence in that card doing work the hero does
not already do, and as the Stakes closing line it hands straight into How it works, which is
now the next section and which answers "how".

Net for the round: one new sentence, the hero headline. Everything else is a move, a deletion
or a treatment change, and the homepage renders no unresolved token afterwards.

`spec-check.js` asserts both sentences appear exactly once and in their new homes. The failure
mode being guarded is a tool that copies rather than moves, which leaves the page saying the
same thing twice — the exact problem all three rounds have been undoing.

## Why there is a second check that reads what curl gets

Found 2026-08-19, while looking for the site repo: `gosystematic.com` serves a prerendered
HTML snapshot to non-browser clients and the live SPA to browsers. Normal technique. The
snapshots were stale by an entire rebuild — the document served for `/` was a complete copy
of the pre-round-one site, carrying `Calibrate`, `Signal+` as a public tier, "Measurable
ROI", "leads, calls, and revenue", "Book a free discovery call", and no price anywhere.
Nine rule-violating strings in the version Google and every link preview reads.

Three rounds of review missed it because it is invisible from a browser, and `spec-check.js`
missed it because it runs after hydration. Every check in it was green. That is not a bug in
the check; it is the boundary of what a browser-side check can observe, and the fix is a
second check on the other side of the boundary rather than a smarter version of the first.

The same blind spot produced a wrong finding in the round-three audit. `/signal`, `/pricing`
and `/calibration` were reported as still live because `curl` returned 200 for all three. A
client-side SPA answers every path with `index.html` and a 200, so the status code carried
no information. Navigating in a browser showed all three already redirect. What was actually
broken was narrower: `/calibration` pointed at `/` instead of `/build`, and none of the three
was a real 301.

Both lessons are the same lesson. **A single observation point is a single point of failure.**
The rule now recorded in `AGENTS.md` is that a 200 from curl proves nothing about a route on
this site, and that green from `spec-check.js` proves nothing about the served document.

## Why the prerender fix comes before the restructure

It fixes a pipeline, not a page. If the generator still runs once and never again, Prompt C
ships the restructured homepage to browsers while the pre-round-one page keeps serving to
crawlers — and the failure stays invisible, because the only check anybody runs is the one
that cannot see it. Fixing the pipeline while there is a single page to verify against is
cheaper than discovering it three prompts later.
