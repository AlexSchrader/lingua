// Unit 53 — ぎじゅつ・つうしん ("Technology & communication") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// This A2 unit is intentionally NOT registered in index.js — it is NOT seeded, NOT
// on the Ladder, and does NOT affect A1. A2 is being built ahead of time but stays
// off the app until A1 is native-reviewed and signed off. To activate (once A1 is
// clean): import it in src/data/index.js and add UNIT53 to the UNITS array — then it
// joins the normal gate. Until then, validate it in isolation with a node one-liner
// that runs validateContent over [...A1 units, UNIT53].
// ─────────────────────────────────────────────────────────────────────────────
// N4 technology / communication / media vocab, grouped by theme. Modeled like A1
// vocab (the ～ます form as the headword for verbs). Every example uses only A1 vocab
// + A1 grammar (を/に/で/と/が + です/ます), so it slots directly on top of a finished A1.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT53 = {
  id: "ja-u53",
  lang: "ja",
  title: "ぎじゅつ・つうしん",
  order: 53,
  stage: "a2",
  lessons: [
    // Lesson 1: devices
    {
      id: "ja-u53l1",
      unit: 53,
      lesson: 1,
      title: "Devices",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name your gadgets: けいたい がめん でんげん じゅうでん きかい パソコン.",
      items: [
        { id: "ja-u53l1-keitai", type: "vocab", front: "けいたい", reading: "keitai", meaning: "mobile phone", example: { jp: "けいたいをつかいます。", en: "I use my mobile phone." }, accept: ["cell phone", "mobile", "cellphone"] },
        { id: "ja-u53l1-gamen", type: "vocab", front: "がめん", reading: "gamen", meaning: "screen", example: { jp: "がめんがおおきいです。", en: "The screen is big." }, accept: ["display", "monitor screen"] },
        { id: "ja-u53l1-dengen", type: "vocab", front: "でんげん", reading: "dengen", meaning: "power (switch)", example: { jp: "でんげんをいれます。", en: "I turn on the power." }, accept: ["power", "power source"], hint: "でん (electricity) + げん (source)" },
        { id: "ja-u53l1-juden", type: "vocab", front: "じゅうでん", reading: "jūden", meaning: "charging", example: { jp: "けいたいをじゅうでんします。", en: "I charge my phone." }, accept: ["charge", "to charge"] },
        { id: "ja-u53l1-kikai", type: "vocab", front: "きかい", reading: "kikai", meaning: "machine", example: { jp: "このきかいはあたらしいです。", en: "This machine is new." }, accept: ["device", "appliance"] },
        { id: "ja-u53l1-pasokon", type: "vocab", front: "パソコン", reading: "pasokon", meaning: "computer", example: { jp: "あたらしいパソコンをかいます。", en: "I buy a new computer." }, accept: ["PC", "personal computer", "laptop"] },
      ],
    },
    // Lesson 2: the internet
    {
      id: "ja-u53l2",
      unit: 53,
      lesson: 2,
      title: "The internet",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get online: インターネット データ サイト つながります けんさくします とうろくします.",
      items: [
        { id: "ja-u53l2-intanetto", type: "vocab", front: "インターネット", reading: "intānetto", meaning: "internet", example: { jp: "インターネットでしらべます。", en: "I look it up on the internet." }, accept: ["the internet", "net"] },
        { id: "ja-u53l2-deta", type: "vocab", front: "データ", reading: "dēta", meaning: "data", example: { jp: "データをほぞんします。", en: "I save the data." }, accept: ["the data"] },
        { id: "ja-u53l2-saito", type: "vocab", front: "サイト", reading: "saito", meaning: "website", example: { jp: "このサイトはべんりです。", en: "This website is useful." }, accept: ["site", "web site"] },
        { id: "ja-u53l2-tsunagarimasu", type: "vocab", front: "つながります", reading: "tsunagarimasu", meaning: "connect", example: { jp: "ネットにつながります。", en: "It connects to the net." }, accept: ["to connect", "be connected", "link up"] },
        { id: "ja-u53l2-kensakushimasu", type: "vocab", front: "けんさくします", reading: "kensakushimasu", meaning: "search (online)", example: { jp: "なまえをけんさくします。", en: "I search for the name." }, accept: ["to search", "look up", "search for"] },
        { id: "ja-u53l2-torokushimasu", type: "vocab", front: "とうろくします", reading: "tōrokushimasu", meaning: "register", example: { jp: "サイトにとうろくします。", en: "I register on the site." }, accept: ["to register", "sign up", "enroll"] },
      ],
    },
    // Lesson 3: staying in touch
    {
      id: "ja-u53l3",
      unit: 53,
      lesson: 3,
      title: "Staying in touch",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Keep in contact: れんらく メッセージ へんじ かけます メール かいわ.",
      items: [
        { id: "ja-u53l3-renraku", type: "vocab", front: "れんらく", reading: "renraku", meaning: "contact", example: { jp: "あとでれんらくします。", en: "I'll get in touch later." }, accept: ["contact", "getting in touch", "communication"] },
        { id: "ja-u53l3-messeji", type: "vocab", front: "メッセージ", reading: "messēji", meaning: "message", example: { jp: "メッセージをよみます。", en: "I read the message." }, accept: ["a message", "text"] },
        { id: "ja-u53l3-henji", type: "vocab", front: "へんじ", reading: "henji", meaning: "reply", example: { jp: "はやくへんじをします。", en: "I reply quickly." }, accept: ["a reply", "answer", "response"] },
        { id: "ja-u53l3-kakemasu", type: "vocab", front: "かけます", reading: "kakemasu", meaning: "make (a call)", example: { jp: "ともだちにでんわをかけます。", en: "I call my friend." }, accept: ["to call", "make a phone call", "phone"] },
        { id: "ja-u53l3-meru", type: "vocab", front: "メール", reading: "mēru", meaning: "email", example: { jp: "ともだちにメールをかきます。", en: "I write an email to my friend." }, accept: ["e-mail", "mail"] },
        { id: "ja-u53l3-kaiwa", type: "vocab", front: "かいわ", reading: "kaiwa", meaning: "conversation", example: { jp: "にほんごでかいわをします。", en: "I have a conversation in Japanese." }, accept: ["talk", "dialogue", "chat"] },
      ],
    },
    // Lesson 4: media & problems
    {
      id: "ja-u53l4",
      unit: 53,
      lesson: 4,
      title: "Media & problems",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle info and trouble: じょうほう しんぶん ばんぐみ こしょう こわれます きえます.",
      items: [
        { id: "ja-u53l4-joho", type: "vocab", front: "じょうほう", reading: "jōhō", meaning: "information", example: { jp: "あたらしいじょうほうがあります。", en: "There is new information." }, accept: ["info"] },
        { id: "ja-u53l4-shinbun", type: "vocab", front: "しんぶん", reading: "shinbun", meaning: "newspaper", example: { jp: "あさしんぶんをよみます。", en: "I read the newspaper in the morning." }, accept: ["the newspaper", "paper"] },
        { id: "ja-u53l4-bangumi", type: "vocab", front: "ばんぐみ", reading: "bangumi", meaning: "(TV) program", example: { jp: "このばんぐみはおもしろいです。", en: "This program is interesting." }, accept: ["program", "show", "TV show"] },
        { id: "ja-u53l4-kosho", type: "vocab", front: "こしょう", reading: "koshō", meaning: "breakdown", example: { jp: "きかいがこしょうします。", en: "The machine breaks down." }, accept: ["malfunction", "out of order", "fault"] },
        { id: "ja-u53l4-kowaremasu", type: "vocab", front: "こわれます", reading: "kowaremasu", meaning: "break", example: { jp: "けいたいがこわれます。", en: "The phone breaks." }, accept: ["to break", "get broken", "break down"] },
        { id: "ja-u53l4-kiemasu", type: "vocab", front: "きえます", reading: "kiemasu", meaning: "go off", example: { jp: "がめんがきえます。", en: "The screen goes off." }, accept: ["turn off", "go out", "disappear"] },
      ],
    },
  ],
};
