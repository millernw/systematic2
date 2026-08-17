# Build Prompts

This file is for you, not for the tool. Each prompt is short on purpose: the detail lives
in the reference docs, so the tool reads a current spec instead of your recollection of
one.

## Setup, do this first

**If you are using Cursor, Claude Code, or Windsurf:** put all six documents in `/docs` in
the repo, then create a rules file (`CLAUDE.md`, `.cursorrules`, or the equivalent)
containing only this:

```
Before any work on this project, read /docs/00-START-HERE.md. It indexes five other
reference documents and lists seven rules that override your judgment. Never write
marketing copy: it lives in /docs/03-content.md. Never hardcode a price or product name:
they live in /docs/04-data-files.md. Confirm which rules your work touched at the end of
every response.
```

**If you are using Lovable:** paste the six documents into the Knowledge or project
context panel so they persist across prompts. Lovable re-reads that on every message,
which is exactly what you want.

**If you are using v0 or Bolt:** paste `00-START-HERE.md` and `01-design-system.md` with
Prompt 1, then paste the relevant reference doc at the top of each later prompt. Keep the
seven rules on hand to re-paste when things drift.

---

## Prompt 1, Foundation

```
Read 00-START-HERE.md, 01-design-system.md, 02-architecture.md, and 04-data-files.md
before writing anything.

Build the foundation only:
1. Design tokens, Plus Jakarta Sans loaded at 400 and 800, the type scale, and the Pill
   component with its three variants
2. The shared Section component that owns vertical padding and the scroll-reveal entry
3. src/config/brand.ts and every file in src/content/, contents exactly as specified
4. Header and Footer
5. The hero, copy verbatim from 03-content.md, with the photograph and the credential strip
6. SixStack stubbed. It has one variant, `detail`, built later in prompt 4
7. Empty labeled placeholders for the remaining homepage sections in the order given in
   00-START-HERE.md
8. The /industries/[slug] route, functional, returning 404 for all five unpublished seeds

Before you write code, state your hero layout plan in two sentences and confirm the five
color tokens and three typefaces you are using. Then build.
```

---

## Prompt 2, You are the marketing, with the Math inside it

```
Read the "You are the marketing" section of 03-content.md.

Build one section, not two. The Math calculator lives inside this section beneath the
second paragraph, with a subheading only: no second eyebrow, no second section wrapper, no
section padding of its own. The calculator already exists on the live site. Keep it and
move it.

Order inside the section: eyebrow pill, headline, two body paragraphs, the "Here is what
that costs" subheading, the calculator, the closing line beneath the module, then the
--steel closing line about the gap.

Read the Rule 2 note in 03-content.md before you touch the calculator. Do not add any
projection of what Signal would recover, and do not change the default inputs.
```

---

## Prompt 3, Two options

```
Read the "Two options" section of 03-content.md and the layout rules in
01-design-system.md.

Build it as three cards: two dead-end cards on --paper, then the third-option card on
emerald tint. Each carries two pills at the top, a sentence-case heading, body, and a
closing line in --steel. No icons, no comparison table.

Pills are sentence case, never uppercase, never mono.
```

---

## Prompt 4, Signal, with the before/after inside it

Signal is built before The Six. That order is deliberate and it is in 00-START-HERE.md.

```
Read the "Signal" section of 03-content.md.

Build one section. Eyebrow pill, headline, body, then four cards two by two, verbatim.
There are four, not three: Built for you, Run for you, Improved over time, Sits alongside.
Sentence-case labels, not uppercase, not mono.

Then the "Same business. Different week." before/after module inside this same section,
beneath the four cards, with a subheading only and no second eyebrow. That module already
exists on the live site as its own section. Move it in here and delete the standalone
section.

There is no SixStack in this section. The product variant is retired and the before/after
module takes its place.
```

---

## Prompt 5, The Six

