// JA Unit 191 — けいご・2 (Register 3: 敬語 — the productive honorific and humble system) — B2 / JLPT N2
// ─────────────────────────────────────────────────────────────────────────────
// Block-2 house rules (see u188 header): mixed-script examples over the 568 glyphs
// taught through B1, verified by `npm run check:glyphs`; kana spaced fronts;
// examples in keigo register. Every front checked against block 1 (u156-173),
// block 3 (u192-208) AND — critically for a keigo unit — against the special
// honorific/humble VERBS already owned: A1/A2 taught いらっしゃる, おっしゃる, なさる,
// くださる, めしあがる, ごらんになる and the humble いたす, もうす, うかがう, まいる,
// さしあげる, ごぞんじ; u141 taught the SET PHRASES (いらっしゃいませ, かしこまりました,
// おまちください, おせわになります, ぞんじております, ちょうだいします …). Re-teaching any of
// those was the trap that cost B1's keigo unit its first draft. うかがいます, まいります,
// もうします were all dropped here for exactly that reason — their dictionary forms are
// owned, so a ます-form is the same lexeme with a second mastery track.
// ─────────────────────────────────────────────────────────────────────────────
// So what is LEFT for a B2 keigo unit, once the special verbs and the set phrases are
// spent? The PRODUCTIVE SYSTEM — the regular frames that turn ANY ordinary verb into
// keigo, which is what lets a learner speak politely about a verb they were never
// taught a special form for. Four lessons: raise the other person with お～になる and
// the honorific passive → lower yourself with お～する → the handful of humble verbs the
// frames can't build (the 拝〜 and お目に〜 families) → and the formal apparatus that
// surrounds them all: the humble copula, ております, and how to decline without a flat no.
// A note kept from u141, because it is the rule that stops the duplicates: a frame
// INSTANCE (おかきになる) is a distinct item from the verb it is built on (書く) — the
// learning is the frame, not the stem, and the stem is only its worked example.
export const UNIT191 = {
  id: "ja-u191",
  lang: "ja",
  title: "けいご・2",
  order: 191,
  stage: "b2",
  lessons: [
    // Lesson 1: raising the other person — the honorific frame
    {
      id: "ja-u191l1",
      unit: 191,
      lesson: 1,
      title: "Raising the other person",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make any verb honorific with the regular frames: おかきになる, おつかいになる, おこしになる, おやすみになる, いかれる, よまれる.",
      items: [
        { id: "ja-u191l1-okakininaru", type: "vocab", front: "おかきになる", reading: "okakininaru", meaning: "to write (honorific)", example: { jp: "先生が 本を おかきになったと 聞きました。", en: "I heard the teacher has written a book." }, drill: { jp: "せんせいが ほんを おかきになる。", en: "The teacher writes a book." }, accept: ["writes (respectful)", "honorific of write", "does write (of a superior)"], hint: "The master frame: お + verb stem + になる raises the OTHER person's action. 書く→おかきになる, 読む→およみになる. Special verbs (見る→ごらんになる) already have their own form and skip this." },
        { id: "ja-u191l1-otsukaininaru", type: "vocab", front: "おつかいになる", reading: "otsukaininaru", meaning: "to use (honorific)", example: { jp: "この 部屋は、どなたでも おつかいに なれます。", en: "Anyone may use this room." }, accept: ["uses (respectful)", "honorific of use", "may use (of others)"], hint: "Same お～になる frame on 使う. Note the potential: おつかいに なれます = 'can use', respectfully. The frame bends like an ordinary verb once it's built." },
        { id: "ja-u191l1-okoshininaru", type: "vocab", front: "おこしになる", reading: "okoshininaru", meaning: "to come / go (honorific)", example: { jp: "会場には 何時ごろ おこしに なりますか。", en: "About what time will you be coming to the venue?" }, accept: ["comes (respectful)", "will you come", "honorific of come/go"], hint: "越す ('to cross over') built into the お～になる frame gives the softest honorific for 来る／行く — warmer than いらっしゃる and very common at a reception desk." },
        { id: "ja-u191l1-oyasumininaru", type: "vocab", front: "おやすみになる", reading: "oyasumininaru", meaning: "to sleep / to rest (honorific)", example: { jp: "社長は もう おやすみに なりました。", en: "The company president has already retired for the night." }, accept: ["goes to bed (respectful)", "rests (honorific)", "honorific of sleep"], hint: "休む in the お～になる frame. It is also the goodnight said to a superior — おやすみなさい is this frame worn down into a fixed phrase." },
        { id: "ja-u191l1-ikareru", type: "vocab", front: "いかれる", reading: "ikareru", meaning: "to go (honorific, light)", example: { jp: "部長は もう 家に いかれました。", en: "The department head has already gone home." }, accept: ["goes (respectful)", "honorific passive of go", "will you go"], hint: "The OTHER honorific frame: れる／られる, identical in shape to the passive. Lighter and quicker than お～になる — good for a colleague you needn't over-honour. 行く→いかれる." },
        { id: "ja-u191l1-yomareru", type: "vocab", front: "よまれる", reading: "yomareru", meaning: "to read (honorific, light)", example: { jp: "この 記事は もう よまれましたか。", en: "Have you already read this article?" }, accept: ["reads (respectful)", "honorific passive of read", "did you read"], hint: "読む in the れる／られる honorific. Because the shape is the passive's, context decides — here the subject is the listener, so it reads as respect, not 'was read'." },
      ],
    },
    // Lesson 2: lowering yourself — the humble frame
    {
      id: "ja-u191l2",
      unit: 191,
      lesson: 2,
      title: "Lowering yourself",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make your own action humble with the regular frame: おもちする, おわたしする, おつたえする, おむかえする, おとどけする, おこたえします.",
      items: [
        { id: "ja-u191l2-omochisuru", type: "vocab", front: "おもちする", reading: "omochisuru", meaning: "to carry / bring (humble)", example: { jp: "おにもつは 私が おもちします。", en: "I'll carry your luggage." }, drill: { jp: "にもつを おもちする。", en: "I will carry the luggage." }, accept: ["I'll bring", "humbly carry", "let me hold that"], hint: "The humble master frame: お + verb stem + する lowers YOUR OWN action to serve the other. 持つ→おもちする. For する-verbs it becomes ご～する (ご連絡する)." },
        { id: "ja-u191l2-owatashisuru", type: "vocab", front: "おわたしする", reading: "owatashisuru", meaning: "to hand over (humble)", example: { jp: "資料は あした おわたしします。", en: "I'll hand over the materials tomorrow." }, accept: ["I'll hand it to you", "humbly give", "let me pass it over"], hint: "渡す in the お～する frame — humbly handing a thing to someone. The action is yours, done for their benefit; the honorific mirror they say is お渡しになる." },
        { id: "ja-u191l2-otsutaesuru", type: "vocab", front: "おつたえする", reading: "otsutaesuru", meaning: "to convey / pass on (humble)", example: { jp: "その ことは、私から 部長に おつたえします。", en: "I'll pass that on to the department head myself." }, accept: ["I'll relay", "humbly convey", "let me tell them"], hint: "伝える in the お～する frame — humbly passing a message upward or onward. お伝えください is the honorific mirror you say to THEM." },
        { id: "ja-u191l2-omukaesuru", type: "vocab", front: "おむかえする", reading: "omukaesuru", meaning: "to go to meet / receive (humble)", example: { jp: "空港まで おむかえに あがります。", en: "I'll come to meet you at the airport." }, accept: ["I'll come to collect you", "humbly receive", "go to greet"], hint: "迎える in the お～する frame — going out to receive a guest. Often paired with あがる (humble 'go'): おむかえに あがります." },
        { id: "ja-u191l2-otodokesuru", type: "vocab", front: "おとどけする", reading: "otodokesuru", meaning: "to deliver (humble)", example: { jp: "ご注文の 品は、来週 おとどけします。", en: "We'll deliver your order next week." }, accept: ["I'll deliver", "humbly bring round", "have it sent to you"], hint: "届ける in the お～する frame — the word a shop or a courier uses for bringing your thing to you. The humble counterpart of the honorific おとどけくださる." },
        { id: "ja-u191l2-okotaeshimasu", type: "vocab", front: "おこたえします", reading: "okotaeshimasu", meaning: "to answer / respond (humble)", example: { jp: "ご質問には、後ほど おこたえします。", en: "I'll answer your question shortly." }, accept: ["I'll reply", "humbly respond", "let me address that"], hint: "答える in the お～する frame — humbly giving an answer. 後ほど ('later, shortly') is the formal あとで that keeps company with it." },
      ],
    },
    // Lesson 3: the humble verbs the frame can't build
    {
      id: "ja-u191l3",
      unit: 191,
      lesson: 3,
      title: "Meeting, showing, and the 拝 family",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the fixed humble verbs no frame produces: おめにかかる, おめにかける, はいしゃくする, はいどくする, はいちょうする, たまわる.",
      items: [
        { id: "ja-u191l3-omenikakaru", type: "vocab", front: "おめにかかる", reading: "omenikakaru", meaning: "to meet (humble)", example: { jp: "先生に おめにかかれて、ほんとうに うれしいです。", en: "I'm truly glad to be able to meet you, sensei." }, accept: ["to have the honour of meeting", "humbly meet", "to see (a superior)"], hint: "お目にかかる — literally 'to hang before someone's eyes'. The humble 会う, for meeting someone you look up to. はじめて おめにかかります opens a first introduction." },
        { id: "ja-u191l3-omenikakeru", type: "vocab", front: "おめにかける", reading: "omenikakeru", meaning: "to show (humble)", example: { jp: "新しい 作品を おめにかけたいと 思います。", en: "I'd like to show you my new work." }, drill: { jp: "さくひんを おめにかける。", en: "I show you the work." }, accept: ["to let you see", "humbly present", "to put before you"], hint: "お目にかける — the minimal-pair partner of おめにかかる: かかる is 'I meet you', かける is 'I show you'. The humble 見せる, for presenting your own thing to a superior." },
        { id: "ja-u191l3-haishakusuru", type: "vocab", front: "はいしゃくする", reading: "haishakusuru", meaning: "to borrow (humble)", example: { jp: "その 本を 少し はいしゃくしても よろしいでしょうか。", en: "Might I borrow that book for a little while?" }, accept: ["to humbly borrow", "may I use", "borrow (respectfully)"], hint: "拝借 — the 拝 ('to bow') prefix marks a humble act of receiving. The humble 借りる. 拝 gives a whole family: 拝借 borrow, 拝読 read, 拝聴 listen." },
        { id: "ja-u191l3-haidokusuru", type: "vocab", front: "はいどくする", reading: "haidokusuru", meaning: "to read (humble)", example: { jp: "お手紙を はいどくしました。ご返事が おそくなり、失礼しました。", en: "I have read your letter. My apologies for the late reply." }, drill: { jp: "おてがみを はいどくする。", en: "I read your letter." }, accept: ["to humbly read", "have read (respectfully)", "read your (letter)"], hint: "拝読 — the humble 読む, for reading something a superior wrote. はいどくしました is the standard opening once you've read someone's letter or document." },
        { id: "ja-u191l3-haichosuru", type: "vocab", front: "はいちょうする", reading: "haichōsuru", meaning: "to listen (humble)", example: { jp: "先生の お話を はいちょうして、考えが 変わりました。", en: "Having listened to your talk, sensei, my thinking changed." }, drill: { jp: "おはなしを はいちょうする。", en: "I listen to your talk." }, accept: ["to humbly listen", "hear (respectfully)", "attend to (a talk)"], hint: "拝聴 — the humble 聞く, for listening to a talk or performance by someone senior. Completes the 拝 family with 拝借 and 拝読." },
        { id: "ja-u191l3-tamawaru", type: "vocab", front: "たまわる", reading: "tamawaru", meaning: "to receive / be granted (humble)", example: { jp: "先日は 温かい おことばを たまわり、ありがとうございました。", en: "Thank you for the kind words you granted me the other day." }, accept: ["to be granted", "humbly receive", "to be given (by a superior)"], hint: "賜る — the most formal 'receive', for something bestowed from above; also, honorifically, 'to bestow'. A ceremony-and-speeches word: お力ぞえを たまわる." },
      ],
    },
    // Lesson 4: the formal apparatus
    {
      id: "ja-u191l4",
      unit: 191,
      lesson: 4,
      title: "The humble copula and declining softly",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle the formal frame around your words: でございます, ております, かねます, ますでしょうか, あいにく, おかまいなく.",
      items: [
        { id: "ja-u191l4-degozaimasu", type: "vocab", front: "でございます", reading: "degozaimasu", meaning: "to be (humble/formal copula)", example: { jp: "うけつけは にかいで ございます。", en: "The reception is on the second floor." }, accept: ["is (most formal)", "humble desu", "we are"], hint: "The most formal です, heard from staff and in announcements. こちらは… でございます introduces things and places. Its plain existence twin is ございます ('there is')." },
        { id: "ja-u191l4-teorimasu", type: "vocab", front: "ております", reading: "teorimasu", meaning: "to be doing (humble ～ている)", example: { jp: "その 件は、私どもも しょうちして おります。", en: "We too are aware of that matter." }, drill: { jp: "しょうちしております。", en: "I am aware of it." }, accept: ["am ~ing (humble)", "humble of ている", "we are (doing)"], hint: "おる is the humble いる, so て+おります humbly lowers ～ている about yourself: 待っております, 存じております. Never use it about the listener — for them it's ～ていらっしゃる." },
        { id: "ja-u191l4-kanemasu", type: "vocab", front: "かねます", reading: "kanemasu", meaning: "cannot (bring oneself to); unable to", example: { jp: "その ご質問には、お答えいたしかねます。", en: "I'm afraid I am unable to answer that question." }, accept: ["am unable to", "cannot (politely)", "it is difficult to"], hint: "The soft, formal 'no' — verb stem + かねます says 'I can't', but as a regretful impossibility rather than a refusal. わかりかねます is far gentler than わかりません." },
        { id: "ja-u191l4-masudeshoka", type: "vocab", front: "ますでしょうか", reading: "masudeshōka", meaning: "would you perhaps…? (very polite)", example: { jp: "お名前を うかがっても よろしいでしょうか。しょうしょう お待ちいただけますでしょうか。", en: "May I ask your name? Could you kindly wait a moment?" }, accept: ["might you", "would it be possible to", "could you perhaps"], hint: "Stacks でしょうか onto ます for maximum deference in a request or question. Strictly it over-eggs the grammar, but service Japanese lives on it — soften, then soften again." },
        { id: "ja-u191l4-ainiku", type: "vocab", front: "あいにく", reading: "ainiku", meaning: "unfortunately, as it happens", example: { jp: "あいにく その日は よていが ございます。", en: "Unfortunately I have plans that day." }, accept: ["regrettably", "as ill luck would have it", "I'm afraid"], hint: "生憎 — front-loads bad news politely, warning the listener a refusal or a problem is coming. Pairs naturally with でございます / ございません to decline gracefully." },
        { id: "ja-u191l4-okamainaku", type: "vocab", front: "おかまいなく", reading: "okamainaku", meaning: "please don't trouble yourself", example: { jp: "どうぞ おかまいなく。すぐに 失礼しますので。", en: "Please don't go to any trouble — I'll be leaving right away." }, drill: { jp: "おかまいなくといいます。", en: "I say please don't trouble yourself." }, accept: ["don't bother on my account", "please don't fuss", "no need to trouble"], hint: "構う ('to trouble oneself over') in a fixed humble phrase. You say it when a host starts preparing tea or food for you — declining the fuss, not the welcome." },
      ],
    },
  ],
};
