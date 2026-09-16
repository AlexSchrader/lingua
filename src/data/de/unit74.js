// DE Unit 74 — Sprache und Ausdruck (slot: vocabulary 1 (B1)) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// THEME CHOSEN FOR THIS COVERAGE SLOT, and why this one. The scaffold slot is an
// open "Vocabulary 1 (B1)", so the theme is the author's to pick. Checked against
// block 1's twelve slots (opinion, cause, comparison, hedging, news, work, emotion,
// abstract ideas, change, problems, rules, plans) and against every A1/A2 unit:
// nothing anywhere in German owns the words for LANGUAGE ITSELF. That is an odd
// hole in a language course — a B1 learner is expected to say "I misunderstood
// you", "what does that word mean", "that is just an expression", and had no word
// for any of it. ⚠️ Block 3 (u76-u87) is NOT a row of open "Vocabulary N" slots -
// it authored real themes and committed before this block did. This unit collides
// with none of them, but the BLOCK does: 72 of its 312 fronts collide (46 with
// block 1, 26 with block 3). Full list in the hand-back; resolving it is the crew
// lead's job, per RUNBOOK §6 step 3.
// NOT taken, each being one lexeme with a taught front: die Sprache (u1), das
// Wort (u3), der Satz (u29), sprechen (u3), verstehen (u12), die Pruefung (u24).
// Pairs inside the unit: only die Betonung (not betonen), only der Buchstabe (not
// buchstabieren), only missverstehen (not das Missverstaendnis) is carded.
// FREE: Anna, Thomas, Lena, Max, Berlin, Deutschland, Deutsch, Kinder, Jahre, Wörter, Sprachen, sein
export const DE_UNIT74 = {
  id: "de-u74",
  lang: "de",
  title: "Sprache und Ausdruck",
  order: 74,
  stage: "b1",
  lessons: [
    {
      id: "de-u74l1",
      unit: 74,
      lesson: 1,
      title: "Wie es klingt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how a language sounds: pronunciation, an accent, the stress, a syllable, a letter, fluently.",
      items: [
        { id: "de-u74l1-dieaussprache", type: "vocab", front: "die Aussprache", reading: "dieaussprache", meaning: "the pronunciation", example: { jp: "Die Aussprache von ch ist für viele am Anfang sehr schwer.", en: "The pronunciation of ch is very hard for many people at the start." }, drill: { jp: "Die Aussprache ist hier sehr schwer", en: "The pronunciation here is very hard" }, accept: ["pronunciation", "the pronunciation"], hint: "aus + Sprache. Also a frank talk: eine Aussprache haben." },
        { id: "de-u74l1-derakzent", type: "vocab", front: "der Akzent", reading: "derakzent", meaning: "the accent", example: { jp: "Nach zehn Jahren in Berlin hat sie noch einen kleinen Akzent.", en: "After ten years in Berlin she still has a slight accent." }, drill: { jp: "Der Akzent ist noch sehr stark", en: "The accent is still very strong" }, accept: ["accent", "the accent", "the stress mark"], hint: "Stress the end: ak-TSENT. Both the foreign sound and the written mark." },
        { id: "de-u74l1-diebetonung", type: "vocab", front: "die Betonung", reading: "diebetonung", meaning: "the stress", example: { jp: "Bei dem Wort liegt die Betonung ganz am Ende.", en: "In the word the stress falls right at the end." }, drill: { jp: "Die Betonung liegt am Ende", en: "The stress falls at the end" }, accept: ["stress", "the stress", "the emphasis", "the intonation"], hint: "From betonen, to stress. Which syllable you hit, not which sound you make." },
        { id: "de-u74l1-diesilbe", type: "vocab", front: "die Silbe", reading: "diesilbe", meaning: "the syllable", example: { jp: "Das Wort Gedächtnis hat drei Silben und keine ist lang.", en: "The word Gedächtnis has three syllables and none of them is long." }, drill: { jp: "Die Silbe am Ende ist kurz", en: "The syllable at the end is short" }, accept: ["syllable", "the syllable"], hint: "Two syllables itself: SIL-be. Plural: die Silben." },
        { id: "de-u74l1-derbuchstabe", type: "vocab", front: "der Buchstabe", reading: "derbuchstabe", meaning: "the letter", example: { jp: "Der Buchstabe ß kommt nie am Anfang von einem Wort.", en: "The letter ß never comes at the beginning of a word." }, drill: { jp: "Der Buchstabe ist sehr wichtig", en: "The letter is very important" }, accept: ["letter", "the letter", "the character"], hint: "Weak noun: den Buchstaben. The verb is buchstabieren, to spell out." },
        { id: "de-u74l1-fliessend", type: "vocab", front: "fließend", reading: "fliessend", meaning: "fluently", example: { jp: "Nach vier Jahren in Hamburg spricht er fließend Deutsch.", en: "After four years in Hamburg he speaks German fluently." }, drill: { jp: "Sie spricht fließend Deutsch", en: "She speaks German fluently" }, accept: ["fluently", "fluent", "flowing"], hint: "From fließen, to flow. ß, so the reading is written with ss." },
      ],
    },
    {
      id: "de-u74l2",
      unit: 74,
      lesson: 2,
      title: "Wörter und Bedeutung",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about words as things: a term, an expression, the meaning, a foreign word, an abbreviation, a vocabulary.",
      items: [
        { id: "de-u74l2-derausdruck", type: "vocab", front: "der Ausdruck", reading: "derausdruck", meaning: "the expression", example: { jp: "Der Ausdruck ist alt, aber man hört ihn auf dem Markt noch.", en: "The expression is old, but you still hear it at the market." }, drill: { jp: "Der Ausdruck ist sehr alt", en: "The expression is very old" }, accept: ["expression", "the expression", "the phrase", "the term"], hint: "Not der Eindruck (u63), the impression. aus- pushes out, ein- presses in." },
        { id: "de-u74l2-diebedeutung", type: "vocab", front: "die Bedeutung", reading: "diebedeutung", meaning: "the meaning", example: { jp: "Das kleine Wort hat in einem Gesetz eine große Bedeutung.", en: "The little word has a big significance in a law." }, drill: { jp: "Die Bedeutung vom Wort ist neu", en: "The meaning of the word is new" }, accept: ["meaning", "the meaning", "the significance", "the importance"], hint: "Two senses in one word: what it means, and how much it matters." },
        { id: "de-u74l2-dasfremdwort", type: "vocab", front: "das Fremdwort", reading: "dasfremdwort", meaning: "the foreign word", example: { jp: "Im Deutsch von einer Firma stehen viele Fremdwörter.", en: "In the German of a firm there are many foreign words." }, drill: { jp: "Das Fremdwort ist schwer zu lesen", en: "The foreign word is hard to read" }, accept: ["foreign word", "the foreign word", "the loanword"], hint: "fremd (u32) + Wort. Plural with umlaut: die Fremdwörter." },
        { id: "de-u74l2-dieabkurzung", type: "vocab", front: "die Abkürzung", reading: "dieabkurzung", meaning: "the abbreviation", example: { jp: "Die Abkürzung für gegebenenfalls steht in vielen Schreiben.", en: "The abbreviation for gegebenenfalls appears in many letters." }, drill: { jp: "Die Abkürzung steht für drei Wörter", en: "The abbreviation stands for three words" }, accept: ["abbreviation", "the abbreviation", "the short form", "the shortcut"], hint: "From kurz. Also a shortcut on a walk: eine Abkürzung nehmen." },
        { id: "de-u74l2-derwortschatz", type: "vocab", front: "der Wortschatz", reading: "derwortschatz", meaning: "the vocabulary", example: { jp: "Der Wortschatz von einem Kind wächst sehr schnell.", en: "A child's vocabulary grows very fast." }, drill: { jp: "Der Wortschatz wächst mit der Zeit", en: "The vocabulary grows with time" }, accept: ["vocabulary", "the vocabulary", "the word stock"], hint: "Wort + Schatz, a treasure. A lovely German image for the words you own." },
      ],
    },
    {
      id: "de-u74l3",
      unit: 74,
      lesson: 3,
      title: "Übersetzen und verstehen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle meaning across two languages: to translate, to interpret, comprehensible, to misunderstand, literally, in substance.",
      items: [
        { id: "de-u74l3-ubersetzen", type: "vocab", front: "übersetzen", reading: "ubersetzen", meaning: "to translate", example: { jp: "Wir übersetzen den Text zusammen und fragen dann nach.", en: "We are translating the text together and following up afterwards." }, drill: { jp: "Wir übersetzen den Text zusammen", en: "We translate the text together" }, accept: ["to translate"], hint: "Inseparable here: er übersetzt den Text. Stressed on ÜBER it means to ferry across." },
        { id: "de-u74l3-dolmetschen", type: "vocab", front: "dolmetschen", reading: "dolmetschen", meaning: "to interpret", example: { jp: "Bei einem Termin mit dem Arzt muss oft ein Kollege dolmetschen.", en: "At an appointment with the doctor a colleague often has to interpret." }, drill: { jp: "Sie kann bei dem Termin dolmetschen", en: "She can interpret at the appointment" }, accept: ["to interpret", "to translate orally", "to act as interpreter"], hint: "SPOKEN translation; übersetzen is the written kind. German keeps them apart." },
        { id: "de-u74l3-verstandlich", type: "vocab", front: "verständlich", reading: "verstandlich", meaning: "comprehensible", example: { jp: "Die Mitteilung war kurz und gut verständlich.", en: "The notice was short and easily comprehensible." }, drill: { jp: "Die Antwort war gut verständlich", en: "The answer was easily comprehensible" }, accept: ["comprehensible", "understandable", "clear", "intelligible"], hint: "From verstehen. Also 'understandable' of a feeling: das ist verständlich." },
        { id: "de-u74l3-missverstehen", type: "vocab", front: "missverstehen", reading: "missverstehen", meaning: "to misunderstand", example: { jp: "Bitte missverstehen Sie die Kritik nicht, die Arbeit ist gut.", en: "Please do not misunderstand the criticism, the work is good." }, drill: { jp: "Wir wollen den Chef nicht missverstehen", en: "We do not want to misunderstand the boss" }, accept: ["to misunderstand", "to take the wrong way", "to get wrong"], hint: "miss- is German's 'mis-', and it is inseparable: ich missverstehe." },
        { id: "de-u74l3-wortlich", type: "vocab", front: "wörtlich", reading: "wortlich", meaning: "literally", example: { jp: "Eine Redewendung kann man fast nie wörtlich übersetzen.", en: "An idiom can almost never be translated literally." }, drill: { jp: "Bitte nimm das nicht wörtlich", en: "Please do not take that literally" }, accept: ["literally", "literal", "word for word", "verbatim"], hint: "From Wort. Its opposite in this unit is sinngemäß, the next card." },
        { id: "de-u74l3-sinngemass", type: "vocab", front: "sinngemäß", reading: "sinngemass", meaning: "in substance", example: { jp: "Er hat es nicht wörtlich, aber sinngemäß ganz richtig.", en: "He did not put it word for word, but in substance quite correctly." }, drill: { jp: "Das ist sinngemäß richtig", en: "That is correct in substance" }, accept: ["in substance", "in essence", "to that effect", "roughly", "in the same sense"], hint: "der Sinn + gemäß: according to the sense. ß, so the reading is written with ss." },
      ],
    },
    {
      id: "de-u74l4",
      unit: 74,
      lesson: 4,
      title: "Eine Sprache lernen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about learning a language: your mother tongue, a foreign language, a dictionary, grammar, an idiom, a proverb.",
      items: [
        { id: "de-u74l4-diemuttersprache", type: "vocab", front: "die Muttersprache", reading: "diemuttersprache", meaning: "the mother tongue", example: { jp: "In der Muttersprache denkt man nicht über die Grammatik nach.", en: "In your mother tongue you do not think about the grammar." }, drill: { jp: "Die Muttersprache lernt man zu Hause", en: "You learn your mother tongue at home" }, accept: ["mother tongue", "the mother tongue", "native language", "first language"], hint: "die Mutter + Sprache. A native speaker is der Muttersprachler." },
        { id: "de-u74l4-diefremdsprache", type: "vocab", front: "die Fremdsprache", reading: "diefremdsprache", meaning: "the foreign language", example: { jp: "Eine Fremdsprache lernt man gut mit viel Zeit.", en: "You learn a foreign language well with a lot of time." }, drill: { jp: "Die Fremdsprache lernt man in der Schule", en: "You learn a foreign language at school" }, accept: ["foreign language", "the foreign language", "second language"], hint: "fremd + Sprache, the exact mirror of die Muttersprache." },
        { id: "de-u74l4-dasworterbuch", type: "vocab", front: "das Wörterbuch", reading: "dasworterbuch", meaning: "the dictionary", example: { jp: "Das alte Wörterbuch von meinem Vater liegt noch im Schrank.", en: "My father's old dictionary is still in the cupboard." }, drill: { jp: "Das Wörterbuch liegt auf dem Tisch", en: "The dictionary is on the table" }, accept: ["dictionary", "the dictionary"], hint: "Wörter (the plural) + Buch — a book OF words, so the plural is inside." },
        { id: "de-u74l4-diegrammatik", type: "vocab", front: "die Grammatik", reading: "diegrammatik", meaning: "the grammar", example: { jp: "Die Grammatik von einer Fremdsprache ist am Anfang hart.", en: "The grammar of a foreign language is tough at the start." }, drill: { jp: "Die Grammatik ist am Anfang schwer", en: "The grammar is hard at the start" }, accept: ["grammar", "the grammar"], hint: "Stress the middle: gram-MA-tik." },
        { id: "de-u74l4-dieredewendung", type: "vocab", front: "die Redewendung", reading: "dieredewendung", meaning: "the idiom", example: { jp: "Die Redewendung kommt aus dem Sport und ist sehr alt.", en: "The idiom comes from sport and is very old." }, drill: { jp: "Die Redewendung kann man nicht übersetzen", en: "You cannot translate the idiom" }, accept: ["idiom", "the idiom", "the expression", "the turn of phrase"], hint: "reden + wenden. A phrase whose meaning is not the sum of its words." },
        { id: "de-u74l4-dassprichwort", type: "vocab", front: "das Sprichwort", reading: "dassprichwort", meaning: "the proverb", example: { jp: "Ein altes Sprichwort sagt, dass Vorsorge besser ist als Therapie.", en: "An old proverb says that prevention is better than therapy." }, drill: { jp: "Das Sprichwort ist sehr alt", en: "The proverb is very old" }, accept: ["proverb", "the proverb", "the saying", "the adage"], hint: "sprechen + Wort. A whole sentence of folk wisdom, unlike eine Redewendung." },
      ],
    },
  ],
};
