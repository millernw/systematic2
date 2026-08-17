# Content

Every word on the site lives here. Use it verbatim. Do not improve it, do not add
adjectives, do not add closing lines, do not invent statistics. If a section needs words
that are not here, stop and ask.

Copy that belongs in a data file is in `04-data-files.md` instead of this one. This file
covers section headings and prose.

## Read this before you touch anything

This file was reconciled against the **live gosystematic.com on 2026-08-17**. The live site
is ahead of the old documents in two ways and behind them in one.

**Ahead, and kept:** the hero's emotional opening, the "you are the marketing" section, the
Math calculator, the before-and-after module, real named testimonials, and the Get It Right
guarantee. None of these existed in the old docs. They are the best things on the site.
Every one of them survives this rewrite. Three of them move inside another section rather
than standing alone, which is a layout change, not a deletion.

**Behind, and changed:** the live site still sells the old offer. It shows the diagnostic
six (Delivery, Visibility, Responsiveness, Repeat, Follow-Up, New Leads), a separate "four
functional groups of your build" section, a `Calibration` build priced `$3,000 to $7,000`,
and the phrase "starts at," which is a banned string. Those four things are what this
rewrite replaces.

**Design idiom:** eyebrows are pills, not uppercase mono. Labels are sentence case, not
uppercase. Containers are cards. Dark sections are the brand gradient, not flat `--ink`.
All of that is specified in `01-design-system.md`, which was itself re-derived from the live
CSS. If an instruction below says "pill" or "card," that is the live site's language and it
is correct.

## The one thing this page sells

Signal. One product, one page. It has a one-time build price and a monthly price, the way
any serious software has an implementation fee and a subscription. The homepage carries
the entire offer end to end. A reader never has to visit a second page to understand what
they are buying or what it costs.

There is no second product on this site. Components are a smaller way into the same
product and are always visually subordinate to it. Signal+ is not sold here at all.

## Ten sections, and why it is ten

The homepage is **ten rendered sections**. The live site has fourteen and an earlier draft
of this file also had fourteen. Four were cut, and none of the copy was lost. Every cut
removed a *second* section making an argument some other section was already making:

| Was its own section | Now lives in | Why |
|---|---|---|
| The Math | Inside "You are the marketing" | Same argument. One says the follow-up stops, the other prices it. They are one thought and the calculator is the payoff of the paragraph above it. |
| Same business. Different week. | Inside "Signal" | It shows what having the product is like, which is what the Signal section exists to argue. As a standalone it was a third consecutive pain section. |
| Guarantee | Inside Pricing, block 4 | "We keep fixing it," "zero hidden charges," and "you keep your data" are no-surprises claims. They belong beside the prices they qualify, not in a gradient section of their own. |
| Not ready for Signal | Inside Pricing, block 3 | The page had a Components block in pricing and a Components section after it. One of them was always going to be redundant. |

The reader's path is now: here is your problem, here is what it costs you, here is why the
two obvious fixes failed, here is the product, here is what is in it, here is what it costs,
here is how you start, here is who else did it, here are your objections, here is the
button. Nothing in that sequence is said twice.

**Do not restore a cut section without removing its replacement.** The failure mode this
page is being rebuilt to escape is saying the same thing in four places.

---

## Header

Sticky, `--paper` at 95%, backdrop blur, hairline bottom border.

Nav: Signal, The Six, Pricing, About. Industries appears only when published.
Button: Get my free Six-Point Audit

**Signal, The Six, and Pricing are anchor links to sections of the homepage.** They are
`/#signal`, `/#the-six`, and `/#pricing`. They are not pages and they must never become
pages again. About is a real page. The "More" dropdown holds Work, Media, and Contact.

This is the single most important instruction in this document. The reason a reviewer said
the offer was scattered and they had to visit multiple pages is that `/signal`,
`/pricing`, and `/calibration` each exist today and each holds a different piece of the
offer. All three are deleted and redirected. If you find yourself building a page whose job
is to explain Signal or to list prices, stop: that page is the homepage.

Smooth-scroll the anchors and offset for the sticky header.

---

## 1. Hero

Brand gradient background, photograph on the right, text left. Not centered.

Accent line, in `--honey` with a hand-drawn underline beneath it, above the headline:
You're the system.

