// PT Unit 49 — Os serviços públicos (slot: coverage-a2-10) — A2
// The counter you actually have to stand at. A1's u7 gave the buildings of a
// town and u18 gave the office; nothing yet lets a learner post a letter, join a
// queue at the câmara, give an address, or complain when something goes wrong.
//
// Sited deliberately narrow, because block 2's u32 owns "society and daily life":
// this unit is the TRANSACTION — post office, town-hall counter, paperwork,
// complaint — and never the institutions of government, the citizen, or society
// as an idea. Nothing here overlaps block 1's u24 employment paperwork either.
//
// Three cards close loops opened earlier in the language:
//   · o selo is the POSTAGE stamp, against o carimbo (Unit 44), the rubber one.
//   · o aviso is the noun of avisar (Unit 47).
//   · atender is the verb A1's u17 hint promised — you answer a phone with it,
//     never with responder.
// pt-PT markers carded here: o registo (Brazil: o registro — one of the clearest
// spelling tells between the two) and a morada (Brazil: o endereço), built
// straight on morar from Unit 15.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT49 = {
  id: "pt-u49",
  lang: "pt",
  title: "Os serviços públicos",
  order: 49,
  stage: "a2",
  lessons: [
    {
      id: "pt-u49l1",
      unit: 49,
      lesson: 1,
      title: "Os correios",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle post in Portuguese — the office, the stamp, the envelope and the postman.",
      items: [
        { id: "pt-u49l1-oscorreios", type: "vocab", front: "os correios", reading: "oscorreios", meaning: "post office", example: { jp: "Os correios da cidade estão em frente ao banco, à direita.", en: "The city's post office is opposite the bank, on the right." }, drill: { jp: "Os correios estão em frente ao banco", en: "The post office is opposite the bank" }, accept: ["the post office", "post office", "the mail", "mail"], hint: "ku-RRAY-ush, strong rr — and PLURAL, always: os correios. The company is the CTT. Singular o correio is the mail itself. A postbox here is o marco do correio, painted red; the blue ones are Correio Azul, for express post." },
        { id: "pt-u49l1-oselo", type: "vocab", front: "o selo", reading: "oselo", meaning: "stamp", example: { jp: "O selo da carta é bonito e o postal é do Porto.", en: "The letter's stamp is pretty and the postcard is from Porto." }, drill: { jp: "O selo da carta é bonito", en: "The letter's stamp is pretty" }, accept: ["the stamp", "postage stamp", "seal"], hint: "SE-lu — the POSTAGE stamp, where o carimbo from Unit 44 is the rubber one thumped down on top of it. Selo also means a seal, and selar is to seal something shut." },
        { id: "pt-u49l1-acarta", type: "vocab", front: "a carta", reading: "acarta", meaning: "letter", example: { jp: "A carta de Ana chegou hoje e o selo é muito antigo.", en: "Ana's letter arrived today and the stamp is very old." }, drill: { jp: "A carta de Ana chegou hoje", en: "Ana's letter arrived today" }, accept: ["the letter", "card", "playing card", "menu"], hint: "KAR-ta. A letter you post — and a playing card, um jogo de cartas. Also a menu, though a ementa from Unit 41 is commoner. And a carta de condução is a driving licence." },
        { id: "pt-u49l1-oenvelope", type: "vocab", front: "o envelope", reading: "oenvelope", meaning: "envelope", example: { jp: "O envelope está na mesa com o selo e a carta de Tiago.", en: "The envelope is on the table with the stamp and Tiago's letter." }, drill: { jp: "O envelope está na mesa", en: "The envelope is on the table" }, accept: ["the envelope"], hint: "en-ve-LO-pe — four syllables, stress on the LO, and masculine. Formal Portuguese also says o sobrescrito, which is literally \"written on top\"." },
        { id: "pt-u49l1-ocarteiro", type: "vocab", front: "o carteiro", reading: "ocarteiro", meaning: "postman", example: { jp: "O carteiro chegou hoje com a carta e o postal do Porto.", en: "The postman arrived today with the letter and the postcard from Porto." }, drill: { jp: "O carteiro chegou hoje com a carta", en: "The postman arrived today with the letter" }, accept: ["the postman", "mail carrier", "postal worker", "mailman"], hint: "kar-TAY-ru, with the -eiro ending that turns a thing into the person who handles it — here from a carta. Portugal's wear the red and yellow of the CTT, and in a village they still know every name on the round." },
        { id: "pt-u49l1-opostal", type: "vocab", front: "o postal", reading: "opostal", meaning: "postcard", example: { jp: "O postal do Porto é bonito e o selo não é caro.", en: "The Porto postcard is pretty and the stamp isn't expensive." }, drill: { jp: "O postal do Porto é bonito", en: "The Porto postcard is pretty" }, accept: ["the postcard", "card"], hint: "posh-TAL, stressed at the end; plural os postais. The same word turns up as an adjective in o código postal, the postcode, which arrives in Lesson 3." },
      ],
    },
    {
      id: "pt-u49l2",
      unit: 49,
      lesson: 2,
      title: "A repartição",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get through a Portuguese public office — the queue, the counter and the person behind it.",
      items: [
        { id: "pt-u49l2-acamaramunicipal", type: "vocab", front: "a câmara municipal", reading: "acamaramunicipal", meaning: "town hall", example: { jp: "A câmara municipal é na praça e o funcionário é simpático.", en: "The town hall is on the square and the official is friendly." }, drill: { jp: "A câmara municipal é na praça", en: "The town hall is on the square" }, accept: ["the town hall", "city hall", "council", "the council"], hint: "KA-ma-ra mu-ni-si-PAL — the town hall and the council both. A câmara on its own is a chamber or a camera, so the full name matters; locals then shorten it right back to a câmara. The mayor is o presidente da câmara." },
        { id: "pt-u49l2-ofuncionario", type: "vocab", front: "o funcionário", reading: "ofuncionario", meaning: "official", example: { jp: "O funcionário da câmara é simpático e o atendimento é rápido.", en: "The council official is friendly and the service is quick." }, drill: { jp: "O funcionário da câmara é simpático", en: "The council official is friendly" }, accept: ["the official", "clerk", "staff member", "civil servant", "employee"], hint: "fun-siu-NA-riu, with the -ário ending. A public official or a member of staff. Um funcionário público is a civil servant, and the whole body of them is a função pública." },
        { id: "pt-u49l2-afila", type: "vocab", front: "a fila", reading: "afila", meaning: "queue", example: { jp: "A fila da câmara municipal é enorme hoje e o balcão é pequeno.", en: "The queue at the town hall is enormous today and the counter is small." }, drill: { jp: "A fila da câmara é enorme", en: "The queue at the council is enormous" }, accept: ["the queue", "line", "the line", "row"], hint: "FEE-la. Estar na fila is to be in it. Portugal runs most public offices by ticket — tirar uma senha, take a number — so a fila is usually a room full of seated people rather than a standing line." },
        { id: "pt-u49l2-obalcao", type: "vocab", front: "o balcão", reading: "obalcao", meaning: "counter", example: { jp: "O balcão da câmara é comprido e o funcionário está ali.", en: "The council counter is long and the official is there." }, drill: { jp: "O balcão da câmara é comprido", en: "The council counter is long" }, accept: ["the counter", "desk", "bar", "service desk"], hint: "bal-KAWNG, -ão nasal; plural os balcões. A counter in an office, a shop or a bar. Ao balcão in a café means standing at the bar — which is genuinely cheaper than sitting at a table, and the price list says so." },
        { id: "pt-u49l2-oatendimento", type: "vocab", front: "o atendimento", reading: "oatendimento", meaning: "service", example: { jp: "O atendimento da câmara é bom e o funcionário é muito rápido.", en: "The council's service is good and the official is very quick." }, drill: { jp: "O atendimento da câmara é bom", en: "The council's service is good" }, accept: ["the service", "customer service", "reception", "assistance"], hint: "a-ten-di-MEN-tu, another -mento noun. Service in the sense of being SEEN TO. O horário de atendimento is opening hours for the public — the sign to read before you join the fila." },
        { id: "pt-u49l2-orequerimento", type: "vocab", front: "o requerimento", reading: "orequerimento", meaning: "formal request", example: { jp: "O requerimento da licença está no balcão com o formulário.", en: "The formal request for the licence is on the counter with the form." }, drill: { jp: "O requerimento está no balcão", en: "The formal request is on the counter" }, accept: ["the application", "request", "petition", "written request"], hint: "rre-ke-ri-MEN-tu, from requerer, to request. This is the written petition Portuguese bureaucracy actually asks for — fazer um requerimento. Applying for a job or a place is a different word, uma candidatura." },
      ],
    },
    {
      id: "pt-u49l3",
      unit: 49,
      lesson: 3,
      title: "Os papéis",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name the Portuguese documents you are asked for at a counter, and give your address.",
      items: [
        { id: "pt-u49l3-ocartaodecidadao", type: "vocab", front: "o cartão de cidadão", reading: "ocartaodecidadao", meaning: "citizen card", example: { jp: "O cartão de cidadão tem a identidade e a morada de todos.", en: "The citizen card carries everyone's identity and address." }, drill: { jp: "O cartão de cidadão está na pasta", en: "The citizen card is in the folder" }, accept: ["the citizen card", "ID card", "identity card", "id"], hint: "THE Portuguese ID, and it is one card doing four jobs: identity, health, tax and voting numbers on a single chip. It replaced four separate documents in 2007. Everyone calls it o CC, and carrying it is a legal duty." },
        { id: "pt-u49l3-acertidao", type: "vocab", front: "a certidão", reading: "acertidao", meaning: "certificate", example: { jp: "A certidão está na câmara municipal de Braga e o carimbo é do juiz.", en: "The certificate is at Braga town hall and the stamp is the judge's." }, drill: { jp: "A certidão está na câmara municipal", en: "The certificate is at the town hall" }, accept: ["the certificate", "official document", "attestation"], hint: "ser-ti-DAWNG, -ão nasal; plural as certidões. An official certificate — uma certidão de nascimento is a birth certificate. Portugal now issues most of them online, which the length of the queue does not suggest." },
        { id: "pt-u49l3-oregisto", type: "vocab", front: "o registo", reading: "oregisto", meaning: "record", example: { jp: "O registo da casa está no documento e o carimbo também.", en: "The house record is on the document and so is the stamp." }, drill: { jp: "O registo da casa está no documento", en: "The house record is on the document" }, accept: ["the record", "registration", "register", "registry"], hint: "PORTUGAL WRITES REGISTO — rre-ZHISH-tu. Brazil writes o registro, with an extra r, and this is one of the clearest single-word tells between the two spellings. O Registo Civil handles births and marriages." },
        { id: "pt-u49l3-amorada", type: "vocab", front: "a morada", reading: "amorada", meaning: "address", example: { jp: "A morada de Ana está no cartão de cidadão e no formulário da escola.", en: "Ana's address is on her citizen card and on the school form." }, drill: { jp: "A morada de Ana está no cartão", en: "Ana's address is on the card" }, accept: ["the address", "home address", "residence"], hint: "PORTUGAL SAYS MORADA — mu-RA-da, built straight on morar from Unit 15: it is where you dwell. Brazil says o endereço, which here sounds bureaucratic and mostly means an email address." },
        { id: "pt-u49l3-ocodigopostal", type: "vocab", front: "o código postal", reading: "ocodigopostal", meaning: "postcode", example: { jp: "O código postal de Lisboa está na carta e no envelope.", en: "Lisbon's postcode is on the letter and on the envelope." }, drill: { jp: "O código postal está na carta", en: "The postcode is on the letter" }, accept: ["the postcode", "zip code", "post code", "postal code"], hint: "KO-di-gu posh-TAL. Portugal's runs to seven digits — four, a dash, then three — precise enough to name a single street. Same postal you met on the postcard, wearing its adjective hat." },
        { id: "pt-u49l3-ocomprovativo", type: "vocab", front: "o comprovativo", reading: "ocomprovativo", meaning: "proof", example: { jp: "O comprovativo da morada está no documento com o carimbo da câmara.", en: "The proof of address is on the document with the council's stamp." }, drill: { jp: "O comprovativo da morada é importante", en: "The proof of address is important" }, accept: ["the proof", "receipt", "proof of payment", "supporting document"], hint: "PORTUGAL SAYS COMPROVATIVO — kom-pro-va-TEE-vu; Brazil says o comprovante. The paper that PROVES something: comprovativo de morada, comprovativo de pagamento. Portuguese bureaucracy asks for one at almost every counter." },
      ],
    },
    {
      id: "pt-u49l4",
      unit: 49,
      lesson: 4,
      title: "Os pedidos e as queixas",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Ask for something at a Portuguese counter, and complain — or give praise — properly.",
      items: [
        { id: "pt-u49l4-opedido", type: "vocab", front: "o pedido", reading: "opedido", meaning: "request", example: { jp: "O pedido de Ana está no balcão e o funcionário vai ver hoje.", en: "Ana's request is on the counter and the official will look at it today." }, drill: { jp: "O pedido está no balcão", en: "The request is on the counter" }, accept: ["the request", "order", "the order", "application"], hint: "pe-DEE-du, from pedir, to ask for. A request — and an ORDER in a restaurant or a shop: fazer um pedido. A pedido de means \"at the request of\"." },
        { id: "pt-u49l4-aqueixa", type: "vocab", front: "a queixa", reading: "aqueixa", meaning: "complaint", example: { jp: "A queixa da mulher está no livro e o chefe vai ler amanhã.", en: "The woman's complaint is in the book and the boss will read it tomorrow." }, drill: { jp: "A queixa está no livro", en: "The complaint is in the book" }, accept: ["the complaint", "grievance", "gripe"], hint: "KAY-sha, x saying sh. Every Portuguese business must keep o Livro de Reclamações, the complaints book, and asking for it out loud is a real and remarkably effective move. The verb is reflexive: queixar-se." },
        { id: "pt-u49l4-oelogio", type: "vocab", front: "o elogio", reading: "oelogio", meaning: "compliment", example: { jp: "O elogio do chefe é bom e a queixa da mulher não é.", en: "The boss's compliment is good and the woman's complaint isn't." }, drill: { jp: "O elogio do chefe é bom", en: "The boss's compliment is good" }, accept: ["the compliment", "praise", "commendation"], hint: "i-lu-ZHEE-u. A compliment or a word of praise — the exact opposite of uma queixa, and the Livro de Reclamações takes these too, on its own page. Elogiar is to praise. English \"eulogy\" shares the root but has narrowed to funerals." },
        { id: "pt-u49l4-informar", type: "vocab", front: "informar", reading: "informar", meaning: "to inform", example: { jp: "Vou informar o chefe do problema no atendimento da câmara.", en: "I'm going to inform the boss about the problem with the council's service." }, drill: { jp: "Informar o chefe do problema", en: "To inform the boss of the problem" }, accept: ["inform", "to tell", "to notify", "notify"], hint: "in-for-MAR: informo, informas, informa. A informação is information, and as informações at a station is the enquiries desk. Informar-se, reflexive, is to go and find out for yourself." },
        { id: "pt-u49l4-oaviso", type: "vocab", front: "o aviso", reading: "oaviso", meaning: "notice", example: { jp: "O aviso da câmara está na porta e o horário é claro.", en: "The council's notice is on the door and the opening times are clear." }, drill: { jp: "O aviso está na porta", en: "The notice is on the door" }, accept: ["the notice", "warning", "announcement", "sign"], hint: "a-VEE-zu — the noun of avisar from Unit 47. A notice, a warning or an announcement. Sem aviso is without warning, and o aviso prévio is formal notice on a job." },
        { id: "pt-u49l4-ocartaz", type: "vocab", front: "o cartaz", reading: "ocartaz", meaning: "poster", example: { jp: "O cartaz do museu é enorme e o povo vai ver a estátua.", en: "The museum poster is enormous and people are going to see the statue." }, drill: { jp: "O cartaz do museu é enorme", en: "The museum poster is enormous" }, accept: ["the poster", "placard", "billboard", "sign"], hint: "kar-TASH — the z shushes at the end, exactly like a paz. Estar em cartaz is what a film or a play does while it is still showing, which is the same image as English \"on the bill\"." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 Os correios    : o carteiro (postman) · o remetente (sender) · a caixa do correio (letterbox)
//   l2 A repartição   : a senha (queue ticket — the pt-PT one) · a repartição (government office) · o guiché (service window)
//   l3 Os papéis      : o comprovativo (proof of payment) · a fotocópia (photocopy) · o contribuinte (taxpayer number)
//   l4 Pedidos/queixas: o impresso (printed form) · o protesto (protest) · o elogio (compliment)
