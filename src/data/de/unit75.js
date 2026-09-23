// DE Unit 75 — Recht und Verwaltung (slot: vocabulary 2 (B1)) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// THEME CHOSEN FOR THIS COVERAGE SLOT. Open slot, author's pick, and this one is
// chosen because it is where a learner LIVING in Germany fails first: das Amt.
// Block 1's u61 slot is "Rules, permission, obligation", which in German is the
// modal verbs (duerfen, muessen, verboten, erlaubt) — the permission a person has.
// This unit is the INSTITUTIONS instead: the court, the crime, and the paperwork.
// The two do not overlap at the front level; if a word does collide on merge,
// lower slot wins and u61 keeps it.
// NOT taken, already taught: das Gesetz (u32), das Recht (u32), die Pflicht (u48),
// die Polizei (u7), der Ausweis (u23), die Behoerde (u32), das Formular (u24).
// Pairs inside the unit: only die Klage (not klagen), only der Antrag (not
// beantragen), only die Genehmigung (not genehmigen), only die Anmeldung (not
// anmelden), only die Unterschrift (not unterschreiben) is carded.
// ⚠️ `der Richter` shares a stem with `richtig` (u2) and the collision checker
// flags it. It is a different lexeme — Richter is from richten (to judge), richtig
// is from recht — so it is carded; flagged here so the lead does not have to
// re-derive it.
// FREE: Anna, Thomas, Lena, Max, Schmidt, Berlin, Hamburg, Deutschland, Kollegen, Jahre, Firmen, sein
export const DE_UNIT75 = {
  id: "de-u75",
  lang: "de",
  title: "Recht und Verwaltung",
  order: 75,
  stage: "b1",
  lessons: [
    {
      id: "de-u75l1",
      unit: 75,
      lesson: 1,
      title: "Vor Gericht",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a court case: the court, the judge, the lawyer, the verdict, the witness, the lawsuit.",
      items: [
        { id: "de-u75l1-dasgericht", type: "vocab", front: "das Gericht", reading: "dasgericht", meaning: "the court", example: { jp: "Das Gericht in der Stadt ist am Montag zu.", en: "The court in the city is closed on Monday." }, drill: { jp: "Das Gericht liegt in der Stadt", en: "The court is in the city" }, accept: ["court", "the court", "the court of law", "the dish"], hint: "Also a dish of food: ein warmes Gericht. Same word, two lives." },
        { id: "de-u75l1-derrichter", type: "vocab", front: "der Richter", reading: "derrichter", meaning: "the judge", example: { jp: "Der Richter hört zuerst den Anwalt und dann den Zeugen.", en: "The judge listens first to the lawyer and then to the witness." }, drill: { jp: "Der Richter spricht sehr ruhig", en: "The judge speaks very quietly" }, accept: ["judge", "the judge"], hint: "From richten, to judge. Nothing to do with richtig (u2), which is from recht." },
        { id: "de-u75l1-deranwalt", type: "vocab", front: "der Anwalt", reading: "deranwalt", meaning: "the lawyer", example: { jp: "Ohne Anwalt geht bei einer großen Klage fast nichts.", en: "Without a lawyer almost nothing works in a big lawsuit." }, drill: { jp: "Der Anwalt kommt am Morgen", en: "The lawyer comes in the morning" }, accept: ["lawyer", "the lawyer", "the attorney", "the solicitor"], hint: "Plural with umlaut: die Anwälte. The female form is die Anwältin." },
        { id: "de-u75l1-dasurteil", type: "vocab", front: "das Urteil", reading: "dasurteil", meaning: "the verdict", example: { jp: "Das Urteil vom Gericht kommt in zwei Wochen.", en: "The court's verdict comes in two weeks." }, drill: { jp: "Das Urteil war sehr hart", en: "The verdict was very harsh" }, accept: ["verdict", "the verdict", "the judgement", "the sentence", "the opinion"], hint: "Also a personal judgement: sich ein Urteil bilden." },
        { id: "de-u75l1-derzeuge", type: "vocab", front: "der Zeuge", reading: "derzeuge", meaning: "the witness", example: { jp: "Der Zeuge hat das Verbrechen in der Nacht erlebt.", en: "The witness lived through the crime during the night." }, drill: { jp: "Der Zeuge sagt nichts mehr", en: "The witness says nothing more" }, accept: ["witness", "the witness"], hint: "Weak noun: den Zeugen, dem Zeugen. The female form is die Zeugin." },
        { id: "de-u75l1-dieklage", type: "vocab", front: "die Klage", reading: "dieklage", meaning: "the lawsuit", example: { jp: "Die Klage gegen die Firma kommt aufgrund der Verschmutzung.", en: "The lawsuit against the firm comes on account of the pollution." }, drill: { jp: "Die Klage kommt vor das Gericht", en: "The lawsuit is coming before the court" }, accept: ["lawsuit", "the lawsuit", "the claim", "the complaint", "the action"], hint: "From klagen, to sue or to lament. Do not mix it with die Beschwerden (u67)." },
      ],
    },
    {
      id: "de-u75l2",
      unit: 75,
      lesson: 2,
      title: "Verbrechen und Strafe",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a crime and what follows: a crime, the offender, the victim, the punishment, to convict, a regulation.",
      items: [
        { id: "de-u75l2-dasverbrechen", type: "vocab", front: "das Verbrechen", reading: "dasverbrechen", meaning: "the crime", example: { jp: "Nach dem Verbrechen in der Nacht hatte die ganze Stadt Angst.", en: "After the crime in the night the whole city was afraid." }, drill: { jp: "Das Verbrechen war in der Nacht", en: "The crime was during the night" }, accept: ["crime", "the crime", "the offence", "the felony"], hint: "From brechen, to break. A serious one — a small offence is eine Straftat." },
        { id: "de-u75l2-dertater", type: "vocab", front: "der Täter", reading: "dertater", meaning: "the offender", example: { jp: "Der Täter war am Abend noch in der Wohnung von dem Opfer.", en: "The offender was still in the victim's flat in the evening." }, drill: { jp: "Der Täter wartet vor dem Gericht", en: "The offender is waiting in front of the court" }, accept: ["offender", "the offender", "the perpetrator", "the culprit"], hint: "From die Tat, the deed. The female form is die Täterin." },
        { id: "de-u75l2-dasopfer", type: "vocab", front: "das Opfer", reading: "dasopfer", meaning: "the victim", example: { jp: "Das Opfer hat vom Gericht einen Anwalt.", en: "The victim has a lawyer from the court." }, drill: { jp: "Das Opfer war ein junger Mann", en: "The victim was a young man" }, accept: ["victim", "the victim", "the sacrifice", "the casualty"], hint: "Also a sacrifice you make: ein Opfer bringen." },
        { id: "de-u75l2-verurteilen", type: "vocab", front: "verurteilen", reading: "verurteilen", meaning: "to convict", example: { jp: "Ohne einen Zeugen kann das Gericht den Mann nicht verurteilen.", en: "Without a witness the court cannot convict the man." }, drill: { jp: "Das Gericht kann den Mann verurteilen", en: "The court can convict the man" }, accept: ["to convict", "to sentence", "to condemn"], hint: "ver + Urteil. Also to condemn something morally: eine Tat verurteilen." },
        { id: "de-u75l2-diepolizei", type: "vocab", front: "die Polizei", reading: "diepolizei", meaning: "the police", example: { jp: "Die Polizei war schnell am Bahnhof, weil ein Zeuge angerufen hatte.", en: "The police were quickly at the station, because a witness had called." }, drill: { jp: "Die Polizei kommt sehr schnell", en: "The police come very quickly" }, accept: ["police", "the police", "police force"], hint: "Singular in German, plural in English: Die Polizei ist da = the police are here. One officer is der Polizist." },
        { id: "de-u75l2-stehlen", type: "vocab", front: "stehlen", reading: "stehlen", meaning: "to steal", example: { jp: "Wer im Geschäft stiehlt, wird verurteilt und muss eine Strafe zahlen.", en: "Whoever steals in a shop is convicted and has to pay a fine." }, drill: { jp: "Die Täter stehlen oft Handys", en: "The offenders often steal mobile phones" }, accept: ["to steal", "steal", "to pinch", "to nick"], hint: "Strong verb with a vowel change: er stiehlt, er stahl, er hat gestohlen. der Diebstahl is the theft itself." },
      ],
    },
    {
      id: "de-u75l3",
      unit: 75,
      lesson: 3,
      title: "Auf dem Amt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get through a German office: the office, an application, a permit, the registration, the official, a certificate.",
      items: [
        { id: "de-u75l3-dasamt", type: "vocab", front: "das Amt", reading: "dasamt", meaning: "the office", example: { jp: "Ohne Termin wartet man auf dem Amt sehr lange.", en: "Without an appointment you wait a very long time at the office." }, drill: { jp: "Das Amt liegt in der Stadt", en: "The office is in the city" }, accept: ["office", "the office", "the authority", "the government office", "the post"], hint: "A public office, and the post a person holds. die Behörde (u32) is the whole body." },
        { id: "de-u75l3-diegenehmigung", type: "vocab", front: "die Genehmigung", reading: "diegenehmigung", meaning: "the permit", example: { jp: "Ohne Genehmigung vom Amt kann die Firma nicht arbeiten.", en: "Without a permit from the office the firm cannot operate." }, drill: { jp: "Die Genehmigung kommt in zwei Wochen", en: "The permit comes in two weeks" }, accept: ["permit", "the permit", "the permission", "the approval", "the authorisation"], hint: "From genehmigen. The paper, not the feeling — that is die Erlaubnis." },
        { id: "de-u75l3-dieanmeldung", type: "vocab", front: "die Anmeldung", reading: "dieanmeldung", meaning: "the registration", example: { jp: "In der neuen Stadt ist die Anmeldung auf dem Amt sehr wichtig.", en: "In the new city the registration at the office is very important." }, drill: { jp: "Die Anmeldung dauert eine Stunde", en: "The registration takes an hour" }, accept: ["registration", "the registration", "the sign-up", "the reception", "the appointment"], hint: "Very German: you must register your address. Also the front desk of an office." },
        { id: "de-u75l3-derbeamte", type: "vocab", front: "der Beamte", reading: "derbeamte", meaning: "the official", example: { jp: "Der Beamte am Termin war förmlich, aber sehr taktvoll.", en: "The official at the appointment was formal but very tactful." }, drill: { jp: "Der Beamte arbeitet seit Jahren hier", en: "The official has worked here for years" }, accept: ["official", "the official", "the civil servant", "the officer"], hint: "From das Amt. Declines like an adjective: ein Beamter, der Beamte, die Beamtin." },
        { id: "de-u75l3-diebescheinigung", type: "vocab", front: "die Bescheinigung", reading: "diebescheinigung", meaning: "the certificate", example: { jp: "Für die Kasse braucht man eine Bescheinigung vom Arzt.", en: "For the health fund you need a certificate from the doctor." }, drill: { jp: "Die Bescheinigung kommt mit der Post", en: "The certificate comes with the post" }, accept: ["certificate", "the certificate", "the confirmation", "the attestation", "the note"], hint: "Four syllables: be-schei-ni-gung. You will need one for almost everything." },
        { id: "de-u75l3-beantragen", type: "vocab", front: "beantragen", reading: "beantragen", meaning: "to apply for", example: { jp: "Den neuen Pass müssen Sie selbst auf dem Amt beantragen.", en: "You have to apply for the new passport yourself at the office." }, drill: { jp: "Den Pass müssen Sie selbst beantragen", en: "You have to apply for the passport yourself" }, accept: ["to apply for", "apply for", "to request", "to put in for", "to file for"], hint: "From der Antrag (u61): to put the form in. Inseparable, so the participle is beantragt. You beantragen a thing, you bewerben yourself for a job." },
      ],
    },
    {
      id: "de-u75l4",
      unit: 75,
      lesson: 4,
      title: "Fristen und Formalitäten",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the paperwork itself: a deadline, valid, responsible for, a signature, a stamp, a file.",
      items: [
        { id: "de-u75l4-zustandig", type: "vocab", front: "zuständig", reading: "zustandig", meaning: "responsible for", example: { jp: "Für die Genehmigung ist der Beamte vom Amt zuständig.", en: "The official from the office is responsible for the permit." }, drill: { jp: "Der Beamte ist für den Antrag zuständig", en: "The official is responsible for the application" }, accept: ["responsible for", "in charge of", "competent", "the right person for"], hint: "zuständig für etwas sein — the first thing an office will tell you it is not." },
        { id: "de-u75l4-dieunterschrift", type: "vocab", front: "die Unterschrift", reading: "dieunterschrift", meaning: "the signature", example: { jp: "Ohne die Unterschrift vom Chef ist der Vertrag nicht gültig.", en: "Without the boss's signature the contract is not valid." }, drill: { jp: "Die Unterschrift steht ganz unten", en: "The signature is right at the bottom" }, accept: ["signature", "the signature"], hint: "unter + Schrift: the writing UNDER the text. The verb is unterschreiben." },
        { id: "de-u75l4-derstempel", type: "vocab", front: "der Stempel", reading: "derstempel", meaning: "the stamp", example: { jp: "Mit dem Stempel vom Amt ist die Bescheinigung gültig.", en: "With the stamp from the office the certificate is valid." }, drill: { jp: "Der Stempel vom Amt ist wichtig", en: "The stamp from the office is important" }, accept: ["stamp", "the stamp", "the seal", "the rubber stamp"], hint: "The ink kind. A postage stamp is die Briefmarke — a different word entirely." },
        { id: "de-u75l4-dieakte", type: "vocab", front: "die Akte", reading: "dieakte", meaning: "the case file", example: { jp: "Die Akte über den Fall liegt seit Jahren im Gericht.", en: "The file on the case has been at the court for years." }, drill: { jp: "Die Akte liegt auf dem Tisch", en: "The file is on the table" }, accept: ["file", "the file", "the record", "the dossier", "record"], hint: "Usually plural: die Akten. zu den Akten legen = to file and forget." },
        { id: "de-u75l4-diebearbeitung", type: "vocab", front: "die Bearbeitung", reading: "diebearbeitung", meaning: "the processing", example: { jp: "Die Bearbeitung dauert vier Wochen, deshalb sollten Sie sehr früh kommen.", en: "The processing takes four weeks, so you should come very early." }, drill: { jp: "Die Bearbeitung dauert vier Wochen", en: "The processing takes four weeks" }, accept: ["processing", "the processing", "handling", "the handling"], hint: "From bearbeiten, to work on something. On a German form, die Bearbeitungszeit is how long you wait." },
        { id: "de-u75l4-dievollmacht", type: "vocab", front: "die Vollmacht", reading: "dievollmacht", meaning: "the power of attorney", example: { jp: "Mit einer Vollmacht kann der Sohn das Konto für die Mutter führen.", en: "With a power of attorney the son can run the account for his mother." }, drill: { jp: "Die Vollmacht liegt bei der Behörde", en: "The power of attorney is with the authority" }, accept: ["power of attorney", "the power of attorney", "written authority", "proxy", "authorisation"], hint: "voll + die Macht: full power, given in writing so that somebody may act for you." },
      ],
    },
  ],
};
