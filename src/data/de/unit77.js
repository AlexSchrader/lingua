// DE Unit 77 — Am Telefon (slot: coverage-b1-4) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. The corpus teaches anrufen (u33) and die Verbindung (u33) and
// stops there: a learner can start a call and cannot survive one. Everything that
// actually happens on a German phone call — the area code, being put through,
// taking a message, ringing back, a bad line, the wrong number — is untaught in
// u1-u50 and is in no B1 slot title.
//
// FRONTS DROPPED as already taught (used in examples, never re-taught):
//   der Anruf (lexeme of anrufen u33) · waehlen (u42) · besetzt (u42) ·
//   die Verbindung (u33) · verbinden (lexeme of die Verbindung) · klingeln
//   (lexeme of die Klingel u30) · die Leitung (lexeme of leiten u24).
// NOTE FOR THE LEAD: "die Leitung" is the natural German for a phone line and is
// blocked only by leiten/die Leiter. It is replaced here by "der Anschluss"; if a
// later pass wants it, it is the higher-value word.
export const DE_UNIT77 = {
  id: "de-u77",
  lang: "de",
  title: "Am Telefon",
  order: 77,
  stage: "b1",
  lessons: [
    {
      id: "de-u77l1",
      unit: 77,
      lesson: 1,
      title: "Anrufen und erreichen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Dial a German number, say when you are reachable, and pick up a call.",
      items: [
        { id: "de-u77l1-dievorwahl", type: "vocab", front: "die Vorwahl", reading: "dievorwahl", meaning: "the area code", example: { jp: "Ich weiß die Vorwahl von der Firma nicht.", en: "I don't know the company's area code." }, drill: { jp: "Die Vorwahl ist sehr kurz", en: "The area code is very short" }, accept: ["area code", "the area code", "dialling code", "the dialling code", "the prefix"], hint: "vor + wählen — the digits you dial first. Germany's country code is 0049." },
        { id: "de-u77l1-diedurchwahl", type: "vocab", front: "die Durchwahl", reading: "diedurchwahl", meaning: "the extension number", example: { jp: "Meine Durchwahl ist die Nummer am Ende.", en: "My extension is the number at the end." }, drill: { jp: "Die Durchwahl ist eine kurze Nummer", en: "The extension is a short number" }, accept: ["extension", "the extension", "extension number", "the extension number", "the direct line"], hint: "durch + wählen — the short number that goes straight through to one desk." },
        { id: "de-u77l1-deranschluss", type: "vocab", front: "der Anschluss", reading: "deranschluss", meaning: "the phone connection", example: { jp: "Der Anschluss in der neuen Wohnung geht noch nicht.", en: "The connection in the new flat isn't working yet." }, drill: { jp: "Der Anschluss ist noch neu", en: "The connection is still new" }, accept: ["phone line", "the phone line", "the socket", "the phone connection"], hint: "From anschließen, to connect up. Also the train you change onto: der Anschlusszug." },
        { id: "de-u77l1-erreichbar", type: "vocab", front: "erreichbar", reading: "erreichbar", meaning: "reachable", example: { jp: "Ich bin heute bis sechs Uhr erreichbar.", en: "I am reachable today until six o'clock." }, drill: { jp: "Der Chef ist nicht erreichbar", en: "The boss is not reachable" }, accept: ["reachable", "available", "contactable", "within reach", "able to be reached"], hint: "erreichen + -bar. The suffix -bar is English -able: essbar, machbar, lesbar." },
        { id: "de-u77l1-dasfreizeichen", type: "vocab", front: "das Freizeichen", reading: "dasfreizeichen", meaning: "the ringing tone", example: { jp: "Ich höre das Freizeichen, aber niemand antwortet.", en: "I hear the ringing tone, but nobody answers." }, drill: { jp: "Das Freizeichen kommt sehr spät", en: "The ringing tone comes very late" }, accept: ["ringing tone", "the ringing tone", "the ring tone", "the ringing"], hint: "frei = free, das Zeichen = the signal: the line is free and ringing. The DIAL tone is das Amtszeichen." },
      ],
    },
    {
      id: "de-u77l2",
      unit: 77,
      lesson: 2,
      title: "Sich melden",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Answer a German phone the German way, ask to be put through, and promise a call back.",
      items: [
        { id: "de-u77l2-sichmelden", type: "vocab", front: "sich melden", reading: "sichmelden", meaning: "to answer the phone", example: { jp: "Niemand meldet sich in der Firma.", en: "Nobody is answering at the company." }, drill: { jp: "Am Telefon muss man sich melden", en: "On the phone you have to say who you are" }, accept: ["to answer the phone", "answer the phone", "to say who you are", "to get in touch", "to report in"], hint: "On a German call you answer with your surname, not 'hello'. Also: to get in touch." },
        { id: "de-u77l2-dranbleiben", type: "vocab", front: "dranbleiben", reading: "dranbleiben", meaning: "to hold the line", example: { jp: "Sie müssen kurz dranbleiben.", en: "You have to hold the line briefly." }, drill: { jp: "Ich kann nicht länger dranbleiben", en: "I cannot hold the line any longer" }, accept: ["to hold the line", "hold the line", "to hang on", "hang on", "to stay on the line"], hint: "dran = on it. Bleiben Sie dran! = Hold, please. Also: to stick at something." },
        { id: "de-u77l2-weiterleiten", type: "vocab", front: "weiterleiten", reading: "weiterleiten", meaning: "to put a call through", example: { jp: "Ich kann Sie gern weiterleiten.", en: "I am happy to put you through." }, drill: { jp: "Können Sie mich weiterleiten", en: "Can you put me through" }, accept: ["to put through", "put through", "to forward", "forward", "to transfer a call"], hint: "weiter + leiten, to lead onward. Also used for forwarding an email." },
        { id: "de-u77l2-ausrichten", type: "vocab", front: "ausrichten", reading: "ausrichten", meaning: "to pass on a message", example: { jp: "Soll ich ihm etwas ausrichten?", en: "Shall I pass on a message to him?" }, drill: { jp: "Ich kann ihr etwas ausrichten", en: "I can pass her a message" }, accept: ["to pass on a message", "pass on a message", "to pass on", "to give a message", "to take a message"], hint: "Kann ich etwas ausrichten? = Can I take a message? Separable." },
        { id: "de-u77l2-zuruckrufen", type: "vocab", front: "zurückrufen", reading: "zuruckrufen", meaning: "to call back", example: { jp: "Ich will Sie morgen zurückrufen.", en: "I want to call you back tomorrow." }, drill: { jp: "Er will dich später zurückrufen", en: "He wants to call you back later" }, accept: ["to call back", "call back", "to ring back", "ring back", "to return a call"], hint: "Separable: ich rufe zurück. The noun is der Rückruf." },
        { id: "de-u77l2-derhorer", type: "vocab", front: "der Hörer", reading: "derhorer", meaning: "the receiver", example: { jp: "Sie nimmt den Hörer und sagt ihren Namen.", en: "She picks up the receiver and says her name." }, drill: { jp: "Der Hörer liegt neben dem Telefon", en: "The receiver is lying next to the phone" }, accept: ["receiver", "the receiver", "handset", "the handset", "the earpiece"], hint: "From hören. Den Hörer abnehmen = pick up; auflegen = put down. Also: a listener." },
      ],
    },
    {
      id: "de-u77l3",
      unit: 77,
      lesson: 3,
      title: "Nachrichten hinterlassen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Leave a clear voicemail and spell your name out loud over the phone.",
      items: [
        { id: "de-u77l3-deranrufbeantworter", type: "vocab", front: "der Anrufbeantworter", reading: "deranrufbeantworter", meaning: "the answering machine", example: { jp: "Der Anrufbeantworter ist schon voll.", en: "The answering machine is already full." }, drill: { jp: "Der Anrufbeantworter ist sehr alt", en: "The answering machine is very old" }, accept: ["answering machine", "the answering machine", "answerphone", "the answerphone"], hint: "anrufen + beantworten. Germans shorten it to 'AB' in speech." },
        { id: "de-u77l3-diemailbox", type: "vocab", front: "die Mailbox", reading: "diemailbox", meaning: "the voicemail", example: { jp: "Ich komme immer auf die Mailbox.", en: "I always get the voicemail." }, drill: { jp: "Ich spreche auf die Mailbox", en: "I am speaking onto the voicemail" }, accept: ["voicemail", "the voicemail", "voice mail", "the mailbox", "the message box"], hint: "German for mobile voicemail — NOT an email inbox, which is das Postfach." },
        { id: "de-u77l3-hinterlassen", type: "vocab", front: "hinterlassen", reading: "hinterlassen", meaning: "to leave behind", example: { jp: "Bitte hinterlassen Sie Ihren Namen und Ihre Nummer.", en: "Please leave your name and your number." }, drill: { jp: "Ich will eine Nachricht hinterlassen", en: "I want to leave a message" }, accept: ["to leave behind", "leave behind", "to leave a message", "to leave"], hint: "hinter + lassen. NOT separable: ich hinterlasse eine Nachricht." },
        { id: "de-u77l3-buchstabieren", type: "vocab", front: "buchstabieren", reading: "buchstabieren", meaning: "to spell out", example: { jp: "Können Sie Ihren Namen bitte buchstabieren?", en: "Can you spell your name, please?" }, drill: { jp: "Können Sie das bitte buchstabieren", en: "Can you spell that please" }, accept: ["to spell", "spell", "to spell out", "spell out"], hint: "der Buchstabe = the letter. Germans spell with names: Anton, Berta, Cäsar." },
        { id: "de-u77l3-stumm", type: "vocab", front: "stumm", reading: "stumm", meaning: "silent", example: { jp: "Mein Telefon ist stumm, ich höre nichts.", en: "My phone is silent, I can't hear anything." }, drill: { jp: "Das Telefon ist noch stumm", en: "The phone is still silent" }, accept: ["silent", "mute", "on mute", "soundless", "not speaking"], hint: "stumm schalten = to mute. A silent film is ein Stummfilm." },
      ],
    },
    {
      id: "de-u77l4",
      unit: 77,
      lesson: 4,
      title: "Wenn es nicht klappt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what went wrong on a call: wrong number, bad line, cut off.",
      items: [
        { id: "de-u77l4-sichverwahlen", type: "vocab", front: "sich verwählen", reading: "sichverwahlen", meaning: "to dial the wrong number", example: { jp: "Entschuldigung, ich habe mich verwählt.", en: "Sorry, I dialled the wrong number." }, drill: { jp: "Man kann sich verwählen", en: "You can dial the wrong number" }, accept: ["to dial the wrong number", "dial the wrong number", "to misdial", "to get a wrong number"], hint: "ver- turns a verb into doing it WRONG: sich verwählen, sich verlaufen, sich verschreiben." },
        { id: "de-u77l4-auflegen", type: "vocab", front: "auflegen", reading: "auflegen", meaning: "to hang up", example: { jp: "Er legt den Hörer auf und geht.", en: "He puts the receiver down and leaves." }, drill: { jp: "Bitte nicht schnell auflegen", en: "Please do not hang up quickly" }, accept: ["to hang up", "hang up", "to put the phone down", "to ring off"], hint: "Separable: ich lege auf. Literally, to lay the receiver down." },
        { id: "de-u77l4-abbrechen", type: "vocab", front: "abbrechen", reading: "abbrechen", meaning: "to break off", example: { jp: "Bitte nicht abbrechen, ich bin noch hier.", en: "Please don't break off, I'm still here." }, drill: { jp: "Sie darf jetzt nicht abbrechen", en: "She must not break off now" }, accept: ["to break off", "break off", "to abort", "to cut short", "to stop halfway"], hint: "Separable: ich breche ab. A call, a trip or a course of study can be abgebrochen." },
        { id: "de-u77l4-diestorung", type: "vocab", front: "die Störung", reading: "diestorung", meaning: "the fault on a line", example: { jp: "Es gibt eine Störung, das Telefon geht nicht.", en: "There's a fault, the phone isn't working." }, drill: { jp: "Die Störung ist sehr groß", en: "The fault is very big" }, accept: ["fault", "the fault", "disruption", "the disruption", "interference", "the interference"], hint: "stören = to disturb. The sign on a broken machine reads: Störung." },
        { id: "de-u77l4-rauschen", type: "vocab", front: "rauschen", reading: "rauschen", meaning: "to crackle", example: { jp: "Das Telefon rauscht, ich verstehe dich nicht.", en: "The phone is crackling, I can't understand you." }, drill: { jp: "Das Telefon kann laut rauschen", en: "The phone can crackle loudly" }, accept: ["to crackle", "crackle", "to hiss", "to rustle", "to make a rushing noise"], hint: "The sound of wind in trees, water in a river, or a bad phone line." },
      ],
    },
  ],
};
