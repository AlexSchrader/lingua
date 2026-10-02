// PT Unit 97 — A ética e a responsabilidade (slot: ethics) — B2
//
// RIGHT AND WRONG, AND WHO CARRIES IT. u61 gave obligation and permission —
// obrigatório, o abuso, proibir, o dever in its everyday sense. u32 gave rights
// and equality. Neither gives the learner a way to argue a MORAL case: to say a
// decision was arbitrary, that somebody must answer for it, or that the choice
// itself was impossible. That is this unit.
//
// SLOT BOUNDARIES:
//   o abuso is SPENT at u61, denunciar at u47, a culpa earlier, a igualdade at
//   u32, assumir at u51, o compromisso at u62, ponderar and a justificação at
//   u76. Used in examples, none re-carded — so l2 takes responder por rather
//   than assumir, and l3 takes o imperativo rather than o compromisso.
//   u92 (mine) owns the MACHINERY of law — the court, the ruling, the appeal.
//   This unit is the rights and wrongs, which is a different question and
//   deliberately a different unit.
//
// A NOTE ON a equidade VERSUS a igualdade (u32): they are not synonyms and the
// gloss keeps them apart — equality is treating people the same, equity is
// treating them fairly, which sometimes means differently. That distinction is
// the whole of the Portuguese public debate on the subject, so the card earns
// its place rather than duplicating u32.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT97 = {
  id: "pt-u97",
  lang: "pt",
  title: "A ética e a responsabilidade",
  order: 97,
  stage: "b2",
  lessons: [
    {
      id: "pt-u97l1",
      unit: 97,
      lesson: 1,
      title: "Os princípios",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe someone's character in Portuguese — principled, worthy, with or without scruples.",
      items: [
        { id: "pt-u97l1-aetica", type: "vocab", front: "a ética", reading: "aetica", meaning: "ethics", example: { jp: "A ética da profissão obriga a guardar segredo, mesmo depois de anos.", en: "The ethics of the profession require keeping things secret, even years later." }, drill: { jp: "A ética da profissão é clara", en: "The ethics of the profession are clear" }, accept: ["ethics", "the ethics", "code of conduct", "ethical standards"], hint: "E-ti-ka. The rules a profession holds itself to, and the study of right and wrong. Note it stays singular in Portuguese where English says 'ethics'." },
        { id: "pt-u97l1-aintegridade", type: "vocab", front: "a integridade", reading: "aintegridade", meaning: "integrity", example: { jp: "A integridade do juiz nunca foi posta em causa por ninguém.", en: "The judge's integrity was never called into question by anyone." }, drill: { jp: "A integridade do juiz é conhecida", en: "The judge's integrity is well known" }, accept: ["integrity", "the integrity", "honesty", "uprightness", "probity"], hint: "in-te-gri-DA-de. Being whole and unbroken — of a person's character, and equally of a structure: a integridade do edifício. One word, both senses." },
        { id: "pt-u97l1-integro", type: "vocab", front: "íntegro", reading: "integro", meaning: "principled", example: { jp: "É um homem íntegro e toda a gente na cidade o sabe.", en: "He is a principled man and everyone in town knows it." }, drill: { jp: "É um homem íntegro e honesto", en: "He is a principled and honest man" }, accept: ["principled", "upright", "of integrity", "honest", "straight"], hint: "EEN-te-gru. Of a person who cannot be bought. It is not the same word as inteiro, whole, though both go back to the same Latin root meaning untouched." },
        { id: "pt-u97l1-oescrupulo", type: "vocab", front: "o escrúpulo", reading: "oescrupulo", meaning: "scruple", example: { jp: "Ele não teve um único escrúpulo ao assinar aquele papel.", en: "He didn't have a single scruple about signing that paper." }, drill: { jp: "O escrúpulo do médico impediu tudo", en: "The doctor's scruple stopped everything" }, accept: ["scruple", "the scruple", "qualm", "misgiving", "moral hesitation"], hint: "esh-KRU-pu-lu. The small moral hesitation that stops you. Usually met in the negative — sem escrúpulos, unscrupulous. Its Latin sense was a sharp stone in your shoe." },
        { id: "pt-u97l1-moral", type: "vocab", front: "moral", reading: "moral", meaning: "moral", example: { jp: "A questão moral é bem mais difícil do que a questão legal.", en: "The moral question is far harder than the legal one." }, drill: { jp: "A questão moral é mais difícil", en: "The moral question is harder" }, accept: ["moral", "ethical", "to do with right and wrong"], hint: "mu-RAL. As an adjective, to do with right and wrong. As a noun watch the gender closely: a moral is morality or morale, while o moral is a person's spirits." },
        { id: "pt-u97l1-digno", type: "vocab", front: "digno", reading: "digno", meaning: "worthy", example: { jp: "O trabalho é duro mas é digno, e ele tem orgulho nisso.", en: "The work is hard but it is worthy, and he takes pride in it." }, drill: { jp: "O trabalho é duro mas digno", en: "The work is hard but worthy" }, accept: ["worthy", "dignified", "decent", "honourable", "deserving"], hint: "DIG-nu. Deserving respect — um trabalho digno, uma vida digna. With de it means worthy of: digno de confiança, trustworthy. A dignidade is the noun." },
      ],
    },
    {
      id: "pt-u97l2",
      unit: 97,
      lesson: 2,
      title: "A responsabilidade",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say who carries the blame in Portuguese — who is held responsible, who must answer, where the burden sits.",
      items: [
        { id: "pt-u97l2-responsabilizar", type: "vocab", front: "responsabilizar", reading: "responsabilizar", meaning: "to hold responsible", example: { jp: "O relatório responsabiliza a empresa por tudo o que aconteceu na fábrica.", en: "The report holds the company responsible for everything that happened at the factory." }, drill: { jp: "Ninguém quis responsabilizar a empresa", en: "Nobody wanted to hold the company responsible" }, accept: ["to hold responsible", "hold responsible", "to blame", "to hold to account", "to pin it on"], hint: "rresh-pon-sa-bi-li-ZAR. To place the responsibility on someone, publicly. Responsabilizar-se, reflexive, is to take it on yourself instead." },
        { id: "pt-u97l2-responderpor", type: "vocab", front: "responder por", reading: "responderpor", meaning: "to answer for", example: { jp: "Quem assina o documento tem de responder por ele mais tarde.", en: "Whoever signs the document has to answer for it later." }, drill: { jp: "Alguém vai responder por este erro", en: "Somebody is going to answer for this mistake" }, accept: ["to answer for", "answer for", "to be accountable for", "to take the blame for"], hint: "The plain verb responder plus por. To be the one who must explain something afterwards — responder por um crime, in court. Quite different from responder a, to answer a question." },
        { id: "pt-u97l2-imputar", type: "vocab", front: "imputar", reading: "imputar", meaning: "to impute", example: { jp: "É difícil imputar a culpa a uma só pessoa neste caso.", en: "It is hard to impute the blame to a single person in this case." }, drill: { jp: "É difícil imputar a culpa a alguém", en: "It's hard to impute blame to anyone" }, accept: ["to impute", "impute", "to attribute", "to ascribe", "to lay at someone's door"], hint: "im-pu-TAR. A formal, largely legal word: to assign blame or a cost to someone — imputar a culpa a alguém. In accounting it is to charge a cost to an account." },
        { id: "pt-u97l2-anegligencia", type: "vocab", front: "a negligência", reading: "anegligencia", meaning: "negligence", example: { jp: "O tribunal falou em negligência e não em intenção de fazer mal.", en: "The court spoke of negligence and not of an intention to do harm." }, drill: { jp: "A negligência da empresa ficou provada", en: "The company's negligence was proven" }, accept: ["negligence", "the negligence", "carelessness", "neglect"], hint: "ne-gli-ZHEN-si-a. Failing to take the care you owed — the legal middle ground between an accident and doing it deliberately. Negligente is the adjective." },
        { id: "pt-u97l2-zelar", type: "vocab", front: "zelar", reading: "zelar", meaning: "to look after (to safeguard)", example: { jp: "A direção tem de zelar pela segurança de toda a gente na fábrica.", en: "The management has to look after everyone's safety at the factory." }, drill: { jp: "A direção deve zelar pela segurança", en: "The management must look after safety" }, accept: ["to look after", "look after", "to safeguard", "to watch over", "to see to"], hint: "ze-LAR. Always with por: zelar por. To take active care of something entrusted to you — a duty rather than a favour. O zelo is the diligence behind it." },
        { id: "pt-u97l2-oonus", type: "vocab", front: "o ónus", reading: "oonus", meaning: "burden", example: { jp: "O ónus da prova pertence a quem acusa e não a quem se defende.", en: "The burden of proof belongs to the accuser and not to the defendant." }, drill: { jp: "O ónus da prova é pesado", en: "The burden of proof is heavy" }, accept: ["burden", "the burden", "onus", "weight", "responsibility"], hint: "O-nush. The weight of an obligation — o ónus da prova is the burden of proof. Portugal writes ónus with an acute, Brazil ônus, and it does not change in the plural." },
      ],
    },
    {
      id: "pt-u97l3",
      unit: 97,
      lesson: 3,
      title: "O dilema",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk through a hard choice in Portuguese — the dilemma, the conscience, the deliberation, the scrutiny.",
      items: [
        { id: "pt-u97l3-odilema", type: "vocab", front: "o dilema", reading: "odilema", meaning: "dilemma", example: { jp: "O dilema é simples de explicar e quase impossível de resolver.", en: "The dilemma is simple to explain and almost impossible to resolve." }, drill: { jp: "O dilema é difícil de resolver", en: "The dilemma is hard to resolve" }, accept: ["dilemma", "the dilemma", "quandary", "hard choice"], hint: "di-LE-ma. A choice between two options that are both bad. Estar perante um dilema is to face one. Greek in origin: 'two premises'." },
        { id: "pt-u97l3-aconsciencia", type: "vocab", front: "a consciência", reading: "aconsciencia", meaning: "conscience", example: { jp: "A consciência não o deixou dormir durante quase três semanas.", en: "His conscience didn't let him sleep for almost three weeks." }, drill: { jp: "A consciência não o deixou dormir", en: "His conscience didn't let him sleep" }, accept: ["conscience", "the conscience", "awareness", "consciousness"], hint: "konsh-si-EN-si-a. Portuguese uses one word for both conscience and consciousness. Ter consciência de is to be aware of; ter a consciência tranquila is a clear conscience." },
        { id: "pt-u97l3-oimperativo", type: "vocab", front: "o imperativo", reading: "oimperativo", meaning: "imperative", example: { jp: "Existe um imperativo moral que nenhuma lei consegue escrever.", en: "There is a moral imperative that no law manages to write down." }, drill: { jp: "O imperativo moral está acima disso", en: "The moral imperative stands above that" }, accept: ["imperative", "the imperative", "obligation", "moral requirement", "must"], hint: "im-pe-ra-TEE-vu. Something that simply must be done — um imperativo moral. It is also the grammatical imperative, the command form you already use daily." },
        { id: "pt-u97l3-justificarse", type: "vocab", front: "justificar-se", reading: "justificarse", meaning: "to explain oneself", example: { jp: "Ele tentou justificar-se, mas ninguém na sala quis ouvir.", en: "He tried to explain himself, but nobody in the room wanted to listen." }, drill: { jp: "Ele tentou justificar-se sem sucesso", en: "He tried to explain himself without success" }, accept: ["to explain oneself", "explain oneself", "to justify oneself", "to account for oneself", "to make excuses"], hint: "zhush-ti-fi-KAR-se. To defend your own conduct after the fact. The plain justificar justifies a thing; the reflexive turns it on yourself, often with a hint of excuse-making." },
        { id: "pt-u97l3-deliberar", type: "vocab", front: "deliberar", reading: "deliberar", meaning: "to deliberate", example: { jp: "O tribunal deliberou durante horas antes de conseguir decidir.", en: "The court deliberated for hours before managing to decide." }, drill: { jp: "O tribunal vai deliberar esta tarde", en: "The court will deliberate this afternoon" }, accept: ["to deliberate", "deliberate", "to confer", "to weigh up", "to decide formally"], hint: "de-li-be-RAR. To weigh a decision formally, as a group — a court, a board, a committee. A deliberação is both the process and the decision that comes out of it." },
        { id: "pt-u97l3-oescrutinio", type: "vocab", front: "o escrutínio", reading: "oescrutinio", meaning: "scrutiny", example: { jp: "O escrutínio público mudou a forma como a empresa trabalha.", en: "Public scrutiny changed the way the company works." }, drill: { jp: "O escrutínio público mudou tudo", en: "Public scrutiny changed everything" }, accept: ["scrutiny", "the scrutiny", "close examination", "oversight"], hint: "esh-kru-TEE-ni-u. Close public examination — sob escrutínio, under scrutiny. At an election it is also the counting of votes, which is the original sense." },
      ],
    },
    {
      id: "pt-u97l4",
      unit: 97,
      lesson: 4,
      title: "A justiça",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about fairness in Portuguese — what is unfair, what is arbitrary, who gets away with it.",
      items: [
        { id: "pt-u97l4-injusto", type: "vocab", front: "injusto", reading: "injusto", meaning: "unfair", example: { jp: "O castigo foi injusto e toda a turma achou exatamente o mesmo.", en: "The punishment was unfair and the whole class thought exactly the same." }, drill: { jp: "O castigo foi injusto e duro", en: "The punishment was unfair and harsh" }, accept: ["unfair", "unjust", "not right", "undeserved"], hint: "in-ZHUSH-tu, the negative of justo. Portuguese reaches for it constantly about a decision or a result — não é justo is the first thing any Portuguese child says." },
        { id: "pt-u97l4-aequidade", type: "vocab", front: "a equidade", reading: "aequidade", meaning: "fairness", example: { jp: "A equidade não é o mesmo que a igualdade, e isso muda tudo.", en: "Equity is not the same as equality, and that changes everything." }, drill: { jp: "A equidade não é a igualdade", en: "Equity is not equality" }, accept: ["fairness", "the fairness", "equity", "even-handedness"], hint: "e-ki-DA-de. Treating people fairly, which sometimes means treating them differently — as against a igualdade (Unit 32), treating them the same. The distinction is the whole debate." },
        { id: "pt-u97l4-aarbitrariedade", type: "vocab", front: "a arbitrariedade", reading: "aarbitrariedade", meaning: "arbitrariness", example: { jp: "A arbitrariedade das decisões é o que mais incomoda as pessoas.", en: "The arbitrariness of the decisions is what bothers people most." }, drill: { jp: "A arbitrariedade das decisões incomoda todos", en: "The arbitrariness of the decisions bothers everyone" }, accept: ["arbitrariness", "the arbitrariness", "capriciousness", "unpredictability"], hint: "ar-bi-tra-ri-e-DA-de. Deciding by whim rather than by rule — the complaint at the heart of most Portuguese grumbling about bureaucracy. Arbitrário is the adjective." },
        { id: "pt-u97l4-sancionar", type: "vocab", front: "sancionar", reading: "sancionar", meaning: "to penalise", example: { jp: "A lei permite sancionar quem não cumprir o prazo estabelecido.", en: "The law allows penalising anyone who fails to meet the set deadline." }, drill: { jp: "A lei permite sancionar quem falhar", en: "The law allows penalising whoever fails" }, accept: ["to penalise", "penalise", "to sanction", "to punish", "to impose a penalty on"], hint: "san-si-u-NAR. A genuine trap: it means BOTH to penalise and to formally approve, exactly like English 'sanction'. In Portuguese news it is almost always the punishment." },
        { id: "pt-u97l4-aimpunidade", type: "vocab", front: "a impunidade", reading: "aimpunidade", meaning: "impunity", example: { jp: "A impunidade é o que faz o problema repetir-se todos os anos.", en: "Impunity is what makes the problem repeat itself every year." }, drill: { jp: "A impunidade faz o problema repetir-se", en: "Impunity makes the problem repeat itself" }, accept: ["impunity", "the impunity", "freedom from punishment", "getting away with it"], hint: "im-pu-ni-DA-de. Doing wrong and facing nothing for it — agir com impunidade. Built on punir, to punish, with the negative im-." },
        { id: "pt-u97l4-lesar", type: "vocab", front: "lesar", reading: "lesar", meaning: "to wrong (to harm)", example: { jp: "A decisão veio lesar justamente quem menos podia perder dinheiro.", en: "The decision wronged precisely those who could least afford to lose money." }, drill: { jp: "A decisão veio lesar muita gente", en: "The decision wronged a lot of people" }, accept: ["to wrong", "wrong", "to harm", "to damage", "to injure someone's interests"], hint: "le-ZAR. To damage someone's rights or interests — a legal and financial word, not a physical one. Os lesados are the injured parties, a phrase from every Portuguese banking scandal." },
      ],
    },
  ],
};
