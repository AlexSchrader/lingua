// Unit 39 — かんじ・ばしょ (Places & buildings kanji) — A2 / JLPT N4
// Kanji unit (category: places & buildings). type:"kanji" — recognition/recall test
// the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT39 = {
  id: "ja-u39",
  lang: "ja",
  title: "かんじ・ばしょ",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "ja-u39l1",
      unit: 39,
      lesson: 1,
      title: "Places kanji 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the place kanji: 社 地 場 京 院 界 町 (company, ground, place, capital, institution, world, town).",
      items: [
        { id: "ja-u39l1-sha", type: "kanji", front: "社", reading: "sha", meaning: "company", example: { jp: "会社に行きます。", en: "I go to the company." }, accept: ["shrine","firm"], hint: "社 = company / shrine. 会社 (かいしゃ) = company. 神 (spirit) + 土 (earth): a shrine on sacred ground." },
        { id: "ja-u39l1-chi", type: "kanji", front: "地", reading: "chi", meaning: "ground", example: { jp: "この土地は広いです。", en: "This land is wide." }, accept: ["earth","land"], hint: "地 = ground / earth. 土 (soil) + 也. 地図 (ちず) = map." },
        { id: "ja-u39l1-ba", type: "kanji", front: "場", reading: "ba", meaning: "place", example: { jp: "会場はどこですか。", en: "Where is the venue?" }, accept: ["venue","site"], hint: "場 = place. 会場 (かいじょう) = venue. 土 (ground) + 昜 (sun rising): an open place." },
        { id: "ja-u39l1-kyo", type: "kanji", front: "京", reading: "kyō", meaning: "capital", example: { jp: "東京に住んでいます。", en: "I live in Tokyo." }, accept: ["metropolis"], hint: "京 = capital. 東京 (とうきょう) = Tokyo, the 'eastern capital'." },
        { id: "ja-u39l1-in", type: "kanji", front: "院", reading: "in", meaning: "institution", example: { jp: "病院で待ちます。", en: "I wait at the hospital." }, accept: ["hall"], hint: "院 = institution. 病院 (びょういん) = hospital. 阝 (hill) + 完: a large walled building." },
        { id: "ja-u39l1-kai", type: "kanji", front: "界", reading: "kai", meaning: "world", example: { jp: "世界は広いです。", en: "The world is wide." }, accept: ["boundary"], hint: "界 = world / boundary. 世界 (せかい) = the world. 田 (field) + 介: the boundary of the fields." },
        { id: "ja-u39l1-machi", type: "kanji", front: "町", reading: "machi", meaning: "town", example: { jp: "町を歩きます。", en: "I walk around the town." }, accept: ["quarter"], hint: "町 = town. 田 (rice field) + 丁: where the fields meet the streets. You know まち." },
      ],
    },
    {
      id: "ja-u39l2",
      unit: 39,
      lesson: 2,
      title: "Buildings kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the building kanji: 館 屋 堂 室 台 野 (hall, shop, hall, room, stand, field).",
      items: [
        { id: "ja-u39l2-kan", type: "kanji", front: "館", reading: "kan", meaning: "hall", example: { jp: "図書館で本を読みます。", en: "I read books at the library." }, accept: ["building"], hint: "館 = hall / large building. 図書館 (としょかん) = library. 食 (eat) radical + 官: a grand public building." },
        { id: "ja-u39l2-ya", type: "kanji", front: "屋", reading: "ya", meaning: "shop", example: { jp: "本屋で本を買います。", en: "I buy books at the bookshop." }, accept: ["roof","store"], hint: "屋 = shop / roof. 本屋 (ほんや) = bookshop. 尸 (roof) over 至: a covered building." },
        { id: "ja-u39l2-do", type: "kanji", front: "堂", reading: "dō", meaning: "hall", example: { jp: "食堂でひるごはんを食べます。", en: "I eat lunch in the dining hall." }, accept: ["dining hall"], hint: "堂 = hall. 食堂 (しょくどう) = dining hall / cafeteria. 尚 over 土 (earth): a raised hall." },
        { id: "ja-u39l2-shitsu", type: "kanji", front: "室", reading: "shitsu", meaning: "room", example: { jp: "教室で勉強します。", en: "I study in the classroom." }, accept: ["chamber"], hint: "室 = room. 教室 (きょうしつ) = classroom. 宀 (roof) over 至 (arrive): where you arrive under a roof." },
        { id: "ja-u39l2-dai", type: "kanji", front: "台", reading: "dai", meaning: "stand", example: { jp: "台の上に本があります。", en: "There is a book on the stand." }, accept: ["platform","counter"], hint: "台 = stand / platform. 台所 (だいどころ) = kitchen. Also a counter for machines: 車一台 (one car)." },
        { id: "ja-u39l2-no", type: "kanji", front: "野", reading: "no", meaning: "field", example: { jp: "野原で遊びます。", en: "I play in the field." }, accept: ["plain","wild"], hint: "野 = field / plain. 野原 (のはら) = open field. 里 (village) + 予: the wild land beyond the village. 野菜 (やさい) = vegetables." },
      ],
    },
  ],
};
