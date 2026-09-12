// ES Unit 118 — Strengthening, weakening, transforming (slot: intensify-transform) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: Verbs of degree-change — intensify, consolidate, erode, dilute, trigger,
//         offset.
//   NOT:  Change over time (u59) and the action verbs of B1 (u74, u78). If the B1 unit
//         already teaches the plain verb, take the formal one.
//
// Rejected as already taught: desencadenar (u52), recortar (u74). Rejected as relatives
// of taught words: consolidar (consolidarse u59), el incremento/incrementar (u59).
// "socavar" and "minar" are left to u111, which owns undermining an argument.
export const ES_UNIT118 = {
  id: "es-u118",
  lang: "es",
  title: "Reforzar, debilitar, transformar",
  order: 118,
  stage: "b2",
  lessons: [
    {
      id: "es-u118l1",
      unit: 118,
      lesson: 1,
      title: "Intensificar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something has grown sharper: intensify an effort, sharpen a difference, stoke a conflict, or report that a crisis has flared up again.",
      items: [
        { id: "es-u118l1-intensificar", type: "vocab", front: "intensificar", reading: "intensificar", meaning: "to intensify / step up", example: { jp: "La policía intensificó las pesquisas después de la denuncia.", en: "The police stepped up their inquiries after the complaint." }, accept: ["to intensify", "to step up", "to increase"], hint: "The neutral, official verb: more of the same, harder. Reflexive when nobody is doing it: la lluvia se intensificó." },
        { id: "es-u118l1-acentuar", type: "vocab", front: "acentuar", reading: "acentuar", meaning: "to accentuate / make more marked", example: { jp: "La crisis acentuó las diferencias entre las dos regiones.", en: "The crisis accentuated the differences between the two regions." }, accept: ["to accentuate", "to heighten", "to make more marked"], hint: "Makes a contrast more visible rather than a quantity larger. The same verb puts an accent on a letter." },
        { id: "es-u118l1-agudizar", type: "vocab", front: "agudizar", reading: "agudizar", meaning: "to sharpen / make more acute", example: { jp: "El calor agudiza el problema del agua cada verano.", en: "The heat makes the water problem more acute every summer." }, accept: ["to sharpen", "to make more acute", "to worsen"], hint: "From agudo, sharp. Almost always about problems, pain and shortages — never good news." },
        { id: "es-u118l1-avivar", type: "vocab", front: "avivar", reading: "avivar", meaning: "to rekindle / revive", example: { jp: "La noticia avivó el interés por el caso.", en: "The news rekindled interest in the case." }, accept: ["to rekindle", "to revive", "to fan"], hint: "A fire that was going out and is now burning again — used of interest, hope and debate." },
        { id: "es-u118l1-atizar", type: "vocab", front: "atizar", reading: "atizar", meaning: "to stoke / stir up", example: { jp: "Sus declaraciones atizaron el conflicto en lugar de calmarlo.", en: "His statements stoked the conflict instead of calming it." }, drill: { jp: "Sus palabras van a atizar todo", en: "His words are going to stoke it all" }, accept: ["to stoke", "to stir up", "to fuel"], hint: "Avivar can be innocent; atizar rarely is — someone is feeding the fire on purpose." },
        { id: "es-u118l1-recrudecerse", type: "vocab", front: "recrudecerse", reading: "recrudecerse", meaning: "to flare up again", example: { jp: "El conflicto se recrudeció en cuanto terminó el acuerdo.", en: "The conflict flared up again as soon as the agreement ended." }, drill: { jp: "El conflicto puede recrudecerse pronto", en: "The conflict can flare up again soon" }, accept: ["to flare up again", "to intensify again", "to worsen"], hint: "Only for things already bad: wars, epidemics, cold weather. Always reflexive in this sense." },
      ],
    },
    {
      id: "es-u118l2",
      unit: 118,
      lesson: 2,
      title: "Afianzar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something has been made firmer: shore up a position, strengthen a case, boost a sector, and describe growing influence.",
      items: [
        { id: "es-u118l2-reforzar", type: "vocab", front: "reforzar", reading: "reforzar", meaning: "to reinforce / strengthen", example: { jp: "Reforzaron la seguridad del edificio durante el juicio.", en: "They reinforced the security of the building during the trial." }, drill: { jp: "Quieren reforzar la seguridad", en: "They want to reinforce the security" }, accept: ["to reinforce", "to strengthen", "to bolster"], hint: "The everyday word of the family: more people, more material, more support. Stem change: refuerzo, refuerzan." },
        { id: "es-u118l2-afianzar", type: "vocab", front: "afianzar", reading: "afianzar", meaning: "to secure / cement", example: { jp: "Aquel acuerdo afianzó su posición en el partido.", en: "That agreement cemented his position in the party." }, drill: { jp: "El acuerdo va a afianzar todo", en: "The agreement is going to cement it all" }, accept: ["to cement", "to secure", "to consolidate"], hint: "Makes an existing position safe rather than bigger. Reflexive for what settles by itself: la costumbre se afianzó." },
        { id: "es-u118l2-robustecer", type: "vocab", front: "robustecer", reading: "robustecer", meaning: "to fortify / make robust", example: { jp: "Los nuevos datos robustecen la defensa del acusado.", en: "The new data strengthen the defendant's case." }, accept: ["to fortify", "to make robust", "to strengthen"], hint: "Formal and structural — arguments, institutions, economies. Not used of a wall you can touch." },
        { id: "es-u118l2-potenciar", type: "vocab", front: "potenciar", reading: "potenciar", meaning: "to boost / bring out the potential of", example: { jp: "El plan quiere potenciar el turismo rural de la región.", en: "The plan aims to boost rural tourism in the region." }, accept: ["to boost", "to promote", "to enhance"], hint: "The verb of policy documents. It develops something that was already there rather than adding to it." },
        { id: "es-u118l2-acrecentar", type: "vocab", front: "acrecentar", reading: "acrecentar", meaning: "to increase / augment", example: { jp: "Cada sentencia acrecentaba su fama de juez duro.", en: "Each ruling increased his reputation as a hard judge." }, accept: ["to increase", "to augment", "to swell"], hint: "Formal, and for things that grow rather than count: fame, wealth, mistrust." },
        { id: "es-u118l2-cimentar", type: "vocab", front: "cimentar", reading: "cimentar", meaning: "to cement / build on firm ground", example: { jp: "Cimentaron su éxito en años de trabajo callado.", en: "They built their success on years of quiet work." }, accept: ["to cement", "to build on", "to found"], hint: "From el cemento. cimentar algo EN algo: it says what the foundation is, not just that it is firm." },
      ],
    },
    {
      id: "es-u118l3",
      unit: 118,
      lesson: 3,
      title: "Debilitar y erosionar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe loss of strength: something wearing away slowly, dwindling, being watered down, or simply getting weaker.",
      items: [
        { id: "es-u118l3-debilitar", type: "vocab", front: "debilitar", reading: "debilitar", meaning: "to weaken", example: { jp: "La falta de apoyo debilitó al gobierno mes a mes.", en: "The lack of support weakened the government month by month." }, drill: { jp: "La falta puede debilitar todo", en: "The lack can weaken everything" }, accept: ["to weaken", "to sap", "to enfeeble"], hint: "The plain word of the family, from débil. Reflexive when it happens on its own: la moneda se debilitó." },
        { id: "es-u118l3-menguar", type: "vocab", front: "menguar", reading: "menguar", meaning: "to wane / dwindle", example: { jp: "Su influencia menguó en cuanto perdió el cargo.", en: "His influence waned as soon as he lost the post." }, accept: ["to wane", "to dwindle", "to shrink"], hint: "The verb of the waning moon — la luna menguante. Slow, natural decline rather than someone reducing it." },
        { id: "es-u118l3-erosionar", type: "vocab", front: "erosionar", reading: "erosionar", meaning: "to erode", example: { jp: "Cada escándalo erosiona un poco la confianza de la gente.", en: "Each scandal erodes people's trust a little." }, accept: ["to erode", "to wear away", "to eat away at"], hint: "Rock and reputations alike. The damage is invisible day by day and obvious over years." },
        { id: "es-u118l3-desgastar", type: "vocab", front: "desgastar", reading: "desgastar", meaning: "to wear down", example: { jp: "Aquellos años en el poder lo desgastaron mucho.", en: "Those years in power wore him down badly." }, accept: ["to wear down", "to wear out", "to exhaust"], hint: "Use, not weather: shoes, machines and politicians. El desgaste is the resulting state." },
        { id: "es-u118l3-diluir", type: "vocab", front: "diluir", reading: "diluir", meaning: "to dilute / water down", example: { jp: "Las enmiendas diluyeron el sentido original del texto.", en: "The amendments watered down the original meaning of the text." }, drill: { jp: "Las enmiendas van a diluir todo", en: "The amendments are going to water it all down" }, accept: ["to dilute", "to water down", "to weaken"], hint: "Same strength spread over more: a drink, a rule, a responsibility. Diluirse = to melt away." },
        { id: "es-u118l3-resquebrajar", type: "vocab", front: "resquebrajar", reading: "resquebrajar", meaning: "to crack / fracture", example: { jp: "La crisis resquebrajó la unidad del partido.", en: "The crisis cracked the party's unity." }, accept: ["to crack", "to fracture", "to split"], hint: "Usually reflexive: se resquebraja. A crack that shows, short of breaking apart." },
      ],
    },
    {
      id: "es-u118l4",
      unit: 118,
      lesson: 4,
      title: "Contrarrestar y desatar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that one force cancels another, that an effect was softened, that an event set something off, and that a trend has been reversed.",
      items: [
        { id: "es-u118l4-amortiguar", type: "vocab", front: "amortiguar", reading: "amortiguar", meaning: "to cushion / absorb", example: { jp: "Las ayudas amortiguaron los efectos de la sequía, pero no los evitaron.", en: "The aid cushioned the effects of the drought, but did not prevent them." }, drill: { jp: "Las ayudas van a amortiguar todo", en: "The aid is going to cushion it all" }, accept: ["to cushion", "to absorb", "to soften", "to damp"], hint: "Takes the force out of a blow that lands anyway. Atenuar lowers intensity; this one puts something in between." },
        { id: "es-u118l4-contrarrestar", type: "vocab", front: "contrarrestar", reading: "contrarrestar", meaning: "to counteract / offset", example: { jp: "Las nuevas ventas no contrarrestan las pérdidas del año pasado.", en: "The new sales do not offset last year's losses." }, accept: ["to counteract", "to offset", "to counterbalance"], hint: "Two forces meeting: one is set against the other. Note the double r." },
        { id: "es-u118l4-desatar", type: "vocab", front: "desatar", reading: "desatar", meaning: "to unleash / set off", example: { jp: "La sentencia desató una fuerte reacción en la prensa.", en: "The ruling set off a strong reaction in the press." }, accept: ["to unleash", "to set off", "to trigger", "to spark"], hint: "Literally to untie: something held back is now loose. Desatarse for what breaks out by itself." },
        { id: "es-u118l4-suscitar", type: "vocab", front: "suscitar", reading: "suscitar", meaning: "to give rise to / arouse", example: { jp: "La propuesta suscitó dudas incluso entre sus propios apoyos.", en: "The proposal gave rise to doubts even among its own supporters." }, drill: { jp: "La propuesta va a suscitar dudas", en: "The proposal is going to raise doubts" }, accept: ["to give rise to", "to arouse", "to prompt", "to raise"], hint: "Quieter than desatar: it produces reactions, questions and interest, not storms." },
        { id: "es-u118l4-revertir", type: "vocab", front: "revertir", reading: "revertir", meaning: "to reverse / turn around", example: { jp: "Costará años revertir el daño hecho al terreno.", en: "It will take years to reverse the damage done to the land." }, accept: ["to reverse", "to turn around", "to undo"], hint: "Sends a process back the way it came. Revertir EN algo means to result in something instead." },
        { id: "es-u118l4-neutralizar", type: "vocab", front: "neutralizar", reading: "neutralizar", meaning: "to neutralize / cancel out", example: { jp: "Las ayudas neutralizan el efecto de la subida.", en: "The subsidies neutralize the effect of the increase." }, accept: ["to neutralize", "to cancel out", "to offset"], hint: "Leaves nothing behind, where contrarrestar (the card above) only pushes the other way." },
      ],
    },
  ],
};
