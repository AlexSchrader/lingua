// PT Unit 2 — Cumprimentos ("Greetings") — A1
// The politeness set, and the decision Portuguese makes about "you" before it
// makes any other: tu, você, or o senhor / a senhora. That choice is pt-PT
// specific — Portugal's você is not Brazil's — so it is taught here, at first
// contact, rather than left to the grammar block.
// Conventions, the pt-PT corpus decision and the Spanish-trap policy are in the
// header of unit1.js and bind this file too.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT2 = {
  id: "pt-u2",
  lang: "pt",
  title: "Cumprimentos",
  order: 2,
  stage: "a1",
  lessons: [
    {
      id: "pt-u2l1",
      unit: 2,
      lesson: 1,
      title: "Bom dia, boa noite",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet someone at any hour and take your leave — and pick the right greeting for the morning, the afternoon and the evening.",
      items: [
        { id: "pt-u2l1-ola", type: "vocab", front: "olá", reading: "ola", meaning: "hello", example: { jp: "Olá, Ana!", en: "Hi, Ana!" }, drill: { jp: "Olá Ana como estás", en: "Hi Ana how are you" }, accept: ["hi", "hey", "hi there"], hint: "o-LA, stress on the second syllable — the accent tells you so. Works at any hour and with anyone; it is friendly without being over-familiar." },
        { id: "pt-u2l1-bomdia", type: "vocab", front: "bom dia", reading: "bomdia", meaning: "good morning", example: { jp: "Bom dia, Tiago! Como estás?", en: "Good morning, Tiago! How are you?" }, drill: { jp: "Bom dia senhor Pedro", en: "Good morning Mr Pedro" }, accept: ["good day", "morning", "hello"], hint: "Literally \"good day\", but Portugal uses it only until lunch. bom is the masculine form of \"good\"; before a feminine noun it becomes boa." },
        { id: "pt-u2l1-boatarde", type: "vocab", front: "boa tarde", reading: "boatarde", meaning: "good afternoon", example: { jp: "Boa tarde, senhor!", en: "Good afternoon, sir!" }, drill: { jp: "Boa tarde senhor Pedro", en: "Good afternoon Mr Pedro" }, accept: ["afternoon", "good evening", "hello"], hint: "From lunch until dark. a tarde is feminine, so bom turns into boa — the greeting itself teaches you the agreement." },
        { id: "pt-u2l1-boanoite", type: "vocab", front: "boa noite", reading: "boanoite", meaning: "good evening", example: { jp: "Boa noite e até logo!", en: "Good evening and see you later!" }, drill: { jp: "Boa noite e até logo", en: "Good night and see you later" }, accept: ["good night", "evening", "night"], hint: "One phrase for both arriving and leaving after dark — it greets AND says goodnight, so context decides which." },
        { id: "pt-u2l1-adeus", type: "vocab", front: "adeus", reading: "adeus", meaning: "goodbye", example: { jp: "Adeus, Maria! Até logo.", en: "Goodbye, Maria! See you later." }, drill: { jp: "Adeus Maria e até logo", en: "Goodbye Maria and see you later" }, accept: ["bye", "farewell"], hint: "a-DEUSH — that final s doing its \"sh\" job again. It carries a note of finality; for an ordinary goodbye Portugal reaches for até logo instead." },
        { id: "pt-u2l1-atelogo", type: "vocab", front: "até logo", reading: "atelogo", meaning: "see you later", example: { jp: "Obrigado e até logo!", en: "Thank you and see you later!" }, drill: { jp: "Obrigado e até logo", en: "Thank you and see you later" }, accept: ["later", "so long", "see you"], hint: "The everyday goodbye — literally \"until soon after\". até means \"until\", and it starts a whole family: até amanhã, até breve." },
      ],
    },
    {
      id: "pt-u2l2",
      unit: 2,
      lesson: 2,
      title: "Por favor e obrigado",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask for something politely, thank someone, and apologise for being in the way.",
      items: [
        { id: "pt-u2l2-porfavor", type: "vocab", front: "por favor", reading: "porfavor", meaning: "please", example: { jp: "Mais um pão, por favor.", en: "One more loaf of bread, please." }, drill: { jp: "Mais um pão por favor", en: "One more loaf of bread please" }, accept: ["if you please"], hint: "Understood everywhere. In Portugal you will also hear se faz favor, or just faz favor called across a café — same meaning, more local." },
        { id: "pt-u2l2-obrigado", type: "vocab", front: "obrigado", reading: "obrigado", meaning: "thank you", example: { jp: "Muito obrigado, Ana!", en: "Thank you very much, Ana!" }, drill: { jp: "Muito obrigado Ana", en: "Thank you very much Ana" }, accept: ["thanks", "thank you very much", "cheers"], hint: "It is an ADJECTIVE, so it agrees with YOU, not with the person you thank: a man says obrigado, a woman says obrigada — every time, whoever she is talking to. Get this one right and you sound like you have been here before." },
        { id: "pt-u2l2-denada", type: "vocab", front: "de nada", reading: "denada", meaning: "you're welcome", example: { jp: "Obrigado! — De nada.", en: "Thank you! — You're welcome." }, drill: { jp: "De nada senhor Pedro", en: "You are welcome Mr Pedro" }, accept: ["it's nothing", "no problem", "not at all", "youre welcome"], hint: "Literally \"of nothing\" — you are waving the thanks away. In Portugal you will also hear não tem de quê and simply ora essa." },
        { id: "pt-u2l2-desculpe", type: "vocab", front: "desculpe", reading: "desculpe", meaning: "sorry", example: { jp: "Desculpe! Não é o carro de Ana?", en: "Sorry! Isn't this Ana's car?" }, drill: { jp: "Desculpe não é o carro de Ana", en: "Sorry it is not Ana's car" }, accept: ["excuse me", "pardon", "pardon me", "i'm sorry"], hint: "The polite form, for a stranger. To a friend you would say desculpa — the same difference as o senhor versus tu, which the next lesson takes apart." },
        { id: "pt-u2l2-comlicenca", type: "vocab", front: "com licença", reading: "comlicenca", meaning: "excuse me", example: { jp: "Com licença, por favor.", en: "Excuse me, please." }, drill: { jp: "Com licença por favor", en: "Excuse me please" }, accept: ["pardon me", "may I", "excuse me (passing)"], hint: "Not an apology — a request for permission. This is what you say to squeeze past someone or leave a table; desculpe is what you say once you have stepped on their foot." },
        { id: "pt-u2l2-claro", type: "vocab", front: "claro", reading: "claro", meaning: "of course", example: { jp: "Claro! O trabalho é importante.", en: "Of course! The work is important." }, drill: { jp: "Claro o trabalho é importante", en: "Of course the work is important" }, accept: ["sure", "certainly", "clear", "obviously"], hint: "As an answer it means \"of course\"; as a description it means \"clear\" or \"light\" in colour. Claro que sim is the emphatic yes." },
      ],
    },
    {
      id: "pt-u2l3",
      unit: 2,
      lesson: 3,
      title: "Tu ou você?",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Ask how someone is and answer — and choose the right word for \"you\", which in Portugal is a decision you make before you say anything else.",
      items: [
        { id: "pt-u2l3-tu", type: "vocab", front: "tu", reading: "tu", meaning: "you", example: { jp: "E tu, Ana?", en: "And you, Ana?" }, drill: { jp: "E tu Ana como estás", en: "And you Ana how are you" }, accept: ["you (informal)", "you (singular)"], hint: "The default in Portugal for friends, family, colleagues and anyone your own age — much more used here than in Brazil, where tu has largely given way to você. Learn tu first; it is the one you will actually say." },
        { id: "pt-u2l3-voce", type: "vocab", front: "você", reading: "voce", meaning: "you (polite)", example: { jp: "Você é o senhor Pedro?", en: "Are you Mr. Pedro?" }, drill: { jp: "Você é o senhor Pedro", en: "Are you Mr Pedro" }, accept: ["you", "you (formal)"], hint: "Careful — this is NOT Brazil's neutral all-purpose você. In Portugal it sits awkwardly between friendly and formal and can sound cold to a stranger, so when in doubt use o senhor / a senhora instead." },
        { id: "pt-u2l3-comoestas", type: "vocab", front: "como estás", reading: "comoestas", meaning: "how are you", example: { jp: "Olá, Tiago! Como estás?", en: "Hi, Tiago! How are you?" }, drill: { jp: "Olá Tiago como estás", en: "Hi Tiago how are you" }, accept: ["how are you?", "how's it going", "how are you doing"], hint: "The tu version — the -s ending is what marks it as tu. Also heard as tudo bem? for the casual version." },
        { id: "pt-u2l3-comoesta", type: "vocab", front: "como está", reading: "comoesta", meaning: "how are you (polite)", example: { jp: "Bom dia, senhor. Como está?", en: "Good morning, sir. How are you?" }, drill: { jp: "Bom dia senhor como está", en: "Good morning sir how are you" }, accept: ["how are you?", "how do you do", "how are you (formal)"], hint: "Drop the -s and the same question becomes polite — it now goes with você, o senhor or a senhora. One letter is the whole difference in register." },
        { id: "pt-u2l3-estoubem", type: "vocab", front: "estou bem", reading: "estoubem", meaning: "I'm fine", example: { jp: "Estou bem, obrigado.", en: "I'm fine, thank you." }, drill: { jp: "Estou bem obrigado", en: "I am fine thank you" }, accept: ["i am well", "i'm well", "i'm good", "im fine"], hint: "The expected answer, and it is polite to hand the question back: Estou bem, e tu? bem on its own is \"well\"." },
        { id: "pt-u2l3-osenhor", type: "vocab", front: "o senhor", reading: "osenhor", meaning: "sir", example: { jp: "Boa tarde, senhor Pedro.", en: "Good afternoon, Mr. Pedro." }, drill: { jp: "O senhor é português", en: "You are Portuguese sir" }, accept: ["mister", "mr", "gentleman", "you (formal)"], hint: "Two jobs: \"Mr.\" in front of a name, and the polite word for \"you\" on its own — O senhor é o Pedro? For a woman it is a senhora. Written short as Sr. and Sra." },
      ],
    },
    {
      id: "pt-u2l4",
      unit: 2,
      lesson: 4,
      title: "Boa sorte!",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Wish somebody well — welcome them, congratulate them, toast them, and say see you soon.",
      items: [
        { id: "pt-u2l4-bemvindo", type: "vocab", front: "bem-vindo", reading: "bemvindo", meaning: "welcome", example: { jp: "Bem-vindo a Portugal!", en: "Welcome to Portugal!" }, drill: { jp: "Bem-vindo a Portugal Tiago", en: "Welcome to Portugal Tiago" }, accept: ["welcome!", "welcome (to a man)"], hint: "Hyphenated, and it agrees with the person arriving: bem-vindo to a man, bem-vinda to a woman, bem-vindos to a group." },
        { id: "pt-u2l4-boasorte", type: "vocab", front: "boa sorte", reading: "boasorte", meaning: "good luck", example: { jp: "Boa sorte, Maria!", en: "Good luck, Maria!" }, drill: { jp: "Boa sorte Maria", en: "Good luck Maria" }, accept: ["luck", "best of luck"], hint: "a sorte is feminine, so boa again. On its own sorte is luck or fate — ter sorte is to be lucky." },
        { id: "pt-u2l4-atebreve", type: "vocab", front: "até breve", reading: "atebreve", meaning: "see you soon", example: { jp: "Adeus e até breve!", en: "Goodbye and see you soon!" }, drill: { jp: "Adeus e até breve", en: "Goodbye and see you soon" }, accept: ["soon", "see you shortly", "until soon"], hint: "The até family again — até logo is later today, até breve is sometime soon, até amanhã is tomorrow." },
        { id: "pt-u2l4-parabens", type: "vocab", front: "parabéns", reading: "parabens", meaning: "congratulations", example: { jp: "Parabéns, Ana!", en: "Congratulations, Ana!" }, drill: { jp: "Parabéns Ana e boa sorte", en: "Congratulations Ana and good luck" }, accept: ["congrats", "well done", "happy birthday"], hint: "para-BAINSH — nasal é plus that final \"sh\". It is also how you say happy birthday: Parabéns! is the whole wish." },
        { id: "pt-u2l4-saude", type: "vocab", front: "saúde", reading: "saude", meaning: "cheers", example: { jp: "Saúde, Tiago!", en: "Cheers, Tiago!" }, drill: { jp: "Saúde e boa sorte", en: "Cheers and good luck" }, accept: ["health", "to your health", "bless you"], hint: "sa-OO-de. The accent on the ú stops it merging with the a, so it is three syllables. It literally means \"health\" — used for toasts and when someone sneezes." },
        { id: "pt-u2l4-muito", type: "vocab", front: "muito", reading: "muito", meaning: "very", example: { jp: "O carro é muito caro.", en: "The car is very expensive." }, drill: { jp: "O carro é muito caro", en: "The car is very expensive" }, accept: ["a lot", "much", "many", "really"], hint: "Said MUIN-tu — there is a nasal in there that the spelling hides completely. Before an adjective it is \"very\"; on its own it is \"a lot\"." },
      ],
    },
  ],
};