Headline: That's why your marketing stops when you get busy.

Subhead: Every lead you get runs through your memory and your phone. We build systems that
answer for you, follow up when they go quiet, ask for the review, and bring back last
year's customers. We build it around your business and then we run it. You stop being the
part that breaks.

Product line, set apart from the subhead, slightly smaller, `--paper` at 80%:
Signal is a done-for-you marketing system for small business. One build fee, then $297 a
month. We build it, and then we run it.

Primary button: Get my free Six-Point Audit
Line beneath the button, small: About an hour. You keep the findings whether or not you
hire us.

The live hero says "it starts at $297 a month." Rule 3 forbids "starts at" and the new
offer does not need it, because both prices are now published. The line above replaces it.
Do not put it back.

### Credential strip

A single line at the bottom edge of the hero, inside the gradient, `--paper` at 70%, small.
Not a section. No heading, no padding of its own, no cards.

15+ years in marketing · 3 businesses founded and operated · Chamber member and client ·
Columbia City, Indiana

Full testimonials come much later on the page, which is correct, but a reader deciding
whether to keep scrolling should not have to take a stranger entirely on faith. This line
costs one row and buys that.

---

## 2. You are the marketing

Eyebrow pill: The part nobody says out loud

Headline: You're not bad at marketing. You are the marketing, and you have a business to
run.

The phrase "You are the marketing" is emphasized within the headline, as it is on the live
site.

Body: Every lead you get runs through your memory. You meant to call the guy from Tuesday.
You know there are people who asked about pricing and never heard back, though you couldn't
tell anyone how many. Your best weeks are the ones where the most gets dropped, because
busy is exactly when the follow-up stops.

Second paragraph: That's not a discipline problem. It's what happens when the system is a
person.

This section is live copy and it is the best writing on the site. Do not rewrite it.

### The Math, inside this section

The calculator follows the second paragraph directly, with no new section wrapper, no
section padding, and no eyebrow of its own. It gets a subheading only.

Subheading: Here is what that costs.

Line above the module: Using your own numbers. Adjust the inputs and watch the total move.

The calculator itself is the existing live module. Inputs: average customer value, missed
calls per week, unanswered inquiries per month, and a close-rate slider defaulting to 1 in
5. Outputs: estimated lost clients per month, monthly drag, annual impact.

Closing line beneath the module: Nothing about this gets worse suddenly. It just keeps
costing about that much every month, and the month after, and you will never see it on a
statement.

Then the section's closing line, set apart in `--steel`: The gap isn't between you and
better marketing. It's between the work getting done and anyone following up on it.
Everything below closes that gap.

**Rule 2 note, read this.** Rule 2 forbids claims about results. This module is the one
place the site puts a dollar figure on screen, and it survives the rule only because of
three things that are not optional: every number comes from the visitor's own inputs, the
output is labeled "estimated," and it describes the cost of the current situation rather
than a result Signal will produce. Never add a projection of what Signal would recover.
Never pre-fill the inputs with flattering defaults. The moment this module implies an
outcome, it is a rule violation and it has to come down.

---

## 3. Two options

Eyebrow pill: The usual choices

Headline: You have probably tried both of these.

Intro: Most small business owners get forced into one of two dead ends before discovering
there's a third way.

Three cards. Keep this section compact: it is a headline, three cards, and nothing else. If
it is taller than the Signal section, it is wrong.

**Card one.** Pills: `Dead end 1`, `High effort`
Heading: Bought the software
Body: Powerful and cheap, and now learning it, building it, and running it is your job. Most
of it is still sitting half set up.
Closing: And it is still your job. The subscription renews whether you finished setting it
up or not.

**Card two.** Pills: `Dead end 2`, `High cost`
Heading: Hired someone
Body: Real marketing help costs more than a small business can justify, and the ones priced
for a small business rarely deliver work worth keeping.
Closing: And you are paying monthly for someone else's hours, with no way to check what they
were spent on.

**Card three**, visually distinct, emerald tint rather than paper. Pills: `The Solution`,
`Done for you`
Heading: There is a third option.
Body: Someone builds the system for your business, then it runs. You are not learning
software and you are not renting a marketing department.
Closing: Built for you, then it runs 24/7

---

## 4. Signal

