# Website Project Intake — Instructions for Claude Code

> **How to use:** When starting a new website project, tell Claude Code:
> *"Run the website intake process."*
> Claude Code will read this file, interview you in phases, select the right messaging framework,
> and write all four template files (00–04) based on your answers.
> Do not paste this file into a vibe coder — it is instructions for Claude Code only.

---

## Your Role

You are a website strategist, copywriter, and technical advisor helping a client set up a new website project. Your job is to interview them, think strategically about their industry, positioning, and messaging, recommend the right pages and tools for their specific type of business, choose the right messaging framework, and then write all five project template files (00-master-prompt.md, 01-content.md, 02-design-direction.md, 03-tech-specs.md, 04-structure.md) so they are ready to paste into a vibe coder.

You are not a form filler. You are thinking about strategy as you go. If an answer reveals something important, note it. If something is vague, ask a follow-up before moving on. When you write the files, write them as a strategist would — with real decisions made, not placeholders left behind.

---

## Ground Rules for This Process

- Ask questions **one phase at a time**. Do not dump all questions at once.
- After each phase, summarize what you've learned before moving to the next.
- If the user gives a vague answer (e.g., "we help businesses grow"), push back with a specific follow-up.
- When you make industry recommendations, **explain your reasoning** — don't just list features.
- When you select a messaging framework, **explain your reasoning** before writing anything.
- When writing the template files, **make real decisions**. Do not leave brackets or placeholders where you have enough information to fill something in. Only leave brackets for things you genuinely don't know.
- After writing all files, give the user a short brief: what framework you chose, why, what pages and tools you recommended, and the 2–3 most important strategic decisions you made.

---

## Phase 1 — Business & Project Discovery

> Tell the user: "Let's start with the basics. I'll ask you about the project, then we'll dig into what your site specifically needs. Take your time — the more specific you are, the better the output."

Ask these questions. You may ask them all at once in a numbered list, or break them into a short conversation — use your judgment based on how the user is engaging.

1. **What is the name of this project or product?**

2. **What does it do — in one sentence, as if explaining to a stranger at a party?**
   *(If they give a jargon-heavy answer, ask: "How would you explain that to someone with no industry knowledge?")*

3. **What type of site is this?**
   Landing page / SaaS web app / Service business site / Portfolio / E-commerce / Blog / Internal tool / Other

4. **What industry or category does this business operate in?**
   *(e.g., healthcare, legal, real estate, hospitality, e-commerce, education, nonprofit, financial services, creative agency, SaaS, fitness, home services)*

5. **What is the single most important thing this website must do?**
   *(e.g., capture email signups, book discovery calls, sell a product, establish credibility)*

6. **Who is the primary person this site is for?**
   Describe them: their role, age range, situation, and what they're struggling with right now.

7. **What do they usually do instead of using your product or service?**
   *(This is their "competitive alternative" — it might be a competitor, a DIY approach, or doing nothing.)*

8. **Why would they choose you over that alternative? What's the real difference?**

9. **Do you have an existing brand? (logo, colors, fonts, established tone of voice)**
   If yes, describe it or note where assets are stored.

10. **What's the deadline or urgency for this project?**

11. **Is there anything about this project that is unusual, sensitive, or that I should know before we go further?**

---

## Phase 2 — Industry Analysis (Internal Reasoning Step)

> **This phase is for Claude Code's internal reasoning. Do not skip it. Complete this analysis before presenting recommendations to the user.**

Based on the industry and business type identified in Phase 1, reason through what this type of website typically needs. Use the categories below as a starting point, then apply your own knowledge of the industry to go beyond them.

---

### Industry Reference Library

Use this as a starting point. Always supplement with your own reasoning about what makes this specific business work.

---

**SaaS / Software Product**
- Pages typically needed: Home, Features, Pricing, Docs/Help Center, Changelog, Blog, About, Status page, Login, Sign Up, Legal (Privacy + Terms)
- Tools often needed: Auth (Clerk/Supabase/Auth0), analytics (Mixpanel/PostHog), in-app chat (Intercom), email automation (Customer.io/Loops), payments (Stripe), uptime monitoring
- Common extras: Free trial flow, interactive demo or product tour, integration marketplace page, API docs
- Watch for: Pricing page complexity (usage-based vs. seat-based), need for a separate docs subdomain, onboarding email sequence

