# How to Use This System

This system turns a blank website project into a fully briefed, strategy-first build package — ready to paste into any vibe coder. It uses Claude Code to interview you, think through your industry and messaging, and write all the template files for you.

---

## What's in This System

| File | Purpose | Used by |
|------|---------|---------|
| `INSTRUCTIONS.md` | This file — how to use the system | You |
| `INTAKE.md` | Interview script and reasoning instructions | Claude Code |
| `00-master-prompt.md` | Project identity, audience, and ground rules | Vibe coder |
| `01-content.md` | Messaging strategy and all copy content | Vibe coder |
| `02-design-direction.md` | Visual style, colors, typography, references | Vibe coder |
| `03-tech-specs.md` | Framework, hosting, integrations, constraints | Vibe coder |
| `04-structure.md` | Site map, navigation, section order, layout | Vibe coder |

**The general flow:**
1. You set up a new project folder with the template files
2. Claude Code runs the intake interview, fills in files 00–04
3. You review and confirm the filled files
4. You paste the relevant files into your vibe coder to build

---

## Step 1 — Set Up a New Project

Create a folder for your new website project. Copy all six files from this template folder into it:

```
your-project-name/
├── INSTRUCTIONS.md
├── INTAKE.md
├── 00-master-prompt.md
├── 01-content.md
├── 02-design-direction.md
├── 03-tech-specs.md
└── 04-structure.md
```

The template files (00–04) will be overwritten by Claude Code during the intake. Keep the originals safe in this template folder — never edit the originals directly.

---

## Step 2 — Run the Intake with Claude Code

Open Claude Code in your new project folder. Use one of these prompts to start:

---

### Standard start (recommended)
```
Run the website intake process. Read INTAKE.md and follow the instructions exactly, phase by phase. Start with Phase 1.
```

---

### If you already know the industry and want to skip ahead
```
Run the website intake process from INTAKE.md. The project is a [brief description — e.g. "law firm in Chicago specializing in personal injury"]. Start with Phase 1 but you can skip question 4 since I've given you the industry already.
```

---

### If you have existing brand assets or copy to share upfront
```
Run the website intake process from INTAKE.md. Before we start, here's some context: [paste any existing taglines, about text, brand guidelines, or relevant links]. Use this to inform your questions and skip anything I've already answered.
```

---

### If you want to run the intake faster (fewer back-and-forths)
```
Run the website intake process from INTAKE.md. I want to move quickly — ask me all Phase 1 questions at once, then all Phase 2 questions at once. I'll give you complete answers and you can proceed.
```

---

### If you want Claude Code to make more decisions with less input from you
```
Run the website intake process from INTAKE.md. I'm going to give short answers — I want you to use your best judgment to fill in gaps rather than asking follow-up questions. Use industry best practices and flag your assumptions in the debrief.
```

---

## Step 3 — What Happens During the Intake

Claude Code will guide you through eight phases. Here's what to expect:

**Phase 1 — Business discovery**
~10 questions about the project, audience, and competitive landscape. Answer as specifically as you can — vague answers produce generic output.

