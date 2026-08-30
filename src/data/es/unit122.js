// ES Unit 122 — Revealing, reporting and reproaching (slot: disclose-reproach) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: Verbs of bringing something out — disclose, allege, testify, retort, rebuke,
//         insinuate.
//   NOT:  Communication verbs at B1 (u77: expresar, comentar, mencionar) and analytical
//         stance (u111).
//
// Rejected as already taught: desmentir (u89), confesar + jurar + advertir (u77),
// sugerir (u74). "rebatir" and "refutar" are left to u111, which owns refutation;
// denunciar, acusar, imputar and declarar are u114's courtroom words, used here only
// in hints.
export const ES_UNIT122 = {
  id: "es-u122",
  lang: "es",
  title: "Sacar algo a la luz",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "es-u122l1",
      unit: 122,
      lesson: 1,
      title: "Revelar y difundir",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report how something private became public: it was revealed, uncovered, leaked or spread.",
      items: [
        { id: "es-u122l1-revelar", type: "vocab", front: "revelar", reading: "revelar", meaning: "to reveal / disclose", example: { jp: "El informe reveló que el problema era mucho más serio.", en: "The report revealed that the problem was far more serious." }, accept: ["to reveal", "to disclose", "to make known"], hint: "The neutral word of the family. It is also what you do to photographic film." },
        { id: "es-u122l1-desvelar", type: "vocab", front: "desvelar", reading: "desvelar", meaning: "to unveil / uncover", example: { jp: "Nunca desveló quién le había dado los documentos.", en: "He never revealed who had given him the documents." }, accept: ["to unveil", "to uncover", "to disclose"], hint: "There was a veil over it — a secret, an identity, a plan. Desvelarse also means to lie awake." },
        { id: "es-u122l1-destapar", type: "vocab", front: "destapar", reading: "destapar", meaning: "to expose / blow the lid off", example: { jp: "Dos periodistas destaparon el caso en 2019.", en: "Two journalists blew the case open in 2019." }, accept: ["to expose", "to uncover", "to blow open"], hint: "From la tapa, the lid. Always about wrongdoing, and always with someone to blame underneath." },
        { id: "es-u122l1-filtrar", type: "vocab", front: "filtrar", reading: "filtrar", meaning: "to leak", example: { jp: "Alguien filtró el borrador a la prensa antes de la reunión.", en: "Somebody leaked the draft to the press before the meeting." }, accept: ["to leak", "to leak to the press"], hint: "Filtrar algo A alguien. Filtrarse for what escapes on its own: se filtró la noticia." },
        { id: "es-u122l1-trascender", type: "vocab", front: "trascender", reading: "trascender", meaning: "to become known / leak out", example: { jp: "Nunca trascendió lo que se habló en aquella reunión.", en: "What was said in that meeting never became known." }, accept: ["to become known", "to leak out", "to get out", "to transcend"], hint: "Impersonal and passive: nobody is named as the source. Filtrar says someone leaked it; trascender only says it got out." },
      ],
    },
    {
      id: "es-u122l2",
      unit: 122,
      lesson: 2,
      title: "Testificar y alegar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report what someone put forward as their account: testimony, a reason offered, a claim made, or another person given away.",
      items: [
        { id: "es-u122l2-testificar", type: "vocab", front: "testificar", reading: "testificar", meaning: "to testify", example: { jp: "Decidió testificar contra su antiguo jefe.", en: "He decided to testify against his former boss." }, accept: ["to testify", "to give evidence", "to bear witness"], hint: "Testificar CONTRA or A FAVOR DE alguien. Built on el testigo, the witness (u83) — so only a witness testifica, where anyone in the room can declarar (u114)." },
        { id: "es-u122l2-atestiguar", type: "vocab", front: "atestiguar", reading: "atestiguar", meaning: "to attest / bear witness to", example: { jp: "Las cartas atestiguan que ya se conocían.", en: "The letters attest that they already knew each other." }, accept: ["to attest", "to bear witness to", "to vouch for"], hint: "A thing can atestiguar as well as a person — documents, ruins, marks on a wall." },
        { id: "es-u122l2-deponer", type: "vocab", front: "deponer", reading: "deponer", meaning: "to give a sworn statement", example: { jp: "Los dos empleados deponen mañana ante el tribunal.", en: "The two employees give their statements before the court tomorrow." }, accept: ["to give a sworn statement", "to depose", "to testify"], hint: "The narrowest of the three: formal, on the record, under oath. Conjugates like poner." },
        { id: "es-u122l2-aducir", type: "vocab", front: "aducir", reading: "aducir", meaning: "to cite / adduce (as a reason)", example: { jp: "Adujo motivos personales y no dio más explicaciones.", en: "He cited personal reasons and gave no further explanation." }, accept: ["to cite", "to adduce", "to give as a reason"], hint: "Higher register than alegar and drier: reasons brought forward, without any suggestion of a defence." },
        { id: "es-u122l2-delatar", type: "vocab", front: "delatar", reading: "delatar", meaning: "to give away / inform on", example: { jp: "Su acento lo delató en cuanto abrió la boca.", en: "His accent gave him away the moment he opened his mouth." }, accept: ["to give away", "to inform on", "to betray"], hint: "Two uses: a person who informs on another, and a detail that betrays someone without meaning to." },
      ],
    },
    {
      id: "es-u122l3",
      unit: 122,
      lesson: 3,
      title: "Insinuar y achacar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something without saying it: hint at it, allude to it, convey it plainly without stating it, pin it on someone, or brand them with a label.",
      items: [
        { id: "es-u122l3-insinuar", type: "vocab", front: "insinuar", reading: "insinuar", meaning: "to insinuate / hint at", example: { jp: "Insinuó que alguien de la propia empresa había filtrado el documento.", en: "He insinuated that someone from the company itself had leaked the document." }, accept: ["to insinuate", "to hint at", "to imply"], hint: "Saying it while keeping the option of not having said it, and what is implied is never flattering — that is the difference from dar a entender, three cards down. ¿Qué insinúas? is the standard challenge." },
        { id: "es-u122l3-achacar", type: "vocab", front: "achacar", reading: "achacar", meaning: "to pin on / put down to", example: { jp: "Achacan el retraso a la falta de personal.", en: "They put the delay down to the shortage of staff." }, accept: ["to pin on", "to put down to", "to attribute", "to blame on"], hint: "Achacar algo A alguien o algo. Almost always about something bad." },
        { id: "es-u122l3-tildar", type: "vocab", front: "tildar", reading: "tildar", meaning: "to brand / label", example: { jp: "Lo tildaron de cobarde por no comparecer.", en: "They branded him a coward for not appearing." }, accept: ["to brand", "to label", "to call"], hint: "Tildar a alguien DE algo — the de is obligatory, and the label is always an insult." },
        { id: "es-u122l3-daraentender", type: "vocab", front: "dar a entender", reading: "daraentender", meaning: "to give to understand / convey indirectly", example: { jp: "Dio a entender que la decisión ya estaba tomada.", en: "He gave us to understand that the decision had already been made." }, accept: ["to give to understand", "to convey indirectly", "to imply"], hint: "Neutral where insinuar is loaded: you convey something without stating it, but you are not hinting at anything unpleasant. Dar a entender QUE + indicative." },
        { id: "es-u122l3-sincerarse", type: "vocab", front: "sincerarse", reading: "sincerarse", meaning: "to come clean / open up", example: { jp: "Al final se sinceró con su hermana y se lo contó todo.", en: "In the end he opened up to his sister and told her everything." }, accept: ["to come clean", "to open up", "to unburden oneself"], hint: "Sincerarse CON alguien. The relief is the point — this is confession as release, not as evidence." },
      ],
    },
    {
      id: "es-u122l4",
      unit: 122,
      lesson: 4,
      title: "Reprender y amonestar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grade a telling-off: a wounded reproach, a boss's rebuke, an official warning, a public dressing-down, and a sharp retort.",
      items: [
        { id: "es-u122l4-echarencara", type: "vocab", front: "echar en cara", reading: "echarencara", meaning: "to throw in someone's face", example: { jp: "Le echó en cara que no hubiera dicho nada antes.", en: "She threw it in his face that he had said nothing earlier." }, accept: ["to throw in someones face", "to reproach", "to hold against"], hint: "Echar algo EN CARA a alguien. The spoken, wounded version of a reproach — it comes up in arguments, not in reports." },
        { id: "es-u122l4-reprender", type: "vocab", front: "reprender", reading: "reprender", meaning: "to tell off / rebuke", example: { jp: "El profesor lo reprendió delante de toda la clase.", en: "The teacher told him off in front of the whole class." }, accept: ["to tell off", "to rebuke", "to scold"], hint: "From above: teacher to pupil, officer to soldier. There is authority behind it." },
        { id: "es-u122l4-amonestar", type: "vocab", front: "amonestar", reading: "amonestar", meaning: "to give a formal warning", example: { jp: "La empresa lo amonestó por escrito dos veces.", en: "The company gave him a written warning twice." }, accept: ["to warn formally", "to reprimand", "to caution"], hint: "It goes on the record — at work, or as a yellow card in football. La amonestación is the warning itself." },
        { id: "es-u122l4-recriminar", type: "vocab", front: "recriminar", reading: "recriminar", meaning: "to recriminate / cast up", example: { jp: "Pasaron la noche recriminándose los mismos errores.", en: "They spent the night casting the same mistakes up at each other." }, accept: ["to recriminate", "to reproach bitterly", "to cast up"], hint: "Usually reciprocal — recriminarse. Old grievances brought out again in an argument." },
        { id: "es-u122l4-increpar", type: "vocab", front: "increpar", reading: "increpar", meaning: "to upbraid / berate", example: { jp: "Un grupo de vecinos increpó al alcalde a la salida.", en: "A group of residents berated the mayor on his way out." }, accept: ["to upbraid", "to berate", "to shout at"], hint: "Loud, public and usually a crowd. The word the press uses when someone is shouted at in the street." },
        { id: "es-u122l4-espetar", type: "vocab", front: "espetar", reading: "espetar", meaning: "to snap / come out with", example: { jp: "Le espetó que no pensaba dar más explicaciones.", en: "He snapped at her that he did not intend to explain any further." }, accept: ["to snap", "to come out with", "to retort"], hint: "Said suddenly, bluntly and to someone's face. Novels use it constantly for a line that lands like a slap." },
      ],
    },
  ],
};
