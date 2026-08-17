# Data Files

Literal contents. Create these exactly. Every number here traces to the pricing workbook.

---

## src/config/brand.ts

```ts
export const BRAND = {
  company: "Systematic",
  product: "Signal",
  productDescriptor: "your marketing operating system",
  upsell: "Signal+",
  audit: "Audit",
  auditPublicName: "Six-Point Audit",
  ctaLabel: "Get my free Six-Point Audit",
  ctaSubline: "About an hour. You keep the findings whether or not you hire us.",

  support: "One business day, at every price",

  signalBase: "$297",
  signalBaseSeats: "the first three people",
  signalPerSeat: "$100",
  signalCap: "$997",

  // Three examples, not tiers. See the note below.
  signalExamples: [
    { seats: "A 3 person shop",   monthly: "$297" },
    { seats: "A 6 person shop",   monthly: "$597" },
    { seats: "A 20 person shop",  monthly: "$997" },
  ],

  build: {
    complete: "$9,240",
    listed: "$11,550",
    exampleOneTotal: "$8,250",
    exampleTwoTotal: "$9,240",
  },

  componentPrice: "$97/mo",
  componentBuildFee: "No build fee",
} as const;
```

`onboarding: "Calibration"` is gone. There is no second product name on this site. The
build is called the build. If the word Calibration appears anywhere in the rendered output,
that is a defect.

**Why three examples and not eight rows.** Signal has one price, set by a rule: $297 covers
three people, every person after is $100, and it stops at $997. That sentence is the price,
and it is completely determinate, so Rule 3 is satisfied by the sentence alone.

An earlier draft of this file listed all eight seat counts as a table. That was a mistake.
Eight priced rows read as eight tiers, which is precisely the "the menu is too complex"
problem this rewrite exists to solve, and it visually contradicts the claim printed
directly above it that nothing is gated. Three rows labeled as examples let a reader place
themselves in about two seconds and cannot be mistaken for packages.

Render them with the heading "For example" and never with the word tier, plan, or package.
Nothing in this block is selectable.

---

## src/content/six.ts

Order is load-bearing. Always sort by `order`. Core Build is 1 at the base and everything
else rests on it.

```ts
export const SIX = [
  {
    id: "core", order: 1, label: "Core Build", price: "$2,800", required: true,
    plainQuestion: "Is your business running out of one login or nine?",
    brokenSignal: "Leads in a form service, texts on a personal phone, and a spreadsheet holding it together.",
    whatItIs: "Your account built, your contacts imported and cleaned, your pipeline set up with the stages you actually use, and your existing payment processor and calendar connected rather than replaced. User accounts and permissions for everyone who needs them, a live training call, and your own help area with videos and an FAQ. Every build starts here.",
  },
  {
    id: "getfound", order: 2, label: "Get Found", price: "$900",
    plainQuestion: "What do people find when they look you up?",
    brokenSignal: "A listing with the wrong hours and four reviews, two of them bad.",
    whatItIs: "Google Business Profile claimed and optimized, your hours, address, phone and services synced across the major directories, and duplicate listings cleaned up. Review requests fire automatically off a completed job or a paid invoice instead of somebody remembering. Responses to reviews are drafted for you and held for your approval, and a negative review alerts you immediately.",
  },
  {
    id: "website", order: 3, label: "Website", price: "$3,300",
    plainQuestion: "Does your website do anything besides exist?",
    brokenSignal: "A contact form that emails you, and then nothing happens.",
    whatItIs: "Built around how your business actually sells, with page structure and SEO done properly and your existing site migrated without a minute of downtime. Every form creates a contact, tags where it came from, enters the pipeline, and starts a follow-up sequence. This is the line that comes off the quote most often, because plenty of businesses already have a site worth keeping.",
  },
  {
    id: "nevermiss", order: 4, label: "Never Miss a Lead", price: "$850",
    plainQuestion: "What happens when somebody reaches out and you are on a job?",
    brokenSignal: "A call missed at two in the afternoon and a voicemail nobody plays until Thursday.",
    whatItIs: "A business number with call forwarding to any phone, every missed call answered by text within seconds, and voicemail transcribed and texted to you. The caller is tagged, entered into the pipeline, and followed up twice if they go quiet. Separate messaging for business hours and after hours. An AI chat agent on your website that answers questions and hands off to a person. Calls, texts and chats land in one inbox.",
  },
  {
    id: "calendar", order: 5, label: "Fill the Calendar", price: "$1,600",
    plainQuestion: "Can somebody book you without playing phone tag?",
    brokenSignal: "Four texts back and forth before anyone agrees on a time.",
    whatItIs: "Separate calendars per service with real durations and buffers, two-way sync with the calendar you already use, and reschedule and cancel flows where a cancellation drops into a rebooking sequence. No-shows are detected and followed up automatically. There is also a capture form for the people who are interested but not ready to book.",
  },
  {
    id: "followup", order: 6, label: "Follow Up Automatically", price: "$2,100",
    plainQuestion: "What happens to the people who were interested but not ready?",
    brokenSignal: "One conversation, no second touch, gone.",
    whatItIs: "Email authentication and warmup so your mail actually lands in inboxes, then real sequences for new inquiries, no-shows, past customers and dormant customers. Text opt-in with the compliance handled, plus broadcast and sequence campaigns. Everything stops the moment somebody replies.",
  },
] as const;
```

