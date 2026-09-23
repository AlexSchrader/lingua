// DE Unit 117 — Körper, Kraft und Leben (slot: coverage-b2-7) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// Self-check, dropped as same-lexeme duplicates: der Kampf (kämpfen, taught in
// l3 of this unit — one lexeme, one card), tot (der Tod, l2 here), die Kraft
// (kräftig u49), der Bauer (kept — its only near hit is der Aufbau b1:u90, a
// false family: bauen/Bau versus Bauer are the same root but the farmer is a
// separate lexeme the learner cannot derive).
// KEPT DELIBERATELY: sterben, although aussterben (u65) is taught. The course
// itself already teaches hören (u1) AND zuhören (u86), so a separable-prefix
// sibling is not treated as a duplicate in this corpus. Its partner leben (u4)
// is taught and this half was missing — a tier C hole.
// (no FREE declarations needed)
export const DE_UNIT117 = {
  id: "de-u117",
  lang: "de",
  title: "Körper, Kraft und Leben",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "de-u117l1",
      unit: 117,
      lesson: 1,
      title: "Schwach, weich, langsam",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how something feels or moves at the weak end of the scale — soft, quiet, slow, wet or without strength.",
      items: [
        { id: "de-u117l1-schwach", type: "vocab", front: "schwach", reading: "schwach", meaning: "weak", example: { jp: "Nach der langen Reise war er zu schwach, um noch selbst zu kochen.", en: "After the long journey he was too weak to cook for himself." }, drill: { jp: "Das Licht am Abend ist schwach", en: "The light in the evening is weak" }, accept: ["weak", "faint", "feeble", "poor", "slight"], hint: "Tier C: stark is taught in u45 and this half was missing. Of an argument or a performance it means 'poor' — eine schwache Leistung." },
        { id: "de-u117l1-weich", type: "vocab", front: "weich", reading: "weich", meaning: "soft", example: { jp: "Das Bett ist so weich, dass man am Morgen kaum wieder aufstehen will.", en: "The bed is so soft that in the morning you hardly want to get up again." }, drill: { jp: "Der Stoff fühlt sich weich an", en: "The fabric feels soft" }, accept: ["soft", "tender", "gentle", "supple"], hint: "Tier C: hart is taught in u49. Of a person, weich means soft-hearted rather than weak — weich werden is to give in." },
        { id: "de-u117l1-leise", type: "vocab", front: "leise", reading: "leise", meaning: "quiet", example: { jp: "Sprechen Sie bitte leise, weil die Kinder schon schlafen.", en: "Please speak quietly, because the children are already asleep." }, drill: { jp: "Im Haus war es ganz leise", en: "In the house it was completely quiet" }, accept: ["quiet", "soft", "low", "faint", "softly", "quietly"], hint: "Tier C: its partner laut is a front nowhere in de either — so this closes only half a pair, and laut is routed to the lead. leise is about volume only — for a quiet person German says still or ruhig." },
        { id: "de-u117l1-langsam", type: "vocab", front: "langsam", reading: "langsam", meaning: "slow", example: { jp: "Der Zug fährt heute langsam, weil auf der Strecke gearbeitet wird.", en: "The train is going slowly today because work is being done on the line." }, drill: { jp: "Der Wagen fährt sehr langsam", en: "The car is driving very slowly" }, accept: ["slow", "slowly", "gradual", "gradually"], hint: "⚠️ The clearest single hole this coverage pass found: schnell is taught in UNIT 1 and langsam was taught nowhere in 113 units. Also means 'gradually' — langsam wird es kalt, it's gradually getting cold." },
        { id: "de-u117l1-nass", type: "vocab", front: "nass", reading: "nass", meaning: "wet", example: { jp: "Die Straße war noch nass, deshalb sind wir langsamer gefahren als sonst.", en: "The road was still wet, which is why we drove more slowly than usual." }, drill: { jp: "Meine Schuhe sind völlig nass", en: "My shoes are completely wet" }, accept: ["wet", "damp", "soaked", "soaking"], hint: "Tier C: trocken is taught in u49. Nothing to do with die Nase (the nose, u11) — the checker flags that pair and it is a false family." },
        { id: "de-u117l1-zart", type: "vocab", front: "zart", reading: "zart", meaning: "tender", example: { jp: "Das Fleisch war so zart, dass man kein Messer brauchte.", en: "The meat was so tender that you needed no knife." }, drill: { jp: "Das Fleisch war zart und weich", en: "The meat was tender and soft" }, accept: ["tender", "delicate", "soft", "gentle", "fine"], hint: "Said TSART. Of meat, of skin, and of a touch: eine zarte Berührung. weich in this lesson is soft to press; zart is fine and easily damaged." },
      ],
    },
    {
      id: "de-u117l2",
      unit: 117,
      lesson: 2,
      title: "Leben, Tod und Körper",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the beginning and end of a life, and name two parts of the body the course had not taught.",
      items: [
        { id: "de-u117l2-dertod", type: "vocab", front: "der Tod", reading: "dertod", meaning: "the death", example: { jp: "Der Tod des Chefs war für die Firma ein großes Problem.", en: "The boss's death was a big problem for the company." }, drill: { jp: "Der Tod kam für alle zu früh", en: "The death came too early for everyone" }, accept: ["death", "the death", "demise"], hint: "Tier C: das Leben is taught in u4. ⚠️ tot (the adjective, dead) is NOT taught alongside it — same root, so the lexeme rule allows only one card, and the noun carries more weight." },
        { id: "de-u117l2-sterben", type: "vocab", front: "sterben", reading: "sterben", meaning: "to die", example: { jp: "Die alten Bäume sterben langsam, weil es seit Jahren kein Wasser gibt.", en: "The old trees are slowly dying because there has been no water for years." }, drill: { jp: "Ohne Wasser sterben die Blumen", en: "Without water the flowers die" }, accept: ["to die", "die", "to pass away", "perish"], hint: "Strong verb with a vowel change in the present: er stirbt, not 'er sterbt'. Past starb, gestorben — and the perfect takes sein, not haben." },
        { id: "de-u117l2-schwanger", type: "vocab", front: "schwanger", reading: "schwanger", meaning: "pregnant", example: { jp: "Sie ist seit drei Monaten schwanger und arbeitet trotzdem jeden Tag im Büro.", en: "She has been pregnant for three months and still works in the office every day." }, drill: { jp: "Meine Schwester ist wieder schwanger", en: "My sister is pregnant again" }, accept: ["pregnant", "expecting", "with child"], hint: "Used with sein, never with haben. die Schwangerschaft is the pregnancy itself." },
        { id: "de-u117l2-dasgehirn", type: "vocab", front: "das Gehirn", reading: "dasgehirn", meaning: "the brain", example: { jp: "Das Gehirn arbeitet auch im Schlaf weiter, und deshalb hilft eine Nacht oft mehr als eine Stunde.", en: "The brain keeps working during sleep as well, and so a night often helps more than an hour." }, drill: { jp: "Das Gehirn braucht viel Energie", en: "The brain needs a lot of energy" }, accept: ["brain", "the brain", "mind"], hint: "The organ. For 'brains' in the sense of intelligence German says der Verstand or der Kopf." },
        { id: "de-u117l2-dasfleisch", type: "vocab", front: "das Fleisch", reading: "dasfleisch", meaning: "the meat", example: { jp: "Das Fleisch war zu lange im Ofen, und deshalb schmeckt es nicht mehr.", en: "The meat was in the oven too long, and so it no longer tastes good." }, drill: { jp: "Das Fleisch schmeckt heute gut", en: "The meat tastes good today" }, accept: ["meat", "the meat", "flesh"], hint: "One word for both English 'meat' and 'flesh' — der Fleischer is the butcher. ⚠️ A food word missing from a course that has three food units (u6, u41, u42)." },
        { id: "de-u117l2-diegeburt", type: "vocab", front: "die Geburt", reading: "diegeburt", meaning: "the birth", example: { jp: "Nach der Geburt des Kindes hat sich ihr ganzer Alltag geändert.", en: "After the birth of the child her whole daily life changed." }, drill: { jp: "Die Geburt hat alles geändert", en: "The birth changed everything" }, accept: ["birth", "the birth", "delivery", "the delivery"], hint: "The other end of the line from der Tod in this lesson. der Geburtstag is literally the birth-day, and der Geburtsort the place of birth." },
      ],
    },
    {
      id: "de-u117l3",
      unit: 117,
      lesson: 3,
      title: "Kämpfen, Befehl, Waffe",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a news report about conflict or policing — fight, order, arrest, weapon, fire and soldier.",
      items: [
        { id: "de-u117l3-kaempfen", type: "vocab", front: "kämpfen", reading: "kaempfen", meaning: "to fight", example: { jp: "Die Leute kämpfen seit Jahren dafür, dass die Schule bleiben darf.", en: "The people have been fighting for years for the school to be allowed to stay." }, drill: { jp: "Wir müssen für unsere Rechte kämpfen", en: "We must fight for our rights" }, accept: ["to fight", "fight", "to struggle", "struggle", "to battle"], hint: "kämpfen für is to fight FOR a cause, kämpfen gegen against one, and kämpfen mit is to struggle with a difficulty. der Kampf is the noun — not taught separately, because it is the same lexeme." },
        { id: "de-u117l3-derbefehl", type: "vocab", front: "der Befehl", reading: "derbefehl", meaning: "the command", example: { jp: "Der Befehl kam so spät, dass die Gruppe schon wieder zu Hause war.", en: "The order came so late that the group was already back home." }, drill: { jp: "Der Befehl war ganz klar", en: "The order was quite clear" }, accept: ["order", "the order", "command", "instruction"], hint: "An order given by someone with authority — a request is die Bitte, a rule die Vorschrift (u61). In computing it is also a command." },
        { id: "de-u117l3-verhaften", type: "vocab", front: "verhaften", reading: "verhaften", meaning: "to arrest", example: { jp: "Die Polizei konnte den Mann am Bahnhof verhaften, obwohl er seit Wochen nicht zu finden war.", en: "The police were able to arrest the man at the station, although he had not been findable for weeks." }, drill: { jp: "Die Polizei will ihn sofort verhaften", en: "The police want to arrest him immediately" }, accept: ["to arrest", "arrest", "to detain", "detain", "to take into custody"], hint: "die Haft is custody, so verhaften is literally to take into custody. die Verhaftung is the arrest." },
        { id: "de-u117l3-diewaffe", type: "vocab", front: "die Waffe", reading: "diewaffe", meaning: "the weapon", example: { jp: "Die Waffe war auf dem Tisch, und trotzdem hat sie zuerst niemand bemerkt.", en: "The weapon was on the table, and yet at first nobody noticed it." }, drill: { jp: "Die Waffe liegt auf dem Tisch", en: "The weapon is lying on the table" }, accept: ["weapon", "the weapon", "gun", "arm"], hint: "Kept although the subtitle list over-represents this register, because it is equally news vocabulary — a B2 learner reading a German paper meets Waffe constantly." },
        { id: "de-u117l3-dersoldat", type: "vocab", front: "der Soldat", reading: "dersoldat", meaning: "the soldier", example: { jp: "Der Soldat durfte nicht sagen, wohin die Gruppe am Morgen fahren sollte.", en: "The soldier was not allowed to say where the group was to travel in the morning." }, drill: { jp: "Der Soldat steht vor dem Haus", en: "The soldier stands in front of the house" }, accept: ["soldier", "the soldier", "serviceman"], hint: "A weak masculine noun: it takes -en in every case but the nominative singular — den Soldaten, dem Soldaten. der Mensch (u11) declines the same way." },
        { id: "de-u117l3-dasfeuer", type: "vocab", front: "das Feuer", reading: "dasfeuer", meaning: "the fire", example: { jp: "Das Feuer war schnell wieder aus, aber der Rauch blieb noch lange im Haus.", en: "The fire was quickly out again, but the smoke stayed in the house for a long time." }, drill: { jp: "Das Feuer brennt die ganze Nacht", en: "The fire burns all night" }, accept: ["fire", "the fire", "blaze"], hint: "The thing itself and the order to shoot. Haben Sie Feuer? is how you ask a stranger for a light." },
      ],
    },
    {
      id: "de-u117l4",
      unit: 117,
      lesson: 4,
      title: "Person, Partner, Team",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name people by their role rather than their name — a person, a partner, a team, a husband, a farmer and a bloke.",
      items: [
        { id: "de-u117l4-dieperson", type: "vocab", front: "die Person", reading: "dieperson", meaning: "the person", example: { jp: "Für diese Stelle suchen wir eine Person, die auch unter Druck ruhig bleiben kann.", en: "For this position we are looking for a person who can stay calm under pressure as well." }, drill: { jp: "Die Person am Fenster wartet schon", en: "The person at the window is already waiting" }, accept: ["person", "the person", "individual"], hint: "Always feminine — die Person, even of a man. In a restaurant, für vier Personen is 'for four people'." },
        { id: "de-u117l4-derpartner", type: "vocab", front: "der Partner", reading: "derpartner", meaning: "the partner", example: { jp: "Ohne einen starken Partner im Ausland wäre der Plan schon im ersten Jahr zu teuer geworden.", en: "Without a strong partner abroad the plan would have become too expensive in the first year." }, drill: { jp: "Der Partner kommt aus dem Ausland", en: "The partner comes from abroad" }, accept: ["partner", "the partner", "associate", "counterpart"], hint: "Covers business and private life alike — die Partnerin is the feminine form, and in a relationship it is the neutral word where Freund would imply less." },
        { id: "de-u117l4-dasteam", type: "vocab", front: "das Team", reading: "dasteam", meaning: "the team (work group)", example: { jp: "Das Team arbeitet seit Monaten an derselben Sache, und trotzdem ist das Ergebnis noch nicht klar.", en: "The team has been working on the same thing for months, and yet the result is still not clear." }, drill: { jp: "Das Team arbeitet jeden Montag zusammen", en: "The team works together every Monday" }, accept: ["team", "the team", "crew", "squad"], hint: "Borrowed whole from English and pronounced the same, but neuter and capitalised. die Mannschaft is the older word, still normal in sport." },
        { id: "de-u117l4-derehemann", type: "vocab", front: "der Ehemann", reading: "derehemann", meaning: "the husband", example: { jp: "Ihr Ehemann arbeitet in einer anderen Stadt und kommt deshalb nur am Wochenende nach Hause.", en: "Her husband works in another city and so only comes home at the weekend." }, drill: { jp: "Der Ehemann wartet vor der Tür", en: "The husband waits in front of the door" }, accept: ["husband", "the husband", "spouse"], hint: "die Ehe is the marriage, so Ehemann and Ehefrau are the formal pair. In speech people usually just say mein Mann and meine Frau." },
        { id: "de-u117l4-derbauer", type: "vocab", front: "der Bauer", reading: "derbauer", meaning: "the farmer", example: { jp: "Der Bauer verkauft sein Obst direkt auf dem Markt, weil er so mehr verdient.", en: "The farmer sells his fruit directly at the market, because that way he earns more." }, drill: { jp: "Der Bauer steht früh auf", en: "The farmer gets up early" }, accept: ["farmer", "the farmer", "peasant"], hint: "Weak masculine like Soldat above: dem Bauern. Also the pawn in chess, and — as das Bauer, neuter — a birdcage." },
        { id: "de-u117l4-dertyp", type: "vocab", front: "der Typ", reading: "dertyp", meaning: "the bloke", example: { jp: "Der Typ an der Tür wollte seinen Namen nicht sagen.", en: "The bloke at the door did not want to say his name." }, drill: { jp: "Der Typ kam gestern noch einmal", en: "The bloke came again yesterday" }, accept: ["bloke", "the bloke", "guy", "the guy", "chap", "type", "sort"], hint: "In speech it is a casual and slightly dismissive word for a man. In writing it is the neutral sense: type, kind, model." },
      ],
    },
  ],
};
