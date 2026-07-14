// Unit 66 — てんき・そと ("Weather & Outdoors") — A1 thematic
// The core weather/sky words (てんき あめ はれ くもり かぜ ゆき つき ほし そら…) were
// all introduced earlier, so this unit climbs into the next ring: the sky at different
// times (あおぞら よぞら ひので ゆうひ), sun-and-shade weather (きり あらし ひなた
// ひかげ), the shape of the land outside (みね さか たき はまべ), and the plants on it
// (みき つぼみ しばふ まつ). Many are transparent compounds — あお+そら, よる+そら,
// ほし+そら — so hints point at the parts. Examples reuse only already-taught nouns,
// verbs (のぼります あるきます さきます ふきます…) and particles. No new grammar.
export const UNIT66 = {
  id: "ja-u66",
  lang: "ja",
  title: "てんき・そと",
  order: 66,
  stage: "a1",
  lessons: [
    // Lesson 1: the sky
    {
      id: "ja-u66l1",
      unit: 66,
      lesson: 1,
      title: "Sky",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe the sky at different times: あおぞら よぞら ほしぞら ひので ゆうひ まんげつ.",
      items: [
        { id: "ja-u66l1-aozora", type: "vocab", front: "あおぞら", reading: "aozora", meaning: "blue sky", example: { jp: "あおぞらがきれいです。", en: "The blue sky is beautiful." }, accept: ["clear sky", "blue skies"], hint: "あお (blue) + そら (sky) — そら softens to ぞら." },
        { id: "ja-u66l1-yozora", type: "vocab", front: "よぞら", reading: "yozora", meaning: "night sky", example: { jp: "よぞらのほしがきれいです。", en: "The stars in the night sky are pretty." }, accept: ["evening sky"], hint: "よる (night) + そら (sky)." },
        { id: "ja-u66l1-hoshizora", type: "vocab", front: "ほしぞら", reading: "hoshizora", meaning: "starry sky", example: { jp: "ほしぞらをみます。", en: "I look at the starry sky." }, accept: ["star-filled sky", "sky full of stars"], hint: "ほし (star) + そら (sky)." },
        { id: "ja-u66l1-hinode", type: "vocab", front: "ひので", reading: "hinode", meaning: "sunrise", example: { jp: "やまでひのでをみます。", en: "I watch the sunrise on the mountain." }, accept: ["rising sun"], hint: "ひ (sun) + でる (come out) — the sun coming up." },
        { id: "ja-u66l1-yuhi", type: "vocab", front: "ゆうひ", reading: "yūhi", meaning: "setting sun", example: { jp: "ゆうひがあかいです。", en: "The setting sun is red." }, accept: ["evening sun", "sunset"], hint: "ゆう (evening) + ひ (sun)." },
        { id: "ja-u66l1-mangetsu", type: "vocab", front: "まんげつ", reading: "mangetsu", meaning: "full moon", example: { jp: "こんばんはまんげつです。", en: "Tonight is a full moon." }, accept: ["the full moon"] },
      ],
    },
    // Lesson 2: weather & sunlight
    {
      id: "ja-u66l2",
      unit: 66,
      lesson: 2,
      title: "Weather & sunlight",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about weather, sun and shade: きり あらし そよかぜ ひざし ひなた ひかげ.",
      items: [
        { id: "ja-u66l2-kiri", type: "vocab", front: "きり", reading: "kiri", meaning: "fog", example: { jp: "あさ、きりがでます。", en: "Fog appears in the morning." }, accept: ["mist"] },
        { id: "ja-u66l2-arashi", type: "vocab", front: "あらし", reading: "arashi", meaning: "storm", example: { jp: "あらしがきます。", en: "A storm is coming." }, accept: ["tempest"] },
        { id: "ja-u66l2-soyokaze", type: "vocab", front: "そよかぜ", reading: "soyokaze", meaning: "breeze", example: { jp: "そよかぜがふきます。", en: "A breeze blows." }, accept: ["gentle breeze", "light wind"], hint: "そよ (rustling) + かぜ (wind) — a soft wind." },
        { id: "ja-u66l2-hizashi", type: "vocab", front: "ひざし", reading: "hizashi", meaning: "sunlight", example: { jp: "ひざしがつよいです。", en: "The sunlight is strong." }, accept: ["sunshine", "rays of sun"] },
        { id: "ja-u66l2-hinata", type: "vocab", front: "ひなた", reading: "hinata", meaning: "sunny spot", example: { jp: "ねこがひなたでねます。", en: "The cat sleeps in the sunny spot." }, accept: ["in the sun", "sunny place"], hint: "The warm side in the sun — opposite of ひかげ." },
        { id: "ja-u66l2-hikage", type: "vocab", front: "ひかげ", reading: "hikage", meaning: "shade", example: { jp: "ひかげはすずしいです。", en: "The shade is cool." }, accept: ["shadow", "the shade"], hint: "ひ (sun) + かげ (shadow) — the cool spot out of the sun." },
      ],
    },
    // Lesson 3: landscape
    {
      id: "ja-u66l3",
      unit: 66,
      lesson: 3,
      title: "Landscape",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name outdoor landforms: みね さか たき はまべ のはら がけ.",
      items: [
        { id: "ja-u66l3-mine", type: "vocab", front: "みね", reading: "mine", meaning: "peak", example: { jp: "やまのみねがしろいです。", en: "The mountain peak is white." }, accept: ["summit", "mountain peak"], hint: "The top of a やま (mountain)." },
        { id: "ja-u66l3-saka", type: "vocab", front: "さか", reading: "saka", meaning: "slope", example: { jp: "さかをあるきます。", en: "I walk up the slope." }, accept: ["hill", "incline"] },
        { id: "ja-u66l3-taki", type: "vocab", front: "たき", reading: "taki", meaning: "waterfall", example: { jp: "たきのみずはつめたいです。", en: "The waterfall's water is cold." }, accept: ["falls"] },
        { id: "ja-u66l3-hamabe", type: "vocab", front: "はまべ", reading: "hamabe", meaning: "beach", example: { jp: "はまべであそびます。", en: "I play at the beach." }, accept: ["seashore", "seaside"] },
        { id: "ja-u66l3-nohara", type: "vocab", front: "のはら", reading: "nohara", meaning: "meadow", example: { jp: "のはらにはながさきます。", en: "Flowers bloom in the meadow." }, accept: ["field", "grassy field"] },
        { id: "ja-u66l3-gake", type: "vocab", front: "がけ", reading: "gake", meaning: "cliff", example: { jp: "がけはあぶないです。", en: "The cliff is dangerous." }, accept: ["precipice"] },
      ],
    },
    // Lesson 4: plants & outdoors
    {
      id: "ja-u66l4",
      unit: 66,
      lesson: 4,
      title: "Plants & outdoors",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about plants and being outside: みき つぼみ しばふ まつ はたけ そと.",
      items: [
        { id: "ja-u66l4-miki", type: "vocab", front: "みき", reading: "miki", meaning: "trunk", example: { jp: "きのみきはふといです。", en: "The tree's trunk is thick." }, accept: ["tree trunk"], hint: "The thick main part of a き (tree)." },
        { id: "ja-u66l4-tsubomi", type: "vocab", front: "つぼみ", reading: "tsubomi", meaning: "bud", example: { jp: "はなのつぼみはちいさいです。", en: "The flower buds are small." }, accept: ["flower bud", "buds"], hint: "A はな (flower) before it opens." },
        { id: "ja-u66l4-shibafu", type: "vocab", front: "しばふ", reading: "shibafu", meaning: "lawn", example: { jp: "こうえんのしばふであそびます。", en: "I play on the lawn in the park." }, accept: ["turf", "grass lawn"] },
        { id: "ja-u66l4-matsu", type: "vocab", front: "まつ", reading: "matsu", meaning: "pine tree", example: { jp: "にわにまつがあります。", en: "There is a pine tree in the garden." }, accept: ["pine", "pines"] },
        { id: "ja-u66l4-hatake", type: "vocab", front: "はたけ", reading: "hatake", meaning: "field", example: { jp: "はたけでやさいをつくります。", en: "I grow vegetables in the field." }, accept: ["farm field", "vegetable field"], hint: "A cultivated crop field — のはら is a wild grassy one." },
        { id: "ja-u66l4-soto", type: "vocab", front: "そと", reading: "soto", meaning: "outside", example: { jp: "そとであそびます。", en: "I play outside." }, accept: ["outdoors", "outer"] },
      ],
    },
  ],
};
