// Unit 193 — ふくごうどうし・1 (compound verbs: carrying a thing through) — B2 / JLPT N2
// Strand D, coverage 1 of 16.
//
// WHY THIS AXIS. Blocks 1 and 2 own every thematic domain in the band — argument, evidence,
// abstraction, politics, business, science, history, arts, ethics, risk, identity, career,
// environment, health, education, media, emotion — plus 敬語 and formal written grammar.
// A coverage unit that picks a topic is picking a fight it loses on `order`. So this block
// takes no topic at all: its sixteen units are organised by MORPHOLOGY and IDIOM, which no
// thematic slot headlines.
//
// That is honestly two arguments at once, and both are real. Collision-resistance is one.
// The other is that compound verbs are the single largest productivity multiplier left at
// B2: Japanese builds most of its everyday verbs by welding two together, and a learner who
// knows thirty of them stops needing to look up the next two hundred. This unit takes the
// four suffixes that all mean "carry it through" — ～きる, ～ぬく, ～とおす, ～とげる／～あげる —
// and teaches the difference between them, which is the part a dictionary will not give you.
//
// Headwords are PLAIN form, matching u88–u98 and block 1's u156. Script is mixed, using only
// kanji taught at or before u155 — the B2 character units belong to blocks 1–2 and were
// stubs when this was written, so nothing they will teach is assumed.
export const UNIT193 = {
  id: "ja-u193",
  lang: "ja",
  title: "ふくごうどうし・1",
  order: 193,
  stage: "b2",
  lessons: [
    {
      id: "ja-u193l1",
      unit: 193,
      lesson: 1,
      title: "～きる: right to the last of it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say a thing was used up or done to the very end: つかいきる, いいきる, よみきる, うりきれる, つかれきる, こまりきる.",
      items: [
        { id: "ja-u193l1-tsukaikiru", type: "vocab", front: "つかいきる", reading: "tsukaikiru", meaning: "to use up completely", example: { jp: "今月の お金を つかいきって しまいました。", en: "I've used up all of this month's money." }, accept: ["to exhaust", "to spend it all", "use to the last"], hint: "～きる is the suffix of exhaustion: not just doing it, but leaving none of it. The plain verb つかう says nothing about whether any is left." },
        { id: "ja-u193l1-iikiru", type: "vocab", front: "いいきる", reading: "iikiru", meaning: "to state flatly, to assert", example: { jp: "そこまで いいきれるなら、しょうこを 見せて ください。", en: "If you're going to assert it that flatly, show me the evidence." }, accept: ["to declare outright", "to say with certainty", "to commit to a claim"], hint: "Saying it with nothing held back — no はず, no だろう, no escape hatch. It is the opposite of every hedge B1's u139 taught." },
        { id: "ja-u193l1-yomikiru", type: "vocab", front: "よみきる", reading: "yomikiru", meaning: "to read all the way through", example: { jp: "長い 本でしたが、三日で よみきりました。", en: "It was a long book, but I read it right through in three days." }, accept: ["to finish reading", "to get through (a book)"], hint: "Finishing, with the length implied as an obstacle. よみおわる merely stops; よみきる got to the end of something that took some doing." },
        { id: "ja-u193l1-urikireru", type: "vocab", front: "うりきれる", reading: "urikireru", meaning: "to sell out", example: { jp: "その 品物は 昼前に うりきれて しまいました。", en: "That item sold out before noon." }, accept: ["to be sold out", "to run out (of stock)"], hint: "The intransitive one in this lesson — the stock does it, not the shop. うりきれ on a sign is the noun." },
        { id: "ja-u193l1-tsukarekiru", type: "vocab", front: "つかれきる", reading: "tsukarekiru", meaning: "to be worn out completely", example: { jp: "朝から 立ちっぱなしで、つかれきって います。", en: "I've been on my feet since morning and I'm completely worn out." }, accept: ["to be exhausted", "to be spent"], hint: "With a state verb, ～きる means the state has gone as far as it can. つかれる is tired; つかれきる has nothing left." },
        { id: "ja-u193l1-komarikiru", type: "vocab", front: "こまりきる", reading: "komarikiru", meaning: "to be at one's wits' end", example: { jp: "どちらも ゆずらないので、こまりきって います。", en: "Neither side will give way, so I'm at my wits' end." }, accept: ["to be completely stuck", "to be at a loss"], hint: "Same pattern as つかれきる. こまる is a problem; こまりきる is a problem you have stopped being able to think around." },
      ],
    },
    {
      id: "ja-u193l2",
      unit: 193,
      lesson: 2,
      title: "～ぬく: through, against resistance",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something was seen through despite difficulty: やりぬく, かんがえぬく, たえぬく, いきぬく, えらびぬく, まもりぬく.",
      items: [
        { id: "ja-u193l2-yarinuku", type: "vocab", front: "やりぬく", reading: "yarinuku", meaning: "to see through to the end", example: { jp: "一度 決めた ことは、さいごまで やりぬきたいです。", en: "Once I've decided on something, I want to see it through to the end." }, accept: ["to carry through", "to stick it out", "to complete despite"], hint: "The difference from ～きる is the resistance. つかいきる just runs out; やりぬく got there against something pushing back, and it always admires." },
        { id: "ja-u193l2-kangaenuku", type: "vocab", front: "かんがえぬく", reading: "kangaenuku", meaning: "to think through exhaustively", example: { jp: "かんがえぬいた すえの けつだんですから、こうかいは ありません。", en: "It's a decision I reached after thinking it through, so I have no regrets." }, accept: ["to think out fully", "to consider from every angle"], hint: "Not long thinking but complete thinking — every angle taken. かんがえこむ (u194) is brooding; かんがえぬく arrives somewhere." },
        { id: "ja-u193l2-taenuku", type: "vocab", front: "たえぬく", reading: "taenuku", meaning: "to endure to the end", example: { jp: "きびしい 練習に たえぬいて、しあいに 勝ちました。", en: "They endured the hard training right through and won the match." }, accept: ["to hold out", "to bear it through", "to withstand"], hint: "たえる is bearing it; たえぬく is bearing it until the thing being borne stops. The endpoint is built into the word." },
        { id: "ja-u193l2-ikinuku", type: "vocab", front: "いきぬく", reading: "ikinuku", meaning: "to survive, to live through", example: { jp: "戦争の 時代を いきぬいた 人の 話を 聞きました。", en: "I heard the story of someone who lived through the war years." }, accept: ["to make it through", "to come through alive"], hint: "Surviving a period rather than an instant — an era, a hardship, a market. いきる is simply being alive." },
        { id: "ja-u193l2-erabinuku", type: "vocab", front: "えらびぬく", reading: "erabinuku", meaning: "to select with great care", example: { jp: "えらびぬいた ざいりょうだけを 使って います。", en: "We use only carefully selected ingredients." }, accept: ["to hand-pick", "to choose after long deliberation"], hint: "Choosing that went all the way through the options. Very common in advertising, where えらびぬかれた does the work of 'finest'." },
        { id: "ja-u193l2-mamorinuku", type: "vocab", front: "まもりぬく", reading: "mamorinuku", meaning: "to protect to the last", example: { jp: "やくそくを さいごまで まもりぬいた 人でした。", en: "He was someone who kept his promise to the very last." }, accept: ["to defend to the end", "to keep (a promise) throughout"], hint: "Protecting under sustained pressure. Compare まもりとおす in the next lesson — nearly the same, but ～とおす stresses the unbroken line rather than the resistance." },
      ],
    },
    {
      id: "ja-u193l3",
      unit: 193,
      lesson: 3,
      title: "～とおす and ～とげる: unbroken, and finally done",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say a course was held without a break, or an aim finally reached: おしとおす, やりとおす, まもりとおす, みとおす, なしとげる, やりとげる.",
      items: [
        { id: "ja-u193l3-oshitosu", type: "vocab", front: "おしとおす", reading: "oshitōsu", meaning: "to push (an opinion) through", example: { jp: "みんなが 反対しても、自分の 意見を おしとおしました。", en: "Even though everyone objected, he pushed his own view through." }, accept: ["to force through", "to insist on having one's way"], hint: "Usually a criticism — you got your way and nobody agreed. The 押 in it is the same 押 as 押す." },
        { id: "ja-u193l3-yaritosu", type: "vocab", front: "やりとおす", reading: "yaritōsu", meaning: "to keep doing without a break", example: { jp: "一人で さいごまで やりとおしたのは 立派です。", en: "Seeing it through alone to the end is admirable." }, accept: ["to carry on throughout", "to sustain to the end"], hint: "～とおす draws an unbroken line from start to finish. やりぬく beats an obstacle; やりとおす never stopped." },
        { id: "ja-u193l3-mamoritosu", type: "vocab", front: "まもりとおす", reading: "mamoritōsu", meaning: "to keep (a rule or secret) throughout", example: { jp: "その ひみつを 死ぬまで まもりとおしました。", en: "She kept that secret right up until she died." }, accept: ["to observe throughout", "to never once break"], hint: "The pair to まもりぬく one lesson back. Use ～とおす when the point is that it was never broken, ～ぬく when the point is what it cost." },
        { id: "ja-u193l3-mitosu", type: "vocab", front: "みとおす", reading: "mitōsu", meaning: "to see through, to foresee", example: { jp: "先の ことを みとおすのは かんたんでは ありません。", en: "Seeing what lies ahead is not easy." }, accept: ["to look ahead", "to see right through", "to predict"], hint: "Seeing all the way to the far end — of a road, or of a situation. Its noun みとおし is what every forecast and business plan is called." },
        { id: "ja-u193l3-nashitogeru", type: "vocab", front: "なしとげる", reading: "nashitogeru", meaning: "to accomplish (something large)", example: { jp: "だれも できなかった ことを、ついに なしとげました。", en: "He finally accomplished what no one else had managed." }, accept: ["to achieve", "to bring off", "to pull off"], hint: "Reserved for things worth reporting — a first ascent, a reform, a life's work. Using it for an errand sounds absurd, which is a useful thing to know." },
        { id: "ja-u193l3-yaritogeru", type: "vocab", front: "やりとげる", reading: "yaritogeru", meaning: "to get it done, to see it through", example: { jp: "小さい 仕事でも、やりとげると 気持ちが いいです。", en: "Even a small job feels good once you've seen it through." }, accept: ["to finish (what you set out to do)", "to complete"], hint: "The everyday なしとげる — same shape, ordinary scale. ～とげる always looks back at a finished thing with satisfaction." },
      ],
    },
    {
      id: "ja-u193l4",
      unit: 193,
      lesson: 4,
      title: "～あげる: worked up into something",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say a thing was built up or finished off: しあげる, つくりあげる, かきあげる, きりあげる, まとめあげる, そだてあげる.",
      items: [
        { id: "ja-u193l4-shiageru", type: "vocab", front: "しあげる", reading: "shiageru", meaning: "to finish off, to put the last touch to", example: { jp: "あとは 色を ぬれば、しあげられます。", en: "Once I paint it, I can finish it off." }, accept: ["to complete", "to polish off", "to finalise"], hint: "The last stage rather than the whole job — the noun しあげ is 'the finish' on furniture, a report, or a match." },
        { id: "ja-u193l4-tsukuriageru", type: "vocab", front: "つくりあげる", reading: "tsukuriageru", meaning: "to build up, to create (through effort)", example: { jp: "二人で 会社を ここまで つくりあげました。", en: "The two of them built the company up to what it is." }, accept: ["to construct", "to fashion", "to establish"], hint: "～あげる adds the accumulation: not made, but made up out of sustained work. It also means 'to fabricate' a story." },
        { id: "ja-u193l4-kakiageru", type: "vocab", front: "かきあげる", reading: "kakiageru", meaning: "to write up, to finish writing", example: { jp: "夜中に 手紙を かきあげて、朝 出しました。", en: "I finished writing the letter in the night and posted it in the morning." }, accept: ["to complete (a text)", "to dash off"], hint: "The whole text is now done. かきおわる just stops writing; かきあげる produced a finished piece." },
        { id: "ja-u193l4-kiriageru", type: "vocab", front: "きりあげる", reading: "kiriageru", meaning: "to wrap up, to call it a day", example: { jp: "今日は この へんで きりあげましょう。", en: "Let's wrap it up here for today." }, accept: ["to break off", "to round up (a number)", "to finish early"], hint: "Stopping at a good point rather than at the end — the useful sense is 'we could go on, but we won't'. It also means rounding a number up." },
        { id: "ja-u193l4-matomeageru", type: "vocab", front: "まとめあげる", reading: "matomeageru", meaning: "to pull together into a finished whole", example: { jp: "みんなの 意見を 一つに まとめあげました。", en: "I pulled everyone's views together into one." }, accept: ["to consolidate", "to knock into shape"], hint: "まとめる is gathering; まとめあげる is gathering until it holds together as one thing. Used of reports, teams and arguments." },
        { id: "ja-u193l4-sodateageru", type: "vocab", front: "そだてあげる", reading: "sodateageru", meaning: "to raise (to adulthood), to bring on", example: { jp: "女手 一つで 三人を そだてあげました。", en: "She raised three children on her own." }, accept: ["to bring up", "to nurture to maturity"], hint: "そだてる is raising; そだてあげる is having finished the job — the child is grown, the player is ready. It looks back at a completed span of years." },
      ],
    },
  ],
};
