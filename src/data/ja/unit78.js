// Unit 78 — ようす・ふくそう ("Appearance & clothing") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 appearance, clothing & describing people. Vocab items, ～ます form as the
// headword for verbs. Every example uses only already-introduced vocab + grammar
// (を/に/で/と/ので + です/ます + i/na-adjectives), so it slots on top of prior units.
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12).
// Requested seeds are already taught elsewhere and were substituted with absent N4
// appearance/clothing words (まゆげ, まつげ, ひたい, ほくろ, etc.). Re-verified against
// `npm run taught -- ja` on 2026-10-10: ひげ u26 · ふとります u26 · やせます u26 ·
// ようす u75. (The old line cited ふとって / やせて, which are て-forms and appear in
// the corpus only through those u26 ます-form fronts.)
// DRILL SHAPE: every NOUN drill leads with its own front + a core particle, which is
// what ja sentenceTokens tiles. practice() REPLACES the example, so any other shape
// would strip sentence:build off an item whose example had it. The adjective cards
// cannot lead with a particle; their examples never earned sentence:build either, so
// those drills keep cloze and take nothing away.
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
        { id: "ja-u78l1-sugata", type: "vocab", front: "すがた", reading: "sugata", meaning: "figure", example: { jp: "かのじょのすがたはきれいです。", en: "Her figure is beautiful." }, drill: { jp: "すがたがかわりました。", en: "His figure has changed." }, accept: ["form", "appearance", "one's shape", "a silhouette"], hint: "sugata — the whole figure of a person as seen, standing or moving. More literary than みため on the next card, and it carries a sense of bearing: うしろすがた is someone seen from behind." },
        { id: "ja-u78l1-mitame", type: "vocab", front: "みため", reading: "mitame", meaning: "appearance", example: { jp: "みためがわかいです。", en: "He looks young." }, drill: { jp: "みためはたいせつです。", en: "Appearance matters." }, accept: ["looks", "how it looks", "outward appearance", "first impression"], hint: "mitame — み (see) + ため (for): what it is like FOR seeing, i.e. how it looks from outside. Used of food and objects too, not only people. Plainer than すがた on the card before." },
        { id: "ja-u78l1-sutairu", type: "vocab", front: "スタイル", reading: "sutairu", meaning: "build, physique", example: { jp: "かのじょのスタイルがすきです。", en: "I like her figure." }, drill: { jp: "スタイルをほめます。", en: "I compliment her build." }, accept: ["build", "physique", "figure"], hint: "sutairu — ⚠️ FALSE FRIEND. In Japanese スタイル means a person's BUILD, not their fashion sense: スタイルがいい praises the figure. For taste in clothes use おしゃれ, in lesson 4." },
        { id: "ja-u78l1-kakkoii", type: "vocab", front: "かっこいい", reading: "kakkoii", meaning: "cool (good-looking)", example: { jp: "あのひとはかっこいいです。", en: "That person is cool." }, drill: { jp: "かっこいいスーツをきます。", en: "I wear a cool suit." }, accept: ["good-looking", "stylish", "cool", "sharp-looking"], hint: "kakkoii — かっこう (shape, form) + いい (good): good-shaped. The everyday compliment for a man, a car or a move. Its opposite かっこわるい means uncool or embarrassing." },
        { id: "ja-u78l1-hansamu", type: "vocab", front: "ハンサム", reading: "hansamu", meaning: "handsome", example: { jp: "かれはハンサムです。", en: "He is handsome." }, drill: { jp: "ハンサムなひとにあいます。", en: "I meet a handsome person." }, accept: ["good-looking", "handsome", "attractive", "a looker"], hint: "hansamu — a な-adjective from English. ⚠️ Sounds slightly dated in Japan now; かっこいい on the card before is what people actually say. Its female counterpart びじん is the next card." },
        { id: "ja-u78l1-bijin", type: "vocab", front: "びじん", reading: "bijin", meaning: "beautiful woman", example: { jp: "あのひとはびじんです。", en: "She is a beautiful woman." }, drill: { jp: "びじんがまちにいます。", en: "There is a beautiful woman in town." }, accept: ["a beauty", "beauty", "a good-looking woman", "a stunner"], hint: "bijin — び (beauty, the same び as びじゅつ in u52) + じん (person). ⚠️ Used of WOMEN; the male counterpart is イケメン or ハンサム from lesson 1. It is a noun, so あのひとはびじんです." },
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
        { id: "ja-u78l2-keshou", type: "vocab", front: "けしょう", reading: "keshō", meaning: "makeup", example: { jp: "まいあさけしょうをします。", en: "I put on makeup every morning." }, drill: { jp: "けしょうをへやでします。", en: "I put on makeup in my room." }, accept: ["make-up", "cosmetics", "putting on makeup", "doing one's face"], hint: "keshō — け (change) + しょう (adorn): changing how you look. Long ō: ke-shō. A noun used with します. おしょうしつ with the polite お is, oddly, the washroom." },
        { id: "ja-u78l2-shiwa", type: "vocab", front: "しわ", reading: "shiwa", meaning: "wrinkle", example: { jp: "そぼのかおにしわがあります。", en: "My grandmother has wrinkles on her face." }, drill: { jp: "しわがおおいです。", en: "There are a lot of wrinkles." }, accept: ["wrinkles", "line", "a crease", "lines on the skin"], hint: "shiwa — a crease, in skin OR in cloth: a shirt has しわ too, which is why an iron is for しわをのばす, stretching them out. Two light beats, shi-wa." },
        { id: "ja-u78l2-mayuge", type: "vocab", front: "まゆげ", reading: "mayuge", meaning: "eyebrow", example: { jp: "まゆげがくろいです。", en: "His eyebrows are black." }, drill: { jp: "まゆげがながいです。", en: "His eyebrows are long." }, accept: ["eyebrows", "an eyebrow", "the brows"], hint: "mayuge — まゆ (brow) + げ (hair): brow hair. That げ means body hair generally, and it gives you まつげ on the very next card too. Japanese names body hair by its location." },
        { id: "ja-u78l2-matsuge", type: "vocab", front: "まつげ", reading: "matsuge", meaning: "eyelash", example: { jp: "まつげがながいです。", en: "Her eyelashes are long." }, drill: { jp: "まつげがくろいです。", en: "Her eyelashes are black." }, accept: ["eyelashes", "an eyelash", "the lashes"], hint: "matsuge — まつ (eye edge) + げ (hair), the same げ as まゆげ on the card before. One syllable apart — まゆ versus まつ — so listen for the second beat." },
        { id: "ja-u78l2-hitai", type: "vocab", front: "ひたい", reading: "hitai", meaning: "forehead", example: { jp: "ひたいがひろいです。", en: "His forehead is broad." }, drill: { jp: "ひたいにきずがあります。", en: "There is a cut on his forehead." }, accept: ["brow", "the forehead", "one's brow", "the front of the head"], hint: "hitai — the forehead. ⚠️ Not the same word as ひたい meaning 'equal' in other contexts, and quite different from かお, the whole face. Three light beats: hi-ta-i." },
        { id: "ja-u78l2-hokuro", type: "vocab", front: "ほくろ", reading: "hokuro", meaning: "mole", example: { jp: "かおにほくろがあります。", en: "There is a mole on her face." }, drill: { jp: "ほくろがちいさいです。", en: "The mole is small." }, accept: ["beauty spot", "a mole", "a dark spot on the skin", "a birthmark"], hint: "hokuro — a small dark spot on the skin. Neutral in Japanese, where English 'mole' can sound medical and 'beauty spot' flattering. Three light beats: ho-ku-ro." },
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
        { id: "ja-u78l3-sutsu", type: "vocab", front: "スーツ", reading: "sūtsu", meaning: "suit", example: { jp: "しごとにスーツをきます。", en: "I wear a suit to work." }, drill: { jp: "スーツはくろいです。", en: "The suit is black." }, accept: ["business suit", "a suit", "formal wear", "office wear"], hint: "sūtsu — long ū: sū-tsu. ⚠️ A SUIT of clothes only; a suitcase is スーツケース and a swimsuit is みずぎ. Japanese business dress runs on these, so the word is everywhere." },
        { id: "ja-u78l3-kimono", type: "vocab", front: "きもの", reading: "kimono", meaning: "kimono", example: { jp: "おまつりできものをきます。", en: "I wear a kimono at the festival." }, drill: { jp: "きものがきれいです。", en: "The kimono is beautiful." }, accept: ["Japanese robe", "robe", "a kimono", "traditional dress"], hint: "kimono — き (wear) + もの (thing): literally 'a thing to wear', so it once meant clothes in general. Now it means the formal silk garment. The light cotton summer one is a ゆかた, u52." },
        { id: "ja-u78l3-uwagi", type: "vocab", front: "うわぎ", reading: "uwagi", meaning: "jacket", example: { jp: "さむいのでうわぎをきます。", en: "It's cold, so I put on a jacket." }, drill: { jp: "うわぎをぬぎます。", en: "I take off my jacket." }, accept: ["coat", "top", "a jacket", "an outer garment"], hint: "uwagi — うわ (upper) + ぎ (garment): the upper garment, so a jacket or suit top. Put on with きます, taken off with ぬぎます. Trousers take はきます instead — Japanese splits dressing by body half." },
        { id: "ja-u78l3-wanpisu", type: "vocab", front: "ワンピース", reading: "wanpīsu", meaning: "dress", example: { jp: "あかいワンピースをかいます。", en: "I buy a red dress." }, drill: { jp: "ワンピースがにあいます。", en: "The dress suits you." }, accept: ["one-piece dress", "frock", "a dress", "a frock"], hint: "wanpīsu — from 'one-piece', with a long ī: wan-pī-su. A dress in one piece, as against a ツーピース (top and skirt). Nobody in English calls a dress a one-piece, so this is Japanese-made English." },
        { id: "ja-u78l3-burausu", type: "vocab", front: "ブラウス", reading: "burausu", meaning: "blouse", example: { jp: "しろいブラウスがすきです。", en: "I like white blouses." }, drill: { jp: "ブラウスをあらいます。", en: "I wash the blouse." }, accept: ["shirt", "a blouse", "a woman's shirt", "top"], hint: "burausu — four beats: bu-ra-u-su. A woman's shirt specifically; a man's is ワイシャツ, from u5, which is Japan's version of 'white shirt'." },
        { id: "ja-u78l3-epuron", type: "vocab", front: "エプロン", reading: "epuron", meaning: "apron", example: { jp: "りょうりのときエプロンをします。", en: "I wear an apron when I cook." }, drill: { jp: "エプロンをだいどころでつかいます。", en: "I use an apron in the kitchen." }, accept: ["pinafore", "an apron", "a kitchen apron", "a work apron"], hint: "epuron — four beats: e-pu-ro-n. ⚠️ Worn with します, not きます: エプロンをします. Japanese chooses the dressing verb by the garment, and an apron is tied on rather than put on." },
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
        { id: "ja-u78l4-kigaemasu", type: "vocab", front: "きがえます", reading: "kigaemasu", meaning: "change clothes", example: { jp: "へやできがえます。", en: "I change clothes in my room." }, drill: { jp: "スーツにきがえます。", en: "I change into a suit." }, accept: ["get changed", "to change", "to change outfits", "to get into other clothes"], hint: "kigaemasu — き (wear) + かえます (change, u45): changing what you wear. What you change INTO takes に, not を — きがえる always points at the new outfit." },
        { id: "ja-u78l4-niaimasu", type: "vocab", front: "にあいます", reading: "niaimasu", meaning: "suit (to look good on someone)", example: { jp: "そのふくはあなたににあいます。", en: "That outfit suits you." }, drill: { jp: "そのぼうしがにあいます。", en: "That hat suits you." }, accept: ["look good on", "to match", "to go well with", "to flatter"], hint: "niaimasu — に (resemble) + あいます (fit together): the clothes and the person fitting each other. ⚠️ The CLOTHES are the subject and the person takes に: ふくがあなたににあう." },
        { id: "ja-u78l4-oshare", type: "vocab", front: "おしゃれ", reading: "oshare", meaning: "stylish", example: { jp: "かのじょはおしゃれです。", en: "She is stylish." }, drill: { jp: "おしゃれがすきです。", en: "I like dressing up." }, accept: ["fashionable", "chic", "well-dressed", "dressing up"], hint: "oshare — both a な-adjective (a stylish person or café) and a noun for the act of dressing up: おしゃれをする. Warmer than かっこいい in lesson 1, which is about looking sharp rather than about taste." },
        { id: "ja-u78l4-jimi", type: "vocab", front: "じみ", reading: "jimi", meaning: "plain", example: { jp: "このふくはじみです。", en: "These clothes are plain." }, drill: { jp: "じみないろがすきです。", en: "I like subdued colours." }, accept: ["sober", "subdued", "understated", "low-key"], hint: "jimi — a な-adjective, and NOT an insult in Japan, where restraint reads as tasteful. Its exact opposite はで is the next card, and the two are the main axis Japanese uses to describe clothes." },
        { id: "ja-u78l4-hade", type: "vocab", front: "はで", reading: "hade", meaning: "flashy", example: { jp: "はでないろがすきです。", en: "I like flashy colors." }, drill: { jp: "はでなふくをきます。", en: "I wear flashy clothes." }, accept: ["showy", "gaudy", "loud", "eye-catching"], hint: "hade — は (show) + で (out): put out on show. な-adjective, and the counterpart of じみ on the card before. It can be admiring or critical, exactly like English 'loud'." },
        { id: "ja-u78l4-kawaii", type: "vocab", front: "かわいい", reading: "kawaii", meaning: "cute", example: { jp: "このぼうしはかわいいです。", en: "This hat is cute." }, drill: { jp: "かわいいねこをみます。", en: "I look at a cute cat." }, accept: ["pretty", "adorable", "cute", "sweet"], hint: "kawaii — far wider than English 'cute': used for babies, animals, stationery, handwriting and adults alike, and it is one of the highest-frequency compliments in the language. い-adjective." },
      ],
    },
  ],
};
