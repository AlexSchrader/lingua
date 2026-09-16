// DE Unit 78 — Beschwerden und Reklamationen (slot: coverage-b1-5) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. u27 teaches umtauschen and die Quittung, u32 teaches "Probleme
// und Loesungen" in the abstract. Between them a learner can buy a thing and can
// discuss a problem in general, and cannot tell a German shop that the thing they
// bought is broken. Complaining is a REGISTER, not a topic: it needs the polite
// formulas (mein Anliegen, sich erkundigen) and the persistence words.
//
// FRONTS DROPPED as already taught, used in examples only:
//   umtauschen + der Umtausch (u27) · die Quittung (u27) · verlangen (u48) ·
//   die Auskunft (u23) · sich weigern (u48) · hoeflich (u31).
// LEXEME PAIRS collapsed to one card each: die Beschwerde/sich beschweren ->
// the VERB · der Mangel/mangelhaft -> the NOUN · erstatten/die Erstattung -> the
// VERB · der Ersatz/ersetzen -> the VERB · der Widerruf/widerrufen -> the VERB.
export const DE_UNIT78 = {
  id: "de-u78",
  lang: "de",
  title: "Beschwerden und Reklamationen",
  order: 78,
  stage: "b1",
  lessons: [
    {
      id: "de-u78l1",
      unit: 78,
      lesson: 1,
      title: "Etwas stimmt nicht",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that something you bought is faulty and that you want to complain.",
      items: [
        { id: "de-u78l1-defekt", type: "vocab", front: "defekt", reading: "defekt", meaning: "out of order", example: { jp: "Die Kasse ist defekt, bitte bezahlen Sie dort.", en: "The till is out of order, please pay over there." }, drill: { jp: "Das Telefon ist schon defekt", en: "The phone is already out of order" }, accept: ["out of order", "faulty", "broken", "defective", "not working"], hint: "Said of machines. The sign on a broken lift reads: defekt." },
        { id: "de-u78l1-kaputtgehen", type: "vocab", front: "kaputtgehen", reading: "kaputtgehen", meaning: "to break down", example: { jp: "Das alte Fahrrad kann bald kaputtgehen.", en: "The old bike could break down soon." }, drill: { jp: "Die Uhr kann leicht kaputtgehen", en: "The watch can break easily" }, accept: ["to break down", "break down", "to break", "to stop working", "to give out"], hint: "kaputt + gehen. Separable: die Uhr geht kaputt." },
        { id: "de-u78l1-unzufrieden", type: "vocab", front: "unzufrieden", reading: "unzufrieden", meaning: "dissatisfied", example: { jp: "Ich bin mit dem Preis sehr unzufrieden.", en: "I am very dissatisfied with the price." }, drill: { jp: "Der Kunde ist sehr unzufrieden", en: "The customer is very dissatisfied" }, accept: ["dissatisfied", "unhappy", "not satisfied", "discontented"], hint: "un + zufrieden. German un- works like English un-: unklar, unmöglich, unfair." },
        { id: "de-u78l1-sichbeschweren", type: "vocab", front: "sich beschweren", reading: "sichbeschweren", meaning: "to complain", example: { jp: "Wir wollen uns über das Hotel beschweren.", en: "We want to complain about the hotel." }, drill: { jp: "Man kann sich beschweren", en: "You can complain" }, accept: ["to complain", "complain", "to make a complaint", "to lodge a complaint"], hint: "Reflexive, with über: ich beschwere mich über den Lärm. Noun: die Beschwerde." },
        { id: "de-u78l1-dasanliegen", type: "vocab", front: "das Anliegen", reading: "dasanliegen", meaning: "the request", example: { jp: "Was ist Ihr Anliegen?", en: "What is your request?" }, drill: { jp: "Das Anliegen ist nicht neu", en: "The request is not new" }, accept: ["request", "the request", "concern", "the concern", "the matter"], hint: "The polite office word for what you have come about. Haben Sie ein Anliegen?" },
      ],
    },
    {
      id: "de-u78l2",
      unit: 78,
      lesson: 2,
      title: "Reklamieren und zurückgeben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Take a faulty thing back to a German shop and show the right receipt.",
      items: [
        { id: "de-u78l2-reklamieren", type: "vocab", front: "reklamieren", reading: "reklamieren", meaning: "to return faulty goods", example: { jp: "Ich möchte die Schuhe reklamieren.", en: "I would like to return these faulty shoes." }, drill: { jp: "Ich will die Schuhe reklamieren", en: "I want to return the faulty shoes" }, accept: ["to return faulty goods", "to complain about a product", "to make a complaint about goods", "to claim under warranty"], hint: "Only about goods or a bill. Complaining about noise is sich beschweren." },
        { id: "de-u78l2-zuruckgeben", type: "vocab", front: "zurückgeben", reading: "zuruckgeben", meaning: "to give back", example: { jp: "Kann ich das Buch noch zurückgeben?", en: "Can I still give the book back?" }, drill: { jp: "Ich will das Buch zurückgeben", en: "I want to give the book back" }, accept: ["to give back", "give back", "to return", "return", "to hand back"], hint: "Separable: ich gebe es zurück." },
        { id: "de-u78l2-zuruckschicken", type: "vocab", front: "zurückschicken", reading: "zuruckschicken", meaning: "to send back", example: { jp: "Sie können die Hose auch zurückschicken.", en: "You can also send the trousers back." }, drill: { jp: "Wir müssen die Hose zurückschicken", en: "We have to send the trousers back" }, accept: ["to send back", "send back", "to return by post", "to post back"], hint: "Separable: ich schicke es zurück." },
        { id: "de-u78l2-derkassenbon", type: "vocab", front: "der Kassenbon", reading: "derkassenbon", meaning: "the till receipt", example: { jp: "Ohne Kassenbon kann ich nichts machen.", en: "Without the till receipt I can't do anything." }, drill: { jp: "Der Kassenbon liegt in der Tasche", en: "The till receipt is in the bag" }, accept: ["till receipt", "the till receipt", "the sales slip", "the cash register slip"], hint: "die Kasse + der Bon, said 'BONG'. Also der Kassenzettel." },
        { id: "de-u78l2-derbeleg", type: "vocab", front: "der Beleg", reading: "derbeleg", meaning: "the proof of purchase", example: { jp: "Ich habe den Beleg noch.", en: "I still have the proof of purchase." }, drill: { jp: "Der Beleg ist schon alt", en: "The proof of purchase is already old" }, accept: ["proof of purchase", "the proof of purchase", "the voucher", "the docket", "the slip"], hint: "belegen = to prove. Any paper that proves a payment was made." },
        { id: "de-u78l2-diegarantie", type: "vocab", front: "die Garantie", reading: "diegarantie", meaning: "the guarantee", example: { jp: "Die Garantie ist nach einem Jahr zu Ende.", en: "The guarantee ends after one year." }, drill: { jp: "Die Garantie ist noch gültig", en: "The guarantee is still valid" }, accept: ["guarantee", "the guarantee", "warranty", "the warranty"], hint: "VOLUNTARY, for whatever term the maker gives. The two-year legal right is a different thing: die Gewährleistung." },
      ],
    },
    {
      id: "de-u78l3",
      unit: 78,
      lesson: 3,
      title: "Ersatz und Geld zurück",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Ask customer service for a replacement, a refund or compensation.",
      items: [
        { id: "de-u78l3-erstatten", type: "vocab", front: "erstatten", reading: "erstatten", meaning: "to refund", example: { jp: "Wir erstatten Ihnen das Geld in zwei Wochen.", en: "We will refund you the money in two weeks." }, drill: { jp: "Sie können das Geld erstatten", en: "You can refund the money" }, accept: ["to refund", "refund", "to reimburse", "to pay back"], hint: "Noun: die Erstattung. Also Anzeige erstatten, to report to the police." },
        { id: "de-u78l3-dieentschadigung", type: "vocab", front: "die Entschädigung", reading: "dieentschadigung", meaning: "the compensation", example: { jp: "Für die Verspätung gibt es eine Entschädigung.", en: "There is compensation for the delay." }, drill: { jp: "Die Entschädigung kommt im Juni", en: "The compensation comes in June" }, accept: ["compensation", "the compensation", "damages", "the payout"], hint: "der Schaden = the harm; entschädigen = to make the harm good." },
        { id: "de-u78l3-derkundendienst", type: "vocab", front: "der Kundendienst", reading: "derkundendienst", meaning: "the customer service", example: { jp: "Der Kundendienst antwortet am Morgen.", en: "Customer service answers in the morning." }, drill: { jp: "Der Kundendienst ist sehr gut", en: "The customer service is very good" }, accept: ["customer service", "the customer service", "after sales service", "the service desk"], hint: "der Kunde + der Dienst: both the repair service and the complaints desk." },
        { id: "de-u78l3-bearbeiten", type: "vocab", front: "bearbeiten", reading: "bearbeiten", meaning: "to process", example: { jp: "Wir bearbeiten Ihren Antrag noch.", en: "We are still processing your application." }, drill: { jp: "Sie müssen den Antrag bearbeiten", en: "They have to process the application" }, accept: ["to process", "process", "to deal with", "deal with", "to work on"], hint: "be + arbeiten: to work ON something. An office bearbeitet your case." },
        { id: "de-u78l3-umgehend", type: "vocab", front: "umgehend", reading: "umgehend", meaning: "without delay", example: { jp: "Bitte antworten Sie umgehend.", en: "Please answer without delay." }, drill: { jp: "Der Kundendienst antwortet umgehend", en: "Customer service answers without delay" }, accept: ["without delay", "immediately", "straight away", "promptly", "right away"], hint: "The formal letter word: wir bitten um umgehende Antwort." },
      ],
    },
    {
      id: "de-u78l4",
      unit: 78,
      lesson: 4,
      title: "Hartnäckig bleiben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Chase a complaint: ask again, ask for the manager, cancel the order.",
      items: [
        { id: "de-u78l4-hartnackig", type: "vocab", front: "hartnäckig", reading: "hartnackig", meaning: "persistent", example: { jp: "Man muss hartnäckig bleiben, dann kommt das Geld.", en: "You have to stay persistent, then the money comes." }, drill: { jp: "Der Kunde ist sehr hartnäckig", en: "The customer is very persistent" }, accept: ["persistent", "stubborn", "dogged", "tenacious"], hint: "hart + der Nacken, the neck: stiff-necked. Also said of a cold you can't shake." },
        { id: "de-u78l4-dervorgesetzte", type: "vocab", front: "der Vorgesetzte", reading: "dervorgesetzte", meaning: "the line manager", example: { jp: "Ich will mit Ihrem Vorgesetzten sprechen.", en: "I want to speak to your line manager." }, drill: { jp: "Der Vorgesetzte ist nicht hier", en: "The line manager is not here" }, accept: ["line manager", "the line manager", "superior", "the superior", "the person above"], hint: "Adjective-noun like der Beamte: ein Vorgesetzter, der Vorgesetzte, die Vorgesetzte." },
        { id: "de-u78l4-zugeben", type: "vocab", front: "zugeben", reading: "zugeben", meaning: "to admit", example: { jp: "Die Firma will nichts zugeben.", en: "The company doesn't want to admit anything." }, drill: { jp: "Sie müssen den Mangel zugeben", en: "They have to admit the fault" }, accept: ["to admit", "admit", "to concede", "concede", "to own up"], hint: "Separable: ich gebe es zu. In a recipe it means to add." },
        { id: "de-u78l4-widerrufen", type: "vocab", front: "widerrufen", reading: "widerrufen", meaning: "to withdraw an order", example: { jp: "Sie können den Antrag noch widerrufen.", en: "You can still withdraw the application." }, drill: { jp: "Man kann den Antrag widerrufen", en: "You can withdraw the application" }, accept: ["to withdraw an order", "to revoke", "to retract", "to cancel", "to take back"], hint: "wider = against + rufen. NOT separable. das Widerrufsrecht = the right to cancel." },
      ],
    },
  ],
};
