// Japanese verb conjugation engine — the rule-based core the `conjugate` card drills.
// ─────────────────────────────────────────────────────────────────────────────
// Pure functions: given a verb's ます-form + its group (godan/ichidan/irregular),
// produce a target conjugated form in KANA. The group is TAGGED DATA on the item
// (contract `group` field) — it is NOT inferred from the ending, because 帰る/走る/太る
// look ichidan but are godan. See BUILD-BRIEF-conjugation-card.md + verb-groups.js.
//
//   conjugate("のみます", "godan",    "te")   → "のんで"
//   conjugate("たべます", "ichidan",  "nai")  → "たべない"
//   conjugate("そうじします", "irregular", "ta") → "そうじした"
//
// Forms (the full N4 set): dict · nai · ta · te · tara · ba · potential · volitional
//   · passive · causative · causative_passive · imperative.
// Returns the kana string, or null if the input can't be conjugated.
// ─────────────────────────────────────────────────────────────────────────────

export const CONJ_FORMS = [
  "dict", "nai", "ta", "te", "tara", "ba", "potential", "volitional",
  "passive", "causative", "causative_passive", "imperative",
];

export const CONJ_FORM_LABEL = {
  dict: "plain (dictionary)",
  nai: "plain negative (～ない)",
  ta: "plain past (～た)",
  te: "て-form",
  tara: "conditional (～たら)",
  ba: "conditional (～ば)",
  potential: "potential (can ～)",
  volitional: "volitional (let's ～)",
  passive: "passive (～られる/～される)",
  causative: "causative (make/let ～)",
  causative_passive: "causative-passive (be made to ～)",
  imperative: "imperative (command)",
};

// Godan: the ます-stem ends in an い-column kana. Map it to the other columns of its
// consonant family + the special て/た euphonic endings (which REPLACE the last kana).
const GODAN = {
  "き": { u: "く", a: "か", e: "け", o: "こ", te: "いて", ta: "いた" },
  "ぎ": { u: "ぐ", a: "が", e: "げ", o: "ご", te: "いで", ta: "いだ" },
  "し": { u: "す", a: "さ", e: "せ", o: "そ", te: "して", ta: "した" },
  "ち": { u: "つ", a: "た", e: "て", o: "と", te: "って", ta: "った" },
  "に": { u: "ぬ", a: "な", e: "ね", o: "の", te: "んで", ta: "んだ" },
  "び": { u: "ぶ", a: "ば", e: "べ", o: "ぼ", te: "んで", ta: "んだ" },
  "み": { u: "む", a: "ま", e: "め", o: "も", te: "んで", ta: "んだ" },
  "り": { u: "る", a: "ら", e: "れ", o: "ろ", te: "って", ta: "った" },
  "い": { u: "う", a: "わ", e: "え", o: "お", te: "って", ta: "った" }, // う-verbs: あ-col is わ
};

// Irregular verbs — full forms (their vowels shift, so no stem+suffix rule works).
const SURU = { dict: "する", nai: "しない", ta: "した", te: "して", tara: "したら", ba: "すれば", potential: "できる", volitional: "しよう", passive: "される", causative: "させる", causative_passive: "させられる", imperative: "しろ" };
const KURU = { dict: "くる", nai: "こない", ta: "きた", te: "きて", tara: "きたら", ba: "くれば", potential: "こられる", volitional: "こよう", passive: "こられる", causative: "こさせる", causative_passive: "こさせられる", imperative: "こい" };
// Godan verbs that break the euphonic rule / negative:
const IKU  = { dict: "いく", nai: "いかない", ta: "いった", te: "いって", tara: "いったら", ba: "いけば", potential: "いける", volitional: "いこう", passive: "いかれる", causative: "いかせる", causative_passive: "いかされる", imperative: "いけ" };
// ある is defective for the volitional-of-agency forms: no passive/causative/
// causative-passive (nothing "makes" an inanimate thing exist); imperative あれ is
// archaic but valid. Missing forms fall through to null.
const ARU  = { dict: "ある", nai: "ない", ta: "あった", te: "あって", tara: "あったら", ba: "あれば", potential: "ありえる", volitional: "あろう", imperative: "あれ" };

export function conjugate(masu, group, form) {
  if (typeof masu !== "string" || !masu.endsWith("ます") || !CONJ_FORMS.includes(form)) return null;
  const stem = masu.slice(0, -2); // drop ます

  if (group === "irregular") {
    if (masu === "きます") return KURU[form] ?? null;
    if (masu.endsWith("します")) {
      const s = SURU[form];
      return s ? masu.slice(0, -3) + s : null; // そうじ + する-forms
    }
    return null;
  }

  if (group === "ichidan") {
    // Note: ichidan potential and passive are identically ～られる (a real
    // syncretism in Japanese), so both map to the same suffix here.
    const suf = {
      dict: "る", nai: "ない", ta: "た", te: "て", tara: "たら", ba: "れば",
      potential: "られる", volitional: "よう",
      passive: "られる", causative: "させる", causative_passive: "させられる", imperative: "ろ",
    };
    return suf[form] ? stem + suf[form] : null;
  }

  if (group === "godan") {
    if (masu === "いきます") return IKU[form] ?? null;
    if (masu === "あります") return ARU[form] ?? null;
    const last = stem.slice(-1);
    const g = GODAN[last];
    if (!g) return null;
    const pre = stem.slice(0, -1);
    switch (form) {
      case "dict": return pre + g.u;
      case "te": return pre + g.te;
      case "ta": return pre + g.ta;
      case "tara": return pre + g.ta + "ら";
      case "nai": return pre + g.a + "ない";
      case "potential": return pre + g.e + "る";
      case "ba": return pre + g.e + "ば";
      case "volitional": return pre + g.o + "う";
      // あ-column stem carries passive (～れる) and causative (～せる); the
      // causative-passive stacks them (～せられる). Imperative is the bare え-column.
      case "passive": return pre + g.a + "れる";
      case "causative": return pre + g.a + "せる";
      case "causative_passive": return pre + g.a + "せられる";
      case "imperative": return pre + g.e;
      default: return null;
    }
  }
  return null;
}
