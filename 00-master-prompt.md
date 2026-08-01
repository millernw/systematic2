# 00 — Master Prompt
> Paste this entire file at the start of every AI build session (HighLevel AI Studio or any vibe coder).
> Keep this under one page. Detail lives in files 01–04.

---

## Project Identity

- **Project name:** Systematic Marketing (brand) — **goSystematic.com**
- **Tagline / one-liner:** The marketing system small businesses use to get found, get leads, and keep customers coming back — sold as clear, priced products, not vague agency retainers.
- **Project type:** Productized-services website (product-catalog style). One shared product library rendered through multiple industry landing pages.
- **Primary goal:** Drive the free **6-Point Marketing Audit** at `/audit` — the primary conversion tool site-wide (our equivalent of owner.com's AI report/grader). Secondary goal: get a business owner to start with one $97/mo component.
- **Success metric:** Volume of completed audits and started components/Signal subscriptions.

---

## Audience

- **Primary user:** The small business owner / owner-operator. Non-technical, time-poor, wears every hat. Stuck between doing their own marketing (scattered, inconsistent) and paying an agency for a vague monthly retainer they can't see the value of.
- **Their core problem:** They can't tell what they're actually getting for their marketing money — DIY is inconsistent and agencies are opaque. They want something they can see, understand, buy, and turn on.
- **Device context:** Both — assume mobile-first, but desktop matters for the pricing/Signal comparison.
- **Tech literacy:** Beginner. Copy must stay plain; every product has a name, a price, and a plain "what you get."

---

## Design & Tech

> Full design specs: see **02-design-direction.md**
> Full tech specs: see **03-tech-specs.md**

- **Aesthetic anchor:** owner.com — clean, **light**, airy, product-forward, benefit-grouped nav, big proof numbers, minimal clutter. NOT an agency look with vague service descriptions.
- **Brand colors (from goSystematic.com):** deep forest/emerald green + signature bright lime `#C5FF47`. Reframed into a **light theme** (near-white backgrounds), not the current dark site.
- **Build target:** **HighLevel (GoHighLevel) AI Studio** — one shared, reusable component library rendered across all pages. Not a React/Next codebase.

---

## Assets

- **Logo:** existing at goSystematic.com — pull current mark; supply light-background variant. (Confirm final asset URL.)
- **Hero image / photography:** not supplied yet — use real customer/business imagery once available; placeholder in the meantime.
- **Brand colors file:** see hex codes in **02-design-direction.md** (pulled live from goSystematic.com).

---

## Ground Rules for This Project

> These apply to every prompt in this project. Never violate these.

- **One system, not three sites.** Same products, same visual system, same page structure. Only the headline copy, the example proof, and the industry name change per industry page. Build swappable industry skins over one shared product library.
- **Every product has a name, a price, and a plain "what you get."** If the output drifts toward agency-style long copy or vague service language, that's a failure — redirect it. This discipline is the whole point of the rebuild.
- **The audit is the hero action everywhere.** `/audit` is the primary CTA site-wide. Never bury it under a generic "Contact us."
- **Light and airy, always.** Near-white background, dark text, green accents. Never the dark forest theme of the current site.
- DO use the exact colors and fonts specified in 02-design-direction.md.
- DO make it mobile-first and fully responsive.
- DO write real copy — no Lorem Ipsum, ever.
- DO NOT add sections, pages, or features not explicitly requested.
- **Signal+ placement:** Signal+ add-on services appear ONLY on `/signal` and `/pricing`. Never in the main product catalog and never in an industry page's lead flow — it's a later conversation, not an entry offer.
- **Functional medicine note:** cash-pay practices; the system coexists with an existing EHR (does not replace it). The Reactivation Campaign touches patient lists — keep claims careful and avoid implying medical record handling.
- **Pricing display:** the public Calibration setup range is **$3,500–$9,000** ("most businesses"). This is a display choice — do not surface the internal workbook figures (sample quote $6,650; internal flag band $5,000–$15,000).
- **Output format:** HighLevel AI Studio pages built from a shared component library (see 03).

---

## Working Preferences

- Build **Prompt 0 (design system + components) first**, then pages in order: root home → industry template (Functional Medicine as first live instance) → product detail template → /signal → /pricing.
- Each later page assumes the earlier components already exist in the same project — reference components by name, don't rebuild them.
- Confirm your interpretation before generating if anything is ambiguous.
- Build one section or component at a time unless told otherwise.
