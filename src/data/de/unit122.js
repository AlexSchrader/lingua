// DE Unit 122 — Medien und Technik (slot: coverage-b2-12) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// ⚠️ EVIDENCE TIER B THROUGHOUT, and it is the sharpest finding in this block.
// Every front in lessons 1-3 is a word the corpus ALREADY USES in its own
// example sentences and never taught. Found by tokenising all 4160 example and
// drill sentences in src/data/de and subtracting the 2081 taught fronts: die
// Musik appears 24 times, das Telefon 11, der Computer 8, das Konzert 7, das
// Radio 6, das Foto 5 (plus 7 as Fotos), der Text 5, das Taxi 2.
// A learner meets these words inside a lesson, with no card behind them and no
// checker complaining, because scope-strict only asks "is this taught by now"
// of words somebody wrote — and these WERE written. They were simply assumed.
//
// Self-check: der Film is NOT here - it is already taught (u64). das Fernsehen
// went into u121 with the other borrowings. die Adresse and das Zentrum are in
// u118, das Prozent and der Meter in u119, all from the same sweep.
// FREE: gemacht, gesehen, gehoert, gehört, fotos, gegeben, einzigen
export const DE_UNIT122 = {
  id: "de-u122",
  lang: "de",
  title: "Medien und Technik",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "de-u122l1",
      unit: 122,
      lesson: 1,
      title: "Musik, Radio und Foto",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what you listen to and look at — music, radio, a photo, a concert and a theatre.",
      items: [
        { id: "de-u122l1-diemusik", type: "vocab", front: "die Musik", reading: "diemusik", meaning: "the music", example: { jp: "Die Musik war so laut, dass wir am Tisch kein Wort mehr verstehen konnten.", en: "The music was so loud that we couldn't understand a word at the table any more." }, drill: { jp: "Die Musik gefällt mir sehr gut", en: "I like the music very much" }, accept: ["music", "the music"], hint: "⚠️ Used 24 times in this course's own example sentences and taught nowhere — the single clearest case of a word the curriculum assumed. Stress on the second syllable: muSIK." },
        { id: "de-u122l1-dasradio", type: "vocab", front: "das Radio", reading: "dasradio", meaning: "the radio", example: { jp: "Im Radio kommt jede Stunde eine kurze Nachricht über das Wetter.", en: "On the radio there is a short report about the weather every hour." }, drill: { jp: "Das Radio läuft den ganzen Morgen", en: "The radio runs all morning" }, accept: ["radio", "the radio", "wireless"], hint: "Used 6 times in the corpus with no card. Neuter, plural Radios. im Radio for what is broadcast, am Radio for sitting at the set." },
        { id: "de-u122l1-dasfoto", type: "vocab", front: "das Foto", reading: "dasfoto", meaning: "the photo", example: { jp: "Auf dem Foto sieht das Haus größer aus, als es wirklich ist.", en: "In the photo the house looks bigger than it really is." }, drill: { jp: "Das Foto hängt über dem Tisch", en: "The photo hangs above the table" }, accept: ["photo", "the photo", "photograph", "picture"], hint: "Used 12 times across the corpus (5 singular, 7 as Fotos) with no card. Spelled with F, not 'Photo' — the older spelling is gone. das Bild (u10) is a picture of any kind." },
        { id: "de-u122l1-daskonzert", type: "vocab", front: "das Konzert", reading: "daskonzert", meaning: "the concert", example: { jp: "Das Konzert am Wasser war für die kleine Stadt ein großes Ereignis.", en: "The concert by the water was a big event for the small town." }, drill: { jp: "Das Konzert beginnt um acht", en: "The concert begins at eight" }, accept: ["concert", "the concert", "recital"], hint: "Used 7 times in the corpus with no card. auf ein Konzert gehen — auf, not 'zu'. Also the musical form: ein Konzert für Klavier." },
        { id: "de-u122l1-dastheater", type: "vocab", front: "das Theater", reading: "dastheater", meaning: "the theatre", example: { jp: "Die Bühne ist klein, obwohl das Theater sehr groß wirkt.", en: "The stage is small, although the theatre looks very large." }, drill: { jp: "Das Theater ist heute zu", en: "The theatre is shut today" }, accept: ["theatre", "theater", "the theatre", "the theater"], hint: "Used in the corpus with no card. Pronounced te-A-ter, four syllables. Colloquially it also means a fuss — mach kein Theater, don't make a scene." },
      ],
    },
    {
      id: "de-u122l2",
      unit: 122,
      lesson: 2,
      title: "Telefon, Computer, Daten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the machines and the material they handle — a telephone, a computer, data, a signal and a text.",
      items: [
        { id: "de-u122l2-dastelefon", type: "vocab", front: "das Telefon", reading: "dastelefon", meaning: "the telephone", example: { jp: "Darf ich kurz dein Telefon benutzen, weil meins seit gestern Morgen nicht mehr geht?", en: "May I use your telephone for a moment, because mine hasn't worked since yesterday morning?" }, drill: { jp: "Das Telefon steht auf dem Tisch", en: "The telephone is on the table" }, accept: ["telephone", "the telephone", "phone"], hint: "⚠️ Used 11 times in the corpus and taught nowhere — and the course has a whole unit called Am Telefon (u77), which teaches anrufen, das Freizeichen and auflegen but never the object itself." },
        { id: "de-u122l2-dercomputer", type: "vocab", front: "der Computer", reading: "dercomputer", meaning: "the computer", example: { jp: "Ohne Strom geht der Computer nicht, und deshalb ruht die ganze Arbeit.", en: "Without electricity the computer doesn't work, and so all the work is resting." }, drill: { jp: "Der Computer im Büro ist alt", en: "The computer in the office is old" }, accept: ["computer", "the computer", "PC"], hint: "Used 10 times in the corpus with no card. Masculine, and identical in the plural: der Computer, die Computer. Pronounced as in English." },
        { id: "de-u122l2-diedaten", type: "vocab", front: "die Daten", reading: "diedaten", meaning: "the data", example: { jp: "Die Daten aus dem alten Bericht sind noch nicht da, und ohne sie kann niemand den Bericht schreiben.", en: "The data from the old report are not here yet, and without them nobody can write the report." }, drill: { jp: "Die Daten sind schon sehr alt", en: "The data are already very old" }, accept: ["data", "the data", "records", "details"], hint: "Rank 1913 and used in the corpus besides. Plural only in this sense — always die Daten, never 'das Daten'. The singular das Datum means a calendar date." },
        { id: "de-u122l2-dassignal", type: "vocab", front: "das Signal", reading: "dassignal", meaning: "the signal", example: { jp: "Das Signal war zu schwach, deshalb hat der Wagen den halben Weg ohne Karte gemacht.", en: "The signal was too weak, so the car did half the journey without a map." }, drill: { jp: "Das Signal kommt nur langsam an", en: "The signal arrives only slowly" }, accept: ["signal", "the signal", "sign", "cue"], hint: "Rank 1994. Technical and figurative alike — ein Signal setzen is to send a message in the political sense. Plural Signale." },
        { id: "de-u122l2-dertext", type: "vocab", front: "der Text", reading: "dertext", meaning: "the text", example: { jp: "Der Text ist gut, aber er ist viel zu lang für den Platz, den wir haben.", en: "The text is good, but it is much too long for the space we have." }, drill: { jp: "Der Text war leider sehr kurz", en: "Unfortunately the text was very short" }, accept: ["text", "the text", "wording", "lyrics"], hint: "Used 5 times in the corpus with no card. Also the words of a song — der Text eines Liedes. Plural Texte." },
      ],
    },
    {
      id: "de-u122l3",
      unit: 122,
      lesson: 3,
      title: "Information, Projekt, Universität",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the institutional words a B2 reader meets daily — information, a project, a university, a professor and a taxi.",
      items: [
        { id: "de-u122l3-dieinformation", type: "vocab", front: "die Information", reading: "dieinformation", meaning: "the information", example: { jp: "Die Information kam zu spät, und deshalb hat die halbe Gruppe den falschen Weg genommen.", en: "The information came too late, and so half the group took the wrong route." }, drill: { jp: "Die Information war leider falsch", en: "Unfortunately the information was wrong" }, accept: ["information", "the information", "piece of information", "intelligence"], hint: "Rank 1123. Countable in German where English is not — eine Information, drei Informationen. Stress on the last syllable: informaTION." },
        { id: "de-u122l3-dasprojekt", type: "vocab", front: "das Projekt", reading: "dasprojekt", meaning: "the project", example: { jp: "Das Projekt läuft seit drei Jahren, und bis heute weiß niemand genau, wann es fertig sein soll.", en: "The project has been running for three years, and to this day nobody knows exactly when it should be finished." }, drill: { jp: "Das Projekt kostet zu viel Geld", en: "The project costs too much money" }, accept: ["project", "the project", "scheme", "undertaking"], hint: "Used in the corpus with no card. The j is pronounced as a y: pro-YEKT. Plural Projekte." },
        { id: "de-u122l3-dieuniversitaet", type: "vocab", front: "die Universität", reading: "dieuniversitaet", meaning: "the university", example: { jp: "Der Weg zur Universität dauert mit dem Bus fast eine Stunde, zu Fuß aber nur zwanzig Minuten.", en: "The way to the university takes almost an hour by bus, but only twenty minutes on foot." }, drill: { jp: "Die Universität liegt am Fluss", en: "The university is by the river" }, accept: ["university", "the university", "college"], hint: "Used in the corpus with no card. Shortened to die Uni in every kind of speech, which is what you will actually hear. Stress the last syllable: universiTÄT." },
        { id: "de-u122l3-derprofessor", type: "vocab", front: "der Professor", reading: "derprofessor", meaning: "the professor", example: { jp: "Der Professor hat die Frage zweimal gelesen und trotzdem nicht sofort eine Antwort gegeben.", en: "The professor read the question twice and still did not give an answer immediately." }, drill: { jp: "Der Professor kommt aus einer anderen Stadt", en: "The professor comes from another city" }, accept: ["professor", "the professor"], hint: "Rank 1391. Stress moves in the plural: proFESsor, but professOren. Used as a title before the name, abbreviated Prof." },
        { id: "de-u122l3-dastaxi", type: "vocab", front: "das Taxi", reading: "dastaxi", meaning: "the taxi", example: { jp: "Notfalls fahren wir mit dem Taxi, auch wenn das für diese kurze Strecke zu teuer ist.", en: "If necessary we'll go by taxi, even if that is too expensive for such a short distance." }, drill: { jp: "Das Taxi wartet vor der Tür", en: "The taxi is waiting in front of the door" }, accept: ["taxi", "the taxi", "cab"], hint: "Used in the corpus with no card, and missing from u18 and u23, both travel units. Neuter, plural Taxis." },
      ],
    },
    {
      id: "de-u122l4",
      unit: 122,
      lesson: 4,
      title: "Kontrolle, Kontakt, Position",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the abstract nouns a report leans on — control, contact, a position, a situation and a signal of intent.",
      items: [
        { id: "de-u122l4-diekontrolle", type: "vocab", front: "die Kontrolle", reading: "diekontrolle", meaning: "the control", example: { jp: "Die Kontrolle an der Grenze hat fast eine Stunde gedauert, obwohl vor uns nur drei Wagen standen.", en: "The check at the border took almost an hour, although there were only three cars in front of us." }, drill: { jp: "Die Kontrolle war sehr genau", en: "The check was very thorough" }, accept: ["control", "the control", "check", "inspection", "checkpoint"], hint: "Rank 1108. Both 'control' and a physical 'check' — eine Kontrolle is what happens at a border. unter Kontrolle is under control." },
        { id: "de-u122l4-derkontakt", type: "vocab", front: "der Kontakt", reading: "derkontakt", meaning: "the contact", example: { jp: "Der Kontakt zu der Firma ist seit dem Sommer weg, und niemand weiß genau warum.", en: "Contact with the company has been gone since the summer, and nobody knows exactly why." }, drill: { jp: "Der Kontakt kam über einen Freund", en: "The contact came through a friend" }, accept: ["contact", "the contact", "connection", "touch"], hint: "Rank 1333. Kontakt zu jemandem, not 'mit' — the preposition is zu. in Kontakt bleiben is to stay in touch." },
        { id: "de-u122l4-dieposition", type: "vocab", front: "die Position", reading: "dieposition", meaning: "the position", example: { jp: "Die Position der Firma ist klar, aber sie steht bis heute in keinem einzigen Brief.", en: "The company's position is clear, but to this day it is not in a single letter." }, drill: { jp: "Die Position war von Anfang an klar", en: "The position was clear from the start" }, accept: ["position", "the position", "stance", "standpoint", "place"], hint: "Rank 1326. A stance in an argument and a place in space alike. For a job German uses die Stelle (u24) instead." },
        { id: "de-u122l4-diesituation", type: "vocab", front: "die Situation", reading: "diesituation", meaning: "the situation", example: { jp: "Die Situation ist für beide Seiten schwierig, weil keine von ihnen zuerst nachgeben will.", en: "The situation is difficult for both sides, because neither of them wants to give in first." }, drill: { jp: "Die Situation wird langsam besser", en: "The situation is slowly getting better" }, accept: ["situation", "the situation", "state of affairs", "circumstances"], hint: "Rank 1301. Stress the last syllable: situatiON. die Lage is the shorter native word and means the same thing." },
        { id: "de-u122l4-diechance", type: "vocab", front: "die Chance", reading: "diechance", meaning: "the chance", example: { jp: "Die Chance kommt so schnell nicht wieder, und deshalb sollten wir heute und nicht erst morgen antworten.", en: "The chance won't come again so soon, and that is why we should answer today and not tomorrow." }, drill: { jp: "Die Chance war wirklich sehr klein", en: "The chance was really very small" }, accept: ["chance", "the chance", "opportunity", "prospect", "odds"], hint: "Rank 568. Borrowed from French and still pronounced that way — SHAHNG-se, with a soft sh. die Gelegenheit (u62) is the native word for an opportunity." },
      ],
    },
  ],
};
