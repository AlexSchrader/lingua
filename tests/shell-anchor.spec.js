import { test, expect } from "@playwright/test";
import { PERSIST_VERSION } from "../src/store/migrate.js";

// The app is a fixed shell: pinned top bar, ONE scrolling <main>, pinned bottom
// nav. This suite locks that down, because it broke silently once already — text
// size is applied as `zoom` on <html>, which scales every length, so `#root`'s
// plain `100dvh` laid out one viewport tall and then RENDERED --app-zoom taller
// than the screen (5% at default, 20% at large). That leftover was real
// scrollable overflow on the document, and a swipe dragged the whole shell,
// header and nav included. Nothing in the suite would have caught it: every
// other assertion passes just as well on a page that scrolls bodily.
//
// So: assert the document itself has NO scrollable overflow at every text size,
// and that the two bars hold their position while the content scrolls under them.

const seedTextSize = (page, textSize) =>
  page.addInitScript(
    ([json]) => localStorage.setItem("lingua-v1", json),
    [JSON.stringify({ state: { settings: { textSize } }, version: PERSIST_VERSION })]
  );

// small 0.85 · default 1.05 · large 1.2 (App.jsx / main.jsx)
for (const textSize of ["small", "default", "large"]) {
  test(`document does not scroll at text size "${textSize}"`, async ({ page }) => {
    await seedTextSize(page, textSize);
    await page.goto("/ladder");
    await expect(page.locator("nav")).toBeVisible();

    // The zoom actually applied — otherwise this test would pass by not testing.
    const zoom = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue("--app-zoom").trim()
    );
    expect(zoom).toBe({ small: "0.85", default: "1.05", large: "1.2" }[textSize]);

    // No overflow on the document, and #root is exactly one viewport tall.
    const m = await page.evaluate(() => {
      const de = document.documentElement;
      const root = document.getElementById("root").getBoundingClientRect();
      return {
        overflow: de.scrollHeight - de.clientHeight,
        rootHeight: root.height,
        viewport: window.innerHeight,
      };
    });
    expect(m.overflow).toBeLessThanOrEqual(1);
    expect(Math.abs(m.rootHeight - m.viewport)).toBeLessThanOrEqual(2);
  });
}

test("the bars stay put while the content scrolls under them", async ({ page }) => {
  await page.goto("/ladder");
  const header = page.locator("header");
  const nav = page.locator("nav");
  await expect(nav).toBeVisible();

  // Wait until there is genuinely something to scroll. Without this the test can
  // race a cold preview server: the Ladder is still laying out, scrollHeight is one
  // screen, and the "did it scroll" assertion fails for a reason that has nothing to
  // do with what this test is about. (Seen once under full parallel load.)
  await expect
    .poll(() => page.evaluate(() => {
      const m = document.querySelector("main");
      return m ? m.scrollHeight - m.clientHeight : 0;
    }), { timeout: 10000 })
    .toBeGreaterThan(0);

  const before = { header: await header.boundingBox(), nav: await nav.boundingBox() };

  // Scroll the content, and prove it really moved — a shell that cannot scroll
  // would otherwise satisfy the "bars did not move" half of this test.
  const scrolled = await page.evaluate(() => {
    const main = document.querySelector("main");
    main.scrollTop = main.scrollHeight;
    return { top: main.scrollTop, docTop: document.documentElement.scrollTop };
  });
  expect(scrolled.top).toBeGreaterThan(0);

  // Now try to drag the PAGE, which is what the user's swipe did. On a shell with
  // leftover document overflow this moves, taking the header and nav with it.
  const docTop = await page.evaluate(() => {
    window.scrollTo(0, 9999);
    document.documentElement.scrollTop = 9999;
    document.body.scrollTop = 9999;
    return Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
  });
  expect(docTop).toBe(0);

  const after = { header: await header.boundingBox(), nav: await nav.boundingBox() };
  // Tolerance is 2px, deliberately, and it is not a softened assertion: the property
  // under test is "did the chrome scroll away with the content", and a shell that
  // actually drags moves the bars by HUNDREDS of pixels. What this used to catch
  // instead was sub-pixel reflow — toBeCloseTo(x, 1) demands < 0.05px, and the nav
  // rounding from 665.86 to 666.86 as the list settled failed it about one full
  // preview run in three. Do not tighten this back; it measures the same thing.
  const MOVE_TOLERANCE = 2;
  expect(Math.abs(after.header.y - before.header.y)).toBeLessThanOrEqual(MOVE_TOLERANCE);
  expect(Math.abs(after.nav.y - before.nav.y)).toBeLessThanOrEqual(MOVE_TOLERANCE);

  // And the nav is sitting on the bottom edge of the viewport, not below it.
  const gap = await page.evaluate(() => {
    const r = document.querySelector("nav").getBoundingClientRect();
    return window.innerHeight - r.bottom;
  });
  expect(Math.abs(gap)).toBeLessThanOrEqual(2);
});
