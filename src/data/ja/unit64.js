// Unit 64 — かたち・いち ("Shapes & Position") — A1 thematic
// N5 words for shapes, relative position, direction, and orientation that the
// learner hasn't met yet: まる/しかく/さんかく (circle/square/triangle),
// むこう/すみ/よこ (over there/corner/side), the こっち/そっち/あっち/どっち
// direction set, and orientation words (まんなか/はんたい/ななめ). Grammar words
// (は・を・が・に・です・ます-verbs) are all previously taught; every example
// reuses only known vocab + particles. Taught as vocabulary, no new grammar.
// lang/unit/lesson in index.js.
export const UNIT64 = {
  id: "ja-u64",
  lang: "ja",
  title: "かたち・いち",
  order: 64,
  stage: "a1",
  lessons: [
    // Lesson 1: shapes
    {
      id: "ja-u64l1",
      unit: 64,
      lesson: 1,
      title: "Shapes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name basic shapes — まる さんかく しかく — and describe a line as てん or まっすぐ.",
      items: [
        { id: "ja-u64l1-maru",     type: "vocab", front: "まる",   reading: "maru",    meaning: "circle", example: { jp: "これはまるです。", en: "This is a circle." }, drill: { jp: "まるをかきます。", en: "I draw a circle." }, accept: ["round", "circle shape", "a circle", "ring"], hint: "MA-ru — two beats, tapped r. ⚠️ The same まる a teacher draws beside a correct answer: in Japan a circle means right, where English uses a tick. まるい, round, is built from it." },
        { id: "ja-u64l1-shikaku",  type: "vocab", front: "しかく", reading: "shikaku", meaning: "square", example: { jp: "これはしかくです。", en: "This is a square." }, drill: { jp: "しかくのはこをつかいます。", en: "I use a square box." }, accept: ["square shape", "rectangle", "a square", "quadrilateral"], hint: "shi-KA-ku — three beats. 四 (four) + 角 (corner): the four-corner shape. ⚠️ So it covers squares AND rectangles. Compare さんかく below, built on 三, three." },
        { id: "ja-u64l1-sankaku",  type: "vocab", front: "さんかく", reading: "sankaku", meaning: "triangle", example: { jp: "これはさんかくです。", en: "This is a triangle." }, drill: { jp: "さんかくはちいさいです。", en: "The triangle is small." }, accept: ["triangle shape", "a triangle", "triangular"], hint: "san-KA-ku — three beats, the ん held. 三 (three) plus the same 角 as しかく. ⚠️ Learn 角, corner, once and both shape words read themselves." },
        { id: "ja-u64l1-katachi",  type: "vocab", front: "かたち", reading: "katachi", meaning: "shape", example: { jp: "どんなかたちですか。", en: "What shape is it?" }, drill: { jp: "かたちがおもしろいです。", en: "The shape is interesting." }, accept: ["form", "figure", "a shape", "outline"], hint: "ka-TA-chi — three beats, ち is chi. ⚠️ The general word for shape, which is why どんなかたちですか asks about it. まる and しかく are particular かたち." },
        { id: "ja-u64l1-ten",      type: "vocab", front: "てん",   reading: "ten",     meaning: "dot", example: { jp: "てんをかきます。", en: "I draw a dot." }, drill: { jp: "てんがちいさいです。", en: "The dot is small." }, accept: ["point", "spot", "a dot", "mark"], hint: "TEN — one beat, the ん held. Written 点. ⚠️ A dot, a decimal point, and also a MARK in an exam: ひゃくてん is full marks." },
        { id: "ja-u64l1-massugu",  type: "vocab", front: "まっすぐ", reading: "massugu", meaning: "straight", example: { jp: "まっすぐいきます。", en: "I go straight." }, drill: { jp: "みちはまっすぐです。", en: "The road is straight." }, accept: ["straight ahead", "directly", "dead straight", "in a straight line"], hint: "mas-SU-gu — the small っ is a held stop doubling the s: three beats, hard g. ⚠️ Both a direction and a manner: まっすぐいきます is go straight on, まっすぐなみち is a dead-straight road." },
      ],
    },
    // Lesson 2: position around
    {
      id: "ja-u64l2",
      unit: 64,
      lesson: 2,
      title: "Position",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where something sits — むこう すみ よこ まわり ちかく とおく.",
      items: [
        { id: "ja-u64l2-mukou",   type: "vocab", front: "むこう", reading: "mukō",   meaning: "over there", example: { jp: "むこうにいえがあります。", en: "There's a house over there." }, drill: { jp: "むこうのやまはたかいです。", en: "The mountain over there is tall." }, accept: ["the other side", "across", "beyond", "yonder"], hint: "mu-KŌ — the こう is a long o, so two beats. ⚠️ The far side of something — across the street, over the river. It also names the other party in a conversation." },
        { id: "ja-u64l2-sumi",    type: "vocab", front: "すみ",   reading: "sumi",   meaning: "corner (the inside corner of a room)", example: { jp: "へやのすみにいます。", en: "I'm in the corner of the room." }, drill: { jp: "すみにねこがいます。", en: "There is a cat in the corner." }, accept: ["nook", "inside corner", "a corner", "the corner"], hint: "SU-mi — two beats. ⚠️ The INSIDE corner of a room, where two walls meet. The outside corner of a street is かど, a separate word." },
        { id: "ja-u64l2-yoko",    type: "vocab", front: "よこ",   reading: "yoko",   meaning: "side", example: { jp: "つくえのよこにいます。", en: "I'm beside the desk." }, drill: { jp: "よこのいすにすわります。", en: "I sit on the chair beside it." }, accept: ["beside", "next to", "the side", "sideways"], hint: "YO-ko — two beats. ⚠️ Beside, and also horizontal — the opposite of たて in lesson 4. たてとよこ is how Japanese gives the dimensions of anything." },
        { id: "ja-u64l2-mawari",  type: "vocab", front: "まわり", reading: "mawari", meaning: "surroundings", example: { jp: "いえのまわりをあるきます。", en: "I walk around the house." }, drill: { jp: "まわりにひとがおおぜいいます。", en: "There are a lot of people around." }, accept: ["around", "vicinity", "the surroundings", "all around"], hint: "ma-WA-ri — three beats, tapped r. From まわる, to go round. ⚠️ Everything in a ring AROUND something, never one single side." },
        { id: "ja-u64l2-chikaku", type: "vocab", front: "ちかく", reading: "chikaku", meaning: "nearby", example: { jp: "えきのちかくにいます。", en: "I'm near the station." }, drill: { jp: "ちかくにみせがあります。", en: "There is a shop nearby." }, accept: ["near", "vicinity", "close by", "in the neighbourhood"], hint: "chi-KA-ku — three beats, ち is chi. From ちかい, near. ⚠️ Here it is a NOUN, so it takes の: えきのちかく, the area near the station." },
        { id: "ja-u64l2-tooku",   type: "vocab", front: "とおく", reading: "tōku",   meaning: "far away", example: { jp: "とおくにやまがあります。", en: "There's a mountain far away." }, drill: { jp: "とおくのおとがきこえます。", en: "I can hear a sound in the distance." }, accept: ["distance", "far off", "a long way off", "in the distance"], hint: "TŌ-ku — the おお is ONE long o, so two beats, not three. From とおい, far. ⚠️ The mirror of ちかく above, and it takes の the same way." },
      ],
    },
    // Lesson 3: direction
    {
      id: "ja-u64l3",
      unit: 64,
      lesson: 3,
      title: "Direction",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point a way — こっち そっち あっち どっち — and name a むき or ほうこう.",
      items: [
        { id: "ja-u64l3-kotchi", type: "vocab", front: "こっち", reading: "kotchi", meaning: "this way", example: { jp: "こっちにきます。", en: "I come this way." }, drill: { jp: "こっちのみちはせまいです。", en: "The road this way is narrow." }, accept: ["this direction", "over here", "this side", "here"], hint: "KOT-chi — the small っ doubles the ch: two beats. The casual form of こちら. ⚠️ こ-そ-あ-ど again, the same four-way set as これ それ あれ どれ: こ is near me." },
        { id: "ja-u64l3-sotchi", type: "vocab", front: "そっち", reading: "sotchi", meaning: "that way", example: { jp: "そっちはあついです。", en: "It's hot over there." }, drill: { jp: "そっちにいすがあります。", en: "There is a chair over your way." }, accept: ["that direction", "your way", "that side", "over by you"], hint: "SOT-chi — the small っ doubles the ch: two beats. The casual form of そちら. ⚠️ The そ slot: near YOU, the person being spoken to." },
        { id: "ja-u64l3-atchi",  type: "vocab", front: "あっち", reading: "atchi",  meaning: "over that way", example: { jp: "あっちにいきます。", en: "I go over that way." }, drill: { jp: "あっちはしずかです。", en: "It is quiet over that way." }, accept: ["that way", "the other way", "over yonder", "that side"], hint: "AT-chi — the small っ doubles the ch: two beats. The casual form of あちら. ⚠️ The あ slot: away from BOTH of us." },
        { id: "ja-u64l3-dotchi", type: "vocab", front: "どっち", reading: "dotchi", meaning: "which way", example: { jp: "どっちがすきですか。", en: "Which one do you like?" }, drill: { jp: "どっちにいきますか。", en: "Which way shall we go?" }, accept: ["which one", "which direction", "which of the two", "which side"], hint: "DOT-chi — the small っ doubles the ch: two beats. The casual form of どちら. ⚠️ The ど slot is always the QUESTION one, so どっち asks which of two." },
        { id: "ja-u64l3-muki",   type: "vocab", front: "むき",   reading: "muki",   meaning: "facing", example: { jp: "むきがちがいます。", en: "The way it faces is different." }, drill: { jp: "むきはおなじです。", en: "They face the same way." }, accept: ["direction", "orientation", "which way it faces", "aspect"], hint: "MU-ki — two beats. From むく, to face. ⚠️ Which way a thing POINTS. ほうこう, next, is the direction you TRAVEL in — a small but real split." },
        { id: "ja-u64l3-houkou", type: "vocab", front: "ほうこう", reading: "hōkō",  meaning: "direction", example: { jp: "ほうこうがわかりません。", en: "I don't know the direction." }, drill: { jp: "ほうこうをききます。", en: "I ask for directions." }, accept: ["way", "bearing", "the direction", "heading"], hint: "HŌ-KŌ — two long beats, both held: hoh-koh. 方 (side) + 向 (facing). ⚠️ The direction of TRAVEL, where むき above is the way something faces." },
      ],
    },
    // Lesson 4: orientation & relative place
    {
      id: "ja-u64l4",
      unit: 64,
      lesson: 4,
      title: "Orientation",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe where and how — まんなか はんたい てまえ おく たて ななめ.",
      items: [
        { id: "ja-u64l4-mannaka", type: "vocab", front: "まんなか", reading: "mannaka", meaning: "center", example: { jp: "へやのまんなかにあります。", en: "It's in the center of the room." }, drill: { jp: "まんなかにテーブルをおきます。", en: "I put the table in the middle." }, accept: ["middle", "centre", "the very middle", "dead centre"], hint: "man-NA-ka — three beats, the ん held. ま, an intensifier, plus なか, the inside: the very middle. ⚠️ Stronger than なか alone — dead centre, not merely inside." },
        { id: "ja-u64l4-hantai",  type: "vocab", front: "はんたい", reading: "hantai",  meaning: "opposite", example: { jp: "はんたいにいきます。", en: "I go the opposite way." }, drill: { jp: "はんたいのてをつかいます。", en: "I use the other hand." }, accept: ["reverse", "the other way", "the opposite", "contrary"], hint: "han-TAI — two beats, the ん held, たい a diphthong. 反 (against) + 対 (facing). ⚠️ It also means OPPOSITION: はんたいします is to object to something." },
        { id: "ja-u64l4-temae",   type: "vocab", front: "てまえ",   reading: "temae",   meaning: "this side", example: { jp: "えきのてまえにあります。", en: "It's just before the station." }, drill: { jp: "てまえのみちをとおります。", en: "I take the road on this side." }, accept: ["near side", "just before", "this side of it", "nearer side"], hint: "te-MA-e — three beats, the え its own beat. て, hand, plus まえ, front: in front of your own hand. ⚠️ The side NEARER you — the shop just before the station, not past it." },
        { id: "ja-u64l4-oku",     type: "vocab", front: "おく",     reading: "oku",     meaning: "the back", example: { jp: "へやのおくにいます。", en: "I'm at the back of the room." }, drill: { jp: "おくにつくえがあります。", en: "There is a desk at the back." }, accept: ["inner part", "far end", "the back of it", "interior"], hint: "O-ku — two beats. ⚠️ The deep inside, the far end of a space. The mirror of てまえ above: てまえ is nearest you, おく is furthest in." },
        { id: "ja-u64l4-tate",    type: "vocab", front: "たて",     reading: "tate",    meaning: "vertical", example: { jp: "たてにながいです。", en: "It's long vertically." }, drill: { jp: "たてのせんをかきます。", en: "I draw a vertical line." }, accept: ["lengthwise", "up and down", "upright", "portrait"], hint: "TA-te — two beats. ⚠️ Vertical or lengthwise, the opposite of よこ back in lesson 2. たてとよこ is how you state the dimensions of anything." },
        { id: "ja-u64l4-naname",  type: "vocab", front: "ななめ",   reading: "naname",  meaning: "diagonal", example: { jp: "ななめにきります。", en: "I cut it diagonally." }, drill: { jp: "ななめにあるきます。", en: "I walk diagonally." }, accept: ["slanted", "at an angle", "oblique", "on a slant"], hint: "na-NA-me — three beats. ⚠️ On a slant, neither たて nor よこ. ななめむかい means diagonally opposite — the usual way to point across a junction." },
      ],
    },
  ],
};