Anchor: `#signal`

New section. It does not exist on the live site and it is the most important addition in
this rewrite. The reader has just been told there is a third option, and the next thing
they must learn is that the third option has a name and is one product. If the six arrive
before this section, they read as a menu to shop from, which is the exact failure this
rewrite exists to fix.

Eyebrow pill: The product

Headline: One login instead of nine.

Body: Most owners have leads in a form service, texts on a personal phone, reviews in one
dashboard, email in another, and a spreadsheet holding it together. Signal is the one
place all of it runs, built around how your business actually works.

Four cards, two by two, each a sentence-case label and a line of body:

**Built for you.** Not a blank tool you have to configure. We build it, using systems that
already work, adapted to your business.

**Run for you.** We keep it running, watch the parts you do not have time to watch, and fix
what drags.

**Improved over time.** Your system is not finished the day it goes live. We add what the
business needs next as it comes up.

**Sits alongside.** It works with the software you already run your business on. It does
not replace it.

### Same business. Different week., inside this section

The before-and-after module follows the four cards, with no new section wrapper and no
eyebrow of its own. It is the demonstration of everything the four cards just claimed.

Subheading: Same business. Different week.

Two columns. Left headed `Now (the broken loop)` with the sub-label "Manual memory drag."
Right headed `After (automated)` with the sub-label "Runs continuously." Paired rows, ✕ on
the left in red, ✓ on the right in emerald.

The four pairs are in `04-data-files.md`. This is live copy and it stays as written.

This module replaces `<SixStack variant="product" />`, which is retired. It is more
concrete than a diagram of the product, and the stack already appears in full two sections
below, where it is interactive and doing real work.

---

## 5. The Six

Anchor: `#the-six`

This section replaces two live sections at once: the diagnostic six pillars, and the "four
functional groups of your build." One section now does both jobs, because the six things we
diagnose and the six things we build are finally the same six things. That collapse is the
whole point of the rewrite.

Eyebrow pill: What gets built

Headline: Six systems. Five of them sit on the sixth.

Intro: Every build starts with the Core Build, because a business running out of one
login is what makes everything above it possible. It is also the one most owners skip,
because a website is easier to picture than a working pipeline.

`--cream` background, as on the live site. This section is not dark.

Reuse `<SixStack variant="detail" />`, the interactive stack already built for the pillars.
Same component, same interaction, new data. Each level shows its label and price, and
selecting it swaps the detail panel to that system's question, what breaks without it, and
what gets built. Core Build carries a `Required` pill.

The six labels, questions, broken signals, and prices are in `04-data-files.md`.

Closing line under the stack, set apart:
None of this fixes what happens after somebody becomes a customer. If the work itself is
the problem, more leads make it worse, and we will tell you that before we sell you
anything.

That closing line is the successor to the live site's Delivery Principle. It is not
optional and it is not to be softened. It is the most credible sentence on the page
precisely because it concedes something.

---

## 6. Pricing

Anchor: `#pricing`

Pricing comes immediately after The Six. The reader has just finished looking at exactly
what gets built, and the very next question a real buyer has is what it costs. Nothing goes
between these two sections. An earlier draft had the before-and-after module and the
guarantee sitting in this gap, which delayed the price by two full screens at the moment of
peak interest.

Eyebrow pill: Pricing

Headline: Two numbers. Both published.

Intro: Agencies quote you after three meetings. Software makes you guess which tier has
the thing you need. Here is all of it.

Four blocks. Cards on `--cream`, not hairline-separated rows.

### Block 1, Signal monthly

Label: Signal, monthly

Price, in display type: $297 a month

Line directly beneath: That covers the first three people. Every person after that is
$100, and it stops at $997 no matter how big you get.

Line above the examples: Every seat gets the whole system. No feature is ever locked
behind a higher price, at any size.

Examples heading: For example
Three rows only, from `signalExamples` in `04-data-files.md`. These are illustrations of
the sentence above, not tiers, not plans, not packages, and not selectable. Do not expand
them back into a row per seat count.

Inclusion list heading: Included at every price
The list is in `04-data-files.md`, grouped under the six system labels.

Line beneath, in `--steel`: Support is the same at every price. One business day, and
usually faster.

### Block 2, the build

Label: The build, one time

