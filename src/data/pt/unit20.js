// PT Unit 20 — A viagem e as férias (slot: coverage-6) — A1
// The last unit of the band. Unit 7 taught transport INSIDE a town — o comboio,
// o autocarro, o elétrico, a estação, o bilhete — and stopped there. Nothing yet
// gets the learner out of the city: no holiday, no beach, no airport, no
// countryside. This unit closes A1 by taking them out of it and bringing them back.
//
// FOUR SPANISH TRAPS ARE CARDED HERE, which is why the seaside and the suitcase
// earn their cards rather than being waved through as cognates:
//   · a mala   (u20l1) — PT: suitcase. ES mala: the feminine of "bad".
//                        Spanish for suitcase is maleta.
//   · a areia  (u20l2) — PT: sand. ES arena: sand — but PT arena is a bullring.
//                        The two languages swapped which word does which job.
//   · o polvo  (u20l2) — PT: OCTOPUS. ES polvo: DUST. Spanish for octopus is
//                        pulpo. Reserved for block 3 by the block brief.
//   · o barco / o banco (u7) and a praia / a praça (u7) are one letter apart
//     each; both hints name the pair rather than leaving it to be discovered.
//
// ficar (u20l4) quietly repairs an A1 simplification block 1 had to make: Unit 7
// says a farmácia é ali because estar was not open yet. Its hint introduces
// onde fica…?, which is what a Portuguese speaker actually asks. Unit 12's
// grammar block owns ser/estar properly; this is a pointer, not a rule.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT20 = {
  id: "pt-u20",
  lang: "pt",
  title: "A viagem e as férias",
  order: 20,
  stage: "a1",
  lessons: [
    {
      id: "pt-u20l1",
      unit: 20,
      lesson: 1,
      title: "As férias",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a Portuguese holiday — pack the suitcase, take the passport, and say when you leave.",
      items: [
        { id: "pt-u20l1-asferias", type: "vocab", front: "as férias", reading: "asferias", meaning: "holidays", example: { jp: "As férias de Ana são em Portugal.", en: "Ana's holidays are in Portugal." }, drill: { jp: "As férias de Ana são em Portugal", en: "Ana's holidays are in Portugal" }, accept: ["the holidays", "holiday", "vacation", "the vacation", "holidays"], hint: "FE-riash. ALWAYS PLURAL, like as calças in Unit 16 — as férias, never \"a féria\". Estar de férias is to be on holiday. A single public holiday is um feriado, a different word entirely." },
        { id: "pt-u20l1-aviagem", type: "vocab", front: "a viagem", reading: "aviagem", meaning: "journey", example: { jp: "A viagem de comboio é rápida.", en: "The train journey is rapid." }, drill: { jp: "A viagem de comboio é rápida", en: "The train journey is rapid" }, accept: ["the journey", "trip", "the trip", "travel", "voyage"], hint: "vi-A-zhem, g saying zh. A journey or a trip. Boa viagem! is what you say to anyone setting off. The plural swaps the m for an n: as viagens." },
        { id: "pt-u20l1-viajar", type: "vocab", front: "viajar", reading: "viajar", meaning: "to travel", example: { jp: "Viajar de comboio em Portugal é barato.", en: "Travelling by train in Portugal is cheap." }, drill: { jp: "Viajar de comboio é barato", en: "Travelling by train is cheap" }, accept: ["travel", "to journey", "to go travelling"], hint: "vi-a-ZHAR: viajo, viajas, viaja. The verb belonging to a viagem — the g hardens into a written j once it stands before an a. Travelling BY something takes de, exactly as ir did in Unit 7: viajar de avião." },
        { id: "pt-u20l1-amala", type: "vocab", front: "a mala", reading: "amala", meaning: "suitcase", example: { jp: "A mala de Ana não é enorme.", en: "Ana's suitcase isn't enormous." }, drill: { jp: "A mala de Ana não é enorme", en: "Ana's suitcase isn't enormous" }, accept: ["the suitcase", "bag", "case", "luggage"], hint: "MA-la. SPANISH TRAP, and a sharp one — in Spanish mala is simply the feminine of \"bad\", while Spanish for a suitcase is una maleta. Here a mala is the suitcase, and packing is fazer as malas." },
        { id: "pt-u20l1-opassaporte", type: "vocab", front: "o passaporte", reading: "opassaporte", meaning: "passport", example: { jp: "O passaporte é da mochila de Tiago.", en: "The passport is from Tiago's backpack." }, drill: { jp: "O passaporte é da mochila de Tiago", en: "The passport is from Tiago's backpack" }, accept: ["the passport"], hint: "pa-sa-POR-te. Transparent enough to read, but note the double ss: it keeps the s hard, where a single s between vowels would say z as in a casa. Portugal's own ID is o cartão de cidadão." },
        { id: "pt-u20l1-partir", type: "vocab", front: "partir", reading: "partir", meaning: "to leave", example: { jp: "Partir amanhã de comboio.", en: "To leave tomorrow by train." }, drill: { jp: "Partir amanhã de comboio", en: "To leave tomorrow by train" }, accept: ["leave", "to depart", "depart", "to set off", "to break"], hint: "par-TEER: parto, partes, parte. To depart — the departures board says PARTIDAS. It also means to BREAK something, so partir um copo is to break a glass, using o copo from Unit 15." },
      ],
    },
    {
      id: "pt-u20l2",
      unit: 20,
      lesson: 2,
      title: "Na praia",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Spend a day on a Portuguese beach — name the sea, the sand and the boat, and order the thing everyone eats afterwards.",
      items: [
        { id: "pt-u20l2-apraia", type: "vocab", front: "a praia", reading: "apraia", meaning: "beach", example: { jp: "A praia do Porto é famosa.", en: "Porto's beach is famous." }, drill: { jp: "A praia do Porto é famosa", en: "Porto's beach is famous" }, accept: ["the beach", "seaside", "shore"], hint: "PRY-a. Portugal has some 800 kilometres of coast and this is where August happens. Keep it apart from a praça in Unit 7 — one letter between the beach and the town square." },
        { id: "pt-u20l2-omar", type: "vocab", front: "o mar", reading: "omar", meaning: "sea", example: { jp: "O mar de Portugal é enorme.", en: "Portugal's sea is enormous." }, drill: { jp: "O mar de Portugal é enorme", en: "Portugal's sea is enormous" }, accept: ["the sea", "ocean"], hint: "MAR, one syllable, masculine. Portugal spent five centuries facing it and the word runs right through the vocabulary — uma marisqueira is a seafood restaurant, and Lisbon's wide estuary is o Mar da Palha." },
        { id: "pt-u20l2-aareia", type: "vocab", front: "a areia", reading: "aareia", meaning: "sand", example: { jp: "A areia da praia é fantástica.", en: "The beach sand is fantastic." }, drill: { jp: "A areia da praia é fantástica", en: "The beach sand is fantastic" }, accept: ["the sand"], hint: "a-RAY-a, three syllables. WATCH SPANISH: arena there means sand, while here uma arena is a bullring or a stadium. The two languages have swapped which word does which job." },
        { id: "pt-u20l2-nadar", type: "vocab", front: "nadar", reading: "nadar", meaning: "to swim", example: { jp: "Nadar no mar é fantástico.", en: "Swimming in the sea is fantastic." }, drill: { jp: "Nadar no mar é fantástico", en: "Swimming in the sea is fantastic" }, accept: ["swim", "to go swimming"], hint: "na-DAR: nado, nadas, nada. Careful — nada, spelled identically, is also the word for \"nothing\", which you already met inside de nada in Unit 2. Ele nada is he swims; ele não faz nada is he does nothing." },
        { id: "pt-u20l2-obarco", type: "vocab", front: "o barco", reading: "obarco", meaning: "boat", example: { jp: "O barco de Lisboa não é rápido.", en: "The Lisbon boat isn't rapid." }, drill: { jp: "O barco de Lisboa é rápido", en: "The Lisbon boat is rapid" }, accept: ["the boat", "ship", "vessel"], hint: "BAR-ku. One letter from o banco in Unit 7, so keep them apart: a boat and a bank. The Douro's flat-bottomed wine boats are os barcos rabelos; a large ship is um navio." },
        { id: "pt-u20l2-opolvo", type: "vocab", front: "o polvo", reading: "opolvo", meaning: "octopus", example: { jp: "O polvo é delicioso e não é caro.", en: "The octopus is delicious and isn't expensive." }, drill: { jp: "O polvo é delicioso e barato", en: "The octopus is delicious and cheap" }, accept: ["the octopus"], hint: "SPANISH TRAP. POL-vu. Here it is OCTOPUS — polvo à lagareiro, roasted whole with olive oil and garlic, is a dish Portugal is genuinely proud of. In SPANISH polvo means DUST, and Spanish for octopus is pulpo. One letter, and you have ordered dust." },
      ],
    },
    {
      id: "pt-u20l3",
      unit: 20,
      lesson: 3,
      title: "O avião e o aeroporto",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Get to a Portuguese airport and away again — fly, arrive on time, and find the road on the map.",
      items: [
        { id: "pt-u20l3-oaviao", type: "vocab", front: "o avião", reading: "oaviao", meaning: "plane", example: { jp: "O avião de Lisboa é rápido.", en: "The Lisbon plane is rapid." }, drill: { jp: "O avião de Lisboa é rápido", en: "The Lisbon plane is rapid" }, accept: ["the plane", "aeroplane", "airplane", "aircraft"], hint: "a-vi-AWNG, the -ão nasal of o pão, and the plural makes the õe swap: os aviões. It is built on ave, a bird. Going by plane is ir de avião, with the same de as in Unit 7." },
        { id: "pt-u20l3-oaeroporto", type: "vocab", front: "o aeroporto", reading: "oaeroporto", meaning: "airport", example: { jp: "O aeroporto de Lisboa é enorme.", en: "Lisbon's airport is enormous." }, drill: { jp: "O aeroporto de Lisboa é enorme", en: "Lisbon's airport is enormous" }, accept: ["the airport"], hint: "a-e-ru-POR-tu — five syllables, and the ae is said as two separate vowels. Hidden inside it is o porto, a harbour, which is also what names the city: an airport is a harbour for the air." },
        { id: "pt-u20l3-voar", type: "vocab", front: "voar", reading: "voar", meaning: "to fly", example: { jp: "Voar é mais rápido, e o comboio é mais barato.", en: "Flying is faster, and the train is cheaper." }, drill: { jp: "Voar é mais rápido", en: "Flying is faster" }, accept: ["fly", "to take off"], hint: "vu-AR: voo, voas, voa. That voo, with its two o's side by side, is also the noun — um voo is a flight. It means to fly in the air only; for the journey itself Portuguese says ir de avião." },
        { id: "pt-u20l3-chegar", type: "vocab", front: "chegar", reading: "chegar", meaning: "to arrive", example: { jp: "Chegar ao aeroporto às nove.", en: "To arrive at the airport at nine." }, drill: { jp: "Chegar ao aeroporto às nove", en: "To arrive at the airport at nine" }, accept: ["arrive", "to get to", "to reach", "reach"], hint: "she-GAR, ch as sh: chego, chegas, chega. Arriving AT a place takes a, which fuses with the article — chegar ao aeroporto, chegar à praia. The arrivals board reads CHEGADAS, and Chega! on its own means \"enough!\"" },
        { id: "pt-u20l3-omapa", type: "vocab", front: "o mapa", reading: "omapa", meaning: "map", example: { jp: "O mapa de Portugal é da biblioteca.", en: "The map of Portugal is from the library." }, drill: { jp: "O mapa de Portugal é enorme", en: "The map of Portugal is enormous" }, accept: ["the map", "chart"], hint: "MA-pa. MASCULINE in spite of the -a, exactly like o cinema and o problema — o mapa, never \"a mapa\". This one catches learners constantly, because almost everything else ending in -a is feminine." },
        { id: "pt-u20l3-aestrada", type: "vocab", front: "a estrada", reading: "aestrada", meaning: "road", example: { jp: "A estrada é ali, em frente.", en: "The road is there, straight ahead." }, drill: { jp: "A estrada é ali em frente", en: "The road is there straight ahead" }, accept: ["the road", "highway", "route"], hint: "esh-TRA-da. The open road BETWEEN towns, as against a rua from Unit 1, which is a street inside one. A motorway is uma autoestrada — auto stuck on the front, built exactly the way o autocarro was in Unit 7." },
      ],
    },
    {
      id: "pt-u20l4",
      unit: 20,
      lesson: 4,
      title: "O campo e a montanha",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Say where you are staying in the Portuguese countryside — the village, the river, the mountain and the pool — and ask where something is the way a Portuguese person really asks it.",
      items: [
        { id: "pt-u20l4-ficar", type: "vocab", front: "ficar", reading: "ficar", meaning: "to stay", example: { jp: "Ficar em casa de Ana no fim de semana.", en: "To stay at Ana's house at the weekend." }, drill: { jp: "Ficar em casa de Ana", en: "To stay at Ana's house" }, accept: ["stay", "to remain", "remain", "to be located", "to become"], hint: "fi-KAR: fico, ficas, fica. To stay or remain — and, very usefully, to BE LOCATED. Onde fica a estação? is how a Portuguese person actually asks where something is, more often than onde é. It also means to become." },
        { id: "pt-u20l4-aaldeia", type: "vocab", front: "a aldeia", reading: "aaldeia", meaning: "village", example: { jp: "A aldeia de Braga é tranquila.", en: "The Braga village is tranquil." }, drill: { jp: "A aldeia de Braga é tranquila", en: "The Braga village is tranquil" }, accept: ["the village", "hamlet", "small village"], hint: "al-DAY-a. Smaller than a cidade from Unit 7, and smaller than uma vila, which is the town in between. Portuguese took the word from Arabic, as it did most words here that begin with al-." },
        { id: "pt-u20l4-ocampo", type: "vocab", front: "o campo", reading: "ocampo", meaning: "countryside", example: { jp: "O campo de Portugal é tranquilo.", en: "Portugal's countryside is tranquil." }, drill: { jp: "O campo de Portugal é tranquilo", en: "Portugal's countryside is tranquil" }, accept: ["the countryside", "country", "field", "the country"], hint: "KAM-pu, nasal first syllable. The countryside as opposed to a cidade — ir para o campo is to get out of town. It is also a field, and a sports pitch: o campo de futebol, from Unit 19." },
        { id: "pt-u20l4-amontanha", type: "vocab", front: "a montanha", reading: "amontanha", meaning: "mountain", example: { jp: "A montanha é enorme e a aldeia é ali.", en: "The mountain is enormous and the village is there." }, drill: { jp: "A montanha é enorme e famosa", en: "The mountain is enormous and famous" }, accept: ["the mountain", "mount"], hint: "mon-TA-nya, with nh. Portugal's highest ground is a Serra da Estrela — and note serra, a mountain RANGE, is the word you will actually meet on maps and road signs far more often than montanha." },
        { id: "pt-u20l4-orio", type: "vocab", front: "o rio", reading: "orio", meaning: "river", example: { jp: "O rio de Coimbra é famoso.", en: "Coimbra's river is famous." }, drill: { jp: "O rio de Coimbra é famoso", en: "Coimbra's river is famous" }, accept: ["the river", "stream"], hint: "RREE-u, opening on the strong throat-r of a rua. The Tejo runs through Lisbon and the Douro through Porto. And o Rio de Janeiro is literally \"the river of January\" — a river the Portuguese were sure they had found, and had not." },
        { id: "pt-u20l4-apiscina", type: "vocab", front: "a piscina", reading: "apiscina", meaning: "swimming pool", example: { jp: "A piscina do hotel é enorme.", en: "The hotel pool is enormous." }, drill: { jp: "A piscina do hotel é enorme", en: "The hotel pool is enormous" }, accept: ["the pool", "swimming pool", "pool"], hint: "pish-SEE-na. From the Latin word for fish — the same root as o peixe in Unit 6. Nadar na piscina is a warmer proposition than o mar in April, which is why every hotel advertises one." },
      ],
    },
  ],
};
