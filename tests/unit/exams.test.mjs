import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  EXAM_BANDS,
  EXAM_PASS_PCT,
  EXAM_SIZE,
  CHECK_SIZE,
  CHECKPOINT_EVERY,
  CHECKPOINT_SIZE,
  CHECKPOINT_OLDER,
  EXAM_CREDIT_GRADE,
  EXAM_EXCLUDED_KINDS,
  EXAM_POOL_MAX,
  MISSED_POOL_CAP,
  KIND_TIERS,
  addMiss,
  clearMiss,
  missedEntries,
  lessonLabel,
  examId,
  checkId,
  checkpointId,
  checkpointRanges,
  furthestUnitOrder,
  nextCheckpointFor,
  examCreditGrade,
  forwardOnlySrs,
  parseExamId,
  nextBand,
  verifiedMilestoneId,
  bandHasContent,
  examKindsFor,
  examPaper,
  scoreExam,
  isCorrectGrade,
  isVerified,
  paperKeyFor,
} from "../../src/store/exams.js";
import { buildExamSandbox } from "../../src/store/dev.js";
import { LIVE_CARD_KINDS } from "../../src/data/contract.js";
import { seedItems, UNITS } from "../../src/data/index.js";
import { produceIsFreePass, meaningIsFreePass } from "../../src/store/cardRouting.js";
import { countedPasses } from "../../src/store/mastery.js";
import { newCard, schedule } from "../../src/store/srs.js";
import { useStore } from "../../src/store/useStore.js";
import { earnedMilestones, milestoneCatalog, nextMilestone } from "../../src/data/milestones.js";
import { kindKeyOf } from "../../src/store/reviewStep.js";

// Languages with authored content today. Derived, not hardcoded, so this file
// does not rot the day a crew hands back a seventh language.
const LIVE_LANGS = [...new Set(UNITS.filter((u) => u.lessons?.some((l) => Array.isArray(l.items))).map((u) => u.lang))];

// --- ids ---------------------------------------------------------------------

test("exam and check ids round-trip, and the two shapes can't be confused", () => {
  assert.equal(examId("ja", "A1"), "exam-ja-a1");
  assert.equal(checkId("fr", "B1"), "check-fr-b1.5");

  assert.deepEqual(parseExamId("exam-ja-a1"), { id: "exam-ja-a1", kind: "exam", lang: "ja", band: "A1" });
  assert.deepEqual(parseExamId("check-fr-b1.5"), { id: "check-fr-b1.5", kind: "check", lang: "fr", band: "B1" });

  // A band exam never carries the .5, and a check always does.
  assert.equal(parseExamId("exam-ja-a1.5"), null);
  assert.equal(parseExamId("check-ja-a1"), null);
  assert.equal(parseExamId("exam-ja-c1"), null);
  assert.equal(parseExamId("nonsense"), null);
  assert.equal(parseExamId(null), null);
});

test("half-checks exist between every pair of bands and nowhere else", () => {
  assert.equal(nextBand("A1"), "A2");
  assert.equal(nextBand("B1"), "B2");
  // No b2.5 — there is no band above B2, which is exactly the three half-check
  // ids the brief listed (a1.5, a2.5, b1.5).
  assert.equal(nextBand("B2"), null);
});

test("the verified milestone id mirrors the level milestone's language convention", () => {
  assert.equal(verifiedMilestoneId("ja", "A1"), "level-A1-verified");
  assert.equal(verifiedMilestoneId("fr", "A1"), "level-A1-verified-fr");
});

// --- papers ------------------------------------------------------------------

test("every band of every authored language yields a full paper — with no per-language work", () => {
  for (const lang of LIVE_LANGS) {
    for (const band of EXAM_BANDS) {
      if (!bandHasContent(lang, band)) continue;
      const paper = examPaper(examId(lang, band));
      assert.ok(paper, `${lang} ${band} produced no paper`);
      assert.equal(paper.steps.length, EXAM_SIZE, `${lang} ${band} paper is short`);
      const check = examPaper(checkId(lang, band));
      if (nextBand(band) && bandHasContent(lang, nextBand(band))) {
        assert.equal(check.steps.length, CHECK_SIZE, `${lang} ${band}.5 check is short`);
      }
    }
  }
});

test("a paper is stratified — every question comes from a different unit", () => {
  // The failure this prevents: a flat random draw over a whole band happily tests
  // one lesson six times and calls the result "can you do A1".
  for (const lang of LIVE_LANGS) {
    const paper = examPaper(examId(lang, "A1"));
    const units = new Set(paper.steps.map((s) => s.unitId));
    assert.equal(units.size, paper.steps.length, `${lang} A1 repeated a unit before covering the others`);
    // ...and never the same item twice.
    const ids = new Set(paper.steps.map((s) => s.id));
    assert.equal(ids.size, paper.steps.length, `${lang} A1 asked the same item twice`);
  }
});

test("a paper is deterministic per (learner, exam, attempt) — a mid-exam reload resumes it", () => {
  const a = examPaper("exam-ja-a1", { seed: "alex", attempt: 0 });
  const b = examPaper("exam-ja-a1", { seed: "alex", attempt: 0 });
  assert.deepEqual(a.steps, b.steps, "same learner + same attempt must rebuild the same paper");

  const retake = examPaper("exam-ja-a1", { seed: "alex", attempt: 1 });
  assert.notDeepEqual(a.steps, retake.steps, "a retake must be a different look, not the same paper");

  const other = examPaper("exam-ja-a1", { seed: "someone-else", attempt: 0 });
  assert.notDeepEqual(a.steps, other.steps, "two learners must not share a paper");
});

test("papers weight toward recall and production, and never ask a card kind that isn't live", () => {
  const recognition = new Set(KIND_TIERS[2]);
  let total = 0;
  let weak = 0;
  for (const lang of LIVE_LANGS) {
    for (const band of EXAM_BANDS) {
      if (!bandHasContent(lang, band)) continue;
      for (const step of examPaper(examId(lang, band)).steps) {
        total += 1;
        if (recognition.has(step.kindKey)) weak += 1;
        assert.ok(LIVE_CARD_KINDS.includes(step.kindKey), `${step.kindKey} is not in LIVE_CARD_KINDS`);
        // The runner speaks { kind, mode }; kindKey must agree with it, or the
        // breakdown would credit a different skill from the one asked.
        assert.equal(kindKeyOf(step), step.kindKey);
        assert.ok(!EXAM_EXCLUDED_KINDS.has(step.kindKey), `${step.kindKey} grades the device, not the learner — never examinable`);
      }
    }
  }
  // A 4-option `choice` card is a weak test of "can you do A1". Recognition is
  // kept but rare (TIER_WEIGHTS puts it at 10%); this is the honest ceiling with
  // slack for items that can take nothing stronger.
  assert.ok(weak / total < 0.35, `recognition cards were ${Math.round((weak / total) * 100)}% of all questions`);
  assert.ok(total > 100, "sanity: the sweep actually looked at papers");
});

