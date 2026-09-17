// NO Unit 56 — Arbeid og framgangsmåte ("Work and process") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Work and process"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ A2 SPENT THE WORKPLACE NOUNS: et arbeid, å jobbe, en sjef, en kollega, en
// oppgave, en søknad, ei lønn, en kunde, en selger, en prosess, en rutine, en
// metode, ei stilling, ei avdeling, et kontor, et yrke, en frist, et prosjekt,
// et krav, ei utdanning, en eksamen. So u56 takes the RELATIONSHIP (l1 — the
// employer/employee pair Norwegian names on both sides, the union, the
// resignation), the PROCEDURE (l2), the JUDGEMENT of the work (l3), and the
// PRESSURE it puts on you (l4).
//
// ⚠ `en arbeidsgiver` / `en arbeidstaker` ARE TAUGHT AS A PAIR AND IN THAT ORDER,
// one card apart. Norwegian public life runs on the pair — every news story about
// pay, every contract, every union leaflet uses both — and a learner who owns one
// without the other cannot read either. English has no matching pair
// ("employer/employee" is Latin and opaque); Norwegian's is transparent: the one
// who GIVES work and the one who TAKES it.
//
// FIRST FEMININE of the unit is `ei fagforening` (l1) and it carries the en-/ei-
// recognition note unit51.js B4 requires. The other feminine is `ei belastning`
// (l4, -ning) and `ei rekkefølge` (l2). `en kompetanse`, `en fase`, `en kvalitet`
// and `en mangel` are all masculine.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): å utføre → "autfore",
// ei rekkefølge → "eirekkefolge".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT56 = {
  id: "no-u56",
  lang: "no",
  title: "Arbeid og framgangsmåte",
  order: 56,
  stage: "b1",
  lessons: [
    // Lesson 1: the working relationship. arbeidsgiver and arbeidstaker are
    // adjacent on purpose — see the header. å si opp is placed third because it is
    // the one verb here that cuts both ways depending on who the subject is.
    {
      id: "no-u56l1",
      unit: 56,
      lesson: 1,
      title: "Arbeidsliv",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the working relationship — name the skills you bring, tell employer from employee, resign from a post, join a union, and say you commute.",
      items: [
        { id: "no-u56l1-enkompetanse", type: "vocab", front: "en kompetanse", reading: "enkompetanse", meaning: "skill set", example: { jp: "Han har en kompetanse som alle vil ha.", en: "He has a skill set that everyone wants." }, drill: { jp: "Hun har en kompetanse vi trenger", en: "She has a skill set we need" }, accept: ["competence", "expertise", "qualifications", "know-how"], hint: "kom-pe-TAN-se. Masculine: definite kompetansen, plural kompetanser. What you can actually DO, as against ei utdanning, which is what you studied. A Norwegian job ad asks for kompetanse, not for a diploma." },
        { id: "no-u56l1-enarbeidsgiver", type: "vocab", front: "en arbeidsgiver", reading: "enarbeidsgiver", meaning: "employer", example: { jp: "En arbeidsgiver må betale lønn hver måned.", en: "An employer must pay wages every month." }, drill: { jp: "Sjefen er en arbeidsgiver her", en: "The boss is an employer here" }, accept: ["a boss", "the company", "the one who hires", "an employer"], hint: "AR-beids-gi-ver. Masculine: definite arbeidsgiveren, plural arbeidsgivere. Arbeid plus giver: the one who GIVES the work. Its partner is the next card." },
        { id: "no-u56l1-enarbeidstaker", type: "vocab", front: "en arbeidstaker", reading: "enarbeidstaker", meaning: "employee", example: { jp: "En arbeidstaker har en rettighet til ferie.", en: "An employee has a right to holiday." }, drill: { jp: "En arbeidstaker har en rettighet her", en: "An employee has a right here" }, accept: ["a worker", "a member of staff", "the one who is hired", "an employee"], hint: "AR-beids-ta-ker. Masculine: definite arbeidstakeren, plural arbeidstakere. The mirror of arbeidsgiver — the one who TAKES the work. Both halves of the pair turn up in every Norwegian contract and every news story about pay." },
        { id: "no-u56l1-eifagforening", type: "vocab", front: "ei fagforening", reading: "eifagforening", meaning: "trade union", example: { jp: "Ei fagforening hjelper deg med lønn og kontrakt.", en: "A trade union helps you with pay and contract." }, drill: { jp: "Ei fagforening hjelper alle arbeidstakere", en: "A trade union helps all employees" }, accept: ["a union", "a labour union", "a workers' organisation"], hint: "FAG-for-e-ning. Feminine: definite fagforeninga, plural fagforeninger. You will also see ei fagforening written en fagforening / fagforeningen — Bokmål allows both, and print uses the en- form freely; this course writes ei because ei is what tells you the definite ends in -a. Et fag, a trade, plus ei forening, an association. Roughly half of Norwegian workers belong to one, which is why this is an ordinary B1 word and not a specialist one." },
        { id: "no-u56l1-apendle", type: "vocab", front: "å pendle", reading: "apendle", meaning: "to commute", example: { jp: "Mange pendler til Oslo hver dag.", en: "Many people commute to Oslo every day." }, drill: { jp: "Det er dyrt å pendle hver dag", en: "It is expensive to commute every day" }, accept: ["commute", "to travel to work", "travel to work"], hint: "PEN-dle. Present pendler, past pendlet. From en pendel, a pendulum — you swing back and forth. En pendler is the person, and the word is everywhere in Norwegian traffic news." },
        { id: "no-u56l1-aapne", type: "vocab", front: "å åpne", reading: "aapne", meaning: "to open", example: { jp: "De åpner en ny butikk i byen til høsten.", en: "They are opening a new shop in town this autumn." }, accept: ["to open up", "to start (a business)"], drill: { jp: "Det er dyrt å åpne en butikk", en: "It is expensive to open a shop" }, hint: "å åpne → åpner, åpnet. Bygd på adjektivet åpen (u7). Brukes om ei dør, en butikk, en konto og et møte. Passivformen åpnes kommer i u70l1."},
      ],
    },
    // Lesson 2: the procedure itself, small unit to large — et steg, en fase — then
    // the three verbs that move work through it, then the order it must happen in.
    {
      id: "no-u56l2",
      unit: 56,
      lesson: 2,
      title: "Framgangsmåte",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Break a job into steps — name a step and a phase, carry the work out, prepare properly for it, share it out among people, and put it all in the right order.",
      items: [
        { id: "no-u56l2-etsteg", type: "vocab", front: "et steg", reading: "etsteg", meaning: "step", example: { jp: "Et steg om gangen er nok for meg.", en: "One step at a time is enough for me." }, drill: { jp: "Dette er et steg i planen", en: "This is a step in the plan" }, accept: ["a stride", "a stage", "a move", "a step"], hint: "STEG. Neuter: definite steget, plural steg — no ending. ⚠ It is also the past tense of å stige, to rise, which you meet later in the band; the context always decides. Et steg om gangen is the Norwegian \"one step at a time\"." },
        { id: "no-u56l2-enfase", type: "vocab", front: "en fase", reading: "enfase", meaning: "phase", example: { jp: "En fase i prosjektet tar to måneder.", en: "One phase of the project takes two months." }, drill: { jp: "En fase i prosjektet er ferdig", en: "One phase of the project is finished" }, accept: ["a stage", "a period", "a phase"], hint: "FA-se. Masculine: definite fasen, plural faser. Bigger than et steg and slower than et øyeblikk — a fase is a stretch of the work with its own character." },
        { id: "no-u56l2-autfore", type: "vocab", front: "å utføre", reading: "autfore", meaning: "to perform (a task)", example: { jp: "Legen utfører en operasjon i morgen.", en: "The doctor is carrying out an operation tomorrow." }, drill: { jp: "Det er viktig å utføre arbeidet godt", en: "It is important to carry out the work well" }, accept: ["carry out", "to perform", "perform", "to execute", "to carry out", "to carry out"], hint: "UT-fo-re. Ut plus føre, to lead out — you take the plan out into the world. Present utfører, past utførte. You utfører a task; you gjennomfører a whole project." },
        { id: "no-u56l2-aforberede", type: "vocab", front: "å forberede", reading: "aforberede", meaning: "to prepare", example: { jp: "Vi forbereder en samtale med sjefen.", en: "We are preparing a conversation with the boss." }, drill: { jp: "Det er viktig å forberede en samtale", en: "It is important to prepare a conversation" }, accept: ["prepare", "to get ready", "get ready", "to prep"], hint: "for-be-RE-de. For plus berede, an old word for making ready. Present forbereder, past forberedte. Å forberede seg is to get yourself ready; en forberedelse is the preparation." },
        { id: "no-u56l2-afordele", type: "vocab", front: "å fordele", reading: "afordele", meaning: "to share out", example: { jp: "Sjefen fordeler oppgavene til alle.", en: "The boss shares out the tasks to everyone." }, drill: { jp: "Det er lett å fordele arbeidet", en: "It is easy to share out the work" }, accept: ["distribute", "to allocate", "to divide up", "allocate"], hint: "for-DE-le. For plus dele, to divide — you divide it out among people. Present fordeler, past fordelte. ⚠ Nothing to do with en fordel, an advantage, despite how alike they look." },
        { id: "no-u56l2-eirekkefolge", type: "vocab", front: "ei rekkefølge", reading: "eirekkefolge", meaning: "order", example: { jp: "Rekkefølga er viktig når du baker ei kake.", en: "The order matters when you bake a cake." }, drill: { jp: "Ei rekkefølge er viktig her", en: "An order matters here" }, accept: ["a sequence", "the order", "an ordering", "the running order"], hint: "REK-ke-ful-le. Feminine: definite rekkefølga, plural rekkefølger. Ei rekke, a row, plus følge, to follow — what follows what. I riktig rekkefølge means in the right order." },
      ],
    },
    // Lesson 3: judging the work. grundig is the one to notice — in Norwegian
    // working life it is higher praise than rask, which is the opposite of the
    // instinct an English speaker arrives with.
    {
      id: "no-u56l3",
      unit: 56,
      lesson: 3,
      title: "Kvalitet og krav",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge how well a job was done — talk about quality, improve a result, call the work thorough or efficient, name what is missing, and sign it off.",
      items: [
        { id: "no-u56l3-enkvalitet", type: "vocab", front: "en kvalitet", reading: "enkvalitet", meaning: "quality (standard)", example: { jp: "En god kvalitet koster alltid mer.", en: "Good quality always costs more." }, drill: { jp: "Denne jakka har en kvalitet vi liker", en: "This jacket has a quality we like" }, accept: ["a standard", "a grade", "a property", "quality"], hint: "kva-li-TET. Masculine: definite kvaliteten, plural kvaliteter. ⚠ Second sense, and it is common: en kvalitet is also a good trait in a person — han har mange gode kvaliteter." },
        { id: "no-u56l3-aforbedre", type: "vocab", front: "å forbedre", reading: "aforbedre", meaning: "to improve", example: { jp: "Vi forbedrer metoden litt hvert år.", en: "We improve the method a little every year." }, drill: { jp: "Det er mulig å forbedre et resultat", en: "It is possible to improve a result" }, accept: ["improve", "to better", "to make better", "to enhance"], hint: "for-BE-dre. For plus bedre, better — to make better. Present forbedrer, past forbedret. ⚠ It takes an object: you improve SOMETHING. For \"it got better\" Norwegian says det ble bedre." },
        { id: "no-u56l3-grundig", type: "vocab", front: "grundig", reading: "grundig", meaning: "thorough", example: { jp: "Hun gjør et grundig arbeid hver gang.", en: "She does thorough work every time." }, drill: { jp: "Han er grundig i alt han gjør", en: "He is thorough in everything he does" }, accept: ["meticulous", "careful", "in depth", "painstaking"], hint: "GRUN-di — silent g. From grunn, the ground or the bottom: you go all the way down. Neuter grundig, plural grundige. ⚠ In Norwegian working life this is higher praise than rask." },
        { id: "no-u56l3-effektiv", type: "vocab", front: "effektiv", reading: "effektiv", meaning: "efficient", example: { jp: "En effektiv metode sparer tid og penger.", en: "An efficient method saves time and money." }, drill: { jp: "Denne metoden er effektiv nok", en: "This method is efficient enough" }, accept: ["effective", "productive", "streamlined", "gets results"], hint: "e-fek-TIV. Neuter effektivt, plural effektive. Norwegian uses one word for both English ones: en effektiv medisin works, and en effektiv metode does not waste time." },
        { id: "no-u56l3-enmangel", type: "vocab", front: "en mangel", reading: "enmangel", meaning: "shortcoming", example: { jp: "Planen har en mangel vi må se på.", en: "The plan has a shortcoming we need to look at." }, drill: { jp: "Produktet har en mangel her", en: "The product has a defect here" }, accept: ["a lack", "a defect", "a flaw", "a shortage"], hint: "MANG-el. Masculine: definite mangelen, plural mangler. ⚠ Two senses in one word: a fault in a thing, and a shortage of a thing — mangel på tid is lack of time. Å mangle is the verb: jeg mangler en penn." },
        { id: "no-u56l3-agodkjenne", type: "vocab", front: "å godkjenne", reading: "agodkjenne", meaning: "to approve", example: { jp: "Sjefen godkjenner budsjettet i dag.", en: "The boss approves the budget today." }, drill: { jp: "Det er lett å godkjenne et budsjett", en: "It is easy to approve a budget" }, accept: ["approve", "to sign off", "sign off", "to pass", "to validate"], hint: "GO-hyen-ne — the d is silent and kj is the thin hiss. God plus kjenne: to know it as good. Present godkjenner, past godkjente. You godtar an argument; an authority godkjenner a form." },
      ],
    },
    // Lesson 4: pressure. å overta and å overlate are placed together because they
    // are the same handover seen from each side, and the learner should meet them
    // as a pair the way arbeidsgiver/arbeidstaker were met in l1.
    {
      id: "no-u56l4",
      unit: 56,
      lesson: 4,
      title: "Press og ansvar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle pressure at work — name the pressure and the load, say you are coping, take a task over from someone, hand one off, and say what you have earned.",
      items: [
        { id: "no-u56l4-etpress", type: "vocab", front: "et press", reading: "etpress", meaning: "pressure", example: { jp: "Et press fra sjefen gjør alle trøtte.", en: "Pressure from the boss makes everyone tired." }, drill: { jp: "Han føler et press hver dag", en: "He feels pressure every day" }, accept: ["stress", "strain", "a squeeze", "pressure"], hint: "PRESS. Neuter: definite presset, plural press — no ending. Å presse is to press. Under press is the everyday phrase for being up against it." },
        { id: "no-u56l4-eibelastning", type: "vocab", front: "ei belastning", reading: "eibelastning", meaning: "burden", example: { jp: "Belastninga på legene er altfor stor.", en: "The burden on the doctors is far too great." }, drill: { jp: "Dette er ei belastning for alle", en: "This is a burden for everyone" }, accept: ["a load", "a strain", "a stress", "a weight to carry"], hint: "be-LAST-ning. Feminine: definite belastninga, plural belastninger. Be- plus last, a load. Physical or mental, it is the same word: ei belastning på ryggen and ei belastning på familien." },
        { id: "no-u56l4-atakle", type: "vocab", front: "å takle", reading: "atakle", meaning: "to cope with", example: { jp: "Hun takler press bedre enn de fleste.", en: "She copes with pressure better than most." }, drill: { jp: "Det er lett å takle et press", en: "It is easy to cope with pressure" }, accept: ["cope", "handle", "to manage", "to deal with"], hint: "TAK-le. Present takler, past taklet. Borrowed from football, where you tackle — Norwegian kept both the sport and the everyday sense. Jeg takler det is the confident \"I've got this\"." },
        { id: "no-u56l4-aoverta", type: "vocab", front: "å overta", reading: "aoverta", meaning: "to take over", example: { jp: "Kari overtar prosjektet fra mandag.", en: "Kari takes over the project from Monday." }, drill: { jp: "Det er lett å overta et prosjekt", en: "It is easy to take over a project" }, accept: ["take over", "to assume", "to inherit", "to succeed to"], hint: "O-ver-ta. Over plus ta. Present overtar, past overtok. You overtar a job, a house or a company; en overtakelse is the handover itself." },
        { id: "no-u56l4-aoverlate", type: "vocab", front: "å overlate", reading: "aoverlate", meaning: "to leave to someone", example: { jp: "Jeg overlater resten til deg.", en: "I leave the rest to you." }, drill: { jp: "Det er lett å overlate alt til andre", en: "It is easy to leave everything to others" }, accept: ["hand over", "to entrust", "to delegate", "leave it to"], hint: "O-ver-la-te. Over plus late, to let. Present overlater, past overlot. ⚠ Always with til: jeg overlater det TIL deg. The opposite move from å overta — one hands off, the other picks up." },
        { id: "no-u56l4-afortjene", type: "vocab", front: "å fortjene", reading: "afortjene", meaning: "to deserve", example: { jp: "Han fortjener en pause etter ei lang uke.", en: "He deserves a break after a long week." }, drill: { jp: "Det er lett å fortjene en pause", en: "It is easy to earn a break" }, accept: ["deserve", "to merit", "merit", "to have earned"], hint: "for-TYE-ne. For plus tjene, to earn — you have earned it. Present fortjener, past fortjente. Du fortjener det! is the warm Norwegian \"you've earned it\", and it is also said dryly about a bad result." },
      ],
    },
  ],
};
