// Band exams & half-band checks — PURE paper selection, scoring and breakdown.
// No React, no store, no persistence: everything here is derived from the static
// curriculum (UNITS + seedItems) so it is unit-testable with zero UI.
//
// See docs/shipped/BUILD-BRIEF-exams.md. The three decisions that shaped it were
// settled by the main session on 2026-09-24:
//
//   D1  An exam CERTIFIES, it does not GATE. Failing locks nothing; the rung just
//       reads "not yet verified". Nothing in this module may ever lower anything.
//   D2  ADD, don't replace. `level-<band>` keeps meaning "content covered";
//       `level-<band>-verified` is the new, separate, exam-earned signal.
//   D3  80% passes a band exam. A HALF-CHECK HAS NO THRESHOLD AT ALL and stores
//       no result beyond a last-taken date. The percentage is shown only on a
//       pass — when the answer is "keep going" the number adds nothing and it is
//       the part that stings.
//
// The other non-negotiable lives in the runner, not here: an exam runs against a
// throwaway items map with every store writer no-op'd (dev.js buildExamSandbox +
// runnerWriters), so an exam can never write SRS state or a mastery rung. A bad
// day must never rewrite weeks of scheduling. See tests/unit/exams.test.mjs.
//
// An exam is a SELECTION OVER EXISTING ITEMS AND EXISTING CARD KINDS — not new
// content and not a new card kind. Consequence: every band exam for every
// language exists the moment that band's content ships, with nothing to author.

import { UNITS, seedItems } from "../data/index.js";
import { eligibleKinds, produceIsFreePass, meaningIsFreePass } from "./cardRouting.js";

// Climb order. Mirrors levels.js / milestones.js — the same cumulative CEFR rule.
export const CEFR_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3 };
export const EXAM_BANDS = ["A1", "A2", "B1", "B2"];

// D3. 80% of a band exam passes it. A half-check is never compared to this.
export const EXAM_PASS_PCT = 80;

// Paper sizes. Long enough to be a real measurement, short enough to sit down and
// finish in one go without a timer — there is deliberately no clock anywhere in
// this feature (a countdown makes it a test rather than a mirror).
export const EXAM_SIZE = 20;
export const CHECK_SIZE = 10;

// The first language keeps un-suffixed milestone ids, exactly as data/milestones.js
// does for `level-<band>`, so the two families read alike.
const LEGACY_LEVEL_LANG = "ja";

// --- ids ---------------------------------------------------------------------
// `exam-<lang>-<band>`   — "can you actually DO A1?"
// `check-<lang>-<band>.5` — "where am I right now?", halfway to the next band.
//
// The brief wrote these language-free (`exam-a1`). That cannot work in a
// ten-language catalog where a learner climbs several tracks at once, so the
// language is part of the id. Everything else about the two shapes is the brief's.
export const examId = (lang, band) => `exam-${lang}-${String(band).toLowerCase()}`;
export const checkId = (lang, band) => `check-${lang}-${String(band).toLowerCase()}.5`;

const BAND_OF = Object.fromEntries(EXAM_BANDS.map((b) => [b.toLowerCase(), b]));

export function parseExamId(id) {
  const m = /^(exam|check)-([a-z]{2,3})-(a1|a2|b1|b2)(\.5)?$/.exec(String(id ?? ""));
  if (!m) return null;
  const [, prefix, lang, bandKey, half] = m;
  if (prefix === "exam" && half) return null;
  if (prefix === "check" && !half) return null;
  return { id, kind: prefix === "exam" ? "exam" : "check", lang, band: BAND_OF[bandKey] };
}

// The band a half-check reaches INTO. `check-a1.5` is halfway between the A1 and
// A2 rungs, so it samples everything up to A1 plus the first half of A2. There is
// no `b2.5` because there is no band above B2 — which is exactly the three ids the
// brief listed (a1.5, a2.5, b1.5).
export function nextBand(band) {
  const i = EXAM_BANDS.indexOf(band);
  return i >= 0 && i < EXAM_BANDS.length - 1 ? EXAM_BANDS[i + 1] : null;
}