```
Read the "The Six" section of 03-content.md, the six.ts data in 04-data-files.md, and the
signature element spec in 01-design-system.md.

Do not build this from scratch. The interactive stack already exists on the live site as
"The 6 Marketing Pillars". Keep the component and the interaction, repoint it at the new
six.ts data, and delete the separate "four functional groups of your build" section, which
this now replaces.

Build the section and finish SixStack variant="detail". --cream background, same as the
live site. Headline and intro left, stack right on desktop, stack full width on mobile.

Each band shows its label and its price right-aligned. Selecting a band swaps the detail
panel to that system's plainQuestion and brokenSignal. Core Build carries a `Required`
pill and is the only band that does. Bands narrow slightly toward the top. Sort by the
order field, never by array position: Core Build is 1 at the base.

Do not render whatItIs here. It is long and it belongs to /build.

The closing line about what happens after somebody becomes a customer stays exactly as
written.
```

---

## Prompt 6, Pricing

```
Read the "Pricing" section of 03-content.md, the pricing structure in 02-architecture.md,
and brand.ts, included.ts, buildRows.ts, components.ts, and noSurprises.ts in
04-data-files.md.

Four stacked blocks on --cream using the card idiom, in this order: Signal monthly, the
build, Components, No surprises. Do not lead with the build fee.

Block 1: $297 in display type, the seat rule in one sentence, then exactly three
signalExamples rows under the heading "For example", then the inclusion list rendered once.
Three rows, not eight. They are not selectable and are not tiers. There is no
monthly/annual toggle in this build.

Block 2: $9,240 in display type, the comparison sentence, then buildRows.ts as a two-column
table. The subtotal row is --steel, the emphasis row is the only one in display type. No
checkboxes, no selectors, no running total.

Block 3 absorbs the old standalone "Not ready for Signal" section, which is deleted. Four
Components, name and short description only. State $97/mo and the no-build-fee once above
the list, not on every row. Keep this block visually quieter than blocks 1 and 2: it is a
fallback, not a third option of equal weight. Do not build a Signal versus Component
comparison and do not add Components to the header nav.

Block 4 absorbs the guarantee section, which is deleted as a standalone. Its headline, body,
and three cards move in above the noSurprises list. The whole block is body-size type with
real spacing. It is not fine print. Render {{TEXT_ALLOWANCE_POLICY}} literally.

By the end of this prompt, two live sections have been removed and nothing they said has
been lost. Confirm both in your reply.
```

---

## Prompt 7, How it works

How it works is built after Pricing now. The reader knows what it is and what it costs, and
the only question left is how to start.

```
Read the "How it works" section of 03-content.md and steps.ts in 04-data-files.md.

Three steps, horizontal with hairline dividers on desktop, stacked on mobile. Each step
gets its actor pill from steps.ts: "You" in amber tint on step one, "We do this" in emerald
tint on steps two and three. Numbering is appropriate here because these are genuinely
sequential.

Include the closing lines about total time investment, then the --steel line about Signal+
beneath them. Signal+ gets no link and no button. Do not add a fourth step.
```

---

## Prompt 8, Proof, Industries, FAQ, CTA

Run as one prompt, or split if quality drops.

```
Read the Proof, Industries, FAQ, and Final CTA sections of 03-content.md and faqs.ts in
04-data-files.md.

Proof: four real testimonial cards from testimonials.ts on --cream-panel, with initials
avatars. The quotes are real and attributed. Do not edit them, do not invent a fifth, and
do not add any statistic of our own to this section. The credentials row is NOT here, it
runs as a single line inside the hero. Do not render it twice.

Industries: renders only published entries. None are published, so it must return null and
leave no heading, spacing, or empty container. Confirm in your reply that it renders
nothing today.

FAQ: accordion, hairline dividers, no cards, a plus that rotates to a minus. Render
{{WEBSITE_CANCELLATION_TERMS}} literally, do not write around it.

Final CTA: full width brand gradient, left aligned, one headline, one amber button, one
line beneath, no form. Build it as a reusable Cta component, it appears on four pages.
```

