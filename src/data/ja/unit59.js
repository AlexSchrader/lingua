// Unit 59 — まち・こうつう ("Town & Transport") — A1 thematic
// N5 town, shops, buildings and getting-around vocabulary that hasn't been taught
// yet (avoids えき/こうえん/ちかてつ/ひこうき/じてんしゃ/みち/こうさてん/しんごう/かど/はし —
// all already introduced in earlier units). Shops are taught as the ～や pattern
// (ほんや = book shop); examples reuse only known nouns, verbs and particles. No new
// grammar. lang/unit/lesson set in index.js.
export const UNIT59 = {
  id: "ja-u59",
  lang: "ja",
  title: "まち・こうつう",
  order: 59,
  stage: "a1",
  lessons: [
    // Lesson 1: shops in town (the ～や pattern)
    {
      id: "ja-u59l1",
      unit: 59,
      lesson: 1,
      title: "Shops in town",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the shops on your street: ほんや はなや パンや やおや くすりや さかなや; say where you buy things.",
      items: [
        { id: "ja-u59l1-honya", type: "vocab", front: "ほんや", reading: "honya", meaning: "bookstore", example: { jp: "ほんやでほんをかいます。", en: "I buy a book at the bookstore." }, accept: ["bookshop", "book shop"] },
        { id: "ja-u59l1-hanaya", type: "vocab", front: "はなや", reading: "hanaya", meaning: "flower shop", example: { jp: "はなやははなをうります。", en: "The flower shop sells flowers." }, accept: ["florist", "flower store"] },
        { id: "ja-u59l1-panya", type: "vocab", front: "パンや", reading: "panya", meaning: "bakery", example: { jp: "パンやのパンはおいしいです。", en: "The bakery's bread is delicious." }, accept: ["bread shop"] },
        { id: "ja-u59l1-yaoya", type: "vocab", front: "やおや", reading: "yaoya", meaning: "greengrocer", example: { jp: "やおやでやさいをかいます。", en: "I buy vegetables at the greengrocer." }, accept: ["vegetable shop", "produce store"] },
        { id: "ja-u59l1-kusuriya", type: "vocab", front: "くすりや", reading: "kusuriya", meaning: "drugstore", example: { jp: "くすりやでくすりをかいます。", en: "I buy medicine at the drugstore." }, accept: ["pharmacy", "chemist"] },
        { id: "ja-u59l1-sakanaya", type: "vocab", front: "さかなや", reading: "sakanaya", meaning: "fish shop", example: { jp: "さかなやのさかなはあたらしいです。", en: "The fish shop's fish is fresh." }, accept: ["fishmonger", "fish store"] },
      ],
    },
    // Lesson 2: places & buildings
    {
      id: "ja-u59l2",
      unit: 59,
      lesson: 2,
      title: "Places & buildings",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point out buildings around town: アパート こうじょう カフェ きょうかい ジム ちゅうしゃじょう.",
      items: [
        { id: "ja-u59l2-apato", type: "vocab", front: "アパート", reading: "apāto", meaning: "apartment", example: { jp: "わたしのアパートはちいさいです。", en: "My apartment is small." }, accept: ["flat", "apartment building"] },
        { id: "ja-u59l2-kojo", type: "vocab", front: "こうじょう", reading: "kōjō", meaning: "factory", example: { jp: "ちちはこうじょうではたらきます。", en: "My father works at a factory." }, accept: ["plant"] },
        { id: "ja-u59l2-kafe", type: "vocab", front: "カフェ", reading: "kafe", meaning: "cafe", example: { jp: "カフェでコーヒーをのみます。", en: "I drink coffee at the cafe." }, accept: ["coffee shop", "café"] },
        { id: "ja-u59l2-kyokai", type: "vocab", front: "きょうかい", reading: "kyōkai", meaning: "church", example: { jp: "あのきょうかいはふるいです。", en: "That church is old." }, accept: ["chapel"] },
        { id: "ja-u59l2-jimu", type: "vocab", front: "ジム", reading: "jimu", meaning: "gym", example: { jp: "ジムでうんどうします。", en: "I exercise at the gym." }, accept: ["fitness center", "gymnasium"] },
        { id: "ja-u59l2-chushajo", type: "vocab", front: "ちゅうしゃじょう", reading: "chūshajō", meaning: "parking lot", example: { jp: "ちゅうしゃじょうにくるまがあります。", en: "There's a car in the parking lot." }, accept: ["car park", "parking"] },
      ],
    },
    // Lesson 3: transport & rail
    {
      id: "ja-u59l3",
      unit: 59,
      lesson: 3,
      title: "Transport & rail",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about getting around: バイク せき バスてい みなと せんろ ふみきり.",
      items: [
        { id: "ja-u59l3-baiku", type: "vocab", front: "バイク", reading: "baiku", meaning: "motorcycle", example: { jp: "バイクでかいしゃへいきます。", en: "I go to work by motorcycle." }, accept: ["motorbike", "bike"] },
        { id: "ja-u59l3-seki", type: "vocab", front: "せき", reading: "seki", meaning: "seat", example: { jp: "でんしゃにせきがあります。", en: "There are seats on the train." }, accept: ["seats"] },
        { id: "ja-u59l3-basutei", type: "vocab", front: "バスてい", reading: "basutei", meaning: "bus stop", example: { jp: "バスていはえきのまえです。", en: "The bus stop is in front of the station." }, accept: ["bus stand"] },
        { id: "ja-u59l3-minato", type: "vocab", front: "みなと", reading: "minato", meaning: "harbor", example: { jp: "みなとにふねがあります。", en: "There are boats at the harbor." }, accept: ["port", "harbour"] },
        { id: "ja-u59l3-senro", type: "vocab", front: "せんろ", reading: "senro", meaning: "train track", example: { jp: "せんろをわたります。", en: "I cross the tracks." }, accept: ["railway track", "railroad track"] },
        { id: "ja-u59l3-fumikiri", type: "vocab", front: "ふみきり", reading: "fumikiri", meaning: "railroad crossing", example: { jp: "ふみきりでとまります。", en: "I stop at the railroad crossing." }, accept: ["level crossing", "railway crossing"] },
      ],
    },
    // Lesson 4: around town
    {
      id: "ja-u59l4",
      unit: 59,
      lesson: 4,
      title: "Around town",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe where you are: とおり ばしょ むら とかい いなか ひろば.",
      items: [
        { id: "ja-u59l4-tori", type: "vocab", front: "とおり", reading: "tōri", meaning: "street", example: { jp: "このとおりはひろいです。", en: "This street is wide." }, accept: ["avenue", "road"] },
        { id: "ja-u59l4-basho", type: "vocab", front: "ばしょ", reading: "basho", meaning: "place", example: { jp: "このばしょはしずかです。", en: "This place is quiet." }, accept: ["location", "spot"] },
        { id: "ja-u59l4-mura", type: "vocab", front: "むら", reading: "mura", meaning: "village", example: { jp: "あのむらはちいさいです。", en: "That village is small." }, accept: ["hamlet"] },
        { id: "ja-u59l4-tokai", type: "vocab", front: "とかい", reading: "tokai", meaning: "city", example: { jp: "とかいはにぎやかです。", en: "The city is lively." }, accept: ["big city", "urban area"] },
        { id: "ja-u59l4-inaka", type: "vocab", front: "いなか", reading: "inaka", meaning: "countryside", example: { jp: "いなかはしずかです。", en: "The countryside is quiet." }, accept: ["rural area", "country"] },
        { id: "ja-u59l4-hiroba", type: "vocab", front: "ひろば", reading: "hiroba", meaning: "square", example: { jp: "ひろばでこどもがあそびます。", en: "Children play in the square." }, accept: ["plaza", "open space"] },
      ],
    },
  ],
};
