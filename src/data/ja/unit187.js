// Unit 187 — ごい・N3・69 ("N3 vocab 69") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (fuyasu ×2) disambiguated via hints.
export const UNIT187 = {
  id: "ja-u187", lang: "ja", title: "ごい・N3・69", order: 187, stage: "b1",
  lessons: [
    {
      id: "ja-u187l1", unit: 187, lesson: 1, title: "N3 vocab 69·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 打つ (to hit), 不通 (interruption), 物価 (prices), ぶつかる (to collide), ぶつける (to knock), 物質 (substance).",
      items: [
        { id: "ja-u187l1-butsu", type: "vocab", front: "打つ", reading: "butsu", meaning: "to hit", example: { jp: "バットでボールを打ちます。", en: "I hit the ball with a bat." }, accept: ["to strike"] },
        { id: "ja-u187l1-futsu", type: "vocab", front: "不通", reading: "futsū", meaning: "interruption", example: { jp: "じこででんしゃが不通です。", en: "The trains are stopped because of an accident." }, accept: ["stoppage", "blockade"] },
        { id: "ja-u187l1-bukka", type: "vocab", front: "物価", reading: "bukka", meaning: "prices", example: { jp: "このまちは物価がたかいです。", en: "Prices are high in this town." }, accept: ["cost of living"] },
        { id: "ja-u187l1-butsukaru", type: "vocab", front: "ぶつかる", reading: "butsukaru", meaning: "to collide", example: { jp: "くるまがかべにぶつかりました。", en: "The car collided with the wall." }, accept: ["to strike", "to bump into"] },
        { id: "ja-u187l1-butsukeru", type: "vocab", front: "ぶつける", reading: "butsukeru", meaning: "to knock", example: { jp: "あたまをドアにぶつけました。", en: "I knocked my head on the door." }, accept: ["to strike hard", "to hit"] },
        { id: "ja-u187l1-busshitsu", type: "vocab", front: "物質", reading: "busshitsu", meaning: "substance", example: { jp: "これはあぶない物質です。", en: "This is a dangerous substance." }, accept: ["material"] },
      ],
    },
    {
      id: "ja-u187l2", unit: 187, lesson: 2, title: "N3 vocab 69·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 物理 (physics), 筆 (brush), ふと (suddenly), 部分 (part), 不平 (complaint), 不満 (dissatisfaction).",
      items: [
        { id: "ja-u187l2-butsuri", type: "vocab", front: "物理", reading: "butsuri", meaning: "physics", example: { jp: "だいがくで物理をべんきょうします。", en: "I study physics at university." }, accept: ["physical science"] },
        { id: "ja-u187l2-fude", type: "vocab", front: "筆", reading: "fude", meaning: "brush", example: { jp: "筆でなまえをかきます。", en: "I write my name with a brush." }, accept: ["writing brush"] },
        { id: "ja-u187l2-futo", type: "vocab", front: "ふと", reading: "futo", meaning: "suddenly", example: { jp: "ふとうしろをみました。", en: "I suddenly looked behind me." }, accept: ["accidentally", "on impulse"] },
        { id: "ja-u187l2-bubun", type: "vocab", front: "部分", reading: "bubun", meaning: "part", example: { jp: "この部分がいちばんだいじです。", en: "This part is the most important." }, accept: ["portion", "section"] },
        { id: "ja-u187l2-fuhei", type: "vocab", front: "不平", reading: "fuhei", meaning: "complaint", example: { jp: "かれはいつも不平をいいます。", en: "He always makes complaints." }, accept: ["discontent", "dissatisfaction"] },
        { id: "ja-u187l2-fuman", type: "vocab", front: "不満", reading: "fuman", meaning: "dissatisfaction", example: { jp: "いまのしごとに不満があります。", en: "I am dissatisfied with my current job." }, accept: ["discontent", "complaint"] },
      ],
    },
    {
      id: "ja-u187l3", unit: 187, lesson: 3, title: "N3 vocab 69·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 増やす (to increase), 殖やす (to breed), 不利 (disadvantage), 振る (to wave), 震える (to shiver), 触れる (to touch).",
      items: [
        { id: "ja-u187l3-fuyasu", type: "vocab", front: "増やす", reading: "fuyasu", meaning: "to increase", example: { jp: "まいつきちょきんを増やします。", en: "I increase my savings every month." }, accept: ["to add to", "to grow"], hint: "増やす (ふやす) = to increase an amount or number; same reading as 殖やす." },
        { id: "ja-u187l3-fuyasu2", type: "vocab", front: "殖やす", reading: "fuyasu", meaning: "to breed", example: { jp: "いけできんぎょを殖やします。", en: "I breed goldfish in the pond." }, accept: ["to increase", "to multiply"], hint: "殖やす (ふやす) = to increase by breeding animals or wealth; same reading as 増やす." },
        { id: "ja-u187l3-furi", type: "vocab", front: "不利", reading: "furi", meaning: "disadvantage", example: { jp: "それはわたしに不利です。", en: "That is a disadvantage to me." }, accept: ["drawback", "unfavorable"] },
        { id: "ja-u187l3-furu", type: "vocab", front: "振る", reading: "furu", meaning: "to wave", example: { jp: "こどもがてを振ります。", en: "The child waves a hand." }, accept: ["to shake", "to swing"] },
        { id: "ja-u187l3-furueru", type: "vocab", front: "震える", reading: "furueru", meaning: "to shiver", example: { jp: "さむくてからだが震えます。", en: "My body shivers from the cold." }, accept: ["to shake", "to tremble"] },
        { id: "ja-u187l3-fureru", type: "vocab", front: "触れる", reading: "fureru", meaning: "to touch", example: { jp: "あついなべに触れました。", en: "I touched the hot pot." }, accept: ["to feel", "to make contact"] },
      ],
    },
    {
      id: "ja-u187l4", unit: 187, lesson: 4, title: "N3 vocab 69·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 雰囲気 (atmosphere), 分析 (analysis), 文明 (civilization), 分野 (field), 塀 (wall), 平均 (average).",
      items: [
        { id: "ja-u187l4-funiki", type: "vocab", front: "雰囲気", reading: "funiki", meaning: "atmosphere", example: { jp: "このみせはいい雰囲気です。", en: "This shop has a nice atmosphere." }, accept: ["mood", "ambiance"] },
        { id: "ja-u187l4-bunseki", type: "vocab", front: "分析", reading: "bunseki", meaning: "analysis", example: { jp: "データを分析します。", en: "I analyze the data." }, accept: ["examination"] },
        { id: "ja-u187l4-bunmei", type: "vocab", front: "文明", reading: "bunmei", meaning: "civilization", example: { jp: "ふるい文明にきょうみがあります。", en: "I am interested in ancient civilization." }, accept: ["culture"] },
        { id: "ja-u187l4-bunya", type: "vocab", front: "分野", reading: "bunya", meaning: "field", example: { jp: "この分野はとてもおもしろいです。", en: "This field is very interesting." }, accept: ["sphere", "area"] },
        { id: "ja-u187l4-hei", type: "vocab", front: "塀", reading: "hei", meaning: "wall", example: { jp: "いえのまわりに塀があります。", en: "There is a wall around the house." }, accept: ["fence"] },
        { id: "ja-u187l4-heikin", type: "vocab", front: "平均", reading: "heikin", meaning: "average", example: { jp: "クラスの平均はたかいです。", en: "The class average is high." }, accept: ["mean", "balance"] },
      ],
    },
  ],
};
