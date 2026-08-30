// ES Unit 111 — Verbos de análisis y postura ("Verbs of analysis and stance") — B2 (slot: analysis-verbs)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: verbs that POSITION an
// argument. Deriving and corroborating (l1), advocating and shoring up (l2), refuting and
// undermining (l3), conceding and dissenting (l4).
// Verbs of perceiving and working something out are u117's, and verbs of revealing or
// reproaching are u122's — neither is touched here. Every front is a move you make on a
// claim, not a thing you notice or a thing you admit.
// Rejected as already taught: sostener, objetar, deducir, coincidir (u51), cuestionar
// (u58), plantear (u74). Rejected as the same lexeme: fundamentar (~u86 el fundamento).
// Also unavailable: ratificar and suscribir, taught by u101 earlier in this block.
// Judgement call kept: abogar is taught despite u24's el abogado — modern Spanish treats
// abogar por and el abogado as separate words, and the contract names "advocate" for
// this slot. Flagged for the merge seat's lexeme sweep.
export const ES_UNIT111 = {
  id: "es-u111",
  lang: "es",
  title: "Verbos de análisis y postura",
  order: 111,
  stage: "b2",
  lessons: [
    {
      id: "es-u111l1",
      unit: 111,
      lesson: 1,
      title: "Derivar y corroborar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where a conclusion comes from and what backs it up: derive, infer, corroborate, contrast, establish, vouch for.",
      items: [
        { id: "es-u111l1-derivar", type: "vocab", front: "derivar", reading: "derivar", meaning: "to derive / follow from", example: { jp: "De esa premisa derivan dos problemas.", en: "Two problems derive from that premise." }, accept: ["to derive", "to follow from", "to stem from", "derive"], hint: "Derivar de says where something comes from; derivarse is the same idea made explicit. Close to desprenderse (u107), but about origin rather than evidence." },
        { id: "es-u111l1-constatar", type: "vocab", front: "constatar", reading: "constatar", meaning: "to establish (as fact)", example: { jp: "El estudio constata que el problema es más grande.", en: "The study establishes that the problem is bigger." }, accept: ["to establish", "to note", "to verify", "to confirm"], hint: "Stating something as observed fact, without arguing for it. A report constata what it found and then argues from there." },
        { id: "es-u111l1-avalar", type: "vocab", front: "avalar", reading: "avalar", meaning: "to vouch for / support", example: { jp: "Ningún dato avala esa idea.", en: "No data supports that idea." }, accept: ["to vouch for", "to support", "to endorse", "to back"], hint: "Putting your own standing behind something. Originally financial — el aval is a guarantee — and it keeps that sense of staking something." },
        { id: "es-u111l1-refrendar", type: "vocab", front: "refrendar", reading: "refrendar", meaning: "to endorse formally", example: { jp: "La junta directiva refrendó las conclusiones del informe.", en: "The board formally endorsed the report’s conclusions." }, accept: ["to endorse", "to endorse formally", "to countersign", "to uphold"], hint: "A body putting its authority behind a finding already made. Avalar backs a person or claim; refrendar ratifies a decision." },
        { id: "es-u111l1-certificar", type: "vocab", front: "certificar", reading: "certificar", meaning: "to state officially", example: { jp: "Un médico certificó que no podía trabajar.", en: "A doctor certified that he was unable to work." }, accept: ["to certify", "to attest", "to state officially"], hint: "To state something as true in an official capacity. El certificado is the document it produces." },
        { id: "es-u111l1-emanar", type: "vocab", front: "emanar", reading: "emanar", meaning: "to emanate / stem from", example: { jp: "Esa obligación emana directamente de la constitución.", en: "That obligation stems directly from the constitution." }, accept: ["to emanate", "to stem from", "to derive from"], hint: "emanar DE algo. Of authority and duties, where derivar is the neutral word for any consequence." },
      ],
    },
    {
      id: "es-u111l2",
      unit: 111,
      lesson: 2,
      title: "Respaldar y defender",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Come out in favour of a position, put weight behind it, and name the argument you are wielding.",
      items: [
        { id: "es-u111l2-abogar", type: "vocab", front: "abogar", reading: "abogar", meaning: "to advocate / argue for", example: { jp: "El informe aboga por un cambio en la normativa.", en: "The report advocates a change in the regulations." }, accept: ["to advocate", "to argue for", "to call for", "advocate"], hint: "Always abogar por. It means arguing publicly for a cause, not defending someone in court, though the word behind it is el abogado." },
        { id: "es-u111l2-apuntalar", type: "vocab", front: "apuntalar", reading: "apuntalar", meaning: "to shore up", example: { jp: "Buscó más datos para apuntalar su postura.", en: "He looked for more data to shore up his position." }, accept: ["to shore up", "to prop up", "to buttress", "to strengthen"], hint: "From el puntal, a prop holding up a wall — the image is of something that would otherwise fall. You apuntalas an argument that is under attack." },
        { id: "es-u111l2-postular", type: "vocab", front: "postular", reading: "postular", meaning: "to posit / put forward", example: { jp: "El autor postula una causa que nadie había visto.", en: "The author posits a cause nobody had seen." }, accept: ["to posit", "to put forward", "to propose", "posit"], hint: "Putting a claim on the table as something to be argued about. In Latin America, postularse also means to stand for election." },
        { id: "es-u111l2-esgrimir", type: "vocab", front: "esgrimir", reading: "esgrimir", meaning: "to wield (an argument)", example: { jp: "Esgrimió el mismo motivo de siempre.", en: "He wielded the same old reason." }, accept: ["to wield", "to put forward", "to brandish", "to invoke"], hint: "From fencing — la esgrima. Esgrimir un argumento pictures the claim as a weapon, so it usually carries a hint of scepticism." },
        { id: "es-u111l2-secundar", type: "vocab", front: "secundar", reading: "secundar", meaning: "to back / second", example: { jp: "Ningún grupo quiso secundar el plan.", en: "No group was willing to back the plan." }, accept: ["to back", "to second", "to support", "to join in with"], hint: "To add your weight to someone else’s move: secundar una propuesta, una huelga. Abogar argues for a position; secundar joins one." },
        { id: "es-u111l2-respaldar", type: "vocab", front: "respaldar", reading: "respaldar", meaning: "to back / endorse", example: { jp: "Tres estudios respaldan esa conclusión.", en: "Three studies back that conclusion." }, accept: ["to back", "to endorse", "to support"], hint: "The verb behind el respaldo, taught in u89. Of a claim or a person alike." },
      ],
    },
    {
      id: "es-u111l3",
      unit: 111,
      lesson: 3,
      title: "Refutar y socavar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Attack a claim at four different strengths: answer it, disprove it, weaken it slowly, or destroy it outright.",
      items: [
        { id: "es-u111l3-socavar", type: "vocab", front: "socavar", reading: "socavar", meaning: "to undermine", example: { jp: "Ese error socava todo el informe.", en: "That mistake undermines the whole report." }, accept: ["to undermine", "to erode", "to weaken", "undermine"], hint: "Literally to dig away underneath. It works slowly and without a direct attack, which is exactly the figurative sense." },
        { id: "es-u111l3-minar", type: "vocab", front: "minar", reading: "minar", meaning: "to wear down / sap", example: { jp: "La espera minó la confianza de todos.", en: "The wait sapped everyone's confidence." }, accept: ["to wear down", "to sap", "to undermine", "to erode"], hint: "Close to socavar, but aimed at strength and morale rather than at an argument: minar la confianza, minar la salud." },
        { id: "es-u111l3-desvirtuar", type: "vocab", front: "desvirtuar", reading: "desvirtuar", meaning: "to distort / rob of force", example: { jp: "Sacar la frase de su sitio desvirtúa lo que dijo.", en: "Taking the sentence out of place distorts what he said." }, accept: ["to distort", "to rob of force", "to detract from", "to misrepresent"], hint: "To take the virtue — the force — out of something. It sits between tergiversar (u104), which twists, and invalidar, which cancels." },
        { id: "es-u111l3-invalidar", type: "vocab", front: "invalidar", reading: "invalidar", meaning: "to invalidate", example: { jp: "Un solo error puede invalidar todo el estudio.", en: "A single mistake can invalidate the whole study." }, accept: ["to invalidate", "to nullify", "to void", "invalidate"], hint: "The strongest of the four: what is invalidado no longer counts at all. Used of results, of votes, and of documents." },
        { id: "es-u111l3-desmontar", type: "vocab", front: "desmontar", reading: "desmontar", meaning: "to dismantle (an argument)", example: { jp: "La defensa desmontó el argumento en pocos minutos.", en: "The defence dismantled the argument in a few minutes." }, accept: ["to dismantle", "to take apart", "to demolish", "to debunk"], hint: "To take a case apart piece by piece rather than deny it outright. Literally to dismantle a machine." },
        { id: "es-u111l3-impugnar", type: "vocab", front: "impugnar", reading: "impugnar", meaning: "to contest formally", example: { jp: "La empresa impugnó la decisión ante el tribunal.", en: "The company challenged the decision before the court." }, accept: ["to challenge", "to contest", "to appeal against", "to dispute"], hint: "Formal opposition through a procedure, not in debate: impugnar un resultado, un acuerdo, una decisión." },
      ],
    },
    {
      id: "es-u111l4",
      unit: 111,
      lesson: 4,
      title: "Conceder y discrepar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give ground on one point while holding your own, and register disagreement in a formal register.",
      items: [
        { id: "es-u111l4-conceder", type: "vocab", front: "conceder", reading: "conceder", meaning: "to concede / grant", example: { jp: "Concedo que el punto es bueno, pero no cambia nada.", en: "I concede the point is a good one, but it changes nothing." }, accept: ["to concede", "to grant", "to admit", "concede"], hint: "Giving your opponent one point on purpose, to keep the rest. It also means to award: conceder una beca." },
        { id: "es-u111l4-alegar", type: "vocab", front: "alegar", reading: "alegar", meaning: "to claim / plead", example: { jp: "Alegó que nadie le había notificado nada.", en: "He claimed that nobody had notified him of anything." }, accept: ["to claim", "to plead", "to argue", "to allege"], hint: "Offering a reason in your own defence. Neutral about truth: alegar reports what someone says without the speaker agreeing." },
        { id: "es-u111l4-discrepar", type: "vocab", front: "discrepar", reading: "discrepar", meaning: "to disagree (formally)", example: { jp: "Discrepo de esa idea del informe.", en: "I disagree with that idea of the report." }, accept: ["to disagree", "to differ", "to dissent", "disagree"], hint: "Discrepar de algo o de alguien. It names a difference of view without any heat — the word a report uses about a colleague." },
        { id: "es-u111l4-disentir", type: "vocab", front: "disentir", reading: "disentir", meaning: "to dissent", example: { jp: "Dos personas quisieron disentir en el acta.", en: "Two people wanted their dissent recorded in the minutes." }, accept: ["to dissent", "to disagree", "dissent"], hint: "Stronger and rarer than discrepar: to put your disagreement on the record against a decision already taken. Un voto particular is the written form." },
        { id: "es-u111l4-contraponer", type: "vocab", front: "contraponer", reading: "contraponer", meaning: "to set against / counterpose", example: { jp: "El autor contrapone dos ideas que no son contrarias.", en: "The author sets against each other two ideas that are not opposites." }, accept: ["to set against", "to counterpose", "to contrast", "to oppose"], hint: "Putting two things face to face so each defines the other. Built like poner, so it conjugates the same way: contrapuso, contrapuesto." },
        { id: "es-u111l4-arguir", type: "vocab", front: "argüir", reading: "arguir", meaning: "to argue / contend", example: { jp: "Se puede argüir lo contrario con los mismos datos.", en: "One could argue the opposite with the same data." }, accept: ["to argue", "to contend", "to maintain", "argue"], hint: "The formal, written argue — note the dieresis, which keeps the u sounded: ar-gu-ir. Rare enough that using it marks the register at once." },
      ],
    },
  ],
};
