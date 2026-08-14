// Spanish card-routing invariants, asserted against the REAL corpus.
//
// Ported from tests/unit/fr-cards.test.mjs, and for the same reason: French kept
// producing cards that *routed* but didn't *teach*, and every one was caught by a
// human reading sentences rather than by CI, because the suite asserted a card kind
// APPEARS, not that it asks something. Spanish is the next Latin-script language, so
// these lock the same properties before it ships — and before audio is paid for.
//
// The counts below are exact on purpose. The Dev Mode coverage grid measures
// routing and so cannot see degeneracy, and no other test pins these numbers, so a
// silent drift in the router would otherwise reach a learner. When Spanish content
// legitimately changes, UPDATE THESE NUMBERS in the same commit — do not relax the
// assertion to a range.
import { test } from "node:test";
import assert from "node:assert/strict";
import { UNITS, seedItems } from "../../src/data/index.js";
import {
  canParticleCloze,
  particleAfterFront,
  blankParticle,
  particleChoices,
  shouldParticleCloze,
  shouldTypeProduce,
  shouldReverseChoice,
  shouldCloze,
  shouldSentence,
  shouldSpeak,
  shouldTypeReading,
  shouldListen,
  shouldListenType,
  canBuildReading,
  isTraceable,
  readingIsInformative,
  sentenceTiles,
  blankExample,
  CLOZE_BLANK,
} from "../../src/store/cardRouting.js";
import { langScopedIds } from "../../src/store/useStore.js";

const esItems = Object.values(seedItems()).filter((i) => i.lang === "es");
const count = (fn) => esItems.filter(fn).length;

// Guards every assertion below: if Spanish ever stops loading, these must fail
// loudly rather than pass vacuously over an empty array.
test("the Spanish corpus is actually loaded", () => {
  assert.equal(esItems.length, 467, `expected the full merged Spanish corpus, got ${esItems.length} items`);
});

// --- the routing split ----------------------------------------------------------

test("Spanish routes to exactly the card kinds it should, in the expected volumes", () => {
  assert.deepEqual(
    {
      speak: count(shouldSpeak),
      typeProduce: count(shouldTypeProduce),
      choiceReverse: count(shouldReverseChoice),
      cloze: count(shouldCloze),
      sentence: count(shouldSentence),
      particle: count(shouldParticleCloze),
    },
    { speak: 467, typeProduce: 210, choiceReverse: 192, cloze: 94, sentence: 80, particle: 7 }
  );
});

// The three kinds that were DEGENERATE for French — the prompt was its own answer —
// plus the two gated on audio Spanish does not have yet. All must be zero.
test("no Spanish item routes to a card kind whose prompt would be its own answer", () => {
  assert.deepEqual(
    {
      typeReading: count(shouldTypeReading),
      build: count(canBuildReading),
      trace: count(isTraceable),
      readingShownAsPronunciation: count(readingIsInformative),
    },
    { typeReading: 0, build: 0, trace: 0, readingShownAsPronunciation: 0 },
    "type:reading and build display the front and ask for the reading; for Spanish those are the same string modulo accents"
  );
});

test("the listening cards are dark until Spanish audio exists", () => {
  assert.equal(count(shouldListen) + count(shouldListenType), 0, "no es audio ids yet — these light up after generate:audio");
});

// `reading === front` is the PREMISE for the two assertions above: it is why
// type:reading and build had to be made Japanese-only.
test("Spanish front→reading is a mechanical fold, which is why those kinds are ja-only", () => {
  // 198 of 467 today. Spanish differs from French here: accented fronts ("el avión")
  // fold to a different string, so it's ~42% rather than French's near-half — still
  // far too many to let type:reading or build display the front and ask for it.
  const identical = esItems.filter((i) => i.reading === i.front);
  assert.ok(identical.length > 150, `expected many es items where reading === front, got ${identical.length}`);
});

// --- particle card: the blank must be GOVERNED by the item ----------------------

// Coordinating conjunctions join two things and belong to neither; articles belong
// to the FOLLOWING noun. Both make the card grade the item on a fact it never tested.
const NOT_GOVERNED = ["y", "o", "pero", "el", "la", "los", "las", "un", "una", "unos", "unas"];

test("no Spanish particle card blanks a word the item doesn't govern", () => {
  const routing = esItems.filter(canParticleCloze);
  assert.ok(routing.length > 5, `expected a real particle-card population, got ${routing.length}`);

  const bad = routing
    .map((it) => ({ id: it.id, front: it.front, blank: particleAfterFront(it).particle.toLowerCase() }))
    .filter((r) => NOT_GOVERNED.includes(r.blank));

  assert.deepEqual(
    bad,
    [],
    `these blank a word not governed by the item:\n${bad.map((b) => `  ${b.id} (front "${b.front}") blanks "${b.blank}"`).join("\n")}`
  );
});

