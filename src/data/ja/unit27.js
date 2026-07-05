// Unit 27 — しぜん・どうぶつ ("Nature & animals") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed.
// Examples use only A1 vocab + earlier A2 draft vocab + A1 grammar.
export const UNIT27 = {
  id: "ja-u27", lang: "ja", title: "しぜん・どうぶつ", order: 27, stage: "a2",
  lessons: [
    {
      id: "ja-u27l1", unit: 27, lesson: 1, title: "Animals", cefr: "A2", dominantMode: "recall",
      canDo: "Name animals: とり うま うし さる ぞう くま.",
      items: [
        { id: "ja-u27l1-tori", type: "vocab", front: "とり", reading: "tori", meaning: "bird", example: { jp: "とりがすきです。", en: "I like birds." }, accept: ["chicken", "fowl"] },
        { id: "ja-u27l1-uma", type: "vocab", front: "うま", reading: "uma", meaning: "horse", example: { jp: "うまがはしります。", en: "The horse runs." }, accept: [] },
        { id: "ja-u27l1-ushi", type: "vocab", front: "うし", reading: "ushi", meaning: "cow", example: { jp: "うしはおおきいです。", en: "Cows are big." }, accept: ["cattle", "bull"] },
        { id: "ja-u27l1-saru", type: "vocab", front: "さる", reading: "saru", meaning: "monkey", example: { jp: "さるがいます。", en: "There's a monkey." }, accept: ["ape"] },
        { id: "ja-u27l1-zo", type: "vocab", front: "ぞう", reading: "zō", meaning: "elephant", example: { jp: "ぞうがすきです。", en: "I like elephants." }, accept: [] },
        { id: "ja-u27l1-kuma", type: "vocab", front: "くま", reading: "kuma", meaning: "bear", example: { jp: "くまはこわいです。", en: "Bears are scary." }, accept: [] },
      ],
    },
    {
      id: "ja-u27l2", unit: 27, lesson: 2, title: "Land & water", cefr: "A2", dominantMode: "recall",
      canDo: "Name places in nature: うみ かわ もり しま いけ いし.",
      items: [
        { id: "ja-u27l2-umi", type: "vocab", front: "うみ", reading: "umi", meaning: "sea", example: { jp: "うみでおよぎます。", en: "I swim in the sea." }, accept: ["ocean", "beach"] },
        { id: "ja-u27l2-kawa", type: "vocab", front: "かわ", reading: "kawa", meaning: "river", example: { jp: "かわをわたります。", en: "I cross the river." }, accept: ["stream"] },
        { id: "ja-u27l2-mori", type: "vocab", front: "もり", reading: "mori", meaning: "forest", example: { jp: "もりをあるきます。", en: "I walk in the forest." }, accept: ["woods"] },
        { id: "ja-u27l2-shima", type: "vocab", front: "しま", reading: "shima", meaning: "island", example: { jp: "しまにいきます。", en: "I go to the island." }, accept: [] },
        { id: "ja-u27l2-ike", type: "vocab", front: "いけ", reading: "ike", meaning: "pond", example: { jp: "いけはきれいです。", en: "The pond is beautiful." }, accept: ["small lake"] },
        { id: "ja-u27l2-ishi", type: "vocab", front: "いし", reading: "ishi", meaning: "stone", example: { jp: "いしがおもいです。", en: "The stone is heavy." }, accept: ["rock"] },
      ],
    },
    {
      id: "ja-u27l3", unit: 27, lesson: 3, title: "Sky & light", cefr: "A2", dominantMode: "recall",
      canDo: "Name things in the sky: ほし たいよう かみなり ひかり かげ けむり.",
      items: [
        { id: "ja-u27l3-hoshi", type: "vocab", front: "ほし", reading: "hoshi", meaning: "star", example: { jp: "ほしがきれいです。", en: "The stars are beautiful." }, accept: ["stars"] },
        { id: "ja-u27l3-taiyo", type: "vocab", front: "たいよう", reading: "taiyō", meaning: "sun", example: { jp: "たいようはあかいです。", en: "The sun is red." }, accept: ["the sun"] },
        { id: "ja-u27l3-kaminari", type: "vocab", front: "かみなり", reading: "kaminari", meaning: "thunder", example: { jp: "かみなりがこわいです。", en: "Thunder is scary." }, accept: ["lightning"] },
        { id: "ja-u27l3-hikari", type: "vocab", front: "ひかり", reading: "hikari", meaning: "light", example: { jp: "ひかりがつよいです。", en: "The light is strong." }, accept: ["a ray", "shine"] },
        { id: "ja-u27l3-kage", type: "vocab", front: "かげ", reading: "kage", meaning: "shadow", example: { jp: "かげでやすみます。", en: "I rest in the shade." }, accept: ["shade"] },
        { id: "ja-u27l3-kemuri", type: "vocab", front: "けむり", reading: "kemuri", meaning: "smoke", example: { jp: "けむりをみます。", en: "I see smoke." }, accept: [] },
      ],
    },
    {
      id: "ja-u27l4", unit: 27, lesson: 4, title: "Nature in motion", cefr: "A2", dominantMode: "recall",
      canDo: "Describe nature: さきます ながれます ふきます そだてます うごきます とびます.",
      items: [
        { id: "ja-u27l4-sakimasu", type: "vocab", front: "さきます", reading: "sakimasu", meaning: "bloom", example: { jp: "はながさきます。", en: "The flowers bloom." }, accept: ["blossom", "flower (v.)"] },
        { id: "ja-u27l4-nagaremasu", type: "vocab", front: "ながれます", reading: "nagaremasu", meaning: "flow", example: { jp: "かわがながれます。", en: "The river flows." }, accept: ["stream", "run (water)"] },
        { id: "ja-u27l4-fukimasu", type: "vocab", front: "ふきます", reading: "fukimasu", meaning: "blow", example: { jp: "かぜがふきます。", en: "The wind blows." }, accept: ["blow (wind)"] },
        { id: "ja-u27l4-sodatemasu", type: "vocab", front: "そだてます", reading: "sodatemasu", meaning: "raise", example: { jp: "やさいをそだてます。", en: "I grow vegetables." }, accept: ["grow", "bring up", "cultivate"] },
        { id: "ja-u27l4-ugokimasu", type: "vocab", front: "うごきます", reading: "ugokimasu", meaning: "move", example: { jp: "くるまがうごきます。", en: "The car moves." }, accept: ["work (function)"] },
        { id: "ja-u27l4-tobimasu", type: "vocab", front: "とびます", reading: "tobimasu", meaning: "fly", example: { jp: "とりがとびます。", en: "The bird flies." }, accept: ["jump", "leap"] },
      ],
    },
  ],
};
