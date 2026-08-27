import { KANJIVG } from "./kanjivg.js";

// Curriculum lint — the mechanical authoring rules CC used to check by hand, now
// an automated gate (BUILD-BRIEF-curriculum-lint.md, Part 1). This is a LAYER ON
// TOP of contract.js's `validateContent` (which already enforces id format +
// uniqueness, stage enum, kana-front and vocab-front uniqueness, KanjiVG-for-kana,
// and reading normalizability). Here we add the rules a lint can mechanically
// enforce but the contract didn't yet: per-type key sets, the romaji/macron
// reading STYLE, を=wo, gojūon ordering within a script unit, teach-front scope,
// per-lesson density, and forward-compatible kanji rules.
//
// What the lint CANNOT check is language NATURALNESS (particle choice, register,
// idiomatic collocation) — that's the batched native-speaker gate (brief Part 2),
// never a test and never in Claude's required path.
//
// Returns { errors, warnings }. errors → CI fails; warnings → advisory.

const VALID_STAGE = ["pre-a1", "a1", "a2", "b1", "b2"];
const STAGE_RANK = { "pre-a1": 0, a1: 1, a2: 2, b1: 3, b2: 4 };

// Exact key set allowed per item type. A key outside the set is a stray-key error;
// every required key must be present.
const TYPE_KEYS = {
  kana: { required: ["id", "type", "front", "reading", "meaning", "example"], optional: ["hint"] },
  // group + conjForm are the optional verb-conjugation tags the contract allows
  // (contract.js ITEM_KEYS) — a group-tagged verb with a conjForm routes to the
  // conjugate card. Listed here so the lint's key allowlist matches the contract.
  vocab: { required: ["id", "type", "front", "reading", "meaning", "example", "accept"], optional: ["hint", "group", "conjForm"] },
  // Forward-compatible: a `kanji` item type doesn't exist in the contract yet
  // (validateContent rejects it). When it ships, these rules activate.
  kanji: { required: ["id", "type", "front", "reading", "meaning", "example", "accept"], optional: ["hint"] },
};

// Gojūon order as CHARACTERS (not readings — ぢ/づ share readings with じ/ず, so a
// reading-keyed rank would mis-order the d-row). Base 46 → dakuten → handakuten,
// for hiragana and katakana. A kana item's rank is its front char's index here;
// within a single-script unit the ranks must be non-decreasing in authored order.
const HIRA_ORDER =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん" +
  "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const KATA_ORDER =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const GOJUON_RANK = {};
[HIRA_ORDER, KATA_ORDER].forEach((s) => [...s].forEach((ch, i) => { GOJUON_RANK[ch] = i; }));

const isKana = (ch) => {
  const cp = ch.codePointAt(0);
  return (cp >= 0x3040 && cp <= 0x309f) || (cp >= 0x30a0 && cp <= 0x30ff);
};

// A reading is well-formed romaji: lowercase, only a-z + the long-vowel macrons,
// and it spells long o/u with a macron (ō/ū) rather than ou/oo/uu. Per the brief,
// ei stays ei and ii stays ii (native long vowels), so those are NOT flagged.
const READING_CHARSET = /^[a-zāēīōū]+$/;
const MACRON_SHOULD_BE = /(ou|oo|uu)/; // these long vowels should be ō/ū

