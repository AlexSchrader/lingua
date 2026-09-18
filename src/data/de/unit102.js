// DE Unit 102 — Das Gesundheitssystem ("The health system") — B2 (slot: health-systems)
// THEME CONTRACT (block 2, u101–u113): this unit owns the SYSTEM layer — who pays and
// who gets in (l1), the path from GP to specialist (l2), hospital and staffing (l3),
// long-term care, prevention and overload (l4). Symptoms, body parts, illnesses and the
// doctor's-appointment dialogue stay with u11/u25/u67 and appear here only as
// already-taught example vocabulary, never re-taught.
// Conventions: front = real orthography (nouns carry their article), reading = its
// ASCII fold, accept[] on every card, drill = 3–8 tokens containing the front verbatim.
export const DE_UNIT102 = {
  id: "de-u102",
  lang: "de",
  title: "Das Gesundheitssystem",
  order: 102,
  stage: "b2",
  lessons: [
    {
      id: "de-u102l1",
      unit: 102,
      lesson: 1,
      title: "Kasse, Kosten und Zugang",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Explain who pays for treatment and who can reach it: the insurer, the part patients pay themselves, and whether care is available everywhere.",
      items: [
        { id: "de-u102l1-diekrankenkasse", type: "vocab", front: "die Krankenkasse", reading: "diekrankenkasse", meaning: "health insurer (statutory sickness fund)", example: { jp: "Die Krankenkasse bezahlt die Behandlung, wenn der Arzt sie für nötig hält.", en: "The health insurer pays for the treatment if the doctor considers it necessary." }, drill: { jp: "Die Krankenkasse bezahlt fast alles", en: "The health insurer pays for almost everything" }, accept: ["health insurer", "health insurance fund", "sickness fund", "health insurance"], hint: "In Germany the Kasse is an institution, not a policy you shop for: 90 % of people are in a gesetzliche Krankenkasse." },
        { id: "de-u102l1-diezuzahlung", type: "vocab", front: "die Zuzahlung", reading: "diezuzahlung", meaning: "co-payment (the patient's own share)", example: { jp: "Für jedes Medikament ist eine kleine Zuzahlung fällig, den Rest trägt die Kasse.", en: "A small co-payment is due for each medicine; the fund covers the rest." }, drill: { jp: "Die Zuzahlung beträgt nur fünf Euro", en: "The co-payment is only five euros" }, accept: ["co-payment", "copayment", "patient contribution", "own contribution"], hint: "zu + Zahlung: what you pay on top of what the Kasse pays. Kinder sind von der Zuzahlung befreit." },
        { id: "de-u102l1-dieversorgung", type: "vocab", front: "die Versorgung", reading: "dieversorgung", meaning: "provision of care (the supply side)", example: { jp: "Auf dem Dorf ist die Versorgung schlechter als in der Stadt, obwohl beide dieselbe Kasse haben.", en: "In the village the provision of care is worse than in the city, although both have the same insurer." }, drill: { jp: "Die Versorgung auf dem Dorf wird schlechter", en: "Care provision in the village is getting worse" }, accept: ["provision", "care provision", "supply", "provision of care"], hint: "Wide word: medizinische Versorgung, Versorgung mit Strom, die Versorgung der Kinder. Always the supplying, never the receiving." },
        { id: "de-u102l1-derzugang", type: "vocab", front: "der Zugang", reading: "derzugang", meaning: "access (being able to reach a service)", example: { jp: "Ohne Auto hat kaum jemand hier Zugang zu einem Facharzt.", en: "Without a car hardly anyone here has access to a specialist." }, drill: { jp: "Der Zugang zur Klinik ist schwierig", en: "Access to the clinic is difficult" }, accept: ["access", "admission", "entry"], hint: "Zugang zu + dative. Also physical — der Zugang zum Gebäude — and digital: Zugang zum Konto." },
        { id: "de-u102l1-flachendeckend", type: "vocab", front: "flächendeckend", reading: "flachendeckend", meaning: "nationwide (covering every area)", example: { jp: "Eine flächendeckende Versorgung heißt, dass auch kleine Orte einen Arzt haben.", en: "Nationwide provision means that small places have a doctor too." }, drill: { jp: "Die Versorgung ist nicht flächendeckend", en: "Provision is not nationwide" }, accept: ["nationwide", "across the board", "comprehensive", "covering the whole area"], hint: "Fläche + deckend: covering the surface. Used of anything that must exist everywhere — Internet, Schulen, Ärzte." },
        { id: "de-u102l1-diekapazitat", type: "vocab", front: "die Kapazität", reading: "diekapazitat", meaning: "capacity (how much a service can handle)", example: { jp: "Im Winter reicht die Kapazität der Krankenhäuser oft nicht.", en: "In winter the capacity of the hospitals is often not enough." }, drill: { jp: "Die Kapazität der Klinik ist begrenzt", en: "The capacity of the clinic is limited" }, accept: ["capacity"], hint: "Institutional capacity — beds, places, hours. For a person's own capacity German says die Kraft or die Zeit." },
      ],
    },
    {
      id: "de-u102l2",
      unit: 102,
      lesson: 2,
      title: "Vom Hausarzt zum Facharzt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the path a patient takes through the system: family doctor first, then a specialist, what gets prescribed, what the findings say, and how long the wait is.",
      items: [
        { id: "de-u102l2-derhausarzt", type: "vocab", front: "der Hausarzt", reading: "derhausarzt", meaning: "family doctor (GP)", example: { jp: "Der Hausarzt kennt die ganze Familie und schickt dich weiter, wenn es nötig ist.", en: "The family doctor knows the whole family and sends you on when it is necessary." }, drill: { jp: "Der Hausarzt schickt mich weiter", en: "The family doctor is sending me on" }, accept: ["family doctor", "GP", "general practitioner", "primary care doctor"], hint: "Haus + Arzt: the doctor of the household, the first stop for everything. Female: die Hausärztin." },
        { id: "de-u102l2-derfacharzt", type: "vocab", front: "der Facharzt", reading: "derfacharzt", meaning: "specialist doctor", example: { jp: "Für das Herz braucht man einen Facharzt, und auf den Termin wartet man lange.", en: "For the heart you need a specialist, and you wait a long time for the appointment." }, drill: { jp: "Der Facharzt hat erst im Herbst Zeit", en: "The specialist has time only in autumn" }, accept: ["specialist", "specialist doctor", "consultant"], hint: "Fach = subject area. The same Fach- turns up everywhere: die Fachkraft, das Fachwort, die Fachfrau." },
        { id: "de-u102l2-verschreiben", type: "vocab", front: "verschreiben", reading: "verschreiben", meaning: "to prescribe (a medicine or therapy)", example: { jp: "Der Arzt hat mir für vier Wochen etwas gegen die Schmerzen verschrieben.", en: "The doctor prescribed me something for the pain for four weeks." }, drill: { jp: "Der Arzt will mir etwas verschreiben", en: "The doctor wants to prescribe me something" }, accept: ["to prescribe", "prescribe"], hint: "Reflexively it means the opposite kind of writing: sich verschreiben = to make a slip of the pen." },
        { id: "de-u102l2-derbefund", type: "vocab", front: "der Befund", reading: "derbefund", meaning: "findings (result of an examination)", example: { jp: "Der Befund war gut, und der Arzt hat mir die Papiere gleich mitgegeben.", en: "The findings were good, and the doctor gave me the papers straight away." }, drill: { jp: "Der Befund kommt in zwei Wochen", en: "The findings come in two weeks" }, accept: ["findings", "result", "medical findings", "report"], hint: "What was *found*, from finden. Ohne Befund on a form means nothing abnormal was found — the good outcome." },
        { id: "de-u102l2-diewartezeit", type: "vocab", front: "die Wartezeit", reading: "diewartezeit", meaning: "waiting time (before you are seen)", example: { jp: "Die Wartezeit auf einen Termin beim Facharzt ist in der Stadt besonders lang.", en: "The waiting time for an appointment with a specialist is particularly long in the city." }, drill: { jp: "Die Wartezeit dauert fast drei Monate", en: "The waiting time lasts almost three months" }, accept: ["waiting time", "wait", "waiting period"], hint: "warten + Zeit. Also used outside medicine: die Wartezeit bei der Versicherung, am Amt, im Verkehr." },
        { id: "de-u102l2-ambulant", type: "vocab", front: "ambulant", reading: "ambulant", meaning: "outpatient (without staying overnight)", example: { jp: "Der kleine Eingriff wird ambulant gemacht, und am Abend bist du wieder zu Hause.", en: "The small procedure is done as an outpatient, and in the evening you are back home." }, drill: { jp: "Der Eingriff läuft ganz normal ambulant", en: "The procedure runs quite normally as an outpatient one" }, accept: ["outpatient", "as an outpatient", "ambulatory"], hint: "From Latin *ambulare*, to walk: you walk out again the same day. Its opposite is stationär." },
      ],
    },
    {
      id: "de-u102l3",
      unit: 102,
      lesson: 3,
      title: "Klinik, Station und Personal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a hospital stay from the institution's side: which clinic and ward, who works there, and when a patient is discharged.",
      items: [
        { id: "de-u102l3-dieklinik", type: "vocab", front: "die Klinik", reading: "dieklinik", meaning: "clinic (specialised hospital)", example: { jp: "Für das Knie gibt es eine eigene Klinik, zwei Stunden mit dem Zug von hier.", en: "For the knee there is a clinic of its own, two hours by train from here." }, drill: { jp: "Die Klinik liegt außerhalb der Stadt", en: "The clinic is outside the city" }, accept: ["clinic", "specialist hospital", "hospital"], hint: "Not the small practice the English *clinic* suggests: eine Klinik is usually a hospital with a speciality. Everyday care happens in der Praxis (u25)." },
        { id: "de-u102l3-diestation", type: "vocab", front: "die Station", reading: "diestation", meaning: "ward (hospital unit)", example: { jp: "Auf der Station arbeiten nachts nur zwei Leute für dreißig Betten.", en: "On the ward only two people work at night for thirty beds." }, drill: { jp: "Die Station hat nur dreißig Betten", en: "The ward has only thirty beds" }, accept: ["ward", "unit", "station"], hint: "In a hospital it is a ward; on the street, a stop or station — die Station der Bahn. Context decides." },
        { id: "de-u102l3-stationar", type: "vocab", front: "stationär", reading: "stationar", meaning: "inpatient (staying in hospital)", example: { jp: "Nach dem Unfall musste sie eine Woche stationär bleiben.", en: "After the accident she had to stay in hospital as an inpatient for a week." }, drill: { jp: "Der Patient bleibt eine Woche stationär", en: "The patient stays in hospital for a week" }, accept: ["inpatient", "as an inpatient", "in hospital"], hint: "The pair to learn together: ambulant you go home, stationär you get a bed." },
        { id: "de-u102l3-daspersonal", type: "vocab", front: "das Personal", reading: "daspersonal", meaning: "staff (the people employed somewhere)", example: { jp: "Das Personal in der Klinik ist gut, aber es sind einfach zu wenige.", en: "The staff in the clinic are good, but there are simply too few of them." }, drill: { jp: "Das Personal arbeitet oft am Wochenende", en: "The staff often work at the weekend" }, accept: ["staff", "personnel", "employees"], hint: "Singular in German, plural in English: das Personal ist … Note the stress: Perso-NAL." },
        { id: "de-u102l3-diepflegekraft", type: "vocab", front: "die Pflegekraft", reading: "diepflegekraft", meaning: "nurse (professional carer)", example: { jp: "Zwei Pflegekräfte betreuen nachts die ganze Station.", en: "Two nurses look after the whole ward at night." }, drill: { jp: "Die Pflegekraft arbeitet jede zweite Nacht", en: "The nurse works every second night" }, accept: ["nurse", "carer", "care worker", "nursing staff"], hint: "The gender-neutral official term; die Krankenschwester and der Krankenpfleger are the older gendered pair." },
        { id: "de-u102l3-entlassen", type: "vocab", front: "entlassen", reading: "entlassen", meaning: "to discharge (release from hospital or a job)", example: { jp: "Man hat ihn schon am dritten Tag entlassen, obwohl er noch Schmerzen hatte.", en: "They discharged him as early as the third day, although he was still in pain." }, drill: { jp: "Die Klinik will ihn morgen entlassen", en: "The clinic wants to discharge him tomorrow" }, accept: ["to discharge", "discharge", "to release", "to dismiss", "to lay off"], hint: "Same verb for both exits: aus dem Krankenhaus entlassen, or aus der Firma entlassen — fired. Tone decides which." },
      ],
    },
    {
      id: "de-u102l4",
      unit: 102,
      lesson: 4,
      title: "Pflege, Vorbeugung und Belastung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss long-term care and prevention: who needs looking after, who does the looking after, what stops illness before it starts, and where the system is overstretched.",
      items: [
        { id: "de-u102l4-pflegebedurftig", type: "vocab", front: "pflegebedürftig", reading: "pflegebedurftig", meaning: "in need of long-term care", example: { jp: "Wer pflegebedürftig ist, bekommt Geld von der Kasse, aber selten genug.", en: "Someone in need of care receives money from the fund, but rarely enough." }, drill: { jp: "Ihre Mutter ist seit Januar pflegebedürftig", en: "Her mother has needed care since January" }, accept: ["in need of care", "in need of nursing care", "requiring care", "care-dependent"], hint: "Pflege + bedürftig (in need of). The official word on every form; the everyday one is Pflegefall." },
        { id: "de-u102l4-betreuen", type: "vocab", front: "betreuen", reading: "betreuen", meaning: "to look after (care for over time)", example: { jp: "Eine Nachbarin betreut ihn am Wochenende, damit die Tochter Ruhe hat.", en: "A neighbour looks after him at the weekend so that the daughter gets some rest." }, drill: { jp: "Eine Nachbarin kann ihn samstags betreuen", en: "A neighbour can look after him on Saturdays" }, accept: ["to look after", "to care for", "to supervise", "look after"], hint: "Broader than pflegen: you betreust children, students, a project. It is responsibility over time, not washing and feeding." },
        { id: "de-u102l4-diepravention", type: "vocab", front: "die Prävention", reading: "diepravention", meaning: "prevention (measures before illness starts)", example: { jp: "Prävention ist billiger als jede Behandlung, aber sie zeigt sich erst nach Jahren.", en: "Prevention is cheaper than any treatment, but it only shows after years." }, drill: { jp: "Die Prävention kostet viel weniger Geld", en: "Prevention costs much less money" }, accept: ["prevention", "preventive care", "prophylaxis"], hint: "The system's word; die Vorsorge (u67) is the same idea in everyday German — zur Vorsorge gehen." },
        { id: "de-u102l4-diefruherkennung", type: "vocab", front: "die Früherkennung", reading: "diefruherkennung", meaning: "early detection (screening)", example: { jp: "Die Früherkennung zahlt die Kasse, die Behandlung danach nur zum Teil.", en: "The insurer pays for early detection, and for the treatment afterwards only in part." }, drill: { jp: "Die Früherkennung rettet jedes Jahr Leben", en: "Early detection saves lives every year" }, accept: ["early detection", "screening", "early diagnosis"], hint: "früh + erkennen. Die Vorsorge (u67) is the appointment you go to; die Früherkennung is what it is for." },
        { id: "de-u102l4-uberlastet", type: "vocab", front: "überlastet", reading: "uberlastet", meaning: "overstretched (loaded beyond capacity)", example: { jp: "Die Notaufnahme ist am Wochenende regelmäßig überlastet.", en: "The emergency department is regularly overstretched at the weekend." }, drill: { jp: "Die Notaufnahme ist am Wochenende überlastet", en: "The emergency department is overstretched at the weekend" }, accept: ["overstretched", "overloaded", "overburdened", "overwhelmed"], hint: "über + Last (load). Used of people, wards, networks and roads alike — das Netz ist überlastet." },
        { id: "de-u102l4-derengpass", type: "vocab", front: "der Engpass", reading: "derengpass", meaning: "bottleneck (the point where supply runs short)", example: { jp: "Der größte Engpass sind nicht die Betten, sondern die Leute, die sie betreuen.", en: "The biggest bottleneck is not the beds but the people who look after them." }, drill: { jp: "Der Engpass liegt beim Personal", en: "The bottleneck is in the staffing" }, accept: ["bottleneck", "shortage", "constraint", "narrow point"], hint: "eng + Pass — a narrow mountain pass. The image is traffic: everything fits until this one point." },
      ],
    },
  ],
};
