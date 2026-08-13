// Unit 108 — かんじ・しぜん (Nature and science kanji) — B1 / JLPT N3
// Strand A. Glyphs for the natural world and the everyday science words around it —
// heat and burning, land and water, and the things a kitchen is made of.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the band-standard shape.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT108 = {
  id: "ja-u108",
  lang: "ja",
  title: "かんじ・しぜん",
  order: 108,
  stage: "b1",
  lessons: [
    {
      id: "ja-u108l1",
      unit: 108,
      lesson: 1,
      title: "Science and change",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 科 (branch of study), 化 (to change into), 実 (real), 温 (warm), and the words 科学 and 文化.",
      items: [
        { id: "ja-u108l1-ka", type: "kanji", front: "科", reading: "ka", meaning: "branch of study", example: { jp: "科学の 本を 借りて、やすみの 日に 読みました。", en: "I borrowed a science book and read it on my day off." }, accept: ["department", "subject", "course"], hint: "科 = a field of study — 禾 (grain) + 斗 (measure): sorting knowledge into bins. 科学 = science, 教科書 = textbook." },
        { id: "ja-u108l1-ke", type: "kanji", front: "化", reading: "ka", meaning: "to change into", example: { jp: "その 国の 文化を 知ると、ことばの 意味も よく 分かります。", en: "Once you know a country's culture, the meaning of its words becomes clear too." }, accept: ["transformation", "-ise", "to become"], hint: "化 = turn into. 変化 = change, 文化 = culture — what a people has turned into." },
        { id: "ja-u108l1-jitsu", type: "kanji", front: "実", reading: "jitsu", meaning: "real", example: { jp: "その 話は 実は 少し ちがいましたが、みんな 信じて いました。", en: "That story was actually a bit different, but everyone believed it." }, accept: ["truth", "fruit", "actual"], hint: "実 = the real thing — also 'fruit', what a plant actually produces. 実は = actually, 実力 = real ability." },
        { id: "ja-u108l1-on", type: "kanji", front: "温", reading: "on", meaning: "warm", example: { jp: "今日の 気温は ひくいですが、風が ないので さむくないです。", en: "The temperature is low today, but there's no wind, so it isn't cold." }, accept: ["temperature", "mild", "to warm"], hint: "温 = warmth — 氵 (water) on the left. 気温 = air temperature, 温泉 = hot spring." },
        { id: "ja-u108l1-kagaku", type: "vocab", front: "科学", reading: "kagaku", meaning: "science", example: { jp: "科学の 本を 借りて、やすみの 日に 読みました。", en: "I borrowed a science book and read it on my day off." }, accept: ["the sciences"] },
        { id: "ja-u108l1-bunka", type: "vocab", front: "文化", reading: "bunka", meaning: "culture", example: { jp: "その 国の 文化を 知ると、ことばの 意味も よく 分かります。", en: "Once you know a country's culture, the meaning of its words becomes clear too." }, accept: ["civilisation", "the arts"], hint: "文 (writing) + 化 (become) — what a people has turned into. 文化祭 = a school culture festival." },
      ],
    },
    {
      id: "ja-u108l2",
      unit: 108,
      lesson: 2,
      title: "Heat and water",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 熱 (heat), 燃 (to burn), 湖 (lake), 島 (island), and the words 熱心 and 半島.",
      items: [
        { id: "ja-u108l2-netsu", type: "kanji", front: "熱", reading: "netsu", meaning: "heat", example: { jp: "熱が 出たので、今日は 一日 休みました。", en: "I had a fever, so I rested all day." }, accept: ["fever", "hot", "passion"], hint: "熱 = heat — the four dots at the bottom are fire. 熱が ある = to have a fever, 熱心 = enthusiastic." },
        { id: "ja-u108l2-nen", type: "kanji", front: "燃", reading: "nen", meaning: "to burn", example: { jp: "古い 紙は よく 燃えますから、火に 気を つけて ください。", en: "Old paper burns easily, so be careful with fire." }, accept: ["combustion", "to catch fire"], hint: "燃 = burn — 火 (fire) on the left this time. 燃える = to burn, 燃料 = fuel." },
        { id: "ja-u108l2-ko", type: "kanji", front: "湖", reading: "ko", meaning: "lake", example: { jp: "山の 上の 湖は 青くて、とても きれいでした。", en: "The lake up the mountain was blue and very beautiful." }, accept: ["a lake"], hint: "湖 = lake — 氵 (water) + 古 (old) + 月. Big still water, as against 海 (sea) and 川 (river)." },
        { id: "ja-u108l2-shima", type: "kanji", front: "島", reading: "shima", meaning: "island", example: { jp: "その 島には ふねで 行きますが、冬は 風が とても 強いです。", en: "You get to that island by boat, but the wind is very strong in winter." }, accept: ["isle"], hint: "島 = island — 鳥 (bird) shortened, sitting on 山 (mountain): a peak birds rest on out at sea." },
        { id: "ja-u108l2-nesshin", type: "vocab", front: "熱心", reading: "nesshin", meaning: "enthusiastic", example: { jp: "先生は 熱心に 教えて くれました。", en: "The teacher taught us with real enthusiasm." }, accept: ["eager", "keen", "devoted"], hint: "熱 (heat) + 心 (heart) — a hot heart. Nothing to do with temperature." },
        { id: "ja-u108l2-hanto", type: "vocab", front: "半島", reading: "hantō", meaning: "peninsula", example: { jp: "この 半島は 海に 出て いて、風が 強いです。", en: "This peninsula juts into the sea, so the wind is strong." }, accept: ["a peninsula"] },
      ],
    },
    {
      id: "ja-u108l3",
      unit: 108,
      lesson: 3,
      title: "Land and grain",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 陸 (land), 林 (woods), 畑 (field), 米 (rice), and the words 大陸 and 米国.",
      items: [
        { id: "ja-u108l3-riku", type: "kanji", front: "陸", reading: "riku", meaning: "land", example: { jp: "長い ふねの 旅の あと、やっと 陸が 見えました。", en: "After a long sea voyage, land finally came into view." }, accept: ["shore", "dry land", "continent"], hint: "陸 = dry land as opposed to sea. 大陸 = continent, 上陸 = coming ashore." },
        { id: "ja-u108l3-hayashi", type: "kanji", front: "林", reading: "hayashi", meaning: "woods", example: { jp: "家の うしろに 小さな 林が あって、鳥が たくさん います。", en: "There's a small wood behind the house, and lots of birds." }, accept: ["grove", "forest"], hint: "林 = two 木 (trees) — a wood. Three trees 森 is a full forest; the count is the picture." },
        { id: "ja-u108l3-hatake", type: "kanji", front: "畑", reading: "hatake", meaning: "field", example: { jp: "父は 畑で やさいを 作って、店に 売って います。", en: "My father grows vegetables in the field and sells them to shops." }, accept: ["cultivated field", "plot"], hint: "畑 = 火 (fire) + 田 (rice paddy) — a dry field, cleared by burning. 田 is wet, 畑 is dry." },
        { id: "ja-u108l3-kome", type: "kanji", front: "米", reading: "kome", meaning: "rice", example: { jp: "日本の 米は おいしいので、毎日 食べて います。", en: "Japanese rice is delicious, so I eat it every day." }, accept: ["uncooked rice", "grain of rice", "America"], hint: "米 = uncooked rice (ご飯 is the cooked bowl). It also stands for America — 米国." },
        { id: "ja-u108l3-tairiku", type: "vocab", front: "大陸", reading: "tairiku", meaning: "continent", example: { jp: "ふねで 大陸まで 三日 かかりました。", en: "It took three days to reach the continent by boat." }, accept: ["mainland", "landmass"] },
        { id: "ja-u108l3-beikoku", type: "vocab", front: "米国", reading: "beikoku", meaning: "the United States", example: { jp: "兄は 米国の 大学で 勉強して います。", en: "My older brother is studying at a university in the States." }, accept: ["America", "the US"], hint: "米 is rice, but in country names it writes the sound of America — 米国, 日米." },
      ],
    },
    {
      id: "ja-u108l4",
      unit: 108,
      lesson: 4,
      title: "In the kitchen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 卵 (egg), 綿 (cotton), 油 (oil), 粉 (powder), and the words 木綿 and 生卵.",
      items: [
        { id: "ja-u108l4-tamago", type: "kanji", front: "卵", reading: "tamago", meaning: "egg", example: { jp: "朝ごはんに 卵を 二つ 使って、りょうりを 作ります。", en: "I use two eggs at breakfast and make a dish." }, accept: ["eggs", "spawn"], hint: "卵 = egg — the two dots are the yolks inside. 卵を わる = to crack an egg." },
        { id: "ja-u108l4-men", type: "kanji", front: "綿", reading: "men", meaning: "cotton", example: { jp: "夏は 綿の シャツが 気持ち いいので、よく きて います。", en: "A cotton shirt feels good in summer, so I wear one often." }, accept: ["cotton cloth", "wadding"], hint: "綿 = cotton — 糸 (thread) on the left, the radical that marks thread, cloth and string words." },
        { id: "ja-u108l4-abura", type: "kanji", front: "油", reading: "abura", meaning: "oil", example: { jp: "この 料理には 油を 少しだけ 使いますから、体に いいです。", en: "This dish uses only a little oil, so it's good for you." }, accept: ["fat", "petroleum"], hint: "油 = oil — 氵 (water) + 由. 石油 = petroleum, しょう油 = soy sauce." },
        { id: "ja-u108l4-kona", type: "kanji", front: "粉", reading: "kona", meaning: "powder", example: { jp: "こむぎの 粉と 水を まぜて、パンを 作りました。", en: "I mixed wheat flour and water and made bread." }, accept: ["flour", "dust"], hint: "粉 = powder — 米 (rice) + 分 (divide): grain broken down small. 小麦粉 = wheat flour." },
        { id: "ja-u108l4-momen", type: "vocab", front: "木綿", reading: "momen", meaning: "cotton", example: { jp: "夏は 木綿の シャツが 気持ち いいです。", en: "A cotton shirt feels good in summer." }, accept: ["cotton cloth"] },
        { id: "ja-u108l4-namatamago", type: "vocab", front: "生卵", reading: "namatamago", meaning: "raw egg", example: { jp: "ごはんに 生卵を かけて 食べます。", en: "I crack a raw egg over the rice and eat it." }, accept: ["uncooked egg"] },
      ],
    },
  ],
};
