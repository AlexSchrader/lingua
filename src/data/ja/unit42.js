// Unit 42 — かんじ・きのう (Function-word & miscellaneous kanji) — A2 / JLPT N4
// Consolidated kanji unit (category: function-word & misc kanji). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT42 = {
  id: "ja-u42",
  lang: "ja",
  title: "かんじ・きのう",
  order: 42,
  stage: "a2",
  lessons: [
    {
      id: "ja-u42l1",
      unit: 42,
      lesson: 1,
      title: "Function kanji 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read function kanji: 度 (time/degree), 用 (use), 以 (from/than), 近 (near), 方 (way/person), 理 (reason).",
      items: [
        { id: "ja-u42l1-do", type: "kanji", front: "度", reading: "do", meaning: "time/occurrence", example: { jp: "もう一度言います。", en: "I'll say it one more time." }, accept: ["degree","occasion"], hint: "度 = time / occurrence (also 'degree'). 一度 = one time / once; 三度 = three times." },
        { id: "ja-u42l1-yo", type: "kanji", front: "用", reading: "yō", meaning: "use/business", example: { jp: "用事があります。", en: "I have some business to do." }, accept: ["errand","business"], hint: "用 = use / business. 用事 = things to do / an errand; 用意 = preparation." },
        { id: "ja-u42l1-i", type: "kanji", front: "以", reading: "i", meaning: "from/than", example: { jp: "三人以上来ました。", en: "Three or more people came." }, accept: ["by means of"], hint: "以 = from / by means of. 以上 = or more / above; 以下 = or less / below." },
        { id: "ja-u42l1-chikai", type: "kanji", front: "近", reading: "chikai", meaning: "near", example: { jp: "駅は近いです。", en: "The station is near." }, accept: ["close","nearby"], hint: "近 = near / close. 近い = near; 近く = nearby. The 辶 radical means movement / road." },
        { id: "ja-u42l1-ho", type: "kanji", front: "方", reading: "hō", meaning: "way/direction", example: { jp: "こっちの方がいいです。", en: "This way is better." }, accept: ["direction","person"], hint: "方 = way / direction (read かた it politely means 'person'). この方 = this person; ~の方 = the ~ side." },
        { id: "ja-u42l1-ri", type: "kanji", front: "理", reading: "ri", meaning: "reason/logic", example: { jp: "理由を聞きます。", en: "I ask the reason." }, accept: ["logic","principle"], hint: "理 = reason / logic. 理由 = reason; 料理 = cooking (arranging by principle). 王 (jewel) + 里 (village)." },
      ],
    },
    {
      id: "ja-u42l2",
      unit: 42,
      lesson: 2,
      title: "Function kanji 2",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read: 公 (public), 洋 (Western/ocean), 服 (clothes), 旅 (travel), 真 (true/real).",
      items: [
        { id: "ja-u42l2-ko", type: "kanji", front: "公", reading: "kō", meaning: "public", example: { jp: "公園で遊びます。", en: "I play in the park." }, accept: ["official"], hint: "公 = public / official. 公園 = park (public garden); 公立 = public (school)." },
        { id: "ja-u42l2-yo", type: "kanji", front: "洋", reading: "yō", meaning: "Western/ocean", example: { jp: "洋服を買います。", en: "I buy Western clothes." }, accept: ["ocean","overseas"], hint: "洋 = ocean / Western. 洋服 = Western clothes; 太平洋 = the Pacific Ocean. The 氵 radical means water." },
        { id: "ja-u42l2-fuku", type: "kanji", front: "服", reading: "fuku", meaning: "clothes", example: { jp: "服が新しいです。", en: "The clothes are new." }, accept: ["clothing","outfit"], hint: "服 = clothes. 服 alone = clothes; 洋服 = Western clothes; 制服 = uniform." },
        { id: "ja-u42l2-ryo", type: "kanji", front: "旅", reading: "ryo", meaning: "travel", example: { jp: "旅行に行きます。", en: "I'm going on a trip." }, accept: ["trip","journey"], hint: "旅 = travel / journey (read たび on its own). 旅行 = a trip; 旅館 = a Japanese inn." },
        { id: "ja-u42l2-shin", type: "kanji", front: "真", reading: "shin", meaning: "true/real", example: { jp: "これは写真です。", en: "This is a photograph." }, accept: ["genuine","truth"], hint: "真 = true / real. 写真 = photograph (a 'true copy'); 真ん中 (まんなか) = the very center." },
      ],
    },
  ],
};
