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

  // 0. AN EMPTY UNIT MAKES EVERY OTHER CHECK PASS VACUOUSLY — so it goes first.
  //
  // On 2026-10-07 this gate printed `hi ... SHIP GATE PASSED` while 39 of Hindi's
  // 136 units held ZERO cards, and the same for 37 of Indonesian's 87. Every check
  // below iterates the cards, so a scaffolded-but-unauthored unit contributes
  // nothing to look at and the gate reads it as clean. A gate that cannot tell
  // "finished" from "scaffolded" is the false-green class this file exists to kill,
  // and it had it on its own first page.
  //
  // A stub band is a NORMAL mid-flight state, so the message names the range and
  // says it is not shippable rather than implying the cards are wrong.
  const empty = units.filter((u) => !(u.lessons ?? []).some((l) => (l.items ?? []).length));
  empty.length
    ? FAIL(`${empty.length} of ${units.length} units hold ZERO cards — u${empty[0].order}..u${empty[empty.length - 1].order} are scaffolded, not authored. NOT SHIPPABLE; every check below passes vacuously on them.`)
    : OK("every unit holds cards");

  // 1. ROUTING — the check that was missing
  const dead = vocab.filter((i) => kindCount(i) === 0);
  dead.length ? FAIL(`${dead.length} vocab route to ZERO card kinds (e.g. ${dead.slice(0, 3).map((x) => x.id).join(", ")})`)
              : OK("every vocab routes to at least one card kind");
  const single = vocab.filter((i) => kindCount(i) === 1);
  single.length ? console.log(`   ⚠ ${single.length} vocab route to only ONE kind — usually unvoiced content`)
                : OK("no vocab stuck on a single kind");

  // 1b. A DRILL OVER 8 TOKENS SILENTLY KILLS sentence:build.
  //
  // `sentenceTokens` bounds a non-Japanese sentence to 3-8 tiles, so a 9-token
  // drill makes canSentence false and the item loses a card kind with nothing red
  // anywhere. A Hindi B2 seat found 23 of them in one block on 2026-10-07.
  // crossblock.mjs had been printing `canSentence 289/312` the whole time and
  // nobody read it, me included. A number nobody reads is not a check.
  //
  // THIS TESTS THE TOKEN COUNT, NOT canSentence ITSELF. Measuring canSentence
  // wholesale flags what is structurally impossible and so gets switched off: a
  // single-character front cannot be clozed at all (à, y, e, я, に), a split front
  // like `ne … pas` is not one contiguous word, and Japanese sentence:build
  // additionally requires a particle immediately after the front — which is the
  // designed ~37% yield, not a defect. My first version reported 340 ja and 60 fr
  // "failures" that were all of that kind.
  const longDrill = vocab.filter((i) => {
    const d = i.drill?.jp; if (!d) return false;
    if (/[぀-ヿ一-鿿]/.test(String(i.front))) return false; // ja is tokenised differently
    return String(d).trim().split(/\s+/).length > 8;
  });
  longDrill.length ? FAIL(`${longDrill.length} drills run over 8 tokens, so sentence:build cannot route them (${longDrill.slice(0, 3).map((x) => x.id).join(", ")})`)
                   : OK("no drill exceeds the 8-token sentence:build bound");

  // 1c. A FREE-PASS CARD IS ONLY CAUGHT BY ITS AUDIO. Unvoiced, it is a free card.
  //
  // `reviewStep.js` guards both typed directions, but NOT symmetrically:
  //   meaning side  `if (meaningIsFreePass) -> listen:type if clip, else choice:reverse`
  //                 — an unconditional reroute, safe with or without audio.
  //   produce side  `if (produceIsFreePass(item) && shouldSpeak(item)) -> speak`
  //                 — and `shouldSpeak` REQUIRES A CLIP, by its own design note.
  // So a cognate whose front IS its gloss falls through to type:produce whenever it
  // has no audio, and the learner types the prompt back for a pass.
  //
  // Measured 2026-10-07: 73 produce free-pass items live in the corpus and ZERO are
  // exposed — every one sits in fr/es/de/no/pt, which are fully voiced. That is the
  // audio run hiding an engine asymmetry, not a guard doing its job. The condition
  // needed is LATIN SCRIPT (so a front can equal an English gloss) plus NO CLIP,
  // and Cyrillic ru B2 cannot meet it however long it waits for its run.
  //
  // IT IS THE NEXT THREE LANGUAGES THAT MEET IT: it, nl and en are Latin, and every
  // band is unvoiced between authoring and its paid run — while main is production.
  // So this fails the gate at merge, before that window can open.
  const freeUnvoiced = vocab.filter((i) => {
    try {
      return C.produceIsFreePass(i) && !existsSync(join("public", "audio", L, `${i.id}.mp3`));
    } catch { return false; }
  });
  freeUnvoiced.length
    ? FAIL(`${freeUnvoiced.length} UNVOICED cards are answerable by typing the prompt back — produce free-pass reroutes to speak, which needs a clip (${freeUnvoiced.slice(0, 3).map((x) => `${x.id} "${x.front}"<-"${x.meaning}"`).join(", ")})`)
    : OK("no unvoiced card is answerable by typing its own prompt back");

  // 2. AUDIO — the other thing nothing asked.
  //
  // AND IT ASKS THE MANIFEST, NOT THE DISK, BECAUSE THAT IS WHAT THE ENGINE ASKS.
  // `hasAudio` is `AUDIO_IDS.has(item.id)` and `AUDIO_IDS` comes from
  // src/data/audioManifest.js, which is GENERATED from the disk by a separate
  // command. So between `generate:audio` and `generate:manifest` the two disagree,
  // and a gate that stats the filesystem reports a band fully voiced while every
  // card of it is still routed as silent.
  //
  // Not hypothetical: measured mid-run on 2026-10-07, 252 ru clips were on disk and
  // absent from the manifest. A disk check would have called that voiced. This is
  // the same shape as every other defect in this file — the check has to reach the
  // code path the learner actually gets.
  const voiceable = items.filter((i) => i.type === "vocab" || i.type === "glyph" || i.type === "kana" || i.type === "kanji");
  const silent = voiceable.filter((i) => !C.hasAudioId(i.id));
  silent.length ? FAIL(`${silent.length} of ${voiceable.length} voiceable cards are SILENT TO THE ENGINE (absent from audioManifest.js)`)
                : OK(`all ${voiceable.length} voiceable cards are voiced to the engine`);

  // 2b. A CLIP ON DISK THAT THE MANIFEST DOES NOT LIST IS A PAID CLIP NOBODY HEARS.
  // The repair is `npm run generate:manifest`, so the message says so.
  const unwired = voiceable.filter((i) => !C.hasAudioId(i.id) && existsSync(join("public", "audio", L, `${i.id}.mp3`)));
  unwired.length ? FAIL(`${unwired.length} clips EXIST ON DISK but are missing from audioManifest.js — run \`npm run generate:manifest\` (paid audio nobody hears)`)
                 : OK("no clip on disk is missing from the manifest");

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

  // 6b. THE SAME CHECK, LANGUAGE-WIDE. NOT A NEW DETECTION: `glossCollisionWarnings`
  // (src/data/lint.js:188) has caught this correctly all along, with the same raw
  // comparison and the same reading exemption, and it documents the exemption at
  // :209. The problem is that it emits warning 6,312 of 6,313. What this adds is a
  // NON-ZERO EXIT, so the condition blocks a merge instead of scrolling past.
  //
  // It matters because type:produce shows the MEANING and
  // then accepts only one front, so two cards with the same prompt anywhere in a
  // language make one of them unanswerable. The learner reads "a foundation", types
  // the word they know, and is marked wrong for recalling the other card.
  //
  // RAW strings, for the reason check 6 gives: comparing folded meanings reported
  // 1,303 collisions corpus-wide, and the overwhelming majority were the normaliser
  // stripping a leading "to " — `reservar` "to book" against `o livro` "the book".
  // Those are DIFFERENT prompts on screen and no defect at all. On raw strings the
  // real figure was 53.
  //
  // AND 49 OF THOSE 53 ARE BY DESIGN: the same word taught twice in two scripts or
  // two spellings — ja うんどう@u2 / 運動@u33, es dónde@u3 / donde@u29. The test that
  // separates them is the READING: same accent-folded reading means one word, and
  // the pair is the intended progression. Different reading means two different
  // words wearing one prompt, which left exactly 4 — 2 in id, 2 in hi, every one a
  // real defect, and all four were fixed by re-glossing the later card.
  const byPrompt = new Map();
  for (const it of vocab) {
    const k = String(it.meaning ?? "").trim().toLowerCase();
    if (!k) continue;
    if (!byPrompt.has(k)) byPrompt.set(k, []);
    byPrompt.get(k).push(it);
  }
  const fold = (r) => { try { return A.normalizeReading(String(r ?? "")); } catch { return String(r ?? ""); } };
  const ambLang = [];
  for (const [k, v] of byPrompt) {
    if (new Set(v.map((x) => x.front)).size < 2) continue;
    if (new Set(v.map((x) => fold(x.reading))).size === 1) continue; // one word, two scripts
    ambLang.push(`"${k}" <- ${v.map((x) => `${x.front}@u${x.u}`).join(" vs ")}`);
  }
  ambLang.length
    ? FAIL(`${ambLang.length} prompts are shared by DIFFERENT words, so type:produce is unanswerable (${ambLang.slice(0, 2).join("; ")})`)
    : OK("no prompt is shared by two different words");

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

  // 9. STRAY SCRIPT — a letter from a writing system this language does not use.
  //
  // The ru B2 block-3 seat found a CJK 三 inside a Russian example and a Hangul
  // syllable inside a Russian hint. Both RENDER FINE on screen; validate:content
  // checks shapes and lint is silent for Cyrillic, so nothing in the gate saw
  // either. Hand-authoring and scripted edits both leak these.
  const SCRIPTS = {
    ja: /[぀-ヿ一-鿿　-〿]/,
    ru: /[Ѐ-ӿ]/,
    hi: /[ऀ-ॿ]/,
  };
  // NARROWED AFTER ITS FIRST RUN, which flagged four cards and all four were
  // legitimate: `ª` and `º` are the Spanish and Portuguese ordinal indicators
  // (Dª Ana, 1º) and `ˈ` and `ʃ` are IPA inside pronunciation hints. The defect
  // this check exists for is a whole FOREIGN WRITING SYSTEM leaking in — the
  // seat's actual finds were a CJK 三 and a Hangul syllable in Russian cards — so
  // it now tests only for those blocks, and IPA and Latin typography are allowed
  // everywhere. Flagging a language's own correct orthography is how a check gets
  // switched off.
  const FOREIGN = {
    cjk: /[぀-ヿ一-鿿]/,
    hangul: /[가-힯ᄀ-ᇿ]/,
    cyrillic: /[Ѐ-ӿ]/,
    devanagari: /[ऀ-ॿ]/,
    arabic: /[؀-ۿ]/,
    hebrew: /[֐-׿]/,
    thai: /[฀-๿]/,
    greek: /[Ͱ-Ͽ]/,
  };
  const ownScript = SCRIPTS[L] ?? null;
  const strayLetter = (t) => {
    for (const ch of String(t ?? "")) {
      if (ownScript && ownScript.test(ch)) continue;   // the language's own script
      for (const re of Object.values(FOREIGN)) if (re.test(ch)) return ch;
    }
    return null;
  };
  const stray = [];
  for (const i of items)
    for (const v of [i.front, i.meaning, i.reading, i.example?.jp, i.drill?.jp, i.hint])
      { const c = strayLetter(v); if (c) { stray.push(`${i.id}:${JSON.stringify(c)}`); break; } }
  stray.length ? FAIL(`${stray.length} cards contain a letter from a foreign script (${stray.slice(0, 3).join(", ")})`)
               : OK("no stray foreign-script letters");

  // 10. MIXED-SCRIPT WORD — one word built from two alphabets. Check 9 cannot see
  // it, because a hint legitimately holds both. The same seat caught `плaster`
  // (Cyrillic п-л + Latin a-s-t-e-r) and `хлопОk` in its own fresh cards.
  const mixed = [];
  for (const i of items)
    for (const v of [i.front, i.example?.jp, i.drill?.jp])
      for (const w of String(v ?? "").split(/[^\p{L}\p{M}]+/u))
        if (w.length > 1 && /[a-zA-Z]/.test(w) && /[Ѐ-ӿऀ-ॿ]/.test(w))
          mixed.push(`${i.id}:${w}`);
  mixed.length ? FAIL(`${mixed.length} words built from two scripts (${mixed.slice(0, 3).join(", ")})`)
               : OK("no word mixes two scripts");

  // 11. REQUIRED FIELDS
  const missing = vocab.filter((i) => !i.front || !i.meaning || !i.example?.jp);
  missing.length ? FAIL(`${missing.length} vocab missing front/meaning/example`)
                 : OK("every vocab has front, meaning and an example");
}

console.log(`\n${failures ? `✗ SHIP GATE FAILED — ${failures} check(s)` : "✓ SHIP GATE PASSED"}`);
process.exit(failures ? 1 : 0);
