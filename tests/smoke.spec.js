import { test, expect } from "@playwright/test";
import { LIVE_CARD_KINDS } from "../src/data/contract.js";

// ---- helpers ---------------------------------------------------------------

function todayISO() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

// A persisted FSRS-ish card that is already due (so the item enters reviews).
// stability/difficulty present so the store's migrate() leaves it untouched.
function dueCard() {
  return {
    due: new Date(Date.now() - 60_000).toISOString(),
    stability: 2,
    difficulty: 5,
    elapsed_days: 1,
    scheduled_days: 1,
    reps: 1,
    lapses: 0,
    learning_steps: 0,
    state: 2,
    last_review: new Date(Date.now() - 86_400_000).toISOString(),
  };
}

// A card that was scheduled in the past with a far-future due date (not due).
// Rung-1+ items with this card won't appear in the review queue.
function freshCard() {
  return {
    due: new Date(Date.now() + 86_400_000 * 365).toISOString(),
    stability: 4,
    difficulty: 5,
    elapsed_days: 0,
    scheduled_days: 365,
    reps: 1,
    lapses: 0,
    learning_steps: 0,
    state: 2,
    last_review: new Date(Date.now() - 86_400_000).toISOString(),
  };
}

const LANGUAGES = {
  ja: { id: "ja", name: "Japanese", flag: "🇯🇵", target: "B2", unlock: null, unlocked: true, level: "pre-A1", xp: 0 },
  es: { id: "es", name: "Spanish", flag: "🇪🇸", target: "A1", unlock: { lang: "ja", level: "A1" }, unlocked: false, level: "pre-A1", xp: 0 },
  fr: { id: "fr", name: "French", flag: "🇫🇷", target: "A1", unlock: { lang: "es", level: "A1" }, unlocked: false, level: "pre-A1", xp: 0 },
};

// 5 vocab already due, at mixed rungs → 3 multiple-choice + 2 typed reviews.
function reviewState() {
  const v = [
    ["ja-u1l1-ohayou",     "おはよう",   "ohayō",      "good morning", 1],
    ["ja-u1l1-konnichiwa", "こんにちは", "konnichiwa", "hello",        1],
    ["ja-u1l1-sayounara",  "さようなら", "sayōnara",   "goodbye",      1],
    ["ja-u1l1-hai",        "はい",       "hai",         "yes",          2],
    ["ja-u1l1-iie",        "いいえ",     "iie",         "no",           2],
  ];
  const items = {};
  for (const [id, front, reading, meaning, rung] of v) {
    items[id] = { id, type: "vocab", front, reading, meaning, lang: "ja", unit: 1, lesson: 1, example: null, accept: [], rung, srs: dueCard() };
  }
  return {
    state: {
      items,
      languages: LANGUAGES,
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: todayISO(), reviewsCleared: false, lessonDone: false },
      ui: {},
    },
    version: 1,
  };
}