test("a card whose prompt grades as its own answer is never examinable", () => {
  // cardRouting's free-pass guard: in a review a free pass is a wasted rep, in an
  // exam it is a free mark — it inflates the one number the learner is trusting.
  const seed = Object.values(seedItems());
  let guarded = 0;
  for (const it of seed) {
    const kinds = examKindsFor(it).flat();
    // speak and trace grade the DEVICE as much as the learner (mic, finger) —
    // neither is ever offered on a paper. See EXAM_EXCLUDED_KINDS.
    for (const banned of EXAM_EXCLUDED_KINDS) {
      assert.ok(!kinds.includes(banned), `${it.id}: ${banned} must never be examinable`);
    }
    if (produceIsFreePass(it)) {
      assert.ok(!kinds.includes("type:produce"), `${it.id}: typing the prompt back would grade correct`);
      guarded += 1;
    }
    if (meaningIsFreePass(it)) {
      assert.ok(!kinds.includes("type:meaning"), `${it.id}: typing the prompt back would grade correct`);
      guarded += 1;
    }
  }
  assert.ok(guarded > 0, "sanity: the corpus really does contain free-pass items to guard");
});

test("an id with no authored content yields no paper rather than an empty exam", () => {
  assert.equal(examPaper("exam-zz-a1"), null);
  assert.equal(examPaper("garbage"), null);
});

// --- scoring -----------------------------------------------------------------

test("only `again` is a wrong answer — hard/good/easy are all correct", () => {
  assert.equal(isCorrectGrade("again"), false);
  assert.equal(isCorrectGrade("hard"), true);
  assert.equal(isCorrectGrade("good"), true);
  assert.equal(isCorrectGrade("easy"), true);
  assert.equal(isCorrectGrade(undefined), false); // unanswered is not a pass
});

test("80% passes a band exam; 79% does not", () => {
  const paper = examPaper("exam-ja-a1");
  const grade = (n) => Object.fromEntries(paper.steps.map((s, i) => [s.id, i < n ? "good" : "again"]));

  const at80 = scoreExam(paper, grade(16));
  assert.equal(at80.pct, EXAM_PASS_PCT);
  assert.equal(at80.passed, true);

  const at75 = scoreExam(paper, grade(15));
  assert.equal(at75.passed, false);
});

test("a half-check has NO threshold at all — never passed, never failed", () => {
  const paper = examPaper("check-ja-a1.5");
  const perfect = scoreExam(paper, Object.fromEntries(paper.steps.map((s) => [s.id, "easy"])));
  const awful = scoreExam(paper, Object.fromEntries(paper.steps.map((s) => [s.id, "again"])));
  // null, not false: there is no bar to be under.
  assert.equal(perfect.passed, null);
  assert.equal(awful.passed, null);
});

test("the breakdown is capability, not a number: solid / shaky / not yet tested", () => {
  const paper = examPaper("exam-ja-a1");
  const grades = Object.fromEntries(paper.steps.map((s, i) => [s.id, i === 0 ? "again" : "good"]));
  const res = scoreExam(paper, grades);

  assert.equal(res.shaky.length, 1, "exactly the one unit with a wrong answer is shaky");
  assert.equal(res.shaky[0], paper.steps[0].unitTitle);
  assert.equal(res.solid.length, paper.steps.length - 1);
  assert.deepEqual(res.shakyIds, [paper.steps[0].id]);

  // "Not yet tested" is measured against the paper's own pool, so a unit the exam
  // never meant to reach is not reported as an untested gap.
  const tested = new Set(paper.steps.map((s) => s.unitId));
  const expected = paper.unitsInScope.filter((u) => !tested.has(u.id)).length;
  assert.equal(res.untested.length, expected);
});

// --- the one that matters: an exam can never touch real progress -------------

test("buildExamSandbox is a clean throwaway deck — real content, zero progress", () => {
  const sandbox = buildExamSandbox();
  const seed = seedItems();
  assert.equal(Object.keys(sandbox).length, Object.keys(seed).length);
  for (const it of Object.values(sandbox)) assert.equal(it.rung, 0, `${it.id} must start fresh`);
  // It is a COPY. Mutating it must not reach the seed the store builds from.
  const id = Object.keys(sandbox)[0];
  sandbox[id].rung = 5;
  assert.equal(seedItems()[id].rung ?? 0, 0, "the sandbox aliased the real seed");
});

// THE THREE TESTS THIS FEATURE HANGS ON, and they replace one weaker test.
//
// Until 2026-09-25 this file asserted "a full exam run leaves the real items map
// byte-identical". Alex changed the rule that day — "the exams should be helping the
// user build" — so the write is now ASYMMETRIC rather than absent, and a blanket
// byte-identical assertion is wrong BY DESIGN for the correct-answer case. It is not
// deleted: it survives below as test 1, narrowed to the case it was really
// protecting (a bad day costing nothing), and two strictly stronger tests cover the
// cases it never could.
//
// The invariant all three enforce: AN EXAM CAN ONLY EVER MOVE AN ITEM FORWARD.

// Real, non-trivial progress to protect: graduated items with FSRS history, some
// scheduled well into the future — which is the state that catches the subtle
// failure (FSRS is NOT monotonic on an early review; a correct answer on a card due
// in 60 days can return a 40-day interval and pull `due` FORWARD).
function seedRealProgress(paper) {
  useStore.getState().seedOnce();
  // Built DIRECTLY rather than through gradeItem: identical shape, and it avoids a
  // few hundred whole-corpus milestone reconciles that made the file the slowest in
  // the suite. The depth is staggered so the paper spans shallow, mid and deeply
  // scheduled items — the last group is what catches the early-review regression.
  useStore.setState((s) => {
    const items = { ...s.items };
    for (const [i, step] of paper.steps.entries()) {
      const base = items[step.id];
      if (!base) continue;
      const depth = i % 4;
      let srs = base.srs ?? newCard();
      for (let n = 0; n <= depth; n++) srs = schedule(srs, "easy");
      items[step.id] = { ...base, rung: 1 + depth, srs, passes: { ...(base.passes ?? {}), [step.kindKey]: depth } };
    }
    return { items };
  });
}

const dueMs = (it) => new Date(it?.srs?.due ?? 0).getTime();

// The monotonic property, asserted field by field over the WHOLE items map. An item
// may be absent from either side only if it is absent from both.
function assertOnlyForward(before, after, label) {
  assert.deepEqual(Object.keys(after).sort(), Object.keys(before).sort(), `${label}: the item set changed`);
  for (const id of Object.keys(before)) {
    const b = before[id];
    const a = after[id];
    assert.ok((a.rung ?? 0) >= (b.rung ?? 0), `${label}: ${id} rung fell ${b.rung} -> ${a.rung}`);
    assert.ok(dueMs(a) >= dueMs(b), `${label}: ${id} due moved EARLIER`);
    assert.ok(
      Number(a.srs?.lapses ?? 0) <= Number(b.srs?.lapses ?? 0),
      `${label}: ${id} gained a lapse`
    );
    assert.ok(
      Number(a.srs?.reps ?? 0) >= Number(b.srs?.reps ?? 0),
      `${label}: ${id} reps regressed`
    );
    assert.ok(
      Number(a.srs?.stability ?? 0) >= Number(b.srs?.stability ?? 0),
      `${label}: ${id} lost stability`
    );
    assert.ok(
      countedPasses(a) >= countedPasses(b),
      `${label}: ${id} lost mastery passes`
    );
  }
}

