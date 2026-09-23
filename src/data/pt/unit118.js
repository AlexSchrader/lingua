// PT Unit 118 — A norma, a exceção e o procedimento (slot: coverage-b2-8) — B2
// THE LANGUAGE OF ADMINISTRATION: what the rule is, when it does not apply, how
// a file moves, and what happens if you ignore it. The scaffold title was
// "Vocabulary 8 (B2)". u92 Politics and law (block 2) owns politics and courts;
// this unit owns the counter, the form and the ruling — the register a resident
// in Portugal meets constantly and a law course never teaches.
//
// SLOT BOUNDARIES:
//   u44 owns a norma, a validade, a autorização; u56 o procedimento, o processo;
//   u58 o critério; u61 o requisito, a exceção, a infração, a sanção,
//   o regulamento, obrigatório; u31 the VERB parecer. All used here, none
//   re-taught.
//   SEVEN first-draft fronts for this unit were already taught and were caught by
//   the probe before a card existed: a norma, o critério, o requisito,
//   a exceção, o procedimento, a infração, a sanção. o parecer was rejected for
//   a different reason and it is the instructive one — the FRONT was free, but
//   its bare form collides with the taught VERB parecer (u31l4), which is the
//   same lexeme wearing a different hat. A front-uniqueness check cannot see
//   that; only a bare-form check can. Replacement: a deliberação.
//   o cumprimento was also dropped: it is the same lexeme as o incumprimento,
//   which block 3 had drafted one unit earlier at u116. Replaced by a observância.
//
// EUROPEAN PORTUGUESE: a coima, o despacho, o indeferimento and a praxe are the
// actual words on Portuguese administrative paper; a praxe additionally carries
// the university hazing sense, flagged in its hint.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT118 = {
  id: "pt-u118",
  lang: "pt",
  title: "A norma, a exceção e o procedimento",
  order: 118,
  stage: "b2",
  lessons: [
    {
      id: "pt-u118l1",
      unit: 118,
      lesson: 1,
      title: "O que manda",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "State what a rule is in formal Portuguese — the custom, the precept, the guideline and the condition attached.",
      items: [
        { id: "pt-u118l1-apraxe", type: "vocab", front: "a praxe", reading: "apraxe", meaning: "customary practice", example: { jp: "A praxe da casa é avisar com oito dias.", en: "The practice of the house is to give eight days' notice." }, drill: { jp: "A praxe da casa é avisar cedo", en: "The practice of the house is to give notice early" }, accept: ["customary practice", "the customary practice", "custom", "usual practice", "the done thing", "convention"], hint: "PRA-she. What is normally done, with no law behind it — é da praxe means it is the usual thing. In Portugal a praxe is ALSO the university initiation ritual, which is what most search results will show you, so the everyday sense needs holding on to." },
        { id: "pt-u118l1-opreceito", type: "vocab", front: "o preceito", reading: "opreceito", meaning: "precept", example: { jp: "O preceito antigo diz que ninguém pode ser julgado duas vezes pelo mesmo.", en: "The old precept says nobody may be judged twice for the same thing." }, drill: { jp: "O preceito antigo diz isso mesmo", en: "The old precept says exactly that" }, accept: ["precept", "the precept", "principle", "rule", "tenet"], hint: "pre-SAY-tu. A stated rule of conduct, moral or legal. Weightier than a praxe and older than a diretriz — the word for a rule that is meant to stand." },
        { id: "pt-u118l1-adiretriz", type: "vocab", front: "a diretriz", reading: "adiretriz", meaning: "guideline", example: { jp: "A diretriz nova chegou aos serviços em janeiro.", en: "The new guideline reached the offices in January." }, drill: { jp: "A diretriz nova chegou em janeiro", en: "The new guideline arrived in January" }, accept: ["guideline", "the guideline", "directive", "instruction", "policy line"], hint: "di-re-TRIZH. Usually plural — as diretrizes, the lines an organisation is told to work along. European directives are as diretivas, a different word, and the two are easy to blur." },
        { id: "pt-u118l1-acondicionante", type: "vocab", front: "a condicionante", reading: "acondicionante", meaning: "limiting condition", example: { jp: "A condicionante do terreno não deixa construir mais alto.", en: "The condition attached to the land does not allow building any higher." }, drill: { jp: "A condicionante não deixa construir alto", en: "The limiting condition does not allow building high" }, accept: ["limiting condition", "the limiting condition", "constraint", "restriction", "limiting factor"], hint: "kon-di-si-u-NAN-te. A factor that limits what may be done, not a condition you must satisfy — that is o requisito (u61). Planning documents are full of as condicionantes." },
        { id: "pt-u118l1-opressuposto", type: "vocab", front: "o pressuposto", reading: "opressuposto", meaning: "premise (assumption)", example: { jp: "O pressuposto do estudo é que as pessoas dizem a verdade.", en: "The premise of the study is that people tell the truth." }, drill: { jp: "O pressuposto do estudo é simples", en: "The premise of the study is simple" }, accept: ["premise", "the premise", "assumption", "the assumption", "presupposition", "starting point"], hint: "pre-su-POSH-tu. What is taken as given before the argument starts. Partir do pressuposto que is to proceed on the assumption that — a standard move in Portuguese academic writing." },
        { id: "pt-u118l1-aformalidade", type: "vocab", front: "a formalidade", reading: "aformalidade", meaning: "formality", example: { jp: "A formalidade é curta mas sem ela nada segue.", en: "The formality is short but without it nothing proceeds." }, drill: { jp: "A formalidade é curta mas necessária", en: "The formality is short but necessary" }, accept: ["formality", "the formality", "procedural step", "red tape"], hint: "for-ma-li-DA-de. A required step whose content matters less than its having been done — é só uma formalidade. Also formality of manner, as in English." },
      ],
    },
    {
      id: "pt-u118l2",
      unit: 118,
      lesson: 2,
      title: "Quando não se aplica",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Carve out an exception in formal Portuguese — except, save for, exempt, with the caveat that.",
      items: [
        { id: "pt-u118l2-salvo", type: "vocab", front: "salvo", reading: "salvo", meaning: "save for", example: { jp: "Todos têm de pagar salvo os que têm menos de seis anos.", en: "Everyone has to pay save for those under six." }, drill: { jp: "Todos pagam salvo os mais novos", en: "Everyone pays save for the youngest" }, accept: ["save for", "save", "except for", "except", "barring", "unless"], hint: "SAL-vu. The formal except — salvo indicação em contrário, unless stated otherwise, is on half the notices in Portugal. It is also the adjective safe, as in são e salvo, safe and sound." },
        { id: "pt-u118l2-exceto", type: "vocab", front: "exceto", reading: "exceto", meaning: "except", example: { jp: "A loja abre todos os dias exceto ao domingo.", en: "The shop opens every day except Sunday." }, drill: { jp: "A loja abre todos os dias exceto domingo", en: "The shop opens every day except Sunday" }, accept: ["except", "except for", "apart from", "other than", "excepting"], hint: "ei-SE-tu. The everyday except, where salvo is the formal one. Spelled without the p since the 2009 orthographic agreement — older Portuguese texts print excepto." },
        { id: "pt-u118l2-adispensa", type: "vocab", front: "a dispensa", reading: "adispensa", meaning: "exemption", example: { jp: "A dispensa foi dada a quem já tinha feito o mesmo curso.", en: "The exemption was given to those who had already done the same course." }, drill: { jp: "A dispensa foi dada a alguns alunos", en: "The exemption was given to some students" }, accept: ["exemption", "the exemption", "waiver", "dispensation", "excusal"], hint: "dish-PEN-sa. Being formally let off something otherwise required. Careful with the near-twin a despensa, the larder — one letter, entirely different room." },
        { id: "pt-u118l2-aderrogacao", type: "vocab", front: "a derrogação", reading: "aderrogacao", meaning: "derogation", example: { jp: "A derrogação permite ao país não seguir a regra durante dois anos.", en: "The derogation allows the country not to follow the rule for two years." }, drill: { jp: "A derrogação permite não seguir a regra", en: "The derogation allows not following the rule" }, accept: ["derogation", "the derogation", "opt-out", "exemption from a rule", "partial repeal"], hint: "de-rru-ga-SOWN. Formally setting aside part of a rule for a particular case — the EU word, and common in Portuguese public administration. Ab-rogação is repealing the whole thing." },
        { id: "pt-u118l2-aressalva", type: "vocab", front: "a ressalva", reading: "aressalva", meaning: "caveat", example: { jp: "A ressalva no fim do texto muda tudo o que vem antes.", en: "The caveat at the end of the text changes everything that comes before." }, drill: { jp: "A ressalva no fim muda tudo", en: "The caveat at the end changes everything" }, accept: ["caveat", "the caveat", "proviso", "qualification", "reservation", "rider"], hint: "rre-SAL-va, from ressalvar, to safeguard. The sentence that protects an exception — com a ressalva de que, with the caveat that. Common in careful speech as well as in writing." },
        { id: "pt-u118l2-odesvio", type: "vocab", front: "o desvio", reading: "odesvio", meaning: "deviation", example: { jp: "O desvio à regra tem de ser explicado por escrito.", en: "The deviation from the rule has to be explained in writing." }, drill: { jp: "O desvio à regra tem de ser explicado", en: "The deviation from the rule has to be explained" }, accept: ["deviation", "the deviation", "departure", "divergence", "detour", "diversion"], hint: "desh-VEE-u. Going off the expected line. Also the literal traffic diversion on a road sign, and desvio padrão is the statistical standard deviation." },
      ],
    },
    {
      id: "pt-u118l3",
      unit: 118,
      lesson: 3,
      title: "Como anda o processo",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Follow an application through a Portuguese office — the steps, the enquiry, the ruling, the refusal.",
      items: [
        { id: "pt-u118l3-oexpediente", type: "vocab", front: "o expediente", reading: "oexpediente", meaning: "administrative routine", example: { jp: "O expediente do serviço acaba às cinco da tarde.", en: "The office's business day ends at five in the afternoon." }, drill: { jp: "O expediente acaba às cinco", en: "The office routine ends at five" }, accept: ["administrative routine", "the administrative routine", "office business", "business hours", "day-to-day business", "expedient"], hint: "eish-pe-di-EN-te. The ordinary daily running of an office — horário de expediente is opening hours. In another sense um expediente is a clever way round a difficulty." },
        { id: "pt-u118l3-otramite", type: "vocab", front: "o trâmite", reading: "otramite", meaning: "formal step", example: { jp: "O trâmite seguinte é esperar pela resposta dos serviços.", en: "The next formal step is to wait for the offices' reply." }, drill: { jp: "O trâmite seguinte é esperar", en: "The next formal step is to wait" }, accept: ["formal step", "the formal step", "procedural step", "channel", "formalities", "proceedings"], hint: "TRA-mi-te, stress on the first syllable. Almost always plural — os trâmites legais, the legal channels. One prescribed step in a sequence, where o procedimento (u56) is the whole sequence." },
        { id: "pt-u118l3-adiligencia", type: "vocab", front: "a diligência", reading: "adiligencia", meaning: "formal enquiry", example: { jp: "A diligência do tribunal foi marcada para a semana seguinte.", en: "The court's enquiry was scheduled for the following week." }, drill: { jp: "A diligência foi marcada para a semana seguinte", en: "The enquiry was scheduled for the following week" }, accept: ["formal enquiry", "the formal enquiry", "enquiry", "inquiry", "procedural act", "diligence"], hint: "di-li-ZHEN-si-a. An official act of investigation — a hearing, an inspection, a taking of evidence. It also keeps the older sense of diligence, care taken." },
        { id: "pt-u118l3-odespacho", type: "vocab", front: "o despacho", reading: "odespacho", meaning: "official ruling", example: { jp: "O despacho do ministro saiu no jornal oficial.", en: "The minister's ruling appeared in the official gazette." }, drill: { jp: "O despacho do ministro saiu ontem", en: "The minister's ruling came out yesterday" }, accept: ["official ruling", "the official ruling", "ruling", "decision", "order", "dispatch"], hint: "desh-PA-shu. A written decision by an official, published and binding. Also the ordinary sense of dispatch, sending something off — and in Brazil a religious offering, a sense Portugal does not use." },
        { id: "pt-u118l3-adeliberacao", type: "vocab", front: "a deliberação", reading: "adeliberacao", meaning: "formal decision", example: { jp: "A deliberação foi tomada por todos os que estavam presentes.", en: "The decision was taken by everyone who was present." }, drill: { jp: "A deliberação foi tomada por todos", en: "The decision was taken by everyone" }, accept: ["formal decision", "the formal decision", "resolution", "decision", "deliberation"], hint: "de-li-be-ra-SOWN. A decision reached by a body that met and voted, against o despacho, which one official signs alone. Deliberar is to resolve, not to ponder." },
        { id: "pt-u118l3-oindeferimento", type: "vocab", front: "o indeferimento", reading: "oindeferimento", meaning: "rejection of an application", example: { jp: "O indeferimento do pedido veio sem explicação nenhuma.", en: "The rejection of the application came with no explanation at all." }, drill: { jp: "O indeferimento veio sem explicação", en: "The rejection came without explanation" }, accept: ["rejection of an application", "rejection", "the rejection", "refusal", "turning down", "dismissal"], hint: "in-de-fe-ri-MEN-tu. The formal no. Its opposite, o deferimento, is the yes — and deferido stamped on your paper is the word you want to see." },
      ],
    },
    {
      id: "pt-u118l4",
      unit: 118,
      lesson: 4,
      title: "Cumprir ou pagar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about obeying rules and what follows if you do not — compliance, breach, fines and expiry.",
      items: [
        { id: "pt-u118l4-aobservancia", type: "vocab", front: "a observância", reading: "aobservancia", meaning: "observance", example: { jp: "A observância das regras é igual para todos.", en: "Observance of the rules is the same for everyone." }, drill: { jp: "A observância das regras é igual para todos", en: "Observance of the rules is the same for all" }, accept: ["observance", "the observance", "compliance", "adherence", "keeping to"], hint: "ob-ser-VAN-si-a. Actually keeping to a rule. Chosen over o cumprimento because that is the same lexeme as o incumprimento, taught one unit earlier — a distinction no validator can see." },
        { id: "pt-u118l4-aconformidade", type: "vocab", front: "a conformidade", reading: "aconformidade", meaning: "conformity", example: { jp: "A conformidade do material foi confirmada antes da entrega.", en: "The conformity of the material was confirmed before delivery." }, drill: { jp: "A conformidade do material foi confirmada", en: "The conformity of the material was confirmed" }, accept: ["conformity", "the conformity", "compliance", "conformance", "accordance"], hint: "kon-for-mi-DA-de. Matching a required standard, said of things rather than people. Em conformidade com is the formal in accordance with." },
        { id: "pt-u118l4-atransgressao", type: "vocab", front: "a transgressão", reading: "atransgressao", meaning: "transgression", example: { jp: "A transgressão foi pequena mas ficou registada.", en: "The transgression was small but it was recorded." }, drill: { jp: "A transgressão foi pequena mas ficou registada", en: "The transgression was small but was recorded" }, accept: ["transgression", "the transgression", "breach", "violation", "offence"], hint: "tranzh-gre-SOWN. Crossing a line that was set. A infração (u61) is the technical breach of a specific rule; a transgressão carries a shade of moral fault as well." },
        { id: "pt-u118l4-apenalizacao", type: "vocab", front: "a penalização", reading: "apenalizacao", meaning: "penalising", example: { jp: "A penalização de quem entrega tarde está escrita no contrato.", en: "The penalising of those who deliver late is written into the contract." }, drill: { jp: "A penalização de quem entrega tarde existe", en: "The penalising of late delivery exists" }, accept: ["penalising", "penalizing", "the penalising", "penalisation", "penalty", "imposing a penalty"], hint: "pe-na-li-za-SOWN. The act of imposing a disadvantage, where a sanção (u61) is the measure itself. Glossed as the act on purpose, because the noun penalty already belongs to a sanção." },
        { id: "pt-u118l4-acoima", type: "vocab", front: "a coima", reading: "acoima", meaning: "administrative fine", example: { jp: "A coima chegou pelo correio três semanas depois.", en: "The fine arrived by post three weeks later." }, drill: { jp: "A coima chegou pelo correio", en: "The fine arrived by post" }, accept: ["administrative fine", "the administrative fine", "fine", "the fine", "penalty notice"], hint: "KOI-ma. The pt-PT word for a fine imposed by an authority rather than a court — parking, speeding, late filing. Brazil says multa; Portugal uses both, with coima the formal one." },
        { id: "pt-u118l4-acaducidade", type: "vocab", front: "a caducidade", reading: "acaducidade", meaning: "lapsing", example: { jp: "A caducidade da licença obriga a pedir tudo outra vez.", en: "The lapsing of the licence obliges you to apply for everything again." }, drill: { jp: "A caducidade da licença obriga a pedir outra", en: "The lapsing of the licence forces a new application" }, accept: ["lapsing", "the lapsing", "expiry", "lapse", "becoming void", "time-barring"], hint: "ka-du-si-DA-de. A right or permission dying of its own age, with nobody cancelling it. Caducar is the verb — o prazo caducou, the deadline lapsed." },
      ],
    },
  ],
};
