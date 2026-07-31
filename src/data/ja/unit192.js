// Unit 192 — ごい・N3・74 ("N3 vocab 74") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (seimei ×2, zen ×2, senkō ×2, sō ×3) disambiguated
// via hints.
export const UNIT192 = {
  id: "ja-u192", lang: "ja", title: "ごい・N3・74", order: 192, stage: "b1",
  lessons: [
    {
      id: "ja-u192l1", unit: 192, lesson: 1, title: "N3 vocab 74·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 正規 (regular), 精巧 (elaborate), 精算 (settlement), 成年 (adulthood), 声明 (declaration), 姓名 (full name).",
      items: [
        { id: "ja-u192l1-seiki2", type: "vocab", front: "正規", reading: "seiki", meaning: "regular", example: { jp: "正規のしゃいんになりました。", en: "I became a regular employee." }, accept: ["legitimate", "formal"] },
        { id: "ja-u192l1-seiko2", type: "vocab", front: "精巧", reading: "seikō", meaning: "elaborate", example: { jp: "このにんぎょうは精巧です。", en: "This doll is exquisite." }, accept: ["delicate", "exquisite"] },
        { id: "ja-u192l1-seisan", type: "vocab", front: "精算", reading: "seisan", meaning: "settlement", example: { jp: "でんしゃだいを精算します。", en: "I settle up the train fare." }, accept: ["adjustment", "exact calculation"] },
        { id: "ja-u192l1-seinen2", type: "vocab", front: "成年", reading: "seinen", meaning: "adulthood", example: { jp: "成年になるとおさけがのめます。", en: "Once you reach adulthood you can drink alcohol." }, accept: ["majority", "adult age"] },
        { id: "ja-u192l1-seimei2", type: "vocab", front: "声明", reading: "seimei", meaning: "declaration", example: { jp: "しゃちょうが声明をだしました。", en: "The president issued a statement." }, accept: ["statement", "proclamation"], hint: "声明 (せいめい) = public statement; same reading as 姓名 (full name)." },
        { id: "ja-u192l1-seimei3", type: "vocab", front: "姓名", reading: "seimei", meaning: "full name", example: { jp: "ここに姓名をかいてください。", en: "Please write your full name here." }, accept: ["one's name", "surname and given name"], hint: "姓名 (せいめい) = surname and given name; same reading as 声明 (statement)." },
      ],
    },
    {
      id: "ja-u192l2", unit: 192, lesson: 2, title: "N3 vocab 74·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 生理 (physiology), 膳 (tray), 禅 (zen), 選挙 (election), 先行 (preceding), 選考 (selection).",
      items: [
        { id: "ja-u192l2-seiri2", type: "vocab", front: "生理", reading: "seiri", meaning: "physiology", example: { jp: "からだの生理をべんきょうします。", en: "I study the body's physiology." }, accept: ["menses", "bodily functions"] },
        { id: "ja-u192l2-zen2", type: "vocab", front: "膳", reading: "zen", meaning: "tray", example: { jp: "膳にごはんをならべます。", en: "I arrange the food on the tray." }, accept: ["small table", "meal"], hint: "膳 (ぜん) = a meal tray / small dining table; same reading as 禅 (Zen)." },
        { id: "ja-u192l2-zen3", type: "vocab", front: "禅", reading: "zen", meaning: "zen", example: { jp: "禅にきょうみがあります。", en: "I am interested in Zen." }, accept: ["zen buddhism"], hint: "禅 (ぜん) = Zen Buddhism; same reading as 膳 (meal tray)." },
        { id: "ja-u192l2-senkyo", type: "vocab", front: "選挙", reading: "senkyo", meaning: "election", example: { jp: "あした選挙があります。", en: "There is an election tomorrow." }, accept: ["vote"] },
        { id: "ja-u192l2-senko2", type: "vocab", front: "先行", reading: "senkō", meaning: "preceding", example: { jp: "このでんしゃが先行します。", en: "This train goes ahead first." }, accept: ["going first", "leading"], hint: "先行 (せんこう) = going ahead / preceding; same reading as 選考 (screening)." },
        { id: "ja-u192l2-senko3", type: "vocab", front: "選考", reading: "senkō", meaning: "selection", example: { jp: "選考にごうかくしました。", en: "I passed the screening." }, accept: ["screening", "vetting"], hint: "選考 (せんこう) = selection / screening of candidates; same reading as 先行 (preceding)." },
      ],
    },
    {
      id: "ja-u192l3", unit: 192, lesson: 3, title: "N3 vocab 74·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 沿う (to run along), 添う (to accompany), 僧 (monk), 像 (statue), 捜査 (investigation), 操縦 (piloting).",
      items: [
        { id: "ja-u192l3-so", type: "vocab", front: "沿う", reading: "sō", meaning: "to run along", example: { jp: "かわに沿ってあるきます。", en: "I walk along the river." }, accept: ["to follow", "to go along"], hint: "沿う (そう) = to run along (a road/river); same reading as 添う (to accompany) and 僧 (monk)." },
        { id: "ja-u192l3-so2", type: "vocab", front: "添う", reading: "sō", meaning: "to accompany", example: { jp: "みんなのねがいに添います。", en: "I live up to everyone's wishes." }, accept: ["to comply with", "to meet"], hint: "添う (そう) = to accompany / comply with; same reading as 沿う (to run along) and 僧 (monk)." },
        { id: "ja-u192l3-so3", type: "vocab", front: "僧", reading: "sō", meaning: "monk", example: { jp: "おてらに僧がいます。", en: "There is a monk at the temple." }, accept: ["priest"], hint: "僧 (そう) = Buddhist monk; same reading as the verbs 沿う・添う." },
        { id: "ja-u192l3-zo2", type: "vocab", front: "像", reading: "zō", meaning: "statue", example: { jp: "こうえんに像があります。", en: "There is a statue in the park." }, accept: ["image"] },
        { id: "ja-u192l3-sosa2", type: "vocab", front: "捜査", reading: "sōsa", meaning: "investigation", example: { jp: "けいさつがじけんを捜査します。", en: "The police investigate the case." }, accept: ["search", "criminal investigation"] },
        { id: "ja-u192l3-soju", type: "vocab", front: "操縦", reading: "sōjū", meaning: "piloting", example: { jp: "ひこうきを操縦します。", en: "I pilot the airplane." }, accept: ["control", "operation"] },
      ],
    },
    {
      id: "ja-u192l4", unit: 192, lesson: 4, title: "N3 vocab 74·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 創造 (creation), 隊 (party), 退学 (dropping out), 高まる (to rise), 断つ (to sever), 盾 (shield).",
      items: [
        { id: "ja-u192l4-sozo2", type: "vocab", front: "創造", reading: "sōzō", meaning: "creation", example: { jp: "あたらしいものを創造します。", en: "I create something new." }, accept: ["origination"] },
        { id: "ja-u192l4-tai", type: "vocab", front: "隊", reading: "tai", meaning: "party", example: { jp: "隊のリーダーになりました。", en: "I became the leader of the team." }, accept: ["troops", "unit"] },
        { id: "ja-u192l4-taigaku", type: "vocab", front: "退学", reading: "taigaku", meaning: "dropping out", example: { jp: "びょうきで退学しました。", en: "I dropped out of school because of illness." }, accept: ["leaving school", "expulsion"] },
        { id: "ja-u192l4-takamaru", type: "vocab", front: "高まる", reading: "takamaru", meaning: "to rise", example: { jp: "みんなのきょうみが高まります。", en: "Everyone's interest is rising." }, accept: ["to grow", "to increase"] },
        { id: "ja-u192l4-tatsu3", type: "vocab", front: "断つ", reading: "tatsu", meaning: "to sever", example: { jp: "おさけを断ちます。", en: "I give up alcohol." }, accept: ["to cut off", "to give up"], hint: "断つ (たつ) = to sever / give up; same reading as 立つ (to stand)." },
        { id: "ja-u192l4-tate", type: "vocab", front: "盾", reading: "tate", meaning: "shield", example: { jp: "盾でみをまもります。", en: "I protect myself with a shield." }, accept: ["buckler"] },
      ],
    },
  ],
};