// TEST 1 — the old byte-identical assertion, narrowed to the case Alex needs
// protected. A day where nothing goes right must cost NOTHING.
test("a wrong exam answer changes nothing", () => {
  const paper = examPaper("exam-ja-a1");
  seedRealProgress(paper);
  const store = useStore.getState();

  // The deck the CARDS read is still a throwaway map — nothing a card mutates can
  // reach a real item.
  const sandbox = buildExamSandbox();

  const beforeItems = JSON.stringify(useStore.getState().items);
  const beforeMistakes = JSON.stringify(useStore.getState().mistakes);
  const beforeStats = JSON.stringify(useStore.getState().stats);

  const grades = {};
  for (const step of paper.steps) {
    assert.ok(sandbox[step.id], `${step.id} must exist in the exam deck`);
    store.creditExamAnswer(step.id, "again", step.kindKey);
    grades[step.id] = "again";
  }
  const result = scoreExam(paper, grades);
  assert.equal(result.pct, 0);
  assert.equal(result.passed, false);

  // BYTE-IDENTICAL. No rung drop, no interval reset, no lapse, no XP, and the
  // mistake log does not record the miss either.
  assert.equal(JSON.stringify(useStore.getState().items), beforeItems, "a wrong exam answer wrote to items");
  assert.equal(JSON.stringify(useStore.getState().mistakes), beforeMistakes, "a wrong exam answer wrote to the mistake list");
  assert.equal(JSON.stringify(useStore.getState().stats), beforeStats, "a wrong exam answer wrote to stats");
});

// TEST 2 — the new half of the contract. A correct answer COUNTS, and every field it
// touches may only improve.
test("a correct exam answer can only move an item forward", () => {
  const paper = examPaper("exam-ja-a2");
  seedRealProgress(paper);
  const store = useStore.getState();

  const before = structuredClone(useStore.getState().items);
  for (const step of paper.steps) store.creditExamAnswer(step.id, "good", step.kindKey);
  const after = useStore.getState().items;

  assertOnlyForward(before, after, "all-correct");

  // ...and it genuinely CREDITED, rather than being forward-only by doing nothing.
  const moved = paper.steps.filter((st) => {
    const b = before[st.id], a = after[st.id];
    return (a.rung ?? 0) > (b.rung ?? 0) || countedPasses(a) > countedPasses(b) || dueMs(a) > dueMs(b);
  });
  assert.ok(moved.length > 0, "a paper of correct answers credited nothing at all");

  // ALWAYS `good`, NEVER `easy` — an exam is not the place to earn a long interval.
  // Pressing `easy` and pressing `good` must leave identical state.
  const viaGood = structuredClone(useStore.getState().items);
  const id = paper.steps[0].id;
  store.creditExamAnswer(id, "easy", paper.steps[0].kindKey);
  const viaEasy = structuredClone(useStore.getState().items[id]);
  // Re-run the same item with the explicit credit grade from a matching baseline.
  assert.equal(EXAM_CREDIT_GRADE, "good");
  assert.equal(examCreditGrade("easy"), "good", "`easy` must be credited as `good`");
  assert.equal(examCreditGrade("hard"), "good", "`hard` must be credited as `good`");
  assert.equal(examCreditGrade("again"), null, "`again` must credit nothing");
  assert.ok(viaEasy.rung >= viaGood[id].rung);

  // An item the learner has NEVER been taught is not promoted by an exam — that
  // would slip it into the review queue without a lesson ever teaching it.
  const untaught = Object.values(useStore.getState().items).find((it) => (it.rung ?? 0) === 0);
  assert.ok(untaught, "sanity: the corpus still holds an untaught item");
  const untaughtBefore = JSON.stringify(untaught);
  store.creditExamAnswer(untaught.id, "good", "choice");
  assert.equal(JSON.stringify(useStore.getState().items[untaught.id]), untaughtBefore, "an exam promoted an untaught item");
});

// TEST 3 — the general case. A real paper is a MIX, and the property has to hold
// across every item in the store, not just the ones that were answered.
test("an exam cannot lower anything, on any mix of answers", () => {
  const paper = examPaper("exam-ja-a1", { seed: "mixed", attempt: 2 });
  seedRealProgress(paper);
  const store = useStore.getState();

  const pattern = ["again", "good", "hard", "again", "easy", "again", "good"];
  const before = structuredClone(useStore.getState().items);
  const grades = {};
  for (const [i, step] of paper.steps.entries()) {
    const g = pattern[i % pattern.length];
    store.creditExamAnswer(step.id, g, step.kindKey);
    grades[step.id] = g;
  }
  assertOnlyForward(before, useStore.getState().items, "mixed");

  // The scoring still sees the real mix (the write asymmetry is not a scoring lie).
  const res = scoreExam(paper, grades);
  assert.ok(res.pct > 0 && res.pct < 100, `a mixed paper should score in between, got ${res.pct}`);
  assert.ok(res.shakyIds.length > 0, "the misses still feed the practice queue");

  // Every wrong answer's item is untouched, item by item.
  for (const [i, step] of paper.steps.entries()) {
    if (pattern[i % pattern.length] !== "again") continue;
    // ...unless the same item was also answered correctly elsewhere on the paper,
    // which a stratified paper never does (one question per item).
    assert.equal(
      JSON.stringify(useStore.getState().items[step.id]),
      JSON.stringify(before[step.id]),
      `${step.id} was answered wrong and still changed`
    );
  }
});

// The clamp itself, in isolation — the failure it exists for cannot be produced on
// demand from FSRS, so it is pinned directly.
test("forwardOnlySrs keeps the LATER due date and never adds a lapse", () => {
  const prev = { due: "2026-12-01T00:00:00.000Z", stability: 60, difficulty: 4, reps: 9, lapses: 1 };
  // An early review returning a SHORTER interval — the case that would silently cost
  // the learner scheduling they had already earned.
  const worse = { due: "2026-10-01T00:00:00.000Z", stability: 40, difficulty: 6, reps: 10, lapses: 2 };
  const out = forwardOnlySrs(prev, worse);
  assert.equal(out.due, prev.due, "due was pulled earlier");
  assert.equal(out.stability, 60);
  assert.equal(out.difficulty, 4);
  assert.equal(out.lapses, 1, "an exam added a lapse");
  assert.equal(out.reps, 10, "reps must still climb");

  // A genuinely better card passes through untouched.
  const better = { due: "2027-06-01T00:00:00.000Z", stability: 90, difficulty: 3, reps: 10, lapses: 1 };
  assert.deepEqual(forwardOnlySrs(prev, better), better);
});

// --- the store slice ---------------------------------------------------------

test("recordExam keeps the best band-exam result and can never lower it", () => {
  const store = useStore.getState();
  store.recordExam("exam-ja-a1", { pct: 90 });
  let rec = useStore.getState().exams["exam-ja-a1"];
  assert.equal(rec.bestPct, 90);
  assert.equal(rec.attempts, 1);
  assert.ok(rec.lastTaken > 0);

  store.recordExam("exam-ja-a1", { pct: 20 });
  rec = useStore.getState().exams["exam-ja-a1"];
  assert.equal(rec.bestPct, 90, "a worse retake must never take a pass away");
  assert.equal(rec.attempts, 2);
});

