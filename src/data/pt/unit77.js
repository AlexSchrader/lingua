// PT Unit 77 — A comunicação e o discurso (slot: coverage-b1-4) — B1
// THE LANGUAGE OF REPORTING WHAT WAS SAID. The shipped corpus can say a thing
// (dizer u36, falar u3, contar u36, explicar u24, perguntar u36) but has no way
// to report, frame or clarify it — which is the B1 move. This unit owns that
// layer: the reporting verbs, the clarifying verbs, the nouns for language
// itself, and the verbs for getting word out to people.
//
// SLOT BOUNDARIES (crew-lead ruling; blocks 1-2 win on slot order):
//   u51 Opinion owns concordar/discordar/a opinião — nothing here argues a position.
//   u54 Hedging owns talvez/parecer/duvidar — nothing here softens a claim.
//   u55 owns a fonte and u29 the connectives; both are used in examples, taught nowhere here.
//   A2 u33 A tecnologia e a comunicação owns the CHANNEL (o email, a internet, a
//   televisão); this unit owns the ACT.
//
// All 24 fronts checked FREE against the regenerated TAUGHT-WORDS.md (1,202
// fronts, u1-u50) with the crew checker — exact, fold, headword and lexeme passes.
// CORPUS GAP FOUND, NOT FIXED HERE: a palavra, responder and perceber are taught
// by no unit in u1-u50. They belong to the lowest slot that wants them, which is
// not this one — block 2 (u74-u76) has taken all three. Examples here route
// around them. CORRECTION, caught by block 2: an earlier draft of this header
// also listed `todos`, which is wrong — `todo` IS carded at u14, so `todos` is
// its plural and free to use in examples. Absent as an exact string is not the
// same fact as untaught, which is the whole reason the lexeme check exists.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT77 = {
  id: "pt-u77",
  lang: "pt",
  title: "A comunicação e o discurso",
  order: 77,
  stage: "b1",
  lessons: [
    {
      id: "pt-u77l1",
      unit: 77,
      lesson: 1,
      title: "Dizer com precisão",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report what somebody actually said — mention it, state it, add to it — instead of falling back on disse.",
      items: [
        { id: "pt-u77l1-mencionar", type: "vocab", front: "mencionar", reading: "mencionar", meaning: "to mention (by name)", example: { jp: "O jornal mencionou o nome da empresa e ninguém explicou o caso.", en: "The paper mentioned the company's name and nobody explained the case." }, drill: { jp: "O jornal vai mencionar a empresa", en: "The paper is going to mention the company" }, accept: ["mention", "to mention", "to bring up", "name"], hint: "men-si-u-NAR. The lighter half of the pair: mencionar drops a name in passing, referir points at something you then go on to discuss. Both take the thing directly, with no preposition." },
        { id: "pt-u77l1-indicar", type: "vocab", front: "indicar", reading: "indicar", meaning: "to point out (to indicate)", example: { jp: "O professor indicou o livro novo e a turma começou a ler.", en: "The teacher pointed out the new book and the class started reading." }, drill: { jp: "O professor vai indicar o livro", en: "The teacher is going to point out the book" }, accept: ["indicate", "to indicate", "point out", "to point out", "show"], hint: "in-di-KAR. To point at something with words — a sign, a person, a result. O indicador is both the index finger and the gauge on a dashboard." },
        { id: "pt-u77l1-relatar", type: "vocab", front: "relatar", reading: "relatar", meaning: "to report (to give an account)", example: { jp: "O jornal relatou tudo o que o chefe disse na reunião de ontem.", en: "The paper reported everything the boss said at yesterday's meeting." }, drill: { jp: "O jornal vai relatar a reunião", en: "The paper is going to report the meeting" }, accept: ["report", "to report", "to recount", "to give an account of", "to relate"], hint: "rre-la-TAR. Telling what happened, in order and without comment — a witness, a journalist, a minute-taker. Um relato is the account itself." },
        { id: "pt-u77l1-descrever", type: "vocab", front: "descrever", reading: "descrever", meaning: "to describe", example: { jp: "A turma descreveu a casa velha da aldeia com muito cuidado.", en: "The class described the old village house very carefully." }, drill: { jp: "Vou descrever a casa da aldeia", en: "I'm going to describe the village house" }, accept: ["describe", "to describe", "to depict", "to set out"], hint: "desh-kre-VER, and it follows escrever: descrevo, descreves, descreve. Saying what a thing is like. A descrição is the description." },
        { id: "pt-u77l1-prometer", type: "vocab", front: "prometer", reading: "prometer", meaning: "to promise", example: { jp: "O pai prometeu à criança uma ida à praia no fim do mês.", en: "My father promised the child a trip to the beach at the end of the month." }, drill: { jp: "Vou prometer uma ida à praia", en: "I'm going to promise a trip to the beach" }, accept: ["promise", "to promise", "to pledge", "to give your word"], hint: "pru-me-TER. Prometer a alguém — the person takes a. Uma promessa is the promise, and prometo! on its own is what a Portuguese child says to be believed." },
        { id: "pt-u77l1-reagir", type: "vocab", front: "reagir", reading: "reagir", meaning: "to react", example: { jp: "A cidade reagiu bem à notícia e ninguém ficou calmo em casa.", en: "The city reacted well to the news and nobody stayed quietly at home." }, drill: { jp: "A cidade vai reagir bem", en: "The city is going to react well" }, accept: ["react", "to react", "to respond", "to answer back"], hint: "rre-a-ZHEER, with a for what you react to: reagir A uma notícia. A reação is the reaction, and reagir mal is to take something badly." },
      ],
    },
    {
      id: "pt-u77l2",
      unit: 77,
      lesson: 2,
      title: "Explicar e esclarecer",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Take a muddle apart in Portuguese: clarify it, sum it up, define the word and underline what matters.",
      items: [
        { id: "pt-u77l2-resumir", type: "vocab", front: "resumir", reading: "resumir", meaning: "to sum up", example: { jp: "A professora resumiu a história do livro e depois falou do exemplo.", en: "The teacher summed up the book's story and then talked about the example." }, drill: { jp: "Vou resumir a história do livro", en: "I'm going to sum up the book's story" }, accept: ["sum up", "to sum up", "summarize", "to summarize", "summarise", "recap"], hint: "rre-zu-MEER. Um resumo is the summary itself, and em resumo opens the sentence that lands the point. Portuguese uses it for a book, a meeting and a football match alike." },
        { id: "pt-u77l2-sublinhar", type: "vocab", front: "sublinhar", reading: "sublinhar", meaning: "to underline", example: { jp: "O professor sublinhou a frase mais difícil do livro antes da aula.", en: "The teacher underlined the hardest sentence in the book before the class." }, drill: { jp: "Vou sublinhar a frase mais difícil", en: "I'm going to underline the hardest sentence" }, accept: ["underline", "to underline", "to stress", "to emphasise", "to emphasize", "highlight"], hint: "su-bli-NYAR, with the nh sound. Literally to draw a line under — sob plus linha — and it works for both the pen stroke and the point you want heard." },
        { id: "pt-u77l2-interpretar", type: "vocab", front: "interpretar", reading: "interpretar", meaning: "to interpret", example: { jp: "A turma interpretou a notícia à sua maneira e o professor explicou tudo.", en: "The class interpreted the news its own way and the teacher explained everything." }, drill: { jp: "Interpretar a notícia não é fácil", en: "Interpreting the news is not easy" }, accept: ["interpret", "to interpret", "to read", "to make sense of"], hint: "in-ter-pre-TAR. Both senses travel together: reading a meaning into something, and performing it — um intérprete is an interpreter and a performer." },
        { id: "pt-u77l2-traduzir", type: "vocab", front: "traduzir", reading: "traduzir", meaning: "to translate", example: { jp: "A professora traduziu a frase difícil e a turma percebeu o resto.", en: "The teacher translated the hard sentence and the class understood the rest." }, drill: { jp: "Vou traduzir a frase difícil", en: "I'm going to translate the hard sentence" }, accept: ["translate", "to translate", "to render", "to put into"], hint: "tra-du-ZEER: traduzo, traduzes, traduz. Traduzir DE uma língua PARA outra. A tradução is the translation, and um tradutor the translator." },
        { id: "pt-u77l2-simplificar", type: "vocab", front: "simplificar", reading: "simplificar", meaning: "to simplify", example: { jp: "O chefe simplificou a regra nova e toda a empresa percebeu.", en: "The boss simplified the new rule and the whole company understood." }, drill: { jp: "Vou simplificar a regra nova", en: "I'm going to simplify the new rule" }, accept: ["simplify", "to simplify", "to make simpler", "to streamline"], hint: "sim-pli-fi-KAR, from simples. Cutting a thing down to what matters. In maths it is what you do to a fraction, exactly as in English." },
        { id: "pt-u77l2-exemplificar", type: "vocab", front: "exemplificar", reading: "exemplificar", meaning: "to give an example", example: { jp: "A professora exemplificou a regra com uma frase do livro.", en: "The teacher gave an example of the rule with a sentence from the book." }, drill: { jp: "Vou exemplificar a regra com uma frase", en: "I'm going to give an example of the rule with a sentence" }, accept: ["give an example", "to give an example", "to exemplify", "to illustrate"], hint: "ai-zem-pli-fi-KAR, built straight on o exemplo. Longer than the English verb and used more — a Portuguese teacher says exemplifique where an English one says give me an example." },
      ],
    },
    {
      id: "pt-u77l3",
      unit: 77,
      lesson: 3,
      title: "As palavras e o sentido",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about language itself — the sentence, the expression, the meaning it carries and the remark somebody made about it.",
      items: [
        { id: "pt-u77l3-afrase", type: "vocab", front: "a frase", reading: "afrase", meaning: "sentence", example: { jp: "A frase do jornal é difícil e o professor explicou o sentido à turma.", en: "The sentence in the paper is hard and the teacher explained the sense to the class." }, drill: { jp: "A frase do jornal é difícil", en: "The sentence in the paper is hard" }, accept: ["the sentence", "sentence", "phrase", "the phrase", "line"], hint: "FRA-ze. Sentence and phrase at once — Portuguese does not split them the way English does. Fazer uma frase is to make a sentence, and sem frases means get to the point." },
        { id: "pt-u77l3-aexpressao", type: "vocab", front: "a expressão", reading: "aexpressao", meaning: "expression", example: { jp: "A expressão do chefe na reunião não foi clara para ninguém.", en: "The boss's expression at the meeting was not clear to anybody." }, drill: { jp: "A expressão do chefe não é clara", en: "The boss's expression is not clear" }, accept: ["the expression", "expression", "phrase", "turn of phrase", "set phrase"], hint: "esh-pre-SOWN, nasal at the end. A fixed turn of phrase — and also what your face does: a expressão dele dizia tudo. Uma expressão idiomática is an idiom." },
        { id: "pt-u77l3-odiscurso", type: "vocab", front: "o discurso", reading: "odiscurso", meaning: "speech", example: { jp: "O discurso do chefe na televisão foi difícil e o público ouviu tudo.", en: "The boss's speech on television was hard going and the public listened to all of it." }, drill: { jp: "O discurso do chefe foi difícil", en: "The boss's speech was hard going" }, accept: ["the speech", "speech", "address", "discourse"], hint: "dish-KUR-su. The speech somebody stands up and gives — and, in a grammar book, discourse: discurso direto is direct speech, the quoted kind." },
        { id: "pt-u77l3-ocomentario", type: "vocab", front: "o comentário", reading: "ocomentario", meaning: "comment", example: { jp: "O comentário da professora ajudou a turma a escrever melhor.", en: "The teacher's comment helped the class write better." }, drill: { jp: "O comentário da professora foi claro", en: "The teacher's comment was clear" }, accept: ["the comment", "comment", "remark", "the remark", "feedback"], hint: "ku-men-TA-ri-u. A remark made about something else — comentar is the verb, and os comentários are the comment section under a news story." },
        { id: "pt-u77l3-ovocabulario", type: "vocab", front: "o vocabulário", reading: "ovocabulario", meaning: "vocabulary", example: { jp: "O vocabulário do livro novo é difícil para a turma pequena.", en: "The vocabulary of the new book is hard for the small class." }, drill: { jp: "O vocabulário do livro é difícil", en: "The vocabulary of the book is hard" }, accept: ["the vocabulary", "vocabulary", "word list", "lexicon"], hint: "vu-ka-bu-LA-ri-u. The stock of words a person or a book has. Alargar o vocabulário is to widen your vocabulary, which is what this unit is for." },
        { id: "pt-u77l3-otom", type: "vocab", front: "o tom", reading: "otom", meaning: "tone", example: { jp: "O tom do chefe na reunião não foi bom para ninguém.", en: "The boss's tone at the meeting wasn't good for anybody." }, drill: { jp: "O tom do chefe não foi bom", en: "The boss's tone wasn't good" }, accept: ["the tone", "tone", "pitch", "the pitch", "shade"], hint: "TONG, nasal. The tone of a voice or of a letter — mudar de tom is to change your tune. It is also a shade of colour and a musical note, which is why um tom de voz needs the de." },
      ],
    },
    {
      id: "pt-u77l4",
      unit: 77,
      lesson: 4,
      title: "Dar a saber",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get word out in Portuguese — announce it, pass it on, make it public — and know when you are cutting somebody off.",
      items: [
        { id: "pt-u77l4-comunicar", type: "vocab", front: "comunicar", reading: "comunicar", meaning: "to communicate (to announce officially)", example: { jp: "A empresa comunicou a regra nova e ninguém ficou calmo.", en: "The company reported the new rule and nobody was calm." }, drill: { jp: "A empresa vai comunicar a regra", en: "The company is going to report the rule" }, accept: ["communicate", "to communicate", "to report", "to inform", "announce"], hint: "ku-mu-ni-KAR. In Portuguese this is mostly OFFICIAL telling — a company, a school or a police station comunica something to you. For chatting you want falar." },
        { id: "pt-u77l4-anunciar", type: "vocab", front: "anunciar", reading: "anunciar", meaning: "to announce", example: { jp: "O jornal anunciou a data do jogo e depois falou da equipa.", en: "The paper announced the date of the match and then talked about the team." }, drill: { jp: "O jornal vai anunciar a data", en: "The paper is going to announce the date" }, accept: ["announce", "to announce", "to advertise", "to make public"], hint: "a-nun-si-AR. It carries advertising too — um anúncio is both a public announcement and an advert, which is why anunciar covers a wedding and a washing machine." },
        { id: "pt-u77l4-repetir", type: "vocab", front: "repetir", reading: "repetir", meaning: "to repeat", example: { jp: "O professor repetiu a frase devagar porque ninguém ouviu bem.", en: "The teacher repeated the sentence slowly because nobody heard properly." }, drill: { jp: "O professor vai repetir a frase", en: "The teacher is going to repeat the sentence" }, accept: ["repeat", "to repeat", "say again", "to say again", "to do again"], hint: "rre-pe-TEER: repito, repetes, repete — the e-to-i swap in the eu form again. Pode repetir, por favor? is the single most useful sentence you will own this year." },
        { id: "pt-u77l4-interromper", type: "vocab", front: "interromper", reading: "interromper", meaning: "to interrupt", example: { jp: "Ninguém quis interromper o discurso do chefe na reunião de hoje.", en: "Nobody wanted to interrupt the boss's speech at today's meeting." }, drill: { jp: "Interromper o chefe não é bom", en: "Interrupting the boss is not good" }, accept: ["interrupt", "to interrupt", "to cut off", "to break in", "to butt in"], hint: "in-te-rrom-PER. Romper, to break, with inter-, between: you break into what somebody is doing. Desculpe interromper is the polite way in." },
        { id: "pt-u77l4-difundir", type: "vocab", front: "difundir", reading: "difundir", meaning: "to spread", example: { jp: "A televisão difundiu a notícia do jogo em toda a cidade.", en: "Television spread the news of the match across the whole city." }, drill: { jp: "A televisão vai difundir a notícia", en: "Television is going to spread the news" }, accept: ["spread", "to spread", "to broadcast", "to disseminate", "to circulate"], hint: "di-fun-DEER. Spreading something widely — news, an idea, heat or light. Difundir-se is what a rumour does on its own." },
        { id: "pt-u77l4-notificar", type: "vocab", front: "notificar", reading: "notificar", meaning: "to notify", example: { jp: "A escola notificou a família da falta da criança na aula.", en: "The school notified the family of the child's absence from the lesson." }, drill: { jp: "A escola vai notificar a família", en: "The school is going to notify the family" }, accept: ["notify", "to notify", "to inform", "to serve notice on"], hint: "nu-ti-fi-KAR. The official one — a school, a court, a landlord notifica you, usually in writing. Uma notificação lands in your letterbox." },
      ],
    },
  ],
};
