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

- **There is one product, called Signal.** It has a one-time build and a monthly
  subscription. The build has no brand name. If you write the word "Calibration" anywhere
  in rendered output, that is a defect.
- **The homepage carries the whole offer at decision depth.** Both prices in the hero, the
  six systems with prices, and enough to decide to contact us without clicking anything.
  That is not the same as every detail: reference material a buyer reads after deciding,
  like the inclusion list and the add-on catalogue, belongs on `/build`. Components are not
  on the homepage at all.
- The six systems sort by their `order` field, never by array position. Core Build is 1 at
  the base and the other five rest on it. The order is the argument.
- The six names in `six.ts` and the four names in `components.ts` overlap exactly on
  purpose. Never reword one side. The repeated name is what makes the $97 entry point read
  as the same product at a smaller size.
- One shared `Section` component owns all vertical padding. Never set padding on an
  individual section. When spacing looks wrong the cause is a competing class.
- Signal has one price that scales by seats, not tiers or packages. Render the seat rows as
  a reference table and the inclusion list once. Nothing is selectable, nothing is gated.
- The pricing build table and `/build` publish prices and are read-only. No checkboxes, no
  totals, no estimator.
- Signal+ appears in exactly four places: one line under How It Works, one FAQ answer,
  `/signal-plus`, and the footer. Nowhere else, ever.
- Industry pages are all unpublished. The nav item and homepage section render nothing and
  leave no gap. `/industries/[slug]` 404s for every seed.
- `{{WEBSITE_CANCELLATION_TERMS}}` and `{{TEXT_ALLOWANCE_POLICY}}` are unresolved
  decisions. Render both tokens literally. Do not write a plausible sentence in either
  place.
- Never render internal hours, cost, margin, or effective hourly rate. They are not in this
  repo and must not be invented.

## The live site is the design reference

`docs/01-design-system.md` was re-derived from the live gosystematic.com CSS on 2026-08-17.
Several rules in older copies of these documents are dead. If you are about to do any of
the following, you are rebuilding a site that no longer exists:

- Setting an eyebrow or a label in IBM Plex Mono, or in uppercase. Eyebrows are **pills**:
  rounded-full, 11px, weight 700, sentence case. There is no uppercase text on this site.
- Using IBM Plex Sans or IBM Plex Sans Condensed. Display and body are **Plus Jakarta Sans**
  at weight 800 and 400.
- Capping border radius at 4px. Radii in use are 9999px pills, 24px cards, 12px buttons.
- Making a primary button emerald. **Buttons are `--amber` #FCD34D with `--ink` text.**
  Emerald is the ground, amber is the thing you click. Never white text on amber.
- Using flat `--ink` as a section background. Dark sections are the **brand gradient**.
- Replacing cards with hairline lists. **Cards are the container idiom.** The old "lists
  beat cards" rule applied to a site with no images and no interactive modules, and it no
  longer applies.
- Removing photography. The site uses real small-business photography on purpose.

## `prompts/`

Instructions for the human operator. Not a task list. Do not execute anything in it unless
asked to.