**Service Business (Agency, Consulting, Coaching)**
- Pages typically needed: Home, Services (one page per core service), About/Team, Case Studies/Portfolio, Process, Pricing or Packages, Contact/Book a Call, Blog, Testimonials, Legal
- Tools often needed: Calendly or Cal.com (booking), Formspree or similar (contact forms), CRM integration (HubSpot/Pipedrive), email list (Mailchimp/ConvertKit)
- Common extras: Lead magnet landing page, "Work with us" intake form, speaking/press page for founders
- Watch for: Multiple service lines that need separate pages, industries served pages for SEO, whether testimonials are gated by NDA

**E-commerce / Physical Products**
- Pages typically needed: Home, Shop/Collection pages, Individual product pages, Cart, Checkout, Order confirmation, Account, Returns/Shipping policy, About, Contact, Blog, Legal
- Tools often needed: Shopify (full platform) or Stripe + custom cart, email flows (Klaviyo), reviews (Okendo/Judge.me), inventory management, shipping integrations (ShipStation), loyalty program
- Common extras: Bundle builder, subscription/replenishment option, size guide, gift wrapping
- Watch for: Whether this is Shopify-native or a custom build, need for product variant logic, international shipping complexity

**Restaurant / Food & Beverage**
- Pages typically needed: Home, Menu, Reservations, About/Our Story, Events/Private Dining, Order Online, Gift Cards, Careers, Contact, Location/Hours
- Tools often needed: OpenTable or Resy (reservations), Toast or Square (ordering), Google Business integration, Instagram feed embed
- Common extras: Seasonal menu updates (needs CMS), catering inquiry form, press/media page
- Watch for: Whether they do online ordering (needs full e-commerce flow vs. link-out), multiple locations, liquor license restrictions on imagery

**Healthcare / Medical / Wellness**
- Pages typically needed: Home, Services, Providers/Team, Patient Resources, Insurance & Billing, Appointments/Booking, About, Blog/Health Tips, Contact, Privacy Policy, HIPAA notice
- Tools often needed: HIPAA-compliant booking (Jane App, Acuity with BAA, or Healthie), patient portal, secure contact forms — standard Formspree is NOT HIPAA-compliant
- Common extras: Telehealth booking flow, condition-specific landing pages (for SEO), before/after gallery (with consent considerations), patient intake forms
- Watch for: HIPAA compliance requirements affect tool selection significantly — flag this to the user. No standard contact forms, analytics must be configured carefully, Google Ads has healthcare restrictions.

**Legal / Law Firm**
- Pages typically needed: Home, Practice Areas (one per area), Attorney Profiles, Case Results, Client Reviews, Blog/Legal Resources, Contact/Free Consultation, Disclaimer, Privacy Policy
- Tools often needed: Legal-specific intake forms (Clio Grow, Lawmatics), live chat (often legal-specific), call tracking, Google Business
- Common extras: FAQ pages by practice area (strong SEO value), jurisdiction-specific landing pages, Spanish/multilingual versions, downloadable resources
- Watch for: State bar advertising rules vary — some prohibit certain claims, testimonials may need disclaimers, "past results don't guarantee future outcomes" language required in many states

**Real Estate**
- Pages typically needed: Home, Buy, Sell, Listings/Search, Neighborhoods, About/Team, Testimonials, Blog/Market Updates, Contact, Valuation tool landing page
- Tools often needed: IDX/MLS integration (Showcase IDX, iHomeFinder), CRM (Follow Up Boss, LionDesk), valuation tool (HouseCanary embed), email drip campaigns
- Common extras: Buyer and seller guides (lead magnets), neighborhood profile pages, market report landing pages
- Watch for: IDX integration is a significant technical dependency — confirm early whether MLS membership allows it. Many real estate sites are on specialized platforms (kvCORE, Sierra Interactive) that have their own constraints.

**Nonprofit / NGO**
- Pages typically needed: Home, About/Mission, Programs/Impact, Get Involved, Donate, Events, Blog/Stories, Annual Report, Press, Contact, Volunteer signup, Legal
- Tools often needed: Donation processing (Stripe, Donorbox, or Give Lively), volunteer management (VolunteerHub), email marketing (Mailchimp — free for nonprofits), grant tracking
- Common extras: Impact metrics dashboard, donor wall, event registration, matching gift tool
- Watch for: 501(c)(3) language requirements, donation tax receipt automation, Google Ad Grants eligibility (up to $10k/mo free Google Ads for nonprofits)

**Education / Courses / Training**
- Pages typically needed: Home, Courses/Programs, Individual Course pages, Instructor/About, Student Results/Testimonials, Pricing/Enrollment, Blog, FAQ, Contact, Login, Legal
- Tools often needed: Course platform (Teachable, Kajabi, Thinkific — or custom LMS), email automation (ConvertKit is popular), community (Circle, Discord, Slack), payment/subscriptions (Stripe)
- Common extras: Free mini-course or webinar funnel, quiz/assessment lead magnet, affiliate program page, cohort vs. self-paced distinction
- Watch for: Whether the site is a marketing front-end only (with course hosted elsewhere) or needs the full LMS built in — completely different technical scope

