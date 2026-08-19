# Structure

**This file no longer contains copy.** Every word on the site lives in `src/content/`, and
that is the only place it lives. This file governs structure, order, placement and
treatment: what section goes where, what shape it takes, and what must never happen to it.

If you are looking for a sentence, it is in `src/content/`. If you want to know where that
sentence goes and what it may not become, it is here.

## Why it works this way

The same sentence used to exist in up to three places: this file, a content file, and
sometimes hardcoded in a component. Rule 1 used to read "copy comes from 03-content.md
verbatim", which was a rule fighting duplication rather than removing it. Three copies that
can disagree is the structural reason corrections kept getting silently undone.

The pre-refactor copy is preserved in `archive-03-content-preRefactor.md` as a historical
record. **Do not read it as a source of truth and never copy from it.** It is a snapshot,
and it starts going stale the moment `src/content/` changes.

## Rule 1, restated

Copy comes from `src/content/`. You do not write marketing copy for this site and you do
not improve the copy that exists. If a section needs words that are not in `src/content/`,
stop and ask.

## The content map

`{{CONTENT_FILE_MAP}}`

Render that token literally until the file list from the refactor is pasted in. It should
become a two-column table of section name to content module path, so a person editing one
section knows exactly which file to open.

---

# Homepage

Ten rendered sections. Industries renders nothing while unpublished and does not count.

**Order, and it is load-bearing:**

1. Hero
2. You are the marketing
3. Two options
4. Signal
5. The Six
6. Pricing
7. How it works
8. Proof
9. Industries, renders null
10. FAQ
11. Final CTA

Three ordering rules:

- **Signal comes before The Six.** The reader must know this is one product before seeing
  it has six parts, or the six read as a menu to shop from.
- **Pricing comes immediately after The Six**, with nothing between them. The reader has
  just seen exactly what gets built; the next question is what it costs.
- **How it works comes after Pricing.** By then the only open question is how to start, and
  the answer hands straight to the CTA.

## What is deliberately not on the homepage

Restoring any of these without removing its replacement recreates the problem the page was
rebuilt to escape: saying one thing in several places.

| Not here | Lives at |
|---|---|
| The Math calculator | `/diagnostic` |
| The pricing inclusion list, 20 items | `/build` |
| The Components block | `/components` |
| Three "how we price" cards | Collapsed into one `--steel` line |
| Three guarantee cards | Collapsed into the No surprises body |

## 1. Hero

Brand gradient. Text left, **a screenshot of the actual Signal interface** right. Not a
photograph of a person, not an illustration. If no screenshot exists, stop and say so.

Accent line in `--honey` with a hand-drawn underline, then headline, subhead, price line,
primary button, reassurance line beneath the button.

**Both prices appear here.** The build figure and the monthly. Published pricing is the
whole differentiator and half of it may not sit below the fold.

Credential strip: one line at the bottom edge, inside the gradient, `--paper` at 70%. Not a
section, no heading, no cards. It appears here and nowhere else on the page.

Mobile stacking order is fixed and specified in `01-design-system.md`: the button sits
above the screenshot.

## 2. You are the marketing

Eyebrow pill, headline with an emphasised phrase inline, two body paragraphs, one `--steel`
closing line.

The Math calculator is **not** in this section. It is on `/diagnostic`.

This section must not reopen with the sentence the hero already used.

## 3. Two options

Three cards: two dead-end cards on `--paper`, then the third-option card on emerald tint.
Each carries two pills, a sentence-case heading, body, and a closing line in `--steel`.

Compact. If it is taller than the Signal section, it is wrong. No icons, no comparison
table.

## 4. Signal

Anchor `#signal`. Eyebrow pill, headline, body, then four cards two by two. Four, not
three.

Then the before/after module inside this same section beneath the cards, with a subheading
only and no second eyebrow. Two columns on desktop; on mobile it stacks as **paired rows**,
each ✕ with its matching ✓, never two separate columns of four.

No SixStack here. The product variant is retired and the module takes its place.

## 5. The Six

Anchor `#the-six`. `--cream` background; this section is not dark.

`<SixStack variant="detail" />`, the interactive stack. Each band shows label and price;
selecting one swaps the detail panel to that system's question and what breaks without it.
Core Build carries a `Required` pill and is the only band that does. Sort by the `order`
field, never array position: Core Build is 1 at the base.

Do not render `whatItIs` here. It is long and belongs to `/build`.

The closing line conceding what the system does not fix is not optional and is not to be
softened. It is the most credible sentence on the page precisely because it concedes
something.

On mobile the stack becomes an accordion with Core Build open on load. Six taps to see six
systems is a wall.

## 6. Pricing