---

## Prompt 9, /build

```
Read the /build section of 03-content.md, plus six.ts and addOns.ts in 04-data-files.md.

Build the page at /build, and add a 301 redirect from /calibration to it. Reuse Section,
Cta, and every token.

The six render in full here, in order, showing label, price, and whatItIs. This is the only
place whatItIs appears. Then the two worked examples, then the add-ons.

Critical: everything on this page is read-only. No checkboxes, no selectors, no running
total, no estimate language. The worked examples go above the add-ons because they do more
work than the list does.

Never render internal hours, cost, margin, or effective rate. Those do not exist in your
data files and must not be invented.
```

---

## Prompt 10, /components and /signal-plus

```
Read the /components and /signal-plus sections of 03-content.md, plus components.ts and
signalPlus.ts.

Build both pages from existing components. Neither goes in the header nav. /components is
linked from the pricing section, the downsell section, and the footer. /signal-plus is
linked from one FAQ answer and the footer only.

/components has three parts in this order: the four offers with full descriptions, the
"what a Component deliberately does not do" block, and the "if you move to Signal" block.
Do not soften or cut the second one. It is the most honest thing on the site and it is what
makes the third one land.

No Signal versus Signal+ comparison on either page.
```

---

## Correction prompts

Keep these loaded. Regression after edit ten is the normal failure mode, not a sign
something went badly wrong.

**Generic drift**
> Re-read 01-design-system.md and list every anti-pattern currently present in the code.
> Fix them. Do not change anything else.

**Copy invented or improved**
> You wrote or altered copy. Every word on this site comes from 03-content.md verbatim.
> Diff what is rendered against that file and restore it. List what you changed back.

**Results claim appeared**
> You wrote a claim about results. Find every sentence implying a lead count, revenue
> figure, growth rate, or ROI and rewrite it to describe what the system does. List each
> one.

**Hidden pricing language**
> Search for "starting at", "contact us", "custom quote", "get a quote", "request a demo",
> and "from $". Remove every instance. Every price on this site is published.

**Old design system returned**
> You are rebuilding the pre-2026-08-17 site. Re-read 01-design-system.md and fix every
> instance: IBM Plex instead of Plus Jakarta Sans, uppercase or mono eyebrows instead of
> pills, 4px radius instead of 12/24/9999, emerald buttons instead of amber, flat --ink
> sections instead of the brand gradient, hairline lists instead of cards, or photography
> removed. List each one you found.

**Mono or uppercase appeared**
> Search for IBM Plex Mono and for uppercase text-transform. The live site uses neither.
> Eyebrows and labels are pills: rounded-full, 11px, weight 700, sentence case. Replace
> every instance and show the diff.

**Tier columns returned**
> Pricing is showing packages again. Signal has one price that scales by seats. Render the
> three signalExamples rows under "For example" and included.ts once beneath it. Nothing is
> selectable and nothing is gated.

**A second product name appeared**
> Search the rendered output for "Calibration". There is one product on this site, called
> Signal, and the one-time fee is called the build. Replace every instance and show the
> diff.

**The offer scattered again**
> Something essential moved off the homepage onto a subpage. The homepage carries the whole
> offer: what Signal is, the six systems with prices, both prices, and the Components
> downsell. Subpages are optional reading. Put it back and list what you moved.

**A cut section came back**
> The homepage is ten rendered sections in this order: Hero, You are the marketing, Two
> options, Signal, The Six, Pricing, How it works, Proof, FAQ, Final CTA. The Math belongs
> inside "You are the marketing", the before/after inside "Signal", the guarantee inside
> Pricing block 4, and Components inside Pricing block 3. Count the sections you rendered,
> name any extra one, and merge it back where it belongs.

