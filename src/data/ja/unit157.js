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
        { id: "ja-u157l1-5727", type: "kanji", front: "圧", reading: "atsu", meaning: "pressure", example: { jp: "気圧が 下がると、あたまが 痛く なる 人も います。", en: "When the air pressure drops, some people get headaches." }, accept: ["force", "stress", "pressing"], hint: "圧 = pressure — 土 (earth) beneath, something pressing down. 気圧 = air pressure, 血圧 = blood pressure." },
        { id: "ja-u157l1-79fb", type: "kanji", front: "移", reading: "i", meaning: "to shift", example: { jp: "会社が となりの 町に 移りました。", en: "The company moved to the next town." }, accept: ["to move", "transfer", "to shift position"], hint: "i, as in 移動 (idō). The left half is 禾, grain; the right is an old sign for many. Grain carried from field to store — 移る is a thing changing place, 移す is you moving it." },
        { id: "ja-u157l1-56f2", type: "kanji", front: "囲", reading: "i", meaning: "to surround", example: { jp: "高い かべに 囲まれた 家です。", en: "It's a house surrounded by high walls." }, accept: ["to enclose", "surroundings", "to encircle"], hint: "囲 = surround — the box IS the enclosure, drawn around 井." },
        { id: "ja-u157l1-59d4", type: "kanji", front: "委", reading: "i", meaning: "to entrust (to leave to a committee)", example: { jp: "その しごとは 部下に 委せました。", en: "I entrusted that work to my staff." }, accept: ["to leave to", "committee", "to delegate"], hint: "i, the same reading as 移. 禾 (grain) over 女 — handing the harvest to someone to look after. You will meet it mostly in 委員 (iin), a committee member: the people a job is entrusted to." },
        { id: "ja-u157l1-kiatsu", type: "vocab", front: "気圧", reading: "kiatsu", meaning: "air pressure", example: { jp: "山の 上は 気圧が 低いです。", en: "Air pressure is low at the top of a mountain." }, drill: { jp: "気圧が 下がりました。", en: "The air pressure has dropped." }, accept: ["atmospheric pressure", "barometric pressure", "the air pressure"], hint: "kiatsu — 気 (air) + 圧 (pressure). The weather-forecast word: 低気圧 is a low, 高気圧 a high. A Japanese forecast leads with it, so it is worth knowing before あめ or はれ." },
        { id: "ja-u157l1-ido", type: "vocab", front: "移動", reading: "idō", meaning: "movement", example: { jp: "人の 移動が 多い 時期は、道が こみます。", en: "When many people are on the move, the roads are crowded." }, drill: { jp: "移動に 時間が かかります。", en: "The move takes time." }, accept: ["shifting", "travel", "relocation"], hint: "idō — 移 (shift) + 動 (move). Physical relocation of people or things, never a change of mind. 移動する is what a class does between rooms; moving house is ひっこし." },
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
        { id: "ja-u157l2-80c3", type: "kanji", front: "胃", reading: "i", meaning: "stomach (the organ)", example: { jp: "食べすぎて、胃が 痛く なりました。", en: "I ate too much and my stomach started hurting." }, accept: ["the stomach", "belly", "gut"], hint: "胃 = stomach — 田 (a full sack) over 月, the flesh radical that marks nearly every organ." },
        { id: "ja-u157l2-8863", type: "kanji", front: "衣", reading: "i", meaning: "garment", example: { jp: "むかしの 衣服が はく物館に あります。", en: "Old clothing is in the museum." }, accept: ["garment", "dress", "clothing"], hint: "i, as in 衣服 (ifuku). The shape is a loose robe with collar and sleeves, and it is the parent of the clothing radical you see in 服 and 初. It is never used alone in speech." },
        { id: "ja-u157l2-5370", type: "kanji", front: "印", reading: "in", meaning: "a mark", example: { jp: "ここに 印を つけて おいて ください。", en: "Please put a mark here." }, accept: ["stamp", "seal", "sign"], hint: "in, as in 印刷 (insatsu, printing). A hand pressing down on a kneeling figure — a seal being stamped. A Japanese はんこ seal is still an 印, and 目印 is a mark you navigate by." },
        { id: "ja-u157l2-6804", type: "kanji", front: "栄", reading: "ei", meaning: "to flourish", example: { jp: "この 港町は 十年で 大きく 栄えました。", en: "This port town flourished greatly in ten years." }, accept: ["prosperity", "glory", "to prosper"], hint: "ei. The crown on top is a flowering canopy over 木, a tree in bloom. 栄える is a town or a business thriving; 栄養 (eiyō) is nutrition, the same idea applied to a body." },
        { id: "ja-u157l2-ifuku", type: "vocab", front: "衣服", reading: "ifuku", meaning: "clothing", example: { jp: "衣服は きせつに よって かえます。", en: "We change our clothing with the seasons." }, drill: { jp: "衣服を たくさん 買いました。", en: "I bought a lot of clothing." }, accept: ["garments", "apparel", "clothes"], hint: "ifuku — 衣 (garment) + 服 (clothes), a formal written pair. In conversation you would say ふく; 衣服 belongs on forms, on shop signage and in writing about textiles." },
        { id: "ja-u157l2-mejirushi", type: "vocab", front: "目印", reading: "mejirushi", meaning: "a landmark", example: { jp: "大きな 木を 目印に して ください。", en: "Use the big tree as a landmark." }, drill: { jp: "目印を つけて ください。", en: "Please put a marker on it." }, accept: ["marker", "sign to go by", "reference point"], hint: "mejirushi — 目 (eye) + 印 (mark): a mark for the eye. Not a landmark in the tourist sense — it is whatever you agree to navigate by, which is why 目印にする is the usual verb." },
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
        { id: "ja-u157l3-6c38", type: "kanji", front: "永", reading: "ei", meaning: "eternal", example: { jp: "永い 間、この 決まりは 変わりませんでした。", en: "For a very long time this rule didn't change." }, accept: ["everlasting", "perpetual", "long-lasting"], hint: "永 = a long unbroken stretch of time. 長い is long in size or duration; 永い is long enough to feel endless." },
        { id: "ja-u157l3-55b6", type: "kanji", front: "営", reading: "ei", meaning: "to run (a business)", example: { jp: "両親は 小さな 店を 営んで います。", en: "My parents run a small shop." }, accept: ["to manage", "operate", "to conduct"], hint: "ei, the same reading as 栄 and easily confused with it. 栄える simply happens to a place; 営む is deliberate work — 営業 (eigyō) is a shop being OPEN for business." },
        { id: "ja-u157l3-6db2", type: "kanji", front: "液", reading: "eki", meaning: "liquid", example: { jp: "この 液は 手に つけないで ください。", en: "Please don't get this liquid on your hands." }, accept: ["fluid", "solution", "a liquid"], hint: "eki. Water on the left plus 夜 (night) — the old sense is moisture that forms overnight. 液体 (ekitai) is the physics word for a liquid; 液 alone names a specific fluid you are handling." },
        { id: "ja-u157l3-76ca", type: "kanji", front: "益", reading: "eki", meaning: "benefit", example: { jp: "みんなに 有益な 話でした。", en: "It was a talk of benefit to everyone." }, accept: ["profit", "gain", "advantage"], hint: "eki. Water over a dish — a vessel brimming over, so a surplus. It lives in compounds: 有益 (yūeki) beneficial, 利益 (rieki) profit. The gain is practical, never emotional." },
        { id: "ja-u157l3-eigyo", type: "vocab", front: "営業", reading: "eigyō", meaning: "trading (being open)", example: { jp: "この 店は 日曜も 営業して います。", en: "This shop trades on Sundays too." }, drill: { jp: "営業は 六時までです。", en: "Trading is until six." }, accept: ["business hours", "operating", "open for business"], hint: "eigyō — 営 (run) + 業 (trade). Two jobs: a shop being open (営業中) and the sales side of a company (営業部). Both come down to a business being actively worked." },
        { id: "ja-u157l3-yueki", type: "vocab", front: "有益", reading: "yūeki", meaning: "beneficial", example: { jp: "有益な 意見を たくさん もらいました。", en: "I got a lot of useful views." }, drill: { jp: "有益に なりました。", en: "It became beneficial." }, accept: ["helpful", "worthwhile", "useful"], hint: "yūeki — 有 (have) + 益 (benefit): having benefit in it. Drier and more formal than やくに立つ, and it describes information or advice far more often than objects." },
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
        { id: "ja-u157l4-5f80", type: "kanji", front: "往", reading: "ō", meaning: "going out", example: { jp: "往復の きっぷを 買いました。", en: "I bought a return ticket." }, accept: ["outward journey", "outbound", "going out there"], hint: "往 = the going half of a trip; 復 is the coming back. 往復 is both, and it is how tickets are sold." },
        { id: "ja-u157l4-5fdc", type: "kanji", front: "応", reading: "ō", meaning: "to respond", example: { jp: "その 質問に は 答えに 応じて 変わります。", en: "The answer to that question changes according to the reply." }, accept: ["to answer", "to comply", "to react"], hint: "ō, as in 応答 (ōtō). Under the roof sits 心, the heart: answering from the heart. 応じる is responding in a way that FITS what you were given; 答える is merely to answer." },
        { id: "ja-u157l4-6069", type: "kanji", front: "恩", reading: "on", meaning: "a debt of gratitude", example: { jp: "先生の 恩は 一生 わすれません。", en: "I'll never forget what I owe my teacher." }, accept: ["kindness received", "favour", "obligation"], hint: "恩 = 因 (cause) over 心 (heart) — kindness that lodges in the heart and asks to be repaid." },
        { id: "ja-u157l4-4eee", type: "kanji", front: "仮", reading: "kari", meaning: "temporary", example: { jp: "仮の 決まりですから、来年 また 考えます。", en: "It's a temporary rule, so we'll rethink it next year." }, accept: ["provisional", "tentative", "interim"], hint: "kari on its own, ka in compounds like 仮名 (kana). The person radical plus a sign for borrowing — a borrowed, stand-in version. 仮の決まり is a rule you fully expect to replace." },
        { id: "ja-u157l4-ofuku", type: "vocab", front: "往復", reading: "ōfuku", meaning: "a round trip", example: { jp: "往復で 三時間 かかります。", en: "The round trip takes three hours." }, drill: { jp: "往復の きっぷを 買います。", en: "I will buy a return ticket." }, accept: ["there and back", "return", "return trip"], hint: "ōfuku — 往 (going out) + 復 (returning). The ticket-counter word: 往復 is a return, 片道 (katamichi) is one way. It covers a round trip on foot or by car just as well." },
        { id: "ja-u157l4-onjin", type: "vocab", front: "恩人", reading: "onjin", meaning: "a benefactor", example: { jp: "あの 人は 私の 恩人です。", en: "That person is my benefactor." }, drill: { jp: "恩人に 会いに 行きます。", en: "I am going to see my benefactor." }, accept: ["someone one owes", "the person one owes", "someone who helped you"], hint: "onjin — 恩 (a debt of gratitude) + 人. Much heavier than benefactor: someone whose help changed your life, and the debt is understood to be permanent. 命の恩人 is the strongest form." },
      ],
    },
  ],
};
