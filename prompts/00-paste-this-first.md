# Paste this first

One orientation prompt. Paste it into the vibe coder as the first message of the session,
before any build prompt from `05-build-prompts.md`.

It does three things: tells the tool this is an edit rather than a rebuild, tells it which
document governs which kind of work, and makes it prove it read them before it writes a
line. That last part is the whole point. The common failure here is a tool that starts
building immediately from a half-read spec and rebuilds the old site confidently.

Re-paste it after any context reset, and any time the work starts drifting.

---

```
You are working on the Systematic marketing website.

This is an EDIT of a live, working site at gosystematic.com. It is not a new build and
it is not a redesign. Most of the site is good and stays. Four things change, and they
are listed in docs/00-START-HERE.md. If your diff touches anything beyond those four
things plus the names and prices they carry, you have gone too far.

STEP 1. Read these files completely, in this order, before you write anything:

  1. docs/00-START-HERE.md    What this company sells, the seven rules that override
                              your judgment, what changes, the build order, and the
                              decisions that are still open. Read this one twice.
  2. AGENTS.md                The short version of the rules, plus the specific traps
                              in this codebase. Re-read it every turn.
  3. docs/01-design-system.md Read before ANY visual work. It was re-derived from the
                              live site's CSS on 2026-08-17, not written from memory.
                              Where it contradicts your instincts, it wins.
  4. docs/02-architecture.md  Read before ANY structural work: stack, file structure,
                              routing, the shared Section component, pricing layout.
  5. docs/03-content.md       Read before writing ANY copy. Every word on the site is
                              in here. You do not write marketing copy for this site
                              and you do not improve the copy that exists.
  6. docs/04-data-files.md    Read before creating or editing anything in src/config
                              or src/content. It contains the literal file contents.
                              Every price traces to a pricing workbook. Use them exactly.

  Do not read prompts/ as a task list. It is instructions for me, not for you.

STEP 2. Do not build yet. Reply with only the following, so I know the spec landed:

  a. The ten homepage sections, in order.
  b. The four sections that were merged into other sections, and where each one went.
  c. The three routes that are deleted, and what each redirects to.
  d. The display typeface, the primary button color, and how eyebrows are rendered.
  e. The two unresolved tokens that must still render literally.
  f. Anything in the current codebase that contradicts a, b, c or d. List it. Do not
     fix it yet.

STEP 3. Stop and wait. I will send build prompts one at a time.

THE RULES, which override your own judgment about what would look good:

  1. Copy comes from docs/03-content.md verbatim. If a section needs words that are not
     in that file, stop and ask me.
  2. No claims about results. No lead counts, revenue figures, growth percentages or
     ROI, anywhere, including placeholders. The Math calculator is the single exception
     and it has written conditions in docs/03-content.md. Read them before touching it.
  3. Every price is published. The strings "starting at", "starts at", "contact us",
     "custom quote", "get a quote", "request a demo" and "from $" appear nowhere.
  4. No product name or price is hardcoded in a component. Everything reads from
     src/config/brand.ts or src/content/.
  5. docs/01-design-system.md is a spec, not a starting point. Do not substitute a
     typeface, add a color, or introduce anything from its anti-pattern list.
  6. Do not add sections, features or pages I did not ask for.
  7. End every response by naming which of these seven rules your work touched and how
     you complied. One line each. This is not optional.

FIVE THINGS THAT WILL BREAK THIS IF YOU GET THEM WRONG:

  - There is ONE product, called Signal. It has a one-time build and a monthly
    subscription. The build is called "the build." The word "Calibration" must not
    appear in any rendered output.
  - /signal and /pricing are DELETED and become homepage anchors. /calibration 301s to
    /build. If you build a page whose job is to explain Signal or to list prices, that
    page is the homepage. This is the single most important change in the whole project.
  - The homepage is TEN rendered sections. If you render more, a section that was merged
    has come back as a standalone. Count them before you tell me you are done.
  - Pricing comes immediately after The Six, with nothing between them.
  - The design is Plus Jakarta Sans, pill eyebrows in sentence case, amber buttons with
    ink text, brand gradient for dark sections, and cards. It is NOT IBM Plex, NOT
    uppercase mono labels, NOT emerald buttons, NOT flat ink sections, and NOT hairline
    lists. Older copies of these documents said otherwise and they were wrong.

Begin with Step 1.
```
