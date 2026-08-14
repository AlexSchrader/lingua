import { test, expect } from "@playwright/test";
import { LIVE_CARD_KINDS } from "../src/data/contract.js";
import { seedItems } from "../src/data/index.js";
import { LANGUAGES as LANG_CATALOG } from "../src/data/languages.js";

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

// Derived from the REAL catalog, never hand-written. This used to be a literal of
// three languages carrying the retired ja→es→fr `unlock` cascade and `target: "A1"`
// for es/fr — a snapshot that had drifted from a 20-language, all-B2, order-agnostic
// catalog. It mattered because `migrate` does `{ ...initialLanguages(), ...s.languages }`,
// so the PERSISTED fixture wins: every assertion about spine height or target was
// validating a shape the app no longer draws, and a real catalog regression could not
// fail CI. Mirrors initialLanguages() in useStore.
const LANGUAGES = Object.fromEntries(
  LANG_CATALOG.map((l) => [l.id, { ...l, level: "pre-A1", xp: 0 }])
);

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
//   konnichiwa rung=3 due   → type:produce (review — vocab, hash<share)
//   arigatō    rung=3 due   → build (review — vocab, hash≥share, no particle)
//   tegami     rung=3 due   → sentence:build (review — [word][particle][rest] example)
//   sayounara  rung=2 due   → type:reading (review — vocab, hash<share)
//   konbanwa   rung=2 due   → listen:type (review — audio, hash in dictation band)
//   kasa       rung=2 due   → particle:choice (review — かさ+を, particle in the cloze band)
//   shizuka    rung=2 due   → cloze:choice (review — front in example, no particle after)
//   hai        rung=1 due   → listen:choice (review — has audio, routes to listen)
//   iie        rung=4 due   → speak (review — SPOKEN rung, vocab)
//   ohayou     rung=0 vocab → teach + choice + type:meaning (lesson)
//   い          rung=0 kana  → teach + choice + trace:guided (lesson — kana check2 = trace)
//   all others rung=1 not due → skipped from both queues
function kindFixtureState() {
  const defs = [
    { id: "ja-u1l1-ohayou",     type: "vocab", front: "おはよう",   reading: "ohayō",      meaning: "good morning", example: { jp: "おはよう！",   en: "Good morning!" }, accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-konnichiwa", type: "vocab", front: "こんにちは", reading: "konnichiwa", meaning: "hello",        example: { jp: "こんにちは！", en: "Hello!" },        accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l2-arigatou",   type: "vocab", front: "ありがとう", reading: "arigatō",    meaning: "thank you",    example: { jp: "ありがとう。", en: "Thank you." },     accept: [], lang: "ja", unit: 1, lesson: 2 },
    { id: "ja-u1l4-tegami",     type: "vocab", front: "てがみ",     reading: "tegami",      meaning: "letter",       example: { jp: "てがみをかきます。", en: "I write a letter." }, accept: [], lang: "ja", unit: 1, lesson: 4 },
    { id: "ja-u1l2-konbanwa",   type: "vocab", front: "こんばんは", reading: "konbanwa",   meaning: "good evening", example: { jp: "こんばんは。", en: "Good evening." }, accept: [], lang: "ja", unit: 1, lesson: 2 },
    { id: "ja-u1l2-kasa",       type: "vocab", front: "かさ",       reading: "kasa",        meaning: "umbrella",     example: { jp: "かさをどうぞ。", en: "Please take an umbrella." }, accept: [], lang: "ja", unit: 1, lesson: 2 },
    { id: "ja-u1l3-shizuka",    type: "vocab", front: "しずか",     reading: "shizuka",     meaning: "quiet",        example: { jp: "ここはしずかです。", en: "It is quiet here." }, accept: [], lang: "ja", unit: 1, lesson: 3 },
    { id: "ja-u1l3-sakana",     type: "vocab", front: "さかな",     reading: "sakana",      meaning: "fish",         example: null,                                          accept: [], lang: "ja", unit: 1, lesson: 3 },
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
    if (it.id === "ja-u1l1-konnichiwa")  { rung = 3; srs = dueCard();   } // rung-3 vocab, hash<share → type:produce (Eng→JP)
    else if (it.id === "ja-u1l2-arigatou") { rung = 3; srs = dueCard(); } // rung-3 vocab, hash≥share, no particle → build
    else if (it.id === "ja-u1l4-tegami") { rung = 3; srs = dueCard();   } // rung-3 vocab, sentence band + [word][particle][rest] → sentence:build
    else if (it.id === "ja-u1l1-sayounara") { rung = 2; srs = dueCard(); } // rung-2 vocab, hash<share → type:reading (JP→rōmaji)
    else if (it.id === "ja-u1l2-konbanwa") { rung = 2; srs = dueCard();  } // rung-2 vocab, audio + hash band → listen:type (dictation)
    else if (it.id === "ja-u1l2-kasa")   { rung = 2; srs = dueCard();   } // rung-2 vocab, cloze band + particle after front → particle:choice
    else if (it.id === "ja-u1l3-shizuka") { rung = 2; srs = dueCard();  } // rung-2 vocab, cloze band + no particle after front → cloze:choice
    else if (it.id === "ja-u1l1-hai")    { rung = 1; srs = dueCard();   } // due rung-1 + has audio → listen:choice (review)
    else if (it.id === "ja-u1l3-sakana") { rung = 1; srs = dueCard();   } // due rung-1 vocab, not-listen (hash≥.5) + reverse band → choice:reverse (review)
    else if (it.id === "ja-u1l1-iie")    { rung = 4; srs = dueCard();   } // rung-4 vocab → speak (SPOKEN review)
    else if (it.id === "ja-u1l1-ohayou") { rung = 0; srs = freshCard(); } // new vocab → teach + choice + type:meaning (lesson)
    else if (it.id === "ja-u1l1-i")      { rung = 0; srs = freshCard(); } // new kana  → teach + choice + trace:guided
    else                                  { rung = 1; srs = freshCard(); } // graduated, not due → skipped
    items[it.id] = { ...it, rung, srs };
  }
  return {
    state: {
      items,
      languages: LANGUAGES,
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: todayISO(), reviewsCleared: false, lessonDone: false },
      settings: {}, // type:produce is default now (rung-3 vocab), no opt-in needed
      ui: {},
    },
    version: 1,
  };
}

