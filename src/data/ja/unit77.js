// Unit 77 — コミュニケーション ("Communication") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 communication & language vocab: talk/conversation, language & translation,
// getting a message across, and communication verbs (～ます form as the headword).
// Every front verified absent from the global exclusion list.
export const UNIT77 = {
  id: "ja-u77",
  lang: "ja",
  title: "コミュニケーション",
  order: 77,
  stage: "a2",
  lessons: [
    // Lesson 1: conversation & talk
    {
      id: "ja-u77l1",
      unit: 77,
      lesson: 1,
      title: "Talk & conversation",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about conversation: あいさつ うわさ じょうだん ひみつ わだい あいて.",
      items: [
        { id: "ja-u77l1-aisatsu", type: "vocab", front: "あいさつ", reading: "aisatsu", meaning: "greeting", example: { jp: "あさ、あいさつをします。", en: "I say hello in the morning." }, accept: ["greetings", "salutation"] },
        { id: "ja-u77l1-uwasa", type: "vocab", front: "うわさ", reading: "uwasa", meaning: "rumor", example: { jp: "へんなうわさをききました。", en: "I heard a strange rumor." }, accept: ["rumour", "gossip"] },
        { id: "ja-u77l1-jodan", type: "vocab", front: "じょうだん", reading: "jōdan", meaning: "joke", example: { jp: "かれはよくじょうだんをいいます。", en: "He often tells jokes." }, accept: ["jest", "kidding"] },
        { id: "ja-u77l1-himitsu", type: "vocab", front: "ひみつ", reading: "himitsu", meaning: "secret", example: { jp: "これはひみつです。", en: "This is a secret." }, accept: ["secrets"] },
        { id: "ja-u77l1-wadai", type: "vocab", front: "わだい", reading: "wadai", meaning: "topic", example: { jp: "あたらしいわだいをはなします。", en: "We talk about a new topic." }, accept: ["subject", "topic of conversation"] },
        { id: "ja-u77l1-aite", type: "vocab", front: "あいて", reading: "aite", meaning: "the other person", example: { jp: "はなしのあいてがいません。", en: "I have no one to talk to." }, accept: ["partner", "companion"] },
      ],
    },
    // Lesson 2: language & translation
    {
      id: "ja-u77l2",
      unit: 77,
      lesson: 2,
      title: "Language & translation",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about language: ほうげん つうやく ほんやく せつめい けいご よみかた.",
      items: [
        { id: "ja-u77l2-hogen", type: "vocab", front: "ほうげん", reading: "hōgen", meaning: "dialect", example: { jp: "おおさかのほうげんはおもしろいです。", en: "The Osaka dialect is interesting." }, accept: ["regional dialect"] },
        { id: "ja-u77l2-tsuyaku", type: "vocab", front: "つうやく", reading: "tsūyaku", meaning: "interpreter", example: { jp: "かれはえいごのつうやくです。", en: "He is an English interpreter." }, accept: ["interpreting", "interpretation"] },
        { id: "ja-u77l2-honyaku", type: "vocab", front: "ほんやく", reading: "honyaku", meaning: "translation", example: { jp: "えいごをほんやくします。", en: "I translate English." }, accept: ["translating"] },
        { id: "ja-u77l2-setsumei", type: "vocab", front: "せつめい", reading: "setsumei", meaning: "explanation", example: { jp: "みちのせつめいをします。", en: "I explain the directions." }, accept: ["description"] },
        { id: "ja-u77l2-keigo", type: "vocab", front: "けいご", reading: "keigo", meaning: "polite language", example: { jp: "しごとでけいごをつかいます。", en: "I use polite language at work." }, accept: ["honorific language", "polite speech"] },
        { id: "ja-u77l2-yomikata", type: "vocab", front: "よみかた", reading: "yomikata", meaning: "reading", example: { jp: "このことばのよみかたがわかりません。", en: "I don't know how to read this word." }, accept: ["how to read", "way of reading"] },
      ],
    },
    // Lesson 3: getting the message across
    {
      id: "ja-u77l3",
      unit: 77,
      lesson: 3,
      title: "Getting the message across",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Share information: スピーチ はっぴょう でんごん アナウンス インタビュー コメント.",
      items: [
        { id: "ja-u77l3-supiichi", type: "vocab", front: "スピーチ", reading: "supiichi", meaning: "speech", example: { jp: "みんなのまえでスピーチをします。", en: "I give a speech in front of everyone." }, accept: ["talk", "address"] },
        { id: "ja-u77l3-happyo", type: "vocab", front: "はっぴょう", reading: "happyō", meaning: "presentation", example: { jp: "クラスではっぴょうをします。", en: "I give a presentation in class." }, accept: ["announcement"] },
        { id: "ja-u77l3-dengon", type: "vocab", front: "でんごん", reading: "dengon", meaning: "message", example: { jp: "かれにでんごんをおねがいします。", en: "I leave a message for him." }, accept: ["verbal message"] },
        { id: "ja-u77l3-anaunsu", type: "vocab", front: "アナウンス", reading: "anaunsu", meaning: "announcement", example: { jp: "えきのアナウンスをききます。", en: "I listen to the station announcement." }, accept: ["announcing"] },
        { id: "ja-u77l3-intabyu", type: "vocab", front: "インタビュー", reading: "intabyū", meaning: "interview", example: { jp: "テレビのインタビューをみます。", en: "I watch a TV interview." }, accept: ["interviews"] },
        { id: "ja-u77l3-komento", type: "vocab", front: "コメント", reading: "komento", meaning: "comment", example: { jp: "しゃしんにコメントをかきます。", en: "I write a comment on the photo." }, accept: ["comments", "remark"] },
      ],
    },
    // Lesson 4: communication verbs
    {
      id: "ja-u77l4",
      unit: 77,
      lesson: 4,
      title: "Communication verbs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Communicate with others: やくそくします あいさつします でんわします れんらくします はなしあいます はなしかけます.",
      items: [
        { id: "ja-u77l4-yakusokushimasu", type: "vocab", front: "やくそくします", reading: "yakusokushimasu", meaning: "promise", example: { jp: "ともだちとやくそくします。", en: "I make a promise with my friend." }, accept: ["to promise", "make a promise"] },
        { id: "ja-u77l4-aisatsushimasu", type: "vocab", front: "あいさつします", reading: "aisatsushimasu", meaning: "greet", example: { jp: "せんせいにあいさつします。", en: "I greet the teacher." }, accept: ["to greet", "say hello"] },
        { id: "ja-u77l4-denwashimasu", type: "vocab", front: "でんわします", reading: "denwashimasu", meaning: "call", example: { jp: "ははにでんわします。", en: "I call my mother." }, accept: ["to phone", "to call"] },
        { id: "ja-u77l4-renrakushimasu", type: "vocab", front: "れんらくします", reading: "renrakushimasu", meaning: "contact", example: { jp: "あとでれんらくします。", en: "I'll contact you later." }, accept: ["to contact", "get in touch"] },
        { id: "ja-u77l4-hanashiaimasu", type: "vocab", front: "はなしあいます", reading: "hanashiaimasu", meaning: "discuss", example: { jp: "かぞくではなしあいます。", en: "We talk it over as a family." }, accept: ["to discuss", "talk over"] },
        { id: "ja-u77l4-hanashikakemasu", type: "vocab", front: "はなしかけます", reading: "hanashikakemasu", meaning: "speak to", example: { jp: "ともだちにはなしかけます。", en: "I speak to my friend." }, accept: ["to speak to", "strike up a conversation"] },
      ],
    },
  ],
};
