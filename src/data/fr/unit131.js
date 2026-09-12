// FR Unit 131 — Matières et objets ("Materials and stuff") — B2
// Strand D, the fourteenth B2 vocabulary slot (block 3, units 121-133). Generic slot
// "Vocabulary 14 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 teach the common materials (le bois, le fer, le
// verre, le papier, le plastique, le tissu, le cuir, le métal, la pierre) and B1
// unit 90 the workshop tools (le clou, la vis, le fil). This unit authors the
// wider MATERIALS vocabulary a B2 speaker needs to describe how things are built
// and made of — le béton, l'acier, le velours, l'argile. Every front checked
// against the 2,168 fronts and the sibling B2 blocks (la toile is used in u128 and
// not re-taught here). Conventions: see fr/unit1.js.
export const FR_UNIT131 = {
  id: "fr-u131",
  lang: "fr",
  title: "Matières et objets",
  order: 131,
  stage: "b2",
  lessons: [
    {
      id: "fr-u131l1",
      unit: 131,
      lesson: 1,
      title: "Building materials",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what things are built from: la brique, le béton, le plâtre, la poutre, l'acier, le goudron.",
      items: [
        { id: "fr-u131l1-labrique", type: "vocab", front: "la brique", reading: "labrique", meaning: "the brick", example: { jp: "Cette vieille maison en brique rouge date du siècle dernier.", en: "This old red-brick house dates from the last century." }, accept: ["brick", "the brick"], hint: "The baked clay block. un mur de brique." },
        { id: "fr-u131l1-lebeton", type: "vocab", front: "le béton", reading: "lebeton", meaning: "the concrete", example: { jp: "Le pont est en béton, donc il supporte de lourdes charges.", en: "The bridge is made of concrete, so it bears heavy loads." }, accept: ["concrete", "the concrete"], hint: "The grey building material. Slang: en béton = rock-solid (un alibi en béton)." },
        { id: "fr-u131l1-leplatre", type: "vocab", front: "le plâtre", reading: "leplatre", meaning: "the plaster", example: { jp: "On a mis son bras dans le plâtre après sa chute.", en: "They put his arm in plaster after his fall." }, accept: ["plaster", "the plaster", "the cast"], hint: "The white wall coating, and the cast for a broken bone." },
        { id: "fr-u131l1-lapoutre", type: "vocab", front: "la poutre", reading: "lapoutre", meaning: "the beam", example: { jp: "Les poutres du plafond sont d'origine, en bois massif.", en: "The ceiling beams are original, in solid wood." }, accept: ["beam", "the beam", "the girder"], hint: "A long horizontal support of wood or steel. Also a beam in gymnastics." },
        { id: "fr-u131l1-lacier", type: "vocab", front: "l'acier", reading: "lacier", meaning: "the steel", example: { jp: "La tour est faite d'acier et de verre.", en: "The tower is made of steel and glass." }, drill: { jp: "L'acier est très solide", en: "Steel is very strong" }, accept: ["steel", "the steel"], hint: "Iron made hard and strong. une volonté d'acier = a will of steel." },
        { id: "fr-u131l1-legoudron", type: "vocab", front: "le goudron", reading: "legoudron", meaning: "the tar", example: { jp: "Le goudron fond un peu sous le soleil d'été.", en: "The tar melts a little under the summer sun." }, accept: ["tar", "the tar", "the asphalt"], hint: "The black sticky material of roads. Also the tar in cigarettes." },
      ],
    },
    {
      id: "fr-u131l2",
      unit: 131,
      lesson: 2,
      title: "Metals and glass",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name harder materials: le marbre, le bronze, le cuivre, la vitre, le câble, le grillage.",
      items: [
        { id: "fr-u131l2-lemarbre", type: "vocab", front: "le marbre", reading: "lemarbre", meaning: "the marble", example: { jp: "Le sol de l'entrée est en marbre blanc.", en: "The floor of the entrance is white marble." }, drill: { jp: "Le marbre blanc est très beau", en: "White marble is very beautiful" }, accept: ["marble", "the marble"], hint: "The smooth, veined stone. rester de marbre = to stay stony-faced." },
        { id: "fr-u131l2-lebronze", type: "vocab", front: "le bronze", reading: "lebronze", meaning: "the bronze", example: { jp: "La statue est en bronze, verte par endroits avec le temps.", en: "The statue is bronze, green in places with time." }, accept: ["bronze", "the bronze"], hint: "The brown metal of statues and medals. médaille de bronze = bronze medal." },
        { id: "fr-u131l2-lecuivre", type: "vocab", front: "le cuivre", reading: "lecuivre", meaning: "the copper", example: { jp: "Les vieilles casseroles en cuivre brillent encore.", en: "The old copper pans still shine." }, drill: { jp: "Le cuivre brille encore beaucoup", en: "The copper still shines a lot" }, accept: ["copper", "the copper"], hint: "The reddish metal, and it conducts electricity. les cuivres = brass instruments." },
        { id: "fr-u131l2-lavitre", type: "vocab", front: "la vitre", reading: "lavitre", meaning: "the windowpane", example: { jp: "La vitre est si propre qu'on ne la voit presque pas.", en: "The windowpane is so clean you can barely see it." }, accept: ["windowpane", "the windowpane", "the pane", "the window"], hint: "The sheet of glass in a window. From le verre (the material)." },
        { id: "fr-u131l2-lecable", type: "vocab", front: "le câble", reading: "lecable", meaning: "the cable", example: { jp: "Un gros câble relie l'île au continent.", en: "A thick cable links the island to the mainland." }, accept: ["cable", "the cable", "the wire"], hint: "A thick rope of metal wires, or an electrical cable." },
        { id: "fr-u131l2-legrillage", type: "vocab", front: "le grillage", reading: "legrillage", meaning: "the wire fence", example: { jp: "Un grillage entoure le jardin pour protéger les légumes.", en: "A wire fence surrounds the garden to protect the vegetables." }, accept: ["wire fence", "the wire fence", "the wire netting", "the mesh"], hint: "The metal mesh fence. From la grille, the grid." },
      ],
    },
    {
      id: "fr-u131l3",
      unit: 131,
      lesson: 3,
      title: "Soft and woven",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name softer stuff: le velours, le lin, la paille, la mousse, le carton, la ficelle.",
      items: [
        { id: "fr-u131l3-levelours", type: "vocab", front: "le velours", reading: "levelours", meaning: "the velvet", example: { jp: "Les fauteuils du théâtre sont en velours rouge.", en: "The theatre's armchairs are red velvet." }, accept: ["velvet", "the velvet"], hint: "The soft, thick fabric. une voix de velours = a smooth voice." },
        { id: "fr-u131l3-lelin", type: "vocab", front: "le lin", reading: "lelin", meaning: "the linen", example: { jp: "Une chemise en lin est idéale quand il fait chaud.", en: "A linen shirt is ideal when it's hot." }, drill: { jp: "Le lin est idéal quand il fait chaud", en: "Linen is ideal when it is hot" }, accept: ["linen", "the linen", "the flax"], hint: "The light summer fabric, from the flax plant." },
        { id: "fr-u131l3-lapaille", type: "vocab", front: "la paille", reading: "lapaille", meaning: "the straw", example: { jp: "Le toit de la vieille ferme est encore en paille.", en: "The roof of the old farm is still made of straw." }, drill: { jp: "La paille couvre le vieux toit", en: "The straw covers the old roof" }, accept: ["straw", "the straw"], hint: "Dried stalks of grain; also a drinking straw. un chapeau de paille." },
        { id: "fr-u131l3-lamousse", type: "vocab", front: "la mousse", reading: "lamousse", meaning: "the foam", example: { jp: "Le coussin est rempli de mousse, c'est pour ça qu'il est si doux.", en: "The cushion is filled with foam, that's why it's so soft." }, accept: ["foam", "the foam", "the moss", "the mousse"], hint: "Soft foam; also moss on a rock, and the dessert (mousse au chocolat)." },
        { id: "fr-u131l3-lecarton", type: "vocab", front: "le carton", reading: "lecarton", meaning: "the cardboard", example: { jp: "On a rangé tous les livres dans des cartons pour le déménagement.", en: "We packed all the books in cardboard boxes for the move." }, accept: ["cardboard", "the cardboard", "the cardboard box", "the box"], hint: "The material, and a box made of it. From carte." },
        { id: "fr-u131l3-laficelle", type: "vocab", front: "la ficelle", reading: "laficelle", meaning: "the string", example: { jp: "Il a fermé le paquet avec un peu de ficelle.", en: "He closed the parcel with a bit of string." }, drill: { jp: "La ficelle ferme bien le paquet", en: "The string closes the parcel well" }, accept: ["string", "the string", "the twine"], hint: "Thin string. Also les ficelles du métier = the tricks of the trade." },
      ],
    },
    {
      id: "fr-u131l4",
      unit: 131,
      lesson: 4,
      title: "Bits and pieces",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name useful odds and ends: la corde, le tuyau, la planche, le caoutchouc, l'argile, la cire.",
      items: [
        { id: "fr-u131l4-lacorde", type: "vocab", front: "la corde", reading: "lacorde", meaning: "the rope", example: { jp: "Ils ont tiré le bateau avec une longue corde.", en: "They pulled the boat with a long rope." }, accept: ["rope", "the rope", "the cord", "the string"], hint: "Thick rope. Also the string of an instrument: les cordes d'une guitare." },
        { id: "fr-u131l4-letuyau", type: "vocab", front: "le tuyau", reading: "letuyau", meaning: "the pipe", example: { jp: "Un tuyau a éclaté, et l'eau a coulé partout.", en: "A pipe burst, and water flowed everywhere." }, accept: ["pipe", "the pipe", "the hose", "the tube"], hint: "A pipe or hose. Familiarly, un tuyau = a tip, insider info." },
        { id: "fr-u131l4-laplanche", type: "vocab", front: "la planche", reading: "laplanche", meaning: "the plank", example: { jp: "Il a posé une planche entre les deux chaises.", en: "He laid a plank between the two chairs." }, drill: { jp: "La planche est entre les deux chaises", en: "The plank is between the two chairs" }, accept: ["plank", "the plank", "the board"], hint: "A flat board of wood. une planche à voile = a windsurf board." },
        { id: "fr-u131l4-lecaoutchouc", type: "vocab", front: "le caoutchouc", reading: "lecaoutchouc", meaning: "the rubber", example: { jp: "Les bottes en caoutchouc gardent les pieds au sec.", en: "The rubber boots keep your feet dry." }, accept: ["rubber", "the rubber"], hint: "The stretchy material of tyres and boots. Tricky spelling — silent letters throughout." },
        { id: "fr-u131l4-largile", type: "vocab", front: "l'argile", reading: "largile", meaning: "the clay", example: { jp: "L'enfant a fait un petit bol en argile à l'école.", en: "The child made a little clay bowl at school." }, accept: ["clay", "the clay"], hint: "The soft earth potters use. Feminine: de l'argile." },
        { id: "fr-u131l4-lacire", type: "vocab", front: "la cire", reading: "lacire", meaning: "the wax", example: { jp: "La cire de la bougie a coulé sur la table.", en: "The wax of the candle dripped onto the table." }, accept: ["wax", "the wax"], hint: "Candle or floor wax; also beeswax, la cire d'abeille." },
      ],
    },
  ],
};
