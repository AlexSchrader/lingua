// Unit 74 — かんじ・しぜん ("Kanji — weather, landscape, animals & plants") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji, many hooking onto known vocab: 晴れ→はれ, 曇り→くもり, 雷→かみなり, 森→もり,
// 温泉→おんせん, 犬→いぬ, 猫→ねこ, 鳥→とり, 魚→さかな, 虫→むし, 馬→うま, 花→はな…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT74 = {
  id: "ja-u74", lang: "ja", title: "かんじ・しぜん2", order: 74, stage: "b1",
  lessons: [
    {
      id: "ja-u74l1", unit: 74, lesson: 1, title: "Weather", cefr: "B1", dominantMode: "recall",
      canDo: "Read weather kanji: 晴 曇 湿 嵐 雷 霧.",
      items: [
        { id: "ja-u74l1-hareru", type: "kanji", front: "晴", reading: "hareru", meaning: "clear up", example: { jp: "そらが晴れます。", en: "The sky clears up." }, accept: ["fine weather"], hint: "晴 = clear up. 晴れ (はれ) = clear weather. 日 (sun) radical." },
        { id: "ja-u74l1-kumoru", type: "kanji", front: "曇", reading: "kumoru", meaning: "cloud over", example: { jp: "そらが曇ります。", en: "The sky clouds over." }, accept: ["cloudy"], hint: "曇 = cloud over. 曇り (くもり) = cloudy. 日 (sun) over 雲 (cloud)." },
        { id: "ja-u74l1-shitsu", type: "kanji", front: "湿", reading: "shitsu", meaning: "damp / humid", example: { jp: "なつは湿度がたかいです。", en: "Humidity is high in summer." }, accept: ["moist", "wet"], hint: "湿 = damp / humid. In 湿度 (しつど, humidity), 湿気 (しっけ, moisture). 氵 radical." },
        { id: "ja-u74l1-arashi", type: "kanji", front: "嵐", reading: "arashi", meaning: "storm", example: { jp: "大きい嵐がきます。", en: "A big storm is coming." }, accept: ["tempest"], hint: "嵐 = storm. 嵐 (あらし). 山 (mountain) + 風 (wind)." },
        { id: "ja-u74l1-kaminari", type: "kanji", front: "雷", reading: "kaminari", meaning: "thunder", example: { jp: "雷がなります。", en: "Thunder rumbles." }, accept: ["lightning"], hint: "雷 = thunder. 雷 (かみなり). 雨 (rain) over 田." },
        { id: "ja-u74l1-kiri", type: "kanji", front: "霧", reading: "kiri", meaning: "fog / mist", example: { jp: "あさ、霧がでます。", en: "Fog appears in the morning." }, accept: ["haze"], hint: "霧 = fog / mist. 霧 (きり). 雨 (rain) on top." },
      ],
    },
    {
      id: "ja-u74l2", unit: 74, lesson: 2, title: "Landscape", cefr: "B1", dominantMode: "recall",
      canDo: "Read landscape kanji: 森 林 岩 泉 谷 丘.",
      items: [
        { id: "ja-u74l2-mori", type: "kanji", front: "森", reading: "mori", meaning: "forest", example: { jp: "森をあるきます。", en: "I walk through the forest." }, accept: ["woods"], hint: "森 = forest. 森 (もり). Three 木 (trees) — a deep wood." },
        { id: "ja-u74l2-hayashi", type: "kanji", front: "林", reading: "hayashi", meaning: "woods", example: { jp: "林のなかをあるきます。", en: "I walk in the woods." }, accept: ["grove"], hint: "林 = woods. 林 (はやし). Two 木 (trees) — smaller than 森." },
        { id: "ja-u74l2-iwa", type: "kanji", front: "岩", reading: "iwa", meaning: "rock / boulder", example: { jp: "大きい岩です。", en: "It's a big rock." }, accept: ["crag"], hint: "岩 = rock / boulder. 岩 (いわ). 山 (mountain) over 石 (stone)." },
        { id: "ja-u74l2-izumi", type: "kanji", front: "泉", reading: "izumi", meaning: "spring / fountain", example: { jp: "温泉にはいります。", en: "I get into the hot spring." }, accept: ["source"], hint: "泉 = spring / fountain. 泉 (いずみ). In 温泉 (おんせん, hot spring). 水 (water) at the bottom." },
        { id: "ja-u74l2-tani", type: "kanji", front: "谷", reading: "tani", meaning: "valley", example: { jp: "谷をわたります。", en: "I cross the valley." }, accept: ["ravine"], hint: "谷 = valley. 谷 (たに)." },
        { id: "ja-u74l2-oka", type: "kanji", front: "丘", reading: "oka", meaning: "hill", example: { jp: "丘にのぼります。", en: "I climb the hill." }, accept: ["knoll"], hint: "丘 = hill. 丘 (おか)." },
      ],
    },
    {
      id: "ja-u74l3", unit: 74, lesson: 3, title: "Animals", cefr: "B1", dominantMode: "recall",
      canDo: "Read animal kanji: 犬 猫 鳥 魚 虫 馬.",
      items: [
        { id: "ja-u74l3-inu", type: "kanji", front: "犬", reading: "inu", meaning: "dog", example: { jp: "犬がすきです。", en: "I like dogs." }, accept: ["dogs"], hint: "犬 = dog. 犬 (いぬ) — the word you know. 大 (big) with a dot." },
        { id: "ja-u74l3-neko", type: "kanji", front: "猫", reading: "neko", meaning: "cat", example: { jp: "猫をかいます。", en: "I keep a cat." }, accept: ["cats"], hint: "猫 = cat. 猫 (ねこ). ⺨ (animal) radical." },
        { id: "ja-u74l3-tori", type: "kanji", front: "鳥", reading: "tori", meaning: "bird", example: { jp: "鳥がとびます。", en: "The bird flies." }, accept: ["birds", "poultry"], hint: "鳥 = bird. 鳥 (とり). The 灬 at the bottom are the tail feathers." },
        { id: "ja-u74l3-sakana", type: "kanji", front: "魚", reading: "sakana", meaning: "fish", example: { jp: "魚をたべます。", en: "I eat fish." }, accept: ["fishes"], hint: "魚 = fish. 魚 (さかな) — the word you know. The 灬 is the tail." },
        { id: "ja-u74l3-mushi", type: "kanji", front: "虫", reading: "mushi", meaning: "insect / bug", example: { jp: "にわに虫がいます。", en: "There are bugs in the garden." }, accept: ["worm"], hint: "虫 = insect / bug. 虫 (むし)." },
        { id: "ja-u74l3-uma", type: "kanji", front: "馬", reading: "uma", meaning: "horse", example: { jp: "馬がはしります。", en: "The horse runs." }, accept: ["horses"], hint: "馬 = horse. 馬 (うま). The 灬 at the bottom are the legs." },
      ],
    },
    {
      id: "ja-u74l4", unit: 74, lesson: 4, title: "Plants", cefr: "B1", dominantMode: "recall",
      canDo: "Read plant kanji: 花 草 竹 松 種 咲.",
      items: [
        { id: "ja-u74l4-hana", type: "kanji", front: "花", reading: "hana", meaning: "flower", example: { jp: "花がきれいです。", en: "The flowers are beautiful." }, accept: ["blossom"], hint: "花 = flower. 花 (はな) — the word you know. ⺾ (grass) over 化." },
        { id: "ja-u74l4-kusa", type: "kanji", front: "草", reading: "kusa", meaning: "grass", example: { jp: "にわの草をとります。", en: "I pull the weeds in the garden." }, accept: ["weeds"], hint: "草 = grass. 草 (くさ). ⺾ (grass) on top." },
        { id: "ja-u74l4-take", type: "kanji", front: "竹", reading: "take", meaning: "bamboo", example: { jp: "竹のはしをつかいます。", en: "I use bamboo chopsticks." }, accept: ["bamboos"], hint: "竹 = bamboo. 竹 (たけ). The shape is two bamboo leaves." },
        { id: "ja-u74l4-matsu", type: "kanji", front: "松", reading: "matsu", meaning: "pine", example: { jp: "にわに松の木があります。", en: "There's a pine tree in the garden." }, accept: ["pine tree"], hint: "松 = pine. 松 (まつ). 木 (tree) radical." },
        { id: "ja-u74l4-tane", type: "kanji", front: "種", reading: "tane", meaning: "seed / kind", example: { jp: "花の種をうえます。", en: "I plant flower seeds." }, accept: ["type", "variety"], hint: "種 = seed / kind. 種 (たね). In 種類 (しゅるい, type). 禾 (grain) radical." },
        { id: "ja-u74l4-saku", type: "kanji", front: "咲", reading: "saku", meaning: "bloom", example: { jp: "はるに花が咲きます。", en: "Flowers bloom in spring." }, accept: ["blossom"], hint: "咲 = bloom. 咲く (さく) = to bloom. 口 (mouth) radical." },
      ],
    },
  ],
};
