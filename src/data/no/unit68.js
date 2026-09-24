// NO Unit 68 — Forhold og fellesskap ("Relationships and community") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Relationships and society"; retitled per CLAUDE.md → "No
// front language", and narrowed from SOCIETY to COMMUNITY on purpose: u32
// "Samfunn og hverdag" already owns the state (samfunn, stat, kommune,
// innbygger, lov, regel, rett, plikt, skatt, stemme, parti, politiker, borger),
// and block 1 owns u55 "News and society" and u61 "Rules, permission,
// obligation". So this unit takes what nobody else has — the language of being
// close to people: trust, falling out, making up, living together, belonging.
// Conventions are unit1.js §1–§9. Bokmål.
//
// ⚠ NO LEXEME PAIRS, deliberately: en krangel (å krangle u49) · ei forsoning
// (å forsone, same lesson) · en tilgivelse (å tilgi, same lesson) ·
// ei inkludering (å inkludere, same lesson) · en misforståelse (å misforstå,
// same lesson) · ei oppdragelse (å oppdra, same lesson). In every case the verb
// is the card and the noun is named in its hint.
//
// GENDER: en konflikt and en rettighet are MASCULINE — note
// ⚠ -het is masculine with NO feminine form, so en uenighet and en rettighet,
// never ei. ei gruppe and ei skilsmisse are feminine; et vennskap, et samliv,
// et bryllup, et fellesskap, et kompromiss are neuter (-skap is always neuter).
// ⚠ `tillit`, `omsorg` and `likestilling` are MASS nouns and are taught bare
// (unit1.js §1b) — ha tillit til noen, not ha en tillit. Corrected after the
// content gate BLOCKed the articled forms, 2026-09-16.
// FIRST FEMININE is `ei skilsmisse` (l3) and carries the en-/ei- note §1 wants.
//
// SCOPE: frozen base u1–u50 plus this unit's earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT68 = {
  id: "no-u68",
  lang: "no",
  title: "Forhold og fellesskap",
  order: 68,
  stage: "b1",
  lessons: [
    // Lesson 1: what a close relationship is made of, and what breaks it.
    {
      id: "no-u68l1",
      unit: 68,
      lesson: 1,
      title: "Nære forhold",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who you trust, who you can lean on, and what it means to be let down.",
      items: [
        { id: "no-u68l1-vennskap", type: "vocab", front: "et vennskap", reading: "etvennskap", meaning: "a friendship", example: { jp: "Vennskapet deres har vart i mange år.", en: "Their friendship has lasted many years." }, accept: ["friendship"], drill: { jp: "Dette er et vennskap som varer", en: "This is a friendship that lasts" }, hint: "en venn + -skap. ⚠ Every -skap noun is NEUTER: et vennskap, et fellesskap, et samfunn's cousin et medlemskap." },
        { id: "no-u68l1-bekjent", type: "vocab", front: "en bekjent", reading: "enbekjent", meaning: "an acquaintance", example: { jp: "Han er ikke en venn, bare en bekjent fra arbeid.", en: "He is not a friend, just an acquaintance from work." }, accept: ["acquaintance", "someone you know"], drill: { jp: "Han er en bekjent fra arbeid", en: "He is an acquaintance from work" }, hint: "From å kjenne (u1) — literally \"a known one\". Masculine: bekjenten. Norwegians draw this line sharply: en venn is not something you call someone lightly." },
        { id: "no-u68l1-tillit", type: "vocab", front: "tillit", reading: "tillit", meaning: "trust", example: { jp: "Tilliten til naboene ble mindre etter den saken.", en: "The trust in the neighbours got smaller after that business." }, accept: ["a trust", "confidence", "faith"], drill: { jp: "Vi har tillit til hverandre", en: "We trust each other" }, hint: "til + å lite (to rely). ⚠ A MASS noun, so no article on the card (unit1 §1b) — it is ha tillit til noen, never ha en tillit. Masculine, definite tilliten. Norway runs on it — høy tillit is how Norwegians describe their own society." },
        { id: "no-u68l1-stotte", type: "vocab", front: "å støtte", reading: "astotte", meaning: "to support", example: { jp: "Familien støttet ham i den saken.", en: "The family supported him in that business." }, accept: ["support", "to back", "to back up"], drill: { jp: "Vi prøver å støtte hverandre", en: "We try to support each other" }, hint: "støtter, støttet. For people and for causes alike: støtte en venn, støtte et forslag. ø folds to o: astotte." },
        { id: "no-u68l1-fortrolig", type: "vocab", front: "fortrolig", reading: "fortrolig", meaning: "in confidence", example: { jp: "De to har et fortrolig forhold og deler alt.", en: "The two of them have a close relationship and share everything." }, accept: ["confidential", "intimate", "close"], drill: { jp: "De har et fortrolig forhold", en: "They have a close relationship" }, hint: "Intetkjønn fortrolig, flertall fortrolige. Om det du bare sier til én: i fortrolighet. Ikke det samme som tillit (l1) — tillit er følelsen, fortrolig er forholdet."},
        { id: "no-u68l1-abetroseg", type: "vocab", front: "å betro seg", reading: "abetroseg", meaning: "to confide", example: { jp: "Hun betror seg til en god venn når noe er tungt.", en: "She confides in a good friend when something is hard." }, drill: { jp: "Det er godt å betro seg til noen", en: "It is good to confide in somebody" }, accept: ["to open up", "to confide in someone", "to unburden yourself"], hint: "be-TRU seg. Always reflexive and always with til: du betror DEG TIL noen. Present betror seg, past betrodde seg. It needs the tillit this lesson teaches — you only do it with someone fortrolig." },
      ],
    },
    // Lesson 2: the falling-out, and the way back from it.
    {
      id: "no-u68l2",
      unit: 68,
      lesson: 2,
      title: "Når det butter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a falling-out and the steps back from it.",
      items: [
        { id: "no-u68l2-konflikt", type: "vocab", front: "en konflikt", reading: "enkonflikt", meaning: "a conflict", example: { jp: "Konflikten på arbeid varte i flere måneder.", en: "The conflict at work lasted several months." }, accept: ["conflict", "dispute", "row"], drill: { jp: "Det ble en konflikt på arbeid", en: "It became a conflict at work" }, hint: "Masculine: konflikten. Bigger and colder than en krangel, which is the shouting; a konflikt can be perfectly quiet." },
        { id: "no-u68l2-uenighet", type: "vocab", front: "en uenighet", reading: "enuenighet", meaning: "a disagreement", example: { jp: "Det var en uenighet om hvem som skulle betale.", en: "There was a disagreement about who was going to pay." }, accept: ["disagreement", "difference of opinion"], drill: { jp: "Det var en uenighet om pengene", en: "There was a disagreement about the money" }, hint: "u- (not) + enig (agreed) + -het. ⚠ -het nouns are MASCULINE and have NO feminine form: en uenighet, uenigheten. Never ei." },
        { id: "no-u68l2-misforsta", type: "vocab", front: "å misforstå", reading: "amisforsta", meaning: "to misunderstand", example: { jp: "Jeg misforsto meldinga og kom en time for tidlig.", en: "I misunderstood the message and came an hour too early." }, accept: ["misunderstand", "to get wrong"], drill: { jp: "Det er lett å misforstå en melding", en: "It is easy to misunderstand a message" }, hint: "mis- + å forstå (u38's forsto), and it follows that verb exactly: misforstår, misforsto, har misforstått. The noun is en misforståelse — masculine, like every -else." },
        { id: "no-u68l2-kompromiss", type: "vocab", front: "et kompromiss", reading: "etkompromiss", meaning: "a compromise", example: { jp: "De fant et kompromiss alle kunne like.", en: "They found a compromise everyone could like." }, accept: ["compromise", "middle ground"], drill: { jp: "De fant et kompromiss til slutt", en: "They found a compromise in the end" }, hint: "Neuter: kompromisset. Norwegian å inngå et kompromiss, and the everyday phrase å møtes på halvveien." },
        { id: "no-u68l2-forsone", type: "vocab", front: "å forsone", reading: "aforsone", meaning: "to reconcile", example: { jp: "Det tok lang tid å forsone de to familiene.", en: "It took a long time to reconcile the two families." }, accept: ["reconcile", "to make peace"], drill: { jp: "Det er ikke lett å forsone to venner", en: "It is not easy to reconcile two friends" }, hint: "forsoner, forsonte. Most often reflexive — å forsone seg med noe means to come to terms with it. The noun is ei forsoning." },
        { id: "no-u68l2-tilgi", type: "vocab", front: "å tilgi", reading: "atilgi", meaning: "to forgive", example: { jp: "Hun tilga ham, men hun glemte det aldri.", en: "She forgave him, but she never forgot it." }, accept: ["forgive", "to pardon"], drill: { jp: "Det er ikke lett å tilgi noen", en: "It is not easy to forgive someone" }, hint: "til + å gi (u1) — the same picture as English \"forgive\". It follows gi: tilgir, tilga, har tilgitt. The noun is en tilgivelse." },
      ],
    },
    // Lesson 3: living together — the words for the long relationships, including
    // the one that ends.
    {
      id: "no-u68l3",
      unit: 68,
      lesson: 3,
      title: "Å leve sammen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the long relationships in a life — moving in, marrying, raising children, separating.",
      items: [
        { id: "no-u68l3-samliv", type: "vocab", front: "et samliv", reading: "etsamliv", meaning: "a life together", example: { jp: "Et godt samliv trenger tid og tillit.", en: "A good life together needs time and trust." }, accept: ["cohabitation", "partnership", "life together"], drill: { jp: "Et samliv trenger tid og tillit", en: "A life together needs time and trust" }, hint: "sam- (together) + et liv (u34). Neuter: samlivet. The official word on forms, and ordinary enough in speech." },
        { id: "no-u68l3-forloveseg", type: "vocab", front: "å forlove seg", reading: "aforloveseg", meaning: "to get engaged", example: { jp: "De forlovet seg på ei øy i Bergen.", en: "They got engaged on an island near Bergen." }, accept: ["get engaged", "to become engaged"], drill: { jp: "De pleier å forlove seg tidlig", en: "They usually get engaged early" }, hint: "for- + å love (u17) + seg — literally to promise oneself away. forlover seg, forlovet seg." },
        { id: "no-u68l3-bryllup", type: "vocab", front: "et bryllup", reading: "etbryllup", meaning: "a wedding", example: { jp: "Bryllupet var i ei kirke ved sjøen.", en: "The wedding was in a church by the sea." }, accept: ["wedding", "marriage ceremony"], drill: { jp: "De hadde et bryllup i kirka", en: "They had a wedding in the church" }, hint: "Neuter: bryllupet. Said BRYL-lup. A Norwegian bryllup traditionally runs for a very long evening." },
        { id: "no-u68l3-oppdra", type: "vocab", front: "å oppdra", reading: "aoppdra", meaning: "to raise", example: { jp: "Det er ikke lett å oppdra barn i en stor by.", en: "It is not easy to raise children in a big city." }, accept: ["raise", "to bring up", "to rear"], drill: { jp: "Det er ikke lett å oppdra barn", en: "It is not easy to raise children" }, hint: "opp + å dra (u20) — to \"pull up\". oppdrar, oppdro, har oppdratt. The noun is ei oppdragelse. Only for children: you oppdrar a child, never a plant." },
        { id: "no-u68l3-omsorg", type: "vocab", front: "omsorg", reading: "omsorg", meaning: "care for someone", example: { jp: "Omsorgen for de gamle er kommunens ansvar.", en: "Care for the elderly is the municipality's responsibility." }, accept: ["care", "caring", "nurture", "a care"], drill: { jp: "Vi trenger omsorg som varer", en: "We need care that lasts" }, hint: "om + sorg (sorrow) — caring about. ⚠ A MASS noun, so no article on the card (unit1 §1b): masculine, definite omsorgen. Omsorg is a big political word in Norway, not only a private one." },
        { id: "no-u68l3-skilsmisse", type: "vocab", front: "ei skilsmisse", reading: "eiskilsmisse", meaning: "a divorce", example: { jp: "Etter skilsmissa flyttet han til Bergen.", en: "After the divorce he moved to Bergen." }, accept: ["divorce", "separation"], drill: { jp: "Det ble ei skilsmisse etter mange år", en: "It became a divorce after many years" }, hint: "å skille (to separate) + misse. Feminine: skilsmissa — print also writes skilsmissen. This course marks ei so the definite -a stays predictable." },
      ],
    },
    // Lesson 4: the wider circle — belonging to something bigger than a family.
    {
      id: "no-u68l4",
      unit: 68,
      lesson: 4,
      title: "Å høre til",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where you belong, who is left out, and what equal treatment means.",
      items: [
        { id: "no-u68l4-fellesskap", type: "vocab", front: "et fellesskap", reading: "etfellesskap", meaning: "a community", example: { jp: "Et fellesskap blir sterkt når alle gjør litt.", en: "A community becomes strong when everyone does a little." }, accept: ["community", "fellowship", "togetherness"], drill: { jp: "Et fellesskap blir sterkt over tid", en: "A community becomes strong over time" }, hint: "felles (shared) + -skap, so NEUTER: fellesskapet. Close to et samfunn (u32), but a fellesskap is something you feel part of, not something you live in." },
        { id: "no-u68l4-gruppe", type: "vocab", front: "ei gruppe", reading: "eigruppe", meaning: "a group", example: { jp: "Gruppa møtes på et kontor hver tirsdag.", en: "The group meets in an office every Tuesday." }, accept: ["group", "team"], drill: { jp: "Vi er ei gruppe på ti", en: "We are a group of ten" }, hint: "Feminine: gruppa — this one is almost always said with -a, even by people who write gruppen." },
        { id: "no-u68l4-inkludere", type: "vocab", front: "å inkludere", reading: "ainkludere", meaning: "to include", example: { jp: "Skolen prøver å inkludere alle barna.", en: "The school tries to include all the children." }, accept: ["include", "to take in"], drill: { jp: "Skolen prøver å inkludere alle barna", en: "The school tries to include all the children" }, hint: "inkluderer, inkluderte — a regular -ere verb. The noun is ei inkludering, and it is one of the most-used words in Norwegian schools." },
        { id: "no-u68l4-horetil", type: "vocab", front: "å høre til", reading: "ahoretil", meaning: "to belong", example: { jp: "Alle vil høre til et sted.", en: "Everyone wants to belong somewhere." }, accept: ["belong", "to belong to", "to fit in"], drill: { jp: "Det er godt å høre til et sted", en: "It is good to belong somewhere" }, hint: "å høre (u11) + til (u7). hører til, hørte til. Norwegians say jeg hører til her where English says I belong here." },
        { id: "no-u68l4-likestilling", type: "vocab", front: "likestilling", reading: "likestilling", meaning: "equality", example: { jp: "Likestillinga for kvinner og menn kom sakte.", en: "Equality for women and men came slowly." }, accept: ["equality", "equal rights", "gender equality"], drill: { jp: "Vi trenger likestilling for alle", en: "We need equality for everyone" }, hint: "lik (equal) + ei stilling (u24) — being placed alike. ⚠ A MASS noun, so no article on the card (unit1 §1b): feminine, definite likestillinga. In Norwegian it means gender equality unless something else is said." },
        { id: "no-u68l4-enutenforstaende", type: "vocab", front: "en utenforstående", reading: "enutenforstaende", meaning: "an outsider", example: { jp: "En utenforstående forstår ikke alltid hva vi mener.", en: "An outsider does not always understand what we mean." }, drill: { jp: "Han er en utenforstående i gruppa", en: "He is an outsider in the group" }, accept: ["someone on the outside", "a non-member", "an onlooker"], hint: "U-ten-for-sto-en-de. Utenfor plus stående, standing — the person standing outside it. Masculine: definite den utenforstående, plural utenforstående. It says nothing unkind; it only says they are not in." },
      ],
    },
  ],
};
