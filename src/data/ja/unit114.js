// Unit 114 — かんじ・N3・12 — B1 / JLPT N3 kanji, frequency band ~732–843.
// Kanji-item contract: each item teaches one N3 kanji via a short, natural example
// that contains the glyph in a real, correctly-read word (no spaces; the target
// compound in kanji, surrounding everyday words in kana — matching the N3 arc).
// ids + readings copied verbatim from the graded slice; meaning/example/hint authored.
// Naturalness queued for the batch native-speaker review.
export const UNIT114 = {
  id: "ja-u114", lang: "ja", title: "かんじ・N3・12", order: 114, stage: "b1",
  lessons: [
    {
      id: "ja-u114l1", unit: 114, lesson: 1, title: "N3 kanji 12·1", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 罪 (crime), 努 (effort), 精 (spirit), 散 (scatter), 静 (quiet), 婚 (marriage).",
      items: [
        { id: "ja-u114l1-zai3", type: "kanji", front: "罪", reading: "zai", meaning: "crime", example: { jp: "かれはじぶんの罪をみとめました。", en: "He admitted his crime." }, accept: ["guilt", "sin"], hint: "罪（つみ）= crime." },
        { id: "ja-u114l1-do2", type: "kanji", front: "努", reading: "do", meaning: "effort", example: { jp: "まいにち努力しています。", en: "I make an effort every day." }, accept: ["toil", "diligence"], hint: "努力（どりょく）= effort." },
        { id: "ja-u114l1-sei6", type: "kanji", front: "精", reading: "sei", meaning: "spirit", example: { jp: "しあいで精いっぱいがんばりました。", en: "I did my very best in the match." }, accept: ["refined", "energy"], hint: "精いっぱい（せいいっぱい）= with all one's might." },
        { id: "ja-u114l1-san3", type: "kanji", front: "散", reading: "san", meaning: "scatter", example: { jp: "まいあさこうえんを散歩します。", en: "I take a walk in the park every morning." }, accept: ["disperse"], hint: "散歩（さんぽ）= a walk." },
        { id: "ja-u114l1-sei7", type: "kanji", front: "静", reading: "sei", meaning: "quiet", example: { jp: "このとしょかんはとても静かです。", en: "This library is very quiet." }, accept: ["calm", "still"], hint: "静か（しずか）= quiet." },
        { id: "ja-u114l1-kon", type: "kanji", front: "婚", reading: "kon", meaning: "marriage", example: { jp: "ふたりはらいげつ結婚します。", en: "The two of them will get married next month." }, accept: ["wedding"], hint: "結婚（けっこん）= marriage." },
      ],
    },
    {
      id: "ja-u114l2", unit: 114, lesson: 2, title: "N3 kanji 12·2", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 喜 (rejoice), 浮 (float), 絶 (cut off), 幸 (happiness), 押 (push), 倒 (fall over).",
      items: [
        { id: "ja-u114l2-ki7", type: "kanji", front: "喜", reading: "ki", meaning: "rejoice", example: { jp: "プレゼントをもらってとても喜びました。", en: "I received a present and was very pleased." }, accept: ["be glad", "delight"], hint: "喜ぶ（よろこぶ）= be delighted." },
        { id: "ja-u114l2-fu6", type: "kanji", front: "浮", reading: "fu", meaning: "float", example: { jp: "ボールがみずに浮いています。", en: "The ball is floating on the water." }, accept: ["floating", "rise"], hint: "浮く（うく）= float." },
        { id: "ja-u114l2-zetsu", type: "kanji", front: "絶", reading: "zetsu", meaning: "cut off", example: { jp: "このえいがは絶対におもしろいです。", en: "This movie is definitely interesting." }, accept: ["sever", "discontinue"], hint: "絶対（ぜったい）= absolutely." },
        { id: "ja-u114l2-ko11", type: "kanji", front: "幸", reading: "kō", meaning: "happiness", example: { jp: "かぞくといてとても幸せです。", en: "I'm very happy being with my family." }, accept: ["fortune", "blessing"], hint: "幸せ（しあわせ）= happy." },
        { id: "ja-u114l2-o3", type: "kanji", front: "押", reading: "ō", meaning: "push", example: { jp: "このボタンを押してください。", en: "Please push this button." }, accept: ["press", "shove"], hint: "押す（おす）= push." },
        { id: "ja-u114l2-to8", type: "kanji", front: "倒", reading: "tō", meaning: "fall over", example: { jp: "つよいかぜできが倒れました。", en: "A tree fell over in the strong wind." }, accept: ["collapse", "overthrow"], hint: "倒れる（たおれる）= fall over." },
      ],
    },
    {
      id: "ja-u114l3", unit: 114, lesson: 3, title: "N3 kanji 12·3", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 等 (etc.), 老 (old age), 曲 (tune), 払 (pay), 庭 (garden), 徒 (pupil).",
      items: [
        { id: "ja-u114l3-to9", type: "kanji", front: "等", reading: "tō", meaning: "etc.", example: { jp: "みせでりんごやみかん等をかいました。", en: "At the store I bought apples, oranges, and so on." }, accept: ["and so forth", "equal"], hint: "など = etc." },
        { id: "ja-u114l3-ro3", type: "kanji", front: "老", reading: "rō", meaning: "old age", example: { jp: "このこうえんは老人がおおいです。", en: "There are many elderly people in this park." }, accept: ["old man", "grow old"], hint: "老人（ろうじん）= elderly person." },
        { id: "ja-u114l3-kyoku2", type: "kanji", front: "曲", reading: "kyoku", meaning: "tune", example: { jp: "この曲がだいすきです。", en: "I love this song." }, accept: ["song", "melody", "bend"], hint: "曲（きょく）= musical piece." },
        { id: "ja-u114l3-futsu", type: "kanji", front: "払", reading: "futsu", meaning: "pay", example: { jp: "レジでおかねを払います。", en: "I pay the money at the register." }, accept: ["clear out"], hint: "払う（はらう）= pay." },
        { id: "ja-u114l3-tei3", type: "kanji", front: "庭", reading: "tei", meaning: "garden", example: { jp: "うちの庭にはながさいています。", en: "Flowers are blooming in our garden." }, accept: ["courtyard", "yard"], hint: "庭（にわ）= garden." },
        { id: "ja-u114l3-to10", type: "kanji", front: "徒", reading: "to", meaning: "pupil", example: { jp: "このがっこうの生徒はしんせつです。", en: "The students at this school are kind." }, accept: ["on foot", "follower"], hint: "生徒（せいと）= pupil." },
      ],
    },
    {
      id: "ja-u114l4", unit: 114, lesson: 4, title: "N3 kanji 12·4", cefr: "B1", dominantMode: "recall",
      canDo: "Read six N3 kanji: 勤 (work), 遅 (late), 居 (reside), 雑 (miscellaneous), 招 (invite), 困 (be troubled).",
      items: [
        { id: "ja-u114l4-kin", type: "kanji", front: "勤", reading: "kin", meaning: "work", example: { jp: "ちちはぎんこうに勤めています。", en: "My father works at a bank." }, accept: ["serve", "diligence"], hint: "勤める（つとめる）= be employed at." },
        { id: "ja-u114l4-chi3", type: "kanji", front: "遅", reading: "chi", meaning: "late", example: { jp: "でんしゃが遅れています。", en: "The train is delayed." }, accept: ["slow", "later"], hint: "遅れる（おくれる）= be late." },
        { id: "ja-u114l4-kyo4", type: "kanji", front: "居", reading: "kyo", meaning: "reside", example: { jp: "ゆうがた、居間でほんをよみます。", en: "In the evening I read in the living room." }, accept: ["dwell", "be present"], hint: "居間（いま）= living room." },
        { id: "ja-u114l4-zatsu", type: "kanji", front: "雑", reading: "zatsu", meaning: "miscellaneous", example: { jp: "となりのへやから雑音がきこえます。", en: "I hear noise from the next room." }, accept: ["mixed", "rough"], hint: "雑音（ざつおん）= noise." },
        { id: "ja-u114l4-sho7", type: "kanji", front: "招", reading: "shō", meaning: "invite", example: { jp: "たんじょうびにともだちを招待します。", en: "I'll invite my friends to my birthday." }, accept: ["beckon", "summon"], hint: "招待（しょうたい）= invitation." },
        { id: "ja-u114l4-kon2", type: "kanji", front: "困", reading: "kon", meaning: "be troubled", example: { jp: "おかねがなくて困っています。", en: "I'm in trouble because I have no money." }, accept: ["quandary", "distressed"], hint: "困る（こまる）= be in trouble." },
      ],
    },
  ],
};
