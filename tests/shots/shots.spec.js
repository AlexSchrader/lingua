// Screenshot every unit-1 lesson's opening card, for each Latin language.
// Not an assertion suite — it drives the real app and captures what a learner
// actually sees, which is the only way to check a card reads right.
import { test, expect } from "@playwright/test";
import { UNITS } from "../../src/data/index.js";
import { LANGUAGES } from "../../src/data/languages.js";

const OUT = "C:/dev/lingua/shots";
const LANGS = ["fr", "es", "pt", "de", "no"];

const learner = (lang) => ({
  state: {
    languages: LANGUAGES,
    profile: {
      onboarded: true, displayName: "Shot", reason: null, reminderTime: null,
      languages: [lang], activeLang: lang, languagesChosen: true,
    },
  },
  version: 1,
});

for (const lang of LANGS) {
  // unit 1 = the unit the learner meets FIRST, which is order 1, not id 1.
  const unit = UNITS.filter((u) => u.lang === lang).sort((a, b) => a.order - b.order)[0];
  const lessons = (unit.lessons || []).filter((l) => (l.items || []).length);

  test(`${lang}: unit 1 "${unit.title}" — ${lessons.length} lessons`, async ({ page }) => {
    test.setTimeout(180_000);
    await page.addInitScript(
      (json) => localStorage.setItem("lingua-v1", json),
      JSON.stringify(learner(lang))
    );

    for (const [i, lesson] of lessons.entries()) {
      await page.goto(`/lesson/${lesson.id}`);
      await page.waitForTimeout(1200);
      const n = String(i + 1).padStart(2, "0");
      // the intro screen: title + canDo + item count
      await page.screenshot({ path: `${OUT}/${lang}-u${unit.order}-l${n}-a-intro.png` });
      // then the first real card, which is what the learner is actually asked
      const begin = page.getByRole("button", { name: /begin|commencer|empezar|comeca|anfangen|start/i }).first();
      if (await begin.count()) { await begin.click(); await page.waitForTimeout(2000); }
      await page.screenshot({ path: `${OUT}/${lang}-u${unit.order}-l${n}-b-card.png` });
    }
    expect(lessons.length).toBeGreaterThan(0);
  });
}
