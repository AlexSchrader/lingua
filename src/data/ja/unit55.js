// Unit 55 — ぶんか・レジャー ("Culture & leisure") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4-level culture, hobbies, events & leisure nouns (plus a few verbs), grouped by
// theme: festivals, the arts, sports & the outdoors, travel & memories. Modeled like
// the other A2 units — vocab items with the kana headword on the front. Examples stay
// short and natural, using vocab already introduced + A1/A2 grammar.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT55 = {
  id: "ja-u55",
  lang: "ja",
  title: "ぶんか・レジャー",
  order: 55,
  stage: "a2",
  lessons: [
    // Lesson 1: festivals
    {
      id: "ja-u55l1",
      unit: 55,
      lesson: 1,
      title: "Festivals",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about festivals: まつり やたい ゆかた でんとう ぎょうじ たいこ.",
      items: [
        { id: "ja-u55l1-matsuri", type: "vocab", front: "まつり", reading: "matsuri", meaning: "festival", example: { jp: "なつのまつりはたのしいです。", en: "The summer festival is fun." }, accept: ["festival", "matsuri"] },
        { id: "ja-u55l1-yatai", type: "vocab", front: "やたい", reading: "yatai", meaning: "food stall", example: { jp: "まつりにやたいがたくさんあります。", en: "There are many food stalls at the festival." }, accept: ["food stall", "stall", "stand"] },
        { id: "ja-u55l1-yukata", type: "vocab", front: "ゆかた", reading: "yukata", meaning: "yukata", example: { jp: "まつりでゆかたをきます。", en: "I wear a yukata at the festival." }, accept: ["yukata", "summer kimono"] },
        { id: "ja-u55l1-dento", type: "vocab", front: "でんとう", reading: "dentō", meaning: "tradition", example: { jp: "これはふるいでんとうです。", en: "This is an old tradition." }, accept: ["tradition", "traditional"] },
        { id: "ja-u55l1-gyoji", type: "vocab", front: "ぎょうじ", reading: "gyōji", meaning: "event", example: { jp: "がっこうのぎょうじがあります。", en: "There is a school event." }, accept: ["event", "function", "ceremony"] },
        { id: "ja-u55l1-taiko", type: "vocab", front: "たいこ", reading: "taiko", meaning: "drum", example: { jp: "まつりでたいこをたたきます。", en: "We beat the drums at the festival." }, accept: ["drum", "taiko", "drums"] },
      ],
    },
    // Lesson 2: the arts
    {
      id: "ja-u55l2",
      unit: 55,
      lesson: 2,
      title: "The arts",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the arts: しゅみ てんらんかい えんそう びじゅつ はくぶつかん コンサート.",
      items: [
        { id: "ja-u55l2-shumi", type: "vocab", front: "しゅみ", reading: "shumi", meaning: "hobby", example: { jp: "わたしのしゅみはおんがくです。", en: "My hobby is music." }, accept: ["hobby", "pastime", "interest"] },
        { id: "ja-u55l2-tenrankai", type: "vocab", front: "てんらんかい", reading: "tenrankai", meaning: "exhibition", example: { jp: "えのてんらんかいにいきます。", en: "I go to an art exhibition." }, accept: ["exhibition", "art show"] },
        { id: "ja-u55l2-enso", type: "vocab", front: "えんそう", reading: "ensō", meaning: "performance", example: { jp: "ピアノのえんそうをききます。", en: "I listen to a piano performance." }, accept: ["performance", "recital", "playing"] },
        { id: "ja-u55l2-bijutsu", type: "vocab", front: "びじゅつ", reading: "bijutsu", meaning: "art", example: { jp: "びじゅつがすきです。", en: "I like fine art." }, accept: ["fine art", "art", "the arts"] },
        { id: "ja-u55l2-hakubutsukan", type: "vocab", front: "はくぶつかん", reading: "hakubutsukan", meaning: "museum", example: { jp: "はくぶつかんはしずかです。", en: "The museum is quiet." }, accept: ["museum"] },
        { id: "ja-u55l2-konsato", type: "vocab", front: "コンサート", reading: "konsāto", meaning: "concert", example: { jp: "こんばんコンサートがあります。", en: "There is a concert tonight." }, accept: ["concert"] },
      ],
    },
    // Lesson 3: sports & the outdoors
    {
      id: "ja-u55l3",
      unit: 55,
      lesson: 3,
      title: "Sports & outdoors",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about sports and nature: しあい おうえん けしき キャンプ つり とざん.",
      items: [
        { id: "ja-u55l3-shiai", type: "vocab", front: "しあい", reading: "shiai", meaning: "match", example: { jp: "サッカーのしあいをみます。", en: "I watch a soccer match." }, accept: ["match", "game", "contest"] },
        { id: "ja-u55l3-oen", type: "vocab", front: "おうえん", reading: "ōen", meaning: "cheering", example: { jp: "チームをおうえんします。", en: "I cheer for the team." }, accept: ["cheering", "support", "rooting for"] },
        { id: "ja-u55l3-keshiki", type: "vocab", front: "けしき", reading: "keshiki", meaning: "scenery", example: { jp: "やまのけしきはきれいです。", en: "The mountain scenery is beautiful." }, accept: ["scenery", "landscape", "view"] },
        { id: "ja-u55l3-kyanpu", type: "vocab", front: "キャンプ", reading: "kyanpu", meaning: "camping", example: { jp: "なつにやまでキャンプをします。", en: "I go camping in the mountains in summer." }, accept: ["camping", "camp"] },
        { id: "ja-u55l3-tsuri", type: "vocab", front: "つり", reading: "tsuri", meaning: "fishing", example: { jp: "うみでつりをします。", en: "I go fishing in the sea." }, accept: ["fishing", "angling"] },
        { id: "ja-u55l3-tozan", type: "vocab", front: "とざん", reading: "tozan", meaning: "mountain climbing", example: { jp: "なつにとざんをします。", en: "I climb mountains in summer." }, accept: ["mountain climbing", "hiking", "climbing"] },
      ],
    },
    // Lesson 4: travel & memories
    {
      id: "ja-u55l4",
      unit: 55,
      lesson: 4,
      title: "Travel & memories",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about trips: けいけん おもいで おんせん おみやげ とうちゃく しゅっぱつ.",
      items: [
        { id: "ja-u55l4-keiken", type: "vocab", front: "けいけん", reading: "keiken", meaning: "experience", example: { jp: "いいけいけんになりました。", en: "It became a good experience." }, accept: ["experience"] },
        { id: "ja-u55l4-omoide", type: "vocab", front: "おもいで", reading: "omoide", meaning: "memory", example: { jp: "りょこうのおもいでがあります。", en: "I have memories of the trip." }, accept: ["memory", "memories", "recollection"] },
        { id: "ja-u55l4-onsen", type: "vocab", front: "おんせん", reading: "onsen", meaning: "hot spring", example: { jp: "ゆうめいなおんせんにいきます。", en: "I go to a famous hot spring." }, accept: ["hot spring", "hot springs", "spa"] },
        { id: "ja-u55l4-omiyage", type: "vocab", front: "おみやげ", reading: "omiyage", meaning: "souvenir", example: { jp: "ともだちにおみやげをかいます。", en: "I buy a souvenir for my friend." }, accept: ["souvenir", "gift", "present"] },
        { id: "ja-u55l4-tochaku", type: "vocab", front: "とうちゃく", reading: "tōchaku", meaning: "arrival", example: { jp: "えきにとうちゃくします。", en: "I arrive at the station." }, accept: ["arrival", "to arrive", "arriving"] },
        { id: "ja-u55l4-shuppatsu", type: "vocab", front: "しゅっぱつ", reading: "shuppatsu", meaning: "departure", example: { jp: "あさはやくしゅっぱつします。", en: "We depart early in the morning." }, accept: ["departure", "to depart", "setting off"] },
      ],
    },
  ],
};