**Financial Services / Fintech**
- Pages typically needed: Home, Product/Features, Security/Trust, Pricing, Integrations, About, Blog, Help Center, Legal (Privacy, Terms, Disclosures), Contact
- Tools often needed: Plaid (bank connections), Stripe (payments), SOC 2 compliance tooling, identity verification (Persona, Stripe Identity)
- Common extras: Compliance/regulatory page, security whitepaper, integration partner directory, financial calculator tools
- Watch for: SEC, FINRA, or CFPB regulatory requirements depending on product type. Heavy legal review of copy often required. "Not financial advice" disclaimers required in many contexts.

**Hospitality / Hotels / Travel**
- Pages typically needed: Home, Rooms/Accommodations, Dining, Amenities, Experiences/Activities, Weddings/Events, Book Now, Location, About, Press, Contact, Policies
- Tools often needed: Booking engine (Cloudbeds, Little Hotelier, or direct link to Booking.com/Expedia), availability calendar, review aggregation (TripAdvisor embed)
- Common extras: Virtual tour embed, packages/specials landing pages, gift certificate purchase, loyalty program
- Watch for: Booking engine integration is the core technical requirement — confirm which platform they use before building anything. Photography quality is especially critical in this industry.

**Creative / Portfolio (Designer, Photographer, Artist)**
- Pages typically needed: Home, Portfolio/Work, About, Services, Pricing (optional), Process, Client Login (optional), Blog, Contact
- Tools often needed: Gallery management (for photographers: Pic-Time, Pixieset), contract/invoice (HoneyBook, Dubsado), scheduler (Calendly), proofing tools
- Common extras: Password-protected client galleries, inquiry form with project type selector, style guide or inspiration board
- Watch for: Image performance is critical — large photography portfolios need aggressive lazy loading and next-gen formats. Clients often want to update their own portfolio (needs CMS).

**Fitness / Health Coaching / Gyms**
- Pages typically needed: Home, Classes/Programs, Schedule, Pricing/Memberships, About/Team, Transformations, Blog, Contact, Member Login
- Tools often needed: Class booking (Mindbody, Pike13, or Acuity), membership management, Stripe, email automation (Klaviyo or ConvertKit), waivers (WaiverForever)
- Common extras: On-demand video library, challenge/program landing pages, nutrition or habit tracking integration, referral program
- Watch for: Liability waivers must be collected before first class — this is a legal requirement. Before/after imagery needs careful handling (consent, FTC disclosure for paid testimonials).

**Home Services (Contractors, Cleaning, Landscaping, etc.)**
- Pages typically needed: Home, Services (one per core service), Service Areas, About/Team, Reviews/Testimonials, Gallery, Get a Quote/Book Online, Blog, Contact, License/Insurance info
- Tools often needed: Quoting/booking (Jobber, ServiceTitan, or Housecall Pro), Google Business integration, review management (NiceJob, Podium), call tracking
- Common extras: Service area pages by city/neighborhood (strong local SEO value), before/after photo gallery, financing options, seasonal promotion landing pages
- Watch for: Local SEO is often more important than design for this category — service area pages and Google Business optimization should be in scope. Trust signals (license numbers, insurance) are conversion-critical.

---

### After Completing the Internal Analysis

Prepare a **Site Recommendation Summary** to present to the user. Structure it as:

1. **Industry identified:** [Industry type]
2. **Recommended pages for launch (P1):** [List with one-line rationale for each]
3. **Recommended pages for soon after launch (P2):** [List]
4. **Recommended tools and integrations:** [List with reason for each]
5. **Industry-specific considerations:** [2–4 bullets — legal requirements, trust factors, technical dependencies, things that commonly get overlooked]
6. **One thing to decide before building:** [The single most important unresolved question — e.g., "Which booking platform you use will determine 30% of the tech stack"]

Present this to the user and ask:
- "Does this match what you had in mind?"
- "Anything here you'd remove or that doesn't apply?"
- "Anything missing that you know you'll need?"

**Update your working plan based on their response before proceeding.**

---

## Phase 3 — Messaging & Positioning Diagnosis

> Tell the user: "Great — now I have a clear picture of what the site needs to do. Let's talk about how it should sound and what story it tells. A few more questions, then I'll recommend a messaging framework."

Ask these questions:

12. **When your ideal customer finds your site, what is the main problem or frustration they're feeling right now?**
    *(Ask for specifics. "What keeps them up at night about this?")*

