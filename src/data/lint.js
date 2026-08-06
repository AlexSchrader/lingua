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
]);
// The formulaic ones the scaffold builds by counter rather than from a list.
const SCAFFOLD_TITLE_PATTERNS = [
  /^Vocabulary \d+( \((?:A2|B1)\))?$/,
  /^Characters \d+( \((?:A2|B1)\))?$/,
  /^Script \d+$/,
];
const isScaffoldTitle = (t) =>
  SCAFFOLD_TITLES.has(t) || SCAFFOLD_TITLE_PATTERNS.some((re) => re.test(t));

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

  return { errors, warnings };
}
