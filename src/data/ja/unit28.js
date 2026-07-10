// Unit 28 — かいもの ("Shopping") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed.
// Examples use only A1 vocab + earlier A2 draft vocab + A1 grammar.
export const UNIT28 = {
  id: "ja-u28", lang: "ja", title: "かいもの", order: 28, stage: "a2",
  lessons: [
    {
      id: "ja-u28l1", unit: 28, lesson: 1, title: "In the shop", cefr: "A2", dominantMode: "recall",
      canDo: "Shop around: ねだん おつり レジ ふくろ しなもの セール.",
      items: [
        { id: "ja-u28l1-nedan", type: "vocab", front: "ねだん", reading: "nedan", meaning: "price", example: { jp: "ねだんをみます。", en: "I check the price." }, accept: ["cost"] },
        { id: "ja-u28l1-otsuri", type: "vocab", front: "おつり", reading: "otsuri", meaning: "change", example: { jp: "おつりをください。", en: "Change, please." }, accept: ["change (money)"] },
        { id: "ja-u28l1-reji", type: "vocab", front: "レジ", reading: "reji", meaning: "register", example: { jp: "レジではらいます。", en: "I pay at the register." }, accept: ["checkout", "till", "cashier"] },
        { id: "ja-u28l1-fukuro", type: "vocab", front: "ふくろ", reading: "fukuro", meaning: "bag", example: { jp: "ふくろをください。", en: "A bag, please." }, accept: ["sack", "pouch"] },
        { id: "ja-u28l1-shinamono", type: "vocab", front: "しなもの", reading: "shinamono", meaning: "goods", example: { jp: "しなものをえらびます。", en: "I choose an item." }, accept: ["item", "product", "merchandise"] },
        { id: "ja-u28l1-seru", type: "vocab", front: "セール", reading: "sēru", meaning: "sale", example: { jp: "きょうはセールです。", en: "There's a sale today." }, accept: ["discount sale"] },
      ],
    },
    {
      id: "ja-u28l2", unit: 28, lesson: 2, title: "Clothes", cefr: "A2", dominantMode: "recall",
      canDo: "Name clothes: ふく シャツ ズボン くつした コート てぶくろ.",
      items: [
        { id: "ja-u28l2-fuku", type: "vocab", front: "ふく", reading: "fuku", meaning: "clothes", example: { jp: "ふくをかいます。", en: "I buy clothes." }, accept: ["clothing", "outfit"] },
        { id: "ja-u28l2-shatsu", type: "vocab", front: "シャツ", reading: "shatsu", meaning: "shirt", example: { jp: "しろいシャツです。", en: "It's a white shirt." }, accept: ["t-shirt"] },
        { id: "ja-u28l2-zubon", type: "vocab", front: "ズボン", reading: "zubon", meaning: "trousers", example: { jp: "くろいズボンです。", en: "They're black trousers." }, accept: ["pants", "slacks"] },
        { id: "ja-u28l2-kutsushita", type: "vocab", front: "くつした", reading: "kutsushita", meaning: "socks", example: { jp: "くつしたをあらいます。", en: "I wash the socks." }, accept: ["sock"] },
        { id: "ja-u28l2-koto", type: "vocab", front: "コート", reading: "kōto", meaning: "coat", example: { jp: "あたたかいコートです。", en: "It's a warm coat." }, accept: ["overcoat", "jacket"] },
        { id: "ja-u28l2-tebukuro", type: "vocab", front: "てぶくろ", reading: "tebukuro", meaning: "gloves", example: { jp: "てぶくろをします。", en: "I put on gloves." }, accept: ["glove", "mittens"] },
      ],
    },
    {
      id: "ja-u28l3", unit: 28, lesson: 3, title: "Paying", cefr: "A2", dominantMode: "recall",
      canDo: "Handle money: おかね さいふ カード はらいます かります かします.",
      items: [
        { id: "ja-u28l3-okane", type: "vocab", front: "おかね", reading: "okane", meaning: "money", example: { jp: "おかねがあります。", en: "I have money." }, accept: ["cash"] },
        { id: "ja-u28l3-saifu", type: "vocab", front: "さいふ", reading: "saifu", meaning: "wallet", example: { jp: "さいふをさがします。", en: "I look for my wallet." }, accept: ["purse"] },
        { id: "ja-u28l3-kado", type: "vocab", front: "カード", reading: "kādo", meaning: "card", example: { jp: "カードではらいます。", en: "I pay by card." }, accept: ["credit card"] },
        { id: "ja-u28l3-haraimasu", type: "vocab", front: "はらいます", reading: "haraimasu", meaning: "pay", example: { jp: "おかねをはらいます。", en: "I pay money." }, accept: ["to pay", "pay for"] },
        { id: "ja-u28l3-karimasu", type: "vocab", front: "かります", reading: "karimasu", meaning: "borrow", example: { jp: "ほんをかります。", en: "I borrow a book." }, accept: ["rent", "take out (a loan)"] },
        { id: "ja-u28l3-kashimasu", type: "vocab", front: "かします", reading: "kashimasu", meaning: "lend", example: { jp: "ペンをかします。", en: "I lend a pen." }, accept: ["loan", "rent out"] },
      ],
    },
    {
      id: "ja-u28l4", unit: 28, lesson: 4, title: "Buying & giving", cefr: "A2", dominantMode: "recall",
      canDo: "Handle goods: えらびます うります もらいます あげます ならべます つつみます.",
      items: [
        { id: "ja-u28l4-erabimasu", type: "vocab", front: "えらびます", reading: "erabimasu", meaning: "choose", example: { jp: "いろをえらびます。", en: "I choose a color." }, accept: ["pick", "select"] },
        { id: "ja-u28l4-urimasu", type: "vocab", front: "うります", reading: "urimasu", meaning: "sell", example: { jp: "くるまをうります。", en: "I sell the car." }, accept: ["to sell", "sells"] },
        { id: "ja-u28l4-moraimasu", type: "vocab", front: "もらいます", reading: "moraimasu", meaning: "receive", example: { jp: "てがみをもらいます。", en: "I receive a letter." }, accept: ["get", "be given"] },
        { id: "ja-u28l4-agemasu", type: "vocab", front: "あげます", reading: "agemasu", meaning: "give", example: { jp: "ともだちにあげます。", en: "I give it to a friend." }, accept: ["hand over", "present"] },
        { id: "ja-u28l4-narabemasu", type: "vocab", front: "ならべます", reading: "narabemasu", meaning: "arrange", example: { jp: "テーブルにならべます。", en: "I lay them out on the table." }, accept: ["line up", "set out", "display"] },
        { id: "ja-u28l4-tsutsumimasu", type: "vocab", front: "つつみます", reading: "tsutsumimasu", meaning: "wrap", example: { jp: "みやげをつつみます。", en: "I wrap a souvenir." }, accept: ["wrap up", "package"] },
      ],
    },
  ],
};
