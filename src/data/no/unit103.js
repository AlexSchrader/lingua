// NO Unit 103 — Kunnskap og formidling — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Education and research". Retitled in Norwegian per
// CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// ⚠ THE SLOT NAME IS A TRAP HERE AND THE DEVIATION IS DELIBERATE (RUNBOOK §7).
// Norwegian already spends "education and research" THREE times before B2:
//   u24  Utdanning          — utdanning, eksamen, vitnemål, kurs, å bestå, emne
//   u74  Studier og forskning — forelesning, pensum, student, veileder, forskning,
//                               undersøkelse, analyse, funn, fagfelt, å konkludere
//   u85  Barn, barnehage og skole — the school system from a parent's side
// A fourth pass at the same theme would be a B1 unit wearing a B2 number. So this
// unit takes the half of the slot that is genuinely B2 and genuinely unspent:
// KNOWLEDGE AS A THING YOU HANDLE — specialising in a field, arguing a case in
// writing, checking whether a finding holds, and the word Norwegian uses for what
// an education is supposed to make of a person.
//
// GENDER, and two decisions §1 forces that a skim would get wrong:
//   `en ferdighet`  — -het is MASCULINE with no feminine form (§1). NOT "ei".
//   `en doktorgrad` — a compound takes the gender of its LAST part, and grad is
//                     masculine. NOT "ei", despite the -grad looking like -ing.
//   `ei fagfellevurdering` — same rule, opposite result: -vurdering is -ing, so
//                     the whole compound is feminine. First feminine in the unit,
//                     and it carries the §1 recognition note.
// MASS NOUNS TAUGHT BARE per §1(b), decided by §1's real test — is the indefinite
// singular idiomatic for the sense taught?
//   `læring`   — "ei læring" is not Norwegian; learning is mass.
//   `dannelse` — mass, and -else so masculine if you ever need it: dannelsen.
//
// SCOPE: frozen base u1–u87 plus u101–u102 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT103 = {
  id: "no-u103",
  lang: "no",
  title: "Kunnskap og formidling",
  order: 103,
  stage: "b2",
  lessons: [
    // Lesson 1: belonging to a field. u74 gave the learner a student's day; this
    // gives them the words for having a subject of their own.
    {
      id: "no-u103l1",
      unit: 103,
      lesson: 1,
      title: "Fag og fordypning",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a subject as your own — the field you specialise in, the people in it, and what counts as a skill there.",
      items: [
        { id: "no-u103l1-faglig", type: "vocab", front: "faglig", reading: "faglig", meaning: "subject-related", example: { jp: "Læreren har god faglig innsikt.", en: "The teacher has good subject insight." }, accept: ["professional (in a subject)", "academic (of content)"], drill: { jp: "Boka er faglig og god", en: "The book is subject-related and good" }, hint: "fag (u18) + -lig. An -ig adjective, so it never changes in the neuter (§8b): et faglig spørsmål. Norwegian uses it constantly to mean \"on the merits of the subject\" as opposed to personal or political." },
        { id: "no-u103l1-eifordypning", type: "vocab", front: "ei fordypning", reading: "eifordypning", meaning: "a deeper specialisation", example: { jp: "Han valgte ei fordypning i norsk språk.", en: "He chose a specialisation in Norwegian language." }, accept: ["a specialism", "an in-depth option", "a major"], drill: { jp: "Han valgte ei fordypning i språk", en: "He chose a specialisation in language" }, hint: "for + dyp (deep) + -ning — going deeper into something. Feminine per §1. The word on a Norwegian timetable for the subject you take further than the rest." },
        { id: "no-u103l1-etfagmiljo", type: "vocab", front: "et fagmiljø", reading: "etfagmiljo", meaning: "an academic community", example: { jp: "Fagmiljøet her er lite, men sterkt.", en: "The academic community here is small but strong." }, accept: ["a research community", "professional circle"], drill: { jp: "Vi har et fagmiljø her", en: "We have an academic community here" }, hint: "fag + miljø (u34). Neuter. Not the same as et fagfelt (u74): a fagfelt is the SUBJECT, a fagmiljø is the PEOPLE working in it. Note the ø fold in the reading (§3)." },
        { id: "no-u103l1-akademisk", type: "vocab", front: "akademisk", reading: "akademisk", meaning: "academic", example: { jp: "Akademisk språk er ofte vanskelig å lese.", en: "Academic language is often difficult to read." }, accept: ["scholarly", "university (adj)"], drill: { jp: "Denne teksten er akademisk og vanskelig", en: "This text is academic and difficult" }, hint: "An -isk adjective: invariant in the neuter, plural akademiske. Beside faglig it marks a real difference — faglig is about the subject, akademisk is about the institution and its register." },
        { id: "no-u103l1-enferdighet", type: "vocab", front: "en ferdighet", reading: "enferdighet", meaning: "a practical skill", example: { jp: "Å lese godt er en viktig ferdighet.", en: "Reading well is an important skill." }, accept: ["an ability (learned)", "a competency"], drill: { jp: "Dette er en ferdighet alle trenger", en: "This is a skill everyone needs" }, hint: "⚠ MASCULINE, NOT FEMININE. ferdig (u16) + -het, and §1 is explicit that -het has no feminine form — en ferdighet, ferdigheten. Compare ei evne (u58), which is a capacity you have; a ferdighet is one you trained." },
        { id: "no-u103l1-laring", type: "vocab", front: "læring", reading: "laering", meaning: "learning", example: { jp: "God læring tar tid og krever arbeid.", en: "Good learning takes time and demands work." }, accept: ["the process of learning"], drill: { jp: "God læring tar mye tid", en: "Good learning takes a lot of time" }, hint: "⚠ BARE, NO ARTICLE (§1b): \"ei læring\" is not Norwegian — learning is mass. Feminine if you ever need the definite: læringa. Note the reading folds æ to ae (§3): laering." },
      ],
    },
    // Lesson 2: the written argument. This is the lesson the whole unit exists for
    // — the verbs a Norwegian essay runs on.
    {
      id: "no-u103l2",
      unit: 103,
      lesson: 2,
      title: "Å drøfte",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue a case in writing the way a Norwegian essay does — pose the question, weigh both sides, and summarise what you showed.",
      items: [
        { id: "no-u103l2-eiproblemstilling", type: "vocab", front: "ei problemstilling", reading: "eiproblemstilling", meaning: "a research question", example: { jp: "Oppgaven begynner med ei klar problemstilling.", en: "The assignment begins with a clear research question." }, accept: ["the question posed", "a thesis question"], drill: { jp: "Vi må velge ei problemstilling først", en: "We must choose a research question first" }, hint: "problem + stilling, from å stille — literally how the problem is POSED. Every Norwegian school essay from roughly age sixteen opens by stating one. Feminine, -ing." },
        { id: "no-u103l2-adrofte", type: "vocab", front: "å drøfte", reading: "adrofte", meaning: "to discuss both sides", example: { jp: "I denne delen drøfter vi to ulike svar.", en: "In this part we discuss two different answers." }, accept: ["to weigh up", "to debate", "to consider"], drill: { jp: "Det er viktig å drøfte problemet", en: "It is important to discuss the problem" }, hint: "⚠ THE KEY VERB OF NORWEGIAN ACADEMIC WRITING, and it is NOT \"to discuss\" loosely. Drøft is an exam instruction meaning: give both sides their strongest form, then judge. Answering a drøft question with one side is how you fail it." },
        { id: "no-u103l2-etresonnement", type: "vocab", front: "et resonnement", reading: "etresonnement", meaning: "a line of reasoning", example: { jp: "Resonnementet hans er lett å følge.", en: "His line of reasoning is easy to follow." }, accept: ["an argument (chain)", "reasoning"], drill: { jp: "Han har et resonnement som holder", en: "He has a line of reasoning that holds" }, hint: "Neuter. Not the same as en påstand (u71): a påstand is the CLAIM, a resonnement is the road you took to get there. A reader can accept your påstand and still reject your resonnement." },
        { id: "no-u103l2-abelyse", type: "vocab", front: "å belyse", reading: "abelyse", meaning: "to shed light on", example: { jp: "Undersøkelsen belyser et viktig problem.", en: "The study sheds light on an important problem." }, accept: ["to illuminate", "to throw light on", "to examine"], drill: { jp: "Vi ønsker å belyse dette problemet", en: "We want to shed light on this problem" }, hint: "be- + lys (u16) — to put light ON something. A formal favourite: saken må belyses fra flere sider. The s-passive from u70 is its natural home." },
        { id: "no-u103l2-etsammendrag", type: "vocab", front: "et sammendrag", reading: "etsammendrag", meaning: "a summary", example: { jp: "Sammendraget står først i oppgaven.", en: "The summary comes first in the assignment." }, accept: ["an abstract", "a synopsis"], drill: { jp: "Skriv et sammendrag av teksten", en: "Write a summary of the text" }, hint: "sammen + drag, from å dra — what has been drawn together. Neuter. On a research article this is what English calls the abstract." },
        { id: "no-u103l2-autdype", type: "vocab", front: "å utdype", reading: "autdype", meaning: "to expand on", example: { jp: "Kan du utdype dette svaret?", en: "Can you expand on this answer?" }, accept: ["to elaborate", "to go deeper into"], drill: { jp: "Vi begynner å utdype svaret", en: "We begin to expand on the answer" }, hint: "ut + dyp, the same root as fordypning in l1. The polite thing a Norwegian says in a seminar when they mean \"that was too thin\": kan du utdype?" },
      ],
    },
    // Lesson 3: whether a finding holds. u74 taught how research is described;
    // this is how it is CHECKED, which is the part that makes it knowledge.
    {
      id: "no-u103l3",
      unit: 103,
      lesson: 3,
      title: "Forskning og kvalitet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge whether a piece of research holds up — who reviewed it, what it rests on, and whether anyone could check it again.",
      items: [
        { id: "no-u103l3-eifagfellevurdering", type: "vocab", front: "ei fagfellevurdering", reading: "eifagfellevurdering", meaning: "a peer review", example: { jp: "Teksten kom gjennom ei fagfellevurdering.", en: "The text came through a peer review." }, accept: ["peer assessment", "refereeing"], drill: { jp: "Teksten gikk gjennom ei fagfellevurdering", en: "The text went through a peer review" }, hint: "⚠ FIRST FEMININE IN THIS UNIT. fag + felle (a fellow) + vurdering (u71) — judgement by your peers in the subject. A compound takes the gender of its LAST part, and -vurdering is -ing, so the whole thing is ei: fagfellevurderinga. Moderate Bokmål writes -en, which is what you will see in print." },
        { id: "no-u103l3-etdatagrunnlag", type: "vocab", front: "et datagrunnlag", reading: "etdatagrunnlag", meaning: "a body of data", example: { jp: "Datagrunnlaget er for lite til å konkludere.", en: "The body of data is too small to draw a conclusion." }, accept: ["the data basis", "an evidence base"], drill: { jp: "Vi trenger et datagrunnlag her", en: "We need a body of data here" }, hint: "data + grunnlag, from grunn (u34) — the ground a claim stands on. Neuter. -grunnlag is a hugely productive ending in formal Norwegian: beslutningsgrunnlag, inntektsgrunnlag." },
        { id: "no-u103l3-eiutproving", type: "vocab", front: "ei utprøving", reading: "eiutproving", meaning: "a trial run", example: { jp: "Etter ei lang utprøving ble metoden brukt.", en: "After a long trial the method was used." }, accept: ["a trial", "testing", "a pilot"], drill: { jp: "Vi gjør ei utprøving neste uke", en: "We are doing a trial run next week" }, hint: "ut + å prøve (u15) + -ing. Feminine. Note the example: a fronted adverbial forces the verb into second place — Etter ei lang utprøving BLE metoden brukt (§4) — and it uses the bli-passive from u70." },
        { id: "no-u103l3-aetterprove", type: "vocab", front: "å etterprøve", reading: "aetterprove", meaning: "to check independently", example: { jp: "Andre må kunne etterprøve funnene.", en: "Others must be able to check the findings independently." }, accept: ["to verify", "to replicate", "to test again"], drill: { jp: "Det er mulig å etterprøve funnene", en: "It is possible to check the findings independently" }, hint: "etter + å prøve — to try it AFTER someone else, which is exactly what replication is. Note two ø folds in the reading (§3): aetterprove. This verb is the whole difference between a finding and an opinion." },
        { id: "no-u103l3-eiavhandling", type: "vocab", front: "ei avhandling", reading: "eiavhandling", meaning: "a doctoral thesis", example: { jp: "Avhandlinga hennes er på mange sider.", en: "Her thesis is many pages long." }, accept: ["a dissertation", "a treatise"], drill: { jp: "Hun skriver ei avhandling om språk", en: "She is writing a thesis about language" }, hint: "av + å handle — a thorough treatment OF something. Feminine, -ing: avhandlinga. Reserved for the long one; an ordinary essay is en oppgave (u18)." },
        { id: "no-u103l3-endoktorgrad", type: "vocab", front: "en doktorgrad", reading: "endoktorgrad", meaning: "a doctorate", example: { jp: "Han tok en doktorgrad i norsk språk.", en: "He took a doctorate in Norwegian language." }, accept: ["a PhD", "doctoral degree"], drill: { jp: "Hun tar en doktorgrad nå", en: "She is taking a doctorate now" }, hint: "⚠ MASCULINE. doktor + grad, and a compound takes the gender of its last part — grad is masculine, so en doktorgrad, doktorgraden. Nothing about the -grad ending makes it feminine." },
      ],
    },
    // Lesson 4: the system as an argument. Norway argues about its school in these
    // five words, and the sixth is the one the argument is really about.
    {
      id: "no-u103l4",
      unit: 103,
      lesson: 4,
      title: "Utdanningsløpet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow the Norwegian debate about schooling — the compulsory years, the vocational route, who drops out and what school is for.",
      items: [
        { id: "no-u103l4-engrunnskole", type: "vocab", front: "en grunnskole", reading: "engrunnskole", meaning: "compulsory school", example: { jp: "Grunnskolen varer i ti år i Norge.", en: "Compulsory school lasts ten years in Norway." }, accept: ["primary and lower secondary", "basic school"], drill: { jp: "Alle barn går i en grunnskole", en: "All children go to a compulsory school" }, hint: "grunn + skole — the ground-level school. ⚠ WIDER THAN en barneskole (u85): grunnskole is the whole ten-year compulsory stretch, barneskole only its first seven. Norwegian statistics always mean the ten." },
        { id: "no-u103l4-etyrkesfag", type: "vocab", front: "et yrkesfag", reading: "etyrkesfag", meaning: "a vocational subject", example: { jp: "Mange velger et yrkesfag etter grunnskolen.", en: "Many choose a vocational subject after compulsory school." }, accept: ["a trade subject", "vocational track"], drill: { jp: "Han valgte et yrkesfag på skolen", en: "He chose a vocational subject at school" }, hint: "et yrke (u13) + -s- + fag. Neuter after fag. Norwegian upper secondary splits in two at sixteen — yrkesfag against studiespesialisering — and which one you took follows you through the whole debate." },
        { id: "no-u103l4-etfrafall", type: "vocab", front: "et frafall", reading: "etfrafall", meaning: "a dropout rate", example: { jp: "Frafallet er størst det første året.", en: "The dropout rate is highest in the first year." }, accept: ["dropping out", "attrition"], drill: { jp: "Skolen opplever et frafall hvert år", en: "The school experiences a dropout every year" }, hint: "fra + fall — falling away. Neuter. THE word in Norwegian education policy: frafall i videregående (u85) is the problem every reform claims to solve." },
        { id: "no-u103l4-eitilrettelegging", type: "vocab", front: "ei tilrettelegging", reading: "eitilrettelegging", meaning: "an accommodation (adjusting)", example: { jp: "Skolen gir tilrettelegging til de som trenger det.", en: "The school provides accommodation for those who need it." }, accept: ["adaptation (for a person)", "adjustment", "support measures"], drill: { jp: "Skolen gir ei tilrettelegging til eleven", en: "The school gives an accommodation to the pupil" }, hint: "til + rette + å legge (u77) — laying things right for someone. Feminine, -ing. A legal entitlement in Norwegian schools and workplaces, so it is a word with rights attached, not a favour." },
        { id: "no-u103l4-enkvalifikasjon", type: "vocab", front: "en kvalifikasjon", reading: "enkvalifikasjon", meaning: "a qualification", example: { jp: "Du trenger flere kvalifikasjoner for denne jobben.", en: "You need more qualifications for this job." }, accept: ["a credential", "formal competence"], drill: { jp: "Hun har en kvalifikasjon fra skolen", en: "She has a qualification from the school" }, hint: "Masculine — every -sjon noun in Norwegian is. That is one of the most reliable gender rules the language has: en stasjon, en nasjon, en kvalifikasjon." },
        { id: "no-u103l4-dannelse", type: "vocab", front: "dannelse", reading: "dannelse", meaning: "formation of the person", example: { jp: "Dannelse er noe mer enn god utdanning.", en: "Formation of the person is something more than a good education." }, accept: ["cultivation", "Bildung", "personal formation"], drill: { jp: "Skolen skal gi dannelse til alle", en: "The school shall give formation to everyone" }, hint: "⚠ BARE, NO ARTICLE (§1b) — mass, and -else so masculine if you need it: dannelsen. From å danne, to form. There is no clean English word; it is German Bildung — what an education makes of you as a person, as against what it qualifies you to do. Norwegian school law opens with it." },
      ],
    },
  ],
};
