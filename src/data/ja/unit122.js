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
                { id: "ja-u122l1-mitoshi", type: "vocab", front: "みとおし", reading: "mitōshi", meaning: "outlook", example: { jp: "ことしのみとおしがあかるいので、みんなよろこんでいます。", en: "This year's outlook is bright, so everyone is pleased." }, drill: { jp: "みとおしがくらいです。", en: "The outlook is bleak." }, accept: ["prospect", "forecast", "the view ahead"], hint: "mi-tō-SHI — three beats, the とお long. みる plus とおす, to see right through, so it is being able to see to the far end. It takes あかるい and くらい, like a view." },
                { id: "ja-u122l1-nariyuki", type: "vocab", front: "なりゆき", reading: "nariyuki", meaning: "how things turn out", example: { jp: "なりゆきにまかせたら、けっかはよかったです。", en: "When I left it to take its own course, the result was good." }, drill: { jp: "なりゆきをみています。", en: "I am watching how it turns out." }, accept: ["the course of events", "how it goes", "development"], hint: "na-ri-YU-ki — four beats. なる plus ゆく, to go: the way things go of their own accord. 「なりゆきに まかせる」 means to let events decide, which is its commonest use." },
                { id: "ja-u122l1-tomen", type: "vocab", front: "とうめん", reading: "tōmen", meaning: "for the time being", example: { jp: "とうめんはこのやりかたでいきますが、あとでかえるかもしれません。", en: "We will go with this way for the time being, but we may change it later." }, drill: { jp: "とうめんのもくひょうをきめます。", en: "We set the immediate goal." }, accept: ["for now", "the immediate future", "at present"], hint: "TŌ-men — the first beat is long, the ん held. とう is facing and めん is a surface, so it is what is in front of you right now. It implies a longer plan exists behind it." },
        { id: "ja-u122l1-izure", type: "vocab", front: "いずれ", reading: "izure", meaning: "sooner or later", example: { jp: "いずれひっこすつもりで、いまからすこしずつかたづけています。", en: "I mean to move sooner or later, so I'm tidying up bit by bit already." }, drill: { jp: "いずれわかるとおもいます。", en: "I think it will become clear in time." }, accept: ["eventually", "in time", "one of these days"], hint: "i-ZU-re — three beats. It promises the thing will happen without saying when, so it is vaguer than やがて and far vaguer than まもなく. ⚠️ It also means whichever of several." },
                { id: "ja-u122l1-mitsumori", type: "vocab", front: "みつもり", reading: "mitsumori", meaning: "an estimate", example: { jp: "みつもりをみてから、たのむかどうかきめます。", en: "I'll look at the estimate, and then decide whether to order." }, drill: { jp: "みつもりをたのみました。", en: "I asked for an estimate." }, accept: ["quote", "quotation", "rough calculation"], hint: "mi-tsu-MO-ri — four beats. みる plus つもる, to pile up: eyeing up a total. It is the written quote a builder or a garage gives you, so it is an everyday business word." },
                { id: "ja-u122l1-hitomazu", type: "vocab", front: "ひとまず", reading: "hitomazu", meaning: "for the moment", example: { jp: "ひとまずおわったので、きょうはここまでにします。", en: "It's finished for the moment, so I'll stop here for today." }, drill: { jp: "ひとまずあんしんしました。", en: "For the moment I am reassured." }, accept: ["for now", "tentatively", "for the time being"], hint: "hi-to-MA-zu — four beats. ひとつ plus まず, first: one step done, the rest pending. とりあえず is close, but ひとまず implies a real stopping point has been reached." },
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
        { id: "ja-u122l2-kettei", type: "vocab", front: "けってい", reading: "kettei", meaning: "decision", example: { jp: "かいぎでけっていしましたので、もうかえられません。", en: "It was decided at the meeting, so it can't be changed now." }, drill: { jp: "けっていがおくれました。", en: "The decision was delayed." }, accept: ["determination", "ruling", "deciding"], hint: "ket-TEI — small pause, then tei. けつ is to settle and てい is to fix, so it is final in a way きめる need not be. A formal けってい is hard to reverse, which is the point of the word." },
        { id: "ja-u122l2-kento", type: "vocab", front: "けんとう", reading: "kentō", meaning: "consideration", example: { jp: "ていあんをけんとうしてから、へんじをします。", en: "We'll give the proposal consideration, and then reply." }, drill: { jp: "けんとうにじかんがかかります。", en: "The review takes time." }, accept: ["review", "looking into", "examination"], hint: "ken-TŌ — the ん is held and the last beat is long. けん is to examine and とう is to weigh up. ⚠️ 「けんとうします」 to a request can be a polite way of saying not yet, or no." },
        { id: "ja-u122l2-henko", type: "vocab", front: "へんこう", reading: "henkō", meaning: "change (an alteration made)", example: { jp: "よていをへんこうしたので、みんなにれんらくしました。", en: "I made a change to the plan, so I contacted everyone." }, drill: { jp: "へんこうはありません。", en: "There is no change." }, accept: ["alteration", "amendment", "revision"], hint: "hen-KŌ — the ん is held and the last beat is long. へん is to alter and こう is to renew, so it is a change someone MADE. へんか is a change that simply happened." },
        { id: "ja-u122l2-torikesu", type: "vocab", front: "とりけす", reading: "torikesu", meaning: "cancel", example: { jp: "よやくをとりけしたのに、おかねはかえってきませんでした。", en: "I cancelled the booking, but the money didn't come back." }, drill: { jp: "やくそくをとりけす。", en: "I cancel the arrangement." }, accept: ["to call off", "revoke", "withdraw"], hint: "to-ri-KE-su — four beats. とる plus けす, to erase: taking it back and rubbing it out. What is cancelled takes を, and a cancelled reservation is a よやくのとりけし." },
        { id: "ja-u122l2-enki", type: "vocab", front: "えんき", reading: "enki", meaning: "postponement", example: { jp: "たいふうでしあいがえんきになったので、らいしゅういきます。", en: "The match was postponed because of the typhoon, so I'll go next week." }, drill: { jp: "えんきのれんらくがきました。", en: "Word of the postponement came." }, accept: ["deferral", "putting off", "delay"], hint: "EN-ki — two beats, the ん held. えん is to put off and き is a period. The event still happens, just later — calling it off entirely is ちゅうし." },
        { id: "ja-u122l2-nobasu", type: "vocab", front: "のばす", reading: "nobasu", meaning: "extend", example: { jp: "りょこうをのばしたら、しごとがふえてしまいました。", en: "I extended the trip, and my work piled up." }, drill: { jp: "かいぎのじかんをのばす。", en: "I extend the meeting time." }, accept: ["to put off", "postpone", "stretch out"], hint: "no-BA-su — three beats. YOU extend it, so it takes を. Its pair のびる is the thing stretching by itself. It covers a deadline, a holiday and your legs alike." },
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
        { id: "ja-u122l3-jikko", type: "vocab", front: "じっこう", reading: "jikkō", meaning: "carrying out", example: { jp: "けいかくはよかったですが、じっこうはかんたんではありません。", en: "The plan was good, but carrying it out isn't simple." }, drill: { jp: "じっこうをきめました。", en: "We decided to go ahead." }, accept: ["execution", "implementation", "putting into practice"], hint: "JIK-kō — small pause, then a long kou. じつ is actual and こう is to act, so it is the plan turned into doing. けいかく is on paper; じっこう is the part people feel." },
                { id: "ja-u122l3-dandori", type: "vocab", front: "だんどり", reading: "dandori", meaning: "the arrangements", example: { jp: "だんどりをきめてから、みんなにれんらくしました。", en: "I settled the arrangements, and then contacted everyone." }, drill: { jp: "だんどりをせつめいします。", en: "I will explain the arrangements." }, accept: ["plan of action", "setup", "how it will run"], hint: "dan-DO-ri — three beats, the ん held. だん is a step and とり is taking, with the t voicing to d. It is the practical running order, so it is who does what and when." },
        { id: "ja-u122l3-dankai", type: "vocab", front: "だんかい", reading: "dankai", meaning: "stage", example: { jp: "いまはさいしょのだんかいなので、まだなんともいえません。", en: "We're only at the first stage, so I can't say anything yet." }, drill: { jp: "つぎのだんかいにすすみます。", en: "We move to the next stage." }, accept: ["phase", "step", "level"], hint: "dan-KA-i — three beats, the ん held. だん is a step and かい is a storey, so it is one level on a staircase. てじゅん is the list of steps; だんかい is where you are on it." },
                { id: "ja-u122l3-koso", type: "vocab", front: "こうそう", reading: "kōsō", meaning: "a grand plan", example: { jp: "こうそうはりっぱですが、おかねがたりません。", en: "The grand plan is splendid, but there is not enough money." }, drill: { jp: "こうそうをはなしました。", en: "He talked about his grand plan." }, accept: ["concept", "vision", "scheme"], hint: "kō-SŌ — two long beats. こう is to construct and そう is to imagine, so it is a plan still mostly in the mind. けいかく has dates; こうそう has ambition." },
        { id: "ja-u122l3-torikumu", type: "vocab", front: "とりくむ", reading: "torikumu", meaning: "tackle", example: { jp: "むずかしいもんだいにとりくんでいるので、まいにちおそくまではたらきます。", en: "I'm tackling a difficult problem, so I work late every day." }, drill: { jp: "あたらしいかだいにとりくむ。", en: "I tackle a new issue." }, accept: ["to work on", "grapple with", "take on"], hint: "to-ri-KU-mu — four beats. From sumo: とる plus くむ, to lock arms. What you tackle takes に, and the word carries that image of grappling rather than merely working." },
        { id: "ja-u122l3-sassoku", type: "vocab", front: "さっそく", reading: "sassoku", meaning: "right away", example: { jp: "へんじがきたので、さっそくじゅんびをはじめました。", en: "A reply came, so I started preparing right away." }, drill: { jp: "さっそくれんしゅうしました。", en: "I practised right away." }, accept: ["at once", "immediately", "without delay"], hint: "SAS-so-ku — small pause, then so-ku. さつ is prompt and そく is fast. It marks YOUR quick response to something that just happened, so it rarely opens a conversation." },
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
        { id: "ja-u122l4-mezasu", type: "vocab", front: "めざす", reading: "mezasu", meaning: "aim for", example: { jp: "だいがくをめざして、まいにちべんきょうしています。", en: "I'm aiming for university, so I study every day." }, drill: { jp: "もくひょうをめざす。", en: "I aim for the goal." }, accept: ["to aim at", "set one's sights on", "go for"], hint: "me-ZA-su — three beats. め is an eye and さす is to point, so your eyes are fixed on it. What you aim at takes を, and the aim is long-term rather than today's task." },
                { id: "ja-u122l4-medo", type: "vocab", front: "めど", reading: "medo", meaning: "a prospect of finishing", example: { jp: "かんせいのめどがたったので、すこしやすむことにしました。", en: "There's an end in sight now, so I've decided to take a short break." }, drill: { jp: "めどがたちました。", en: "The end is in sight." }, accept: ["outlook", "target date", "an end in sight"], hint: "ME-do — two beats. め is an eye and ど is a measure: the point your eye can reach. 「めどが たつ」 means an end is now in sight, which is why it so often brings relief." },
        { id: "ja-u122l4-jitsugen", type: "vocab", front: "じつげん", reading: "jitsugen", meaning: "realization", example: { jp: "ゆめのじつげんのために、まいにちすこしずつすすめています。", en: "To make the dream real, I move it along a little every day." }, drill: { jp: "じつげんはむずかしいです。", en: "Realising it is difficult." }, accept: ["coming true", "making real", "fulfilment"], hint: "ji-tsu-GEN — three beats, the ん held. じつ is actual and げん is to appear, so something imagined becomes real. ゆめ and けいかく are what get じつげんする." },
        { id: "ja-u122l4-akirameru", type: "vocab", front: "あきらめる", reading: "akirameru", meaning: "give up", example: { jp: "いちどあきらめましたが、もういちどやってみます。", en: "I gave up once, but I'm going to try again." }, drill: { jp: "とちゅうであきらめる。", en: "I give up partway." }, accept: ["to abandon", "quit", "let go of"], hint: "a-ki-ra-ME-ru — five beats. What you give up takes を. It is accepting that it will not happen, not pausing — stopping for now is やめる, which can be resumed." },
        { id: "ja-u122l4-iyoiyo", type: "vocab", front: "いよいよ", reading: "iyoiyo", meaning: "at last (the moment has come)", example: { jp: "いよいよあしたなので、はやくねることにします。", en: "It's tomorrow at last, so I'm going to get an early night." }, drill: { jp: "いよいよしあいです。", en: "At last it is match day." }, accept: ["finally", "at long last", "the moment has come"], hint: "i-yo-i-YO — four beats, doubled. It marks the arrival of something long awaited, so excitement or dread is built in. ようやく looks back at the wait; いよいよ looks at the moment." },
                { id: "ja-u122l4-juncho", type: "vocab", front: "じゅんちょう", reading: "junchō", meaning: "going smoothly", example: { jp: "しごとがじゅんちょうにすすんで、みんなあんしんしています。", en: "The work is moving along smoothly, and everyone is relieved." }, drill: { jp: "じゅんちょうにおわりました。", en: "It ended smoothly." }, accept: ["favourable", "on track", "without a hitch"], hint: "jun-CHŌ — the ん is held and the last beat is long. じゅん is compliant and ちょう is a tune, so everything is in key. It takes に before a verb: 「じゅんちょうに すすむ」." },
      ],
    },
  ],
};
