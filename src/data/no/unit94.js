// NO Unit 94 — Vitenskap og teknologi (slot: science-tech) — B2
// Retitled from the scaffold's English placeholder "Science and technology".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// ⚠️ TWO B1 UNITS SIT UNDER THIS ONE AND BOTH ARE SPENT. u74 "Studier og
// forskning" owns forskning, en forsker, en undersøkelse, et funn, et fagfelt,
// ei slutning and å konkludere; u75 "Nett og teknologi 2" owns et system, et
// nettverk, et varsel and å fungere. u34 owns å oppdage and en forsker as well.
// So the B2 job here is METHOD, not "science words": what a hypothesis is, what
// separates an observation from a measurement, and what a result has to survive
// before anybody should believe it.
//
// ⚠️ en oppdagelse IS taught here even though å oppdage is u34l3, and ei
// tolkning even though å tolke is u49l1. That is the u71l2 pattern (Fra verb
// til substantiv) applied deliberately, not an oversight — the nominalisation
// is the B2 register, and it is the form these words take in writing.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT94 = {
  id: "no-u94",
  lang: "no",
  title: "Vitenskap og teknologi",
  order: 94,
  stage: "b2",
  lessons: [
    {
      id: "no-u94l1",
      unit: 94,
      lesson: 1,
      title: "Hypotese og forsøk",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a finding was produced — what was guessed, what was set up, and what was actually measured.",
      items: [
        { id: "no-u94l1-enhypotese", type: "vocab", front: "en hypotese", reading: "enhypotese", meaning: "hypothesis (a guess set up so it can be proved wrong)", example: { jp: "En hypotese som ingenting kan gjøre feil, er ikke en hypotese i det hele tatt.", en: "A hypothesis that nothing can prove wrong is not a hypothesis at all." }, accept: ["a testable guess", "a working supposition"], drill: { jp: "Vi har en hypotese om dette", en: "We have a hypothesis about this" }, hint: "en hypotese → hypotesen, flertall hypoteser. En påstand (u71) vil overbevise; en hypotese ber om å bli prøvd." },
        { id: "no-u94l1-eteksperiment", type: "vocab", front: "et eksperiment", reading: "eteksperiment", meaning: "experiment (a set-up built to answer one question)", example: { jp: "Et godt eksperiment svarer på en ting, og er lite nok til at svaret betyr noe.", en: "A good experiment answers one thing, and is small enough that the answer means something." }, accept: ["a controlled trial", "a test set-up"], drill: { jp: "De gjorde et eksperiment i sommer", en: "They did an experiment in the summer" }, hint: "et eksperiment → eksperimentet, flertall eksperimenter. Å eksperimentere er verbet. NB: uttales med -ment som i departement (u92)." },
        { id: "no-u94l1-enobservasjon", type: "vocab", front: "en observasjon", reading: "enobservasjon", meaning: "observation (something noticed without touching it)", example: { jp: "Det begynner som en observasjon ingen tror på, og så gjør flere det samme.", en: "It begins as an observation nobody believes, and then several people do the same." }, accept: ["a noticing", "a recorded sighting"], drill: { jp: "Dette er en observasjon vi tror på", en: "This is an observation we believe" }, hint: "en observasjon → observasjonen, flertall observasjoner. -sjon er hankjønn (unit88 regel B3). Du SER en observasjon; du LAGER et eksperiment." },
        { id: "no-u94l1-eimaling", type: "vocab", front: "ei måling", reading: "eimaling", meaning: "measurement (a number produced with an instrument)", example: { jp: "Ei måling uten en feilkilde nevnt er ei måling du ikke bør bruke.", en: "A measurement with no source of error named is a measurement you should not use." }, accept: ["a reading taken", "a measured value"], drill: { jp: "Vi gjorde ei måling til", en: "We took one more measurement" }, hint: "ei måling → målinga, flertall målinger. -ing er hunkjønn (unit88 regel B3). Fra å måle (u43). En observasjon er noe du ser; ei måling gir et TALL." },
        { id: "no-u94l1-envariabel", type: "vocab", front: "en variabel", reading: "envariabel", meaning: "variable (the one thing allowed to change)", example: { jp: "De gjorde om på to ting på en gang, og da vet ingen hvilken variabel som virket.", en: "They changed two things at once, and then nobody knows which variable did the work." }, accept: ["a factor allowed to vary", "a changing quantity"], drill: { jp: "Her er en variabel vi glemte", en: "Here is a variable we forgot" }, hint: "en variabel → variabelen, flertall variabler. En faktor (u90) virker inn; en variabel er den du med VILJE lar endre seg." },
        { id: "no-u94l1-empirisk", type: "vocab", front: "empirisk", reading: "empirisk", meaning: "empirical (settled by looking, not by arguing)", example: { jp: "Dette er et empirisk emne, så vi trenger tall og ikke flere ord.", en: "This is an empirical subject, so we need figures and not more words." }, accept: ["based on observation", "answerable by evidence"], drill: { jp: "Dette er et empirisk svar", en: "This is an empirical answer" }, hint: "Bøyes empirisk, empiriske. Fra gresk: erfaring. Et empirisk spørsmål KAN avgjøres; et prinsipielt (u91) spørsmål kan det ikke." },
      ],
    },
    {
      id: "no-u94l2",
      unit: 94,
      lesson: 2,
      title: "Å tolke resultater",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a result does and does not show — the reading of it, the sums behind it, and who has checked it.",
      items: [
        { id: "no-u94l2-eitolkning", type: "vocab", front: "ei tolkning", reading: "eitolkning", meaning: "interpretation (one reading of what the data mean)", example: { jp: "Tallene er de samme for begge, men tolkninga deres er helt ulik.", en: "The figures are the same for both, but their interpretation is completely different." }, accept: ["a reading of the evidence", "a construal"], drill: { jp: "Dette er ei tolkning blant flere", en: "This is one interpretation among several" }, hint: "ei tolkning → tolkninga, flertall tolkninger. -ning er hunkjønn (unit88 regel B3). Fra å tolke (u49). Tallene er ett; tolkningene kan være mange." },
        { id: "no-u94l2-eiberegning", type: "vocab", front: "ei beregning", reading: "eiberegning", meaning: "calculation (the working that produced the number)", example: { jp: "Ei beregning ingen får se, er like god som ingen beregning.", en: "A calculation nobody gets to see is as good as no calculation." }, accept: ["a computation", "the sums behind a figure"], drill: { jp: "Her er ei beregning vi sjekket", en: "Here is a calculation we checked" }, hint: "ei beregning → beregninga. -ning er hunkjønn. Fra å beregne (u62). Et anslag (u89) er med vilje omtrent; ei beregning skal kunne etterprøves." },
        { id: "no-u94l2-enoppdagelse", type: "vocab", front: "en oppdagelse", reading: "enoppdagelse", meaning: "discovery (a thing found that was always there)", example: { jp: "Den største oppdagelsen var at de spurte om feil ting i ti år.", en: "The biggest discovery was that they had been asking about the wrong thing for ten years." }, accept: ["a finding brought to light", "something newly found"], drill: { jp: "Dette er en oppdagelse folk husker", en: "This is a discovery people remember" }, hint: "en oppdagelse → oppdagelsen, flertall oppdagelser. -else er HANKJØNN (unit88 regel B3), aldri ei. Fra å oppdage (u34)." },
        { id: "no-u94l2-teoretisk", type: "vocab", front: "teoretisk", reading: "teoretisk", meaning: "theoretical (worked out on paper, not yet in the world)", example: { jp: "Teoretisk går det an, men ingen har klart å gjøre det med vanlige folk.", en: "Theoretically it is possible, but nobody has managed to do it with ordinary people." }, accept: ["in theory only", "worked out but untested"], drill: { jp: "Dette er et teoretisk problem", en: "This is a theoretical problem" }, hint: "Bøyes teoretisk, teoretiske. Fra en teori (u34). Motsatt av empirisk (l1): teoretisk er regnet fram, empirisk er sett." },
        { id: "no-u94l2-etgjennombrudd", type: "vocab", front: "et gjennombrudd", reading: "etgjennombrudd", meaning: "breakthrough (the result that opens a door nobody could open)", example: { jp: "De kaller det et gjennombrudd, men de som jobber med det sier det tok lang tid.", en: "They call it a breakthrough, but those who work on it say it took a long time." }, accept: ["a decisive advance", "a door opened"], drill: { jp: "Dette er et gjennombrudd for oss", en: "This is a breakthrough for us" }, hint: "et gjennombrudd → gjennombruddet, flertall gjennombrudd (likt). Gjennom + å bryte. Ei nyvinning (l4) er ny; et gjennombrudd LØSER noe fastlåst." },
        { id: "no-u94l2-eifagfellevurdering", type: "vocab", front: "ei fagfellevurdering", reading: "eifagfellevurdering", meaning: "peer review (other specialists checking before it is published)", example: { jp: "Ei fagfellevurdering gjør ikke arbeidet riktig, den gjør det bare vanskeligere å ta helt feil.", en: "A peer review does not make the work right, it only makes it harder to be completely wrong." }, accept: ["review by other specialists", "expert refereeing"], drill: { jp: "Arbeidet gikk gjennom ei fagfellevurdering", en: "The work went through a peer review" }, hint: "ei fagfellevurdering → fagfellevurderinga. -ing er hunkjønn. Et fag + en felle (likemann) + ei vurdering (u71). Lang, men helt vanlig i norsk akademia." },
      ],
    },
    {
      id: "no-u94l3",
      unit: 94,
      lesson: 3,
      title: "Maskiner og data",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what a machine is doing with your data — the rule it follows, the material it learned from, and who owns it.",
      items: [
        { id: "no-u94l3-enalgoritme", type: "vocab", front: "en algoritme", reading: "enalgoritme", meaning: "algorithm (a fixed rule a machine follows step by step)", example: { jp: "En algoritme velger hva du ser, og den er laget av folk med egne hensyn.", en: "An algorithm chooses what you see, and it is made by people with their own considerations." }, accept: ["a computational rule", "a step-by-step procedure"], drill: { jp: "Dette er en algoritme vi kjenner", en: "This is an algorithm we know" }, hint: "en algoritme → algoritmen, flertall algoritmer. Fra navnet al-Khwarizmi. En algoritme er ikke upartisk (u89) — den arver valgene til dem som lagde den." },
        { id: "no-u94l3-etdatasett", type: "vocab", front: "et datasett", reading: "etdatasett", meaning: "dataset (the body of material a system was built on)", example: { jp: "Et datasett med bare unge i seg gir svar som bare gjelder unge.", en: "A dataset with only young people in it gives answers that only apply to young people." }, accept: ["a body of data", "a training corpus"], drill: { jp: "Vi fikk et datasett i dag", en: "We got a dataset today" }, hint: "et datasett → datasettet, flertall datasett (likt). Data + et sett. En skjevhet (u91) i datasettet blir en skjevhet i svaret." },
        { id: "no-u94l3-kunstigintelligens", type: "vocab", front: "kunstig intelligens", reading: "kunstigintelligens", meaning: "artificial intelligence (machines doing what we call thinking)", example: { jp: "Kunstig intelligens er ikke et system, men mange helt ulike ting med samme navn.", en: "Artificial intelligence is not one system, but many completely different things with the same name." }, accept: ["machine intelligence", "AI"], drill: { jp: "De bruker kunstig intelligens her", en: "They use artificial intelligence here" }, hint: "Fast uttrykk, to ord, forkortes KI på norsk (ikke AI). Kunstig (u34) + intelligens. Står uten artikkel som massebegrep." },
        { id: "no-u94l3-enprototype", type: "vocab", front: "en prototype", reading: "enprototype", meaning: "prototype (the first working one, built to be thrown away)", example: { jp: "En prototype skal være stygg, for da klarer du å gjøre om på den.", en: "A prototype is meant to be ugly, because then you manage to change it." }, accept: ["a first working model", "a trial build"], drill: { jp: "De lagde en prototype i sommer", en: "They made a prototype in the summer" }, hint: "en prototype → prototypen, flertall prototyper. En modell (u90) er til å tenke med; en prototype er til å prøve." },
        { id: "no-u94l3-etpatent", type: "vocab", front: "et patent", reading: "etpatent", meaning: "patent (a right to stop others using your invention)", example: { jp: "Et patent gir deg ikke penger, det gir deg bare rett til å si nei.", en: "A patent does not give you money, it only gives you a right to say no." }, accept: ["an exclusive right to an invention", "a registered invention"], drill: { jp: "Selskapet har et patent på dette", en: "The company has a patent on this" }, hint: "et patent → patentet, flertall patenter. Et opphav (u89) er hvor noe kommer fra; et patent er en RETT (u32) du må søke om og betale for." },
        { id: "no-u94l3-enanvendelse", type: "vocab", front: "en anvendelse", reading: "enanvendelse", meaning: "application (a real use the thing gets put to)", example: { jp: "Den viktige anvendelsen var ikke den de tenkte på da de begynner.", en: "The important application is not the one they have in mind when they begin." }, accept: ["a practical use", "a field of use"], drill: { jp: "Her er en anvendelse vi ser", en: "Here is an application we can see" }, hint: "en anvendelse → anvendelsen, flertall anvendelser. -else er HANKJØNN (unit88 regel B3), aldri ei. Fra å anvende: å bruke noe til noe." },
      ],
    },
    {
      id: "no-u94l4",
      unit: 94,
      lesson: 4,
      title: "Fra laben til verden",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a discovery out of the lab — who builds it, what is genuinely new, and how it fits into a cycle that has to close.",
      items: [
        { id: "no-u94l4-eningenior", type: "vocab", front: "en ingeniør", reading: "eningenior", meaning: "engineer (the one who has to make it actually work)", example: { jp: "En forsker spør om det er sant, og en ingeniør spør om det går an å bygge.", en: "A researcher asks whether it is true, and an engineer asks whether it can be built." }, accept: ["a technical designer", "somebody who builds to spec"], drill: { jp: "Hun er en ingeniør hos oss", en: "She is an engineer with us" }, hint: "en ingeniør → ingeniøren, flertall ingeniører. Fransk opphav, uttalt inn-sjen-JØR. ø folder til o, så lesinga er eningenior." },
        { id: "no-u94l4-etlaboratorium", type: "vocab", front: "et laboratorium", reading: "etlaboratorium", meaning: "laboratory (the room where the conditions are controlled)", example: { jp: "I et laboratorium kan du holde alt likt bortsett fra én ting, og det er hele poenget.", en: "In a laboratory you can hold everything the same apart from one thing, and that is the whole point." }, accept: ["a controlled workroom", "a research facility"], drill: { jp: "De jobber i et laboratorium nå", en: "They work in a laboratory now" }, hint: "et laboratorium → laboratoriet, flertall laboratorier. I tale sier alle lab. Merk -ium som i museum (u35)." },
        { id: "no-u94l4-einyvinning", type: "vocab", front: "ei nyvinning", reading: "einyvinning", meaning: "innovation (a genuinely new thing, not just a better one)", example: { jp: "Det er ei nyvinning bare hvis noen faktisk tar det i bruk.", en: "It is an innovation only if somebody actually starts using it." }, accept: ["a novel advance", "something genuinely new"], drill: { jp: "Dette er ei nyvinning for bransjen", en: "This is an innovation for the sector" }, hint: "ei nyvinning → nyvinninga, flertall nyvinninger. -ing er hunkjønn (unit88 regel B3). Ny + å vinne. Ei endring (u59) skjer; ei nyvinning blir laget." },
        { id: "no-u94l4-etkretslop", type: "vocab", front: "et kretsløp", reading: "etkretslop", meaning: "cycle (a loop where the end feeds back to the start)", example: { jp: "Alt som blir laget må inn i et kretsløp, ellers blir det bare å ligge et sted.", en: "Everything that gets made has to go into a cycle, otherwise it just ends up lying somewhere." }, accept: ["a closed loop", "a circular flow"], drill: { jp: "Dette går inn i et kretsløp", en: "This goes into a cycle" }, hint: "et kretsløp → kretsløpet, flertall kretsløp (likt). En krets + et løp. Brukes om blod, om vann og om avfall. ø folder til o." },
        { id: "no-u94l4-enenergikilde", type: "vocab", front: "en energikilde", reading: "enenergikilde", meaning: "energy source (where the power actually comes from)", example: { jp: "Ingen energikilde er helt gratis, og den som sier noe annet selger noe.", en: "No energy source is completely free, and anybody who says otherwise is selling something." }, accept: ["a power source", "a source of energy"], drill: { jp: "Vi trenger en energikilde til", en: "We need one more energy source" }, hint: "en energikilde → energikilden, flertall energikilder. Energi + en kilde (u55). Bærekraftig (u65) sier noe om HVOR LENGE kilden holder." },
        { id: "no-u94l4-aetterligne", type: "vocab", front: "å etterligne", reading: "aetterligne", meaning: "to imitate (copy how something else works)", example: { jp: "De prøver å etterligne det naturen gjør, for den har hatt lengre tid på seg.", en: "They try to imitate what nature does, because it has had longer to work on it." }, accept: ["to model on", "to copy the workings of"], drill: { jp: "Det er vanskelig å etterligne dette", en: "It is hard to imitate this" }, hint: "å etterligne → etterligner, etterlignet. Etter + lik. Å etterligne er å kopiere MÅTEN, ikke tingen." },
      ],
    },
  ],
};
