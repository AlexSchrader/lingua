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
      canDo: "Name the equipment you cook with: フライパン, ほうちょう, まないた, おたま, しょっき, あわ.",
      items: [
        { id: "ja-u154l1-furaipan", type: "vocab", front: "フライパン", reading: "furaipan", meaning: "frying pan", example: { jp: "フライパンをあたためてから、たまごをやきます。", en: "I heat the frying pan and then cook the egg." }, drill: { jp: "フライパンでにくをやきます。", en: "I fry the meat in the frying pan." }, accept: ["skillet", "pan", "frying pan"], hint: "From English 'fry pan'. なべ is a deep pot; フライパン is the flat one." },
        { id: "ja-u154l1-hocho", type: "vocab", front: "ほうちょう", reading: "hōchō", meaning: "kitchen knife", example: { jp: "ほうちょうがよくきれるので、やさいがきりやすいです。", en: "The knife is sharp, so the vegetables are easy to cut." }, drill: { jp: "ほうちょうをあらいます。", en: "I wash the kitchen knife." }, accept: ["cook's knife", "chef's knife", "kitchen knife"], hint: "Only a kitchen knife — a pocket knife is ナイフ. よくきれる (cuts well) is the standard compliment for one." },
        { id: "ja-u154l1-manaita", type: "vocab", front: "まないた", reading: "manaita", meaning: "chopping board", example: { jp: "まないたはにくとやさいでわけたほうがいいです。", en: "It's better to separate the boards for meat and vegetables." }, drill: { jp: "まないたをきれいにあらいました。", en: "I washed the chopping board clean." }, accept: ["cutting board", "carving board", "chopping board"], hint: "まないたのうえのこい ('a carp on the chopping board') means being completely at someone's mercy." },
        { id: "ja-u154l1-otama", type: "vocab", front: "おたま", reading: "otama", meaning: "ladle", example: { jp: "おたまでスープをよそって、みんなにくばりました。", en: "I ladled the soup out and handed it round to everyone." }, drill: { jp: "おたまをつかってください。", en: "Please use the ladle." }, accept: ["soup ladle", "serving spoon", "a ladle"], hint: "Short for おたまじゃくし, which also means 'tadpole' — the shape is the joke, and the word is genuinely used both ways." },
        { id: "ja-u154l1-shokki", type: "vocab", front: "しょっき", reading: "shokki", meaning: "tableware, dishes", example: { jp: "しょっきをあらうのは、いつもわたしのしごとです。", en: "Washing the dishes is always my job." }, drill: { jp: "しょっきをかたづけました。", en: "I put the dishes away." }, accept: ["crockery", "plates and bowls", "dinnerware"], hint: "しょく (eat) + き (vessel) — all the plates, bowls and cups as a set. さら is one plate; しょっき is the whole lot." },
        { id: "ja-u154l1-awa", type: "vocab", front: "あわ", reading: "awa", meaning: "bubbles", example: { jp: "おゆが わいて、あわが たくさん 出て きました。", en: "The water boiled and a lot of bubbles came up." }, drill: { jp: "あわをあらいながします。", en: "I rinse the bubbles away." }, accept: ["foam", "froth", "suds"], hint: "Say it a-wa, two light beats. Soap suds, sea foam and the head on a beer are all あわ. The verb that goes with it is あわがでる — bubbles come OUT, not 'appear'." },
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
        { id: "ja-u154l2-reshipi", type: "vocab", front: "レシピ", reading: "reshipi", meaning: "recipe", example: { jp: "ネットでレシピをけんさくして、つくってみました。", en: "I searched for a recipe online and gave it a try." }, drill: { jp: "レシピをみながらつくります。", en: "I cook while looking at the recipe." }, accept: ["cooking instructions", "formula", "a recipe"], hint: "The loanword has largely replaced つくりかた in print, though both are understood." },
        { id: "ja-u154l2-kondate", type: "vocab", front: "こんだて", reading: "kondate", meaning: "menu, meal plan", example: { jp: "いっしゅうかんのこんだてをきめておくと、かいものがらくです。", en: "Deciding a week's meal plan in advance makes shopping easy." }, drill: { jp: "こんだてをきめます。", en: "I decide the menu." }, accept: ["what to cook", "bill of fare", "meal schedule"], hint: "What you plan to cook, not the list in a restaurant — that's メニュー. School lunch schedules are こんだてひょう." },
        { id: "ja-u154l2-bunryo", type: "vocab", front: "ぶんりょう", reading: "bunryō", meaning: "quantity, amount (in a recipe)", example: { jp: "ぶんりょうをまもらないと、あじがかわってしまいます。", en: "If you don't stick to the quantities, the taste changes." }, drill: { jp: "ぶんりょうをはんぶんにしました。", en: "I halved the quantities." }, accept: ["measure", "portion", "proportions"], hint: "The recipe-specific word for how much. りょう alone is quantity in general; ぶんりょう is the prescribed amount." },
        { id: "ja-u154l2-osaji", type: "vocab", front: "おおさじ", reading: "ōsaji", meaning: "tablespoon (measure)", example: { jp: "しょうゆをおおさじ2はいいれてください。", en: "Please add two tablespoons of soy sauce." }, drill: { jp: "おおさじ1はいでじゅうぶんです。", en: "One tablespoon is enough." }, accept: ["tbsp", "large spoon", "tablespoon"], hint: "おおきい + さじ (spoon). In Japanese recipes おおさじ1 is exactly 15ml — it's a unit, not a guess." },
        { id: "ja-u154l2-kosaji", type: "vocab", front: "こさじ", reading: "kosaji", meaning: "teaspoon (measure)", example: { jp: "さとうはこさじ1ぱいでじゅうぶんです。", en: "One teaspoon of sugar is enough." }, drill: { jp: "こさじ2はいいれてください。", en: "Please add two teaspoons." }, accept: ["tsp", "small spoon", "teaspoon"], hint: "The pair to おおさじ, and exactly 5ml — a third of a tablespoon, not a half." },
        { id: "ja-u154l2-hitotsumami", type: "vocab", front: "ひとつまみ", reading: "hitotsumami", meaning: "a pinch (of)", example: { jp: "さいごにしおをひとつまみいれると、あじがよくなります。", en: "Adding a pinch of salt at the end improves the flavour." }, drill: { jp: "さとうをひとつまみいれます。", en: "I add a pinch of sugar." }, accept: ["pinch", "small amount", "a pinch"], hint: "ひとつ + つまむ (to pinch) — what you can hold between three fingers. The one measure in Japanese cooking that isn't precise." },
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
        { id: "ja-u154l3-kizamimasu", type: "vocab", front: "きざみます", reading: "kizamimasu", meaning: "to chop finely", example: { jp: "やさいをこまかくきざんで、スープにいれます。", en: "Chop the vegetables finely and add them to the soup." }, drill: { jp: "にくをこまかくきざみます。", en: "I chop the meat finely." }, accept: ["to mince", "to dice", "chops"], hint: "きります is cutting in general; きざみます is cutting SMALL and repeatedly. Recipe instructions almost always specify which." },
        { id: "ja-u154l3-kogemasu", type: "vocab", front: "こげます", reading: "kogemasu", meaning: "to burn, to get scorched", example: { jp: "ひがつよすぎて、さかながこげてしまいました。", en: "The heat was too strong and the fish got burnt." }, drill: { jp: "パンがこげますよ。", en: "The bread is going to burn." }, accept: ["to char", "to catch (on the pan)", "burns"], hint: "Intransitive — the food does it. Its transitive partner こがします is you doing it to the food." },
        { id: "ja-u154l3-yosoimasu", type: "vocab", front: "よそいます", reading: "yosoimasu", meaning: "to dish up, to serve out", example: { jp: "ごはんをちゃわんによそって、テーブルにはこびます。", en: "I dish the rice into bowls and carry it to the table." }, drill: { jp: "スープをよそいます。", en: "I dish up the soup." }, accept: ["to ladle out", "to serve (into a bowl)", "dishes up"], hint: "Specifically rice and soup into individual bowls. For putting food out on the table generally, ならべます." },
        { id: "ja-u154l3-shitagoshirae", type: "vocab", front: "したごしらえ", reading: "shitagoshirae", meaning: "prep work (before cooking)", example: { jp: "したごしらえをしておけば、あとがらくです。", en: "If you do the prep in advance, the rest is easy." }, drill: { jp: "したごしらえをてつだいます。", en: "I help with the prep work." }, accept: ["preparation", "mise en place", "advance prep"], hint: "した (under) + こしらえ (making) — the making that happens underneath. Washing, peeling, cutting, marinating: everything before the heat." },
        { id: "ja-u154l3-moritsuke", type: "vocab", front: "もりつけ", reading: "moritsuke", meaning: "plating, presentation", example: { jp: "もりつけがきれいだと、おなじりょうりでもおいしそうにみえます。", en: "With good plating, the same dish looks more appetizing." }, drill: { jp: "もりつけをべんきょうしたいです。", en: "I want to study plating." }, accept: ["arrangement on the plate", "food presentation", "plating"], hint: "もる (heap up) + つける (attach). Japanese cooking treats this as part of the dish, not decoration afterwards." },
        { id: "ja-u154l3-ajitsuke", type: "vocab", front: "あじつけ", reading: "ajitsuke", meaning: "seasoning (the act)", example: { jp: "あじつけがうすいほうが、やさいのあじがよくわかります。", en: "With lighter seasoning you can taste the vegetables better." }, drill: { jp: "あじつけをかえてみました。", en: "I tried changing the seasoning." }, accept: ["flavouring", "to season", "adding flavour"], hint: "あじ (taste) + つける (apply). It names the ACT of seasoning, not the salt and soy you season with." },
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
        { id: "ja-u154l4-shibui", type: "vocab", front: "しぶい", reading: "shibui", meaning: "astringent; understatedly stylish", example: { jp: "このおちゃはすこししぶいですが、なれるとおいしいです。", en: "This tea is a little astringent, but you come to like it." }, drill: { jp: "そのとけいはしぶいですね。", en: "That watch is understatedly stylish." }, accept: ["bitter-dry", "tart", "tastefully plain"], hint: "The mouth-drying taste of strong green tea or unripe persimmon. Applied to a person or a style it's a real compliment — quiet, unflashy taste." },
        { id: "ja-u154l4-kotteri", type: "vocab", front: "こってり", reading: "kotteri", meaning: "rich, heavy (flavour)", example: { jp: "こってりしたラーメンより、あっさりしたほうがすきです。", en: "I prefer light ramen to the rich kind." }, drill: { jp: "こってりしたあじがすきです。", en: "I like a rich flavour." }, accept: ["thick", "fatty", "full-flavoured"], hint: "Fat and depth of flavour. Ramen shops ask you to choose between こってり and あっさり — the pair is one question." },
        { id: "ja-u154l4-assari", type: "vocab", front: "あっさり", reading: "assari", meaning: "light, clean (flavour)", example: { jp: "なつはあっさりしたものがたべたくなります。", en: "In summer you want to eat lighter things." }, drill: { jp: "スープをあっさりつくりました。", en: "I made the soup light." }, accept: ["plain", "refreshing", "not heavy"], hint: "The pair to こってり. Also used for a personality or an outcome — あっさりまけた means losing easily, without a fight." },
        { id: "ja-u154l4-shun", type: "vocab", front: "しゅん", reading: "shun", meaning: "the season (for a food)", example: { jp: "しゅんのやさいはあまくて、ねだんもやすいです。", en: "In-season vegetables are sweeter and cheaper too." }, drill: { jp: "しゅんのさかなをかいました。", en: "I bought fish that is in season." }, accept: ["peak season", "in season", "prime time"], hint: "The few weeks a food is at its best. Japanese cooking organises itself around this — しゅんのもの is a whole category on a menu." },
        { id: "ja-u154l4-shomikigen", type: "vocab", front: "しょうみきげん", reading: "shōmikigen", meaning: "best-before date", example: { jp: "しょうみきげんがすぎましたが、においはだいじょうぶです。", en: "It's past the best-before date, but it smells fine." }, drill: { jp: "しょうみきげんをみてください。", en: "Please look at the best-before date." }, accept: ["best before", "date of quality", "use-by (quality)"], hint: "Quality, not safety — that's しょうひきげん (use-by). One kana apart, and the difference is whether it's still safe to eat." },
        { id: "ja-u154l4-shokuyoku", type: "vocab", front: "しょくよく", reading: "shokuyoku", meaning: "appetite", example: { jp: "あついひがつづいて、しょくよくがなくなりました。", en: "The hot days went on and I lost my appetite." }, drill: { jp: "しょくよくがありません。", en: "I have no appetite." }, accept: ["hunger", "desire to eat", "appetite"], hint: "しょく (eat) + よく (desire). しょくよくのあき — 'autumn, the season of appetite' — is a phrase you will hear every year." }
      ],
    },
  ],
};
