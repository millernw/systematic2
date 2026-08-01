# Systematic Website Build: Start Here

You are building the new marketing site for Systematic. This file is the entry point.
Read it fully, then read the file the current task points to.

## The documents

| File | What it governs | When to read it |
|---|---|---|
| `00-START-HERE.md` | Rules, build order, project facts | Every session, every time |
| `01-design-system.md` | Tokens, type, layout, motion, what not to do | Before any visual work |
| `02-architecture.md` | Stack, file structure, config, routing, components | Before any structural work |
| `03-content.md` | Every word on the site | Before writing any copy |
| `04-data-files.md` | Literal contents of the typed data files | When creating or editing data |
| `05-build-prompts.md` | The prompt sequence and correction prompts | Human uses this, not you |

## What this company is

Systematic sells systems as a service to small businesses. The recurring product is
Signal, a marketing operating system built around one business, which the owner logs
into to run everything. It is a subscription to access, not a project the customer buys
and keeps. Systematic is not an agency and never bills hourly.

The market argument: small businesses have two options today, buying software they never
learn to use, or hiring an agency they cannot afford where the affordable ones do not
deliver. Systematic fills the middle. Never explain this as a category, a spectrum, or a
business model. Express it only as the two things the reader has already tried.

The audience: owners who are not marketers and who answer their own phone. They do not
say funnel, stack, omnichannel, or operating system.

The one job of the homepage: get a skeptical owner to book the audit.

## The seven rules

These override anything else, including your own judgment about what would look good.

1. **Copy comes from `03-content.md` verbatim.** You do not write marketing copy. You do
   not improve supplied copy. If a section needs words that are not in that file, stop
   and ask.

2. **No claims about results.** No lead counts, cost per lead, revenue figures, growth
   percentages, or ROI, anywhere, including placeholders. Describe what the system does,
   never what it will produce for a customer.

3. **Every price is published.** The strings "starting at", "contact us", "custom quote",
   "get a quote", "request a demo", and "from $" appear nowhere on this site.

4. **No product name or price is hardcoded in a component.** Everything reads from
   `src/config/brand.ts` or a file in `src/content/`. See `02-architecture.md`.

5. **The visual direction in `01-design-system.md` is not a starting point.** It is the
   spec. Do not substitute typefaces, add a color, or introduce a pattern from the
   anti-pattern list.

6. **Do not add sections, features, or pages that were not asked for.** No testimonial
   carousel, no newsletter signup, no chat bubble, no trust badges, no logo cloud, no
   cookie banner beyond what is legally required.

7. **When you finish a task, state which of these seven rules the work touched and how
   you complied.** One line each. This is not optional.

## Build order

1. Foundation: tokens, fonts, shared section component, config, data files, header,
   footer, hero, empty section placeholders, the industry route
2. Two options
3. The Six
4. Signal
5. How it works
6. Pricing
7. Not ready for Signal
8. Proof, Industries, FAQ, Final CTA
9. `/calibration` page
10. `/signal-plus` page

Homepage section order, top to bottom: Hero, Proof strip placeholder, Two options,
The Six, Signal, How it works, Pricing, Not ready for Signal, Proof, Industries, FAQ,
Final CTA.

## Still undecided, do not invent an answer

- What happens to a Component website when a customer cancels. Until this is answered,
  render the placeholder `{{WEBSITE_CANCELLATION_TERMS}}` and do not write around it.
- The Proof section has no real client yet. Placeholders only.
