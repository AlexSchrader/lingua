// JA Unit 119 — かんじ・N3・11 (N3 kanji, set 11) — B1 / JLPT N3
// ─────────────────────────────────────────────────────────────────────────────
// Kanji-unit shape for this block, and where the glyphs come from.
//
// GLYPH OWNERSHIP — derived, not negotiated. The N3 superset in
// scripts/fetch-kanjivg.mjs is 334 glyphs; 14 of them are already taught in the
// N4 units, leaving exactly 320 untaught, which is exactly 20 slices of 16 for
// the band's 20 character units. Unit "Characters k" takes slice k in list order,
// so block 2 owns slices 11-20 and no seat has to message another to find out
// what is left. If block 1 derives the same rule it lands on the same split; if
// it doesn't, lower unit order wins at merge and this unit gives way.
//
// CARD SHAPE — 4 lessons x (4 kanji + 2 compound) = 24, the blueprint's number.
// 16 glyphs cannot fill 24 kanji cards, and padding with unrelated vocab would
// waste the slot; compounds built from the four glyphs just taught are the
// natural filler, and they are where N3 kanji actually get used. Compound fronts
// are written in kanji (vocab fronts are exempt from teach-front scope) and every
// one was checked against the corpus BY READING, not by front — 30 of the first
// 80 candidates turned out to be words the corpus already teaches in kana, which
// a front-uniqueness check alone would never have caught.
//
// Examples in kanji here, unlike this block's vocab units: they use the target
// glyph plus glyphs already taught, which is what the shipped kanji units u31-u42
// do and the only way a kanji example can do its job.
// ─────────────────────────────────────────────────────────────────────────────
export const UNIT119 = {
  id: "ja-u119",
  lang: "ja",
  title: "かんじ・N3・11",
  order: 119,
  stage: "b1",
  lessons: [
    {
      id: "ja-u119l1",
      unit: 119,
      lesson: 1,
      title: "Groups and sides",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 組 (group), 相 (mutual), 争 (conflict), 窓 (window), and the words 窓口 and 二人組.",
      items: [
        { id: "ja-u119l1-kumi", type: "kanji", front: "組", reading: "kumi", meaning: "group", example: { jp: "同じ組になったので、すぐ友だちになりました。", en: "We ended up in the same class group, so we became friends right away." }, accept: ["class", "set", "team"], hint: "組 = things bound into one set — 糸 (thread) tying them together. 二人組 = a pair, 組み立て = assembling." },
        { id: "ja-u119l1-ai", type: "kanji", front: "相", reading: "ai", meaning: "mutual", example: { jp: "相手の話を聞いてから、答えます。", en: "I listen to the other person first, and then answer." }, accept: ["each other", "the other party", "partner"], hint: "相 = 木 (tree) + 目 (eye) — two things looking at each other. 相手 = the other party, 相談 = talking it over." },
        { id: "ja-u119l1-arasoi", type: "kanji", front: "争", reading: "arasoi", meaning: "conflict", example: { jp: "小さな争いでしたが、二人はもう話しません。", en: "It was a small conflict, but the two of them no longer speak." }, accept: ["dispute", "struggle", "war"], hint: "争 = two hands pulling at the same thing. 戦争 = war, 競争 = competition." },
        { id: "ja-u119l1-mado", type: "kanji", front: "窓", reading: "mado", meaning: "window", example: { jp: "窓を開けると、風が入ってきます。", en: "When you open the window, the wind comes in." }, accept: ["a window"], hint: "窓 = an opening in a wall — 穴 (hole) above 心. 窓口 = a service window / counter." },
        { id: "ja-u119l1-madoguchi", type: "vocab", front: "窓口", reading: "madoguchi", meaning: "service counter", example: { jp: "窓口はこんでいましたが、十分でおわりました。", en: "The counter was crowded, but it was over in ten minutes." }, accept: ["ticket window", "front desk", "the window"] },
        { id: "ja-u119l1-futarigumi", type: "vocab", front: "二人組", reading: "futarigumi", meaning: "a pair", example: { jp: "二人組で来ましたが、話すのは一人だけでした。", en: "They came as a pair, but only one of them did the talking." }, accept: ["duo", "the two of them", "a twosome"] },
      ],
    },
    {
      id: "ja-u119l2",
      unit: 119,
      lesson: 2,
      title: "The そう・ぞう series",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read four kanji that all sound そう or ぞう and tell them apart by meaning: 総 想 像 増.",
      items: [
        { id: "ja-u119l2-soutotal", type: "kanji", front: "総", reading: "sō", meaning: "total", example: { jp: "総時間は五時間ですが、休みも入っています。", en: "The total time is five hours, but that includes breaks." }, accept: ["overall", "general", "gross"], hint: "総 = everything gathered — 糸 (thread) drawing it all into one bundle. Sounds そう, like 想. 総合 = overall." },
        { id: "ja-u119l2-souomoi", type: "kanji", front: "想", reading: "sō", meaning: "a thought", example: { jp: "子どものころの理想は、今も同じです。", en: "The ideal I had as a child is still the same today." }, accept: ["idea", "conception", "notion"], hint: "想 = 相 (look at) + 心 (heart) — what your heart looks at. Same sound as 総, but this one has a 心 in it." },
        { id: "ja-u119l2-zouzou", type: "kanji", front: "像", reading: "zō", meaning: "figure", example: { jp: "こうえんの前に大きな像が立っていますが、名前は分かりません。", en: "There's a large statue standing in front of the park, but I don't know its name." }, accept: ["statue", "image", "likeness"], hint: "像 = 人 (person) + 象 — a person-shape made of something. 想像 = imagination: a thought you can see." },
        { id: "ja-u119l2-zoufueru", type: "kanji", front: "増", reading: "zō", meaning: "increase", example: { jp: "店が増えたので、町がにぎやかになりました。", en: "The shops increased, so the town got lively." }, accept: ["grow", "add to", "rise"], hint: "増 = 土 (earth) piled up higher and higher. Sounds ぞう like 像, but this one is about amount, not shape." },
        { id: "ja-u119l2-gazo", type: "vocab", front: "画像", reading: "gazō", meaning: "an image", example: { jp: "画像は小さいですが、字は読めます。", en: "The image is small, but the writing is readable." }, accept: ["picture", "graphic", "still"] },
        { id: "ja-u119l2-riso", type: "vocab", front: "理想", reading: "risō", meaning: "ideal", example: { jp: "理想は高いですが、まず今できることをします。", en: "My ideals are lofty, but first I do what I can now." }, accept: ["the ideal", "one's ideal", "aspiration"] },
      ],
    },
    {
      id: "ja-u119l3",
      unit: 119,
      lesson: 3,
      title: "Making and measuring",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 造 (construct), 側 (side), 則 (rule), 測 (measure), and the words 右側 and 木造.",
      items: [
        { id: "ja-u119l3-zoutsukuru", type: "kanji", front: "造", reading: "zō", meaning: "construct", example: { jp: "この家は木造ですが、火には強いそうです。", en: "This house is wooden construction, but apparently it's strong against fire." }, accept: ["build", "manufacture", "make"], hint: "造 = 辶 (go) + 告 — building something up step by step. 木造 = wooden-built, 造船 = shipbuilding." },
        { id: "ja-u119l3-gawa", type: "kanji", front: "側", reading: "gawa", meaning: "side", example: { jp: "駅の右側に店がありますが、左側には何もありません。", en: "There are shops on the right side of the station, but nothing on the left." }, accept: ["the side", "flank"], hint: "側 = 人 (person) standing beside — the side you're on. 右側 = the right-hand side." },
        { id: "ja-u119l3-sokurule", type: "kanji", front: "則", reading: "soku", meaning: "rule", example: { jp: "校則は多いですが、みんな気にしていません。", en: "There are a lot of school rules, but nobody minds them." }, accept: ["regulation", "principle", "law"], hint: "則 = a rule carved beside 刂 (a blade) — cut in stone. 校則 = school rules, 原則 = a general principle." },
        { id: "ja-u119l3-sokuhakaru", type: "kanji", front: "測", reading: "soku", meaning: "measure", example: { jp: "時間を測ったら、思ったより早かったです。", en: "When I measured the time, it was faster than I thought." }, accept: ["gauge", "take a measurement", "survey"], hint: "測 = 氵 (water) + 則 (rule) — laying a rule against water to read the depth. Same そく sound as 則, and the same right half." },
        { id: "ja-u119l3-migigawa", type: "vocab", front: "右側", reading: "migigawa", meaning: "the right-hand side", example: { jp: "右側を歩いてください、左側は車が通ります。", en: "Please walk on the right-hand side; cars pass on the left." }, accept: ["right side", "on the right"] },
        { id: "ja-u119l3-mokuzo", type: "vocab", front: "木造", reading: "mokuzō", meaning: "wooden-built", example: { jp: "木造の家はあたたかいですが、音がよく聞こえます。", en: "A wooden-built house is warm, but you hear sounds through it." }, accept: ["made of wood", "timber construction"] },
      ],
    },
    {
      id: "ja-u119l4",
      unit: 119,
      lesson: 4,
      title: "Speed and continuing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 束 (bundle), 速 (fast), 続 (continue), 存 (exist), and the words 速度 and 高速.",
      items: [
        { id: "ja-u119l4-taba", type: "kanji", front: "束", reading: "taba", meaning: "bundle", example: { jp: "花を一束買って、母に送りました。", en: "I bought a bundle of flowers and sent them to my mother." }, accept: ["bunch", "sheaf", "a bundle"], hint: "束 = 木 (wood) with a band tied round the middle. 花束 = a bouquet, 約束 = a promise: words tied together." },
        { id: "ja-u119l4-hayai", type: "kanji", front: "速", reading: "hayai", meaning: "fast", example: { jp: "この電車は速いですが、朝は人が多いです。", en: "This train is fast, but there are a lot of people in the morning." }, accept: ["quick", "rapid", "speedy"], hint: "速 = 辶 (go) + 束 (bundle) — going in one tight bundle, no wandering. Note 早い is early in TIME; 速い is fast in SPEED." },
        { id: "ja-u119l4-tsuzuku", type: "kanji", front: "続", reading: "tsuzuku", meaning: "continue", example: { jp: "雨が続いているので、山には行きません。", en: "The rain is continuing, so I won't go to the mountains." }, accept: ["go on", "carry on", "last"], hint: "続 = 糸 (thread) running on and on without breaking. 続けます = keep doing, 連続 = a run of something." },
        { id: "ja-u119l4-son", type: "kanji", front: "存", reading: "son", meaning: "exist", example: { jp: "先生のお名前はよく存じていますが、会ったことはありません。", en: "I know the teacher's name well, but I've never met them." }, accept: ["be", "know (humble)", "there is"], hint: "存 = something that is there and stays there. ご存じ = you know (polite), 存在 = existence." },
        { id: "ja-u119l4-sokudo", type: "vocab", front: "速度", reading: "sokudo", meaning: "speed", example: { jp: "速度をおとせばあんぜんですが、時間がかかります。", en: "If you drop your speed it's safe, but it takes time." }, accept: ["pace", "velocity", "rate"] },
        { id: "ja-u119l4-kosoku", type: "vocab", front: "高速", reading: "kōsoku", meaning: "high speed", example: { jp: "高速で行けば早いですが、お金がかかります。", en: "It's quick if you take the expressway, but it costs money." }, accept: ["expressway", "motorway", "fast"] },
      ],
    },
  ],
};
