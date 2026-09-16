// DE Unit 56 — Arbeit und Ablauf (slot: work and process) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: work as a PROCESS, not as a job title. A2 already teaches arbeiten, der
// Beruf, die Firma, der Chef, das Gehalt, der Vertrag, kündigen, sich bewerben,
// die Bewerbung, das Praktikum, der Lebenslauf, das Vorstellungsgespräch, die
// Besprechung, die Abteilung, der Kollege, die Aufgabe, der Termin, erledigen —
// i.e. how you GET a job. This unit is what happens once you have one: the order
// things run in (l1), the paperwork (l2), getting to an agreement with other
// people (l3), and judging the result (l4).
// ⚠️ THREE REFLEXIVE FRONTS HERE AND THEIR DRILLS ARE THE FIDDLY ONES. sich
// einigen, sich durchsetzen and sich lohnen must each appear with sich directly
// in front of the infinitive or findWholeWord misses them — so the drills are
// "Hier kann man sich einigen", "Hier muss man sich durchsetzen", "Das kann sich
// lohnen". "Wir müssen uns einigen" is natural German and a silent miss.
// FREE: Rechnungen, Englisch, Projekt, Berge
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT56 = {
  id: "de-u56",
  lang: "de",
  title: "Arbeit und Ablauf",
  order: 56,
  stage: "b1",
  lessons: [
    {
      id: "de-u56l1",
      unit: 56,
      lesson: 1,
      title: "Schritt für Schritt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a job runs from end to end: the step, the order things happen in, what comes first and what follows, and the deadline it has to meet.",
      items: [
        { id: "de-u56l1-derschritt", type: "vocab", front: "der Schritt", reading: "derschritt", meaning: "the step", example: { jp: "Der Schritt war klein, aber er hat uns sehr viel Zeit gespart.", en: "The step was small, but it saved us a great deal of time." }, drill: { jp: "Der Schritt kostet viel Zeit", en: "The step costs a lot of time" }, accept: ["step", "the step", "stride", "the stride", "move", "the move"], hint: "From schreiten, to stride. Schritt für Schritt = step by step — for walking and for any process." },
        { id: "de-u56l1-diereihenfolge", type: "vocab", front: "die Reihenfolge", reading: "diereihenfolge", meaning: "the sequence", example: { jp: "Die Reihenfolge ist wichtig, denn ohne Mehl kann man nicht backen.", en: "The sequence matters, because without flour you can't bake." }, drill: { jp: "Die Reihenfolge steht in der Anleitung", en: "The sequence is in the instructions" }, accept: ["order", "the order", "sequence", "the sequence", "succession", "the succession"], hint: "die Reihe (the row) + die Folge (the sequence, u52): the order things follow one another in." },
        { id: "de-u56l1-zunachst", type: "vocab", front: "zunächst", reading: "zunachst", meaning: "to begin with", example: { jp: "Zunächst lesen wir die Anleitung, dann stellen wir das Regal zusammen.", en: "To begin with we read the instructions, then we put the shelf together." }, drill: { jp: "Zunächst lesen wir die Anleitung", en: "To begin with we read the instructions" }, accept: ["first of all", "first", "initially", "to begin with", "at first", "for now"], hint: "zu + nächst (nearest): take the nearest thing first. A shade more formal than zuerst, which you already know." },
        { id: "de-u56l1-anschliessend", type: "vocab", front: "anschließend", reading: "anschliessend", meaning: "next", example: { jp: "Wir essen zuerst, anschließend gehen wir zusammen ins Museum.", en: "We eat first; next we go to the museum together." }, drill: { jp: "Anschließend gehen wir ins Museum", en: "Next we go to the museum" }, accept: ["afterwards", "after that", "subsequently", "then", "following that"], hint: "From anschließen (to connect): what joins straight on with no gap. The written partner of danach. ß, so the reading is written ss." },
        { id: "de-u56l1-diefrist", type: "vocab", front: "die Frist", reading: "diefrist", meaning: "the deadline", example: { jp: "Die Frist läuft am Freitag ab, deshalb arbeiten wir heute länger.", en: "The deadline runs out on Friday, so we're working longer today." }, drill: { jp: "Die Frist läuft am Freitag ab", en: "The deadline runs out on Friday" }, accept: ["deadline", "the deadline", "time limit", "the time limit", "period", "the period", "notice period"], hint: "eine Frist einhalten = to meet a deadline (einhalten is u61). Also the notice period on a contract: die Kündigungsfrist." },
        { id: "de-u56l1-durchfuhren", type: "vocab", front: "durchführen", reading: "durchfuhren", meaning: "to carry out", example: { jp: "Wir führen die Umfrage im Herbst durch, weil dann mehr Gäste kommen.", en: "We're carrying out the survey in autumn, because more guests come then." }, drill: { jp: "Wir wollen die Umfrage durchführen", en: "We want to carry out the survey" }, accept: ["to carry out", "carry out", "to conduct", "conduct", "to perform", "to implement"], hint: "durch + führen (u52): to lead a thing all the way through. Separable — wir führen es durch." },
      ],
    },
    {
      id: "de-u56l2",
      unit: 56,
      lesson: 2,
      title: "Im Büro",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the paperwork side of a job: the documents, the assignment, who is responsible, which area it falls in, and which shift you are on.",
      items: [
        { id: "de-u56l2-dieunterlagen", type: "vocab", front: "die Unterlagen", reading: "dieunterlagen", meaning: "the documents", example: { jp: "Die Unterlagen für die Bewerbung liegen schon auf dem Tisch.", en: "The documents for the application are already lying on the table." }, drill: { jp: "Die Unterlagen liegen auf dem Tisch", en: "The documents are on the table" }, accept: ["documents", "the documents", "paperwork", "the paperwork", "papers", "the papers", "files"], hint: "Almost always plural. unter + legen: what you lay underneath a case to hold it up." },
        { id: "de-u56l2-derauftrag", type: "vocab", front: "der Auftrag", reading: "derauftrag", meaning: "the assignment", example: { jp: "Der Auftrag kam am Montag, deshalb hatten wir sehr wenig Zeit.", en: "The assignment came on Monday, so we had very little time." }, drill: { jp: "Der Auftrag kommt aus dem Ausland", en: "The assignment comes from abroad" }, accept: ["assignment", "the assignment", "order", "the order", "job", "the job", "commission", "task", "the task"], hint: "auf + tragen (to carry): what is laid on you to do. In business it is also the order a customer places." },
        { id: "de-u56l2-derbereich", type: "vocab", front: "der Bereich", reading: "derbereich", meaning: "the area", example: { jp: "In meinem Bereich arbeiten zehn Kollegen, und wir sitzen sehr eng.", en: "Ten colleagues work in my area, and we sit very close together." }, drill: { jp: "Der Bereich wächst seit Jahren", en: "The area has been growing for years" }, accept: ["area", "the area", "field", "the field", "sector", "the sector", "section", "department"], hint: "A field of work or of knowledge, never a place on a map — that is die Gegend. im Bereich der Forschung." },
        { id: "de-u56l2-dermitarbeiter", type: "vocab", front: "der Mitarbeiter", reading: "dermitarbeiter", meaning: "the employee", example: { jp: "Die Firma sucht einen Mitarbeiter, der gut Deutsch und Englisch spricht.", en: "The company is looking for an employee who speaks German and English well." }, drill: { jp: "Der Mitarbeiter kommt am Montag", en: "The employee is coming on Monday" }, accept: ["employee", "the employee", "staff member", "the staff member", "member of staff", "co-worker", "colleague"], hint: "mit + arbeiten: the one who works with you. Warmer than der Angestellte, which is the purely legal word." },
        { id: "de-u56l2-dieschicht", type: "vocab", front: "die Schicht", reading: "dieschicht", meaning: "the shift", example: { jp: "Meine Schicht ist am Morgen, deshalb stehe ich um halb fünf auf.", en: "My shift is in the morning, so I get up at half past four." }, drill: { jp: "Die Schicht dauert zehn Stunden", en: "The shift lasts ten hours" }, accept: ["shift", "the shift", "layer", "the layer"], hint: "Also a layer — eine Schicht Schnee. A shift is a layer of the working day. Schicht arbeiten = to work shifts." },
      ],
    },
    {
      id: "de-u56l3",
      unit: 56,
      lesson: 3,
      title: "Zusammen entscheiden",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get to an agreement with other people: negotiate, settle on something, fix a date, take part, say yes — and hold your ground when you have to.",
      items: [
        { id: "de-u56l3-sicheinigen", type: "vocab", front: "sich einigen", reading: "sicheinigen", meaning: "to agree on", example: { jp: "Wir konnten uns nicht auf einen Termin einigen, deshalb warten wir noch.", en: "We couldn't agree on a date, so we're still waiting." }, drill: { jp: "Hier kann man sich einigen", en: "Here you can come to an agreement" }, accept: ["to agree on", "agree on", "to come to an agreement", "to settle on", "to reach agreement"], hint: "From einig (of one mind). sich auf etwas einigen = to settle on something together — the two sides both move." },
        { id: "de-u56l3-verhandeln", type: "vocab", front: "verhandeln", reading: "verhandeln", meaning: "to negotiate", example: { jp: "Wir verhandeln noch über den Preis, weil er uns viel zu hoch ist.", en: "We're still negotiating about the price, because it's far too high for us." }, drill: { jp: "Wir verhandeln über den Preis", en: "We are negotiating about the price" }, accept: ["to negotiate", "negotiate", "to bargain", "bargain", "to discuss terms"], hint: "ver- + handeln (to act, to trade). The preposition is always über: über etwas verhandeln." },
        { id: "de-u56l3-teilnehmen", type: "vocab", front: "teilnehmen", reading: "teilnehmen", meaning: "to take part", example: { jp: "An der Besprechung nehmen zehn Kollegen teil, auch zwei aus dem Ausland.", en: "Ten colleagues are taking part in the meeting, including two from abroad." }, drill: { jp: "Wir wollen an dem Kurs teilnehmen", en: "We want to take part in the course" }, accept: ["to take part", "take part", "to participate", "participate", "to attend"], hint: "der Teil + nehmen: to take your part. an etwas teilnehmen — dative, and separable: ich nehme teil." },
        { id: "de-u56l3-zusagen", type: "vocab", front: "zusagen", reading: "zusagen", meaning: "to accept", example: { jp: "Er hat für Freitag zugesagt, obwohl er noch nicht sicher ist.", en: "He accepted for Friday, although he isn't sure yet." }, drill: { jp: "Zwei Gäste wollen noch zusagen", en: "Two guests still want to accept" }, accept: ["to accept", "accept", "to say yes", "to confirm", "to agree to come", "to promise"], hint: "zu + sagen: to say yes to an invitation. The exact opposite of absagen, which you already have." },
        { id: "de-u56l3-sichdurchsetzen", type: "vocab", front: "sich durchsetzen", reading: "sichdurchsetzen", meaning: "to assert oneself", example: { jp: "Gegen den Chef kann man sich schwer durchsetzen, auch wenn die Gründe gut sind.", en: "It's hard to assert yourself against the boss, even when the reasons are good." }, drill: { jp: "Hier muss man sich durchsetzen", en: "Here you have to assert yourself" }, accept: ["to assert oneself", "assert oneself", "to prevail", "prevail", "to get one's way", "to win through", "to catch on"], hint: "durch + setzen: to set yourself through the resistance. Also of an idea: die Regel hat sich durchgesetzt." },
      ],
    },
    {
      id: "de-u56l4",
      unit: 56,
      lesson: 4,
      title: "Was dabei herauskommt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge how the work went: success or failure, the performance behind it, whether it was worth the effort, and how you would make it better.",
      items: [
        { id: "de-u56l4-dererfolg", type: "vocab", front: "der Erfolg", reading: "dererfolg", meaning: "the success", example: { jp: "Der Erfolg kam sehr spät, aber am Ende war er sehr groß.", en: "The success came very late, but in the end it was very big." }, drill: { jp: "Der Erfolg kommt nach der Arbeit", en: "Success comes after the work" }, accept: ["success", "the success", "achievement", "the achievement", "hit", "the hit"], hint: "er- + folgen: what follows from the work. Erfolg haben = to be successful; Viel Erfolg! = good luck." },
        { id: "de-u56l4-scheitern", type: "vocab", front: "scheitern", reading: "scheitern", meaning: "to fail", example: { jp: "Das Projekt ist am hohen Preis gescheitert und nicht an der Arbeit.", en: "The project failed because of the high price and not because of the work." }, drill: { jp: "Der Versuch kann leicht scheitern", en: "The attempt can easily fail" }, accept: ["to fail", "fail", "to fall through", "fall through", "to collapse", "to come to nothing"], hint: "an etwas scheitern = to fail because of something — the preposition is always an + dative. Of plans, not of exams (that is durchfallen)." },
        { id: "de-u56l4-dieleistung", type: "vocab", front: "die Leistung", reading: "dieleistung", meaning: "the performance", example: { jp: "Die Leistung der Gruppe war gut, obwohl die Zeit sehr knapp war.", en: "The group's performance was good, although time was very tight." }, drill: { jp: "Die Leistung steigt nach der Pause", en: "The performance rises after the break" }, accept: ["performance", "the performance", "achievement", "the achievement", "output", "the output", "service", "benefit"], hint: "From leisten, to accomplish. Of people, engines and insurance policies alike — what a thing actually delivers." },
        { id: "de-u56l4-deraufwand", type: "vocab", front: "der Aufwand", reading: "deraufwand", meaning: "the effort", example: { jp: "Der Aufwand war groß, aber das Ergebnis hat uns am Ende überzeugt.", en: "The effort was great, but in the end the result convinced us." }, drill: { jp: "Der Aufwand lohnt sich am Ende", en: "The effort pays off in the end" }, accept: ["effort", "the effort", "expense", "the expense", "outlay", "the outlay", "work involved"], hint: "auf + wenden (to turn): what you turn onto a job — time, money and work all in one word." },
        { id: "de-u56l4-verbessern", type: "vocab", front: "verbessern", reading: "verbessern", meaning: "to improve", example: { jp: "Wir müssen die Anleitung verbessern, weil niemand sie richtig versteht.", en: "We have to improve the instructions, because nobody properly understands them." }, drill: { jp: "Wir wollen die Anleitung verbessern", en: "We want to improve the instructions" }, accept: ["to improve", "improve", "to make better", "to enhance", "to correct"], hint: "ver- + besser: to make better. Also to correct: einen Text verbessern." },
      ],
    },
  ],
};
