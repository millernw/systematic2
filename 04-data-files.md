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
  onboarding: "Calibration",

  support: "One business day, every tier",
  annualDiscountLabel: "Save 20%",
  extraTexts: "1,000 more texts for $25",

  signalTiers: [
    { id: "small",  name: "Small",  people: "1 to 3 people",  monthly: "$297", annual: "$2,851", texts: "2,000 texts/mo" },
    { id: "medium", name: "Medium", people: "4 to 9 people",  monthly: "$497", annual: "$4,771", texts: "5,000 texts/mo" },
    { id: "large",  name: "Large",  people: "10 or more",     monthly: "$697", annual: "$6,691", texts: "10,000 texts/mo" },
  ],

  calibration: {
    range: "$3,000 to $7,000 for most builds",
    exampleOneTotal: "$3,350",
    exampleTwoTotal: "$6,650",
  },

  componentPrice: "$97/mo",
  componentCap: 2,
} as const;
```

---

## src/content/six.ts

Order is load-bearing. Always sort by `order`.

```ts
export const SIX = [
  {
    id: "delivery", order: 1, label: "Delivery",
    plainQuestion: "Do customers get what you promised?",
    brokenSignal: "Good marketing just brings more people to a bad experience.",
    systemLine: "Contact database and pipeline, proposals, contracts and invoicing, your own client dashboard",
  },
  {
    id: "visibility", order: 2, label: "Visibility",
    plainQuestion: "What do people find when they look you up?",
    brokenSignal: "Four reviews, two of them bad, and a listing with the wrong hours.",
    systemLine: "Google review automation, social media monitoring",
  },
  {
    id: "responsiveness", order: 3, label: "Responsiveness",
    plainQuestion: "How fast does someone who reaches out get a real answer?",
    brokenSignal: "A form filled out at 8pm that nobody sees until Tuesday.",
    systemLine: "AI phone and chat agent, unified message inbox, appointment booking, class and event scheduling",
  },
  {
    id: "repeat", order: 4, label: "Repeat Business",
    plainQuestion: "Are the customers you already earned coming back?",
    brokenSignal: "Hundreds of past customers and no reason given to return.",
    systemLine: "Recurring billing and subscriptions, online store, course and membership hosting, private community",
  },
  {
    id: "followup", order: 5, label: "Follow-Up",
    plainQuestion: "Are you staying in front of people who were interested but not ready?",
    brokenSignal: "One conversation, no second touch, gone.",
    systemLine: "Lead follow-up sequences, newsletter and text blast tools",
  },
  {
    id: "newleads", order: 6, label: "New Leads",
    plainQuestion: "Are you reaching people who have never heard of you?",
    brokenSignal: "Ad spend pouring into the five problems above.",
    systemLine: "The tools to run your own ads are included. What is not included is somebody running them, because that is not something software does for you. When you are ready for that, it is a separate conversation.",
  },
] as const;
```

Note on the New Leads `systemLine`: it is deliberately an admission rather than a feature
list. It stays as written. It is the most credible line in the pricing section precisely
because it concedes something.

---

## src/content/included.ts

Grouped by factor id, used only in the pricing inclusion list. Every item is included at
every tier.

```ts
export const INCLUDED = [
  { factor: "delivery",       items: ["Contact database and pipeline", "Proposals, contracts and invoicing", "Your own client dashboard"] },
  { factor: "visibility",     items: ["Google review automation", "Social media monitoring"] },
  { factor: "responsiveness", items: ["AI phone and chat agent", "Unified message inbox", "Appointment booking", "Class and event scheduling"] },
  { factor: "repeat",         items: ["Recurring billing and subscriptions", "Online store", "Online course and membership hosting", "Private community"] },
  { factor: "followup",       items: ["Lead follow-up sequences", "Newsletter and text blast tools"] },
  { factor: "newleads",       items: ["Ads Manager, for running your own ads"] },
  { factor: "everything",     items: ["Monthly reporting dashboard"] },
] as const;
```

---

## src/content/steps.ts

```ts
export const STEPS = [
  { order: 1, label: "Audit", duration: "about an hour",
    body: "We walk the six with you and find what is actually broken. You keep the findings whether or not you hire us." },
  { order: 2, label: "Calibration", duration: "first 30 days",
    body: "A one-time buildout. We stand up your system, build the campaigns, connect your phone, calendar, and site, and train whoever will be using it." },
  { order: 3, label: "Signal", duration: "ongoing",
    body: "It runs. You log into one place. We keep it working and add what the business needs next." },
] as const;
```

---

## src/content/components.ts

```ts
export const COMPONENTS = [
  { id: "website", name: "Website + Hosting", price: "$97/mo", recurring: true,
    desc: "We design and build the site at no charge. The $97 keeps it live, hosted and looked after, with every message it brings in landing in one inbox." },
  { id: "missedcall", name: "Phone + Missed Call Text-Back", price: "$97/mo", recurring: true,
    desc: "Any call you miss gets answered by text before the caller reaches the next business on their list." },
  { id: "webchat", name: "WebChat and AI Chat Agent", price: "$97/mo", recurring: true,
    desc: "A chat widget on your site that captures the conversation instead of losing it." },
  { id: "welcomemat", name: "Welcome Mat Lead Capture", price: "$97/mo", recurring: true,
    desc: "A capture form on the site you already have, wired to a follow-up that actually happens." },
  { id: "smslist", name: "SMS List Building", price: "$97/mo", recurring: true,
    desc: "Keyword opt-ins that build a text list you own, with the compliance language handled." },
  { id: "birthday", name: "Birthday Campaign", price: "$97/mo", recurring: true,
    desc: "An automatic birthday offer by text and email." },
  { id: "anniversary", name: "Anniversary Campaign", price: "$97/mo", recurring: true,
    desc: "The same thing, triggered off the date they became a customer." },
  { id: "giveaway", name: "Giveaway Campaign", price: "$97/mo", recurring: true,
    desc: "A contest funnel that grows your contact list." },
  { id: "reviews", name: "Google Review Automation", price: "$97/mo", recurring: true,
    desc: "The right customers get asked at the right moment, without anyone chasing them." },
  { id: "listings", name: "Listings Management", price: "$50/mo", recurring: true,
    desc: "Your hours, address and phone stay correct everywhere people look you up." },
  { id: "reactivate", name: "Reactivate Campaign", price: "$1,800 one time", recurring: false,
    desc: "One campaign back through the customers you already have. Credited toward your start if you move to Signal." },
] as const;
```

Render recurring items together and the one-time item visually apart. Do not present
`$1,800 one time` in the same rhythm as the monthly rows.

---

## src/content/noSurprises.ts

Verbatim. Do not add items, do not reword.

```ts
export const NO_SURPRISES = [
  "The audit is free, and you keep the findings either way.",
  "No setup fee on any Component.",
  "No hourly billing, ever. Anything outside what we agreed is a flat fee from a published list.",
  "Texts are included at every tier, and email is unlimited. A text is 160 characters, so a long message counts as more than one. If you need more, it is 1,000 texts for $25, bought when you want them. We do not meter you and send a bigger invoice.",
  "Carrier registration fees are on us.",
  "Every line of your build is priced from a fixed list and approved by you before work starts.",
  "Cancel any time. If you prepaid, you keep access through the end of the term you paid for. We do not do refunds, and we do not need to, because you keep what you already paid for.",
] as const;
```

---

## src/content/faqs.ts

```ts
export const FAQS = [
  { q: "Are you an agency?",
    a: "No. Agencies sell you hours and deliverables every month. We build a system and sell you access to it, the way you pay for the other software you rely on, except this one gets built around your business." },
  { q: "Do I own it?",
    a: "Your customers, your contacts, and your content are yours and you can take them with you. The system itself works like any subscription. If you stop paying, access stops. That is what keeps this priced like software instead of priced like a custom build." },
  { q: "Do you guarantee more leads?",
    a: "No, and be careful with anyone who does. We build and run the system. What it produces depends on your pricing, your capacity, and how you treat customers, and none of those are ours to promise." },
  { q: "Will this replace the software I already use?",
    a: "No. It sits alongside it and connects to it." },
  { q: "What if I cancel?",
    a: "Cancel any time. If you paid monthly, you are done at the end of the month. If you prepaid for a year, you keep access through the end of that year. We do not issue refunds. {{WEBSITE_CANCELLATION_TERMS}}" },
  { q: "What is Signal+?",
    a: "The hands-on work layered on top once your system is running: ads, content, campaign management. We only offer it to customers already live on Signal, and it is priced separately when the time comes. Prices are published at /signal-plus." },
  { q: "How long until it is running?",
    a: "Calibration is a 30 day phase. The technical build is usually finished well before that. The rest is getting your team using it." },
  { q: "What does it cost?",
    a: "Everything is on the pricing section. Signal is $297, $497, or $697 a month by how many people use it, Calibration is a one-time build fee quoted from a published list, and single Components are $97 a month. There is nothing you have to ask us to find out." },
  { q: "What do you need from me?",
    a: "An hour for the audit, a few hours during Calibration, and access to your accounts. After that, answering the people it sends you." },
] as const;
```

`{{WEBSITE_CANCELLATION_TERMS}}` is unresolved. Render the token literally rather than
writing around it.

---

## src/content/calibrationItems.ts

Read-only price list for `/calibration`. Grouped, in this order.

```ts
export const CALIBRATION_ITEMS = [
  { group: "Foundation", name: "Website build or redesign", price: "$3,000", desc: "A new site, or a rebuild of the one you have." },
  { group: "Foundation", name: "Domain, DNS and staging setup", price: "$300", desc: "Built on staging first, then pointed live." },
  { group: "Foundation", name: "Business phone number and call forwarding", price: "$150", desc: "A number the system can answer from." },
  { group: "Foundation", name: "User accounts and permissions", price: "$250", desc: "Everyone who needs access, set up correctly." },
  { group: "Foundation", name: "Email deliverability setup", price: "$250", desc: "The records that decide whether your email lands in inboxes." },
  { group: "Foundation", name: "Google Business Profile optimization", price: "$300", desc: "Cleanup and connection of the listing people actually see." },
  { group: "Foundation", name: "Local directory submission and listings sync", price: "$250", desc: "Your details correct everywhere they appear." },

  { group: "Your data and tools", name: "Contact database migration", price: "$500", desc: "Your existing list moved in without losing history." },
  { group: "Your data and tools", name: "Third-party integrations", price: "$500", desc: "Payment processor, calendar, review platforms." },
  { group: "Your data and tools", name: "Conversion tracking setup", price: "$200", desc: "Knowing which leads came from where." },
  { group: "Your data and tools", name: "HighLevel snapshot install and configuration", price: "$750", desc: "The underlying platform configured for your business." },

  { group: "Capture and respond", name: "Missed-call text-back configuration", price: "$350", desc: "Routing, tagging, pipeline placement, and the follow-up behind it." },
  { group: "Capture and respond", name: "WebChat and AI chatbot configuration", price: "$350", desc: "Widget, conversation capture, routing rules." },
  { group: "Capture and respond", name: "AI voice agent scripting and call flow", price: "$700", desc: "Your FAQs, your tone, and when it hands off to a person." },
  { group: "Capture and respond", name: "Welcome mat lead capture build", price: "$350", desc: "Capture on your existing site, wired to a real follow-up." },
  { group: "Capture and respond", name: "IVR call routing setup", price: "$350", desc: "A call tree for businesses with more than one department." },
  { group: "Capture and respond", name: "WhatsApp Business integration", price: "$250", desc: "Including the Meta verification." },

  { group: "Campaigns", name: "Email campaign build-out", price: "$900", desc: "The sequences that follow up when you cannot." },
  { group: "Campaigns", name: "SMS campaign build-out", price: "$700", desc: "Broadcast and sequence content, written and built." },
  { group: "Campaigns", name: "SMS list-building triggers", price: "$250", desc: "Keywords, opt-in logic, and the compliance language." },
  { group: "Campaigns", name: "Review request automation build", price: "$350", desc: "Who gets asked, when, and what happens to the answer." },
  { group: "Campaigns", name: "Birthday and anniversary campaign build", price: "$450", desc: "Both triggers, date mapping, and the offers." },
  { group: "Campaigns", name: "Giveaway or contest funnel build", price: "$550", desc: "Entry funnel, rules, tracking, winner selection, follow-up." },
  { group: "Campaigns", name: "Lead magnet and delivery funnel", price: "$450", desc: "The asset itself plus the funnel that delivers it." },
  { group: "Campaigns", name: "Landing pages, per set", price: "$700", desc: "Pages built for one purpose each." },
  { group: "Campaigns", name: "Two-step order form and upsell funnel", price: "$400", desc: "For businesses selling directly through the site." },
  { group: "Campaigns", name: "Affiliate or referral program setup", price: "$350", desc: "Tracking links and commission rules." },

  { group: "Selling and serving", name: "Invoicing, estimates and payment collection setup", price: "$500", desc: "Templates, payment triggers, e-signature workflows." },
  { group: "Selling and serving", name: "E-commerce store build-out", price: "$600", desc: "Catalog, payment gateway, tax and shipping." },
  { group: "Selling and serving", name: "Membership or course site structure", price: "$600", desc: "Modules, sequencing, community." },
  { group: "Selling and serving", name: "Customer success and membership area setup", price: "$400", desc: "Welcome video, FAQ, support instructions." },
  { group: "Selling and serving", name: "Team training and activation call", price: "$400", desc: "Getting the people who use it comfortable with it." },
  { group: "Selling and serving", name: "Custom niche snapshot customization", price: "$900", desc: "Only when your industry does not have one built yet." },
  { group: "Selling and serving", name: "Non-standard page or content, per page", price: "$297", desc: "Anything outside the standard build." },
] as const;
```

The audit line from the internal workbook is deliberately absent, because the audit is
free on the site. Do not add it.

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
  sixOverrides: Partial<Record<"delivery" | "visibility" | "responsiveness" | "repeat" | "followup" | "newleads", string>>;
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
