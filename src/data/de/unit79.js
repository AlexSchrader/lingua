// DE Unit 79 — Verträge, Raten und Fristen (slot: coverage-b1-6) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME, GIVEN THAT der Vertrag AND die Versicherung ARE ALREADY TAUGHT.
// They are (u24 and u25). The justification is the FRONTS, and it has to be,
// because the rule this comment originally cited does not exist:
//
// ⚠️ CORRECTED. An earlier version of this header claimed "exactly the shape
// RUNBOOK §4 describes: an A2 slot spent the CONCRETE noun, and the B1 slot takes
// the PROCESS layer over it." RUNBOOK §4 says no such thing. The phrase is a
// PORTUGUESE block-1 lead's ruling to its own blocks 2/3 (BUILD-CHECKLIST.md:173,
// src/data/pt/unit67.js:8), and importing another language's ruling into German is
// what CLAUDE.md "No front language — every language is built from its own root"
// forbids. Worse, RUNBOOK §4 at that point records the Spanish B1 post-mortem in
// which duplicated THEMES cost 159 cards — so the citation offered the disaster as
// authority for repeating it.
//
// THE ACTUAL JUSTIFICATION, which needs no borrowed rule: not one of the 24 fronts
// below is taught anywhere in the corpus, each was screened at exact, fold,
// article-stripped, stem and gloss level, and each is a word a learner cannot do
// without. A learner who knows "der Vertrag" still cannot say what a contract runs
// for (die Laufzeit), what is in the small print (das Kleingedruckte), what falls
// due (fällig), what arrives when it does not (die Mahnung), or who is liable
// (haften). The theme is carried by its fronts or not at all.
//
// FRONTS DROPPED as already taught, used in examples only:
//   der Vertrag (u24) · kuendigen (u24) · die Bedingung (u37) ·
//   die Versicherung (u25) · ueberweisen (u27) · monatlich (lexeme of der Monat).
// LEXEME PAIRS collapsed: die Vereinbarung/vereinbaren -> the VERB.
// ⚠️ SS READINGS BY HAND (de/unit1.js): abschliessen, dieermassigung — the
// contract rejects a stored reading containing ß.
export const DE_UNIT79 = {
  id: "de-u79",
  lang: "de",
  title: "Verträge, Raten und Fristen",
  order: 79,
  stage: "b1",
  lessons: [
    {
      id: "de-u79l1",
      unit: 79,
      lesson: 1,
      title: "Abschließen und vereinbaren",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Sign a German contract and say what you have actually agreed to.",
      items: [
        { id: "de-u79l1-abschliessen", type: "vocab", front: "abschließen", reading: "abschliessen", meaning: "to conclude a contract", example: { jp: "Wir wollen den Vertrag heute abschließen.", en: "We want to conclude the contract today." }, drill: { jp: "Wir wollen den Vertrag abschließen", en: "We want to conclude the contract" }, accept: ["to conclude", "conclude", "to sign a contract", "to finalise", "to complete"], hint: "Separable: ich schließe den Vertrag ab. Also to lock a door." },
        { id: "de-u79l1-vereinbaren", type: "vocab", front: "vereinbaren", reading: "vereinbaren", meaning: "to arrange", example: { jp: "Wir haben einen Termin für Montag vereinbart.", en: "We agreed on an appointment for Monday." }, drill: { jp: "Wir müssen einen Termin vereinbaren", en: "We have to arrange an appointment" }, accept: ["to agree on", "agree on", "to arrange", "arrange", "to fix", "to agree"], hint: "einen Termin vereinbaren = to arrange an appointment. Noun: die Vereinbarung." },
        { id: "de-u79l1-daskleingedruckte", type: "vocab", front: "das Kleingedruckte", reading: "daskleingedruckte", meaning: "the small print", example: { jp: "Das Kleingedruckte liest fast niemand.", en: "Almost nobody reads the small print." }, drill: { jp: "Das Kleingedruckte ist sehr lang", en: "The small print is very long" }, accept: ["small print", "the small print", "fine print", "the fine print"], hint: "klein + gedruckt. An adjective-noun, always neuter: im Kleingedruckten." },
        { id: "de-u79l1-schriftlich", type: "vocab", front: "schriftlich", reading: "schriftlich", meaning: "in writing", example: { jp: "Der Antrag ist immer schriftlich.", en: "The application is always in writing." }, drill: { jp: "Die Antwort kommt immer schriftlich", en: "The answer always comes in writing" }, accept: ["in writing", "written", "in written form"], hint: "die Schrift = writing. The opposite is mündlich, spoken." },
        { id: "de-u79l1-dielaufzeit", type: "vocab", front: "die Laufzeit", reading: "dielaufzeit", meaning: "the term of a contract", example: { jp: "Die Laufzeit ist zwei Jahre.", en: "The term is two years." }, drill: { jp: "Die Laufzeit ist sehr lang", en: "The term is very long" }, accept: ["term", "the term", "the contract period", "the duration", "the running time"], hint: "laufen + die Zeit: how long it runs. Also a film's running time." },
        { id: "de-u79l1-dieklausel", type: "vocab", front: "die Klausel", reading: "dieklausel", meaning: "the clause", example: { jp: "Im Kleingedruckten steht eine Klausel über die Laufzeit des Vertrags.", en: "In the small print there is a clause about the term of the contract." }, drill: { jp: "Die Klausel steht im Kleingedruckten", en: "The clause is in the small print" }, accept: ["clause", "the clause", "provision", "the provision", "term"], hint: "KLAU-zel, with the z said as a soft s. One numbered paragraph of a contract — exactly what das Kleingedruckte in this lesson hides." },
      ],
    },
    {
      id: "de-u79l2",
      unit: 79,
      lesson: 2,
      title: "Zusagen und widersprechen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Accept an offer, cancel a booking, or object to a decision in writing.",
      items: [
        { id: "de-u79l2-diezusage", type: "vocab", front: "die Zusage", reading: "diezusage", meaning: "the acceptance", example: { jp: "Wir warten noch auf die Zusage.", en: "We are still waiting for the acceptance." }, drill: { jp: "Die Zusage kommt am Montag", en: "The acceptance comes on Monday" }, accept: ["acceptance", "the acceptance", "the go ahead", "the confirmation", "the yes"], hint: "zu + sagen, to say yes to something. The opposite is die Absage." },
        { id: "de-u79l2-verlangern", type: "vocab", front: "verlängern", reading: "verlangern", meaning: "to extend", example: { jp: "Ich möchte meinen Pass verlängern.", en: "I would like to extend my passport." }, drill: { jp: "Wir wollen den Vertrag verlängern", en: "We want to extend the contract" }, accept: ["to extend", "extend", "to renew", "renew", "to prolong"], hint: "From lang. Used for papers, contracts and cables alike." },
        { id: "de-u79l2-stornieren", type: "vocab", front: "stornieren", reading: "stornieren", meaning: "to cancel a booking", example: { jp: "Wir müssen das Hotel leider stornieren.", en: "Unfortunately we have to cancel the hotel." }, drill: { jp: "Ich will das Hotel stornieren", en: "I want to cancel the hotel" }, accept: ["to cancel a booking", "cancel a booking", "to cancel", "cancel"], hint: "Only bookings and orders. A CONTRACT is gekündigt, never storniert." },
        { id: "de-u79l2-derwiderspruch", type: "vocab", front: "der Widerspruch", reading: "derwiderspruch", meaning: "the formal objection", example: { jp: "Gegen die Gebühr hilft ein Widerspruch.", en: "A formal objection helps against the fee." }, drill: { jp: "Der Widerspruch kommt zu spät", en: "The objection comes too late" }, accept: ["formal objection", "the formal objection", "objection", "appeal", "the appeal", "the contradiction"], hint: "wider = against + sprechen. Widerspruch einlegen = to lodge an appeal." },
        { id: "de-u79l2-verpflichten", type: "vocab", front: "verpflichten", reading: "verpflichten", meaning: "to oblige", example: { jp: "Der Vertrag verpflichtet uns für zwei Jahre.", en: "The contract obliges us for two years." }, drill: { jp: "Das kann uns nicht verpflichten", en: "That cannot oblige us" }, accept: ["to oblige", "oblige", "to commit", "commit", "to bind"], hint: "die Pflicht = the duty. sich verpflichten = to commit yourself to something." },
        { id: "de-u79l2-derrucktritt", type: "vocab", front: "der Rücktritt", reading: "derrucktritt", meaning: "the withdrawal from a contract", example: { jp: "Der Rücktritt vom Vertrag ist nur innerhalb von zwei Wochen möglich.", en: "Withdrawal from the contract is only possible within two weeks." }, drill: { jp: "Der Rücktritt ist nur schriftlich möglich", en: "Withdrawal is only possible in writing" }, accept: ["withdrawal", "the withdrawal", "cancellation", "the cancellation", "resignation", "the resignation"], hint: "zurück + treten: stepping back out of something you had agreed to. Same word for resigning from an office: der Rücktritt des Ministers." },
      ],
    },
    {
      id: "de-u79l3",
      unit: 79,
      lesson: 3,
      title: "Raten und Zuschläge",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about paying in instalments, and about deposits, surcharges and discounts.",
      items: [
        { id: "de-u79l3-dierate", type: "vocab", front: "die Rate", reading: "dierate", meaning: "the instalment", example: { jp: "Ich bezahle das Auto in zwölf Raten.", en: "I am paying for the car in twelve instalments." }, drill: { jp: "Die Rate ist sehr hoch", en: "The instalment is very high" }, accept: ["instalment", "the instalment", "installment", "the monthly payment"], hint: "in Raten zahlen = to pay in instalments. Said 'RAH-teh', two syllables." },
        { id: "de-u79l3-dieanzahlung", type: "vocab", front: "die Anzahlung", reading: "dieanzahlung", meaning: "the down payment", example: { jp: "Für das Zimmer will das Hotel eine Anzahlung.", en: "The hotel wants a down payment for the room." }, drill: { jp: "Die Anzahlung ist schon hier", en: "The down payment is already here" }, accept: ["down payment", "the down payment", "the advance payment", "money up front"], hint: "an + zahlen: the first slice, paid up front. A RENTAL deposit is die Kaution." },
        { id: "de-u79l3-derzuschlag", type: "vocab", front: "der Zuschlag", reading: "derzuschlag", meaning: "the surcharge", example: { jp: "Für den schnellen Zug gibt es einen Zuschlag.", en: "There is a surcharge for the fast train." }, drill: { jp: "Der Zuschlag ist nicht hoch", en: "The surcharge is not high" }, accept: ["surcharge", "the surcharge", "extra charge", "the extra charge", "the supplement"], hint: "zu + schlagen: struck on top of the price. der Nachtzuschlag, the night rate." },
        { id: "de-u79l3-dieermassigung", type: "vocab", front: "die Ermäßigung", reading: "dieermassigung", meaning: "the reduction", example: { jp: "Für Schüler gibt es eine Ermäßigung.", en: "There is a reduction for school pupils." }, drill: { jp: "Die Ermäßigung ist sehr klein", en: "The reduction is very small" }, accept: ["reduction", "the reduction", "discount", "the discount", "the concession"], hint: "das Maß = the measure; ermäßigt = reduced. Written with ß." },
        { id: "de-u79l3-derbetrag", type: "vocab", front: "der Betrag", reading: "derbetrag", meaning: "the sum of money", example: { jp: "Der Betrag auf der Rechnung ist zu hoch.", en: "The sum on the bill is too high." }, drill: { jp: "Der Betrag ist schon bezahlt", en: "The sum has already been paid" }, accept: ["sum of money", "the sum of money", "the amount of money", "the figure"], hint: "betragen = to come to. Der Betrag beträgt hundert Euro." },
        { id: "de-u79l3-dieteilzahlung", type: "vocab", front: "die Teilzahlung", reading: "dieteilzahlung", meaning: "the part payment", example: { jp: "Wer nicht alles auf einmal zahlen kann, vereinbart eine Teilzahlung.", en: "Anyone who cannot pay it all at once arranges a part payment." }, drill: { jp: "Die Teilzahlung ist leider nicht möglich", en: "Part payment is unfortunately not possible" }, accept: ["part payment", "the part payment", "instalment payment", "installment", "partial payment"], hint: "der Teil + die Zahlung: paying a piece at a time. die Rate in this lesson is one of the pieces; die Teilzahlung is the arrangement as a whole." },
      ],
    },
    {
      id: "de-u79l4",
      unit: 79,
      lesson: 4,
      title: "Zahlen und mahnen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you owe, when it falls due, and who is liable for the damage.",
      items: [
        { id: "de-u79l4-fallig", type: "vocab", front: "fällig", reading: "fallig", meaning: "due for payment", example: { jp: "Die Rechnung ist am Freitag fällig.", en: "The bill is due on Friday." }, drill: { jp: "Die Rate ist morgen fällig", en: "The instalment is due tomorrow" }, accept: ["due", "due for payment", "payable", "owing"], hint: "When a payment falls due. Also: das war längst fällig, that was long overdue." },
        { id: "de-u79l4-diemahnung", type: "vocab", front: "die Mahnung", reading: "diemahnung", meaning: "the payment reminder", example: { jp: "Nach der Mahnung kommt eine Gebühr.", en: "After the reminder comes a fee." }, drill: { jp: "Die Mahnung kommt mit der Post", en: "The reminder comes with the post" }, accept: ["payment reminder", "the payment reminder", "reminder", "the reminder", "the demand for payment"], hint: "mahnen = to remind sternly. The second Mahnung costs extra money." },
        { id: "de-u79l4-schulden", type: "vocab", front: "schulden", reading: "schulden", meaning: "to owe", example: { jp: "Ich schulde meinem Bruder noch Geld.", en: "I still owe my brother money." }, drill: { jp: "Ich will dir nichts schulden", en: "I don't want to owe you anything" }, accept: ["to owe", "owe", "to be in debt for"], hint: "die Schuld is both the debt and the guilt. Du schuldest mir zehn Euro." },
        { id: "de-u79l4-derschaden", type: "vocab", front: "der Schaden", reading: "derschaden", meaning: "the damage", example: { jp: "Der Schaden am Auto war nicht groß.", en: "The damage to the car was not big." }, drill: { jp: "Der Schaden ist sehr groß", en: "The damage is very big" }, accept: ["damage", "the damage", "harm", "the harm", "the loss"], hint: "Plural die Schäden. es schadet nichts = it does no harm." },
        { id: "de-u79l4-haften", type: "vocab", front: "haften", reading: "haften", meaning: "to be liable", example: { jp: "Für den Schaden muss die Firma haften.", en: "The company has to be liable for the damage." }, drill: { jp: "Der Chef muss hier haften", en: "The boss has to be liable here" }, accept: ["to be liable", "be liable", "to be responsible in law", "to be answerable"], hint: "die Haftung = liability. A building-site sign: Eltern haften für ihre Kinder." },
        { id: "de-u79l4-begleichen", type: "vocab", front: "begleichen", reading: "begleichen", meaning: "to settle a bill", example: { jp: "Bitte begleichen Sie den vollen Betrag bis Ende des Monats.", en: "Please settle the full sum by the end of the month." }, drill: { jp: "Bitte begleichen Sie den Betrag sofort", en: "Please settle the sum immediately" }, accept: ["to settle", "settle", "to pay", "to pay off", "to square"], hint: "The formal word a Mahnung uses instead of bezahlen — it means to make it gleich, level again. Strong verb: beglich, hat beglichen." },
      ],
    },
  ],
};
