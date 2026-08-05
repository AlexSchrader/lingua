// FR Unit 48 — Dire et demander ("Saying and asking") — A2
// Strand D, coverage unit 2 of 11 (block 3). The slot is a generic "Vocabulary 2
// (A2)" frequency pass; each coverage unit here is given a real theme so the four
// lessons cohere — DEVIATION FROM THE SLOT NAME ONLY, the slot number is kept.
//
// Block-3 authoring rule: the coverage units take the high-frequency WORD CLASSES
// that cut across topics (speech, thought, quantity, space, objects, change,
// transfer, evaluation, adverbs, indefinites), never the topical domains blocks 1
// and 2 own (u28-u47). Every example draws on the shipped A1 corpus (fr u1-u27)
// and, where a later unit needs it, on EARLIER block-3 units — never on a later one.
// Verified mechanically: 0 backward references across all 240 items. Blocks 1-2 were
// locked stubs while this was written, so nothing here references them at all.
// Two deliberate exemptions, both allowed by the fr conventions: `transport` in
// u57l3 is a transparent cognate (letter-identical to English), and a handful of
// third-person forms of verbs A1 taught only as `je` chunks (veut, peut, va + inf)
// appear where the sentence needs them — each one is called out in its item's hint
// rather than left to be inferred.
//
// Conventions are fr/unit1.js: `front` is real orthography, `reading` its ASCII
// fold, `example.jp` holds the FRENCH sentence, nouns are taught with their article.
// New verbs are taught as INFINITIVES and shown inside the frames A1 already
// teaches (je vais / je veux / je peux + infinitive, C'est difficile à + infinitive),
// so the headword lands literally in its own example and untaught conjugation stays
// rare and hinted rather than silent (see the exemptions above).
export const FR_UNIT48 = {
  id: "fr-u48",
  lang: "fr",
  title: "Dire et demander",
  order: 48,
  stage: "a2",
  lessons: [
    {
      id: "fr-u48l1",
      unit: 48,
      lesson: 1,
      title: "Saying and answering",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say, ask, answer and explain — and name the question and the answer you are talking about.",
      items: [
        { id: "fr-u48l1-dire", type: "vocab", front: "dire", reading: "dire", meaning: "to say", example: { jp: "Je vais dire non.", en: "I'm going to say no." }, accept: ["say", "state"], hint: "dire is saying WORDS; raconter (lesson 2) is telling a story. Careful too: « je veux dire » on its own is not \"I want to say\" — it means \"I mean\", the pair taught in lesson 4." },
        { id: "fr-u48l1-demander", type: "vocab", front: "demander", reading: "demander", meaning: "to ask", example: { jp: "Je veux demander le prix.", en: "I want to ask the price." }, accept: ["ask", "to ask for", "ask for", "request"], hint: "Never « demander pour » — French asks a thing directly: demander le prix." },
        { id: "fr-u48l1-repondre", type: "vocab", front: "répondre", reading: "repondre", meaning: "to reply", example: { jp: "Je vais répondre à Marie.", en: "I'm going to reply to Marie." }, accept: ["answer", "to answer", "respond", "write back"], hint: "You reply TO someone: répondre à Marie. The noun is la réponse, later in this lesson." },
        { id: "fr-u48l1-expliquer", type: "vocab", front: "expliquer", reading: "expliquer", meaning: "to explain", example: { jp: "C'est difficile à expliquer.", en: "It's difficult to explain." }, accept: ["explain"] },
        { id: "fr-u48l1-laquestion", type: "vocab", front: "la question", reading: "laquestion", meaning: "question", example: { jp: "J'ai une question.", en: "I have a question." }, accept: ["the question", "query"] },
        { id: "fr-u48l1-lareponse", type: "vocab", front: "la réponse", reading: "lareponse", meaning: "answer", example: { jp: "La réponse est facile.", en: "The answer is easy." }, accept: ["the answer", "reply", "response"] },
      ],
    },
    {
      id: "fr-u48l2",
      unit: 48,
      lesson: 2,
      title: "Keeping a conversation going",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Keep a conversation going: tell someone about something, call them, repeat, and add a word.",
      items: [
        { id: "fr-u48l2-raconter", type: "vocab", front: "raconter", reading: "raconter", meaning: "to tell", example: { jp: "Je vais raconter mon voyage.", en: "I'm going to tell you about my trip." }, accept: ["recount", "to recount", "tell about", "narrate"], hint: "raconter is telling a story or an event; dire is saying words. You raconte a trip, you dis « non »." },
        { id: "fr-u48l2-appeler", type: "vocab", front: "appeler", reading: "appeler", meaning: "to call", example: { jp: "Je vais appeler le médecin.", en: "I'm going to call the doctor." }, accept: ["call", "to phone", "phone", "call up"] },
        { id: "fr-u48l2-repeter", type: "vocab", front: "répéter", reading: "repeter", meaning: "to repeat", example: { jp: "Je peux répéter lentement.", en: "I can repeat slowly." }, accept: ["repeat", "say again"] },
        { id: "fr-u48l2-ajouter", type: "vocab", front: "ajouter", reading: "ajouter", meaning: "to add", example: { jp: "Je veux ajouter du sucre.", en: "I want to add some sugar." }, accept: ["add", "to put in"] },
        { id: "fr-u48l2-lemot", type: "vocab", front: "le mot", reading: "lemot", meaning: "word", example: { jp: "Ce mot est difficile.", en: "This word is difficult." }, accept: ["the word"] },
        { id: "fr-u48l2-laphrase", type: "vocab", front: "la phrase", reading: "laphrase", meaning: "sentence", example: { jp: "La phrase est longue.", en: "The sentence is long." }, accept: ["the sentence", "phrase", "the phrase"], hint: "False friend: une phrase is a whole SENTENCE, not an English \"phrase\"." },
      ],
    },
    {
      id: "fr-u48l3",
      unit: 48,
      lesson: 3,
      title: "Offering and thanking",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle an invitation from both sides: suggest something, invite someone, accept or refuse, thank or apologize.",
      items: [
        { id: "fr-u48l3-proposer", type: "vocab", front: "proposer", reading: "proposer", meaning: "to suggest", example: { jp: "Je vais proposer un café.", en: "I'm going to suggest a coffee." }, accept: ["suggest", "to offer", "offer", "propose"] },
        { id: "fr-u48l3-inviter", type: "vocab", front: "inviter", reading: "inviter", meaning: "to invite", example: { jp: "Je veux inviter mes parents.", en: "I want to invite my parents." }, accept: ["invite", "ask over"] },
        { id: "fr-u48l3-accepter", type: "vocab", front: "accepter", reading: "accepter", meaning: "to accept", example: { jp: "Je vais accepter.", en: "I'm going to accept." }, accept: ["accept", "say yes", "agree"] },
        { id: "fr-u48l3-refuser", type: "vocab", front: "refuser", reading: "refuser", meaning: "to refuse", example: { jp: "Je ne veux pas refuser.", en: "I don't want to refuse." }, accept: ["refuse", "turn down", "say no", "decline"] },
        { id: "fr-u48l3-remercier", type: "vocab", front: "remercier", reading: "remercier", meaning: "to thank", example: { jp: "Je vais remercier le professeur.", en: "I'm going to thank the teacher." }, accept: ["thank", "say thank you"], hint: "The verb behind merci — you remercie a person, never a thing." },
        { id: "fr-u48l3-sexcuser", type: "vocab", front: "s'excuser", reading: "sexcuser", meaning: "to apologize", example: { jp: "Je vais m'excuser.", en: "I'm going to apologize." }, accept: ["apologise", "say sorry", "excuse oneself"], hint: "A reflexive verb like je me lève: the s' becomes m' with je — je m'excuse." },
      ],
    },
    {
      id: "fr-u48l4",
      unit: 48,
      lesson: 4,
      title: "What it means",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about language itself: name a language, say what a word means, translate it and pronounce it.",
      items: [
        { id: "fr-u48l4-lalangue", type: "vocab", front: "la langue", reading: "lalangue", meaning: "language", example: { jp: "Le français est une belle langue.", en: "French is a beautiful language." }, accept: ["the language", "tongue"], hint: "Same word as the tongue in your mouth — the organ gave its name to the language." },
        { id: "fr-u48l4-traduire", type: "vocab", front: "traduire", reading: "traduire", meaning: "to translate", example: { jp: "Je vais traduire ce mot.", en: "I'm going to translate this word." }, accept: ["translate"] },
        { id: "fr-u48l4-vouloirdire", type: "vocab", front: "vouloir dire", reading: "vouloirdire", meaning: "to stand for", example: { jp: "Ce mot veut dire « maison ».", en: "This word means \"house\"." }, accept: ["mean", "to mean", "signify"], hint: "Literally \"to want to say\". In a sentence it conjugates — veut is the il/elle form of vouloir: ça veut dire = that means." },
        { id: "fr-u48l4-lesens", type: "vocab", front: "le sens", reading: "lesens", meaning: "meaning", example: { jp: "Je ne comprends pas le sens.", en: "I don't understand the meaning." }, accept: ["the meaning", "sense", "the sense"] },
        { id: "fr-u48l4-lalettre", type: "vocab", front: "la lettre", reading: "lalettre", meaning: "letter", example: { jp: "Il y a six lettres dans « maison ».", en: "There are six letters in \"maison\"." }, accept: ["the letter"], hint: "Both letters: the a-b-c kind and the one you put in the post." },
        { id: "fr-u48l4-prononcer", type: "vocab", front: "prononcer", reading: "prononcer", meaning: "to pronounce", example: { jp: "C'est difficile à prononcer.", en: "It's difficult to pronounce." }, accept: ["pronounce", "say out loud"] },
      ],
    },
  ],
};
