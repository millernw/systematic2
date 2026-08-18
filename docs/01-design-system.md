# Design System

This is a specification, not a suggestion. Every color and type decision on the site
derives from this file.

**This file was re-derived from the live gosystematic.com on 2026-08-17 by reading computed
styles, not from memory.** The site had already moved past the original spec in several
ways. Where the live site and the old spec disagreed, the live site won, because it is the
thing that exists and it is better. If you are working from a copy of this document dated
before that, throw it away.

## Color

The brand color is EMERALD. There is no blue in this project.

  --cream #F7F5EF   --cream-panel #EFEAE0   --paper #FFFFFF
  --ink #0A1512     --ink-panel #10241E     --muted #5C6B65
  --steel #5C6B65   (alias of --muted)
  --emerald-lite #34D399   --emerald #059669   --emerald-fill #04735A
  --emerald-deep #04463A   --emerald-tint #E6F5EE
  --brand #04735A   --brand-lite #34D399   --brand-deep #04463A   --brand-tint #E6F5EE
  --honey #E0A33C   --live #E0A33C
  --amber #FCD34D   (the action color, see below)
  --slate #2E4A57 (diagram strokes only)

Never write a hex value or a Tailwind color-name utility in a component. Use the tokens.
If you catch yourself typing blue, indigo, sky, cyan, violet, or purple, stop.

### The action color is amber, not emerald

Every primary button on the live site is `--amber` `#FCD34D` with `--ink` text. Emerald is
the brand and the ground; amber is the thing you click. This is the single most important
color rule on the site and the easiest one to get wrong, because the old spec said buttons
were `--emerald-fill`. They are not. Emerald fill is for surfaces and gradients.

`--honey` and `--live` are the same value `#E0A33C` and are a *typographic* accent: the
hero's accented phrase and its underline. They are not `--amber` and they are never a
button.

### Brand gradient

Dark sections are not flat `--ink`. They are the brand gradient:

```
background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-fill) 40%, var(--emerald-deep) 100%);
```

with a soft radial highlight layered on top via `::before`:

```
radial-gradient(at 30% 20%, rgba(255,255,255,.28), rgba(52,211,153,.16) 40%, rgba(255,255,255,0) 75%)
```

Three sections use it: the hero, the guarantee, and the final CTA. Text on it is `--paper`.
Do not add a fourth without asking. Do not use flat `--ink` as a section background; it is a
text color now.

### Surfaces

| Surface | Use |
|---|---|
| `--cream` #F7F5EF | The page ground. Most sections. |
| `--cream-panel` #EFEAE0 | One band of contrast without going dark. The proof section. |
| `--paper` #FFFFFF | Cards only. |
| brand gradient | Hero, guarantee, final CTA. |

Hairlines are `rgba(6,78,59,.10)` on light, `--paper` at low opacity on the gradient.

## Typography

**Plus Jakarta Sans** for display and body. **IBM Plex Mono** is declared as `--font-mono`
and is currently used **zero times** on the live site. Do not reach for it. If you find
yourself setting an eyebrow or a label in mono, you are rebuilding the old site.

| Role | Face | Treatment |
|---|---|---|
| Display | Plus Jakarta Sans | 800 (extrabold), tracking -0.025em, sentence case |
| Body | Plus Jakarta Sans | 400, 17px base, 1.6 line height |
| Label / pill | Plus Jakarta Sans | 700, 10 to 11px, **sentence case, not uppercase** |
| Mono | IBM Plex Mono | Reserved for tabular numerics. Unused today. |

Type scale, desktop:
- Display XL (hero headline): 72px, line height 1.0
- Display L (section headline): 46px, line height 1.08
- Display M (subsection heading): 28px
- Body: 17px
- Body small: 15px
- Pill / label: 10 to 11px

Mobile: hero 34px, section headline 30px, subsection 22px, body stays 17px.

Sentence case everywhere, including labels and pills. There is no uppercase text on this
site. No Title Case Headlines.

## The pill

The pill replaced the mono eyebrow and it is now the site's most repeated element. It is a
`border-radius: 9999px` chip, 10 to 11px, weight 700, sentence case, with tight padding
(2px 8px to 4px 10px).

Three variants, and the variant carries meaning:

| Variant | Fill | Text | Border | Means |
|---|---|---|---|---|
| Section eyebrow | `--emerald-tint` | `--emerald-fill` | emerald at 30% | Where you are on the page |
| Emphasis | `--amber` | `--ink` | none | The number or fact that matters |
| Actor | amber tint / emerald tint | amber-700 / `--emerald-fill` | matching | Who does this step, "You" vs "We do this" |

The actor pill is a genuinely good invention on the live site. The How It Works steps label
each step "You" or "We do this," which sells the offer better than any sentence does. Keep
it and use it anywhere the division of labor is the point.

## Cards

**Cards are the container idiom on this site.** The old spec said lists beat cards. That was
true when the site had no images and no interactive modules. It is no longer true and it is
no longer the rule.

The card:

```
background: var(--paper);
border-radius: 24px;
padding: 32px;              /* 24px mobile */
border: 1px solid rgba(16,24,32,.08);
box-shadow: 0 4px 20px -2px rgba(10,21,18,.04), 0 16px 40px -8px rgba(10,21,18,.08);
```

Cards sit on `--cream`, never on `--paper`, or the edge disappears. Use an asymmetric grid
rather than equal columns: the live "four functional groups" section runs 7/5 then 5/7 on a
12-column grid, which reads as designed rather than generated.

Radii in use: 9999px pills, 24px cards, 12px buttons and inputs, 16px small panels. The old
"4px maximum" rule is dead. Do not apply it.

## Layout

- Max content width 1240px, 40px side padding
- Section padding: 80px desktop, 40px mobile, stepping 40 / 56 / 64 / 80 across breakpoints.
  One shared section component owns this. Never set padding on an individual section.
- Everything left aligned. There is no centered body text on this site.
- Sticky header: `--paper` at 95% with `backdrop-filter: blur(12px)` and a hairline bottom
  border. This is the one place blur is allowed.

## Imagery

**The hero carries a screenshot of the actual Signal interface**, not a photograph of a
person. The central claim of this business is one login instead of nine, and that claim is
abstract until the reader sees the login. A page of prose about software with no picture of
the software is asking to be believed rather than showing the thing. If no screenshot
exists, stop and say so; do not substitute a stock photo.

Elsewhere the site uses real photography. Warm, candid, small-business interiors with a person doing
the actual work, never a person at a laptop pretending to be a marketer. Photos are used
in the hero and as section punctuation, with rounded corners matching the card radius.

Photography is a deliberate reversal of the original spec. It is what makes the site feel
like it belongs to a real business in Columbia City rather than a template.

## Interactive modules

Four modules exist and are the site's actual differentiators. Reuse them. Do not rebuild
them and do not replace them with static content.

1. **The stack** (`<SixStack />`). A clickable six-level pyramid, base to top, with a detail
   panel that swaps on selection showing the question, what breaks without it, what gets
   built, and the price. **One variant, `detail`.** The old `hero` and `product` variants
   are retired: the hero uses photography, and the Signal section uses the before/after
   module, which is more concrete than a diagram. The stack appears once, where it is
   interactive and doing real work, rather than three times as decoration.
2. **The Math.** A live calculator with sliders where the visitor enters their own numbers
   and watches a monthly and annual figure move. See the constraint in Rule 2 below.
3. **Before and after.** Two columns of paired lines, a red ✕ against a green ✓, headed
   "Now" and "After."
4. **FAQ accordion.** Twelve entries, grouped under three headings (Money, The product,
   Working together), two columns on desktop and one on mobile. Rows collapse to about
   56px. All closed on load, hairline dividers, a plus that rotates. Numbers are padded to
   two digits: 01 through 12, never 010.

   Twelve entries is fine. Twelve entries at 108px per collapsed row, which is what the
   live site does, is not.

## Motion

Restrained but present. Permitted:
- A load-in sequence on the hero, under 600ms
- Scroll-triggered fade-and-rise on section entry, once, never repeating
- Hover and focus states, 150ms
- Stack selection and accordion expansion, 200ms

Not permitted: parallax, counters that tick up on scroll, marquees, autoplay video, looping
ambient animation.

Respect `prefers-reduced-motion` by rendering final states with no transition. The scroll
reveals in particular must be fully disabled, not merely shortened, or the page reads as
blank to anyone who has it set.

## Quality floor

