// Unit 119 — ごい・N3・1 ("N3 vocab 1") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (samasu/sameru, sansei) disambiguated via hints.
export const UNIT119 = {
  id: "ja-u119", lang: "ja", title: "ごい・N3・1", order: 119, stage: "b1",
  lessons: [
    {
      id: "ja-u119l1", unit: 119, lesson: 1, title: "N3 vocab 1·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 作法 (manners), 様々 (varied), 冷ます (to cool), 覚ます (to awaken), 冷める (to become cool), 覚める (to wake).",
      items: [
        { id: "ja-u119l1-saho", type: "vocab", front: "作法", reading: "sahō", meaning: "manners", example: { jp: "にほんの作法をならいました。", en: "I learned Japanese manners." }, accept: ["etiquette", "propriety"], hint: "作法 (さほう) = manners / etiquette." },
        { id: "ja-u119l1-samazama", type: "vocab", front: "様々", reading: "samazama", meaning: "varied", example: { jp: "みせには様々なくだものがあります。", en: "The shop has various kinds of fruit." }, accept: ["various"], hint: "様々な (さまざまな) = various — a な-adjective." },
        { id: "ja-u119l1-samasu", type: "vocab", front: "冷ます", reading: "samasu", meaning: "to cool", example: { jp: "あついおちゃを冷ましてからのみます。", en: "I let the hot tea cool before drinking it." }, accept: ["to let cool"], hint: "冷ます (さます) = to cool something DOWN (transitive). Pair: 冷める = it cools." },
        { id: "ja-u119l1-samasu2", type: "vocab", front: "覚ます", reading: "samasu", meaning: "to awaken", example: { jp: "おおきなおとでめを覚ましました。", en: "A loud noise woke me up." }, accept: ["to wake up"], hint: "目を覚ます (めをさます) = to wake (yourself) up. Same reading as 冷ます, different kanji." },
        { id: "ja-u119l1-sameru", type: "vocab", front: "冷める", reading: "sameru", meaning: "to become cool", example: { jp: "スープが冷めてしまいました。", en: "The soup has gone cold." }, accept: ["to wear off"], hint: "冷める (さめる) = something cools by itself (intransitive). Pair: 冷ます = to cool it." },
        { id: "ja-u119l1-sameru2", type: "vocab", front: "覚める", reading: "sameru", meaning: "to wake", example: { jp: "けさははやくめが覚めました。", en: "This morning I woke up early." }, accept: ["to wake up"], hint: "目が覚める (めがさめる) = to wake up (intransitive). Same reading as 冷める, different kanji." },
      ],
    },
    {
      id: "ja-u119l2", unit: 119, lesson: 2, title: "N3 vocab 1·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 左右 (left and right), 皿 (plate), 更に (furthermore), 去る (to leave), 猿 (monkey), 騒ぎ (uproar).",
      items: [
        { id: "ja-u119l2-sayu", type: "vocab", front: "左右", reading: "sayū", meaning: "left and right", example: { jp: "みちをわたるまえに左右をみます。", en: "Before crossing the road, I look left and right." }, accept: ["influence"], hint: "左右 (さゆう) = left and right; also 左右する = to influence / control." },
        { id: "ja-u119l2-sara", type: "vocab", front: "皿", reading: "sara", meaning: "plate", example: { jp: "テーブルにおおきな皿をおきました。", en: "I put a big plate on the table." }, accept: ["dish"] },
        { id: "ja-u119l2-sarani", type: "vocab", front: "更に", reading: "sarani", meaning: "furthermore", example: { jp: "このほんはやすくて、更におもしろいです。", en: "This book is cheap and, furthermore, interesting." }, accept: ["moreover"], hint: "更に (さらに) = furthermore / even more." },
        { id: "ja-u119l2-saru", type: "vocab", front: "去る", reading: "saru", meaning: "to leave", example: { jp: "かれはなにもいわずにへやを去りました。", en: "He left the room without saying anything." }, accept: ["to go away"], hint: "去る (さる) = to leave / depart from a place." },
        { id: "ja-u119l2-saru2", type: "vocab", front: "猿", reading: "saru", meaning: "monkey", example: { jp: "やまで猿をたくさんみました。", en: "I saw a lot of monkeys in the mountains." }, accept: ["ape"] },
        { id: "ja-u119l2-sawagi", type: "vocab", front: "騒ぎ", reading: "sawagi", meaning: "uproar", example: { jp: "よるにおおきな騒ぎがありました。", en: "There was a big commotion at night." }, accept: ["disturbance"], hint: "騒ぎ (さわぎ) = uproar; from 騒ぐ (to make noise)." },
      ],
    },
    {
      id: "ja-u119l3", unit: 119, lesson: 3, title: "N3 vocab 1·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 参加 (participation), 参考 (reference), 賛成 (approval), 酸性 (acidity), 酸素 (oxygen), 氏 (family name).",
      items: [
        { id: "ja-u119l3-sanka", type: "vocab", front: "参加", reading: "sanka", meaning: "participation", example: { jp: "わたしもパーティーに参加します。", en: "I will take part in the party too." }, accept: ["taking part"], hint: "参加する (さんかする) = to participate / take part." },
        { id: "ja-u119l3-sanko", type: "vocab", front: "参考", reading: "sankō", meaning: "reference", example: { jp: "このほんを参考にします。", en: "I'll use this book as a reference." }, accept: ["consultation"], hint: "参考にする (さんこうにする) = to use as a reference." },
        { id: "ja-u119l3-sansei", type: "vocab", front: "賛成", reading: "sansei", meaning: "approval", example: { jp: "わたしはそのいけんに賛成です。", en: "I agree with that opinion." }, accept: ["agreement"], hint: "賛成 (さんせい) = approval / agreement. Opposite: 反対." },
        { id: "ja-u119l3-sansei2", type: "vocab", front: "酸性", reading: "sansei", meaning: "acidity", example: { jp: "このみずは酸性です。", en: "This water is acidic." }, accept: ["acidic"], hint: "酸性 (さんせい) = acidity — same reading as 賛成, different kanji." },
        { id: "ja-u119l3-sanso", type: "vocab", front: "酸素", reading: "sanso", meaning: "oxygen", example: { jp: "ひとは酸素がひつようです。", en: "People need oxygen." }, accept: [] },
        { id: "ja-u119l3-shi", type: "vocab", front: "氏", reading: "shi", meaning: "family name", example: { jp: "やまだ氏はゆうめいなひとです。", en: "Mr. Yamada is a famous person." }, accept: ["lineage"], hint: "氏 (し) after a surname = a formal 'Mr./Ms.' (e.g. やまだ氏)." },
      ],
    },
    {
      id: "ja-u119l4", unit: 119, lesson: 4, title: "N3 vocab 1·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 詩 (poem), 幸せ (happiness), 四角 (square), 直に (immediately), しかも (moreover), 四季 (four seasons).",
      items: [
        { id: "ja-u119l4-shi2", type: "vocab", front: "詩", reading: "shi", meaning: "poem", example: { jp: "かのじょはうつくしい詩をかきました。", en: "She wrote a beautiful poem." }, accept: ["poetry"] },
        { id: "ja-u119l4-shiawase", type: "vocab", front: "幸せ", reading: "shiawase", meaning: "happiness", example: { jp: "かぞくといっしょで幸せです。", en: "I'm happy being together with my family." }, accept: ["happy"], hint: "幸せ (しあわせ) = happiness; a な-adjective (幸せな)." },
        { id: "ja-u119l4-shikaku", type: "vocab", front: "四角", reading: "shikaku", meaning: "square", example: { jp: "しろい四角をかみにかきました。", en: "I drew a white square on the paper." }, accept: ["rectangle"], hint: "四角 (しかく) = a square shape; 四角い = square (adjective)." },
        { id: "ja-u119l4-jikani", type: "vocab", front: "直に", reading: "jikani", meaning: "immediately", example: { jp: "なまえをよんだら、直にきてください。", en: "When I call your name, please come at once." }, accept: ["directly", "readily"], hint: "直に (じかに) = immediately / directly." },
        { id: "ja-u119l4-shikamo", type: "vocab", front: "しかも", reading: "shikamo", meaning: "moreover", example: { jp: "このみせはやすくて、しかもおいしいです。", en: "This shop is cheap and, what's more, tasty." }, accept: ["furthermore", "besides"], hint: "しかも = moreover / on top of that — adds a further point." },
        { id: "ja-u119l4-shiki", type: "vocab", front: "四季", reading: "shiki", meaning: "four seasons", example: { jp: "にほんには四季があります。", en: "Japan has four seasons." }, accept: ["seasons","the four seasons"] },
      ],
    },
  ],
};
