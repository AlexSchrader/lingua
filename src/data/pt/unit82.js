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
// ONE FORWARD ASSUMPTION, stated rather than hidden: `maior` is used in two
// examples here and is absent from u1-u50. It is the comparative of grande and
// belongs to block 1's u53 Comparação e grau, which is BELOW this slot, so it
// will be in scope once the blocks merge. If block 1 does not card it, these two
// examples need a rewrite — flagged to the lead rather than assumed away.
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
        { id: "pt-u82l1-ototal", type: "vocab", front: "o total", reading: "ototal", meaning: "total", example: { jp: "O total da conta foi caro para uma família pequena.", en: "The total on the bill was expensive for a small family." }, drill: { jp: "O total da conta foi caro", en: "The total on the bill was expensive" }, accept: ["the total", "total", "sum", "the sum", "whole"], hint: "tu-TAL. The final figure. No total means in total, and it is what the last line of a Portuguese receipt says above the VAT." },
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
        { id: "pt-u82l3-aproporcao", type: "vocab", front: "a proporção", reading: "aproporcao", meaning: "proportion", example: { jp: "A proporção de água no pão é pequena mas é sempre igual.", en: "The proportion of water in bread is small but it's always the same." }, drill: { jp: "A proporção de água é pequena", en: "The proportion of water is small" }, accept: ["the proportion", "proportion", "ratio", "the ratio", "share"], hint: "pru-por-SOWN. The relation of a part to the whole. Em proporção means in proportion, and tomar proporções is what a problem does when it gets out of hand." },
        { id: "pt-u82l3-aquantidade", type: "vocab", front: "a quantidade", reading: "aquantidade", meaning: "quantity", example: { jp: "A quantidade de chuva deste inverno foi maior do que a do ano passado.", en: "The quantity of rain this winter was greater than last year's." }, drill: { jp: "A quantidade de chuva foi maior", en: "The quantity of rain was greater" }, accept: ["the quantity", "quantity", "amount", "the amount", "number"], hint: "kwan-ti-DA-de. How much of something there is, countable or not — where o número counts items only. Em grande quantidade is in large amounts." },
        { id: "pt-u82l3-otriplo", type: "vocab", front: "o triplo", reading: "otriplo", meaning: "triple", example: { jp: "A família pagou o triplo do preço do carro novo.", en: "The family paid triple the price of the new car." }, drill: { jp: "A família pagou o triplo do preço", en: "The family paid triple the price" }, accept: ["the triple", "triple", "three times", "threefold"], hint: "TREE-plu. Three times the amount, built exactly like o dobro, which you met at Unit 43 for twice. O triplo DE something." },
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
      ],
    },
  ],
};
