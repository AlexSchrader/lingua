// ES Unit 30 — La casa y las tareas (slot: home-household) — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 furnishes the house at rest — la casa, el piso, and every room (la cocina,
// el baño, el dormitorio, el salón, el jardín), plus the basic furniture (la
// mesa, la silla, la cama, el sofá, el armario, la lámpara, el espejo) and one
// chore, limpiar. What it cannot do is run a household: no chore has a verb, no
// appliance has a name, half the fittings are missing, and there's no way to
// rent, move, or talk about a neighbour. So A2 makes the house work — the chores
// as verbs, the appliances, the fittings A1 skipped, and the business of renting
// and moving. Every A1 room and furniture word is used in the examples and
// re-taught nowhere. (que, from u29, is now available and used freely.)
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT30 = {
  id: "es-u30",
  lang: "es",
  title: "La casa y las tareas",
  order: 30,
  stage: "a2",
  lessons: [
    // Lesson 1: the chores, as verbs
    {
      id: "es-u30l1",
      unit: 30,
      lesson: 1,
      title: "Housework",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what housework you do — barrer, fregar, planchar, ordenar — not just limpiar in general.",
      items: [
        { id: "es-u30l1-latarea", type: "vocab", front: "la tarea", reading: "latarea", meaning: "chore", example: { jp: "Hago las tareas de casa los sábados.", en: "I do the housework on Saturdays." }, drill: { jp: "La tarea de la casa es dura", en: "The housework is hard" }, accept: ["the task", "job", "housework"], hint: "las tareas de casa = housework. In Latin America la tarea also means homework, the deberes A1 taught." },
        { id: "es-u30l1-barrer", type: "vocab", front: "barrer", reading: "barrer", meaning: "to sweep", example: { jp: "Barro el suelo de la cocina.", en: "I sweep the kitchen floor." }, drill: { jp: "Quiero barrer la cocina", en: "I want to sweep the kitchen" }, accept: ["sweep up"], hint: "With a broom, una escoba. Barrer el suelo — the suelo (A1) is the floor." },
        { id: "es-u30l1-fregar", type: "vocab", front: "fregar", reading: "fregar", meaning: "to wash up", example: { jp: "Friego los vasos después de comer.", en: "I wash the glasses after eating." }, drill: { jp: "Quiero fregar los platos", en: "I want to wash up the dishes" }, accept: ["mop", "scrub", "do the dishes"], hint: "fregar los platos = wash the dishes; fregar el suelo = mop the floor. The e becomes ie: friego." },
        { id: "es-u30l1-planchar", type: "vocab", front: "planchar", reading: "planchar", meaning: "to iron", example: { jp: "Plancho la camisa antes de salir.", en: "I iron the shirt before going out." }, drill: { jp: "Planchar la ropa es aburrido", en: "Ironing clothes is boring" }, accept: ["press (clothes)"], hint: "The iron itself is la plancha — planchar is what you do with it." },
        { id: "es-u30l1-ordenar", type: "vocab", front: "ordenar", reading: "ordenar", meaning: "to tidy", example: { jp: "Ordeno mi dormitorio todos los días.", en: "I tidy my bedroom every day." }, drill: { jp: "Quiero ordenar mi dormitorio", en: "I want to tidy my bedroom" }, accept: ["tidy up", "put in order", "order"], hint: "Put things in their place. Also to order someone to do something — el orden is order itself." },
        { id: "es-u30l1-labasura", type: "vocab", front: "la basura", reading: "labasura", meaning: "rubbish", example: { jp: "Hay mucha basura en la calle.", en: "There's a lot of rubbish in the street." }, drill: { jp: "La basura está en la cocina", en: "The rubbish is in the kitchen" }, accept: ["the trash", "garbage", "waste"], hint: "sacar la basura is to take out the trash. El cubo de la basura is the bin." },
      ],
    },
    // Lesson 2: the appliances
    {
      id: "es-u30l2",
      unit: 30,
      lesson: 2,
      title: "Appliances",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what's in the kitchen and whether it works — la nevera, la lavadora, el horno, funcionar.",
      items: [
        { id: "es-u30l2-lanevera", type: "vocab", front: "la nevera", reading: "lanevera", meaning: "fridge", example: { jp: "La leche está en la nevera.", en: "The milk is in the fridge." }, drill: { jp: "La leche está en la nevera", en: "The milk is in the fridge" }, accept: ["the refrigerator", "icebox"], hint: "From la nieve (A1), snow — the cold box. Latin America says el refrigerador or la heladera." },
        { id: "es-u30l2-lalavadora", type: "vocab", front: "la lavadora", reading: "lalavadora", meaning: "washing machine", example: { jp: "Pongo la ropa en la lavadora.", en: "I put the clothes in the washing machine." }, drill: { jp: "La lavadora está en la cocina", en: "The washing machine is in the kitchen" }, accept: ["the washer"], hint: "From lavar, to wash (as in lavarse, u21). The -dora ending names the machine that does a job." },
        { id: "es-u30l2-elhorno", type: "vocab", front: "el horno", reading: "elhorno", meaning: "oven", example: { jp: "El pan está en el horno.", en: "The bread is in the oven." }, drill: { jp: "El pan está en el horno", en: "The bread is in the oven" }, accept: ["the oven"], hint: "The microwave is el microondas — literally \"micro-waves\". El horno is the full-size oven." },
        { id: "es-u30l2-laestufa", type: "vocab", front: "la estufa", reading: "laestufa", meaning: "heater", example: { jp: "Enciendo la estufa cuando hace frío.", en: "I turn on the heater when it's cold." }, drill: { jp: "La estufa está en el salón", en: "The heater is in the living room" }, accept: ["the stove", "heater"], hint: "A heater for the room. Don't confuse it with la cocina (A1), which in Spain is the cooker you cook on." },
        { id: "es-u30l2-elenchufe", type: "vocab", front: "el enchufe", reading: "elenchufe", meaning: "plug socket", example: { jp: "Necesito un enchufe para el móvil.", en: "I need a socket for my phone." }, drill: { jp: "El enchufe está detrás del sofá", en: "The plug socket is behind the sofa" }, accept: ["the socket", "plug", "outlet"], hint: "Both the plug and the wall socket. The verb enchufar is to plug in." },
        { id: "es-u30l2-funcionar", type: "vocab", front: "funcionar", reading: "funcionar", meaning: "to work", example: { jp: "La lavadora no funciona.", en: "The washing machine doesn't work." }, drill: { jp: "El horno vuelve a funcionar hoy", en: "The oven is working again today" }, accept: ["function", "run", "operate"], hint: "For machines only. A person works = trabajar (A1); a device works = funcionar. No funciona — it's broken." },
      ],
    },
    // Lesson 3: the fittings A1 skipped
    {
      id: "es-u30l3",
      unit: 30,
      lesson: 3,
      title: "Fittings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Furnish a room fully — la pared, el techo, la alfombra, el cajón, la cortina.",
      items: [
        { id: "es-u30l3-lapared", type: "vocab", front: "la pared", reading: "lapared", meaning: "wall", example: { jp: "El cuadro está en la pared.", en: "The picture is on the wall." }, drill: { jp: "La pared del salón es blanca", en: "The living room wall is white" }, accept: ["the wall"], hint: "The wall of a room. A city or garden wall outside is un muro — a thicker, freestanding thing." },
        { id: "es-u30l3-eltecho", type: "vocab", front: "el techo", reading: "eltecho", meaning: "ceiling", example: { jp: "El techo de la casa es blanco.", en: "The ceiling of the house is white." }, drill: { jp: "El techo de la cocina es alto", en: "The kitchen ceiling is high" }, accept: ["the roof", "ceiling"], hint: "The ceiling above you, and also the roof over the house. El suelo (A1) is the floor below." },
        { id: "es-u30l3-laalfombra", type: "vocab", front: "la alfombra", reading: "laalfombra", meaning: "rug", example: { jp: "La alfombra del salón es roja.", en: "The living-room rug is red." }, drill: { jp: "La alfombra del salón es roja", en: "The living room rug is red" }, accept: ["the carpet", "mat"], hint: "One of the many Spanish words from Arabic — you can hear the al- that starts them." },
        { id: "es-u30l3-elcajon", type: "vocab", front: "el cajón", reading: "elcajon", meaning: "drawer", example: { jp: "Los calcetines están en el cajón.", en: "The socks are in the drawer." }, drill: { jp: "El papel está en el cajón", en: "The paper is in the drawer" }, accept: ["the drawer"], hint: "A big caja (A1), a box — a drawer is a box that slides. Plural los cajones." },
        { id: "es-u30l3-elestante", type: "vocab", front: "el estante", reading: "elestante", meaning: "shelf", example: { jp: "Los libros están en el estante.", en: "The books are on the shelf." }, drill: { jp: "El libro está en el estante", en: "The book is on the shelf" }, accept: ["the shelf"], hint: "A single shelf; the whole bookcase is la estantería, with that -ería ending again." },
        { id: "es-u30l3-lacortina", type: "vocab", front: "la cortina", reading: "lacortina", meaning: "curtain", example: { jp: "Abro las cortinas por la mañana.", en: "I open the curtains in the morning." }, drill: { jp: "La cortina de la ventana es azul", en: "The window curtain is blue" }, accept: ["the curtains", "drape"], hint: "Hangs at la ventana (A1), the window. Usually plural — las cortinas." },
      ],
    },
    // Lesson 4: renting and moving
    {
      id: "es-u30l4",
      unit: 30,
      lesson: 4,
      title: "Renting and moving",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a place to live — alquilar un piso, mudarse, un vecino, compartir piso.",
      items: [
        { id: "es-u30l4-alquilar", type: "vocab", front: "alquilar", reading: "alquilar", meaning: "to rent", example: { jp: "Alquilo un piso en el centro.", en: "I rent a flat in the centre." }, drill: { jp: "Quiero alquilar un piso pequeño", en: "I want to rent a small flat" }, accept: ["hire", "let"], hint: "Works both ways — to rent from and to rent out. The rent itself is el alquiler." },
        { id: "es-u30l4-amueblado", type: "vocab", front: "amueblado", reading: "amueblado", meaning: "furnished", example: { jp: "El piso está amueblado.", en: "The flat is furnished." }, drill: { jp: "El piso está amueblado", en: "The flat is furnished" }, accept: ["fitted with furniture"], hint: "From los muebles, the furniture. Un piso amueblado comes with the furniture in it." },
        { id: "es-u30l4-mudarse", type: "vocab", front: "mudarse", reading: "mudarse", meaning: "to move house", example: { jp: "Me mudo a una casa nueva.", en: "I'm moving to a new house." }, drill: { jp: "Mudarse de casa es difícil", en: "Moving house is difficult" }, accept: ["move", "relocate"], hint: "mudarse is to move home; mover (without -se) is to move a thing. La mudanza is the move itself." },
        { id: "es-u30l4-elvecino", type: "vocab", front: "el vecino", reading: "elvecino", meaning: "neighbour", example: { jp: "Mi vecino tiene un perro grande.", en: "My neighbour has a big dog." }, drill: { jp: "El vecino de arriba hace ruido", en: "The neighbour upstairs makes noise" }, accept: ["the neighbor"], hint: "la vecina for a woman. The whole neighbourhood is el barrio." },
        { id: "es-u30l4-elruido", type: "vocab", front: "el ruido", reading: "elruido", meaning: "noise", example: { jp: "Hay mucho ruido en la calle.", en: "There's a lot of noise in the street." }, drill: { jp: "El ruido de la calle es fuerte", en: "The noise from the street is loud" }, accept: ["the noise", "racket"], hint: "hacer ruido is to make noise. The adjective ruidoso means noisy." },
        { id: "es-u30l4-compartir", type: "vocab", front: "compartir", reading: "compartir", meaning: "to share", example: { jp: "Comparto el piso con dos amigos.", en: "I share the flat with two friends." }, drill: { jp: "Quiero compartir el piso con Ana", en: "I want to share the flat with Ana" }, accept: ["split", "share out"], hint: "compartir piso is to flatshare — how most young people first live away from home." },
      ],
    },
  ],
};
