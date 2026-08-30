import { test } from "node:test";
import assert from "node:assert/strict";
import { conjugateIn, conjFormsFor, verbGroupsFor, formLabelFor } from "../../src/store/conjugate.js";
import { LATIN_FORMS, PERSONS } from "../../src/store/conjugate-latin.js";

// Full six-person paradigms, so a table typo in ONE person can't hide behind its
// five neighbours — which is exactly how a conjugation table goes wrong.
const row = (lang, inf, tense, expected) =>
  test(`${lang} ${inf} ${tense}`, () => {
    PERSONS.forEach((p, i) => {
      assert.equal(conjugateIn(lang, inf, null, `${tense}-${p}`), expected[i], `${inf} ${tense}-${p}`);
    });
  });

// ── Spanish — the three regular classes ──────────────────────────────────────
row("es", "hablar", "pres", ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"]);
row("es", "comer", "pres", ["como", "comes", "come", "comemos", "coméis", "comen"]);
row("es", "vivir", "pres", ["vivo", "vives", "vive", "vivimos", "vivís", "viven"]);
row("es", "hablar", "imperf", ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"]);
row("es", "comer", "imperf", ["comía", "comías", "comía", "comíamos", "comíais", "comían"]);
row("es", "vivir", "imperf", ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"]);
row("es", "hablar", "fut", ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"]);
row("es", "vivir", "fut", ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"]);

// ── Spanish — the irregulars the drill units are built on ────────────────────
row("es", "ser", "pres", ["soy", "eres", "es", "somos", "sois", "son"]);
row("es", "ser", "imperf", ["era", "eras", "era", "éramos", "erais", "eran"]);
row("es", "ir", "pres", ["voy", "vas", "va", "vamos", "vais", "van"]);
row("es", "ir", "imperf", ["iba", "ibas", "iba", "íbamos", "ibais", "iban"]);
row("es", "tener", "pres", ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"]);
row("es", "tener", "fut", ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"]);
row("es", "hacer", "fut", ["haré", "harás", "hará", "haremos", "haréis", "harán"]);
row("es", "poder", "fut", ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"]);

test("es: an irregular present does not make the future irregular too", () => {
  // ser/estar/ir are irregular in the present and REGULAR in the future — the
  // per-tense table lookup is what keeps "seré" from becoming a special case.
  assert.equal(conjugateIn("es", "ser", null, "fut-1s"), "seré");
  assert.equal(conjugateIn("es", "ir", null, "fut-1s"), "iré");
  assert.equal(conjugateIn("es", "estar", null, "fut-1s"), "estaré");
  // ...and an irregular future stem does not disturb its regular imperfect.
  assert.equal(conjugateIn("es", "tener", null, "imperf-1s"), "tenía");
});

// ── French — the three regular classes ───────────────────────────────────────
row("fr", "parler", "pres", ["parle", "parles", "parle", "parlons", "parlez", "parlent"]);
row("fr", "finir", "pres", ["finis", "finis", "finit", "finissons", "finissez", "finissent"]);
row("fr", "vendre", "pres", ["vends", "vends", "vend", "vendons", "vendez", "vendent"]);
row("fr", "parler", "imperf", ["parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"]);
row("fr", "finir", "imperf", ["finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"]);
row("fr", "parler", "fut", ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"]);
row("fr", "vendre", "fut", ["vendrai", "vendras", "vendra", "vendrons", "vendrez", "vendront"]);

// ── French — the irregulars the drill units are built on ─────────────────────
row("fr", "être", "pres", ["suis", "es", "est", "sommes", "êtes", "sont"]);
row("fr", "être", "fut", ["serai", "seras", "sera", "serons", "serez", "seront"]);
row("fr", "avoir", "pres", ["ai", "as", "a", "avons", "avez", "ont"]);
row("fr", "avoir", "fut", ["aurai", "auras", "aura", "aurons", "aurez", "auront"]);
row("fr", "aller", "pres", ["vais", "vas", "va", "allons", "allez", "vont"]);
row("fr", "aller", "fut", ["irai", "iras", "ira", "irons", "irez", "iront"]);
row("fr", "faire", "fut", ["ferai", "feras", "fera", "ferons", "ferez", "feront"]);
row("fr", "être", "imperf", ["étais", "étais", "était", "étions", "étiez", "étaient"]);

test("fr: -ir verbs that refuse the -iss- infix are tabled, not regularised", () => {
  // The trap this table exists for: partir/sortir/dormir end in -ir but are not
  // finir-class. The regular rule would produce "partis"/"partissons".
  assert.equal(conjugateIn("fr", "partir", null, "pres-1s"), "pars");
  assert.equal(conjugateIn("fr", "partir", null, "pres-1p"), "partons");
  assert.equal(conjugateIn("fr", "dormir", null, "pres-3p"), "dorment");
  // ...while a real finir-class verb still takes it.
  assert.equal(conjugateIn("fr", "choisir", null, "pres-1p"), "choisissons");
});

// ── Refusing to guess ────────────────────────────────────────────────────────
test("returns null rather than inventing a form", () => {
  assert.equal(conjugateIn("es", "hablar", null, "pres-4s"), null); // no such person
  assert.equal(conjugateIn("es", "hablar", null, "subj-1s"), null); // tense not implemented
  assert.equal(conjugateIn("es", "hablar", null, "te"), null); // a JAPANESE form
  assert.equal(conjugateIn("fr", "chien", null, "pres-1s"), null); // not an infinitive
  assert.equal(conjugateIn("fr", "je serai", null, "pres-1s"), null); // a phrase, not a verb
  assert.equal(conjugateIn("es", "", null, "pres-1s"), null);
  assert.equal(conjugateIn("es", null, null, "pres-1s"), null);
  assert.equal(conjugateIn("de", "machen", null, "pres-1s"), null); // no engine for de
});

test("a tagged group is accepted but never needed", () => {
  // Content may assert the class; the engine derives it either way. Equal output
  // is the guarantee that content does NOT have to be re-tagged verb by verb.
  for (const [lang, inf, form] of [["es", "tener", "fut-3p"], ["fr", "être", "pres-1s"], ["es", "hablar", "pres-1s"]]) {
    assert.equal(conjugateIn(lang, inf, "irregular", form), conjugateIn(lang, inf, null, form));
  }
});

// ── The per-language vocabularies ────────────────────────────────────────────
test("each language exposes its own conjForm and group vocabularies", () => {
  assert.ok(conjFormsFor("es").includes("fut-1s"));
  assert.ok(conjFormsFor("fr").includes("imperf-3p"));
  assert.ok(!conjFormsFor("es").includes("te"), "a ja form is not a valid es form");
  assert.ok(conjFormsFor("ja").includes("te"));
  assert.ok(!conjFormsFor("ja").includes("fut-1s"), "a Latin form is not a valid ja form");

  assert.deepEqual(verbGroupsFor("es"), ["ar", "er", "ir", "irregular"]);
  assert.deepEqual(verbGroupsFor("fr"), ["er", "ir", "re", "irregular"]);
  assert.deepEqual(verbGroupsFor("ja"), ["godan", "ichidan", "irregular"]);

  assert.equal(LATIN_FORMS.length, 3 * 6); // 3 tenses x 6 persons
});

test("the card's prompt is in the learner's language", () => {
  assert.equal(formLabelFor("es", "fut-3p"), "futuro · ellos");
  assert.equal(formLabelFor("fr", "imperf-1p"), "imparfait · nous");
  assert.equal(formLabelFor("ja", "te"), "て-form"); // unchanged
});

// ── Japanese is untouched by any of this ─────────────────────────────────────
test("ja still routes through the Japanese engine", () => {
  assert.equal(conjugateIn("ja", "のみます", "godan", "te"), "のんで");
  assert.equal(conjugateIn("ja", "たべます", "ichidan", "nai"), "たべない");
  // No lang given at all = ja, which is what every existing caller passed.
  assert.equal(conjugateIn(undefined, "のみます", "godan", "te"), "のんで");
});
