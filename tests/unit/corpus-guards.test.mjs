// CORPUS GUARDS — the checks that were missing, not the checks that were green.
//
// Every defect found on 2026-09-16 had the same shape: a CLAIM that nothing
// verified. validate:content enforced unique fronts, so nobody noticed it never
// enforced unique meanings. A header asserted three words were untaught, so seats
// wrote around vocabulary the learner already had. A gate came back green and was
// read as "the content is correct", when all it ever meant was "the things we
// check are fine."
//
// So these are deliberately RATCHETS, not clean-slate assertions. Each one pins
// today's real number and fails if it grows. A ratchet is honest about debt in a
// way a skipped test is not: the debt is listed, in code, by id, and it cannot
// quietly get worse while six crews author 1,776 cards.
import test from "node:test";
import assert from "node:assert/strict";
import { UNITS, seedItems } from "../../src/data/index.js";
import { normalizeReading, checkProduce, checkReading } from "../../src/store/answer.js";

// ---------------------------------------------------------------------------
// GUARD 1 — two items in one lesson must not share a gloss.
//
// The produce card prompts with `meaning` and grades against ONE `front`, so a
// lesson teaching `contento` and `feliz` both as "happy" MARKS A CORRECT ANSWER
// WRONG. Same class as the "type e for é" card Alex had deleted: the app
// punishing a right answer. `validate:content` cannot see it — fronts are unique,
// meanings were never checked.
//
// The 39 below are the pairs that already shipped in ja/fr/es. They are debt, not
// permission. Delete an entry when you differentiate the glosses; never add one.
// CLEARED 2026-09-17. All 39 pairs were differentiated — each item now carries the
// sense that actually tells it apart from its twin (contento "pleased" vs feliz
// "happy"; 歴 "career" vs 歴史 "history"), and the old shared gloss moved into
// accept[] so typing it still passes on the meaning card. The list is empty and
// must stay empty: there is no longer any such thing as known-acceptable debt here.
const KNOWN_SHARED_GLOSS = new Set([
]);

test("GUARD: no lesson teaches two items with the same gloss (ratchet)", () => {
  const found = [];
  for (const u of UNITS) {
    for (const l of u.lessons ?? []) {
      const byGloss = new Map();
      for (const it of l.items ?? []) {
        if (!it.meaning) continue;
        const k = String(it.meaning).trim().toLowerCase();
        if (!byGloss.has(k)) byGloss.set(k, []);
        byGloss.get(k).push(it.id);
      }
      for (const [gloss, ids] of byGloss) {
        if (ids.length > 1) found.push({ key: ids.slice().sort().join("+"), gloss, lesson: l.id });
      }
    }
  }
  const novel = found.filter((f) => !KNOWN_SHARED_GLOSS.has(f.key));
  assert.deepEqual(
    novel.map((f) => `${f.lesson}: "${f.gloss}" — ${f.key}`), [],
    "a NEW lesson teaches two items with one gloss. The produce card prompts with " +
    "the gloss and grades against one front, so the other correct answer is marked " +
    "wrong. Differentiate the primary meanings; accept[] can still carry the overlap."
  );
  // ...and the ratchet must tighten, never slacken: a pinned pair that has been
  // fixed has to leave the list, or the list stops describing reality.
  const live = new Set(found.map((f) => f.key));
  const stale = [...KNOWN_SHARED_GLOSS].filter((k) => !live.has(k));
  assert.deepEqual(stale, [],
    "these pairs are pinned as known debt but no longer collide — delete them from " +
    "KNOWN_SHARED_GLOSS so the list keeps meaning what it says"
  );
});

// ---------------------------------------------------------------------------
// GUARD 2 — a header may not claim a word is untaught unless it is.
//
// src/data/no/unit1.js told every Norwegian seat that `mat`, `å prøve` and
// `å pleie` were "a front NOWHERE in the corpus". All three are taught (u30l1,
// u15l3, u21l1). Seats read that paragraph — the RUNBOOK sends them there — and
// wrote around vocabulary the learner already had, which no validator can detect
// because the defect is a word that was NEVER WRITTEN.
//
// Prose can't be tested, so the convention is machine-readable: to assert a word
// is untaught, write UNTAUGHT(<lang>:<front>) in the comment. This resolves it
// against the real corpus every run, so the claim rots loudly instead of quietly.
const UNTAUGHT_CLAIM = /UNTAUGHT\(([a-z]{2,3}):([^)]+)\)/g;

