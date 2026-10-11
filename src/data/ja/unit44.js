// Unit 44 — ぶんぽう・5 (conditionals & ability; comparison; inference & quoting) — A2 / JLPT N4
export const UNIT44 = {
  id: "ja-u44",
  lang: "ja",
  title: "ぶんぽう・5",
  order: 44,
  stage: "a2",
  lessons: [
    {
      id: "ja-u44l1",
      unit: 44,
      lesson: 1,
      title: "Conditionals & ability",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say 'if / when' three ways (～たら・～ば・～なら), express ability (ことができる), talk about experience (ことがある) and change (ようになる), and state decisions (ことにする).",
      items: [
        { id: "ja-u44l1-tara", type: "vocab", front: "たら", reading: "tara", meaning: "if / when (once ~)", example: { jp: "うちにかえったら、でんわします。", en: "When I get home, I'll call you." }, drill: { jp: "あめがふったらいきません。", en: "If it rains, I won't go." }, accept: ["if","when","once","if and when"], hint: "plain past + ら = たら: かえった → かえったら = if/when I go home. Covers both 'if' and 'when (once X happens)'." },
        // ⚠️ NO `drill` ON PURPOSE — do not "fix" this. The front ば is ONE character, so
        // canCloze (front >= 2 chars) can never fire, and sentenceTokens needs the sentence
        // to START with the front, which a conditional suffix never does. Any drill here
        // routes NOTHING (tests/unit/drill-corpus.test.mjs catches it). A one-sentence card
        // is the correct outcome for a 1-char suffix front.
        { id: "ja-u44l1-ba", type: "vocab", front: "ば", reading: "ba", meaning: "if (conditional)", example: { jp: "やすければ、かいます。", en: "If it's cheap, I'll buy it." }, accept: ["if","provided that","if ~ then"], hint: "い-adj: drop い, add ければ (やすい → やすければ). Verbs change the last sound to the -e row + ば (のむ → のめば). General 'if X, then Y'." },
        { id: "ja-u44l1-nara", type: "vocab", front: "なら", reading: "nara", meaning: "if it's the case that", example: { jp: "にほんにいくなら、きょうとがいいですよ。", en: "If you're going to Japan, Kyoto is good." }, drill: { jp: "あしたならいきます。", en: "If it's tomorrow, I'll go." }, accept: ["if","in that case","if that's so","speaking of"], hint: "attaches to a noun or plain verb: にほん なら / いく なら. Means 'if that's the case / speaking of that'." },
        { id: "ja-u44l1-kotogadekiru", type: "vocab", front: "ことができる", reading: "kotogadekiru", meaning: "to be able to", example: { jp: "わたしはにほんごをはなすことができます。", en: "I can speak Japanese." }, drill: { jp: "ひらがなをよむことができる。", en: "I can read hiragana." }, accept: ["can","be able to","have the ability to","be capable of"], hint: "plain verb + ことができます = 'able to (verb)': はなす → はなすことができます = can speak." },
        { id: "ja-u44l1-kotogaaru", type: "vocab", front: "ことがある", reading: "kotogaaru", meaning: "there are times when / have (done) before", example: { jp: "すしをたべたことがあります。", en: "I have eaten sushi before." }, drill: { jp: "うみにいったことがある。", en: "I have been to the sea before." }, accept: ["have done before","there are times when","have ever done","sometimes happens"], hint: "plain past + ことがあります = past experience: たべた → たべたことがあります = have eaten. (plain present + ことがある = 'there are times when'.)" },
        { id: "ja-u44l1-yoninaru", type: "vocab", front: "ようになる", reading: "yōninaru", meaning: "to come to (be able to)", example: { jp: "にほんごがはなせるようになりました。", en: "I've become able to speak Japanese." }, drill: { jp: "まいにちほんをよむようになる。", en: "I come to read a book every day." }, accept: ["come to","become able to","end up doing","reach the point of"], hint: "plain verb + ようになる = a gradual change: はなせる → はなせるようになりました = came to be able to speak." },
        { id: "ja-u44l1-kotonisuru", type: "vocab", front: "ことにする", reading: "kotonisuru", meaning: "to decide to", example: { jp: "まいにちべんきょうすることにしました。", en: "I decided to study every day." }, drill: { jp: "あしたうみにいくことにする。", en: "I'll decide to go to the sea tomorrow." }, accept: ["decide to","make a decision to","resolve to","settle on doing"], hint: "plain verb + ことにします = a decision you make: べんきょうする → べんきょうすることにしました = decided to study." },
      ],
    },
    {
      id: "ja-u44l2",
      unit: 44,
      lesson: 2,
      title: "Comparison & degree",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things (AはBより / Bのほうが), say 'too much' (すぎる), 'easy/hard to do' (やすい・にくい), and list examples (～たり～たり).",
      items: [
        { id: "ja-u44l2-yori", type: "vocab", front: "より", reading: "yori", meaning: "than", example: { jp: "でんしゃはバスよりはやいです。", en: "The train is faster than the bus." }, drill: { jp: "ねこはいぬよりちいさいです。", en: "A cat is smaller than a dog." }, accept: ["more than","compared to","rather than","in comparison with"], hint: "A は B より ~ = 'A is more ~ than B'. B より marks the thing you compare against: バスより = 'than the bus'." },
        { id: "ja-u44l2-hoga", type: "vocab", front: "ほうが", reading: "hōga", meaning: "more / the ~ side (is more)", example: { jp: "でんしゃのほうがはやいです。", en: "The train is faster (of the two)." }, drill: { jp: "このみせのほうがちかいです。", en: "This shop is the nearer one." }, accept: ["the ~ one is more","rather","the ~ side","is the more ~ of the two"], hint: "B のほうが ~ = 'B is the more ~ one'. Pairs with より: バスより でんしゃのほうが はやい = 'the train is faster than the bus'." },
        { id: "ja-u44l2-sugiru", type: "vocab", front: "すぎる", reading: "sugiru", meaning: "too much / excessively", example: { jp: "きのう、たべすぎました。", en: "I ate too much yesterday." }, drill: { jp: "コーヒーをのみすぎる。", en: "I drink too much coffee." }, accept: ["too","excessively","too much","overdo"], hint: "Attach to a verb stem or adjective stem for 'too ~': たべ + すぎる = eat too much; たか + すぎる = too expensive." },
        { id: "ja-u44l2-yasui", type: "vocab", front: "やすい", reading: "yasui", meaning: "easy to (do)", example: { jp: "このほんはわかりやすいです。", en: "This book is easy to understand." }, drill: { jp: "このペンはつかいやすいです。", en: "This pen is easy to use." }, accept: ["easy to do","simple to do","not hard to do"], hint: "verb-stem + やすい = 'easy to ~': わかります → わかり + やすい = easy to understand." },
        { id: "ja-u44l2-nikui", type: "vocab", front: "にくい", reading: "nikui", meaning: "hard to (do)", example: { jp: "このじはよみにくいです。", en: "This handwriting is hard to read." }, drill: { jp: "このおちゃはのみにくいです。", en: "This tea is hard to drink." }, accept: ["hard to do","difficult to do","awkward to do","not easy to do"], hint: "verb-stem + にくい = 'hard to ~': よみます → よみ + にくい = hard to read. Opposite of やすい." },
        { id: "ja-u44l2-tari", type: "vocab", front: "たり", reading: "tari", meaning: "do things like (~たり~たり)", example: { jp: "にちようびは、ほんをよんだり、テレビをみたりします。", en: "On Sundays I do things like read books and watch TV." }, drill: { jp: "うちでたべたりねたりします。", en: "At home I eat and sleep and so on." }, accept: ["and so on","things like","among other things","such as"], hint: "past-form + り, paired: ～たり～たりします lists a few example activities (not an exhaustive list): よんだり みたり します." },
      ],
    },
    {
      id: "ja-u44l3",
      unit: 44,
      lesson: 3,
      title: "Looks like & quoting",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say something seems, looks like, or is apparently true (ようです・みたいです・らしいです), report what you were told (だそうです), name a thing with という, and give a reason with ため.",
      items: [
        { id: "ja-u44l3-yodesu", type: "vocab", front: "ようです", reading: "yōdesu", meaning: "seems / appears that", example: { jp: "だれもいないようです。", en: "It seems nobody is here." }, drill: { jp: "せんせいはいそがしいようです。", en: "The teacher seems busy." }, accept: ["it appears","looks as if","seems that","evidently"], hint: "ようです = 'it seems', based on what you SEE or evidence you notice. More formal than みたいです." },
        { id: "ja-u44l3-mitaidesu", type: "vocab", front: "みたいです", reading: "mitaidesu", meaning: "looks like / seems (casual)", example: { jp: "あめがふるみたいです。", en: "It looks like it's going to rain." }, drill: { jp: "あのひとはがくせいみたいです。", en: "That person looks like a student." }, accept: ["seems like","appears","looks like","is kind of like"], hint: "みたいです is the casual version of ようです: same 'looks like', more conversational. Attaches straight to a plain word." },
        { id: "ja-u44l3-rashiidesu", type: "vocab", front: "らしいです", reading: "rashiidesu", meaning: "apparently / I hear that", example: { jp: "あのみせはたかいらしいです。", en: "Apparently that shop is expensive." }, drill: { jp: "あのレストランはおいしいらしいです。", en: "Apparently that restaurant is good." }, accept: ["I heard that","reportedly","apparently","from what I hear"], hint: "らしいです = 'apparently / I hear that' — you got the info from someone else, not your own eyes." },
        { id: "ja-u44l3-toiu", type: "vocab", front: "という", reading: "toiu", meaning: "called / named / that says", example: { jp: "「さくら」というみせにいきました。", en: "I went to a shop called Sakura." }, drill: { jp: "「はる」というえいがをみます。", en: "I'll watch a film called Haru." }, accept: ["called","named","known as","that says"], hint: "Xという Y = 'a Y called/named X': 「さくら」というみせ = a shop called Sakura." },
        { id: "ja-u44l3-tame", type: "vocab", front: "ため", reading: "tame", meaning: "for the sake of / because of", example: { jp: "しけんのために、べんきょうします。", en: "I study for the exam." }, drill: { jp: "かぞくのためにりょうりをつくります。", en: "I cook for my family." }, accept: ["in order to","due to","for the sake of","because of"], hint: "Xのため = 'for the sake of X' (purpose) or 'because of X' (cause): しけんのために = for the exam." },
        { id: "ja-u44l3-dasodesu", type: "vocab", front: "だそうです", reading: "dasōdesu", meaning: "I hear that (reported)", example: { jp: "あしたはあめだそうです。", en: "I hear it will rain tomorrow." }, drill: { jp: "あしたはやすみだそうです。", en: "I hear tomorrow is a day off." }, accept: ["they say that","apparently (reported)","I was told that"], hint: "らしいです is a guess from evidence; だそうです is a straight report of what you were told. After a noun or な-adjective it keeps the だ." },
      ],
    },
  ],
};
