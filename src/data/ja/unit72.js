// Unit 72 — かんじ・しょくじ ("Kanji — food & cooking") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji, many hooking onto A1/A2 food vocab: 卵→たまご, みそ汁→みそしる, ご飯→ごはん,
// お弁当→べんとう, 野菜→やさい, 甘い→あまい, 辛い→からい, 薄い→うすい, 冷たい→つめたい…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT72 = {
  id: "ja-u72", lang: "ja", title: "かんじ・しょくじ", order: 72, stage: "b1",
  lessons: [
    {
      id: "ja-u72l1", unit: 72, lesson: 1, title: "Ingredients", cefr: "B1", dominantMode: "recall",
      canDo: "Read ingredient kanji: 米 麦 粉 塩 砂 卵.",
      items: [
        { id: "ja-u72l1-kome", type: "kanji", front: "米", reading: "kome", meaning: "rice (raw)", example: { jp: "日本の米はおいしいです。", en: "Japanese rice is delicious." }, accept: ["uncooked rice"], hint: "米 = uncooked rice. 米 (こめ). In 米国 (べいこく, USA). Cooked rice is ご飯." },
        { id: "ja-u72l1-mugi", type: "kanji", front: "麦", reading: "mugi", meaning: "wheat / barley", example: { jp: "麦のパンです。", en: "It's wheat bread." }, accept: ["grain"], hint: "麦 = wheat / barley. 麦 (むぎ). In 麦茶 (むぎちゃ, barley tea)." },
        { id: "ja-u72l1-kona", type: "kanji", front: "粉", reading: "kona", meaning: "powder / flour", example: { jp: "小麦粉をつかいます。", en: "I use flour." }, accept: ["dust"], hint: "粉 = powder / flour. 粉 (こな). In 小麦粉 (こむぎこ, flour). 米 (rice) radical." },
        { id: "ja-u72l1-shio", type: "kanji", front: "塩", reading: "shio", meaning: "salt", example: { jp: "スープに塩をいれます。", en: "I put salt in the soup." }, accept: ["salty"], hint: "塩 = salt. 塩 (しお). 土 (earth) radical." },
        { id: "ja-u72l1-suna", type: "kanji", front: "砂", reading: "suna", meaning: "sand", example: { jp: "砂糖をいれます。", en: "I add sugar." }, accept: ["grit"], hint: "砂 = sand. 砂 (すな). In 砂糖 (さとう, sugar), 砂漠 (さばく, desert). 石 (stone) radical." },
        { id: "ja-u72l1-tamago", type: "kanji", front: "卵", reading: "tamago", meaning: "egg", example: { jp: "卵をたべます。", en: "I eat an egg." }, accept: ["eggs", "spawn"], hint: "卵 = egg. 卵 (たまご) — the kanji for the word you know. The dots are the yolk." },
      ],
    },
    {
      id: "ja-u72l2", unit: 72, lesson: 2, title: "Cooking", cefr: "B1", dominantMode: "recall",
      canDo: "Read cooking kanji: 焼 煮 蒸 冷 熱 汁.",
      items: [
        { id: "ja-u72l2-yaku", type: "kanji", front: "焼", reading: "yaku", meaning: "grill / burn", example: { jp: "さかなを焼きます。", en: "I grill fish." }, accept: ["bake", "roast"], hint: "焼 = grill / burn. 焼く (やく). 火 (fire) radical. In 焼肉 (やきにく, grilled meat)." },
        { id: "ja-u72l2-niru", type: "kanji", front: "煮", reading: "niru", meaning: "boil / simmer", example: { jp: "やさいを煮ます。", en: "I simmer vegetables." }, accept: ["stew"], hint: "煮 = boil / simmer. 煮る (にる). 灬 (fire) at the bottom." },
        { id: "ja-u72l2-musu", type: "kanji", front: "蒸", reading: "musu", meaning: "steam", example: { jp: "パンを蒸します。", en: "I steam the bread." }, accept: ["sultry"], hint: "蒸 = steam. 蒸す (むす). In 蒸気 (じょうき, steam). ⺾ (grass) on top." },
        { id: "ja-u72l2-hiyasu", type: "kanji", front: "冷", reading: "hiyasu", meaning: "cool / chill", example: { jp: "みずを冷やします。", en: "I chill the water." }, accept: ["cold", "get cold"], hint: "冷 = cool / chill. 冷たい (つめたい) = cold; 冷やす (ひやす) = to chill. 冫 (ice) radical." },
        { id: "ja-u72l2-atsui", type: "kanji", front: "熱", reading: "atsui", meaning: "hot / heat / fever", example: { jp: "おちゃが熱いです。", en: "The tea is hot." }, accept: ["heat", "passion"], hint: "熱 = hot / heat / fever. 熱い (あつい) = hot to touch; 熱 (ねつ) = fever. 灬 (fire) at the bottom." },
        { id: "ja-u72l2-shiru", type: "kanji", front: "汁", reading: "shiru", meaning: "soup / juice", example: { jp: "みそ汁をのみます。", en: "I drink miso soup." }, accept: ["broth"], hint: "汁 = soup / juice. In みそ汁 (みそしる, miso soup), 果汁 (かじゅう, juice). 氵 (water) radical." },
      ],
    },
    {
      id: "ja-u72l3", unit: 72, lesson: 3, title: "Flavor", cefr: "B1", dominantMode: "recall",
      canDo: "Read flavor kanji: 甘 辛 酸 香 濃 薄.",
      items: [
        { id: "ja-u72l3-amai", type: "kanji", front: "甘", reading: "amai", meaning: "sweet", example: { jp: "このケーキは甘いです。", en: "This cake is sweet." }, accept: ["sugary", "naive"], hint: "甘 = sweet. 甘い (あまい) = sweet — the kanji for the word you know." },
        { id: "ja-u72l3-karai", type: "kanji", front: "辛", reading: "karai", meaning: "spicy / hot", example: { jp: "カレーが辛いです。", en: "The curry is spicy." }, accept: ["harsh", "bitter (hardship)"], hint: "辛 = spicy / harsh. 辛い (からい) = spicy. Also 辛い (つらい) = painful." },
        { id: "ja-u72l3-su", type: "kanji", front: "酸", reading: "su", meaning: "acid / sour", example: { jp: "レモンは酸っぱいです。", en: "Lemons are sour." }, accept: ["tart"], hint: "酸 = acid / sour. 酸っぱい (すっぱい) = sour. In 酸素 (さんそ, oxygen). 酉 (sake jar) radical." },
        { id: "ja-u72l3-kaori", type: "kanji", front: "香", reading: "kaori", meaning: "fragrance", example: { jp: "いい香りです。", en: "It's a nice scent." }, accept: ["aroma", "scent"], hint: "香 = fragrance. 香り (かおり) = scent. In 香水 (こうすい, perfume)." },
        { id: "ja-u72l3-koi", type: "kanji", front: "濃", reading: "koi", meaning: "thick / dark", example: { jp: "濃いコーヒーをのみます。", en: "I drink strong coffee." }, accept: ["strong", "dense"], hint: "濃 = thick / dark. 濃い (こい) = strong/dark. ⇄ 薄い. 氵 (water) radical." },
        { id: "ja-u72l3-usui", type: "kanji", front: "薄", reading: "usui", meaning: "thin / weak", example: { jp: "薄いほんです。", en: "It's a thin book." }, accept: ["light", "faint"], hint: "薄 = thin / weak. 薄い (うすい) = thin — the word you know. ⇄ 濃い. ⺾ (grass) on top." },
      ],
    },
    {
      id: "ja-u72l4", unit: 72, lesson: 4, title: "Utensils & meals", cefr: "B1", dominantMode: "recall",
      canDo: "Read meal kanji: 器 飯 弁 菜 材 缶.",
      items: [
        { id: "ja-u72l4-utsuwa", type: "kanji", front: "器", reading: "utsuwa", meaning: "vessel / utensil", example: { jp: "きれいな器です。", en: "It's a beautiful bowl." }, accept: ["container", "instrument"], hint: "器 = vessel / utensil. 器 (うつわ) = a dish/bowl. In 食器 (しょっき, tableware), 楽器 (instrument)." },
        { id: "ja-u72l4-han", type: "kanji", front: "飯", reading: "han", meaning: "cooked rice / meal", example: { jp: "ご飯をたべます。", en: "I eat a meal." }, accept: ["food"], hint: "飯 = cooked rice / meal. In ご飯 (ごはん, rice/meal), 朝飯 (breakfast). 飠 (food) radical." },
        { id: "ja-u72l4-ben", type: "kanji", front: "弁", reading: "ben", meaning: "speech / bento", example: { jp: "お弁当をつくります。", en: "I make a boxed lunch." }, accept: ["dialect", "valve"], hint: "弁 = speech / dialect / bento. In お弁当 (べんとう, boxed lunch), 関西弁 (Kansai dialect)." },
        { id: "ja-u72l4-na", type: "kanji", front: "菜", reading: "na", meaning: "greens / vegetable", example: { jp: "野菜サラダをたべます。", en: "I eat a vegetable salad." }, accept: ["side dish"], hint: "菜 = greens / vegetable. In 野菜 (やさい, vegetables). ⺾ (grass) on top." },
        { id: "ja-u72l4-zai", type: "kanji", front: "材", reading: "zai", meaning: "material / timber", example: { jp: "料理の材料です。", en: "They're the cooking ingredients." }, accept: ["stuff", "talent"], hint: "材 = material / timber. In 材料 (ざいりょう, ingredients), 木材 (もくざい, lumber). 木 (tree) radical." },
        { id: "ja-u72l4-kan", type: "kanji", front: "缶", reading: "kan", meaning: "can / tin", example: { jp: "缶ジュースをのみます。", en: "I drink a canned juice." }, accept: ["canister"], hint: "缶 = can / tin. In 缶詰 (かんづめ, canned food), 空き缶 (あきかん, empty can)." },
      ],
    },
  ],
};
