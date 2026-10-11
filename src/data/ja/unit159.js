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
        { id: "ja-u159l1-4fa1", type: "kanji", front: "価", reading: "ka", meaning: "value", example: { jp: "この 品の 価は、年ごとに 上がって います。", en: "This item's value rises year by year." }, accept: ["price", "worth", "what it is worth"], hint: "ka. The person radical plus 西 over 貝, a shell used as old money — what a person will pay. 価 alone is literary; you meet it inside 価格 (kakaku, price) and 評価 (hyōka, assessment)." },
        { id: "ja-u159l1-6cb3", type: "kanji", front: "河", reading: "kawa", meaning: "a large river", example: { jp: "大きな 河を ふねで 渡りました。", en: "We crossed the great river by boat." }, accept: ["stream", "a big river", "waterway"], hint: "川 is any river; 河 is a big one — 銀河 is the Milky Way, literally the silver river." },
        { id: "ja-u159l1-53ef", type: "kanji", front: "可", reading: "ka", meaning: "possible (permissible)", example: { jp: "この へやは 十人まで 可です。", en: "This room takes up to ten people." }, accept: ["permissible", "-able", "allowed"], hint: "ka. A mouth 口 with a bent stroke — permission spoken aloud. It works as a stamp rather than a word you say: 使用可 means usable, 不可 means not allowed. In grammar it builds 可能 (kanō)." },
        { id: "ja-u159l1-8cc0", type: "kanji", front: "賀", reading: "ga", meaning: "congratulation", example: { jp: "年賀の はがきを 書きました。", en: "I wrote New Year greeting cards." }, accept: ["celebration", "felicitation", "greetings"], hint: "ga. 加 (add) over 貝 (money, a gift): adding a gift to mark the occasion. Almost entirely confined to 年賀 and 賀状 — New Year greetings and the cards they are written on." },
        { id: "ja-u159l1-kako", type: "vocab", front: "河口", reading: "kakō", meaning: "a river mouth", example: { jp: "河口の 近くには 大きな 港が あります。", en: "There is a large harbour near the river mouth." }, drill: { jp: "河口に ふねが あつまります。", en: "Boats gather at the river mouth." }, accept: ["estuary", "where a river meets the sea", "mouth of a river"], hint: "kakō — 河 (large river) + 口 (mouth): the literal mouth of a river. 川 is any river, 河 is a big one, which is why a delta city sits at a 河口 rather than a 川口." },
        { id: "ja-u159l1-ginga", type: "vocab", front: "銀河", reading: "ginga", meaning: "the galaxy", example: { jp: "よるは 銀河が よく 見えます。", en: "The galaxy is clearly visible at night." }, drill: { jp: "銀河の しゃしんを 見ました。", en: "I looked at a photograph of the galaxy." }, accept: ["Milky Way", "a galaxy", "the Milky Way"], hint: "ginga — 銀 (silver) + 河 (large river): the silver river across the sky. It means the Milky Way, and in astronomy any galaxy. For once the English and Japanese images agree on a river." },
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
        { id: "ja-u159l2-520a", type: "kanji", front: "刊", reading: "kan", meaning: "publication (to publish an issue)", example: { jp: "その 本は 先月 刊行されました。", en: "That book was published last month." }, accept: ["to publish", "issue", "edition"], hint: "kan. 干 (a pole) beside the knife radical — cutting printing blocks. It only ever appears bound: 刊行 (publishing), 週刊 (weekly), 朝刊 (the morning edition). Never alone." },
        { id: "ja-u159l2-5e79", type: "kanji", front: "幹", reading: "kan", meaning: "trunk (the main stem)", example: { jp: "木の 幹に 手を あてて みました。", en: "I put my hand against the tree trunk." }, accept: ["main part", "stem", "the trunk"], hint: "幹 = the trunk, and by extension the core of anything — 幹部 is the leadership of an organisation." },
        { id: "ja-u159l2-6163", type: "kanji", front: "慣", reading: "kan", meaning: "to get used to (to become accustomed)", example: { jp: "新しい 生活に やっと 慣れました。", en: "I've finally got used to the new life." }, accept: ["accustomed", "habit", "to grow used to"], hint: "kan. The heart radical plus 貫 (to pierce through) — something that has run right through you. 慣れる is you getting used to it; 習慣 (shūkan) is the habit that comes out the other side." },
        { id: "ja-u159l2-773c", type: "kanji", front: "眼", reading: "gan", meaning: "the eye", example: { jp: "医者に 眼を みて もらいました。", en: "I had a doctor look at my eyes." }, accept: ["eyeball", "insight", "the eye as an organ"], hint: "gan, and め inside 眼鏡 (glasses). 目 plus 艮: the eye as an ORGAN, where 目 is the eye you look with. A doctor checks your 眼; you catch someone's 目. It also means insight — 見る眼が ある." },
        { id: "ja-u159l2-nenga", type: "vocab", front: "年賀", reading: "nenga", meaning: "New Year greeting", example: { jp: "年賀の あいさつを 出しました。", en: "I sent New Year greetings." }, drill: { jp: "年賀を 書きました。", en: "I wrote New Year greetings." }, accept: ["new year card", "new year greetings", "new year wishes"], hint: "nenga — 年 (year) + 賀 (congratulation): the New Year greeting itself. 年賀状 is the card it goes on, and Japan posts them in the hundreds of millions each January." },
        { id: "ja-u159l2-kanbu", type: "vocab", front: "幹部", reading: "kanbu", meaning: "the leadership", example: { jp: "会社の 幹部が 集まりました。", en: "The company's leadership gathered." }, drill: { jp: "幹部が あつまりました。", en: "The leadership gathered." }, accept: ["executives", "senior staff", "management"], hint: "kanbu — 幹 (trunk) + 部 (section): the trunk of the organisation, the part everything else grows off. Directors and senior managers, not simply anybody's boss." },
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
        { id: "ja-u159l3-57fa", type: "kanji", front: "基", reading: "ki", meaning: "foundation", example: { jp: "この 考えを 基に 計画を 立てます。", en: "We'll build the plan on this idea." }, accept: ["basis", "fundamental", "groundwork"], hint: "ki. 其 over 土 (earth) — the groundwork laid before anything else. 基に する is to build ON something, 基本 (kihon) is the basics, and 基地 two cards on is a base you operate from." },
        { id: "ja-u159l3-5bc4", type: "kanji", front: "寄", reading: "ki", meaning: "to draw near", example: { jp: "帰りに 店に 寄りました。", en: "I stopped by the shop on the way home." }, accept: ["to drop in", "to donate", "to stop by"], hint: "ki. The roof radical over 奇 — pulling in under cover. Two everyday senses: 寄る is to stop by somewhere on your way, and 寄付 (kifu) is to donate, handing something over." },
        { id: "ja-u159l3-6280", type: "kanji", front: "技", reading: "gi", meaning: "skill", example: { jp: "その 技は 長い 年月を かけて おぼえます。", en: "That skill takes long years to learn." }, accept: ["technique", "craft", "a learned skill"], hint: "gi, and わざ on its own. The hand radical plus 支 (support) — what the hands can do. 技 is a learned technique you can demonstrate where 力 is raw ability; 技術 (gijutsu) is technology." },
        { id: "ja-u159l3-9006", type: "kanji", front: "逆", reading: "gyaku", meaning: "the reverse", example: { jp: "話が 逆に なって しまいました。", en: "The story ended up back to front." }, accept: ["opposite", "contrary", "the other way round"], hint: "gyaku. The road radical with a figure walking against the flow. 逆に at the head of a sentence means on the contrary; 逆 alone is the opposite side of anything — direction, order, argument." },
        { id: "ja-u159l3-kichi", type: "vocab", front: "基地", reading: "kichi", meaning: "a base", example: { jp: "南きょくの 基地で 一年 かんそくを しました。", en: "I spent a year observing at the Antarctic base." }, drill: { jp: "基地を 出ました。", en: "We left the base." }, accept: ["station", "outpost", "a base"], hint: "kichi — 基 (foundation) + 地 (ground): the ground you are based on. Military, polar, sporting. Narrower than 本部 (headquarters), which is about command rather than place." },
        { id: "ja-u159l3-gyakuryu", type: "vocab", front: "逆流", reading: "gyakuryū", meaning: "flowing backwards", example: { jp: "大雨で 川の 水が 逆流しました。", en: "Heavy rain made the river flow backwards." }, drill: { jp: "逆流が とまりました。", en: "The backflow has stopped." }, accept: ["backflow", "reverse current", "flowing back"], hint: "gyakuryū — 逆 (reverse) + 流 (flow): water, traffic or stomach acid going the wrong way. Always a malfunction and never a choice, which is why the news uses it for floods." },
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
        { id: "ja-u159l4-4e45", type: "kanji", front: "久", reading: "kyū", meaning: "long time", example: { jp: "久しぶりに 友だちに 会いました。", en: "I met a friend for the first time in ages." }, accept: ["lasting", "a while", "a long time"], hint: "kyū, and ひさ inside 久しぶり. A leaning figure with a prop under it — holding on for a long time. 久しぶり, it has been a while, is the one phrase every learner meets first." },
        { id: "ja-u159l4-65e7", type: "kanji", front: "旧", reading: "kyū", meaning: "former", example: { jp: "旧い 駅は もう 使われて いません。", en: "The former station is no longer used." }, accept: ["old", "previous", "the former one"], hint: "旧 is 'the previous one' — 旧年 last year, 旧道 the old road. 古い is old in age; 旧 is old in sequence." },
        { id: "ja-u159l4-5de8", type: "kanji", front: "巨", reading: "kyo", meaning: "huge", example: { jp: "巨大な ふねが 港に 入って きました。", en: "A huge ship came into the harbour." }, accept: ["giant", "enormous", "vast"], hint: "kyo. The shape is a carpenter's ruler — size measured rather than guessed. It lives in compounds: 巨大 (kyodai) huge, 巨人 (kyojin) a giant. Bigger and far more formal than 大きい." },
        { id: "ja-u159l4-5883", type: "kanji", front: "境", reading: "kyō", meaning: "boundary", example: { jp: "二つの 国の 境に 川が あります。", en: "There's a river on the border of the two countries." }, accept: ["border", "frontier", "a dividing line"], hint: "kyō, and さかい alone. 土 (earth) plus 竟 (to finish) — where the ground ends. 国境 is a national border, and 境 stretches to a frontier of knowledge or a state of mind, 心境." },
        { id: "ja-u159l4-eikyu", type: "vocab", front: "永久", reading: "eikyū", meaning: "permanent", example: { jp: "永久に つづく ものは ありません。", en: "Nothing lasts permanently." }, drill: { jp: "永久に 変わりません。", en: "It will never change." }, accept: ["forever", "perpetual", "permanently"], hint: "eikyū — 永 (eternal) + 久 (long time), two near-synonyms stacked for force. Stronger than ずっと and at home in legal and technical writing: 永久に is permanently, with no end set." },
        { id: "ja-u159l4-kokkyo", type: "vocab", front: "国境", reading: "kokkyō", meaning: "a national border", example: { jp: "国境を 越えると、ことばが 変わります。", en: "Cross the border and the language changes." }, drill: { jp: "国境が 近いです。", en: "The border is close." }, accept: ["frontier", "a national border", "the border"], hint: "kokkyō — 国 (country) + 境 (boundary). Watch the reading: こっきょう, with the く of こく assimilating. It is the line itself, and crossing it is 国境を 越える, the stock phrase." },
      ],
    },
  ],
};
