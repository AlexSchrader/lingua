// ES Unit 49 — Cosas, lugares y gente ("Things, places and people") — A2 COVERAGE (slot: coverage-a2-10)
// The everyday concrete nouns a frequency pass needs: objects, spaces, groups of
// people, bits of text. Nouns headworded with their article. Conventions and
// BLOCK-3 SCOPE: see es/unit13.js.
//
// DE-COLLIDED against the final blocks 1–2 (u21–u40): la persona, el grupo and la nota
// were swapped for el público, el compañero and el título. Every remaining front is
// verified absent from u1–u40. Zero merge reds expected. See §6 hand-back.
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
        { id: "es-u49l1-elobjeto", type: "vocab", front: "el objeto", reading: "elobjeto", meaning: "the object", example: { jp: "Hay muchos objetos en la mesa.", en: "There are lots of objects on the table." }, drill: { jp: "El objeto de la caja es raro", en: "The object in the box is strange" }, accept: ["object", "thing", "item"], hint: "A general word for a thing. Also \"purpose\": el objeto de la reunión = the aim of the meeting." },
        { id: "es-u49l1-lamaquina", type: "vocab", front: "la máquina", reading: "lamaquina", meaning: "the machine", example: { jp: "Esta máquina hace café.", en: "This machine makes coffee." }, drill: { jp: "La máquina de la fábrica es vieja", en: "The factory machine is old" }, accept: ["machine"], hint: "The accent is on the á. Máquina de + noun = a …-machine: máquina de café." },
        { id: "es-u49l1-laherramienta", type: "vocab", front: "la herramienta", reading: "laherramienta", meaning: "the tool", example: { jp: "Necesito una herramienta para el coche.", en: "I need a tool for the car." }, drill: { jp: "La herramienta está en el cajón", en: "The tool is in the drawer" }, accept: ["tool", "instrument"], hint: "The h is silent, as always in Spanish. A tool in the hand, or a tool/means in general." },
        { id: "es-u49l1-elaparato", type: "vocab", front: "el aparato", reading: "elaparato", meaning: "the device / appliance", example: { jp: "El aparato es muy caro.", en: "The device is very expensive." }, drill: { jp: "El aparato de la cocina es nuevo", en: "The kitchen appliance is new" }, accept: ["device", "appliance", "gadget"], hint: "Any electrical device or appliance — a TV, a phone, a machine." },
        { id: "es-u49l1-elmaterial", type: "vocab", front: "el material", reading: "elmaterial", meaning: "the material", example: { jp: "Es un material muy fuerte.", en: "It's a very strong material." }, drill: { jp: "El material de la mesa es duro", en: "The table's material is hard" }, accept: ["material", "stuff"], hint: "What something is made of. Also \"materials/supplies\": el material de la escuela." },
        { id: "es-u49l1-elproducto", type: "vocab", front: "el producto", reading: "elproducto", meaning: "the product", example: { jp: "Este producto es bueno.", en: "This product is good." }, drill: { jp: "El producto es muy barato", en: "The product is very cheap" }, accept: ["product", "goods"], hint: "From producir (u44). Los productos = the goods on a shelf." },
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
        { id: "es-u49l2-elsitio", type: "vocab", front: "el sitio", reading: "elsitio", meaning: "the place / spot", example: { jp: "Es un buen sitio para comer.", en: "It's a good place to eat." }, drill: { jp: "El sitio es muy tranquilo", en: "The spot is very calm" }, accept: ["place", "spot", "room"], hint: "A close friend of el lugar (u9). Also \"room/space\": no hay sitio = there's no room." },
        { id: "es-u49l2-elespacio", type: "vocab", front: "el espacio", reading: "elespacio", meaning: "the space / room", example: { jp: "No hay espacio en el coche.", en: "There's no room in the car." }, drill: { jp: "El espacio del piso es pequeño", en: "The flat's space is small" }, accept: ["space", "room"], hint: "Physical space or room. Also outer space: el espacio." },
        { id: "es-u49l2-lazona", type: "vocab", front: "la zona", reading: "lazona", meaning: "the area / zone", example: { jp: "Vivo en esta zona.", en: "I live in this area." }, drill: { jp: "La zona del puerto es industrial", en: "The port area is industrial" }, accept: ["area", "zone", "district"], hint: "A part of a town or region. Una zona tranquila = a quiet area." },
        { id: "es-u49l2-elarea", type: "vocab", front: "el área", reading: "elarea", meaning: "the area", example: { jp: "El área es muy grande.", en: "The area is very big." }, drill: { jp: "El área del parque es enorme", en: "The area of the park is enormous" }, accept: ["area", "zone", "field"], hint: "Feminine, but takes el (not la) because it starts with a stressed a — like el agua (u6). Plural las áreas." },
        { id: "es-u49l2-elrincon", type: "vocab", front: "el rincón", reading: "elrincon", meaning: "the corner (inside)", example: { jp: "Hay una silla en el rincón.", en: "There's a chair in the corner." }, drill: { jp: "El rincón del salón está oscuro", en: "The corner of the living room is dark" }, accept: ["corner", "nook"], hint: "An INSIDE corner of a room. The outside corner of a street is la esquina (u17)." },
        { id: "es-u49l2-elfondo", type: "vocab", front: "el fondo", reading: "elfondo", meaning: "the back / bottom", example: { jp: "El baño está al fondo.", en: "The bathroom is at the back." }, drill: { jp: "El fondo de la caja está sucio", en: "The bottom of the box is dirty" }, accept: ["back", "bottom", "depth"], hint: "Al fondo = at the back / far end. En el fondo = deep down / at heart." },
      ],
    },
    {
      id: "es-u49l3",
      unit: 49,
      lesson: 3,
      title: "El equipo, el compañero, la pareja",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about people around you: mi equipo, un compañero de trabajo, un miembro, el público, la pareja.",
      items: [
        { id: "es-u49l3-elpublico", type: "vocab", front: "el público", reading: "elpublico", meaning: "the public / audience", example: { jp: "Hay mucho público en el cine.", en: "There's a big audience at the cinema." }, drill: { jp: "El público del concierto es joven", en: "The concert audience is young" }, accept: ["public", "audience", "crowd"], hint: "The audience at a show, or the general public. En público = in public." },
        { id: "es-u49l3-elcompanero", type: "vocab", front: "el compañero", reading: "elcompanero", meaning: "the companion / colleague", example: { jp: "Es mi compañero de trabajo.", en: "He's my colleague at work." }, drill: { jp: "El compañero de trabajo es amable", en: "The workmate is kind" }, accept: ["colleague", "classmate", "companion", "partner"], hint: "compañero de trabajo = colleague; compañero de clase = classmate. Feminine compañera." },
        { id: "es-u49l3-elequipo", type: "vocab", front: "el equipo", reading: "elequipo", meaning: "the team / equipment", example: { jp: "Mi equipo es el mejor.", en: "My team is the best." }, drill: { jp: "El equipo de la oficina es bueno", en: "The office team is good" }, accept: ["team", "equipment", "kit"], hint: "A team of people, or a set of equipment/kit. Trabajar en equipo = to work as a team." },
        { id: "es-u49l3-elmiembro", type: "vocab", front: "el miembro", reading: "elmiembro", meaning: "the member", example: { jp: "Es un miembro de la familia.", en: "He's a member of the family." }, drill: { jp: "El miembro nuevo es mi vecino", en: "The new member is my neighbour" }, accept: ["member"], hint: "A member of a group, team, or family. The word stays el for men and women." },
        { id: "es-u49l3-ellider", type: "vocab", front: "el líder", reading: "ellider", meaning: "the leader", example: { jp: "Ella es la líder del grupo.", en: "She's the leader of the group." }, drill: { jp: "El líder del grupo es joven", en: "The group's leader is young" }, accept: ["leader", "head"], hint: "La líder for a woman. Plural los líderes. Borrowed from English \"leader\", spelled the Spanish way." },
        { id: "es-u49l3-lapareja", type: "vocab", front: "la pareja", reading: "lapareja", meaning: "the partner / couple", example: { jp: "Vive con su pareja.", en: "He lives with his partner." }, drill: { jp: "La pareja de mi hermana es española", en: "My sister's partner is Spanish" }, accept: ["partner", "couple", "pair"], hint: "Both a romantic partner and a couple/pair. En pareja = as a couple. From el par (u47)." },
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
        { id: "es-u49l4-lafrase", type: "vocab", front: "la frase", reading: "lafrase", meaning: "the sentence / phrase", example: { jp: "No entiendo esta frase.", en: "I don't understand this sentence." }, drill: { jp: "La frase del libro es larga", en: "The sentence in the book is long" }, accept: ["sentence", "phrase"], hint: "A whole sentence or a set phrase. Made of words (palabras, u18)." },
        { id: "es-u49l4-lacarta", type: "vocab", front: "la carta", reading: "lacarta", meaning: "the letter / menu", example: { jp: "Escribo una carta a mi amiga.", en: "I'm writing a letter to my friend." }, drill: { jp: "La carta del restaurante es corta", en: "The restaurant menu is short" }, accept: ["letter", "menu", "card"], hint: "Two everyday meanings: a letter you write, AND the menu in a restaurant (la carta). Also a playing card." },
        { id: "es-u49l4-lalista", type: "vocab", front: "la lista", reading: "lalista", meaning: "the list", example: { jp: "Hago una lista de cosas.", en: "I make a list of things." }, drill: { jp: "La lista de la compra es larga", en: "The shopping list is long" }, accept: ["list"], hint: "Hacer una lista = to make a list. La lista de la compra = the shopping list." },
        { id: "es-u49l4-eltitulo", type: "vocab", front: "el título", reading: "eltitulo", meaning: "the title", example: { jp: "El título del libro es largo.", en: "The book's title is long." }, drill: { jp: "El título de la novela es raro", en: "The novel's title is strange" }, accept: ["title", "heading", "degree"], hint: "The title of a book or film, a heading, or a qualification (a university degree)." },
        { id: "es-u49l4-elaviso", type: "vocab", front: "el aviso", reading: "elaviso", meaning: "the notice / warning", example: { jp: "Hay un aviso en la puerta.", en: "There's a notice on the door." }, drill: { jp: "El aviso está en la puerta", en: "The notice is on the door" }, accept: ["notice", "warning", "heads-up"], hint: "A notice or a heads-up. Sin previo aviso = without warning." },
        { id: "es-u49l4-elcartel", type: "vocab", front: "el cartel", reading: "elcartel", meaning: "the poster / sign", example: { jp: "El cartel está en la calle.", en: "The sign is in the street." }, drill: { jp: "El cartel del concierto es grande", en: "The concert poster is big" }, accept: ["poster", "sign", "placard"], hint: "A poster on a wall or a sign in the street — bigger and more public than un aviso." },
      ],
    },
    {
      id: "es-u49l5",
      unit: 49,
      lesson: 5,
      title: "El rey, el maestro, el soldado",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name people by their role: a king, a pupil, a schoolteacher, a soldier, an expert, and the police.",
      items: [
        { id: "es-u49l5-elrey", type: "vocab", front: "el rey", reading: "elrey", meaning: "the king", example: { jp: "El rey habló por televisión el martes.", en: "The king spoke on television on Tuesday." }, accept: ["the king"], hint: "La reina is the queen; los reyes covers both, and also the Three Kings on 6 January." },
        { id: "es-u49l5-elalumno", type: "vocab", front: "el alumno", reading: "elalumno", meaning: "the pupil", example: { jp: "Cada alumno tiene su propio libro.", en: "Each pupil has his own book." }, accept: ["the pupil", "the student", "the learner"], hint: "A pupil of a particular teacher or school. El estudiante (u18) is anyone who studies, at any age." },
        { id: "es-u49l5-elmaestro", type: "vocab", front: "el maestro", reading: "elmaestro", meaning: "the schoolteacher / master", example: { jp: "La maestra explicó la lección otra vez.", en: "The teacher explained the lesson again." }, drill: { jp: "El maestro explicó la lección", en: "The schoolteacher explained the lesson" }, accept: ["the schoolteacher", "the teacher", "the master"], hint: "Primary school specifically; el profesor (u18) teaches older students. Also a master of a craft." },
        { id: "es-u49l5-elsoldado", type: "vocab", front: "el soldado", reading: "elsoldado", meaning: "the soldier", example: { jp: "Los soldados llegaron por la mañana.", en: "The soldiers arrived in the morning." }, drill: { jp: "El soldado llegó por la mañana", en: "The soldier arrived in the morning" }, accept: ["the soldier"], hint: "Same form for a woman: la soldado. El ejército is the army." },
        { id: "es-u49l5-elexperto", type: "vocab", front: "el experto", reading: "elexperto", meaning: "the expert", example: { jp: "Los expertos no se ponen de acuerdo.", en: "The experts don't agree." }, accept: ["the expert", "the specialist"], hint: "Also an adjective: es muy experto en el tema. La experiencia (u46) is the experience behind it." },
        { id: "es-u49l5-lapolicia", type: "vocab", front: "la policía", reading: "lapolicia", meaning: "the police", example: { jp: "La policía llegó diez minutos después.", en: "The police arrived ten minutes later." }, accept: ["the police", "the police force", "the policewoman"], hint: "The force is singular and feminine: la policía llegó. Un policía is an individual officer." },
      ],
    },
    {
      id: "es-u49l6",
      unit: 49,
      lesson: 6,
      title: "La lengua, la pieza, el documento",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name some everyday things precisely: a language or tongue, a part or piece, a document, a signature, and fruit in the general sense.",
      items: [
        { id: "es-u49l6-lalengua", type: "vocab", front: "la lengua", reading: "lalengua", meaning: "the language / tongue", example: { jp: "El español es su lengua materna.", en: "Spanish is his mother tongue." }, accept: ["the language", "the tongue", "the mother tongue"], hint: "Both the organ and the language. El idioma is a synonym for the language sense only." },
        { id: "es-u49l6-lapieza", type: "vocab", front: "la pieza", reading: "lapieza", meaning: "the piece / part", example: { jp: "Falta una pieza del motor.", en: "A part of the engine is missing." }, accept: ["the piece", "the part", "the component"], hint: "A part of a machine, of a set, or a piece of music. La parte (u20) is a share or a portion of something." },
        { id: "es-u49l6-eldocumento", type: "vocab", front: "el documento", reading: "eldocumento", meaning: "the document", example: { jp: "Guarda el documento antes de cerrarlo.", en: "Save the document before closing it." }, accept: ["the document", "the file", "the paper"], hint: "On paper or on screen. Documentar (u89) is the verb; la documentación is your paperwork." },
        { id: "es-u49l6-lafirma", type: "vocab", front: "la firma", reading: "lafirma", meaning: "the signature / the firm", example: { jp: "Falta tu firma en la última página.", en: "Your signature is missing on the last page." }, accept: ["the signature", "the firm", "the signing"], hint: "From firmar. In business it also means the company itself: una firma alemana." },
        { id: "es-u49l6-elfruto", type: "vocab", front: "el fruto", reading: "elfruto", meaning: "the fruit (of something)", example: { jp: "Su éxito es el fruto de muchos años de trabajo.", en: "His success is the fruit of many years of work." }, accept: ["the fruit", "the result", "the product"], hint: "The result of effort, where la fruta (u6) is the thing you eat. Dar fruto = to bear fruit." },
      ],
    },
  ],
};
