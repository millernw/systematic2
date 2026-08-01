# Agent Instructions

Before any work on this project, read `docs/00-START-HERE.md`. It indexes five reference
documents and lists seven rules that take precedence over your own design and copy
judgment.

## Read the right document for the task

| Working on | Read first |
|---|---|
| Anything visual | `docs/01-design-system.md` |
| Structure, routing, components | `docs/02-architecture.md` |
| Any words on a page | `docs/03-content.md` |
| Config or content files | `docs/04-data-files.md` |

## The rules, short version

1. Copy comes from `docs/03-content.md` verbatim. Do not write it, do not improve it. If a
   section needs words that are not there, stop and ask.
2. No claims about results. No lead counts, revenue figures, growth percentages, or ROI,
   anywhere, including placeholders.
3. Every price is published. The strings "starting at", "contact us", "custom quote", "get
   a quote", "request a demo", and "from $" appear nowhere.
4. No product name or price is hardcoded in a component. Everything reads from
   `src/config/brand.ts` or `src/content/`.
5. `docs/01-design-system.md` is a spec, not a starting point. Do not substitute
   typefaces, add a color, or introduce anything from its anti-pattern list.
6. Do not add sections, features, or pages that were not asked for.
7. End every response by naming which of these rules your work touched and how you
   complied. One line each.

## Specific traps in this codebase

- The six factors sort by their `order` field, never by array position. Delivery is 1 at
  the base, New Leads is 6 at the top. The order is the argument.
- One shared `Section` component owns all vertical padding. Never set padding on an
  individual section. When spacing looks wrong the cause is a competing class.
- Pricing renders one shared inclusion list, not one per tier. Three columns of repeated
  features contradicts the claim the section exists to make.
- `/calibration` publishes prices and is read-only. No checkboxes, no totals, no estimator.
- Signal+ appears in exactly four places: one line under How It Works, one FAQ answer,
  `/signal-plus`, and the footer. Nowhere else, ever.
- Industry pages are all unpublished. The nav item and homepage section render nothing and
  leave no gap. `/industries/[slug]` 404s for every seed.
- `{{WEBSITE_CANCELLATION_TERMS}}` is an unresolved decision. Render the token literally.
  Do not write a plausible sentence in its place.
- Never render internal hours, cost, margin, or effective hourly rate. They are not in this
  repo and must not be invented.

## Lists beat cards

This site has no images, so a card is almost always the wrong container. Parallel items go
in a single-column list with hairline dividers and a mono label per row.

## `prompts/`

Instructions for the human operator. Not a task list. Do not execute anything in it unless
asked to.
