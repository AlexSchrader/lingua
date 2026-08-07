// JA Unit 154 — ごい・N3・13 (りょうりとしょくじ — cooking and meals) — B1 / JLPT N3
// Strand D, coverage 13 of 14. A1/A2 taught food NAMES and the basic cooking verbs
// (にます, やきます, ゆでます, まぜます). This unit is the layer that lets a learner follow
// a recipe or read a label: measures, heat levels, prep, plating, and the words on a
// package — しょうみきげん, しゅん, えいよう.
// Lesson 4 covers taste vocabulary above あまい／からい, which is where every conversation
// about food in Japan actually lives.
export const UNIT154 = {
  id: "ja-u154",
  lang: "ja",
  title: "ごい・N3・13",
  order: 154,
  stage: "b1",
  lessons: [
    {
      id: "ja-u154l1",
      unit: 154,
      lesson: 1,
      title: "In the kitchen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the equipment you cook with: フライパン, ほうちょう, まないた, おたま, しょっき, ゆげ.",
      items: [
        { id: "ja-u154l1-furaipan", type: "vocab", front: "フライパン", reading: "furaipan", meaning: "frying pan", example: { jp: "フライパンをあたためてから、たまごをやきます。", en: "I heat the frying pan and then cook the egg." }, accept: ["skillet", "pan"], hint: "From English 'fry pan'. なべ is a deep pot; フライパン is the flat one." },
        { id: "ja-u154l1-hocho", type: "vocab", front: "ほうちょう", reading: "hōchō", meaning: "kitchen knife", example: { jp: "ほうちょうがよくきれるので、やさいがきりやすいです。", en: "The knife is sharp, so the vegetables are easy to cut." }, accept: ["cook's knife", "chef's knife"], hint: "Only a kitchen knife — a pocket knife is ナイフ. よくきれる (cuts well) is the standard compliment for one." },
        { id: "ja-u154l1-manaita", type: "vocab", front: "まないた", reading: "manaita", meaning: "chopping board", example: { jp: "まないたはにくとやさいでわけたほうがいいです。", en: "It's better to separate the boards for meat and vegetables." }, accept: ["cutting board", "carving board"], hint: "まないたのうえのこい ('a carp on the chopping board') means being completely at someone's mercy." },
        { id: "ja-u154l1-otama", type: "vocab", front: "おたま", reading: "otama", meaning: "ladle", example: { jp: "おたまでスープをよそって、みんなにくばりました。", en: "I ladled the soup out and handed it round to everyone." }, accept: ["soup ladle", "serving spoon"], hint: "Short for おたまじゃくし, which also means 'tadpole' — the shape is the joke, and the word is genuinely used both ways." },
        { id: "ja-u154l1-shokki", type: "vocab", front: "しょっき", reading: "shokki", meaning: "tableware, dishes", example: { jp: "しょっきをあらうのは、いつもわたしのしごとです。", en: "Washing the dishes is always my job." }, accept: ["crockery", "plates and bowls", "dinnerware"], hint: "しょく (eat) + き (vessel) — all the plates, bowls and cups as a set. さら is one plate; しょっき is the whole lot." },
        { id: "ja-u154l1-yuge", type: "vocab", front: "ゆげ", reading: "yuge", meaning: "steam", example: { jp: "なべからゆげがでてきたので、ひをよわくしました。", en: "Steam started coming off the pot, so I turned the heat down." }, accept: ["vapour", "rising steam"], hint: "ゆ (hot water) + け (vapour), voiced. Visible steam specifically — the wisp you can see, not water vapour in general." },
      ],
    },
    {
      id: "ja-u154l2",
      unit: 154,
      lesson: 2,
      title: "Following a recipe",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read a recipe and measure things out: レシピ, こんだて, ぶんりょう, おおさじ, こさじ, ひとつまみ.",
      items: [
        { id: "ja-u154l2-reshipi", type: "vocab", front: "レシピ", reading: "reshipi", meaning: "recipe", example: { jp: "ネットでレシピをけんさくして、つくってみました。", en: "I searched for a recipe online and gave it a try." }, accept: ["cooking instructions", "formula"], hint: "The loanword has largely replaced つくりかた in print, though both are understood." },
        { id: "ja-u154l2-kondate", type: "vocab", front: "こんだて", reading: "kondate", meaning: "menu, meal plan", example: { jp: "いっしゅうかんのこんだてをきめておくと、かいものがらくです。", en: "Deciding a week's meal plan in advance makes shopping easy." }, accept: ["what to cook", "bill of fare", "meal schedule"], hint: "What you plan to cook, not the list in a restaurant — that's メニュー. School lunch schedules are こんだてひょう." },
        { id: "ja-u154l2-bunryo", type: "vocab", front: "ぶんりょう", reading: "bunryō", meaning: "quantity, amount (in a recipe)", example: { jp: "ぶんりょうをまもらないと、あじがかわってしまいます。", en: "If you don't stick to the quantities, the taste changes." }, accept: ["measure", "portion", "proportions"], hint: "The recipe-specific word for how much. りょう alone is quantity in general; ぶんりょう is the prescribed amount." },
        { id: "ja-u154l2-osaji", type: "vocab", front: "おおさじ", reading: "ōsaji", meaning: "tablespoon (measure)", example: { jp: "しょうゆをおおさじ2はいいれてください。", en: "Please add two tablespoons of soy sauce." }, accept: ["tbsp", "large spoon"], hint: "おおきい + さじ (spoon). In Japanese recipes おおさじ1 is exactly 15ml — it's a unit, not a guess." },
        { id: "ja-u154l2-kosaji", type: "vocab", front: "こさじ", reading: "kosaji", meaning: "teaspoon (measure)", example: { jp: "さとうはこさじ1ぱいでじゅうぶんです。", en: "One teaspoon of sugar is enough." }, accept: ["tsp", "small spoon"], hint: "The pair to おおさじ, and exactly 5ml — a third of a tablespoon, not a half." },
        { id: "ja-u154l2-hitotsumami", type: "vocab", front: "ひとつまみ", reading: "hitotsumami", meaning: "a pinch (of)", example: { jp: "さいごにしおをひとつまみいれると、あじがよくなります。", en: "Adding a pinch of salt at the end improves the flavour." }, accept: ["pinch", "small amount"], hint: "ひとつ + つまむ (to pinch) — what you can hold between three fingers. The one measure in Japanese cooking that isn't precise." },
      ],
    },
    {
      id: "ja-u154l3",
      unit: 154,
      lesson: 3,
      title: "Prep and technique",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what you actually did to the food: きざみます, こげます, よそいます, したごしらえ, もりつけ, あじつけ.",
      items: [
        { id: "ja-u154l3-kizamimasu", type: "vocab", front: "きざみます", reading: "kizamimasu", meaning: "to chop finely", example: { jp: "やさいをこまかくきざんで、スープにいれます。", en: "Chop the vegetables finely and add them to the soup." }, accept: ["to mince", "to dice", "chops"], hint: "きります is cutting in general; きざみます is cutting SMALL and repeatedly. Recipe instructions almost always specify which." },
        { id: "ja-u154l3-kogemasu", type: "vocab", front: "こげます", reading: "kogemasu", meaning: "to burn, to get scorched", example: { jp: "ひがつよすぎて、さかながこげてしまいました。", en: "The heat was too strong and the fish got burnt." }, accept: ["to char", "to catch (on the pan)", "burns"], hint: "Intransitive — the food does it. Its transitive partner こがします is you doing it to the food." },
        { id: "ja-u154l3-yosoimasu", type: "vocab", front: "よそいます", reading: "yosoimasu", meaning: "to dish up, to serve out", example: { jp: "ごはんをちゃわんによそって、テーブルにはこびます。", en: "I dish the rice into bowls and carry it to the table." }, accept: ["to ladle out", "to serve (into a bowl)", "dishes up"], hint: "Specifically rice and soup into individual bowls. For putting food out on the table generally, ならべます." },
        { id: "ja-u154l3-shitagoshirae", type: "vocab", front: "したごしらえ", reading: "shitagoshirae", meaning: "prep work (before cooking)", example: { jp: "したごしらえをしておけば、あとがらくです。", en: "If you do the prep in advance, the rest is easy." }, accept: ["preparation", "mise en place", "advance prep"], hint: "した (under) + こしらえ (making) — the making that happens underneath. Washing, peeling, cutting, marinating: everything before the heat." },
        { id: "ja-u154l3-moritsuke", type: "vocab", front: "もりつけ", reading: "moritsuke", meaning: "plating, presentation", example: { jp: "もりつけがきれいだと、おなじりょうりでもおいしそうにみえます。", en: "With good plating, the same dish looks more appetizing." }, accept: ["arrangement on the plate", "food presentation"], hint: "もる (heap up) + つける (attach). Japanese cooking treats this as part of the dish, not decoration afterwards." },
        { id: "ja-u154l3-ajitsuke", type: "vocab", front: "あじつけ", reading: "ajitsuke", meaning: "seasoning (the act)", example: { jp: "あじつけがうすいほうが、やさいのあじがよくわかります。", en: "With lighter seasoning you can taste the vegetables better." }, accept: ["flavouring", "to season", "adding flavour"], hint: "あじ (taste) + つける (apply). It names the ACT of seasoning, not the salt and soy you season with." },
      ],
    },
    {
      id: "ja-u154l4",
      unit: 154,
      lesson: 4,
      title: "How it tastes, how fresh it is",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about food beyond おいしい: しぶい, こってり, あっさり, しゅん, しょうみきげん, えいよう.",
      items: [
        { id: "ja-u154l4-shibui", type: "vocab", front: "しぶい", reading: "shibui", meaning: "astringent; understatedly stylish", example: { jp: "このおちゃはすこししぶいですが、なれるとおいしいです。", en: "This tea is a little astringent, but you come to like it." }, accept: ["bitter-dry", "tart", "tastefully plain"], hint: "The mouth-drying taste of strong green tea or unripe persimmon. Applied to a person or a style it's a real compliment — quiet, unflashy taste." },
        { id: "ja-u154l4-kotteri", type: "vocab", front: "こってり", reading: "kotteri", meaning: "rich, heavy (flavour)", example: { jp: "こってりしたラーメンより、あっさりしたほうがすきです。", en: "I prefer light ramen to the rich kind." }, accept: ["thick", "fatty", "full-flavoured"], hint: "Fat and depth of flavour. Ramen shops ask you to choose between こってり and あっさり — the pair is one question." },
        { id: "ja-u154l4-assari", type: "vocab", front: "あっさり", reading: "assari", meaning: "light, clean (flavour)", example: { jp: "なつはあっさりしたものがたべたくなります。", en: "In summer you want to eat lighter things." }, accept: ["plain", "refreshing", "not heavy"], hint: "The pair to こってり. Also used for a personality or an outcome — あっさりまけた means losing easily, without a fight." },
        { id: "ja-u154l4-shun", type: "vocab", front: "しゅん", reading: "shun", meaning: "the season (for a food)", example: { jp: "しゅんのやさいはあまくて、ねだんもやすいです。", en: "In-season vegetables are sweeter and cheaper too." }, accept: ["peak season", "in season", "prime time"], hint: "The few weeks a food is at its best. Japanese cooking organises itself around this — しゅんのもの is a whole category on a menu." },
        { id: "ja-u154l4-shomikigen", type: "vocab", front: "しょうみきげん", reading: "shōmikigen", meaning: "best-before date", example: { jp: "しょうみきげんがすぎましたが、においはだいじょうぶです。", en: "It's past the best-before date, but it smells fine." }, accept: ["best before", "date of quality", "use-by (quality)"], hint: "Quality, not safety — that's しょうひきげん (use-by). One kana apart, and the difference is whether it's still safe to eat." },
        { id: "ja-u154l4-eiyo", type: "vocab", front: "えいよう", reading: "eiyō", meaning: "nutrition", example: { jp: "いそがしくても、えいようのバランスをかんがえましょう。", en: "Even when you're busy, think about nutritional balance." }, accept: ["nourishment", "nutrients", "food value"], hint: "えいようがある = 'it's nutritious'. The set phrase えいようバランス appears on every school lunch and health leaflet." },
      ],
    },
  ],
};
