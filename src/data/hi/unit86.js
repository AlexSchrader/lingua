// HI Unit 86 — शहर की सुविधाएँ ("What the city supplies") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2, AND THE LAST UNIT OF THE RANGE. Conventions: unit1.js §1–§11,
// unit31.js §A1–§A8, then §B1–§B7 in unit74.js.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 3 (B1)"). lint's SCAFFOLD_TITLE_PATTERNS
// matches /^Vocabulary \d+ \(B1\)$/, so the Devanagari title is compulsory and the
// theme was free. Measured hole: **3 of 16** — the corpus had सड़क, गली, पुल,
// बिजली, नल, छत, दीवार and a handful of buildings, and nothing of the SYSTEM that
// delivers them. A learner who had finished 85 units could not say that the water
// had not come, that the power was cut, that he lived on the fourth floor, or that
// the municipality had not emptied the bins.
//
// ⚠️ EIGHT OF THE ALLOCATED FRONTS WERE TAKEN AND THE ALLOCATION DID NOT SAY SO.
// Measured with `check-front.mjs` against the live corpus: **मीटर (u40), फुटपाथ
// (u33), चौराहा (u29), चौक (u50), बस्ती (u50), जाम (u33), नल (u15) and मंज़िल
// (u29)** are all carded. So the briefed 3/16 is really 11/16 on that word list,
// and the unit is filled out from the wider field instead — the pipe, the tank,
// the pump, the drain, the power station, the generator, the pole, the lift, the
// quarter, the colony, the shanty, the flat, the tenant, the council, the dump,
// the lavatory, the barrow, the warehouse and the gate.
//   🚨 **मोहल्ला ("a city quarter") — REFUSED, AND IT WAS AUTHORED AND DELETED.**
//   The corpus teaches **मुहल्ला at u50l?**, glossed "a neighbourhood" — one word,
//   two accepted spellings, differing in a VOWEL (ो against ु) and therefore in the
//   reading too. The FOURTH spelling-variant catch in this block; unit85.js's header
//   lists all four and which probe found each. मकान took the slot, and मुहल्ला is
//   used in this unit's sentences instead, which is what the lower-slot rule is for.
//   NAMED FOR A LATER BLOCK, free and unspent: अहाता, बरामदा, छज्जा, तहखाना,
//   मकान, सीवर, चौकी, खंभे-adjacent तारबंदी.
//
// ⚠️ जलापूर्ति IS CARDED HERE AND आपूर्ति IS CARDED AT u76, AND THAT IS DELIBERATE.
// Both were in this block's allocation. They are a COMPOUND and its base — जल
// (water) + आपूर्ति — which the corpus already does across units: लोहा and लोहार
// (u60, same unit), दुकान (u9) and दुकानदार (u18), किराया (u15) and किराएदार
// (l3 of this unit). Checked mechanically: **जलापूर्ति does NOT contain the string
// आपूर्ति**, because the base opens with the INDEPENDENT आ and the compound has
// जला before its पूर्ति — so no `findWholeWord` match in either direction. And the
// glosses are different jobs: आपूर्ति is the economic idea (the pair of माँग),
// जलापूर्ति is the thing a town either has or has not got today.
//
// ⚠️ THREE DRAIN WORDS AND THAT IS NOT A MISTAKE. नाली, गटर and जलापूर्ति are all
// in the allocation and Indian urban Hindi genuinely distinguishes them: a नाली
// runs open along the street, a गटर is covered and carries waste, and जलापूर्ति is
// what comes IN. Each gloss differs in a WORD and not a parenthetical (unit1.js
// §9), which is what keeps all three answerable. **सीवर was dropped** — it is a
// loanword whose sense गटर already carries, and §9 would have forced a contorted
// gloss on it anyway.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: पाइपलाइन, टंकी, नाली, जलापूर्ति, कटौती, मोमबत्ती, लिफ़्ट, कॉलोनी,
//   झुग्गी, नगरपालिका. **पाइपलाइन and लिफ़्ट are CONSONANT-FINAL LOANWORDS and
//   feminine**, which nothing predicts — लिफ़्ट बंद है, not बंद हुआ — and they are
//   the two in the unit a learner will get wrong.
//   MASCULINE: हैंडपंप, गटर, बिजलीघर, कनेक्शन, जनरेटर, मकान, फ़्लैट,
//   किराएदार, कूड़ाघर, शौचालय, ठेला, थाना, फाटक. **गटर, कनेक्शन, जनरेटर, फ़्लैट,
//   किराएदार and फाटक are consonant-final masculine and their plural is the
//   bare form** — दो गटर, तीन फाटक. **थाना is a regular -ा masculine** and its
//   oblique is थाने.
//
// ⚠️ TWO CARDS LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06), both to
// u94 इमारत और सामग्री, which unit61.js §B9 allocated THE BUILDING PROCESS and
// which names खंभा in that allocation by hand:
//   खंभा (l2) → u94   ·   गोदाम (l4) → u94
// Both are now taught AFTER u86, so neither may appear in a u86 sentence again.
// मोमबत्ती and थाना replaced them, and **neither is a loanword**, so the
// loanword-free-pass count below is unchanged at seven and zero. फ़्यूज़ was the
// obvious l2 replacement and was passed over for exactly that reason: its gloss
// would have had to dodge its own reading, the way लिफ़्ट's and फ़्लैट's do.
//   ADJECTIVE: **बहुमंज़िला AGREES**, because it ends in -आ: बहुमंज़िला मकान,
//   बहुमंज़िली इमारत.
//
// ⚠️ TWO NEAR-PAIRS INSIDE MY OWN BLOCK:
//   • ठेला thelaa (a handcart, l4) against ठेका thekaa (a works contract, u85l4).
//     Both RETROFLEX ठ, one letter apart, three units apart. Both hints say so.
//   • मकान (l3) against घर (u2l1), which ACCEPTS 'home': a मकान is the structure
//     and a घर is where you belong, so only a मकान can be bought, let or leased.
//     Glossed apart on purpose.
// RETROFLEX/DENTAL (§1b): no new collision. टंकी tankii, गटर gatar, कटौती katautii,
// ठेला thelaa and फाटक phaatak carry RETROFLEX ट/ठ with no dental टंकी-with-त,
// गतर, कतौती, थेला or फातक anywhere in the corpus; शौचालय
// shauchaalay is DENTAL with no retroflex twin. ⚠️ **थाना thaanaa is DENTAL थ and
// its near-twin is ठेका thekaa (u85), which is RETROFLEX ठ** — §1(b) merges both
// to th and the rest of the string keeps them apart; no ठाना and no थेका exist in
// the corpus, checked. The doubling hatch — which DID
// fire in u85 for पट्टा — fires nowhere here. GEMINATION: झुग्गी jhuggii and मोमबत्ती mombattii double, as the spelling requires. ड़ READS r (§1c): कूड़ाघर
// kuuraaghar. ॉ READS o (§A4): कॉलोनी kolonii — the third front in the language to
// carry the candra-o, after डॉक्टर (u35) and ऑपरेशन (u77, this block).
// LOANWORD FREE-PASS CHECK (§9), measured with the real `checkProduce`. **This is
// the most loanword-dense unit since u9**, and every gloss was written to avoid
// the free pass:
//   लिफ़्ट lift      → "the car that carries people up a tall building", NOT "a lift"
//   फ़्लैट flait      → "a dwelling on one floor of a building", NOT "a flat"
//   कनेक्शन kanekshan → "a line brought into a house"
//   जनरेटर janaretar  → "a machine that makes power when the mains fail"
//   पाइपलाइन paaiplaain → "a water main"
//   हैंडपंप haindpamp  → "a hand pump for drawing water"
//   कॉलोनी kolonii    → "a planned residential block"
//   Seven loanwords, zero free passes.
export const HI_UNIT86 = {
  id: "hi-u86",
  lang: "hi",
  title: "शहर की सुविधाएँ",
  order: 86,
  stage: "b1",
  lessons: [
    {
      id: "hi-u86l1",
      unit: 86,
      lesson: 1,
      title: "Where the water comes from, and where it goes",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that the water supply has failed — name the main, the tank, the hand pump, the open drain and the covered drain.",
      items: [
        { id: "hi-u86l1-paaiplaain", type: "vocab", front: "पाइपलाइन", reading: "paaiplaain", meaning: "a water main", accept: ["a run of pipe laid under a street", "the piping that brings water"], example: { jp: "नई पाइपलाइन सड़क के नीचे डाली गई।", en: "The new water main was laid under the road." }, drill: { jp: "नई पाइपलाइन सड़क के नीचे डाली गई", en: "The new main was laid under the road" }, hint: "PAA-IP-LAA-IN — ⚠️ FEMININE and CONSONANT-FINAL, which nothing in a loanword predicts: पाइपलाइन डाली गई, not डाला गया. Glossed 'a water main' because §9 forbids a loanword glossing to its own reading. The example is unit 80's passive." },
        { id: "hi-u86l1-tankii", type: "vocab", front: "टंकी", reading: "tankii", meaning: "a water tank on a roof", accept: ["the household water store", "a cistern"], example: { jp: "छत की टंकी हर हफ़्ते साफ़ करनी चाहिए।", en: "The roof tank should be cleaned every week." }, drill: { jp: "छत की टंकी हर हफ़्ते साफ़ करनी चाहिए", en: "The roof tank should be cleaned every week" }, hint: "TAN-KII — ⚠️ FEMININE. RETROFLEX ट — tongue curled back — and the ं before क is written n (§1). Every Indian house has one on the roof, which is why this is the first card of the unit: no टंकी, no water." },
        { id: "hi-u86l1-haindpamp", type: "vocab", front: "हैंडपंप", reading: "haindpamp", meaning: "a hand pump for drawing water", accept: ["the village pump worked by a lever", "a pump you push by hand"], example: { jp: "गाँव में अब भी हैंडपंप से पानी आता है।", en: "In the village the water still comes from a hand pump." }, drill: { jp: "गाँव में हैंडपंप से पानी आता है", en: "In the village water comes from a hand pump" }, hint: "HAIND-PAMP, masculine, consonant-final. The ai is ऐ's open vowel (unit 2); the first ं is before ड, a RETROFLEX stop, so it is n, and the second is before प, so §1's homorganic rule makes it **m** — two nasals, two different readings, in one word." },
        { id: "hi-u86l1-naalii", type: "vocab", front: "नाली", reading: "naalii", meaning: "an open drain along a street", accept: ["the channel water runs down beside a road", "a gutter you can see into"], example: { jp: "बारिश में नाली का पानी सड़क पर आ गया।", en: "In the rain the drain water came onto the road." }, drill: { jp: "बारिश में नाली का पानी सड़क पर आया", en: "In the rain the drain water came onto the road" }, hint: "NAA-LII — ⚠️ FEMININE. ⚠️ Three drain words in this unit and each gloss names what makes it different: a नाली is OPEN and you can see into it, a गटर (l1) is covered, and जलापूर्ति (l1) is what comes in. Also used of any channel or pipe." },
        { id: "hi-u86l1-gatar", type: "vocab", front: "गटर", reading: "gatar", meaning: "a covered drain that carries waste", accept: ["a sewer under the road", "the closed drain a town's waste runs in"], example: { jp: "गटर जाम होने से पूरी गली में बदबू थी।", en: "The whole lane stank because the drain was blocked." }, drill: { jp: "गटर जाम होने से गली में पानी भरा", en: "The lane filled with water because the drain was blocked" }, hint: "GA-TAR, masculine, consonant-final, RETROFLEX ट: दो गटर. Plain ग. ⚠️ Against नाली (l1), which is open. सीवर is the English word and this course does not card it — §9 would have forced an awkward gloss and गटर already carries the sense." },
        { id: "hi-u86l1-jalaapuurti", type: "vocab", front: "जलापूर्ति", reading: "jalaapuurti", meaning: "the water supply of a town", accept: ["water delivered to houses by a system", "the piped supply a place depends on"], example: { jp: "शहर की जलापूर्ति दो दिन बंद रही।", en: "The city's water supply was off for two days." }, drill: { jp: "शहर की जलापूर्ति दो दिन बंद रही", en: "The city's water supply was off for two days" }, hint: "JA-LAA-PUUR-TI — ⚠️ FEMININE. जल (water) plus आपूर्ति, supply (unit 76) — a compound and its base, in different units, like दुकान/दुकानदार. ⚠️ It does NOT contain the string आपूर्ति: that word opens with the INDEPENDENT आ and this one has जला before its पूर्ति. Checked mechanically." },
      ],
    },
    {
      id: "hi-u86l2",
      unit: 86,
      lesson: 2,
      title: "Power, and the cut",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about a power station, a connection, a scheduled cut, a generator, a candle and a lift.",
      items: [
        { id: "hi-u86l2-bijliighar", type: "vocab", front: "बिजलीघर", reading: "bijliighar", meaning: "a power station", accept: ["the plant that generates electricity", "where a town's power is made"], example: { jp: "नया बिजलीघर कोयले से चलता है।", en: "The new power station runs on coal." }, drill: { jp: "नया बिजलीघर कोयले से चलता है", en: "The new power station runs on coal" }, hint: "BIJ-LII-GHAR, masculine, consonant-final. बिजली, electricity (unit 15), plus घर, a house (unit 2) — Hindi builds the word out of two you have. घ is gh with a puff of air. Not कारखाना (unit 60), a factory: a बिजलीघर makes only power." },
        { id: "hi-u86l2-kanekshan", type: "vocab", front: "कनेक्शन", reading: "kanekshan", meaning: "a line brought into a house", accept: ["the supply hooked up to a building", "a service connection"], example: { jp: "नए फ़्लैट में बिजली का कनेक्शन अभी नहीं आया।", en: "The electricity connection has not yet come to the new flat." }, drill: { jp: "नए घर में बिजली का कनेक्शन नहीं है", en: "The new house has no electricity connection" }, hint: "KA-NEK-SHAN, masculine, consonant-final. The क्श is क and श stacked. ⚠️ Glossed 'a line brought into a house' because §9 forbids a loanword glossing to its own reading. In India you apply for a कनेक्शन for power, water, gas and the telephone alike." },
        { id: "hi-u86l2-katautii", type: "vocab", front: "कटौती", reading: "katautii", meaning: "a cut in the power supply", accept: ["a scheduled shutting-off of supply", "load shedding"], example: { jp: "गरमी में हर शाम बिजली की कटौती होती है।", en: "In the heat there is a power cut every evening." }, drill: { jp: "गरमी में बिजली की कटौती रोज़ होती है", en: "In the heat there is a power cut daily" }, hint: "KA-TAU-TII — ⚠️ FEMININE. RETROFLEX ट and औ's open vowel (unit 2). Built off काटना, to cut (unit 26). ⚠️ Its other sense is a DEDUCTION from a payment, which is how it turns up on a wage slip — the gloss names the power sense because that is the one you hear daily." },
        { id: "hi-u86l2-janaretar", type: "vocab", front: "जनरेटर", reading: "janaretar", meaning: "a machine that makes power when the mains fail", accept: ["a standby engine for electricity", "what a shop runs during a cut"], example: { jp: "कटौती के समय दुकानें जनरेटर चलाती हैं।", en: "During a cut the shops run a generator." }, drill: { jp: "कटौती के समय दुकानें जनरेटर चलाती हैं", en: "During a cut the shops run a generator" }, hint: "JA-NA-RE-TAR, masculine, consonant-final, RETROFLEX ट: दो जनरेटर. ⚠️ Glossed the long way per §9. It is the sound of an Indian market street in summer, and the word a learner will hear before he sees the machine." },
        { id: "hi-u86l2-mombattii", type: "vocab", front: "मोमबत्ती", reading: "mombattii", meaning: "a candle", accept: ["a wax light you burn when the power goes", "a taper"], example: { jp: "कटौती के समय घर में मोमबत्ती जलानी पड़ती है।", en: "During a cut a candle has to be lit in the house." }, drill: { jp: "कटौती के समय घर में मोमबत्ती जलती है", en: "During a cut a candle burns in the house" }, hint: "MOM-BAT-TII — ⚠️ FEMININE, with the त doubled as the spelling requires: mombattii. ⚠️ Its ं sits before ब, so §1's homorganic rule makes it **m** and not n, the same rule as कंप्यूटर kampyuutar (unit 9). मोम (wax) plus बत्ती (a wick), and this course cards neither on its own, so the compound needed its own card. ⚠️ It is in the POWER lesson rather than a lighting one on purpose: in India a मोमबत्ती is what a कटौती means." },
        { id: "hi-u86l2-lift", type: "vocab", front: "लिफ़्ट", reading: "lift", meaning: "the car that carries people up a tall building", accept: ["an elevator", "the thing you ride instead of the stairs"], example: { jp: "कटौती में लिफ़्ट बंद हो जाती है।", en: "During a cut the lift stops working." }, drill: { jp: "कटौती में लिफ़्ट बंद हो जाती है", en: "During a cut the lift stops working" }, hint: "LIFT — ⚠️ FEMININE and CONSONANT-FINAL: लिफ़्ट बंद हो जाती है, not हो जाता है. With फ़ — an f (unit 4). ⚠️ Glossed the long way because 'a lift' IS the reading, which §9 forbids — the gloss would have been answerable straight off the prompt." },
      ],
    },
    {
      id: "hi-u86l3",
      unit: 86,
      lesson: 3,
      title: "Where people live",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say where somebody lives — a house, a planned colony, a shanty, a many-storeyed building, a flat — and name a tenant.",
      items: [
        { id: "hi-u86l3-makaan", type: "vocab", front: "मकान", reading: "makaan", meaning: "a house as a building", accept: ["a built dwelling", "premises somebody owns or rents"], example: { jp: "यह मकान साठ साल पुराना है।", en: "This house is sixty years old." }, drill: { jp: "यह मकान साठ साल पुराना है", en: "This house is sixty years old" }, hint: "MA-KAAN, masculine, consonant-final, so the plural is the bare form: दो मकान. ⚠️ Not घर (unit 2), which accepts 'home': a घर is where you belong and a मकान is the STRUCTURE — so a मकान is what you buy, let out or put a पट्टा on (unit 85), and मकानमालिक is the landlord." },
        { id: "hi-u86l3-kolonii", type: "vocab", front: "कॉलोनी", reading: "kolonii", meaning: "a planned residential block", accept: ["a laid-out housing estate", "streets built together to one plan"], example: { jp: "यह कॉलोनी तीस साल पहले बनी थी।", en: "This colony was built thirty years ago." }, drill: { jp: "यह कॉलोनी तीस साल पहले बनी थी", en: "This colony was built thirty years ago" }, hint: "KO-LO-NII — ⚠️ FEMININE. ⚠️ Its first syllable कॉ carries the CANDRA-O, which reads **o** exactly like ो (unit 31 §A4) — the third front in the language to carry it after डॉक्टर (unit 35) and ऑपरेशन (unit 77). Against मुहल्ला (unit 50), the quarter that grew rather than being planned — and ⚠️ that is the corpus's spelling of the word: मोहल्ला was authored here and deleted, because मुहल्ला/मोहल्ला are one word." },
        { id: "hi-u86l3-jhuggii", type: "vocab", front: "झुग्गी", reading: "jhuggii", meaning: "a shanty", accept: ["a one-room hut in a slum", "a shack put up on waste ground"], example: { jp: "नगरपालिका ने नदी के किनारे की झुग्गी हटा दी।", en: "The council removed the shanty on the riverbank." }, drill: { jp: "नदी के किनारे की झुग्गी हटा दी गई", en: "The shanty on the riverbank was removed" }, hint: "JHUG-GII — ⚠️ FEMININE, with the ग doubled; झ is jh with a puff of air. ⚠️ Not बस्ती (unit 50), which is any settlement: a झुग्गी is ONE hut, and झुग्गी-झोपड़ी is what a whole slum is called in Indian official Hindi." },
        { id: "hi-u86l3-bahumanzilaa", type: "vocab", front: "बहुमंज़िला", reading: "bahumanzilaa", meaning: "many-storeyed", accept: ["built with several floors", "high-rise"], example: { jp: "शहर के बीच नई बहुमंज़िला इमारत बन रही है।", en: "A new many-storeyed building is going up in the middle of the city." }, drill: { jp: "शहर के बीच बहुमंज़िला इमारत बन रही है", en: "A many-storeyed building is going up in the city centre" }, hint: "BA-HU-MAN-ZI-LAA — ⚠️ IT AGREES, because it ends in -आ: बहुमंज़िला मकान, बहुमंज़िली इमारत. बहु (many) plus मंज़िल, a storey (unit 29), with ज़ — a z. Its ं comes before ज़, so §1 gives n." },
        { id: "hi-u86l3-flait", type: "vocab", front: "फ़्लैट", reading: "flait", meaning: "a dwelling on one floor of a building", accept: ["an apartment", "a set of rooms on a single storey"], example: { jp: "उन्होंने तीसरी मंज़िल पर फ़्लैट लिया।", en: "They took a flat on the third floor." }, drill: { jp: "उन्होंने तीसरी मंज़िल पर फ़्लैट लिया", en: "They took a flat on the third floor" }, hint: "FLAIT, masculine, consonant-final, with फ़ — an f — and RETROFLEX ट; the ai is ऐ's open vowel. ⚠️ Glossed the long way because 'a flat' is too close to the reading for §9. Against मकान (l3), the whole building: a फ़्लैट is one floor of one." },
        { id: "hi-u86l3-kiraaedaar", type: "vocab", front: "किराएदार", reading: "kiraaedaar", meaning: "a tenant", accept: ["somebody who rents a place to live", "the person who pays the rent"], example: { jp: "नए किराएदार ने दो महीने का किराया पहले दिया।", en: "The new tenant paid two months' rent in advance." }, drill: { jp: "नए किराएदार ने दो महीने का किराया दिया", en: "The new tenant paid two months' rent" }, hint: "KI-RAA-E-DAAR, masculine, consonant-final, DENTAL द: दो किराएदार. Built on किराया, rent (unit 15), with -दार — the same suffix as दुकानदार (unit 18) and ईमानदार (unit 27), and `scope-hi.mjs` generates no -दार, so it needed its own card. The landlord is मालिक (unit 28)." },
      ],
    },
    {
      id: "hi-u86l4",
      unit: 86,
      lesson: 4,
      title: "What the council runs",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the municipal council, the rubbish dump, a public lavatory, a handcart, the police station and a large gate.",
      items: [
        { id: "hi-u86l4-nagarpaalikaa", type: "vocab", front: "नगरपालिका", reading: "nagarpaalikaa", meaning: "the municipal council", accept: ["the body that runs a town", "the local authority"], example: { jp: "सड़क और नाली का काम नगरपालिका का है।", en: "The road and the drains are the council's job." }, drill: { jp: "सड़क और नाली का काम नगरपालिका का है", en: "The roads and drains are the council's job" }, hint: "NA-GAR-PAA-LI-KAA — ⚠️ FEMININE. नगर (a town) plus पालिका, from पालना, to raise or keep (unit 59) — 'she who keeps the town'. ⚠️ Not सरकार (unit 42), which accepts 'the state authorities': a नगरपालिका is the LOCAL one, and it is who you complain to." },
        { id: "hi-u86l4-kuuraaghar", type: "vocab", front: "कूड़ाघर", reading: "kuuraaghar", meaning: "a rubbish dump", accept: ["the place a town's waste is tipped", "a refuse yard"], example: { jp: "मुहल्ले का कूड़ाघर अब बहुत दूर है।", en: "The quarter's rubbish dump is now a long way off." }, drill: { jp: "मुहल्ले का कूड़ाघर अब बहुत दूर है", en: "The quarter's rubbish dump is now far away" }, hint: "KUU-RAA-GHAR, masculine, consonant-final. ड़ reads **r** (§1c), so kuuraaghar. कूड़ा (rubbish) plus घर — and कूड़ा itself is NOT carded: कचरा (unit 15) holds that gloss, so the compound carries the word. घ is gh with a puff of air." },
        { id: "hi-u86l4-shauchaalay", type: "vocab", front: "शौचालय", reading: "shauchaalay", meaning: "a public lavatory", accept: ["a toilet block", "the official word for a toilet"], example: { jp: "स्टेशन के सामने नया शौचालय बना है।", en: "A new public lavatory has been built opposite the station." }, drill: { jp: "स्टेशन के सामने नया शौचालय बना है", en: "A new public lavatory has been built opposite the station" }, hint: "SHAU-CHAA-LAY, masculine, consonant-final, with औ's open vowel (unit 2). शौच (relieving oneself) plus आलय (a place) — the -आलय suffix also builds विद्यालय, a school. ⚠️ This is the WRITTEN word, on every sign; in speech people say टॉयलेट or बाथरूम, which this course does not card." },
        { id: "hi-u86l4-thelaa", type: "vocab", front: "ठेला", reading: "thelaa", meaning: "a two-wheeled barrow pushed by hand", accept: ["a handcart a hawker pushes", "a wheeled stall"], example: { jp: "गली के बाहर सब्ज़ी का ठेला लगा था।", en: "A vegetable barrow was set up outside the lane." }, drill: { jp: "गली के बाहर सब्ज़ी का ठेला लगा था", en: "A vegetable barrow was set up outside the lane" }, hint: "THE-LAA, masculine, regular -ा, RETROFLEX ठ. ⚠️ Read it against ठेका thekaa, a works contract (unit 85): both RETROFLEX, one letter apart, three units apart. ⚠️ Glossed the long way because गाड़ी (unit 14) ACCEPTS 'a cart'. From ठेलना, to push, which is uncarded." },
        { id: "hi-u86l4-thaanaa", type: "vocab", front: "थाना", reading: "thaanaa", meaning: "a police station", accept: ["the local police post", "the building a complaint is taken to"], example: { jp: "शिकायत करने के लिए थाना जाना पड़ता है।", en: "One has to go to the police station to make a complaint." }, drill: { jp: "शिकायत करने के लिए थाना जाना पड़ता है", en: "One has to go to the police station to complain" }, hint: "THAA-NAA, masculine with a regular -ा, so the oblique is थाने — थाने में, at the police station. **DENTAL थ** — tongue on the teeth, then a puff. ⚠️ Read it against ठेका (unit 85), which opens with the RETROFLEX ठ: §1(b) merges both to th and the rest of the string is what keeps them apart. ⚠️ **IT LOOKS LIKE A VERB INFINITIVE AND IS NOT** — the बहाना class (unit 57); no verb थाना exists. पुलिस (unit 9) is the people; the थाना is the building they sit in, and in India it is the unit a town is divided into." },
        { id: "hi-u86l4-phaatak", type: "vocab", front: "फाटक", reading: "phaatak", meaning: "a large gate into a compound", accept: ["the main gate of a walled place", "a railway crossing gate"], example: { jp: "कारखाने का फाटक सुबह छह बजे खुलता है।", en: "The factory gate opens at six in the morning." }, drill: { jp: "कारखाने का फाटक सुबह छह बजे खुलता है", en: "The factory gate opens at six in the morning" }, hint: "PHAA-TAK, masculine, consonant-final, RETROFLEX ट: दो फाटक. ph is one puff of air, not f. ⚠️ Not दरवाज़ा (unit 1), a door: a फाटक is big enough for a vehicle, and in India the word above all means the gate at a level crossing." },
      ],
    },
  ],
};
