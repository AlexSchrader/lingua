// Unit 65 — おかね・かいもの ("Money & Shopping") — A1 thematic
// N5 money-and-shopping vocabulary the learner hasn't met yet: paying (げんきん,
// しへい, こぜに), deals (バーゲン, わりびき, クーポン), the shop floor (てんいん,
// レシート, かご) and the actions of buying (しはらいます, ちゅうもんします,
// こうかんします). Examples reuse only already-known nouns, particles and verbs
// (さいふ, ねだん, カード, みせ, もらいます…). No new grammar — verbs are taught as
// vocabulary in their ～ます form. lang/unit/lesson set in index.js.
export const UNIT65 = {
  id: "ja-u65",
  lang: "ja",
  title: "おかね・かいもの",
  order: 65,
  stage: "a1",
  lessons: [
    // Lesson 1: money
    {
      id: "ja-u65l1",
      unit: 65,
      lesson: 1,
      title: "Money",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about money itself: げんきん (cash), しへい (bills), こぜに (change), ぜい (tax).",
      items: [
        { id: "ja-u65l1-genkin", type: "vocab", front: "げんきん", reading: "genkin", meaning: "cash", example: { jp: "げんきんではらいます。", en: "I pay in cash." }, accept: ["hard cash"] },
        { id: "ja-u65l1-shihei", type: "vocab", front: "しへい", reading: "shihei", meaning: "paper money", example: { jp: "せんえんしへいをつかいます。", en: "I use a 1000-yen bill." }, accept: ["banknote", "bill"] },
        { id: "ja-u65l1-kozeni", type: "vocab", front: "こぜに", reading: "kozeni", meaning: "small change", example: { jp: "さいふにこぜにがあります。", en: "There is small change in my wallet." }, accept: ["coins", "loose change"] },
        { id: "ja-u65l1-zei", type: "vocab", front: "ぜい", reading: "zei", meaning: "tax", example: { jp: "ぜいをはらいます。", en: "I pay tax." }, accept: ["duty"] },
        { id: "ja-u65l1-muryo", type: "vocab", front: "むりょう", reading: "muryō", meaning: "free of charge", example: { jp: "みずはむりょうです。", en: "Water is free." }, accept: ["free", "no charge"] },
        { id: "ja-u65l1-okanemochi", type: "vocab", front: "おかねもち", reading: "okanemochi", meaning: "rich person", example: { jp: "かれはおかねもちです。", en: "He is a rich person." }, accept: ["wealthy person", "the rich"] },
      ],
    },
    // Lesson 2: deals & sales
    {
      id: "ja-u65l2",
      unit: 65,
      lesson: 2,
      title: "Deals & sales",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Spot a good deal: バーゲン (sale), わりびき (discount), クーポン (coupon), ポイント (points).",
      items: [
        { id: "ja-u65l2-bagen", type: "vocab", front: "バーゲン", reading: "bāgen", meaning: "bargain sale", example: { jp: "デパートのバーゲンにいきます。", en: "I go to the department store sale." }, accept: ["sale", "bargain"] },
        { id: "ja-u65l2-waribiki", type: "vocab", front: "わりびき", reading: "waribiki", meaning: "discount", example: { jp: "がくせいわりびきがあります。", en: "There is a student discount." }, accept: ["price reduction", "money off"] },
        { id: "ja-u65l2-kupon", type: "vocab", front: "クーポン", reading: "kūpon", meaning: "coupon", example: { jp: "クーポンをつかいます。", en: "I use a coupon." }, accept: ["voucher"] },
        { id: "ja-u65l2-pointo", type: "vocab", front: "ポイント", reading: "pointo", meaning: "reward points", example: { jp: "かいものでポイントをもらいます。", en: "I get points when shopping." }, accept: ["points", "loyalty points"] },
        { id: "ja-u65l2-osusume", type: "vocab", front: "おすすめ", reading: "osusume", meaning: "recommendation", example: { jp: "これはおすすめです。", en: "This one is recommended." }, accept: ["suggestion", "recommended item"] },
        { id: "ja-u65l2-ninki", type: "vocab", front: "にんき", reading: "ninki", meaning: "popularity", example: { jp: "このみせはにんきがあります。", en: "This shop is popular." }, accept: ["being popular"] },
      ],
    },
    // Lesson 3: at the shop
    {
      id: "ja-u65l3",
      unit: 65,
      lesson: 3,
      title: "At the shop",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what's on the shop floor: てんいん (clerk), レシート (receipt), かご (basket), しょうひん (goods).",
      items: [
        { id: "ja-u65l3-tenin", type: "vocab", front: "てんいん", reading: "tenin", meaning: "shop clerk", example: { jp: "てんいんにききます。", en: "I ask the shop clerk." }, accept: ["shop assistant", "clerk"] },
        { id: "ja-u65l3-reshito", type: "vocab", front: "レシート", reading: "reshīto", meaning: "receipt", example: { jp: "レシートをもらいます。", en: "I get a receipt." }, accept: ["sales slip"] },
        { id: "ja-u65l3-chirashi", type: "vocab", front: "ちらし", reading: "chirashi", meaning: "flyer", example: { jp: "スーパーのちらしをみます。", en: "I look at the supermarket flyer." }, accept: ["leaflet", "ad flyer"] },
        { id: "ja-u65l3-kago", type: "vocab", front: "かご", reading: "kago", meaning: "basket", example: { jp: "かごをもちます。", en: "I hold the basket." }, accept: ["shopping basket"] },
        { id: "ja-u65l3-kato", type: "vocab", front: "カート", reading: "kāto", meaning: "cart", example: { jp: "カートをおします。", en: "I push the cart." }, accept: ["shopping cart", "trolley"] },
        { id: "ja-u65l3-shohin", type: "vocab", front: "しょうひん", reading: "shōhin", meaning: "goods", example: { jp: "このしょうひんはにんきです。", en: "This product is popular." }, accept: ["product", "merchandise"] },
      ],
    },
    // Lesson 4: shopping actions
    {
      id: "ja-u65l4",
      unit: 65,
      lesson: 4,
      title: "Shopping actions",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Do the shopping: しはらいます (pay), ちゅうもんします (order), こうかんします (exchange), ためます (save).",
      items: [
        { id: "ja-u65l4-shiharaimasu", type: "vocab", front: "しはらいます", reading: "shiharaimasu", meaning: "pay", example: { jp: "カードでしはらいます。", en: "I pay by card." }, accept: ["to pay", "pay for"] },
        { id: "ja-u65l4-chumonshimasu", type: "vocab", front: "ちゅうもんします", reading: "chūmonshimasu", meaning: "order", example: { jp: "コーヒーをちゅうもんします。", en: "I order a coffee." }, accept: ["to order", "place an order"] },
        { id: "ja-u65l4-kokanshimasu", type: "vocab", front: "こうかんします", reading: "kōkanshimasu", meaning: "exchange", example: { jp: "しょうひんをこうかんします。", en: "I exchange the product." }, accept: ["to exchange", "swap"] },
        { id: "ja-u65l4-henpinshimasu", type: "vocab", front: "へんぴんします", reading: "henpinshimasu", meaning: "return an item", example: { jp: "みせにへんぴんします。", en: "I return it to the shop." }, accept: ["to return", "return goods"] },
        { id: "ja-u65l4-tamemasu", type: "vocab", front: "ためます", reading: "tamemasu", meaning: "save up", example: { jp: "おかねをためます。", en: "I save money." }, accept: ["to save", "save money"] },
        { id: "ja-u65l4-kurabemasu", type: "vocab", front: "くらべます", reading: "kurabemasu", meaning: "compare", example: { jp: "ねだんをくらべます。", en: "I compare prices." }, accept: ["to compare", "compare with"] },
      ],
    },
  ],
};
