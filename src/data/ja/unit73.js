// Unit 73 — りょうり・レストラン ("Cooking & eating out") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 food theme: cooking verbs, food prep, dining out, and menu/meal words.
// Modeled like the A2 verb/noun units. Examples lean on already-introduced vocab
// (たまご やさい にく みず ごはん さとう みせ かぞく…) + core particles (を/に/で/と/は)
// and です/ます, so it slots on top of a finished A1/early-A2.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT73 = {
  id: "ja-u73",
  lang: "ja",
  title: "りょうり・レストラン",
  order: 73,
  stage: "a2",
  lessons: [
    // Lesson 1: cooking verbs
    {
      id: "ja-u73l1",
      unit: 73,
      lesson: 1,
      title: "In the kitchen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about how food is cooked: ゆでます いためます やきます むします にます まぜます.",
      items: [
        { id: "ja-u73l1-yudemasu", type: "vocab", front: "ゆでます", reading: "yudemasu", meaning: "boil", example: { jp: "たまごをゆでます。", en: "I boil an egg." }, accept: ["to boil"] },
        { id: "ja-u73l1-itamemasu", type: "vocab", front: "いためます", reading: "itamemasu", meaning: "stir-fry", example: { jp: "やさいをいためます。", en: "I stir-fry vegetables." }, accept: ["to stir-fry", "fry"] },
        { id: "ja-u73l1-yakimasu", type: "vocab", front: "やきます", reading: "yakimasu", meaning: "grill", example: { jp: "にくをやきます。", en: "I grill the meat." }, accept: ["to grill", "bake"] },
        { id: "ja-u73l1-mushimasu", type: "vocab", front: "むします", reading: "mushimasu", meaning: "steam", example: { jp: "さかなをむします。", en: "I steam the fish." }, accept: ["to steam"] },
        { id: "ja-u73l1-nimasu", type: "vocab", front: "にます", reading: "nimasu", meaning: "simmer", example: { jp: "じゃがいもをにます。", en: "I simmer the potatoes." }, accept: ["to simmer", "boil"] },
        { id: "ja-u73l1-mazemasu", type: "vocab", front: "まぜます", reading: "mazemasu", meaning: "mix", example: { jp: "さとうをまぜます。", en: "I mix in the sugar." }, accept: ["to mix", "stir"] },
      ],
    },
    // Lesson 2: preparing the food
    {
      id: "ja-u73l2",
      unit: 73,
      lesson: 2,
      title: "Preparing food",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get food ready to serve: わかします あたためます ひやします もります あじみ しんせん.",
      items: [
        { id: "ja-u73l2-wakashimasu", type: "vocab", front: "わかします", reading: "wakashimasu", meaning: "boil water", example: { jp: "みずをわかします。", en: "I boil the water." }, accept: ["to boil water", "heat water"] },
        { id: "ja-u73l2-atatamemasu", type: "vocab", front: "あたためます", reading: "atatamemasu", meaning: "warm up", example: { jp: "ごはんをあたためます。", en: "I warm up the rice." }, accept: ["to warm up", "heat up"] },
        { id: "ja-u73l2-hiyashimasu", type: "vocab", front: "ひやします", reading: "hiyashimasu", meaning: "chill", example: { jp: "ビールをひやします。", en: "I chill the beer." }, accept: ["to chill", "cool"] },
        { id: "ja-u73l2-morimasu", type: "vocab", front: "もります", reading: "morimasu", meaning: "dish up", example: { jp: "ごはんをもります。", en: "I dish up the rice." }, accept: ["to serve", "dish up"] },
        { id: "ja-u73l2-ajimi", type: "vocab", front: "あじみ", reading: "ajimi", meaning: "tasting", example: { jp: "スープをあじみします。", en: "I taste the soup." }, accept: ["taste", "tasting"] },
        { id: "ja-u73l2-shinsen", type: "vocab", front: "しんせん", reading: "shinsen", meaning: "fresh", example: { jp: "しんせんなさかなです。", en: "It's fresh fish." }, accept: ["fresh"] },
      ],
    },
    // Lesson 3: at the restaurant
    {
      id: "ja-u73l3",
      unit: 73,
      lesson: 3,
      title: "At the restaurant",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a meal out: ていしょく おしぼり かいけい のみほうだい おかわり がいしょく.",
      items: [
        { id: "ja-u73l3-teishoku", type: "vocab", front: "ていしょく", reading: "teishoku", meaning: "set meal", example: { jp: "ていしょくをたべます。", en: "I eat a set meal." }, accept: ["set meal", "fixed meal"] },
        { id: "ja-u73l3-oshibori", type: "vocab", front: "おしぼり", reading: "oshibori", meaning: "wet towel", example: { jp: "おしぼりをつかいます。", en: "I use the wet towel." }, accept: ["wet towel", "hand towel"] },
        { id: "ja-u73l3-kaikei", type: "vocab", front: "かいけい", reading: "kaikei", meaning: "bill", example: { jp: "かいけいをおねがいします。", en: "The check, please." }, accept: ["bill", "check"] },
        { id: "ja-u73l3-nomihodai", type: "vocab", front: "のみほうだい", reading: "nomihōdai", meaning: "all-you-can-drink", example: { jp: "このみせはのみほうだいです。", en: "This place is all-you-can-drink." }, accept: ["all-you-can-drink", "unlimited drinks"] },
        { id: "ja-u73l3-okawari", type: "vocab", front: "おかわり", reading: "okawari", meaning: "refill", example: { jp: "ごはんをおかわりします。", en: "I get a refill of rice." }, accept: ["refill", "second helping"] },
        { id: "ja-u73l3-gaishoku", type: "vocab", front: "がいしょく", reading: "gaishoku", meaning: "eating out", example: { jp: "きょうはがいしょくします。", en: "Today I'll eat out." }, accept: ["eating out", "dining out"] },
      ],
    },
    // Lesson 4: menu & meals
    {
      id: "ja-u73l4",
      unit: 73,
      lesson: 4,
      title: "On the menu",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Order from the menu: デザート ステーキ ハンバーグ どんぶり おかず しょくじ.",
      items: [
        { id: "ja-u73l4-dezato", type: "vocab", front: "デザート", reading: "dezāto", meaning: "dessert", example: { jp: "デザートをたべます。", en: "I eat dessert." }, accept: ["dessert"] },
        { id: "ja-u73l4-suteki", type: "vocab", front: "ステーキ", reading: "sutēki", meaning: "steak", example: { jp: "ステーキがすきです。", en: "I like steak." }, accept: ["steak"] },
        { id: "ja-u73l4-hanbagu", type: "vocab", front: "ハンバーグ", reading: "hanbāgu", meaning: "hamburg steak", example: { jp: "ハンバーグはおいしいです。", en: "The hamburg steak is delicious." }, accept: ["hamburg steak", "salisbury steak"] },
        { id: "ja-u73l4-donburi", type: "vocab", front: "どんぶり", reading: "donburi", meaning: "rice bowl", example: { jp: "どんぶりをちゅうもんします。", en: "I order a rice bowl." }, accept: ["rice bowl", "donburi"] },
        { id: "ja-u73l4-okazu", type: "vocab", front: "おかず", reading: "okazu", meaning: "side dish", example: { jp: "おかずをつくります。", en: "I make a side dish." }, accept: ["side dish", "dish"] },
        { id: "ja-u73l4-shokuji", type: "vocab", front: "しょくじ", reading: "shokuji", meaning: "meal", example: { jp: "かぞくとしょくじします。", en: "I have a meal with my family." }, accept: ["meal", "dining"] },
      ],
    },
  ],
};
