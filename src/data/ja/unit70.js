// Unit 70 — かんじょう・こころ ("Emotions & the mind") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 emotions & psychology vocab (feelings/mind nouns + emotional adjectives) not
// yet taught elsewhere. Modeled on the A1/A2 vocab units. Examples use only
// previously-introduced vocab + basic grammar so the unit slots on top cleanly.
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12) — this header used to say the unit was "flagged for
// the batch native review", which read as a gate that does not exist.
export const UNIT70 = {
  id: "ja-u70",
  lang: "ja",
  title: "かんじょう・こころ",
  order: 70,
  stage: "a2",
  lessons: [
    // Lesson 1: feelings & emotions
    {
      id: "ja-u70l1",
      unit: 70,
      lesson: 1,
      title: "Feelings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what you feel: かんじょう きもち なみだ こうふん かんどう しあわせ.",
      items: [
        { id: "ja-u70l1-kanjo", type: "vocab", front: "かんじょう", reading: "kanjō", meaning: "emotion", example: { jp: "かんじょうがかおにでます。", en: "My emotions show on my face." }, drill: { jp: "かんじょうをつたえます。", en: "I convey my emotions." }, accept: ["feeling", "emotions", "sentiment", "emotional state"], hint: "kanjō — emotion as a category, the clinical word: かんじょうてき means 'emotional'. Long ō: kan-jō. For how you feel right now, Japanese reaches for きもち on the next card instead." },
        { id: "ja-u70l1-kimochi", type: "vocab", front: "きもち", reading: "kimochi", meaning: "feeling", example: { jp: "とてもいいきもちです。", en: "It feels really good." }, drill: { jp: "きもちがかわります。", en: "My feelings change." }, accept: ["mood", "feelings", "how one feels", "sensation"], hint: "kimochi — き (spirit) + もち (holding): what your spirit is holding. It is a feeling ABOUT something, where きぶん from u48 is your general state. きもちいい is the everyday 'that feels nice'." },
        { id: "ja-u70l1-namida", type: "vocab", front: "なみだ", reading: "namida", meaning: "tears", example: { jp: "なみだがでます。", en: "Tears come out." }, drill: { jp: "なみだがえいがででました。", en: "Tears came during the movie." }, accept: ["a tear", "tear", "weeping", "crying"], hint: "namida — Japanese does not say 'I cry' nearly as often as 'tears come out': なみだがでる. The tears take が and arrive on their own, which is the same hands-off grammar as the whole of u69." },
        { id: "ja-u70l1-kofun", type: "vocab", front: "こうふん", reading: "kōfun", meaning: "excitement", example: { jp: "しあいでこうふんしました。", en: "I got excited at the game." }, drill: { jp: "コンサートでこうふんします。", en: "I get excited at the concert." }, accept: ["getting excited", "excited", "being worked up", "a rush"], hint: "kōfun — こう (rise) + ふん (stir up): getting worked up. Long ō: kō-fun. Used with します, and the place or cause takes で. It is physical arousal of the nerves, not delight — for that use たのしい." },
        { id: "ja-u70l1-kando", type: "vocab", front: "かんどう", reading: "kandō", meaning: "being moved", example: { jp: "えいがにかんどうしました。", en: "I was moved by the movie." }, drill: { jp: "せんせいのことばにかんどうします。", en: "I'm moved by the teacher's words." }, accept: ["being deeply moved", "being touched", "feeling stirred", "deeply affected"], hint: "kandō — かん (feel) + どう (move): feeling moved. Long ō: kan-dō. What moves you takes に. かんどうてきなえいが is a moving film — the kind that leaves the なみだ two cards back." },
        { id: "ja-u70l1-shiawase", type: "vocab", front: "しあわせ", reading: "shiawase", meaning: "happiness", example: { jp: "いま、とてもしあわせです。", en: "Right now I am very happy." }, drill: { jp: "かぞくがいてしあわせです。", en: "I'm happy to have my family." }, accept: ["happy", "good fortune", "contentment", "blessedness"], hint: "shiawase — deep, settled happiness about your life, both a noun and a な-adjective. うれしい from u23 is the flash of gladness at one event; しあわせ is the state you are in. A wedding speech uses this word." },
      ],
    },
    // Lesson 2: hopes & the heart
    {
      id: "ja-u70l2",
      unit: 70,
      lesson: 2,
      title: "Hopes & the heart",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about hopes and interest: きぼう きたい こうかい きょうみ あいじょう こころ.",
      items: [
        { id: "ja-u70l2-kibo", type: "vocab", front: "きぼう", reading: "kibō", meaning: "hope", example: { jp: "まだきぼうがあります。", en: "There is still hope." }, drill: { jp: "あしたのきぼうをはなします。", en: "I talk about my hopes for tomorrow." }, accept: ["wish", "aspiration", "what one hopes for", "a request"], hint: "kibō — hope, and also a stated preference: on a form, きぼう is the box for what you would like. Long ō: ki-bō. It is what you want; きたい on the next card is what you expect to get." },
        { id: "ja-u70l2-kitai", type: "vocab", front: "きたい", reading: "kitai", meaning: "expectation", example: { jp: "こどもにきたいします。", en: "I have high hopes for the child." }, drill: { jp: "あたらしいみせにきたいします。", en: "I have high hopes for the new shop." }, accept: ["hope", "anticipation", "looking forward to", "high hopes"], hint: "kitai — expecting good things of someone or something, so what you expect of takes に. Heavier than it looks in Japan: きたいしています to a junior colleague is real pressure, not just encouragement." },
        { id: "ja-u70l2-kokai", type: "vocab", front: "こうかい", reading: "kōkai", meaning: "regret", example: { jp: "あとでこうかいします。", en: "I will regret it later." }, drill: { jp: "そのしごとをこうかいします。", en: "I regret that job." }, accept: ["regretting", "remorse", "wishing one hadn't", "rueing"], hint: "kōkai — regret for something YOU did or failed to do. Long ō: kō-kai. ざんねん from u48 is a shame about how things turned out; こうかい puts the fault on yourself." },
        { id: "ja-u70l2-kyomi", type: "vocab", front: "きょうみ", reading: "kyōmi", meaning: "interest", example: { jp: "にほんにきょうみがあります。", en: "I am interested in Japan." }, drill: { jp: "きょうみがないです。", en: "I have no interest." }, accept: ["curiosity", "interested", "being interested", "fascination"], hint: "kyōmi — the subject you are interested in takes に, and the interest itself takes が: Xにきょうみがあります. Long ō: kyō-mi. Unlike English you cannot say 'I interest' — you HAVE interest." },
        { id: "ja-u70l2-aijo", type: "vocab", front: "あいじょう", reading: "aijō", meaning: "affection", example: { jp: "こどもにあいじょうがあります。", en: "I have affection for the child." }, drill: { jp: "あいじょうのあるりょうりです。", en: "It's cooking made with love." }, accept: ["love", "tenderness", "devotion", "warm feeling"], hint: "aijō — あい (love) + じょう (feeling): love as care given, for a child, a pet, your work. Long ō: ai-jō. Romantic love you declare is あい or こい; あいじょう is the warmth you put into something." },
        { id: "ja-u70l2-kokoro", type: "vocab", front: "こころ", reading: "kokoro", meaning: "heart", example: { jp: "こころがあたたかいです。", en: "He is warm-hearted." }, drill: { jp: "こころがつよいひとです。", en: "He is a strong-hearted person." }, accept: ["mind", "spirit", "the inner self", "one's heart"], hint: "kokoro — the heart as the seat of feeling AND thought, so it covers English 'heart' and 'mind' at once. The organ in your chest is しんぞう. こころがひろい = broad-minded, generous." },
      ],
    },
    // Lesson 3: impressions & character
    {
      id: "ja-u70l3",
      unit: 70,
      lesson: 3,
      title: "Impressions & character",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe impressions and traits: いんしょう せいかく たいど むちゅう ふまん かんしん.",
      items: [
        { id: "ja-u70l3-insho", type: "vocab", front: "いんしょう", reading: "inshō", meaning: "impression", example: { jp: "かれのいんしょうはいいです。", en: "My impression of him is good." }, drill: { jp: "みせのいんしょうがわるいです。", en: "My impression of the shop is bad." }, accept: ["impressions", "image", "the feel of something", "first impression"], hint: "inshō — the impression a thing leaves on you. Long ō: in-shō. いんしょうてき means 'striking, memorable'. Note かんしん two cards along is admiration you feel; いんしょう is merely what registered." },
        { id: "ja-u70l3-seikaku", type: "vocab", front: "せいかく", reading: "seikaku", meaning: "personality", example: { jp: "あかるいせいかくです。", en: "She has a cheerful personality." }, drill: { jp: "おとなしいせいかくです。", en: "She has a quiet personality." }, accept: ["character", "nature", "temperament", "disposition"], hint: "seikaku — someone's settled personality, the thing the whole of u48 describes. ⚠️ A different せいかく, spelled with other kanji, means 'accurate', so the context decides. Short vowels: sei-ka-ku." },
        { id: "ja-u70l3-taido", type: "vocab", front: "たいど", reading: "taido", meaning: "attitude", example: { jp: "たいどがわるいです。", en: "His attitude is bad." }, drill: { jp: "たいどはいいです。", en: "His attitude is good." }, accept: ["manner", "behavior", "bearing", "how one carries oneself"], hint: "taido — the attitude you SHOW, visible in how you speak and stand, as against せいかく which is who you are underneath. たいどがわるい is a standard complaint about service." },
        { id: "ja-u70l3-muchu", type: "vocab", front: "むちゅう", reading: "muchū", meaning: "absorbed", example: { jp: "ゲームにむちゅうです。", en: "I am crazy about games." }, drill: { jp: "ほんにむちゅうです。", en: "I am absorbed in a book." }, accept: ["crazy about", "engrossed", "lost in", "obsessed with"], hint: "muchū — む (without) + ちゅう (middle): literally 'in a dream', so lost to the world. Long ū: mu-chū. What absorbs you takes に. Stronger than すき; it means you have stopped noticing the time." },
        { id: "ja-u70l3-fuman", type: "vocab", front: "ふまん", reading: "fuman", meaning: "dissatisfaction", example: { jp: "しごとにふまんがあります。", en: "I have complaints about my job." }, drill: { jp: "がくせいのふまんをききます。", en: "I listen to the students' complaints." }, accept: ["discontent", "complaint", "grievance", "being unhappy with"], hint: "fuman — ふ (not) + まん (full): not satisfied, the exact negative of まんぞく from u48. Both a noun and a な-adjective. Same ふ-prefix trick as ふあん in u48." },
        { id: "ja-u70l3-kanshin", type: "vocab", front: "かんしん", reading: "kanshin", meaning: "admiration", example: { jp: "せいとにかんしんしました。", en: "I was impressed by the student." }, drill: { jp: "かのじょのしごとにかんしんします。", en: "I admire her work." }, accept: ["being impressed", "to admire", "respect for", "being struck by"], hint: "kanshin — admiration at someone doing well, and it looks slightly DOWNWARD, so a boss かんしんします about a junior rather than the reverse. What impresses you takes に. ⚠️ A same-sounding かんしん also means 'concern'." },
      ],
    },
    // Lesson 4: emotional adjectives
    {
      id: "ja-u70l4",
      unit: 70,
      lesson: 4,
      title: "How it feels",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe emotional states: なつかしい うらやましい つらい くるしい ふしぎ ゆかい.",
      items: [
        { id: "ja-u70l4-natsukashii", type: "vocab", front: "なつかしい", reading: "natsukashii", meaning: "nostalgic", example: { jp: "むかしがなつかしいです。", en: "I miss the old days." }, drill: { jp: "がっこうのおもいでがなつかしいです。", en: "My school memories are dear to me." }, accept: ["dear", "missed", "fondly remembered", "evoking nostalgia"], hint: "natsukashii — ⚠️ it describes the THING, not you: なつかしい is said OF the old photo, where English says 'I feel nostalgic'. It is warm, never sad. Pairs naturally with おもいで from u52." },
        { id: "ja-u70l4-urayamashii", type: "vocab", front: "うらやましい", reading: "urayamashii", meaning: "envious", example: { jp: "ともだちがうらやましいです。", en: "I envy my friend." }, drill: { jp: "あにのくるまがうらやましいです。", en: "I envy my brother's car." }, accept: ["jealous", "enviable", "I envy that", "lucky you"], hint: "urayamashii — again the THING is うらやましい, so ともだちがうらやましい means 'my friend is enviable'. It is light and friendly: say it to a colleague about their holiday and it reads as a compliment, not bitterness." },
        { id: "ja-u70l4-tsurai", type: "vocab", front: "つらい", reading: "tsurai", meaning: "painful (hard to bear)", example: { jp: "しごとがつらいです。", en: "Work is hard on me." }, drill: { jp: "あついなつはつらいです。", en: "A hot summer is hard to bear." }, accept: ["hard", "tough", "hard to take", "trying"], hint: "tsurai — emotionally hard to endure: a job, a loss, a hot month. いたい is physical pain in a body part; つらい is what wears you down. Start with tsu as a single sound." },
        { id: "ja-u70l4-kurushii", type: "vocab", front: "くるしい", reading: "kurushii", meaning: "distressing", example: { jp: "むねがくるしいです。", en: "My chest feels tight." }, drill: { jp: "あつくてくるしいです。", en: "It's so hot it's oppressive." }, accept: ["painful", "suffering", "stifling", "hard to bear physically"], hint: "kurushii — the suffocating kind of difficulty: a tight chest, airless heat, money troubles. Where つらい on the card before is the heart, くるしい reaches the body first." },
        { id: "ja-u70l4-fushigi", type: "vocab", front: "ふしぎ", reading: "fushigi", meaning: "mysterious", example: { jp: "ふしぎなゆめをみました。", en: "I had a strange dream." }, drill: { jp: "ふしぎなはなしをききます。", en: "I hear a mysterious story." }, accept: ["strange", "wonder", "puzzling", "uncanny"], hint: "fushigi — ふ (not) + しぎ (thinkable): beyond working out. な-adjective. Curious and wondering rather than unsettling — へん is the word for plain weird. Another ふ-negative, like ふあん and ふまん." },
        { id: "ja-u70l4-yukai", type: "vocab", front: "ゆかい", reading: "yukai", meaning: "cheerful (pleasant and fun)", example: { jp: "ゆかいなともだちです。", en: "He is a fun friend." }, drill: { jp: "ゆかいなばんぐみをみます。", en: "I watch a fun programme." }, accept: ["pleasant", "fun", "jolly", "good-humoured"], hint: "yukai — ゆ (pleasant) + かい (feeling): good-humoured and fun to be around. な-adjective. たのしい is how YOU feel; ゆかい describes the person or thing causing it. ふゆかい, with the ふ, is 'unpleasant'." },
      ],
    },
  ],
};