// The milestone a PASSED band exam earns (D2). Never replaces `level-<band>`;
// the two answer different questions — covered vs verified.
export function verifiedMilestoneId(lang, band) {
  return lang === LEGACY_LEVEL_LANG ? `level-${band}-verified` : `level-${band}-verified-${lang}`;
}

// --- the corpus index --------------------------------------------------------
// Every playable item, stamped with the unit and CEFR band it was authored into.
// Built once from the static curriculum; `seedItems()` supplies the FULL item
// (lang/unit/lesson stamps and all), which the card-routing gates need.
let _index = null;
function corpusIndex() {
  if (_index) return _index;
  const seed = seedItems();
  const out = [];
  for (const u of UNITS) {
    for (const l of u.lessons ?? []) {
      if (!Array.isArray(l.items)) continue; // locked scaffold stubs have no items
      for (const def of l.items) {
        const item = seed[def.id];
        if (!item) continue;
        out.push({
          item,
          lang: u.lang,
          unitId: u.id,
          unitTitle: u.title,
          unitOrder: u.order ?? 0,
          lessonId: l.id,
          cefr: l.cefr,
        });
      }
    }
  }
  _index = out;
  return out;
}

// The distinct units a set of pool entries spans, in climb order. This is the
// denominator for "not yet tested" — derived from the paper's OWN pool, never
// from the band, so a half-check is not scored against units it never meant to
// reach into (its pool stops at the midpoint of the next band by design).
function unitsOf(entries) {
  const seen = new Map();
  for (const e of entries) {
    if (!seen.has(e.unitId)) seen.set(e.unitId, { id: e.unitId, title: e.unitTitle, order: e.unitOrder });
  }
  return [...seen.values()].sort((a, b) => a.order - b.order);
}

// True when a band has any authored content in a language — the only gate on an
// exam existing. Nothing about learner progress is consulted: an exam is offered,
// never required, and never blocks (D1).
export function bandHasContent(lang, band) {
  const max = CEFR_ORDER[band] ?? 0;
  return corpusIndex().some((e) => e.lang === lang && (CEFR_ORDER[e.cefr] ?? 99) <= max);
}

// The pool a paper draws from.
//   exam  — everything with lesson.cefr ≤ band (the SAME cumulative rule
//           milestones.js uses for `level-<band>`).
//   check — everything ≤ band, plus the first half of the next band's lessons in
//           climb order. That is literally "half a band further up".
function poolFor({ kind, lang, band }) {
  const max = CEFR_ORDER[band] ?? 0;
  const base = corpusIndex().filter((e) => e.lang === lang && (CEFR_ORDER[e.cefr] ?? 99) <= max);
  if (kind === "exam") return base;

  const nb = nextBand(band);
  if (!nb) return base;
  // Lessons of the next band, in climb order, truncated at the midpoint.
  const upper = corpusIndex().filter((e) => e.lang === lang && e.cefr === nb);
  const lessonOrder = [];
  const seen = new Set();
  for (const e of [...upper].sort((a, b) => a.unitOrder - b.unitOrder)) {
    if (seen.has(e.lessonId)) continue;
    seen.add(e.lessonId);
    lessonOrder.push(e.lessonId);
  }
  const half = new Set(lessonOrder.slice(0, Math.ceil(lessonOrder.length / 2)));
  return [...base, ...upper.filter((e) => half.has(e.lessonId))];
}

