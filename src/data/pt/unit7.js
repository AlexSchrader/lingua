// PT Unit 7 — A cidade e os lugares ("Town and places") — A1
// Getting around a Portuguese town: what the buildings are called, how to say
// where something is, and how to get there. Transport is where pt-PT and pt-BR
// share almost no words at all — comboio/trem, autocarro/ônibus, elétrico/bonde,
// bilhete/passagem — so every one of those cards names the Brazilian word in its
// hint and then sets it aside. Same for a casa de banho, which is not a banheiro.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT7 = {
  id: "pt-u7",
  lang: "pt",
  title: "A cidade e os lugares",
  order: 7,
  stage: "a1",
  lessons: [
    {
      id: "pt-u7l1",
      unit: 7,
      lesson: 1,
      title: "Na cidade",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the places at the centre of a Portuguese town and say which one you are talking about.",
      items: [
        { id: "pt-u7l1-acidade", type: "vocab", front: "a cidade", reading: "acidade", meaning: "city", example: { jp: "Lisboa é a cidade de Ana.", en: "Lisbon is Ana's city." }, accept: ["the city", "town"], hint: "si-DA-de — soft c before i, and that -dade ending from a idade. It covers both a city and a decent-sized town; a village is uma aldeia." },
        { id: "pt-u7l1-apraca", type: "vocab", front: "a praça", reading: "apraca", meaning: "square", example: { jp: "A praça é enorme.", en: "The square is enormous." }, accept: ["the square", "plaza", "town square"], hint: "PRA-sa, cedilla. Every Portuguese town is organised around one, and the main one is often a Praça da República or a Praça do Comércio." },
        { id: "pt-u7l1-aigreja", type: "vocab", front: "a igreja", reading: "aigreja", meaning: "church", example: { jp: "A igreja de Braga é famosa.", en: "The church in Braga is famous." }, accept: ["the church", "chapel"], hint: "i-GRE-zha. A cathedral has its own short word — a Sé — which you will see on street signs long before you see the word catedral." },
        { id: "pt-u7l1-omercado", type: "vocab", front: "o mercado", reading: "omercado", meaning: "market", example: { jp: "O mercado é aqui, à direita.", en: "The market is here, on the right." }, accept: ["the market", "marketplace"], hint: "mer-KA-du. Portuguese towns keep a covered daily one — o mercado municipal — quite separate from o supermercado." },
        { id: "pt-u7l1-aloja", type: "vocab", front: "a loja", reading: "aloja", meaning: "shop", example: { jp: "A loja é ali, em frente à praça.", en: "The shop is there, opposite the square." }, accept: ["the shop", "store"], hint: "LO-zha, zh again. Portugal writes ABERTO on the door for open and FECHADO for closed — worth knowing before the lunch break, which is real." },
        { id: "pt-u7l1-omuseu", type: "vocab", front: "o museu", reading: "omuseu", meaning: "museum", example: { jp: "O museu de Lisboa é enorme.", en: "The Lisbon museum is enormous." }, accept: ["the museum", "gallery"], hint: "mu-ZEU, stress at the end and every vowel said separately. The -eu ending is masculine; do not let Spanish museo pull the o back onto it." },
      ],
    },
    {
      id: "pt-u7l2",
      unit: 7,
      lesson: 2,
      title: "Onde é?",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Ask where something is and understand the answer — here, there, left, right, straight ahead.",
      items: [
        { id: "pt-u7l2-onde", type: "vocab", front: "onde", reading: "onde", meaning: "where", example: { jp: "Onde é a estação?", en: "Where is the station?" }, accept: ["where?", "whereabouts"], hint: "ON-de. You met it inside de onde és in Unit 3. For \"where to\" Portuguese adds a preposition: para onde vais?" },
        { id: "pt-u7l2-aqui", type: "vocab", front: "aqui", reading: "aqui", meaning: "here", example: { jp: "O café é aqui.", en: "The café is here." }, accept: ["right here", "over here", "this way"], hint: "a-KEE — qu is a plain k. Portuguese splits \"here\" and \"there\" three ways by distance: aqui (by me), aí (by you), ali (over there)." },
        { id: "pt-u7l2-ali", type: "vocab", front: "ali", reading: "ali", meaning: "there", example: { jp: "A farmácia é ali.", en: "The pharmacy is there." }, accept: ["over there", "that way", "yonder"], hint: "a-LEE, and point while you say it. Use aí instead when the thing is next to the person you are talking to." },
        { id: "pt-u7l2-adireita", type: "vocab", front: "à direita", reading: "adireita", meaning: "on the right", example: { jp: "A igreja é à direita.", en: "The church is on the right." }, accept: ["to the right", "right", "the right"], hint: "That à with the backwards accent is a + a — the preposition fused with the feminine article. It is said as one long open \"ah\". Turn right is vire à direita." },
        { id: "pt-u7l2-aesquerda", type: "vocab", front: "à esquerda", reading: "aesquerda", meaning: "on the left", example: { jp: "O banco é à esquerda.", en: "The bank is on the left." }, accept: ["to the left", "left", "the left"], hint: "es-KER-da, and the same fused à. Portuguese has no everyday word for \"left-handed\" built on it — that is canhoto." },
        { id: "pt-u7l2-emfrente", type: "vocab", front: "em frente", reading: "emfrente", meaning: "straight ahead", example: { jp: "A escola é em frente.", en: "The school is straight ahead." }, accept: ["ahead", "opposite", "in front", "straight on"], hint: "Two jobs: sempre em frente means keep going straight, while em frente DE something means opposite it. The de is what changes the meaning." },
      ],
    },
    {
      id: "pt-u7l3",
      unit: 7,
      lesson: 3,
      title: "Comboios e autocarros",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Travel across a Portuguese city — buy a ticket, find the station, and use the words Portugal actually uses for its transport.",
      items: [
        { id: "pt-u7l3-ocomboio", type: "vocab", front: "o comboio", reading: "ocomboio", meaning: "train", example: { jp: "O comboio de Lisboa é rápido.", en: "The Lisbon train is rapid." }, accept: ["the train", "rail"], hint: "PORTUGAL SAYS COMBOIO. Brazil says o trem, and trem in Portugal means something closer to gear or kit. kom-BOY-u — the oi glides, as in coisa." },
        { id: "pt-u7l3-oautocarro", type: "vocab", front: "o autocarro", reading: "oautocarro", meaning: "bus", example: { jp: "O autocarro não é caro.", en: "The bus isn't expensive." }, accept: ["the bus", "coach"], hint: "PORTUGAL SAYS AUTOCARRO — auto plus carro, the car from Unit 1. Brazil says o ônibus, which nobody uses here. The bus stop is a paragem." },
        { id: "pt-u7l3-aestacao", type: "vocab", front: "a estação", reading: "aestacao", meaning: "station", example: { jp: "A estação é ali, à esquerda.", en: "The station is there, on the left." }, accept: ["the station", "terminal"], hint: "The -ção ending again: es-ta-SAWNG, nasal at the end. Plural swaps it for -ções — as estações — which is that õe spelling from Unit 1. It also means a season of the year." },
        { id: "pt-u7l3-obilhete", type: "vocab", front: "o bilhete", reading: "obilhete", meaning: "ticket", example: { jp: "Um bilhete, por favor.", en: "One ticket, please." }, accept: ["the ticket", "fare", "pass"], hint: "bi-LYE-te, with the lh. Brazil says a passagem for a travel ticket. The rechargeable card you tap in Lisbon is o Navegante." },
        { id: "pt-u7l3-oeletrico", type: "vocab", front: "o elétrico", reading: "oeletrico", meaning: "tram", example: { jp: "O elétrico é muito famoso em Lisboa.", en: "The tram is very famous in Lisbon." }, accept: ["the tram", "streetcar", "trolley"], hint: "The yellow ones climbing Lisbon's hills, number 28 above all. Brazil says o bonde. Note the spelling: since the 1990 accord Portugal writes elétrico, without the old silent c of eléctrico." },
        { id: "pt-u7l3-ir", type: "vocab", front: "ir", reading: "ir", meaning: "to go", example: { jp: "Ir de comboio é fantástico.", en: "Going by train is fantastic." }, accept: ["go", "to travel"], hint: "Two letters, wildly irregular: vou (I go), vais (you go), vai (he/she goes). Travelling BY something takes de — de comboio, de autocarro, de carro — but on foot is a pé." },
      ],
    },
    {
      id: "pt-u7l4",
      unit: 7,
      lesson: 4,
      title: "Lugares úteis",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Find the places you will actually need in a Portuguese town — starting with the toilet, which is not called what Brazil calls it.",
      items: [
        { id: "pt-u7l4-acasadebanho", type: "vocab", front: "a casa de banho", reading: "acasadebanho", meaning: "toilet", example: { jp: "Onde é a casa de banho, por favor?", en: "Where is the toilet, please?" }, accept: ["bathroom", "the toilet", "restroom", "loo", "wc"], hint: "PORTUGAL SAYS CASA DE BANHO — literally \"bath house\", built on a casa from Unit 1. Brazil says o banheiro, which in Portugal means a lifeguard. On doors look for WC, Homens and Senhoras." },
        { id: "pt-u7l4-ohospital", type: "vocab", front: "o hospital", reading: "ohospital", meaning: "hospital", example: { jp: "O hospital é em frente à igreja.", en: "The hospital is opposite the church." }, accept: ["the hospital", "infirmary"], hint: "Silent h, stress on the last syllable: osh-pi-TAL. For something minor you would go to um centro de saúde instead — saúde, from Unit 2." },
        { id: "pt-u7l4-aescola", type: "vocab", front: "a escola", reading: "aescola", meaning: "school", example: { jp: "A escola de Ana é aqui.", en: "Ana's school is here." }, accept: ["the school"], hint: "esh-KO-la — an s before a hard consonant shushes too, not just at the end of a word. That shushing is most of what makes European Portuguese sound the way it does." },
        { id: "pt-u7l4-obanco", type: "vocab", front: "o banco", reading: "obanco", meaning: "bank", example: { jp: "O banco não é aqui.", en: "The bank isn't here." }, accept: ["the bank", "bench"], hint: "BAN-ku, nasal first syllable. It also means a bench — o banco do jardim — so context decides whether you are sitting on it or queueing in it. The cash machine is a Multibanco." },
        { id: "pt-u7l4-oescritorio", type: "vocab", front: "o escritório", reading: "oescritorio", meaning: "office", example: { jp: "O escritório é em frente.", en: "The office is straight ahead." }, accept: ["the office", "study", "workplace"], hint: "FALSE FRIEND WARNING — an office is NOT uma oficina. Spanish oficina is an office; Portuguese uma oficina is a workshop or a garage where cars get fixed. The room you work in is o escritório." },
        { id: "pt-u7l4-afarmacia", type: "vocab", front: "a farmácia", reading: "afarmacia", meaning: "pharmacy", example: { jp: "A farmácia é aqui, à esquerda.", en: "The pharmacy is here, on the left." }, accept: ["the pharmacy", "chemist", "drugstore"], hint: "far-MA-sia. Look for the green cross. Portuguese pharmacies hold most medicines behind the counter, so you ask rather than browse — and one in each town stays open all night, a farmácia de serviço." },
      ],
    },
  ],
};
