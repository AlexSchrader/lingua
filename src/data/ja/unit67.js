// Unit 67 — しゅみ・スポーツ ("Hobbies & Sports") — A1 thematic
// Sports, music, and hobby words the learner can talk about doing. Examples reuse
// only known verbs (します・みます・ならいます・ひきます・ふきます・うたいます・つくります),
// adjectives (たのしい), and particles seen since Unit 1. No new grammar — each item
// is vocabulary. lang/unit/lesson are stamped in index.js.
export const UNIT67 = {
  id: "ja-u67",
  lang: "ja",
  title: "しゅみ・スポーツ",
  order: 67,
  stage: "a1",
  lessons: [
    // Lesson 1: ball sports
    {
      id: "ja-u67l1",
      unit: 67,
      lesson: 1,
      title: "Ball sports",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name ball sports: サッカー やきゅう バスケット バレーボール たっきゅう ラグビー; say which you play or watch.",
      items: [
        { id: "ja-u67l1-sakka", type: "vocab", front: "サッカー", reading: "sakkā", meaning: "soccer", example: { jp: "サッカーをします。", en: "I play soccer." }, accept: ["football"] },
        { id: "ja-u67l1-yakyu", type: "vocab", front: "やきゅう", reading: "yakyū", meaning: "baseball", example: { jp: "やきゅうをみます。", en: "I watch baseball." }, accept: [] },
        { id: "ja-u67l1-basuketto", type: "vocab", front: "バスケット", reading: "basuketto", meaning: "basketball", example: { jp: "バスケットがすきです。", en: "I like basketball." }, accept: ["basket"] },
        { id: "ja-u67l1-bareboru", type: "vocab", front: "バレーボール", reading: "barēbōru", meaning: "volleyball", example: { jp: "バレーボールをします。", en: "I play volleyball." }, accept: [] },
        { id: "ja-u67l1-takkyu", type: "vocab", front: "たっきゅう", reading: "takkyū", meaning: "table tennis", example: { jp: "たっきゅうはたのしいです。", en: "Table tennis is fun." }, accept: ["ping-pong", "ping pong"] },
        { id: "ja-u67l1-ragubi", type: "vocab", front: "ラグビー", reading: "ragubī", meaning: "rugby", example: { jp: "ラグビーをみます。", en: "I watch rugby." }, accept: [] },
      ],
    },
    // Lesson 2: active sports
    {
      id: "ja-u67l2",
      unit: 67,
      lesson: 2,
      title: "Active sports",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about active sports: すいえい マラソン スキー スケート じゅうどう からて.",
      items: [
        { id: "ja-u67l2-suiei", type: "vocab", front: "すいえい", reading: "suiei", meaning: "swimming", example: { jp: "すいえいがすきです。", en: "I like swimming." }, accept: ["swim"] },
        { id: "ja-u67l2-marason", type: "vocab", front: "マラソン", reading: "marason", meaning: "marathon", example: { jp: "マラソンをします。", en: "I run a marathon." }, accept: [] },
        { id: "ja-u67l2-suki", type: "vocab", front: "スキー", reading: "sukī", meaning: "skiing", example: { jp: "ふゆにスキーをします。", en: "I ski in winter." }, accept: ["ski"] },
        { id: "ja-u67l2-suketo", type: "vocab", front: "スケート", reading: "sukēto", meaning: "skating", example: { jp: "スケートはたのしいです。", en: "Skating is fun." }, accept: ["ice skating", "skate"] },
        { id: "ja-u67l2-judo", type: "vocab", front: "じゅうどう", reading: "jūdō", meaning: "judo", example: { jp: "じゅうどうをします。", en: "I do judo." }, accept: [] },
        { id: "ja-u67l2-karate", type: "vocab", front: "からて", reading: "karate", meaning: "karate", example: { jp: "からてをならいます。", en: "I learn karate." }, accept: [] },
      ],
    },
    // Lesson 3: music
    {
      id: "ja-u67l3",
      unit: 67,
      lesson: 3,
      title: "Music",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about music: うた カラオケ バイオリン ドラム ふえ バンド.",
      items: [
        { id: "ja-u67l3-uta", type: "vocab", front: "うた", reading: "uta", meaning: "song", example: { jp: "うたをうたいます。", en: "I sing a song." }, accept: ["singing"] },
        { id: "ja-u67l3-karaoke", type: "vocab", front: "カラオケ", reading: "karaoke", meaning: "karaoke", example: { jp: "カラオケがすきです。", en: "I like karaoke." }, accept: [] },
        { id: "ja-u67l3-baiorin", type: "vocab", front: "バイオリン", reading: "baiorin", meaning: "violin", example: { jp: "バイオリンをひきます。", en: "I play the violin." }, accept: [] },
        { id: "ja-u67l3-doramu", type: "vocab", front: "ドラム", reading: "doramu", meaning: "drums", example: { jp: "ドラムがすきです。", en: "I like the drums." }, accept: ["drum"] },
        { id: "ja-u67l3-fue", type: "vocab", front: "ふえ", reading: "fue", meaning: "flute", example: { jp: "ふえをふきます。", en: "I play the flute." }, accept: ["whistle"] },
        { id: "ja-u67l3-bando", type: "vocab", front: "バンド", reading: "bando", meaning: "band", example: { jp: "バンドがすきです。", en: "I like the band." }, accept: ["music band"] },
      ],
    },
    // Lesson 4: hobbies
    {
      id: "ja-u67l4",
      unit: 67,
      lesson: 4,
      title: "Hobbies",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name traditional and outdoor hobbies: どくしょ しょどう おりがみ いけばな ハイキング ダイビング.",
      items: [
        { id: "ja-u67l4-dokusho", type: "vocab", front: "どくしょ", reading: "dokusho", meaning: "reading", example: { jp: "どくしょがすきです。", en: "I like reading." }, accept: ["reading books"] },
        { id: "ja-u67l4-shodo", type: "vocab", front: "しょどう", reading: "shodō", meaning: "calligraphy", example: { jp: "しょどうをならいます。", en: "I learn calligraphy." }, accept: ["Japanese calligraphy"] },
        { id: "ja-u67l4-origami", type: "vocab", front: "おりがみ", reading: "origami", meaning: "origami", example: { jp: "おりがみをつくります。", en: "I make origami." }, accept: ["paper folding"] },
        { id: "ja-u67l4-ikebana", type: "vocab", front: "いけばな", reading: "ikebana", meaning: "flower arranging", example: { jp: "いけばなをならいます。", en: "I learn flower arranging." }, accept: ["flower arrangement", "ikebana"] },
        { id: "ja-u67l4-haikingu", type: "vocab", front: "ハイキング", reading: "haikingu", meaning: "hiking", example: { jp: "やまでハイキングをします。", en: "I go hiking in the mountains." }, accept: ["hike"] },
        { id: "ja-u67l4-daibingu", type: "vocab", front: "ダイビング", reading: "daibingu", meaning: "diving", example: { jp: "うみでダイビングをします。", en: "I go diving in the sea." }, accept: ["dive", "scuba diving"] },
      ],
    },
  ],
};
