// DE Unit 66 — Geld und Wirtschaft (slot: money) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// THEME. A2's u27 "Einkaufen und Bezahlen" owns the till and the wallet (das
// Konto, ueberweisen, der Rabatt, die Kreditkarte, das Angebot, der Kunde, die
// Steuer, das Gehalt, die Miete, die Versicherung, der Vertrag, die Firma are all
// already taught and are used here in examples). This unit takes the level above
// it: what an economy is made of and what a household budget is made of.
// NOT taken, each being one lexeme with a taught front: der Gewinn (gewinnen,
// u45), die Ueberweisung (ueberweisen, u27), die Kosten (kosten, u27).
// Within the unit, verbrauchen/der Verbrauch and der Wert/wertvoll were checked as
// a pair: only one of each shape is carded, except der Wert / wertvoll, which are
// deliberately split across l4 as noun and adjective the way u50 splits kalt / die
// Kaelte.
// FREE: Anna, Thomas, Lena, Berlin, Hamburg, Deutschland, Europa, Euro, Jahre, Firmen, Preise, Kinder
export const DE_UNIT66 = {
  id: "de-u66",
  lang: "de",
  title: "Geld und Wirtschaft",
  order: 66,
  stage: "b1",
  lessons: [
    {
      id: "de-u66l1",
      unit: 66,
      lesson: 1,
      title: "Die Wirtschaft",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the economy in the news: the economy, a firm, turnover, demand, a currency, inflation.",
      items: [
        { id: "de-u66l1-diewirtschaft", type: "vocab", front: "die Wirtschaft", reading: "diewirtschaft", meaning: "the economy", example: { jp: "Für die Wirtschaft in Deutschland ist das Auto sehr wichtig.", en: "For the economy in Germany the car is very important." }, drill: { jp: "Die Wirtschaft in Europa wächst wieder", en: "The economy in Europe is growing again" }, accept: ["economy", "the economy", "business", "the economics"], hint: "Also 'business' as a school subject, and in Austria an inn. Same -schaft ending as die Landschaft." },
        { id: "de-u66l1-derbetrieb", type: "vocab", front: "der Betrieb", reading: "derbetrieb", meaning: "the business", example: { jp: "Mein Onkel hat einen kleinen Betrieb in der Stadt.", en: "My uncle has a small business in the city." }, drill: { jp: "Der Betrieb ist sehr groß", en: "The business is very big" }, accept: ["business", "the business", "company", "the firm", "the operation", "the plant"], hint: "die Firma (u24) is the legal company; der Betrieb is the working operation. Also: in Betrieb = in service." },
        { id: "de-u66l1-derumsatz", type: "vocab", front: "der Umsatz", reading: "derumsatz", meaning: "the turnover", example: { jp: "Der Umsatz im Winter ist immer besser als im Sommer.", en: "Turnover in winter is always better than in summer." }, drill: { jp: "Der Umsatz der Firma steigt", en: "The company's turnover is rising" }, accept: ["turnover", "the turnover", "revenue", "the sales"], hint: "What comes in before costs. um + setzen, to turn something over." },
        { id: "de-u66l1-dienachfrage", type: "vocab", front: "die Nachfrage", reading: "dienachfrage", meaning: "the market demand", example: { jp: "Die Nachfrage nach kleinen Wohnungen ist in der Stadt sehr groß.", en: "Demand for small flats in the city is very high." }, drill: { jp: "Die Nachfrage nach Wohnungen ist hoch", en: "Demand for flats is high" }, accept: ["demand", "the demand"], hint: "nach + fragen: asking after something. Its pair is das Angebot (u27), supply." },
        { id: "de-u66l1-diewahrung", type: "vocab", front: "die Währung", reading: "diewahrung", meaning: "the currency", example: { jp: "In Wien bezahlt man mit der gleichen Währung wie in Berlin.", en: "In Vienna you pay with the same currency as in Berlin." }, drill: { jp: "Die Währung in Europa ist der Euro", en: "The currency in Europe is the euro" }, accept: ["currency", "the currency"], hint: "Careful with the umlaut: WÄH-rung, not Wahrung." },
        { id: "de-u66l1-dieinflation", type: "vocab", front: "die Inflation", reading: "dieinflation", meaning: "the inflation", example: { jp: "Wegen der Inflation kostet das gleiche Brot heute mehr.", en: "Because of inflation the same bread costs more today." }, drill: { jp: "Die Inflation macht das Brot teuer", en: "Inflation makes bread expensive" }, accept: ["inflation", "the inflation"], hint: "Same word as English, German stress: in-fla-TSI-on, four syllables." },
      ],
    },
    {
      id: "de-u66l2",
      unit: 66,
      lesson: 2,
      title: "Einnahmen und Ausgaben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set out what comes in and what goes out: income, wages, an expense, a receipt, the household budget, a pension.",
      items: [
        { id: "de-u66l2-daseinkommen", type: "vocab", front: "das Einkommen", reading: "daseinkommen", meaning: "the income", example: { jp: "Mit einem kleinen Einkommen ist die Miete in der Stadt hart.", en: "On a small income the rent in the city is hard." }, drill: { jp: "Das Einkommen der Familie ist klein", en: "The family's income is small" }, accept: ["income", "the income", "the earnings"], hint: "ein + kommen: what comes in. A neuter noun made from a verb, like das Essen." },
        { id: "de-u66l2-derlohn", type: "vocab", front: "der Lohn", reading: "derlohn", meaning: "the wage", example: { jp: "Der Lohn für die Arbeit am Wochenende ist besser.", en: "The wage for weekend work is better." }, drill: { jp: "Der Lohn ist leider sehr klein", en: "The wage is unfortunately very small" }, accept: ["wage", "the wage", "the wages", "the pay"], hint: "Paid by the hour. das Gehalt (u24) is the monthly salary of an office job." },
        { id: "de-u66l2-dieausgabe", type: "vocab", front: "die Ausgabe", reading: "dieausgabe", meaning: "the expense", example: { jp: "Die Ausgabe für das Auto ist im Jahr sehr hoch.", en: "The expense for the car is very high over the year." }, drill: { jp: "Die Ausgabe für Essen ist hoch", en: "The expense for food is high" }, accept: ["expense", "the expense", "the expenditure", "the spending", "the edition"], hint: "aus + geben. Also an edition of a book or newspaper." },
        { id: "de-u66l2-dieeinnahme", type: "vocab", front: "die Einnahme", reading: "dieeinnahme", meaning: "the takings", example: { jp: "Die Einnahmen aus dem Konzert gehen an die Schule.", en: "The takings from the concert go to the school." }, drill: { jp: "Die Einnahme aus dem Konzert war gut", en: "The takings from the concert were good" }, accept: ["takings", "the takings", "the receipts", "the income", "the revenue"], hint: "ein + nehmen, the mirror of die Ausgabe. Usually plural: die Einnahmen." },
        { id: "de-u66l2-derhaushalt", type: "vocab", front: "der Haushalt", reading: "derhaushalt", meaning: "the budget", example: { jp: "Im Haushalt der Stadt ist für die Schule kein Geld mehr.", en: "In the city budget there is no money left for the school." }, drill: { jp: "Der Haushalt hat kein Geld mehr", en: "The budget has no money left" }, accept: ["budget", "the budget", "household", "the household"], hint: "Two senses: the household you clean, and the budget a state plans." },
        { id: "de-u66l2-dierente", type: "vocab", front: "die Rente", reading: "dierente", meaning: "the pension", example: { jp: "Mein Großvater ist seit zehn Jahren in Rente.", en: "My grandfather has been retired for ten years." }, drill: { jp: "Die Rente ist leider zu klein", en: "The pension is unfortunately too small" }, accept: ["pension", "the pension", "the retirement pay"], hint: "in Rente gehen = to retire. The money and the state of being retired." },
      ],
    },
    {
      id: "de-u66l3",
      unit: 66,
      lesson: 3,
      title: "Schulden und Sparen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle borrowed money: debts, to lend, a loan, cash, a fee, to be worth it.",
      items: [
        { id: "de-u66l3-dieschulden", type: "vocab", front: "die Schulden", reading: "dieschulden", meaning: "the debts", example: { jp: "Nach dem Kauf vom Haus hatte die Familie viele Schulden.", en: "After buying the house the family had a lot of debts." }, drill: { jp: "Die Schulden sind sehr hoch", en: "The debts are very high" }, accept: ["debts", "the debts", "the debt"], hint: "Always plural in this sense. From die Schuld, guilt — the German for debt and guilt is one word." },
        { id: "de-u66l3-borgen", type: "vocab", front: "borgen", reading: "borgen", meaning: "to lend out", example: { jp: "Kannst du mir bis Montag zwanzig Euro borgen?", en: "Can you lend me twenty euros until Monday?" }, drill: { jp: "Wir borgen dem Freund Geld", en: "We lend our friend money" }, accept: ["to lend", "to borrow", "to loan", "lend"], hint: "Works both ways like leihen (u27): jemandem etwas borgen, or sich etwas borgen." },
        { id: "de-u66l3-derkredit", type: "vocab", front: "der Kredit", reading: "derkredit", meaning: "the loan", example: { jp: "Für das Haus brauchen wir einen Kredit von der Bank.", en: "For the house we need a loan from the bank." }, drill: { jp: "Der Kredit ist sehr teuer", en: "The loan is very expensive" }, accept: ["loan", "the loan", "the credit"], hint: "Stress the end: kre-DIT. Same root as die Kreditkarte (u27)." },
        { id: "de-u66l3-dasbargeld", type: "vocab", front: "das Bargeld", reading: "dasbargeld", meaning: "the cash", example: { jp: "In Deutschland bezahlt man im kleinen Laden gern mit Bargeld.", en: "In Germany people like to pay with cash in a small shop." }, drill: { jp: "Das Bargeld liegt auf dem Tisch", en: "The cash is lying on the table" }, accept: ["cash", "the cash"], hint: "bar (bare) + Geld. bar zahlen = to pay cash." },
        { id: "de-u66l3-sichlohnen", type: "vocab", front: "sich lohnen", reading: "sichlohnen", meaning: "to be worth it", example: { jp: "Der weite Weg zum Markt lohnt sich wegen der Preise.", en: "The long way to the market is worth it because of the prices." }, drill: { jp: "Die Arbeit kann sich lohnen", en: "The work can be worth it" }, accept: ["to be worth it", "to pay off", "to be worthwhile"], hint: "Always with es or a thing as subject: es lohnt sich. Built on der Lohn." },
        { id: "de-u66l3-diezinsen", type: "vocab", front: "die Zinsen", reading: "diezinsen", meaning: "the interest on money", example: { jp: "Für den Kredit zahlen wir jeden Monat Zinsen an die Bank.", en: "We pay the bank interest on the loan every month." }, drill: { jp: "Die Zinsen steigen schon wieder", en: "Interest is rising again" }, accept: ["interest", "the interest"], hint: "Normally plural — der Zins on its own is rare outside finance. Zinsen zahlen on a debt, Zinsen bekommen on savings." },
      ],
    },
    {
      id: "de-u66l4",
      unit: 66,
      lesson: 4,
      title: "Wert und Verlust",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Weigh what something is worth: the value, valuable, a share, a loss, to invest, the balance sheet.",
      items: [
        { id: "de-u66l4-derwert", type: "vocab", front: "der Wert", reading: "derwert", meaning: "the value", example: { jp: "Der Wert vom alten Haus steigt seit zehn Jahren stark.", en: "The value of the old house has been rising sharply for ten years." }, drill: { jp: "Der Wert vom Auto ist klein", en: "The value of the car is small" }, accept: ["value", "the value", "the worth"], hint: "Wert legen auf etwas = to set store by something." },
        { id: "de-u66l4-wertvoll", type: "vocab", front: "wertvoll", reading: "wertvoll", meaning: "valuable", example: { jp: "Die alte Uhr von meinem Großvater ist sehr wertvoll.", en: "My grandfather's old watch is very valuable." }, drill: { jp: "Die Uhr ist sehr wertvoll", en: "The watch is very valuable" }, accept: ["valuable", "precious"], hint: "Wert + voll. Of a thing worth money, and of time or advice worth having." },
        { id: "de-u66l4-derverlust", type: "vocab", front: "der Verlust", reading: "derverlust", meaning: "the loss", example: { jp: "Der Betrieb hatte im Winter einen großen Verlust.", en: "The business made a big loss in the winter." }, drill: { jp: "Der Verlust war sehr groß", en: "The loss was very big" }, accept: ["loss", "the loss"], hint: "From verlieren (u48). Money lost, and a person lost." },
        { id: "de-u66l4-investieren", type: "vocab", front: "investieren", reading: "investieren", meaning: "to invest", example: { jp: "Die Firma will im Sommer in neue Computer investieren.", en: "The company wants to invest in new computers in the summer." }, drill: { jp: "Wir wollen in das Haus investieren", en: "We want to invest in the house" }, accept: ["to invest"], hint: "Takes in + accusative: in etwas investieren. No ge- in the past: investiert." },
        { id: "de-u66l4-diebilanz", type: "vocab", front: "die Bilanz", reading: "diebilanz", meaning: "the balance sheet", example: { jp: "Am Ende vom Jahr macht der Betrieb die Bilanz.", en: "At the end of the year the business draws up the balance sheet." }, drill: { jp: "Die Bilanz war am Ende gut", en: "The balance sheet was good in the end" }, accept: ["balance sheet", "the balance sheet", "the balance", "the bottom line"], hint: "Also figurative: Bilanz ziehen = to take stock of something." },
        { id: "de-u66l4-dieaktie", type: "vocab", front: "die Aktie", reading: "dieaktie", meaning: "the share (in a company)", example: { jp: "Der Wert der Aktie ist im letzten Jahr deutlich gesunken.", en: "The value of the share has clearly fallen in the last year." }, drill: { jp: "Die Aktie ist deutlich gesunken", en: "The share has clearly fallen" }, accept: ["share", "the share", "stock", "the stock", "equity"], hint: "Three syllables: AK-tsi-e. A share in a company, not der Anteil (u53), which is any share of a whole." },
      ],
    },
  ],
};