test("a half-check stores a DATE AND NOTHING ELSE — no pct, no pass, no count", () => {
  useStore.getState().recordExam("check-ja-a1.5", { pct: 100 });
  const rec = useStore.getState().exams["check-ja-a1.5"];
  assert.deepEqual(Object.keys(rec), ["lastTaken"]);
  assert.ok(rec.lastTaken > 0);
});

test("recordExam ignores an id that isn't an exam", () => {
  const before = JSON.stringify(useStore.getState().exams);
  useStore.getState().recordExam("not-an-exam", { pct: 100 });
  assert.equal(JSON.stringify(useStore.getState().exams), before);
});

test("the paper key only moves when a run FINISHES, so a reload resumes the same paper", () => {
  const exams = { "exam-ja-a1": { bestPct: 50, attempts: 3, lastTaken: 111 }, "check-ja-a1.5": { lastTaken: 222 } };
  assert.deepEqual(paperKeyFor(exams, "exam-ja-a1", "alex"), { seed: "alex", attempt: 3 });
  // A check has no attempts counter to seed from (it stores no result), so its
  // paper rotates off the last-taken stamp instead.
  assert.deepEqual(paperKeyFor(exams, "check-ja-a1.5", "alex"), { seed: "alex|222", attempt: 0 });
  assert.deepEqual(paperKeyFor({}, "exam-ja-a1", ""), { seed: "", attempt: 0 });
});

test("queuePractice only queues items the learner has actually been taught", () => {
  const store = useStore.getState();
  store.seedOnce();
  const paper = examPaper("exam-ja-a1");
  const taught = paper.steps[0].id;
  store.graduateItem(taught, "good");
  // An item that is genuinely still at rung 0. Earlier tests in this file share the
  // module-level store and now graduate whole papers, so search the LIVE corpus
  // rather than one paper's twenty items.
  const live = useStore.getState().items;
  const untaught = Object.values(live).find((it) => it.lang === "ja" && (it.rung ?? 0) < 1)?.id;
  assert.ok(untaught, "sanity: the corpus still holds an untaught item");

  store.queuePractice([taught, untaught]);
  const mistakes = useStore.getState().mistakes;
  assert.ok(mistakes.includes(taught), "a taught item goes to the practice queue");
  assert.ok(!mistakes.includes(untaught), "an untaught word is a lesson's job, not practice's");
});

// --- the verified milestone (D2: ADD, don't replace) -------------------------

test("level-<band>-verified is a SEPARATE milestone from level-<band>", () => {
  const ids = milestoneCatalog().map((m) => m.id);
  assert.ok(ids.includes("level-A1"), "the content-covered milestone still exists");
  assert.ok(ids.includes("level-A1-verified"), "the exam-verified milestone was added alongside it");
  assert.ok(ids.includes("level-B2-verified-fr"), "every language/band pair gets one");

  const verified = milestoneCatalog().filter((m) => m.family === "verified");
  for (const m of verified) assert.match(m.label, / (A1|A2|B1|B2) verified$/);
});

test("the verified milestone is earned by a passed exam and by nothing else", () => {
  const items = {}; // NO item progress at all — this milestone doesn't read items
  assert.ok(!earnedMilestones(items, {}).includes("level-A1-verified"));
  assert.ok(!isVerified({ "exam-ja-a1": { bestPct: EXAM_PASS_PCT - 1 } }, "ja", "A1"));

  const passed = { "exam-ja-a1": { bestPct: EXAM_PASS_PCT, attempts: 1, lastTaken: 1 } };
  assert.ok(isVerified(passed, "ja", "A1"));
  assert.ok(earnedMilestones(items, passed).includes("level-A1-verified"));
  // ...and it does not leak across languages or bands.
  assert.ok(!earnedMilestones(items, passed).includes("level-A1-verified-fr"));
  assert.ok(!earnedMilestones(items, passed).includes("level-A2-verified"));
});

test("earnedMilestones still works with one argument — nothing else reads exams", () => {
  // Every other milestone's progress() takes only `items`; adding the second
  // argument must not have changed any of their answers.
  const items = {};
  assert.deepEqual(earnedMilestones(items), earnedMilestones(items, {}));
});

test("the verified badge is never the app's gentle next goal", () => {
  // need:1 would otherwise beat every real count forever and pin "1 more to
  // Japanese A1 verified" to Today and Stats from day one. It belongs on its rung.
  const next = nextMilestone({}, ["ja"], {});
  assert.ok(next, "there is always some next goal");
  assert.notEqual(next.id, "level-A1-verified");
});

test("passing an exam earns the verified milestone through the store, earned-once", () => {
  const store = useStore.getState();
  store.seedOnce();
  assert.ok(!useStore.getState().milestonesEarned.includes("level-A2-verified"));

  store.recordExam("exam-ja-a2", { pct: 100 });
  assert.ok(useStore.getState().milestonesEarned.includes("level-A2-verified"));

  // Earned once, never revoked — a later bad retake cannot take it back.
  store.recordExam("exam-ja-a2", { pct: 0 });
  assert.ok(useStore.getState().milestonesEarned.includes("level-A2-verified"));
});

test("a FAILED exam changes nothing at all — it certifies, it never gates (D1)", () => {
  const store = useStore.getState();
  store.seedOnce();
  const before = {
    items: JSON.stringify(useStore.getState().items),
    milestones: JSON.stringify(useStore.getState().milestonesEarned),
    languages: JSON.stringify(useStore.getState().languages),
    daily: JSON.stringify(useStore.getState().daily),
  };
  store.recordExam("exam-ja-b1", { pct: 10 });
  assert.equal(JSON.stringify(useStore.getState().items), before.items);
  assert.equal(JSON.stringify(useStore.getState().milestonesEarned), before.milestones);
  assert.equal(JSON.stringify(useStore.getState().languages), before.languages);
  assert.equal(JSON.stringify(useStore.getState().daily), before.daily);
  // The only thing that moved is the exam record itself.
  assert.equal(useStore.getState().exams["exam-ja-b1"].bestPct, 10);
});

// --- checkpoints (2026-09-25) ------------------------------------------------
// Alex: 7 touchpoints across 126 units means a learner can climb ~30 units without
// knowing where they stand. A checkpoint every CHECKPOINT_EVERY units replaces the
// three half-band checks.

test("the checkpoint cadence and length are plain tunable constants", () => {
  // CLAUDE.md: "tuning is constants, not structure". Changing the cadence must be a
  // one-line edit, so these are numbers and nothing derives a literal from them.
  assert.equal(typeof CHECKPOINT_EVERY, "number");
  assert.equal(typeof CHECKPOINT_SIZE, "number");
  assert.equal(typeof CHECKPOINT_OLDER, "number");
  assert.equal(CHECKPOINT_EVERY, 6);
  assert.equal(CHECKPOINT_SIZE, 8);
  assert.equal(CHECKPOINT_OLDER, 2);
  assert.ok(CHECKPOINT_OLDER < CHECKPOINT_SIZE, "the older half cannot be the whole paper");
});

