// Unit 23 — きもち・ようす ("Feelings & qualities") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// ─────────────────────────────────────────────────────────────────────────────
// NOT registered in index.js — not seeded, not on the Ladder, does not touch A1.
// Activate (add UNIT23 to UNITS in index.js) only once A1 is native-reviewed.
// ─────────────────────────────────────────────────────────────────────────────
// N4 adjectives — the most useful vocab class after verbs, and fully model-honest:
// they're taught as dictionary-form vocab (the い/な conjugation was covered in A1
// U21). Grouped emotions → character → physical qualities → judgments. Every example
// uses only A1 vocab + A1 grammar (です / な / basic particles) — no conjugation.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT23 = {
  id: "ja-u23",
  lang: "ja",
  title: "きもち・ようす",
  order: 23,
  stage: "a2",
  lessons: [
    // Lesson 1: emotions (い-adjectives)
    {
      id: "ja-u23l1",
      unit: 23,
      lesson: 1,
      title: "How you feel",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how you feel: うれしい かなしい さびしい こわい ねむい うるさい.",
      items: [
        { id: "ja-u23l1-ureshii", type: "vocab", front: "うれしい", reading: "ureshii", meaning: "happy", example: { jp: "とてもうれしいです。", en: "I'm very happy." }, drill: { jp: "きょうはうれしいです。", en: "I'm happy today." }, accept: ["glad", "delighted", "pleased"], hint: "u-re-SHEE — four beats: u-re-shi-i, tapped r. An い-adjective. ⚠️ It is YOUR OWN momentary gladness — たのしい is an enjoyable activity, and しあわせ is lasting happiness. You cannot use うれしい about someone else's feelings without hedging." },
        { id: "ja-u23l1-kanashii", type: "vocab", front: "かなしい", reading: "kanashii", meaning: "sad", example: { jp: "かなしいえいがです。", en: "It's a sad movie." }, drill: { jp: "かなしいうたをききます。", en: "I listen to a sad song." }, accept: ["sorrowful", "unhappy", "mournful"], hint: "ka-na-SHEE — four beats. An い-adjective, the opposite of うれしい. ⚠️ Like うれしい it is a feeling you report about yourself; for a sad STORY Japanese is happy to use it too — かなしいえいが." },
        { id: "ja-u23l1-sabishii", type: "vocab", front: "さびしい", reading: "sabishii", meaning: "lonely", example: { jp: "ひとりでさびしいです。", en: "I'm lonely on my own." }, drill: { jp: "ふゆはさびしいです。", en: "Winter is lonely." }, accept: ["lonesome", "sad (alone)", "forlorn"], hint: "sa-bi-SHEE — four beats. An い-adjective. ⚠️ It describes a PLACE as well as a person — さびしいまち is a deserted town. Also said and written さみしい, and both are correct." },
        { id: "ja-u23l1-kowai", type: "vocab", front: "こわい", reading: "kowai", meaning: "scary", example: { jp: "いぬがこわいです。", en: "Dogs are scary to me." }, drill: { jp: "こわいえいがをみます。", en: "I watch a scary film." }, accept: ["frightening", "afraid of", "frightened"], hint: "ko-WAI — three beats. 🚨 ONE WORD FOR BOTH SIDES: いぬがこわい means dogs are scary AND I'm scared of dogs — Japanese does not split frightening from frightened. The thing feared takes が." },
        { id: "ja-u23l1-nemui", type: "vocab", front: "ねむい", reading: "nemui", meaning: "sleepy", example: { jp: "あさはねむいです。", en: "I'm sleepy in the morning." }, drill: { jp: "よるはねむいです。", en: "I'm sleepy at night." }, accept: ["drowsy", "tired", "half asleep"], hint: "ne-MUI — three beats. An い-adjective, built on ねます from u9. ⚠️ It is FEELING sleepy, not being asleep — asleep is ねています. ねぶそく is lack of sleep." },
        { id: "ja-u23l1-urusai", type: "vocab", front: "うるさい", reading: "urusai", meaning: "noisy", example: { jp: "まちがうるさいです。", en: "The town is noisy." }, drill: { jp: "うるさいこどもです。", en: "It's a noisy child." }, accept: ["loud", "annoying", "clamorous"], hint: "u-ru-SAI — four beats, tapped r. ⚠️ The opposite of しずか. ⚠️ Said sharply at a person, うるさい！ means shut up — it is one of the bluntest words in this course, so keep it for the stereo." },
      ],
    },
    // Lesson 2: character (な-adjectives)
    {
      id: "ja-u23l2",
      unit: 23,
      lesson: 2,
      title: "What someone's like",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe character with な-adjectives: しんせつ まじめ ゆうめい にぎやか ていねい へん.",
      items: [
        { id: "ja-u23l2-shinsetsu", type: "vocab", front: "しんせつ", reading: "shinsetsu", meaning: "kind", example: { jp: "せんせいはしんせつです。", en: "The teacher is kind." }, drill: { jp: "しんせつなひとです。", en: "He's a kind person." }, accept: ["nice", "helpful", "considerate"], hint: "shin-SE-tsu — four beats, つ is tsu. 🚨 A な-ADJECTIVE: しんせつなひと, never しんせつひと. ⚠️ It is kindness in ACTION — doing something for you — rather than a warm personality, which is やさしい." },
        { id: "ja-u23l2-majime", type: "vocab", front: "まじめ", reading: "majime", meaning: "serious", example: { jp: "かれはまじめです。", en: "He is serious." }, drill: { jp: "まじめながくせいです。", en: "She's a serious student." }, accept: ["diligent", "earnest", "hardworking"], hint: "ma-JI-me — three beats. A な-adjective. ⚠️ It is a COMPLIMENT in Japanese — まじめ means conscientious and reliable, not humourless. The opposite, ふまじめ, is a real criticism." },
        { id: "ja-u23l2-yumei", type: "vocab", front: "ゆうめい", reading: "yūmei", meaning: "famous", example: { jp: "ゆうめいなみせです。", en: "It's a famous shop." }, drill: { jp: "ゆうめいなせんせいです。", en: "He's a famous teacher." }, accept: ["well-known", "renowned", "celebrated"], hint: "YOO-mei — four beats: yu-u-me-i, with えい as two vowels. A な-adjective. ⚠️ ゆう is to have and めい is a name — literally has-a-name. The same めい as 名 in u14." },
        { id: "ja-u23l2-nigiyaka", type: "vocab", front: "にぎやか", reading: "nigiyaka", meaning: "lively", example: { jp: "まちはにぎやかです。", en: "The town is lively." }, drill: { jp: "にぎやかなまちがすきです。", en: "I like a lively town." }, accept: ["bustling", "busy (lively)", "crowded"], hint: "ni-gi-YA-ka — four beats, hard g. A な-adjective. ⚠️ ALWAYS POSITIVE — a にぎやかなまち is pleasantly alive. Unpleasantly loud is うるさい, in the previous lesson, and the two are not interchangeable." },
        { id: "ja-u23l2-teinei", type: "vocab", front: "ていねい", reading: "teinei", meaning: "polite", example: { jp: "かのじょはていねいです。", en: "She is polite." }, drill: { jp: "ていねいなてがみです。", en: "It's a polite letter." }, accept: ["courteous", "careful", "respectful"], hint: "TEI-nei — four beats: te-i-ne-i, both えい pairs sounded as two vowels. A な-adjective. ⚠️ It also means CAREFUL and thorough — ていねいにかきます is to write neatly, not politely." },
        { id: "ja-u23l2-hen", type: "vocab", front: "へん", reading: "hen", meaning: "strange", example: { jp: "へんなあじです。", en: "It's a strange taste." }, drill: { jp: "へんなゆめをみました。", en: "I had a strange dream." }, accept: ["weird", "odd", "peculiar"], hint: "HEN — two beats, the ん held. A な-adjective. ⚠️ It carries real judgement — へんなひと is a weirdo, not an interesting person. For merely unusual use めずらしい. ⚠️ Also means a side of a shape in maths." },
      ],
    },
    // Lesson 3: physical qualities (い-adjectives)
    {
      id: "ja-u23l3",
      unit: 23,
      lesson: 3,
      title: "What things are like",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe things: つよい よわい かたい やわらかい おもい かるい.",
      items: [
        { id: "ja-u23l3-tsuyoi", type: "vocab", front: "つよい", reading: "tsuyoi", meaning: "strong", example: { jp: "かぜがつよいです。", en: "The wind is strong." }, drill: { jp: "つよいおちゃをのみます。", en: "I drink strong tea." }, accept: ["powerful", "tough", "intense"], hint: "tsu-YOI — three beats, つ is tsu. An い-adjective. ⚠️ It stretches a long way: strong wind, strong tea, good at something (～につよい). The opposite is よわい, the next card." },
        { id: "ja-u23l3-yowai", type: "vocab", front: "よわい", reading: "yowai", meaning: "weak", example: { jp: "からだがよわいです。", en: "My body is weak." }, drill: { jp: "よわいいぬです。", en: "It's a weak dog." }, accept: ["frail", "feeble", "faint"], hint: "yo-WAI — three beats. The opposite of つよい. ⚠️ ～によわい means BAD at or easily affected by — おさけによわい is being a lightweight. ⚠️ Note the drill: よわいいぬ runs two い together, and each gets its own beat." },
        { id: "ja-u23l3-katai", type: "vocab", front: "かたい", reading: "katai", meaning: "hard", example: { jp: "このパンはかたいです。", en: "This bread is hard." }, drill: { jp: "かたいにくをたべます。", en: "I eat tough meat." }, accept: ["stiff", "tough", "firm"], hint: "ka-TAI — three beats. ⚠️ TEXTURE-hard, not difficulty-hard: a hard exam is むずかしい, from u21. ⚠️ Of a person かたい means rigid or formal. The opposite is やわらかい." },
        { id: "ja-u23l3-yawarakai", type: "vocab", front: "やわらかい", reading: "yawarakai", meaning: "soft", example: { jp: "やわらかいベッドです。", en: "It's a soft bed." }, drill: { jp: "やわらかいパンがすきです。", en: "I like soft bread." }, accept: ["tender", "gentle", "supple"], hint: "ya-wa-ra-KAI — five beats, tapped r. The longest adjective in the unit, and every beat is sounded. ⚠️ It covers soft bread, tender meat and a gentle manner. The opposite is かたい." },
        { id: "ja-u23l3-omoi", type: "vocab", front: "おもい", reading: "omoi", meaning: "heavy", example: { jp: "かばんがおもいです。", en: "The bag is heavy." }, drill: { jp: "おもいほんをもちます。", en: "I carry a heavy book." }, accept: ["weighty", "serious", "burdensome"], hint: "o-MOI — three beats. ⚠️ Also means grave — おもいびょうき is a serious illness. ⚠️ Said aloud it is close to おもい, a thought, from おもう — the noun and the adjective share every sound." },
        { id: "ja-u23l3-karui", type: "vocab", front: "かるい", reading: "karui", meaning: "light (in weight)", example: { jp: "このかさはかるいです。", en: "This umbrella is light." }, drill: { jp: "かるいかばんをかいます。", en: "I buy a light bag." }, accept: ["light (weight)", "lightweight", "slight"], hint: "ka-RUI — three beats, tapped r. The opposite of おもい. ⚠️ WEIGHT only — light in colour is うすい and a light in the room is でんき. ⚠️ Of a person かるい means flippant, which is not a compliment." },
      ],
    },
    // Lesson 4: judgments (mixed)
    {
      id: "ja-u23l4",
      unit: 23,
      lesson: 4,
      title: "Good or bad?",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge things: べんり ふべん あんぜん あぶない たいせつ だいじょうぶ.",
      items: [
        { id: "ja-u23l4-benri", type: "vocab", front: "べんり", reading: "benri", meaning: "convenient", example: { jp: "コンビニはべんりです。", en: "Convenience stores are handy." }, drill: { jp: "べんりなみせです。", en: "It's a handy shop." }, accept: ["handy", "useful", "practical"], hint: "BEN-ri — three beats, tapped r. A な-adjective. ⚠️ It describes a THING or a place, never a person — a helpful person is しんせつ. Its opposite ふべん is the next card, built with the negative prefix ふ." },
        { id: "ja-u23l4-fuben", type: "vocab", front: "ふべん", reading: "fuben", meaning: "inconvenient", example: { jp: "このまちはふべんです。", en: "This town is inconvenient." }, drill: { jp: "ふべんなえきです。", en: "It's an inconvenient station." }, accept: ["not handy", "awkward", "impractical"], hint: "fu-BEN — three beats, soft blown ふ. A な-adjective. ⚠️ ふ is the negative prefix stuck in front of べんり, and the same ふ builds ふあんぜん, unsafe, from あんぜん in this very lesson." },
        { id: "ja-u23l4-anzen", type: "vocab", front: "あんぜん", reading: "anzen", meaning: "safe", example: { jp: "にほんはあんぜんです。", en: "Japan is safe." }, drill: { jp: "あんぜんなくるまです。", en: "It's a safe car." }, accept: ["secure", "safety", "out of danger"], hint: "an-ZEN — four beats, the ん held, ぜ buzzed. A な-adjective AND a noun — あんぜんです and あんぜんのために both work. ⚠️ Its opposite is あぶない, an い-adjective, so the pair does not match grammatically." },
        { id: "ja-u23l4-abunai", type: "vocab", front: "あぶない", reading: "abunai", meaning: "dangerous", example: { jp: "よるはあぶないです。", en: "It's dangerous at night." }, drill: { jp: "あぶないしごとです。", en: "It's a dangerous job." }, accept: ["risky", "watch out", "unsafe"], hint: "a-bu-NAI — four beats. An い-adjective. 🚨 SHOUTED, あぶない！ MEANS LOOK OUT — it is the warning you will hear on a Japanese building site or platform. The noun opposite is あんぜん." },
        { id: "ja-u23l4-taisetsu", type: "vocab", front: "たいせつ", reading: "taisetsu", meaning: "important", example: { jp: "かぞくはたいせつです。", en: "Family is important." }, drill: { jp: "たいせつなてがみです。", en: "It's an important letter." }, accept: ["precious", "valuable", "cherished"], hint: "tai-SE-tsu — four beats, つ is tsu. A な-adjective. ⚠️ It carries AFFECTION — たいせつなひと is someone dear to you. For important-as-in-consequential Japanese uses じゅうよう." },
        { id: "ja-u23l4-daijobu", type: "vocab", front: "だいじょうぶ", reading: "daijōbu", meaning: "okay", example: { jp: "わたしはだいじょうぶです。", en: "I'm okay." }, drill: { jp: "あしたはだいじょうぶです。", en: "Tomorrow is fine." }, accept: ["all right", "fine", "no problem"], hint: "dai-JOH-bu — five beats: da-i-jo-o-bu, じょ lengthened. A な-adjective. 🚨 THE MOST USEFUL WORD IN THE UNIT: it answers are you hurt, is this seat free, and do you want a bag — and だいじょうぶです is also how you politely decline one." },
      ],
    },
  ],
};
