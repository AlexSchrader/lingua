// NO Unit 67 — Helse og velvære ("Health and wellbeing") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Health and wellbeing"; retitled per CLAUDE.md → "No front
// language". Conventions are unit1.js §1–§9. Bokmål.
//
// ⚠ HEALTH IS ALREADY TAUGHT TWICE AND THIS UNIT STAYS OUT OF BOTH.
// u11 "Kropp og helse" owns the body: kropp, hode, hånd, fot, øye, øre, ansikt,
// munn, nese, hår, arm, bein, syk, frisk, vond, lege, feber, tann, trøtt, helse.
// u25 "Helse og sykdom" owns the A2 clinic: smerte, hoste, sår, blø,
// forkjølelse, allergi, hjerte, puste, søvn, skade, blodtrykk, slite, pasient,
// behandling, resept, medisin, pille, operasjon, bedring, kur, sykehjem, sunn.
// What is left, and what a B1 learner actually needs, is the language of a
// DIAGNOSIS (symptom, bivirkning, kronisk), of INFECTION (smitte, vaksine,
// epidemi), of LIFESTYLE (livsstil, kosthold, døgnrytme) and of MENTAL health
// (psykisk, angst, selvtillit) — none of which the A2 units touch.
//
// ⚠ NO LEXEME PAIRS. Deliberately NOT authored, because each would be a second
// mastery track on a word the corpus already has, or on its own neighbour:
//   å behandle (ei behandling u25) · å operere (en operasjon u25) ·
//   ei trening (å trene u21) · ei bekymring (bekymret u22, and å bekymre seg is
//   already in l4) · ei smitte (å smitte, same lesson) · å vaksinere (en
//   vaksine, same lesson) · å bli frisk (frisk u11 + å bli u13, a collocation
//   rather than a word). RUNBOOK §4: compare LEXEMES, not strings.
//
// GENDER: en betennelse — ⚠ -else is MASCULINE. ei bivirkning, ei legevakt are
// feminine. en angst, en depresjon, en balanse are masculine.
// ⚠ `hygiene`, `mosjon`, `selvtillit`, `angst` and `stress` are MASS nouns and are
// taught bare per unit1.js §1b — the indefinite singular is not idiomatic for any
// of them (å ha angst, never å ha en angst). mosjon and selvtillit were corrected
// after the content gate named them; angst and stress after the Truth Layer
// pointed out that a gate names INSTANCES and deriving the CLASS is the author's
// job — their own hints had already conceded "normally singular", which is the
// tell. All 132 articled fronts in u63–u75 were re-tested; see the note in
// unit65.js for the four that survive the test and why.
// FIRST FEMININE is `ei bivirkning` (l1) and carries the en-/ei- note §1 wants.
//
// SCOPE: frozen base u1–u50 plus this unit's earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT67 = {
  id: "no-u67",
  lang: "no",
  title: "Helse og velvære",
  order: 67,
  stage: "b1",
  lessons: [
    // Lesson 1: the appointment — what you report, and what you are told.
    {
      id: "no-u67l1",
      unit: 67,
      lesson: 1,
      title: "Legen og pasienten",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe symptoms to a doctor and understand the diagnosis you are given.",
      items: [
        { id: "no-u67l1-symptom", type: "vocab", front: "et symptom", reading: "etsymptom", meaning: "a symptom", example: { jp: "Feber er et symptom mange kjenner igjen.", en: "A fever is a symptom many people recognize." }, accept: ["symptom", "sign"], drill: { jp: "Feber er et symptom vi kjenner", en: "A fever is a symptom we know" }, hint: "Neuter: symptomet, flere symptomer. Said symp-TOM, with the stress at the end." },
        { id: "no-u67l1-diagnose", type: "vocab", front: "en diagnose", reading: "endiagnose", meaning: "a diagnosis", example: { jp: "Legen ga henne en diagnose etter to uker.", en: "The doctor gave her a diagnosis after two weeks." }, accept: ["diagnosis"], drill: { jp: "Legen ga henne en diagnose", en: "The doctor gave her a diagnosis" }, hint: "Masculine: diagnosen. Norwegian says å stille en diagnose — to \"set\" one, not to make one." },
        { id: "no-u67l1-bivirkning", type: "vocab", front: "ei bivirkning", reading: "eibivirkning", meaning: "a side effect", example: { jp: "Medisinen er god, men den har ei bivirkning.", en: "The medicine is good, but it has a side effect." }, accept: ["side effect", "adverse effect"], drill: { jp: "Medisinen har ei bivirkning vi kjenner", en: "The medicine has a side effect we know" }, hint: "bi- (\"beside\") + ei virkning, an effect. -ning → feminine: bivirkninga. Print also writes en/-en; this course marks ei so the definite -a stays predictable." },
        { id: "no-u67l1-betennelse", type: "vocab", front: "en betennelse", reading: "enbetennelse", meaning: "an inflammation", example: { jp: "Han hadde en betennelse i foten og kunne ikke gå.", en: "He had an inflammation in his foot and could not walk." }, accept: ["inflammation", "infection"], drill: { jp: "Han hadde en betennelse i foten", en: "He had an inflammation in his foot" }, hint: "From å tenne, to light — literally something that has caught fire inside. ⚠ -else nouns are MASCULINE: betennelsen. Never ei." },
        { id: "no-u67l1-kronisk", type: "vocab", front: "kronisk", reading: "kronisk", meaning: "chronic", example: { jp: "Sykdommen er kronisk, men hun har det godt.", en: "The illness is chronic, but she is doing well." }, accept: ["long-term", "ongoing"], drill: { jp: "Sykdommen er kronisk men ikke vond", en: "The illness is chronic but not painful" }, hint: "An -isk adjective, so NO -t in the neuter: et kronisk problem. The opposite is akutt." },
        { id: "no-u67l1-legevakt", type: "vocab", front: "ei legevakt", reading: "eilegevakt", meaning: "an emergency clinic", example: { jp: "Vi kjørte til legevakta om natta.", en: "We drove to the emergency clinic during the night." }, accept: ["emergency clinic", "out-of-hours clinic", "urgent care"], drill: { jp: "Vi kjørte til ei legevakt i byen", en: "We drove to an emergency clinic in town" }, hint: "en lege (u11) + ei vakt, a watch. Feminine: legevakta — and legevakta is what everyone calls it, in the definite. It is where you go when the fastlege is closed." },
      ],
    },
    // Lesson 2: infection — the half of health vocabulary that is about other
    // people rather than about you.
    {
      id: "no-u67l2",
      unit: 67,
      lesson: 2,
      title: "Smitte og vaksine",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about an illness going around and about being vaccinated against it.",
      items: [
        { id: "no-u67l2-sykdom", type: "vocab", front: "en sykdom", reading: "ensykdom", meaning: "a disease", example: { jp: "Sykdommen kom til byen om vinteren.", en: "The disease came to the town in the winter." }, accept: ["disease", "illness", "sickness"], drill: { jp: "Dette er en sykdom vi kjenner godt", en: "This is a disease we know well" }, hint: "syk (u11) + -dom, the same suffix as en barndom (u63). Masculine: sykdommen, and the m doubles in the definite." },
        { id: "no-u67l2-smitte", type: "vocab", front: "å smitte", reading: "asmitte", meaning: "to infect", example: { jp: "Barn smitter hverandre fort på skolen.", en: "Children infect each other quickly at school." }, accept: ["infect", "to be contagious", "to spread"], drill: { jp: "Det er lett å smitte andre", en: "It is easy to infect others" }, hint: "smitter, smittet. Also used with no object at all: sykdommen smitter — the illness is catching." },
        { id: "no-u67l2-virus", type: "vocab", front: "et virus", reading: "etvirus", meaning: "a virus", example: { jp: "Et virus kan smitte mange på ei uke.", en: "A virus can infect many people in a week." }, accept: ["virus", "bug"], drill: { jp: "Et virus kan smitte mange barn", en: "A virus can infect many children" }, hint: "Neuter and unchanged in the plural: et virus, flere virus, viruset. The computer kind has the same name in Norwegian." },
        { id: "no-u67l2-vaksine", type: "vocab", front: "en vaksine", reading: "envaksine", meaning: "a vaccine", example: { jp: "Mange fikk en vaksine i høst.", en: "Many people got a vaccine in the autumn." }, accept: ["vaccine", "jab", "shot"], drill: { jp: "Mange fikk en vaksine i høst", en: "Many people got a vaccine in the autumn" }, hint: "Masculine: vaksinen. The verb å vaksinere exists, but it is not taught here — one word, one mastery track." },
        { id: "no-u67l2-epidemi", type: "vocab", front: "en epidemi", reading: "enepidemi", meaning: "an epidemic", example: { jp: "Epidemien varte i to vintre.", en: "The epidemic lasted two winters." }, accept: ["epidemic", "outbreak"], drill: { jp: "Dette ble en epidemi i Europa", en: "This became an epidemic in Europe" }, hint: "Masculine: epidemien. Stress at the end: epide-MI, like melodi (u64) and galleri." },
        { id: "no-u67l2-hygiene", type: "vocab", front: "hygiene", reading: "hygiene", meaning: "hygiene", example: { jp: "God hygiene på kjøkkenet stopper mye smitte.", en: "Good hygiene in the kitchen stops a lot of infection." }, accept: ["cleanliness", "sanitation"], drill: { jp: "God hygiene stopper mye smitte", en: "Good hygiene stops a lot of infection" }, hint: "A mass noun, so no article on the card (unit1 §1b): masculine, definite hygienen. Said hy-gi-E-ne, four syllables." },
      ],
    },
    // Lesson 3: the everyday half of health — what you eat, how you move, when
    // you sleep.
    {
      id: "no-u67l3",
      unit: 67,
      lesson: 3,
      title: "Livsstil",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe your own habits — food, exercise, sleep — and say what keeps you well.",
      items: [
        { id: "no-u67l3-livsstil", type: "vocab", front: "en livsstil", reading: "enlivsstil", meaning: "a lifestyle", example: { jp: "En sunn livsstil gir mer overskudd.", en: "A healthy lifestyle gives you more energy." }, accept: ["lifestyle", "way of life"], drill: { jp: "Han har en livsstil som er sunn", en: "He has a lifestyle that is healthy" }, hint: "et liv (u34) + en stil, with the -s- that glues compounds together. Masculine: livsstilen — and note the three s's in a row are correct." },
        { id: "no-u67l3-kosthold", type: "vocab", front: "et kosthold", reading: "etkosthold", meaning: "a diet", example: { jp: "Kostholdet hans er sunt, men kjedelig.", en: "His diet is healthy, but boring." }, accept: ["diet", "eating habits"], drill: { jp: "Han har et kosthold som er sunt", en: "He has a diet that is healthy" }, hint: "kost (food) + hold. Neuter: kostholdet. It means WHAT you eat as a habit — not a slimming diet, which is en slankekur." },
        { id: "no-u67l3-mosjon", type: "vocab", front: "mosjon", reading: "mosjon", meaning: "gentle exercise", example: { jp: "En liten tur hver dag er nok mosjon for de fleste.", en: "A short walk every day is enough exercise for most people." }, accept: ["exercise", "physical activity", "light exercise"], drill: { jp: "En tur er god mosjon for alle", en: "A walk is good exercise for everyone" }, hint: "⚠ A MASS noun, so no article on the card (unit1 §1b): masculine, definite mosjonen. Gentler than å trene (u21) — mosjon is the walk, trening is the gym." },
        { id: "no-u67l3-dognrytme", type: "vocab", front: "en døgnrytme", reading: "endognrytme", meaning: "a sleep rhythm", example: { jp: "Døgnrytmen blir dårlig når det er lyst om natta.", en: "Your sleep rhythm goes bad when it is light at night." }, accept: ["circadian rhythm", "daily rhythm", "body clock"], drill: { jp: "Han har en døgnrytme som er dårlig", en: "He has a sleep rhythm that is bad" }, hint: "et døgn (u28, the 24-hour day) + en rytme (u64). Masculine: døgnrytmen. A real everyday word this far north, where summer nights never get dark." },
        { id: "no-u67l3-balanse", type: "vocab", front: "en balanse", reading: "enbalanse", meaning: "a balance", example: { jp: "Det er en balanse i livet hans nå.", en: "There is a balance in his life now." }, accept: ["balance", "equilibrium"], drill: { jp: "Det er en balanse i livet hans", en: "There is a balance in his life" }, hint: "Masculine: balansen. Both the physical kind and the balanse mellom arbeid og fritid everyone says they are looking for." },
        { id: "no-u67l3-trives", type: "vocab", front: "å trives", reading: "atrives", meaning: "to thrive", example: { jp: "Hun trives godt i den nye leiligheten.", en: "She is happy in the new flat." }, accept: ["thrive", "to be happy", "to feel at home", "to enjoy"], drill: { jp: "Det er godt å trives på skolen", en: "It is good to be happy at school" }, hint: "One of the few verbs that ENDS in -s and has no form without it: trives, trivdes. Norwegians ask trives du her? where English asks are you happy here." },
      ],
    },
    // Lesson 4: mental health, said plainly. u22 gave the feelings; this gives the
    // words a Norwegian uses when the feeling has lasted.
    {
      id: "no-u67l4",
      unit: 67,
      lesson: 4,
      title: "Psykisk helse",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about stress and mental health without reaching for English.",
      items: [
        { id: "no-u67l4-psykisk", type: "vocab", front: "psykisk", reading: "psykisk", meaning: "mental", example: { jp: "Psykisk helse er like viktig som resten.", en: "Mental health is just as important as the rest." }, accept: ["psychological", "mental (health)"], drill: { jp: "Psykisk helse er viktig for alle", en: "Mental health is important for everyone" }, hint: "An -isk adjective: no -t in the neuter, et psykisk problem. The pair is psykisk og fysisk, and psykisk helse is the ordinary phrase, not a clinical one." },
        { id: "no-u67l4-stress", type: "vocab", front: "stress", reading: "stress", meaning: "mental pressure", example: { jp: "Stresset på arbeid ble stort til slutt.", en: "The stress at work became big in the end." }, accept: ["stress", "a stress", "pressure", "strain"], drill: { jp: "Det ble mye stress for alle", en: "There was a lot of stress for everyone" }, hint: "⚠ A MASS noun, so no article on the card (unit1 §1b): neuter, definite stresset. The adjective is stressa or stresset — begge deler er lov." },
        { id: "no-u67l4-bekymreseg", type: "vocab", front: "å bekymre seg", reading: "abekymreseg", meaning: "to worry", example: { jp: "Hun bekymrer seg for barna hver dag.", en: "She worries about the children every day." }, accept: ["worry", "to be worried", "to fret"], drill: { jp: "Det er lett å bekymre seg for mye", en: "It is easy to worry too much" }, hint: "Always with seg (u12) — the verb has no form without it. bekymrer seg, bekymret seg. bekymret (u22) is the adjective you already know." },
        { id: "no-u67l4-angst", type: "vocab", front: "angst", reading: "angst", meaning: "anxiety", example: { jp: "Angsten kom om natta og ga seg igjen.", en: "The anxiety came at night and let go again." }, accept: ["anxiety", "dread", "fear"], drill: { jp: "Mange kjenner angst om natta", en: "Many people know anxiety at night" }, hint: "⚠ A MASS noun, so no article on the card (unit1 §1b) — å ha angst, never å ha en angst. Masculine, definite angsten. Stronger than redd (u17), and a medical word as well as an everyday one." },
        { id: "no-u67l4-depresjon", type: "vocab", front: "en depresjon", reading: "endepresjon", meaning: "a depression", example: { jp: "En depresjon kan vare i mange måneder.", en: "A depression can last for many months." }, accept: ["depression"], drill: { jp: "En depresjon kan vare i mange måneder", en: "A depression can last for many months" }, hint: "Masculine: depresjonen. Another -sjon noun — masculine, stressed at the end." },
        { id: "no-u67l4-selvtillit", type: "vocab", front: "selvtillit", reading: "selvtillit", meaning: "self-confidence", example: { jp: "Selvtilliten kom tilbake da hun mestret arbeidet.", en: "Her self-confidence came back when she mastered the work." }, accept: ["self-confidence", "confidence", "self-esteem"], drill: { jp: "Han fikk selvtillit han ikke hadde", en: "He got confidence he did not have" }, hint: "selv + tillit (u68), trust in yourself. ⚠ A MASS noun, so no article on the card (unit1 §1b): masculine, definite selvtilliten." },
      ],
    },
  ],
};
