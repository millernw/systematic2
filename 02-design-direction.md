# 02 — Design Direction

> Use this file when building any UI component, page layout, or visual element.

---

## Visual Vibe

**Clean, light, product-forward, confident, systematic.**

Anchor reference: **owner.com** — near-white background, generous whitespace, obvious "here's what you get," benefit-grouped navigation, big proof numbers, minimal clutter. This is a **catalog of clear products**, not an agency brochure. The look should feel like a well-run store shelf where every item has a name and a price.

**Do NOT** replicate the current goSystematic.com dark forest theme. We are keeping the brand greens but moving to a **light, airy** system.

---

## Theme

**Light theme only.** Near-white backgrounds, dark text, green accents. No dark mode for launch.

---

## Color Palette

Brand greens pulled live from goSystematic.com. Reframed for a light theme.

**Brand source colors (exact, from goSystematic.com):**
- Signature bright lime: **`#C5FF47`** (confirmed)
- Deep forest green (current site background): **`#273427`** (confirmed)
- Muted green: `#4B634B` · Darker green: `#304030` (confirmed)

**Light-theme palette to build with:**

| Role | Hex | Notes |
|---|---|---|
| Page background | `#FFFFFF` | Primary near-white, owner.com-clean |
| Section background (alt) | `#F5F8F4` `[suggested — confirm]` | Very light green-tinted panel for banding |
| Ink / body text | `#1A241C` `[suggested — confirm]` | Near-black derived from the forest green |
| Primary green (buttons, links, accents) | `#0E7A5A` `[suggested — confirm]` | Readable mid-emerald; the forest `#273427` is too dark for buttons on white |
| Primary green (hover/darker) | `#0B6B4F` `[suggested — confirm]` | |
| Deep forest (headlines / dark blocks) | `#273427` | Brand-exact; use for occasional dark feature blocks or emphasis text |
| Bright lime accent | `#C5FF47` | Brand-exact. Use SPARINGLY — highlight bars, stat underlines, active chips, small flourishes. **Never** as body text or button text on white (fails contrast). Best on the deep forest `#273427` for a punchy pill/badge. |
| Border / hairline | `#E4EAE4` `[suggested — confirm]` | Card borders, dividers |
| Muted text | `#5C6B5E` `[suggested — confirm]` | Sub-labels, captions |

**Usage rules:**
- Green (`#0E7A5A`) is the primary action color — buttons, highlights, section accents.
- Lime (`#C5FF47`) is a spotlight color, used in small doses for energy (owner.com uses its accent this way).
- Keep the canvas white and calm; let the products and proof numbers carry the color weight.

> Action item: confirm whether the `[suggested]` derived greens match the intended brand feel, or pull an official brand hex sheet if one exists.

---

## Typography

- **Style:** Clean, modern sans-serif. Confident and precise — not playful, not condensed.
- **Headlines:** Large and bold, generous size jumps, clear hierarchy. This is where the confidence lives.
- **Body:** Comfortable, readable, plain.
- **Suggested pairing `[suggested — confirm]`:** a geometric/neo-grotesque sans (e.g., Inter, Geist, or similar) for both headline and body, using weight and size for hierarchy rather than a second family. Single-family keeps it clean and systematic.
- Generous whitespace and line-height throughout. Let sections breathe.

---

## Reference Sites

- **owner.com** *(primary — emulate)* — What we like: light and airy, product-forward, obvious what you get, benefit-grouped nav, big case-study proof numbers (e.g., "+$192,000 / Sales growth / Mattenga's Pizzeria"), a hero conversion tool (their AI report). Our audit is the equivalent of that hero tool. Minimal clutter.
- **goSystematic.com** *(brand color source only)* — Pull the greens (`#C5FF47`, `#273427`), but **not** the dark theme or layout.

## Sites to AVOID looking like
- Generic marketing-agency sites with vague service copy, stock "team collaborating around a laptop" photography, and no visible pricing. The whole point of this rebuild is to look like the opposite of that.
- The current dark goSystematic.com theme — we are explicitly moving away from it.

---

## Proof / Stat Card Styling
Model directly on owner.com's stat cards: a **big number**, a **short label**, and a **business name**. Ours show system/marketing outcomes (e.g., "0 → full member CRM / went from no system to a member database / Chamber of Commerce") rather than restaurant sales. Big, bold, scannable.

---

## Animation
**Subtle.** Gentle fade/rise on scroll, smooth hover states on cards and buttons, soft transitions. Nothing expressive or attention-grabbing — the design should feel calm and confident, letting the products and numbers do the work.

---

## Imagery
- **Photography** of real businesses and customers where possible (owner-operators, storefronts, real customer results). Avoid generic stock.
- Product/component cards use **small clean icons**, not photos.
- Until real photography is supplied, use restrained, high-quality placeholders — never cheesy corporate stock.
- **Functional medicine avoidance:** no clinical/EHR-screenshot imagery and no stock "doctor pointing at a tablet" shots; keep it warm and practice-owner-focused.
