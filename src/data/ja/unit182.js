// Unit 182 — ごい・N3・64 ("N3 vocab 64") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (hakaru ×3, haku ×2) disambiguated via hints.
export const UNIT182 = {
  id: "ja-u182", lang: "ja", title: "ごい・N3・64", order: 182, stage: "b1",
  lessons: [
    {
      id: "ja-u182l1", unit: 182, lesson: 1, title: "N3 vocab 64·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 配達 (delivery), 俳優 (actor), 生える (to grow), 墓 (grave), 馬鹿 (fool), 博士 (doctorate).",
      items: [
        { id: "ja-u182l1-haitatsu", type: "vocab", front: "配達", reading: "haitatsu", meaning: "delivery", example: { jp: "にもつを配達します。", en: "I deliver the package." }, accept: ["distribution"] },
        { id: "ja-u182l1-haiyu", type: "vocab", front: "俳優", reading: "haiyū", meaning: "actor", example: { jp: "かれはゆうめいな俳優です。", en: "He is a famous actor." }, accept: ["actress", "performer"] },
        { id: "ja-u182l1-haeru", type: "vocab", front: "生える", reading: "haeru", meaning: "to grow", example: { jp: "にわにくさが生えます。", en: "Grass grows in the garden." }, accept: ["to spring up", "to sprout"] },
        { id: "ja-u182l1-haka", type: "vocab", front: "墓", reading: "haka", meaning: "grave", example: { jp: "おじいさんの墓にいきます。", en: "I go to my grandfather's grave." }, accept: ["tomb"] },
        { id: "ja-u182l1-baka", type: "vocab", front: "馬鹿", reading: "baka", meaning: "fool", example: { jp: "そんな馬鹿なことをしないでください。", en: "Please do not do such a foolish thing." }, accept: ["idiot"] },
        { id: "ja-u182l1-hakase", type: "vocab", front: "博士", reading: "hakase", meaning: "doctorate", example: { jp: "かれはかがくの博士です。", en: "He is a doctor of science." }, accept: ["phd", "doctor"] },
      ],
    },
    {
      id: "ja-u182l2", unit: 182, lesson: 2, title: "N3 vocab 64·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 計る (to measure), 量る (to measure), 測る (to measure), 掃く (to sweep), 吐く (to throw up), 拍手 (clapping).",
      items: [
        { id: "ja-u182l2-hakaru", type: "vocab", front: "計る", reading: "hakaru", meaning: "to measure", example: { jp: "じかんを計ります。", en: "I measure the time." }, accept: ["to time", "to gauge"], hint: "計る (はかる) = to measure time / count; same reading as 量る・測る." },
        { id: "ja-u182l2-hakaru2", type: "vocab", front: "量る", reading: "hakaru", meaning: "to measure", example: { jp: "にもつのおもさを量ります。", en: "I weigh the luggage." }, accept: ["to weigh"], hint: "量る (はかる) = to measure weight / volume; same reading as 計る・測る." },
        { id: "ja-u182l2-hakaru3", type: "vocab", front: "測る", reading: "hakaru", meaning: "to measure", example: { jp: "へやのながさを測ります。", en: "I measure the length of the room." }, accept: ["to survey", "to gauge"], hint: "測る (はかる) = to measure length / size; same reading as 計る・量る." },
        { id: "ja-u182l2-haku", type: "vocab", front: "掃く", reading: "haku", meaning: "to sweep", example: { jp: "にわを掃きます。", en: "I sweep the garden." }, accept: ["to brush"], hint: "掃く (はく) = to sweep; same reading as 吐く (to vomit)." },
        { id: "ja-u182l2-haku2", type: "vocab", front: "吐く", reading: "haku", meaning: "to throw up", example: { jp: "きぶんがわるくて吐きました。", en: "I felt sick and threw up." }, accept: ["to vomit"], hint: "吐く (はく) = to vomit; same reading as 掃く (to sweep)." },
        { id: "ja-u182l2-hakushu", type: "vocab", front: "拍手", reading: "hakushu", meaning: "clapping", example: { jp: "みんなが拍手しました。", en: "Everyone applauded." }, accept: ["applause"] },
      ],
    },
    {
      id: "ja-u182l3", unit: 182, lesson: 3, title: "N3 vocab 64·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 莫大 (enormous), 爆発 (explosion), 博物館 (museum), 激しい (violent), 破産 (bankruptcy), 端 (end).",
      items: [
        { id: "ja-u182l3-bakudai", type: "vocab", front: "莫大", reading: "bakudai", meaning: "enormous", example: { jp: "莫大なおかねがかかります。", en: "It costs an enormous amount of money." }, accept: ["vast", "huge"] },
        { id: "ja-u182l3-bakuhatsu", type: "vocab", front: "爆発", reading: "bakuhatsu", meaning: "explosion", example: { jp: "こうじょうで爆発がおきました。", en: "An explosion happened at the factory." }, accept: ["detonation", "eruption"] },
        { id: "ja-u182l3-hakubutsukan", type: "vocab", front: "博物館", reading: "hakubutsukan", meaning: "museum", example: { jp: "あした博物館にいきます。", en: "I go to the museum tomorrow." }, accept: ["the museum"] },
        { id: "ja-u182l3-hageshii", type: "vocab", front: "激しい", reading: "hageshii", meaning: "violent", example: { jp: "きょうはあめが激しいです。", en: "The rain is intense today." }, accept: ["intense", "vehement"] },
        { id: "ja-u182l3-hasan", type: "vocab", front: "破産", reading: "hasan", meaning: "bankruptcy", example: { jp: "かいしゃが破産しました。", en: "The company went bankrupt." }, accept: ["insolvency"] },
        { id: "ja-u182l3-hashi", type: "vocab", front: "端", reading: "hashi", meaning: "end", example: { jp: "みちの端をあるきます。", en: "I walk along the edge of the road." }, accept: ["edge", "margin"] },
      ],
    },
    {
      id: "ja-u182l4", unit: 182, lesson: 4, title: "N3 vocab 64·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 始まり (origin), 外す (to unfasten), 外れる (to come off), 旗 (flag), 肌 (skin), 裸 (naked).",
      items: [
        { id: "ja-u182l4-hajimari", type: "vocab", front: "始まり", reading: "hajimari", meaning: "beginning", example: { jp: "これがものがたりの始まりです。", en: "This is the beginning of the story." }, accept: ["origin", "start"] },
        { id: "ja-u182l4-hazusu", type: "vocab", front: "外す", reading: "hazusu", meaning: "to unfasten", example: { jp: "めがねを外します。", en: "I take off my glasses." }, accept: ["to remove", "to take off"] },
        { id: "ja-u182l4-hazureru", type: "vocab", front: "外れる", reading: "hazureru", meaning: "to come off", example: { jp: "ボタンが外れました。", en: "The button came off." }, accept: ["to be disconnected", "to slip out"] },
        { id: "ja-u182l4-hata", type: "vocab", front: "旗", reading: "hata", meaning: "flag", example: { jp: "こどもが旗をふります。", en: "The child waves a flag." }, accept: ["banner"] },
        { id: "ja-u182l4-hada", type: "vocab", front: "肌", reading: "hada", meaning: "skin", example: { jp: "かのじょは肌がきれいです。", en: "She has beautiful skin." }, accept: ["complexion"] },
        { id: "ja-u182l4-hadaka", type: "vocab", front: "裸", reading: "hadaka", meaning: "naked", example: { jp: "あかちゃんが裸になりました。", en: "The baby became naked." }, accept: ["nude", "bare"] },
      ],
    },
  ],
};
