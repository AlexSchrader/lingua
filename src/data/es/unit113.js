// ES Unit 113 — Sustantivos de proceso y grado ("Abstract nouns: process and degree") — B2 (slot: abstract-nouns-b2)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: NOUNS for movement and
// extent. Rise and fall (l1), reach and magnitude (l2), gap and divergence (l3),
// trajectory and consequence (l4).
// The B1 abstract nouns (u76, u86) and the adverbs of degree (u91) are not this unit's:
// every front here is a noun, and the u59/u76 nouns that already cover this ground were
// rejected rather than restated.
// Rejected as already taught: el retroceso, el incremento, el descenso (u59), el ámbito
// (u71), la pauta, el margen (u76), la escala (u23). Rejected as the same lexeme:
// el salto (~u41 saltar), la caída (~u41 caer). Also unavailable: el sesgo and el alcance
// — u104 teaches the first earlier in this block, u76 already owns the second.
export const ES_UNIT113 = {
  id: "es-u113",
  lang: "es",
  title: "Sustantivos de proceso y grado",
  order: 113,
  stage: "b2",
  lessons: [
    {
      id: "es-u113l1",
      unit: 113,
      lesson: 1,
      title: "Subida y bajada",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what a quantity is doing over time: surging, ticking back up, sliding, shrinking, stuck, or collapsing.",
      items: [
        { id: "es-u113l1-repunte", type: "vocab", front: "el repunte", reading: "elrepunte", meaning: "upturn / uptick", example: { jp: "Hubo un repunte de casos en el mes de enero.", en: "There was an upturn in cases in January." }, accept: ["upturn", "uptick", "rise", "rebound"], hint: "A small rise after a fall — the word a report uses when it is too early to call it a recovery." },
        { id: "es-u113l1-declive", type: "vocab", front: "el declive", reading: "eldeclive", meaning: "decline", example: { jp: "La prensa lleva años en declive.", en: "The press has been in decline for years." }, accept: ["decline", "downturn", "slide", "waning"], hint: "En declive is the fixed phrase. Slow and structural, unlike un desplome — a decline is something you can watch happening." },
        { id: "es-u113l1-merma", type: "vocab", front: "la merma", reading: "lamerma", meaning: "reduction / shrinkage", example: { jp: "La merma del agua obligó a cambiar la normativa.", en: "The reduction in water forced a change in the regulations." }, accept: ["reduction", "shrinkage", "loss", "decrease"], hint: "A loss of quantity from something you had — merma is what is missing, not the falling. Sin merma de = without any loss of." },
        { id: "es-u113l1-estancamiento", type: "vocab", front: "el estancamiento", reading: "elestancamiento", meaning: "stagnation / standstill", example: { jp: "Después del auge llegó un largo estancamiento.", en: "After the boom came a long stagnation." }, accept: ["stagnation", "standstill", "stalemate", "deadlock"], hint: "Neither up nor down, and going nowhere. From estancar — the image is water that has stopped moving." },
        { id: "es-u113l1-desplome", type: "vocab", front: "el desplome", reading: "eldesplome", meaning: "collapse / slump", example: { jp: "El desplome del precio llegó sin aviso.", en: "The collapse in price came without warning." }, accept: ["collapse", "slump", "crash", "plunge"], hint: "Sudden and steep, where el declive is slow. Literally a building coming down — from plomo, lead, falling straight." },
      ],
    },
    {
      id: "es-u113l2",
      unit: 113,
      lesson: 2,
      title: "Alcance y magnitud",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how big something is, how far it reaches, where its cut-off sits and how much money is involved.",
      items: [
        { id: "es-u113l2-tramo", type: "vocab", front: "el tramo", reading: "eltramo", meaning: "band / stretch / bracket", example: { jp: "El primer tramo de la ayuda se paga en enero.", en: "The first tranche of the support is paid in January." }, accept: ["band", "bracket", "stretch", "tranche"], hint: "One measured section of a longer thing — of a road, of a payment, of a scale. Un tramo de renta is a tax band." },
        { id: "es-u113l2-cuantia", type: "vocab", front: "la cuantía", reading: "lacuantia", meaning: "amount / sum", example: { jp: "El escrito no dice la cuantía de la sanción.", en: "The document does not state the amount of the penalty." }, accept: ["amount", "sum", "quantity", "value"], hint: "The formal how much, used of money and of claims. From cuánto; la cuantía de la ayuda is what a form asks for." },
        { id: "es-u113l2-tope", type: "vocab", front: "el tope", reading: "eltope", meaning: "cap / upper limit", example: { jp: "La ayuda tiene un tope de diez euros al día.", en: "The support has a cap of ten euros a day." }, accept: ["cap", "upper limit", "ceiling", "maximum"], hint: "The most you can get or spend. El umbral is the floor you must cross; el tope is the ceiling you cannot pass. Fecha tope = deadline." },
        { id: "es-u113l2-amplitud", type: "vocab", front: "la amplitud", reading: "laamplitud", meaning: "the breadth", example: { jp: "La amplitud del problema sorprendió a todos.", en: "The breadth of the problem surprised everyone." }, accept: ["the breadth", "the scope", "the extent", "the range"], hint: "How wide something spreads. Amplio is the adjective; con amplitud de miras = broad-minded." },
        { id: "es-u113l2-calado", type: "vocab", front: "el calado", reading: "elcalado", meaning: "the depth / significance", example: { jp: "Es una reforma de poco calado y mucho ruido.", en: "It is a reform of little depth and much noise." }, accept: ["the depth", "the significance", "the weight", "the import"], hint: "De gran calado = far-reaching. From how deep a ship sits in the water." },
        { id: "es-u113l2-cota", type: "vocab", front: "la cota", reading: "lacota", meaning: "the high-water mark", example: { jp: "El paro superó la cota más alta de los últimos años.", en: "Unemployment passed the highest level of recent years." }, accept: ["the level", "the mark", "the height", "the reading"], hint: "A measured height on a scale: alcanzar cotas altas. From surveying, where it is an altitude on a map." },
      ],
    },
    {
      id: "es-u113l3",
      unit: 113,
      lesson: 3,
      title: "Diferencia y desfase",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a gap between two things, and name the kind or character of a thing rather than its size.",
      items: [
        { id: "es-u113l3-divergencia", type: "vocab", front: "la divergencia", reading: "ladivergencia", meaning: "divergence", example: { jp: "Hay una divergencia clara entre los dos informes.", en: "There is a clear divergence between the two reports." }, accept: ["divergence", "difference", "discrepancy", "disagreement"], hint: "Two things moving apart from a shared starting point. Of views as well as of numbers — divergencias entre los partidos." },
        { id: "es-u113l3-desfase", type: "vocab", front: "el desfase", reading: "eldesfase", meaning: "mismatch / lag", example: { jp: "Hay un desfase entre lo que dice la ley y lo que pasa.", en: "There is a mismatch between what the law says and what happens." }, accept: ["mismatch", "lag", "gap", "discrepancy"], hint: "Two things out of step — in time or in kind. From fase: they are in different phases." },
        { id: "es-u113l3-desglose", type: "vocab", front: "el desglose", reading: "eldesglose", meaning: "breakdown (itemised)", example: { jp: "Pidió un desglose de todos los gastos.", en: "She asked for a breakdown of all the expenses." }, accept: ["breakdown", "itemisation", "itemization", "detailed list"], hint: "Splitting one total into its parts so each can be seen. The verb is desglosar, and a form usually asks for the noun." },
        { id: "es-u113l3-cariz", type: "vocab", front: "el cariz", reading: "elcariz", meaning: "look / turn (that things take)", example: { jp: "El asunto tomó un cariz muy distinto.", en: "The matter took on a very different look." }, accept: ["look", "turn", "aspect", "complexion"], hint: "Tomar un cariz is the only pattern you really need: it names the direction a situation appears to be going." },
        { id: "es-u113l3-indole", type: "vocab", front: "la índole", reading: "laindole", meaning: "nature / kind", example: { jp: "Son problemas de otra índole.", en: "They are problems of a different kind." }, accept: ["nature", "kind", "sort", "character"], hint: "De esta índole, de otra índole — it sorts things by type rather than by size. Feminine despite ending in e." },
      ],
    },
    {
      id: "es-u113l4",
      unit: 113,
      lesson: 4,
      title: "Trayectoria y consecuencia",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the path something has taken, the point where it turned, and what follows from it.",
      items: [
        { id: "es-u113l4-culminacion", type: "vocab", front: "la culminación", reading: "laculminacion", meaning: "culmination", example: { jp: "El acuerdo fue la culminación de muchos años de trabajo.", en: "The agreement was the culmination of many years of work." }, accept: ["culmination", "high point", "climax", "peak"], hint: "The end point a whole process was heading towards. El auge is a high level; la culminación is an arrival." },
        { id: "es-u113l4-corolario", type: "vocab", front: "el corolario", reading: "elcorolario", meaning: "corollary", example: { jp: "El corolario de esa premisa no gusta a nadie.", en: "The corollary of that premise pleases nobody." }, accept: ["corollary", "consequence", "upshot", "logical consequence"], hint: "What follows necessarily from something already established, without new argument. Como corolario opens the sentence that draws it." },
        { id: "es-u113l4-inflexion", type: "vocab", front: "la inflexión", reading: "lainflexion", meaning: "turning point", example: { jp: "Aquel año fue un punto de inflexión para la prensa.", en: "That year was a turning point for the press." }, accept: ["turning point", "inflection", "inflexion", "shift"], hint: "Almost always inside un punto de inflexión, where a curve changes direction. It also means the rise and fall of a voice." },
        { id: "es-u113l4-vuelco", type: "vocab", front: "el vuelco", reading: "elvuelco", meaning: "complete reversal", example: { jp: "La resolución dio un vuelco a todo el caso.", en: "The ruling completely turned the case around." }, accept: ["reversal", "turnaround", "complete change", "upset"], hint: "Dar un vuelco = to turn something upside down. Sudden and total, where una inflexión only changes the direction of travel." },
        { id: "es-u113l4-vertiente", type: "vocab", front: "la vertiente", reading: "lavertiente", meaning: "aspect / side (of a question)", example: { jp: "El asunto tiene una vertiente política que nadie quiere ver.", en: "The matter has a political side nobody wants to see." }, accept: ["aspect", "side", "dimension", "facet"], hint: "One face of a many-sided question. Literally a slope of a mountain — each vertiente looks a different way." },
      ],
    },
  ],
};