`whatItIs` renders in full on `/build` only. On the homepage the detail variant shows
`label`, `plainQuestion`, `brokenSignal`, and `price`.

The Website line in `whatItIs` that concedes it is the line most often removed stays as
written. It is the sentence that makes the whole published price list believable.

---

## src/content/buildRows.ts

The homepage build table. Six systems then the complete build row.

```ts
export const BUILD_ROWS = [
  { name: "Core Build", note: "required", price: "$2,800" },
  { name: "Get Found", note: "", price: "$900" },
  { name: "Website", note: "", price: "$3,300" },
  { name: "Never Miss a Lead", note: "", price: "$850" },
  { name: "Fill the Calendar", note: "", price: "$1,600" },
  { name: "Follow Up Automatically", note: "", price: "$2,100" },
  { name: "All six, listed separately", note: "", price: "$11,550", subtotal: true },
  { name: "All six together", note: "20% off", price: "$9,240", emphasis: true },
] as const;
```

Two of these rows are not systems. `subtotal: true` renders in `--steel` with no emphasis.
`emphasis: true` is the only row in display type. Do not render a checkbox or a selector on
any row.

---

## src/content/addOns.ts

`/build` only. These never appear on the homepage.

```ts
export const ADD_ONS = [
  { name: "AI phone agent", price: "$700", desc: "Upgrades Never Miss a Lead. Answers every call, knows your services and hours, and books or routes the caller." },
  { name: "Get Paid", price: "$500", desc: "Estimates, invoices, contracts, e-signature and payment links." },
  { name: "Intake and Quote Forms", price: "$900", desc: "The questions you need answered before you start work, asked automatically." },
  { name: "Repeat and Refer", price: "$800", desc: "Birthday and anniversary offers, plus a referral program." },
  { name: "Sell Online", price: "$1,000", desc: "Product catalog, checkout, order bumps and upsells." },
  { name: "Campaign Pages", price: "$1,150", desc: "A lead magnet plus landing pages built for one purpose each." },
  { name: "Know What's Working", price: "$900", desc: "Tracking, attribution, and a dashboard that shows where your leads came from." },
  { name: "More Ways to Reach You", price: "$650", desc: "Instagram, Facebook, WhatsApp and Google messages in the same inbox as everything else." },
  { name: "Community and Courses", price: "$1,700", desc: "A private branded group with a course inside it, free or paid." },
] as const;
```

---

## src/content/included.ts

Grouped by system id, used only in the Signal monthly inclusion list. Every item is
included at every price.

