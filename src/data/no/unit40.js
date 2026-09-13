// NO Unit 40 — Nyttige ord · 1 ("Vocabulary 1 (A2)") — A2
// The first coverage unit: not a new theme, but the high-frequency words the A2
// thematic and grammar units kept needing and A1 never taught — the verbs for
// reacting to and dealing with things, a set of abstract everyday nouns, and the
// qualifiers (mulig, nødvendig, egentlig, faktisk) that let a learner hedge and
// specify. Coverage units are a mixed bag by design. Conventions per no/unit1.js:
// indefinite noun fronts with en/ei/et, verbs å + infinitive, ø→o/æ→ae/å→a folds,
// a drill on every item. Every front checked against A1, the sibling blocks and
// this block. Block 3 carries coverage 2 onward (u41+).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT40 = {
  id: "no-u40",
  lang: "no",
  title: "Nyttige ord · 1",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "no-u40l1",
      unit: 40,
      lesson: 1,
      title: "Reacting and feeling",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about how things affect you — å oppleve, å føle, å forandre, å bety, å foretrekke, å angre.",
      items: [
        { id: "no-u40l1-aoppleve", type: "vocab", front: "å oppleve", reading: "aoppleve", meaning: "to experience", example: { jp: "Vi opplever ofte at været skifter fort her.", en: "We often find that the weather changes quickly here." }, accept: ["experience", "to go through"], drill: { jp: "Det er fint å oppleve mye", en: "It's nice to experience a lot" }, hint: "å oppleve → opplever. opp + leve, 'live through'. The noun en opplevelse is an experience." },
        { id: "no-u40l1-afole", type: "vocab", front: "å føle", reading: "afole", meaning: "to feel", example: { jp: "Jeg føler meg mye bedre i dag enn i går.", en: "I feel much better today than yesterday." }, accept: ["feel", "to sense"], drill: { jp: "Jeg begynner å føle meg bedre", en: "I'm starting to feel better" }, hint: "å føle → føler. Reflexive for how you feel: føle seg, jeg føler meg. Related to en følelse, a feeling." },
        { id: "no-u40l1-aforandre", type: "vocab", front: "å forandre", reading: "aforandre", meaning: "to change (to alter)", example: { jp: "Livet kan forandre seg fort når vi minst venter det.", en: "Life can change quickly when we least expect it." }, accept: ["to change", "to alter", "to transform"], drill: { jp: "Vi prøver å forandre alt", en: "We try to change everything" }, hint: "å forandre → forandrer. Reflexive forandre seg = to change (of itself). Literally 'to make other', for + andre (u1)." },
        { id: "no-u40l1-abety", type: "vocab", front: "å bety", reading: "abety", meaning: "to mean (to signify)", example: { jp: "Hva betyr dette ordet på norsk?", en: "What does this word mean in Norwegian?" }, accept: ["to mean", "to signify", "to stand for"], drill: { jp: "Det er fint å bety noe for noen", en: "It's nice to mean something to someone" }, hint: "å bety → betyr (no extra -er). The noun en betydning, a meaning, is in this unit." },
        { id: "no-u40l1-aforetrekke", type: "vocab", front: "å foretrekke", reading: "aforetrekke", meaning: "to prefer", example: { jp: "Jeg foretrekker melk, men mannen min liker kaffe best.", en: "I prefer milk, but my husband likes coffee best." }, accept: ["prefer", "to rather"], drill: { jp: "Jeg pleier å foretrekke melk", en: "I usually prefer milk" }, hint: "å foretrekke → foretrekker. Literally 'pull forth', fore + trekke. Present is regular even though the verb is strong elsewhere." },
        { id: "no-u40l1-aangre", type: "vocab", front: "å angre", reading: "aangre", meaning: "to regret", example: { jp: "Jeg angrer på at jeg ikke sa noe.", en: "I regret that I didn't say anything." }, accept: ["regret", "to be sorry"], drill: { jp: "Jeg pleier ikke å angre noe", en: "I do not usually regret anything" }, hint: "å angre → angrer. angre på noe = to regret something. Stronger than å beklage (A1), to be sorry / apologise." },
      ],
    },
    {
      id: "no-u40l2",
      unit: 40,
      lesson: 2,
      title: "Dealing with things",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle situations — å innse, å tilby, å kreve, å skape, å påvirke, å vurdere.",
      items: [
        { id: "no-u40l2-ainnse", type: "vocab", front: "å innse", reading: "ainnse", meaning: "to realize", example: { jp: "Jeg innser nå at det var dumt å vente så lenge.", en: "I realize now that it was foolish to wait so long." }, accept: ["to realise", "to recognise"], drill: { jp: "Han begynner å innse det", en: "He's starting to realize it" }, hint: "å innse → innser, past innså. inn + se, 'see into'. A sudden understanding." },
        { id: "no-u40l2-atilby", type: "vocab", front: "å tilby", reading: "atilby", meaning: "to offer", example: { jp: "Butikken tilbyr gratis kaffe til alle kundene.", en: "The shop offers free coffee to all the customers." }, accept: ["offer", "to provide"], drill: { jp: "Det er fint å tilby hjelp", en: "It's nice to offer help" }, hint: "å tilby → tilbyr. til + by (to bid). The noun et tilbud is an offer, and also a sale in a shop." },
        { id: "no-u40l2-akreve", type: "vocab", front: "å kreve", reading: "akreve", meaning: "to require", example: { jp: "Arbeidet krever at du snakker godt norsk.", en: "The job requires you to speak Norwegian well." }, accept: ["to demand", "require"], drill: { jp: "Det er mye å kreve av deg", en: "It is a lot to demand of you" }, hint: "å kreve → krever. et krav (u32, this band), a requirement, is the noun. kreve at + a clause." },
        { id: "no-u40l2-askape", type: "vocab", front: "å skape", reading: "askape", meaning: "to create", example: { jp: "Nye butikker skaper mange nye jobber, men noen blir borte.", en: "New shops create many new jobs, but some disappear." }, accept: ["create", "to bring about"], drill: { jp: "Vi prøver å skape noe", en: "We try to create something" }, hint: "å skape → skaper. To create or bring into being. Unrelated to et skap (A1), a cupboard, despite the look." },
        { id: "no-u40l2-apavirke", type: "vocab", front: "å påvirke", reading: "apavirke", meaning: "to affect", example: { jp: "Det vi gjør nå, påvirker framtiden til barna våre.", en: "What we do now affects the future of our children." }, accept: ["to influence", "affect"], drill: { jp: "Det er lett å påvirke barn", en: "It's easy to influence children" }, hint: "å påvirke → påvirker. på + virke (to act). The noun en påvirkning is an influence." },
        { id: "no-u40l2-avurdere", type: "vocab", front: "å vurdere", reading: "avurdere", meaning: "to consider", example: { jp: "Jeg vurderer å bytte skole, men jeg vet ikke ennå.", en: "I am considering changing school, but I do not know yet." }, accept: ["to assess", "to weigh up", "consider"], drill: { jp: "Vi begynner å vurdere alt", en: "We start to consider everything" }, hint: "å vurdere → vurderer. Both to consider a plan and to assess / grade schoolwork." },
      ],
    },
    {
      id: "no-u40l3",
      unit: 40,
      lesson: 3,
      title: "Useful abstract nouns",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name everyday abstractions — en fordel, en ulempe, et forslag, en beslutning, en betydning, en tilstand.",
      items: [
        { id: "no-u40l3-enfordel", type: "vocab", front: "en fordel", reading: "enfordel", meaning: "advantage", example: { jp: "En stor fordel med å bo her er den friske lufta.", en: "A big advantage of living here is the fresh air." }, accept: ["a benefit", "a plus"], drill: { jp: "Det er en fordel", en: "It's an advantage" }, hint: "en fordel → fordelen. for + del, a 'fore-part'. Its opposite is en ulempe, next." },
        { id: "no-u40l3-enulempe", type: "vocab", front: "en ulempe", reading: "enulempe", meaning: "disadvantage", example: { jp: "Den største ulempen er at leiligheten er ganske dyr.", en: "The biggest disadvantage is that the flat is quite expensive." }, accept: ["a drawback", "a downside"], drill: { jp: "Det er en ulempe", en: "It's a disadvantage" }, hint: "en ulempe → ulempen. The u- is the 'un-' prefix, as in umulig. The opposite of en fordel." },
        { id: "no-u40l3-etforslag", type: "vocab", front: "et forslag", reading: "etforslag", meaning: "suggestion", example: { jp: "Har du et bedre forslag enn dette?", en: "Do you have a better suggestion than this?" }, accept: ["a proposal", "a proposition"], drill: { jp: "Jeg har et forslag", en: "I have a suggestion" }, hint: "Neuter: et forslag → forslaget, plural forslag (unchanged). From å foreslå (A1), to suggest." },
        { id: "no-u40l3-enbeslutning", type: "vocab", front: "en beslutning", reading: "enbeslutning", meaning: "decision", example: { jp: "Det var en viktig beslutning for hele familien.", en: "It was an important decision for the whole family." }, accept: ["a resolution"], drill: { jp: "Vi tok en beslutning", en: "We made a decision" }, hint: "en beslutning → beslutningen. ta en beslutning = to make a decision. A step more formal than å bestemme seg (A1)." },
        { id: "no-u40l3-enbetydning", type: "vocab", front: "en betydning", reading: "enbetydning", meaning: "meaning", example: { jp: "Vet du betydningen av dette ordet?", en: "Do you know the meaning of this word?" }, accept: ["a significance", "importance"], drill: { jp: "Ordet har en betydning", en: "The word has a meaning" }, hint: "en betydning → betydningen. From å bety (this unit). Also importance: av stor betydning, of great importance." },
        { id: "no-u40l3-entilstand", type: "vocab", front: "en tilstand", reading: "entilstand", meaning: "condition", example: { jp: "Huset er i dårlig tilstand etter mange år.", en: "The house is in bad condition after many years." }, accept: ["a state"], drill: { jp: "Dette er en tilstand", en: "This is a condition" }, hint: "en tilstand → tilstanden. til + stand, from å stå, to stand — the state a thing stands in." },
      ],
    },
    {
      id: "no-u40l4",
      unit: 40,
      lesson: 4,
      title: "Qualifiers",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Hedge, specify, and speak in general — mulig, nødvendig, vanlig, egentlig, faktisk, man.",
      items: [
        { id: "no-u40l4-mulig", type: "vocab", front: "mulig", reading: "mulig", meaning: "possible", example: { jp: "Er det mulig å bytte time hvis jeg blir syk?", en: "Is it possible to change the appointment if I get ill?" }, accept: ["feasible"], drill: { jp: "Alt er mulig", en: "Everything is possible" }, hint: "mulig → invariant, like all -ig adjectives. en mulighet is a possibility; the opposite is umulig." },
        { id: "no-u40l4-nodvendig", type: "vocab", front: "nødvendig", reading: "nodvendig", meaning: "necessary", example: { jp: "Det er ikke nødvendig å komme så tidlig i dag.", en: "It isn't necessary to come so early today." }, accept: ["needed", "essential"], drill: { jp: "Det er helt nødvendig", en: "It's completely necessary" }, hint: "nødvendig → invariant. From nød, need. Om nødvendig means 'if necessary'." },
        { id: "no-u40l4-vanlig", type: "vocab", front: "vanlig", reading: "vanlig", meaning: "usual", example: { jp: "En vanlig dag begynner tidlig og slutter sent for meg.", en: "An ordinary day starts early and ends late for me." }, accept: ["common", "ordinary", "normal"], drill: { jp: "Det er ganske vanlig", en: "It's quite common" }, hint: "vanlig → invariant. From en vane (A1), a habit. The adverb vanligvis (A1) means 'usually'." },
        { id: "no-u40l4-egentlig", type: "vocab", front: "egentlig", reading: "egentlig", meaning: "actually", example: { jp: "Jeg vet egentlig ikke hva jeg vil gjøre.", en: "I don't actually know what I want to do." }, accept: ["really", "in fact"], drill: { jp: "Jeg er egentlig ganske trøtt", en: "I am actually quite tired" }, hint: "egentlig softens or corrects — 'actually, really'. eg is said 'ay': AY-gent-li." },
        { id: "no-u40l4-faktisk", type: "vocab", front: "faktisk", reading: "faktisk", meaning: "in fact", example: { jp: "Han er faktisk mye eldre enn han ser ut til.", en: "He's actually much older than he looks." }, accept: ["actually", "really"], drill: { jp: "Det er faktisk sant", en: "It's actually true" }, hint: "faktisk stresses that something is true, often surprisingly. From et faktum, a fact. Close to egentlig, but more emphatic." },
        { id: "no-u40l4-man", type: "vocab", front: "man", reading: "man", meaning: "people in general", example: { jp: "Man må ha billett før man går på toget.", en: "You have to have a ticket before you get on the train." }, accept: ["one", "you (generic)", "people"], drill: { jp: "Man sier at været blir bedre", en: "People say the weather is getting better" }, hint: "MANN. The impersonal subject — English you or people in general: man sier at … It is a subject only; as an object Norwegian uses en." },
      ],
    },
  ],
};
