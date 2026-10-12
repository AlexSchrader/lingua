// Unit 60 — ひと・からだ・N5 ("People, Body & Everyday") — A1 thematic
// N5 body-part nouns (みみ ear, くち mouth, あし leg…) plus common everyday
// personal items (スカート skirt, ゆびわ ring, サンダル sandals…). All fronts are new —
// none collide with earlier units. Examples reuse only vocab and particles the
// learner already knows (いたい, あります, かいます, あらいます, etc.); no new
// grammar. lang/unit/lesson wiring lives in index.js.
export const UNIT60 = {
  id: "ja-u60",
  lang: "ja",
  title: "ひと・からだ・N5",
  order: 60,
  stage: "a1",
  lessons: [
    // Lesson 1: body (1) — head-to-torso parts
    {
      id: "ja-u60l1",
      unit: 60,
      lesson: 1,
      title: "Body 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name upper-body parts: みみ くち あし うで くび むね; say which part hurts.",
      items: [
        { id: "ja-u60l1-mimi", type: "vocab", front: "みみ", reading: "mimi", meaning: "ear", example: { jp: "ねこのみみはちいさいです。", en: "A cat's ears are small." }, drill: { jp: "みみでおとをききます。", en: "I hear sounds with my ears." }, accept: ["ears", "an ear", "the ears"], hint: "MI-mi — two identical beats. ⚠️ Japanese names a pair of body parts with one word: みみ is ear OR ears, and nothing in the word marks the plural." },
        { id: "ja-u60l1-kuchi", type: "vocab", front: "くち", reading: "kuchi", meaning: "mouth", example: { jp: "くちをあけます。", en: "I open my mouth." }, drill: { jp: "くちがおおきいです。", en: "The mouth is big." }, accept: ["mouths", "a mouth", "the mouth"], hint: "KU-chi — two beats, ち is chi. ⚠️ The same くち turns up in いりぐち, an entrance, and でぐち, an exit — a doorway is literally a mouth." },
        { id: "ja-u60l1-ashi", type: "vocab", front: "あし", reading: "ashi", meaning: "leg", example: { jp: "あしをあらいます。", en: "I wash my feet." }, drill: { jp: "あしがながいです。", en: "The legs are long." }, accept: ["foot", "feet", "legs", "the leg"], hint: "A-shi — two beats. ⚠️ ONE word for leg AND foot: Japanese does not split them, so あしがいたいです could be either. Context, or pointing, decides." },
        { id: "ja-u60l1-ude", type: "vocab", front: "うで", reading: "ude", meaning: "arm", example: { jp: "うでがつよいです。", en: "My arms are strong." }, drill: { jp: "うででかばんをもちます。", en: "I carry the bag on my arm." }, accept: ["arms", "an arm", "the arm", "forearm"], hint: "U-de — two beats. ⚠️ It also means skill — うでがいい says someone is good at their craft. The hand itself is て, a separate word." },
        { id: "ja-u60l1-kubi", type: "vocab", front: "くび", reading: "kubi", meaning: "neck", example: { jp: "くびがいたいです。", en: "My neck hurts." }, drill: { jp: "くびがほそいです。", en: "The neck is slender." }, accept: ["necks", "the neck", "a neck", "throat"], hint: "KU-bi — two beats. ⚠️ Watch the idiom: くびになる means to be fired. Here it is the literal neck you need." },
        { id: "ja-u60l1-mune", type: "vocab", front: "むね", reading: "mune", meaning: "chest", example: { jp: "むねがいたいです。", en: "My chest hurts." }, drill: { jp: "むねはひろいです。", en: "The chest is broad." }, accept: ["breast", "the chest", "a chest", "bosom"], hint: "MU-ne — two beats. ⚠️ It covers the chest and, figuratively, the heart as the seat of feeling: むねがいっぱい means overwhelmed." },
      ],
    },
    // Lesson 2: body (2) — lower body & finer parts
    {
      id: "ja-u60l2",
      unit: 60,
      lesson: 2,
      title: "Body 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name more body parts: ひざ こし ほね あご ほほ おしり.",
      items: [
        { id: "ja-u60l2-hiza", type: "vocab", front: "ひざ", reading: "hiza", meaning: "knee", example: { jp: "ひざがいたいです。", en: "My knee hurts." }, drill: { jp: "ひざのうえにねこがいます。", en: "The cat is on my lap." }, accept: ["knees", "lap", "the knee", "a knee"], hint: "HI-za — two beats, a buzzing z. ⚠️ Knee when you stand, LAP when you sit — one word for both, which is why a cat settles on your ひざ." },
        { id: "ja-u60l2-koshi", type: "vocab", front: "こし", reading: "koshi", meaning: "lower back", example: { jp: "こしがよわいです。", en: "My lower back is weak." }, drill: { jp: "こしがとてもいたいです。", en: "My lower back hurts a lot." }, accept: ["waist", "hips", "the lower back", "small of the back"], hint: "KO-shi — two beats. ⚠️ Not the whole back, which is せなか. こし is the band around the waist and lower spine — the part that aches after lifting." },
        { id: "ja-u60l2-hone", type: "vocab", front: "ほね", reading: "hone", meaning: "bone", example: { jp: "ほねはかたいです。", en: "Bones are hard." }, drill: { jp: "ほねはしろいです。", en: "Bones are white." }, accept: ["bones", "a bone", "the bone", "skeleton"], hint: "HO-ne — two beats. ⚠️ ほねがおれる literally says a bone breaks and figuratively means gruelling work — the same double sense English has in backbreaking." },
        { id: "ja-u60l2-ago", type: "vocab", front: "あご", reading: "ago", meaning: "jaw", example: { jp: "あごがちいさいです。", en: "The jaw is small." }, drill: { jp: "あごはくちのしたにあります。", en: "The jaw is below the mouth." }, accept: ["chin", "the jaw", "a jaw", "lower jaw"], hint: "A-go — two beats, hard g. ⚠️ One word for jaw AND chin. The face as a whole is かお, which you already know." },
        { id: "ja-u60l2-hoho", type: "vocab", front: "ほほ", reading: "hoho", meaning: "cheek", example: { jp: "ほほがあかいです。", en: "My cheeks are red." }, drill: { jp: "ほほはやわらかいです。", en: "Cheeks are soft." }, accept: ["cheeks", "a cheek", "the cheek", "cheekbone"], hint: "HO-ho — two identical beats, both a soft h. ⚠️ It is also said ほお with a long o. Both spellings are correct and mean the same cheek." },
        { id: "ja-u60l2-oshiri", type: "vocab", front: "おしり", reading: "oshiri", meaning: "bottom", example: { jp: "おしりがいたいです。", en: "My bottom hurts." }, drill: { jp: "おしりがちいさいです。", en: "The bottom is small." }, accept: ["buttocks", "butt", "backside", "rear"], hint: "o-shi-RI — three beats, tapped r, and the お is the polite prefix on しり. ⚠️ おしり is the ordinary polite word; しり on its own sounds blunt." },
      ],
    },
    // Lesson 3: everyday objects (1) — desk & study things
    {
      id: "ja-u60l3",
      unit: 60,
      lesson: 3,
      title: "Everyday things 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name everyday items: スカート ベルト マフラー ゆびわ くし しゃしん.",
      items: [
        { id: "ja-u60l3-sukato", type: "vocab", front: "スカート", reading: "sukāto", meaning: "skirt", example: { jp: "あおいスカートです。", en: "It's a blue skirt." }, drill: { jp: "スカートをはきます。", en: "I put on a skirt." }, accept: ["skirts", "a skirt", "the skirt"], hint: "su-KĀ-to — the ー holds the second beat: su-kaa-to, three beats. From English skirt. ⚠️ Skirts and trousers take はきます, the leg-wear verb, never きます." },
        { id: "ja-u60l3-beruto", type: "vocab", front: "ベルト", reading: "beruto", meaning: "belt", example: { jp: "ベルトをします。", en: "I put on a belt." }, drill: { jp: "ベルトはくろいです。", en: "The belt is black." }, accept: ["belts", "a belt", "the belt", "waist belt"], hint: "BE-ru-to — three beats, tapped r. From English belt. ⚠️ A belt takes neither きます nor はきます but します: ベルトをします." },
        { id: "ja-u60l3-mafura", type: "vocab", front: "マフラー", reading: "mafurā", meaning: "scarf", example: { jp: "あたたかいマフラーです。", en: "It's a warm scarf." }, drill: { jp: "マフラーはながいです。", en: "The scarf is long." }, accept: ["muffler", "winter scarf", "a scarf", "neck scarf"], hint: "MA-fu-RĀ — the final ー is held: ma-fu-raa, four beats. From English muffler. ⚠️ In Japanese it is the warm WINTER scarf; a light silk one is スカーフ." },
        { id: "ja-u60l3-yubiwa", type: "vocab", front: "ゆびわ", reading: "yubiwa", meaning: "ring", example: { jp: "ゆびわをかいます。", en: "I buy a ring." }, drill: { jp: "ゆびわはきれいです。", en: "The ring is beautiful." }, accept: ["rings", "a ring", "the ring", "finger ring"], hint: "yu-bi-WA — three beats. ゆび, a finger, plus わ, a circle: the finger circle. ⚠️ Completely transparent once you know ゆび — nothing extra to memorise." },
        { id: "ja-u60l3-kushi", type: "vocab", front: "くし", reading: "kushi", meaning: "comb", example: { jp: "くしをつかいます。", en: "I use a comb." }, drill: { jp: "くしをかばんにいれます。", en: "I put the comb in my bag." }, accept: ["combs", "a comb", "the comb", "hair comb"], hint: "KU-shi — two beats. ⚠️ Careful: くし is a comb and the near-identical くつ is a shoe. The last kana is the only thing separating them." },
        { id: "ja-u60l3-shashin", type: "vocab", front: "しゃしん", reading: "shashin", meaning: "photo", example: { jp: "しゃしんをとります。", en: "I take a photo." }, drill: { jp: "しゃしんをかべにはります。", en: "I stick the photo on the wall." }, accept: ["photograph", "picture", "a photo", "snapshot"], hint: "SHA-shin — しゃ is the yōon sha, then ん held: two beats. 写 (copy) + 真 (truth): a true copy. ⚠️ You TAKE one with とります, never かきます." },
      ],
    },
    // Lesson 4: everyday objects (2) — around the house
    {
      id: "ja-u60l4",
      unit: 60,
      lesson: 4,
      title: "Everyday things 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name everyday items: サンダル スリッパ したぎ パジャマ はがき ようふく.",
      items: [
        { id: "ja-u60l4-sandaru", type: "vocab", front: "サンダル", reading: "sandaru", meaning: "sandals", example: { jp: "あたらしいサンダルです。", en: "They're new sandals." }, drill: { jp: "サンダルはなつにはきます。", en: "I wear sandals in summer." }, accept: ["sandal", "a pair of sandals", "the sandals", "flip-flops"], hint: "SAN-da-ru — three beats, the ん held, tapped r. From English sandal. ⚠️ Like every kind of footwear it takes はきます." },
        { id: "ja-u60l4-surippa", type: "vocab", front: "スリッパ", reading: "surippa", meaning: "slippers", example: { jp: "スリッパをはきます。", en: "I put on slippers." }, drill: { jp: "スリッパはへやでつかいます。", en: "Slippers are used indoors." }, accept: ["slipper", "a pair of slippers", "the slippers", "house slippers"], hint: "su-RIP-pa — the small ッ doubles the p: three beats. From English slipper. ⚠️ In Japan these are the INDOOR shoes you change into after leaving your くつ at the door." },
        { id: "ja-u60l4-shitagi", type: "vocab", front: "したぎ", reading: "shitagi", meaning: "underwear", example: { jp: "したぎをあらいます。", en: "I wash my underwear." }, drill: { jp: "したぎはしろいです。", en: "The underwear is white." }, accept: ["undergarments", "underclothes", "undies", "underclothing"], hint: "shi-ta-GI — three beats, hard g. した, under, plus ぎ from きる, to wear: the under-wear. ⚠️ The same ぎ piece builds うわぎ, a jacket." },
        { id: "ja-u60l4-pajama", type: "vocab", front: "パジャマ", reading: "pajama", meaning: "pajamas", example: { jp: "パジャマをきます。", en: "I wear pajamas." }, drill: { jp: "パジャマでねます。", en: "I sleep in my pyjamas." }, accept: ["pyjamas", "a pair of pyjamas", "nightwear", "pjs"], hint: "pa-JA-ma — three beats, ジャ is the yōon ja. Japanese and English borrowed it from the same Hindi-Urdu word. ⚠️ Pyjamas take きます, the body-wear verb." },
        { id: "ja-u60l4-hagaki", type: "vocab", front: "はがき", reading: "hagaki", meaning: "postcard", example: { jp: "はがきをかきます。", en: "I write a postcard." }, drill: { jp: "はがきをともだちにおくります。", en: "I send a postcard to a friend." }, accept: ["postcards", "a postcard", "the postcard", "card"], hint: "ha-GA-ki — three beats, hard g. 葉書, literally leaf-writing: a note the size of a leaf. ⚠️ At a post office you will hear it with the polite お, as おはがき." },
        { id: "ja-u60l4-yofuku", type: "vocab", front: "ようふく", reading: "yōfuku", meaning: "clothes (Western-style)", example: { jp: "ようふくをかいます。", en: "I buy clothes." }, drill: { jp: "ようふくをあらいます。", en: "I wash the clothes." }, accept: ["Western clothes", "clothing", "outfit", "garments"], hint: "YŌ-fu-ku — the よう is a long o, so three beats. 洋 (Western) + 服 (clothing). ⚠️ Specifically NON-Japanese dress; a kimono is わふく, built on 和, meaning Japanese." },
      ],
    },
  ],
};
