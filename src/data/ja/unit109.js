// Unit 109 — かんじ・うごき (Movement and change kanji) — B1 / JLPT N3
// Strand A. Verbs of motion in glyph form. Many carry the ⻌ road radical (進 退 越 過
// 追), which is the pattern worth pointing out once and reusing all unit.
// 3 lessons x 6/5/5 = 16 glyphs. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT109 = {
  id: "ja-u109",
  lang: "ja",
  title: "かんじ・うごき",
  order: 109,
  stage: "b1",
  lessons: [
    {
      id: "ja-u109l1",
      unit: 109,
      lesson: 1,
      title: "Forward and back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of moving through something: 変 (change), 増 (increase), 進 (advance), 退 (retreat), 越 (cross over), 過 (pass).",
      items: [
        { id: "ja-u109l1-hen", type: "kanji", front: "変", reading: "hen", meaning: "to change", example: { jp: "会社の ほうしんが 変わって、みんな いそがしく なりました。", en: "The company's direction changed, and everyone got busy." }, accept: ["strange", "to alter", "odd"], hint: "変 = change — and also 'strange': 変な人 = an odd person. Something that has changed from what you expected." },
        { id: "ja-u109l1-zo", type: "kanji", front: "増", reading: "zō", meaning: "to increase", example: { jp: "この 町は 店が 増えて、前より にぎやかに なりました。", en: "Shops increased in this town, and it's livelier than before." }, accept: ["to grow", "addition", "to add"], hint: "増 = grow in number — 土 (earth) piling up on the left. Its opposite 減 (decrease) is the water version." },
        { id: "ja-u109l1-shin", type: "kanji", front: "進", reading: "shin", meaning: "to advance", example: { jp: "話が 前に 進んだので、来週 また 会います。", en: "The discussion moved forward, so we'll meet again next week." }, accept: ["to progress", "to go forward"], hint: "進 = go forward — the ⻌ road radical at the bottom-left marks nearly every movement kanji in this unit." },
        { id: "ja-u109l1-tai", type: "kanji", front: "退", reading: "tai", meaning: "to retreat", example: { jp: "あの 人は 去年 引退して、今は 先生を して います。", en: "That person retired last year and is now a teacher." }, accept: ["to withdraw", "to step back", "to quit"], hint: "退 = step back — the ⻌ road again, going the other way. 進退 = advance and retreat, i.e. one's position." },
        { id: "ja-u109l1-etsu", type: "kanji", front: "越", reading: "etsu", meaning: "to cross over", example: { jp: "来月 新しい 家に 引っ越しますから、じゅんびが たいへんです。", en: "I'm moving to a new house next month, so getting ready is hard work." }, accept: ["to exceed", "to move house", "to pass over"], hint: "越 = go over the top of something. 引っ越し = moving house — pulling yourself over to a new place." },
        { id: "ja-u109l1-ka", type: "kanji", front: "過", reading: "ka", meaning: "to pass", example: { jp: "やくそくの 時間を 五分 過ぎましたが、まだ だれも 来ません。", en: "Five minutes past the agreed time, and still nobody has come." }, accept: ["excess", "to go past", "fault"], hint: "過 = pass by, or go too far. 過ぎる = to pass/exceed, 過去 = the past." },
      ],
    },
    {
      id: "ja-u109l2",
      unit: 109,
      lesson: 2,
      title: "Coming and going back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of things arriving and returning: 流 (flow), 落 (fall), 届 (reach), 戻 (return), 返 (give back).",
      items: [
        { id: "ja-u109l2-ryu", type: "kanji", front: "流", reading: "ryū", meaning: "to flow", example: { jp: "雨の あと、川の 水が はやく 流れて います。", en: "After the rain, the river is flowing fast." }, accept: ["current", "stream", "style"], hint: "流 = flow — 氵 (water) on the left. 流行 = a trend, what is flowing through society right now." },
        { id: "ja-u109l2-raku", type: "kanji", front: "落", reading: "raku", meaning: "to fall", example: { jp: "秋に なると 木の はが 落ちて、道が 赤く なります。", en: "In autumn the leaves fall and the road turns red." }, accept: ["to drop", "to fail", "to come down"], hint: "落 = fall — the 艹 grass radical on top: leaves coming down. 落ちる = to fall, 落とす = to drop something." },
        { id: "ja-u109l2-todoku", type: "kanji", front: "届", reading: "todoku", meaning: "to reach", example: { jp: "たのんだ 品が 今日 届きましたから、すぐに 使えます。", en: "The item I ordered arrived today, so I can use it right away." }, accept: ["to arrive", "to deliver", "to be delivered"], hint: "届く = it arrives (by itself); 届ける = you deliver it. Post and parcels use this pair constantly." },
        { id: "ja-u109l2-modoru", type: "kanji", front: "戻", reading: "modoru", meaning: "to go back", example: { jp: "わすれ物を したので、家に 戻りました。", en: "I'd forgotten something, so I went back home." }, accept: ["to return", "to revert"], hint: "戻る = you go back; 戻す = you put something back. 帰る is going home; 戻る is just going back." },
        { id: "ja-u109l2-kaesu", type: "kanji", front: "返", reading: "kaesu", meaning: "to give back", example: { jp: "借りた 本を 返して から、新しい 本を 借りました。", en: "I returned the book I'd borrowed, then borrowed a new one." }, accept: ["to return (a thing)", "to reply", "to repay"], hint: "返 = hand back — ⻌ road plus 反 (reverse). 返事 = a reply, the words you send back." },
      ],
    },
    {
      id: "ja-u109l3",
      unit: 109,
      lesson: 3,
      title: "Hands on things",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the kanji of handling something: 渡 (hand over), 追 (chase), 押 (push), 引 (pull), 投 (throw).",
      items: [
        { id: "ja-u109l3-wataru", type: "kanji", front: "渡", reading: "wataru", meaning: "to hand over", example: { jp: "この 紙を 先生に 渡して から、教室に 戻って ください。", en: "Hand this paper to the teacher, then go back to the classroom." }, accept: ["to cross", "to pass to", "to go over"], hint: "渡る = to cross (a bridge); 渡す = to hand over. Both are getting something from one side to the other." },
        { id: "ja-u109l3-tsui", type: "kanji", front: "追", reading: "tsui", meaning: "to chase", example: { jp: "犬が 鳥を 追って 走りましたが、すぐに 見えなく なりました。", en: "The dog ran chasing a bird, but it was soon out of sight." }, accept: ["to follow", "to pursue", "additional"], hint: "追 = go after — ⻌ road again. 追加 = an addition, something chased on after the first lot." },
        { id: "ja-u109l3-osu", type: "kanji", front: "押", reading: "osu", meaning: "to push", example: { jp: "この ボタンを 押すと、ドアが 開きます。", en: "If you press this button, the door opens." }, accept: ["to press", "to shove"], hint: "押 = push — 扌 (hand) on the left, like 持 and 打. On a Japanese door, 押 means push and 引 means pull." },
        { id: "ja-u109l3-hiku", type: "kanji", front: "引", reading: "hiku", meaning: "to pull", example: { jp: "重い ドアですから、強く 引いて ください。", en: "It's a heavy door, so pull hard." }, accept: ["to draw", "to subtract", "to look up"], hint: "引 = pull — a bow 弓 with the string drawn. 引く also means to look a word up in a dictionary." },
        { id: "ja-u109l3-nageru", type: "kanji", front: "投", reading: "nageru", meaning: "to throw", example: { jp: "子どもが ボールを 投げて、犬が 走って 行きました。", en: "The child threw the ball, and the dog ran off after it." }, accept: ["to pitch", "to cast"], hint: "投 = throw — 扌 (hand) again. 投手 = a pitcher in baseball, literally the throwing hand." },
      ],
    },
  ],
};
