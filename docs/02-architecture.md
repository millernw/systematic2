# Architecture

## Principle

Copy and prices are data, not markup. Nothing in a component is a literal product name,
price, or sentence of marketing copy. This exists because the product names and prices
are still moving, and because the same sections have to render industry pages later from
different data.

If you find yourself typing "Signal" or "$297" inside a `.tsx` file, stop.

## File structure

```
src/
  config/
    brand.ts              product names, tiers, prices, policy strings
    meta.ts               page titles and descriptions, one entry per route
  content/
    six.ts                the six systems
    buildRows.ts          the homepage build price table
    addOns.ts             the add-ons, /build only
    included.ts           what every Signal subscription includes
    steps.ts              Audit, Build, Run
    components.ts         the four Component entry offers
    testimonials.ts       real named client quotes, plus credentials
    caseStudies.ts        /work entries, built-lists still unresolved
    beforeAfter.ts        the four Now/After pairs
    noSurprises.ts        the transparency list
    faqs.ts               FAQ entries
    industries.ts         industry page data, all unpublished
  components/
    Section.tsx           the shared section wrapper, owns vertical padding
    SixStack.tsx          the signature element, one interactive variant
    Header.tsx
    Footer.tsx
    Cta.tsx               the final CTA block, reused across pages
    sections/             one file per homepage section
  pages/  (or app/)
    index
    build
    signal-plus
    components
    industries/[slug]
```

Literal contents of every file in `src/content/` and `src/config/` are in
`04-data-files.md`. Use them exactly.

The shared Section component is specified once, under "The section component" further down
this file. Every section on every page uses it. No section sets its own padding and no
page-level CSS overrides it.

## Routing

| Route | Purpose | In nav? |
|---|---|---|
| `/` | Homepage. Carries the whole offer at decision depth. | Wordmark |
| `/build` | The six in full, worked examples, add-ons. Read-only. | No, linked from pricing |
| `/components` | The four Component offers in detail | No, linked from pricing, the downsell, and the footer |
| `/signal-plus` | Signal+ services and prices | No, linked from one FAQ answer and the footer |
| `/industries/[slug]` | Industry funnel pages | Only when a published entry exists |
| `/diagnostic` | The Scorecard. Every button on the site points here. | No, it is the CTA target |
| `/work` | Case studies. The proof page. | No, under More and linked from Proof |
| `/about` | Who builds this. | Yes |
| `/media`, `/contact` | Company pages, no offer content | Under More |

### Three pages are deleted

This is the fix for the scattered-offer problem, and it is not optional.

| Old route | Becomes | Why |
|---|---|---|
| `/signal` | 301 to `/#signal` | Its job is now the homepage Signal section |
| `/pricing` | 301 to `/#pricing` | Its job is now the pricing sub-block of that section |
| `/calibration` | 301 to `/build` | The name is retired and the content moved |

After round three, `#the-six` and `#pricing` are ids on sub-blocks **inside** the `#signal`
section rather than ids on sections of their own. The redirects are unaffected; an anchor
does not care what element carries it. Do not recreate the sections to give the anchors a
home.

**All three were still returning 200 on 2026-08-19**, two rounds after this table was
written. `/signal` serves an entirely separate old page. Each holds a different fragment of
the offer, which is exactly why a reviewer had to visit several pages to work out what was
being sold. This is the first thing round three ships.

Do not recreate them under new names. No `/how-it-works`, no `/what-you-get`, no `/plans`.
If a page's job is to explain Signal or to list prices, that page is `/`.

The footer must lose its "Calibration pricing" and "Signal" links and point at the homepage
anchors instead. `/components` and `/signal-plus` stay in the footer.

Every remaining subpage is optional reading. If a fact only exists on a subpage, it is in
the wrong place. The subpages hold detail and depth, never the offer itself.

Header nav: Signal, Pricing, About, plus Industries only when at least one industry is
published. "The Six" leaves the nav in round three, because it is now a sub-block of Signal
and two nav items pointing into one section is noise.

**Exactly one `--amber` button**, "Get my free Six-Point Scorecard". The header rendered a
second button, "Audit", as of 2026-08-19. Delete it. The Scorecard is the only call to
action on this site and a second header button competes with it.

The header is sticky, `--paper` at 95%, with a 12px backdrop blur and a hairline bottom
border.

## Industry pages

Build the machinery now, publish nothing.

`industries.ts` exports typed objects with: `slug`, `name`, `published` (boolean),
`metaTitle`, `metaDescription`, `heroHeadline`, `heroSub`, `triedBoth` (two
industry-specific versions of the two options), `sixOverrides` (a broken-signal line per
factor id), `componentIds`, `coexistsWith` (the software that industry already runs, such
as an EHR), and `faqs`.

Seed five entries with `published: false` and empty copy fields: `functional-medicine`,
`food-service`, `hospitality`, `non-profit`, `hvac-auto`.

