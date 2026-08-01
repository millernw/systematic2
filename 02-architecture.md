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
  content/
    six.ts                the six factors
    included.ts           what every Signal tier includes
    steps.ts              Audit, Calibration, Signal
    components.ts         the Component entry offers
    calibrationItems.ts   the published build price list
    noSurprises.ts        the transparency list
    faqs.ts               FAQ entries
    industries.ts         industry page data, all unpublished
  components/
    Section.tsx           the shared section wrapper, owns vertical padding
    SixStack.tsx          the signature element, three variants
    Header.tsx
    Footer.tsx
    Cta.tsx               the final CTA block, reused across pages
    sections/             one file per homepage section
  pages/  (or app/)
    index
    calibration
    signal-plus
    components
    industries/[slug]
```

Literal contents of every file in `src/content/` and `src/config/` are in
`04-data-files.md`. Use them exactly.

## The shared Section component

One component owns vertical rhythm. It takes `background` (`"paper" | "ink"`), `eyebrow`,
and children. Every section on every page uses it. No section sets its own padding, and no
page-level CSS overrides it. When section spacing looks wrong, the bug is a competing
class, not a missing value.

## Routing

| Route | Purpose | In nav? |
|---|---|---|
| `/` | Homepage | Wordmark |
| `/calibration` | The published build price list, read-only | No, linked from pricing |
| `/components` | The Component offers in detail | No, linked from the downsell and footer |
| `/signal-plus` | Signal+ services and prices | No, linked from one FAQ answer and the footer |
| `/industries/[slug]` | Industry funnel pages | Only when a published entry exists |
| `/about` | About | Yes |

Header nav: Signal, The Six, Pricing, About, plus Industries only when at least one
industry is published. One `--signal` button, "Get the audit".

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
type SixFactor = {
  id: "delivery" | "visibility" | "responsiveness" | "repeat" | "followup" | "newleads";
  order: 1 | 2 | 3 | 4 | 5 | 6;   // 1 = base of the pyramid
  label: string;                   // mono, uppercase in render
  plainQuestion: string;
  brokenSignal: string;
  systemLine: string;              // used in the pricing inclusion list
};
```

Always sort by `order`, never by array position. Delivery is 1 at the base, New Leads is
6 at the top. This order is load-bearing: the whole argument is that owners start at the
top and should start at the bottom.

```ts
type Tier = {
  id: "small" | "medium" | "large";
  name: string;
  people: string;      // "1 to 3 people"
  monthly: string;     // "$297"
  annual: string;      // "$2,851"
  texts: string;       // "2,000 texts/mo"
};
```

Support is uniform across tiers, so it is a single string on `BRAND`, not a per-tier
field. The pricing table's "what changes by tier" has exactly two rows: people and texts.

## Pricing section structure

Four stacked blocks, hairline separated, all on `--paper`, no cards:

1. **Signal.** A monthly/annual toggle showing both real figures. One row of three tier
   options, price and people count, one selected with a `--signal` underline as the only
   emphasis. Beneath it, ONE shared inclusion list rendered from `included.ts`, grouped
   under the six factor labels, that does not change when the tier changes. Then the
   two-row "what changes by tier" mono table.

   Do not build three columns each repeating a feature list. That layout communicates
   that the tiers are different products, which is the opposite of true, and the no-gating
   claim is the point of the section.

2. **Calibration.** The range in display type, the explanation, three mono-labeled lines,
   the closing contrast line, and a text link to `/calibration`. No calculator, no
   estimator, no running total anywhere.

3. **Components.** The full list from `components.ts` with mono prices right-aligned,
   hairline separated. Reactivate Campaign is a one-time fee and sits visually apart from
   the monthly items.

4. **No surprises.** Rendered from `noSurprises.ts` with a `--signal` marker per item.
   Body-size type, real spacing. This is not fine print and must not be styled as such.

## Signal+ containment

Signal+ appears in exactly four places: one `--steel` line at the end of How It Works, one
FAQ answer, the `/signal-plus` page, and the footer. It gets no nav item, no pricing
block, no homepage section, no button, and no comparison against Signal. This is a
commercial requirement: it is only sold to customers already live on Signal, and putting
it in the initial buying decision costs the primary sale.

## Never render

Internal hours, internal cost, margin figures, or effective hourly rate. These exist in
the source pricing workbook and must never reach a page or a data file.
