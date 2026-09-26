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

// PERSISTED SHAPE -- what the app itself writes, and what these fixtures must write.
// `partialize` (useStore.js) stores a SLIM PROGRESS OVERLAY: `{ id: { rung, srs } }`
// for TOUCHED items only. Item content is never persisted; `reconstructItems` rebuilds
// the full deck from the curriculum seed on load and reads only rung/srs back.
//
// So a fixture lists the items it actually cares about, and nothing else:
//   - an untouched item needs no entry -- it comes back from the seed at rung 0;
//   - rung 0 is never reviewable (`isReviewable`, mastery.js), so "seed the whole
//     corpus at rung 0" and "seed nothing" are the same fixture, and the queues
//     behave identically either way.
// These fixtures used to write every item in the corpus WITH its full content -- a
// legacy shape the app stopped writing when the overlay landed (it overran mobile
// Safari's ~5MB quota, the same bug, on real devices). Once ja+fr+es were all
// authored, 6,394 full items passed that quota here too: `setItem` threw and took
// 9 tests with it. Keep fixtures slim -- and if one needs to be big, it is testing
// the wrong thing.

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
// A learner who has started Japanese, and nothing else. Tests that assert Japanese
// UI (unit names, the companion's tab) must say so: with 23 catalog entries and no
// starter language, an app given no profile at all resolves to the first language
// that HAS content, which is a catalog fact and not this test's intent.
function japaneseLearner() {
  return {
    state: {
      languages: LANGUAGES,
      profile: { onboarded: true, displayName: "Test Learner", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
    },
    version: 1,
  };
}

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
      profile: { onboarded: true, displayName: "Test Learner", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
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
    { id: "ja-u1l3-sushi",      type: "vocab", front: "すし",       reading: "sushi",       meaning: "sushi",        example: { jp: "すしをたべます。", en: "I eat sushi." },     accept: [], lang: "ja", unit: 1, lesson: 3 },
    { id: "ja-u1l1-sayounara",  type: "vocab", front: "さようなら", reading: "sayōnara",   meaning: "goodbye",      example: { jp: "さようなら。", en: "Goodbye." },       accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-hai",        type: "vocab", front: "はい",       reading: "hai",         meaning: "yes",          example: { jp: "はい。",       en: "Yes." },           accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l1-iie",        type: "vocab", front: "いいえ",     reading: "iie",         meaning: "no",           example: { jp: "いいえ。",     en: "No." },            accept: [], lang: "ja", unit: 1, lesson: 1 },
    { id: "ja-u1l5-inu",        type: "vocab", front: "いぬ",       reading: "inu",         meaning: "dog",          example: { jp: "いぬがいます。", en: "There is a dog." }, accept: [], lang: "ja", unit: 1, lesson: 5 },
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
    // The `build` exemplar is chosen by HASH BAND, not by its example. shouldSentence
    // needs hash01(id) >= 0.75 and build needs >= 0.5, so only an item inside
    // [0.5, 0.75) routes build whatever content it carries. すし is 0.606 and no
    // future authoring can move it. ありがとう held this slot at 0.773 — one drill
    // from the sentence band — and the Japanese drills took it (2026-09-06).
    else if (it.id === "ja-u1l3-sushi")    { rung = 3; srs = dueCard(); } // rung-3 vocab, hash in [0.5,0.75) → build
    // Now covers the DRILL path: its drill supplies the [word][particle][rest] shape
    // its own example lacks, so this is the fixture's coverage of practice().
    else if (it.id === "ja-u1l2-arigatou") { rung = 3; srs = dueCard(); } // rung-3 vocab, drill supplies a particle → sentence:build
    else if (it.id === "ja-u1l4-tegami") { rung = 3; srs = dueCard();   } // rung-3 vocab, sentence band + [word][particle][rest] → sentence:build
    else if (it.id === "ja-u1l1-sayounara") { rung = 2; srs = dueCard(); } // rung-2 vocab, hash<share → type:reading (JP→rōmaji)
    else if (it.id === "ja-u1l2-konbanwa") { rung = 2; srs = dueCard();  } // rung-2 vocab, audio + hash band → listen:type (dictation)
    else if (it.id === "ja-u1l2-kasa")   { rung = 2; srs = dueCard();   } // rung-2 vocab, cloze band + particle after front → particle:choice
    else if (it.id === "ja-u1l3-shizuka") { rung = 2; srs = dueCard();  } // rung-2 vocab, cloze band + no particle after front → cloze:choice
    else if (it.id === "ja-u1l1-hai")    { rung = 1; srs = dueCard();   } // due rung-1 + has audio → listen:choice (review)
    else if (it.id === "ja-u1l3-sakana") { rung = 1; srs = dueCard();   } // due rung-1 vocab, not-listen (hash≥.5) + reverse band → choice:reverse (review)
    else if (it.id === "ja-u1l1-iie")    { rung = 4; srs = dueCard();   } // rung-4 vocab → speak (SPOKEN review)
    // PLAIN `choice` now comes from REVIEW, not from a lesson. Every check-1 card
    // in a lesson is ear-first whenever the item owns a clip (Alex, 2026-09-16:
    // "words have hear it as well"), and the whole corpus has audio — so the two
    // rung-0 items below produce listen:choice, and the sighted card they used to
    // supply had to come from somewhere real rather than from a relaxed assertion.
    // いぬ is one of 9 rung-1 ja vocab items whose hash falls through shouldListen,
    // earCrowdedOut and shouldReverseChoice to the plain card (reviewStep.js:117).
    else if (it.id === "ja-u1l5-inu")    { rung = 1; srs = dueCard();   } // due rung-1 vocab, below every ear/reverse band → choice (review)
    else if (it.id === "ja-u1l1-ohayou") { rung = 0; srs = freshCard(); } // new vocab → teach + listen:choice + type:meaning (lesson)
    else if (it.id === "ja-u1l1-i")      { rung = 0; srs = freshCard(); } // new kana  → teach + listen:choice + trace:guided
    else                                  { rung = 1; srs = freshCard(); } // graduated, not due → skipped
    items[it.id] = { ...it, rung, srs };
  }
  return {
    state: {
      items,
      languages: LANGUAGES,
      profile: { onboarded: true, displayName: "Test Learner", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
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
  for (const it of vocab) items[it.id] = { rung: 1, srs: dueCard() };
  return {
    state: {
      items,
      languages: LANGUAGES,
      profile: { onboarded: true, displayName: "Test Learner", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
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
  const jaVocab = Object.values(seed).filter((it) => it.type === "vocab" && it.lang === "ja");
  // Only the debt is listed; every other item comes back new (rung 0) from the seed,
  // which is exactly the "first lesson is still all-new" half of this fixture.
  const items = {};
  for (const it of jaVocab.slice(-5)) items[it.id] = { rung: 1, srs: dueCard() };
  return {
    state: {
      items,
      languages: LANGUAGES,
      profile: { onboarded: true, displayName: "Test Learner", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
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
    // BuildCard: the tiles are SHUFFLED, so tapping them in DOM order assembles a
    // scrambled reading and grades `again`. That was harmless while this helper
    // only proved card COVERAGE; it is not harmless in the band-exam smoke, where
    // the score is the thing under test. Use the card's test hook to build the
    // correct order, falling back to DOM order if it hasn't mounted yet.
    const solved = await page.evaluate(() => {
      if (!window.__build) return false;
      window.__build.solve();
      return true;
    });
    if (!solved) {
      const count = await tile.count();
      for (let i = 0; i < count; i++) {
        await tile.nth(i).click({ force: true });
      }
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
  await page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(japaneseLearner()));
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
  await page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(japaneseLearner()));
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
  // The cap is on ITEMS (MICRO_SIZE = 3), not cards. An ordinary item runs
  // teach + 2 checks; a LATIN LETTER runs teach + 3 (listen, speak, type - the
  // unit-1 accent standard), so 3 items is at most 12 cards. The point of the
  // assertion is that a micro-session is a handful and not the whole lesson,
  // which is 30+ cards - so bound it by 3 items x 4 cards, not by a bare number.
  const MICRO_SIZE = 3;
  const MAX_CARDS_PER_ITEM = 5; // teach + at most 4 checks (a kana: hear, trace, type, say)
  const counter = page.getByText(/card 1 of \d+/);
  await expect(counter).toBeVisible();
  const total = parseInt((await counter.textContent()).match(/of (\d+)/)[1], 10);
  expect(total).toBeLessThanOrEqual(MICRO_SIZE * MAX_CARDS_PER_ITEM);
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

  await page.addInitScript((json) => { if (!localStorage.getItem("lingua-v1")) localStorage.setItem("lingua-v1", json); }, JSON.stringify(japaneseLearner()));
  await page.goto("/");
  await page.getByTestId("start-session").click();

  for (let i = 0; i < 80; i++) {
    if (!(await playCard(page))) break;
    await page.waitForTimeout(20);
  }
  await page.getByRole("button", { name: "Back to Today" }).click();

  // The lesson pill NAMES what was finished: "Lesson 1/3 done", not a bare
  // "Done". It used to read "A1 · Unit 1" over "Done", which names a unit and no
  // lesson, so it scanned as "unit 1 is done" when the unit had five lessons
  // left. Still asserts the pill reports completion — only the copy moved.
  await expect(page.getByText(/Lesson \d+\/\d+ done/)).toBeVisible();

  const persisted = await page.evaluate(() => localStorage.getItem("lingua-v1"));
  const state = JSON.parse(persisted).state;
  expect(state.streak.current).toBeGreaterThanOrEqual(1); // daily goal met → streak ticked
  const graded = state.items["ja-u1l1-ohayou"];
  expect(graded.rung).toBeGreaterThanOrEqual(1);
  expect(new Date(graded.srs.due).getTime()).toBeGreaterThan(Date.now());

  await page.reload();
  // The lesson pill NAMES what was finished: "Lesson 1/3 done", not a bare
  // "Done". It used to read "A1 · Unit 1" over "Done", which names a unit and no
  // lesson, so it scanned as "unit 1 is done" when the unit had five lessons
  // left. Still asserts the pill reports completion — only the copy moved.
  await expect(page.getByText(/Lesson \d+\/\d+ done/)).toBeVisible();
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
  // Session 4: build — also via its sandbox, and for a related reason. `build` is the
  // tile card for an item whose reading is a DIFFERENT script from its front, so it is
  // reachable for 1,408 ja items — but it is the last fallback at rung 3, behind
  // conjugate/trace/sentence:build. Once drills made more items sentence-eligible and
  // the free-pass guard moved some rung-2 cards, this fixture's session stopped
  // reaching it inside its card budget. The KIND is not at risk; the session's
  // composition is. Driving it directly asserts the same property without depending on
  // which card a fixed-length session happens to serve.
  await page.goto("/review?sandbox=1&card=build");

  for (let i = 0; i < 8; i++) {
    const kind = await playCard(page);
    if (kind === false) break;
    if (typeof kind === "string") seenKinds.add(kind);
    if (covered()) break;
    await page.waitForTimeout(50);
  }

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

// The conjugate card used to be Japanese-only in three separate places -- the
// engine (kana morphology), the contract's form vocabulary, and the router's
// "must carry a group" guard -- so a French verb had nowhere to put an honest tag
// and fr/es taught each conjugated form as its own vocab chunk instead. This drives
// the real card in the real app for a LATIN language: the prompt is in French, the
// engine produces the form, and grading accepts it.
test("French: the conjugate card runs on a Latin-script verb", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("/review?sandbox=1&card=conjugate&lang=fr");
  const card = page.getByTestId("conjugate-card");
  await card.waitFor({ state: "visible", timeout: 10000 });

  // The prompt is tense x person in French -- not a ja form name, and not a raw id.
  await expect(card).toContainText(/présent|futur|imparfait/);
  await expect(card).not.toContainText(/godan|ichidan/);

  await page.evaluate(() => window.__conjugate?.solve());
  await page.getByRole("button", { name: /check/i }).click();
  await expect(page.getByText("Correct!")).toBeVisible();

  expect(errors, errors.join("; ")).toEqual([]);
});

// "I reset my progress, closed the app, reopened it -- and it was all back."
// The cloud half of that (the reset receipt beating a stale cloud row) is unit-tested
// in tests/unit/sync.test.mjs, because a signed-in round trip needs a real Supabase.
// What this covers is the half a browser can prove: the reset survives a reload, and
// the learner is actually TOLD it saved rather than having to guess.
test("Reset everything survives a reload, and says so", async ({ page }) => {
  // THE HEAVIEST TEST IN THE SUITE, and it was already running at 43.7s against the
  // 45s default before anything was added to it: a full reviewState() seed, five
  // navigations, a reload, and two localStorage round-trips. Under full parallel load
  // it tips over and fails as a TIMEOUT, which reads exactly like a regression in
  // whatever just merged -- the same false signal tests/preflight.js exists to stop.
  // test.slow() triples the budget. No assertion is relaxed; it is the same test with
  // room to finish.
  test.slow();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  // Seed ONCE: addInitScript runs before EVERY navigation, reload included, so the
  // unguarded form would re-inject the progress this test just deleted and "prove"
  // the bug that isn't there.
  await page.addInitScript(
    (json) => { if (!localStorage.getItem("lingua-v1")) localStorage.setItem("lingua-v1", json); },
    JSON.stringify(reviewState())
  );

  const touched = () =>
    page.evaluate(() => {
      const items = JSON.parse(localStorage.getItem("lingua-v1") ?? "{}")?.state?.items ?? {};
      return Object.values(items).filter((it) => (it?.rung ?? 0) > 0).length;
    });

  await page.goto("/");
  // Progress is really there to begin with -- otherwise this test proves nothing.
  expect(await touched()).toBeGreaterThan(0);

  await page.goto("/settings");
  await page.getByRole("button", { name: "Reset all progress" }).click();
  await page.getByRole("button", { name: "Reset everything" }).click();

  // Signed out (no cloud in the smoke env) the honest answer is "this device" --
  // never "saved to your account", which would be a lie about where it lives.
  const toast = page.getByTestId("sync-toast");
  await expect(toast).toBeVisible();
  await expect(toast).toContainText(/saved on this device/i);
  await expect(toast).not.toContainText(/your account/i);

  // The receipt is stamped and persisted -- this is what the sync guards read.
  const resetAt = await page.evaluate(() => JSON.parse(localStorage.getItem("lingua-v1")).state.resetAt);
  expect(resetAt).toBeGreaterThan(0);

  // The actual complaint: reopen, and it must still be reset.
  await page.reload();
  expect(await touched(), "progress came back after a reload").toBe(0);

  expect(errors, errors.join("; ")).toEqual([]);
});

// RESET MUST LEAVE A WAY BACK IN -- its own test, not an assertion bolted onto the
// one above. Appended there it pushed that test to 43.7s against a 45s timeout and
// it began flaking; a destructive-path check that fails at random is worse than none.
//
// WHAT THIS CATCHES. Reset clears the started-language list as of 2026-09-17, and
// this smoke env has AUTH_ENABLED off (App.jsx forces it false under WebDriver), so
// onboarding never renders here -- the Ladder is the only route to a language. The
// code-auditor reproduced the dead end the test above could not see: every Start
// button is gated on canAddLanguage(), which was `[].some(...)` = false on an empty
// list, so the learner owned nothing and could start nothing short of clearing
// localStorage. "No page errors + progress is zero" is also exactly what a stranded
// app looks like, which is why that pair is never sufficient on a destructive path.
//
// Verified by deliberately re-breaking the guard in useStore.canAddLanguage and
// watching this go red.
test("Reset leaves a way back in -- the learner can still start a language", async ({ page }) => {
  await page.addInitScript(
    (json) => { if (!localStorage.getItem("lingua-v1")) localStorage.setItem("lingua-v1", json); },
    JSON.stringify(reviewState())
  );

  await page.goto("/settings");
  await page.getByRole("button", { name: "Reset all progress" }).click();
  await page.getByRole("button", { name: "Reset everything" }).click();

  const started = await page.evaluate(
    () => JSON.parse(localStorage.getItem("lingua-v1")).state.profile.languages
  );
  expect(started, "reset must clear the started-language list").toEqual([]);

  await page.goto("/ladder");
  const starts = page.getByRole("button", { name: /^Start$/ });
  await expect(starts.first()).toBeVisible();
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
      profile: { onboarded: true, displayName: "Test Learner", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
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
  // 20s, not the default 5. "Learn 20" is a SYNCHRONOUS pass over the whole
  // 17,497-item deck followed by a zustand-persist write that JSON.stringifies all
  // of it, and the confirmation renders only after both finish. Alone this takes
  // 2.4s and passed 6 runs of 6; under full parallel load it failed about 1 run in
  // 3 at ~9s -- which is NOT the 45s test timeout but this assertion's own 5s
  // default, so an overloaded machine read as a product regression. Measured before
  // widening; the assertion itself is unchanged.
  await expect(page.getByText(/Learn 20 —/)).toBeVisible({ timeout: 20_000 });
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
  // No progress at all: every item comes back from the seed at rung 0.
  const items = {};
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
    st.state.items[it.id] = { rung: 1, srs: dueCard() };
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
    st.state.items[it.id] = { rung: 1, srs: dueCard() };
  }
  st.state.daily = { ...st.state.daily, reviewsCleared: true };
  await page.addInitScript((json) => localStorage.setItem("lingua-v1", json), JSON.stringify(st));
  await page.goto("/");

  // Not demanded — the primary CTA is free for the lesson...
  await expect(page.getByTestId("start-session")).not.toHaveText(/Clear reviews/);
  // ...but the queue is genuinely reachable, and the pill tells the truth about it.
  const optional = page.getByTestId("start-review-optional");
  await expect(optional).toBeVisible();
  // Positive twin for the negative assertion below: prove the pill says the true
  // thing, not merely that it doesn't say "Cleared" (which would also pass if the
  // pill vanished or were renamed).
  await expect(page.getByText("20 due")).toBeVisible();
  await expect(page.getByText("Cleared")).toHaveCount(0);
  await optional.click();
  await expect(page).toHaveURL(/\/review/);
  expect(errors, errors.join("; ")).toEqual([]);
});

// The MONOLINGUAL case, which the first cut of the language scoping regressed —
// caught by both gates, not by the green suite. A Japanese-only learner (today's
// only real user) with a 60-card backlog who does their capped 20 must still get
// closure: "Cleared", no invitation back. Showing "20 due" plus a button here is
// exactly the wall REVIEW_CAP exists to hide, and the number wouldn't move for days.
test("a capped backlog still says Cleared for the language just reviewed", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const seed = seedItems();
  const jaVocab = Object.values(seed).filter((it) => it.type === "vocab" && it.lang === "ja");
  const items = {};
  for (const it of jaVocab.slice(0, 60)) items[it.id] = { rung: 1, srs: dueCard() };
  await page.addInitScript(
    (json) => localStorage.setItem("lingua-v1", json),
    JSON.stringify({
      state: {
        items,
        languages: LANGUAGES,
        profile: { onboarded: true, displayName: "T", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja" },
        streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
        stats: { xpTotal: 0 },
        // Today's session already happened, in Japanese.
        daily: { date: todayISO(), reviewsCleared: true, lessonDone: false, clearedLangs: ["ja"] },
        settings: {}, ui: {},
      },
      version: 1,
    })
  );
  await page.goto("/");

  await expect(page.getByText("Cleared")).toBeVisible();
  await expect(page.getByText("20 due")).toHaveCount(0);
  await expect(page.getByTestId("start-review-optional")).toHaveCount(0);
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
  // The lesson pill NAMES what was finished: "Lesson 1/3 done", not a bare
  // "Done". It used to read "A1 · Unit 1" over "Done", which names a unit and no
  // lesson, so it scanned as "unit 1 is done" when the unit had five lessons
  // left. Still asserts the pill reports completion — only the copy moved.
  await expect(page.getByText(/Lesson \d+\/\d+ done/)).toBeVisible();

  // A French item actually advanced and got scheduled — the session graded, not just rendered.
  // NB: the persisted overlay stores progress only and does NOT carry `lang` (it's
  // re-derived from UNITS on boot to keep localStorage small — the quota-crash fix),
  // so identify language by the item id prefix, which is the stable identity.
  const state = await page.evaluate(() => JSON.parse(localStorage.getItem("lingua-v1")).state);
  const advanced = Object.entries(state.items)
    .filter(([id, it]) => id.startsWith("fr-") && (it.rung ?? 0) >= 1)
    .map(([, it]) => it);
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
  // Same 20s as the other "Learn 20" assertion -- one synchronous pass over the
  // whole deck plus a full persist write, which exceeds the 5s default under load.
  await expect(page.getByText(/Learn 20 —/)).toBeVisible({ timeout: 20_000 });

  const seeded = await page.evaluate(() => {
    // Persisted overlay carries no `lang` (re-derived from UNITS on boot), so key
    // language off the item id prefix — the stable identity.
    const items = JSON.parse(localStorage.getItem("lingua-v1")).state.items;
    const learned = Object.entries(items).filter(([, it]) => (it.rung ?? 0) >= 1);
    return {
      fr: learned.filter(([id]) => id.startsWith("fr-")).length,
      ja: learned.filter(([id]) => id.startsWith("ja-")).length,
    };
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

// --- Dev Mode: previewing the add-a-language flow -------------------------------

// Seed BEFORE any app script runs — writing localStorage after page load races
// zustand's own persist and gets clobbered (learned the hard way).
const seed = (page, devMode) =>
  page.addInitScript(
    (json) => localStorage.setItem("lingua-v1", json),
    JSON.stringify({
      state: {
        devMode,
        profile: { onboarded: true, languages: ["ja"], activeLang: "ja", languagesChosen: true },
      },
      version: 0,
    })
  );

test("dev preview: add-a-language renders unlocked, and Start cannot write", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await seed(page, true);

  // Baseline: a pre-A1 learner sees the LOCKED copy.
  await page.goto("/ladder");
  expect((await page.locator("#root").textContent()) ?? "").toContain("to unlock another language");

  // Preview: the unlocked state, with French offered as a SECOND language.
  await page.goto("/ladder?preview=addlang");
  await expect(page.getByTestId("addlang-preview-banner")).toBeVisible();
  const prev = (await page.locator("#root").textContent()) ?? "";
  expect(prev).toContain("You've reached A1");
  expect(prev).toContain("French");

  // The isolation contract: Start is inert and real progress is untouched.
  const before = await page.evaluate(() => localStorage.getItem("lingua-v1"));
  const start = page.getByRole("button", { name: "Start" }).first();
  await expect(start).toBeDisabled();
  await start.click({ force: true }).catch(() => {});
  expect(
    await page.evaluate(() => localStorage.getItem("lingua-v1")),
    "the preview wrote to real progress"
  ).toBe(before);
  expect(
    await page.evaluate(() => JSON.parse(localStorage.getItem("lingua-v1")).state.profile.languages)
  ).toEqual(["ja"]);

  expect(errors, errors.join("; ")).toEqual([]);
});

test("the preview is dev-gated — the query string alone does nothing", async ({ page }) => {
  await seed(page, false);
  await page.goto("/ladder?preview=addlang");
  await expect(page.getByTestId("addlang-preview-banner")).toHaveCount(0);
  expect((await page.locator("#root").textContent()) ?? "").toContain("to unlock another language");
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

// --- the language picker has NO COVERAGE, and cannot have any here ------------
//
// Two smoke tests for it were written on 2026-09-13 and removed the same hour:
// the screen is UNREACHABLE under Playwright, and no amount of fixture seeding
// changes that. `App.jsx` puts the onboarding gate INSIDE `if (AUTH_ENABLED)`,
// and AUTH_ENABLED is `supabase configured && !IS_WEBDRIVER` — so under WebDriver
// the whole block is skipped and <Onboarding/> never renders, whatever the
// profile says.
//
// App.jsx already records the fix and why it was deferred: hoisting the gate out
// of the auth block "is correct but turns 16 smoke fixtures red: they boot with
// no profile at all and would land on onboarding."
//
// The cost of that deferral is now measured rather than theoretical. The FIRST
// SCREEN A NEW LEARNER SEES is the only screen in the app no test has ever
// opened, and on 2026-09-13 it was carrying two defects that any single pass
// would have caught — Continue below the fold on a phone, and 23 languages in one
// flat list where a 0-card entry looked identical to a real one and silently did
// nothing when tapped. Alex found both on his own phone, which is the only place
// anyone looks at it.
//
// To fix properly: hoist the onboarding gate out of the auth block, then give the
// fixtures that boot profile-less an explicit `onboarded: true`. That is a real
// job, not a one-liner, and it belongs to whoever picks up the QA-lane item.

// ---- Band exams & checkpoints ----------------------------------------------
// docs/shipped/BUILD-BRIEF-exams.md. Three things have to be true and none of
// them can be checked by a unit test alone:
//   1. the affordance is reachable from the Ladder (no new tab);
//   2. a WHOLE paper plays end to end through the real cards;
//   3. it can only ever leave the learner's real progress BETTER OR EQUAL.
// (3) is the one that matters, and it changed shape on 2026-09-25: an exam now
// CREDITS a correct answer (Alex: "the exams should be helping the user build") and
// still writes nothing at all for a wrong one. So the assertion is no longer
// "unchanged" — it is "not worse, in any field, for any item". The all-wrong
// byte-identical case is driven deterministically in tests/unit/exams.test.mjs
// ("a wrong exam answer changes nothing"), which is the only place the grades can
// be forced rather than played.

// A Japanese learner with real progress up to unit 13 (stage a1 starts at unit 7),
// so the Ladder offers the A1 exam AND a checkpoint that has earlier material to
// draw its older pair from (cp-ja-u7-u12). `freshCard` keeps them out of the review
// queue, so nothing but the exam is in play.
function examLearnerFixture() {
  return {
    state: {
      items: {
        "ja-u1l1-a": { rung: 2, srs: freshCard() },
        "ja-u4l1-i": { rung: 2, srs: freshCard() },
        "ja-u7l1-ichi": { rung: 2, srs: freshCard() },
        "ja-u7l1-ni": { rung: 1, srs: freshCard() },
        "ja-u8l1-chichi": { rung: 3, srs: freshCard() },
        "ja-u10l1-eki": { rung: 2, srs: freshCard() },
        "ja-u12l1-aka": { rung: 2, srs: freshCard() },
        "ja-u13l1-nichi": { rung: 1, srs: freshCard() },
      },
      languages: LANGUAGES,
      profile: { onboarded: true, displayName: "Test Learner", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
      streak: { current: 0, longest: 0, freezes: 2, lastActive: null },
      stats: { xpTotal: 0 },
      daily: { date: todayISO(), reviewsCleared: true, lessonDone: false, clearedLangs: ["ja"] },
      settings: {},
      ui: {},
    },
    version: 1,
  };
}

// Read a persisted slice. Keys are passed as an ARRAY, not a dotted string: a
// half-check id is literally `check-ja-a1.5`, so splitting on "." would look for
// a key named "a1" and find nothing.
const readState = (page, keys) =>
  page.evaluate((ks) => {
    const s = JSON.parse(localStorage.getItem("lingua-v1") ?? "{}")?.state ?? {};
    return ks.reduce((acc, k) => (acc == null ? acc : acc[k]), s);
  }, keys);

// THE MONOTONIC CHECK. Returns a list of regressions — empty means the exam only
// ever moved things forward. This replaces the old byte-identical assertion, which
// is wrong by design now that a correct answer counts.
function regressions(before, after) {
  const bad = [];
  const at = (it) => new Date(it?.srs?.due ?? 0).getTime();
  for (const [id, b] of Object.entries(before)) {
    const a = after[id];
    if (!a) { bad.push(`${id} vanished`); continue; }
    if ((a.rung ?? 0) < (b.rung ?? 0)) bad.push(`${id} rung ${b.rung} -> ${a.rung}`);
    if (at(a) < at(b)) bad.push(`${id} due moved EARLIER`);
    if (Number(a.srs?.lapses ?? 0) > Number(b.srs?.lapses ?? 0)) bad.push(`${id} gained a lapse`);
    if (Number(a.srs?.reps ?? 0) < Number(b.srs?.reps ?? 0)) bad.push(`${id} reps regressed`);
    if (Number(a.srs?.stability ?? 0) < Number(b.srs?.stability ?? 0)) bad.push(`${id} lost stability`);
  }
  for (const id of Object.keys(after)) if (!before[id]) bad.push(`${id} appeared`);
  return bad;
}

// Play until the result screen appears (an exam has no "Back to Today").
async function playExam(page, max) {
  const headline = page.getByTestId("exam-headline");
  for (let i = 0; i < max; i++) {
    if (await headline.isVisible().catch(() => false)) return true;
    if (!(await playCard(page))) break;
    await page.waitForTimeout(30);
  }
  return await headline.isVisible().catch(() => false);
}

test("band exam: offered on its Ladder rung, plays end to end, and can only move progress FORWARD", async ({ page }) => {
  test.setTimeout(300_000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript(
    (json) => { if (!localStorage.getItem("lingua-v1")) localStorage.setItem("lingua-v1", json); },
    JSON.stringify(examLearnerFixture())
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Ladder", exact: true }).click();

  // The affordance lives ON the A1 rung — no new tab was added for it.
  const take = page.getByTestId("take-exam-A1");
  await expect(take).toBeVisible();
  // The half-band check link is RETIRED (2026-09-25) — replaced by checkpoints.
  await expect(page.getByTestId("take-check-A1")).toHaveCount(0);
  await expect(page.getByTestId("verified-A1")).toHaveCount(0);
  // ...and exactly ONE checkpoint is surfaced, never twenty-one.
  await expect(page.getByTestId("next-checkpoint")).toHaveCount(1);

  // THE SNAPSHOT. Everything that is real progress, before a single question.
  const itemsBefore = await readState(page, ["items"]);
  const mistakesBefore = JSON.stringify(await readState(page, ["mistakes"]));

  await take.click();

  // The calm intro says what this cannot do to you, BEFORE the first card — and it
  // has to be HONEST now that a right answer counts.
  await expect(page.getByText("WHAT IT CANNOT DO")).toBeVisible();
  await expect(page.getByText("This can't set you back")).toBeVisible();
  await page.getByTestId("exam-begin").click();

  expect(await playExam(page, 60), "the exam did not reach its result screen").toBe(true);

  // A capability breakdown, not a big number. The weak half is titled "GO BACK TO
  // THESE" whenever anything was missed (D6, 2026-09-26) — it names the section AND
  // the lesson and every lesson is tappable — and falls back to the old "SHAKY ON"
  // label on a clean sweep, where there is nothing to go back to.
  await expect(page.getByText("YOU'RE SOLID ON")).toBeVisible();
  await expect(page.getByText(/SHAKY ON|GO BACK TO THESE/).first()).toBeVisible();
  await expect(page.getByText("NOT YET TESTED")).toBeVisible();
  await expect(page.getByTestId("exam-no-effect")).toBeVisible();

  // D6: whenever anything was missed the weak half is ACTIONABLE — the panel names
  // section AND lesson, every lesson is a tappable chip, and there is a primary
  // "Review these lessons" button next to the kept "Practice the words". Guarded,
  // because a clean sweep has nothing to go back to and the outcome here is PLAYED,
  // not forced. The lesson id is captured and opened at the end of this test, which is
  // what proves the chip points at a live route rather than a plausible string.
  let weakLessonId = null;
  const goback = page.getByTestId("exam-goback");
  if (await goback.isVisible().catch(() => false)) {
    await expect(page.getByTestId("exam-review-lessons")).toBeVisible();
    const chip = goback.locator('[data-testid^="go-lesson-"]').first();
    await expect(chip).toBeVisible();
    weakLessonId = (await chip.getAttribute("data-testid")).replace("go-lesson-", "");
    expect(weakLessonId, `"${weakLessonId}" is not a lesson id`).toMatch(/^[a-z]{2,3}-u\d+l\d+$/);
  }

  // THE ASSERTION THIS WHOLE FEATURE HANGS ON — NOT WORSE, in any field, for any
  // item. A right answer is allowed to have moved something forward; nothing is
  // allowed to have moved back.
  const itemsAfter = await readState(page, ["items"]);
  const bad = regressions(itemsBefore, itemsAfter);
  expect(bad, `an exam LOWERED something: ${bad.slice(0, 5).join("; ")}`).toEqual([]);

  // A MISS IS RECORDED NOWHERE. The mistake list is the one place a wrong answer
  // could leave a trace, and it must not — a failed exam stays inert whatever the
  // score was, and only a deliberate "Practice the shaky ones" tap writes here.
  expect(JSON.stringify(await readState(page, ["mistakes"])), "an exam wrote to the mistake list").toBe(mistakesBefore);

  // The outcome IS recorded — best result, date, attempt count — and the verified
  // milestone agrees with it exactly (80% is the bar; D3).
  const rec = await readState(page, ["exams", "exam-ja-a1"]);
  expect(rec.attempts).toBe(1);
  expect(typeof rec.bestPct).toBe("number");
  expect(rec.lastTaken).toBeGreaterThan(0);
  const earned = await readState(page, ["milestonesEarned"]);
  expect(earned.includes("level-A1-verified")).toBe(rec.bestPct >= 80);

  // And the rung now says so, without ever having blocked anything. A FAILED exam
  // is inert: no badge, and the A1 exam is simply offered again.
  await page.getByTestId("exam-done").click();
  if (rec.bestPct >= 80) {
    await expect(page.getByTestId("verified-A1")).toBeVisible();
  } else {
    await expect(page.getByTestId("verified-A1")).toHaveCount(0);
    await expect(page.getByTestId("take-exam-A1")).toBeVisible();
  }

  // ...and the lesson the result told the learner to go back to REALLY OPENS. Nothing
  // was unlocked to make this work: every band a learner is examined on is already
  // learned, so "Review these lessons" is ordinary navigation.
  if (weakLessonId) {
    await page.goto(`/lesson/${weakLessonId}`);
    await expect(page.getByTestId("lesson-begin")).toBeVisible();
  }

  expect(errors, errors.join("; ")).toEqual([]);
});

test("checkpoint: every 6 units, no pass, no fail, no percentage — and only a date is stored", async ({ page }) => {
  test.setTimeout(300_000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript(
    (json) => { if (!localStorage.getItem("lingua-v1")) localStorage.setItem("lingua-v1", json); },
    JSON.stringify(examLearnerFixture())
  );
  await page.goto("/ladder");

  // ONE checkpoint, not twenty-one, and it is the block this learner has finished:
  // the fixture reaches unit 13, so units 7-12 is the most recent complete block.
  const cp = page.getByTestId("next-checkpoint");
  await expect(cp).toHaveCount(1);
  await expect(cp).toContainText("units 7–12");
  const itemsBefore = await readState(page, ["items"]);
  await cp.click();

  // THE COMPOSITION IS THE POINT: 6 from the block + 2 from earlier on.
  await expect(page.getByText("no pass mark at all")).toBeVisible();
  await expect(page.getByText("from earlier on")).toBeVisible();
  // ...and the copy is HONEST about the one thing a checkpoint now keeps (D6). It used
  // to promise "no result is saved either — just the date", which stopped being true.
  await expect(page.getByText(/No score is saved/)).toBeVisible();
  await expect(page.getByText("which words")).toBeVisible();
  await page.getByTestId("exam-begin").click();

  // MISS ON PURPOSE (D6), because a clean run leaves nothing to remember and the pool
  // assertions below would pass on an empty object. `missCard` grades wrong on every
  // kind where a wrong answer is expressible; the rest are played straight.
  const cpHeadline = page.getByTestId("exam-headline");
  let cpMissed = 0;
  for (let i = 0; i < 40; i++) {
    if (await cpHeadline.isVisible().catch(() => false)) break;
    if (await missCard(page)) cpMissed += 1;
    else if (!(await playCard(page))) break;
    await page.waitForTimeout(30);
  }
  expect(cpMissed, "the checkpoint never managed to answer anything wrong").toBeGreaterThan(0);
  expect(await cpHeadline.isVisible().catch(() => false), "the checkpoint did not reach its result screen").toBe(true);

  // A mirror, not a verdict: no pass/fail wording, and no percentage anywhere.
  await expect(page.getByTestId("exam-headline")).toHaveText("Where you are right now");
  await expect(page.getByText("%")).toHaveCount(0);
  await expect(page.getByText("verified")).toHaveCount(0);

  // A DATE AND NOTHING ELSE — no bestPct, no attempts, no pass flag.
  const rec = await readState(page, ["exams", "cp-ja-u7-u12"]);
  expect(Object.keys(rec)).toEqual(["lastTaken"]);
  expect(rec.lastTaken).toBeGreaterThan(0);

  // D6: a checkpoint now ALSO remembers which WORDS were missed, in a separate slice,
  // so a later band exam can come back to them a different way. It persists, and it is
  // still not a score: item id + the card kinds it was missed with, and nothing else.
  const pool = (await readState(page, ["missedPool"])) ?? {};
  const pooled = Object.entries(pool.ja ?? {});
  expect(pooled.length, "a checkpoint miss did not reach the missed pool").toBe(cpMissed);
  for (const [id, entry] of pooled) {
    expect(Object.keys(entry).sort(), `${id}: the pool grew a field`).toEqual(["kinds", "lastMissed"]);
    expect(entry.kinds.length, `${id}: the pool forgot WHICH card kind it was missed with`).toBeGreaterThan(0);
    expect(entry.lastMissed).toBeGreaterThan(0);
  }
  // No count of it reaches the screen — the pool is a set of words, never a tally.
  await expect(page.getByText(/\d+\s*(missed|wrong|mistakes)/i)).toHaveCount(0);

  // Same one-directional guarantee as the band exam.
  const bad = regressions(itemsBefore, await readState(page, ["items"]));
  expect(bad, `a checkpoint LOWERED something: ${bad.slice(0, 5).join("; ")}`).toEqual([]);

  // No exam milestone can come from a checkpoint.
  const earned = await readState(page, ["milestonesEarned"]);
  expect(earned.some((id) => String(id).includes("verified"))).toBe(false);

  expect(errors, errors.join("; ")).toEqual([]);
});


// D6 (2026-09-26). GET THE CARD WRONG ON PURPOSE. `playCard` above answers correctly by
// construction, so the band-exam smoke plays a clean paper and can never reach the
// screen Alex actually asked about — what a learner sees when they DON'T pass. This is
// the mirror of `playCard` for the kinds where a wrong answer is expressible:
//   * type (meaning/reading/produce/listen:type) and conjugate — type garbage, and both
//     grant ONE free retry, so it has to be typed twice before the grade lands;
//   * any options card — click `[data-correct="false"]`.
// `build` and `sentence:build` have no wrong-order hook and fall through to be played
// correctly, which is why the caller counts misses instead of assuming all of them.
// Returns true when it committed a WRONG answer.
async function missCard(page) {
  const continueBtn = page.getByRole("button", { name: "Continue" });
  const check = page.getByRole("button", { name: "Check" });
  const garbage = "zzqqxx";

  const typeCard = page.getByTestId("type-card");
  if (await typeCard.isVisible().catch(() => false)) {
    for (let attempt = 0; attempt < 2; attempt++) {
      if (!(await check.isVisible().catch(() => false))) break;
      await page.getByTestId("type-input").fill(garbage);
      await check.evaluate((el) => el.click());
      await page.waitForTimeout(120);
    }
    await continueBtn.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    await continueBtn.evaluate((el) => el.click()).catch(() => {});
    return true;
  }

  const conjugateCard = page.getByTestId("conjugate-card");
  if (await conjugateCard.isVisible().catch(() => false)) {
    for (let attempt = 0; attempt < 2; attempt++) {
      if (!(await check.isVisible().catch(() => false))) break;
      await conjugateCard.locator("input").fill(garbage);
      await check.evaluate((el) => el.click());
      await page.waitForTimeout(120);
    }
    await continueBtn.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    await continueBtn.evaluate((el) => el.click()).catch(() => {});
    return true;
  }

  const wrongOption = page.locator('[data-correct="false"]');
  if (await wrongOption.first().isVisible().catch(() => false)) {
    await wrongOption.first().click();
    await continueBtn.click({ force: true }).catch(() => {});
    return true;
  }

  return false;
}

test("a not-yet-verified exam names the SECTION AND LESSON to go back to, and the lesson opens", async ({ page }) => {
  test.setTimeout(300_000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.addInitScript(
    (json) => { if (!localStorage.getItem("lingua-v1")) localStorage.setItem("lingua-v1", json); },
    JSON.stringify(examLearnerFixture())
  );
  await page.goto("/ladder");

  const itemsBefore = await readState(page, ["items"]);
  const mistakesBefore = JSON.stringify(await readState(page, ["mistakes"]));

  await page.getByTestId("take-exam-A1").click();
  // The intro is honest about the pool now: up to 8 questions can be words missed at a
  // checkpoint, asked a different way.
  await expect(page.getByText(/asked a\s+different way/)).toBeVisible();
  await page.getByTestId("exam-begin").click();

  // Miss everything that CAN be missed. 80% is the bar, so one wrong answer still
  // passes — a real "not yet" needs five.
  const headline = page.getByTestId("exam-headline");
  let missed = 0;
  for (let i = 0; i < 60; i++) {
    if (await headline.isVisible().catch(() => false)) break;
    if (await missCard(page)) missed += 1;
    else if (!(await playCard(page))) break;
    await page.waitForTimeout(30);
  }
  expect(missed, "the run never managed to answer anything wrong").toBeGreaterThan(5);
  await expect(headline).toBeVisible();

  // NOT A VERDICT, AND NO NUMBER. "not yet verified" (D1 — it certifies, it never
  // gates), and the percentage is withheld on a fail (D3: it is the part that stings).
  await expect(headline).toHaveText("A1 — not yet verified");
  await expect(page.getByText(/\d+%/)).toHaveCount(0);
  // NO SHAME COPY. "Go back to these", never "you failed".
  await expect(page.getByText(/failed|you got \d+ wrong/i)).toHaveCount(0);

  // THE ACTIONABLE HALF (Alex: "review x section(s) x lesson(s)"). Section heading,
  // lesson chips reading "u7 l2 · <title>", and BOTH actions — "Review these lessons"
  // (be taught it again) next to the kept "Practice the words" (drill the words).
  const goback = page.getByTestId("exam-goback");
  await expect(goback).toBeVisible();
  await expect(page.getByTestId("exam-review-lessons")).toBeVisible();
  // "Practice the words" is the KEPT action and it is gated on a missed item the learner
  // has actually been TAUGHT — an untaught word is a lesson's job, not a practice
  // session's. A 20-question band sample over a fixture with 8 taught items usually
  // misses only untaught words, so the button's PRESENCE is fixture luck and is not
  // asserted; its copy is, whenever it does appear.
  const practice = page.getByTestId("exam-practice");
  if (await practice.isVisible().catch(() => false)) {
    await expect(practice).toHaveText("Practice the words");
  }
  const chip = goback.locator('[data-testid^="go-lesson-"]').first();
  await expect(chip).toBeVisible();
  await expect(chip).toHaveText(/^u\d+ l\d+ · .+ →$/);
  const lessonId = (await chip.getAttribute("data-testid")).replace("go-lesson-", "");
  expect(lessonId, `"${lessonId}" is not a lesson id`).toMatch(/^[a-z]{2,3}-u\d+l\d+$/);
  // A short list, never a wall: at most 4 lessons are offered however rough the run was.
  expect(await goback.locator('[data-testid^="go-lesson-"]').count()).toBeLessThanOrEqual(4);

  // A FAIL IS STILL INERT (D1/D4): nothing lowered, no mistake-list entry, no badge.
  const bad = regressions(itemsBefore, await readState(page, ["items"]));
  expect(bad, `a failed exam LOWERED something: ${bad.slice(0, 5).join("; ")}`).toEqual([]);
  expect(JSON.stringify(await readState(page, ["mistakes"])), "a failed exam wrote to the mistake list").toBe(mistakesBefore);

  // ...and "Review these lessons" REALLY GOES THERE. Nothing was unlocked to make this
  // work: every band a learner is examined on is already learned.
  await page.getByTestId("exam-review-lessons").click();
  await expect(page).toHaveURL(new RegExp(`/lesson/${lessonId}$`));
  await expect(page.getByTestId("lesson-begin")).toBeVisible();

  expect(errors, errors.join("; ")).toEqual([]);
});

test("the band exam really spends the missed pool: every pooled word is asked, and passing it empties the pool", async ({ page }) => {
  test.setTimeout(300_000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // The fixture's eight taught items, pre-loaded into the missed pool as if a
  // checkpoint had missed each of them on a `choice` card. Eight is exactly
  // EXAM_POOL_MAX, so ALL of them must be drawn onto the A1 paper — which makes the
  // assertion at the end unambiguous: play the paper clean and the pool must be EMPTY,
  // because a correct answer anywhere removes an item.
  const fixture = examLearnerFixture();
  const taught = Object.keys(fixture.state.items);
  expect(taught.length).toBe(8);
  fixture.state.missedPool = {
    ja: Object.fromEntries(taught.map((id, i) => [id, { kinds: ["choice"], lastMissed: 1_700_000_000_000 + i }])),
  };

  await page.addInitScript(
    (json) => { if (!localStorage.getItem("lingua-v1")) localStorage.setItem("lingua-v1", json); },
    JSON.stringify(fixture)
  );
  await page.goto("/ladder");

  // It survived the reload — it is a persisted key, added with NO persist bump.
  expect(Object.keys((await readState(page, ["missedPool"]))?.ja ?? {}).length).toBe(8);

  await page.getByTestId("take-exam-A1").click();
  await page.getByTestId("exam-begin").click();
  expect(await playExam(page, 60), "the pooled exam did not reach its result screen").toBe(true);

  // EVERY POOLED WORD WAS ASKED AND ANSWERED, so nothing is left owing. If the draw had
  // ignored the pool, or if a correct answer did not clear an entry, these would remain.
  const after = (await readState(page, ["missedPool"]))?.ja ?? {};
  expect(Object.keys(after), "a pooled word was never asked, or a right answer left it in the pool").toEqual([]);

  // The pool never became a score: the exam record is the usual three fields and the
  // page shows no tally of past misses.
  const rec = await readState(page, ["exams", "exam-ja-a1"]);
  expect(Object.keys(rec).sort()).toEqual(["attempts", "bestPct", "lastTaken"]);
  await expect(page.getByText(/\d+\s*(missed|mistakes|from your misses)/i)).toHaveCount(0);

  expect(errors, errors.join("; ")).toEqual([]);
});
