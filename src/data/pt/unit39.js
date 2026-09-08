// PT Unit 39 — As relações e as opiniões — A2 (slot: conjugation-drill-2, REPURPOSED)
// ─────────────────────────────────────────────────────────────────────────────
// SLOT REPURPOSED, same decision as u38 and for the same reason: the conjugate
// card cannot render for Portuguese (ENGINES = { es, fr, no } in
// src/store/conjugate-latin.js), and pt falls through to the JAPANESE form and
// group vocabularies, so a tagged pt verb would validate and render nothing.
// NO `group` OR `conjForm` TAG IS AUTHORED ANYWHERE IN THIS BLOCK.
//
// The theme is the last real hole in A2. Block 1's u22 owns FEELINGS — what you
// feel on your own. Nothing in either block owns what happens BETWEEN people:
// meeting, friendship, marriage, greeting, and then judging. Lessons 1-3 are the
// relationships; Lesson 4 is the verdict on them, which is why ótimo and péssimo
// sit here rather than in u31's character unit.
//
// `tratar` (l3) is the pt-PT register card of the block. Tratar alguém POR TU or
// POR VOCÊ is the decision a Portuguese speaker makes in the first ten seconds of
// meeting someone, and A1's u2 set the pronouns up without ever naming the verb
// that operates them.
// `ótimo` and `péssimo` are the suppletive absolute superlatives — the -íssimo
// pattern taught lexically. The productive -íssimo ending itself is NOT carded
// anywhere in this block; see the hand-back.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT39 = {
  id: "pt-u39",
  lang: "pt",
  title: "As relações e as opiniões",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "pt-u39l1",
      unit: 39,
      lesson: 1,
      title: "Os amigos",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about friends — meeting them, visiting them, and doing things together.",
      items: [
        { id: "pt-u39l1-oamigo", type: "vocab", front: "o amigo", reading: "oamigo", meaning: "friend", example: { jp: "O amigo da Ana mora em Braga, mas está em Lisboa quase todos os meses.", en: "Ana's friend lives in Braga, but he is in Lisbon almost every month." }, drill: { jp: "O amigo da Ana mora em Braga", en: "Ana's friend lives in Braga" }, accept: ["the friend", "mate", "pal"], hint: "a-MEE-gu; feminine a amiga. Portugal keeps um amigo and um conhecido further apart than English does — a conhecido is someone you know, and calling them amigo would overstate it. O meu amigo, with the article, as A1 u4 taught." },
        { id: "pt-u39l1-aamizade", type: "vocab", front: "a amizade", reading: "aamizade", meaning: "friendship", example: { jp: "A amizade é muito importante para ele, mais até do que a família.", en: "Friendship is very important to him, even more than family." }, drill: { jp: "A amizade é muito importante", en: "Friendship is very important" }, accept: ["the friendship"], hint: "a-mi-ZA-de. Another -dade noun, so feminine — the ending has been telling you the gender since Unit 31. Um abraço de amizade closes a warm letter, one step below um beijinho." },
        { id: "pt-u39l1-conhecer", type: "vocab", front: "conhecer", reading: "conhecer", meaning: "to know", example: { jp: "Conhecer pessoas novas é sempre bom, mas no começo custa a quem é tímido.", en: "Meeting new people is always good, but at the beginning it is hard for someone shy." }, drill: { jp: "Conhecer pessoas novas é sempre bom", en: "Meeting new people is always good" }, accept: ["meet", "to be acquainted with", "to get to know"], hint: "ku-nye-SER, with the nh; eu form conheço, cedilla. THE OTHER KNOW — conhecer is people and places, saber (Unit 36) is facts and skills. In the past tense it shifts to \"met\": conheci-a em Lisboa, I met her in Lisbon." },
        { id: "pt-u39l1-encontrarse", type: "vocab", front: "encontrar-se", reading: "encontrarse", meaning: "to meet up", example: { jp: "Encontrar-se com amigos ao sábado é o que salva a semana de trabalho.", en: "Meeting up with friends on Saturday is what saves the working week." }, drill: { jp: "Encontrar-se com amigos ao sábado é bom", en: "Meeting up with friends on Saturday is good" }, accept: ["meet up", "to meet", "to run into", "to be located"], hint: "Reflexive, with the enclitic -se the dictionary form carries. Encontrar alone means to find — encontrei as chaves. Non-reflexive it also states location in formal writing: o museu encontra-se fechado." },
        { id: "pt-u39l1-visitar", type: "vocab", front: "visitar", reading: "visitar", meaning: "to visit", example: { jp: "Visitar os avós ao domingo é normal em Portugal, e quem não vai tem de explicar porquê.", en: "Visiting the grandparents on Sunday is normal in Portugal, and whoever doesn't go has to explain why." }, drill: { jp: "Visitar os avós ao domingo é normal", en: "Visiting the grandparents on Sunday is normal" }, accept: ["visit", "to call on", "to tour"], hint: "vi-zi-TAR, with the s saying z, regular -ar. It takes a direct object with no preposition — visitar os avós, visitar o museu — where English needs none either. Uma visita is the noun and also the visitor." },
        { id: "pt-u39l1-juntos", type: "vocab", front: "juntos", reading: "juntos", meaning: "together", example: { jp: "Fomos juntos ao cinema ontem, mas o filme era tão aborrecido que saímos cedo.", en: "We went to the cinema together yesterday, but the film was so boring that we left early." }, drill: { jp: "Fomos juntos ao cinema ontem", en: "We went to the cinema together yesterday" }, accept: ["together (m)", "joined", "as a group"], hint: "ZHUN-tush. It is an ADJECTIVE, not an adverb, so it AGREES: eles foram juntos, elas foram juntas. English \"together\" never changes and this catches everyone. Junto a something means next to it." },
      ],
    },
    {
      id: "pt-u39l2",
      unit: 39,
      lesson: 2,
      title: "O amor e o casamento",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about falling in love and getting married, and about the greetings that go with both.",
      items: [
        { id: "pt-u39l2-apaixonarse", type: "vocab", front: "apaixonar-se", reading: "apaixonarse", meaning: "to fall in love", example: { jp: "Apaixonar-se em Lisboa é fácil; difícil é encontrar casa depois.", en: "Falling in love in Lisbon is easy; the hard part is finding a flat afterwards." }, drill: { jp: "Apaixonar-se em Lisboa é fácil", en: "Falling in love in Lisbon is easy" }, accept: ["fall in love", "to become infatuated"], hint: "a-pie-shu-NAR-se — that x says \"sh\", as in baixo from Unit 10. It takes POR: apaixonar-se POR alguém. Apaixonado is the adjective, and block 1's u22 teaches o amor, the noun underneath all of it." },
        { id: "pt-u39l2-casar", type: "vocab", front: "casar", reading: "casar", meaning: "to marry", example: { jp: "Eles vão casar em setembro, mas ainda não disseram nada à família.", en: "They are going to marry in September, but they still haven't told the family anything." }, drill: { jp: "Eles vão casar em setembro", en: "They are going to marry in September" }, accept: ["marry", "to get married", "to wed", "to match"], hint: "ka-ZAR — and yes, it is a casa, house, with a verb ending: to marry is to set up house. Usually reflexive when it is about you — casar-se com alguém — though Portugal drops the -se freely: ele casou em maio." },
        { id: "pt-u39l2-ocasamento", type: "vocab", front: "o casamento", reading: "ocasamento", meaning: "wedding", example: { jp: "O casamento foi na igreja de Braga e depois houve almoço para cem pessoas.", en: "The wedding was in the church in Braga and afterwards there was lunch for a hundred people." }, drill: { jp: "O casamento foi na igreja de Braga", en: "The wedding was in the church in Braga" }, accept: ["marriage", "the wedding"], hint: "ka-za-MEN-tu — the -mento noun of casar, exactly as o comportamento came from comportar-se in Unit 31. ONE word for both the ceremony and the state of being married, where English splits wedding and marriage." },
        { id: "pt-u39l2-onoivo", type: "vocab", front: "o noivo", reading: "onoivo", meaning: "groom", example: { jp: "O noivo chegou tarde ao casamento e a noiva ficou muito zangada.", en: "The groom arrived late at the wedding and the bride was very angry." }, drill: { jp: "O noivo chegou tarde ao casamento", en: "The groom arrived late at the wedding" }, accept: ["fiancé", "boyfriend", "the groom", "betrothed"], hint: "NOY-vu; feminine a noiva, the bride. It ALSO means fiancé and, loosely, a serious boyfriend — os noivos are an engaged couple. A1 u4 teaches o namorado, which is the lighter word for the same person earlier on." },
        { id: "pt-u39l2-obeijo", type: "vocab", front: "o beijo", reading: "obeijo", meaning: "kiss", example: { jp: "Em Portugal o beijo é normal entre amigos, e são sempre dois beijos.", en: "In Portugal the kiss is normal between friends, and it is always two kisses." }, drill: { jp: "Em Portugal o beijo é normal", en: "In Portugal the kiss is normal" }, accept: ["the kiss", "peck"], hint: "BAY-zhu, from beijar. PRACTICAL: two kisses on greeting, women with anyone, men with men shaking hands instead. Beijinhos closes a message between friends the way \"x\" does in English — and it is not romantic." },
        { id: "pt-u39l2-oabraco", type: "vocab", front: "o abraço", reading: "oabraco", meaning: "hug", example: { jp: "O abraço do pai foi forte, porque não se viam há quase dois anos.", en: "The father's hug was strong, because they hadn't seen each other for almost two years." }, drill: { jp: "O abraço do pai foi forte", en: "The father's hug was strong" }, accept: ["embrace", "the hug"], hint: "a-BRA-su, cedilla, built on o braço from A1 u11 — a hug is what arms are for. Um abraço is how men sign off a message to each other, exactly where a woman would write beijinhos." },
      ],
    },
    {
      id: "pt-u39l3",
      unit: 39,
      lesson: 3,
      title: "Estar com os outros",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Greet people, go along with them, have them over — and decide whether to address someone as tu or as você.",
      items: [
        { id: "pt-u39l3-cumprimentar", type: "vocab", front: "cumprimentar", reading: "cumprimentar", meaning: "to greet", example: { jp: "Cumprimentar os vizinhos é sempre bom, e no elevador todos o fazem.", en: "Greeting the neighbours is always good, and in the lift everyone does it." }, drill: { jp: "Cumprimentar os vizinhos é sempre bom", en: "Greeting the neighbours is always good" }, accept: ["greet", "to say hello", "to congratulate"], hint: "kum-pri-men-TAR, built on os cumprimentos — greetings — which is what A1's Unit 2 is named after. Note it also means to congratulate. In a Portuguese prédio you greet everyone in the lift; silence reads as rude." },
        { id: "pt-u39l3-acompanhar", type: "vocab", front: "acompanhar", reading: "acompanhar", meaning: "to accompany", example: { jp: "Vou acompanhar a Ana ao aeroporto, porque com duas malas não consegue ir de metro.", en: "I'm going to accompany Ana to the airport, because with two suitcases she can't go by metro." }, drill: { jp: "Vou acompanhar Ana ao aeroporto", en: "I'm going to accompany Ana to the airport" }, accept: ["accompany", "to go with", "to follow", "to keep up with"], hint: "a-kom-pa-NYAR, with the nh, from a companhia. Also to keep up with something — acompanhar as notícias. On a menu, acompanhamento is the side dish that comes with the main." },
        { id: "pt-u39l3-sozinho", type: "vocab", front: "sozinho", reading: "sozinho", meaning: "alone", example: { jp: "Ele mora sozinho em Lisboa, mas ao fim de semana está sempre em casa dos pais.", en: "He lives alone in Lisbon, but at the weekend he is always at his parents' house." }, drill: { jp: "Ele mora sozinho em Lisboa", en: "He lives alone in Lisbon" }, accept: ["by oneself", "on my own", "lonely", "single"], hint: "su-ZEE-nyu, with the nh; feminine sozinha, and it AGREES like juntos, its opposite. From só plus the -inho ending Portuguese uses for everything — só means alone too, but sozinho is warmer and far more common in speech." },
        { id: "pt-u39l3-oencontro", type: "vocab", front: "o encontro", reading: "oencontro", meaning: "meeting", example: { jp: "O encontro foi na praça às oito, mas os amigos chegaram todos atrasados.", en: "The meeting was in the square at eight, but the friends all arrived late." }, drill: { jp: "O encontro foi na praça às oito", en: "The meeting was in the square at eight" }, accept: ["the meeting", "date", "encounter", "get-together"], hint: "en-KON-tru, the noun of encontrar-se from Lesson 1. An informal meeting or a date — a formal work meeting is uma reunião, from A1 u18. Ao encontro de means \"towards\"." },
        { id: "pt-u39l3-receber", type: "vocab", front: "receber", reading: "receber", meaning: "to receive", example: { jp: "Receber amigos em casa é bom, mas dá muito mais trabalho do que ir ao restaurante.", en: "Having friends over is good, but it is much more work than going to a restaurant." }, drill: { jp: "Receber amigos em casa é bom", en: "Having friends over is good" }, accept: ["receive", "to get", "to host", "to welcome"], hint: "rre-se-BER, strong initial r, regular -er. Receive a letter, receive guests, and receive a salary — receber bem is to be a good host. A receção, which block 1 teaches in u23, is its noun and keeps the post-1990 spelling with no p." },
        { id: "pt-u39l3-tratar", type: "vocab", front: "tratar", reading: "tratar", meaning: "to treat", example: { jp: "Em Portugal tratar por tu é normal entre pessoas da mesma idade, mas com um senhor mais velho é melhor tratar por você.", en: "In Portugal addressing someone as tu is normal between people of the same age, but with an older gentleman it is better to use você." }, drill: { jp: "Em Portugal tratar por tu é normal", en: "In Portugal addressing someone as tu is normal" }, accept: ["treat", "to address", "to deal with", "to look after"], hint: "THE REGISTER VERB. Tratar alguém POR TU or POR VOCÊ is the choice A1's Unit 2 set up without naming — and Portugal decides it in the first ten seconds. It also means to treat medically (o tratamento, u25) and to deal with a matter: tratar de um assunto." },
      ],
    },
    {
      id: "pt-u39l4",
      unit: 39,
      lesson: 4,
      title: "Dar a sua opinião",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Give a verdict — praise something, criticise it, say thank you, or apologise for it.",
      items: [
        { id: "pt-u39l4-otimo", type: "vocab", front: "ótimo", reading: "otimo", meaning: "great", example: { jp: "O jantar de ontem foi ótimo, e o peixe grelhado estava muito saboroso.", en: "Yesterday's dinner was great, and the grilled fish was very tasty." }, drill: { jp: "O jantar de ontem foi ótimo", en: "Yesterday's dinner was great" }, accept: ["excellent", "brilliant", "superb", "very good"], hint: "O-ti-mu. It is not \"muito bom\" — it is the ABSOLUTE SUPERLATIVE of bom, a separate word the way English has good/best. POST-1990 SPELLING: ótimo, where Portugal wrote óptimo before the accord, exactly as elétrico lost its c in Unit 7." },
        { id: "pt-u39l4-pessimo", type: "vocab", front: "péssimo", reading: "pessimo", meaning: "terrible", example: { jp: "O filme de ontem foi péssimo, e ainda demorou quase três horas.", en: "Yesterday's film was terrible, and it also lasted almost three hours." }, drill: { jp: "O filme de ontem foi péssimo", en: "Yesterday's film was terrible" }, accept: ["awful", "dreadful", "very bad", "appalling"], hint: "PE-si-mu, with the hard ss. The mirror of ótimo — the absolute superlative of mau, not \"muito mau\". The pair ótimo/péssimo is how Portuguese gives a verdict in one word, and you will hear both constantly." },
        { id: "pt-u39l4-elogiar", type: "vocab", front: "elogiar", reading: "elogiar", meaning: "to praise", example: { jp: "Elogiar o trabalho dos colegas é fácil e não custa dinheiro, mas quase nunca se faz.", en: "Praising colleagues' work is easy and costs no money, but it is almost never done." }, drill: { jp: "Elogiar o trabalho dos outros é bom", en: "Praising other people's work is good" }, accept: ["praise", "to compliment", "to commend"], hint: "e-lu-zhi-AR, with the zh. The noun is um elogio, a compliment. Its opposite is the next card. Note it is not parabéns, from A1 u2, which is specifically congratulations for an occasion." },
        { id: "pt-u39l4-criticar", type: "vocab", front: "criticar", reading: "criticar", meaning: "to criticise", example: { jp: "Criticar é sempre mais fácil do que fazer melhor, como diz sempre o meu chefe.", en: "Criticising is always easier than doing better, as my boss always says." }, drill: { jp: "Criticar é sempre mais fácil", en: "Criticising is always easier" }, accept: ["criticize", "to find fault", "to review"], hint: "kri-ti-KAR — watch the spelling change in the eu form, critico with a c but the past critiquei with qu, because Portuguese has to keep the hard k sound before an e. Uma crítica is both a criticism and a review." },
        { id: "pt-u39l4-agradecer", type: "vocab", front: "agradecer", reading: "agradecer", meaning: "to thank", example: { jp: "Agradecer é sempre importante, e em Portugal diz-se obrigado até nas coisas pequenas.", en: "Thanking is always important, and in Portugal people say thank you even for small things." }, drill: { jp: "Agradecer é sempre muito importante", en: "Thanking is always very important" }, accept: ["thank", "to be grateful", "to express thanks"], hint: "a-gra-de-SER; eu form agradeço, cedilla. The verb behind obrigado from A1 u2 — and remember obrigado agrees with the SPEAKER, so a woman says obrigada. Agradecer A alguém POR alguma coisa." },
        { id: "pt-u39l4-desculparse", type: "vocab", front: "desculpar-se", reading: "desculparse", meaning: "to apologise", example: { jp: "Desculpar-se é sempre difícil, mas é muito pior não o fazer.", en: "Apologising is always difficult, but not doing it is much worse." }, drill: { jp: "Desculpar-se é sempre muito difícil", en: "Apologising is always very difficult" }, accept: ["apologize", "to say sorry", "to excuse oneself"], hint: "Reflexive, with the enclitic -se. You already say desculpe, A1 u2 — that is this verb as a command to someone you address formally; desculpa is the tu form. Peço desculpa is the fuller apology, and it is what Portugal actually says." },
      ],
    },
  ],
};
