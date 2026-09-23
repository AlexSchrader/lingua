// PT Unit 121 — As preposições e as locuções formais (slot: coverage-b2-11) — B2
// THE PREPOSITIONS AND PREPOSITIONAL PHRASES OF WRITTEN PORTUGUESE. The scaffold
// title was "Vocabulary 11 (B2)".
//
// MEASURED, NOT CHOSEN — same argument as u120, and it is the stronger case of
// the two because prepositions are the tightest closed class in the language.
// Block 3 wrote down the inventory of B2 prepositions and prepositional
// locutions from a reference grammar, THEN checked the corpus. Absent from all
// 87 authored pt units: sob, perante, mediante, consoante, ante, após, acerca,
// através, face, aquando, prol, mercê — 12 of 26 probed. Four of them are also
// independently in the top 1000 of an EXTERNAL European-Portuguese frequency
// list with no card anywhere: sob (rank 704), após (897), através (961),
// acerca (990). Two independent instruments, same answer.
//
// ⚠️ CROSS-BLOCK HAZARD FOR BLOCK 1 — read this before merging. u107 Grammar 10
// — formal written structures is block 2's and was unwritten when this was
// authored. Some of these (mediante, aquando de, sob pena de) could legitimately
// have been taught there. Duplicate fronts are a HARD validate:content failure,
// not a warning, so if u107 took any of them the collision surfaces at merge and
// the call is block 1's. Block 3 deliberately did NOT take the discourse
// connectives (contudo, todavia, porém, não obstante, por conseguinte,
// nomeadamente, aliás, designadamente, inclusivamente) even though they are
// measured absent too — those read as u108's theme by its title. The full
// measured list is in the hand-back so nobody has to re-derive it.
//
// SLOT BOUNDARIES:
//   u29 owns por and the contractions; u12 the de/em/a contractions; u53 abaixo
//   de; u76 o âmbito; u52 visto que. All used here, none re-taught.
//   Multi-word fronts are carded whole (acerca de, not acerca) because the
//   preposition is what the learner must produce and the bare stem is not a
//   usable unit — face on its own is a face.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT121 = {
  id: "pt-u121",
  lang: "pt",
  title: "As preposições e as locuções formais",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "pt-u121l1",
      unit: 121,
      lesson: 1,
      title: "As preposições simples",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Use the one-word formal prepositions of written Portuguese — under, before, after, by means of, depending on.",
      items: [
        { id: "pt-u121l1-sob", type: "vocab", front: "sob", reading: "sob", meaning: "under (formal)", example: { jp: "O trabalho foi feito sob a direção de uma equipa nova.", en: "The work was done under the direction of a new team." }, drill: { jp: "O trabalho foi feito sob nova direção", en: "The work was done under new direction" }, accept: ["under", "beneath", "below", "subject to"], hint: "SOB. The abstract under — sob controlo, sob pressão, sob a lei. For physical position Portuguese says debaixo de. Do not confuse with sobre, which is ON or ABOUT and means nearly the opposite." },
        { id: "pt-u121l1-perante", type: "vocab", front: "perante", reading: "perante", meaning: "before (in the presence of)", example: { jp: "Teve de explicar tudo perante o tribunal.", en: "He had to explain everything before the court." }, drill: { jp: "Explicou tudo perante o tribunal", en: "He explained everything before the court" }, accept: ["before", "in the presence of", "in the face of", "faced with", "in front of"], hint: "pe-RAN-te. Before in the sense of facing — a person, an authority, a situation. Never about time: for that Portuguese uses antes de." },
        { id: "pt-u121l1-ante", type: "vocab", front: "ante", reading: "ante", meaning: "faced with", example: { jp: "Ante a falta de respostas, decidiu escrever outra vez.", en: "Faced with the lack of replies, he decided to write again." }, drill: { jp: "Ante a falta de respostas escreveu", en: "Faced with the lack of replies he wrote" }, accept: ["faced with", "in the face of", "before", "confronted with", "given"], hint: "AN-te. A close cousin of perante and rather more literary. Also a live prefix — antebraço forearm, antevéspera two days before — which is the easiest way to remember it." },
        { id: "pt-u121l1-apos", type: "vocab", front: "após", reading: "apos", meaning: "after (formal)", example: { jp: "Após a reunião, ficou tudo decidido.", en: "After the meeting, everything was settled." }, drill: { jp: "Após a reunião ficou tudo decidido", en: "After the meeting everything was settled" }, accept: ["after", "following", "subsequent to", "once"], hint: "a-POSH. The written after; speech says depois de. Note it takes no de: após a reunião, never após de. Um após outro is one after another." },
        { id: "pt-u121l1-mediante", type: "vocab", front: "mediante", reading: "mediante", meaning: "by means of", example: { jp: "O acesso é dado mediante pedido escrito.", en: "Access is granted by means of a written request." }, drill: { jp: "O acesso é dado mediante pedido escrito", en: "Access is granted upon written request" }, accept: ["by means of", "by way of", "upon", "subject to", "through", "on presentation of"], hint: "me-di-AN-te. By means of, and in administrative Portuguese usually on production of — mediante marcação, by appointment; mediante pagamento, on payment. A sign-and-form word." },
        { id: "pt-u121l1-consoante", type: "vocab", front: "consoante", reading: "consoante", meaning: "depending on", example: { jp: "O preço muda consoante a altura do ano.", en: "The price changes depending on the time of year." }, drill: { jp: "O preço muda consoante a altura do ano", en: "The price changes depending on the time of year" }, accept: ["depending on", "according to", "in accordance with", "as", "in line with"], hint: "kon-su-AN-te. Depending on, varying with. Careful: uma consoante is also a consonant, the letter — same spelling, wholly separate word, and both are common." },
      ],
    },
    {
      id: "pt-u121l2",
      unit: 121,
      lesson: 2,
      title: "Falar a respeito de",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Point at a topic or a relation in formal Portuguese — concerning, as regards, in relation to, in the light of.",
      items: [
        { id: "pt-u121l2-acercade", type: "vocab", front: "acerca de", reading: "acercade", meaning: "concerning", example: { jp: "Falaram acerca do que ia mudar no próximo ano.", en: "They spoke concerning what was going to change next year." }, drill: { jp: "Falaram acerca de dinheiro e prazos", en: "They spoke concerning money and deadlines" }, accept: ["concerning", "about", "regarding", "as to", "on the subject of"], hint: "a-SER-ka de. About, in the topical sense. Do not confuse with cerca de, which means approximately — one letter of space, completely different job." },
        { id: "pt-u121l2-quantoa", type: "vocab", front: "quanto a", reading: "quantoa", meaning: "as regards", example: { jp: "Quanto ao dinheiro, ainda não há nada decidido.", en: "As regards the money, nothing has been decided yet." }, drill: { jp: "Quanto a dinheiro nada está decidido", en: "As regards money nothing is decided" }, accept: ["as regards", "as for", "as to", "regarding", "with regard to", "when it comes to"], hint: "KWAN-tu a. Shifts the topic — the Portuguese as for. It contracts with the article exactly as expected: quanto ao, quanto à, quanto aos." },
        { id: "pt-u121l2-relativamentea", type: "vocab", front: "relativamente a", reading: "relativamentea", meaning: "in relation to", example: { jp: "Relativamente ao ano passado, houve menos pedidos.", en: "In relation to last year, there were fewer applications." }, drill: { jp: "Relativamente a janeiro houve menos pedidos", en: "In relation to January there were fewer applications" }, accept: ["in relation to", "relative to", "compared with", "with respect to", "in comparison with"], hint: "rre-la-ti-va-MEN-te a. Both as regards and compared with — the comparison sense is the commoner one in Portuguese statistics: relativamente ao mesmo período." },
        { id: "pt-u121l2-facea", type: "vocab", front: "face a", reading: "facea", meaning: "in the face of", example: { jp: "Face a tantas queixas, o serviço mudou as regras.", en: "In the face of so many complaints, the office changed the rules." }, drill: { jp: "Face a tantas queixas mudaram as regras", en: "In the face of so many complaints they changed the rules" }, accept: ["in the face of", "faced with", "in view of", "given", "compared with", "in response to"], hint: "FA-se a. Given, in view of — and like relativamente a it also serves for comparison: face ao ano anterior. Very common in Portuguese press writing." },
        { id: "pt-u121l2-atravesde", type: "vocab", front: "através de", reading: "atravesde", meaning: "by way of", example: { jp: "O pedido foi feito através do serviço da freguesia.", en: "The request was made by way of the parish office." }, drill: { jp: "O pedido foi feito através de terceiros", en: "The request was made through third parties" }, accept: ["by way of", "through", "via", "by means of", "across"], hint: "a-tra-VESH de. Through — both physically across and by the agency of. Note the s: atravessar is the verb with two, através the preposition with one." },
        { id: "pt-u121l2-aluzde", type: "vocab", front: "à luz de", reading: "aluzde", meaning: "in the light of", example: { jp: "À luz dos novos dados, a conclusão anterior já não serve.", en: "In the light of the new data, the earlier conclusion no longer holds." }, drill: { jp: "À luz de novos dados tudo mudou", en: "In the light of the new data everything changed" }, accept: ["in the light of", "in light of", "given", "in view of", "under"], hint: "a LOOSH de. In the light of — of evidence, or of a law: à luz da lei portuguesa. The crase à is obligatory and is part of the phrase." },
      ],
    },
    {
      id: "pt-u121l3",
      unit: 121,
      lesson: 3,
      title: "Porquê e para quê",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Give a formal reason or purpose in Portuguese — for the sake of, at the expense of, by virtue of, with a view to.",
      items: [
        { id: "pt-u121l3-emprolde", type: "vocab", front: "em prol de", reading: "emprolde", meaning: "for the sake of", example: { jp: "Trabalharam todos em prol de uma causa comum.", en: "They all worked for the sake of a common cause." }, drill: { jp: "Trabalharam em prol de uma causa comum", en: "They worked for the sake of a common cause" }, accept: ["for the sake of", "on behalf of", "in favour of", "for the benefit of", "in aid of"], hint: "aym PROL de. In favour of, for the benefit of. O prol is an old noun meaning advantage that now survives essentially only here — a fossil inside a living phrase." },
        { id: "pt-u121l3-acustade", type: "vocab", front: "à custa de", reading: "acustade", meaning: "at the expense of", example: { jp: "Cresceu à custa do trabalho de muita gente.", en: "It grew at the expense of many people's work." }, drill: { jp: "Cresceu à custa de muito trabalho", en: "It grew at the cost of a lot of work" }, accept: ["at the expense of", "at the cost of", "off the back of", "thanks to", "by dint of"], hint: "a KOOSH-ta de. Paid for by someone or something else — viver à custa dos pais, to live off one's parents. The note of disapproval is usually there." },
        { id: "pt-u121l3-emvirtudede", type: "vocab", front: "em virtude de", reading: "emvirtudede", meaning: "by virtue of", example: { jp: "Em virtude do mau tempo, a prova foi adiada.", en: "By virtue of the bad weather, the event was postponed." }, drill: { jp: "Em virtude de mau tempo foi adiada", en: "Owing to the bad weather it was postponed" }, accept: ["by virtue of", "owing to", "because of", "on account of", "due to", "as a result of"], hint: "aym vir-TOO-de de. Formal because of. Despite the English cognate it is a plain causal phrase in Portuguese, with none of the sense of merit that virtue carries." },
        { id: "pt-u121l3-comvistaa", type: "vocab", front: "com vista a", reading: "comvistaa", meaning: "with a view to", example: { jp: "Reuniram-se com vista a resolver o problema antes do inverno.", en: "They met with a view to solving the problem before winter." }, drill: { jp: "Reuniram-se com vista a resolver tudo", en: "They met with a view to resolving everything" }, accept: ["with a view to", "in order to", "with the aim of", "for the purpose of", "so as to"], hint: "kom VISH-ta a. Followed by an infinitive — com vista a resolver. The purpose clause of Portuguese officialese, beside a fim de and tendo em vista." },
        { id: "pt-u121l3-sobpenade", type: "vocab", front: "sob pena de", reading: "sobpenade", meaning: "on pain of", example: { jp: "Tem de responder em dez dias, sob pena de perder o lugar.", en: "He has to reply within ten days, on pain of losing the place." }, drill: { jp: "Tem de responder sob pena de perder", en: "He must reply on pain of losing out" }, accept: ["on pain of", "under penalty of", "at the risk of", "failing which", "or else"], hint: "sob PE-na de. Names the consequence of not complying, and is genuinely common on Portuguese official letters. A pena is a penalty here, not a feather or pity." },
        { id: "pt-u121l3-paraefeitosde", type: "vocab", front: "para efeitos de", reading: "paraefeitosde", meaning: "for the purposes of", example: { jp: "Para efeitos de contagem, os dias de férias não entram.", en: "For the purposes of the count, holiday days do not count." }, drill: { jp: "Para efeitos de contagem as férias não entram", en: "For counting purposes the holidays do not count" }, accept: ["for the purposes of", "for the purpose of", "for", "as far as X is concerned", "in terms of"], hint: "PA-ra e-FAY-tush de. Restricts a definition to one context — para efeitos legais, para efeitos fiscais. Hard to avoid once you read any Portuguese regulation." },
      ],
    },
    {
      id: "pt-u121l4",
      unit: 121,
      lesson: 4,
      title: "Quando, ao abrigo de quê",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Situate an act in time and authority in formal Portuguese — at the time of, under the terms of, following on from.",
      items: [
        { id: "pt-u121l4-aquandode", type: "vocab", front: "aquando de", reading: "aquandode", meaning: "at the time of", example: { jp: "Aquando da mudança, muita gente perdeu o trabalho.", en: "At the time of the change, many people lost their jobs." }, drill: { jp: "Aquando de uma mudança perderam tudo", en: "At the time of a change they lost everything" }, accept: ["at the time of", "when", "during", "on the occasion of", "at the moment of"], hint: "a-KWAN-du de. At the time of a named event, always with de and a noun — aquando da guerra. Purely written; nobody says it aloud." },
        { id: "pt-u121l4-aoabrigode", type: "vocab", front: "ao abrigo de", reading: "aoabrigode", meaning: "under the terms of", example: { jp: "O apoio foi dado ao abrigo de uma lei de dois mil e vinte.", en: "The support was given under the terms of a law of twenty twenty." }, drill: { jp: "Foi dado ao abrigo de uma lei", en: "It was given under a law" }, accept: ["under the terms of", "under", "pursuant to", "in accordance with", "by virtue of a law"], hint: "au a-BREE-gu de. Literally under the shelter of. Names the legal instrument something was done under — ao abrigo do artigo 5.º. Standard in every Portuguese official letter." },
        { id: "pt-u121l4-porintermediode", type: "vocab", front: "por intermédio de", reading: "porintermediode", meaning: "through an intermediary", example: { jp: "O contacto foi feito por intermédio de amigos comum.", en: "The contact was made through a mutual friend." }, drill: { jp: "O contacto foi feito por intermédio de amigos", en: "The contact was made through friends" }, accept: ["through an intermediary", "through", "via", "by means of", "through the offices of"], hint: "por in-ter-ME-diu de. Specifically through a third party who passed it on, where através de (l2) can be any channel at all. The human middleman is the point." },
        { id: "pt-u121l4-nasequenciade", type: "vocab", front: "na sequência de", reading: "nasequenciade", meaning: "following on from", example: { jp: "Na sequência da queixa, os serviços vieram ver a obra.", en: "Following on from the complaint, the office came to look at the works." }, drill: { jp: "Na sequência de uma queixa vieram cá", en: "Following a complaint they came here" }, accept: ["following on from", "following", "further to", "in the wake of", "as a follow-up to", "pursuant to"], hint: "na se-KWEN-si-a de. Says this happened because that happened first — the Portuguese further to. Opens countless official replies: na sequência do seu pedido." },
        { id: "pt-u121l4-amargemde", type: "vocab", front: "à margem de", reading: "amargemde", meaning: "on the sidelines of", example: { jp: "À margem da reunião, falaram sobre outro assunto.", en: "On the sidelines of the meeting, they spoke about another matter." }, drill: { jp: "À margem de uma reunião falaram disso", en: "On the sidelines of a meeting they discussed that" }, accept: ["on the sidelines of", "on the margins of", "outside", "apart from", "aside from", "in the margins of"], hint: "a MAR-zhayn de. Alongside but not part of — of an event, or of society: viver à margem. Built on a margem, taught two units earlier at u119." },
        { id: "pt-u121l4-aparde", type: "vocab", front: "a par de", reading: "aparde", meaning: "in addition to", example: { jp: "A par do trabalho, ainda estudava à noite.", en: "In addition to the job, he was still studying at night." }, drill: { jp: "A par de tudo ainda estudava muito", en: "In addition to everything he still studied a lot" }, accept: ["in addition to", "alongside", "as well as", "besides", "on a par with", "abreast of"], hint: "a PAR de. Alongside, in addition to. Separately estar a par de something means to be up to date with it — ponha-me a par, bring me up to speed." },
      ],
    },
  ],
};
