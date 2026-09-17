// NO Unit 72 — Stil 1: formelt og uformelt ("Register 1 — polite vs plain") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Register 1 — polite vs plain". Retitled in Norwegian per
// CLAUDE.md → "No front language", and read as FORMAL vs EVERYDAY rather than
// polite vs rude, because that is the distinction Norwegian actually makes.
// Conventions are unit1.js §1–§9.
//
// ⚠ THE THING AN ENGLISH SPEAKER GETS WRONG ABOUT NORWEGIAN REGISTER, and it
// shapes this whole unit: there is no polite YOU. The formal De died out in the
// 1970s and using it now sounds either archaic or sarcastic, so it is NOT taught
// here — a crew that adds it would be teaching a learner to sound strange. What
// Norwegian has instead is a WRITTEN register: a different set of verbs
// (å motta for å få, å utføre for å gjøre, å foreta for å ta), a set of
// e-mail formulas (angående, vedlagt, vennligst), and a spoken register that is
// blunter and shorter than English speakers expect (greit, sånn, masse).
// Two registers, no pronoun.
//
// ⚠ vennligst IS WRITTEN-ONLY and its hint says so. Said out loud to a shop
// assistant it is cold; the spoken form is vær så snill (u2).
// ⚠ eventuelt IS A FALSE FRIEND and its hint says so: it means "if need be",
// never "eventually".
//
// GENDER: en henvendelse — ⚠ -else, MASCULINE. No feminine noun in this unit,
// so there is no en-/ei- note to carry; the four nouns are henvendelse (m),
// and the adjectives/verbs carry the rest.
//
// SCOPE: frozen base u1–u50 plus u63–u71 plus this unit's earlier cards.
// NOT in the base and avoided throughout: et svar, et møte, fornøyd, vennlig,
// selv, en mobil.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT72 = {
  id: "no-u72",
  lang: "no",
  title: "Stil 1: formelt og uformelt",
  order: 72,
  stage: "b1",
  lessons: [
    // Lesson 1: the e-mail. Every one of these six is something a Norwegian
    // reads weekly and says almost never.
    {
      id: "no-u72l1",
      unit: 72,
      lesson: 1,
      title: "Formell e-post",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Write a formal e-mail to an office or a company and sound like you belong there.",
      items: [
        { id: "no-u72l1-angaende", type: "vocab", front: "angående", reading: "angaende", meaning: "regarding", example: { jp: "Angående saken din må vi vente litt.", en: "Regarding your case we have to wait a little." }, accept: ["concerning", "about", "re"], drill: { jp: "Angående saken må vi vente", en: "Regarding the matter we have to wait" }, hint: "The standard subject line of a Norwegian e-mail: Angående søknaden din. A preposition, so a noun follows it directly. In speech you say om (u28) instead." },
        { id: "no-u72l1-vedlagt", type: "vocab", front: "vedlagt", reading: "vedlagt", meaning: "attached", example: { jp: "Vedlagt finner du et skjema.", en: "Attached you will find a form." }, accept: ["enclosed", "attached hereto"], drill: { jp: "Vedlagt finner du et skjema", en: "Attached you will find a form" }, hint: "ved + lagt, the participle of å legge. Opening a sentence with it triggers V2: Vedlagt FINNER du — never Vedlagt du finner." },
        { id: "no-u72l1-informere", type: "vocab", front: "å informere", reading: "ainformere", meaning: "to inform", example: { jp: "Vi informerer om at kontoret er stengt i sommer.", en: "We are informing you that the office is closed this summer." }, accept: ["inform", "to notify", "to let know"], drill: { jp: "Vi pleier å informere alle om dette", en: "We usually inform everyone about this" }, hint: "informerer, informerte — a regular -ere verb. It takes om: informere noen om noe." },
        { id: "no-u72l1-opplyse", type: "vocab", front: "å opplyse", reading: "aopplyse", meaning: "to state", example: { jp: "Han opplyste at han ikke hadde betalt.", en: "He stated that he had not paid." }, accept: ["state", "to disclose", "to give information"], drill: { jp: "Han prøvde å opplyse om saken", en: "He tried to give information about the matter" }, hint: "opp + å lyse, to light up. opplyser, opplyste. On a form you will read vennligst opplys om …, the two formal words of this lesson side by side." },
        { id: "no-u72l1-vennligst", type: "vocab", front: "vennligst", reading: "vennligst", meaning: "please (in writing)", example: { jp: "Vennligst send skjemaet innen fredag.", en: "Please send the form by Friday." }, accept: ["please", "kindly", "please (formal)"], drill: { jp: "Vennligst send skjemaet innen fredag", en: "Please send the form by Friday" }, hint: "vennlig + -st, the superlative ending doing duty as politeness. ⚠ WRITTEN ONLY. Said out loud to a person it sounds cold — in speech Norwegians use vær så snill (u2), or simply nothing at all." },
      ],
    },
    // Lesson 2: asking for something, at the formal end.
    {
      id: "no-u72l2",
      unit: 72,
      lesson: 2,
      title: "Å be om noe",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Make a request of an office or an employer in the register they expect.",
      items: [
        { id: "no-u72l2-beom", type: "vocab", front: "å be om", reading: "abeom", meaning: "to ask for", example: { jp: "Jeg ber om mer tid til å betale.", en: "I am asking for more time to pay." }, accept: ["ask for", "to request"], drill: { jp: "Det er lov å be om hjelp", en: "It is allowed to ask for help" }, hint: "å be (to ask, and also to pray) + om. Irregular: ber, ba, har bedt. be om noe, or be noen om noe." },
        { id: "no-u72l2-henvendeseg", type: "vocab", front: "å henvende seg", reading: "ahenvendeseg", meaning: "to approach", example: { jp: "Du må henvende deg til kommunen.", en: "You have to approach the municipality." }, accept: ["approach", "to contact", "to apply to"], drill: { jp: "Han pleier å henvende seg til sjefen", en: "He usually approaches the boss" }, hint: "hen + å vende (u45) + seg (u12). henvender seg, henvendte seg. ⚠ seg changes with the person — jeg henvender MEG, du henvender DEG; the card shows the dictionary form, which is why the drill is in the third person." },
        { id: "no-u72l2-henvendelse", type: "vocab", front: "en henvendelse", reading: "enhenvendelse", meaning: "an enquiry", example: { jp: "Henvendelsen ble sendt til feil kontor.", en: "The enquiry was sent to the wrong office." }, accept: ["enquiry", "inquiry", "approach", "request"], drill: { jp: "Vi fikk en henvendelse fra kommunen", en: "We got an enquiry from the municipality" }, hint: "⚠ -else, so MASCULINE: henvendelsen. Never ei. It is the word on every Norwegian public-office web page: ved henvendelse til …" },
        { id: "no-u72l2-anmode", type: "vocab", front: "å anmode", reading: "aanmode", meaning: "to request", example: { jp: "Kommunen anmoder alle om å spare strøm.", en: "The municipality requests that everyone save electricity." }, accept: ["request", "to call upon", "to formally ask"], drill: { jp: "Vi pleier å anmode alle om å vente", en: "We usually request that everyone wait" }, hint: "anmoder, anmodet. Very formal, and it is what an INSTITUTION does; a person ber om (the first card of this lesson)." },
        { id: "no-u72l2-tillate", type: "vocab", front: "å tillate", reading: "atillate", meaning: "to allow", example: { jp: "Skolen tillater ikke telefoner i timen.", en: "The school does not allow phones in class." }, accept: ["allow", "to permit", "to let"], drill: { jp: "Det er lett å tillate mye", en: "It is easy to allow a lot" }, hint: "til + å late. tillater, tillot, har tillatt. The noun is en tillatelse — -else, so masculine — and that is what you apply for." },
      ],
    },
    // Lesson 3: the other end. Short, blunt, and what people actually say.
    {
      id: "no-u72l3",
      unit: 72,
      lesson: 3,
      title: "Hverdagslig tale",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Speak the way Norwegians actually speak — short, plain and without the formal words.",
      items: [
        { id: "no-u72l3-greit", type: "vocab", front: "greit", reading: "greit", meaning: "OK (that's fine)", example: { jp: "Greit, vi møtes klokka ni.", en: "Fine, we will meet at nine." }, accept: ["ok", "all right", "okay", "fine", "fine"], drill: { jp: "Det er greit for meg", en: "That is fine by me" }, hint: "The neuter of grei (u31), used alone as a whole answer. Greit! is probably the commonest yes in Norway — and det går greit is \"it is going fine\"." },
        { id: "no-u72l3-kult", type: "vocab", front: "kult", reading: "kult", meaning: "cool (slang)", example: { jp: "Det var kult å se deg igjen.", en: "It was cool to see you again." }, accept: ["cool", "nice", "great", "awesome"], drill: { jp: "Det var kult å se deg", en: "It was cool to see you" }, hint: "The neuter of kul, borrowed straight from English and inflected like a Norwegian adjective. Spoken only." },
        { id: "no-u72l3-skikkelig", type: "vocab", front: "skikkelig", reading: "skikkelig", meaning: "really", example: { jp: "Det var skikkelig kaldt i går.", en: "It was really cold yesterday." }, accept: ["properly", "proper", "seriously"], drill: { jp: "Det var skikkelig kaldt i går", en: "It was really cold yesterday" }, hint: "From en skikk (u50). Two jobs: \"proper\" in front of a noun (en skikkelig middag) and \"really\" in front of an adjective (skikkelig god)." },
        { id: "no-u72l3-ordentlig", type: "vocab", front: "ordentlig", reading: "ordentlig", meaning: "proper", example: { jp: "Nå må du spise en ordentlig middag.", en: "Now you have to eat a proper dinner." }, accept: ["properly", "decent", "real"], drill: { jp: "Vi trenger en ordentlig plan", en: "We need a proper plan" }, hint: "From orden. ⚠ Said OR-den-tli — the d before -lig is silent. Close to skikkelig, but the more neutral of the two." },
        { id: "no-u72l3-masse", type: "vocab", front: "masse", reading: "masse", meaning: "loads of", example: { jp: "Det var masse snø i går.", en: "There was loads of snow yesterday." }, accept: ["lots of", "a lot of", "tons of"], drill: { jp: "Det var masse snø i går", en: "There was loads of snow yesterday" }, hint: "The spoken stand-in for mye and mange (u5, u10): masse penger, masse barn. It is a noun (en masse) doing a quantifier's work." },
      ],
    },
    // Lesson 4: the doublets. Same meaning, two registers — this is the lesson
    // that makes the unit usable rather than decorative.
    {
      id: "no-u72l4",
      unit: 72,
      lesson: 4,
      title: "To ord for det samme",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Swap an everyday verb for its formal twin, and know which one a letter wants.",
      items: [
        { id: "no-u72l4-formell", type: "vocab", front: "formell", reading: "formell", meaning: "formal", example: { jp: "Brevet var formelt og kort.", en: "The letter was formal and short." }, accept: ["official", "ceremonious"], drill: { jp: "Dette er en formell søknad", en: "This is a formal application" }, hint: "Neuter formelt, plural formelle. Note the drill uses formell and the example formelt — that is the ordinary neuter -t, not a different word." },
        { id: "no-u72l4-uformell", type: "vocab", front: "uformell", reading: "uformell", meaning: "informal", example: { jp: "Praten var uformell og kort.", en: "The chat was informal and short." }, accept: ["casual", "relaxed", "unofficial"], drill: { jp: "Dette er en uformell prat", en: "This is an informal chat" }, hint: "u- + formell — the productive u- from u71. Neuter uformelt, plural uformelle." },
        { id: "no-u72l4-motta", type: "vocab", front: "å motta", reading: "amotta", meaning: "to receive", example: { jp: "Vi mottok søknaden din i går.", en: "We received your application yesterday." }, accept: ["receive", "to get (formal)", "to accept"], drill: { jp: "Vi pleier å motta mange søknader", en: "We usually receive many applications" }, hint: "mot + å ta (u13): mottar, mottok, har mottatt. ⚠ THE PAIR: å få (u13) in speech, å motta in writing. A letter is mottatt, never fått, in official Norwegian." },
        { id: "no-u72l4-foreta", type: "vocab", front: "å foreta", reading: "aforeta", meaning: "to undertake", example: { jp: "Banken foretar en ny vurdering av saken.", en: "The bank is undertaking a new assessment of the case." }, accept: ["undertake", "to make (formal)", "to conduct"], drill: { jp: "Vi pleier å foreta en ny vurdering", en: "We usually undertake a new assessment" }, hint: "fore + å ta. foretar, foretok, har foretatt. It nearly always carries a nominalization from u71 — foreta en vurdering, foreta en endring. THIS is what makes formal Norwegian sound formal." },
        { id: "no-u72l4-anse", type: "vocab", front: "å anse", reading: "aanse", meaning: "to regard", example: { jp: "Saken anses som ferdig.", en: "The case is regarded as finished." }, accept: ["regard", "to consider", "to deem"], drill: { jp: "Vi pleier å anse saken som ferdig", en: "We usually regard the matter as finished" }, hint: "anser, anså, har ansett. Takes som: anse noe som noe. ⚠ THE PAIR: å synes (u17) in speech, å anse in writing — and note the example uses the -s passive from u70." },
      ],
    },
  ],
};
