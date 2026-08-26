// Unit 183 — きょういく・けんきゅう (Education and research) — B2 / JLPT N2
// Block-2 house rules are documented in unit174.js.
//
// The B2 shift is from BEING taught to MAKING a claim: hypothesis, evidence,
// citation, review. Lesson 2 is deliberately the chain かせつ → じっしょう →
// しょうめい, because a learner who can name those three can read an abstract.
export const UNIT183 = {
  id: "ja-u183",
  lang: "ja",
  title: "きょういく・けんきゅう",
  order: 183,
  stage: "b2",
  lessons: [
    {
      id: "ja-u183l1",
      unit: 183,
      lesson: 1,
      title: "Teaching and being taught",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the people and stages of formal study: しどう きょうじゅ がくい はかせ しゅうりょう じっせん.",
      items: [
        { id: "ja-u183l1-shido", type: "vocab", front: "しどう", reading: "shidō", meaning: "guidance", example: { jp: "先生の しどうが よかったので、書き方が 大きく 変わりました。", en: "My teacher's guidance was good, and my writing changed a great deal." }, accept: ["instruction", "supervision", "coaching"] },
        { id: "ja-u183l1-kyoju", type: "vocab", front: "きょうじゅ", reading: "kyōju", meaning: "a professor", example: { jp: "きょうじゅは 話が 長いですが、聞く だけの ねうちが あります。", en: "The professor talks at length, but it's worth listening to." }, accept: ["chair", "full professor"] },
        { id: "ja-u183l1-gakui", type: "vocab", front: "がくい", reading: "gakui", meaning: "an academic degree", example: { jp: "はたらきながら がくいを 取るのは、思ったより 大変でした。", en: "Taking a degree while working was harder than I expected." }, accept: ["a degree", "qualification"] },
        { id: "ja-u183l1-hakase", type: "vocab", front: "はかせ", reading: "hakase", meaning: "a doctorate", example: { jp: "はかせまで 進む 人は、この 学校では 多く ありません。", en: "Not many at this school go on as far as a doctorate." }, accept: ["PhD", "doctor (academic)"] },
        { id: "ja-u183l1-shuryo", type: "vocab", front: "しゅうりょう", reading: "shūryō", meaning: "completing a course", example: { jp: "三年の しゅうりょうまで、あと 少しです。", en: "It's only a little further to completing the three years." }, accept: ["finishing", "completion of study"] },
        { id: "ja-u183l1-jissen", type: "vocab", front: "じっせん", reading: "jissen", meaning: "putting into practice", example: { jp: "本で 読んだ ことを じっせんして、はじめて 分かりました。", en: "I only understood once I put what I'd read into practice." }, accept: ["practice", "hands-on application", "doing it for real"] },
      ],
    },
    {
      id: "ja-u183l2",
      unit: 183,
      lesson: 2,
      title: "Building a claim",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Take an idea from guess to demonstrated result: すいろん がくせつ めいだい こうさつ じっしょう しょうめい.",
      items: [
        { id: "ja-u183l2-suiron", type: "vocab", front: "すいろん", reading: "suiron", meaning: "reasoning to a conclusion", example: { jp: "その すいろんは 正しく 見えますが、はじめの 数が まちがって います。", en: "The reasoning looks sound, but the opening figure is wrong." }, accept: ["inference", "deduction", "working it out"] },
        { id: "ja-u183l2-gakusetsu", type: "vocab", front: "がくせつ", reading: "gakusetsu", meaning: "a scholarly theory", example: { jp: "その がくせつは 今も 意見が 分かれて います。", en: "Opinion is still divided on that theory." }, accept: ["academic doctrine", "a school of thought"] },
        { id: "ja-u183l2-meidai", type: "vocab", front: "めいだい", reading: "meidai", meaning: "a proposition", example: { jp: "その めいだいが 正しいか どうかは、まだ 分かりません。", en: "Whether that proposition is true is still not known." }, accept: ["a claim to be tested", "statement", "thesis"], hint: "がくせつ is a named scholar's position; めいだい is one sentence that is either true or false — the unit a すいろん moves between." },
        { id: "ja-u183l2-kosatsu", type: "vocab", front: "こうさつ", reading: "kōsatsu", meaning: "considered discussion", example: { jp: "こうさつの ところが いちばん 読まれる 部分です。", en: "The discussion section is the part that gets read most." }, accept: ["examination", "the discussion (in a paper)", "study of"] },
        { id: "ja-u183l2-jissho", type: "vocab", front: "じっしょう", reading: "jisshō", meaning: "showing by evidence", example: { jp: "その 考えを じっしょうする ために、五年 かけて 数を 集めました。", en: "To demonstrate that idea we spent five years gathering figures." }, accept: ["empirical demonstration", "verification by data"] },
        { id: "ja-u183l2-shomei", type: "vocab", front: "しょうめい", reading: "shōmei", meaning: "proof", example: { jp: "しょうめいが できるまで、そう 言わない ほうが いいです。", en: "Until you can prove it, it's better not to say so." }, accept: ["proving", "demonstration", "evidence of"] },
      ],
    },
    {
      id: "ja-u183l3",
      unit: 183,
      lesson: 3,
      title: "Working with sources",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle other people's work properly: たいしょう さんしょう てんきょ ちょさく とうこう がくじゅつ.",
      items: [
        { id: "ja-u183l3-taisho", type: "vocab", front: "たいしょう", reading: "taishō", meaning: "the subject studied", example: { jp: "この 研究の たいしょうは、十代の 若い 人です。", en: "The subject of this study is people in their teens." }, accept: ["object of study", "target group", "who it covers"] },
        { id: "ja-u183l3-sansho", type: "vocab", front: "さんしょう", reading: "sanshō", meaning: "consulting a source", example: { jp: "古い 記ろくを さんしょうして、日にちを 直しました。", en: "I consulted the old records and corrected the date." }, accept: ["reference to", "looking it up", "see (in a citation)"] },
        { id: "ja-u183l3-tenkyo", type: "vocab", front: "てんきょ", reading: "tenkyo", meaning: "the source relied on", example: { jp: "てんきょを 書かない 文章は、しんさで 止められます。", en: "A piece that doesn't give its source gets stopped at review." }, accept: ["authority cited", "grounds", "where it is taken from"] },
        { id: "ja-u183l3-chosaku", type: "vocab", front: "ちょさく", reading: "chosaku", meaning: "a written work", example: { jp: "その 人の ちょさくは、今も 学校で 読まれて います。", en: "That person's writings are still read in schools." }, accept: ["one's writings", "authored work", "publication"] },
        { id: "ja-u183l3-toko", type: "vocab", front: "とうこう", reading: "tōkō", meaning: "submitting for publication", example: { jp: "とうこうしてから 半年 待って、やっと 返事が 来ました。", en: "I waited half a year after submitting before a reply finally came." }, accept: ["submission", "sending in a paper", "posting"] },
        { id: "ja-u183l3-gakujutsu", type: "vocab", front: "がくじゅつ", reading: "gakujutsu", meaning: "scholarly", example: { jp: "がくじゅつの 世界では、早さより 正しさが 大切です。", en: "In the scholarly world, being right matters more than being fast." }, accept: ["academic", "of learning", "scientific"] },
      ],
    },
    {
      id: "ja-u183l4",
      unit: 183,
      lesson: 4,
      title: "Being judged",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about review and where research is argued in public: しんさ ぎんみ がっかい けいさい さいたく しっぴつ.",
      items: [
        { id: "ja-u183l4-shinsa", type: "vocab", front: "しんさ", reading: "shinsa", meaning: "formal review", example: { jp: "しんさに 通るまで、三回 書き直しました。", en: "I rewrote it three times before it passed review." }, accept: ["assessment", "screening", "examination by a panel"] },
        { id: "ja-u183l4-ginmi", type: "vocab", front: "ぎんみ", reading: "ginmi", meaning: "close scrutiny", example: { jp: "一つ 一つの 数を ぎんみして、まちがいを 見つけました。", en: "We scrutinised each figure one by one and found the error." }, accept: ["careful checking", "going over in detail"], hint: "しんさ is the official process with a verdict at the end; ぎんみ is the act of looking closely, with or without one." },
        { id: "ja-u183l4-gakkai", type: "vocab", front: "がっかい", reading: "gakkai", meaning: "an academic conference", example: { jp: "がっかいで 話してから、同じ 研究の 人と つながりました。", en: "After speaking at the conference I connected with others in the same field." }, accept: ["learned society", "academic meeting"] },
        { id: "ja-u183l4-keisai", type: "vocab", front: "けいさい", reading: "keisai", meaning: "being carried in a journal", example: { jp: "けいさいが 決まった 日に、はじめて 先生に お礼を 言いました。", en: "On the day publication was confirmed, I thanked my supervisor for the first time." }, accept: ["publication in print", "appearing in an issue", "running a piece"] },
        { id: "ja-u183l4-saitaku", type: "vocab", front: "さいたく", reading: "saitaku", meaning: "being accepted", example: { jp: "さいたくの 知らせが 来て、一年の 仕事が むくわれました。", en: "The acceptance notice came, and a year of work was repaid." }, accept: ["adoption", "being selected", "approval of a proposal"] },
        { id: "ja-u183l4-shippitsu", type: "vocab", front: "しっぴつ", reading: "shippitsu", meaning: "writing up", example: { jp: "しっぴつに 半年、しんさに もう 半年 かかりました。", en: "Writing it up took half a year, and review took another half." }, accept: ["authoring", "composing a text", "penning"] },
      ],
    },
  ],
};
