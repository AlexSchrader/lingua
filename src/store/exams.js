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
// D4 (Alex, 2026-09-25) SUPERSEDES the brief's "an exam must never write SRS
//     state or mastery rungs": *"the exams should be helping the user build"*.
//     Correctly retrieving twenty words IS one of the strongest learning mechanisms
//     there is, and throwing all of it away to stay safe was the wrong trade. The
//     write is now ASYMMETRIC, not absent:
//
//       correct (hard/good/easy) -> credits the item as an ordinary correct review
//       wrong   (again)          -> writes NOTHING. No rung drop, no interval
//                                   reset, no lapse, no mistake-log penalty.
//
//     The brief's real invariant is preserved and is now stated positively: AN
//     EXAM CAN ONLY EVER MOVE AN ITEM FORWARD. It is achieved by writing only
//     upward (EXAM_CREDIT_GRADE + forwardOnlySrs below, store.creditExamAnswer),
//     rather than by writing nothing at all. A bad day still costs exactly zero.
//     See tests/unit/exams.test.mjs for the three tests that pin it.
//
// D6 (Alex, 2026-09-26) REFINES D3's "a checkpoint stores no result": *"checkpoints
//     just keep track of missed questions and use them in the end point but modified
//     so its the same question everytime have a pool"*.
//
//     A checkpoint now records WHICH ITEMS were missed (and with which card kind)
//     into a per-language MISSED POOL, and a band exam draws up to EXAM_POOL_MAX of
//     its EXAM_SIZE questions from that pool.
//
//     THIS IS STILL NOT "COUNTING IT AGAINST YOU" (Alex's original rule for a
//     checkpoint, which stands):
//       * nothing is penalised — no rung drop, no interval reset, no lapse;
//       * no pass, no fail, no percentage, no threshold is stored or shown;
//       * the pool is never rendered as a score, a count, or a list of failures.
//     It changes only WHAT GETS ASKED LATER, which is the mechanism the app is
//     supposed to run on. The asymmetric write (D4) is untouched.
//
//     And the pooled question is DELIBERATELY NOT THE SAME QUESTION: a pooled item
//     is re-asked in a card kind it was NOT missed with, so the band exam tests the
//     word rather than a memorised prompt. See `pickKind`'s `avoid` argument.
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

// LEGACY. The three half-band checks (`check-<lang>-a1.5` etc.) are RETIRED as of
// 2026-09-25 — two different flavours of "this doesn't count" was confusing, and
// three touchpoints across 126 units meant a learner could climb ~30 units without
// knowing where they stood. Checkpoints (below) replace them. Nothing GENERATES a
// half-check id any more; `parseExamId` still reads one, and a paper still builds
// for one, purely so a persisted record or an old bookmark cannot crash.
export const CHECK_SIZE = 10;

// --- checkpoints -------------------------------------------------------------
// A checkpoint every CHECKPOINT_EVERY units: ~21 per Latin language, ~34 for ja,
// roughly two minutes each. Same contract as the half-check it replaces — no pass,
// no fail, no threshold, no stored result beyond a last-taken date.
//
// TUNABLE IN ONE LINE (CLAUDE.md: "tuning is constants, not structure"). Cadence
// and length are these three numbers and nothing else reads a literal.
export const CHECKPOINT_EVERY = 6;
export const CHECKPOINT_SIZE = 8;

// THE COMPOSITION IS THE POINT. Two of the eight come from EARLIER material, which
// is the whole reason a checkpoint exists: without them it only measures what was
// just crammed. The very first checkpoint has no earlier material to draw on and
// falls back to CHECKPOINT_SIZE recent questions — the paper reports which it got
// (`olderWanted` / `olderActual`), so the split is measured, never assumed.
export const CHECKPOINT_OLDER = 2;

// --- the missed pool (D6) ----------------------------------------------------
// How many of a band exam's EXAM_SIZE questions may come from the missed pool. The
// rest are stratified fresh exactly as before, so a band exam is still a measurement
// of the BAND and not an archive of old mistakes: 8 of 20 is under half, and if the
// pool is empty the paper is byte-identical to today's.
export const EXAM_POOL_MAX = 8;