Price, in display type: $9,240 for all six systems

Line directly beneath: The six priced separately come to $11,550. All six together is
$9,240. Unless you already have a website worth keeping, five systems costs more than six.

That second sentence is checkable against the table directly beneath it, which is the
entire point of it. Do not restate it as "all six costs less than five," because that is
only true when the system being dropped is not the website. The caveat is what makes the
claim survive a reader who does the arithmetic.

Build table heading: What each system costs on its own
The rows are in `04-data-files.md`. The complete build row is the last row and is
emphasized with an amber pill reading `20% off`.

Three cards:

**The list is the list.** Every system is the same price for every customer. Your quote is
not based on what we think you can afford.

**Lines come off.** Already have a site that works? That line comes off. Reviews handled?
That comes off too. The audit is where that happens, and it usually brings the number down.

**You see it first.** You get the itemized list with prices before anything starts. Nothing
gets built that you did not approve.

Closing line, set apart in `--steel`:
An agency quote is one number with no line items and no way to check it. This is the
opposite of that.

Text link: See the add-ons and what they cost → /build

The live site says the build "runs $3,000 to $7,000" under the name Calibration. Both the
range and the name are replaced by the block above.

### Block 3, Components

This block absorbs the standalone "Not ready for Signal" section. It is the only place
Components appear on the homepage.

Label: Components, monthly

Heading: Not ready for the whole system?

Body: A Component is one focused tool that solves one problem and stops there. We build it
free, it goes live in days, and it is $97 a month. If you later move to Signal, the $97
stops that month, you are never billed for both, and the work already done is not torn out
and rebuilt.

The list is in `04-data-files.md`. Name and short description only. The full descriptions
live on `/components`.

The live site says Components start "at $97/mo." All four are exactly $97, so the word
"starting" is both banned and inaccurate. State the price flatly.

Text link: See the four components → /components

Keep this block visually quieter than blocks 1 and 2. It is a fallback, not a third option
of equal weight.

### Block 4, No surprises

This block absorbs the guarantee section.

Label: No surprises

Heading: We don't stop until it's right.

Body: We build your marketing operating system around fixed scopes and published pricing.
If the system isn't working the way we scoped it, we keep fixing it, no extra charge, no new
invoice. We do not offer refunds. What we do instead is keep working until it is right.
Everything runs month-to-month, so there's no long-term contract locking you in while we get
it right.

Three cards:

**Get It Right Commitment.** We rebuild, retune, and adjust the build until it matches what
we scoped, at no additional cost.

**Zero hidden charges.** Every line item is pre-approved from our published price catalog.
No hourly runaway costs or unexpected add-ons ever.

**You keep your data.** You keep all audit findings, campaign data, and lead records
regardless of subscription status.

Then the list from `noSurprises.ts`. Body-size type, real spacing, not fine print.

Button at the bottom of the section: Get my free Six-Point Audit

The live version of the first card says "the Calibration build." It says "the build" now.

---

## 7. How it works

Placed after pricing on purpose. The reader now knows what it is and what it costs, and the
only question left is how to start. This section answers that and hands off to the CTA.

Eyebrow pill: How it works

Headline: Three steps to success (and we do two of them for you)

Steps are in `04-data-files.md`. Each step gets an actor pill: `You` on step one,
`We do this` on steps two and three.

Closing lines beneath the steps: Your total time investment: about an hour. We handle the
build, the connections, and the ongoing operation.

One line beneath that, in `--steel`, smaller than body, no link and no button:
Later, once the system is running, Signal+ adds the hands-on work: ads, content, campaign
management. That is a conversation after you are live, not part of signing up.

Step two on the live site is called Calibration. It is called Build now. There is one
product name on this site.

---

## 8. Proof

Eyebrow pill: Built for you, then it runs 24/7

Headline: Four local businesses, and what they'll tell you about the work.

Intro: These clients hired me to build things for them. What they'll tell you is what I'm
like to work with.

Four testimonial cards on `--cream-panel`. Quotes, names, businesses, and initials-avatars
are in `04-data-files.md`. These are real and attributed. Do not edit the quotes.

Text link: More about who builds this

The credentials that used to sit beneath these cards now run as a single line in the hero,
so a reader sees them in the first screen rather than the eighth. Do not render them twice.

