// JA Unit 1 — はじめまして — pre-A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Japanese, and the first unit of the whole project. Japanese
// keeps the FULL three-strand shape (BUILD-BRIEF-language-blueprint.md §1): a
// script spine that runs for seven pre-A1 units, thematic vocab, and grammar —
// where a Latin-script language collapses Strand A to a single sounds unit.
//
// ⚠ JAPANESE IS NOT THE TEMPLATE. It was first, so the scaffold script encodes
// its shape — three interleaved strands, "Grammar 2 — verbs and particles", and
// so on. That is HISTORY, NOT A STANDARD (CLAUDE.md, "No front language"). A new
// language takes its structure from the language plus CEFR: German has case, so
// its A1 grammar is nominative/accusative, not "particles", which names a slot
// German does not have. Copy the RIGOUR of this file, never its unit list.
//
// Corpus as of 2026-09-17: 208 units — pre-a1 7 / a1 36 / a2 55 / b1 57 / b2 53.
// 5,012 items: 175 kana, 792 kanji, 4,045 vocab. COUNT BY LOADING ja/index.js,
// not by grepping `type: "kana"` — a COMMENT in unit16.js matches that string and
// inflates the kana count by one. This header shipped 176/5,013 for exactly that.
//
// ─────────────────────────────────────────────────────────────────────────────
// AUTHORING CONVENTIONS FOR JAPANESE — binding on ALL ja units, every block.
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. THREE ITEM TYPES, AND THEY ARE NOT INTERCHANGEABLE.
//      kana  — one glyph. meaning: null, example: null. `reading` is its romaji,
//              `hint` carries the mnemonic. 175 of them: 142 across u1–u6, plus the
//              33 yōon digraphs in u16. u7 has NO kana items — it is vocab only.
//      kanji — one character, taught as a character. meaning AND example are
//              REQUIRED. 792 of them.
//      vocab — a word. meaning + example required. 4,045 of them.
//    `glyph` exists in the contract for Latin languages' accent cards. DO NOT use
//    it in ja: `kana` already is that type, and it additionally carries stroke
//    data and gojuon ordering, which `glyph` deliberately does not.
//
// 2. THE VOCAB FRONT IS WRITTEN IN KANA — with one systematic exception.
//    93.3% of vocab fronts are kana, at EVERY band including B2: u156 (b2) teaches
//    ろんてん, not 論点. (u150 is b1, not b2 — めんせき is its word.) The learner
//    reads the word; the kanji is taught separately. The exception is the かんじ units
//    from u100 on (u100 かんじ・こころ, u102 かんじ・ことば, …), where the front IS
//    the compound (愛情, "affection") and the reading carries the romaji.
//    Measured: 272 kanji-bearing vocab fronts, ALL inside u100–u187, and inside
//    those units it is 8 of 8 — never mixed. Match the unit you are in.
//
// 3. A KANJI ITEM AND A KANJI-FRONT VOCAB ITEM ARE DIFFERENT THINGS.
//    愛情 as a `vocab` item is a word and needs no stroke data. Its characters
//    as `kanji` items are glyphs and each needs KANJIVG. Do not merge them.
//
// 4. READINGS ARE ROMAJI AND USE MACRONS FOR LONG VOWELS — ō ū ā ē ī.
//    ohayō, sayōnara, arigatō. 1,027 readings in the corpus carry one.
//    This is JA-SPECIFIC: a Latin-script language's `reading` is its ASCII fold and
//    the contract holds it to [a-z]+. Do not "fix" a macron here into oo/ou.
//
// 5. A KANA FRONT DOES NOT BLOCK A VOCAB FRONT. Deliberate, and easy to get wrong.
//    contract.js:315 checks word-front uniqueness vocab/kanji against vocab/kanji,
//    NEVER against kana, "that kana→word reuse is intentional". So the kana か
//    (u1) and the question particle か (u19) coexist, as do し, な, ね, の — 19 pairs
//    in all. What you may NOT do is teach the same WORD twice: one word, one home.
//    Uniqueness is SCOPED PER LANGUAGE — Spanish "no" and Italian "no" are
//    unrelated words and must not collide.
//
// 6. VERBS ARE TAUGHT IN THE ます-FORM, and that is the front.
//    front つたえます (tsutaemasu), not the dictionary form. Polite-first: it is
//    what a beginner can say to a stranger without giving offence. A verb that is
//    drilled carries `group` (godan | ichidan | irregular) and `conjForm`. ⚠ THE
//    conjForm VALUE IS ASCII — "te", "nai", "ta", "tara", "ba", "dict", "potential",
//    "volitional", "passive", "causative", "imperative" — never the kana. A kana
//    conjForm is a HARD validator error (contract.js:217). The kana belongs in the
//    `hint` prose only: "ichidan; drilled in the て-form" with conjForm: "te".
//    ⚠ COMPARE LEXEMES, NOT STRINGS: a ます-form and its dictionary form both validate while
//    being one word with two mastery tracks. A green validator is NOT evidence a
//    front is new. Check ます⇄dictionary, noun⇄noun+する, and X⇄Xです.
//
// 7. GRAMMAR HAS NO ITEM TYPE. Model it as function-word or suffix vocab whose
//    example sentence carries the pattern — は is a `vocab` item at u19l2 with
//    meaning "(topic marker)". Never invent a type for it.
//
// 8. STROKE DATA IS A HARD GATE. A single-character kana front and EVERY kanji
//    front must exist in src/data/kanjivg.js or validate:content errors
//    (contract.js:238, :263). Add the glyph to scripts/fetch-kanjivg.mjs and
//    regenerate. Yōon digraphs (きょ, しゃ) are 2 characters and are EXEMPT —
//    they are taught by reading and never traced.
//
// 9. EVERY EXAMPLE USES ONLY VOCAB ALREADY INTRODUCED at or before its unit.
//    ⚠ lint:curriculum CANNOT CHECK THIS FOR JAPANESE — there are no word
//    boundaries to tokenise. It tokenises examples on letter boundaries
//    (wordPieces, lint.js:143-145, called at :334) and Japanese has none, so ONE
//    token and nothing is ever flagged. MEASURED 2026-09-17 on the full corpus:
//    de 639 scope warnings, es 1,509, fr 659, no 1,144, pt 1,025 — and ja EXACTLY 0.
//    That is not a clean corpus, it is an absent check. This is the one rule in
//    this file with no machine behind it, so it is the one that needs your
//    discipline. Read src/data/ja/TAUGHT-WORDS.md as you write, not after.
//
export const UNIT1 = {
  id: "ja-u1",
  lang: "ja",
  title: "はじめまして",
  order: 1,
  stage: "pre-a1",
  lessons: [
    // Lesson 1: あ row + greetings
    {
      id: "ja-u1l1",
      unit: 1,
      lesson: 1,
      title: "Greetings",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet by time of day, say goodbye, say yes/no.",
      items: [
        { id: "ja-u1l1-a", type: "kana", front: "あ", reading: "a",    meaning: null, example: null, hint: "The very first kana — あ starts it all, just like the letter A." },
        { id: "ja-u1l1-i", type: "kana", front: "い", reading: "i",    meaning: null, example: null, hint: "Two strokes like two EEls swimming side by side — I (ee)." },
        { id: "ja-u1l1-u", type: "kana", front: "う", reading: "u",    meaning: null, example: null, hint: "A small cup with pursed lips — OO, like blowing out a candle." },
        { id: "ja-u1l1-e", type: "kana", front: "え", reading: "e",    meaning: null, example: null, hint: "A person EXercising with arms out — E!" },
        { id: "ja-u1l1-o", type: "kana", front: "お", reading: "o",    meaning: null, example: null, hint: "A stroke with a cross — O, like an open mouth saying OH!" },
        { id: "ja-u1l1-ohayou",     type: "vocab", front: "おはよう",   reading: "ohayō",      meaning: "good morning", example: { jp: "おはよう！",   en: "Good morning!" },  accept: ["morning"] },
        { id: "ja-u1l1-konnichiwa", type: "vocab", front: "こんにちは", reading: "konnichiwa", meaning: "hello",        example: { jp: "こんにちは！", en: "Hello!" },         accept: ["hi", "good afternoon"] },
        { id: "ja-u1l1-sayounara",  type: "vocab", front: "さようなら", reading: "sayōnara",   meaning: "goodbye",      example: { jp: "さようなら。", en: "Goodbye." },        accept: ["bye", "farewell"] },
        { id: "ja-u1l1-hai",        type: "vocab", front: "はい",       reading: "hai",        meaning: "yes",          example: { jp: "はい。",       en: "Yes." },           accept: [] },
        { id: "ja-u1l1-iie",        type: "vocab", front: "いいえ",     reading: "iie",        meaning: "no",           example: { jp: "いいえ。",     en: "No." },            accept: [] },
      ],
    },
    // Lesson 2: か row + everyday essentials
    {
      id: "ja-u1l2",
      unit: 1,
      lesson: 2,
      title: "か row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read and write the か row; say good evening and thank you.",
      items: [
        { id: "ja-u1l2-ka", type: "kana", front: "か", reading: "ka", meaning: null, example: null, hint: "A KAyak paddle slicing through water — KA!" },
        { id: "ja-u1l2-ki", type: "kana", front: "き", reading: "ki", meaning: null, example: null, hint: "Two branches on a tree — like the KEY to KI." },
        { id: "ja-u1l2-ku", type: "kana", front: "く", reading: "ku", meaning: null, example: null, hint: "A bird's beak open, cooing — KU (coo)." },
        { id: "ja-u1l2-ke", type: "kana", front: "け", reading: "ke", meaning: null, example: null, hint: "Like the letter K with an extra stroke — KE-y!" },
        { id: "ja-u1l2-ko", type: "kana", front: "こ", reading: "ko", meaning: null, example: null, hint: "Two curved lips forming the sound KO — KO!" },
        { id: "ja-u1l2-konbanwa", type: "vocab", front: "こんばんは", reading: "konbanwa", meaning: "good evening", example: { jp: "こんばんは！",         en: "Good evening!" },         accept: ["evening"] },
        { id: "ja-u1l2-arigatou", type: "vocab", front: "ありがとう", reading: "arigatō",  meaning: "thank you",    example: { jp: "ありがとう！",         en: "Thank you!" }, drill: { jp: "ありがとうといいます。", en: "I say thank you." },            accept: ["thanks", "ty"] },
        { id: "ja-u1l2-kasa",     type: "vocab", front: "かさ",       reading: "kasa",     meaning: "umbrella",     example: { jp: "かさをどうぞ。",       en: "Please take an umbrella." }, accept: [] },
        { id: "ja-u1l2-kutsu",    type: "vocab", front: "くつ",       reading: "kutsu",    meaning: "shoes",        example: { jp: "あたらしいくつです。", en: "These are new shoes." },  accept: ["shoe"] },
        { id: "ja-u1l2-kodomo",   type: "vocab", front: "こども",     reading: "kodomo",   meaning: "child",        example: { jp: "こどもがすきです。",   en: "I like children." },      accept: ["kid", "children"] },
        { id: "ja-u1l2-kitte",    type: "vocab", front: "きって",     reading: "kitte",    meaning: "stamp",        example: { jp: "きってをください。",   en: "One stamp, please." },    accept: ["postage stamp"] },
      ],
    },
    // Lesson 3: さ row + senses & surroundings
    {
      id: "ja-u1l3",
      unit: 1,
      lesson: 3,
      title: "さ row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read and write the さ row; say excuse me; name things around you.",
      items: [
        { id: "ja-u1l3-sa",  type: "kana", front: "さ", reading: "sa",  meaning: null, example: null, hint: "Someone waving and SAying 'SA!' — two strokes like waving arms." },
        { id: "ja-u1l3-shi", type: "kana", front: "し", reading: "shi", meaning: null, example: null, hint: "A SHI-ning fishhook — the curving tail looks just like a hook." },
        { id: "ja-u1l3-su",  type: "kana", front: "す", reading: "su",  meaning: null, example: null, hint: "A SUbway spiral going underground — SU-bway!" },
        { id: "ja-u1l3-se",  type: "kana", front: "せ", reading: "se",  meaning: null, example: null, hint: "A person bowing to SEe you — a cross with a horizontal sweep." },
        { id: "ja-u1l3-so",  type: "kana", front: "そ", reading: "so",  meaning: null, example: null, hint: "A swooping SO curve — like the word 'so' trailing off." },
        { id: "ja-u1l3-sumimasen", type: "vocab", front: "すみません", reading: "sumimasen", meaning: "excuse me", example: { jp: "すみません！",         en: "Excuse me!" },            accept: ["sorry", "pardon"] },
        { id: "ja-u1l3-sakana",    type: "vocab", front: "さかな",     reading: "sakana",    meaning: "fish",      example: { jp: "さかながすきです。", en: "I like fish." },            accept: [] },
        { id: "ja-u1l3-sushi",     type: "vocab", front: "すし",       reading: "sushi",     meaning: "sushi",     example: { jp: "すしをたべます。",   en: "I eat sushi." },            accept: [] },
        { id: "ja-u1l3-sora",      type: "vocab", front: "そら",       reading: "sora",      meaning: "sky",       example: { jp: "そらがきれいです。", en: "The sky is beautiful." },   accept: [] },
        { id: "ja-u1l3-sensei",    type: "vocab", front: "せんせい",   reading: "sensei",    meaning: "teacher",   example: { jp: "せんせいはいます。", en: "The teacher is here." },    accept: ["instructor", "master"] },
        { id: "ja-u1l3-shizuka",   type: "vocab", front: "しずか",     reading: "shizuka",   meaning: "quiet",     example: { jp: "ここはしずかです。", en: "It's quiet here." },        accept: ["calm", "peaceful", "silent"] },
      ],
    },
    // Lesson 4: た row + people & time
    {
      id: "ja-u1l4",
      unit: 1,
      lesson: 4,
      title: "た row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read and write the た row; talk about friends, time, and daily objects.",
      items: [
        { id: "ja-u1l4-ta",  type: "kana", front: "た", reading: "ta",  meaning: null, example: null, hint: "A TA-ble — the horizontal line is the tabletop with legs below." },
        { id: "ja-u1l4-chi", type: "kana", front: "ち", reading: "chi", meaning: null, example: null, hint: "A CHIcken beak curved downward — CHI chi chi!" },
        { id: "ja-u1l4-tsu", type: "kana", front: "つ", reading: "tsu", meaning: null, example: null, hint: "A TSUnami wave curling to the right." },
        { id: "ja-u1l4-te",  type: "kana", front: "て", reading: "te",  meaning: null, example: null, hint: "Like a TE(nt) peg — a stroke with a hook at the end." },
        { id: "ja-u1l4-to",  type: "kana", front: "と", reading: "to",  meaning: null, example: null, hint: "A lightning bolt — striking down like TO-p speed!" },
        { id: "ja-u1l4-tomodachi", type: "vocab", front: "ともだち", reading: "tomodachi", meaning: "friend",  example: { jp: "ともだちです。",     en: "This is my friend." },      accept: ["buddy", "pal"] },
        { id: "ja-u1l4-tegami",    type: "vocab", front: "てがみ",   reading: "tegami",    meaning: "letter",  example: { jp: "てがみをかきます。", en: "I'll write a letter." },    accept: ["mail"] },
        { id: "ja-u1l4-tsuki",     type: "vocab", front: "つき",     reading: "tsuki",     meaning: "moon",    example: { jp: "つきがきれいです。", en: "The moon is beautiful." },  accept: [] },
        { id: "ja-u1l4-tanoshii",  type: "vocab", front: "たのしい", reading: "tanoshii",  meaning: "fun",     example: { jp: "たのしいです！",     en: "It's fun!" },               accept: ["enjoyable", "amusing"] },
        { id: "ja-u1l4-tokei",     type: "vocab", front: "とけい",   reading: "tokei",     meaning: "clock",   example: { jp: "とけいをみます。",   en: "I look at the clock." },    accept: ["watch"] },
        { id: "ja-u1l4-chotto",    type: "vocab", front: "ちょっと", reading: "chotto",    meaning: "a little", example: { jp: "ちょっとまって。",  en: "Wait a moment." },          accept: ["a bit", "just a moment", "a moment"] },
      ],
    },
    // Lesson 5: な row + home & identity (checkpoint)
    {
      id: "ja-u1l5",
      unit: 1,
      lesson: 5,
      title: "な row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read and write the な row; name pets and ask basic questions.",
      items: [
        { id: "ja-u1l5-na", type: "kana", front: "な", reading: "na", meaning: null, example: null, hint: "Like 'NA' written boldly — say NA when you shake your head!" },
        { id: "ja-u1l5-ni", type: "kana", front: "に", reading: "ni", meaning: null, example: null, hint: "Two strokes — NI means 'two' in Japanese, and に has two lines!" },
        { id: "ja-u1l5-nu", type: "kana", front: "ぬ", reading: "nu", meaning: null, example: null, hint: "Tangled NUddles (noodles) — NU(dles)!" },
        { id: "ja-u1l5-ne", type: "kana", front: "ね", reading: "ne", meaning: null, example: null, hint: "A cat curled up — ね has a curling tail, and cats say 'nyan' in Japan!" },
        { id: "ja-u1l5-no", type: "kana", front: "の", reading: "no", meaning: null, example: null, hint: "A spiral that says NO — like a spinning 'no entry' sign." },
        { id: "ja-u1l5-neko",     type: "vocab", front: "ねこ",     reading: "neko",     meaning: "cat",       example: { jp: "ねこがかわいいです。",       en: "Cats are cute." },                  accept: [] },
        { id: "ja-u1l5-inu",      type: "vocab", front: "いぬ",     reading: "inu",      meaning: "dog",       example: { jp: "いぬをかっています。",       en: "I have a dog." },                   accept: [] },
        { id: "ja-u1l5-nihon",    type: "vocab", front: "にほん",   reading: "nihon",    meaning: "Japan",     example: { jp: "にほんがすきです。",         en: "I love Japan." },                   accept: ["nippon"] },
        { id: "ja-u1l5-namae",    type: "vocab", front: "なまえ",   reading: "namae",    meaning: "name",      example: { jp: "なまえはなんですか？",       en: "What is your name?" },             accept: [] },
        { id: "ja-u1l5-nomimono", type: "vocab", front: "のみもの", reading: "nomimono", meaning: "drink",     example: { jp: "のみものはなんですか？",     en: "What would you like to drink?" },   accept: ["beverage"] },
        { id: "ja-u1l5-nanji",    type: "vocab", front: "なんじ",   reading: "nanji",    meaning: "what time", example: { jp: "なんじですか？",             en: "What time is it?" }, drill: { jp: "なんじにおきますか。", en: "What time do you get up?" },               accept: ["what time is it"] },
      ],
    },
  ],
};
