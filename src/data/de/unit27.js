// DE Unit 27 — Shopping and money (slot: shopping) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
// The CROSS-BLOCK COLLISION LEDGER is in de/unit21.js — read that before authoring.
//
// A1 u16 owns das Geld, der Euro, kosten, der Preis, bezahlen, genug, viel, wenig
// and the numbers; A1 u17 owns kaufen, verkaufen, das Geschäft, die Kasse, der
// Kunde, zeigen, passen, anprobieren, gefallen. ALL BLOCKED. This unit is the
// layer above: the shop rather than the purchase, the means of payment rather
// than the price, offers and discounts, and the bank.
//
// SIX CANDIDATES DROPPED BY THE SCREEN, and the mix is the useful part:
//   die Rechnung   already block 3's at u42 — a restaurant bill is theirs
//   das Konto      already block 2's at u33
//   die Abteilung  already MINE at u24 — the screen caught me colliding with
//                  myself, which is the failure I would least have expected to
//                  make and the one I had no other way of seeing
//   die Ware       FOLD collision with block 2's wäre at u37: both normalize to
//                  "ware", so the pair would be indistinguishable to a typed
//                  answer. Not worth the trade for a word I can do without.
//   die Größe      one lexeme with u1's groß
//   der Verkäufer  one lexeme with u17's verkaufen
// The last two are the rule I have been enforcing on blocks 2 and 3 all day —
// one lexeme, one card — applied to myself. lint's isInflection would have
// excused BOTH silently, since each shares a three-character prefix and differs
// by one or two characters, so nothing in the gate would have stopped them.
//
// das Kleingeld is kept even though u1 teaches klein, because a transparent
// COMPOUND of two taught words is composition, not a second card for one lexeme.
// That distinction is worth holding: Klein+Geld builds, whereas Größe replaces.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT27 = {
  id: "de-u27",
  lang: "de",
  title: "Einkaufen und Bezahlen",
  order: 27,
  stage: "a2",
  lessons: [
    {
      id: "de-u27l1",
      unit: 27,
      lesson: 1,
      title: "Im Supermarkt",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do the shopping: name the supermarket and the bakery, take a trolley or a basket, ask for a bag, and comment on the range.",
      items: [
        { id: "de-u27l1-dersupermarkt", type: "vocab", front: "der Supermarkt", reading: "dersupermarkt", meaning: "the supermarket", example: { jp: "Der Supermarkt in der Stadt ist neu.", en: "The supermarket in town is new." }, drill: { jp: "Der Supermarkt in der Stadt ist neu", en: "The supermarket in town is new" }, accept: ["the supermarket", "supermarket"], hint: "Built on u7's Markt. Note that German shops shut early and stay shut on Sundays, so the word comes with a planning problem attached." },
        { id: "de-u27l1-diebackerei", type: "vocab", front: "die Bäckerei", reading: "diebackerei", meaning: "the bakery", example: { jp: "Die Bäckerei am Markt ist klein.", en: "The bakery at the market is small." }, drill: { jp: "Die Bäckerei am Markt ist klein", en: "The bakery at the market is small" }, accept: ["the bakery", "bakery", "the baker's"], hint: "The -ei ending makes a place-where-it-is-done, and it is always feminine and always end-stressed: Bäcke-REI. Metzgerei and Konditorei are built the same way." },
        { id: "de-u27l1-dereinkaufswagen", type: "vocab", front: "der Einkaufswagen", reading: "dereinkaufswagen", meaning: "the trolley", example: { jp: "Der Einkaufswagen ist heute sehr voll.", en: "The trolley is very full today." }, drill: { jp: "Der Einkaufswagen ist heute sehr voll", en: "The trolley is very full today" }, accept: ["the trolley", "trolley", "the shopping cart", "the cart"], hint: "Einkauf + s + Wagen, the shopping-vehicle, with the linking -s- you met in Tagesablauf. In Germany it takes a euro coin to unlock and gives it back." },
        { id: "de-u27l1-derkorb", type: "vocab", front: "der Korb", reading: "derkorb", meaning: "the basket", example: { jp: "Der Korb für das Obst ist leer.", en: "The basket for the fruit is empty." }, drill: { jp: "Der Korb für das Obst ist leer", en: "The basket for the fruit is empty" }, accept: ["the basket", "basket"], hint: "The b at the end is said as a p — Korp. Plural umlauts to die Körbe. Jemandem einen Korb geben is to turn someone down." },
        { id: "de-u27l1-dietute", type: "vocab", front: "die Tüte", reading: "dietute", meaning: "the carrier bag", example: { jp: "Die Tüte für das Brot kostet zehn Cent.", en: "The bag for the bread costs ten cents." }, drill: { jp: "Die Tüte für das Brot kostet zehn Cent", en: "The bag for the bread costs ten cents" }, accept: ["the bag", "bag", "the carrier bag", "the plastic bag"], hint: "A carrier bag specifically — u17's Tasche is the one you own and keep. Shops charge for a Tüte and will ask before giving you one." },
        { id: "de-u27l1-dieauswahl", type: "vocab", front: "die Auswahl", reading: "dieauswahl", meaning: "the selection", example: { jp: "Die Auswahl im Supermarkt ist groß.", en: "The selection at the supermarket is large." }, drill: { jp: "Die Auswahl im Supermarkt ist groß", en: "The selection at the supermarket is large" }, accept: ["the selection", "selection", "the range", "the choice", "choice"], hint: "Aus + Wahl, a choosing-out. Eine große Auswahl is a wide range — said of shops, menus and job candidates alike." },
      ],
    },
    {
      id: "de-u27l2",
      unit: 27,
      lesson: 2,
      title: "Bezahlen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Pay for things: in cash or by card, handle coins, notes and change, and ask for a receipt.",
      items: [
        { id: "de-u27l2-diequittung", type: "vocab", front: "die Quittung", reading: "diequittung", meaning: "the receipt", example: { jp: "Die Quittung liegt in der Tasche.", en: "The receipt is in the bag." }, drill: { jp: "Die Quittung liegt in der Tasche", en: "The receipt is in the bag" }, accept: ["the receipt", "receipt", "the till receipt"], hint: "Qu- is said kv- in German: KVIT-ung. The word shares a root with English quit — a receipt is proof the debt is discharged." },
        { id: "de-u27l2-daskleingeld", type: "vocab", front: "das Kleingeld", reading: "daskleingeld", meaning: "the change", example: { jp: "Das Kleingeld liegt auf dem Tisch.", en: "The change is on the table." }, drill: { jp: "Das Kleingeld liegt auf dem Tisch", en: "The change is on the table" }, accept: ["the change", "change", "the small change", "loose change"], hint: "klein + Geld, small money — the coins in your pocket. Not the change you get back from a note, which is das Wechselgeld." },
        { id: "de-u27l2-diemunze", type: "vocab", front: "die Münze", reading: "diemunze", meaning: "the coin", example: { jp: "Die Münze ist sehr klein.", en: "The coin is very small." }, drill: { jp: "Die Münze ist sehr klein", en: "The coin is very small" }, accept: ["the coin", "coin"], hint: "From Latin moneta, the same root that gives English money and mint. Germany still runs on coins far more than its neighbours do." },
        { id: "de-u27l2-derschein", type: "vocab", front: "der Schein", reading: "derschein", meaning: "the note", example: { jp: "Der Schein für zehn Euro ist neu.", en: "The ten-euro note is new." }, drill: { jp: "Der Schein für zehn Euro ist neu", en: "The ten-euro note is new" }, accept: ["the note", "note", "the banknote", "the bill", "the certificate"], hint: "Also any official paper — you met it inside u23's Führerschein. From scheinen, to appear: a note is a thing that stands for value rather than being it." },
        { id: "de-u27l2-diekreditkarte", type: "vocab", front: "die Kreditkarte", reading: "diekreditkarte", meaning: "the credit card", example: { jp: "Der Kunde bezahlt mit der Kreditkarte.", en: "The customer pays by credit card." }, drill: { jp: "Die Kreditkarte von dem Kunden ist neu", en: "The customer's credit card is new" }, accept: ["the credit card", "credit card", "the card"], hint: "Built on u7's Karte. Expect to be told Nur Bargeld — cash only — more often in Germany than almost anywhere else in Europe." },
        { id: "de-u27l2-bar", type: "vocab", front: "bar", reading: "bar", meaning: "in cash", example: { jp: "Ich bezahle bar.", en: "I am paying cash." }, drill: { jp: "Wir wollen heute bar bezahlen", en: "We want to pay cash today" }, accept: ["in cash", "cash", "with cash"], hint: "An adverb, not a noun — bar bezahlen, to pay cash. Das Bargeld is the cash itself, and it has nothing to do with the English bar you drink in." },
      ],
    },
    {
      id: "de-u27l3",
      unit: 27,
      lesson: 3,
      title: "Preise und Angebote",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about prices: a special offer, a discount, good value, something reduced, the advertising, and exchanging what you bought.",
      items: [
        { id: "de-u27l3-dasangebot", type: "vocab", front: "das Angebot", reading: "dasangebot", meaning: "the offer", example: { jp: "Das Angebot im Supermarkt ist gut.", en: "The offer at the supermarket is good." }, drill: { jp: "Das Angebot im Supermarkt ist gut", en: "The offer at the supermarket is good" }, accept: ["the offer", "offer", "the special offer", "the deal"], hint: "From anbieten, to offer. Im Angebot means on special this week — the phrase on every German shelf label." },
        { id: "de-u27l3-derrabatt", type: "vocab", front: "der Rabatt", reading: "derrabatt", meaning: "the discount", example: { jp: "Der Rabatt für Studenten ist groß.", en: "The student discount is large." }, drill: { jp: "Der Rabatt für Studenten ist groß", en: "The student discount is large" }, accept: ["the discount", "discount", "the reduction"], hint: "Stress the second syllable, ra-BATT. It is the amount taken off; das Angebot is the deal as a whole." },
        { id: "de-u27l3-gunstig", type: "vocab", front: "günstig", reading: "gunstig", meaning: "good value", example: { jp: "Das Hemd ist heute sehr günstig.", en: "The shirt is very good value today." }, drill: { jp: "Das Hemd ist heute sehr günstig", en: "The shirt is very good value today" }, accept: ["good value", "reasonable", "reasonably priced", "favourable", "cheap"], hint: "Not the same as u10's billig, and the difference matters to Germans: billig hints at poor quality, günstig says you got a fair price for a good thing." },
        { id: "de-u27l3-reduziert", type: "vocab", front: "reduziert", reading: "reduziert", meaning: "reduced", example: { jp: "Die Jacke ist im Angebot reduziert.", en: "The jacket is reduced in the sale." }, drill: { jp: "Die Jacke ist im Angebot reduziert", en: "The jacket is reduced in the sale" }, accept: ["reduced", "marked down", "on sale", "discounted"], hint: "A past participle used as an adjective, like u22's enttäuscht. The -ieren verbs are almost all borrowings, and they never take ge- in the participle." },
        { id: "de-u27l3-diewerbung", type: "vocab", front: "die Werbung", reading: "diewerbung", meaning: "the advert", example: { jp: "Die Werbung im Radio ist laut.", en: "The advert on the radio is loud." }, drill: { jp: "Die Werbung im Radio ist laut", en: "The advert on the radio is loud" }, accept: ["the advert", "advert", "the advertising", "advertising", "the commercial"], hint: "Covers both a single advert and advertising as a whole. From werben, to court someone — advertising as wooing, which is a fair description." },
        { id: "de-u27l3-umtauschen", type: "vocab", front: "umtauschen", reading: "umtauschen", meaning: "to exchange", example: { jp: "Ich tausche das Hemd um.", en: "I am exchanging the shirt." }, drill: { jp: "Wir können das Hemd umtauschen", en: "We can exchange the shirt" }, accept: ["to exchange", "exchange", "to swap", "to change", "to return"], hint: "Separable: ich tausche um. For goods you take back to a shop; also for changing money. German shops are not obliged to take things back, so the word gets used hopefully." },
      ],
    },
    {
      id: "de-u27l4",
      unit: 27,
      lesson: 4,
      title: "Geld und Bank",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Manage money: save it, spend it, lend it, take it out of a machine, and transfer it.",
      items: [
        { id: "de-u27l4-sparen", type: "vocab", front: "sparen", reading: "sparen", meaning: "to save", example: { jp: "Ich spare für den Urlaub.", en: "I am saving for the holiday." }, drill: { jp: "Wir wollen für den Urlaub sparen", en: "We want to save for the holiday" }, accept: ["to save", "save", "to save up", "to economize"], hint: "Saving money and saving on effort, but never saving a person — that is retten. Die Sparkasse, the savings bank, is on most German high streets." },
        { id: "de-u27l4-ausgeben", type: "vocab", front: "ausgeben", reading: "ausgeben", meaning: "to spend", example: { jp: "Ich gebe zu viel Geld aus.", en: "I spend too much money." }, drill: { jp: "Wir wollen nicht viel Geld ausgeben", en: "We do not want to spend much money" }, accept: ["to spend", "spend", "to pay out"], hint: "Separable, built on u20's geben: ich gebe aus. Only of money — time is spent with verbringen, and the two are not interchangeable." },
        { id: "de-u27l4-leihen", type: "vocab", front: "leihen", reading: "leihen", meaning: "to lend", example: { jp: "Ich leihe dem Freund das Geld.", en: "I lend my friend the money." }, drill: { jp: "Der Vater will dem Sohn Geld leihen", en: "The father wants to lend his son money" }, accept: ["to lend", "lend", "to borrow", "to loan"], hint: "It runs both ways depending on the case: jemandem etwas leihen is to lend, sich etwas leihen is to borrow. The dative marks who receives it." },
        { id: "de-u27l4-abheben", type: "vocab", front: "abheben", reading: "abheben", meaning: "to withdraw", example: { jp: "Ich hebe das Geld ab.", en: "I withdraw the money." }, drill: { jp: "Wir müssen heute Geld abheben", en: "We have to withdraw money today" }, accept: ["to withdraw", "withdraw", "to take out", "to take money out"], hint: "Separable: ich hebe ab. The same verb is what a plane does at take-off — both are a lifting-off." },
        { id: "de-u27l4-derautomat", type: "vocab", front: "der Automat", reading: "derautomat", meaning: "the machine", example: { jp: "Der Automat in der Bank ist kaputt.", en: "The machine in the bank is broken." }, drill: { jp: "Der Automat in der Bank ist kaputt", en: "The machine in the bank is broken" }, accept: ["the machine", "machine", "the cash machine", "the ATM", "the vending machine"], hint: "Any self-service machine — cash, tickets, drinks. Like u25's Patient it adds -en outside the nominative: den Automaten." },
        { id: "de-u27l4-uberweisen", type: "vocab", front: "überweisen", reading: "uberweisen", meaning: "to transfer", example: { jp: "Der Chef überweist das Gehalt.", en: "The boss transfers the salary." }, drill: { jp: "Der Chef muss das Gehalt überweisen", en: "The boss has to transfer the salary" }, accept: ["to transfer", "transfer", "to remit", "to pay in"], hint: "INSEPARABLE, unlike umtauschen and abheben above — über- here is unstressed, so it stays put: ich überweise. Die Überweisung is the transfer, and it is how Germans pay most bills." },
      ],
    },
  ],
};
