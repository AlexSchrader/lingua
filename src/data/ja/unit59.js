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
        { id: "ja-u59l1-honya", type: "vocab", front: "ほんや", reading: "honya", meaning: "bookstore", example: { jp: "ほんやでほんをかいます。", en: "I buy a book at the bookstore." }, drill: { jp: "ほんやはえきのまえにあります。", en: "The bookshop is in front of the station." }, accept: ["bookshop", "book shop", "book store", "a bookshop"], hint: "HON-ya — two beats, the ん held. ほん, a book, plus や, the shop suffix. ⚠️ All six words in this lesson are NOUN + や, so learn や once and the whole high street opens up." },
        { id: "ja-u59l1-hanaya", type: "vocab", front: "はなや", reading: "hanaya", meaning: "flower shop", example: { jp: "はなやははなをうります。", en: "The flower shop sells flowers." }, drill: { jp: "はなやでかびんをかいます。", en: "I buy a vase at the flower shop." }, accept: ["florist", "flower store", "florist's", "flower stall"], hint: "ha-na-YA — three beats. はな, a flower, plus the や shop suffix from ほんや. ⚠️ Add さん and you get はなやさん, which names both the shop and the florist." },
        { id: "ja-u59l1-panya", type: "vocab", front: "パンや", reading: "panya", meaning: "bakery", example: { jp: "パンやのパンはおいしいです。", en: "The bakery's bread is delicious." }, drill: { jp: "パンやはうちのちかくです。", en: "The bakery is near my house." }, accept: ["bread shop", "baker", "baker's", "bread store"], hint: "PAN-ya — two beats, the ん held, and note the mixed script: パン is katakana, borrowed from Portuguese pão, while や is hiragana. ⚠️ Not from English bread at all." },
        { id: "ja-u59l1-yaoya", type: "vocab", front: "やおや", reading: "yaoya", meaning: "greengrocer", example: { jp: "やおやでやさいをかいます。", en: "I buy vegetables at the greengrocer." }, drill: { jp: "やおやのやさいはやすいです。", en: "The greengrocer's vegetables are cheap." }, accept: ["vegetable shop", "produce store", "grocer", "fruit and veg shop"], hint: "ya-o-YA — three beats, each vowel its own. Written 八百屋, the eight-hundred shop — the one stocking hundreds of different things. ⚠️ That や is the same shop suffix again." },
        { id: "ja-u59l1-kusuriya", type: "vocab", front: "くすりや", reading: "kusuriya", meaning: "drugstore", example: { jp: "くすりやでくすりをかいます。", en: "I buy medicine at the drugstore." }, drill: { jp: "くすりやはどこですか。", en: "Where is the pharmacy?" }, accept: ["pharmacy", "chemist", "chemist's", "medicine shop"], hint: "ku-su-ri-YA — four beats, tapped r. くすり, medicine, plus や. ⚠️ くすり alone is the medicine itself, which is why くすりやでくすりをかいます repeats the word." },
        { id: "ja-u59l1-sakanaya", type: "vocab", front: "さかなや", reading: "sakanaya", meaning: "fish shop", example: { jp: "さかなやのさかなはあたらしいです。", en: "The fish shop's fish is fresh." }, drill: { jp: "さかなやでさかなをかいます。", en: "I buy fish at the fish shop." }, accept: ["fishmonger", "fish store", "fishmonger's", "fish seller"], hint: "sa-ka-na-YA — four beats. さかな, a fish, plus や. ⚠️ The longest word in the lesson and the most regular one — if you can read さかな you can already read this." },
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
        { id: "ja-u59l2-apato", type: "vocab", front: "アパート", reading: "apāto", meaning: "apartment", example: { jp: "わたしのアパートはちいさいです。", en: "My apartment is small." }, drill: { jp: "アパートのまえにくるまがあります。", en: "There is a car in front of the flat." }, accept: ["flat", "apartment building", "an apartment", "apartment block"], hint: "a-PĀ-to — the ー holds the second beat: a-paa-to, three beats. Clipped from English apartment house. ⚠️ In Japan it means a SMALL low-rise block; a big modern one is マンション." },
        { id: "ja-u59l2-kojo", type: "vocab", front: "こうじょう", reading: "kōjō", meaning: "factory", example: { jp: "ちちはこうじょうではたらきます。", en: "My father works at a factory." }, drill: { jp: "こうじょうはおおきいです。", en: "The factory is big." }, accept: ["plant", "works", "a factory", "manufacturing plant"], hint: "KŌ-JŌ — two LONG beats, both held: koh-joh. 工 (craft) + 場 (place): where things are made. ⚠️ Four kana for two beats — that mismatch is the hard part." },
        { id: "ja-u59l2-kafe", type: "vocab", front: "カフェ", reading: "kafe", meaning: "cafe", example: { jp: "カフェでコーヒーをのみます。", en: "I drink coffee at the cafe." }, drill: { jp: "カフェでともだちとはなします。", en: "I chat with a friend at the cafe." }, accept: ["coffee shop", "café", "a cafe", "coffee house"], hint: "KA-fe — two beats, and フェ is a katakana pair built for loanwords. From French café. ⚠️ フェ never appears in a native word, so it flags a borrowing instantly." },
        { id: "ja-u59l2-kyokai", type: "vocab", front: "きょうかい", reading: "kyōkai", meaning: "church", example: { jp: "あのきょうかいはふるいです。", en: "That church is old." }, drill: { jp: "きょうかいのまえでまちます。", en: "I wait in front of the church." }, accept: ["chapel", "a church", "the church", "christian church"], hint: "KYŌ-kai — きょう is the yōon kyo held long and かい is a diphthong: two beats. 教 (teach) + 会 (gathering). ⚠️ That 教 is the same one inside きょうかしょ, a textbook." },
        { id: "ja-u59l2-jimu", type: "vocab", front: "ジム", reading: "jimu", meaning: "gym", example: { jp: "ジムでうんどうします。", en: "I exercise at the gym." }, drill: { jp: "ジムはえきのちかくにあります。", en: "The gym is near the station." }, accept: ["fitness center", "gymnasium", "a gym", "fitness centre"], hint: "JI-mu — two beats. Clipped from English gymnasium, exactly as English clipped it. ⚠️ The m becomes a full ム beat: Japanese cannot end a word on a bare m." },
        { id: "ja-u59l2-chushajo", type: "vocab", front: "ちゅうしゃじょう", reading: "chūshajō", meaning: "parking lot", example: { jp: "ちゅうしゃじょうにくるまがあります。", en: "There's a car in the parking lot." }, drill: { jp: "ちゅうしゃじょうはひろいです。", en: "The car park is spacious." }, accept: ["car park", "parking", "parking space", "parking area"], hint: "CHŪ-sha-JŌ — two long beats around しゃ: chuu-sha-joh. 駐車 (park a car) + 場 (place). ⚠️ The same 場 as こうじょう above: 場 marks a PLACE for doing something." },
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
        { id: "ja-u59l3-baiku", type: "vocab", front: "バイク", reading: "baiku", meaning: "motorcycle", example: { jp: "バイクでかいしゃへいきます。", en: "I go to work by motorcycle." }, drill: { jp: "バイクはあたらしいです。", en: "The motorbike is new." }, accept: ["motorbike", "a motorcycle", "scooter", "moped"], hint: "BAI-ku — two beats, バイ a diphthong. From English bike, but the meaning NARROWED. ⚠️ バイク is motorised; a pedal bicycle is じてんしゃ and never バイク." },
        { id: "ja-u59l3-seki", type: "vocab", front: "せき", reading: "seki", meaning: "seat (a place to sit)", example: { jp: "でんしゃにせきがあります。", en: "There are seats on the train." }, drill: { jp: "せきがありません。", en: "There are no seats." }, accept: ["seats", "a seat", "place to sit", "the seat"], hint: "SE-ki — two beats. ⚠️ Careful: せき also means a cough. Same sound, two separate words, and only the context tells them apart." },
        { id: "ja-u59l3-basutei", type: "vocab", front: "バスてい", reading: "basutei", meaning: "bus stop", example: { jp: "バスていはえきのまえです。", en: "The bus stop is in front of the station." }, drill: { jp: "バスていでバスをまちます。", en: "I wait for the bus at the bus stop." }, accept: ["bus stand", "the bus stop", "a bus stop", "bus shelter"], hint: "BA-su-tei — three beats; てい is a literal ei, said tei. バス is katakana from English bus and てい is 停, to halt. ⚠️ Another half-borrowed word, like はブラシ." },
        { id: "ja-u59l3-minato", type: "vocab", front: "みなと", reading: "minato", meaning: "harbor", example: { jp: "みなとにふねがあります。", en: "There are boats at the harbor." }, drill: { jp: "みなとはしずかです。", en: "The harbour is quiet." }, accept: ["port", "harbour", "the harbour", "docks"], hint: "mi-NA-to — three beats. ⚠️ Any place boats tie up, from a fishing wharf to a container port. What sits IN it takes に: みなとにふねがあります." },
        { id: "ja-u59l3-senro", type: "vocab", front: "せんろ", reading: "senro", meaning: "train track", example: { jp: "せんろをわたります。", en: "I cross the tracks." }, drill: { jp: "せんろはながいです。", en: "The railway track is long." }, accept: ["railway track", "railroad track", "the tracks", "rails"], hint: "SEN-ro — two beats, the ん held, tapped r. 線 (line) + 路 (road): the line-road. ⚠️ The same 線 sits in しんかんせん. What you cross takes を: せんろをわたります." },
        { id: "ja-u59l3-fumikiri", type: "vocab", front: "ふみきり", reading: "fumikiri", meaning: "railroad crossing", example: { jp: "ふみきりでとまります。", en: "I stop at the railroad crossing." }, drill: { jp: "ふみきりはえきのちかくです。", en: "The level crossing is near the station." }, accept: ["level crossing", "railway crossing", "grade crossing", "the crossing"], hint: "fu-mi-KI-ri — four beats, ふ a soft fu, tapped r. ふみ from ふむ, to step on, plus きり from きる, to cut: where the road cuts across the rails. ⚠️ It names the PLACE, not the barrier." },
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
        { id: "ja-u59l4-tori", type: "vocab", front: "とおり", reading: "tōri", meaning: "street", example: { jp: "このとおりはひろいです。", en: "This street is wide." }, drill: { jp: "とおりにみせがたくさんあります。", en: "There are lots of shops on the street." }, accept: ["avenue", "road", "a street", "thoroughfare"], hint: "TŌ-ri — the おお is ONE long o, so two beats, not three. From とおる, to pass along, which you met as とおります. ⚠️ A named through-street; a small lane is みち." },
        { id: "ja-u59l4-basho", type: "vocab", front: "ばしょ", reading: "basho", meaning: "place (a location)", example: { jp: "このばしょはしずかです。", en: "This place is quiet." }, drill: { jp: "ばしょのなまえをききます。", en: "I ask the name of the place." }, accept: ["location", "spot", "a place", "venue"], hint: "BA-sho — two beats, しょ is the yōon sho. 場 (place) + 所 (location) — the same 場 as こうじょう and ちゅうしゃじょう. ⚠️ A specific SPOT, where ところ stays vaguer." },
        { id: "ja-u59l4-mura", type: "vocab", front: "むら", reading: "mura", meaning: "village", example: { jp: "あのむらはちいさいです。", en: "That village is small." }, drill: { jp: "むらにひとがすくないです。", en: "There are few people in the village." }, accept: ["hamlet", "a village", "the village", "small village"], hint: "MU-ra — two beats, tapped r. ⚠️ A real administrative unit in Japan, one step smaller than a まち. Its opposite in this lesson is とかい, the big city." },
        { id: "ja-u59l4-tokai", type: "vocab", front: "とかい", reading: "tokai", meaning: "city", example: { jp: "とかいはにぎやかです。", en: "The city is lively." }, drill: { jp: "とかいのみせはたかいです。", en: "Shops in the city are expensive." }, accept: ["big city", "urban area", "the city", "metropolis"], hint: "to-KAI — two beats, かい a diphthong. 都 (capital) + 会 (gathering). ⚠️ It means the city as a WAY OF LIFE, not one named city. Its opposite いなか is right below." },
        { id: "ja-u59l4-inaka", type: "vocab", front: "いなか", reading: "inaka", meaning: "countryside", example: { jp: "いなかはしずかです。", en: "The countryside is quiet." }, drill: { jp: "いなかのいえはおおきいです。", en: "Houses in the countryside are big." }, accept: ["rural area", "country", "the country", "one's hometown"], hint: "i-NA-ka — three beats. ⚠️ Two senses: the countryside in general, and specifically YOUR home region. The opposite of とかい above." },
        { id: "ja-u59l4-hiroba", type: "vocab", front: "ひろば", reading: "hiroba", meaning: "square (an open plaza)", example: { jp: "ひろばでこどもがあそびます。", en: "Children play in the square." }, drill: { jp: "ひろばにひとがおおいです。", en: "There are a lot of people in the square." }, accept: ["plaza", "open space", "a square", "public square"], hint: "hi-ro-BA — three beats, tapped r. ひろ from ひろい, wide, plus ば, that 場 place piece again. ⚠️ The open paved space outside a station — nothing to do with being square-shaped." },
      ],
    },
  ],
};
