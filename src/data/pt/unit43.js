// PT Unit 43 — As quantidades e os recipientes (slot: coverage-a2-4) — A2
// How much, and in what. A1 counts (u5) and Unit 16 pays; nothing yet lets a
// learner ask for a BOTTLE of something, a SLICE of it, or half of it.
//
// Carefully sited around block 1's u27, which owns the shop-counter measures
// o quilo, o litro, a embalagem and a dúzia. None of those four is carded here;
// they are used in hints only. This unit takes the containers themselves, the
// part-words, and the act of weighing and measuring — which u27 does not cover.
//
// o grama is the gender card of the unit: in Portugal the UNIT is masculine,
// o grama, while a grama is Brazilian for a lawn (pt-PT: a relva). o peso is
// carded against o preço from Unit 1 — one letter apart, and easy to swap.
// a largura's hint fixes largo = WIDE, not "large", which catches every English
// speaker at least once.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT43 = {
  id: "pt-u43",
  lang: "pt",
  title: "As quantidades e os recipientes",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "pt-u43l1",
      unit: 43,
      lesson: 1,
      title: "Os recipientes",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Ask for a bottle, a tin or a packet of something in a Portuguese shop.",
      items: [
        { id: "pt-u43l1-agarrafa", type: "vocab", front: "a garrafa", reading: "agarrafa", meaning: "bottle", example: { jp: "A garrafa de vinho está na mesa e a de água está no frigorífico.", en: "The wine bottle is on the table and the water one is in the fridge." }, drill: { jp: "A garrafa de vinho está na mesa", en: "The wine bottle is on the table" }, accept: ["the bottle"], hint: "ga-RRA-fa, strong rr, from Arabic gharrāfa. A half-bottle is uma garrafa de meio litro — and o garrafão is the five-litre jug of wine that lives under the table at a Portuguese family lunch." },
        { id: "pt-u43l1-alata", type: "vocab", front: "a lata", reading: "alata", meaning: "tin", example: { jp: "A lata de sardinha é barata e faz um almoço rápido.", en: "The tin of sardines is cheap and makes a quick lunch." }, drill: { jp: "A lata de sardinha é barata", en: "The tin of sardines is cheap" }, accept: ["the tin", "can", "the can"], hint: "LA-ta — metal, a tin or a can. Portuguese tinned fish is a serious craft and the painted lata de sardinha is now sold as a souvenir. Ter lata is a second sense entirely: to have cheek, to have nerve." },
        { id: "pt-u43l1-opacote", type: "vocab", front: "o pacote", reading: "opacote", meaning: "packet", example: { jp: "O pacote de farinha e o pacote de açúcar estão no armário da cozinha.", en: "The packet of flour and the packet of sugar are in the kitchen cupboard." }, drill: { jp: "O pacote de farinha está no armário", en: "The packet of flour is in the cupboard" }, accept: ["the packet", "pack", "package", "parcel"], hint: "pa-KO-te. A packet or a parcel; um pacote de leite is a carton. In tourism it is a package holiday, exactly as in English." },
        { id: "pt-u43l1-ofrasco", type: "vocab", front: "o frasco", reading: "ofrasco", meaning: "jar", example: { jp: "O frasco de azeite é de vidro e a tampa é de metal.", en: "The olive-oil jar is glass and the lid is metal." }, drill: { jp: "O frasco de azeite é de vidro", en: "The olive-oil jar is glass" }, accept: ["the jar", "flask", "bottle", "pot"], hint: "FRASH-ku — the s shushes before the c, as in a escola. A jar or a wide-mouthed bottle: jam, olives, perfume. A narrow one for wine would be a garrafa instead." },
        { id: "pt-u43l1-otubo", type: "vocab", front: "o tubo", reading: "otubo", meaning: "tube", example: { jp: "O tubo é pequeno e está na casa de banho.", en: "The tube is small and it's in the bathroom." }, drill: { jp: "O tubo é pequeno e branco", en: "The tube is small and white" }, accept: ["the tube", "pipe"], hint: "TOO-bu. A tube of toothpaste or paint — and also a pipe. O tubo de escape is a car's exhaust." },
        { id: "pt-u43l1-ataca", type: "vocab", front: "a taça", reading: "ataca", meaning: "bowl", example: { jp: "A taça de sopa é redonda e de barro, e o prato é quadrado.", en: "The soup bowl is round and made of clay, and the plate is square." }, drill: { jp: "A taça de sopa é redonda", en: "The soup bowl is round" }, accept: ["the bowl", "cup", "goblet", "trophy"], hint: "TA-sa, cedilla. A bowl, and also a stemmed glass — uma taça de vinho is a wine glass where um copo is a tumbler. It is the trophy too: a Taça de Portugal is the national cup." },
      ],
    },
    {
      id: "pt-u43l2",
      unit: 43,
      lesson: 2,
      title: "As partes e as porções",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say how much of something you want — half of it, a slice, a piece, or whatever is left.",
      items: [
        { id: "pt-u43l2-ametade", type: "vocab", front: "a metade", reading: "ametade", meaning: "half", example: { jp: "A metade do bolo é de Ana e a outra fica na cozinha.", en: "Half the cake is Ana's and the other half stays in the kitchen." }, drill: { jp: "A metade do bolo é enorme", en: "Half the cake is enormous" }, accept: ["the half", "one half"], hint: "me-TA-de, with the -dade ending of a cidade and a idade. This is the NOUN. The adjective is meio — meio-dia, meia-noite from Unit 5 — so Portuguese splits English's single \"half\" in two." },
        { id: "pt-u43l2-odobro", type: "vocab", front: "o dobro", reading: "odobro", meaning: "double", example: { jp: "O preço do hotel é o dobro no verão e a praia está cheia.", en: "The hotel price is double in summer and the beach is full." }, drill: { jp: "O dobro do preço é caro", en: "Double the price is expensive" }, accept: ["twice", "twice as much", "double the amount"], hint: "DO-bru. Twice as much. Its verb dobrar does three jobs — to double, to fold, and to turn a corner: dobrar à direita." },
        { id: "pt-u43l2-aparte", type: "vocab", front: "a parte", reading: "aparte", meaning: "part", example: { jp: "A parte do jantar que está na mesa é a sopa, e o peixe está na cozinha.", en: "The part of dinner that's on the table is the soup, and the fish is in the kitchen." }, drill: { jp: "A parte do jantar está na mesa", en: "Part of dinner is on the table" }, accept: ["the part", "portion", "share", "section"], hint: "PAR-te. A part or a share. Fazer parte de is to belong to something. Watch the accent: a parte is a part, but à parte means aside or separately." },
        { id: "pt-u43l2-opedaco", type: "vocab", front: "o pedaço", reading: "opedaco", meaning: "piece", example: { jp: "Um pedaço de pão com queijo é o petisco mais simples de Portugal.", en: "A piece of bread with cheese is the simplest petisco in Portugal." }, drill: { jp: "O pedaço de pão é pequeno", en: "The piece of bread is small" }, accept: ["the piece", "bit", "chunk", "lump"], hint: "pe-DA-su, cedilla. A piece broken or torn off — less regular than uma fatia, which is cut. Aos pedaços means in pieces, of a thing or of a person having a bad week." },
        { id: "pt-u43l2-afatia", type: "vocab", front: "a fatia", reading: "afatia", meaning: "slice", example: { jp: "A fatia de pão com azeite é o pequeno-almoço de muitos portugueses.", en: "A slice of bread with olive oil is breakfast for many Portuguese people." }, drill: { jp: "A fatia de pão é pequena", en: "The slice of bread is small" }, accept: ["the slice", "cut"], hint: "fa-TEE-a. A slice — cut deliberately and flat, where um pedaço is broken off. Uma fatia de bolo, uma fatia de queijo. The verb is fatiar." },
        { id: "pt-u43l2-oresto", type: "vocab", front: "o resto", reading: "oresto", meaning: "the rest", example: { jp: "O resto do bolo fica no frigorífico e comemos amanhã ao almoço.", en: "The rest of the cake stays in the fridge and we eat it tomorrow at lunch." }, drill: { jp: "O resto do bolo fica na caixa", en: "The rest of the cake stays in the box" }, accept: ["the remainder", "what is left", "leftovers", "rest"], hint: "RRESH-tu, strong r. What is left: o resto do dia is the rest of the day, and os restos are leftovers. The verb restar means to remain — resta pouco." },
      ],
    },
    {
      id: "pt-u43l3",
      unit: 43,
      lesson: 3,
      title: "Pesar e medir",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Weigh and measure things in a Portuguese kitchen or shop, in the units the country actually uses.",
      items: [
        { id: "pt-u43l3-pesar", type: "vocab", front: "pesar", reading: "pesar", meaning: "to weigh", example: { jp: "O empregado vai pesar o peixe na balança da loja.", en: "The shop assistant is going to weigh the fish on the shop's scales." }, drill: { jp: "Pesar o peixe na balança", en: "To weigh the fish on the scales" }, accept: ["weigh", "to weigh out"], hint: "pe-ZAR: peso, pesas, pesa. It covers both directions — \"I weigh the fish\" and \"it weighs three kilos\". Heavy is pesado, and the noun o peso is next." },
        { id: "pt-u43l3-medir", type: "vocab", front: "medir", reading: "medir", meaning: "to measure", example: { jp: "Vou medir a mesa e o vidro da janela do quarto.", en: "I'm going to measure the table and the glass of the bedroom window." }, drill: { jp: "Medir a mesa e a janela", en: "To measure the table and the window" }, accept: ["measure", "to size up"], hint: "me-DEER: meço, medes, mede — that meço, with a cedilla, is irregular and worth learning on its own. A measurement is uma medida, and feito à medida is made to measure." },
        { id: "pt-u43l3-opeso", type: "vocab", front: "o peso", reading: "opeso", meaning: "weight", example: { jp: "O peso da mala é importante no aeroporto e a de Ana é enorme.", en: "The suitcase's weight matters at the airport and Ana's is enormous." }, drill: { jp: "O peso da mala é importante", en: "The suitcase's weight is important" }, accept: ["the weight", "heaviness"], hint: "PE-zu. Weight — and the currency of several countries, which is the same idea: something weighed out. Keep it apart from o preço in Unit 1: one letter, and one of them is the price." },
        { id: "pt-u43l3-abalanca", type: "vocab", front: "a balança", reading: "abalanca", meaning: "scales", example: { jp: "A balança da cozinha é pequena e o peso do bolo é fácil de ver.", en: "The kitchen scales are small and the cake's weight is easy to read." }, drill: { jp: "A balança da cozinha é pequena", en: "The kitchen scales are small" }, accept: ["the scales", "scale", "balance", "weighing scales"], hint: "ba-LAN-sa, cedilla. SINGULAR in Portuguese where English insists on plural \"scales\". The zodiac sign Libra is Balança — and the balance of a bank account is something else again, o saldo." },
        { id: "pt-u43l3-ograma", type: "vocab", front: "o grama", reading: "ograma", meaning: "gram", example: { jp: "O grama é pequeno e a balança da cozinha é boa e pequena.", en: "The gram is small and the kitchen scales are good and small." }, drill: { jp: "O grama é muito pequeno", en: "The gram is very small" }, accept: ["the gram", "gramme", "the gramme"], hint: "GRA-ma — and in Portugal the unit is MASCULINE: o grama, um grama. Gender is doing real work here, because a grama in Brazil is the unit too, while in Portugal a grama is a lawn. The pt-PT word for lawn is a relva." },
        { id: "pt-u43l3-atonelada", type: "vocab", front: "a tonelada", reading: "atonelada", meaning: "tonne", example: { jp: "A tonelada é enorme e o barco do Porto é forte.", en: "A tonne is enormous and the Porto boat is strong." }, drill: { jp: "A tonelada é um peso enorme", en: "A tonne is an enormous weight" }, accept: ["the tonne", "ton", "metric ton"], hint: "tu-ne-LA-da — a thousand kilos. It is built on o tonel, a large barrel, the same barrel that gave English \"tun\" and, by way of the Portuguese wine trade, \"tonnage\"." },
      ],
    },
    {
      id: "pt-u43l4",
      unit: 43,
      lesson: 4,
      title: "As medidas",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Give the height, the width and the temperature of something in Portuguese.",
      items: [
        { id: "pt-u43l4-aaltura", type: "vocab", front: "a altura", reading: "aaltura", meaning: "height", example: { jp: "A altura do prédio é enorme e a janela do quarto é pequena.", en: "The building's height is enormous and the bedroom window is small." }, drill: { jp: "A altura do prédio é enorme", en: "The building's height is enormous" }, accept: ["the height", "tallness", "altitude"], hint: "al-TOO-ra, built on alto from Unit 10. Height — but in speech it far more often means a point in TIME: nessa altura, at that moment. Both senses are everyday." },
        { id: "pt-u43l4-alargura", type: "vocab", front: "a largura", reading: "alargura", meaning: "width", example: { jp: "A largura da porta é importante e o sofá da sala é enorme.", en: "The door's width matters and the living-room sofa is enormous." }, drill: { jp: "A largura da porta é importante", en: "The door's width is important" }, accept: ["the width", "breadth"], hint: "lar-GOO-ra, from largo in Unit 10 — and this is the trap: largo means WIDE, not \"large\". Every English speaker gets caught by it once, usually while buying clothes." },
        { id: "pt-u43l4-ocentimetro", type: "vocab", front: "o centímetro", reading: "ocentimetro", meaning: "centimetre", example: { jp: "O centímetro é pequeno e a largura da mesa é fácil de medir.", en: "The centimetre is small and the table's width is easy to measure." }, drill: { jp: "O centímetro é muito pequeno", en: "The centimetre is very small" }, accept: ["the centimetre", "centimeter", "the centimeter", "cm"], hint: "sen-TEE-me-tru — the accent puts the stress on TI. Portugal has been fully metric since 1852. Note the spelling of its big brother: Portugal writes o quilómetro with ó, Brazil writes quilômetro with ô." },
        { id: "pt-u43l4-ograu", type: "vocab", front: "o grau", reading: "ograu", meaning: "degree", example: { jp: "O grau é importante no inverno e hoje o Porto tem oito.", en: "The degree matters in winter and today Porto has eight." }, drill: { jp: "O grau de calor é importante", en: "The degree of heat is important" }, accept: ["the degree", "grade", "level"], hint: "GROW, one syllable, rhyming with mau. A degree of temperature or of angle; plural os graus. A UNIVERSITY degree is not this word at all — that is uma licenciatura, from Unit 17." },
        { id: "pt-u43l4-atemperatura", type: "vocab", front: "a temperatura", reading: "atemperatura", meaning: "temperature", example: { jp: "A temperatura da água é boa e as crianças estão na piscina.", en: "The water temperature is good and the children are in the pool." }, drill: { jp: "A temperatura da água é boa", en: "The water temperature is good" }, accept: ["the temperature"], hint: "tem-pe-ra-TOO-ra. Note the family it belongs to: o tempo (Unit 8), temperar (Unit 41) and a temperatura all descend from Latin tempus — the idea of measure and due proportion." },
        { id: "pt-u43l4-encher", type: "vocab", front: "encher", reading: "encher", meaning: "to fill", example: { jp: "Vou encher a garrafa de água e o copo de vinho, e o jantar fica bom.", en: "I'm going to fill the water bottle and the wine glass, and dinner turns out well." }, drill: { jp: "Encher a garrafa de água", en: "To fill the bottle with water" }, accept: ["fill", "to fill up", "to fill in"], hint: "en-SHER: encho, enches, enche. Built straight on cheio from Unit 10 — full. Encher-se de is to stuff oneself with something, and the opposite verb is esvaziar, from vazio." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 Os recipientes  : o cesto (basket) · a caneca (mug) · o barril (barrel)
//   l2 Partes/porções  : o par (pair) · a dose (portion) · o total (total)
//   l3 Pesar e medir   : contar (to count) · o número (number) · o comprimento (length)
//   l4 As medidas      : fundo (deep) · o volume (volume) · a profundidade (depth)
