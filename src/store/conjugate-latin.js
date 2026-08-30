// Latin-script verb conjugation — the es/fr half of the `conjugate` card.
// ─────────────────────────────────────────────────────────────────────────────
// The Japanese engine (conjugate.js) could not serve these languages: it drills
// FORM (て, ない, 可能), and a Latin verb's drill is TENSE × PERSON. So a Latin
// `conjForm` is a compound id — `<tense>-<person>`:
//
//   conjugateLatin("es", "hablar",  null,        "pres-1s") → "hablo"
//   conjugateLatin("es", "tener",   "irregular", "fut-3p")  → "tendrán"
//   conjugateLatin("fr", "finir",   null,        "imperf-1p") → "finissions"
//   conjugateLatin("fr", "être",    "irregular", "fut-1s")  → "serai"
//
// `front` is the INFINITIVE. Returns the conjugated string, or null if the verb
// or form can't be produced — the router treats null as "don't show this card",
// so an unknown irregular degrades to the other card kinds instead of teaching a
// wrong form. Never guess a form: an absent table entry is a null, not a regular
// fallback.
//
// WHY `group` IS OPTIONAL HERE (it is required for Japanese)
// The ja engine refuses to infer the class because 帰る/走る/太る look ichidan and
// are godan — the ending genuinely does not decide. In Spanish and French it does:
// the infinitive ending IS the regular class (-ar/-er/-ir · -er/-ir/-re), and
// irregularity is decided by table membership, which is a lookup, not a guess. So
// content may tag `group` and it is honoured, but it is derived when absent. That
// is the difference between a content lane having to re-tag every verb and not.
// ─────────────────────────────────────────────────────────────────────────────

export const PERSONS = ["1s", "2s", "3s", "1p", "2p", "3p"];

// The tenses the A2 drill units actually teach (es u38-39 · fr u45-46): the
// present, the imperfect, and the future. Adding one is a table, not a rewrite.
export const TENSES = ["pres", "imperf", "fut"];

export const LATIN_FORMS = [];
for (const t of TENSES) for (const p of PERSONS) LATIN_FORMS.push(`${t}-${p}`);

const PERSON_LABEL = {
  es: { "1s": "yo", "2s": "tú", "3s": "él/ella", "1p": "nosotros", "2p": "vosotros", "3p": "ellos" },
  fr: { "1s": "je", "2s": "tu", "3s": "il/elle", "1p": "nous", "2p": "vous", "3p": "ils/elles" },
};
const TENSE_LABEL = {
  es: { pres: "presente", imperf: "imperfecto", fut: "futuro" },
  fr: { pres: "présent", imperf: "imparfait", fut: "futur" },
};

// "futuro · ellos" — what the card prints above the input.
export function latinFormLabel(lang, form) {
  const [tense, person] = String(form ?? "").split("-");
  const t = TENSE_LABEL[lang]?.[tense];
  const p = PERSON_LABEL[lang]?.[person];
  return t && p ? `${t} · ${p}` : form;
}

const idx = (person) => PERSONS.indexOf(person);

// ── Spanish ──────────────────────────────────────────────────────────────────
const ES_ENDINGS = {
  pres: {
    ar: ["o", "as", "a", "amos", "áis", "an"],
    er: ["o", "es", "e", "emos", "éis", "en"],
    ir: ["o", "es", "e", "imos", "ís", "en"],
  },
  imperf: {
    ar: ["aba", "abas", "aba", "ábamos", "abais", "aban"],
    er: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    ir: ["ía", "ías", "ía", "íamos", "íais", "ían"],
  },
};
// The future is built on the WHOLE infinitive, not the stem — one ending set for
// all three classes. Irregular verbs replace the stem but keep these endings.
const ES_FUT_ENDINGS = ["é", "ás", "á", "emos", "éis", "án"];