test("a checkpoint id round-trips, and a bad range is rejected", () => {
  assert.equal(checkpointId("ja", 7, 12), "cp-ja-u7-u12");
  assert.deepEqual(parseExamId("cp-ja-u7-u12"), {
    id: "cp-ja-u7-u12", kind: "checkpoint", lang: "ja", band: null, from: 7, to: 12,
  });
  assert.equal(parseExamId("cp-ja-u12-u7"), null, "to must not precede from");
  assert.equal(parseExamId("cp-ja-u7"), null);
  assert.equal(parseExamId("cp-ja-uX-uY"), null);
});

test("a RETIRED half-check id still PARSES, so a persisted record cannot crash", () => {
  // The three half-checks are no longer generated anywhere (Ladder.jsx offers only
  // the band exam + the next checkpoint), but an existing save holds
  // `exams["check-ja-a1.5"]` and an old bookmark can still be opened.
  assert.deepEqual(parseExamId(checkId("ja", "A1")), {
    id: "check-ja-a1.5", kind: "check", lang: "ja", band: "A1",
  });
  const legacy = examPaper("check-ja-a1.5");
  assert.ok(legacy, "an old half-check link must still open rather than crash");
  assert.equal(legacy.steps.length, CHECK_SIZE);
  assert.equal(scoreExam(legacy, {}).passed, null, "and it still has no threshold");
});

test("every authored language gets a checkpoint every CHECKPOINT_EVERY units", () => {
  for (const lang of LIVE_LANGS) {
    const units = new Set(
      UNITS.filter((u) => u.lang === lang && u.lessons?.some((l) => Array.isArray(l.items))).map((u) => u.id)
    ).size;
    const ranges = checkpointRanges(lang);
    assert.equal(
      ranges.length,
      Math.floor(units / CHECKPOINT_EVERY),
      `${lang}: ${units} units should yield ${Math.floor(units / CHECKPOINT_EVERY)} checkpoints, got ${ranges.length}`
    );
    // Contiguous, non-overlapping, CHECKPOINT_EVERY wide.
    for (const [i, r] of ranges.entries()) {
      assert.equal(r.to - r.from + 1, CHECKPOINT_EVERY, `${r.id} is not ${CHECKPOINT_EVERY} units wide`);
      if (i > 0) assert.equal(r.from, ranges[i - 1].to + 1, `${r.id} does not follow ${ranges[i - 1].id}`);
      assert.equal(r.id, checkpointId(lang, r.from, r.to));
      assert.deepEqual(parseExamId(r.id).lang, lang);
    }
    assert.ok(ranges.length >= 20, `${lang} should have ~21+ checkpoints, got ${ranges.length}`);
  }
});

test("A CHECKPOINT IS 6 RECENT + 2 EARLIER — measured on every checkpoint of every language", () => {
  // This is the whole reason checkpoints exist: without the older pair it only
  // measures what was just crammed. Measured, never asserted from the constants.
  let checked = 0;
  let firstFallbacks = 0;
  for (const lang of LIVE_LANGS) {
    for (const r of checkpointRanges(lang)) {
      const paper = examPaper(r.id);
      assert.ok(paper, `${r.id} produced no paper`);
      assert.equal(paper.kind, "checkpoint");
      assert.equal(paper.steps.length, CHECKPOINT_SIZE, `${r.id} is not ${CHECKPOINT_SIZE} questions`);
      assert.equal(paper.from, r.from);
      assert.equal(paper.to, r.to);

      const older = paper.steps.filter((st) => st.era === "older");
      const recent = paper.steps.filter((st) => st.era === "recent");
      assert.equal(older.length + recent.length, CHECKPOINT_SIZE, `${r.id}: a step has no era`);
      assert.equal(paper.olderActual, older.length);
      assert.equal(paper.olderWanted, CHECKPOINT_OLDER);

      if (r.from === 1) {
        // The very first checkpoint has nothing earlier to draw on: 8 recent, and the
        // paper SAYS so rather than silently shipping a short paper.
        assert.equal(older.length, 0, `${r.id}: there is no material before unit 1`);
        firstFallbacks += 1;
      } else {
        assert.equal(older.length, CHECKPOINT_OLDER, `${r.id}: got ${older.length} older questions`);
      }

      // The recent ones really are from the block, and the older ones really are not.
      const inBlock = (st) => {
        const u = UNITS.find((x) => x.id === st.unitId);
        return (u?.order ?? 0) >= r.from && (u?.order ?? 0) <= r.to;
      };
      for (const st of recent) assert.ok(inBlock(st), `${r.id}: "recent" step ${st.id} is outside units ${r.from}-${r.to}`);
      for (const st of older) assert.ok(!inBlock(st), `${r.id}: "older" step ${st.id} is inside the recent block`);
      for (const st of older) {
        const u = UNITS.find((x) => x.id === st.unitId);
        assert.ok((u?.order ?? 0) < r.from, `${r.id}: "older" step ${st.id} is not earlier material`);
      }

      // Never the same item twice, and never an excluded kind.
      assert.equal(new Set(paper.steps.map((st) => st.id)).size, CHECKPOINT_SIZE, `${r.id} asked an item twice`);
      for (const st of paper.steps) assert.ok(!EXAM_EXCLUDED_KINDS.has(st.kindKey), `${r.id}: ${st.kindKey} is not examinable`);
      checked += 1;
    }
  }
  assert.ok(checked > 100, `sanity: the sweep should cover every checkpoint, saw ${checked}`);
  assert.equal(firstFallbacks, LIVE_LANGS.length, "every language has exactly one first-checkpoint fallback");
});

test("a checkpoint has NO threshold — never passed, never failed, and stores no result", () => {
  const paper = examPaper("cp-ja-u7-u12");
  const perfect = scoreExam(paper, Object.fromEntries(paper.steps.map((st) => [st.id, "easy"])));
  const awful = scoreExam(paper, Object.fromEntries(paper.steps.map((st) => [st.id, "again"])));
  assert.equal(perfect.passed, null, "null, not true: there is no bar to clear");
  assert.equal(awful.passed, null, "null, not false: there is no bar to be under");

  useStore.getState().recordExam("cp-ja-u7-u12", { pct: 100 });
  const rec = useStore.getState().exams["cp-ja-u7-u12"];
  assert.deepEqual(Object.keys(rec), ["lastTaken"], "a checkpoint stores a DATE AND NOTHING ELSE");
  assert.ok(rec.lastTaken > 0);

  // No milestone can come from a checkpoint.
  assert.ok(
    !useStore.getState().milestonesEarned.some((id) => String(id).includes("verified") && String(id).includes("cp")),
    "a checkpoint must not earn a verified milestone"
  );
});

test("a checkpoint's scope is the RECENT block only — no wall of 'not yet tested'", () => {
  const paper = examPaper("cp-ja-u61-u66");
  assert.equal(paper.unitsInScope.length, CHECKPOINT_EVERY);
  const res = scoreExam(paper, Object.fromEntries(paper.steps.map((st) => [st.id, "good"])));
  // A checkpoint that reported the other 200 units as untested would be a wall of
  // text that says nothing.
  assert.ok(res.untested.length <= CHECKPOINT_EVERY, `untested listed ${res.untested.length} units`);
});

