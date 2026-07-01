// Unit 19 — ぶんぽう ("Grammar: sentences") — A1 / JLPT N5
// The first grammar unit: the copula sentence (X は Y です), the こそあど
// demonstratives, the question marker か, negation, the linking particles
// (の / と / も), question words, and basic connectors. Grammar has no dedicated
// item type, so each function word is a `vocab` item whose EXAMPLE carries the
// pattern — the learner meets は / です / これ as items and absorbs the sentence
// shape from the examples. Every example uses only vocab from earlier units.
// NOTE: this is naturalness-critical content — flagged for the batch native review.
// lang/unit/lesson stamped in index.js.
export const UNIT19 = {
  id: "ja-u19",
  lang: "ja",
  title: "ぶんぽう",
  order: 19,
  stage: "a1",
  lessons: [
    // Lesson 1: こそあど — the demonstratives
    {
      id: "ja-u19l1",
      unit: 19,
      lesson: 1,
      title: "This, that (これ・それ・あれ)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point things out with これ/それ/あれ/どれ (this/that one) and この/その/あの/どの (this/that ~).",
      items: [
        { id: "ja-u19l1-kore", type: "vocab", front: "これ", reading: "kore", meaning: "this", example: { jp: "これはほんです。", en: "This is a book." }, accept: ["this one", "this thing"], hint: "これ = this thing near ME. それ = near you, あれ = over there. Use これ for THINGS, not people (for a person, say こちら)." },
        { id: "ja-u19l1-sore", type: "vocab", front: "それ", reading: "sore", meaning: "that", example: { jp: "それはなにですか。", en: "What is that?" }, accept: ["that one", "that thing"] },
        { id: "ja-u19l1-are", type: "vocab", front: "あれ", reading: "are", meaning: "that (over there)", example: { jp: "あれはやまです。", en: "That over there is a mountain." }, accept: ["that one over there"] },
        { id: "ja-u19l1-dore", type: "vocab", front: "どれ", reading: "dore", meaning: "which", example: { jp: "どれがすきですか。", en: "Which one do you like?" }, accept: ["which one"] },
        { id: "ja-u19l1-kono", type: "vocab", front: "この", reading: "kono", meaning: "this ~", example: { jp: "このほんはあたらしいです。", en: "This book is new." }, accept: ["this (noun)"], hint: "この/その/あの come BEFORE a noun: この ほん = this book. These are この, これ is alone (これ です)." },
        { id: "ja-u19l1-sono", type: "vocab", front: "その", reading: "sono", meaning: "that ~", example: { jp: "そのくつはあおいです。", en: "Those shoes are blue." }, accept: ["that (noun)"] },
        { id: "ja-u19l1-ano", type: "vocab", front: "あの", reading: "ano", meaning: "that ~ (over there)", example: { jp: "あのひとはだれですか。", en: "Who is that person?" }, accept: ["that (noun) over there"] },
        { id: "ja-u19l1-dono", type: "vocab", front: "どの", reading: "dono", meaning: "which ~", example: { jp: "どのいろがすきですか。", en: "Which color do you like?" }, accept: ["which (noun)"] },
      ],
    },
    // Lesson 2: です・か・は — copula, question, topic, negation
    {
      id: "ja-u19l2",
      unit: 19,
      lesson: 2,
      title: "Is / isn't (です・か)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Build the core sentence: X は Y です, ask with か, and answer yes/no (そうです / ちがいます).",
      items: [
        { id: "ja-u19l2-wa", type: "vocab", front: "は", reading: "wa", meaning: "(topic marker)", example: { jp: "これはわたしのです。", en: "This is mine." }, accept: ["topic particle", "as for"], hint: "As a topic marker は is read わ (wa), NOT は (ha). It marks what the sentence is ABOUT: これは… = 'as for this, …'." },
        { id: "ja-u19l2-desu", type: "vocab", front: "です", reading: "desu", meaning: "to be", example: { jp: "わたしはがくせいです。", en: "I am a student." }, accept: ["is", "am", "are", "it is"], hint: "です = the polite 'is/am/are'. It goes at the END: X は Y です." },
        { id: "ja-u19l2-ka", type: "vocab", front: "か", reading: "ka", meaning: "(question marker)", example: { jp: "がくせいですか。", en: "Are you a student?" }, accept: ["question particle", "?"], hint: "か at the end turns a statement into a question — no word order change: …です → …ですか." },
        { id: "ja-u19l2-janaidesu", type: "vocab", front: "じゃないです", reading: "janaidesu", meaning: "is not", example: { jp: "せんせいじゃないです。", en: "I'm not a teacher." }, accept: ["isn't", "am not", "are not", "is not"], hint: "じゃないです = the negative of です: X じゃないです = 'is not X'." },
        { id: "ja-u19l2-sodesu", type: "vocab", front: "そうです", reading: "sōdesu", meaning: "that's right", example: { jp: "はい、そうです。", en: "Yes, that's right." }, accept: ["that's correct", "yes it is"] },
        { id: "ja-u19l2-chigaimasu", type: "vocab", front: "ちがいます", reading: "chigaimasu", meaning: "that's wrong", example: { jp: "いいえ、ちがいます。", en: "No, that's not right." }, accept: ["that's different", "no", "incorrect"] },
      ],
    },
    // Lesson 3: の・と・も — linking particles
    {
      id: "ja-u19l3",
      unit: 19,
      lesson: 3,
      title: "Of, and, also (の・と・も)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Link nouns: の (possessive), と (and), も (also), and ask だれの (whose) / なんの (what kind of).",
      items: [
        { id: "ja-u19l3-no", type: "vocab", front: "の", reading: "no", meaning: "of", example: { jp: "わたしのほんです。", en: "It's my book." }, accept: ["'s", "possessive"], hint: "の links two nouns, owner first: わたし の ほん = 'my book' (I-of-book). にほん の くるま = a Japanese car." },
        { id: "ja-u19l3-to", type: "vocab", front: "と", reading: "to", meaning: "and", example: { jp: "ほんとペンです。", en: "A book and a pen." }, accept: ["with"], hint: "と joins two nouns in a list: A と B = 'A and B'. Also means 'with' (ともだちと = with a friend)." },
        { id: "ja-u19l3-mo", type: "vocab", front: "も", reading: "mo", meaning: "also", example: { jp: "これもほんです。", en: "This is also a book." }, accept: ["too", "as well"], hint: "も replaces は to mean 'also/too': これは… → これも… = 'this too …'." },
        { id: "ja-u19l3-dareno", type: "vocab", front: "だれの", reading: "dareno", meaning: "whose", example: { jp: "これはだれのですか。", en: "Whose is this?" }, accept: ["whose is it"] },
        { id: "ja-u19l3-nanno", type: "vocab", front: "なんの", reading: "nanno", meaning: "what kind of", example: { jp: "なんのほんですか。", en: "What kind of book is it?" }, accept: ["what sort of"] },
      ],
    },
    // Lesson 4: question words
    {
      id: "ja-u19l4",
      unit: 19,
      lesson: 4,
      title: "What, where, when",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask with the question words: なに (what), どこ (where), いつ (when), どう (how), どうして (why).",
      items: [
        { id: "ja-u19l4-nani", type: "vocab", front: "なに", reading: "nani", meaning: "what", example: { jp: "これはなにですか。", en: "What is this?" }, accept: ["what?"], hint: "なに = what. Before some sounds it becomes なん: なに → なんですか, and 何時 = なんじ (what time)." },
        { id: "ja-u19l4-doko", type: "vocab", front: "どこ", reading: "doko", meaning: "where", example: { jp: "えきはどこですか。", en: "Where is the station?" }, accept: ["what place"] },
        { id: "ja-u19l4-itsu", type: "vocab", front: "いつ", reading: "itsu", meaning: "when", example: { jp: "テストはいつですか。", en: "When is the test?" }, accept: ["what time (day)"] },
        { id: "ja-u19l4-do", type: "vocab", front: "どう", reading: "dō", meaning: "how", example: { jp: "にほんはどうですか。", en: "How is Japan?" }, accept: ["how about", "in what way"] },
        { id: "ja-u19l4-doshite", type: "vocab", front: "どうして", reading: "dōshite", meaning: "why", example: { jp: "どうしてですか。", en: "Why is that?" }, accept: ["how come", "for what reason"] },
      ],
    },
    // Lesson 5: connectors
    {
      id: "ja-u19l5",
      unit: 19,
      lesson: 5,
      title: "But, and then, so",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Join sentences with でも (but), そして (and then), それから (after that), だから (so), じゃあ (well then).",
      items: [
        { id: "ja-u19l5-demo", type: "vocab", front: "でも", reading: "demo", meaning: "but", example: { jp: "あついです。でも、いきます。", en: "It's hot, but I'll go." }, accept: ["however", "though"] },
        { id: "ja-u19l5-soshite", type: "vocab", front: "そして", reading: "soshite", meaning: "and then", example: { jp: "たべます。そして、ねます。", en: "I eat, and then sleep." }, accept: ["and", "also"] },
        { id: "ja-u19l5-sorekara", type: "vocab", front: "それから", reading: "sorekara", meaning: "after that", example: { jp: "べんきょうします。それから、テレビをみます。", en: "I study, and after that watch TV." }, accept: ["then", "and then", "next"] },
        { id: "ja-u19l5-dakara", type: "vocab", front: "だから", reading: "dakara", meaning: "so", example: { jp: "あついです。だから、みずをのみます。", en: "It's hot, so I drink water." }, accept: ["therefore", "that's why"] },
        { id: "ja-u19l5-ja", type: "vocab", front: "じゃあ", reading: "jā", meaning: "well then", example: { jp: "じゃあ、いきます。", en: "Well then, I'll go." }, accept: ["well", "in that case", "so then"] },
      ],
    },
  ],
};
