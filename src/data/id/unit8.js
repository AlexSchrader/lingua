// ID Unit 8 — Warna dan cuaca ("Colours and weather") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u8–u14), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file; read them there, not here. Slot retitled from the scaffold's
// English "Colors and weather" per convention 12.
//
// WHY THESE FOUR LESSONS. Colour and weather are one unit because in Indonesian
// they are one grammatical move: an adjective sits directly after its noun with
// NO copula (`rumah merah`, `cuaca panas`), and there is no agreement to learn
// because Indonesian has neither gender nor number. So the unit's real job is
// that single pattern, drilled across two vocabulary fields.
//   l1  the six basic colours
//   l2  the colours the six do not cover, plus terang/gelap
//   l3  weather as it actually behaves here — panas, hujan, angin
//   l4  the sky, and Indonesia's TWO seasons (not four)
//
// SCOPE NOTE — what this unit could NOT use, and it shaped every example.
// `ini`, `itu`, `ada`, `karena`, `bukan`, `yang`, `atau` are all reserved for
// u12 (Grammar 1) by block 1's own list, and `besar`/`kecil`/`baru`/`cantik`
// for u10. That removes the obvious sentence for a colour card ("this is red")
// and the obvious one for weather ("wet BECAUSE it rained"). Every example here
// is therefore built from possessor-postposed noun phrases (`rumah saya merah`)
// and `dan`, which is what u1–u7 actually supply. Not a limitation worked
// around — it is the reason the pattern gets taught cleanly instead.
//
// TWO SEASONS, AND THE HONEST WORD FOR THE SECOND. Indonesia has `musim hujan`
// and `musim kemarau`. `kemarau` is a low-frequency word for a beginner and is
// not carded here; `musim kering` is transparent and understood, and `kemarau`
// is named in `musim`'s hint so the learner is not left with a wrong belief.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT8 = {
  id: "id-u8",
  lang: "id",
  title: "Warna dan cuaca",
  order: 8,
  stage: "a1",
  lessons: [
    {
      id: "id-u8l1",
      unit: 8,
      lesson: 1,
      title: "Enam warna dasar",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say what colour a thing is by putting the colour straight after the noun, with no verb in between.",
      items: [
        { id: "id-u8l1-merah", type: "vocab", front: "merah", reading: "merah", meaning: "red", example: { jp: "Pintu rumah saya merah.", en: "The door of my house is red." }, accept: ["the colour red", "the color red"], drill: { jp: "Pintu rumah Budi merah", en: "Budi's house door is red" }, hint: "MEH-rah, with the final h breathed out lightly. Indonesian puts NOTHING between a thing and its colour: rumah merah is both \"the house is red\" and \"a red house\" — the sentence decides which. Colour words never change shape." },
        { id: "id-u8l1-putih", type: "vocab", front: "putih", reading: "putih", meaning: "white", example: { jp: "Nasi putih dan ayam goreng.", en: "White rice and fried chicken." }, accept: ["the colour white", "the color white"], drill: { jp: "Saya mau nasi putih sekarang", en: "I want white rice now" }, hint: "POO-tih. Nasi putih — plain white rice — is the default at any warung, and asking for it by name is how you avoid getting the yellow festive kind." },
        { id: "id-u8l1-hitam", type: "vocab", front: "hitam", reading: "hitam", meaning: "black", example: { jp: "Budi suka kopi hitam.", en: "Budi likes black coffee." }, accept: ["the colour black", "the color black"], drill: { jp: "Siti suka kopi hitam juga", en: "Siti likes black coffee too" }, hint: "HEE-tahm, both vowels short and clipped. Kopi hitam is coffee with nothing in it — order it that way or you will get sugar without asking." },
        { id: "id-u8l1-biru", type: "vocab", front: "biru", reading: "biru", meaning: "blue", example: { jp: "Mobil kakak saya biru.", en: "My older sibling's car is blue." }, accept: ["the colour blue", "the color blue"], drill: { jp: "Sepeda kakak saya biru", en: "My older sibling's bicycle is blue" }, hint: "BEE-roo. One of the very few colour words with no second job — biru is only ever the colour, never a mood or a food." },
        { id: "id-u8l1-kuning", type: "vocab", front: "kuning", reading: "kuning", meaning: "yellow", example: { jp: "Nasi kuning enak sekali.", en: "Yellow rice is really delicious." }, accept: ["the colour yellow", "the color yellow"], drill: { jp: "Nasi kuning enak dengan ayam", en: "Yellow rice is delicious with chicken" }, hint: "KOO-ning, ending in the single hum. Nasi kuning is rice cooked yellow with turmeric — a celebration dish, so nobody eats it on an ordinary Tuesday." },
        { id: "id-u8l1-hijau", type: "vocab", front: "hijau", reading: "hijau", meaning: "green", example: { jp: "Saya suka sayur hijau.", en: "I like green vegetables." }, accept: ["the colour green", "the color green"], drill: { jp: "Budi tidak suka sayur hijau", en: "Budi does not like green vegetables" }, hint: "HEE-jow — two syllables, not three, and the second rhymes with \"cow\". The j is the J of judge, as it always is." },
      ],
    },
    {
      id: "id-u8l2",
      unit: 8,
      lesson: 2,
      title: "Warna lain, terang dan gelap",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Ask what colour something is with \"warna apa\" and answer with a colour outside the basic six.",
      items: [
        { id: "id-u8l2-warna", type: "vocab", front: "warna", reading: "warna", meaning: "color", example: { jp: "Warna rumah Budi hijau dan putih.", en: "The colour of Budi's house is green and white." }, accept: ["colour", "shade", "hue"], drill: { jp: "Warna pintu kamar saya kuning", en: "The colour of my room door is yellow" }, hint: "WAR-na. To ask, put the question word AFTER the noun: warna apa? — \"what colour?\". Indonesian never fronts a question word the way English does." },
        { id: "id-u8l2-cokelat", type: "vocab", front: "cokelat", reading: "cokelat", meaning: "brown", example: { jp: "Pintu dapur rumah saya cokelat.", en: "The door of my kitchen is brown." }, accept: ["the colour brown", "the color brown", "chocolate"], drill: { jp: "Pintu dapur Budi cokelat juga", en: "Budi's kitchen door is brown too" }, hint: "cho-kuh-LAHT — c is CH, and the middle e is the swallowed one. The same word is also chocolate, so cokelat panas is a hot chocolate." },
        { id: "id-u8l2-abuabu", type: "vocab", front: "abu-abu", reading: "abuabu", meaning: "grey", example: { jp: "Kucing saya abu-abu dan putih.", en: "My cat is grey and white." }, accept: ["gray", "the colour grey", "the color gray"], drill: { jp: "Kucing Siti abu-abu dan putih", en: "Siti's cat is grey and white" }, hint: "AH-boo AH-boo. Abu on its own is ash, and doubling it MAKES the colour — this is the doubling that builds a new word, not the doubling that makes a plural. Say both halves fully; nobody clips the second." },
        { id: "id-u8l2-ungu", type: "vocab", front: "ungu", reading: "ungu", meaning: "purple", example: { jp: "Bibi saya suka warna ungu.", en: "My aunt likes the colour purple." }, accept: ["violet", "the colour purple", "the color purple"], drill: { jp: "Bibi Budi suka warna ungu", en: "Budi's aunt likes the colour purple" }, hint: "OONG-oo, with the hum sitting between the two vowels. Both u's are the OO of \"food\" — never the \"uh\" of English \"up\"." },
        { id: "id-u8l2-terang", type: "vocab", front: "terang", reading: "terang", meaning: "bright", example: { jp: "Warna kuning sangat terang.", en: "The colour yellow is very bright." }, accept: ["well lit", "brightly lit", "clear"], drill: { jp: "Dapur rumah saya sangat terang", en: "My kitchen is very bright" }, hint: "tuh-RAHNG. It covers a bright light, a bright colour and a clear sky alike. Not the same as cerah: terang is light you can see BY, cerah is sky with no cloud in it." },
        { id: "id-u8l2-gelap", type: "vocab", front: "gelap", reading: "gelap", meaning: "dark", example: { jp: "Malam sangat gelap dan saya tidak bisa pergi.", en: "The night is very dark and I cannot go." }, accept: ["dim", "unlit", "in the dark"], drill: { jp: "Kamar Budi gelap dan dingin", en: "Budi's room is dark and cold" }, hint: "guh-LAHP: swallowed first e, and a final p you barely release. The opposite of terang, and it does a dark colour as readily as a dark room." },
      ],
    },
    {
      id: "id-u8l3",
      unit: 8,
      lesson: 3,
      title: "Cuaca — panas, hujan, angin",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Report what the weather is doing right now, and ask someone else with \"bagaimana cuaca\".",
      items: [
        { id: "id-u8l3-cuaca", type: "vocab", front: "cuaca", reading: "cuaca", meaning: "weather", example: { jp: "Cuaca di Indonesia panas sekali.", en: "The weather in Indonesia is very hot." }, accept: ["the weather", "weather conditions"], drill: { jp: "Cuaca di Bali panas sekali", en: "The weather in Bali is very hot" }, hint: "choo-AH-cha — TWO c's and both are CH. Ask with bagaimana cuaca? Indonesia has no four seasons, so the question is really \"is it raining?\"." },
        { id: "id-u8l3-panas", type: "vocab", front: "panas", reading: "panas", meaning: "hot", example: { jp: "Hari sangat panas dan saya haus.", en: "The day is very hot and I am thirsty." }, accept: ["warm", "very warm", "heat"], drill: { jp: "Budi minum teh panas sekarang", en: "Budi is drinking hot tea now" }, hint: "PAH-nahs. It does double duty for hot weather and hot food or drink. Air panas is hot water — and also a hot spring." },
        { id: "id-u8l3-dingin", type: "vocab", front: "dingin", reading: "dingin", meaning: "cold", example: { jp: "Malam di kota dingin sekali.", en: "The night in the city is very cold." }, accept: ["cool", "chilly", "chilled"], drill: { jp: "Saya mau es teh dingin", en: "I want cold iced tea" }, hint: "DEE-ngin — hum in the middle, both i's short. Indonesia is never cold the way Europe is; dingin is an air-conditioned room or a mountain morning." },
        { id: "id-u8l3-hujan", type: "vocab", front: "hujan", reading: "hujan", meaning: "rain", example: { jp: "Hujan dan saya tidak bisa pergi ke pasar.", en: "It is raining and I cannot go to the market." }, accept: ["to rain", "rainfall", "it is raining"], drill: { jp: "Hujan dan Budi tidak pergi", en: "It is raining and Budi is not going" }, hint: "HOO-jahn. One word is both the noun and the verb, and it is a whole sentence on its own: hujan! = \"it's raining\". Indonesian needs no \"it\" to rain." },
        { id: "id-u8l3-angin", type: "vocab", front: "angin", reading: "angin", meaning: "wind", example: { jp: "Angin di pasar sangat dingin sekarang.", en: "The wind at the market is very cold now." }, accept: ["breeze", "the wind", "a breeze"], drill: { jp: "Angin di kota dingin sekali", en: "The wind in the city is very cold" }, hint: "AH-ngin, hum in the middle. Masuk angin — literally \"wind got in\" — is how Indonesians name that vague feeling of coming down with something, and you will hear it constantly." },
        { id: "id-u8l3-cerah", type: "vocab", front: "cerah", reading: "cerah", meaning: "clear and sunny", example: { jp: "Cuaca cerah dan tidak hujan.", en: "The weather is clear and it is not raining." }, accept: ["sunny", "bright and clear", "fine"], drill: { jp: "Hari cerah dan angin sedikit", en: "The day is clear and there is a little wind" }, hint: "chuh-RAH. Said of the sky, the weather, and a face that lights up. Keep it apart from terang: cerah is the absence of cloud, terang is the presence of light." },
      ],
    },
    {
      id: "id-u8l4",
      unit: 8,
      lesson: 4,
      title: "Langit dan dua musim",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Describe the sky overhead and say which of Indonesia's two seasons you are in.",
      items: [
        { id: "id-u8l4-langit", type: "vocab", front: "langit", reading: "langit", meaning: "sky", example: { jp: "Langit biru dan sangat cerah.", en: "The sky is blue and very clear." }, accept: ["the sky", "the heavens"], drill: { jp: "Langit di Bali biru sekali", en: "The sky in Bali is very blue" }, hint: "LAH-ngit — hum in the middle, light stop on the final t. Indonesian marks no number anywhere, so langit is never pluralised the way English \"skies\" is." },
        { id: "id-u8l4-awan", type: "vocab", front: "awan", reading: "awan", meaning: "cloud", example: { jp: "Awan hitam di langit dan tidak cerah.", en: "Black clouds in the sky and it is not clear." }, accept: ["clouds", "a cloud"], drill: { jp: "Awan putih di langit biru", en: "White clouds in a blue sky" }, hint: "AH-wahn. Awan hitam — black cloud — is the standard local warning that the afternoon downpour is about ten minutes away." },
        { id: "id-u8l4-musim", type: "vocab", front: "musim", reading: "musim", meaning: "season", example: { jp: "Indonesia punya dua musim, hujan dan kering.", en: "Indonesia has two seasons, rainy and dry." }, accept: ["the season", "time of year"], drill: { jp: "Musim hujan di Bali sangat panas", en: "The rainy season in Bali is very hot" }, hint: "MOO-sim. TWO seasons here, not four: musim hujan (the rains) and musim kemarau (the dry one). Kemarau is the proper word for the second and you will meet it on the news — musim kering is the plainer way to say it." },
        { id: "id-u8l4-basah", type: "vocab", front: "basah", reading: "basah", meaning: "wet", example: { jp: "Jalan di kota basah dan kucing saya basah juga.", en: "The street in the city is wet and my cat is wet too." }, accept: ["soaked", "damp", "wet through"], drill: { jp: "Jalan di pasar basah sekali", en: "The street at the market is very wet" }, hint: "BAH-sah. Breathe that final h — drop it and you have basa, a different word entirely. Get caught in the rain and you are basah." },
        { id: "id-u8l4-kering", type: "vocab", front: "kering", reading: "kering", meaning: "dry", example: { jp: "Musim kering sangat panas dan jalan kering.", en: "The dry season is very hot and the streets are dry." }, accept: ["dried", "not wet", "dried out"], drill: { jp: "Jalan di kota kering sekarang", en: "The street in the city is dry now" }, hint: "kuh-RING — swallowed e, hum at the end. It covers weather, laundry and cooking alike: ayam goreng kering is chicken fried until it is crisp." },
        { id: "id-u8l4-payung", type: "vocab", front: "payung", reading: "payung", meaning: "umbrella", example: { jp: "Musim hujan dan saya punya payung.", en: "It is the rainy season and I have an umbrella." }, accept: ["a parasol", "parasol", "an umbrella"], drill: { jp: "Budi punya payung hitam sekarang", en: "Budi has a black umbrella now" }, hint: "PAH-yoong — y is a consonant here, hum at the end. In the dry season the same object is a sunshade, which is why one word covers both." },
      ],
    },
  ],
};