test("a checkpoint's paper rotates on retake and resumes mid-run", () => {
  const a = examPaper("cp-ja-u7-u12", { seed: "alex|0" });
  const b = examPaper("cp-ja-u7-u12", { seed: "alex|0" });
  assert.deepEqual(a.steps, b.steps, "a reload mid-checkpoint must resume the same paper");
  const later = examPaper("cp-ja-u7-u12", { seed: "alex|999999" });
  assert.notDeepEqual(a.steps, later.steps, "a retake must be a different look");

  // paperKeyFor seeds a checkpoint off lastTaken (it has no attempts counter).
  assert.deepEqual(
    paperKeyFor({ "cp-ja-u7-u12": { lastTaken: 777 } }, "cp-ja-u7-u12", "alex"),
    { seed: "alex|777", attempt: 0 }
  );
});

test("exactly ONE checkpoint is surfaced, and none before the first block is finished", () => {
  const ranges = checkpointRanges("ja");
  const unitOf = (order) => UNITS.find((u) => u.lang === "ja" && u.order === order);
  const itemsThrough = (order) => {
    const out = {};
    for (const u of UNITS) {
      if (u.lang !== "ja" || (u.order ?? 0) > order) continue;
      for (const l of u.lessons ?? []) for (const d of l.items ?? []) out[d.id] = { id: d.id, rung: 2 };
    }
    return out;
  };

  // Mid-way through the first block: nothing to offer yet, and that is the honest
  // answer — a checkpoint over 3 units is a worse measurement than none.
  assert.equal(nextCheckpointFor("ja", itemsThrough(3)), null);
  assert.equal(furthestUnitOrder(itemsThrough(3), "ja"), 3);

  // First block done -> the first checkpoint, and ONLY it.
  assert.deepEqual(nextCheckpointFor("ja", itemsThrough(6)), ranges[0]);
  // Part-way into the second block -> still the first (the second isn't complete).
  assert.deepEqual(nextCheckpointFor("ja", itemsThrough(9)), ranges[0]);
  // Second block done -> the second.
  assert.deepEqual(nextCheckpointFor("ja", itemsThrough(12)), ranges[1]);
  // No progress at all -> nothing.
  assert.equal(nextCheckpointFor("ja", {}), null);
  assert.ok(unitOf(6), "sanity: ja unit 6 exists");
});

test("a checkpoint credits correct answers and charges nothing for wrong ones", () => {
  // Same contract as a band exam — the asymmetry is in the store writer, not in the
  // paper, so a checkpoint cannot diverge from it.
  const paper = examPaper("cp-ja-u7-u12");
  seedRealProgress(paper);
  const store = useStore.getState();

  const before = structuredClone(useStore.getState().items);
  for (const [i, st] of paper.steps.entries()) store.creditExamAnswer(st.id, i % 2 ? "again" : "good", st.kindKey);
  assertOnlyForward(before, useStore.getState().items, "checkpoint-mixed");

  for (const [i, st] of paper.steps.entries()) {
    if (!(i % 2)) continue;
    assert.equal(
      JSON.stringify(useStore.getState().items[st.id]),
      JSON.stringify(before[st.id]),
      `${st.id} was missed on a checkpoint and still changed`
    );
  }
});

// --- D6: the missed pool, and a result that names where to go back to ---------
// Alex, 2026-09-26: "what happens when they get to the end exam and fail? I think it
// should tell the user to review x section(s) x lesson(s) the ones they did poor in …
// and checkpoints just keep track of missed questions and use them in the end point
// but modified so its the same question everytime have a pool".
//
// Two features, and the second one's load-bearing half is the word MODIFIED: a pooled
// item is re-asked in a card kind it was NOT missed with, so the band exam tests the
// word rather than a memorised prompt.

// Item ids that really are inside a band's corpus, gathered from its own papers — so
// a fabricated pool cannot accidentally test nothing.
function bandItemIds(lang, band, attempts = 8) {
  const ids = new Set();
  for (let a = 0; a < attempts; a++) {
    for (const st of examPaper(examId(lang, band), { seed: "pool-fixture", attempt: a }).steps) ids.add(st.id);
  }
  return [...ids];
}

const poolOf = (lang, ids, kindsFor = () => []) => ({
  [lang]: Object.fromEntries(ids.map((id, i) => [id, { kinds: kindsFor(id), lastMissed: 10_000 + i }])),
});

test("a checkpoint miss lands in the pool; a correct answer removes it", () => {
  const store = useStore.getState();
  store.seedOnce();
  useStore.setState({ missedPool: {} });

  const paper = examPaper("cp-ja-u7-u12");
  const missed = paper.steps.slice(0, 3);
  for (const st of missed) store.recordCheckpointMiss(st.id, st.kindKey, "ja");

  let pool = useStore.getState().missedPool;
  assert.equal(Object.keys(pool.ja).length, 3, "three misses, three pool entries");
  for (const st of missed) {
    assert.deepEqual(pool.ja[st.id].kinds, [st.kindKey], "the pool remembers WHICH card kind it was missed with");
    assert.ok(pool.ja[st.id].lastMissed > 0);
  }
  // The same item missed again with a second kind accumulates both, so a re-ask can
  // avoid every kind it has ever failed on — not just the most recent.
  store.recordCheckpointMiss(missed[0].id, "choice", "ja");
  assert.ok(useStore.getState().missedPool.ja[missed[0].id].kinds.includes("choice"));

  // A CORRECT ANSWER ANYWHERE REMOVES IT. Here: a later exam/checkpoint answer.
  store.creditExamAnswer(missed[0].id, "good", "type:meaning");
  pool = useStore.getState().missedPool;
  assert.ok(!pool.ja[missed[0].id], "a correct exam answer must empty the item out of the pool");
  assert.ok(pool.ja[missed[1].id], "...and must not touch the others");

  // A WRONG answer on a BAND EXAM adds nothing — only a checkpoint fills the pool,
  // and `creditExamAnswer` stays literally empty on a wrong answer (D4).
  const before = JSON.stringify(useStore.getState().missedPool);
  store.creditExamAnswer(missed[1].id, "again", "choice");
  assert.equal(JSON.stringify(useStore.getState().missedPool), before, "a wrong answer wrote to the pool");
});

test("a correct answer in an ORDINARY REVIEW also removes it from the pool", () => {
  // Without this the pool only ever shrinks inside an exam, so a band exam slowly
  // becomes an archive of mistakes the learner has since fixed in normal study.
  const store = useStore.getState();
  store.seedOnce();
  useStore.setState({ missedPool: {} });

  const paper = examPaper("cp-ja-u13-u18");
  const [a, b, c] = paper.steps;
  for (const st of [a, b, c]) store.recordCheckpointMiss(st.id, st.kindKey, "ja");
  // Reviewable, or gradeItem has nothing to grade.
  useStore.setState((s) => ({
    items: {
      ...s.items,
      [a.id]: { ...s.items[a.id], rung: 2 },
      [b.id]: { ...s.items[b.id], rung: 2 },
      [c.id]: { ...s.items[c.id], rung: 2 },
    },
  }));

  store.gradeItem(a.id, "good", a.kindKey);
  assert.ok(!useStore.getState().missedPool.ja[a.id], "an ordinary review pass must clear the pool entry");

  // `hard` is a CORRECT answer everywhere else in this module (isCorrectGrade), so it
  // clears too — deliberately unlike the mistake list, which keeps a `hard` as shaky.
  store.gradeItem(b.id, "hard", b.kindKey);
  assert.ok(!useStore.getState().missedPool.ja[b.id], "`hard` is a correct answer and must clear the pool entry");

  // A MISS IN A REVIEW MUST NOT ADD TO THE POOL — only a checkpoint fills it.
  const before = JSON.stringify(useStore.getState().missedPool);
  store.gradeItem(c.id, "again", c.kindKey);
  assert.equal(JSON.stringify(useStore.getState().missedPool), before, "an ordinary review wrote to the pool");
  assert.ok(useStore.getState().missedPool.ja[c.id], "...and left the existing entry alone");
});

