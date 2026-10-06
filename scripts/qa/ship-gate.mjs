// THE PRE-MERGE SHIP GATE — every check that has ever caught a real defect here,
// run over every live language, in one command.
//
//   node scripts/qa/ship-gate.mjs            all live languages
//   node scripts/qa/ship-gate.mjs ru         one
//
// WHY IT EXISTS. On 2026-10-06 the ru and hi B1 bands were merged and pushed after
// a gate of validate:content + lint + test:unit + build, all green. 259 of those
// cards routed to NO card kind at all — the learner is served nothing for them —
// and 1,776 were silent. Nothing in that gate asks what a card ROUTES to or
// whether it has AUDIO, and the card-variety ratchet only watched ja/fr/es. The
// defect was found later, by accident, on unrelated work.
//
// So this asks the questions that gate did not. It is read-only and exits non-zero
// on any FAIL, so it can front a merge.
import { pathToFileURL } from "node:url";
import { join } from "node:path";
import { existsSync } from "node:fs";
const R = (p) => pathToFileURL(join(process.cwd(), p)).href;
const m = await import(R("src/data/index.js"));
const C = await import(R("src/store/cardRouting.js"));
const A = await import(R("src/store/answer.js"));
m.seedItems();

const GATES = {
  "listen:choice": C.shouldListen, "choice:reverse": C.shouldReverseChoice,
  "type:produce": C.shouldTypeProduce, "type:reading": C.shouldTypeReading,
  "listen:type": C.shouldListenType, "cloze:choice": C.shouldCloze,
  "particle:choice": C.shouldParticleCloze, "sentence:build": C.shouldSentence,
  conjugate: C.shouldConjugate, build: C.canBuildReading, trace: C.isTraceable, speak: C.shouldSpeak,
};
const kindCount = (it) => {
  let n = 0;
  for (const g of Object.values(GATES)) { try { if (g(it)) n++; } catch {} }
  return n;
};
const norm = (s) => String(s ?? "").toLowerCase().replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim()
  .replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, "");

const only = process.argv[2];
const langs = [...new Set(m.UNITS.map((u) => u.lang))].filter((L) => m.isLive(L)).filter((L) => !only || L === only);
let failures = 0;
const FAIL = (msg) => { failures++; console.log(`   ✗ FAIL  ${msg}`); };
const OK = (msg) => console.log(`   ✓ ${msg}`);

