// HI Unit 85 — अनुबंध और मोलभाव ("Contracts and bargaining") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then §B1–§B7 in
// unit74.js.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 2 (B1)"). lint's SCAFFOLD_TITLE_PATTERNS
// matches /^Vocabulary \d+ \(B1\)$/, so the Devanagari title is compulsory and the
// theme was free. Measured hole: **3 of 16** — the corpus had जमा, किस्त and शुल्क
// (all A2 u37) and nothing else of the transaction. A learner could pay a bill and
// could not sign an agreement, ask for a discount, name a guarantee, put down a
// deposit, bid at an auction or say who inherits.
//
// ⚠️ ONE ERROR IN THE CENTRAL ALLOCATION, CORRECTED HERE. The allocation listed
// **वापसी** as free for this slot. **It is TAKEN — u33l?** (travel), and
// `check-front.mjs` says so. Three more of the obvious transaction fronts are
// taken too and the allocation did not name them: **रसीद (u37), छूट (u37) and
// ग्राहक (u18)** — a receipt, a discount and a customer. So the briefed 3/16 is
// really 7/16, and this unit carries 24 cards anyway because the field is wide.
//   TAKEN, full list: वापसी (u33), रसीद, छूट, किस्त, जमा, शुल्क, ब्याज, सौदा,
//   मुनाफ़ा, नुकसान, बजट, बचत, कर्ज़, सिक्का (u37), ग्राहक, कीमत (u18), शर्त (u39),
//   गवाह, मुकदमा, अदालत, कानून (u42), वसीयत (u59), दर्जा (u47).
//   🚨 **मुहर ("an official seal") — REFUSED, AND IT WAS AUTHORED AND DELETED.** The
//   corpus teaches **मोहर at u44l?**, glossed "a rubber stamp" and ACCEPTING "an
//   official seal" — and मोहर/मुहर are ONE WORD with two accepted spellings. The
//   बर्तन/बिलकुल trap a THIRD time in this block, and the first one a NUKTA probe
//   could NOT see, because these two spellings differ in a VOWEL (ो against ु) and
//   so differ in their readings too — mohar against muhar. WHAT CAUGHT IT:
//   `scripts/qa/accept-collisions.mjs hi`, on the GLOSS. बकाया took the slot.
//   🚨 THE RULE FOR THE NEXT SEAT, AND IT IS THE MOST REUSABLE THING IN THIS FILE:
//   the spelling-variant class needs THREE probes and each of this block's three
//   was caught by a different one.
//     ज़रिये/ज़रिए (u79)  — caught by a DUPLICATE-READING probe (both read zariye)
//     गुफ़ा/गुफा   (u75)  — caught by `lint:curriculum`'s GLOSS-collision check
//     अर्जी/अर्ज़ी   (u83)  — caught by the same lint check
//     मुहर/मोहर   (u85)  — caught by `accept-collisions.mjs`, on an accept[] entry
//   `check-front.mjs` reported ALL FOUR fronts FREE. It is the right first probe
//   and it is not sufficient.
//   NAMED FOR A LATER BLOCK, free and unspent: अदायगी, करार, इकरारनामा, बही,
//   सौदेबाज़ी, किरायानामा, बकाया, अग्रिम.
//
// ⚠️ दलाल IS A PERSON AND IT IS CARDED HERE BY THE CENTRAL ALLOCATION, which
// listed it among this slot's free fronts. Job-title nouns otherwise belong to
// block 3's u96 and this unit spends exactly one: दलाल, because an auction and a
// tender lesson with no broker in it is a lesson about paperwork. **वारिस is not
// a job title** — it is a legal standing, like गवाह (u42).
//
// 🚨 THE RETROFLEX/DENTAL DOUBLING HATCH FIRES IN THIS UNIT — THE FIRST TIME ANY
// B1 UNIT HAS NEEDED IT, AND ONLY THE SECOND TIME IN THE LANGUAGE.
// unit1.js §1(b) merges ट/त → t in word readings and provides one escape: "when a
// retroflex/dental pair would collide, the RETROFLEX member DOUBLES its
// consonant", with साथ saath (u8) / साठ **saatth** (u11) as the worked example.
//   **पट्टा, a lease, collides with पत्ता, a leaf (u21l?).** पट्टा is प+ट्ट+ा with a
//   geminate RETROFLEX ट and पत्ता is प+त्त+ा with a geminate DENTAL त — and the
//   merge rule maps both to "pattaa". Measured: पत्ता IS authored `pattaa`.
//   SO पट्टा IS AUTHORED **`patttaa`** — the geminate plus §1(b)'s extra doubling,
//   three t's, exactly as साठ takes two for one ठ. The two readings are now
//   distinct and the language's fronts-to-distinct-readings invariant holds:
//   verified over all 1,704 readings, 0 collisions.
//   ⚠️ unit41.js, unit51.js, unit57.js and unit60.js each say "the doubling hatch
//   fires nowhere in this unit", which was true of each of them and is why no
//   later seat expected to need it. **It is a live rule, not a historical note.**
//
// 🚨 AND A SECOND INVARIANT BREAK WAS CAUGHT IN THIS BLOCK BY THE SAME PROBE, in
// u79: ज़रिये read `zariye` and so does ज़रिए, which the corpus already teaches at
// u23. Two spellings, one word, one reading — `check-front.mjs` reported the front
// FREE. unit79.js carries the full account. THE LESSON FOR THE NEXT SEAT: run a
// DUPLICATE-READING probe over the whole language, not only a front probe. A front
// probe cannot see a spelling variant.
//
// ⚠️ TWO -ना NOUNS THAT LOOK LIKE VERB INFINITIVES, which brings Hindi's running
// total to eight: झरना (u54), भावना (u52), प्रार्थना (u51), बहाना (u57), कल्पना
// (u57), घुटना (u84, this block) and now **बयाना** (l1) and **जुर्माना** (l3).
// Neither has a verb of the same spelling anywhere in Hindi — checked with
// `npm run taught -- hi`, not assumed — and each hint says it is a noun.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: धारा, रकम, गारंटी, वारंटी, जमानत, गिरवी, निविदा, नीलामी,
//   संपत्ति. **रकम and जमानत are CONSONANT-FINAL**, so nothing in the shape
//   says so — रकम बड़ी है, not बड़ा — and those two are the ones a learner cannot
//   predict. **गिरवी is feminine despite looking like a -ी masculine of the
//   पानी class.**
//   MASCULINE: अनुबंध, समझौता, पट्टा, बयाना, बकाया, मोलभाव, थोक, फुटकर, भुगतान, कमीशन,
//   बीमा, जुर्माना, ठेका, दलाल, वारिस. **थोक, फुटकर, दलाल and वारिस are
//   consonant-final masculine and their plural is the bare form** — दो दलाल,
//   तीन वारिस. **बीमा is masculine and ends in -ा**, which §4's rule predicts.
// RETROFLEX/DENTAL (§1b) BEYOND पट्टा: ठेका thekaa is RETROFLEX ठ against थोक
// thok, which is DENTAL थ — two different words, two different readings, no
// collision, and both hints point at the other. निविदा nividaa, भुगतान bhugtaan,
// जमानत jamaanat and संपत्ति sampatti are DENTAL with no retroflex twin.
// GEMINATION: पट्टा and संपत्ति sampatti double, as the spelling requires.
// LOANWORD FREE-PASS CHECK (§9), measured with the real `checkProduce`:
//   गारंटी gaarantii → glossed "a promise that a thing will work", not "a
//   guarantee"; वारंटी vaarantii → "a seller's written undertaking to repair";
//   कमीशन kamiishan → "a cut taken by a middleman". None of the three glosses is
//   its own reading. Zero free passes.
export const HI_UNIT85 = {
  id: "hi-u85",
  lang: "hi",
  title: "अनुबंध और मोलभाव",
  order: 85,
  stage: "b1",
  lessons: [
    {
      id: "hi-u85l1",
      unit: 85,
      lesson: 1,
      title: "Settled on paper",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about a contract, a settlement, a clause, a lease, a deposit paid down and a balance outstanding.",
      items: [
        { id: "hi-u85l1-anubandh", type: "vocab", front: "अनुबंध", reading: "anubandh", meaning: "a contract", accept: ["a binding written agreement", "the paper two sides sign"], example: { jp: "दोनों कंपनियों के बीच पाँच साल का अनुबंध हुआ।", en: "A five-year contract was made between the two companies." }, drill: { jp: "दोनों कंपनियों के बीच नया अनुबंध हुआ", en: "A new contract was made between the two companies" }, hint: "A-NU-BANDH, masculine, consonant-final: दो अनुबंध. Its ं sits before ध, a DENTAL stop, so §1's homorganic rule still gives n. ⚠️ Not सौदा (unit 37), which is 'a deal' and accepts 'an agreement to buy': a सौदा is struck by hand, an अनुबंध is signed." },
        { id: "hi-u85l1-samjhautaa", type: "vocab", front: "समझौता", reading: "samjhautaa", meaning: "a settlement reached", accept: ["a compromise two sides accept", "the ending of a dispute by agreement"], example: { jp: "अदालत के बाहर ही समझौता हो गया।", en: "A settlement was reached outside the court itself." }, drill: { jp: "अदालत के बाहर ही समझौता हो गया", en: "A settlement was reached outside the court" }, hint: "SAM-JHAU-TAA, masculine, regular -ा, RETROFLEX ट, with औ's open vowel (unit 2). Built off समझना, to understand (unit 6). ⚠️ It carries a shade English does not: समझौता करना also means to settle for less than you wanted." },
        { id: "hi-u85l1-dhaaraa", type: "vocab", front: "धारा", reading: "dhaaraa", meaning: "a clause of a law or contract", accept: ["a numbered section of a legal text", "a provision in a document"], example: { jp: "अनुबंध की तीसरी धारा किसी ने नहीं पढ़ी।", en: "Nobody read the third clause of the contract." }, drill: { jp: "अनुबंध की तीसरी धारा किसी ने नहीं पढ़ी", en: "Nobody read the contract's third clause" }, hint: "DHAA-RAA — ⚠️ FEMININE despite the -ा, the आपदा class (unit 75). DENTAL ध with a puff of air. ⚠️ Its other meaning is a CURRENT of water, and in India every newspaper uses it for a section of law — धारा 420 is the fraud section and everybody knows the number." },
        { id: "hi-u85l1-bakaayaa", type: "vocab", front: "बकाया", reading: "bakaayaa", meaning: "an amount still outstanding", accept: ["what is left owing", "arrears"], example: { jp: "अनुबंध के बाद बकाया दो साल तक रहा।", en: "After the contract an amount stayed outstanding for two years." }, drill: { jp: "अनुबंध के बाद बकाया दो साल रहा", en: "After the contract the balance stayed outstanding two years" }, hint: "BA-KAA-YAA, masculine and regular -ा. Plain क. ⚠️ Not कर्ज़ (unit 37), a loan you took out: a बकाया is the part of an agreed sum that has not been paid yet, and बकाया रहना is how a Hindi bill says 'still outstanding'." },
        { id: "hi-u85l1-patttaa", type: "vocab", front: "पट्टा", reading: "patttaa", meaning: "a lease on land", accept: ["a written grant of land for a term", "a tenancy document"], example: { jp: "ज़मीन का पट्टा तीस साल के लिए मिला।", en: "The lease on the land was given for thirty years." }, drill: { jp: "ज़मीन का पट्टा तीस साल के लिए मिला", en: "The land lease was given for thirty years" }, hint: "PAT-TTAA, masculine, regular -ा. 🚨 **THE READING HAS THREE t's AND THAT IS §1(b)'s DOUBLING HATCH FIRING.** पत्ता, a leaf (unit 21), is a geminate DENTAL त and reads pattaa; this word is a geminate RETROFLEX ट, so it takes one more t to stay a different word — exactly as साठ (unit 11) takes saatth against साथ saath." },
        { id: "hi-u85l1-bayaanaa", type: "vocab", front: "बयाना", reading: "bayaanaa", meaning: "money put down to hold a deal", accept: ["a deposit paid in advance", "earnest money"], example: { jp: "दुकान के लिए उसने बयाना दे दिया।", en: "He put down a deposit for the shop." }, drill: { jp: "दुकान के लिए उसने बयाना दे दिया", en: "He put down a deposit for the shop" }, hint: "BA-YAA-NAA, masculine. ⚠️ **IT LOOKS EXACTLY LIKE A VERB INFINITIVE AND IS A NOUN** — the बहाना class (unit 57), and there is no verb बयाना anywhere in Hindi. Not जमा (unit 37), 'deposited': a बयाना is the part-payment that stops the seller selling to anybody else." },
      ],
    },
    {
      id: "hi-u85l2",
      unit: 85,
      lesson: 2,
      title: "Fixing the price",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Haggle: talk about bargaining, wholesale and retail, a sum of money, a payment and a middleman's cut.",
      items: [
        { id: "hi-u85l2-molbhaav", type: "vocab", front: "मोलभाव", reading: "molbhaav", meaning: "haggling over a price", accept: ["beating a seller down", "going back and forth over what to pay"], example: { jp: "बाज़ार में मोलभाव किए बिना कोई नहीं खरीदता।", en: "In the market nobody buys without haggling." }, drill: { jp: "बाज़ार में मोलभाव किए बिना कोई नहीं खरीदता", en: "In the market nobody buys without haggling" }, hint: "MOL-BHAAV, masculine, consonant-final. मोल (a price) plus भाव (a rate) — two words for the same thing, joined, which is how Hindi makes the back-and-forth. ⚠️ Not सौदा (unit 37): the सौदा is the deal you reach, the मोलभाव is the argument on the way to it." },
        { id: "hi-u85l2-thok", type: "vocab", front: "थोक", reading: "thok", meaning: "wholesale", accept: ["buying or selling in bulk", "by the sackful rather than singly"], example: { jp: "वह थोक में सामान खरीदकर बेचता है।", en: "He buys goods wholesale and sells them." }, drill: { jp: "वह थोक में सामान खरीदकर बेचता है", en: "He buys goods wholesale and sells them" }, hint: "THOK, masculine, consonant-final, **DENTAL थ** — tongue on the teeth, then a puff. ⚠️ Read it against ठोकना thoknaa, to hammer in (unit 60), which opens with the RETROFLEX ठ: two different letters that §1(b) merges to th, and the words are kept apart by the rest of the string. Its frame is थोक में." },
        { id: "hi-u85l2-phutkar", type: "vocab", front: "फुटकर", reading: "phutkar", meaning: "retail", accept: ["sold singly to the public", "by the piece rather than in bulk"], example: { jp: "फुटकर में हर चीज़ महँगी पड़ती है।", en: "Everything costs more retail." }, drill: { jp: "फुटकर में हर चीज़ महँगी पड़ती है", en: "Everything costs more retail" }, hint: "PHUT-KAR, masculine, consonant-final. ph is one puff of air, not f; the ट is RETROFLEX. The exact opposite of थोक and the two are taught side by side on purpose — a Hindi shop sign says थोक एवं फुटकर, 'wholesale and retail'." },
        { id: "hi-u85l2-rakam", type: "vocab", front: "रकम", reading: "rakam", meaning: "a sum of money", accept: ["an amount in cash", "the figure to be paid"], example: { jp: "इतनी बड़ी रकम एक बार में नहीं दी जा सकती।", en: "So large a sum cannot be given at once." }, drill: { jp: "इतनी बड़ी रकम एक बार नहीं मिलती", en: "So large a sum does not come at once" }, hint: "RA-KAM — ⚠️ FEMININE and CONSONANT-FINAL: रकम बड़ी है, not बड़ा. Plain क. ⚠️ Not पैसा (unit 18), which is money in general, and not कीमत (unit 18), which is a price: a रकम is a specific figure somebody owes or hands over." },
        { id: "hi-u85l2-bhugtaan", type: "vocab", front: "भुगतान", reading: "bhugtaan", meaning: "a payment", accept: ["the settling of what is owed", "paying a sum over"], example: { jp: "काम पूरा होने पर भुगतान किया जाएगा।", en: "The payment will be made when the work is finished." }, drill: { jp: "काम पूरा होने पर भुगतान किया जाएगा", en: "Payment will be made when the work is finished" }, hint: "BHUG-TAAN, masculine, consonant-final, भ with a puff of air, DENTAL त. ⚠️ Not किस्त (unit 37), which is 'an instalment' and accepts 'a part payment': a भुगतान is the whole thing settled, and it is the word on a contract. The example is unit 80's passive in the future." },
        { id: "hi-u85l2-kamiishan", type: "vocab", front: "कमीशन", reading: "kamiishan", meaning: "a cut taken by a middleman", accept: ["an agent's share of a deal", "a commission"], example: { jp: "दलाल ने सौदे में अपना कमीशन रखा।", en: "The broker kept his cut from the deal." }, drill: { jp: "दलाल ने सौदे में अपना कमीशन रखा", en: "The broker kept his cut from the deal" }, hint: "KA-MII-SHAN, masculine, consonant-final. ⚠️ Glossed 'a cut taken by a middleman' and not 'a commission' — §9 forbids a loanword whose gloss is its own reading, and the two were close enough to matter. In India the word carries a faint accusation with it." },
      ],
    },
    {
      id: "hi-u85l3",
      unit: 85,
      lesson: 3,
      title: "Surety, cover and the penalty",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about a guarantee, a warranty, insurance, bail, a thing pledged against a loan, and a fine.",
      items: [
        { id: "hi-u85l3-gaarantii", type: "vocab", front: "गारंटी", reading: "gaarantii", meaning: "a promise that a thing will work", accept: ["a guarantee", "an assurance given by a seller"], example: { jp: "इस फ़ोन की गारंटी एक साल की है।", en: "This phone's guarantee is for one year." }, drill: { jp: "इस फ़ोन की गारंटी एक साल की है", en: "This phone's guarantee is for one year" }, hint: "GAA-RAN-TII — ⚠️ FEMININE. Its ं comes before DENTAL ट… in fact the ट here is RETROFLEX, and the ं before it is still written n (§1). Plain ग. ⚠️ A गारंटी says it will work; a वारंटी (l3) says what the seller will do if it does not — the distinction Indian shops make out loud." },
        { id: "hi-u85l3-vaarantii", type: "vocab", front: "वारंटी", reading: "vaarantii", meaning: "a seller's written undertaking to repair", accept: ["a warranty", "the paper covering repairs for a term"], example: { jp: "वारंटी के अंदर मरम्मत मुफ़्त होती है।", en: "Within the warranty the repair is free." }, drill: { jp: "वारंटी के अंदर मरम्मत मुफ़्त होती है", en: "Within the warranty the repair is free" }, hint: "VAA-RAN-TII — ⚠️ FEMININE, and spelled and said almost exactly like गारंटी: the first letter is the whole difference. ⚠️ Both are glossed the long way on purpose (§9), and their glosses differ in a WORD rather than a parenthetical — 'will work' against 'will repair'." },
        { id: "hi-u85l3-biimaa", type: "vocab", front: "बीमा", reading: "biimaa", meaning: "insurance", accept: ["cover bought against a loss", "a policy paid for in instalments"], example: { jp: "गाड़ी का बीमा हर साल करवाना पड़ता है।", en: "The vehicle's insurance has to be got done every year." }, drill: { jp: "गाड़ी का बीमा हर साल करवाना पड़ता है", en: "The vehicle's insurance has to be renewed every year" }, hint: "BII-MAA, masculine and regular -ा, which §4's rule predicts. ⚠️ Its verb is करवाना (unit 80) — बीमा करवाना, to have the insurance done, because nobody insures his own car himself. बीमा कंपनी is an insurance company." },
        { id: "hi-u85l3-jamaanat", type: "vocab", front: "जमानत", reading: "jamaanat", meaning: "bail", accept: ["surety given to free somebody from custody", "a person or sum standing as security"], example: { jp: "अदालत ने जमानत पर छोड़ दिया।", en: "The court released him on bail." }, drill: { jp: "अदालत ने उसे जमानत पर छोड़ दिया", en: "The court released him on bail" }, hint: "JA-MAA-NAT — ⚠️ FEMININE and CONSONANT-FINAL: जमानत हुई, not हुआ. DENTAL त. ⚠️ It CONTAINS the letters of जमा, deposited (unit 37), and the match CANNOT fire — the letter after it is न, and `findWholeWord` is blocked by a letter. Checked, not assumed." },
        { id: "hi-u85l3-girvii", type: "vocab", front: "गिरवी", reading: "girvii", meaning: "a thing pledged against a loan", accept: ["something left as security", "put in pawn"], example: { jp: "उसने अपनी अंगूठी गिरवी रख दी।", en: "He pawned his ring." }, drill: { jp: "उसने अपनी अंगूठी गिरवी रख दी", en: "He pawned his ring" }, hint: "GIR-VII — ⚠️ FEMININE despite the -ी, which here is NOT the पानी class but simply a feminine noun. Plain ग. ⚠️ Its frame is गिरवी रखना, to put in pawn, and गिरवी रखा हुआ, pawned — the noun never stands alone." },
        { id: "hi-u85l3-jurmaanaa", type: "vocab", front: "जुर्माना", reading: "jurmaanaa", meaning: "a fine in money", accept: ["a sum you must pay for breaking a rule", "a monetary penalty"], example: { jp: "देर से भुगतान पर जुर्माना लगता है।", en: "A fine is charged on late payment." }, drill: { jp: "देर से भुगतान पर जुर्माना लगता है", en: "A fine is charged on late payment" }, hint: "JUR-MAA-NAA, masculine. ⚠️ **ANOTHER NOUN THAT LOOKS LIKE A VERB INFINITIVE** — the बहाना class (unit 57) and the eighth in the language. The verb is लगना or लगाना. ⚠️ Glossed 'a fine in money' because सज़ा (unit 32) is 'a punishment' and ACCEPTS 'a penalty'." },
      ],
    },
    {
      id: "hi-u85l4",
      unit: 85,
      lesson: 4,
      title: "Contracts, bids and who inherits",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about a works contract, a tender for work, an auction, a broker, property and an heir.",
      items: [
        { id: "hi-u85l4-thekaa", type: "vocab", front: "ठेका", reading: "thekaa", meaning: "a contract for work", accept: ["a job given out to be done for a price", "a works contract"], example: { jp: "सड़क बनाने का ठेका एक नई कंपनी को मिला।", en: "The contract to build the road went to a new company." }, drill: { jp: "सड़क बनाने का ठेका नई कंपनी को मिला", en: "The road contract went to a new company" }, hint: "THE-KAA, masculine, regular -ा, **RETROFLEX ठ** — tongue curled back, then a puff. ⚠️ Read it against थोक thok (l2), which is DENTAL थ. ⚠️ Not अनुबंध (l1), which is the PAPER: a ठेका is the JOB handed out, and ठेकेदार, a contractor, is the man who takes it — a job title, so this course does not card it." },
        { id: "hi-u85l4-nividaa", type: "vocab", front: "निविदा", reading: "nividaa", meaning: "a tender for a works contract", accept: ["a sealed offer to do work at a price", "a formal bid invited by an office"], example: { jp: "ठेका देने से पहले निविदा मँगवाई जाती है।", en: "A tender is called for before the contract is given." }, drill: { jp: "ठेका देने से पहले निविदा मँगवाई जाती है", en: "A tender is called for before the contract is given" }, hint: "NI-VI-DAA — ⚠️ FEMININE despite the -ा, the धारा and आपदा class. DENTAL द. ⚠️ A WRITTEN-REGISTER word, the kind unit 83 is about: a government office issues a निविदा and nobody says the word aloud. The example is unit 80's passive." },
        { id: "hi-u85l4-niilaamii", type: "vocab", front: "नीलामी", reading: "niilaamii", meaning: "an auction", accept: ["a public sale to the highest bidder", "selling by open bidding"], example: { jp: "बैंक ने उस ज़मीन की नीलामी कर दी।", en: "The bank put that land up for auction." }, drill: { jp: "बैंक ने उस ज़मीन की नीलामी कर दी", en: "The bank put that land up for auction" }, hint: "NII-LAA-MII — ⚠️ FEMININE, long ii at both ends. The verb is करना — नीलामी करना — and नीलाम होना is 'to be auctioned off', which is what a bank does to a defaulter's house. Not मोलभाव (l2): a नीलामी drives the price UP." },
        { id: "hi-u85l4-dalaal", type: "vocab", front: "दलाल", reading: "dalaal", meaning: "a broker", accept: ["a middleman who arranges a deal", "an agent between buyer and seller"], example: { jp: "ज़मीन का सौदा दलाल के ज़रिए हुआ।", en: "The land deal was done through a broker." }, drill: { jp: "ज़मीन का सौदा दलाल के ज़रिए हुआ", en: "The land deal was done through a broker" }, hint: "DA-LAAL, masculine, consonant-final, DENTAL द, so the plural is the bare form: दो दलाल. ⚠️ The word is NOT neutral in Hindi — it carries the suggestion that he takes more than he earns, which is why कमीशन (l2) and this card sit in the same unit." },
        { id: "hi-u85l4-sampatti", type: "vocab", front: "संपत्ति", reading: "sampatti", meaning: "property", accept: ["land and houses somebody owns", "an estate held in law"], example: { jp: "पूरी संपत्ति बेटी के नाम कर दी गई।", en: "The whole property was put in the daughter's name." }, drill: { jp: "पूरी संपत्ति बेटी के नाम कर दी गई", en: "The whole property was put in the daughter's name" }, hint: "SAM-PAT-TI — ⚠️ FEMININE. Its ं sits before प, so §1's homorganic rule makes it **m**, as in कंप्यूटर kampyuutar (unit 9) — the one nasal in this unit that is not n. The त्त is a doubled DENTAL त." },
        { id: "hi-u85l4-vaaris", type: "vocab", front: "वारिस", reading: "vaaris", meaning: "an heir", accept: ["the one who inherits", "who a property passes to"], example: { jp: "उनके बाद कोई वारिस नहीं बचा।", en: "After them no heir was left." }, drill: { jp: "उनके बाद कोई वारिस नहीं बचा", en: "After them no heir was left" }, hint: "VAA-RIS, masculine, consonant-final, so the plural is the bare form: दो वारिस. ⚠️ A legal STANDING and not a job, which is why it is carded here beside गवाह, a witness (unit 42), rather than left for a trades unit. वसीयत, a will (unit 59), is the paper that names one." },
      ],
    },
  ],
};
