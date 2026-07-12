// Unit 54 — しぜん・かがく ("Nature & science") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4-level nature, environment & science nouns (a few adjectives via examples).
// Goes deeper than A1 weather/geography basics (やま・かわ・あめ・てんき are already
// taught and are NOT repeated here). Every example uses only vocab already introduced
// + basic grammar (は/を/で/に/の + です/ます), so it slots on top of a finished A1/A2.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT54 = {
  id: "ja-u54",
  lang: "ja",
  title: "しぜん・かがく",
  order: 54,
  stage: "a2",
  lessons: [
    // Lesson 1: nature & landscape
    {
      id: "ja-u54l1",
      unit: 54,
      lesson: 1,
      title: "Nature & landscape",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name natural places: しぜん かざん さばく たいりく はやし たに.",
      items: [
        { id: "ja-u54l1-shizen", type: "vocab", front: "しぜん", reading: "shizen", meaning: "nature", example: { jp: "しぜんはきれいです。", en: "Nature is beautiful." }, accept: ["the outdoors"] },
        { id: "ja-u54l1-kazan", type: "vocab", front: "かざん", reading: "kazan", meaning: "volcano", example: { jp: "かざんはたかいです。", en: "The volcano is tall." }, accept: ["the volcano"] },
        { id: "ja-u54l1-tairiku", type: "vocab", front: "たいりく", reading: "tairiku", meaning: "continent", example: { jp: "たいりくはひろいです。", en: "The continent is vast." }, accept: ["the continent"] },
        { id: "ja-u54l1-sabaku", type: "vocab", front: "さばく", reading: "sabaku", meaning: "desert", example: { jp: "さばくはあついです。", en: "The desert is hot." }, accept: ["the desert"] },
        { id: "ja-u54l1-hayashi", type: "vocab", front: "はやし", reading: "hayashi", meaning: "woods", example: { jp: "はやしはしずかです。", en: "The woods are quiet." }, accept: ["grove", "small forest"] },
        { id: "ja-u54l1-tani", type: "vocab", front: "たに", reading: "tani", meaning: "valley", example: { jp: "たにをみます。", en: "I look at the valley." }, accept: ["the valley"] },
      ],
    },
    // Lesson 2: earth & sky
    {
      id: "ja-u54l2",
      unit: 54,
      lesson: 2,
      title: "Earth & sky",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the earth and sky: ちきゅう くうき おんど じしん せかい うちゅう.",
      items: [
        { id: "ja-u54l2-chikyu", type: "vocab", front: "ちきゅう", reading: "chikyū", meaning: "earth", example: { jp: "ちきゅうはおおきいです。", en: "The earth is big." }, accept: ["the earth", "the planet"] },
        { id: "ja-u54l2-kuki", type: "vocab", front: "くうき", reading: "kūki", meaning: "air", example: { jp: "やまのくうきはきれいです。", en: "The mountain air is clean." }, accept: ["the air"] },
        { id: "ja-u54l2-ondo", type: "vocab", front: "おんど", reading: "ondo", meaning: "temperature", example: { jp: "きょうはおんどがたかいです。", en: "The temperature is high today." }, accept: ["the temperature"] },
        { id: "ja-u54l2-jishin", type: "vocab", front: "じしん", reading: "jishin", meaning: "earthquake", example: { jp: "じしんはこわいです。", en: "Earthquakes are scary." }, accept: ["an earthquake"] },
        { id: "ja-u54l2-sekai", type: "vocab", front: "せかい", reading: "sekai", meaning: "world", example: { jp: "せかいはひろいです。", en: "The world is vast." }, accept: ["the world"] },
        { id: "ja-u54l2-uchu", type: "vocab", front: "うちゅう", reading: "uchū", meaning: "space", example: { jp: "うちゅうはくらいです。", en: "Space is dark." }, accept: ["outer space", "the universe"] },
      ],
    },
    // Lesson 3: ground & materials
    {
      id: "ja-u54l3",
      unit: 54,
      lesson: 3,
      title: "Ground & materials",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name ground and materials: かせき すな つち こおり ガラス てつ.",
      items: [
        { id: "ja-u54l3-kaseki", type: "vocab", front: "かせき", reading: "kaseki", meaning: "fossil", example: { jp: "はくぶつかんでかせきをみます。", en: "I look at fossils at the museum." }, accept: ["the fossil"] },
        { id: "ja-u54l3-suna", type: "vocab", front: "すな", reading: "suna", meaning: "sand", example: { jp: "こどもがすなであそびます。", en: "The child plays in the sand." }, accept: ["the sand"] },
        { id: "ja-u54l3-tsuchi", type: "vocab", front: "つち", reading: "tsuchi", meaning: "soil", example: { jp: "つちはくろいです。", en: "The soil is black." }, accept: ["earth", "dirt", "the ground"] },
        { id: "ja-u54l3-kori", type: "vocab", front: "こおり", reading: "kōri", meaning: "ice", example: { jp: "こおりはつめたいです。", en: "Ice is cold." }, accept: ["the ice"] },
        { id: "ja-u54l3-garasu", type: "vocab", front: "ガラス", reading: "garasu", meaning: "glass", example: { jp: "ガラスのコップです。", en: "It's a glass cup." }, accept: ["the glass"] },
        { id: "ja-u54l3-tetsu", type: "vocab", front: "てつ", reading: "tetsu", meaning: "iron", example: { jp: "てつはおもいです。", en: "Iron is heavy." }, accept: ["steel", "the iron"] },
      ],
    },
    // Lesson 4: environment & science
    {
      id: "ja-u54l4",
      unit: 54,
      lesson: 4,
      title: "Environment & science",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about environment and science: じっけん ちしき けんきゅう しげん かがく エネルギー.",
      items: [
        { id: "ja-u54l4-jikken", type: "vocab", front: "じっけん", reading: "jikken", meaning: "experiment", example: { jp: "かがくのじっけんをします。", en: "I do a science experiment." }, accept: ["the experiment"] },
        { id: "ja-u54l4-chishiki", type: "vocab", front: "ちしき", reading: "chishiki", meaning: "knowledge", example: { jp: "かれはちしきがおおいです。", en: "He has a lot of knowledge." }, accept: ["information"] },
        { id: "ja-u54l4-kenkyu", type: "vocab", front: "けんきゅう", reading: "kenkyū", meaning: "research", example: { jp: "だいがくでけんきゅうをします。", en: "I do research at the university." }, accept: ["study"] },
        { id: "ja-u54l4-shigen", type: "vocab", front: "しげん", reading: "shigen", meaning: "resources", example: { jp: "しげんをたいせつにします。", en: "We treasure our resources." }, accept: ["natural resources"] },
        { id: "ja-u54l4-kagaku", type: "vocab", front: "かがく", reading: "kagaku", meaning: "science", example: { jp: "かがくをべんきょうします。", en: "I study science." }, accept: ["the sciences"] },
        { id: "ja-u54l4-enerugi", type: "vocab", front: "エネルギー", reading: "enerugī", meaning: "energy", example: { jp: "エネルギーをつかいます。", en: "I use energy." }, accept: ["the energy"] },
      ],
    },
  ],
};
