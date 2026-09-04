// DE Unit 4 — Family (slot: family) — A1
// Conventions and the FREE list live in de/unit1.js — read that header first.
// Everything here is nominative. mein/dein are taught in their NOMINATIVE forms
// only (mein Vater, meine Mutter) — meinen/meinem wait for u13–u14.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT4 = {
  id: "de-u4",
  lang: "de",
  title: "Die Familie",
  order: 4,
  stage: "a1",
  lessons: [
    {
      id: "de-u4l1",
      unit: 4,
      lesson: 1,
      title: "Eltern und Kinder",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the members of a household — parents, son and daughter — and say where they are from.",
      items: [
        { id: "de-u4l1-diefamilie", type: "vocab", front: "die Familie", reading: "diefamilie", meaning: "family", example: { jp: "Die Familie ist groß.", en: "The family is big." }, accept: ["family", "the family"], hint: "Four syllables: fa-MI-li-e. The final -e is said, as it always is in German." },
        { id: "de-u4l1-dervater", type: "vocab", front: "der Vater", reading: "dervater", meaning: "father", example: { jp: "Der Vater heißt Thomas.", en: "The father is called Thomas." }, accept: ["father", "the father", "dad"], hint: "FAH-ter, with the v-as-f rule from u1. Papa and Vati are the affectionate forms." },
        { id: "de-u4l1-diemutter", type: "vocab", front: "die Mutter", reading: "diemutter", meaning: "mother", example: { jp: "Die Mutter kommt aus Köln.", en: "The mother comes from Cologne." }, accept: ["mother", "the mother", "mum", "mom"], hint: "Short u, unlike English \"mother\": MOO-ter. Mama and Mutti are the warm versions." },
        { id: "de-u4l1-dieeltern", type: "vocab", front: "die Eltern", reading: "dieeltern", meaning: "parents", example: { jp: "Die Eltern sind hier.", en: "The parents are here." }, accept: ["parents", "the parents"], hint: "Plural only — there is no singular Elter in normal German. Always die, always sind." },
        { id: "de-u4l1-dersohn", type: "vocab", front: "der Sohn", reading: "dersohn", meaning: "son", example: { jp: "Der Sohn ist jung.", en: "The son is young." }, accept: ["son", "the son"], hint: "ZOHN — a German s before a vowel is said like English z. The h just lengthens the o." },
        { id: "de-u4l1-dietochter", type: "vocab", front: "die Tochter", reading: "dietochter", meaning: "daughter", example: { jp: "Die Tochter studiert Musik.", en: "The daughter studies music." }, accept: ["daughter", "the daughter"], hint: "The throaty ch of Buch: TOKH-ter. Notice der Sohn but die Tochter — the gender matches the person here." },
      ],
    },
    {
      id: "de-u4l2",
      unit: 4,
      lesson: 2,
      title: "Geschwister",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about brothers and sisters, and refer to a man, a woman or a child.",
      items: [
        { id: "de-u4l2-derbruder", type: "vocab", front: "der Bruder", reading: "derbruder", meaning: "brother", example: { jp: "Der Bruder wohnt hier.", en: "The brother lives here." }, accept: ["brother", "the brother"], hint: "BROO-der. Its plural takes an umlaut — die Brüder — which is a very common German plural trick." },
        { id: "de-u4l2-dieschwester", type: "vocab", front: "die Schwester", reading: "dieschwester", meaning: "sister", example: { jp: "Die Schwester ist sehr jung.", en: "The sister is very young." }, accept: ["sister", "the sister"], hint: "SHVES-ter — sch is \"sh\" and w is \"v\", both rules from u1 in one word." },
        { id: "de-u4l2-diegeschwister", type: "vocab", front: "die Geschwister", reading: "diegeschwister", meaning: "siblings", example: { jp: "Die Geschwister sprechen Deutsch.", en: "The siblings speak German." }, accept: ["siblings", "brothers and sisters"], hint: "Plural only, like die Eltern. One word where English needs \"brothers and sisters\"." },
        { id: "de-u4l2-dermann", type: "vocab", front: "der Mann", reading: "dermann", meaning: "man / husband", example: { jp: "Der Mann arbeitet hier.", en: "The man works here." }, accept: ["man", "the man", "husband"], hint: "Both \"man\" and \"husband\" — mein Mann is my husband. Context decides." },
        { id: "de-u4l2-diefrau", type: "vocab", front: "die Frau", reading: "diefrau", meaning: "woman / wife", example: { jp: "Die Frau heißt Lena.", en: "The woman is called Lena." }, accept: ["woman", "the woman", "wife", "Mrs"], hint: "Also the title: Frau Schmidt. And meine Frau is my wife — the same doubling as der Mann." },
        { id: "de-u4l2-daskind", type: "vocab", front: "das Kind", reading: "daskind", meaning: "child", example: { jp: "Das Kind ist müde.", en: "The child is tired." }, accept: ["child", "the child", "kid"], hint: "Neuter — das Kind — whether it is a boy or a girl. Grammatical gender does not follow biology." },
      ],
    },
    {
      id: "de-u4l3",
      unit: 4,
      lesson: 3,
      title: "Die Verwandten",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name grandparents and the wider family, and say how old they are.",
      items: [
        { id: "de-u4l3-dergrossvater", type: "vocab", front: "der Großvater", reading: "dergrossvater", meaning: "grandfather", example: { jp: "Der Großvater ist alt.", en: "The grandfather is old." }, accept: ["grandfather", "the grandfather", "grandpa"], hint: "groß + Vater, built like Lego — German makes long words by stacking short ones. Another ß: type it grossvater. Opa is the warm form." },
        { id: "de-u4l3-diegrossmutter", type: "vocab", front: "die Großmutter", reading: "diegrossmutter", meaning: "grandmother", example: { jp: "Die Großmutter kommt aus Wien.", en: "The grandmother comes from Vienna." }, accept: ["grandmother", "the grandmother", "grandma"], hint: "Same build, same ß rule — grossmutter. Oma is what Germans actually say." },
        { id: "de-u4l3-diegrosseltern", type: "vocab", front: "die Großeltern", reading: "diegrosseltern", meaning: "grandparents", example: { jp: "Die Großeltern sind sehr alt.", en: "The grandparents are very old." }, accept: ["grandparents", "the grandparents"], hint: "groß + Eltern, and plural only like Eltern itself. Type it grosseltern." },
        { id: "de-u4l3-deronkel", type: "vocab", front: "der Onkel", reading: "deronkel", meaning: "uncle", example: { jp: "Der Onkel arbeitet auch hier.", en: "The uncle works here too." }, accept: ["uncle", "the uncle"], hint: "ON-kel. Unusually for German, its plural is unchanged: die Onkel." },
        { id: "de-u4l3-dietante", type: "vocab", front: "die Tante", reading: "dietante", meaning: "aunt", example: { jp: "Die Tante heißt Anna.", en: "The aunt is called Anna." }, accept: ["aunt", "the aunt"], hint: "TAN-te, both syllables said. The pair Onkel/Tante works exactly like Vater/Mutter." },
        { id: "de-u4l3-dercousin", type: "vocab", front: "der Cousin", reading: "dercousin", meaning: "cousin (male)", example: { jp: "Der Cousin studiert auch.", en: "The cousin studies too." }, accept: ["cousin", "the cousin", "male cousin"], hint: "Borrowed from French and still said the French way: koo-ZÄN. The female form is die Cousine." },
      ],
    },
    {
      id: "de-u4l4",
      unit: 4,
      lesson: 4,
      title: "Mein und dein",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whose someone is — my brother, your sister — say what you have, and talk about a friend.",
      items: [
        { id: "de-u4l4-mein", type: "vocab", front: "mein", reading: "mein", meaning: "my", example: { jp: "Mein Vater arbeitet hier.", en: "My father works here." }, accept: ["my"], hint: "mein for der- and das-words, meine for die-words and plurals: mein Vater, meine Mutter, meine Eltern." },
        { id: "de-u4l4-dein", type: "vocab", front: "dein", reading: "dein", meaning: "your (informal)", example: { jp: "Wie heißt dein Bruder?", en: "What is your brother called?" }, accept: ["your", "your informal"], hint: "Same endings as mein, and the same du/Sie split: dein for a friend, Ihr for someone you address as Sie." },
        { id: "de-u4l4-haben", type: "vocab", front: "haben", reading: "haben", meaning: "to have", example: { jp: "Wir haben Zeit.", en: "We have time." }, accept: ["to have", "have"], hint: "ich habe, du hast, er hat, wir haben. Slightly irregular in the du and er forms, and you will meet it constantly." },
        { id: "de-u4l4-derfreund", type: "vocab", front: "der Freund", reading: "derfreund", meaning: "friend (male)", example: { jp: "Der Freund kommt aus München.", en: "The friend comes from Munich." }, accept: ["friend", "the friend", "male friend", "boyfriend"], hint: "FROYNT — eu is said \"oy\", and the final d hardens to t. mein Freund can also mean boyfriend, so Germans say ein Freund von mir for a plain friend." },
        { id: "de-u4l4-diefreundin", type: "vocab", front: "die Freundin", reading: "diefreundin", meaning: "friend (female)", example: { jp: "Die Freundin studiert Musik.", en: "The friend studies music." }, accept: ["friend", "the friend", "female friend", "girlfriend"], hint: "The -in ending makes a female counterpart, and it is everywhere: Freund/Freundin, Student/Studentin." },
        { id: "de-u4l4-lieben", type: "vocab", front: "lieben", reading: "lieben", meaning: "to love", example: { jp: "Wir lieben die Musik.", en: "We love the music." }, accept: ["to love", "love"], hint: "LEE-ben, with the ie of hier. Strong in German — for things you merely enjoy, Germans use mögen or gern." },
      ],
    },
  ],
};
