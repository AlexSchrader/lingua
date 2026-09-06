// PT Unit 44 — A lei e os documentos (slot: coverage-a2-5) — A2
// Rules, courts and paperwork. A1 gave o polícia and a polícia (u18) and the
// buildings of a town (u7), but nothing that lets a learner read a sign saying
// something is forbidden, sign a form, or understand a fine.
//
// Sited away from block 1's u24, which owns the employment paperwork
// (o contrato, o prazo, o relatório) — this unit is CIVIC and legal paper, not
// workplace paper. It is also kept clear of block 2's u32 (society and daily
// life): no o cidadão, no a sociedade, no institutions of government. What is
// here is what a resident actually handles: rules, a court, a form, a fine.
//
// Two cards reach back and close A1 loops rather than opening new ones:
//   · o direito is the SAME word as à direita (Unit 7) — right-hand, right-side
//     and legal right are one word in Portuguese, and the hint says so.
//   · a licença is the word already met inside com licença (Unit 2).
// o carimbo (the rubber stamp) is deliberately set against o selo (the postage
// stamp), which is carded later in u49.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT44 = {
  id: "pt-u44",
  lang: "pt",
  title: "A lei e os documentos",
  order: 44,
  stage: "a2",
  lessons: [
    {
      id: "pt-u44l1",
      unit: 44,
      lesson: 1,
      title: "A lei e as regras",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what is allowed and what is forbidden in Portugal, and name the rule that decides it.",
      items: [
        { id: "pt-u44l1-alei", type: "vocab", front: "a lei", reading: "alei", meaning: "law", example: { jp: "A lei de Portugal é clara e a regra da escola é simples.", en: "Portugal's law is clear and the school's rule is simple." }, drill: { jp: "A lei de Portugal é clara", en: "Portugal's law is clear" }, accept: ["the law", "act", "statute"], hint: "LAY — one syllable; plural as leis. Fazer uma lei is to pass one. Portugal's constitution is a Constituição and the body of civil law is o Código Civil." },
        { id: "pt-u44l1-odireito", type: "vocab", front: "o direito", reading: "odireito", meaning: "right", example: { jp: "O direito ao trabalho e à escola é uma lei de Portugal.", en: "The right to work and to school is a law in Portugal." }, drill: { jp: "O direito ao trabalho é importante", en: "The right to work is important" }, accept: ["the right", "law", "entitlement"], hint: "di-RAY-tu. A legal right — and also the STUDY of law: Ana estuda Direito. It is the very same word as the right-hand side in à direita, Unit 7, and as \"straight ahead\". Context carries all three." },
        { id: "pt-u44l1-odever", type: "vocab", front: "o dever", reading: "odever", meaning: "duty", example: { jp: "O dever de todos é cumprir a lei de Portugal.", en: "Everyone's duty is to obey Portugal's law." }, drill: { jp: "O dever de todos é importante", en: "Everyone's duty is important" }, accept: ["the duty", "obligation", "responsibility"], hint: "de-VER — the NOUN, which is why it is taught with its article. Without the article the same word is the verb \"must\" or \"to owe\", and the grammar units own that. Os deveres, plural, is also school homework." },
        { id: "pt-u44l1-proibido", type: "vocab", front: "proibido", reading: "proibido", meaning: "forbidden", example: { jp: "É proibido comer no museu e a regra está na porta.", en: "Eating in the museum is forbidden and the rule is on the door." }, drill: { jp: "É proibido comer no museu", en: "Eating in the museum is forbidden" }, accept: ["prohibited", "banned", "not allowed", "no"], hint: "pru-i-BEE-du — four syllables, the oi pulled apart rather than glided. What you will actually see is the single word PROIBIDO in capitals, or É PROIBIDO plus a verb. The verb is proibir." },
        { id: "pt-u44l1-permitido", type: "vocab", front: "permitido", reading: "permitido", meaning: "allowed", example: { jp: "É permitido comer na esplanada e é proibido no museu de Lisboa.", en: "Eating on the terrace is allowed and it's forbidden in the Lisbon museum." }, drill: { jp: "É permitido comer na esplanada", en: "Eating on the terrace is allowed" }, accept: ["permitted", "authorised", "authorized", "okay"], hint: "per-mi-TEE-du, from permitir; the noun is a permissão. Portuguese signage prefers the negative — you will read PROIBIDO far more often than you will ever read PERMITIDO." },
        { id: "pt-u44l1-aregra", type: "vocab", front: "a regra", reading: "aregra", meaning: "rule", example: { jp: "A regra da escola é simples e está na porta da sala de aula.", en: "The school's rule is simple and it's on the classroom door." }, drill: { jp: "A regra da escola é simples", en: "The school's rule is simple" }, accept: ["the rule", "regulation", "norm"], hint: "RRE-gra, strong opening r. Em regra means \"as a rule\". Careful with uma régua, which takes an accent and is the ruler you draw lines with — one letter, and an entirely different object." },
      ],
    },
    {
      id: "pt-u44l2",
      unit: 44,
      lesson: 2,
      title: "O tribunal",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the people and the places of a Portuguese court, and say whether someone is guilty or innocent.",
      items: [
        { id: "pt-u44l2-otribunal", type: "vocab", front: "o tribunal", reading: "otribunal", meaning: "court", example: { jp: "O tribunal de Lisboa é enorme e o juiz do julgamento é famoso.", en: "The Lisbon court is enormous and the trial's judge is famous." }, drill: { jp: "O tribunal de Lisboa é enorme", en: "The Lisbon court is enormous" }, accept: ["the court", "courthouse", "tribunal"], hint: "tri-bu-NAL, stressed on the end; plural os tribunais. Both the building and the institution. Portugal's highest is o Tribunal Constitucional." },
        { id: "pt-u44l2-ojuiz", type: "vocab", front: "o juiz", reading: "ojuiz", meaning: "judge", example: { jp: "O juiz do tribunal é simpático e trabalha em Coimbra.", en: "The court's judge is friendly and works in Coimbra." }, drill: { jp: "O juiz do tribunal é simpático", en: "The court's judge is friendly" }, accept: ["the judge"], hint: "zhu-EESH — two syllables, and the final z shushes like any Portuguese final s. The feminine takes an accent to keep the vowels apart: a juíza. Plural os juízes." },
        { id: "pt-u44l2-ocrime", type: "vocab", front: "o crime", reading: "ocrime", meaning: "crime", example: { jp: "O crime foi na rua de Ana e a polícia está no prédio.", en: "The crime was on Ana's street and the police are in the building." }, drill: { jp: "O crime foi na rua", en: "The crime was on the street" }, accept: ["the crime", "offence", "offense"], hint: "KREE-me — masculine, despite the -e ending. The person is um criminoso. The forces that deal with it are the PSP in town and the GNR outside it, both from Unit 18." },
        { id: "pt-u44l2-ojulgamento", type: "vocab", front: "o julgamento", reading: "ojulgamento", meaning: "trial", example: { jp: "O julgamento do crime é amanhã no tribunal de Braga.", en: "The trial for the crime is tomorrow at the Braga court." }, drill: { jp: "O julgamento é amanhã no tribunal", en: "The trial is tomorrow at the court" }, accept: ["the trial", "judgement", "judgment", "hearing"], hint: "zhul-ga-MEN-tu, from julgar, to judge — the verb behind o juiz. That -mento ending turns a verb into the event of doing it, the same way o tratamento does." },
        { id: "pt-u44l2-culpado", type: "vocab", front: "culpado", reading: "culpado", meaning: "guilty", example: { jp: "O homem não é culpado e o tribunal foi claro no julgamento.", en: "The man isn't guilty and the court was clear at the trial." }, drill: { jp: "O homem não é culpado", en: "The man isn't guilty" }, accept: ["at fault", "to blame", "responsible"], hint: "kul-PA-du, agreeing culpado/culpada. A culpa is the fault or the blame, and the sentence it really lives in is a culpa é minha — it's my fault." },
        { id: "pt-u44l2-inocente", type: "vocab", front: "inocente", reading: "inocente", meaning: "innocent", example: { jp: "A mulher é inocente e o julgamento no tribunal foi rápido.", en: "The woman is innocent and the trial at the court was quick." }, drill: { jp: "A mulher é inocente", en: "The woman is innocent" }, accept: ["not guilty", "blameless", "harmless"], hint: "i-nu-SEN-te, and it does not change for gender: o homem inocente, a mulher inocente. Of a child it means harmless rather than not-guilty — exactly the same double life the English word has." },
      ],
    },
    {
      id: "pt-u44l3",
      unit: 44,
      lesson: 3,
      title: "Os documentos",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Fill in and sign a Portuguese form, and name the paperwork you are being asked for.",
      items: [
        { id: "pt-u44l3-odocumento", type: "vocab", front: "o documento", reading: "odocumento", meaning: "document", example: { jp: "O documento está na pasta de Ana, com a fatura da loja.", en: "The document is in Ana's folder, with the shop's invoice." }, drill: { jp: "O documento está na pasta", en: "The document is in the folder" }, accept: ["the document", "paper", "papers", "record"], hint: "du-ku-MEN-tu. Any official paper. In the plural, os documentos is what a police officer asks for at the roadside — meaning your ID and the car's papers together, not one sheet." },
        { id: "pt-u44l3-opapel", type: "vocab", front: "o papel", reading: "opapel", meaning: "paper", example: { jp: "O papel do documento é branco e a caneta do escritório é preta.", en: "The document's paper is white and the office pen is black." }, drill: { jp: "O papel do documento é branco", en: "The document's paper is white" }, accept: ["the paper", "sheet", "role", "part"], hint: "pa-PEL, stressed on the end; plural os papéis, with the same -el to -éis swap as o pastel. It is paper the material, a sheet of it, and a ROLE — o papel de Ana no filme, her part in the film." },
        { id: "pt-u44l3-aassinatura", type: "vocab", front: "a assinatura", reading: "aassinatura", meaning: "signature", example: { jp: "A assinatura de Tiago está no fim do papel, com o carimbo.", en: "Tiago's signature is at the end of the paper, with the stamp." }, drill: { jp: "A assinatura está no documento", en: "The signature is on the document" }, accept: ["the signature", "subscription", "autograph"], hint: "a-si-na-TOO-ra — the double ss keeps the s hard. It is also a SUBSCRIPTION: a assinatura do jornal. Same idea underneath — you signed up for it." },
        { id: "pt-u44l3-assinar", type: "vocab", front: "assinar", reading: "assinar", meaning: "to sign", example: { jp: "Vou assinar o documento com a caneta preta do escritório.", en: "I'm going to sign the document with the office's black pen." }, drill: { jp: "Assinar o documento com a caneta", en: "To sign the document with the pen" }, accept: ["sign", "to subscribe", "to sign up"], hint: "a-si-NAR: assino, assinas, assina. Careful on both sides — Spanish asignar means to assign, and Portuguese ensinar (Unit 17) means to teach. Three verbs, a letter apart in places." },
        { id: "pt-u44l3-oformulario", type: "vocab", front: "o formulário", reading: "oformulario", meaning: "form", example: { jp: "O formulário da escola é comprido e a assinatura vai no fim.", en: "The school form is long and the signature goes at the end." }, drill: { jp: "O formulário da escola é comprido", en: "The school form is long" }, accept: ["the form", "application form", "paperwork"], hint: "for-mu-LA-riu, with the -ário ending of o dicionário. Filling one in is PREENCHER — not encher, which is what you do to a bottle in Unit 43. The prefix makes all the difference." },
        { id: "pt-u44l3-ocarimbo", type: "vocab", front: "o carimbo", reading: "ocarimbo", meaning: "stamp", example: { jp: "O carimbo do tribunal está no documento e a assinatura do juiz também.", en: "The court's stamp is on the document and so is the judge's signature." }, drill: { jp: "O carimbo está no documento", en: "The stamp is on the document" }, accept: ["the rubber stamp", "rubber stamp", "seal", "postmark"], hint: "ka-REEM-bu — the RUBBER stamp an official thumps onto your paper, and Portuguese bureaucracy still runs on it. A postage stamp is a completely different word, o selo." },
      ],
    },
    {
      id: "pt-u44l4",
      unit: 44,
      lesson: 4,
      title: "As multas e as licenças",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Deal with a fine, a licence or a tax in Portugal, and say what you are entitled to do.",
      items: [
        { id: "pt-u44l4-amulta", type: "vocab", front: "a multa", reading: "amulta", meaning: "fine", example: { jp: "A multa do carro é de cem euros e o pai de Ana vai pagar hoje.", en: "The car fine is a hundred euros and Ana's father is going to pay it today." }, drill: { jp: "A multa do carro é cara", en: "The car fine is expensive" }, accept: ["the fine", "penalty", "ticket"], hint: "MUL-ta; the verb is multar. Nothing to do with \"multi-\" — it is Latin multa, a penalty. A parking ticket is uma multa de estacionamento." },
        { id: "pt-u44l4-alicenca", type: "vocab", front: "a licença", reading: "alicenca", meaning: "licence", example: { jp: "A licença do restaurante está no documento com o carimbo da cidade.", en: "The restaurant's licence is on the document with the city's stamp." }, drill: { jp: "A licença está no documento", en: "The licence is on the document" }, accept: ["the licence", "license", "permit", "the permit"], hint: "li-SEN-sa, cedilla. You already met this word inside com licença in Unit 2 — \"with permission\", which is exactly what you say squeezing past somebody. One word, two lives." },
        { id: "pt-u44l4-oimposto", type: "vocab", front: "o imposto", reading: "oimposto", meaning: "tax", example: { jp: "O imposto é alto em Portugal e o preço do vinho na loja é caro.", en: "Tax is high in Portugal and the price of wine in the shop is expensive." }, drill: { jp: "O imposto em Portugal é alto", en: "Tax in Portugal is high" }, accept: ["the tax", "duty", "levy"], hint: "im-POSH-tu. The VAT line on every Portuguese receipt is o IVA. The word is literally \"imposed\" — the past participle of impor — which is a fair description of it." },
        { id: "pt-u44l4-aidentidade", type: "vocab", front: "a identidade", reading: "aidentidade", meaning: "identity", example: { jp: "A identidade de todos está no cartão e o documento é importante.", en: "Everyone's identity is on the card and the document matters." }, drill: { jp: "A identidade está no cartão", en: "The identity is on the card" }, accept: ["the identity", "ID"], hint: "i-den-ti-DA-de, another -dade noun. Portugal's card is o Cartão de Cidadão, carrying your identity, health, tax and voting numbers on one chip — and carrying it on you is a legal duty." },
        { id: "pt-u44l4-aautorizacao", type: "vocab", front: "a autorização", reading: "aautorizacao", meaning: "authorisation", example: { jp: "A autorização do pai está no formulário da escola de Maria.", en: "The father's authorisation is on Maria's school form." }, drill: { jp: "A autorização está no formulário", en: "The authorisation is on the form" }, accept: ["authorization", "permission", "the permission", "consent"], hint: "ow-to-ri-za-SAWNG, ending in the -ção nasal of a estação; plural as autorizações. Permission in WRITING, where uma licença is the document itself. The verb is autorizar." },
        { id: "pt-u44l4-cumprir", type: "vocab", front: "cumprir", reading: "cumprir", meaning: "to comply", example: { jp: "Cumprir a lei é o dever de todos em Portugal.", en: "Obeying the law is everyone's duty in Portugal." }, drill: { jp: "Cumprir a lei é importante", en: "Obeying the law is important" }, accept: ["comply", "to obey", "to fulfil", "to fulfill", "to carry out"], hint: "kum-PREER: cumpro, cumpres, cumpre. To fulfil or carry out — cumprir a lei, cumprir uma promessa. Careful with comprar from Unit 16: cumprir and comprar sit one vowel apart." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 A lei e as regras : a justiça (justice) · a norma (standard) · legal (legal)
//   l2 O tribunal        : a prova (proof) · o processo (case) · o preso (prisoner)
//   l3 Os documentos     : preencher (to fill in) · a cópia (copy) · o original (original)
//   l4 Multas e licenças : a coima (penalty — the pt-PT official word) · a validade (validity) · o cidadão (citizen)
