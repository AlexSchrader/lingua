// Unit 171 — かんじ・れきしと つながり — B2 / JLPT N2
// Strand A. N2 glyphs for history and connection — arms and knitting, graves and
// lineage, along and delay, memory and load. Slot new[96:112] of the deduped N2 list.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards; every compound kanji is taught
// at or before this unit — verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT171 = {
  id: "ja-u171",
  lang: "ja",
  title: "かんじ・れきしと つながり",
  order: 171,
  stage: "b2",
  lessons: [
    {
      id: "ja-u171l1",
      unit: 171,
      lesson: 1,
      title: "Arms and cloth",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 武 (military), 編 (to knit), 弁 (dialect), 保 (to keep), and the words 保護 and 武力.",
      items: [
        { id: "ja-u171l1-6b66", type: "kanji", front: "武", reading: "bu", meaning: "military", example: { jp: "むかしの 武士は いつも かたなを もって いました。", en: "Warriors of old always carried a sword." }, accept: ["martial", "warrior"], hint: "武 = things of war and the warrior. 武士 = a samurai, 武力 = military force, 武道 = the martial arts." },
        { id: "ja-u171l1-7de8", type: "kanji", front: "編", reading: "hen", meaning: "to knit", example: { jp: "母は 私に あたたかい セーターを 編んで くれました。", en: "My mother knitted me a warm sweater." }, accept: ["to compile", "to edit", "a volume"], hint: "編む (amu) = to knit or braid. Extended to putting a text together: 編集 = editing, 前編 = part one." },
        { id: "ja-u171l1-5f01", type: "kanji", front: "弁", reading: "ben", meaning: "dialect", example: { jp: "おおさかの 人は、おおさか弁で たのしそうに 話します。", en: "People from Osaka speak the Osaka dialect in a lively way." }, accept: ["speech", "a valve", "a boxed lunch"], hint: "弁 spreads wide: 大阪弁 = Osaka dialect, 弁当 = a boxed lunch, 弁護士 = a lawyer, 水道の弁 = a tap valve." },
        { id: "ja-u171l1-4fdd", type: "kanji", front: "保", reading: "ho", meaning: "to keep", example: { jp: "この きかいは へやの おんどを おなじように 保ちます。", en: "This machine keeps the room temperature the same." }, accept: ["to preserve", "to maintain"], hint: "保つ (tamotsu) = to keep or maintain. 保護 = protection, 保険 = insurance, 保育園 = a nursery." },
        { id: "ja-u171l1-hogo", type: "vocab", front: "保護", reading: "hogo", meaning: "protection", example: { jp: "野生の どうぶつを 保護する ことは とても 大切です。", en: "Protecting wild animals is very important." }, accept: ["safeguarding", "conservation"] },
        { id: "ja-u171l1-buryoku", type: "vocab", front: "武力", reading: "buryoku", meaning: "military force", example: { jp: "その もんだいを 武力で かいけつ するべきでは ありません。", en: "That problem should not be settled by military force." }, accept: ["armed force", "might"] },
      ],
    },
    {
      id: "ja-u171l2",
      unit: 171,
      lesson: 2,
      title: "Graves and lineage",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 墓 (grave), 脈 (vein), 歴 (history), 沿 (to run along), and the words 山脈 and 歴史.",
      items: [
        { id: "ja-u171l2-5893", type: "kanji", front: "墓", reading: "bo", meaning: "grave", example: { jp: "おぼんに 家族 みんなで 墓に 行きました。", en: "At Obon the whole family went to the grave." }, accept: ["a tomb", "a gravestone"], hint: "墓 (haka) = a grave. The 土 at the bottom is earth. 墓地 = a graveyard, 墓参り = a grave visit." },
        { id: "ja-u171l2-8108", type: "kanji", front: "脈", reading: "myaku", meaning: "vein", example: { jp: "日本には 高い 山脈が いくつも あります。", en: "Japan has several high mountain ranges." }, accept: ["pulse", "a range"], hint: "脈 = the 月 (flesh) radical for veins and pulse. 山脈 = a mountain range, 動脈 = an artery, 文脈 = context." },
        { id: "ja-u171l2-6b74", type: "kanji", front: "歴", reading: "reki", meaning: "history", example: { jp: "この 町には とても 長い 歴史が あります。", en: "This town has a very long history." }, accept: ["career", "course of events"], hint: "歴 = the passing of time. 歴史 = history, 学歴 = one's educational record, 経歴 = a career/CV." },
        { id: "ja-u171l2-6cbf", type: "kanji", front: "沿", reading: "en", meaning: "to run along", example: { jp: "川に 沿って 細い 道が どこまでも つづいて います。", en: "A narrow path runs along the river as far as you can see." }, accept: ["to follow", "beside"], hint: "沿う (sou) = to run along. 沿岸 = the coast, 沿線 = along a train line, ～に沿って = in line with." },
        { id: "ja-u171l2-sanmyaku", type: "vocab", front: "山脈", reading: "sanmyaku", meaning: "a mountain range", example: { jp: "あの 白い 山脈の むこうに うみが あります。", en: "Beyond that white mountain range lies the sea." }, accept: ["a range of mountains"] },
        { id: "ja-u171l2-rekishi", type: "vocab", front: "歴史", reading: "rekishi", meaning: "history", example: { jp: "私は むかしから 日本の 歴史に きょうみが あります。", en: "I've long been interested in Japanese history." }, accept: ["the past", "chronicle"] },
      ],
    },
    {
      id: "ja-u171l3",
      unit: 171,
      lesson: 3,
      title: "Delay and connection",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 延 (to postpone), 縁 (a bond), 汚 (dirty), 奥 (the interior), and the words 延期 and 山奥.",
      items: [
        { id: "ja-u171l3-5ef6", type: "kanji", front: "延", reading: "en", meaning: "to postpone", example: { jp: "雨の ため、あすの 大会が 来週に 延びました。", en: "Because of the rain, tomorrow's tournament was put off to next week." }, accept: ["to extend", "to prolong"], hint: "延びる (nobiru) = to be extended or postponed. 延期 = postponement, 延長 = an extension of time." },
        { id: "ja-u171l3-7e01", type: "kanji", front: "縁", reading: "en", meaning: "a bond", example: { jp: "かれとは ふしぎな 縁で むすばれて います。", en: "He and I are joined by a strange twist of fate." }, accept: ["a tie", "fate", "the edge"], hint: "縁 (en) = a bond or connection between people, half chance and half fate. It also means a rim or edge." },
        { id: "ja-u171l3-6c5a", type: "kanji", front: "汚", reading: "o", meaning: "dirty", example: { jp: "そとで あそんで、くつが どろで 汚れて しまいました。", en: "I played outside and my shoes got dirty with mud." }, accept: ["to soil", "unclean"], hint: "汚い (kitanai) = dirty; 汚れる (yogoreru) = to get soiled. 汚染 = pollution." },
        { id: "ja-u171l3-5965", type: "kanji", front: "奥", reading: "oku", meaning: "the interior", example: { jp: "へやの 奥に 大きな はこが おいて あります。", en: "A large box is set at the back of the room." }, accept: ["the back", "the depths", "one's wife (奥さん)"], hint: "奥 (oku) = the innermost part. 奥さん = someone's wife (the person deep in the house), 山奥 = deep in the mountains." },
        { id: "ja-u171l3-enki", type: "vocab", front: "延期", reading: "enki", meaning: "postponement", example: { jp: "たいふうで、うんどう会が 来週に 延期に なりました。", en: "Because of the typhoon, sports day was postponed to next week." }, accept: ["a delay", "putting off"] },
        { id: "ja-u171l3-yamaoku", type: "vocab", front: "山奥", reading: "yamaoku", meaning: "deep in the mountains", example: { jp: "そぼの いえは 山奥に あって、行くのが 大変です。", en: "My grandmother's house is deep in the mountains and hard to get to." }, accept: ["the mountain depths", "the back country"] },
      ],
    },
    {
      id: "ja-u171l4",
      unit: 171,
      lesson: 4,
      title: "Memory and load",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 憶 (recollection), 加 (to add), 荷 (load), 課 (section), and the words 記憶 and 荷物.",
      items: [
        { id: "ja-u171l4-61b6", type: "kanji", front: "憶", reading: "oku", meaning: "recollection", example: { jp: "子どもの ころの 記憶は もう うすく なりました。", en: "My memories of childhood have faded now." }, accept: ["memory", "to recall"], hint: "憶 = the 忄 (heart) radical for what the heart holds. It lives almost only in 記憶 (memory) and 追憶." },
        { id: "ja-u171l4-52a0", type: "kanji", front: "加", reading: "ka", meaning: "to add", example: { jp: "新しい メンバーが 二人 チームに 加わりました。", en: "Two new members joined the team." }, accept: ["to join", "to increase"], hint: "加える (kuwaeru) = to add; 加わる (kuwawaru) = to join. 参加 = participation, 加入 = joining." },
        { id: "ja-u171l4-8377", type: "kanji", front: "荷", reading: "ni", meaning: "load", example: { jp: "重い 荷物を もって、かいだんを 上がりました。", en: "I carried the heavy luggage up the stairs." }, accept: ["baggage", "cargo", "a burden"], hint: "荷 (ni) = a load or baggage. 荷物 = luggage, 入荷 = a delivery of goods, 重荷 = a heavy burden." },
        { id: "ja-u171l4-8ab2", type: "kanji", front: "課", reading: "ka", meaning: "section", example: { jp: "今日の 課題は とても むずかしかったです。", en: "Today's assignment was very difficult." }, accept: ["a lesson", "a department", "to impose"], hint: "課 = a section or lesson. 課長 = a section chief, 課題 = an assignment, 第一課 = lesson one." },
        { id: "ja-u171l4-kioku", type: "vocab", front: "記憶", reading: "kioku", meaning: "memory", example: { jp: "その 日の ことは、今も はっきり 記憶して います。", en: "I still clearly remember what happened that day." }, accept: ["recollection", "remembrance"] },
        { id: "ja-u171l4-nimotsu", type: "vocab", front: "荷物", reading: "nimotsu", meaning: "luggage", example: { jp: "りょこうの 荷物を 大きな かばんに つめました。", en: "I packed my travel luggage into a big bag." }, accept: ["baggage", "a parcel", "cargo"] },
      ],
    },
  ],
};
