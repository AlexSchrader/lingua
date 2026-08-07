// JA Unit 141 — けいご (register 2: softening and formality) — B1 / JLPT N3
// Strand E (register), unit 2 of 2. u140 went DOWN from ですます into plain speech;
// this unit goes UP. Three layers, in the order a learner actually needs them:
//   1. softened requests  — the everyday politeness that stops です／ます sounding brusque
//   2. hedging            — saying something without asserting it flat
//   3. 尊敬語 and 謙譲語  — raising the other person, lowering yourself
// The blueprint's reason for the strand is the point of the unit: "the same sentence said
// to a friend, a stranger, and a boss is three different sentences, and choosing wrong is
// the mistake that marks a speaker as foreign far more than vocabulary does."
// Each example pairs the formal form with the plain one it replaces, so the contrast is
// the lesson rather than a list of irregular verbs to memorize.
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
    // Lesson 3: 尊敬語 — raising the other person
    {
      id: "ja-u141l3",
      unit: 141,
      lesson: 3,
      title: "そんけいご — raising the other person",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use respectful verbs for what the other person does: いらっしゃいます, おっしゃいます, めしあがります, なさいます.",
      items: [
        { id: "ja-u141l3-irasshaimasu", type: "vocab", front: "いらっしゃいます", reading: "irasshaimasu", meaning: "to be / go / come (respectful)", example: { jp: "せんせいはいま、けんきゅうしつにいらっしゃいます。", en: "The professor is in his office right now." }, accept: ["is (respectful)", "goes (respectful)", "comes (respectful)"], hint: "One verb replacing three — います, いきます and きます all become いらっしゃいます. Only ever for the OTHER person; never about yourself." },
        { id: "ja-u141l3-osshaimasu", type: "vocab", front: "おっしゃいます", reading: "osshaimasu", meaning: "to say (respectful)", example: { jp: "ぶちょうがおっしゃったことを、メモしておきました。", en: "I made a note of what the department head said." }, accept: ["says (respectful)", "states", "tells"], hint: "The respectful いいます. なんとおっしゃいますか is the polite 'what is your name?' — literally 'how do you say it?'." },
        { id: "ja-u141l3-meshiagarimasu", type: "vocab", front: "めしあがります", reading: "meshiagarimasu", meaning: "to eat / drink (respectful)", example: { jp: "つめたいうちに、どうぞめしあがってください。", en: "Please eat it while it's still cold." }, accept: ["eats (respectful)", "drinks (respectful)", "has (a meal)"], hint: "Covers both たべます and のみます. Saying it about your own eating is the classic overcorrection — for yourself, いただきます." },
        { id: "ja-u141l3-goranninarimasu", type: "vocab", front: "ごらんになります", reading: "goranninarimasu", meaning: "to look at (respectful)", example: { jp: "しりょうはもうごらんになりましたか。", en: "Have you already had a look at the documents?" }, accept: ["sees (respectful)", "watches (respectful)", "views"], hint: "The respectful みます. It follows the regular お／ご + noun + になります pattern, which also gives you おかきになります, およみになります." },
        { id: "ja-u141l3-nasaimasu", type: "vocab", front: "なさいます", reading: "nasaimasu", meaning: "to do (respectful)", example: { jp: "しゅうまつは、なにをなさいますか。", en: "What will you be doing this weekend?" }, accept: ["does (respectful)", "performs", "carries out"], hint: "The respectful します, so every ～します verb has a respectful twin: べんきょうなさいます, よやくなさいます." },
        { id: "ja-u141l3-gozonjidesu", type: "vocab", front: "ごぞんじです", reading: "gozonjidesu", meaning: "to know (respectful)", example: { jp: "このみせをごぞんじですか。とてもゆうめいです。", en: "Do you know this shop? It's very famous." }, accept: ["knows (respectful)", "is aware of", "is acquainted with"], hint: "The respectful しっています. Its humble partner is ぞんじております — the two look alike and mean opposite directions of respect." },
      ],
    },
    // Lesson 4: 謙譲語 — lowering yourself
    {
      id: "ja-u141l4",
      unit: 141,
      lesson: 4,
      title: "けんじょうご — lowering yourself",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use humble verbs for your own actions: いたします, もうします, まいります, うかがいます.",
      items: [
        { id: "ja-u141l4-itashimasu", type: "vocab", front: "いたします", reading: "itashimasu", meaning: "to do (humble)", example: { jp: "そのしごとは、わたしがいたします。", en: "I'll take care of that job myself." }, accept: ["do (humble)", "shall do", "will handle"], hint: "The humble します — used only about yourself. どういたしまして, the 'you're welcome' you learned in week one, is this verb." },
        { id: "ja-u141l4-moshimasu", type: "vocab", front: "もうします", reading: "mōshimasu", meaning: "to say / be called (humble)", example: { jp: "はじめまして、たなかともうします。", en: "Nice to meet you — my name is Tanaka." }, accept: ["am called", "say (humble)", "my name is"], hint: "The humble いいます. ～ともうします is the standard business self-introduction; ～です is fine socially but sounds casual at work." },
        { id: "ja-u141l4-mairimasu", type: "vocab", front: "まいります", reading: "mairimasu", meaning: "to go / come (humble)", example: { jp: "3じまでには、そちらへまいります。", en: "I'll be there by three." }, accept: ["go (humble)", "come (humble)", "will be there"], hint: "The humble いきます and きます. Station announcements use it about the train — でんしゃがまいります — which is why it sounds familiar before you ever study it." },
        { id: "ja-u141l4-haikenshimasu", type: "vocab", front: "はいけんします", reading: "haikenshimasu", meaning: "to look at (humble)", example: { jp: "おてがみをはいけんしました。ありがとうございます。", en: "I have read your letter. Thank you." }, accept: ["see (humble)", "have a look at", "examine (humble)"], hint: "The humble みます, and only for things belonging to someone you're honouring. Its respectful partner is ごらんになります." },
        { id: "ja-u141l4-ukagaimasu", type: "vocab", front: "うかがいます", reading: "ukagaimasu", meaning: "to visit / to ask (humble)", example: { jp: "あした、おたくへうかがってもよろしいでしょうか。", en: "Would it be all right if I visited your home tomorrow?" }, accept: ["visit (humble)", "ask (humble)", "call on"], hint: "Two humble verbs in one shape — 'visit' (いきます) and 'ask' (ききます). ちょっとうかがいますが is how you stop a stranger for directions." },
        { id: "ja-u141l4-moshiagemasu", type: "vocab", front: "もうしあげます", reading: "mōshiagemasu", meaning: "to say (most humble)", example: { jp: "こころよりおれいをもうしあげます。", en: "I offer you my sincere thanks." }, accept: ["humbly say", "respectfully state", "offer (words)"], hint: "One step below もうします — reserved for set phrases of thanks and apology in speeches and letters. Recognise it; you rarely need to produce it." },
      ],
    },
  ],
};
