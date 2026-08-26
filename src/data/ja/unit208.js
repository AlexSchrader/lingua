// Unit 208 — ごい・N2・2 (formal and written verbs) — B2 / JLPT N2
// Strand D, coverage 16 of 16 — the last unit of the band.
//
// An untethered gap-fill by design, and deliberately placed last. This is the
// highest-ordered unit in the language, so under lower-order-wins it loses every tie it
// enters. Putting the least domain-attached content here is the cheapest insurance the
// block can buy: 24 formal 和語 verbs that belong to no topic, that news and documents use
// constantly, and that no thematic slot in u156–u191 would ever headline.
//
// All are plain-form headwords, matching u88–u98 and block 1's u156.
export const UNIT208 = {
  id: "ja-u208",
  lang: "ja",
  title: "ごい・N2・2",
  order: 208,
  stage: "b2",
  lessons: [
    {
      id: "ja-u208l1",
      unit: 208,
      lesson: 1,
      title: "Pushing and holding back",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move or block a process: うながす, はばむ, つらぬく, いどむ, おこたる, つのる.",
      items: [
        { id: "ja-u208l1-unagasu", type: "vocab", front: "うながす", reading: "unagasu", meaning: "to prompt, to urge", example: { jp: "先生が うながしたので、ようやく 話しはじめました。", en: "The teacher prompted him and he finally began to speak." }, accept: ["to encourage (to act)", "to press for"], hint: "Getting someone to act without ordering them — a nudge with authority behind it. Notices use ちゅういを うながす." },
        { id: "ja-u208l1-habamu", type: "vocab", front: "はばむ", reading: "habamu", meaning: "to block, to stand in the way of", example: { jp: "強い 風が ふねの 出発を はばみました。", en: "Strong winds blocked the ship's departure." }, accept: ["to obstruct", "to hinder"], hint: "Something in the way of a movement or a plan, usually impersonal — weather, terrain, circumstance." },
        { id: "ja-u208l1-tsuranuku", type: "vocab", front: "つらぬく", reading: "tsuranuku", meaning: "to carry through, to hold to", example: { jp: "自分の 考えを さいごまで つらぬきました。", en: "He held to his own view right to the end." }, accept: ["to stick to", "to run right through"], hint: "Physically running through something, and figuratively holding a position without bending. The formal cousin of u193's やりとおす." },
        { id: "ja-u208l1-idomu", type: "vocab", front: "いどむ", reading: "idomu", meaning: "to take on, to challenge", example: { jp: "むずかしい しあいに いどみます。", en: "We're taking on a difficult match." }, accept: ["to tackle", "to face up to"], hint: "Going at something bigger than you on purpose. Records, mountains and champions are what people いどむ." },
        { id: "ja-u208l1-okotaru", type: "vocab", front: "おこたる", reading: "okotaru", meaning: "to neglect (a duty)", example: { jp: "かくにんを おこたった ことが げんいんです。", en: "The cause was a failure to check." }, accept: ["to fail to do", "to be remiss in"], hint: "Formal blame for something not done that should have been. Reports and apologies use it; conversation says わすれた." },
        { id: "ja-u208l1-tsunoru", type: "vocab", front: "つのる", reading: "tsunoru", meaning: "to grow stronger; to recruit", example: { jp: "会えない 日が つづき、さびしさが つのりました。", en: "The days without meeting went on and the loneliness grew." }, accept: ["to intensify", "to invite applications"], hint: "Two senses from one verb: a feeling mounting, and calling for applicants — さんかしゃを つのる." },
      ],
    },
    {
      id: "ja-u208l2",
      unit: 208,
      lesson: 2,
      title: "Running and providing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe managing and supplying: いとなむ, まかなう, ほどこす, みたす, になう, ゆだねる.",
      items: [
        { id: "ja-u208l2-itonamu", type: "vocab", front: "いとなむ", reading: "itonamu", meaning: "to run (a business), to lead (a life)", example: { jp: "この 店を 三十年 いとなんで います。", en: "They have run this shop for thirty years." }, accept: ["to carry on (a trade)", "to conduct"], hint: "Running something that continues — a shop, a household, a life. けいえいする is business management; いとなむ is quieter and older." },
        { id: "ja-u208l2-makanau", type: "vocab", front: "まかなう", reading: "makanau", meaning: "to cover (a cost), to provide for", example: { jp: "ひようは ぜんぶ じぶんで まかないました。", en: "I covered all the costs myself." }, accept: ["to finance", "to cater for"], hint: "Making the supply meet the need — money, food, staff. まかないつき on a job ad means meals are included." },
        { id: "ja-u208l2-hodokosu", type: "vocab", front: "ほどこす", reading: "hodokosu", meaning: "to apply, to administer", example: { jp: "古い 家に 新しい くふうを ほどこしました。", en: "They applied some new ideas to the old house." }, accept: ["to carry out (on something)", "to bestow"], hint: "Applying a treatment or a measure TO something — ちりょうを ほどこす, てを ほどこす. Formal and slightly technical." },
        { id: "ja-u208l2-mitasu", type: "vocab", front: "みたす", reading: "mitasu", meaning: "to fill; to satisfy (a condition)", example: { jp: "この じょうけんを みたす 人を さがして います。", en: "We're looking for someone who meets these conditions." }, accept: ["to meet (requirements)", "to fulfil"], hint: "Filling a container, and meeting a requirement — the same idea, since a condition is a shape to be filled." },
        { id: "ja-u208l2-ninau", type: "vocab", front: "になう", reading: "ninau", meaning: "to shoulder, to bear (a role)", example: { jp: "つぎの 時代を になう 人たちです。", en: "They are the people who will carry the next era." }, accept: ["to take on (responsibility)", "to carry on one's shoulders"], hint: "Carrying on the shoulder, and by extension carrying a duty or a future. Speeches love it." },
        { id: "ja-u208l2-yudaneru", type: "vocab", front: "ゆだねる", reading: "yudaneru", meaning: "to entrust entirely", example: { jp: "けっていは みんなに ゆだねます。", en: "I leave the decision entirely to everyone." }, accept: ["to leave it to", "to commit into another's hands"], hint: "Stronger than u138's まかせる — you hand over the whole thing and give up the say in it." },
      ],
    },
    {
      id: "ja-u208l3",
      unit: 208,
      lesson: 3,
      title: "Harm, loss and making good",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe damage and repair: そこなう, つぐなう, まぬがれる, へだてる, くつがえす, ともなう.",
      items: [
        { id: "ja-u208l3-sokonau", type: "vocab", front: "そこなう", reading: "sokonau", meaning: "to damage, to impair", example: { jp: "むりを して、体を そこないました。", en: "I overdid it and damaged my health." }, accept: ["to harm", "to spoil"], hint: "Formal harm to something valuable but abstract — health, trust, a reputation. こわす breaks objects." },
        { id: "ja-u208l3-tsugunau", type: "vocab", front: "つぐなう", reading: "tsugunau", meaning: "to make amends, to compensate", example: { jp: "しっぱいを つぐなう ために、はたらきました。", en: "I worked in order to make up for the failure." }, accept: ["to atone", "to make good"], hint: "Paying back a wrong rather than a debt — with money, work or time." },
        { id: "ja-u208l3-manugareru", type: "vocab", front: "まぬがれる", reading: "manugareru", meaning: "to escape, to avoid (something bad)", example: { jp: "はやく 気づいたので、大きな じこを まぬがれました。", en: "We noticed early and avoided a serious accident." }, accept: ["to be spared", "to get out of"], hint: "Escaping a bad outcome that was genuinely coming. にげる is fleeing; まぬがれる is not being caught by it." },
        { id: "ja-u208l3-hedateru", type: "vocab", front: "へだてる", reading: "hedateru", meaning: "to separate, to set apart", example: { jp: "川を へだてて、二つの 町が あります。", en: "Two towns lie on either side of the river." }, accept: ["to divide", "to keep at a distance"], hint: "Physical separation, and the social kind — 人を へだてる is keeping people at arm's length." },
        { id: "ja-u208l3-kutsugaesu", type: "vocab", front: "くつがえす", reading: "kutsugaesu", meaning: "to overturn (a decision or belief)", example: { jp: "新しい しりょうが これまでの 考えを くつがえしました。", en: "New material overturned the accepted view." }, accept: ["to reverse", "to upset (a ruling)"], hint: "Turning something completely over — a verdict, a theory, a lead in a match. Nothing survives the turn." },
        { id: "ja-u208l3-tomonau", type: "vocab", front: "ともなう", reading: "tomonau", meaning: "to accompany, to come with", example: { jp: "この しごとには せきにんが ともないます。", en: "This job comes with responsibility." }, accept: ["to entail", "to be attended by"], hint: "One thing arriving inseparably with another. ～に ともなって means 'along with', and reports use it constantly." },
      ],
    },
    {
      id: "ja-u208l4",
      unit: 208,
      lesson: 4,
      title: "Knowing, holding, bringing about",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Round out the formal verb set: さとる, きわめる, おびる, やしなう, たずさわる, もよおす.",
      items: [
        { id: "ja-u208l4-satoru", type: "vocab", front: "さとる", reading: "satoru", meaning: "to realise, to come to see", example: { jp: "自分が まちがって いたと さとりました。", en: "I realised that I had been wrong." }, accept: ["to perceive", "to grasp (at last)"], hint: "A realisation that arrives, often uncomfortable. The same word as Buddhist enlightenment, which is where its weight comes from." },
        { id: "ja-u208l4-kiwameru", type: "vocab", front: "きわめる", reading: "kiwameru", meaning: "to master; to take to the limit", example: { jp: "一つの 道を きわめた 人の 話は おもしろいです。", en: "It's interesting to hear from someone who has mastered a single path." }, accept: ["to perfect", "to carry to an extreme"], hint: "Going as far in something as it is possible to go. きわめて as an adverb simply means 'extremely'." },
        { id: "ja-u208l4-obiru", type: "vocab", front: "おびる", reading: "obiru", meaning: "to take on (a quality or colour)", example: { jp: "話が だんだん げんじつみを おびて きました。", en: "The talk gradually took on an air of reality." }, accept: ["to be tinged with", "to assume (a character)"], hint: "Wearing a quality the way you wear a belt — 赤みを おびる, きけんを おびる. Written Japanese only." },
        { id: "ja-u208l4-yashinau", type: "vocab", front: "やしなう", reading: "yashinau", meaning: "to support (a family); to cultivate (a habit)", example: { jp: "はたらいて 家ぞくを やしなって います。", en: "He works to support his family." }, accept: ["to provide for", "to foster", "to build up"], hint: "Feeding a family, and growing a quality in yourself — しゅうかんを やしなう, ちからを やしなう. Both are long, patient nourishment." },
        { id: "ja-u208l4-tazusawaru", type: "vocab", front: "たずさわる", reading: "tazusawaru", meaning: "to be engaged in (a field)", example: { jp: "長い 間、教いくに たずさわって きました。", en: "I have worked in education for a long time." }, accept: ["to be involved in", "to work in (a field)"], hint: "Being professionally involved in a line of work, said with some dignity. はたらく is having a job; たずさわる is belonging to a field." },
        { id: "ja-u208l4-moyosu", type: "vocab", front: "もよおす", reading: "moyōsu", meaning: "to hold (an event)", example: { jp: "毎年 この 時期に 大きな 会を もよおします。", en: "Every year at this time they hold a large gathering." }, accept: ["to stage", "to put on (an event)"], hint: "The formal かいさい (u192), and the noun もよおし is what a listings page calls an event." },
      ],
    },
  ],
};
