// PT Unit 93 — Os negócios e a negociação (slot: business) — B2
//
// THE LANGUAGE OF A DEAL. u24 gave the learner a job (o cargo, o currículo, o
// contrato, a carreira), u56 gave the workplace process, u66 gave the economy
// at national scale (exportar, a indústria, o investimento, a concorrência).
// The gap between them is the FIRM and the DEAL: who owns it, what the contract
// says, and what happens at the table when two sides want different things.
//
// SLOT BOUNDARIES:
//   o contrato is SPENT at u24, a empresa early, o acordo at u51, a proposta
//   and a concorrência and o investimento at u66, o produto at u66, o prazo
//   earlier, a procura/a oferta at u66 and u84. Used in examples, not re-carded
//   — this unit takes what sits INSIDE the contract (a cláusula, a adenda) and
//   what happens AROUND the deal (a contraproposta, o impasse, transigir).
//   o sócio is SPENT at u45, so l2 teaches o empreendedor instead.
//   u100 (mine) owns careers, hierarchy and performance inside an organisation;
//   this unit stops at the firm as a commercial actor.
//
// One lexeme per family: negociar without a negociação, rescindir without a
// rescisão, incumprir without o incumprimento.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT93 = {
  id: "pt-u93",
  lang: "pt",
  title: "Os negócios e a negociação",
  order: 93,
  stage: "b2",
  lessons: [
    {
      id: "pt-u93l1",
      unit: 93,
      lesson: 1,
      title: "Negociar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Negotiate in Portuguese — make a counter-offer, name the deadlock, give ground, reach consensus.",
      items: [
        { id: "pt-u93l1-negociar", type: "vocab", front: "negociar", reading: "negociar", meaning: "to negotiate", example: { jp: "As empresas negociaram o contrato durante quase um ano inteiro.", en: "The companies negotiated the contract for almost a whole year." }, drill: { jp: "Vamos negociar o contrato esta semana", en: "We're going to negotiate the contract this week" }, accept: ["to negotiate", "negotiate", "to bargain", "to hammer out", "to deal"], hint: "ne-gu-si-AR, from o negócio. To work out terms with the other side. Portugal keeps the older first-person eu negoceio alongside eu negocio — you will meet both." },
        { id: "pt-u93l1-acontraproposta", type: "vocab", front: "a contraproposta", reading: "acontraproposta", meaning: "counter-offer", example: { jp: "A contraproposta chegou no dia seguinte e era muito mais baixa.", en: "The counter-offer arrived the next day and was much lower." }, drill: { jp: "A contraproposta chegou no dia seguinte", en: "The counter-offer arrived the next day" }, accept: ["counter-offer", "the counter-offer", "counterproposal", "counter-bid"], hint: "kon-tra-pru-POSH-ta. A proposta sent back the other way. Portuguese builds these freely with contra-: contra-argumento, contra-ataque, contraordenação." },
        { id: "pt-u93l1-oimpasse", type: "vocab", front: "o impasse", reading: "oimpasse", meaning: "deadlock", example: { jp: "A conversa chegou a um impasse e ninguém quis ceder nada.", en: "The talks reached a deadlock and nobody would give anything up." }, drill: { jp: "O impasse durou toda a semana", en: "The deadlock lasted the whole week" }, accept: ["deadlock", "the deadlock", "stalemate", "impasse", "standstill"], hint: "im-PA-se, borrowed whole from French. The point at which neither side will move. Sair do impasse is to break the deadlock." },
        { id: "pt-u93l1-regatear", type: "vocab", front: "regatear", reading: "regatear", meaning: "to haggle", example: { jp: "Em Portugal não se regateia o preço numa loja, só na feira.", en: "In Portugal you don't haggle over the price in a shop, only at the market." }, drill: { jp: "Não vale a pena regatear o preço", en: "It's not worth haggling over the price" }, accept: ["to haggle", "haggle", "to barter", "to bargain over", "to beat the price down"], hint: "rre-ga-te-AR. Arguing a price down item by item. Unlike negociar it is small and personal — and in Portugal it belongs at the feira, not in a shop." },
        { id: "pt-u93l1-transigir", type: "vocab", front: "transigir", reading: "transigir", meaning: "to compromise", example: { jp: "Nenhum dos lados quis transigir e a reunião acabou sem acordo.", en: "Neither side would compromise and the meeting ended without an agreement." }, drill: { jp: "Ninguém quis transigir naquele ponto", en: "Nobody would compromise on that point" }, accept: ["to compromise", "compromise", "to give ground", "to yield", "to meet halfway"], hint: "tran-zi-ZHIR. To give up part of your position to reach a deal. Não transigir, refusing to budge, is said with either admiration or exasperation." },
        { id: "pt-u93l1-oconsenso", type: "vocab", front: "o consenso", reading: "oconsenso", meaning: "consensus", example: { jp: "O consenso só apareceu depois de mudarem quase tudo no texto.", en: "Consensus only appeared after they changed almost everything in the text." }, drill: { jp: "O consenso apareceu no fim", en: "Consensus appeared at the end" }, accept: ["consensus", "the consensus", "common ground", "agreement"], hint: "kon-SEN-su. Agreement everyone can live with, as against o acordo (Unit 51), which is the signed thing. Por consenso means reached without a vote." },
      ],
    },
    {
      id: "pt-u93l2",
      unit: 93,
      lesson: 2,
      title: "A empresa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe how a Portuguese company is built — who founded it, where it sits, who owns a piece of it.",
      items: [
        { id: "pt-u93l2-oempreendedor", type: "vocab", front: "o empreendedor", reading: "oempreendedor", meaning: "entrepreneur", example: { jp: "O empreendedor abriu a primeira loja com dinheiro da própria família.", en: "The entrepreneur opened the first shop with his own family's money." }, drill: { jp: "O empreendedor abriu a primeira loja", en: "The entrepreneur opened the first shop" }, accept: ["entrepreneur", "the entrepreneur", "business founder", "self-starter"], hint: "em-pre-en-de-DOR. Someone who starts a business and carries the risk. Empreender is to undertake, and o empreendedorismo is the word every Portuguese business school leans on." },
        { id: "pt-u93l2-asede", type: "vocab", front: "a sede", reading: "asede", meaning: "head office", example: { jp: "A sede da empresa mudou de Lisboa para o Porto no ano passado.", en: "The company's head office moved from Lisbon to Porto last year." }, drill: { jp: "A sede da empresa fica no Porto", en: "The company's head office is in Porto" }, accept: ["head office", "headquarters", "the head office", "main office", "registered office"], hint: "Two different words share this spelling, and only the vowel separates them: a sede meaning head office has an OPEN e (SÈ-de), while a sede meaning thirst has a closed e (SÊ-de). Portuguese ears catch it instantly." },
        { id: "pt-u93l2-afilial", type: "vocab", front: "a filial", reading: "afilial", meaning: "branch (of a firm)", example: { jp: "A filial do norte emprega mais pessoas do que a própria sede.", en: "The northern branch employs more people than the head office itself." }, drill: { jp: "A filial do norte cresceu muito", en: "The northern branch grew a lot" }, accept: ["branch", "the branch", "branch office", "subsidiary", "local office"], hint: "fi-li-AL. A branch of a company, built on filho — the daughter company. For a bank branch Portugal says a agência or o balcão; filial is the corporate one." },
        { id: "pt-u93l2-afusao", type: "vocab", front: "a fusão", reading: "afusao", meaning: "merger", example: { jp: "A fusão criou a maior empresa do sector em todo o país.", en: "The merger created the biggest company in the sector in the whole country." }, drill: { jp: "A fusão criou uma empresa enorme", en: "The merger created an enormous company" }, accept: ["merger", "the merger", "amalgamation", "fusion", "merging"], hint: "fu-ZOWN. Two companies becoming one. It is also fusion in the physical sense — a fusão do gelo is melting — so the business page and the science page share it." },
        { id: "pt-u93l2-oacionista", type: "vocab", front: "o acionista", reading: "oacionista", meaning: "shareholder", example: { jp: "O acionista principal vendeu a sua parte mesmo no fim do ano.", en: "The main shareholder sold his stake right at the end of the year." }, drill: { jp: "O acionista principal vendeu a parte", en: "The main shareholder sold the stake" }, accept: ["shareholder", "the shareholder", "stockholder", "equity holder"], hint: "a-si-u-NEESH-ta, from a ação, the share. The form does not change for gender — o acionista, a acionista — exactly like o artista." },
        { id: "pt-u93l2-aparticipacao", type: "vocab", front: "a participação", reading: "aparticipacao", meaning: "stake (holding)", example: { jp: "O banco tem uma participação pequena mas antiga naquela empresa.", en: "The bank has a small but long-standing stake in that company." }, drill: { jp: "A participação do banco é pequena", en: "The bank's stake is small" }, accept: ["stake", "the stake", "holding", "shareholding", "interest"], hint: "par-ti-si-pa-SOWN. The slice of a company somebody owns. It is also participation in the ordinary sense, so the business meaning rides on context — uma participação de 30%." },
      ],
    },
    {
      id: "pt-u93l3",
      unit: 93,
      lesson: 3,
      title: "O contrato",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Read a Portuguese contract — the clause that binds you, the one that ends it, and the date it lapses.",
      items: [
        { id: "pt-u93l3-aclausula", type: "vocab", front: "a cláusula", reading: "aclausula", meaning: "clause", example: { jp: "A cláusula do prazo é a que causa mais problemas todos os anos.", en: "The deadline clause is the one that causes the most problems every year." }, drill: { jp: "A cláusula do prazo é clara", en: "The deadline clause is clear" }, accept: ["clause", "the clause", "provision", "term", "article"], hint: "KLOW-zu-la. One numbered term inside a contract. Uma cláusula pétrea is one that cannot be changed — literally a 'stone clause'." },
        { id: "pt-u93l3-vincular", type: "vocab", front: "vincular", reading: "vincular", meaning: "to bind (contractually)", example: { jp: "O documento vincula as partes durante cinco anos a contar de hoje.", en: "The document binds the parties for five years from today." }, drill: { jp: "O contrato vai vincular as partes", en: "The contract will bind the parties" }, accept: ["to bind", "bind", "to tie", "to commit", "to be binding on"], hint: "vin-ku-LAR, from o vínculo, the tie. To make someone legally bound. Um contrato vinculativo is a binding contract — worth recognising the adjective too." },
        { id: "pt-u93l3-rescindir", type: "vocab", front: "rescindir", reading: "rescindir", meaning: "to terminate (a contract)", example: { jp: "A empresa quis rescindir o contrato mesmo antes do fim do prazo.", en: "The company wanted to terminate the contract even before the deadline." }, drill: { jp: "A empresa vai rescindir o contrato", en: "The company is going to terminate the contract" }, accept: ["to terminate", "terminate", "to cancel", "to rescind", "to end early"], hint: "rresh-sin-DIR. To end a contract before its natural end, with legal effect. A rescisão is the termination, and rescindir por mútuo acordo is the amicable version." },
        { id: "pt-u93l3-incumprir", type: "vocab", front: "incumprir", reading: "incumprir", meaning: "to breach", example: { jp: "Quem incumpre o contrato paga uma multa que está lá escrita.", en: "Whoever breaches the contract pays a fine that is written into it." }, drill: { jp: "Ninguém quer incumprir o contrato", en: "Nobody wants to breach the contract" }, accept: ["to breach", "breach", "to fail to comply", "to default on", "to be in breach of"], hint: "in-koong-PRIR — cumprir with the negative in-. To fail to do what you agreed. O incumprimento is the standard word in Portuguese contracts; Brazil prefers descumprir." },
        { id: "pt-u93l3-aadenda", type: "vocab", front: "a adenda", reading: "aadenda", meaning: "addendum", example: { jp: "A adenda ao contrato mudou apenas o valor e mais nada.", en: "The addendum to the contract changed only the amount and nothing else." }, drill: { jp: "A adenda mudou apenas o valor", en: "The addendum changed only the amount" }, accept: ["addendum", "the addendum", "appendix", "rider", "supplement"], hint: "a-DEN-da. A page added to a contract after signing, changing part of it. From the Latin for 'things to be added' — the same root as English agenda, things to be done." },
        { id: "pt-u93l3-caducar", type: "vocab", front: "caducar", reading: "caducar", meaning: "to lapse", example: { jp: "O acordo caducou em dezembro e ninguém se lembrou de renovar.", en: "The agreement lapsed in December and nobody remembered to renew it." }, drill: { jp: "O acordo vai caducar em dezembro", en: "The agreement will lapse in December" }, accept: ["to lapse", "lapse", "to expire", "to run out", "to become void"], hint: "ka-du-KAR. To expire simply by running out of time, with nobody acting — a passport, an offer, a law. Caduco, said of a person, is an unkind word for senile." },
      ],
    },
    {
      id: "pt-u93l4",
      unit: 93,
      lesson: 4,
      title: "O mercado",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a Portuguese market — share, margin, suppliers, profitability, and launching something new.",
      items: [
        { id: "pt-u93l4-aquota", type: "vocab", front: "a quota", reading: "aquota", meaning: "market share", example: { jp: "A quota da empresa no mercado caiu pela primeira vez em muitos anos.", en: "The company's market share fell for the first time in many years." }, drill: { jp: "A quota da empresa caiu este ano", en: "The company's market share fell this year" }, accept: ["market share", "share", "quota", "the quota", "portion"], hint: "KWO-ta. A share of a market, and also a fixed allowance or a membership fee — a quota do clube. Portugal writes quota; Brazil often cota." },
        { id: "pt-u93l4-amargem", type: "vocab", front: "a margem", reading: "amargem", meaning: "margin", example: { jp: "A margem é pequena e por isso o negócio precisa de muito volume.", en: "The margin is small and so the business needs a lot of volume." }, drill: { jp: "A margem deste produto é pequena", en: "This product's margin is small" }, accept: ["margin", "the margin", "profit margin", "markup", "leeway"], hint: "MAR-zhengh. The profit left after costs — and also the edge of anything: a margem do rio is the riverbank. À margem means on the sidelines." },
        { id: "pt-u93l4-ofornecedor", type: "vocab", front: "o fornecedor", reading: "ofornecedor", meaning: "supplier", example: { jp: "O fornecedor do norte entrega sempre a horas, faça o tempo que fizer.", en: "The northern supplier always delivers on time, whatever the weather." }, drill: { jp: "O fornecedor entrega sempre a horas", en: "The supplier always delivers on time" }, accept: ["supplier", "the supplier", "vendor", "provider"], hint: "for-ne-se-DOR, from fornecer, to supply. The firm that sells you what you need in order to make your own thing. O fornecimento is the supply itself." },
        { id: "pt-u93l4-arentabilidade", type: "vocab", front: "a rentabilidade", reading: "arentabilidade", meaning: "profitability", example: { jp: "A rentabilidade do negócio melhorou depois de mudarem de fornecedor.", en: "The business's profitability improved after they changed supplier." }, drill: { jp: "A rentabilidade do negócio melhorou muito", en: "The business's profitability improved a lot" }, accept: ["profitability", "the profitability", "return", "yield", "bottom line"], hint: "rren-ta-bi-li-DA-de. How much a business gives back on what goes in. Rentável, profitable, is the everyday adjective — é rentável is the whole question." },
        { id: "pt-u93l4-lancar", type: "vocab", front: "lançar", reading: "lancar", meaning: "to launch", example: { jp: "A empresa vai lançar o produto novo mesmo antes do fim do ano.", en: "The company is going to launch the new product just before the end of the year." }, drill: { jp: "A empresa vai lançar o produto", en: "The company is going to launch the product" }, accept: ["to launch", "launch", "to bring out", "to release", "to put on the market"], hint: "lan-SAR. To throw — and so to put a product, a book or a campaign out into the world. O lançamento is the launch event itself." },
        { id: "pt-u93l4-onicho", type: "vocab", front: "o nicho", reading: "onicho", meaning: "niche", example: { jp: "A loja encontrou um nicho que as grandes empresas não queriam.", en: "The shop found a niche the big companies didn't want." }, drill: { jp: "O nicho do mercado é pequeno", en: "The market niche is small" }, accept: ["niche", "the niche", "market niche", "specialist corner"], hint: "NEE-shu. A small, specific part of a market. Its first sense is the recess in a wall where a statue stands — the same idea of a space that fits exactly one thing." },
      ],
    },
  ],
};
