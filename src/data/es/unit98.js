// ES Unit 98 — Risk and uncertainty (slot: risk) — B2
// Authored: block 1, group 1. 4 lessons x 6 cards.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it.
//   OWNS: Exposure and its management — likelihood as a quantity, forecast,
//         contingency, insurance, precaution.
//   NOT:  Sounding unsure (u54) and hypothetical clauses (u106). This unit is nouns and
//         verbs of risk, not the grammar of maybe.
export const ES_UNIT98 = {
  id: "es-u98",
  lang: "es",
  title: "El riesgo y la incertidumbre",
  order: 98,
  stage: "b2",
  lessons: [
    {
      id: "es-u98l1",
      unit: 98,
      lesson: 1,
      title: "La incertidumbre",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how exposed something is: name uncertainty and exposure, call an outcome random or volatile, and say who is prone to a problem.",
      items: [
        { id: "es-u98l1-laincertidumbre", type: "vocab", front: "la incertidumbre", reading: "laincertidumbre", meaning: "uncertainty", example: { jp: "La incertidumbre sobre el futuro frenó la inversión.", en: "Uncertainty about the future held back investment." }, accept: ["uncertainty", "the uncertainty", "doubt"], hint: "The state of not knowing what will happen. The opposite of la certeza." },
        { id: "es-u98l1-laexposicion", type: "vocab", front: "la exposición", reading: "laexposicion", meaning: "the exposure", example: { jp: "El banco redujo su exposición a la deuda del país.", en: "The bank reduced its exposure to the country's debt." }, accept: ["the exposure", "the risk exposure", "the exhibition"], hint: "How much you stand to lose if things go wrong. The same word means an exhibition." },
        { id: "es-u98l1-aleatorio", type: "vocab", front: "aleatorio", reading: "aleatorio", meaning: "random", example: { jp: "Eligieron los casos de forma aleatoria.", en: "They chose the cases at random." }, accept: ["random", "chance", "arbitrary"], hint: "De forma aleatoria = at random. Technical, unlike casual which suggests coincidence." },
        { id: "es-u98l1-lavolatilidad", type: "vocab", front: "la volatilidad", reading: "lavolatilidad", meaning: "volatility", example: { jp: "La volatilidad del mercado asustó a los pequeños ahorradores.", en: "The volatility of the market frightened small savers." }, accept: ["volatility", "the volatility", "instability"], hint: "Volátil is the adjective. Of prices and moods alike: swinging fast and unpredictably." },
        { id: "es-u98l1-lafluctuacion", type: "vocab", front: "la fluctuación", reading: "lafluctuacion", meaning: "the fluctuation", example: { jp: "Las fluctuaciones del precio complican cualquier plan.", en: "Fluctuations in the price complicate any plan." }, accept: ["the fluctuation", "the swing", "the variation"], hint: "Usually plural. Fluctuar is the verb: los precios fluctúan." },
        { id: "es-u98l1-propenso", type: "vocab", front: "propenso", reading: "propenso", meaning: "prone / liable to", example: { jp: "La zona es propensa a las tormentas en esta época del año.", en: "The area is prone to storms at this time of year." }, accept: ["prone", "liable to", "susceptible", "given to"], hint: "propenso A algo. Of places, of materials and of people: propenso a enfadarse." },
      ],
    },
    {
      id: "es-u98l2",
      unit: 98,
      lesson: 2,
      title: "Prever lo que viene",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about looking ahead: give a forecast, refer to a projection and a scenario, get ahead of a problem, and say a threat is close or lurking.",
      items: [
        { id: "es-u98l2-elpronostico", type: "vocab", front: "el pronóstico", reading: "elpronostico", meaning: "the forecast", example: { jp: "El pronóstico para el próximo año es poco alentador.", en: "The forecast for next year is not very encouraging." }, accept: ["the forecast", "the prediction", "the prognosis"], hint: "Weather, economics and medicine all use it. Pronosticar is the verb." },
        { id: "es-u98l2-laprevision", type: "vocab", front: "la previsión", reading: "laprevision", meaning: "the projection / foresight", example: { jp: "Las previsiones de gasto se quedaron muy cortas.", en: "The spending projections fell well short." }, accept: ["the projection", "the forecast", "foresight", "the estimate"], hint: "Plural for figures projected forward; singular for the quality of thinking ahead." },
        { id: "es-u98l2-anticiparse", type: "vocab", front: "anticiparse", reading: "anticiparse", meaning: "to get ahead of / anticipate", example: { jp: "Se anticiparon al problema y no perdieron nada.", en: "They got ahead of the problem and lost nothing." }, accept: ["to get ahead of", "to anticipate", "to pre-empt"], hint: "anticiparse A algo. Acting before it arrives, not merely expecting it." },
        { id: "es-u98l2-elescenario", type: "vocab", front: "el escenario", reading: "elescenario", meaning: "the scenario", example: { jp: "Trabajan con tres escenarios, del mejor al peor.", en: "They are working with three scenarios, from best to worst." }, accept: ["the scenario", "the outlook", "the stage"], hint: "A possible future you plan against. Literally a stage in a theatre." },
        { id: "es-u98l2-inminente", type: "vocab", front: "inminente", reading: "inminente", meaning: "imminent", example: { jp: "El cierre de la fábrica parecía inminente.", en: "The closure of the factory seemed imminent." }, accept: ["imminent", "impending", "looming"], hint: "About to happen, and usually about something unwelcome." },
        { id: "es-u98l2-acechar", type: "vocab", front: "acechar", reading: "acechar", meaning: "to lurk / loom over", example: { jp: "La misma amenaza acecha a todas las ciudades de la costa.", en: "The same threat looms over every city on the coast." }, accept: ["to lurk", "to loom over", "to stalk", "to lie in wait"], hint: "A danger waiting quietly for its moment. Al acecho = lying in wait." },
      ],
    },
    {
      id: "es-u98l3",
      unit: 98,
      lesson: 3,
      title: "La cautela y la precaución",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe managing a danger: act with caution, take a precaution, build in a safeguard, plan for a contingency, and say a measure reduced or eased the damage.",
      items: [
        { id: "es-u98l3-lacautela", type: "vocab", front: "la cautela", reading: "lacautela", meaning: "caution", example: { jp: "Los datos deben leerse con mucha cautela.", en: "The figures should be read with great caution." }, accept: ["caution", "the caution", "wariness"], hint: "Con cautela = cautiously. About how you proceed, not about how you feel." },
        { id: "es-u98l3-lasalvaguarda", type: "vocab", front: "la salvaguarda", reading: "lasalvaguarda", meaning: "the safeguard clause", example: { jp: "El contrato incluye una salvaguarda por si cambia la ley.", en: "The contract includes a safeguard in case the law changes." }, accept: ["the safeguard", "the protection", "the safety net"], hint: "The clause or measure written in so a foreseeable harm cannot land. Narrower than una garantía, which is the promise itself. Salvaguardar is the verb." },
        { id: "es-u98l3-laprecaucion", type: "vocab", front: "la precaución", reading: "laprecaucion", meaning: "the precaution", example: { jp: "El equipo trabajó con todas las precauciones posibles.", en: "The team worked with every possible precaution." }, accept: ["the precaution", "the safeguard", "care"], hint: "Tomar precauciones = to take precautions. The concrete step; la cautela is the attitude." },
        { id: "es-u98l3-lacontingencia", type: "vocab", front: "la contingencia", reading: "lacontingencia", meaning: "the contingency", example: { jp: "El contrato prevé varias contingencias poco probables.", en: "The contract provides for several unlikely contingencies." }, accept: ["the contingency", "the eventuality", "the what-if"], hint: "Un plan de contingencia is a backup plan. Formal, common in contracts and safety plans." },
        { id: "es-u98l3-mitigar", type: "vocab", front: "mitigar", reading: "mitigar", meaning: "to mitigate", example: { jp: "Las ayudas mitigaron el efecto de la sequía.", en: "The subsidies mitigated the effect of the drought." }, accept: ["to mitigate", "to reduce", "to lessen", "to soften"], hint: "To make a harm smaller without removing it. La mitigación is the noun." },
        { id: "es-u98l3-paliar", type: "vocab", front: "paliar", reading: "paliar", meaning: "to alleviate", example: { jp: "La medida solo palía el problema, no lo resuelve.", en: "The measure only alleviates the problem, it does not solve it." }, accept: ["to alleviate", "to ease", "to relieve", "to palliate"], hint: "Close to mitigar, but it carries the sense of treating the symptom instead of the cause." },
      ],
    },
    {
      id: "es-u98l4",
      unit: 98,
      lesson: 4,
      title: "El seguro y el siniestro",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle cover and loss: name a policy and a payout, refer to an incident, a mishap and a disaster, and say a firm shielded itself.",
      items: [
        { id: "es-u98l4-lapoliza", type: "vocab", front: "la póliza", reading: "lapoliza", meaning: "the policy (insurance)", example: { jp: "La póliza no paga los daños por tormenta.", en: "The policy does not pay for storm damage." }, accept: ["the policy", "the insurance policy"], hint: "The insurance contract itself. Not a political policy, which is la política." },
        { id: "es-u98l4-laindemnizacion", type: "vocab", front: "la indemnización", reading: "laindemnizacion", meaning: "the compensation / payout", example: { jp: "La empresa pagó una indemnización meses después del accidente.", en: "The company paid compensation months after the accident." }, accept: ["the compensation", "the payout", "the settlement", "damages"], hint: "Indemnizar is the verb. Also the payment on losing a job: la indemnización por despido." },
        { id: "es-u98l4-elsiniestro", type: "vocab", front: "el siniestro", reading: "elsiniestro", meaning: "the incident / claim event", example: { jp: "Hay que declarar el siniestro en un plazo de siete días.", en: "The incident must be reported within seven days." }, accept: ["the incident", "the accident", "the claim event", "the loss"], hint: "The insurer's word for the event that triggers a claim. As an adjective it means sinister." },
        { id: "es-u98l4-elpercance", type: "vocab", front: "el percance", reading: "elpercance", meaning: "the mishap", example: { jp: "Llegaron tarde por un percance en la carretera.", en: "They arrived late because of a mishap on the road." }, accept: ["the mishap", "the setback", "the minor accident"], hint: "Small and annoying rather than serious. A siniestro costs money; a percance costs an afternoon." },
        { id: "es-u98l4-lacatastrofe", type: "vocab", front: "la catástrofe", reading: "lacatastrofe", meaning: "the catastrophe", example: { jp: "Nadie estaba preparado para una catástrofe de esa escala.", en: "Nobody was prepared for a catastrophe on that scale." }, accept: ["the catastrophe", "the disaster"], hint: "Catastrófico is the adjective. Used of natural disasters and, loosely, of very bad results." },
        { id: "es-u98l4-blindar", type: "vocab", front: "blindar", reading: "blindar", meaning: "to shield", example: { jp: "La empresa blindó sus contratos frente a cualquier cambio de ley.", en: "The company shielded its contracts against any change in the law." }, accept: ["to shield", "to protect", "to armour", "to safeguard"], hint: "Literally to armour-plate. Figuratively, to make something legally or financially untouchable." },
      ],
    },
  ],
};
