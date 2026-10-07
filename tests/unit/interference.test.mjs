import test from "node:test";
import assert from "node:assert/strict";
import { conflictsWith, blockedBy, conflictReason } from "../../src/store/interference.js";
import { LANGUAGES } from "../../src/data/languages.js";
import { useStore } from "../../src/store/useStore.js";

// WHY THIS FILE EXISTS.
//
// Alex, 2026-10-06: "we allow two languages but cant be of same root like spanish
// and french cant be learned together cuz theyre too similar and users may get
// messed up but like say hindi and french or japanese and spanish etc", then
// "germanic and Norwegian dont look similar thats fine ... and Chinese and Japanese
// isnt allowed either".
//
// Those two sentences rule out the obvious implementation. A `family` field gets
// Japanese + Mandarin WRONG (different families, shared characters, must be
// blocked) and gets German + Norwegian wrong in the other direction (both Germanic,
// explicitly allowed). The tags encode confusability, not descent, and these tests
// pin the specific pairs he named so a future tidy-up toward "proper" language
// families fails loudly.

const blocked = (a, b) => blockedBy(a, [b], LANGUAGES) !== null;

// --- the pairs Alex named, by name ------------------------------------------

test("Spanish + French is BLOCKED — the pair he opened with", () => {
  assert.ok(blocked("es", "fr"));
  assert.ok(blocked("fr", "es"), "and it blocks in both directions");
});

test("Japanese + Mandarin is BLOCKED, though they are unrelated languages", () => {
  // Japonic and Sinitic. No family field would ever catch this; they share the
  // writing system, which is what a learner actually confuses.
  assert.ok(blocked("ja", "zh"));
  assert.ok(blocked("zh", "ja"));
});

test("German + Norwegian is ALLOWED — he called this one explicitly", () => {
  assert.equal(blocked("de", "no"), false);
});

test("Japanese + Spanish and Hindi + French are ALLOWED — his examples of fine pairs", () => {
  assert.equal(blocked("ja", "es"), false);
  assert.equal(blocked("hi", "fr"), false);
});

// --- the pairs the rule must catch that he did not have to name --------------

test("Norwegian + Swedish is BLOCKED — mutually readable, the worst pair in the catalog", () => {
  assert.ok(blocked("no", "sv"));
});

test("Spanish + Portuguese and Spanish + Italian are BLOCKED", () => {
  assert.ok(blocked("es", "pt"));
  assert.ok(blocked("es", "it"));
});

test("French + Haitian Creole is BLOCKED — a creole, not a Romance language", () => {
  // Its vocabulary comes from French, which is exactly the interference guarded
  // against. Descent says no; the learner says yes.
  assert.ok(blocked("fr", "ht"));
});

test("German + Dutch is BLOCKED, and Polish + Russian is BLOCKED", () => {
  assert.ok(blocked("de", "nl"));
  assert.ok(blocked("pl", "ru"));
});

test("Swahili + Yoruba is ALLOWED, though both are Niger-Congo", () => {
  // The other direction a family field gets wrong: same descent, no confusability.
  assert.equal(blocked("sw", "yo"), false);
});

test("Korean pairs freely, including with Japanese", () => {
  // Deliberate and written down: modern Korean is hangul, so the two do not blur on
  // the page. If the curriculum ever teaches hanja this test should be the thing
  // that forces the conversation.
  assert.equal(blocked("ko", "ja"), false);
  assert.equal(blocked("ko", "zh"), false);
});

// --- shape -------------------------------------------------------------------

test("a language never conflicts with itself", () => {
  for (const l of LANGUAGES) assert.deepEqual(conflictsWith(l.id, [l.id], LANGUAGES), []);
});

test("conflictsWith names every blocker, not just the first", () => {
  assert.deepEqual(conflictsWith("es", ["fr", "pt", "ja"], LANGUAGES).sort(), ["fr", "pt"]);
});

test("an untagged language conflicts with nothing", () => {
  const every = LANGUAGES.map((l) => l.id);
  for (const id of ["hi", "tr", "vi", "id", "sw", "ha", "yo", "tw", "ko"]) {
    assert.deepEqual(conflictsWith(id, every, LANGUAGES), [], `${id} should pair with anything`);
  }
});

test("the reason names the language, never the tag", () => {
  const msg = conflictReason("pt", "es", LANGUAGES);
  assert.match(msg, /Spanish/);
  assert.doesNotMatch(msg, /romance|tag/i, "'romance' means nothing to a learner");
});

// --- composed with the store rule --------------------------------------------

const setProfile = (p) => useStore.setState((s) => ({ profile: { ...s.profile, ...p } }));

test("canStartLanguage refuses an interfering pair and SAYS WHY", () => {
  setProfile({ languages: ["es"], activeLang: "es", languagesChosen: true });
  const v = useStore.getState().canStartLanguage("fr");
  assert.equal(v.ok, false);
  assert.equal(v.blocker, "es");
  assert.match(v.reason, /Spanish/);
});

test("canStartLanguage allows a clean second language from day one", () => {
  setProfile({ languages: ["es"], activeLang: "es", languagesChosen: true });
  assert.equal(useStore.getState().canStartLanguage("ja").ok, true);
});

test("interference outranks the free allowance — two slots do not buy a bad pair", () => {
  // The failure this prevents: "you have room" being read as "anything may fill it".
  setProfile({ languages: ["fr"], activeLang: "fr", languagesChosen: true });
  assert.equal(useStore.getState().canAddLanguage(), true, "there IS room");
  assert.equal(useStore.getState().canStartLanguage("pt").ok, false, "but not for Portuguese");
});
