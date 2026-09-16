// DE Unit 72 — Förmlich und vertraut (slot: register 1) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// RETHEMED SLOT. The scaffold calls this "Register 1 — polite vs plain", which is
// the Japanese です・ます / plain-form split. German's register line is drawn in a
// completely different place: it is Sie vs du, Hochdeutsch vs Dialekt, and the
// fixed furniture of an official letter — none of which is a verb form. So the
// slot teaches THAT, per CLAUDE.md "No front language".
//
// l4 is deliberately colloquial (echt, krass, tja, naja). That is not a lapse in
// standard: a register unit that only teaches the formal half leaves the learner
// unable to HEAR the informal one, and every one of these four is in the first
// hour of any German conversation.
// NOT taken, already taught: hoeflich (u12), locker (u43), privat (declared a free
// cognate in u1). schriftlich is left out as one lexeme with schreiben (u9); only
// muendlich is carded, and the pair is explained in its hint.
// FREE: Anna, Thomas, Lena, Max, Schmidt, Berlin, Hamburg, Deutschland, Kollegen, Jahre, sein, Fotos
export const DE_UNIT72 = {
  id: "de-u72",
  lang: "de",
  title: "Förmlich und vertraut",
  order: 72,
  stage: "b1",
  lessons: [
    {
      id: "de-u72l1",
      unit: 72,
      lesson: 1,
      title: "Siezen und Duzen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get the Sie/du line right: to say Sie, to say du, the form of address, formal, confidential, the tone of a place.",
      items: [
        { id: "de-u72l1-siezen", type: "vocab", front: "siezen", reading: "siezen", meaning: "to address as Sie", example: { jp: "Im Betrieb siezen wir uns auch nach vielen Jahren.", en: "At the plant we still address each other as Sie even after many years." }, drill: { jp: "In der Firma siezen wir uns", en: "At the firm we address each other as Sie" }, accept: ["to address as Sie", "to use Sie", "to say Sie", "to address formally"], hint: "A verb made straight out of the pronoun Sie. Its pair is duzen." },
        { id: "de-u72l1-duzen", type: "vocab", front: "duzen", reading: "duzen", meaning: "to address as du", example: { jp: "In der neuen Firma duzen sich der Chef und die Kollegen.", en: "In the new firm the boss and the colleagues address each other as du." }, drill: { jp: "Die Kollegen duzen sich hier", en: "The colleagues say du to each other here" }, accept: ["to address as du", "to use du", "to say du", "to be on first-name terms"], hint: "Offering it is a small ceremony: Wollen wir uns duzen?" },
        { id: "de-u72l1-dieanrede", type: "vocab", front: "die Anrede", reading: "dieanrede", meaning: "the form of address", example: { jp: "Bei einer Anfrage an eine Firma ist die Anrede sehr wichtig.", en: "In an enquiry to a firm the form of address is very important." }, drill: { jp: "Die Anrede ist sehr wichtig", en: "The form of address is very important" }, accept: ["form of address", "the form of address", "the salutation", "the greeting"], hint: "an + reden: how you open, in a letter or to a person's face." },
        { id: "de-u72l1-formlich", type: "vocab", front: "förmlich", reading: "formlich", meaning: "formal", example: { jp: "Der neue Chef ist im Betrieb sehr förmlich und ruhig.", en: "The new boss is very formal and quiet at the plant." }, drill: { jp: "Der Chef ist immer sehr förmlich", en: "The boss is always very formal" }, accept: ["formal", "formally", "stiff", "ceremonious"], hint: "From die Form. höflich (u12) is warm; förmlich keeps its distance." },
        { id: "de-u72l1-vertraulich", type: "vocab", front: "vertraulich", reading: "vertraulich", meaning: "confidential", example: { jp: "Was der Arzt hört, bleibt ganz vertraulich.", en: "What the doctor hears stays entirely confidential." }, drill: { jp: "Die Antwort war ganz vertraulich", en: "The answer was entirely confidential" }, accept: ["confidential", "confidentially", "in confidence", "private"], hint: "From das Vertrauen (u68). Nothing to do with der Vertrag (u48)." },
        { id: "de-u72l1-derumgangston", type: "vocab", front: "der Umgangston", reading: "derumgangston", meaning: "the tone", example: { jp: "Der Umgangston im kleinen Betrieb ist locker und warm.", en: "The tone at the small plant is relaxed and warm." }, drill: { jp: "Der Umgangston hier ist locker", en: "The tone here is relaxed" }, accept: ["tone", "the tone", "the way people speak", "the manner"], hint: "der Umgang (u68) + der Ton. How a place sounds, not what it says." },
      ],
    },
    {
      id: "de-u72l2",
      unit: 72,
      lesson: 2,
      title: "Das offizielle Schreiben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Write and read an official letter: Dear Sir or Madam, a closing greeting, the recipient, the sender, hereby, the enclosure.",
      items: [
        { id: "de-u72l2-geehrt", type: "vocab", front: "sehr geehrte", reading: "sehrgeehrte", meaning: "dear (formal)", example: { jp: "Sehr geehrte Frau Schmidt steht ganz oben im Schreiben.", en: "Sehr geehrte Frau Schmidt stands right at the top of the letter." }, drill: { jp: "Sehr geehrte Frau Schmidt", en: "Dear Ms Schmidt" }, accept: ["dear (formal)", "esteemed", "honoured", "respected"], hint: "From die Ehre, honour. The ONLY correct formal opening, and it is learned whole: Sehr geehrte Frau …, Sehr geehrter Herr …" },
        { id: "de-u72l2-dergruss", type: "vocab", front: "der Gruß", reading: "dergruss", meaning: "the greeting", example: { jp: "Am Ende von einem Schreiben kommt der Gruß.", en: "At the end of a letter comes the sign-off." }, drill: { jp: "Der Gruß am Ende ist wichtig", en: "The greeting at the end is important" }, accept: ["greeting", "the greeting", "the regards", "the sign-off"], hint: "ß, so the reading is written with ss. Plural with umlaut: die Grüße." },
        { id: "de-u72l2-derabsender", type: "vocab", front: "der Absender", reading: "derabsender", meaning: "the sender", example: { jp: "Ohne Absender kommt keine Antwort auf die Anfrage.", en: "Without a sender no answer comes to the enquiry." }, drill: { jp: "Der Absender steht ganz oben", en: "The sender is right at the top" }, accept: ["sender", "the sender", "the return address"], hint: "ab + senden. On a German envelope it goes top left, always." },
        { id: "de-u72l2-hiermit", type: "vocab", front: "hiermit", reading: "hiermit", meaning: "hereby", example: { jp: "Hiermit sagen wir den Termin am Montag leider ab.", en: "We hereby regretfully cancel the Monday appointment." }, drill: { jp: "Hiermit sagen wir den Termin ab", en: "We hereby cancel the appointment" }, accept: ["hereby", "with this", "herewith"], hint: "hier + mit. Only in writing, and it makes the sentence official." },
        { id: "de-u72l2-dieanlage", type: "vocab", front: "die Anlage", reading: "dieanlage", meaning: "the enclosure", example: { jp: "Die Anlage mit den Fotos finden Sie unten.", en: "You will find the enclosure with the photos below." }, drill: { jp: "Die Anlage finden Sie unten", en: "You will find the enclosure below" }, accept: ["enclosure", "the enclosure", "the attachment", "the appendix", "the facility"], hint: "Several senses: an attachment, a park, and a plant you invest in." },
      ],
    },
    {
      id: "de-u72l3",
      unit: 72,
      lesson: 3,
      title: "Hochdeutsch und Dialekt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the varieties of German: a dialect, the local speech, standard German, colloquial, technical language, spoken.",
      items: [
        { id: "de-u72l3-derdialekt", type: "vocab", front: "der Dialekt", reading: "derdialekt", meaning: "the dialect", example: { jp: "Im Gebirge ist der Dialekt für Kinder aus Berlin schwer.", en: "Up in the mountains the dialect is hard for children from Berlin." }, drill: { jp: "Der Dialekt hier ist sehr stark", en: "The dialect here is very strong" }, accept: ["dialect", "the dialect"], hint: "Stress the end: di-a-LEKT." },
        { id: "de-u72l3-diemundart", type: "vocab", front: "die Mundart", reading: "diemundart", meaning: "the local speech", example: { jp: "Die Mundart von hier hört man kaum noch in der Stadt.", en: "The local speech of this area is hardly heard in the city any more." }, drill: { jp: "Die Mundart im Gebirge ist alt", en: "The local speech in the mountains is old" }, accept: ["local speech", "the local speech", "the dialect", "the vernacular"], hint: "der Mund + die Art (u65). The older, warmer word for der Dialekt." },
        { id: "de-u72l3-dashochdeutsch", type: "vocab", front: "das Hochdeutsch", reading: "dashochdeutsch", meaning: "standard German", example: { jp: "Das Hochdeutsch lernt man in der Schule und hört man im Radio.", en: "You learn standard German at school and hear it on the radio." }, drill: { jp: "Das Hochdeutsch lernt man in der Schule", en: "You learn standard German at school" }, accept: ["standard German", "the standard German", "High German"], hint: "hoch + Deutsch. 'High' was about the mountains, not about class." },
        { id: "de-u72l3-umgangssprachlich", type: "vocab", front: "umgangssprachlich", reading: "umgangssprachlich", meaning: "colloquial", example: { jp: "Das Wort ist umgangssprachlich und für ein Schreiben zu locker.", en: "The word is colloquial and too relaxed for a letter." }, drill: { jp: "Das Wort ist sehr umgangssprachlich", en: "The word is very colloquial" }, accept: ["colloquial", "colloquially", "informal", "in everyday speech"], hint: "der Umgang (u68) + Sprache. The dictionary label you will see as ugs." },
        { id: "de-u72l3-diefachsprache", type: "vocab", front: "die Fachsprache", reading: "diefachsprache", meaning: "the technical language", example: { jp: "Die Fachsprache vom Arzt ist für den Patienten schwer.", en: "The doctor's technical language is hard for the patient." }, drill: { jp: "Die Fachsprache ist schwer zu verstehen", en: "The technical language is hard to understand" }, accept: ["technical language", "the technical language", "the jargon", "the specialist language"], hint: "das Fach (u24), a subject or trade, + Sprache." },
        { id: "de-u72l3-mundlich", type: "vocab", front: "mündlich", reading: "mundlich", meaning: "spoken", example: { jp: "Die Prüfung ist mündlich und dauert wenige Minuten.", en: "The exam is oral and lasts a few minutes." }, drill: { jp: "Die Prüfung ist mündlich und kurz", en: "The exam is oral and short" }, accept: ["spoken", "oral", "orally", "verbal", "by word of mouth"], hint: "From der Mund. Its pair schriftlich (written) is one lexeme with schreiben (u9), so it is not carded — but you will meet the two together." },
      ],
    },
    {
      id: "de-u72l4",
      unit: 72,
      lesson: 4,
      title: "Wie man wirklich spricht",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Recognise everyday spoken German: that's just how it is, really, wild, well, well now, casual.",
      items: [
        { id: "de-u72l4-echt", type: "vocab", front: "echt", reading: "echt", meaning: "really", example: { jp: "Das Essen im kleinen Laden war echt gut und nicht teuer.", en: "The food in the little shop was really good and not expensive." }, drill: { jp: "Das Essen war echt gut", en: "The food was really good" }, accept: ["really", "genuinely", "real", "genuine", "seriously"], hint: "As an adjective it means genuine: echtes Gold. In speech it is just 'really'." },
        { id: "de-u72l4-krass", type: "vocab", front: "krass", reading: "krass", meaning: "extreme", example: { jp: "Der Preis für die Wohnung in der Stadt ist echt krass.", en: "The price for the flat in the city is really wild." }, drill: { jp: "Der Preis ist echt krass", en: "The price is really wild" }, accept: ["wild", "crazy", "extreme", "intense", "insane"], hint: "Young and very common; can be good or bad. Never write it in a letter." },
        { id: "de-u72l4-tja", type: "vocab", front: "tja", reading: "tja", meaning: "well", example: { jp: "Tja, gegen das Wetter kann man nichts machen.", en: "Well, there is nothing you can do about the weather." }, drill: { jp: "Tja man kann nichts machen", en: "Well you can do nothing" }, accept: ["well", "oh well", "hmm", "so it goes"], hint: "The sound of accepting bad news. Always sits at the front of the sentence." },
        { id: "de-u72l4-naja", type: "vocab", front: "naja", reading: "naja", meaning: "well now", example: { jp: "Naja, die Sendung war nicht gut, aber auch nicht sehr schlecht.", en: "Well now, the programme was not good, but not very bad either." }, drill: { jp: "Naja es war nicht gut", en: "Well now it was not good" }, accept: ["well now", "well", "oh well", "sort of"], hint: "Also written na ja. Softens the judgement that comes after it." },
        { id: "de-u72l4-salopp", type: "vocab", front: "salopp", reading: "salopp", meaning: "casual", example: { jp: "Der Umgangston im Betrieb ist salopp, aber der Chef hört immer zu.", en: "The tone at the plant is casual, but the boss always listens." }, drill: { jp: "Die Kollegen sprechen sehr salopp", en: "The colleagues speak very casually" }, accept: ["casual", "casually", "offhand", "relaxed", "informal"], hint: "Of speech and of clothes. From French, and stressed at the end: sa-LOPP." },
      ],
    },
  ],
};
