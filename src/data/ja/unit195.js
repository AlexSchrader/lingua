// Unit 195 — ごい・N3・77 ("N3 vocab 77") — B1 / JLPT N3 vocabulary (final unit).
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Multi-word meanings carry an accept synonym so type cards don't reject valid answers.
export const UNIT195 = {
  id: "ja-u195", lang: "ja", title: "ごい・N3・77", order: 195, stage: "b1",
  lessons: [
    {
      id: "ja-u195l1", unit: 195, lesson: 1, title: "N3 vocab 77·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 見掛ける (to spot), 捲る (to turn over), 野党 (opposition party), 有機 (organic), 良い (good), 予想 (expectation).",
      items: [
        { id: "ja-u195l1-mikakeru", type: "vocab", front: "見掛ける", reading: "mikakeru", meaning: "to spot", example: { jp: "まちでゆうめいなひとを見掛けました。", en: "I spotted a famous person in town." }, accept: ["to notice", "to catch sight of"], hint: "見掛ける (みかける) = to happen to see / catch sight of." },
        { id: "ja-u195l1-mekuru", type: "vocab", front: "捲る", reading: "mekuru", meaning: "to turn over", example: { jp: "ほんのページを捲ります。", en: "I turn the pages of the book." }, accept: ["to flip", "to turn pages of a book"], hint: "捲る (めくる) = to turn over / flip (pages, a card)." },
        { id: "ja-u195l1-yato2", type: "vocab", front: "野党", reading: "yatō", meaning: "opposition party", example: { jp: "野党はせいふにはんたいします。", en: "The opposition party opposes the government." }, accept: ["opposition"], hint: "野党 (やとう) = an opposition party. Opposite: 与党 (the ruling party)." },
        { id: "ja-u195l1-yuki2", type: "vocab", front: "有機", reading: "yūki", meaning: "organic", example: { jp: "有機やさいはからだにいいです。", en: "Organic vegetables are good for the body." }, accept: [], hint: "有機 (ゆうき) = organic, as in 有機野菜 (organic vegetables)." },
        { id: "ja-u195l1-yoi2", type: "vocab", front: "良い", reading: "yoi", meaning: "good", example: { jp: "きょうはてんきが良いです。", en: "The weather is good today." }, accept: ["nice", "fine"], hint: "良い (よい) = good — a more formal よい for いい." },
        { id: "ja-u195l1-yoso2", type: "vocab", front: "予想", reading: "yosō", meaning: "expectation", example: { jp: "あしたのてんきを予想します。", en: "I predict tomorrow's weather." }, accept: ["anticipation", "prediction"], hint: "予想 (よそう) = expectation / prediction; 予想する = to predict." },
      ],
    },
    {
      id: "ja-u195l2", unit: 195, lesson: 2, title: "N3 vocab 77·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use four N3 words: 弱まる (to weaken), 弱める (to weaken), 枠 (frame), 表示 (display).",
      items: [
        { id: "ja-u195l2-yowamaru", type: "vocab", front: "弱まる", reading: "yowamaru", meaning: "to weaken", example: { jp: "ゆうがたにあめが弱まりました。", en: "The rain weakened in the evening." }, accept: ["to grow weak", "to die down"], hint: "弱まる (よわまる) = to weaken (intransitive — it grows weaker on its own)." },
        { id: "ja-u195l2-yowameru", type: "vocab", front: "弱める", reading: "yowameru", meaning: "to weaken", example: { jp: "ガスの火を弱めます。", en: "I turn down the gas flame." }, accept: ["to lower", "to reduce"], hint: "弱める (よわめる) = to weaken (transitive) — 火/力/風 を弱める. Not for 声 (that's 声を落とす)." },
        { id: "ja-u195l2-waku2", type: "vocab", front: "枠", reading: "waku", meaning: "frame", example: { jp: "えをきれいな枠にいれます。", en: "I put the picture in a pretty frame." }, accept: ["framework"], hint: "枠 (わく) = a frame / framework / set limit." },
        { id: "ja-u195l2-hyoji", type: "vocab", front: "表示", reading: "hyōji", meaning: "display", example: { jp: "がめんにじかんが表示されます。", en: "The time is displayed on the screen." }, accept: ["indication"], hint: "表示 (ひょうじ) = display / indication; 表示する = to show / display." },
      ],
    },
  ],
};