for (const L of langs) {
  const units = m.UNITS.filter((u) => u.lang === L).sort((a, b) => a.order - b.order);
  const items = [];
  for (const u of units) for (const l of u.lessons ?? []) for (const it of l.items ?? [])
    items.push({ ...it, lang: L, u: u.order, lesson: l.id });
  const vocab = items.filter((i) => i.type === "vocab");
  console.log(`\n=== ${L} — ${units.length} units, ${items.length} cards`);

  // 1. ROUTING — the check that was missing
  const dead = vocab.filter((i) => kindCount(i) === 0);
  dead.length ? FAIL(`${dead.length} vocab route to ZERO card kinds (e.g. ${dead.slice(0, 3).map((x) => x.id).join(", ")})`)
              : OK("every vocab routes to at least one card kind");
  const single = vocab.filter((i) => kindCount(i) === 1);
  single.length ? console.log(`   ⚠ ${single.length} vocab route to only ONE kind — usually unvoiced content`)
                : OK("no vocab stuck on a single kind");

  // 2. AUDIO — the other thing nothing asked
  const voiceable = items.filter((i) => i.type === "vocab" || i.type === "glyph" || i.type === "kana" || i.type === "kanji");
  const silent = voiceable.filter((i) => !existsSync(join("public", "audio", L, `${i.id}.mp3`)));
  silent.length ? FAIL(`${silent.length} of ${voiceable.length} voiceable cards have NO clip`)
                : OK(`all ${voiceable.length} voiceable cards have a clip`);

  // 3. SHAPE
  const offShape = units.filter((u) => {
    const per = (u.lessons ?? []).map((l) => (l.items ?? []).length).filter((n) => n > 0);
    return per.length && (per.some((n) => n < 4 || n > 8));
  });
  // lint recommends 5-8 and treats it as a WARNING; ja's kana lessons run to 11
  // deliberately. Not a ship blocker.
  offShape.length ? console.log(`   ⚠ ${offShape.length} units with a lesson outside 4-8 items (${offShape.slice(0, 3).map((u) => "u" + u.order).join(", ")}) — lint-advisory, not a blocker`)
                  : OK("every lesson is 4-8 items");

  // 4. DUPLICATE FRONTS
  // A LATIN CONJUGATION SET SHARES ONE FRONT BY DESIGN — `hablar` is the front of
  // the plain vocab card and of all four of its conjugated forms, which is what
  // eligibleKinds' own comment describes ("être is the front of all six future
  // cards"). Counting those as duplicates reported 21 es / 15 fr / 1 de false
  // positives on the first run.
  const byFront = new Map();
  for (const it of vocab) {
    if (it.conjForm) continue;
    // CASE-SENSITIVE, because capitalisation carries meaning: German Sie "you —
    // formal" and sie "she / they" are two different words distinguished by exactly
    // that, and contract.js treats them as distinct fronts. Lowercasing reported
    // them as a duplicate.
    const k = String(it.front); if (!byFront.has(k)) byFront.set(k, []); byFront.get(k).push(it);
  }
  const dups = [...byFront.values()].filter((v) => v.length > 1);
  dups.length ? FAIL(`${dups.length} duplicate vocab fronts (${dups.slice(0, 3).map((v) => v[0].front).join(", ")})`)
              : OK("vocab fronts unique");

  // 5. DUPLICATE READINGS
  const byReading = new Map();
  for (const it of vocab) { const r = String(it.reading ?? "").toLowerCase(); if (!r) continue; if (!byReading.has(r)) byReading.set(r, new Set()); byReading.get(r).add(String(it.front)); }
  const rdup = [...byReading.entries()].filter(([, v]) => v.size > 1);
  // A shared reading is the DOCUMENTED script-fold class (fr la/là, de sie/Sie,
  // no å måle/å male) and the engine already handles it: stampFoldCollisions marks
  // the group and listen:type is withheld. Report it, do not block on it — but a
  // NEW one inside a band being merged is worth a look.
  rdup.length ? console.log(`   ⚠ ${rdup.length} readings shared by different fronts (${rdup.slice(0, 3).map(([r]) => r).join(", ")}) — fold class, engine-handled`)
              : OK("one reading per front");

  // 6. AMBIGUOUS SAME-LESSON PROMPT
  const amb = [];
  const byLesson = new Map();
  for (const it of vocab) { if (!byLesson.has(it.lesson)) byLesson.set(it.lesson, []); byLesson.get(it.lesson).push(it); }
  for (const group of byLesson.values())
    for (const a of group)
      if (!/\(/.test(String(a.meaning)))
        for (const b of group)
          // RAW on both sides. Normalising a.meaning first (stripping a leading
          // "to ") made `marcar` "to mark" collide with `la huella`
          // "mark (a trace left behind)" — but the learner SEES "to mark" and
          // "mark (…)", which are different prompts. The defect is only real when
          // the displayed strings are "X" and "X (qualifier)".
          if (b !== a && String(b.meaning).toLowerCase().startsWith(String(a.meaning).toLowerCase() + " ("))
            amb.push(`${a.front}/${b.front}`);
  amb.length ? FAIL(`${amb.length} ambiguous same-lesson prompts (${amb.slice(0, 3).join(", ")})`)
             : OK("no ambiguous same-lesson prompt");

  // 7. DRILL MUST CONTAIN ITS FRONT AS A WHOLE WORD, or cloze cannot blank it
  const badDrill = vocab.filter((i) => {
    const d = i.drill?.jp; if (!d) return false;
    // Tokenised, not regex: a front can contain . ? ' and escaping it through two
    // layers of quoting kept producing a broken character class. Whole-word is what
    // cloze needs, and a multi-word front must appear as a contiguous run.
    // JAPANESE HAS NO WORD BOUNDARIES, so a token test cannot work there: the drill
    // ありがとうといいます。 is ONE token and the front ありがとう is a prefix of it.
    // Tokenising reported 427 false failures in ja on the first run. For a script
    // written without spaces, substring containment IS whole-word.
    // SCRIPT, NOT WHITESPACE, decides the test. Japanese attaches particles with no
    // space — the drill ふうふは しんせつです。 has a space but its first token is
    // ふうふは, front + は — so a token test still misses it. Keying on whitespace
    // left 195 ja false failures; keying on script leaves 0.
    if (/[぀-ヿ一-鿿가-힯]/.test(String(i.front)))
      return !String(d).includes(String(i.front));
    const toks = (t) => String(t).toLowerCase().split(/[^\p{L}\p{M}]+/u).filter(Boolean);
    const want = toks(i.front), got = toks(d);
    if (!want.length) return false;
    return !got.some((_, k) => want.every((w, j) => got[k + j] === w));
  });
  badDrill.length ? FAIL(`${badDrill.length} drills do not contain their front as a whole word (${badDrill.slice(0, 3).map((x) => x.id).join(", ")})`)
                  : OK("every drill contains its front verbatim");

  // 8. CONTROL CHARACTERS / LIVE EXPRESSIONS IN DATA
  const ctrl = items.filter((i) => [i.front, i.meaning, i.reading, i.example?.jp, i.drill?.jp]
    .some((v) => typeof v === "string" && /[\u0000-\u0008\u000e-\u001f]/.test(v)));
  ctrl.length ? FAIL(`${ctrl.length} cards contain a control character (${ctrl.slice(0, 3).map((x) => x.id).join(", ")})`)
              : OK("no control characters in data");

  // 9. REQUIRED FIELDS
  const missing = vocab.filter((i) => !i.front || !i.meaning || !i.example?.jp);
  missing.length ? FAIL(`${missing.length} vocab missing front/meaning/example`)
                 : OK("every vocab has front, meaning and an example");
}

console.log(`\n${failures ? `✗ SHIP GATE FAILED — ${failures} check(s)` : "✓ SHIP GATE PASSED"}`);
process.exit(failures ? 1 : 0);
