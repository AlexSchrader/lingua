// PT Unit 107 — Gramática 10 — a escrita formal (slot: grammar-10) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-2 seat, 2026-09-23, to §C1–C10 (src/data/pt/unit88.js).
// Retitled from the scaffold's English placeholder (CLAUDE.md, "No front language").
//
// WHAT THIS UNIT IS FOR. A learner at u106 can hold a conversation and cannot
// read a Portuguese contract, ruling, academic paper or official letter. Those
// are not harder ideas — they are a DIFFERENT SET OF FUNCTION WORDS, and every
// one of them is invisible in speech: mediante, perante, sob, salvo, face a,
// aquando de, cujo, o qual, nomeadamente, sendo que, ao passo que, dado que,
// a fim de, com vista a, por forma a, em virtude de, ao abrigo de, tendo em
// conta. Lesson 4 adds the two structures that mark written Portuguese more
// than any vocabulary does: MESOCLISIS (dir-se-ia, far-se-á) and the impersonal
// verbs a report uses instead of a subject (constatar, cumpre, urge).
//
// SLOT BOUNDARIES. u52 owns the spoken causal connectors (uma vez que, VISTO
// QUE, de modo que, daí que); u73 owns the letter formulas and the impersonal
// se (venho por este meio, diz-se, fala-se, sabe-se, foi decidido, solicitar,
// dirigir-se, efetuar, proceder, anexar); u29 owns por, para, portanto, pois.
// NONE of that is re-taught, and salvo is one of the fronts block 1 reserved.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT107 = {
  id: "pt-u107",
  lang: "pt",
  title: "Gramática 10 — a escrita formal",
  order: 107,
  stage: "b2",
  lessons: [
    {
      id: "pt-u107l1",
      unit: 107,
      lesson: 1,
      title: "As preposições da escrita",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read the prepositions that only appear in writing — by means of, in the presence of, under, save for, in view of, at the time of.",
      items: [
        { id: "pt-u107l1-mediante", type: "vocab", front: "mediante", reading: "mediante", meaning: "by means of", example: { jp: "O tribunal decide mediante um relatório do médico, mas o prazo nunca é claro.", en: "The court decides by means of a doctor's report, but the deadline is never clear." }, drill: { jp: "O tribunal decide mediante um relatório", en: "The court decides by means of a report" }, accept: ["by means of", "by way of", "through", "upon", "subject to"], hint: "me-di-AN-te. Takes a bare noun with no de: mediante pagamento, mediante marcação. ⚠ On a Portuguese sign it usually means upon — entrada mediante bilhete, entry on presentation of a ticket." },
        { id: "pt-u107l1-perante", type: "vocab", front: "perante", reading: "perante", meaning: "in the presence of", example: { jp: "Perante o tribunal o réu diz a verdade, mas fora dele muda o relato.", en: "In the presence of the court the defendant tells the truth, but outside it he changes his account." }, drill: { jp: "Perante o tribunal ele diz tudo", en: "In the presence of the court he says everything" }, accept: ["in the presence of", "before (an authority)", "faced with", "in the face of"], hint: "pe-RAN-te. ⚠ NOT antes (u28), which is before in TIME. Perante is before in SPACE and standing — perante a lei, perante os factos. Getting these two confused is the single most common Portuguese preposition error an English speaker makes." },
        { id: "pt-u107l1-sob", type: "vocab", front: "sob", reading: "sob", meaning: "under", example: { jp: "Sob a lei atual a empresa paga mais, mas o consumidor paga o mesmo.", en: "Under the current law the company pays more, but the consumer pays the same." }, drill: { jp: "Sob a lei atual pagamos mais", en: "Under the current law we pay more" }, accept: ["under", "beneath", "subject to"], hint: "SOB, one syllable. ⚠ ONE LETTER FROM SOBRE, and the two are opposites: sob is under, sobre is on or about. Abstract uses only — sob pressão, sob controlo; for a physical under Portuguese says debaixo de." },
        { id: "pt-u107l1-salvo", type: "vocab", front: "salvo", reading: "salvo", meaning: "save for", example: { jp: "Os documentos são públicos, salvo quando o tribunal decide o contrário.", en: "The documents are public, save when the court decides otherwise." }, drill: { jp: "Todos podem entrar salvo os estudantes", en: "Everyone may come in save the students" }, accept: ["save for", "except for", "except", "barring", "other than"], hint: "SAL-vu. From salvar — the thing is saved out of the rule. Also a frozen phrase every Portuguese writer uses: salvo erro, unless I am mistaken. The identical word is the adjective safe: são e salvo." },
        { id: "pt-u107l1-facea", type: "vocab", front: "face a", reading: "facea", meaning: "in view of", example: { jp: "Face a este resultado a empresa muda o plano, mas o chefe continua igual.", en: "In view of this result the company changes the plan, but the boss stays the same." }, drill: { jp: "Face a este resultado mudamos tudo", en: "In view of this result we change everything" }, accept: ["in view of", "given", "in light of", "faced with", "compared with"], hint: "FA-se a. ⚠ Two jobs, and news writing uses both: in view of (face à crise) and compared with (face ao ano passado). Only the sentence separates them, and the comparison sense is the one that surprises learners." },
        { id: "pt-u107l1-aquandode", type: "vocab", front: "aquando de", reading: "aquandode", meaning: "at the time of", example: { jp: "Aquando da reunião ninguém fala do custo, mas depois todos querem saber.", en: "At the time of the meeting nobody talks about the cost, but afterwards everyone wants to know." }, drill: { jp: "Aquando de uma crise ninguém decide", en: "At the time of a crisis nobody decides" }, accept: ["at the time of", "at the moment of", "when (formal)", "on the occasion of"], hint: "a-KWAN-du de, built on quando (u9). Written only — nobody says it. It contracts with the article exactly as de does: aquando da reunião, aquando do julgamento." },
      ],
    },
    {
      id: "pt-u107l2",
      unit: 107,
      lesson: 2,
      title: "Ligar orações por escrito",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Join clauses the way written Portuguese does — whose, which, namely, it being the case that, whereas, given the fact that.",
      items: [
        { id: "pt-u107l2-cujo", type: "vocab", front: "cujo", reading: "cujo", meaning: "whose", example: { jp: "O autor cujo livro está no curso não quer falar do assunto, mas a escola insiste em o convidar.", en: "The author whose book is on the course does not want to talk about it, but the school insists on inviting him." }, drill: { jp: "O autor cujo livro é bom fala hoje", en: "The author whose book is good speaks today" }, accept: ["whose", "of which", "of whom"], hint: "KU-zhu. ⚠ IT AGREES WITH WHAT IS OWNED, NOT WITH THE OWNER: o autor cuja obra, a empresa cujo dono. And never cujo que — that combination does not exist in Portuguese. Purely written; speech says que o seu." },
        { id: "pt-u107l2-oqual", type: "vocab", front: "o qual", reading: "oqual", meaning: "which (the one that)", example: { jp: "O relatório do qual ninguém fala diz o contrário, mas o jornal escolhe a sondagem.", en: "The report which nobody talks about says the opposite, but the paper picks the poll." }, drill: { jp: "Este é o ponto o qual referimos", en: "This is the point which we referred to" }, accept: ["which (the one that)", "which", "the which", "that one which"], hint: "Inflects for gender and number: o qual, a qual, os quais, as quais. Its job is to remove ambiguity that plain que cannot — a filha do médico, a qual chegou tarde, pins the late arrival on the daughter. After a preposition it is the normal choice in writing." },
        { id: "pt-u107l2-nomeadamente", type: "vocab", front: "nomeadamente", reading: "nomeadamente", meaning: "namely", example: { jp: "O plano tem falhas, nomeadamente no custo, mas a câmara aprova tudo.", en: "The plan has flaws, namely in the cost, but the council approves everything." }, drill: { jp: "O plano tem falhas nomeadamente no custo", en: "The plan has flaws namely in the cost" }, accept: ["namely", "specifically", "in particular", "notably"], hint: "no-mya-da-MEN-te, from nomear. ⚠ pt-PT favourite — it appears in almost every official Portuguese text, where English would often use such as. Its twin designadamente is interchangeable." },
        { id: "pt-u107l2-sendoque", type: "vocab", front: "sendo que", reading: "sendoque", meaning: "it being the case that", example: { jp: "O prazo é curto, sendo que o dinheiro chega apenas em junho.", en: "The deadline is short, it being the case that the money only arrives in June." }, drill: { jp: "O prazo é curto sendo que ninguém ajuda", en: "The deadline is short and nobody is helping" }, accept: ["it being the case that", "and moreover", "with the added fact that", "whereby"], hint: "Gerund of ser used as a connector, and it adds a fact that complicates what came before. ⚠ Heavily used in Portuguese officialese and criticised there as filler — recognise it, use it sparingly." },
        { id: "pt-u107l2-aopassoque", type: "vocab", front: "ao passo que", reading: "aopassoque", meaning: "whereas", example: { jp: "O norte cresce, ao passo que o sul continua igual.", en: "The north is growing, whereas the south stays the same." }, drill: { jp: "Ele trabalha ao passo que eu estudo", en: "He works whereas I study" }, accept: ["whereas", "while (by contrast)", "on the other hand", "by contrast"], hint: "Built on o passo (u62). ⚠ CONTRAST ONLY, never time — enquanto (u36) does both, ao passo que does only the contrast. Written register: a Portuguese essay uses it where speech would just say mas." },
        { id: "pt-u107l2-dadoque", type: "vocab", front: "dado que", reading: "dadoque", meaning: "given the fact that", example: { jp: "Dado que o prazo é curto, a empresa aceita menos dinheiro.", en: "Given the fact that the deadline is short, the company accepts less money." }, drill: { jp: "Dado que o prazo é curto aceitamos", en: "Given the deadline is short we accept" }, accept: ["given the fact that", "given that", "since", "seeing as", "in view of the fact that"], hint: "Indicative, not subjunctive — the reason is presented as established. Sits beside uma vez que and visto que (both u52) with no difference in meaning, only in how formal the page is." },
      ],
    },
    {
      id: "pt-u107l3",
      unit: 107,
      lesson: 3,
      title: "A finalidade e a causa por escrito",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State a purpose or a legal basis in written Portuguese — in order to, with a view to, so as to, by virtue of, under the terms of, bearing in mind.",
      items: [
        { id: "pt-u107l3-afimde", type: "vocab", front: "a fim de", reading: "afimde", meaning: "in order to", example: { jp: "A empresa muda o processo a fim de reduzir o custo, mas o resultado é o mesmo.", en: "The company changes the process in order to reduce the cost, but the result is the same." }, drill: { jp: "Mudamos tudo a fim de reduzir custos", en: "We change everything in order to reduce costs" }, accept: ["in order to", "so as to", "with the aim of", "for the purpose of"], hint: "⚠ THREE WORDS, and afim written as one is a DIFFERENT word meaning related or akin. The written counterpart of para plus infinitive. For a clause rather than an infinitive it becomes a fim de que plus subjunctive." },
        { id: "pt-u107l3-comvistaa", type: "vocab", front: "com vista a", reading: "comvistaa", meaning: "with a view to", example: { jp: "O governo aprova a medida com vista a reduzir a poluição, embora ninguém queira pagar.", en: "The government approves the measure with a view to reducing pollution, although nobody wants to pay." }, drill: { jp: "Trabalhamos com vista a um acordo", en: "We are working with a view to an agreement" }, accept: ["with a view to", "aimed at", "with the aim of", "towards"], hint: "Takes either a noun or an infinitive: com vista a um acordo, com vista a resolver. ⚠ Portuguese also writes com vistas a in the plural, and both are accepted — the singular is commoner in Portugal." },
        { id: "pt-u107l3-porformaa", type: "vocab", front: "por forma a", reading: "porformaa", meaning: "so as to", example: { jp: "O texto é claro por forma a evitar um processo, mas o efeito é o contrário.", en: "The text is clear so as to avoid a lawsuit, but the effect is the opposite." }, drill: { jp: "O texto é claro por forma a ajudar", en: "The text is clear so as to help" }, accept: ["so as to", "in such a way as to", "in order to", "so that"], hint: "Emphasises the MANNER as well as the aim: not just that you want the result but that the thing was shaped to produce it. De forma a and de modo a are the same construction and just as common." },
        { id: "pt-u107l3-emvirtudede", type: "vocab", front: "em virtude de", reading: "emvirtudede", meaning: "by virtue of", example: { jp: "Em virtude da demora o cliente quer um desconto, mas a empresa recusa.", en: "By virtue of the delay the client wants a discount, but the company refuses." }, drill: { jp: "Em virtude de uma demora pedimos desconto", en: "By virtue of a delay we ask for a discount" }, accept: ["by virtue of", "owing to", "on account of", "because of (formal)"], hint: "Built on a virtude (u97), here in its old sense of power or force rather than moral goodness. Purely causal, purely written — Portuguese notices and rulings use it where speech says por causa de." },
        { id: "pt-u107l3-aoabrigode", type: "vocab", front: "ao abrigo de", reading: "aoabrigode", meaning: "under the terms of", example: { jp: "A câmara paga a obra ao abrigo de uma lei do século passado, mas ninguém conhece o texto.", en: "The council pays for the work under the terms of a law from the last century, but nobody knows the text." }, drill: { jp: "Pedimos apoio ao abrigo de uma lei", en: "We ask for support under the terms of a law" }, accept: ["under the terms of", "under (a law)", "pursuant to", "by authority of"], hint: "o abrigo is a shelter, so the metaphor is standing under the roof of a rule. ⚠ The standard formula in every Portuguese grant application and legal citation: ao abrigo do artigo 5.º." },
        { id: "pt-u107l3-tendoemconta", type: "vocab", front: "tendo em conta", reading: "tendoemconta", meaning: "bearing in mind", example: { jp: "Tendo em conta o prazo o plano é bom, mas o custo continua alto.", en: "Bearing in mind the deadline the plan is good, but the cost is still high." }, drill: { jp: "Tendo em conta o prazo aceitamos tudo", en: "Bearing in mind the deadline we accept everything" }, accept: ["bearing in mind", "taking into account", "given", "in light of"], hint: "Gerund of ter plus the fixed em conta. The verb form changes with the subject only in the personal infinitive version, tendo nós em conta — otherwise it stays frozen, whoever is speaking." },
      ],
    },
    {
      id: "pt-u107l4",
      unit: 107,
      lesson: 4,
      title: "A voz impessoal e a mesóclise",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Recognise and use the two marks of formal written Portuguese — a clitic sitting inside the verb, and a verb with no subject at all.",
      items: [
        { id: "pt-u107l4-dirseia", type: "vocab", front: "dir-se-ia", reading: "dirseia", meaning: "one would say", example: { jp: "Dir-se-ia que o problema é pequeno, mas o relatório diz o contrário.", en: "One would say the problem is small, but the report says the opposite." }, drill: { jp: "Dir-se-ia que o problema é pequeno", en: "One would say the problem is small" }, accept: ["one would say", "you would say", "it would seem", "one might say"], hint: "⚠ MESOCLISIS, and this is the pt-PT structure a Brazilian text will never show you. The clitic se goes INSIDE the verb: dir-se-ia is dizer plus se plus -ia, with the infinitive's r dropped. Only the future and conditional do this, and only in writing." },
        { id: "pt-u107l4-farsea", type: "vocab", front: "far-se-á", reading: "farsea", meaning: "will be done", example: { jp: "Far-se-á um novo estudo em maio, mas ninguém sabe quem o paga.", en: "A new study will be done in May, but nobody knows who pays for it." }, drill: { jp: "Far-se-á um novo estudo em maio", en: "A new study will be done in May" }, accept: ["will be done", "it will be done", "one will do", "shall be carried out"], hint: "The future half of the same rule: fazer plus se plus -á, with fazer shortening to far-. ⚠ Proclisis beats mesoclisis: after a negative or an adverb it becomes não se fará, and the hyphens vanish. That rule is the clitic law set out in the unit1.js header." },
        { id: "pt-u107l4-tratarsede", type: "vocab", front: "tratar-se de", reading: "tratarsede", meaning: "to be a matter of", example: { jp: "Pode tratar-se de um erro simples, mas a empresa não quer admitir nada.", en: "It may be a matter of a simple mistake, but the company will not admit anything." }, drill: { jp: "Pode tratar-se de um erro simples", en: "It may be a matter of a simple mistake" }, accept: ["to be a matter of", "to be a case of", "to be about", "it is a question of"], hint: "Impersonal and third-person only: trata-se de, never tratam-se de, even with a plural — trata-se de dois erros. That invariance is the rule learners break most often with this verb." },
        { id: "pt-u107l4-constatar", type: "vocab", front: "constatar", reading: "constatar", meaning: "to note as a fact", example: { jp: "O relatório constata o erro, mas não diz quem tem culpa.", en: "The report notes the mistake as a fact, but does not say who is to blame." }, drill: { jp: "O relatório vai constatar o erro", en: "The report is going to note the mistake" }, accept: ["to note as a fact", "to observe", "to establish as fact", "to find"], hint: "konsh-ta-TAR. To record that something IS so, without judging it — the verb an audit or an inspection uses. ⚠ Not constar (u89), which means to be recorded somewhere: one letter apart and grammatically opposite, since constar has no direct object." },
        { id: "pt-u107l4-cumpre", type: "vocab", front: "cumpre", reading: "cumpre", meaning: "it falls to us to", example: { jp: "Cumpre dizer que o estudo é bom, ainda que o resultado seja estranho.", en: "It falls to us to say that the study is good, even though the result is strange." }, drill: { jp: "Cumpre dizer que o estudo é bom", en: "It falls to us to say the study is good" }, accept: ["it falls to us to", "one must", "it is incumbent to", "we ought to"], hint: "KUM-pre, from cumprir. Used impersonally with an infinitive — cumpre referir, cumpre reconhecer — as a formal way of saying it should be said. The everyday cumprir (u44) means to fulfil an obligation." },
        { id: "pt-u107l4-urge", type: "vocab", front: "urge", reading: "urge", meaning: "it is urgent to", example: { jp: "Urge mudar a lei, mas o parlamento não tem tempo até junho.", en: "It is urgent to change the law, but parliament has no time until June." }, drill: { jp: "Urge mudar a lei este ano", en: "It is urgent to change the law this year" }, accept: ["it is urgent to", "there is an urgent need to", "it is pressing to", "we urgently need to"], hint: "UR-je, from urgir. Subjectless and followed by an infinitive — urge decidir, urge agir. The written cousin of urgente (u60), and the standard opening of a Portuguese opinion column." },
      ],
    },
  ],
};
