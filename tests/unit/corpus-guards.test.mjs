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
const KNOWN_SHARED_GLOSS = new Set([
  "es-u22l1-contento+es-u22l1-feliz",
  "es-u35l4-elpasatiempo+es-u35l4-laaficion",
  "es-u36l2-nadamas+es-u36l2-tanprontocomo",
  "es-u51l2-coincidir+es-u51l2-estardeacuerdo",
  "es-u52l3-conducira+es-u52l3-llevara",
  "es-u52l4-elfin+es-u52l4-elproposito",
  "es-u54l1-alparecer+es-u54l1-aparentemente",
  "es-u54l1-enprincipio+es-u54l1-enteoria",
  "es-u57l4-elestadodeanimo+es-u57l4-elhumor",
  "es-u61l1-lanorma+es-u61l1-laregla",
  "es-u68l1-elafecto+es-u68l1-elcarino",
  "es-u73l3-comono+es-u73l3-desdeluego+es-u73l3-faltariamas",
  "es-u76l1-elprocedimiento+es-u76l1-eltramite",
  "es-u84l3-elcargo+es-u84l3-elpuesto",
  "es-u87l3-enconsecuencia+es-u87l3-porconsiguiente",
  "fr-u22l2-nepersonne+fr-u22l2-personne",
  "fr-u22l2-nerien+fr-u22l2-rien",
  "fr-u23l1-nous+fr-u23l1-on",
  "fr-u58l1-largument+fr-u58l1-lathese",
  "fr-u58l2-cependant+fr-u58l2-toutefois",
  "fr-u59l2-aboutir+fr-u59l2-mener",
  "fr-u63l4-effectuer+fr-u63l4-realiser",
  "fr-u66l3-desormais+fr-u66l3-dorenavant",
  "ja-u121l3-kicho+ja-u121l3-toutoi",
  "ja-u123l1-fukei+ja-u123l1-kei",
  "ja-u136l1-yu+ja-u136l1-yuso",
  "ja-u136l4-doro+ja-u136l4-ro",
  "ja-u157l2-8863+ja-u157l2-ifuku",
  "ja-u166l2-8a3c+ja-u166l2-shomei",
  "ja-u166l3-8cac+ja-u166l3-sekinin",
  "ja-u171l2-6b74+ja-u171l2-rekishi",
  "ja-u30l2-dakedo+ja-u30l2-kedo",
  "ja-u39l2-do+ja-u39l2-kan",
  "ja-u62l4-donokurai+ja-u62l4-ikura",
  "ja-u78l1-sugata+ja-u78l1-sutairu",
  "ja-u82l1-ii+ja-u82l1-yoi",
  "ja-u86l4-mainen+ja-u86l4-maitoshi",
  "ja-u89l2-repoto+ja-u89l2-ripoto",
  "ja-u97l2-keredo+ja-u97l2-keredomo",
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
