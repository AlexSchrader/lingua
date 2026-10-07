import test from "node:test";
import assert from "node:assert/strict";
import { newCard, schedule, FSRS_PARAMS, MAX_INTERVAL_DAYS } from "../../src/store/srs.js";
import { buildPracticeQueue, PRACTICE_SIZE, REFRESH_SLOTS } from "../../src/store/practice.js";

// WHY THIS FILE EXISTS.
//
// Alex, 2026-10-06: "when a user is mid A2 work are they still getting taught A1 or
// pre-A1 if applicable — my fear is ill be mid A2 and review is just focused on A2
// words and even mastered words should be taught again occasionally."
//
// Nothing ever filtered the review queue by CEFR, so that half of the fear was
// unfounded. The other half was real and measured. With the stock ts-fsrs
// maximum_interval of 36,500 days, a word answered correctly every time came back
// on day 0, 2, 13, 57, 210, 689, 2017 — ZERO reviews between month 7 and month 23,
// which is the whole of A2 — and Practice, the one session that ignores the
// schedule, explicitly excluded mastered items. So a finished word had no route
// back at all.
//
// Two changes, both pinned here: cap the interval, and reserve practice slots for
// words you already know.

// --- the interval cap -------------------------------------------------------

test("NOTHING CAN VANISH: no interval exceeds the cap, however well you know it", () => {
  let card = newCard();
  let at = new Date("2026-01-01T09:00:00Z");
  let worst = 0;
  for (let i = 0; i < 25; i++) {
    const before = at;
    card = schedule(card, "easy", at); // the fastest-growing grade there is
    const gapDays = (new Date(card.due) - before) / 86_400_000;
    worst = Math.max(worst, gapDays);
    at = new Date(card.due);
  }
  // enable_fuzz spreads due dates, so allow a few days of slop above the cap.
  assert.ok(worst <= MAX_INTERVAL_DAYS + 7, `longest gap was ${Math.round(worst)} days against a ${MAX_INTERVAL_DAYS}-day cap`);
});

test("the cap is actually wired into the FSRS params, not just exported", () => {
  // The failure this catches: MAX_INTERVAL_DAYS declared, admired, and never passed
  // to generatorParameters — the constant reads correct while the schedule is stock.
  assert.equal(FSRS_PARAMS.maximum_interval, MAX_INTERVAL_DAYS);
});

test("a mastered A1 word is still reviewed during A2 — the actual complaint", () => {
  // Learn it, answer it right every time, and count reviews in the window Alex
  // named: roughly months 7 to 23 after learning it. Before the cap this was zero.
  let card = newCard();
  let at = new Date("2026-01-01T09:00:00Z");
  const start = at.getTime();
  let inWindow = 0;
  for (let i = 0; i < 12; i++) {
    card = schedule(card, "good", at);
    at = new Date(card.due);
    const day = (at.getTime() - start) / 86_400_000;
    if (day >= 210 && day <= 700) inWindow++;
    if (day > 700) break;
  }
  assert.ok(inWindow >= 1, "a word you know must come back at least once during the A2 stretch");
});

// --- practice includes words you already know -------------------------------

const item = (id, { mastered = false, pct = 0, lastSeen = null, lang = "fr" } = {}) => ({
  id,
  lang,
  rung: 1,
  // masteryPct/isMastered read `passes`; requiredPasses must be > 0 for isMastered
  // to be true at all, so a mastered fixture needs a kind with its passes filled.
  type: "vocab",
  front: id,
  reading: id,
  passes: mastered ? { choice: 15, "type:meaning": 15, "type:produce": 15, speak: 15, "choice:reverse": 15, "listen:choice": 15, "listen:type": 15, "cloze:choice": 15, "sentence:build": 15 } : { choice: Math.round(pct * 15) },
  srs: { due: new Date().toISOString(), last_review: lastSeen },
});

test("practice ALWAYS carries words you already know — the reserved slice", () => {
  const items = {};
  for (let i = 0; i < 30; i++) items[`gap${i}`] = item(`gap${i}`, { pct: i / 100 });
  for (let i = 0; i < 10; i++) items[`known${i}`] = item(`known${i}`, { mastered: true, lastSeen: `2026-0${(i % 9) + 1}-01` });
  const q = buildPracticeQueue({ items, lang: "fr" });
  const known = q.filter((it) => it.id.startsWith("known"));
  assert.equal(q.length, PRACTICE_SIZE);
  assert.equal(known.length, REFRESH_SLOTS, "mastered words must appear even when there are plenty of gaps");
});

test("the refreshers are the LONGEST-UNSEEN ones, not an arbitrary three", () => {
  const items = {};
  for (let i = 0; i < 20; i++) items[`gap${i}`] = item(`gap${i}`, { pct: 0.1 });
  items.oldest = item("oldest", { mastered: true, lastSeen: "2020-01-01" });
  items.middle = item("middle", { mastered: true, lastSeen: "2026-01-01" });
  items.recent = item("recent", { mastered: true, lastSeen: "2026-10-01" });
  items.newer = item("newer", { mastered: true, lastSeen: "2026-10-05" });
  const ids = buildPracticeQueue({ items, lang: "fr" }).map((it) => it.id);
  assert.ok(ids.includes("oldest"));
  assert.ok(ids.includes("middle"));
  assert.ok(!ids.includes("newer"), "the most recently seen word is the last one that needs refreshing");
});

