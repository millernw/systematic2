# The Scorecard flow

The only thing on this site that captures a lead. Every button points at it. It has never
had a spec, and `/diagnostic` already demonstrated what an unspecified page turns into.

Read this before building anything under `/diagnostic`.

## The honest problem with "scored from public data"

The page currently promises to score six systems "using what is already public about you."
Only some of that is true, and building on the false half will produce a scorecard that
invents numbers.

| System | Observable from outside? |
|---|---|
| Get Found | **Yes.** Profile exists, hours and phone consistent, review count and recency |
| Website | **Yes.** Site exists, loads on mobile, has a contact form, has a phone number |
| Fill the Calendar | **Partly.** A booking link is visible or it is not |
| Never Miss a Lead | **Partly.** A number and a chat widget are visible; behaviour is not |
| Core Build | **No.** Whether the business runs from one login is invisible |
| Follow Up Automatically | **No.** Sequences are invisible from outside |

So the scan is a **hybrid**: public signals for what can be seen, and four short questions
for what cannot. Four questions is the maximum. It stays under a minute.

Never score a system the scan cannot observe and did not ask about. An invented score on
the page whose brand is published pricing and no fake statistics would be the single most
damaging thing on the site.

## The flow

Five screens. No account, no password, no payment.

### 1. Start

Fields: business name, website URL, and a "I don't have a website" checkbox that disables
the URL field and scores Website as 0 with the reason "no site found."

Button: Start my scorecard
Line beneath: About a minute. Four questions and a look at what is already public.

Nothing is asked here that is not needed to run the scan. No phone, no email, no company
size. Every extra field on this screen costs conversions and buys nothing the scan uses.

### 2. Four questions

One per screen, large tap targets, three answers each, a 1-of-4 progress marker. No free
text. No back-out prompts.

**Q1, Never Miss a Lead.** When a call comes in and nobody can answer, what happens?
- Nothing, it goes to voicemail and sits there
- Voicemail, and I call back when I get a chance
- They get a text back automatically within a minute

**Q2, Core Build.** Where do your leads actually live?
- In my phone and my head
- A spreadsheet, or a few different apps
- One system everyone on the team uses

**Q3, Follow Up Automatically.** Somebody asks about pricing and then goes quiet. What
happens next?
- Nothing
- I follow up if I remember
- They get a sequence automatically until they reply

**Q4, Fill the Calendar.** Somebody books and does not show. What happens?
- Nothing
- I chase them if I notice
- They get an automatic follow-up and a rebooking offer
- We do not take appointments

The fourth answer on Q4 removes Fill the Calendar from scoring rather than scoring it zero.

### 3. Running

A short progress state naming what is actually being checked, in plain language: "Looking
at your Google listing", "Checking your site on a phone", "Looking for a booking link".

Minimum four seconds even if the checks return faster. A result that appears instantly
reads as a template rather than a scan. Do not fake progress beyond the real checks.

### 4. The result. Shown in full, immediately.

**No email gate.** The site promises twice that you keep the findings whether or not you
hire us, and the Scorecard is where that promise is either kept or broken. Gating the
result after the visitor answered four questions would trade the site's main asset for a
marginal capture rate.

The result has three parts, in this order:

1. **Six scores**, in stack order, each 0 to 100 with a one-line reason. The reason is not
   optional: "34, no booking link found on your site" is credible, a bare "34" is not.
2. **The one costing you most.** A single system, named, with what breaks without it, taken
   verbatim from that system's `brokenSignal` in `six.ts`.
3. **What it would take to fix it.** What gets built, from that system's `whatItIs`, and its
   price from `six.ts`. This is where the Scorecard becomes a quote.

Then two actions, in this order:
- **Primary:** Book the audit. About an hour, with a person, turns this into an itemized
  quote.
- **Secondary, quieter:** Email me a copy of this. One field.

Copy for the email field: Want this in writing? We will send it and leave you alone unless
you ask.

That sentence is the capture, and it works because it is true. Honour it.

### 5. After

If they gave an email, one message with the result and nothing else. No sequence unless
they book. The unsubscribe promise above is a promise.

## What gets captured

Every completed scan, whether or not an email was given:

```
business_name, website_url, six scores, weakest_system, weakest_system_price,
answers to Q1 through Q4, timestamp, source (utm or referrer)
```

Into HighLevel as a contact, tagged `scorecard-complete`, with the six scores and
`weakest_system` as custom fields, into the pipeline at a "Scorecard run" stage.

A scan with no email is still a lead: you have the business name and URL, which is enough
to look them up. Do not discard it.

## Rule 2 applies here, hardest

The Scorecard outputs **state**, never a projection. It says what is missing and what it
costs to build. It never says what fixing it will produce.

Banned on the result page: any sentence of the form "fixing this will get you X", any
recovered-revenue figure, any percentage lift, any "businesses like yours see". The Math
calculator on `/diagnostic` prices the current situation from the visitor's own inputs and
is the only dollar figure allowed anywhere in this flow.

If a score cannot be justified by something the scan actually observed or asked, it does
not get shown.

## What this flow does not have

No account creation. No password. No payment. No phone field. No "book a call to get your
results". No countdown timer. No fake scarcity. No chat bubble. No exit-intent popup.
