// JA Unit 141 — けいご (register 2: softening and formality) — B1 / JLPT N3
// Strand E (register), unit 2 of 2. u140 went DOWN from ですます into plain speech;
// this unit goes UP. Three layers, in the order a learner actually needs them:
//   1. softened requests — the everyday politeness that stops です／ます sounding brusque
//   2. hedging           — saying something without asserting it flat
//   3. 敬語 IN USE     — the fixed phrases that carry it
// The blueprint's reason for the strand is the point of the unit: "the same sentence said
// to a friend, a stranger, and a boss is three different sentences, and choosing wrong is
// the mistake that marks a speaker as foreign far more than vocabulary does."
//
// Lessons 3 and 4 were REWRITTEN after the content gate: the first draft taught
// いらっしゃいます・おっしゃいます・なさいます・いたします and eight more, every one of which is
// already owned in dictionary form by u88–u97 (いらっしゃる, おっしゃる, なさる, いたす…).
// A1/A2 taught the 敬語 VERBS as vocabulary; what was actually missing at B1 is the set
// phrases those verbs live inside — the Japanese you hear across a counter and say to a
// manager, which no amount of verb knowledge assembles on its own. That is a better unit
// than the duplicate one, so the gate finding improved it rather than just costing 12 cards.
export const UNIT141 = {
  id: "ja-u141",
  lang: "ja",
  title: "けいご",
  order: 141,
  stage: "b1",
  lessons: [
    // Lesson 1: asking for things without imposing
    {
      id: "ja-u141l1",
      unit: 141,
      lesson: 1,
      title: "Asking without imposing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Make a request that doesn't put pressure on the other person: ていただけませんか, もしよろしければ, おそれいりますが.",
      items: [
        { id: "ja-u141l1-teitadakemasenka", type: "vocab", front: "ていただけませんか", reading: "teitadakemasenka", meaning: "could you please…?", example: { jp: "すみません、もういちどせつめいしていただけませんか。", en: "Sorry — could I ask you to explain that once more?" }, accept: ["would you mind", "may I ask you to", "I'd be grateful if you would"], hint: "The politest everyday request. Negative + question = maximum room to say no, which is exactly why it sounds polite. Ranking: てください < てもらえますか < ていただけませんか." },
        { id: "ja-u141l1-temoraemasuka", type: "vocab", front: "てもらえますか", reading: "temoraemasuka", meaning: "could you…?", example: { jp: "にもつがおもいので、てつだってもらえますか。", en: "This luggage is heavy — could you give me a hand?" }, accept: ["can you", "would you", "do you mind"], hint: "The middle rung: warmer than ください, lighter than いただけませんか. Right for colleagues and shop staff." },
        { id: "ja-u141l1-moshiyoroshikereba", type: "vocab", front: "もしよろしければ", reading: "moshiyoroshikereba", meaning: "if you don't mind", example: { jp: "もしよろしければ、いっしょにひるごはんをたべませんか。", en: "If you don't mind, would you like to have lunch together?" }, accept: ["if it's all right with you", "if you're willing", "if convenient"], hint: "Front-loads the escape route before you even ask. Invitations to someone senior almost always open with it." },
        { id: "ja-u141l1-osoreirimasuga", type: "vocab", front: "おそれいりますが", reading: "osoreirimasuga", meaning: "excuse me, but…", example: { jp: "おそれいりますが、こちらでおまちください。", en: "I'm sorry to trouble you, but please wait here." }, accept: ["I'm sorry to trouble you", "pardon me but", "if I may"], hint: "Staff-to-customer politeness — literally 'I feel awe'. You will hear it far more often than you say it, and that is fine." },
        { id: "ja-u141l1-sumimasenga", type: "vocab", front: "すみませんが", reading: "sumimasenga", meaning: "sorry, but…", example: { jp: "すみませんが、きょうはいそがしいのでいけません。", en: "Sorry, but I'm busy today so I can't go." }, accept: ["excuse me but", "I'm afraid", "apologies but"], hint: "The workhorse softener for refusing. A bare いけません lands hard; すみませんが in front of it does almost all the repair work." },
        { id: "ja-u141l1-saseteitadakimasu", type: "vocab", front: "させていただきます", reading: "saseteitadakimasu", meaning: "I will (humbly) do", example: { jp: "それでは、わたしからせつめいさせていただきます。", en: "In that case, allow me to be the one to explain." }, accept: ["allow me to", "I'll take the liberty of", "with your permission I will"], hint: "Causative + ていただく: 'I will do it, with your permission.' Business Japanese runs on this — announcing an action while framing it as a favour granted to you." },
      ],
    },
    // Lesson 2: not asserting things flat
    {
      id: "ja-u141l2",
      unit: 141,
      lesson: 2,
      title: "Saying it without asserting it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Soften an opinion so it invites discussion instead of ending it: のではないでしょうか, ようなきがします, わけではありません.",
      items: [
        { id: "ja-u141l2-nodewanaideshoka", type: "vocab", front: "のではないでしょうか", reading: "nodewanaideshōka", meaning: "isn't it perhaps that…?", example: { jp: "このほうほうのほうが、はやいのではないでしょうか。", en: "Wouldn't this way perhaps be faster?" }, accept: ["might it not be that", "I wonder whether", "perhaps it is that"], hint: "How you disagree in a meeting without contradicting anyone. It states your view as a question, so the other person can adopt it as their own idea." },
        { id: "ja-u141l2-yonakigashimasu", type: "vocab", front: "ようなきがします", reading: "yōnakigashimasu", meaning: "I get the feeling that", example: { jp: "どこかであったことがあるようなきがします。", en: "I get the feeling we've met somewhere before." }, accept: ["it feels like", "I have a sense that", "somehow I think"], hint: "Claims a feeling rather than a fact, so you cannot be wrong. Perfect for an impression you can't back up yet." },
        { id: "ja-u141l2-wakedewaarimasen", type: "vocab", front: "わけではありません", reading: "wakedewaarimasen", meaning: "it's not that…", example: { jp: "きらいなわけではありませんが、あまりたべません。", en: "It's not that I dislike it — I just don't eat much of it." }, accept: ["it doesn't mean that", "not necessarily", "I'm not saying that"], hint: "Corrects an impression you think the other person has just formed. Almost always followed by が and the real explanation." },
        { id: "ja-u141l2-dochirakatoiuto", type: "vocab", front: "どちらかというと", reading: "dochirakatoiuto", meaning: "if anything", example: { jp: "どちらかというと、しずかなみせのほうがすきです。", en: "If anything, I prefer a quiet restaurant." }, accept: ["rather", "on balance", "if I had to choose"], hint: "Turns a preference into a mild lean. The standard way to answer 'which do you like?' when neither answer feels safe." },
        { id: "ja-u141l2-ichio", type: "vocab", front: "いちおう", reading: "ichiō", meaning: "more or less, just in case", example: { jp: "いちおうよやくしましたが、いかなくてもだいじょうぶです。", en: "I booked it just in case, but we don't have to go." }, accept: ["for now", "roughly", "tentatively"], hint: "Downgrades whatever you just claimed — 'I did it, but don't hold me to it'. Japanese speakers use it to avoid sounding boastful about having prepared." },
        { id: "ja-u141l2-dekireba", type: "vocab", front: "できれば", reading: "dekireba", meaning: "if possible", example: { jp: "できれば、あしたまでにへんじをいただきたいです。", en: "If possible, I'd like a reply by tomorrow." }, accept: ["preferably", "if you can", "ideally"], hint: "Marks a wish as negotiable. Attach it to any request that has a deadline and the deadline stops sounding like an order." },
      ],
    },
    // Lesson 3: the keigo you HEAR
    {
      id: "ja-u141l3",
      unit: 141,
      lesson: 3,
      title: "The keigo you hear across a counter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Understand what staff are saying to you: いらっしゃいませ, かしこまりました, おまちください, おまたせしました.",
      items: [
        { id: "ja-u141l3-irasshaimase", type: "vocab", front: "いらっしゃいませ", reading: "irasshaimase", meaning: "welcome (said to a customer)", example: { jp: "みせにはいると、いらっしゃいませといわれました。", en: "When I went into the shop, they said welcome." }, accept: ["welcome", "come on in", "greeting to a customer"], hint: "The imperative of いらっしゃる (u89), and the first Japanese most visitors hear. It wants no reply — a nod is enough." },
        { id: "ja-u141l3-kashikomarimashita", type: "vocab", front: "かしこまりました", reading: "kashikomarimashita", meaning: "certainly (staff to customer)", example: { jp: "コーヒーをたのむと、てんいんはかしこまりましたといいました。", en: "When I ordered a coffee, the server said certainly." }, accept: ["understood", "very good", "right away"], hint: "The most deferential 'understood'. Staff say it to you; you never say it back. Its workplace equivalent is しょうちしました." },
        { id: "ja-u141l3-omachikudasai", type: "vocab", front: "おまちください", reading: "omachikudasai", meaning: "please wait (respectful)", example: { jp: "こちらでおまちくださいといわれたので、いすにすわりました。", en: "I was asked to wait here, so I sat down." }, accept: ["kindly wait", "one moment please", "hold please"], hint: "The productive respectful frame: お + verb stem + ください. Learn the FRAME and おすわりください, おもちください, おかけください come free." },
        { id: "ja-u141l3-okakekudasai", type: "vocab", front: "おかけください", reading: "okakekudasai", meaning: "please have a seat", example: { jp: "こちらにおかけくださいといわれて、いすにすわりました。", en: "I was invited to take a seat, and sat down." }, accept: ["do sit down", "take a seat", "please be seated"], hint: "Same お…ください frame as おまちください. かける here is 'sit', not 'hang' or 'phone' — context does all the work." },
        { id: "ja-u141l3-omataseshimashita", type: "vocab", front: "おまたせしました", reading: "omataseshimashita", meaning: "sorry to have kept you waiting", example: { jp: "おまたせしましたといって、てんいんがりょうりをもってきました。", en: "Saying sorry for the wait, the server brought the food." }, accept: ["thanks for waiting", "sorry for the wait", "kept you waiting"], hint: "The mirror frame: お + stem + します is HUMBLE, lowering the speaker. おまちください raises you; おまたせしました lowers them." },
        { id: "ja-u141l3-uketamawarimasu", type: "vocab", front: "うけたまわります", reading: "uketamawarimasu", meaning: "we take (orders); I hear (humble)", example: { jp: "ごちゅうもんはこちらでうけたまわります。", en: "We take orders over here." }, accept: ["humbly receive", "I am told", "we accept"], hint: "The humble うける and きく at once. Almost purely a service and telephone word — recognise it, and you will rarely need to say it." },
      ],
    },
    // Lesson 4: the keigo you SAY
    {
      id: "ja-u141l4",
      unit: 141,
      lesson: 4,
      title: "The keigo you say to a superior",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Open and close a formal exchange properly: おせわになります, おねがいいたします, しつれいいたします, しょうちしました.",
      items: [
        { id: "ja-u141l4-osewaninarimasu", type: "vocab", front: "おせわになります", reading: "osewaninarimasu", meaning: "thank you for your support (set opener)", example: { jp: "いつもおせわになっております。たなかともうします。", en: "Thank you for your continued support. My name is Tanaka." }, accept: ["thank you for your help", "I'm indebted to you", "much obliged"], hint: "The opening line of virtually every business email and phone call in Japan. It thanks nobody for anything specific — it just opens the door." },
        { id: "ja-u141l4-onegaiitashimasu", type: "vocab", front: "おねがいいたします", reading: "onegaiitashimasu", meaning: "I ask this of you (humble)", example: { jp: "ごかくにんのうえ、おねがいいたします。", en: "I'd be grateful if you would check it and proceed." }, accept: ["please", "if you would be so kind", "I request"], hint: "The humble おねがいします, built on the いたす of u90. It ends most requests and most emails — the polite full stop." },
        { id: "ja-u141l4-shitsureiitashimasu", type: "vocab", front: "しつれいいたします", reading: "shitsureiitashimasu", meaning: "excuse me (entering or leaving)", example: { jp: "しつれいいたしますといって、へやをでました。", en: "Saying excuse me, I left the room." }, accept: ["pardon me", "if you'll excuse me", "I'll take my leave"], hint: "Said on the way IN and on the way OUT of a superior's room, and to end a phone call. The formal しつれいします." },
        { id: "ja-u141l4-shochishimashita", type: "vocab", front: "しょうちしました", reading: "shōchishimashita", meaning: "understood, will do", example: { jp: "しょうちしました。すぐにやっておきます。", en: "Understood. I'll get it done right away." }, accept: ["certainly", "noted", "I'll see to it"], hint: "What YOU say when a superior asks for something. わかりました is fine among equals; しょうちしました accepts the task properly." },
        { id: "ja-u141l4-zonjiteorimasu", type: "vocab", front: "ぞんじております", reading: "zonjiteorimasu", meaning: "I know (humble)", example: { jp: "そのけんなら、ぞんじております。", en: "I'm aware of that matter." }, accept: ["I am aware", "humbly know", "I do know"], hint: "The humble しっています. Its respectful partner ごぞんじ (u95) is for the other person's knowing — same root, opposite direction." },
        { id: "ja-u141l4-chodaishimasu", type: "vocab", front: "ちょうだいします", reading: "chōdaishimasu", meaning: "I gratefully receive (humble)", example: { jp: "それでは、ありがたくちょうだいします。", en: "In that case, I'll gratefully accept it." }, accept: ["I'll take it", "humbly accept", "receive gratefully"], hint: "A step above いただきます for accepting a gift or a document. おなまえをちょうだいできますか is a very formal 'may I have your name?'." },
      ],
    },
  ],
};
