// ES Unit 66 — La economía (slot: money-economy) — B1
// A1 taught the coins (el dinero, el precio, la tarjeta, pagar, el cambio) and A2
// the shop counter and the bank (gastar, ahorrar, el banco, la cuenta, la factura,
// barato/caro). B1 is the level above the till: a household budget, a wage as a
// condition of life, and the words a news bulletin uses about the economy.
// Examples are two clauses joined by a live connective. Every front is a level up.
//   FREE: importante, económico
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT66 = {
  id: "es-u66",
  lang: "es",
  title: "La economía",
  order: 66,
  stage: "b1",
  lessons: [
    {
      id: "es-u66l1",
      unit: 66,
      lesson: 1,
      title: "Managing your own money",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle your own finances — el presupuesto, el préstamo, la hipoteca, el cajero, los ahorros, la deuda.",
      items: [
        { id: "es-u66l1-elpresupuesto", type: "vocab", front: "el presupuesto", reading: "elpresupuesto", meaning: "the budget", example: { jp: "Hago un presupuesto cada mes, porque si no gasto demasiado.", en: "I make a budget every month, because otherwise I spend too much." }, accept: ["budget", "the estimate", "the funds"], hint: "A household budget, and also a quote for a job — pedir un presupuesto." },
        { id: "es-u66l1-elprestamo", type: "vocab", front: "el préstamo", reading: "elprestamo", meaning: "the loan", example: { jp: "Pedimos un préstamo al banco, pero al final nos lo negaron.", en: "We asked the bank for a loan, but in the end they refused us." }, accept: ["loan", "the credit"], hint: "From prestar, to lend (A2). The one who takes it out has una deuda." },
        { id: "es-u66l1-lahipoteca", type: "vocab", front: "la hipoteca", reading: "lahipoteca", meaning: "the mortgage", example: { jp: "Pagamos la hipoteca de la casa cada mes, así que no podemos ahorrar mucho.", en: "We pay the mortgage on the house every month, so we can't save much." }, accept: ["mortgage", "the home loan"], hint: "A loan on a home specifically. It can last decades — a thirty-year hipoteca is normal." },
        { id: "es-u66l1-elcajero", type: "vocab", front: "el cajero", reading: "elcajero", meaning: "the cash machine", example: { jp: "El cajero estaba cerrado, de modo que tuve que pagar en efectivo.", en: "The cash machine was closed, so I had to pay in cash." }, accept: ["cash machine", "ATM", "the cashier"], hint: "El cajero automático is the machine; el cajero is also the human cashier at a till." },
        { id: "es-u66l1-losahorros", type: "vocab", front: "los ahorros", reading: "losahorros", meaning: "the savings", example: { jp: "Gastó todos sus ahorros en el viaje, aunque sabía que era mucho dinero.", en: "He spent all his savings on the trip, although he knew it was a lot of money." }, accept: ["savings", "the nest egg"], hint: "The noun beside ahorrar, to save. Usually plural." },
        { id: "es-u66l1-ladeuda", type: "vocab", front: "la deuda", reading: "ladeuda", meaning: "the debt", example: { jp: "Tiene muchas deudas, por lo que casi no puede ahorrar nada.", en: "He has a lot of debts, which is why he can hardly save anything." }, accept: ["debt", "the debts"], hint: "estar en deuda con alguien = to owe someone (a debt or a favour)." },
      ],
    },
    {
      id: "es-u66l2",
      unit: 66,
      lesson: 2,
      title: "Work and income",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about employment as a condition — el empleado, el paro, la jubilación, la nómina, despedir, contratar.",
      items: [
        { id: "es-u66l2-elempleado", type: "vocab", front: "el empleado", reading: "elempleado", meaning: "the employee", example: { jp: "Los empleados de esta empresa trabajan cuatro días a la semana, lo cual es poco común.", en: "The employees of this company work four days a week, which is unusual." }, accept: ["employee", "the worker", "member of staff"], hint: "From emplear, to employ. El empleo is employment or a job." },
        { id: "es-u66l2-elparo", type: "vocab", front: "el paro", reading: "elparo", meaning: "unemployment", example: { jp: "El paro bajó este año, pero sigue siendo alto en esta región.", en: "Unemployment fell this year, but it's still high in this region." }, accept: ["the unemployment", "the dole", "joblessness"], hint: "estar en el paro = to be out of work. From parar, to stop. The formal term is el desempleo." },
        { id: "es-u66l2-lajubilacion", type: "vocab", front: "la jubilación", reading: "lajubilacion", meaning: "retirement", example: { jp: "Mi padre está en la jubilación desde hace dos años, y nunca ha estado tan contento.", en: "My father has been retired for two years, and he has never been so happy." }, accept: ["retirement", "the pension"], hint: "The verb is jubilarse. A jubilado is a pensioner." },
        { id: "es-u66l2-lanomina", type: "vocab", front: "la nómina", reading: "lanomina", meaning: "the payslip", example: { jp: "Recibe la nómina el día treinta, así que paga todo a final de mes.", en: "He gets his payslip on the thirtieth, so he pays everything at the end of the month." }, accept: ["payslip", "the wages", "payroll"], hint: "Both the payslip and the payroll a company runs. Cobrar la nómina = to get paid." },
        { id: "es-u66l2-despedir", type: "vocab", front: "despedir", reading: "despedir", meaning: "to fire", example: { jp: "La empresa despidió a cien personas, aunque decía que iba bien.", en: "The company laid off a hundred people, although it said it was doing well." }, accept: ["to lay off", "to dismiss", "to sack"], hint: "Also to see someone off / say goodbye: despedirse de alguien." },
        { id: "es-u66l2-contratar", type: "vocab", front: "contratar", reading: "contratar", meaning: "to hire", example: { jp: "Van a contratar a más gente, ya que la empresa está creciendo.", en: "They're going to hire more people, since the company is growing." }, accept: ["to take on", "to employ", "to recruit"], hint: "The opposite of despedir. Also to take out a service — contratar un seguro." },
      ],
    },
    {
      id: "es-u66l3",
      unit: 66,
      lesson: 3,
      title: "The economy",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow an economics story — la economía, el crecimiento, la inflación, invertir, el comercio, la industria.",
      items: [
        { id: "es-u66l3-laeconomia", type: "vocab", front: "la economía", reading: "laeconomia", meaning: "the economy", example: { jp: "La economía va mejor, y sin embargo mucha gente todavía no lo nota.", en: "The economy is doing better, and yet a lot of people still don't notice it." }, accept: ["economy", "economics"] },
        { id: "es-u66l3-elcrecimiento", type: "vocab", front: "el crecimiento", reading: "elcrecimiento", meaning: "growth", example: { jp: "El crecimiento es muy bajo este año, así que el gobierno está preocupado.", en: "Growth is very low this year, so the government is worried." }, accept: ["the growth", "expansion"], hint: "The noun beside crecer, to grow (u34)." },
        { id: "es-u66l3-lainflacion", type: "vocab", front: "la inflación", reading: "lainflacion", meaning: "inflation", example: { jp: "Con la inflación, todo cuesta más que hace dos años.", en: "With inflation, everything costs more than it did two years ago." }, accept: ["the inflation", "rising prices"] },
        { id: "es-u66l3-invertir", type: "vocab", front: "invertir", reading: "invertir", meaning: "to invest", example: { jp: "Invirtieron en una empresa pequeña, y les salió muy bien.", en: "They invested in a small company, and it worked out very well for them." }, accept: ["to put money into", "to invest in"], hint: "e → ie: invierto. La inversión is the investment." },
        { id: "es-u66l3-elcomercio", type: "vocab", front: "el comercio", reading: "elcomercio", meaning: "trade", example: { jp: "El comercio entre los dos países ha crecido mucho en diez años.", en: "Trade between the two countries has grown a lot in ten years." }, accept: ["the trade", "commerce", "shop"], hint: "Also a shop itself — un comercio de barrio, a local shop." },
        { id: "es-u66l3-laindustria", type: "vocab", front: "la industria", reading: "laindustria", meaning: "the industry", example: { jp: "La industria de esta región da trabajo a mucha gente, aunque cada vez a menos.", en: "This region's industry gives work to a lot of people, although fewer and fewer." }, accept: ["industry", "the manufacturing"], hint: "The adjective is industrial. Una zona industrial is an industrial estate." },
      ],
    },
    {
      id: "es-u66l4",
      unit: 66,
      lesson: 4,
      title: "Rich and poor",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Discuss inequality of means — rico, pobre, la riqueza, la pobreza, los impuestos, la crisis.",
      items: [
        { id: "es-u66l4-rico", type: "vocab", front: "rico", reading: "rico", meaning: "rich", example: { jp: "Este país es rico, y sin embargo mucha gente vive mal.", en: "This country is rich, and yet a lot of people live badly." }, accept: ["wealthy", "well off", "tasty"], hint: "Also \"tasty\" of food: ¡qué rico! — how delicious!" },
        { id: "es-u66l4-pobre", type: "vocab", front: "pobre", reading: "pobre", meaning: "poor", example: { jp: "Su familia era pobre, así que empezó a trabajar a los quince años.", en: "His family was poor, so he started working at fifteen." }, accept: ["hard up", "needy"], hint: "Before the noun it turns sympathetic: el pobre hombre = the poor (pitiable) man." },
        { id: "es-u66l4-lariqueza", type: "vocab", front: "la riqueza", reading: "lariqueza", meaning: "wealth", example: { jp: "La riqueza de este país viene sobre todo de los turistas.", en: "This country's wealth comes mainly from tourists." }, accept: ["the wealth", "riches"], hint: "From rico. The opposite is la pobreza." },
        { id: "es-u66l4-lapobreza", type: "vocab", front: "la pobreza", reading: "lapobreza", meaning: "poverty", example: { jp: "La pobreza aumentó en la ciudad, mientras que bajó en el campo.", en: "Poverty rose in the city, whereas it fell in the countryside." }, accept: ["the poverty", "hardship"] },
        { id: "es-u66l4-losimpuestos", type: "vocab", front: "los impuestos", reading: "losimpuestos", meaning: "taxes", example: { jp: "Se pagan impuestos cada año, incluso cuando se trabaja poco.", en: "You pay taxes every year, even when you work little." }, accept: ["taxes", "the tax", "taxation"], hint: "Impersonal se pagan — \"taxes are paid\". The singular el impuesto is one specific tax." },
        { id: "es-u66l4-lacrisis", type: "vocab", front: "la crisis", reading: "lacrisis", meaning: "the crisis", example: { jp: "Durante la crisis, muchas empresas cerraron y el paro subió mucho.", en: "During the crisis, many companies closed and unemployment rose a lot." }, accept: ["crisis", "the recession"], hint: "Same in singular and plural: la crisis, las crisis." },
      ],
    },
  ],
};
