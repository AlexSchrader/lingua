// PT Unit 109 — Registo 3 — tu, você, o senhor (slot: register-3) — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠ THIS SLOT SHIPPED WITH A JAPANESE TITLE. The scaffold stamped it "Register 3
// — 敬語: humble and honorific", which is the Japanese keigo system in a language
// that has nothing of the kind; the Norwegian crew hit the identical stub at its
// own u109 and reported it. The pt B2 block-1 seat (crew lead) retitled the stub
// on 2026-09-23 and wrote the real Portuguese axis into it. This block-2 seat
// authored it to that retheme — nothing was inherited from the Japanese slot.
// CLAUDE.md, "No front language": a scaffold's English slot title names a SLOT,
// not a theme. The other twelve slots in this block were checked for the same
// class of artefact and none was found.
//
// THE pt-PT FACT THIS UNIT EXISTS FOR: você is NOT the neutral middle it is in
// Brazil. To many Portuguese ears it is cold, or rude to an equal, and the
// polite default is the BARE THIRD PERSON with no pronoun at all — quer um café?
// So the real choice a learner faces is not tu/você but tu / third person, with
// a title standing in for the pronoun. That is what these four lessons teach.
//
// SLOT BOUNDARIES. u2 owns tu, você and O SENHOR; u12 owns A SENHORA and vocês;
// u72 (register-1) owns TRATAR POR TU, TRATAR POR VOCÊ, O SENHOR DOUTOR, a
// menina, a gente, o pessoal, se faz favor, faça favor, à vontade; u73
// (register-2) owns the written formulas and the impersonal se. NONE of that is
// re-taught — this unit teaches the CHOOSING, the verb agreement that follows
// it, the titles that replace a name, and how to move up and down the scale.
//
// ⚠ LESSON 2 CARDS INFLECTED VERB FORMS (queres, podes, tens, és, estás, sabes).
// That is the established Portuguese convention in this corpus, not an exception
// invented here: u12 cards estou/está/somos/são beside ser and estar, u36 cards
// era/estava/tinha/fazia, u37 cards será/seria/teria, u69–u71 card seja/fosse/
// tiver. A tu-form is the one paradigm the course never taught, and without it
// the register choice this unit teaches cannot actually be produced.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT109 = {
  id: "pt-u109",
  lang: "pt",
  title: "Registo 3 — tu, você, o senhor",
  order: 109,
  stage: "b2",
  lessons: [
    {
      id: "pt-u109l1",
      unit: 109,
      lesson: 1,
      title: "Escolher a forma de tratamento",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Decide how to address someone in Portuguese and say why — who you are talking to, how close you are, and what the choice costs.",
      items: [
        { id: "pt-u109l1-formal", type: "vocab", front: "formal", reading: "formal", meaning: "formal in address", example: { jp: "O email é formal, mas o chefe responde com uma palavra.", en: "The email is formal, but the boss replies with one word." }, drill: { jp: "O email do chefe é formal", en: "The boss's email is formal" }, accept: ["formal in address", "formal", "in the formal register", "official in tone"], hint: "for-MAL. ⚠ In Portugal the formal choice is usually the BARE THIRD PERSON, not você: o senhor quer? or simply quer? Saying você to a stranger can land colder than saying nothing at all." },
        { id: "pt-u109l1-informal", type: "vocab", front: "informal", reading: "informal", meaning: "informal in address", example: { jp: "O tom informal funciona entre colegas, mas não funciona com um cliente.", en: "The informal tone works between colleagues, but it does not work with a client." }, drill: { jp: "O tom informal funciona entre colegas", en: "The informal tone works between colleagues" }, accept: ["informal in address", "informal", "casual", "in the informal register"], hint: "in-for-MAL. The tu end of the scale. ⚠ Portuguese informality moves FAST between people of the same age and barely moves at all across a generation, which is the opposite of the English pattern." },
        { id: "pt-u109l1-acortesia", type: "vocab", front: "a cortesia", reading: "acortesia", meaning: "courtesy", example: { jp: "A cortesia não custa nada, mas muita gente ainda a esquece.", en: "Courtesy costs nothing, but a lot of people still forget it." }, drill: { jp: "A cortesia não custa nada", en: "Courtesy costs nothing" }, accept: ["courtesy", "the courtesy", "politeness", "good manners"], hint: "kor-te-ZEE-a. The whole system of politeness, not one polite act. ⚠ por cortesia means as a courtesy, free of charge — the sense a Portuguese hotel uses on a sign." },
        { id: "pt-u109l1-ointerlocutor", type: "vocab", front: "o interlocutor", reading: "ointerlocutor", meaning: "the person you are addressing", example: { jp: "O interlocutor decide o tratamento, porque com um idoso ninguém fala por tu.", en: "The person you are addressing decides the form of address, because nobody uses tu with an elderly person." }, drill: { jp: "O interlocutor decide sempre o tratamento", en: "The person addressed always decides the form of address" }, accept: ["the person you are addressing", "interlocutor", "the other party", "the person spoken to"], hint: "in-ter-lo-ku-TOR. Ordinary Portuguese, not jargon — used in news and business alike for the person or body you are dealing with: o nosso interlocutor no ministério." },
        { id: "pt-u109l1-afamiliaridade", type: "vocab", front: "a familiaridade", reading: "afamiliaridade", meaning: "familiarity", example: { jp: "A familiaridade a mais ofende um cliente, ainda que a intenção seja boa.", en: "Excess familiarity offends a client, even though the intention is good." }, drill: { jp: "A familiaridade a mais ofende sempre", en: "Excess familiarity always offends" }, accept: ["familiarity", "the familiarity", "closeness of address", "over-friendliness"], hint: "fa-mi-lya-ri-DA-de. ⚠ Usually a WARNING in Portuguese, where English familiarity is neutral: tratar alguém com familiaridade means presuming a closeness you have not earned." },
        { id: "pt-u109l1-deigualparaigual", type: "vocab", front: "de igual para igual", reading: "deigualparaigual", meaning: "as equals", example: { jp: "Falar de igual para igual com o chefe é difícil, mas é o que ele quer.", en: "Speaking as equals with the boss is difficult, but it is what he wants." }, drill: { jp: "Falamos de igual para igual hoje", en: "We are speaking as equals today" }, accept: ["as equals", "on equal terms", "eye to eye", "on a level"], hint: "Built on igual (u29) and frozen in that exact shape. The move this whole unit is about: the moment two Portuguese speakers drop the third person and start saying tu to each other." },
      ],
    },
    {
      id: "pt-u109l2",
      unit: 109,
      lesson: 2,
      title: "O verbo segue o tratamento",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Produce the tu-forms of the six commonest Portuguese verbs, and switch them to the third person when the person in front of you is not a tu.",
      items: [
        { id: "pt-u109l2-queres", type: "vocab", front: "queres", reading: "queres", meaning: "you want (tu)", example: { jp: "Com um amigo diz-se queres, mas com um cliente diz-se quer.", en: "With a friend you say queres, but with a client you say quer." }, drill: { jp: "Queres um café ou um chá", en: "Do you want a coffee or a tea" }, accept: ["you want (tu)", "you want", "do you want", "you wish"], hint: "KE-resh. The tu form of querer (u37). ⚠ The -s on the end IS the tu — it is the only thing separating queres from quer, and dropping it is what makes a Portuguese speaker hear the formal register." },
        { id: "pt-u109l2-podes", type: "vocab", front: "podes", reading: "podes", meaning: "you can (tu)", example: { jp: "Ao amigo diz-se podes entrar, ao cliente diz-se pode entrar.", en: "To a friend you say podes entrar, to a client pode entrar." }, drill: { jp: "Podes entrar quando quiseres", en: "You can come in whenever you like" }, accept: ["you can (tu)", "you can", "you may", "are you able"], hint: "PO-desh, from poder (u37). Same -s rule. Podes? on its own is how a Portuguese speaker asks a friend may I, and pode? is how they ask a stranger." },
        { id: "pt-u109l2-tens", type: "vocab", front: "tens", reading: "tens", meaning: "you have (tu)", example: { jp: "Tens razão, mas com o senhor Tiago diz-se tem razão.", en: "You are right, but with Mr Tiago you say tem razão." }, drill: { jp: "Tens razão sobre este assunto", en: "You are right about this subject" }, accept: ["you have (tu)", "you have", "you have got", "do you have"], hint: "TAYNSH, from ter (u3). ⚠ The nasal is the whole word: tem is the third person, tens the tu, and the difference is one consonant a beginner hears as nothing. Ter razão is to be right." },
        { id: "pt-u109l2-es", type: "vocab", front: "és", reading: "es", meaning: "you are (permanently)", example: { jp: "És novo aqui, mas com um cliente diz-se é novo aqui.", en: "You are new here, but with a client you say é novo aqui." }, drill: { jp: "És novo aqui na empresa", en: "You are new here at the company" }, accept: ["you are (permanently)", "you are", "you're (ser)", "you are (by nature)"], hint: "ESH, the tu form of ser (u12). ⚠ FOLD WARNING: és and es share the ASCII fold e-s, so a typed answer cannot distinguish the accent — the accent is what the accent-mark rule in unit1.js calls a known, deliberate cost. Say it with an open e." },
        { id: "pt-u109l2-estas", type: "vocab", front: "estás", reading: "estas", meaning: "you are (right now)", example: { jp: "Estás bem, mas ao senhor diz-se está bem.", en: "You are well, but to a gentleman you say está bem." }, drill: { jp: "Estás bem hoje de manhã", en: "You are well this morning" }, accept: ["you are (right now)", "you are (state)", "how are you", "you're (estar)"], hint: "ish-TASH, the tu form of estar (u12). Como estás (u2) is this form inside a fixed greeting — the course has been using it since unit 2 without ever naming it." },
        { id: "pt-u109l2-sabes", type: "vocab", front: "sabes", reading: "sabes", meaning: "you know (tu)", example: { jp: "Sabes a resposta, mas ao senhor diz-se sabe a resposta.", en: "You know the answer, but to a gentleman you say sabe a resposta." }, drill: { jp: "Sabes a resposta a esta questão", en: "You know the answer to this question" }, accept: ["you know (tu)", "you know", "do you know", "you know (a fact)"], hint: "SA-besh, from saber (u36). ⚠ Sabes? at the end of a sentence is the Portuguese you know?, and swapping it for sabe? is the smallest possible signal that you have changed register mid-conversation." },
      ],
    },
    {
      id: "pt-u109l3",
      unit: 109,
      lesson: 3,
      title: "O título faz de nome",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use a Portuguese title the way a name is used — in speech, on an envelope, and in the room where someone outranks you.",
      items: [
        { id: "pt-u109l3-odoutor", type: "vocab", front: "o doutor", reading: "odoutor", meaning: "the doctor (as a title)", example: { jp: "Em Portugal o doutor não é apenas o médico, porque qualquer pessoa com um curso é doutor.", en: "In Portugal the doutor is not only the physician, because anyone with a degree is a doutor." }, drill: { jp: "O doutor chega sempre muito tarde", en: "The doutor always arrives very late" }, accept: ["the doctor (as a title)", "doctor (title)", "Dr", "the title doutor"], hint: "⚠ A REAL CULTURAL TRAP. In Portugal a licenciatura earns you doutor as a form of address, so lawyers, engineers and economists are all senhor doutor. Using it for physicians only marks you out instantly as a foreigner." },
        { id: "pt-u109l3-adona", type: "vocab", front: "a dona", reading: "adona", meaning: "Dona", example: { jp: "A dona Maria trata todos por tu, mas ninguém a trata assim.", en: "Dona Maria addresses everyone as tu, but nobody addresses her that way." }, drill: { jp: "A dona Maria chega às nove", en: "Dona Maria arrives at nine" }, accept: ["Dona", "Dona (before a first name)", "Mrs (with first name)", "madam"], hint: "DO-na. Goes before the FIRST name, never the surname: Dona Maria, never Dona Silva. ⚠ Warm rather than grand, and used downward as often as upward — which is why it can sound patronising to a younger woman." },
        { id: "pt-u109l3-vossaexcelencia", type: "vocab", front: "vossa excelência", reading: "vossaexcelencia", meaning: "Your Excellency", example: { jp: "Vossa excelência não se diz na rua, mas ainda se escreve numa carta ao tribunal.", en: "Your Excellency is not said in the street, but it is still written in a letter to a court." }, drill: { jp: "Escrevo a vossa excelência esta carta", en: "I am writing Your Excellency this letter" }, accept: ["Your Excellency", "Your Honour", "Sir (formal written)", "Excellency"], hint: "⚠ TAKES A THIRD-PERSON VERB despite the vossa: vossa excelência sabe, not sabeis. Abbreviated V. Exa. in writing, which is what you will actually meet on a Portuguese official letter." },
        { id: "pt-u109l3-excelentissimo", type: "vocab", front: "excelentíssimo", reading: "excelentissimo", meaning: "Most Honourable", example: { jp: "Excelentíssimo senhor é o início de uma carta ao tribunal, mas ninguém fala assim.", en: "Excelentíssimo senhor is the opening of a letter to a court, but nobody speaks that way." }, drill: { jp: "Excelentíssimo senhor começa a carta", en: "Excelentíssimo senhor opens the letter" }, accept: ["Most Honourable", "Most Esteemed", "Dear Sir (formal)", "Honourable"], hint: "esh-se-len-TEE-si-mu. A superlative in -íssimo, the ending Portuguese uses for the absolute degree. Written Exmo. on an envelope, and it is still the standard opening of a letter to any Portuguese institution." },
        { id: "pt-u109l3-opatrao", type: "vocab", front: "o patrão", reading: "opatrao", meaning: "the boss", example: { jp: "O patrão da fábrica quer ser tratado por senhor, mas os trabalhadores nunca o fazem.", en: "The factory boss wants to be addressed as senhor, but the workers never do it." }, drill: { jp: "O patrão da fábrica chega cedo", en: "The factory boss arrives early" }, accept: ["the boss", "boss", "the owner", "the guv'nor", "employer"], hint: "pa-TROWN. ⚠ The OWNER, and the word carries class with it — o chefe (u18) is whoever is over you at work, o patrão is whoever owns the place. Portuguese trade-union language is built on the distinction." },
        { id: "pt-u109l3-osuperior", type: "vocab", front: "o superior", reading: "osuperior", meaning: "one's superior", example: { jp: "O superior trata o subordinado por tu, mas o contrário nunca acontece.", en: "A superior addresses a subordinate as tu, but the reverse never happens." }, drill: { jp: "O superior trata todos por tu", en: "The superior addresses everyone as tu" }, accept: ["one's superior", "superior", "the person above you", "senior"], hint: "su-pe-ri-OR. The noun of superior a (u53). ⚠ The asymmetry the example states is real and is the single most useful fact about Portuguese address: the right to say tu travels DOWN the hierarchy first, and is only then offered back." },
      ],
    },
    {
      id: "pt-u109l4",
      unit: 109,
      lesson: 4,
      title: "Subir e descer de registo",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name what a change of register does to a room in Portuguese — too stiff, talking down, showing deference, dropping it entirely.",
      items: [
        { id: "pt-u109l4-cerimonioso", type: "vocab", front: "cerimonioso", reading: "cerimonioso", meaning: "ceremonious", example: { jp: "O tom cerimonioso da carta é frio, embora a intenção seja boa.", en: "The ceremonious tone of the letter is cold, although the intention is good." }, drill: { jp: "O tom cerimonioso da carta é frio", en: "The letter's ceremonious tone is cold" }, accept: ["ceremonious", "stiff", "over-formal", "stand-offish"], hint: "se-ri-mo-NYO-zu, from a cerimónia. Formality carried past what the occasion needs — always mildly critical in Portuguese, the way English stands on ceremony is." },
        { id: "pt-u109l4-condescendente", type: "vocab", front: "condescendente", reading: "condescendente", meaning: "condescending", example: { jp: "O médico é condescendente com o doente, e por isso ninguém lhe diz nada.", en: "The doctor is condescending with the patient, and so nobody says anything to him." }, drill: { jp: "O médico é sempre condescendente", en: "The doctor is always condescending" }, accept: ["condescending", "patronising", "talking down", "patronizing"], hint: "kon-desh-sen-DEN-te. ⚠ Portuguese also keeps the OLD, approving sense — being willing to come down to someone's level — so a nineteenth-century text may mean it kindly. In modern speech it is an insult, as in English." },
        { id: "pt-u109l4-adeferencia", type: "vocab", front: "a deferência", reading: "adeferencia", meaning: "deference", example: { jp: "A deferência com o senhor doutor é grande em Portugal, mas o tratamento muda com a idade.", en: "Deference to the senhor doutor is great in Portugal, but the form of address changes with age." }, drill: { jp: "A deferência com o doutor é grande", en: "Deference to the doutor is great" }, accept: ["deference", "the deference", "respectful yielding", "regard"], hint: "de-fe-REN-sya. Yielding to someone's standing on purpose. ⚠ Note the spelling: deferência with an e, not diferença — the two look close and mean nothing like each other." },
        { id: "pt-u109l4-semcerimonia", type: "vocab", front: "sem cerimónia", reading: "semcerimonia", meaning: "without ceremony", example: { jp: "Entre amigos fala-se sem cerimónia, mas numa reunião isso custa caro.", en: "Among friends one speaks without ceremony, but in a meeting that costs dearly." }, drill: { jp: "Entre amigos fala-se sem cerimónia", en: "Among friends one speaks without ceremony" }, accept: ["without ceremony", "without formality", "plainly", "freely"], hint: "⚠ pt-PT spells it cerimónia with an acute; Brazil writes cerimônia with a circumflex, and that single mark is one of the clearest orthographic tells between the two varieties. Faça favor, esteja à vontade is the invitation to behave this way." },
        { id: "pt-u109l4-odesconhecido", type: "vocab", front: "o desconhecido", reading: "odesconhecido", meaning: "a stranger", example: { jp: "O desconhecido à porta trata todos por tu, mas ninguém gosta.", en: "The stranger at the door addresses everyone as tu, but nobody likes it." }, drill: { jp: "O desconhecido à porta quer entrar", en: "The stranger at the door wants to come in" }, accept: ["a stranger", "the stranger", "an unknown person", "someone unknown"], hint: "desh-ko-nye-SEE-du, from conhecer (u39) with des-. ⚠ Also an adjective meaning unknown — um autor desconhecido — and, as a noun with o, the unknown itself: o medo do desconhecido." },
        { id: "pt-u109l4-aintimidade", type: "vocab", front: "a intimidade", reading: "aintimidade", meaning: "intimacy", example: { jp: "A intimidade entre colegas cresce devagar, e por isso o tu chega tarde.", en: "Intimacy between colleagues grows slowly, and so tu arrives late." }, drill: { jp: "A intimidade entre colegas cresce devagar", en: "Intimacy between colleagues grows slowly" }, accept: ["intimacy", "the intimacy", "closeness", "privacy"], hint: "in-ti-mi-DA-de. Closeness, and also PRIVACY — a intimidade da vida privada is the phrase Portuguese law uses for the right to a private life. Both senses are ordinary." },
      ],
    },
  ],
};
