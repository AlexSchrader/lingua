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
        { id: "ja-u65l1-genkin", type: "vocab", front: "げんきん", reading: "genkin", meaning: "cash", example: { jp: "げんきんではらいます。", en: "I pay in cash." }, drill: { jp: "げんきんがありません。", en: "I have no cash." }, accept: ["hard cash", "cash money", "ready money", "paying cash"], hint: "gen-KIN — two beats, both ん held. 現 (actual) + 金 (money): money actually in your hand. ⚠️ The same 金 as in きんようび. Paying by it takes で: げんきんではらいます." },
        { id: "ja-u65l1-shihei", type: "vocab", front: "しへい", reading: "shihei", meaning: "paper money", example: { jp: "せんえんしへいをつかいます。", en: "I use a 1000-yen bill." }, drill: { jp: "しへいをさいふにいれます。", en: "I put the notes in my wallet." }, accept: ["banknote", "bill", "banknotes", "paper currency"], hint: "shi-HEI — two beats; へい is a literal ei, said hei. 紙 (paper) + 幣 (currency). ⚠️ The notes only — the coins are こぜに, two words down." },
        { id: "ja-u65l1-kozeni", type: "vocab", front: "こぜに", reading: "kozeni", meaning: "small change", example: { jp: "さいふにこぜにがあります。", en: "There is small change in my wallet." }, drill: { jp: "こぜにがおおいです。", en: "There is a lot of small change." }, accept: ["coins", "loose change", "change", "small coins"], hint: "ko-ZE-ni — three beats, a buzzing z. こ, small, plus ぜに, coin money. ⚠️ The loose coins specifically. The change you get BACK from a purchase is おつり." },
        { id: "ja-u65l1-zei", type: "vocab", front: "ぜい", reading: "zei", meaning: "tax (a duty levied)", example: { jp: "ぜいをはらいます。", en: "I pay tax." }, drill: { jp: "ぜいはたかいです。", en: "The tax is high." }, accept: ["duty", "a tax", "taxes", "levy"], hint: "ZEI — ONE beat; ぜい is a literal ei, said zei and not zay. ⚠️ Japan's sales tax is しょうひぜい, which ends in this very word — you will see it on every receipt." },
        { id: "ja-u65l1-muryo", type: "vocab", front: "むりょう", reading: "muryō", meaning: "free of charge", example: { jp: "みずはむりょうです。", en: "Water is free." }, drill: { jp: "むりょうのコーヒーをのみます。", en: "I drink the free coffee." }, accept: ["free", "no charge", "free of cost", "at no cost"], hint: "mu-RYŌ — りょう is the yōon ryo held long: two beats. 無 (without) + 料 (fee). ⚠️ The same 無 as in むり, impossible — 無 negates whatever follows it." },
        { id: "ja-u65l1-okanemochi", type: "vocab", front: "おかねもち", reading: "okanemochi", meaning: "rich person", example: { jp: "かれはおかねもちです。", en: "He is a rich person." }, drill: { jp: "おかねもちのいえはおおきいです。", en: "The rich person's house is big." }, accept: ["wealthy person", "the rich", "a rich person", "millionaire"], hint: "o-ka-ne-MO-chi — five beats, ち is chi. おかね, money, plus もち from もちます, to hold: a money-holder. ⚠️ Transparent the moment you know both halves." },
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
        { id: "ja-u65l2-bagen", type: "vocab", front: "バーゲン", reading: "bāgen", meaning: "bargain sale", example: { jp: "デパートのバーゲンにいきます。", en: "I go to the department store sale." }, drill: { jp: "バーゲンでようふくをかいます。", en: "I buy clothes at the sale." }, accept: ["sale", "bargain", "a sale", "clearance sale"], hint: "BĀ-gen — the ー holds the first beat: baa-gen, three beats. From English bargain, but the meaning MOVED. ⚠️ In Japanese it is the SALE EVENT, not one cheap item." },
        { id: "ja-u65l2-waribiki", type: "vocab", front: "わりびき", reading: "waribiki", meaning: "discount", example: { jp: "がくせいわりびきがあります。", en: "There is a student discount." }, drill: { jp: "わりびきがおおきいです。", en: "The discount is large." }, accept: ["price reduction", "money off", "a discount", "reduction"], hint: "wa-ri-BI-ki — four beats, tapped r. わり, a proportion, plus びき from ひく, to subtract: a proportion taken off. ⚠️ さんわりびき is thirty percent off — the わり counts tenths." },
        { id: "ja-u65l2-kupon", type: "vocab", front: "クーポン", reading: "kūpon", meaning: "coupon", example: { jp: "クーポンをつかいます。", en: "I use a coupon." }, drill: { jp: "クーポンはきょうまでです。", en: "The coupon is good until today." }, accept: ["voucher", "a coupon", "discount voucher", "coupons"], hint: "KŪ-pon — the ー holds the first beat: kuu-pon, three beats. From French coupon. ⚠️ Hold that first beat — クポン is not a word." },
        { id: "ja-u65l2-pointo", type: "vocab", front: "ポイント", reading: "pointo", meaning: "reward points", example: { jp: "かいものでポイントをもらいます。", en: "I get points when shopping." }, drill: { jp: "ポイントがたくさんあります。", en: "I have a lot of points." }, accept: ["points", "loyalty points", "reward point", "store points"], hint: "POIN-to — three beats: ポ, イ, then ン held, then ト. From English point. ⚠️ Japanese uses it above all for loyalty points — a ポイントカード is in every wallet." },
        { id: "ja-u65l2-osusume", type: "vocab", front: "おすすめ", reading: "osusume", meaning: "recommendation", example: { jp: "これはおすすめです。", en: "This one is recommended." }, drill: { jp: "おすすめのりょうりをたべます。", en: "I eat the recommended dish." }, accept: ["suggestion", "recommended item", "a recommendation", "the house special"], hint: "o-su-SU-me — four beats; the お is the polite prefix on すすめ, from すすめる, to recommend. ⚠️ On a menu it marks the dish the shop is pushing." },
        { id: "ja-u65l2-ninki", type: "vocab", front: "にんき", reading: "ninki", meaning: "popularity", example: { jp: "このみせはにんきがあります。", en: "This shop is popular." }, drill: { jp: "にんきのみせにいきます。", en: "I go to the popular shop." }, accept: ["being popular", "popular appeal", "public favour", "how popular it is"], hint: "NIN-ki — two beats, the ん held. 人 (person) + 気 (feeling): what people feel about it. ⚠️ It is a NOUN, so Japanese says にんきがあります, there IS popularity, where English says it IS popular." },
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
        { id: "ja-u65l3-tenin", type: "vocab", front: "てんいん", reading: "tenin", meaning: "shop clerk", example: { jp: "てんいんにききます。", en: "I ask the shop clerk." }, drill: { jp: "てんいんはしんせつです。", en: "The shop assistant is kind." }, accept: ["shop assistant", "clerk", "sales clerk", "shop staff"], hint: "ten-IN — four kana, two beats, each ん held: ten-in. 店 (shop) + 員 (member): a member of the shop. ⚠️ The same 員 marks staff in かいしゃいん and ぎんこういん." },
        { id: "ja-u65l3-reshito", type: "vocab", front: "レシート", reading: "reshīto", meaning: "receipt", example: { jp: "レシートをもらいます。", en: "I get a receipt." }, drill: { jp: "レシートはかばんのなかです。", en: "The receipt is in my bag." }, accept: ["sales slip", "a receipt", "till receipt", "receipts"], hint: "re-SHĪ-to — the ー holds the middle beat: re-shii-to, four beats. From English receipt. ⚠️ Japanese keeps the sound English spells with a p but never says." },
        { id: "ja-u65l3-chirashi", type: "vocab", front: "ちらし", reading: "chirashi", meaning: "flyer", example: { jp: "スーパーのちらしをみます。", en: "I look at the supermarket flyer." }, drill: { jp: "ちらしをよみます。", en: "I read the flyer." }, accept: ["leaflet", "ad flyer", "a flyer", "handbill"], hint: "chi-RA-shi — three beats, ち is chi, tapped r. From ちらす, to scatter: the thing scattered about. ⚠️ The advertising leaflet in your letterbox or tucked in a newspaper." },
        { id: "ja-u65l3-kago", type: "vocab", front: "かご", reading: "kago", meaning: "basket", example: { jp: "かごをもちます。", en: "I hold the basket." }, drill: { jp: "かごにやさいをいれます。", en: "I put the vegetables in the basket." }, accept: ["shopping basket", "a basket", "baskets", "hand basket"], hint: "KA-go — two beats, hard g. ⚠️ Any basket, woven or plastic — the one you carry round a supermarket, as against カート, the trolley, just below." },
        { id: "ja-u65l3-kato", type: "vocab", front: "カート", reading: "kāto", meaning: "cart", example: { jp: "カートをおします。", en: "I push the cart." }, drill: { jp: "カートはおおきいです。", en: "The trolley is big." }, accept: ["shopping cart", "trolley", "a cart", "shopping trolley"], hint: "KĀ-to — the ー holds the first beat: kaa-to, two beats. From English cart. ⚠️ The wheeled trolley; its hand-carried partner かご is just above." },
        { id: "ja-u65l3-shohin", type: "vocab", front: "しょうひん", reading: "shōhin", meaning: "goods (merchandise for sale)", example: { jp: "このしょうひんはにんきです。", en: "This product is popular." }, drill: { jp: "しょうひんのねだんをみます。", en: "I look at the price of the goods." }, accept: ["product", "merchandise", "goods for sale", "an item"], hint: "SHŌ-hin — しょう is a long o: two beats. 商 (commerce) + 品 (article): an article of trade. ⚠️ Careful — a same-sounding しょうひん written 賞品 means a prize. The shop context decides." },
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
        { id: "ja-u65l4-shiharaimasu", type: "vocab", front: "しはらいます", reading: "shiharaimasu", meaning: "pay (to settle a bill)", example: { jp: "カードでしはらいます。", en: "I pay by card." }, drill: { jp: "ぜいをしはらいます。", en: "I pay the tax." }, accept: ["to pay", "pay for", "settle a bill", "pays"], hint: "shi-ha-ra-i-MA-su — six beats, tapped r. 支 (branch out) + 払 (brush off). ⚠️ More formal than はらいます: a bill, an invoice, a fee. For everyday paying, はらいます." },
        { id: "ja-u65l4-chumonshimasu", type: "vocab", front: "ちゅうもんします", reading: "chūmonshimasu", meaning: "order", example: { jp: "コーヒーをちゅうもんします。", en: "I order a coffee." }, drill: { jp: "ほんをちゅうもんします。", en: "I order a book." }, accept: ["to order", "place an order", "orders", "put in an order"], hint: "CHŪ-mon-shi-ma-su — ちゅう held long, then ん. 注 (pour into) + 文 (writing): putting it in writing. ⚠️ A noun plus します, so the noun on its own is ちゅうもん." },
        { id: "ja-u65l4-kokanshimasu", type: "vocab", front: "こうかんします", reading: "kōkanshimasu", meaning: "exchange", example: { jp: "しょうひんをこうかんします。", en: "I exchange the product." }, drill: { jp: "でんちをこうかんします。", en: "I change the battery." }, accept: ["to exchange", "swap", "trade", "exchanges"], hint: "KŌ-kan-shi-ma-su — こう is a long o, the ん held. 交 (cross) + 換 (swap). ⚠️ Two things trade places. Giving one back for your money is へんぴんします, next." },
        { id: "ja-u65l4-henpinshimasu", type: "vocab", front: "へんぴんします", reading: "henpinshimasu", meaning: "return an item", example: { jp: "みせにへんぴんします。", en: "I return it to the shop." }, drill: { jp: "ようふくをへんぴんします。", en: "I return the clothes." }, accept: ["to return", "return goods", "send back", "take back"], hint: "hen-PIN-shi-ma-su — two heavy beats, both ん held. 返 (return) + 品 (article), the same 品 as しょうひん. ⚠️ You give the thing BACK; こうかんします swaps it for another." },
        { id: "ja-u65l4-tamemasu", type: "vocab", front: "ためます", reading: "tamemasu", meaning: "save up", example: { jp: "おかねをためます。", en: "I save money." }, drill: { jp: "ポイントをためます。", en: "I collect points." }, accept: ["to save", "save money", "put aside", "build up"], hint: "ta-ME-ma-su — four beats. Dictionary form ためる. ⚠️ It builds something up over time — money, points, water in a tank." },
        { id: "ja-u65l4-kurabemasu", type: "vocab", front: "くらべます", reading: "kurabemasu", meaning: "compare", example: { jp: "ねだんをくらべます。", en: "I compare prices." }, drill: { jp: "ふたつのみせをくらべます。", en: "I compare the two shops." }, accept: ["to compare", "compare with", "compares", "weigh up"], hint: "ku-ra-BE-ma-su — five beats, tapped r. Dictionary form くらべる. ⚠️ What you compare it WITH takes と: AをBとくらべます." },
      ],
    },
  ],
};
