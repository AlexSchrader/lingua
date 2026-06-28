// Unit 4 — カタカナ ("Katakana"), part 1
// Katakana is the second kana script — the same sounds as hiragana, a second set
// of shapes, used for loanwords and foreign names. Each kana already has a known
// sound from Units 1-3, so every hint anchors the new glyph to its hiragana twin
// (カ = "ka", the twin of か) plus a shape cue. The payoff is immediate: the vocab
// is recognizable loanwords (コーヒー, テレビ, タクシー) the learner can already
// half-read. 5 rows: vowels + k / s / t / n. The ー long-vowel mark is introduced
// in Lesson 1. lang/unit/lesson stamped in index.js.
export const UNIT4 = {
  id: "ja-u4",
  lang: "ja",
  title: "カタカナ",
  order: 4,
  lessons: [
    // Lesson 1: vowels ア イ ウ エ オ + the ー long-vowel mark
    {
      id: "ja-u4l1",
      unit: 4,
      lesson: 1,
      title: "Katakana vowels",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the five katakana vowels ア イ ウ エ オ; meet the ー long-vowel mark (コーヒー = kōhī) and your first loanwords.",
      items: [
        { id: "ja-u4l1-a", type: "kana", front: "ア", reading: "a", meaning: null, example: null, hint: "ア is the katakana twin of あ — same 'a' sound. A short stroke with a long leg sweeping down-left." },
        { id: "ja-u4l1-i", type: "kana", front: "イ", reading: "i", meaning: null, example: null, hint: "イ = 'i', twin of い. Two strokes: a long diagonal and a short tick — like い pulled upright." },
        { id: "ja-u4l1-u", type: "kana", front: "ウ", reading: "u", meaning: null, example: null, hint: "ウ = 'u', twin of う. A little roof with a hook underneath — same U sound." },
        { id: "ja-u4l1-e", type: "kana", front: "エ", reading: "e", meaning: null, example: null, hint: "エ = 'e', twin of え. Two horizontal lines joined by a stem, like a capital I — says E." },
        { id: "ja-u4l1-o", type: "kana", front: "オ", reading: "o", meaning: null, example: null, hint: "オ = 'o', twin of お. A cross with a leg sweeping down-left — same O sound. In katakana, a bar ー after a vowel just holds it longer: コー = 'kō'." },
        { id: "ja-u4l1-amerika", type: "vocab", front: "アメリカ", reading: "amerika", meaning: "America",  example: { jp: "アメリカからきました。", en: "I came from America." }, accept: ["the US", "USA", "the United States"] },
        { id: "ja-u4l1-itaria",  type: "vocab", front: "イタリア", reading: "itaria",  meaning: "Italy",    example: { jp: "イタリアにいきます。",   en: "I go to Italy." },         accept: [] },
        { id: "ja-u4l1-uuru",    type: "vocab", front: "ウール",   reading: "ūru",     meaning: "wool",     example: { jp: "ウールのぼうしです。",   en: "It's a wool hat." },       accept: [] },
        { id: "ja-u4l1-eakon",   type: "vocab", front: "エアコン", reading: "eakon",   meaning: "air conditioner", example: { jp: "エアコンをつけます。", en: "I turn on the air conditioner." }, accept: ["AC", "aircon"] },
        { id: "ja-u4l1-orenji",  type: "vocab", front: "オレンジ", reading: "orenji",  meaning: "orange",   example: { jp: "オレンジをたべます。",   en: "I eat an orange." },       accept: ["oranges"] },
        { id: "ja-u4l1-aisu",    type: "vocab", front: "アイス",   reading: "aisu",    meaning: "ice cream", example: { jp: "アイスがすきです。",     en: "I like ice cream." },      accept: ["ice", "ice-cream"] },
      ],
    },
    // Lesson 2: k-row カ キ ク ケ コ
    {
      id: "ja-u4l2",
      unit: 4,
      lesson: 2,
      title: "Katakana k-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana k-row カ キ ク ケ コ; recognize everyday loanwords like coffee and cake.",
      items: [
        { id: "ja-u4l2-ka", type: "kana", front: "カ", reading: "ka", meaning: null, example: null, hint: "カ = 'ka', twin of か — and it's basically か without its last stroke. Same KA." },
        { id: "ja-u4l2-ki", type: "kana", front: "キ", reading: "ki", meaning: null, example: null, hint: "キ = 'ki', twin of き. Two crossbars and a stem — same KI." },
        { id: "ja-u4l2-ku", type: "kana", front: "ク", reading: "ku", meaning: null, example: null, hint: "ク = 'ku', twin of く. A single bent stroke like a beak — same KU." },
        { id: "ja-u4l2-ke", type: "kana", front: "ケ", reading: "ke", meaning: null, example: null, hint: "ケ = 'ke', twin of け. Same KE sound." },
        { id: "ja-u4l2-ko", type: "kana", front: "コ", reading: "ko", meaning: null, example: null, hint: "コ = 'ko', twin of こ. Two strokes making a bracket shape — same KO." },
        { id: "ja-u4l2-kohi",   type: "vocab", front: "コーヒー", reading: "kōhī",   meaning: "coffee",    example: { jp: "コーヒーをのみます。",   en: "I drink coffee." },     accept: [] },
        { id: "ja-u4l2-keki",   type: "vocab", front: "ケーキ",   reading: "kēki",   meaning: "cake",      example: { jp: "ケーキをたべます。",     en: "I eat cake." },         accept: ["cakes"] },
        { id: "ja-u4l2-kamera", type: "vocab", front: "カメラ",   reading: "kamera", meaning: "camera",    example: { jp: "あたらしいカメラです。", en: "It's a new camera." },  accept: ["cameras"] },
        { id: "ja-u4l2-kurasu", type: "vocab", front: "クラス",   reading: "kurasu", meaning: "class",     example: { jp: "クラスにいきます。",     en: "I go to class." },      accept: ["classes"] },
        { id: "ja-u4l2-ketai",  type: "vocab", front: "ケータイ", reading: "kētai",  meaning: "cell phone", example: { jp: "ケータイをみます。",    en: "I look at my phone." }, accept: ["phone", "mobile phone", "mobile"] },
        { id: "ja-u4l2-kare",   type: "vocab", front: "カレー",   reading: "karē",   meaning: "curry",     example: { jp: "カレーをたべます。",     en: "I eat curry." },        accept: [] },
      ],
    },
    // Lesson 3: s-row サ シ ス セ ソ — flag シ (sweeps up) vs ツ (Lesson 4)
    {
      id: "ja-u4l3",
      unit: 4,
      lesson: 3,
      title: "Katakana s-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana s-row サ シ ス セ ソ; tell シ (sweeps up) apart from ツ.",
      items: [
        { id: "ja-u4l3-sa",  type: "kana", front: "サ", reading: "sa",  meaning: null, example: null, hint: "サ = 'sa', twin of さ. A crossbar with a hook — same SA." },
        { id: "ja-u4l3-shi", type: "kana", front: "シ", reading: "shi", meaning: null, example: null, hint: "シ = 'shi', twin of し. Two short dashes plus a stroke that sweeps UP from the bottom-left. (Its look-alike ツ drops down from the top — coming in Lesson 4.)" },
        { id: "ja-u4l3-su",  type: "kana", front: "ス", reading: "su",  meaning: null, example: null, hint: "ス = 'su', twin of す. Same SU sound." },
        { id: "ja-u4l3-se",  type: "kana", front: "セ", reading: "se",  meaning: null, example: null, hint: "セ = 'se', twin of せ. Same SE sound." },
        { id: "ja-u4l3-so",  type: "kana", front: "ソ", reading: "so",  meaning: null, example: null, hint: "ソ = 'so', twin of そ. A short dash and a downward stroke — same SO." },
        { id: "ja-u4l3-supu",   type: "vocab", front: "スープ",   reading: "sūpu",    meaning: "soup",    example: { jp: "スープをのみます。",     en: "I drink soup." },       accept: ["soups"] },
        { id: "ja-u4l3-seta",   type: "vocab", front: "セーター", reading: "sētā",    meaning: "sweater", example: { jp: "セーターをきます。",     en: "I wear a sweater." },   accept: ["jumper", "pullover", "sweaters"] },
        { id: "ja-u4l3-sarada", type: "vocab", front: "サラダ",   reading: "sarada",  meaning: "salad",   example: { jp: "サラダをたべます。",     en: "I eat a salad." },      accept: ["salads"] },
        { id: "ja-u4l3-sofa",   type: "vocab", front: "ソファ",   reading: "sofa",    meaning: "sofa",    example: { jp: "あたらしいソファです。", en: "It's a new sofa." },    accept: ["couch", "sofas"] },
        { id: "ja-u4l3-supotsu", type: "vocab", front: "スポーツ", reading: "supōtsu", meaning: "sports",  example: { jp: "スポーツがすきです。",   en: "I like sports." },      accept: ["sport"] },
        { id: "ja-u4l3-shito",  type: "vocab", front: "シート",   reading: "shīto",   meaning: "seat",    example: { jp: "シートはどこですか。",   en: "Where is the seat?" },  accept: ["seats", "the seat"] },
      ],
    },
    // Lesson 4: t-row タ チ ツ テ ト — flag ツ (drops down) vs シ (Lesson 3)
    {
      id: "ja-u4l4",
      unit: 4,
      lesson: 4,
      title: "Katakana t-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana t-row タ チ ツ テ ト; tell ツ (drops down) apart from シ.",
      items: [
        { id: "ja-u4l4-ta",  type: "kana", front: "タ", reading: "ta",  meaning: null, example: null, hint: "タ = 'ta', twin of た. Same TA sound." },
        { id: "ja-u4l4-chi", type: "kana", front: "チ", reading: "chi", meaning: null, example: null, hint: "チ = 'chi', twin of ち. Same CHI sound." },
        { id: "ja-u4l4-tsu", type: "kana", front: "ツ", reading: "tsu", meaning: null, example: null, hint: "ツ = 'tsu', twin of つ. Two short dashes plus a stroke that drops DOWN from the top-right. (Compare シ, whose stroke sweeps up from the bottom — Lesson 3.)" },
        { id: "ja-u4l4-te",  type: "kana", front: "テ", reading: "te",  meaning: null, example: null, hint: "テ = 'te', twin of て. Same TE sound." },
        { id: "ja-u4l4-to",  type: "kana", front: "ト", reading: "to",  meaning: null, example: null, hint: "ト = 'to', twin of と. A vertical line with one short tick — same TO." },
        { id: "ja-u4l4-terebi",   type: "vocab", front: "テレビ",   reading: "terebi",   meaning: "TV",     example: { jp: "テレビをみます。",       en: "I watch TV." },         accept: ["television", "telly"] },
        { id: "ja-u4l4-tomato",   type: "vocab", front: "トマト",   reading: "tomato",   meaning: "tomato", example: { jp: "トマトをたべます。",     en: "I eat a tomato." },     accept: ["tomatoes"] },
        { id: "ja-u4l4-takushi",  type: "vocab", front: "タクシー", reading: "takushī",  meaning: "taxi",   example: { jp: "タクシーでいきます。",   en: "I go by taxi." },       accept: ["cab", "taxis"] },
        { id: "ja-u4l4-tesuto",   type: "vocab", front: "テスト",   reading: "tesuto",   meaning: "test",   example: { jp: "テストがあります。",     en: "There is a test." },    accept: ["exam", "quiz", "tests"] },
        { id: "ja-u4l4-chiketto", type: "vocab", front: "チケット", reading: "chiketto", meaning: "ticket", example: { jp: "チケットをかいます。",   en: "I buy a ticket." },     accept: ["tickets"] },
        { id: "ja-u4l4-tsua",     type: "vocab", front: "ツアー",   reading: "tsuā",     meaning: "tour",   example: { jp: "ツアーにいきます。",     en: "I go on a tour." },     accept: ["tours"] },
      ],
    },
    // Lesson 5: n-row ナ ニ ヌ ネ ノ — ヌ is rare in loanwords, taught for completeness
    {
      id: "ja-u4l5",
      unit: 4,
      lesson: 5,
      title: "Katakana n-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana n-row ナ ニ ヌ ネ ノ; round out the basic katakana with more loanwords.",
      items: [
        { id: "ja-u4l5-na", type: "kana", front: "ナ", reading: "na", meaning: null, example: null, hint: "ナ = 'na', twin of な. A cross with a sweeping leg — same NA." },
        { id: "ja-u4l5-ni", type: "kana", front: "ニ", reading: "ni", meaning: null, example: null, hint: "ニ = 'ni', twin of に. Just two horizontal lines — same NI (it even echoes 二, the kanji for 'two', read ni)." },
        { id: "ja-u4l5-nu", type: "kana", front: "ヌ", reading: "nu", meaning: null, example: null, hint: "ヌ = 'nu', twin of ぬ. Same NU — rare in loanwords, but worth recognizing." },
        { id: "ja-u4l5-ne", type: "kana", front: "ネ", reading: "ne", meaning: null, example: null, hint: "ネ = 'ne', twin of ね. Same NE sound." },
        { id: "ja-u4l5-no", type: "kana", front: "ノ", reading: "no", meaning: null, example: null, hint: "ノ = 'no', twin of の. A single diagonal sweep — the simplest kana, same NO." },
        { id: "ja-u4l5-noto",    type: "vocab", front: "ノート",   reading: "nōto",    meaning: "notebook", example: { jp: "ノートにかきます。",     en: "I write in my notebook." }, accept: ["notebooks", "note"] },
        { id: "ja-u4l5-tenisu",  type: "vocab", front: "テニス",   reading: "tenisu",  meaning: "tennis",   example: { jp: "テニスをします。",       en: "I play tennis." },         accept: [] },
        { id: "ja-u4l5-nekutai", type: "vocab", front: "ネクタイ", reading: "nekutai", meaning: "necktie",  example: { jp: "ネクタイをします。",     en: "I wear a necktie." },      accept: ["tie", "ties", "neckties"] },
        { id: "ja-u4l5-naifu",   type: "vocab", front: "ナイフ",   reading: "naifu",   meaning: "knife",    example: { jp: "ナイフがあります。",     en: "There is a knife." },      accept: ["knives"] },
        { id: "ja-u4l5-banana",  type: "vocab", front: "バナナ",   reading: "banana",  meaning: "banana",   example: { jp: "バナナをたべます。",     en: "I eat a banana." },        accept: ["bananas"] },
        { id: "ja-u4l5-nyusu",   type: "vocab", front: "ニュース", reading: "nyūsu",   meaning: "news",     example: { jp: "ニュースをみます。",     en: "I watch the news." },      accept: [] },
      ],
    },
  ],
};
