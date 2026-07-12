// Unit 31 — けいご ("Polite language / keigo") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Preview-only via b1-draft.js (see BUILD-BRIEF /
// CURRICULUM-B1-SKELETON.md). The first B1 trial unit.
//
// MODEL (mirrors Unit 30's safe word-like approach): keigo verbs are taught as WHOLE
// lexical items and shown in their polite ～ます form in examples (いらっしゃいます,
// めしあがります…), which parallels the ～ます verbs learners already know — so NO new
// productive conjugation layer is required here (that stays the conjugate card's job).
// Recognition-first (dominantMode: "recognize"): B1 learners must RECOGNISE keigo in
// service situations well before producing it. Each respect/humble pair carries a hint
// naming its direction (raise the other person ↔ lower yourself).
//
// Naturalness (register, real service usage) is queued for the batch native-speaker
// review before B1 ever goes live — this is a draft.
export const UNIT31 = {
  id: "ja-u31", lang: "ja", title: "けいご", order: 31, stage: "b1",
  lessons: [
    {
      id: "ja-u31l1", unit: 31, lesson: 1, title: "Respect (尊敬語)", cefr: "B1", dominantMode: "recognize",
      canDo: "Recognise respectful verbs for someone else's actions: いらっしゃる めしあがる ごらんになる おっしゃる なさる くださる.",
      items: [
        { id: "ja-u31l1-irassharu", type: "vocab", front: "いらっしゃる", reading: "irassharu", meaning: "to be / come / go (respectful)", example: { jp: "しゃちょうはいまいらっしゃいます。", en: "The president is here now." }, accept: ["to be (respectful)", "to come (respectful)", "to go (respectful)"], hint: "尊敬語 — RAISES the other person. One respectful verb covers いる・来る・行く. You'll hear いらっしゃいませ (welcome) from this." },
        { id: "ja-u31l1-meshiagaru", type: "vocab", front: "めしあがる", reading: "meshiagaru", meaning: "to eat / drink (respectful)", example: { jp: "せんせいがコーヒーをめしあがります。", en: "The teacher is having a coffee." }, accept: ["to eat (respectful)", "to drink (respectful)"], hint: "尊敬語 for たべる・のむ — the guest/customer eats. Lower yourself with いただく (next lesson)." },
        { id: "ja-u31l1-goranninaru", type: "vocab", front: "ごらんになる", reading: "goranninaru", meaning: "to see / look (respectful)", example: { jp: "こちらをごらんになりますか。", en: "Would you like to look at this?" }, accept: ["to look (respectful)", "to watch (respectful)"], hint: "尊敬語 for みる. ごらん = an honorific 'look'. Lower yourself with はいけんする." },
        { id: "ja-u31l1-ossharu", type: "vocab", front: "おっしゃる", reading: "ossharu", meaning: "to say (respectful)", example: { jp: "せんせいがそうおっしゃいました。", en: "The teacher said so." }, accept: ["to speak (respectful)", "to tell (respectful)"], hint: "尊敬語 for いう. Lower yourself with もうす (next lesson)." },
        { id: "ja-u31l1-nasaru", type: "vocab", front: "なさる", reading: "nasaru", meaning: "to do (respectful)", example: { jp: "なにをなさいますか。", en: "What will you have (do)?" }, accept: ["to do (respectful)"], hint: "尊敬語 for する. Lower yourself with いたす (next lesson)." },
        { id: "ja-u31l1-kudasaru", type: "vocab", front: "くださる", reading: "kudasaru", meaning: "to give (to me, respectful)", example: { jp: "せんせいがほんをくださいます。", en: "The teacher gives me a book." }, accept: ["to give me (respectful)"], hint: "尊敬語 for くれる — someone above you gives TO you. The ください you know is its request form." },
      ],
    },
    {
      id: "ja-u31l2", unit: 31, lesson: 2, title: "Humble (謙譲語)", cefr: "B1", dominantMode: "recognize",
      canDo: "Recognise humble verbs for your own actions: まいる いたす もうす いただく はいけんする うかがう.",
      items: [
        { id: "ja-u31l2-mairu", type: "vocab", front: "まいる", reading: "mairu", meaning: "to come / go (humble)", example: { jp: "あしたまいります。", en: "I will come tomorrow." }, accept: ["to come (humble)", "to go (humble)"], hint: "謙譲語 — LOWERS yourself for 来る・行く. Pair with the respectful いらっしゃる." },
        { id: "ja-u31l2-itasu", type: "vocab", front: "いたす", reading: "itasu", meaning: "to do (humble)", example: { jp: "わたしがいたします。", en: "I'll do it." }, accept: ["to do (humble)"], hint: "謙譲語 for する — your own action. Pair with the respectful なさる. おねがいいたします uses this." },
        { id: "ja-u31l2-mosu", type: "vocab", front: "もうす", reading: "mōsu", meaning: "to say / be called (humble)", example: { jp: "たなかともうします。", en: "I'm called Tanaka." }, accept: ["to be called (humble)", "to say (humble)"], hint: "謙譲語 for いう — introduce yourself: 〜ともうします. Pair with the respectful おっしゃる." },
        { id: "ja-u31l2-itadaku", type: "vocab", front: "いただく", reading: "itadaku", meaning: "to eat / receive (humble)", example: { jp: "コーヒーをいただきます。", en: "I'll have a coffee." }, accept: ["to receive (humble)", "to eat (humble)", "to drink (humble)"], hint: "謙譲語 for たべる・のむ・もらう — you receive. The いただきます before a meal is exactly this." },
        { id: "ja-u31l2-haikensuru", type: "vocab", front: "はいけんする", reading: "haikensuru", meaning: "to see / look (humble)", example: { jp: "ほんをはいけんします。", en: "I'll take a look at the book." }, accept: ["to look (humble)", "to view (humble)"], hint: "謙譲語 for みる — you humbly look at something of theirs. Pair with the respectful ごらんになる." },
        { id: "ja-u31l2-ukagau", type: "vocab", front: "うかがう", reading: "ukagau", meaning: "to ask / visit (humble)", example: { jp: "あとでうかがいます。", en: "I'll visit (you) later." }, accept: ["to visit (humble)", "to ask (humble)", "to inquire (humble)"], hint: "謙譲語 for きく・たずねる・訪ねる — you humbly ask or call on someone above you." },
      ],
    },
    {
      id: "ja-u31l3", unit: 31, lesson: 3, title: "Polite expressions (ていねい)", cefr: "B1", dominantMode: "recognize",
      canDo: "Use service-desk politeness: ございます かしこまる しつれい おそれいる もうしわけない よろしい.",
      items: [
        { id: "ja-u31l3-gozaimasu", type: "vocab", front: "ございます", reading: "gozaimasu", meaning: "there is / to be (very polite)", example: { jp: "でぐちはこちらにございます。", en: "The exit is right this way." }, accept: ["to be (polite)", "to have (polite)"], hint: "The very-polite です／あります you hear in shops. ありがとうございます is the same ございます." },
        { id: "ja-u31l3-kashikomaru", type: "vocab", front: "かしこまる", reading: "kashikomaru", meaning: "to understand (respectfully)", example: { jp: "かしこまりました。", en: "Certainly (understood)." }, accept: ["certainly", "understood (polite)"], hint: "Almost always heard as かしこまりました — a staff member's 'certainly, right away'. Politer than わかりました." },
        { id: "ja-u31l3-shitsurei", type: "vocab", front: "しつれい", reading: "shitsurei", meaning: "rudeness / excuse me", example: { jp: "しつれいします。", en: "Excuse me (as I enter/leave)." }, accept: ["impoliteness", "pardon me"], hint: "'A rudeness' — しつれいします softens entering a room, leaving, or hanging up the phone." },
        { id: "ja-u31l3-osoreiru", type: "vocab", front: "おそれいる", reading: "osoreiru", meaning: "to be much obliged / sorry to trouble you", example: { jp: "おそれいりますが、みぎです。", en: "Excuse me (sorry to trouble you), it's on the right." }, accept: ["excuse me", "I'm much obliged"], hint: "おそれいりますが… prefaces a polite request or a bit of bad news — softer and humbler than すみません." },
        { id: "ja-u31l3-moshiwakenai", type: "vocab", front: "もうしわけない", reading: "mōshiwakenai", meaning: "terribly sorry (inexcusable)", example: { jp: "もうしわけありません。", en: "I'm terribly sorry." }, accept: ["I'm very sorry", "my apologies"], hint: "Literally 'there's no excuse' — the formal apology, stronger than ごめんなさい. Heard as もうしわけありません／ございません." },
        { id: "ja-u31l3-yoroshii", type: "vocab", front: "よろしい", reading: "yoroshii", meaning: "good / all right (polite)", example: { jp: "こちらでよろしいですか。", en: "Is this one all right?" }, accept: ["fine (polite)", "acceptable", "okay (polite)"], hint: "The polite いい／だいじょうぶ. よろしいですか = 'is this acceptable?'. よろしくおねがいします shares this word." },
      ],
    },
  ],
};
