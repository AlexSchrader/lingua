// PT Unit 17 — A escola e a universidade (slot: coverage-3) — A1
// The education slot, and the one block 3 was told to site a propina in.
// Unit 3 gave the learner o estudante, o professor and estudar; Unit 7 gave
// a escola as a building. Nothing yet describes what happens inside one.
//
// THREE SPANISH TRAPS ARE CARDED HERE, which is why this unit carries them
// rather than a thematic unit that would have had to reach for them:
//   · a propina  (u17l4) — PORTUGAL: university TUITION FEE. SPAIN: a tip.
//                 BRAZIL: a bribe. A three-way trap, and the best single
//                 false-friend card in the language. Reserved for block 3 by
//                 the block brief and by the unit1.js header.
//   · a borracha (u17l2) — PT: rubber / eraser. ES borracha: DRUNK.
//   · a pasta    (u17l2) — PT: folder, file, briefcase. ES pasta: pasta/dough/
//                 money. Portuguese for the food is massa.
//   · a pergunta (u17l1) is the quieter one: ES pregunta reverses the r and e,
//     and reversing it back is the single commonest Spanish-speaker slip.
// pt-PT marker: a secretária = the DESK (Brazil: a escrivaninha).
//
// a disciplina and a cadeira both mean a subject; a cadeira was taught in
// Unit 15 as the chair, so the hint here links the two senses rather than
// spending a second card on the word.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT17 = {
  id: "pt-u17",
  lang: "pt",
  title: "A escola e a universidade",
  order: 17,
  stage: "a1",
  lessons: [
    {
      id: "pt-u17l1",
      unit: 17,
      lesson: 1,
      title: "Na sala de aula",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Follow a Portuguese class — name the lesson and the group it is taught to, and ask and answer a question in it.",
      items: [
        { id: "pt-u17l1-aaula", type: "vocab", front: "a aula", reading: "aaula", meaning: "lesson", example: { jp: "A aula de português é às nove.", en: "The Portuguese lesson is at nine." }, accept: ["the lesson", "class", "the class"], hint: "OW-la, au said as one glide. It is the LESSON — the hour — not the room. The room is uma sala de aula, built on a sala from Unit 15. Note a + as fusing into às before a time." },
        { id: "pt-u17l1-aturma", type: "vocab", front: "a turma", reading: "aturma", meaning: "class group", example: { jp: "A turma de Ana é enorme.", en: "Ana's class is enormous." }, accept: ["the class group", "class", "the group", "form", "the class"], hint: "TUR-ma. The other half of English \"class\": a turma is the GROUP of pupils, a aula is the hour they spend together. Portuguese schools label them 7.º A, 7.º B — each one uma turma." },
        { id: "pt-u17l1-aprender", type: "vocab", front: "aprender", reading: "aprender", meaning: "to learn", example: { jp: "Aprender português é fantástico.", en: "Learning Portuguese is fantastic." }, accept: ["learn", "to study", "to pick up"], hint: "a-pren-DER: aprendo, aprendes, aprende — a second-conjugation verb like comer from Unit 6. To learn TO do something inserts a: aprender a falar." },
        { id: "pt-u17l1-ensinar", type: "vocab", front: "ensinar", reading: "ensinar", meaning: "to teach", example: { jp: "O professor de Ana ensina português.", en: "Ana's teacher teaches Portuguese." }, accept: ["teach", "to instruct", "instruct"], hint: "en-si-NAR, nasal first syllable. The other side of aprender. Its root runs through o ensino (education) and o ensino secundário, which is what Portugal calls secondary school." },
        { id: "pt-u17l1-apergunta", type: "vocab", front: "a pergunta", reading: "apergunta", meaning: "question", example: { jp: "A pergunta de Tiago é importante.", en: "Tiago's question is important." }, accept: ["the question", "query"], hint: "per-GUN-ta; the verb is perguntar, to ask. WATCH SPANISH: it is pregunta there and pergunta here — the r and the e trade places, and putting them back the Spanish way is the commonest slip a Spanish speaker makes in Portuguese." },
        { id: "pt-u17l1-aresposta", type: "vocab", front: "a resposta", reading: "aresposta", meaning: "answer", example: { jp: "A resposta não é sim, é não.", en: "The answer isn't yes, it's no." }, accept: ["the answer", "reply", "response"], hint: "resh-POSH-ta, with two shushing s sounds. The verb is responder. Answering the PHONE is a different verb again — atender, not responder." },
      ],
    },
    {
      id: "pt-u17l2",
      unit: 17,
      lesson: 2,
      title: "O material escolar",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name what is in a Portuguese pupil's bag — including two words that mean something completely different in Spanish.",
      items: [
        { id: "pt-u17l2-ocaderno", type: "vocab", front: "o caderno", reading: "ocaderno", meaning: "notebook", example: { jp: "O caderno é da aula de português.", en: "The notebook is for the Portuguese lesson." }, accept: ["the notebook", "exercise book", "workbook", "jotter"], hint: "ka-DER-nu. The school exercise book. Spanish cuaderno is the same word with a different vowel — Portuguese flattened Latin's qua- to ca- where Spanish kept it." },
        { id: "pt-u17l2-olapis", type: "vocab", front: "o lápis", reading: "olapis", meaning: "pencil", example: { jp: "O lápis é de Tiago.", en: "The pencil is Tiago's." }, accept: ["the pencil"], hint: "LA-pish. It already ends in s and does NOT change in the plural — um lápis, dois lápis — so the article carries the whole difference. A pen is a caneta, coming next." },
        { id: "pt-u17l2-acaneta", type: "vocab", front: "a caneta", reading: "acaneta", meaning: "pen", example: { jp: "A caneta e o lápis são da mochila de Ana.", en: "The pen and the pencil are from Ana's backpack." }, accept: ["the pen", "biro", "ballpoint"], hint: "ka-NE-ta. Nothing at all like Spanish bolígrafo, so there is no shortcut — learn it outright. In full a biro is uma caneta esferográfica, which nobody ever says." },
        { id: "pt-u17l2-aborracha", type: "vocab", front: "a borracha", reading: "aborracha", meaning: "rubber", example: { jp: "A borracha e o lápis são de Ana.", en: "The rubber and the pencil are Ana's." }, accept: ["the rubber", "eraser", "the eraser"], hint: "SPANISH TRAP. bu-RRA-sha. In Portuguese it is rubber the material and the eraser made of it. In SPANISH borracha means DRUNK — so asking a Spanish speaker for una borracha in class lands very differently. Portugal also calls the eraser uma goma." },
        { id: "pt-u17l2-apasta", type: "vocab", front: "a pasta", reading: "apasta", meaning: "folder", example: { jp: "A pasta de Tiago é da universidade.", en: "Tiago's folder is from the university." }, accept: ["the folder", "file", "briefcase", "the file"], hint: "SPANISH TRAP. PASH-ta. Here it is a folder, a file or a briefcase — whatever you carry papers in, and the same word your computer uses for a folder. Spanish pasta is pasta, dough, or slang for money; Portuguese for the food is massa." },
        { id: "pt-u17l2-amochila", type: "vocab", front: "a mochila", reading: "amochila", meaning: "backpack", example: { jp: "A mochila é da escola de Ana.", en: "The backpack is from Ana's school." }, accept: ["the backpack", "rucksack", "bag", "schoolbag"], hint: "mu-SHEE-la, ch as sh. What every Portuguese schoolchild carries on both shoulders. Spanish uses the same word, so this one is a free ride." },
      ],
    },
    {
      id: "pt-u17l3",
      unit: 17,
      lesson: 3,
      title: "Ler e escrever",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read, write and be graded in Portuguese — and find your way around a Portuguese dictionary and library.",
      items: [
        { id: "pt-u17l3-ler", type: "vocab", front: "ler", reading: "ler", meaning: "to read", example: { jp: "Ler o livro de português é o trabalho de hoje.", en: "Reading the Portuguese book is today's work." }, accept: ["read", "to read out"], hint: "LER, one syllable, and wildly irregular: leio, lês, lê. Its family is a leitura (a reading) and o leitor (a reader) — none of which look much like the infinitive." },
        { id: "pt-u17l3-escrever", type: "vocab", front: "escrever", reading: "escrever", meaning: "to write", example: { jp: "Escrever o nome e a idade no caderno.", en: "To write the name and the age in the notebook." }, accept: ["write", "to write down", "spell"], hint: "esh-kre-VER: escrevo, escreves, escreve, with the s shushing before c. Its root is hiding inside o escritório from Unit 7 — a Portuguese office is literally the writing-room." },
        { id: "pt-u17l3-odicionario", type: "vocab", front: "o dicionário", reading: "odicionario", meaning: "dictionary", example: { jp: "O dicionário de português é enorme.", en: "The Portuguese dictionary is enormous." }, accept: ["the dictionary", "lexicon"], hint: "di-si-u-NA-riu. That -ário ending is the same one in o armário from Unit 15 and o aniversário from Unit 3: it marks a place where things are kept or collected." },
        { id: "pt-u17l3-abiblioteca", type: "vocab", front: "a biblioteca", reading: "abiblioteca", meaning: "library", example: { jp: "A biblioteca é em frente à escola.", en: "The library is opposite the school." }, accept: ["the library"], hint: "bi-bli-u-TE-ka. NOT a bookshop — that is uma livraria, built on o livro from Unit 1. Mixing up library and bookshop is the classic error in every Latin language, and this is the pair to fix it on." },
        { id: "pt-u17l3-oexame", type: "vocab", front: "o exame", reading: "oexame", meaning: "exam", example: { jp: "O exame de português é amanhã.", en: "The Portuguese exam is tomorrow." }, accept: ["the exam", "examination", "test"], hint: "i-ZA-me — an initial ex- before a vowel comes out as \"iz\", never \"ex\". Something smaller is um teste. Both are things you FAZER, not take: fazer um exame, with fazer from Unit 3." },
        { id: "pt-u17l3-anota", type: "vocab", front: "a nota", reading: "anota", meaning: "mark", example: { jp: "A nota do exame de Ana é importante.", en: "Ana's exam mark is important." }, accept: ["the mark", "grade", "the grade", "score", "note"], hint: "NO-ta. A school grade — Portugal marks out of 20, where 10 is a pass and anything above 16 is genuinely good. The same word is a banknote (uma nota de vinte euros) and a note you jot down." },
      ],
    },
    {
      id: "pt-u17l4",
      unit: 17,
      lesson: 4,
      title: "A universidade",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Talk about university in Portugal — your course, your subjects, and the fee whose name means three different things in three different countries.",
      items: [
        { id: "pt-u17l4-auniversidade", type: "vocab", front: "a universidade", reading: "auniversidade", meaning: "university", example: { jp: "A universidade de Coimbra é a mais famosa de Portugal.", en: "The University of Coimbra is the most famous in Portugal." }, accept: ["the university", "college"], hint: "u-ni-ver-si-DA-de, ending in the -dade of a cidade and a idade. Coimbra's was founded in 1290 and is one of the oldest in Europe; its students still wear the black capes you will see in the street there." },
        { id: "pt-u17l4-ocurso", type: "vocab", front: "o curso", reading: "ocurso", meaning: "course", example: { jp: "O curso de Tiago é em Lisboa.", en: "Tiago's course is in Lisbon." }, accept: ["the course", "degree course", "programme", "program"], hint: "KUR-su. Your whole degree programme, not a single class. Que curso fazes? is the standard first question one Portuguese student asks another — it means \"what are you studying?\"" },
        { id: "pt-u17l4-adisciplina", type: "vocab", front: "a disciplina", reading: "adisciplina", meaning: "subject", example: { jp: "A disciplina de Ana é o português.", en: "Ana's subject is Portuguese." }, accept: ["the subject", "school subject", "discipline", "course subject"], hint: "dish-si-PLEE-na. On a Portuguese timetable it means a SUBJECT, not \"discipline\" in the English sense of order or punishment — though the word can carry that too. At university a subject is more often uma cadeira, the same chair you learned in Unit 15." },
        { id: "pt-u17l4-apropina", type: "vocab", front: "a propina", reading: "apropina", meaning: "tuition fee", example: { jp: "A propina da universidade não é barata.", en: "The university fee isn't cheap." }, accept: ["the tuition fee", "tuition", "fee", "the fee", "tuition fees", "fees"], hint: "THE BEST FALSE FRIEND IN THE LANGUAGE — one word, three meanings, three countries. In PORTUGAL a propina is the university TUITION FEE you pay every year. In SPANISH una propina is the TIP you leave in a restaurant. In BRAZIL uma propina is a BRIBE. pru-PEE-na — and say it in the wrong country and you have accused somebody of something." },
        { id: "pt-u17l4-alicenciatura", type: "vocab", front: "a licenciatura", reading: "alicenciatura", meaning: "degree", example: { jp: "A licenciatura de Ana é de três anos.", en: "Ana's degree is three years long." }, accept: ["the degree", "bachelor's degree", "undergraduate degree", "bachelors degree"], hint: "li-sen-si-a-TU-ra. The first degree, three years under the European system. A master's is o mestrado, a doctorate o doutoramento — and Portugal will then put the title in front of your name for the rest of your life." },
        { id: "pt-u17l4-asecretaria", type: "vocab", front: "a secretária", reading: "asecretaria", meaning: "desk", example: { jp: "A secretária do quarto de Ana é enorme.", en: "The desk in Ana's bedroom is enormous." }, accept: ["the desk", "writing desk", "secretary", "bureau"], hint: "se-kre-TA-ria. In Portugal this is the DESK you sit at to work — Brazil says a escrivaninha. It is also a secretary, so a secretária está na secretária is a perfectly ordinary sentence. The desk sense is the one Spanish does not have at all." },
      ],
    },
  ],
};
