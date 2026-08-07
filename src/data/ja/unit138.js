// JA Unit 138 — ぶんぽう・7 (passive, causative, indirect) — B1 / JLPT N3
// Strand C, grammar 7 of 8. u46 (どうし・うけみ) drilled the passive/causative on a set
// of A2 VERBS; this unit teaches the endings themselves as function vocab, plus the two
// systems a learner cannot express a favour without: やりもらい (てあげます・てくれます・
// てもらいます) and the ～て auxiliaries (てあります・ておきます・てしまいます…).
// Every example is two clauses or a clause plus its reason, per the B1 spec.
// Fronts checked against the whole ja corpus — the ～ます base verbs (よびます, しります,
// つかいます, いいます) already have homes in A1/A2, so this unit teaches their PASSIVE
// forms, which are distinct words a learner meets constantly and cannot derive by ear.
export const UNIT138 = {
  id: "ja-u138",
  lang: "ja",
  title: "ぶんぽう・7",
  order: 138,
  stage: "b1",
  lessons: [
    // Lesson 1: the passive
    {
      id: "ja-u138l1",
      unit: 138,
      lesson: 1,
      title: "Getting done to you (うけみ)",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what was done to you rather than who did it: られます・れます, and the four passives you will hear daily.",
      items: [
        { id: "ja-u138l1-raremasu", type: "vocab", front: "られます", reading: "raremasu", meaning: "(passive) is done to", example: { jp: "ケーキをつくったのに、いもうとにぜんぶたべられました。", en: "I made a cake, but my little sister ate the whole thing on me." }, accept: ["gets done", "is ~ed", "passive"], hint: "ichidan verbs and します take られます: たべます → たべられます. The person it happened TO becomes は/が, and the doer takes に. Note the complaint built into it — the cake was yours." },
        { id: "ja-u138l1-remasu", type: "vocab", front: "れます", reading: "remasu", meaning: "(passive, godan verbs)", example: { jp: "こどものとき、よくははにしかられました。", en: "When I was a child I often got scolded by my mother." }, accept: ["gets done", "is ~ed", "passive"], hint: "godan verbs take れます: よみます → よまれます, かきます → かかれます. Same meaning as られます — only the verb group differs." },
        { id: "ja-u138l1-iwaremasu", type: "vocab", front: "いわれます", reading: "iwaremasu", meaning: "is said, gets told", example: { jp: "にほんはあんぜんなくにだといわれています。", en: "Japan is said to be a safe country." }, accept: ["is called", "people say", "is told"], hint: "～といわれています is how Japanese states common knowledge without naming a source. Read it as 'they say that…'." },
        { id: "ja-u138l1-yobaremasu", type: "vocab", front: "よばれます", reading: "yobaremasu", meaning: "is called (named)", example: { jp: "このまちはみずのまちとよばれています。", en: "This town is called the town of water." }, accept: ["is named", "is known as", "gets called"], hint: "X は Y とよばれています = 'X is known as Y'. The と is the quote particle — it marks the name itself." },
        { id: "ja-u138l1-shiraremasu", type: "vocab", front: "しられます", reading: "shiraremasu", meaning: "becomes known", example: { jp: "そのニュースはすぐにみんなにしられました。", en: "That news quickly became known to everyone." }, accept: ["is known", "gets found out", "comes out"], hint: "しられます often carries the sense you'd rather it hadn't: ひみつがしられました = the secret got out." },
        { id: "ja-u138l1-tsukawaremasu", type: "vocab", front: "つかわれます", reading: "tsukawaremasu", meaning: "is used", example: { jp: "このことばはわかいひとによくつかわれます。", en: "This word is used a lot by young people." }, accept: ["gets used", "is employed", "is in use"], hint: "For a thing, the passive is the normal way to describe it — you rarely name who uses it. The doer takes に." },
      ],
    },
    // Lesson 2: the causative
    {
      id: "ja-u138l2",
      unit: 138,
      lesson: 2,
      title: "Making and letting (しえき)",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who made or let someone do something — and ask permission with させてください.",
      items: [
        { id: "ja-u138l2-sasemasu", type: "vocab", front: "させます", reading: "sasemasu", meaning: "make/let (someone) do", example: { jp: "テストがちかいので、せんせいはがくせいにかんじをおぼえさせました。", en: "The test was near, so the teacher made the students memorize kanji." }, accept: ["cause to do", "have someone do", "allow to do"], hint: "ichidan and します take させます. Whether it means MAKE or LET comes from context, not the form — に for people who wanted to, を for people who didn't." },
        { id: "ja-u138l2-semasu", type: "vocab", front: "せます", reading: "semasu", meaning: "make/let (godan verbs)", example: { jp: "よるはあぶないので、ちちはいもうとをひとりでいかせません。", en: "Nights are dangerous, so my father won't let my little sister go alone." }, accept: ["cause to do", "have someone do", "allow to do"], hint: "godan verbs take せます: いきます → いかせます, まちます → またせます. Same job as させます, different group." },
        { id: "ja-u138l2-saseraremasu", type: "vocab", front: "させられます", reading: "saseraremasu", meaning: "be made to do", example: { jp: "こどものとき、まいにちピアノをれんしゅうさせられました。", en: "As a child I was made to practise the piano every day." }, accept: ["is forced to", "have to (unwillingly)", "causative passive"], hint: "Causative + passive stacked: someone made you, and you didn't want to. This form always complains — that is its whole job." },
        { id: "ja-u138l2-sasetekudasai", type: "vocab", front: "させてください", reading: "sasetekudasai", meaning: "please let me", example: { jp: "つかれたので、すこしやすませてください。", en: "I'm tired, so please let me rest a little." }, accept: ["allow me to", "let me", "may I"], hint: "The politest way to volunteer for something: causative + てください = 'let me do it'. わたしにやらせてください = 'let me handle it'." },
        { id: "ja-u138l2-makasemasu", type: "vocab", front: "まかせます", reading: "makasemasu", meaning: "to entrust", example: { jp: "このしごとはわたしにまかせてください。", en: "Please leave this job to me." }, accept: ["leave to", "put in charge", "trust with"], hint: "Person + に + まかせます. まかせて！ on its own is a confident 'leave it to me'." },
        { id: "ja-u138l2-yurushimasu", type: "vocab", front: "ゆるします", reading: "yurushimasu", meaning: "to permit, to forgive", example: { jp: "おそくなりましたが、ちちはゆるしてくれました。", en: "I was late, but my father forgave me." }, accept: ["to allow", "to pardon", "to let off"], hint: "One verb, two jobs: permission (はいるのをゆるす) and forgiveness (あやまったらゆるしてくれた). Context separates them." },
      ],
    },
    // Lesson 3: doing things FOR people
    {
      id: "ja-u138l3",
      unit: 138,
      lesson: 3,
      title: "Favours: てあげます・てくれます・てもらいます",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who did a favour for whom — the direction of kindness that Japanese always marks.",
      items: [
        { id: "ja-u138l3-teagemasu", type: "vocab", front: "てあげます", reading: "teagemasu", meaning: "do (something) for someone", example: { jp: "ともだちがこまっていたので、てつだってあげました。", en: "My friend was in trouble, so I helped them out." }, accept: ["do a favour for", "do for someone else"], hint: "The favour goes OUT from you. Careful: saying てあげます to the person's face can sound like you want credit — with a superior, use ましょうか instead." },
        { id: "ja-u138l3-tekuremasu", type: "vocab", front: "てくれます", reading: "tekuremasu", meaning: "does (something) for me", example: { jp: "みちがわからなかったとき、しんせつなひとがおしえてくれました。", en: "When I didn't know the way, a kind person showed me." }, accept: ["does me the favour of", "does for me"], hint: "The favour comes IN toward you. Japanese marks this every time — leaving てくれます off makes a kind act sound like a bare fact." },
        { id: "ja-u138l3-temoraimasu", type: "vocab", front: "てもらいます", reading: "temoraimasu", meaning: "get someone to do", example: { jp: "じがよめなかったので、ともだちによんでもらいました。", en: "I couldn't read the characters, so I got my friend to read them." }, accept: ["have someone do", "receive the favour of"], hint: "Same event as てくれます, told from the other end: てくれます makes the giver the subject, てもらいます makes YOU the subject. The doer takes に." },
        { id: "ja-u138l3-teitadakimasu", type: "vocab", front: "ていただきます", reading: "teitadakimasu", meaning: "get someone to do (humble)", example: { jp: "ぶちょうにしりょうをみていただきました。", en: "I had the department head look over the documents." }, accept: ["have someone do (polite)", "humbly receive the favour"], hint: "The humble てもらいます — use it whenever the person doing you the favour outranks you. Pairs with ていただけませんか for the request itself." },
        { id: "ja-u138l3-tekudasaimasu", type: "vocab", front: "てくださいます", reading: "tekudasaimasu", meaning: "does for me (respectful)", example: { jp: "せんせいがえきまでおくってくださいました。", en: "My teacher was kind enough to drive me to the station." }, accept: ["kindly does for me", "does me the honour of"], hint: "The respectful てくれます. Note the reading: くださいます, not くださります — it is one of the five irregular respectful verbs." },
        { id: "ja-u138l3-sashiagemasu", type: "vocab", front: "さしあげます", reading: "sashiagemasu", meaning: "to give (humble)", example: { jp: "おきゃくさまにおちゃをさしあげました。", en: "I served tea to the guest." }, accept: ["to present", "to offer", "give humbly"], hint: "The humble あげます. Like てあげます it can sound self-congratulatory said to the person's face — safest in a report of what you did." },
      ],
    },
    // Lesson 4: the ～て auxiliaries
    {
      id: "ja-u138l4",
      unit: 138,
      lesson: 4,
      title: "て-form helpers: ておきます・てしまいます",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Add intent to a verb: done in advance (ておきます), finished or regretted (てしまいます), tried out (てみます).",
      items: [
        { id: "ja-u138l4-teokimasu", type: "vocab", front: "ておきます", reading: "teokimasu", meaning: "do in advance", example: { jp: "あしたのかいぎのまえに、しりょうをよんでおきます。", en: "I'll read the documents in advance, before tomorrow's meeting." }, accept: ["do beforehand", "get it done", "prepare by doing"], hint: "ておきます = do it now so it's ready later. In speech it contracts to ～とく: よんどく, かっとく." },
        { id: "ja-u138l4-teshimaimasu", type: "vocab", front: "てしまいます", reading: "teshimaimasu", meaning: "finish doing; do by mistake", example: { jp: "でんしゃのなかで、かさをわすれてしまいました。", en: "I went and left my umbrella on the train." }, accept: ["end up doing", "do completely", "unfortunately do"], hint: "Two readings from one form: 'get it all done' or 'oh no, I did it'. Past tense usually means regret. Contracts to ～ちゃう: わすれちゃった." },
        { id: "ja-u138l4-tearimasu", type: "vocab", front: "てあります", reading: "tearimasu", meaning: "has been done (and stays that way)", example: { jp: "まどがあけてあるので、へやがすずしいです。", en: "The window has been left open, so the room is cool." }, accept: ["is left done", "has been prepared", "stands done"], hint: "Someone did it on purpose and the result is still there. Compare ています (in progress) and ておきます (doing it for later)." },
        { id: "ja-u138l4-temimasu", type: "vocab", front: "てみます", reading: "temimasu", meaning: "try doing", example: { jp: "あたらしいみせができたので、いちどいってみます。", en: "A new shop has opened, so I'll go and try it once." }, accept: ["give it a try", "have a go at", "do and see"], hint: "てみます is 'do it and see what happens' — an experiment, not an attempt. For 'try hard to' use ようとします." },
        { id: "ja-u138l4-teikimasu", type: "vocab", front: "ていきます", reading: "teikimasu", meaning: "go on doing; do and leave", example: { jp: "これからも、にほんごをべんきょうしていきます。", en: "From here on I'll keep on studying Japanese." }, accept: ["continue doing", "keep doing", "do then go"], hint: "Movement away from now: either 'do it and then leave' (たべていきます) or 'keep doing it into the future'." },
        { id: "ja-u138l4-tekimasu", type: "vocab", front: "てきます", reading: "tekimasu", meaning: "come to be; go and come back", example: { jp: "さいきん、にほんごがわかってきました。", en: "Lately I've started to understand Japanese." }, accept: ["gradually become", "go do and return", "have come to"], hint: "The mirror of ていきます: movement toward now. かってきます = go buy it and come back; さむくなってきました = it's been getting cold." },
      ],
    },
  ],
};
