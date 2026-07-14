// Unit 62 — かず・りょう ("Number & Amount") — A1 thematic
// JLPT N5 counters plus quantity/amount words the learner hasn't met yet. Counters
// are taught as headword vocab ("まい" = "counter for flat things"); the example
// sentence shows the counter attached to a known number + noun so the pattern is
// concrete. Quantity words (はんぶん half, たくさん a lot, いくら how much) round out
// the unit. Every example reuses only vocab already introduced. No new grammar.
// lang/unit/lesson wiring lives in index.js.
export const UNIT62 = {
  id: "ja-u62",
  lang: "ja",
  title: "かず・りょう",
  order: 62,
  stage: "a1",
  lessons: [
    // Lesson 1: counters for things, animals, people
    {
      id: "ja-u62l1",
      unit: 62,
      lesson: 1,
      title: "Counters — things",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count objects, animals and people: まい さつ ひき だい かい にん.",
      items: [
        { id: "ja-u62l1-mai",  type: "vocab", front: "まい", reading: "mai", meaning: "counter for flat things", example: { jp: "きってをにまいかいます。", en: "I buy two stamps." }, accept: ["flat-object counter", "sheets"], hint: "Stamps, paper, plates — anything thin and flat." },
        { id: "ja-u62l1-satsu", type: "vocab", front: "さつ", reading: "satsu", meaning: "counter for books", example: { jp: "ほんをさんさつよみます。", en: "I read three books." }, accept: ["book counter", "volumes"], hint: "Books, magazines, notebooks — bound volumes." },
        { id: "ja-u62l1-hiki",  type: "vocab", front: "ひき", reading: "hiki", meaning: "counter for small animals", example: { jp: "ねこがにひきいます。", en: "There are two cats." }, accept: ["animal counter", "small-animal counter"], hint: "Cats, dogs, fish — small animals." },
        { id: "ja-u62l1-dai",   type: "vocab", front: "だい", reading: "dai", meaning: "counter for machines", example: { jp: "くるまがいちだいあります。", en: "There is one car." }, accept: ["machine counter", "vehicle counter"], hint: "Cars, phones, computers — machines and vehicles." },
        { id: "ja-u62l1-kai",   type: "vocab", front: "かい", reading: "kai", meaning: "floor (counter)", example: { jp: "このビルはごかいです。", en: "This building has five floors." }, accept: ["floor", "floors", "story"], hint: "階 — floors of a building; also counts times (回)." },
        { id: "ja-u62l1-nin",   type: "vocab", front: "にん", reading: "nin", meaning: "counter for people", example: { jp: "がくせいがさんにんいます。", en: "There are three students." }, accept: ["people counter", "person counter"], hint: "For 3+ people; ひとり and ふたり are the 1- and 2-person forms." },
      ],
    },
    // Lesson 2: counters for age, time span, measurement
    {
      id: "ja-u62l2",
      unit: 62,
      lesson: 2,
      title: "Counters — age & amount",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "State age, spans and measures: さい かげつ しゅうかん キロ メートル グラム.",
      items: [
        { id: "ja-u62l2-sai",     type: "vocab", front: "さい", reading: "sai", meaning: "years old", example: { jp: "いもうとはごさいです。", en: "My little sister is five years old." }, accept: ["age", "years of age"], hint: "才／歳 — counter for age." },
        { id: "ja-u62l2-kagetsu", type: "vocab", front: "かげつ", reading: "kagetsu", meaning: "counter for months", example: { jp: "にほんにさんかげついます。", en: "I stay in Japan for three months." }, accept: ["months", "month counter"], hint: "か月 — a number of months (a span), not the name of a month." },
        { id: "ja-u62l2-shukan",  type: "vocab", front: "しゅうかん", reading: "shūkan", meaning: "counter for weeks", example: { jp: "いっしゅうかんやすみます。", en: "I rest for one week." }, accept: ["weeks", "week counter"], hint: "週間 — a number of weeks." },
        { id: "ja-u62l2-kiro",    type: "vocab", front: "キロ", reading: "kiro", meaning: "kilo", example: { jp: "にくをいちキロかいます。", en: "I buy one kilo of meat." }, accept: ["kilogram", "kilometer"], hint: "Short for kilogram or kilometer." },
        { id: "ja-u62l2-metoru",  type: "vocab", front: "メートル", reading: "mētoru", meaning: "meter", example: { jp: "ひゃくメートルはしります。", en: "I run one hundred meters." }, accept: ["metre", "meters"], hint: "The unit of length." },
        { id: "ja-u62l2-guramu",  type: "vocab", front: "グラム", reading: "guramu", meaning: "gram", example: { jp: "さとうをひゃくグラムつかいます。", en: "I use one hundred grams of sugar." }, accept: ["grams"], hint: "The unit of weight." },
      ],
    },
    // Lesson 3: quantity words
    {
      id: "ja-u62l3",
      unit: 62,
      lesson: 3,
      title: "Quantity words",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about amounts: はんぶん すべて りょうほう たくさん じゅうぶん だけ.",
      items: [
        { id: "ja-u62l3-hanbun",  type: "vocab", front: "はんぶん", reading: "hanbun", meaning: "half", example: { jp: "ケーキをはんぶんたべます。", en: "I eat half the cake." }, accept: ["a half"], hint: "半分 — half of something." },
        { id: "ja-u62l3-subete",  type: "vocab", front: "すべて", reading: "subete", meaning: "all", example: { jp: "すべてわかります。", en: "I understand all of it." }, accept: ["everything", "all of it"], hint: "全て — the whole lot." },
        { id: "ja-u62l3-ryoho",   type: "vocab", front: "りょうほう", reading: "ryōhō", meaning: "both", example: { jp: "りょうほうすきです。", en: "I like both." }, accept: ["both sides", "both of them"], hint: "両方 — the two together." },
        { id: "ja-u62l3-takusan", type: "vocab", front: "たくさん", reading: "takusan", meaning: "a lot", example: { jp: "ほんがたくさんあります。", en: "There are a lot of books." }, accept: ["lots", "many", "much"] },
        { id: "ja-u62l3-jubun",   type: "vocab", front: "じゅうぶん", reading: "jūbun", meaning: "enough", example: { jp: "じかんはじゅうぶんです。", en: "There is enough time." }, accept: ["sufficient", "plenty"], hint: "十分 — as much as you need." },
        { id: "ja-u62l3-dake",    type: "vocab", front: "だけ", reading: "dake", meaning: "only", example: { jp: "みずだけのみます。", en: "I drink only water." }, accept: ["just", "nothing but"], hint: "Attaches after a word: みずだけ = only water." },
      ],
    },
    // Lesson 4: how much / how many & estimates
    {
      id: "ja-u62l4",
      unit: 62,
      lesson: 4,
      title: "How much & how many",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask and estimate amounts: など いくつ いくら どのくらい おおぜい やく.",
      items: [
        { id: "ja-u62l4-nado",      type: "vocab", front: "など", reading: "nado", meaning: "etc.", example: { jp: "やさいやにくなどをかいます。", en: "I buy vegetables, meat, and so on." }, accept: ["and so on", "and so forth"], hint: "Lists examples: X や Y など = X, Y, and the like." },
        { id: "ja-u62l4-ikutsu",    type: "vocab", front: "いくつ", reading: "ikutsu", meaning: "how many", example: { jp: "りんごはいくつありますか。", en: "How many apples are there?" }, accept: ["how many things"], hint: "Asks a count of things." },
        { id: "ja-u62l4-ikura",     type: "vocab", front: "いくら", reading: "ikura", meaning: "how much", example: { jp: "これはいくらですか。", en: "How much is this?" }, accept: ["how much (cost)", "what price"], hint: "Asks a price." },
        { id: "ja-u62l4-donokurai", type: "vocab", front: "どのくらい", reading: "donokurai", meaning: "how much", example: { jp: "えきまでどのくらいですか。", en: "How far is it to the station?" }, accept: ["how long", "how far", "about how much"], hint: "Asks an amount, distance, or length of time." },
        { id: "ja-u62l4-ozei",      type: "vocab", front: "おおぜい", reading: "ōzei", meaning: "many people", example: { jp: "ひとがおおぜいいます。", en: "There are many people." }, accept: ["a crowd", "a lot of people"], hint: "大勢 — used only for people." },
        { id: "ja-u62l4-yaku",      type: "vocab", front: "やく", reading: "yaku", meaning: "approximately", example: { jp: "やくひゃくにんきます。", en: "About one hundred people come." }, accept: ["about", "roughly"], hint: "約 — goes before a number: やく百 = about 100." },
      ],
    },
  ],
};
