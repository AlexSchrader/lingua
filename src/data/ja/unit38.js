// Unit 38 — かんじ・きせつ (Seasons & weather/nature kanji) — A2 / JLPT N4
// Kanji unit grouped by meaning: seasons, times of day, and nature/weather.
// type:"kanji" — recognition/recall test the meaning, production traces.
// KanjiVG strokes by glyph. lang/unit/lesson stamped in index.js.
export const UNIT38 = {
  id: "ja-u38",
  lang: "ja",
  title: "かんじ・きせつ",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "ja-u38l1",
      unit: 38,
      lesson: 1,
      title: "Seasons kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the season and time-of-day kanji: 春 夏 秋 冬 (spring/summer/autumn/winter), 昼 夜 (noon/night).",
      items: [
        { id: "ja-u38l1-haru", type: "kanji", front: "春", reading: "haru", meaning: "spring", example: { jp: "春は花がさきます。", en: "In spring the flowers bloom." }, accept: ["springtime"], hint: "春 = spring (はる) — the sun 日 warming the earth as plants push up." },
        { id: "ja-u38l1-natsu", type: "kanji", front: "夏", reading: "natsu", meaning: "summer", example: { jp: "夏はあついです。", en: "Summer is hot." }, accept: ["summertime"], hint: "夏 = summer (なつ) — a figure walking slowly in the summer heat." },
        { id: "ja-u38l1-aki", type: "kanji", front: "秋", reading: "aki", meaning: "autumn", example: { jp: "秋はすずしいです。", en: "Autumn is cool." }, accept: ["fall"], hint: "秋 = autumn (あき) — 禾 (grain) + 火 (fire): the harvest ripening red." },
        { id: "ja-u38l1-fuyu", type: "kanji", front: "冬", reading: "fuyu", meaning: "winter", example: { jp: "冬はさむいです。", en: "Winter is cold." }, accept: ["wintertime"], hint: "冬 = winter (ふゆ) — the two dots at the bottom are ice." },
        { id: "ja-u38l1-hiru", type: "kanji", front: "昼", reading: "hiru", meaning: "noon", example: { jp: "昼にごはんを食べます。", en: "I eat a meal at noon." }, accept: ["daytime","midday"], hint: "昼 = noon / daytime (ひる) — the sun 日 high overhead. 昼ごはん = lunch." },
        { id: "ja-u38l1-yoru", type: "kanji", front: "夜", reading: "yoru", meaning: "night", example: { jp: "夜は星が見えます。", en: "At night you can see the stars." }, accept: ["evening","nighttime"], hint: "夜 = night (よる) — a person under the moon 夕 after dark." },
      ],
    },
    {
      id: "ja-u38l2",
      unit: 38,
      lesson: 2,
      title: "Nature & weather kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the nature and weather kanji: 朝 夕 (morning/evening), 花 海 空 風 (flower/sea/sky/wind).",
      items: [
        { id: "ja-u38l2-asa", type: "kanji", front: "朝", reading: "asa", meaning: "morning", example: { jp: "朝はやくおきます。", en: "I get up early in the morning." }, accept: ["a.m."], hint: "朝 = morning (あさ) — the sun 日 rising beside the moon still in the sky. 朝ごはん = breakfast." },
        { id: "ja-u38l2-yuu", type: "kanji", front: "夕", reading: "yū", meaning: "evening", example: { jp: "夕がたに海へ行きます。", en: "I go to the sea in the evening." }, accept: ["dusk","sunset"], hint: "夕 = evening (ゆう) — a thin crescent moon at dusk. 夕がた = evening." },
        { id: "ja-u38l2-hana", type: "kanji", front: "花", reading: "hana", meaning: "flower", example: { jp: "花がとてもきれいです。", en: "The flowers are very pretty." }, accept: ["blossom","flowers"], hint: "花 = flower (はな) — 艹 (grass) over 化 (change): a plant transforming into a bloom." },
        { id: "ja-u38l2-umi", type: "kanji", front: "海", reading: "umi", meaning: "sea", example: { jp: "夏に海で泳ぎます。", en: "In summer I swim in the sea." }, accept: ["ocean"], hint: "海 = sea (うみ) — 氵 (water) beside 母 (mother): the mother of all water." },
        { id: "ja-u38l2-sora", type: "kanji", front: "空", reading: "sora", meaning: "sky", example: { jp: "空が青いです。", en: "The sky is blue." }, accept: ["empty","air"], hint: "空 = sky (そら) — also means 'empty'. The wide open air above." },
        { id: "ja-u38l2-kaze", type: "kanji", front: "風", reading: "kaze", meaning: "wind", example: { jp: "きょうは風がつよいです。", en: "The wind is strong today." }, accept: ["breeze"], hint: "風 = wind (かぜ) — a sail catching the moving air." },
      ],
    },
  ],
};
