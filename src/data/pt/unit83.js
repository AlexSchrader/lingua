// PT Unit 83 — O espaço e a disposição (slot: coverage-b1-10) — B1
// WHERE A THING SITS, AND WHAT PART OF IT YOU MEAN. A2 u46 A geografia e as
// direções gives the corpus direction on a map (o norte, a direção) and u23 a
// distância — but the learner still cannot say the middle, the corner, the far
// end, the surface, inside, outside, or that something fits. This unit is
// arrangement: the parts of a space, and the verbs that put things into it.
//
// SLOT BOUNDARIES:
//   A2 u43 owns a largura and u34 a altura (measurement of a thing) — used in
//   examples, not re-taught. u82 A medida e a proporção is my own slot and keeps
//   measuring; this unit keeps position.
//   u49 owns a fila, u23 a distância, u39 juntos. None re-taught.
//   u65 O ambiente e o lugar (block 2) owns place as ENVIRONMENT — a region, a
//   landscape; this unit owns the geometry of any space at all, including a table.
//
// dentro and fora ARE carded here, deliberately, and the lead should know why:
// both are A1-basic and BOTH ARE ABSENT from u1-u50, which I verified against the
// regenerated TAUGHT-WORDS.md rather than assuming. Nobody below this slot owns
// spatial arrangement (block 2's three coverage slots are word classes), so on
// the lowest-slot rule they would otherwise reach the end of B1 untaught. Logged
// for the lead as an A1 gap that this unit is patching, not claiming.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT83 = {
  id: "pt-u83",
  lang: "pt",
  title: "O espaço e a disposição",
  order: 83,
  stage: "b1",
  lessons: [
    {
      id: "pt-u83l1",
      unit: 83,
      lesson: 1,
      title: "Onde fica",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the part of a space you mean in Portuguese — the side, the centre, the middle, the corner, the bottom, the top.",
      items: [
        { id: "pt-u83l1-olado", type: "vocab", front: "o lado", reading: "olado", meaning: "side", example: { jp: "O lado da casa que fica para o jardim tem mais luz.", en: "The side of the house facing the garden has more light." }, drill: { jp: "O lado da casa tem mais luz", en: "The side of the house has more light" }, accept: ["the side", "side", "way", "direction"], hint: "LA-du. Ao lado de is next to — the phrase you will use daily. Por um lado… por outro lado is on the one hand, on the other, and de lado is sideways." },
        { id: "pt-u83l1-ocentro", type: "vocab", front: "o centro", reading: "ocentro", meaning: "centre", example: { jp: "O centro da cidade fica perto da escola e do comboio.", en: "The city centre is near the school and the train." }, drill: { jp: "O centro da cidade fica perto", en: "The city centre is near" }, accept: ["the centre", "centre", "the center", "center", "downtown", "middle"], hint: "SEN-tru. The centre of a circle and the centre of town — ir ao centro is what a Portuguese says for going into town. Um centro comercial is a shopping centre." },
        { id: "pt-u83l1-omeio", type: "vocab", front: "o meio", reading: "omeio", meaning: "middle", example: { jp: "A mesa está no meio da cozinha e ocupa quase tudo.", en: "The table is in the middle of the kitchen and takes up almost everything." }, drill: { jp: "O meio da cozinha tem uma mesa", en: "The middle of the kitchen has a table" }, accept: ["the middle", "middle", "the means", "means", "half"], hint: "MAY-u. No meio de is in the middle of. It doubles as half — meio quilo — and as a means: por meio de, by means of. Meio-dia is midday, the middle of the day." },
        { id: "pt-u83l1-ocanto", type: "vocab", front: "o canto", reading: "ocanto", meaning: "corner", example: { jp: "O cão dorme no canto do quarto, longe da janela.", en: "The dog sleeps in the corner of the bedroom, far from the window." }, drill: { jp: "O canto do quarto é escuro", en: "The corner of the bedroom is dark" }, accept: ["the corner", "corner", "nook"], hint: "KAN-tu. The INSIDE corner of a room — the outside corner of a street is a esquina, and Portuguese keeps them firmly apart. It is also the noun for singing, from cantar." },
        { id: "pt-u83l1-ofundo", type: "vocab", front: "o fundo", reading: "ofundo", meaning: "bottom", example: { jp: "O livro estava no fundo da caixa e ninguém o viu.", en: "The book was at the bottom of the box and nobody saw it." }, drill: { jp: "O fundo da caixa tem um livro", en: "The bottom of the box has a book in it" }, accept: ["the bottom", "bottom", "the back", "back", "depths"], hint: "FUN-du. The bottom of a box and the far end of a room or corridor — ao fundo do corredor. No fundo, at heart, is how a Portuguese starts a confession." },
        { id: "pt-u83l1-otopo", type: "vocab", front: "o topo", reading: "otopo", meaning: "top", example: { jp: "O topo da escada é o canto mais calmo da casa.", en: "The top of the stairs is the calmest corner of the house." }, drill: { jp: "O topo da escada é calmo", en: "The top of the stairs is calm" }, accept: ["the top", "top", "summit", "peak"], hint: "TO-pu. The top of a stair, a page or a list. For a hill or mountain Portuguese prefers o cume or o cimo, and em cima is the everyday on top." },
      ],
    },
    {
      id: "pt-u83l2",
      unit: 83,
      lesson: 2,
      title: "Dentro e fora",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put something inside or outside in Portuguese, and talk about the surface and the edge of a thing.",
      items: [
        { id: "pt-u83l2-dentro", type: "vocab", front: "dentro", reading: "dentro", meaning: "inside", example: { jp: "O cão ficou dentro de casa toda a noite por causa da chuva.", en: "The dog stayed inside the house all night because of the rain." }, drill: { jp: "O cão ficou dentro de casa", en: "The dog stayed inside the house" }, accept: ["inside", "in", "within", "indoors"], hint: "DEN-tru. Dentro DE before a noun — dentro da caixa. On its own it is indoors: está dentro. For time it means within: dentro de uma hora, within an hour." },
        { id: "pt-u83l2-fora", type: "vocab", front: "fora", reading: "fora", meaning: "outside", example: { jp: "As flores ficam fora de casa e a mesa fica dentro.", en: "The flowers stay outside the house and the table stays inside." }, drill: { jp: "As flores ficam fora de casa", en: "The flowers stay outside the house" }, accept: ["outside", "out", "outdoors", "away"], hint: "FO-ra, the exact mirror of dentro and built the same way: fora DE. Jantar fora is to eat out, estar fora is to be away, and fora! shouted at a match is get off." },
        { id: "pt-u83l2-ointerior", type: "vocab", front: "o interior", reading: "ointerior", meaning: "interior", example: { jp: "O interior do carro estava frio e as janelas tinham água.", en: "The interior of the car was cold and the windows had water on them." }, drill: { jp: "O interior do carro estava frio", en: "The interior of the car was cold" }, accept: ["the interior", "interior", "the inside", "inside"], hint: "in-te-ri-OR. The noun where dentro is the adverb. In Portugal it also names the inland country away from the coast — o Interior, with a capital, is a political word about emptying villages." },
        { id: "pt-u83l2-oexterior", type: "vocab", front: "o exterior", reading: "oexterior", meaning: "exterior", example: { jp: "O exterior da casa é branco e o interior é verde.", en: "The exterior of the house is white and the interior is green." }, drill: { jp: "O exterior da casa é branco", en: "The exterior of the house is white" }, accept: ["the exterior", "exterior", "the outside", "outside", "abroad"], hint: "aysh-te-ri-OR. The outside of a thing — and abroad: no exterior means in other countries, which is where a great many Portuguese families have someone." },
        { id: "pt-u83l2-asuperficie", type: "vocab", front: "a superfície", reading: "asuperficie", meaning: "surface", example: { jp: "A superfície da mesa está fria e a água fica ali toda a manhã.", en: "The surface of the table is cold and the water sits there all morning." }, drill: { jp: "A superfície da mesa está fria", en: "The surface of the table is cold" }, accept: ["the surface", "surface", "top", "face"], hint: "su-per-FEE-si-e, four syllables. The face of a thing — of a table, of the sea, of a problem: à superfície, on the surface, works figuratively too." },
        { id: "pt-u83l2-aborda", type: "vocab", front: "a borda", reading: "aborda", meaning: "edge", example: { jp: "A borda do prato tem uma flor pequena e o meio é branco.", en: "The edge of the plate has a small flower on it and the middle is white." }, drill: { jp: "A borda do prato é branca", en: "The edge of the plate is white" }, accept: ["the edge", "edge", "rim", "the rim", "border"], hint: "BOR-da. The rim of a plate, a glass, a pool. Do not confuse it with a beira, which is the edge of a road or a river — à beira-mar is by the sea." },
      ],
    },
    {
      id: "pt-u83l3",
      unit: 83,
      lesson: 3,
      title: "Ocupar o espaço",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Put things where they go in Portuguese — place them, fit them in, push them up against something, spread them out.",
      items: [
        { id: "pt-u83l3-colocar", type: "vocab", front: "colocar", reading: "colocar", meaning: "to place", example: { jp: "O professor colocou os livros no canto da mesa antes da aula.", en: "The teacher placed the books in the corner of the table before the lesson." }, drill: { jp: "Vou colocar os livros na mesa", en: "I'm going to place the books on the table" }, accept: ["place", "to place", "to put", "put", "to position"], hint: "ku-lu-KAR. The tidier, more written cousin of pôr — a Portuguese notice colocar, a Portuguese kitchen põe. It also means to place a person in a job." },
        { id: "pt-u83l3-ocupar", type: "vocab", front: "ocupar", reading: "ocupar", meaning: "to take up", example: { jp: "A mesa nova ocupa todo o espaço da cozinha pequena.", en: "The new table takes up all the space in the small kitchen." }, drill: { jp: "A mesa vai ocupar todo o espaço", en: "The table is going to take up all the space" }, accept: ["occupy", "to occupy", "take up", "to take up", "to fill"], hint: "o-ku-PAR. Space, time or a seat: este lugar está ocupado is this seat is taken. Ocupar-se de is to deal with something, and ocupado of a person means busy." },
        { id: "pt-u83l3-caber", type: "vocab", front: "caber", reading: "caber", meaning: "to fit", example: { jp: "A cadeira não cabe no canto do quarto por causa da cama.", en: "The chair doesn't fit in the corner of the bedroom because of the bed." }, drill: { jp: "A cadeira não vai caber aqui", en: "The chair is not going to fit here" }, accept: ["fit", "to fit", "to go in", "to have room"], hint: "ka-BER, and the eu form is irregular: caibo. Não cabe is it doesn't fit. Não me cabe a mim decidir means it is not mine to decide — the same verb, doing duty for whose place it is." },
        { id: "pt-u83l3-rodear", type: "vocab", front: "rodear", reading: "rodear", meaning: "to surround", example: { jp: "As flores rodeiam a casa do avô e o jardim fica bonito.", en: "The flowers surround my grandfather's house and the garden looks lovely." }, drill: { jp: "As flores vão rodear a casa", en: "The flowers are going to surround the house" }, accept: ["surround", "to surround", "to go round", "to encircle"], hint: "rru-di-AR, from a roda, the wheel. Rodeado de is surrounded by. Sem rodeios means without going round in circles — get to the point." },
        { id: "pt-u83l3-encostar", type: "vocab", front: "encostar", reading: "encostar", meaning: "to lean against", example: { jp: "O pai encostou a escada à janela do quarto.", en: "My father leaned the ladder against the bedroom window." }, drill: { jp: "Vou encostar a escada à janela", en: "I'm going to lean the ladder against the window" }, accept: ["lean", "to lean", "lean against", "to lean against", "to pull over"], hint: "en-kush-TAR, from a costa, the back. You put a thing's back against something. A driver who encosta pulls over, and encostar a cabeça is to rest your head." },
        { id: "pt-u83l3-espalhar", type: "vocab", front: "espalhar", reading: "espalhar", meaning: "to spread out", example: { jp: "A turma espalhou os livros na mesa toda e o professor não gostou.", en: "The class spread the books all over the table and the teacher didn't like it." }, drill: { jp: "A turma vai espalhar os livros", en: "The class is going to spread the books out" }, accept: ["spread", "to spread", "spread out", "to spread out", "to scatter"], hint: "esh-pa-LYAR, lh. Things over a surface, and news through a town: a notícia espalhou-se depressa. Palha, straw, is the image inside it." },
      ],
    },
    {
      id: "pt-u83l4",
      unit: 83,
      lesson: 4,
      title: "Os limites",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about space itself in Portuguese — how much there is, where it stops, and how things are arranged in it.",
      items: [
        { id: "pt-u83l4-oespaco", type: "vocab", front: "o espaço", reading: "oespaco", meaning: "space", example: { jp: "O espaço do quarto é pequeno mas a cama cabe bem.", en: "The space in the bedroom is small but the bed fits well." }, drill: { jp: "O espaço do quarto é pequeno", en: "The space in the bedroom is small" }, accept: ["the space", "space", "room", "gap"], hint: "esh-PA-su. Room to move, a gap in a text, and outer space — one word for all three. Não há espaço is there's no room." },
        { id: "pt-u83l4-aextremidade", type: "vocab", front: "a extremidade", reading: "aextremidade", meaning: "far end", example: { jp: "A extremidade da mesa está encostada à janela da cozinha.", en: "The far end of the table is pushed up against the kitchen window." }, drill: { jp: "A extremidade da mesa está encostada", en: "The far end of the table is against it" }, accept: ["the far end", "far end", "the end", "end", "extremity", "tip"], hint: "aysh-tre-mi-DA-de. The outermost point of a thing, and a formal word — a doctor calls fingers and toes as extremidades. In speech, a ponta does most of this work." },
        { id: "pt-u83l4-azona", type: "vocab", front: "a zona", reading: "azona", meaning: "area (district)", example: { jp: "A zona perto do mar é mais calma do que o centro da cidade.", en: "The area near the sea is calmer than the city centre." }, drill: { jp: "A zona perto do mar é calma", en: "The area near the sea is calm" }, accept: ["the area", "area", "zone", "the zone", "district"], hint: "ZO-na. A part of a town, a country or a body. Zona azul is paid street parking in Portuguese cities, and a zona histórica is the old quarter." },
        { id: "pt-u83l4-aposicao", type: "vocab", front: "a posição", reading: "aposicao", meaning: "position", example: { jp: "A posição da cama no quarto não é boa para a cadeira.", en: "The position of the bed in the bedroom is not good for the chair." }, drill: { jp: "A posição da cama não é boa", en: "The position of the bed is not good" }, accept: ["the position", "position", "place", "stance"], hint: "pu-zi-SOWN. Where a thing sits, and also a stance in an argument — a posição do governo. Tomar posição is to take a side." },
        { id: "pt-u83l4-aarea", type: "vocab", front: "a área", reading: "aarea", meaning: "area (extent)", example: { jp: "A área do jardim da casa nova é maior do que a da cozinha.", en: "The area of the new house's garden is bigger than the kitchen's." }, drill: { jp: "A área do jardim é grande", en: "The area of the garden is big" }, accept: ["the area", "area", "surface", "the surface", "field"], hint: "A-re-a, stress on the first syllable. The measured area of a space, and a field of work — a área da saúde. In a hospital or an airport it names a zone." },
        { id: "pt-u83l4-adimensao", type: "vocab", front: "a dimensão", reading: "adimensao", meaning: "size (the scale of it)", example: { jp: "A dimensão da mesa nova não serve para o espaço da cozinha.", en: "The size of the new table doesn't suit the space in the kitchen." }, drill: { jp: "A dimensão da mesa é grande", en: "The size of the table is big" }, accept: ["the size", "size", "dimension", "the dimension", "scale"], hint: "di-men-SOWN. The measured size of a thing, and the scale of a problem — a dimensão do erro. As dimensões on a furniture label are the measurements." },
      ],
    },
  ],
};