// Fixture that exercises all LIVE_CARD_KINDS in one session:
//   konnichiwa rung=3 due   → build (review)
//   ohayou     rung=0 vocab → teach + choice + type:meaning (lesson)
//   あ          rung=0 kana  → teach + choice + type:produce (lesson)
//   all others rung=1 not due → skipped from both queues
function kindFixtureState() {
  const defs = [
    { id: "ja-u1l1-ohayou",     type: "vocab", front: "おはよう",   reading: "ohayō",      meaning: "good morning", example: { jp: "おはよう！",   en: "Good morning!" }, accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-konnichiwa", type: "vocab", front: "こんにちは", reading: "konnichiwa", meaning: "hello",        example: { jp: "こんにちは！", en: "Hello!" },        accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-sayounara",  type: "vocab", front: "さようなら", reading: "sayōnara",   meaning: "goodbye",      example: { jp: "さようなら。", en: "Goodbye." },       accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-hai",        type: "vocab", front: "はい",       reading: "hai",         meaning: "yes",          example: { jp: "はい。",       en: "Yes." },           accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-iie",        type: "vocab", front: "いいえ",     reading: "iie",         meaning: "no",           example: { jp: "いいえ。",     en: "No." },            accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-a",          type: "kana",  front: "あ",         reading: "a",           meaning: null,           example: null,                                          accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-i",          type: "kana",  front: "い",         reading: "i",           meaning: null,           example: null,                                          accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-u",          type: "kana",  front: "う",         reading: "u",           meaning: null,           example: null,                                          accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-e",          type: "kana",  front: "え",         reading: "e",           meaning: null,           example: null,                                          accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-o",          type: "kana",  front: "お",         reading: "o",           meaning: null,           example: null,                                          accept: [], lang: "ja", unit: 1, lesson: 1 },
  ];
  const items = {};
  for (const it of defs) {
    let rung, srs;
    if (it.id === "ja-u1l1-konnichiwa")                            { rung = 3; srs = dueCard();   } // due → build review
    else if (it.id === "ja-u1l1-ohayou" || it.id === "ja-u1l1-a") { rung = 0; srs = freshCard(); } // new → lesson
    else                                                             { rung = 1; srs = freshCard(); } // graduated, not due → skipped
    items[it.id] = { ...it, rung, srs };
  }
  return {
    state: {
      items,
      languages: LANGUAGES,
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: todayISO(), reviewsCleared: false, lessonDone: false },
      ui: {},
    },
    version: 1,
  };
}

// Plays whichever card is on screen by answering correctly.
// Returns the card kind ("teach", "choice", "type:meaning", "type:produce", "build"),
// or false once the finish screen ("Back to Today") shows.
async function playCard(page) {
  const finish      = page.getByRole("button", { name: "Back to Today" });
  const teach       = page.getByRole("button", { name: "Got it" });
  const typeCard    = page.getByTestId("type-card");
  const option      = page.locator('[data-correct="true"]');
  const tile        = page.locator('[data-testid="tile"]');
  const continueBtn = page.getByRole("button", { name: "Continue" });

  await Promise.race([
    finish.waitFor({ state: "visible", timeout: 8000 }),
    teach.waitFor({ state: "visible", timeout: 8000 }),
    typeCard.waitFor({ state: "visible", timeout: 8000 }),
    option.first().waitFor({ state: "visible", timeout: 8000 }),
    tile.first().waitFor({ state: "visible", timeout: 8000 }),
  ]).catch(() => {});

  if (await finish.isVisible().catch(() => false)) return false;

  if (await teach.isVisible().catch(() => false)) {
    await teach.click();
    return "teach";
  }

  if (await typeCard.isVisible().catch(() => false)) {
    const kind = (await typeCard.getAttribute("data-card-kind").catch(() => null)) ?? "type:unknown";
    if (await page.getByRole("button", { name: "Check" }).isVisible().catch(() => false)) {
      const answer = (await typeCard.getAttribute("data-answer").catch(() => "")) ?? "";
      await page.getByTestId("type-input").fill(answer);
      await page.getByRole("button", { name: "Check" }).click();
      await continueBtn.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    }
    // Use evaluate(el.click()) to bypass Playwright's coordinate-based stability
    // check — the "Correct" text insertion shifts the button position mid-flight.
    // React's event delegation still processes the click normally.
    try {
      await continueBtn.evaluate((el) => el.click());
    } catch { /* session ended mid-flight */ }
    return kind;
  }

  if (await tile.first().isVisible().catch(() => false)) {
    // BuildCard: click every tile in DOM order to assemble the full word,
    // then commit. Order doesn't matter for coverage — any assembly triggers commit.
    const count = await tile.count();
    for (let i = 0; i < count; i++) {
      await tile.nth(i).click({ force: true });
    }
    await continueBtn.click({ force: true });
    return "build";
  }

  if (await option.first().isVisible().catch(() => false)) {
    await option.first().click();
    await continueBtn.click({ force: true });
    return "choice";
  }

  return false;
}

// ---- tests -----------------------------------------------------------------

