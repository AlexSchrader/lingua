// NO Unit 47 — Mengde og mål ("Quantity and measurement") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 8 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 u5 taught én to ti and A1 u10 (block 2) taught mange, mye, nok
// and litt. That is enough to count and to say "a lot". It is not enough to buy
// half a kilo of anything, read a recipe, or say how much of a thing is left —
// which is this unit: the words for a PART, the units you measure in, the
// things you put a quantity into, and the verbs for handling amounts.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// FIRST FEMININE OF THE UNIT is `ei vekt` (l2) and it carries the en-/ei-
// recognition note §1 requires. (`mengde` was corrected en-masculine per the
// content-auditor — en mengde is the dominant Bokmål form — so it is no longer
// the unit's first feminine.)
//
// ⚠ GENDER, AND A RULE THIS BLOCK GOT WRONG BEFORE IT GOT IT RIGHT. `en helhet`
// is masculine because -het nouns have NO feminine option in Bokmål (there is no
// *helheta), and the same goes for -else. This block originally marked several
// -het and -else nouns `ei`, which is not a stylistic choice but an error: under
// §1 the ei-marking is a PROMISE that the definite ends in -a, and for these
// words it does not. Corrected here and in u44. The -ing/-ning class is
// different — feminine IS permitted there (løsninga is fine) — and the band
// marks that whole class `ei`, which is what A1's `ei melding` already did.
// (An earlier version of this header claimed "both sibling blocks standardised
// on `en`". They had not: blocks 1 and 2 wrote `ei` on eleven -ing cards and
// `en` on ten, and the band was simply inconsistent. §1 is binding and §1 says
// `ei`, so all of them are `ei` now.)
//
// ø IS WRITTEN o IN `reading` (§3): `å tømme` → "atomme", `å øke` → "aoke".
//
// ⚠ RESERVE LIST — screened against A1's 480, this block's 240, both sibling A2
// branches (by headword, not just exact string), and the fold screen. Every
// collision resolves against this block; swap, don't rebuild.
//   l1 deler:     en halvdel · et overskudd · ei klype
//   l2 mål:       et tonn · en desiliter · ei tomme
//   l3 beholdere: et fat · ei bøtte · et rør
//   l4 å håndtere: å dele? NO — same stem as `en del` here · reserves: å veie? NO —
//                  same stem as `ei vekt` here · reserves: å romme · å strekke
//
// SCOPE: examples and drills use A1's 480 plus u41–u46 plus this unit's earlier
// cards. Nothing leans on u21–u40, and nothing uses `som`, `om`, `hele`, `hver`,
// `ute`, `ved`, `der`, `for`, `mot`, `gjennom`, `mens`, `tid`, `mat` or `folk`.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT47 = {
  id: "no-u47",
  lang: "no",
  title: "Mengde og mål",
  order: 47,
  stage: "a2",
  lessons: [
    // Lesson 1: parts and wholes.
    {
      id: "no-u47l1",
      unit: 47,
      lesson: 1,
      title: "Parts and amounts",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about how much of a thing there is — mengde, del, rest, stykke, helhet, antall — and say what is left.",
      items: [
        { id: "no-u47l1-enmengde", type: "vocab", front: "en mengde", reading: "enmengde", meaning: "quantity", example: { jp: "En mengde med sukker er nok, men vi trenger mer salt.", en: "A quantity of sugar is enough, but we need more salt." }, drill: { jp: "Det er en mengde sukker i kaka", en: "There is a quantity of sugar in the cake" }, accept: ["an amount", "a lot", "a crowd"], hint: "MENG-de. Masculine: definite mengden, plural mengder. En mengde folk is a crowd — the word slides from amount to throng." },
        { id: "no-u47l1-endel", type: "vocab", front: "en del", reading: "endel", meaning: "part", example: { jp: "En del av et brød er nok hvis du ikke er veldig sulten.", en: "A part of a loaf is enough if you are not very hungry." }, drill: { jp: "Vi spiser en del av kaka", en: "We eat a part of the cake" }, accept: ["a portion", "a share", "a section"], hint: "DEHL. Masculine: definite delen, plural deler. En del av is a part of. On its own, en del also means \"quite a few\": det var en del folk der." },
        { id: "no-u47l1-enrest", type: "vocab", front: "en rest", reading: "enrest", meaning: "rest", example: { jp: "Det står en rest av middagen i et skap, og vi spiser den i kveld.", en: "There is some dinner left over in a cupboard, and we are eating it tonight." }, drill: { jp: "Det er en rest igjen", en: "There is a little left over" }, accept: ["a remainder", "leftovers", "a remnant"], hint: "REST. Masculine: definite resten, plural rester. Rester in the plural is specifically leftovers, and restemiddag — a dinner made of them — is a word Norwegian has and English needs." },
        { id: "no-u47l1-etstykke", type: "vocab", front: "et stykke", reading: "etstykke", meaning: "piece", example: { jp: "Vi skjærer et stykke av osten fordi barna er sultne.", en: "We cut a piece of the cheese because the children are hungry." }, drill: { jp: "Jeg spiser et stykke av kaka", en: "I eat a piece of the cake" }, accept: ["a bit", "a slice", "a play"], hint: "STUEK-ke. Neuter: definite stykket, plural stykker. A piece of anything — and et teaterstykke is a play, which is why et stykke on its own can mean a play in the right company." },
        { id: "no-u47l1-enhelhet", type: "vocab", front: "en helhet", reading: "enhelhet", meaning: "a whole (the entirety)", example: { jp: "En helhet er mer enn en del, og alle vet det.", en: "A whole is more than a part, and everyone knows that." }, drill: { jp: "Vi ser en helhet i et bilde", en: "We see a whole in a picture" }, accept: ["whole", "entirety", "totality"], hint: "HEHL-het. Masculine: definite helheten. ⚠ Nouns in -het are masculine in Bokmål with NO feminine option — there is no helheta — which is why this one is not marked ei even though so many other -e nouns in this block are." },
        { id: "no-u47l1-etantall", type: "vocab", front: "et antall", reading: "etantall", meaning: "number (a count of things)", example: { jp: "Et antall barn kommer, men vi vet ikke hvor mange.", en: "A number of children are coming, but we do not know how many." }, drill: { jp: "Et antall gjester kommer i kveld", en: "A number of guests are coming tonight" }, accept: ["a number", "quantity", "count"], hint: "AN-tall. Neuter: definite antallet, and the plural is antall, unchanged. Et tall from A1 unit 5 is the numeral itself; et antall is how many of something there are." },
      ],
    },
    // Lesson 2: the units you measure in.
    {
      id: "no-u47l2",
      unit: 47,
      lesson: 2,
      title: "Measures and weight",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Measure things — meter, kilo, liter, vekt, gram, mil — and say how far, how heavy and how much.",
      items: [
        { id: "no-u47l2-enmeter", type: "vocab", front: "en meter", reading: "enmeter", meaning: "metre", example: { jp: "En meter er ikke langt, men ti meter er det.", en: "A metre is not far, but ten metres is." }, drill: { jp: "Vi trenger en meter stoff", en: "We need a metre of fabric" }, accept: ["a meter"], hint: "MEH-ter. Masculine: definite meteren, and the plural is meter, unchanged after a number: ti meter, never \"ti metere\". Units of measurement behave that way across the board." },
        { id: "no-u47l2-enkilo", type: "vocab", front: "en kilo", reading: "enkilo", meaning: "kilo", example: { jp: "En kilo poteter er nok hvis vi er fire.", en: "A kilo of potatoes is enough if there are four of us." }, drill: { jp: "Vi kjøper en kilo poteter", en: "We buy a kilo of potatoes" }, accept: ["a kilogram", "a kilo"], hint: "KEE-lo. Masculine: definite kiloen, plural kilo after a number. Note en kilo poteter with no preposition — Norwegian puts the measure straight in front of the thing, where English needs \"of\"." },
        { id: "no-u47l2-enliter", type: "vocab", front: "en liter", reading: "enliter", meaning: "litre", example: { jp: "En liter melk koster ikke mye, og vi kjøper to.", en: "A litre of milk does not cost much, and we buy two." }, drill: { jp: "Vi trenger en liter vann", en: "We need a litre of water" }, accept: ["a liter"], hint: "LEE-ter. Masculine: definite literen, plural liter after a number. It looks like liten, small, from A1 unit 10 but has nothing to do with it — a screen that compares word stems flags the pair, and it is a false alarm worth knowing about." },
        { id: "no-u47l2-eivekt", type: "vocab", front: "ei vekt", reading: "eivekt", meaning: "weight", example: { jp: "Ei vekt sier hvor tung en koffert er, og denne er tung.", en: "A scale says how heavy a suitcase is, and this one is heavy." }, drill: { jp: "Det står ei vekt på et bord", en: "There is a scale standing on a table" }, accept: ["a scale", "a set of scales", "heaviness"], hint: "VEKT. Feminine: definite vekta, plural vekter. Bokmål lets many feminines take en too, but this course marks them ei — ei is what tells you the definite ends in -a. Both the weight a thing has and the machine that tells you — Norwegian uses one word where English needs two." },
        { id: "no-u47l2-etgram", type: "vocab", front: "et gram", reading: "etgram", meaning: "gram", example: { jp: "Et gram er lite, men ti gram er ikke nok.", en: "A gram is little, but ten grams is not enough." }, drill: { jp: "Vi trenger et gram sukker", en: "We need a gram of sugar" }, accept: ["a gramme"], hint: "GRAMM, hard g. Neuter: definite grammet, and the plural is gram, unchanged after a number. A recipe in Norway is written in gram and desiliter, never in cups." },
        { id: "no-u47l2-eimil", type: "vocab", front: "ei mil", reading: "eimil", meaning: "ten kilometres", example: { jp: "Ei mil er lang, og vi kjører ofte ei mil til byen.", en: "A mil is long, and we often drive ten kilometres to the town." }, drill: { jp: "Vi kjører ei mil til byen", en: "We drive ten kilometres to the town" }, accept: ["a Scandinavian mile", "a mil", "ten km"], hint: "MEEL. Feminine: definite mila, plural mil after a number. ⚠ A false friend and a dangerous one: ei mil is TEN kilometres, not the English mile. A Norwegian saying \"det er to mil\" means twenty kilometres." },
      ],
    },
    // Lesson 3: what you put a quantity into.
    {
      id: "no-u47l3",
      unit: 47,
      lesson: 3,
      title: "Containers",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what things come in — flaske, boks, pose, beger, kasse, lokk — and say what is in each.",
      items: [
        { id: "no-u47l3-eiflaske", type: "vocab", front: "ei flaske", reading: "eiflaske", meaning: "bottle", example: { jp: "Ei flaske av plast er lett, men ei flaske av glass er tung.", en: "A bottle of plastic is light, but a bottle of glass is heavy." }, drill: { jp: "Det står ei flaske på bordet", en: "There is a bottle standing on the table" }, accept: ["a flask"], hint: "FLAS-ke. Feminine: definite flaska, plural flasker. Norway charges a pant, a deposit, on every one — you take flasker back to the butikk and get coins out of a machine." },
        { id: "no-u47l3-enboks", type: "vocab", front: "en boks", reading: "enboks", meaning: "tin", example: { jp: "En boks med fisk er billig, og vi kjøper en del.", en: "A tin of fish is cheap, and we buy quite a few." }, drill: { jp: "Vi kjøper en boks med fisk", en: "We buy a tin of fish" }, accept: ["a can", "a box", "a tin"], hint: "BOKS. Masculine: definite boksen, plural bokser. A tin, a can, or a small box. Note en boks MED fisk — with a container, Norwegian uses med where English uses \"of\"." },
        { id: "no-u47l3-enpose", type: "vocab", front: "en pose", reading: "enpose", meaning: "bag (plastic or paper)", example: { jp: "Vi bruker en pose når vi går i butikken, fordi den er lett å bruke.", en: "We use a bag when we go to the shop, because it is easy to use." }, drill: { jp: "Det er poteter i en pose", en: "There are potatoes in a bag" }, accept: ["a bag", "sack", "carrier bag"], hint: "POO-se. Masculine: definite posen, plural poser. A paper or plastic bag from a shop, where en veske from A1 unit 15 is the bag you carry every day." },
        { id: "no-u47l3-etbeger", type: "vocab", front: "et beger", reading: "etbeger", meaning: "beaker", example: { jp: "Det står et beger med melk på et bord, og barnet vil ha det.", en: "There is a cup of milk on a table, and the child wants it." }, drill: { jp: "Det står et beger på hylla", en: "There is a cup standing on the shelf" }, accept: ["a beaker", "cup", "a cup", "tumbler"], hint: "BEH-ger, hard g. Neuter: definite begeret, plural begre. A disposable or measuring cup — a yoghurt tub is et beger — where en kopp from A1 unit 6 is the one with a handle you drink coffee from." },
        { id: "no-u47l3-eikasse", type: "vocab", front: "ei kasse", reading: "eikasse", meaning: "crate", example: { jp: "Ei kasse med flasker er tung, og derfor tar vi den sammen.", en: "A crate of bottles is heavy, and that is why we take it together." }, drill: { jp: "Det står ei kasse på gulvet", en: "There is a crate standing on the floor" }, accept: ["a box", "a case", "a till"], hint: "KAS-se. Feminine: definite kassa, plural kasser. A wooden or plastic crate — and also the till in a shop, which is why kassa is where you pay." },
        { id: "no-u47l3-etlokk", type: "vocab", front: "et lokk", reading: "etlokk", meaning: "lid", example: { jp: "Et lokk på ei gryte er viktig når vi koker poteter.", en: "A lid on a pot is important when we boil potatoes." }, drill: { jp: "Det ligger et lokk på gryta", en: "There is a lid lying on the pot" }, accept: ["a cover", "a cap", "a top"], hint: "LOKK. Neuter: definite lokket, plural lokk, unchanged. On a pot, a jar or a box. Å legge lokk på noe is to put a lid on something, in both the literal and the figurative sense." },
      ],
    },
    // Lesson 4: handling amounts. Four å-verbs, four å-frames.
    {
      id: "no-u47l4",
      unit: 47,
      lesson: 4,
      title: "Handling amounts",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle amounts — collect, count, fill, empty, increase, decrease.",
      items: [
        { id: "no-u47l4-asamle", type: "vocab", front: "å samle", reading: "asamle", meaning: "to collect", example: { jp: "Barna samler flasker fordi de vil ha penger.", en: "The children collect bottles because they want money." }, drill: { jp: "Det er hyggelig å samle flasker", en: "It is nice to collect bottles" }, accept: ["collect", "to gather", "gather", "to assemble"], hint: "SAM-le, present samler. To collect things, and å samle seg is to gather as a group. Ei samling is a collection." },
        { id: "no-u47l4-atelle", type: "vocab", front: "å telle", reading: "atelle", meaning: "to count", example: { jp: "Vi teller et antall gjester før vi lager middag.", en: "We count a number of guests before we make dinner." }, drill: { jp: "Det er lett å telle til ti", en: "It is easy to count to ten" }, accept: ["count", "to number", "to tally"], hint: "TEL-le, present teller. Et tall from A1 unit 5 is what you count in, and å fortelle from A1 unit 17 is built on this verb — to tell a story is to count it out." },
        { id: "no-u47l4-afylle", type: "vocab", front: "å fylle", reading: "afylle", meaning: "to fill", example: { jp: "Jeg fyller ei flaske med vann før vi går en tur.", en: "I fill a bottle with water before we go for a walk." }, drill: { jp: "Det er lett å fylle ei kasse", en: "It is easy to fill a crate" }, accept: ["fill", "to fill up", "fill up"], hint: "FUEL-le, present fyller. Å fylle noe MED noe. Also of a birthday: han fyller ti år, he turns ten — Norwegian fills years rather than becoming them." },
        { id: "no-u47l4-atomme", type: "vocab", front: "å tømme", reading: "atomme", meaning: "to empty", example: { jp: "Vi tømmer ei kasse når vi flytter til en ny leilighet.", en: "We empty a crate when we move to a new flat." }, drill: { jp: "Det er tungt å tømme ei kasse", en: "It is hard to empty a crate" }, accept: ["empty", "to empty out", "to pour out"], hint: "TUM-me, present tømmer, hand-folded to atomme. From tom, empty — the adjective the verb is built on. The exact opposite of å fylle, and worth learning as a pair with it." },
        { id: "no-u47l4-aoke", type: "vocab", front: "å øke", reading: "aoke", meaning: "to increase", example: { jp: "Et antall gjester øker hvis været blir fint.", en: "A number of guests increases if the weather gets nice." }, drill: { jp: "Det er lett å øke et antall", en: "It is easy to increase a number" }, accept: ["increase", "to raise", "raise", "to grow"], hint: "UR-ke, present øker, hand-folded to aoke. Works both ways round, like å henge and å smelte: prisen øker, the price rises, and vi øker prisen, we raise it." },
        { id: "no-u47l4-aminke", type: "vocab", front: "å minke", reading: "aminke", meaning: "to decrease", example: { jp: "En rest av suppa minker fordi alle er sultne.", en: "A rest of the soup decreases because everyone is hungry." }, drill: { jp: "Det er lett å minke et antall", en: "It is easy to decrease a number" }, accept: ["decrease", "to diminish", "diminish", "to dwindle"], hint: "MIN-ke, present minker. Built on mindre, less. The opposite of å øke, and it is the intransitive one: things minker by themselves, and you å minske them on purpose." },
      ],
    },
  ],
};
