// Unit 151 — ごい・N3・33 ("N3 vocab 33") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (kentō, koi, kōka) disambiguated via hints.
export const UNIT151 = {
  id: "ja-u151", lang: "ja", title: "ごい・N3・33", order: 151, stage: "b1",
  lessons: [
    {
      id: "ja-u151l1", unit: 151, lesson: 1, title: "N3 vocab 33·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 建築 (construction), 見当 (estimate), 検討 (consideration), 現場 (scene), 憲法 (constitution), 権利 (right).",
      items: [
        { id: "ja-u151l1-kenchiku", type: "vocab", front: "建築", reading: "kenchiku", meaning: "construction", example: { jp: "この建築はとてもうつくしいです。", en: "This architecture is very beautiful." }, accept: ["architecture"] },
        { id: "ja-u151l1-kento", type: "vocab", front: "見当", reading: "kentō", meaning: "estimate", example: { jp: "ねだんの見当がつきません。", en: "I can't estimate the price." }, accept: ["guess"], hint: "見当 (けんとう) = an estimate / guess. Same reading as 検討 (consideration)." },
        { id: "ja-u151l1-kento2", type: "vocab", front: "検討", reading: "kentō", meaning: "consideration", example: { jp: "みんなでよく検討しましょう。", en: "Let's consider it carefully together." }, accept: ["examination", "investigation"], hint: "検討 (けんとう) = careful consideration. Same reading as 見当 (estimate)." },
        { id: "ja-u151l1-genba", type: "vocab", front: "現場", reading: "genba", meaning: "scene", example: { jp: "けいさつが現場にきました。", en: "The police came to the scene." }, accept: ["site", "actual spot"] },
        { id: "ja-u151l1-kenpo", type: "vocab", front: "憲法", reading: "kenpō", meaning: "constitution", example: { jp: "にほんの憲法をべんきょうします。", en: "I study Japan's constitution." }, accept: ["basic law"] },
        { id: "ja-u151l1-kenri", type: "vocab", front: "権利", reading: "kenri", meaning: "right", example: { jp: "みんなに休む権利があります。", en: "Everyone has the right to rest." }, accept: ["privilege"] },
      ],
    },
    {
      id: "ja-u151l2", unit: 151, lesson: 2, title: "N3 vocab 33·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 碁 (go), 恋 (love), 濃い (thick), 恋人 (lover), 幸運 (good luck), 講演 (lecture).",
      items: [
        { id: "ja-u151l2-go", type: "vocab", front: "碁", reading: "go", meaning: "go", example: { jp: "そふと碁をしました。", en: "I played go with my grandfather." }, accept: ["go game", "board game"], hint: "碁 (ご) = Go, the board game of capturing territory." },
        { id: "ja-u151l2-koi", type: "vocab", front: "恋", reading: "koi", meaning: "love", example: { jp: "これははじめての恋です。", en: "This is my first love." }, accept: ["romance"], hint: "恋 (こい) = romantic love. Same reading as 濃い (thick)." },
        { id: "ja-u151l2-koi2", type: "vocab", front: "濃い", reading: "koi", meaning: "thick", example: { jp: "このコーヒーはとても濃いです。", en: "This coffee is very strong." }, accept: ["dense", "strong"], hint: "濃い (こい) = thick / dense / strong. Same reading as 恋 (love)." },
        { id: "ja-u151l2-koibito", type: "vocab", front: "恋人", reading: "koibito", meaning: "lover", example: { jp: "かのじょはわたしの恋人です。", en: "She is my girlfriend." }, accept: ["sweetheart", "girlfriend"] },
        { id: "ja-u151l2-koun", type: "vocab", front: "幸運", reading: "kōun", meaning: "good luck", example: { jp: "きょうはとても幸運でした。", en: "Today I was very lucky." }, accept: ["fortune", "luck"] },
        { id: "ja-u151l2-koen", type: "vocab", front: "講演", reading: "kōen", meaning: "lecture", example: { jp: "せんせいの講演をききました。", en: "I listened to the teacher's lecture." }, accept: ["talk"] },
      ],
    },
    {
      id: "ja-u151l3", unit: 151, lesson: 3, title: "N3 vocab 33·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 効果 (effect), 硬貨 (coin), 高価 (expensive), 豪華 (luxurious), 合格 (passing), 交換 (exchange).",
      items: [
        { id: "ja-u151l3-koka", type: "vocab", front: "効果", reading: "kōka", meaning: "effect", example: { jp: "このくすりには効果があります。", en: "This medicine has an effect." }, accept: ["result"], hint: "効果 (こうか) = effect / result. One of several こうか homographs." },
        { id: "ja-u151l3-koka2", type: "vocab", front: "硬貨", reading: "kōka", meaning: "coin", example: { jp: "さいふに硬貨がたくさんあります。", en: "There are many coins in my wallet." }, accept: ["hard money"], hint: "硬貨 (こうか) = a coin. Same reading as 効果 (effect) and 高価 (expensive)." },
        { id: "ja-u151l3-koka3", type: "vocab", front: "高価", reading: "kōka", meaning: "expensive", example: { jp: "これは高価なとけいです。", en: "This is an expensive watch." }, accept: ["costly", "high-priced"], hint: "高価 (こうか) = expensive / high-priced. Same reading as 効果 (effect)." },
        { id: "ja-u151l3-goka", type: "vocab", front: "豪華", reading: "gōka", meaning: "luxurious", example: { jp: "ホテルの部屋は豪華でした。", en: "The hotel room was luxurious." }, accept: ["gorgeous", "lavish"] },
        { id: "ja-u151l3-gokaku", type: "vocab", front: "合格", reading: "gōkaku", meaning: "passing", example: { jp: "しけんに合格しました。", en: "I passed the exam." }, accept: ["pass", "success"] },
        { id: "ja-u151l3-kokan", type: "vocab", front: "交換", reading: "kōkan", meaning: "exchange", example: { jp: "ともだちとプレゼントを交換しました。", en: "I exchanged presents with a friend." }, accept: ["swap"] },
      ],
    },
    {
      id: "ja-u151l4", unit: 151, lesson: 4, title: "N3 vocab 33·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 航空 (aviation), 光景 (scene), 合計 (total), 攻撃 (attack), 貢献 (contribution), 広告 (advertisement).",
      items: [
        { id: "ja-u151l4-koku", type: "vocab", front: "航空", reading: "kōkū", meaning: "aviation", example: { jp: "兄は航空会社ではたらいています。", en: "My older brother works at an airline company." }, accept: ["flying", "aviation"] },
        { id: "ja-u151l4-kokei", type: "vocab", front: "光景", reading: "kōkei", meaning: "scene", example: { jp: "うつくしい光景をみました。", en: "I saw a beautiful scene." }, accept: ["spectacle", "sight"] },
        { id: "ja-u151l4-gokei", type: "vocab", front: "合計", reading: "gōkei", meaning: "total", example: { jp: "合計でせんえんです。", en: "It's one thousand yen in total." }, accept: ["sum", "sum total"] },
        { id: "ja-u151l4-kogeki", type: "vocab", front: "攻撃", reading: "kōgeki", meaning: "attack", example: { jp: "チームが攻撃をはじめました。", en: "The team began its attack." }, accept: ["strike", "offensive"] },
        { id: "ja-u151l4-koken", type: "vocab", front: "貢献", reading: "kōken", meaning: "contribution", example: { jp: "かれは会社に貢献しました。", en: "He contributed to the company." }, accept: ["service", "help"] },
        { id: "ja-u151l4-kokoku", type: "vocab", front: "広告", reading: "kōkoku", meaning: "advertisement", example: { jp: "テレビで新しい広告をみました。", en: "I saw a new advertisement on TV." }, accept: ["advert", "ad"] },
      ],
    },
  ],
};
