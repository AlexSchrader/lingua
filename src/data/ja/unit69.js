// Unit 69 — かんじ・こころ ("Kanji — health, body & emotion") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji hooking onto the B1 vocab: 健康→けんこう, 症状→しょうじょう, 治療→ちりょう,
// 筋肉→きんにく, 心臓→しんぞう, 血圧→けつあつ, 検査→けんさ, 性格→せいかく, 信頼→しんらい…
// KanjiVG strokes required (fetched via KANJI_N3). Naturalness → native review.
export const UNIT69 = {
  id: "ja-u69", lang: "ja", title: "かんじ・こころ", order: 69, stage: "b1",
  lessons: [
    {
      id: "ja-u69l1", unit: 69, lesson: 1, title: "Health & condition", cefr: "B1", dominantMode: "recall",
      canDo: "Read health kanji: 健 康 態 状 症 療.",
      items: [
        { id: "ja-u69l1-ken", type: "kanji", front: "健", reading: "ken", meaning: "healthy", example: { jp: "健康がいちばん大切です。", en: "Health is the most important thing." }, accept: ["robust", "sound"], hint: "健 = healthy. In 健康 (けんこう, health), 健康的 (healthy)." },
        { id: "ja-u69l1-ko", type: "kanji", front: "康", reading: "kō", meaning: "ease / health", example: { jp: "健康にきをつけます。", en: "I take care of my health." }, accept: ["well-being", "peace"], hint: "康 = ease / health. In 健康 (けんこう, health)." },
        { id: "ja-u69l1-tai", type: "kanji", front: "態", reading: "tai", meaning: "condition / attitude", example: { jp: "たいちょうの状態です。", en: "It's my physical state." }, accept: ["state", "appearance"], hint: "態 = condition / attitude. In 状態 (じょうたい, state), 態度 (たいど, attitude)." },
        { id: "ja-u69l1-jo", type: "kanji", front: "状", reading: "jō", meaning: "condition / form", example: { jp: "症状をせつめいします。", en: "I explain the symptoms." }, accept: ["state", "letter"], hint: "状 = condition / form. In 状態 (じょうたい, state), 症状 (しょうじょう, symptoms)." },
        { id: "ja-u69l1-sho", type: "kanji", front: "症", reading: "shō", meaning: "symptoms / illness", example: { jp: "かぜの症状です。", en: "They're cold symptoms." }, accept: ["disease"], hint: "症 = symptoms / illness. In 症状 (しょうじょう, symptoms), 花粉症 (かふんしょう, hay fever)." },
        { id: "ja-u69l1-ryo", type: "kanji", front: "療", reading: "ryō", meaning: "heal / treat", example: { jp: "びょういんで治療します。", en: "I get treatment at the hospital." }, accept: ["medical care", "cure"], hint: "療 = heal / treat. In 治療 (ちりょう, treatment), 医療 (いりょう, medical care)." },
      ],
    },
    {
      id: "ja-u69l2", unit: 69, lesson: 2, title: "The body", cefr: "B1", dominantMode: "recall",
      canDo: "Read body kanji: 筋 肉 骨 臓 圧 検.",
      items: [
        { id: "ja-u69l2-kin", type: "kanji", front: "筋", reading: "kin", meaning: "muscle / sinew", example: { jp: "筋肉がいたいです。", en: "My muscles hurt." }, accept: ["fiber", "plot"], hint: "筋 = muscle / sinew. In 筋肉 (きんにく, muscle). ⺮ (bamboo) on top." },
        { id: "ja-u69l2-niku", type: "kanji", front: "肉", reading: "niku", meaning: "meat / flesh", example: { jp: "肉をたべます。", en: "I eat meat." }, accept: ["muscle"], hint: "肉 = meat / flesh. 肉 (にく) = meat. In 筋肉 (きんにく, muscle)." },
        { id: "ja-u69l2-hone", type: "kanji", front: "骨", reading: "hone", meaning: "bone", example: { jp: "骨がつよいです。", en: "My bones are strong." }, accept: ["bones", "frame"], hint: "骨 = bone. 骨 (ほね) = a bone. On-reading コツ, as in 骨折 (fracture)." },
        { id: "ja-u69l2-zo", type: "kanji", front: "臓", reading: "zō", meaning: "internal organ", example: { jp: "心臓がはやくうごきます。", en: "My heart beats fast." }, accept: ["organ", "viscera"], hint: "臓 = internal organ. In 心臓 (しんぞう, heart), 内臓 (ないぞう, organs). ⺼ (flesh) radical." },
        { id: "ja-u69l2-atsu", type: "kanji", front: "圧", reading: "atsu", meaning: "pressure", example: { jp: "血圧がたかいです。", en: "My blood pressure is high." }, accept: ["press", "force"], hint: "圧 = pressure. In 血圧 (けつあつ, blood pressure), 気圧 (きあつ, air pressure)." },
        { id: "ja-u69l2-ken", type: "kanji", front: "検", reading: "ken", meaning: "examine / inspect", example: { jp: "検査のけっかをききます。", en: "I hear the examination results." }, accept: ["check", "investigate"], hint: "検 = examine / inspect. In 検査 (けんさ, inspection), 検索 (けんさく, search)." },
      ],
    },
    {
      id: "ja-u69l3", unit: 69, lesson: 3, title: "Character & trust", cefr: "B1", dominantMode: "recall",
      canDo: "Read character kanji: 性 格 信 頼 慣 精.",
      items: [
        { id: "ja-u69l3-sei", type: "kanji", front: "性", reading: "sei", meaning: "nature / gender", example: { jp: "あかるい性格です。", en: "He has a bright personality." }, accept: ["quality", "sex"], hint: "性 = nature / gender. In 性格 (せいかく, personality), 女性 (じょせい, woman)." },
        { id: "ja-u69l3-kaku", type: "kanji", front: "格", reading: "kaku", meaning: "status / character", example: { jp: "しけんに合格しました。", en: "I passed the exam." }, accept: ["rank", "standard"], hint: "格 = status / standard. In 性格 (せいかく, personality), 合格 (ごうかく, passing)." },
        { id: "ja-u69l3-shin", type: "kanji", front: "信", reading: "shin", meaning: "trust / believe", example: { jp: "ともだちを信じます。", en: "I trust my friend." }, accept: ["faith", "message"], hint: "信 = trust / believe. In 信頼 (しんらい, trust), 自信 (じしん, confidence). 亻 (person) + 言 (words)." },
        { id: "ja-u69l3-rai", type: "kanji", front: "頼", reading: "rai", meaning: "rely / request", example: { jp: "かれを信頼します。", en: "I trust him." }, accept: ["depend", "ask"], hint: "頼 = rely / request. In 信頼 (しんらい, trust), 頼む (たのむ, to ask)." },
        { id: "ja-u69l3-kan", type: "kanji", front: "慣", reading: "kan", meaning: "get used to", example: { jp: "新しいしごとに慣れます。", en: "I get used to the new job." }, accept: ["accustomed", "habit"], hint: "慣 = get used to. In 習慣 (しゅうかん, habit), 慣れる (なれる, to get used to)." },
        { id: "ja-u69l3-sei2", type: "kanji", front: "精", reading: "sei", meaning: "spirit / refined", example: { jp: "精神がつよいです。", en: "The spirit is strong." }, accept: ["energy", "detailed"], hint: "精 = spirit / refined. In 精神 (せいしん, spirit / mind), 精密 (せいみつ, precise)." },
      ],
    },
    {
      id: "ja-u69l4", unit: 69, lesson: 4, title: "Emotions", cefr: "B1", dominantMode: "recall",
      canDo: "Read emotion kanji: 怒 喜 泣 笑 悩 慢.",
      items: [
        { id: "ja-u69l4-oko", type: "kanji", front: "怒", reading: "okoru", meaning: "get angry", example: { jp: "ちちが怒ります。", en: "My father gets angry." }, accept: ["be angry", "rage"], hint: "怒 = get angry. 怒る (おこる) = to get angry. 心 (heart) at the bottom." },
        { id: "ja-u69l4-yoroko", type: "kanji", front: "喜", reading: "yorokobu", meaning: "be glad", example: { jp: "しらせを聞いて喜びます。", en: "I'm glad to hear the news." }, accept: ["rejoice", "delight"], hint: "喜 = be glad. 喜ぶ (よろこぶ) = to rejoice." },
        { id: "ja-u69l4-naku", type: "kanji", front: "泣", reading: "naku", meaning: "cry", example: { jp: "あかちゃんが泣きます。", en: "The baby cries." }, accept: ["weep"], hint: "泣 = cry. 泣く (なく) = to cry. 氵 (water = tears) + 立." },
        { id: "ja-u69l4-warau", type: "kanji", front: "笑", reading: "warau", meaning: "laugh / smile", example: { jp: "みんなで笑います。", en: "Everyone laughs." }, accept: ["smile"], hint: "笑 = laugh / smile. 笑う (わらう) = to laugh. ⺮ (bamboo) on top." },
        { id: "ja-u69l4-nayamu", type: "kanji", front: "悩", reading: "nayamu", meaning: "be troubled", example: { jp: "しごとのことで悩みます。", en: "I worry about work." }, accept: ["worry", "agonize"], hint: "悩 = be troubled. 悩む (なやむ) = to worry / agonize. 忄 (heart) radical." },
        { id: "ja-u69l4-man", type: "kanji", front: "慢", reading: "man", meaning: "endure / pride", example: { jp: "がまんが大切です。", en: "Patience is important." }, accept: ["arrogance", "slow"], hint: "慢 = endure / pride. In 我慢 (がまん, endurance), 自慢 (じまん, boasting)." },
      ],
    },
  ],
};
