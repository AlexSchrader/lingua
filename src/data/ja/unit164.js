// Unit 164 — ごい・N3・46 ("N3 vocab 46") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (kaku, kakeru, kari, kikan, kankō) disambiguated via hints.
export const UNIT164 = {
  id: "ja-u164", lang: "ja", title: "ごい・N3・46", order: 164, stage: "b1",
  lessons: [
    {
      id: "ja-u164l1", unit: 164, lesson: 1, title: "N3 vocab 46·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 遅れ (delay), 教え (teachings), 驚き (surprise), 織る (to weave), 欠く (to lack), 核 (nucleus).",
      items: [
        { id: "ja-u164l1-okure", type: "vocab", front: "遅れ", reading: "okure", meaning: "delay", example: { jp: "でんしゃの遅れでちこくしました。", en: "I was late because of the train delay." }, accept: ["lag"] },
        { id: "ja-u164l1-oshie", type: "vocab", front: "教え", reading: "oshie", meaning: "teachings", example: { jp: "せんせいの教えをまもります。", en: "I follow the teacher's teachings." }, accept: ["doctrine", "lesson"] },
        { id: "ja-u164l1-odoroki", type: "vocab", front: "驚き", reading: "odoroki", meaning: "surprise", example: { jp: "それはおおきな驚きでした。", en: "That was a big surprise." }, accept: ["astonishment", "wonder"] },
        { id: "ja-u164l1-oru", type: "vocab", front: "織る", reading: "oru", meaning: "to weave", example: { jp: "ぬのを織ります。", en: "I weave cloth." }, accept: ["to make cloth"] },
        { id: "ja-u164l1-kaku2", type: "vocab", front: "欠く", reading: "kaku", meaning: "to lack", example: { jp: "このりょうりはあじを欠いています。", en: "This dish lacks flavor." }, accept: ["to crack", "to be missing"], hint: "欠く (かく) = to lack / be missing something. 核 = a nucleus." },
        { id: "ja-u164l1-kaku3", type: "vocab", front: "核", reading: "kaku", meaning: "nucleus", example: { jp: "これがもんだいの核です。", en: "This is the core of the problem." }, accept: ["kernel", "core"], hint: "核 (かく) = a nucleus / core (also \"nuclear\"). 欠く = to lack." },
      ],
    },
    {
      id: "ja-u164l2", unit: 164, lesson: 2, title: "N3 vocab 46·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 学歴 (education), 駆ける (to run), 賭ける (to bet), 課題 (task), 片付け (tidying up), 加味 (seasoning).",
      items: [
        { id: "ja-u164l2-gakureki", type: "vocab", front: "学歴", reading: "gakureki", meaning: "education", example: { jp: "かれは学歴がたかいです。", en: "He has a high level of education." }, accept: ["academic background", "educational background"] },
        { id: "ja-u164l2-kakeru2", type: "vocab", front: "駆ける", reading: "kakeru", meaning: "to run", example: { jp: "うまが駆けています。", en: "The horse is running." }, accept: ["to gallop", "to dash"], hint: "駆ける (かける) = to run / gallop. 賭ける = to bet." },
        { id: "ja-u164l2-kakeru3", type: "vocab", front: "賭ける", reading: "kakeru", meaning: "to bet", example: { jp: "おかねを賭けてはいけません。", en: "You must not gamble money." }, accept: ["to gamble", "to risk"], hint: "賭ける (かける) = to bet / gamble. 駆ける = to run." },
        { id: "ja-u164l2-kadai", type: "vocab", front: "課題", reading: "kadai", meaning: "task", example: { jp: "これはむずかしい課題です。", en: "This is a difficult task." }, accept: ["subject", "theme", "assignment"] },
        { id: "ja-u164l2-katazuke", type: "vocab", front: "片付け", reading: "katazuke", meaning: "tidying up", example: { jp: "へやの片付けをします。", en: "I tidy up the room." }, accept: ["cleanup", "clearing away"] },
        { id: "ja-u164l2-kami", type: "vocab", front: "加味", reading: "kami", meaning: "seasoning", example: { jp: "りょうりにスパイスを加味します。", en: "I add spices to the dish for flavor." }, accept: ["flavoring", "adding"], hint: "加味する = to add (flavor), or to take something into account." },
      ],
    },
    {
      id: "ja-u164l3", unit: 164, lesson: 3, title: "N3 vocab 46·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 借り (debt), 狩り (hunting), ～観 (view), 癌 (cancer), 刊行 (publication), 慣行 (custom).",
      items: [
        { id: "ja-u164l3-kari", type: "vocab", front: "借り", reading: "kari", meaning: "debt", example: { jp: "ともだちに借りがあります。", en: "I owe my friend a debt." }, accept: ["borrowing", "loan"], hint: "借り (かり) = a debt / what you owe. 狩り = hunting." },
        { id: "ja-u164l3-kari2", type: "vocab", front: "狩り", reading: "kari", meaning: "hunting", example: { jp: "やまで狩りをします。", en: "I go hunting in the mountains." }, accept: ["hunt"], hint: "狩り (かり) = hunting (also きのこ狩り = mushroom picking). 借り = a debt." },
        { id: "ja-u164l3-kan3", type: "vocab", front: "～観", reading: "kan", meaning: "view", example: { jp: "かれの世界観はおもしろいです。", en: "His worldview is interesting." }, accept: ["outlook", "perspective"], hint: "～観 = a view / outlook, as a suffix (世界観 worldview, 人生観 view of life)." },
        { id: "ja-u164l3-gan", type: "vocab", front: "癌", reading: "gan", meaning: "cancer", example: { jp: "そふは癌になりました。", en: "My grandfather got cancer." }, accept: ["tumor"] },
        { id: "ja-u164l3-kanko2", type: "vocab", front: "刊行", reading: "kankō", meaning: "publication", example: { jp: "あたらしいほんを刊行します。", en: "We will publish a new book." }, accept: ["issue", "publishing"], hint: "刊行 (かんこう) = publication (of a book). 慣行 = a custom." },
        { id: "ja-u164l3-kanko3", type: "vocab", front: "慣行", reading: "kankō", meaning: "custom", example: { jp: "これはむかしからの慣行です。", en: "This is a custom from long ago." }, accept: ["customary practice", "habit"], hint: "慣行 (かんこう) = customary practice. 刊行 = publication." },
      ],
    },
    {
      id: "ja-u164l4", unit: 164, lesson: 4, title: "N3 vocab 46·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 歓声 (cheer), 官僚 (bureaucrat), 器官 (organ), 季刊 (quarterly), 起源 (origin), 機構 (mechanism).",
      items: [
        { id: "ja-u164l4-kansei2", type: "vocab", front: "歓声", reading: "kansei", meaning: "cheer", example: { jp: "かいじょうから歓声がきこえました。", en: "Cheers could be heard from the venue." }, accept: ["shout of joy", "cheering"] },
        { id: "ja-u164l4-kanryo2", type: "vocab", front: "官僚", reading: "kanryō", meaning: "bureaucrat", example: { jp: "かれは官僚になりました。", en: "He became a bureaucrat." }, accept: ["bureaucracy", "official"] },
        { id: "ja-u164l4-kikan3", type: "vocab", front: "器官", reading: "kikan", meaning: "organ", example: { jp: "しんぞうはたいせつな器官です。", en: "The heart is an important organ." }, accept: ["bodily organ"], hint: "器官 (きかん) = a bodily organ (heart, lungs). 季刊 = quarterly." },
        { id: "ja-u164l4-kikan4", type: "vocab", front: "季刊", reading: "kikan", meaning: "quarterly", example: { jp: "このざっしは季刊です。", en: "This magazine comes out quarterly." }, accept: ["quarterly magazine"], hint: "季刊 (きかん) = published four times a year. 器官 = a bodily organ." },
        { id: "ja-u164l4-kigen3", type: "vocab", front: "起源", reading: "kigen", meaning: "origin", example: { jp: "ことばの起源をしらべます。", en: "I research the origin of the word." }, accept: ["beginning", "rise"] },
        { id: "ja-u164l4-kiko2", type: "vocab", front: "機構", reading: "kikō", meaning: "mechanism", example: { jp: "この機構はふくざつです。", en: "This mechanism is complex." }, accept: ["organization", "structure"] },
      ],
    },
  ],
};
