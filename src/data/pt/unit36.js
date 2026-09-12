// PT Unit 36 — O imperfeito e as orações — A2 (slot: grammar-4, retitled)
// ─────────────────────────────────────────────────────────────────────────────
// SLOT RETHEME. The scaffold called this "Grammar 4 — compound and linked
// clauses". Portuguese does need clause-linking at A2, but block 1's u29 (as
// palavras de ligação) already owns the CONNECTORS themselves — mas, ou, então,
// portanto, pois, porque, além disso, no entanto, por isso, do que, tão, tanto.
// Re-teaching those would be a straight duplicate. What is genuinely missing, and
// what A1 never opened, is the OTHER PAST TENSE.
//
// A1's u14 taught the pretérito perfeito and nothing else, so a learner leaving
// A1 can say "ontem falei" and cannot say "quando era criança falava". That is
// the single largest hole in the language's grammar, and this unit is it:
//   L1  the six irregular imperfects, which carry most of the tense's traffic.
//   L2  the regular pattern on all three families, plus costumava.
//   L3  the words that CHOOSE the tense for you — de repente pulls perfeito,
//       enquanto and sempre que pull imperfeito. Taught as signals, not rules.
//   L4  the que-clause, which is the honest reading of "linked clauses" once the
//       connectors are gone: the five verbs that introduce one.
//
// TENSE FORMS AS FRONTS. era, estava, tinha, havia, fazia, ia, falava, comia and
// abria are all conjugated forms of verbs A1 already headworded. A stem probe
// flags every one against its infinitive and against its perfeito twin (era/foi,
// tinha/tive, fazia/fiz). They are not duplicates — a tense unit IS its forms,
// exactly as A1's u13 and u14 were. See those units' headers for the precedent.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT36 = {
  id: "pt-u36",
  lang: "pt",
  title: "O imperfeito e as orações",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "pt-u36l1",
      unit: 36,
      lesson: 1,
      title: "O imperfeito irregular",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe how things used to be — what there was, what you had, what the weather did — using the past tense A1 never gave you.",
      items: [
        { id: "pt-u36l1-era", type: "vocab", front: "era", reading: "era", meaning: "was", example: { jp: "Antigamente o trabalho era mais difícil, mas as pessoas achavam que era mais tranquilo.", en: "In the old days work was harder, but people thought it was more peaceful." }, drill: { jp: "Antigamente o trabalho era difícil", en: "In the old days work was hard" }, accept: ["used to be", "it was", "i was", "he was", "she was"], hint: "THE IMPERFECT: the past that was still going on, had no clear end, or happened over and over. From ser. Compare with foi, Unit 14: ontem FOI domingo is one finished day; quando eu ERA criança is a whole open stretch of years. eu era and ele era are identical." },
        { id: "pt-u36l1-estava", type: "vocab", front: "estava", reading: "estava", meaning: "was (state)", example: { jp: "Ontem eu estava muito cansado, por isso fui para casa mais cedo.", en: "Yesterday I was very tired, so I went home earlier." }, drill: { jp: "Ontem eu estava muito cansado", en: "Yesterday I was very tired" }, accept: ["i was", "he was", "she was", "was", "used to be"], hint: "The imperfect of estar, and the ser/estar split from Unit 12 survives into the past intact: eu ERA médico is what I was, eu ESTAVA cansado is how I felt. estava is far and away the commoner of the two in speech." },
        { id: "pt-u36l1-tinha", type: "vocab", front: "tinha", reading: "tinha", meaning: "had", example: { jp: "Quando era criança tinha um cão que dormia sempre na cozinha.", en: "When I was a child I had a dog that always slept in the kitchen." }, drill: { jp: "Quando era criança tinha um cão", en: "When I was a child I had a dog" }, accept: ["i had", "he had", "she had", "used to have"], hint: "TEE-nya, from ter. Also the auxiliary for the past-of-the-past: eu tinha comido, I had eaten — but that is A2+ and this card is the plain \"had\". Note tinha does the work of both eu and ele, like every imperfect." },
        { id: "pt-u36l1-havia", type: "vocab", front: "havia", reading: "havia", meaning: "there was", example: { jp: "Antes não havia internet em casa e as pessoas não achavam isso estranho.", en: "Before there was no internet at home and people didn't find that strange." }, drill: { jp: "Antes não havia internet em casa", en: "Before there was no internet at home" }, accept: ["there were", "used to be", "there used to be"], hint: "a-VEE-a, silent h. The imperfect of the há you learned in Unit 13, and like há it NEVER changes for number: havia um livro, havia dois livros. In speech Portugal often says tinha instead — não tinha internet — which is looser but very common." },
        { id: "pt-u36l1-fazia", type: "vocab", front: "fazia", reading: "fazia", meaning: "did", example: { jp: "No inverno fazia sempre muito frio naquela casa, porque não havia aquecimento.", en: "In winter it was always very cold in that house, because there was no heating." }, drill: { jp: "No inverno fazia sempre muito frio", en: "In winter it was always very cold" }, accept: ["made", "used to do", "used to make", "he did"], hint: "From fazer. It carries the weather into the past, exactly as faz does in the present — Unit 8 taught faz frio, and this is the same sentence a decade earlier. Do not confuse it with fez, Unit 14, which is one finished act of doing." },
        { id: "pt-u36l1-ia", type: "vocab", front: "ia", reading: "ia", meaning: "used to go", example: { jp: "Ele ia à escola de comboio todos os dias, e nunca chegava atrasado.", en: "He used to go to school by train every day, and never arrived late." }, drill: { jp: "Ele ia à escola de comboio", en: "He used to go to school by train" }, accept: ["was going", "i went", "he went", "would go"], hint: "EE-a, two syllables, from ir. The shortest verb form in the language and one of the most used. Ia + infinitive is also \"was going to\": eu ia dizer isso, I was going to say that." },
      ],
    },
    {
      id: "pt-u36l2",
      unit: 36,
      lesson: 2,
      title: "O imperfeito regular",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Put any regular verb into the imperfect — the endings are only two sets — and say what you used to do habitually.",
      items: [
        { id: "pt-u36l2-falava", type: "vocab", front: "falava", reading: "falava", meaning: "used to speak", example: { jp: "Em criança falava sempre português em casa, mas na escola falava inglês.", en: "As a child I always spoke Portuguese at home, but at school I spoke English." }, drill: { jp: "Em criança falava sempre português", en: "As a child I always spoke Portuguese" }, accept: ["was speaking", "i spoke", "he spoke", "would speak"], hint: "-AR VERBS TAKE -ava: falava, falavas, falava, falávamos, falavam. That is the whole pattern and it has no exceptions at all — every single -ar verb in Portuguese does this, which makes the imperfect far easier than the perfeito you learned in Unit 14." },
        { id: "pt-u36l2-comia", type: "vocab", front: "comia", reading: "comia", meaning: "used to eat", example: { jp: "Ao domingo comia sempre em casa dos avós, e a mesa nunca tinha menos de dez pessoas.", en: "On Sundays I always ate at my grandparents' house, and the table never had fewer than ten people." }, drill: { jp: "Ao domingo comia sempre em casa", en: "On Sundays I always ate at home" }, accept: ["was eating", "i ate", "he ate", "would eat"], hint: "-ER AND -IR VERBS BOTH TAKE -ia: comia, comias, comia, comíamos, comiam. So the two families that Unit 13 showed you were nearly identical in the present are COMPLETELY identical here — two endings for the whole language, -ava and -ia." },
        { id: "pt-u36l2-abria", type: "vocab", front: "abria", reading: "abria", meaning: "used to open", example: { jp: "A loja abria às oito da manhã, e ao sábado abria ainda mais cedo.", en: "The shop used to open at eight in the morning, and on Saturdays it opened even earlier." }, drill: { jp: "A loja abria às oito da manhã", en: "The shop used to open at eight in the morning" }, accept: ["was opening", "it opened", "would open", "used to be open"], hint: "abrir is -ir and takes -ia, exactly like comer — that is the point of putting them side by side. Compare abriu from Unit 14: abriu is the one morning it opened, abria is every morning for years." },
        { id: "pt-u36l2-costumava", type: "vocab", front: "costumava", reading: "costumava", meaning: "used to", example: { jp: "Ele costumava ler antes de dormir, mas agora adormece com a televisão.", en: "He used to read before sleeping, but now he falls asleep with the television on." }, drill: { jp: "Ele costumava ler todas as noites", en: "He used to read every night" }, accept: ["would", "was in the habit of", "usually did"], hint: "kush-tu-MA-va, from costumar. THE cleanest way to say \"used to\" when you want it unmistakable — costumava + infinitive. The imperfect alone already means it, so costumava ia would be wrong; it is costumava IR." },
        { id: "pt-u36l2-antigamente", type: "vocab", front: "antigamente", reading: "antigamente", meaning: "in the old days", example: { jp: "Antigamente não havia telemóveis e as pessoas combinavam o encontro numa carta.", en: "In the old days there were no mobile phones and people arranged the meeting in a letter." }, drill: { jp: "Antigamente não havia telemóveis", en: "In the old days there were no mobile phones" }, accept: ["formerly", "once", "in the past", "back then"], hint: "an-ti-ga-MEN-te, from antigo, old. It is a flag for the imperfect: start a sentence with antigamente and the verb that follows is almost always -ava or -ia. Dantes is the shorter everyday alternative." },
        { id: "pt-u36l2-naqueletempo", type: "vocab", front: "naquele tempo", reading: "naqueletempo", meaning: "at that time", example: { jp: "Naquele tempo o trabalho era difícil, mas todos achavam que era mais tranquilo.", en: "At that time work was hard, but everyone thought it was more peaceful." }, drill: { jp: "Naquele tempo as escolas eram pequenas", en: "At that time the schools were small" }, accept: ["back then", "in those days", "at the time"], hint: "Watch the contraction hiding in it: em + aquele = naquele, the same fusion Unit 12 taught for em + o = no. Portuguese contracts em with the demonstratives too — neste, nesse, naquele — and it is never optional." },
      ],
    },
    {
      id: "pt-u36l3",
      unit: 36,
      lesson: 3,
      title: "Perfeito ou imperfeito",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Choose between the two past tenses by hearing the signal word, instead of guessing at the rule each time.",
      items: [
        { id: "pt-u36l3-derepente", type: "vocab", front: "de repente", reading: "derepente", meaning: "suddenly", example: { jp: "Estava um dia tranquilo e de repente ele ficou doente e chamámos o médico.", en: "It was a quiet day and suddenly he became ill and we called the doctor." }, drill: { jp: "De repente ele ficou doente", en: "Suddenly he became ill" }, accept: ["all of a sudden", "abruptly", "out of nowhere"], hint: "A PERFEITO SIGNAL. De repente marks the one moment that broke the background — so the verb after it is almost always the tense from Unit 14, not the imperfect. The classic Portuguese sentence shape puts both in: estava… e de repente…" },
        { id: "pt-u36l3-enquanto", type: "vocab", front: "enquanto", reading: "enquanto", meaning: "while", example: { jp: "Enquanto comia ouvia as notícias na rádio, o que a minha mãe achava muito mal-educado.", en: "While I ate I listened to the news on the radio, which my mother thought was very rude." }, drill: { jp: "Enquanto comia ouvia as notícias", en: "While I ate I listened to the news" }, accept: ["whilst", "as", "meanwhile", "as long as"], hint: "en-KWAN-tu. AN IMPERFEITO SIGNAL, and usually on both sides of it — two things going on at once are both unfinished. Por enquanto means \"for now\", which is a different job worth keeping apart." },
        { id: "pt-u36l3-sempreque", type: "vocab", front: "sempre que", reading: "sempreque", meaning: "whenever", example: { jp: "Sempre que ia à praia era feliz, e nunca queria voltar para casa.", en: "Whenever I went to the beach I was happy, and never wanted to go back home." }, drill: { jp: "Sempre que ia à praia era feliz", en: "Whenever I went to the beach I was happy" }, accept: ["every time", "each time", "any time"], hint: "Built from sempre, Unit 5, plus que — and the repetition is exactly why it pulls the imperfect. Compare quando, which is neutral and takes either tense depending on whether you mean once or always." },
        { id: "pt-u36l3-devezemquando", type: "vocab", front: "de vez em quando", reading: "devezemquando", meaning: "from time to time", example: { jp: "De vez em quando ia ao teatro, mas nunca comprava o bilhete antes.", en: "From time to time I went to the theatre, but I never bought the ticket beforehand." }, drill: { jp: "De vez em quando ia ao teatro", en: "From time to time I went to the theatre" }, accept: ["now and then", "occasionally", "sometimes", "every so often"], hint: "Four words, learned as one. Another imperfeito signal — anything repeated but irregular. Block 1's u28 teaches às vezes, which means much the same; de vez em quando is a touch rarer and a touch warmer." },
        { id: "pt-u36l3-assimque", type: "vocab", front: "assim que", reading: "assimque", meaning: "as soon as", example: { jp: "Assim que chegou foi para casa, e não falou com os colegas do escritório.", en: "As soon as he arrived he went home, and didn't speak to his colleagues at the office." }, drill: { jp: "Assim que chegou foi para casa", en: "As soon as he arrived he went home" }, accept: ["the moment", "once", "immediately when"], hint: "A PERFEITO SIGNAL, like de repente — one thing finishing and the next starting. Assim on its own means \"like this\": é assim que se faz. About the future it takes the subjunctive, which is B1 work: assim que chegares." },
        { id: "pt-u36l3-durante", type: "vocab", front: "durante", reading: "durante", meaning: "during", example: { jp: "Durante o inverno ficava sempre doente, por isso a médica disse-me para tomar mais cuidado.", en: "During the winter I was always ill, so the doctor told me to take more care." }, drill: { jp: "Durante o inverno ficava sempre doente", en: "During the winter I was always ill" }, accept: ["for", "throughout", "in the course of"], hint: "du-RAN-te, from durar, which block 1 teaches in u28. It takes a NOUN, never a clause — durante o inverno, but enquanto era inverno. English uses \"during\" and \"while\" the same way, so the split maps cleanly." },
      ],
    },
    {
      id: "pt-u36l4",
      unit: 36,
      lesson: 4,
      title: "As orações com que",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Join two clauses with que and report what somebody said, knew, thought or asked.",
      items: [
        { id: "pt-u36l4-que", type: "vocab", front: "que", reading: "que", meaning: "that", example: { jp: "Ele disse que estava doente, mas eu sei que estava apenas cansado.", en: "He said that he was ill, but I know he was just tired." }, drill: { jp: "Ele disse que estava doente", en: "He said that he was ill" }, accept: ["which", "who", "than", "what"], hint: "THE most-used word in Portuguese, and unlike English \"that\" it is NEVER optional: ele disse QUE estava doente, never \"ele disse estava\". It also does which and who in relative clauses — o homem que mora aqui — and appears inside do que, o que and porque." },
        { id: "pt-u36l4-dizer", type: "vocab", front: "dizer", reading: "dizer", meaning: "to say", example: { jp: "Dizer isso não foi bom, porque ele contou o caso ao chefe no dia a seguir.", en: "Saying that was not good, because he told the boss about the case the day after." }, drill: { jp: "Dizer isso não foi bom", en: "Saying that was not good" }, accept: ["say", "to tell", "to speak"], hint: "di-ZER, and wildly irregular: digo, dizes, diz; past disse, disseste, disse. Say versus tell splits differently from English — dizer ALGUMA COISA A ALGUÉM, so it is disse-lhe, with the lhe from Unit 13. Querer dizer means \"to mean\"." },
        { id: "pt-u36l4-saber", type: "vocab", front: "saber", reading: "saber", meaning: "to know", example: { jp: "Saber falar português é importante se queres trabalhar aqui, dizem os chefes.", en: "Knowing how to speak Portuguese is important if you want to work here, the bosses say." }, drill: { jp: "Saber falar português é importante", en: "Knowing how to speak Portuguese is important" }, accept: ["know", "to know how", "to find out", "to taste"], hint: "sa-BER; eu form is irregular, sei. TWO KNOWS: saber is knowing a fact or a skill, conhecer (Unit 39) is knowing a person or a place. Saber + infinitive is \"know how to\": sei nadar. It also means to taste — sabe bem." },
        { id: "pt-u36l4-achar", type: "vocab", front: "achar", reading: "achar", meaning: "to think", example: { jp: "Achar que sim não é saber, e por isso é melhor perguntar ao professor.", en: "Thinking so is not knowing, and so it is better to ask the teacher." }, drill: { jp: "Achar que sim não é saber", en: "Thinking so is not knowing" }, accept: ["think", "to find", "to reckon", "to consider"], hint: "a-SHAR. THE everyday \"I think\" in Portugal — acho que sim, acho que não — far more common than pensar for an opinion. Its literal meaning is to find: achei as chaves. Block 1's u24 teaches a opinião, the noun beside it." },
        { id: "pt-u36l4-contar", type: "vocab", front: "contar", reading: "contar", meaning: "to tell", example: { jp: "Contar um conto às crianças antes de dormir era o que o avô fazia à noite.", en: "Telling the children a story before bed was what grandfather did at night." }, drill: { jp: "Contar um conto às crianças", en: "Telling the children a story" }, accept: ["tell", "to count", "to recount", "to narrate"], hint: "kon-TAR. TWO jobs from one idea: to tell a story and to count numbers — the same doubling English once had in \"recount\". Contar COM alguém is to rely on them. O conto, Unit 35, is what you tell." },
        { id: "pt-u36l4-perguntar", type: "vocab", front: "perguntar", reading: "perguntar", meaning: "to ask", example: { jp: "Perguntar ao professor é melhor do que ficar com a dúvida até ao exame.", en: "Asking the teacher is better than sitting with the doubt until the exam." }, drill: { jp: "Perguntar ao professor é melhor", en: "Asking the teacher is better" }, accept: ["ask", "to enquire", "to question"], hint: "per-gun-TAR. Ask a QUESTION only — asking FOR something is pedir, which Unit 38 teaches in the restaurant. A1's u17 has a pergunta, the noun. Perguntar POR alguém is to ask after them." },
      ],
    },
  ],
};
