// NO Unit 94 — Vitenskap og teknologi (slot: science-tech) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// Blocked before authoring: `en forsker` u34, `en teori` u34, `å utvikle` u24,
// `et stoff` u42, `en vitenskap` u34, `forskning` u74, `en analyse` u74,
// `et verktøy` u75, `kunstig` u75, `digital` u75, `bærekraftig` u65,
// `en undersøkelse` u74. u34 and u75 own the words for research and for the
// machine, so this unit is the METHOD (l1), the MATTER (l2), the INVENTION (l3)
// and what the machines have started doing on their own (l4).
//
// `å oppfinne` was cut as a transparent derivation of `en oppfinnelse` (l3) and
// `ei prøving` because `en prøve` collides with `å prøve` (u15); `et framskritt`
// and `å teste` took their places.
//
//   FREE: Japan
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
      title: "Å forske",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a piece of Norwegian research — the guess you started from, the experiment, the formula and the test that had to be passed.",
      items: [
        { id: "no-u94l1-enhypotese", type: "vocab", front: "en hypotese", reading: "enhypotese", meaning: "hypothesis", example: { jp: "Hypotesen var god, men ingen av tallene passet med den.", en: "The hypothesis was good, but none of the figures fitted it." }, accept: ["a conjecture", "a working assumption"], drill: { jp: "De hadde en hypotese ingen trodde på", en: "They had a hypothesis nobody believed in" }, hint: "en hypotese → hypotesen, flertall hypoteser. Trykket på nest siste stavelse: hypo-TE-se. En teori (u34) er prøvd ut; en hypotese er ikke det ennå." },
        { id: "no-u94l1-eteksperiment", type: "vocab", front: "et eksperiment", reading: "eteksperiment", meaning: "experiment (scientific)", example: { jp: "Eksperimentet virket bare én gang, og det holder ikke.", en: "The experiment worked only once, and that is not enough." }, accept: ["a trial", "a test (scientific)", "experiment"], drill: { jp: "De gjorde et eksperiment på skolen", en: "They did an experiment at school" }, hint: "et eksperiment → eksperimentet, flertall eksperimenter. Trykket på siste stavelse: eksperi-MENT. Også i overført tyding: et sosialt eksperiment." },
        { id: "no-u94l1-aanalysere", type: "vocab", front: "å analysere", reading: "aanalysere", meaning: "to analyse", example: { jp: "De analyserte alt sammen i tre år, og fant ingenting nytt.", en: "They analysed all of it for three years, and found nothing new." }, accept: ["to analyze", "to examine"], drill: { jp: "Det tar tid å analysere slike tall", en: "It takes time to analyse figures like these" }, hint: "å analysere → analyserer, analyserte. En analyse (u74) er resultatet. Å undersøke (u60) er å se etter; å analysere er å dele opp og forklare." },
        { id: "no-u94l1-etlaboratorium", type: "vocab", front: "et laboratorium", reading: "etlaboratorium", meaning: "laboratory", example: { jp: "Laboratoriet er nytt, men alt inni det er gammelt.", en: "The laboratory is new, but everything inside it is old." }, accept: ["a lab"], drill: { jp: "De bygde et laboratorium ved sjøen", en: "They built a laboratory by the sea" }, hint: "et laboratorium → laboratoriet, flertall laboratorier. Latinsk flertall, som et kriterium (u90). I dagligtale sier alle bare lab." },
        { id: "no-u94l1-enformel", type: "vocab", front: "en formel", reading: "enformel", meaning: "formula", example: { jp: "Formelen er kort, men den tok dem ti år å finne.", en: "The formula is short, but it took them ten years to find." }, accept: ["an equation"], drill: { jp: "Han skrev en formel på tavla", en: "He wrote a formula on the board" }, hint: "en formel → formelen, flertall formler. Merk at flertallet mister en e, som en regel (u32) → regler. Ikke det samme som formell (u72)." },
        { id: "no-u94l1-ateste", type: "vocab", front: "å teste", reading: "ateste", meaning: "to test", example: { jp: "De testet det på ti personer, og det er altfor få.", en: "They tested it on ten people, and that is far too few." }, accept: ["to try out", "to trial"], drill: { jp: "Det er lurt å teste alt først", en: "It is wise to test everything first" }, hint: "å teste → tester, testet. En test er resultatet. Å prøve (u15) er å forsøke; å teste er å måle (u34) om noe virker." },
      ],
    },
    {
      id: "no-u94l2",
      unit: 94,
      lesson: 2,
      title: "Stoff og liv",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what things are made of in Norwegian — cells, genes, molecules, atoms, mixtures and the radiation that goes through them.",
      items: [
        { id: "no-u94l2-eicelle", type: "vocab", front: "ei celle", reading: "eicelle", meaning: "cell (biological)", example: { jp: "Ei celle deler seg hele tida, og det er derfor kroppen din virker.", en: "A cell divides all the time, and that is why your body works." }, accept: ["a biological cell"], drill: { jp: "Her er det ei celle til", en: "Here there is one more cell" }, hint: "ei celle → cella, flertall celler. Du vil også se cellen i trykk, og begge er tillatt i bokmål; denne kursen skriver ei/-a. Også rommet i et fengsel." },
        { id: "no-u94l2-etgen", type: "vocab", front: "et gen", reading: "etgen", meaning: "gene", example: { jp: "Et gen bestemmer mye, men langt fra alt.", en: "A gene determines a lot, but far from everything." }, accept: ["a gene"], drill: { jp: "De fant et gen ingen kjente", en: "They found a gene nobody knew" }, hint: "et gen → genet, flertall gener. Uttales med g som i gi (u1), ikke som j. Genetisk er adjektivet." },
        { id: "no-u94l2-etmolekyl", type: "vocab", front: "et molekyl", reading: "etmolekyl", meaning: "molecule", example: { jp: "Et molekyl er lite, men det er likevel bygd av flere deler.", en: "A molecule is small, but it is still built of several parts." }, accept: ["a molecule"], drill: { jp: "Vann er et molekyl med tre deler", en: "Water is a molecule with three parts" }, hint: "et molekyl → molekylet, flertall molekyler. Trykket på siste stavelse: mole-KYL. Flere atom som henger sammen." },
        { id: "no-u94l2-etatom", type: "vocab", front: "et atom", reading: "etatom", meaning: "atom", example: { jp: "Alt du ser på, er laget av atom, også lufta mellom oss.", en: "Everything you look at is made of atoms, including the air between us." }, accept: ["an atom"], drill: { jp: "Dette er et atom du kjenner", en: "This is an atom you know" }, hint: "et atom → atomet, flertall atom eller atomer. Trykket på siste stavelse: a-TOM. Ikke det samme som et molekyl, som er flere atom sammen." },
        { id: "no-u94l2-eiblanding", type: "vocab", front: "ei blanding", reading: "eiblanding", meaning: "mixture", example: { jp: "Det er ei blanding av flere stoff, og ingen vet hva som virker.", en: "It is a mixture of several substances, and nobody knows what works." }, accept: ["a mix", "a blend"], drill: { jp: "Dette er ei blanding av alt", en: "This is a mixture of everything" }, hint: "ei blanding → blandinga. -ing-ord er hunkjønn; blandingen er vanlig i trykk. Fra å blande (u41). Også om folk og meninger: ei blanding av begge deler." },
        { id: "no-u94l2-eistraling", type: "vocab", front: "ei stråling", reading: "eistraling", meaning: "radiation", example: { jp: "Strålinga er svak her, men de måler den likevel hver dag.", en: "The radiation is weak here, but they measure it every day anyway." }, accept: ["radiance", "irradiation"], drill: { jp: "Her er det ei stråling de måler", en: "Here there is a radiation they measure" }, hint: "ei stråling → strålinga. -ing-ord er hunkjønn; strålingen er vanlig i trykk. Fra å stråle. Både sola og en mobil stråler, men slett ikke like mye." },
      ],
    },
    {
      id: "no-u94l3",
      unit: 94,
      lesson: 3,
      title: "Oppfinnelser",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about something new being made in Norwegian — the invention, the patent, the step forward and where the energy comes from.",
      items: [
        { id: "no-u94l3-enoppfinnelse", type: "vocab", front: "en oppfinnelse", reading: "enoppfinnelse", meaning: "invention", example: { jp: "Oppfinnelsen var enkel, og det er nettopp derfor den ble brukt.", en: "The invention was simple, and that is exactly why it got used." }, accept: ["a device (newly invented)"], drill: { jp: "Dette er en oppfinnelse ingen ventet", en: "This is an invention nobody expected" }, hint: "en oppfinnelse → oppfinnelsen, flertall oppfinnelser. -else-ord er hankjønn (regel 1), aldri ei. Opp + å finne (u7). Personen er en oppfinner." },
        { id: "no-u94l3-etframskritt", type: "vocab", front: "et framskritt", reading: "etframskritt", meaning: "advance (step forward)", example: { jp: "Det er et framskritt, men veien videre er fremdeles lang.", en: "It is an advance, but the road ahead is still long." }, accept: ["progress", "a breakthrough"], drill: { jp: "Dette er et framskritt for alle", en: "This is an advance for everybody" }, hint: "et framskritt → framskrittet, flertall framskritt. Fram + et skritt. Denne kursen skriver fram-, ikke frem-. En framgang (u59) er å komme videre; et framskritt er at noe er blitt bedre." },
        { id: "no-u94l3-etpatent", type: "vocab", front: "et patent", reading: "etpatent", meaning: "patent", example: { jp: "Patentet gjelder i mange år, og så kan alle bruke det.", en: "The patent applies for many years, and then everybody can use it." }, accept: ["a patent"], drill: { jp: "De tok et patent på dette", en: "They took out a patent on this" }, hint: "et patent → patentet, flertall patenter. Trykket på siste stavelse: pa-TENT. En enerett til å bruke en oppfinnelse." },
        { id: "no-u94l3-einyvinning", type: "vocab", front: "ei nyvinning", reading: "einyvinning", meaning: "innovation", example: { jp: "Det ble kalt ei nyvinning, men det var kjent fra før i Japan.", en: "It was called an innovation, but it was already known in Japan." }, accept: ["a novelty", "a new development"], drill: { jp: "Dette er ei nyvinning i faget", en: "This is an innovation in the field" }, hint: "ei nyvinning → nyvinninga. -ing-ord er hunkjønn; nyvinningen er vanlig i trykk. Ny + å vinne (u44). Mer enn en oppfinnelse: noe som virkelig er tatt i bruk." },
        { id: "no-u94l3-eiframstilling", type: "vocab", front: "ei framstilling", reading: "eiframstilling", meaning: "production (manufacture)", example: { jp: "Framstillinga er dyr, og derfor blir det aldri noe av.", en: "The production is expensive, and that is why it never comes to anything." }, accept: ["manufacture", "an account (written)"], drill: { jp: "Dette er ei framstilling som koster", en: "This is a production that costs" }, hint: "ei framstilling → framstillinga. -ing-ord er hunkjønn; framstillingen er vanlig i trykk. ⚠ To liv: å lage noe (framstilling av stål), og å gjengi noe (ei framstilling av krigen)." },
        { id: "no-u94l3-enenergikilde", type: "vocab", front: "en energikilde", reading: "enenergikilde", meaning: "energy source", example: { jp: "Vann er en energikilde Norge har mye av.", en: "Water is an energy source Norway has a lot of." }, accept: ["a source of power"], drill: { jp: "Sola er en energikilde vi glemmer", en: "The sun is an energy source we forget" }, hint: "en energikilde → energikilden, flertall energikilder. Energi (u34) + en kilde (u54). Nesten all norsk strøm (u80) kommer fra vann." },
      ],
    },
    {
      id: "no-u94l4",
      unit: 94,
      lesson: 4,
      title: "Maskiner som lærer",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the machine side of Norwegian technology — the algorithm, the learning, the sensor, and whether the thing keeps running.",
      items: [
        { id: "no-u94l4-enalgoritme", type: "vocab", front: "en algoritme", reading: "enalgoritme", meaning: "algorithm", example: { jp: "Algoritmen velger hva du får se, men ingen får vite hvordan.", en: "The algorithm chooses what you get to see, but nobody gets to know how." }, accept: ["an algorithm"], drill: { jp: "Her er det en algoritme som velger", en: "Here there is an algorithm that chooses" }, hint: "en algoritme → algoritmen, flertall algoritmer. Trykket på nest siste stavelse: algo-RIT-me. En oppskrift maskinen følger, steg for steg." },
        { id: "no-u94l4-eimaskinlaering", type: "vocab", front: "ei maskinlæring", reading: "eimaskinlaering", meaning: "machine learning", example: { jp: "Maskinlæringa er god på mønster, men den forstår ingenting.", en: "Machine learning is good at patterns, but it understands nothing." }, accept: ["machine-learning"], drill: { jp: "Alt dette bygger på ei maskinlæring", en: "All of this is built on machine learning" }, hint: "ei maskinlæring → maskinlæringa. -ing-ord er hunkjønn; maskinlæringen er vanlig i trykk. Ei maskin + å lære (u1). Kunstig (u75) intelligens er det større ordet." },
        { id: "no-u94l4-ensensor", type: "vocab", front: "en sensor", reading: "ensensor", meaning: "sensor", example: { jp: "Sensoren merker at du kommer, og døra åpner seg selv.", en: "The sensor notices you coming, and the door opens by itself." }, accept: ["a detector"], drill: { jp: "De satte inn en sensor i taket", en: "They put a sensor in the ceiling" }, hint: "en sensor → sensoren, flertall sensorer. ⚠ Det andre livet er en person: en sensor er også den som retter eksamen (u24)." },
        { id: "no-u94l4-etkretskort", type: "vocab", front: "et kretskort", reading: "etkretskort", meaning: "circuit board", example: { jp: "Et kretskort tåler ikke vann, og det var nettopp det som skjedde.", en: "A circuit board cannot take water, and that is exactly what happened." }, accept: ["a printed circuit board", "a PCB"], drill: { jp: "Her er det et kretskort som er ødelagt", en: "Here there is a circuit board that is broken" }, hint: "et kretskort → kretskortet, flertall kretskort. En krets + et kort. Den grønne plata inni alt elektronisk." },
        { id: "no-u94l4-eibrikke", type: "vocab", front: "ei brikke", reading: "eibrikke", meaning: "chip (microchip)", example: { jp: "Hele verden ventet på ei brikke som ble laget ett sted.", en: "The whole world was waiting for a chip that was made in one place." }, accept: ["a microchip", "a piece (in a game)"], drill: { jp: "Her mangler det ei brikke", en: "Here a chip is missing" }, hint: "ei brikke → brikka, flertall brikker. Du vil også se brikken i trykk. ⚠ Tre liv: i en datamaskin, i et spill (u19), og under et glass på bordet." },
        { id: "no-u94l4-endriftssikkerhet", type: "vocab", front: "en driftssikkerhet", reading: "endriftssikkerhet", meaning: "reliability (in operation)", example: { jp: "Driftssikkerheten er god, men den koster mer enn maskinen selv.", en: "The reliability is good, but it costs more than the machine itself." }, accept: ["operational reliability", "dependability"], drill: { jp: "Vi trenger en driftssikkerhet vi kan stole på", en: "We need a reliability we can rely on" }, hint: "en driftssikkerhet → driftssikkerheten. -het-ord er hankjønn (regel 1), aldri ei. Ei drift + sikkerhet (u87): at det virker i morgen også." },
      ],
    },
  ],
};