```ts
export const INCLUDED = [
  { system: "core",      items: ["Contact database and pipeline", "Proposals, contracts and invoicing", "Recurring billing and subscriptions", "Your own client dashboard"] },
  { system: "getfound",  items: ["Google review automation", "Listings kept in sync", "Social media monitoring"] },
  { system: "website",   items: ["Hosting, SSL and uptime", "Every form wired to the pipeline"] },
  { system: "nevermiss", items: ["AI phone and chat agent", "Missed call text-back", "Unified message inbox"] },
  { system: "calendar",  items: ["Appointment booking", "Class and event scheduling", "No-show detection"] },
  { system: "followup",  items: ["Lead follow-up sequences", "Newsletter and text blast tools", "Online store", "Course, membership and community hosting"] },
  { system: "everything", items: ["Ads Manager, for running your own ads", "Monthly reporting dashboard"] },
] as const;
```

The `everything` group has no matching system and renders under the label EVERYTHING.

One deliberate omission: nowhere in this list do we claim somebody runs your ads. The tools
are included, the person is not, and that is Signal+. Do not soften this by adding an
"ad management" item here.

---

## src/content/steps.ts

```ts
export const STEPS = [
  { order: 1, label: "Audit", actor: "You", duration: "about an hour",
    body: "We walk the six systems with you and find which ones you are actually missing. You keep the findings whether or not you hire us, and anything you already have comes off the quote." },
  { order: 2, label: "Build", actor: "We do this", duration: "first 30 days",
    body: "You approve the itemized list before anything starts. Then we stand up your system, build the campaigns, connect your phone, calendar and site, and train whoever is going to use it." },
  { order: 3, label: "Run", actor: "We do this", duration: "ongoing",
    body: "It runs. You log into one place. We keep it working and add what the business needs next." },
] as const;
```

Step 2 is called Build. Not Calibration, not Onboarding, not Implementation.

`actor` renders as the actor pill from `01-design-system.md`: amber tint for "You", emerald
tint for "We do this". One step is yours and two are ours, and the pills make that visible
without a sentence claiming it. This is a live-site invention and it is worth keeping.

---

## src/content/testimonials.ts

Real, attributed, already live. Do not edit a quote, do not invent a fifth.

```ts
export const TESTIMONIALS = [
  { initials: "JE", name: "Jesse Eisenhour", business: "Sugar Creek Donuts",
    quote: "We went from a 4.7 star rating to a 4.9 across all platforms." },
  { initials: "BM", name: "Bryan Maley", business: "Jo's House",
    quote: "He wasn't afraid to push back with different perspectives on what might work better, but he always made it clear that this was our website and it would be built the way we wanted." },
  { initials: "LM", name: "Landon Miller", business: "Lando Commando",
    quote: "I now have more freedom. More time, more mental space, and that's priceless." },
  { initials: "BD", name: "Bill Dittlinger", business: "Whitley County Chamber of Commerce",
    quote: "We had no CRM and no easy way to collect information for members or events." },
] as const;

export const CREDENTIALS = [
  "15+ years in marketing",
  "3 businesses founded and operated",
  "Both sides, agency, in-house, and owner",
  "Whitley County Chamber of Commerce member and client",
  "Based in Columbia City, Indiana. Northeast Indiana and beyond.",
] as const;
```

The first quote contains a client's own statistic about their own rating. It stays because
it is theirs and it is attributed. Rule 2 governs claims the site makes, not claims a named
customer makes about their own business. Do not lift that number out of the quote to use
anywhere else on the site.

---

## src/content/beforeAfter.ts

Live copy. Four pairs, in this order.

```ts
export const BEFORE_AFTER = [
  { before: "A call comes in while you are with a customer. You mean to call back. You forget.",
    after:  "That call gets a text inside a minute, with a link to your calendar." },
  { before: "Someone messages at 8pm. You answer Thursday. They booked Tuesday.",
    after:  "The message is in the same inbox as everything else, and it got answered." },
  { before: "A good customer from last spring has not heard from you since last spring.",
    after:  "That customer got a reason to come back, on a schedule you set once." },
  { before: "You find out how busy next week is by looking at the calendar and hoping.",
    after:  "Next week is on one screen, and so is where every booking came from." },
] as const;
```

Column headings are "Now (the broken loop)" with sub-label "Manual memory drag" and "After
(automated)" with sub-label "Runs continuously".

---

## src/content/components.ts

Four. Not eleven. Each one is a single job, already built, with no build fee.

