// JA Unit 122 — よてい・もくひょう (Plans and intentions) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js (plain-form verb headwords).
//
// The arc runs forward in time: what might happen → what you decide → how you carry
// it out → whether you reach it. Deciding is the middle, not the start, because at
// B1 the interesting vocabulary is what surrounds a decision — reviewing it,
// changing it, postponing it, giving up on it.
export const UNIT122 = {
  id: "ja-u122",
  lang: "ja",
  title: "よてい・もくひょう",
  order: 122,
  stage: "b1",
  lessons: [
    {
      id: "ja-u122l1",
      unit: 122,
      lesson: 1,
      title: "Looking ahead",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what is likely later on, without committing to it: みとおし なりゆき とうめん いずれ みつもり ひとまず.",
      items: [
                { id: "ja-u122l1-mitoshi", type: "vocab", front: "みとおし", reading: "mitōshi", meaning: "outlook", example: { jp: "ことしのみとおしがあかるいので、みんなよろこんでいます。", en: "This year's outlook is bright, so everyone is pleased." }, accept: ["prospect", "forecast", "the view ahead"] },
                { id: "ja-u122l1-nariyuki", type: "vocab", front: "なりゆき", reading: "nariyuki", meaning: "how things turn out", example: { jp: "なりゆきにまかせたら、けっかはよかったです。", en: "When I left it to take its own course, the result was good." }, accept: ["the course of events", "how it goes", "development"] },
                { id: "ja-u122l1-tomen", type: "vocab", front: "とうめん", reading: "tōmen", meaning: "for the time being", example: { jp: "とうめんはこのやりかたでいきますが、あとでかえるかもしれません。", en: "We will go with this way for the time being, but we may change it later." }, accept: ["for now", "the immediate future", "at present"] },
        { id: "ja-u122l1-izure", type: "vocab", front: "いずれ", reading: "izure", meaning: "sooner or later", example: { jp: "いずれひっこすつもりで、いまからすこしずつかたづけています。", en: "I mean to move sooner or later, so I'm tidying up bit by bit already." }, accept: ["eventually", "in time", "one of these days"] },
                { id: "ja-u122l1-mitsumori", type: "vocab", front: "みつもり", reading: "mitsumori", meaning: "an estimate", example: { jp: "みつもりをみてから、たのむかどうかきめます。", en: "I'll look at the estimate, and then decide whether to order." }, accept: ["quote", "quotation", "rough calculation"] },
                { id: "ja-u122l1-hitomazu", type: "vocab", front: "ひとまず", reading: "hitomazu", meaning: "for the moment", example: { jp: "ひとまずおわったので、きょうはここまでにします。", en: "It's finished for the moment, so I'll stop here for today." }, accept: ["for now", "tentatively", "for the time being"] },
      ],
    },
    {
      id: "ja-u122l2",
      unit: 122,
      lesson: 2,
      title: "Deciding and changing your mind",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Announce a decision, then revise, postpone or cancel it: けってい けんとう へんこう とりけす えんき のばす.",
      items: [
        { id: "ja-u122l2-kettei", type: "vocab", front: "けってい", reading: "kettei", meaning: "decision", example: { jp: "かいぎでけっていしましたので、もうかえられません。", en: "It was decided at the meeting, so it can't be changed now." }, accept: ["determination", "ruling", "deciding"] },
        { id: "ja-u122l2-kento", type: "vocab", front: "けんとう", reading: "kentō", meaning: "consideration", example: { jp: "ていあんをけんとうしてから、へんじをします。", en: "We'll give the proposal consideration, and then reply." }, accept: ["review", "looking into", "examination"] },
        { id: "ja-u122l2-henko", type: "vocab", front: "へんこう", reading: "henkō", meaning: "change", example: { jp: "よていをへんこうしたので、みんなにれんらくしました。", en: "I made a change to the plan, so I contacted everyone." }, accept: ["alteration", "amendment", "revision"] },
        { id: "ja-u122l2-torikesu", type: "vocab", front: "とりけす", reading: "torikesu", meaning: "cancel", example: { jp: "よやくをとりけしたのに、おかねはかえってきませんでした。", en: "I cancelled the booking, but the money didn't come back." }, accept: ["to call off", "revoke", "withdraw"] },
        { id: "ja-u122l2-enki", type: "vocab", front: "えんき", reading: "enki", meaning: "postponement", example: { jp: "たいふうでしあいがえんきになったので、らいしゅういきます。", en: "The match was postponed because of the typhoon, so I'll go next week." }, accept: ["deferral", "putting off", "delay"] },
        { id: "ja-u122l2-nobasu", type: "vocab", front: "のばす", reading: "nobasu", meaning: "extend", example: { jp: "りょこうをのばしたら、しごとがふえてしまいました。", en: "I extended the trip, and my work piled up." }, accept: ["to put off", "postpone", "stretch out"] },
      ],
    },
    {
      id: "ja-u122l3",
      unit: 122,
      lesson: 3,
      title: "Carrying it out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a plan is actually being carried out, stage by stage: じっこう だんどり だんかい こうそう とりくむ さっそく.",
      items: [
        { id: "ja-u122l3-jikko", type: "vocab", front: "じっこう", reading: "jikkō", meaning: "carrying out", example: { jp: "けいかくはよかったですが、じっこうはかんたんではありません。", en: "The plan was good, but carrying it out isn't simple." }, accept: ["execution", "implementation", "putting into practice"] },
                { id: "ja-u122l3-dandori", type: "vocab", front: "だんどり", reading: "dandori", meaning: "the arrangements", example: { jp: "だんどりをきめてから、みんなにれんらくしました。", en: "I settled the arrangements, and then contacted everyone." }, accept: ["plan of action", "setup", "how it will run"] },
        { id: "ja-u122l3-dankai", type: "vocab", front: "だんかい", reading: "dankai", meaning: "stage", example: { jp: "いまはさいしょのだんかいなので、まだなんともいえません。", en: "We're only at the first stage, so I can't say anything yet." }, accept: ["phase", "step", "level"] },
                { id: "ja-u122l3-koso", type: "vocab", front: "こうそう", reading: "kōsō", meaning: "a grand plan", example: { jp: "こうそうはりっぱですが、おかねがたりません。", en: "The grand plan is splendid, but there is not enough money." }, accept: ["concept", "vision", "scheme"] },
        { id: "ja-u122l3-torikumu", type: "vocab", front: "とりくむ", reading: "torikumu", meaning: "tackle", example: { jp: "むずかしいもんだいにとりくんでいるので、まいにちおそくまではたらきます。", en: "I'm tackling a difficult problem, so I work late every day." }, accept: ["to work on", "grapple with", "take on"] },
        { id: "ja-u122l3-sassoku", type: "vocab", front: "さっそく", reading: "sassoku", meaning: "right away", example: { jp: "へんじがきたので、さっそくじゅんびをはじめました。", en: "A reply came, so I started preparing right away." }, accept: ["at once", "immediately", "without delay"] },
      ],
    },
    {
      id: "ja-u122l4",
      unit: 122,
      lesson: 4,
      title: "Reaching it — or not",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether a goal is within reach, and admit when you have given one up: めざす めど じつげん あきらめる いよいよ じゅんちょう.",
      items: [
        { id: "ja-u122l4-mezasu", type: "vocab", front: "めざす", reading: "mezasu", meaning: "aim for", example: { jp: "だいがくをめざして、まいにちべんきょうしています。", en: "I'm aiming for university, so I study every day." }, accept: ["to aim at", "set one's sights on", "go for"] },
                { id: "ja-u122l4-medo", type: "vocab", front: "めど", reading: "medo", meaning: "a prospect of finishing", example: { jp: "かんせいのめどがたったので、すこしやすむことにしました。", en: "There's an end in sight now, so I've decided to take a short break." }, drill: { jp: "めどがたちました。", en: "The end is in sight." }, accept: ["outlook", "target date", "an end in sight"] },
        { id: "ja-u122l4-jitsugen", type: "vocab", front: "じつげん", reading: "jitsugen", meaning: "realization", example: { jp: "ゆめのじつげんのために、まいにちすこしずつすすめています。", en: "To make the dream real, I move it along a little every day." }, accept: ["coming true", "making real", "fulfilment"] },
        { id: "ja-u122l4-akirameru", type: "vocab", front: "あきらめる", reading: "akirameru", meaning: "give up", example: { jp: "いちどあきらめましたが、もういちどやってみます。", en: "I gave up once, but I'm going to try again." }, accept: ["to abandon", "quit", "let go of"] },
        { id: "ja-u122l4-iyoiyo", type: "vocab", front: "いよいよ", reading: "iyoiyo", meaning: "at last", example: { jp: "いよいよあしたなので、はやくねることにします。", en: "It's tomorrow at last, so I'm going to get an early night." }, accept: ["finally", "at long last", "the moment has come"] },
                { id: "ja-u122l4-juncho", type: "vocab", front: "じゅんちょう", reading: "junchō", meaning: "going smoothly", example: { jp: "しごとがじゅんちょうにすすんで、みんなあんしんしています。", en: "The work is moving along smoothly, and everyone is relieved." }, accept: ["favourable", "on track", "without a hitch"] },
      ],
    },
  ],
};
