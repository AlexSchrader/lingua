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
        { id: "ja-u103l1-hikaku", type: "vocab", front: "ひかく", reading: "hikaku", meaning: "comparison", example: { jp: "ふたつの みせの ねだんを ひかくしてから、やすい ほうで かいました。", en: "I compared the prices at the two shops, then bought at the cheaper one." }, drill: { jp: "ひかくは むずかしいです。", en: "Comparison is difficult." }, accept: ["comparing", "contrast", "a comparison"], hint: "hi-KA-ku — three beats. The two things being compared take と: 「AとBを ひかくする」. くらべる is the everyday verb; ひかく is the noun you meet in writing and on price labels." },
        { id: "ja-u103l1-niru", type: "vocab", front: "にる", reading: "niru", meaning: "to resemble", example: { jp: "あの ふたりは かおが にて いますが、せいかくは ぜんぜん ちがいます。", en: "Those two look alike, but their personalities are completely different." }, drill: { jp: "ちちと こえが にる。", en: "My voice resembles my father's." }, accept: ["to be similar", "to look like", "resemble"], hint: "にる lives in the ～て いる form: 「にて います」 = looks like. 「にます」 on its own sounds wrong." },
        { id: "ja-u103l1-kotonaru", type: "vocab", front: "ことなる", reading: "kotonaru", meaning: "to differ", example: { jp: "くにによって しゅうかんは ことなりますから、しらべて おいた ほうが いいです。", en: "Customs differ from country to country, so it's better to look them up in advance." }, drill: { jp: "しゅうかんが ことなる。", en: "The customs differ." }, accept: ["to be different", "to vary", "differ"], hint: "ことなる is the written form of ちがいます — reports and signs use it, conversation uses ちがう." },
        { id: "ja-u103l1-onajiku", type: "vocab", front: "おなじく", reading: "onajiku", meaning: "likewise", example: { jp: "あには だいがくせいで、あねも おなじく だいがくで べんきょうして います。", en: "My older brother is a university student, and my older sister is likewise studying at university." }, drill: { jp: "わたしも おなじく さんせいです。", en: "I am likewise in favour." }, accept: ["similarly", "the same way", "equally"], hint: "o-na-JI-ku — four beats. The adverb form of おなじ, used to extend a statement to a second case. It is formal: a list of names on a notice uses おなじく where speech would just repeat も." },
        { id: "ja-u103l1-taishite", type: "vocab", front: "たいして", reading: "taishite", meaning: "in contrast to", example: { jp: "あには しずかなのに たいして、おとうとは とても げんきです。", en: "In contrast to my quiet older brother, my younger brother is very lively." }, drill: { jp: "なつに たいして ふゆは しずかです。", en: "In contrast to summer, winter is quiet." }, accept: ["as opposed to", "towards", "against"], hint: "～に たいして sets two things against each other. After a な-adjective it needs なのに たいして." },
        { id: "ja-u103l1-warini", type: "vocab", front: "わりに", reading: "warini", meaning: "for (considering)", example: { jp: "この レストランは ねだんの わりに おいしいので、いつも こんで います。", en: "This restaurant is good for the price, so it's always crowded." }, drill: { jp: "としの わりに わかく みえます。", en: "She looks young for her age." }, accept: ["considering", "relatively", "for its"], hint: "wa-ri-NI — three beats. わり is a ratio, so it measures against what you would expect. It nearly always introduces a surprise, which is why the second half of the sentence contradicts the first." },
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
        { id: "ja-u103l2-teido", type: "vocab", front: "ていど", reading: "teido", meaning: "extent", example: { jp: "えきまでは じゅっぷん ていどですから、あるいて いけます。", en: "It's about ten minutes to the station, so we can walk." }, drill: { jp: "その ていどなら だいじょうぶです。", en: "At that level it is fine." }, accept: ["degree", "level", "about"], hint: "After a number ていど means \"roughly\"; after a noun it means \"the level of\": にほんごの ていど." },
        { id: "ja-u103l2-isso", type: "vocab", front: "いっそう", reading: "issō", meaning: "even more", example: { jp: "ことしの なつは きょねんより いっそう あついので、そとに でたく ありません。", en: "This summer is even hotter than last year, so I don't want to go out." }, drill: { jp: "れんしゅうを いっそう がんばります。", en: "I will work even harder at practice." }, accept: ["still more", "all the more", "further"], hint: "is-SŌ — small pause, then a long sou. It stacks more on top of an amount already high, so something must already be true. もっと simply asks for more; いっそう builds on what is there." },
        { id: "ja-u103l2-yaya", type: "vocab", front: "やや", reading: "yaya", meaning: "slightly", example: { jp: "きょうは きのうより やや さむいですが、コートは いりません。", en: "Today is slightly colder than yesterday, but you don't need a coat." }, drill: { jp: "ねだんが やや たかいです。", en: "The price is slightly high." }, accept: ["a little", "somewhat", "a bit"], hint: "YA-ya — two flat beats. A written, measured slightly — the word a report uses. すこし is the spoken version, and ちょっと the casual one; all three mark the same small amount." },
        { id: "ja-u103l2-sarani", type: "vocab", front: "さらに", reading: "sarani", meaning: "further", example: { jp: "ねだんが さらに たかく なったので、かうのを やめました。", en: "The price went up further, so I gave up on buying it." }, drill: { jp: "さらに もんだいが ふえました。", en: "The problems increased further." }, accept: ["moreover", "even more", "additionally"], hint: "sa-ra-NI — three beats. It adds a second step to a first one, so it reads as and on top of that. もっと compares two amounts; さらに continues a movement already under way." },
        { id: "ja-u103l2-wazuka", type: "vocab", front: "わずか", reading: "wazuka", meaning: "only a little", example: { jp: "じかんは わずか ごふんでしたから、みんな いそぎました。", en: "There were only five minutes left, so everyone hurried." }, drill: { jp: "わずかな じかんで おわりました。", en: "It finished in only a little time." }, accept: ["slight", "mere", "just"], hint: "WA-zu-ka — three beats. It marks an amount as surprisingly small, so it often sits next to a number: 「わずか ごふん」. すこし is neutral; わずか says that is not much." },
        { id: "ja-u103l2-soto", type: "vocab", front: "そうとう", reading: "sōtō", meaning: "considerably (a good deal)", example: { jp: "この しごとは そうとう じかんが かかりますが、とても たのしいです。", en: "This job takes a considerable amount of time, but it's very enjoyable." }, drill: { jp: "そうとう つかれました。", en: "I am considerably tired." }, accept: ["quite", "fairly", "a good deal"], hint: "sō-TŌ — two long beats. It means a good deal, with a hint that you are weighing it up. ⚠️ Spelled the same as そうとう meaning corresponding to — 「～に そうとうする」, a separate word." },
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
        { id: "ja-u103l3-saiko", type: "vocab", front: "さいこう", reading: "saikō", meaning: "the best", example: { jp: "きょうの てんきは さいこうですから、そとで ひるごはんを たべましょう。", en: "The weather today is the best, so let's eat lunch outside." }, drill: { jp: "この えいがは さいこうです。", en: "This film is the best." }, accept: ["highest", "greatest", "top"], hint: "sai-KŌ — the second beat is long. さい is most and こう is high. It is also everyday slang for brilliant: 「さいこう！」 after a meal. いちばん ranks within a set; さいこう is simply top." },
        { id: "ja-u103l3-saitei", type: "vocab", front: "さいてい", reading: "saitei", meaning: "the worst", example: { jp: "きのうの てんきは さいていでしたが、きょうは さいこうです。", en: "Yesterday's weather was the worst, but today's is the best." }, drill: { jp: "けっかは さいていでした。", en: "The result was the worst." }, accept: ["lowest", "minimum", "terrible"], hint: "sai-TEI — two beats, tei said as written. さい is most and てい is low — the exact mirror of さいこう. Said of a person it means contemptible, so it is a harsh word to use about someone." },
        { id: "ja-u103l3-masaru", type: "vocab", front: "まさる", reading: "masaru", meaning: "to surpass", example: { jp: "この カメラは ねだんが たかいですが、ほかの カメラより まさって います。", en: "This camera is expensive, but it surpasses the others." }, drill: { jp: "ほかより まさる。", en: "It surpasses the others." }, accept: ["to be better", "to excel", "to outdo"], hint: "ma-SA-ru — three beats. What it beats takes より or に: 「ほかより まさる」. It is formal and comparative, not praise on its own — the thing it surpasses has to be named or implied." },
        { id: "ja-u103l3-otoru", type: "vocab", front: "おとる", reading: "otoru", meaning: "to be inferior", example: { jp: "この ほうほうは はやさでは おとりますが、あんぜんです。", en: "This method is inferior on speed, but it's safe." }, drill: { jp: "ほかの みせに おとる。", en: "It is inferior to the other shops." }, accept: ["to be worse", "to fall behind", "to be outdone"], hint: "まさる and おとる are a pair — both take より for what you measure against." },
        { id: "ja-u103l3-hitoshii", type: "vocab", front: "ひとしい", reading: "hitoshii", meaning: "equal", example: { jp: "この クラスは おとこの ひとと おんなの ひとの かずが ほとんど ひとしいです。", en: "In this class the number of men and women is almost equal." }, drill: { jp: "ふたつの かずは ひとしいです。", en: "The two numbers are equal." }, accept: ["the same", "identical", "even"], hint: "hi-to-SHĪ — four beats, the last one long. Equal in amount or value, so it is the word for a mathematical equals. おなじ means the same KIND of thing; ひとしい means the same QUANTITY." },
        { id: "ja-u103l3-heikin", type: "vocab", front: "へいきん", reading: "heikin", meaning: "average", example: { jp: "この クラスの てんの へいきんは たかいですが、わたしは ひくかったです。", en: "The class average score is high, but mine was low." }, drill: { jp: "へいきんの てんは たかいです。", en: "The average mark is high." }, accept: ["mean", "on average", "the average"], hint: "hei-KIN — two beats, the ん held. へい is level and きん is even, so it is the levelled-out figure. As an adverb 「へいきん して」 means on average, and it takes より for comparisons." },
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
        { id: "ja-u103l4-heru", type: "vocab", front: "へる", reading: "heru", meaning: "to decrease", example: { jp: "この まちの こどもの かずは まいとし へって いて、がっこうも すくなく なりました。", en: "The number of children in this town falls every year, and the schools have shrunk too." }, drill: { jp: "こどもの かずが へる。", en: "The number of children decreases." }, accept: ["to go down", "to diminish", "decrease"], hint: "HE-ru — two beats. It falls by itself, so what decreases takes が. Reducing it on purpose is へらす. ふえる is its mirror, and the two always travel together in a report." },
        { id: "ja-u103l4-taihan", type: "vocab", front: "たいはん", reading: "taihan", meaning: "most of", example: { jp: "クラスの たいはんの ひとが その えいがを みて、とても よかったと いって いました。", en: "Most of the class saw that film and said it was very good." }, drill: { jp: "たいはんは おわりました。", en: "Most of it is finished." }, accept: ["the majority", "the greater part", "most"], hint: "tai-HAN — two beats, the ん held. たい is large and はん is half, so it is more than half — a clear majority. たすう counts the PEOPLE; たいはん measures the PROPORTION." },
        { id: "ja-u103l4-zentai", type: "vocab", front: "ぜんたい", reading: "zentai", meaning: "the whole", example: { jp: "まちぜんたいが しずかで、とても きもちが よかったです。", en: "The whole town was quiet, and it felt very good." }, drill: { jp: "ぜんたいの けいかくを せつめいします。", en: "I will explain the whole plan." }, accept: ["entirety", "overall", "all of it"], hint: "zen-TA-i — three beats, the ん held. ぜん is all and たい is a body, so it is the thing taken as one. It attaches directly to a noun — まちぜんたい, the whole town — with no の needed." },
        { id: "ja-u103l4-ichibu", type: "vocab", front: "いちぶ", reading: "ichibu", meaning: "a part", example: { jp: "いちぶの みせは にちようびも あいて いますが、たいていは やすみです。", en: "Some of the shops are open on Sundays too, but most are closed." }, drill: { jp: "いちぶの ひとは はんたいしました。", en: "Some of the people were against it." }, accept: ["some", "a portion", "partly"], hint: "いちぶ and ぜんたい are the pair: いちぶ = a slice of it, ぜんたい = the whole of it." },
        { id: "ja-u103l4-tasu", type: "vocab", front: "たすう", reading: "tasū", meaning: "a large number", example: { jp: "たすうの ひとが その いけんに さんせいしましたから、けいかくは すすみます。", en: "A large number of people agreed with that opinion, so the plan goes ahead." }, drill: { jp: "たすうの ひとが あつまりました。", en: "A large number of people gathered." }, accept: ["many", "the majority", "numerous"], hint: "ta-SŪ — the second beat is long. た is many and すう is a number, so it is a count rather than a share. In a vote it is the side with more votes, which is why さんせい follows it so often." },
        { id: "ja-u103l4-shosu", type: "vocab", front: "しょうすう", reading: "shōsū", meaning: "a small number", example: { jp: "しょうすうの ひとが はんたいしましたが、たすうは さんせいでした。", en: "A small number of people were against it, but the majority agreed." }, drill: { jp: "しょうすうの いけんも たいせつです。", en: "The minority view matters too." }, accept: ["few", "minority", "the fewer side"], hint: "shō-SŪ — two long beats. しょう is few and すう is a number, the mirror of たすう. ⚠️ しょうすう also means a decimal fraction in arithmetic — the same kana, a different word." },
      ],
    },
  ],
};
