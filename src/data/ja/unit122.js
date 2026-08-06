// JA Unit 122 — よてい・もくひょう (Plans and intentions) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js.
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
      canDo: "Talk about what is likely or possible later on, without committing to it: よそう みこみ かのうせい いずれ やがて とりあえず.",
      items: [
        { id: "ja-u122l1-yoso", type: "vocab", front: "よそう", reading: "yosō", meaning: "forecast", example: { jp: "よそうよりあめがつよかったので、しあいはやすみになりました。", en: "The rain was heavier than the forecast, so the match was called off." }, accept: ["prediction", "expectation", "anticipation"] },
        { id: "ja-u122l1-mikomi", type: "vocab", front: "みこみ", reading: "mikomi", meaning: "prospect", example: { jp: "せいこうするみこみはありますが、じかんはかかりそうです。", en: "There is a prospect of success, but it looks like it will take time." }, accept: ["outlook", "likelihood", "promise"] },
        { id: "ja-u122l1-kanosei", type: "vocab", front: "かのうせい", reading: "kanōsei", meaning: "possibility", example: { jp: "ゆきのかのうせいがあるので、はやくかえったほうがいいです。", en: "There is a possibility of snow, so it's better to go home early." }, accept: ["chance", "potential", "likelihood"] },
        { id: "ja-u122l1-izure", type: "vocab", front: "いずれ", reading: "izure", meaning: "sooner or later", example: { jp: "いずれひっこしますが、いまのところよていはありません。", en: "I'll move sooner or later, but for now there's no plan." }, accept: ["eventually", "in time", "one of these days"] },
        { id: "ja-u122l1-yagate", type: "vocab", front: "やがて", reading: "yagate", meaning: "before long", example: { jp: "やがてはるがきますが、まだあさはさむいです。", en: "Spring will come before long, but the mornings are still cold." }, accept: ["soon", "in due course", "presently"] },
        { id: "ja-u122l1-toriaezu", type: "vocab", front: "とりあえず", reading: "toriaezu", meaning: "for now", example: { jp: "とりあえずビールをたのみましたが、りょうりはまだきめていません。", en: "We ordered beer for now, but we haven't decided on the food yet." }, accept: ["for the time being", "first of all", "provisionally"] },
      ],
    },
    {
      id: "ja-u122l2",
      unit: 122,
      lesson: 2,
      title: "Deciding and changing your mind",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Announce a decision, then revise, postpone or cancel it: けってい けんとう へんこう とりけします えんき のばします.",
      items: [
        { id: "ja-u122l2-kettei", type: "vocab", front: "けってい", reading: "kettei", meaning: "decision", example: { jp: "かいぎでけっていしましたので、もうかえられません。", en: "It was decided at the meeting, so it can't be changed now." }, accept: ["determination", "ruling", "deciding"] },
        { id: "ja-u122l2-kento", type: "vocab", front: "けんとう", reading: "kentō", meaning: "consideration", example: { jp: "ていあんはけんとうしますが、へんじにはじかんがかかります。", en: "We'll give the proposal consideration, but a reply will take time." }, accept: ["review", "looking into", "examination"] },
        { id: "ja-u122l2-henko", type: "vocab", front: "へんこう", reading: "henkō", meaning: "change", example: { jp: "よていをへんこうしたので、みんなにれんらくしました。", en: "I made a change to the plan, so I contacted everyone." }, accept: ["alteration", "amendment", "revision"] },
        { id: "ja-u122l2-torikeshimasu", type: "vocab", front: "とりけします", reading: "torikeshimasu", meaning: "cancel", example: { jp: "よやくをとりけしましたが、おかねはかえってきませんでした。", en: "I cancelled the booking, but the money didn't come back." }, accept: ["to call off", "revoke", "withdraw"] },
        { id: "ja-u122l2-enki", type: "vocab", front: "えんき", reading: "enki", meaning: "postponement", example: { jp: "たいふうでしあいがえんきになったので、らいしゅういきます。", en: "The match was postponed because of the typhoon, so I'll go next week." }, accept: ["deferral", "putting off", "delay"] },
        { id: "ja-u122l2-nobashimasu", type: "vocab", front: "のばします", reading: "nobashimasu", meaning: "extend", example: { jp: "りょこうをのばしましたが、しごとがふえてしまいました。", en: "I extended the trip, but my work piled up." }, accept: ["to put off", "postpone", "stretch out"] },
      ],
    },
    {
      id: "ja-u122l3",
      unit: 122,
      lesson: 3,
      title: "Carrying it out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a plan is actually being carried out, stage by stage: じっこう てじゅん だんかい すすめます とりくみます さっそく.",
      items: [
        { id: "ja-u122l3-jikko", type: "vocab", front: "じっこう", reading: "jikkō", meaning: "carrying out", example: { jp: "けいかくはよかったですが、じっこうはかんたんではありません。", en: "The plan was good, but carrying it out isn't simple." }, accept: ["execution", "implementation", "putting into practice"] },
        { id: "ja-u122l3-tejun", type: "vocab", front: "てじゅん", reading: "tejun", meaning: "procedure", example: { jp: "てじゅんをかくにんしてから、きかいをうごかしました。", en: "I checked the procedure, and then started the machine." }, accept: ["steps", "the order of steps", "process"] },
        { id: "ja-u122l3-dankai", type: "vocab", front: "だんかい", reading: "dankai", meaning: "stage", example: { jp: "いまはさいしょのだんかいですが、けっかはよさそうです。", en: "We're at the first stage now, but the results look good." }, accept: ["phase", "step", "level"] },
        { id: "ja-u122l3-susumemasu", type: "vocab", front: "すすめます", reading: "susumemasu", meaning: "push ahead with", example: { jp: "しごとをすすめていますが、おもったよりおそいです。", en: "I'm pushing ahead with the work, but it's slower than I thought." }, accept: ["to advance", "move forward with", "get on with"] },
        { id: "ja-u122l3-torikumimasu", type: "vocab", front: "とりくみます", reading: "torikumimasu", meaning: "tackle", example: { jp: "むずかしいもんだいにとりくんでいるので、まいにちおそくまではたらきます。", en: "I'm tackling a difficult problem, so I work late every day." }, accept: ["to work on", "grapple with", "take on"] },
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
      canDo: "Say whether a goal was reached, and admit when you have given one up: めざします たっせい じつげん あきらめます いよいよ たしかに.",
      items: [
        { id: "ja-u122l4-mezashimasu", type: "vocab", front: "めざします", reading: "mezashimasu", meaning: "aim for", example: { jp: "だいがくをめざしていますが、まだじしんがありません。", en: "I'm aiming for university, but I'm not confident yet." }, accept: ["to aim at", "set one's sights on", "go for"] },
        { id: "ja-u122l4-tassei", type: "vocab", front: "たっせい", reading: "tassei", meaning: "achievement", example: { jp: "もくひょうをたっせいしたので、みんなでいわいました。", en: "We achieved the goal, so we all celebrated." }, accept: ["attainment", "reaching a goal", "accomplishment"] },
        { id: "ja-u122l4-jitsugen", type: "vocab", front: "じつげん", reading: "jitsugen", meaning: "realization", example: { jp: "ゆめのじつげんにはじかんがかかりますが、あきらめません。", en: "Realizing a dream takes time, but I won't give up." }, accept: ["coming true", "making real", "fulfilment"] },
        { id: "ja-u122l4-akiramemasu", type: "vocab", front: "あきらめます", reading: "akiramemasu", meaning: "give up", example: { jp: "いちどあきらめましたが、もういちどやってみます。", en: "I gave up once, but I'm going to try again." }, accept: ["to abandon", "quit", "let go of"] },
        { id: "ja-u122l4-iyoiyo", type: "vocab", front: "いよいよ", reading: "iyoiyo", meaning: "at last", example: { jp: "いよいよあしたですが、まだじゅんびがおわっていません。", en: "It's tomorrow at last, but I still haven't finished preparing." }, accept: ["finally", "at long last", "the moment has come"] },
        { id: "ja-u122l4-tashikani", type: "vocab", front: "たしかに", reading: "tashikani", meaning: "certainly", example: { jp: "たしかにむずかしいですが、できないことではありません。", en: "It's certainly difficult, but it isn't impossible." }, accept: ["admittedly", "indeed", "true enough"] },
      ],
    },
  ],
};
