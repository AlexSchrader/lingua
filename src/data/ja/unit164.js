// Unit 164 — かんじ・くらしと しゃかい — B2 / JLPT N2
// Strand A. N2 glyphs for daily life and society — mixing and checking, family and
// disaster, crime and wealth, thanks and study. Slot new[48:64] of the deduped N2 list.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards; every compound kanji is taught
// at or before this unit — verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT164 = {
  id: "ja-u164",
  lang: "ja",
  title: "かんじ・くらしと しゃかい",
  order: 164,
  stage: "b2",
  lessons: [
    {
      id: "ja-u164l1",
      unit: 164,
      lesson: 1,
      title: "Mixing and checking",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 混 (to mix), 査 (to investigate), 再 (again), 妻 (wife), and the words 混雑 and 検査.",
      items: [
        { id: "ja-u164l1-6df7", type: "kanji", front: "混", reading: "kon", meaning: "to mix", example: { jp: "あさの 電車は いつも とても 混みます。", en: "The morning trains are always very crowded." }, accept: ["to be crowded", "to blend"], hint: "混む (komu) = to be crowded; 混ぜる (mazeru) = to mix. Same glyph, both senses of things pressed together." },
        { id: "ja-u164l1-67fb", type: "kanji", front: "査", reading: "sa", meaning: "to investigate", example: { jp: "工場では せいひんを 一つずつ 検査します。", en: "At the factory they inspect the products one by one." }, accept: ["to inspect", "to survey"], hint: "査 rarely stands alone — it lives in 検査 (inspection), 調査 (a survey), 審査 (screening)." },
        { id: "ja-u164l1-518d", type: "kanji", front: "再", reading: "sai", meaning: "again", example: { jp: "かれとは 十年後に 再び 会いました。", en: "I met him again ten years later." }, accept: ["once more", "re-"], hint: "再び (futatabi) = once more. As a prefix it means 're-': 再開 = reopening, 再利用 = reuse." },
        { id: "ja-u164l1-59bb", type: "kanji", front: "妻", reading: "tsuma", meaning: "wife", example: { jp: "妻と いっしょに 買いものに 行きました。", en: "I went shopping together with my wife." }, accept: ["one's own wife"], hint: "妻 is your OWN wife; 奥さん is someone else's. The reading tsuma is the everyday word." },
        { id: "ja-u164l1-konzatsu", type: "vocab", front: "混雑", reading: "konzatsu", meaning: "congestion", example: { jp: "れんきゅうは どの 駅も 大きな 混雑です。", en: "Over the long weekend every station is badly congested." }, accept: ["crowding", "a crush"] },
        { id: "ja-u164l1-kensa", type: "vocab", front: "検査", reading: "kensa", meaning: "an inspection", example: { jp: "びょういんで 体の 検査を 受けました。", en: "I had a physical examination at the hospital." }, accept: ["a checkup", "a test"] },
      ],
    },
    {
      id: "ja-u164l2",
      unit: 164,
      lesson: 2,
      title: "Taking and disaster",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 採 (to adopt), 災 (disaster), 際 (occasion), 在 (to exist), and the words 採用 and 国際.",
      items: [
        { id: "ja-u164l2-63a1", type: "kanji", front: "採", reading: "sai", meaning: "to adopt", example: { jp: "その 会社は 新しい しゃいんを 十人 採用しました。", en: "That company hired ten new employees." }, accept: ["to pick", "to gather", "to take on"], hint: "採る (toru) = to pick or select. 採用 = taking someone on, 採集 = collecting (insects, plants)." },
        { id: "ja-u164l2-707d", type: "kanji", front: "災", reading: "sai", meaning: "disaster", example: { jp: "火災に 気を つけて、火を けして から 出かけます。", en: "Watch out for fire — I put it out before going out." }, accept: ["calamity", "misfortune"], hint: "災 = 火 (fire) under 巛 (a flood) — the two oldest disasters. 火災 = a fire, 災害 = a disaster." },
        { id: "ja-u164l2-969b", type: "kanji", front: "際", reading: "sai", meaning: "occasion", example: { jp: "わかれる 際に、かれは 何も 言いませんでした。", en: "At the moment of parting, he said nothing." }, accept: ["the time when", "edge"], hint: "～際に = at the time of / when. 国際 = 'between nations' → international; 交際 = keeping company." },
        { id: "ja-u164l2-5728", type: "kanji", front: "在", reading: "zai", meaning: "to exist", example: { jp: "げんざい、この 町には 学校が 三つ あります。", en: "At present there are three schools in this town." }, accept: ["to be present", "to be located"], hint: "在る (aru) = to exist. 現在 = the present, 在学 = being enrolled, 不在 = being away." },
        { id: "ja-u164l2-saiyo", type: "vocab", front: "採用", reading: "saiyō", meaning: "adoption", example: { jp: "わたしの 意見が 会議で 採用されました。", en: "My opinion was adopted at the meeting." }, accept: ["hiring", "taking up"] },
        { id: "ja-u164l2-kokusai", type: "vocab", front: "国際", reading: "kokusai", meaning: "international", example: { jp: "来年、この 町で 大きな 国際会議が ひらかれます。", en: "Next year a big international conference will be held in this town." }, accept: ["between nations"] },
      ],
    },
    {
      id: "ja-u164l3",
      unit: 164,
      lesson: 3,
      title: "Crime and wealth",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 罪 (crime), 財 (wealth), 酸 (acid), 舎 (quarters), and the words 財産 and 校舎.",
      items: [
        { id: "ja-u164l3-7f6a", type: "kanji", front: "罪", reading: "zai", meaning: "crime", example: { jp: "かれは 何も 罪を おかして いません。", en: "He has committed no crime at all." }, accept: ["sin", "guilt", "offence"], hint: "罪 (tsumi) = a crime or sin. 犯罪 = a crime, 無罪 = innocent, 罪人 = a criminal." },
        { id: "ja-u164l3-8ca1", type: "kanji", front: "財", reading: "zai", meaning: "wealth", example: { jp: "両親から 大きな 財産を うけつぎました。", en: "I inherited a large fortune from my parents." }, accept: ["assets", "property", "riches"], hint: "財 = the 貝 (shell = money) radical again. 財産 = assets, 財布 = a wallet, 文化財 = cultural property." },
        { id: "ja-u164l3-9178", type: "kanji", front: "酸", reading: "san", meaning: "acid", example: { jp: "この レモンは とても 酸っぱいです。", en: "This lemon is very sour." }, accept: ["sour", "oxygen (酸素)"], hint: "酸っぱい (suppai) = sour to the taste. In science 酸 = acid, and 酸素 = oxygen." },
        { id: "ja-u164l3-820e", type: "kanji", front: "舎", reading: "sha", meaning: "quarters", example: { jp: "この 学校に 新しい 校舎が できました。", en: "A new school building was completed at this school." }, accept: ["building", "a hut", "lodge"], hint: "舎 = simple lodging. 校舎 = a school building, 宿舎 = dormitory, 田舎 (inaka) = the countryside." },
        { id: "ja-u164l3-zaisan", type: "vocab", front: "財産", reading: "zaisan", meaning: "property", example: { jp: "いえは 家族の 大切な 財産です。", en: "A house is an important asset for a family." }, accept: ["assets", "a fortune", "wealth"] },
        { id: "ja-u164l3-kosha", type: "vocab", front: "校舎", reading: "kōsha", meaning: "a school building", example: { jp: "古い 校舎は 来年 とりこわされます。", en: "The old school building will be torn down next year." }, accept: ["schoolhouse"] },
      ],
    },
    {
      id: "ja-u164l4",
      unit: 164,
      lesson: 4,
      title: "Thanks and study",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 謝 (to apologise), 授 (to grant), 修 (to mend), 述 (to state), and the words 授業 and 修理.",
      items: [
        { id: "ja-u164l4-8b1d", type: "kanji", front: "謝", reading: "sha", meaning: "to apologise", example: { jp: "おそく なって、みんなに 謝りました。", en: "I apologised to everyone for being late." }, accept: ["to thank", "to express regret"], hint: "謝る (ayamaru) = to apologise; 感謝 = gratitude. The same glyph carries both 'sorry' and 'thank you'." },
        { id: "ja-u164l4-6388", type: "kanji", front: "授", reading: "ju", meaning: "to grant", example: { jp: "今日の 授業は とても おもしろかったです。", en: "Today's class was very interesting." }, accept: ["to teach", "to confer"], hint: "授ける (sazukeru) = to grant or bestow. 授業 = a class (knowledge handed over), 教授 = a professor." },
        { id: "ja-u164l4-4fee", type: "kanji", front: "修", reading: "shū", meaning: "to mend", example: { jp: "こわれた 時計を 修理に 出しました。", en: "I sent my broken watch off to be repaired." }, accept: ["to master", "to fix", "to study"], hint: "修 covers mending and mastering: 修理 = repair, 修学 = pursuing study, 修正 = a correction." },
        { id: "ja-u164l4-8ff0", type: "kanji", front: "述", reading: "jutsu", meaning: "to state", example: { jp: "会議で 自分の 意見を はっきり 述べました。", en: "I stated my opinion clearly at the meeting." }, accept: ["to relate", "to set forth"], hint: "述べる (noberu) = to state formally — the written cousin of 言う. 記述 = a description, 口述 = dictation." },
        { id: "ja-u164l4-jugyo", type: "vocab", front: "授業", reading: "jugyō", meaning: "a class", example: { jp: "びょうきで きのうの 授業を 休みました。", en: "I missed yesterday's class because I was sick." }, accept: ["a lesson", "teaching"] },
        { id: "ja-u164l4-shuri", type: "vocab", front: "修理", reading: "shūri", meaning: "repair", example: { jp: "この 車の 修理には 一週間 かかります。", en: "Repairing this car will take a week." }, accept: ["mending", "a fix"] },
      ],
    },
  ],
};
