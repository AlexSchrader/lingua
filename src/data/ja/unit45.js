// Unit 45 — ぶんぽう・6 ("Grammar: conditionals & ability") — A2 / JLPT N4
// The N4 grammar that lets you say "if / when", "be able to", and "decide to":
// the three big conditionals (～たら / ～ば / ～なら), potential via ことができる,
// experience/occasion with ことがある, gradual change with ようになる, and
// decisions with ことにする. Modeled as function-word/suffix vocab whose examples
// carry the pattern; every example uses only earlier vocab.
// NOTE: naturalness-critical — flagged for the batch native review.
// lang/unit/lesson stamped in index.js.
export const UNIT45 = {
  id: "ja-u45",
  lang: "ja",
  title: "ぶんぽう・6",
  order: 45,
  stage: "a2",
  lessons: [
    {
      id: "ja-u45l1",
      unit: 45,
      lesson: 1,
      title: "Conditionals & ability",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say 'if / when' three ways (～たら・～ば・～なら), express ability (ことができる), talk about experience (ことがある) and change (ようになる), and state decisions (ことにする).",
      items: [
        { id: "ja-u45l1-tara", type: "vocab", front: "たら", reading: "tara", meaning: "if / when (once ~)", example: { jp: "うちにかえったら、でんわします。", en: "When I get home, I'll call you." }, accept: ["if", "when", "once"], hint: "plain past + ら = たら: かえった → かえったら = if/when I go home. Covers both 'if' and 'when (once X happens)'." },
        { id: "ja-u45l1-ba", type: "vocab", front: "ば", reading: "ba", meaning: "if (conditional)", example: { jp: "やすければ、かいます。", en: "If it's cheap, I'll buy it." }, accept: ["if"], hint: "い-adj: drop い, add ければ (やすい → やすければ). Verbs change the last sound to the -e row + ば (のむ → のめば). General 'if X, then Y'." },
        { id: "ja-u45l1-nara", type: "vocab", front: "なら", reading: "nara", meaning: "if it's the case that", example: { jp: "にほんにいくなら、きょうとがいいですよ。", en: "If you're going to Japan, Kyoto is good." }, accept: ["if", "in that case"], hint: "attaches to a noun or plain verb: にほん なら / いく なら. Means 'if that's the case / speaking of that'." },
        { id: "ja-u45l1-kotogadekiru", type: "vocab", front: "ことができる", reading: "kotogadekiru", meaning: "to be able to", example: { jp: "わたしはにほんごをはなすことができます。", en: "I can speak Japanese." }, accept: ["can", "be able to"], hint: "plain verb + ことができます = 'able to (verb)': はなす → はなすことができます = can speak." },
        { id: "ja-u45l1-kotogaaru", type: "vocab", front: "ことがある", reading: "kotogaaru", meaning: "there are times when / have (done) before", example: { jp: "すしをたべたことがあります。", en: "I have eaten sushi before." }, accept: ["have done before", "there are times when"], hint: "plain past + ことがあります = past experience: たべた → たべたことがあります = have eaten. (plain present + ことがある = 'there are times when'.)" },
        { id: "ja-u45l1-yoninaru", type: "vocab", front: "ようになる", reading: "yōninaru", meaning: "to come to (be able to)", example: { jp: "にほんごがはなせるようになりました。", en: "I've become able to speak Japanese." }, accept: ["come to", "become able to"], hint: "plain verb + ようになる = a gradual change: はなせる → はなせるようになりました = came to be able to speak." },
        { id: "ja-u45l1-kotonisuru", type: "vocab", front: "ことにする", reading: "kotonisuru", meaning: "to decide to", example: { jp: "まいにちべんきょうすることにしました。", en: "I decided to study every day." }, accept: ["decide to", "make a decision to"], hint: "plain verb + ことにします = a decision you make: べんきょうする → べんきょうすることにしました = decided to study." },
      ],
    },
  ],
};