// 25 real vocab, all rung-1 and due → more than REVIEW_CAP, to prove the cap.
function cappedReviewFixture() {
  const seed = seedItems();
  const vocab = Object.values(seed).filter((it) => it.type === "vocab").slice(0, 25);
  const items = {};
  for (const it of vocab) items[it.id] = { ...it, rung: 1, srs: dueCard() };
  return {
    state: {
      items,
      languages: LANGUAGES,
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: todayISO(), reviewsCleared: false, lessonDone: false },
      settings: {},
      ui: {},
    },
    version: 1,
  };
}

// Review debt (5 due, from late in the deck) + a first lesson that's still all-new,
// so the "learn a few" escape has something to offer even while reviews are locked.
//
// THE DEBT MUST BE IN THE LEARNER'S OWN LANGUAGE. This fixture used to take the last
// 5 vocab in the whole seed, which is ordered ja-then-fr — so it made five FRENCH
// items due, set no profile (falling back to Japanese), and then asserted that the
// Japanese learner was review-locked. It passed only because the daily queue wasn't
// language-scoped: it was pinning the exact bug fixed on 2026-08-14. Scoped to ja so
// it tests the soft lock rather than the leak.
function lockedWithNewFixture() {
  const seed = seedItems();
  const items = {};
  for (const [id, it] of Object.entries(seed)) items[id] = { ...it, rung: 0, srs: freshCard() };
  const jaVocab = Object.values(seed).filter((it) => it.type === "vocab" && it.lang === "ja");
  for (const it of jaVocab.slice(-5)) {
    items[it.id] = { ...items[it.id], rung: 1, srs: dueCard() };
  }
  return {
    state: {
      items,
      languages: LANGUAGES,
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: todayISO(), reviewsCleared: false, lessonDone: false },
      settings: {},
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
  const begin       = page.getByTestId("lesson-begin");
  const teach       = page.getByRole("button", { name: "Got it" });
  const typeCard    = page.getByTestId("type-card");
  const tracePad    = page.getByTestId("trace-pad");
  const speakCard   = page.getByTestId("speak-card");
  const sentenceCard = page.getByTestId("sentence-card");
  const conjugateCard = page.getByTestId("conjugate-card");
  const option      = page.locator('[data-correct="true"]');
  const tile        = page.locator('[data-testid="tile"]');
  const continueBtn = page.getByRole("button", { name: "Continue" });

  await Promise.race([
    finish.waitFor({ state: "visible", timeout: 8000 }),
    begin.waitFor({ state: "visible", timeout: 8000 }),
    teach.waitFor({ state: "visible", timeout: 8000 }),
    typeCard.waitFor({ state: "visible", timeout: 8000 }),
    tracePad.waitFor({ state: "visible", timeout: 8000 }),
    speakCard.waitFor({ state: "visible", timeout: 8000 }),
    conjugateCard.waitFor({ state: "visible", timeout: 8000 }),
    sentenceCard.waitFor({ state: "visible", timeout: 8000 }),
    option.first().waitFor({ state: "visible", timeout: 8000 }),
    tile.first().waitFor({ state: "visible", timeout: 8000 }),
  ]).catch(() => {});

  if (await finish.isVisible().catch(() => false)) return false;

  // Lesson intro (R27): the "calm breath" before card 1 — tap Begin to start.
  if (await begin.isVisible().catch(() => false)) {
    await begin.click();
    return "intro";
  }

  if (await teach.isVisible().catch(() => false)) {
    await teach.click();
    return "teach";
  }

  if (await speakCard.isVisible().catch(() => false)) {
    // No real mic/STT in CI — drive the card via its test hook (feeds a correct
    // transcript through the real grade path), then commit the grade.
    await page.evaluate(() => window.__speak?.pass());
    await page.getByTestId("speak-continue").click({ force: true });
    return "speak";
  }

  if (await sentenceCard.isVisible().catch(() => false)) {
    // No drag-and-drop in CI — the test hook assembles the correct token order,
    // then Continue commits the grade.
    await page.evaluate(() => window.__sentence?.solve());
    await continueBtn.click({ force: true });
    return "sentence:build";
  }

  if (await conjugateCard.isVisible().catch(() => false)) {
    // Fill the correct conjugated form via the test hook, submit (Check), then
    // Continue commits the grade — mirrors the type card's flow.
    await page.evaluate(() => window.__conjugate?.solve());
    await page.getByRole("button", { name: "Check" }).evaluate((el) => el.click()).catch(() => {});
    await continueBtn.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    await continueBtn.evaluate((el) => el.click()).catch(() => {});
    return "conjugate";
  }

  if (await tracePad.isVisible().catch(() => false)) {
    // Guided mode: wait for the animated stroke to hand off ("now trace it"),
    // then submit via the test hook. Mouse fallback kept for environments where
    // the hook hasn't mounted yet (first render race on very slow machines).
    // IS_WEBDRIVER skips animations so "now trace it" appears instantly in CI.
    // The card no longer auto-advances — on completion a "Continue" button gates
    // the next card, so loop until it appears, then click it.
    const traceContinue = page.getByRole("button", { name: "Continue" });
    for (let s = 0; s < 10; s++) {
      if (await traceContinue.isVisible().catch(() => false)) break;
      await page.locator("text=/now trace it/").waitFor({ state: "visible", timeout: 6000 }).catch(() => {});
      if (await traceContinue.isVisible().catch(() => false)) break;
      const hooked = await page.evaluate(() => {
        if (!window.__trace) return false;
        window.__trace.submitGood();
        return true;
      });
      if (!hooked) {
        const box = await tracePad.boundingBox().catch(() => null);
        if (box) {
          await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.35);
          await page.mouse.down();
          await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.65, { steps: 15 });
          await page.mouse.up();
        }
      }
      await page.waitForTimeout(400); // snap animation + next stroke setup
    }
    await traceContinue.click({ force: true }).catch(() => {});
    return "trace";
  }

  if (await typeCard.isVisible().catch(() => false)) {
    const kind = (await typeCard.getAttribute("data-card-kind").catch(() => null)) ?? "type:unknown";
    if (await page.getByRole("button", { name: "Check" }).isVisible().catch(() => false)) {
      const answer = (await typeCard.getAttribute("data-answer").catch(() => "")) ?? "";
      await page.getByTestId("type-input").fill(answer);
      // evaluate(el.click()) bypasses coordinate-stability check — fill() can
      // shift layout before Playwright's click settles on coordinates.
      const checkBtn = page.getByRole("button", { name: "Check" });
      await checkBtn.evaluate((el) => el.click());
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
    // choice / listen:choice / cloze:choice / particle:choice all render options —
    // tell them apart for coverage: the cloze card carries its own data-card-kind
    // (cloze:choice vs particle:choice); listen has a Play button.
    const clozeCard = page.getByTestId("cloze-card");
    const isCloze = await clozeCard.isVisible().catch(() => false);
    const isListen = await page.getByRole("button", { name: "Play the sound" }).isVisible().catch(() => false);
    const clozeKind = isCloze ? (await clozeCard.getAttribute("data-card-kind").catch(() => null)) ?? "cloze:choice" : null;
    // choice / choice:reverse / listen:choice all render ChoiceCard — it carries its
    // own data-card-kind so reverse (English→JP) is told apart from the plain card.
    const choiceKind = !isCloze ? await page.getByTestId("choice-card").getAttribute("data-card-kind").catch(() => null) : null;
    await option.first().click();
    await continueBtn.click({ force: true });
    return clozeKind ?? choiceKind ?? (isListen ? "listen:choice" : "choice");
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
  await expect(page.getByText("Lingua")).toBeVisible();
});

