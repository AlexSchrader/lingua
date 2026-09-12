// Unit 157 — かんじ・くらしと しごと — B2 / JLPT N2
// Strand A. Everyday and working-life glyphs — pressure and movement, what you wear and stamp, business and benefit.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the shape B1 settled on:
// 16 glyphs per unit will not fill a flat 4 x 6, and the compounds are the payoff
// for the glyphs just taught. Every kanji in a compound front is taught at or
// before this unit — verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT157 = {
  id: "ja-u157",
  lang: "ja",
  title: "かんじ・くらしと しごと",
  order: 157,
  stage: "b2",
  lessons: [
    {
      id: "ja-u157l1",
      unit: 157,
      lesson: 1,
      title: "Pressure and movement",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 圧 (pressure), 移 (to shift), 囲 (to surround), 委 (to entrust), and the words 気圧 and 移動.",
      items: [
        { id: "ja-u157l1-5727", type: "kanji", front: "圧", reading: "atsu", meaning: "pressure", example: { jp: "気圧が 下がると、あたまが 痛く なる 人も います。", en: "When the air pressure drops, some people get headaches." }, accept: ["force", "stress"], hint: "圧 = pressure — 土 (earth) beneath, something pressing down. 気圧 = air pressure, 血圧 = blood pressure." },
        { id: "ja-u157l1-79fb", type: "kanji", front: "移", reading: "i", meaning: "to shift", example: { jp: "会社が となりの 町に 移りました。", en: "The company moved to the next town." }, accept: ["to move", "transfer"] },
        { id: "ja-u157l1-56f2", type: "kanji", front: "囲", reading: "i", meaning: "to surround", example: { jp: "高い かべに 囲まれた 家です。", en: "It's a house surrounded by high walls." }, accept: ["to enclose", "surroundings"], hint: "囲 = surround — the box IS the enclosure, drawn around 井." },
        { id: "ja-u157l1-59d4", type: "kanji", front: "委", reading: "i", meaning: "to entrust", example: { jp: "その しごとは 部下に 委せました。", en: "I entrusted that work to my staff." }, accept: ["to leave to", "committee"] },
        { id: "ja-u157l1-kiatsu", type: "vocab", front: "気圧", reading: "kiatsu", meaning: "air pressure", example: { jp: "山の 上は 気圧が 低いです。", en: "Air pressure is low at the top of a mountain." }, accept: ["atmospheric pressure"] },
        { id: "ja-u157l1-ido", type: "vocab", front: "移動", reading: "idō", meaning: "movement", example: { jp: "人の 移動が 多い 時期は、道が こみます。", en: "When many people are on the move, the roads are crowded." }, accept: ["shifting", "travel", "relocation"] },
      ],
    },
    {
      id: "ja-u157l2",
      unit: 157,
      lesson: 2,
      title: "Body, cloth and mark",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 胃 (stomach), 衣 (clothing), 印 (a mark), 栄 (to flourish), and the words 衣服 and 目印.",
      items: [
        { id: "ja-u157l2-80c3", type: "kanji", front: "胃", reading: "i", meaning: "stomach", example: { jp: "食べすぎて、胃が 痛く なりました。", en: "I ate too much and my stomach started hurting." }, accept: ["the stomach"], hint: "胃 = stomach — 田 (a full sack) over 月, the flesh radical that marks nearly every organ." },
        { id: "ja-u157l2-8863", type: "kanji", front: "衣", reading: "i", meaning: "clothing", example: { jp: "むかしの 衣服が はく物館に あります。", en: "Old clothing is in the museum." }, accept: ["garment", "dress"] },
        { id: "ja-u157l2-5370", type: "kanji", front: "印", reading: "in", meaning: "a mark", example: { jp: "ここに 印を つけて おいて ください。", en: "Please put a mark here." }, accept: ["stamp", "seal", "sign"] },
        { id: "ja-u157l2-6804", type: "kanji", front: "栄", reading: "ei", meaning: "to flourish", example: { jp: "この 港町は 十年で 大きく 栄えました。", en: "This port town flourished greatly in ten years." }, accept: ["prosperity", "glory"] },
        { id: "ja-u157l2-ifuku", type: "vocab", front: "衣服", reading: "ifuku", meaning: "clothing", example: { jp: "衣服は きせつに よって かえます。", en: "We change our clothing with the seasons." }, accept: ["garments", "apparel"] },
        { id: "ja-u157l2-mejirushi", type: "vocab", front: "目印", reading: "mejirushi", meaning: "a landmark", example: { jp: "大きな 木を 目印に して ください。", en: "Use the big tree as a landmark." }, accept: ["marker", "sign to go by"] },
      ],
    },
    {
      id: "ja-u157l3",
      unit: 157,
      lesson: 3,
      title: "Lasting and running",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 永 (eternal), 営 (to run (a business)), 液 (liquid), 益 (benefit), and the words 営業 and 有益.",
      items: [
        { id: "ja-u157l3-6c38", type: "kanji", front: "永", reading: "ei", meaning: "eternal", example: { jp: "永い 間、この 決まりは 変わりませんでした。", en: "For a very long time this rule didn't change." }, accept: ["everlasting", "perpetual"], hint: "永 = a long unbroken stretch of time. 長い is long in size or duration; 永い is long enough to feel endless." },
        { id: "ja-u157l3-55b6", type: "kanji", front: "営", reading: "ei", meaning: "to run (a business)", example: { jp: "両親は 小さな 店を 営んで います。", en: "My parents run a small shop." }, accept: ["to manage", "operate"] },
        { id: "ja-u157l3-6db2", type: "kanji", front: "液", reading: "eki", meaning: "liquid", example: { jp: "この 液は 手に つけないで ください。", en: "Please don't get this liquid on your hands." }, accept: ["fluid", "solution"] },
        { id: "ja-u157l3-76ca", type: "kanji", front: "益", reading: "eki", meaning: "benefit", example: { jp: "みんなに 有益な 話でした。", en: "It was a talk of benefit to everyone." }, accept: ["profit", "gain", "advantage"] },
        { id: "ja-u157l3-eigyo", type: "vocab", front: "営業", reading: "eigyō", meaning: "trading (being open)", example: { jp: "この 店は 日曜も 営業して います。", en: "This shop trades on Sundays too." }, accept: ["business hours", "operating"] },
        { id: "ja-u157l3-yueki", type: "vocab", front: "有益", reading: "yūeki", meaning: "beneficial", example: { jp: "有益な 意見を たくさん もらいました。", en: "I got a lot of useful views." }, drill: { jp: "有益に なりました。", en: "It became beneficial." }, accept: ["helpful", "worthwhile"] },
      ],
    },
    {
      id: "ja-u157l4",
      unit: 157,
      lesson: 4,
      title: "Going and answering",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 往 (going out), 応 (to respond), 恩 (a debt of gratitude), 仮 (temporary), and the words 往復 and 恩人.",
      items: [
        { id: "ja-u157l4-5f80", type: "kanji", front: "往", reading: "ō", meaning: "going out", example: { jp: "往復の きっぷを 買いました。", en: "I bought a return ticket." }, accept: ["outward journey"], hint: "往 = the going half of a trip; 復 is the coming back. 往復 is both, and it is how tickets are sold." },
        { id: "ja-u157l4-5fdc", type: "kanji", front: "応", reading: "ō", meaning: "to respond", example: { jp: "その 質問に は 答えに 応じて 変わります。", en: "The answer to that question changes according to the reply." }, accept: ["to answer", "to comply"] },
        { id: "ja-u157l4-6069", type: "kanji", front: "恩", reading: "on", meaning: "a debt of gratitude", example: { jp: "先生の 恩は 一生 わすれません。", en: "I'll never forget what I owe my teacher." }, accept: ["kindness received", "favour"], hint: "恩 = 因 (cause) over 心 (heart) — kindness that lodges in the heart and asks to be repaid." },
        { id: "ja-u157l4-4eee", type: "kanji", front: "仮", reading: "kari", meaning: "temporary", example: { jp: "仮の 決まりですから、来年 また 考えます。", en: "It's a temporary rule, so we'll rethink it next year." }, accept: ["provisional", "tentative"] },
        { id: "ja-u157l4-ofuku", type: "vocab", front: "往復", reading: "ōfuku", meaning: "a round trip", example: { jp: "往復で 三時間 かかります。", en: "The round trip takes three hours." }, accept: ["there and back", "return"] },
        { id: "ja-u157l4-onjin", type: "vocab", front: "恩人", reading: "onjin", meaning: "a benefactor", example: { jp: "あの 人は 私の 恩人です。", en: "That person is my benefactor." }, accept: ["someone one owes"] },
      ],
    },
  ],
};
