// JA Unit 136 — かんじ・れいぎ (N3 kanji — courtesy and order) — B1 / JLPT N3
// Glyph ownership and card shape are documented in unit119.js: the last slice of
// the pool that remains once block 1's authored 160 glyphs are subtracted. With
// this unit every N3 glyph in the band is taught exactly once across the two
// blocks — 334 in the superset, 14 already taught below B1, 160 to block 1, 160
// here — which the first draft's colliding split did not achieve.
export const UNIT136 = {
  id: "ja-u136",
  lang: "ja",
  title: "かんじ・れいぎ",
  order: 136,
  stage: "b1",
  lessons: [
    {
      id: "ja-u136l1",
      unit: 136,
      lesson: 1,
      title: "Sending, keeping, containing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 輸 (transport), 預 (deposit), 容 (contain), 様 (formal Mr/Ms), and the words 預金 and 輸送.",
      items: [
        { id: "ja-u136l1-yu", type: "kanji", front: "輸", reading: "yu", meaning: "transport", example: { jp: "車を輸出する会社なので、外国語を使う日が多いです。", en: "It's a company that exports cars, so we use foreign languages most days." }, accept: ["ship", "convey", "export/import"], hint: "輸 = 車 (vehicle) carrying goods away. 輸出 = export (out), 輸入 = import (in)." },
        { id: "ja-u136l1-azukeru", type: "kanji", front: "預", reading: "azukeru", meaning: "deposit", example: { jp: "お金を預けてから、家に帰りました。", en: "I deposited the money, and then went home." }, accept: ["entrust", "leave with", "keep for"], hint: "預 = 予 (beforehand) + 頁 (head) — leaving something in another's keeping until later. 預金 = savings." },
        { id: "ja-u136l1-yocontain", type: "kanji", front: "容", reading: "yō", meaning: "contain", example: { jp: "このパソコンは容量が足りないので、写真をけしました。", en: "This computer is short on capacity, so I deleted some photos." }, accept: ["capacity", "form", "accept"], hint: "容 = a roof over a space with room inside. 容量 = capacity, 収容 = taking people in." },
        { id: "ja-u136l1-sama", type: "kanji", front: "様", reading: "sama", meaning: "Mr / Ms (formal)", example: { jp: "田中様からお電話があったので、あとでかけなおします。", en: "There was a call from Mr Tanaka, so I'll ring back later." }, accept: ["honorific suffix", "way", "appearance"], hint: "様 = the way a thing is or appears. 田中様 = Mr/Ms Tanaka, a step politer than さん; 様子 = how things look." },
        { id: "ja-u136l1-yokin", type: "vocab", front: "預金", reading: "yokin", meaning: "savings", example: { jp: "預金は少なくても、しゃっきんがないので気は楽です。", en: "My savings may be small, but I have no debt, so my mind is easy." }, accept: ["bank deposit", "money in the bank"] },
        { id: "ja-u136l1-yuso", type: "vocab", front: "輸送", reading: "yusō", meaning: "transport", example: { jp: "輸送に時間がかかったので、はつばいをのばしました。", en: "Transport took a long time, so we put back the release." }, accept: ["shipping", "haulage", "carriage"] },
      ],
    },
    {
      id: "ja-u136l2",
      unit: 136,
      lesson: 2,
      title: "Nurturing, disorder, advantage",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 養 (nourish), 乱 (disorder), 利 (advantage), 略 (abbreviate), and the words 教養 and 有利.",
      items: [
        { id: "ja-u136l2-yashinau", type: "kanji", front: "養", reading: "yashinau", meaning: "nourish", example: { jp: "家族を養うために、朝早くから仕事をしています。", en: "To support my family, I work from early in the morning." }, accept: ["support", "bring up", "cultivate"], hint: "養 = 食 (food) given to keep something growing. 教養 = cultivation of the mind." },
        { id: "ja-u136l2-midareru", type: "kanji", front: "乱", reading: "midareru", meaning: "disorder", example: { jp: "風で紙が乱れたので、上に本をおきました。", en: "The wind threw the papers into disorder, so I put a book on top." }, accept: ["chaos", "be in a mess", "riot"], hint: "乱 = threads all tangled at once. 乱れます = to fall into disorder, 乱暴 = violent behaviour." },
        { id: "ja-u136l2-ri", type: "kanji", front: "利", reading: "ri", meaning: "advantage", example: { jp: "この道は近くて便利なので、いつもここを通ります。", en: "This road is near and convenient, so I always come this way." }, accept: ["benefit", "profit", "gain"], hint: "利 = 禾 (grain) + 刂 (blade) — a sharp tool that pays off. 便利 = convenient, 利用 = making use of." },
        { id: "ja-u136l2-ryaku", type: "kanji", front: "略", reading: "ryaku", meaning: "abbreviate", example: { jp: "長い名前を略しても、みんな分かりました。", en: "Even with the long name shortened, everyone understood." }, accept: ["shorten", "omit", "outline"], hint: "略 = 田 (a field) + 各 — taking a shortcut across. 省略 = leaving out, 略します = to abbreviate." },
        { id: "ja-u136l2-kyoyo", type: "vocab", front: "教養", reading: "kyōyō", meaning: "cultivation", example: { jp: "教養があると、話がずいぶん広くなります。", en: "When you have some cultivation, your conversation broadens a great deal." }, accept: ["culture", "refinement", "being well-read"] },
        { id: "ja-u136l2-yuri", type: "vocab", front: "有利", reading: "yūri", meaning: "advantageous", example: { jp: "先に始めたほうが有利なので、今日からとりかかります。", en: "Starting first is an advantage, so I'll begin today." }, accept: ["favourable", "in one's favour", "an advantage"] },
      ],
    },
    {
      id: "ja-u136l3",
      unit: 136,
      lesson: 3,
      title: "Staying, good, territory",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 留 (stay on), 良 (good), 領 (territory), 緑 (green), and the words 留学 and 緑茶.",
      items: [
        { id: "ja-u136l3-tomeru", type: "kanji", front: "留", reading: "ryū", meaning: "stay on", example: { jp: "外国に留学してから、ものの見方がかわりました。", en: "Since studying abroad, my way of seeing things has changed." }, accept: ["remain", "detain", "keep in place"], hint: "留 = something held in one place rather than moving on. 留学 = staying abroad to study, 留守 = being out." },
        { id: "ja-u136l3-yoi", type: "kanji", front: "良", reading: "yoi", meaning: "good", example: { jp: "良い天気でしたので、山まで歩きました。", en: "The weather was good, so I walked as far as the mountain." }, accept: ["fine", "favourable", "well"], hint: "良い = the written form of いい. 良心 = conscience. Its on-yomi is りょう, like 領." },
        { id: "ja-u136l3-ryoterritory", type: "kanji", front: "領", reading: "ryō", meaning: "territory", example: { jp: "この島は国の領土なのに、人は住んでいません。", en: "This island is national territory, but nobody lives there." }, accept: ["domain", "jurisdiction", "possession"], hint: "領 = 令 (command) + 頁 (head) — the ground someone's word runs over. 領土 = territory, 領事館 = a consulate." },
        { id: "ja-u136l3-midori", type: "kanji", front: "緑", reading: "midori", meaning: "green", example: { jp: "山の緑がきれいで、しばらく車をとめて見ていました。", en: "The green of the mountain was beautiful, and I stopped the car to look a while." }, accept: ["verdure", "the colour green"], hint: "緑 = 糸 (thread) dyed with plant colour. Note Japanese calls a green traffic light 青 (blue), not 緑." },
        { id: "ja-u136l3-ryugaku", type: "vocab", front: "留学", reading: "ryūgaku", meaning: "studying abroad", example: { jp: "留学はお金がかかるので、二年かけてためました。", en: "Studying abroad costs money, so I saved for two years." }, accept: ["study overseas", "a year abroad"] },
        { id: "ja-u136l3-ryokucha", type: "vocab", front: "緑茶", reading: "ryokucha", meaning: "green tea", example: { jp: "緑茶はにがくても、食事のあとにはちょうどいいです。", en: "Bitter as green tea is, it's just right after a meal." }, accept: ["ryokucha", "Japanese green tea"] },
      ],
    },
    {
      id: "ja-u136l4",
      unit: 136,
      lesson: 4,
      title: "Courtesy, rows, roads",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 礼 (courtesy), 列 (row), 練 (train), 路 (road), and the words 道路 and 行列.",
      items: [
        { id: "ja-u136l4-rei", type: "kanji", front: "礼", reading: "rei", meaning: "courtesy", example: { jp: "お礼を言ってから、店を出ました。", en: "I said my thanks, and then left the shop." }, accept: ["thanks", "a bow", "politeness"], hint: "礼 = the bow you make at a shrine 示. お礼 = thanks, 失礼 = rudeness: a lapse of it." },
        { id: "ja-u136l4-retsu", type: "kanji", front: "列", reading: "retsu", meaning: "row", example: { jp: "長い列に並んだのに、思ったより早く入れました。", en: "I queued in a long row, but I got in sooner than I expected." }, accept: ["line", "queue", "column"], hint: "列 = things set out one after another. 行列 = a queue, 列車 = a train: carriages in a row." },
        { id: "ja-u136l4-neru", type: "kanji", front: "練", reading: "ren", meaning: "train", example: { jp: "毎日練習しているので、すこしずつ上手になっています。", en: "I practise every day, so I'm getting better bit by bit." }, accept: ["practise", "knead", "refine"], hint: "練 = 糸 (thread) worked over and over until it is smooth. 練習 = practice." },
        { id: "ja-u136l4-ro", type: "kanji", front: "路", reading: "ro", meaning: "road", example: { jp: "道路が広くなったので、車が速く走ります。", en: "The road got wider, so cars go fast." }, accept: ["route", "way", "path"], hint: "路 = 足 (foot) + 各 — where feet go. 道路 = a road, 線路 = a railway line." },
        { id: "ja-u136l4-doro", type: "vocab", front: "道路", reading: "dōro", meaning: "road", example: { jp: "道路がこんでいたので、一時間早く出ました。", en: "The road was congested, so I left an hour early." }, accept: ["highway", "the roads", "street"] },
        { id: "ja-u136l4-gyoretsu", type: "vocab", front: "行列", reading: "gyōretsu", meaning: "a queue", example: { jp: "行列ができていたので、うしろにならびました。", en: "A queue had formed, so I joined the back of it." }, accept: ["line of people", "procession", "queueing"] },
      ],
    },
  ],
};
