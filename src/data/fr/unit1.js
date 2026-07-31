// FR Unit 1 — Salutations ("Greetings") — A1
// First contact with French: hello/goodbye, the politeness set, and the ça-va
// exchange. AUTHORING CONVENTIONS FOR FRENCH (all fr units):
//   - `front` is real orthography (accents, apostrophes, spaces); `reading` is
//     its ASCII fold (contract requires [a-z]+) — the answer checker folds typed
//     accents back to it, so learners may type either form.
//   - `example.jp` holds the FRENCH sentence (the field name is historical —
//     "jp" = target language); `example.en` the English gloss.
//   - Examples stay inside taught vocab + proper names + transparent cognates
//     (café, pizza, taxi, Paris); the en gloss always carries the meaning.
//   - Nouns are taught WITH their article (le/la/l'/les) so gender is learned
//     as part of the word, never as an afterthought.
// lang/unit/lesson are stamped in index.js.
export const FR_UNIT1 = {
  id: "fr-u1",
  lang: "fr",
  title: "Salutations",
  order: 1,
  stage: "a1",
  lessons: [
    {
      id: "fr-u1l1",
      unit: 1,
      lesson: 1,
      title: "Hello and goodbye",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet people and part ways: bonjour, salut, bonsoir, au revoir — plus oui, non and merci.",
      items: [
        { id: "fr-u1l1-bonjour", type: "vocab", front: "bonjour", reading: "bonjour", meaning: "hello", example: { jp: "Bonjour, Marie !", en: "Hello, Marie!" }, accept: ["good morning", "good day", "hi"], hint: "Literally \"good day\" — the all-purpose daytime hello." },
        { id: "fr-u1l1-salut", type: "vocab", front: "salut", reading: "salut", meaning: "hi", example: { jp: "Salut, Paul ! Ça va ?", en: "Hi, Paul! How's it going?" }, accept: ["hey", "hi there", "bye"], hint: "Casual — friends only. It works for both \"hi\" and \"bye\"." },
        { id: "fr-u1l1-bonsoir", type: "vocab", front: "bonsoir", reading: "bonsoir", meaning: "good evening", example: { jp: "Bonsoir, Marie.", en: "Good evening, Marie." }, accept: ["evening", "good evening!"] },
        { id: "fr-u1l1-aurevoir", type: "vocab", front: "au revoir", reading: "aurevoir", meaning: "goodbye", example: { jp: "Au revoir, Paul !", en: "Goodbye, Paul!" }, accept: ["bye", "see you"] },
        { id: "fr-u1l1-merci", type: "vocab", front: "merci", reading: "merci", meaning: "thank you", example: { jp: "Merci, Marie !", en: "Thank you, Marie!" }, accept: ["thanks"] },
        { id: "fr-u1l1-oui", type: "vocab", front: "oui", reading: "oui", meaning: "yes", example: { jp: "Oui, merci.", en: "Yes, thank you." }, accept: ["yeah", "yep"] },
        { id: "fr-u1l1-non", type: "vocab", front: "non", reading: "non", meaning: "no", example: { jp: "Non, merci.", en: "No, thank you." }, accept: ["nope"] },
      ],
    },
    {
      id: "fr-u1l2",
      unit: 1,
      lesson: 2,
      title: "Being polite",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask politely and apologize: s'il vous plaît, pardon, excusez-moi — and address monsieur / madame.",
      items: [
        { id: "fr-u1l2-silvousplait", type: "vocab", front: "s'il vous plaît", reading: "silvousplait", meaning: "please", example: { jp: "Un café, s'il vous plaît.", en: "A coffee, please." }, accept: ["please (polite)", "if you please"], hint: "Literally \"if it pleases you\" — the polite please. Typing silvousplait works; accents and apostrophes are optional." },
        { id: "fr-u1l2-pardon", type: "vocab", front: "pardon", reading: "pardon", meaning: "sorry", example: { jp: "Pardon, madame !", en: "Sorry, ma'am!" }, accept: ["excuse me", "pardon me", "pardon"] },
        { id: "fr-u1l2-excusezmoi", type: "vocab", front: "excusez-moi", reading: "excusezmoi", meaning: "excuse me", example: { jp: "Excusez-moi, monsieur !", en: "Excuse me, sir!" }, accept: ["sorry", "excuse me (polite)"] },
        { id: "fr-u1l2-monsieur", type: "vocab", front: "monsieur", reading: "monsieur", meaning: "sir", example: { jp: "Bonjour, monsieur.", en: "Hello, sir." }, accept: ["mister", "mr", "gentleman"] },
        { id: "fr-u1l2-madame", type: "vocab", front: "madame", reading: "madame", meaning: "ma'am", example: { jp: "Bonsoir, madame.", en: "Good evening, ma'am." }, accept: ["madam", "mrs", "lady"] },
        { id: "fr-u1l2-derien", type: "vocab", front: "de rien", reading: "derien", meaning: "you're welcome", example: { jp: "Merci ! — De rien.", en: "Thank you! — You're welcome." }, accept: ["it's nothing", "no problem"], hint: "Literally \"of nothing\" — the everyday reply to merci." },
      ],
    },
    {
      id: "fr-u1l3",
      unit: 1,
      lesson: 3,
      title: "How's it going?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Run the ça-va exchange: ça va ? — ça va bien, merci. Et toi… moi aussi.",
      items: [
        { id: "fr-u1l3-cava", type: "vocab", front: "ça va", reading: "cava", meaning: "how's it going / it's going fine", example: { jp: "Salut, Marie ! Ça va ?", en: "Hi, Marie! How's it going?" }, accept: ["how are you", "i'm fine", "it's going well", "are you ok"], hint: "Question AND answer: \"Ça va ?\" — \"Ça va !\" Same two words both ways." },
        { id: "fr-u1l3-bien", type: "vocab", front: "bien", reading: "bien", meaning: "well", example: { jp: "Ça va bien, merci.", en: "It's going well, thanks." }, accept: ["good", "fine"] },
        { id: "fr-u1l3-tres", type: "vocab", front: "très", reading: "tres", meaning: "very", example: { jp: "Très bien, merci !", en: "Very well, thank you!" }, accept: ["really", "very much"] },
        { id: "fr-u1l3-et", type: "vocab", front: "et", reading: "et", meaning: "and", example: { jp: "Paul et Marie.", en: "Paul and Marie." }, accept: [] },
        { id: "fr-u1l3-aussi", type: "vocab", front: "aussi", reading: "aussi", meaning: "also", example: { jp: "Moi aussi !", en: "Me too!" }, accept: ["too", "as well"] },
        { id: "fr-u1l3-moi", type: "vocab", front: "moi", reading: "moi", meaning: "me", example: { jp: "Et moi ? Moi aussi !", en: "And me? Me too!" }, accept: ["i", "myself"] },
      ],
    },
  ],
};
