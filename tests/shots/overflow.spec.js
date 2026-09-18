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

for (const lang of ["de", "fr", "no", "es", "pt"]) {
  const w = worstLesson(lang);
  test(`${lang}: the longest front (${w.n} chars) fits a 390px screen`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize(PHONE);
    await page.addInitScript((j) => localStorage.setItem("lingua-v1", j), JSON.stringify(learner(lang)));
    await page.goto(`/lesson/${w.lesson}`);
    await page.getByTestId("lesson-begin").click({ timeout: 20_000 }).catch(() => {});
    await page.waitForTimeout(900);

    const overflow = await page.evaluate(() => {
      const bad = [];
      for (const el of document.querySelectorAll("div,span")) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.left < -1 || r.right > window.innerWidth + 1)) {
          bad.push(`"${(el.textContent || "").trim().slice(0, 40)}" spans ${Math.round(r.left)}..${Math.round(r.right)}`);
        }
      }
      return bad.slice(0, 5);
    });
    expect(overflow, `content runs off a ${PHONE.width}px screen (longest front here: "${w.front}")`).toEqual([]);
  });
}
