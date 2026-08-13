// Unit 109 — かんじ・うごき (Movement and change kanji) — B1 / JLPT N3
// Strand A. Verbs of motion in glyph form. Many carry the ⻌ road radical (進 退 越 過
// 追), which is the pattern worth pointing out once and reusing all unit.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the band-standard shape.
// lang/unit/lesson are stamped in src/data/index.js.
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
      canDo: "Read 変 (to change), 増 (to increase), 進 (to advance), 退 (to retreat), and the words 増加 and 退院.",
      items: [
        { id: "ja-u109l1-hen", type: "kanji", front: "変", reading: "hen", meaning: "to change", example: { jp: "会社の ほうしんが 変わって、みんな いそがしく なりました。", en: "The company's direction changed, and everyone got busy." }, accept: ["strange", "to alter", "odd"], hint: "変 = change — and also 'strange': 変な人 = an odd person. Something that has changed from what you expected." },
        { id: "ja-u109l1-zo", type: "kanji", front: "増", reading: "zō", meaning: "to increase", example: { jp: "この 町は 店が 増えて、前より にぎやかに なりました。", en: "Shops increased in this town, and it's livelier than before." }, accept: ["to grow", "addition", "to add"], hint: "増 = grow in number — 土 (earth) piling up on the left. Its opposite 減 (decrease) is the water version." },
        { id: "ja-u109l1-shin", type: "kanji", front: "進", reading: "shin", meaning: "to advance", example: { jp: "話が 前に 進んだので、来週 また 会います。", en: "The discussion moved forward, so we'll meet again next week." }, accept: ["to progress", "to go forward"], hint: "進 = go forward — the ⻌ road radical at the bottom-left marks nearly every movement kanji in this unit." },
        { id: "ja-u109l1-tai", type: "kanji", front: "退", reading: "tai", meaning: "to retreat", example: { jp: "あの 人は 去年 引退して、今は 先生を して います。", en: "That person retired last year and is now a teacher." }, accept: ["to withdraw", "to step back", "to quit"], hint: "退 = step back — the ⻌ road again, going the other way. 進退 = advance and retreat, i.e. one's position." },
        { id: "ja-u109l1-zoka", type: "vocab", front: "増加", reading: "zōka", meaning: "increase", example: { jp: "この 町は 人の 増加が 続いて います。", en: "The town's population keeps increasing." }, accept: ["growth", "rise", "to increase"] },
        { id: "ja-u109l1-taiin", type: "vocab", front: "退院", reading: "taiin", meaning: "leaving hospital", example: { jp: "父は 来週 退院して、家に 帰ります。", en: "My father leaves hospital next week and comes home." }, accept: ["discharge from hospital"], hint: "退 (withdraw) + 院 (institution). Its partner is 入院, going in." },
      ],
    },
    {
      id: "ja-u109l2",
      unit: 109,
      lesson: 2,
      title: "Passing and falling",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 越 (to cross over), 過 (to pass), 流 (to flow), 落 (to fall), and the words 過去 and 流行.",
      items: [
        { id: "ja-u109l2-etsu", type: "kanji", front: "越", reading: "etsu", meaning: "to cross over", example: { jp: "来月 新しい 家に 引っ越しますから、じゅんびが たいへんです。", en: "I'm moving to a new house next month, so getting ready is hard work." }, accept: ["to exceed", "to move house", "to pass over"], hint: "越 = go over the top of something. 引っ越し = moving house — pulling yourself over to a new place." },
        { id: "ja-u109l2-ka", type: "kanji", front: "過", reading: "ka", meaning: "to pass", example: { jp: "やくそくの 時間を 五分 過ぎましたが、まだ だれも 来ません。", en: "Five minutes past the agreed time, and still nobody has come." }, accept: ["excess", "to go past", "fault"], hint: "過 = pass by, or go too far. 過ぎる = to pass/exceed, 過去 = the past." },
        { id: "ja-u109l2-ryu", type: "kanji", front: "流", reading: "ryū", meaning: "to flow", example: { jp: "雨の あと、川の 水が はやく 流れて います。", en: "After the rain, the river is flowing fast." }, accept: ["current", "stream", "style"], hint: "流 = flow — 氵 (water) on the left. 流行 = a trend, what is flowing through society right now." },
        { id: "ja-u109l2-raku", type: "kanji", front: "落", reading: "raku", meaning: "to fall", example: { jp: "秋に なると 木の はが 落ちて、道が 赤く なります。", en: "In autumn the leaves fall and the road turns red." }, accept: ["to drop", "to fail", "to come down"], hint: "落 = fall — the 艹 grass radical on top: leaves coming down. 落ちる = to fall, 落とす = to drop something." },
        { id: "ja-u109l2-kako", type: "vocab", front: "過去", reading: "kako", meaning: "the past", example: { jp: "過去の ことは 変えられませんが、これからは 変えられます。", en: "You can't change the past, but you can change what comes next." }, accept: ["former times", "history"] },
        { id: "ja-u109l2-ryuko", type: "vocab", front: "流行", reading: "ryūkō", meaning: "a trend", example: { jp: "その 歌は 今 とても 流行して います。", en: "That song is very much in fashion right now." }, accept: ["fashion", "to be popular", "craze"], hint: "流 (flow) + 行 (go) — what is flowing through society at the moment." },
      ],
    },
    {
      id: "ja-u109l3",
      unit: 109,
      lesson: 3,
      title: "Arriving and returning",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 届 (to reach), 戻 (to go back), 返 (to give back), 渡 (to hand over), and the words 返信 and 渡り鳥.",
      items: [
        { id: "ja-u109l3-todoku", type: "kanji", front: "届", reading: "todoku", meaning: "to reach", example: { jp: "たのんだ 品が 今日 届きましたから、すぐに 使えます。", en: "The item I ordered arrived today, so I can use it right away." }, accept: ["to arrive", "to deliver", "to be delivered"], hint: "届く = it arrives (by itself); 届ける = you deliver it. Post and parcels use this pair constantly." },
        { id: "ja-u109l3-modoru", type: "kanji", front: "戻", reading: "modoru", meaning: "to go back", example: { jp: "わすれ物を したので、家に 戻りました。", en: "I'd forgotten something, so I went back home." }, accept: ["to return", "to revert"], hint: "戻る = you go back; 戻す = you put something back. 帰る is going home; 戻る is just going back." },
        { id: "ja-u109l3-kaesu", type: "kanji", front: "返", reading: "kaesu", meaning: "to give back", example: { jp: "借りた 本を 返して から、新しい 本を 借りました。", en: "I returned the book I'd borrowed, then borrowed a new one." }, accept: ["to return (a thing)", "to reply", "to repay"], hint: "返 = hand back — ⻌ road plus 反 (reverse). 返事 = a reply, the words you send back." },
        { id: "ja-u109l3-wataru", type: "kanji", front: "渡", reading: "wataru", meaning: "to hand over", example: { jp: "この 紙を 先生に 渡して から、教室に 戻って ください。", en: "Hand this paper to the teacher, then go back to the classroom." }, accept: ["to cross", "to pass to", "to go over"], hint: "渡る = to cross (a bridge); 渡す = to hand over. Both are getting something from one side to the other." },
        { id: "ja-u109l3-henshin", type: "vocab", front: "返信", reading: "henshin", meaning: "a reply", example: { jp: "メールを 読んで、すぐに 返信しました。", en: "I read the email and replied straight away." }, accept: ["response", "answer", "to write back"] },
        { id: "ja-u109l3-wataridori", type: "vocab", front: "渡り鳥", reading: "wataridori", meaning: "migratory bird", example: { jp: "秋に なると、渡り鳥が この 湖に 来ます。", en: "When autumn comes, migratory birds arrive at this lake." }, accept: ["bird of passage"], hint: "渡る (to cross) + 鳥 (bird) — the bird that crosses over." },
      ],
    },
    {
      id: "ja-u109l4",
      unit: 109,
      lesson: 4,
      title: "Hands on things",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 追 (to chase), 押 (to push), 引 (to pull), 投 (to throw), and the words 追加 and 投手.",
      items: [
        { id: "ja-u109l4-tsui", type: "kanji", front: "追", reading: "tsui", meaning: "to chase", example: { jp: "犬が 鳥を 追って 走りましたが、すぐに 見えなく なりました。", en: "The dog ran chasing a bird, but it was soon out of sight." }, accept: ["to follow", "to pursue", "additional"], hint: "追 = go after — ⻌ road again. 追加 = an addition, something chased on after the first lot." },
        { id: "ja-u109l4-osu", type: "kanji", front: "押", reading: "osu", meaning: "to push", example: { jp: "この ボタンを 押すと、ドアが 開きます。", en: "If you press this button, the door opens." }, accept: ["to press", "to shove"], hint: "押 = push — 扌 (hand) on the left, like 持 and 打. On a Japanese door, 押 means push and 引 means pull." },
        { id: "ja-u109l4-hiku", type: "kanji", front: "引", reading: "hiku", meaning: "to pull", example: { jp: "重い ドアですから、強く 引いて ください。", en: "It's a heavy door, so pull hard." }, accept: ["to draw", "to subtract", "to look up"], hint: "引 = pull — a bow 弓 with the string drawn. 引く also means to look a word up in a dictionary." },
        { id: "ja-u109l4-nageru", type: "kanji", front: "投", reading: "nageru", meaning: "to throw", example: { jp: "子どもが ボールを 投げて、犬が 走って 行きました。", en: "The child threw the ball, and the dog ran off after it." }, accept: ["to pitch", "to cast"], hint: "投 = throw — 扌 (hand) again. 投手 = a pitcher in baseball, literally the throwing hand." },
        { id: "ja-u109l4-tsuika", type: "vocab", front: "追加", reading: "tsuika", meaning: "an addition", example: { jp: "お茶を 追加で たのんで、もう 少し 話しました。", en: "I ordered another tea and we talked a while longer." }, accept: ["extra", "to add", "supplement"] },
        { id: "ja-u109l4-toshu", type: "vocab", front: "投手", reading: "tōshu", meaning: "pitcher", example: { jp: "その 投手は ボールが とても 速いです。", en: "That pitcher throws very fast." }, accept: ["baseball pitcher"] },
      ],
    },
  ],
};
