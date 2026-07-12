// Unit 74 — りょこう・こうつう ("Travel & transport") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 travel, transport & places vocab NOT already taught. Modeled like the other
// A2 units: vocab items whose example sentences use only previously-introduced
// vocab + A1 grammar (を/に/で/へ/と/です/ます). Not registered in index.js until
// A1 is native-reviewed and signed off.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT74 = {
  id: "ja-u74",
  lang: "ja",
  title: "りょこう・こうつう・N4",
  order: 74,
  stage: "a2",
  lessons: [
    // Lesson 1: trains & tickets
    {
      id: "ja-u74l1",
      unit: 74,
      lesson: 1,
      title: "Trains & tickets",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Buy tickets and pick trains: かたみち おうふく していせき じゆうせき きゅうこう とっきゅう.",
      items: [
        { id: "ja-u74l1-katamichi", type: "vocab", front: "かたみち", reading: "katamichi", meaning: "one-way trip", example: { jp: "かたみちのきっぷをかいます。", en: "I buy a one-way ticket." }, accept: ["one way", "one-way"] },
        { id: "ja-u74l1-ofuku", type: "vocab", front: "おうふく", reading: "ōfuku", meaning: "round trip", example: { jp: "おうふくでおねがいします。", en: "Round trip, please." }, accept: ["return trip", "round-trip"] },
        { id: "ja-u74l1-shiteiseki", type: "vocab", front: "していせき", reading: "shiteiseki", meaning: "reserved seat", example: { jp: "していせきにすわります。", en: "I sit in the reserved seat." }, accept: ["reserved seating", "assigned seat"] },
        { id: "ja-u74l1-jiyuseki", type: "vocab", front: "じゆうせき", reading: "jiyūseki", meaning: "unreserved seat", example: { jp: "じゆうせきをさがします。", en: "I look for an unreserved seat." }, accept: ["non-reserved seat", "open seat"] },
        { id: "ja-u74l1-kyuko", type: "vocab", front: "きゅうこう", reading: "kyūkō", meaning: "express train", example: { jp: "きゅうこうにのります。", en: "I take the express." }, accept: ["express", "express service"] },
        { id: "ja-u74l1-tokkyu", type: "vocab", front: "とっきゅう", reading: "tokkyū", meaning: "limited express", example: { jp: "とっきゅうははやいです。", en: "The limited express is fast." }, accept: ["limited express train", "super express"] },
      ],
    },
    // Lesson 2: cars & roads
    {
      id: "ja-u74l2",
      unit: 74,
      lesson: 2,
      title: "Cars & roads",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about driving and traffic: うんてん じゅうたい うんちん ガソリン じこ つうきん.",
      items: [
        { id: "ja-u74l2-unten", type: "vocab", front: "うんてん", reading: "unten", meaning: "driving", example: { jp: "くるまをうんてんします。", en: "I drive a car." }, accept: ["operating (a car)", "to drive"] },
        { id: "ja-u74l2-jutai", type: "vocab", front: "じゅうたい", reading: "jūtai", meaning: "traffic jam", example: { jp: "みちがじゅうたいです。", en: "The road is jammed." }, accept: ["congestion", "traffic congestion"] },
        { id: "ja-u74l2-unchin", type: "vocab", front: "うんちん", reading: "unchin", meaning: "fare", example: { jp: "でんしゃのうんちんをはらいます。", en: "I pay the train fare." }, accept: ["train fare", "transport fare"] },
        { id: "ja-u74l2-gasorin", type: "vocab", front: "ガソリン", reading: "gasorin", meaning: "gasoline", example: { jp: "ガソリンをかいます。", en: "I buy gasoline." }, accept: ["petrol", "gas"] },
        { id: "ja-u74l2-jiko", type: "vocab", front: "じこ", reading: "jiko", meaning: "accident", example: { jp: "くるまのじこをみました。", en: "I saw a car accident." }, accept: ["crash", "traffic accident"] },
        { id: "ja-u74l2-tsukin", type: "vocab", front: "つうきん", reading: "tsūkin", meaning: "commuting to work", example: { jp: "でんしゃでつうきんします。", en: "I commute by train." }, accept: ["commute", "commuting"] },
      ],
    },
    // Lesson 3: going abroad
    {
      id: "ja-u74l3",
      unit: 74,
      lesson: 3,
      title: "Going abroad",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about trips near and far: かいがい こくない こくさい にもつ あんない けんぶつ.",
      items: [
        { id: "ja-u74l3-kaigai", type: "vocab", front: "かいがい", reading: "kaigai", meaning: "overseas", example: { jp: "かいがいへいきます。", en: "I go overseas." }, accept: ["abroad", "foreign countries"] },
        { id: "ja-u74l3-kokunai", type: "vocab", front: "こくない", reading: "kokunai", meaning: "domestic", example: { jp: "こくないをりょこうします。", en: "I travel domestically." }, accept: ["within the country", "inside the country"] },
        { id: "ja-u74l3-kokusai", type: "vocab", front: "こくさい", reading: "kokusai", meaning: "international", example: { jp: "こくさいでんわをかけます。", en: "I make an international call." }, accept: ["global", "cross-border"] },
        { id: "ja-u74l3-nimotsu", type: "vocab", front: "にもつ", reading: "nimotsu", meaning: "luggage", example: { jp: "にもつがおもいです。", en: "The luggage is heavy." }, accept: ["baggage", "bags"] },
        { id: "ja-u74l3-annai", type: "vocab", front: "あんない", reading: "annai", meaning: "guidance", example: { jp: "ともだちをあんないします。", en: "I show my friend around." }, accept: ["showing around", "information"] },
        { id: "ja-u74l3-kenbutsu", type: "vocab", front: "けんぶつ", reading: "kenbutsu", meaning: "sightseeing", example: { jp: "おてらをけんぶつします。", en: "I go sightseeing at the temple." }, accept: ["seeing the sights", "visiting"] },
      ],
    },
    // Lesson 4: lodging & tourism
    {
      id: "ja-u74l4",
      unit: 74,
      lesson: 4,
      title: "Lodging & tourism",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a stay and the sights: しゅくはく うけつけ めいしょ ガイド りょひ ホームステイ.",
      items: [
        { id: "ja-u74l4-shukuhaku", type: "vocab", front: "しゅくはく", reading: "shukuhaku", meaning: "overnight stay", example: { jp: "ホテルにしゅくはくします。", en: "I stay overnight at a hotel." }, accept: ["lodging", "staying the night"] },
        { id: "ja-u74l4-uketsuke", type: "vocab", front: "うけつけ", reading: "uketsuke", meaning: "reception desk", example: { jp: "うけつけでなまえをかきます。", en: "I write my name at reception." }, accept: ["front desk", "reception"] },
        { id: "ja-u74l4-meisho", type: "vocab", front: "めいしょ", reading: "meisho", meaning: "famous place", example: { jp: "にほんのめいしょへいきます。", en: "I go to Japan's famous places." }, accept: ["famous spot", "sight"] },
        { id: "ja-u74l4-gaido", type: "vocab", front: "ガイド", reading: "gaido", meaning: "tour guide", example: { jp: "ガイドとまちをあるきます。", en: "I walk around town with a guide." }, accept: ["guide", "guidebook"] },
        { id: "ja-u74l4-ryohi", type: "vocab", front: "りょひ", reading: "ryohi", meaning: "travel expenses", example: { jp: "りょひをはらいます。", en: "I pay the travel expenses." }, accept: ["travel costs", "trip cost"] },
        { id: "ja-u74l4-homusutei", type: "vocab", front: "ホームステイ", reading: "hōmusutei", meaning: "homestay", example: { jp: "アメリカでホームステイします。", en: "I do a homestay in America." }, accept: ["home stay", "staying with a host family"] },
      ],
    },
  ],
};
