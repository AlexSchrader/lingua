// PT Unit 116 — O dinheiro, a dívida e a poupança (slot: coverage-b2-6) — B2
// PERSONAL MONEY, not the economy and not business. The scaffold title was
// "Vocabulary 6 (B2)". u93 Business and negotiation (block 2) owns commerce and
// the deal; u66 A economia (B1) owns the national picture. This unit owns the
// learner's own bank statement — the words on a Portuguese payslip, loan
// agreement and tax return.
//
// SLOT BOUNDARIES:
//   u45 owns a dívida, o empréstimo, o juro, a poupança, a prestação,
//   a transferência, o extrato; u32 o imposto; u18 a fatura; u27 o recibo and
//   o saldo; u33 a aplicação; u56 o rendimento; u79 o movimento.
//   ALL SEVEN of those were in block 3's first draft of this unit and ALL are
//   already taught — the probe caught them before a card existed. They are used
//   in the examples here and never re-carded. The replacements are different
//   words, not synonyms: o financiamento, a amortização, a taxa de juro,
//   o pé-de-meia, o débito, o descoberto, a declaração.
//   One lexeme per family: a dívida (u45) is used freely but o endividamento is
//   deliberately NOT carded — same lexeme, and that is the trap a green
//   validator cannot see.
//
// EUROPEAN PORTUGUESE: o vencimento is the pt-PT payslip word (Brazil: salário);
// a domiciliação, o multibanco culture and o pé-de-meia are all Portugal.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT116 = {
  id: "pt-u116",
  lang: "pt",
  title: "O dinheiro, a dívida e a poupança",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "pt-u116l1",
      unit: 116,
      lesson: 1,
      title: "O que entra e o que sai",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about household money in Portuguese — what comes in each month, what goes out, and what it is called on the paperwork.",
      items: [
        { id: "pt-u116l1-oganho", type: "vocab", front: "o ganho", reading: "oganho", meaning: "earnings", example: { jp: "O ganho deste mês foi maior porque trabalhou aos fins de semana.", en: "This month's earnings were bigger because he worked at weekends." }, drill: { jp: "O ganho deste mês foi maior", en: "This month's earnings were bigger" }, accept: ["earnings", "the earnings", "gain", "the gain", "takings", "profit"], hint: "GA-nyu, nh. What you actually took in, from ganhar. Broader than a wage — it covers the extra job and the good month, which is why a tax form asks for os ganhos." },
        { id: "pt-u116l1-ovencimento", type: "vocab", front: "o vencimento", reading: "ovencimento", meaning: "monthly salary", example: { jp: "O vencimento entra na conta no último dia útil do mês.", en: "The salary goes into the account on the last working day of the month." }, drill: { jp: "O vencimento entra na conta", en: "The salary goes into the account" }, accept: ["monthly salary", "the monthly salary", "salary", "the salary", "pay", "wages"], hint: "ven-si-MEN-tu. THE pt-PT payslip word — Brazil says salário, which Portugal understands but does not print. It also means a due date: o vencimento da fatura is when the bill falls due." },
        { id: "pt-u116l1-oencargo", type: "vocab", front: "o encargo", reading: "oencargo", meaning: "financial burden", example: { jp: "O encargo da casa é grande para quem ganha pouco.", en: "The burden of the house is heavy for someone who earns little." }, drill: { jp: "O encargo da casa é grande", en: "The burden of the house is heavy" }, accept: ["financial burden", "the financial burden", "burden", "charge", "liability", "outlay"], hint: "en-KAR-gu. A fixed cost you are obliged to carry, usually plural — os encargos. Distinct from a despesa, which is just money spent; an encargo is money owed by arrangement." },
        { id: "pt-u116l1-amensalidade", type: "vocab", front: "a mensalidade", reading: "amensalidade", meaning: "monthly instalment", example: { jp: "A mensalidade da escola sobe todos os anos em setembro.", en: "The monthly school fee goes up every year in September." }, drill: { jp: "A mensalidade da escola sobe todos os anos", en: "The monthly fee goes up every year" }, accept: ["monthly instalment", "the monthly instalment", "monthly fee", "monthly payment", "subscription"], hint: "men-sa-li-DA-de, from mês. Any fixed sum paid each month — school, gym, insurance. A prestação (u45) is specifically the repayment of a loan; a mensalidade is a fee." },
        { id: "pt-u116l1-oorcamentofamiliar", type: "vocab", front: "o orçamento familiar", reading: "oorcamentofamiliar", meaning: "household budget", example: { jp: "O orçamento familiar não aguenta mais uma despesa fixa.", en: "The household budget cannot take another fixed expense." }, drill: { jp: "O orçamento familiar não aguenta mais nada", en: "The household budget cannot take any more" }, accept: ["household budget", "the household budget", "family budget", "home budget"], hint: "or-sa-MEN-tu fa-mi-li-AR. The family's plan for its money. On its own o orçamento is also a builder's written quote, so the adjective is doing real work here." },
        { id: "pt-u116l1-odebito", type: "vocab", front: "o débito", reading: "odebito", meaning: "debit", example: { jp: "O débito apareceu na conta dois dias depois da compra.", en: "The debit appeared in the account two days after the purchase." }, drill: { jp: "O débito apareceu na conta", en: "The debit appeared in the account" }, accept: ["debit", "the debit", "charge", "the charge", "withdrawal"], hint: "DE-bi-tu, stress on the first syllable. Money leaving the account, the opposite of o crédito. Cartão de débito is the everyday Portuguese card — what people usually call o multibanco." },
      ],
    },
    {
      id: "pt-u116l2",
      unit: 116,
      lesson: 2,
      title: "Dever dinheiro",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss borrowing in Portuguese — how a loan is funded, repaid, rescheduled, or not repaid at all.",
      items: [
        { id: "pt-u116l2-ofinanciamento", type: "vocab", front: "o financiamento", reading: "ofinanciamento", meaning: "financing", example: { jp: "O financiamento do carro foi feito em cinco anos.", en: "The financing of the car was arranged over five years." }, drill: { jp: "O financiamento do carro foi feito", en: "The financing of the car was arranged" }, accept: ["financing", "the financing", "funding", "the funding", "finance"], hint: "fi-nan-si-a-MEN-tu. The arrangement that provides the money, from financiar. Where o empréstimo (u45) is the sum lent, o financiamento is the whole scheme around it." },
        { id: "pt-u116l2-ocredito", type: "vocab", front: "o crédito", reading: "ocredito", meaning: "credit", example: { jp: "O crédito da casa vai ser pago durante trinta anos.", en: "The house credit will be paid off over thirty years." }, drill: { jp: "O crédito da casa é pago devagar", en: "The house credit is paid off slowly" }, accept: ["credit", "the credit", "loan", "the loan", "credit facility"], hint: "KRE-di-tu. In Portugal crédito à habitação is the mortgage — the word people use rather than any equivalent of mortgage. It is also money coming IN on a statement, the opposite of o débito." },
        { id: "pt-u116l2-aamortizacao", type: "vocab", front: "a amortização", reading: "aamortizacao", meaning: "loan repayment", example: { jp: "A amortização começa no mês seguinte ao da compra.", en: "The repayment begins in the month after the purchase." }, drill: { jp: "A amortização começa no mês seguinte", en: "The repayment begins the following month" }, accept: ["loan repayment", "the loan repayment", "repayment", "amortisation", "paying down"], hint: "a-mor-ti-za-SOWN. Paying a debt down over time. Amortização antecipada — paying off early — is a standing Portuguese conversation whenever interest rates move." },
        { id: "pt-u116l2-ataxadejuro", type: "vocab", front: "a taxa de juro", reading: "ataxadejuro", meaning: "interest rate", example: { jp: "A taxa de juro subiu e a prestação passou a ser maior.", en: "The interest rate went up and the instalment became bigger." }, drill: { jp: "A taxa de juro subiu este ano", en: "The interest rate went up this year" }, accept: ["interest rate", "the interest rate", "rate of interest", "the rate"], hint: "TA-sa de ZHOO-ru. The rate itself, where o juro (u45) is the interest paid. Portuguese mortgages track the Euribor, so taxa de juro is a news item, not a technicality." },
        { id: "pt-u116l2-amoratoria", type: "vocab", front: "a moratória", reading: "amoratoria", meaning: "payment holiday", example: { jp: "A moratória deixou as famílias parar de pagar durante uns meses.", en: "The payment holiday let families stop paying for a few months." }, drill: { jp: "A moratória deixou as famílias parar", en: "The payment holiday let families stop" }, accept: ["payment holiday", "the payment holiday", "moratorium", "grace period", "suspension of payments"], hint: "mu-ra-TO-ria. An agreed pause in repayments. Portugal ran a national moratória in 2020, so the word is now ordinary rather than legal." },
        { id: "pt-u116l2-ainsolvencia", type: "vocab", front: "a insolvência", reading: "ainsolvencia", meaning: "insolvency", example: { jp: "A insolvência da empresa deixou muita gente sem trabalho.", en: "The company's insolvency left many people without work." }, drill: { jp: "A insolvência da empresa deixou gente sem trabalho", en: "The insolvency left people without work" }, accept: ["insolvency", "the insolvency", "bankruptcy", "failure"], hint: "in-sol-VEN-si-a. The legal state of being unable to pay. Portuguese law says insolvência where English news says bankruptcy; falência is the older word, now narrower." },
      ],
    },
    {
      id: "pt-u116l3",
      unit: 116,
      lesson: 3,
      title: "Pôr de lado",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about saving and banking in Portuguese — what you put by, what you hold, and what happens when you go under.",
      items: [
        { id: "pt-u116l3-opedemeia", type: "vocab", front: "o pé-de-meia", reading: "opedemeia", meaning: "nest egg", example: { jp: "O pé-de-meia que juntou durante anos deu para comprar a casa.", en: "The nest egg she put together over years was enough to buy the house." }, drill: { jp: "O pé-de-meia deu para comprar a casa", en: "The nest egg was enough to buy the house" }, accept: ["nest egg", "the nest egg", "savings", "savings pot", "little nest egg"], hint: "pe-de-MAY-a. Literally the foot of a sock — where money used to be hidden. Warmer and more personal than a poupança (u45), which is the bank's word for the same thing." },
        { id: "pt-u116l3-odeposito", type: "vocab", front: "o depósito", reading: "odeposito", meaning: "deposit", example: { jp: "O depósito rende pouco mas não tem risco nenhum.", en: "The deposit earns little but carries no risk at all." }, drill: { jp: "O depósito rende pouco mas é seguro", en: "The deposit earns little but is safe" }, accept: ["deposit", "the deposit", "savings account", "deposit account", "term deposit"], hint: "de-PO-zi-tu. Money placed with a bank — depósito a prazo is the fixed-term account. Separately it is a warehouse or a tank, so o depósito de água is perfectly ordinary." },
        { id: "pt-u116l3-acarteira", type: "vocab", front: "a carteira", reading: "acarteira", meaning: "portfolio", example: { jp: "A carteira dele tem um pouco de tudo e por isso perde menos.", en: "His portfolio has a bit of everything and so loses less." }, drill: { jp: "A carteira dele tem um pouco de tudo", en: "His portfolio has a bit of everything" }, accept: ["portfolio", "the portfolio", "holdings", "wallet", "purse"], hint: "kar-TAY-ra. Also the literal wallet, and in Portugal a carteira de motorista is a driving licence. The financial sense borrows the everyday one exactly as English portfolio does." },
        { id: "pt-u116l3-olevantamento", type: "vocab", front: "o levantamento", reading: "olevantamento", meaning: "withdrawal", example: { jp: "O levantamento foi feito na caixa da rua ao lado.", en: "The withdrawal was made at the machine in the next street." }, drill: { jp: "O levantamento foi feito na caixa", en: "The withdrawal was made at the machine" }, accept: ["withdrawal", "the withdrawal", "cash withdrawal", "taking out", "survey"], hint: "le-van-ta-MEN-tu, from levantar, to lift. Taking cash out. It also means a survey or stocktake — fazer um levantamento das necessidades, to take stock of what is needed." },
        { id: "pt-u116l3-odescoberto", type: "vocab", front: "o descoberto", reading: "odescoberto", meaning: "overdraft", example: { jp: "O descoberto custa caro e é melhor não ficar nele muito tempo.", en: "The overdraft is expensive and it is better not to stay in it long." }, drill: { jp: "O descoberto custa caro", en: "The overdraft is expensive" }, accept: ["overdraft", "the overdraft", "being overdrawn", "in the red"], hint: "desh-ku-BER-tu. Literally uncovered — the account has gone past zero. Estar a descoberto is to be overdrawn, and it is charged steeply in Portugal." },
        { id: "pt-u116l3-adomiciliacao", type: "vocab", front: "a domiciliação", reading: "adomiciliacao", meaning: "direct debit", example: { jp: "A domiciliação da água evita ter de pagar todos os meses.", en: "The direct debit for water saves having to pay every month." }, drill: { jp: "A domiciliação da água evita pagar sempre", en: "The direct debit for water saves paying each time" }, accept: ["direct debit", "the direct debit", "standing order", "automatic payment"], hint: "du-mi-si-li-a-SOWN. In full domiciliação bancária — letting a company take the bill straight from the account. The Portuguese phrase where English says direct debit." },
      ],
    },
    {
      id: "pt-u116l4",
      unit: 116,
      lesson: 4,
      title: "O Estado e o bolso",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle Portuguese tax vocabulary — what is levied, what is deducted, what you declare and what you keep as proof.",
      items: [
        { id: "pt-u116l4-atributacao", type: "vocab", front: "a tributação", reading: "atributacao", meaning: "taxation", example: { jp: "A tributação do trabalho é mais pesada do que a da casa.", en: "The taxation of work is heavier than that of housing." }, drill: { jp: "A tributação do trabalho é pesada", en: "The taxation of work is heavy" }, accept: ["taxation", "the taxation", "tax system", "levying of tax"], hint: "tri-bu-ta-SOWN. The system and the act of taxing, where o imposto (u32) is the tax itself. A tributação is what an editorial argues about." },
        { id: "pt-u116l4-acoleta", type: "vocab", front: "a coleta", reading: "acoleta", meaning: "tax assessment", example: { jp: "A coleta deste ano foi menor porque teve mais filhos a cargo.", en: "This year's assessment was lower because he had more children dependent on him." }, drill: { jp: "A coleta deste ano foi menor", en: "This year's assessment was lower" }, accept: ["tax assessment", "the tax assessment", "assessment", "tax due", "tax charge"], hint: "ku-LE-ta. The amount of tax worked out as due before deductions are applied. A line every Portuguese taxpayer meets on the IRS statement." },
        { id: "pt-u116l4-adeducao", type: "vocab", front: "a dedução", reading: "adeducao", meaning: "deduction", example: { jp: "A dedução das despesas de saúde baixou o valor a pagar.", en: "The deduction of health expenses brought down the amount to pay." }, drill: { jp: "A dedução das despesas baixou o valor", en: "The deduction of expenses brought down the amount" }, accept: ["deduction", "the deduction", "tax relief", "allowance", "write-off"], hint: "de-du-SOWN. What is taken off the tax due. This is why Portuguese shoppers say pôr o contribuinte na fatura — the receipt feeds the deduction." },
        { id: "pt-u116l4-adeclaracao", type: "vocab", front: "a declaração", reading: "adeclaracao", meaning: "tax return", example: { jp: "A declaração tem de ser entregue até ao fim de junho.", en: "The return has to be submitted by the end of June." }, drill: { jp: "A declaração tem de ser entregue em junho", en: "The return has to be submitted in June" }, accept: ["tax return", "the tax return", "return", "declaration", "statement"], hint: "de-kla-ra-SOWN. In full declaração de rendimentos. Also any formal statement — uma declaração à imprensa is a statement to the press, so the context carries the sense." },
        { id: "pt-u116l4-otalao", type: "vocab", front: "o talão", reading: "otalao", meaning: "till slip", example: { jp: "O talão da compra serve de prova se o aparelho deixar de funcionar.", en: "The till slip serves as proof if the appliance stops working." }, drill: { jp: "O talão serve de prova", en: "The till slip serves as proof" }, accept: ["till slip", "the till slip", "receipt", "the receipt", "ticket", "stub", "docket"], hint: "ta-LOWN. The small printed slip from the till or the cash machine. O recibo (u27) is the formal receipt for a payment made; o talão is the paper in your hand." },
        { id: "pt-u116l4-acomissao", type: "vocab", front: "a comissão", reading: "acomissao", meaning: "bank charge", example: { jp: "A comissão do banco é cobrada mesmo quando não se usa a conta.", en: "The bank charge is levied even when the account is not used." }, drill: { jp: "A comissão do banco é cobrada sempre", en: "The bank charge is levied always" }, accept: ["bank charge", "the bank charge", "commission", "fee", "the fee", "charge"], hint: "ku-mi-SOWN. What the bank or agent takes for the service, and also a commission in the sense of a committee — a comissão de moradores is a residents' committee." },
      ],
    },
  ],
};