test("GUARD: every UNTAUGHT(...) claim in a header is actually true", async () => {
  const { readFileSync, readdirSync } = await import("node:fs");
  const items = Object.values(seedItems());
  const taught = new Set(items.map((it) => `${it.lang}:${String(it.front).trim()}`));

  const langs = readdirSync(new URL("../../src/data/", import.meta.url), { withFileTypes: true })
    .filter((d) => d.isDirectory()).map((d) => d.name);

  const lies = [];
  for (const lang of langs) {
    const dir = new URL(`../../src/data/${lang}/`, import.meta.url);
    for (const f of readdirSync(dir).filter((n) => n.endsWith(".js"))) {
      const src = readFileSync(new URL(f, dir), "utf8");
      for (const m of src.matchAll(UNTAUGHT_CLAIM)) {
        const key = `${m[1]}:${m[2].trim()}`;
        if (taught.has(key)) lies.push(`${lang}/${f}: claims ${key} is untaught — it is taught`);
      }
    }
  }
  assert.deepEqual(lies, [],
    "a header asserts a word is untaught and the corpus disagrees. Seats trust these " +
    "notes and write around the word, which nothing else can detect."
  );

  // A guard with nothing to check passes for the wrong reason, and a vacuous green
  // is the exact failure mode this file exists to stop. So prove the resolver
  // works on a known-true and a known-false claim before trusting its silence.
  const probe = "UNTAUGHT(no:å prøve) and UNTAUGHT(no:zzzznotaword)";
  const seen = [...probe.matchAll(UNTAUGHT_CLAIM)].map((m) => `${m[1]}:${m[2].trim()}`);
  assert.deepEqual(seen, ["no:å prøve", "no:zzzznotaword"], "the marker regex must match");
  assert.equal(taught.has("no:å prøve"), true,
    "å prøve IS taught (no-u15l3) — this is the exact claim unit1.js got wrong");
  assert.equal(taught.has("no:zzzznotaword"), false, "a genuinely untaught word must resolve false");
});

// ---------------------------------------------------------------------------
// GUARD 3 — a word must never be answerable by another taught word.
//
// Accent tolerance exists so a learner is not punished for a missing accent on a
// word there is no mistaking. It stops being tolerance when the folded form is a
// DIFFERENT WORD THE COURSE ALSO TEACHES — then it marks the wrong answer right,
// and it does so exactly where the course tried hardest: `hätte` folds to `hatte`,
// and German teaches both. Found by the German B1 crew lead, which called the
// grader on its own Konjunktiv II lesson and discovered the lesson could not
// teach what it exists to teach.
test("GUARD: no taught word is answerable by another taught word", () => {
  const items = Object.values(seedItems());
  const byLang = {};
  for (const it of items) (byLang[it.lang] ??= []).push(it);

  const holes = [];
  let collisions = 0;
  for (const [lang, list] of Object.entries(byLang)) {
    const fronts = new Map();
    for (const it of list) fronts.set(String(it.front).toLowerCase(), it.id);
    for (const it of list) {
      const front = String(it.front);
      const fold = normalizeReading(front, lang);
      const other = fronts.get(fold);
      if (fold === front.toLowerCase() || !other || other === it.id) continue;
      collisions++;
      // the OTHER word must not be accepted as this one, on either grader
      if (checkProduce(fold, it)) holes.push(`${it.id} ("${front}") accepts "${fold}" — which is ${other}`);
      if (checkReading(fold, it)) holes.push(`${it.id} ("${front}") reading-accepts "${fold}" — which is ${other}`);
      // ...and the word itself must still work, or the fix broke the card
      assert.equal(checkProduce(front, it), true, `${it.id}: its own front must pass`);
    }
  }
  assert.ok(collisions >= 20, `expected the real collision set, found ${collisions}`);
  assert.deepEqual(holes, [],
    "typing one taught word is being accepted as a different taught word. This is " +
    "not accent tolerance, it is marking a wrong answer correct."
  );
});
