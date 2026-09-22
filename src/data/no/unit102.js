// NO Unit 102 — Helsevesenet — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Health systems and care". Retitled in Norwegian per
// CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// WHY THIS IS NOT A SECOND u67. B1's `Helse og velvære` (u67) owns the BODY and
// the feeling — symptom, diagnose, bivirkning, sykdom, vaksine, kosthold, angst,
// stress. It teaches a learner to describe how they are. This unit teaches the
// SYSTEM that receives them: who refers you, what you pay, what a hospital writes
// down, what happens to your job while you are ill, and who decides who is treated
// first. That is B2 — the institutional register around an experience the learner
// can already describe.
//
// ⚠ `en resept` IS ALREADY TAUGHT (u25) and was cut from l1 during authoring. It
// survived a front-string check because this unit had drafted it as `ei resept`,
// a different string for the same word. Gender is not a licence to re-teach —
// always resolve the BARE lexeme, not the article + noun.
//
// GENDER: this unit is unusually feminine because the health system names itself
// in -ing/-ning nouns, which §1 marks `ei`: henvisning, ventetid, innkalling,
// oppfølging, sykemelding, rehabilitering, prioritering. `ventetid` and `attest`
// are feminine too; `journal` is feminine.
// ⚠ FIRST FEMININE IS `ei henvisning` (l1) and it carries the §1 recognition note.
// ⚠ `en innleggelse` IS DELIBERATELY MASCULINE and is the trap of this unit.
// It sits among seven -ing nouns but is itself -else, and unit1.js §1 is explicit
// that -het/-else are MASCULINE with no feminine form. A seat skimming "the -ing
// ones are ei" will write `ei innleggelse` and be wrong.
// MASS NOUNS BARE per §1(b): none in this unit — every noun here is countable and
// the indefinite singular is idiomatic for the sense taught (you really can have
// "ei sykemelding", "en egenandel", "et inngrep").
//
// SCOPE: frozen base u1–u87 plus u101 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT102 = {
  id: "no-u102",
  lang: "no",
  title: "Helsevesenet",
  order: 102,
  stage: "b2",
  lessons: [
    // Lesson 1: the front door. Everything in Norwegian health care starts at the
    // fastlege, and the words here are the ones on the letter you get.
    {
      id: "no-u102l1",
      unit: 102,
      lesson: 1,
      title: "Hos fastlegen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Get through the front door of Norwegian health care — your GP, the referral onward, the wait and what you pay.",
      items: [
        { id: "no-u102l1-enfastlege", type: "vocab", front: "en fastlege", reading: "enfastlege", meaning: "a regular GP", example: { jp: "Du må snakke med fastlegen din først.", en: "You have to talk to your regular GP first." }, accept: ["family doctor", "GP", "assigned doctor"], drill: { jp: "Jeg har time hos en fastlege", en: "I have an appointment with a regular GP" }, hint: "fast (u28, fixed) + lege. Everyone living in Norway is assigned ONE, and almost nothing happens in the system until you have been to them. There is no English word for it because there is no English institution like it." },
        { id: "no-u102l1-eihenvisning", type: "vocab", front: "ei henvisning", reading: "eihenvisning", meaning: "a referral", example: { jp: "Fastlegen skriver ei henvisning til sykehuset.", en: "The GP writes a referral to the hospital." }, accept: ["a letter of referral"], drill: { jp: "Du trenger ei henvisning til sykehuset", en: "You need a referral to the hospital" }, hint: "⚠ FIRST FEMININE HERE. -ning takes ei (§1), definite henvisninga — but moderate Bokmål writes henvisningen, and that is the form printed on the letter itself. Recognise both, produce the -a form. Without one you cannot see a hospital doctor at all." },
        { id: "no-u102l1-eiventetid", type: "vocab", front: "ei ventetid", reading: "eiventetid", meaning: "a waiting time", example: { jp: "Ventetida på sykehuset er ofte lang.", en: "The waiting time at the hospital is often long." }, accept: ["a wait", "waiting period"], drill: { jp: "Sykehuset har ei ventetid på flere måneder", en: "The hospital has a waiting time of several months" }, hint: "å vente (u17) + tid. THE political word in Norwegian health debate — ventetid is what every government promises to cut. Feminine: ventetida." },
        { id: "no-u102l1-enegenandel", type: "vocab", front: "en egenandel", reading: "enegenandel", meaning: "a patient excess fee", example: { jp: "Du må betale en egenandel hos legen.", en: "You have to pay an excess fee at the doctor's." }, accept: ["a co-payment", "out-of-pocket charge", "excess"], drill: { jp: "Du betaler en egenandel hos legen", en: "You pay an excess fee at the doctor's" }, hint: "egen (u34, own) + andel, a share — literally \"your own share\". Health care is public, but not free: you pay egenandel up to a yearly ceiling and then stop. Masculine." },
        { id: "no-u102l1-etapotek", type: "vocab", front: "et apotek", reading: "etapotek", meaning: "a pharmacy", example: { jp: "Apoteket ligger i samme gate som legen.", en: "The pharmacy is in the same street as the doctor." }, accept: ["chemist", "drugstore"], drill: { jp: "Vi går til et apotek i byen", en: "We are going to a pharmacy in the city" }, hint: "Neuter — apoteket. A false friend for English speakers reaching for \"apothecary\": this is an ordinary modern shop, on every high street, and it is where en resept (u25) is turned into medicine." },
        { id: "no-u102l1-eiinnkalling", type: "vocab", front: "ei innkalling", reading: "eiinnkalling", meaning: "an appointment letter", example: { jp: "Innkallinga kom to uker før timen.", en: "The appointment letter came two weeks before the appointment." }, accept: ["a summons", "a call-in", "notice to attend"], drill: { jp: "Jeg fikk ei innkalling fra sykehuset", en: "I got an appointment letter from the hospital" }, hint: "inn + å kalle (u58) — the system calling you in. Used well beyond health care: you get ei innkalling to a meeting, to military service, to court. Feminine, -ing." },
      ],
    },
    // Lesson 2: inside the hospital. The words a patient hears ABOUT themselves
    // rather than the words they use about their body.
    {
      id: "no-u102l2",
      unit: 102,
      lesson: 2,
      title: "På sykehuset",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Understand what a hospital is doing with you — the consultant, the admission, the procedure and the record they keep.",
      items: [
        { id: "no-u102l2-enspesialist", type: "vocab", front: "en spesialist", reading: "enspesialist", meaning: "a consultant", example: { jp: "Fastlegen sendte meg videre til en spesialist.", en: "The GP sent me on to a consultant." }, accept: ["a specialist", "specialist doctor"], drill: { jp: "Jeg skal møte en spesialist på sykehuset", en: "I am going to meet a consultant at the hospital" }, hint: "The doctor at the other end of a henvisning. Glossed \"consultant\" because that is the role in the system — a specialist you reach only by referral, never by walking in." },
        { id: "no-u102l2-eninnleggelse", type: "vocab", front: "en innleggelse", reading: "eninnleggelse", meaning: "an admission to hospital", example: { jp: "Innleggelsen varte i tre dager.", en: "The hospital admission lasted three days." }, accept: ["being admitted", "hospitalisation"], drill: { jp: "En innleggelse varer ofte noen dager", en: "An admission often lasts a few days" }, hint: "⚠ MASCULINE, NOT FEMININE — and this is the trap of the unit. Everything around it is -ing and takes ei, but this is -else, and §1 is explicit: -het and -else are masculine with no feminine form. en innleggelse, innleggelsen. From å legge inn." },
        { id: "no-u102l2-etinngrep", type: "vocab", front: "et inngrep", reading: "etinngrep", meaning: "a procedure (surgical)", example: { jp: "Legen forklarte hva et lite inngrep innebærer.", en: "The doctor explained what a small procedure involves." }, accept: ["an operation", "intervention"], drill: { jp: "Legen gjorde et inngrep i går", en: "The doctor did a procedure yesterday" }, hint: "inn + grep, a grip — literally a reaching-in. Neuter. Also the ordinary word for an intervention of any kind: et politisk inngrep, et inngrep i naturen." },
        { id: "no-u102l2-eijournal", type: "vocab", front: "ei journal", reading: "eijournal", meaning: "a patient record", example: { jp: "Alt som skjer med deg, står i journalen din.", en: "Everything that happens to you is written in your record." }, accept: ["medical notes", "case notes", "chart"], drill: { jp: "Legen skriver alt i ei journal", en: "The doctor writes everything in a record" }, hint: "Feminine — journalen, journalene. Not a journal you keep; it is the file the system keeps on YOU, and you have a legal right to read it." },
        { id: "no-u102l2-eioppfolging", type: "vocab", front: "ei oppfølging", reading: "eioppfolging", meaning: "a follow-up", example: { jp: "God oppfølging etter behandlinga er viktig.", en: "Good follow-up after the treatment is important." }, accept: ["aftercare", "monitoring"], drill: { jp: "Du får ei oppfølging etter behandlinga", en: "You get a follow-up after the treatment" }, hint: "From å følge opp. Note the ø fold in the reading: eioppfolging, not eioppfølging (§3). Feminine, -ing. Used all over working life too — oppfølging av en ansatt." },
        { id: "no-u102l2-akutt", type: "vocab", front: "akutt", reading: "akutt", meaning: "acute", example: { jp: "Ring legevakta hvis det er akutt.", en: "Ring the emergency clinic if it is acute." }, accept: ["urgent", "emergency (adj)"], drill: { jp: "Dette problemet er akutt og alvorlig", en: "This problem is acute and serious" }, hint: "Already neuter-shaped, so it does not change: et akutt problem, en akutt sykdom. The opposite of kronisk (u67), and the pair is how a Norwegian doctor sorts you." },
      ],
    },
    // Lesson 3: being ill and having a job. The paperwork half of illness, which a
    // learner living in Norway meets before most of the medical half.
    {
      id: "no-u102l3",
      unit: 102,
      lesson: 3,
      title: "Sykdom og arbeid",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle being ill while employed — the sick note, the certificate, the money and the way back to work.",
      items: [
        { id: "no-u102l3-eisykemelding", type: "vocab", front: "ei sykemelding", reading: "eisykemelding", meaning: "a sick note", example: { jp: "Legen skrev ei sykemelding på to uker.", en: "The doctor wrote a sick note for two weeks." }, accept: ["sick leave", "doctor's note", "fit note"], drill: { jp: "Jeg leverte ei sykemelding til sjefen", en: "I handed a sick note to the boss" }, hint: "syk + melding, a notification. In Norway this is a formal document that moves money, not a note to your manager — it goes to the employer AND the state. Feminine, -ing." },
        { id: "no-u102l3-eiattest", type: "vocab", front: "ei attest", reading: "eiattest", meaning: "a medical certificate", example: { jp: "Du trenger ei attest fra legen.", en: "You need a certificate from the doctor." }, accept: ["a certificate", "written confirmation"], drill: { jp: "Legen skriver ei attest til deg", en: "The doctor writes a certificate for you" }, hint: "Feminine — attesten is also seen. Wider than health: en attest fra arbeidsgiveren is a reference for a job. Compare ei erklæring (u78), which is something YOU declare; an attest is something an authority confirms about you." },
        { id: "no-u102l3-eirehabilitering", type: "vocab", front: "ei rehabilitering", reading: "eirehabilitering", meaning: "rehabilitation", example: { jp: "Etter ulykka fikk han ei lang rehabilitering.", en: "After the accident he got a long rehabilitation." }, accept: ["rehab", "recovery programme"], drill: { jp: "Han trenger ei rehabilitering etter ulykka", en: "He needs rehabilitation after the accident" }, hint: "Feminine, -ing. Note the example: a fronted adverbial puts the verb second — Etter ulykka BEGYNTE ei lang rehabilitering (§4). That order is wrong in English and right in Norwegian." },
        { id: "no-u102l3-eiytelse", type: "vocab", front: "ei ytelse", reading: "eiytelse", meaning: "an entitlement payment", example: { jp: "Staten betaler ei ytelse mens du er syk.", en: "The state pays an entitlement while you are ill." }, accept: ["a benefit payment", "allowance"], drill: { jp: "Staten betaler ei ytelse hver måned", en: "The state pays an entitlement every month" }, hint: "⚠ NOT THE SAME AS ei trygd (u78). A trygd is the scheme you are ON; a ytelse is the individual payment that comes OUT of it. Norwegian officialdom keeps them apart and so should you. From å yte, to render." },
        { id: "no-u102l3-enterskel", type: "vocab", front: "en terskel", reading: "enterskel", meaning: "a threshold", example: { jp: "Terskelen for å få hjelp er ofte høy.", en: "The threshold for getting help is often high." }, accept: ["a barrier", "doorstep"], drill: { jp: "Dette er en terskel for mange", en: "This is a threshold for many" }, hint: "Literally the doorstep of a house, and used exactly as English uses \"a low bar\" — lav terskel is a set phrase meaning easy to approach. Masculine; plural terskler." },
        { id: "no-u102l3-afriskmelde", type: "vocab", front: "å friskmelde", reading: "afriskmelde", meaning: "to sign someone back to work", example: { jp: "Legen friskmelder deg når du er klar.", en: "The doctor signs you back to work when you are ready." }, accept: ["to declare fit", "to sign off as well"], drill: { jp: "Legen kan velge å friskmelde deg", en: "The doctor can choose to sign you back to work" }, hint: "frisk (u11, well) + å melde — the exact mirror of ei sykemelding above. The drill uses å velge å, because a modal would swallow the å: \"kan friskmelde\" does not contain the front (§5)." },
      ],
    },
    // Lesson 4: the part that is an argument rather than a procedure — who gets
    // care first, and what the people around the patient are owed.
    {
      id: "no-u102l4",
      unit: 102,
      lesson: 4,
      title: "Omsorg og prioritering",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Take part in the argument about care — who is prioritised, who carries the load at home, and what a dignified old age means.",
      items: [
        { id: "no-u102l4-enparorende", type: "vocab", front: "en pårørende", reading: "enparorende", meaning: "a next of kin", example: { jp: "De pårørende fikk snakke med legen etterpå.", en: "The next of kin got to talk to the doctor afterwards." }, accept: ["a relative (of a patient)", "family member"], drill: { jp: "En pårørende kan spørre legen", en: "A next of kin can ask the doctor" }, hint: "An adjective used as a noun — literally \"the on-belonging one\" — so it takes adjective endings: en pårørende, de pårørende. Note the ø folds to o twice in the reading (§3): enparorende." },
        { id: "no-u102l4-eiprioritering", type: "vocab", front: "ei prioritering", reading: "eiprioritering", meaning: "a prioritisation", example: { jp: "Ei prioritering er alltid vanskelig for legene.", en: "A prioritisation is always difficult for the doctors." }, accept: ["a ranking of need", "triage"], drill: { jp: "Dette er ei prioritering sykehuset gjør", en: "This is a prioritisation the hospital makes" }, hint: "From å prioritere (u62). The noun is the B2 move: Norwegian public argument is conducted in nominalisations like this one, where English would use a verb. u107 makes that habit the lesson." },
        { id: "no-u102l4-enhelsetjeneste", type: "vocab", front: "en helsetjeneste", reading: "enhelsetjeneste", meaning: "a health service", example: { jp: "Den norske helsetjenesten er gratis for barn.", en: "The Norwegian health service is free for children." }, accept: ["health care system", "medical service"], drill: { jp: "Norge har en helsetjeneste for alle", en: "Norway has a health service for everyone" }, hint: "helse + tjeneste (u56). Masculine. The umbrella term for the whole thing — and the word a politician uses when they mean \"the system\" rather than \"the hospital\"." },
        { id: "no-u102l4-alindre", type: "vocab", front: "å lindre", reading: "alindre", meaning: "to relieve pain", example: { jp: "Medisinen lindrer smerten, men tar den ikke bort.", en: "The medicine relieves the pain but does not take it away." }, accept: ["to ease", "to soothe", "to alleviate"], drill: { jp: "Legen prøver å lindre smerten", en: "The doctor tries to relieve the pain" }, hint: "The precise verb: to make something hurt LESS without curing it. That distinction is the whole of palliative care, which Norwegian calls lindrende behandling — the present participle you meet again in u107." },
        { id: "no-u102l4-aavlaste", type: "vocab", front: "å avlaste", reading: "aavlaste", meaning: "to take the load off", example: { jp: "Et sykehjem avlaster familien noen timer i uka.", en: "A care home takes the load off the family a few hours a week." }, accept: ["to relieve (a burden)", "to give respite"], drill: { jp: "Vi ønsker å avlaste familien litt", en: "We want to take the load off the family a little" }, hint: "av + å laste, to load. Avlastning is a formal service a Norwegian municipality provides to families caring for someone at home — a word with a budget line behind it." },
        { id: "no-u102l4-verdig", type: "vocab", front: "verdig", reading: "verdig", meaning: "dignified", example: { jp: "Alle skal få en verdig behandling på et sykehjem.", en: "Everyone shall receive dignified treatment at a care home." }, accept: ["worthy", "with dignity"], drill: { jp: "Denne behandlinga er verdig og god", en: "This treatment is dignified and good" }, hint: "An -ig adjective, so it never changes in the neuter (§8b): et verdig liv. En verdig alderdom — a dignified old age — is the phrase the whole care debate turns on." },
      ],
    },
  ],
};
