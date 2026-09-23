// NO Unit 103 — Studieløp og forskningsmetode (slot: education-research) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot "Education and research", RETITLED AND RETHEMED. Conventions: unit1.js
// §1–§9, unit51.js B1–B9, unit88.js C1–C7.
//
// ⚠ THE OBVIOUS LAYER IS SPENT THREE TIMES OVER. u24 and u74 own the student's
// day (et emne, et pensum, å stryke, å bestå, en forelesning, en veileder, ei
// innlevering, ei slutning, et funn, en undersøkelse, forskning, en forsker);
// u85 owns the school (en bachelor, en høyskole, videregående, en lærling); and
// u94 owns the science (en hypotese, en sensor, en algoritme, ei framstilling,
// ei blanding). u89 owns sources and evidence (en kildekritikk, å etterprøve,
// et utdrag, et gjennomsnitt, en andel, en statistikk).
// SO THIS UNIT IS NOT "school words" again. It is the INSTITUTION a student
// moves through (l1), the machinery that JUDGES the work (l2), the METHOD that
// makes a finding trustworthy (l3), and what education is FOR (l4).
//
// ⚠ "LEXEME" MEANS INFLECTION, NOT DERIVATION (CLAUDE.md / RUNBOOK §4, corrected
// on main 2026-09-23, commit 5928ca20). A word DERIVED from a taught one is a
// DIFFERENT lexeme and MAY be carded; only the SAME word in another form is
// blocked. `SAME` (article variant) and `TAKEN` from check-front.mjs are still
// hard blocks; `LEXEME` is advisory. The fronts below were left out on MERIT —
// twenty-four slots, and these lost — or because the learner genuinely already
// owns them; they are NOT blocked by the lexeme rule and a later block may card
// any of them:
// `ei læring` (← å lære u1 — this one really is the same idea twice),
// `ei formidling`, `ei skolering`, `ei generalisering`, `ei sensur` (this last
// one would collide with en sensor u94 on a produce card, which is a REAL block
// and has nothing to do with lexemes).
//
// GENDER: -het masculine (en ferdighet), -ikk masculine (en pedagogikk, en
// forskningsetikk — like en logikk u88), -sjon masculine (en replikasjon), -ing
// feminine (ei avhandling, ei danning, ei tilbakemelding, ei fordypning, ei
// problemstilling, ei fagfellevurdering, ei datainnsamling). `en feilkilde` is
// masculine because en kilde (u54) is; `en læreplan` because en plan (u21) is.
// FIRST FEMININE is `ei avhandling` (l1) and carries the en-/ei- note.
//
// SCOPE: the frozen base u1–u102 plus this unit's own earlier cards.
// FREE: doktor | professor, master, PhD
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT103 = {
  id: "no-u103",
  lang: "no",
  title: "Studieløp og forskningsmetode",
  order: 103,
  stage: "b2",
  lessons: [
    {
      id: "no-u103l1",
      unit: 103,
      lesson: 1,
      title: "Gjennom studieløpet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe an academic career as a structure — name the units it is built from, and say where people actually fall out of it.",
      items: [
        { id: "no-u103l1-etfakultet", type: "vocab", front: "et fakultet", reading: "etfakultet", meaning: "faculty (university division)", example: { jp: "Fakultetet bestemmer over penger, men det er instituttene som bestemmer hva som blir undervist.", en: "The faculty decides about money, but it is the departments that decide what gets taught." }, accept: ["a faculty", "a school (university)"], drill: { jp: "Hun jobber ved et fakultet i Bergen", en: "She works at a faculty in Bergen" }, hint: "et fakultet → fakultetet, flertall fakulteter. Den STORE enheten på et universitet; under den ligger instituttene." },
        { id: "no-u103l1-etinstitutt", type: "vocab", front: "et institutt", reading: "etinstitutt", meaning: "department (academic)", example: { jp: "Instituttet er lite, og nettopp derfor kjenner alle hverandre bedre enn de gjør andre steder.", en: "The department is small, and precisely for that reason everybody knows each other better than they do elsewhere." }, accept: ["an institute", "a department"], drill: { jp: "De la ned et institutt i vår", en: "They closed a department in the spring" }, hint: "et institutt → instituttet, flertall institutter. Under fakultetet. Ordet brukes også om frittstående forskningsinstitutter utenfor universitetet." },
        { id: "no-u103l1-etstudiepoeng", type: "vocab", front: "et studiepoeng", reading: "etstudiepoeng", meaning: "credit (study point)", example: { jp: "Et studiepoeng sier hvor mye arbeid et emne krever, men det sier ingenting om hva du sitter igjen med.", en: "A credit says how much work a course demands, but it says nothing about what you are left with." }, accept: ["a study credit", "an ECTS credit"], drill: { jp: "Emnet gir et studiepoeng til", en: "The course gives one more credit" }, hint: "et studiepoeng → studiepoenget, flertall studiepoeng (ubøyd). Et studium + et poeng (u44). Et helt år er 60." },
        { id: "no-u103l1-endoktorgrad", type: "vocab", front: "en doktorgrad", reading: "endoktorgrad", meaning: "doctorate", example: { jp: "En doktorgrad tar fire år på papiret, og de fleste bruker lengre tid enn det.", en: "A doctorate takes four years on paper, and most people take longer than that." }, accept: ["a PhD", "a doctoral degree"], drill: { jp: "Han tar en doktorgrad i Oslo", en: "He is taking a doctorate in Oslo" }, hint: "en doktorgrad → doktorgraden, flertall doktorgrader. Doktor + en grad (u43). Hankjønn fordi grad er det." },
        { id: "no-u103l1-eiavhandling", type: "vocab", front: "ei avhandling", reading: "eiavhandling", meaning: "thesis (dissertation)", example: { jp: "Avhandlinga ble god til slutt, men de tre første årene gikk med til å finne ut hva hun egentlig spurte om.", en: "The thesis turned out well in the end, but the first three years went on finding out what she was really asking." }, accept: ["a dissertation", "a thesis"], drill: { jp: "Hun skriver ei avhandling om språk", en: "She is writing a thesis about language" }, hint: "ei avhandling → avhandlinga. Hunkjønnsord kan du også skrive en avhandling / avhandlingen; -ing er alltid hunkjønn i denne kursen (regel 1). Fra å avhandle. Bare om doktorgraden — en bacheloroppgave er ei oppgave." },
        { id: "no-u103l1-etfrafall", type: "vocab", front: "et frafall", reading: "etfrafall", meaning: "drop-out rate", example: { jp: "Frafallet er høyest det første året, og skolen vet det, men ingen gjør noe med det før i det andre.", en: "The drop-out rate is highest in the first year, and the school knows it, but nobody does anything about it until the second." }, accept: ["attrition", "drop-out"], drill: { jp: "Skolen har et frafall som er stort", en: "The school has a drop-out rate that is big" }, hint: "et frafall → frafallet. Fra + et fall. Alltid om en ANDEL som slutter, ikke om den ene som gjør det." },
      ],
    },
    {
      id: "no-u103l2",
      unit: 103,
      lesson: 2,
      title: "Å bli vurdert",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about academic work being judged — name the question it answers, who checks it, and what counts as cheating.",
      items: [
        { id: "no-u103l2-eiproblemstilling", type: "vocab", front: "ei problemstilling", reading: "eiproblemstilling", meaning: "research question", example: { jp: "Problemstillinga er for stor, og da blir svaret vanskelig å lese uansett hvor godt arbeidet er.", en: "The research question is too big, and then the answer gets hard to read however good the work is." }, accept: ["the question (of a study)", "a research problem"], drill: { jp: "De valgte ei problemstilling som var for stor", en: "They chose a research question that was too big" }, hint: "ei problemstilling → problemstillinga. -ing er hunkjønn. Et problem (u60) + å stille. Spørsmålet oppgava faktisk prøver å svare på." },
        { id: "no-u103l2-eifagfellevurdering", type: "vocab", front: "ei fagfellevurdering", reading: "eifagfellevurdering", meaning: "peer review", example: { jp: "Fagfellevurderinga tar måneder, og den stopper mye, men ikke den forskeren som finner på tallene sine.", en: "Peer review takes months, and it stops a lot, but not the researcher who makes up their own figures." }, accept: ["peer review", "review by peers"], drill: { jp: "Artikkelen gikk gjennom ei fagfellevurdering", en: "The article went through a peer review" }, hint: "ei fagfellevurdering → fagfellevurderinga. Et fag (u18) + en felle (likemann) + ei vurdering (u71). Andre forskere i samme fag leser og sier nei eller ja." },
        { id: "no-u103l2-etplagiat", type: "vocab", front: "et plagiat", reading: "etplagiat", meaning: "plagiarism", example: { jp: "Det var ikke et plagiat, men hun hadde likevel glemt å si hvor tanken kom fra.", en: "It was not plagiarism, but she had still forgotten to say where the thought came from." }, accept: ["plagiarism"], drill: { jp: "De fant et plagiat i oppgava", en: "They found plagiarism in the assignment" }, hint: "et plagiat → plagiatet, flertall plagiater. Å bruke andres arbeid som ditt eget. Å sitere (u89) og oppgi kilden er det motsatte." },
        { id: "no-u103l2-eitilbakemelding", type: "vocab", front: "ei tilbakemelding", reading: "eitilbakemelding", meaning: "feedback", example: { jp: "Tilbakemeldinga var grundig, men den kom så sent at ingen hadde tid til å bruke den.", en: "The feedback was thorough, but it came so late that nobody had time to use it." }, accept: ["feedback", "a response"], drill: { jp: "Hun fikk ei tilbakemelding hun kunne bruke", en: "She got a feedback she could use" }, hint: "ei tilbakemelding → tilbakemeldinga. Tilbake (u13) + ei melding (u20). -ing er hunkjønn. Det du får HØRE om arbeidet, ikke karakteren du får." },
        { id: "no-u103l2-etstipend", type: "vocab", front: "et stipend", reading: "etstipend", meaning: "grant (scholarship)", example: { jp: "Stipendet dekker to år, og forskningen hun planlegger tar minst fire.", en: "The grant covers two years, and the research she is planning takes at least four." }, accept: ["a scholarship", "a stipend"], drill: { jp: "Hun søkte om et stipend i vår", en: "She applied for a grant in the spring" }, hint: "et stipend → stipendet, flertall stipend eller stipender. Penger du får for å STUDERE eller FORSKE; ei bevilgning (u102) går til en institusjon." },
        { id: "no-u103l2-eieksamensform", type: "vocab", front: "ei eksamensform", reading: "eieksamensform", meaning: "form of examination", example: { jp: "Eksamensforma er endelig blitt bedre, men den måler fremdeles hvem som skriver fort.", en: "The form of examination has finally got better, but it still measures who writes fast." }, accept: ["exam format", "assessment format"], drill: { jp: "Skolen prøver ei eksamensform som er ny", en: "The school is trying a form of examination that is new" }, hint: "ei eksamensform → eksamensforma. En eksamen (u24) + ei form. ⚠ u46 lærte en form; i sammensetninger som denne er hunkjønn det vanligste, og begge er tillatt." },
      ],
    },
    {
      id: "no-u103l3",
      unit: 103,
      lesson: 3,
      title: "Forskningsmetode",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Attack or defend a study's method — name what was compared with what, where the error could have come in, and what would settle it.",
      items: [
        { id: "no-u103l3-eikontrollgruppe", type: "vocab", front: "ei kontrollgruppe", reading: "eikontrollgruppe", meaning: "control group", example: { jp: "Uten ei kontrollgruppe vet vi bare at folk ble bedre, ikke at det var behandlingen som gjorde det.", en: "Without a control group we only know that people got better, not that it was the treatment that did it." }, accept: ["a control group"], drill: { jp: "De hadde ei kontrollgruppe som var for liten", en: "They had a control group that was too small" }, hint: "ei kontrollgruppe → kontrollgruppa. Ei gruppe (u68) er hunkjønn og sammensetninga arver det. De som IKKE får tiltaket, og derfor viser hva som ville skjedd uansett." },
        { id: "no-u103l3-eidatainnsamling", type: "vocab", front: "ei datainnsamling", reading: "eidatainnsamling", meaning: "data collection", example: { jp: "Datainnsamlinga tok to år, og analysen etter den tok bare tre uker.", en: "The data collection took two years, and the analysis after it took only three weeks." }, accept: ["collecting data", "data gathering"], drill: { jp: "De begynte ei datainnsamling i vår", en: "They began a data collection in the spring" }, hint: "ei datainnsamling → datainnsamlinga. Data (u75) + inn + å samle. -ing er hunkjønn. Å SKAFFE tallene; å tolke dem er noe annet." },
        { id: "no-u103l3-enfeilkilde", type: "vocab", front: "en feilkilde", reading: "enfeilkilde", meaning: "source of error", example: { jp: "Den største feilkilden var at folk svarte det de trodde forskeren ville høre.", en: "The biggest source of error was that people answered what they thought the researcher wanted to hear." }, accept: ["a source of error", "a confound"], drill: { jp: "De fant en feilkilde ingen hadde sett", en: "They found a source of error nobody had seen" }, hint: "en feilkilde → feilkilden, flertall feilkilder. En feil (u50) + en kilde (u54). Hankjønn fordi kilde er det. Ikke selve feilen — det STEDET feilen kan komme inn." },
        { id: "no-u103l3-etforskningsdesign", type: "vocab", front: "et forskningsdesign", reading: "etforskningsdesign", meaning: "study design", example: { jp: "Forskningsdesignet bestemmer hva du kan si til slutt, og det kan du ikke rette opp etterpå.", en: "The study design decides what you can say at the end, and that is not something you can correct afterwards." }, accept: ["research design", "the design of a study"], drill: { jp: "De valgte et forskningsdesign som var kort", en: "They chose a study design that was short" }, hint: "et forskningsdesign → forskningsdesignet. Forskning (u74) + et design (u75). Hele oppsettet: hvem, hva, sammenlignet med hva." },
        { id: "no-u103l3-enreplikasjon", type: "vocab", front: "en replikasjon", reading: "enreplikasjon", meaning: "replication", example: { jp: "Replikasjonen ga et helt annet svar, og det er den slags nyhet ingen avis skriver om.", en: "The replication gave a completely different answer, and that is the sort of news no newspaper writes about." }, accept: ["a replication", "a repeat study"], drill: { jp: "De gjorde en replikasjon to år etter", en: "They did a replication two years after" }, hint: "en replikasjon → replikasjonen, flertall replikasjoner. -sjon er hankjønn (som en konklusjon, u88). Å gjøre studien om igjen og se om svaret holder." },
        { id: "no-u103l3-enforskningsetikk", type: "vocab", front: "en forskningsetikk", reading: "enforskningsetikk", meaning: "research ethics", example: { jp: "Forskningsetikken sier nei her, selv om metoden ville gitt oss et mye tydeligere svar.", en: "Research ethics says no here, even though the method would have given us a much clearer answer." }, accept: ["research ethics"], drill: { jp: "De leser en forskningsetikk hvert år", en: "They read a research ethics every year" }, hint: "en forskningsetikk → forskningsetikken. -ikk er hankjønn, som en logikk (u88). Forskning (u74) + en etikk (u97)." },
      ],
    },
    {
      id: "no-u103l4",
      unit: 103,
      lesson: 4,
      title: "Hva utdanning er til for",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about what education is for — separate what a learner can DO from what they have been TOLD, and name the Norwegian word for the difference.",
      items: [
        { id: "no-u103l4-eidanning", type: "vocab", front: "ei danning", reading: "eidanning", meaning: "formation (Bildung)", example: { jp: "Danning er ikke det samme som utdanning, og det er nettopp den forskjellen skolen sliter med.", en: "Formation is not the same as education, and it is exactly that difference the school struggles with." }, accept: ["Bildung", "personal formation", "cultivation"], drill: { jp: "Skolen snakker om ei danning i alle fag", en: "The school talks about a formation in all subjects" }, hint: "ei danning → danninga. -ing er hunkjønn. Fra å danne. Skrives også dannelse (hankjønn). Å bli et helt menneske — ikke å lære et fag. Ordet står i den norske læreplanen." },
        { id: "no-u103l4-enferdighet", type: "vocab", front: "en ferdighet", reading: "enferdighet", meaning: "skill", example: { jp: "Hun har kunnskapen, men ferdigheten kommer først etter at hun har gjort det galt noen ganger.", en: "She has the knowledge, but the skill only comes after she has done it wrong a few times." }, accept: ["a skill", "an ability"], drill: { jp: "Det er en ferdighet du må trene", en: "It is a skill you have to train" }, hint: "en ferdighet → ferdigheten, flertall ferdigheter. ⚠ -het er ALLTID hankjønn. Fra ferdig (u28), men betyr noe annet: det du KAN GJØRE, ikke det du vet." },
        { id: "no-u103l4-enpedagogikk", type: "vocab", front: "en pedagogikk", reading: "enpedagogikk", meaning: "pedagogy", example: { jp: "Pedagogikken er god, men den er laget for en klasse på ti og de er tre ganger så mange.", en: "The pedagogy is good, but it is made for a class of ten and they are three times as many." }, accept: ["teaching method", "pedagogy"], drill: { jp: "Læreren har en pedagogikk som virker", en: "The teacher has a pedagogy that works" }, hint: "en pedagogikk → pedagogikken. -ikk er hankjønn. Læren om HVORDAN man underviser. En pedagog er mennesket." },
        { id: "no-u103l4-enlaereplan", type: "vocab", front: "en læreplan", reading: "enlaereplan", meaning: "curriculum", example: { jp: "Læreplanen er ny hvert ti år, mens bøkene som skal følge den kommer flere år etterpå.", en: "The curriculum is new every ten years, while the books meant to follow it come several years afterwards." }, accept: ["a syllabus", "a curriculum"], drill: { jp: "De skrev en læreplan som var kortere", en: "They wrote a curriculum that was shorter" }, hint: "en læreplan → læreplanen, flertall læreplaner. Å lære (u1) + en plan (u21). Merk æ-folden: lesinga er enlaereplan. Det staten bestemmer skal læres; pensum (u74) er bøkene." },
        { id: "no-u103l4-apugge", type: "vocab", front: "å pugge", reading: "apugge", meaning: "to learn by rote", example: { jp: "Han pugget alle tallene, og han klarte likevel ikke å si hvorfor krigen begynte.", en: "He learnt all the figures by heart, and still could not say why the war started." }, accept: ["to cram", "to memorise"], drill: { jp: "Det er lett å pugge nye ord", en: "It is easy to learn new words by rote" }, hint: "å pugge → pugger, pugget. Å lære utenat uten å forstå. Norsk skole bruker ordet negativt nesten alltid." },
        { id: "no-u103l4-enmentor", type: "vocab", front: "en mentor", reading: "enmentor", meaning: "mentor", example: { jp: "En mentor er ikke en lærer, for hun svarer ikke på det du lurer på — hun spør deg om noe annet.", en: "A mentor is not a teacher, because she does not answer what you are wondering about — she asks you something else." }, accept: ["a mentor"], drill: { jp: "Hun fikk en mentor på jobben", en: "She got a mentor at work" }, hint: "en mentor → mentoren, flertall mentorer. Ikke det samme som en veileder (u74), som har et formelt ansvar for arbeidet ditt." },
      ],
    },
  ],
};
