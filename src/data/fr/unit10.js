// FR Unit 10 — Parler français ("Speaking French") — A1
// The meta-toolkit that makes every real conversation survivable: language
// words, slow-down/repeat requests, the question machinery (pourquoi / parce
// que / quel), and the warm sign-offs. Conventions: see fr/unit1.js.
export const FR_UNIT10 = {
  id: "fr-u10",
  lang: "fr",
  title: "Parler français",
  order: 10,
  stage: "a1",
  lessons: [
    {
      id: "fr-u10l1",
      unit: 10,
      lesson: 1,
      title: "In French, please",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Manage the conversation: le français, l'anglais — lentement, encore, bien sûr, je ne sais pas.",
      items: [
        { id: "fr-u10l1-lefrancais", type: "vocab", front: "le français", reading: "lefrancais", meaning: "French", example: { jp: "Je parle un peu français.", en: "I speak a little French." }, accept: ["french", "the french language"], hint: "The language is lowercase: le français. Capital-F Français is a French person." },
        { id: "fr-u10l1-langlais", type: "vocab", front: "l'anglais", reading: "langlais", meaning: "English", example: { jp: "Tu parles anglais, non ?", en: "You speak English, right?" }, accept: ["english", "the english language"] },
        { id: "fr-u10l1-lentement", type: "vocab", front: "lentement", reading: "lentement", meaning: "slowly", example: { jp: "Lentement, s'il vous plaît !", en: "Slowly, please!" }, accept: ["slow"] },
        { id: "fr-u10l1-encore", type: "vocab", front: "encore", reading: "encore", meaning: "again", example: { jp: "Encore, s'il vous plaît — lentement !", en: "Again, please — slowly!" }, accept: ["more", "once more", "still"] },
        { id: "fr-u10l1-biensur", type: "vocab", front: "bien sûr", reading: "biensur", meaning: "of course", example: { jp: "Bien sûr, madame !", en: "Of course, ma'am!" }, accept: ["sure", "certainly"] },
        { id: "fr-u10l1-jenesaispas", type: "vocab", front: "je ne sais pas", reading: "jenesaispas", meaning: "I don't know", example: { jp: "Je ne sais pas… peut-être !", en: "I don't know… maybe!" }, accept: ["i do not know", "no idea", "dunno"], hint: "peut-être = maybe. Spoken fast this whole phrase shrinks to \"chais pas\" — you'll hear it everywhere." },
      ],
    },
    {
      id: "fr-u10l2",
      unit: 10,
      lesson: 2,
      title: "What? Why?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask the big ones: qu'est-ce que c'est, pourquoi, parce que, quel, quelle, quoi.",
      items: [
        { id: "fr-u10l2-questcequecest", type: "vocab", front: "qu'est-ce que c'est", reading: "questcequecest", meaning: "what is it", example: { jp: "Qu'est-ce que c'est ? — C'est un croissant.", en: "What is it? — It's a croissant." }, accept: ["what is this", "what is that", "what's that", "what's this"], hint: "Looks terrifying, sounds simple: \"kess-kuh-say\". One memorized chunk = every what-question." },
        { id: "fr-u10l2-pourquoi", type: "vocab", front: "pourquoi", reading: "pourquoi", meaning: "why", example: { jp: "Pourquoi ? — Parce que !", en: "Why? — Because!" }, accept: [] },
        { id: "fr-u10l2-parceque", type: "vocab", front: "parce que", reading: "parceque", meaning: "because", example: { jp: "Parce que c'est bon !", en: "Because it's good!" }, accept: [] },
        { id: "fr-u10l2-quel", type: "vocab", front: "quel", reading: "quel", meaning: "which (masculine)", example: { jp: "Quel jour ? Lundi ?", en: "Which day? Monday?" }, accept: ["which", "what"] },
        { id: "fr-u10l2-quelle", type: "vocab", front: "quelle", reading: "quelle", meaning: "which (feminine)", example: { jp: "Quelle heure ? — Non, je ne sais pas.", en: "What time? — No, I don't know." }, accept: ["which", "what"], hint: "quel jour but quelle heure — same sound, the agreement only shows in writing." },
        { id: "fr-u10l2-quoi", type: "vocab", front: "quoi", reading: "quoi", meaning: "what", example: { jp: "Quoi ? Pardon ?", en: "What? Sorry?" }, accept: [], hint: "Blurted \"Quoi ?\" is casual — with strangers, soften to Comment ? or Pardon ?" },
      ],
    },
    {
      id: "fr-u10l3",
      unit: 10,
      lesson: 3,
      title: "Warm goodbyes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Part like a local: à bientôt, bonne nuit, bonne journée, bienvenue, enchanté, santé !",
      items: [
        { id: "fr-u10l3-abientot", type: "vocab", front: "à bientôt", reading: "abientot", meaning: "see you soon", example: { jp: "Au revoir, à bientôt !", en: "Goodbye, see you soon!" }, accept: ["see you", "until soon"] },
        { id: "fr-u10l3-bonnenuit", type: "vocab", front: "bonne nuit", reading: "bonnenuit", meaning: "good night", example: { jp: "Bonne nuit, Marie. À demain !", en: "Good night, Marie. See you tomorrow!" }, accept: ["goodnight"], hint: "Only for actual bedtime — the evening hello stays bonsoir." },
        { id: "fr-u10l3-bonnejournee", type: "vocab", front: "bonne journée", reading: "bonnejournee", meaning: "have a good day", example: { jp: "Merci, au revoir — bonne journée !", en: "Thanks, goodbye — have a good day!" }, accept: ["good day", "have a nice day"], hint: "le jour = the day itself; la journée = the day as you live it. Wishes use journée." },
        { id: "fr-u10l3-bienvenue", type: "vocab", front: "bienvenue", reading: "bienvenue", meaning: "welcome", example: { jp: "Bienvenue à Paris !", en: "Welcome to Paris!" }, accept: [] },
        { id: "fr-u10l3-enchante", type: "vocab", front: "enchanté", reading: "enchante", meaning: "nice to meet you", example: { jp: "Je m'appelle Paul — enchanté !", en: "My name is Paul — nice to meet you!" }, accept: ["pleased to meet you", "delighted"], hint: "Literally \"enchanted\" — say it while shaking hands. Women write enchantée." },
        { id: "fr-u10l3-sante", type: "vocab", front: "santé", reading: "sante", meaning: "cheers", example: { jp: "Le vin est là — santé !", en: "The wine is here — cheers!" }, accept: ["health", "to your health"], hint: "Short for à votre santé — \"to your health\". Glasses up." },
      ],
    },
  ],
};
