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
        { id: "ja-u54l1-tamanegi", type: "vocab", front: "たまねぎ", reading: "tamanegi", meaning: "onion", example: { jp: "たまねぎをきります。", en: "I cut the onion." }, drill: { jp: "たまねぎはやすいです。", en: "Onions are cheap." }, accept: ["onions", "an onion", "brown onion"], hint: "ta-ma-ne-gi — four even beats, hard g. たま is a ball and ねぎ is a spring onion, so たまねぎ is the round one. ⚠️ Not ねぎ on its own, which stays the thin green kind." },
        { id: "ja-u54l1-ninjin", type: "vocab", front: "にんじん", reading: "ninjin", meaning: "carrot", example: { jp: "にんじんがすきです。", en: "I like carrots." }, drill: { jp: "にんじんをかいます。", en: "I buy carrots." }, accept: ["carrots", "a carrot", "carrot root"], hint: "nin-JIN — two heavy beats, both ん fully held. ⚠️ The ん…ん shape is the whole word, so say nin-jin, never ni-ji-n. It has nothing to do with にん meaning person." },
        { id: "ja-u54l1-jagaimo", type: "vocab", front: "じゃがいも", reading: "jagaimo", meaning: "potato", example: { jp: "じゃがいもをたべます。", en: "I eat potatoes." }, drill: { jp: "じゃがいもはおおきいです。", en: "The potato is big." }, accept: ["potatoes", "a potato", "white potato"], hint: "ja-ga-i-mo — four beats; じゃ is the yōon ja. いも is any tuber, so じゃがいも is one kind of いも. ⚠️ さつまいも, the sweet potato, is built exactly the same way." },
        { id: "ja-u54l1-kyabetsu", type: "vocab", front: "キャベツ", reading: "kyabetsu", meaning: "cabbage", example: { jp: "キャベツをかいます。", en: "I buy cabbage." }, drill: { jp: "キャベツをきります。", en: "I cut the cabbage." }, accept: ["cabbages", "a cabbage", "green cabbage"], hint: "kya-BE-tsu — katakana, so it is a loanword, from English cabbage. ⚠️ The ending is つ, tsu, not a bare t: kya-be-tsu, three beats." },
        { id: "ja-u54l1-kyuri", type: "vocab", front: "きゅうり", reading: "kyūri", meaning: "cucumber", example: { jp: "きゅうりをたべます。", en: "I eat a cucumber." }, drill: { jp: "きゅうりはやさいです。", en: "A cucumber is a vegetable." }, accept: ["cucumbers", "a cucumber", "japanese cucumber"], hint: "KYŪ-ri — きゅう is the yōon kyu held long, then a tapped r: two beats, not three. ⚠️ Written in hiragana even though it sounds foreign — it is a native word." },
        { id: "ja-u54l1-daikon", type: "vocab", front: "だいこん", reading: "daikon", meaning: "daikon radish", example: { jp: "だいこんはやさいです。", en: "A daikon is a vegetable." }, drill: { jp: "だいこんをきります。", en: "I cut the daikon." }, accept: ["daikon", "radish", "white radish", "japanese radish"], hint: "dai-KON — two beats, だい is the diphthong ai. 大 (big) + 根 (root): the big root. ⚠️ It is a radish the length of your forearm, not the small red kind." },
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
        { id: "ja-u54l2-ichigo", type: "vocab", front: "いちご", reading: "ichigo", meaning: "strawberry", example: { jp: "いちごはあまいです。", en: "Strawberries are sweet." }, drill: { jp: "いちごをかいます。", en: "I buy strawberries." }, accept: ["strawberries", "a strawberry", "strawberry fruit"], hint: "i-chi-GO — three beats, ち is chi, hard g. ⚠️ Nothing to do with いち, one, and the ご is not the number five — hear it as one single word." },
        { id: "ja-u54l2-mikan", type: "vocab", front: "みかん", reading: "mikan", meaning: "mandarin orange", example: { jp: "みかんをたべます。", en: "I eat a mandarin." }, drill: { jp: "みかんはあまいです。", en: "Mandarins are sweet." }, accept: ["mandarin", "tangerine", "satsuma", "clementine"], hint: "mi-KAN — two beats, the ん held. ⚠️ The small easy-peel winter citrus, not a big orange — that is オレンジ. This is the fruit eaten by the kotatsu all winter." },
        { id: "ja-u54l2-budo", type: "vocab", front: "ぶどう", reading: "budō", meaning: "grapes", example: { jp: "ぶどうがすきです。", en: "I like grapes." }, drill: { jp: "ぶどうをたべます。", en: "I eat grapes." }, accept: ["grape", "a grape", "bunch of grapes"], hint: "bu-DŌ — the どう is a long o held for two beats. ⚠️ Japanese treats it as one mass, so ぶどう covers a single grape and a whole bunch alike." },
        { id: "ja-u54l2-momo", type: "vocab", front: "もも", reading: "momo", meaning: "peach", example: { jp: "このももはあまいです。", en: "This peach is sweet." }, drill: { jp: "ももをかいます。", en: "I buy a peach." }, accept: ["peaches", "a peach", "peach fruit"], hint: "MO-mo — two identical beats. ⚠️ The same word also means thigh, so context decides. Peach season in Japan is high summer." },
        { id: "ja-u54l2-nashi", type: "vocab", front: "なし", reading: "nashi", meaning: "pear", example: { jp: "なしはくだものです。", en: "A pear is a fruit." }, drill: { jp: "なしをたべます。", en: "I eat a pear." }, accept: ["pears", "a pear", "japanese pear"], hint: "NA-shi — two beats. ⚠️ なし also means without, so listen for the context. The fruit is the round, crunchy Asian pear, not the soft European one." },
        { id: "ja-u54l2-suika", type: "vocab", front: "すいか", reading: "suika", meaning: "watermelon", example: { jp: "すいかはおおきいです。", en: "A watermelon is big." }, drill: { jp: "すいかをきります。", en: "I cut the watermelon." }, accept: ["watermelons", "a watermelon", "water melon"], hint: "su-i-KA — three beats, each vowel its own beat. 水 (water) + 瓜 (gourd): the water gourd. ⚠️ Say su-i as two beats, never swi." },
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
        { id: "ja-u54l3-kome", type: "vocab", front: "こめ", reading: "kome", meaning: "rice (uncooked)", example: { jp: "こめをかいます。", en: "I buy rice." }, drill: { jp: "こめをりょうりにつかいます。", en: "I use rice in my cooking." }, accept: ["rice", "uncooked rice", "raw rice", "rice grains"], hint: "KO-me — two beats. ⚠️ This is rice still RAW, in the bag. Cooked rice in the bowl is ごはん, which doubles as the word for a meal." },
        { id: "ja-u54l3-sato", type: "vocab", front: "さとう", reading: "satō", meaning: "sugar", example: { jp: "さとうはあまいです。", en: "Sugar is sweet." }, drill: { jp: "さとうをコーヒーにいれます。", en: "I put sugar in my coffee." }, accept: ["white sugar", "granulated sugar", "some sugar"], hint: "sa-TŌ — the とう is a long o held for two beats. ⚠️ Never shorten it to さと. Its partner on the shelf is しお, salt, in this same lesson." },
        { id: "ja-u54l3-shio", type: "vocab", front: "しお", reading: "shio", meaning: "salt", example: { jp: "りょうりにしおをいれます。", en: "I put salt in the food." }, drill: { jp: "しおをすこしつかいます。", en: "I use a little salt." }, accept: ["table salt", "sea salt", "some salt"], hint: "SHI-o — two beats, し then お. ⚠️ Pairs with さとう in this lesson: both are white powders in the same kitchen, and swapping them is the classic cooking mistake." },
        { id: "ja-u54l3-shoyu", type: "vocab", front: "しょうゆ", reading: "shōyu", meaning: "soy sauce", example: { jp: "すしにしょうゆをつけます。", en: "I put soy sauce on the sushi." }, drill: { jp: "しょうゆをりょうりにいれます。", en: "I add soy sauce to the dish." }, accept: ["soy", "soya sauce", "shoyu"], hint: "SHŌ-yu — しょう is the yōon sho held long, then ゆ: two beats. ⚠️ English soy came FROM this word. It is poured, so it takes かけます or つけます, never sprinkled." },
        { id: "ja-u54l3-miso", type: "vocab", front: "みそ", reading: "miso", meaning: "miso", example: { jp: "みそはおいしいです。", en: "Miso is delicious." }, drill: { jp: "みそでスープをつくります。", en: "I make soup with miso." }, accept: ["miso paste", "soybean paste", "fermented soybean paste"], hint: "MI-so — two short beats, a clean s and not a z. ⚠️ It is a thick fermented paste, not a soup; the soup made from it is みそしる." },
        { id: "ja-u54l3-abura", type: "vocab", front: "あぶら", reading: "abura", meaning: "oil", example: { jp: "りょうりにあぶらをつかいます。", en: "I use oil for cooking." }, drill: { jp: "あぶらをすこしつかいます。", en: "I use a little oil." }, accept: ["cooking oil", "fat", "grease"], hint: "a-bu-RA — three beats, tapped r. ⚠️ It covers cooking oil AND the fat on meat — Japanese does not split those into two words the way English does." },
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
        { id: "ja-u54l4-udon", type: "vocab", front: "うどん", reading: "udon", meaning: "udon", example: { jp: "うどんをたべます。", en: "I eat udon." }, drill: { jp: "うどんはあついです。", en: "The udon is hot." }, accept: ["udon noodles", "thick wheat noodles", "wheat noodles"], hint: "u-DON — two beats, the ん held. ⚠️ Thick, white, soft wheat noodles. Its thin brown partner そば is in this very lesson." },
        { id: "ja-u54l4-soba", type: "vocab", front: "そば", reading: "soba", meaning: "soba", example: { jp: "そばがすきです。", en: "I like soba." }, drill: { jp: "そばをたべます。", en: "I eat soba." }, accept: ["soba noodles", "buckwheat noodles", "buckwheat"], hint: "SO-ba — two short beats. ⚠️ Thin buckwheat noodles, the opposite texture to うどん above. そば also means nearby, so the context decides." },
        { id: "ja-u54l4-ramen", type: "vocab", front: "ラーメン", reading: "rāmen", meaning: "ramen", example: { jp: "ラーメンはおいしいです。", en: "Ramen is delicious." }, drill: { jp: "ラーメンをたべます。", en: "I eat ramen." }, accept: ["ramen noodles", "chinese-style noodles", "noodle soup"], hint: "RĀ-men — katakana with ー, so the first beat is held long: rah-men, not ra-men. ⚠️ A loanword from Chinese, which is why it is not written in hiragana." },
        { id: "ja-u54l4-gyunyu", type: "vocab", front: "ぎゅうにゅう", reading: "gyūnyū", meaning: "milk (cow's milk)", example: { jp: "ぎゅうにゅうをのみます。", en: "I drink milk." }, drill: { jp: "ぎゅうにゅうをかいます。", en: "I buy milk." }, accept: ["cow's milk", "milk", "fresh milk"], hint: "GYŪ-NYŪ — two long beats, both of them yōon: ぎゅう then にゅう. 牛 (cow) + 乳 (milk). ⚠️ Six kana for two beats is the hard part — hold each one." },
        { id: "ja-u54l4-osake", type: "vocab", front: "おさけ", reading: "osake", meaning: "sake", example: { jp: "ちちはおさけをのみます。", en: "My father drinks sake." }, drill: { jp: "おさけをすこしのみます。", en: "I drink a little sake." }, accept: ["alcohol", "liquor", "rice wine", "booze"], hint: "o-SA-ke — three beats; the お is the polite prefix. ⚠️ さけ alone is rice wine, but おさけ covers alcohol of ANY kind, beer included." },
        { id: "ja-u54l4-suppai", type: "vocab", front: "すっぱい", reading: "suppai", meaning: "sour", example: { jp: "レモンはすっぱいです。", en: "Lemons are sour." }, drill: { jp: "このみかんはすっぱいです。", en: "This mandarin is sour." }, accept: ["sour-tasting", "tart", "acidic"], hint: "sup-PAI — the small っ is a held stop, so the p doubles. ⚠️ Sour, not bitter: bitter is にがい. Lemons and unripe みかん are すっぱい." },
      ],
    },
  ],
};
