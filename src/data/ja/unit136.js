// JA Unit 136 — かんじ・N3・20 (N3 kanji, set 20) — B1 / JLPT N3
// Glyph ownership and card shape are documented in unit119.js: the last slice of
// the pool that remains once block 1's authored 160 glyphs are subtracted. With
// this unit every N3 glyph in the band is taught exactly once across the two
// blocks — 334 in the superset, 14 already taught below B1, 160 to block 1, 160
// here — which the first draft's colliding split did not achieve.
export const UNIT136 = {
  id: "ja-u136",
  lang: "ja",
  title: "かんじ・N3・20",
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
      canDo: "Read 輸 (transport), 預 (deposit), 容 (contain), 様 (manner), and the words 預金 and 輸送.",
      items: [
        { id: "ja-u136l1-yu", type: "kanji", front: "輸", reading: "yu", meaning: "transport", example: { jp: "車を輸出する会社ですが、社員は少ないです。", en: "It's a company that exports cars, but it has few staff." }, accept: ["ship", "convey", "export/import"], hint: "輸 = 車 (vehicle) carrying goods away. 輸出 = export (out), 輸入 = import (in)." },
        { id: "ja-u136l1-azukeru", type: "kanji", front: "預", reading: "yo", meaning: "deposit", example: { jp: "お金を預けてから、家に帰りました。", en: "I deposited the money, and then went home." }, accept: ["entrust", "leave with", "keep for"], hint: "預 = 予 (beforehand) + 頁 (head) — leaving something in another's keeping until later. 預金 = savings." },
        { id: "ja-u136l1-yocontain", type: "kanji", front: "容", reading: "yō", meaning: "contain", example: { jp: "この本の内容は難しいですが、面白いです。", en: "The contents of this book are difficult, but interesting." }, accept: ["capacity", "form", "accept"], hint: "容 = a roof over a space with room inside. 内容 = the contents, 容き = a container." },
        { id: "ja-u136l1-sama", type: "kanji", front: "様", reading: "sama", meaning: "manner", example: { jp: "同じ様に作りましたが、味がちがいます。", en: "I made it the same way, but the taste is different." }, accept: ["way", "appearance", "Mr/Ms (polite)"], hint: "様 = the way a thing is or appears. 田中様 = Mr/Ms Tanaka, a step politer than さん; 様子 = how things look." },
        { id: "ja-u136l1-yokin", type: "vocab", front: "預金", reading: "yokin", meaning: "savings", example: { jp: "預金は少ないですが、しゃっきんもありません。", en: "My savings are small, but I have no debt either." }, accept: ["bank deposit", "money in the bank"] },
        { id: "ja-u136l1-yuso", type: "vocab", front: "輸送", reading: "yusō", meaning: "transport", example: { jp: "輸送に時間がかかりましたが、品はきれいでした。", en: "Transport took a long time, but the goods arrived in good condition." }, accept: ["shipping", "haulage", "carriage"] },
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
        { id: "ja-u136l2-yashinau", type: "kanji", front: "養", reading: "yō", meaning: "nourish", example: { jp: "家族を養うために、朝早くから仕事をしています。", en: "To support my family, I work from early in the morning." }, accept: ["support", "bring up", "cultivate"], hint: "養 = 食 (food) given to keep something growing. 教養 = cultivation of the mind." },
        { id: "ja-u136l2-midareru", type: "kanji", front: "乱", reading: "ran", meaning: "disorder", example: { jp: "風で紙が乱れましたが、すぐ直しました。", en: "The papers were thrown into disorder by the wind, but I tidied them at once." }, accept: ["chaos", "be in a mess", "riot"], hint: "乱 = threads all tangled at once. 乱れます = to fall into disorder, 乱ぼう = violent behaviour." },
        { id: "ja-u136l2-ri", type: "kanji", front: "利", reading: "ri", meaning: "advantage", example: { jp: "この道は近くて便利ですが、車が多いです。", en: "This road is near and convenient, but there's a lot of traffic." }, accept: ["benefit", "profit", "gain"], hint: "利 = 禾 (grain) + 刂 (blade) — a sharp tool that pays off. 便利 = convenient, 利用 = making use of." },
        { id: "ja-u136l2-ryaku", type: "kanji", front: "略", reading: "ryaku", meaning: "abbreviate", example: { jp: "長い名前を略しましたが、みんな分かりました。", en: "I shortened the long name, but everyone understood." }, accept: ["shorten", "omit", "outline"], hint: "略 = 田 (a field) + 各 — taking a shortcut across. 省略 = leaving out, 略します = to abbreviate." },
        { id: "ja-u136l2-kyoyo", type: "vocab", front: "教養", reading: "kyōyō", meaning: "cultivation", example: { jp: "教養は仕事の役に立ちませんが、話が広くなります。", en: "Cultivation isn't much use for work, but it broadens your conversation." }, accept: ["culture", "refinement", "being well-read"] },
        { id: "ja-u136l2-yuri", type: "vocab", front: "有利", reading: "yūri", meaning: "advantageous", example: { jp: "先に始めたほうが有利ですが、じゅんびは大切です。", en: "Starting first is advantageous, but preparation matters." }, accept: ["favourable", "in one's favour", "an advantage"] },
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
        { id: "ja-u136l3-tomeru", type: "kanji", front: "留", reading: "ryū", meaning: "stay on", example: { jp: "外国に留学しましたが、一年で帰りました。", en: "I studied abroad, but I came home after a year." }, accept: ["remain", "detain", "keep in place"], hint: "留 = something held in one place rather than moving on. 留学 = staying abroad to study, 留守 = being out." },
        { id: "ja-u136l3-yoi", type: "kanji", front: "良", reading: "ryō", meaning: "good", example: { jp: "良い天気でしたので、山まで歩きました。", en: "The weather was good, so I walked as far as the mountain." }, accept: ["fine", "favourable", "well"], hint: "良い = the written form of いい. 良心 = conscience. Same りょう sound as 領." },
        { id: "ja-u136l3-ryoterritory", type: "kanji", front: "領", reading: "ryō", meaning: "territory", example: { jp: "この島は国の領土ですが、人は住んでいません。", en: "This island is national territory, but nobody lives there." }, accept: ["domain", "jurisdiction", "possession"], hint: "領 = 令 (command) + 頁 (head) — the ground someone's word runs over. 領土 = territory, 領事館 = a consulate." },
        { id: "ja-u136l3-midori", type: "kanji", front: "緑", reading: "midori", meaning: "green", example: { jp: "山の緑がきれいでしたが、写真ではよく見えません。", en: "The green of the mountain was beautiful, but it doesn't show well in a photo." }, accept: ["verdure", "the colour green"], hint: "緑 = 糸 (thread) dyed with plant colour. Note Japanese calls a green traffic light 青 (blue), not 緑." },
        { id: "ja-u136l3-ryugaku", type: "vocab", front: "留学", reading: "ryūgaku", meaning: "studying abroad", example: { jp: "留学はお金がかかりますが、ことばが早く上手になります。", en: "Studying abroad costs money, but your language improves quickly." }, accept: ["study overseas", "a year abroad"] },
        { id: "ja-u136l3-ryokucha", type: "vocab", front: "緑茶", reading: "ryokucha", meaning: "green tea", example: { jp: "緑茶はにがいですが、食事のあとにはちょうどいいです。", en: "Green tea is bitter, but it's just right after a meal." }, accept: ["ryokucha", "Japanese green tea"] },
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
        { id: "ja-u136l4-retsu", type: "kanji", front: "列", reading: "retsu", meaning: "row", example: { jp: "長い列に並びましたが、思ったより早く入れました。", en: "I queued in a long row, but I got in sooner than I expected." }, accept: ["line", "queue", "column"], hint: "列 = things set out one after another. 行列 = a queue, 列車 = a train: carriages in a row." },
        { id: "ja-u136l4-neru", type: "kanji", front: "練", reading: "ren", meaning: "train", example: { jp: "毎日練習していますが、まだ上手になりません。", en: "I practise every day, but I'm still not good." }, accept: ["practise", "knead", "refine"], hint: "練 = 糸 (thread) worked over and over until it is smooth. 練習 = practice." },
        { id: "ja-u136l4-ro", type: "kanji", front: "路", reading: "ro", meaning: "road", example: { jp: "道路が広くなったので、車が速く走ります。", en: "The road got wider, so cars go fast." }, accept: ["route", "way", "path"], hint: "路 = 足 (foot) + 各 — where feet go. 道路 = a road, 線路 = a railway line." },
        { id: "ja-u136l4-doro", type: "vocab", front: "道路", reading: "dōro", meaning: "road", example: { jp: "道路はこんでいましたが、時間には着きました。", en: "The road was congested, but I arrived on time." }, accept: ["highway", "the roads", "street"] },
        { id: "ja-u136l4-gyoretsu", type: "vocab", front: "行列", reading: "gyōretsu", meaning: "a queue", example: { jp: "行列ができていましたが、三十分で入れました。", en: "A queue had formed, but I got in within thirty minutes." }, accept: ["line of people", "procession", "queueing"] },
      ],
    },
  ],
};
