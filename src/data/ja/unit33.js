// Unit 33 — かんじ・しぜん ("Nature & food kanji") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// N4 nature/food kanji, many hooked to known words (寒い→さむい, 味→あじ, 緑→みどり,
// 流れる→ながれます). type:"kanji" — recognition by meaning, trace to produce.
export const UNIT33 = {
  id: "ja-u33", lang: "ja", title: "かんじ・しぜん", order: 33, stage: "a2",
  lessons: [
    {
      id: "ja-u33l1", unit: 33, lesson: 1, title: "Weather & water", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 温 寒 湖 波 湯 氷.",
      items: [
        { id: "ja-u33l1-on", type: "kanji", front: "温", reading: "on", meaning: "warm", example: { jp: "おんせんにいきます。", en: "I go to a hot spring." }, accept: ["warmth", "temperature"], hint: "温 = warm. 氵 (water) radical. 温泉 (おんせん, hot spring), 温かい (あたたかい, warm)." },
        { id: "ja-u33l1-samui", type: "kanji", front: "寒", reading: "samui", meaning: "cold", example: { jp: "ふゆは寒いです。", en: "Winter is cold." }, accept: ["chilly"], hint: "寒 = cold (weather). 寒い — you know it as さむい." },
        { id: "ja-u33l1-ko", type: "kanji", front: "湖", reading: "ko", meaning: "lake", example: { jp: "大きい湖です。", en: "It's a big lake." }, accept: ["a lake"], hint: "湖 = lake. 氵 (water) + 古 + 月. Read みずうみ on its own." },
        { id: "ja-u33l1-nami", type: "kanji", front: "波", reading: "nami", meaning: "wave", example: { jp: "うみの波です。", en: "It's a wave in the sea." }, accept: ["waves"], hint: "波 = wave. 氵 (water) radical. 電波 (radio waves)." },
        { id: "ja-u33l1-yu", type: "kanji", front: "湯", reading: "yu", meaning: "hot water", example: { jp: "お湯をのみます。", en: "I drink hot water." }, accept: ["boiling water"], hint: "湯 = hot water. 氵 (water) radical. お湯, 銭湯 (public bath)." },
        { id: "ja-u33l1-kori", type: "kanji", front: "氷", reading: "kōri", meaning: "ice", example: { jp: "氷はつめたいです。", en: "Ice is cold." }, accept: ["frozen"], hint: "氷 = ice. 水 (water) with a mark — frozen water." },
      ],
    },
    {
      id: "ja-u33l2", unit: 33, lesson: 2, title: "Farm & food", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 農 畑 豆 皿 酒 味.",
      items: [
        { id: "ja-u33l2-no", type: "kanji", front: "農", reading: "nō", meaning: "farming", example: { jp: "のうぎょうをします。", en: "I do agriculture." }, accept: ["agriculture"], hint: "農 = farming / agriculture. 農業 (のうぎょう, agriculture), 農家 (farmer)." },
        { id: "ja-u33l2-hatake", type: "kanji", front: "畑", reading: "hatake", meaning: "field", example: { jp: "畑でやさいをそだてます。", en: "I grow vegetables in the field." }, accept: ["farm plot"], hint: "畑 = (dry) field. 火 + 田 — a made-in-Japan kanji." },
        { id: "ja-u33l2-mame", type: "kanji", front: "豆", reading: "mame", meaning: "bean", example: { jp: "豆をたべます。", en: "I eat beans." }, accept: ["beans", "peas"], hint: "豆 = bean. A pictograph of a bean pot. 大豆 (soybean), 納豆 (nattō)." },
        { id: "ja-u33l2-sara", type: "kanji", front: "皿", reading: "sara", meaning: "plate", example: { jp: "皿をあらいます。", en: "I wash the plates." }, accept: ["dish"], hint: "皿 = plate / dish. A pictograph of a dish. お皿." },
        { id: "ja-u33l2-sake", type: "kanji", front: "酒", reading: "sake", meaning: "alcohol", example: { jp: "お酒をのみます。", en: "I drink alcohol." }, accept: ["sake", "liquor"], hint: "酒 = alcohol / sake. 氵 (water) + 酉. お酒." },
        { id: "ja-u33l2-aji", type: "kanji", front: "味", reading: "aji", meaning: "taste", example: { jp: "あまい味です。", en: "It's a sweet taste." }, accept: ["flavor"], hint: "味 = taste / flavor. 口 (mouth) radical. You know it as あじ. 意味 (meaning)." },
      ],
    },
    {
      id: "ja-u33l3", unit: 33, lesson: 3, title: "Plants & animals", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 根 葉 緑 羊 洋 球.",
      items: [
        { id: "ja-u33l3-ne", type: "kanji", front: "根", reading: "ne", meaning: "root", example: { jp: "木の根です。", en: "It's the root of a tree." }, accept: ["roots"], hint: "根 = root. 木 (tree) radical. 大根 (だいこん, radish)." },
        { id: "ja-u33l3-ha", type: "kanji", front: "葉", reading: "ha", meaning: "leaf", example: { jp: "木の葉です。", en: "It's a tree leaf." }, accept: ["leaves"], hint: "葉 = leaf. 艹 (grass) on top. 紅葉 (autumn leaves), 言葉 (words)." },
        { id: "ja-u33l3-midori", type: "kanji", front: "緑", reading: "midori", meaning: "green", example: { jp: "緑がすきです。", en: "I like green." }, accept: ["the color green"], hint: "緑 = green. 糸 (thread) radical. You know みどり. 緑茶 (green tea)." },
        { id: "ja-u33l3-hitsuji", type: "kanji", front: "羊", reading: "hitsuji", meaning: "sheep", example: { jp: "羊がいます。", en: "There are sheep." }, accept: ["lamb"], hint: "羊 = sheep. A pictograph — horns on top. 羊毛 (wool)." },
        { id: "ja-u33l3-yo", type: "kanji", front: "洋", reading: "yō", meaning: "Western / ocean", example: { jp: "洋服をかいます。", en: "I buy Western clothes." }, accept: ["ocean", "foreign"], hint: "洋 = ocean / Western. 氵 + 羊. 太平洋 (Pacific), 洋服 (Western clothes), 東洋・西洋." },
        { id: "ja-u33l3-kyu", type: "kanji", front: "球", reading: "kyū", meaning: "ball", example: { jp: "やきゅうをします。", en: "I play baseball." }, accept: ["sphere", "globe"], hint: "球 = ball / sphere. 王 (jewel) radical. 野球 (baseball), 地球 (Earth), 電球 (bulb)." },
      ],
    },
    {
      id: "ja-u33l4", unit: 33, lesson: 4, title: "Materials & motion", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 炭 油 荷 化 流 落.",
      items: [
        { id: "ja-u33l4-sumi", type: "kanji", front: "炭", reading: "sumi", meaning: "charcoal", example: { jp: "炭はくろいです。", en: "Charcoal is black." }, accept: ["coal"], hint: "炭 = charcoal / coal. 山 + 灰. 石炭 (coal), 炭素 (carbon)." },
        { id: "ja-u33l4-abura", type: "kanji", front: "油", reading: "abura", meaning: "oil", example: { jp: "油をつかいます。", en: "I use oil." }, accept: ["fat", "grease"], hint: "油 = oil. 氵 (water) + 由. 石油 (petroleum), 醤油 (soy sauce)." },
        { id: "ja-u33l4-ni", type: "kanji", front: "荷", reading: "ni", meaning: "luggage", example: { jp: "荷物がおもいです。", en: "The luggage is heavy." }, accept: ["load", "cargo"], hint: "荷 = load / luggage. 艹 + 何. 荷物 (にもつ, luggage), 出荷 (shipping)." },
        { id: "ja-u33l4-ka", type: "kanji", front: "化", reading: "ka", meaning: "change", example: { jp: "ぶんかをならいます。", en: "I learn about culture." }, accept: ["transform"], hint: "化 = change / transform. 亻 + 匕. 文化 (culture), 化学 (chemistry)." },
        { id: "ja-u33l4-nagareru", type: "kanji", front: "流", reading: "nagareru", meaning: "flow", example: { jp: "かわが流れます。", en: "The river flows." }, accept: ["stream", "run (water)"], hint: "流 = flow. 氵 (water) radical. 流れます — you know it as ながれます." },
        { id: "ja-u33l4-ochiru", type: "kanji", front: "落", reading: "ochiru", meaning: "fall", example: { jp: "ものが落ちます。", en: "Something falls." }, accept: ["drop"], hint: "落 = fall / drop. 艹 + 洛. 落ちます = fall, 落とします = drop." },
      ],
    },
  ],
};
