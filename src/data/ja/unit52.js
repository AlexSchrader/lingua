// Unit 52 — じかん・へんか ("Time & change") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for talking about time spans, eras, and how things change over time —
// the abstract time nouns/adverbs beyond A1/A2's clock-and-calendar vocab. Examples stay
// in A1+A2 grammar and reuse A1/A2 vocab where possible. Naturalness queued for native review.
export const UNIT52 = {
  id: "ja-u52", lang: "ja", title: "じかん・へんか", order: 52, stage: "b1",
  lessons: [
    {
      id: "ja-u52l1", unit: 52, lesson: 1, title: "Eras & periods", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about time spans: じだい きかん しょうらい かこ げんざい さいきん.",
      items: [
        { id: "ja-u52l1-jidai", type: "vocab", front: "じだい", reading: "jidai", meaning: "era", example: { jp: "あたらしいじだいです。", en: "It's a new era." }, accept: ["period", "age"] },
        { id: "ja-u52l1-kikan", type: "vocab", front: "きかん", reading: "kikan", meaning: "period", example: { jp: "みじかいきかんです。", en: "It's a short period." }, accept: ["duration", "term"] },
        { id: "ja-u52l1-shorai", type: "vocab", front: "しょうらい", reading: "shōrai", meaning: "future", example: { jp: "しょうらいのゆめがあります。", en: "I have a dream for the future." }, accept: ["prospects"] },
        { id: "ja-u52l1-kako", type: "vocab", front: "かこ", reading: "kako", meaning: "the past", example: { jp: "かこのことはわすれます。", en: "I'll forget about the past." }, accept: ["former times"] },
        { id: "ja-u52l1-genzai", type: "vocab", front: "げんざい", reading: "genzai", meaning: "the present", example: { jp: "げんざいのしごとがすきです。", en: "I like my present job." }, accept: ["now", "currently"] },
        { id: "ja-u52l1-saikin", type: "vocab", front: "さいきん", reading: "saikin", meaning: "recently", example: { jp: "さいきんいそがしいです。", en: "I've been busy recently." }, accept: ["lately", "these days"] },
      ],
    },
    {
      id: "ja-u52l2", unit: 52, lesson: 2, title: "Change & timing", cefr: "B1", dominantMode: "recall",
      canDo: "Describe change over time: へんか せいちょう はってん とつぜん ようやく しばらく.",
      items: [
        { id: "ja-u52l2-henka", type: "vocab", front: "へんか", reading: "henka", meaning: "change", example: { jp: "おおきなへんかです。", en: "It's a big change." }, accept: ["transformation", "shift"] },
        { id: "ja-u52l2-seicho", type: "vocab", front: "せいちょう", reading: "seichō", meaning: "growth", example: { jp: "こどものせいちょうははやいです。", en: "Children's growth is fast." }, accept: ["development", "growing up"] },
        { id: "ja-u52l2-hatten", type: "vocab", front: "はってん", reading: "hatten", meaning: "development", example: { jp: "まちがはってんしました。", en: "The town developed." }, accept: ["progress", "expansion"] },
        { id: "ja-u52l2-totsuzen", type: "vocab", front: "とつぜん", reading: "totsuzen", meaning: "suddenly", example: { jp: "とつぜんあめがふりました。", en: "It suddenly rained." }, accept: ["all of a sudden", "abruptly"] },
        { id: "ja-u52l2-yoyaku", type: "vocab", front: "ようやく", reading: "yōyaku", meaning: "finally", example: { jp: "ようやくおわりました。", en: "It finally ended." }, accept: ["at last", "eventually"], hint: "ようやく = 'finally, after effort/waiting' — close to やっと." },
        { id: "ja-u52l2-shibaraku", type: "vocab", front: "しばらく", reading: "shibaraku", meaning: "for a while", example: { jp: "しばらくまちます。", en: "I'll wait for a while." }, accept: ["a moment", "for some time"] },
      ],
    },
  ],
};
