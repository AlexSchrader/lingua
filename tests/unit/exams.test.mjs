import test from "node:test";
import assert from "node:assert/strict";
import {
  EXAM_BANDS,
  EXAM_PASS_PCT,
  EXAM_SIZE,
  CHECK_SIZE,
  EXAM_EXCLUDED_KINDS,
  KIND_TIERS,
  examId,
  checkId,
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
import { buildExamSandbox, runnerWriters, NOOP } from "../../src/store/dev.js";
import { LIVE_CARD_KINDS } from "../../src/data/contract.js";
import { seedItems, UNITS } from "../../src/data/index.js";
import { produceIsFreePass, meaningIsFreePass } from "../../src/store/cardRouting.js";
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

// THE MOST IMPORTANT TEST IN THIS FEATURE. An exam answer must never reach FSRS
// or a mastery rung: one bad day would otherwise rewrite weeks of scheduling and
// push a pile of items back down the rungs. This drives a FULL paper through the
// same writers Exam.jsx uses and asserts the real items map is byte-identical.
test("a full exam run leaves the real items map byte-identical", () => {
  const store = useStore.getState();
  store.seedOnce();

  // Non-trivial real state first, so there is something to protect.
  const paper = examPaper("exam-ja-a1");
  store.graduateItem(paper.steps[0].id, "good");
  store.gradeItem(paper.steps[0].id, "good", "choice");
  store.graduateItem(paper.steps[1].id, "good");

  const snapItems = () => JSON.stringify(useStore.getState().items);
  const snapMistakes = () => JSON.stringify(useStore.getState().mistakes);
  const beforeItems = snapItems();
  const beforeMistakes = snapMistakes();

  // Exactly Exam.jsx's wiring: a throwaway deck + every store writer no-op'd.
  const sandbox = buildExamSandbox();
  const writers = runnerWriters(true, {
    gradeItem: useStore.getState().gradeItem,
    completeReviews: useStore.getState().completeReviews,
    rollDailyGoal: useStore.getState().rollDailyGoal,
  });
  assert.equal(writers.gradeItem, NOOP, "the exam runner's grade writer must be a no-op");

  const grades = {};
  for (const step of paper.steps) {
    assert.ok(sandbox[step.id], `${step.id} must exist in the exam deck`);
    // Answer everything WRONG — the worst possible day, which is precisely the
    // run that must not be allowed to cost anything.
    writers.gradeItem(step.id, "again", step.kindKey);
    grades[step.id] = "again";
  }
  const result = scoreExam(paper, grades);
  assert.equal(result.pct, 0);
  assert.equal(result.passed, false);

  assert.equal(snapItems(), beforeItems, "an exam run wrote to the real items map");
  assert.equal(snapMistakes(), beforeMistakes, "an exam run wrote to the mistake list");
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
  // An item that is genuinely still at rung 0 (earlier tests in this file share
  // the module-level store, so pick it from live state rather than by position).
  const live = useStore.getState().items;
  const untaught = paper.steps.find((s) => (live[s.id]?.rung ?? 0) < 1)?.id;
  assert.ok(untaught, "sanity: the paper still holds an untaught item");

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
