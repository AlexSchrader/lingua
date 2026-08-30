// ES Unit 92 — Law and the state (slot: law-state) — B2
// SCAFFOLD STUB. Replace the locked lessons below with 4 real lessons of
// 5-8 cards each (aim 6). Every lesson needs a canDo. Every example may use only
// vocab introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it. Retitle this unit in Spanish when
// you author it: the English title above marks the SLOT, the wording is yours.
//   OWNS: How law is MADE and the state is built — legislation, jurisdiction,
//         constitution, decrees, the machinery of government.
//   NOT:  Crime, investigation and trial (u114) and politics as news (u83). If it
//         happens in a courtroom, it is u114's.
//
// Spanish already teaches 2,094 words across u1–u87. Check src/data/es/TAUGHT-WORDS.md
// before writing EVERY front — a duplicate front is a hard validate:content failure,
// and the es B1 band lost 159 cards to exactly that.
export const ES_UNIT92 = {
  id: "es-u92",
  lang: "es",
  title: "El Estado y la ley",
  order: 92,
  stage: "b2",
  lessons: [
    {
      id: "es-u92l1",
      unit: 92,
      lesson: 1,
      title: "Hacer la ley",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a law through parliament: name a bill and an amendment, say a law was passed or repealed, and tell a decree from an act.",
      items: [
        { id: "es-u92l1-legislar", type: "vocab", front: "legislar", reading: "legislar", meaning: "to legislate", example: { jp: "El parlamento legisla sobre esta materia cada pocos años.", en: "Parliament legislates on this matter every few years." }, accept: ["to legislate", "to make law", "to pass laws"], hint: "legislar SOBRE algo. The noun la legislación is the whole body of law." },
        { id: "es-u92l1-elproyectodeley", type: "vocab", front: "el proyecto de ley", reading: "elproyectodeley", meaning: "the bill", example: { jp: "El proyecto de ley se debatirá la semana que viene.", en: "The bill will be debated next week." }, accept: ["the bill", "the draft law", "the proposed legislation"], hint: "A ley only after it passes; before that it is a proyecto. In some countries also un proyecto de ley orgánica." },
        { id: "es-u92l1-laenmienda", type: "vocab", front: "la enmienda", reading: "laenmienda", meaning: "the amendment", example: { jp: "Presentaron una enmienda que cambia todo el sentido.", en: "They tabled an amendment that changes the whole meaning." }, accept: ["the amendment", "the proposed change"], hint: "Presentar una enmienda = to table an amendment. Enmendar is the verb." },
        { id: "es-u92l1-promulgar", type: "vocab", front: "promulgar", reading: "promulgar", meaning: "to enact / promulgate", example: { jp: "La ley se promulgó en mayo y entró en vigor en julio.", en: "The law was enacted in May and came into force in July." }, accept: ["to enact", "to promulgate", "to pass into law"], hint: "The final signature that turns a bill into law. Notice it is separate from entrar en vigor." },
        { id: "es-u92l1-derogar", type: "vocab", front: "derogar", reading: "derogar", meaning: "to repeal", example: { jp: "El nuevo gobierno derogó la norma anterior.", en: "The new government repealed the previous rule." }, accept: ["to repeal", "to revoke", "to strike down"], hint: "To remove a law from the books. The opposite of promulgar; not the same as ignoring it." },
        { id: "es-u92l1-eldecreto", type: "vocab", front: "el decreto", reading: "eldecreto", meaning: "the decree", example: { jp: "Lo aprobaron por decreto, sin pasar por el parlamento.", en: "They approved it by decree, without going through parliament." }, accept: ["the decree", "the order", "the executive order"], hint: "Government acting alone. Por decreto carries a whiff of bypassing debate." },
      ],
    },
    {
      id: "es-u92l2",
      unit: 92,
      lesson: 2,
      title: "El aparato del Estado",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the machinery of government: the executive, the civil service, a public body, and who has the power or the jurisdiction to act.",
      items: [
        { id: "es-u92l2-elpoderejecutivo", type: "vocab", front: "el poder ejecutivo", reading: "elpoderejecutivo", meaning: "the executive branch", example: { jp: "El poder ejecutivo no puede cambiar esa ley solo.", en: "The executive branch cannot change that law on its own." }, accept: ["the executive", "the executive branch", "the government"], hint: "One of the three: ejecutivo, legislativo, judicial. La separación de poderes is the principle." },
        { id: "es-u92l2-laadministracion", type: "vocab", front: "la administración", reading: "laadministracion", meaning: "the administration / civil service", example: { jp: "La administración tarda meses en responder.", en: "The administration takes months to reply." }, accept: ["the administration", "the civil service", "the public sector"], hint: "The permanent apparatus, not the elected government of the day. La Administración with a capital A in official texts." },
        { id: "es-u92l2-elorganismo", type: "vocab", front: "el organismo", reading: "elorganismo", meaning: "the body / agency", example: { jp: "Un organismo independiente controla las cuentas.", en: "An independent body audits the accounts." }, accept: ["the body", "the agency", "the organization"], hint: "Any official entity with a mandate. It also means an organism in biology." },
        { id: "es-u92l2-elfuncionario", type: "vocab", front: "el funcionario", reading: "elfuncionario", meaning: "the civil servant", example: { jp: "Es funcionaria desde hace quince años.", en: "She has been a civil servant for fifteen years." }, accept: ["the civil servant", "the public official", "the state employee"], hint: "A permanent post won by examination — la oposición. Not simply anyone who works for the state." },
        { id: "es-u92l2-lapotestad", type: "vocab", front: "la potestad", reading: "lapotestad", meaning: "the authority / power to act", example: { jp: "El alcalde no tiene potestad para decidir eso.", en: "The mayor has no authority to decide that." }, accept: ["the authority", "the power", "the competence"], hint: "Legal power to do a thing, formal register. B1's el poder (u83) is broader and blunter." },
        { id: "es-u92l2-lajurisdiccion", type: "vocab", front: "la jurisdicción", reading: "lajurisdiccion", meaning: "the jurisdiction", example: { jp: "Ese caso queda fuera de nuestra jurisdicción.", en: "That case falls outside our jurisdiction." }, accept: ["the jurisdiction", "the remit", "the authority"], hint: "Where a body's power reaches — geographically or by subject." },
      ],
    },
    {
      id: "es-u92l3",
      unit: 92,
      lesson: 3,
      title: "Derechos y garantías",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about constitutional protection: name the constitution and sovereignty, say a right was infringed, and cite a legal provision.",
      items: [
        { id: "es-u92l3-laconstitucion", type: "vocab", front: "la constitución", reading: "laconstitucion", meaning: "the constitution", example: { jp: "La constitución garantiza ese derecho a todos.", en: "The constitution guarantees that right to everyone." }, accept: ["the constitution"], hint: "Constitucional is the adjective; inconstitucional is what a struck-down law is." },
        { id: "es-u92l3-lasoberania", type: "vocab", front: "la soberanía", reading: "lasoberania", meaning: "sovereignty", example: { jp: "Defienden la soberanía del país sobre esos recursos.", en: "They defend the country's sovereignty over those resources." }, accept: ["sovereignty", "self-rule"], hint: "La soberanía nacional, la soberanía popular. Soberano is both the adjective and the monarch." },
        { id: "es-u92l3-lagarantia", type: "vocab", front: "la garantía", reading: "lagarantia", meaning: "the guarantee / safeguard", example: { jp: "Sin garantías legales, nadie firmaría ese contrato.", en: "Without legal safeguards, nobody would sign that contract." }, accept: ["the guarantee", "the safeguard", "the warranty"], hint: "Legal safeguard and shop warranty are the same word. Garantizar was taught in u77." },
        { id: "es-u92l3-elamparo", type: "vocab", front: "el amparo", reading: "elamparo", meaning: "protection / legal remedy", example: { jp: "Pidieron amparo ante el tribunal más alto.", en: "They sought protection from the highest court." }, accept: ["protection", "legal remedy", "shelter"], hint: "Al amparo de la ley = under the protection of the law. In Mexico, el amparo is a specific constitutional action." },
        { id: "es-u92l3-elprecepto", type: "vocab", front: "el precepto", reading: "elprecepto", meaning: "the provision / precept", example: { jp: "Ese precepto no se aplica a los menores.", en: "That provision does not apply to minors." }, accept: ["the provision", "the precept", "the rule"], hint: "One numbered rule inside a law or a code, said formally." },
        { id: "es-u92l3-vulnerar", type: "vocab", front: "vulnerar", reading: "vulnerar", meaning: "to infringe / violate", example: { jp: "La medida vulnera un derecho fundamental.", en: "The measure infringes a fundamental right." }, accept: ["to infringe", "to violate", "to breach"], hint: "Of rights and laws. B1's incumplir (u61) is failing to do what a rule asks; vulnerar is trampling it." },
      ],
    },
    {
      id: "es-u92l4",
      unit: 92,
      lesson: 4,
      title: "Aplicar la norma",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what happens once a rule exists: who must obey it, when it is in force, who is penalized, and how a body rules on a case.",
      items: [
        { id: "es-u92l4-acatar", type: "vocab", front: "acatar", reading: "acatar", meaning: "to abide by / comply with", example: { jp: "Todos los partidos acataron la decisión del tribunal.", en: "All the parties abided by the court's decision." }, accept: ["to abide by", "to comply with", "to accept"], hint: "To obey even when you disagree — that reluctance is built into the word." },
        { id: "es-u92l4-sancionar", type: "vocab", front: "sancionar", reading: "sancionar", meaning: "to penalize / to sanction", example: { jp: "La empresa fue sancionada con una multa muy alta.", en: "The company was penalized with a very high fine." }, accept: ["to penalize", "to fine", "to sanction"], hint: "Two opposite senses: to punish, and (of a head of state) to approve a law. Context decides." },
        { id: "es-u92l4-lavigencia", type: "vocab", front: "la vigencia", reading: "lavigencia", meaning: "the period of validity", example: { jp: "El acuerdo tiene una vigencia de cinco años.", en: "The agreement has a validity of five years." }, accept: ["the validity", "the period in force", "the currency"], hint: "How long something stays in force. Entrar en vigor is the start; vigente (u75) is the state." },
        { id: "es-u92l4-dictaminar", type: "vocab", front: "dictaminar", reading: "dictaminar", meaning: "to rule / issue a finding", example: { jp: "El comité dictaminó que no hubo ninguna falta.", en: "The committee ruled that there had been no misconduct." }, accept: ["to rule", "to issue a finding", "to determine"], hint: "An official body deciding after examining. Un dictamen is the finding itself." },
        { id: "es-u92l4-elordenamiento", type: "vocab", front: "el ordenamiento", reading: "elordenamiento", meaning: "the legal system / body of law", example: { jp: "Esa práctica no cabe en nuestro ordenamiento.", en: "That practice has no place in our legal system." }, accept: ["the legal system", "the body of law", "the legal framework"], hint: "El ordenamiento jurídico: all the law of a country, seen as one ordered whole." },
        { id: "es-u92l4-lacompetencia", type: "vocab", front: "la competencia", reading: "lacompetencia", meaning: "the remit / competence", example: { jp: "Ese asunto no es competencia de este organismo.", en: "That matter is not this body's remit." }, accept: ["the remit", "the competence", "the jurisdiction"], hint: "Careful: it also means competition in business and skill in a person. Ser competencia de alguien = to be someone's business." },
      ],
    },
  ],
};