Rules:
- `/industries/[slug]` returns 404 for any entry with `published: false`
- The header nav item and the homepage Industries section render only published entries,
  and return null entirely when there are none. No empty heading, no reserved space
- An industry page is a **self-contained funnel page**, not a subpage. It will be an ad
  and search destination, so it renders its own hero, two-options, six, Signal, how it
  works, pricing, components downsell, FAQ, and CTA. A visitor must be able to convert
  without ever seeing the homepage
- Industry pages compose from the **same section components** as the homepage with
  different data. Never create parallel components. The offer does not change by industry,
  only the language and which components are featured
- Publishing an industry is: fill the copy fields, flip the boolean. Nothing else

## Data shapes

```ts
type SixSystem = {
  id: "core" | "getfound" | "website" | "nevermiss" | "calendar" | "followup";
  order: 1 | 2 | 3 | 4 | 5 | 6;   // 1 = base of the stack
  label: string;                   // mono, uppercase in render
  price: string;                   // "$2,800"
  required?: boolean;              // Core Build only
  plainQuestion: string;
  brokenSignal: string;
  whatItIs: string;                // full paragraph, /build only
};
```

Always sort by `order`, never by array position. Core Build is 1 at the base and the other
five rest on it. The order is the argument: the foundation is the part owners skip, and the
website they would have bought first is sitting at 3 with the largest price on it.

There is no `Tier` type any more. Signal has one price set by a rule, and the rule sentence
is the price. `signalExamples` is three illustrations of that rule, never a package list.
Never render them as selectable tiers, cards, or columns, and never expand them into a row
per seat count.

## The Signal section, and the pricing block inside it

Round three collapsed three sections into one. `#signal` is **one** `<Section>` containing
three sub-blocks. One eyebrow pill at the top of the section and none between the blocks;
block A's heading is the section's `h2` and blocks B and C open with an `h3`. That single
structural fact is what makes the reader experience one argument instead of three.

`spec-check.js` asserts the section contains exactly one `h2`. Three `h2`s means the three
old sections came back.

**Block A, what it is.** Existing eyebrow, the `h2`, its body paragraph, the Signal
interface screenshot, and the four cards as a single row of four rather than two by two. The
before/after module is gone from here; it is on `/build`.

**Block B, `#the-six`.** `h3`, body paragraph, `<SixStack variant="detail" />` with prices on
the bands, then the concession line. The detail panel renders `plainQuestion` and
`brokenSignal` only. It does **not** render `whatItIs`, and after round three it does not
render the "what gets built" prose either. Both are `/build` material.

**Block C, `#pricing`.** Two figures, not three blocks of cards. Roughly a quarter of its
former size.

1. **Signal monthly.** `$297` in display type, the seat rule in one sentence, three
   `signalExamples` rows under "For example". Nothing selectable, nothing gated, no
   monthly/annual toggle. The twenty-item inclusion list is on `/build`.
2. **The build.** `$9,240` in display type and the comparison sentence, which already
   carries $11,550 against $9,240 in one line. **`buildRows.ts` no longer renders on the
   homepage.** The two-column table, its `20% off` pill, the "lines coming off" line and the
   closing contrast line all move to `/build`. `buildRows.ts` stays in `src/content/`; only
   its homepage consumer goes away.
3. **`noSurprises.ts` no longer renders on the homepage.** In its place, one `--steel` line
   built from two sentences already inside it. The full list renders on `/build`, at body
   size with real spacing, not as fine print.

**One** text link to `/build`, not two. Then one `--amber` button closing the section.

**Components do not appear in this section or anywhere on the homepage.** They live on
`/components`, linked from one FAQ answer and the footer. A homepage that sells two things
makes a first-time visitor choose before they can.

## The section component

One component owns vertical rhythm: 80px desktop, 40px mobile, stepping 40 / 56 / 64 / 80
across breakpoints, max width 1240px with 40px side padding. It also owns the scroll-reveal
entry animation, which is why no section implements its own. When section spacing or reveal
timing looks wrong, the bug is a competing class, not a missing value.

It takes `background` (`"cream" | "cream-panel" | "gradient"`), `eyebrow` (rendered as a
pill), and children. Note that `"ink"` is no longer a background option. Flat `--ink` is a
text color; dark sections are the brand gradient.

Block order is Signal monthly, then the build. The subscription is the product and it is the
smaller number. Leading with the build fee makes this read like an agency proposal.

## Signal+ containment

Signal+ appears in exactly four places: one `--steel` line at the end of How It Works, one
FAQ answer, the `/signal-plus` page, and the footer. It gets no nav item, no pricing
block, no homepage section, no button, and no comparison against Signal. This is a
commercial requirement: it is only sold to customers already live on Signal, and putting
it in the initial buying decision costs the primary sale.

## Never render

Internal hours, internal cost, margin figures, or effective hourly rate. These exist in
the source pricing workbook and must never reach a page or a data file.
