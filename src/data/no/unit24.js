// NO Unit 24 — Arbeid og utdanning ("Work and school") — A2
// REVISITS A1 u18 Skole og arbeid, which owns å lese, å skrive, ei bok, en penn,
// et papir, et ord, ei lekse, en oppgave, et fag, ei tavle, en sekk, en karakter,
// arbeid, et kontor, en sjef, en kollega, et yrke, ei lønn, en bonde, en kokk,
// en sjåfør, en selger, en snekker, en frisør. A1 names the JOBS and the CLASSROOM
// OBJECTS; this unit is the PROCESS — getting hired, working on something, being
// examined. No A1 front is taken back.
//
// `et møte` was screened out: scripts/free.mjs flagged it as a lexeme relative of
// A1's `å møte` (u2). It would have validated clean while being one word twice —
// exactly the class front-uniqueness cannot see.
//
// GENDER — AND THE EXCEPTION TRAVELS WITH THE RULE, or it gets over-applied in
// the other direction next time. Most -ing nouns take EITHER gender in Bokmål
// (stilling, avdeling, utdanning, løsning, endring, utvikling, erfaring,
// samling, feiring, utstilling), so the band marks them `ei` — §1 exists so the
// definite is derivable, and -inga is what a learner then predicts.
// ⚠️ THE EXCEPTIONS: `retning` and `setning` are MASCULINE ONLY. Marking either
// `ei` is a real error, and `ei retning` in my u23 was exactly that. Under §1 the
// ei marking is a PROMISE that the definite ends in -a, so getting it wrong does
// not mislabel the word, it teaches a form that does not exist.
// The first version of this note said "-ing nouns are masculine", generalised
// from the true finding about retning. I applied it here and sent it to two other
// seats before checking it. Both halves are written down now for that reason.
//
// Subordinators are A1's REAL set: at, fordi, hvis, men, eller, når. NOT `som`,
// `for` or `der` — all three are untaught in A1's 480 and lint structurally
// cannot see them (lint.js:226 excuses `som` as an inflection of `sommer`).
// My u29 claims all three; until it lands, nothing in the band may use them.
//   FREE: Erling, Kari, Anna, Jonas, Oslo, Bergen, Norge | kafé, telefon, kontor, prosjekt, universitet, eksamen, kurs, buss, bil | 2000
export const NO_UNIT24 = {
  id: "no-u24",
  lang: "no",
  title: "Arbeid og utdanning",
  order: 24,
  stage: "a2",
  lessons: [
    {
      id: "no-u24l1",
      unit: 24,
      lesson: 1,
      title: "Applying for work",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Apply for a job and meet a deadline — en søknad, å søke, en stilling, en frist, å levere.",
      items: [
        { id: "no-u24l1-ensoknad", type: "vocab", front: "en søknad", reading: "ensoknad", meaning: "application", example: { jp: "Søknaden må leveres på fredag, fordi fristen er tidlig neste uke.", en: "The application has to be handed in on Friday, because the deadline is early next week." }, accept: ["an application"], drill: { jp: "Jeg skriver en søknad nå", en: "I am writing an application now" }, hint: "SURK-nad. Masculine: definite søknaden, plural søknader. Built on å søke, the verb below." },
        { id: "no-u24l1-asoke", type: "vocab", front: "å søke", reading: "asoke", meaning: "to apply", example: { jp: "Hun søker på en stilling i Bergen, men hun vet ikke hva sjefen sier.", en: "She is applying for a position in Bergen, but she does not know what the boss says." }, accept: ["apply", "to seek", "seek", "to search"], drill: { jp: "Det er lett å søke her", en: "It is easy to apply here" }, hint: "SUR-ke. You apply PÅ a job in Norwegian, not for it. It also means to search — å søke på nettet." },
        { id: "no-u24l1-enstilling", type: "vocab", front: "ei stilling", reading: "eistilling", meaning: "position", example: { jp: "Stillinga er ledig fra januar, hvis vi finner en god lærer.", en: "The position is vacant from January, if we find a good teacher." }, accept: ["a position", "a job", "post", "vacancy"], drill: { jp: "Ei stilling er ledig nå", en: "A position is vacant now" }, hint: "STIL-ling. STIL-ling, feminine: definite stillinga. Most -ing nouns take either gender in Bokmål; the course marks them ei, because §1 exists so the definite is derivable and -inga is what you then predict. The exceptions are retning and setning, which are masculine only." },
        { id: "no-u24l1-enfrist", type: "vocab", front: "en frist", reading: "enfrist", meaning: "deadline", example: { jp: "Fristen går ut på mandag, men læreren sier at vi kan levere tirsdag.", en: "The deadline runs out on Monday, but the teacher says we can hand in on Tuesday." }, accept: ["a deadline", "time limit"], drill: { jp: "En frist er alltid travel", en: "A deadline is always busy" }, hint: "FRIST. Definite fristen. Å gå ut is what a frist does — it runs out." },
        { id: "no-u24l1-alevere", type: "vocab", front: "å levere", reading: "alevere", meaning: "to hand in", example: { jp: "Elevene leverer leksa på tavla, når de skriver oppgaven.", en: "The pupils hand in the homework at the board, when they write the task." }, accept: ["hand in", "to deliver", "deliver", "to submit"], drill: { jp: "Det er viktig å levere tidlig", en: "It is important to hand in early" }, hint: "le-VEH-re. Past leverte. Handing in schoolwork and delivering a parcel are the same verb." },
        { id: "no-u24l1-aansette", type: "vocab", front: "å ansette", reading: "aansette", meaning: "to hire", example: { jp: "Sjefen vil ansette to nye, fordi avdelinga har mye arbeid.", en: "The boss wants to hire two new people, because the department has a lot of work." }, accept: ["hire", "to employ", "employ", "to take on"], drill: { jp: "Det er dyrt å ansette noen", en: "It is expensive to hire someone" }, hint: "AN-set-te — an plus sette. En ansatt is an employee, and it is the past participle used as a noun." },
      ],
    },
    {
      id: "no-u24l2",
      unit: 24,
      lesson: 2,
      title: "Working on something",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a project and who you work with — en avdeling, et prosjekt, å samarbeide, å tjene — beyond A1's job names.",
      items: [
        { id: "no-u24l2-enavdeling", type: "vocab", front: "ei avdeling", reading: "eiavdeling", meaning: "department", example: { jp: "Avdelinga mi er liten, men vi samarbeider med et kontor i Oslo.", en: "My department is small, but we work together with an office in Oslo." }, accept: ["a department", "division", "section", "ward"], drill: { jp: "Ei avdeling er travel i dag", en: "A department is busy today" }, hint: "AV-de-ling. AV-de-ling. Feminine: definite avdelinga. In a hospital it is a ward." },
        { id: "no-u24l2-etprosjekt", type: "vocab", front: "et prosjekt", reading: "etprosjekt", meaning: "project", example: { jp: "Prosjektet tar tre måneder, hvis alle leverer det de skal.", en: "The project takes three months, if everyone hands in what they should." }, accept: ["a project", "scheme"], drill: { jp: "Vi jobber med et prosjekt", en: "We are working on a project" }, hint: "pro-SHEKT — the sj hush from A1 unit 1. Neuter: definite prosjektet, plural prosjekter." },
        { id: "no-u24l2-asamarbeide", type: "vocab", front: "å samarbeide", reading: "asamarbeide", meaning: "to collaborate", example: { jp: "Vi samarbeider godt, fordi alle vet hva de skal gjøre.", en: "We collaborate well, because everyone knows what they are supposed to do." }, accept: ["collaborate", "to cooperate", "cooperate", "to work together"], drill: { jp: "Det er lett å samarbeide her", en: "It is easy to collaborate here" }, hint: "SAM-ar-bei-de — sam (together) plus arbeide. A1 taught the noun arbeid at u18; this is the verb with sam- welded on." },
        { id: "no-u24l2-atjene", type: "vocab", front: "å tjene", reading: "atjene", meaning: "to earn", example: { jp: "Han tjener godt i den nye stillinga, men han jobber også mange timer.", en: "He earns well in the new position, but he also works many hours." }, accept: ["earn", "to make money", "to serve"], drill: { jp: "Det er godt å tjene penger", en: "It is good to earn money" }, hint: "HYEH-ne — tj is the same thin hush as kj, from A1 unit 1. Past tjente." },
        { id: "no-u24l2-agjennomfore", type: "vocab", front: "å gjennomføre", reading: "agjennomfore", meaning: "to carry out", example: { jp: "Vi gjennomfører prosjektet i år, men det blir tungt.", en: "We are carrying out the project this year, but it will be hard." }, accept: ["carry out", "to complete", "complete", "to see through"], drill: { jp: "Det er tungt å gjennomføre alt", en: "It is hard to carry everything out" }, hint: "YEN-nom-fur-re — the gj is a y sound, and gjennom means through. Carrying something all the way through." },
        { id: "no-u24l2-ensjanse", type: "vocab", front: "en sjanse", reading: "ensjanse", meaning: "chance", example: { jp: "Du får en sjanse, hvis du leverer oppgaven før fredag.", en: "You get a chance, if you hand in the task before Friday." }, accept: ["a chance", "opportunity"], drill: { jp: "En sjanse kommer sjelden", en: "A chance comes rarely" }, hint: "SHANG-se — sj again. Definite sjansen. En sjanse til means one more chance." },
      ],
    },
    {
      id: "no-u24l3",
      unit: 24,
      lesson: 3,
      title: "Studying",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe an education and what it is made of — en utdanning, et universitet, et kurs, et emne, å undervise.",
      items: [
        { id: "no-u24l3-enutdanning", type: "vocab", front: "ei utdanning", reading: "eiutdanning", meaning: "education", example: { jp: "Utdanninga tar fire år, men hun vil begynne å jobbe før den er slutt.", en: "The education takes four years, but she wants to start working before it ends." }, accept: ["an education", "training", "degree"], drill: { jp: "Ei utdanning er viktig", en: "An education is important" }, hint: "OOT-dan-ning. OOT-dan-ning. Feminine: definite utdanninga — the third -ing noun in this unit and all three take ei." },
        { id: "no-u24l3-etuniversitet", type: "vocab", front: "et universitet", reading: "etuniversitet", meaning: "university", example: { jp: "Universitetet i Oslo er stort, og mange elever kommer fra andre land.", en: "The university in Oslo is big, and many pupils come from other countries." }, accept: ["a university"], drill: { jp: "Et universitet er alltid stort", en: "A university is always big" }, hint: "u-ni-ver-si-TEH — stress on the last syllable, unlike English. Neuter: definite universitetet, with the -et ending doubling the look of it." },
        { id: "no-u24l3-etkurs", type: "vocab", front: "et kurs", reading: "etkurs", meaning: "course", example: { jp: "Jeg tar et kurs i norsk, fordi jeg vil forstå kollegene mine bedre.", en: "I am taking a course in Norwegian, because I want to understand my colleagues better." }, accept: ["a course", "class"], drill: { jp: "Vi tar et kurs sammen", en: "We are taking a course together" }, hint: "KUSH. Neuter: definite kurset, plural kurs unchanged. You TAKE a kurs — å ta et kurs." },
        { id: "no-u24l3-etemne", type: "vocab", front: "et emne", reading: "etemne", meaning: "subject", example: { jp: "Dette emnet er tungt, men læreren sier det igjen.", en: "This subject is hard, but the teacher says it again." }, accept: ["a subject", "topic", "module"], drill: { jp: "Et emne kan bli tungt", en: "A subject can get hard" }, hint: "EM-ne. Neuter: definite emnet, plural emner. A1's et fag is a school subject; et emne is a single module or a topic of talk." },
        { id: "no-u24l3-aundervise", type: "vocab", front: "å undervise", reading: "aundervise", meaning: "to teach", example: { jp: "Hun underviser i to fag, og hun liker fagene godt.", en: "She teaches two subjects, and she likes the subjects well." }, accept: ["teach", "to instruct", "instruct"], drill: { jp: "Det er hyggelig å undervise barn", en: "It is nice to teach children" }, hint: "UN-der-vi-se. A1's å lære covers learning AND teaching informally; å undervise is the professional act, and you undervise I a subject." },
        { id: "no-u24l3-enkunnskap", type: "vocab", front: "en kunnskap", reading: "enkunnskap", meaning: "knowledge", example: { jp: "Kunnskapen kommer sakte, men den blir bedre når du bruker den.", en: "The knowledge comes slowly, but it gets better when you use it." }, accept: ["knowledge", "expertise"], drill: { jp: "En kunnskap kommer sakte", en: "Knowledge comes slowly" }, hint: "KUNN-skap — from å kunne (A1 u13) plus -skap, the ending that makes abstract nouns. Definite kunnskapen." },
      ],
    },
    {
      id: "no-u24l4",
      unit: 24,
      lesson: 4,
      title: "Exams and getting through them",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Sit an exam and say how it went — en eksamen, å bestå, et resultat, å mestre — beyond A1's en karakter.",
      items: [
        { id: "no-u24l4-eneksamen", type: "vocab", front: "en eksamen", reading: "eneksamen", meaning: "exam", example: { jp: "Eksamen er i mai, men jeg begynner å lese i januar.", en: "The exam is in May, but I start reading in January." }, accept: ["an exam", "examination", "test"], drill: { jp: "En eksamen er alltid tung", en: "An exam is always hard" }, hint: "ek-SAA-men. Definite eksamen or eksamenen — both are used. Å ta eksamen is to sit it." },
        { id: "no-u24l4-abesta", type: "vocab", front: "å bestå", reading: "abesta", meaning: "to pass", example: { jp: "Alle bestod eksamen, fordi de leste sammen i tre uker.", en: "Everyone passed the exam, because they read together for three weeks." }, accept: ["pass", "to get through", "to consist of"], drill: { jp: "Det er godt å bestå eksamen", en: "It is good to pass the exam" }, hint: "be-STAW — built on å stå (A1 u13). Past bestod or besto. It also means to consist of: å bestå av." },
        { id: "no-u24l4-etresultat", type: "vocab", front: "et resultat", reading: "etresultat", meaning: "result", example: { jp: "Resultatet kommer på fredag, og vi vet hva vi får.", en: "The result comes on Friday, and we know what we get." }, accept: ["a result", "outcome", "score"], drill: { jp: "Et resultat kommer snart", en: "A result is coming soon" }, hint: "re-sul-TAAT, stress on the end. Neuter: definite resultatet, plural resultater." },
        { id: "no-u24l4-amestre", type: "vocab", front: "å mestre", reading: "amestre", meaning: "to master", example: { jp: "Han mestrer norsk godt nå, men han trente i to år.", en: "He masters Norwegian well now, but he practised for two years." }, accept: ["master", "to cope with", "to handle", "handle"], drill: { jp: "Det er tungt å mestre norsk", en: "It is hard to master Norwegian" }, hint: "MES-tre. Stronger than å klare from u21 — klare is getting through it, mestre is being good at it." },
        { id: "no-u24l4-autvikle", type: "vocab", front: "å utvikle", reading: "autvikle", meaning: "to develop", example: { jp: "Vi utvikler et nytt kurs, fordi mange vil lære norsk på universitetet.", en: "We are developing a new course, because many people want to learn Norwegian at the university." }, accept: ["develop", "to build", "to improve"], drill: { jp: "Det er viktig å utvikle noe nytt", en: "It is important to develop something new" }, hint: "OOT-vik-le — ut plus vikle. With seg it means to develop on its own: det utvikler seg." },
        { id: "no-u24l4-etvitnemal", type: "vocab", front: "et vitnemål", reading: "etvitnemal", meaning: "diploma", example: { jp: "Vitnemålet viser alle karakterene, og du får det etter eksamen.", en: "The diploma shows all the grades, and you get it after the exam." }, accept: ["a diploma", "certificate", "transcript"], drill: { jp: "Et vitnemål viser en karakter", en: "A diploma shows a grade" }, hint: "VIT-ne-mawl — et vitne is a witness, so a witness-statement of what you did. Neuter: definite vitnemålet, plural vitnemål unchanged." },
      ],
    },
  ],
};
