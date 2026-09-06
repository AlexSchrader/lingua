// PT Unit 46 — A geografia e as direções (slot: coverage-a2-7) — A2
// Where places are, and what the land does. A1's u7 gave à direita, à esquerda
// and em frente — directions inside a town — and u20 gave a montanha, o rio,
// o mar and o campo as single features. Nothing yet lets a learner say a place
// is in the north, describe a coastline, or name a border.
//
// Sited away from block 1's u23 (travel: longe, perto, a distância) and u26
// (nature and weather: a pedra, a ilha, o céu, a neve). This unit is TERRAIN and
// POSITION — the shape of a country, not its plants or its weather.
//
// o leste is deliberately the card, not "o este": Portuguese has both words for
// east, and este alone is already the demonstrative "this" taught at A1 u12.
// Choosing leste keeps the front unambiguous, and the hint says why. Two gender
// cards close the unit's grammar: a capital (city) against o capital (money,
// Unit 45), and a costa (coastline) against as costas (your back).
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT46 = {
  id: "pt-u46",
  lang: "pt",
  title: "A geografia e as direções",
  order: 46,
  stage: "a2",
  lessons: [
    {
      id: "pt-u46l1",
      unit: 46,
      lesson: 1,
      title: "Os pontos cardeais",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say whereabouts in a country a place is, using the four points of the compass.",
      items: [
        { id: "pt-u46l1-onorte", type: "vocab", front: "o norte", reading: "onorte", meaning: "north", example: { jp: "O Porto é no norte de Portugal e o Algarve é no sul.", en: "Porto is in the north of Portugal and the Algarve is in the south." }, drill: { jp: "O norte de Portugal é frio", en: "The north of Portugal is cold" }, accept: ["the north", "northern"], hint: "NOR-te. Portugal's north is green, rainy, and where the country began — o Norte is a region as much as a direction. Note that Portuguese says NO norte, with em, where English says \"in the north\"." },
        { id: "pt-u46l1-osul", type: "vocab", front: "o sul", reading: "osul", meaning: "south", example: { jp: "O sul de Portugal é quente no verão e a praia é enorme.", en: "The south of Portugal is hot in summer and the beach is enormous." }, drill: { jp: "O sul de Portugal é quente", en: "The south of Portugal is hot" }, accept: ["the south", "southern"], hint: "SOOL. What most people mean by o Sul is o Algarve. The word does not change in the plural, and it turns up unchanged in o Atlântico Sul and in sul-africano." },
        { id: "pt-u46l1-oleste", type: "vocab", front: "o leste", reading: "oleste", meaning: "east", example: { jp: "O leste de Portugal é tranquilo e a fronteira está ali.", en: "The east of Portugal is quiet and the border is over there." }, drill: { jp: "O leste de Portugal é tranquilo", en: "The east of Portugal is quiet" }, accept: ["the east", "eastern"], hint: "LESH-te. Portuguese has TWO words for east — este and leste — and leste is the one to reach for, because este on its own is already \"this\", which you learned in Unit 12. A Portuguese compass reads N, S, E, O." },
        { id: "pt-u46l1-ooeste", type: "vocab", front: "o oeste", reading: "ooeste", meaning: "west", example: { jp: "O oeste de Portugal é o mar e o sol vai ali no fim do dia.", en: "The west of Portugal is the sea and the sun goes there at the end of the day." }, drill: { jp: "O oeste de Portugal é o mar", en: "The west of Portugal is the sea" }, accept: ["the west", "western"], hint: "WESH-te — three syllables, o-es-te. And note the compass letter: west is O, for Oeste, not W. That single letter catches every English speaker reading a Portuguese map for the first time." },
        { id: "pt-u46l1-abussola", type: "vocab", front: "a bússola", reading: "abussola", meaning: "compass", example: { jp: "A bússola do barco é importante e o mar é enorme.", en: "The boat's compass is important and the sea is enormous." }, drill: { jp: "A bússola do barco é importante", en: "The boat's compass is important" }, accept: ["the compass"], hint: "BOO-so-la, stress on the first syllable. Portugal sailed by one for two centuries — and a rosa dos ventos, the compass rose, is laid out in stone on the pavement at Belém, big enough to walk across." },
        { id: "pt-u46l1-adirecao", type: "vocab", front: "a direção", reading: "adirecao", meaning: "direction", example: { jp: "A direção do vento é importante no mar e a bússola é boa.", en: "The wind's direction matters at sea and the compass is good." }, drill: { jp: "A direção do vento é importante", en: "The wind's direction is important" }, accept: ["the direction", "way", "management", "steering"], hint: "di-re-SAWNG, -ção nasal; plural as direções. A direction, and also the management of a company. Same family as à direita (Unit 7) and o direito (Unit 44). Note the post-1990 spelling drops the c: direção, not \"direcção\"." },
      ],
    },
    {
      id: "pt-u46l2",
      unit: 46,
      lesson: 2,
      title: "A paisagem",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe the shape of the land in Portuguese — valleys, hills, coast and caves.",
      items: [
        { id: "pt-u46l2-ovale", type: "vocab", front: "o vale", reading: "ovale", meaning: "valley", example: { jp: "O vale do rio Douro é famoso e o vinho é delicioso.", en: "The Douro river valley is famous and the wine is delicious." }, drill: { jp: "O vale do rio é famoso", en: "The river valley is famous" }, accept: ["the valley", "dale"], hint: "VA-le. O Vale do Douro grows port wine on terraces cut into the hillsides and is a World Heritage site. Careful: vale is also \"it is worth\" — vale a pena, it's worth the trouble." },
        { id: "pt-u46l2-acolina", type: "vocab", front: "a colina", reading: "acolina", meaning: "hill", example: { jp: "Lisboa tem sete colinas e o elétrico é famoso em todo o país.", en: "Lisbon has seven hills and the tram is famous across the country." }, drill: { jp: "A colina de Lisboa é enorme", en: "The Lisbon hill is enormous" }, accept: ["the hill", "rise", "hillside"], hint: "ku-LEE-na. Lisbon is built on seven of them, which is why the trams climb and why the city has public lifts. A bigger one is um monte; a mountain proper is a montanha, from Unit 20." },
        { id: "pt-u46l2-aserra", type: "vocab", front: "a serra", reading: "aserra", meaning: "mountain range", example: { jp: "A serra da Estrela é a montanha mais alta de Portugal.", en: "The Serra da Estrela is the highest mountain in Portugal." }, drill: { jp: "A serra da Estrela é alta", en: "The Serra da Estrela is high" }, accept: ["the mountain range", "range", "sierra", "mountains"], hint: "SE-rra, strong double rr. A mountain RANGE — and this is the word Portuguese maps and road signs actually use, far more often than montanha. Serra also means a saw, which is exactly the image: a toothed ridge." },
        { id: "pt-u46l2-acosta", type: "vocab", front: "a costa", reading: "acosta", meaning: "coast", example: { jp: "A costa de Portugal é enorme e o mar é frio no inverno.", en: "Portugal's coast is enormous and the sea is cold in winter." }, drill: { jp: "A costa de Portugal é enorme", en: "Portugal's coast is enormous" }, accept: ["the coast", "coastline", "shore", "seaside"], hint: "KOSH-ta — around 800 kilometres of it. Careful with the plural: as costas is your BACK, the body word. Same spelling, and only the number tells you which one is meant." },
        { id: "pt-u46l2-olago", type: "vocab", front: "o lago", reading: "olago", meaning: "lake", example: { jp: "O lago do jardim é pequeno e as crianças brincam ali todo o dia.", en: "The garden lake is small and the children play there all day." }, drill: { jp: "O lago do jardim é pequeno", en: "The garden lake is small" }, accept: ["the lake", "pond"], hint: "LA-gu. Portugal has very few natural ones — most large water here is uma barragem, a dam reservoir. Uma lagoa is a lagoon, and the Lagoa das Sete Cidades in the Azores is the one on the postcards." },
        { id: "pt-u46l2-acaverna", type: "vocab", front: "a caverna", reading: "acaverna", meaning: "cave", example: { jp: "A caverna da serra é escura e fria, e o solo é duro.", en: "The cave in the mountains is dark and cold, and the ground is hard." }, drill: { jp: "A caverna da serra é escura", en: "The mountain cave is dark" }, accept: ["the cave", "cavern", "grotto"], hint: "ka-VER-na. Portuguese also says uma gruta, which is the word on the tourist signs — as Grutas de Mira de Aire are the best known. Caverna suggests something wilder and deeper than a gruta." },
      ],
    },
    {
      id: "pt-u46l3",
      unit: 46,
      lesson: 3,
      title: "O território",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about countries and regions in Portuguese — borders, capitals, and how big a place is.",
      items: [
        { id: "pt-u46l3-afronteira", type: "vocab", front: "a fronteira", reading: "afronteira", meaning: "border", example: { jp: "A fronteira de Portugal com Espanha é enorme e tranquila.", en: "Portugal's border with Spain is enormous and quiet." }, drill: { jp: "A fronteira de Portugal é enorme", en: "Portugal's border is enormous" }, accept: ["the border", "frontier", "boundary"], hint: "fron-TAY-ra. Portugal's border with Spain has barely moved since 1297, which makes it one of the oldest in the world. The old country word for that same line is a raia." },
        { id: "pt-u46l3-ocontinente", type: "vocab", front: "o continente", reading: "ocontinente", meaning: "continent", example: { jp: "O continente é enorme e a Europa é o continente de Portugal.", en: "The continent is enormous and Europe is Portugal's continent." }, drill: { jp: "O continente da Europa é enorme", en: "The continent of Europe is enormous" }, accept: ["the continent", "mainland"], hint: "kon-ti-NEN-te — and in Portugal it carries a sharper second sense: o Continente means MAINLAND Portugal, as against Madeira and the Azores. Islanders say ir ao continente for a trip to Lisbon." },
        { id: "pt-u46l3-aregiao", type: "vocab", front: "a região", reading: "aregiao", meaning: "region", example: { jp: "A região do Douro é famosa e o vinho é delicioso.", en: "The Douro region is famous and the wine is delicious." }, drill: { jp: "A região do Douro é famosa", en: "The Douro region is famous" }, accept: ["the region", "area", "district"], hint: "rre-zhi-AWNG, -ão nasal; plural as regiões. Portugal's wine regions are defined in law and printed on every bottle, so this is a word you end up reading constantly." },
        { id: "pt-u46l3-oterritorio", type: "vocab", front: "o território", reading: "oterritorio", meaning: "territory", example: { jp: "O território de Portugal é pequeno e o mar é enorme.", en: "Portugal's territory is small and the sea is enormous." }, drill: { jp: "O território de Portugal é pequeno", en: "Portugal's territory is small" }, accept: ["the territory", "land", "domain"], hint: "te-rri-TO-riu, strong rr, with the -ório ending of o escritório. Portugal's SEA territory is among the largest in Europe — many times its land — and it is a fact the country is fond of repeating." },
        { id: "pt-u46l3-acapital", type: "vocab", front: "a capital", reading: "acapital", meaning: "capital", example: { jp: "A capital de Portugal é Lisboa e a do Brasil é Brasília.", en: "Portugal's capital is Lisbon and Brazil's is Brasília." }, drill: { jp: "A capital de Portugal é Lisboa", en: "Portugal's capital is Lisbon" }, accept: ["the capital", "capital city"], hint: "ka-pi-TAL — the capital CITY, and feminine. The gender is doing real work: o capital, masculine, is money capital, the kind in Unit 45. Same spelling, different article, different world." },
        { id: "pt-u46l3-avila", type: "vocab", front: "a vila", reading: "avila", meaning: "town", example: { jp: "A vila de Óbidos é famosa e a rua é muito tranquila.", en: "The town of Óbidos is famous and the street is very quiet." }, drill: { jp: "A vila de Óbidos é famosa", en: "The town of Óbidos is famous" }, accept: ["the town", "small town", "borough"], hint: "VEE-la. Portugal's formal middle rung: bigger than uma aldeia (Unit 20), smaller than uma cidade. The status is granted by law and a place puts it on its sign. It also opens dozens of place names — Vila Real, Vila Nova de Gaia." },
      ],
    },
    {
      id: "pt-u46l4",
      unit: 46,
      lesson: 4,
      title: "A terra e a água",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the wilder kinds of place, and say what the sea is doing today.",
      items: [
        { id: "pt-u46l4-odeserto", type: "vocab", front: "o deserto", reading: "odeserto", meaning: "desert", example: { jp: "O deserto é quente e não há água em todo o território.", en: "The desert is hot and there is no water in the whole territory." }, drill: { jp: "O deserto é quente e enorme", en: "The desert is hot and enormous" }, accept: ["the desert", "wasteland"], hint: "de-ZER-tu. As an adjective it means DESERTED — uma rua deserta is an empty street, and that is how you will most often meet the word in Portugal, a country with no deserts of its own." },
        { id: "pt-u46l4-aselva", type: "vocab", front: "a selva", reading: "aselva", meaning: "jungle", example: { jp: "A selva do Brasil é enorme e o rio é muito comprido.", en: "Brazil's jungle is enormous and the river is very long." }, drill: { jp: "A selva do Brasil é enorme", en: "Brazil's jungle is enormous" }, accept: ["the jungle", "rainforest", "forest"], hint: "SEL-va. Jungle or rainforest. The one everybody means is a Amazónia — and note the spelling divide: Portugal writes it with ó, Brazil with ô, Amazônia." },
        { id: "pt-u46l4-osolo", type: "vocab", front: "o solo", reading: "osolo", meaning: "soil", example: { jp: "O solo do Alentejo é bom e o azeite é delicioso.", en: "The Alentejo's soil is good and the olive oil is delicious." }, drill: { jp: "O solo do Alentejo é bom", en: "The Alentejo's soil is good" }, accept: ["the soil", "ground", "earth", "land"], hint: "SO-lu. Soil or ground, and in formal writing the floor of a building, where speech would say o chão. In music it is the same solo Portuguese borrowed back from Italian." },
        { id: "pt-u46l4-amare", type: "vocab", front: "a maré", reading: "amare", meaning: "tide", example: { jp: "A maré está alta e o barco não fica na areia da praia.", en: "The tide is high and the boat isn't sitting on the beach sand." }, drill: { jp: "A maré do mar está alta", en: "The sea's tide is high" }, accept: ["the tide"], hint: "ma-RE, stressed on the accented e. Maré alta and maré baixa. Portugal's Atlantic tides are big — and estar de maré is a set phrase meaning to be in the mood for something." },
        { id: "pt-u46l4-aonda", type: "vocab", front: "a onda", reading: "aonda", meaning: "wave", example: { jp: "A onda da Nazaré é enorme e o mar ali é muito forte.", en: "The wave at Nazaré is enormous and the sea there is very strong." }, drill: { jp: "A onda da Nazaré é enorme", en: "The Nazaré wave is enormous" }, accept: ["the wave", "surf", "swell"], hint: "ON-da, nasal. A wave of water — and of radio: as ondas curtas, short wave. Nazaré has the largest surfed waves on earth, up to thirty metres, because of a deep canyon just offshore." },
        { id: "pt-u46l4-acorrente", type: "vocab", front: "a corrente", reading: "acorrente", meaning: "current", example: { jp: "A corrente do mar é forte e nadar ali é um problema.", en: "The sea current is strong and swimming there is a problem." }, drill: { jp: "A corrente do mar é forte", en: "The sea current is strong" }, accept: ["the current", "flow", "stream", "chain"], hint: "ku-RREN-te, strong rr. A current of water or of electricity — and also a CHAIN, uma corrente de ouro. As an adjective it means current in the sense of present: o mês corrente." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 Pontos cardeais : a paisagem (landscape) · a planta (street plan) · o rumo (bearing)
//   l2 A paisagem      : a encosta (slope) · o penhasco (cliff) · a duna (dune)
//   l3 O território    : o concelho (municipality — the pt-PT administrative unit) · a nação (nation) · o estrangeiro (abroad)
//   l4 A terra e água  : a foz (river mouth) · o cabo (cape) · a nascente (spring, source)
