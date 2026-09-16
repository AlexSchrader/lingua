// NO Unit 74 — Studier og forskning ("Study and research") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 1 (B1)" — a free slot, themed here per CLAUDE.md →
// "No front language". Conventions are unit1.js §1–§9.
//
// WHY THIS THEME. u18 "Skole og arbeid" gave the classroom (bok, penn, lekse,
// oppgave, fag, tavle, karakter) and u24 "Arbeid og utdanning" gave the
// application and the qualification (søknad, stilling, frist, utdanning,
// universitet, kurs, emne, eksamen, å bestå, vitnemål, kunnskap, resultat).
// Neither gives the learner a single word for what actually happens INSIDE a
// course — the lecture, the syllabus, the supervisor, the hand-in, failing — or
// for reading a piece of research, which is the register most B1 texts are
// written in. That gap is this unit.
//
// ⚠ NO LEXEME PAIRS, deliberately: å forske (en forsker u34) · å analysere
// (ei analyse, same unit) · en konklusjon (å konkludere, same lesson) ·
// ei tvil (å tvile, same lesson) · å bevise (et bevis u34) · ei tolkning
// (å tolke u49) · en metode and en teori (both u34). In each case the corpus
// already has one member of the pair and this unit takes the other, once.
//
// GENDER: ei forelesning · ei innlevering are feminine. ⚠ `forskning` is feminine
// but a MASS noun, so it is taught bare (§1b), and ⚠ `en analyse` is MASCULINE,
// not feminine — the -e loanword class, like en diagnose (u67). Both corrected
// after the content gate BLOCKed them, 2026-09-16. And ei undersøkelse?
// ⚠ NO — undersøkelse is -else and therefore MASCULINE: en undersøkelse. That
// is the single commonest gender error in this whole band and it is worth the
// warning: -else masculine, -ing/-ning feminine, and they look equally abstract.
// ei slutning is feminine (-ning); et pensum, et studium, et seminar, et notat,
// et kull, et fagfelt, et funn are neuter; en student, en veileder masculine.
// FIRST FEMININE is `ei forelesning` (l1) and carries the en-/ei- note §1 wants.
//
// SCOPE: frozen base u1–u50 plus u63–u73 plus this unit's earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT74 = {
  id: "no-u74",
  lang: "no",
  title: "Studier og forskning",
  order: 74,
  stage: "b1",
  lessons: [
    // Lesson 1: the shape of a Norwegian course, from the inside.
    {
      id: "no-u74l1",
      unit: 74,
      lesson: 1,
      title: "På universitetet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a course is organised — lectures, reading list, hand-ins — and what happens if you fail.",
      items: [
        { id: "no-u74l1-forelesning", type: "vocab", front: "ei forelesning", reading: "eiforelesning", meaning: "a lecture", example: { jp: "Forelesninga begynner klokka ni på mandag.", en: "The lecture starts at nine on Monday." }, accept: ["lecture", "class"], drill: { jp: "Vi har ei forelesning hver mandag", en: "We have a lecture every Monday" }, hint: "å forelese (to read aloud in front of people) + -ing → feminine: forelesninga. Print also writes en/-en; this course marks ei so the definite -a stays predictable." },
        { id: "no-u74l1-pensum", type: "vocab", front: "et pensum", reading: "etpensum", meaning: "a syllabus", example: { jp: "Pensum er på mange sider i år.", en: "The syllabus is many pages this year." }, accept: ["syllabus", "reading list", "curriculum"], drill: { jp: "Vi har et pensum på mange sider", en: "We have a syllabus of many pages" }, hint: "A Latin word, so neuter and unchanged in the plural: et pensum, pensumet — though most people just say pensum, with no article at all." },
        { id: "no-u74l1-studium", type: "vocab", front: "et studium", reading: "etstudium", meaning: "a degree programme", example: { jp: "Studiet i Bergen varer i tre år.", en: "The degree programme in Bergen lasts three years." }, accept: ["course of study", "programme", "studies"], drill: { jp: "Dette er et studium på tre år", en: "This is a degree programme of three years" }, hint: "⚠ Another Latin one, and the definite is irregular: et studium → studiet, flere studier. Nobody says studiumet." },
        { id: "no-u74l1-student", type: "vocab", front: "en student", reading: "enstudent", meaning: "a student", example: { jp: "Hun er student i Oslo og bor i en leilighet.", en: "She is a student in Oslo and lives in a flat." }, accept: ["student", "undergraduate"], drill: { jp: "Hun er en student fra Bergen", en: "She is a student from Bergen" }, hint: "Masculine: studenten. ⚠ Norwegian drops the article in \"hun er student\", exactly as with jobs — hun er lege, han er kokk." },
        { id: "no-u74l1-innlevering", type: "vocab", front: "ei innlevering", reading: "eiinnlevering", meaning: "a hand-in", example: { jp: "Innleveringa må være inne innen fredag.", en: "The hand-in has to be in by Friday." }, accept: ["hand-in", "submission", "assignment"], drill: { jp: "Vi har ei innlevering hver fredag", en: "We have a hand-in every Friday" }, hint: "inn + å levere (u24) + -ing → feminine: innleveringa. The word every Norwegian student dreads, together with en frist (u24)." },
        { id: "no-u74l1-stryke", type: "vocab", front: "å stryke", reading: "astryke", meaning: "to fail", example: { jp: "Han strøk på eksamen, men tok den igjen i mai.", en: "He failed the exam, but took it again in May." }, accept: ["fail", "to flunk", "to iron"], drill: { jp: "Det er tungt å stryke på eksamen", en: "It is hard to fail an exam" }, hint: "stryker, strøk, har strøket. ⚠ The exact opposite of å bestå (u24). Same verb also means to iron a shirt and to stroke a cat — context does all the work." },
      ],
    },
    // Lesson 2: actually doing the studying.
    {
      id: "no-u74l2",
      unit: 74,
      lesson: 2,
      title: "Å studere",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how you study — the seminar, the notes, the revision, the people around you.",
      items: [
        { id: "no-u74l2-studere", type: "vocab", front: "å studere", reading: "astudere", meaning: "to study", example: { jp: "Hun studerer i Bergen og trives godt.", en: "She studies in Bergen and is happy there." }, accept: ["study", "to be at university"], drill: { jp: "Det er fint å studere i Bergen", en: "It is nice to study in Bergen" }, hint: "studerer, studerte. ⚠ Not the same as å lese (u18), which is what Norwegians say for studying for a test: jeg leser til eksamen. Å studere is what you do for three years." },
        { id: "no-u74l2-seminar", type: "vocab", front: "et seminar", reading: "etseminar", meaning: "a seminar", example: { jp: "Seminaret var bedre enn forelesninga.", en: "The seminar was better than the lecture." }, accept: ["seminar", "workshop"], drill: { jp: "Vi har et seminar hver onsdag", en: "We have a seminar every Wednesday" }, hint: "Neuter: seminaret. The small class where you talk, as against ei forelesning where you listen." },
        { id: "no-u74l2-veileder", type: "vocab", front: "en veileder", reading: "enveileder", meaning: "a supervisor", example: { jp: "Veilederen hennes leste oppgaven.", en: "Her supervisor read the assignment." }, accept: ["supervisor", "adviser", "mentor", "guide"], drill: { jp: "Hun har en veileder i Bergen", en: "She has a supervisor in Bergen" }, hint: "en vei (u20) + å lede + -er: the one who leads the way. Masculine: veilederen. Also a printed guide, a how-to." },
        { id: "no-u74l2-notat", type: "vocab", front: "et notat", reading: "etnotat", meaning: "a written note", example: { jp: "Notatene hans var bedre enn boka.", en: "His notes were better than the book." }, accept: ["note", "a note", "memo", "notes"], drill: { jp: "Han skrev et notat i timen", en: "He wrote a note in class" }, hint: "From å notere (u33). Neuter: notatet, flere notater. A written note you keep — a message to somebody else is en beskjed (u21)." },
        { id: "no-u74l2-repetere", type: "vocab", front: "å repetere", reading: "arepetere", meaning: "to revise", example: { jp: "Jeg repeterer pensum hver kveld.", en: "I revise the syllabus every evening." }, accept: ["revise", "to review", "to go over again"], drill: { jp: "Det er viktig å repetere pensum ofte", en: "It is important to revise the syllabus often" }, hint: "repeterer, repeterte. ⚠ Close to å gjenta (u33), but gjenta is to say something again and repetere is to GO THROUGH something again." },
        { id: "no-u74l2-kull", type: "vocab", front: "et kull", reading: "etkull", meaning: "a cohort", example: { jp: "Kullet hennes var på ti studenter.", en: "Her cohort was ten students." }, accept: ["cohort", "year group", "class", "intake"], drill: { jp: "Vi var et kull på ti studenter", en: "We were a cohort of ten students" }, hint: "Neuter and unchanged in the plural: et kull, kullet, flere kull. Everyone who started the same year — and it is also the word for a litter of puppies." },
      ],
    },
    // Lesson 3: reading research. These six are the nouns that carry a Norwegian
    // research text.
    {
      id: "no-u74l3",
      unit: 74,
      lesson: 3,
      title: "Forskning",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a piece of research in Norwegian — what was investigated, what was found, in what field.",
      items: [
        { id: "no-u74l3-forskning", type: "vocab", front: "forskning", reading: "forskning", meaning: "research", example: { jp: "Forskninga viser at barn sover for lite.", en: "The research shows that children sleep too little." }, accept: ["a research", "scientific work", "study"], drill: { jp: "Forskning tar tid og penger", en: "Research takes time and money" }, hint: "en forsker (u34) + -ning. ⚠ A MASS noun, so no article on the card (unit1 §1b) — ei forskning is not Norwegian. Feminine, definite forskninga, and nearly always said in the definite: forskninga viser …" },
        { id: "no-u74l3-undersokelse", type: "vocab", front: "en undersøkelse", reading: "enundersokelse", meaning: "a survey", example: { jp: "Undersøkelsen ble gjort i Oslo og Bergen.", en: "The survey was done in Oslo and Bergen." }, accept: ["survey", "study", "investigation", "examination"], drill: { jp: "Vi gjorde en undersøkelse i byen", en: "We did a survey in town" }, hint: "under + å søke (u24) + -else. ⚠ MASCULINE, no feminine form: undersøkelsen. It looks exactly as abstract as ei forskning next door, and the ending is what decides — not the meaning." },
        { id: "no-u74l3-analyse", type: "vocab", front: "en analyse", reading: "enanalyse", meaning: "an analysis", example: { jp: "Analysen tok lengre tid enn de trodde.", en: "The analysis took longer than they thought." }, accept: ["analysis", "breakdown"], drill: { jp: "Vi gjorde en analyse av tallene", en: "We did an analysis of the numbers" }, hint: "⚠ MASCULINE: en analyse, analysen. The -e loanwords take en, not ei — the same class as en diagnose (u67) and en kilde (u65); analysa is not Bokmål. The verb å analysere is not taught separately; one word, one mastery track." },
        { id: "no-u74l3-funn", type: "vocab", front: "et funn", reading: "etfunn", meaning: "a finding", example: { jp: "Funnene i undersøkelsen var uvanlige.", en: "The findings in the survey were unusual." }, accept: ["finding", "discovery", "result"], drill: { jp: "Dette var et funn ingen hadde sett", en: "This was a finding nobody had seen" }, hint: "From å finne (u7). Neuter and unchanged in the plural: et funn, funnet, flere funn. Also an archaeological find." },
        { id: "no-u74l3-fagfelt", type: "vocab", front: "et fagfelt", reading: "etfagfelt", meaning: "a field", example: { jp: "Fagfeltet hennes er psykisk helse.", en: "Her field is mental health." }, accept: ["field", "discipline", "subject area"], drill: { jp: "Dette er et fagfelt hun kjenner godt", en: "This is a field she knows well" }, hint: "et fag (u18) + et felt. Neuter: fagfeltet. What in English is simply \"her field\"." },
        { id: "no-u74l3-innsikt", type: "vocab", front: "ei innsikt", reading: "eiinnsikt", meaning: "an insight", example: { jp: "Boka ga meg ei innsikt jeg ikke hadde.", en: "The book gave me an insight I did not have." }, accept: ["insight", "understanding", "grasp"], drill: { jp: "Boka ga meg ei innsikt jeg trengte", en: "The book gave me an insight I needed" }, hint: "inn + sikt (sight). Feminine: innsikta — print also writes innsikten. Deeper than kunnskap (u24): kunnskap is what you know, innsikt is what you have understood." },
      ],
    },
    // Lesson 4: drawing a conclusion, and the verbs of being careful about it.
    {
      id: "no-u74l4",
      unit: 74,
      lesson: 4,
      title: "Å trekke en slutning",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Draw a conclusion from evidence, and say how sure of it you are.",
      items: [
        { id: "no-u74l4-slutning", type: "vocab", front: "ei slutning", reading: "eislutning", meaning: "a conclusion", example: { jp: "Slutninga hans var ikke sannsynlig.", en: "His conclusion was not plausible." }, accept: ["conclusion", "inference", "deduction"], drill: { jp: "Dette er ei slutning vi må se på", en: "This is a conclusion we have to look at" }, hint: "å slutte (u5) + -ning → feminine: slutninga. ⚠ Here å slutte carries its OTHER sense — not \"to stop\" but \"to infer\". The fixed phrase is å trekke en slutning." },
        { id: "no-u74l4-konkludere", type: "vocab", front: "å konkludere", reading: "akonkludere", meaning: "to conclude", example: { jp: "Forskerne konkluderte med at tallene var for høye.", en: "The researchers concluded that the numbers were too high." }, accept: ["conclude", "to come to a conclusion"], drill: { jp: "Det er lett å konkludere for tidlig", en: "It is easy to conclude too early" }, hint: "konkluderer, konkluderte. ⚠ It takes MED: konkludere med at … — never konkludere at. The noun is en konklusjon." },
        { id: "no-u74l4-anta", type: "vocab", front: "å anta", reading: "aanta", meaning: "to assume", example: { jp: "Vi antar at alle kommer i morgen.", en: "We assume that everyone is coming tomorrow." }, accept: ["assume", "to presume", "to suppose"], drill: { jp: "Det er lett å anta for mye", en: "It is easy to assume too much" }, hint: "an + å ta (u13): antar, antok, har antatt. The verb behind antakelig (u69) — \"assumable\", and so \"probably\"." },
        { id: "no-u74l4-tvile", type: "vocab", front: "å tvile", reading: "atvile", meaning: "to doubt", example: { jp: "Jeg tviler på at han kommer.", en: "I doubt that he is coming." }, accept: ["doubt", "to be doubtful", "to question"], drill: { jp: "Det er lov å tvile på noe", en: "It is allowed to doubt something" }, hint: "tviler, tvilte, and it takes på: tvile på noe. The noun ei tvil is not taught separately — one word, one card." },
        { id: "no-u74l4-fastsla", type: "vocab", front: "å fastslå", reading: "afastsla", meaning: "to establish", example: { jp: "Undersøkelsen fastslo at tallene var feil.", en: "The survey established that the numbers were wrong." }, accept: ["establish", "to determine", "to state as fact"], drill: { jp: "Det er tungt å fastslå noe sikkert", en: "It is hard to establish anything for certain" }, hint: "fast (u46) + å slå (u44): fastslår, fastslo, har fastslått. The strongest verb in this lesson — what is fastslått is settled, not argued." },
        { id: "no-u74l4-sammenligne", type: "vocab", front: "å sammenligne", reading: "asammenligne", meaning: "to compare", example: { jp: "De sammenlignet tallene fra to år.", en: "They compared the numbers from two years." }, accept: ["compare", "to contrast"], drill: { jp: "Det er viktig å sammenligne to tall", en: "It is important to compare two numbers" }, hint: "sammen (u3) + lik (alike) → sammenligner, sammenlignet. It takes med: sammenligne noe med noe annet. Also spelt sammenlikne; both are correct Bokmål." },
      ],
    },
  ],
};
