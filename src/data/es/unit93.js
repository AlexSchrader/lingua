// ES Unit 93 — Business and enterprise (slot: business) — B2
// SCAFFOLD STUB. Replace the locked lessons below with 4 real lessons of
// 5-8 cards each (aim 6). Every lesson needs a canDo. Every example may use only
// vocab introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it. Retitle this unit in Spanish when
// you author it: the English title above marks the SLOT, the wording is yours.
//   OWNS: The firm and the market — deals, negotiation, competition, capital, corporate
//         structure, insolvency.
//   NOT:  Personal money, wages and bills (u66, u84) and the shape of an organization's
//         hierarchy (u100).
//
// Spanish already teaches 2,094 words across u1–u87. Check src/data/es/TAUGHT-WORDS.md
// before writing EVERY front — a duplicate front is a hard validate:content failure,
// and the es B1 band lost 159 cards to exactly that.
export const ES_UNIT93 = {
  id: "es-u93",
  lang: "es",
  title: "El mundo de los negocios",
  order: 93,
  stage: "b2",
  lessons: [
    {
      id: "es-u93l1",
      unit: 93,
      lesson: 1,
      title: "Cerrar un trato",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Do a deal in Spanish: negotiate terms, name a clause and the other side, agree something formally, and make a bid.",
      items: [
        { id: "es-u93l1-negociar", type: "vocab", front: "negociar", reading: "negociar", meaning: "to negotiate", example: { jp: "Llevan meses negociando las condiciones del contrato.", en: "They have spent months negotiating the terms of the contract." }, accept: ["to negotiate", "to bargain", "to hammer out"], hint: "negociar CON alguien, negociar algo. La negociación (u83) is the process; this is the doing." },
        { id: "es-u93l1-eltrato", type: "vocab", front: "el trato", reading: "eltrato", meaning: "the deal", example: { jp: "Cerraron el trato sin decir nada a nadie.", en: "They closed the deal without telling anyone." }, accept: ["the deal", "the bargain", "the agreement"], hint: "Cerrar un trato = to close a deal. It also means treatment: un buen trato al cliente." },
        { id: "es-u93l1-laclausula", type: "vocab", front: "la cláusula", reading: "laclausula", meaning: "the clause", example: { jp: "La cláusula tercera cambia todo el sentido del contrato.", en: "The third clause changes the whole meaning of the contract." }, accept: ["the clause", "the term", "the provision"], hint: "One numbered term of a contract. La letra pequeña is where the awkward ones live." },
        { id: "es-u93l1-pactar", type: "vocab", front: "pactar", reading: "pactar", meaning: "to agree / come to terms", example: { jp: "Pactaron una salida que dejó contentos a los dos.", en: "They agreed on a way out that left both sides happy." }, accept: ["to agree", "to come to terms", "to settle"], hint: "A negotiated agreement, in business or in politics. Un pacto is the result." },
        { id: "es-u93l1-lacontraparte", type: "vocab", front: "la contraparte", reading: "lacontraparte", meaning: "the other side / counterparty", example: { jp: "La contraparte pidió más tiempo para responder.", en: "The other side asked for more time to reply." }, accept: ["the other side", "the counterparty", "the opposite number"], hint: "Whoever sits across the table — a firm, a state, a person." },
        { id: "es-u93l1-lapuja", type: "vocab", front: "la puja", reading: "lapuja", meaning: "the bid", example: { jp: "Ganaron la puja por muy poco dinero.", en: "They won the bid by a very small margin." }, accept: ["the bid", "the bidding", "the offer"], hint: "At auction and in tendering. Pujar por algo = to bid for something." },
      ],
    },
    {
      id: "es-u93l2",
      unit: 93,
      lesson: 2,
      title: "El mercado",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a market: name demand, a competitor and a supplier, talk about market share, and say when one firm has it all.",
      items: [
        { id: "es-u93l2-lademanda", type: "vocab", front: "la demanda", reading: "lademanda", meaning: "the demand", example: { jp: "La demanda cayó en cuanto subieron los precios.", en: "Demand fell as soon as prices went up." }, accept: ["the demand", "the market demand", "the lawsuit"], hint: "Also a lawsuit: poner una demanda. In economics it pairs with la oferta, taught in u27." },
        { id: "es-u93l2-elcompetidor", type: "vocab", front: "el competidor", reading: "elcompetidor", meaning: "the competitor", example: { jp: "Sus competidores llevan años copiando el modelo.", en: "Its competitors have spent years copying the model." }, accept: ["the competitor", "the rival"], hint: "The firm; la competencia (u92) is the activity, and also the sector as a whole." },
        { id: "es-u93l2-elmonopolio", type: "vocab", front: "el monopolio", reading: "elmonopolio", meaning: "the monopoly", example: { jp: "Durante años tuvieron el monopolio del transporte.", en: "For years they had a monopoly on transport." }, accept: ["the monopoly"], hint: "El monopolio DE algo. Monopolizar is the verb." },
        { id: "es-u93l2-lacuotademercado", type: "vocab", front: "la cuota de mercado", reading: "lacuotademercado", meaning: "the market share", example: { jp: "Su cuota de mercado ha bajado dos puntos.", en: "Their market share has fallen two points." }, accept: ["the market share", "the share of the market"], hint: "Una cuota is a share or a fee. Ganar cuota de mercado is what firms claim in results calls." },
        { id: "es-u93l2-elproveedor", type: "vocab", front: "el proveedor", reading: "elproveedor", meaning: "the supplier", example: { jp: "Cambiaron de proveedor para reducir costes.", en: "They changed supplier to reduce costs." }, accept: ["the supplier", "the vendor", "the provider"], hint: "From proveer. Also of services: el proveedor de internet." },
        { id: "es-u93l2-elconsumidor", type: "vocab", front: "el consumidor", reading: "elconsumidor", meaning: "the consumer", example: { jp: "El consumidor final paga siempre la diferencia.", en: "The end consumer always pays the difference." }, accept: ["the consumer", "the customer", "the end user"], hint: "The person a market ends at. B1's el consumo (u66) is what they do." },
      ],
    },
    {
      id: "es-u93l3",
      unit: 93,
      lesson: 3,
      title: "El dinero de la empresa",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about corporate finance: capital and profitability, cash flow, a merger, a bankruptcy, and who the shareholders are.",
      items: [
        { id: "es-u93l3-elcapital", type: "vocab", front: "el capital", reading: "elcapital", meaning: "the capital", example: { jp: "Necesitan capital para crecer fuera del país.", en: "They need capital to grow outside the country." }, accept: ["the capital", "the funds", "the investment"], hint: "Money put to work. Careful with la capital, which is the capital city." },
        { id: "es-u93l3-larentabilidad", type: "vocab", front: "la rentabilidad", reading: "larentabilidad", meaning: "the profitability / return", example: { jp: "La rentabilidad del negocio es baja pero estable.", en: "The profitability of the business is low but steady." }, accept: ["the profitability", "the return", "the yield"], hint: "Rentable = profitable. Not the same as el beneficio (u84), which is the money itself." },
        { id: "es-u93l3-elflujodecaja", type: "vocab", front: "el flujo de caja", reading: "elflujodecaja", meaning: "the cash flow", example: { jp: "El problema no son las ventas, es el flujo de caja.", en: "The problem isn't sales, it's cash flow." }, accept: ["the cash flow", "the liquidity"], hint: "La caja is the till. A firm can be profitable and still die of flujo de caja." },
        { id: "es-u93l3-lafusion", type: "vocab", front: "la fusión", reading: "lafusion", meaning: "the merger", example: { jp: "La fusión de las dos empresas duró casi un año.", en: "The merger of the two companies took almost a year." }, accept: ["the merger", "the merging", "the fusion"], hint: "Fusionarse con = to merge with. Una absorción is when one simply swallows the other." },
        { id: "es-u93l3-laquiebra", type: "vocab", front: "la quiebra", reading: "laquiebra", meaning: "the bankruptcy", example: { jp: "La empresa está en quiebra desde el verano.", en: "The company has been bankrupt since the summer." }, accept: ["the bankruptcy", "the insolvency", "the collapse"], hint: "Quebrar is the verb — to go under. Declararse en quiebra = to file for bankruptcy." },
        { id: "es-u93l3-elaccionista", type: "vocab", front: "el accionista", reading: "elaccionista", meaning: "the shareholder", example: { jp: "Los accionistas votaron en contra del plan.", en: "The shareholders voted against the plan." }, accept: ["the shareholder", "the stockholder"], hint: "From una acción, a share. Same form for both genders: la accionista." },
      ],
    },
    {
      id: "es-u93l4",
      unit: 93,
      lesson: 4,
      title: "La empresa por dentro",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a company is organized: the board and its directors, a subsidiary and its parent company, the accounts and who audits them.",
      items: [
        { id: "es-u93l4-lajuntadirectiva", type: "vocab", front: "la junta directiva", reading: "lajuntadirectiva", meaning: "the board of directors", example: { jp: "La junta directiva se reúne una vez al mes.", en: "The board of directors meets once a month." }, accept: ["the board", "the board of directors", "the management board"], hint: "Una junta is any formal meeting or body; la junta de accionistas is the shareholders' meeting." },
        { id: "es-u93l4-lafilial", type: "vocab", front: "la filial", reading: "lafilial", meaning: "the subsidiary", example: { jp: "Abrieron una filial en México el año pasado.", en: "They opened a subsidiary in Mexico last year." }, accept: ["the subsidiary", "the branch", "the affiliate"], hint: "A company owned by another. Its owner is la matriz." },
        { id: "es-u93l4-elconsejero", type: "vocab", front: "el consejero", reading: "elconsejero", meaning: "the board member / adviser", example: { jp: "Dos consejeros dimitieron el mismo día.", en: "Two board members resigned on the same day." }, accept: ["the board member", "the director", "the adviser"], hint: "El consejero delegado is the chief executive. Outside business it is simply an adviser." },
        { id: "es-u93l4-lamatriz", type: "vocab", front: "la matriz", reading: "lamatriz", meaning: "the parent company", example: { jp: "La matriz controla todas las decisiones importantes.", en: "The parent company controls all the important decisions." }, accept: ["the parent company", "the head office", "the matrix"], hint: "La empresa matriz. Also a matrix in mathematics, and the womb in anatomy." },
        { id: "es-u93l4-elbalance", type: "vocab", front: "el balance", reading: "elbalance", meaning: "the balance sheet / assessment", example: { jp: "El balance del año fue mejor de lo esperado.", en: "The year's balance sheet was better than expected." }, accept: ["the balance sheet", "the assessment", "the results"], hint: "The accounting document, and by extension any stocktaking: hacer balance de algo." },
        { id: "es-u93l4-auditar", type: "vocab", front: "auditar", reading: "auditar", meaning: "to audit", example: { jp: "Una empresa externa audita las cuentas cada año.", en: "An external firm audits the accounts every year." }, accept: ["to audit", "to examine", "to inspect"], hint: "La auditoría is the audit; el auditor does it. Always by someone outside, or it is not one." },
      ],
    },
  ],
};