Anchor `#pricing`. Three blocks on `--cream`, card idiom. This section was once 34% of the
page; it must stay under a quarter of page height.

1. **Signal monthly.** Price in display type, the seat rule in one sentence, exactly three
   example rows under "For example", then a text link to `/build`. Three rows, never a row
   per seat count. Nothing selectable, nothing gated. No monthly/annual toggle.
2. **The build.** Price in display type, the comparison sentence, then the build table with
   an amber `20% off` pill on the final row. One `--steel` line, the closing contrast line,
   a link to `/build`. No calculator, no checkboxes, no running total.
3. **No surprises.** Heading, one body paragraph, then the list. Body-size type with real
   spacing. This is not fine print.

Do not lead with the build fee. Components appear nowhere in this section.

## 7. How it works

Three steps, horizontal with hairline dividers on desktop, stacked on mobile. Each step
carries its actor pill: amber tint for "You", emerald tint for "We do this". Numbering is
appropriate because these are genuinely sequential.

One `--steel` line about Signal+ beneath, with no link and no button. Do not add a fourth
step.

## 8. Proof

Four testimonial cards on `--cream-panel`, with initials avatars. The quotes are real and
attributed. Do not edit them and do not invent a fifth.

The credentials line is **not** here; it is in the hero. Do not render it twice.

One quote contains a statistic a client volunteered about their own business. It stays
because it is theirs and it is attributed. Do not lift that number out to use elsewhere.

## 9. Industries

Renders only published entries. None are published, so it returns null and leaves no
heading and no spacing.

## 10. FAQ

Twelve entries, grouped under three headings, two columns on desktop and one on mobile,
rows about 56px, all closed on load. Hairline dividers, a plus that rotates. Numbers padded
to two digits: 01 through 12, never 010.

## 11. Final CTA

Brand gradient, left aligned, no form. Headline, one amber button, one line beneath.

---

# /diagnostic

The Scorecard. The only lead capture on the site and every button points at it.

**`06-scorecard-flow.md` governs this page.** Read it before touching anything here. It
covers the five screens, the four questions, what is captured, and why the result is never
gated behind an email.

Same brand as the homepage: Plus Jakarta Sans, sentence-case pill eyebrows, amber buttons,
cards, brand gradient.

**Permanently banned on this page**, all of which it carried once: emoji, any invented
value stack, any fabricated statistic, "3 Secrets" framing, and the retired pillar names
Delivery, Visibility, Responsiveness, Repeat Business and New Leads.

It scores the six systems from `six.ts`. The Math calculator lives here, and its average
customer value default is $300.

---

# /work

The proof page. A reader who believes the offer but not yet the person.

One card per client, stacked. Each has three parts in order: who they are, **what got
built**, and what they said. The built-list must use the same system names as the homepage,
because a reader who just learned the six needs to recognise them here. That recognition is
the page's entire conversion argument.

**Rule 2 applies hardest here.** A case study describes what was built, never what it
produced. The only numbers permitted are ones a named client says about their own business,
in quotation marks, attributed. Everyone else's case studies are unverifiable figures; a
plain list of what was actually built reads as true.

No logo wall, no results strip, no star-rating graphics, no industry filter.

The "Read the full story" detail pages are **not yet specified**. Spec them before building
them out further.

---

# /about

Nathan Miller. For a solo operator this page carries more weight than it would at an
agency: the reader is deciding whether to hand their marketing to one specific person.

Leads with the solo concession before the reader thinks of it. Then three background cards,
the origin story in first person, and where he is based.

Local specificity is a conversion asset for this audience. Never soften it to "serving
businesses nationwide."

---

# /build

For the reader who wants every line before talking to anyone. Not in the nav, not on the
primary path.

The six in full from `six.ts`, one card each, showing label, price and `whatItIs`. This is
the only place `whatItIs` appears. Then the two worked examples, then the add-ons, then the
honesty block.

Everything here is read-only. No checkboxes, no selectors, no running total, no estimate
language. The page publishes prices; it does not let visitors price themselves.

The inclusion list moved here from the homepage and sits behind "See everything included".

`/calibration` 301s here.

**This route currently 404s on the live site**, while the homepage pricing section links to
it twice. Fix the route.

---

# /components

The four entry offers, one card each with full descriptions. Then the "what a Component
deliberately does not do" block, then the "if you move to Signal" block.

Do not soften or cut the second block. It is the most honest thing on the site and it is
what makes the third one land.

---

# /signal-plus

Not sold to new customers and never in a first proposal. It appears in exactly four places
on this site: one line under How it works, one FAQ answer, this page, and the footer.

The service list, then three cards. No Signal versus Signal+ comparison.
