// PT Unit 68 — As relações e a sociedade (slot: relationships) — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2, unit 5 of 13, and the last thematic one. Three shipped units own
// the concrete layer: u4 (a família and the people in it), u39 (o amigo, a
// amizade, conhecer, casar, o casamento, cumprimentar, ótimo/péssimo) and u32
// (a sociedade, a comunidade, o vizinho, o cidadão, a liberdade, a igualdade,
// o direito, o dever, respeitar). u31 owns a confiança and confiar.
//
// What none of them has is what happens when a relationship goes WRONG, what
// holds one together over years, and what it means to be outside the group —
// which is the B1 layer and the whole of this unit.
//
// A THIRD TITLE-WORD GAP, carded here: `a relação` is taught by NO unit in
// u1-u50, although u39's own title is "As relações e as opiniões". That is now
// three of these found in this block — a comida (u6's title), a doença (u25's
// title), a relação (u39's title) — plus vender, a vida and o emprego. The
// pattern is worth the lead's attention: the scaffold titles a slot with an
// abstract noun and the authoring seat cards only its concrete members.
//
// Deliberate boundaries:
//   - u31 owns a confiança; this unit uses it in examples and cards nothing
//     from that family.
//   - u32 owns a igualdade; this unit cards `a desigualdade`, which is the
//     opposite and a different word, and the hint names the pair.
//   - u39 owns casar and o casamento; this unit cards what comes after —
//     separar-se and o divórcio — without re-opening the wedding.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT68 = {
  id: "pt-u68",
  lang: "pt",
  title: "As relações e a sociedade",
  order: 68,
  stage: "b1",
  lessons: [
    {
      id: "pt-u68l1",
      unit: 68,
      lesson: 1,
      title: "As relações",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a relationship over time — a couple, a commitment, a separation — without reducing it to the wedding.",
      items: [
        { id: "pt-u68l1-arelacao", type: "vocab", front: "a relação", reading: "arelacao", meaning: "relationship", example: { jp: "A relação deles mudou muito depois do primeiro filho, no entanto continuam a fazer tudo juntos.", en: "Their relationship changed a lot after the first child; however, they still do everything together." }, drill: { jp: "A relação deles mudou muito", en: "Their relationship changed a lot" }, accept: ["relationship", "relation", "the relationship", "connection"], hint: "rre-la-SOWNG; plural as relações. Of people, of countries and of ideas — as relações entre Portugal e Espanha works exactly the same way. Em relação a is the fixed phrase for \"regarding\"." },
        { id: "pt-u68l1-ocasal", type: "vocab", front: "o casal", reading: "ocasal", meaning: "couple", example: { jp: "O casal vive em Braga desde 2019, mas os pais dela continuam no Porto.", en: "The couple has lived in Braga since 2019, but her parents are still in Porto." }, drill: { jp: "O casal vive em Braga", en: "The couple lives in Braga" }, accept: ["couple", "the couple", "married couple"], hint: "ka-ZAL; plural os casais. From casar (u39). Careful: um par is a pair of things — shoes, gloves — while people in a relationship are um casal." },
        { id: "pt-u68l1-separarse", type: "vocab", front: "separar-se", reading: "separarse", meaning: "to separate", example: { jp: "Decidiram separar-se no ano passado, no entanto os dois continuam a cuidar dos filhos juntos.", en: "They decided to separate last year; however, the two continue to look after the children together." }, drill: { jp: "Decidiram separar-se no ano passado", en: "They decided to separate last year" }, accept: ["separate", "to split up", "break up"], hint: "se-pa-RAR-suh. The -se makes it mutual — the two of them separate from each other. Separar without it is to separate two other things: separar o lixo." },
        { id: "pt-u68l1-odivorcio", type: "vocab", front: "o divórcio", reading: "odivorcio", meaning: "divorce", example: { jp: "O divórcio demorou quase um ano, por isso os dois ficaram sem dinheiro para a casa nova.", en: "The divorce took almost a year, so the two of them were left without money for the new house." }, drill: { jp: "O divórcio demorou quase um ano", en: "The divorce took almost a year" }, accept: ["divorce", "the divorce"], hint: "dee-VOR-syu. The legal end; separar-se is the living apart, which can happen without it. The verb is divorciar-se, and Portugal says estão divorciados for the state." },
        { id: "pt-u68l1-aconvivencia", type: "vocab", front: "a convivência", reading: "aconvivencia", meaning: "living together", example: { jp: "A convivência com os sogros não é fácil, mas a casa é grande e cada um tem o seu espaço.", en: "Living with the in-laws is not easy, but the house is big and each of them has their own space." }, drill: { jp: "A convivência com os sogros não é fácil", en: "Living with the in-laws is not easy" }, accept: ["living together", "coexistence", "getting along", "life together"], hint: "kon-vee-VEN-syuh. The noun of conviver — the daily business of sharing a life or a building with somebody. One of the warmest words in the language, and it has no single English word." },
        { id: "pt-u68l1-oafeto", type: "vocab", front: "o afeto", reading: "oafeto", meaning: "affection (regard)", example: { jp: "O afeto entre os dois é claro, mas quase nunca falam disso à frente dos filhos.", en: "The affection between the two of them is clear, but they almost never talk about it in front of the children." }, drill: { jp: "O afeto entre os dois é claro", en: "The affection between the two is clear" }, accept: ["affection", "the affection", "fondness"], hint: "a-FEH-tu. Spelled afeto since the 1990 spelling agreement; books printed before it say afecto. That reform dropped only the consonants Portugal does not pronounce, which is why contacto keeps its c here. Afetuoso is the adjective." },
      ],
    },
    {
      id: "pt-u68l2",
      unit: 68,
      lesson: 2,
      title: "O conflito",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe an argument honestly — what started it, who was at fault, and whether it was forgiven.",
      items: [
        { id: "pt-u68l2-oconflito", type: "vocab", front: "o conflito", reading: "oconflito", meaning: "conflict", example: { jp: "O conflito entre os dois vizinhos começou com uma árvore, mas hoje já ninguém fala com ninguém.", en: "The conflict between the two neighbours started with a tree, but today nobody speaks to anybody." }, drill: { jp: "O conflito começou com uma árvore", en: "The conflict started with a tree" }, accept: ["conflict", "the conflict", "dispute"], hint: "kon-FLEE-tu. From a quarrel between neighbours up to a war. Portuguese uses it in the news for both, which is why the word feels heavier in English than it does here." },
        { id: "pt-u68l2-adiscussao", type: "vocab", front: "a discussão", reading: "adiscussao", meaning: "argument (a row)", example: { jp: "A discussão por causa do dinheiro foi má, no entanto os dois pediram desculpa no dia seguinte.", en: "The argument over money was bad; however, the two of them apologised the next day." }, drill: { jp: "A discussão por causa do dinheiro foi má", en: "The argument over money was bad" }, accept: ["argument", "discussion", "the argument", "row"], hint: "dish-ku-SOWNG; plural as discussões. FALSE FRIEND, and an important one: uma discussão in Portuguese is usually a ROW, not a calm discussion. For the calm kind say uma conversa or um debate." },
        { id: "pt-u68l2-zangarse", type: "vocab", front: "zangar-se", reading: "zangarse", meaning: "to get angry", example: { jp: "Ele zanga-se depressa, mas esquece tudo na mesma hora.", en: "He gets angry quickly, but forgets everything just as fast." }, drill: { jp: "Ele vai zangar-se outra vez", en: "He is going to get angry again" }, accept: ["get angry", "to get cross", "get annoyed"], hint: "zan-GAR-suh. u22 gave you zangado, the adjective — this is the moment it happens. Zangar-se COM alguém: zangou-se comigo." },
        { id: "pt-u68l2-perdoar", type: "vocab", front: "perdoar", reading: "perdoar", meaning: "to forgive", example: { jp: "Foi difícil perdoar a irmã, mas hoje falam outra vez todas as semanas.", en: "It was hard to forgive his sister, but today they talk again every week." }, drill: { jp: "Foi difícil perdoar a irmã", en: "It was hard to forgive his sister" }, accept: ["forgive", "to pardon", "excuse"], hint: "per-du-AR. Perdoar a alguém — the person forgiven takes a, which is why the clitic is lhe and not o. Desculpar (u39) is for small things; perdoar is for the ones that mattered." },
        { id: "pt-u68l2-omalentendido", type: "vocab", front: "o mal-entendido", reading: "omalentendido", meaning: "misunderstanding", example: { jp: "Foi tudo um mal-entendido, por isso a discussão acabou em dois minutos.", en: "It was all a misunderstanding, so the argument ended in two minutes." }, drill: { jp: "O mal-entendido acabou em dois minutos", en: "The misunderstanding ended in two minutes" }, accept: ["misunderstanding", "the misunderstanding", "mix-up"], hint: "mal-en-ten-DEE-du. Hyphenated, and the hyphen drops out of the answer key. Built from mal + entendido — badly understood, exactly the English idea." },
        { id: "pt-u68l2-odesentendimento", type: "vocab", front: "o desentendimento", reading: "odesentendimento", meaning: "misunderstanding between people", example: { jp: "O desentendimento entre os irmãos durou dois anos, por isso ninguém falava do assunto no Natal.", en: "The falling-out between the brothers lasted two years, so nobody mentioned the subject at Christmas." }, drill: { jp: "O desentendimento entre os irmãos durou anos", en: "The falling-out between the brothers lasted years" }, accept: ["falling-out", "misunderstanding", "disagreement", "quarrel"], hint: "de-zen-ten-dee-MEN-tu. Longer and cooler than uma zanga: this is the lasting breach rather than the moment of anger. o mal-entendido is a mistake nobody meant; um desentendimento is a disagreement people chose." },
      ],
    },
    {
      id: "pt-u68l3",
      unit: 68,
      lesson: 3,
      title: "O apoio e a solidão",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who supports whom, how people stay in touch, and talk about loneliness without euphemism.",
      items: [
        { id: "pt-u68l3-conviver", type: "vocab", front: "conviver", reading: "conviver", meaning: "to live alongside", example: { jp: "Aprenderam a conviver com a diferença, porque a aldeia é pequena e toda a família ficou lá.", en: "They learned to live alongside the difference, because the village is small and the whole family stayed there." }, drill: { jp: "Aprenderam a conviver com a diferença", en: "They learned to live alongside the difference" }, accept: ["live together", "to get along", "coexist", "to mix"], hint: "kon-vee-VER. Conviver COM: sharing a life or a space with somebody, not necessarily a house. A convivência is the noun, and it is one of the warmest words in the language." },
        { id: "pt-u68l3-aceitar", type: "vocab", front: "aceitar", reading: "aceitar", meaning: "to accept", example: { jp: "Foi difícil aceitar o divórcio do irmão, mas nunca disse nada à mãe.", en: "It was hard to accept his brother's divorce, but he never said anything to their mother." }, drill: { jp: "Foi difícil aceitar o divórcio", en: "It was hard to accept the divorce" }, accept: ["accept", "to take", "to agree to"], hint: "a-say-TAR. Of an invitation, a decision or a person. Aceite is the past participle Portugal uses — aceitado exists but sounds heavy." },
        { id: "pt-u68l3-asolidao", type: "vocab", front: "a solidão", reading: "asolidao", meaning: "loneliness", example: { jp: "A solidão dos idosos é um problema grave no norte, por isso a câmara abriu um telefone de apoio.", en: "Loneliness among the elderly is a serious problem in the north, so the council opened a support line." }, drill: { jp: "A solidão dos idosos é um problema", en: "Loneliness among the elderly is a problem" }, accept: ["loneliness", "solitude", "the loneliness"], hint: "su-lee-DOWNG. Both the painful loneliness and the chosen kind — Portuguese does not split them the way English splits loneliness from solitude. Sozinho (u39) is the adjective." },
        { id: "pt-u68l3-ocontacto", type: "vocab", front: "o contacto", reading: "ocontacto", meaning: "contact", example: { jp: "Perderam o contacto durante vinte anos, no entanto voltaram a falar depois de um casamento.", en: "They lost contact for twenty years; however, they started talking again after a wedding." }, drill: { jp: "Perderam o contacto durante vinte anos", en: "They lost contact for twenty years" }, accept: ["contact", "the contact", "touch"], hint: "kon-TAK-tu. Portugal keeps the c that Brazil drops — contacto here, contato there. Manter o contacto is to stay in touch, using manter from lesson 1." },
        { id: "pt-u68l3-asolidariedade", type: "vocab", front: "a solidariedade", reading: "asolidariedade", meaning: "solidarity", example: { jp: "A solidariedade da aldeia foi enorme depois do fogo, além disso ninguém aceitou dinheiro por nada.", en: "The village's solidarity was enormous after the fire; what is more, nobody accepted money for anything." }, drill: { jp: "A solidariedade da aldeia foi enorme", en: "The village's solidarity was enormous" }, accept: ["solidarity", "the solidarity", "support"], hint: "su-lee-da-ree-DAH-duh. Long, and worth it — this is the word Portuguese news uses for a community closing round somebody in trouble. Solidário is the adjective: ser solidário com alguém." },
        { id: "pt-u68l3-acompanhia", type: "vocab", front: "a companhia", reading: "acompanhia", meaning: "company (companionship)", example: { jp: "Faz-lhe companhia ao domingo, porque a mãe vive sozinha desde que o pai morreu.", en: "He keeps her company on Sundays, because his mother has lived alone since his father died." }, drill: { jp: "A companhia da filha faz-lhe bem", en: "His daughter's company does him good" }, accept: ["company", "the company", "companionship"], hint: "kom-puh-NYEE-uh. Same family as acompanhar (u39), to go along with somebody. Fazer companhia a alguém is to keep somebody company. Also a business — uma companhia de seguros — where empresa (u18) is the commoner word." },
      ],
    },
    {
      id: "pt-u68l4",
      unit: 68,
      lesson: 4,
      title: "A sociedade e a diferença",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Discuss who belongs and who does not — inequality, prejudice, generations — in the words a Portuguese newspaper would use.",
      items: [
        { id: "pt-u68l4-adesigualdade", type: "vocab", front: "a desigualdade", reading: "adesigualdade", meaning: "inequality", example: { jp: "A desigualdade entre o campo e a costa é antiga, por isso o governo fala disso em todas as eleições.", en: "The inequality between the countryside and the coast is old, which is why the government talks about it at every election." }, drill: { jp: "A desigualdade entre as regiões é antiga", en: "The inequality between the regions is old" }, accept: ["inequality", "the inequality", "disparity"], hint: "de-zee-gwal-DAH-duh. The opposite of a igualdade (u32), built with the same des- that turns emprego into desemprego. Longer than its English pair and just as everyday in the news." },
        { id: "pt-u68l4-aminoria", type: "vocab", front: "a minoria", reading: "aminoria", meaning: "minority", example: { jp: "Uma minoria pequena decidiu tudo naquela reunião, no entanto ninguém pediu outra reunião.", en: "A small minority decided everything at that meeting; however, nobody asked for another meeting." }, drill: { jp: "A minoria decidiu tudo na reunião", en: "The minority decided everything at the meeting" }, accept: ["minority", "the minority"], hint: "mee-nu-REE-uh. Of people and of votes alike. The pair is a maioria, which u40 already gave you — this is the other half." },
        { id: "pt-u68l4-opreconceito", type: "vocab", front: "o preconceito", reading: "opreconceito", meaning: "prejudice", example: { jp: "O preconceito contra quem vem de fora ainda é grande, mas os mais novos falam disso sem problemas.", en: "Prejudice against people who come from outside is still great, but younger people talk about it without any trouble." }, drill: { jp: "O preconceito ainda é grande na cidade", en: "Prejudice is still great in the city" }, accept: ["prejudice", "bias", "the prejudice"], hint: "pre-kon-SAY-tu. Literally pre-concept. Ter preconceito contra alguém is the ordinary phrase, and it is as blunt in Portuguese as in English." },
        { id: "pt-u68l4-ageracao", type: "vocab", front: "a geração", reading: "ageracao", meaning: "generation", example: { jp: "Esta geração sai de casa muito mais tarde, porque as casas custam quase o dobro do salário.", en: "This generation leaves home much later, because houses cost almost double a salary." }, drill: { jp: "A geração nova sai de casa tarde", en: "The new generation leaves home late" }, accept: ["generation", "the generation"], hint: "zhe-ra-SOWNG; plural as gerações. Of a family and of a country. A geração de 60 is how Portugal labels a decade's worth of people." },
        { id: "pt-u68l4-pertencer", type: "vocab", front: "pertencer", reading: "pertencer", meaning: "to belong", example: { jp: "Nunca sentiu que pertencia àquela cidade, no entanto ficou lá quase dez anos.", en: "He never felt that he belonged to that city; however, he stayed there almost ten years." }, drill: { jp: "Ele quer pertencer àquela cidade", en: "He wants to belong to that city" }, accept: ["belong", "to be part of"], hint: "per-ten-SER. Pertencer A: pertence ao meu pai. Used for possessions and for groups alike, which is why it carries the whole of this lesson's question." },
        { id: "pt-u68l4-aintegracao", type: "vocab", front: "a integração", reading: "aintegracao", meaning: "integration", example: { jp: "A integração dos novos vizinhos foi rápida, porque a escola juntou as famílias todas numa festa.", en: "The integration of the new neighbours was quick, because the school brought all the families together at a party." }, drill: { jp: "A integração dos novos vizinhos foi rápida", en: "The integration of the new neighbours was quick" }, accept: ["integration", "the integration", "inclusion"], hint: "een-te-gra-SOWNG. Of people into a community and of a country into an organisation. Integrar-se is what the person does; a integração is what it is called afterwards." },
      ],
    },
  ],
};