Build to this without announcing it: responsive to 360px, visible keyboard focus on every
interactive element, real focus order, semantic headings in order, alt text on every image,
color contrast at least 4.5:1 for body text. `--amber` carries `--ink` text and passes;
never put white text on amber. `--steel` on `--cream` passes; `--steel` on the gradient does
not, so use `--paper` at reduced opacity for de-emphasized text there.

The interactive stack must be operable by keyboard: each level is a real button, arrow keys
move between levels, and the detail panel is an `aria-live` region.

## Mobile

Assume the reader is on a phone, standing up, between jobs. This section governs, and where
it conflicts with a desktop instruction elsewhere in this file, mobile wins.

Breakpoints: mobile under 768, tablet 768 to 1023, desktop 1024 and up.

### The rule that matters most

**Nothing important may require a tap to become visible.** On desktop, an interaction that
reveals detail is engaging. On a phone it is a wall, because the reader cannot see that
anything is behind it. Every collapse-by-default pattern on mobile must show enough in its
closed state to be worth opening.

### Hero

Stacks in this order, and the order is not negotiable:

1. Accent line and headline
2. Subhead
3. Price line
4. Primary button, full width
5. The product screenshot

The screenshot goes **below** the button, not above it. A phone screen fits roughly a
headline and one button above the fold, and the button must be in that space. The
screenshot is the reward for the first scroll, not the thing that pushes the CTA off screen.

Credential strip wraps to two lines, stays inside the gradient, does not become a list.

### Sticky CTA bar

Below 768px, a sticky bar pins to the bottom of the viewport from the moment the hero
button scrolls out of view: `--amber` button, full width minus 16px gutters, the label from
`BRAND.ctaLabel`, on a `--paper` bar at 95% with the standard 12px blur and a hairline top
border. It hides again when the final CTA section enters the viewport, so the reader never
sees two competing buttons.

This is the single highest-value mobile element on the site. A phone reader is one thumb
away from converting at every point in the page.

### The six-level stack

On desktop the stack is a pyramid with a detail panel beside it. On mobile that interaction
costs six taps to see six systems, and most readers will tap once and leave.

Below 768px, `SixStack` renders as a **vertical accordion**, base at the bottom preserved as
reading order 01 to 06 top to bottom. Every row always shows its number, label and price.
The first row, Core Build, is **open on load**; the rest are closed. Opening one does not
close the others.

No pyramid narrowing on mobile. Full-width rows.

### Everything else

- Multi-card sections stack to one column, full width, 24px card padding, 16px gaps
- The before/after module stacks as **paired rows**: the ✕ line and its matching ✓ line
  together, then the next pair. Never two separate columns of four, which breaks the pairing
  that makes the module work
- Pricing tables keep two columns, name left and price right. Never a horizontal scroll and
  never a card per row
- The FAQ goes to one column, groups intact, all closed on load
- Section padding 40px, gutters 16px
- Type: hero 34px, section headline 30px, subsection 22px, body stays 17px

### Quality floor

- Every tap target is at least 44 by 44 CSS pixels, including FAQ rows and accordion headers
- The page never scrolls horizontally at 360px. Wide content scrolls inside its own
  container, never the body
- Tap targets never sit closer than 8px to each other
- Text never sits under the sticky bar: the page gets bottom padding equal to the bar height
- Do not rely on hover for anything. Hover does not exist here

## Anti-patterns

These are what make a site read as machine-generated. Any one of them is a defect.

- Gradients anywhere except the defined brand gradient. No mesh, no blobs, no glow, no
  glassmorphism beyond the one header blur.
- Floating 3D cards, perspective tilts, shadows other than the defined card shadow
- Emoji anywhere. The ✕ and ✓ in the before/after module are glyphs in a styled span, not
  emoji, and they are the only marks of their kind on the site.
- An icon grid where six features share generic line icons that mean nothing
- Stock photography of people at laptops. Real work, real places, or no photo.
- A centered hero with a big headline and two buttons underneath
- Uppercase text of any kind, including eyebrows and labels
- The words Elevate, Unlock, Transform, Supercharge, Empower, Seamless, or "next level"
- Em dashes in copy
- An "AI-powered" badge
- Invented client logos, invented testimonials, invented statistics
- White text on `--amber`
- Anything on mobile that needs a tap before the reader can tell it is worth tapping
- Numbered markers on content that is not a sequence. The stack, How It Works, and the FAQ
  are sequences. Nothing else is.
