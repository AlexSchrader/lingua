// PT Unit 45 — O banco e as finanças (slot: coverage-a2-6) — A2
// Money past the counter. A1's u18 taught earning, spending, saving and the
// Multibanco; Unit 16 taught paying in a shop. Nothing yet lets a learner hold
// an account, take a loan, or say what a business earns or loses.
//
// Sited away from block 1's u27, which owns the shop-floor money words
// (a moeda, o recibo, o desconto, a promoção, o saldo). None of those five is
// carded here — o saldo in particular is left alone and only named in a hint.
//
// levantar is the card that needs watching at merge: block 1's u21 teaches the
// REFLEXIVE levantar-se (to get up). These are different fronts and different
// jobs — here it is levantar dinheiro, to withdraw — and the hint names the pair
// so the learner meets it as a contrast rather than a clash.
// o extrato carries the post-1990 spelling rule (no c), the same reform behind
// elétrico and ótimo. a despesa closes the a receita triple sense from Unit 11.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT45 = {
  id: "pt-u45",
  lang: "pt",
  title: "O banco e as finanças",
  order: 45,
  stage: "a2",
  lessons: [
    {
      id: "pt-u45l1",
      unit: 45,
      lesson: 1,
      title: "No banco",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a Portuguese bank account — savings, a loan, and what the loan costs you.",
      items: [
        { id: "pt-u45l1-apoupanca", type: "vocab", front: "a poupança", reading: "apoupanca", meaning: "savings", example: { jp: "A poupança de Ana está no banco e o juro não é alto.", en: "Ana's savings are in the bank and the interest isn't high." }, drill: { jp: "A poupança está no banco", en: "The savings are in the bank" }, accept: ["the savings", "saving", "nest egg"], hint: "poh-PAN-sa, cedilla — built straight on poupar from Unit 18. Uma conta poupança is a savings account, and the state-backed one Portuguese families actually use is os Certificados de Aforro." },
        { id: "pt-u45l1-oemprestimo", type: "vocab", front: "o empréstimo", reading: "oemprestimo", meaning: "loan", example: { jp: "O empréstimo da casa é enorme e a família paga todos os meses.", en: "The house loan is enormous and the family pays every month." }, drill: { jp: "O empréstimo da casa é enorme", en: "The house loan is enormous" }, accept: ["the loan", "credit", "borrowing"], hint: "em-PRESH-ti-mu — the accent marks the stress on the second syllable. The house one has its own name, o crédito à habitação, and that is what every Portuguese adult means when they say \"the loan\"." },
        { id: "pt-u45l1-adivida", type: "vocab", front: "a dívida", reading: "adivida", meaning: "debt", example: { jp: "A dívida do empréstimo é grande e o juro do banco é alto.", en: "The loan's debt is large and the bank's interest is high." }, drill: { jp: "A dívida do empréstimo é grande", en: "The loan's debt is large" }, accept: ["the debt", "liability", "what is owed"], hint: "DEE-vi-da, stress on the first syllable. From dever, to owe — the same verb sitting behind o dever in Unit 44. Estar em dívida is to be in someone's debt, in money or in gratitude." },
        { id: "pt-u45l1-emprestar", type: "vocab", front: "emprestar", reading: "emprestar", meaning: "to lend", example: { jp: "Vou emprestar dinheiro a Tiago e ele paga no fim do mês.", en: "I'm going to lend Tiago money and he pays at the end of the month." }, drill: { jp: "Emprestar dinheiro a Tiago", en: "To lend Tiago money" }, accept: ["lend", "to loan", "loan"], hint: "em-presh-TAR: empresto, emprestas, empresta. It means to LEND, never to borrow. Borrowing is pedir emprestado — literally to ask lent — so Portuguese makes you state the direction every time." },
        { id: "pt-u45l1-ojuro", type: "vocab", front: "o juro", reading: "ojuro", meaning: "interest", example: { jp: "O juro do banco é alto e o empréstimo da casa fica caro.", en: "The bank's interest is high and the house loan works out expensive." }, drill: { jp: "O juro do banco é alto", en: "The bank's interest is high" }, accept: ["the interest", "interest rate"], hint: "ZHOO-ru. Interest on money, usually met in the plural — os juros — and a taxa de juro is the interest rate. It shares no root whatever with jurar, to swear an oath." },
        { id: "pt-u45l1-ataxa", type: "vocab", front: "a taxa", reading: "ataxa", meaning: "rate", example: { jp: "A taxa do banco é importante e o empréstimo de Ana é enorme.", en: "The bank's rate matters and Ana's loan is enormous." }, drill: { jp: "A taxa do banco é importante", en: "The bank's rate is important" }, accept: ["the rate", "fee", "charge", "tax"], hint: "TA-sha — the x says sh, as in a caixa. A rate, and also a fee: uma taxa de serviço. A taxa de juro is the interest rate. No connection at all to o táxi." },
      ],
    },
    {
      id: "pt-u45l2",
      unit: 45,
      lesson: 2,
      title: "Pagar e receber",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Move money in Portugal — transfer it, pay it in, or take it out of the machine.",
      items: [
        { id: "pt-u45l2-atransferencia", type: "vocab", front: "a transferência", reading: "atransferencia", meaning: "transfer", example: { jp: "A transferência do salário chega ao banco todos os meses.", en: "The salary transfer arrives at the bank every month." }, drill: { jp: "A transferência do salário é rápida", en: "The salary transfer is fast" }, accept: ["the transfer", "bank transfer", "payment"], hint: "trans-fe-REN-sia. Portugal runs on these — fazer uma transferência is the everyday phrase, and the account number you give for one is the IBAN, called o NIB by anyone over fifty." },
        { id: "pt-u45l2-transferir", type: "vocab", front: "transferir", reading: "transferir", meaning: "to transfer", example: { jp: "Vou transferir o dinheiro e a conta de Ana fica cheia.", en: "I'm going to transfer the money and Ana's account will be full." }, drill: { jp: "Transferir o dinheiro é rápido", en: "Transferring the money is fast" }, accept: ["transfer", "to move", "to send"], hint: "trans-fe-REER: transfiro, transferes, transfere — the e turns to i in the \"I\" form, exactly as in servir and vestir. It moves money, and it moves a footballer between clubs." },
        { id: "pt-u45l2-depositar", type: "vocab", front: "depositar", reading: "depositar", meaning: "to deposit", example: { jp: "Vou depositar o dinheiro no banco de Lisboa esta semana.", en: "I'm going to deposit the money at the Lisbon bank this week." }, drill: { jp: "Depositar o dinheiro no banco", en: "To deposit the money in the bank" }, accept: ["deposit", "to pay in", "pay in"], hint: "de-pu-zi-TAR. To put money in — the exact opposite of levantar, next. O depósito is the deposit itself, and also the fuel tank of a car." },
        { id: "pt-u45l2-levantar", type: "vocab", front: "levantar", reading: "levantar", meaning: "to withdraw", example: { jp: "Vou levantar dinheiro no multibanco da praça de Braga.", en: "I'm going to withdraw money at the cash machine in Braga's square." }, drill: { jp: "Levantar dinheiro no multibanco", en: "To withdraw money at the cash machine" }, accept: ["withdraw", "to take out", "to lift", "to raise"], hint: "le-van-TAR — to lift, and of money to TAKE OUT: levantar dinheiro, done at the Multibanco from Unit 16. The reflexive levantar-se is a separate everyday job: getting up in the morning." },
        { id: "pt-u45l2-aprestacao", type: "vocab", front: "a prestação", reading: "aprestacao", meaning: "instalment", example: { jp: "A prestação da casa é cara e a família paga todos os meses.", en: "The house instalment is expensive and the family pays every month." }, drill: { jp: "A prestação da casa é cara", en: "The house instalment is expensive" }, accept: ["installment", "the instalment", "payment", "monthly payment"], hint: "presh-ta-SAWNG, -ção nasal; plural as prestações. Comprar a prestações is to buy in instalments — and for a Portuguese household a prestação on its own means the mortgage payment." },
        { id: "pt-u45l2-oextrato", type: "vocab", front: "o extrato", reading: "oextrato", meaning: "statement", example: { jp: "O extrato do banco tem todo o dinheiro do mês de Ana.", en: "The bank statement has all of Ana's money for the month." }, drill: { jp: "O extrato do banco é comprido", en: "The bank statement is long" }, accept: ["the statement", "bank statement", "extract"], hint: "esh-TRA-tu — literally an \"extract\" of the account. Note the post-1990 spelling drops the c: extrato, never \"extracto\". Same reform that gave you elétrico and ótimo." },
      ],
    },
    {
      id: "pt-u45l3",
      unit: 45,
      lesson: 3,
      title: "A riqueza e a pobreza",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say whether a household is well off or badly off in Portuguese, and what it spends.",
      items: [
        { id: "pt-u45l3-ariqueza", type: "vocab", front: "a riqueza", reading: "ariqueza", meaning: "wealth", example: { jp: "A riqueza de Portugal foi sempre o mar e o peixe.", en: "Portugal's wealth was always the sea and fish." }, drill: { jp: "A riqueza de Portugal é o mar", en: "Portugal's wealth is the sea" }, accept: ["the wealth", "riches", "richness"], hint: "rri-KE-za — strong r, s saying z. From rico. That -eza ending turns an adjective into the quality itself, the same way a beleza is built from belo." },
        { id: "pt-u45l3-apobreza", type: "vocab", front: "a pobreza", reading: "apobreza", meaning: "poverty", example: { jp: "A pobreza é um problema enorme em toda a Europa.", en: "Poverty is an enormous problem across all of Europe." }, drill: { jp: "A pobreza é um problema enorme", en: "Poverty is an enormous problem" }, accept: ["the poverty", "hardship"], hint: "pu-BRE-za, from pobre, with the same -eza ending as a riqueza. The two are built identically, so learn them as a pair and you get both." },
        { id: "pt-u45l3-rico", type: "vocab", front: "rico", reading: "rico", meaning: "rich", example: { jp: "O homem é rico e tem uma casa enorme no Porto.", en: "The man is rich and has an enormous house in Porto." }, drill: { jp: "O homem é rico e simpático", en: "The man is rich and friendly" }, accept: ["wealthy", "well off", "affluent"], hint: "RREE-ku, strong r; agrees rico/rica. Of food it means rich too, and rico em is rich IN something. Portuguese also uses it warmly of a child — meu rico filho." },
        { id: "pt-u45l3-pobre", type: "vocab", front: "pobre", reading: "pobre", meaning: "poor", example: { jp: "A família é pobre e a casa da aldeia é muito pequena.", en: "The family is poor and the village house is very small." }, drill: { jp: "A família é pobre e pequena", en: "The family is poor and small" }, accept: ["poor", "hard up", "needy"], hint: "PO-bre — no gender change: o homem pobre, a mulher pobre. Put it BEFORE the noun and the meaning shifts to pitiable: o pobre homem is the poor man, not the penniless one." },
        { id: "pt-u45l3-oorcamento", type: "vocab", front: "o orçamento", reading: "oorcamento", meaning: "budget", example: { jp: "O orçamento da família é pequeno e a despesa do mês é alta.", en: "The family budget is small and the month's expense is high." }, drill: { jp: "O orçamento da família é pequeno", en: "The family budget is small" }, accept: ["the budget", "estimate", "quote"], hint: "or-sa-MEN-tu, cedilla. The household budget and the national one — o Orçamento do Estado, which Portugal argues about every autumn. It is also a builder's written quote." },
        { id: "pt-u45l3-adespesa", type: "vocab", front: "a despesa", reading: "adespesa", meaning: "expense", example: { jp: "A despesa da casa é enorme no inverno e o orçamento é pequeno.", en: "The house expense is enormous in winter and the budget is small." }, drill: { jp: "A despesa da casa é enorme", en: "The house expense is enormous" }, accept: ["the expense", "cost", "outgoing", "spending"], hint: "desh-PE-za, from despender. As despesas, plural, is what a Portuguese rental advert means by \"bills\". Its opposite is a receita — which you met in Unit 11 meaning a prescription, and which is also income. Three senses, one word." },
      ],
    },
    {
      id: "pt-u45l4",
      unit: 45,
      lesson: 4,
      title: "Investir e arriscar",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about a business in Portuguese — what it earns, what it loses, and who owns a share of it.",
      items: [
        { id: "pt-u45l4-investir", type: "vocab", front: "investir", reading: "investir", meaning: "to invest", example: { jp: "Vou investir na empresa de Tiago e o negócio é bom.", en: "I'm going to invest in Tiago's company and the business is good." }, drill: { jp: "Investir na empresa é bom", en: "Investing in the company is good" }, accept: ["invest", "to put money in"], hint: "in-vesh-TEER: invisto, investes, investe — the e turns to i in the \"I\" form, like vestir, with which it shares nothing else at all. The noun is o investimento." },
        { id: "pt-u45l4-onegocio", type: "vocab", front: "o negócio", reading: "onegocio", meaning: "business", example: { jp: "O negócio de Ana é enorme e a empresa tem muitos colegas.", en: "Ana's business is enormous and the company has many colleagues." }, drill: { jp: "O negócio de Ana é enorme", en: "Ana's business is enormous" }, accept: ["the business", "deal", "trade", "transaction"], hint: "ne-GO-siu. A business or a deal. Careful with Spanish negocio, which is the SHOP itself — here a shop is uma loja, from Unit 7. In the plural, os negócios is business in general." },
        { id: "pt-u45l4-olucro", type: "vocab", front: "o lucro", reading: "olucro", meaning: "profit", example: { jp: "O lucro da empresa é enorme e o chefe vai investir mais.", en: "The company's profit is enormous and the boss is going to invest more." }, drill: { jp: "O lucro da empresa é enorme", en: "The company's profit is enormous" }, accept: ["the profit", "gain", "return"], hint: "LOO-kru. Dar lucro is to turn a profit. It gives lucrativo, and English \"lucrative\" is the same Latin root — one of the rare cases where the cognate is exact in both directions." },
        { id: "pt-u45l4-oprejuizo", type: "vocab", front: "o prejuízo", reading: "oprejuizo", meaning: "loss", example: { jp: "O prejuízo do negócio foi enorme no inverno de Braga.", en: "The business's loss was enormous during the Braga winter." }, drill: { jp: "O prejuízo do negócio foi enorme", en: "The business's loss was enormous" }, accept: ["the loss", "damage", "harm", "detriment"], hint: "pre-zhu-EE-zu — the accent on the i splits it from the u. A financial loss, and harm in general: sem prejuízo de turns up on every contract. Dar prejuízo is to run at a loss." },
        { id: "pt-u45l4-osocio", type: "vocab", front: "o sócio", reading: "osocio", meaning: "partner", example: { jp: "O sócio de Tiago é advogado e trabalha em Lisboa.", en: "Tiago's partner is a lawyer and works in Lisbon." }, drill: { jp: "O sócio de Tiago é advogado", en: "Tiago's partner is a lawyer" }, accept: ["the partner", "business partner", "member", "associate"], hint: "SO-siu. A business partner — and a MEMBER: o sócio do Benfica is a paid-up club member, which for a Portuguese football club is a real and counted status. The company itself is uma sociedade." },
        { id: "pt-u45l4-acrise", type: "vocab", front: "a crise", reading: "acrise", meaning: "crisis", example: { jp: "A crise de Portugal foi enorme e o trabalho não foi fácil.", en: "Portugal's crisis was enormous and work wasn't easy." }, drill: { jp: "A crise de Portugal foi enorme", en: "Portugal's crisis was enormous" }, accept: ["the crisis", "slump", "recession"], hint: "KREE-ze, s saying z. Feminine, and the plural is spelled the same: as crises. Portugal says a crise of the years after 2011 with no further explanation, and a troika needs none either." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 No banco          : o cofre (safe) · a hipoteca (mortgage) · a caderneta (bank book)
//   l2 Pagar e receber   : o cheque (cheque) · o pagamento (payment) · a comissão (commission)
//   l3 Riqueza e pobreza : gratuito (free of charge) · a subida (rise) · a descida (fall)
//   l4 Investir          : o cliente (client) · a fábrica (factory) · a concorrência (competition)
