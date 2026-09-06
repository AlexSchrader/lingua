// PT Unit 23 — As viagens e os transportes — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT23 = {
  id: "pt-u23",
  lang: "pt",
  title: "As viagens e os transportes",
  order: 23,
  stage: "a2",
  lessons: [
    {
      id: "pt-u23l1",
      unit: 23,
      lesson: 1,
      title: "De metro e de bicicleta",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the ways of getting around a Portuguese city beyond the train and bus you already know, and say which one you take.",
      items: [
        { id: "pt-u23l1-ometro", type: "vocab", front: "o metro", reading: "ometro", meaning: "underground", example: { jp: "Vou de metro até ao aeroporto porque é mais rápido.", en: "I go by metro to the airport because it is quicker." }, drill: { jp: "O metro da cidade é novo", en: "The city metro is new" }, accept: ["the metro", "subway", "the underground", "tube"], hint: "MEH-tru. Lisbon and Porto both have one. Note de metro with no article for the means of travel — de metro, de comboio, de carro, but a pé on foot." },
        { id: "pt-u23l1-abicicleta", type: "vocab", front: "a bicicleta", reading: "abicicleta", meaning: "bicycle", example: { jp: "Ando de bicicleta ao fim de semana, quando não chove.", en: "I ride a bike at the weekend, when it isn't raining." }, drill: { jp: "A bicicleta é do meu irmão", en: "The bicycle is my brother's" }, accept: ["the bicycle", "bike", "the bike", "cycle"], hint: "bi-si-KLE-ta. Andar DE bicicleta is to ride one — the verb is to walk, but with de it becomes to travel by. A bicicleta is often shortened to a bike in speech." },
        { id: "pt-u23l1-amota", type: "vocab", front: "a mota", reading: "amota", meaning: "motorbike", example: { jp: "O meu primo comprou uma mota e agora vai sempre de mota.", en: "My cousin bought a motorbike and now he always goes by motorbike." }, drill: { jp: "A mota é do meu primo", en: "The motorbike is my cousin's" }, accept: ["the motorbike", "motorcycle", "the motorcycle", "scooter"], hint: "PORTUGAL SAYS MOTA. Brazil says a moto. Same machine, one letter, and it is a reliable tell." },
        { id: "pt-u23l1-otaxi", type: "vocab", front: "o táxi", reading: "otaxi", meaning: "taxi", example: { jp: "Apanhámos um táxi porque o metro já estava fechado.", en: "We took a taxi because the metro was already closed." }, drill: { jp: "O táxi está na praça", en: "The taxi is in the square" }, accept: ["the taxi", "cab", "the cab"], hint: "TAK-see. Note apanhar again — you catch a taxi in Portugal. The stand is a praça de táxis, which reuses praça from Unit 7." },
        { id: "pt-u23l1-conduzir", type: "vocab", front: "conduzir", reading: "conduzir", meaning: "to drive", example: { jp: "Aprendi a conduzir aos dezoito anos, no carro do meu pai.", en: "I learned to drive at eighteen, in my father's car." }, drill: { jp: "Conduzir o carro do pai", en: "Driving father's car" }, accept: ["drive", "to steer"], hint: "PORTUGAL SAYS CONDUZIR. Brazil says dirigir, which in Portugal means to direct or manage. conduzo, conduzes, conduz. A carta de condução is the driving licence." },
        { id: "pt-u23l1-agasolina", type: "vocab", front: "a gasolina", reading: "agasolina", meaning: "petrol", example: { jp: "A gasolina está cada vez mais cara e eu ando mais de metro.", en: "Petrol keeps getting more expensive and I travel more by metro." }, drill: { jp: "A gasolina está muito cara", en: "Petrol is very expensive" }, accept: ["the petrol", "gas", "gasoline", "fuel"], hint: "ga-zo-LEE-na, s as z. Diesel is o gasóleo, and the two are one letter apart on the pump — worth reading carefully before you fill up." },
      ],
    },
    {
      id: "pt-u23l2",
      unit: 23,
      lesson: 2,
      title: "No aeroporto",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get through a Portuguese airport — find your flight, your luggage and your gate, and understand that the flight is delayed.",
      items: [
        { id: "pt-u23l2-ovoo", type: "vocab", front: "o voo", reading: "ovoo", meaning: "flight", example: { jp: "O voo para o Porto foi cancelado por causa do nevoeiro.", en: "The flight to Porto was cancelled because of the fog." }, drill: { jp: "O voo do Porto está cheio", en: "The Porto flight is full" }, accept: ["the flight", "a flight"], hint: "VO-u, two syllables, from voar in Unit 20. Note there is no accent on it since the 1990 spelling reform — Portugal used to write vôo." },
        { id: "pt-u23l2-abagagem", type: "vocab", front: "a bagagem", reading: "abagagem", meaning: "luggage", example: { jp: "Perdi a bagagem em Lisboa e só a recebi três dias depois.", en: "I lost my luggage in Lisbon and only got it back three days later." }, drill: { jp: "A bagagem chegou muito tarde", en: "The luggage arrived very late" }, accept: ["the luggage", "baggage", "bags"], hint: "ba-GA-zhem, with the zh of measure. It is uncountable like English luggage — uma bagagem sounds wrong; you would count as malas, the bags from Unit 20." },
        { id: "pt-u23l2-odestino", type: "vocab", front: "o destino", reading: "odestino", meaning: "destination", example: { jp: "Qual é o destino do próximo comboio que sai daqui?", en: "What is the destination of the next train leaving from here?" }, drill: { jp: "O destino do comboio é Lisboa", en: "The train's destination is Lisbon" }, accept: ["the destination", "where to"], hint: "desh-TEE-nu. It is also destiny or fate, and Portuguese does not separate the two — the board at the station and the word in a fado song are the same." },
        { id: "pt-u23l2-opassageiro", type: "vocab", front: "o passageiro", reading: "opassageiro", meaning: "passenger", example: { jp: "Os passageiros do voo das seis já estão à espera.", en: "The passengers on the six o'clock flight are already waiting." }, drill: { jp: "O passageiro do avião é inglês", en: "The plane passenger is English" }, accept: ["the passenger", "a passenger", "traveller"], hint: "pa-sa-ZHAY-ru, and it agrees: a passageira. As an adjective it means passing or fleeting, which is the same idea seen from the other side." },
        { id: "pt-u23l2-atrasado", type: "vocab", front: "atrasado", reading: "atrasado", meaning: "late", example: { jp: "O comboio está atrasado outra vez e vou chegar tarde ao trabalho.", en: "The train is late again and I'm going to arrive late for work." }, drill: { jp: "O comboio está atrasado hoje", en: "The train is late today" }, accept: ["delayed", "behind", "running late"], hint: "a-tra-ZA-du, and it agrees: atrasada. Estar atrasado is to be running late; o atraso is the delay itself. The opposite is adiantado, early." },
        { id: "pt-u23l2-embarcar", type: "vocab", front: "embarcar", reading: "embarcar", meaning: "to board", example: { jp: "Vamos embarcar dentro de vinte minutos, na porta nove.", en: "We board in twenty minutes, at gate nine." }, drill: { jp: "Embarcar no avião é fácil", en: "Boarding the plane is easy" }, accept: ["board", "to get on", "get on", "embark"], hint: "em-bar-KAR. From barco, the boat in Unit 20 — the word came off ships and onto planes. o embarque is boarding, what the departure board calls it." },
      ],
    },
    {
      id: "pt-u23l3",
      unit: 23,
      lesson: 3,
      title: "No hotel",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Book and check into a Portuguese hotel, and ask for the room you actually want.",
      items: [
        { id: "pt-u23l3-reservar", type: "vocab", front: "reservar", reading: "reservar", meaning: "to book", example: { jp: "Reservei um quarto com vista para o mar durante três noites.", en: "I booked a room with a sea view for three nights." }, drill: { jp: "Reservar um quarto por três noites", en: "Booking a room for three nights" }, accept: ["book", "to reserve", "reserve"], hint: "re-zer-VAR, s as z. A reserva is the booking. Portugal also says marcar for appointments — marcar uma consulta, from Unit 11." },
        { id: "pt-u23l3-arececao", type: "vocab", front: "a receção", reading: "arececao", meaning: "reception", example: { jp: "Deixei a chave na receção quando saí de manhã.", en: "I left the key at reception when I went out in the morning." }, drill: { jp: "A receção é muito grande", en: "Reception is very big" }, accept: ["the reception", "front desk", "the front desk"], hint: "re-se-SAWNG. Note the spelling: since the 1990 accord Portugal writes receção without the old silent p of recepção. Brazil kept recepção, so this is a visible tell." },
        { id: "pt-u23l3-oturista", type: "vocab", front: "o turista", reading: "oturista", meaning: "tourist", example: { jp: "No verão há muitos turistas no centro e os preços sobem.", en: "In summer there are many tourists in the centre and prices go up." }, drill: { jp: "O turista perdeu o passaporte", en: "The tourist lost the passport" }, accept: ["the tourist", "a tourist"], hint: "tu-REESH-ta. It ends in -a but takes either article — o turista for a man, a turista for a woman. A whole class of nouns does this: o dentista, o artista." },
        { id: "pt-u23l3-alugar", type: "vocab", front: "alugar", reading: "alugar", meaning: "to rent", example: { jp: "Aluguei um carro pequeno para conhecer o campo.", en: "I rented a small car to get to know the countryside." }, drill: { jp: "Alugar um carro pequeno", en: "Renting a small car" }, accept: ["rent", "to hire", "hire", "to let"], hint: "a-lu-GAR. One verb for both renting FROM and renting OUT — o aluguer is the rent. Portugal writes aluguer where Brazil writes aluguel." },
        { id: "pt-u23l3-oelevador", type: "vocab", front: "o elevador", reading: "oelevador", meaning: "lift", example: { jp: "O elevador está avariado, temos de subir pela escada.", en: "The lift is out of order, we have to go up by the stairs." }, drill: { jp: "O elevador do prédio é pequeno", en: "The building lift is small" }, accept: ["the lift", "elevator", "the elevator"], hint: "e-le-va-DOR. In Lisbon an Elevador can also be a funicular climbing a hill — the Elevador da Glória is one, and it is not a lift at all." },
        { id: "pt-u23l3-avista", type: "vocab", front: "a vista", reading: "avista", meaning: "view", example: { jp: "O quarto tem uma vista fantástica para o rio.", en: "The room has a fantastic view over the river." }, drill: { jp: "A vista do quarto é fantástica", en: "The view from the room is fantastic" }, accept: ["the view", "sight", "outlook"], hint: "VEESH-ta. Com vista PARA is the fixed phrase for a view over something. It is also the past participle of ver — a thing seen — which is where the word comes from." },
      ],
    },
    {
      id: "pt-u23l4",
      unit: 23,
      lesson: 4,
      title: "Na estrada",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Describe a journey by road — how far it is, how to get there, and what to do when you get lost.",
      items: [
        { id: "pt-u23l4-aponte", type: "vocab", front: "a ponte", reading: "aponte", meaning: "bridge", example: { jp: "Passámos a ponte e vimos o mar do outro lado.", en: "We crossed the bridge and saw the sea on the other side." }, drill: { jp: "Passar a ponte de manhã", en: "Crossing the bridge in the morning" }, accept: ["the bridge", "a bridge"], hint: "PON-te, nasal first syllable. Lisbon's two are the Ponte 25 de Abril and the Ponte Vasco da Gama, and both appear on road signs long before the word does in a book." },
        { id: "pt-u23l4-aautoestrada", type: "vocab", front: "a autoestrada", reading: "aautoestrada", meaning: "motorway", example: { jp: "A autoestrada é mais rápida mas também é mais cara.", en: "The motorway is faster but it is also more expensive." }, drill: { jp: "A autoestrada é muito cara", en: "The motorway is very expensive" }, accept: ["the motorway", "highway", "the highway", "freeway"], hint: "auto plus estrada, the road from Unit 20 — the same trick that built autocarro. Since the 1990 accord it is written solid, without the old hyphen. Portugal tolls them, so bring a card." },
        { id: "pt-u23l4-perderse", type: "vocab", front: "perder-se", reading: "perderse", meaning: "to get lost", example: { jp: "Perdemo-nos no campo porque o telemóvel não tinha rede.", en: "We got lost in the countryside because the phone had no signal." }, drill: { jp: "Perder-se no campo sem mapa", en: "Getting lost in the countryside without a map" }, accept: ["get lost", "to lose one's way", "lose your way"], hint: "perco-me, perdes-te, perde-se. Without the pronoun perder is simply to lose — perdi a bagagem. The pronoun is what turns losing into getting lost." },
        { id: "pt-u23l4-longe", type: "vocab", front: "longe", reading: "longe", meaning: "far", example: { jp: "A praia fica longe daqui, é melhor ir de carro.", en: "The beach is far from here, it is better to go by car." }, drill: { jp: "A praia fica muito longe", en: "The beach is very far" }, accept: ["far away", "distant", "a long way"], hint: "LON-zhe, nasal then the zh. Longe DE is far from. Ao longe means in the distance, which is a different idea built on the same word." },
        { id: "pt-u23l4-perto", type: "vocab", front: "perto", reading: "perto", meaning: "near", example: { jp: "Moro perto da estação, posso ir a pé em dez minutos.", en: "I live near the station, I can walk there in ten minutes." }, drill: { jp: "Morar perto da estação central", en: "Living near the central station" }, accept: ["close", "nearby", "close by", "near to"], hint: "PER-tu. Perto DE is near to. Do not let it drift toward Spanish cerca — Portuguese cerca means a fence, and perto is the everyday word." },
        { id: "pt-u23l4-adistancia", type: "vocab", front: "a distância", reading: "adistancia", meaning: "distance", example: { jp: "Qual é a distância entre Lisboa e o Porto de comboio?", en: "What is the distance between Lisbon and Porto by train?" }, drill: { jp: "A distância entre Lisboa e Braga", en: "The distance between Lisbon and Braga" }, accept: ["the distance", "how far"], hint: "dish-TAN-sia. Note the accent on the a — it marks the stress, which falls one syllable earlier than English distance. Ficar à distância is to keep away." },
      ],
    },
  ],
};
