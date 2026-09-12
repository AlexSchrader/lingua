// Unit 175 — かんじ・ことばと かたち (N2 kanji, set 9) — B2 / JLPT N2
// ─────────────────────────────────────────────────────────────────────────────
// GLYPH BUDGET — read, not negotiated. 934 glyphs have stroke data; 568 are already
// taught; 224 remain. Taken in KANJI_N2 list order, block 1 holds indices 0–127
// (ending exactly at 策) and block 2 holds 128–223 = 96 = 6 units × 16. The cut is
// checkable by either seat in one command, which is the whole point: B1's block 3
// skipped its cross-block check and lost 65 cards at merge.
//
// CARD SHAPE — 4 lessons × (4 glyphs + 2 compounds) = 24. Sixteen glyphs cannot
// fill a flat 4 × 6; this is the resolution B1 reached after shipping the wrong
// shape first, and it is adopted here rather than rediscovered.
//
// COMPOUND FRONTS — kanji, and every glyph inside one is taught at or before this
// unit. Each was also checked BY READING against the corpus, because a kanji-written
// compound whose kana form already ships is the same word taught twice and
// front-uniqueness cannot see it: 単純 was dropped here for exactly that reason.
// ─────────────────────────────────────────────────────────────────────────────
export const UNIT175 = {
  id: "ja-u175",
  lang: "ja",
  title: "かんじ・ことばと かたち",
  order: 175,
  stage: "b2",
  lessons: [
    {
      id: "ja-u175l1",
      unit: 175,
      lesson: 1,
      title: "Books and words",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 冊 (volume), 姿 (figure), 詞 (word), 誌 (journal), and the words 一冊 and 歌詞.",
      items: [
        { id: "ja-u175l1-satsu", type: "kanji", front: "冊", reading: "satsu", meaning: "counter for books", example: { jp: "本を 三冊 借りて、一週間で 読みました。", en: "I borrowed three books and read them in a week." }, accept: ["volume", "a copy of a book"], hint: "冊 = bamboo strips tied together — the oldest shape of a book. It counts bound things: 一冊, 二冊." },
        { id: "ja-u175l1-sugata", type: "kanji", front: "姿", reading: "sugata", meaning: "figure", example: { jp: "後ろ姿だけで、だれか 分かりました。", en: "I knew who it was from the back view alone." }, accept: ["form", "appearance", "how someone looks"], hint: "姿 = 女 + 次 — the shape a person cuts. 姿 is the whole silhouette, not the face." },
        { id: "ja-u175l1-shi", type: "kanji", front: "詞", reading: "shi", meaning: "words (of a song)", example: { jp: "歌詞の 意味が 分かってから、その 歌が もっと よく なりました。", en: "Once I understood the lyrics, the song got better." }, accept: ["lyric", "part of speech", "diction"], hint: "詞 = 言 (words) + 司 — words as material, set to something. 歌詞 = lyrics, 名詞 = a noun." },
        { id: "ja-u175l1-shijournal", type: "kanji", front: "誌", reading: "shi", meaning: "a periodical", example: { jp: "日誌を 毎日 書く ことに して います。", en: "I make a point of writing the log every day." }, accept: ["journal", "record", "magazine"], hint: "誌 = 言 (words) + 志 — words set down to keep. Its on-yomi is し, like 詞, and the two are told apart by the 言 partner." },
        { id: "ja-u175l1-issatsu", type: "vocab", front: "一冊", reading: "issatsu", meaning: "one volume", example: { jp: "一冊 読み終わるまで、つぎのは 買いません。", en: "I don't buy the next one until I've finished a volume." }, accept: ["a single book", "one copy"] },
        { id: "ja-u175l1-kashi", type: "vocab", front: "歌詞", reading: "kashi", meaning: "lyrics", example: { jp: "歌詞を 見ないで 歌えるのは、この 一曲だけです。", en: "This is the only song I can sing without looking at the lyrics." }, accept: ["the words of a song", "song text"] },
      ],
    },
    {
      id: "ja-u175l2",
      unit: 175,
      lesson: 2,
      title: "Force, throwing away, measure",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 磁 (magnetic), 射 (shoot), 捨 (throw away), 尺 (scale), and the words 反射 and 尺度.",
      items: [
        { id: "ja-u175l2-ji", type: "kanji", front: "磁", reading: "ji", meaning: "magnetic", example: { jp: "この 力は 磁気と よばれて います。", en: "This force is called magnetism." }, accept: ["magnetism", "porcelain"], hint: "磁 = 石 (stone) + 兹 — the stone that pulls iron. Also the 磁 of 磁器, porcelain: stone turned into a vessel." },
        { id: "ja-u175l2-sha", type: "kanji", front: "射", reading: "sha", meaning: "shoot out", example: { jp: "日の ひかりが 水に 反射しました。", en: "The sunlight reflected off the water." }, accept: ["fire (an arrow)", "emit", "radiate"], hint: "射 = 身 (body) + 寸 (hand) — a body drawing a bow. It covers arrows, light and injections alike: 注射." },
        { id: "ja-u175l2-suteru", type: "kanji", front: "捨", reading: "suteru", meaning: "throw away", example: { jp: "まだ 使える ものを 捨てるのは、もったいないです。", en: "It's wasteful to throw away something still usable." }, accept: ["discard", "abandon", "let go of"], hint: "捨 = 扌 (hand) + 舎 — a hand putting something out of the house. The opposite of 拾う." },
        { id: "ja-u175l2-shaku", type: "kanji", front: "尺", reading: "shaku", meaning: "a measure", example: { jp: "尺度が ちがうと、同じ 数でも 意味が 変わります。", en: "With a different scale, the same figure means something else." }, accept: ["scale", "old unit of length", "yardstick"], hint: "尺 = a hand span used as a measuring length. 尺度 = the scale you judge by, literal or not." },
        { id: "ja-u175l2-hansha", type: "vocab", front: "反射", reading: "hansha", meaning: "reflection", example: { jp: "雪の 反射が 強くて、目を 開けて いられません。", en: "The glare off the snow is so strong I can't keep my eyes open." }, accept: ["bouncing back", "a reflex"] },
        { id: "ja-u175l2-shakudo", type: "vocab", front: "尺度", reading: "shakudo", meaning: "a yardstick", example: { jp: "お金だけを 尺度に すると、大事な ものを 見落とします。", en: "If money is your only yardstick, you overlook what matters." }, accept: ["measure", "criterion", "scale of judgement"] },
      ],
    },
    {
      id: "ja-u175l3",
      unit: 175,
      lesson: 3,
      title: "Trees, faith, the many",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 樹 (tree), 宗 (religious school), 衆 (the masses), 従 (follow), and the words 宗教 and 大衆.",
      items: [
        { id: "ja-u175l3-ju", type: "kanji", front: "樹", reading: "ju", meaning: "a standing tree", example: { jp: "公園の 大樹の 下で、みんな 休んで います。", en: "Everyone is resting under the great tree in the park." }, accept: ["timber tree", "arboreal"], hint: "木 is wood or a tree as material; 樹 is a living tree standing where it grew. 樹木 = trees as growing things." },
        { id: "ja-u175l3-shu", type: "kanji", front: "宗", reading: "shū", meaning: "a religious school", example: { jp: "宗教の 話は、しずかに 聞く ことに して います。", en: "I make a point of listening quietly when religion comes up." }, accept: ["sect", "denomination", "the main line"], hint: "宗 = 宀 (roof) + 示 (altar) — the household altar, hence the line of teaching a family follows." },
        { id: "ja-u175l3-shuu", type: "kanji", front: "衆", reading: "shū", meaning: "the many", example: { jp: "大衆の 意見が、少しずつ 変わって きました。", en: "Public opinion has been shifting little by little." }, accept: ["the public", "a crowd", "the masses"], hint: "衆 = many people under one sun. Its on-yomi is しゅう, like 宗 — the pair sits together for that reason." },
        { id: "ja-u175l3-shitagau", type: "kanji", front: "従", reading: "shitagau", meaning: "follow", example: { jp: "先生の 教えに 従って、やり方を 変えました。", en: "Following my teacher's advice, I changed my method." }, accept: ["comply with", "go along with", "obey"], hint: "従 = 彳 (going) + people in line — walking behind. 従業員 = an employee: one who follows the work." },
        { id: "ja-u175l3-shukyo", type: "vocab", front: "宗教", reading: "shūkyō", meaning: "religion", example: { jp: "この 国では、宗教は 家の 中の ことだと 考えられて います。", en: "In this country religion is thought of as a matter for the home." }, accept: ["a faith", "religious belief"] },
        { id: "ja-u175l3-taishu", type: "vocab", front: "大衆", reading: "taishū", meaning: "the general public", example: { jp: "大衆に 向けて 書くと、ことばが やさしく なります。", en: "Writing for a general readership makes the language plainer." }, accept: ["the masses", "ordinary people"] },
      ],
    },
    {
      id: "ja-u175l4",
      unit: 175,
      lesson: 4,
      title: "Lengthwise, shrinking, ripening",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 縦 (vertical), 縮 (shrink), 熟 (ripen), 純 (pure), and the words 縮小 and 純白.",
      items: [
        { id: "ja-u175l4-tate", type: "kanji", front: "縦", reading: "tate", meaning: "lengthwise", example: { jp: "この 紙は 縦に 使って ください。", en: "Please use this paper the long way up." }, accept: ["vertical", "up and down", "portrait"], hint: "縦 = 糸 (thread) running the length of the cloth. 縦 and 横 are the pair for any flat thing." },
        { id: "ja-u175l4-chijimu", type: "kanji", front: "縮", reading: "chijimu", meaning: "shrink", example: { jp: "服を あらったら 縮んで しまいました。", en: "The clothes shrank in the wash." }, accept: ["contract", "get smaller", "shorten"], hint: "縮 = 糸 (thread) + 宿 — cloth drawing in on itself. 縮小 = reducing something deliberately." },
        { id: "ja-u175l4-juku", type: "kanji", front: "熟", reading: "juku", meaning: "ripen", example: { jp: "時期が 熟すのを 待って います。", en: "I'm waiting for the moment to ripen." }, accept: ["mature", "come to fruition", "be practised"], hint: "熟 = 灬 (fire) beneath — brought on slowly by heat. 熟語 = a set compound: words that have matured together." },
        { id: "ja-u175l4-jun", type: "kanji", front: "純", reading: "jun", meaning: "unmixed", example: { jp: "純白の 服を 着て、しずかに 立って いました。", en: "She stood quietly, dressed in pure white." }, accept: ["pure", "innocent", "plain"], hint: "純 = 糸 (thread) + 屯 — thread with nothing else spun into it." },
        { id: "ja-u175l4-shukusho", type: "vocab", front: "縮小", reading: "shukushō", meaning: "scaling down", example: { jp: "計画の 縮小が 決まって、人も へりました。", en: "A scaling-down of the plan was decided, and staff were cut too." }, accept: ["reduction", "downsizing", "shrinking it"] },
        { id: "ja-u175l4-junpaku", type: "vocab", front: "純白", reading: "junpaku", meaning: "pure white", example: { jp: "朝の 雪は 純白で、足あとが 一つも ありません。", en: "The morning snow was pure white, without a single footprint." }, drill: { jp: "純白の ゆきです。", en: "It is pure white snow." }, accept: ["snow white", "unbroken white"] },
      ],
    },
  ],
};
