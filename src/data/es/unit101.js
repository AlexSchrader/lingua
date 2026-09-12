// ES Unit 101 — La gobernanza ambiental ("Environmental governance") — B2 (slot: environment-gov)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: this unit owns the POLICY
// layer only. Treaties and summits (l1), regulation and enforcement (l2), emissions
// accounting and the energy transition (l3), sustainability as a political object (l4).
// Landscape, wildlife and weather stay with u26/u65/u120 and appear here only as
// already-taught example vocabulary, never re-taught.
// Conventions: front = real orthography, reading = its ASCII fold, nouns carry their
// article, accept[] on every card, examples use only vocab taught at or before u101.
export const ES_UNIT101 = {
  id: "es-u101",
  lang: "es",
  title: "La gobernanza ambiental",
  order: 101,
  stage: "b2",
  lessons: [
    {
      id: "es-u101l1",
      unit: 101,
      lesson: 1,
      title: "Cumbres, convenios y protocolos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how countries commit to environmental action: summits, conventions, protocols, and what makes a commitment binding.",
      items: [
        { id: "es-u101l1-cumbre", type: "vocab", front: "la cumbre", reading: "lacumbre", meaning: "summit (meeting)", example: { jp: "La cumbre sobre el clima terminó sin un acuerdo claro.", en: "The climate summit ended without a clear agreement." }, drill: { jp: "La cumbre terminó sin acuerdo", en: "The summit ended without agreement" }, accept: ["summit", "summit meeting", "climate summit"], hint: "The top-level meeting of heads of state. It is also a mountain top; at B2 the political sense is the usual one — la cumbre del clima." },
        { id: "es-u101l1-convenio", type: "vocab", front: "el convenio", reading: "elconvenio", meaning: "convention / formal agreement", example: { jp: "Los dos países ya tienen un convenio sobre el agua.", en: "The two countries already have a convention on water." }, accept: ["convention", "agreement", "accord"], hint: "More institutional than el acuerdo (u51): a convenio is signed between states, or between a company and its workers." },
        { id: "es-u101l1-protocolo", type: "vocab", front: "el protocolo", reading: "elprotocolo", meaning: "protocol", example: { jp: "El protocolo obliga a cada país a controlar la contaminación.", en: "The protocol obliges each country to control pollution." }, drill: { jp: "El protocolo obliga a todos", en: "The protocol binds everyone" }, accept: ["protocol"], hint: "A treaty that adds detail to an earlier one. Also the rules of formal procedure: el protocolo de la reunión." },
        { id: "es-u101l1-ratificar", type: "vocab", front: "ratificar", reading: "ratificar", meaning: "to ratify", example: { jp: "El gobierno va a ratificar el acuerdo en junio.", en: "The government is going to ratify the agreement in June." }, accept: ["to ratify", "ratify", "to confirm formally"], hint: "The step after signing: the state's own institutions make the commitment real. Un acuerdo no ratificado no obliga a nadie." },
        { id: "es-u101l1-suscribir", type: "vocab", front: "suscribir", reading: "suscribir", meaning: "to sign up to / to endorse", example: { jp: "Muchas empresas quieren suscribir el convenio.", en: "Many companies want to sign up to the convention." }, accept: ["to sign up to", "to endorse", "to subscribe to", "endorse"], hint: "To put your name to something someone else wrote. Also used of opinions: suscribo cada palabra = I endorse every word." },
        { id: "es-u101l1-vinculante", type: "vocab", front: "vinculante", reading: "vinculante", meaning: "binding", example: { jp: "La decisión de la cumbre no es vinculante para nadie.", en: "The summit's decision is not binding on anyone." }, accept: ["binding", "legally binding"], hint: "The word that decides whether an agreement has teeth. Un acuerdo no vinculante is a promise, not an obligation." },
      ],
    },
    {
      id: "es-u101l2",
      unit: 101,
      lesson: 2,
      title: "Normas, sanciones y control",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about environmental rules and what happens when they are broken: regulations, directives, penalties and official scrutiny.",
      items: [
        { id: "es-u101l2-normativa", type: "vocab", front: "la normativa", reading: "lanormativa", meaning: "regulations (body of rules)", example: { jp: "La nueva normativa exige un control del agua cada mes.", en: "The new regulations require a water check every month." }, accept: ["regulations", "the rules", "regulatory framework"], hint: "The whole body of rules on a subject, not one rule. El reglamento (u61) is a single set of rules; la normativa is everything that applies." },
        { id: "es-u101l2-directiva", type: "vocab", front: "la directiva", reading: "ladirectiva", meaning: "directive", example: { jp: "La nueva directiva obliga a cambiar la ley el año que viene.", en: "The new directive forces the law to change next year." }, accept: ["directive", "eu directive"], hint: "A rule an institution issues to its members, who must then write it into their own law. Also a company board: la junta directiva." },
        { id: "es-u101l2-infraccion", type: "vocab", front: "la infracción", reading: "lainfraccion", meaning: "breach / offence", example: { jp: "Cada infracción tiene una sanción distinta.", en: "Each breach carries a different penalty." }, accept: ["breach", "offence", "offense", "infringement", "violation"], hint: "The act of breaking the rule, as the paperwork names it. Cometer una infracción = to commit an offence." },
        { id: "es-u101l2-penalizar", type: "vocab", front: "penalizar", reading: "penalizar", meaning: "to penalise", example: { jp: "La ley va a penalizar a las empresas que contaminan.", en: "The law is going to penalise companies that pollute." }, accept: ["to penalise", "to penalize", "penalise", "to punish"], hint: "To attach a cost to behaviour you want less of — the mirror image of el incentivo in lesson 4." },
        { id: "es-u101l2-fiscalizar", type: "vocab", front: "fiscalizar", reading: "fiscalizar", meaning: "to scrutinise officially", example: { jp: "El Estado debe fiscalizar a las grandes empresas.", en: "The state must officially scrutinise big companies." }, accept: ["to scrutinise", "to scrutinize", "to oversee", "to audit"], hint: "To check up on someone with the authority to act on what you find. Stronger than controlar: it implies the power to sanction." },
        { id: "es-u101l2-lamoratoria", type: "vocab", front: "la moratoria", reading: "lamoratoria", meaning: "the moratorium", example: { jp: "El gobierno aprobó una moratoria de dos años para esas obras.", en: "The government approved a two-year moratorium on that construction." }, drill: { jp: "La moratoria dura dos años", en: "The moratorium lasts two years" }, accept: ["the moratorium", "the suspension", "the freeze"], hint: "A temporary ban while something is decided. Una moratoria sobre algo." },
      ],
    },
    {
      id: "es-u101l3",
      unit: 101,
      lesson: 3,
      title: "Emisiones y transición",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss emissions and the energy transition: carbon, neutrality, fossil fuel, and the promise to cut what you emit.",
      items: [
        { id: "es-u101l3-emisiones", type: "vocab", front: "las emisiones", reading: "lasemisiones", meaning: "emissions", example: { jp: "Las emisiones de la industria bajaron mucho el año pasado.", en: "Industry emissions fell a lot last year." }, accept: ["emissions", "carbon emissions"], hint: "Almost always plural in this sense. From emitir; the singular una emisión is a broadcast or an issue of shares." },
        { id: "es-u101l3-carbono", type: "vocab", front: "el carbono", reading: "elcarbono", meaning: "carbon", example: { jp: "El carbono que sale de los coches contamina el aire de la ciudad.", en: "The carbon that comes out of cars pollutes the city's air." }, accept: ["carbon"], hint: "The element, and by extension the thing being counted in climate policy. Not el carbón = coal — one letter and an accent apart." },
        { id: "es-u101l3-neutralidad", type: "vocab", front: "la neutralidad", reading: "laneutralidad", meaning: "neutrality", example: { jp: "El país quiere llegar a la neutralidad antes de 2050.", en: "The country wants to reach neutrality before 2050." }, accept: ["neutrality", "carbon neutrality"], hint: "Emitting no more than you remove. The same noun does the political job: la neutralidad de un país en una guerra." },
        { id: "es-u101l3-transicion", type: "vocab", front: "la transición", reading: "latransicion", meaning: "transition", example: { jp: "La transición hacia otras energías será larga y cara.", en: "The transition towards other kinds of energy will be long and expensive." }, accept: ["transition", "shift", "changeover"], hint: "A managed change from one system to another. In Spain la Transición with a capital letter means one in particular: the move to democracy after 1975." },
        { id: "es-u101l3-combustible", type: "vocab", front: "el combustible", reading: "elcombustible", meaning: "fuel", example: { jp: "El precio del combustible subió otra vez este mes.", en: "The price of fuel went up again this month." }, accept: ["fuel", "the fuel"], hint: "Anything burned for energy — petrol, gas, wood. As an adjective it means flammable: un material combustible." },
        { id: "es-u101l3-fosil", type: "vocab", front: "fósil", reading: "fosil", meaning: "fossil (as in fossil fuel)", example: { jp: "Todavía dependemos demasiado de la energía fósil.", en: "We still depend too much on fossil energy." }, accept: ["fossil", "fossil fuel"], hint: "Adjective and noun both: la energía fósil, and un fósil is the thing in the rock. Los combustibles fósiles is the phrase you will meet most." },
      ],
    },
    {
      id: "es-u101l4",
      unit: 101,
      lesson: 4,
      title: "Sostenibilidad y política pública",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about sustainability as public policy: governance, incentives, subsidies, scarcity and the cost of acting late.",
      items: [
        { id: "es-u101l4-sostenibilidad", type: "vocab", front: "la sostenibilidad", reading: "lasostenibilidad", meaning: "sustainability", example: { jp: "La sostenibilidad ya no es solo una idea bonita.", en: "Sustainability is no longer just a nice idea." }, accept: ["sustainability"], hint: "The noun behind sostenible (u65). It names the political goal, which is why it turns up in company reports as often as in science." },
        { id: "es-u101l4-incentivo", type: "vocab", front: "el incentivo", reading: "elincentivo", meaning: "incentive", example: { jp: "El gobierno da un incentivo a quien gaste menos energía.", en: "The government gives an incentive to whoever uses less energy." }, accept: ["incentive", "inducement"], hint: "A reason built into the rules to make people choose something. The positive twin of penalizar in lesson 2." },
        { id: "es-u101l4-subvencion", type: "vocab", front: "la subvención", reading: "lasubvencion", meaning: "subsidy / grant", example: { jp: "La subvención ayuda a las familias con menos dinero.", en: "The subsidy helps families with less money." }, accept: ["subsidy", "grant", "public funding"], hint: "Public money given to make something cheaper or possible. Solicitar una subvención = to apply for a grant." },
        { id: "es-u101l4-escasez", type: "vocab", front: "la escasez", reading: "laescasez", meaning: "scarcity / shortage", example: { jp: "La escasez de agua ya afecta a media región.", en: "Water scarcity already affects half the region." }, accept: ["scarcity", "shortage", "lack"], hint: "Not enough of something, as a lasting condition. From escaso; la escasez de agua is the standard collocation in this register." },
        { id: "es-u101l4-gravamen", type: "vocab", front: "el gravamen", reading: "elgravamen", meaning: "the levy", example: { jp: "Un gravamen sobre el plástico reduciría el consumo.", en: "A levy on plastic would reduce consumption." }, accept: ["the levy", "the charge", "the tax burden", "the duty"], hint: "A charge imposed to change behaviour, the mirror image of un incentivo. Gravar is the verb." },
        { id: "es-u101l4-laresiliencia", type: "vocab", front: "la resiliencia", reading: "laresiliencia", meaning: "resilience", example: { jp: "El plan busca aumentar la resiliencia de las ciudades ante el calor.", en: "The plan seeks to increase cities' resilience to heat." }, accept: ["resilience", "resistance", "adaptability"], hint: "The capacity to take a shock and recover. Standard in climate policy: resiliencia climática." },
      ],
    },
  ],
};
