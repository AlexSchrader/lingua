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
// CORPUS GAP FOUND, NOT FIXED HERE: a palavra, responder, perceber and todos are
// taught by no unit in u1-u50. They belong to the lowest slot that wants them,
// which is not this one — logged for the lead. Every example routes around them.
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
        { id: "pt-u77l1-referir", type: "vocab", front: "referir", reading: "referir", meaning: "to mention", example: { jp: "O professor referiu a regra da escola e depois explicou o exemplo à turma.", en: "The teacher mentioned the school rule and then explained the example to the class." }, drill: { jp: "Vou referir a regra na reunião", en: "I'm going to mention the rule at the meeting" }, accept: ["mention", "to mention", "to refer to", "refer to", "bring up"], hint: "rre-fe-REER: refiro, referes, refere — the e turns to i in the eu form, which is what every -erir verb does. Referir-se a is to refer to something, and a referência is the noun." },
        { id: "pt-u77l1-mencionar", type: "vocab", front: "mencionar", reading: "mencionar", meaning: "to mention", example: { jp: "O jornal mencionou o nome da empresa e ninguém explicou o caso.", en: "The paper mentioned the company's name and nobody explained the case." }, drill: { jp: "O jornal vai mencionar a empresa", en: "The paper is going to mention the company" }, accept: ["mention", "to mention", "to bring up", "name"], hint: "men-si-u-NAR. The lighter half of the pair: mencionar drops a name in passing, referir points at something you then go on to discuss. Both take the thing directly, with no preposition." },
        { id: "pt-u77l1-afirmar", type: "vocab", front: "afirmar", reading: "afirmar", meaning: "to state", example: { jp: "O chefe afirmou que o trabalho está difícil e ninguém disse nada.", en: "The boss stated that the work is hard and nobody said anything." }, drill: { jp: "Afirmar a verdade é sempre melhor", en: "Stating the truth is always better" }, accept: ["state", "to state", "assert", "to assert", "claim", "to claim"], hint: "a-fir-MAR. Heavier than dizer — you put your name behind it. A afirmação is the statement itself, and afirmativo is the yes-side of a question." },
        { id: "pt-u77l1-declarar", type: "vocab", front: "declarar", reading: "declarar", meaning: "to declare", example: { jp: "O chefe declarou o fim da reunião e a equipa ficou calma.", en: "The boss declared the meeting over and the team was calm." }, drill: { jp: "Vou declarar a verdade na televisão", en: "I'm going to declare the truth on television" }, accept: ["declare", "to declare", "to state officially", "announce"], hint: "de-kla-RAR. The official register — a doctor, a judge, a form. Declarar os rendimentos is what you do with the tax office every spring, and a declaração is the paper you sign." },
        { id: "pt-u77l1-acrescentar", type: "vocab", front: "acrescentar", reading: "acrescentar", meaning: "to add", example: { jp: "A professora explicou a ideia e acrescentou um exemplo simples para a turma.", en: "The teacher explained the idea and added a simple example for the class." }, drill: { jp: "Quero acrescentar um exemplo agora", en: "I want to add an example now" }, accept: ["add", "to add", "to add on", "throw in", "to throw in"], hint: "a-kresh-sen-TAR. Built on crescer, to grow: you make the thing bigger by putting something onto it. For adding numbers Portuguese reaches for somar — acrescentar is adding to what has already been said." },
        { id: "pt-u77l1-indicar", type: "vocab", front: "indicar", reading: "indicar", meaning: "to point out", example: { jp: "O professor indicou o livro novo e a turma começou a ler.", en: "The teacher pointed out the new book and the class started reading." }, drill: { jp: "O professor vai indicar o livro", en: "The teacher is going to point out the book" }, accept: ["indicate", "to indicate", "point out", "to point out", "show"], hint: "in-di-KAR. To point at something with words — a sign, a person, a result. O indicador is both the index finger and the gauge on a dashboard." },
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
        { id: "pt-u77l2-esclarecer", type: "vocab", front: "esclarecer", reading: "esclarecer", meaning: "to clarify", example: { jp: "O chefe esclareceu a regra da empresa porque ninguém sabia o que fazer.", en: "The boss clarified the company rule because nobody knew what to do." }, drill: { jp: "Vou esclarecer a regra na reunião", en: "I'm going to clarify the rule at the meeting" }, accept: ["clarify", "to clarify", "clear up", "to clear up", "to make clear"], hint: "esh-kla-re-SER. Claro is sitting inside it — esclarecer is literally to make clear. Use it when the words were already said and still did not land; explicar is for teaching something new." },
        { id: "pt-u77l2-resumir", type: "vocab", front: "resumir", reading: "resumir", meaning: "to sum up", example: { jp: "A professora resumiu a história do livro e depois falou do exemplo.", en: "The teacher summed up the book's story and then talked about the example." }, drill: { jp: "Vou resumir a história do livro", en: "I'm going to sum up the book's story" }, accept: ["sum up", "to sum up", "summarize", "to summarize", "summarise", "recap"], hint: "rre-zu-MEER. Um resumo is the summary itself, and em resumo opens the sentence that lands the point. Portuguese uses it for a book, a meeting and a football match alike." },
        { id: "pt-u77l2-definir", type: "vocab", front: "definir", reading: "definir", meaning: "to define", example: { jp: "O livro define o sentido do nome e explica a diferença de maneira simples.", en: "The book defines the sense of the name and explains the difference in a simple way." }, drill: { jp: "O livro vai definir o sentido", en: "The book is going to define the sense" }, accept: ["define", "to define", "to set out", "to pin down"], hint: "de-fi-NEER. Fim, an end or a limit, is inside it: you define something by drawing its edges. A definição is the dictionary line, and definir uma data is to fix a date." },
        { id: "pt-u77l2-sublinhar", type: "vocab", front: "sublinhar", reading: "sublinhar", meaning: "to underline", example: { jp: "O professor sublinhou a frase mais difícil do livro antes da aula.", en: "The teacher underlined the hardest sentence in the book before the class." }, drill: { jp: "Vou sublinhar a frase mais difícil", en: "I'm going to underline the hardest sentence" }, accept: ["underline", "to underline", "to stress", "to emphasise", "to emphasize", "highlight"], hint: "su-bli-NYAR, with the nh sound. Literally to draw a line under — sob plus linha — and it works for both the pen stroke and the point you want heard." },
        { id: "pt-u77l2-salientar", type: "vocab", front: "salientar", reading: "salientar", meaning: "to highlight", example: { jp: "O chefe salientou o trabalho da equipa e a reunião ficou calma.", en: "The boss highlighted the team's work and the meeting calmed down." }, drill: { jp: "Quero salientar o trabalho da equipa", en: "I want to highlight the team's work" }, accept: ["highlight", "to highlight", "to stress", "point out", "to point out", "to emphasise"], hint: "sa-li-en-TAR, from saliente, sticking out: you make one point stand proud of the rest. Heavier than sublinhar, and the one you will meet in reports and the news." },
        { id: "pt-u77l2-interpretar", type: "vocab", front: "interpretar", reading: "interpretar", meaning: "to interpret", example: { jp: "A turma interpretou a notícia à sua maneira e o professor explicou tudo.", en: "The class interpreted the news its own way and the teacher explained everything." }, drill: { jp: "Interpretar a notícia não é fácil", en: "Interpreting the news is not easy" }, accept: ["interpret", "to interpret", "to read", "to make sense of"], hint: "in-ter-pre-TAR. Both senses travel together: reading a meaning into something, and performing it — um intérprete is an interpreter and a performer." },
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
        { id: "pt-u77l3-osignificado", type: "vocab", front: "o significado", reading: "osignificado", meaning: "meaning", example: { jp: "O significado do nome é simples e o livro conta a história dele.", en: "The meaning of the name is simple and the book tells its story." }, drill: { jp: "O significado do nome é simples", en: "The meaning of the name is simple" }, accept: ["the meaning", "meaning", "sense", "significance"], hint: "sig-ni-fi-KA-du. The meaning a word carries; significar is the verb, and o que significa isto? is the question you will use most this year." },
        { id: "pt-u77l3-osentido", type: "vocab", front: "o sentido", reading: "osentido", meaning: "sense", example: { jp: "O sentido da frase muda com a expressão de quem fala.", en: "The sense of the sentence changes with the expression of whoever is speaking." }, drill: { jp: "O sentido da frase é claro", en: "The sense of the sentence is clear" }, accept: ["the sense", "sense", "meaning", "the meaning", "direction"], hint: "sen-TEE-du. Two lives in one word: the sense of a phrase, and direction — rua de sentido único is a one-way street. Não faz sentido is the everyday that makes no sense." },
        { id: "pt-u77l3-odiscurso", type: "vocab", front: "o discurso", reading: "odiscurso", meaning: "speech", example: { jp: "O discurso do chefe na televisão foi difícil e o público ouviu tudo.", en: "The boss's speech on television was hard going and the public listened to all of it." }, drill: { jp: "O discurso do chefe foi difícil", en: "The boss's speech was hard going" }, accept: ["the speech", "speech", "address", "discourse"], hint: "dish-KUR-su. The speech somebody stands up and gives — and, in a grammar book, discourse: discurso direto is direct speech, the quoted kind." },
        { id: "pt-u77l3-ocomentario", type: "vocab", front: "o comentário", reading: "ocomentario", meaning: "comment", example: { jp: "O comentário da professora ajudou a turma a escrever melhor.", en: "The teacher's comment helped the class write better." }, drill: { jp: "O comentário da professora foi claro", en: "The teacher's comment was clear" }, accept: ["the comment", "comment", "remark", "the remark", "feedback"], hint: "ku-men-TA-ri-u. A remark made about something else — comentar is the verb, and os comentários are the comment section under a news story." },
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
        { id: "pt-u77l4-comunicar", type: "vocab", front: "comunicar", reading: "comunicar", meaning: "to report", example: { jp: "A empresa comunicou a regra nova e ninguém ficou calmo.", en: "The company reported the new rule and nobody was calm." }, drill: { jp: "A empresa vai comunicar a regra", en: "The company is going to report the rule" }, accept: ["communicate", "to communicate", "to report", "to inform", "announce"], hint: "ku-mu-ni-KAR. In Portuguese this is mostly OFFICIAL telling — a company, a school or a police station comunica something to you. For chatting you want falar." },
        { id: "pt-u77l4-anunciar", type: "vocab", front: "anunciar", reading: "anunciar", meaning: "to announce", example: { jp: "O jornal anunciou a data do jogo e depois falou da equipa.", en: "The paper announced the date of the match and then talked about the team." }, drill: { jp: "O jornal vai anunciar a data", en: "The paper is going to announce the date" }, accept: ["announce", "to announce", "to advertise", "to make public"], hint: "a-nun-si-AR. It carries advertising too — um anúncio is both a public announcement and an advert, which is why anunciar covers a wedding and a washing machine." },
        { id: "pt-u77l4-divulgar", type: "vocab", front: "divulgar", reading: "divulgar", meaning: "to make public", example: { jp: "A escola divulgou a notícia na internet e o público leu tudo.", en: "The school made the news public on the internet and the public read all of it." }, drill: { jp: "A escola vai divulgar a notícia", en: "The school is going to make the news public" }, accept: ["to release", "release", "make public", "to make public", "to publicise", "spread"], hint: "di-vul-GAR. To put information where everyone can reach it — results, a date, a name. Vulgar sits inside it in its old sense of common, of the people, not the English insult." },
        { id: "pt-u77l4-transmitir", type: "vocab", front: "transmitir", reading: "transmitir", meaning: "to pass on", example: { jp: "A televisão transmitiu o jogo e o pai transmitiu a notícia à família.", en: "Television broadcast the match and my father passed the news on to the family." }, drill: { jp: "A televisão vai transmitir o jogo", en: "Television is going to broadcast the match" }, accept: ["transmit", "to transmit", "broadcast", "to broadcast", "pass on", "to pass on"], hint: "tranzh-mi-TEER. Broadcasting, and handing something on — a message, an illness, a habit. Em direto after it means the broadcast is live." },
        { id: "pt-u77l4-repetir", type: "vocab", front: "repetir", reading: "repetir", meaning: "to repeat", example: { jp: "O professor repetiu a frase devagar porque ninguém ouviu bem.", en: "The teacher repeated the sentence slowly because nobody heard properly." }, drill: { jp: "O professor vai repetir a frase", en: "The teacher is going to repeat the sentence" }, accept: ["repeat", "to repeat", "say again", "to say again", "to do again"], hint: "rre-pe-TEER: repito, repetes, repete — the e-to-i swap in the eu form again. Pode repetir, por favor? is the single most useful sentence you will own this year." },
        { id: "pt-u77l4-interromper", type: "vocab", front: "interromper", reading: "interromper", meaning: "to interrupt", example: { jp: "Ninguém quis interromper o discurso do chefe na reunião de hoje.", en: "Nobody wanted to interrupt the boss's speech at today's meeting." }, drill: { jp: "Interromper o chefe não é bom", en: "Interrupting the boss is not good" }, accept: ["interrupt", "to interrupt", "to cut off", "to break in", "to butt in"], hint: "in-te-rrom-PER. Romper, to break, with inter-, between: you break into what somebody is doing. Desculpe interromper is the polite way in." },
      ],
    },
  ],
};
