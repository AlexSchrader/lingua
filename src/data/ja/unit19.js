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
        { id: "ja-u19l1-kore", type: "vocab", front: "これ", reading: "kore", meaning: "this", example: { jp: "これはほんです。", en: "This is a book." }, drill: { jp: "これはわたしのかばんです。", en: "This is my bag." }, accept: ["this one", "this thing", "this here"], hint: "これ = this thing near ME. それ = near you, あれ = over there. Use これ for THINGS, not people (for a person, say こちら)." },
        { id: "ja-u19l1-sore", type: "vocab", front: "それ", reading: "sore", meaning: "that (near you)", example: { jp: "それはなにですか。", en: "What is that?" }, drill: { jp: "それをください。", en: "That one, please." }, accept: ["that one", "that thing", "that by you"], hint: "SO-re — two beats, tapped r. ⚠️ それ is near YOU, the listener — not near me and not far from both of us. The set is これ・それ・あれ・どれ, and Japanese splits by WHOSE space the thing is in, which English does not." },
        { id: "ja-u19l1-are", type: "vocab", front: "あれ", reading: "are", meaning: "that (over there)", example: { jp: "あれはやまです。", en: "That over there is a mountain." }, drill: { jp: "あれはえきです。", en: "That over there is the station." }, accept: ["that one over there", "that thing over there", "yonder one"], hint: "A-re — two beats. ⚠️ あれ is away from BOTH of us, so you can point at it together. ⚠️ Said alone with a rising tone it also means huh?, which is why Japanese speakers say あれ？ when something is missing." },
        { id: "ja-u19l1-dore", type: "vocab", front: "どれ", reading: "dore", meaning: "which", example: { jp: "どれがすきですか。", en: "Which one do you like?" }, drill: { jp: "どれがあなたのですか。", en: "Which one is yours?" }, accept: ["which one", "which thing", "which of them"], hint: "DO-re — two beats, tapped r. ⚠️ The question member of the これ・それ・あれ set — every one of these families has a ど- member: どれ, どの, どこ, どう. Spot the ど and you are reading a question." },
        { id: "ja-u19l1-kono", type: "vocab", front: "この", reading: "kono", meaning: "this ~", example: { jp: "このほんはあたらしいです。", en: "This book is new." }, drill: { jp: "このみせはあたらしいです。", en: "This shop is new." }, accept: ["this (noun)", "this particular", "this very"], hint: "この/その/あの come BEFORE a noun: この ほん = this book. These are この, これ is alone (これ です)." },
        { id: "ja-u19l1-sono", type: "vocab", front: "その", reading: "sono", meaning: "that ~ (near you)", example: { jp: "そのくつはあおいです。", en: "Those shoes are blue." }, drill: { jp: "そのほんをよみます。", en: "I read that book." }, accept: ["that (noun)", "that particular", "that one's"], hint: "SO-no — two beats. ⚠️ それ stands alone; その must be FOLLOWED by a noun — そのほん, never そのです. The pair runs right through the family: これ/この, それ/その, あれ/あの, どれ/どの." },
        { id: "ja-u19l1-ano", type: "vocab", front: "あの", reading: "ano", meaning: "that ~ (over there)", example: { jp: "あのひとはだれですか。", en: "Who is that person?" }, drill: { jp: "あのやまはたかいです。", en: "That mountain over there is tall." }, accept: ["that (noun) over there", "that distant", "yonder"], hint: "A-no — two beats. Must be followed by a noun: あのひと, that person. ⚠️ あのう, drawn out, is the Japanese er… you use to start speaking to a stranger — same sound, completely different job." },
        { id: "ja-u19l1-dono", type: "vocab", front: "どの", reading: "dono", meaning: "which ~", example: { jp: "どのいろがすきですか。", en: "Which color do you like?" }, drill: { jp: "どのくつをかいますか。", en: "Which shoes will you buy?" }, accept: ["which (noun)", "which particular", "what sort of"], hint: "DO-no — two beats. The question member that precedes a noun: どのいろ, which colour. ⚠️ どれ asks about a thing on its own; どの asks about a KIND of thing, and it cannot stand alone." },
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
        { id: "ja-u19l2-wa", type: "vocab", front: "は", reading: "wa", meaning: "topic marker", example: { jp: "これはわたしのです。", en: "This is mine." }, accept: ["topic particle", "as for", "speaking of"], hint: "As a topic marker は is read わ (wa), NOT は (ha). It marks what the sentence is ABOUT: これは… = 'as for this, …'." },
        { id: "ja-u19l2-desu", type: "vocab", front: "です", reading: "desu", meaning: "to be", example: { jp: "わたしはがくせいです。", en: "I am a student." }, drill: { jp: "ここはしずかです。", en: "It's quiet here." }, accept: ["is", "am", "are", "it is"], hint: "DE-su — two beats, and the u is barely voiced: it sounds like des. ⚠️ It goes LAST, always: X は Y です. It carries the politeness, not the meaning — the casual equivalent is だ. It has no plural and no person, so です covers am, is and are." },
        { id: "ja-u19l2-ka", type: "vocab", front: "か", reading: "ka", meaning: "question marker", example: { jp: "がくせいですか。", en: "Are you a student?" }, accept: ["question particle", "?", "or"], hint: "か at the end turns a statement into a question — no word order change: …です → …ですか." },
        { id: "ja-u19l2-janaidesu", type: "vocab", front: "じゃないです", reading: "janaidesu", meaning: "is not", example: { jp: "せんせいじゃないです。", en: "I'm not a teacher." }, drill: { jp: "がくせいじゃないです。", en: "I'm not a student." }, accept: ["isn't", "am not", "are not", "not"], hint: "ja-nai-DE-su — five beats. The negative of です: X じゃないです. ⚠️ The written and formal version is ではありません, and じゃ is a spoken contraction of では. ⚠️ Different じゃ from じゃあ, well then, in Lesson 5." },
        { id: "ja-u19l2-sodesu", type: "vocab", front: "そうです", reading: "sōdesu", meaning: "that's right", example: { jp: "はい、そうです。", en: "Yes, that's right." }, drill: { jp: "それはそうです。", en: "That is so." }, accept: ["that's correct", "yes it is", "quite so"], hint: "SOH-de-su — four beats: so-o-de-su. ⚠️ It is the answer to a です question, not to a verb question — はい、そうです confirms X は Y です. For a verb, you repeat the verb instead: たべますか → はい、たべます." },
        { id: "ja-u19l2-chigaimasu", type: "vocab", front: "ちがいます", reading: "chigaimasu", meaning: "that's wrong", example: { jp: "いいえ、ちがいます。", en: "No, that's not right." }, drill: { jp: "いいえ、それはちがいます。", en: "No, that's not right." }, accept: ["that's different", "no", "incorrect", "that's not it"], hint: "chi-ga-i-MA-su — five beats. Literally it differs, from ちがう. ⚠️ Softer than English wrong, because it says the two things are not the same rather than that you failed. It is the standard polite no in a shop or an office." },
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
      canDo: "Link nouns: の (possessive), と (and), や (and so on), も (also), and ask だれの (whose) / なんの (what kind of).",
      items: [
        { id: "ja-u19l3-no", type: "vocab", front: "の", reading: "no", meaning: "of", example: { jp: "わたしのほんです。", en: "It's my book." }, accept: ["'s", "possessive", "belonging to"], hint: "の links two nouns, owner first: わたし の ほん = 'my book' (I-of-book). にほん の くるま = a Japanese car." },
        { id: "ja-u19l3-to", type: "vocab", front: "と", reading: "to", meaning: "and", example: { jp: "ほんとペンです。", en: "A book and a pen." }, accept: ["with", "together with", "and (complete list)"], hint: "と joins two nouns in a list: A と B = 'A and B'. Also means 'with' (ともだちと = with a friend)." },
        { id: "ja-u19l3-mo", type: "vocab", front: "も", reading: "mo", meaning: "also", example: { jp: "これもほんです。", en: "This is also a book." }, accept: ["too", "as well", "even"], hint: "も replaces は to mean 'also/too': これは… → これも… = 'this too …'." },
        { id: "ja-u19l3-dareno", type: "vocab", front: "だれの", reading: "dareno", meaning: "whose", example: { jp: "これはだれのですか。", en: "Whose is this?" }, drill: { jp: "このかさはだれのですか。", en: "Whose umbrella is this?" }, accept: ["whose is it", "belonging to whom", "whose thing"], hint: "da-re-NO — three beats. だれ, who, plus の, of. ⚠️ It can end a sentence on its own — だれのですか — because の already implies the thing. English needs whose one is it; Japanese does not." },
        { id: "ja-u19l3-nanno", type: "vocab", front: "なんの", reading: "nanno", meaning: "what kind of", example: { jp: "なんのほんですか。", en: "What kind of book is it?" }, drill: { jp: "それはなんのえいがですか。", en: "What kind of film is that?" }, accept: ["what sort of", "of what kind", "what type of"], hint: "nan-NO — three beats. なん, what, plus の. ⚠️ It asks about the KIND, not the name — なんのほん asks novel or textbook, while なまえはなんですか asks for the title. ⚠️ Always なんの, never なにの." },
        { id: "ja-u19l3-ya", type: "vocab", front: "や", reading: "ya", meaning: "and so on", example: { jp: "これはほんやペンです。", en: "These are books, pens and so on." }, accept: ["and (a partial list)", "and so forth", "etc"], hint: "と lists everything there is; や lists examples and leaves the rest unsaid. ほんとペン = a book and a pen, nothing else. ほんやペン = books, pens, and whatever else." },
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
      canDo: "Ask with the question words: なに (what), どこ (where), いつ (when), どう (how), どうやって (how exactly), どうして (why).",
      items: [
        { id: "ja-u19l4-nani", type: "vocab", front: "なに", reading: "nani", meaning: "what", example: { jp: "これはなにですか。", en: "What is this?" }, drill: { jp: "なにをたべますか。", en: "What do you eat?" }, accept: ["what?", "which thing", "what sort"], hint: "なに = what. Before some sounds it becomes なん: なに → なんですか, and 何時 = なんじ (what time)." },
        { id: "ja-u19l4-doko", type: "vocab", front: "どこ", reading: "doko", meaning: "where", example: { jp: "えきはどこですか。", en: "Where is the station?" }, drill: { jp: "どこでかいますか。", en: "Where do you buy it?" }, accept: ["what place", "whereabouts", "which place"], hint: "DO-ko — two beats. The ど- member of ここ・そこ・あそこ. ⚠️ The particle changes the question: どこですか asks where it IS, どこで asks where an action HAPPENS, どこに asks where it goes. The polite version is どちら." },
        { id: "ja-u19l4-itsu", type: "vocab", front: "いつ", reading: "itsu", meaning: "when", example: { jp: "テストはいつですか。", en: "When is the test?" }, drill: { jp: "いつかえりますか。", en: "When are you going home?" }, accept: ["what time (day)", "at what time", "what day"], hint: "I-tsu — two beats, つ is tsu. ⚠️ It breaks the pattern — there is no これ-style set behind it and no ど at the front. ⚠️ It needs NO particle: いつかえりますか, never いつにかえりますか." },
        { id: "ja-u19l4-do", type: "vocab", front: "どう", reading: "dō", meaning: "how (what it's like)", example: { jp: "にほんはどうですか。", en: "How is Japan?" }, drill: { jp: "おちゃはどうですか。", en: "How about some tea?" }, accept: ["how about", "in what way", "what about"], hint: "DOH — two beats: do-o. ⚠️ It asks what something is LIKE — にほんはどうですか. It is ALSO how you offer something: おちゃはどうですか means would you like tea. For method you need どうやって." },
        { id: "ja-u19l4-doshite", type: "vocab", front: "どうして", reading: "dōshite", meaning: "why", example: { jp: "どうしてですか。", en: "Why is that?" }, drill: { jp: "どうしてあれがすきですか。", en: "Why do you like that one?" }, accept: ["how come", "for what reason", "what for"], hint: "doh-SHI-te — four beats: do-o-shi-te. ⚠️ Japanese has three whys: どうして neutral, なんで casual, なぜ formal and written. ⚠️ A bare どうして？ can sound like an accusation — soften it with です." },
        { id: "ja-u19l4-doyatte", type: "vocab", front: "どうやって", reading: "dōyatte", meaning: "how (by what means)", example: { jp: "どうやっていきますか。", en: "How do you get there?" }, drill: { jp: "どうやってかえりますか。", en: "How do you get home?" }, accept: ["how", "in what way", "by what means"], hint: "どう asks what something is LIKE; どうやって asks by what METHOD. どうやってかきますか = how do you write it?" },
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
      canDo: "Join sentences with でも (but), そして (and then), それから (after that), だから (so), じゃあ and さて (well then).",
      items: [
        { id: "ja-u19l5-demo", type: "vocab", front: "でも", reading: "demo", meaning: "but", example: { jp: "あついです。でも、いきます。", en: "It's hot, but I'll go." }, drill: { jp: "たかいです。でも、かいます。", en: "It's expensive, but I'll buy it." }, accept: ["however", "though", "even so"], hint: "DE-mo — two beats. ⚠️ It starts a NEW sentence — ～です。でも、～. It cannot join two clauses in the middle the way English but does; for that Japanese uses が or けど. ⚠️ Attached to a question word it means any: だれでも, anyone." },
        { id: "ja-u19l5-soshite", type: "vocab", front: "そして", reading: "soshite", meaning: "and then", example: { jp: "たべます。そして、ねます。", en: "I eat, and then sleep." }, drill: { jp: "ほんをよみます。そして、ねます。", en: "I read a book, and then I sleep." }, accept: ["and", "also", "furthermore", "next"], hint: "so-SHI-te — three beats. ⚠️ It joins SENTENCES, not nouns — と does nouns. Use そして when the second thing follows on; それから, in the next card, puts more weight on the order of events." },
        { id: "ja-u19l5-sorekara", type: "vocab", front: "それから", reading: "sorekara", meaning: "after that", example: { jp: "べんきょうします。それから、テレビをみます。", en: "I study, and after that watch TV." }, drill: { jp: "ごはんをたべます。それから、さんぽをします。", en: "I eat a meal, and after that I take a walk." }, accept: ["then", "and then", "next", "afterwards"], hint: "so-re-KA-ra — four beats, tapped r. それ, that, plus から, from — from that point on. ⚠️ Stronger on sequence than そして: それから says this happened NEXT, not merely also." },
        { id: "ja-u19l5-dakara", type: "vocab", front: "だから", reading: "dakara", meaning: "so", example: { jp: "あついです。だから、みずをのみます。", en: "It's hot, so I drink water." }, drill: { jp: "さむいです。だから、うちにいます。", en: "It's cold, so I'm staying home." }, accept: ["therefore", "that's why", "and so", "hence"], hint: "da-KA-ra — three beats, tapped r. ⚠️ It gives the REASON for what follows, and it is blunt — to a teacher or a boss use ですから instead. The pattern is cause。だから、result." },
        { id: "ja-u19l5-ja", type: "vocab", front: "じゃあ", reading: "jā", meaning: "well then", example: { jp: "じゃあ、いきます。", en: "Well then, I'll go." }, drill: { jp: "じゃあ、かえります。", en: "Well then, I'm off home." }, accept: ["well", "in that case", "so then", "right then"], hint: "JAH — two beats: ja-a, held. A contraction of では. ⚠️ Casual, and it is how most Japanese conversations END — じゃあ、また, well then, see you. ⚠️ Not the じゃ of じゃないです, which is a different contraction." },
        { id: "ja-u19l5-sate", type: "vocab", front: "さて", reading: "sate", meaning: "now then", example: { jp: "さて、かえります。", en: "Right then, I’m heading home." }, drill: { jp: "さて、しごとをします。", en: "Right then, I'll get to work." }, accept: ["well then", "right then", "so then", "anyway"], hint: "さて closes what you were doing and opens the next thing. じゃあ does the same job in casual speech; さて is the one you write." },
      ],
    },
  ],
};
