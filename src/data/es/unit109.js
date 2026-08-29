// ES Unit 109 — El trato deferente ("Deference and formal address") — B2 (slot: deference)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: speaking up or down a
// hierarchy. Honorific address (l1), the formulaic opening and closing of a written
// piece (l2), asking with deference (l3), placing yourself below the addressee (l4).
// The tú/usted decision (u72) and everyday politeness (u73) stay theirs: this unit is the
// register above them, and it lost most of its obvious candidates to them.
// Rejected as already taught: estimado, atentamente, tutear (u72), lamentar (u73),
// rogar, agradecer (u77), humilde (u80), informar (u32), el respeto (u46). Rejected as
// the same lexeme: distinguido (~u53 distinguir), dirigirse (~u78 dirigir), permitirse
// (~u44 permitir), disculpar (~u73 disculparse), el trato (~u50 tratar).
export const ES_UNIT109 = {
  id: "es-u109",
  lang: "es",
  title: "El trato deferente",
  order: 109,
  stage: "b2",
  lessons: [
    {
      id: "es-u109l1",
      unit: 109,
      lesson: 1,
      title: "El tratamiento honorífico",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Address someone by the title their position carries, in speech and on an envelope.",
      items: [
        { id: "es-u109l1-don", type: "vocab", front: "don", reading: "don", meaning: "Don (title before a first name)", example: { jp: "Buenos días, don Carlos.", en: "Good morning, Don Carlos." }, accept: ["don", "mr", "sir"], hint: "Goes before the FIRST name, never the surname: don Carlos, not don García. Señor takes the surname. Used alone it is respectful but warm." },
        { id: "es-u109l1-dona", type: "vocab", front: "doña", reading: "dona", meaning: "Doña (title before a woman's first name)", example: { jp: "Doña María fue la primera en hablar.", en: "Doña María was the first to speak." }, accept: ["dona", "mrs", "madam", "lady"], hint: "The feminine of don, and it follows the same rule: doña María. In official writing both appear in full — D. and D.ª when abbreviated." },
        { id: "es-u109l1-susenoria", type: "vocab", front: "su señoría", reading: "susenoria", meaning: "Your/His Honour (judge, MP)", example: { jp: "Su señoría no quiso decir nada más.", en: "His Honour did not wish to say anything further." }, accept: ["your honour", "his honour", "your honor", "the honourable member"], hint: "For judges and members of parliament. Spoken about someone in the third person even when addressing them — the grammar itself does the deferring." },
        { id: "es-u109l1-excelentisimo", type: "vocab", front: "excelentísimo", reading: "excelentisimo", meaning: "His/Her Excellency (form of address)", example: { jp: "El excelentísimo señor abrió la reunión.", en: "His Excellency opened the meeting." }, accept: ["his excellency", "her excellency", "most excellent", "the honourable"], hint: "The superlative of excelente, frozen into a title. Written Excmo. Sr. on an envelope; nobody says it out loud without an official reason." },
        { id: "es-u109l1-ilustre", type: "vocab", front: "ilustre", reading: "ilustre", meaning: "distinguished / illustrious", example: { jp: "Un ilustre autor vino a la universidad.", en: "A distinguished author came to the university." }, accept: ["distinguished", "illustrious", "eminent", "honourable"], hint: "Same form for both genders. As a title, Ilustrísimo (Ilmo.) sits one rung below Excelentísimo in the official ladder." },
        { id: "es-u109l1-honorable", type: "vocab", front: "honorable", reading: "honorable", meaning: "honourable (title)", example: { jp: "El honorable señor habló el primero.", en: "The honourable gentleman spoke first." }, accept: ["honourable", "honorable"], hint: "Note the spelling: one r and no h in the middle, unlike English. It is the standard title for regional presidents in Spain." },
      ],
    },
    {
      id: "es-u109l2",
      unit: 109,
      lesson: 2,
      title: "Abrir y cerrar un escrito",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Write the frame of a formal letter: who sent it, who it is for, what is enclosed, and how it signs off.",
      items: [
        { id: "es-u109l2-cordialmente", type: "vocab", front: "cordialmente", reading: "cordialmente", meaning: "cordially / kind regards", example: { jp: "Le saluda cordialmente.", en: "Kind regards." }, accept: ["cordially", "kind regards", "yours sincerely", "warm regards"], hint: "Warmer than atentamente (u72) and safe with someone you have dealt with before. Un cordial saludo does the same job as a noun." },
        { id: "es-u109l2-remitente", type: "vocab", front: "el remitente", reading: "elremitente", meaning: "sender", example: { jp: "La carta no dice quién es el remitente.", en: "The letter does not say who the sender is." }, accept: ["sender", "the sender"], hint: "The name in the top corner of the envelope. From remitir, to send on — the same root as remitirse in u108." },
        { id: "es-u109l2-destinatario", type: "vocab", front: "el destinatario", reading: "eldestinatario", meaning: "addressee / recipient", example: { jp: "El destinatario de la carta ya no vive aquí.", en: "The letter's addressee no longer lives here." }, accept: ["addressee", "recipient", "the addressee"], hint: "The person a text is aimed at, on an envelope or in an argument. From el destino." },
        { id: "es-u109l2-adjuntar", type: "vocab", front: "adjuntar", reading: "adjuntar", meaning: "to enclose / attach", example: { jp: "Le adjunto el informe que pidió.", en: "I enclose the report you asked for." }, accept: ["to enclose", "to attach", "enclose", "attach"], hint: "Le adjunto is the fixed opening of a covering letter, and now of an email with a file. Adjunto on its own is the attachment." },
        { id: "es-u109l2-acusarrecibo", type: "vocab", front: "acusar recibo", reading: "acusarrecibo", meaning: "to acknowledge receipt", example: { jp: "Acuso recibo de su carta del martes.", en: "I acknowledge receipt of your letter of Tuesday." }, accept: ["to acknowledge receipt", "to confirm receipt", "acknowledge receipt"], hint: "A fixed phrase where acusar has nothing to do with accusing — it means to register something formally. Always followed by de." },
        { id: "es-u109l2-comunicar", type: "vocab", front: "comunicar", reading: "comunicar", meaning: "to notify / inform formally", example: { jp: "Le comunico que la reunión cambia de fecha.", en: "I hereby notify you that the meeting is changing date." }, accept: ["to notify", "to inform", "to communicate", "notify"], hint: "Le comunico que opens the sentence that delivers official news. It sounds heavier and colder than informar (u32), which is the point." },
      ],
    },
    {
      id: "es-u109l3",
      unit: 109,
      lesson: 3,
      title: "Pedir con deferencia",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Ask someone above you for something, at four different heights of formality.",
      items: [
        { id: "es-u109l3-solicitar", type: "vocab", front: "solicitar", reading: "solicitar", meaning: "to request (formally)", example: { jp: "Solicito una respuesta antes del viernes.", en: "I request an answer before Friday." }, accept: ["to request", "to apply for", "request", "apply for"], hint: "The verb on every form: solicitar una beca, solicitar permiso. Pedir (u23) is what you do with a person; solicitar is what you do with an institution." },
        { id: "es-u109l3-suplicar", type: "vocab", front: "suplicar", reading: "suplicar", meaning: "to beg / entreat", example: { jp: "Le suplico que no diga nada a nadie.", en: "I beg you not to say anything to anyone." }, accept: ["to beg", "to entreat", "to implore", "beg"], hint: "Stronger than rogar (u77), and in legal writing it is simply the formal verb for the request a document ends with: SUPLICA que…" },
        { id: "es-u109l3-encarecidamente", type: "vocab", front: "encarecidamente", reading: "encarecidamente", meaning: "earnestly / most sincerely", example: { jp: "Le pido encarecidamente que venga.", en: "I earnestly ask you to come." }, accept: ["earnestly", "most sincerely", "strongly", "urgently"], hint: "Attaches to a verb of asking and raises it: pedir encarecidamente. From encarecer, to make dear — you are pricing the request higher." },
        { id: "es-u109l3-tenerabien", type: "vocab", front: "tener a bien", reading: "tenerabien", meaning: "to see fit / be so kind as to", example: { jp: "Si tiene a bien ayudarnos, se lo agradeceremos.", en: "If you see fit to help us, we will be grateful." }, accept: ["to see fit", "to be so kind as to", "to be good enough to", "see fit"], hint: "Leaves the decision entirely with the other person, which is the whole deferential move. Si tiene a bien is the standard conditional opening." },
        { id: "es-u109l3-sirvase", type: "vocab", front: "sírvase", reading: "sirvase", meaning: "kindly (please do)", example: { jp: "Sírvase enviar los papeles antes del viernes.", en: "Kindly send the documents before Friday." }, accept: ["kindly", "please", "be so good as to"], hint: "An imperative of servirse used as a polite please, followed straight by an infinitive. Notices and forms use it; people rarely say it." },
        { id: "es-u109l3-indicar", type: "vocab", front: "indicar", reading: "indicar", meaning: "to indicate / point out", example: { jp: "Le indico dónde está el problema.", en: "Let me point out to you where the problem is." }, accept: ["to indicate", "to point out", "to show", "indicate"], hint: "A neutral, formal way of telling someone something without decir. Como le indiqué = as I pointed out to you, which is a polite correction." },
      ],
    },
    {
      id: "es-u109l4",
      unit: 109,
      lesson: 4,
      title: "Situarse por debajo",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place yourself below the person you are addressing: offer yourself, thank formally, ask leave to speak.",
      items: [
        { id: "es-u109l4-deferencia", type: "vocab", front: "la deferencia", reading: "ladeferencia", meaning: "deference", example: { jp: "Habló con toda la deferencia posible.", en: "He spoke with all possible deference." }, accept: ["deference", "respect", "courtesy"], hint: "Respect shown by giving way. Por deferencia a alguien = out of deference to someone, which explains an action rather than a feeling." },
        { id: "es-u109l4-disposicion", type: "vocab", front: "la disposición", reading: "ladisposicion", meaning: "disposal / willingness", example: { jp: "Quedo a su disposición para lo que necesite.", en: "I remain at your disposal for whatever you need." }, accept: ["disposal", "willingness", "readiness", "availability"], hint: "Estar a la disposición de alguien is the standard closing offer of a formal letter. The same noun also means an official provision in a text." },
        { id: "es-u109l4-agradecimiento", type: "vocab", front: "el agradecimiento", reading: "elagradecimiento", meaning: "gratitude / thanks", example: { jp: "Quiero mostrar mi agradecimiento a todos.", en: "I want to express my gratitude to everyone." }, accept: ["gratitude", "thanks", "appreciation"], hint: "The noun from agradecer (u77). En agradecimiento por = in thanks for; the plural, mis agradecimientos, ends a speech." },
        { id: "es-u109l4-osar", type: "vocab", front: "osar", reading: "osar", meaning: "to dare (formal)", example: { jp: "Nadie osó decir nada en aquella reunión.", en: "Nobody dared say anything at that meeting." }, accept: ["to dare", "dare", "to presume"], hint: "The literary dare, followed straight by an infinitive with no preposition. No osaría contradecirle marks the gap in rank you are refusing to cross." },
        { id: "es-u109l4-venia", type: "vocab", front: "la venia", reading: "lavenia", meaning: "leave / permission to speak", example: { jp: "Con la venia, quiero hacer una pregunta.", en: "With your leave, I would like to ask a question." }, accept: ["leave", "permission", "your leave", "permission to speak"], hint: "Con la venia is what a lawyer says before addressing the court. It asks permission and grants precedence in three words." },
        { id: "es-u109l4-asusordenes", type: "vocab", front: "a sus órdenes", reading: "asusordenes", meaning: "at your service", example: { jp: "Estoy a sus órdenes para cualquier cosa.", en: "I am at your service for anything at all." }, accept: ["at your service", "at your command", "at your disposal"], hint: "Military in origin and still used in the army and in very formal service. Warmer and more everyday than quedo a su disposición." },
      ],
    },
  ],
};
