# Systematic Website Build: Start Here

You are building the new marketing site for Systematic. This file is the entry point.
Read it fully, then read the file the current task points to.

## The documents

| File | What it governs | When to read it |
|---|---|---|
| `00-START-HERE.md` | Rules, build order, project facts | Every session, every time |
| `01-design-system.md` | Tokens, type, layout, motion, what not to do | Before any visual work |
| `02-architecture.md` | Stack, file structure, config, routing, components | Before any structural work |
| `03-content.md` | Structure, order, placement, treatment. No copy. | Before moving or building any section |
| `04-data-files.md` | Literal contents of the typed data files | When creating or editing data |
| `06-scorecard-flow.md` | The Scorecard capture flow, the only lead capture on the site | Before any work under `/diagnostic` |
| `../prompts/05-build-prompts.md` | The prompt sequence and correction prompts | Human uses this, not you |

## What this company is

Systematic sells systems as a service to small businesses. There is one product: Signal,
a marketing operating system built around one business, which the owner logs into to run
everything. It is a subscription to access, not a project the customer buys and keeps.
Systematic is not an agency and never bills hourly.

Signal has two prices, the way serious software always has: a one-time build and a monthly
subscription. Both are published. The build is called "the build." It is not a separate
product, it does not have a brand name, and the word Calibration does not appear anywhere
on this site.

Signal is made of six named systems. Four of those six are also sold on their own for $97
a month as Components, which is the way in for a business that is not ready for the whole
thing. Same names, two depths. That is deliberate and it is why the ladder needs no
explaining.

**The homepage carries the whole offer, at decision depth.** A reader must be able to learn
what Signal is, what it includes, and both prices without leaving the page. That is the
decision. It is not the same as carrying every detail: reference material a buyer reads
*after* deciding to care, like the twenty-item inclusion list or the add-on catalogue,
belongs on `/build`. The test is whether a first-time visitor could decide to contact us
without clicking anything. Not whether every fact is present.

The market argument: small businesses have two options today, buying software they never
learn to use, or hiring an agency they cannot afford where the affordable ones do not
deliver. Systematic fills the middle. Never explain this as a category, a spectrum, or a
business model. Express it only as the two things the reader has already tried.

The audience: owners who are not marketers and who answer their own phone. They do not
say funnel, stack, omnichannel, or operating system.

The one job of the homepage: get a skeptical owner to run the free Scorecard.

Two names, never interchanged. The **Scorecard** takes about a minute, is what every button
on the site points at, and is the only lead capture on the site. It is a hybrid: four short
questions plus what is publicly visible, because only two of the six systems can honestly be
scored from the outside. See `06-scorecard-flow.md`. The **Audit** takes about an hour with
a person and is step one of the build.

## Check your work before you report it

`checks/spec-check.js` at the repo root turns these rules into pass/fail. Run it in the
browser console on any page you changed and fix the failures before telling me you are done.
Reporting a step complete without running it is not acceptable.

Rationale for any rule that looks arbitrary lives in `DECISIONS.md`. You do not need to read
that file to do the work.

## The seven rules

These override anything else, including your own judgment about what would look good.

1. **Copy comes from `src/content/`.** You do not write marketing copy and you do not
   improve the copy that exists. If a section needs words that are not in `src/content/`,
   stop and ask. `03-content.md` holds structure and placement, not sentences.

2. **No claims about results.** No lead counts, cost per lead, revenue figures, growth
   percentages, or ROI, anywhere, including placeholders. Describe what the system does,
   never what it will produce for a customer.

3. **Every price is published.** The strings "starting at", "contact us", "custom quote",
   "get a quote", "request a demo", and "from $" appear nowhere on this site.

4. **No product name or price is hardcoded in a component.** Everything reads from
   `src/config/brand.ts` or a file in `src/content/`. See `02-architecture.md`.

5. **The visual direction in `01-design-system.md` is not a starting point.** It is the
   spec, and it was re-derived from the live site's CSS rather than written from memory.
   Do not substitute typefaces, add a color, or introduce a pattern from the anti-pattern
   list. In particular: Plus Jakarta Sans not IBM Plex, pills not uppercase mono, amber
   buttons not emerald, cards not hairline lists.

6. **Do not add sections, features, or pages that were not asked for.** No testimonial
   carousel, no newsletter signup, no chat bubble, no trust badges, no logo cloud, no
   cookie banner beyond what is legally required.

7. **When you finish a task, state which of these seven rules the work touched and how
   you complied.** One line each. This is not optional.

## This is an edit, not a rebuild

