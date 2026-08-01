# 04 — Site Structure & Layout

> Use this file when building navigation, page layouts, or any structural scaffolding.

---

## Site Map

**Priority:** P1 = launch now (ASAP), P2 = immediately after, P3 = later.

| Page | Path | Priority | Notes |
|---|---|---|---|
| Root homepage | `/` | **P1** | Speaks to the general small business owner |
| Free 6-Point Marketing Audit | `/audit` | **P1** | Primary conversion tool site-wide |
| Signal | `/signal` | **P1** | The complete system; includes Signal+ add-ons |
| Pricing | `/pricing` | **P1** | One transparent overview of everything |
| Industry: Functional Medicine | `/functional-medicine` | **P1** | First live industry instance |
| Industry: Restaurants | `/restaurants` | P2 | Clone of industry template, re-skinned |
| Industry: Food Trucks | `/food-trucks` | P2 | Clone of industry template, re-skinned |
| Industry: Other Small Business | `/small-business` | P2 | Clone of industry template (≈ root framing) |
| Product detail pages (×11) | `/products/[slug]` | P2 | One per component + Reactivation |
| About | `/about` | P3 | Demoted to footer |
| Contact | `/contact` | P3 | Demoted to footer; audit is the real CTA |

**Product detail slugs (11):** free-website-hosting, missed-call-text-back, webchat-ai-chatbot, welcome-mat, sms-list-building, birthday-campaign, anniversary-campaign, giveaway-campaign, google-review-automation, listings-management, reactivation-campaign.

---

## Navigation

**Top nav (all pages):**
- **Products** — dropdown grouped by the six outcomes: New Leads · Responsiveness · Visibility · Repeat Business · Delivery · Follow-Up
- **Signal**
- **Pricing**
- **Industries** — dropdown: Restaurants · Food Trucks · Functional Medicine · Other Small Business
- **Audit**
- **Right side:** single primary button — **"Get Started"**

**Footer:** same link groups as nav, plus **About** and **Contact** demoted here. Include brand line, copyright, and legal (Privacy/Terms) links.

---

## Homepage Section Order (build sequence)

Ordered for conversion. Formulas per section come from `01-content.md`.

1. **Hero** *(BAB)* — Left: headline + subhead + trust line. Prominent **Audit CTA Block** as the hero action ("Get your free 6-Point Marketing Audit"), with secondary "See what's included." Goal: make the offer and the on-ramp obvious in one screen.
2. **Proof Stats** *(social proof)* — Horizontal row of 3 Proof Stat Cards (big number / label / business). Goal: instant credibility with concrete outcomes.
3. **Outcome-grouped product catalog** *(FAB)* — The core of the page. Six Outcome Section Headers, each with its Product Cards in a grid (name, value prop, price, icon, CTA). Stacking line beneath the grid. Goal: show the whole shelf, priced.
4. **Signal** *(AIDA)* — Three Pricing Tier Cards side by side ($297 / $497 / $697 by employee count) + "buying capacity, not features" line + CTA to `/signal`. Goal: present the complete system as the graduation step.
5. **Calibration (setup)** *(plain)* — Single clear block explaining checklist-based one-time setup, "$3,500–$9,000 for most businesses," CTA "Get your setup quote." Goal: pre-empt the "what's setup cost?" question honestly.
6. **Industry Selector** — "Built for your industry" + Industry Selector component (4 options) + "same system, tuned to your industry" line. Goal: route owners to their vertical.
7. **Testimonials** *(social proof)* — Row of Testimonial Cards. Goal: human trust layer.
8. **Closing CTA** *(AIDA compressed)* — "Start with one system. $97/month, no contract." Two buttons: "Browse products" + "Take the free audit." Goal: final low-friction action.

> **Note:** Signal+ does NOT appear on the homepage. It lives only on `/signal` and `/pricing`.

---

