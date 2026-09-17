// NO Unit 52 — Årsak og følge ("Cause and consequence") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Cause and consequence"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ THE A2 BAND ALREADY OWNS THE CONNECTIVE LAYER OF THIS SLOT. derfor, fordi,
// på grunn av, dermed, ettersom, slik at, for at, takket være, til tross for,
// en grunn, et resultat, ei løsning and en sammenheng are ALL taught before u52.
// So this unit does not teach "because" again. It teaches the NOUNS that name
// the two ends of a causal link (l1), the VERBS that make or block one (l2),
// the purpose and risk sitting behind it (l3), and what it looks like when the
// consequence is serious (l4).
//
// ⚠ `ei virkning` WAS CUT from l1 and replaced by `en effekt`. It is the textbook
// partner of `en årsak` — årsak og virkning — but the band already carries
// `å virke` (u54l1) and `en virkelighet` (u58l4) off the same stem, and three
// cards from one root is one too many (unit51.js B2). The pair is named in
// en effekt's hint instead, so the learner still meets it.
//
// FIRST FEMININE of the unit is `ei ulykke`… which is TAUGHT, not new: this unit
// introduces no feminine noun at all. Every new noun here is masculine (en årsak,
// en effekt, en konsekvens, en risiko, en trussel) or neuter (et formål). Nothing
// to mark, so no en-/ei- note is owed (unit51.js B4).
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): å føre til → "aforetil",
// å utløse → "autlose", å ødelegge → "aodelegge".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT52 = {
  id: "no-u52",
  lang: "no",
  title: "Årsak og følge",
  order: 52,
  stage: "b1",
  lessons: [
    // Lesson 1: the two ends of a causal link, and the three verbs that join them.
    // å føre til points forward and å skyldes points backward — they are the same
    // arrow read from each end, and that is the whole lesson.
    {
      id: "no-u52l1",
      unit: 52,
      lesson: 1,
      title: "Årsak og effekt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name both ends of a cause — the årsak that did it and the effekt it had — and say that one thing leads to another, causes it, or is due to it.",
      items: [
        { id: "no-u52l1-enarsak", type: "vocab", front: "en årsak", reading: "enarsak", meaning: "cause", example: { jp: "Legen leter etter en årsak til smerten.", en: "The doctor is looking for a cause of the pain." }, drill: { jp: "Vi kjenner ikke en årsak ennå", en: "We do not know a cause yet" }, accept: ["a cause", "a reason", "a root cause"], hint: "AWR-sak. Masculine: definite årsaken, plural årsaker. År, year, has nothing to do with it — the first part is an old word for origin. ⚠ En grunn is the reason you GIVE; en årsak is the cause that actually did it, whether anyone names it or not." },
        { id: "no-u52l1-eneffekt", type: "vocab", front: "en effekt", reading: "eneffekt", meaning: "effect", example: { jp: "Medisinen har en god effekt på pasienten.", en: "The medicine has a good effect on the patient." }, drill: { jp: "Den nye regelen har en effekt", en: "The new rule has an effect" }, accept: ["an effect", "an impact", "a result"], hint: "e-FEKT. Masculine: definite effekten, plural effekter. In formal writing the pair is årsak og virkning; in ordinary speech it is årsak og effekt, which is why this course teaches this one." },
        { id: "no-u52l1-enkonsekvens", type: "vocab", front: "en konsekvens", reading: "enkonsekvens", meaning: "consequence", example: { jp: "En konsekvens av valget er at alt blir dyrere.", en: "A consequence of the election is that everything gets more expensive." }, drill: { jp: "Han tenker på en konsekvens", en: "He is thinking about a consequence" }, accept: ["a consequence", "an outcome", "a repercussion"], hint: "kon-se-KVENS. Masculine: definite konsekvensen, plural konsekvenser. Heavier than en effekt — a konsekvens is what you have to live with afterwards, and å ta konsekvensen av noe is to act on it." },
        { id: "no-u52l1-aforarsake", type: "vocab", front: "å forårsake", reading: "aforarsake", meaning: "to cause", example: { jp: "Dårlig vær forårsaker mange ulykker om vinteren.", en: "Bad weather causes many accidents in the winter." }, drill: { jp: "Det er lett å forårsake ei ulykke", en: "It is easy to cause an accident" }, accept: ["cause", "to bring about", "bring about", "to give rise to"], hint: "for-AWR-sa-ke. For plus årsak — to put a cause under something. Present forårsaker, past forårsaket. Formal: in speech you are far likelier to hear fører til." },
        { id: "no-u52l1-aforetil", type: "vocab", front: "å føre til", reading: "aforetil", meaning: "to lead to", example: { jp: "Små feil fører til store problemer.", en: "Small mistakes lead to big problems." }, drill: { jp: "Små feil pleier å føre til problemer", en: "Small mistakes tend to lead to problems" }, accept: ["lead to", "to result in", "result in", "to cause"], hint: "FUR-re til. Å føre alone is to lead or to steer; føre til is what a cause does to an effect. Present fører til, past førte til. ⚠ Remember that a modal eats the å — Det KAN føre til problemer, with no å at all." },
        { id: "no-u52l1-askyldes", type: "vocab", front: "å skyldes", reading: "askyldes", meaning: "to be due to", example: { jp: "Feilen skyldes dårlig vær i Bergen.", en: "The error is due to bad weather in Bergen." }, drill: { jp: "Ulykka pleier å skyldes dårlig vær", en: "The accident tends to be due to bad weather" }, accept: ["be due to", "to be caused by", "is due to", "to be the fault of"], hint: "SHUEL-les. An s-verb: skyldes is BOTH the infinitive and the present — there is no *skyldeser. Å skylde is to owe, and å skyldes is to be owed to something, which is exactly what a cause is. It points BACKWARD where fører til points forward." },
      ],
    },
    // Lesson 2: the four verbs that start, stop, feed or cap a chain of events,
    // plus å oppstå — the one that says nobody started it at all.
    {
      id: "no-u52l2",
      unit: 52,
      lesson: 2,
      title: "Å utløse og å hindre",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what set something off and what held it back — trigger it, prevent it, contribute to it, watch a problem arise by itself, say what it depends on, and keep it within limits.",
      items: [
        { id: "no-u52l2-autlose", type: "vocab", front: "å utløse", reading: "autlose", meaning: "to trigger", example: { jp: "En liten feil utløser hele problemet.", en: "One small mistake triggers the whole problem." }, drill: { jp: "Det er lett å utløse et problem", en: "It is easy to trigger a problem" }, accept: ["trigger", "to set off", "set off", "to spark"], hint: "UT-lo-se. Ut plus løse, to loosen out — you let the thing go and it runs on by itself. Present utløser, past utløste." },
        { id: "no-u52l2-ahindre", type: "vocab", front: "å hindre", reading: "ahindre", meaning: "to prevent", example: { jp: "Regelen hindrer barna i å løpe her.", en: "The rule prevents the children from running here." }, drill: { jp: "Det er viktig å hindre ei ulykke", en: "It is important to prevent an accident" }, accept: ["prevent", "to stop", "to hinder", "to block"], hint: "HIN-dre. Present hindrer, past hindret. ⚠ The frame is å hindre noen I å gjøre noe — Norwegian uses i where English says \"from\"." },
        { id: "no-u52l2-abidra", type: "vocab", front: "å bidra", reading: "abidra", meaning: "to contribute", example: { jp: "Alle bidrar med litt penger til gaven.", en: "Everyone contributes a little money towards the present." }, drill: { jp: "Det er godt å bidra med noe", en: "It is good to contribute something" }, accept: ["contribute", "to chip in", "chip in", "to help out"], hint: "bi-DRA. Bi-, alongside, plus dra, to pull — you pull alongside the others. Present bidrar, past bidro. Et bidrag is what you actually give." },
        { id: "no-u52l2-aoppsta", type: "vocab", front: "å oppstå", reading: "aoppsta", meaning: "to arise", example: { jp: "Et problem oppstår når ingen tar ansvar.", en: "A problem arises when nobody takes responsibility." }, drill: { jp: "Det pleier å oppstå et problem her", en: "A problem tends to arise here" }, accept: ["arise", "to occur", "occur", "to come about"], hint: "OPP-staw. Opp plus stå, to stand up — the problem stands up out of nowhere. Present oppstår, past oppsto. Things oppstår on their own; people skaper them." },
        { id: "no-u52l2-aavhenge", type: "vocab", front: "å avhenge", reading: "aavhenge", meaning: "to depend", example: { jp: "Alt avhenger av været i morgen.", en: "Everything depends on the weather tomorrow." }, drill: { jp: "Det pleier å avhenge av været", en: "It tends to depend on the weather" }, accept: ["depend", "depend on", "to be dependent", "to hinge on"], hint: "AV-heng-e. Av plus henge, to hang off — the thing hangs off whatever it depends on. ⚠ Always with av: det avhenger AV deg, never *avhenger på. Present avhenger, past avhang." },
        { id: "no-u52l2-abegrense", type: "vocab", front: "å begrense", reading: "abegrense", meaning: "to limit", example: { jp: "Kommunen begrenser trafikken i byen.", en: "The municipality limits the traffic in the city." }, drill: { jp: "Vi prøver å begrense en skade", en: "We are trying to limit damage" }, accept: ["limit", "to restrict", "restrict", "to cap"], hint: "be-GREN-se. Be- plus grense, a border — you put a border around it. Present begrenser, past begrenset. Begrenset is the adjective: limited, in short supply." },
      ],
    },
    // Lesson 3: the purpose in front of a cause and the risk behind it, plus the
    // three connectives that carry a consequence in real speech. dessverre and
    // heldigvis sit next to each other because they are the same V2 move in
    // opposite moods, and the learner should feel the verb jump twice in a row.
    {
      id: "no-u52l3",
      unit: 52,
      lesson: 3,
      title: "Formål og følger",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the purpose behind an act and the risk in it — say what something entails, deliver good news and bad, and carry on with what follows in that case.",
      items: [
        { id: "no-u52l3-etformal", type: "vocab", front: "et formål", reading: "etformal", meaning: "purpose", example: { jp: "Et formål med kurset er å lære norsk.", en: "One purpose of the course is to learn Norwegian." }, drill: { jp: "Dette er et formål vi deler", en: "This is a purpose we share" }, accept: ["an aim", "an objective", "a purpose", "a goal"], hint: "FOR-mawl. Neuter: definite formålet, plural formål — no ending in the plural, like et år. For plus mål, the goal set BEFORE you start. En hensikt is what you personally intend; et formål is what the thing is FOR." },
        { id: "no-u52l3-ainnebaere", type: "vocab", front: "å innebære", reading: "ainnebaere", meaning: "to entail", example: { jp: "Kurset innebærer mye arbeid og lange dager.", en: "The course entails a lot of work and long days." }, drill: { jp: "Det pleier å innebære mye arbeid", en: "It tends to entail a lot of work" }, accept: ["entail", "to involve", "involve", "to mean"], hint: "IN-ne-bær-e. Inne plus bære, to carry inside — the thing carries this along whether you wanted it or not. Present innebærer, past innebar." },
        { id: "no-u52l3-heldigvis", type: "vocab", front: "heldigvis", reading: "heldigvis", meaning: "fortunately", example: { jp: "Heldigvis var været fint hele uka.", en: "Fortunately the weather was fine all week." }, drill: { jp: "Heldigvis er butikken åpen nå", en: "Fortunately the shop is open now" }, accept: ["luckily", "thankfully", "happily"], hint: "HEL-di-vis. Heldig, lucky, plus -vis. The exact mirror of dessverre, and it makes the same V2 jump: Heldigvis VAR været fint." },
        { id: "no-u52l3-isafall", type: "vocab", front: "i så fall", reading: "isafall", meaning: "in that case", example: { jp: "Kanskje det regner i morgen, og i så fall blir vi inne.", en: "Maybe it will rain tomorrow, and in that case we will stay in." }, drill: { jp: "I så fall må vi vente litt", en: "In that case we have to wait a little" }, accept: ["in which case", "if so", "then"], hint: "i SAW fal. Three words, one connective — literally \"in such case\". It opens the clause, so the verb follows straight after it: I så fall MÅ vi vente." },
        { id: "no-u52l3-enrisiko", type: "vocab", front: "en risiko", reading: "enrisiko", meaning: "risk", example: { jp: "Det er alltid en risiko når du kjører fort.", en: "There is always a risk when you drive fast." }, drill: { jp: "Her er det en risiko", en: "Here there is a risk" }, accept: ["a risk", "a hazard", "a danger", "a chance of harm"], hint: "RI-si-ko. Masculine: definite risikoen, plural risikoer. Å ta en risiko is to take a chance; å risikere noe is to put it on the line." },
      ],
    },
    // Lesson 4: what a consequence looks like when it is bad. The slot's abstract
    // half is spent by l1–l3, so l4 takes the concrete end — the storm, the damage,
    // the rescue — which is also where the learner will first NEED these words.
    {
      id: "no-u52l4",
      unit: 52,
      lesson: 4,
      title: "Alvorlige følger",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about it going badly wrong — call the situation serious, name a threat, say what got wrecked, who was rescued, who survived, and what was pure chance.",
      items: [
        { id: "no-u52l4-alvorlig", type: "vocab", front: "alvorlig", reading: "alvorlig", meaning: "serious", example: { jp: "Ulykka var alvorlig, og legen kom straks.", en: "The accident was serious, and the doctor came at once." }, drill: { jp: "Dette er et alvorlig problem", en: "This is a serious problem" }, accept: ["grave", "severe", "earnest", "bad"], hint: "al-VOR-li — silent g. Neuter alvorlig, plural alvorlige. It runs all the way from a serious illness to a serious face: alvor is the opposite of spøk, a joke." },
        { id: "no-u52l4-entrussel", type: "vocab", front: "en trussel", reading: "entrussel", meaning: "threat", example: { jp: "En storm er en trussel når du er på sjøen.", en: "A storm is a threat when you are out at sea." }, drill: { jp: "En storm er en trussel her", en: "A storm is a threat here" }, accept: ["a threat", "a menace", "a danger"], hint: "TRUS-sel. Masculine: definite trusselen, plural trusler — ⚠ the second -s- disappears in the plural. Å true is the verb that goes with it." },
        { id: "no-u52l4-aodelegge", type: "vocab", front: "å ødelegge", reading: "aodelegge", meaning: "to destroy", example: { jp: "Stormen ødela taket på huset.", en: "The storm destroyed the roof of the house." }, drill: { jp: "Det er lett å ødelegge en telefon", en: "It is easy to destroy a phone" }, accept: ["destroy", "to ruin", "ruin", "to break", "to wreck"], hint: "UR-de-leg-ge. Øde, waste or desolate, plus legge, to lay: to lay waste. Present ødelegger, past ødela, and the perfect is har ødelagt. Covers a broken phone and a ruined evening equally." },
        { id: "no-u52l4-aredde", type: "vocab", front: "å redde", reading: "aredde", meaning: "to rescue", example: { jp: "Legen reddet livet til en pasient i natt.", en: "The doctor saved a patient's life last night." }, drill: { jp: "Det er viktig å redde et barn", en: "It is important to rescue a child" }, accept: ["rescue", "to save", "save"], hint: "RED-de. Present redder, past reddet. Å redde is to pull someone out of danger; å spare is to save money. Norwegian never swaps the two." },
        { id: "no-u52l4-aoverleve", type: "vocab", front: "å overleve", reading: "aoverleve", meaning: "to survive", example: { jp: "Alle i båten overlevde stormen.", en: "Everyone in the boat survived the storm." }, drill: { jp: "Det er mulig å overleve ei ulykke", en: "It is possible to survive an accident" }, accept: ["survive", "to come through", "to live through", "pull through"], hint: "O-ver-le-ve. Over plus leve, to live over — you outlast the thing. Present overlever, past overlevde. Also used lightly: jeg overlever, I'll live." },
        { id: "no-u52l4-tilfeldig", type: "vocab", front: "tilfeldig", reading: "tilfeldig", meaning: "random", example: { jp: "Det var helt tilfeldig at han kom i dag.", en: "It was completely by chance that he came today." }, drill: { jp: "Det var et tilfeldig valg", en: "It was a random choice" }, accept: ["coincidental", "by chance", "accidental", "chance"], hint: "til-FEL-di — silent g. Straight out of et tilfelle, a case: what merely fell out that way. Neuter tilfeldig, plural tilfeldige. En tilfeldighet is a coincidence." },
      ],
    },
  ],
};
