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

**Round three, 2026-08-19.** The page was rebuilt again, against a different test. Round two
asked "is every fact present?" Round three asks "does a stranger reach the button?" Those
produce different pages, and the second one is the one that converts. The reasoning is in
`DECISIONS.md`.

Seven rendered sections. Industries renders nothing while unpublished and does not count.

**Order, and it is load-bearing:**

1. Hero
2. Stakes
3. How it works, the plan
4. Signal, the offer
5. Proof
6. Final CTA
7. FAQ
8. Industries, renders null

Four ordering rules:

- **The plan comes before the offer.** A reader decides whether working with you sounds
  survivable before they evaluate what you sell. Three steps, two of which we do, answers
  that in eight seconds. It sat at 66% scroll and it was the cheapest thing on the page to
  move.
- **Exactly one stakes section.** The page used to make the pain argument three times before
  naming the product: the hero, "You are the marketing", and the two dead ends. One section
  now carries all of it.
- **The whole offer is one section.** Signal, The Six and Pricing were three sections making
  one argument across 45% of the page. They are now three sub-blocks under one heading, with
  no eyebrow pill between them, so the reader experiences one beat instead of three.
- **Proof sits immediately before the Final CTA**, with nothing between them. The FAQ used to
  wedge 1,300px in there.

**The FAQ is below the Final CTA**, deliberately off the conversion path. It answers
objections for the reader who scrolls past the button. It must never sit between Proof and
the CTA again.

## Budget

These are limits, not targets to grow into. The page is 10,748px and 1,771 words as of
2026-08-19, and each number below is roughly what it must become.

| | Before | After |
|---|---|---|
| Rendered sections | 10 | 7 |
| Words in `main` | 1,771 | ~1,050 |
| Page height at 1280px wide | 10,748px | ~6,700px |
| Largest gap between CTAs | 3,825px | under 1,900px |
| Offer sections as share of page | 45% | under 30% |

## What is deliberately not on the homepage

Restoring any of these without removing its replacement recreates the problem the page was
rebuilt to escape: saying one thing in several places.

| Not here | Lives at |
|---|---|
| The Math calculator | `/diagnostic` |
| The pricing inclusion list, 20 items | `/build` |
| The Components block | `/components` |
| The before/after module, "Same business. Different week." | `/build` |
| The six-row build price table | `/build` |
| The "No surprises" block and its eight-item list | `/build` |
| The add-ons link | `/build` |
| Each system's "what gets built in Signal" prose | `/build` |
| Three "how we price" cards | Collapsed into one `--steel` line |
| The credential strip | Moved out of the hero, into How it works |

## The three copy decisions, all settled 2026-08-19

Rule 1 held. Three places in this restructure needed words the page did not already have in
the right position. **All three are approved and none is a token any more.** Two are pure
relocations of sentences already in `src/content/`; one is the single new sentence in the
round.

| Was | Resolved by | Kind |
|---|---|---|
| `{{HERO_H1}}` | A new sentence, carried verbatim in `../prompts/07-restructure.md`, which is where it enters `src/content/`. Not repeated here, because this file holds no sentences | **New.** The only one |
| `{{FINAL_CTA_HEADLINE}}` | "You stop being the part that breaks.", relocated from the last sentence of the hero subhead | Move |
| `{{STAKES_CLOSING_LINE}}` | "Someone builds the system for your business, then it runs.", relocated from inside the deleted third-option card | Move |

Both relocated sentences already exist in `src/content/`. Neither is rewritten in transit and
neither is duplicated: each leaves its old position in the same change that gives it the new
one.

**The homepage renders no unresolved token after round three.** `{{WEBSITE_CANCELLATION_TERMS}}`
and `{{TEXT_ALLOWANCE_POLICY}}` are still open, but neither is on this page: they live on
`/components` and `/build`. `spec-check.js` fails on unresolved tokens, and on the homepage
that check must now pass.

## 1. Hero

Brand gradient. Text left, image right. ~760px.

One job: say what this is, for whom, and what changes, then offer one button. Nothing else
may sit in this section. Every element below is the complete list.

- Headline, `{{HERO_H1}}`, approved 2026-08-19 and carried in
  `../prompts/07-restructure.md`. The hand-drawn `--honey` underline treatment applies to the
  final two words. The separate honey accent line above the headline is deleted; its sentence
  moved to Stakes.

  **The headline deliberately echoes the Stakes headline two sections down**, which is "You're
  the system. That's why your marketing stops when you get busy." Hero states the resolution,
  Stakes names the problem, same verb. If either sentence is ever rewritten, check the other.
  This pairing is not decorative and it is the reason the hero can be this short.

