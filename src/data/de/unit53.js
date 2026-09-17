// DE Unit 53 — Vergleich und Steigerung (slot: comparison and degree) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: saying HOW MUCH. A2 already teaches vergleichen, der Unterschied,
// verschieden, ähnlich, genauso, je…desto, mehr, weniger, besser, fast, kaum —
// the comparative machinery. What it has no words for is the GRADE: how strongly,
// what share, rising or falling, all of it or part of it. So l1 is degree adverbs,
// l2 is the trend verbs a news story needs (zunehmen / abnehmen / steigen /
// sinken), l3 is two things set side by side, l4 is quantity with a floor and a
// ceiling (mindestens / höchstens).
// ⚠️ l2's four trend verbs are a deliberate pair-of-pairs: zunehmen/abnehmen are
// separable and share nehmen; steigen/sinken are plain strong verbs. The hints
// cross-reference them so the learner meets them as two mirrors, not four words.
// FREE: Pflanzen, Monate, Monaten
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT53 = {
  id: "de-u53",
  lang: "de",
  title: "Vergleich und Steigerung",
  order: 53,
  stage: "b1",
  lessons: [
    {
      id: "de-u53l1",
      unit: 53,
      lesson: 1,
      title: "Wie stark ist es?",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade how strong something is — fairly, extremely, clearly, only slightly — so that a comparison actually says something.",
      items: [
        { id: "de-u53l1-ziemlich", type: "vocab", front: "ziemlich", reading: "ziemlich", meaning: "fairly", example: { jp: "Die Prüfung war ziemlich schwer, aber am Ende habe ich sie bestanden.", en: "The exam was fairly hard, but in the end I passed it." }, drill: { jp: "Das Buch ist ziemlich teuer", en: "The book is fairly expensive" }, accept: ["fairly", "quite", "rather", "pretty", "reasonably"], hint: "Sits between sehr and ein bisschen. ziemlich gut is a real compliment in German, not a lukewarm one." },
        { id: "de-u53l1-ausserst", type: "vocab", front: "äußerst", reading: "ausserst", meaning: "extremely", example: { jp: "Der Winter war äußerst kalt, deshalb sind viele Pflanzen im Garten kaputt.", en: "The winter was extremely cold, so many plants in the garden are dead." }, drill: { jp: "Das Wetter ist äußerst kalt", en: "The weather is extremely cold" }, accept: ["extremely", "exceedingly", "highly", "most", "utterly"], hint: "The superlative of außen (outside): right at the outer edge. Stronger than sehr, and mostly written." },
        { id: "de-u53l1-deutlich", type: "vocab", front: "deutlich", reading: "deutlich", meaning: "clearly", example: { jp: "Man sieht deutlich, dass die Preise seit dem Sommer gestiegen sind.", en: "You can clearly see that prices have risen since the summer." }, drill: { jp: "Das Bild ist deutlich besser", en: "The picture is clearly better" }, accept: ["clearly", "clear", "distinctly", "markedly", "noticeably", "plainly"], hint: "Two jobs: easy to make out (deutlich sprechen) and by a clear margin (deutlich besser)." },
        { id: "de-u53l1-gering", type: "vocab", front: "gering", reading: "gering", meaning: "slight", example: { jp: "Der Unterschied ist gering, aber mit guten Geräten kann man ihn messen.", en: "The difference is slight, but with good instruments you can measure it." }, drill: { jp: "Der Unterschied bleibt sehr gering", en: "The difference stays very slight" }, accept: ["slight", "small", "low", "minor", "marginal", "negligible"], hint: "Of amounts and differences, never of physical size — that is klein. The opposite here is hoch." },
        { id: "de-u53l1-erheblich", type: "vocab", front: "erheblich", reading: "erheblich", meaning: "considerable", example: { jp: "Die Preise sind erheblich gestiegen, obwohl wir das ganze Jahr gespart haben.", en: "Prices have risen considerably, although we saved all year." }, drill: { jp: "Der Preis ist erheblich höher", en: "The price is considerably higher" }, accept: ["considerable", "considerably", "substantial", "substantially", "significant", "significantly"], hint: "er- + heben (to lift): enough to lift the whole total. erheblich besser = considerably better." },
        { id: "de-u53l1-uberwiegend", type: "vocab", front: "überwiegend", reading: "uberwiegend", meaning: "predominantly", example: { jp: "Die Gäste waren überwiegend jung, aber zwei von ihnen waren über fünfzig.", en: "The guests were predominantly young, but two of them were over fifty." }, drill: { jp: "Die Gäste sind überwiegend jung", en: "The guests are predominantly young" }, accept: ["predominantly", "mostly", "mainly", "for the most part", "largely"], hint: "über + wiegen (to weigh): what outweighs the rest. Close to meistens, but about proportion rather than frequency." },
      ],
    },
    {
      id: "de-u53l2",
      unit: 53,
      lesson: 2,
      title: "Mehr und weniger",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a trend with numbers: say what is rising, what is falling, what share of the whole it is, and what the average looks like.",
      items: [
        { id: "de-u53l2-abnehmen", type: "vocab", front: "abnehmen", reading: "abnehmen", meaning: "to decrease", example: { jp: "Im Winter nimmt die Zahl der Gäste ab, im Sommer steigt sie stark.", en: "In winter the number of guests decreases; in summer it rises sharply." }, drill: { jp: "Die Zahlen werden weiter abnehmen", en: "The numbers will keep decreasing" }, accept: ["to decrease", "decrease", "to decline", "decline", "to go down", "to lose weight", "to reduce"], hint: "ab + nehmen: to take away from. The exact mirror of zunehmen, weight sense and all." },
        { id: "de-u53l2-steigen", type: "vocab", front: "steigen", reading: "steigen", meaning: "to rise", example: { jp: "Die Preise steigen schon seit Monaten, und niemand weiß genau warum.", en: "Prices have been rising for months, and nobody knows exactly why." }, drill: { jp: "Die Preise steigen sehr schnell", en: "Prices rise very fast" }, accept: ["to rise", "rise", "to climb", "climb", "to go up", "to increase"], hint: "Also physical — in den Zug steigen = to get on the train. For prices and numbers it is the everyday word." },
        { id: "de-u53l2-sinken", type: "vocab", front: "sinken", reading: "sinken", meaning: "to drop", example: { jp: "Wenn die Temperatur in der Nacht sinkt, wird es in der Wohnung kalt.", en: "When the temperature drops at night, it gets cold in the flat." }, drill: { jp: "Die Preise sinken im Winter", en: "Prices drop in winter" }, accept: ["to fall", "fall", "to sink", "sink", "to drop", "drop", "to decline", "to go down"], hint: "The mirror of steigen. Prices, temperature, ships — and die Sonne sinkt at the end of the day." },
        { id: "de-u53l2-deranteil", type: "vocab", front: "der Anteil", reading: "deranteil", meaning: "the share", example: { jp: "Der Anteil der jungen Gäste ist deutlich gestiegen, obwohl die Preise hoch sind.", en: "The share of young guests has risen clearly, although prices are high." }, drill: { jp: "Der Anteil steigt seit Jahren", en: "The share has been rising for years" }, accept: ["share", "the share", "proportion", "the proportion", "percentage", "the percentage", "part", "the part"], hint: "an + der Teil: the part that falls to you. der Anteil an etwas — normally given as a percentage." },
        { id: "de-u53l2-durchschnittlich", type: "vocab", front: "durchschnittlich", reading: "durchschnittlich", meaning: "average", example: { jp: "Wir arbeiten durchschnittlich acht Stunden am Tag, manchmal auch länger.", en: "We work on average eight hours a day, sometimes even longer." }, drill: { jp: "Wir arbeiten durchschnittlich acht Stunden", en: "We work eight hours on average" }, accept: ["average", "on average", "mean", "typical", "typically"], hint: "durch + schneiden: cut straight through the middle. im Durchschnitt = on average." },
      ],
    },
    {
      id: "de-u53l3",
      unit: 53,
      lesson: 3,
      title: "Besser oder gleich?",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set two things side by side: say one beats the other, which you would rather have, where they match, and where it is the other way round.",
      items: [
        { id: "de-u53l3-ubertreffen", type: "vocab", front: "übertreffen", reading: "ubertreffen", meaning: "to surpass", example: { jp: "Das neue Buch übertrifft das alte, obwohl es viel kürzer ist.", en: "The new book surpasses the old one, although it is much shorter." }, drill: { jp: "Die Gruppe kann uns übertreffen", en: "The group can surpass us" }, accept: ["to surpass", "surpass", "to exceed", "exceed", "to beat", "beat", "to outdo"], hint: "über + treffen: to hit above the mark. Of results and records — einen Rekord übertreffen." },
        { id: "de-u53l3-vorziehen", type: "vocab", front: "vorziehen", reading: "vorziehen", meaning: "to prefer", example: { jp: "Ich ziehe den Zug vor, weil ich dort ruhig lesen und arbeiten kann.", en: "I prefer the train, because there I can read and work quietly." }, drill: { jp: "Wir würden den Zug vorziehen", en: "We would prefer the train" }, accept: ["to prefer", "prefer", "to favour", "to favor", "to rather have"], hint: "vor + ziehen: to pull one out in front of the other. Same idea as lieber, but with an object: etwas vorziehen." },
        { id: "de-u53l3-entsprechen", type: "vocab", front: "entsprechen", reading: "entsprechen", meaning: "to correspond", example: { jp: "Das Ergebnis entspricht genau dem, was wir vorher gesagt haben.", en: "The result corresponds exactly to what we said beforehand." }, drill: { jp: "Die Zahlen entsprechen dem Ziel", en: "The numbers correspond to the target" }, accept: ["to correspond", "correspond", "to match", "match", "to be in line with", "to meet"], hint: "ent- + sprechen: to speak to something. Takes the DATIVE — es entspricht dem Ziel, not das Ziel." },
        { id: "de-u53l3-gleichzeitig", type: "vocab", front: "gleichzeitig", reading: "gleichzeitig", meaning: "at the same time", example: { jp: "Ich kann nicht gleichzeitig kochen und am Computer arbeiten.", en: "I can't cook and work at the computer at the same time." }, drill: { jp: "Wir arbeiten gleichzeitig am Computer", en: "We work at the computer at the same time" }, accept: ["at the same time", "simultaneously", "at once", "concurrently", "meanwhile"], hint: "gleich + die Zeit: same-time. Not the same as inzwischen, which is about the gap in between." },
        { id: "de-u53l3-umgekehrt", type: "vocab", front: "umgekehrt", reading: "umgekehrt", meaning: "the other way round", example: { jp: "Ich dachte, er hilft mir bei der Arbeit, aber es war genau umgekehrt.", en: "I thought he was helping me with the work, but it was exactly the other way round." }, drill: { jp: "Es war genau umgekehrt", en: "It was exactly the other way round" }, accept: ["the other way round", "the other way around", "vice versa", "conversely", "reversed", "in reverse"], hint: "um + kehren (to turn): turned around. und umgekehrt at the end of a sentence = and vice versa." },
        { id: "de-u53l3-beinahe", type: "vocab", front: "beinahe", reading: "beinahe", meaning: "very nearly", example: { jp: "Wir sind beinahe zu spät gekommen, weil der Bus so lange gebraucht hat.", en: "We very nearly arrived too late, because the bus took so long." }, drill: { jp: "Wir waren beinahe zu spät", en: "We were very nearly too late" }, accept: ["almost", "nearly", "very nearly", "just about", "all but"], hint: "bei + nahe: right up next to it. Same as fast, with a touch more drama — beinahe means it nearly went wrong." },
      ],
    },
    {
      id: "de-u53l4",
      unit: 53,
      lesson: 4,
      title: "Ganz oder teilweise",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how much of something you mean — all of it, part of it, barely any — and put a floor or a ceiling on a number.",
      items: [
        { id: "de-u53l4-teilweise", type: "vocab", front: "teilweise", reading: "teilweise", meaning: "partly", example: { jp: "Die Arbeit ist teilweise gut, aber wir brauchen noch sehr viel Zeit.", en: "The work is partly good, but we still need a lot of time." }, drill: { jp: "Das Bild ist teilweise dunkel", en: "The picture is partly dark" }, accept: ["partly", "in part", "partially", "to some extent", "in places", "sometimes"], hint: "der Teil + weise (in the manner of). It also covers 'in some cases': teilweise regnet es." },
        { id: "de-u53l4-vollig", type: "vocab", front: "völlig", reading: "vollig", meaning: "totally", example: { jp: "Ich bin völlig sicher, dass wir den Termin am Montag halten können.", en: "I am totally sure that we can keep the appointment on Monday." }, drill: { jp: "Das ist völlig richtig", en: "That is totally right" }, accept: ["completely", "totally", "entirely", "utterly", "absolutely", "fully"], hint: "From voll (full). völlig falsch, völlig egal — it is the word that ends an argument." },
        { id: "de-u53l4-ausreichend", type: "vocab", front: "ausreichend", reading: "ausreichend", meaning: "sufficient", example: { jp: "Das Geld ist ausreichend für die Fahrt, aber nicht für das Hotel.", en: "The money is sufficient for the journey, but not for the hotel." }, drill: { jp: "Das Geld ist ausreichend", en: "The money is sufficient" }, accept: ["sufficient", "enough", "adequate", "adequately", "satisfactory"], hint: "aus + reichen (to reach): it reaches far enough. Also the German school grade 4 — a bare pass." },
        { id: "de-u53l4-reichlich", type: "vocab", front: "reichlich", reading: "reichlich", meaning: "plenty of", example: { jp: "Wir haben reichlich Zeit, deshalb müssen wir nicht laufen.", en: "We have plenty of time, so we don't have to run." }, drill: { jp: "Wir haben reichlich Zeit", en: "We have plenty of time" }, accept: ["plenty of", "plenty", "ample", "amply", "a good deal of"], hint: "From reich (rich): richly, in generous amount. reichlich Zeit = plenty of time." },
        { id: "de-u53l4-zusatzlich", type: "vocab", front: "zusätzlich", reading: "zusatzlich", meaning: "additionally", example: { jp: "Wir brauchen zusätzlich zwei Stunden, weil die Arbeit schwer ist.", en: "We need two hours additionally, because the work is hard." }, drill: { jp: "Wir brauchen zusätzlich zwei Stunden", en: "We need two additional hours" }, accept: ["additionally", "additional", "in addition", "extra", "on top of that"], hint: "The adjective from der Zusatz, an addition. zusätzlich zu etwas = on top of something." },
        { id: "de-u53l4-ubrig", type: "vocab", front: "übrig", reading: "ubrig", meaning: "left over", example: { jp: "Am Ende war wenig Geld übrig, aber das Essen war sehr gut.", en: "In the end little money was left over, but the food was very good." }, drill: { jp: "Es ist wenig Geld übrig", en: "There is little money left over" }, accept: ["left over", "left", "remaining", "spare", "to spare"], hint: "What is left when the rest is gone: Geld übrig haben. übrigens (by the way) is the same root, wandered." },
      ],
    },
  ],
};
