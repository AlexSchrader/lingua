import test from "node:test";
import assert from "node:assert/strict";
import { exampleScopeWarnings } from "../../src/data/lint.js";

// RUNBOOK §4: an example may use only vocab introduced at or before its unit —
// "the rule most likely to bite you in block 2 or 3", and until now enforced by
// nobody. These tests pin the exemptions, because the exemptions are the whole
// design: a check that flags every plural and every proper name is not a check,
// it is 33% noise (measured against shipped French A1 before they existed).

const item = (id, front, ex, extra = {}) => ({
  id, type: "vocab", front, reading: front.replace(/[^a-z]/g, ""),
  meaning: extra.meaning ?? "x", accept: extra.accept ?? [],
  example: { jp: ex, en: extra.en ?? "" },
});
const unit = (order, title, items, opts = {}) => ({
  id: `fr-u${order}`, lang: "fr", order, stage: "a1", title,
  lessons: opts.stub
    ? [{ id: `fr-u${order}l1`, title: "Lesson 1", locked: true }]
    : [{ id: `fr-u${order}l1`, unit: order, lesson: 1, title: "L1", canDo: "x", cefr: "A1", items }],
});
const warn = (units) => exampleScopeWarnings(units);

test("flags a word used before it is taught", () => {
  const w = warn([unit(1, "Un", [item("a", "le chat", "Le chat mange.")])]);
  assert.equal(w.length, 1);
  assert.match(w[0], /"mange"/);
});

test("a word taught in an earlier unit is fine", () => {
  const w = warn([
    unit(1, "Un", [item("a", "mange", "Mange !")]),
    unit(2, "Deux", [item("b", "le chat", "Le chat mange.")]),
  ]);
  assert.deepEqual(w, []);
});

test("a word taught in the SAME unit is fine (a unit may use its own words)", () => {
  const w = warn([unit(1, "Un", [item("a", "le chat", "Le chat dort."), item("b", "dort", "Dort.")])]);
  assert.deepEqual(w, []);
});

test("an inflection of a taught word is not a new word", () => {
  // ami -> amis. Short fronts must be indexed too; they were not, and the plural
  // of every three-letter noun was reported as untaught.
  const w = warn([
    unit(1, "Un", [item("a", "ami", "Un ami.")]),
    unit(2, "Deux", [item("b", "les gens", "Les gens sont mes amis.", {})]),
  ]);
  assert.equal(w.filter((m) => /"amis"/.test(m)).length, 0);
});

test("a long gap is NOT excused as inflection", () => {
  // "par" must not vouch for "parlons" — that is a different word.
  const w = warn([
    unit(1, "Un", [item("a", "par", "Par ici.")]),
    unit(2, "Deux", [item("b", "ici", "Nous parlons ici.")]),
  ]);
  assert.equal(w.filter((m) => /"parlons"/.test(m)).length, 1);
});

test("proper names are free", () => {
  const w = warn([
    unit(1, "Un", [item("a", "le frère", "Paul est le frère de Marie.", { en: "Paul is Marie's brother." })]),
  ]);
  assert.equal(w.filter((m) => /"paul"|"marie"/.test(m)).length, 0);
});

test("a name used ONLY at the start of a sentence is still a name", () => {
  // Position evidence can never see this one; the English gloss can.
  const w = warn([
    unit(1, "Un", [item("a", "ici", "Paul est ici.", { en: "Paul is here." })]),
  ]);
  assert.equal(w.filter((m) => /"paul"/.test(m)).length, 0);
});

test("an English sentence-initial article does not whitelist a French word", () => {
  // "The" starts the gloss but "the" is not a word of the French sentence, so it
  // must not leak into the proper-name set.
  const w = warn([unit(1, "Un", [item("a", "le", "Le chien.", { en: "The dog." })])]);
  assert.equal(w.filter((m) => /"chien"/.test(m)).length, 1);
});

test("a transparent cognate glossed in its own English is free", () => {
  const w = warn([
    unit(1, "Un", [item("a", "la chose", "C'est important.", { meaning: "important thing", en: "It's important." })]),
  ]);
  assert.equal(w.filter((m) => /"important"/.test(m)).length, 0);
});

test("elision splits: d'eau is de + eau, not a new word", () => {
  const w = warn([
    unit(1, "Un", [item("a", "de", "De la."), item("b", "eau", "Eau.")]),
    unit(2, "Deux", [item("c", "le corps", "Le corps a besoin d'eau.", {})]),
  ]);
  assert.equal(w.filter((m) => /"d'eau"|"eau"/.test(m)).length, 0);
});

test("the sounds unit is exempt — it teaches pronunciation through real words", () => {
  const w = warn([unit(1, "Les sons", [item("a", "é", "Le café est chaud.")])]);
  assert.deepEqual(w, []);
});

test("units behind an unauthored stub are skipped, not shouted about", () => {
  // The normal state of a mid-flight block branch: block 3 authored, blocks 1-2
  // still stubs. Checking anyway measured 89.9% "unknown" — noise, not findings.
  const w = warn([
    unit(1, "Un", [], { stub: true }),
    unit(2, "Deux", [item("b", "le chat", "Le chat mange une pomme.")]),
  ]);
  assert.deepEqual(w, []);
});

test("Japanese is skipped — no word boundaries to tokenise", () => {
  const ja = {
    id: "ja-u1", lang: "ja", order: 1, stage: "a1", title: "かず",
    lessons: [{
      id: "ja-u1l1", unit: 1, lesson: 1, title: "L1", canDo: "x", cefr: "A1",
      items: [{ id: "ja-a", type: "vocab", front: "ねこ", reading: "neko", meaning: "cat", accept: [], example: { jp: "ねこがいます。", en: "There is a cat." } }],
    }],
  };
  assert.deepEqual(warn([ja]), []);
});
