// NO Unit 66 — Penger og økonomi ("Money and the economy") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Money and the economy"; retitled per CLAUDE.md → "No front
// language". Conventions are unit1.js §1–§9. Bokmål.
//
// ⚠ u27 "Handel og penger" (A2) ALREADY OWNS THE SHOP COUNTER: å handle, en
// kunde, en kurv, ei liste, et produkt, et utvalg, en pris, ei regning, ei
// kvittering, et beløp, kontant, gratis, å spare, en konto, en rente, et
// budsjett, å skylde, å eie, en mynt, en seddel, en disk, et merke, en pant,
// å veksle. NONE of that is repeated here. This unit is the next layer up — the
// household ledger (inntekt/utgift), the bank (lån, forsikring, avgift), and the
// words a Norwegian reads in the economy pages (marked, etterspørsel,
// inflasjon, overskudd). Checked front by front against all 1215 words in
// TAUGHT-WORDS.md.
// ⚠ Block 1 owns u56 "Work and process". Wages, hiring and the workplace are
// theirs; this unit stops at the money.
//
// GENDER NOTES for this unit (unit1.js §1):
//   ei inntekt · ei utgift · ei avgift — m/f nouns, marked FEMININE here for the
//     same reason ei lønn (u18) is: the definite is inntekta, utgifta, avgifta,
//     and ei is what makes that predictable. Print writes en/-en too.
//   en etterspørsel — ⚠ -sel nouns are MASCULINE. Never ei etterspørsel.
//   ei forsikring · ei prisstigning · ei investering — -ing/-ning, feminine.
//   en økonomi · en aksje · en kostnad — masculine.
//   `inflasjon` is a MASS noun and so is taught bare (§1b), like `sparing`;
//     masculine, definite inflasjonen. Corrected after the content gate, 2026-09-16.
//   `sparing` is a MASS noun and so is taught bare (§1b), like avfall in u65.
// FIRST FEMININE is `ei inntekt` (l1) and carries the en-/ei- recognition note.
//
// SCOPE: frozen base u1–u50 plus this unit's earlier cards. `et råd` is NOT in
// the base — `å ha råd` teaches the whole idiom, and its hint says so rather
// than pointing at a card that does not exist.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT66 = {
  id: "no-u66",
  lang: "no",
  title: "Penger og økonomi",
  order: 66,
  stage: "b1",
  lessons: [
    // Lesson 1: the household ledger — what comes in, what goes out.
    {
      id: "no-u66l1",
      unit: 66,
      lesson: 1,
      title: "Inntekt og utgift",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about your own money — what comes in, what goes out and what you can afford.",
      items: [
        { id: "no-u66l1-inntekt", type: "vocab", front: "ei inntekt", reading: "eiinntekt", meaning: "an income", example: { jp: "Inntekta hennes er ikke stor, men den er sikker.", en: "Her income is not big, but it is secure." }, accept: ["income", "earnings", "revenue"], drill: { jp: "Hun har ei inntekt fra et kontor", en: "She has an income from an office" }, hint: "inn + å ta — what comes in. Feminine: inntekta. Print writes en inntekt / inntekten as well; this course marks ei so the definite -a stays predictable, exactly as with ei lønn (u18)." },
        { id: "no-u66l1-utgift", type: "vocab", front: "ei utgift", reading: "eiutgift", meaning: "an expense", example: { jp: "Utgiftene til mat øker hvert år.", en: "Food expenses go up every year." }, accept: ["expense", "cost", "outgoing"], drill: { jp: "Vi har ei utgift til mat hver uke", en: "We have an expense for food every week" }, hint: "ut + å gi — what goes out, and the mirror image of inntekt. Feminine: utgifta. Inntekter og utgifter is how every Norwegian budget is headed." },
        { id: "no-u66l1-sparing", type: "vocab", front: "sparing", reading: "sparing", meaning: "saving", example: { jp: "Sparing er lettere når du har en plan.", en: "Saving is easier when you have a plan." }, accept: ["saving", "savings"], drill: { jp: "Sparing er lett med en plan", en: "Saving is easy with a plan" }, hint: "From å spare (u27). A mass noun, so no article on the card (unit1 §1b): feminine, definite sparinga." },
        { id: "no-u66l1-kostnad", type: "vocab", front: "en kostnad", reading: "enkostnad", meaning: "a cost", example: { jp: "Kostnaden ved en ny bil er høy i Norge.", en: "The cost of a new car is high in Norway." }, accept: ["cost", "expense"], drill: { jp: "Dette er en kostnad vi må ta", en: "This is a cost we have to take" }, hint: "å koste (u6) + -nad, a suffix that builds a noun from a verb. Masculine: kostnaden." },
        { id: "no-u66l1-kostbar", type: "vocab", front: "kostbar", reading: "kostbar", meaning: "costly", example: { jp: "En ny bil er kostbar, og de fleste kjøper brukt.", en: "A new car is costly, and most people buy used." }, accept: ["expensive", "pricey", "valuable"], drill: { jp: "En ny bil er kostbar i Norge", en: "A new car is costly in Norway" }, hint: "å koste + -bar, Norwegian's \"-able\". Neuter kostbart, plural kostbare. dyr (u7) is the everyday word; kostbar is what you write." },
        { id: "no-u66l1-haraad", type: "vocab", front: "å ha råd", reading: "aharad", meaning: "to afford", example: { jp: "Vi har ikke råd til en ny bil i år.", en: "We cannot afford a new car this year." }, accept: ["afford", "to be able to afford"], drill: { jp: "Det er godt å ha råd til ferie", en: "It is good to be able to afford a holiday" }, hint: "A fixed idiom, learned whole: råd on its own means advice, and råd here is the old sense of \"means\". Always followed by til: ha råd til noe." },
      ],
    },
    // Lesson 2: the bank — the account, the loan, and the two bills that arrive
    // whether you want them or not.
    {
      id: "no-u66l2",
      unit: 66,
      lesson: 2,
      title: "I banken",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle a loan, an insurance policy and a fee at the bank.",
      items: [
        { id: "no-u66l2-bankkonto", type: "vocab", front: "en bankkonto", reading: "enbankkonto", meaning: "a bank account", example: { jp: "Pengene står på en bankkonto i Oslo.", en: "The money is in a bank account in Oslo." }, accept: ["bank account", "account"], drill: { jp: "Han har en bankkonto i Oslo", en: "He has a bank account in Oslo" }, hint: "en bank + en konto (u27). Masculine: bankkontoen, flere bankkontoer." },
        { id: "no-u66l2-lan", type: "vocab", front: "et lån", reading: "etlan", meaning: "a loan", example: { jp: "Vi tok et lån for å kjøpe hus.", en: "We took out a loan to buy a house." }, accept: ["loan", "mortgage"], drill: { jp: "Vi tok et lån i banken", en: "We took out a loan at the bank" }, hint: "From å låne (u20). Neuter: lånet, flere lån. A house loan is et boliglån, the word every Norwegian knows the interest rate of." },
        { id: "no-u66l2-betalened", type: "vocab", front: "å betale ned", reading: "abetalened", meaning: "to pay off", example: { jp: "De betaler ned lånet litt hvert år.", en: "They pay off the loan a little every year." }, accept: ["pay off", "to pay down", "to repay"], drill: { jp: "Vi prøver å betale ned lånet", en: "We are trying to pay off the loan" }, hint: "å betale (u7) + ned (u13). betaler ned, betalte ned — and the particle never moves away from the verb." },
        { id: "no-u66l2-forsikring", type: "vocab", front: "ei forsikring", reading: "eiforsikring", meaning: "an insurance", example: { jp: "Forsikringa på bilen koster mye, men den er nødvendig.", en: "The insurance on the car costs a lot, but it is necessary." }, accept: ["insurance", "insurance policy", "cover"], drill: { jp: "Vi har ei forsikring på bilen", en: "We have an insurance on the car" }, hint: "From å forsikre, to make sure. -ing → feminine: forsikringa." },
        { id: "no-u66l2-avgift", type: "vocab", front: "ei avgift", reading: "eiavgift", meaning: "a fee", example: { jp: "Avgifta på en ny bil er høy i Norge.", en: "The duty on a new car is high in Norway." }, accept: ["fee", "duty", "charge", "tax"], drill: { jp: "Det er ei avgift på hver bil", en: "There is a fee on every car" }, hint: "av + å gi, built like ei utgift. Feminine: avgifta. It is on every Norwegian bill and in every price, and it is not the same as en skatt (u32), which is income tax." },
        { id: "no-u66l2-investere", type: "vocab", front: "å investere", reading: "ainvestere", meaning: "to invest", example: { jp: "Han investerer pengene i et hus i Bergen.", en: "He invests the money in a house in Bergen." }, accept: ["invest"], drill: { jp: "Han prøver å investere pengene sine", en: "He is trying to invest his money" }, hint: "investerer, investerte — a regular -ere verb. Money put in to grow; å spare (u27) is money simply set aside." },
      ],
    },
    // Lesson 3: the words a Norwegian meets in the economy pages.
    {
      id: "no-u66l3",
      unit: 66,
      lesson: 3,
      title: "Økonomien i samfunnet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a news story about the economy and say what prices are doing.",
      items: [
        { id: "no-u66l3-okonomi", type: "vocab", front: "en økonomi", reading: "enokonomi", meaning: "an economy", example: { jp: "Økonomien i landet går bedre nå enn før.", en: "The country's economy is doing better now than before." }, accept: ["economy", "finances"], drill: { jp: "Landet har en økonomi som går bedre", en: "The country has an economy that is doing better" }, hint: "Masculine: økonomien. It covers the national economy and your own — privatøkonomien min. ø folds to o in the reading." },
        { id: "no-u66l3-marked", type: "vocab", front: "et marked", reading: "etmarked", meaning: "a market", example: { jp: "Markedet for gamle biler er stort i Norge.", en: "The market for old cars is big in Norway." }, accept: ["market"], drill: { jp: "Det er et marked for gamle biler", en: "There is a market for old cars" }, hint: "Neuter: markedet. The d is silent — say MAR-ke, the same silent d as in god (u1)." },
        { id: "no-u66l3-ettersporsel", type: "vocab", front: "en etterspørsel", reading: "enettersporsel", meaning: "a demand", example: { jp: "Etterspørselen etter strøm øker om vinteren.", en: "Demand for electricity goes up in winter." }, accept: ["demand"], drill: { jp: "Det er en etterspørsel etter strøm", en: "There is a demand for electricity" }, hint: "etter + å spørre (u12) — what is asked for. ⚠ -sel nouns are MASCULINE: etterspørselen, never ei. It pairs with et tilbud (u32): tilbud og etterspørsel." },
        { id: "no-u66l3-prisstigning", type: "vocab", front: "ei prisstigning", reading: "eiprisstigning", meaning: "a price rise", example: { jp: "Prisstigninga på mat er stor i år.", en: "The price rise on food is big this year." }, accept: ["price rise", "price increase"], drill: { jp: "Vi ser ei prisstigning på mat", en: "We are seeing a price rise on food" }, hint: "en pris (u27) + å stige, to rise. -ning → feminine: prisstigninga." },
        { id: "no-u66l3-inflasjon", type: "vocab", front: "inflasjon", reading: "inflasjon", meaning: "inflation", example: { jp: "Inflasjonen gjør at alt koster mer enn før.", en: "Inflation means that everything costs more than before." }, accept: ["inflation"], drill: { jp: "Inflasjon gjør at alt koster mer", en: "Inflation means that everything costs more" }, hint: "⚠ A MASS noun, so no article on the card (unit1 §1b) — nobody says en inflasjon. Masculine, definite inflasjonen. Another -sjon noun — masculine, stressed at the end, like generasjon (u63)." },
        { id: "no-u66l3-investering", type: "vocab", front: "ei investering", reading: "eiinvestering", meaning: "an investment", example: { jp: "Investeringa i huset var god, og de angrer ikke.", en: "The investment in the house was a good one, and they do not regret it." }, accept: ["investment"], drill: { jp: "Dette var ei investering som ble god", en: "This was an investment that turned out well" }, hint: "From å investere in l2. -ing → feminine: investeringa." },
      ],
    },
    // Lesson 4: the bottom line, and what happens when it goes the wrong way.
    {
      id: "no-u66l4",
      unit: 66,
      lesson: 4,
      title: "Overskudd og underskudd",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether something made money or lost it, and what that led to.",
      items: [
        { id: "no-u66l4-overskudd", type: "vocab", front: "et overskudd", reading: "etoverskudd", meaning: "a surplus", example: { jp: "Butikken hadde et overskudd i år.", en: "The shop had a surplus this year." }, accept: ["surplus", "profit"], drill: { jp: "Butikken hadde et overskudd i år", en: "The shop had a surplus this year" }, hint: "over + skudd, what is shot over the top. Neuter: overskuddet. It also means spare energy: å ha overskudd til noe." },
        { id: "no-u66l4-underskudd", type: "vocab", front: "et underskudd", reading: "etunderskudd", meaning: "a deficit", example: { jp: "Kommunen har et underskudd i år, og alle merker det.", en: "The municipality has a deficit this year, and everyone notices it." }, accept: ["deficit", "loss", "shortfall"], drill: { jp: "Kommunen har et underskudd i år", en: "The municipality has a deficit this year" }, hint: "The mirror of overskudd, built with under (u13). Neuter: underskuddet." },
        { id: "no-u66l4-aksje", type: "vocab", front: "en aksje", reading: "enaksje", meaning: "a share", example: { jp: "Han kjøpte en aksje i banken for ti år siden.", en: "He bought a share in the bank ten years ago." }, accept: ["share", "stock"], drill: { jp: "Han kjøpte en aksje i banken", en: "He bought a share in the bank" }, hint: "Masculine: aksjen, flere aksjer. Said AK-sje, with the sj of sjø (u1)." },
        { id: "no-u66l4-brukeopp", type: "vocab", front: "å bruke opp", reading: "abrukeopp", meaning: "to use up", example: { jp: "Vi brukte opp pengene før ferien.", en: "We used up the money before the holiday." }, accept: ["use up", "to spend", "to exhaust"], drill: { jp: "Det er lett å bruke opp pengene", en: "It is easy to use up the money" }, hint: "å bruke (u17) + opp (u13). bruker opp, brukte opp — the particle stays with the verb." },
        { id: "no-u66l4-lonneseg", type: "vocab", front: "å lønne seg", reading: "alonneseg", meaning: "to be worth it", example: { jp: "Det lønner seg å spare litt hver måned.", en: "It pays to save a little every month." }, accept: ["to pay off", "to be worthwhile", "to pay"], drill: { jp: "Det pleier å lønne seg å spare", en: "It usually pays to save" }, hint: "ei lønn (u18) turned into a verb, with seg (u12): literally \"to wage itself\". Nearly always impersonal — det lønner seg å gjøre noe." },
      ],
    },
  ],
};