One quote contains a statistic the client volunteered about their own review rating. A
quoted, attributed client statement is not the site making a claim, so it stays. Do not add
statistics of our own anywhere near it, and do not pull the number out of the quote to use
as a headline figure.

---

## 9. Industries

Renders only published entries. None are published, so this section returns null and
leaves no heading or spacing behind. It does not count toward the ten.

When entries exist:

Eyebrow pill: Industries
Headline: The six are the same everywhere. What breaks them is not.
Body: We adapt the system to how your industry actually gets customers.

---

## 10. FAQ

Eyebrow pill: Straight answers

Headline: Frequently asked questions.

Accordion, numbered 01 upward, hairline dividers, a plus that rotates to a minus. Entries
are in `04-data-files.md`.

---

## 11. Final CTA

Brand gradient section, left aligned, no form.

Headline: Find out which of the six you are actually missing.
Button: Get my free Six-Point Audit
Line beneath: Free, about an hour, you keep the findings.

The live version has a photo with an overlay pill reading `Running` and the line "Your
systems answer leads and follow up even when your hands are full." Keep it.

---

# /build

This page exists for one reason: the reader who wants to see every line before they talk
to anyone. It is not part of the primary path and it is not in the nav.

## Header block

Eyebrow pill: The build

Headline: Every line of a build, published.

Body: The six systems on the homepage are the whole build for most businesses. This page
is the rest: what each system actually includes, and the add-ons for businesses that need
something beyond the six. Every price is the same for every customer. Your quote is the
lines your business actually needs, which is what the audit is for.

## The six, in full

Read-only, from `six.ts`, in order, showing `label`, `price`, and `whatItIs` in full, one
card each. This is the only place `whatItIs` appears. No checkboxes, no selectors, no
running total anywhere on the page.

## Worked examples

Two cards side by side on desktop, stacked on mobile.

**Example one, already has a site worth keeping**
Core Build, Get Found, Never Miss a Lead, Fill the Calendar, Follow Up Automatically.
Total: $8,250

**Example two, everything**
All six, at the complete build price.
Total: $9,240

Line beneath both, in `--steel`: Same list, same prices. The difference is what they
already had.

## Add-ons

Read-only, from `addOns.ts`. Intro line above the list: These are not part of a standard
build. Most businesses need none of them.

## Honesty block

Three cards:

**No negotiated pricing.** These are not adjusted per customer.
**Lines come off.** If you already have it, you do not pay for it again.
**No hourly billing.** You pay for the system, not for how long it takes us.

Then the shared CTA component.

The old `/calibration` route 301s here.

---

# /components

Eyebrow pill: Components

Headline: One problem, one tool, one price.

Body: Every Component is already built, which is why it goes live in days and why we do
not charge to build it. Pick the problem that is costing you the most right now. It is $97
a month and you can cancel any time.

The list is in `04-data-files.md`, rendered with the full description per item, one card
each.

### Where each one ends

Heading: What a Component deliberately does not do.

Body: Each one does a single job properly and then stops. A missed call gets answered, and
that is where it ends. An appointment gets booked, and if nobody shows, nobody chases
them. A form gets filled in, it reaches you, and that is the end of it. That is not a
limitation we are hiding. It is the difference between a Component and Signal, and after a
couple of months you will be able to see exactly which part you are missing.

### Moving up

Heading: If you move to Signal.

Body: The $97 stops the month Signal starts. You are never billed for both. Nothing you
already have gets torn out and rebuilt, and you never pay a build fee for it twice.

Then the shared CTA component.

---

# /signal-plus

Eyebrow pill: Signal+

Headline: The hands-on work, once the system is already running.

Body: Signal is the system. Signal+ is us doing the work inside it: ads, content,
campaigns, follow-up. We do not sell it to new customers, and we do not include it in a
first proposal. It comes up 60 to 90 days in, once your system is live and we both know
what it actually needs. Prices are here so you can see where this goes.

The service list is in `04-data-files.md`.

Three cards beneath:

**Flat monthly fee.** Never hourly. The scope above is the scope.
**No setup fee.** On any Signal+ service, ever.
**Out of scope.** Extra work is a flat fee from a published list, not a surprise invoice.

Then the shared CTA component. No Signal versus Signal+ comparison.