## Industry Page Layout (template — clone & re-skin)
Same shell as homepage; only hero headline, pain line, and proof change.
1. **Hero** — same layout; industry-specific headline + Audit CTA Block.
2. **Industry Pain Line** — one short sentence naming that industry's specific problem.
3. **Outcome-grouped product catalog** — identical six-category grid, shared library, unchanged.
4. **Signal Tiers** — same three cards.
5. **Calibration Range** — same "$3,500–$9,000" block.
6. **Industry Proof** — Proof Stat + Testimonial Cards filtered to that industry (placeholders where none yet).
7. **Closing CTA** — same as homepage.
- **Functional Medicine specifics:** emphasize Reactivation Campaign ($1,800) as the recommended start; note EHR coexistence.

---

## Product Detail Page Layout (template)
Short, conversion-focused — not a long agency page.
1. Product name + one-line value prop + **price** (from Product Card data).
2. **What you get** — 3–5 plain bullets.
3. **How it works** — 3 steps max.
4. One relevant testimonial or proof stat (if available).
5. **CTA:** "Get started" + secondary "Not sure? Take the free audit" (`/audit`).
6. Monthly footnote: "No contract. Stack up to two components, then move up to Signal for the complete system."

---

## `/signal` Page Layout
1. **Three Pricing Tier Cards** ($297 / $497 / $697 by employee count) — lead with these.
2. **"Everything included at every tier"** — ONE shared list (not a per-tier comparison grid), explicitly stating nothing is gated: AI Phone & Chat Agent, Contact Database & Pipeline, Online Store, Online Course & Membership hosting, Private Online Community, Appointment Booking, Proposals/Contracts/Invoicing, Recurring Billing & Subscriptions, Unified Message Inbox, Monthly Reporting Dashboard, Client Dashboard access, Monthly Newsletter & Text Blast tools, Social Media Monitoring, Lead Follow-Up Sequences, Google Review Automation tools, Class & Event Scheduling.
3. **Calibration** — checklist-based one-time setup, "$3,500–$9,000 for most businesses," CTA "Get your setup quote."
4. **Signal+ (add-ons)** — optional, added AFTER you're established on Signal, never required, never a setup fee. Flat monthly prices: Social Media Management $600/mo · Ad Campaign Management $500/mo · Email Sequence Copywriting $500/mo · Content/Blog Writing $600/mo · Managed Lead Conversion $800/mo · Retargeting (Growth) $297/mo · Retargeting (Pro) $497/mo. CTA: book a call.

---

## `/pricing` Page Layout
owner.com-clean, but with **real visible numbers**. Calm, lots of whitespace, green accents, no fine-print maze.
1. **Components** — simple table/grid of all monthly components ($97/mo each; Yext $50/mo) + Reactivation ($1,800 one-time). Line: "Start with one, stack up to two."
2. **Signal** — three tiers ($297 / $497 / $697 by employee count) + full-access note.
3. **Calibration (setup)** — typical "$3,500–$9,000 for most businesses" range + note that the exact number comes from a standard checklist and anything you already have is removed from the quote.
4. **Signal+** — add-on services with flat monthly prices, noted as optional and added later.
5. **Closing CTA** — to the audit and to "Get Started."

---

## Footer
- Link groups mirroring nav: Products (by outcome), Signal, Pricing, Industries, Audit.
- Demoted: About, Contact.
- Brand line, copyright, Privacy Policy, Terms.

---

## Responsive Behavior

| Element | Desktop | Mobile |
|---|---|---|
| Nav | Full horizontal with dropdowns | Hamburger; "Get Started" stays visible |
| Hero | Two-column (copy + audit block) | Stacked; audit block directly under headline |
| Product catalog | Multi-column grid per outcome group | Single column, grouped by outcome header |
| Signal tiers | 3 cards side by side | Stacked cards |
| Pricing tables | Full table/grid | Stacked, price stays prominent |
| Proof / testimonials | Horizontal row | Swipe/scroll or stacked |

---

## Interaction Patterns
- Subtle fade/rise on scroll; smooth card and button hover states (see 02).
- "See what's included" and "Browse products" smooth-scroll to the catalog section.
- Product Card CTA → product detail page (or direct subscribe).
- Audit CTA Block → `/audit` form; on completion, route to a thank-you/booking step.
- Industry Selector cards → respective industry landing pages.
- Sticky top nav with the "Get Started" button always reachable.