- Subhead, the existing "We build the system that answers for you…" sentence, **keeping
  "Then we run it."** That sentence is doing load-bearing work now: the approved headline says
  what the system does and not who operates it, so the subhead is the only place the hero says
  a person runs it. Software the owner operates is Dead End 1 in the next section. Do not cut
  it.

  Its *final* sentence, "You stop being the part that breaks.", still leaves the hero and
  becomes the Final CTA headline.
- Price line, one line, both figures. The existing line **with its first clause removed**,
  because that clause is now the headline.
- One amber button. One reassurance line beneath it.
- The image. **Keep the photograph.** The product screenshot moves to the Signal section,
  where "One login instead of nine" actually appears and a screenshot earns its place. This
  settles the contradiction between this file and `00-START-HERE.md`, which said photography.
  Photography wins in the hero.

**The credential strip is no longer in the hero.** It renders in How it works. This is the
single change that makes the hero one-focus.

The header renders **one** button, the Scorecard. The second header button, "Audit", is
deleted. Nav anchors are Signal, Pricing and About; `#the-six` and `#pricing` survive as ids
on sub-blocks inside the Signal section so the deleted routes have somewhere to land.

Mobile stacking order is fixed and specified in `01-design-system.md`: the button sits above
the image.

## 2. Stakes

`--paper`. ~620px, and it must not exceed the Hero. This is the section that has to feel
light, because it is the one the reader is most willing to abandon.

Absorbs the whole of the old "You are the marketing" and the whole of the old "Two options".

- Eyebrow pill, unchanged from the old "You are the marketing" section.
- Headline: **"You're the system. That's why your marketing stops when you get busy."**,
  moved intact from the hero. It is the best sentence on the site and it is a stakes
  statement, not a hero statement.
- The "Every lead you get runs through your memory…" paragraph, moved.
- The "That's not a discipline problem…" paragraph, moved.
- The two dead ends as **two plain lines**, not cards. Keep the "Bought the software" line
  and the "Hired someone" line. Delete the four pills, the two card containers, and the two
  follow-on paragraphs beginning "And it is still your job" and "And you are paying monthly".
- Closing `--steel` line: **"Someone builds the system for your business, then it runs."**,
  relocated from the third-option card this section deletes. Approved 2026-08-19. It is the
  handoff into How it works, which is the next section and which answers "how".

  It survives its card because it is the only sentence in that card doing work the hero does
  not already do. The rest of the card, including its two pills and its "Built for you, then
  it runs 24/7" line, is deleted.

**Deleted outright, and the copy does not go anywhere:** the old "You're not bad at marketing.
You are the marketing, and you have a business to run." headline; the old "The gap isn't
between you and better marketing…" paragraph; the entire third-option card including its
"The Solution" and "Done for you" pills and its "Built for you, then it runs 24/7" line.

Zero cards. Zero pills except the eyebrow. No icons, no comparison table. If this section
renders a card, it is wrong.

No CTA here. The plan is next and it carries one.

## 3. How it works, the plan

Anchor `#how-it-works`. ~850px. Moved from position seven.

Content is unchanged from the live section: eyebrow, the "Three steps to success (and we do
two of them for you)" headline, three steps horizontal with hairline dividers on desktop and
stacked on mobile, each carrying its actor pill, amber tint for "You" and emerald tint for
"We do this". Then the "Your total time investment: about an hour." line and the `--steel`
Signal+ line with no link and no button.

Do not add a fourth step. Do not renumber.

**The credential strip renders here**, beneath the Signal+ line: one line, `--steel`, no
heading, no cards, no section of its own. This is the guide-credibility beat and it belongs
next to the plan, not scattered. It appears here and nowhere else on the page.

Then one amber button.

## 4. Signal, the offer

Anchor `#signal`. **One section, three sub-blocks, one eyebrow pill at the top and no
eyebrow pill between the blocks.** ~1,900px, and under 30% of total page height.

The eyebrow, headline and body of block A are the section's heading. Blocks B and C open with
an `h3` and nothing else. That is what turns three arguments into one beat.

### Block A, what it is

- Existing eyebrow pill, the "One login instead of nine." headline, and its body paragraph.
- **The screenshot of the actual Signal interface renders here.** If no screenshot exists,
  stop and say so rather than substituting a photo. The claim is one login instead of nine
  and this is the sentence it belongs to.
- The four cards, Built for you / Run for you / Improved over time / Sits alongside, as a
  **single row of four**, not two by two. Heading and one line each, as they already are.
- **Delete the before/after module.** "Same business. Different week." and its four ✕/✓
  pairs move to `/build`. It is the fourth time the page makes the pain argument and the
  reader is long past pain by here.

### Block B, what is in it, sub-anchor `#the-six`

- `h3`, the "Six systems. Five of them sit on the sixth." line and its body paragraph.
- `<SixStack variant="detail" />`, unchanged. Prices stay on the bands. Core Build carries
  the `Required` pill and is the only band that does. Sort by the `order` field, never array
  position.
