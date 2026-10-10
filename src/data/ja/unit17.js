// Unit 17 — かんじ・どうし (Verb kanji) — A1 / JLPT N5
// Consolidated kanji unit (category: verb kanji). Kanji regrouped by
// meaning from the earlier thin units so each unit is a coherent set. type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT17 = {
  id: "ja-u17",
  lang: "ja",
  title: "かんじ・どうし",
  order: 17,
  stage: "a1",
  lessons: [
    {
      id: "ja-u17l1",
      unit: 17,
      lesson: 1,
      title: "Verb kanji 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the verb kanji: 行 来 見 出 入 食 飲 (go, come, see, exit, enter, eat, drink).",
      items: [
        { id: "ja-u17l1-iku", type: "kanji", front: "行", reading: "iku", meaning: "go (dictionary form)", example: { jp: "がっこうに行きます。", en: "I go to school." }, drill: { jp: "月曜日に山に行きます。", en: "I go to the mountains on Monday." }, accept: ["to go", "goes", "travel", "head for"], hint: "行 = go. You know it as 行きます (いきます). The left side 彳 is a step on a road." },
        { id: "ja-u17l1-kuru", type: "kanji", front: "来", reading: "kuru", meaning: "come (dictionary form)", example: { jp: "ともだちが来ます。", en: "A friend comes." }, drill: { jp: "先生が来ます。", en: "The teacher is coming." }, accept: ["to come", "comes", "arrive", "turn up"], hint: "来 = come, the kanji for 来ます. ⚠️ Its readings scatter badly: く in 来ます, らい in 来週 next week, こ in 来ない. ⚠️ It is a very common irregular — treat each compound as its own word rather than deriving it." },
        { id: "ja-u17l1-miru", type: "kanji", front: "見", reading: "miru", meaning: "see (dictionary form)", example: { jp: "テレビを見ます。", en: "I watch TV." }, drill: { jp: "山を見ます。", en: "I look at the mountain." }, accept: ["look", "watch", "to see"], hint: "見 = see. 目 (eye) on top of 儿 (legs) — eyes that go and look. You know 見ます (みます)." },
        { id: "ja-u17l1-deru", type: "kanji", front: "出", reading: "deru", meaning: "exit (to go out)", example: { jp: "いえを出ます。", en: "I leave the house." }, drill: { jp: "前に出ます。", en: "I step out to the front." }, accept: ["go out", "leave", "to exit"], hint: "出 = go out / exit. Like a sprout pushing up out of the ground. 出ます = leave." },
        { id: "ja-u17l1-hairu", type: "kanji", front: "入", reading: "hairu", meaning: "enter", example: { jp: "へやに入ります。", en: "I enter the room." }, drill: { jp: "中に入ります。", en: "I go inside." }, accept: ["go in", "to enter", "come in", "go into"], hint: "入 = enter / go in. A shape leaning into an opening. 入ります = go in." },
        { id: "ja-u17l1-taberu", type: "kanji", front: "食", reading: "taberu", meaning: "eat (dictionary form)", example: { jp: "ごはんを食べます。", en: "I eat a meal." }, drill: { jp: "友だちと食べます。", en: "I eat with a friend." }, accept: ["to eat", "eats", "food"], hint: "食 = eat, and also food. You know 食べます. ⚠️ Read た in 食べます but しょく in compounds: 食事 しょくじ a meal, 食堂 しょくどう a canteen. The top is a lid over a dish — eight strokes." },
        { id: "ja-u17l1-nomu", type: "kanji", front: "飲", reading: "nomu", meaning: "drink (dictionary form)", example: { jp: "みずを飲みます。", en: "I drink water." }, drill: { jp: "金曜日にビールを飲みます。", en: "I drink beer on Friday." }, accept: ["to drink", "drinks", "swallow", "take (medicine)"], hint: "飲 = drink. 食 (eat) on the left + 欠 (an open mouth) — you know 飲みます (のみます)." },
      ],
    },
    {
      id: "ja-u17l2",
      unit: 17,
      lesson: 2,
      title: "Verb kanji 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 言 聞 読 書 話 (say, hear, read, write, speak), plus 立 休 (stand, rest).",
      items: [
        { id: "ja-u17l2-iu", type: "kanji", front: "言", reading: "iu", meaning: "say", example: { jp: "なまえを言います。", en: "I say my name." }, drill: { jp: "友だちに言います。", en: "I tell my friend." }, accept: ["to say", "speak", "word"], hint: "言 = say / word. Lines coming out over a mouth 口. You know 言います (いいます)." },
        { id: "ja-u17l2-kiku", type: "kanji", front: "聞", reading: "kiku", meaning: "listen (dictionary form)", example: { jp: "おんがくを聞きます。", en: "I listen to music." }, drill: { jp: "毎日ニュースを聞きます。", en: "I listen to the news every day." }, accept: ["hear", "to listen", "ask"], hint: "聞 = listen / hear. 耳 (ear) inside a gate 門 — an ear at the door. 聞きます = listen." },
        { id: "ja-u17l2-yomu", type: "kanji", front: "読", reading: "yomu", meaning: "read (dictionary form)", example: { jp: "ほんを読みます。", en: "I read a book." }, drill: { jp: "ざっしを読みます。", en: "I read a magazine." }, accept: ["to read", "reads", "read aloud", "peruse"], hint: "読 = read. 言 (word) on the left — reading words. You know 読みます (よみます)." },
        { id: "ja-u17l2-kaku", type: "kanji", front: "書", reading: "kaku", meaning: "write (dictionary form)", example: { jp: "なまえを書きます。", en: "I write my name." }, drill: { jp: "手で書きます。", en: "I write by hand." }, accept: ["to write", "writes", "draw", "put down"], hint: "書 = write — a hand holding a brush above 日. Ten strokes. ⚠️ Read か in 書きます, しょ in compounds: 辞書 じしょ a dictionary, 図書館 としょかん a library. Calligraphy is しょどう, the way of 書." },
        { id: "ja-u17l2-hanasu", type: "kanji", front: "話", reading: "hanasu", meaning: "speak (dictionary form)", example: { jp: "えいごを話します。", en: "I speak English." }, drill: { jp: "友だちと話します。", en: "I talk with a friend." }, accept: ["talk", "to speak", "story"], hint: "話 = speak / talk — 言 (word) + 舌 (tongue). You know はなします (Unit 9): 話します." },
        { id: "ja-u17l2-tatsu", type: "kanji", front: "立", reading: "tatsu", meaning: "stand", example: { jp: "前に立ちます。", en: "I stand in front." }, drill: { jp: "山の上に立ちます。", en: "I stand on top of the mountain." }, accept: ["to stand", "stand up", "rise", "get up"], hint: "立 = stand — a person planted on the ground, five strokes. ⚠️ Read た in 立ちます, りつ in compounds: 国立 こくりつ national, literally state-established. Also the 立 inside 泣く, to cry." },
        { id: "ja-u17l2-yasumu", type: "kanji", front: "休", reading: "yasumu", meaning: "rest", example: { jp: "いえで休みます。", en: "I rest at home." }, drill: { jp: "土曜日に休みます。", en: "I rest on Saturday." }, accept: ["to rest", "take a break", "day off"], hint: "休 = rest — 亻 (person) beside 木 (tree). 休みます; やすみ = a day off." },
      ],
    },
    {
      id: "ja-u17l3",
      unit: 17,
      lesson: 3,
      title: "Verb kanji 3",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read 買 会 待 知 作 持 (buy, meet, wait, know, make, hold).",
      items: [
        { id: "ja-u17l3-kau", type: "kanji", front: "買", reading: "kau", meaning: "buy (dictionary form)", example: { jp: "本を買います。", en: "I buy a book." }, drill: { jp: "水を買います。", en: "I buy water." }, accept: ["to buy", "buys", "purchase", "get"], hint: "買 = buy — 网 (net) over 貝 (money). You know かいます (Unit 9): 買います." },
        { id: "ja-u17l3-au", type: "kanji", front: "会", reading: "au", meaning: "meet (dictionary form)", example: { jp: "ともだちに会います。", en: "I meet a friend." }, drill: { jp: "先生に会います。", en: "I meet the teacher." }, accept: ["to meet", "meets", "see (someone)", "association"], hint: "会 = meet, and also a gathering. ⚠️ Read あ in 会います, かい in compounds: 会社 かいしゃ a company, 会議 かいぎ a meeting. ⚠️ Remember the person takes に: 友だちに会います, never を." },
        { id: "ja-u17l3-matsu", type: "kanji", front: "待", reading: "matsu", meaning: "wait", example: { jp: "えきで待ちます。", en: "I wait at the station." }, drill: { jp: "外で待ちます。", en: "I wait outside." }, accept: ["to wait", "waits", "await", "hold on"], hint: "待 = wait — 彳, a step on a road, beside 寺, a temple. Nine strokes. ⚠️ Read ま in 待ちます, たい in compounds: 期待 きたい expectation. 待って is the casual hold on." },
        { id: "ja-u17l3-shiru", type: "kanji", front: "知", reading: "shiru", meaning: "know", example: { jp: "あの人を知っています。", en: "I know that person." }, drill: { jp: "名前を知っています。", en: "I know the name." }, accept: ["to know", "knows", "be aware of", "find out"], hint: "知 = know — 矢 (arrow) + 口 (mouth): knowledge flies fast. 知ります." },
        { id: "ja-u17l3-tsukuru", type: "kanji", front: "作", reading: "tsukuru", meaning: "make", example: { jp: "ごはんを作ります。", en: "I make a meal." }, drill: { jp: "子どもとごはんを作ります。", en: "I cook a meal with my child." }, accept: ["to make", "makes", "build"], hint: "作 = make — 亻, a person, beside 乍. Seven strokes. ⚠️ Read つく in 作ります, さく in compounds: 作文 さくぶん an essay, 作家 さっか an author. It covers cooking, building and composing alike." },
        { id: "ja-u17l3-motsu", type: "kanji", front: "持", reading: "motsu", meaning: "hold", example: { jp: "かばんを持ちます。", en: "I hold a bag." }, drill: { jp: "手に持ちます。", en: "I hold it in my hand." }, accept: ["to hold", "carry", "have"], hint: "持 = hold, carry — 扌, the hand radical, beside 寺, temple. Nine strokes, and it shares that 寺 with 待, wait, in this same lesson. ⚠️ Read も in 持ちます, じ in 持参 じさん, bringing something along." },
      ],
    },
  ],
};
