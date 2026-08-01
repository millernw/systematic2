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
1. Design tokens, IBM Plex loaded in all three roles, the type scale
2. The shared Section component that owns vertical padding
3. src/config/brand.ts and every file in src/content/, contents exactly as specified
4. Header and Footer
5. The hero, copy verbatim from 03-content.md, with SixStack variant="hero"
6. SixStack with all three variants stubbed, hero variant fully built
7. Empty labeled placeholders for the remaining homepage sections in the order given in
   00-START-HERE.md
8. The /industries/[slug] route, functional, returning 404 for all five unpublished seeds

Before you write code, state your hero layout plan in two sentences and confirm the five
color tokens and three typefaces you are using. Then build.
```

---

## Prompt 2, Two options

```
Read the "Two options" section of 03-content.md and the layout rules in
01-design-system.md.

Build it. Two columns split by a vertical hairline on desktop, stacked on mobile. Mono
labels, body copy beneath, one closing line in --steel. No icons, no cards, no third
column for us, no comparison table.

Keep it compact. This section is a headline, two short blocks, and one line. If it is
taller than the Signal section, it is wrong.
```

---

## Prompt 3, The Six

```
Read the "The Six" section of 03-content.md, the six.ts data in 04-data-files.md, and the
signature element spec in 01-design-system.md.

Build the section and finish SixStack variant="detail". Dark section, --ink background.
Headline and intro left, stack right on desktop, stack full width on mobile.

Each layer always shows its mono label and expands on hover, tap, and keyboard focus to
reveal plainQuestion and brokenSignal. Bands narrow slightly toward the top. Bottom two
lit in --live, top layer at 30% opacity. Sort by the order field, never by array position.

The closing line about Delivery stays exactly as written.
```

---

## Prompt 4, Signal

```
Read the "Signal" section of 03-content.md.

Build it and finish SixStack variant="product". Headline and body left, the product
surface right: a flat labeled rectangle with the six as mono rows and one --live dot.
Flat means no browser chrome, no traffic-light dots, no shadow, no perspective.

Then the three mono-labeled lines, verbatim.
```

---

## Prompt 5, How it works

```
Read the "How it works" section of 03-content.md and steps.ts in 04-data-files.md.

Three steps, horizontal with hairline dividers on desktop, stacked on mobile, mono step
numbers, duration in mono under each heading. Numbering is appropriate here because these
are genuinely sequential.

Include the --steel line about Signal+ beneath the steps. It gets no link and no button.
Do not add a fourth step.
```

---

## Prompt 6, Pricing

```
Read the "Pricing" section of 03-content.md, the pricing structure in 02-architecture.md,
and brand.ts, included.ts, components.ts, and noSurprises.ts in 04-data-files.md.

Four stacked blocks, hairline separated, all --paper, no cards. The structure spec in
02-architecture.md is exact, especially this: do not build three tier columns each
repeating a feature list. One row of tier options, one shared inclusion list rendered
once, one two-row table of what changes.

The No Surprises block is body-size type with real spacing. It is not fine print.
```

---

## Prompt 7, Not ready for Signal

```
Read the "Not ready for Signal" section of 03-content.md.

Build it deliberately subordinate to the pricing section above: --paper background,
body-size heading rather than display size, no buttons, one text link. It should read like
something a reader finds after deciding, not a competing choice.

Do not add it to the header nav. Do not build a Signal versus Component comparison.
```

---

## Prompt 8, Proof, Industries, FAQ, CTA

Run as one prompt, or split if quality drops.

```
Read the Proof, Industries, FAQ, and Final CTA sections of 03-content.md and faqs.ts in
04-data-files.md.

Proof: placeholders only, no statistics of any kind including placeholder statistics. Left
column mono list of what was built, right column narrative and attribution.

Industries: renders only published entries. None are published, so it must return null and
leave no heading, spacing, or empty container. Confirm in your reply that it renders
nothing today.

FAQ: accordion, hairline dividers, no cards, a plus that rotates to a minus. Render
{{WEBSITE_CANCELLATION_TERMS}} literally, do not write around it.

Final CTA: full width --ink, left aligned, one headline, one line, one button, no form.
Build it as a reusable Cta component, it appears on four pages.
```

---

## Prompt 9, /calibration

```
Read the /calibration section of 03-content.md and calibrationItems.ts in 04-data-files.md.

Build the page. Reuse Section, Cta, and every token.

Critical: the full list is read-only. No checkboxes, no selectors, no running total, no
estimate language anywhere on the page. The two worked examples go above the full list
because they do more work than the list does.

Never render internal hours, cost, margin, or effective rate. Those do not exist in your
data files and must not be invented.
```

---

## Prompt 10, /signal-plus and /components

```
Read the /signal-plus and /components sections of 03-content.md, plus signalPlus.ts and
components.ts.

Build both pages from existing components. Neither goes in the header nav. /signal-plus is
linked from one FAQ answer and the footer only. /components is linked from the pricing
section, the downsell section, and the footer.

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

**Cards returned**
> Replace that card grid with a single-column list separated by 1px --steel hairlines at
> 20% opacity, mono label per row. Cards are doing no work here.

**Tier columns returned**
> Pricing is showing a feature list per tier again. Render included.ts once, outside the
> tier selector. The only per-tier values are people and texts.

**Spacing collapsed**
> Section padding is inconsistent. Find every class competing with the shared Section
> component, remove them, and confirm 120px desktop and 72px mobile everywhere.

**Hardcoded values**
> Search for the literal strings Signal, Calibration, Audit, $297, $497, $697, $97, and
> $50 outside src/config and src/content. Replace each with a reference and show the diff.

**Six reordered**
> The six are out of order. Delivery is order 1 at the base, New Leads is order 6 at the
> top. Sort by the order field, never by array position.

**Signal+ climbing**
> Signal+ appears somewhere it should not. It belongs in exactly four places: one --steel
> line under How it works, one FAQ answer, /signal-plus, and the footer. Remove the rest.

**Calculator crept onto /calibration**
> Remove every checkbox, selector, and running total from /calibration. The page publishes
> prices, it does not let visitors price themselves.

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
- [ ] No sentence on the site promises a result
- [ ] No hidden-pricing phrases anywhere
- [ ] The six render in order 1 through 6, base to top, on all three variants
- [ ] The Industries section renders nothing and leaves no gap
- [ ] `/industries/functional-medicine` returns 404
- [ ] Signal+ appears in four places and no more
- [ ] `/calibration` has no interactive pricing
- [ ] Section padding is identical on every section of every page
- [ ] Keyboard focus is visible everywhere, and the SixStack detail expansion is reachable
      by keyboard
- [ ] `prefers-reduced-motion` kills the hero load-in
- [ ] `{{WEBSITE_CANCELLATION_TERMS}}` still renders as a token, so you cannot ship
      without answering it
