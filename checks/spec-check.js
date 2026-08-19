/*
 * Systematic spec check.
 *
 * Paste this whole file into the browser console on any page of the site, or run it
 * against a deployed URL. It turns the prose rules in docs/ into pass/fail so drift is
 * caught in seconds instead of by reading.
 *
 * Run it after every build step. A rule nobody tests is a rule that decays.
 */
(() => {
  const R = [];
  // innerText omits scroll-revealed and collapsed content, which produces false passes.
  // Use textContent for presence/absence checks and innerText only for word count.
  const t = document.body.textContent.replace(/\s+/g, " ");
  const visible = document.body.innerText;
  const url = location.pathname;
  const check = (name, pass, detail = "") => R.push({ name, pass: !!pass, detail });
  const count = (re) => (t.match(re) || []).length;
  const els = (sel) => [...document.querySelectorAll(sel)];

  // ---- universal, every page ----
  check("No unresolved {{TOKEN}} rendered", !/\{\{[A-Z_]+\}\}/.test(t),
        (t.match(/\{\{[A-Z_]+\}\}/g) || []).join(" "));

  check("No banned pricing phrases",
        !/\b(starting at|starts at|contact us|custom quote|get a quote|request a demo)\b/i.test(t));

  check("Product name 'Calibration' is retired", !/Calibration/i.test(t));

  check("Old pillar names retired",
        !/\b(Responsiveness|Repeat Business|Visibility)\b/.test(t));

  check("No emoji", !/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(t));

  const upper = els("*").filter(e => e.children.length === 0 &&
        e.textContent.trim().length > 2 &&
        getComputedStyle(e).textTransform === "uppercase");
  check("No uppercase text", upper.length === 0, `${upper.length} elements`);

  const fonts = new Set(els("h1,h2,h3,p,button,a").map(e => getComputedStyle(e).fontFamily.split(",")[0].replace(/"/g,"")));
  check("Typeface is Plus Jakarta Sans", [...fonts].every(f => /Plus Jakarta Sans/.test(f)), [...fonts].join(" | "));

  const btns = els("a,button").filter(e => /scorecard|audit/i.test(e.innerText || "") &&
        getComputedStyle(e).backgroundColor !== "rgba(0, 0, 0, 0)");
  check("Primary buttons are amber", btns.length > 0 &&
        btns.every(b => getComputedStyle(b).backgroundColor === "rgb(252, 211, 77)"),
        btns.map(b => getComputedStyle(b).backgroundColor).join(" "));
  check("No white text on amber", !btns.some(b => getComputedStyle(b).color === "rgb(255, 255, 255)"));

  // ---- homepage only ----
  if (url === "/" || url === "") {
    const secs = els("section").filter(s => s.offsetHeight > 50);
    check("Homepage renders 7 sections", secs.length === 7, `${secs.length} sections`);

    const words = visible.split(/\s+/).length;
    check("Homepage under 1,200 words", words < 1200, `${words} words`);

    check("Homepage under 7,500px", document.body.scrollHeight < 7500,
          `${document.body.scrollHeight}px`);

    check("Both prices in the hero",
          /\$9,240/.test(secs[0]?.innerText || "") && /\$297/.test(secs[0]?.innerText || ""));

    const heroImg = secs[0]?.querySelector("img");
    check("Hero has an image", !!heroImg, heroImg ? (heroImg.alt || "no alt") : "none");

    // Round three. The hero does one job: one message, one button, no credential strip.
    check("Credential strip is not in the hero", !/15\+ years/.test(secs[0]?.textContent || ""));

    const heroBtns = els("section:first-of-type a, section:first-of-type button")
          .filter(e => getComputedStyle(e).backgroundColor === "rgb(252, 211, 77)");
    check("Hero has exactly one amber button", heroBtns.length === 1, `${heroBtns.length}`);

    const hdrBtns = els("header a, header button")
          .filter(e => getComputedStyle(e).backgroundColor === "rgb(252, 211, 77)");
    check("Header has exactly one amber button", hdrBtns.length === 1,
          hdrBtns.map(b => (b.innerText||"").trim()).join(" | "));

    check("No duplicate 'runs through your memory'",
          count(/Every lead you get runs through your memory/g) <= 1);

    check("Math calculator is not on the homepage", !/Adjust the inputs/i.test(t));

    check("Components block is not on the homepage",
          !/A Component is one focused tool/i.test(t));

    check("Inclusion list is not on the homepage", !/Included at every price/i.test(t));

    check("Inclusion ids never rendered raw",
          !/\b(GETFOUND|NEVERMISS|FOLLOWUP|CALENDAR)\b/.test(t.toUpperCase().replace(/FILL THE CALENDAR/g,"")));

    check("FAQ numbering is two-digit", !/\b0\d\d\b/.test(t));

    // Round three. Everything below moved to /build and must not come back.
    check("Before/after module is not on the homepage",
          !/Same business\. Different week/i.test(t));

    check("No-surprises list is not on the homepage",
          !/Carrier registration fees are on us/i.test(t));

    // The $11,550 figure STAYS, in the comparison sentence. The six-row table is what goes.
    check("Build price table is not on the homepage",
          !/All six, listed separately/i.test(t),
          "the six-row table and its 20% off pill belong on /build");

    check("System descriptions are not on the homepage",
          !/What gets built in Signal/i.test(t));

    // Round three ordering. The offer is ONE section; the plan comes before it;
    // proof and the final CTA are adjacent; the FAQ is below the CTA.
    //
    // Anchored on section ids, NOT on copy. An earlier version keyed the offer section on
    // the string "One login instead of nine"; when that headline was edited on 2026-08-19
    // every ordering check below silently reported offer@-1 and failed for the wrong
    // reason. Copy is allowed to change. Ids are structural and are what the deleted
    // routes redirect to, so they cannot drift without someone noticing.
    const byId  = (id) => secs.findIndex(s => s.id === id);
    const plan  = byId("how-it-works");
    const offer = byId("signal");
    const faq   = byId("faq");
    const cta   = byId("cta");
    // Proof has no id. It is the section immediately before the final CTA, and asserting
    // that it holds the testimonials is what makes "nothing sits between them" meaningful.
    const proof = cta > 0 ? cta - 1 : -1;

    check("Every keyed section has its id",
          [plan, offer, faq, cta].every(i => i > -1),
          `how-it-works@${plan} signal@${offer} faq@${faq} cta@${cta}`);

    check("The section before the Final CTA is Proof",
          proof > -1 && /what they'll tell you about the work/.test(secs[proof]?.textContent || ""),
          proof > -1 ? (secs[proof].querySelector("h2")?.innerText || "").slice(0, 40) : "n/a");

    check("The plan comes before the offer", plan > -1 && offer > -1 && plan < offer,
          `plan@${plan} offer@${offer}`);

    check("Six and Pricing are inside the offer section",
          offer > -1 && secs[offer].querySelector("#the-six") !== null &&
          secs[offer].querySelector("#pricing") !== null,
          "#the-six and #pricing must be ids on sub-blocks of #signal, not their own sections");

    // Blocks B and C open with an h3. Three h2s means the three old sections came back.
    const offerH2 = offer > -1 ? secs[offer].querySelectorAll("h2").length : -1;
    check("Offer section has one h2, with B and C as h3", offerH2 === 1,
          `${offerH2} h2 elements in #signal`);


    check("FAQ renders below the Final CTA", faq > -1 && cta > -1 && faq > cta,
          `faq@${faq} cta@${cta}`);

    // CTA distribution
    const ctas = els("a,button").filter(e => /scorecard/i.test(e.innerText || ""));
    const tops = ctas.map(e => e.getBoundingClientRect().top + scrollY).sort((a,b)=>a-b);
    const biggestGap = tops.reduce((m,v,i) => i ? Math.max(m, v - tops[i-1]) : m, 0);
    check("No CTA gap over 30% of page", biggestGap < document.body.scrollHeight * 0.30,
          `largest gap ${Math.round(biggestGap)}px of ${document.body.scrollHeight}px`);

    check("Offer section under 30% of page",
          offer > -1 && secs[offer].offsetHeight < document.body.scrollHeight * 0.30,
          offer > -1 ? `${secs[offer].offsetHeight}px of ${document.body.scrollHeight}px` : "n/a");

    check("Stakes section is no taller than the hero",
          secs[1] && secs[0] && secs[1].offsetHeight <= secs[0].offsetHeight,
          secs[1] ? `stakes ${secs[1].offsetHeight}px vs hero ${secs[0].offsetHeight}px` : "n/a");

    check("Stakes section renders no cards",
          secs[1] && secs[1].querySelectorAll('[class*="rounded-3xl"],[class*="rounded-2xl"]').length === 0,
          secs[1] ? `${secs[1].querySelectorAll('[class*="rounded-3xl"],[class*="rounded-2xl"]').length} cards` : "n/a");

    // Round three's two relocated sentences MOVED. Each must exist once, in its new home,
    // and not also in the place it came from.
    check("Success statement is in the Final CTA and nowhere else",
          count(/You stop being the part that breaks/g) === 1 && cta > -1 &&
          /You stop being the part that breaks/.test(secs[cta].textContent),
          `${count(/You stop being the part that breaks/g)} occurrences, cta@${cta}`);

    check("Stakes closing line is in Stakes and nowhere else",
          count(/Someone builds the system for your business/g) === 1 && secs[1] &&
          /Someone builds the system for your business/.test(secs[1].textContent),
          `${count(/Someone builds the system for your business/g)} occurrences`);

    check("Hero subhead keeps 'Then we run it'",
          /Then we run it/.test(secs[0]?.textContent || ""),
          "without it the hero never says a person runs this. See AGENTS.md");

    check("Old final-CTA headline is gone",
          !/Find out which of six is costing you the most/i.test(t));

    check("Credential strip renders exactly once, in How it works",
          count(/15\+ years/g) === 1 && plan > -1 && /15\+ years/.test(secs[plan].textContent));
  }

  // ---- mobile, runs whenever the viewport is under 768 ----
  if (innerWidth < 768) {
    check("No horizontal scroll", document.documentElement.scrollWidth <= innerWidth + 1,
          `${document.documentElement.scrollWidth}px in ${innerWidth}px`);

    const small = els("a,button,summary,[role=button]").filter(e => {
      const r = e.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44);
    });
    check("Tap targets at least 44px", small.length === 0,
          small.slice(0,4).map(e => (e.innerText||e.tagName).trim().slice(0,18)).join(" | "));

    check("Sticky CTA bar exists",
          els("*").some(e => getComputedStyle(e).position === "fixed" &&
                             /scorecard|audit/i.test(e.textContent || "")));

    if (url === "/" || url === "") {
      const stack = els("*").find(e => /Core Build/.test(e.textContent||"") && /\$2,800/.test(e.textContent||""));
      check("Core Build detail is open on load",
            !!stack && /one login or nine/i.test(stack.textContent || ""));
    }
  }

  // ---- build, the decision-depth page ----
  if (/\/build/.test(url)) {
    // Round three moved five things here. Assert each one landed.
    check("/build carries the before/after module", /Same business\. Different week/i.test(t));
    check("/build carries the build price table", /All six, listed separately/i.test(t) && /\$11,550/.test(t));
    check("/build carries the no-surprises list", /Carrier registration fees are on us/i.test(t));
    check("/build carries the system descriptions", /What gets built in Signal/i.test(t) ||
          /Your account built, your contacts imported/i.test(t));
    check("/build carries the inclusion list", /Included at every price/i.test(t));
    check("/build is read-only", els("input[type=checkbox],select").length === 0 &&
          !/estimate|your total|running total/i.test(t));
  }

  // ---- work ----
  if (/\/work/.test(url)) {
    check("No results claims on the proof page",
          !/\b\d+%|\btripled\b|\bincreased\b|\bgrew\b|\bROI\b/i.test(t));
    check("Uses homepage system names",
          /Core Build|Never Miss a Lead|Fill the Calendar/.test(t));
  }

  // ---- meta, every page ----
  const title = document.title || "";
  check("Page has a title under 60 chars", title.length > 0 && title.length <= 60, `${title.length}: ${title}`);
  const desc = document.querySelector('meta[name="description"]');
  check("Page has a description under 155 chars",
        !!desc && desc.content.length > 0 && desc.content.length <= 155,
        desc ? String(desc.content.length) : "missing");

  // ---- diagnostic only ----
  if (/diagnostic/.test(url)) {
    check("No invented value stack", !/Total Real Value|\$\d+ Value/i.test(t));
    check("No fabricated statistic", !/\b\d{2}% of unanswered\b/i.test(t));
    check("Math default is $300", /\$300/.test(t));
    check("Scores the six systems", /Core Build/.test(t) && /Never Miss a Lead/.test(t));
  }

  const fail = R.filter(r => !r.pass);
  console.table(R.map(r => ({ check: r.name, result: r.pass ? "PASS" : "FAIL", detail: r.detail })));
  console.log(fail.length ? `${fail.length} FAILING:\n` + fail.map(f => ` - ${f.name} ${f.detail}`).join("\n")
                          : `All ${R.length} checks pass.`);
  return { passed: R.length - fail.length, failed: fail.length, failing: fail.map(f => f.name) };
})();
