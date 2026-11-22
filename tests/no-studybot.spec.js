// THE PRODUCTION BUILD HAS NO STUDYBOT. Runs in the normal smoke modes, including
// SMOKE_MODE=preview, which serves the real production bundle. The static half of
// this check is scripts/check-no-studybot.mjs (reads dist/ after `npm run build`).
import { test, expect } from "@playwright/test";

test("no window.StudyBot and no hook chunk in a normal build", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("version-watermark")).toBeVisible();
  expect(await page.evaluate(() => typeof window.StudyBot)).toBe("undefined");
  const scripts = await page.evaluate(() => performance.getEntriesByType("resource").map((r) => r.name).filter((n) => /\.js(\?|$)/.test(n)));
  expect(scripts.some((n) => /\/hook[-.]/.test(n) || /TutorText/.test(n))).toBe(false);
});