- The detail panel keeps the system's question and **"What breaks without this system"**.
  **Delete "What gets built in Signal"** from the panel. It is the longest prose on the page
  and `/build` already has to carry the full description.
- The closing line conceding what the system does not fix is not optional and is not to be
  softened. It is the most credible sentence on the page precisely because it concedes
  something.
- On mobile the stack becomes an accordion with Core Build open on load.

### Block C, what it costs, sub-anchor `#pricing`

- `h3`, the "Two numbers. Both published." line and its body paragraph.
- The monthly: price in display type, the seat sentence, exactly three example rows under
  "For example". Three rows, never a row per seat count. Nothing selectable, nothing gated,
  no monthly/annual toggle.
- The build: price in display type and the existing comparison sentence, which already
  carries the $11,550 against the $9,240. **Delete the six-row build table and its `20% off`
  pill**; the sentence makes the same argument in one line. Delete the "Already have a site
  that works?" paragraph and the "An agency quote is one number…" line. All three move to
  `/build`.
- **Delete the entire "No surprises" block**: its heading, its body paragraph and its
  eight-item list. In its place, one `--steel` line assembled from two sentences that already
  exist in it: "We don't stop until it's right." and "Everything runs month-to-month, so
  there's no long-term contract." The full list moves to `/build`.
- **One** text link to `/build`, not two. The "See everything included" link survives; the
  add-ons link is deleted because `/build` carries both.

Do not lead with the build fee. Components appear nowhere in this section.

Then one amber button, closing the section.

## 5. Proof

`--cream-panel`. ~770px. Unchanged in content, moved so that **nothing sits between it and
the Final CTA**.

Four testimonial cards with initials avatars. The quotes are real and attributed. Do not edit
them and do not invent a fifth. The location line and the `/about` link stay.

One quote contains a statistic a client volunteered about their own business. It stays
because it is theirs and it is attributed. Do not lift that number out to use elsewhere.

The credential strip is **not** here and is not in the hero. It is in How it works. Do not
render it twice.

## 6. Final CTA

Brand gradient, left aligned, no form. ~500px.

- Headline: **"You stop being the part that breaks."**, relocated from the last sentence of
  the hero subhead. Approved 2026-08-19.

  This is the explicit statement of success: what the owner's week looks like once this
  works. **Rule 2 applies at full force here**, and this sentence passes because it describes
  the owner's experience rather than a result the business will get. If it is ever replaced,
  the replacement must clear the same bar: no lead counts, no revenue, no percentages, no
  "more customers".

  It also closes the loop the page opens. Stakes says "You're the system"; the last line on
  the page says you stop being it.
- **Delete the current headline**, "Find out which of six is costing you the most." It
  restates the problem at the exact moment the page should be describing the resolution.
- One amber button. One line beneath. Both unchanged.

## 7. FAQ

Anchor `#faq`. **Below the Final CTA.** ~1,300px.

Otherwise unchanged: twelve entries, grouped under three headings, two columns on desktop and
one on mobile, rows about 56px, all closed on load. Hairline dividers, a plus that rotates.
Numbers padded to two digits, 01 through 12, never 010.

Twelve is not the problem and never was. Its position was.

## 8. Industries

Renders only published entries. None are published, so it returns null and leaves no heading
and no spacing.

---


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

## What round three moved here

This page is now the decision-depth page. Everything the homepage stopped carrying arrives
here, and none of it is rewritten in transit. Order on the page:

1. **The six in full**, one card each with label, price and `whatItIs`, as before. Each card
   also absorbs its **"what gets built in Signal"** prose, deleted from the homepage stack's
   detail panel.
2. **The six-row build price table**, with its `20% off` pill on the final row, moved intact
   from the homepage pricing block. With it: the "Already have a site that works?" paragraph
   and the "An agency quote is one number with no line items…" line.
3. The two worked examples and the add-ons, as before.
4. **The "No surprises" block** in full: its heading, its body paragraph and its eight-item
   list, moved intact from the homepage. This is the honesty block; it is not fine print and
   it renders at body size with real spacing.
5. **The before/after module**, "Same business. Different week.", with all four ✕/✓ pairs,
   moved intact from the homepage Signal section. On mobile it stacks as **paired rows**,
   each ✕ with its matching ✓, never two separate columns of four.

Everything here is read-only. No checkboxes, no selectors, no running total, no estimate
language. The page publishes prices; it does not let visitors price themselves.

`/calibration` 301s here. So does the deleted `/pricing`, unless the anchor `/#pricing`
is the better landing, which it is: see the routing section of `02-architecture.md`.

This route returned 404 at the 2026-08-18 baseline and now returns 200. That is fixed. It is
the reason the round-three cuts have somewhere to go.

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
