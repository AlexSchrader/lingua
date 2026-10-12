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
        { id: "ja-u66l1-aozora", type: "vocab", front: "あおぞら", reading: "aozora", meaning: "blue sky", example: { jp: "あおぞらがきれいです。", en: "The blue sky is beautiful." }, drill: { jp: "あおぞらのしゃしんをとります。", en: "I take a photo of the blue sky." }, accept: ["clear sky", "blue skies", "a blue sky", "cloudless sky"], hint: "あお (blue) + そら (sky) — そら softens to ぞら." },
        { id: "ja-u66l1-yozora", type: "vocab", front: "よぞら", reading: "yozora", meaning: "night sky", example: { jp: "よぞらのほしがきれいです。", en: "The stars in the night sky are pretty." }, drill: { jp: "よぞらはくらいです。", en: "The night sky is dark." }, accept: ["evening sky", "the night sky", "sky at night", "dark sky"], hint: "よる (night) + そら (sky)." },
        { id: "ja-u66l1-hoshizora", type: "vocab", front: "ほしぞら", reading: "hoshizora", meaning: "starry sky", example: { jp: "ほしぞらをみます。", en: "I look at the starry sky." }, drill: { jp: "ほしぞらのしたであるきます。", en: "I walk under the starry sky." }, accept: ["star-filled sky", "sky full of stars", "the starry sky", "star-lit sky"], hint: "ほし (star) + そら (sky)." },
        { id: "ja-u66l1-hinode", type: "vocab", front: "ひので", reading: "hinode", meaning: "sunrise", example: { jp: "やまでひのでをみます。", en: "I watch the sunrise on the mountain." }, drill: { jp: "ひのではきれいです。", en: "The sunrise is beautiful." }, accept: ["rising sun", "the sunrise", "daybreak", "sun-up"], hint: "ひ (sun) + でる (come out) — the sun coming up." },
        { id: "ja-u66l1-yuhi", type: "vocab", front: "ゆうひ", reading: "yūhi", meaning: "setting sun", example: { jp: "ゆうひがあかいです。", en: "The setting sun is red." }, drill: { jp: "ゆうひのいろがきれいです。", en: "The colour of the setting sun is beautiful." }, accept: ["evening sun", "sunset", "the setting sun", "late-afternoon sun"], hint: "ゆう (evening) + ひ (sun)." },
        { id: "ja-u66l1-mangetsu", type: "vocab", front: "まんげつ", reading: "mangetsu", meaning: "full moon", example: { jp: "こんばんはまんげつです。", en: "Tonight is a full moon." }, drill: { jp: "まんげつがきれいです。", en: "The full moon is beautiful." }, accept: ["the full moon", "a full moon", "moon at full"], hint: "man-GE-tsu — three beats, the ん held, つ is tsu. 満 (full) + 月 (moon). ⚠️ That 月 is つき, the moon, and げつ in げつようび — three readings, one character." },
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
        { id: "ja-u66l2-kiri", type: "vocab", front: "きり", reading: "kiri", meaning: "fog", example: { jp: "あさ、きりがでます。", en: "Fog appears in the morning." }, drill: { jp: "きりはつめたいです。", en: "The fog is cold." }, accept: ["mist", "the fog", "haze", "foggy weather"], hint: "KI-ri — two beats, tapped r. ⚠️ Fog and mist alike. It APPEARS, so Japanese says きりがでます, the fog comes out, where English says it rolls in." },
        { id: "ja-u66l2-arashi", type: "vocab", front: "あらし", reading: "arashi", meaning: "storm", example: { jp: "あらしがきます。", en: "A storm is coming." }, drill: { jp: "あらしでふねがとまります。", en: "The boats stop because of the storm." }, accept: ["tempest", "a storm", "the storm", "gale"], hint: "a-RA-shi — three beats, tapped r. ⚠️ A full storm with wind in it. Rain alone is あめ and かぜ is just wind — あらし is the two together." },
        { id: "ja-u66l2-soyokaze", type: "vocab", front: "そよかぜ", reading: "soyokaze", meaning: "breeze", example: { jp: "そよかぜがふきます。", en: "A breeze blows." }, drill: { jp: "そよかぜはすずしいです。", en: "The breeze is cool." }, accept: ["gentle breeze", "light wind", "a breeze", "soft wind"], hint: "そよ (rustling) + かぜ (wind) — a soft wind." },
        { id: "ja-u66l2-hizashi", type: "vocab", front: "ひざし", reading: "hizashi", meaning: "sunlight", example: { jp: "ひざしがつよいです。", en: "The sunlight is strong." }, drill: { jp: "ひざしはあたたかいです。", en: "The sunlight is warm." }, accept: ["sunshine", "rays of sun", "the sun's rays", "sunbeams"], hint: "hi-ZA-shi — three beats, a buzzing z. ひ, the sun, plus さし from さす, to shine in. ⚠️ The sun's RAYS, not the weather: strong sun is ひざしがつよいです." },
        { id: "ja-u66l2-hinata", type: "vocab", front: "ひなた", reading: "hinata", meaning: "sunny spot", example: { jp: "ねこがひなたでねます。", en: "The cat sleeps in the sunny spot." }, drill: { jp: "ひなたでほんをよみます。", en: "I read a book in the sunny spot." }, accept: ["in the sun", "sunny place", "a sunny spot", "the sunshine"], hint: "The warm side in the sun — opposite of ひかげ." },
        { id: "ja-u66l2-hikage", type: "vocab", front: "ひかげ", reading: "hikage", meaning: "shade", example: { jp: "ひかげはすずしいです。", en: "The shade is cool." }, drill: { jp: "ひかげでやすみます。", en: "I rest in the shade." }, accept: ["shadow", "the shade", "shady spot", "out of the sun"], hint: "ひ (sun) + かげ (shadow) — the cool spot out of the sun." },
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
        { id: "ja-u66l3-mine", type: "vocab", front: "みね", reading: "mine", meaning: "peak", example: { jp: "やまのみねがしろいです。", en: "The mountain peak is white." }, drill: { jp: "みねにゆきがあります。", en: "There is snow on the peak." }, accept: ["summit", "mountain peak", "the peak", "ridge"], hint: "The top of a やま (mountain)." },
        { id: "ja-u66l3-saka", type: "vocab", front: "さか", reading: "saka", meaning: "slope", example: { jp: "さかをあるきます。", en: "I walk up the slope." }, drill: { jp: "さかのうえにいえがあります。", en: "There is a house at the top of the slope." }, accept: ["hill", "incline", "a slope", "gradient"], hint: "SA-ka — two beats. ⚠️ A sloping road or piece of ground. Not the mountain やま and not the hill おか — さか is the SLOPE you climb." },
        { id: "ja-u66l3-taki", type: "vocab", front: "たき", reading: "taki", meaning: "waterfall", example: { jp: "たきのみずはつめたいです。", en: "The waterfall's water is cold." }, drill: { jp: "たきのおとがおおきいです。", en: "The sound of the waterfall is loud." }, accept: ["falls", "a waterfall", "the waterfall", "cascade"], hint: "TA-ki — two beats. ⚠️ A waterfall of any size. Two beats only — nothing to do with たかい, tall, despite the shared start." },
        { id: "ja-u66l3-hamabe", type: "vocab", front: "はまべ", reading: "hamabe", meaning: "beach", example: { jp: "はまべであそびます。", en: "I play at the beach." }, drill: { jp: "はまべをあるきます。", en: "I walk along the beach." }, accept: ["seashore", "seaside", "the beach", "shore"], hint: "ha-ma-BE — three beats. はま, the shore, plus べ, a vicinity: the shore area. ⚠️ The sandy strip itself — the water is うみ, はまべ is where you stand." },
        { id: "ja-u66l3-nohara", type: "vocab", front: "のはら", reading: "nohara", meaning: "meadow", example: { jp: "のはらにはながさきます。", en: "Flowers bloom in the meadow." }, drill: { jp: "のはらでこどもがあそびます。", en: "The children play in the meadow." }, accept: ["field", "grassy field", "a meadow", "open field"], hint: "no-HA-ra — three beats, tapped r. の, a field, plus はら, a plain: open grassy ground. ⚠️ Wild and uncultivated, unlike はたけ in lesson 4, which is planted." },
        { id: "ja-u66l3-gake", type: "vocab", front: "がけ", reading: "gake", meaning: "cliff", example: { jp: "がけはあぶないです。", en: "The cliff is dangerous." }, drill: { jp: "がけのしたにうみがあります。", en: "There is sea below the cliff." }, accept: ["precipice", "a cliff", "the cliff", "bluff"], hint: "GA-ke — two beats, hard g. ⚠️ A sheer drop. がけっぷち, the cliff edge, is used the way English uses on the brink." },
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
        { id: "ja-u66l4-miki", type: "vocab", front: "みき", reading: "miki", meaning: "trunk", example: { jp: "きのみきはふといです。", en: "The tree's trunk is thick." }, drill: { jp: "みきにさわります。", en: "I touch the trunk." }, accept: ["tree trunk", "the trunk", "a trunk", "stem"], hint: "The thick main part of a き (tree)." },
        { id: "ja-u66l4-tsubomi", type: "vocab", front: "つぼみ", reading: "tsubomi", meaning: "bud", example: { jp: "はなのつぼみはちいさいです。", en: "The flower buds are small." }, drill: { jp: "つぼみはみどりです。", en: "The bud is green." }, accept: ["flower bud", "buds", "a bud", "unopened flower"], hint: "A はな (flower) before it opens." },
        { id: "ja-u66l4-shibafu", type: "vocab", front: "しばふ", reading: "shibafu", meaning: "lawn", example: { jp: "こうえんのしばふであそびます。", en: "I play on the lawn in the park." }, drill: { jp: "しばふにすわります。", en: "I sit on the lawn." }, accept: ["turf", "grass lawn", "the lawn", "a lawn"], hint: "shi-ba-FU — three beats, ふ a soft fu. しば, lawn grass, plus ふ, a patch of ground. ⚠️ Mown lawn specifically — wild grass is くさ." },
        { id: "ja-u66l4-matsu", type: "vocab", front: "まつ", reading: "matsu", meaning: "pine tree", example: { jp: "にわにまつがあります。", en: "There is a pine tree in the garden." }, drill: { jp: "まつのきはおおきいです。", en: "The pine tree is big." }, accept: ["pine", "pines", "a pine tree", "pine wood"], hint: "MA-tsu — two beats, つ is tsu. ⚠️ The pine: evergreen, and a New Year decoration in Japan. Same sound as まつ, to wait — only context separates them." },
        { id: "ja-u66l4-hatake", type: "vocab", front: "はたけ", reading: "hatake", meaning: "field (a vegetable plot)", example: { jp: "はたけでやさいをつくります。", en: "I grow vegetables in the field." }, drill: { jp: "はたけはひろいです。", en: "The field is wide." }, accept: ["farm field", "vegetable field", "a plot", "vegetable plot"], hint: "A cultivated crop field — のはら is a wild grassy one." },
        { id: "ja-u66l4-soto", type: "vocab", front: "そと", reading: "soto", meaning: "outside", example: { jp: "そとであそびます。", en: "I play outside." }, drill: { jp: "そとはさむいです。", en: "It is cold outside." }, accept: ["outdoors", "outer", "the outside", "out of doors"], hint: "SO-to — two beats. ⚠️ Outside, the opposite of なか. It also means outside your own group: そとのひと is an outsider." },
      ],
    },
  ],
};
