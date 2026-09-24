// PT Unit 106 — Gramática 9 — o irreal e a condição (slot: grammar-9) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Authored by the pt B2 block-2 seat, 2026-09-23, to §C1–C10 (src/data/pt/unit88.js).
// Retitled from the scaffold's English placeholder, per CLAUDE.md "No front
// language": the slot is grammar-9, the theme is Portuguese.
//
// ⚠ THE SUBJUNCTIVE MORPHOLOGY IS ALREADY TAUGHT, AND THAT DECIDES THIS UNIT.
// u69 owns the present subjunctive (seja, esteja, tenha, faça, possa, saiba,
// vá, diga, venha, ponha, queira, haja, para que, antes que, até que, SEM QUE,
// DESDE QUE); u70 owns the imperfect subjunctive and the se-clause (fosse,
// tivesse, estivesse, pudesse, quisesse, viesse, dissesse, desse, houvesse,
// COMO SE, NEM QUE, MESMO QUE, AINDA QUE, A NÃO SER QUE, teria feito, quem me
// dera, oxalá); u71 owns the future subjunctive (quando for, tiver, puder,
// fizer, souber, disser, vier, quiser, logo que); u37 owns the conditional
// (seria, teria, gostaria, poderia, faria, devia).
// So this unit teaches NO NEW MORPHOLOGY. It teaches the CONNECTORS and FIXED
// EXPRESSIONS that attach to forms the learner already has — which is the whole
// gap left at B2: a learner who can conjugate fosse still cannot say "short of
// a court ruling", "on pain of", "it was to be expected" or "very nearly".
// GRAMMAR HAS NO ITEM TYPE in this project (CLAUDE.md): each one is carded as
// function-word vocab whose example sentence carries the pattern.
// lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT106 = {
  id: "pt-u106",
  lang: "pt",
  title: "Gramática 9 — o irreal e a condição",
  order: 106,
  stage: "b2",
  lessons: [
    {
      id: "pt-u106l1",
      unit: 106,
      lesson: 1,
      title: "Pôr a condição",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Attach a condition to a statement in Portuguese with something other than se — in case, short of, on pain of, on condition that, depending on.",
      items: [
        { id: "pt-u106l1-caso", type: "vocab", front: "caso", reading: "caso", meaning: "in case (if)", example: { jp: "Caso o resultado seja fraco, o plano muda todo.", en: "In case the result is weak, the whole plan changes." }, drill: { jp: "Caso o resultado seja fraco mudamos tudo", en: "In case the result is weak we change everything" }, accept: ["in case", "in case (if)", "if", "should it be that", "in the event that"], hint: "KA-zu. A conjunction here, not the noun o caso (u40) — and it TAKES THE SUBJUNCTIVE with no que after it: caso seja, caso tenha, never caso que. That missing que is the commonest learner error with this word." },
        { id: "pt-u106l1-amenosque", type: "vocab", front: "a menos que", reading: "amenosque", meaning: "unless (in writing)", example: { jp: "A menos que o tribunal diga outra coisa, a obra começa em maio.", en: "Unless the court says otherwise, the building work starts in May." }, drill: { jp: "A menos que chova vamos hoje", en: "Unless it rains we are going today" }, accept: ["unless (in writing)", "unless", "short of", "except if"], hint: "The written twin of a não ser que (u70), which is the spoken one. Same meaning, same subjunctive, different register — a Portuguese contract writes a menos que and a friend says a não ser que." },
        { id: "pt-u106l1-sobpenade", type: "vocab", front: "sob pena de", reading: "sobpenade", meaning: "on pain of", example: { jp: "A empresa tem de pagar dentro do prazo, sob pena de perder a licença.", en: "The company has to pay within the deadline, on pain of losing the licence." }, drill: { jp: "Paga dentro do prazo sob pena de multa", en: "Pay within the deadline on pain of a fine" }, accept: ["on pain of", "under penalty of", "or else face", "failing which"], hint: "Takes an INFINITIVE, never a clause: sob pena de perder, sob pena de ser excluído. Built on a pena (u92), the sentence a court hands down — which is why it is the standard formula in Portuguese contracts and notices." },
        { id: "pt-u106l1-nacondicaode", type: "vocab", front: "na condição de", reading: "nacondicaode", meaning: "on condition that", example: { jp: "O banco empresta o dinheiro na condição de o cliente ter trabalho, mas ninguém verifica isso.", en: "The bank lends the money on condition that the client has a job, but nobody checks that." }, drill: { jp: "Aceito na condição de ele vir", en: "I accept on condition that he comes" }, accept: ["on condition that", "provided", "subject to", "on the condition of"], hint: "Followed by the PERSONAL INFINITIVE — na condição de o cliente ter, na condição de nós pagarmos — which is the construction u37 teaches and this is its natural home. Desde que (u69) does the same job with a subjunctive instead." },
        { id: "pt-u106l1-contantoque", type: "vocab", front: "contanto que", reading: "contantoque", meaning: "provided that", example: { jp: "Contanto que o prazo seja curto, o cliente aceita o preço.", en: "Provided that the deadline is short, the client accepts the price." }, drill: { jp: "Contanto que o prazo seja curto aceito", en: "Provided the deadline is short I accept" }, accept: ["provided that", "so long as", "as long as", "providing"], hint: "kon-TAN-tu ke. Subjunctive, always. ⚠ More emphatic than desde que (u69): contanto que signals that this one condition is the whole of your agreement, so Portuguese uses it when drawing a line rather than when listing terms." },
        { id: "pt-u106l1-consoante", type: "vocab", front: "consoante", reading: "consoante", meaning: "depending on", example: { jp: "O preço muda consoante a quantidade, mas o cliente quer sempre o mesmo valor.", en: "The price changes depending on the quantity, but the client always wants the same value." }, drill: { jp: "O preço muda consoante a quantidade", en: "The price changes depending on the quantity" }, accept: ["depending on", "according to", "in line with", "as per"], hint: "kon-SWAN-te. A preposition, so a NOUN follows it, not a clause. ⚠ The identical word is also the grammar term for a consonant, and Portuguese keeps both without confusion because one is a preposition and one is a noun." },
      ],
    },
    {
      id: "pt-u106l2",
      unit: 106,
      lesson: 2,
      title: "O que por pouco não aconteceu",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk in Portuguese about the thing that nearly happened, the thing that was always going to, and the thing someone went so far as to do.",
      items: [
        { id: "pt-u106l2-porpouco", type: "vocab", front: "por pouco", reading: "porpouco", meaning: "very nearly", example: { jp: "Por pouco o avião não parte sem ela, mas a demora salva tudo.", en: "The plane very nearly left without her, but the delay saved everything." }, drill: { jp: "Por pouco não perdemos o comboio", en: "We very nearly missed the train" }, accept: ["very nearly", "by a whisker", "almost", "only just"], hint: "⚠ THE TRAP: por pouco takes a NEGATIVE verb for a POSITIVE meaning. Por pouco não caí means I nearly fell — not I nearly didn't. The não is part of the idiom and translating it destroys the sense." },
        { id: "pt-u106l2-quaseque", type: "vocab", front: "quase que", reading: "quaseque", meaning: "all but", example: { jp: "Quase que ele perde o emprego, mas o chefe nunca sabe do erro.", en: "He all but lost his job, but the boss never found out about the mistake." }, drill: { jp: "Quase que ele perde o emprego", en: "He all but lost his job" }, accept: ["all but", "just about", "as good as", "very nearly"], hint: "The spoken intensifier of quase (u28), and it takes the PRESENT for a past near-miss: quase que caio, I nearly fell. That present-for-past is normal in Portuguese speech and looks wrong written down." },
        { id: "pt-u106l2-eradeesperar", type: "vocab", front: "era de esperar", reading: "eradeesperar", meaning: "it was to be expected", example: { jp: "Era de esperar este resultado, mas ninguém quer admitir isso.", en: "This result was to be expected, but nobody wants to admit it." }, drill: { jp: "Era de esperar este resultado todo", en: "This whole result was to be expected" }, accept: ["it was to be expected", "it was predictable", "no surprise", "was only to be expected"], hint: "A frozen phrase in the imperfect — era, never foi. Its present twin é de esperar means it is to be expected. The construction ser de plus infinitive is a Portuguese way of saying something is fitting: é de crer, é de recear." },
        { id: "pt-u106l2-vira", type: "vocab", front: "vir a", reading: "vira", meaning: "to end up", example: { jp: "Este plano pode vir a resultar, embora ninguém queira apostar hoje.", en: "This plan may end up working, although nobody wants to bet on it today." }, drill: { jp: "O plano pode vir a resultar", en: "The plan may end up working" }, accept: ["to end up", "to come to", "to eventually", "to turn out to"], hint: "Vir plus a plus infinitive, marking a thing that happens EVENTUALLY rather than now: veio a saber, he eventually found out. ⚠ Not the same as ir plus infinitive, which is simply the future." },
        { id: "pt-u106l2-chegara", type: "vocab", front: "chegar a", reading: "chegara", meaning: "to go so far as to", example: { jp: "O tribunal chega a ouvir o réu, mas não muda a sentença.", en: "The court goes so far as to hear the defendant, but does not change the sentence." }, drill: { jp: "Ele pode chegar a pedir dinheiro", en: "He may go so far as to ask for money" }, accept: ["to go so far as to", "to even", "to actually", "to get to the point of"], hint: "Chegar (u20) plus a plus infinitive. ⚠ The literal arriving sense is gone: cheguei a pensar nisso means I even thought about it. Portuguese marks surprise at the extent of an act this way, where English uses even." },
        { id: "pt-u106l2-haviade", type: "vocab", front: "havia de", reading: "haviade", meaning: "was bound to", example: { jp: "O plano havia de acabar mal, mas ninguém queria ouvir.", en: "The plan was bound to end badly, but nobody wanted to listen." }, drill: { jp: "O plano havia de acabar mal", en: "The plan was bound to end badly" }, accept: ["was bound to", "had to happen", "was always going to", "was destined to"], hint: "Built on havia (u36) plus de plus infinitive. ⚠ pt-PT keeps this where Brazil would say ia. It carries a note of I told you so that the plain future does not, and Portuguese speakers use it far more in speech than in writing." },
      ],
    },
    {
      id: "pt-u106l3",
      unit: 106,
      lesson: 3,
      title: "Supor para argumentar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grant a premise you do not believe, in Portuguese, so that you can argue from it — supposing, granting, hypothetically, in theory.",
      items: [
        { id: "pt-u106l3-supondoque", type: "vocab", front: "supondo que", reading: "supondoque", meaning: "supposing that", example: { jp: "Supondo que o cliente aceita o preço, ainda falta a licença da câmara.", en: "Supposing that the client accepts the price, the council licence is still missing." }, drill: { jp: "Supondo que o cliente aceita continuamos", en: "Supposing the client accepts we carry on" }, accept: ["supposing that", "assuming that", "suppose", "let us say that"], hint: "The gerund of supor (u54) used as a connector. Takes the INDICATIVE when you are merely laying out a case — supondo que aceita — and the subjunctive only if you doubt it outright." },
        { id: "pt-u106l3-admitindoque", type: "vocab", front: "admitindo que", reading: "admitindoque", meaning: "granting that", example: { jp: "Admitindo que o estudo está correto, o resultado continua estranho.", en: "Granting that the study is correct, the result is still strange." }, drill: { jp: "Admitindo que o estudo está correto avançamos", en: "Granting the study is correct we go on" }, accept: ["granting that", "conceding that", "even accepting that", "admitting that"], hint: "From admitir (u51). ⚠ Stronger concession than supondo que: you are granting your opponent the point rather than merely entertaining it, which makes it the natural partner of the conceder move taught at u88." },
        { id: "pt-u106l3-hipotetico", type: "vocab", front: "hipotético", reading: "hipotetico", meaning: "hypothetical", example: { jp: "O caso é hipotético, mas o problema que ele apresenta é real.", en: "The case is hypothetical, but the problem it presents is real." }, drill: { jp: "Este caso é apenas hipotético", en: "This case is only hypothetical" }, accept: ["hypothetical", "made up for argument", "notional"], hint: "i-po-TE-ti-ku, the adjective of a hipótese (u54). Portuguese uses it exactly as English does, including the dismissive sense: isso é hipotético means that is not the real question." },
        { id: "pt-u106l3-aconjetura", type: "vocab", front: "a conjetura", reading: "aconjetura", meaning: "conjecture", example: { jp: "A conjetura do autor é boa, mas nenhum dado a apoia.", en: "The author's conjecture is good, but no data support it." }, drill: { jp: "A conjetura do autor é boa", en: "The author's conjecture is good" }, accept: ["conjecture", "the conjecture", "speculation", "guess"], hint: "kon-je-TU-ra. ⚠ Spelt WITHOUT the c since the 1990 accord — conjetura, not conjectura, the same rule that gives objeção at u88. A step below a hipótese: a hipótese is framed to be tested, a conjetura merely offered." },
        { id: "pt-u106l3-pressupor", type: "vocab", front: "pressupor", reading: "pressupor", meaning: "to presuppose", example: { jp: "Pressupor que o cliente tem carro é o erro do plano, mas ninguém percebe isso.", en: "To presuppose that the client has a car is the plan's mistake, but nobody realises it." }, drill: { jp: "Não podemos pressupor nada sobre eles", en: "We cannot presuppose anything about them" }, accept: ["to presuppose", "presuppose", "to take for granted", "to assume in advance"], hint: "pre-su-POR. The verb of o pressuposto (u88): to build on something without stating it. Conjugates like pôr — pressupõe, pressupunha, pressuposto — so it is irregular in exactly the way pôr is." },
        { id: "pt-u106l3-teoricamente", type: "vocab", front: "teoricamente", reading: "teoricamente", meaning: "in theory", example: { jp: "Teoricamente o sistema funciona, mas na prática o utente espera um ano.", en: "In theory the system works, but in practice the service user waits a year." }, drill: { jp: "Teoricamente o sistema funciona muito bem", en: "In theory the system works very well" }, accept: ["in theory", "theoretically", "on paper", "in principle (as theory)"], hint: "From a teoria (u58). Portuguese pairs it with na prática as reliably as English pairs in theory with in practice, and the pair is the standard way to introduce a complaint." },
      ],
    },
    {
      id: "pt-u106l4",
      unit: 106,
      lesson: 4,
      title: "Fechar a porta à alternativa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Shut off the other branch in Portuguese — or else, failing that, in any case, come what may, as a last resort.",
      items: [
        { id: "pt-u106l4-senao", type: "vocab", front: "senão", reading: "senao", meaning: "or else", example: { jp: "Temos de avançar hoje, senão o prazo acaba e o dinheiro desaparece.", en: "We have to move today, or else the deadline runs out and the money disappears." }, drill: { jp: "Avança agora senão perdes o lugar", en: "Move now or else you lose the place" }, accept: ["or else", "otherwise", "or", "if not"], hint: "se-NOWN. ⚠ ONE WORD and it is not se não. Written apart, se não means if not and belongs to a different clause: se não vieres, if you do not come. Together it means otherwise. Portuguese marks the difference only by the space." },
        { id: "pt-u106l4-casocontrario", type: "vocab", front: "caso contrário", reading: "casocontrario", meaning: "failing that", example: { jp: "O cliente tem de assinar amanhã, caso contrário o negócio acaba.", en: "The client has to sign tomorrow, failing which the deal is off." }, drill: { jp: "Assina amanhã caso contrário perdemos tudo", en: "Sign tomorrow failing which we lose everything" }, accept: ["failing that", "failing which", "otherwise", "if not"], hint: "The written register's senão. A Portuguese letter or contract says caso contrário; a person in a hurry says senão. Note there is no de: never no caso contrário." },
        { id: "pt-u106l4-dequalquermodo", type: "vocab", front: "de qualquer modo", reading: "dequalquermodo", meaning: "in any case", example: { jp: "De qualquer modo o resultado é o mesmo, embora a maneira seja outra.", en: "In any case the result is the same, although the way of getting there is another." }, drill: { jp: "De qualquer modo o resultado é igual", en: "In any case the result is the same" }, accept: ["in any case", "either way", "anyway", "in any event"], hint: "Built on qualquer (u40). Interchangeable with de qualquer forma and de qualquer maneira — Portuguese has all three and uses them identically, which is worth knowing so you recognise the other two." },
        { id: "pt-u106l4-fossecomofosse", type: "vocab", front: "fosse como fosse", reading: "fossecomofosse", meaning: "come what may", example: { jp: "Fosse como fosse, ele queria acabar o curso, mas o dinheiro nunca chega.", en: "Come what may, he wanted to finish the course, but the money never arrives." }, drill: { jp: "Fosse como fosse ele queria acabar", en: "Come what may he wanted to finish" }, accept: ["come what may", "whatever happened", "no matter what", "one way or another"], hint: "The doubled-subjunctive pattern, which Portuguese uses productively: seja como for, haja o que houver, custe o que custar. Once you see the shape X-subjunctive plus link plus X-subjunctive, you can build the others yourself." },
        { id: "pt-u106l4-emultimocaso", type: "vocab", front: "em último caso", reading: "emultimocaso", meaning: "as a last resort", example: { jp: "Em último caso o Estado paga, mas ninguém quer chegar a isso.", en: "As a last resort the State pays, but nobody wants it to come to that." }, drill: { jp: "Em último caso o Estado paga tudo", en: "As a last resort the State pays everything" }, accept: ["as a last resort", "if all else fails", "in the last resort", "at worst"], hint: "Built on último (u86). ⚠ Not em último lugar, which means lastly in a list — this one is about the final option, not the final item." },
        { id: "pt-u106l4-aindaassim", type: "vocab", front: "ainda assim", reading: "aindaassim", meaning: "even so", example: { jp: "O plano tem falhas, ainda assim é melhor do que nada.", en: "The plan has flaws, even so it is better than nothing." }, drill: { jp: "O plano tem falhas ainda assim avançamos", en: "The plan has flaws even so we go on" }, accept: ["even so", "still", "nonetheless", "all the same"], hint: "Two taught words doing one job. ⚠ Distinguish from ainda que (u70), which is a conjunction taking the subjunctive: ainda assim joins two finished sentences, ainda que opens a clause inside one." },
      ],
    },
  ],
};
