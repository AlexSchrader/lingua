// PT Unit 66 — A economia (slot: money/economy) — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2, unit 3 of 13. Three shipped units own the PERSONAL money layer:
// u18 (ganhar, gastar, poupar, o salário, a conta, a fatura), u27 (the shops and
// the prices) and u45, which is already deep — a poupança, o empréstimo, a
// dívida, o juro, a taxa, investir, o negócio, o lucro, o prejuízo, o orçamento,
// a crise, rico/pobre. So there is exactly one layer left and this unit takes
// it: the economy as a SYSTEM rather than as a wallet — supply and demand,
// employment, production, trade, and growth.
//
// Boundaries held deliberately:
//   - u45 owns `investir`; this unit cards `o investimento`, the thing invested,
//     which is a different word, and the hint points back at the verb.
//   - u45 owns `a crise` and `o lucro`; both are used here in examples only.
//   - u7 owns `o mercado` as the place you buy vegetables. The economic sense
//     rides on the same word and is taught through the examples of `a oferta`
//     and `a procura` rather than by carding the noun twice.
//
// TWO WORDS FLAGGED FOR THE LEAD (see the hand-back). `vender` and `o emprego`
// are used by shipped units and carded by NONE — vender is the pair of comprar
// (u16) and o emprego appears in u22 and u37 examples. They are carded here
// because this is the lowest slot in the band that wants them, but block 1's
// u56 (work and process) is lower still and may claim either; lower slot wins
// and this unit gives them up without argument if it does.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT66 = {
  id: "pt-u66",
  lang: "pt",
  title: "A economia",
  order: 66,
  stage: "b1",
  lessons: [
    {
      id: "pt-u66l1",
      unit: 66,
      lesson: 1,
      title: "A oferta e a procura",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Explain why something costs what it costs — who wants it, who is selling it, and what happens when that changes.",
      items: [
        { id: "pt-u66l1-aeconomia", type: "vocab", front: "a economia", reading: "aeconomia", meaning: "economy", example: { jp: "A economia portuguesa vive muito dos turistas, no entanto o governo quer mudar isso nos anos que vêm.", en: "The Portuguese economy lives largely on tourists; however, the government wants to change that in the years ahead." }, drill: { jp: "A economia vive muito dos turistas", en: "The economy lives largely on tourists" }, accept: ["the economy", "economics"], hint: "e-ku-nu-MEE-uh. Both the economy and the school subject. Also, in everyday speech, thrift: fazer economia de água is to go easy on the water." },
        { id: "pt-u66l1-aoferta", type: "vocab", front: "a oferta", reading: "aoferta", meaning: "supply", example: { jp: "A oferta de casas é pequena em Lisboa, por isso os preços continuam altos.", en: "The supply of houses is small in Lisbon, so prices remain high." }, drill: { jp: "A oferta de casas é pequena", en: "The supply of houses is small" }, accept: ["supply", "offer", "the supply", "special offer"], hint: "u-FEHR-tuh. Careful, three senses: the economic supply, a special offer in a shop, and — the everyday one — a GIFT. Uma oferta de anos is a birthday present, and oferecer is to give one." },
        { id: "pt-u66l1-aprocura", type: "vocab", front: "a procura", reading: "aprocura", meaning: "demand", example: { jp: "A procura de carros elétricos é maior todos os anos, além disso o preço já não é tão alto.", en: "Demand for electric cars is greater every year; what is more, the price is no longer so high." }, drill: { jp: "A procura de carros é maior", en: "Demand for cars is greater" }, accept: ["demand", "the demand", "search"], hint: "pru-KOO-ruh. The noun of procurar, to look for — so \"demand\" in Portuguese is literally the looking-for. A oferta e a procura is the fixed pair, in that order, where English says supply and demand." },
        { id: "pt-u66l1-oconsumidor", type: "vocab", front: "o consumidor", reading: "oconsumidor", meaning: "consumer", example: { jp: "O consumidor português compara preços muito mais do que antes, porque quase tudo ficou mais caro.", en: "The Portuguese consumer compares prices much more than before, because almost everything has become more expensive." }, drill: { jp: "O consumidor compara os preços", en: "The consumer compares prices" }, accept: ["consumer", "the consumer", "customer"], hint: "kon-su-mee-DOR; feminine a consumidora. From consumir (u65). O cliente is the person in front of you in a shop; o consumidor is the same person seen as a category." },
        { id: "pt-u66l1-oproduto", type: "vocab", front: "o produto", reading: "oproduto", meaning: "product", example: { jp: "Este produto é feito em Portugal, mas quase tudo vem de fora.", en: "This product is made in Portugal, but almost everything comes from abroad." }, drill: { jp: "O produto é feito em Portugal", en: "The product is made in Portugal" }, accept: ["product", "the product", "item"], hint: "pru-DOO-tu. Anything made to be sold, from cheese to software. Os produtos frescos is what a Portuguese supermarket calls fresh food." },
        { id: "pt-u66l1-vender", type: "vocab", front: "vender", reading: "vender", meaning: "to sell", example: { jp: "A loja quer vender tudo antes do verão, por isso os preços já estão mais baixos.", en: "The shop wants to sell everything before the summer, so prices are already lower." }, drill: { jp: "A loja quer vender tudo", en: "The shop wants to sell everything" }, accept: ["sell", "to sell off"], hint: "ven-DER. Regular -er verb, and the exact pair of comprar (u16): compro e vendo. Vende-se on a window is \"for sale\" — the se-passive you meet properly in the grammar units." },
      ],
    },
    {
      id: "pt-u66l2",
      unit: 66,
      lesson: 2,
      title: "O emprego",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about jobs at the level of a whole country — who is hiring, who is out of work, and what wages are worth.",
      items: [
        { id: "pt-u66l2-oemprego", type: "vocab", front: "o emprego", reading: "oemprego", meaning: "employment", example: { jp: "O emprego melhorou na cidade este ano, no entanto muitos jovens continuam a sair do país.", en: "Employment has improved in the city this year; however, many young people continue to leave the country." }, drill: { jp: "O emprego melhorou na cidade", en: "Employment has improved in the city" }, accept: ["employment", "job", "the job", "work"], hint: "aym-PRAY-gu. Both the abstract employment and one particular job: arranjei um emprego novo. O trabalho (u1) is the work itself; o emprego is the position that pays for it." },
        { id: "pt-u66l2-odesemprego", type: "vocab", front: "o desemprego", reading: "odesemprego", meaning: "unemployment", example: { jp: "O desemprego é mais alto fora das cidades grandes, por isso as aldeias perdem pessoas todos os anos.", en: "Unemployment is higher outside the big cities, so the villages lose people every year." }, drill: { jp: "O desemprego é mais alto fora das cidades", en: "Unemployment is higher outside the cities" }, accept: ["unemployment", "the unemployment"], hint: "de-zaym-PRAY-gu. Same des- that reverses ligar into desligar. Estar desempregado is to be out of work — the adjective, not this noun, is what you use about yourself." },
        { id: "pt-u66l2-contratar", type: "vocab", front: "contratar", reading: "contratar", meaning: "to hire", example: { jp: "A empresa vai contratar vinte pessoas no próximo ano, além disso quer abrir uma fábrica nova no norte.", en: "The company is going to hire twenty people next year; what is more, it wants to open a new factory in the north." }, drill: { jp: "A empresa vai contratar vinte pessoas", en: "The company is going to hire twenty people" }, accept: ["hire", "to take on", "to recruit", "employ"], hint: "kon-tra-TAR. From o contrato (u24), the contract you already know. The opposite is despedir (u24) — to let someone go." },
        { id: "pt-u66l2-osindicato", type: "vocab", front: "o sindicato", reading: "osindicato", meaning: "trade union", example: { jp: "O sindicato pediu salários mais altos, mas a empresa disse que não era possível este ano.", en: "The union asked for higher wages, but the company said it was not possible this year." }, drill: { jp: "O sindicato pediu salários mais altos", en: "The union asked for higher wages" }, accept: ["union", "trade union", "the union", "labor union"], hint: "seen-dee-KAH-tu. Portugal's unions are visible and named in the news constantly, usually beside a greve (u32) — the strike you already have." },
        { id: "pt-u66l2-ainflacao", type: "vocab", front: "a inflação", reading: "ainflacao", meaning: "inflation", example: { jp: "A inflação comeu quase todo o salário novo, por isso as famílias não sentiram diferença nenhuma.", en: "Inflation ate up almost all of the new salary, so families felt no difference at all." }, drill: { jp: "A inflação comeu quase todo o salário", en: "Inflation ate up almost all the salary" }, accept: ["inflation", "the inflation"], hint: "een-fla-SOWNG. Portuguese says inflation EATS money — a inflação come o salário — which is the everyday image, not a journalist's flourish." },
        { id: "pt-u66l2-ocusto", type: "vocab", front: "o custo", reading: "ocusto", meaning: "cost", example: { jp: "O custo da energia é um problema para as fábricas pequenas, no entanto as grandes empresas pagam menos.", en: "The cost of energy is a problem for small factories; the big companies, however, pay less." }, drill: { jp: "O custo da energia é um problema", en: "The cost of energy is a problem" }, accept: ["cost", "the cost", "expense"], hint: "KOOSH-tu. The verb is custar — quanto custa? is the question A1 taught you to ask in a shop; this is the noun behind it. O custo de vida is the cost of living." },
      ],
    },
    {
      id: "pt-u66l3",
      unit: 66,
      lesson: 3,
      title: "A produção e o comércio",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what a country makes, what it buys from abroad, and what it sends out.",
      items: [
        { id: "pt-u66l3-aproducao", type: "vocab", front: "a produção", reading: "aproducao", meaning: "production", example: { jp: "A produção de vinho no Douro é antiga, além disso quase metade sai para fora do país.", en: "Wine production in the Douro is old; what is more, almost half of it leaves the country." }, drill: { jp: "A produção de vinho é antiga", en: "Wine production is old" }, accept: ["production", "output", "the production"], hint: "pru-du-SOWNG. Of goods, of wine, of a film alike. The plural as produções is mostly used of shows." },
        { id: "pt-u66l3-aindustria", type: "vocab", front: "a indústria", reading: "aindustria", meaning: "industry", example: { jp: "A indústria do vinho deu trabalho a muitas pessoas no norte, mas hoje dá trabalho a muito menos.", en: "The wine industry gave work to many people in the north, but today it gives work to far fewer." }, drill: { jp: "A indústria deu trabalho a muitas pessoas", en: "The industry gave work to many people" }, accept: ["industry", "the industry"], hint: "een-DOOSH-tree-uh, stress on the ú. A sector, not a factory — a fábrica (u65) is the building where an indústria happens." },
        { id: "pt-u66l3-ocomercio", type: "vocab", front: "o comércio", reading: "ocomercio", meaning: "trade", example: { jp: "O comércio entre os dois países é grande, no entanto os dois governos discutem quase tudo.", en: "Trade between the two countries is large; the two governments, however, argue about almost everything." }, drill: { jp: "O comércio entre os países é grande", en: "Trade between the countries is large" }, accept: ["trade", "commerce", "the trade", "retail"], hint: "ku-MEHR-syu. Also the shops of a town taken together — o comércio local is what a Portuguese council means by local business." },
        { id: "pt-u66l3-exportar", type: "vocab", front: "exportar", reading: "exportar", meaning: "to export", example: { jp: "Portugal exporta muito vinho e azeite, por isso o preço de fora conta tanto para os agricultores.", en: "Portugal exports a lot of wine and olive oil, so the price abroad matters so much to farmers." }, drill: { jp: "Portugal vai exportar mais vinho", en: "Portugal is going to export more wine" }, accept: ["export", "to sell abroad"], hint: "shp-or-TAR. Regular -ar verb. The x here says \"sh\" before a consonant, as in explicar — not the \"ks\" an English reader expects." },
        { id: "pt-u66l3-importar", type: "vocab", front: "importar", reading: "importar", meaning: "to import", example: { jp: "O país tem de importar quase todo o gás, mas quer mudar isso com energia renovável.", en: "The country has to import almost all its gas, but it wants to change that with renewable energy." }, drill: { jp: "O país tem de importar o gás", en: "The country has to import gas" }, accept: ["import", "to bring in"], hint: "een-por-TAR. Second meaning worth having: não importa is \"it doesn't matter\", and importar-se is to mind — importa-se? is the polite request the register units come back to." },
      ],
    },
    {
      id: "pt-u66l4",
      unit: 66,
      lesson: 4,
      title: "O crescimento e a concorrência",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether something is going up or down, and talk about companies competing with each other.",
      items: [
        { id: "pt-u66l4-asubida", type: "vocab", front: "a subida", reading: "asubida", meaning: "rise", example: { jp: "A subida dos preços começou no inverno, por isso muitas famílias mudaram as compras da semana.", en: "The rise in prices began in the winter, so many families changed their weekly shopping." }, drill: { jp: "A subida dos preços começou no inverno", en: "The rise in prices began in winter" }, accept: ["rise", "increase", "the rise", "climb"], hint: "su-BEE-duh. From subir, to go up — and it is also a hill you walk up, which is the same idea seen from the pavement." },
        { id: "pt-u66l4-adescida", type: "vocab", front: "a descida", reading: "adescida", meaning: "fall", example: { jp: "A descida do preço do petróleo ajudou as empresas de transportes, além disso a inflação ficou mais baixa.", en: "The fall in the oil price helped transport companies; what is more, inflation came down." }, drill: { jp: "A descida do preço ajudou as empresas", en: "The fall in the price helped the companies" }, accept: ["fall", "drop", "decrease", "the fall", "descent"], hint: "desh-SEE-duh. The pair of a subida, from descer. Portugal uses both for roads too — a subida e a descida of a street in Lisbon are literal." },
        { id: "pt-u66l4-oinvestimento", type: "vocab", front: "o investimento", reading: "oinvestimento", meaning: "investment", example: { jp: "O investimento em energia renovável cresceu muito, mas as fábricas antigas ainda dão mais trabalho.", en: "Investment in renewable energy has grown a lot, but the old factories still provide more jobs." }, drill: { jp: "O investimento cresceu muito este ano", en: "Investment has grown a lot this year" }, accept: ["investment", "the investment"], hint: "een-vesh-tee-MEN-tu. The thing invested; u45 already gave you investir, the act. Investimento público / privado is the split every Portuguese budget debate runs on." },
        { id: "pt-u66l4-aconcorrencia", type: "vocab", front: "a concorrência", reading: "aconcorrencia", meaning: "competition", example: { jp: "A concorrência entre as marcas baixou os preços, no entanto as lojas pequenas fecharam quase todas.", en: "Competition between the brands brought prices down; the small shops, however, almost all closed." }, drill: { jp: "A concorrência baixou os preços", en: "Competition brought prices down" }, accept: ["competition", "the competition", "rivalry"], hint: "kon-ku-RREN-syuh. Business competition, and also the other companies themselves: a concorrência abriu ao lado. A sporting competition is a competição — different word, different world." },
        { id: "pt-u66l4-amarca", type: "vocab", front: "a marca", reading: "amarca", meaning: "brand", example: { jp: "Esta marca é conhecida em toda a Europa, porque a publicidade chegou primeiro do que o produto.", en: "This brand is known all over Europe, because the advertising arrived before the product did." }, drill: { jp: "A marca é conhecida em Portugal", en: "The brand is known in Portugal" }, accept: ["brand", "make", "the brand", "mark"], hint: "MAR-kuh. A brand, and also a mark left on something — a marca do copo na mesa. The verb marcar is to mark and to book an appointment." },
      ],
    },
  ],
};
