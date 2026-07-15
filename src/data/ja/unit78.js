// Unit 78 — ようす・ふくそう ("Appearance & clothing") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 appearance, clothing & describing people. Vocab items, ～ます form as the
// headword for verbs. Every example uses only already-introduced vocab + grammar
// (を/に/で/と/ので + です/ます + i/na-adjectives), so it slots on top of prior units.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
// Requested seeds ひげ / ふとって / やせて / ようす are already taught — substituted
// with absent N4 appearance/clothing words (まゆげ, まつげ, ひたい, ほくろ, etc.).
export const UNIT78 = {
  id: "ja-u78",
  lang: "ja",
  title: "ようす・ふくそう",
  order: 78,
  stage: "a2",
  lessons: [
    // Lesson 1: overall looks
    {
      id: "ja-u78l1",
      unit: 78,
      lesson: 1,
      title: "Overall looks",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe how someone looks: すがた みため スタイル かっこいい ハンサム びじん.",
      items: [
        { id: "ja-u78l1-sugata", type: "vocab", front: "すがた", reading: "sugata", meaning: "figure", example: { jp: "かのじょのすがたはきれいです。", en: "Her figure is beautiful." }, accept: ["form", "appearance"] },
        { id: "ja-u78l1-mitame", type: "vocab", front: "みため", reading: "mitame", meaning: "appearance", example: { jp: "みためがわかいです。", en: "He looks young." }, accept: ["looks", "how it looks"] },
        { id: "ja-u78l1-sutairu", type: "vocab", front: "スタイル", reading: "sutairu", meaning: "figure", example: { jp: "かのじょのスタイルがすきです。", en: "I like her figure." }, accept: ["build", "physique"] },
        { id: "ja-u78l1-kakkoii", type: "vocab", front: "かっこいい", reading: "kakkoii", meaning: "cool", example: { jp: "あのひとはかっこいいです。", en: "That person is cool." }, accept: ["good-looking", "stylish"] },
        { id: "ja-u78l1-hansamu", type: "vocab", front: "ハンサム", reading: "hansamu", meaning: "handsome", example: { jp: "かれはハンサムです。", en: "He is handsome." }, accept: ["good-looking"] },
        { id: "ja-u78l1-bijin", type: "vocab", front: "びじん", reading: "bijin", meaning: "beautiful woman", example: { jp: "あのひとはびじんです。", en: "She is a beautiful woman." }, accept: ["a beauty", "beauty"] },
      ],
    },
    // Lesson 2: face & hair features
    {
      id: "ja-u78l2",
      unit: 78,
      lesson: 2,
      title: "Face features",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name face features: けしょう しわ まゆげ まつげ ひたい ほくろ.",
      items: [
        { id: "ja-u78l2-keshou", type: "vocab", front: "けしょう", reading: "keshō", meaning: "makeup", example: { jp: "まいあさけしょうをします。", en: "I put on makeup every morning." }, accept: ["make-up", "cosmetics"] },
        { id: "ja-u78l2-shiwa", type: "vocab", front: "しわ", reading: "shiwa", meaning: "wrinkle", example: { jp: "そぼのかおにしわがあります。", en: "My grandmother has wrinkles on her face." }, accept: ["wrinkles", "line"] },
        { id: "ja-u78l2-mayuge", type: "vocab", front: "まゆげ", reading: "mayuge", meaning: "eyebrow", example: { jp: "まゆげがくろいです。", en: "His eyebrows are black." }, accept: ["eyebrows"] },
        { id: "ja-u78l2-matsuge", type: "vocab", front: "まつげ", reading: "matsuge", meaning: "eyelash", example: { jp: "まつげがながいです。", en: "Her eyelashes are long." }, accept: ["eyelashes"] },
        { id: "ja-u78l2-hitai", type: "vocab", front: "ひたい", reading: "hitai", meaning: "forehead", example: { jp: "ひたいがひろいです。", en: "His forehead is broad." }, accept: ["brow"] },
        { id: "ja-u78l2-hokuro", type: "vocab", front: "ほくろ", reading: "hokuro", meaning: "mole", example: { jp: "かおにほくろがあります。", en: "There is a mole on her face." }, accept: ["beauty spot"] },
      ],
    },
    // Lesson 3: clothing items
    {
      id: "ja-u78l3",
      unit: 78,
      lesson: 3,
      title: "Clothing items",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name clothes: スーツ きもの うわぎ ワンピース ブラウス エプロン.",
      items: [
        { id: "ja-u78l3-sutsu", type: "vocab", front: "スーツ", reading: "sūtsu", meaning: "suit", example: { jp: "しごとにスーツをきます。", en: "I wear a suit to work." }, accept: ["business suit"] },
        { id: "ja-u78l3-kimono", type: "vocab", front: "きもの", reading: "kimono", meaning: "kimono", example: { jp: "おまつりできものをきます。", en: "I wear a kimono at the festival." }, accept: ["Japanese robe", "robe"] },
        { id: "ja-u78l3-uwagi", type: "vocab", front: "うわぎ", reading: "uwagi", meaning: "jacket", example: { jp: "さむいのでうわぎをきます。", en: "It's cold, so I put on a jacket." }, accept: ["coat", "top"] },
        { id: "ja-u78l3-wanpisu", type: "vocab", front: "ワンピース", reading: "wanpīsu", meaning: "dress", example: { jp: "あかいワンピースをかいます。", en: "I buy a red dress." }, accept: ["one-piece dress", "frock"] },
        { id: "ja-u78l3-burausu", type: "vocab", front: "ブラウス", reading: "burausu", meaning: "blouse", example: { jp: "しろいブラウスがすきです。", en: "I like white blouses." }, accept: ["shirt"] },
        { id: "ja-u78l3-epuron", type: "vocab", front: "エプロン", reading: "epuron", meaning: "apron", example: { jp: "りょうりのときエプロンをします。", en: "I wear an apron when I cook." }, accept: ["pinafore"] },
      ],
    },
    // Lesson 4: wearing & describing style
    {
      id: "ja-u78l4",
      unit: 78,
      lesson: 4,
      title: "Style & fashion",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about style: きがえます にあいます おしゃれ じみ はで かわいい.",
      items: [
        { id: "ja-u78l4-kigaemasu", type: "vocab", front: "きがえます", reading: "kigaemasu", meaning: "change clothes", example: { jp: "へやできがえます。", en: "I change clothes in my room." }, accept: ["get changed", "to change"] },
        { id: "ja-u78l4-niaimasu", type: "vocab", front: "にあいます", reading: "niaimasu", meaning: "suit", example: { jp: "そのふくはあなたににあいます。", en: "That outfit suits you." }, accept: ["look good on", "to match"] },
        { id: "ja-u78l4-oshare", type: "vocab", front: "おしゃれ", reading: "oshare", meaning: "stylish", example: { jp: "かのじょはおしゃれです。", en: "She is stylish." }, accept: ["fashionable", "chic"] },
        { id: "ja-u78l4-jimi", type: "vocab", front: "じみ", reading: "jimi", meaning: "plain", example: { jp: "このふくはじみです。", en: "These clothes are plain." }, accept: ["sober", "subdued"] },
        { id: "ja-u78l4-hade", type: "vocab", front: "はで", reading: "hade", meaning: "flashy", example: { jp: "はでないろがすきです。", en: "I like flashy colors." }, accept: ["showy", "gaudy"] },
        { id: "ja-u78l4-kawaii", type: "vocab", front: "かわいい", reading: "kawaii", meaning: "cute", example: { jp: "このぼうしはかわいいです。", en: "This hat is cute." }, accept: ["pretty", "adorable"] },
      ],
    },
  ],
};