test("a band exam draws from the pool, capped at EXAM_POOL_MAX, and fills the rest fresh", () => {
  const ids = bandItemIds("ja", "A1");
  assert.ok(ids.length > EXAM_POOL_MAX + 4, `sanity: need more than ${EXAM_POOL_MAX} A1 items, got ${ids.length}`);

  // MORE in the pool than a paper may take — the cap has to bite.
  const many = poolOf("ja", ids.slice(0, EXAM_POOL_MAX + 6));
  const paper = examPaper("exam-ja-a1", { seed: "alex", attempt: 0, missedPool: many });
  assert.equal(paper.steps.length, EXAM_SIZE, "a pooled paper is still EXAM_SIZE questions");
  assert.equal(paper.fromPool, EXAM_POOL_MAX, `a band exam must take at most ${EXAM_POOL_MAX} from the pool`);
  assert.equal(paper.steps.filter((st) => st.fromPool).length, EXAM_POOL_MAX);
  assert.equal(
    paper.steps.filter((st) => !st.fromPool).length,
    EXAM_SIZE - EXAM_POOL_MAX,
    "the remainder must be stratified fresh, not more pool"
  );
  // Never the same item twice, pooled or fresh.
  assert.equal(new Set(paper.steps.map((st) => st.id)).size, EXAM_SIZE, "a pooled item was also drawn fresh");

  // FEWER in the pool than the cap — take what there is and fill with fresh.
  const few = poolOf("ja", ids.slice(0, 3));
  const small = examPaper("exam-ja-a1", { seed: "alex", attempt: 0, missedPool: few });
  assert.equal(small.fromPool, 3);
  assert.equal(small.steps.length, EXAM_SIZE);

  // AN EMPTY POOL IS EXACTLY TODAY'S BEHAVIOUR — byte-identical, because the pool
  // draw consumes no randomness when it finds nothing.
  const plain = examPaper("exam-ja-a1", { seed: "alex", attempt: 0 });
  assert.equal(plain.fromPool, 0);
  assert.deepEqual(examPaper("exam-ja-a1", { seed: "alex", attempt: 0, missedPool: {} }).steps, plain.steps);
  assert.deepEqual(examPaper("exam-ja-a1", { seed: "alex", attempt: 0, missedPool: { ja: {} } }).steps, plain.steps);
  // A pool from ANOTHER language cannot reach a Japanese paper.
  assert.deepEqual(
    examPaper("exam-ja-a1", {
      seed: "alex",
      attempt: 0,
      missedPool: poolOf("fr", bandItemIds("fr", "A1").slice(0, 5)),
    }).steps,
    plain.steps
  );

  // A pooled paper is still deterministic — a mid-exam reload resumes it.
  assert.deepEqual(examPaper("exam-ja-a1", { seed: "alex", attempt: 0, missedPool: many }).steps, paper.steps);

  // A CHECKPOINT NEVER DRAWS FROM THE POOL. It is the thing that FILLS it; a
  // checkpoint that re-asked its own misses would stop being a look at the block.
  const cpPlain = examPaper("cp-ja-u7-u12", { seed: "alex" });
  assert.deepEqual(examPaper("cp-ja-u7-u12", { seed: "alex", missedPool: many }).steps, cpPlain.steps);
  assert.ok(!cpPlain.steps.some((st) => st.fromPool));
});

test("A POOLED ITEM IS NEVER RE-ASKED WITH THE KIND IT WAS MISSED WITH", () => {
  // THE LOAD-BEARING ONE. "modified so its the same question everytime" — the whole
  // point of the pool is that it tests the WORD, not a memorised prompt. Measured
  // across every band of every authored language, not asserted on one paper.
  const seed = seedItems();
  let checked = 0;
  let onlyOneKind = 0;
  for (const lang of LIVE_LANGS) {
    for (const band of EXAM_BANDS) {
      if (!bandHasContent(lang, band)) continue;
      // The pool records the kind each item was ASKED in on an earlier paper, which is
      // exactly the real-world shape: it was missed on a checkpoint in that kind.
      const source = examPaper(examId(lang, band), { seed: "missed-with", attempt: 3 });
      const missedPool = {
        [lang]: Object.fromEntries(
          source.steps.map((st, i) => [st.id, { kinds: [st.kindKey], lastMissed: 10_000 + i }])
        ),
      };
      const paper = examPaper(examId(lang, band), { seed: "re-ask", attempt: 0, missedPool });
      for (const st of paper.steps.filter((s) => s.fromPool)) {
        const missedKinds = missedPool[lang][st.id].kinds;
        const eligible = examKindsFor(seed[st.id]).flat();
        if (eligible.length <= 1) {
          // The documented escape hatch: an item with a single eligible exam kind is
          // asked in that kind anyway and still counts — refusing would silently
          // shorten the paper, which is worse than the same card weeks apart.
          onlyOneKind += 1;
          continue;
        }
        assert.ok(
          !missedKinds.includes(st.kindKey),
          `${lang} ${band}: ${st.id} was re-asked with ${st.kindKey}, the very kind it was missed with`
        );
        checked += 1;
      }
    }
  }
  assert.ok(checked > 50, `sanity: the sweep should have re-asked plenty of pooled items, saw ${checked}`);
  // Reported, not asserted to zero — the number is a fact about the corpus and is in
  // the hand-back. It must stay a small minority of pooled re-asks.
  assert.ok(
    onlyOneKind / (checked + onlyOneKind) < 0.2,
    `${onlyOneKind} of ${checked + onlyOneKind} pooled re-asks had only one eligible kind`
  );
});

