// Step through unit 1 lesson 1 and capture the first N cards, so we see the
// PRACTICE cards (listen/choose, type) and not just the teach screens.
import { test, expect } from "@playwright/test";
import { UNITS } from "../../src/data/index.js";
import { LANGUAGES } from "../../src/data/languages.js";

const OUT = "C:/dev/lingua/shots-deep";
const LANGS = ["fr", "es", "pt", "de", "no"];
const CARDS = 10;

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
  const unit = UNITS.filter((u) => u.lang === lang).sort((a, b) => a.order - b.order)[0];
  const lesson = (unit.lessons || []).find((l) => (l.items || []).length);

  test(`${lang}: ${lesson.id} — first ${CARDS} cards`, async ({ page }) => {
    test.setTimeout(240_000);
    await page.addInitScript(
      (json) => localStorage.setItem("lingua-v1", json),
      JSON.stringify(learner(lang))
    );
    await page.goto(`/lesson/${lesson.id}`);
    await page.waitForTimeout(1200);

    const begin = page.getByRole("button", { name: /begin|commencer|empezar|come|anfangen|start/i }).first();
    if (await begin.count()) { await begin.click(); await page.waitForTimeout(1500); }

    for (let i = 1; i <= CARDS; i++) {
      await page.waitForTimeout(900);
      await page.screenshot({ path: `${OUT}/${lang}-card${String(i).padStart(2, "0")}.png` });

      // advance: "Got it" on a teach card, else pick the first option, else Continue
      const got = page.getByRole("button", { name: /got it|compris|entendido|percebi|verstanden|skjonner|skjønner/i }).first();
      if (await got.count()) { await got.click(); continue; }

      const opts = page.locator('button:visible').filter({ hasNotText: /^(skip|show answer|close)$/i });
      const n = await opts.count();
      if (n) { await opts.nth(Math.min(1, n - 1)).click().catch(() => {}); await page.waitForTimeout(700); }

      const cont = page.getByRole("button", { name: /continue|continuer|continuar|weiter|fortsett/i }).first();
      if (await cont.count()) await cont.click().catch(() => {});
    }
    expect(true).toBe(true);
  });
}