// How many missed items a language's pool may hold. Above this the OLDEST miss is
// evicted, so a mistake from three months ago can never crowd out this week's.
//
// 60 was chosen against the two numbers that bound it: a checkpoint can add at most
// CHECKPOINT_SIZE (8) misses, so the cap holds ~7 catastrophic checkpoints' worth —
// far more than a learner will ever have outstanding, because every correct answer
// anywhere removes an item. And it is comfortably above EXAM_POOL_MAX (8), so the
// pool is never the binding constraint on a paper. Same order of magnitude as
// MISTAKES_CAP (30) in useStore.js, which caps the analogous "fix these" list.
export const MISSED_POOL_CAP = 60;

// The grade a CORRECT exam answer is credited as — always `good`, never `easy`,
// whichever button was pressed. An exam is not the place to earn a long interval,
// and a lucky guess must not push an item weeks out.
export const EXAM_CREDIT_GRADE = "good";

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
// LEGACY — retired 2026-09-25. Kept so `parseExamId` still has something to
// round-trip against in the tests; nothing in the app calls it any more.
export const checkId = (lang, band) => `check-${lang}-${String(band).toLowerCase()}.5`;

// `cp-<lang>-u<from>-u<to>` — "the checkpoint over units 7 to 12". Unit ORDER, not
// unit id, because the range is what the learner is being asked about and the order
// is what the Ladder spine already counts in.
export const checkpointId = (lang, from, to) => `cp-${lang}-u${from}-u${to}`;

const BAND_OF = Object.fromEntries(EXAM_BANDS.map((b) => [b.toLowerCase(), b]));