test("the pool is capped per language and evicts the OLDEST miss first", () => {
  // A long-abandoned mistake must never crowd out a recent one.
  let pool = {};
  const ids = [...Array(MISSED_POOL_CAP + 7)].map((_, i) => `fake-item-${String(i).padStart(3, "0")}`);
  for (const [i, id] of ids.entries()) pool = addMiss(pool, "ja", id, "choice", 1_000 + i);

  assert.equal(Object.keys(pool.ja).length, MISSED_POOL_CAP, `the pool must cap at ${MISSED_POOL_CAP}`);
  for (const gone of ids.slice(0, 7)) assert.ok(!pool.ja[gone], `${gone} was the oldest and should have been evicted`);
  for (const kept of ids.slice(7)) assert.ok(pool.ja[kept], `${kept} is recent and must have survived`);

  // Per LANGUAGE, not global — one language's backlog cannot evict another's.
  pool = addMiss(pool, "fr", "fr-thing", "choice", 1);
  assert.equal(Object.keys(pool.ja).length, MISSED_POOL_CAP);
  assert.equal(Object.keys(pool.fr).length, 1);

  // missedEntries is most-recent-first, and deterministic on a tie.
  const order = missedEntries(pool, "ja");
  assert.equal(order[0].id, ids[ids.length - 1]);
  for (let i = 1; i < order.length; i++) assert.ok(order[i - 1].lastMissed >= order[i].lastMissed);

  // clearMiss sweeps every language (item ids are globally unique) and returns the
  // SAME object when there is nothing to remove, so a caller can skip the write.
  const same = clearMiss(pool, "not-in-the-pool");
  assert.equal(same, pool, "clearMiss must be a no-op by identity when the id is absent");
  assert.ok(!clearMiss(pool, "fr-thing").fr["fr-thing"]);
});

test("the missed pool is never rendered as a score — no pass, no fail, no percentage in it", () => {
  // D6 refines D3; it does not repeal it. A checkpoint still stores NO result, and the
  // pool must not become one by the back door.
  const store = useStore.getState();
  store.seedOnce();
  useStore.setState({ missedPool: {} });

  const paper = examPaper("cp-ja-u19-u24");
  for (const st of paper.steps) store.recordCheckpointMiss(st.id, st.kindKey, "ja");
  store.recordExam("cp-ja-u19-u24", { pct: 12 });

  // The checkpoint's own record: STILL a date and nothing else.
  assert.deepEqual(Object.keys(useStore.getState().exams["cp-ja-u19-u24"]), ["lastTaken"]);

  // The pool holds two fields per item and neither is a measurement of the learner.
  const banned = /(pct|percent|score|passed|failed|fail|total|correct|wrong|streak|xp|grade)/i;
  for (const [id, rec] of Object.entries(useStore.getState().missedPool.ja)) {
    assert.deepEqual(Object.keys(rec).sort(), ["kinds", "lastMissed"], `${id}: the pool grew a field`);
    for (const k of Object.keys(rec)) assert.ok(!banned.test(k), `${id}: "${k}" reads as a score`);
    assert.ok(Array.isArray(rec.kinds));
    assert.equal(typeof rec.lastMissed, "number");
  }
  // And there is no per-language tally either — the pool is a set of items, not a count.
  assert.deepEqual(
    Object.keys(useStore.getState().missedPool).filter((k) => k !== "ja"),
    [],
    "the pool must hold nothing but per-language item maps"
  );

  // Nothing about the pool reaches the SCORE. A paper drawn from it scores exactly as
  // a fresh one would — no bonus, no penalty, no separate number.
  const drawn = examPaper("exam-ja-a1", { seed: "s", attempt: 0, missedPool: useStore.getState().missedPool });
  const perfect = scoreExam(drawn, Object.fromEntries(drawn.steps.map((st) => [st.id, "good"])));
  assert.equal(perfect.pct, 100);
  assert.equal(perfect.passed, true);
  assert.ok(!("fromPool" in perfect), "the score must not report how many came from the pool");

  // THE SCREEN. The only place the pool could leak out as a number is Exam.jsx, which
  // reads it for exactly one thing — building the paper. It must never count it, and
  // the paper's pooled-question tally must never be interpolated into the page.
  const screen = readFileSync(new URL("../../src/screens/Exam.jsx", import.meta.url), "utf8");
  assert.match(screen, /examPaper\(id, \{ \.\.\.key, missedPool \}\)/, "Exam.jsx must read the pool only to build the paper");
  assert.ok(!/missedPool[^\n]*\.length/.test(screen), "Exam.jsx measures the missed pool — a measurement is a score");
  assert.ok(!/Object\.keys\(\s*missedPool/.test(screen), "Exam.jsx counts the missed pool");
  assert.ok(!/\{\s*paper\.fromPool\s*\}/.test(screen), "the page prints how many questions came from the pool");
});

test("a failed exam's breakdown NAMES THE LESSONS to go back to — and a pass gets one too", () => {
  const paper = examPaper("exam-ja-a1");
  const lessonIds = new Set(UNITS.flatMap((u) => (u.lessons ?? []).map((l) => l.id)));

  // Every question carries the lesson it came from, or the result cannot name one.
  for (const st of paper.steps) {
    assert.ok(lessonIds.has(st.lessonId), `${st.id}: step has no real lessonId`);
    assert.ok(st.lessonTitle, `${st.id}: step has no lesson title`);
    assert.ok(Number(st.unitOrder) > 0, `${st.id}: step has no unit order`);
  }

  // A FAIL: 10/20. The breakdown names section AND lesson, in climb order.
  const failed = scoreExam(paper, Object.fromEntries(paper.steps.map((st, i) => [st.id, i < 10 ? "good" : "again"])));
  assert.equal(failed.passed, false);
  assert.ok(failed.shakyAreas.length > 0, "a failed exam must say where to go back to");
  assert.ok(failed.shakyLessonIds.length > 0);
  for (const area of failed.shakyAreas) {
    assert.ok(area.unitTitle, "an area must name its section");
    assert.ok(area.lessons.length > 0, "an area must name at least one lesson");
    for (const l of area.lessons) {
      assert.ok(lessonIds.has(l.id), `${l.id} is not a real lesson id — "Review these lessons" would 404`);
      assert.match(l.label, /^u\d+ l\d+$/, `${l.id}: label "${l.label}" is not the "u7 l2" the learner reads`);
      assert.ok(l.title);
    }
  }
  // Ordered by the climb, so the first tap is the earliest gap.
  const orders = failed.shakyAreas.map((a) => a.unitOrder);
  assert.deepEqual(orders, [...orders].sort((a, b) => a - b));
  // Exactly the lessons the missed items came from, no more.
  const expected = new Set(paper.steps.filter((_st, i) => i >= 10).map((st) => st.lessonId));
  assert.deepEqual(new Set(failed.shakyLessonIds), expected);

  // A PASS STILL GETS A BREAKDOWN. Alex only asked about failing, but a 90% pass with
  // two shaky items should still say which two.
  const passed = scoreExam(paper, Object.fromEntries(paper.steps.map((st, i) => [st.id, i < 18 ? "good" : "again"])));
  assert.equal(passed.passed, true);
  assert.equal(passed.pct, 90);
  assert.ok(passed.shakyAreas.length > 0, "a pass with misses must still name them");
  assert.equal(passed.shakyLessonIds.length, new Set(paper.steps.slice(18).map((st) => st.lessonId)).size);

  // A CLEAN SWEEP has nothing to go back to, and says so by being empty rather than
  // by inventing a lesson.
  const clean = scoreExam(paper, Object.fromEntries(paper.steps.map((st) => [st.id, "good"])));
  assert.deepEqual(clean.shakyAreas, []);
  assert.deepEqual(clean.shakyLessonIds, []);

  // The label helper degrades rather than printing "u0 l0".
  assert.equal(lessonLabel(7, 2), "u7 l2");
  assert.equal(lessonLabel(7, null), "u7");
  assert.equal(lessonLabel(null, null), "");
});
