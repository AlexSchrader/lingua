// Unit 159 — かんじ・ねだんと ぎじゅつ — B2 / JLPT N2
// Strand A. Value, print and skill — what a thing is worth, what gets published, and the words for a habit or a knack.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the shape B1 settled on:
// 16 glyphs per unit will not fill a flat 4 x 6, and the compounds are the payoff
// for the glyphs just taught. Every kanji in a compound front is taught at or
// before this unit — verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT159 = {
  id: "ja-u159",
  lang: "ja",
  title: "かんじ・ねだんと ぎじゅつ",
  order: 159,
  stage: "b2",
  lessons: [
    {
      id: "ja-u159l1",
      unit: 159,
      lesson: 1,
      title: "Worth and water",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 価 (value), 河 (a large river), 可 (possible), 賀 (congratulation), and the words 河口 and 銀河.",
      items: [
        { id: "ja-u159l1-4fa1", type: "kanji", front: "価", reading: "ka", meaning: "value", example: { jp: "この 品の 価は、年ごとに 上がって います。", en: "This item's value rises year by year." }, accept: ["price", "worth"] },
        { id: "ja-u159l1-6cb3", type: "kanji", front: "河", reading: "kawa", meaning: "a large river", example: { jp: "大きな 河を ふねで 渡りました。", en: "We crossed the great river by boat." }, accept: ["stream"], hint: "川 is any river; 河 is a big one — 銀河 is the Milky Way, literally the silver river." },
        { id: "ja-u159l1-53ef", type: "kanji", front: "可", reading: "ka", meaning: "possible", example: { jp: "この へやは 十人まで 可です。", en: "This room takes up to ten people." }, accept: ["permissible", "-able"] },
        { id: "ja-u159l1-8cc0", type: "kanji", front: "賀", reading: "ga", meaning: "congratulation", example: { jp: "年賀の はがきを 書きました。", en: "I wrote New Year greeting cards." }, accept: ["celebration", "felicitation"] },
        { id: "ja-u159l1-kako", type: "vocab", front: "河口", reading: "kakō", meaning: "a river mouth", example: { jp: "河口の 近くには 大きな 港が あります。", en: "There is a large harbour near the river mouth." }, accept: ["estuary", "where a river meets the sea"] },
        { id: "ja-u159l1-ginga", type: "vocab", front: "銀河", reading: "ginga", meaning: "the galaxy", example: { jp: "よるは 銀河が よく 見えます。", en: "The galaxy is clearly visible at night." }, accept: ["Milky Way"] },
      ],
    },
    {
      id: "ja-u159l2",
      unit: 159,
      lesson: 2,
      title: "Print and backbone",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 刊 (publication), 幹 (trunk), 慣 (to get used to), 眼 (the eye), and the words 年賀 and 幹部.",
      items: [
        { id: "ja-u159l2-520a", type: "kanji", front: "刊", reading: "kan", meaning: "publication", example: { jp: "その 本は 先月 刊行されました。", en: "That book was published last month." }, accept: ["to publish", "issue"] },
        { id: "ja-u159l2-5e79", type: "kanji", front: "幹", reading: "kan", meaning: "trunk", example: { jp: "木の 幹に 手を あてて みました。", en: "I put my hand against the tree trunk." }, accept: ["main part", "stem"], hint: "幹 = the trunk, and by extension the core of anything — 幹部 is the leadership of an organisation." },
        { id: "ja-u159l2-6163", type: "kanji", front: "慣", reading: "kan", meaning: "to get used to", example: { jp: "新しい 生活に やっと 慣れました。", en: "I've finally got used to the new life." }, accept: ["accustomed", "habit"] },
        { id: "ja-u159l2-773c", type: "kanji", front: "眼", reading: "gan", meaning: "the eye", example: { jp: "医者に 眼を みて もらいました。", en: "I had a doctor look at my eyes." }, accept: ["eyeball", "insight"] },
        { id: "ja-u159l2-nenga", type: "vocab", front: "年賀", reading: "nenga", meaning: "New Year greeting", example: { jp: "年賀の あいさつを 出しました。", en: "I sent New Year greetings." }, accept: ["new year card"] },
        { id: "ja-u159l2-kanbu", type: "vocab", front: "幹部", reading: "kanbu", meaning: "the leadership", example: { jp: "会社の 幹部が 集まりました。", en: "The company's leadership gathered." }, accept: ["executives", "senior staff"] },
      ],
    },
    {
      id: "ja-u159l3",
      unit: 159,
      lesson: 3,
      title: "Habit and eye",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 基 (foundation), 寄 (to draw near), 技 (skill), 逆 (the reverse), and the words 基地 and 逆流.",
      items: [
        { id: "ja-u159l3-57fa", type: "kanji", front: "基", reading: "ki", meaning: "foundation", example: { jp: "この 考えを 基に 計画を 立てます。", en: "We'll build the plan on this idea." }, accept: ["basis", "fundamental"] },
        { id: "ja-u159l3-5bc4", type: "kanji", front: "寄", reading: "ki", meaning: "to draw near", example: { jp: "帰りに 店に 寄りました。", en: "I stopped by the shop on the way home." }, accept: ["to drop in", "to donate"] },
        { id: "ja-u159l3-6280", type: "kanji", front: "技", reading: "gi", meaning: "skill", example: { jp: "その 技は 長い 年月を かけて おぼえます。", en: "That skill takes long years to learn." }, accept: ["technique", "craft"] },
        { id: "ja-u159l3-9006", type: "kanji", front: "逆", reading: "gyaku", meaning: "the reverse", example: { jp: "話が 逆に なって しまいました。", en: "The story ended up back to front." }, accept: ["opposite", "contrary"] },
        { id: "ja-u159l3-kichi", type: "vocab", front: "基地", reading: "kichi", meaning: "a base", example: { jp: "南きょくの 基地で 一年 かんそくを しました。", en: "I spent a year observing at the Antarctic base." }, accept: ["station", "outpost"] },
        { id: "ja-u159l3-gyakuryu", type: "vocab", front: "逆流", reading: "gyakuryū", meaning: "flowing backwards", example: { jp: "大雨で 川の 水が 逆流しました。", en: "Heavy rain made the river flow backwards." }, accept: ["backflow", "reverse current"] },
      ],
    },
    {
      id: "ja-u159l4",
      unit: 159,
      lesson: 4,
      title: "Skill and the past",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 久 (long time), 旧 (former), 巨 (huge), 境 (boundary), and the words 永久 and 国境.",
      items: [
        { id: "ja-u159l4-4e45", type: "kanji", front: "久", reading: "kyū", meaning: "long time", example: { jp: "久しぶりに 友だちに 会いました。", en: "I met a friend for the first time in ages." }, accept: ["lasting", "a while"] },
        { id: "ja-u159l4-65e7", type: "kanji", front: "旧", reading: "kyū", meaning: "former", example: { jp: "旧い 駅は もう 使われて いません。", en: "The former station is no longer used." }, accept: ["old", "previous"], hint: "旧 is 'the previous one' — 旧年 last year, 旧道 the old road. 古い is old in age; 旧 is old in sequence." },
        { id: "ja-u159l4-5de8", type: "kanji", front: "巨", reading: "kyo", meaning: "huge", example: { jp: "巨大な ふねが 港に 入って きました。", en: "A huge ship came into the harbour." }, accept: ["giant", "enormous"] },
        { id: "ja-u159l4-5883", type: "kanji", front: "境", reading: "kyō", meaning: "boundary", example: { jp: "二つの 国の 境に 川が あります。", en: "There's a river on the border of the two countries." }, accept: ["border", "frontier"] },
        { id: "ja-u159l4-eikyu", type: "vocab", front: "永久", reading: "eikyū", meaning: "permanent", example: { jp: "永久に つづく ものは ありません。", en: "Nothing lasts permanently." }, accept: ["forever", "perpetual"] },
        { id: "ja-u159l4-kokkyo", type: "vocab", front: "国境", reading: "kokkyō", meaning: "a national border", example: { jp: "国境を 越えると、ことばが 変わります。", en: "Cross the border and the language changes." }, accept: ["frontier"] },
      ],
    },
  ],
};
