// ES Unit 95 — History and heritage (slot: history) — B2
// Authored: block 1, group 1. 4 lessons x 6 cards.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it.
//   OWNS: Time at the scale of nations — eras, legacy, empire, historiography,
//         collective memory and commemoration.
//   NOT:  Personal memory and the stages of a life (u63). If a single person remembers
//         it, it is u63's.
export const ES_UNIT95 = {
  id: "es-u95",
  lang: "es",
  title: "La historia y el patrimonio",
  order: 95,
  stage: "b2",
  lessons: [
    {
      id: "es-u95l1",
      unit: 95,
      lesson: 1,
      title: "El curso de los siglos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place events on a national timescale: name a dynasty and a reign, say when a power was at its height or in decline, and mark a turning point.",
      items: [
        { id: "es-u95l1-ladinastia", type: "vocab", front: "la dinastía", reading: "ladinastia", meaning: "the dynasty", example: { jp: "La dinastía gobernó el país hasta la última guerra.", en: "The dynasty ruled the country until the last war." }, accept: ["the dynasty", "the ruling house", "the line"], hint: "A family that holds power across generations. Used of companies and sports teams too." },
        { id: "es-u95l1-elreinado", type: "vocab", front: "el reinado", reading: "elreinado", meaning: "the reign", example: { jp: "Durante su reinado se construyeron los edificios más antiguos.", en: "During his reign the oldest buildings were built." }, accept: ["the reign", "the rule"], hint: "The period one monarch rules. El reino is the kingdom itself — one letter apart, very different words." },
        { id: "es-u95l1-elauge", type: "vocab", front: "el auge", reading: "elauge", meaning: "the height / boom", example: { jp: "La ciudad vivió su mayor auge bajo aquel gobierno.", en: "The city saw its greatest heyday under that government." }, accept: ["the height", "the peak", "the boom", "the heyday"], hint: "Estar en auge = to be booming. Of economies, of empires, and of fashions." },
        { id: "es-u95l1-ladecadencia", type: "vocab", front: "la decadencia", reading: "ladecadencia", meaning: "the decline", example: { jp: "Los historiadores discuten las causas de aquella decadencia.", en: "Historians argue about the causes of that decline." }, accept: ["the decline", "the decay", "the decadence"], hint: "The slow loss of power or quality. Decadente can mean either declining or, of taste, decadent." },
        { id: "es-u95l1-elocaso", type: "vocab", front: "el ocaso", reading: "elocaso", meaning: "the twilight / final days", example: { jp: "El ocaso del imperio duró más de cien años.", en: "The twilight of the empire lasted more than a hundred years." }, accept: ["the twilight", "the decline", "the final days", "the sunset"], hint: "Literally sunset. More literary than decadencia and always about the very end of something." },
        { id: "es-u95l1-elhito", type: "vocab", front: "el hito", reading: "elhito", meaning: "the milestone", example: { jp: "Aquella victoria fue un hito en la historia del país.", en: "That victory was a milestone in the country's history." }, accept: ["the milestone", "the landmark", "the turning point"], hint: "Marcar un hito = to mark a milestone. Originally the stone that marked a boundary." },
      ],
    },
    {
      id: "es-u95l2",
      unit: 95,
      lesson: 2,
      title: "El imperio y la conquista",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe empire and resistance to it: name a conquest and a colony, refer to those ruled over, and talk about a revolt and independence.",
      items: [
        { id: "es-u95l2-elimperio", type: "vocab", front: "el imperio", reading: "elimperio", meaning: "the empire", example: { jp: "El imperio llegó a controlar medio continente.", en: "The empire came to control half a continent." }, accept: ["the empire"], hint: "Imperial is the adjective, el emperador the ruler. Also figurative: un imperio de la prensa." },
        { id: "es-u95l2-laconquista", type: "vocab", front: "la conquista", reading: "laconquista", meaning: "the conquest", example: { jp: "La conquista del territorio duró varias décadas.", en: "The conquest of the territory took several decades." }, accept: ["the conquest", "the taking"], hint: "Conquistar is the verb. Also used of winning rights: la conquista del voto femenino." },
        { id: "es-u95l2-lacolonia", type: "vocab", front: "la colonia", reading: "lacolonia", meaning: "the colony", example: { jp: "Fue una colonia hasta el final de aquella guerra.", en: "It was a colony until the end of that war." }, accept: ["the colony", "the settlement"], hint: "Colonial is the adjective, la colonización the process. In some countries it also means a neighbourhood." },
        { id: "es-u95l2-elsubdito", type: "vocab", front: "el súbdito", reading: "elsubdito", meaning: "the subject (of a ruler)", example: { jp: "Los súbditos no podían elegir a su gobierno.", en: "The subjects could not choose their government." }, accept: ["the subject", "the vassal"], hint: "A person under a monarch, never a school subject or the subject of a sentence." },
        { id: "es-u95l2-larevuelta", type: "vocab", front: "la revuelta", reading: "larevuelta", meaning: "the revolt", example: { jp: "Una revuelta en el campo obligó al gobierno a ceder.", en: "A revolt in the countryside forced the government to give way." }, accept: ["the revolt", "the uprising", "the rebellion"], hint: "Smaller and more local than una revolución, and usually put down rather than won." },
        { id: "es-u95l2-laindependencia", type: "vocab", front: "la independencia", reading: "laindependencia", meaning: "independence", example: { jp: "El país celebró su independencia con una gran fiesta.", en: "The country celebrated its independence with a great party." }, accept: ["independence", "the independence"], hint: "Of nations here. Independiente covers both the political and the personal sense." },
      ],
    },
    {
      id: "es-u95l3",
      unit: 95,
      lesson: 3,
      title: "El patrimonio y el vestigio",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what the past leaves behind: name heritage, a trace, a dig site, a monument and a ruin, and say something has been restored.",
      items: [
        { id: "es-u95l3-elpatrimonio", type: "vocab", front: "el patrimonio", reading: "elpatrimonio", meaning: "the heritage", example: { jp: "El barrio antiguo forma parte del patrimonio del país.", en: "The old quarter is part of the country's heritage." }, accept: ["the heritage", "the legacy", "the assets"], hint: "Cultural heritage, and in law a person's whole estate. Patrimonio de la humanidad = world heritage." },
        { id: "es-u95l3-elvestigio", type: "vocab", front: "el vestigio", reading: "elvestigio", meaning: "the trace / remnant", example: { jp: "Apenas quedan vestigios del edificio original.", en: "Barely any traces of the original building remain." }, accept: ["the trace", "the remnant", "the vestige"], hint: "Usually plural: los vestigios. What little survives of something that was once whole." },
        { id: "es-u95l3-elyacimiento", type: "vocab", front: "el yacimiento", reading: "elyacimiento", meaning: "the archaeological site", example: { jp: "El yacimiento se descubrió al construir la carretera.", en: "The site was discovered while building the road." }, accept: ["the archaeological site", "the site", "the deposit", "the dig"], hint: "From yacer, to lie. Also a mineral deposit: un yacimiento de gas." },
        { id: "es-u95l3-elmonumento", type: "vocab", front: "el monumento", reading: "elmonumento", meaning: "the monument", example: { jp: "Levantaron un monumento en memoria de las víctimas.", en: "They put up a monument in memory of the victims." }, accept: ["the monument", "the memorial"], hint: "Monumental means both huge and heritage-listed: un edificio monumental." },
        { id: "es-u95l3-laruina", type: "vocab", front: "la ruina", reading: "laruina", meaning: "the ruin", example: { jp: "Las ruinas romanas atraen visitantes de todo el mundo.", en: "The Roman ruins attract visitors from all over the world." }, accept: ["the ruin", "the ruins", "the wreck"], hint: "Plural for a ruined site. Singular and figurative it means financial ruin: estar en la ruina." },
        { id: "es-u95l3-restaurar", type: "vocab", front: "restaurar", reading: "restaurar", meaning: "to restore", example: { jp: "Han restaurado el edificio tal como era al principio.", en: "They have restored the building just as it was at the start." }, accept: ["to restore", "to repair", "to bring back"], hint: "Of buildings and paintings, and of order or a monarchy. La restauración is the work." },
      ],
    },
    {
      id: "es-u95l4",
      unit: 95,
      lesson: 4,
      title: "La memoria y el relato",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss how a society remembers: name a legacy and an ancestor, commemorate an event, pay tribute, and say something has lasted or how history gets written.",
      items: [
        { id: "es-u95l4-ellegado", type: "vocab", front: "el legado", reading: "ellegado", meaning: "the legacy", example: { jp: "Su legado sigue vivo en el idioma y en la cocina.", en: "Its legacy is still alive in the language and the cooking." }, accept: ["the legacy", "the bequest", "the inheritance"], hint: "What an age or a figure leaves to those who come after. Legar is the verb." },
        { id: "es-u95l4-conmemorar", type: "vocab", front: "conmemorar", reading: "conmemorar", meaning: "to commemorate", example: { jp: "Cada año conmemoran el fin de la guerra.", en: "Every year they commemorate the end of the war." }, accept: ["to commemorate", "to mark", "to remember"], hint: "A public act on a date, not private remembering. La conmemoración is the ceremony." },
        { id: "es-u95l4-elhomenaje", type: "vocab", front: "el homenaje", reading: "elhomenaje", meaning: "the tribute", example: { jp: "El museo abrió una sala en homenaje a los soldados.", en: "The museum opened a room in tribute to the soldiers." }, accept: ["the tribute", "the homage", "the honour"], hint: "Rendir homenaje a alguien = to pay tribute to someone. En homenaje a = in tribute to." },
        { id: "es-u95l4-elantepasado", type: "vocab", front: "el antepasado", reading: "elantepasado", meaning: "the ancestor", example: { jp: "Sus antepasados llegaron a este pueblo hace muchos años.", en: "Their ancestors came to this village many years ago." }, accept: ["the ancestor", "the forebear", "the forefather"], hint: "Almost always plural. Los descendientes are those on the other end of the line." },
        { id: "es-u95l4-lahistoriografia", type: "vocab", front: "la historiografía", reading: "lahistoriografia", meaning: "historiography", example: { jp: "La historiografía reciente ha cambiado esa versión.", en: "Recent historiography has changed that version." }, accept: ["historiography", "historical writing", "the writing of history"], hint: "Not history itself but how it gets written, and by whom. Historiográfico is the adjective." },
        { id: "es-u95l4-perdurar", type: "vocab", front: "perdurar", reading: "perdurar", meaning: "to endure / live on", example: { jp: "La costumbre ha perdurado hasta nuestros días.", en: "The custom has lived on to the present day." }, accept: ["to endure", "to live on", "to last", "to persist"], hint: "Stronger than durar: it survives when you would expect it to have gone. Perdurable = lasting." },
      ],
    },
  ],
};
