// NO Unit 20 — På reise ("Travelling") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded as "Vocabulary 6"; retitled and rethemed per CLAUDE.md → "No
// front language" and the block-3 plan in unit15.js. LAST UNIT OF NORWEGIAN A1.
//
// WHAT BLOCK 1 ALREADY OWNS HERE. Unit 7 taught the vehicles (en bil, et tog, en
// buss, en båt), å reise, å kjøre, til and på. This unit does not touch any of
// them; it takes what unit 7 stopped short of — the airport, the ticket and the
// passport, finding your way, the cabin you go to, and the verbs of setting off
// and arriving. That split is why a "travel" unit at slot 20 is not a second
// helping of slot 7.
//
// Conventions are declared in no/unit1.js and bind every unit. Bokmål, not
// Nynorsk.
//
// FIRST FEMININE OF THE UNIT is `ei bru` (l2) and it carries the en-/ei-
// recognition note — with an extra clause, because bru is the one word in block
// 3 where Bokmål varies in the STEM as well as the gender (ei bru/brua alongside
// en bro/broen), so a learner who only ever sees bru will not recognise bro.
//
// ø IS HAND-FOLDED, ø→o (unit1.js §3): `å besøke` → "abesoke", `å ønske` →
// "aonske". Two ø cards, both flagged on their own line.
//
// ONE NEAR-MISS DELIBERATELY NOT TAUGHT: `å fly`, to fly. `et fly` is taught in
// l1, and verb and noun share the form exactly — å fly / et fly — which is the
// same-lexeme trap RUNBOOK §4 describes in its sharpest form, since here even
// the STRING is identical apart from the marker. The noun is the more useful
// card at A1 and it takes the slot; the verb is named in the noun's hint.
// `ei reise` is likewise not taught, because å reise is unit 7's.
//
// V2 is modelled twice: "Nå pakker jeg kofferten." (l1) and "Snart drar vi til
// Oslo." (l4), both fronted-XP declaratives with the subject behind the verb.
// unit1.js §4 counted ONE clean instance in the whole of block 1; block 3 ships
// six, one per unit, each with a hint that names the rule rather than leaving the
// learner to notice it.
//
// TIME ADVERBIALS: this unit uses `snart` and `nå` (both block 1) rather than
// `i dag` / `i morgen`, which unit1.js §7 pre-authorised to block 2 at u9 and
// which block 2 duly teaches there. Every example in block 3 is built from block
// 1's vocab plus block 3's own, with one deliberate exception: eight examples
// across u18–u20 use seven block-2 verbs (å gjøre, å hjelpe, å høre, å ligge,
// å sitte, å sove, å stå). That is in scope — u11 and u13 both precede these
// units — and it is what a coverage pass should do. In this unit it is
// "Vi sover i et telt i skogen" (l3). Listed in unit15.js's header so the merge
// seat knows exactly which cards depend on block 2 staying as it is.
//
// `en ferie` WAS TAUGHT HERE AND HAS BEEN REMOVED: block 2 teaches it at u9l4,
// and RUNBOOK §4 gives the word to the lower slot. `å låne` took the card. The
// word itself stays available to these examples; only the teaching moved.
//
// LESSON ORDER: l1's å pakke and en koffert are packed before l3 goes on
// holiday with them. Checked by eye — check-lang-scope.mjs resolves scope per
// UNIT, never per LESSON (unit7.js).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT20 = {
  id: "no-u20",
  lang: "no",
  title: "På reise",
  order: 20,
  stage: "a1",
  lessons: [
    // Lesson 1: the airport and the bag you take there.
    {
      id: "no-u20l1",
      unit: 20,
      lesson: 1,
      title: "På flyplassen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Get yourself to a plane — name the airport, a ticket, a passport and a suitcase, and say you are packing.",
      items: [
        { id: "no-u20l1-etfly", type: "vocab", front: "et fly", reading: "etfly", meaning: "plane", example: { jp: "Det går et fly til Bergen.", en: "There is a plane going to Bergen." }, accept: ["an airplane", "airplane", "aeroplane", "a plane", "aircraft"], hint: "FLUE. Neuter: definite flyet, plural fly, unchanged. Å fly is to fly — verb and noun are the same word, and it is the article that keeps them apart, which is exactly why this card carries et." },
        { id: "no-u20l1-enflyplass", type: "vocab", front: "en flyplass", reading: "enflyplass", meaning: "airport", example: { jp: "Det er en flyplass nær Oslo.", en: "There is an airport near Oslo." }, accept: ["an airport", "airfield"], hint: "FLUE-plass. Masculine: definite flyplassen, plural flyplasser. Fly plus plass, a place for planes — welded together exactly the way sykehus was in unit 7." },
        { id: "no-u20l1-enbillett", type: "vocab", front: "en billett", reading: "enbillett", meaning: "ticket", example: { jp: "En billett til Bergen koster mye.", en: "A ticket to Bergen costs a lot." }, accept: ["a ticket", "fare"], hint: "bil-LETT, stress at the end. Masculine: definite billetten, plural billetter. French again, like sjåfør and frisør in unit 18 — and again respelled the way Norwegian says it." },
        { id: "no-u20l1-etpass", type: "vocab", front: "et pass", reading: "etpass", meaning: "passport", example: { jp: "Erling har et pass i veska.", en: "Erling has a passport in the bag." }, accept: ["a passport"], hint: "PASS. Neuter: definite passet, plural pass, unchanged. It is also a mountain pass — and å passe from unit 15 is a third word again. Three senses, one spelling, and context does all the work." },
        { id: "no-u20l1-enkoffert", type: "vocab", front: "en koffert", reading: "enkoffert", meaning: "suitcase", example: { jp: "Klærne er i kofferten.", en: "The clothes are in the suitcase." }, accept: ["a suitcase", "case", "luggage", "trunk"], hint: "KOF-fert. Masculine: definite kofferten, plural kofferter. From German Koffer. For a short trip you would take en sekk from unit 18 instead." },
        { id: "no-u20l1-apakke", type: "vocab", front: "å pakke", reading: "apakke", meaning: "to pack", example: { jp: "Nå pakker jeg kofferten.", en: "Now I am packing the suitcase." }, accept: ["pack", "to pack up", "pack up", "to wrap", "wrap"], hint: "PAK-ke, present pakker. Ei pakke is a parcel. And the order once more: nå at the front pushes pakker into second place and jeg in behind it — V2, every time, no exceptions." },
      ],
    },
    // Lesson 2: getting there overland. The bridge and the ferry are not
    // decoration — with this coastline they ARE the road.
    {
      id: "no-u20l2",
      unit: 20,
      lesson: 2,
      title: "På veien",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Find your way — read a map, say where the bus stops, change trains, and cross a bridge or take a ferry.",
      items: [
        { id: "no-u20l2-envei", type: "vocab", front: "en vei", reading: "envei", meaning: "road", example: { jp: "Det går en vei til flyplassen.", en: "There is a road going to the airport." }, accept: ["a road", "way", "route", "a way"], hint: "VAY, the ei diphthong of hei and reise. Masculine: definite veien, plural veier. Ei gate from unit 7 is a street inside a town; en vei is the road between them — and it is also \"the way\": på vei til Oslo, on the way to Oslo." },
        { id: "no-u20l2-etkart", type: "vocab", front: "et kart", reading: "etkart", meaning: "map", example: { jp: "Jeg ser på et kart.", en: "I am looking at a map." }, accept: ["a map", "chart"], hint: "KART. Neuter: definite kartet, plural kart, unchanged. Å lese kart is to read a map. Keep it apart from et kort, with an o — that is a card, including the one you pay with." },
        { id: "no-u20l2-astoppe", type: "vocab", front: "å stoppe", reading: "astoppe", meaning: "to stop", example: { jp: "Bussen stopper nær ei kirke.", en: "The bus stops near a church." }, accept: ["stop", "to halt", "halt", "to come to a stop"], hint: "STOP-pe, present stopper. Å slutte from unit 5 is to finish something off; å stoppe is to come to a halt. Stopp! on its own is the shout, and the word on the road sign." },
        { id: "no-u20l2-abytte", type: "vocab", front: "å bytte", reading: "abytte", meaning: "to change", example: { jp: "Vi bytter tog i Oslo.", en: "We change trains in Oslo." }, accept: ["change", "to swap", "swap", "to exchange", "exchange", "to switch", "switch"], hint: "BUET-te, present bytter. Swapping one thing for another — bytte tog, bytte penger. Å skifte from unit 15 is closer to changing your clothes; å bytte is an exchange between two things." },
        { id: "no-u20l2-eibru", type: "vocab", front: "ei bru", reading: "eibru", meaning: "bridge", example: { jp: "Det går ei bru til ei øy.", en: "There is a bridge going to an island." }, accept: ["a bridge"], hint: "BRUE, tight u. Feminine: definite brua, plural bruer. ⚠ This one varies more than most: you will also see en bro / broen, a different STEM as well as a different gender, and bro is common in print and in place names. Both are correct Bokmål. This course writes ei bru, because ei predicts the -a definite — but recognise bro when you meet it." },
        { id: "no-u20l2-eiferje", type: "vocab", front: "ei ferje", reading: "eiferje", meaning: "ferry", example: { jp: "Vi kjører bilen på ferja.", en: "We drive the car onto the ferry." }, accept: ["a ferry", "ferryboat"], hint: "FÆR-ye. Feminine: definite ferja, plural ferjer — also spelt ferge, and both are correct. With a coast this shape, ferja is ordinary public transport, not an excursion: whole national roads run straight onto one." },
      ],
    },
    // Lesson 3: the holiday itself.
    {
      id: "no-u20l3",
      unit: 20,
      lesson: 3,
      title: "På hytta",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about time off — a cabin, a tent, a guest, a present — and say you are visiting somebody or borrowing a place to stay.",
      items: [
        { id: "no-u20l3-eihytte", type: "vocab", front: "ei hytte", reading: "eihytte", meaning: "cabin", example: { jp: "Familien min har ei hytte på fjellet.", en: "My family has a cabin in the mountains." }, accept: ["a cabin", "cottage", "hut", "chalet", "a cottage"], hint: "HUET-te. Feminine: definite hytta, plural hytter. Possibly the most Norwegian noun there is: a cabin på fjellet or ved sjøen, and på hytta is where a large part of the country goes at every single holiday." },
        { id: "no-u20l3-ettelt", type: "vocab", front: "et telt", reading: "ettelt", meaning: "tent", example: { jp: "Vi sover i et telt i skogen.", en: "We sleep in a tent in the forest." }, accept: ["a tent"], hint: "TELT. Neuter: definite teltet, plural telt, unchanged. Allemannsretten — the right to roam — lets you pitch one almost anywhere in Norway, as long as you keep 150 metres from the nearest house." },
        { id: "no-u20l3-engjest", type: "vocab", front: "en gjest", reading: "engjest", meaning: "guest", example: { jp: "En gjest kommer til middag.", en: "A guest is coming for dinner." }, accept: ["a guest", "visitor", "a visitor"], hint: "YEST — gj is a silent g plus a y sound, the same trick as in å gjøre. Masculine: definite gjesten, plural gjester." },
        { id: "no-u20l3-engave", type: "vocab", front: "en gave", reading: "engave", meaning: "present", example: { jp: "Jeg gir Kari en gave.", en: "I give Kari a present." }, accept: ["a gift", "gift", "present", "a present"], hint: "GAH-ve, hard g. Masculine: definite gaven, plural gaver. Straight from å gi in unit 1 — the thing that gets given." },
        { id: "no-u20l3-abesoke", type: "vocab", front: "å besøke", reading: "abesoke", meaning: "to visit", example: { jp: "Vi besøker en venn i Bergen.", en: "We are visiting a friend in Bergen." }, accept: ["visit", "to call on", "call on", "to go and see", "go and see"], hint: "be-SUR-ke, present besøker, hand-folded to abesoke. Et besøk is a visit, and Norwegians say på besøk: jeg er på besøk hos Kari, I am visiting Kari." },
        { id: "no-u20l3-alane", type: "vocab", front: "å låne", reading: "alane", meaning: "to borrow", example: { jp: "Vi låner ei hytte i Norge.", en: "We are borrowing a cabin in Norway." }, accept: ["borrow", "to lend", "lend", "to loan", "loan"], hint: "LAW-ne, present låner — the å folds to a on its own. ONE verb where English needs two: jeg låner ei bok is I BORROW a book, and jeg låner deg ei bok is I LEND you one. The direction comes from the sentence, never from the verb. Paying for it is å leie, to rent." },
      ],
    },
    // Lesson 4: setting off, and the small acts of keeping in touch that a
    // journey is made of. Last lesson of Norwegian A1.
    {
      id: "no-u20l4",
      unit: 20,
      lesson: 4,
      title: "Å dra og å komme fram",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you are setting off, fetching somebody, sending a present, showing a map, or sending a message to a friend.",
      items: [
        { id: "no-u20l4-adra", type: "vocab", front: "å dra", reading: "adra", meaning: "to go", example: { jp: "Snart drar vi til Oslo.", en: "Soon we are going to Oslo." }, accept: ["go", "to leave", "leave", "to set off", "set off", "depart", "to depart"], hint: "DRAH, present drar. Å gå from unit 1 is on foot; å dra is going by any means at all, and it is what Norwegians actually say about a journey. Note snart at the front pushing drar into second place — V2 one last time." },
        { id: "no-u20l4-ahente", type: "vocab", front: "å hente", reading: "ahente", meaning: "to fetch", example: { jp: "Jeg henter Anna på flyplassen.", en: "I am picking Anna up at the airport." }, accept: ["fetch", "to pick up", "pick up", "to collect", "collect", "get"], hint: "HEN-te, present henter. To go and get someone or something and bring it back. Å hente et barn på skolen is the daily school run, and the verb every Norwegian parent uses at four o'clock." },
        { id: "no-u20l4-asende", type: "vocab", front: "å sende", reading: "asende", meaning: "to send", example: { jp: "Kari sender en gave til meg.", en: "Kari is sending me a present." }, accept: ["send", "to post", "post", "to mail", "mail", "to dispatch"], hint: "SEN-ne — the d barely sounds. Present sender. A parcel, a message or an email: one verb for all of them." },
        { id: "no-u20l4-avise", type: "vocab", front: "å vise", reading: "avise", meaning: "to show", example: { jp: "Erling viser meg et kart.", en: "Erling is showing me a map." }, accept: ["show", "to point out", "point out", "to display", "display"], hint: "VEE-se, present viser. Å vise noen noe — to show somebody something, with the person first, exactly the order English uses. Keep it apart from ei avis, a newspaper, which only looks related." },
        { id: "no-u20l4-aonske", type: "vocab", front: "å ønske", reading: "aonske", meaning: "to wish", example: { jp: "Vi ønsker deg velkommen.", en: "We welcome you." }, accept: ["wish", "to want", "want", "to desire", "desire"], hint: "ONS-ke, present ønsker, hand-folded to aonske. Et ønske is a wish. Å ønske velkommen is the set phrase for welcoming somebody — it is what a Norwegian host actually says in the doorway, and it pairs with the velkommen you learned in unit 2." },
        { id: "no-u20l4-eimelding", type: "vocab", front: "ei melding", reading: "eimelding", meaning: "message", example: { jp: "Jeg sender ei melding til Jonas.", en: "I am sending a message to Jonas." }, accept: ["a message", "text", "a text", "text message", "note"], hint: "MEL-ding. Feminine: definite meldinga, plural meldinger. A text message or any short notice. Nouns ending in -ing are usually feminine, which is why it is meldinga — though you will see meldingen too, as always." },
      ],
    },
  ],
};
