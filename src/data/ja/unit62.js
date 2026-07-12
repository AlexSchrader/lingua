// Unit 62 — りょこう・こうつう ("Travel & transport") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for travel and getting around — departures, delays, and sightseeing, beyond
// A1/A2's でんしゃ/えき/きっぷ. Examples stay in A1+A2 grammar and reuse A1/A2 vocab where
// possible. Naturalness queued for native review.
export const UNIT62 = {
  id: "ja-u62", lang: "ja", title: "りょこう・こうつう", order: 62, stage: "b1",
  lessons: [
    {
      id: "ja-u62l1", unit: 62, lesson: 1, title: "Getting around", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about transport: こうつう しゅっぱつ とうちゃく じゅうたい うんちん じこ.",
      items: [
        { id: "ja-u62l1-kotsu", type: "vocab", front: "こうつう", reading: "kōtsū", meaning: "traffic", example: { jp: "こうつうがべんりです。", en: "The transport is convenient." }, accept: ["transportation"] },
        { id: "ja-u62l1-shuppatsu", type: "vocab", front: "しゅっぱつ", reading: "shuppatsu", meaning: "departure", example: { jp: "あさしゅっぱつします。", en: "I depart in the morning." }, accept: ["setting off"], hint: "しゅっぱつ (departure) ⇄ とうちゃく (arrival)." },
        { id: "ja-u62l1-tochaku", type: "vocab", front: "とうちゃく", reading: "tōchaku", meaning: "arrival", example: { jp: "くうこうにとうちゃくします。", en: "I arrive at the airport." }, accept: ["arriving"] },
        { id: "ja-u62l1-jutai", type: "vocab", front: "じゅうたい", reading: "jūtai", meaning: "traffic jam", example: { jp: "みちがじゅうたいです。", en: "The road is jammed." }, accept: ["congestion"] },
        { id: "ja-u62l1-unchin", type: "vocab", front: "うんちん", reading: "unchin", meaning: "fare", example: { jp: "でんしゃのうんちんです。", en: "It's the train fare." }, accept: ["ticket price"] },
        { id: "ja-u62l1-jiko", type: "vocab", front: "じこ", reading: "jiko", meaning: "accident", example: { jp: "じこにきをつけます。", en: "I watch out for accidents." }, accept: ["crash", "incident"] },
      ],
    },
    {
      id: "ja-u62l2", unit: 62, lesson: 2, title: "Sightseeing", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about a trip: めいしょ けしき しゅくはく にってい ガイド おんせん.",
      items: [
        { id: "ja-u62l2-meisho", type: "vocab", front: "めいしょ", reading: "meisho", meaning: "famous place", example: { jp: "ゆうめいなめいしょです。", en: "It's a famous spot." }, accept: ["landmark", "sight"] },
        { id: "ja-u62l2-keshiki", type: "vocab", front: "けしき", reading: "keshiki", meaning: "scenery", example: { jp: "けしきがきれいです。", en: "The scenery is beautiful." }, accept: ["view", "landscape"] },
        { id: "ja-u62l2-shukuhaku", type: "vocab", front: "しゅくはく", reading: "shukuhaku", meaning: "lodging", example: { jp: "ホテルにしゅくはくします。", en: "I stay at a hotel." }, accept: ["staying overnight"] },
        { id: "ja-u62l2-nittei", type: "vocab", front: "にってい", reading: "nittei", meaning: "itinerary", example: { jp: "りょこうのにっていです。", en: "It's the trip itinerary." }, accept: ["schedule"] },
        { id: "ja-u62l2-gaido", type: "vocab", front: "ガイド", reading: "gaido", meaning: "guide", example: { jp: "ガイドがせつめいします。", en: "The guide explains." }, accept: ["tour guide"] },
        { id: "ja-u62l2-onsen", type: "vocab", front: "おんせん", reading: "onsen", meaning: "hot spring", example: { jp: "おんせんがすきです。", en: "I like hot springs." }, accept: ["spa"] },
      ],
    },
  ],
};