// --- deterministic shuffle ---------------------------------------------------
// Papers are deterministic per (learner, exam, attempt) so a reload MID-EXAM
// resumes the same paper. The attempt counter is only bumped when a run FINISHES
// (see useStore.recordExam), which is what makes that true.
function hashStr(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function mulberry32(a) {
  return function rnd() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled(arr, rnd) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// --- card-kind selection -----------------------------------------------------
// "Weight toward recall and production" (the brief): a 4-option `choice` card is
// a weak test of "can you do A1", so it is the last resort rather than the norm.
// Tiers, strongest evidence first:
export const KIND_TIERS = [
  // Production — you make the language, nothing on screen to lean on.
  ["type:produce", "sentence:build", "conjugate"],
  // Recall — you retrieve it, with a frame but no options.
  ["type:meaning", "cloze:choice", "listen:type", "particle:choice", "type:reading", "build"],
  // Recognition — you pick it out of four. Kept, but rare.
  ["listen:choice", "choice:reverse", "choice"],
];
const TIER_WEIGHTS = [0.45, 0.45, 0.1];

// TWO KINDS ARE DELIBERATELY NOT EXAMINABLE, for the same reason: both grade the
// DEVICE as much as the learner, and an exam that marks you down for your
// circumstances is the opposite of a mirror.
//
//   speak — the mic is a fact about the ROOM (and about owning a working mic at
//           all). Review.jsx already reads a run of listening failures as "the
//           learner is somewhere quiet", not "the learner is wrong"; an exam has
//           no equivalent escape hatch, so it must not ask in the first place.
//   trace — stroke-by-stroke handwriting graded on direction, on a phone, with a
//           finger. That is pen control, not knowledge of the character, and an
//           11-stroke kanji costs more time than the other nineteen questions put
//           together. Kana and kanji are still examined — by the ear cards, by
//           `choice` over readings, and (for glyphs) by typing the character from
//           its sound. Nothing about the writing system goes untested; only the
//           motor-skill card does.
export const EXAM_EXCLUDED_KINDS = new Set(["speak", "trace"]);

// Kinds this item can honestly be asked in an exam, per tier.
export function examKindsFor(item) {
  const can = new Set(eligibleKinds(item));
  for (const k of EXAM_EXCLUDED_KINDS) can.delete(k);
  // A typed card whose PROMPT GRADES AS THE ANSWER tests nothing (cardRouting's
  // free-pass guard). In a review that is a wasted rep; in an exam it is a free
  // mark, which is worse — it inflates the one number the learner is trusting.
  if (produceIsFreePass(item)) can.delete("type:produce");
  if (meaningIsFreePass(item)) can.delete("type:meaning");
  return KIND_TIERS.map((tier) => tier.filter((k) => can.has(k)));
}

// Kinds are named as mastery names them; the runner speaks { kind, mode }.
function asStep(kind) {
  if (kind === "type:meaning") return { kind: "type", mode: "meaning" };
  if (kind === "type:reading") return { kind: "type", mode: "reading" };
  if (kind === "type:produce") return { kind: "type", mode: "produce" };
  return { kind };
}

function pickKind(item, rnd) {
  const tiers = examKindsFor(item);
  if (!tiers.some((t) => t.length)) return null;
  // Draw a tier by weight, then fall to the nearest non-empty one so an item that
  // cannot be produced still gets asked its best available question.
  const roll = rnd();
  let acc = 0;
  let want = TIER_WEIGHTS.length - 1;
  for (let i = 0; i < TIER_WEIGHTS.length; i++) {
    acc += TIER_WEIGHTS[i];
    if (roll < acc) { want = i; break; }
  }
  const order = [want, ...tiers.map((_, i) => i).filter((i) => i !== want)];
  for (const i of order) {
    const tier = tiers[i];
    if (tier.length) return tier[Math.floor(rnd() * tier.length)];
  }
  return null;
}

// --- the paper ---------------------------------------------------------------
// Stratified so EVERY unit in the band gets a turn before any unit gets a second
// question: a random draw over a whole band happily tests one lesson six times.
// Where a band has more units than the paper has questions (ja B2 has well over a
// hundred), a seeded starting offset rotates WHICH units a retake covers, so
// taking it again is a different look at the same capability — not the same paper.
export function examPaper(id, { seed = "", attempt = 0 } = {}) {
  const meta = parseExamId(id);
  if (!meta) return null;
  const pool = poolFor(meta);
  if (!pool.length) return null;

  const rnd = mulberry32(hashStr(`${id}|${seed}|${attempt}`));
  const size = meta.kind === "exam" ? EXAM_SIZE : CHECK_SIZE;

  // Group by unit, in climb order.
  const unitIds = [];
  const byUnit = new Map();
  for (const e of [...pool].sort((a, b) => a.unitOrder - b.unitOrder)) {
    if (!byUnit.has(e.unitId)) { byUnit.set(e.unitId, []); unitIds.push(e.unitId); }
    byUnit.get(e.unitId).push(e);
  }
  for (const uid of unitIds) byUnit.set(uid, shuffled(byUnit.get(uid), rnd));

  const start = Math.floor(rnd() * unitIds.length);
  const cursor = new Map(unitIds.map((u) => [u, 0]));
  const steps = [];
  for (let round = 0; steps.length < size && round < size + 2; round++) {
    let consumed = false;
    for (let k = 0; k < unitIds.length && steps.length < size; k++) {
      const uid = unitIds[(start + k) % unitIds.length];
      const bucket = byUnit.get(uid);
      const c = cursor.get(uid);
      if (c >= bucket.length) continue;
      cursor.set(uid, c + 1);
      consumed = true;
      const entry = bucket[c];
      const kind = pickKind(entry.item, rnd);
      if (!kind) continue; // nothing honest to ask about this item — skip it
      steps.push({ ...asStep(kind), kindKey: kind, id: entry.item.id, unitId: uid, unitTitle: entry.unitTitle });
    }
    if (!consumed) break;
  }

  return {
    id,
    kind: meta.kind,
    lang: meta.lang,
    band: meta.band,
    steps,
    unitsInScope: unitsOf(pool),
  };
}

// --- scoring -----------------------------------------------------------------
// A grade of `again` is the only wrong answer (grading.js: wrong → "again";
// hard/good/easy are all correct answers, differing only in fluency).
export const isCorrectGrade = (grade) => grade != null && grade !== "again";

// The result the screen renders. NOT a big percentage: a capability breakdown.
// `pct` is always computed — the SCREEN decides whether to show it, and per D3 it
// shows it only on a pass.
export function scoreExam(paper, gradesById = {}) {
  const steps = paper?.steps ?? [];
  const total = steps.length;
  const ok = (s) => isCorrectGrade(gradesById[s.id]);
  const correct = steps.filter(ok).length;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  const perUnit = new Map();
  for (const s of steps) {
    const u = perUnit.get(s.unitId) ?? { id: s.unitId, title: s.unitTitle, total: 0, correct: 0 };
    u.total += 1;
    if (ok(s)) u.correct += 1;
    perUnit.set(s.unitId, u);
  }

  const solid = [];
  const shaky = [];
  for (const u of perUnit.values()) (u.correct === u.total ? solid : shaky).push(u.title);
  const untested = (paper?.unitsInScope ?? []).filter((u) => !perUnit.has(u.id)).map((u) => u.title);

  return {
    id: paper?.id ?? null,
    kind: paper?.kind ?? "exam",
    lang: paper?.lang ?? null,
    band: paper?.band ?? null,
    total,
    correct,
    pct,
    // A half-check has NO threshold whatsoever (D3), so it is never passed and
    // never failed — `passed` is null for it, not false.
    passed: paper?.kind === "exam" ? pct >= EXAM_PASS_PCT : null,
    solid,
    shaky,
    untested,
    // The ids behind "shaky on" — what the "Practice the shaky ones" button seeds.
    shakyIds: steps.filter((s) => !ok(s)).map((s) => s.id),
  };
}

// --- persisted-state readers -------------------------------------------------
// The store slice is `exams: { [id]: { bestPct, lastTaken, attempts } }` for a
// band exam and `{ lastTaken }` for a half-check — a check stores NO RESULT, per
// D3, which is also why its paper is seeded off `lastTaken` rather than a count.

export function isVerified(exams, lang, band) {
  const rec = exams?.[examId(lang, band)];
  return (rec?.bestPct ?? -1) >= EXAM_PASS_PCT;
}

// The seed + attempt a runner should build this paper with, so a mid-exam reload
// resumes the SAME paper: both terms only change when a run has finished.
export function paperKeyFor(exams, id, learnerSeed = "") {
  const meta = parseExamId(id);
  const rec = exams?.[id];
  if (meta?.kind === "check") return { seed: `${learnerSeed}|${rec?.lastTaken ?? 0}`, attempt: 0 };
  return { seed: learnerSeed, attempt: rec?.attempts ?? 0 };
}
