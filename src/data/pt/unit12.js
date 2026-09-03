// PT Unit 12 — Ser, estar e as contrações — A1 (slot: grammar-1, retitled)
// ─────────────────────────────────────────────────────────────────────────────
// SLOT RETHEME. The scaffold called this "Grammar 1 — basic sentence", a title
// inherited from Japanese. CLAUDE.md → "No front language": the CEFR band fixes
// the LEVEL, the language fixes the CONTENT. For Portuguese the basic sentence is
// three things and they are all here:
//   1. WHO — the subject pronouns block 1 never finished (ele, ela, eles, elas,
//      vocês, a senhora; eu/tu/você/nós are u2–u4).
//   2. WHICH "TO BE" — ser vs estar. Block 1 deliberately left this shut: `é`
//      (u1l1) and `estou bem` (u2l3) were taught as unanalysed chunks. This is
//      where they get taken apart.
//   3. HOW THE LITTLE WORDS FUSE — the contractions. de/em/a + article, which
//      have been used in block-1 examples since Unit 1 and glossed in hints, but
//      carded nowhere. They are the biggest hole block 1 left, and Lesson 3 is
//      the whole of it: do, da, no, na, ao, à. The plurals (dos, das, nos, nas,
//      aos, às) ride in the hints rather than costing six more cards, the same
//      way u1 carried `uma` inside `um`.
// Lesson 4 closes the noun phrase: plural articles, uns, este/aquele, outro.
// ADJECTIVE agreement is NOT here — u14 owns it. This unit agrees the words in
// FRONT of the noun; u14 agrees the ones after it.
//
// u13 owns the conjugations, so this unit cards only the forms the contrast
// itself needs: estou/está against the taught é and sou, somos/são against them
// in the plural. és, estás, estamos and estão live in these cards' hints and are
// completed in u13l3.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT12 = {
  id: "pt-u12",
  lang: "pt",
  title: "Ser, estar e as contrações",
  order: 12,
  stage: "a1",
  lessons: [
    // Lesson 1: the people the sentence can be about. Portuguese normally leaves
    // the subject pronoun out — the verb ending already says who — so every hint
    // here has to explain when you would actually say the word.
    {
      id: "pt-u12l1",
      unit: 12,
      lesson: 1,
      title: "Ele, ela, eles, elas",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a third person or a group — he, she, they — and pick the right word for \"you\" when you are speaking to more than one person or to someone you must be polite to.",
      items: [
        { id: "pt-u12l1-ele", type: "vocab", front: "ele", reading: "ele", meaning: "he", example: { jp: "Ele é o pai de Ana.", en: "He is Ana's father." }, accept: ["him", "it"], hint: "E-le, closed first e. Also \"it\" for anything masculine — o livro? Ele é caro. Portuguese usually drops it, because é already means \"he/she/it is\"; you say ele when you need the contrast: ELE é médico, ela não." },
        { id: "pt-u12l1-ela", type: "vocab", front: "ela", reading: "ela", meaning: "she", example: { jp: "Ela é a mãe de Tiago.", en: "She is Tiago's mother." }, accept: ["her", "it"], hint: "E-la, and this time the e is OPEN — that one vowel is the whole difference from ele, so say them side by side until it sticks. Also \"it\" for anything feminine: a casa? Ela é grande." },
        { id: "pt-u12l1-eles", type: "vocab", front: "eles", reading: "eles", meaning: "they", example: { jp: "Eles são de Portugal.", en: "They are from Portugal." }, accept: ["them", "they (m)", "they masculine"], hint: "E-lesh. Masculine plural — and it wins any mixed group: ninety-nine women and one man are still eles. That rule offends people and is nonetheless the rule." },
        { id: "pt-u12l1-elas", type: "vocab", front: "elas", reading: "elas", meaning: "they (feminine)", example: { jp: "Elas são as irmãs de Ana.", en: "They are Ana's sisters." }, accept: ["them", "they", "they (f)"], hint: "E-lash, open e like ela. Used only when every single person in the group is female. English throws both away and says \"they\"; Portuguese makes you choose before you open your mouth." },
        { id: "pt-u12l1-voces", type: "vocab", front: "vocês", reading: "voces", meaning: "you (plural)", example: { jp: "Vocês são de Lisboa?", en: "Are you from Lisbon?" }, accept: ["you all", "you guys", "you lot", "you plural"], hint: "vo-SESH. Here Portugal is simple: tu and você BOTH become vocês in the plural, with no politeness split at all. The old vós survives in prayers, in the far north, and nowhere else you will go." },
        { id: "pt-u12l1-asenhora", type: "vocab", front: "a senhora", reading: "asenhora", meaning: "madam", example: { jp: "A senhora é a professora?", en: "Are you the teacher, madam?" }, accept: ["you (polite, f)", "ma'am", "the lady", "you polite"], hint: "The feminine partner of o senhor from Unit 2, and the safe polite \"you\" for a woman you do not know. Take the verb in the third person: a senhora é, a senhora está. For a younger woman, a menina is the usual softer choice." },
      ],
    },
    // Lesson 2: the split English does not have. The rule of thumb every learner
    // gets given — ser is permanent, estar is temporary — is roughly right and
    // wrong at the edges, so the hints give the sharper version: ser says WHAT
    // something is, estar says HOW or WHERE it is right now.
    {
      id: "pt-u12l2",
      unit: 12,
      lesson: 2,
      title: "Ser ou estar?",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Choose between Portugal's two verbs for \"to be\" — ser for what something is, estar for how or where it is right now — and stop guessing.",
      items: [
        { id: "pt-u12l2-ser", type: "vocab", front: "ser", reading: "ser", meaning: "to be", example: { jp: "Ser professor é um trabalho difícil.", en: "To be a teacher is difficult work." }, accept: ["being", "to be (permanent)", "be"], hint: "The identity verb: WHAT something is. Names, jobs, nationality, origin, the material a thing is made of, and the hour — que horas são, from Unit 5. Wildly irregular: sou, és, é, somos, são. You have been using é since Unit 1 without being told its name." },
        { id: "pt-u12l2-estar", type: "vocab", front: "estar", reading: "estar", meaning: "to be (state)", example: { jp: "Estar em Lisboa é fantástico.", en: "Being in Lisbon is fantastic." }, accept: ["to be located", "being", "to be (temporary)", "be"], hint: "The state verb: HOW or WHERE something is right now. Location, mood, weather, health — estou bem from Unit 2 was this verb all along. Forms: estou, estás, está, estamos, estão. Careful, it is not \"temporary vs permanent\": a person's death is estar morto, and it is not temporary." },
        { id: "pt-u12l2-estou", type: "vocab", front: "estou", reading: "estou", meaning: "I am", example: { jp: "Estou em casa.", en: "I am at home." }, accept: ["im", "i'm", "i am (right now)"], hint: "shtOH. Compare with sou, from Unit 3: SOU médico is my profession, ESTOU cansado is how I feel today. Swap them and a Portuguese speaker will understand you and also know instantly that you are not one." },
        { id: "pt-u12l2-esta", type: "vocab", front: "está", reading: "esta", meaning: "he is", example: { jp: "Onde está o meu livro?", en: "Where is my book?" }, accept: ["she is", "it is", "you are", "is"], hint: "shtA. Does he, she, it AND the polite you — o senhor está bem? Its partner is é: o café É bom (always) but o café ESTÁ quente (now). Location always takes está, never é, once you are talking about a movable thing." },
        { id: "pt-u12l2-somos", type: "vocab", front: "somos", reading: "somos", meaning: "we are", example: { jp: "Nós somos portugueses.", en: "We are Portuguese." }, accept: ["were", "we're", "we are (ser)"], hint: "SO-mush, from ser. Goes with nós, Unit 4 — though you will usually drop the nós, because -mos already says \"we\". The estar version is estamos: estamos em Lisboa." },
        { id: "pt-u12l2-sao", type: "vocab", front: "são", reading: "sao", meaning: "they are", example: { jp: "Eles são muito simpáticos.", en: "They are very nice." }, accept: ["you are (plural)", "theyre", "they're", "are"], hint: "SAWNG, the ão nasal from Unit 1. Covers eles, elas AND vocês. You have already met it inside que horas são, Unit 5 — the clock takes ser. The estar version is estão. And yes, são also means \"saint\": São Tiago." },
      ],
    },
    // Lesson 3: THE CONTRACTIONS. Block 1's biggest hole. These are not optional
    // in Portuguese the way "of the" is optional in English — "de o" is simply
    // not something anyone writes or says.
    {
      id: "pt-u12l3",
      unit: 12,
      lesson: 3,
      title: "As contrações",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Fuse de, em and a with the article the way Portuguese requires — do, da, no, na, ao, à — instead of leaving the two words apart.",
      items: [
        { id: "pt-u12l3-do", type: "vocab", front: "do", reading: "do", meaning: "of the", example: { jp: "O carro do médico é novo.", en: "The doctor's car is new." }, accept: ["from the", "of the (m)", "'s", "belonging to the"], hint: "de + o = do, and never de o. This is the possessive Portuguese uses instead of an apostrophe: o carro DO médico, the doctor's car. Plural de + os = dos. You have been reading it in examples since Unit 1." },
        { id: "pt-u12l3-da", type: "vocab", front: "da", reading: "da", meaning: "of the (feminine)", example: { jp: "O nome da mulher é Ana.", en: "The woman's name is Ana." }, accept: ["from the", "of the", "'s", "belonging to the"], hint: "de + a = da. Same fusion, feminine article. Plural de + as = das. Portuguese surnames are full of it — Costa DA Silva — and so are place names: Praça da República." },
        { id: "pt-u12l3-no", type: "vocab", front: "no", reading: "no", meaning: "in the", example: { jp: "O livro está no carro.", en: "The book is in the car." }, accept: ["on the", "at the", "in the (m)", "inside the"], hint: "em + o = no. Careful — this is not the English \"no\", which in Portuguese is não, Unit 1. Plural em + os = nos. It does in, on and at all at once: no carro, no livro, no hospital." },
        { id: "pt-u12l3-na", type: "vocab", front: "na", reading: "na", meaning: "in the (feminine)", example: { jp: "Ana está na escola.", en: "Ana is at school." }, accept: ["on the", "at the", "inside the"], hint: "em + a = na. Plural em + as = nas. Note that estar, not ser, is what goes with a location — está na escola. And na also builds the days: na segunda-feira, on Monday." },
        { id: "pt-u12l3-ao", type: "vocab", front: "ao", reading: "ao", meaning: "to the", example: { jp: "Ao sábado, o museu não é caro.", en: "On Saturdays, the museum isn't expensive." }, accept: ["at the", "to the (m)", "on the"], hint: "a + o = ao. Direction — vou ao mercado — and also the very Portuguese way of saying \"on Saturdays\" as a habit: ao sábado, ao domingo. Plural a + os = aos." },
        { id: "pt-u12l3-a", type: "vocab", front: "à", reading: "a", meaning: "to the (feminine)", example: { jp: "À noite, a cidade é muito tranquila.", en: "At night, the city is very tranquil." }, accept: ["at the", "on the", "to the"], hint: "a + a = à, and that backwards accent — the crase — is the only thing on the page telling you two words fused. Say it as one long open \"ah\". You already use it in à direita and à esquerda, Unit 7. Plural a + as = às, which is how you give clock times: às três." },
      ],
    },
    // Lesson 4: the rest of the noun phrase. Everything here changes shape for
    // gender and number, which is the point — and the reason u14's adjective
    // agreement will feel like a rule the learner already half knows.
    {
      id: "pt-u12l4",
      unit: 12,
      lesson: 4,
      title: "O género e o número",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Put a Portuguese noun into the plural and point at things — this one, that one over there, the other one — with the endings agreeing all the way along.",
      items: [
        { id: "pt-u12l4-os", type: "vocab", front: "os", reading: "os", meaning: "the (masculine plural)", example: { jp: "Os livros são de Ana.", en: "The books are Ana's." }, accept: ["the", "the plural", "the (m pl)"], hint: "The plural of o. Everything in the phrase moves together: o livro caro becomes OS livroS caroS. Portuguese uses the article far more than English does — os portugueses gostam de café, \"Portuguese people like coffee\"." },
        { id: "pt-u12l4-as", type: "vocab", front: "as", reading: "as", meaning: "the (feminine plural)", example: { jp: "As mulheres são as irmãs de Tiago.", en: "The women are Tiago's sisters." }, accept: ["the", "the plural", "the (f pl)"], hint: "The plural of a. Most plurals just add -s, but three endings change: -ão becomes -ões (as estações), -al becomes -ais (os hospitais), and -m becomes -ns (os homens). Only words ending in an UNSTRESSED -s stay put — o lápis, os lápis — while a stressed one still adds -es: o país, os países." },
        { id: "pt-u12l4-uns", type: "vocab", front: "uns", reading: "uns", meaning: "some", example: { jp: "Uns dias em Portugal são fantásticos.", en: "A few days in Portugal are fantastic." }, accept: ["a few", "a couple of", "some (m)"], hint: "OONSH, nasal — the plural of um from Unit 1. Feminine umas. Portuguese uses it much less than English uses \"some\": for uncountable things you simply drop the article, quero água, not \"quero umas águas\"." },
        { id: "pt-u12l4-este", type: "vocab", front: "este", reading: "este", meaning: "this", example: { jp: "Este livro é o meu.", en: "This book is mine." }, accept: ["this one", "this (m)"], hint: "ESH-te. Feminine esta, plurals estes/estas — and the neuter isto, for a thing you cannot name yet. It matches aqui from Unit 7: este is near ME. Do not confuse esta (this) with está (is) — the accent is the whole difference, exactly like é and e in Unit 1." },
        { id: "pt-u12l4-aquele", type: "vocab", front: "aquele", reading: "aquele", meaning: "that", example: { jp: "Aquele homem é o pai de Ana.", en: "That man is Ana's father." }, accept: ["that one", "that over there", "that (m)"], hint: "a-KE-le. Feminine aquela, neuter aquilo. Portuguese points three ways, matching aqui / aí / ali from Unit 7: este is by me, esse is by you, aquele is over there away from us both. English collapses the last two into \"that\"." },
        { id: "pt-u12l4-outro", type: "vocab", front: "outro", reading: "outro", meaning: "other", example: { jp: "Não é este livro, é o outro.", en: "It isn't this book, it's the other one." }, accept: ["another", "the other", "other one"], hint: "OH-tru — ou as a plain long o, like outono. Feminine outra, plurals outros/outras. Note what it does NOT take: \"another\" is simply outro, never \"um outro\", so um outro livro is a beginner's tell." },
      ],
    },
  ],
};
