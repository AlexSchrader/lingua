// Unit 47 — ぶんぽう・8 ("Grammar: looks like & quoting") — A2 / JLPT N4
// The "seems / apparently" family plus the naming/purpose connectors: ようです
// (evidence-based seems), みたいです (casual looks-like), らしいです (hearsay /
// "I hear that"), という (called / named / that says), and ため (for the sake of /
// because of). Modeled as function-word/suffix vocab whose examples carry the
// pattern; every example uses only earlier vocab.
// NOTE: naturalness-critical — flagged for the batch native review.
// lang/unit/lesson stamped in index.js.
export const UNIT47 = {
  id: "ja-u47",
  lang: "ja",
  title: "ぶんぽう・8",
  order: 47,
  stage: "a2",
  lessons: [
    {
      id: "ja-u47l1",
      unit: 47,
      lesson: 1,
      title: "Looks like & quoting",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say something seems, looks like, or is apparently true (ようです・みたいです・らしいです), name a thing with という, and give a reason with ため.",
      items: [
        { id: "ja-u47l1-yodesu", type: "vocab", front: "ようです", reading: "yōdesu", meaning: "seems / appears that", example: { jp: "だれもいないようです。", en: "It seems nobody is here." }, accept: ["it appears", "looks as if"], hint: "ようです = 'it seems', based on what you SEE or evidence you notice. More formal than みたいです." },
        { id: "ja-u47l1-mitaidesu", type: "vocab", front: "みたいです", reading: "mitaidesu", meaning: "looks like / seems (casual)", example: { jp: "あめがふるみたいです。", en: "It looks like it's going to rain." }, accept: ["seems like", "appears"], hint: "みたいです is the casual version of ようです: same 'looks like', more conversational. Attaches straight to a plain word." },
        { id: "ja-u47l1-rashiidesu", type: "vocab", front: "らしいです", reading: "rashiidesu", meaning: "apparently / I hear that", example: { jp: "あのみせはたかいらしいです。", en: "Apparently that shop is expensive." }, accept: ["I heard that", "reportedly"], hint: "らしいです = 'apparently / I hear that' — you got the info from someone else, not your own eyes." },
        { id: "ja-u47l1-toiu", type: "vocab", front: "という", reading: "toiu", meaning: "called / named / that says", example: { jp: "「さくら」というみせにいきました。", en: "I went to a shop called Sakura." }, accept: ["called", "named"], hint: "Xという Y = 'a Y called/named X': 「さくら」というみせ = a shop called Sakura." },
        { id: "ja-u47l1-tame", type: "vocab", front: "ため", reading: "tame", meaning: "for the sake of / because of", example: { jp: "しけんのために、べんきょうします。", en: "I study for the exam." }, accept: ["in order to", "due to"], hint: "Xのため = 'for the sake of X' (purpose) or 'because of X' (cause): しけんのために = for the exam." },
      ],
    },
  ],
};
