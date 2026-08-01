# Design System

This is a specification, not a suggestion. Every color and type decision on the site
derives from this file.

## Color, non-negotiable

The brand color is EMERALD. There is no blue in this project.

  --cream #F7F5EF   --cream-panel #EFEAE0   --paper #FFFFFF
  --ink #0A1512     --ink-panel #10241E     --muted #5C6B65
  --emerald-lite #34D399   --emerald #059669   --emerald-fill #04735A
  --emerald-deep #04463A   --emerald-tint #E6F5EE
  --honey #E0A33C (accent only, never on a button or a link)
  --slate #2E4A57 (diagram strokes only)

Buttons and any fill carrying white text use --emerald-fill, because --emerald fails
contrast with white small text.

Never write a hex value or a Tailwind color-name utility in a component. Use the tokens.
If you catch yourself typing blue, indigo, sky, cyan, violet, or purple, stop.

Rules:
- `--live` appears nowhere except the six-layer visual. Not on buttons, not on badges.
- Dark sections use `--ink` background with `--paper` text. Exactly two sections on the
  homepage do this: The Six, and the Final CTA.
- Hairlines are `--steel` at 20% opacity, 1px.
- No gradients. Not in backgrounds, not in text, not in borders.

## Typography

IBM Plex, three roles. The choice is deliberate: Plex was commissioned for a systems
company. Do not substitute Inter, Geist, Space Grotesk, Satoshi, or any display serif.

| Role | Face | Treatment |
|---|---|---|
| Display | IBM Plex Sans Condensed | 600 weight, tracking -0.02em, sentence case |
| Body | IBM Plex Sans | 400 weight, 17px base, 1.6 line height |
| Utility | IBM Plex Mono | 500 weight, uppercase, 12px, letter-spacing 0.08em |

Utility mono is used for: section eyebrows, the six factor labels, step numbers, prices,
data labels, and small table headers. Nowhere else.

Type scale, desktop:
- Display XL (hero headline): 56px
- Display L (section headline): 40px
- Display M (subsection heading): 26px
- Body: 17px
- Body small: 15px
- Utility mono: 12px

Mobile: hero 36px, section headline 30px, subsection 22px, body stays 17px.

Sentence case everywhere except mono utility text, which is uppercase. No Title Case
Headlines.

## Layout

- Max content width 1200px
- One shared section component controls vertical padding: 120px desktop, 72px mobile.
  Every section uses it. Inconsistent section padding is the most common defect in this
  build, so never set padding on an individual section.
- Border radius 4px maximum. Buttons, inputs, and containers all use it or use 0.
- Shadows: none over 8px blur, and prefer none at all.
- Everything left aligned. There is no centered text on this site, including the hero.
- Sections are separated by a 1px `--steel` hairline at 20% opacity, except where a dark
  section provides its own edge.
- Lists beat cards. When you have three to eight parallel items, build a single-column
  list with hairline dividers and a mono label per row. Reach for a card only when an
  item has an image, and no item on this site has an image.

## The signature element

The six factors render as a stacked ladder, base at the bottom, as one reusable
component `<SixStack />` with a `variant` prop. This is the only bold thing on the site
and it appears three times, which is what makes it read as an idea rather than a
decoration.

**`variant="hero"`** Compact. Labels only, no descriptions. Bottom two layers filled
`--live`, top layer at 30% opacity. One slow load-in on mount, then static. No looping.

**`variant="detail"`** Full width, on the dark section. Each layer is a horizontal band,
hairline separated, widest at the base and narrowing slightly toward the top so the
pyramid logic reads without drawing a literal triangle. Each band always shows its mono
label. On hover, tap, or keyboard focus it expands to reveal the plain question and the
broken signal. Bottom two lit `--live`, top at 30% opacity.

**`variant="product"`** The same six as labeled mono rows inside a flat rectangle
representing the product surface, with one `--live` dot on a single row. Flat means flat:
no browser chrome, no traffic-light dots, no shadow, no perspective.

The through-line: the six are the diagnosis, then they become the rooms of the product.

## Motion

Restrained. Permitted:
- One load-in sequence on the hero, under 600ms total
- Hover and focus states on interactive elements, 150ms
- The SixStack detail expansion, 200ms

Not permitted: scroll-triggered reveals on every section, parallax, counters that tick
up, marquees, autoplay anything, looping ambient animation.

Respect `prefers-reduced-motion` by rendering final states with no transition.

## Quality floor

Build to this without announcing it: responsive to 360px, visible keyboard focus on every
interactive element, real focus order, semantic headings in order, alt text on any image,
color contrast at least 4.5:1 for body text. `--steel` on `--paper` passes; `--steel` on
`--ink` does not, so use `--paper` at reduced opacity for de-emphasized text on dark
sections.

## Anti-patterns

These are what make a site read as machine-generated. Any one of them is a defect.

- Gradient mesh backgrounds, blobs, glows, glassmorphism, frosted panels
- Floating 3D cards, perspective tilts, shadows over 8px
- Emoji anywhere
- An icon grid where six features share generic line icons that mean nothing
- Stock photography, especially people at laptops
- A centered hero with a big headline and two buttons underneath
- The words Elevate, Unlock, Transform, Supercharge, Empower, Seamless, or the phrase
  "next level"
- Em dashes in copy
- An "AI-powered" badge
- Invented client logos, invented testimonials, invented statistics
- Cream backgrounds with a serif display face and a terracotta accent
- Numbered markers (01 / 02 / 03) on content that is not actually a sequence. On this
  site, only The Six and How It Works are sequences.
