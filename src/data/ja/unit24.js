// Unit 24 — のりもの・たび ("Transport & travel") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed.
// N4 travel vocabulary. Every example uses only A1 vocab + A1 grammar. Naturalness
// queued for the batch native review when A2 goes live.
export const UNIT24 = {
  id: "ja-u24",
  lang: "ja",
  title: "のりもの・たび",
  order: 24,
  stage: "a2",
  lessons: [
    {
      id: "ja-u24l1", unit: 24, lesson: 1, title: "Getting there", cefr: "A2", dominantMode: "recall",
      canDo: "Name ways to travel: でんしゃ ちかてつ しんかんせん ひこうき じてんしゃ トラック.",
      items: [
        { id: "ja-u24l1-densha", type: "vocab", front: "でんしゃ", reading: "densha", meaning: "train", example: { jp: "でんしゃにのります。", en: "I ride the train." }, accept: ["the train"] },
        { id: "ja-u24l1-chikatetsu", type: "vocab", front: "ちかてつ", reading: "chikatetsu", meaning: "subway", example: { jp: "ちかてつでいきます。", en: "I go by subway." }, accept: ["metro", "underground"] },
        { id: "ja-u24l1-shinkansen", type: "vocab", front: "しんかんせん", reading: "shinkansen", meaning: "bullet train", example: { jp: "しんかんせんにのります。", en: "I ride the bullet train." }, accept: ["shinkansen"] },
        { id: "ja-u24l1-hikoki", type: "vocab", front: "ひこうき", reading: "hikōki", meaning: "airplane", example: { jp: "ひこうきはおおきいです。", en: "The airplane is big." }, accept: ["plane", "aircraft"] },
        { id: "ja-u24l1-jitensha", type: "vocab", front: "じてんしゃ", reading: "jitensha", meaning: "bicycle", example: { jp: "じてんしゃをかいます。", en: "I buy a bicycle." }, accept: ["bike"] },
        { id: "ja-u24l1-torakku", type: "vocab", front: "トラック", reading: "torakku", meaning: "truck", example: { jp: "トラックがとまります。", en: "The truck stops." }, accept: ["lorry"] },
      ],
    },
    {
      id: "ja-u24l2", unit: 24, lesson: 2, title: "On a trip", cefr: "A2", dominantMode: "recall",
      canDo: "Talk about a trip: りょかん みやげ スーツケース パスポート よやく かんこう.",
      items: [
        { id: "ja-u24l2-ryokan", type: "vocab", front: "りょかん", reading: "ryokan", meaning: "inn", example: { jp: "りょかんにとまります。", en: "I stay at an inn." }, accept: ["Japanese inn"] },
        { id: "ja-u24l2-miyage", type: "vocab", front: "みやげ", reading: "miyage", meaning: "souvenir", example: { jp: "おみやげをかいます。", en: "I buy a souvenir." }, accept: ["gift", "present (souvenir)"] },
        { id: "ja-u24l2-sutsukesu", type: "vocab", front: "スーツケース", reading: "sūtsukēsu", meaning: "suitcase", example: { jp: "スーツケースがおもいです。", en: "The suitcase is heavy." }, accept: ["case", "luggage"] },
        { id: "ja-u24l2-pasupoto", type: "vocab", front: "パスポート", reading: "pasupōto", meaning: "passport", example: { jp: "パスポートをさがします。", en: "I look for my passport." }, accept: [] },
        { id: "ja-u24l2-yoyaku", type: "vocab", front: "よやく", reading: "yoyaku", meaning: "reservation", example: { jp: "ホテルをよやくします。", en: "I reserve a hotel." }, accept: ["booking", "reserve"] },
        { id: "ja-u24l2-kanko", type: "vocab", front: "かんこう", reading: "kankō", meaning: "sightseeing", example: { jp: "にほんをかんこうします。", en: "I go sightseeing in Japan." }, accept: ["tourism"] },
      ],
    },
    {
      id: "ja-u24l3", unit: 24, lesson: 3, title: "On the way", cefr: "A2", dominantMode: "recall",
      canDo: "Find your way: みち こうさてん しんごう かど つぎ のりかえ.",
      items: [
        { id: "ja-u24l3-michi", type: "vocab", front: "みち", reading: "michi", meaning: "road", example: { jp: "みちをあるきます。", en: "I walk along the road." }, accept: ["street", "way", "path"] },
        { id: "ja-u24l3-kosaten", type: "vocab", front: "こうさてん", reading: "kōsaten", meaning: "intersection", example: { jp: "こうさてんをわたります。", en: "I cross the intersection." }, accept: ["crossroads", "junction"] },
        { id: "ja-u24l3-shingo", type: "vocab", front: "しんごう", reading: "shingō", meaning: "traffic light", example: { jp: "しんごうはあかです。", en: "The light is red." }, accept: ["signal", "stoplight"] },
        { id: "ja-u24l3-kado", type: "vocab", front: "かど", reading: "kado", meaning: "corner", example: { jp: "つぎのかどです。", en: "It's the next corner." }, accept: ["street corner"] },
        { id: "ja-u24l3-tsugi", type: "vocab", front: "つぎ", reading: "tsugi", meaning: "next", example: { jp: "つぎのえきです。", en: "It's the next station." }, accept: ["following", "the next one"] },
        { id: "ja-u24l3-norikae", type: "vocab", front: "のりかえ", reading: "norikae", meaning: "transfer", example: { jp: "えきでのりかえです。", en: "You transfer at the station." }, accept: ["change (trains)", "connection"] },
      ],
    },
    {
      id: "ja-u24l4", unit: 24, lesson: 4, title: "Coming & going", cefr: "A2", dominantMode: "recall",
      canDo: "Move around: おります つきます でかけます むかえます とどきます まがります.",
      items: [
        { id: "ja-u24l4-orimasu", type: "vocab", front: "おります", reading: "orimasu", meaning: "get off", example: { jp: "つぎのえきでおります。", en: "I get off at the next station." }, accept: ["get down", "alight", "descend"] },
        { id: "ja-u24l4-tsukimasu", type: "vocab", front: "つきます", reading: "tsukimasu", meaning: "arrive", example: { jp: "くうこうにつきます。", en: "I arrive at the airport." }, accept: ["reach", "get to"] },
        { id: "ja-u24l4-dekakemasu", type: "vocab", front: "でかけます", reading: "dekakemasu", meaning: "go out", example: { jp: "あさ、でかけます。", en: "I go out in the morning." }, accept: ["set out", "head out"] },
        { id: "ja-u24l4-mukaemasu", type: "vocab", front: "むかえます", reading: "mukaemasu", meaning: "pick up", example: { jp: "えきでともだちをむかえます。", en: "I meet my friend at the station." }, accept: ["go to meet", "welcome", "greet"] },
        { id: "ja-u24l4-todokimasu", type: "vocab", front: "とどきます", reading: "todokimasu", meaning: "arrive (be delivered)", example: { jp: "てがみがとどきます。", en: "The letter arrives." }, accept: ["be delivered", "reach"] },
        { id: "ja-u24l4-magarimasu", type: "vocab", front: "まがります", reading: "magarimasu", meaning: "turn", example: { jp: "みぎにまがります。", en: "I turn right." }, accept: ["bend", "turn (a corner)"] },
      ],
    },
  ],
};
