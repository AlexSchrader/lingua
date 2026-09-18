// A HEADWORD MUST FIT ON THE CARD, at phone width, in every language.
//
// The four cards that show a front hard-coded it at 48-72px. That is right for
// は and wrong for `der Standpunkt`, which ran off both edges of a German B1
// teach card on Alex's phone. Not an edge case: 892 fronts are 14+ characters
// and the longest is 36. German compounds and French fixed phrases are the bulk
// of them, and both of those bands just grew.
//
// The screenshot was the diagnosis; THIS is the guard. It measures real laid-out
// geometry in a real browser, which is the only thing that can catch a font size
// that no longer fits its string.
import { test, expect } from "@playwright/test";
import { UNITS } from "../../src/data/index.js";
import { LANGUAGES } from "../../src/data/languages.js";

const PHONE = { width: 390, height: 844 };

// The worst case per language: the lesson containing that language's longest
// front. Derived, not hard-coded, so it follows the corpus as crews author.
function worstLesson(lang) {
  let worst = null;
  for (const u of UNITS) {
    if (u.lang !== lang) continue;
    for (const l of u.lessons ?? []) {
      for (const it of l.items ?? []) {
        const n = [...String(it.front ?? "")].length;
        if (!worst || n > worst.n) worst = { n, lesson: l.id, front: it.front };
      }
    }
  }
  return worst;
}

const learner = (lang) => ({
  state: { languages: LANGUAGES, profile: {
    onboarded: true, displayName: "Fit", reason: null, reminderTime: null,
    languages: [lang], activeLang: lang, languagesChosen: true } },
  version: 1,
});

// ONE test over five languages, not five tests. Each is a single page load and a
// geometry read, so splitting them bought nothing and cost four extra parallel
// workers — enough load to tip `smoke.spec.js:723` ("Reset everything survives a
// reload"), the heaviest test in the suite, past its 45s budget. lingua-8b traced
// that and is fixing the heavy test with `test.slow()`; this is the other half,
// and it is the half I own. Same assertions, same coverage, a fifth of the
// footprint.
test("the longest front in every language fits a 390px screen", async ({ page }) => {
  test.setTimeout(180_000);
  await page.setViewportSize(PHONE);
  const failures = [];

  for (const lang of ["de", "fr", "no", "es", "pt"]) {
    const w = worstLesson(lang);
    await page.addInitScript((j) => localStorage.setItem("lingua-v1", j), JSON.stringify(learner(lang)));
    await page.goto(`/lesson/${w.lesson}`);
    await page.getByTestId("lesson-begin").click({ timeout: 20_000 }).catch(() => {});
    await page.waitForTimeout(700);

    const overflow = await page.evaluate(() => {
      const bad = [];
      for (const el of document.querySelectorAll("div,span")) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.left < -1 || r.right > window.innerWidth + 1)) {
          bad.push(`"${(el.textContent || "").trim().slice(0, 40)}" spans ${Math.round(r.left)}..${Math.round(r.right)}`);
        }
      }
      return bad.slice(0, 3);
    });
    // Collect rather than fail fast: one run should report EVERY language that
    // overflows, not just the first alphabetically.
    for (const o of overflow) failures.push(`${lang} (longest front "${w.front}", ${w.n} chars): ${o}`);
  }

  expect(failures, `content runs off a ${PHONE.width}px screen`).toEqual([]);
});
