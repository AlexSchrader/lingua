// ES Unit 106 — La condición y la hipótesis ("Condition and hypothesis") — B2 (slot: hypothesis)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: framing what is not the case.
// Provisos (l1), exceptions and alternatives (l2), supposition (l3), counterfactuals and
// scenarios (l4). Modelled as function-word vocab whose examples carry the pattern.
// The B1 subjunctive triggers (u69) and risk as subject matter (u98) stay theirs — and
// u69 turned out to own eight of this unit's obvious candidates, all rejected below.
// Rejected as already taught: a menos que, con tal de que, a no ser que, en caso de que,
// aun cuando, por mucho que (u69), salvo (u36), por si acaso (u29), la excepción,
// el requisito (u61), descartar (u74), el desenlace (u86). Rejected as the same lexeme:
// condicionar (~u61 la condición).
export const ES_UNIT106 = {
  id: "es-u106",
  lang: "es",
  title: "La condición y la hipótesis",
  order: 106,
  stage: "b2",
  lessons: [
    {
      id: "es-u106l1",
      unit: 106,
      lesson: 1,
      title: "Condiciones y provisos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Attach a condition to an agreement: only if, provided that, subject to — and name the thing the decision depends on.",
      items: [
        { id: "es-u106l1-siempreycuando", type: "vocab", front: "siempre y cuando", reading: "siempreycuando", meaning: "provided that / as long as", example: { jp: "Puedes usar la casa siempre y cuando la dejes limpia.", en: "You can use the house provided you leave it clean." }, accept: ["provided that", "as long as", "on condition that", "so long as"], hint: "The most formal of the provisos, and always followed by the subjunctive. Heavier than siempre que, which does the same job in speech." },
        { id: "es-u106l1-acondiciondeque", type: "vocab", front: "a condición de que", reading: "acondiciondeque", meaning: "on condition that", example: { jp: "Dijo que sí a condición de que pagaran el viaje.", en: "She said yes on condition that they paid for the trip." }, accept: ["on condition that", "provided that", "on the condition that"], hint: "Names the condition as a condition — the wording of a negotiation. With a following infinitive, drop the que: a condición de pagar." },
        { id: "es-u106l1-siempreque", type: "vocab", front: "siempre que", reading: "siempreque", meaning: "as long as / whenever", example: { jp: "Te ayudo siempre que me avises antes.", en: "I'll help you as long as you let me know first." }, accept: ["as long as", "provided that", "whenever"], hint: "Two readings in one phrase: with the subjunctive it is a condition, with the indicative it just means every time — siempre que viene, trae algo." },
        { id: "es-u106l1-salvoque", type: "vocab", front: "salvo que", reading: "salvoque", meaning: "unless", example: { jp: "Vamos a salir, salvo que el tiempo cambie.", en: "We're going out, unless the weather changes." }, accept: ["unless", "except that", "save that"], hint: "The written-register unless, built on salvo (u36). A menos que (u69) is the same idea in ordinary speech." },
        { id: "es-u106l1-supeditar", type: "vocab", front: "supeditar", reading: "supeditar", meaning: "to make subject to / subordinate", example: { jp: "El plan queda supeditado al dinero que llegue.", en: "The plan is subject to whatever money comes in." }, accept: ["to make subject to", "to subordinate", "to make conditional on", "subordinate"], hint: "Almost always in the participle: supeditado a. It is the formal way to say something only happens if something else does." },
        { id: "es-u106l1-condicionante", type: "vocab", front: "el condicionante", reading: "elcondicionante", meaning: "constraining factor", example: { jp: "El precio fue el gran condicionante de la decisión.", en: "Price was the big constraint on the decision." }, accept: ["constraint", "constraining factor", "determining factor", "limiting factor"], hint: "The thing that shapes what is possible before anyone chooses. Not the condition itself but the pressure behind it." },
      ],
    },
    {
      id: "es-u106l2",
      unit: 106,
      lesson: 2,
      title: "Excepciones y alternativas",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Carve out an exception, state the reservation you still have, and say what happens if the condition fails.",
      items: [
        { id: "es-u106l2-excepto", type: "vocab", front: "excepto", reading: "excepto", meaning: "except", example: { jp: "Vinieron todos excepto ella.", en: "Everyone came except her." }, accept: ["except", "apart from", "but"], hint: "Interchangeable with salvo (u36) and menos in this sense. Note the pronoun stays subject-like: excepto yo, not excepto mí." },
        { id: "es-u106l2-salvedad", type: "vocab", front: "la salvedad", reading: "lasalvedad", meaning: "reservation / caveat", example: { jp: "Estoy de acuerdo, con la salvedad del punto final.", en: "I agree, with the exception of the last point." }, accept: ["caveat", "reservation", "exception", "proviso"], hint: "Con la salvedad de is the fixed phrase: it lets you agree with almost everything and still mark what you do not." },
        { id: "es-u106l2-delocontrario", type: "vocab", front: "de lo contrario", reading: "delocontrario", meaning: "otherwise / failing that", example: { jp: "Hay que salir ya; de lo contrario, perdemos el tren.", en: "We have to leave now; otherwise we'll miss the train." }, accept: ["otherwise", "failing that", "if not", "or else"], hint: "States the consequence if the condition is not met. Formal; en caso contrario is its twin, and si no is what you say out loud." },
        { id: "es-u106l2-deotromodo", type: "vocab", front: "de otro modo", reading: "deotromodo", meaning: "otherwise / in another way", example: { jp: "Debemos cambiar el plan; de otro modo, no va a funcionar.", en: "We must change the plan; otherwise it won't work." }, accept: ["otherwise", "in another way", "or else", "differently"], hint: "Built on el modo. Very close to de lo contrario, but it can also simply mean by some other means: hazlo de otro modo." },
        { id: "es-u106l2-siacaso", type: "vocab", front: "si acaso", reading: "siacaso", meaning: "if anything / at most", example: { jp: "No creo que venga; si acaso, llegará muy tarde.", en: "I don't think he'll come; if anything, he'll arrive very late." }, accept: ["if anything", "at most", "if at all"], hint: "Scales a claim down to its smallest possible version. Different from por si acaso (u29), which means just in case." },
        { id: "es-u106l2-contemplar", type: "vocab", front: "contemplar", reading: "contemplar", meaning: "to provide for / envisage", example: { jp: "La ley no contempla ese caso.", en: "The law does not provide for that case." }, accept: ["to provide for", "to envisage", "to cover", "to allow for"], hint: "The rule-writer's verb: a text contempla a situation when it has thought of it in advance. The looking-at sense is the everyday one." },
      ],
    },
    {
      id: "es-u106l3",
      unit: 106,
      lesson: 3,
      title: "Suposiciones",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Open a supposition and name its parts: let's say that, assuming that, the hypothesis, the premise, the assumed case.",
      items: [
        { id: "es-u106l3-suponiendoque", type: "vocab", front: "suponiendo que", reading: "suponiendoque", meaning: "assuming that", example: { jp: "Suponiendo que sea cierto, ¿qué hacemos ahora?", en: "Assuming that is true, what do we do now?" }, accept: ["assuming that", "supposing that", "if we assume that"], hint: "Takes the subjunctive. It grants something for the sake of argument without agreeing to it — from suponer." },
        { id: "es-u106l3-pongamosque", type: "vocab", front: "pongamos que", reading: "pongamosque", meaning: "let's say that", example: { jp: "Pongamos que ganamos: ¿cambiaría algo?", en: "Let's say we win: would anything change?" }, accept: ["let's say that", "let's suppose that", "say that", "suppose"], hint: "The spoken way into a hypothesis, from poner. Digamos que does the same work with a shade more hedging." },
        { id: "es-u106l3-hipotesis", type: "vocab", front: "la hipótesis", reading: "lahipotesis", meaning: "hypothesis", example: { jp: "La hipótesis más simple es también la mejor.", en: "The simplest hypothesis is also the best one." }, accept: ["hypothesis", "theory", "conjecture"], hint: "Same form singular and plural — una hipótesis, dos hipótesis. A claim put up to be tested, not a guess." },
        { id: "es-u106l3-premisa", type: "vocab", front: "la premisa", reading: "lapremisa", meaning: "premise", example: { jp: "Todo el informe parte de una premisa falsa.", en: "The whole report starts from a false premise." }, accept: ["premise", "assumption", "starting point"], hint: "What an argument takes as given before it starts. If the premisa is wrong, everything built on it falls, however good the reasoning." },
        { id: "es-u106l3-supuesto", type: "vocab", front: "el supuesto", reading: "elsupuesto", meaning: "assumed case / assumption", example: { jp: "En el supuesto de una crisis, el plan cambia.", en: "In the event of a crisis, the plan changes." }, accept: ["assumption", "case", "scenario", "supposed case"], hint: "En el supuesto de que is the formal in the event that. As an adjective, supuesto means alleged: el supuesto autor." },
        { id: "es-u106l3-figurarse", type: "vocab", front: "figurarse", reading: "figurarse", meaning: "to imagine / assume", example: { jp: "Me figuro que ya lo sabías.", en: "I imagine you already knew." }, accept: ["to imagine", "to assume", "to suppose", "imagine"], hint: "Reflexive and conversational: me figuro que. It softens a claim by marking it as your own guess." },
      ],
    },
    {
      id: "es-u106l4",
      unit: 106,
      lesson: 4,
      title: "Contrafactuales y escenarios",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what would have been the case but was not, and name the scenario you are planning against.",
      items: [
        { id: "es-u106l4-denoserpor", type: "vocab", front: "de no ser por", reading: "denoserpor", meaning: "if it were not for", example: { jp: "De no ser por ella, todo sería mucho peor.", en: "If it were not for her, everything would be much worse." }, accept: ["if it were not for", "but for", "if not for", "were it not for"], hint: "Names the one thing that stopped a bad outcome. The past version is de no haber sido por." },
        { id: "es-u106l4-dehaber", type: "vocab", front: "de haber", reading: "dehaber", meaning: "if there had been / had there been", example: { jp: "De haber más dinero, el plan sería otro.", en: "If there were more money, the plan would be different." }, accept: ["if there had been", "had there been", "if there were"], hint: "De + infinitive is a compact written way to build a conditional with no si at all: de saberlo, te lo diría." },
        { id: "es-u106l4-deserasi", type: "vocab", front: "de ser así", reading: "deserasi", meaning: "if that is the case", example: { jp: "De ser así, tendríamos que cambiar la fecha.", en: "If that is the case, we would have to change the date." }, accept: ["if that is the case", "if so", "should that be so"], hint: "Points back at what was just said and makes it the condition. Si es así is the same move in ordinary speech." },
        { id: "es-u106l4-entalcaso", type: "vocab", front: "en tal caso", reading: "entalcaso", meaning: "in that case", example: { jp: "El tiempo puede cambiar; en tal caso, nos quedamos en casa.", en: "The weather may change; in that case, we'll stay at home." }, accept: ["in that case", "in such a case", "if so"], hint: "Introduces the consequence of the case just named. En ese caso is the everyday form; tal keeps it formal." },
        { id: "es-u106l4-llegadoelcaso", type: "vocab", front: "llegado el caso", reading: "llegadoelcaso", meaning: "if it comes to it", example: { jp: "Llegado el caso, hablaré yo con ellos.", en: "If it comes to it, I'll talk to them myself." }, accept: ["if it comes to it", "if need be", "should it come to that", "if necessary"], hint: "A participle used absolutely — literally the case having arrived. It marks a plan you hope not to need." },
        { id: "es-u106l4-escenario", type: "vocab", front: "el escenario", reading: "elescenario", meaning: "scenario", example: { jp: "El peor escenario es que nadie quiera pagar.", en: "The worst scenario is that nobody is willing to pay." }, accept: ["scenario", "situation", "case"], hint: "A whole imagined situation you plan against: el peor escenario, un escenario posible. It is also a theatre stage." },
      ],
    },
  ],
};