test("can navigate all four tabs", async ({ page }) => {
  await page.goto("/");
  for (const tab of ["Today", "Ladder", "Haruki", "Stats"]) {
    await page.getByRole("button", { name: tab, exact: true }).click();
    await expect(page.locator("#root")).not.toBeEmpty();
  }
});

test("Today shows capability signals, not the streak/XP scoreboard", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Learned", { exact: true })).toBeVisible();
  await expect(page.getByText("Mastered", { exact: true })).toBeVisible();
  // The retired engagement scoreboard is gone.
  await expect(page.getByText("Streak", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Freezes", { exact: true })).toHaveCount(0);
});

test("daily review caps the session at REVIEW_CAP (20 of 25 due)", async ({ page }) => {
  await page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(cappedReviewFixture()));
  // Today shows the capped, non-scary count (not the full backlog).
  await page.goto("/");
  await expect(page.getByText("20 due")).toBeVisible({ timeout: 8000 });
  // The review session itself is bounded to 20 (header reads .../20, never /25).
  await page.goto("/review");
  await expect(page.getByText(/1\s*\/\s*20\b/)).toBeVisible({ timeout: 8000 });
  await expect(page.getByText(/\/\s*25\b/)).toHaveCount(0);
});

test("Stats shows the Milestones section with a gentle next goal", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Stats", exact: true }).click();
  await expect(page.getByText("Milestones", { exact: true })).toBeVisible();
  // On a fresh account nothing is earned yet, so the single nearest goal is shown.
  await expect(page.getByText("Next", { exact: true })).toBeVisible();
});

test("Ladder word bank collects learned words, organized by unit", async ({ page }) => {
  // reviewState() seeds several rung≥1 vocab (おはよう / こんにちは …).
  await page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(reviewState()));
  await page.goto("/");
  await page.getByRole("button", { name: "Ladder", exact: true }).click();

  // The collapsible "Word bank" section is present; expand it.
  const bank = page.getByRole("button", { name: /Word bank/ });
  await expect(bank).toBeVisible();
  await bank.click();

  // A learned word shows, under its unit heading (はじめまして = Unit 1).
  await expect(page.getByText("こんにちは").first()).toBeVisible();
  await expect(page.getByText("はじめまして").first()).toBeVisible();
});

test("Ladder: a lesson expands to preview its items", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Ladder", exact: true }).click();
  // Expand the first unit, then its first lesson → the item list appears.
  await page.getByRole("button", { name: /はじめまして/ }).click();
  await page.getByRole("button", { name: /Lesson 1 ·/ }).first().click();
  await expect(page.getByText("おはよう").first()).toBeVisible(); // an item from lesson 1
});

test("settings opens from the header gear, not the bottom nav", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Settings" }).click();
  await expect(page.getByRole("button", { name: "Reset all progress" })).toBeVisible();
});

test("settings: reduce-motion toggle flips and persists", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Settings" }).click();
  const toggle = page.getByRole("switch", { name: "Reduce motion" });
  await expect(toggle).toHaveAttribute("aria-checked", "false");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-checked", "true");
  const persisted = await page.evaluate(() => JSON.parse(localStorage.getItem("lingua-v1")).state.settings.reduceMotion);
  expect(persisted).toBe(true);
});

test("zero-reviews-due: review step shows done, CTA goes straight to lesson", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("All clear")).toBeVisible();
  await expect(page.getByTestId("start-session")).toHaveText("Start lesson");
});

test("Today: mistake-review offers a targeted 'fix these' session", async ({ page }) => {
  const state = reviewState();
  state.state.mistakes = ["ja-u1l1-konnichiwa"]; // a recently-missed item
  await page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(state));
  await page.goto("/");
  const fix = page.getByTestId("start-fix");
  await expect(fix).toHaveText(/Fix your mistakes \(1\)/);
  await fix.click();
  await expect(page.getByText(/Fix-up ·/)).toBeVisible(); // the fix session, not the daily review
});

test("Today: 'Just a few' starts a capped micro-session", async ({ page }) => {
  await page.goto("/");
  const few = page.getByTestId("start-few");
  await expect(few).toBeVisible();
  await few.click();
  await page.getByTestId("lesson-begin").click(); // R27 intro → Begin
  // 3 new items → teach×3 + interleaved checks (~9 cards), not the full lesson (~30).
  const counter = page.getByText(/card 1 of \d+/);
  await expect(counter).toBeVisible();
  const total = parseInt((await counter.textContent()).match(/of (\d+)/)[1], 10);
  expect(total).toBeLessThanOrEqual(9);
});

