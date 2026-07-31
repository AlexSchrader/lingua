// Unit 160 — ごい・N3・42 ("N3 vocab 42") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (yōki) disambiguated via hints.
export const UNIT160 = {
  id: "ja-u160", lang: "ja", title: "ごい・N3・42", order: 160, stage: "b1",
  lessons: [
    {
      id: "ja-u160l1", unit: 160, lesson: 1, title: "N3 vocab 42·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 郵便 (mail), 有利 (advantageous), 床 (floor), 愉快 (pleasant), 譲る (to give up), 豊か (abundant).",
      items: [
        { id: "ja-u160l1-yubin", type: "vocab", front: "郵便", reading: "yūbin", meaning: "mail", example: { jp: "郵便でにもつをおくりました。", en: "I sent the package by mail." }, accept: ["post", "postal service"] },
        { id: "ja-u160l1-yuri", type: "vocab", front: "有利", reading: "yūri", meaning: "advantageous", example: { jp: "おおきいチームのほうが有利です。", en: "A bigger team is more advantageous." }, accept: ["favorable", "better"], hint: "有利 (ゆうり) = advantageous. Opposite: 不利 (ふり)." },
        { id: "ja-u160l1-yuka", type: "vocab", front: "床", reading: "yuka", meaning: "floor", example: { jp: "こどもが床にすわっています。", en: "The child is sitting on the floor." }, accept: ["flooring"] },
        { id: "ja-u160l1-yukai", type: "vocab", front: "愉快", reading: "yukai", meaning: "pleasant", example: { jp: "きのうのパーティーは愉快でした。", en: "Yesterday's party was fun." }, accept: ["fun", "cheerful"], hint: "愉快な (ゆかいな) = fun / pleasant — a な-adjective." },
        { id: "ja-u160l1-yuzuru", type: "vocab", front: "譲る", reading: "yuzuru", meaning: "to give up", example: { jp: "おとしよりにせきを譲りました。", en: "I gave up my seat to an elderly person." }, accept: ["to hand over", "to yield"], hint: "席を譲る (せきをゆずる) = to give up your seat." },
        { id: "ja-u160l1-yutaka", type: "vocab", front: "豊か", reading: "yutaka", meaning: "abundant", example: { jp: "このくにはしぜんが豊かです。", en: "This country is rich in nature." }, accept: ["rich", "plentiful"], hint: "豊か (ゆたか) = abundant / rich — a な-adjective." },
      ],
    },
    {
      id: "ja-u160l2", unit: 160, lesson: 2, title: "N3 vocab 42·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 茹でる (to boil), 許す (to permit), 夜明け (dawn), 酔う (to get drunk), 容易 (easy), 容器 (container).",
      items: [
        { id: "ja-u160l2-yuderu", type: "vocab", front: "茹でる", reading: "yuderu", meaning: "to boil", example: { jp: "たまごをおゆで茹でます。", en: "I boil eggs in hot water." }, accept: ["to boil in water"], hint: "茹でる (ゆでる) = to boil food in water (eggs, noodles)." },
        { id: "ja-u160l2-yurusu", type: "vocab", front: "許す", reading: "yurusu", meaning: "to permit", example: { jp: "ちちはりょこうを許しました。", en: "My father permitted the trip." }, accept: ["to allow", "to forgive"] },
        { id: "ja-u160l2-yoake", type: "vocab", front: "夜明け", reading: "yoake", meaning: "dawn", example: { jp: "夜明けにやまへのぼりました。", en: "I climbed the mountain at dawn." }, accept: ["daybreak"] },
        { id: "ja-u160l2-yo", type: "vocab", front: "酔う", reading: "yō", meaning: "to get drunk", example: { jp: "かれはビールで酔いました。", en: "He got drunk on beer." }, accept: ["to become drunk", "to feel sick"], hint: "酔う (よう) = to get drunk; also 車に酔う = to get motion sickness." },
        { id: "ja-u160l2-yoi", type: "vocab", front: "容易", reading: "yōi", meaning: "easy", example: { jp: "このもんだいは容易です。", en: "This problem is easy." }, accept: ["simple", "plain"] },
        { id: "ja-u160l2-yoki", type: "vocab", front: "容器", reading: "yōki", meaning: "container", example: { jp: "この容器にみずをいれます。", en: "I put water in this container." }, accept: ["vessel"], hint: "容器 (ようき) = container. Same reading as 陽気 (cheerful)." },
      ],
    },
    {
      id: "ja-u160l3", unit: 160, lesson: 3, title: "N3 vocab 42·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 陽気 (cheerful), 要求 (request), 用心 (care), 様子 (aspect), 要するに (in short), 要素 (element).",
      items: [
        { id: "ja-u160l3-yoki2", type: "vocab", front: "陽気", reading: "yōki", meaning: "cheerful", example: { jp: "かのじょは陽気なひとです。", en: "She is a cheerful person." }, accept: ["merry", "lively"], hint: "陽気な (ようきな) = cheerful. Same reading as 容器 (container)." },
        { id: "ja-u160l3-yokyu", type: "vocab", front: "要求", reading: "yōkyū", meaning: "request", example: { jp: "かれらはたかいきゅうりょうを要求しました。", en: "They demanded a high salary." }, accept: ["demand"] },
        { id: "ja-u160l3-yojin", type: "vocab", front: "用心", reading: "yōjin", meaning: "care", example: { jp: "どろぼうに用心してください。", en: "Please watch out for thieves." }, accept: ["precaution", "caution"], hint: "用心する (ようじんする) = to be careful / take precautions." },
        { id: "ja-u160l3-yosu", type: "vocab", front: "様子", reading: "yōsu", meaning: "aspect", example: { jp: "かれの様子がへんでした。", en: "His manner was strange." }, accept: ["state", "appearance"] },
        { id: "ja-u160l3-yosuruni", type: "vocab", front: "要するに", reading: "yōsuruni", meaning: "in short", example: { jp: "要するに、それはむりです。", en: "In short, it's impossible." }, accept: ["in a word", "after all"] },
        { id: "ja-u160l3-yoso", type: "vocab", front: "要素", reading: "yōso", meaning: "element", example: { jp: "これはたいせつな要素です。", en: "This is an important element." }, accept: ["factor", "component"] },
      ],
    },
    {
      id: "ja-u160l4", unit: 160, lesson: 4, title: "N3 vocab 42·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 要点 (gist), 曜日 (day of the week), 予期 (expectation), 横切る (to cross), 汚す (to pollute), 予算 (budget).",
      items: [
        { id: "ja-u160l4-yoten", type: "vocab", front: "要点", reading: "yōten", meaning: "gist", example: { jp: "はなしの要点をおしえてください。", en: "Please tell me the gist of the talk." }, accept: ["main point", "key point"] },
        { id: "ja-u160l4-yobi", type: "vocab", front: "曜日", reading: "yōbi", meaning: "day of the week", example: { jp: "きょうはなん曜日ですか。", en: "What day of the week is it today?" }, accept: ["weekday"] },
        { id: "ja-u160l4-yoki3", type: "vocab", front: "予期", reading: "yoki", meaning: "expectation", example: { jp: "けっかは予期どおりでした。", en: "The result was as expected." }, accept: ["anticipation", "forecast"] },
        { id: "ja-u160l4-yokogiru", type: "vocab", front: "横切る", reading: "yokogiru", meaning: "to cross", example: { jp: "ねこがみちを横切りました。", en: "A cat crossed the road." }, accept: ["to cut across", "to traverse"] },
        { id: "ja-u160l4-yogosu", type: "vocab", front: "汚す", reading: "yogosu", meaning: "to pollute", example: { jp: "こどもがふくを汚しました。", en: "The child made the clothes dirty." }, accept: ["to make dirty", "to soil"] },
        { id: "ja-u160l4-yosan", type: "vocab", front: "予算", reading: "yosan", meaning: "budget", example: { jp: "りょこうの予算をきめました。", en: "We decided the travel budget." }, accept: ["estimate"] },
      ],
    },
  ],
};
