// ES Unit 120 — Landscape and terrain (slot: landscape) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: The shape of the land — relief, ridge, gorge, estuary, plain, shoreline,
//         glacier.
//   NOT:  Environmental policy (u101) and nature at B1 (u65). This unit is physical
//         geography only.
//
// Rejected as already taught: la costa (u34), la garganta (u25 — the gorge sense is
// blocked by the anatomical one, so this unit teaches el desfiladero and el barranco).
// u65 owns el terreno, el entorno, el territorio and la región; none is re-taught here.
export const ES_UNIT120 = {
  id: "es-u120",
  lang: "es",
  title: "El relieve y el terreno",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "es-u120l1",
      unit: 120,
      lesson: 1,
      title: "La montaña",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe high ground precisely: name a range, a summit, a hillside, and talk about the relief of a region.",
      items: [
        { id: "es-u120l1-elrelieve", type: "vocab", front: "el relieve", reading: "elrelieve", meaning: "the relief / lie of the land", example: { jp: "El relieve de la zona hace muy difícil construir una carretera.", en: "The relief of the area makes building a road very difficult." }, accept: ["the relief", "the terrain", "the lie of the land"], hint: "The ups and downs of a surface. Poner de relieve, to highlight, is the same word used figuratively." },
        { id: "es-u120l1-lacordillera", type: "vocab", front: "la cordillera", reading: "lacordillera", meaning: "the mountain range", example: { jp: "La cordillera cruza todo el país.", en: "The range crosses the whole country." }, accept: ["the mountain range", "the range", "the chain of mountains"], hint: "A long chain, hundreds of kilometres — la cordillera de los Andes. From cuerda, a rope." },
        { id: "es-u120l1-lasierra", type: "vocab", front: "la sierra", reading: "lasierra", meaning: "the sierra / smaller range", example: { jp: "Pasamos el fin de semana en un pueblo de la sierra.", en: "We spent the weekend in a village in the sierra." }, accept: ["the sierra", "the mountain range", "the hills"], hint: "Named after the saw its outline resembles. Smaller than a cordillera, and it is in half the place names in Spain." },
        { id: "es-u120l1-elmacizo", type: "vocab", front: "el macizo", reading: "elmacizo", meaning: "the massif", example: { jp: "El macizo central tiene nieve casi todo el año.", en: "The central massif has snow almost all year." }, accept: ["the massif", "the mountain mass"], hint: "A compact block of mountains rather than a line. As an adjective, macizo means solid." },
        { id: "es-u120l1-laladera", type: "vocab", front: "la ladera", reading: "laladera", meaning: "the hillside / slope", example: { jp: "Las casas están construidas en la ladera, sobre el río.", en: "The houses are built on the hillside, above the river." }, accept: ["the hillside", "the slope", "the mountainside"], hint: "From lado, side: the flank of a hill between the top and the bottom." },
        { id: "es-u120l1-elpico", type: "vocab", front: "el pico", reading: "elpico", meaning: "the peak", example: { jp: "Desde el pico se ve todo el valle.", en: "From the peak you can see the whole valley." }, accept: ["the peak", "the summit", "the beak"], hint: "The pointed top of a mountain. Also a bird's beak, and 'and a bit': dos mil y pico." },
      ],
    },
    {
      id: "es-u120l2",
      unit: 120,
      lesson: 2,
      title: "El valle y la llanura",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe low and flat ground, and the cuts through it: a plain, a plateau, a gorge and a ravine.",
      items: [
        { id: "es-u120l2-elvalle", type: "vocab", front: "el valle", reading: "elvalle", meaning: "the valley", example: { jp: "Desde la cumbre se ve todo el valle.", en: "From the summit you can see the whole valley." }, accept: ["the valley", "the vale"], hint: "The ground between two slopes, usually with a river along it." },
        { id: "es-u120l2-lallanura", type: "vocab", front: "la llanura", reading: "lallanura", meaning: "the plain", example: { jp: "La llanura llega hasta el horizonte.", en: "The plain reaches to the horizon." }, accept: ["the plain", "the flatland", "the lowland"], hint: "From llano, flat. Big and open — the geography word, where el campo is the everyday one." },
        { id: "es-u120l2-lameseta", type: "vocab", front: "la meseta", reading: "lameseta", meaning: "the plateau / tableland", example: { jp: "En la meseta hay nieve durante muchos meses.", en: "On the plateau there is snow for many months." }, accept: ["the plateau", "the tableland"], hint: "Literally a little table: flat, but high up. La Meseta with a capital M is the centre of Spain." },
        { id: "es-u120l2-elaltiplano", type: "vocab", front: "el altiplano", reading: "elaltiplano", meaning: "the high plateau / altiplano", example: { jp: "En el altiplano viven muy pocas personas.", en: "Very few people live on the altiplano." }, accept: ["the high plateau", "the altiplano", "the highland plain"], hint: "The American word, for the great plateaus of the Andes. Higher and wider than a meseta." },
        { id: "es-u120l2-eldesfiladero", type: "vocab", front: "el desfiladero", reading: "eldesfiladero", meaning: "the gorge / narrow pass", example: { jp: "La carretera entra en un desfiladero muy estrecho.", en: "The road enters a very narrow gorge." }, accept: ["the gorge", "the narrow pass", "the defile"], hint: "From desfilar, to file past: so narrow you go through in single file. Walls of rock on both sides." },
        { id: "es-u120l2-elbarranco", type: "vocab", front: "el barranco", reading: "elbarranco", meaning: "the ravine / gully", example: { jp: "El coche cayó por un barranco y nadie lo vio.", en: "The car went over a ravine and nobody saw it." }, drill: { jp: "El barranco es muy profundo", en: "The ravine is very deep" }, accept: ["the ravine", "the gully", "the gorge"], hint: "Cut by water and usually dry. Smaller and rougher than a desfiladero, and the standard word in news reports." },
      ],
    },
    {
      id: "es-u120l3",
      unit: 120,
      lesson: 3,
      title: "El agua y su curso",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow water across a landscape: its bed, its tributaries, its basin, and where it reaches the sea.",
      items: [
        { id: "es-u120l3-elcauce", type: "vocab", front: "el cauce", reading: "elcauce", meaning: "the riverbed / channel", example: { jp: "El cauce del río está seco desde julio.", en: "The bed of the river has been dry since July." }, accept: ["the riverbed", "the channel", "the watercourse"], hint: "The channel, whether there is water in it or not. Figuratively, volver a su cauce = to return to normal." },
        { id: "es-u120l3-elafluente", type: "vocab", front: "el afluente", reading: "elafluente", meaning: "the tributary", example: { jp: "Ese río es un afluente del Ebro.", en: "That river is a tributary of the Ebro." }, drill: { jp: "El afluente es muy largo", en: "The tributary is very long" }, accept: ["the tributary", "the feeder river"], hint: "Afluente DE another river. From fluir, to flow — it flows towards the bigger one." },
        { id: "es-u120l3-lacuenca", type: "vocab", front: "la cuenca", reading: "lacuenca", meaning: "the (river) basin", example: { jp: "Toda la cuenca depende de la lluvia que cae cada año.", en: "The whole basin depends on the rain that falls each year." }, accept: ["the basin", "the river basin", "the catchment"], hint: "Every drop of land that drains into the same river. Also a mining basin: la cuenca minera." },
        { id: "es-u120l3-elarroyo", type: "vocab", front: "el arroyo", reading: "elarroyo", meaning: "the stream / brook", example: { jp: "Cruzamos un arroyo pequeño antes de llegar al pueblo.", en: "We crossed a small stream before reaching the village." }, accept: ["the stream", "the brook", "the creek"], hint: "Small enough to step over in summer. Bigger than it looks after a storm." },
        { id: "es-u120l3-elmanantial", type: "vocab", front: "el manantial", reading: "elmanantial", meaning: "the spring / source", example: { jp: "El agua del manantial sale muy limpia todo el año.", en: "The water from the spring comes out very clean all year." }, accept: ["the spring", "the source", "the wellspring"], hint: "Where water leaves the ground on its own. Agua de manantial is what the bottle says." },
        { id: "es-u120l3-ladesembocadura", type: "vocab", front: "la desembocadura", reading: "ladesembocadura", meaning: "the river mouth / estuary", example: { jp: "En la desembocadura hay una gran zona natural.", en: "At the river mouth there is a large natural area." }, accept: ["the river mouth", "the estuary", "the mouth"], hint: "From desembocar, to flow out — literally to leave the mouth. The place where the river ends." },
      ],
    },
    {
      id: "es-u120l4",
      unit: 120,
      lesson: 4,
      title: "La costa y el hielo",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a coastline and a glacier: name the shore, the cliffs, the dunes and the bay.",
      items: [
        { id: "es-u120l4-ellitoral", type: "vocab", front: "el litoral", reading: "ellitoral", meaning: "the coastline / littoral", example: { jp: "Todo el litoral está protegido desde hace muchos años.", en: "The entire coastline has been protected for many years." }, accept: ["the coastline", "the littoral", "the coastal strip"], hint: "The formal word of maps and laws, and a strip of land rather than a line." },
        { id: "es-u120l4-laorilla", type: "vocab", front: "la orilla", reading: "laorilla", meaning: "the shore / bank", example: { jp: "Caminamos por la orilla hasta el final de la playa.", en: "We walked along the shore to the end of the beach." }, accept: ["the shore", "the bank", "the edge"], hint: "Works for the sea, a river or a lake — wherever water meets land. A la orilla del mar." },
        { id: "es-u120l4-elacantilado", type: "vocab", front: "el acantilado", reading: "elacantilado", meaning: "the cliff", example: { jp: "La casa está en lo alto de un acantilado.", en: "The house stands at the top of a cliff." }, accept: ["the cliff", "the sea cliff", "the bluff"], hint: "Specifically a cliff over the sea. Inland rock faces are una pared or un risco." },
        { id: "es-u120l4-labahia", type: "vocab", front: "la bahía", reading: "labahia", meaning: "the bay", example: { jp: "Los barcos esperan en la bahía cuando hay tormenta.", en: "The boats wait in the bay when there is a storm." }, drill: { jp: "La bahía es muy tranquila", en: "The bay is very calm" }, accept: ["the bay", "the bight"], hint: "Open water partly enclosed by land. A small one is una cala." },
        { id: "es-u120l4-laduna", type: "vocab", front: "la duna", reading: "laduna", meaning: "the dune", example: { jp: "El viento mueve las dunas unos metros cada año.", en: "The wind moves the dunes a few metres each year." }, accept: ["the dune", "the sand dune"], hint: "Sand piled by wind, at the coast or in a desert. It moves, which is the point of it." },
        { id: "es-u120l4-elglaciar", type: "vocab", front: "el glaciar", reading: "elglaciar", meaning: "the glacier", example: { jp: "El glaciar es cada año más pequeño.", en: "The glacier gets smaller every year." }, accept: ["the glacier", "the ice field"], hint: "Stress the last syllable: gla-ciar. As an adjective, glacial means icy — un silencio glacial." },
      ],
    },
  ],
};
