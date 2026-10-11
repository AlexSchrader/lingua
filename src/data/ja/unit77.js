// Unit 77 — コミュニケーション ("Communication") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 communication & language vocab: talk/conversation, language & translation,
// getting a message across, and communication verbs (～ます form as the headword).
// Every front verified absent from the global exclusion list.
// DRILL SHAPE: every NOUN drill leads with its own front + a core particle, which is
// what ja sentenceTokens tiles. practice() REPLACES the example, so any other shape
// would strip sentence:build off an item whose example had it. The lesson-4 ～します
// verbs cannot lead a sentence, and their examples never earned sentence:build, so
// those drills keep cloze and take nothing away.
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
        { id: "ja-u77l1-aisatsu", type: "vocab", front: "あいさつ", reading: "aisatsu", meaning: "greeting", example: { jp: "あさ、あいさつをします。", en: "I say hello in the morning." }, drill: { jp: "あいさつをせんせいにします。", en: "I greet the teacher." }, accept: ["greetings", "salutation", "saying hello", "a word of greeting"], hint: "aisatsu — the social act of greeting, and a big deal in Japan: a shop's morning あいさつ is a ritual. Used with します. The verb あいさつします is the last lesson of this unit." },
        { id: "ja-u77l1-uwasa", type: "vocab", front: "うわさ", reading: "uwasa", meaning: "rumor", example: { jp: "へんなうわさをききました。", en: "I heard a strange rumor." }, drill: { jp: "うわさをともだちからききます。", en: "I hear a rumour from a friend." }, accept: ["rumour", "gossip", "hearsay", "what people say"], hint: "uwasa — unverified talk passing between people. うわさをきく is to hear a rumour; うわさをする is to gossip. Who you heard it from takes から." },
        { id: "ja-u77l1-jodan", type: "vocab", front: "じょうだん", reading: "jōdan", meaning: "joke", example: { jp: "かれはよくじょうだんをいいます。", en: "He often tells jokes." }, drill: { jp: "じょうだんがおもしろいです。", en: "The joke is funny." }, accept: ["jest", "kidding", "a gag", "a wisecrack"], hint: "jōdan — じょう (playful) + だん (talk). Long ō: jō-dan. じょうだんでしょう, 'you're joking', is the standard protest. It is a verbal joke, not a prank — that is いたずら." },
        { id: "ja-u77l1-himitsu", type: "vocab", front: "ひみつ", reading: "himitsu", meaning: "secret", example: { jp: "これはひみつです。", en: "This is a secret." }, drill: { jp: "ひみつをはなします。", en: "I tell the secret." }, accept: ["secrets", "a secret", "something kept quiet", "confidential"], hint: "himitsu — ひ (hidden) + みつ (dense, close): kept close and hidden. Both a noun and a な-adjective. The same ひ as ひしょ (secretary, u71), the person trusted with them." },
        { id: "ja-u77l1-wadai", type: "vocab", front: "わだい", reading: "wadai", meaning: "topic (a topic of conversation)", example: { jp: "あたらしいわだいをはなします。", en: "We talk about a new topic." }, drill: { jp: "わだいがかわりました。", en: "The topic changed." }, accept: ["subject", "topic of conversation", "what is being discussed", "a talking point"], hint: "wadai — わ (talk) + だい (subject): what the talk is about. わだいになる means to become the thing everyone is talking about. Shares its わ with かいわ, u50." },
        { id: "ja-u77l1-aite", type: "vocab", front: "あいて", reading: "aite", meaning: "the other person", example: { jp: "はなしのあいてがいません。", en: "I have no one to talk to." }, drill: { jp: "あいてのいけんをききます。", en: "I ask the other person's opinion." }, accept: ["partner", "companion", "the person opposite you", "your counterpart"], hint: "aite — あい (mutual) + て (hand): the hand facing yours. ⚠️ Context decides whether it is a conversation partner, a business counterpart or an OPPONENT in a match. One word, three relationships." },
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
        { id: "ja-u77l2-hogen", type: "vocab", front: "ほうげん", reading: "hōgen", meaning: "dialect", example: { jp: "おおさかのほうげんはおもしろいです。", en: "The Osaka dialect is interesting." }, drill: { jp: "ほうげんをならいます。", en: "I learn the dialect." }, accept: ["regional dialect", "a dialect", "local speech", "regional accent"], hint: "hōgen — ほう (direction, region) + げん (speech): the speech of a region. Long ō: hō-gen. Standard Tokyo Japanese is ひょうじゅんご; everything else, Osaka included, is a ほうげん." },
        { id: "ja-u77l2-tsuyaku", type: "vocab", front: "つうやく", reading: "tsūyaku", meaning: "interpreter", example: { jp: "かれはえいごのつうやくです。", en: "He is an English interpreter." }, drill: { jp: "つうやくをたのみます。", en: "I ask for an interpreter." }, accept: ["interpreting", "interpretation", "an interpreter", "live translation"], hint: "tsūyaku — つう (pass through) + やく (translate): passing speech through. Long ū: tsū-yaku. ⚠️ SPOKEN only; written translation is ほんやく, the next card. The same つう as つうきん, u74." },
        { id: "ja-u77l2-honyaku", type: "vocab", front: "ほんやく", reading: "honyaku", meaning: "translation", example: { jp: "えいごをほんやくします。", en: "I translate English." }, drill: { jp: "ほんやくをパソコンでします。", en: "I do the translation on the computer." }, accept: ["translating", "a translation", "translated text", "rendering into another language"], hint: "honyaku — ほん (turn over) + やく (translate), sharing its やく with つうやく on the card before. ⚠️ WRITTEN translation; interpreting speech is つうやく. The distinction is strict in Japanese." },
        { id: "ja-u77l2-setsumei", type: "vocab", front: "せつめい", reading: "setsumei", meaning: "explanation", example: { jp: "みちのせつめいをします。", en: "I explain the directions." }, drill: { jp: "せつめいがわかりません。", en: "I don't understand the explanation." }, accept: ["description", "an explanation", "explaining", "a briefing"], hint: "setsumei — せつ (explain) + めい (clear): making a thing clear. Used with します. せつめいしょ is an instruction manual — the しょ of しょるい, u71." },
        { id: "ja-u77l2-keigo", type: "vocab", front: "けいご", reading: "keigo", meaning: "polite language", example: { jp: "しごとでけいごをつかいます。", en: "I use polite language at work." }, drill: { jp: "けいごはむずかしいです。", en: "Polite language is difficult." }, accept: ["honorific language", "polite speech", "formal Japanese", "respectful language"], hint: "keigo — けい (respect) + ご (language). ⚠️ Not just です/ます: けいご is a whole second register with its own verbs (いただく from u43 is one), and getting it wrong is the classic learner stumble." },
        { id: "ja-u77l2-yomikata", type: "vocab", front: "よみかた", reading: "yomikata", meaning: "reading (how to read a word)", example: { jp: "このことばのよみかたがわかりません。", en: "I don't know how to read this word." }, drill: { jp: "よみかたをせんせいにききます。", en: "I ask the teacher how to read it." }, accept: ["how to read", "way of reading", "the pronunciation", "how it's said"], hint: "yomikata — よみ (reading) + かた (way): the way of reading. That ～かた turns ANY verb stem into 'how to do it': つかいかた (how to use), つくりかた (how to make). One pattern, endless words." },
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
        { id: "ja-u77l3-supiichi", type: "vocab", front: "スピーチ", reading: "supiichi", meaning: "speech", example: { jp: "みんなのまえでスピーチをします。", en: "I give a speech in front of everyone." }, drill: { jp: "スピーチがながいです。", en: "The speech is long." }, accept: ["talk", "address", "a speech", "an address to an audience"], hint: "supiichi — four beats with a long i: su-pi-i-chi. A prepared talk at a wedding or a ceremony. はっぴょう on the next card is a presentation of findings; スピーチ is rhetoric." },
        { id: "ja-u77l3-happyo", type: "vocab", front: "はっぴょう", reading: "happyō", meaning: "presentation", example: { jp: "クラスではっぴょうをします。", en: "I give a presentation in class." }, drill: { jp: "はっぴょうはあしたです。", en: "The presentation is tomorrow." }, accept: ["announcement", "a presentation", "presenting", "going public with something"], hint: "happyō — はつ (issue) + ひょう (show), colliding into っぴ: hap-pyō. Presenting work to a group, and also a public announcement: けっかのはっぴょう is the release of results." },
        { id: "ja-u77l3-dengon", type: "vocab", front: "でんごん", reading: "dengon", meaning: "message (word left with someone)", example: { jp: "かれにでんごんをおねがいします。", en: "I leave a message for him." }, drill: { jp: "でんごんをかちょうにつたえます。", en: "I pass the message to the section chief." }, accept: ["verbal message", "a message passed on", "word left with someone", "a relayed message"], hint: "dengon — でん (transmit) + ごん (word): a word passed through a third person, which メッセージ (u50) does not imply. The same でん as でんわ and でんとう." },
        { id: "ja-u77l3-anaunsu", type: "vocab", front: "アナウンス", reading: "anaunsu", meaning: "announcement", example: { jp: "えきのアナウンスをききます。", en: "I listen to the station announcement." }, drill: { jp: "アナウンスがえきであります。", en: "There is an announcement at the station." }, accept: ["announcing", "an announcement", "a public announcement", "a tannoy message"], hint: "anaunsu — five beats: a-na-un-su. A spoken announcement over a speaker, which is why Japanese stations and trains are full of them. The announcer is アナウンサー." },
        { id: "ja-u77l3-intabyu", type: "vocab", front: "インタビュー", reading: "intabyū", meaning: "interview", example: { jp: "テレビのインタビューをみます。", en: "I watch a TV interview." }, drill: { jp: "インタビューをしんぶんでよみます。", en: "I read the interview in the newspaper." }, accept: ["interviews", "an interview", "a press interview", "being interviewed"], hint: "intabyū — long ū at the end: in-ta-byū. ⚠️ A JOURNALIST's interview only. A job interview is めんせつ, from u71 — using インタビュー for one would sound badly off." },
        { id: "ja-u77l3-komento", type: "vocab", front: "コメント", reading: "komento", meaning: "comment", example: { jp: "しゃしんにコメントをかきます。", en: "I write a comment on the photo." }, drill: { jp: "コメントをサイトにかきます。", en: "I write a comment on the website." }, accept: ["comments", "remark", "a remark", "feedback"], hint: "komento — four beats: ko-men-to. Covers an online comment and a public statement to the press: ノーコメント is 'no comment', borrowed whole." },
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
        { id: "ja-u77l4-yakusokushimasu", type: "vocab", front: "やくそくします", reading: "yakusokushimasu", meaning: "promise (to make a promise)", example: { jp: "ともだちとやくそくします。", en: "I make a promise with my friend." }, drill: { jp: "かぞくとやくそくします。", en: "I make a promise with my family." }, accept: ["to promise", "make a promise", "to give one's word", "to agree to meet"], hint: "yakusokushimasu — やくそく is both a promise and an arrangement to meet, so やくそくがあります can mean 'I have plans'. Who you promise takes と. Kept with まもります, from u45." },
        { id: "ja-u77l4-aisatsushimasu", type: "vocab", front: "あいさつします", reading: "aisatsushimasu", meaning: "greet", example: { jp: "せんせいにあいさつします。", en: "I greet the teacher." }, drill: { jp: "きんじょのひとにあいさつします。", en: "I greet the neighbours." }, accept: ["to greet", "say hello", "to pay one's respects", "to exchange greetings"], hint: "aisatsushimasu — the verb of あいさつ from lesson 1 of this unit. The person greeted takes に. In Japan greeting the きんじょ (u49) when you move in is close to an obligation." },
        { id: "ja-u77l4-denwashimasu", type: "vocab", front: "でんわします", reading: "denwashimasu", meaning: "call", example: { jp: "ははにでんわします。", en: "I call my mother." }, drill: { jp: "びょういんにでんわします。", en: "I call the hospital." }, accept: ["to phone", "to call", "to ring", "to give someone a call"], hint: "denwashimasu — でんわ (u2) turned into a verb by adding します, which works on most noun loans. The person called takes に. でんわをかけます from u50 is the same act, longer." },
        { id: "ja-u77l4-renrakushimasu", type: "vocab", front: "れんらくします", reading: "renrakushimasu", meaning: "contact (to get in touch)", example: { jp: "あとでれんらくします。", en: "I'll contact you later." }, drill: { jp: "どうりょうにれんらくします。", en: "I get in touch with a colleague." }, accept: ["to contact", "get in touch", "to reach out", "to let someone know"], hint: "renrakushimasu — the verb of れんらく from u50: getting in touch by any means, which is why it is the polite catch-all. Who you contact takes に." },
        { id: "ja-u77l4-hanashiaimasu", type: "vocab", front: "はなしあいます", reading: "hanashiaimasu", meaning: "discuss", example: { jp: "かぞくではなしあいます。", en: "We talk it over as a family." }, drill: { jp: "もんだいをはなしあいます。", en: "We talk the problem over." }, accept: ["to discuss", "talk over", "to thrash out", "to talk through together"], hint: "hanashiaimasu — はなす + あう, and that あう ending means 'to each other': たすけあう is to help each other. So はなしあう is two-way talk, never a lecture." },
        { id: "ja-u77l4-hanashikakemasu", type: "vocab", front: "はなしかけます", reading: "hanashikakemasu", meaning: "speak to", example: { jp: "ともだちにはなしかけます。", en: "I speak to my friend." }, drill: { jp: "みせのひとにはなしかけます。", en: "I speak to the shop assistant." }, accept: ["to speak to", "strike up a conversation", "to address someone", "to start talking to"], hint: "hanashikakemasu — はなす + かける, and かける here means 'aim at': aiming your speech at someone, i.e. opening a conversation. The person takes に. One-way, where はなしあう is mutual." },
      ],
    },
  ],
};
