// HI Unit 75 — पर्यावरण और जलवायु ("The environment and the climate") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8, then
// unit74.js §B1–§B7 (this block's own).
//
// 🚨 RETHEMED SLOT (scaffold: "Environment and place") — lint's SCAFFOLD_TITLES
// hard-errors on that string. THE "PLACE" HALF WAS DROPPED, on measurement:
// A1 u14 Town and places, u21 जानवर और कुदरत, A2 u50 इलाका और इतिहास and u54
// (water) already card जगह, इलाका, मैदान, घाटी, झील, नहर, पहाड़, जंगल, नदी,
// समुद्र, ज़मीन, किनारा, रेत, मिट्टी and बाढ़/भूकंप/तूफ़ान. Place is full. What the
// corpus has NO word for is the environment AS A SUBJECT — pollution, climate,
// conservation, a species — which is the B1 half of the slot and the half nobody
// else owns (block 1's u69 "change over time" was checked and takes no nature
// vocabulary; block 3's coverage slots were allocated away from it).
//
// ⚠️ SIX FRONTS WANTED AND REFUSED, and FOUR of the six are gloss refusals, not
// front refusals — `check-front.mjs` reports every one of them FREE:
//   • 🚨 **गुफ़ा ("a cave") — REFUSED, AND IT WAS AUTHORED AND DELETED.** This unit
//     carded it and `check-front.mjs` reported it FREE, because **the corpus spells
//     it गुफा WITHOUT THE NUKTA, at u54l2** — two strings, ONE WORD. The
//     बर्तन/बिलकुल trap that unit51.js records for रिवाज़/रिवाज, firing again.
//     WHAT CAUGHT IT: `npm run lint:curriculum`'s GLOSS-collision check, because both
//     cards were glossed "a cave" — NOT the front probe, which cannot see a spelling
//     variant. A nukta-folding front probe finds the whole class: 1,746 folded fronts,
//     exactly TWO vocab spelling-variant pairs in the language, and both of them were
//     this block's (the other was अर्जी, at u83). दर्रा took the slot.
//   • कीट — the exact synonym of कीड़ा (u55l?), which is glossed "an insect" and
//     accepts "a bug". Two cards, one meaning. DROPPED; बंजर took the slot.
//   • वन — would gloss "a forest", which is जंगल (u21). DROPPED.
//   • वर्षा — would gloss "rainfall", which is बारिश's accept (u16). DROPPED.
//   • वायु — would gloss "air", which is हवा's accept (u16). DROPPED.
//   • TAKEN outright: तापमान (u45l?), ईंधन (u43), धुआँ (u54), कचरा (u15),
//     भूकंप/बाढ़/झील/नहर/घाटी (u54), तूफ़ान (u21), मैदान (u14), बीज (u21),
//     लहर (u33), घटना (u44). **Thirteen of the obvious environment fronts.**
//   • NAMED FOR A LATER BLOCK, free and unspent: क्षेत्र, सीमा, and दलदल's
//     neighbour कीचड़.
//     ⚠️ THIS LINE USED TO NAME बाँध, सिंचाई, चौड़ाई AND भूस्खलन TOO, and three of
//     the four claims were wrong or have stopped being true. **बाँध IS REFUSED** —
//     बाँधना is carded at u26, so the bare बाँध is its stem AND its imperative, the
//     कड़ी/लड़ी/मानो trap of unit61.js §B1's homograph note; `front-taken.mjs`
//     passes it because the strings differ. **चौड़ाई was taken by u95** आकार और बनावट
//     after this header was written. **सिंचाई and भूस्खलन are now carded HERE**,
//     in l2, by the B1 cross-block dedupe (2026-10-06).
//
// THREE GLOSSES ARE DELIBERATELY LONGER THAN THEY NEED TO BE, because the short
// version collides through `normalizeMeaning` (unit1.js §9). Do not "tidy" them:
//   जलवायु  "the long-run climate of a place"  — मौसम (u16) ACCEPTS "a climate".
//   तट      "the coast"                        — किनारा (u54) IS "a shore".
//   चट्टान   "a cliff face"                      — पत्थर (u21) ACCEPTS "a rock".
//
// ⚠️ THREE CARDS LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06), because
// block 1 and block 3 had carded the same fronts and own the earlier/allocated slot:
//   आपदा → kept at u70 दिक्कत और हल (block 1, earlier slot). Still usable in this
//          unit's sentences, and l2's विनाश and प्राकृतिक cards still lean on it.
//   ऊर्जा → kept at u87 विज्ञान और शोध (block 3, centrally allocated theme).
//   जीव   → kept at u87 विज्ञान और शोध. **BOTH are now taught AFTER this unit, so
//          neither may appear in a u75 sentence again.** सिंचाई and अंकुर replaced them.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: जलवायु, सिंचाई, हरियाली, चट्टान, वनस्पति, प्रजाति.
//   **जलवायु is FEMININE despite the -ु** (the साधु class of §4 in reverse) and
//   **चट्टान is CONSONANT-FINAL** — चट्टान ऊँची है, not ऊँचा. Those two are the
//   ones in the unit a learner cannot predict.
//   MASCULINE: पर्यावरण, प्रदूषण, संरक्षण, विनाश, भूस्खलन, रेगिस्तान, तट,
//   ज्वालामुखी, दर्रा, दलदल, अंकुर, घोंसला. **तट, दलदल, भूस्खलन and अंकुर are
//   consonant-final masculine and their plural is the bare form** — दो तट, तीन अंकुर.
//   ADJECTIVES: **नष्ट, प्राकृतिक, उपजाऊ and बंजर are INVARIANT** (unit53's rule);
//   **ज़हरीला AGREES**, because it ends in -आ: ज़हरीला धुआँ, ज़हरीली हवा.
//   फैलना is a VERB, headworded -ना per §5, and it is INTRANSITIVE — प्रदूषण फैलता
//   है, never किसी ने प्रदूषण फैलाया (that is फैलाना, which this unit does not card).
//
// RETROFLEX/DENTAL (§1b): one pair earns a note and NEITHER needs the doubling
// hatch. चट्टान chattaan is RETROFLEX ट, already geminate, and there is no dental
// चत्तान in the corpus. तट tat has a DENTAL त and a RETROFLEX ट in one two-letter
// word and the reading merges both to t — checked against all 1,464 readings, tat
// is free and no तत/ताट/थट exists. नष्ट nasht is the ष्ट conjunct; प्रदूषण,
// संरक्षण and पर्यावरण all end in ण, which merges to n per §1(b).
// MARKS: प्राकृतिक carries ृ (ऋ's mātrā), read **ri** — the third sighting in the
// language after कृपया (u7l2) and दृश्य (u74l1), and its hint says so.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT75 = {
  id: "hi-u75",
  lang: "hi",
  title: "पर्यावरण और जलवायु",
  order: 75,
  stage: "b1",
  lessons: [
    {
      id: "hi-u75l1",
      unit: 75,
      lesson: 1,
      title: "Air and water spoiling",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about the environment, pollution and the climate — say that something is poisonous, that it is spreading, and that something has been destroyed.",
      items: [
        { id: "hi-u75l1-paryaavaran", type: "vocab", front: "पर्यावरण", reading: "paryaavaran", meaning: "the environment", accept: ["the natural surroundings", "the world around us as a subject"], example: { jp: "स्कूल में बच्चे पर्यावरण के बारे में पढ़ते हैं।", en: "At school the children read about the environment." }, drill: { jp: "बच्चे पर्यावरण के बारे में पढ़ते हैं", en: "The children read about the environment" }, hint: "PAR-YAA-VA-RAN, masculine. The र् is र with a halant, drawn as the hook over the next letter. The final ण is RETROFLEX and merges to n (§1b). ⚠️ Not कुदरत, nature (unit 54) — कुदरत is the world itself, पर्यावरण is the world treated as something to look after." },
        { id: "hi-u75l1-praduushan", type: "vocab", front: "प्रदूषण", reading: "praduushan", meaning: "pollution", accept: ["dirt put into air or water", "contamination"], example: { jp: "शहर में प्रदूषण इतना है कि सुबह सूरज नहीं दिखता।", en: "There is so much pollution in the city that the sun is not visible in the morning." }, drill: { jp: "शहर में प्रदूषण बहुत ज़्यादा है", en: "There is a great deal of pollution in the city" }, hint: "PRA-DUU-SHAN, masculine, long uu. ष is the second sh (§1a) and ण the retroflex n: both merge in the reading, and the hint is where the letters are taught. Not गंदा, dirty (unit 14), which is what you can see on a thing." },
        { id: "hi-u75l1-jalvaayu", type: "vocab", front: "जलवायु", reading: "jalvaayu", meaning: "the long-run climate of a place", accept: ["the weather a region has year after year", "a region's climatic pattern"], example: { jp: "पहाड़ों की जलवायु मैदान से ठंडी होती है।", en: "The climate of the mountains is colder than the plain." }, drill: { jp: "पहाड़ों की जलवायु ठंडी होती है", en: "The mountains' climate is cold" }, hint: "JAL-VAA-YU — ⚠️ FEMININE despite the -ु: जलवायु ठंडी है, not ठंडा. जल (water) plus वायु (air). ⚠️ Its gloss is long on purpose: मौसम (unit 16) ACCEPTS 'a climate', so this card cannot use that word — मौसम is today, जलवायु is every year." },
        { id: "hi-u75l1-zahriilaa", type: "vocab", front: "ज़हरीला", reading: "zahriilaa", meaning: "poisonous", accept: ["that can poison you", "toxic"], example: { jp: "कारखाने का ज़हरीला पानी नदी में जाता है।", en: "The factory's poisonous water goes into the river." }, drill: { jp: "कारखाने का ज़हरीला पानी नदी में जाता है", en: "The factory's poisonous water goes into the river" }, hint: "ZAH-RII-LAA, with ज़ — a z (unit 4). ⚠️ IT AGREES, because it ends in -आ: ज़हरीला पानी, ज़हरीली हवा. Built on ज़हर, poison, which this course teaches nowhere — so the adjective carries the idea on its own." },
        { id: "hi-u75l1-phailnaa", type: "vocab", front: "फैलना", reading: "phailnaa", meaning: "to spread", accept: ["to go on spreading", "to get all over a place"], example: { jp: "गंदे पानी से बीमारी पूरे गाँव में फैलती है।", en: "Illness spreads through the whole village from dirty water." }, drill: { jp: "गाँव में बीमारी फैलना बुरी बात है", en: "Illness spreading in the village is a bad thing" }, hint: "PHAIL-NAA — ph is one puff of air, not f, and the ai is ऐ's open vowel (unit 2). ⚠️ INTRANSITIVE: प्रदूषण फैलता है, and nobody is the doer. The transitive twin फैलाना (to spread something) is not carded — it belongs with the other -आना causatives." },
        { id: "hi-u75l1-nasht", type: "vocab", front: "नष्ट", reading: "nasht", meaning: "destroyed", accept: ["wiped out", "ruined past saving"], example: { jp: "आग में पूरा जंगल नष्ट हो गया।", en: "The whole forest was destroyed in the fire." }, drill: { jp: "आग में पूरा जंगल नष्ट हो गया", en: "The whole forest was destroyed in the fire" }, hint: "NASHT — ⚠️ INVARIANT (unit 53's rule): नष्ट जंगल, नष्ट फ़सल. The ष्ट is ष and ट stacked, said in one breath. It lives in one frame: नष्ट होना, to be destroyed, and नष्ट करना, to destroy." },
      ],
    },
    {
      id: "hi-u75l2",
      unit: 75,
      lesson: 2,
      title: "Saving it, and losing it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about conservation and destruction, name a landslide, say that something is natural, and talk about irrigation and greenery.",
      items: [
        { id: "hi-u75l2-sanrakshan", type: "vocab", front: "संरक्षण", reading: "sanrakshan", meaning: "conservation", accept: ["protecting something for the future", "keeping a thing safe from harm"], example: { jp: "जंगल के संरक्षण के लिए नया नियम बना है।", en: "A new rule has been made for the conservation of the forest." }, drill: { jp: "जंगल के संरक्षण के लिए नियम बना है", en: "A rule has been made for the forest's conservation" }, hint: "SAN-RAK-SHAN, masculine. The क्ष conjunct is one of unit 6's three, said ksh in one breath. Its ं comes before र, not a stop, so plain n (§1). Not बचाव, a defence (unit 89) — संरक्षण is what a government does about a forest." },
        { id: "hi-u75l2-vinaash", type: "vocab", front: "विनाश", reading: "vinaash", meaning: "destruction", accept: ["the wiping out of something", "ruin on a large scale"], example: { jp: "एक आपदा पूरे गाँव का विनाश कर सकती है।", en: "One disaster can bring about the destruction of a whole village." }, drill: { jp: "आपदा पूरे गाँव का विनाश करती है", en: "A disaster destroys a whole village" }, hint: "VI-NAASH, masculine. ⚠️ The noun beside नष्ट (l1), which is the adjective — same root, two words, and this is the pair that teaches the shape. Heavier than नुकसान, a loss (unit 37): a नुकसान can be repaid, a विनाश cannot." },
        { id: "hi-u75l2-bhuuskhalan", type: "vocab", front: "भूस्खलन", reading: "bhuuskhalan", meaning: "a landslide", accept: ["a hillside giving way", "earth sliding down a slope"], example: { jp: "भारी बारिश के बाद पहाड़ पर भूस्खलन हुआ और रास्ता बंद हो गया।", en: "After the heavy rain there was a landslide on the mountain and the road closed." }, drill: { jp: "भारी बारिश के बाद भूस्खलन हुआ", en: "There was a landslide after the heavy rain" }, hint: "BHUUS-KHA-LAN, masculine, consonant-final, so the plural is the bare form: दो भूस्खलन. भू (the earth) plus स्खलन (a slipping) — the स्ख is स and ख stacked, said in one breath. ⚠️ Narrower than आपदा, a natural disaster (unit 70): an आपदा is the whole calamity, a भूस्खलन is the one hillside that came down." },
        { id: "hi-u75l2-sinchaaii", type: "vocab", front: "सिंचाई", reading: "sinchaaii", meaning: "irrigation", accept: ["the watering of fields", "bringing water to a crop"], example: { jp: "नहर के पानी से खेतों की सिंचाई होती है।", en: "The fields are irrigated with the canal's water." }, drill: { jp: "नहर के पानी से सिंचाई होती है", en: "Irrigation is done with the canal's water" }, hint: "SIN-CHAA-II — ⚠️ FEMININE, like every -आई noun. Its ं comes before च, a stop, so §1's homorganic rule applies and it is still written n. Built on सींचना, to water a field, which this course does not card — the noun carries the idea on its own." },
        { id: "hi-u75l2-praakritik", type: "vocab", front: "प्राकृतिक", reading: "praakritik", meaning: "natural", accept: ["belonging to nature", "not made by people"], example: { jp: "दर्रा एक प्राकृतिक जगह है और कोई उसे नहीं बनाता।", en: "A mountain pass is a natural place and nobody builds it." }, drill: { jp: "दर्रा एक प्राकृतिक जगह है", en: "A mountain pass is a natural place" }, hint: "PRAA-KRI-TIK — ⚠️ INVARIANT: प्राकृतिक आपदा, प्राकृतिक जंगल. ⚠️ It carries ृ, ऋ's MĀTRĀ, read **ri** — your third sighting after कृपया (unit 7) and दृश्य (unit 74). The noun is प्रकृति, which this course does not card: कुदरत (unit 54) holds that slot." },
        { id: "hi-u75l2-hariyaalii", type: "vocab", front: "हरियाली", reading: "hariyaalii", meaning: "greenery", accept: ["green growing cover", "how green a place is"], example: { jp: "बारिश के बाद पहाड़ों पर हरियाली आ जाती है।", en: "After the rain greenery comes to the mountains." }, drill: { jp: "बारिश के बाद पहाड़ों पर हरियाली आती है", en: "Greenery comes to the mountains after the rain" }, hint: "HA-RI-YAA-LII — ⚠️ FEMININE. Built on हरा, green (unit 16), with the -आली suffix. `scope-hi.mjs` generates no such suffix, so it needed its own card. Of a whole landscape, never of one leaf." },
      ],
    },
    {
      id: "hi-u75l3",
      unit: 75,
      lesson: 3,
      title: "The shapes the land takes",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name a desert, a cliff face, a mountain pass, the coast, a volcano and a marsh.",
      items: [
        { id: "hi-u75l3-registaan", type: "vocab", front: "रेगिस्तान", reading: "registaan", meaning: "a desert", accept: ["a land of sand", "dry country with no water"], example: { jp: "रेगिस्तान में सिर्फ़ रेत और पत्थर दिखते हैं।", en: "In the desert only sand and stones are visible." }, drill: { jp: "रेगिस्तान में सिर्फ़ रेत दिखती है", en: "In the desert only sand is visible" }, hint: "RE-GIS-TAAN, masculine, consonant-final, so the plural is the bare form: दो रेगिस्तान. DENTAL त. The -स्तान ending is the same one in Hindustan — it means 'the land of'." },
        { id: "hi-u75l3-chattaan", type: "vocab", front: "चट्टान", reading: "chattaan", meaning: "a cliff face", accept: ["a crag", "a great wall of rock"], example: { jp: "नदी के पीछे एक बहुत ऊँची चट्टान है।", en: "There is a very high cliff face behind the river." }, drill: { jp: "नदी के पीछे ऊँची चट्टान है", en: "There is a high cliff face behind the river" }, hint: "CHAT-TAAN — ⚠️ FEMININE and CONSONANT-FINAL, so nothing in the shape says so: चट्टान ऊँची है, not ऊँचा. RETROFLEX ट, doubled in the spelling as well as in the reading. ⚠️ Not पत्थर (unit 21), which ACCEPTS 'a rock' — a चट्टान is too big to pick up." },
        { id: "hi-u75l3-darraa", type: "vocab", front: "दर्रा", reading: "darraa", meaning: "a pass through the mountains", accept: ["the gap a road takes through a range", "a defile between two peaks"], example: { jp: "सर्दी में यह दर्रा बंद हो जाता है।", en: "In winter this pass closes." }, drill: { jp: "सर्दी में यह दर्रा बंद हो जाता है", en: "In winter this pass closes" }, hint: "DAR-RAA, masculine, regular -ा, DENTAL द, with the र doubled in the spelling and in the reading (§1): darraa. ⚠️ Read it against धारा dhaaraa, a clause of a document (unit 85): DENTAL द against DENTAL ध, and the doubling is what keeps the two readings apart. The pass over a पहाड़ (unit 21), which the corpus could not name." },
        { id: "hi-u75l3-tat", type: "vocab", front: "तट", reading: "tat", meaning: "the coast", accept: ["the sea's edge", "the land where the sea ends"], example: { jp: "समुद्र के तट पर सौ से ज़्यादा गाँव हैं।", en: "There are more than a hundred villages on the sea coast." }, drill: { jp: "समुद्र के तट पर बहुत गाँव हैं", en: "There are many villages on the sea coast" }, hint: "TAT, masculine, consonant-final: दो तट. ⚠️ TWO LETTERS, TWO PLACES OF ARTICULATION — DENTAL त then RETROFLEX ट — and §1(b) merges both to t. ⚠️ Not किनारा (unit 54), which IS 'a shore': a किनारा is any water's edge, a तट is a sea's." },
        { id: "hi-u75l3-jvaalaamukhii", type: "vocab", front: "ज्वालामुखी", reading: "jvaalaamukhii", meaning: "a volcano", accept: ["a fire mountain", "a mountain that throws out fire"], example: { jp: "इस देश में एक भी ज्वालामुखी नहीं है।", en: "There is not one volcano in this country." }, drill: { jp: "इस देश में एक ज्वालामुखी है", en: "There is one volcano in this country" }, hint: "JVAA-LAA-MU-KHII — ⚠️ MASCULINE despite the -ी, the पानी/हाथी class of §4: ज्वालामुखी फटा, not फटी. ज्वाला (flame) plus मुख (mouth) — a fire-mouth. The ज्व is ज and व stacked." },
        { id: "hi-u75l3-daldal", type: "vocab", front: "दलदल", reading: "daldal", meaning: "a marsh", accept: ["boggy ground", "soft wet land you sink into"], example: { jp: "बारिश के बाद यह खेत दलदल बन जाता है।", en: "After the rain this field becomes a marsh." }, drill: { jp: "बारिश के बाद यह खेत दलदल बनता है", en: "After the rain this field becomes a marsh" }, hint: "DAL-DAL, masculine, consonant-final, both DENTAL द. The word says itself twice, which is how Hindi often builds a word for a mess. Also used of a situation you cannot get out of." },
      ],
    },
    {
      id: "hi-u75l4",
      unit: 75,
      lesson: 4,
      title: "What lives and what grows",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about plant life, a species, a sprout and a nest — and say whether land is fertile or barren.",
      items: [
        { id: "hi-u75l4-vanaspati", type: "vocab", front: "वनस्पति", reading: "vanaspati", meaning: "plant life", accept: ["the plants of a place", "growing things taken together"], example: { jp: "रेगिस्तान की वनस्पति बहुत कम होती है।", en: "A desert's plant life is very scanty." }, drill: { jp: "रेगिस्तान की वनस्पति बहुत कम होती है", en: "A desert's plant life is very scanty" }, hint: "VA-NAS-PA-TI — ⚠️ FEMININE. वन (a wood) plus पति (a lord) — the word is old and literary, and it is the only word Hindi has for plants as a class. Not पेड़ (unit 14) or फूल (unit 21), which are one tree and one flower." },
        { id: "hi-u75l4-prajaati", type: "vocab", front: "प्रजाति", reading: "prajaati", meaning: "a species", accept: ["one kind of living thing", "a biological kind"], example: { jp: "इस जंगल में पेड़ों की बीस प्रजाति हैं।", en: "There are twenty species of trees in this forest." }, drill: { jp: "इस जंगल में पेड़ों की बीस प्रजाति हैं", en: "There are twenty species of trees in this forest" }, hint: "PRA-JAA-TI — ⚠️ FEMININE. ⚠️ Read it against जाति, a caste, which unit 78 cards: प्रजाति is जाति with the प्र- prefix and it means a kind of ANIMAL or PLANT, never a kind of person. The two are kept in different units for exactly that reason." },
        { id: "hi-u75l4-ankur", type: "vocab", front: "अंकुर", reading: "ankur", meaning: "a sprout", accept: ["a shoot just come up", "the first green shoot of a seed"], example: { jp: "बीज से छोटा अंकुर निकलता है और बाद में पेड़ बनता है।", en: "A small sprout comes out of the seed and later becomes a tree." }, drill: { jp: "बीज से छोटा अंकुर निकलता है", en: "A small sprout comes out of the seed" }, hint: "AN-KUR, masculine, consonant-final: दो अंकुर. Its ं comes before क, a stop, so §1's homorganic rule applies and it is still written n. Of a seed or a plant only — the first green thing that pushes up out of a बीज (unit 21)." },
        { id: "hi-u75l4-ghonslaa", type: "vocab", front: "घोंसला", reading: "ghonslaa", meaning: "a nest", accept: ["a bird's home", "where a bird lays its eggs"], example: { jp: "चिड़िया ने पेड़ पर घोंसला बनाया।", en: "The bird built a nest in the tree." }, drill: { jp: "चिड़िया ने पेड़ पर घोंसला बनाया", en: "The bird built a nest in the tree" }, hint: "GHONS-LAA, masculine, regular -ा. The ं is word-medial before स, which is not a stop, so it is written n (§1). घ is gh with a puff of air. The medial inherent a is not said: ghonslaa, not ghonsalaa." },
        { id: "hi-u75l4-upjaauu", type: "vocab", front: "उपजाऊ", reading: "upjaauu", meaning: "fertile", accept: ["that grows a good crop", "rich enough to grow things"], example: { jp: "नदी के पास की ज़मीन सबसे उपजाऊ होती है।", en: "The land near the river is the most fertile." }, drill: { jp: "नदी के पास की ज़मीन उपजाऊ होती है", en: "The land near the river is fertile" }, hint: "UP-JAA-UU — ⚠️ INVARIANT even though it ends in a vowel: उपजाऊ ज़मीन, उपजाऊ खेत. The final ऊ is the INDEPENDENT letter, because a mātrā cannot follow a mātrā (§1) — the same shape as उबाऊ (unit 74)." },
        { id: "hi-u75l4-banjar", type: "vocab", front: "बंजर", reading: "banjar", meaning: "barren", accept: ["that grows nothing", "dead as farmland"], example: { jp: "बिना पानी के उपजाऊ खेत भी बंजर हो जाता है।", en: "Without water even a fertile field becomes barren." }, drill: { jp: "बिना पानी के खेत बंजर हो जाता है", en: "Without water a field becomes barren" }, hint: "BAN-JAR — ⚠️ INVARIANT: बंजर ज़मीन, बंजर पहाड़. Its ं comes before ज, a stop, so §1's homorganic rule applies and it is still written n. The exact opposite of उपजाऊ, and the two are taught side by side on purpose." },
      ],
    },
  ],
};
