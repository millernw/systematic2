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
    check("Homepage renders 10 sections", secs.length === 10, `${secs.length} sections`);

    const words = visible.split(/\s+/).length;
    check("Homepage under 1,500 words", words < 1500, `${words} words`);

    check("Both prices in the hero",
          /\$9,240/.test(secs[0]?.innerText || "") && /\$297/.test(secs[0]?.innerText || ""));

    const heroImg = secs[0]?.querySelector("img");
    check("Hero has an image", !!heroImg, heroImg ? (heroImg.alt || "no alt") : "none");

    check("No duplicate 'runs through your memory'",
          count(/Every lead you get runs through your memory/g) <= 1);

    check("Credentials line appears once", count(/15\+ years/g) === 1);

    check("Math calculator is not on the homepage", !/Adjust the inputs/i.test(t));

    check("Components block is not on the homepage",
          !/A Component is one focused tool/i.test(t));

    check("Inclusion list is not on the homepage", !/Included at every price/i.test(t));

    check("Inclusion ids never rendered raw",
          !/\b(GETFOUND|NEVERMISS|FOLLOWUP|CALENDAR)\b/.test(t.toUpperCase().replace(/FILL THE CALENDAR/g,"")));

    check("FAQ numbering is two-digit", !/\b0\d\d\b/.test(t));

    // pricing must come immediately after the six
    const idx = (needle) => secs.findIndex(s => (s.innerText || "").includes(needle));
    const six = idx("Six systems."), price = idx("Two numbers. Both published.");
    check("Pricing immediately follows The Six", six > -1 && price === six + 1, `six@${six} pricing@${price}`);

    // CTA distribution
    const ctas = els("a,button").filter(e => /scorecard/i.test(e.innerText || ""));
    const tops = ctas.map(e => e.getBoundingClientRect().top + scrollY).sort((a,b)=>a-b);
    const biggestGap = tops.reduce((m,v,i) => i ? Math.max(m, v - tops[i-1]) : m, 0);
    check("No CTA gap over 35% of page", biggestGap < document.body.scrollHeight * 0.35,
          `largest gap ${Math.round(biggestGap)}px of ${document.body.scrollHeight}px`);

    check("Pricing section under 25% of page",
          price > -1 && secs[price].offsetHeight < document.body.scrollHeight * 0.25,
          price > -1 ? `${secs[price].offsetHeight}px` : "n/a");
  }

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
