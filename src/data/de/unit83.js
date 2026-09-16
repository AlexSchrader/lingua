// DE Unit 83 — Post und Lieferung (slot: coverage-b1-10) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. The corpus teaches die Post (u7) as a PLACE and das Paket (u47)
// as a CONTAINER, and nothing in between: no envelope, no stamp, no sender, no
// recipient, no postage, no delivery. Ordering online and collecting a parcel is
// one of the first things a learner in Germany does alone, and u1-u75 gives them
// no words for any step of it.
//
// FRONTS DROPPED as already taught, used in examples only:
//   der Briefkasten (u30) · kleben (u46) · das Paeckchen (lexeme of packen u23
//   and die Packung u47) · die Abholung (lexeme of abholen u23) ·
//   die Verzoegerung (gloss owned by die Verspaetung u23) · die Ware (its
//   READING FOLD collides with waere, u37 — "ware" both ways).
// LEXEME PAIRS collapsed: liefern/die Lieferung -> the VERB · die Verpackung/
// verpacken -> the NOUN.
export const DE_UNIT83 = {
  id: "de-u83",
  lang: "de",
  title: "Post und Lieferung",
  order: 83,
  stage: "b1",
  lessons: [
    {
      id: "de-u83l1",
      unit: 83,
      lesson: 1,
      title: "Einen Brief verschicken",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Send something by German post: envelope, stamp, postbox.",
      items: [
        { id: "de-u83l1-verschicken", type: "vocab", front: "verschicken", reading: "verschicken", meaning: "to send off", example: { jp: "Ich will das Paket heute verschicken.", en: "I want to send the parcel off today." }, drill: { jp: "Wir wollen das Paket verschicken", en: "We want to send the parcel off" }, accept: ["to send off", "send off", "to send", "send", "to dispatch"], hint: "ver- + schicken: send it AWAY. Used for post and for email alike." },
        { id: "de-u83l1-derumschlag", type: "vocab", front: "der Umschlag", reading: "derumschlag", meaning: "the envelope", example: { jp: "Der Umschlag ist weiß und klein.", en: "The envelope is white and small." }, drill: { jp: "Der Umschlag ist noch leer", en: "The envelope is still empty" }, accept: ["envelope", "the envelope", "the cover", "the wrapper"], hint: "um + schlagen: folded round. Also a book cover and a sudden change." },
        { id: "de-u83l1-diebriefmarke", type: "vocab", front: "die Briefmarke", reading: "diebriefmarke", meaning: "the postage stamp", example: { jp: "Die Briefmarke kostet einen Euro.", en: "The stamp costs one euro." }, drill: { jp: "Die Briefmarke ist sehr klein", en: "The stamp is very small" }, accept: ["postage stamp", "the postage stamp", "stamp", "the stamp"], hint: "The OFFICE stamp pressed on paper is der Stempel — a different word." },
        { id: "de-u83l1-frankieren", type: "vocab", front: "frankieren", reading: "frankieren", meaning: "to put postage on", example: { jp: "Sie müssen den Umschlag noch frankieren.", en: "You still have to put postage on the envelope." }, drill: { jp: "Wir müssen den Umschlag frankieren", en: "We have to put postage on the envelope" }, accept: ["to put postage on", "to stamp", "to frank", "to pay the postage on"], hint: "unfrei = sent without postage, and the recipient pays." },
        { id: "de-u83l1-einwerfen", type: "vocab", front: "einwerfen", reading: "einwerfen", meaning: "to post a letter", example: { jp: "Ich will den Umschlag heute einwerfen.", en: "I want to post the envelope today." }, drill: { jp: "Ich will die Postkarte einwerfen", en: "I want to post the postcard" }, accept: ["to post", "post", "to post a letter", "to drop in the postbox", "to mail"], hint: "ein + werfen, to throw in. Separable: ich werfe den Brief ein." },
        { id: "de-u83l1-diepostkarte", type: "vocab", front: "die Postkarte", reading: "diepostkarte", meaning: "the postcard", example: { jp: "Die Postkarte kommt aus dem Urlaub.", en: "The postcard comes from the holiday." }, drill: { jp: "Die Postkarte ist aus Berlin", en: "The postcard is from Berlin" }, accept: ["postcard", "the postcard", "the card"], hint: "die Post + die Karte. Cheaper postage than a letter in an envelope." },
      ],
    },
    {
      id: "de-u83l2",
      unit: 83,
      lesson: 2,
      title: "In der Filiale",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Queue at a German post office counter, weigh a parcel and pay the postage.",
      items: [
        { id: "de-u83l2-diefiliale", type: "vocab", front: "die Filiale", reading: "diefiliale", meaning: "the branch", example: { jp: "Die Filiale von der Post ist am Markt.", en: "The post office branch is on the market square." }, drill: { jp: "Die Filiale ist am Bahnhof", en: "The branch is at the station" }, accept: ["branch", "the branch", "the local branch", "the outlet"], hint: "Said 'fili-AH-leh'. Banks, shops and the Post all have Filialen." },
        { id: "de-u83l2-diewarteschlange", type: "vocab", front: "die Warteschlange", reading: "diewarteschlange", meaning: "the queue", example: { jp: "Am Schalter gibt es eine Warteschlange.", en: "There is a queue at the counter." }, drill: { jp: "Die Warteschlange ist sehr lang", en: "The queue is very long" }, accept: ["queue", "the queue", "line", "the line", "the waiting line"], hint: "warten + die Schlange, the snake. Germans also just say die Schlange." },
        { id: "de-u83l2-dasporto", type: "vocab", front: "das Porto", reading: "dasporto", meaning: "the postage", example: { jp: "Das Porto für das Paket ist teuer.", en: "The postage for the parcel is expensive." }, drill: { jp: "Das Porto kostet vier Euro", en: "The postage costs four euros" }, accept: ["postage", "the postage", "the postal charge", "the mailing cost"], hint: "What you PAY; die Briefmarke is what you STICK on." },
        { id: "de-u83l2-wiegen", type: "vocab", front: "wiegen", reading: "wiegen", meaning: "to weigh", example: { jp: "Sie müssen das Paket hier wiegen.", en: "You have to weigh the parcel here." }, drill: { jp: "Wir müssen das Paket wiegen", en: "We have to weigh the parcel" }, accept: ["to weigh", "weigh", "to weigh up", "to have a weight of"], hint: "Both to put on scales and to have a weight: es wiegt zwei Kilo." },
        { id: "de-u83l2-daseinschreiben", type: "vocab", front: "das Einschreiben", reading: "daseinschreiben", meaning: "the registered letter", example: { jp: "Der Antrag geht als Einschreiben.", en: "The application is going as a registered letter." }, drill: { jp: "Das Einschreiben kommt am Montag", en: "The registered letter comes on Monday" }, accept: ["registered letter", "the registered letter", "recorded delivery", "the recorded delivery"], hint: "Signed for on arrival — the proof German offices ask for." },
        { id: "de-u83l2-daspostfach", type: "vocab", front: "das Postfach", reading: "daspostfach", meaning: "the PO box", example: { jp: "Die Firma hat ein Postfach in der Stadt.", en: "The company has a PO box in town." }, drill: { jp: "Das Postfach ist schon voll", en: "The PO box is already full" }, accept: ["PO box", "the PO box", "post office box", "the post box", "the mailbox"], hint: "die Post + das Fach, the pigeonhole. Also an email inbox." },
      ],
    },
    {
      id: "de-u83l3",
      unit: 83,
      lesson: 3,
      title: "Absender und Empfänger",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Fill in sender and recipient, label a parcel and have post forwarded.",
      items: [
        { id: "de-u83l3-derempfanger", type: "vocab", front: "der Empfänger", reading: "derempfanger", meaning: "the recipient", example: { jp: "Der Empfänger wohnt nicht mehr hier.", en: "The recipient doesn't live here any more." }, drill: { jp: "Der Empfänger ist in Berlin", en: "The recipient is in Berlin" }, accept: ["recipient", "the recipient", "addressee", "the addressee", "the receiver"], hint: "empfangen = to receive. Also the receiver of a signal." },
        { id: "de-u83l3-dasetikett", type: "vocab", front: "das Etikett", reading: "dasetikett", meaning: "the label", example: { jp: "Auf dem Etikett ist die Adresse.", en: "The address is on the label." }, drill: { jp: "Das Etikett ist am Paket", en: "The label is on the parcel" }, accept: ["label", "the label", "the sticker", "the tag"], hint: "From French. Stress the end: eti-KETT. Plural die Etiketten." },
        { id: "de-u83l3-nachsenden", type: "vocab", front: "nachsenden", reading: "nachsenden", meaning: "to forward post", example: { jp: "Die Post kann die Sendung nachsenden.", en: "The post office can forward the item." }, drill: { jp: "Sie können die Post nachsenden", en: "They can forward the post" }, accept: ["to forward post", "forward post", "to forward", "to send on", "to redirect"], hint: "nach + senden: send it after you. der Nachsendeauftrag is the form." },
        { id: "de-u83l3-derzoll", type: "vocab", front: "der Zoll", reading: "derzoll", meaning: "the customs", example: { jp: "Der Zoll macht das Paket auf.", en: "Customs opens the parcel." }, drill: { jp: "Der Zoll ist am Flughafen", en: "Customs is at the airport" }, accept: ["customs", "the customs", "the customs duty", "the duty"], hint: "Both the office and the money you pay it. Also an inch, in old measure." },
      ],
    },
    {
      id: "de-u83l4",
      unit: 83,
      lesson: 4,
      title: "Pakete und Lieferung",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Arrange a delivery, describe the packaging and speak to the courier.",
      items: [
        { id: "de-u83l4-liefern", type: "vocab", front: "liefern", reading: "liefern", meaning: "to deliver", example: { jp: "Die Firma kann das Sofa morgen liefern.", en: "The company can deliver the sofa tomorrow." }, drill: { jp: "Sie können das Sofa liefern", en: "They can deliver the sofa" }, accept: ["to deliver", "deliver", "to supply", "supply"], hint: "die Lieferung = the delivery; der Lieferant = the supplier." },
        { id: "de-u83l4-derversand", type: "vocab", front: "der Versand", reading: "derversand", meaning: "the dispatch", example: { jp: "Der Versand kostet fünf Euro.", en: "Dispatch costs five euros." }, drill: { jp: "Der Versand ist sehr teuer", en: "The dispatch is very expensive" }, accept: ["dispatch", "the dispatch", "the shipping", "the postage and packing"], hint: "versenden = to dispatch. The line on a German online order: Versandkosten." },
        { id: "de-u83l4-derbote", type: "vocab", front: "der Bote", reading: "derbote", meaning: "the courier", example: { jp: "Der Bote kommt am Morgen.", en: "The courier comes in the morning." }, drill: { jp: "Der Bote hat das Paket", en: "The courier has the parcel" }, accept: ["courier", "the courier", "messenger", "the messenger", "the delivery driver"], hint: "An old word still in daily use: der Paketbote, der Fahrradbote." },
        { id: "de-u83l4-zustellen", type: "vocab", front: "zustellen", reading: "zustellen", meaning: "to deliver to the door", example: { jp: "Die Post will das Paket morgen zustellen.", en: "The post office wants to deliver the parcel tomorrow." }, drill: { jp: "Sie wollen das Paket zustellen", en: "They want to deliver the parcel" }, accept: ["to deliver to the door", "deliver to the door", "to deliver", "to serve", "to hand over"], hint: "The official word: die Zustellung. liefern is what a shop does." },
        { id: "de-u83l4-dieverpackung", type: "vocab", front: "die Verpackung", reading: "dieverpackung", meaning: "the packaging", example: { jp: "Die Verpackung ist schon kaputt.", en: "The packaging is already broken." }, drill: { jp: "Die Verpackung ist sehr groß", en: "The packaging is very big" }, accept: ["packaging", "the packaging", "the wrapping", "the packing"], hint: "verpacken = to pack up. Germany recycles it: der Gelbe Sack." },
        { id: "de-u83l4-derbrieftrager", type: "vocab", front: "der Briefträger", reading: "derbrieftrager", meaning: "the postman", example: { jp: "Der Briefträger kommt jeden Morgen.", en: "The postman comes every morning." }, drill: { jp: "Der Briefträger ist schon hier", en: "The postman is already here" }, accept: ["postman", "the postman", "postwoman", "the postal worker", "the mail carrier"], hint: "der Brief + tragen: the one who carries the letters." },
      ],
    },
  ],
};