```ts
export const COMPONENTS = [
  { id: "website", name: "Website", price: "$97/mo",
    short: "A professional site, live and looked after.",
    desc: "We design and build the site on our template with your content, at no charge. The monthly keeps it live, hosted, secured and maintained, with a contact form that emails you." },
  { id: "getfound", name: "Get Found", price: "$97/mo",
    short: "Your business shows up correctly everywhere people look you up.",
    desc: "Google Business Profile claimed and optimized, your hours, address, phone and services synced across the major directories, and duplicate listings cleaned up. Plus a one-tap review request you send from your phone after a good job." },
  { id: "nevermiss", name: "Never Miss a Lead", price: "$97/mo",
    short: "Every call you miss gets answered.",
    desc: "A business number with call forwarding to any phone, every missed call answered by text within seconds, and voicemail transcribed and texted to you." },
  { id: "calendar", name: "Fill the Calendar", price: "$97/mo",
    short: "People book themselves at times you can actually take.",
    desc: "A booking page synced to your real calendar, whether that is Google, iCloud or Outlook, with a confirmation by text and email and a reminder before the appointment." },
] as const;
```

The names match the systems in `six.ts` exactly, and that is the point. The same four names
appear at $97 a month and again inside the build. A reader who understands the Component
already understands the system, and the ladder needs no explanation.

Every Component is `$97/mo` and every one has no build fee, so neither value is rendered
per row on the homepage. State the price once above the list.

---

## src/content/noSurprises.ts

Verbatim. Do not add items, do not reword.

```ts
export const NO_SURPRISES = [
  "The audit is free, and you keep the findings either way.",
  "No build fee on any Component, ever.",
  "No hourly billing, ever. Anything outside what we agreed is a flat fee from a published list.",
  "Every line of your build comes from the list above and is approved by you before work starts.",
  "If you start on a Component and later move to Signal, the $97 stops that month. You are never billed for both.",
  "Nothing you already paid for gets torn out and rebuilt. It gets built on.",
  "Carrier registration fees are on us.",
  "{{TEXT_ALLOWANCE_POLICY}}",
  "Cancel any time. If you prepaid, you keep access through the end of the term you paid for. We do not do refunds, and we do not need to, because you keep what you already paid for.",
] as const;
```

`{{TEXT_ALLOWANCE_POLICY}}` is unresolved. The old three-tier text allowances do not survive
seat-based pricing, and no replacement exists yet. Render the token literally.

---

## src/content/faqs.ts

```ts
export const FAQS = [
  { q: "Are you an agency?",
    a: "No. Agencies sell you hours and deliverables every month. We build a system and sell you access to it, the way you pay for the other software you rely on, except this one gets built around your business." },
  { q: "What does it cost?",
    a: "Two numbers, both on this page. The build is $9,240 for all six systems, or less if you do not need all six, priced from the published list. Then Signal is $297 a month for the first three people, $100 for each person after that, and it stops at $997. There is nothing you have to ask us to find out." },
  { q: "Why is there a build fee at all?",
    a: "Because the system is built around your business rather than handed to you as a blank tool. The build is the part where somebody sets up your pipeline, writes your sequences, connects your calendar and phone, and trains your people. That work happens once, so you pay for it once." },
  { q: "Do I own it?",
    a: "Your customers, your contacts, and your content are yours and you can take them with you. The system itself works like any subscription. If you stop paying, access stops. That is what keeps this priced like software instead of priced like a custom build." },
  { q: "Do you guarantee more leads?",
    a: "No, and be careful with anyone who does. We build and run the system. What it produces depends on your pricing, your capacity, and how you treat customers, and none of those are ours to promise." },
  { q: "Will this replace the software I already use?",
    a: "No. It sits alongside it and connects to it." },
  { q: "Do you offer refunds?",
    a: "No, and we would rather tell you that up front than bury it. What we do instead is keep working until the system matches what we scoped, at no additional cost. Everything runs month-to-month, so nothing locks you in while we get it right." },
  { q: "What if I only need some of the six?",
    a: "That is normal, and the audit is where we work out which ones. Anything you already have comes off the quote. The one caveat worth knowing up front is that the Core Build is required, because it is what the other five run on." },
  { q: "How long until it is running?",
    a: "The build is a 30 day phase. The technical work is usually finished well before that. The rest is getting your team using it." },
  { q: "What if I cancel?",
    a: "Cancel any time. If you paid monthly, you are done at the end of the month. If you prepaid for a year, you keep access through the end of that year. We do not issue refunds. {{WEBSITE_CANCELLATION_TERMS}}" },
  { q: "What is Signal+?",
    a: "The hands-on work layered on top once your system is running: ads, content, campaign management. We only offer it to customers already live on Signal, and it is priced separately when the time comes. Prices are published at /signal-plus." },
  { q: "What do you need from me?",
    a: "An hour for the audit, a few hours during the build, and access to your accounts. After that, answering the people it sends you." },
] as const;
```

