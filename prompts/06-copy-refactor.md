# The copy refactor

Run this only when `checks/spec-check.js` is green and the page copy is settled. It is a
**pure move**: not one rendered word may change.

## Why

The same sentence currently exists in up to three places: `docs/03-content.md`, a file in
`src/content/`, and sometimes hardcoded in a component. Rule 1 ("copy comes from
03-content.md verbatim") is a rule fighting that duplication rather than removing it. Three
copies that can disagree is the structural reason corrections keep getting undone.

After this, copy lives in `src/content/` only. `docs/03-content.md` keeps structure,
placement and treatment, and holds no sentences.

## The order matters

Step 1 happens in the **site repo** and must be verified before step 2 touches the spec
repo. Stripping the words out of `03-content.md` before they have a home in `src/content/`
is how copy gets lost.

---

## Step 1, in the site repo. Paste this.

```
This is a pure refactor. Not one rendered word may change on any page. If the site reads
differently afterwards, the refactor failed, regardless of how much cleaner the code is.

BEFORE YOU CHANGE ANYTHING, capture the baseline:
For each of /, /diagnostic, /work, /about, /build, /components, /signal-plus, save
document.querySelector('main').textContent with whitespace collapsed to a single space,
into baseline/<page>.txt. Commit that.

THEN:
1. Every user-visible string in src/components and src/pages moves into a typed file under
   src/content/. One file per page or per section, named for what it holds. Components
   receive text as props or read it from the content module. No component contains a
   sentence.
2. Every price and product name moves to src/config/brand.ts if it is not already there.
3. Do not reword anything while moving it. Do not fix a typo, do not improve a line, do not
   change capitalisation. If you believe something is wrong, list it at the end and leave
   it alone.

VERIFY:
Re-capture the same seven pages the same way and diff against baseline/. The diff must be
empty. Show me the diff output. An empty diff is the acceptance test, not your judgement
that it looks right.

Then run: bash checks/copy-source-check.sh
It must pass. It fails on long string literals in components, prices outside the data
layer, product names outside the data layer, and any surviving use of "Calibration".

Report: the list of files you created, the diff result, the check result, and any wording
you thought was wrong but left alone.
```

---

## Step 2, in the spec repo. After step 1 verifies.

Tell me the diff was empty and I will:

- Rewrite `docs/03-content.md` as structure, placement and treatment only, referencing
  content keys instead of quoting sentences. It should lose roughly 60% of its length.
- Change Rule 1 in `docs/00-START-HERE.md` and `AGENTS.md` from "copy comes from
  03-content.md verbatim" to "copy comes from `src/content/`; you do not write it and you do
  not improve it."
- Update every build prompt that says "copy verbatim from docs/03-content.md".
- Add `checks/copy-source-check.sh` to the review checklist.

## What this does not do

It does not change how the site looks, reads or converts. It buys one place to edit copy,
fewer drift bugs, and faster changes next time. Never run it instead of a conversion round.