test("app mounts, no blank screen, no page errors", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await page.locator("#root > *").first().waitFor({ state: "attached", timeout: 8000 }).catch(() => {});
  expect(errors, errors.join("; ")).toEqual([]);
  await expect(page.locator("#root")).not.toBeEmpty();
  await expect(page.getByText("VocaLingo")).toBeVisible();
});

test("can navigate all four tabs", async ({ page }) => {
  await page.goto("/");
  for (const tab of ["Today", "Ladder", "Haruki", "Stats"]) {
    await page.getByRole("button", { name: tab, exact: true }).click();
    await expect(page.locator("#root")).not.toBeEmpty();
  }
});

test("settings opens from the header gear, not the bottom nav", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.getByRole("button", { name: "Reset all progress" })).toBeVisible();
});

test("zero-reviews-due: review step shows done, CTA goes straight to lesson", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Nothing due — you're clear")).toBeVisible();
  await expect(page.getByTestId("start-session")).toHaveText("Start lesson");
});

test("new words are taught, the loop completes, and it persists", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("/");
  await page.getByTestId("start-session").click();

  for (let i = 0; i < 80; i++) {
    if (!(await playCard(page))) break;
    await page.waitForTimeout(20);
  }
  await page.getByRole("button", { name: "Back to Today" }).click();

  await expect(page.getByText("Lesson complete")).toBeVisible();
  await expect(page.getByText(/1 day\b/)).toBeVisible();

  const persisted = await page.evaluate(() => localStorage.getItem("vocalingo-v1"));
  const graded = JSON.parse(persisted).state.items["ja-u1l1-ohayou"];
  expect(graded.rung).toBeGreaterThanOrEqual(1);
  expect(new Date(graded.srs.due).getTime()).toBeGreaterThan(Date.now());

  await page.reload();
  await expect(page.getByText("Lesson complete")).toBeVisible();
  expect(errors).toEqual([]);
});

test("card-kind coverage: every LIVE_CARD_KIND appears in one session", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript(
    (json) => { localStorage.setItem("vocalingo-v1", json); },
    JSON.stringify(kindFixtureState())
  );
  await page.goto("/");
  await page.getByTestId("start-session").click();

  const seenKinds = new Set();
  for (let i = 0; i < 40; i++) {
    const kind = await playCard(page);
    if (kind === false) break;
    if (typeof kind === "string") seenKinds.add(kind);
    await page.waitForTimeout(50);
  }

  for (const k of LIVE_CARD_KINDS) {
    expect(seenKinds, `kind "${k}" not seen (saw: ${[...seenKinds].join(", ")})`).toContain(k);
  }
  expect(errors).toEqual([]);
});

// Dormant card kinds — wired here once the brief ships so the coverage test
// knows about them before the runner does.
test.skip("trace cards appear when a kana item reaches rung 4", async () => {});
test.skip("speak cards appear when a vocab item reaches rung 5", async () => {});

test("reviews are app-judged — no self-grading, grades persist", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // Seed ONCE — addInitScript runs before every navigation (incl. reload), so
  // guard it or the reload would clobber the session's persisted progress (the
  // very thing this test verifies).
  await page.addInitScript(
    (json) => {
      if (!localStorage.getItem("vocalingo-v1")) localStorage.setItem("vocalingo-v1", json);
    },
    JSON.stringify(reviewState())
  );
  await page.goto("/");
  await page.getByTestId("start-session").click();

  await page.locator('[data-correct],[data-testid="type-card"]').first().waitFor({ state: "visible" });
  for (const g of ["Again", "Hard", "Good", "Easy"]) {
    await expect(page.getByRole("button", { name: g, exact: true })).toHaveCount(0);
  }

  for (let i = 0; i < 20; i++) {
    if (!(await playCard(page))) break;
    await page.waitForTimeout(40);
  }
  await page.getByRole("button", { name: "Back to Today" }).click();

  await expect(page.getByText("Reviews cleared")).toBeVisible();
  await expect(page.getByText("Lesson complete")).toBeVisible();
  await page.reload();
  await expect(page.getByText("Reviews cleared")).toBeVisible();
  expect(errors).toEqual([]);
});
