// PT Unit 82 — A medida e a proporção (slot: coverage-b1-9) — B1
// HOW MUCH, HOW MANY, HOW FAR UP. A2 u43 As quantidades e os recipientes gives
// the corpus the CONCRETE half — o quilo, a metade, a parte, o dobro, o grau, a
// largura, pesado — and u34 medir and o peso. What is missing is the abstract
// layer a B1 learner needs to read a news report: a percentage, a proportion, an
// average, a rate of increase, a maximum, an approximation.
//
// SLOT BOUNDARIES (both siblings consulted before authoring):
//   Block 2 stated in writing that it is NOT taking measure/quantity; this slot
//   is mine. medir (u34), pesar (u43) and o dobro (u43) are SPENT — the crew
//   lead caught all three on the first slate — so they appear in examples only.
//   u43 also owns a metade, a parte, o grau; u45 a taxa; u34 o resultado.
//   u53 Comparação e grau (block 1) owns comparing two things (mais… do que);
//   this unit owns the number itself, never the comparison frame.
//   u83 O espaço e a disposição (mine, later) owns position; this unit owns size.
//
// One lexeme per family: calcular without o cálculo, aumentar without o aumento,
// somar without a soma, duplicar beside o triplo rather than beside o dobro.
// THE FORWARD ASSUMPTION THIS HEADER USED TO MAKE IS NOW SETTLED. `maior` is
// used in two examples here and was absent from u1-u50 when this unit was
// written. It is the irregular comparative of grande and the assumption was
// that block 1 would card it at u53 Comparação e grau. Block 1 had NOT carded
// it: the merge-day sweep found `maior` used 24 times across the band and
// taught nowhere in pt, hiding from the lint teach-before-use check behind
// `a maioria` (u40). The lead carded it, with `pior`, at u53l1 on merge day,
// so these two examples now stand on taught vocabulary. Precondition met.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT82 = {
  id: "pt-u82",
  lang: "pt",
  title: "A medida e a proporção",
  order: 82,
  stage: "b1",
  lessons: [
    {
      id: "pt-u82l1",
      unit: 82,
      lesson: 1,
      title: "Medir e contar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Work with numbers in Portuguese — take a measurement, add them up, divide them, give the total.",
      items: [
        { id: "pt-u82l1-onumero", type: "vocab", front: "o número", reading: "onumero", meaning: "number", example: { jp: "O número de pessoas na praia é maior no verão.", en: "The number of people on the beach is higher in the summer." }, drill: { jp: "O número de pessoas é maior", en: "The number of people is higher" }, accept: ["the number", "number", "figure", "the figure", "size"], hint: "NOO-me-ru, stress on the first syllable. A quantity and a house or phone number alike — and shoe size: que número calça? is what shoe size do you take." },
        { id: "pt-u82l1-calcular", type: "vocab", front: "calcular", reading: "calcular", meaning: "to work out", example: { jp: "O chefe calculou o preço do trabalho antes da reunião.", en: "The boss worked out the price of the job before the meeting." }, drill: { jp: "Vou calcular o preço do trabalho", en: "I'm going to work out the price of the job" }, accept: ["calculate", "to calculate", "work out", "to work out", "to reckon", "to estimate"], hint: "kal-ku-LAR. Arithmetic, and also reckoning in your head — calculo que sejam vinte, I reckon there are twenty. A calculadora does the first job for you." },
        { id: "pt-u82l1-somar", type: "vocab", front: "somar", reading: "somar", meaning: "to add up", example: { jp: "A criança já sabe somar os números até cem.", en: "The child can already add up the numbers to a hundred." }, drill: { jp: "A criança já sabe somar os números", en: "The child can already add up the numbers" }, accept: ["add", "to add", "add up", "to add up", "to total", "to sum"], hint: "su-MAR. Numbers only — for adding to what was said, Portuguese uses acrescentar. A soma is the sum, and ao todo soma cem is it comes to a hundred in all." },
        { id: "pt-u82l1-dividir", type: "vocab", front: "dividir", reading: "dividir", meaning: "to divide", example: { jp: "A professora dividiu a turma em quatro partes para o jogo.", en: "The teacher divided the class into four parts for the game." }, drill: { jp: "Vou dividir a turma em quatro", en: "I'm going to divide the class into four" }, accept: ["divide", "to divide", "to split", "split", "to share out"], hint: "di-vi-DEER. Arithmetic and everyday sharing both — dividir a conta is to split the bill, which in Portugal is usually done without argument." },
        { id: "pt-u82l1-ototal", type: "vocab", front: "o total", reading: "ototal", meaning: "total", example: { jp: "O total da conta foi alto para uma família pequena.", en: "The total on the bill was high for a small family." }, drill: { jp: "O total da conta foi alto", en: "The total on the bill was high" }, accept: ["the total", "total", "sum", "the sum", "whole"], hint: "tu-TAL. The final figure. No total means in total, and it is what the last line of a Portuguese receipt says above the VAT." },
        { id: "pt-u82l1-aestatistica", type: "vocab", front: "a estatística", reading: "aestatistica", meaning: "statistic", example: { jp: "A estatística mostra o total de pessoas que trabalha na cidade.", en: "The statistic shows the total number of people who work in the city." }, drill: { jp: "A estatística do jogo é clara", en: "The match statistic is clear" }, accept: ["the statistic", "statistic", "statistics", "figure", "the figures"], hint: "esh-ta-TISH-ti-ka. One figure, and in the plural the whole field: as estatísticas. Note the stress on -tís-, which the accent marks." },
      ],
    },
    {
      id: "pt-u82l2",
      unit: 82,
      lesson: 2,
      title: "Mais e menos",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a number moved in Portuguese — it went up, it came down, it hit the floor or the ceiling.",
      items: [
        { id: "pt-u82l2-subir", type: "vocab", front: "subir", reading: "subir", meaning: "to go up", example: { jp: "A água do rio subiu muito com a chuva da noite.", en: "The river water rose a lot with the night's rain." }, drill: { jp: "A água do rio vai subir", en: "The river water is going to rise" }, accept: ["go up", "to go up", "to rise", "rise", "to climb", "to get on"], hint: "su-BEER: subo, sobes, sobe — the u turns to o in the middle forms. Climbing stairs, rising water, rising prices. Subir para o comboio is to get on the train." },
        { id: "pt-u82l2-elevar", type: "vocab", front: "elevar", reading: "elevar", meaning: "to raise", example: { jp: "A empresa elevou o preço do trabalho no ano seguinte.", en: "The company raised the price of the work the following year." }, drill: { jp: "A empresa vai elevar o preço", en: "The company is going to raise the price" }, accept: ["raise", "to raise", "to lift", "to elevate", "to put up"], hint: "e-le-VAR. The formal one, for a price, a level or a tone — o elevador that takes you up is built from it. In speech Portuguese usually says subir." },
        { id: "pt-u82l2-descer", type: "vocab", front: "descer", reading: "descer", meaning: "to come down", example: { jp: "A água do rio desceu depois de uma semana sem chuva.", en: "The river water came down after a week without rain." }, drill: { jp: "A água do rio vai descer", en: "The river water is going to come down" }, accept: ["come down", "to come down", "to go down", "to descend", "to get off"], hint: "desh-SER: desço, desces, desce. The exact mirror of subir, for stairs, water and prices — and getting off a bus: desço na próxima." },
        { id: "pt-u82l2-oexcesso", type: "vocab", front: "o excesso", reading: "oexcesso", meaning: "excess", example: { jp: "O excesso de carros na rua é o problema maior da cidade.", en: "The excess of cars in the street is the city's biggest problem." }, drill: { jp: "O excesso de carros é um problema", en: "The excess of cars is a problem" }, accept: ["the excess", "excess", "surplus", "too much", "overload"], hint: "aysh-SE-su. More than there should be. Em excesso means too much of something, and excesso de velocidade is what a Portuguese speeding fine is called." },
        { id: "pt-u82l2-aperda", type: "vocab", front: "a perda", reading: "aperda", meaning: "loss (the losing of it)", example: { jp: "A perda de água na cozinha aumentou a conta do mês.", en: "The loss of water in the kitchen increased the month's bill." }, drill: { jp: "A perda de água aumentou a conta", en: "The water loss increased the bill" }, accept: ["the loss", "loss", "waste", "the waste"], hint: "PER-da, from perder. A loss of money, of water, of time — and of a person: sinto muito a sua perda is the Portuguese condolence." },
        { id: "pt-u82l2-oindice", type: "vocab", front: "o índice", reading: "oindice", meaning: "index", example: { jp: "O índice do preço da casa subiu outra vez este ano.", en: "The house price index went up again this year." }, drill: { jp: "O índice do preço subiu muito", en: "The price index went up a lot" }, accept: ["the index", "index", "rate", "the rate", "contents"], hint: "EEN-di-se. The economic index — and the contents page at the front of a Portuguese book, which is also o índice. The finger is o dedo indicador." },
      ],
    },
    {
      id: "pt-u82l3",
      unit: 82,
      lesson: 3,
      title: "Partes do todo",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Read a Portuguese figure properly — the percentage, the proportion, the average, the quantity, three times over.",
      items: [
        { id: "pt-u82l3-apercentagem", type: "vocab", front: "a percentagem", reading: "apercentagem", meaning: "percentage", example: { jp: "A percentagem de pessoas que trabalha em casa aumentou.", en: "The percentage of people working from home has increased." }, drill: { jp: "A percentagem de pessoas aumentou muito", en: "The percentage of people increased a lot" }, accept: ["the percentage", "percentage", "percent", "per cent", "proportion"], hint: "per-sen-TA-zhem. Portugal says percentagem where Brazil says porcentagem — a rare spelling split worth knowing. Por cento is the per cent itself: dez por cento." },
        { id: "pt-u82l3-aproporcao", type: "vocab", front: "a proporção", reading: "aproporcao", meaning: "proportion", example: { jp: "A proporção de sal no pão é pequena mas é sempre igual.", en: "The proportion of salt in bread is small but it's always the same." }, drill: { jp: "A proporção de sal é pequena", en: "The proportion of salt is small" }, accept: ["the proportion", "proportion", "ratio", "the ratio", "share"], hint: "pru-por-SOWN. The relation of a part to the whole. Em proporção means in proportion, and tomar proporções is what a problem does when it gets out of hand." },
        { id: "pt-u82l3-aquantidade", type: "vocab", front: "a quantidade", reading: "aquantidade", meaning: "quantity", example: { jp: "A quantidade de chuva deste inverno foi maior do que a do ano passado.", en: "The quantity of rain this winter was greater than last year's." }, drill: { jp: "A quantidade de chuva foi maior", en: "The quantity of rain was greater" }, accept: ["the quantity", "quantity", "amount", "the amount", "number"], hint: "kwan-ti-DA-de. How much of something there is, countable or not — where o número counts items only. Em grande quantidade is in large amounts." },
        { id: "pt-u82l3-otriplo", type: "vocab", front: "o triplo", reading: "otriplo", meaning: "triple", example: { jp: "A família pagou o triplo do preço do carro novo.", en: "The family paid triple the price of the new car." }, drill: { jp: "A família pagou o triplo do preço", en: "The family paid triple the price" }, accept: ["the triple", "triple", "three times", "threefold"], hint: "TREE-plu. Three times the amount, built exactly like o dobro, which you met at Unit 43 for twice. O triplo DE something." },
        { id: "pt-u82l3-afracao", type: "vocab", front: "a fração", reading: "afracao", meaning: "fraction", example: { jp: "A fração de pessoas que trabalha no campo é pequena hoje.", en: "The fraction of people working in the fields is small today." }, drill: { jp: "A fração de pessoas é pequena", en: "The fraction of people is small" }, accept: ["the fraction", "fraction", "portion", "the portion", "part"], hint: "fra-SOWN. The maths fraction and a small part of anything. Portugal wrote fracção before the 1990 spelling agreement; today both countries write fração, and the old form survives on old signs." },
        { id: "pt-u82l3-aporcao", type: "vocab", front: "a porção", reading: "aporcao", meaning: "portion (an amount)", example: { jp: "A porção de sopa do jantar foi pequena para a família toda.", en: "The portion of soup at dinner was small for the whole family." }, drill: { jp: "A porção de sopa foi pequena", en: "The portion of soup was small" }, accept: ["the portion", "portion", "helping", "the helping", "serving"], hint: "pur-SOWN. A helping of food, and a share of anything. Uma boa porção de means a fair amount of, said of time or work as easily as of soup." },
      ],
    },
    {
      id: "pt-u82l4",
      unit: 82,
      lesson: 4,
      title: "Escalas e aproximações",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place a number on a scale in Portuguese, and say plainly whether it is exact or a rough figure.",
      items: [
        { id: "pt-u82l4-aescala", type: "vocab", front: "a escala", reading: "aescala", meaning: "scale", example: { jp: "A escala do mapa é pequena para a cidade toda.", en: "The scale of the map is small for the whole city." }, drill: { jp: "A escala do mapa é pequena", en: "The scale of the map is small" }, accept: ["the scale", "scale", "range", "the range", "stopover"], hint: "esh-KA-la. The scale of a map or a problem, and the levels of a scale. In travel it is a stopover — um voo com escala em Lisboa." },
        { id: "pt-u82l4-aproximado", type: "vocab", front: "aproximado", reading: "aproximado", meaning: "approximate", example: { jp: "O número aproximado de pessoas na festa foi cem.", en: "The approximate number of people at the party was a hundred." }, drill: { jp: "O número aproximado de pessoas foi cem", en: "The approximate number of people was a hundred" }, accept: ["approximate", "rough", "estimated", "ballpark"], hint: "a-pro-si-MA-du, from aproximar-se, to come close. A rough figure, the honest one when you have not counted. Aproximadamente is the adverb." },
        { id: "pt-u82l4-cercade", type: "vocab", front: "cerca de", reading: "cercade", meaning: "about", example: { jp: "Cerca de vinte pessoas ficaram na praia até à noite.", en: "About twenty people stayed on the beach until nightfall." }, drill: { jp: "Cerca de vinte pessoas ficaram ali", en: "About twenty people stayed there" }, accept: ["about", "around", "approximately", "roughly", "some"], hint: "SER-ka de. The standard written way of saying roughly — cerca de mil pessoas. In speech you will also hear uns, à volta de and mais ou menos doing the same job." },
        { id: "pt-u82l4-estimar", type: "vocab", front: "estimar", reading: "estimar", meaning: "to estimate", example: { jp: "O chefe estimou o total do trabalho antes de falar com a empresa.", en: "The boss estimated the total for the work before talking to the company." }, drill: { jp: "Vou estimar o total do trabalho", en: "I'm going to estimate the total for the work" }, accept: ["estimate", "to estimate", "to reckon", "to put at", "to value"], hint: "esh-ti-MAR. Putting a figure on something you have not measured. Uma estimativa is the estimate a builder gives you — and estimado, of a person, means esteemed." },
        { id: "pt-u82l4-opadrao", type: "vocab", front: "o padrão", reading: "opadrao", meaning: "standard", example: { jp: "O padrão do trabalho da equipa é alto e o chefe gosta.", en: "The team's standard of work is high and the boss likes it." }, drill: { jp: "O padrão do trabalho é alto", en: "The standard of the work is high" }, accept: ["the standard", "standard", "pattern", "the pattern", "benchmark"], hint: "pa-DROWN, nasal. A standard to meet, and a repeating pattern on cloth — one word for both. Padrão de vida is standard of living." },
        { id: "pt-u82l4-aprecisao", type: "vocab", front: "a precisão", reading: "aprecisao", meaning: "precision", example: { jp: "A precisão da medida é grande e o vidro novo entra bem.", en: "The precision of the measurement is high and the new glass fits well." }, drill: { jp: "A precisão da medida é grande", en: "The precision of the measurement is high" }, accept: ["the precision", "precision", "accuracy", "the accuracy"], hint: "pre-si-ZOWN. How exact a thing is. Com precisão means precisely, and preciso as an adjective means exact — but preciso de also means I need, which is the commoner use by far." },
      ],
    },
  ],
};