**Pricing drifted away from The Six**
> Pricing must come immediately after The Six with nothing between them. A reader who has
> just seen what gets built asks what it costs next. Move it back and name what you moved.

**Spacing collapsed**
> Section padding is inconsistent. Find every class competing with the shared Section
> component, remove them, and confirm 80px desktop and 40px mobile everywhere.

**Page renders blank under reduced motion**
> The scroll reveals are gated on an IntersectionObserver that never fires. Confirm
> prefers-reduced-motion renders every section at its final state with no transition, and
> that sections are visible if the observer never runs.

**Hardcoded values**
> Search for the literal strings Signal, Audit, $297, $997, $9,240, $11,550, and $97
> outside src/config and src/content. Replace each with a reference and show the diff.

**Six reordered**
> The six are out of order. Core Build is order 1 at the base and Follow Up Automatically
> is order 6 at the top. Sort by the order field, never by array position.

**Signal+ climbing**
> Signal+ appears somewhere it should not. It belongs in exactly four places: one --steel
> line under How it works, one FAQ answer, /signal-plus, and the footer. Remove the rest.

**Calculator crept onto the build table or /build**
> Remove every checkbox, selector, and running total from the pricing build table and from
> /build. Both publish prices, they do not let visitors price themselves.

**Unrequested additions**
> Remove anything I did not ask for: testimonial carousels, newsletter signups, chat
> bubbles, trust badges, logo clouds.

**Quality pass**
> Screenshot at 1440px and 390px. Name the three weakest things about the current design
> and fix only those.

---

## Review checklist before you call it done

- [ ] Every price on the site matches `brand.ts`, and `brand.ts` matches the pricing
      workbook
- [ ] Fonts are Plus Jakarta Sans. IBM Plex renders nowhere.
- [ ] No uppercase text anywhere, including eyebrows and labels. Eyebrows are pills.
- [ ] Every primary button is `--amber` with `--ink` text. No white text on amber.
- [ ] Dark sections are the brand gradient. Flat `--ink` is never a background.
- [ ] The homepage renders exactly ten sections, in the order given in 00-START-HERE.md
- [ ] The Math, before/after, testimonials, and guarantee copy all still exist, each in its
      new home, unchanged apart from product names and prices
- [ ] Nothing sits between The Six and Pricing
- [ ] The credentials line renders in the hero and nowhere else
- [ ] The word "Calibration" appears nowhere in the rendered output
- [ ] A reader can learn what Signal is, what it includes, and both prices without leaving
      the homepage
- [ ] `/signal` 301s to `/#signal`, `/pricing` 301s to `/#pricing`, `/calibration` 301s to
      `/build`, and no page anywhere exists whose job is to explain Signal or list prices
- [ ] Header nav Signal / The Six / Pricing are anchors, not routes
- [ ] The footer has no "Calibration pricing" or "Signal" page links
- [ ] The Signal block shows three example rows, not a row per seat count
- [ ] The six system names in `six.ts` and the four names in `components.ts` match exactly,
      character for character
- [ ] The build table adds up: six rows sum to $11,550, and $9,240 is 20% off that
- [ ] No sentence on the site promises a result
- [ ] No hidden-pricing phrases anywhere
- [ ] The six render in order 1 through 6, base to top, on all three variants
- [ ] The Industries section renders nothing and leaves no gap
- [ ] `/industries/functional-medicine` returns 404
- [ ] `/calibration` 301s to `/build`
- [ ] Signal+ appears in four places and no more
- [ ] Neither the pricing build table nor `/build` has interactive pricing
- [ ] Section padding is identical on every section of every page
- [ ] Keyboard focus is visible everywhere, and the SixStack detail expansion is reachable
      by keyboard
- [ ] `prefers-reduced-motion` kills the hero load-in
- [ ] `{{WEBSITE_CANCELLATION_TERMS}}` and `{{TEXT_ALLOWANCE_POLICY}}` still render as
      tokens, so you cannot ship without answering them
