# 03 — Technical Specs

> Use this file when scaffolding the project, setting up integrations, or making architecture decisions.

---

## Build Target & Output Format

**Primary build platform: HighLevel (GoHighLevel) AI Studio.**

This is **not** a React/Next/Astro codebase. It is built inside HighLevel's AI Studio site/funnel builder. The output is a set of HighLevel pages rendered from **one shared, reusable component library**.

- **Architecture principle:** ONE shared product library rendered through MULTIPLE industry landing pages. Same products, same visual system, same page structure. Only headline copy, example proof, and industry name change per industry page. Build swappable industry skins over one shared library — never three separate sites.
- **Build order (matters):**
  1. **Design system + component library** (colors, type, and the 7 reusable components below).
  2. Root homepage (`/`).
  3. Industry landing page template → first live instance: **Functional Medicine**.
  4. Product/component detail page template → generate for all 11 products.
  5. `/signal`.
  6. `/pricing`.
- Each later page **references existing components by name** — it does not rebuild them.

### Reusable component library (build once)
1. **Product Card** — name, one-sentence value prop, price, small icon, CTA button.
2. **Outcome Section Header** — category label + short subhead, groups products by outcome.
3. **Pricing Tier Card** — Signal tiers (name, employee range, monthly price, "everything included" note, CTA).
4. **Proof Stat Card** — big number + short label + business name (owner.com style).
5. **Testimonial Card** — quote, name, business, avatar.
6. **Industry Selector** — buttons/cards for Restaurants, Food Trucks, Functional Medicine, Other Small Business.
7. **Audit CTA Block** — the prominent hero conversion action driving to `/audit`.

---

## Hosting & Domain

- **Hosting:** HighLevel native (Sites/Funnels). No separate host, no Vercel/Netlify.
- **Domain:** goSystematic.com, connected inside HighLevel.
- **Analytics:** HighLevel's built-in reporting plus Google Analytics/GA4 tag if desired. Track audit starts and completions as the primary conversion event.

---

## Integrations (all native to HighLevel where possible)

| Purpose | Tool | Notes |
|---|---|---|
| CRM / contacts & pipeline | HighLevel CRM | Core of Signal; audit leads land here in a pipeline |
| Free 6-Point Marketing Audit | HighLevel Form/Survey | The site's primary conversion tool; feeds a dedicated pipeline stage. Do NOT bury it under "Contact us." |
| Setup quote / booking calls | HighLevel Calendars | For "Get your setup quote" and Signal+ "book a call" CTAs |
| Payments / recurring billing | HighLevel Payments (Stripe) | Components ($97/mo etc.), Signal tiers, one-time Reactivation ($1,800) |
| Missed Call Text-Back | HighLevel native automation | Sold as a component; also demonstrable on the site's own number |
| WebChat / AI Chatbot | HighLevel Conversation AI / WebChat widget | Component + optional site-wide widget |
| Review automation | HighLevel Reputation | Sold as Google Review Automation component |
| Listings sync | Yext (via HighLevel Listings) | Yext / Listings Management component ($50/mo) |
| SMS + Email campaigns | HighLevel native | Birthday, Anniversary, Reactivation, SMS list building |
| Website + hosting | HighLevel Sites | The "Free Website + Super Hosting" component |
| Memberships / courses / community | HighLevel Memberships & Communities | Included in Signal (client dashboard, courses, community) |

---

## Authentication & CMS

- **Auth / client dashboard:** HighLevel Memberships provides the client dashboard access included in every Signal tier. No custom auth build.
- **CMS:** Content is managed natively in HighLevel. Product/pricing data lives in the shared component library so a price change propagates everywhere it's referenced.

---

## Conversion & Routing Rules
- `/audit` is the **primary CTA site-wide**. Every page's hero uses the Audit CTA Block.
- **Signal+** add-on services appear ONLY on `/signal` and `/pricing`. Never in the catalog or an industry lead flow.
- Product cards link to their detail page; detail pages CTA to "Get started" (checkout/subscribe) with a secondary link back to `/audit`.

---

## Known Constraints & Compliance

- **Build within AI Studio's capabilities** — favor its native components and the shared library over custom code. Keep everything reusable and duplicatable so industry pages can be cloned and re-skinned quickly.
- **Every product must show a name, a price, and a plain "what you get."** No agency-style long copy or vague service language. If output drifts, redirect.
- **Light theme only** (see 02) — do not inherit the dark goSystematic.com theme.
- **Pricing display:** public Calibration setup range is **$3,500–$9,000**. Do not surface internal workbook figures (sample quote $6,650; internal flag band $5,000–$15,000).
- **Functional medicine / patient data:** the Reactivation Campaign works with patient lists and coexists with the practice's EHR (does not replace records). Keep marketing claims careful; avoid implying medical-record handling or storage. Confirm the practice's own consent/opt-in posture for patient SMS/email before launching campaigns.
- **Deadline:** ASAP — prioritize getting the shared component library + root homepage + Functional Medicine industry page live first; other industry skins and detail pages can follow immediately after.
