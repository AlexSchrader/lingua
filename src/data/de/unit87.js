// DE Unit 87 — Anteile, Zahlen und Schätzungen (slot: coverage-b1-14) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. u5 and u17 teach the NUMBERS and u34 teaches messen — how to
// measure. Neither teaches how German TALKS about quantity once it stops being
// exact: a share, a third, an average, a percentage, a rough figure, at most, at
// least. Every B1 reading text in German is full of them, and u1-u75 gives a
// learner no way to read a single sentence of one.
//
// FRONTS DROPPED as already taught, used in examples only:
//   die Haelfte (halb u5 owns "half") · die Mehrheit and die Umfrage (u32) ·
//   das Ganze (lexeme of ganz u49) · viel, wenig, genug (all u17 — this line
//   said "u1-u12", corrected after fact-checker) ·
//   durchschnittlich (lexeme of der Durchschnitt, carded here).
// GLOSS SPLITS inside this unit, so no two cards share an English answer:
//   ungefaehr "approximately" · rund "roughly" · knapp "just under" ·
//   mindestens "at least, as a minimum" · zumindest "at the very least" ·
//   hoechstens "at most". die Summe is "the total figure" and u79's der Betrag
//   is "the sum of money".
export const DE_UNIT87 = {
  id: "de-u87",
  lang: "de",
  title: "Anteile, Zahlen und Schätzungen",
  order: 87,
  stage: "b1",
  lessons: [
    {
      id: "de-u87l1",
      unit: 87,
      lesson: 1,
      title: "Teile eines Ganzen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what share of a whole something is: a third, a quarter, the rest.",
      items: [
        { id: "de-u87l1-dasdrittel", type: "vocab", front: "das Drittel", reading: "dasdrittel", meaning: "the third part", example: { jp: "Ein Drittel von der Klasse ist krank.", en: "A third of the class is ill." }, drill: { jp: "Das Drittel ist zu klein", en: "The third is too small" }, accept: ["third", "a third", "the third part", "one third"], hint: "drei + -tel builds the fraction. The -tel fractions are neuter — but die Hälfte is not one of them." },
        { id: "de-u87l1-dasviertel", type: "vocab", front: "das Viertel", reading: "dasviertel", meaning: "the quarter", example: { jp: "Ein Viertel vom Brot ist genug.", en: "A quarter of the bread is enough." }, drill: { jp: "Das Viertel kostet zehn Euro", en: "The quarter costs ten euros" }, accept: ["quarter", "a quarter", "the quarter", "one fourth"], hint: "Also a district of a city, and the quarter hour: Viertel nach drei." },
        { id: "de-u87l1-derrest", type: "vocab", front: "der Rest", reading: "derrest", meaning: "the remainder", example: { jp: "Den Rest bezahle ich morgen.", en: "I'll pay the remainder tomorrow." }, drill: { jp: "Der Rest ist noch hier", en: "The remainder is still here" }, accept: ["remainder", "the remainder", "the rest", "what is left", "the remnant"], hint: "der Rest vom Essen = the leftovers. Nothing to do with resting." },
        { id: "de-u87l1-derbruchteil", type: "vocab", front: "der Bruchteil", reading: "derbruchteil", meaning: "the fraction", example: { jp: "Das ist ein Bruchteil von der Summe.", en: "That is a fraction of the total." }, drill: { jp: "Der Bruchteil ist sehr klein", en: "The fraction is very small" }, accept: ["fraction", "the fraction", "the tiny part", "a small fraction"], hint: "brechen = to break + der Teil. Usually means: a tiny amount." },
        { id: "de-u87l1-dasverhaltnis", type: "vocab", front: "das Verhältnis", reading: "dasverhaltnis", meaning: "the ratio", example: { jp: "Das Verhältnis von Preis und Zeit ist gut.", en: "The ratio of price to time is good." }, drill: { jp: "Das Verhältnis ist nicht gut", en: "The ratio is not good" }, accept: ["ratio", "the ratio", "the relation", "the proportion between", "the relationship"], hint: "Also a relationship between people: ein gutes Verhältnis zu jemandem." },
      ],
    },
    {
      id: "de-u87l2",
      unit: 87,
      lesson: 2,
      title: "Zusammen und im Schnitt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Add German figures up, give a total and give an average.",
      items: [
        { id: "de-u87l2-insgesamt", type: "vocab", front: "insgesamt", reading: "insgesamt", meaning: "in total", example: { jp: "Das kostet insgesamt hundert Euro.", en: "That costs a hundred euros in total." }, drill: { jp: "Wir haben insgesamt drei Zimmer", en: "We have three rooms in total" }, accept: ["in total", "altogether", "all in all", "in all"], hint: "in + gesamt, the whole. The word that closes an addition." },
        { id: "de-u87l2-jeweils", type: "vocab", front: "jeweils", reading: "jeweils", meaning: "in each case", example: { jp: "Die Zimmer haben jeweils ein Fenster.", en: "The rooms each have one window." }, drill: { jp: "Die Zimmer haben jeweils zwei Betten", en: "The rooms each have two beds" }, accept: ["in each case", "each", "respectively", "apiece", "at a time"], hint: "je + die Weile, through the adjective jeweilig. Very common in German tables and prices." },
        { id: "de-u87l2-derdurchschnitt", type: "vocab", front: "der Durchschnitt", reading: "derdurchschnitt", meaning: "the average", example: { jp: "Der Durchschnitt in der Klasse ist gut.", en: "The average in the class is good." }, drill: { jp: "Der Durchschnitt ist sehr hoch", en: "The average is very high" }, accept: ["average", "the average", "the mean", "the norm"], hint: "im Durchschnitt = on average. The adjective is durchschnittlich." },
        { id: "de-u87l2-diesumme", type: "vocab", front: "die Summe", reading: "diesumme", meaning: "the total figure", example: { jp: "Die Summe für das Jahr ist hoch.", en: "The total for the year is high." }, drill: { jp: "Die Summe ist zu groß", en: "The total is too big" }, accept: ["total", "the total", "the total figure", "the sum total"], hint: "The figure you reach by adding. The money you owe is der Betrag." },
        { id: "de-u87l2-betragen", type: "vocab", front: "betragen", reading: "betragen", meaning: "to amount to", example: { jp: "Die Gebühr beträgt dreißig Euro.", en: "The fee amounts to thirty euros." }, drill: { jp: "Das kann hundert Euro betragen", en: "That can amount to a hundred euros" }, accept: ["to amount to", "amount to", "to come to", "come to", "to total"], hint: "The formal verb for a figure: der Preis beträgt… Noun: der Betrag." },
      ],
    },
    {
      id: "de-u87l3",
      unit: 87,
      lesson: 3,
      title: "Ungefähr wie viel",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Give a rough German figure: about, roughly, barely, at least, at most.",
      items: [
        { id: "de-u87l3-ungefahr", type: "vocab", front: "ungefähr", reading: "ungefahr", meaning: "approximately", example: { jp: "Die Reise dauert ungefähr zwei Stunden.", en: "The journey takes approximately two hours." }, drill: { jp: "Das kostet ungefähr fünfzig Euro", en: "That costs approximately fifty euros" }, accept: ["approximately", "about", "around", "roughly speaking"], hint: "The everyday one. Also: ungefähr so = something like this." },
        { id: "de-u87l3-rund", type: "vocab", front: "rund", reading: "rund", meaning: "roughly", example: { jp: "Die Fahrt dauert rund zwei Stunden.", en: "The trip takes roughly two hours." }, drill: { jp: "Das sind rund zwanzig Euro", en: "That's roughly twenty euros" }, accept: ["roughly", "about", "in round figures", "some"], hint: "Literally 'round': a rounded-off number. It also means round in shape." },
        { id: "de-u87l3-knapp", type: "vocab", front: "knapp", reading: "knapp", meaning: "just under", example: { jp: "Die Fahrt dauert knapp zwei Stunden.", en: "The trip takes just under two hours." }, drill: { jp: "Das kostet knapp zwanzig Euro", en: "That costs just under twenty euros" }, accept: ["just under", "barely", "not quite", "a shade under"], hint: "Before a number it means just under. On its own it means in short supply: das Geld ist knapp." },
        { id: "de-u87l3-mindestens", type: "vocab", front: "mindestens", reading: "mindestens", meaning: "at least, as a minimum", example: { jp: "Die Fahrt dauert mindestens eine Stunde.", en: "The trip takes at least an hour." }, drill: { jp: "Das kostet mindestens zehn Euro", en: "That costs at least ten euros" }, accept: ["at least", "as a minimum", "no less than", "a minimum of"], hint: "Always about a NUMBER. Conceding a point is zumindest." },
        { id: "de-u87l3-hochstens", type: "vocab", front: "höchstens", reading: "hochstens", meaning: "at most", example: { jp: "Wir bleiben höchstens zwei Tage.", en: "We'll stay two days at most." }, drill: { jp: "Das dauert höchstens eine Stunde", en: "That takes an hour at most" }, accept: ["at most", "no more than", "a maximum of", "at the outside"], hint: "hoch → höchst + -ens. The exact mirror of mindestens." },
      ],
    },
    {
      id: "de-u87l4",
      unit: 87,
      lesson: 4,
      title: "Zahlen im Text",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the numbers in a German text: digits, percentages, rates and doubling.",
      items: [
        { id: "de-u87l4-dieziffer", type: "vocab", front: "die Ziffer", reading: "dieziffer", meaning: "the digit", example: { jp: "Die Nummer hat sechs Ziffern.", en: "The number has six digits." }, drill: { jp: "Die Ziffer ist sehr klein", en: "The digit is very small" }, accept: ["digit", "the digit", "the figure", "the numeral"], hint: "die Zahl is the number itself; die Ziffer is one written character of it." },
        { id: "de-u87l4-derprozentsatz", type: "vocab", front: "der Prozentsatz", reading: "derprozentsatz", meaning: "the percentage", example: { jp: "Wie hoch ist der Prozentsatz?", en: "How high is the percentage?" }, drill: { jp: "Der Prozentsatz ist zu hoch", en: "The percentage is too high" }, accept: ["percentage", "the percentage", "the rate", "the percentage rate"], hint: "das Prozent is the unit (10 Prozent); der Prozentsatz is the figure. A LOAN's rate is der Zinssatz." },
        { id: "de-u87l4-diequote", type: "vocab", front: "die Quote", reading: "diequote", meaning: "the proportion in figures", example: { jp: "Die Quote liegt bei zwanzig Prozent.", en: "The proportion stands at twenty percent." }, drill: { jp: "Die Quote ist noch zu klein", en: "The proportion is still too small" }, accept: ["the proportion in figures", "the quota", "quota", "the ratio in figures", "the rate"], hint: "Said 'KVOH-teh'. die Frauenquote, die Arbeitslosenquote." },
        { id: "de-u87l4-verdoppeln", type: "vocab", front: "verdoppeln", reading: "verdoppeln", meaning: "to double", example: { jp: "Die Firma will die Zahl verdoppeln.", en: "The company wants to double the figure." }, drill: { jp: "Wir wollen den Preis verdoppeln", en: "We want to double the price" }, accept: ["to double", "double", "to double in size", "to two times as much"], hint: "doppelt = double. Halving is halbieren." },
        { id: "de-u87l4-dieangabe", type: "vocab", front: "die Angabe", reading: "dieangabe", meaning: "the stated figure", example: { jp: "Die Angabe im Antrag ist falsch.", en: "The figure stated in the application is wrong." }, drill: { jp: "Die Angabe ist nicht richtig", en: "The stated figure is not right" }, accept: ["stated figure", "the stated figure", "the detail given", "the information given", "the entry"], hint: "angeben = to state. Every German form asks for Angaben zur Person." },
      ],
    },
  ],
};