export function parseExamId(id) {
  const raw = String(id ?? "");
  const cp = /^cp-([a-z]{2,3})-u(\d{1,4})-u(\d{1,4})$/.exec(raw);
  if (cp) {
    const [, lang, from, to] = cp;
    const f = Number(from);
    const t = Number(to);
    if (!(t >= f)) return null;
    // A checkpoint's band is a property of the CORPUS, not of the id, so it is
    // filled in by examPaper rather than guessed here — this stays pure.
    return { id: raw, kind: "checkpoint", lang, band: null, from: f, to: t };
  }
  const m = /^(exam|check)-([a-z]{2,3})-(a1|a2|b1|b2)(\.5)?$/.exec(raw);
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
          // Named so a result screen can say WHICH LESSON to go back to, not just
          // which unit (D6 / Alex 2026-09-26: "review x section(s) x lesson(s)").
          lessonTitle: l.title ?? l.id,
          lessonNo: typeof l.lesson === "number" ? l.lesson : null,
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

// --- checkpoint corpus -------------------------------------------------------
// The two pools a checkpoint draws from, and they are deliberately separate:
//   recent — units [from..to], the block just finished;
//   older  — EVERYTHING before `from`, which is what makes this a memory check
//            rather than a check on what was just crammed.
function checkpointPools({ lang, from, to }) {
  const all = corpusIndex().filter((e) => e.lang === lang);
  return {
    recent: all.filter((e) => e.unitOrder >= from && e.unitOrder <= to),
    older: all.filter((e) => e.unitOrder < from),
  };
}

// Every checkpoint a language has, in climb order. Only COMPLETE blocks of
// CHECKPOINT_EVERY get one: a trailing part-block (ja has 208 units, so four are
// left over) is covered by its band exam, and a 2-unit "checkpoint" would be a
// worse measurement than none. Derived from the corpus, so a seventh language and
// a new unit both get their checkpoints with nothing to author.
export function checkpointRanges(lang) {
  const orders = [...new Set(corpusIndex().filter((e) => e.lang === lang).map((e) => e.unitOrder))].sort(
    (a, b) => a - b
  );
  const out = [];
  for (let i = 0; i + CHECKPOINT_EVERY <= orders.length; i += CHECKPOINT_EVERY) {
    const from = orders[i];
    const to = orders[i + CHECKPOINT_EVERY - 1];
    out.push({ id: checkpointId(lang, from, to), from, to });
  }
  return out;
}

// The furthest unit this learner has actually reached in a language: the highest
// unit order holding an item they have been taught (rung >= 1).
export function furthestUnitOrder(items, lang) {
  let far = 0;
  for (const e of corpusIndex()) {
    if (e.lang !== lang) continue;
    if (e.unitOrder <= far) continue;
    if ((items?.[e.item.id]?.rung ?? 0) >= 1) far = e.unitOrder;
  }
  return far;
}

// THE ONE CHECKPOINT TO SURFACE. Twenty-one affordances on the Ladder is noise, so
// the screen shows exactly one: the most recent COMPLETED block, which is the one
// the learner is due for. Null until the first block is finished.
export function nextCheckpointFor(lang, items = {}) {
  const reached = furthestUnitOrder(items, lang);
  let out = null;
  for (const r of checkpointRanges(lang)) if (r.to <= reached) out = r;
  return out;
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

// `avoid` is the D6 rule, and it is the whole point of the missed pool: a pooled item
// must be re-asked in a card kind it was NOT missed with, or the band exam is testing
// a memorised prompt rather than the word. When avoiding leaves NOTHING askable (an
// item with a single eligible kind — a kana with only `choice`, say) the kind is used
// anyway and the question still counts: refusing to ask would silently shrink the
// paper, which is worse than asking the same way twice weeks apart.
function pickKind(item, rnd, avoid = null) {
  let tiers = examKindsFor(item);
  if (avoid?.size) {
    const trimmed = tiers.map((t) => t.filter((k) => !avoid.has(k)));
    if (trimmed.some((t) => t.length)) tiers = trimmed;
  }
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

// One paper question. The lesson stamps ride along because the RESULT has to be able
// to say "go back to u7 l2", which needs the lesson the item was authored into — the
// unit title alone names a section a learner cannot navigate to (D6).
function stepFor(entry, kind, era = null, fromPool = false) {
  const step = {
    ...asStep(kind),
    kindKey: kind,
    id: entry.item.id,
    unitId: entry.unitId,
    unitTitle: entry.unitTitle,
    unitOrder: entry.unitOrder,
    lessonId: entry.lessonId,
    lessonTitle: entry.lessonTitle,
    lessonNo: entry.lessonNo,
  };
  if (era) step.era = era;
  // Marked, never SHOWN: the learner is not told "this one is from your mistakes".
  // Used by the tests and by nothing on screen.
  if (fromPool) step.fromPool = true;
  return step;
}

// "u7 l2" — how a lesson is named to the learner on a result screen. Unit ORDER and
// lesson NUMBER, because those are what the Ladder prints; the lesson id is the
// navigation target and is never shown.
export function lessonLabel(unitOrder, lessonNo) {
  const u = Number(unitOrder) > 0 ? `u${unitOrder}` : null;
  const l = Number(lessonNo) > 0 ? `l${lessonNo}` : null;
  return [u, l].filter(Boolean).join(" ");
}

// --- the missed pool, as pure functions (D6) ---------------------------------
// Shape: { [lang]: { [itemId]: { kinds: string[], lastMissed: number } } }
//   kinds      — every card kind this item has been missed with, so a re-ask can
//                avoid all of them rather than just the most recent one.
//   lastMissed — the eviction key, and the draw order. Never displayed.
// There is NO count, NO score and NO percentage in here, by design (D6).

// Record a miss. Additive and idempotent per (item, kind).
export function addMiss(pool, lang, id, kind = null, at = Date.now()) {
  if (!lang || !id) return pool ?? {};
  const base = pool ?? {};
  const forLang = { ...(base[lang] ?? {}) };
  const prev = forLang[id];
  const kinds = kind ? [...new Set([...(prev?.kinds ?? []), kind])] : (prev?.kinds ?? []);
  forLang[id] = { kinds, lastMissed: at };

  // Cap per language, oldest-missed evicted first — a long-abandoned mistake must
  // never crowd out a recent one.
  const ids = Object.keys(forLang);
  if (ids.length > MISSED_POOL_CAP) {
    const byAge = ids.sort(
      (a, b) => (forLang[a].lastMissed ?? 0) - (forLang[b].lastMissed ?? 0) || (a < b ? -1 : 1)
    );
    for (const dead of byAge.slice(0, ids.length - MISSED_POOL_CAP)) delete forLang[dead];
  }
  return { ...base, [lang]: forLang };
}

// An item LEAVES the pool the moment it is answered correctly ANYWHERE — a later
// checkpoint, a band exam, or an ordinary review. Item ids are globally unique, so
// this sweeps every language rather than needing to be told which one; that also
// means it cannot miss because a caller didn't know the item's language.
// Returns the SAME object when there is nothing to remove, so callers can skip the
// store write entirely.
export function clearMiss(pool, id) {
  if (!pool || !id) return pool ?? {};
  let changed = false;
  const out = {};
  for (const [lang, forLang] of Object.entries(pool)) {
    if (forLang && Object.prototype.hasOwnProperty.call(forLang, id)) {
      const copy = { ...forLang };
      delete copy[id];
      out[lang] = copy;
      changed = true;
    } else {
      out[lang] = forLang;
    }
  }
  return changed ? out : pool;
}

// The pool for one language, MOST RECENTLY MISSED FIRST — this week's mistake is
// worth more than last month's. Deterministic (id break on a tie) so a paper built
// from it is reproducible.
export function missedEntries(pool, lang) {
  const forLang = pool?.[lang] ?? {};
  return Object.entries(forLang)
    .map(([id, rec]) => ({ id, kinds: rec?.kinds ?? [], lastMissed: Number(rec?.lastMissed) || 0 }))
    .sort((a, b) => b.lastMissed - a.lastMissed || (a.id < b.id ? -1 : 1));
}

// --- the paper ---------------------------------------------------------------
// Stratified so EVERY unit in the band gets a turn before any unit gets a second
// question: a random draw over a whole band happily tests one lesson six times.
// Where a band has more units than the paper has questions (ja B2 has well over a
// hundred), a seeded starting offset rotates WHICH units a retake covers, so
// taking it again is a different look at the same capability — not the same paper.
function drawStratified(pool, size, rnd, era = null, exclude = null) {
  const steps = [];
  if (size <= 0 || !pool.length) return steps;

  // Group by unit, in climb order.
  const unitIds = [];
  const byUnit = new Map();
  for (const e of [...pool].sort((a, b) => a.unitOrder - b.unitOrder)) {
    if (exclude?.has(e.item.id)) continue;
    if (!byUnit.has(e.unitId)) { byUnit.set(e.unitId, []); unitIds.push(e.unitId); }
    byUnit.get(e.unitId).push(e);
  }
  if (!unitIds.length) return steps;
  for (const uid of unitIds) byUnit.set(uid, shuffled(byUnit.get(uid), rnd));

  const start = Math.floor(rnd() * unitIds.length);
  const cursor = new Map(unitIds.map((u) => [u, 0]));
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
      steps.push(stepFor(entry, kind, era));
    }
    if (!consumed) break;
  }
  return steps;
}

// The highest CEFR band a set of pool entries reaches. A checkpoint's band is a
// label, not a scope — it is what the screen prints, never what it draws from.
function bandOfEntries(entries) {
  let best = null;
  for (const e of entries) {
    const o = CEFR_ORDER[e.cefr];
    if (o == null) continue;
    if (best == null || o > CEFR_ORDER[best]) best = e.cefr;
  }
  return best;
}

// A CHECKPOINT PAPER. CHECKPOINT_SIZE questions: (SIZE - OLDER) from the block just
// finished plus OLDER from anywhere earlier. The older ones are the point — see
// CHECKPOINT_OLDER. When there is no earlier material (the very first checkpoint)
// the recent half tops up to the full size, and `olderActual` says so.
function checkpointPaper(meta, rnd) {
  const { recent, older } = checkpointPools(meta);
  if (!recent.length) return null;

  const wantOlder = Math.min(CHECKPOINT_OLDER, CHECKPOINT_SIZE);
  const recentSteps = drawStratified(recent, CHECKPOINT_SIZE - wantOlder, rnd, "recent");
  const used = new Set(recentSteps.map((st) => st.id));
  const olderSteps = drawStratified(older, wantOlder, rnd, "older", used);
  for (const st of olderSteps) used.add(st.id);

  let steps = [...recentSteps, ...olderSteps];
  if (steps.length < CHECKPOINT_SIZE) {
    steps = [...steps, ...drawStratified(recent, CHECKPOINT_SIZE - steps.length, rnd, "recent", used)];
  }
  // Interleaved, so the two memory questions aren't predictably last.
  steps = shuffled(steps, rnd);

  return {
    id: meta.id,
    kind: "checkpoint",
    lang: meta.lang,
    band: bandOfEntries(recent),
    from: meta.from,
    to: meta.to,
    steps,
    // Measured against the RECENT block only. A checkpoint is not claiming to have
    // tested the other hundred units, so listing them as "not yet tested" would be
    // a wall of text that says nothing.
    unitsInScope: unitsOf(recent),
    olderWanted: wantOlder,
    olderActual: steps.filter((st) => st.era === "older").length,
  };
}

// D6. Up to EXAM_POOL_MAX questions drawn from the language's missed pool, each in a
// card kind it was NOT missed with. Scoped to the exam's own corpus, so a B1 mistake
// can never appear on the A1 paper.
//
// CONSUMES NO RANDOMNESS WHEN THE POOL IS EMPTY — that is deliberate and load-bearing:
// it is what makes "if the pool is empty the paper is exactly today's behaviour" a
// byte-identical guarantee rather than a hand-wave.
function drawFromMissed(pool, missedPool, lang, rnd, max) {
  if (max <= 0 || !missedPool) return [];
  const byId = new Map(pool.map((e) => [e.item.id, e]));
  const entries = missedEntries(missedPool, lang).filter((m) => byId.has(m.id));
  if (!entries.length) return [];

  const steps = [];
  for (const m of entries) {
    if (steps.length >= max) break;
    const entry = byId.get(m.id);
    const kind = pickKind(entry.item, rnd, new Set(m.kinds));
    if (!kind) continue; // nothing honest to ask about this item at all
    steps.push(stepFor(entry, kind, null, true));
  }
  return steps;
}

export function examPaper(id, { seed = "", attempt = 0, missedPool = null } = {}) {
  const meta = parseExamId(id);
  if (!meta) return null;
  const rnd = mulberry32(hashStr(`${id}|${seed}|${attempt}`));

  if (meta.kind === "checkpoint") return checkpointPaper(meta, rnd);

  const pool = poolFor(meta);
  if (!pool.length) return null;
  const size = meta.kind === "exam" ? EXAM_SIZE : CHECK_SIZE;

  // Only a BAND EXAM draws from the pool. A checkpoint is the thing that FILLS it,
  // and a legacy half-check is a frozen shape nothing generates any more.
  const pooled = meta.kind === "exam" ? drawFromMissed(pool, missedPool, meta.lang, rnd, EXAM_POOL_MAX) : [];
  const used = new Set(pooled.map((st) => st.id));
  const fresh = drawStratified(pool, size - pooled.length, rnd, null, used.size ? used : null);

  // Interleaved only when there is something to interleave, so the empty-pool paper
  // is unchanged. A learner must not be able to read "these first eight are the ones
  // I got wrong last time" off the running order.
  const steps = pooled.length ? shuffled([...pooled, ...fresh], rnd) : fresh;

  return {
    id,
    kind: meta.kind,
    lang: meta.lang,
    band: meta.band,
    steps,
    unitsInScope: unitsOf(pool),
    // Measured, never assumed — and never shown to the learner.
    fromPool: pooled.length,
  };
}

// --- scoring -----------------------------------------------------------------
// A grade of `again` is the only wrong answer (grading.js: wrong → "again";
// hard/good/easy are all correct answers, differing only in fluency).
export const isCorrectGrade = (grade) => grade != null && grade !== "again";

// --- the asymmetric write (D4) -----------------------------------------------
// The whole rule, in two pure functions the store composes. Keeping it here rather
// than inside useStore means the invariant is unit-testable without a store.

// What an exam answer is worth. `null` means WRITE NOTHING — the branch that makes
// a wrong exam answer free. A correct one is always EXAM_CREDIT_GRADE (`good`),
// never `easy`, whichever button the learner actually pressed.
export function examCreditGrade(grade) {
  return isCorrectGrade(grade) ? EXAM_CREDIT_GRADE : null;
}

// THE MONOTONIC CLAMP. FSRS is not monotonic on an EARLY review: answering a card
// that is due in 60 days correctly today can return an interval of 40, which would
// pull `due` forward and cost the learner scheduling they had already earned. That
// is exactly the "an exam lowered something" failure, arriving through a correct
// answer rather than a wrong one. So every field that can regress is clamped to the
// better of the two, and `due` — the field that decides when the card comes back —
// keeps the LATER date.
//
// `due` may be a Date (fresh) or an ISO string (rehydrated from localStorage);
// keeping `prev.due` by reference preserves whichever it was.
export function forwardOnlySrs(prev, next) {
  if (!prev || !next) return next ?? prev ?? null;
  const out = { ...next };
  const pd = new Date(prev.due).getTime();
  const nd = new Date(next.due).getTime();
  if (Number.isFinite(pd) && Number.isFinite(nd) && nd < pd) out.due = prev.due;
  // Higher stability is better; lower difficulty is better.
  if (Number(next.stability ?? 0) < Number(prev.stability ?? 0)) out.stability = prev.stability;
  if (Number(next.difficulty ?? 0) > Number(prev.difficulty ?? 0)) out.difficulty = prev.difficulty;
  // A lapse is a mark against the item, and an exam may never add one.
  if (Number(next.lapses ?? 0) > Number(prev.lapses ?? 0)) out.lapses = prev.lapses ?? 0;
  // Counters only ever climb.
  if (Number(next.reps ?? 0) < Number(prev.reps ?? 0)) out.reps = prev.reps ?? 0;
  return out;
}

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

  // --- WHERE TO GO BACK TO (D6 / Alex 2026-09-26) ---------------------------
  // "it should tell the user to review x section(s) x lesson(s) the ones they did
  // poor in". A unit title alone is not actionable — there is nothing to tap. So the
  // misses are grouped section -> lesson(s), in climb order, carrying the lesson id
  // the Ladder routes on (`/lesson/<id>`).
  //
  // COMPUTED ON A PASS TOO. Alex only asked about failing, but a 90% pass with two
  // shaky items should still say which two; the SCREEN decides how loudly to say it.
  const areaByUnit = new Map();
  for (const s of steps) {
    if (ok(s) || !s.lessonId) continue;
    const a =
      areaByUnit.get(s.unitId) ??
      { unitId: s.unitId, unitTitle: s.unitTitle, unitOrder: s.unitOrder ?? 0, lessons: [], _seen: new Set() };
    if (!a._seen.has(s.lessonId)) {
      a._seen.add(s.lessonId);
      a.lessons.push({
        id: s.lessonId,
        title: s.lessonTitle ?? s.lessonId,
        no: s.lessonNo ?? null,
        label: lessonLabel(s.unitOrder, s.lessonNo) || s.lessonId,
      });
    }
    areaByUnit.set(s.unitId, a);
  }
  const shakyAreas = [...areaByUnit.values()]
    .sort((a, b) => a.unitOrder - b.unitOrder)
    .map(({ _seen, ...a }) => ({ ...a, lessons: a.lessons.sort((x, y) => (x.no ?? 0) - (y.no ?? 0)) }));
  // Flat, in the same order — what "Review these lessons" walks.
  const shakyLessonIds = shakyAreas.flatMap((a) => a.lessons.map((l) => l.id));

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
    // The ids behind "shaky on" — what the "Practice the words" button seeds.
    shakyIds: steps.filter((s) => !ok(s)).map((s) => s.id),
    // Section -> lesson(s) to go back to, and the flat lesson-id list behind
    // "Review these lessons". Present on a pass as well as a fail.
    shakyAreas,
    shakyLessonIds,
    // The card kind each miss was asked in, so a checkpoint can record it into the
    // missed pool and a later band exam can avoid re-asking that exact question.
    missedKinds: Object.fromEntries(steps.filter((s) => !ok(s)).map((s) => [s.id, s.kindKey])),
  };
}

// --- persisted-state readers -------------------------------------------------
// The store slice is `exams: { [id]: { bestPct, lastTaken, attempts } }` for a
// band exam and `{ lastTaken }` for a checkpoint (and for a legacy half-check) —
// neither stores a RESULT, per D3, which is also why their papers are seeded off
// `lastTaken` rather than off a count.

export function isVerified(exams, lang, band) {
  const rec = exams?.[examId(lang, band)];
  return (rec?.bestPct ?? -1) >= EXAM_PASS_PCT;
}

// The seed + attempt a runner should build this paper with, so a mid-exam reload
// resumes the SAME paper: both terms only change when a run has finished.
export function paperKeyFor(exams, id, learnerSeed = "") {
  const meta = parseExamId(id);
  const rec = exams?.[id];
  // Anything that is not a band exam stores no attempt counter (it stores a date
  // and nothing else), so its paper rotates off the last-taken stamp instead.
  if (meta && meta.kind !== "exam") return { seed: `${learnerSeed}|${rec?.lastTaken ?? 0}`, attempt: 0 };
  return { seed: learnerSeed, attempt: rec?.attempts ?? 0 };
}