**Phase 2 — Industry analysis** *(Claude Code thinks, doesn't ask)*
Claude Code internally reasons about your industry and prepares a recommended list of pages, tools, and industry-specific considerations. It then presents these to you for confirmation.

> When Claude Code presents its industry recommendations, read them carefully. This is where you'll catch things you might have forgotten — booking systems, compliance requirements, local SEO pages, etc.

**Phase 3 — Messaging diagnosis**
~6 questions about the customer's problem, the transformation your product creates, and the tone of the site.

**Phase 4 — Framework selection** *(Claude Code thinks, then explains)*
Claude Code picks a messaging framework (StoryBrand, April Dunford, or Jobs to Be Done) and explains why. It then assigns a copy formula to each homepage section. You confirm or push back before anything is written.

> This is an important checkpoint. If the framework doesn't feel right, say so. It shapes every word in the content file.

**Phase 5 — Design direction**
~8 questions about visual style, colors, fonts, and reference sites. Have your reference URLs ready — this is the highest-impact input you can give.

**Phase 6 — Tech and structure**
Quick confirmation of the page list and tech stack. Claude Code presents the industry defaults it already identified — you're mostly confirming, not starting from scratch.

**Phase 7 — File writing**
Claude Code writes all five template files. This may take a minute. The files in your project folder will be overwritten with real, filled-in content.

**Phase 8 — Debrief**
Claude Code summarizes every strategic decision it made, flags anything marked as a draft or assumption, and gives you a ready-to-use first prompt for the vibe coder.

---

## Step 4 — Review the Filled Files

Before pasting anything into a vibe coder, open each file and check for:

- **`[DRAFT — confirm before use]`** — copy Claude Code wrote that needs your sign-off before it goes live
- **`[suggested — confirm]`** — hex codes or design choices Claude Code inferred from your description
- **`[placeholder]`** — content Claude Code couldn't write because you didn't have it yet (testimonials, pricing, etc.)

Also check:
- The **Messaging Foundation** at the top of `01-content.md` — this is the strategic brief for the whole build. Read it carefully. If anything feels off, fix it before touching the vibe coder.
- The **Ground Rules** in `00-master-prompt.md` — make sure any project-specific constraints are captured here
- The **Site Map** in `04-structure.md` — confirm every P1 page is actually needed at launch, and nothing is missing

---

## Step 5 — Build with the Vibe Coder

Use the first prompt from the Claude Code debrief, or construct your own using this pattern:

```
[Paste 00-master-prompt.md content]

---

[Paste the relevant detail file — 01, 02, 03, or 04 — depending on what you're building]

---

Now build: [specific thing you want — e.g. "the homepage hero section" or "the full site scaffold"]
```

### Which files to paste, and when

| What you're building | Files to paste |
|---------------------|---------------|
| Starting a new build from scratch | 00 + 01 + 02 + 04 |
| Setting up the project scaffold and tech | 00 + 03 |
| Building a copy-heavy section | 00 + 01 |
| Building a UI component or page layout | 00 + 02 + 04 |
| Adding an integration or tech feature | 00 + 03 |
| Building everything in one session | 00 + 01 + 02 + 03 + 04 |

> **Always paste `00-master-prompt.md` first.** It's the anchor for every session. The vibe coder reads it first and applies its ground rules to everything that follows.

### Building section by section (recommended approach)

Rather than pasting all files and asking the vibe coder to build the whole site, work one section at a time:

```
[Paste 00-master-prompt.md]
[Paste 01-content.md]

Build the hero section only. Use the BAB formula as specified in the Messaging Foundation. Output a single HTML section with embedded CSS. Do not build anything else yet.
```

After each section: review it, request adjustments, then move to the next section.

---

## Tips for Better Results

**During the intake:**
- The more specific your answers, the better the output. "We help small businesses" is not useful. "We help independent restaurant owners with fewer than 5 locations manage their online reputation" is.
- When Claude Code asks for reference URLs, give them. A URL is worth 500 words of description.
- Push back on the framework selection if it doesn't feel right. It shapes everything downstream.

**During the build:**
- Always start a new vibe coding session by pasting `00-master-prompt.md`. The AI has no memory between sessions.
- If the vibe coder drifts from the brief (wrong fonts, wrong colors, generic copy), paste `00-master-prompt.md` and the relevant detail file again as a correction.
- Use the section order in `04-structure.md` as your build sequence — it's already in the right conversion order.
- For long builds, keep a single HTML file open and ask the vibe coder to append each new section rather than regenerating from scratch.

**Maintaining the files:**
- If the client changes direction mid-project, update the template files first, then start a new vibe coding session with the updated files. Don't try to patch it mid-session.
- The template files are your source of truth. The vibe coder's output is not.

---

## Quick Reference — Prompts to Copy

### Start the intake
```
Run the website intake process. Read INTAKE.md and follow the instructions exactly, phase by phase. Start with Phase 1.
```

### Resume a paused intake
```
We were running the website intake process from INTAKE.md and paused after Phase [X]. Please resume from Phase [X+1]. Here's a summary of what we covered: [brief summary or paste previous answers].
```

### Update files after a client change
```
Read the current 00-master-prompt.md and 01-content.md. The client has changed the following: [describe changes]. Update both files to reflect this. Do not change anything else.
```

### Start a vibe coding session
```
Read 00-master-prompt.md carefully — these are the ground rules for this entire project. Then read [01 or 02 or 04] for the section I'm building. Confirm you've read and understood both files before writing any code.
```

### Correct a drifting vibe coder
```
Stop. Re-read 00-master-prompt.md. The output you just produced violates the following ground rules: [list them]. Start this section again from scratch following the brief exactly.
```

---

## File Ownership at a Glance

```
INTAKE.md         →  Claude Code reads this, you never edit it
00-master-prompt  →  Claude Code writes it, you review it, vibe coder reads it every session
01-content        →  Claude Code writes it, you review copy, vibe coder reads it for text sections
02-design         →  Claude Code writes it, you confirm visuals, vibe coder reads it for UI work
03-tech-specs     →  Claude Code writes it, you confirm stack, vibe coder reads it for tech setup
04-structure      →  Claude Code writes it, you confirm pages, vibe coder reads it for layout work
```
