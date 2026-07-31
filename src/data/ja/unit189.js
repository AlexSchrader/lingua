// Unit 189 — ごい・N3・71 ("N3 vocab 71") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (hori, maku, mazaru, majiru) disambiguated via hints.
export const UNIT189 = {
  id: "ja-u189", lang: "ja", title: "ごい・N3・71", order: 189, stage: "b1",
  lessons: [
    {
      id: "ja-u189l1", unit: 189, lesson: 1, title: "N3 vocab 71·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 炎 (flame), 頬 (cheek), ほぼ (almost), 微笑む (to smile), 堀 (moat), 濠 (moat).",
      items: [
        { id: "ja-u189l1-hono", type: "vocab", front: "炎", reading: "honō", meaning: "flame", example: { jp: "ろうそくの炎がゆれます。", en: "The candle's flame flickers." }, accept: ["blaze"] },
        { id: "ja-u189l1-hoho2", type: "vocab", front: "頬", reading: "hoho", meaning: "cheek", example: { jp: "さむくて頬があかいです。", en: "It is cold, so my cheeks are red." }, accept: ["cheeks"] },
        { id: "ja-u189l1-hobo", type: "vocab", front: "ほぼ", reading: "hobo", meaning: "almost", example: { jp: "しごとはほぼおわりました。", en: "The work is almost finished." }, accept: ["roughly", "nearly"] },
        { id: "ja-u189l1-hohoemu", type: "vocab", front: "微笑む", reading: "hohoemu", meaning: "to smile", example: { jp: "かのじょはやさしく微笑みました。", en: "She smiled gently." }, accept: ["to grin"] },
        { id: "ja-u189l1-hori", type: "vocab", front: "堀", reading: "hori", meaning: "moat", example: { jp: "おしろの堀はふかいです。", en: "The castle's moat is deep." }, accept: ["canal", "ditch"], hint: "堀 (ほり) = moat; same reading as 濠." },
        { id: "ja-u189l1-hori2", type: "vocab", front: "濠", reading: "hori", meaning: "moat", example: { jp: "濠にみずがたくさんあります。", en: "There is a lot of water in the moat." }, accept: ["canal", "ditch"], hint: "濠 (ほり) = moat; same reading as 堀." },
      ],
    },
    {
      id: "ja-u189l2", unit: 189, lesson: 2, title: "N3 vocab 71·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 本当 (truth), 本人 (the person), 本物 (genuine), ぼんやり (dim), まあ (well), 迷子 (lost child).",
      items: [
        { id: "ja-u189l2-honto", type: "vocab", front: "本当", reading: "honto", meaning: "truth", example: { jp: "それは本当ですか。", en: "Is that true?" }, accept: ["reality", "real"] },
        { id: "ja-u189l2-honnin", type: "vocab", front: "本人", reading: "honnin", meaning: "the person", example: { jp: "本人がここにきました。", en: "The person himself came here." }, accept: ["oneself", "in person"] },
        { id: "ja-u189l2-honmono", type: "vocab", front: "本物", reading: "honmono", meaning: "genuine", example: { jp: "このとけいは本物です。", en: "This watch is genuine." }, accept: ["real thing", "authentic"] },
        { id: "ja-u189l2-bonyari", type: "vocab", front: "ぼんやり", reading: "bonyari", meaning: "dim", example: { jp: "とおくのやまがぼんやりみえます。", en: "The far mountain looks dim." }, accept: ["faint", "vague"] },
        { id: "ja-u189l2-ma", type: "vocab", front: "まあ", reading: "mā", meaning: "well", example: { jp: "まあ、それでいいでしょう。", en: "Well, that will do." }, accept: ["oh well", "i suppose"] },
        { id: "ja-u189l2-maigo", type: "vocab", front: "迷子", reading: "maigo", meaning: "lost child", example: { jp: "こうえんで迷子になりました。", en: "I got lost in the park." }, accept: ["stray child"] },
      ],
    },
    {
      id: "ja-u189l3", unit: 189, lesson: 3, title: "N3 vocab 71·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 任せる (to entrust), 巻く (to wind), 蒔く (to sow), 撒く (to scatter), 幕 (curtain), 負け (defeat).",
      items: [
        { id: "ja-u189l3-makaseru", type: "vocab", front: "任せる", reading: "makaseru", meaning: "to entrust", example: { jp: "このしごとをあなたに任せます。", en: "I entrust this work to you." }, accept: ["to leave to"] },
        { id: "ja-u189l3-maku", type: "vocab", front: "巻く", reading: "maku", meaning: "to wind", example: { jp: "くびにマフラーを巻きます。", en: "I wrap a scarf around my neck." }, accept: ["to coil", "to roll"], hint: "巻く (まく) = to wind / roll; same reading as 蒔く・撒く・幕." },
        { id: "ja-u189l3-maku2", type: "vocab", front: "蒔く", reading: "maku", meaning: "to sow", example: { jp: "はたけにたねを蒔きます。", en: "I sow seeds in the field." }, accept: ["to plant"], hint: "蒔く (まく) = to sow seeds; same reading as 巻く・撒く・幕." },
        { id: "ja-u189l3-maku3", type: "vocab", front: "撒く", reading: "maku", meaning: "to scatter", example: { jp: "にわにみずを撒きます。", en: "I sprinkle water in the garden." }, accept: ["to sprinkle", "to sow"], hint: "撒く (まく) = to scatter / sprinkle; same reading as 巻く・蒔く・幕." },
        { id: "ja-u189l3-maku4", type: "vocab", front: "幕", reading: "maku", meaning: "curtain", example: { jp: "しばいの幕があがりました。", en: "The curtain of the play rose." }, accept: ["act", "screen"], hint: "幕 (まく) = stage curtain; same reading as 巻く・蒔く・撒く." },
        { id: "ja-u189l3-make", type: "vocab", front: "負け", reading: "make", meaning: "defeat", example: { jp: "きょうのしあいは負けでした。", en: "Today's match was a loss." }, accept: ["loss"] },
      ],
    },
    {
      id: "ja-u189l4", unit: 189, lesson: 4, title: "N3 vocab 71·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 孫 (grandchild), まさに (exactly), 混ざる (to be mixed), 交ざる (to be mixed), 混じる (to be mixed), 交じる (to be mixed).",
      items: [
        { id: "ja-u189l4-mago", type: "vocab", front: "孫", reading: "mago", meaning: "grandchild", example: { jp: "かわいい孫がうまれました。", en: "A cute grandchild was born." }, accept: ["grandchildren"] },
        { id: "ja-u189l4-masani", type: "vocab", front: "まさに", reading: "masani", meaning: "exactly", example: { jp: "まさにそのとおりです。", en: "It is exactly as you say." }, accept: ["precisely", "surely"] },
        { id: "ja-u189l4-mazaru", type: "vocab", front: "混ざる", reading: "mazaru", meaning: "to be mixed", example: { jp: "あおとあかが混ざります。", en: "Blue and red mix together." }, accept: ["to blend", "to mingle"], hint: "混ざる (まざる) = to blend together; 混 = blend, 交 = intermingle. Same reading as 交ざる." },
        { id: "ja-u189l4-mazaru2", type: "vocab", front: "交ざる", reading: "mazaru", meaning: "to be mixed", example: { jp: "だんしにじょしが交ざります。", en: "The girls mingle in among the boys." }, accept: ["to mingle", "to be intermixed"], hint: "交ざる (まざる) = to intermingle; 交 = intermingle, 混 = blend. Same reading as 混ざる." },
        { id: "ja-u189l4-majiru", type: "vocab", front: "混じる", reading: "majiru", meaning: "to be mixed", example: { jp: "コーヒーにミルクが混じります。", en: "Milk mixes into the coffee." }, accept: ["to blend", "to mingle"], hint: "混じる (まじる) = to blend in; -じる form of 混ざる. Same reading as 交じる." },
        { id: "ja-u189l4-majiru2", type: "vocab", front: "交じる", reading: "majiru", meaning: "to be mixed", example: { jp: "しろいはなにあかいはなが交じります。", en: "Red flowers are mixed among the white ones." }, accept: ["to mingle", "to be intermixed"], hint: "交じる (まじる) = to intermingle; -じる form of 交ざる. Same reading as 混じる." },
      ],
    },
  ],
};
