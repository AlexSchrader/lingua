// FR Unit 10 — Parler français ("Speaking French") — A1
// The meta-toolkit that makes every real conversation survivable: language
// words, slow-down/repeat requests, the question machinery (pourquoi / parce
// que / quel), and the warm sign-offs. Conventions: see fr/unit1.js.
export const FR_UNIT11 = {
  id: "fr-u11",
  lang: "fr",
  title: "Parler français",
  order: 11,
  stage: "a1",
  lessons: [
    {
      id: "fr-u11l1",
      unit: 11,
      lesson: 1,
      title: "In French, please",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Manage the conversation: le français, l'anglais — lentement, encore, bien sûr, je ne sais pas.",
      items: [
        { id: "fr-u11l1-lefrancais", type: "vocab", front: "le français", reading: "lefrancais", meaning: "French", example: { jp: "Je parle un peu français.", en: "I speak a little French." }, drill: { jp: "Le français est une belle langue", en: "French is a beautiful language" }, accept: ["french", "the french language", "french (language)"], hint: "The language is lowercase: le français. Capital-F Français is a French person." },
        { id: "fr-u11l1-langlais", type: "vocab", front: "l'anglais", reading: "langlais", meaning: "English", example: { jp: "Tu parles anglais, non ?", en: "You speak English, right?" }, drill: { jp: "L'anglais est difficile pour moi", en: "English is difficult for me" }, accept: ["english", "the english language", "english (language)"], hint: "\"lon-GLEH\" — the final s is silent and ai is the open \"eh\". Lowercase for the language, like le français; capital-A un Anglais is an English person." },
        { id: "fr-u11l1-lentement", type: "vocab", front: "lentement", reading: "lentement", meaning: "slowly", example: { jp: "Lentement, s'il vous plaît !", en: "Slowly, please!" }, drill: { jp: "Je parle lentement en français", en: "I speak slowly in French" }, accept: ["slow", "at a slow pace", "not fast"], hint: "\"lont-MON\" — nasal at both ends, with the middle e swallowed. It is lent, slow, plus -ment, the ending that makes adverbs out of adjectives just like English -ly." },
        { id: "fr-u11l1-encore", type: "vocab", front: "encore", reading: "encore", meaning: "again", example: { jp: "Encore, s'il vous plaît — lentement !", en: "Again, please — slowly!" }, drill: { jp: "Je veux encore un café", en: "I want another coffee" }, accept: ["more", "once more", "still"], hint: "\"on-KOR\" — the first syllable is nasal and the final e is silent. It stretches a long way: again, more, and still — encore un café, il est encore là." },
        { id: "fr-u11l1-biensur", type: "vocab", front: "bien sûr", reading: "biensur", meaning: "of course", example: { jp: "Bien sûr, madame !", en: "Of course, ma'am!" }, drill: { jp: "Bien sûr je parle français", en: "Of course I speak French" }, accept: ["sure", "certainly", "obviously", "naturally"], hint: "\"byan SEWR\" — the tight French u under the hat, and the r is sounded. Literally \"well sure\". That hat separates sûr, certain, from sur, on top of." },
        { id: "fr-u11l1-jenesaispas", type: "vocab", front: "je ne sais pas", reading: "jenesaispas", meaning: "I don't know", example: { jp: "Pourquoi ? Je ne sais pas.", en: "Why? I don't know." }, drill: { jp: "Je ne sais pas pourquoi", en: "I don't know why" }, accept: ["i do not know", "no idea", "dunno"], hint: "Spoken fast this whole phrase shrinks to \"chais pas\" — you'll hear it everywhere." },
      ],
    },
    {
      id: "fr-u11l2",
      unit: 11,
      lesson: 2,
      title: "What? Why?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask the big ones: qu'est-ce que c'est, pourquoi, parce que, quel, quelle, quoi.",
      items: [
        { id: "fr-u11l2-questcequecest", type: "vocab", front: "qu'est-ce que c'est", reading: "questcequecest", meaning: "what is it", example: { jp: "Qu'est-ce que c'est ? — C'est un croissant.", en: "What is it? — It's a croissant." }, drill: { jp: "Alors qu'est-ce que c'est", en: "So what is it" }, accept: ["what is this", "what is that", "what's that", "what's this"], hint: "Looks terrifying, sounds simple: \"kess-kuh-say\". One memorized chunk = every what-question." },
        { id: "fr-u11l2-pourquoi", type: "vocab", front: "pourquoi", reading: "pourquoi", meaning: "why", example: { jp: "Pourquoi ? — Parce que !", en: "Why? — Because!" }, drill: { jp: "Pourquoi tu parles français", en: "Why do you speak French" }, accept: ["why?", "what for", "how come"], hint: "\"poor-KWAH\" — ou is \"oo\" and oi is \"wah\". It is pour + quoi, literally for what. Its answer is almost always parce que." },
        { id: "fr-u11l2-parceque", type: "vocab", front: "parce que", reading: "parceque", meaning: "because", example: { jp: "Parce que c'est bon !", en: "Because it's good!" }, drill: { jp: "Je suis ici parce que je travaille", en: "I'm here because I work" }, accept: ["since", "as", "seeing that"], hint: "\"pars kuh\" — two short words, and the que is barely a breath. It has to be followed by a whole clause: parce que c'est bon." },
        { id: "fr-u11l2-quel", type: "vocab", front: "quel", reading: "quel", meaning: "which (masculine)", example: { jp: "Quel jour ? Lundi ?", en: "Which day? Monday?" }, drill: { jp: "Quel est le prix", en: "What is the price" }, accept: ["which", "what", "which one (m)"], hint: "\"kel\" — qu is a hard k and the final l sounds. It picks one out of a set and must match the noun: quel jour, but quelle heure." },
        { id: "fr-u11l2-quelle", type: "vocab", front: "quelle", reading: "quelle", meaning: "which (feminine)", example: { jp: "Quelle heure ? — Non, je ne sais pas.", en: "What time? — No, I don't know." }, drill: { jp: "Quelle est la date", en: "What is the date" }, accept: ["which", "what", "which one (f)"], hint: "quel jour but quelle heure — same sound, the agreement only shows in writing." },
        { id: "fr-u11l2-quoi", type: "vocab", front: "quoi", reading: "quoi", meaning: "what", example: { jp: "Quoi ? Pardon ?", en: "What? Sorry?" }, drill: { jp: "C'est quoi ce livre", en: "What's this book" }, accept: ["what", "what?", "huh"], hint: "Blurted \"Quoi ?\" is casual — with strangers, soften to Comment ? or Pardon ?" },
      ],
    },
    {
      id: "fr-u11l3",
      unit: 11,
      lesson: 3,
      title: "Warm goodbyes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Part like a local: à bientôt, bonne nuit, bonne journée, bienvenue, enchanté, santé !",
      items: [
        { id: "fr-u11l3-abientot", type: "vocab", front: "à bientôt", reading: "abientot", meaning: "see you soon", example: { jp: "Au revoir, à bientôt !", en: "Goodbye, see you soon!" }, drill: { jp: "À bientôt et bonne journée", en: "See you soon and have a good day" }, accept: ["see you", "until soon", "see you soon!", "talk soon"], hint: "\"a byan-TOH\" — bien is nasal and the ô is a plain \"oh\" with a silent t after it. Literally until soon: the warm, open-ended goodbye." },
        { id: "fr-u11l3-bonnenuit", type: "vocab", front: "bonne nuit", reading: "bonnenuit", meaning: "good night", example: { jp: "Bonne nuit, Marie. À demain !", en: "Good night, Marie. See you tomorrow!" }, drill: { jp: "Bonne nuit et à demain", en: "Good night and see you tomorrow" }, accept: ["goodnight", "good night!", "sleep well"], hint: "Only for actual bedtime — the evening hello stays bonsoir." },
        { id: "fr-u11l3-bonnejournee", type: "vocab", front: "bonne journée", reading: "bonnejournee", meaning: "have a good day", example: { jp: "Merci, au revoir — bonne journée !", en: "Thanks, goodbye — have a good day!" }, drill: { jp: "Bonne journée madame", en: "Have a good day madam" }, accept: ["good day", "have a nice day", "have a good one"], hint: "le jour = the day itself; la journée = the day as you live it. Wishes use journée." },
        { id: "fr-u11l3-bienvenue", type: "vocab", front: "bienvenue", reading: "bienvenue", meaning: "welcome", example: { jp: "Bienvenue à Paris !", en: "Welcome to Paris!" }, drill: { jp: "Bienvenue à Paris madame", en: "Welcome to Paris madam" }, accept: ["welcome", "welcome!", "welcome here"], hint: "\"byan-vuh-NEW\" — the ending is the tight French u. It is bien + venue, well come, built exactly like the English word. Bienvenue à Paris !" },
        { id: "fr-u11l3-enchante", type: "vocab", front: "enchanté", reading: "enchante", meaning: "nice to meet you", example: { jp: "Je m'appelle Paul — enchanté !", en: "My name is Paul — nice to meet you!" }, drill: { jp: "Enchanté je m'appelle Paul", en: "Nice to meet you my name is Paul" }, accept: ["pleased to meet you", "delighted", "nice to meet you!", "a pleasure"], hint: "Literally \"enchanted\" — say it while shaking hands. Women write enchantée." },
        { id: "fr-u11l3-sante", type: "vocab", front: "santé", reading: "sante", meaning: "cheers", example: { jp: "Le vin est là — santé !", en: "The wine is here — cheers!" }, drill: { jp: "Santé et bonne soirée", en: "Cheers and have a good evening" }, accept: ["health", "to your health", "cheers!", "bottoms up"], hint: "Short for à votre santé — \"to your health\". Glasses up." },
      ],
    },
  ],
};
