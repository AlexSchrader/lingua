// ES Unit 112 — Adjetivos de valoración ("Adjectives of appraisal") — B2 (slot: appraisal-adjectives)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: judging evidence and effect.
// What is plain and what is hidden (l1), how firm the evidence is (l2), how credible and
// how weighty a claim is (l3), what an effect does to you (l4).
// Everyday quality adjectives (u75, u81) and the qualities of well-made work (u119) are
// not this unit's: nothing here describes a thing as nice, ugly or well made — every front
// judges how much a piece of evidence or an effect should count.
// Rejected as already taught: evidente (u42), dudoso (u75), decisivo (u81). Rejected as
// the same lexeme: manifiesto (~u51 manifestar), determinante (~u82 la determinación),
// dañino (~u60 el daño), and — dropped in the hand lexeme sweep — cuestionable (~u58
// cuestionar) and discutible (~u77 discutir), both fully transparent -able derivations of
// a taught verb. Replaced by fehaciente and tendencioso.
export const ES_UNIT112 = {
  id: "es-u112",
  lang: "es",
  title: "Adjetivos de valoración",
  order: 112,
  stage: "b2",
  lessons: [
    {
      id: "es-u112l1",
      unit: 112,
      lesson: 1,
      title: "Lo patente y lo latente",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whether something is out in the open, hidden but present, or tells you more than it seems to.",
      items: [
        { id: "es-u112l1-patente", type: "vocab", front: "patente", reading: "patente", meaning: "plain / manifest", example: { jp: "El problema es patente para cualquiera que lea el informe.", en: "The problem is plain to anyone who reads the report." }, accept: ["plain", "manifest", "obvious", "clear"], hint: "Obvious once you look, and slightly more formal than evidente (u42). The noun la patente is a patent — same idea of something made public." },
        { id: "es-u112l1-notorio", type: "vocab", front: "notorio", reading: "notorio", meaning: "well-known / marked", example: { jp: "Hay una diferencia notoria entre los dos escritos.", en: "There is a marked difference between the two documents." }, accept: ["well-known", "marked", "notable", "obvious"], hint: "Two senses: publicly known, and large enough to notice. It does not carry the bad sense that English notorious does." },
        { id: "es-u112l1-palpable", type: "vocab", front: "palpable", reading: "palpable", meaning: "palpable / tangible", example: { jp: "La inquietud de la gente era palpable.", en: "People's unease was palpable." }, accept: ["palpable", "tangible", "unmistakable"], hint: "Literally touchable. Used of atmospheres and feelings you could almost put a hand on — the strongest of this group for something felt." },
        { id: "es-u112l1-latente", type: "vocab", front: "latente", reading: "latente", meaning: "latent / simmering", example: { jp: "El problema sigue latente aunque nadie hable de él.", en: "The problem is still there under the surface even though nobody talks about it." }, accept: ["latent", "simmering", "dormant", "underlying"], hint: "Present but not showing — the exact opposite of patente, one card up. Un conflicto latente is one that has not broken out yet." },
        { id: "es-u112l1-revelador", type: "vocab", front: "revelador", reading: "revelador", meaning: "telling / revealing", example: { jp: "Su respuesta fue muy reveladora.", en: "Her answer was very telling." }, accept: ["telling", "revealing", "illuminating"], hint: "Says a small thing gave a big thing away. Applied to details, silences and answers rather than to whole arguments." },
        { id: "es-u112l1-significativo", type: "vocab", front: "significativo", reading: "significativo", meaning: "significant / telling", example: { jp: "Es significativo que nadie quisiera hablar del acta.", en: "It is significant that nobody was willing to discuss the minutes." }, accept: ["significant", "telling", "meaningful", "notable"], hint: "Worth noticing because of what it implies. In statistics it has a technical sense — significativo means the result is unlikely to be chance." },
      ],
    },
    {
      id: "es-u112l2",
      unit: 112,
      lesson: 2,
      title: "Firme o endeble",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grade a piece of evidence from conclusive down to barely there.",
      items: [
        { id: "es-u112l2-concluyente", type: "vocab", front: "concluyente", reading: "concluyente", meaning: "conclusive", example: { jp: "Los datos no son concluyentes.", en: "The data is not conclusive." }, accept: ["conclusive", "decisive", "definitive"], hint: "Evidence that closes the question. No concluyente is the honest verdict most studies actually reach." },
        { id: "es-u112l2-rotundo", type: "vocab", front: "rotundo", reading: "rotundo", meaning: "categorical / emphatic", example: { jp: "La resolución fue un no rotundo.", en: "The ruling was a flat no." }, accept: ["categorical", "emphatic", "flat", "resounding"], hint: "About the way something is said, not about evidence: un no rotundo, un éxito rotundo. It leaves no room to negotiate." },
        { id: "es-u112l2-contundente", type: "vocab", front: "contundente", reading: "contundente", meaning: "compelling / forceful", example: { jp: "Presentó un informe contundente que nadie pudo rebatir.", en: "He presented a compelling report that nobody could counter." }, accept: ["compelling", "forceful", "overwhelming", "hard-hitting"], hint: "Evidence or an argument that lands like a blow — the word comes from blunt-force injury. Stronger than sólido, less final than concluyente." },
        { id: "es-u112l2-solido", type: "vocab", front: "sólido", reading: "solido", meaning: "solid / well-founded", example: { jp: "La premisa es sólida, pero lo que sigue no.", en: "The premise is solid, but what follows is not." }, accept: ["solid", "well-founded", "sound", "robust"], hint: "The everyday compliment for an argument that holds up. Una base sólida is the standard collocation." },
        { id: "es-u112l2-endeble", type: "vocab", front: "endeble", reading: "endeble", meaning: "flimsy / weak", example: { jp: "Es una hipótesis endeble para un estudio tan largo.", en: "It is a flimsy hypothesis for such a long study." }, accept: ["flimsy", "weak", "feeble", "shaky"], hint: "The direct opposite of sólido. It says the thing will not bear weight — used of arguments, of health and of furniture alike." },
        { id: "es-u112l2-tenue", type: "vocab", front: "tenue", reading: "tenue", meaning: "tenuous / faint", example: { jp: "La relación entre los dos datos es muy tenue.", en: "The link between the two pieces of data is very tenuous." }, accept: ["tenuous", "faint", "slight", "thin"], hint: "So slight it may not be there at all. Same form for both genders, and it works for light and sound as well: una luz tenue." },
      ],
    },
    {
      id: "es-u112l3",
      unit: 112,
      lesson: 3,
      title: "Creíble, probado, de peso",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whether a claim is believable, properly documented or quietly slanted, and whether it matters much or hardly at all.",
      items: [
        { id: "es-u112l3-plausible", type: "vocab", front: "plausible", reading: "plausible", meaning: "plausible", example: { jp: "Es una hipótesis plausible, aunque nadie la haya probado.", en: "It is a plausible hypothesis, though nobody has proved it." }, accept: ["plausible", "credible", "reasonable"], hint: "Worth taking seriously, whether or not it is true. Same form for both genders." },
        { id: "es-u112l3-verosimil", type: "vocab", front: "verosímil", reading: "verosimil", meaning: "believable / credible", example: { jp: "Su historia de los hechos no es verosímil.", en: "His account of events is not believable." }, accept: ["believable", "credible", "convincing", "likely"], hint: "Literally truth-seeming, from verdad + símil. Plausible judges an argument; verosímil judges a story — which is why fiction uses it." },
        { id: "es-u112l3-fehaciente", type: "vocab", front: "fehaciente", reading: "fehaciente", meaning: "incontrovertible / documented", example: { jp: "No hay ninguna prueba fehaciente de eso.", en: "There is no incontrovertible proof of that." }, accept: ["incontrovertible", "documented", "reliable", "conclusive"], hint: "Good enough to stand officially: from fe, faith, plus hacer — it makes belief. Notificar de forma fehaciente means in a way that can be proved later." },
        { id: "es-u112l3-tendencioso", type: "vocab", front: "tendencioso", reading: "tendencioso", meaning: "tendentious / slanted", example: { jp: "El informe es tendencioso desde la primera parte.", en: "The report is slanted from the very first section." }, accept: ["tendentious", "slanted", "biased", "loaded"], hint: "Written to push you somewhere while looking neutral. Una pregunta tendenciosa is a loaded question: the sesgo (u104) is deliberate." },
        { id: "es-u112l3-sustancial", type: "vocab", front: "sustancial", reading: "sustancial", meaning: "substantial / material", example: { jp: "Hubo un cambio sustancial en la normativa.", en: "There was a substantial change in the regulations." }, accept: ["substantial", "material", "significant", "considerable"], hint: "Big enough to change the substance of the thing. In legal writing, un cambio sustancial is one that alters what was agreed." },
        { id: "es-u112l3-marginal", type: "vocab", front: "marginal", reading: "marginal", meaning: "marginal / minor", example: { jp: "El efecto fue marginal y nadie lo notó.", en: "The effect was marginal and nobody noticed it." }, accept: ["marginal", "minor", "negligible", "slight"], hint: "At the edge of mattering. It also describes people pushed to the edge of society, which is the sense in social policy writing." },
      ],
    },
    {
      id: "es-u112l4",
      unit: 112,
      lesson: 4,
      title: "Lo que ayuda y lo que daña",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge an effect: harmful, toxic, beneficial, favourable, unfavourable or make-or-break.",
      items: [
        { id: "es-u112l4-perjudicial", type: "vocab", front: "perjudicial", reading: "perjudicial", meaning: "detrimental / harmful", example: { jp: "El cambio fue perjudicial para las familias con menos dinero.", en: "The change was detrimental to families with less money." }, accept: ["detrimental", "harmful", "damaging", "adverse"], hint: "Perjudicial para is the pattern. From el perjuicio, harm — the same noun inside sin perjuicio de (u110), where it is negated." },
        { id: "es-u112l4-nocivo", type: "vocab", front: "nocivo", reading: "nocivo", meaning: "harmful / noxious", example: { jp: "El aire de la ciudad es nocivo para la salud.", en: "The city's air is harmful to health." }, accept: ["harmful", "noxious", "damaging", "toxic"], hint: "Physical harm, especially to health or the environment. Perjudicial can harm an interest; nocivo harms a body." },
        { id: "es-u112l4-beneficioso", type: "vocab", front: "beneficioso", reading: "beneficioso", meaning: "beneficial", example: { jp: "La medida fue beneficiosa para casi todos.", en: "The measure was beneficial for almost everyone." }, accept: ["beneficial", "advantageous", "helpful"], hint: "The clean opposite of perjudicial, and it takes the same para. Not to be confused with benéfico, which means charitable." },
        { id: "es-u112l4-favorable", type: "vocab", front: "favorable", reading: "favorable", meaning: "favourable", example: { jp: "La resolución fue favorable al interesado.", en: "The ruling was favourable to the party concerned." }, accept: ["favourable", "favorable", "positive", "in favour"], hint: "Leaning your way. In an official context it is the word that tells you whether you won: informe favorable, resolución favorable." },
        { id: "es-u112l4-adverso", type: "vocab", front: "adverso", reading: "adverso", meaning: "adverse / unfavourable", example: { jp: "El escenario adverso obligó a cambiar el plan.", en: "The adverse scenario forced a change of plan." }, accept: ["adverse", "unfavourable", "unfavorable", "hostile"], hint: "Conditions working against you, rather than an enemy doing so. Un efecto adverso is a side effect, in medicine and in policy." },
        { id: "es-u112l4-crucial", type: "vocab", front: "crucial", reading: "crucial", meaning: "crucial", example: { jp: "Ese punto es crucial para todo el informe.", en: "That point is crucial to the whole report." }, accept: ["crucial", "critical", "pivotal", "key"], hint: "Same form for both genders. It names the point everything else turns on — from la cruz, the crossroads where a decision has to be made." },
      ],
    },
  ],
};