test("practice still leads with the WIDEST gaps — the refresh slice did not take it over", () => {
  const items = {};
  items.worst = item("worst", { pct: 0 });
  for (let i = 1; i < 20; i++) items[`gap${i}`] = item(`gap${i}`, { pct: 0.5 });
  for (let i = 0; i < 5; i++) items[`known${i}`] = item(`known${i}`, { mastered: true });
  const q = buildPracticeQueue({ items, lang: "fr" });
  assert.equal(q[0].id, "worst", "the thing furthest from mastery is what practice is for");
  assert.ok(q.filter((it) => it.id.startsWith("gap")).length >= PRACTICE_SIZE - REFRESH_SLOTS - 1);
});

test("a learner with nothing left unmastered gets a FULL run, not three cards", () => {
  // The reserved slice is a floor, not a ceiling.
  const items = {};
  for (let i = 0; i < 20; i++) items[`known${i}`] = item(`known${i}`, { mastered: true, lastSeen: `2026-01-${String((i % 28) + 1).padStart(2, "0")}` });
  const q = buildPracticeQueue({ items, lang: "fr" });
  assert.equal(q.length, PRACTICE_SIZE);
  assert.equal(new Set(q.map((it) => it.id)).size, PRACTICE_SIZE, "no duplicates when backfilling");
});

test("practice never reaches into another language", () => {
  const items = {
    frgap: item("frgap", { pct: 0 }),
    jagap: item("jagap", { pct: 0, lang: "ja" }),
    jaknown: item("jaknown", { mastered: true, lang: "ja" }),
  };
  const q = buildPracticeQueue({ items, lang: "fr" });
  assert.deepEqual(q.map((it) => it.id), ["frgap"]);
});

test("an empty deck produces an empty queue rather than throwing", () => {
  assert.deepEqual(buildPracticeQueue({ items: {}, lang: "fr" }), []);
  assert.deepEqual(buildPracticeQueue({ items: null, lang: "fr" }), []);
});

// --- the sweep: keep the WHOLE working set warm ------------------------------
//
// Alex, 2026-10-06: "i mean reviews on all current words and stuff keep the mind
// fresh." Practice served the 12 weakest items every time, so three runs in a day
// re-served roughly the same 36 words. Depth with no breadth: a word that was
// neither weakest nor FSRS-due could sit untouched for weeks while still feeling
// like current material to the learner.

const withSeen = (id, pct, lastSeen) => item(id, { pct, lastSeen });

test("THE SWEEP: practice reaches past the weakest corner", () => {
  // 40 current words. The 3 weakest are deliberately also the most recently seen,
  // so a weakest-only selector would serve them and nothing else.
  const items = {};
  for (let i = 0; i < 40; i++) {
    const weakest = i < 3;
    items[`w${i}`] = withSeen(`w${i}`, weakest ? 0 : 0.5, weakest ? "2026-10-06" : `2026-01-${String((i % 28) + 1).padStart(2, "0")}`);
  }
  const q = buildPracticeQueue({ items, lang: "fr" });
  const ids = q.map((it) => it.id);
  const weakIds = ["w0", "w1", "w2"];
  assert.ok(weakIds.every((w) => ids.includes(w)), "the gaps must still be served");
  const swept = ids.filter((id) => !weakIds.includes(id));
  assert.ok(swept.length >= 6, `expected a real sweep, got ${swept.length} non-gap items`);
});

test("the sweep takes the LONGEST-UNSEEN first, so coverage is a guarantee", () => {
  const items = {};
  for (let i = 0; i < 30; i++) items[`recent${i}`] = withSeen(`recent${i}`, 0.5, "2026-10-05");
  items.ancient = withSeen("ancient", 0.5, "2020-01-01");
  items.old = withSeen("old", 0.5, "2024-01-01");
  const ids = buildPracticeQueue({ items, lang: "fr" }).map((it) => it.id);
  assert.ok(ids.includes("ancient"), "the word you have gone longest without must be swept in");
  assert.ok(ids.includes("old"));
});

test("three runs a day cover distinct words, not the same twelve repeated", () => {
  // The actual complaint, simulated: run practice, mark what it served as just-seen,
  // run again. A weakest-only selector returns the same list every time.
  const items = {};
  for (let i = 0; i < 60; i++) items[`w${i}`] = withSeen(`w${i}`, 0.5, "2026-01-01");
  const seen = new Set();
  let stamp = Date.parse("2026-10-06T00:00:00Z");
  for (let run = 0; run < 3; run++) {
    const q = buildPracticeQueue({ items, lang: "fr" });
    for (const it of q) {
      seen.add(it.id);
      // Real timestamps. A first draft built these by string concatenation and
      // rolled past hour 09 into "T010:00:00Z", which Date rejects — lastSeen then
      // scores NaN, falls back to 0, and those words sort as never-seen and get
      // re-served forever. The run output was identical three times and looked
      // exactly like the bug under test.
      items[it.id] = { ...items[it.id], srs: { ...items[it.id].srs, last_review: new Date((stamp += 60_000)).toISOString() } };
    }
  }
  assert.ok(seen.size >= 30, `three runs should cover ~36 distinct words, covered ${seen.size}`);
});

test("gap slots are still reserved — breadth did not evict depth", () => {
  const items = {};
  items.worst = withSeen("worst", 0, "2026-10-06");
  for (let i = 0; i < 40; i++) items[`w${i}`] = withSeen(`w${i}`, 0.9, "2020-01-01");
  const ids = buildPracticeQueue({ items, lang: "fr" }).map((it) => it.id);
  assert.ok(ids.includes("worst"), "the weakest word must survive even when everything else is older");
});
