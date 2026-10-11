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
        { id: "ja-u160l1-kozo", type: "vocab", front: "こうぞう", reading: "kōzō", meaning: "structure", example: { jp: "この 問題の こうぞうが 分かれば、答えは 見えて きます。", en: "Once you see the structure of this problem, the answer comes into view." }, drill: { jp: "こうぞうを かえました。", en: "We changed the structure." }, accept: ["construction", "make-up", "architecture"], hint: "kōzō — 構 (construct) + 造 (make): how the parts are put together. It is the arrangement rather than the thing, so a sentence, a building and an argument all have こうぞう." },
        { id: "ja-u160l1-bubun", type: "vocab", front: "ぶぶん", reading: "bubun", meaning: "a part (a section of a whole)", example: { jp: "こわれたのは 一つの ぶぶんだけで、全体は 動いて います。", en: "Only one part broke; the whole still runs." }, drill: { jp: "ぶぶんが こわれました。", en: "A part broke." }, accept: ["portion", "section", "component"], hint: "bubun — 部 (section) + 分 (portion), the standing opposite of ぜんたい, the whole. ぶぶんてきに means partially. If you can point at a boundary around it, it is a ぶぶん." },
        { id: "ja-u160l1-waku", type: "vocab", front: "わく", reading: "waku", meaning: "a frame", example: { jp: "決められた わくの 中でしか、お金は 使えません。", en: "The money can only be used within the set frame." }, drill: { jp: "わくの 外には 出られません。", en: "You cannot go outside the frame." }, accept: ["framework", "bounds", "quota"], hint: "waku — a picture frame, a window frame, and by extension a budget or a quota. わくの 中 is what you are allowed; わく外 is outside the rules. Usually written in kana, not 枠." },
        { id: "ja-u160l1-chitsujo", type: "vocab", front: "ちつじょ", reading: "chitsujo", meaning: "order (orderliness in society)", example: { jp: "ちつじょが ある 場所では、みんなが 安心して 動けます。", en: "Where there is order, everyone can act with confidence." }, drill: { jp: "ちつじょを まもりましょう。", en: "Let us keep order." }, accept: ["orderliness", "discipline", "structure"], hint: "chitsujo — 秩 (orderly) + 序 (sequence): social order — queues, traffic, an institution that works. Not tidiness: a tidy room is きれい, a tidy society has ちつじょ." },
        { id: "ja-u160l1-mokei", type: "vocab", front: "もけい", reading: "mokei", meaning: "a model", example: { jp: "もけいを 作って みると、こうぞうが よく 分かります。", en: "Building a model makes the structure much clearer." }, drill: { jp: "もけいを 見せて ください。", en: "Please show me the model." }, accept: ["scale model", "mock-up", "a model"], hint: "mokei — 模 (imitate) + 型 (a mould): a physical imitation at a different size. Plastic kits and architects' models both. A mathematical model is モデル in katakana, never もけい." },
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
        { id: "ja-u160l2-sogo", type: "vocab", front: "そうご", reading: "sōgo", meaning: "mutual (reciprocal between two)", example: { jp: "二つの 国の そうごの 理かいが、平和を ささえて います。", en: "Mutual understanding between the two countries supports the peace." }, drill: { jp: "そうごの かんけいが 強いです。", en: "The mutual relationship is strong." }, accept: ["reciprocal", "each other's", "two-way"], hint: "sōgo — 相 (each other) + 互 (mutual), doubled for emphasis. Always between two parties and always symmetric: そうごりかい is mutual understanding. One-directional help is not そうご." },
        { id: "ja-u160l2-izon", type: "vocab", front: "いぞん", reading: "izon", meaning: "dependence", example: { jp: "一つの 会社への いぞんが 高いと、あぶないです。", en: "Heavy dependence on a single company is risky." }, drill: { jp: "いぞんが たかいです。", en: "The dependence is high." }, accept: ["reliance", "to depend on", "addiction"], hint: "izon — 依 (rely) + 存 (exist): existing by leaning on something. Neutral in economics, negative about health, where アルコールいぞん is addiction. いぞんが 高い is the standard phrase." },
        { id: "ja-u160l2-seiyaku", type: "vocab", front: "せいやく", reading: "seiyaku", meaning: "a constraint", example: { jp: "時間の せいやくが ある 中で、できるだけの ことを しました。", en: "Working under a time constraint, we did what we could." }, drill: { jp: "せいやくが あります。", en: "There is a constraint." }, accept: ["restriction", "limitation", "condition"], hint: "seiyaku — 制 (control) + 約 (bind): a limit set from outside that you have to work inside. Time, money, law. It is not a refusal, only a boundary on what is possible." },
        { id: "ja-u160l2-togo", type: "vocab", front: "とうごう", reading: "tōgō", meaning: "integration", example: { jp: "二つの 部を とうごうして、一つの 大きな 部に しました。", en: "They integrated the two departments into one large one." }, drill: { jp: "とうごうを しました。", en: "We carried out the integration." }, accept: ["to merge", "unification", "consolidation"], hint: "とうごう and ぶんかい are the pair: putting parts into one whole, and taking a whole back into parts." },
        { id: "ja-u160l2-bunkai", type: "vocab", front: "ぶんかい", reading: "bunkai", meaning: "breaking down", example: { jp: "むずかしい 問題は、小さく ぶんかいすると 考えやすいです。", en: "A hard problem is easier to think about broken into small pieces." }, drill: { jp: "ぶんかいに 時間が かかります。", en: "Taking it apart takes time." }, accept: ["decomposition", "to take apart", "analysis"], hint: "bunkai — 分 (divide) + 解 (undo): taking a thing apart into its pieces. Machines, problems, chemicals. The pieces survive, and that is what separates it from こわす." },
        { id: "ja-u160l2-kiban", type: "vocab", front: "きばん", reading: "kiban", meaning: "the base", example: { jp: "この 町の きばんは 長い 間 魚を とる しごとでした。", en: "This town's base was fishing for a long time." }, drill: { jp: "きばんを 作ります。", en: "We build the base." }, accept: ["foundation", "footing", "infrastructure"], hint: "kiban — 基 (foundation) + 盤 (a board or disc): the flat base everything sits on — an economy, an industry, a circuit board. 基地 is a place; きばん is what holds a thing up." },
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
        { id: "ja-u160l3-hosoku", type: "vocab", front: "ほうそく", reading: "hōsoku", meaning: "a law (of nature)", example: { jp: "自ぜんの ほうそくは、人の つごうでは 変わりません。", en: "The laws of nature don't change to suit people." }, drill: { jp: "ほうそくが 分かりました。", en: "We worked out the law." }, accept: ["principle", "rule", "regularity"], hint: "ほうそく is a law that DESCRIBES how things behave; 法律 is a law that TELLS people how to behave. Different words, no overlap." },
        { id: "ja-u160l3-riron", type: "vocab", front: "りろん", reading: "riron", meaning: "theory", example: { jp: "りろんでは 正しくても、じっさいには うまく いきません。", en: "It's right in theory, but it doesn't work in practice." }, drill: { jp: "りろんは むずかしいです。", en: "The theory is difficult." }, accept: ["a theory", "the theoretical side", "theoretical account"], hint: "riron — 理 (reason) + 論 (argument): a reasoned system that explains a body of facts. りろんてきには, in theory, nearly always sets up a but. A かせつ is one untested guess inside it." },
        { id: "ja-u160l3-kasetsu", type: "vocab", front: "かせつ", reading: "kasetsu", meaning: "a hypothesis", example: { jp: "かせつを 立ててから、しりょうで けんしょうします。", en: "You form a hypothesis, then verify it against the evidence." }, drill: { jp: "かせつが 正しいか しらべます。", en: "We check whether the hypothesis is right." }, accept: ["supposition", "working theory", "a hypothesis"], hint: "kasetsu — 仮 (temporary) + 説 (explanation): a provisional account, held only until it is tested. Note 仮, the same kanji as in 仮の決まり — built to be replaced." },
        { id: "ja-u160l3-tekiyo", type: "vocab", front: "てきよう", reading: "tekiyō", meaning: "application (of a rule)", example: { jp: "この 決まりは 子どもには てきようされません。", en: "This rule doesn't apply to children." }, drill: { jp: "てきようを やめました。", en: "We stopped applying it." }, accept: ["to apply", "enforcement", "applying a rule"], hint: "tekiyō — 適 (suitable) + 用 (use): fitting an existing rule onto a case. The rule itself does not change, only its reach. おうよう is adapting what you know to a NEW problem." },
        { id: "ja-u160l3-oyo", type: "vocab", front: "おうよう", reading: "ōyō", meaning: "applied use", example: { jp: "習った ことを おうようすると、新しい 問題も とけます。", en: "If you apply what you've learned, you can solve new problems too." }, drill: { jp: "おうようが できます。", en: "Applied use is possible." }, accept: ["to put to use", "practical application", "adapting what you know"], hint: "てきよう is a rule reaching a case; おうよう is you taking a skill somewhere new. Only one of them is creative." },
        { id: "ja-u160l3-tanjun", type: "vocab", front: "たんじゅん", reading: "tanjun", meaning: "simple (uncomplicated in structure)", example: { jp: "たんじゅんな しくみほど、こわれにくいです。", en: "The simpler the mechanism, the less it breaks." }, drill: { jp: "たんじゅんに 考えましょう。", en: "Let us think about it simply." }, accept: ["straightforward", "uncomplicated", "plain"], hint: "tanjun — 単 (single) + 純 (pure): few parts, so little to go wrong. かんたん is easy to DO; たんじゅん is simple in STRUCTURE. Said of a person it means naive, so handle it carefully." },
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
        { id: "ja-u160l4-seigyo", type: "vocab", front: "せいぎょ", reading: "seigyo", meaning: "control", example: { jp: "きかいの せいぎょが うまく いかず、とちゅうで 止まりました。", en: "The machine's control failed and it stopped." }, drill: { jp: "せいぎょが むずかしいです。", en: "It is hard to control." }, accept: ["to regulate", "governing", "steering"], hint: "seigyo — 制 (control) + 御 (govern): keeping a system inside its limits, usually by machine. A car's engine is せいぎょされる; a classroom of children is not." },
        { id: "ja-u160l4-unyo", type: "vocab", front: "うんよう", reading: "unyō", meaning: "operation (in practice)", example: { jp: "決まりは いいですが、うんようが むずかしいです。", en: "The rule is fine, but operating it is difficult." }, drill: { jp: "うんようを 始めます。", en: "We start operating it." }, accept: ["running", "administration", "putting to work"], hint: "unyō — 運 (carry along) + 用 (use): running something day to day, as against designing it. A rule has a written form and an うんよう, and the two often differ." },
        { id: "ja-u160l4-iji", type: "vocab", front: "いじ", reading: "iji", meaning: "maintenance", example: { jp: "古い 橋の いじには お金が かかります。", en: "Maintaining an old bridge costs money." }, drill: { jp: "いじに お金が かかります。", en: "Maintenance costs money." }, accept: ["upkeep", "to maintain", "preservation"], hint: "iji — 維 (tie) + 持 (hold): holding a thing at its current state and no better. Bridges, machines, health, and 現状いじ, keeping the status quo." },
        { id: "ja-u160l4-chikuseki", type: "vocab", front: "ちくせき", reading: "chikuseki", meaning: "accumulation", example: { jp: "長い 年の ちくせきが、今の 強さに なって います。", en: "The accumulation of many years is what makes it strong now." }, drill: { jp: "ちくせきが 大切です。", en: "Accumulation is what matters." }, accept: ["build-up", "to accumulate", "store"], hint: "chikuseki — 蓄 (store) + 積 (pile up): what builds up slowly and stays. Experience, fatigue, savings, data. It names the TOTAL, not the act of adding to it." },
        { id: "ja-u160l4-junkan", type: "vocab", front: "じゅんかん", reading: "junkan", meaning: "a cycle", example: { jp: "水の じゅんかんが 止まると、田も 畑も こまります。", en: "If the water cycle stops, both paddies and fields suffer." }, drill: { jp: "じゅんかんが 止まりました。", en: "The cycle has stopped." }, accept: ["circulation", "loop", "rotation"], hint: "junkan — 循 (go round) + 環 (a ring): a loop that returns to its start. Water, blood, money, recycling. 悪じゅんかん, a vicious circle, is the form you will hear most." },
        { id: "ja-u160l4-koritsu", type: "vocab", front: "こうりつ", reading: "kōritsu", meaning: "efficiency (effectiveness of a method)", example: { jp: "こうりつだけを 考えると、大切な ものを なくします。", en: "Think only about efficiency and you lose what matters." }, drill: { jp: "こうりつを 上げたいです。", en: "I want to raise efficiency." }, accept: ["productivity", "effectiveness", "how efficient it is"], hint: "kōritsu — 効 (effect) + 率 (rate): effect per unit of effort. こうりつが いい is the everyday praise for a method. It is a RATE, so it can rise even while output falls." },
      ],
    },
  ],
};
