// Unit 54 — たべもの・りょうり ("Food & Cooking") — A1 thematic
// N5 food, drink & cooking vocabulary that the earlier food unit didn't cover:
// vegetables, fruit, cooking staples/seasonings, and everyday dishes & drinks.
// Every front is new (not a duplicate of Unit 9's food/verb set). Examples reuse
// only known A1 nouns, particles (を が は に も) and verbs (たべます のみます
// かいます つかいます きります いれます つけます). No new grammar.
export const UNIT54 = {
  id: "ja-u54",
  lang: "ja",
  title: "たべもの・りょうり",
  order: 54,
  stage: "a1",
  lessons: [
    // Lesson 1: vegetables
    {
      id: "ja-u54l1",
      unit: 54,
      lesson: 1,
      title: "Vegetables",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name common vegetables: たまねぎ にんじん じゃがいも キャベツ きゅうり だいこん.",
      items: [
        { id: "ja-u54l1-tamanegi", type: "vocab", front: "たまねぎ", reading: "tamanegi", meaning: "onion", example: { jp: "たまねぎをきります。", en: "I cut the onion." }, accept: ["onions"] },
        { id: "ja-u54l1-ninjin", type: "vocab", front: "にんじん", reading: "ninjin", meaning: "carrot", example: { jp: "にんじんがすきです。", en: "I like carrots." }, accept: ["carrots"] },
        { id: "ja-u54l1-jagaimo", type: "vocab", front: "じゃがいも", reading: "jagaimo", meaning: "potato", example: { jp: "じゃがいもをたべます。", en: "I eat potatoes." }, accept: ["potatoes"] },
        { id: "ja-u54l1-kyabetsu", type: "vocab", front: "キャベツ", reading: "kyabetsu", meaning: "cabbage", example: { jp: "キャベツをかいます。", en: "I buy cabbage." }, accept: ["cabbages"] },
        { id: "ja-u54l1-kyuri", type: "vocab", front: "きゅうり", reading: "kyūri", meaning: "cucumber", example: { jp: "きゅうりをたべます。", en: "I eat a cucumber." }, accept: ["cucumbers"] },
        { id: "ja-u54l1-daikon", type: "vocab", front: "だいこん", reading: "daikon", meaning: "daikon radish", example: { jp: "だいこんはやさいです。", en: "A daikon is a vegetable." }, accept: ["daikon", "radish"], hint: "A long white radish common in Japanese cooking." },
      ],
    },
    // Lesson 2: fruit
    {
      id: "ja-u54l2",
      unit: 54,
      lesson: 2,
      title: "Fruit",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name common fruit: いちご みかん ぶどう もも なし すいか.",
      items: [
        { id: "ja-u54l2-ichigo", type: "vocab", front: "いちご", reading: "ichigo", meaning: "strawberry", example: { jp: "いちごはあまいです。", en: "Strawberries are sweet." }, accept: ["strawberries"] },
        { id: "ja-u54l2-mikan", type: "vocab", front: "みかん", reading: "mikan", meaning: "mandarin orange", example: { jp: "みかんをたべます。", en: "I eat a mandarin." }, accept: ["mandarin", "tangerine"] },
        { id: "ja-u54l2-budo", type: "vocab", front: "ぶどう", reading: "budō", meaning: "grapes", example: { jp: "ぶどうがすきです。", en: "I like grapes." }, accept: ["grape"] },
        { id: "ja-u54l2-momo", type: "vocab", front: "もも", reading: "momo", meaning: "peach", example: { jp: "このももはあまいです。", en: "This peach is sweet." }, accept: ["peaches"] },
        { id: "ja-u54l2-nashi", type: "vocab", front: "なし", reading: "nashi", meaning: "pear", example: { jp: "なしはくだものです。", en: "A pear is a fruit." }, accept: ["pears"] },
        { id: "ja-u54l2-suika", type: "vocab", front: "すいか", reading: "suika", meaning: "watermelon", example: { jp: "すいかはおおきいです。", en: "A watermelon is big." }, accept: ["watermelons"] },
      ],
    },
    // Lesson 3: cooking & seasoning
    {
      id: "ja-u54l3",
      unit: 54,
      lesson: 3,
      title: "Cooking & seasoning",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name cooking staples & seasonings: こめ さとう しお しょうゆ みそ あぶら.",
      items: [
        { id: "ja-u54l3-kome", type: "vocab", front: "こめ", reading: "kome", meaning: "rice (uncooked)", example: { jp: "こめをかいます。", en: "I buy rice." }, accept: ["rice", "uncooked rice"], hint: "Raw grain rice — cooked rice is ごはん." },
        { id: "ja-u54l3-sato", type: "vocab", front: "さとう", reading: "satō", meaning: "sugar", example: { jp: "さとうはあまいです。", en: "Sugar is sweet." }, accept: [] },
        { id: "ja-u54l3-shio", type: "vocab", front: "しお", reading: "shio", meaning: "salt", example: { jp: "りょうりにしおをいれます。", en: "I put salt in the food." }, accept: [] },
        { id: "ja-u54l3-shoyu", type: "vocab", front: "しょうゆ", reading: "shōyu", meaning: "soy sauce", example: { jp: "すしにしょうゆをつけます。", en: "I put soy sauce on the sushi." }, accept: ["soy"] },
        { id: "ja-u54l3-miso", type: "vocab", front: "みそ", reading: "miso", meaning: "miso", example: { jp: "みそはおいしいです。", en: "Miso is delicious." }, accept: ["miso paste"] },
        { id: "ja-u54l3-abura", type: "vocab", front: "あぶら", reading: "abura", meaning: "oil", example: { jp: "りょうりにあぶらをつかいます。", en: "I use oil for cooking." }, accept: ["cooking oil", "fat"] },
      ],
    },
    // Lesson 4: dishes & drinks
    {
      id: "ja-u54l4",
      unit: 54,
      lesson: 4,
      title: "Dishes & drinks",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name everyday dishes & drinks: うどん そば ラーメン ぎゅうにゅう おさけ; describe すっぱい.",
      items: [
        { id: "ja-u54l4-udon", type: "vocab", front: "うどん", reading: "udon", meaning: "udon", example: { jp: "うどんをたべます。", en: "I eat udon." }, accept: ["udon noodles"] },
        { id: "ja-u54l4-soba", type: "vocab", front: "そば", reading: "soba", meaning: "soba", example: { jp: "そばがすきです。", en: "I like soba." }, accept: ["soba noodles", "buckwheat noodles"] },
        { id: "ja-u54l4-ramen", type: "vocab", front: "ラーメン", reading: "rāmen", meaning: "ramen", example: { jp: "ラーメンはおいしいです。", en: "Ramen is delicious." }, accept: ["ramen noodles"] },
        { id: "ja-u54l4-gyunyu", type: "vocab", front: "ぎゅうにゅう", reading: "gyūnyū", meaning: "milk", example: { jp: "ぎゅうにゅうをのみます。", en: "I drink milk." }, accept: ["cow's milk"] },
        { id: "ja-u54l4-osake", type: "vocab", front: "おさけ", reading: "osake", meaning: "sake", example: { jp: "ちちはおさけをのみます。", en: "My father drinks sake." }, accept: ["alcohol", "liquor"] },
        { id: "ja-u54l4-suppai", type: "vocab", front: "すっぱい", reading: "suppai", meaning: "sour", example: { jp: "レモンはすっぱいです。", en: "Lemons are sour." }, accept: ["sour-tasting"] },
      ],
    },
  ],
};