// THE REGRESSION THIS FILE EXISTS FOR. A noun does not govern the preposition after
// it: in "El perro ＿＿ Ana es enorme" the keyed `de` is the genitive linker between
// two nouns, so the card moves `el perro`'s rung on a fact about `de`. Verified
// failing before the DETERMINER_LED fix in cardRouting.js — 16 Spanish items were
// eligible and 5 were live, and French had 18 eligible / 5 live at the same time.
test("no Spanish particle card sits on a NOUN front", () => {
  const nounFronted = esItems
    .filter(canParticleCloze)
    .filter((it) => /^(?:el|la|los|las)\s+/i.test(it.front))
    .map((it) => `${it.id} ("${it.front}" blanks "${particleAfterFront(it).particle}")`);

  assert.deepEqual(
    nounFronted,
    [],
    `a definite-article front is a noun phrase, so the preposition after it belongs to the sentence, not the item:\n  ${nounFronted.join("\n  ")}`
  );
});

test("every Spanish particle card blanks exactly one word and offers the answer among its options", () => {
  for (const it of esItems.filter(canParticleCloze)) {
    const blanked = blankParticle(it);
    assert.equal(blanked.split(CLOZE_BLANK).length - 1, 1, `${it.id}: expected exactly one blank, got "${blanked}"`);
    const opts = particleChoices(it);
    assert.equal(opts.filter((o) => o.correct).length, 1, `${it.id}: expected exactly 1 correct option`);
    const texts = opts.map((o) => o.text.toLowerCase());
    assert.equal(new Set(texts).size, texts.length, `${it.id}: duplicate options ${texts.join(", ")}`);
  }
});

test("a Spanish particle card never blanks the item's own front", () => {
  for (const it of esItems.filter(canParticleCloze)) {
    const { particle } = particleAfterFront(it);
    assert.notEqual(
      particle.toLowerCase(),
      String(it.front).toLowerCase(),
      `${it.id}: blanks its own front, so the prompt is the answer`
    );
  }
});

// --- cloze + sentence:build: the prompt must not contain the answer -------------

const foldEs = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const LETTER = /[a-zñ]/;
function hasWholeWord(haystack, needle) {
  const h = foldEs(haystack);
  const n = foldEs(needle);
  let i = h.indexOf(n);
  while (i !== -1) {
    const before = i === 0 ? "" : h[i - 1];
    const after = h[i + n.length] ?? "";
    if (!LETTER.test(before) && !LETTER.test(after)) return true;
    i = h.indexOf(n, i + 1);
  }
  return false;
}

test("a Spanish cloze sentence never still contains the word it blanked", () => {
  for (const it of esItems.filter(shouldCloze)) {
    const blanked = blankExample(it);
    if (!blanked) continue;
    const leaks = String(it.front)
      .split(/\s+/)
      .every((w) => hasWholeWord(blanked, w));
    assert.ok(!leaks, `${it.id}: "${it.front}" still readable in the blanked sentence "${blanked}"`);
  }
});

test("no Spanish sentence:build tile carries punctuation that pins its position", () => {
  // The open French defect: a tile like "café," can only go in one slot, so the
  // puzzle partly solves itself.
  const offenders = [];
  for (const it of esItems.filter(shouldSentence)) {
    const built = sentenceTiles(it);
    if (!built) continue;
    const punct = built.tiles.filter((t) => /[,;:]/.test(t));
    if (punct.length) offenders.push(`${it.id}: ${JSON.stringify(punct)}`);
  }
  assert.deepEqual(offenders, [], `punctuation-suffixed tiles give away position:\n  ${offenders.join("\n  ")}`);
});

// --- two items in one unit must not share a gloss -------------------------------

test("no two Spanish items in a unit share a raw meaning", () => {
  // shouldReverseChoice is a deterministic hash, and the reverse card renders the
  // RAW meaning as its prompt while buildOptions de-dupes on the DISPLAYED field —
  // so an identical gloss makes a card with two correct answers, every time, for
  // every learner. A parenthetical disambiguates for free: the reverse card shows
  // it, and normalizeMeaning strips it before typed grading.
  const clashes = [];
  for (const unit of UNITS) {
    if (unit.lang !== "es") continue;
    const seen = new Map();
    for (const lesson of unit.lessons)
      for (const it of lesson.items ?? []) {
        if (seen.has(it.meaning)) clashes.push(`${unit.id}: "${it.meaning}" on both ${seen.get(it.meaning)} and ${it.id}`);
        else seen.set(it.meaning, it.id);
      }
  }
  assert.deepEqual(clashes, [], `identical glosses in one unit make an unanswerable reverse-choice card:\n  ${clashes.join("\n  ")}`);
});

// --- dev seeders are language-scoped --------------------------------------------

test("langScopedIds restricts to Spanish and preserves registration order", () => {
  const items = { "ja-a": { lang: "ja" }, "es-a": { lang: "es" }, "ja-b": { lang: "ja" }, "es-b": { lang: "es" } };
  assert.deepEqual(langScopedIds(items, "es"), ["es-a", "es-b"]);
  assert.deepEqual(langScopedIds(items, null), ["ja-a", "es-a", "ja-b", "es-b"]);
  assert.deepEqual(langScopedIds(items, "de"), []);
});

test("Spanish has enough items for the Dev Mode seeders to scope against", () => {
  const all = {};
  for (const unit of UNITS)
    for (const lesson of unit.lessons)
      for (const def of lesson.items ?? []) all[def.id] = { lang: unit.lang };

  const esScoped = langScopedIds(all, "es").slice(0, 20);
  assert.equal(esScoped.length, 20, "Spanish has enough items to seed 20");
  assert.ok(esScoped.every((id) => all[id].lang === "es"), "scoped seeding stays in Spanish");
});
