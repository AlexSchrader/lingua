// DE Unit 16 — Zahlen und Geld (slot: vocabulary 2) — A1
// Block 3 (u15–u20). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT, and it closes the largest single hole in this A1.
// u5 "Zahlen und Zeit" stopped at zwölf — deliberately, because it needed the
// room for clock time — and u9 took the days, months and seasons without taking
// a single number. So an A1 learner arrives at u16 unable to say their age, a
// price, a house number or a year. This unit finishes the count and then spends
// it on money, which is what A1 numbers are actually for.
//
// ORDERING: this unit was drafted as u17 and swapped forward. Shopping (now u17)
// cannot write an honest example without kosten, der Preis and das Geld, and a
// unit may only use vocabulary taught at or before it — so numbers and money
// have to come first. The swap costs nothing and removes the constraint.
// NOT every number is taught. Teaching all eighteen of thirteen-to-twenty plus
// every ten would spend a third of the unit on cards a learner already gets free
// from drei + zehn. What is here is the PATTERN and every place German breaks it:
// sechzehn and siebzehn (which drop the -s and the -en), dreißig (ß, not -zig),
// sechzig and siebzig (same truncation again). vierzehn, fünfzehn, achtzig and
// neunzig are left to the pattern and used in examples instead.
// Rejected as already taught: teuer and billig (u10 — the describing unit took
// both), ein…zwölf (u5), die Uhr / die Stunde / die Minute (u5).
// Rejected as the same lexeme: zählen (~die Zahl — one lexeme, two cards, and the
// noun is the more useful of the pair at A1).
// FREE: Euro, Cent, Kilo, Prozent | Zahlen, Nummern, Stücke, Preise, Jahre, Jahren
export const DE_UNIT16 = {
  id: "de-u16",
  lang: "de",
  title: "Zahlen und Geld",
  order: 16,
  stage: "a1",
  lessons: [
    {
      id: "de-u16l1",
      unit: 16,
      lesson: 1,
      title: "Von dreizehn bis zwanzig",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count past twelve and say how old someone is: Mein Bruder ist siebzehn.",
      items: [
        { id: "de-u16l1-dreizehn", type: "vocab", front: "dreizehn", reading: "dreizehn", meaning: "thirteen", example: { jp: "Mein Bruder ist dreizehn Jahre alt.", en: "My brother is thirteen years old." }, accept: ["thirteen", "13"], hint: "The pattern for the whole teens: the small number first, then zehn. drei + zehn. English does it backwards — thir-teen." },
        { id: "de-u16l1-sechzehn", type: "vocab", front: "sechzehn", reading: "sechzehn", meaning: "sixteen", example: { jp: "Die Schule hat sechzehn Zimmer.", en: "The school has sixteen rooms." }, accept: ["sixteen", "16"], hint: "First break in the pattern: sechs loses its s. Not sechszehn — sechzehn." },
        { id: "de-u16l1-siebzehn", type: "vocab", front: "siebzehn", reading: "siebzehn", meaning: "seventeen", example: { jp: "Meine Schwester ist siebzehn.", en: "My sister is seventeen." }, accept: ["seventeen", "17"], hint: "Second break: sieben loses its -en. Not siebenzehn — siebzehn. These two are the only irregular teens." },
        { id: "de-u16l1-achtzehn", type: "vocab", front: "achtzehn", reading: "achtzehn", meaning: "eighteen", example: { jp: "Mein Cousin ist jetzt achtzehn.", en: "My cousin is eighteen now." }, accept: ["eighteen", "18"], hint: "Back to the regular pattern — acht + zehn, with only one t between them." },
        { id: "de-u16l1-neunzehn", type: "vocab", front: "neunzehn", reading: "neunzehn", meaning: "nineteen", example: { jp: "Es ist jetzt neunzehn Uhr.", en: "It is nineteen hundred hours now." }, accept: ["nineteen", "19"], hint: "German timetables count to 24, so neunzehn Uhr is seven in the evening." },
        { id: "de-u16l1-zwanzig", type: "vocab", front: "zwanzig", reading: "zwanzig", meaning: "twenty", example: { jp: "Im Haus sind zwanzig Fenster.", en: "There are twenty windows in the house." }, accept: ["twenty", "20"], hint: "Not zweizig. Twenty is its own word, and from here the tens end in -zig." },
      ],
    },
    {
      id: "de-u16l2",
      unit: 16,
      lesson: 2,
      title: "Die Zehner",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count in tens up to a hundred, and hear where German breaks its own rule.",
      items: [
        { id: "de-u16l2-dreissig", type: "vocab", front: "dreißig", reading: "dreissig", meaning: "thirty", example: { jp: "Die Frau dort ist dreißig.", en: "The woman over there is thirty." }, accept: ["thirty", "30"], hint: "The one ten that does not end in -zig: dreißig, with ß. You may type dreissig or dreißig — both are accepted." },
        { id: "de-u16l2-vierzig", type: "vocab", front: "vierzig", reading: "vierzig", meaning: "forty", example: { jp: "Die Straße ist vierzig Meter lang.", en: "The street is forty metres long." }, accept: ["forty", "40"], hint: "Regular: vier + zig. Note German writes vierzig, not vierzehn — one is 40, the other 14." },
        { id: "de-u16l2-funfzig", type: "vocab", front: "fünfzig", reading: "funfzig", meaning: "fifty", example: { jp: "Der Mann arbeitet seit fünfzig Jahren hier.", en: "The man has worked here for fifty years." }, accept: ["fifty", "50"], hint: "Regular again — fünf + zig, umlaut and all." },
        { id: "de-u16l2-sechzig", type: "vocab", front: "sechzig", reading: "sechzig", meaning: "sixty", example: { jp: "Eine Stunde hat sechzig Minuten.", en: "An hour has sixty minutes." }, accept: ["sixty", "60"], hint: "sechs drops its s here too, exactly as in sechzehn. The break is consistent." },
        { id: "de-u16l2-siebzig", type: "vocab", front: "siebzig", reading: "siebzig", meaning: "seventy", example: { jp: "Meine Großmutter ist siebzig.", en: "My grandmother is seventy." }, accept: ["seventy", "70"], hint: "And sieben drops its -en, as in siebzehn. Learn the four together: sechzehn, siebzehn, sechzig, siebzig." },
        { id: "de-u16l2-hundert", type: "vocab", front: "hundert", reading: "hundert", meaning: "hundred", example: { jp: "Das Hotel hat hundert Zimmer.", en: "The hotel has a hundred rooms." }, accept: ["hundred", "one hundred", "100"], hint: "No ein in front of it: hundert Zimmer, a hundred rooms. Say einhundert only when you are being precise." },
      ],
    },
    {
      id: "de-u16l3",
      unit: 16,
      lesson: 3,
      title: "Zahlen im Alltag",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask for a number, say how many of something there are, and say whether that is a lot or not much.",
      items: [
        { id: "de-u16l3-tausend", type: "vocab", front: "tausend", reading: "tausend", meaning: "thousand", example: { jp: "Das Auto kostet tausend Euro.", en: "The car costs a thousand euros." }, accept: ["thousand", "one thousand", "1000"], hint: "Like hundert, it takes no ein. Note the au — it is said like the ow in how." },
        { id: "de-u16l3-diezahl", type: "vocab", front: "die Zahl", reading: "diezahl", meaning: "the numeral", example: { jp: "Die Zahl dreizehn ist nicht immer schlecht.", en: "The number thirteen is not always bad." }, accept: ["the number", "the numeral", "the figure"], hint: "A number as a quantity or a figure. For the number OF something — a phone, a house — German uses die Nummer instead." },
        { id: "de-u16l3-dienummer", type: "vocab", front: "die Nummer", reading: "dienummer", meaning: "the reference number", example: { jp: "Wie ist deine Nummer?", en: "What is your number?" }, accept: ["the number", "the reference number"], hint: "The one that identifies something: die Telefonnummer, die Hausnummer. Never for counting — that is die Zahl." },
        { id: "de-u16l3-dasstuck", type: "vocab", front: "das Stück", reading: "dasstuck", meaning: "the piece", example: { jp: "Ich esse ein Stück Brot.", en: "I am eating a piece of bread." }, accept: ["the piece", "the bit", "the item"], hint: "Also how prices are quoted per item: drei Euro das Stück. No von — ein Stück Brot, never ein Stück von Brot." },
        { id: "de-u16l3-viel", type: "vocab", front: "viel", reading: "viel", meaning: "much / a lot", example: { jp: "Wir haben nicht viel Zeit.", en: "We do not have much time." }, accept: ["much", "a lot", "a lot of", "many"], hint: "Careful with the ie — viel is said feel, not vile. u12's wie viel is built from it." },
        { id: "de-u16l3-wenig", type: "vocab", front: "wenig", reading: "wenig", meaning: "few / a small amount", example: { jp: "Im Keller ist wenig Licht.", en: "There is little light in the cellar." }, accept: ["little", "few", "not much", "a small amount"], hint: "The opposite of viel. Ein wenig, with ein, softens it to a little bit." },
      ],
    },
    {
      id: "de-u16l4",
      unit: 16,
      lesson: 4,
      title: "Geld und Preise",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what something costs, say the price in euros, and say you have enough money.",
      items: [
        { id: "de-u16l4-dasgeld", type: "vocab", front: "das Geld", reading: "dasgeld", meaning: "the money", example: { jp: "Ich habe kein Geld für ein Hotel.", en: "I have no money for a hotel." }, accept: ["the money", "money"], hint: "Never plural in this sense. Geld verdienen is to earn money." },
        { id: "de-u16l4-dereuro", type: "vocab", front: "der Euro", reading: "dereuro", meaning: "the euro", example: { jp: "Das Buch kostet zwanzig Euro.", en: "The book costs twenty euros." }, accept: ["the euro"], hint: "After a number it stays singular: zwanzig Euro, never zwanzig Euros. Said OY-ro, not YOU-ro." },
        { id: "de-u16l4-kosten", type: "vocab", front: "kosten", reading: "kosten", meaning: "to cost", example: { jp: "Was kostet der Kaffee?", en: "What does the coffee cost?" }, accept: ["to cost"], hint: "Was kostet…? is the everyday way to ask a price. Wie viel kostet…? is also right and slightly fuller." },
        { id: "de-u16l4-derpreis", type: "vocab", front: "der Preis", reading: "derpreis", meaning: "the price", example: { jp: "Der Preis für das Zimmer ist zu hoch.", en: "The price for the room is too high." }, accept: ["the price", "the prize"], hint: "Nothing to do with u6's der Reis, rice — one letter apart and worth keeping straight. It also means a prize you win." },
        { id: "de-u16l4-bezahlen", type: "vocab", front: "bezahlen", reading: "bezahlen", meaning: "to pay", example: { jp: "Wir bezahlen zusammen, bitte.", en: "We will pay together, please." }, accept: ["to pay", "to pay for"], hint: "Said in every restaurant in Germany. Careful: bezahlen is to pay, zählen is to count — the umlaut is the difference." },
        { id: "de-u16l4-genug", type: "vocab", front: "genug", reading: "genug", meaning: "enough", example: { jp: "Ich habe genug Geld für das Buch.", en: "I have enough money for the book." }, accept: ["enough"], hint: "Comes before the noun but after an adjective or verb: genug Geld, but gut genug." },
      ],
    },
  ],
};
