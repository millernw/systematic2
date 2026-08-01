# 04 — Site Structure & Layout

> Use this file when building navigation, page layouts, or any structural scaffolding.
> Paste this alongside 00-master-prompt.md when starting a new page or layout session.

---

## Site Map

> *Every page the site needs. Mark priority: P1 = launch, P2 = soon after, P3 = later.*

| Page | Route | Priority | Notes |
|------|-------|----------|-------|
| Home | `/` | P1 | Main landing page |
| About | `/about` | P1 | [What this page must achieve] |
| Pricing | `/pricing` | P1 | [What this page must achieve] |
| Blog index | `/blog` | P2 | [What this page must achieve] |
| Blog post | `/blog/[slug]` | P2 | [Template post page] |
| Contact | `/contact` | P1 | [What this page must achieve] |
| Privacy Policy | `/privacy` | P1 | Legal — can be simple |
| Terms of Service | `/terms` | P1 | Legal — can be simple |

*Add or remove rows. Keep P1 lean — ship fast, expand later.*

---

## Navigation

**Header nav:**
- **Style:** [Top bar / Sticky top bar / Sidebar / None]
- **Logo position:** [Left / Center]
- **Nav links:** [List them — e.g. "Features, Pricing, Blog, About"]
- **CTA in nav:** [Yes — "[Button text]" / No]
- **Mobile nav:** [Hamburger menu / Bottom nav bar / Full-screen overlay / Hidden]
- **Transparent on hero?** [Yes — becomes solid on scroll / No — always solid]

---

## Homepage Section Order

> *List every section in the exact order it should appear on the homepage.*
> *For each: describe the layout (1 sentence) and the primary goal.*

1. **Hero**
   - Layout: [e.g. "Full-width, centered text left, product mockup right, CTA below headline"]
   - Goal: [e.g. "Hook attention and drive to the primary CTA"]

2. **Social Proof Bar**
   - Layout: [e.g. "Horizontal scrolling logos of trusted brands, full width, muted colors"]
   - Goal: [e.g. "Establish credibility immediately below the fold"]

3. **Features**
   - Layout: [e.g. "3-column card grid on desktop, single column on mobile"]
   - Goal: [e.g. "Communicate core value props with icons and short copy"]

4. **How It Works**
   - Layout: [e.g. "3-step numbered list with alternating image/text rows"]
   - Goal: [e.g. "Reduce confusion about what the product does"]

5. **Testimonials**
   - Layout: [e.g. "Horizontal carousel of quote cards with avatar and name"]
   - Goal: [e.g. "Build trust with real user voices"]

6. **Pricing**
   - Layout: [e.g. "3-column table, center column highlighted as 'most popular'"]
   - Goal: [e.g. "Convert ready buyers without sending them to a separate page"]

7. **FAQ**
   - Layout: [e.g. "Accordion, 2-column on desktop, 1-column on mobile"]
   - Goal: [e.g. "Handle objections and reduce support tickets"]

8. **Final CTA**
   - Layout: [e.g. "Full-width band, large headline, single button, no distractions"]
   - Goal: [e.g. "One last conversion push before the footer"]

9. **Footer**
   - Layout: [see Footer section below]
   - Goal: [Navigation and legal]

*Reorder, add, or remove sections as needed.*

---

## Footer

**Structure:**
- **Columns:** [Single row of links / 2-column / 3-column / 4-column]
- **Column 1:** [e.g. "Product: Features, Pricing, Changelog, Roadmap"]
- **Column 2:** [e.g. "Company: About, Blog, Press, Careers"]
- **Column 3:** [e.g. "Legal: Privacy, Terms, Cookies"]
- **Social icons:** [Yes — platforms: [list with URLs] / No]
- **Newsletter in footer:** [Yes / No]

**Content:**
- **Tagline (optional):** [Short brand line to repeat in footer]
- **Legal copy:** [e.g. "© 2025 [Company Name]. All rights reserved."]

---

## Component Needs

> *List only the components specific to your project. Standard UI primitives (buttons, modals, toasts) will be built as needed.*

**Page-specific:**
- [ ] Blog post card (for index)
- [ ] Blog post layout (article template)
- [ ] 404 page
- [ ] [Add any unusual or custom components your project requires]

---

## Responsive Behavior

> *Specify how key sections adapt across breakpoints.*

| Section | Mobile (< 768px) | Tablet (768–1024px) | Desktop (> 1024px) |
|---------|------------------|---------------------|---------------------|
| Hero | Stacked, full width | Text left, image right | Text left, image right, wider |
| Features | 1 column | 2 columns | 3 columns |
| Testimonials | Single card, swipe | 2 cards | 3 cards or carousel |
| Pricing | Stacked cards | 2 columns | 3 columns, side by side |
| Footer | Stacked, links collapsed | 2 columns | 4 columns |

*Add rows for any section that needs specific responsive guidance.*

---

## Interaction Patterns

- **Scroll behavior:** [Smooth scroll / Instant / Snap scroll]
- **Sticky elements:** [Nav only / Nav + side TOC / None]
- **Modal triggers:** [Yes — which CTAs open modals? / No modals]
- **Infinite scroll or pagination:** [Pagination / Load more button / Infinite scroll / Not applicable]
- **Carousel/slider behavior:** [Auto-play / Manual only / Swipe on mobile]
- **Accordion behavior:** [One open at a time / Multiple can be open]
- **Back to top button:** [Yes / No]

---

## Whitespace & Density

- **Section vertical padding:** [Tight (40px) / Standard (80px) / Generous (120px+)]
- **Card internal padding:** [Tight (16px) / Standard (24px) / Generous (32px+)]
- **Line height (body):** [Tight (1.4) / Standard (1.6) / Open (1.8)]
- **Overall feel:** [Dense and data-rich / Balanced / Open and airy]
