// Unit 186 — ごい・N3・68 ("N3 vocab 68") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homophones (夫人/婦人 = ふじん) disambiguated via hints.
export const UNIT186 = {
  id: "ja-u186", lang: "ja", title: "ごい・N3・68", order: 186, stage: "b1",
  lessons: [
    {
      id: "ja-u186l1", unit: 186, lesson: 1, title: "N3 vocab 68·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 夫婦 (married couple), 笛 (flute), 不可 (not allowed), 深まる (to deepen), 武器 (weapon), 拭く (to wipe).",
      items: [
        { id: "ja-u186l1-fufu", type: "vocab", front: "夫婦", reading: "fūfu", meaning: "married couple", example: { jp: "あの夫婦はとてもなかがいいです。", en: "That married couple gets along very well." }, accept: ["husband and wife"] },
        { id: "ja-u186l1-fue", type: "vocab", front: "笛", reading: "fue", meaning: "flute", example: { jp: "おまつりで笛のおとをききました。", en: "I heard the sound of a flute at the festival." }, accept: ["whistle"] },
        { id: "ja-u186l1-fuka", type: "vocab", front: "不可", reading: "fuka", meaning: "not allowed", example: { jp: "ここでのしゃしんは不可です。", en: "Photos are not allowed here." }, accept: ["impossible", "fail"], hint: "不可 (ふか) = not allowed / prohibited; also a failing grade." },
        { id: "ja-u186l1-fukamaru", type: "vocab", front: "深まる", reading: "fukamaru", meaning: "to deepen", example: { jp: "だんだんあきが深まってきました。", en: "Autumn has gradually deepened." }, accept: ["to grow deeper"] },
        { id: "ja-u186l1-buki", type: "vocab", front: "武器", reading: "buki", meaning: "weapon", example: { jp: "このゲームであたらしい武器をかいました。", en: "I bought a new weapon in this game." }, accept: ["arms"] },
        { id: "ja-u186l1-fuku", type: "vocab", front: "拭く", reading: "fuku", meaning: "to wipe", example: { jp: "タオルでてを拭きました。", en: "I wiped my hands with a towel." }, accept: ["to dry"] },
      ],
    },
    {
      id: "ja-u186l2", unit: 186, lesson: 2, title: "N3 vocab 68·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 服装 (clothes), 含む (to contain), 含める (to include), 袋 (bag), 不幸 (unhappiness), 節 (tune).",
      items: [
        { id: "ja-u186l2-fukuso", type: "vocab", front: "服装", reading: "fukusō", meaning: "clothes", example: { jp: "パーティーにはきれいな服装でいきます。", en: "I go to the party in nice clothes." }, accept: ["attire", "outfit"] },
        { id: "ja-u186l2-fukumu", type: "vocab", front: "含む", reading: "fukumu", meaning: "to contain", example: { jp: "このジュースはさとうを含んでいます。", en: "This juice contains sugar." }, accept: ["to include"] },
        { id: "ja-u186l2-fukumeru", type: "vocab", front: "含める", reading: "fukumeru", meaning: "to include", example: { jp: "こどもを含めてぜんぶで五人です。", en: "Including the children, there are five people in all." }, accept: ["to add in"] },
        { id: "ja-u186l2-fukuro", type: "vocab", front: "袋", reading: "fukuro", meaning: "bag", example: { jp: "この袋にごみをいれてください。", en: "Please put the trash in this bag." }, accept: ["sack"] },
        { id: "ja-u186l2-fuko", type: "vocab", front: "不幸", reading: "fukō", meaning: "unhappiness", example: { jp: "きのう不幸なことがおきました。", en: "An unfortunate thing happened yesterday." }, accept: ["sorrow", "misfortune"] },
        { id: "ja-u186l2-fushi", type: "vocab", front: "節", reading: "fushi", meaning: "tune", example: { jp: "このうたの節をおぼえました。", en: "I memorized the tune of this song." }, accept: ["melody", "tone"], hint: "節 (ふし) = tune / melody; also a joint or knot (bamboo, fingers)." },
      ],
    },
    {
      id: "ja-u186l3", unit: 186, lesson: 3, title: "N3 vocab 68·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 無事 (safety), 不思議 (mystery), 不自由 (inconvenience), 夫人 (wife), 婦人 (woman), 不正 (injustice).",
      items: [
        { id: "ja-u186l3-buji", type: "vocab", front: "無事", reading: "buji", meaning: "safety", example: { jp: "かぞくは無事にいえにつきました。", en: "My family arrived home safely." }, accept: ["peace", "safely"] },
        { id: "ja-u186l3-fushigi", type: "vocab", front: "不思議", reading: "fushigi", meaning: "mystery", example: { jp: "これはとても不思議なはなしです。", en: "This is a very mysterious story." }, accept: ["curiosity", "strange"] },
        { id: "ja-u186l3-fujiyu", type: "vocab", front: "不自由", reading: "fujiyū", meaning: "inconvenience", example: { jp: "あしがわるくて、あるくのが不自由です。", en: "My leg is bad, so walking is inconvenient." }, accept: ["disability", "discomfort"] },
        { id: "ja-u186l3-fujin", type: "vocab", front: "夫人", reading: "fujin", meaning: "wife", example: { jp: "たなか夫人はとてもやさしいです。", en: "Mrs. Tanaka is very kind." }, accept: ["mrs", "madam"], hint: "夫人 (ふじん) = someone's wife / Mrs. Same reading as 婦人 (woman)." },
        { id: "ja-u186l3-fujin2", type: "vocab", front: "婦人", reading: "fujin", meaning: "woman", example: { jp: "あの婦人はきれいなきものをきています。", en: "That woman is wearing a beautiful kimono." }, accept: ["lady"], hint: "婦人 (ふじん) = woman / lady. Same reading as 夫人 (someone's wife)." },
        { id: "ja-u186l3-fusei", type: "vocab", front: "不正", reading: "fusei", meaning: "injustice", example: { jp: "かれはしけんで不正をしました。", en: "He cheated on the exam." }, accept: ["unfairness"] },
      ],
    },
    {
      id: "ja-u186l4", unit: 186, lesson: 4, title: "N3 vocab 68·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 防ぐ (to prevent), 不足 (shortage), 舞台 (stage), 双子 (twins), 再び (again), 普段 (usually).",
      items: [
        { id: "ja-u186l4-fusegu", type: "vocab", front: "防ぐ", reading: "fusegu", meaning: "to prevent", example: { jp: "マスクでかぜを防ぎます。", en: "I prevent colds with a mask." }, accept: ["to protect", "to defend"] },
        { id: "ja-u186l4-fusoku", type: "vocab", front: "不足", reading: "fusoku", meaning: "shortage", example: { jp: "すいみん不足でとてもつかれています。", en: "I'm very tired from lack of sleep." }, accept: ["insufficiency"] },
        { id: "ja-u186l4-butai", type: "vocab", front: "舞台", reading: "butai", meaning: "stage", example: { jp: "かのじょは舞台でうたをうたいました。", en: "She sang a song on the stage." }, accept: ["theater stage"] },
        { id: "ja-u186l4-futago", type: "vocab", front: "双子", reading: "futago", meaning: "twins", example: { jp: "あの双子はとてもよくにています。", en: "Those twins look very alike." }, accept: ["a twin"] },
        { id: "ja-u186l4-futatabi", type: "vocab", front: "再び", reading: "futatabi", meaning: "again", example: { jp: "かれは再びにほんにきました。", en: "He came to Japan again." }, accept: ["once more", "a second time"] },
        { id: "ja-u186l4-fudan", type: "vocab", front: "普段", reading: "fudan", meaning: "usually", example: { jp: "普段はしちじにおきます。", en: "I usually wake up at seven." }, accept: ["ordinarily", "normally"] },
      ],
    },
  ],
};
