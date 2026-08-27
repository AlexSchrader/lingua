// Unit 194 — ふくごうどうし・2 (compound verbs: in, out, and partway) — B2 / JLPT N2
// Strand D, coverage 2 of 16. u193 took the suffixes that mean "to the end"; this one takes
// the three that mean DIRECTION — ～こむ inward, ～だす outward or starting, ～かける／～かかる
// stopped halfway or coming at you. ～こむ gets two lessons because it does two unrelated
// jobs: physical entry (もちこむ) and going deep into a state (だまりこむ), and learners who
// only meet the first are lost the first time they read だまりこんだ.
export const UNIT194 = {
  id: "ja-u194",
  lang: "ja",
  title: "ふくごうどうし・2",
  order: 194,
  stage: "b2",
  lessons: [
    {
      id: "ja-u194l1",
      unit: 194,
      lesson: 1,
      title: "～こむ: into a space",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something went into something else: もちこむ, しこむ, ふみこむ, とびこむ, つめこむ, まきこむ.",
      items: [
        { id: "ja-u194l1-mochikomu", type: "vocab", front: "もちこむ", reading: "mochikomu", meaning: "to bring in (to a place)", example: { jp: "ここには 飲み物を もちこまないで ください。", en: "Please don't bring drinks in here." }, accept: ["to carry into", "to take in", "to bring (a problem) to"], hint: "もつ (carry) + こむ (into). Also used for taking a problem to someone: けいさつに もちこむ." },
        { id: "ja-u194l1-shikomu", type: "vocab", front: "しこむ", reading: "shikomu", meaning: "to train up; to prepare in advance", example: { jp: "新しい 人を 一から しこむのは 時間が かかります。", en: "Training a new person up from scratch takes time." }, accept: ["to teach thoroughly", "to prep (ingredients)", "to install"], hint: "Putting knowledge or preparation INTO something — a trainee, a dish, a machine. The noun しこみ is a restaurant's morning prep." },
        { id: "ja-u194l1-fumikomu", type: "vocab", front: "ふみこむ", reading: "fumikomu", meaning: "to step into; to go further than expected", example: { jp: "そこまで ふみこんだ 話は、まだ できません。", en: "I can't go into it that deeply yet." }, accept: ["to venture into", "to press further", "to tread in"], hint: "Literal for stepping in, and very common figuratively for going past the safe part of a subject. ふみこんだ質問 is a question that pushes." },
        { id: "ja-u194l1-tobikomu", type: "vocab", front: "とびこむ", reading: "tobikomu", meaning: "to jump in, to dive in", example: { jp: "子どもが いけに とびこんで、みんな おどろきました。", en: "A child jumped into the pond and startled everyone." }, accept: ["to leap into", "to plunge in", "to burst in"], hint: "とびこみ also means an unscheduled arrival — とびこみのお客 is a walk-in customer, no booking." },
        { id: "ja-u194l1-tsumekomu", type: "vocab", front: "つめこむ", reading: "tsumekomu", meaning: "to cram in", example: { jp: "かばんに 服を つめこみすぎて、閉まりません。", en: "I crammed too many clothes into the bag and it won't shut." }, accept: ["to stuff", "to pack tightly", "to cram (facts)"], hint: "Bags and heads alike — つめこみきょういく is 'cramming education', the standard criticism of exam-driven schooling." },
        { id: "ja-u194l1-makikomu", type: "vocab", front: "まきこむ", reading: "makikomu", meaning: "to drag (someone) into", example: { jp: "友だちを めんどうな ことに まきこんで しまいました。", en: "I ended up dragging my friend into a mess." }, accept: ["to involve (unwillingly)", "to embroil", "to catch up in"], hint: "Nearly always unwelcome — you are pulled into someone else's trouble. じこに まきこまれる is how news reports describe a bystander." },
      ],
    },
    {
      id: "ja-u194l2",
      unit: 194,
      lesson: 2,
      title: "～こむ: deep into a state",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe sinking into a condition: かんがえこむ, だまりこむ, ねむりこむ, すいこむ, おもいこむ, しずみこむ.",
      items: [
        { id: "ja-u194l2-kangaekomu", type: "vocab", front: "かんがえこむ", reading: "kangaekomu", meaning: "to brood, to sink into thought", example: { jp: "その 質問に、かれは しばらく かんがえこみました。", en: "He sank into thought for a while at that question." }, accept: ["to ponder deeply", "to be lost in thought"], hint: "The pair to u193's かんがえぬく, and the contrast is the point: かんがえぬく arrives at an answer, かんがえこむ just goes further in." },
        { id: "ja-u194l2-damarikomu", type: "vocab", front: "だまりこむ", reading: "damarikomu", meaning: "to fall silent (and stay so)", example: { jp: "そう 言われて、かのじょは だまりこんで しまいました。", en: "At that, she fell silent." }, accept: ["to clam up", "to go quiet", "to lapse into silence"], hint: "だまる is stopping talking; だまりこむ is settling into the silence and not coming out of it." },
        { id: "ja-u194l2-nemurikomu", type: "vocab", front: "ねむりこむ", reading: "nemurikomu", meaning: "to fall fast asleep", example: { jp: "つかれて いたので、すぐに ねむりこみました。", en: "I was tired, so I fell fast asleep straight away." }, accept: ["to drop off", "to sleep deeply"], hint: "Not just sleeping but going right down into it — often when you did not intend to." },
        { id: "ja-u194l2-suikomu", type: "vocab", front: "すいこむ", reading: "suikomu", meaning: "to suck in, to absorb", example: { jp: "外の きれいな 空気を 大きく すいこみました。", en: "I took a deep breath of the clean air outside." }, accept: ["to breathe in", "to draw in", "to soak up"], hint: "Air, dust, water, or knowledge. A child すいこむように おぼえる — absorbs like a sponge." },
        { id: "ja-u194l2-omoikomu", type: "vocab", front: "おもいこむ", reading: "omoikomu", meaning: "to be convinced (wrongly)", example: { jp: "会は 明日だと おもいこんで いました。", en: "I was convinced the meeting was tomorrow." }, accept: ["to assume firmly", "to get it into one's head", "to be under the impression"], hint: "Belief that went in too deep to be checked — and it is almost always wrong, which is why the past tense is the common form." },
        { id: "ja-u194l2-shizumikomu", type: "vocab", front: "しずみこむ", reading: "shizumikomu", meaning: "to sink into gloom", example: { jp: "けっかを 聞いて、しずみこんで しまいました。", en: "I sank into gloom when I heard the result." }, accept: ["to become downcast", "to be dejected"], hint: "しずむ is sinking; しずみこむ is being down there. Compare おちこむ (u112), which is the everyday word for the same slump." },
      ],
    },
    {
      id: "ja-u194l3",
      unit: 194,
      lesson: 3,
      title: "～だす: out, or suddenly starting",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something came out or abruptly began: いいだす, さそいだす, みつけだす, ふきだす, かけだす, ながれだす.",
      items: [
        { id: "ja-u194l3-iidasu", type: "vocab", front: "いいだす", reading: "iidasu", meaning: "to bring up, to be the one to say it", example: { jp: "その あんを さいしょに いいだしたのは 私です。", en: "I was the one who first brought that idea up." }, accept: ["to propose", "to broach", "to start saying"], hint: "Not saying, but being the first to raise it — and therefore owning it. いいだしっぺ is 'whoever raised it does it'." },
        { id: "ja-u194l3-sasoidasu", type: "vocab", front: "さそいだす", reading: "sasoidasu", meaning: "to draw (someone) out", example: { jp: "家に いる 友だちを さそいだしました。", en: "I got my friend, who'd been indoors, to come out." }, accept: ["to lure out", "to get someone to come out"], hint: "さそう + だす — the invitation has a direction, out of where they were." },
        { id: "ja-u194l3-mitsukedasu", type: "vocab", front: "みつけだす", reading: "mitsukedasu", meaning: "to track down, to find at last", example: { jp: "古い 記録の 中から、その 名前を みつけだしました。", en: "I tracked that name down among the old records." }, accept: ["to unearth", "to locate (after searching)"], hint: "みつける is finding; みつけだす is finding after a search that took work — the ～だす drags it out into view." },
        { id: "ja-u194l3-fukidasu", type: "vocab", front: "ふきだす", reading: "fukidasu", meaning: "to burst out laughing; to gush out", example: { jp: "まじめな かおで 言うので、思わず ふきだしました。", en: "He said it with such a straight face that I burst out laughing." }, accept: ["to spurt", "to burst out", "to blow out"], hint: "Steam from a pipe and laughter from a person take the same verb — both are something held in that suddenly is not." },
        { id: "ja-u194l3-kakedasu", type: "vocab", front: "かけだす", reading: "kakedasu", meaning: "to break into a run", example: { jp: "電車が 来たので、かけだしました。", en: "The train came, so I broke into a run." }, accept: ["to dash off", "to start running"], hint: "Here ～だす is the inceptive: the running starts. かけだし as a noun means a beginner — someone just out of the gate." },
        { id: "ja-u194l3-nagaredasu", type: "vocab", front: "ながれだす", reading: "nagaredasu", meaning: "to start flowing, to begin to play", example: { jp: "しずかな 音楽が ながれだしました。", en: "Quiet music began to play." }, accept: ["to begin to flow", "to stream out"], hint: "Water, crowds and music all ながれる, so all three can ながれだす. For music it is the standard way to say it started." },
      ],
    },
    {
      id: "ja-u194l4",
      unit: 194,
      lesson: 4,
      title: "～かける and ～かかる: halfway, or coming at you",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say an action was left unfinished or was about to happen: いいかける, たべかける, しにかける, とおりかかる, よりかかる, おそいかかる.",
      items: [
        { id: "ja-u194l4-iikakeru", type: "vocab", front: "いいかける", reading: "iikakeru", meaning: "to start to say (and stop)", example: { jp: "何か いいかけて、かれは やめました。", en: "He started to say something and then stopped." }, accept: ["to begin to speak", "to trail off"], hint: "～かける leaves the action hanging — begun and not finished. It is the standard way to describe someone thinking better of it." },
        { id: "ja-u194l4-tabekakeru", type: "vocab", front: "たべかける", reading: "tabekakeru", meaning: "to start eating (and leave it)", example: { jp: "たべかけの パンが さらに のって います。", en: "A half-eaten piece of bread is sitting on the plate." }, accept: ["to half-eat", "to leave partly eaten"], hint: "The noun form たべかけ is far commoner than the verb — たべかけの as a modifier is how you describe anything half-finished." },
        { id: "ja-u194l4-shinikakeru", type: "vocab", front: "しにかける", reading: "shinikakeru", meaning: "to be on the point of dying", example: { jp: "水が なくて、木が しにかけて います。", en: "With no water, the tree is dying." }, accept: ["to be at death's door", "to be nearly dead"], hint: "Here ～かける means on the very edge of the event, not halfway through it. Common for plants, batteries and fires as well as people." },
        { id: "ja-u194l4-torikakaru", type: "vocab", front: "とおりかかる", reading: "tōrikakaru", meaning: "to happen to pass by", example: { jp: "とおりかかった 人が 助けて くれました。", en: "Someone passing by helped me." }, accept: ["to chance to come along", "to pass by (coincidentally)"], hint: "～かかる is the intransitive twin of ～かける, and it carries coincidence. とおりかかった人 is a stranger who happened to be there." },
        { id: "ja-u194l4-yorikakaru", type: "vocab", front: "よりかかる", reading: "yorikakaru", meaning: "to lean against; to rely on", example: { jp: "つかれて、かべに よりかかりました。", en: "I was tired and leaned against the wall." }, accept: ["to lean on", "to prop oneself on", "to depend on"], hint: "Physical leaning, and the figurative sense of leaning on someone too much — 人に よりかかる is a criticism." },
        { id: "ja-u194l4-osoikakaru", type: "vocab", front: "おそいかかる", reading: "osoikakaru", meaning: "to pounce on, to descend upon", example: { jp: "つよい 風と 雨が まちに おそいかかりました。", en: "Strong wind and rain descended on the town." }, accept: ["to attack", "to fall upon", "to strike (of weather)"], hint: "The ～かかる of motion toward a target. Animals, attackers and storms all おそいかかる — it always comes at something." },
      ],
    },
  ],
};
