// ES Unit 49 — Cosas, lugares y gente ("Things, places and people") — A2 COVERAGE (slot: coverage-a2-10)
// The everyday concrete nouns a frequency pass needs: objects, spaces, groups of
// people, bits of text. Nouns headworded with their article. Conventions and
// BLOCK-3 SCOPE: see es/unit40.js.
//
// MERGE NOTE: several nouns border thematic-block territory — el equipo / la pareja /
// la persona / el grupo near u31 (Personality) / u32 (Society); la máquina / el
// aparato / el producto near u33 (Technology) / u27 (Shopping); la carta / el aviso
// near u33 (Communication). Ownership rule stands: lower unit order wins, merge seat
// deletes the copy here. Flagged in §6.
export const ES_UNIT49 = {
  id: "es-u49",
  lang: "es",
  title: "Cosas, lugares y gente",
  order: 49,
  stage: "a2",
  lessons: [
    {
      id: "es-u49l1",
      unit: 49,
      lesson: 1,
      title: "El objeto, la máquina, el producto",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name things and tools: un objeto, la máquina, una herramienta, el aparato, el material.",
      items: [
        { id: "es-u49l1-elobjeto", type: "vocab", front: "el objeto", reading: "elobjeto", meaning: "the object", example: { jp: "Hay muchos objetos en la mesa.", en: "There are lots of objects on the table." }, accept: ["object", "thing", "item"], hint: "A general word for a thing. Also \"purpose\": el objeto de la reunión = the aim of the meeting." },
        { id: "es-u49l1-lamaquina", type: "vocab", front: "la máquina", reading: "lamaquina", meaning: "the machine", example: { jp: "Esta máquina hace café.", en: "This machine makes coffee." }, accept: ["machine"], hint: "The accent is on the á. Máquina de + noun = a …-machine: máquina de café." },
        { id: "es-u49l1-laherramienta", type: "vocab", front: "la herramienta", reading: "laherramienta", meaning: "the tool", example: { jp: "Necesito una herramienta para el coche.", en: "I need a tool for the car." }, accept: ["tool", "instrument"], hint: "The h is silent, as always in Spanish. A tool in the hand, or a tool/means in general." },
        { id: "es-u49l1-elaparato", type: "vocab", front: "el aparato", reading: "elaparato", meaning: "the device / appliance", example: { jp: "El aparato es muy caro.", en: "The device is very expensive." }, accept: ["device", "appliance", "gadget"], hint: "Any electrical device or appliance — a TV, a phone, a machine." },
        { id: "es-u49l1-elmaterial", type: "vocab", front: "el material", reading: "elmaterial", meaning: "the material", example: { jp: "Es un material muy fuerte.", en: "It's a very strong material." }, accept: ["material", "stuff"], hint: "What something is made of. Also \"materials/supplies\": el material de la escuela." },
        { id: "es-u49l1-elproducto", type: "vocab", front: "el producto", reading: "elproducto", meaning: "the product", example: { jp: "Este producto es bueno.", en: "This product is good." }, accept: ["product", "goods"], hint: "From producir (u44). Los productos = the goods on a shelf." },
      ],
    },
    {
      id: "es-u49l2",
      unit: 49,
      lesson: 2,
      title: "El sitio, la zona, el rincón",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about places and space: un buen sitio, no hay espacio, esta zona, el rincón, al fondo.",
      items: [
        { id: "es-u49l2-elsitio", type: "vocab", front: "el sitio", reading: "elsitio", meaning: "the place / spot", example: { jp: "Es un buen sitio para comer.", en: "It's a good place to eat." }, accept: ["place", "spot", "room"], hint: "A close friend of el lugar (u9). Also \"room/space\": no hay sitio = there's no room." },
        { id: "es-u49l2-elespacio", type: "vocab", front: "el espacio", reading: "elespacio", meaning: "the space / room", example: { jp: "No hay espacio en el coche.", en: "There's no room in the car." }, accept: ["space", "room"], hint: "Physical space or room. Also outer space: el espacio." },
        { id: "es-u49l2-lazona", type: "vocab", front: "la zona", reading: "lazona", meaning: "the area / zone", example: { jp: "Vivo en esta zona.", en: "I live in this area." }, accept: ["area", "zone", "district"], hint: "A part of a town or region. Una zona tranquila = a quiet area." },
        { id: "es-u49l2-elarea", type: "vocab", front: "el área", reading: "elarea", meaning: "the area", example: { jp: "El área es muy grande.", en: "The area is very big." }, accept: ["area", "zone", "field"], hint: "Feminine, but takes el (not la) because it starts with a stressed a — like el agua (u6). Plural las áreas." },
        { id: "es-u49l2-elrincon", type: "vocab", front: "el rincón", reading: "elrincon", meaning: "the corner (inside)", example: { jp: "Hay una silla en el rincón.", en: "There's a chair in the corner." }, accept: ["corner", "nook"], hint: "An INSIDE corner of a room. The outside corner of a street is la esquina (u17)." },
        { id: "es-u49l2-elfondo", type: "vocab", front: "el fondo", reading: "elfondo", meaning: "the back / bottom", example: { jp: "El baño está al fondo.", en: "The bathroom is at the back." }, accept: ["back", "bottom", "depth"], hint: "Al fondo = at the back / far end. En el fondo = deep down / at heart." },
      ],
    },
    {
      id: "es-u49l3",
      unit: 49,
      lesson: 3,
      title: "La persona, el grupo, el equipo",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about groups of people: una buena persona, un grupo de amigos, mi equipo, un miembro, la pareja.",
      items: [
        { id: "es-u49l3-lapersona", type: "vocab", front: "la persona", reading: "lapersona", meaning: "the person", example: { jp: "Es una persona muy buena.", en: "She's a very good person." }, accept: ["person", "individual"], hint: "Always feminine, even for a man: Juan es una buena persona. Plural las personas = people." },
        { id: "es-u49l3-elgrupo", type: "vocab", front: "el grupo", reading: "elgrupo", meaning: "the group", example: { jp: "Somos un grupo de amigos.", en: "We're a group of friends." }, accept: ["group", "band"], hint: "A group of people or things — also a music band. En grupo = as a group." },
        { id: "es-u49l3-elequipo", type: "vocab", front: "el equipo", reading: "elequipo", meaning: "the team / equipment", example: { jp: "Mi equipo es el mejor.", en: "My team is the best." }, accept: ["team", "equipment", "kit"], hint: "A team of people, or a set of equipment/kit. Trabajar en equipo = to work as a team." },
        { id: "es-u49l3-elmiembro", type: "vocab", front: "el miembro", reading: "elmiembro", meaning: "the member", example: { jp: "Es un miembro de la familia.", en: "He's a member of the family." }, accept: ["member"], hint: "A member of a group, team, or family. The word stays el for men and women." },
        { id: "es-u49l3-ellider", type: "vocab", front: "el líder", reading: "ellider", meaning: "the leader", example: { jp: "Ella es la líder del grupo.", en: "She's the leader of the group." }, accept: ["leader", "head"], hint: "La líder for a woman. Plural los líderes. Borrowed from English \"leader\", spelled the Spanish way." },
        { id: "es-u49l3-lapareja", type: "vocab", front: "la pareja", reading: "lapareja", meaning: "the partner / couple", example: { jp: "Vive con su pareja.", en: "He lives with his partner." }, accept: ["partner", "couple", "pair"], hint: "Both a romantic partner and a couple/pair. En pareja = as a couple. From el par (u47)." },
      ],
    },
    {
      id: "es-u49l4",
      unit: 49,
      lesson: 4,
      title: "La frase, la carta, la lista",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name bits of writing: una frase, escribir una carta, hacer una lista, una nota, un aviso.",
      items: [
        { id: "es-u49l4-lafrase", type: "vocab", front: "la frase", reading: "lafrase", meaning: "the sentence / phrase", example: { jp: "No entiendo esta frase.", en: "I don't understand this sentence." }, accept: ["sentence", "phrase"], hint: "A whole sentence or a set phrase. Made of words (palabras, u18)." },
        { id: "es-u49l4-lacarta", type: "vocab", front: "la carta", reading: "lacarta", meaning: "the letter / menu", example: { jp: "Escribo una carta a mi amiga.", en: "I'm writing a letter to my friend." }, accept: ["letter", "menu", "card"], hint: "Two everyday meanings: a letter you write, AND the menu in a restaurant (la carta). Also a playing card." },
        { id: "es-u49l4-lalista", type: "vocab", front: "la lista", reading: "lalista", meaning: "the list", example: { jp: "Hago una lista de cosas.", en: "I make a list of things." }, accept: ["list"], hint: "Hacer una lista = to make a list. La lista de la compra = the shopping list." },
        { id: "es-u49l4-lanota", type: "vocab", front: "la nota", reading: "lanota", meaning: "the note / mark", example: { jp: "Escribo una nota para María.", en: "I write a note for María." }, accept: ["note", "mark", "grade"], hint: "A short written note, or a school mark/grade: una buena nota. Tomar nota = to take note." },
        { id: "es-u49l4-elaviso", type: "vocab", front: "el aviso", reading: "elaviso", meaning: "the notice / warning", example: { jp: "Hay un aviso en la puerta.", en: "There's a notice on the door." }, accept: ["notice", "warning", "heads-up"], hint: "A notice or a heads-up. Sin previo aviso = without warning." },
        { id: "es-u49l4-elcartel", type: "vocab", front: "el cartel", reading: "elcartel", meaning: "the poster / sign", example: { jp: "El cartel está en la calle.", en: "The sign is in the street." }, accept: ["poster", "sign", "placard"], hint: "A poster on a wall or a sign in the street — bigger and more public than un aviso." },
      ],
    },
  ],
};
