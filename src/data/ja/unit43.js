// Unit 43 — ぶんぽう・4 ("Grammar: て-form patterns") — A2 / JLPT N4
// The workhorse patterns built on the て-form: ～ています (ongoing/state),
// ～てから (after doing), ～てもいいです (permission), ～てはいけません
// (prohibition), ～てみる (try doing), ～ておく (do in advance), and
// ～てしまう (do completely / regrettably). Modeled as function-word/suffix
// vocab whose examples carry the pattern; every example uses simple, earlier vocab.
// NOTE: naturalness-critical — flagged for the batch native review.
// lang/unit/lesson stamped in index.js.
export const UNIT43 = {
  id: "ja-u43",
  lang: "ja",
  title: "ぶんぽう・4",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "ja-u43l1",
      unit: 43,
      lesson: 1,
      title: "て-form patterns",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the て-form to say what's ongoing, what's allowed or forbidden, and to try, prepare, or complete an action.",
      items: [
        { id: "ja-u43l1-teimasu", type: "vocab", front: "ています", reading: "teimasu", meaning: "is ~ing (ongoing / state)", example: { jp: "いま、ほんをよんでいます。", en: "I'm reading a book right now." }, accept: ["-ing", "am doing", "in the middle of ~ing"], hint: "て-form + います = an action in progress: よむ → よんでいます = am reading." },
        { id: "ja-u43l1-tekara", type: "vocab", front: "てから", reading: "tekara", meaning: "after doing", example: { jp: "ごはんをたべてから、テレビをみます。", en: "After I eat, I'll watch TV." }, accept: ["after ~ing", "once I've done"], hint: "て-form + から = 'after ~ing': たべてから = after eating." },
        { id: "ja-u43l1-temoiidesu", type: "vocab", front: "てもいいです", reading: "temoiidesu", meaning: "may / it's OK to", example: { jp: "ここでみずをのんでもいいですか。", en: "May I drink water here?" }, accept: ["may I", "is it OK to", "you may"], hint: "て-form + もいいです = permission: のんでもいいです = it's OK to drink." },
        { id: "ja-u43l1-tehaikemasen", type: "vocab", front: "てはいけません", reading: "tehaikemasen", meaning: "must not", example: { jp: "ここでたべてはいけません。", en: "You must not eat here." }, accept: ["may not", "not allowed to", "cannot"], hint: "て-form + はいけません = prohibition: たべてはいけません = must not eat." },
        { id: "ja-u43l1-temiru", type: "vocab", front: "てみる", reading: "temiru", meaning: "try doing", example: { jp: "このおちゃをのんでみます。", en: "I'll try drinking this tea." }, accept: ["try ~ing", "give it a try"], hint: "て-form + みる = 'try doing (to see how it is)': のんでみる = try drinking." },
        { id: "ja-u43l1-teoku", type: "vocab", front: "ておく", reading: "teoku", meaning: "do in advance", example: { jp: "あした、ほんをかっておきます。", en: "I'll buy the book in advance tomorrow." }, accept: ["do ahead of time", "do beforehand", "get ~ ready"], hint: "て-form + おく = do something in advance/as preparation: かっておく = buy ahead of time." },
        { id: "ja-u43l1-teshimau", type: "vocab", front: "てしまう", reading: "teshimau", meaning: "do completely / (regrettably)", example: { jp: "ケーキをぜんぶたべてしまいました。", en: "I ate the whole cake (all of it)." }, accept: ["finish ~ing", "end up ~ing", "do it all"], hint: "て-form + しまう = finish completely, often with regret: たべてしまう = eat it all up." },
      ],
    },
  ],
};
