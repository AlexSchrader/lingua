// JA Unit 128 — かんじ・つくる (N3 kanji — making and measuring) — B1 / JLPT N3
// Glyph ownership and card shape are documented in unit119.js: slice 16 of the
// pool that remains once block 1's authored 160 glyphs are subtracted.
//
// 規 came here from u121 so that it sits beside 則: its only everyday words are
// 規則 and 規模, and 模 is taught by nobody. 規則 cannot be a compound FRONT — the
// corpus already teaches きそく in kana, so the kanji spelling would be the same
// word twice — but it is fine inside an example, which is where it appears.
export const UNIT128 = {
  id: "ja-u128",
  lang: "ja",
  title: "かんじ・つくる",
  order: 128,
  stage: "b1",
  lessons: [
    {
      id: "ja-u128l1",
      unit: 128,
      lesson: 1,
      title: "Making, standards, contact",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 製 (manufacture), 規 (standard), 接 (come into contact), 絶 (sever), and the words 製品 and 接近.",
      items: [
        { id: "ja-u128l1-sei", type: "kanji", front: "製", reading: "sei", meaning: "manufacture", example: { jp: "日本製の車は高いですが、長く使えます。", en: "Japanese-made cars are expensive, but they last a long time." }, accept: ["made in", "produce", "manufactured"], hint: "製 = 衣 (cloth) cut 刂 to a pattern. 日本製 = made in Japan, 製品 = a manufactured article." },
        { id: "ja-u128l1-ki", type: "kanji", front: "規", reading: "ki", meaning: "standard", example: { jp: "会社の規則は多いですが、みんな守っています。", en: "The company has a lot of rules, but everyone keeps to them." }, accept: ["rule", "norm", "measure"], hint: "規 = 夫 + 見 — measuring a thing against an agreed size. 規則 = regulations." },
        { id: "ja-u128l1-setsu", type: "kanji", front: "接", reading: "setsu", meaning: "come into contact", example: { jp: "台風が接近していますが、まだ雨はふっていません。", en: "The typhoon is approaching, but it isn't raining yet." }, accept: ["touch", "adjoin", "receive"], hint: "接 = 扌 (hand) reaching until it touches. 接近 = drawing near, 面接 = an interview: meeting face to face." },
        { id: "ja-u128l1-zetsu", type: "kanji", front: "絶", reading: "taeru", meaning: "sever", example: { jp: "雨が絶えず二日ふりましたが、川はあふれませんでした。", en: "It rained without a break for two days, but the river didn't flood." }, accept: ["cut off", "cease", "extinct"], hint: "絶 = 糸 (thread) cut clean through. 絶えず = without ceasing, 絶対 = absolutely." },
        { id: "ja-u128l1-seihin", type: "vocab", front: "製品", reading: "seihin", meaning: "a manufactured product", example: { jp: "この製品は安いですが、作りはしっかりしています。", en: "This product is cheap, but it is solidly made." }, accept: ["product", "goods", "an article"] },
        { id: "ja-u128l1-sekkin", type: "vocab", front: "接近", reading: "sekkin", meaning: "drawing near", example: { jp: "車が接近してきたので、道の右がわに立ちました。", en: "A car was drawing near, so I stood on the right of the road." }, accept: ["approach", "closing in", "proximity"] },
      ],
    },
    {
      id: "ja-u128l2",
      unit: 128,
      lesson: 2,
      title: "Snow, so, and grouping",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 雪 (snow), 然 (in that way), 組 (group), 相 (mutual), and the words 大雪 and 二人組.",
      items: [
        { id: "ja-u128l2-yuki", type: "kanji", front: "雪", reading: "yuki", meaning: "snow", example: { jp: "雪がふりましたが、道はこおりませんでした。", en: "It snowed, but the roads didn't ice over." }, accept: ["snowfall", "snowy"], hint: "雪 = 雨 (rain) + a hand sweeping — the rain you have to clear away. 大雪 = heavy snow." },
        { id: "ja-u128l2-zen", type: "kanji", front: "然", reading: "zen", meaning: "in that way", example: { jp: "とう然のことですが、みんなはおどろきました。", en: "It was only natural, but everyone was surprised." }, accept: ["so", "-ly (suffix)", "thus"], hint: "然 = the tail of many adverbs: とう然 = naturally, ぐう然 = by chance. Rarely used alone." },
        { id: "ja-u128l2-kumi", type: "kanji", front: "組", reading: "kumi", meaning: "group", example: { jp: "同じ組になったので、すぐ友だちになりました。", en: "We ended up in the same class group, so we became friends right away." }, accept: ["class", "set", "team"], hint: "組 = things bound into one set — 糸 (thread) tying them together. 二人組 = a pair, 組み立て = assembling." },
        { id: "ja-u128l2-ai", type: "kanji", front: "相", reading: "ai", meaning: "mutual", example: { jp: "相手の話を聞いてから、答えます。", en: "I listen to the other person first, and then answer." }, accept: ["each other", "the other party", "partner"], hint: "相 = 木 (tree) + 目 (eye) — two things looking at each other. 相手 = the other party, 相談 = talking it over." },
        { id: "ja-u128l2-oyuki", type: "vocab", front: "大雪", reading: "ōyuki", meaning: "heavy snow", example: { jp: "大雪でしたが、電車はとまりませんでした。", en: "There was heavy snow, but the trains didn't stop." }, accept: ["a big snowfall", "snowstorm"] },
        { id: "ja-u128l2-futarigumi", type: "vocab", front: "二人組", reading: "futarigumi", meaning: "a pair", example: { jp: "二人組で来ましたが、話すのは一人だけでした。", en: "They came as a pair, but only one of them did the talking." }, accept: ["duo", "the two of them", "a twosome"] },
      ],
    },
    {
      id: "ja-u128l3",
      unit: 128,
      lesson: 3,
      title: "Images, building, measuring",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 像 (figure), 造 (construct), 則 (rule), 測 (measure), and the words 画像 and 木造.",
      items: [
        { id: "ja-u128l3-zo", type: "kanji", front: "像", reading: "zō", meaning: "figure", example: { jp: "こうえんの前に大きな像が立っていますが、名前は分かりません。", en: "There's a large statue in front of the park, but I don't know its name." }, accept: ["statue", "image", "likeness"], hint: "像 = 人 (person) + 象 — a person-shape made of something. 画像 = an image on a screen." },
        { id: "ja-u128l3-tsukuru", type: "kanji", front: "造", reading: "zō", meaning: "construct", example: { jp: "この家は木造ですが、火には強いそうです。", en: "This house is wooden construction, but apparently it's strong against fire." }, accept: ["build", "manufacture", "make"], hint: "造 = 辶 (go) + 告 — building something up step by step. 木造 = wooden-built. Its on-yomi is ぞう, like 像." },
        { id: "ja-u128l3-soku", type: "kanji", front: "則", reading: "soku", meaning: "rule", example: { jp: "校則は多いですが、みんな気にしていません。", en: "There are a lot of school rules, but nobody minds them." }, accept: ["regulation", "principle", "law"], hint: "則 = a rule carved beside 刂 (a blade) — cut in stone. 校則 = school rules, 規則 = regulations." },
        { id: "ja-u128l3-hakaru", type: "kanji", front: "測", reading: "hakaru", meaning: "measure", example: { jp: "時間を測ったら、思ったより早かったです。", en: "When I measured the time, it was faster than I thought." }, accept: ["gauge", "take a measurement", "survey"], hint: "測 = 氵 (water) + 則 (rule) — laying a rule against water to read the depth. Its on-yomi is そく, like 則, and the same right half." },
        { id: "ja-u128l3-gazo", type: "vocab", front: "画像", reading: "gazō", meaning: "an image", example: { jp: "画像は小さいですが、字は読めます。", en: "The image is small, but the writing is readable." }, accept: ["picture", "graphic", "still"] },
        { id: "ja-u128l3-mokuzo", type: "vocab", front: "木造", reading: "mokuzō", meaning: "wooden-built", example: { jp: "木造の家はあたたかいですが、音がよく聞こえます。", en: "A wooden-built house is warm, but you hear sounds through it." }, accept: ["made of wood", "timber construction"] },
      ],
    },
    {
      id: "ja-u128l4",
      unit: 128,
      lesson: 4,
      title: "Others, striking, facing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 他 (other), 打 (strike), 対 (facing), 隊 (squad), and the words 他国 and 対話.",
      items: [
        { id: "ja-u128l4-ta", type: "kanji", front: "他", reading: "hoka", meaning: "other", example: { jp: "他の店にも行きましたが、ここがいちばん安かったです。", en: "I went to other shops too, but this one was the cheapest." }, accept: ["another", "else", "the rest"], hint: "他 = 人 (person) + 也 — a person who is not this one. 他国 = another country, その他 = and others." },
        { id: "ja-u128l4-utsu", type: "kanji", front: "打", reading: "utsu", meaning: "strike", example: { jp: "メールを打ってから、電話をかけました。", en: "I typed the email, and then made the call." }, accept: ["hit", "type", "beat"], hint: "打 = 扌 (hand) + 丁 (nail) — a hand driving a nail. Used for hitting, and for typing on a keyboard." },
        { id: "ja-u128l4-tai", type: "kanji", front: "対", reading: "tai", meaning: "facing", example: { jp: "先生と一対一で話しましたが、答えは同じでした。", en: "I spoke with the teacher one-to-one, but the answer was the same." }, accept: ["opposite", "versus", "toward"], hint: "対 = two things set opposite each other. 反対 = the opposite, 対話 = a dialogue between two sides." },
        { id: "ja-u128l4-gun", type: "kanji", front: "隊", reading: "tai", meaning: "squad", example: { jp: "山に行った隊は無事でしたが、道はきびしかったです。", en: "The party that went into the mountains was safe, but the route was harsh." }, accept: ["unit", "corps", "party"], hint: "隊 = a line of people moving together down a slope 阝. Its on-yomi is たい, like 対." },
        { id: "ja-u128l4-takoku", type: "vocab", front: "他国", reading: "takoku", meaning: "another country", example: { jp: "他国の話を聞くと、自分の国のこともよく分かります。", en: "When you hear about another country, you understand your own better too." }, accept: ["a foreign country", "other countries"] },
        { id: "ja-u128l4-taiwa", type: "vocab", front: "対話", reading: "taiwa", meaning: "dialogue", example: { jp: "対話をつづけていますが、まだ答えは出ていません。", en: "The dialogue is continuing, but no answer has come out yet." }, accept: ["talks", "conversation", "discussion"] },
      ],
    },
  ],
};