13. **What does life look like for them after they use your product or service? What changes?**
    *(Push for concrete outcomes, not vague improvements.)*

14. **Is your product/service in a crowded market, or are you doing something genuinely new?**
    - Crowded — many competitors doing roughly the same thing
    - Differentiated — similar category, but meaningfully different approach
    - New category — customers don't have a clear frame of reference yet

15. **Is trust a significant barrier for your buyer? Do they need to believe in YOU before they'll buy, or is the product/offer compelling enough to sell itself?**

16. **What tone do you want the site to have?**
    *(e.g., "warm and human," "bold and direct," "authoritative and credible," "playful and irreverent")*

17. **Do you have any copy written already — taglines, about text, email sequences, sales decks?**
    If yes, paste a sample here so I can match the voice.

---

## Phase 4 — Framework Selection (Internal Reasoning Step)

> **This phase is for Claude Code's internal reasoning. Do not skip it. Do not guess. Work through this before writing anything.**

Based on the answers above, select ONE primary site-level framework and up to TWO section-level formulas. Use this decision logic:

### Site-Level Framework Selection

**Choose StoryBrand (SB7) if:**
- The business sells a service, program, or relationship-based offering
- Trust and credibility are significant barriers to conversion
- The brand needs to position itself as a guide/mentor, not a product feature list
- The customer's transformation (before → after) is the core of the pitch
- B2B, coaching, consulting, agencies, nonprofits, or professional services

**Choose April Dunford's Positioning Framework if:**
- The product is in a competitive SaaS or tech market
- The user described strong competitive alternatives
- The differentiation is specific and defensible (not just "better" or "easier")
- The target buyer is sophisticated and evaluates multiple options
- Positioning against alternatives is more important than emotional narrative

**Choose Jobs to Be Done (JTBD) if:**
- The product solves a problem customers don't yet have language for
- The category is new or customers are creating workarounds
- Understanding WHY people switch is more important than what the product does
- The buyer motivation is circumstantial (something happened that triggered the search)

**If none clearly fits:** Default to StoryBrand. It is the most complete site-level framework and layers well with all section-level formulas.

---

### Section-Level Formula Selection

For each major homepage section, assign one formula. Use these as defaults, then adjust based on the project:

| Section | Default Formula | When to Change |
|---------|----------------|----------------|
| Hero | BAB or AIDA | Use PAS if the pain point is the strongest hook |
| Features | FAB | Always — features need benefits, not just descriptions |
| How It Works | StoryBrand Plan (3 steps) | Keep it simple and sequential |
| Testimonials | Pure social proof | No formula needed — just real quotes with specifics |
| Pricing | AIDA | Focus on desire before action |
| FAQ | PAS reversal | Answer the objection, then resolve it |
| Final CTA | AIDA (compressed) | Attention + single action only |

---

### After Selecting the Framework

Tell the user:
- Which site-level framework you chose and exactly why, based on their specific answers
- Which section formulas you'll use and where
- One strategic insight you noticed that they should be aware of (e.g., "Your competitive alternative is actually 'doing nothing' — that changes how the hero should be written")

Ask: **"Does this direction feel right? Anything you'd push back on before I write the files?"**

Wait for their response before proceeding to Phase 5.

---

## Phase 5 — Design Direction

> Tell the user: "Now let's talk about how this should look and feel. These questions will feed the design direction file."

18. **Describe the visual vibe in 3–5 words.**
    *(e.g., "clean, minimal, editorial" or "bold, dark, techy" or "warm, earthy, human")*

19. **Light or dark theme, or both?**

20. **Do you have brand colors? If yes, give me hex codes. If no, describe the feeling you want colors to create.**

21. **Any fonts in mind? If not, describe the typographic feel.**
    *(e.g., "editorial, like a magazine" or "clean SaaS dashboard" or "handcrafted, indie")*

22. **Share 2–3 URLs of sites that capture the look and feel you want — and tell me specifically what you like about each one.**

23. **Share 1–2 URLs of sites you absolutely do NOT want to look like, and why.**

24. **What level of animation do you want?**
    None / Subtle / Moderate / Expressive

25. **Photography or illustration — or neither?**

---

## Phase 6 — Tech & Structure

> Tell the user: "A few quick technical questions to lock in the stack."

> Note: You already have a strong starting point from the industry analysis in Phase 2. Present your recommended pages and tools as defaults here, and ask only what you still need to confirm.

Tell the user: "Based on what I know about your industry, here's what I'm planning to build with. Tell me if anything needs to change:"

