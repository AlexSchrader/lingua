// Unit 173 — かんじ・ものと しゃかい — B2 / JLPT N2
// Strand A. N2 glyphs for things and society — goods and sprouts, machines and pictures,
// bone and sand, courts and policy. Slot new[112:128] of the deduped N2 list.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards; every compound kanji is taught
// at or before this unit — verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT173 = {
  id: "ja-u173",
  lang: "ja",
  title: "かんじ・ものと しゃかい",
  order: 173,
  stage: "b2",
  lessons: [
    {
      id: "ja-u173l1",
      unit: 173,
      lesson: 1,
      title: "Goods and sprouts",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 貨 (goods), 芽 (sprout), 介 (to mediate), 灰 (ash), and the words 貨物 and 灰色.",
      items: [
        { id: "ja-u173l1-8ca8", type: "kanji", front: "貨", reading: "ka", meaning: "goods", example: { jp: "この 電車は 人では なく 貨物を はこんで います。", en: "This train carries goods, not people." }, accept: ["freight", "money"], hint: "貨 = the 貝 (shell/money) radical again. 貨物 = freight, 通貨 = currency, 百貨店 = a department store." },
        { id: "ja-u173l1-82bd", type: "kanji", front: "芽", reading: "ga", meaning: "sprout", example: { jp: "春に なって、木の 芽が やっと 出て きました。", en: "Spring came, and the trees' buds finally appeared." }, accept: ["a bud", "to sprout"], hint: "芽 (me) = a bud or sprout — the 艹 (grass) radical over 牙 (a tooth pushing through). 発芽 = germination." },
        { id: "ja-u173l1-4ecb", type: "kanji", front: "介", reading: "kai", meaning: "to mediate", example: { jp: "けんかに なった 二人の 間に、先生が 介入しました。", en: "The teacher stepped in between the two who were fighting." }, accept: ["to come between", "care"], hint: "介 = to stand between. 紹介 = an introduction, 介護 = nursing care, 介入 = intervention." },
        { id: "ja-u173l1-7070", type: "kanji", front: "灰", reading: "kai", meaning: "ash", example: { jp: "そらが 灰色に なって、雨が ふりそうです。", en: "The sky has turned grey; it looks like rain." }, accept: ["ashes", "grey"], hint: "灰 (hai) = ash — 火 (fire) under a hand, what fire leaves. 灰色 = grey, 火山灰 = volcanic ash." },
        { id: "ja-u173l1-kamotsu", type: "vocab", front: "貨物", reading: "kamotsu", meaning: "freight", example: { jp: "大きな トラックが たくさんの 貨物を はこんで います。", en: "A big truck is carrying a lot of freight." }, accept: ["cargo", "goods"] },
        { id: "ja-u173l1-haiiro", type: "vocab", front: "灰色", reading: "haiiro", meaning: "grey", example: { jp: "ふゆの そらは いつも 灰色で、さむそうです。", en: "The winter sky is always grey and looks cold." }, accept: ["ash-coloured", "gray"] },
      ],
    },
    {
      id: "ja-u173l2",
      unit: 173,
      lesson: 2,
      title: "Machines and pictures",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 械 (device), 皆 (everyone), 絵 (picture), 較 (to compare), and the words 機械 and 比較.",
      items: [
        { id: "ja-u173l2-68b0", type: "kanji", front: "械", reading: "kai", meaning: "device", example: { jp: "この 工場には 新しい 機械が たくさん あります。", en: "This factory has many new machines." }, accept: ["a machine", "contrivance"], hint: "械 almost never appears alone — it exists to build 機械 (machine) and 器械 (an instrument)." },
        { id: "ja-u173l2-7686", type: "kanji", front: "皆", reading: "kai", meaning: "everyone", example: { jp: "クラスの 皆が その いけんに さんせいしました。", en: "Everyone in the class agreed with that opinion." }, accept: ["all", "everybody"], hint: "皆 (mina) = everyone — the everyday word. 皆さん = everybody (polite), 皆勤 = perfect attendance." },
        { id: "ja-u173l2-7d75", type: "kanji", front: "絵", reading: "e", meaning: "picture", example: { jp: "子どもが クレヨンで きれいな 絵を かきました。", en: "The child drew a pretty picture with crayons." }, accept: ["a drawing", "painting"], hint: "絵 (e) = a picture. 絵本 = a picture book, 絵画 = paintings, 油絵 = an oil painting." },
        { id: "ja-u173l2-8f03", type: "kanji", front: "較", reading: "kaku", meaning: "to compare", example: { jp: "二つの 品物を よく 比較して から 買います。", en: "I compare the two items carefully before buying." }, accept: ["comparison"], hint: "較 lives in one common word: 比較 (comparison). The 車 radical hints at lining things up side by side." },
        { id: "ja-u173l2-kikai", type: "vocab", front: "機械", reading: "kikai", meaning: "a machine", example: { jp: "この 機械の 使い方を おしえて ください。", en: "Please teach me how to use this machine." }, accept: ["machinery", "a device"] },
        { id: "ja-u173l2-hikaku", type: "vocab", front: "比較", reading: "hikaku", meaning: "comparison", example: { jp: "ねだんを 比較して、やすい ほうを えらびました。", en: "I compared the prices and chose the cheaper one." }, accept: ["a contrast", "comparing"] },
      ],
    },
    {
      id: "ja-u173l3",
      unit: 173,
      lesson: 3,
      title: "Bone and sand",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 刻 (to carve), 骨 (bone), 困 (to be troubled), 砂 (sand), and the words 時刻 and 困難.",
      items: [
        { id: "ja-u173l3-523b", type: "kanji", front: "刻", reading: "koku", meaning: "to carve", example: { jp: "電車の 時刻を しらべて から 出かけます。", en: "I check the train times before going out." }, accept: ["a moment", "to engrave"], hint: "刻む (kizamu) = to carve or chop finely. 時刻 = the exact time, 深刻 = serious/grave, 遅刻 = being late." },
        { id: "ja-u173l3-9aa8", type: "kanji", front: "骨", reading: "kotsu", meaning: "bone", example: { jp: "かいだんで ころんで、手の 骨を おって しまいました。", en: "I fell on the stairs and broke a bone in my hand." }, accept: ["the bones", "a knack"], hint: "骨 (hone) = bone. 骨折 = a fracture; the reading kotsu also means the knack of a thing — 骨が おれる = hard work." },
        { id: "ja-u173l3-56f0", type: "kanji", front: "困", reading: "kon", meaning: "to be troubled", example: { jp: "さいふを なくして、とても 困って います。", en: "I lost my wallet and am really in trouble." }, accept: ["to be at a loss", "distress"], hint: "困る (komaru) = to be troubled — a 木 (tree) boxed in, unable to grow. 困難 = difficulty." },
        { id: "ja-u173l3-7802", type: "kanji", front: "砂", reading: "sa", meaning: "sand", example: { jp: "子どもたちが 砂で 大きな やまを 作って います。", en: "The children are building a big mountain out of sand." }, accept: ["grit"], hint: "砂 (suna) = sand — 石 (stone) beside 少 (few/small), stone ground small. 砂糖 = sugar, 砂ばく = a desert." },
        { id: "ja-u173l3-jikoku", type: "vocab", front: "時刻", reading: "jikoku", meaning: "the time", example: { jp: "バスの 出る 時刻を もう 一度 かくにんします。", en: "I'll check the bus departure time once more." }, accept: ["the hour", "a point in time"] },
        { id: "ja-u173l3-konnan", type: "vocab", front: "困難", reading: "konnan", meaning: "difficulty", example: { jp: "その しごとは 思って いたより ずっと 困難でした。", en: "That work was far more difficult than I had thought." }, accept: ["hardship", "trouble"] },
      ],
    },
    {
      id: "ja-u173l4",
      unit: 173,
      lesson: 4,
      title: "Courts and policy",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 座 (to sit), 済 (to settle), 裁 (to judge), 策 (policy), and the words 経済 and 裁判.",
      items: [
        { id: "ja-u173l4-5ea7", type: "kanji", front: "座", reading: "za", meaning: "to sit", example: { jp: "たたみの 上に 座って、ゆっくり お茶を のみました。", en: "I sat down on the tatami and drank tea slowly." }, accept: ["a seat", "to take a seat"], hint: "座る (suwaru) = to sit. 座席 = a seat, 正座 = sitting formally on your knees, 星座 = a constellation." },
        { id: "ja-u173l4-6e08", type: "kanji", front: "済", reading: "sai", meaning: "to settle", example: { jp: "この 国の 経済は だんだん よく なって います。", en: "This country's economy is gradually getting better." }, accept: ["to finish", "to be done"], hint: "済む (sumu) = to be finished or settled. 経済 = the economy, 返済 = repayment, ～済み = already done." },
        { id: "ja-u173l4-88c1", type: "kanji", front: "裁", reading: "sai", meaning: "to judge", example: { jp: "その あらそいは、さいごに 裁判で あらそわれました。", en: "That dispute was ultimately fought out in court." }, accept: ["to try (a case)", "to cut cloth"], hint: "裁く (sabaku) = to judge; 裁つ (tatsu) = to cut cloth. 裁判 = a trial, 裁判所 = a courthouse." },
        { id: "ja-u173l4-7b56", type: "kanji", front: "策", reading: "saku", meaning: "policy", example: { jp: "せいふは 新しい 政策を はっぴょうしました。", en: "The government announced a new policy." }, accept: ["a plan", "a measure", "a scheme"], hint: "策 = a plan or measure. 政策 = a policy, 対策 = a countermeasure, 政策を ねる = to work out a plan." },
        { id: "ja-u173l4-keizai", type: "vocab", front: "経済", reading: "keizai", meaning: "economy", example: { jp: "大学で 世界の 経済に ついて 勉強して います。", en: "I'm studying the world economy at university." }, accept: ["economics", "finance"] },
        { id: "ja-u173l4-saiban", type: "vocab", front: "裁判", reading: "saiban", meaning: "a trial", example: { jp: "その あらそいは 長い 裁判に なりました。", en: "That dispute became a long court case." }, accept: ["a court case", "judgement"] },
      ],
    },
  ],
};
