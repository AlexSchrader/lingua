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
        { id: "ja-u183l1-shido", type: "vocab", front: "しどう", reading: "shidō", meaning: "guidance (coaching and supervision)", example: { jp: "先生の しどうが よかったので、書き方が 大きく 変わりました。", en: "My teacher's guidance was good, and my writing changed a great deal." }, drill: { jp: "しどうを 受けました。", en: "I received guidance." }, accept: ["instruction", "supervision", "coaching"], hint: "shidō — 指 (point) + 導 (guide): pointing the way and leading. A teacher's or coach's supervision, so しどうしゃ is the instructor. きょういく is education as a whole; しどう is hands-on." },
        { id: "ja-u183l1-kyoju", type: "vocab", front: "きょうじゅ", reading: "kyōju", meaning: "a professor", example: { jp: "きょうじゅは 話が 長いですが、聞く だけの ねうちが あります。", en: "The professor talks at length, but it's worth listening to." }, drill: { jp: "きょうじゅに 聞きました。", en: "I asked the professor." }, accept: ["chair", "full professor", "a professor"], hint: "kyōju — 教 (teach) + 授 (grant), the same 授 as じゅぎょう: one who grants teaching. It is the RANK — じゅんきょうじゅ associate, こうし lecturer. せんせい is how you address any of them." },
        { id: "ja-u183l1-gakui", type: "vocab", front: "がくい", reading: "gakui", meaning: "an academic degree", example: { jp: "はたらきながら がくいを 取るのは、思ったより 大変でした。", en: "Taking a degree while working was harder than I expected." }, drill: { jp: "がくいを 取りました。", en: "I took a degree." }, accept: ["a degree", "qualification", "an academic rank"], hint: "gakui — 学 (study) + 位 (a rank): your rank in study. The three are がくし bachelor, しゅうし master, はくし doctor. The verb that goes with it is always 取る." },
        { id: "ja-u183l1-hakase", type: "vocab", front: "はかせ", reading: "hakase", meaning: "a doctorate", example: { jp: "はかせまで 進む 人は、この 学校では 多く ありません。", en: "Not many at this school go on as far as a doctorate." }, drill: { jp: "はかせまで 進みました。", en: "I went on as far as a doctorate." }, accept: ["PhD", "doctor (academic)", "a doctorate"], hint: "hakase — written 博士, which is also read はくし. はくし is the formal degree name on a certificate; はかせ is the spoken word, and it also means an expert on anything — さかな はかせ." },
        { id: "ja-u183l1-shuryo", type: "vocab", front: "しゅうりょう", reading: "shūryō", meaning: "completing a course", example: { jp: "三年の しゅうりょうまで、あと 少しです。", en: "It's only a little further to completing the three years." }, drill: { jp: "しゅうりょうまで あと 少しです。", en: "It is only a little further to completion." }, accept: ["finishing", "completion of study", "having finished the course"], hint: "shūryō — 修 (to study, to cultivate) + 了 (finish): finishing a prescribed course. そつぎょう is graduating with a degree; しゅうりょう is completing the coursework, and the two are not always the same." },
        { id: "ja-u183l1-jissen", type: "vocab", front: "じっせん", reading: "jissen", meaning: "putting into practice", example: { jp: "本で 読んだ ことを じっせんして、はじめて 分かりました。", en: "I only understood once I put what I'd read into practice." }, drill: { jp: "じっせんが 大切です。", en: "Putting it into practice matters." }, accept: ["practice", "hands-on application", "doing it for real"], hint: "jissen — 実 (actual) + 践 (to tread): treading the actual ground. りろん is the theory and じっせん is the doing, and the pair りろんと じっせん is a fixed phrase." },
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
        { id: "ja-u183l2-suiron", type: "vocab", front: "すいろん", reading: "suiron", meaning: "reasoning to a conclusion", example: { jp: "その すいろんは 正しく 見えますが、はじめの 数が まちがって います。", en: "The reasoning looks sound, but the opening figure is wrong." }, drill: { jp: "すいろんが まちがって います。", en: "The reasoning is wrong." }, accept: ["inference", "deduction", "working it out"], hint: "suiron — 推 (infer) + 論 (argument): inferring step by step. すいり is working out a hidden fact the way a detective does; すいろん is building a formal argument." },
        { id: "ja-u183l2-gakusetsu", type: "vocab", front: "がくせつ", reading: "gakusetsu", meaning: "a scholarly theory", example: { jp: "その がくせつは 今も 意見が 分かれて います。", en: "Opinion is still divided on that theory." }, drill: { jp: "がくせつが 分かれて います。", en: "The theories are divided." }, accept: ["academic doctrine", "a school of thought", "a scholarly position"], hint: "gakusetsu — 学 (study) + 説 (an account): a position held inside a field. りろん is a worked-out system; a がくせつ is one scholar's claim, which others are free to reject." },
        { id: "ja-u183l2-meidai", type: "vocab", front: "めいだい", reading: "meidai", meaning: "a proposition", example: { jp: "その めいだいが 正しいか どうかは、まだ 分かりません。", en: "Whether that proposition is true is still not known." }, drill: { jp: "めいだいが 正しいです。", en: "The proposition is correct." }, accept: ["a claim to be tested", "statement", "thesis"], hint: "がくせつ is a named scholar's position; めいだい is one sentence that is either true or false — the unit a すいろん moves between." },
        { id: "ja-u183l2-kosatsu", type: "vocab", front: "こうさつ", reading: "kōsatsu", meaning: "considered discussion", example: { jp: "こうさつの ところが いちばん 読まれる 部分です。", en: "The discussion section is the part that gets read most." }, drill: { jp: "こうさつを 書きます。", en: "I write the discussion." }, accept: ["examination", "the discussion (in a paper)", "study of"], hint: "kōsatsu — 考 (think) + 察 (examine closely): thinking a thing through in print. In a Japanese paper the こうさつ section is where you argue about what your results mean." },
        { id: "ja-u183l2-jissho", type: "vocab", front: "じっしょう", reading: "jisshō", meaning: "showing by evidence", example: { jp: "その 考えを じっしょうする ために、五年 かけて 数を 集めました。", en: "To demonstrate that idea we spent five years gathering figures." }, drill: { jp: "じっしょうが ひつようです。", en: "Empirical demonstration is needed." }, accept: ["empirical demonstration", "verification by data", "proving with data"], hint: "jisshō — 実 (actual) + 証 (evidence): proving with real data rather than by argument. じっしょうけんきゅう is empirical research, set against りろんけんきゅう." },
        { id: "ja-u183l2-shomei", type: "vocab", front: "しょうめい", reading: "shōmei", meaning: "proof", example: { jp: "しょうめいが できるまで、そう 言わない ほうが いいです。", en: "Until you can prove it, it's better not to say so." }, drill: { jp: "しょうめいが できません。", en: "It cannot be proved." }, accept: ["proving", "demonstration", "evidence of"], hint: "shōmei — the same word taught as 証明 in the kanji band, 証 (evidence) + 明 (make clear). Here it carries the logical sense: a proof with no gap left in it." },
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
        { id: "ja-u183l3-taisho", type: "vocab", front: "たいしょう", reading: "taishō", meaning: "the subject studied", example: { jp: "この 研究の たいしょうは、十代の 若い 人です。", en: "The subject of this study is people in their teens." }, drill: { jp: "たいしょうは わかい ひとです。", en: "The subject studied is young people." }, accept: ["object of study", "target group", "who it covers"], hint: "taishō — 対 (facing) + 象 (a figure): what the study faces, its subject matter or population. Careful — たいしょう also spells 対照, a contrast, and 対称, symmetry. Three words, one reading." },
        { id: "ja-u183l3-sansho", type: "vocab", front: "さんしょう", reading: "sanshō", meaning: "consulting a source", example: { jp: "古い 記ろくを さんしょうして、日にちを 直しました。", en: "I consulted the old records and corrected the date." }, drill: { jp: "さんしょうを しました。", en: "I consulted the source." }, accept: ["reference to", "looking it up", "see (in a citation)"], hint: "sanshō — 参 (refer to) + 照 (shine on): shining a light on a source to check against it. さんしょう is looking something up; いんよう is quoting it." },
        { id: "ja-u183l3-tenkyo", type: "vocab", front: "てんきょ", reading: "tenkyo", meaning: "the source relied on", example: { jp: "てんきょを 書かない 文章は、しんさで 止められます。", en: "A piece that doesn't give its source gets stopped at review." }, drill: { jp: "てんきょを 書きます。", en: "I write down the source relied on." }, accept: ["authority cited", "grounds", "where it is taken from"], hint: "tenkyo — 典 (a canonical text) + 拠 (grounds): the authority a claim rests on. しゅってん is where a quote came from; てんきょ is the ground you are standing on." },
        { id: "ja-u183l3-chosaku", type: "vocab", front: "ちょさく", reading: "chosaku", meaning: "a written work", example: { jp: "その 人の ちょさくは、今も 学校で 読まれて います。", en: "That person's writings are still read in schools." }, drill: { jp: "ちょさくが のこって います。", en: "The writings survive." }, accept: ["one's writings", "authored work", "publication"], hint: "chosaku — 著 (to write) + 作 (a work), the same 著 as ちょしゃ and ちょしょ. ちょさくけん, copyright, is the form you will run into most often." },
        { id: "ja-u183l3-toko", type: "vocab", front: "とうこう", reading: "tōkō", meaning: "submitting for publication", example: { jp: "とうこうしてから 半年 待って、やっと 返事が 来ました。", en: "I waited half a year after submitting before a reply finally came." }, drill: { jp: "とうこうを しました。", en: "I submitted it." }, accept: ["submission", "sending in a paper", "posting"], hint: "tōkō — 投 (throw) + 稿 (a manuscript): throwing your draft at an editor. It also covers posting online, which is why SNSに とうこうする is ordinary Japanese." },
        { id: "ja-u183l3-gakujutsu", type: "vocab", front: "がくじゅつ", reading: "gakujutsu", meaning: "scholarly", example: { jp: "がくじゅつの 世界では、早さより 正しさが 大切です。", en: "In the scholarly world, being right matters more than being fast." }, drill: { jp: "がくじゅつの 世界です。", en: "It is the scholarly world." }, accept: ["academic", "of learning", "scientific"], hint: "gakujutsu — 学 (study) + 術 (art, method): scholarship as a practice. がくじゅつてき means academic in register, and がくじゅつろんぶん is a peer-reviewed paper." },
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
        { id: "ja-u183l4-shinsa", type: "vocab", front: "しんさ", reading: "shinsa", meaning: "formal review", example: { jp: "しんさに 通るまで、三回 書き直しました。", en: "I rewrote it three times before it passed review." }, drill: { jp: "しんさに 通りました。", en: "It passed review." }, accept: ["assessment", "screening", "examination by a panel"], hint: "shinsa — 審 (examine judicially) + 査 (investigate): a formal judged examination — grants, visas, journals. けんさ tests a thing; しんさ judges whether it is accepted." },
        { id: "ja-u183l4-ginmi", type: "vocab", front: "ぎんみ", reading: "ginmi", meaning: "close scrutiny", example: { jp: "一つ 一つの 数を ぎんみして、まちがいを 見つけました。", en: "We scrutinised each figure one by one and found the error." }, drill: { jp: "ぎんみを しました。", en: "We scrutinised it." }, accept: ["careful checking", "going over in detail", "scrutiny"], hint: "しんさ is the official process with a verdict at the end; ぎんみ is the act of looking closely, with or without one." },
        { id: "ja-u183l4-gakkai", type: "vocab", front: "がっかい", reading: "gakkai", meaning: "an academic conference", example: { jp: "がっかいで 話してから、同じ 研究の 人と つながりました。", en: "After speaking at the conference I connected with others in the same field." }, drill: { jp: "がっかいで 話しました。", en: "I spoke at the conference." }, accept: ["learned society", "academic meeting", "a scholarly society"], hint: "gakkai — 学 (study) + 会 (an assembly): both the learned society and its annual meeting. Note the sound change, がく plus かい giving がっかい, the same doubling as いっさつ." },
        { id: "ja-u183l4-keisai", type: "vocab", front: "けいさい", reading: "keisai", meaning: "being carried in a journal", example: { jp: "けいさいが 決まった 日に、はじめて 先生に お礼を 言いました。", en: "On the day publication was confirmed, I thanked my supervisor for the first time." }, drill: { jp: "けいさいが 決まりました。", en: "Publication was confirmed." }, accept: ["publication in print", "appearing in an issue", "running a piece"], hint: "keisai — 掲 (to post up) + 載 (to carry): being carried in print, in a journal, a paper or a website. That 掲 is the same one as in けいじばん, a noticeboard." },
        { id: "ja-u183l4-saitaku", type: "vocab", front: "さいたく", reading: "saitaku", meaning: "being accepted", example: { jp: "さいたくの 知らせが 来て、一年の 仕事が むくわれました。", en: "The acceptance notice came, and a year of work was repaid." }, drill: { jp: "さいたくの 知らせが 来ました。", en: "The acceptance notice came." }, accept: ["adoption", "being selected", "approval of a proposal"], hint: "saitaku — 採 (pick) + 択 (choose): picked out of the candidates, with the same 採 as さいよう. Its opposite ふさいたく is the rejection letter." },
        { id: "ja-u183l4-shippitsu", type: "vocab", front: "しっぴつ", reading: "shippitsu", meaning: "writing up", example: { jp: "しっぴつに 半年、しんさに もう 半年 かかりました。", en: "Writing it up took half a year, and review took another half." }, drill: { jp: "しっぴつに 半年 かかりました。", en: "Writing it up took half a year." }, accept: ["authoring", "composing a text", "penning"], hint: "shippitsu — 執 (take hold of) + 筆 (a brush): taking up the brush. The formal word for authoring, so しっぴつちゅう means at work on a manuscript. かく is the plain verb." },
      ],
    },
  ],
};
