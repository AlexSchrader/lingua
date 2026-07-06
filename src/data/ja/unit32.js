// Unit 32 — かんじ・ばしょ ("Place & building kanji") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// N4 place/building kanji. Each hooks onto a word the learner already knows (病院,
// 銀行, 郵便局, 図書館, 台所, 部屋…). type:"kanji" — recognition by meaning, trace to
// produce. Example words may contain not-yet-taught kanji (examples are scope-exempt).
export const UNIT32 = {
  id: "ja-u32", lang: "ja", title: "かんじ・ばしょ", order: 32, stage: "a2",
  lessons: [
    {
      id: "ja-u32l1", unit: 32, lesson: 1, title: "Buildings 1", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 医 院 屋 館 宮 局.",
      items: [
        { id: "ja-u32l1-i", type: "kanji", front: "医", reading: "i", meaning: "medicine", example: { jp: "医者にいきます。", en: "I go to the doctor." }, accept: ["doctor", "medical"], hint: "医 = medicine / doctor. In 医者 (いしゃ, doctor)." },
        { id: "ja-u32l1-in", type: "kanji", front: "院", reading: "in", meaning: "institution", example: { jp: "病院はどこですか。", en: "Where is the hospital?" }, accept: ["large building"], hint: "院 = institution / large building. In 病院 (びょういん, hospital)." },
        { id: "ja-u32l1-ya", type: "kanji", front: "屋", reading: "ya", meaning: "shop", example: { jp: "本屋にいきます。", en: "I go to the bookshop." }, accept: ["roof", "store"], hint: "屋 = shop / roof. 〜屋 makes a shop: 本屋 bookshop, パン屋 bakery." },
        { id: "ja-u32l1-kan", type: "kanji", front: "館", reading: "kan", meaning: "hall", example: { jp: "図書館でべんきょうします。", en: "I study at the library." }, accept: ["large building"], hint: "館 = hall / large building. 図書館 (library), 映画館 (cinema), 美術館 (art museum)." },
        { id: "ja-u32l1-miya", type: "kanji", front: "宮", reading: "miya", meaning: "shrine", example: { jp: "お宮にいきます。", en: "I go to the shrine." }, accept: ["palace"], hint: "宮 = palace / Shinto shrine. お宮 = a shrine." },
        { id: "ja-u32l1-kyoku", type: "kanji", front: "局", reading: "kyoku", meaning: "bureau", example: { jp: "ゆうびんきょくはどこですか。", en: "Where is the post office?" }, accept: ["office"], hint: "局 = bureau / office. In 郵便局 (ゆうびんきょく, post office), 薬局 (pharmacy)." },
      ],
    },
    {
      id: "ja-u32l2", unit: 32, lesson: 2, title: "Buildings 2", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 銀 橋 港 庫 県 都.",
      items: [
        { id: "ja-u32l2-gin", type: "kanji", front: "銀", reading: "gin", meaning: "silver", example: { jp: "ぎんこうにいきます。", en: "I go to the bank." }, accept: ["silver (metal)"], hint: "銀 = silver. In 銀行 (ぎんこう, bank). 金 (metal) radical." },
        { id: "ja-u32l2-hashi", type: "kanji", front: "橋", reading: "hashi", meaning: "bridge", example: { jp: "橋をわたります。", en: "I cross the bridge." }, accept: ["a bridge"], hint: "橋 = bridge. 木 (wood) radical — a wooden bridge." },
        { id: "ja-u32l2-minato", type: "kanji", front: "港", reading: "minato", meaning: "harbor", example: { jp: "港にいきます。", en: "I go to the harbor." }, accept: ["port"], hint: "港 = harbor / port. 氵 (water) radical. 空港 (くうこう) = airport." },
        { id: "ja-u32l2-ko", type: "kanji", front: "庫", reading: "ko", meaning: "warehouse", example: { jp: "しゃこにくるまをいれます。", en: "I put the car in the garage." }, accept: ["storehouse"], hint: "庫 = warehouse / storehouse. 車庫 (しゃこ, garage), 冷蔵庫 (fridge)." },
        { id: "ja-u32l2-ken", type: "kanji", front: "県", reading: "ken", meaning: "prefecture", example: { jp: "この県にすみます。", en: "I live in this prefecture." }, accept: ["province"], hint: "県 = prefecture (Japan's regions). 〜県, e.g. 大阪府 / 京都府 / 〜県." },
        { id: "ja-u32l2-to", type: "kanji", front: "都", reading: "to", meaning: "capital", example: { jp: "とかいは大きいです。", en: "The city is big." }, accept: ["metropolis", "city"], hint: "都 = capital / metropolis. 東京都 (Tokyo), 京都 (Kyoto), 都会 (city)." },
      ],
    },
    {
      id: "ja-u32l3", unit: 32, lesson: 3, title: "Where you live", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 島 州 住 宿 所 庭.",
      items: [
        { id: "ja-u32l3-shima", type: "kanji", front: "島", reading: "shima", meaning: "island", example: { jp: "島はきれいです。", en: "The island is beautiful." }, accept: ["an island"], hint: "島 = island. 山 (mountain) at the bottom — a mountain in the sea. You know しま." },
        { id: "ja-u32l3-shu", type: "kanji", front: "州", reading: "shū", meaning: "state", example: { jp: "アメリカの州です。", en: "It's a US state." }, accept: ["province", "continent"], hint: "州 = state / province / continent. アメリカの州, 九州 (Kyushu)." },
        { id: "ja-u32l3-sumu", type: "kanji", front: "住", reading: "sumu", meaning: "reside", example: { jp: "にほんに住みます。", en: "I live in Japan." }, accept: ["live", "dwell"], hint: "住 = live / reside. 亻 (person) radical. 住みます — you know it as すみます." },
        { id: "ja-u32l3-yado", type: "kanji", front: "宿", reading: "yado", meaning: "inn", example: { jp: "宿にとまります。", en: "I stay at an inn." }, accept: ["lodging"], hint: "宿 = inn / lodging. 宿題 (しゅくだい, homework — a 'lodging task') uses it." },
        { id: "ja-u32l3-tokoro", type: "kanji", front: "所", reading: "tokoro", meaning: "place", example: { jp: "だいどころでりょうりします。", en: "I cook in the kitchen." }, accept: ["spot", "location"], hint: "所 = place. In 台所 (だいどころ, kitchen), 場所 (ばしょ, place)." },
        { id: "ja-u32l3-niwa", type: "kanji", front: "庭", reading: "niwa", meaning: "garden", example: { jp: "庭にはながあります。", en: "There are flowers in the garden." }, accept: ["yard"], hint: "庭 = garden / yard. You know it as にわ." },
      ],
    },
    {
      id: "ja-u32l4", unit: 32, lesson: 4, title: "Parts of a place", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 部 階 央 区 界 岸.",
      items: [
        { id: "ja-u32l4-bu", type: "kanji", front: "部", reading: "bu", meaning: "part", example: { jp: "部屋はきれいです。", en: "The room is clean." }, accept: ["section", "department"], hint: "部 = part / section. In 部屋 (へや, room), 全部 (ぜんぶ, all)." },
        { id: "ja-u32l4-kai", type: "kanji", front: "階", reading: "kai", meaning: "floor", example: { jp: "二階にいます。", en: "I'm on the second floor." }, accept: ["story", "stairs"], hint: "階 = floor / story. 一階 1F, 二階 2F. Also 階段 (stairs)." },
        { id: "ja-u32l4-o", type: "kanji", front: "央", reading: "ō", meaning: "center", example: { jp: "ちゅうおうえきです。", en: "It's Central Station." }, accept: ["middle"], hint: "央 = center / middle. 中央 (ちゅうおう) = the center." },
        { id: "ja-u32l4-ku", type: "kanji", front: "区", reading: "ku", meaning: "ward", example: { jp: "この区は大きいです。", en: "This ward is big." }, accept: ["district"], hint: "区 = ward / district (a city subdivision). 東京は23区あります。" },
        { id: "ja-u32l4-kai2", type: "kanji", front: "界", reading: "kai", meaning: "world", example: { jp: "せかいはひろいです。", en: "The world is vast." }, accept: ["boundary"], hint: "界 = world / boundary. 世界 (せかい) = the world." },
        { id: "ja-u32l4-kishi", type: "kanji", front: "岸", reading: "kishi", meaning: "shore", example: { jp: "岸をあるきます。", en: "I walk along the shore." }, accept: ["bank", "coast"], hint: "岸 = shore / bank. 海岸 (かいがん, seashore). 山 + 厂 + 干." },
      ],
    },
  ],
};