// --- scaffold working titles -------------------------------------------------
// `npm run scaffold:lang` stamps an ENGLISH working title on every stub unit; the
// authoring seat is meant to replace it with a real target-language title (see
// RUNBOOK-new-language.md §4). Nothing checked that it happened, and the rule was
// documented only inside the scaffold script — a file no authoring seat opens — so
// three of the first nine blocks handed back 21 authored units still carrying
// "Greetings", "Grammar 4 — compound and linked clauses", "Vocabulary 1 (A2)".
// They validated green and would have rendered English titles on the Ladder of a
// Spanish and a French course.
//
// A LOCKED STUB keeps its working title legitimately — that is what it is for — so
// this fires only once a unit is authored (any unlocked lesson carrying items).
// Kept in sync with scripts/scaffold-language.mjs by tests/unit/scaffold.test.mjs,
// which reads that file and fails if a template title is missing here.
export const SCAFFOLD_TITLES = new Set([
  // A1
  "Sounds and spelling", "Greetings", "Introducing yourself", "Family",
  "Numbers and time", "Food and drink", "Town and places", "Colors and weather",
  "Days and months", "Describing things", "Body and health",
  "Grammar 1 — basic sentence", "Grammar 2 — verbs and particles",
  "Grammar 3 — past tense and agreement",
  // A2
  "Activities and routine", "Feelings and states", "Travel and transport",
  "Work and school", "Health and the body", "Nature and animals",
  "Shopping and money", "Time and adverbs", "Connecting words", "Home and household",
  "Personality and character", "Society and daily life",
  "Technology and communication", "Nature and science", "Culture and leisure",
  "Grammar 4 — compound and linked clauses",
  "Grammar 5 — conditionals, ability, comparison",
  "Conjugation drill 1", "Conjugation drill 2",
  // B1
  "Opinion and agreement", "Cause and consequence", "Comparison and degree",
  "Hedging and uncertainty", "News and society", "Work and process",
  "Emotion, finer shades", "Abstract ideas", "Change over time",
  "Problems and solutions", "Rules, permission, obligation", "Plans and intentions",
  "Experience and memory", "Media and entertainment", "Environment and place",
  "Money and the economy", "Health and wellbeing", "Relationships and society",
  "Grammar 6 — linked and subordinate clauses",
  "Grammar 7 — passive, causative, indirect",
  "Grammar 8 — nuance, evidentiality, nominalization",
  "Register 1 — polite vs plain", "Register 2 — softening and formality",
  // B2
  "Argument and persuasion", "Evidence and sources", "Systems and abstraction",
  "Nuance and degree", "Politics and law", "Business and negotiation",
  "Science and technology", "History and culture", "Arts and criticism",
  "Ethics and responsibility", "Risk and uncertainty", "Identity and society",
  "Career and organisations", "Environment and the global", "Health systems and care",
  "Education and research", "Media and narrative", "Emotion, subtle and mixed",
  "Grammar 9 — conditional nuance and counterfactuals",
  "Grammar 10 — formal written structures",
  "Grammar 11 — discourse, cohesion, hedged claims",
  "Register 3 — 敬語: humble and honorific",
  "Register 4 — written, public and institutional voice",
]);
// The formulaic ones the scaffold builds by counter rather than from a list.
const SCAFFOLD_TITLE_PATTERNS = [
  /^Vocabulary \d+( \((?:A2|B1)\))?$/,
  /^Characters \d+( \((?:A2|B1)\))?$/,
  /^Script \d+$/,
];
const isScaffoldTitle = (t) =>
  SCAFFOLD_TITLES.has(t) || SCAFFOLD_TITLE_PATTERNS.some((re) => re.test(t));