test("R27: a lesson opens on a calm intro before card 1", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("start-session").click();
  // Intro first — a Begin button + item count, no card yet.
  await expect(page.getByTestId("lesson-begin")).toBeVisible();
  await expect(page.getByText(/new item/)).toBeVisible();
  await expect(page.getByText(/card 1 of/)).toHaveCount(0);
  // Begin → card 1 appears.
  await page.getByTestId("lesson-begin").click();
  await expect(page.getByText(/card 1 of/)).toBeVisible();
});

test("R20: reviews waiting don't hard-block — a few new items stay open", async ({ page }) => {
  await page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(lockedWithNewFixture()));
  await page.goto("/");
  // Reviews are due → they're still the primary CTA...
  await expect(page.getByTestId("start-session")).toHaveText(/Clear reviews/);
  // ...but the lock is soft: the "learn a few" escape is offered, not hidden.
  await expect(page.getByTestId("start-few")).toBeVisible();
});

test("new words are taught, the loop completes, and it persists", async ({ page }) => {
  test.setTimeout(120_000); // lesson 1 = 5 kana (guided trace, ~2.5s/stroke) + 5 vocab
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("/");
  await page.getByTestId("start-session").click();

  for (let i = 0; i < 80; i++) {
    if (!(await playCard(page))) break;
    await page.waitForTimeout(20);
  }
  await page.getByRole("button", { name: "Back to Today" }).click();

  await expect(page.getByText("Done", { exact: true })).toBeVisible();

  const persisted = await page.evaluate(() => localStorage.getItem("lingua-v1"));
  const state = JSON.parse(persisted).state;
  expect(state.streak.current).toBeGreaterThanOrEqual(1); // daily goal met → streak ticked
  const graded = state.items["ja-u1l1-ohayou"];
  expect(graded.rung).toBeGreaterThanOrEqual(1);
  expect(new Date(graded.srs.due).getTime()).toBeGreaterThan(Date.now());

  await page.reload();
  await expect(page.getByText("Done", { exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});

test("lesson: the Previous button steps back a card (visual, no crash)", async ({ page }) => {
  test.setTimeout(30_000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("/");
  await page.getByTestId("start-session").click();
  await page.getByTestId("lesson-begin").click(); // R27 intro → Begin

  // First card: no back control (nothing to step back to).
  await expect(page.getByText(/card 1 of/)).toBeVisible();
  await expect(page.getByRole("button", { name: "Previous card" })).toHaveCount(0);

  // Advance one card, then step back — the earlier card re-shows, no error.
  await playCard(page);
  await expect(page.getByText(/card 2 of/)).toBeVisible();
  const back = page.getByRole("button", { name: "Previous card" });
  await expect(back).toBeVisible();
  await back.click();
  await expect(page.getByText(/card 1 of/)).toBeVisible();

  expect(errors).toEqual([]);
});

test("card-kind coverage: every LIVE_CARD_KIND appears across review + lesson sessions", async ({ page }) => {
  test.setTimeout(60_000); // trace:guided animation ~1.3s/stroke in real browsers; IS_WEBDRIVER makes it instant
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript(
    (json) => { localStorage.setItem("lingua-v1", json); },
    JSON.stringify(kindFixtureState())
  );
  await page.goto("/");

  const seenKinds = new Set();
  // Coverage is the whole point of this test, so once every LIVE_CARD_KIND has been
  // seen there is nothing left to learn from playing more cards. Without this the
  // sessions run to their full card budget regardless, and the test measured ~48s
  // against its 60s cap — it passed alone and timed out under parallel workers,
  // failing the suite on an unloaded machine too (reproduced on the pre-merge base,
  // so this is long-standing, not a regression). NOTE: no assertion is relaxed —
  // every kind must still be seen, this only stops replaying cards after that.
  const covered = () => LIVE_CARD_KINDS.every((k) => seenKinds.has(k));

  // Session 1: reviews — konnichiwa (rung=3 due) → build card.
  await page.getByTestId("start-session").click();
  for (let i = 0; i < 20; i++) {
    const kind = await playCard(page);
    if (kind === false) break;
    if (typeof kind === "string") seenKinds.add(kind);
    if (covered()) break;
    await page.waitForTimeout(50);
  }
  await page.getByRole("button", { name: "Back to Today" }).click();

  // Session 2: lesson — い + おはよう (both rung=0) → teach/choice/trace/type:meaning.
  await page.getByTestId("start-session").click();
  for (let i = 0; i < 40; i++) {
    const kind = await playCard(page);
    if (kind === false) break;
    if (typeof kind === "string") seenKinds.add(kind);
    if (covered()) break;
    await page.waitForTimeout(50);
  }

  // Session 3: conjugate — exercised via its dev-preview sandbox. Unlike the other
  // kinds, conjugation has no A1 curriculum content (it produces plain N4 forms —
  // て/た/ない — that A1 doesn't teach), so it can't route in a normal A1 session
  // yet. The card is fully live and routed; the preview seeds a group-tagged verb
  // with a target form. It goes live in real reviews the moment A2 conjugation
  // content (conjForm items) is authored.
  await page.goto("/review?sandbox=1&card=conjugate");
  for (let i = 0; i < 8; i++) {
    const kind = await playCard(page);
    if (kind === false) break;
    if (typeof kind === "string") seenKinds.add(kind);
    if (covered()) break;
    await page.waitForTimeout(50);
  }

  for (const k of LIVE_CARD_KINDS) {
    expect(seenKinds, `kind "${k}" not seen (saw: ${[...seenKinds].join(", ")})`).toContain(k);
  }
  expect(errors).toEqual([]);
});

// speak is now live: the coverage test above drives it via the rung-4 `iie`
// fixture + playCard's speak hook, so the dormant-stub placeholder is retired.

// Fixture: one kana item at rung 3 (due) → review queue → TraceCard mode="free".
// No fresh items, so there is no learn phase — the review is the whole session.
function traceFreeFixtureState() {
  return {
    state: {
      items: {
        "ja-u1l1-i": {
          id: "ja-u1l1-i", type: "kana", front: "い", reading: "i",
          meaning: null, example: null, accept: [], lang: "ja", unit: 1, lesson: 1,
          rung: 3, srs: dueCard(),
        },
      },
      languages: LANGUAGES,
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: todayISO(), reviewsCleared: false, lessonDone: false },
      ui: {},
    },
    version: 1,
  };
}

// Trace scoring tests — skipped in preview because the test hook (window.__trace)
// is not included in production builds. Dev CI covers the scoring path.
test("trace free-mode scoring: correct strokes grade good and rung advances", async ({ page }) => {
  test.skip(process.env.SMOKE_MODE === "preview", "test hook not in production build");
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript(
    (json) => { localStorage.setItem("lingua-v1", json); },
    JSON.stringify(traceFreeFixtureState())
  );
  await page.goto("/");
  // い is rung=3 and due → appears as a free-trace review card at /review.
  await page.getByTestId("start-session").click();

  const tracePad = page.getByTestId("trace-pad");
  await tracePad.waitFor({ state: "visible", timeout: 8000 });

  // Trace completes to a "Continue" gate (no auto-advance); click it to grade.
  const traceContinue = page.getByRole("button", { name: "Continue" });
  for (let s = 0; s < 10; s++) {
    if (await traceContinue.isVisible().catch(() => false)) break;
    await page.evaluate(() => window.__trace?.submitGood());
    await page.waitForTimeout(900);
  }
  await traceContinue.click();

  await expect(page.getByRole("button", { name: "Back to Today" })).toBeVisible({ timeout: 12000 });
  const persisted = await page.evaluate(() => localStorage.getItem("lingua-v1"));
  const item = JSON.parse(persisted).state.items["ja-u1l1-i"];
  expect(item.rung).toBeGreaterThanOrEqual(4); // "good" grade must advance rung
  expect(errors, errors.join("; ")).toEqual([]);
});

test("trace free-mode scoring: wrong strokes grade again and rung does not advance", async ({ page }) => {
  test.skip(process.env.SMOKE_MODE === "preview", "test hook not in production build");
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript(
    (json) => { localStorage.setItem("lingua-v1", json); },
    JSON.stringify(traceFreeFixtureState())
  );
  await page.goto("/");
  // い is rung=3 and due → appears as a free-trace review card at /review.
  await page.getByTestId("start-session").click();

  const tracePad = page.getByTestId("trace-pad");
  await tracePad.waitFor({ state: "visible", timeout: 8000 });

  // Accumulate retryLimit+1 misses on the first stroke, then complete all strokes
  // correctly. Grade is computed from total misses, so this must yield "again".
  for (let miss = 0; miss <= 2; miss++) {
    await page.evaluate(() => window.__trace?.submitBad());
    await page.waitForTimeout(900);
  }
  const traceContinue = page.getByRole("button", { name: "Continue" });
  for (let s = 0; s < 10; s++) {
    if (await traceContinue.isVisible().catch(() => false)) break;
    await page.evaluate(() => window.__trace?.submitGood());
    await page.waitForTimeout(900);
  }
  await traceContinue.click();

  await expect(page.getByRole("button", { name: "Back to Today" })).toBeVisible({ timeout: 12000 });
  const persisted = await page.evaluate(() => localStorage.getItem("lingua-v1"));
  const item = JSON.parse(persisted).state.items["ja-u1l1-i"];
  expect(item.rung).toBeLessThan(4); // "again" grade must not advance rung
  expect(errors, errors.join("; ")).toEqual([]);
});

test("reviews are app-judged — no self-grading, grades persist", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // Seed ONCE — addInitScript runs before every navigation (incl. reload), so
  // guard it or the reload would clobber the session's persisted progress (the
  // very thing this test verifies).
  await page.addInitScript(
    (json) => {
      if (!localStorage.getItem("lingua-v1")) localStorage.setItem("lingua-v1", json);
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

  // Reviews are a separate session from lessons — lesson step remains active.
  await expect(page.getByText("Cleared", { exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByText("Cleared", { exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});

// ---- Dev Mode (hidden playtest panel) --------------------------------------

test("dev mode: unlock from Settings, panel shows diagnostics, isolated run leaves store unchanged", async ({ page }) => {
  test.setTimeout(120_000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("/");

  // Unlock via the Settings code field — wrong code is rejected, right code opens the panel.
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByLabel("Dev Mode code").fill("wrong");
  await page.getByRole("button", { name: "Unlock" }).click();
  await expect(page.getByText("Not the right code.")).toBeVisible();
  await page.getByLabel("Dev Mode code").fill("L071201");
  await page.getByRole("button", { name: "Unlock" }).click();

  // Lands on the dev panel with the diagnostics readout (reads from UNITS data).
  await expect(page.getByText("Units registered")).toBeVisible();
  await expect(page.getByText("Glyphs with stroke data")).toBeVisible();

  // Dev Mode is per-language: switching to French must re-scope the whole panel.
  // The stroke-data row is a glyph-script concern and has to DISAPPEAR for a
  // Latin-script language rather than report a meaningless 0 / 0.
  await page.getByRole("button", { name: "French" }).click();
  await expect(page.getByText("Diagnostics — French")).toBeVisible();
  await expect(page.getByText("Glyphs with stroke data")).toHaveCount(0);
  await expect(page.getByText("Card kinds reachable")).toBeVisible();
  await page.getByRole("button", { name: "Japanese" }).click();
  await expect(page.getByText("Glyphs with stroke data")).toBeVisible();

  // Snapshot the persisted store (devMode already unlocked) before an isolated run.
  const before = await page.evaluate(() => localStorage.getItem("lingua-v1"));

  // Launch a Fresh lesson directly (bypasses ladder gating) and play it through.
  // Lesson launchers are grouped by stage now — open the Pre-A1 group (holds Unit 1).
  await page.getByRole("button", { name: /Pre-A1 lessons/ }).click();
  await page.getByRole("button", { name: "Fresh" }).first().click();
  await expect(page.locator("text=/🧪 Dev ·/")).toBeVisible();
  for (let i = 0; i < 80; i++) {
    const kind = await playCard(page);
    if (kind === false) break;
    await page.waitForTimeout(20);
  }
  await page.getByRole("button", { name: "Back to Dev panel" }).click();
  await expect(page.getByText("Units registered")).toBeVisible();

  // CRITICAL: the dev run wrote nothing to real state — byte-identical.
  const after = await page.evaluate(() => localStorage.getItem("lingua-v1"));
  expect(after).toBe(before);

  // Disable Dev Mode toggles it back off and survives a reload.
  await page.getByRole("button", { name: "Back" }).click();
  await page.getByRole("button", { name: "Disable Dev Mode" }).click();
  await expect(page.getByLabel("Dev Mode code")).toBeVisible();
  await page.reload();
  await expect(page.getByLabel("Dev Mode code")).toBeVisible();

  expect(errors).toEqual([]);
});

test("dev mode: expanded panel — sessions, moments, progress seeder", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByLabel("Dev Mode code").fill("L071201");
  await page.getByRole("button", { name: "Unlock" }).click();

  // Sections are collapsed accordions now — open the ones this test drives.
  await page.getByRole("button", { name: /Sessions/ }).click();
  await page.getByRole("button", { name: /Moments/ }).click();
  await page.getByRole("button", { name: /Seed progress/ }).click();

  // New sections present.
  await expect(page.getByRole("button", { name: /Just a few/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Play the lesson-complete celebration/ })).toBeVisible();

  // Progress seeder writes REAL state (unlike the rest of the panel).
  await page.getByRole("button", { name: "Learn 20" }).click();
  await expect(page.getByText(/Learn 20 —/)).toBeVisible();
  const learned = await page.evaluate(() =>
    Object.values(JSON.parse(localStorage.getItem("lingua-v1")).state.items).filter((it) => (it.rung ?? 0) >= 1).length
  );
  expect(learned).toBeGreaterThanOrEqual(20);

  // A session launcher opens the Fix-up flow (sandboxed).
  await page.getByRole("button", { name: "Fix-up", exact: true }).click();
  await expect(page.getByText(/Fix-up ·/)).toBeVisible();
});


// ---- French ----------------------------------------------------------------
// Until now this suite was 100% Japanese, so no French regression could fail CI —
// which is how a dead Pre-A1 rung, two degenerate card kinds and a Dev-Mode seeder
// that wrote Japanese progress from the French panel all shipped green. These are
// deliberately few and load-bearing: the learner stands on a real rung, a lesson
// actually completes, and no Japanese leaks onto a French card.

// A French learner. `migrate` rebuilds every item from real content and keeps only
// the persisted rung/srs, so the fixture carries ids and progress — not fronts.
function frenchState() {
  const seed = seedItems();
  const items = {};
  for (const [id, it] of Object.entries(seed)) items[id] = { ...it, rung: 0, srs: freshCard() };
  return {
    state: {
      items,
      languages: LANGUAGES,
      profile: { onboarded: true, displayName: "Test Learner", reason: null, reminderTime: null, languages: ["fr"], activeLang: "fr" },
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: todayISO(), reviewsCleared: false, lessonDone: false },
      settings: {},
      ui: {},
    },
    version: 1,
  };
}

// A learner studying BOTH languages — the case the Achievements switcher exists for.
function bilingualState() {
  const st = frenchState();
  st.state.profile = { ...st.state.profile, languages: ["ja", "fr"], activeLang: "fr" };
  return st;
}

const seedBilingual = (page) =>
  page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(bilingualState()));

// A bilingual learner whose debt sits ENTIRELY in the language they're not studying:
// 30 Japanese items overdue, nothing due in French, active language French.
function debtInOtherLanguageState() {
  const st = bilingualState();
  st.state.profile = { ...st.state.profile, languages: ["ja", "fr"], activeLang: "fr" };
  const seed = seedItems();
  const jaVocab = Object.values(seed).filter((it) => it.type === "vocab" && it.lang === "ja");
  for (const it of jaVocab.slice(0, 30)) {
    st.state.items[it.id] = { ...st.state.items[it.id], rung: 1, srs: dueCard() };
  }
  return st;
}

const seedFrench = (page) =>
  page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(frenchState()));

// Kana + kanji. A French card rendering any of these means Japanese leaked in.
const JA_SCRIPT = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/u;

// THE REPORTED BUG, end to end in the real app: the daily queue wasn't scoped, so a
// bilingual learner had both languages merged into one capped queue that blocked
// lessons in both. Here all 30 overdue cards are Japanese and the learner is in
// French — French must be completely unaffected.
test("review debt in the other language doesn't block this one's lesson", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.addInitScript(
    (json) => localStorage.setItem("lingua-v1", json),
    JSON.stringify(debtInOtherLanguageState())
  );
  await page.goto("/");

  // The French learner owes nothing, so the lesson CTA is live — not "Clear reviews".
  await expect(page.getByTestId("start-session")).not.toHaveText(/Clear reviews/);
  // And the Japanese backlog is nowhere on a French Today screen.
  await expect(page.getByText(/30 (reviews|cards)/)).toHaveCount(0);
  await expect(page.locator("main")).not.toHaveText(JA_SCRIPT);
  expect(errors, errors.join("; ")).toEqual([]);
});

// code-auditor BLOCKER 1 (2026-08-14): the daily obligation is global, so once ANY
// language's reviews are cleared the primary CTA stops offering reviews everywhere.
// Today is the only non-dev route to /review, so a second language's real debt was
// unreachable until the next day — and the pill cheerfully said "Cleared" over it.
// The per-language cap would then starve the very language it exists to protect.
test("a language keeps a reachable review path after the day's duty is met", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const st = debtInOtherLanguageState();
  // The learner is in FRENCH and French itself is overdue; the day's duty was
  // already met (in Japanese), so the global flag is set.
  const seed = seedItems();
  const frVocab = Object.values(seed).filter((it) => it.type === "vocab" && it.lang === "fr");
  for (const it of frVocab.slice(0, 40)) {
    st.state.items[it.id] = { ...st.state.items[it.id], rung: 1, srs: dueCard() };
  }
  st.state.daily = { ...st.state.daily, reviewsCleared: true };
  await page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(st));
  await page.goto("/");

  // Not demanded — the primary CTA is free for the lesson...
  await expect(page.getByTestId("start-session")).not.toHaveText(/Clear reviews/);
  // ...but the queue is genuinely reachable, and the pill tells the truth about it.
  const optional = page.getByTestId("start-review-optional");
  await expect(optional).toBeVisible();
  await expect(page.getByText("Cleared")).toHaveCount(0);
  await optional.click();
  await expect(page).toHaveURL(/\/review/);
  expect(errors, errors.join("; ")).toEqual([]);
});

test("French: the Ladder stands on a real rung, never a dead Pre-A1", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await seedFrench(page);
  await page.goto("/");
  await page.getByRole("button", { name: "Ladder", exact: true }).click();

  // `pre-a1` is the SCRIPT band. A Latin-script language has none, so a Pre-A1 rung
  // could never turn green — it pinned French learners to a permanent-failure rung
  // from lesson 1. Neither the spine nor the progress line may mention it.
  await expect(page.getByText("Lessons for Pre-A1 coming soon.")).toHaveCount(0);
  await expect(page.getByText("Pre-A1", { exact: true })).toHaveCount(0);

  // ...and the learner gets a real current stage with real progress, not an empty one.
  await expect(page.getByText(/A1.*progress/)).toBeVisible();
  // B1/B2 are unauthored but deliberately still drawn — empty rungs ABOVE the
  // current one are the goal, and dropping them would hide the climb.
  await expect(page.getByText("B2", { exact: true }).first()).toBeVisible();
  expect(errors, errors.join("; ")).toEqual([]);
});

test("French: a lesson completes, and no Japanese leaks onto a French card", async ({ page }) => {
  test.setTimeout(120_000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await seedFrench(page);
  await page.goto("/");

  // The tutor follows the active language — Mathieu, not Haruki.
  await expect(page.getByRole("button", { name: "Mathieu", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Haruki", exact: true })).toHaveCount(0);

  await page.getByTestId("start-session").click();

  for (let i = 0; i < 80; i++) {
    // Checked on every card rather than once at the end, so a single leaking card
    // kind can't hide behind a clean finish screen. Read off #root — it's always
    // attached (no implicit wait) and it covers card kinds that carry no testid,
    // like TeachCard, which is exactly where a hardcoded Japanese label would sit.
    const text = (await page.locator("#root").textContent({ timeout: 2000 }).catch(() => "")) ?? "";
    expect(text, `Japanese script on a French card (card ${i}): ${text.slice(0, 300)}`).not.toMatch(JA_SCRIPT);
    if (!(await playCard(page))) break;
    await page.waitForTimeout(20);
  }

  await page.getByRole("button", { name: "Back to Today" }).click();
  await expect(page.getByText("Done", { exact: true })).toBeVisible();

  // A French item actually advanced and got scheduled — the session graded, not just rendered.
  const state = await page.evaluate(() => JSON.parse(localStorage.getItem("lingua-v1")).state);
  const advanced = Object.values(state.items).filter((it) => it.lang === "fr" && (it.rung ?? 0) >= 1);
  expect(advanced.length, "at least one French item graduated").toBeGreaterThan(0);
  expect(new Date(advanced[0].srs.due).getTime()).toBeGreaterThan(Date.now());
  // ...and nothing Japanese was touched.
  const jaTouched = Object.values(state.items).filter((it) => it.lang === "ja" && (it.rung ?? 0) >= 1);
  expect(jaTouched.length, "the French session must not advance Japanese items").toBe(0);

  expect(errors, errors.join("; ")).toEqual([]);
});

test("French: Dev Mode seeds the French deck, not the Japanese one", async ({ page }) => {
  await seedFrench(page);
  await page.goto("/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByLabel("Dev Mode code").fill("L071201");
  await page.getByRole("button", { name: "Unlock" }).click();
  await page.getByRole("button", { name: /Seed progress/ }).click();

  // The regression: the seeders walked Object.keys(items) and took the first n.
  // Registration is ja-first, so "Learn 20" on the FRENCH panel wrote real progress
  // against twenty Japanese items. These write to the real deck, so it was wrong
  // state, not a wrong preview.
  await page.getByRole("button", { name: "Learn 20" }).click();
  await expect(page.getByText(/Learn 20 —/)).toBeVisible();

  const seeded = await page.evaluate(() => {
    const items = JSON.parse(localStorage.getItem("lingua-v1")).state.items;
    const learned = Object.values(items).filter((it) => (it.rung ?? 0) >= 1);
    return { fr: learned.filter((it) => it.lang === "fr").length, ja: learned.filter((it) => it.lang === "ja").length };
  });
  expect(seeded.fr).toBeGreaterThanOrEqual(20);
  expect(seeded.ja, "seeding from the French panel must not touch the Japanese deck").toBe(0);
});

test("French: no Japanese-only surfaces — Settings toggles, Achievements, the flag", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await seedFrench(page);

  // Achievements listed the WHOLE milestone catalog, so a French learner met a wall
  // of permanently-locked hiragana/kanji goals and an "X of Y" counted against them.
  await page.goto("/achievements");
  await expect(page.getByText("Achievements", { exact: true })).toBeVisible();
  const ach = (await page.locator("#root").textContent()) ?? "";
  for (const phrase of ["hiragana", "katakana", "yōon", "kanji", "Kanji", "Japanese A1", "Japanese A2"])
    expect(ach, `Achievements offered "${phrase}" to a French learner`).not.toContain(phrase);
  // ...but the cross-language capability goals are still there — scoping must not
  // empty the screen, only narrow it.
  expect(ach).toContain("word");

  // Rōmaji/furigana are scaffolds for an unreadable script; their copy talks about
  // kana and kanji. A French learner should not be offered them at all.
  await page.goto("/settings");
  const set = (await page.locator("#root").textContent()) ?? "";
  expect(set, "Settings offered the romaji scaffold to a French learner").not.toContain("Show romaji");
  expect(set, "Settings offered furigana to a French learner").not.toContain("Furigana");
  // The version watermark's flag follows the language being learned. Asserted on the
  // watermark itself, not the page — Settings legitimately lists every language with
  // its own flag, so a page-wide check would be testing the language list instead.
  const watermark = (await page.getByTestId("version-watermark").textContent()) ?? "";
  expect(watermark, "the version watermark stamped a Japanese flag on a French learner's screen").not.toContain("🇯🇵");
  expect(watermark).toContain("🇫🇷");

  // Settings' About panel read `languages.ja` — a hardcoded lookup from when
  // Japanese was the only language — so it told a French learner they were
  // "Learning: 🇯🇵 Japanese". And the Practice paragraph explained the Japanese
  // typing path (rōmaji through A1, kana from A2) to someone who has neither.
  // Both found by a QA sweep of the rendered screens, not by the suite.
  expect(set, "Settings told a French learner they are learning Japanese").not.toContain("🇯🇵 Japanese");
  expect(set).toContain("🇫🇷 French");
  expect(set, "Settings explained the rōmaji typing path to a French learner").not.toContain("rōmaji");

  // The TODAY screen carries its own watermark and its own next-milestone line.
  // Both leaked Japanese to a French learner while the Settings copies above were
  // already fixed and pinned — the fix had been applied surface by surface from
  // memory rather than from a list. Asserted here so the pair cannot drift again.
  await page.goto("/");
  const todayMark = (await page.getByTestId("version-watermark").textContent()) ?? "";
  expect(todayMark, "Today's watermark stamped a Japanese flag on a French learner").not.toContain("🇯🇵");
  expect(todayMark).toContain("🇫🇷");

  // "NEXT MILESTONE — You learned your first kanji · 1 to go" on a French profile:
  // unreachable, and a plain statement that the app is really for someone else.
  const today = (await page.locator("#root").textContent()) ?? "";
  for (const phrase of ["kanji", "Kanji", "hiragana", "katakana"])
    expect(today, `Today offered "${phrase}" to a French learner`).not.toContain(phrase);

  expect(errors, errors.join("; ")).toEqual([]);
});

test("Achievements: the language switcher appears only when learning two or more", async ({ page }) => {
  // A crash here renders an EMPTY #root, which would silently satisfy every
  // "does not contain hiragana" assertion on this screen — so failures must be loud.
  // (A stale identifier in a dependency array did exactly that during development.)
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // One language → no row. A single chip is noise, and the screen is already scoped.
  await seedFrench(page);
  await page.goto("/achievements");
  await expect(page.getByRole("button", { name: "All languages" })).toHaveCount(0);
  const solo = (await page.locator("#root").textContent()) ?? "";
  expect(solo).not.toContain("hiragana");

  // Two languages → the switcher shows, defaulting to the ACTIVE one (fr), so the
  // screen still opens on French rather than dumping both languages' milestones.
  await seedBilingual(page);
  await page.goto("/achievements");
  await expect(page.getByRole("button", { name: /French/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Japanese/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "All languages" })).toBeVisible();
  expect((await page.locator("#root").textContent()) ?? "").not.toContain("hiragana");

  // Switching to Japanese brings the Japanese milestones in...
  await page.getByRole("button", { name: /Japanese/ }).click();
  await expect(page.getByText(/hiragana/)).toBeVisible();

  // ...and "All languages" shows both at once.
  await page.getByRole("button", { name: "All languages" }).click();
  const all = (await page.locator("#root").textContent()) ?? "";
  expect(all).toContain("hiragana");
  expect(all).toContain("French");

  expect(errors, errors.join("; ")).toEqual([]);
});

// PREVIEW MODE — the app on a throwaway profile. Its one safety property is that
// the real deck is never written, so that is what this asserts: enter preview, do
// something that writes progress, and the real profile must be byte-identical.
// Isolation is the persist KEY, not a flag writers honour — a flag only has to be
// forgotten once to put preview progress on a deck someone actually studies.
//
// The fixture is deliberately STATIC (no Date.now()): addInitScript re-runs on every
// reload, so a time-derived profile differs between loads and the comparison would
// fail on its own churn rather than on a real write.
const STATIC_REAL_PROFILE = JSON.stringify({
  state: {
    items: {},
    languages: LANGUAGES,
    profile: { onboarded: true, displayName: "Real", reason: null, reminderTime: null, languages: ["fr"], activeLang: "fr" },
    streak: { current: 3, longest: 3, freezes: 2, lastActive: "2026-01-01" },
    stats: { xpTotal: 999 },
    daily: { date: "2026-01-01", reviewsCleared: false, lessonDone: false },
    settings: {}, ui: {},
  },
  version: 1,
});

test("Preview Mode: the app runs, and the real profile is untouched", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript((json) => {
    localStorage.setItem("lingua-v1", json);
    localStorage.setItem("lingua-preview", JSON.stringify({ state: {}, version: 1 }));
    localStorage.setItem("lingua-preview-on", "1");
  }, STATIC_REAL_PROFILE);

  await page.goto("/");

  // It is the real app — banner and the actual home screen, not a panel of links.
  await expect(page.getByTestId("preview-banner")).toBeVisible();
  await expect(page.getByTestId("start-session")).toBeVisible();

  // Write progress, then prove where it went.
  await page.getByTestId("start-session").click();
  await page.waitForTimeout(800);

  const real = await page.evaluate(() => localStorage.getItem("lingua-v1"));
  expect(real, "Preview Mode wrote to the REAL profile").toBe(STATIC_REAL_PROFILE);

  const preview = await page.evaluate(() => localStorage.getItem("lingua-preview"));
  expect(preview, "preview deck should exist").toBeTruthy();
  expect(preview, "the preview deck should be the one that moved").not.toBe(STATIC_REAL_PROFILE);

  expect(errors, errors.join("; ")).toEqual([]);
});
