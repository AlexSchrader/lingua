// Unit 160 — しくみ・たいけい (Systems and abstraction) — B2 / JLPT N2
// Strand B. The vocabulary for talking about a system as a system: its shape, what
// depends on what, the rules it runs by, and how it is kept running. B1's u114 gave
// the words for an idea; this gives the words for a structure.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT160 = {
  id: "ja-u160",
  lang: "ja",
  title: "しくみ・たいけい",
  order: 160,
  stage: "b2",
  lessons: [
    {
      id: "ja-u160l1",
      unit: 160,
      lesson: 1,
      title: "The shape of a thing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how something is put together: たいけい こうぞう ぶぶん わく ちつじょ もけい.",
      items: [
        { id: "ja-u160l1-taikei", type: "vocab", front: "たいけい", reading: "taikei", meaning: "a system", example: { jp: "国に よって 学校の たいけいは 大きく ちがいます。", en: "School systems differ greatly from country to country." }, drill: { jp: "たいけいが ちがいます。", en: "The system is different." }, accept: ["framework", "organised whole", "scheme"], hint: "たいけい is a whole ordered set — 体系 literally 'body-system'. しくみ is how it works; たいけい is that it forms one." },
        { id: "ja-u160l1-kozo", type: "vocab", front: "こうぞう", reading: "kōzō", meaning: "structure", example: { jp: "この 問題の こうぞうが 分かれば、答えは 見えて きます。", en: "Once you see the structure of this problem, the answer comes into view." }, accept: ["construction", "make-up", "architecture"] },
        { id: "ja-u160l1-bubun", type: "vocab", front: "ぶぶん", reading: "bubun", meaning: "a part", example: { jp: "こわれたのは 一つの ぶぶんだけで、全体は 動いて います。", en: "Only one part broke; the whole still runs." }, drill: { jp: "ぶぶんが こわれました。", en: "A part broke." }, accept: ["portion", "section", "component"] },
        { id: "ja-u160l1-waku", type: "vocab", front: "わく", reading: "waku", meaning: "a frame", example: { jp: "決められた わくの 中でしか、お金は 使えません。", en: "The money can only be used within the set frame." }, accept: ["framework", "bounds", "quota"] },
        { id: "ja-u160l1-chitsujo", type: "vocab", front: "ちつじょ", reading: "chitsujo", meaning: "order", example: { jp: "ちつじょが ある 場所では、みんなが 安心して 動けます。", en: "Where there is order, everyone can act with confidence." }, accept: ["orderliness", "discipline", "structure"] },
        { id: "ja-u160l1-mokei", type: "vocab", front: "もけい", reading: "mokei", meaning: "a model", example: { jp: "もけいを 作って みると、こうぞうが よく 分かります。", en: "Building a model makes the structure much clearer." }, accept: ["scale model", "mock-up"] },
      ],
    },
    {
      id: "ja-u160l2",
      unit: 160,
      lesson: 2,
      title: "What depends on what",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how the parts act on each other: そうご いぞん せいやく とうごう ぶんかい きばん.",
      items: [
        { id: "ja-u160l2-sogo", type: "vocab", front: "そうご", reading: "sōgo", meaning: "mutual", example: { jp: "二つの 国の そうごの 理かいが、平和を ささえて います。", en: "Mutual understanding between the two countries supports the peace." }, accept: ["reciprocal", "each other's", "two-way"] },
        { id: "ja-u160l2-izon", type: "vocab", front: "いぞん", reading: "izon", meaning: "dependence", example: { jp: "一つの 会社への いぞんが 高いと、あぶないです。", en: "Heavy dependence on a single company is risky." }, drill: { jp: "いぞんが たかいです。", en: "The dependence is high." }, accept: ["reliance", "to depend on", "addiction"] },
        { id: "ja-u160l2-seiyaku", type: "vocab", front: "せいやく", reading: "seiyaku", meaning: "a constraint", example: { jp: "時間の せいやくが ある 中で、できるだけの ことを しました。", en: "Working under a time constraint, we did what we could." }, drill: { jp: "せいやくが あります。", en: "There is a constraint." }, accept: ["restriction", "limitation", "condition"] },
        { id: "ja-u160l2-togo", type: "vocab", front: "とうごう", reading: "tōgō", meaning: "integration", example: { jp: "二つの 部を とうごうして、一つの 大きな 部に しました。", en: "They integrated the two departments into one large one." }, drill: { jp: "とうごうを しました。", en: "We carried out the integration." }, accept: ["to merge", "unification", "consolidation"], hint: "とうごう and ぶんかい are the pair: putting parts into one whole, and taking a whole back into parts." },
        { id: "ja-u160l2-bunkai", type: "vocab", front: "ぶんかい", reading: "bunkai", meaning: "breaking down", example: { jp: "むずかしい 問題は、小さく ぶんかいすると 考えやすいです。", en: "A hard problem is easier to think about broken into small pieces." }, accept: ["decomposition", "to take apart", "analysis"] },
        { id: "ja-u160l2-kiban", type: "vocab", front: "きばん", reading: "kiban", meaning: "the base", example: { jp: "この 町の きばんは 長い 間 魚を とる しごとでした。", en: "This town's base was fishing for a long time." }, accept: ["foundation", "footing", "infrastructure"] },
      ],
    },
    {
      id: "ja-u160l3",
      unit: 160,
      lesson: 3,
      title: "Rules and theories",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move between a rule and the case in front of you: ほうそく りろん かせつ てきよう おうよう たんじゅん.",
      items: [
        { id: "ja-u160l3-hosoku", type: "vocab", front: "ほうそく", reading: "hōsoku", meaning: "a law (of nature)", example: { jp: "自ぜんの ほうそくは、人の つごうでは 変わりません。", en: "The laws of nature don't change to suit people." }, accept: ["principle", "rule", "regularity"], hint: "ほうそく is a law that DESCRIBES how things behave; 法律 is a law that TELLS people how to behave. Different words, no overlap." },
        { id: "ja-u160l3-riron", type: "vocab", front: "りろん", reading: "riron", meaning: "theory", example: { jp: "りろんでは 正しくても、じっさいには うまく いきません。", en: "It's right in theory, but it doesn't work in practice." }, accept: ["a theory", "the theoretical side"] },
        { id: "ja-u160l3-kasetsu", type: "vocab", front: "かせつ", reading: "kasetsu", meaning: "a hypothesis", example: { jp: "かせつを 立ててから、しりょうで けんしょうします。", en: "You form a hypothesis, then verify it against the evidence." }, accept: ["supposition", "working theory"] },
        { id: "ja-u160l3-tekiyo", type: "vocab", front: "てきよう", reading: "tekiyō", meaning: "application (of a rule)", example: { jp: "この 決まりは 子どもには てきようされません。", en: "This rule doesn't apply to children." }, accept: ["to apply", "enforcement"] },
        { id: "ja-u160l3-oyo", type: "vocab", front: "おうよう", reading: "ōyō", meaning: "applied use", example: { jp: "習った ことを おうようすると、新しい 問題も とけます。", en: "If you apply what you've learned, you can solve new problems too." }, drill: { jp: "おうようが できます。", en: "Applied use is possible." }, accept: ["to put to use", "practical application"], hint: "てきよう is a rule reaching a case; おうよう is you taking a skill somewhere new. Only one of them is creative." },
        { id: "ja-u160l3-tanjun", type: "vocab", front: "たんじゅん", reading: "tanjun", meaning: "simple", example: { jp: "たんじゅんな しくみほど、こわれにくいです。", en: "The simpler the mechanism, the less it breaks." }, accept: ["straightforward", "uncomplicated", "plain"] },
      ],
    },
    {
      id: "ja-u160l4",
      unit: 160,
      lesson: 4,
      title: "Keeping it running",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about operating and maintaining a system: せいぎょ うんよう いじ ちくせき じゅんかん こうりつ.",
      items: [
        { id: "ja-u160l4-seigyo", type: "vocab", front: "せいぎょ", reading: "seigyo", meaning: "control", example: { jp: "きかいの せいぎょが うまく いかず、とちゅうで 止まりました。", en: "The machine's control failed and it stopped." }, accept: ["to regulate", "governing", "steering"] },
        { id: "ja-u160l4-unyo", type: "vocab", front: "うんよう", reading: "unyō", meaning: "operation (in practice)", example: { jp: "決まりは いいですが、うんようが むずかしいです。", en: "The rule is fine, but operating it is difficult." }, accept: ["running", "administration", "putting to work"] },
        { id: "ja-u160l4-iji", type: "vocab", front: "いじ", reading: "iji", meaning: "maintenance", example: { jp: "古い 橋の いじには お金が かかります。", en: "Maintaining an old bridge costs money." }, accept: ["upkeep", "to maintain", "preservation"] },
        { id: "ja-u160l4-chikuseki", type: "vocab", front: "ちくせき", reading: "chikuseki", meaning: "accumulation", example: { jp: "長い 年の ちくせきが、今の 強さに なって います。", en: "The accumulation of many years is what makes it strong now." }, accept: ["build-up", "to accumulate", "store"] },
        { id: "ja-u160l4-junkan", type: "vocab", front: "じゅんかん", reading: "junkan", meaning: "a cycle", example: { jp: "水の じゅんかんが 止まると、田も 畑も こまります。", en: "If the water cycle stops, both paddies and fields suffer." }, accept: ["circulation", "loop", "rotation"] },
        { id: "ja-u160l4-koritsu", type: "vocab", front: "こうりつ", reading: "kōritsu", meaning: "efficiency", example: { jp: "こうりつだけを 考えると、大切な ものを なくします。", en: "Think only about efficiency and you lose what matters." }, accept: ["productivity", "effectiveness"] },
      ],
    },
  ],
};