`{{WEBSITE_CANCELLATION_TERMS}}` is unresolved. Render the token literally rather than
writing around it.

The cost question is second, not eighth. A reader who is doing price arithmetic in their
head is not reading the rest of the page until they get an answer.

---

## src/content/signalPlus.ts

```ts
export const SIGNAL_PLUS = [
  { name: "Social Media Management", price: "$600/mo", scope: "12 posts a month across 1 to 3 platforms." },
  { name: "Ad Campaign Management", price: "$500/mo", scope: "One active campaign, one new creative concept a month. Ad spend is billed by the platform, not by us." },
  { name: "Email Sequence Copywriting", price: "$500/mo", scope: "One new sequence a month up to 5 emails, edits to existing sequences included." },
  { name: "Content and Blog Writing", price: "$600/mo", scope: "Four pieces a month." },
  { name: "Resell Campaigns", price: "$200/mo", scope: "Automated campaigns back through your customer list." },
  { name: "Managed Lead Conversion", price: "$800/mo", scope: "AI and human follow-up on every inbound lead." },
  { name: "Retargeting, Growth", price: "$297/mo", scope: "Up to 20,000 impressions a month, ad budget included." },
  { name: "Retargeting, Pro", price: "$497/mo", scope: "Up to 50,000 impressions a month, ad budget included." },
] as const;
```

---

## src/content/industries.ts

All five seeded unpublished. Copy fields empty. Do not fill them.

```ts
export type Industry = {
  slug: string;
  name: string;
  published: boolean;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  triedBoth: { software: string; agency: string };
  sixOverrides: Partial<Record<"core" | "getfound" | "website" | "nevermiss" | "calendar" | "followup", string>>;
  componentIds: string[];
  coexistsWith: string;
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = [
  { slug: "functional-medicine", name: "Functional Medicine", published: false, metaTitle: "", metaDescription: "", heroHeadline: "", heroSub: "", triedBoth: { software: "", agency: "" }, sixOverrides: {}, componentIds: [], coexistsWith: "", faqs: [] },
  { slug: "food-service", name: "Food Service and Coffee", published: false, metaTitle: "", metaDescription: "", heroHeadline: "", heroSub: "", triedBoth: { software: "", agency: "" }, sixOverrides: {}, componentIds: [], coexistsWith: "", faqs: [] },
  { slug: "hospitality", name: "Hospitality", published: false, metaTitle: "", metaDescription: "", heroHeadline: "", heroSub: "", triedBoth: { software: "", agency: "" }, sixOverrides: {}, componentIds: [], coexistsWith: "", faqs: [] },
  { slug: "non-profit", name: "Non-Profit", published: false, metaTitle: "", metaDescription: "", heroHeadline: "", heroSub: "", triedBoth: { software: "", agency: "" }, sixOverrides: {}, componentIds: [], coexistsWith: "", faqs: [] },
  { slug: "hvac-auto", name: "HVAC and Auto Service", published: false, metaTitle: "", metaDescription: "", heroHeadline: "", heroSub: "", triedBoth: { software: "", agency: "" }, sixOverrides: {}, componentIds: [], coexistsWith: "", faqs: [] },
];
```

`sixOverrides` keys changed with the six. They are system ids now, and the override string
is the industry-specific `brokenSignal`.
