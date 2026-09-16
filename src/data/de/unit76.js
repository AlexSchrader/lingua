// DE Unit 76 — Auf dem Amt (slot: coverage-b1-3) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. The scaffold slot is "Vocabulary 3 (B1)", which is the scaffold
// admitting it does not know what is missing. What is missing in German, measured
// against u1-u50 and the B1 slot titles of u51-u75, is the BUREAUCRACY register:
// the corpus teaches der Pass (u19), der Ausweis (u23), die Behoerde and das
// Formular (u32) and then never teaches a learner how to USE an office — no
// counter, no deadline, no fee, no signature, no proof.
//
// FRONTS CHECKED at exact, reading-fold, article-stripped and lexeme level against
// the whole de corpus with scripts/screen-de.mjs. SIX candidates for this unit were
// dropped as already taught and are used in examples instead, never re-taught:
//   die Behoerde (u32) · das Formular (u32) · der Ausweis (u23) ·
//   die Unterschrift/unterschreiben -> only the VERB is carded ·
//   der Antrag/beantragen -> only the NOUN is carded (same lexeme) ·
//   die Anmeldung/sich anmelden -> only the REFLEXIVE VERB is carded.
// "der Schalter" is glossed "the service window", not "the counter" — die Theke
// (u42) already owns that gloss and two cards with one English answer is a card
// the learner cannot answer.
export const DE_UNIT76 = {
  id: "de-u76",
  lang: "de",
  title: "Auf dem Amt",
  order: 76,
  stage: "b1",
  lessons: [
    {
      id: "de-u76l1",
      unit: 76,
      lesson: 1,
      title: "Ämter und Schalter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the public offices in a German town and say which counter you need.",
      items: [
        { id: "de-u76l1-dieverwaltung", type: "vocab", front: "die Verwaltung", reading: "dieverwaltung", meaning: "the administration", example: { jp: "Die Verwaltung der Stadt ist sehr groß.", en: "The city administration is very big." }, drill: { jp: "Die Verwaltung ist im Rathaus", en: "The administration is in the town hall" }, accept: ["administration", "the administration", "the admin", "management"], hint: "From verwalten, to administer — the office side of any organisation." },
        { id: "de-u76l1-dasrathaus", type: "vocab", front: "das Rathaus", reading: "dasrathaus", meaning: "the town hall", example: { jp: "Das Rathaus ist am Markt.", en: "The town hall is on the market square." }, drill: { jp: "Das Rathaus ist sehr alt", en: "The town hall is very old" }, accept: ["town hall", "the town hall", "city hall", "the city hall"], hint: "der Rat = the council. Not a rat — that is die Ratte." },
        { id: "de-u76l1-derschalter", type: "vocab", front: "der Schalter", reading: "derschalter", meaning: "the service window", example: { jp: "Ich warte am Schalter auf meine Nummer.", en: "I am waiting at the window for my number." }, drill: { jp: "Der Schalter ist hier links", en: "The window is here on the left" }, accept: ["service window", "the service window", "the window", "the serving hatch"], hint: "The window you are served at in an office, bank or station. Also a light switch." },
        { id: "de-u76l1-dersachbearbeiter", type: "vocab", front: "der Sachbearbeiter", reading: "dersachbearbeiter", meaning: "the case worker", example: { jp: "Mein Sachbearbeiter ist heute nicht im Haus.", en: "My case worker is not in the building today." }, drill: { jp: "Der Sachbearbeiter liest den Antrag", en: "The case worker reads the application" }, accept: ["case worker", "the case worker", "caseworker", "the clerk"], hint: "die Sache + bearbeiten: the person whose desk your case lands on." },
      ],
    },
    {
      id: "de-u76l2",
      unit: 76,
      lesson: 2,
      title: "Das Formular ausfüllen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Fill in a German form, tick the right boxes, sign it and hand it in.",
      items: [
        { id: "de-u76l2-ausfullen", type: "vocab", front: "ausfüllen", reading: "ausfullen", meaning: "to fill in", example: { jp: "Sie müssen das Formular ganz ausfüllen.", en: "You have to fill the form in completely." }, drill: { jp: "Ich muss das Formular ausfüllen", en: "I have to fill in the form" }, accept: ["to fill in", "fill in", "to fill out", "fill out", "to complete"], hint: "Separable: ich fülle das Formular aus." },
        { id: "de-u76l2-ankreuzen", type: "vocab", front: "ankreuzen", reading: "ankreuzen", meaning: "to tick a box", example: { jp: "Sie müssen hier ja oder nein ankreuzen.", en: "You have to tick yes or no here." }, drill: { jp: "Sie müssen eine Antwort ankreuzen", en: "You have to tick one answer" }, accept: ["to tick", "tick", "to tick a box", "to check a box", "to mark with a cross"], hint: "das Kreuz = the cross. A German form is ticked with a cross, not a check mark." },
        { id: "de-u76l2-einreichen", type: "vocab", front: "einreichen", reading: "einreichen", meaning: "to submit", example: { jp: "Sie können den Antrag auch bei uns einreichen.", en: "You can also submit the application with us." }, drill: { jp: "Ich will den Antrag einreichen", en: "I want to submit the application" }, accept: ["to submit", "submit", "to hand in", "hand in", "to file"], hint: "Separable and formal: ich reiche den Antrag ein. Everyday German says abgeben." },
      ],
    },
    {
      id: "de-u76l3",
      unit: 76,
      lesson: 3,
      title: "Nachweise und Stempel",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Register with the authorities and show the papers that prove who you are.",
      items: [
        { id: "de-u76l3-sichanmelden", type: "vocab", front: "sich anmelden", reading: "sichanmelden", meaning: "to register with the authorities", example: { jp: "Wer neu in der Stadt wohnt, muss sich anmelden.", en: "Anyone who newly lives in the town has to register." }, drill: { jp: "Sie müssen sich anmelden", en: "You have to register" }, accept: ["to register", "register", "to sign up", "to report to the authorities"], hint: "Reflexive: ich melde mich an. The opposite is sich abmelden, to deregister." },
        { id: "de-u76l3-dernachweis", type: "vocab", front: "der Nachweis", reading: "dernachweis", meaning: "the proof", example: { jp: "Ohne Nachweis kann das Amt nichts machen.", en: "Without proof the office cannot do anything." }, drill: { jp: "Der Nachweis liegt hier auf dem Tisch", en: "The proof is lying here on the table" }, accept: ["proof", "the proof", "evidence", "the evidence"], hint: "nachweisen = to prove. der Einkommensnachweis = proof of income." },
        { id: "de-u76l3-diekopie", type: "vocab", front: "die Kopie", reading: "diekopie", meaning: "the photocopy", example: { jp: "Das Amt will eine Kopie vom Pass.", en: "The office wants a copy of the passport." }, drill: { jp: "Die Kopie liegt im Antrag", en: "The copy is in the application" }, accept: ["photocopy", "the photocopy", "copy", "the copy", "duplicate"], hint: "kopieren = to copy. Said 'ko-PEE', two syllables — it is the PLURAL Kopien that has three." },
        { id: "de-u76l3-dasoriginal", type: "vocab", front: "das Original", reading: "dasoriginal", meaning: "the original document", example: { jp: "Das Original bleibt bei mir, die Kopie geht an das Amt.", en: "The original stays with me, the copy goes to the office." }, drill: { jp: "Das Original bleibt bei mir", en: "The original stays with me" }, accept: ["original document", "the original document", "original", "the original"], hint: "im Original = in the original. Stress on the last syllable: origi-NAL." },
      ],
    },
    {
      id: "de-u76l4",
      unit: 76,
      lesson: 4,
      title: "Fristen und Gebühren",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Ask what an office charges, how long you have, and when a document runs out.",
      items: [
        { id: "de-u76l4-diegebuhr", type: "vocab", front: "die Gebühr", reading: "diegebuhr", meaning: "the fee", example: { jp: "Für den Pass muss man eine Gebühr bezahlen.", en: "You have to pay a fee for the passport." }, drill: { jp: "Die Gebühr ist sehr hoch", en: "The fee is very high" }, accept: ["fee", "the fee", "charge", "the charge"], hint: "What an office, bank or school charges. Usually plural: die Gebühren." },
        { id: "de-u76l4-gultig", type: "vocab", front: "gültig", reading: "gultig", meaning: "valid", example: { jp: "Mein Pass ist noch zwei Jahre gültig.", en: "My passport is valid for another two years." }, drill: { jp: "Die Karte ist noch gültig", en: "The ticket is still valid" }, accept: ["valid", "in date", "still valid"], hint: "From gelten, to count. The opposite is ungültig." },
        { id: "de-u76l4-ablaufen", type: "vocab", front: "ablaufen", reading: "ablaufen", meaning: "to expire", example: { jp: "Mein Pass läuft im Mai ab.", en: "My passport expires in May." }, drill: { jp: "Mein Pass kann bald ablaufen", en: "My passport can expire soon" }, accept: ["to expire", "expire", "to run out", "run out"], hint: "Separable: der Pass läuft ab. Also used for water running out of a sink." },
        { id: "de-u76l4-dieoffnungszeit", type: "vocab", front: "die Öffnungszeit", reading: "dieoffnungszeit", meaning: "the opening time", example: { jp: "Die Öffnungszeiten sind von acht bis zwölf.", en: "The opening times are from eight to twelve." }, drill: { jp: "Die Öffnungszeit ist sehr kurz", en: "The opening hours are very short" }, accept: ["opening time", "the opening time", "opening hours", "the opening hours"], hint: "Usually plural on a door sign: die Öffnungszeiten. öffnen = to open." },
      ],
    },
  ],
};