// --- example vocabulary scope -------------------------------------------------
// RUNBOOK §4 calls this "the rule most likely to bite you in block 2 or 3":
// every example sentence may use only vocab introduced at or before its unit.
// Nothing enforced it — `example` appeared in this file only as a required field
// name — so across every card of every language it was honour-system, which is
// precisely the rule parallel block authoring depends on.
//
// WARNINGS, not errors, and deliberately so. Measured against shipped French A1,
// a naive exact-match check flags 32.9% of examples; nearly all of that is
// morphology (grande/grand, heures/heure), proper names, cognates and elision,
// not defects. With the exemptions below it settles at ~5% on French and ~2% on
// Spanish block 1, and those remaining flags are mostly real. That is a good
// review list and a bad gate — a 5% false-positive error would train seats to
// work around it, so it advises and the seat judges.
const STEM = 4;
const ELIDED = { j: "je", n: "ne", l: "le", d: "de", qu: "que", c: "ce", s: "se", m: "me", t: "te" };
const foldAccents = (s) => (s || "").normalize("NFD").replace(/\p{M}+/gu, "");
const lower = (s) => (s || "").toLowerCase().replace(/[’']/g, "'");

// Word pieces. Apostrophes split: "d'eau" is de + eau, two separately-taught
// items, and the clitic maps back to its full form so it matches the taught front.
function wordPieces(s) {
  const out = [];
  for (const chunk of lower(s).split(/[^\p{L}'-]+/u).filter(Boolean)) {
    const parts = chunk.split("'");
    parts.forEach((p, i) => {
      if (p) out.push(i < parts.length - 1 ? ELIDED[p] ?? p : p);
    });
  }
  return out;
}
const sharesPrefix = (a, b, n) => {
  const f = foldAccents(a), g = foldAccents(b);
  let i = 0;
  while (i < f.length && i < g.length && f[i] === g[i]) i++;
  return i >= n;
};
// Latin-script only. Japanese has no word boundaries, so tokenising an example
// yields one giant "word" and every sentence would flag. A real ja check needs a
// morphological analyser; until then this stays silent there rather than lying.
const isLatinLang = (units) => {
  const fronts = units.flatMap((u) => (u.lessons ?? []).flatMap((l) => (l.items ?? []).map((i) => i.front)));
  if (!fronts.length) return false;
  const latin = fronts.filter((f) => /^[\p{Script=Latin}\P{L}]+$/u.test(f || "")).length;
  return latin / fronts.length > 0.5;
};

export function exampleScopeWarnings(units) {
  const out = [];
  const byLang = new Map();
  for (const u of units) {
    if (!byLang.has(u.lang)) byLang.set(u.lang, []);
    byLang.get(u.lang).push(u);
  }

  for (const [lang, all] of byLang) {
    if (!isLatinLang(all)) continue;
    const ordered = [...all].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    // Proper names are free (RUNBOOK §4). Two independent signals, because either
    // alone has a hole:
    //   1. Capitalised somewhere other than sentence-initially — position tells us
    //      what casing alone cannot.
    //   2. Capitalised in the item's own ENGLISH gloss. A name is a name in both
    //      languages, but an ordinary French word never shows up capitalised in
    //      its English translation. This is what catches a name used ONLY at the
    //      start of a sentence, which signal 1 can never see: "Paul est le frère
    //      de Marie." / "Paul is Marie's brother."
    const proper = new Set();
    for (const u of ordered)
      for (const l of u.lessons ?? [])
        for (const it of l.items ?? []) {
          const raw = (it.example?.jp ?? "").split(/[^\p{L}'’-]+/u).filter(Boolean);
          raw.forEach((w, i) => {
            if (i !== 0 && /^\p{Lu}/u.test(w)) wordPieces(w).forEach((p) => proper.add(p));
          });
          const enCaps = (it.example?.en ?? "").split(/[^\p{L}'’-]+/u).filter((w) => /^\p{Lu}/u.test(w));
          for (const w of enCaps) {
            const p = lower(w);
            // Only if it also occurs in the target sentence — otherwise an
            // English sentence-initial "The" would whitelist "the".
            if (wordPieces(it.example?.jp ?? "").includes(p)) proper.add(p);
          }
        }

    const introduced = new Set();
    const stems = new Map();
    // Index on 3 chars, not on STEM. Indexing on 4 silently excluded every taught
    // word shorter than four letters, so "ami" never entered the table and its
    // own plural "amis" was reported as untaught vocabulary. Short words are most
    // of a beginner unit, so that hole covered exactly the wrong words.
    const KEY = 3;
    const add = (t) => {
      introduced.add(t);
      if (t.length >= KEY) {
        const k = t.slice(0, KEY);
        if (!stems.has(k)) stems.set(k, []);
        stems.get(k).push(t);
      }
    };
    // One is a prefix of the other, and they differ by at most 3 characters.
    // The length bound is what keeps this from excusing anything: without it
    // "par" would vouch for "parlons". Suffixal inflection (plural -s, feminine
    // -e, -ons/-ez) is short by nature; a longer gap is a different word.
    const isInflection = (t) => {
      if (t.length < KEY) return false;
      for (const c of stems.get(t.slice(0, KEY)) ?? []) {
        const [short, long] = t.length <= c.length ? [t, c] : [c, t];
        if (long.startsWith(short) && long.length - short.length <= 3) return true;
      }
      return false;
    };

    let stubFrom = null;
    for (const u of ordered) {
      const items = (u.lessons ?? []).filter((l) => !l.locked && l.items).flatMap((l) => l.items);
      // A unit may use its own new words, so introduce the whole unit first.
      for (const it of items) for (const t of wordPieces(it.front)) add(t);

      // Behind an unauthored stub the vocabulary debt is unknowable: the words a
      // later unit legitimately depends on are simply not in the tree yet. On a
      // mid-flight block branch that is the normal state — block 3 measured 89.9%
      // "unknown" purely because blocks 1-2 were still stubs. Skip, don't shout.
      if (stubFrom === null && !items.length) stubFrom = u.order ?? 0;
      if (stubFrom !== null && (u.order ?? 0) > stubFrom) continue;

      // The sounds/script unit teaches pronunciation THROUGH real words by design
      // (RUNBOOK §4), so its examples legitimately run ahead of the queue.
      if (/sons|sonidos|sounds|script/i.test(u.title ?? "")) continue;

      for (const it of items) {
        const ex = it.example?.jp;
        if (!ex) continue;
        const en = `${it.meaning ?? ""} ${(it.accept ?? []).join(" ")} ${it.example?.en ?? ""}`;
        const enWords = lower(en).split(/[^\p{L}]+/u).filter(Boolean);
        const unknown = [
          ...new Set(
            wordPieces(ex).filter(
              (t) =>
                !introduced.has(t) &&
                !proper.has(t) &&
                !isInflection(t) &&
                // Transparent cognate: shares a stem with its own English gloss
                // (enorme/enormous, importante/important). Accent-folded.
                !(t.length >= STEM && enWords.some((w) => sharesPrefix(t, w, STEM)))
            )
          ),
        ];
        if (unknown.length)
          out.push(
            `item ${it.id}: example "${ex}" uses ${unknown.map((w) => `"${w}"`).join(", ")} ` +
              `before ${unknown.length > 1 ? "they are" : "it is"} taught in ${lang} ` +
              `(RUNBOOK §4 — verify; morphology and cognates can false-positive)`
          );
      }
    }
  }
  return out;
}

export function lintCurriculum(units = []) {
  const errors = [];
  const warnings = [];
  const e = (msg) => errors.push(msg);
  const w = (msg) => warnings.push(msg);

  // lang + NUL + front → id  (kanji included; kana→word reuse stays allowed).
  // Scoped per language to match contract.js — "one home per word" is a
  // within-language rule; es "no" and it "no" are different words.
  //
  // The separator is the same NUL escape contract.js uses. It used to be a literal
  // space here while contract.js used NUL, so the two implementations of one rule
  // disagreed on the key despite the comment above claiming they matched. Harmless
  // in practice — language ids are fixed two-letter codes with no spaces, so no
  // real pair could collide — but the divergence is the kind that only becomes a
  // bug once an id shape changes, and it cost nothing to remove.
  const vocabFronts = new Map();
  // Kana/kanji chars introduced so far, in queue order — also per language, so a
  // second own-script language starts from an empty inventory.
  const introducedByLang = new Map(); // lang → Set(chars)

  for (const unit of units) {
    if (!Array.isArray(unit.lessons)) continue;
    const unitStage = unit.stage;
    const unitLang = unit.lang;
    if (!introducedByLang.has(unitLang)) introducedByLang.set(unitLang, new Set());
    const introduced = introducedByLang.get(unitLang);
    const kanaRanksInUnit = []; // [{rank, id}] for gojūon-order check

    // Authored unit still wearing its scaffold working title — it would render in
    // English on the Ladder of a non-English course. Stubs are exempt (see above).
    const authored = unit.lessons.some((l) => !l.locked && l.items?.length);
    if (authored && typeof unit.title === "string" && isScaffoldTitle(unit.title.trim()))
      e(
        `unit ${unit.id}: title "${unit.title}" is still the scaffold's English working title — ` +
          `rewrite it in ${unitLang} (RUNBOOK-new-language.md §4)`
      );

    for (const lesson of unit.lessons) {
      if (lesson.locked || !Array.isArray(lesson.items)) continue;

      let vocabCount = 0;
      for (const item of lesson.items) {
        const id = item.id ?? "(no id)";
        const type = item.type;

        // --- per-type exact key set ---
        const spec = TYPE_KEYS[type];
        if (spec) {
          const allowed = new Set([...spec.required, ...spec.optional]);
          for (const k of Object.keys(item)) {
            if (!allowed.has(k)) e(`item ${id}: key "${k}" is not allowed on a ${type} item`);
          }
          for (const k of spec.required) {
            if (!(k in item)) e(`item ${id}: ${type} item is missing required key "${k}"`);
          }
        }

        // --- reading style (romaji / macron) ---
        const r = item.reading;
        if (typeof r === "string" && r.length) {
          if (r !== r.toLowerCase()) e(`item ${id}: reading "${r}" must be lowercase`);
          else if (!READING_CHARSET.test(r))
            e(`item ${id}: reading "${r}" has characters outside [a-z] + macrons (ō ū ā ē ī)`);
          // The macron long-vowel spelling is a JAPANESE rōmaji style rule — "ou" is a
          // legitimate letter sequence in Latin-script languages (fr "bonjour", "où"),
          // so this check is scoped to ja units, never applied cross-language.
          else if (unit.lang === "ja" && MACRON_SHOULD_BE.test(r))
            e(`item ${id}: reading "${r}" spells a long vowel as ou/oo/uu — use a macron (ō/ū)`);
        }

        // --- を / ヲ must read "wo" ---
        if ((item.front === "を" || item.front === "ヲ") && r !== "wo")
          e(`item ${id}: "${item.front}" must have reading "wo" (got "${r}")`);

        // A yōon digraph (きょ, しゃ, ぎょ…) is kana spelled with two glyphs — a
        // combination of already-learned kana, with no single stroke entry.
        const comboKana = type === "kana" && [...(item.front || "")].length > 1;

        // density "card" count — vocab, kanji, and yōon digraphs each count.
        if (type === "vocab" || type === "kanji" || comboKana) vocabCount++;

        if (type === "vocab" || type === "kanji") {
          // accept[] present (may be empty)
          if (!Array.isArray(item.accept))
            w(`item ${id}: ${type} should have an accept[] array (may be empty)`);
          // per-language word-front uniqueness (kana→word reuse allowed: kana fronts not tracked here)
          if (typeof item.front === "string") {
            const key = `${unitLang}\u0000${item.front}`;
            if (vocabFronts.has(key))
              e(`item ${id}: word front "${item.front}" already taught in ${vocabFronts.get(key)}`);
            else vocabFronts.set(key, id);
          }
        }

        // Single-glyph kana + kanji: stroke data, gojūon order, teach-front scope.
        // yōon digraphs are exempt (they reuse known kana and have no own stroke).
        if ((type === "kana" && !comboKana) || type === "kanji") {
          // stroke data required
          if (typeof item.front === "string" && !KANJIVG[item.front])
            e(`item ${id}: ${type} "${item.front}" has no KanjiVG stroke entry`);
          // kanji only in a1+ stages
          if (type === "kanji" && (STAGE_RANK[unitStage] ?? 0) < STAGE_RANK.a1)
            e(`item ${id}: kanji items are not allowed in a "${unitStage}" unit (a1+ only)`);
          // scope: every char in a teach front must already be introduced (or be
          // this item's own single new glyph). Vocab/example words are exempt.
          if (typeof item.front === "string") {
            const chars = [...item.front].filter(isKana);
            const newGlyph = chars.length === 1 ? chars[0] : null;
            for (const ch of chars) {
              if (ch !== newGlyph && !introduced.has(ch))
                e(`item ${id}: teach front uses "${ch}" before it is introduced`);
            }
            if (type === "kana" && chars.length !== 1)
              e(`item ${id}: a kana item's front must be exactly one kana (got "${item.front}")`);
            chars.forEach((ch) => introduced.add(ch));
          }
          // collect gojūon rank for the unit-order check
          if (type === "kana" && GOJUON_RANK[item.front] !== undefined)
            kanaRanksInUnit.push({ rank: GOJUON_RANK[item.front], id });
        }
      }

      // --- density: ~5–8 cards per lesson (vocab/kanji/yōon); 0 is an error ---
      if (vocabCount === 0) e(`lesson ${lesson.id}: has no word/glyph cards`);
      else if (vocabCount < 5 || vocabCount > 8)
        w(`lesson ${lesson.id}: ${vocabCount} word cards (recommend 5–8)`);
    }

    // --- gojūon order within this (script) unit ---
    for (let i = 1; i < kanaRanksInUnit.length; i++) {
      if (kanaRanksInUnit[i].rank < kanaRanksInUnit[i - 1].rank) {
        e(`item ${kanaRanksInUnit[i].id}: kana is out of gojūon order within ${unit.id}`);
        break; // one message per unit is enough
      }
    }
  }

  // Cross-unit check: runs over the whole corpus in Ladder order, so it lives
  // outside the per-unit loop above.
  warnings.push(...exampleScopeWarnings(units));

  return { errors, warnings };
}