// Irregular future stems — the ending set above still applies.
const ES_FUT_STEM = {
  tener: "tendr", poder: "podr", hacer: "har", decir: "dir", salir: "saldr",
  venir: "vendr", poner: "pondr", querer: "querr", saber: "sabr", haber: "habr",
  caber: "cabr", valer: "valdr",
};

// Fully irregular present/imperfect forms. A verb absent here uses the regular
// rule; a verb present here uses ONLY what it lists (a missing tense falls
// through to the regular rule, which is correct for e.g. ser's imperfect being
// listed but its future being regular).
const ES_IRREGULAR = {
  ser: {
    pres: ["soy", "eres", "es", "somos", "sois", "son"],
    imperf: ["era", "eras", "era", "éramos", "erais", "eran"],
  },
  estar: {
    pres: ["estoy", "estás", "está", "estamos", "estáis", "están"],
  },
  ir: {
    pres: ["voy", "vas", "va", "vamos", "vais", "van"],
    imperf: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
  },
  haber: { pres: ["he", "has", "ha", "hemos", "habéis", "han"] },
  tener: { pres: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] },
  hacer: { pres: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"] },
  poder: { pres: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
  querer: { pres: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] },
  saber: { pres: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"] },
  decir: { pres: ["digo", "dices", "dice", "decimos", "decís", "dicen"] },
  venir: { pres: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"] },
  poner: { pres: ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"] },
  salir: { pres: ["salgo", "sales", "sale", "salimos", "salís", "salen"] },
  dar: { pres: ["doy", "das", "da", "damos", "dais", "dan"] },
  ver: {
    pres: ["veo", "ves", "ve", "vemos", "veis", "ven"],
    imperf: ["veía", "veías", "veía", "veíamos", "veíais", "veían"],
  },
};

function conjugateEs(inf, form) {
  const [tense, person] = String(form).split("-");
  const i = idx(person);
  if (i < 0 || !TENSES.includes(tense)) return null;

  const irr = ES_IRREGULAR[inf]?.[tense];
  if (irr) return irr[i] ?? null;

  if (tense === "fut") {
    const stem = ES_FUT_STEM[inf] ?? inf; // regular: the whole infinitive
    return stem + ES_FUT_ENDINGS[i];
  }

  const cls = /ar$/.test(inf) ? "ar" : /er$/.test(inf) ? "er" : /ir$/.test(inf) ? "ir" : null;
  if (!cls) return null;
  return inf.slice(0, -2) + ES_ENDINGS[tense][cls][i];
}

// ── French ───────────────────────────────────────────────────────────────────
const FR_ENDINGS = {
  pres: {
    er: ["e", "es", "e", "ons", "ez", "ent"],
    // The -ir class that takes the -iss- infix (finir, choisir, réussir). Verbs
    // like partir/sortir/dormir do NOT, which is why they are tabled below rather
    // than left to this rule.
    ir: ["is", "is", "it", "issons", "issez", "issent"],
    re: ["s", "s", "", "ons", "ez", "ent"],
  },
  // The imperfect is built off the nous-present stem for every French verb; for
  // regular classes that stem is predictable, so it lives here as endings.
  imperf: {
    er: ["ais", "ais", "ait", "ions", "iez", "aient"],
    ir: ["issais", "issais", "issait", "issions", "issiez", "issaient"],
    re: ["ais", "ais", "ait", "ions", "iez", "aient"],
  },
};
const FR_FUT_ENDINGS = ["ai", "as", "a", "ons", "ez", "ont"];

const FR_FUT_STEM = {
  être: "ser", avoir: "aur", aller: "ir", faire: "fer", pouvoir: "pourr",
  vouloir: "voudr", devoir: "devr", savoir: "saur", venir: "viendr",
  tenir: "tiendr", voir: "verr", envoyer: "enverr", falloir: "faudr",
  valoir: "vaudr", courir: "courr", mourir: "mourr", recevoir: "recevr",
};

const FR_IRREGULAR = {
  être: {
    pres: ["suis", "es", "est", "sommes", "êtes", "sont"],
    imperf: ["étais", "étais", "était", "étions", "étiez", "étaient"],
  },
  avoir: {
    pres: ["ai", "as", "a", "avons", "avez", "ont"],
    imperf: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
  },
  aller: {
    pres: ["vais", "vas", "va", "allons", "allez", "vont"],
    imperf: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
  },
  faire: {
    pres: ["fais", "fais", "fait", "faisons", "faites", "font"],
    imperf: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
  },
  pouvoir: {
    pres: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
    imperf: ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
  },
  vouloir: {
    pres: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
    imperf: ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
  },
  devoir: {
    pres: ["dois", "dois", "doit", "devons", "devez", "doivent"],
    imperf: ["devais", "devais", "devait", "devions", "deviez", "devaient"],
  },
  savoir: {
    pres: ["sais", "sais", "sait", "savons", "savez", "savent"],
    imperf: ["savais", "savais", "savait", "savions", "saviez", "savaient"],
  },
  venir: {
    pres: ["viens", "viens", "vient", "venons", "venez", "viennent"],
    imperf: ["venais", "venais", "venait", "venions", "veniez", "venaient"],
  },
  prendre: {
    pres: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
    imperf: ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
  },
  mettre: {
    pres: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
    imperf: ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
  },
  dire: {
    pres: ["dis", "dis", "dit", "disons", "dites", "disent"],
    imperf: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
  },
  voir: {
    pres: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
    imperf: ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
  },
  // -ir verbs WITHOUT the -iss- infix — regular-looking, so they must be tabled
  // or the rule above would produce "partis/partissons".
  partir: {
    pres: ["pars", "pars", "part", "partons", "partez", "partent"],
    imperf: ["partais", "partais", "partait", "partions", "partiez", "partaient"],
  },
  sortir: {
    pres: ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
    imperf: ["sortais", "sortais", "sortait", "sortions", "sortiez", "sortaient"],
  },
  dormir: {
    pres: ["dors", "dors", "dort", "dormons", "dormez", "dorment"],
    imperf: ["dormais", "dormais", "dormait", "dormions", "dormiez", "dormaient"],
  },
};

function conjugateFr(inf, form) {
  const [tense, person] = String(form).split("-");
  const i = idx(person);
  if (i < 0 || !TENSES.includes(tense)) return null;

  const irr = FR_IRREGULAR[inf]?.[tense];
  if (irr) return irr[i] ?? null;

  if (tense === "fut") {
    // Regular: the infinitive, minus a final -e for the -re class.
    const stem = FR_FUT_STEM[inf] ?? (/re$/.test(inf) ? inf.slice(0, -1) : inf);
    return stem + FR_FUT_ENDINGS[i];
  }

  const cls = /er$/.test(inf) ? "er" : /ir$/.test(inf) ? "ir" : /re$/.test(inf) ? "re" : null;
  if (!cls) return null;
  const stem = inf.slice(0, -2);
  return stem + FR_ENDINGS[tense][cls][i];
}

const ENGINES = { es: conjugateEs, fr: conjugateFr };

export const LATIN_LANGS = Object.keys(ENGINES);

// Verb classes a language's content may tag. `irregular` is accepted for parity
// with Japanese and as an author's assertion, but nothing depends on it: the
// engine tables the irregulars by infinitive, so the tag is documentation.
export const LATIN_VERB_GROUPS = {
  es: ["ar", "er", "ir", "irregular"],
  fr: ["er", "ir", "re", "irregular"],
};

export function conjugateLatin(lang, infinitive, _group, form) {
  const engine = ENGINES[lang];
  if (!engine || typeof infinitive !== "string" || !infinitive) return null;
  const inf = infinitive.trim().toLowerCase();
  if (/\s/.test(inf)) return null; // a phrase, not a verb — never guess
  try {
    return engine(inf, form) || null;
  } catch {
    return null;
  }
}
