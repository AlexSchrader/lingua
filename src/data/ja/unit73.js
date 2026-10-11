// Unit 73 — りょうり・レストラン ("Cooking & eating out") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 food theme: cooking verbs, food prep, dining out, and menu/meal words.
// Modeled like the A2 verb/noun units. Examples lean on already-introduced vocab
// (たまご やさい にく みず ごはん さとう みせ かぞく…) + core particles (を/に/で/と/は)
// and です/ます, so it slots on top of a finished A1/early-A2.
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12).
// DRILL SHAPE: every NOUN drill leads with its own front + a core particle, which is
// what ja sentenceTokens tiles — `practice()` REPLACES the example, so any other
// shape would strip sentence:build from the item. The VERB cards (lessons 1–2) cannot
// do that, because a ます-form cannot open a sentence; their examples never earned
// sentence:build either, so those drills keep cloze and take nothing away.
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
        { id: "ja-u73l1-yudemasu", type: "vocab", front: "ゆでます", reading: "yudemasu", meaning: "boil", example: { jp: "たまごをゆでます。", en: "I boil an egg." }, drill: { jp: "やさいをゆでます。", en: "I boil the vegetables." }, accept: ["to boil", "boil in water", "parboil"], hint: "yudemasu — boiling something IN water and then taking it out: eggs, pasta, greens. にます on a later card in this lesson is simmering in a seasoned liquid you keep. わかします in lesson 2 is boiling the water itself." },
        { id: "ja-u73l1-itamemasu", type: "vocab", front: "いためます", reading: "itamemasu", meaning: "stir-fry", example: { jp: "やさいをいためます。", en: "I stir-fry vegetables." }, drill: { jp: "にくをいためます。", en: "I stir-fry the meat." }, accept: ["to stir-fry", "fry", "sauté", "fry quickly"], hint: "itamemasu — fast frying in a little oil, moving the pan. Not deep-frying, which is あげます. いためもの is a stir-fried dish; adding もの to a cooking verb names the dish all through Japanese menus." },
        { id: "ja-u73l1-yakimasu", type: "vocab", front: "やきます", reading: "yakimasu", meaning: "grill", example: { jp: "にくをやきます。", en: "I grill the meat." }, drill: { jp: "パンをやきます。", en: "I toast the bread." }, accept: ["to grill", "bake", "roast", "toast"], hint: "yakimasu — dry heat of any kind: grilling fish, baking a cake, toasting bread. One Japanese verb for four English ones. It is the やき in やきとり and やきそば." },
        { id: "ja-u73l1-mushimasu", type: "vocab", front: "むします", reading: "mushimasu", meaning: "steam", example: { jp: "さかなをむします。", en: "I steam the fish." }, drill: { jp: "ごはんをむします。", en: "I steam the rice." }, accept: ["to steam", "cook with steam", "steam-cook"], hint: "mushimasu — cooking in steam, keeping the food out of the water. Same root as むしあつい (u12), that muggy Japanese summer heat — the language treats humid air and a steamer as the same idea." },
        { id: "ja-u73l1-nimasu", type: "vocab", front: "にます", reading: "nimasu", meaning: "simmer", example: { jp: "じゃがいもをにます。", en: "I simmer the potatoes." }, drill: { jp: "なべでやさいをにます。", en: "I simmer the vegetables in the pot." }, accept: ["to simmer", "boil", "stew", "cook in liquid"], hint: "nimasu — simmering slowly in a seasoned liquid you then serve, as against ゆでます where the water is thrown away. にもの, a simmered dish, is the backbone of Japanese home cooking." },
        { id: "ja-u73l1-mazemasu", type: "vocab", front: "まぜます", reading: "mazemasu", meaning: "mix", example: { jp: "さとうをまぜます。", en: "I mix in the sugar." }, drill: { jp: "たまごとぎゅうにゅうをまぜます。", en: "I mix the egg and the milk." }, accept: ["to mix", "stir", "blend", "combine"], hint: "mazemasu — combining two things so they stop being separate. What you mix it WITH takes と. Its intransitive partner まざります is the mixture mixing itself, the same pattern as the whole of u69." },
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
        { id: "ja-u73l2-wakashimasu", type: "vocab", front: "わかします", reading: "wakashimasu", meaning: "boil water", example: { jp: "みずをわかします。", en: "I boil the water." }, drill: { jp: "あさにみずをわかします。", en: "I boil water in the morning." }, accept: ["to boil water", "heat water", "put the kettle on", "bring to the boil"], hint: "wakashimasu — boiling the LIQUID itself, not the food in it, so its object is water or tea. You make it boil; わきます in u69 is the water boiling on its own. Food boiled in water is ゆでます." },
        { id: "ja-u73l2-atatamemasu", type: "vocab", front: "あたためます", reading: "atatamemasu", meaning: "warm up", example: { jp: "ごはんをあたためます。", en: "I warm up the rice." }, drill: { jp: "スープをあたためます。", en: "I warm up the soup." }, accept: ["to warm up", "heat up", "reheat", "warm through"], hint: "atatamemasu — bringing something back to a comfortable warmth, usually leftovers in the microwave. Built on あたたかい from u12. Its opposite ひやします is the next card." },
        { id: "ja-u73l2-hiyashimasu", type: "vocab", front: "ひやします", reading: "hiyashimasu", meaning: "chill", example: { jp: "ビールをひやします。", en: "I chill the beer." }, drill: { jp: "のみものをれいぞうこでひやします。", en: "I chill the drinks in the fridge." }, accept: ["to chill", "cool", "cool down", "put on ice"], hint: "hiyashimasu — you chilling something, where ひえます in u69 is the thing getting cold by itself. Exactly the opposite of あたためます on the card before, so learn the two as a pair." },
        { id: "ja-u73l2-morimasu", type: "vocab", front: "もります", reading: "morimasu", meaning: "dish up", example: { jp: "ごはんをもります。", en: "I dish up the rice." }, drill: { jp: "さらにやさいをもります。", en: "I dish the vegetables onto the plate." }, accept: ["to serve", "dish up", "plate up", "heap onto a plate"], hint: "morimasu — piling food onto a dish to serve it, so the plate takes に. もりつけ, the noun, is plating — a real craft in Japanese cooking, where how the food sits on the さら matters." },
        { id: "ja-u73l2-ajimi", type: "vocab", front: "あじみ", reading: "ajimi", meaning: "tasting", example: { jp: "スープをあじみします。", en: "I taste the soup." }, drill: { jp: "あじみをかぞくにたのみます。", en: "I ask my family to taste it." }, accept: ["taste", "tasting", "a taste test", "trying a bit"], hint: "ajimi — あじ (flavour, u9) + み (look at): looking at the flavour, i.e. tasting to check. A noun used with します. It is the cook's check, not enjoying a meal." },
        { id: "ja-u73l2-shinsen", type: "vocab", front: "しんせん", reading: "shinsen", meaning: "fresh", example: { jp: "しんせんなさかなです。", en: "It's fresh fish." }, drill: { jp: "しんせんなやさいをかいます。", en: "I buy fresh vegetables." }, accept: ["fresh", "newly caught", "just-picked", "crisp and new"], hint: "shinsen — しん (new) + せん (fresh): food that has not sat around. な-adjective, so しんせんなさかな. The same しん as しんぶん (new writing) in u50." },
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
        { id: "ja-u73l3-teishoku", type: "vocab", front: "ていしょく", reading: "teishoku", meaning: "set meal", example: { jp: "ていしょくをたべます。", en: "I eat a set meal." }, drill: { jp: "ていしょくがおいしいです。", en: "The set meal is delicious." }, accept: ["set meal", "fixed meal", "a lunch set", "combination meal"], hint: "teishoku — てい (fixed) + しょく (meal): a plate that arrives as a set — main, rice, soup, pickles — for one price. The default cheap lunch across Japan, and ordering one means saying only this word." },
        { id: "ja-u73l3-oshibori", type: "vocab", front: "おしぼり", reading: "oshibori", meaning: "wet towel", example: { jp: "おしぼりをつかいます。", en: "I use the wet towel." }, drill: { jp: "おしぼりがテーブルにあります。", en: "There is a wet towel on the table." }, accept: ["wet towel", "hand towel", "damp hand towel", "refresher towel"], hint: "oshibori — from しぼる, to wring out: the wrung-out towel handed to you before a meal in Japan, hot in winter and cold in summer. It is for your hands, not your face." },
        { id: "ja-u73l3-kaikei", type: "vocab", front: "かいけい", reading: "kaikei", meaning: "bill", example: { jp: "かいけいをおねがいします。", en: "The check, please." }, drill: { jp: "かいけいをかぞくがはらいます。", en: "My family pays the bill." }, accept: ["bill", "check", "the account", "settling up"], hint: "kaikei — かい (meet) + けい (count): the reckoning. かいけいおねがいします is the phrase to ask for the bill. ⚠️ In Japan you usually carry it to the till rather than pay at the table." },
        { id: "ja-u73l3-nomihodai", type: "vocab", front: "のみほうだい", reading: "nomihōdai", meaning: "all-you-can-drink", example: { jp: "このみせはのみほうだいです。", en: "This place is all-you-can-drink." }, drill: { jp: "のみほうだいはたのしいです。", en: "All-you-can-drink is fun." }, accept: ["all-you-can-drink", "unlimited drinks", "free-flow drinks", "bottomless drinks"], hint: "nomihōdai — のみ (drinking) + ほうだい (as much as you like). Long ō: hō-dai. Swap the first half for たべ and you get たべほうだい, all-you-can-eat — the same ending builds both." },
        { id: "ja-u73l3-okawari", type: "vocab", front: "おかわり", reading: "okawari", meaning: "refill", example: { jp: "ごはんをおかわりします。", en: "I get a refill of rice." }, drill: { jp: "おかわりをおねがいします。", en: "Another helping, please." }, accept: ["refill", "second helping", "another serving", "seconds"], hint: "okawari — from かわる, to change (u69): a changed-over bowl. Said on its own, おかわり？ means 'want another?'. Rice and coffee refills are often free in Japan, which is why the word is so common." },
        { id: "ja-u73l3-gaishoku", type: "vocab", front: "がいしょく", reading: "gaishoku", meaning: "eating out", example: { jp: "きょうはがいしょくします。", en: "Today I'll eat out." }, drill: { jp: "がいしょくをどようびにします。", en: "We eat out on Saturday." }, accept: ["eating out", "dining out", "a meal out", "restaurant dining"], hint: "gaishoku — がい (outside) + しょく (eat): eating outside the home. Its opposite ないしょく barely gets used; the everyday contrast is がいしょく against じすい, cooking for yourself." },
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
        { id: "ja-u73l4-dezato", type: "vocab", front: "デザート", reading: "dezāto", meaning: "dessert", example: { jp: "デザートをたべます。", en: "I eat dessert." }, drill: { jp: "デザートがあまいです。", en: "The dessert is sweet." }, accept: ["dessert", "a sweet", "pudding", "the sweet course"], hint: "dezāto — long ā in the middle: de-zā-to. Note the ザ, a voiced z, where English says a soft 's'. The native word for something sweet is おかし (u9); デザート is the restaurant course." },
        { id: "ja-u73l4-suteki", type: "vocab", front: "ステーキ", reading: "sutēki", meaning: "steak", example: { jp: "ステーキがすきです。", en: "I like steak." }, drill: { jp: "ステーキをやきます。", en: "I grill the steak." }, accept: ["steak", "a beef steak", "grilled steak"], hint: "sutēki — four beats with a long ē: su-tē-ki. ⚠️ Do not mix it up with すてき, 'lovely', which is three beats and written in hiragana — ステーキですね and すてきですね are different compliments." },
        { id: "ja-u73l4-hanbagu", type: "vocab", front: "ハンバーグ", reading: "hanbāgu", meaning: "hamburg steak", example: { jp: "ハンバーグはおいしいです。", en: "The hamburg steak is delicious." }, drill: { jp: "ハンバーグをつくります。", en: "I make hamburg steak." }, accept: ["hamburg steak", "salisbury steak", "a meat patty", "beef patty"], hint: "hanbāgu — ⚠️ NOT a hamburger. A ハンバーグ is a patty served on a plate with rice, a Japanese home-cooking staple; the thing in a bun is ハンバーガー. One syllable apart, two different meals." },
        { id: "ja-u73l4-donburi", type: "vocab", front: "どんぶり", reading: "donburi", meaning: "rice bowl (a big bowl dish)", example: { jp: "どんぶりをちゅうもんします。", en: "I order a rice bowl." }, drill: { jp: "どんぶりはおおきいです。", en: "The rice bowl is big." }, accept: ["rice bowl", "donburi", "a bowl dish", "rice-bowl meal"], hint: "donburi — the deep bowl AND the dish served in it: rice with something on top. Shortened to どん in dish names, which is why ぎゅうどん (beef bowl) and かつどん end that way." },
        { id: "ja-u73l4-okazu", type: "vocab", front: "おかず", reading: "okazu", meaning: "side dish", example: { jp: "おかずをつくります。", en: "I make a side dish." }, drill: { jp: "おかずがさらにあります。", en: "There is a side dish on the plate." }, accept: ["side dish", "dish", "the savoury dishes", "what goes with the rice"], hint: "okazu — ⚠️ not 'side' as in optional. In a Japanese meal the rice is the centre and the おかず is everything eaten WITH it, including the main protein. A lunchbox is rice plus おかず." },
        { id: "ja-u73l4-shokuji", type: "vocab", front: "しょくじ", reading: "shokuji", meaning: "meal", example: { jp: "かぞくとしょくじします。", en: "I have a meal with my family." }, drill: { jp: "しょくじのじかんです。", en: "It's mealtime." }, accept: ["meal", "dining", "having a meal", "a sit-down meal"], hint: "shokuji — しょく (eat) + じ (matter): the occasion of eating, more formal than ごはん. The same しょく as ていしょく and がいしょく in lesson 3 — three cards built on one element." },
      ],
    },
  ],
};
