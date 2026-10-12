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
        { id: "ja-u62l1-mai",  type: "vocab", front: "まい", reading: "mai", meaning: "counter for flat things", example: { jp: "きってをにまいかいます。", en: "I buy two stamps." }, drill: { jp: "かみをごまいつかいます。", en: "I use five sheets of paper." }, accept: ["flat-object counter", "sheets", "sheet counter", "counter for sheets"], hint: "Stamps, paper, plates — anything thin and flat." },
        { id: "ja-u62l1-satsu", type: "vocab", front: "さつ", reading: "satsu", meaning: "counter for books", example: { jp: "ほんをさんさつよみます。", en: "I read three books." }, drill: { jp: "きょうかしょをにさつかいます。", en: "I buy two textbooks." }, accept: ["book counter", "volumes", "counter for volumes", "bound-volume counter"], hint: "Books, magazines, notebooks — bound volumes." },
        { id: "ja-u62l1-hiki",  type: "vocab", front: "ひき", reading: "hiki", meaning: "counter for small animals", example: { jp: "ねこがにひきいます。", en: "There are two cats." }, drill: { jp: "いぬがごひきいます。", en: "There are five dogs." }, accept: ["animal counter", "small-animal counter", "counter for animals", "counter for pets"], hint: "Cats, dogs, fish — small animals." },
        { id: "ja-u62l1-dai",   type: "vocab", front: "だい", reading: "dai", meaning: "counter for machines", example: { jp: "くるまがいちだいあります。", en: "There is one car." }, drill: { jp: "テレビがにだいあります。", en: "There are two televisions." }, accept: ["machine counter", "vehicle counter", "counter for vehicles", "counter for appliances"], hint: "Cars, phones, computers — machines and vehicles." },
        { id: "ja-u62l1-kai",   type: "vocab", front: "かい", reading: "kai", meaning: "floor (counter)", example: { jp: "このビルはごかいです。", en: "This building has five floors." }, drill: { jp: "みせはにかいにあります。", en: "The shop is on the second floor." }, accept: ["floor", "floors", "story", "storey"], hint: "階 — floors of a building; also counts times (回)." },
        { id: "ja-u62l1-nin",   type: "vocab", front: "にん", reading: "nin", meaning: "counter for people", example: { jp: "がくせいがさんにんいます。", en: "There are three students." }, drill: { jp: "かぞくはよにんです。", en: "My family is four people." }, accept: ["people counter", "person counter", "counter for people", "persons"], hint: "For 3+ people; ひとり and ふたり are the 1- and 2-person forms." },
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
        { id: "ja-u62l2-sai",     type: "vocab", front: "さい", reading: "sai", meaning: "years old", example: { jp: "いもうとはごさいです。", en: "My little sister is five years old." }, drill: { jp: "こどもはろくさいです。", en: "The child is six years old." }, accept: ["age", "years of age", "years (of age)", "year old"], hint: "才／歳 — counter for age." },
        { id: "ja-u62l2-kagetsu", type: "vocab", front: "かげつ", reading: "kagetsu", meaning: "counter for months", example: { jp: "にほんにさんかげついます。", en: "I stay in Japan for three months." }, drill: { jp: "にかげつべんきょうします。", en: "I study for two months." }, accept: ["months", "month counter", "counter for months", "months long"], hint: "か月 — a number of months (a span), not the name of a month." },
        { id: "ja-u62l2-shukan",  type: "vocab", front: "しゅうかん", reading: "shūkan", meaning: "counter for weeks", example: { jp: "いっしゅうかんやすみます。", en: "I rest for one week." }, drill: { jp: "にしゅうかんまちます。", en: "I wait for two weeks." }, accept: ["weeks", "week counter", "counter for weeks", "weeks long"], hint: "週間 — a number of weeks." },
        { id: "ja-u62l2-kiro",    type: "vocab", front: "キロ", reading: "kiro", meaning: "kilo", example: { jp: "にくをいちキロかいます。", en: "I buy one kilo of meat." }, drill: { jp: "こめをごキロかいます。", en: "I buy five kilos of rice." }, accept: ["kilogram", "kilometer", "kilometre", "kg"], hint: "Short for kilogram or kilometer." },
        { id: "ja-u62l2-metoru",  type: "vocab", front: "メートル", reading: "mētoru", meaning: "meter", example: { jp: "ひゃくメートルはしります。", en: "I run one hundred meters." }, drill: { jp: "このみちはひゃくメートルです。", en: "This street is a hundred metres long." }, accept: ["metre", "meters", "metres", "m"], hint: "The unit of length." },
        { id: "ja-u62l2-guramu",  type: "vocab", front: "グラム", reading: "guramu", meaning: "gram", example: { jp: "さとうをひゃくグラムつかいます。", en: "I use one hundred grams of sugar." }, drill: { jp: "にくをごひゃくグラムかいます。", en: "I buy five hundred grams of meat." }, accept: ["grams", "gramme", "g"], hint: "The unit of weight." },
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
        { id: "ja-u62l3-hanbun",  type: "vocab", front: "はんぶん", reading: "hanbun", meaning: "half (a half of something)", example: { jp: "ケーキをはんぶんたべます。", en: "I eat half the cake." }, drill: { jp: "りんごをはんぶんきります。", en: "I cut the apple in half." }, accept: ["a half", "one half", "halfway", "half of it"], hint: "半分 — half of something." },
        { id: "ja-u62l3-subete",  type: "vocab", front: "すべて", reading: "subete", meaning: "all", example: { jp: "すべてわかります。", en: "I understand all of it." }, drill: { jp: "すべてのほんをよみます。", en: "I read all of the books." }, accept: ["everything", "all of it", "the whole thing", "entirely"], hint: "全て — the whole lot." },
        { id: "ja-u62l3-ryoho",   type: "vocab", front: "りょうほう", reading: "ryōhō", meaning: "both", example: { jp: "りょうほうすきです。", en: "I like both." }, drill: { jp: "りょうほうのてをつかいます。", en: "I use both hands." }, accept: ["both sides", "both of them", "the two of them", "the pair"], hint: "両方 — the two together." },
        { id: "ja-u62l3-takusan", type: "vocab", front: "たくさん", reading: "takusan", meaning: "a lot", example: { jp: "ほんがたくさんあります。", en: "There are a lot of books." }, drill: { jp: "ともだちがたくさんいます。", en: "I have a lot of friends." }, accept: ["lots", "many", "much", "plenty"], hint: "ta-ku-SAN — three beats, the ん held. ⚠️ It is an ADVERB, so it sits next to the verb: ほんがたくさんあります. Unlike おおい it can also stand in front of a noun with の: たくさんのほん." },
        { id: "ja-u62l3-jubun",   type: "vocab", front: "じゅうぶん", reading: "jūbun", meaning: "enough", example: { jp: "じかんはじゅうぶんです。", en: "There is enough time." }, drill: { jp: "おかねはじゅうぶんあります。", en: "I have enough money." }, accept: ["sufficient", "plenty", "enough of it", "ample"], hint: "十分 — as much as you need." },
        { id: "ja-u62l3-dake",    type: "vocab", front: "だけ", reading: "dake", meaning: "only", example: { jp: "みずだけのみます。", en: "I drink only water." }, drill: { jp: "やさいだけたべます。", en: "I eat only vegetables." }, accept: ["just", "nothing but", "only that", "merely"], hint: "Attaches after a word: みずだけ = only water." },
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
        { id: "ja-u62l4-nado",      type: "vocab", front: "など", reading: "nado", meaning: "etc.", example: { jp: "やさいやにくなどをかいます。", en: "I buy vegetables, meat, and so on." }, drill: { jp: "ほんやノートなどをかいます。", en: "I buy books, notebooks and so on." }, accept: ["and so on", "and so forth", "and such", "among other things"], hint: "Lists examples: X や Y など = X, Y, and the like." },
        { id: "ja-u62l4-ikutsu",    type: "vocab", front: "いくつ", reading: "ikutsu", meaning: "how many", example: { jp: "りんごはいくつありますか。", en: "How many apples are there?" }, drill: { jp: "ケーキはいくつですか。", en: "How many cakes are there?" }, accept: ["how many things", "how many items", "what number", "how many of them"], hint: "Asks a count of things." },
        { id: "ja-u62l4-ikura",     type: "vocab", front: "いくら", reading: "ikura", meaning: "how much", example: { jp: "これはいくらですか。", en: "How much is this?" }, drill: { jp: "きっぷはいくらですか。", en: "How much is a ticket?" }, accept: ["how much (cost)", "what price", "how much money", "what does it cost"], hint: "Asks a price." },
        { id: "ja-u62l4-donokurai", type: "vocab", front: "どのくらい", reading: "donokurai", meaning: "how long, how far", example: { jp: "えきまでどのくらいですか。", en: "How far is it to the station?" }, drill: { jp: "じかんはどのくらいかかりますか。", en: "About how long does it take?" }, accept: ["how long", "how far", "about how much", "how much"], hint: "Asks an amount, distance, or length of time." },
        { id: "ja-u62l4-ozei",      type: "vocab", front: "おおぜい", reading: "ōzei", meaning: "many people", example: { jp: "ひとがおおぜいいます。", en: "There are many people." }, drill: { jp: "こどもがおおぜいきます。", en: "A lot of children are coming." }, accept: ["a crowd", "a lot of people", "lots of people", "a large number of people"], hint: "大勢 — used only for people." },
        { id: "ja-u62l4-yaku",      type: "vocab", front: "やく", reading: "yaku", meaning: "approximately", example: { jp: "やくひゃくにんきます。", en: "About one hundred people come." }, drill: { jp: "やくごキロあるきます。", en: "I walk about five kilometres." }, accept: ["about", "roughly", "approx", "around"], hint: "約 — goes before a number: やく百 = about 100." },
      ],
    },
  ],
};
