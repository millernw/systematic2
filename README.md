# Systematic Website

Marketing site for Systematic. Systems as a service for small businesses.

## If you are an AI coding agent

Read `docs/00-START-HERE.md` first. Do not begin work before you have.

It indexes five reference documents and lists seven rules that override your own judgment
about this project. The two that get violated most often:

- **Copy comes from `docs/03-content.md` verbatim.** You do not write marketing copy for
  this site and you do not improve the copy that exists.
- **No product name or price is hardcoded in a component.** They live in
  `src/config/brand.ts` and `src/content/`, specified literally in
  `docs/04-data-files.md`.

`prompts/` contains build instructions for the human operator. Do not read it as a task
list and do not execute anything in it unless explicitly asked.

## Repo layout

```
docs/
  00-START-HERE.md      rules, build order, project facts. Read every session
  01-design-system.md   tokens, type, layout, motion, anti-patterns
  02-architecture.md    stack, file structure, config, routing, components
  03-content.md         every word on the site
  04-data-files.md      literal contents of the typed data files
prompts/
  05-build-prompts.md   human-operated build sequence and correction prompts
AGENTS.md               the short version of the rules, re-read every turn
src/                    the site
```

## Source of truth, in order

1. `docs/` for intent
2. `src/config/` and `src/content/` for values
3. The code for nothing

When the code disagrees with the docs, the code is wrong. When a decision changes, the doc
changes in the same commit as the code, or the next agent to touch this repo will
faithfully restore the old behavior.

## Not in this repo, on purpose

The internal pricing workbook. It contains estimated hours, cost, margin, and effective
hourly rate, none of which may appear on a page or in a data file. Published prices belong
in `brand.ts` and the content files; the arithmetic behind them stays out of the repo.