There is a live site at gosystematic.com and it is good. Most of it stays. The design
system in `01-design-system.md` was re-derived from its CSS on 2026-08-17 and is the
reference for anything visual.

**Round two, 2026-08-18.** A fresh-eyes review found the page was written to be understood
rather than acted on: 2,325 words, three consecutive pain sections before the product was
named, a pricing section that was 34% of the page, no call to action across roughly 8,000px
of scroll, and no picture of the product anywhere. The changes below now include that pass.

Things change, and only these:

0. **Three pages are deleted.** `/signal` and `/pricing` become homepage anchors,
   `/calibration` 301s to `/build`. These three are why a reviewer said the offer was
   scattered across pages. See the routing section of `02-architecture.md`. Nothing else in
   this rewrite matters if this one does not happen.


1. The diagnostic six (Delivery, Visibility, Responsiveness, Repeat Business, Follow-Up,
   New Leads) is replaced by the six systems that actually get built. Same interactive
   stack component, new data.
2. The "four functional groups of your build" section is deleted. The six systems section
   now does that job, with prices on it.
3. A new Signal section is added, explaining that this is one product, positioned right
   after Two options.
4. Every price and product name updates: `Calibration` becomes `the build`, the range
   `$3,000 to $7,000` becomes `$9,240` with a published table, and the seat pricing
   replaces the old three tiers.

5. **The homepage is cut from 2,325 words to about 1,200.** The Math calculator moves to
   `/diagnostic`. The pricing inclusion list moves to `/build`. Components leave the
   homepage. The three how-we-price cards and three guarantee cards collapse into the lines
   that already said the same thing. The hero gains both prices and a product screenshot.
6. **`/diagnostic` is rebuilt.** It had no spec, so it drifted into a different voice, scored
   the retired pillars, and carried an invented value stack and a fabricated statistic.
7. **The FAQ keeps all twelve entries** but grouped in three, two columns, ~56px rows.

What stays untouched: the hero hook, "you are the marketing," the before-and-after, the
testimonials, and the How it works steps. If your diff rewrites those, you have gone too
far.

## Build order

1. Foundation: tokens, Plus Jakarta Sans, Pill component, shared section component, config,
   data files, header with anchor nav, footer, the industry route
2. Hero, including the credential strip
3. You are the marketing. The Math calculator is NOT in this section any more
4. Two options
5. Signal, with the before/after module inside it
6. The Six
7. Pricing, three blocks. No inclusion list, no Components block
8. How it works
9. Proof, Industries, FAQ, Final CTA
10. `/diagnostic`, the conversion page
11. `/build`, then `/components` and `/signal-plus`

Homepage section order, top to bottom: **Hero, You are the marketing, Two options, Signal,
The Six, Pricing, How it works, Proof, Industries, FAQ, Final CTA.** That is ten rendered
sections, since Industries renders nothing.

Three ordering rules, all load-bearing:

- **Signal comes before The Six.** The reader has to know this is one product before they
  see it has six parts, or the six read as a menu to shop from.
- **Pricing comes immediately after The Six**, with nothing between them. The reader has
  just seen exactly what gets built and the next question is what it costs.
- **How it works comes after Pricing.** By then the only open question is how to start, and
  the answer hands straight off to the CTA.

## What was cut, and where it went

Four sections were removed and none of their copy was lost. Each had a second section
making the same argument. Full reasoning is at the top of `03-content.md`.

| Was its own section | Now lives in |
|---|---|
| The Math | `/diagnostic` |
| Same business. Different week. | Inside "Signal" |
| Guarantee | Inside Pricing, block 3, as body copy not cards |
| Not ready for Signal | `/components` only |

Do not restore any of these as a standalone section without removing its replacement. The
page is being rebuilt to stop saying the same thing in four places.

`<SixStack variant="product" />` and `variant="hero"` are retired. The stack appears once,
as the interactive `detail` variant in The Six. The hero uses photography, as it does live.

## Still undecided, do not invent an answer

- What happens to a Component website when a customer cancels. Until this is answered,
  render the placeholder `{{WEBSITE_CANCELLATION_TERMS}}` and do not write around it.
- How many texts are included, now that pricing is per seat rather than three tiers. The
  old 2,000 / 5,000 / 10,000 allowances do not map onto seat pricing. Render
  `{{TEXT_ALLOWANCE_POLICY}}` literally.
- Whether an annual prepay discount exists under seat pricing. There is no monthly/annual
  toggle in this build. Do not add one and do not invent annual figures.
- Whether there is a cap on how many Components one customer can hold. The old "we cap it
  at two" line is not in the current offer. Do not write it back in.
- The Proof section has no real client yet. Placeholders only.
