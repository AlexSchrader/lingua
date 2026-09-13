// NO Unit 27 — Handel og penger ("Trade and money") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Shopping and money"; retitled per CLAUDE.md → "No front
// language". Authored by BLOCK 3 at the crew lead's request — u27 is block 1's
// slot, but it is the one unentangled unit in u26–u30 and block 1 is holding
// the rest for sequencing (u28 feeds u29, which claims som/for/der).
//
// ⚠ THIS UNIT SITS BELOW THIS BLOCK'S OWN u41–u50, which inverts the usual
// ownership pressure. Everywhere else block 3 loses every collision on the
// lower-slot rule; here it WINS them, including against its own later units.
// So the screen had to include block 3's own corpus as a thing to avoid, not
// just the siblings' — a u27 card that collided with u47 would have killed the
// u47 card, not this one.
//
// WHAT A1 ALREADY OWNS HERE, and what this unit therefore may not re-teach:
// penger (u7), ei krone (u15), en butikk (u6), å kjøpe (u1), å betale (u7),
// å koste (u6), dyr (u7), billig (u1), en gave (u20), å låne (u20), å bytte
// (u20). A1 buys a thing and pays for it; this unit is the TRANSACTION around
// it — choosing, the receipt, the bill, the account, saving, and owning.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// FIRST FEMININE OF THE UNIT is `ei liste` (l1) and it carries the en-/ei-
// recognition note §1 requires. The -ing nouns here take `ei` per the band rule
// (ei regning, ei kvittering), which applies to the whole class without
// exception — Bokmål permits a feminine on every one of them.
//
// ø IS WRITTEN o IN `reading` (§3): `et beløp` → "etbelop". That is the only ø.
//
// ⚠ THREE CANDIDATES DIED ON THE MERGED SCREEN BEFORE A CARD WAS WRITTEN, and
// two of them are the form-collision class rather than the front-collision one:
//   `ei vare`  → `var` is A1 u14, and var is also an adjective, so vare is a
//                legitimate form of a taught word. A cloze blanks by string.
//   `et lager` → "lager" is the PRESENT TENSE of A1 u6's `å lage`. Same problem,
//                and a worse one, because the present is the form a learner meets
//                constantly.
//   `ei gjeld` → block 2's `å gjelde` at u32. Ordinary lower-slot loss.
// Replaced by et produkt, et merke and et budsjett. Neither of the first two
// would have shown on a front-uniqueness check: nothing collides as a STRING.
//
// ⚠ RESERVE LIST — screened against merged A1, both sibling worktrees and block
// 3's own u41–u50.
//   l1 å handle:   en handlevogn · et kjøp · ei bestilling
//   l2 betaling:   et gebyr · en faktura · å runde
//   l3 å spare:    ei inntekt · en utgift · å låne? NO — A1 u20 · reserve: et sparemål
//   l4 penger:     en kasserer · et beløp? used l2 · reserves: ei veksling · en valuta
//
// SCOPE: examples and drills use merged A1 only, plus this unit's own earlier
// cards. It deliberately leans on NOTHING from u21–u26 or u28–u50 — not block
// 1's, not block 2's, and not block 3's own later units — so the unit is
// verifiable standing alone wherever it ends up in the merge order.
// Subordinators are A1's real set: at, fordi, hvis, men, eller, når. NOT som,
// for or der, which are untaught and which lint cannot see because isInflection
// excuses `for` via `fordi`.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT27 = {
  id: "no-u27",
  lang: "no",
  title: "Handel og penger",
  order: 27,
  stage: "a2",
  lessons: [
    // Lesson 1: the act of shopping, and who is doing it.
    {
      id: "no-u27l1",
      unit: 27,
      lesson: 1,
      title: "Å handle",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do the shopping — handle, kunde, kurv, liste, produkt, utvalg — and say what you are looking for.",
      items: [
        { id: "no-u27l1-ahandle", type: "vocab", front: "å handle", reading: "ahandle", meaning: "to shop", example: { jp: "Vi handler i en butikk når vi ikke har melk.", en: "We shop in a shop when we do not have milk." }, drill: { jp: "Det er lett å handle i en butikk", en: "It is easy to shop in a shop" }, accept: ["shop", "to do the shopping", "to trade", "to act"], hint: "HAN-le — the d is silent. Present handler. To do the shopping, and in a second sense to act: å handle raskt is to act quickly. Å kjøpe from A1 unit 1 is buying one thing; å handle is the whole errand." },
        { id: "no-u27l1-enkunde", type: "vocab", front: "en kunde", reading: "enkunde", meaning: "customer", example: { jp: "En kunde er sint fordi en pris er høy.", en: "A customer is angry because a price is high." }, drill: { jp: "En kunde kommer i butikken", en: "A customer comes into the shop" }, accept: ["a client", "a shopper"], hint: "KUN-ne — the d is silent here too. Masculine: definite kunden, plural kunder. En selger from A1 unit 18 stands on the other side of the disk." },
        { id: "no-u27l1-enkurv", type: "vocab", front: "en kurv", reading: "enkurv", meaning: "basket", example: { jp: "En kurv er tung når vi handler til ei uke.", en: "A basket is heavy when we shop for a week." }, drill: { jp: "Vi tar en kurv i butikken", en: "We take a basket in the shop" }, accept: ["a hamper", "a cart"], hint: "KUERV. Masculine: definite kurven, plural kurver. The hand basket; the trolley is ei handlevogn. Ei papirkurv is a wastepaper basket, which is the same word doing humbler work." },
        { id: "no-u27l1-eiliste", type: "vocab", front: "ei liste", reading: "eiliste", meaning: "list", example: { jp: "Ei liste er god, fordi vi glemmer alt.", en: "A list is good, because we forget everything." }, drill: { jp: "Vi skriver ei liste i dag", en: "We write a list today" }, accept: ["a listing", "a roll"], hint: "LIS-te. Feminine: definite lista, plural lister. You will also see ei liste written en liste / listen; Bokmål allows both, and this course writes ei because ei is what tells you the definite ends in -a. Ei handleliste is the shopping one." },
        { id: "no-u27l1-etprodukt", type: "vocab", front: "et produkt", reading: "etprodukt", meaning: "product", example: { jp: "Et produkt er billig hvis mange kjøper det.", en: "A product is cheap if many people buy it." }, drill: { jp: "Vi ser på et produkt i butikken", en: "We look at a product in the shop" }, accept: ["an item", "an article", "goods"], hint: "pro-DUKT, stress at the end. Neuter: definite produktet, plural produkter. ⚠ `ei vare` would have been the more everyday word, but `var` is taught at u14 and is also an adjective, so `vare` is a legitimate form of a word the learner already has — and a cloze blanks by string." },
        { id: "no-u27l1-etutvalg", type: "vocab", front: "et utvalg", reading: "etutvalg", meaning: "selection", example: { jp: "Et utvalg er stort i en butikk i en by.", en: "A selection is big in a shop in a city." }, drill: { jp: "Det er et utvalg i butikken", en: "There is a selection in the shop" }, accept: ["a range", "a choice", "an assortment"], hint: "UET-valg. Neuter: definite utvalget, plural utvalg, unchanged. Ut plus valg, a choosing-out — the range a shop carries. The same word is a committee, which is a group chosen out of a larger one." },
      ],
    },
    // Lesson 2: what happens at the till.
    {
      id: "no-u27l2",
      unit: 27,
      lesson: 2,
      title: "Pris og betaling",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Pay for it — pris, regning, kvittering, beløp — and say whether it is cash or free.",
      items: [
        { id: "no-u27l2-enpris", type: "vocab", front: "en pris", reading: "enpris", meaning: "price", example: { jp: "En pris er høy i en by, men mange betaler den.", en: "A price is high in a city, but many people pay it." }, drill: { jp: "En pris er høy i dag", en: "A price is high today" }, accept: ["a cost", "a prize", "a rate"], hint: "PREES. Masculine: definite prisen, plural priser. Also a prize — en Nobelpris — so the two English words meet in one Norwegian one, and only context tells them apart." },
        { id: "no-u27l2-eiregning", type: "vocab", front: "ei regning", reading: "eiregning", meaning: "bill", example: { jp: "Ei regning kommer når vi spiser på en restaurant.", en: "A bill comes when we eat at a restaurant." }, drill: { jp: "Ei regning kommer i dag", en: "A bill comes today" }, accept: ["an invoice", "a check", "arithmetic"], hint: "RAY-ning. Feminine: definite regninga, plural regninger — the -ing class takes ei under this band's rule. Built on å regne, to calculate, which is also why regning is the school subject arithmetic." },
        { id: "no-u27l2-eikvittering", type: "vocab", front: "ei kvittering", reading: "eikvittering", meaning: "receipt", example: { jp: "Ei kvittering er viktig hvis vi vil bytte et produkt.", en: "A receipt is important if we want to exchange a product." }, drill: { jp: "Vi tar ei kvittering i butikken", en: "We take a receipt in the shop" }, accept: ["a proof of purchase", "a slip"], hint: "kvit-TEH-ring. Feminine: definite kvitteringa, plural kvitteringer. Without one you cannot bytte — the verb A1 unit 20 taught — which is why Norwegian shops hand it over without being asked." },
        { id: "no-u27l2-etbelop", type: "vocab", front: "et beløp", reading: "etbelop", meaning: "amount", example: { jp: "Et beløp på ei regning er stort når vi er mange.", en: "An amount on a bill is big when there are many of us." }, drill: { jp: "Et beløp er stort i dag", en: "An amount is big today" }, accept: ["a sum", "a figure"], hint: "be-LURP, hand-folded to etbelop. Neuter: definite beløpet, plural beløp, unchanged. Specifically a sum of MONEY, where et antall is a count of things." },
        { id: "no-u27l2-kontant", type: "vocab", front: "kontant", reading: "kontant", meaning: "cash", example: { jp: "Vi betaler kontant hvis en butikk er liten.", en: "We pay cash if a shop is small." }, drill: { jp: "Vi betaler kontant i dag", en: "We pay cash today" }, accept: ["in cash", "cash down"], hint: "kon-TANT. Used bare, as an adverb: å betale kontant. Kontanter in the plural is the cash itself. Norway barely uses it — a shop that takes only kort is now ordinary rather than strange." },
        { id: "no-u27l2-gratis", type: "vocab", front: "gratis", reading: "gratis", meaning: "free (costing nothing)", example: { jp: "Et produkt er gratis hvis en butikk vil at vi skal smake.", en: "A product is free if a shop wants us to taste it." }, drill: { jp: "Et glass vann er gratis", en: "A glass of water is free" }, accept: ["free", "free of charge"], hint: "GRAH-tis. Free as in costing nothing, never free as in unconstrained — that is fri, a different word. Gratis does not inflect: gratis in every gender and number." },
      ],
    },
    // Lesson 3: money over time.
    {
      id: "no-u27l3",
      unit: 27,
      lesson: 3,
      title: "Å spare",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle money over time — spare, konto, rente, budsjett, skylde — and say what you owe.",
      items: [
        { id: "no-u27l3-aspare", type: "vocab", front: "å spare", reading: "aspare", meaning: "to save", example: { jp: "Vi sparer penger fordi vi vil kjøpe ei hytte.", en: "We save money because we want to buy a cabin." }, drill: { jp: "Det er godt å spare penger", en: "It is good to save money" }, accept: ["save", "to save up", "save up", "to economise"], hint: "SPAH-re, present sparer. To save money, and to spare something — å spare tid. En sparekonto is a savings account, built from this and the next card but one." },
        { id: "no-u27l3-enkonto", type: "vocab", front: "en konto", reading: "enkonto", meaning: "account", example: { jp: "En konto er viktig når vi vil spare penger.", en: "An account is important when we want to save money." }, drill: { jp: "Vi har en konto i en bank", en: "We have an account in a bank" }, accept: ["a bank account"], hint: "KON-to. Masculine: definite kontoen, plural kontoer or konti. Both plurals are correct, which is unusual — konti is the older Latin one and is losing ground." },
        { id: "no-u27l3-enrente", type: "vocab", front: "en rente", reading: "enrente", meaning: "interest (on money)", example: { jp: "En rente er høy, og derfor sparer mange penger nå.", en: "An interest rate is high, and that is why many people are saving money now." }, drill: { jp: "En rente er høy i dag", en: "An interest rate is high today" }, accept: ["interest", "a rate of interest"], hint: "REN-te. Masculine: definite renten, plural renter. Nothing to do with rent — that is ei leie. Renta is the single most discussed number in Norwegian household conversation." },
        { id: "no-u27l3-etbudsjett", type: "vocab", front: "et budsjett", reading: "etbudsjett", meaning: "budget", example: { jp: "Et budsjett er godt hvis vi ikke vil bruke alt.", en: "A budget is good if we do not want to spend everything." }, drill: { jp: "Vi lager et budsjett i dag", en: "We make a budget today" }, accept: ["a financial plan"], hint: "bud-SHETT — sj is the broad sh of sjø. Neuter: definite budsjettet, plural budsjetter. French budget, respelled the way Norwegian says it, exactly as sjåfør and sjef were." },
        { id: "no-u27l3-askylde", type: "vocab", front: "å skylde", reading: "askylde", meaning: "to owe", example: { jp: "Jeg skylder deg penger fordi du betalte ei regning.", en: "I owe you money because you paid a bill." }, drill: { jp: "Det er tungt å skylde penger", en: "It is hard to owe money" }, accept: ["owe", "to be indebted", "to blame"], hint: "SHUEL-le — sk before y is the broad sh, and the d is silent. Present skylder. Å skylde NOEN noe, with the person first. In a second sense it means to blame: å skylde på noen." },
        { id: "no-u27l3-aeie", type: "vocab", front: "å eie", reading: "aeie", meaning: "to own", example: { jp: "De eier ei hytte, men de eier ikke en bil.", en: "They own a cabin, but they do not own a car." }, drill: { jp: "Det er godt å eie ei hytte", en: "It is good to own a cabin" }, accept: ["own", "to possess", "possess"], hint: "AY-e, present eier. En eier is the owner and eiendom is property. Å eie is having title to a thing, where å ha is merely holding it." },
      ],
    },
    // Lesson 4: the money itself, and the shop it crosses.
    {
      id: "no-u27l4",
      unit: 27,
      lesson: 4,
      title: "Penger og butikk",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the money and the shop — mynt, seddel, disk, merke, pant — and say you are giving change.",
      items: [
        { id: "no-u27l4-enmynt", type: "vocab", front: "en mynt", reading: "enmynt", meaning: "coin", example: { jp: "En mynt er liten, men den er tung.", en: "A coin is small, but it is heavy." }, drill: { jp: "Det ligger en mynt på gulvet", en: "There is a coin lying on the floor" }, accept: ["a piece of change"], hint: "MUENT. Masculine: definite mynten, plural mynter. Ei krone from A1 unit 15 is the unit of money; en mynt is the physical disc it comes on." },
        { id: "no-u27l4-enseddel", type: "vocab", front: "en seddel", reading: "enseddel", meaning: "note", example: { jp: "En seddel er lett, og derfor bruker vi den ikke ofte nå.", en: "A note is light, and that is why we do not use it often now." }, drill: { jp: "Vi betaler med en seddel", en: "We pay with a note" }, accept: ["a banknote", "a bill", "a slip of paper"], hint: "SED-del. Masculine: definite seddelen, and the plural drops the e: sedler. A banknote, and also any small written slip — en huskeseddel is a reminder note." },
        { id: "no-u27l4-endisk", type: "vocab", front: "en disk", reading: "endisk", meaning: "counter", example: { jp: "En disk er lang i en butikk, og en kunde venter.", en: "A counter is long in a shop, and a customer waits." }, drill: { jp: "Vi ser en disk i butikken", en: "We see a counter in the shop" }, accept: ["a desk", "a bar"], hint: "DISK. Masculine: definite disken, plural disker. The counter you are served over — en fiskedisk in a shop. It is the same old word English turned into \"desk\" and \"dish\"." },
        { id: "no-u27l4-etmerke", type: "vocab", front: "et merke", reading: "etmerke", meaning: "brand", example: { jp: "Et merke er dyrt, men et produkt er ikke alltid bedre.", en: "A brand is expensive, but a product is not always better." }, drill: { jp: "Vi kjenner et merke godt", en: "We know a brand well" }, accept: ["a mark", "a label", "a badge"], hint: "MÆR-ke. Neuter: definite merket, plural merker. A brand, a mark, and a badge. Å merke is to notice — the verb behind it, and a reminder that a merke is a thing you were meant to notice." },
        { id: "no-u27l4-enpant", type: "vocab", front: "en pant", reading: "enpant", meaning: "deposit", example: { jp: "En pant er liten, men den gjør at alle kommer tilbake.", en: "A deposit is small, but it makes everyone come back." }, drill: { jp: "Det er en pant på et glass", en: "There is a deposit on a glass" }, accept: ["a refundable deposit", "a pledge", "a security"], hint: "PANT. Masculine: definite panten. The refundable deposit on a bottle or a can — you carry flasker back to the butikk and a machine gives you the pant. Å pante is the verb, and the system recovers over 90% of Norwegian bottles." },
        { id: "no-u27l4-aveksle", type: "vocab", front: "å veksle", reading: "aveksle", meaning: "to change (money)", example: { jp: "En butikk veksler en seddel hvis en kunde ikke har mynter.", en: "A shop changes a note if a customer does not have coins." }, drill: { jp: "Det er lett å veksle en seddel", en: "It is easy to change a note" }, accept: ["to exchange", "to change"], hint: "VEK-sle, present veksler. To change money into smaller units or another currency — veksling is the noun. Å bytte from A1 unit 20 is swapping one thing for another; å veksle is specifically about money, or about alternating between two things." },
      ],
    },
  ],
};