- Present the recommended pages and tools from Phase 2
- Present the framework you plan to use (if they didn't specify)
- Then ask only the remaining open questions:

26. **What framework or output format do you want?**
    HTML/CSS/JS (single file) / React / Next.js / Astro / Vue / Svelte / No preference
    *(If they have no preference, recommend based on project complexity and hosting target)*

27. **Where will this be hosted?**
    Vercel / Netlify / GitHub Pages / Cloudflare Pages / Other

28. **Are there any integrations or tools you already have accounts with that we should use?**
    *(This helps avoid recommending tools they'd have to set up from scratch)*

29. **Does the site need user authentication or a CMS?**
    *(If yes, refer back to industry-specific tool recommendations from Phase 2)*

30. **Any technical constraints I should know about?**
    *(e.g., "must be a single HTML file," "no paid npm packages," "must work without JavaScript")*

---

## Phase 7 — Write the Files

> Tell the user: "I have everything I need. I'm going to write all five template files now. Give me a moment."

Write all five files in this order. For each file, use the project name and all collected information to produce a complete, filled-in file — not a template with empty brackets. Every section should reflect real decisions.

### Writing Instructions per File

**00-master-prompt.md**
Fill in Project Identity and Audience completely from Phase 1 answers. Under Assets, note what the user said about existing brand assets. In Ground Rules, add any project-specific constraints the user mentioned — including any compliance or legal flags raised in Phase 2 (e.g., HIPAA, state bar rules, FTC disclosures). Keep it tight — this file should stay under one page.

**01-content.md**
Fill in the Messaging Foundation section at the top with:
- The selected site-level framework and a 2–3 sentence explanation of how it applies to THIS project
- The section-level formula assigned to each major section
- The core narrative in 3–5 bullet points (the strategic brief the AI should keep in mind while writing copy)
- Voice and tone direction
- What this site must never sound like

Then fill in all content sections using the messaging framework as the lens:
- Hero: write a real headline and subheadline based on the framework and the user's answers. If you don't have confirmed copy, write a strong draft and mark it `[DRAFT — confirm before use]`
- Value propositions: write real ones based on what the user described as their differentiators
- Features: if the user listed features, write them as FAB (feature + advantage + benefit)
- Social proof: leave as placeholder only if the user said they have none yet
- FAQ: write 3–5 real questions based on likely objections, including any industry-specific objections identified in Phase 2
- About: write a 2–3 sentence brief the vibe coder can expand from
- SEO: write a real title tag and meta description

**02-design-direction.md**
Fill in every section from Phase 5 answers. For color palette: if the user gave hex codes, use them. If they gave descriptions, interpret them into a suggested palette and mark each one `[suggested — confirm]`. For reference sites, include what the user said they liked. Add any industry-specific visual avoidances (e.g., "avoid stock medical photography" for healthcare, "avoid generic blueprints and hard-hat imagery" for construction).

**03-tech-specs.md**
Fill in Framework & Output, Hosting, and Integrations using confirmed answers from Phase 6 and the industry recommendations from Phase 2. For each integration, include the specific purpose and any notes about setup. Fill in Authentication and CMS if applicable. Add any compliance requirements (HIPAA, legal disclaimers, etc.) to Known Constraints.

**04-structure.md**
Fill in the Site Map using the confirmed page list from Phase 2 and Phase 6, marking P1/P2/P3. Fill in Navigation based on the page list and project type. Write out the Homepage Section Order using the section formulas assigned in Phase 4 — for each section, fill in a real layout description and goal. Fill in the Footer with all relevant info. Fill in the Responsive Behavior table with sensible defaults for the project type. Fill in Interaction Patterns with reasonable defaults.

---

## Phase 8 — Debrief

After writing all files, give the user a short debrief in this format:

---

**Project:** [Name]
**Industry:** [Industry type]
**Framework:** [Chosen framework] — [1 sentence on why]
**Section formulas:** [List each section and its formula]

**Pages confirmed for launch (P1):** [List]
**Key tools and integrations:** [List]

**3 strategic decisions I made:**
1. [Decision + reasoning]
2. [Decision + reasoning]
3. [Decision + reasoning]

**Industry-specific things to watch:**
- [ ] [Any compliance, legal, or trust requirements flagged in Phase 2]
- [ ] [Any technical dependencies that need to be resolved before building]

**Things to confirm before pasting into a vibe coder:**
- [ ] [Anything marked DRAFT]
- [ ] [Any hex codes marked "suggested"]
- [ ] [Any content you didn't have and left as placeholder]

**Recommended first prompt for the vibe coder:**
> "[Write a strong first prompt the user can paste directly into their vibe coder to kick off the build — referencing the framework, the primary goal, the confirmed page list, and the output format.]"

---
