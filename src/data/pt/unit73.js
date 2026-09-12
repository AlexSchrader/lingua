// PT Unit 73 — A linguagem formal (slot: register-2) — B1
// ─────────────────────────────────────────────────────────────────────────────
// Register 2, and the written half of the pair. u72 covers the SPOKEN choice —
// tu / você / o senhor, softening a request, the -inho ending. This unit covers
// what a learner actually has to produce in Portugal the moment anything
// official happens: an email to a landlord, a form at the câmara, a complaint,
// a disagreement in a meeting.
//
// Three things it teaches that no earlier unit could:
//   1. The email frame. Portuguese business email is more formal than English —
//      "Com os melhores cumprimentos" is the neutral sign-off, not a flourish,
//      and opening with just "Olá" to an office you have never written to reads
//      as careless.
//   2. THE IMPERSONAL -SE, which is how Portugal writes signs, notices and
//      anything where the actor is not the point: vende-se, precisa-se,
//      diz-se, fala-se inglês. It is also the passive the language actually
//      uses, which is why u70's slot did not need a passive lesson.
//   3. Disagreeing without a row. u68 cards a discussão and warns that it means
//      a ROW; this unit gives the learner the words that keep a disagreement
//      from becoming one.
//
// The clitic placement of u71 is load-bearing all through lesson 2: vende-se is
// enclitic, but não se vende moves it, and the examples show both.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT73 = {
  id: "pt-u73",
  lang: "pt",
  title: "A linguagem formal",
  order: 73,
  stage: "b1",
  lessons: [
    {
      id: "pt-u73l1",
      unit: 73,
      lesson: 1,
      title: "O email formal",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Write an email to somebody you do not know — open it, ask for what you need, and close it the way Portugal expects.",
      items: [
        { id: "pt-u73l1-venhoporestemeio", type: "vocab", front: "venho por este meio", reading: "venhoporestemeio", meaning: "I am writing to", example: { jp: "Venho por este meio pedir informações do apartamento que está para alugar.", en: "I am writing to ask for information about the flat that is up for rent." }, drill: { jp: "Venho por este meio pedir informações", en: "I am writing to ask for information" }, accept: ["I am writing to", "I hereby", "this is to"], hint: "Literally \"I come by this means\". The standard opening of a formal Portuguese email or letter, and it sounds normal rather than pompous — English's \"I am writing to\" is the exact match." },
        { id: "pt-u73l1-agradeco", type: "vocab", front: "agradeço", reading: "agradeco", meaning: "I would be grateful", example: { jp: "Agradeço uma resposta até sexta-feira, porque tenho de decidir antes do fim do mês.", en: "I would be grateful for a reply by Friday, because I have to decide before the end of the month." }, drill: { jp: "Agradeço uma resposta até sexta-feira", en: "I would be grateful for a reply by Friday" }, accept: ["I would be grateful", "thank you", "I appreciate", "I thank"], hint: "From agradecer (u39's family). In an email it carries the weight of \"please\" — agradeço que me informe is a polite instruction, not a thank-you." },
        { id: "pt-u73l1-aguardoresposta", type: "vocab", front: "aguardo resposta", reading: "aguardoresposta", meaning: "I look forward to hearing", example: { jp: "Aguardo resposta e fico à disposição para qualquer dúvida do assunto.", en: "I look forward to your reply and remain available for any questions about the matter." }, drill: { jp: "Aguardo resposta da empresa", en: "I await a reply from the company" }, accept: ["I await your reply", "I look forward to hearing", "awaiting your response"], hint: "The line before the sign-off. Aguardar is the formal esperar — you aguardar a reply and espera for a bus, and mixing them up is the commonest register slip in this lesson." },
        { id: "pt-u73l1-comosmelhorescumprimentos", type: "vocab", front: "com os melhores cumprimentos", reading: "comosmelhorescumprimentos", meaning: "kind regards", example: { jp: "Com os melhores cumprimentos, Ana Silva, da empresa de Braga.", en: "Kind regards, Ana Silva, from the company in Braga." }, drill: { jp: "Com os melhores cumprimentos Ana Silva", en: "Kind regards Ana Silva" }, accept: ["kind regards", "best regards", "yours sincerely", "regards"], hint: "The neutral Portuguese sign-off — every business email ends this way, and it is often shortened in practice to \"Cumprimentos,\". Built on cumprimentar (u39), to greet." },
        { id: "pt-u73l1-atenciosamente", type: "vocab", front: "atenciosamente", reading: "atenciosamente", meaning: "yours faithfully", example: { jp: "Atenciosamente é mais frio do que cumprimentos, por isso uso este quando não conheço a pessoa.", en: "Atenciosamente is colder than cumprimentos, so I use this one when I do not know the person." }, drill: { jp: "Atenciosamente é mais frio do que cumprimentos", en: "Atenciosamente is colder than cumprimentos" }, accept: ["yours faithfully", "yours sincerely", "respectfully"], hint: "The coldest ordinary sign-off, for institutions and strangers. The -mente ending makes adverbs from adjectives exactly as English's -ly does: atencioso → atenciosamente." },
        { id: "pt-u73l1-pecodesculpa", type: "vocab", front: "peço desculpa", reading: "pecodesculpa", meaning: "I apologise", example: { jp: "Peço desculpa pela demora, mas só recebi o seu email esta manhã.", en: "I apologise for the delay, but I only received your email this morning." }, drill: { jp: "Peço desculpa pela demora", en: "I apologise for the delay" }, accept: ["I apologise", "I'm sorry", "my apologies", "I apologize"], hint: "One step up from desculpe (u2): desculpe is spoken and quick, peço desculpa is what you write, and peço imensa desculpa is what you write when it was really your fault." },
      ],
    },
    {
      id: "pt-u73l2",
      unit: 73,
      lesson: 2,
      title: "Sem dizer quem",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is done without saying who does it — the -se that carries every Portuguese sign and notice.",
      items: [
        { id: "pt-u73l2-vendese", type: "vocab", front: "vende-se", reading: "vendese", meaning: "for sale", example: { jp: "Vende-se casa com terreno, diz o papel na janela da loja.", en: "House with land for sale, says the paper in the shop window." }, drill: { jp: "Vende-se casa com terreno", en: "House with land for sale" }, accept: ["for sale", "is sold", "selling"], hint: "The sign you see on every second window in Portugal. Grammatically it is \"it sells itself\" — the -se makes the verb impersonal. Plural agrees: vendem-se casas. u66 gave you vender; this is its notice form." },
        { id: "pt-u73l2-precisase", type: "vocab", front: "precisa-se", reading: "precisase", meaning: "wanted", example: { jp: "Precisa-se de empregado para o café, informa o papel ao lado da porta.", en: "Staff wanted for the café, says the notice beside the door." }, drill: { jp: "Precisa-se de empregado para o café", en: "Staff wanted for the café" }, accept: ["wanted", "help wanted", "needed", "we need"], hint: "The hiring sign. Takes de before the person wanted — precisa-se DE cozinheiro. From precisar (u29)." },
        { id: "pt-u73l2-dizse", type: "vocab", front: "diz-se", reading: "dizse", meaning: "it is said", example: { jp: "Diz-se que a fábrica vai fechar, no entanto a empresa ainda não disse nada aos funcionários.", en: "It is said that the factory is going to close; however, the company has still said nothing to the staff." }, drill: { jp: "Diz-se que a fábrica vai fechar", en: "It is said that the factory is going to close" }, accept: ["it is said", "they say", "people say", "rumour has it"], hint: "How Portuguese reports something without a source — the careful cousin of o boato (u64). Note that after que the pronoun would move: o que se diz, not o que diz-se." },
        { id: "pt-u73l2-falase", type: "vocab", front: "fala-se", reading: "falase", meaning: "is spoken", example: { jp: "Aqui fala-se inglês e espanhol, mas o senhor pode falar devagarinho em português.", en: "English and Spanish are spoken here, but you can speak slowly in Portuguese." }, drill: { jp: "Aqui fala-se inglês e espanhol", en: "English and Spanish are spoken here" }, accept: ["is spoken", "we speak", "they speak"], hint: "The shop-window multilingual sign, and the everyday impersonal: fala-se muito disso — there is a lot of talk about that. Plural again agrees: falam-se várias línguas." },
        { id: "pt-u73l2-sabese", type: "vocab", front: "sabe-se", reading: "sabese", meaning: "it is known", example: { jp: "Ainda não se sabe quando abre a estrada, porque a chuva não parou esta semana.", en: "It is not yet known when the road will open, because the rain has not stopped this week." }, drill: { jp: "Sabe-se pouco deste caso", en: "Little is known of this case" }, accept: ["it is known", "we know", "people know"], hint: "The news verb — sabe-se que, não se sabe se. The example shows the movement rule from u71 in action: ainda NÃO SE sabe, with the pronoun pulled in front by the negative." },
        { id: "pt-u73l2-foidecidido", type: "vocab", front: "foi decidido", reading: "foidecidido", meaning: "it was decided", example: { jp: "Foi decidido na reunião que o trabalho começa em janeiro, embora ninguém tenha explicado porquê.", en: "It was decided at the meeting that the work starts in January, although nobody has explained why." }, drill: { jp: "Foi decidido que o trabalho começa em janeiro", en: "It was decided that the work starts in January" }, accept: ["it was decided", "was decided", "they decided"], hint: "The true passive — ser + past participle — which Portuguese keeps for formal writing and the news, while everyday speech prefers the -se forms above. Both are here so you can tell them apart." },
      ],
    },
    {
      id: "pt-u73l3",
      unit: 73,
      lesson: 3,
      title: "Concordar e discordar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Disagree in a meeting without it becoming a row, and concede the half of the argument you accept.",
      items: [
        { id: "pt-u73l3-deacordo", type: "vocab", front: "de acordo", reading: "deacordo", meaning: "in agreement", example: { jp: "Estou de acordo com quase tudo, no entanto o prazo parece-me curto para um trabalho destes.", en: "I agree with almost everything; the deadline, however, seems short to me for work like this." }, drill: { jp: "Estou de acordo com quase tudo", en: "I agree with almost everything" }, accept: ["in agreement", "agreed", "I agree", "ok"], hint: "Estar de acordo COM alguém. Also a noun — um acordo is a deal or an agreement, chegar a acordo is to reach one." },
        { id: "pt-u73l3-naoconcordo", type: "vocab", front: "não concordo", reading: "naoconcordo", meaning: "I disagree", example: { jp: "Não concordo com essa decisão, mas faço o que a empresa decidir.", en: "I disagree with that decision, but I will do whatever the company decides." }, drill: { jp: "Não concordo com essa decisão", en: "I disagree with that decision" }, accept: ["I disagree", "I don't agree", "I do not agree"], hint: "u24 taught concordar; the negative is the one you need in a meeting. Softer versions worth having: não concordo totalmente, não estou bem de acordo — Portugal hedges disagreement more than English does." },
        { id: "pt-u73l3-emparte", type: "vocab", front: "em parte", reading: "emparte", meaning: "partly", example: { jp: "Em parte tem razão, embora o problema maior seja o preço e não o tempo.", en: "You are partly right, although the bigger problem is the price and not the time." }, drill: { jp: "Em parte tem razão no preço", en: "You are partly right on the price" }, accept: ["partly", "in part", "to some extent"], hint: "The concession that keeps a discussion from becoming a discussão (u68). Pairs naturally with mas or embora — em parte tem razão, mas…" },
        { id: "pt-u73l3-semduvida", type: "vocab", front: "sem dúvida", reading: "semduvida", meaning: "without a doubt", example: { jp: "Sem dúvida que o novo horário é melhor, por isso quase todos os colegas votaram a favor.", en: "Without a doubt the new schedule is better, so almost all the colleagues voted in favour." }, drill: { jp: "Sem dúvida que o horário é melhor", en: "Without a doubt the schedule is better" }, accept: ["without a doubt", "certainly", "no doubt", "definitely"], hint: "The strongest ordinary agreement. Note the optional que after it — sem dúvida que sim is a complete answer, and sem dúvida alguma is the emphatic version." },
        { id: "pt-u73l3-porumlado", type: "vocab", front: "por um lado", reading: "porumlado", meaning: "on the one hand", example: { jp: "Por um lado o salário é melhor, por outro lado a viagem leva duas horas todos os dias.", en: "On the one hand the salary is better; on the other hand the journey takes two hours every day." }, drill: { jp: "Por um lado o salário é melhor", en: "On the one hand the salary is better" }, accept: ["on the one hand", "on one side", "for one thing"], hint: "Almost always followed by por outro lado, exactly as in English. This is the shape a balanced B1 answer takes — two hands, then a verdict." },
      ],
    },
    {
      id: "pt-u73l4",
      unit: 73,
      lesson: 4,
      title: "A palavra formal",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Recognise the formal verb behind the everyday one, so official letters and forms stop being a wall.",
      items: [
        { id: "pt-u73l4-solicitar", type: "vocab", front: "solicitar", reading: "solicitar", meaning: "to request", example: { jp: "Venho por este meio solicitar uma cópia do contrato, porque perdi a minha no ano passado.", en: "I am writing to request a copy of the contract, because I lost mine last year." }, drill: { jp: "Venho solicitar uma cópia do contrato", en: "I am writing to request a copy of the contract" }, accept: ["request", "to apply for", "to ask for"], hint: "The formal pedir (u49's o pedido). You solicitar a document, a licence or an appointment in writing; you pedir a coffee. Using solicitar in a café would be a joke." },
        { id: "pt-u73l4-aguardar", type: "vocab", front: "aguardar", reading: "aguardar", meaning: "to await", example: { jp: "Os doentes têm de aguardar na sala ao lado, informa a senhora da receção.", en: "Patients have to wait in the room next door, the receptionist informs us." }, drill: { jp: "Os doentes têm de aguardar na sala", en: "Patients have to wait in the room" }, accept: ["await", "to wait", "to wait for"], hint: "The formal esperar (u21). Signs, hospitals and recorded phone messages all use aguardar — aguarde, por favor. In speech it sounds official, which is sometimes exactly the effect you want." },
        { id: "pt-u73l4-referir", type: "vocab", front: "referir", reading: "referir", meaning: "to mention", example: { jp: "O senhor doutor referiu duas coisas na consulta, no entanto só me lembro de uma.", en: "The doctor mentioned two things in the appointment; however, I only remember one." }, drill: { jp: "O médico vai referir duas coisas", en: "The doctor is going to mention two things" }, accept: ["mention", "to refer", "to state", "to note"], hint: "Referir-se A is to refer to something — refiro-me ao contrato. Without the -se it simply means to mention, which is the sense here and the commoner one in writing." },
        { id: "pt-u73l4-efetuar", type: "vocab", front: "efetuar", reading: "efetuar", meaning: "to carry out", example: { jp: "Para efetuar o pagamento, é preciso usar o número que está na fatura.", en: "To make the payment, you need to use the number on the invoice." }, drill: { jp: "Para efetuar o pagamento use o número", en: "To make the payment use the number" }, accept: ["carry out", "to make", "to perform", "to process"], hint: "The verb on every Portuguese bank page and form — efetuar o pagamento, efetuar o registo. Everyday Portuguese would just say fazer, and that is always available to you." },
        { id: "pt-u73l4-proceder", type: "vocab", front: "proceder", reading: "proceder", meaning: "to proceed", example: { jp: "Vamos proceder à entrega das chaves assim que o contrato estiver assinado.", en: "We will proceed with the handover of the keys as soon as the contract is signed." }, drill: { jp: "Vamos proceder à entrega das chaves", en: "We will proceed with the handover of the keys" }, accept: ["proceed", "to go ahead", "to carry out"], hint: "Proceder A alguma coisa, with a — and the a fuses with the article into à, as u12 taught. Pure officialese: a human being says vamos entregar as chaves." },
      ],
    },
  ],
};
