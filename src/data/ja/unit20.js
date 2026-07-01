// Unit 20 — ぶんぽう・2 ("Grammar: verbs & particles") — A1 / JLPT N5
// The second grammar unit: the action sentence. Building on U19's copula, this
// teaches the case particles that connect a verb to its nouns — を (object),
// に (destination/time), が (subject), で (place of action), へ (direction),
// から/まで (from/until) — plus a batch of new ～ます verbs to use them on, and the
// invitation/request forms (～ませんか, ～ましょう, ください). Particles are `vocab`
// items whose examples carry the pattern; every example uses only earlier vocab.
// NOTE: naturalness-critical — flagged for the batch native review.
// lang/unit/lesson stamped in index.js.
export const UNIT20 = {
  id: "ja-u20",
  lang: "ja",
  title: "ぶんぽう・2",
  order: 20,
  stage: "a1",
  lessons: [
    // Lesson 1: を — the object particle
    {
      id: "ja-u20l1",
      unit: 20,
      lesson: 1,
      title: "Doing things (を)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Mark what a verb acts on with を: ほんをよみます. Use it with new everyday verbs.",
      items: [
        { id: "ja-u20l1-wo", type: "vocab", front: "を", reading: "wo", meaning: "(object marker)", example: { jp: "ほんをよみます。", en: "I read a book." }, accept: ["object particle", "direct object"], hint: "を marks the direct OBJECT — the thing the verb acts on: ほん を よみます = read a book. It's read お (o/wo), and this kana is used ONLY as this particle." },
        { id: "ja-u20l1-tsukurimasu", type: "vocab", front: "つくります", reading: "tsukurimasu", meaning: "make", example: { jp: "りょうりをつくります。", en: "I make food." }, accept: ["to make", "cook", "makes"] },
        { id: "ja-u20l1-tsukaimasu", type: "vocab", front: "つかいます", reading: "tsukaimasu", meaning: "use", example: { jp: "ペンをつかいます。", en: "I use a pen." }, accept: ["to use", "uses"] },
        { id: "ja-u20l1-akemasu", type: "vocab", front: "あけます", reading: "akemasu", meaning: "open", example: { jp: "まどをあけます。", en: "I open the window." }, accept: ["to open", "opens"] },
        { id: "ja-u20l1-shimemasu", type: "vocab", front: "しめます", reading: "shimemasu", meaning: "close", example: { jp: "ドアをしめます。", en: "I close the door." }, accept: ["to close", "shut", "closes"] },
        { id: "ja-u20l1-keshimasu", type: "vocab", front: "けします", reading: "keshimasu", meaning: "turn off", example: { jp: "でんきをけします。", en: "I turn off the light." }, accept: ["to turn off", "switch off", "erase"] },
        { id: "ja-u20l1-tsukemasu", type: "vocab", front: "つけます", reading: "tsukemasu", meaning: "turn on", example: { jp: "テレビをつけます。", en: "I turn on the TV." }, accept: ["to turn on", "switch on"] },
      ],
    },
    // Lesson 2: に and が — going & existing
    {
      id: "ja-u20l2",
      unit: 20,
      lesson: 2,
      title: "Going & existing (に・が)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use に for a destination/place of existence and が to mark what exists: がっこうにいきます, ねこがいます.",
      items: [
        { id: "ja-u20l2-ga", type: "vocab", front: "が", reading: "ga", meaning: "(subject marker)", example: { jp: "ねこがいます。", en: "There is a cat." }, accept: ["subject particle"], hint: "が marks the SUBJECT — often what exists or newly appears: ねこ が います = there's a cat. (The other particle here, に, marks a destination/time/place of existence — see below.)" },
        { id: "ja-u20l2-arimasu", type: "vocab", front: "あります", reading: "arimasu", meaning: "there is", example: { jp: "ほんがあります。", en: "There is a book." }, accept: ["to exist", "have", "there are"], hint: "あります = there is / to have, for THINGS (non-living). For people/animals use います." },
        { id: "ja-u20l2-imasu", type: "vocab", front: "います", reading: "imasu", meaning: "there is (living)", example: { jp: "いぬがいます。", en: "There is a dog." }, accept: ["to exist", "there are (living)"], hint: "います = there is, for LIVING things (people, animals). For objects use あります." },
        { id: "ja-u20l2-norimasu", type: "vocab", front: "のります", reading: "norimasu", meaning: "ride", example: { jp: "バスにのります。", en: "I ride the bus." }, accept: ["to ride", "get on", "board"], hint: "The particle に (read ni) is the workhorse here: destination (がっこう に いきます = go TO school), place of existence (…に あります/います), a time point (しちじ に = AT 7:00), and the target of のります (バス に のります)." },
        { id: "ja-u20l2-sumimasu", type: "vocab", front: "すみます", reading: "sumimasu", meaning: "live", example: { jp: "にほんにすみます。", en: "I live in Japan." }, accept: ["to live", "reside"] },
      ],
    },
    // Lesson 3: で — place of action
    {
      id: "ja-u20l3",
      unit: 20,
      lesson: 3,
      title: "Where you do it (で)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Mark where an action happens with で: うちでたべます. Contrast it with に (destination).",
      items: [
        { id: "ja-u20l3-de", type: "vocab", front: "で", reading: "de", meaning: "(at / in)", example: { jp: "うちでごはんをたべます。", en: "I eat a meal at home." }, accept: ["at", "in", "by"], hint: "で marks WHERE an action happens (place of the action) — vs に, which is a destination. うちで たべます = eat AT home. Also means 'by means of'." },
        { id: "ja-u20l3-hatarakimasu", type: "vocab", front: "はたらきます", reading: "hatarakimasu", meaning: "work", example: { jp: "みせではたらきます。", en: "I work at the shop." }, accept: ["to work", "works"] },
        { id: "ja-u20l3-asobimasu", type: "vocab", front: "あそびます", reading: "asobimasu", meaning: "play", example: { jp: "こうえんであそびます。", en: "I play at the park." }, accept: ["to play", "have fun", "hang out"] },
        { id: "ja-u20l3-yasumimasu", type: "vocab", front: "やすみます", reading: "yasumimasu", meaning: "rest", example: { jp: "うちでやすみます。", en: "I rest at home." }, accept: ["to rest", "take a break", "be absent"] },
        { id: "ja-u20l3-naraimasu", type: "vocab", front: "ならいます", reading: "naraimasu", meaning: "learn", example: { jp: "がっこうでならいます。", en: "I learn at school." }, accept: ["to learn", "study", "take lessons"] },
      ],
    },
    // Lesson 4: へ・から・まで + frequency
    {
      id: "ja-u20l4",
      unit: 20,
      lesson: 4,
      title: "To, from, until (へ・から・まで)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give direction and range: がっこうへいきます, くじからごじまで. Say how often with よく / あまり.",
      items: [
        { id: "ja-u20l4-e", type: "vocab", front: "へ", reading: "e", meaning: "(toward)", example: { jp: "がっこうへいきます。", en: "I go to school." }, accept: ["to", "toward"], hint: "へ marks DIRECTION of movement and is read え (e), not へ (he). Often interchangeable with に for a destination." },
        { id: "ja-u20l4-kara", type: "vocab", front: "から", reading: "kara", meaning: "from", example: { jp: "くじからです。", en: "It's from nine o'clock." }, accept: ["since", "starting from"], hint: "から = from (a start point in time or place). Pair it with まで: くじ から ごじ まで = from 9 to 5." },
        { id: "ja-u20l4-made", type: "vocab", front: "まで", reading: "made", meaning: "until", example: { jp: "ごじまでです。", en: "It's until five o'clock." }, accept: ["to", "as far as", "till"] },
        { id: "ja-u20l4-yoku", type: "vocab", front: "よく", reading: "yoku", meaning: "often", example: { jp: "よくえいがをみます。", en: "I often watch movies." }, accept: ["frequently", "well"] },
        { id: "ja-u20l4-amari", type: "vocab", front: "あまり", reading: "amari", meaning: "not much", example: { jp: "あまりすきじゃないです。", en: "I don't like it much." }, accept: ["not very", "not often"], hint: "あまり goes with a NEGATIVE: あまり…じゃないです / あまり…ません = 'not very / not much'." },
      ],
    },
    // Lesson 5: invitations & requests
    {
      id: "ja-u20l5",
      unit: 20,
      lesson: 5,
      title: "Let's…, please…",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Invite and request: たべませんか (shall we eat?), いきましょう (let's go), みずをください (water, please).",
      items: [
        { id: "ja-u20l5-masenka", type: "vocab", front: "ませんか", reading: "masenka", meaning: "won't you~?", example: { jp: "たべませんか。", en: "Won't you eat? / Shall we eat?" }, accept: ["shall we", "would you like to"], hint: "verb-stem + ませんか is a soft invitation: たべ + ませんか = 'won't you eat? / shall we eat?'." },
        { id: "ja-u20l5-masho", type: "vocab", front: "ましょう", reading: "mashō", meaning: "let's~", example: { jp: "いきましょう。", en: "Let's go." }, accept: ["shall we", "let us"], hint: "verb-stem + ましょう = 'let's…': いき + ましょう = let's go." },
        { id: "ja-u20l5-kudasai", type: "vocab", front: "ください", reading: "kudasai", meaning: "please give me", example: { jp: "みずをください。", en: "Water, please." }, accept: ["please", "give me"], hint: "(noun) を ください = 'please give me (noun)': みずを ください = water, please." },
        { id: "ja-u20l5-onegaishimasu", type: "vocab", front: "おねがいします", reading: "onegaishimasu", meaning: "please", example: { jp: "これをおねがいします。", en: "This one, please." }, accept: ["please do", "i request", "if you would"] },
        { id: "ja-u20l5-dozo", type: "vocab", front: "どうぞ", reading: "dōzo", meaning: "here you are", example: { jp: "どうぞ。", en: "Here you are. / Go ahead." }, accept: ["go ahead", "please", "by all means"] },
      ],
    },
  ],
};
