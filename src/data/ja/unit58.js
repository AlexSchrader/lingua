// Unit 58 — いえ・せいかつ ("Home & Daily Life") — A1 thematic
// Everyday N5 household objects the learner meets around the house: furniture,
// bathroom/hygiene items, kitchen tableware, and small daily-use tools. All are
// concrete nouns taught as vocabulary; examples reuse only known verbs and
// particles (あります, かいます, つかいます, つけます, あらいます, etc.). No new
// grammar. lang/unit/lesson wiring lives in index.js.
export const UNIT58 = {
  id: "ja-u58",
  lang: "ja",
  title: "いえ・せいかつ",
  order: 58,
  stage: "a1",
  lessons: [
    // Lesson 1: furniture & room items
    {
      id: "ja-u58l1",
      unit: 58,
      lesson: 1,
      title: "Furniture & room items",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name furniture and things around a room: ざぶとん じゅうたん はこ かびん かがみ カレンダー.",
      items: [
        { id: "ja-u58l1-zabuton", type: "vocab", front: "ざぶとん", reading: "zabuton", meaning: "floor cushion", example: { jp: "ざぶとんにすわります。", en: "I sit on the floor cushion." }, drill: { jp: "ざぶとんはやわらかいです。", en: "The floor cushion is soft." }, accept: ["cushion", "seat cushion", "sitting cushion", "floor pad"], hint: "za-bu-TON — three beats, the ん held. 座 (sit) + 布団 (bedding): the sitting futon. ⚠️ A flat square cushion for sitting on tatami, never a sofa cushion." },
        { id: "ja-u58l1-jutan", type: "vocab", front: "じゅうたん", reading: "jūtan", meaning: "carpet", example: { jp: "あかいじゅうたんです。", en: "It's a red carpet." }, drill: { jp: "じゅうたんをそうじします。", en: "I clean the carpet." }, accept: ["rug", "rugs", "carpeting", "floor carpet"], hint: "JŪ-tan — じゅう is the yōon ju held long, so two beats. ⚠️ A fitted carpet covering the floor. A small loose mat is マット, written in katakana." },
        { id: "ja-u58l1-hako", type: "vocab", front: "はこ", reading: "hako", meaning: "box", example: { jp: "はこをあけます。", en: "I open the box." }, drill: { jp: "はこのなかにほんがあります。", en: "There are books in the box." }, accept: ["boxes", "case", "a box", "carton"], hint: "HA-ko — two beats. ⚠️ Any box, any size. Watch its sound-change habit: inside a compound it becomes ばこ, as in ごみばこ, a rubbish bin." },
        { id: "ja-u58l1-kabin", type: "vocab", front: "かびん", reading: "kabin", meaning: "vase", example: { jp: "かびんにはなをかざります。", en: "I arrange flowers in the vase." }, drill: { jp: "かびんはテーブルのうえにあります。", en: "The vase is on the table." }, accept: ["flower vase", "vases", "a vase"], hint: "ka-BIN — two beats, the ん held. 花 (flower) + 瓶 (bottle): the flower bottle. ⚠️ That 花 is はな, a flower, and that 瓶 is びん, a bottle." },
        { id: "ja-u58l1-kagami", type: "vocab", front: "かがみ", reading: "kagami", meaning: "mirror", example: { jp: "かがみをみます。", en: "I look in the mirror." }, drill: { jp: "かがみがおおきいです。", en: "The mirror is big." }, accept: ["mirrors", "a mirror", "looking glass"], hint: "ka-GA-mi — three beats, a hard g in the middle. ⚠️ A mirror is looked AT, so with みます it takes を: かがみをみます." },
        { id: "ja-u58l1-karenda", type: "vocab", front: "カレンダー", reading: "karendā", meaning: "calendar", example: { jp: "カレンダーはかべにあります。", en: "The calendar is on the wall." }, drill: { jp: "カレンダーをかいます。", en: "I buy a calendar." }, accept: ["calendars", "a calendar", "wall calendar"], hint: "ka-ren-DĀ — katakana with a final ー, so the last beat is held: ka-ren-daa, four beats. From English calendar. ⚠️ Do not clip that ending." },
      ],
    },
    // Lesson 2: bathroom & hygiene items
    {
      id: "ja-u58l2",
      unit: 58,
      lesson: 2,
      title: "Bathroom & hygiene",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name everyday hygiene items: せっけん タオル はブラシ シャンプー ハンカチ ティッシュ.",
      items: [
        { id: "ja-u58l2-sekken", type: "vocab", front: "せっけん", reading: "sekken", meaning: "soap", example: { jp: "せっけんでてをあらいます。", en: "I wash my hands with soap." }, drill: { jp: "せっけんがありません。", en: "There is no soap." }, accept: ["bar of soap", "hand soap", "a bar of soap"], hint: "sek-KEN — the small っ is a held stop before the k, then ん: two heavy beats. ⚠️ What you wash WITH takes で: せっけんでてをあらいます." },
        { id: "ja-u58l2-taoru", type: "vocab", front: "タオル", reading: "taoru", meaning: "towel", example: { jp: "しろいタオルです。", en: "It's a white towel." }, drill: { jp: "タオルをあらいます。", en: "I wash the towel." }, accept: ["towels", "a towel", "hand towel"], hint: "TA-o-ru — three beats, each vowel its own: ta-o-ru, never towl. From English towel. ⚠️ Katakana marks it as borrowed; the native てぬぐい is a different cloth." },
        { id: "ja-u58l2-haburashi", type: "vocab", front: "はブラシ", reading: "haburashi", meaning: "toothbrush", example: { jp: "はブラシをつかいます。", en: "I use a toothbrush." }, drill: { jp: "はブラシはあたらしいです。", en: "The toothbrush is new." }, accept: ["tooth brush", "toothbrushes", "a toothbrush"], hint: "ha-bu-RA-shi — four beats. Look at the spelling: は is hiragana 歯, a tooth, and ブラシ is katakana from English brush. ⚠️ A native word glued to a loanword, exactly like けしゴム." },
        { id: "ja-u58l2-shanpu", type: "vocab", front: "シャンプー", reading: "shanpū", meaning: "shampoo", example: { jp: "シャンプーをかいます。", en: "I buy shampoo." }, drill: { jp: "シャンプーがもうありません。", en: "There is no shampoo left." }, accept: ["hair shampoo", "a bottle of shampoo", "shampoo bottle"], hint: "SHAN-pū — シャ is the yōon sha and the ー holds the final u: two beats, shahn-puu. ⚠️ Hold that last beat, or it comes out as シャンプ." },
        { id: "ja-u58l2-hankachi", type: "vocab", front: "ハンカチ", reading: "hankachi", meaning: "handkerchief", example: { jp: "ハンカチはどこですか。", en: "Where is the handkerchief?" }, drill: { jp: "ハンカチをもちます。", en: "I carry a handkerchief." }, accept: ["hanky", "handkerchiefs", "pocket handkerchief"], hint: "HAN-ka-chi — three beats, the ん held, ち is chi. Clipped from English handkerchief. ⚠️ Japanese shortens long loanwords like this constantly — compare テレビ from television." },
        { id: "ja-u58l2-tisshu", type: "vocab", front: "ティッシュ", reading: "tisshu", meaning: "tissue", example: { jp: "ティッシュをください。", en: "A tissue, please." }, drill: { jp: "ティッシュがいります。", en: "I need a tissue." }, accept: ["tissues", "tissue paper", "a tissue"], hint: "TIS-shu — ティ is a katakana pair invented for loanwords, and the small ッ doubles the sh: two beats. ⚠️ ティ never appears in a native word, so it is a reliable sign of a borrowing." },
      ],
    },
    // Lesson 3: kitchen & tableware
    {
      id: "ja-u58l3",
      unit: 58,
      lesson: 3,
      title: "Kitchen & tableware",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name kitchen and tableware items: コップ スプーン ちゃわん やかん ポット レンジ.",
      items: [
        { id: "ja-u58l3-koppu", type: "vocab", front: "コップ", reading: "koppu", meaning: "cup", example: { jp: "コップでみずをのみます。", en: "I drink water from a cup." }, drill: { jp: "コップをあらいます。", en: "I wash the glass." }, accept: ["glass", "cups", "tumbler", "drinking glass"], hint: "KOP-pu — the small ッ is a held stop doubling the p: two beats. From Dutch kop, not English cup. ⚠️ It is a GLASS or tumbler; the handleless teacup is ちゃわん, further down." },
        { id: "ja-u58l3-supun", type: "vocab", front: "スプーン", reading: "supūn", meaning: "spoon", example: { jp: "スプーンでたべます。", en: "I eat with a spoon." }, drill: { jp: "スプーンはちいさいです。", en: "The spoon is small." }, accept: ["spoons", "a spoon", "teaspoon"], hint: "su-PŪN — the ー holds the u: two beats, su-puun. ⚠️ Japanese cannot open a word with s plus a consonant, so English spoon gains that す — the same repair that turns stove into ストーブ." },
        { id: "ja-u58l3-chawan", type: "vocab", front: "ちゃわん", reading: "chawan", meaning: "rice bowl", example: { jp: "これはわたしのちゃわんです。", en: "This is my rice bowl." }, drill: { jp: "ちゃわんにごはんをいれます。", en: "I put rice in the bowl." }, accept: ["bowl", "teacup", "rice bowl", "a bowl"], hint: "cha-WAN — ちゃ is the yōon cha, then ん held: two beats. 茶 (tea) + 碗 (bowl), the tea bowl. ⚠️ Today it is the RICE bowl at dinner; the older sense survives in ちゃわんむし." },
        { id: "ja-u58l3-yakan", type: "vocab", front: "やかん", reading: "yakan", meaning: "kettle", example: { jp: "やかんでおちゃをつくります。", en: "I make tea with the kettle." }, drill: { jp: "やかんはあついです。", en: "The kettle is hot." }, accept: ["kettles", "a kettle", "stovetop kettle"], hint: "ya-KAN — two beats, the ん held. ⚠️ The metal kettle you heat on the stove. The insulated jug that KEEPS water hot is ポット, two words below." },
        { id: "ja-u58l3-potto", type: "vocab", front: "ポット", reading: "potto", meaning: "thermos", example: { jp: "ポットのおちゃはあついです。", en: "The tea in the thermos is hot." }, drill: { jp: "ポットのおちゃをのみます。", en: "I drink the tea from the flask." }, accept: ["pot", "flask", "thermos flask", "hot-water flask"], hint: "POT-to — the small ッ doubles the t: two beats. Borrowed from English pot, but the MEANING moved. ⚠️ In Japanese it is the insulated flask, never a cooking pot." },
        { id: "ja-u58l3-renji", type: "vocab", front: "レンジ", reading: "renji", meaning: "microwave", example: { jp: "レンジはだいどころにあります。", en: "The microwave is in the kitchen." }, drill: { jp: "レンジでりょうりをつくります。", en: "I cook with the microwave." }, accept: ["microwave oven", "stove", "the microwave", "oven"], hint: "REN-ji — two beats, tapped r, the ん held. Clipped from でんしレンジ, electric range. ⚠️ The borrowed word is range, but what Japanese means by it is the MICROWAVE." },
      ],
    },
    // Lesson 4: daily-use tools
    {
      id: "ja-u58l4",
      unit: 58,
      lesson: 4,
      title: "Daily-use tools",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name small everyday tools: ものさし ほうき バケツ でんち せんぷうき まくら.",
      items: [
        { id: "ja-u58l4-monosashi", type: "vocab", front: "ものさし", reading: "monosashi", meaning: "ruler", example: { jp: "ものさしをつかいます。", en: "I use a ruler." }, drill: { jp: "ものさしはながいです。", en: "The ruler is long." }, accept: ["measure", "rulers", "a ruler", "measuring stick"], hint: "mo-no-SA-shi — four beats. もの, a thing, plus さし from さす, to point at: the thing-pointer. ⚠️ A measuring ruler — nothing to do with a person who rules." },
        { id: "ja-u58l4-hoki", type: "vocab", front: "ほうき", reading: "hōki", meaning: "broom", example: { jp: "ほうきでそうじします。", en: "I clean with a broom." }, drill: { jp: "ほうきがいります。", en: "I need a broom." }, accept: ["brooms", "a broom", "sweeping brush"], hint: "HŌ-ki — the ほう is a long o, so two beats. ⚠️ What you sweep WITH takes で: ほうきでそうじします. Hold the long o — never ほき." },
        { id: "ja-u58l4-baketsu", type: "vocab", front: "バケツ", reading: "baketsu", meaning: "bucket", example: { jp: "バケツにみずをいれます。", en: "I put water in the bucket." }, drill: { jp: "バケツをもちます。", en: "I carry the bucket." }, accept: ["buckets", "pail", "a bucket", "water bucket"], hint: "BA-ke-tsu — three beats, つ is tsu. From English bucket. ⚠️ The final t becomes a whole ツ beat, exactly as in キャベツ: Japanese cannot end a word on a bare consonant." },
        { id: "ja-u58l4-denchi", type: "vocab", front: "でんち", reading: "denchi", meaning: "battery", example: { jp: "あたらしいでんちをかいます。", en: "I buy a new battery." }, drill: { jp: "でんちがありません。", en: "There is no battery." }, accept: ["batteries", "a battery", "dry cell"], hint: "DEN-chi — two beats, the ん held, ち is chi. 電 (electric) + 池 (pond): the electricity pond. ⚠️ The same 電 opens でんしゃ, a train, and でんわ, a telephone." },
        { id: "ja-u58l4-senpuki", type: "vocab", front: "せんぷうき", reading: "senpūki", meaning: "electric fan", example: { jp: "せんぷうきをつけます。", en: "I turn on the electric fan." }, drill: { jp: "せんぷうきはすずしいです。", en: "The electric fan is cool." }, accept: ["fan", "electric fans", "a fan", "desk fan"], hint: "sen-PŪ-ki — the ぷう is a long u, so three beats. 扇風機: fan + wind + machine. ⚠️ That 機 ending marks a MACHINE — the same piece as in せんたくき, a washing machine." },
        { id: "ja-u58l4-makura", type: "vocab", front: "まくら", reading: "makura", meaning: "pillow", example: { jp: "やわらかいまくらです。", en: "It's a soft pillow." }, drill: { jp: "まくらをあらいます。", en: "I wash the pillow." }, accept: ["pillows", "cushion", "a pillow", "head pillow"], hint: "ma-KU-ra — three beats, tapped r. ⚠️ The pillow under your head. The flat cushion you SIT on is ざぶとん, back in lesson 1." },
      ],
    },
  ],
};
