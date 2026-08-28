// ES Unit 61 — Normas y obligaciones (slot: rules-obligation) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 gave obligation as bare verbs — tener que, hay que, deber, permitir, la ley,
// el derecho. B1 builds the world those verbs live in: the rules themselves, the
// language of allowing and forbidding, respecting or breaking them, and duty and
// requirements. Spanish permission pulls hard toward the subjunctive (prohíben que
// FUMES, es obligatorio que VAYAS), so — as everywhere in this block — the examples
// route around it with INFINITIVE constructions the learner owns: está prohibido
// fumar, obligan a pagar, hay que respetar. Every A2 obligation word is used and
// re-taught nowhere.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT61 = {
  id: "es-u61",
  lang: "es",
  title: "Normas y obligaciones",
  order: 61,
  stage: "b1",
  lessons: [
    {
      id: "es-u61l1",
      unit: 61,
      lesson: 1,
      title: "Rules",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a rule and its force — la norma, la regla, el reglamento, obligatorio, prohibido, permitido.",
      items: [
        { id: "es-u61l1-lanorma", type: "vocab", front: "la norma", reading: "lanorma", meaning: "rule", example: { jp: "Hay que respetar las normas de la casa.", en: "You have to respect the house rules." }, accept: ["the norm", "standard"], hint: "A rule or standard of behaviour. Por norma general = as a general rule. respetar is l3." },
        { id: "es-u61l1-laregla", type: "vocab", front: "la regla", reading: "laregla", meaning: "rule", example: { jp: "Las reglas del juego son muy claras.", en: "The rules of the game are very clear." }, accept: ["the ruler", "regulation"], hint: "A rule of a game or a system — and also a ruler for drawing lines. el juego is A2." },
        { id: "es-u61l1-elreglamento", type: "vocab", front: "el reglamento", reading: "elreglamento", meaning: "regulations", example: { jp: "El reglamento prohíbe usar el móvil en la reunión.", en: "The regulations forbid using your phone in the meeting." }, accept: ["the rules", "code"], hint: "The full written set of rules of an organization. From la regla. prohíbe is l2; usar, el móvil, la reunión are A2." },
        { id: "es-u61l1-obligatorio", type: "vocab", front: "obligatorio", reading: "obligatorio", meaning: "compulsory", example: { jp: "Llevar el pasaporte es obligatorio para viajar.", en: "Carrying your passport is compulsory to travel." }, accept: ["mandatory", "obligatory"], hint: "Required by a rule. Its opposite is opcional. el pasaporte, viajar are A1." },
        { id: "es-u61l1-prohibido", type: "vocab", front: "prohibido", reading: "prohibido", meaning: "forbidden", example: { jp: "En el hospital está prohibido hacer ruido.", en: "Making noise is forbidden in the hospital." }, accept: ["banned", "not allowed"], hint: "Está prohibido + infinitive is the sign-language of rules. el hospital is A1, el ruido is u30." },
        { id: "es-u61l1-permitido", type: "vocab", front: "permitido", reading: "permitido", meaning: "allowed", example: { jp: "No está permitido usar el móvil en clase.", en: "Using your phone in class isn't allowed." }, accept: ["permitted"], hint: "From permitir (A2). The opposite of prohibido: está permitido / no está permitido + infinitive." },
      ],
    },
    {
      id: "es-u61l2",
      unit: 61,
      lesson: 2,
      title: "Allowing and forbidding",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what's allowed or banned — prohibir, obligar, autorizar, el permiso, la obligación, la prohibición.",
      items: [
        { id: "es-u61l2-autorizar", type: "vocab", front: "autorizar", reading: "autorizar", meaning: "to authorize", example: { jp: "El jefe autorizó el viaje sin problema.", en: "The boss authorized the trip without a problem." }, accept: ["to permit", "to approve"], hint: "To give official permission. More formal than dejar or permitir. el viaje is A1." },
        { id: "es-u61l2-elpermiso", type: "vocab", front: "el permiso", reading: "elpermiso", meaning: "permission", example: { jp: "Pedí permiso para salir antes del trabajo.", en: "I asked permission to leave work early." }, accept: ["the leave", "permit"], hint: "pedir permiso = to ask permission. Con permiso = excuse me (when passing by). From permitir (A2)." },
        { id: "es-u61l2-laobligacion", type: "vocab", front: "la obligación", reading: "laobligacion", meaning: "obligation", example: { jp: "Respetar a los demás es una obligación de todos.", en: "Respecting others is everyone's obligation." }, accept: ["the duty"], hint: "From obligar. Tengo la obligación de… = I'm obliged to… respetar is l3, los demás is A2." },
        { id: "es-u61l2-laprohibicion", type: "vocab", front: "la prohibición", reading: "laprohibicion", meaning: "ban", example: { jp: "Hay una prohibición de conducir por el centro.", en: "There's a ban on driving through the centre." }, accept: ["the prohibition"], hint: "The noun from prohibir. conducir (to drive) is A2, el centro is A1." },
      ],
    },
    {
      id: "es-u61l3",
      unit: 61,
      lesson: 3,
      title: "Following or breaking them",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about respecting or breaking rules — respetar, saltarse, incumplir, la multa, castigar, el castigo.",
      items: [
        { id: "es-u61l3-respetar", type: "vocab", front: "respetar", reading: "respetar", meaning: "to respect", example: { jp: "Todos deben respetar las normas del lugar.", en: "Everyone must respect the rules of the place." }, accept: ["to obey", "to observe"], hint: "To respect a person or a rule. From el respeto (A2). Respetar un semáforo = to obey a traffic light." },
        { id: "es-u61l3-saltarse", type: "vocab", front: "saltarse", reading: "saltarse", meaning: "to skip", example: { jp: "Se saltó la cola y todos protestaron.", en: "He jumped the queue and everyone protested." }, accept: ["to break (a rule)", "to jump"], hint: "saltarse una norma/la cola/un semáforo = to break a rule / jump a queue / run a light. From saltar, to jump. la cola is A2, protestaron is u55." },
        { id: "es-u61l3-incumplir", type: "vocab", front: "incumplir", reading: "incumplir", meaning: "to break", example: { jp: "La empresa incumplió el contrato con sus clientes.", en: "The company broke the contract with its clients." }, accept: ["to fail to comply", "to violate"], hint: "in- + cumplir (u56): to fail to keep an agreement or rule. The formal opposite of cumplir." },
        { id: "es-u61l3-lamulta", type: "vocab", front: "la multa", reading: "lamulta", meaning: "fine", example: { jp: "Pagó una multa por conducir muy rápido.", en: "He paid a fine for driving too fast." }, accept: ["the penalty", "ticket"], hint: "poner una multa = to give a fine. A parking or speeding fine." },
        { id: "es-u61l3-castigar", type: "vocab", front: "castigar", reading: "castigar", meaning: "to punish", example: { jp: "El profesor castigó a los estudiantes por hacer ruido.", en: "The teacher punished the students for making noise." }, accept: ["to penalize"], hint: "To punish. el estudiante is A2; el ruido is u30." },
        { id: "es-u61l3-elcastigo", type: "vocab", front: "el castigo", reading: "elcastigo", meaning: "punishment", example: { jp: "El castigo fue quedarse sin salir el fin de semana.", en: "The punishment was not going out at the weekend." }, accept: ["the penalty"], hint: "The noun from castigar. quedarse (u21) sin algo = to go without something." },
      ],
    },
    {
      id: "es-u61l4",
      unit: 61,
      lesson: 4,
      title: "Duty and requirements",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what's required and deserved — merecer, el requisito, imprescindible, la condición, la excepción, corresponder.",
      items: [
        { id: "es-u61l4-elrequisito", type: "vocab", front: "el requisito", reading: "elrequisito", meaning: "requirement", example: { jp: "El único requisito es hablar dos idiomas.", en: "The only requirement is speaking two languages." }, accept: ["the prerequisite", "condition"], hint: "Something you must have or do to qualify. Cumplir los requisitos = to meet the requirements." },
        { id: "es-u61l4-lacondicion", type: "vocab", front: "la condición", reading: "lacondicion", meaning: "condition", example: { jp: "Te ayudo, pero con una condición.", en: "I'll help you, but on one condition." }, accept: ["the term", "requirement"], hint: "A term you set: con la condición de… = on condition that… Also physical condition: estar en forma." },
        { id: "es-u61l4-laexcepcion", type: "vocab", front: "la excepción", reading: "laexcepcion", meaning: "exception", example: { jp: "No hay excepciones: la norma es para todos.", en: "There are no exceptions: the rule is for everyone." }, accept: ["the exemption"], hint: "Something the rule doesn't cover. La excepción confirma la regla = the exception proves the rule." },
        { id: "es-u61l4-corresponder", type: "vocab", front: "corresponder", reading: "corresponder", meaning: "to be up to", example: { jp: "No me corresponde decidir eso.", en: "It's not up to me to decide that." }, accept: ["to be one's place", "to correspond"], hint: "Works like gustar: me corresponde = it falls to me / it's my place. Also to correspond/match." },
      ],
    },
  ],
};
