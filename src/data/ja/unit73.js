// Unit 73 — かんじ・いえ ("Kanji — home & living") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji, many hooking onto known vocab: 窓→まど, 洗う→あらいます, 片づける→かたづけます,
// 閉める→しめます, 傘→かさ, 眼鏡→めがね, 手袋→てぶくろ, 財布→さいふ, かぎを掛ける→かぎ…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT73 = {
  id: "ja-u73", lang: "ja", title: "かんじ・いえ", order: 73, stage: "b1",
  lessons: [
    {
      id: "ja-u73l1", unit: 73, lesson: 1, title: "The house", cefr: "B1", dominantMode: "recall",
      canDo: "Read house kanji: 宅 壁 床 窓 畳 棚.",
      items: [
        { id: "ja-u73l1-taku", type: "kanji", front: "宅", reading: "taku", meaning: "residence", example: { jp: "自宅ではたらきます。", en: "I work at home." }, accept: ["home", "house"], hint: "宅 = residence. In 自宅 (じたく, one's home), お宅 (おたく, your home). 宀 (roof) radical." },
        { id: "ja-u73l1-kabe", type: "kanji", front: "壁", reading: "kabe", meaning: "wall", example: { jp: "壁が白いです。", en: "The wall is white." }, accept: ["barrier"], hint: "壁 = wall. 壁 (かべ). 土 (earth) at the bottom." },
        { id: "ja-u73l1-yuka", type: "kanji", front: "床", reading: "yuka", meaning: "floor", example: { jp: "床をそうじします。", en: "I clean the floor." }, accept: ["bed (sickbed)"], hint: "床 = floor. 床 (ゆか). Also 床屋 (とこや, barber)." },
        { id: "ja-u73l1-mado", type: "kanji", front: "窓", reading: "mado", meaning: "window", example: { jp: "窓をあけます。", en: "I open the window." }, accept: ["windows"], hint: "窓 = window. 窓 (まど) — the word you know. 穴 (hole) on top." },
        { id: "ja-u73l1-tatami", type: "kanji", front: "畳", reading: "tatami", meaning: "tatami mat", example: { jp: "畳のへやです。", en: "It's a tatami room." }, accept: ["fold up"], hint: "畳 = tatami mat. 畳 (たたみ). Also the counter for tatami mats / rooms." },
        { id: "ja-u73l1-tana", type: "kanji", front: "棚", reading: "tana", meaning: "shelf", example: { jp: "本を棚におきます。", en: "I put the book on the shelf." }, accept: ["rack"], hint: "棚 = shelf. 棚 (たな). In 本棚 (ほんだな, bookshelf). 木 (wood) radical." },
      ],
    },
    {
      id: "ja-u73l2", unit: 73, lesson: 2, title: "Housework", cefr: "B1", dominantMode: "recall",
      canDo: "Read housework kanji: 掃 除 洗 濯 片 付.",
      items: [
        { id: "ja-u73l2-so", type: "kanji", front: "掃", reading: "so", meaning: "sweep", example: { jp: "へやを掃除します。", en: "I clean the room." }, accept: ["clean"], hint: "掃 = sweep. In 掃除 (そうじ, cleaning). 掃く (はく) = to sweep. 扌 (hand) radical." },
        { id: "ja-u73l2-jo", type: "kanji", front: "除", reading: "jo", meaning: "remove / exclude", example: { jp: "掃除がすきです。", en: "I like cleaning." }, accept: ["get rid of"], hint: "除 = remove / exclude. In 掃除 (そうじ, cleaning). 除く (のぞく) = to remove." },
        { id: "ja-u73l2-arau", type: "kanji", front: "洗", reading: "arau", meaning: "wash", example: { jp: "手を洗います。", en: "I wash my hands." }, accept: ["rinse"], hint: "洗 = wash. 洗う (あらう) = to wash. In 洗濯 (せんたく, laundry). 氵 (water) radical." },
        { id: "ja-u73l2-taku", type: "kanji", front: "濯", reading: "taku", meaning: "rinse / launder", example: { jp: "洗濯をします。", en: "I do the laundry." }, accept: ["wash"], hint: "濯 = rinse / launder. In 洗濯 (せんたく, laundry). 氵 (water) radical." },
        { id: "ja-u73l2-kata", type: "kanji", front: "片", reading: "kata", meaning: "one side / piece", example: { jp: "へやを片づけます。", en: "I tidy up the room." }, accept: ["fragment"], hint: "片 = one side / piece. In 片づける (かたづける, tidy up), 片道 (かたみち, one way)." },
        { id: "ja-u73l2-tsukeru", type: "kanji", front: "付", reading: "tsukeru", meaning: "attach", example: { jp: "なまえを付けます。", en: "I attach my name." }, accept: ["add", "apply"], hint: "付 = attach. 付ける (つける) = to attach. In 受付 (うけつけ, reception), 付近 (nearby)." },
      ],
    },
    {
      id: "ja-u73l3", unit: 73, lesson: 3, title: "Open, close, push, pull", cefr: "B1", dominantMode: "recall",
      canDo: "Read action kanji: 押 引 閉 締 抜 掛.",
      items: [
        { id: "ja-u73l3-osu", type: "kanji", front: "押", reading: "osu", meaning: "push", example: { jp: "ボタンを押します。", en: "I press the button." }, accept: ["press"], hint: "押 = push. 押す (おす). ⇄ 引く. 扌 (hand) radical." },
        { id: "ja-u73l3-hiku", type: "kanji", front: "引", reading: "hiku", meaning: "pull", example: { jp: "ドアを引きます。", en: "I pull the door." }, accept: ["draw", "subtract"], hint: "引 = pull. 引く (ひく). ⇄ 押す. In 引っ越し (ひっこし, moving house)." },
        { id: "ja-u73l3-shimeru", type: "kanji", front: "閉", reading: "shimeru", meaning: "close / shut", example: { jp: "窓を閉めます。", en: "I close the window." }, accept: ["shut"], hint: "閉 = close / shut. 閉める (しめる). ⇄ 開ける. 門 (gate) radical." },
        { id: "ja-u73l3-shimeru2", type: "kanji", front: "締", reading: "shimeru", meaning: "tighten / fasten", example: { jp: "ネクタイを締めます。", en: "I fasten my tie." }, accept: ["tie", "conclude"], hint: "締 = tighten / fasten. 締める (しめる). In 締め切り (しめきり, deadline). 糸 (thread) radical." },
        { id: "ja-u73l3-nuku", type: "kanji", front: "抜", reading: "nuku", meaning: "pull out / extract", example: { jp: "はを抜きます。", en: "I pull out a tooth." }, accept: ["remove", "omit"], hint: "抜 = pull out / extract. 抜く (ぬく). 扌 (hand) radical." },
        { id: "ja-u73l3-kakeru", type: "kanji", front: "掛", reading: "kakeru", meaning: "hang / multiply", example: { jp: "かぎを掛けます。", en: "I lock it (hang the lock)." }, accept: ["hang", "spend"], hint: "掛 = hang / apply. 掛ける (かける) = to hang. 扌 (hand) radical." },
      ],
    },
    {
      id: "ja-u73l4", unit: 73, lesson: 4, title: "Everyday objects", cefr: "B1", dominantMode: "recall",
      canDo: "Read object kanji: 布 袋 傘 鏡 針 綿.",
      items: [
        { id: "ja-u73l4-nuno", type: "kanji", front: "布", reading: "nuno", meaning: "cloth", example: { jp: "布でつくります。", en: "I make it from cloth." }, accept: ["fabric"], hint: "布 = cloth. 布 (ぬの). In 財布 (さいふ, wallet), 毛布 (もうふ, blanket)." },
        { id: "ja-u73l4-fukuro", type: "kanji", front: "袋", reading: "fukuro", meaning: "bag", example: { jp: "袋にいれます。", en: "I put it in a bag." }, accept: ["sack", "pouch"], hint: "袋 = bag. 袋 (ふくろ). In 手袋 (てぶくろ, gloves), レジ袋 (plastic bag)." },
        { id: "ja-u73l4-kasa", type: "kanji", front: "傘", reading: "kasa", meaning: "umbrella", example: { jp: "あめの日は傘をさします。", en: "On rainy days I use an umbrella." }, accept: ["parasol"], hint: "傘 = umbrella. 傘 (かさ) — the word you know. The shape is an umbrella." },
        { id: "ja-u73l4-kagami", type: "kanji", front: "鏡", reading: "kagami", meaning: "mirror", example: { jp: "鏡を見ます。", en: "I look in the mirror." }, accept: ["looking glass"], hint: "鏡 = mirror. 鏡 (かがみ). In 眼鏡 (めがね, glasses). 金 (metal) radical." },
        { id: "ja-u73l4-hari", type: "kanji", front: "針", reading: "hari", meaning: "needle", example: { jp: "針と糸をつかいます。", en: "I use a needle and thread." }, accept: ["pin", "hand (of a clock)"], hint: "針 = needle. 針 (はり). In 針金 (はりがね, wire), 時計の針 (clock hands). 金 (metal) radical." },
        { id: "ja-u73l4-wata", type: "kanji", front: "綿", reading: "wata", meaning: "cotton", example: { jp: "綿のシャツをきます。", en: "I wear a cotton shirt." }, accept: ["padding"], hint: "綿 = cotton. 綿 (わた). In 木綿 (もめん, cotton cloth). 糸 (thread) radical." },
      ],
    },
  ],
};
