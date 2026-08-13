// Unit 115 — かんじ・かず (Number and quantity kanji) — B1 / JLPT N3
// Strand A. Glyphs for counting and measuring — the ones on a form, a receipt and a
// timetable. Pairs with the thematic comparison unit at slot 103.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the band-standard shape.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT115 = {
  id: "ja-u115",
  lang: "ja",
  title: "かんじ・かず",
  order: 115,
  stage: "b1",
  lessons: [
    {
      id: "ja-u115l1",
      unit: 115,
      lesson: 1,
      title: "Counting things",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 数 (number), 量 (quantity), 単 (single), 倍 (double), and the words 数字 and 単語.",
      items: [
        { id: "ja-u115l1-kazu", type: "kanji", front: "数", reading: "kazu", meaning: "number", example: { jp: "この 町の 子どもの 数は 毎年 少なく なって、学校も へりました。", en: "The number of children in this town falls every year, and schools have closed too." }, accept: ["count", "figures", "several"], hint: "数 = how many. 数学 = mathematics, 人数 = the number of people." },
        { id: "ja-u115l1-ryo", type: "kanji", front: "量", reading: "ryō", meaning: "quantity", example: { jp: "この 店は ねだんの わりに 量が 多いので、いつも こんで います。", en: "For the price the portions are large, so it's always crowded." }, accept: ["amount", "volume", "to measure"], hint: "量 = how much of something there is — mass, not count. 数 counts; 量 measures." },
        { id: "ja-u115l1-tan", type: "kanji", front: "単", reading: "tan", meaning: "single", example: { jp: "新しい 単語を 五つ おぼえて から、寝ました。", en: "I learned five new words, then went to bed." }, accept: ["simple", "unit", "mere"], hint: "単 = one on its own. 単語 = a vocabulary word, 単に = merely, 簡単 = simple." },
        { id: "ja-u115l1-bai", type: "kanji", front: "倍", reading: "bai", meaning: "double", example: { jp: "今年の 雨は 去年の 二倍で、川の 水が ふえました。", en: "There was twice as much rain as last year, and the river rose." }, accept: ["times", "-fold", "twice"], hint: "倍 = a multiple — 二倍 = twice, 三倍 = three times. 亻 (person) on the left." },
        { id: "ja-u115l1-suji", type: "vocab", front: "数字", reading: "sūji", meaning: "a numeral", example: { jp: "この 数字は 大きすぎて、読めません。", en: "This figure is too large to read." }, accept: ["figure", "digit", "number"] },
        { id: "ja-u115l1-tango", type: "vocab", front: "単語", reading: "tango", meaning: "a word", example: { jp: "新しい 単語を 五つ おぼえて から、寝ました。", en: "I learned five new words, then went to bed." }, accept: ["vocabulary item", "term"], hint: "単 (single) + 語 (word) — a word standing on its own, as against 文章." },
      ],
    },
    {
      id: "ja-u115l2",
      unit: 115,
      lesson: 2,
      title: "Rank and evenness",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 第 (number (ordinal)), 等 (equal), 均 (even), 総 (overall), and the words 均等 and 第一.",
      items: [
        { id: "ja-u115l2-dai", type: "kanji", front: "第", reading: "dai", meaning: "number (ordinal)", example: { jp: "この 本の 第一章は みじかいので、すぐ 読めます。", en: "Chapter one of this book is short, so you can read it quickly." }, accept: ["ordinal prefix", "rank"], hint: "第 = the marker that turns a number into an ordinal: 第一 = the first, 第二 = the second." },
        { id: "ja-u115l2-to", type: "kanji", front: "等", reading: "tō", meaning: "equal", example: { jp: "みんなに 同じ 品を 平等に わたしましたから、だれも こまりませんでした。", en: "The same items went to everyone equally, so nobody lost out." }, accept: ["and so on", "class", "grade"], hint: "等 = of the same rank — 竹 (bamboo) on top. 平等 = equality; after a list it means 'et cetera'." },
        { id: "ja-u115l2-kin", type: "kanji", front: "均", reading: "kin", meaning: "even", example: { jp: "一日 平均 二時間 ぐらい 歩いて いますから、体の ちょうしが いいです。", en: "I walk an average of about two hours a day, so I feel well." }, accept: ["average", "level", "uniform"], hint: "均 = evened out — 土 (earth) on the left, ground made level. You meet it inside 平均." },
        { id: "ja-u115l2-so", type: "kanji", front: "総", reading: "sō", meaning: "overall", example: { jp: "今月の 総計を 見て から、来月の 計画を 考えます。", en: "I'll look at this month's total, then plan next month." }, accept: ["total", "general", "all"], hint: "総 = the whole lot added up — 糸 (thread) on the left, everything gathered into one bundle." },
        { id: "ja-u115l2-kinto", type: "vocab", front: "均等", reading: "kintō", meaning: "evenly divided", example: { jp: "みんなに 同じ 品を 均等に わたしました。", en: "The same items went to everyone in equal shares." }, accept: ["equal shares", "uniform", "even"], hint: "均 (even) + 等 (equal) — both glyphs of this lesson, meaning the same thing twice." },
        { id: "ja-u115l2-daiichi", type: "vocab", front: "第一", reading: "daiichi", meaning: "the first", example: { jp: "安全が 第一ですから、いそがないで ください。", en: "Safety comes first, so please don't rush." }, accept: ["number one", "foremost", "primary"] },
      ],
    },
    {
      id: "ja-u115l3",
      unit: 115,
      lesson: 3,
      title: "Full, empty, finished",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 満 (full), 未 (not yet), 末 (end), 余 (surplus), and the words 満員 and 余分.",
      items: [
        { id: "ja-u115l3-man", type: "kanji", front: "満", reading: "man", meaning: "full", example: { jp: "電車が 満員でしたから、つぎのを 待つ ことに しました。", en: "The train was full, so I decided to wait for the next one." }, accept: ["to fill", "satisfaction"], hint: "満 = filled up — 氵 (water) at the left, a vessel brimming. 満員 = full up (of people), 満足 = satisfaction." },
        { id: "ja-u115l3-mi", type: "kanji", front: "未", reading: "mi", meaning: "not yet", example: { jp: "未来の ことは 分かりませんが、今 できる ことを します。", en: "I don't know what the future holds, but I'll do what I can now." }, accept: ["un-", "incomplete", "future"], hint: "未 = not yet — a tree 木 whose top branch hasn't grown out. 未来 = the future, what hasn't come." },
        { id: "ja-u115l3-matsu", type: "kanji", front: "末", reading: "matsu", meaning: "end", example: { jp: "週末は 家で ゆっくり 休みたいので、よていを 入れません。", en: "I want to rest quietly at home at the weekend, so I don't make plans." }, accept: ["close", "tip", "the last part"], hint: "末 = the far end — the same tree 木, but the long stroke marks the tip. 週末 = weekend, 月末 = month end." },
        { id: "ja-u115l3-amari", type: "kanji", front: "余", reading: "amari", meaning: "surplus", example: { jp: "お金が 余ったので、新しい 本を 買いました。", en: "I had money left over, so I bought a new book." }, accept: ["remainder", "extra", "to be left over"], hint: "余 = what is left after enough — 余る = to be left over, 余分 = extra." },
        { id: "ja-u115l3-manin", type: "vocab", front: "満員", reading: "manin", meaning: "full up", example: { jp: "電車が 満員でしたから、つぎのを 待つ ことに しました。", en: "The train was full, so I decided to wait for the next one." }, accept: ["packed", "no seats left", "sold out"] },
        { id: "ja-u115l3-yobun", type: "vocab", front: "余分", reading: "yobun", meaning: "extra", example: { jp: "余分な お金は 使わないように して います。", en: "I try not to spend money I don't need to." }, accept: ["surplus", "spare", "more than needed"] },
      ],
    },
    {
      id: "ja-u115l4",
      unit: 115,
      lesson: 4,
      title: "Parts and small units",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 両 (both), 割 (to divide), 秒 (second), 寸 (a little), and the words 両親 and 一割.",
      items: [
        { id: "ja-u115l4-ryo", type: "kanji", front: "両", reading: "ryō", meaning: "both", example: { jp: "両親は 二人とも 元気で、毎日 歩いて います。", en: "Both my parents are well, and they walk every day." }, accept: ["the two", "pair"], hint: "両 = the two of a natural pair. 両親 = both parents, 両手 = both hands, 両方 = both sides." },
        { id: "ja-u115l4-wari", type: "kanji", front: "割", reading: "wari", meaning: "to divide", example: { jp: "この 店では 学生は 一割 安く なりますから、いつも ここで 買います。", en: "Students get ten percent off at this shop, so I always buy here." }, accept: ["proportion", "ten percent", "to split"], hint: "割 = split into parts — 刂 (knife) on the right. 一割 = one tenth, so 三割引き is 30% off." },
        { id: "ja-u115l4-byo", type: "kanji", front: "秒", reading: "byō", meaning: "second", example: { jp: "あと 三十秒で 電車が 出ますから、いそいで ください。", en: "The train leaves in thirty seconds, so please hurry." }, accept: ["a second (time)"], hint: "秒 = a second — 禾 (grain) + 少 (few): the smallest grain of time. 分 is a minute, 秒 a second." },
        { id: "ja-u115l4-sun", type: "kanji", front: "寸", reading: "sun", meaning: "a little", example: { jp: "少し 時間を もらって、寸前まで れんしゅうしました。", en: "I got a little extra time and practised right up to the last moment." }, accept: ["tiny amount", "old unit of length"], hint: "寸 = an old unit about 3cm, so by extension 'a tiny bit'. 寸前 = just before, at the last moment." },
        { id: "ja-u115l4-ryoshin", type: "vocab", front: "両親", reading: "ryōshin", meaning: "both parents", example: { jp: "両親は 二人とも 元気で、毎日 歩いて います。", en: "Both my parents are well, and they walk every day." }, accept: ["parents", "mother and father"] },
        { id: "ja-u115l4-ichiwari", type: "vocab", front: "一割", reading: "ichiwari", meaning: "ten percent", example: { jp: "この 店では 学生は 一割 安く なります。", en: "Students get ten percent off at this shop." }, accept: ["one tenth"], hint: "割 counts tenths, so 三割 is 30% — a 三割引き sale takes off three tenths." },
      ],
    },
  ],
};
