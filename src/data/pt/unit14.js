// PT Unit 14 — O passado e a concordância — A1 (slot: grammar-3, retitled)
// ─────────────────────────────────────────────────────────────────────────────
// SLOT RETHEME, lightly. The scaffold's "Grammar 3 — past tense and agreement"
// happens to describe what Portuguese needs third as well, so the shape stands
// and only the wording is localised. The tense is the PRETÉRITO PERFEITO — the
// completed past, ontem falei — which is the one an A1 learner actually needs.
// The imperfeito (falava) and the compound perfect (tenho falado, which in
// Portuguese does NOT mean "I have spoken") are A2 work and are named in the
// hints rather than taught.
//
// pt-PT SPELLING, and it is a real one: Portugal writes falÁmos for "we spoke"
// against falamos for "we speak" — the accent is the whole difference and the
// two vowels genuinely sound different here. Brazil dropped it after the 1990
// accord and spells both falamos. This corpus follows Portugal, so u13l1 carries
// the present falamos and this unit's L1 hints carry the past falámos rather
// than a second card whose ASCII fold would be identical to it.
//
// AGREEMENT. u12l4 agreed the words in FRONT of the noun — os, as, uns, este.
// L4 here agrees the ones after it, and does it through six adjectives whose
// feminines are each formed by a DIFFERENT rule, so the lesson is the pattern
// rather than six more vocabulary items: regular -o/-a (todo, primeiro),
// -ês/-esa (francês), -ão/-ã (alemão), -l/-la (espanhol), and the ones that do
// not change at all (simples). The three nationalities also close a gap — block
// 1 taught only português and inglês.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT14 = {
  id: "pt-u14",
  lang: "pt",
  title: "O passado e a concordância",
  order: 14,
  stage: "a1",
  lessons: [
    // Lesson 1: -ar in the past. The endings are nothing like the present ones,
    // so they have to be learned rather than derived.
    {
      id: "pt-u14l1",
      unit: 14,
      lesson: 1,
      title: "O passado dos verbos em -ar",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you did — talk about yesterday using any regular -ar verb in the completed past.",
      items: [
        { id: "pt-u14l1-falei", type: "vocab", front: "falei", reading: "falei", meaning: "I spoke", example: { jp: "Falei com o médico ontem.", en: "I spoke with the doctor yesterday." }, accept: ["i talked", "i did speak", "i have spoken", "spoke"], hint: "The pretérito perfeito: a finished action at a finished time. -ei is the eu ending for every regular -ar verb — falei, estudei, trabalhei, gostei. Careful: falo has one syllable of stress at the front, falei has it at the back." },
        { id: "pt-u14l1-falaste", type: "vocab", front: "falaste", reading: "falaste", meaning: "you spoke", example: { jp: "Falaste com Ana?", en: "Did you speak with Ana?" }, accept: ["you talked", "did you speak", "you did speak"], hint: "-aste for tu. Portuguese does not need a helper word for questions — no \"did\" — so falaste? on its own is the whole question. Do not let the -ste ending pull you toward Spanish -aste-with-an-s at the end; Portugal says fa-LASH-te." },
        { id: "pt-u14l1-falou", type: "vocab", front: "falou", reading: "falou", meaning: "he spoke", example: { jp: "Ela falou muito bem.", en: "She spoke very well." }, accept: ["she spoke", "you spoke (polite)", "spoke", "it spoke"], hint: "fa-LOH. -ou for he, she, it and the polite you. This is the ending you will hear most, and it is one letter of sound away from the present -a: ela fala, ela falou." },
        { id: "pt-u14l1-falaram", type: "vocab", front: "falaram", reading: "falaram", meaning: "they spoke", example: { jp: "Eles falaram inglês no hospital.", en: "They spoke English at the hospital." }, accept: ["you spoke (plural)", "they talked", "they did speak"], hint: "-aram, and covers eles, elas and vocês. The nós form is falÁmos with an accent, which is what tells it apart from falamos, \"we speak\" — Portugal keeps that accent and Brazil does not. Say them apart: fa-LĂ-mush for the present, with the swallowed a of Unit 1, and fa-LAH-mush for the past, with the a wide open." },
        { id: "pt-u14l1-estudei", type: "vocab", front: "estudei", reading: "estudei", meaning: "I studied", example: { jp: "Estudei português em Coimbra.", en: "I studied Portuguese in Coimbra." }, accept: ["i did study", "i have studied", "studied"], hint: "Same -ei ending, on estudar from Unit 3. Coimbra has had a university since 1290, and the black student capes are not a costume — they are still worn." },
        { id: "pt-u14l1-trabalhei", type: "vocab", front: "trabalhei", reading: "trabalhei", meaning: "I worked", example: { jp: "Trabalhei na farmácia.", en: "I worked at the pharmacy." }, accept: ["i did work", "i have worked", "worked"], hint: "-ei again, on trabalhar from Unit 13. Three verbs, one ending: once you have it, every regular -ar verb in Portuguese is open to you in the past. Note na, em + a, from Unit 12." },
      ],
    },
    // Lesson 2: -er and -ir in the past. They stay nearly identical here too —
    // only the third-person singular splits, comeu against abriu.
    {
      id: "pt-u14l2",
      unit: 14,
      lesson: 2,
      title: "O passado dos verbos em -er e -ir",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Put the other two verb families into the past, and hear the one ending that separates them.",
      items: [
        { id: "pt-u14l2-comi", type: "vocab", front: "comi", reading: "comi", meaning: "I ate", example: { jp: "Comi peixe ao jantar.", en: "I ate fish for dinner." }, accept: ["i did eat", "i have eaten", "ate"], hint: "-i for eu, in BOTH the -er and the -ir families: comi, bebi, vivi, abri, parti. One ending, two families, and nothing like the -ei of the -ar verbs." },
        { id: "pt-u14l2-comeste", type: "vocab", front: "comeste", reading: "comeste", meaning: "you ate", example: { jp: "Comeste o bolo?", en: "Did you eat the cake?" }, accept: ["you did eat", "did you eat", "you have eaten"], hint: "-este for tu. Watch it against the present comes — co-MES-te has the extra syllable, and dropping it is the most common beginner slip in this tense. The -ir version is -iste: abriste." },
        { id: "pt-u14l2-comeu", type: "vocab", front: "comeu", reading: "comeu", meaning: "he ate", example: { jp: "Ele comeu a sopa.", en: "He ate the soup." }, accept: ["she ate", "you ate (polite)", "ate", "it ate"], hint: "ku-MEH-oo. THIS is where -er and -ir finally part company: -er takes -eu, -ir takes -iu. comeu but abriu. Everything else in the past is shared." },
        { id: "pt-u14l2-bebi", type: "vocab", front: "bebi", reading: "bebi", meaning: "I drank", example: { jp: "Bebi um sumo de laranja.", en: "I drank an orange juice." }, accept: ["i did drink", "i have drunk", "drank"], hint: "-i again, on beber from Unit 6. And o sumo is the Portugal word — Brazil says o suco. Um sumo de laranja natural, freshly squeezed, is on every café counter here." },
        { id: "pt-u14l2-abri", type: "vocab", front: "abri", reading: "abri", meaning: "I opened", example: { jp: "Abri a loja às oito.", en: "I opened the shop at eight." }, accept: ["i did open", "i have opened", "opened"], hint: "-i, the shared ending, on abrir from Unit 13. Full -ir past: -i, -iste, -iu, -imos, -iram. Note abrimos is identical in the present and the past — context is the only thing that tells them apart. And keep abri apart from abril, the month in Unit 9: one letter, no relation." },
        { id: "pt-u14l2-abriu", type: "vocab", front: "abriu", reading: "abriu", meaning: "he opened", example: { jp: "A farmácia abriu ontem.", en: "The pharmacy opened yesterday." }, accept: ["she opened", "it opened", "you opened (polite)", "opened"], hint: "a-BREE-oo. The one ending that separates the families, from the other side: comEU but abrIU. Say the pair out loud together and the difference stops being invisible." },
      ],
    },
    // Lesson 3: the irregulars. fui is the headline — one form for two verbs,
    // and Portuguese simply lets context decide which.
    {
      id: "pt-u14l3",
      unit: 14,
      lesson: 3,
      title: "Os irregulares no passado",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the irregular past forms of the verbs you use most — was, went, had, did — and handle the one form that belongs to two different verbs.",
      items: [
        { id: "pt-u14l3-fui", type: "vocab", front: "fui", reading: "fui", meaning: "I went", example: { jp: "Fui ao mercado ontem.", en: "I went to the market yesterday." }, accept: ["i was", "i have been", "went", "was"], hint: "FOO-ee. The strangest fact in Portuguese grammar: ser and ir share their entire past tense. Fui means BOTH \"I went\" and \"I was\", and nothing in the word tells you which — fui ao mercado is went, fui médico is was. Context decides, every time." },
        { id: "pt-u14l3-foi", type: "vocab", front: "foi", reading: "foi", meaning: "he went", example: { jp: "Ontem foi domingo.", en: "Yesterday was Sunday." }, accept: ["she went", "it was", "he was", "was", "went"], hint: "FOY. Same double life as fui, in the third person — the example is the \"was\" reading. Full set: fui, foste, foi, fomos, foram. Do not confuse foi with fui: one letter, one person." },
        { id: "pt-u14l3-tive", type: "vocab", front: "tive", reading: "tive", meaning: "I had", example: { jp: "Tive febre.", en: "I had a fever." }, accept: ["i have had", "i did have", "had"], hint: "TEE-ve, from ter. Irregular right through: tive, tiveste, teve, tivemos, tiveram — the stem swaps its vowel and there is no rule to derive it from. With an illness, Portuguese drops the article: tive febre, not \"tive uma febre\"." },
        { id: "pt-u14l3-teve", type: "vocab", front: "teve", reading: "teve", meaning: "he had", example: { jp: "Ela teve gripe.", en: "She had the flu." }, accept: ["she had", "you had (polite)", "had", "it had"], hint: "TEH-ve. One vowel from tive, and it is the difference between me and her — so this is a pair to say aloud: TEE-ve, TEH-ve. Estar makes the same shape: estive, esteve." },
        { id: "pt-u14l3-fiz", type: "vocab", front: "fiz", reading: "fiz", meaning: "I did", example: { jp: "Fiz o jantar.", en: "I made dinner." }, accept: ["i made", "i have done", "did", "made"], hint: "FEESH — the z shushes like a final s. From fazer: fiz, fizeste, fez, fizemos, fizeram. Do and make, in the past as in the present." },
        { id: "pt-u14l3-fez", type: "vocab", front: "fez", reading: "fez", meaning: "he did", example: { jp: "Ela fez um bolo fantástico.", en: "She made a fantastic cake." }, accept: ["she made", "he made", "you did (polite)", "did", "made"], hint: "FESH. Note it drops the -z- stem that fiz and fizeram carry, which is why it looks shorter than it should. Portuguese also uses it for elapsed time: fez dois anos, it's been two years." },
      ],
    },
    // Lesson 4: agreement. Six adjectives, six different ways of forming the
    // feminine — that spread IS the lesson, and each hint names its own rule.
    {
      id: "pt-u14l4",
      unit: 14,
      lesson: 4,
      title: "A concordância dos adjetivos",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Make an adjective agree with the noun it describes — including the ones that do not simply swap -o for -a, and the ones that never change at all.",
      items: [
        { id: "pt-u14l4-todo", type: "vocab", front: "todo", reading: "todo", meaning: "all", example: { jp: "Todo o dia faz sol.", en: "All day it's sunny." }, accept: ["whole", "every", "the whole", "entire"], hint: "The full set, and the plainest pattern in the language: todo, toda, todos, todas. Singular means \"the whole\" — todo o dia, all day long; plural means \"every\" — todos os dias, every day. Note it keeps the article after it, which English drops." },
        { id: "pt-u14l4-frances", type: "vocab", front: "francês", reading: "frances", meaning: "French", example: { jp: "O professor é francês.", en: "The teacher is French." }, accept: ["frenchman", "the french", "french person"], hint: "fran-SESH. RULE TWO: -ês becomes -esa, and the accent disappears — francês, francesa; franceses, francesas. Exactly the same shape as português and inglês from Unit 3, which you now know how to make feminine. Nationalities stay lowercase in Portuguese." },
        { id: "pt-u14l4-alemao", type: "vocab", front: "alemão", reading: "alemao", meaning: "German", example: { jp: "Ele é alemão e ela é alemã.", en: "He is German and she is German." }, accept: ["german person", "the german"], hint: "a-le-MAWNG. RULE THREE, and the odd one: -ão becomes -ã — alemão, alemã. Plurals alemães and alemãs. The nasal from Unit 1 does all the work, and the example puts both genders in one sentence so you can hear the difference." },
        { id: "pt-u14l4-espanhol", type: "vocab", front: "espanhol", reading: "espanhol", meaning: "Spanish", example: { jp: "O vinho espanhol não é caro.", en: "Spanish wine isn't expensive." }, accept: ["spaniard", "the spanish", "spanish person"], hint: "esh-pa-NYOL, with the nh. RULE FOUR: -l simply adds -a, espanhol/espanhola, and the plural turns -ol into -óis — espanhóis. Portugal's only land border, and the two languages are close enough to be a trap the whole way through this course." },
        { id: "pt-u14l4-simples", type: "vocab", front: "simples", reading: "simples", meaning: "simple", example: { jp: "É uma coisa simples.", en: "It's a simple thing." }, accept: ["plain", "straightforward", "easy"], hint: "SEEM-plesh. RULE FIVE, the free one: some adjectives never change AT ALL — not for gender and not for number. um problema simples, umas coisas simples. Adjectives ending in an unstressed -es do this, and so do all the ones ending in -e — grande, verde, forte from Unit 10. Careful, -s alone is not the test: português ends in -s and DOES change, to portuguesa, because its -ês is stressed." },
        { id: "pt-u14l4-primeiro", type: "vocab", front: "primeiro", reading: "primeiro", meaning: "first", example: { jp: "Domingo é o primeiro dia da semana.", en: "Sunday is the first day of the week." }, accept: ["1st", "the first", "foremost"], hint: "pri-MAY-ru; feminine primeira. Ordinals agree like any other adjective, and they are written 1.º and 1.ª with that little raised circle. This is why segunda-feira is the SECOND day — Unit 9's whole system rests on domingo being the first." },
      ],
    },
  ],
};
