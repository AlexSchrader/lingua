// Unit 103 — ひかく・ていど (Comparison and degree) — B1 / JLPT N3
// Strand B. Comparing two things and grading how much: likeness and difference,
// adverbs of degree, better/worse/equal, and the language of proportions.
// より, ほど, いちばん, もっとも and くらべます are already taught below B1 — this unit
// adds the layer above them, so they appear in examples but are not re-taught.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT103 = {
  id: "ja-u103",
  lang: "ja",
  title: "ひかく・ていど",
  order: 103,
  stage: "b1",
  lessons: [
    {
      id: "ja-u103l1",
      unit: 103,
      lesson: 1,
      title: "Alike and unlike",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how two things resemble or differ from each other: ひかく にる ことなる おなじく たいして わりに.",
      items: [
        { id: "ja-u103l1-hikaku", type: "vocab", front: "ひかく", reading: "hikaku", meaning: "comparison", example: { jp: "ふたつの みせの ねだんを ひかくしてから、やすい ほうで かいました。", en: "I compared the prices at the two shops, then bought at the cheaper one." }, accept: ["comparing", "contrast"] },
        { id: "ja-u103l1-niru", type: "vocab", front: "にる", reading: "niru", meaning: "to resemble", example: { jp: "あの ふたりは かおが にて いますが、せいかくは ぜんぜん ちがいます。", en: "Those two look alike, but their personalities are completely different." }, accept: ["to be similar", "to look like", "resemble"], hint: "にる lives in the ～て いる form: 「にて います」 = looks like. 「にます」 on its own sounds wrong." },
        { id: "ja-u103l1-kotonaru", type: "vocab", front: "ことなる", reading: "kotonaru", meaning: "to differ", example: { jp: "くにによって しゅうかんは ことなりますから、しらべて おいた ほうが いいです。", en: "Customs differ from country to country, so it's better to look them up in advance." }, accept: ["to be different", "to vary", "differ"], hint: "ことなる is the written form of ちがいます — reports and signs use it, conversation uses ちがう." },
        { id: "ja-u103l1-onajiku", type: "vocab", front: "おなじく", reading: "onajiku", meaning: "likewise", example: { jp: "あには だいがくせいで、あねも おなじく だいがくで べんきょうして います。", en: "My older brother is a university student, and my older sister is likewise studying at university." }, accept: ["similarly", "the same way", "equally"] },
        { id: "ja-u103l1-taishite", type: "vocab", front: "たいして", reading: "taishite", meaning: "in contrast to", example: { jp: "あには しずかなのに たいして、おとうとは とても げんきです。", en: "In contrast to my quiet older brother, my younger brother is very lively." }, accept: ["as opposed to", "towards", "against"], hint: "～に たいして sets two things against each other. After a な-adjective it needs なのに たいして." },
        { id: "ja-u103l1-warini", type: "vocab", front: "わりに", reading: "warini", meaning: "for (considering)", example: { jp: "この レストランは ねだんの わりに おいしいです。", en: "This restaurant is good for the price." }, accept: ["considering", "relatively", "for its"] },
      ],
    },
    {
      id: "ja-u103l2",
      unit: 103,
      lesson: 2,
      title: "How much",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade a statement by degree instead of leaving it flat: ていど いっそう やや さらに わずか そうとう.",
      items: [
        { id: "ja-u103l2-teido", type: "vocab", front: "ていど", reading: "teido", meaning: "extent", example: { jp: "えきまでは じゅっぷん ていどですから、あるいて いけます。", en: "It's about ten minutes to the station, so we can walk." }, accept: ["degree", "level", "about"], hint: "After a number ていど means \"roughly\"; after a noun it means \"the level of\": にほんごの ていど." },
        { id: "ja-u103l2-isso", type: "vocab", front: "いっそう", reading: "issō", meaning: "even more", example: { jp: "ことしの なつは きょねんより いっそう あついです。", en: "This summer is even hotter than last year." }, accept: ["still more", "all the more", "further"] },
        { id: "ja-u103l2-yaya", type: "vocab", front: "やや", reading: "yaya", meaning: "slightly", example: { jp: "きょうは きのうより やや さむいですが、コートは いりません。", en: "Today is slightly colder than yesterday, but you don't need a coat." }, accept: ["a little", "somewhat", "a bit"] },
        { id: "ja-u103l2-sarani", type: "vocab", front: "さらに", reading: "sarani", meaning: "further", example: { jp: "ねだんが さらに たかく なったので、かうのを やめました。", en: "The price went up further, so I gave up on buying it." }, accept: ["moreover", "even more", "additionally"] },
        { id: "ja-u103l2-wazuka", type: "vocab", front: "わずか", reading: "wazuka", meaning: "only a little", example: { jp: "じかんは わずか ごふんでしたから、みんな いそぎました。", en: "There were only five minutes left, so everyone hurried." }, accept: ["slight", "mere", "just"] },
        { id: "ja-u103l2-soto", type: "vocab", front: "そうとう", reading: "sōtō", meaning: "considerably", example: { jp: "この しごとは そうとう じかんが かかりますが、とても たのしいです。", en: "This job takes considerably long, but it's very enjoyable." }, accept: ["quite", "fairly", "a good deal"] },
      ],
    },
    {
      id: "ja-u103l3",
      unit: 103,
      lesson: 3,
      title: "Better, worse, equal",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Rank things against each other: さいこう さいてい まさる おとる ひとしい へいきん.",
      items: [
        { id: "ja-u103l3-saiko", type: "vocab", front: "さいこう", reading: "saikō", meaning: "the best", example: { jp: "きょうの てんきは さいこうですから、そとで ひるごはんを たべましょう。", en: "The weather today is the best, so let's eat lunch outside." }, accept: ["highest", "greatest", "top"] },
        { id: "ja-u103l3-saitei", type: "vocab", front: "さいてい", reading: "saitei", meaning: "the worst", example: { jp: "きのうの てんきは さいていでしたが、きょうは さいこうです。", en: "Yesterday's weather was the worst, but today's is the best." }, accept: ["lowest", "minimum", "terrible"] },
        { id: "ja-u103l3-masaru", type: "vocab", front: "まさる", reading: "masaru", meaning: "to surpass", example: { jp: "この カメラは ねだんが たかいですが、ほかの カメラより まさって います。", en: "This camera is expensive, but it surpasses the others." }, accept: ["to be better", "to excel", "to outdo"] },
        { id: "ja-u103l3-otoru", type: "vocab", front: "おとる", reading: "otoru", meaning: "to be inferior", example: { jp: "この ほうほうは じかんが かかる ところが おとりますが、あんぜんです。", en: "This method is inferior in the time it takes, but it's safe." }, accept: ["to be worse", "to fall behind", "to be outdone"], hint: "まさる and おとる are a pair — both take より for what you measure against." },
        { id: "ja-u103l3-hitoshii", type: "vocab", front: "ひとしい", reading: "hitoshii", meaning: "equal", example: { jp: "この クラスは おとこの ひとと おんなの ひとの かずが ほとんど ひとしいです。", en: "In this class the number of men and women is almost equal." }, accept: ["the same", "identical", "even"] },
        { id: "ja-u103l3-heikin", type: "vocab", front: "へいきん", reading: "heikin", meaning: "average", example: { jp: "この クラスの てんの へいきんは たかいですが、わたしは ひくかったです。", en: "The class average score is high, but mine was low." }, accept: ["mean", "on average"] },
      ],
    },
    {
      id: "ja-u103l4",
      unit: 103,
      lesson: 4,
      title: "How many of them",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about parts of a whole and which way the numbers move: へる たいはん ぜんたい いちぶ たすう しょうすう.",
      items: [
        { id: "ja-u103l4-heru", type: "vocab", front: "へる", reading: "heru", meaning: "to decrease", example: { jp: "この まちの こどもの かずは まいとし へって います。", en: "The number of children in this town is decreasing every year." }, accept: ["to go down", "to diminish", "decrease"] },
        { id: "ja-u103l4-taihan", type: "vocab", front: "たいはん", reading: "taihan", meaning: "most of", example: { jp: "クラスの たいはんの ひとが その えいがを みました。", en: "Most of the class saw that film." }, accept: ["the majority", "the greater part"] },
        { id: "ja-u103l4-zentai", type: "vocab", front: "ぜんたい", reading: "zentai", meaning: "the whole", example: { jp: "まちぜんたいが しずかで、とても きもちが よかったです。", en: "The whole town was quiet, and it felt very good." }, accept: ["entirety", "overall", "all of it"] },
        { id: "ja-u103l4-ichibu", type: "vocab", front: "いちぶ", reading: "ichibu", meaning: "a part", example: { jp: "いちぶの みせは にちようびも あいて いますが、たいていは やすみです。", en: "Some of the shops are open on Sundays too, but most are closed." }, accept: ["some", "a portion", "partly"], hint: "いちぶ and ぜんたい are the pair: いちぶ = a slice of it, ぜんたい = the whole of it." },
        { id: "ja-u103l4-tasu", type: "vocab", front: "たすう", reading: "tasū", meaning: "a large number", example: { jp: "たすうの ひとが その いけんに さんせいしました。", en: "A large number of people agreed with that opinion." }, accept: ["many", "the majority", "numerous"] },
        { id: "ja-u103l4-shosu", type: "vocab", front: "しょうすう", reading: "shōsū", meaning: "a small number", example: { jp: "しょうすうの ひとが はんたいしましたが、たすうは さんせいでした。", en: "A small number of people were against it, but the majority agreed." }, accept: ["few", "minority"] },
      ],
    },
  ],
};
