// DE Unit 103 — Bildung und Forschung ("Education and research") — B2 (slot: education-research)
// THEME CONTRACT (block 2, u101–u113): this unit owns the INSTITUTIONS — school types
// and who gets through them (l1), higher education and degrees (l2), research bodies and
// their money (l3), learning after school ends (l4). The classroom itself (Lehrer,
// Klasse, Prüfung, Note, Zeugnis) belongs to u20/u24 and is used here, not re-taught.
// Research METHOD and evidence words (Studie, Methode, Beleg, Hypothese) are left to
// block 1's u89/u94 — lower slot wins, so this unit stays on the institutional side.
// Conventions: front = real orthography, reading = its ASCII fold (ä→a, ö→o, ü→u, ß→ss).
export const DE_UNIT103 = {
  id: "de-u103",
  lang: "de",
  title: "Bildung und Forschung",
  order: 103,
  stage: "b2",
  lessons: [
    {
      id: "de-u103l1",
      unit: 103,
      lesson: 1,
      title: "Schulformen und Chancen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a school system sorts children — which school follows which, when the decision is made, and who is left behind by it.",
      items: [
        { id: "de-u103l1-diegrundschule", type: "vocab", front: "die Grundschule", reading: "diegrundschule", meaning: "primary school", example: { jp: "In der Grundschule sitzen noch alle Kinder zusammen in einer Klasse.", en: "In primary school all the children still sit together in one class." }, drill: { jp: "Die Grundschule dauert hier vier Jahre", en: "Primary school lasts four years here" }, accept: ["primary school", "elementary school"], hint: "Grund = the base. Four years in most of Germany, then the sorting starts — earlier than almost anywhere else." },
        { id: "de-u103l1-dasgymnasium", type: "vocab", front: "das Gymnasium", reading: "dasgymnasium", meaning: "academic secondary school (grammar school)", example: { jp: "Wer an das Gymnasium geht, kann später ohne Umweg studieren.", en: "Whoever goes to the academic secondary school can study later without a detour." }, drill: { jp: "Das Gymnasium beginnt nach vier Jahren", en: "The grammar school begins after four years" }, accept: ["grammar school", "academic secondary school", "high school", "gymnasium"], hint: "Nothing to do with sport — that is die Turnhalle. Plural: die Gymnasien." },
        { id: "de-u103l1-dieschulform", type: "vocab", front: "die Schulform", reading: "dieschulform", meaning: "school type (track in the system)", example: { jp: "Welche Schulform ein Kind besucht, entscheidet sich schon mit zehn Jahren.", en: "Which school type a child attends is decided as early as at ten years old." }, drill: { jp: "Die Schulform entscheidet über den Abschluss", en: "The school type determines the qualification" }, accept: ["school type", "type of school", "school track"], hint: "The German system has several parallel Schulformen rather than one comprehensive school — the point most arguments about Bildung start from." },
        { id: "de-u103l1-derubergang", type: "vocab", front: "der Übergang", reading: "derubergang", meaning: "transition (from one stage to the next)", example: { jp: "Der Übergang von der Grundschule auf das Gymnasium ist für viele hart.", en: "The transition from primary school to grammar school is hard for many." }, drill: { jp: "Der Übergang fällt vielen Kindern schwer", en: "The transition is hard for many children" }, accept: ["transition", "changeover", "crossing", "move"], hint: "über + gehen: the going-across itself. Also used of jobs and eras — der Übergang in die Rente." },
        { id: "de-u103l1-diechancengleichheit", type: "vocab", front: "die Chancengleichheit", reading: "diechancengleichheit", meaning: "equality of opportunity", example: { jp: "Von Chancengleichheit kann man kaum sprechen, wenn Nachhilfe Geld kostet.", en: "You can hardly speak of equality of opportunity if tutoring costs money." }, drill: { jp: "Die Chancengleichheit bleibt ein schönes Wort", en: "Equality of opportunity remains a nice word" }, accept: ["equality of opportunity", "equal opportunity", "equal opportunities"], hint: "Chance + Gleichheit. Note the French pronunciation of Chance: SHAHN-se." },
        { id: "de-u103l1-benachteiligt", type: "vocab", front: "benachteiligt", reading: "benachteiligt", meaning: "disadvantaged (put at a structural disadvantage)", example: { jp: "Kinder aus armen Familien sind vom ersten Tag an benachteiligt.", en: "Children from poor families are disadvantaged from the first day." }, drill: { jp: "Arme Familien sind hier klar benachteiligt", en: "Poor families are clearly disadvantaged here" }, accept: ["disadvantaged", "at a disadvantage", "put at a disadvantage"], hint: "From der Nachteil (u53), the drawback. The verb benachteiligen means to treat someone worse — often without meaning to." },
      ],
    },
    {
      id: "de-u103l2",
      unit: 103,
      lesson: 2,
      title: "Hochschule und Abschluss",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about university: what you study, who teaches it, how a place is funded, and what comes after the first degree.",
      items: [
        { id: "de-u103l2-diehochschule", type: "vocab", front: "die Hochschule", reading: "diehochschule", meaning: "higher education institution", example: { jp: "An einer Hochschule kann man auch ohne Gymnasium studieren, wenn man lange genug gearbeitet hat.", en: "At a higher education institution you can study even without grammar school if you have worked long enough." }, drill: { jp: "Die Hochschule nimmt im Herbst niemanden", en: "The higher education institution takes nobody in autumn" }, accept: ["higher education institution", "university", "college", "institute of higher education"], hint: "The umbrella term: every Universität is a Hochschule, but so is a Fachhochschule, which is closer to a polytechnic." },
        { id: "de-u103l2-derstudiengang", type: "vocab", front: "der Studiengang", reading: "derstudiengang", meaning: "degree programme (course of study)", example: { jp: "Der Studiengang dauert sechs Semester und endet mit einer langen Arbeit.", en: "The degree programme lasts six semesters and ends with a long paper." }, drill: { jp: "Der Studiengang dauert nur sechs Semester", en: "The degree programme lasts only six semesters" }, accept: ["degree programme", "degree program", "course of study", "programme"], hint: "Studium + Gang, the walk through it. Das Studium is the activity; der Studiengang is the structure you walk through." },
        { id: "de-u103l2-dasstudium", type: "vocab", front: "das Studium", reading: "dasstudium", meaning: "studies (a university education as a whole)", example: { jp: "Sie hat ihr Studium neben der Arbeit gemacht und dafür acht Jahre gebraucht.", en: "She did her studies alongside her job and needed eight years for it." }, drill: { jp: "Das Studium hat acht Jahre gedauert", en: "The studies took eight years" }, accept: ["studies", "degree", "university education", "course"], hint: "Singular in German where English goes plural: mein Studium war hart. Plural die Studien means research studies instead." },
        { id: "de-u103l2-derdozent", type: "vocab", front: "der Dozent", reading: "derdozent", meaning: "lecturer (university teacher)", example: { jp: "Der Dozent hat das Seminar übernommen, weil der Professor krank war.", en: "The lecturer took over the seminar because the professor was ill." }, drill: { jp: "Der Dozent hält das Seminar allein", en: "The lecturer runs the seminar alone" }, accept: ["lecturer", "university teacher", "instructor", "tutor"], hint: "Anyone who teaches at a Hochschule without a chair. Female: die Dozentin. Weak noun: den Dozenten, dem Dozenten." },
        { id: "de-u103l2-dasseminar", type: "vocab", front: "das Seminar", reading: "dasseminar", meaning: "seminar (small taught class)", example: { jp: "Im Seminar müssen alle reden, in der Vorlesung hört man nur zu.", en: "In the seminar everyone has to talk; in the lecture you only listen." }, drill: { jp: "Das Seminar beginnt erst im November", en: "The seminar only starts in November" }, accept: ["seminar", "class", "small group class"], hint: "The pair to die Vorlesung (u24): the Vorlesung is read at you, the Seminar expects you to speak." },
        { id: "de-u103l2-diepromotion", type: "vocab", front: "die Promotion", reading: "diepromotion", meaning: "doctorate (the PhD process)", example: { jp: "Nach dem Abschluss hat er eine Promotion begonnen und arbeitet halbtags am Institut.", en: "After the degree he began a doctorate and works half-time at the institute." }, drill: { jp: "Die Promotion dauert schon fünf Jahre", en: "The doctorate has already been going five years" }, accept: ["doctorate", "PhD", "doctoral degree", "doctoral studies"], hint: "False friend: nothing to do with advertising or a job promotion. Promovieren = to do a doctorate." },
      ],
    },
    {
      id: "de-u103l3",
      unit: 103,
      lesson: 3,
      title: "Forschen und finanzieren",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where research happens and who pays for it: institutes and chairs, outside money, scholarships, and the next generation of researchers.",
      items: [
        { id: "de-u103l3-dasinstitut", type: "vocab", front: "das Institut", reading: "dasinstitut", meaning: "institute (research body)", example: { jp: "Das Institut gehört zur Hochschule, hat aber einen eigenen Namen und eigenes Geld.", en: "The institute belongs to the university but has its own name and its own money." }, drill: { jp: "Das Institut liegt neben der Hochschule", en: "The institute is next to the university" }, accept: ["institute", "research institute"], hint: "Stress on the last syllable: Insti-TUT. Plural die Institute." },
        { id: "de-u103l3-derlehrstuhl", type: "vocab", front: "der Lehrstuhl", reading: "derlehrstuhl", meaning: "professorial chair (a professor's post)", example: { jp: "Der Lehrstuhl ist seit zwei Jahren frei, weil sich niemand bewirbt.", en: "The chair has been vacant for two years because nobody applies." }, drill: { jp: "Der Lehrstuhl bleibt weiterhin unbesetzt", en: "The chair remains unfilled" }, accept: ["chair", "professorship", "professorial chair"], hint: "Literally the teaching chair — the post, its money and its staff, not the furniture." },
        { id: "de-u103l3-erforschen", type: "vocab", front: "erforschen", reading: "erforschen", meaning: "to research (investigate systematically)", example: { jp: "Ein kleines Team erforscht seit Jahren, warum manche Kinder schneller lesen lernen.", en: "A small team has been researching for years why some children learn to read faster." }, drill: { jp: "Wir erforschen die Ursachen ganz genau", en: "We are researching the causes very precisely" }, accept: ["to research", "research", "to investigate", "to explore"], hint: "er- + forschen gives it an endpoint: forschen is the activity, erforschen is working a subject out." },
        { id: "de-u103l3-diedrittmittel", type: "vocab", front: "die Drittmittel", reading: "diedrittmittel", meaning: "third-party research funding", example: { jp: "Ohne Drittmittel könnte das Institut nur die Hälfte seiner Leute bezahlen.", en: "Without third-party funding the institute could pay only half of its people." }, drill: { jp: "Die Drittmittel machen fast alles möglich", en: "The third-party funding makes almost everything possible" }, accept: ["third-party funding", "external funding", "outside funding", "grant money"], hint: "Plural only. Money from a third party — industry, a foundation, the EU — next to the state's own budget." },
        { id: "de-u103l3-dasstipendium", type: "vocab", front: "das Stipendium", reading: "dasstipendium", meaning: "scholarship (money to study on)", example: { jp: "Mit einem Stipendium muss sie nicht mehr am Wochenende arbeiten.", en: "With a scholarship she no longer has to work at the weekend." }, drill: { jp: "Das Stipendium läuft im Sommer aus", en: "The scholarship runs out in summer" }, accept: ["scholarship", "grant", "studentship", "fellowship"], hint: "Plural die Stipendien. Ein Stipendium bekommen, not verdienen — it is awarded, not earned by work." },
        { id: "de-u103l3-dernachwuchs", type: "vocab", front: "der Nachwuchs", reading: "dernachwuchs", meaning: "next generation (of a profession)", example: { jp: "Der Nachwuchs geht in die Industrie, weil dort die Stellen sicher sind.", en: "The next generation goes into industry, because the posts there are secure." }, drill: { jp: "Der Nachwuchs fehlt dem ganzen Institut", en: "The next generation is missing from the whole institute" }, accept: ["next generation", "young talent", "junior staff", "young researchers"], hint: "nach + wachsen, what grows up behind you. In a family it means offspring: Nachwuchs bekommen = to have a baby." },
      ],
    },
    {
      id: "de-u103l4",
      unit: 103,
      lesson: 4,
      title: "Weiterlernen nach der Schule",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about learning that continues after school: further training at work, private tutoring, what a curriculum leaves out, and who is left out.",
      items: [
        { id: "de-u103l4-diefortbildung", type: "vocab", front: "die Fortbildung", reading: "diefortbildung", meaning: "further training (professional development)", example: { jp: "Die Firma bezahlt jedes Jahr eine Fortbildung, aber nur in der Freizeit.", en: "The company pays for one further training course every year, but only in your free time." }, drill: { jp: "Die Fortbildung findet im Frühling statt", en: "The further training takes place in spring" }, accept: ["further training", "professional development", "continuing education", "training course"], hint: "fort = onwards. Die Ausbildung (u24) makes you into something; die Fortbildung keeps you current in it." },
        { id: "de-u103l4-dienachhilfe", type: "vocab", front: "die Nachhilfe", reading: "dienachhilfe", meaning: "private tutoring (extra paid help)", example: { jp: "Fast jedes zweite Kind in der Klasse bekommt Nachhilfe in Mathe.", en: "Almost every second child in the class gets private tutoring in maths." }, drill: { jp: "Die Nachhilfe kostet dreißig Euro pro Stunde", en: "The tutoring costs thirty euros an hour" }, accept: ["private tutoring", "tutoring", "extra lessons", "coaching"], hint: "nach + Hilfe: help afterwards, outside school. A whole industry, and one of the clearest places money turns into grades." },
        { id: "de-u103l4-derlehrplan", type: "vocab", front: "der Lehrplan", reading: "derlehrplan", meaning: "curriculum (official plan of what is taught)", example: { jp: "Im Lehrplan steht nichts über Steuern, obwohl jeder sie später zahlen muss.", en: "There is nothing in the curriculum about taxes, although everyone has to pay them later." }, drill: { jp: "Der Lehrplan ändert sich fast nie", en: "The curriculum almost never changes" }, accept: ["curriculum", "syllabus", "teaching plan"], hint: "Each Bundesland writes its own — one reason moving house mid-school-year is painful in Germany." },
        { id: "de-u103l4-vermitteln", type: "vocab", front: "vermitteln", reading: "vermitteln", meaning: "to impart (get knowledge across to someone)", example: { jp: "Eine gute Fortbildung vermittelt nicht nur Wissen, sondern auch Sicherheit.", en: "Good further training imparts not only knowledge but also confidence." }, drill: { jp: "Die Schule soll auch Werte vermitteln", en: "School is also supposed to impart values" }, accept: ["to impart", "to convey", "to teach", "to pass on", "to mediate"], hint: "Two senses: passing something on (Wissen vermitteln) and arranging between parties (eine Wohnung vermitteln, in einem Streit vermitteln)." },
        { id: "de-u103l4-begabt", type: "vocab", front: "begabt", reading: "begabt", meaning: "gifted (naturally talented)", example: { jp: "Ein begabtes Kind fällt in einer großen Klasse oft gar nicht auf.", en: "A gifted child often does not stand out at all in a large class." }, drill: { jp: "Der Junge ist außergewöhnlich begabt", en: "The boy is exceptionally gifted" }, accept: ["gifted", "talented", "able"], hint: "From die Gabe, the gift — the same image as English. Begabt für Sprachen, begabt in Mathe." },
        { id: "de-u103l4-dieungleichheit", type: "vocab", front: "die Ungleichheit", reading: "dieungleichheit", meaning: "inequality (unequal distribution)", example: { jp: "Die Ungleichheit beginnt nicht an der Hochschule, sondern lange davor.", en: "The inequality does not begin at university but long before." }, drill: { jp: "Die Ungleichheit wächst seit vielen Jahren", en: "Inequality has been growing for many years" }, accept: ["inequality", "disparity", "unequal distribution"], hint: "un- + gleich + -heit. The economic sense usually needs no adjective: Ungleichheit alone is understood as of income and chances." },
      ],
    },
  ],
};
