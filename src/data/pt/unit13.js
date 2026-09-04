// PT Unit 13 — Os verbos e os pronomes — A1 (slot: grammar-2, retitled)
// ─────────────────────────────────────────────────────────────────────────────
// SLOT RETHEME. The scaffold called this "Grammar 2 — verbs and particles".
// Portuguese has no particles; that title names a Japanese slot. Per CLAUDE.md →
// "No front language", the band sets the level and the language sets the
// content, so the slot becomes what Portuguese actually needs second:
//   L1  the -ar family, the biggest by far, through falar (u3).
//   L2  the -er and -ir families side by side — because in the present they are
//       identical except for the nós form, and seeing that is worth more than
//       two separate paradigms.
//   L3  the four irregulars a beginner cannot avoid: ter, ir, fazer, haver.
//       All four were headworded in block 1 as infinitives (or, for haver, not
//       at all); this is where they conjugate.
//   L4  the object pronouns, THE ENCLISIS RULE, and estar a + infinitive.
//
// ENCLISIS. Block 1 taught chamo-me as a fixed chunk in u3l1 and said the rule
// belonged here. It is this: in an ordinary affirmative main clause Portugal
// hangs the pronoun on the BACK of the verb with a hyphen — chamo-me, dói-me,
// chama-se. Brazil fronts it — "me chamo" — and that one difference identifies a
// speaker faster than any accent. But the pronoun jumps back in front after não,
// after a question word, and after words like já, sempre and também: não ME
// chamo, onde SE senta. Every card in L4 carries a piece of that.
//
// PROGRESSIVE. European Portuguese says estar A + INFINITIVE — estou a comer —
// and does not use the gerund for this at all. "Estou comendo" is Brazilian and
// is wrong here. Block 1 never opened the construction; L4 opens it.
//
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT13 = {
  id: "pt-u13",
  lang: "pt",
  title: "Os verbos e os pronomes",
  order: 13,
  stage: "a1",
  lessons: [
    // Lesson 1: -ar, through falar. Five endings and one new verb to try them on.
    {
      id: "pt-u13l1",
      unit: 13,
      lesson: 1,
      title: "Os verbos em -ar",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Conjugate any regular -ar verb in the present — the biggest verb family in Portuguese — and say who is doing what without needing the pronoun.",
      items: [
        { id: "pt-u13l1-falo", type: "vocab", front: "falo", reading: "falo", meaning: "I speak", example: { jp: "Falo português e inglês.", en: "I speak Portuguese and English." }, accept: ["i talk", "i am speaking", "i do speak", "speak"], hint: "falar minus -ar, plus -o. EVERY regular -ar verb does this, and there are thousands: trabalho, estudo, gosto. The -o ending is so clearly \"I\" that the eu in front is almost always dropped." },
        { id: "pt-u13l1-falas", type: "vocab", front: "falas", reading: "falas", meaning: "you speak", example: { jp: "Falas inglês?", en: "Do you speak English?" }, accept: ["you talk", "do you speak", "you are speaking"], hint: "The tu ending is -as. This is the informal you from Unit 2 — with a stranger you would use fala instead, the next card, because o senhor and você take the third person. Portuguese asks questions by intonation alone: no extra word, just the question mark." },
        { id: "pt-u13l1-fala", type: "vocab", front: "fala", reading: "fala", meaning: "he speaks", example: { jp: "Ela fala muito bem.", en: "She speaks very well." }, accept: ["she speaks", "it speaks", "you speak (polite)", "speaks"], hint: "The -a ending is the hardest-working form in the language: he, she, it AND the polite you — o senhor fala inglês? One form, four subjects, which is why the pronoun matters more here than anywhere else." },
        { id: "pt-u13l1-falamos", type: "vocab", front: "falamos", reading: "falamos", meaning: "we speak", example: { jp: "Nós falamos português em casa.", en: "We speak Portuguese at home." }, accept: ["we talk", "we are speaking", "were speaking"], hint: "-amos, always stressed on the a. In Portugal this form has a past twin spelt with an accent — falámos, we spoke — and Unit 14 comes back to it. Brazil dropped that accent; Portugal keeps it because the two vowels genuinely sound different." },
        { id: "pt-u13l1-falam", type: "vocab", front: "falam", reading: "falam", meaning: "they speak", example: { jp: "Eles falam inglês no trabalho.", en: "They speak English at work." }, accept: ["you speak (plural)", "they talk", "they are speaking"], hint: "-am, nasal, and it covers eles, elas AND vocês. That is the whole paradigm: -o, -as, -a, -amos, -am. Five endings, one family, most of the verbs in the dictionary." },
        { id: "pt-u13l1-trabalhar", type: "vocab", front: "trabalhar", reading: "trabalhar", meaning: "to work", example: { jp: "Trabalhar em Lisboa é bom.", en: "Working in Lisbon is good." }, accept: ["work", "to labour", "to labor"], hint: "The verb behind o trabalho, the noun from Unit 1 — tra-ba-LYAR, with the lh. Regular -ar, so you already know it: trabalho, trabalhas, trabalha, trabalhamos, trabalham. Note trabalho is both \"the work\" and \"I work\"." },
      ],
    },
    // Lesson 2: -er and -ir together, because that is the honest picture. `como`
    // is the language's most notorious homograph and gets the biggest hint.
    {
      id: "pt-u13l2",
      unit: 13,
      lesson: 2,
      title: "Os verbos em -er e -ir",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Conjugate the other two verb families — and see that in the present they differ in exactly one form, so learning the second one is nearly free.",
      items: [
        { id: "pt-u13l2-como", type: "vocab", front: "como", reading: "como", meaning: "I eat", example: { jp: "Como pão ao pequeno-almoço.", en: "I eat bread for breakfast." }, accept: ["i am eating", "i do eat", "eat"], hint: "comer minus -er, plus -o. And yes — it is spelt exactly like the como of como estás, Unit 2, which means \"how\". Same letters, two unrelated words: Como? Como pão. Portuguese lets context sort it out and so must you." },
        { id: "pt-u13l2-comes", type: "vocab", front: "comes", reading: "comes", meaning: "you eat", example: { jp: "Comes carne?", en: "Do you eat meat?" }, accept: ["you are eating", "do you eat"], hint: "The -er family's tu ending is -es, where -ar had -as. That single vowel is most of what separates the two families, so it is worth over-pronouncing while you learn: falAs, comEs." },
        { id: "pt-u13l2-come", type: "vocab", front: "come", reading: "come", meaning: "he eats", example: { jp: "Ele come muito.", en: "He eats a lot." }, accept: ["she eats", "you eat (polite)", "eats", "it eats"], hint: "-e for he, she, it and the polite you. Full -er paradigm: -o, -es, -e, -emos, -em. Beber from Unit 6 runs the same way — bebo, bebes, bebe." },
        { id: "pt-u13l2-abrir", type: "vocab", front: "abrir", reading: "abrir", meaning: "to open", example: { jp: "Abrir a loja é o trabalho de Ana.", en: "Opening the shop is Ana's work." }, accept: ["open", "to open up", "to unlock"], hint: "a-BREER — and this one is the third family, -ir. Portugal writes ABERTO on the open door and FECHADO on the closed one, from this verb and from fechar. Fully regular: abro, abres, abre, abrimos, abrem." },
        { id: "pt-u13l2-abro", type: "vocab", front: "abro", reading: "abro", meaning: "I open", example: { jp: "Abro a loja às nove.", en: "I open the shop at nine." }, accept: ["im opening", "i am opening", "i unlock", "open"], hint: "-o for eu, exactly as in falo and como. All three families agree completely on the eu form, which is the one piece of Portuguese conjugation that gives itself away for free. Às nove is a + as from Unit 12: that is how clock times are built." },
        { id: "pt-u13l2-abre", type: "vocab", front: "abre", reading: "abre", meaning: "he opens", example: { jp: "A farmácia abre às oito.", en: "The pharmacy opens at eight." }, accept: ["she opens", "it opens", "you open (polite)", "opens"], hint: "HERE IS THE POINT OF THE LESSON: -ir takes -o, -es, -e, -em — the same four endings as -er. Only the nós form differs, comEmos against abrImos. Learn one family and you have most of the other; viver, from Unit 4, is an -er verb and runs exactly like comer." },
      ],
    },
    // Lesson 3: the four irregulars there is no way around. ter, ir and fazer
    // were headworded in block 1; haver was not, and `há` is genuinely missing
    // from the corpus until here.
    {
      id: "pt-u13l3",
      unit: 13,
      lesson: 3,
      title: "Ter, ir, fazer e haver",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the four irregular verbs that carry half of everyday Portuguese — have, go, do and there is — in the forms you need most.",
      items: [
        { id: "pt-u13l3-tenho", type: "vocab", front: "tenho", reading: "tenho", meaning: "I have", example: { jp: "Tenho um irmão e uma irmã.", en: "I have a brother and a sister." }, accept: ["ive got", "i have got", "i own", "have"], hint: "TE-nyu, with the nh. From ter, Unit 3. The whole set: tenho, tens, tem, temos, têm — and note têm, the plural, is spelt with a circumflex to keep it apart from tem. Portuguese uses ter where English uses \"to be\" for age, hunger, cold: tenho frio." },
        { id: "pt-u13l3-tem", type: "vocab", front: "tem", reading: "tem", meaning: "he has", example: { jp: "Ela tem vinte anos.", en: "She is twenty years old." }, accept: ["she has", "you have (polite)", "has", "it has"], hint: "TENG, nasal. You met tens inside quantos anos tens, Unit 3 — this is the same verb for the third person. The example is the rule Portuguese makes you follow: you HAVE twenty years, you are not twenty." },
        { id: "pt-u13l3-vou", type: "vocab", front: "vou", reading: "vou", meaning: "I go", example: { jp: "Vou ao mercado.", en: "I'm going to the market." }, accept: ["im going", "i am going", "i will go", "go"], hint: "VOH. From ir, Unit 7 — the two letters that turn into vou, vais, vai, vamos, vão. It is also how Portuguese does the near future: vou comer, I'm going to eat. Vamos! on its own means let's go." },
        { id: "pt-u13l3-vai", type: "vocab", front: "vai", reading: "vai", meaning: "he goes", example: { jp: "Ele vai à escola de autocarro.", en: "He goes to school by bus." }, accept: ["she goes", "you go (polite)", "goes", "is going"], hint: "VY. Note both little words doing work here: à is a + a from Unit 12, and de autocarro is how you say by bus — Unit 7 taught that de, not em, marks the means of transport." },
        { id: "pt-u13l3-faco", type: "vocab", front: "faço", reading: "faco", meaning: "I do", example: { jp: "Faço o jantar hoje.", en: "I'm making dinner today." }, accept: ["i make", "im making", "i am doing", "do", "make"], hint: "FA-su — the cedilla is there because a plain c before o would go hard. From fazer, Unit 3: faço, fazes, faz, fazemos, fazem. One verb for do AND make, and it is also the weather verb from Unit 8: faz frio." },
        { id: "pt-u13l3-ha", type: "vocab", front: "há", reading: "ha", meaning: "there is", example: { jp: "Há uma farmácia na rua.", en: "There's a pharmacy on the street." }, accept: ["there are", "there's", "theres", "it exists"], hint: "Said just \"ah\" — the h is silent, as it always is. From haver, and it NEVER changes for number: há um livro, há dois livros. It also does \"ago\": há dois anos, two years ago." },
      ],
    },
    // Lesson 4: the clitics, the rule that positions them, and estar a. This is
    // the single most Portugal-vs-Brazil lesson in the whole band.
    {
      id: "pt-u13l4",
      unit: 13,
      lesson: 4,
      title: "Os pronomes e \"estar a\"",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Attach the little object pronouns where Portugal puts them — on the back of the verb — and say what you are doing right now the European way.",
      items: [
        { id: "pt-u13l4-me", type: "vocab", front: "me", reading: "me", meaning: "me", example: { jp: "Ela chama-me Tiago.", en: "She calls me Tiago." }, accept: ["to me", "myself", "for me"], hint: "THE RULE, at last. In an ordinary affirmative sentence the pronoun goes AFTER the verb with a hyphen — chama-me, dói-me, chamo-me from Unit 3. Brazil puts it in front, me chama. But say não first and Portuguese moves it too: não me chama." },
        { id: "pt-u13l4-te", type: "vocab", front: "te", reading: "te", meaning: "you", example: { jp: "Chamo-te amanhã.", en: "I'll call you tomorrow." }, accept: ["to you", "yourself", "for you"], hint: "The object form of tu, Unit 2. Same hyphen rule. Three things pull it back in front of the verb: não, a question word, and words like já, sempre, também — onde te chamas is wrong, but ONDE te vejo is right." },
        { id: "pt-u13l4-se", type: "vocab", front: "se", reading: "se", meaning: "himself", example: { jp: "Ele chama-se Pedro.", en: "He is called Pedro." }, accept: ["herself", "themselves", "oneself", "itself", "yourself"], hint: "The busiest pronoun in the language. Reflexive for he, she, they and the polite you — and it is the -se you will see on every verb in a dictionary: chamar-se, sentar-se, levantar-se. Como se diz? is how you ask \"how do you say…?\"" },
        { id: "pt-u13l4-lhe", type: "vocab", front: "lhe", reading: "lhe", meaning: "to him", example: { jp: "Ela fala-lhe em português.", en: "She speaks to him in Portuguese." }, accept: ["to her", "to you", "him", "her", "for him"], hint: "LYE, with the lh from Unit 1. The INDIRECT object — to him, to her, to you-polite — where o and a are the direct one. Plural lhes. Portuguese leans on it hard: dizer-lhe, dar-lhe, perguntar-lhe." },
        { id: "pt-u13l4-estouafalar", type: "vocab", front: "estou a falar", reading: "estouafalar", meaning: "I am speaking", example: { jp: "Estou a falar com Ana.", en: "I'm speaking with Ana." }, accept: ["im speaking", "i am talking", "im talking right now"], hint: "PORTUGAL SAYS ESTAR A + INFINITIVE. estou a falar, estás a comer, está a chover. Brazil uses the gerund — \"estou falando\" — and that form is simply not used here. Build it with any verb: estou a estudar, estamos a trabalhar." },
        { id: "pt-u13l4-oqueestasafazer", type: "vocab", front: "o que estás a fazer", reading: "oqueestasafazer", meaning: "what are you doing", example: { jp: "O que estás a fazer agora?", en: "What are you doing now?" }, accept: ["what are you up to", "whatre you doing", "what you doing"], hint: "The question you will hear most often, and the same estar a from the card before. O que is \"what\" — in fast speech it collapses to just que, or even to Tás a fazer o quê?, which is what you will actually hear on the street." },
      ],
    },
  ],
};
