// Unit 44 — ぶんぽう・5 ("Grammar: giving, receiving & intention") — A2 / JLPT N4
// The giving/receiving verbs (あげる・くれる・もらう) whose direction is the pain
// point: あげる = I/others give AWAY, くれる = someone gives TO me, もらう = receive
// (から/に marks the giver). Plus intention (～つもり) and conjecture (だろう).
// Modeled as function-word vocab whose examples carry the pattern; every example
// uses only simple, earlier vocab.
// NOTE: naturalness-critical — flagged for the batch native review.
// lang/unit/lesson stamped in index.js.
export const UNIT44 = {
  id: "ja-u44",
  lang: "ja",
  title: "ぶんぽう・5",
  order: 44,
  stage: "a2",
  lessons: [
    {
      id: "ja-u44l1",
      unit: 44,
      lesson: 1,
      title: "Giving, receiving & intention",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say who gives to whom (あげる・くれる・もらう), state what you intend to do (～つもり), and guess (だろう).",
      items: [
        { id: "ja-u44l1-ageru", type: "vocab", front: "あげる", reading: "ageru", meaning: "to give (to someone else)", example: { jp: "ともだちにプレゼントをあげます。", en: "I'll give my friend a present." }, accept: ["give (away)", "give to someone"], hint: "あげる = I or others give AWAY, to someone else. Giver は、receiver に、thing を あげる. Never used for giving TO me — that's くれる." },
        { id: "ja-u44l1-kureru", type: "vocab", front: "くれる", reading: "kureru", meaning: "to give (to me/us)", example: { jp: "ちちがとけいをくれました。", en: "My dad gave me a watch." }, accept: ["give me", "give to me/us"], hint: "くれる = someone gives TO me (or my side). Same shape (は・に・を) but the direction is toward you. Use this, not あげる, when the gift comes to you." },
        { id: "ja-u44l1-morau", type: "vocab", front: "もらう", reading: "morau", meaning: "to receive", example: { jp: "ともだちにチョコレートをもらいました。", en: "I received chocolate from a friend." }, accept: ["receive", "get"], hint: "もらう = receive. The giver is marked with に (or から): (giver) に (thing) を もらう = 'get (thing) from (giver)'." },
        { id: "ja-u44l1-tsumori", type: "vocab", front: "つもり", reading: "tsumori", meaning: "intend to", example: { jp: "らいねん、にほんにいくつもりです。", en: "I intend to go to Japan next year." }, accept: ["plan to", "intention"], hint: "plain-form verb + つもりです = 'intend/plan to…': いく → いくつもりです (plan to go). States a firm intention." },
        { id: "ja-u44l1-daro", type: "vocab", front: "だろう", reading: "darō", meaning: "probably / I bet", example: { jp: "あした、あめがふるだろう。", en: "It'll probably rain tomorrow." }, accept: ["probably", "I bet", "likely"], hint: "だろう = a guess: 'probably / I bet'. Comes after a plain form or a noun. Politer form is でしょう." },
      ],
    },
  ],
};
