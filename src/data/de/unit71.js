// DE Unit 71 — Der Genitiv und die Artikelwörter (slot: grammar 8) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// RETHEMED SLOT. The scaffold calls this "Grammar 8 — nuance, evidentiality,
// nominalization". Evidentiality is a Japanese category (そうだ / らしい / ようだ)
// and German has no form for it; nuance is what u72-u73 do with register. What
// German has left at B1, and what nothing in u1-u70 has touched, is THE FOURTH
// CASE. A1 deliberately stayed nominative (de/unit1.js, simplification (a)) and
// A2's u12-u14 opened accusative and dative — the genitive was never opened at
// all, so a learner who has finished A2 cannot read a German newspaper sentence.
// (The genitive is DER ZWEITE FALL: 1 Nominativ, 2 Genitiv, 3 Dativ, 4 Akkusativ.)
// This unit opens it, and l4 keeps the scaffold's nominalization half by teaching
// the -ung noun, which is the genitive's most common companion.
// Per CLAUDE.md "No front language": retitling and rethemeing the slot is
// ordinary authoring.
//
// `des` IS CARDED, as the first item in l1, and that is deliberate: it is the
// genitive article itself and every other example in the unit needs it. Without
// it l1 could not write a single genitive phrase.
// NOT taken, already taught: dessen and deren (u36), welcher (u12), waehrend
// (u29 — it is a genitive preposition too, but the lower slot owns the front, so
// it appears here only in a hint).
// FREE: Anna, Thomas, Lena, Max, Berlin, Hamburg, Kinder, Jahre, Bilder, Zimmer, Kollegen, sein, Computers
export const DE_UNIT71 = {
  id: "de-u71",
  lang: "de",
  title: "Der Genitiv und die Artikelwörter",
  order: 71,
  stage: "b1",
  lessons: [
    {
      id: "de-u71l1",
      unit: 71,
      lesson: 1,
      title: "Der zweite Fall",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the genitive: of the, because of, in spite of, instead of, within, outside of.",
      items: [
        { id: "de-u71l1-des", type: "vocab", front: "des", reading: "des", meaning: "of the", example: { jp: "Das Auto des Chefs steht schon wieder vor der Tür.", en: "The boss's car is parked in front of the door again." }, drill: { jp: "Das Auto des Chefs ist neu", en: "The boss's car is new" }, accept: ["of the", "the (genitive)", "'s"], hint: "Masculine and neuter genitive, and the noun takes -s or -es too: des Chefs, des Hauses. Feminine and plural use der." },
        { id: "de-u71l1-wegen", type: "vocab", front: "wegen", reading: "wegen", meaning: "because of", example: { jp: "Wegen des schlechten Wetters findet das Konzert im Haus statt.", en: "Because of the bad weather the concert is taking place indoors." }, drill: { jp: "Wegen des Wetters bleiben wir hier", en: "Because of the weather we are staying here" }, accept: ["because of", "on account of", "due to", "owing to"], hint: "Takes the genitive in writing. In speech you will also hear wegen dem Wetter." },
        { id: "de-u71l1-statt", type: "vocab", front: "statt", reading: "statt", meaning: "in place of", example: { jp: "Statt des Autos nehmen wir bei dem Wetter besser den Zug.", en: "Instead of the car we had better take the train in this weather." }, drill: { jp: "Statt des Autos nehmen wir den Zug", en: "Instead of the car we take the train" }, accept: ["instead of", "in place of", "rather than", "instead"], hint: "anstatt (u36) is the same word in full. Also opens a clause: statt zu warten." },
        { id: "de-u71l1-innerhalb", type: "vocab", front: "innerhalb", reading: "innerhalb", meaning: "within", example: { jp: "Innerhalb einer Woche kommt die Antwort von der Firma.", en: "The answer from the firm comes within a week." }, drill: { jp: "Innerhalb einer Woche kommt die Antwort", en: "The answer comes within a week" }, accept: ["within", "inside", "inside of"], hint: "Of time and of space: innerhalb der Stadt, innerhalb einer Stunde." },
        { id: "de-u71l1-ausserhalb", type: "vocab", front: "außerhalb", reading: "ausserhalb", meaning: "outside of", example: { jp: "Außerhalb der Stadt ist die Miete für eine Wohnung viel besser.", en: "Outside the city the rent for a flat is much better." }, drill: { jp: "Außerhalb der Stadt ist es ruhig", en: "Outside the city it is quiet" }, accept: ["outside of", "outside", "beyond", "out of"], hint: "The mirror of innerhalb. ß, so the reading is written with ss." },
        { id: "de-u71l1-unweit", type: "vocab", front: "unweit", reading: "unweit", meaning: "not far from", example: { jp: "Unweit des Bahnhofs gibt es ein kleines Hotel mit günstigen Zimmern.", en: "Not far from the station there is a small hotel with cheap rooms." }, drill: { jp: "Unweit des Bahnhofs steht ein Hotel", en: "Not far from the station stands a hotel" }, accept: ["not far from", "near", "close to", "a short way from"], hint: "A genitive preposition like innerhalb and außerhalb in this lesson: unweit DES Bahnhofs, unweit DER Schule. Written German; speech says nicht weit von." },
      ],
    },
    {
      id: "de-u71l2",
      unit: 71,
      lesson: 2,
      title: "Mehr Präpositionen mit Genitiv",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the written genitive prepositions: on the basis of, with the help of, using, as a result of, in view of, with regard to.",
      items: [
        { id: "de-u71l2-aufgrund", type: "vocab", front: "aufgrund", reading: "aufgrund", meaning: "on the basis of", example: { jp: "Aufgrund der Diagnose macht sie jetzt eine Therapie.", en: "On the basis of the diagnosis she is now doing a therapy." }, drill: { jp: "Aufgrund des Wetters bleiben wir hier", en: "Because of the weather we are staying here" }, accept: ["on the basis of", "because of", "due to", "owing to"], hint: "auf + Grund (u29), the reason. Also written auf Grund in older texts." },
        { id: "de-u71l2-mithilfe", type: "vocab", front: "mithilfe", reading: "mithilfe", meaning: "with the help of", example: { jp: "Mithilfe des Computers geht die Arbeit viel schneller.", en: "With the help of the computer the work goes much faster." }, drill: { jp: "Mithilfe des Computers geht es schnell", en: "With the help of the computer it is fast" }, accept: ["with the help of", "by means of", "using", "with the aid of"], hint: "mit + Hilfe. Also written mit Hilfe; both are correct." },
        { id: "de-u71l2-anhand", type: "vocab", front: "anhand", reading: "anhand", meaning: "using", example: { jp: "Anhand der alten Bilder erklärt der Lehrer die ganze Zeit.", en: "Using the old pictures the teacher explains the whole period." }, drill: { jp: "Anhand der Bilder lernen wir gut", en: "Using the pictures we learn well" }, accept: ["using", "on the basis of", "by means of", "with reference to"], hint: "an + Hand: 'by the hand of'. Always about evidence you work from." },
        { id: "de-u71l2-infolge", type: "vocab", front: "infolge", reading: "infolge", meaning: "as a result of", example: { jp: "Infolge des Sturms fährt heute kein Zug nach Hamburg.", en: "As a result of the storm no train is running to Hamburg today." }, drill: { jp: "Infolge des Sturms fährt kein Zug", en: "As a result of the storm no train is running" }, accept: ["as a result of", "in consequence of", "following", "because of"], hint: "in + Folge (u64), the consequence. Always a bad result." },
        { id: "de-u71l2-angesichts", type: "vocab", front: "angesichts", reading: "angesichts", meaning: "in view of", example: { jp: "Angesichts des Preises kaufen wir das Auto nicht.", en: "In view of the price we are not buying the car." }, drill: { jp: "Angesichts des Preises kaufen wir nichts", en: "In view of the price we are buying nothing" }, accept: ["in view of", "given", "in the face of", "considering"], hint: "From das Gesicht: literally 'in the face of'. Formal and a little dramatic." },
        { id: "de-u71l2-hinsichtlich", type: "vocab", front: "hinsichtlich", meaning: "with regard to", reading: "hinsichtlich", example: { jp: "Hinsichtlich der Kosten ist das Angebot der Firma sehr gut.", en: "With regard to the costs the firm's offer is very good." }, drill: { jp: "Hinsichtlich des Preises ist es gut", en: "With regard to the price it is good" }, accept: ["with regard to", "regarding", "concerning", "as regards"], hint: "Office German. In speech people just say was … angeht." },
      ],
    },
    {
      id: "de-u71l3",
      unit: 71,
      lesson: 3,
      title: "Artikelwörter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Point at things more precisely: the same, many a, such, several, all of the, some … or other.",
      items: [
        { id: "de-u71l3-derselbe", type: "vocab", front: "derselbe", reading: "derselbe", meaning: "the same", example: { jp: "Jeden Morgen kommt derselbe Mann in den kleinen Laden.", en: "Every morning the same man comes into the little shop." }, drill: { jp: "Derselbe Mann kommt wieder", en: "The same man comes again" }, accept: ["the same", "the very same", "the same one"], hint: "Both halves change: dieselbe Frau, dasselbe Haus, denselben Mann." },
        { id: "de-u71l3-mancher", type: "vocab", front: "mancher", reading: "mancher", meaning: "many a", example: { jp: "Mancher Kollege arbeitet auch am Wochenende im Betrieb.", en: "Many a colleague works at the plant at the weekend too." }, drill: { jp: "Mancher Kollege arbeitet zu viel", en: "Many a colleague works too much" }, accept: ["many a", "some", "quite a few", "more than one"], hint: "Singular but means 'a fair number'. Plural manche is far more common in speech." },
        { id: "de-u71l3-solcher", type: "vocab", front: "solcher", reading: "solcher", meaning: "such", example: { jp: "Solcher Streit in der Familie hilft am Ende niemandem.", en: "Such an argument in the family helps nobody in the end." }, drill: { jp: "Solcher Streit ist nicht gut", en: "Such an argument is not good" }, accept: ["such", "that kind of", "this sort of"], hint: "It KEEPS its ending after ein: ein solcher Mann. Only solch itself goes bare: solch ein Mann." },
        { id: "de-u71l3-mehrere", type: "vocab", front: "mehrere", reading: "mehrere", meaning: "several", example: { jp: "Mehrere Kollegen sind seit Montag krank zu Hause.", en: "Several colleagues have been at home ill since Monday." }, drill: { jp: "Mehrere Kollegen sind heute krank", en: "Several colleagues are ill today" }, accept: ["several", "a number of", "various"], hint: "Plural only, and more than a couple. Built on mehr (u37)." },
        { id: "de-u71l3-samtliche", type: "vocab", front: "sämtliche", reading: "samtliche", meaning: "all of the", example: { jp: "Sämtliche Zimmer im Hotel am Meer sind schon besetzt.", en: "All of the rooms in the hotel by the sea are already taken." }, drill: { jp: "Sämtliche Zimmer sind schon besetzt", en: "All of the rooms are already taken" }, accept: ["all of the", "all", "every single", "the entire"], hint: "Stronger and more formal than alle — it means 'without exception'." },
        { id: "de-u71l3-irgendein", type: "vocab", front: "irgendein", reading: "irgendein", meaning: "some … or other", example: { jp: "Irgendein Mann wartet seit einer Stunde vor der Tür.", en: "Some man or other has been waiting at the door for an hour." }, drill: { jp: "Irgendein Mann wartet vor der Tür", en: "Some man or other is waiting at the door" }, accept: ["some … or other", "some", "any", "any old"], hint: "irgend- + ein. Same family as irgendwann (u28): vague on purpose." },
      ],
    },
    {
      id: "de-u71l4",
      unit: 71,
      lesson: 4,
      title: "Das Nomen aus dem Verb",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Recognise the -ung noun German makes out of a verb: movement, upbringing, a demand, a delivery, an enquiry, a notice.",
      items: [
        { id: "de-u71l4-diebewegung", type: "vocab", front: "die Bewegung", reading: "diebewegung", meaning: "the movement", example: { jp: "Nach der Operation ist die Bewegung im Arm noch schwer.", en: "After the operation movement in the arm is still hard." }, drill: { jp: "Die Bewegung tut dem Rücken gut", en: "Movement is good for the back" }, accept: ["movement", "the movement", "the motion", "exercise"], hint: "From bewegen, to move. An -ung noun is always feminine — that is the rule this lesson buys you." },
        { id: "de-u71l4-dieerziehung", type: "vocab", front: "die Erziehung", reading: "dieerziehung", meaning: "the upbringing", example: { jp: "Die Erziehung der Kinder ist für die Eltern harte Arbeit.", en: "Bringing up the children is hard work for the parents." }, drill: { jp: "Die Erziehung der Kinder ist schwer", en: "Bringing up children is hard" }, accept: ["upbringing", "the upbringing", "the education", "the parenting"], hint: "From erziehen, to raise a child. die Bildung is school learning; die Erziehung is the raising." },
        { id: "de-u71l4-dieforderung", type: "vocab", front: "die Forderung", reading: "dieforderung", meaning: "the demand", example: { jp: "Die Forderung der Kollegen nach mehr Lohn ist sehr hart.", en: "The colleagues' demand for more pay is very tough." }, drill: { jp: "Die Forderung der Kollegen ist hart", en: "The colleagues' demand is tough" }, accept: ["demand", "the demand", "the claim", "the requirement"], hint: "From fordern, to demand. Do not mix it with die Förderung, which is support." },
        { id: "de-u71l4-dielieferung", type: "vocab", front: "die Lieferung", reading: "dielieferung", meaning: "the delivery", example: { jp: "Die Lieferung aus dem Betrieb kommt am Montag.", en: "The delivery from the plant comes on Monday." }, drill: { jp: "Die Lieferung kommt am Montag", en: "The delivery comes on Monday" }, accept: ["delivery", "the delivery", "the shipment", "the consignment"], hint: "From liefern, to deliver. The van itself is der Lieferwagen." },
        { id: "de-u71l4-dieanfrage", type: "vocab", front: "die Anfrage", reading: "dieanfrage", meaning: "the enquiry", example: { jp: "Auf die Anfrage von der Schule kam bis heute keine Antwort.", en: "There has been no answer to the school's enquiry to this day." }, drill: { jp: "Die Anfrage kommt von der Firma", en: "The enquiry comes from the firm" }, accept: ["enquiry", "the enquiry", "the inquiry", "the query", "the request"], hint: "Not an -ung noun but built the same way, from anfragen. Compare die Nachfrage (u66)." },
        { id: "de-u71l4-diemitteilung", type: "vocab", front: "die Mitteilung", reading: "diemitteilung", meaning: "the notice", example: { jp: "Die Mitteilung von der Schule war kurz und nicht sehr genau.", en: "The notice from the school was short and not very precise." }, drill: { jp: "Die Mitteilung von der Schule ist kurz", en: "The notice from the school is short" }, accept: ["notice", "the notice", "the message", "the announcement", "the communication"], hint: "From mitteilen, to let someone know. Formal — a friend sends you eine Nachricht." },
      ],
    },
  ],
};
