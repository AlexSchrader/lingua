// Unit 181 — ごい・N3・63 ("N3 vocab 63") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (noseru, nobasu, nozoku, noboru, nobiru) disambiguated via hints.
export const UNIT181 = {
  id: "ja-u181", lang: "ja", title: "ごい・N3・63", order: 181, stage: "b1",
  lessons: [
    {
      id: "ja-u181l1", unit: 181, lesson: 1, title: "N3 vocab 63·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 年代 (age), 年齢 (age), 農家 (farmer), 農業 (agriculture), 農民 (farmers), 能力 (ability).",
      items: [
        { id: "ja-u181l1-nendai", type: "vocab", front: "年代", reading: "nendai", meaning: "era", example: { jp: "この年代のふくがすきです。", en: "I like clothes from this era." }, accept: ["age", "period"] },
        { id: "ja-u181l1-nenrei", type: "vocab", front: "年齢", reading: "nenrei", meaning: "age", example: { jp: "年齢をおしえてください。", en: "Please tell me your age." }, accept: ["years"] },
        { id: "ja-u181l1-noka", type: "vocab", front: "農家", reading: "nōka", meaning: "farmer", example: { jp: "あのひとは農家です。", en: "That person is a farmer." }, accept: ["farm family"] },
        { id: "ja-u181l1-nogyo", type: "vocab", front: "農業", reading: "nōgyō", meaning: "agriculture", example: { jp: "かれは農業をしています。", en: "He works in agriculture." }, accept: ["farming"] },
        { id: "ja-u181l1-nomin", type: "vocab", front: "農民", reading: "nōmin", meaning: "farmers", example: { jp: "農民がこめをつくります。", en: "The farmers grow rice." }, accept: ["peasants"] },
        { id: "ja-u181l1-noryoku", type: "vocab", front: "能力", reading: "nōryoku", meaning: "ability", example: { jp: "かれは能力がたかいです。", en: "He has high ability." }, accept: ["faculty"] },
      ],
    },
    {
      id: "ja-u181l2", unit: 181, lesson: 2, title: "N3 vocab 63·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 軒 (eaves), 残す (to leave), 残り (remaining), 乗せる (to place on), 載せる (to place on), 覗く (to peek in).",
      items: [
        { id: "ja-u181l2-noki", type: "vocab", front: "軒", reading: "noki", meaning: "eaves", example: { jp: "とりが軒にとまります。", en: "A bird perches on the eaves." }, accept: ["eave"] },
        { id: "ja-u181l2-nokosu", type: "vocab", front: "残す", reading: "nokosu", meaning: "to leave", example: { jp: "ごはんを残さないでください。", en: "Please do not leave your food." }, accept: ["to save", "to reserve"] },
        { id: "ja-u181l2-nokori", type: "vocab", front: "残り", reading: "nokori", meaning: "remaining", example: { jp: "残りはあしたたべます。", en: "I will eat the rest tomorrow." }, accept: ["left-over", "the rest"] },
        { id: "ja-u181l2-noseru", type: "vocab", front: "乗せる", reading: "noseru", meaning: "to place on", example: { jp: "にもつをくるまに乗せます。", en: "I load the luggage onto the car." }, accept: ["to put on", "to take on board"], hint: "乗せる (のせる) = to place on / load; same reading as 載せる." },
        { id: "ja-u181l2-noseru2", type: "vocab", front: "載せる", reading: "noseru", meaning: "to place on", example: { jp: "しんぶんにきじを載せます。", en: "I publish an article in the newspaper." }, accept: ["to publish", "to print"], hint: "載せる (のせる) = to place on / publish; same reading as 乗せる." },
        { id: "ja-u181l2-nozoku", type: "vocab", front: "覗く", reading: "nozoku", meaning: "to peek in", example: { jp: "まどからなかを覗きます。", en: "I peek inside through the window." }, accept: ["to look in"], hint: "覗く (のぞく) = to peek in; same reading as 除く (to remove)." },
      ],
    },
    {
      id: "ja-u181l3", unit: 181, lesson: 3, title: "N3 vocab 63·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 除く (to remove), 望み (wish), 望む (to desire), 伸ばす (to extend), 延ばす (to extend), 伸びる (to extend).",
      items: [
        { id: "ja-u181l3-nozoku2", type: "vocab", front: "除く", reading: "nozoku", meaning: "to remove", example: { jp: "わたしを除いてみんないきました。", en: "Everyone went except me." }, accept: ["to exclude", "to except"], hint: "除く (のぞく) = to remove / exclude; same reading as 覗く (to peek in)." },
        { id: "ja-u181l3-nozomi", type: "vocab", front: "望み", reading: "nozomi", meaning: "wish", example: { jp: "わたしの望みはせかいりょこうです。", en: "My wish is to travel the world." }, accept: ["desire", "hope"] },
        { id: "ja-u181l3-nozomu", type: "vocab", front: "望む", reading: "nozomu", meaning: "to desire", example: { jp: "へいわを望みます。", en: "I hope for peace." }, accept: ["to wish for", "to hope"] },
        { id: "ja-u181l3-nobasu", type: "vocab", front: "伸ばす", reading: "nobasu", meaning: "to extend", example: { jp: "せなかを伸ばします。", en: "I stretch my back." }, accept: ["to stretch", "to lengthen"], hint: "伸ばす (のばす) = to stretch / lengthen (length); same reading as 延ばす." },
        { id: "ja-u181l3-nobasu2", type: "vocab", front: "延ばす", reading: "nobasu", meaning: "to extend", example: { jp: "かいぎを来週に延ばします。", en: "I postpone the meeting to next week." }, accept: ["to postpone", "to prolong"], hint: "延ばす (のばす) = to postpone / prolong (time); same reading as 伸ばす." },
        { id: "ja-u181l3-nobiru", type: "vocab", front: "伸びる", reading: "nobiru", meaning: "to extend", example: { jp: "きのえだが伸びます。", en: "The tree branch grows." }, accept: ["to grow", "to make progress"], hint: "伸びる (のびる) = to grow / lengthen; same reading as 延びる." },
      ],
    },
    {
      id: "ja-u181l4", unit: 181, lesson: 4, title: "N3 vocab 63·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 延びる (to be prolonged), 述べる (to state), 上る (to ascend), 昇る (to rise), 載る (to appear), 灰 (ash).",
      items: [
        { id: "ja-u181l4-nobiru2", type: "vocab", front: "延びる", reading: "nobiru", meaning: "to be prolonged", example: { jp: "かいぎが延びました。", en: "The meeting ran long." }, accept: ["to be extended", "to lengthen"], hint: "延びる (のびる) = to be prolonged (time); same reading as 伸びる." },
        { id: "ja-u181l4-noberu", type: "vocab", front: "述べる", reading: "noberu", meaning: "to state", example: { jp: "いけんを述べます。", en: "I state my opinion." }, accept: ["to express", "to mention"] },
        { id: "ja-u181l4-noboru", type: "vocab", front: "上る", reading: "noboru", meaning: "to ascend", example: { jp: "かいだんを上ります。", en: "I go up the stairs." }, accept: ["to go up", "to climb"], hint: "上る (のぼる) = to climb / go up; same reading as 昇る." },
        { id: "ja-u181l4-noboru2", type: "vocab", front: "昇る", reading: "noboru", meaning: "to rise", example: { jp: "たいようが昇ります。", en: "The sun rises." }, accept: ["to ascend", "to go up"], hint: "昇る (のぼる) = to rise (sun); same reading as 上る." },
        { id: "ja-u181l4-noru", type: "vocab", front: "載る", reading: "noru", meaning: "to appear", example: { jp: "なまえがしんぶんに載りました。", en: "My name appeared in the newspaper." }, accept: ["to be listed", "to be recorded"] },
        { id: "ja-u181l4-hai", type: "vocab", front: "灰", reading: "hai", meaning: "ash", example: { jp: "たばこの灰がおちました。", en: "The cigarette ash fell." }, accept: ["ashes"] },
      ],
    },
  ],
};
