// ES Unit 100 — Careers and organizations (slot: careers) — B2
// Authored: block 1, group 1. 4 lessons x 6 cards.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it.
//   OWNS: How an institution is SHAPED — hierarchy, governance, mandate, delegation,
//         restructuring, a career's arc.
//   NOT:  The working day and getting results (u56) and the market a firm trades in
//         (u93).
export const ES_UNIT100 = {
  id: "es-u100",
  lang: "es",
  title: "Las organizaciones y la carrera profesional",
  order: 100,
  stage: "b2",
  lessons: [
    {
      id: "es-u100l1",
      unit: 100,
      lesson: 1,
      title: "La jerarquía",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how an organisation is arranged: read an org chart, name the ranking ladder and someone's rank, refer to the top and to those below, and hand work down.",
      items: [
        { id: "es-u100l1-elorganigrama", type: "vocab", front: "el organigrama", reading: "elorganigrama", meaning: "the org chart", example: { jp: "El nuevo organigrama reduce dos niveles de mando.", en: "The new org chart removes two levels of management." }, accept: ["the org chart", "the organisation chart", "the structure diagram"], hint: "The diagram of who reports to whom. Masculine despite the -a, like el programa." },
        { id: "es-u100l1-elescalafon", type: "vocab", front: "el escalafón", reading: "elescalafon", meaning: "the ranking ladder", example: { jp: "Subió en el escalafón sin cambiar nunca de empresa.", en: "He rose up the ladder without ever changing company." }, accept: ["the ranking ladder", "the ladder", "the pecking order", "the seniority list"], hint: "The formal order of ranks, especially in the civil service and the army." },
        { id: "es-u100l1-elrango", type: "vocab", front: "el rango", reading: "elrango", meaning: "the rank", example: { jp: "Dos personas del mismo rango firmaron el informe.", en: "Two people of the same rank signed the report." }, accept: ["the rank", "the grade", "the standing"], hint: "One's position in the order. De alto rango = high-ranking." },
        { id: "es-u100l1-lacupula", type: "vocab", front: "la cúpula", reading: "lacupula", meaning: "the leadership / top brass", example: { jp: "La cúpula del partido se reunió sin la prensa.", en: "The party leadership met without the press." }, accept: ["the leadership", "the top brass", "the upper echelons", "the dome"], hint: "Literally a dome. Figuratively the small group at the very top of an institution." },
        { id: "es-u100l1-elsubordinado", type: "vocab", front: "el subordinado", reading: "elsubordinado", meaning: "the subordinate", example: { jp: "Ningún subordinado se atrevió a contradecirle.", en: "No subordinate dared to contradict him." }, accept: ["the subordinate", "the underling", "the junior"], hint: "Someone below you in the chain. Also an adjective: una cláusula subordinada." },
        { id: "es-u100l1-delegar", type: "vocab", front: "delegar", reading: "delegar", meaning: "to delegate", example: { jp: "Aprendió tarde a delegar en su equipo.", en: "He learned late to delegate to his team." }, accept: ["to delegate", "to hand over", "to devolve"], hint: "delegar algo EN alguien. La delegación is both the act and a branch office." },
      ],
    },
    {
      id: "es-u100l2",
      unit: 100,
      lesson: 2,
      title: "El mandato y la gobernanza",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how a body is governed: name a mandate and its governance, cite the statutes, refer to a foundation, and complain about red tape or a closed profession.",
      items: [
        { id: "es-u100l2-elmandato", type: "vocab", front: "el mandato", reading: "elmandato", meaning: "the mandate / term", example: { jp: "Durante su mandato la plantilla creció el doble.", en: "During his term the workforce doubled." }, accept: ["the mandate", "the term of office", "the remit"], hint: "Both the period someone holds office and the authority they were given to act." },
        { id: "es-u100l2-lagobernanza", type: "vocab", front: "la gobernanza", reading: "lagobernanza", meaning: "governance", example: { jp: "El informe critica la gobernanza de la institución.", en: "The report criticises the governance of the institution." }, accept: ["governance", "the governance"], hint: "How decisions get taken and who answers for them. Newer and narrower than el gobierno." },
        { id: "es-u100l2-elestatuto", type: "vocab", front: "el estatuto", reading: "elestatuto", meaning: "the statutes / charter", example: { jp: "El estatuto no permite un tercer mandato.", en: "The statutes do not allow a third term." }, accept: ["the statutes", "the charter", "the bylaws", "the rules"], hint: "The founding rules of an organisation. Often plural: los estatutos de la asociación." },
        { id: "es-u100l2-lafundacion", type: "vocab", front: "la fundación", reading: "lafundacion", meaning: "the foundation", example: { jp: "Una fundación privada financia todo el archivo.", en: "A private foundation funds the whole archive." }, accept: ["the foundation", "the trust", "the founding"], hint: "The non-profit body, and also the act of founding: la fundación de la ciudad." },
        { id: "es-u100l2-laburocracia", type: "vocab", front: "la burocracia", reading: "laburocracia", meaning: "bureaucracy / red tape", example: { jp: "La burocracia retrasó el permiso más de un año.", en: "Red tape delayed the permit by more than a year." }, accept: ["bureaucracy", "red tape", "the bureaucracy"], hint: "The apparatus and, more often, the complaint about it. Burocrático is the adjective." },
        { id: "es-u100l2-elgremio", type: "vocab", front: "el gremio", reading: "elgremio", meaning: "the trade body", example: { jp: "Todo el gremio está en contra de la nueva norma.", en: "The whole trade is against the new rule." }, accept: ["the trade", "the profession", "the guild", "the industry"], hint: "Everyone who does the same job, seen as one body — not the craft itself (el oficio) or the individual career (la profesión). Historically a medieval guild." },
      ],
    },
    {
      id: "es-u100l3",
      unit: 100,
      lesson: 3,
      title: "El relevo y la salida",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe people arriving and leaving posts: name a handover and a succession, say a post is vacant, and distinguish resigning from being removed.",
      items: [
        { id: "es-u100l3-elrelevo", type: "vocab", front: "el relevo", reading: "elrelevo", meaning: "the handover", example: { jp: "El relevo se hizo sin ruido y en pocas semanas.", en: "The handover was done quietly and in a few weeks." }, accept: ["the handover", "the changeover", "the relief", "the relay"], hint: "Tomar el relevo = to take over. Relevar a alguien is to relieve them of a post." },
        { id: "es-u100l3-lasucesion", type: "vocab", front: "la sucesión", reading: "lasucesion", meaning: "the succession", example: { jp: "La sucesión al frente de la empresa dividió a la familia.", en: "The succession at the head of the company divided the family." }, accept: ["the succession", "the sequence"], hint: "Who follows whom in a post, and also a series of things: una sucesión de errores." },
        { id: "es-u100l3-lavacante", type: "vocab", front: "la vacante", reading: "lavacante", meaning: "the vacancy", example: { jp: "La vacante sigue abierta después de seis meses.", en: "The vacancy is still open after six months." }, accept: ["the vacancy", "the opening", "the vacant post"], hint: "Cubrir una vacante = to fill a vacancy. Also an adjective: un puesto vacante." },
        { id: "es-u100l3-elcese", type: "vocab", front: "el cese", reading: "elcese", meaning: "the removal from office", example: { jp: "Su cese se decidió en una sola reunión.", en: "His removal was decided in a single meeting." }, accept: ["the removal from office", "the dismissal", "the standing down", "the cessation"], hint: "Leaving a post, whether pushed or by agreement. Cesar a alguien is to remove them." },
        { id: "es-u100l3-ladimision", type: "vocab", front: "la dimisión", reading: "ladimision", meaning: "the resignation", example: { jp: "Presentó su dimisión el mismo día del informe.", en: "She handed in her resignation the same day as the report." }, accept: ["the resignation"], hint: "Presentar la dimisión = to hand in one's resignation. Dimitir is the verb, and it is intransitive." },
        { id: "es-u100l3-destituir", type: "vocab", front: "destituir", reading: "destituir", meaning: "to remove from office", example: { jp: "El consejo lo destituyó por unanimidad.", en: "The board removed him from office unanimously." }, accept: ["to remove from office", "to dismiss", "to oust", "to sack"], hint: "Always from a post of authority, and always by someone above. Compare dimitir, which you do yourself." },
      ],
    },
    {
      id: "es-u100l4",
      unit: 100,
      lesson: 4,
      title: "El rumbo de una carrera",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the shape of a working life: talk about a career path and a career break, name a route and a change of field, and refer to a professional profile and a calling.",
      items: [
        { id: "es-u100l4-latrayectoria", type: "vocab", front: "la trayectoria", reading: "latrayectoria", meaning: "the career path", example: { jp: "Su trayectoria pasa por cuatro países y tres idiomas.", en: "Her career runs through four countries and three languages." }, accept: ["the career path", "the career", "the track record", "the trajectory"], hint: "The path a working life has traced, seen as a whole. Also the physical path of a moving object." },
        { id: "es-u100l4-laexcedencia", type: "vocab", front: "la excedencia", reading: "laexcedencia", meaning: "the career break / unpaid leave", example: { jp: "Volvió al mismo puesto después de la excedencia.", en: "She came back to the same post after her career break." }, accept: ["the career break", "unpaid leave", "the leave of absence", "the sabbatical"], hint: "A formal leave that holds your post open, often for years. Pedir una excedencia = to take a career break." },
        { id: "es-u100l4-elitinerario", type: "vocab", front: "el itinerario", reading: "elitinerario", meaning: "the route / pathway", example: { jp: "La empresa tiene dos itinerarios distintos para sus técnicos.", en: "The company has two different pathways for its technicians." }, accept: ["the route", "the pathway", "the itinerary", "the track"], hint: "A planned sequence of steps, in a career or on a journey." },
        { id: "es-u100l4-lareconversion", type: "vocab", front: "la reconversión", reading: "lareconversion", meaning: "the retraining / conversion", example: { jp: "La reconversión del sector dejó a mucha gente sin trabajo.", en: "The conversion of the sector left many people without work." }, accept: ["the retraining", "the conversion", "the restructuring", "the retooling"], hint: "Of a whole industry, and of a person changing field: la reconversión profesional." },
        { id: "es-u100l4-elperfil", type: "vocab", front: "el perfil", reading: "elperfil", meaning: "the profile", example: { jp: "Buscan un perfil que aquí no existe.", en: "They are looking for a profile that does not exist here." }, accept: ["the profile", "the background", "the type"], hint: "The mix of skills and history a post calls for. Also a side view and an online profile." },
        { id: "es-u100l4-lavocacion", type: "vocab", front: "la vocación", reading: "lavocacion", meaning: "the calling", example: { jp: "Dejó el banco por vocación, no por dinero.", en: "She left the bank out of a calling, not for money." }, accept: ["the calling", "the vocation", "the bent"], hint: "Tener vocación de algo = to be cut out for something. Vocacional is the adjective." },
      ],
    },
  ],
};
