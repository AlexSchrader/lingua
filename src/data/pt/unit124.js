// PT Unit 124 — A mudança, a transição e a rutura (slot: coverage-b2-14) — B2
// HOW THINGS BECOME OTHER THINGS — slowly, suddenly, and what is left afterwards.
// The scaffold title was "Vocabulary 14 (B2)". u59 Change over time (B1) owns the
// A2/B1 vocabulary of change; this unit is the B2 layer above it, and the
// boundary was checked rather than assumed: a evolução, a alteração and
// a atualização are all ALREADY TAUGHT at u59, u65 and u33 and are used here
// without being re-carded.
//
// SLOT BOUNDARIES:
//   u59 owns a evolução, gradualmente, diminuir, o ritmo; u65 a alteração,
//   renovável; u33 a atualização; u55 a reforma; u80 o legado, o rumo; u63
//   a maturidade. All used here, none re-taught.
//   SIX first-draft fronts were already taught — a alteração, a evolução,
//   a reforma, a atualização, o legado, a mudança's gloss. a mudança KEEPS its
//   front (it is free) but is glossed "change (a shift)" because o troco (u16)
//   already owns the bare gloss "change".
//   a renovação was dropped though its front was free: same lexeme as renovável
//   (u65). Replaced by a reposição. o corte was dropped for the same reason
//   against cortar — replaced by a cisão.
//   a mutação and a metamorfose were cut from the first draft on pedagogical
//   grounds rather than collision: four near-synonyms of transformation in one
//   lesson teaches nothing. a deriva and a inflexão took their places.
//
// EUROPEAN PORTUGUESE: rutura, not ruptura — the post-2009 spelling used in
// Portugal; o rescaldo and a retoma are standard pt-PT press vocabulary.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT124 = {
  id: "pt-u124",
  lang: "pt",
  title: "A mudança, a transição e a rutura",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "pt-u124l1",
      unit: 124,
      lesson: 1,
      title: "Passar a ser outra coisa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe something becoming different in Portuguese — the shift, the transition, the adjustment, the change of direction.",
      items: [
        { id: "pt-u124l1-amudanca", type: "vocab", front: "a mudança", reading: "amudanca", meaning: "change (a shift)", example: { jp: "A mudança de governo trouxe regras diferentes.", en: "The change of government brought different rules." }, drill: { jp: "A mudança de governo trouxe regras novas", en: "The change of government brought new rules" }, accept: ["change", "the change", "shift", "the shift", "alteration", "move", "house move"], hint: "mu-DAN-sa. The general word for change, from mudar. Glossed change (a shift) because o troco (u16) already holds the bare gloss change — that is money given back, a different thing entirely. Uma mudança is also a house move." },
        { id: "pt-u124l1-atransicao", type: "vocab", front: "a transição", reading: "atransicao", meaning: "transition", example: { jp: "A transição foi feita devagar para ninguém ficar perdido.", en: "The transition was made slowly so nobody would be lost." }, drill: { jp: "A transição foi feita devagar", en: "The transition was made slowly" }, accept: ["transition", "the transition", "changeover", "shift", "passage"], hint: "tran-zi-SOWN. Moving from one state to another over a period, with both ends visible. In Portugal a transição democrática names the years after 1974." },
        { id: "pt-u124l1-oajustamento", type: "vocab", front: "o ajustamento", reading: "oajustamento", meaning: "adjustment", example: { jp: "O ajustamento dos preços foi pequeno mas todos deram por ele.", en: "The adjustment of prices was small but everyone noticed it." }, drill: { jp: "O ajustamento dos preços foi pequeno", en: "The adjustment of prices was small" }, accept: ["adjustment", "the adjustment", "fine-tuning", "correction", "realignment"], hint: "a-zhush-ta-MEN-tu. A small corrective change to bring something into line. In economics um ajustamento is the painful kind — Portugal's programa de ajustamento ran 2011 to 2014." },
        { id: "pt-u124l1-atransformacao", type: "vocab", front: "a transformação", reading: "atransformacao", meaning: "transformation", example: { jp: "A transformação do bairro foi tão grande que já ninguém o conhece.", en: "The transformation of the neighbourhood was so great that nobody recognises it." }, drill: { jp: "A transformação do bairro foi grande", en: "The transformation of the neighbourhood was great" }, accept: ["transformation", "the transformation", "overhaul", "complete change", "conversion"], hint: "tranzh-for-ma-SOWN. Change deep enough that the thing is no longer the same. Where a mudança is neutral, a transformação claims the result is radically different." },
        { id: "pt-u124l1-aderiva", type: "vocab", front: "a deriva", reading: "aderiva", meaning: "drift", example: { jp: "A deriva do projeto começou quando mudaram as pessoas.", en: "The project's drift began when the people changed." }, drill: { jp: "A deriva do projeto começou cedo", en: "The project's drift began early" }, accept: ["drift", "the drift", "drifting", "aimless movement", "slippage"], hint: "de-REE-va. Unplanned movement away from where you meant to be. À deriva means adrift, of a boat or a life — andar à deriva. It implies nobody is steering." },
        { id: "pt-u124l1-ainflexao", type: "vocab", front: "a inflexão", reading: "ainflexao", meaning: "shift in direction", example: { jp: "A inflexão na política do país deu-se depois das eleições.", en: "The shift in the country's policy came after the elections." }, drill: { jp: "A inflexão na política deu-se depois", en: "The shift in policy came afterwards" }, accept: ["shift in direction", "change of direction", "turn", "inflection", "change of tack"], hint: "in-fle-SOWN. The point where a course bends, and the new direction it takes. Also inflection of the voice — uma inflexão na voz — and in grammar." },
      ],
    },
    {
      id: "pt-u124l2",
      unit: 124,
      lesson: 2,
      title: "Aos poucos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about gradual, managed change in Portuguese — adapting, retraining, replacing, overhauling, restoring.",
      items: [
        { id: "pt-u124l2-aadaptacao", type: "vocab", front: "a adaptação", reading: "aadaptacao", meaning: "adaptation", example: { jp: "A adaptação ao novo horário levou umas semanas.", en: "Adapting to the new timetable took a few weeks." }, drill: { jp: "A adaptação ao novo horário levou semanas", en: "Adapting to the new timetable took weeks" }, accept: ["adaptation", "the adaptation", "adjustment", "adapting", "acclimatisation"], hint: "a-dap-ta-SOWN. Changing yourself to fit conditions, where o ajustamento (l1) is changing a setting to fit a target. Also the adaptation of a book for the screen." },
        { id: "pt-u124l2-areconversao", type: "vocab", front: "a reconversão", reading: "areconversao", meaning: "retraining", example: { jp: "A reconversão dos trabalhadores foi paga pela empresa.", en: "The retraining of the workers was paid for by the company." }, drill: { jp: "A reconversão foi paga pela empresa", en: "The retraining was paid by the company" }, accept: ["retraining", "the retraining", "reskilling", "conversion", "redeployment", "repurposing"], hint: "rre-kon-ver-SOWN. Turning a worker, an industry or a building to a different purpose — reconversão profissional for people, reconversão de um edifício for places." },
        { id: "pt-u124l2-asubstituicao", type: "vocab", front: "a substituição", reading: "asubstituicao", meaning: "replacement", example: { jp: "A substituição das janelas antigas ficou cara.", en: "The replacement of the old windows was expensive." }, drill: { jp: "A substituição das janelas ficou cara", en: "The replacement of the windows was expensive" }, accept: ["replacement", "the replacement", "substitution", "swapping out", "changing over"], hint: "sub-shti-tui-SOWN. Putting a new thing where the old one was. In football a substituição is the substitution, and o substituto the replacement player." },
        { id: "pt-u124l2-aremodelacao", type: "vocab", front: "a remodelação", reading: "aremodelacao", meaning: "overhaul", example: { jp: "A remodelação do serviço mudou quase tudo em seis meses.", en: "The overhaul of the service changed almost everything in six months." }, drill: { jp: "A remodelação mudou quase tudo", en: "The overhaul changed almost everything" }, accept: ["overhaul", "the overhaul", "remodelling", "revamp", "reorganisation", "reshuffle"], hint: "rre-mu-de-la-SOWN. A thorough reworking of a structure. Uma remodelação governamental is a cabinet reshuffle — a phrase Portuguese news uses several times a year." },
        { id: "pt-u124l2-amodernizacao", type: "vocab", front: "a modernização", reading: "amodernizacao", meaning: "modernisation", example: { jp: "A modernização das escolas demorou mais de dez anos.", en: "The modernisation of the schools took more than ten years." }, drill: { jp: "A modernização das escolas demorou anos", en: "The modernisation of the schools took years" }, accept: ["modernisation", "the modernisation", "modernization", "updating", "bringing up to date"], hint: "mu-der-ni-za-SOWN. Bringing something up to current standards. Chosen over a atualização, which is already taught at u33 for the software sense." },
        { id: "pt-u124l2-areposicao", type: "vocab", front: "a reposição", reading: "areposicao", meaning: "restoration", example: { jp: "A reposição do serviço foi feita na manhã seguinte.", en: "The restoration of the service was done the following morning." }, drill: { jp: "A reposição do serviço foi feita cedo", en: "The restoration of the service was done early" }, accept: ["restoration", "the restoration", "reinstatement", "putting back", "replenishment", "restocking"], hint: "rre-pu-zi-SOWN, from repor, to put back. Restoring something to how it was — of a service, of pay cuts, of stock on a shelf. Not restoration in the heritage sense, which is o restauro." },
      ],
    },
    {
      id: "pt-u124l3",
      unit: 124,
      lesson: 3,
      title: "De repente",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe an abrupt break in Portuguese — rupture, split, collapse, the turning point, the shock, the reversal.",
      items: [
        { id: "pt-u124l3-arutura", type: "vocab", front: "a rutura", reading: "arutura", meaning: "rupture", example: { jp: "A rutura entre os dois aconteceu de repente.", en: "The rupture between the two happened suddenly." }, drill: { jp: "A rutura entre os dois foi rápida", en: "The rupture between the two was quick" }, accept: ["rupture", "the rupture", "break", "the break", "breakdown", "split", "breach"], hint: "rru-TOO-ra. A definitive break — of relations, of a pipe, of a tendon. Spelled without the p in Portugal since 2009; older texts and Brazil print ruptura." },
        { id: "pt-u124l3-acisao", type: "vocab", front: "a cisão", reading: "acisao", meaning: "split (schism)", example: { jp: "A cisão dentro do grupo deixou duas partes a falar mal uma da outra.", en: "The split inside the group left two sides speaking ill of each other." }, drill: { jp: "A cisão no grupo deixou duas partes", en: "The split in the group left two sides" }, accept: ["split", "the split", "schism", "division", "rift", "breakaway"], hint: "si-ZOWN. A group dividing into factions, more specific than a rutura — it names the two pieces. Chosen over o corte, which is the same lexeme as the taught verb cortar." },
        { id: "pt-u124l3-ocolapso", type: "vocab", front: "o colapso", reading: "ocolapso", meaning: "collapse", example: { jp: "O colapso do sistema deixou tudo parado durante horas.", en: "The collapse of the system left everything stopped for hours." }, drill: { jp: "O colapso do sistema parou tudo", en: "The collapse of the system stopped everything" }, accept: ["collapse", "the collapse", "breakdown", "failure", "crash"], hint: "ku-LAP-su. Sudden total failure — of a structure, a system or a person. Entrar em colapso is to collapse. Distinct from o abatimento (u115), which is ground giving way." },
        { id: "pt-u124l3-aviragem", type: "vocab", front: "a viragem", reading: "aviragem", meaning: "turning point", example: { jp: "A viragem deu-se no dia em que mudaram de ideias.", en: "The turning point came on the day they changed their minds." }, drill: { jp: "A viragem deu-se nesse mesmo dia", en: "The turning point came that very day" }, accept: ["turning point", "the turning point", "turn", "the turn", "about-turn", "watershed"], hint: "vi-RA-zhayn, from virar, to turn. The moment a course changes decisively. A viragem do século is the turn of the century." },
        { id: "pt-u124l3-oabalo", type: "vocab", front: "o abalo", reading: "oabalo", meaning: "tremor", example: { jp: "O abalo sentiu-se em toda a região durante alguns segundos.", en: "The tremor was felt across the whole region for a few seconds." }, drill: { jp: "O abalo sentiu-se em toda a região", en: "The tremor was felt across the whole region" }, accept: ["tremor", "the tremor", "shock", "the shock", "earthquake", "jolt", "blow"], hint: "a-BA-lu. An earth tremor — um abalo de terra — and equally an emotional shock. Abalar is to shake, and both senses stay live in the same word." },
        { id: "pt-u124l3-ainversao", type: "vocab", front: "a inversão", reading: "ainversao", meaning: "reversal", example: { jp: "A inversão da decisão apanhou toda a gente de surpresa.", en: "The reversal of the decision caught everyone by surprise." }, drill: { jp: "A inversão da decisão surpreendeu todos", en: "The reversal of the decision surprised everyone" }, accept: ["reversal", "the reversal", "inversion", "turnaround", "about-face", "U-turn"], hint: "in-ver-SOWN. Turning something to its opposite. Inversão de marcha is a U-turn on a Portuguese road sign, and the political sense borrows directly from it." },
      ],
    },
    {
      id: "pt-u124l4",
      unit: 124,
      lesson: 4,
      title: "O que fica depois",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the aftermath in Portuguese — traces, after-effects, the upturn, the settling down, the step backwards.",
      items: [
        { id: "pt-u124l4-ovestigio", type: "vocab", front: "o vestígio", reading: "ovestigio", meaning: "trace (remnant)", example: { jp: "O vestígio da antiga fábrica é só uma parede.", en: "The only trace of the old factory is a wall." }, drill: { jp: "O vestígio da fábrica é uma parede", en: "The trace of the factory is a wall" }, accept: ["trace", "the trace", "remnant", "vestige", "sign", "remains"], hint: "vesh-TEE-zhiu. What little is left to show something was there. In an investigation os vestígios are the forensic traces — the standard Portuguese police word." },
        { id: "pt-u124l4-orescaldo", type: "vocab", front: "o rescaldo", reading: "orescaldo", meaning: "aftermath", example: { jp: "No rescaldo das eleições, ninguém quis falar com a imprensa.", en: "In the aftermath of the elections, nobody wanted to speak to the press." }, drill: { jp: "O rescaldo das eleições foi duro", en: "The aftermath of the elections was hard" }, accept: ["aftermath", "the aftermath", "wake", "fallout", "mopping up", "cooling embers"], hint: "rresh-KAL-du. Literally the damping down of embers after a fire — a rescaldo is a real stage of Portuguese firefighting. Figuratively the period just after any big event." },
        { id: "pt-u124l4-asequela", type: "vocab", front: "a sequela", reading: "asequela", meaning: "after-effect", example: { jp: "A sequela da doença ficou com ele durante anos.", en: "The after-effect of the illness stayed with him for years." }, drill: { jp: "A sequela da doença ficou anos", en: "The after-effect of the illness lasted years" }, accept: ["after-effect", "the after-effect", "aftereffect", "lasting effect", "complication", "sequel"], hint: "se-KWE-la. A lasting consequence, usually medical and usually plural — ficou com sequelas. The film-sequel sense exists but Portuguese normally says a continuação for that." },
        { id: "pt-u124l4-aretoma", type: "vocab", front: "a retoma", reading: "aretoma", meaning: "pick-up (upturn)", example: { jp: "A retoma começou devagar mas não parou mais.", en: "The upturn began slowly but never stopped after that." }, drill: { jp: "A retoma começou devagar", en: "The upturn began slowly" }, accept: ["pick-up", "the pick-up", "upturn", "recovery", "resumption", "trade-in"], hint: "rre-TO-ma, from retomar, to take up again. Economic recovery after a downturn, and in a Portuguese car showroom a retoma is the trade-in of your old car." },
        { id: "pt-u124l4-aestabilizacao", type: "vocab", front: "a estabilização", reading: "aestabilizacao", meaning: "stabilisation", example: { jp: "A estabilização dos preços só veio no ano seguinte.", en: "The stabilisation of prices only came the following year." }, drill: { jp: "A estabilização dos preços veio depois", en: "The stabilisation of prices came later" }, accept: ["stabilisation", "the stabilisation", "stabilization", "settling down", "steadying"], hint: "shta-bi-li-za-SOWN. Things stopping moving up and down. The last phase in the sequence this lesson describes: rutura, rescaldo, retoma, estabilização." },
        { id: "pt-u124l4-oretrocesso", type: "vocab", front: "o retrocesso", reading: "oretrocesso", meaning: "setback", example: { jp: "O retrocesso nos direitos das mulheres preocupou muita gente.", en: "The setback in women's rights worried a lot of people." }, drill: { jp: "O retrocesso nos direitos preocupou muitos", en: "The setback in rights worried many" }, accept: ["setback", "the setback", "regression", "step backwards", "rollback", "reversal of progress"], hint: "rre-tru-SE-su. Going backwards from progress already made — stronger and more political than a simple fall. Um retrocesso civilizacional is the phrase Portuguese commentary reaches for." },
      ],
    },
  ],
};
