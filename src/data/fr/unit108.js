// FR Unit 108 — L'environnement et les enjeux planétaires (slot: environment-global) — B2
// B1 (Unit 72) already taught the environment at intermediate level: la biodiversité,
// l'écosystème, le réchauffement, durable, la sécheresse, l'inondation, le tri, la ressource.
// This B2 unit goes one register level above: climate/ecology as a SYSTEM and a matter of
// GOVERNANCE and global stakes — la gouvernance, un enjeu planétaire, la neutralité carbone,
// un accord contraignant, le dérèglement systémique, le basculement, la transition écologique,
// l'épuisement des ressources, la sobriété, la souveraineté. The voice is the op-ed / lecture /
// official-letter register, not beginner vocabulary.
// Every front checked against the 2,168 live fr fronts + block1 (u95-107). No lexeme re-teaching.
export const FR_UNIT108 = {
  id: "fr-u108",
  lang: "fr",
  title: "L'environnement et les enjeux planétaires",
  order: 108,
  stage: "b2",
  lessons: [
    {
      id: "fr-u108l1",
      unit: 108,
      lesson: 1,
      title: "Climate governance",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss climate policy and binding international commitments in formal terms.",
      items: [
        { id: "fr-u108l1-concertation", type: "vocab", front: "la concertation", reading: "laconcertation", meaning: "consultation, joint dialogue", example: { jp: "La concertation entre les pays avance lentement, mais elle seule permet d'éviter une crise ouverte.", en: "Consultation between the countries advances slowly, but it alone makes it possible to avoid an open crisis." }, accept: ["consultation", "joint consultation", "dialogue", "concertation", "joint decision-making"], hint: "From se concerter (to confer together): the formal joint-consultation process — above a mere débat. la concertation sociale." },
        { id: "fr-u108l1-enjeuplanetaire", type: "vocab", front: "un enjeu planétaire", reading: "unenjeuplanetaire", meaning: "a global issue at stake", example: { jp: "Le climat n'est plus un simple débat national ; c'est devenu un enjeu planétaire.", en: "The climate is no longer a mere national debate; it has become a planetary issue." }, accept: ["a global issue", "a planetary issue", "a global stake", "a planetary stake", "a global concern"], hint: "un enjeu = what is at stake. planétaire lifts it to the scale of the whole planet — above national, even above mondial." },
        { id: "fr-u108l1-contraignant", type: "vocab", front: "contraignant", reading: "contraignant", meaning: "binding, constraining", example: { jp: "Une loi contraignante oblige les entreprises à changer, mais beaucoup de pays refusent d'en adopter une.", en: "A binding law forces companies to change, but many countries refuse to adopt one." }, accept: ["binding", "constraining", "restrictive"], hint: "From contraindre / la contrainte. Binding = you cannot opt out: un accord contraignant is one with real legal force." },
        { id: "fr-u108l1-reguler", type: "vocab", front: "réguler", reading: "reguler", meaning: "to regulate", example: { jp: "Les États cherchent à réguler le marché, mais chaque pays protège d'abord son économie.", en: "States are trying to regulate the market, but each country protects its economy first." }, accept: ["to regulate", "regulate", "to bring under control", "to keep in check"], hint: "To bring a market or flow under rules and control — the State's action; broader than régler (to settle/adjust)." },
        { id: "fr-u108l1-multilateral", type: "vocab", front: "multilatéral", reading: "multilateral", meaning: "multilateral", example: { jp: "Le climat impose un effort multilatéral, car un seul pays ne peut rien changer.", en: "The climate demands a multilateral effort, because a single country can change nothing." }, drill: { jp: "Le climat impose un effort multilatéral", en: "The climate demands a multilateral effort" }, accept: ["multilateral"], hint: "Involving many states together (bi- = two, multi- = many). The opposite of a country acting unilaterally." },
        { id: "fr-u108l1-neutralitecarbone", type: "vocab", front: "la neutralité carbone", reading: "laneutralitecarbone", meaning: "carbon neutrality", example: { jp: "Beaucoup de pays promettent la neutralité carbone, mais leur économie change trop lentement.", en: "Many countries promise carbon neutrality, but their economies change too slowly." }, drill: { jp: "Beaucoup de pays promettent la neutralité carbone", en: "Many countries promise carbon neutrality" }, accept: ["carbon neutrality", "carbon-neutral", "net zero", "net-zero"], hint: "'Net zero': releasing only as much carbon as you remove. la neutralité (from neutre) + carbone as a fixed policy target." },
      ],
    },
    {
      id: "fr-u108l2",
      unit: 108,
      lesson: 2,
      title: "A system under strain",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe climate change as a systemic, escalating process rather than isolated events.",
      items: [
        { id: "fr-u108l2-dereglement", type: "vocab", front: "le dérèglement", reading: "ledereglement", meaning: "the disruption, breakdown", example: { jp: "Ce n'est plus un simple changement, mais un dérèglement de tout le système.", en: "It is no longer a simple change, but a breakdown of the whole system." }, drill: { jp: "Le dérèglement touche tout le système", en: "The disruption affects the whole system" }, accept: ["the disruption", "disruption", "the breakdown", "breakdown", "the disturbance"], hint: "dé- (un-) + règle: a system knocked out of its normal rules. le dérèglement climatique is the standard French term for climate change-as-breakdown." },
        { id: "fr-u108l2-systemique", type: "vocab", front: "systémique", reading: "systemique", meaning: "systemic", example: { jp: "La crise n'est pas isolée mais systémique : quand une partie du monde change, tout le reste change aussi.", en: "The crisis is not isolated but systemic: when one part of the world changes, all the rest changes too." }, accept: ["systemic"], hint: "Affecting a whole system, not one part. From le système. A systemic risk propagates through the entire structure." },
        { id: "fr-u108l2-finitude", type: "vocab", front: "la finitude", reading: "lafinitude", meaning: "the finiteness", example: { jp: "La finitude des ressources devient évidente, si bien qu'il faut changer notre façon de produire.", en: "The finiteness of resources is becoming obvious, so we must change the way we produce." }, accept: ["the finiteness", "finiteness", "finitude", "the limited nature", "the boundedness"], hint: "From fini (finite): the fact that resources are not endless — the opposite of l'infini. Feminine." },
        { id: "fr-u108l2-irreversible", type: "vocab", front: "irréversible", reading: "irreversible", meaning: "irreversible", example: { jp: "Si l'on dépasse ce niveau, le changement devient irréversible : plus rien ne peut l'arrêter.", en: "If we cross this level, the change becomes irreversible: nothing can stop it any more." }, drill: { jp: "Le changement devient vite irréversible", en: "The change quickly becomes irreversible" }, accept: ["irreversible"], hint: "What cannot be undone. Central to climate risk: past a threshold, some damage never comes back." },
        { id: "fr-u108l2-rarefaction", type: "vocab", front: "la raréfaction", reading: "lararefaction", meaning: "the growing scarcity", example: { jp: "La raréfaction de l'eau touche déjà certaines régions, si bien que les tensions augmentent.", en: "The growing scarcity of water already affects some regions, so tensions are rising." }, accept: ["the growing scarcity", "the increasing scarcity", "growing scarcity", "the depletion", "the dwindling"], hint: "From rare: the process of becoming ever scarcer. la raréfaction de l'eau, des ressources. Feminine." },
        { id: "fr-u108l2-basculement", type: "vocab", front: "le basculement", reading: "lebasculement", meaning: "the tipping, the shift", example: { jp: "L'équilibre résiste longtemps, mais après un certain seuil, tout un écosystème connaît un basculement soudain.", en: "The balance holds for a long time, but past a certain threshold, an entire ecosystem undergoes a sudden shift." }, accept: ["the tipping point", "tipping point", "the tipping", "the shift", "the swing"], hint: "le point de basculement = tipping point. The moment a system flips from one state to another and won't flip back." },
      ],
    },
    {
      id: "fr-u108l3",
      unit: 108,
      lesson: 3,
      title: "Levers of the transition",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about concrete measures to cut emissions and shift to cleaner energy.",
      items: [
        { id: "fr-u108l3-emissions", type: "vocab", front: "les émissions", reading: "lesemissions", meaning: "emissions", example: { jp: "Les entreprises sont obligées de réduire leurs émissions afin de protéger l'air et le climat.", en: "Companies are required to reduce their emissions in order to protect the air and the climate." }, accept: ["emissions", "the emissions"], hint: "Short for les émissions de gaz — the greenhouse gases released. réduire / baisser ses émissions." },
        { id: "fr-u108l3-transitioneco", type: "vocab", front: "la transition écologique", reading: "latransitionecologique", meaning: "the ecological transition", example: { jp: "La transition écologique exige des efforts, car elle oblige à changer toute l'économie.", en: "The ecological transition demands effort, because it forces a change to the whole economy." }, accept: ["the ecological transition", "the green transition", "the ecological shift"], hint: "The shift from a fossil economy to a sustainable one. la transition + écologique (from l'écologie)." },
        { id: "fr-u108l3-energiesfossiles", type: "vocab", front: "les énergies fossiles", reading: "lesenergiesfossiles", meaning: "fossil fuels", example: { jp: "Nous dépendons encore trop des énergies fossiles, si bien que les émissions augmentent d'année en année.", en: "We still depend too much on fossil fuels, so emissions rise year after year." }, accept: ["fossil fuels", "fossil energy", "fossil energies"], hint: "Coal, oil and gas — carbon locked underground. Opposed to les énergies renouvelables (renewables)." },
        { id: "fr-u108l3-taxecarbone", type: "vocab", front: "la taxe carbone", reading: "lataxecarbone", meaning: "carbon tax", example: { jp: "La taxe carbone pousse les entreprises à réduire leurs émissions, de sorte qu'elles changent enfin.", en: "The carbon tax pushes companies to cut their emissions, so that they finally change." }, accept: ["carbon tax", "the carbon tax", "a carbon tax"], hint: "A price put on emissions so polluters pay the real cost — making clean choices cheaper by comparison." },
        { id: "fr-u108l3-decarbonation", type: "vocab", front: "la décarbonation", reading: "ladecarbonation", meaning: "decarbonization", example: { jp: "La décarbonation de l'économie coûte cher, mais elle reste le seul moyen de protéger le climat.", en: "Decarbonizing the economy is expensive, but it remains the only way to protect the climate." }, accept: ["decarbonization", "decarbonisation", "the shift away from carbon", "carbon phase-out"], hint: "dé- (removing) + carbone: cutting carbon out of the economy — the engine of la transition écologique. Feminine." },
        { id: "fr-u108l3-sobriete", type: "vocab", front: "la sobriété", reading: "lasobriete", meaning: "restraint, moderation", example: { jp: "La sobriété, c'est réduire nos besoins afin de moins peser sur la planète.", en: "Restraint means reducing our needs in order to weigh less on the planet." }, accept: ["restraint", "moderation", "frugality", "sobriety", "temperance"], hint: "Voluntarily using less. la sobriété énergétique — energy moderation — is now a policy goal, not just a personal virtue." },
      ],
    },
    {
      id: "fr-u108l4",
      unit: 108,
      lesson: 4,
      title: "A stake for humanity",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Frame the climate crisis as a shared responsibility across countries and generations.",
      items: [
        { id: "fr-u108l4-empreintecarbone", type: "vocab", front: "l'empreinte carbone", reading: "lempreintecarbone", meaning: "the carbon footprint", example: { jp: "Un simple voyage en avion augmente déjà notre empreinte carbone, même si on ne la voit pas.", en: "A single plane trip already increases our carbon footprint, even if we don't see it." }, accept: ["the carbon footprint", "carbon footprint", "a carbon footprint"], hint: "l'empreinte = footprint/imprint (feminine). The total carbon your activity releases. réduire son empreinte carbone." },
        { id: "fr-u108l4-epuisement", type: "vocab", front: "l'épuisement", reading: "lepuisement", meaning: "the depletion, exhaustion", example: { jp: "L'épuisement des ressources touche d'abord les pays pauvres, car ils dépendent surtout de la terre.", en: "The depletion of resources hits the poorest countries first, because they depend above all on the land." }, accept: ["the depletion", "depletion", "the exhaustion", "exhaustion", "the running out"], hint: "Masculine. From épuiser (to use up / exhaust). l'épuisement des ressources — the running-out of resources." },
        { id: "fr-u108l4-generationsfutures", type: "vocab", front: "les générations futures", reading: "lesgenerationsfutures", meaning: "future generations", example: { jp: "Nous empruntons la planète aux générations futures, et c'est donc à nous de la protéger.", en: "We borrow the planet from future generations, and so it is up to us to protect it." }, accept: ["future generations", "the future generations", "coming generations"], hint: "The people not yet born who inherit our choices. Central to climate ethics: la responsabilité envers les générations futures." },
        { id: "fr-u108l4-patrimoinecommun", type: "vocab", front: "le patrimoine commun", reading: "lepatrimoinecommun", meaning: "the common heritage, the commons", example: { jp: "Le climat est un patrimoine commun : il touche chaque pays et ne connaît aucune frontière.", en: "The climate is a common heritage: it affects every country and knows no border." }, accept: ["the common heritage", "the commons", "shared heritage", "the common good", "common heritage"], hint: "le patrimoine = heritage/estate. le patrimoine commun de l'humanité — a shared inheritance no single country owns." },
        { id: "fr-u108l4-mondialisation", type: "vocab", front: "la mondialisation", reading: "lamondialisation", meaning: "globalization", example: { jp: "Avec la mondialisation, les économies dépendent les unes des autres, si bien qu'une crise touche vite tous les pays.", en: "With globalization, economies depend on one another, so a crisis quickly affects every country." }, accept: ["globalization", "globalisation"], hint: "From le monde. The tightening of world trade and links — which spreads both prosperity and crises." },
        { id: "fr-u108l4-interdependance", type: "vocab", front: "l'interdépendance", reading: "linterdependance", meaning: "interdependence", example: { jp: "L'interdépendance des économies est telle qu'une crise dans un pays fragilise vite les autres.", en: "The interdependence of economies is such that a crisis in one country quickly weakens the others." }, accept: ["interdependence", "mutual dependence", "interdependency", "the interdependence"], hint: "inter- (between) + dépendance: nations depending on one another — no country stands alone. Feminine." },
      ],
    },
  ],
};
