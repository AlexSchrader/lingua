// Unit 196 — かんようく・1 (idioms of the body) — B2 / JLPT N2
// Strand D, coverage 4 of 16. Japanese does an enormous amount of its everyday figurative
// work with body parts, and none of it is guessable: 手が空く is not "the hand is empty" and
// 耳が痛い is not earache. A B2 learner meets these constantly in speech and subtitles and
// has no way in, because they are not in a thematic unit and never will be — which is
// exactly why a coverage block should carry them.
// Fronts are kana. Several body kanji (顔, 頭, 腹, 骨) are not taught until later, so
// examples spell them in kana; `npm run check:glyphs` enforces that.
export const UNIT196 = {
  id: "ja-u196",
  lang: "ja",
  title: "かんようく・1",
  order: 196,
  stage: "b2",
  lessons: [
    {
      id: "ja-u196l1",
      unit: 196,
      lesson: 1,
      title: "手: hands, and being free to help",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the 手 idioms for availability and effort: てをかす, てがあく, てをやく, てにいれる, てをぬく.",
      items: [
        { id: "ja-u196l1-tewokasu", type: "vocab", front: "てをかす", reading: "tewokasu", meaning: "to lend a hand", example: { jp: "重い にもつだったので、となりの 人が てをかして くれました。", en: "It was heavy luggage, so the person next to me lent a hand." }, accept: ["to help out", "to give a hand"], hint: "かす is 'to lend', so the hand is on loan and comes back. てつだう is the plain verb; てをかす is warmer and more casual." },
        { id: "ja-u196l1-tegaaku", type: "vocab", front: "てがあく", reading: "tegaaku", meaning: "to be free, to have a moment", example: { jp: "てが あいたら、こちらも 手つだって もらえますか。", en: "When you have a moment, could you help with this too?" }, accept: ["to become available", "to be done with a task"], hint: "The hand becomes empty — you have finished what was in it. てが あいたら is the standard polite way to queue a request." },
        { id: "ja-u196l1-tewoyaku", type: "vocab", front: "てをやく", reading: "tewoyaku", meaning: "to be at a loss with, to have trouble handling", example: { jp: "うちの 子は 元気すぎて、いつも てを やいて います。", en: "Our child is so lively that we're always at our wits' end." }, accept: ["to struggle with", "to find hard to manage"], hint: "Literally 'to burn one's hand'. Almost always about a person or an animal you cannot control, rarely about a task." },
        { id: "ja-u196l1-tewoireru", type: "vocab", front: "てにいれる", reading: "teniireru", meaning: "to obtain, to get hold of", example: { jp: "なかなか 売って いない 品を、やっと てに いれました。", en: "I finally got hold of an item that's hard to find." }, accept: ["to acquire", "to secure", "to lay hands on"], hint: "Getting something that took effort or luck — かう is buying, てにいれる is obtaining. Very common in games and collecting." },
        { id: "ja-u196l1-tewonuku", type: "vocab", front: "てをぬく", reading: "tewonuku", meaning: "to cut corners", example: { jp: "だれも 見て いなくても、しごとで てを ぬきません。", en: "Even when nobody is watching, I don't cut corners at work." }, drill: { jp: "しごとで てをぬく。", en: "I cut corners at work." }, accept: ["to skimp", "to slack off", "to do a half job"], hint: "Pulling your hand out of the work partway. It is a real accusation — not the same as being slow or tired." },
        { id: "ja-u196l1-tegatarinai", type: "vocab", front: "てがたりない", reading: "tegatarinai", meaning: "to be short-handed", example: { jp: "今日は てが たりないので、いそがしく なりそうです。", en: "We're short-handed today, so it looks like it'll be busy." }, accept: ["understaffed", "not enough hands"], hint: "手 as a count of workers — the same use as English 'hands'. ひとで が たりない says the same thing more plainly." },
      ],
    },
    {
      id: "ja-u196l2",
      unit: 196,
      lesson: 2,
      title: "目: eyes, attention and taste",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the 目 idioms for noticing and judging: めがない, めをとおす, めをつける, めにつく, めがまわる, めからうろこ.",
      items: [
        { id: "ja-u196l2-meganai", type: "vocab", front: "めがない", reading: "meganai", meaning: "to have a weakness for", example: { jp: "父は あまい ものに めが ありません。", en: "My father has a real weakness for sweet things." }, drill: { jp: "あまい ものに めがない。", en: "I have a weakness for sweets." }, accept: ["to love (a food)", "to be crazy about"], hint: "Not 'has no eye' — the sense is that judgement stops working around the thing. Almost always food or a hobby." },
        { id: "ja-u196l2-mewotosu", type: "vocab", front: "めをとおす", reading: "mewotōsu", meaning: "to look over, to skim through", example: { jp: "会議の 前に、しりょうに めを とおして おいて ください。", en: "Please look over the materials before the meeting." }, accept: ["to run one's eye over", "to give it a read"], hint: "Passing your eye through a document, not studying it. It is the polite way to ask someone to read something without demanding they study it." },
        { id: "ja-u196l2-mewotsukeru", type: "vocab", front: "めをつける", reading: "mewotsukeru", meaning: "to have one's eye on", example: { jp: "前から めを つけて いた 店に、やっと 行けました。", en: "I finally got to the shop I'd had my eye on." }, accept: ["to single out", "to take an interest in", "to spot"], hint: "Deliberate attention paid in advance — to a shop, a player, a suspect. The intransitive めにつく in the next card is the opposite: it caught YOUR eye." },
        { id: "ja-u196l2-menitsuku", type: "vocab", front: "めにつく", reading: "menitsuku", meaning: "to catch the eye, to stand out", example: { jp: "赤い 服は よく めに つきます。", en: "Red clothes really catch the eye." }, accept: ["to be noticeable", "to stand out"], hint: "The thing does it to you. Often mildly negative — what めに つく is frequently what is out of place." },
        { id: "ja-u196l2-megamawaru", type: "vocab", front: "めがまわる", reading: "megamawaru", meaning: "to be dizzy; to be rushed off one's feet", example: { jp: "きゃくが 多くて、めが まわるほど いそがしいです。", en: "There are so many customers we're rushed off our feet." }, accept: ["to feel faint", "to be frantically busy"], hint: "Literal dizziness, and the figurative 'so busy the room spins'. めが まわるほど is the usual intensifier." },
        { id: "ja-u196l2-mekarauroko", type: "vocab", front: "めからうろこ", reading: "mekarauroko", meaning: "a sudden revelation", example: { jp: "その せつめいを 聞いて、めから うろこでした。", en: "Hearing that explanation was a real eye-opener." }, accept: ["eye-opener", "scales fell from my eyes"], hint: "Short for めから うろこが おちる, and — unusually for a Japanese idiom — it comes from the Bible, by way of translation." },
      ],
    },
    {
      id: "ja-u196l3",
      unit: 196,
      lesson: 3,
      title: "耳 and 口: hearing it and saying it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the 耳 and 口 idioms: みみがいたい, みみにする, みみをかす, くちがかたい, くちをはさむ, くちにあう.",
      items: [
        { id: "ja-u196l3-mimigaitai", type: "vocab", front: "みみがいたい", reading: "mimigaitai", meaning: "to hit close to home (painfully true)", example: { jp: "その 話は みみが いたいです。私も 同じでした。", en: "That one hits close to home — I was the same." }, drill: { jp: "その はなしは みみがいたい。", en: "That story hits close to home." }, accept: ["hard to hear (because true)", "a painful truth"], hint: "Not earache: it is criticism you cannot argue with. Said about yourself, it half-admits the fault." },
        { id: "ja-u196l3-mimininisuru", type: "vocab", front: "みみにする", reading: "mimininisuru", meaning: "to happen to hear", example: { jp: "その うわさは 私も みみに しました。", en: "I happened to hear that rumour too." }, accept: ["to overhear", "to catch wind of"], hint: "Hearing without seeking it out. きく is listening; みみにする is the news arriving at you." },
        { id: "ja-u196l3-mimiwokasu", type: "vocab", front: "みみをかす", reading: "mimiwokasu", meaning: "to lend an ear, to listen to", example: { jp: "だれの 意見にも みみを かさない 人でした。", en: "He was someone who wouldn't listen to anyone's opinion." }, accept: ["to pay heed", "to give a hearing"], hint: "The same かす as てをかす. It appears far more often in the negative — みみを かさない is the common form." },
        { id: "ja-u196l3-kuchigakatai", type: "vocab", front: "くちがかたい", reading: "kuchigakatai", meaning: "able to keep a secret", example: { jp: "あの 人は くちが かたいので、しんぱい ありません。", en: "She can keep a secret, so there's nothing to worry about." }, accept: ["tight-lipped", "discreet"], hint: "Its opposite くちが かるい is someone who talks. Hard mouth shut, light mouth open — the metaphor is consistent." },
        { id: "ja-u196l3-kuchiwohasamu", type: "vocab", front: "くちをはさむ", reading: "kuchiwohasamu", meaning: "to cut in, to interrupt", example: { jp: "二人の 話に くちを はさむのは やめました。", en: "I decided not to cut into their conversation." }, accept: ["to butt in", "to interject"], hint: "はさむ is to insert something between two things — here, your mouth into someone else's conversation." },
        { id: "ja-u196l3-kuchiniau", type: "vocab", front: "くちにあう", reading: "kuchiniau", meaning: "to suit one's taste", example: { jp: "お くちに あうか わかりませんが、どうぞ。", en: "I'm not sure it will be to your taste, but please do have some." }, accept: ["to be to one's liking (food)", "to agree with one's palate"], hint: "Only ever about food. おくちに あいますか is the standard modest question when serving someone." },
      ],
    },
    {
      id: "ja-u196l4",
      unit: 196,
      lesson: 4,
      title: "足: legs, going, and going over",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the 足 idioms: あしがでる, あしをはこぶ, あしをあらう, あしをひっぱる, あしがぼうになる, みにつく.",
      items: [
        { id: "ja-u196l4-ashigaderu", type: "vocab", front: "あしがでる", reading: "ashigaderu", meaning: "to go over budget", example: { jp: "思ったより かかって、あしが 出て しまいました。", en: "It cost more than I expected and we went over budget." }, drill: { jp: "おもったより あしがでる。", en: "It went over budget." }, accept: ["to run over (cost)", "to overspend", "to come up short"], hint: "The foot sticking out past what the money covered. Only about money — never about time." },
        { id: "ja-u196l4-ashiwohakobu", type: "vocab", front: "あしをはこぶ", reading: "ashiwohakobu", meaning: "to make the trip, to go in person", example: { jp: "とおい ところまで あしを はこんで いただき、ありがとうございます。", en: "Thank you for making the trip all this way." }, accept: ["to visit", "to take the trouble to go"], hint: "Polite and slightly formal, and it acknowledges the effort of the journey — which is why hosts and shops say it to you." },
        { id: "ja-u196l4-ashiwoarau", type: "vocab", front: "あしをあらう", reading: "ashiwoarau", meaning: "to leave (a bad line of work) for good", example: { jp: "その せかいからは、もう あしを あらいました。", en: "I've washed my hands of that world for good." }, accept: ["to go straight", "to quit for good"], hint: "English washes its hands; Japanese washes its feet. Strictly for leaving something disreputable — not for changing jobs." },
        { id: "ja-u196l4-ashiwohipparu", type: "vocab", front: "あしをひっぱる", reading: "ashiwohipparu", meaning: "to hold (the team) back", example: { jp: "みんなの あしを ひっぱらないように、練習して います。", en: "I'm practising so as not to hold everyone back." }, drill: { jp: "みんなの あしをひっぱる。", en: "I hold everyone back." }, accept: ["to drag down", "to be a liability"], hint: "Said about yourself it is modest and extremely common; said about someone else it is harsh." },
        { id: "ja-u196l4-ashigabo", type: "vocab", front: "あしがぼうになる", reading: "ashigabōninaru", meaning: "to be worn out from walking", example: { jp: "一日じゅう 歩いて、あしが ぼうに なりました。", en: "I walked all day and my legs are like lead." }, drill: { jp: "あるいて あしがぼうになる。", en: "I am worn out from walking." }, accept: ["legs like lead", "dead on one's feet"], hint: "Literally 'the legs become sticks' — they stop bending. Only ever from walking or standing." },
        { id: "ja-u196l4-minitsuku", type: "vocab", front: "みにつく", reading: "minitsuku", meaning: "to become part of you (a skill)", example: { jp: "毎日 少しずつ 練習すれば、かならず みに つきます。", en: "If you practise a little every day, it will certainly stick." }, accept: ["to be acquired (skill)", "to sink in", "to stay with you"], hint: "The word for learning that lasted. おぼえる is holding it; みに つく is it becoming yours — the single most encouraging phrase to hear about your own Japanese." },
      ],
    },
  ],
};
