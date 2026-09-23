// DE Unit 61 — Regeln, Erlaubnis, Pflicht (slot: rules, permission, obligation) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: living inside rules. A2 already has die Regel, die Pflicht, das Gesetz,
// das Recht, dürfen, müssen, sollen, erlauben, verbieten, gestatten, die Behörde,
// der Ausweis — the modal verbs and the bare nouns. What B1 adds is the PAPER
// (l1), the consequences of not complying (l2), the everyday signs you actually
// read (l3), and the legal story you meet in the news (l4).
// ⚠️ MODAL VERBS ARE NOT RE-TAUGHT and no Konjunktiv II is carded here (dürfte,
// müsste, könnte) — that is u69–u71's grammar, and putting a second mastery track
// on a taught modal would teach the learner nothing new. This unit stays lexical.
// ⚠️ das Gericht IS A DELIBERATE HOMOGRAPH. das Hauptgericht (the main course) is
// already taught, so a learner meeting das Gericht = the court will assume a
// mistake. The hint names the collision and explains the shared root rather than
// hiding it; front-uniqueness passes because the strings differ.
// ⚠️ die Erlaubnis, das Verbot and die Verpflichtung were all REJECTED as fronts —
// erlauben, verbieten and die Pflicht are taught, so each is one lexeme with two
// mastery tracks. die Genehmigung, die Vorschrift and die Verantwortung took
// those slots instead, all from unrelated stems.
// FREE: Gesetze
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT61 = {
  id: "de-u61",
  lang: "de",
  title: "Regeln, Erlaubnis, Pflicht",
  order: 61,
  stage: "b1",
  lessons: [
    {
      id: "de-u61l1",
      unit: 61,
      lesson: 1,
      title: "Was erlaubt ist",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deal with officialdom: ask for a permit, read a regulation, submit an application, check it is still valid, sign it, and take notice of what it says.",
      items: [
        { id: "de-u61l1-dievorschrift", type: "vocab", front: "die Vorschrift", reading: "dievorschrift", meaning: "the regulation", example: { jp: "Die Vorschrift ist sehr alt, aber sie gilt in der Firma immer noch.", en: "The regulation is very old, but it still applies in the company." }, drill: { jp: "Die Vorschrift gilt seit dem Sommer", en: "The regulation has applied since the summer" }, accept: ["regulation", "the regulation", "rule", "the rule", "instruction", "the instruction", "requirement"], hint: "vor + schreiben: what is written out in front of you to follow. Harder than die Regel — it comes from an authority." },
        { id: "de-u61l1-derantrag", type: "vocab", front: "der Antrag", reading: "derantrag", meaning: "the request", example: { jp: "Der Antrag muss bis Freitag bei der Behörde sein, sonst ist er zu spät.", en: "The request has to be at the authority by Friday, otherwise it is too late." }, drill: { jp: "Der Antrag liegt bei der Behörde", en: "The request is with the authority" }, accept: ["application", "the application", "request", "the request", "proposal", "the proposal", "motion"], hint: "an + tragen: to carry a request to somebody. einen Antrag stellen = to submit an application." },
        { id: "de-u61l1-unterschreiben", type: "vocab", front: "unterschreiben", reading: "unterschreiben", meaning: "to sign", example: { jp: "Sie müssen hier unterschreiben, sonst kann die Behörde nichts machen.", en: "You have to sign here, otherwise the authority can't do anything." }, drill: { jp: "Sie müssen hier bitte unterschreiben", en: "Please sign here" }, accept: ["to sign", "sign", "to put your signature to", "to endorse"], hint: "unter + schreiben: to write underneath. INSEPARABLE — ich unterschreibe, never ich schreibe unter." },
        { id: "de-u61l1-beachten", type: "vocab", front: "beachten", reading: "beachten", meaning: "to observe", example: { jp: "Bitte beachten Sie die Vorschrift, sonst gibt es später große Probleme.", en: "Please observe the regulation, otherwise there will be big problems later." }, drill: { jp: "Wir müssen die Regeln beachten", en: "We have to observe the rules" }, accept: ["to observe", "observe", "to heed", "heed", "to follow", "follow", "to pay attention to", "to take note of", "to comply with"], hint: "be- + achten (to pay heed). Bitte beachten Sie… is how nearly every German sign and notice begins." },
        { id: "de-u61l1-diezulassung", type: "vocab", front: "die Zulassung", reading: "diezulassung", meaning: "the licence", example: { jp: "Ohne Zulassung darf das Auto nicht auf die Straße, das ist die Vorschrift.", en: "Without a licence the car may not go on the road — that is the regulation." }, drill: { jp: "Die Zulassung ist sehr teuer", en: "The licence is very expensive" }, accept: ["licence", "the licence", "license", "registration", "the registration", "approval"], hint: "From zulassen, to allow in. Of a car, a doctor or a medicine — official permission to operate." },
        { id: "de-u61l1-vorlegen", type: "vocab", front: "vorlegen", reading: "vorlegen", meaning: "to produce on request", example: { jp: "Sie müssen den Ausweis vorlegen, sonst kann die Behörde nichts machen.", en: "You have to produce your ID, otherwise the authority can't do anything." }, drill: { jp: "Sie müssen den Ausweis vorlegen", en: "You have to produce your ID" }, accept: ["to produce on request", "to produce", "produce", "to present", "present", "to show"], hint: "vor + legen: to lay it out in front of whoever asked. Separable: er legt den Pass vor." },
      ],
    },
    {
      id: "de-u61l2",
      unit: 61,
      lesson: 2,
      title: "Was man muss",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle duty and consequence: whose responsibility it is, the fine, the fee, keeping to a deadline, whose fault it was, and what is absolutely required.",
      items: [
        { id: "de-u61l2-dieverantwortung", type: "vocab", front: "die Verantwortung", reading: "dieverantwortung", meaning: "the responsibility", example: { jp: "Die Verantwortung liegt beim Chef, auch wenn er an dem Tag im Urlaub war.", en: "The responsibility lies with the boss, even if he was on holiday that day." }, drill: { jp: "Die Verantwortung liegt beim Chef", en: "The responsibility lies with the boss" }, accept: ["responsibility", "the responsibility", "accountability", "the accountability"], hint: "From antworten: the person who has to answer for it. Verantwortung übernehmen = to take responsibility." },
        { id: "de-u61l2-diestrafe", type: "vocab", front: "die Strafe", reading: "diestrafe", meaning: "the punishment", example: { jp: "Die Strafe war hoch, obwohl er sonst immer sehr vorsichtig fährt.", en: "The fine was high, although he otherwise always drives very carefully." }, drill: { jp: "Die Strafe kostet ihn viel Geld", en: "The fine costs him a lot of money" }, accept: ["punishment", "the punishment", "penalty", "the penalty", "fine", "the fine", "sentence"], hint: "A fine and a punishment in one word: eine Strafe zahlen. bestrafen = to punish." },
        { id: "de-u61l2-einhalten", type: "vocab", front: "einhalten", reading: "einhalten", meaning: "to comply with", example: { jp: "Wir müssen die Frist einhalten, sonst gibt es für die Firma eine Strafe.", en: "We have to meet the deadline, otherwise there is a fine for the company." }, drill: { jp: "Wir müssen die Frist einhalten", en: "We have to meet the deadline" }, accept: ["to comply with", "comply with", "to keep to", "keep to", "to observe", "to meet", "to abide by"], hint: "ein + halten: to hold to something. eine Frist einhalten, ein Versprechen einhalten. Separable: wir halten sie ein." },
        { id: "de-u61l2-dieschuld", type: "vocab", front: "die Schuld", reading: "dieschuld", meaning: "the fault", example: { jp: "Die Schuld liegt ganz bei mir, weil ich den Termin vergessen habe.", en: "The fault lies entirely with me, because I forgot the appointment." }, drill: { jp: "Die Schuld liegt bei mir", en: "The fault lies with me" }, accept: ["fault", "the fault", "blame", "the blame", "guilt", "the guilt", "debt", "the debt"], hint: "Fault, guilt and debt at once. Ich bin schuld = it's my fault; Schulden in the plural = money you owe." },
        { id: "de-u61l2-unbedingt", type: "vocab", front: "unbedingt", reading: "unbedingt", meaning: "absolutely", example: { jp: "Du musst unbedingt den Ausweis zeigen, sonst hilft dir dort niemand.", en: "You absolutely have to show your ID, otherwise nobody there will help you." }, drill: { jp: "Du musst unbedingt den Ausweis zeigen", en: "You absolutely must show your ID" }, accept: ["absolutely", "definitely", "without fail", "by all means", "at all costs", "really"], hint: "un + bedingt (conditional): with no conditions attached. Unbedingt! on its own = absolutely!" },
        { id: "de-u61l2-untersagen", type: "vocab", front: "untersagen", reading: "untersagen", meaning: "to prohibit", example: { jp: "Das Rauchen ist in der ganzen Firma streng untersagt.", en: "Smoking is strictly prohibited in the whole company." }, drill: { jp: "Die Regeln untersagen das Rauchen hier", en: "The rules prohibit smoking here" }, accept: ["to prohibit", "prohibit", "to forbid", "to ban", "to bar"], hint: "The official word for verbieten. You meet it as a sign: Zutritt untersagt. Inseparable, so the past participle is untersagt with no ge-." },
      ],
    },
    {
      id: "de-u61l3",
      unit: 61,
      lesson: 3,
      title: "Verboten und erlaubt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the signs and rules around you: what a notice says, smoking, noise, keeping order, preventing trouble and not disturbing people.",
      items: [
        { id: "de-u61l3-dasschild", type: "vocab", front: "das Schild", reading: "dasschild", meaning: "the sign", example: { jp: "Auf dem Schild steht, dass man hier am Wochenende nicht parken darf.", en: "The sign says that you may not park here at the weekend." }, drill: { jp: "Das Schild steht an der Straße", en: "The sign is by the road" }, accept: ["sign", "the sign", "notice", "the notice", "plate", "the plate", "shield"], hint: "Plural Schilder. Also a shield, which is where the word came from — a flat thing held up to be seen." },
        { id: "de-u61l3-rauchen", type: "vocab", front: "rauchen", reading: "rauchen", meaning: "to smoke", example: { jp: "Hier darf man nicht rauchen, aber im Garten ist es erlaubt.", en: "You may not smoke here, but in the garden it is allowed." }, drill: { jp: "Hier darf man nicht rauchen", en: "You may not smoke here" }, accept: ["to smoke", "smoke"], hint: "der Rauch is the smoke itself. Rauchen verboten is on half the signs in the country." },
        { id: "de-u61l3-derlarm", type: "vocab", front: "der Lärm", reading: "derlarm", meaning: "the noise", example: { jp: "Der Lärm von der Straße ist so laut, dass ich nachts nicht schlafen kann.", en: "The noise from the street is so loud that I can't sleep at night." }, drill: { jp: "Der Lärm stört die ganze Straße", en: "The noise disturbs the whole street" }, accept: ["noise", "the noise", "din", "the din", "racket", "the racket"], hint: "UNWANTED noise only. A sound you like is der Klang; a neutral one is das Geräusch. Lärm machen = to make a racket." },
        { id: "de-u61l3-verhindern", type: "vocab", front: "verhindern", reading: "verhindern", meaning: "to prevent", example: { jp: "Wir konnten den Streit nicht verhindern, obwohl wir es lange versucht haben.", en: "We couldn't prevent the quarrel, although we tried for a long time." }, drill: { jp: "Wir wollen den Streit verhindern", en: "We want to prevent the quarrel" }, accept: ["to prevent", "prevent", "to stop", "stop", "to avert", "to avoid"], hint: "ver- + hindern (to hinder). Inseparable. Different from vermeiden (to avoid), which is about keeping away from a thing." },
        { id: "de-u61l3-dieordnung", type: "vocab", front: "die Ordnung", reading: "dieordnung", meaning: "the order", example: { jp: "In der Küche muss Ordnung sein, sonst findet am Morgen niemand etwas.", en: "There has to be order in the kitchen, otherwise nobody finds anything in the morning." }, drill: { jp: "Die Ordnung hilft bei der Arbeit", en: "Order helps with the work" }, accept: ["order", "the order", "tidiness", "the tidiness", "system", "the system"], hint: "From ordentlich, which you already have. In Ordnung! = OK, fine — one of the commonest German replies." },
        { id: "de-u61l3-storen", type: "vocab", front: "stören", reading: "storen", meaning: "to disturb", example: { jp: "Bitte stören Sie ihn jetzt nicht, weil er die ganze Nacht gearbeitet hat.", en: "Please don't disturb him now, because he worked all night." }, drill: { jp: "Die Nachbarn stören uns sehr", en: "The neighbours disturb us a lot" }, accept: ["to disturb", "disturb", "to bother", "bother", "to interrupt", "to annoy"], hint: "Störe ich? = am I interrupting? die Störung is the disturbance, and also a fault on a line." },
      ],
    },
    {
      id: "de-u61l4",
      unit: 61,
      lesson: 4,
      title: "Versprechen und Verstoß",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Take on an obligation and name a breach of one: promise something, say whether it is voluntary or binding, consent to it, and call a violation what it is.",
      items: [
        { id: "de-u61l4-dieaussage", type: "vocab", front: "die Aussage", reading: "dieaussage", meaning: "the statement", example: { jp: "Die Aussage des Zeugen war wichtig, weil sonst niemand dort war.", en: "The witness's statement was important, because nobody else was there." }, drill: { jp: "Die Aussage hilft dem Anwalt", en: "The statement helps the lawyer" }, accept: ["statement", "the statement", "testimony", "the testimony", "evidence", "the evidence", "assertion"], hint: "aus + sagen: what you say out. In court it is testimony; in ordinary German it is the point a sentence makes." },
        { id: "de-u61l4-versprechen", type: "vocab", front: "versprechen", reading: "versprechen", meaning: "to promise", example: { jp: "Er hat versprochen, am Montag zu helfen, aber er ist nicht gekommen.", en: "He promised to help on Monday, but he didn't come." }, drill: { jp: "Wir können das nicht versprechen", en: "We can't promise that" }, accept: ["to promise", "promise", "to give your word"], hint: "ver- + sprechen: to speak yourself into an obligation. sich versprechen is something else — to misspeak." },
        { id: "de-u61l4-freiwillig", type: "vocab", front: "freiwillig", reading: "freiwillig", meaning: "voluntary", example: { jp: "Die Arbeit am Samstag ist freiwillig, aber die meisten Kollegen kommen.", en: "The work on Saturday is voluntary, but most colleagues come." }, drill: { jp: "Die Arbeit ist völlig freiwillig", en: "The work is completely voluntary" }, accept: ["voluntary", "voluntarily", "optional", "of your own free will"], hint: "frei + der Wille: by free will. Its opposite here is die Pflicht." },
        { id: "de-u61l4-verbindlich", type: "vocab", front: "verbindlich", reading: "verbindlich", meaning: "binding", example: { jp: "Der Termin ist jetzt verbindlich, deshalb müssen wir ihn einhalten.", en: "The appointment is binding now, so we have to keep to it." }, drill: { jp: "Der Termin ist jetzt verbindlich", en: "The appointment is binding now" }, accept: ["binding", "obligatory", "firm", "committal"], hint: "From binden, to bind. eine verbindliche Zusage = a promise you cannot take back. Of a person it means obliging." },
        { id: "de-u61l4-einwilligen", type: "vocab", front: "einwilligen", reading: "einwilligen", meaning: "to consent", example: { jp: "Die Eltern müssen einwilligen, weil das Kind noch zu jung ist.", en: "The parents have to consent, because the child is still too young." }, drill: { jp: "Die Eltern müssen erst einwilligen", en: "The parents have to consent first" }, accept: ["to consent", "consent", "to give consent", "to approve"], hint: "ein + willigen, from der Wille: to let your will go in with it. in etwas einwilligen. Separable." },
        { id: "de-u61l4-derverstoss", type: "vocab", front: "der Verstoß", reading: "derverstoss", meaning: "the violation", example: { jp: "Ein Verstoß gegen die Vorschrift kostet eine Strafe, das steht im Gesetz.", en: "A violation of the regulation costs a fine — it says so in the law." }, drill: { jp: "Der Verstoß kostet eine Strafe", en: "The violation costs a fine" }, accept: ["violation", "the violation", "breach", "the breach", "infringement", "offence"], hint: "From verstoßen gegen, to offend against. It has ß, so the reading is written with ss." },
      ],
    },
  ],
};
