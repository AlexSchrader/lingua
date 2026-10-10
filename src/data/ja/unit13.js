// Unit 13 — かんじ・しぜん (Nature & days kanji) — A1 / JLPT N5
// Consolidated kanji unit (category: nature & days kanji). Kanji regrouped by
// meaning from the earlier thin units so each unit is a coherent set. type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT13 = {
  id: "ja-u13",
  lang: "ja",
  title: "かんじ・しぜん",
  order: 13,
  stage: "a1",
  lessons: [
    {
      id: "ja-u13l1",
      unit: 13,
      lesson: 1,
      title: "Nature & days kanji 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the seven day / element kanji: 日 月 火 水 木 金 土.",
      items: [
        { id: "ja-u13l1-nichi", type: "kanji", front: "日", reading: "nichi", meaning: "sun (also the word for day)", example: { jp: "きょうはいい日です。", en: "Today is a nice day." }, drill: { jp: "毎日水をのみます。", en: "I drink water every day." }, accept: ["day", "days", "sunshine", "date"], hint: "日 = sun, and also day. 🚨 ITS READING MOVES MORE THAN ANY OTHER KANJI: 日曜日 is にちようび, 今日 is きょう, 日本 is にほん, 一日 is ついたち. Learn it as a shape first and collect the readings as they come." },
        { id: "ja-u13l1-getsu", type: "kanji", front: "月", reading: "getsu", meaning: "moon (also the word for month)", example: { jp: "月をみます。", en: "I look at the moon." }, drill: { jp: "月曜日はしごとです。", en: "Monday is a work day." }, accept: ["month", "months", "lunar", "moonlight"], hint: "月 = moon, and also month — the calendar followed the moon, as in つき from Unit 1. ⚠️ Read げつ in 月曜日, Monday, but つき on its own and がつ in 一月, January." },
        { id: "ja-u13l1-ka", type: "kanji", front: "火", reading: "ka", meaning: "fire", example: { jp: "これは火です。", en: "This is fire." }, drill: { jp: "火曜日にあいます。", en: "I'll meet on Tuesday." }, accept: ["flame", "fire (element)", "blaze"], hint: "火 = fire — a pictograph of a flame with sparks either side. ⚠️ It is Tuesday's element: 火曜日. Four strokes, and the two outer sparks come before the central figure." },
        { id: "ja-u13l1-sui", type: "kanji", front: "水", reading: "sui", meaning: "water (read sui in compounds)", example: { jp: "水をのみます。", en: "I drink water." }, drill: { jp: "水曜日はやすみです。", en: "Wednesday is a day off." }, accept: ["aqua", "h2o", "fresh water"], hint: "水 = water — a pictograph of a stream with eddies at the sides. ⚠️ Read みず alone but すい in compounds: 水曜日 Wednesday, 水道 tap water. It is the kanji for みず you met in Unit 2." },
        { id: "ja-u13l1-moku", type: "kanji", front: "木", reading: "moku", meaning: "tree", example: { jp: "木をみます。", en: "I look at the tree." }, drill: { jp: "木のしたにねこがいます。", en: "There is a cat under the tree." }, accept: ["wood", "trees", "timber", "a tree"], hint: "木 = tree — a trunk with branches up and roots down. ⚠️ Read き alone, もく in 木曜日, Thursday. ⚠️ Add one stroke at the base and it becomes 本, book — watch for that line." },
        { id: "ja-u13l1-kin", type: "kanji", front: "金", reading: "kin", meaning: "gold", example: { jp: "金がすきです。", en: "I like gold." }, drill: { jp: "金曜日にえいがをみます。", en: "I watch a film on Friday." }, accept: ["money", "metal", "cash"], hint: "金 = gold, and by extension metal and money. ⚠️ Read きん here, but おかね when it means cash. It is Friday's element: 金曜日. ⚠️ Keep the roof shape apart from 全, whole." },
        { id: "ja-u13l1-do", type: "kanji", front: "土", reading: "do", meaning: "soil", example: { jp: "これは土です。", en: "This is soil." }, drill: { jp: "土曜日にさんぽをします。", en: "I take a walk on Saturday." }, accept: ["earth", "dirt", "ground"], hint: "土 = soil, earth. Three strokes, and 🚨 ONE STROKE FROM 士, a samurai or professional — in 土 the BOTTOM line is longer. It is Saturday's element: 土曜日." },
      ],
    },
    {
      id: "ja-u13l2",
      unit: 13,
      lesson: 2,
      title: "Nature & days kanji 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the nature kanji: 山 (mountain), 川 (river), 田 (field), 雨 (rain), 電 (electricity), 気 (air/spirit).",
      items: [
        { id: "ja-u13l2-yama", type: "kanji", front: "山", reading: "yama", meaning: "mountain", example: { jp: "山にいきます。", en: "I go to the mountain." }, drill: { jp: "山にゆきがあります。", en: "There is snow on the mountain." }, accept: ["mountains", "a mountain", "hill", "mount"], hint: "山 = mountain — three peaks, the middle one tallest. The clearest pictograph in the set. ⚠️ Read やま alone, さん in names: 富士山, ふじさん. It is the kanji for the やま you met in Unit 2." },
        { id: "ja-u13l2-kawa", type: "kanji", front: "川", reading: "kawa", meaning: "river", example: { jp: "川にいきます。", en: "I go to the river." }, drill: { jp: "川の水はつめたいです。", en: "The river water is cold." }, accept: ["rivers", "a river", "stream", "waterway"], hint: "川 = river — three strokes flowing downstream. ⚠️ Read かわ alone, but がわ at the end of a name: 江戸川, えどがわ. ⚠️ Three vertical strokes, unlike 三, which is three horizontals." },
        { id: "ja-u13l2-ta", type: "kanji", front: "田", reading: "ta", meaning: "rice field", example: { jp: "田があります。", en: "There is a rice field." }, drill: { jp: "田に水があります。", en: "There is water in the rice field." }, accept: ["field", "paddy", "rice paddy"], hint: "田 = rice field — a square divided into four plots, seen from above. ⚠️ Read た, and it is everywhere in surnames: 田中 たなか, 山田 やまだ. It also sits inside 男, man, as the field you work." },
        { id: "ja-u13l2-ame", type: "kanji", front: "雨", reading: "ame", meaning: "rain", example: { jp: "雨がすきです。", en: "I like the rain." }, drill: { jp: "雨の日はうちにいます。", en: "On a rainy day I stay home." }, accept: ["rainy", "rainfall", "raining", "a shower"], hint: "雨 = rain — drops inside a frame (Unit 12's あめ). It tops weather kanji." },
        { id: "ja-u13l2-den", type: "kanji", front: "電", reading: "den", meaning: "electricity", example: { jp: "電車で行きます。", en: "I go by train." }, drill: { jp: "電気をつけます。", en: "I turn on the light." }, accept: ["electric", "electrical", "power", "electron"], hint: "電 = electricity — 雨 (rain) over a lightning shape. 電気 = electricity, 電車 = train, 電話 = phone." },
        { id: "ja-u13l2-ki", type: "kanji", front: "気", reading: "ki", meaning: "spirit", example: { jp: "元気ですか。", en: "How are you? (Are you well?)" }, drill: { jp: "元気なこどもです。", en: "It's a lively child." }, accept: ["energy", "feeling", "air", "mood"], hint: "気 = spirit / feeling / air. In 元気 (well), 天気 (weather), 電気 (electricity)." },
        { id: "ja-u13l2-ten", type: "kanji", front: "天", reading: "ten", meaning: "heaven", example: { jp: "きょうはいい天気です。", en: "The weather is nice today." }, drill: { jp: "天気は雨です。", en: "The weather is rain." }, accept: ["sky", "the heavens", "heavens", "the firmament"], hint: "天 = heaven / sky (てん) — 一 (the heavens) over 大 (a person, arms wide): the vast sky above. 天気 (てんき) = weather." },
      ],
    },
  ],
};
