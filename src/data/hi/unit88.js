// HI Unit 88 — चुनाव और दल ("Elections and parties") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 5 (B1)"). Theme ASSIGNED CENTRALLY;
// probed at **2 of 18 taken** against all 1,382 non-glyph hi fronts, 2026-10-05.
//
// 🚨 THE SLOT IS THE ELECTION MACHINERY ONLY, AND THAT BOUNDARY IS THE WHOLE
// REASON THIS UNIT EXISTS SEPARATELY FROM u42. A2's u42 समाज और सरकार already
// owns the STATE: सरकार, नेता, मंत्री, कानून, अदालत, वोट, जनता, नागरिक, अपराध,
// जेल, गवाह, मुकदमा, इंसाफ़, फ़ौज, सिपाही, झंडा, विरोध, भाषण, सेवा. Every one of
// those is USED in this unit's sentences and NOT re-taught, which is what the
// lower-slot rule is for. What u42 had no word for is how a government is CHOSEN
// and REPLACED — no election, no party, no candidate, no voter, no parliament, no
// constitution, no coalition, no campaign, no strike.
//
// ⚠️ TWO OF THE EIGHTEEN PROBE WORDS WERE ALREADY TAKEN AND ARE NOT CARDED HERE:
//   • विरोध (u42l4, opposition) — which is also why विपक्ष IS NOT CARDED: पक्ष
//     (u57l3, a side in an argument) is a strict substring of विपक्ष with a mātrā
//     in front of it, so the router really would match it, and the two are the same
//     lexeme family. कार्यकाल takes that slot instead.
//   • प्रचार (u44l4, publicity) — अभियान carries the organised-push sense and its
//     hint draws the line.
// ⚠️ AND बहुमत / अल्पमत ARE **BLOCK 1'S**, in u63 (quantity abstraction: औसत,
//   अनुपात, दर, स्तर, पैमाना, मात्रा, बहुमत, अल्पमत). They appear nowhere here —
//   not as a front and not in a sentence — which is why u88l4's coalition example
//   says "किसी एक दल की सरकार नहीं बनी" and not "बहुमत नहीं मिला".
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: संसद, समिति, नीति, सत्ता, घोषणा, हड़ताल. **संसद and हड़ताल are
//   CONSONANT-FINAL**, so nothing in the shape says so — संसद बड़ी है, not बड़ा.
//   MASCULINE: चुनाव, मतदान, मतदाता, उम्मीदवार, दल, अभियान, सांसद, संविधान,
//   विधेयक, प्रतिनिधि, लोकतंत्र, शासन, राष्ट्र, कार्यकाल, गठबंधन, नारा, सुधार,
//   भ्रष्टाचार.
//   ⚠️ **मतदाता IS MASCULINE AND DOES NOT CHANGE FOR A WOMAN** — the -ता agent
//   suffix is fixed, exactly like नेता (u42l1). ⚠️ **घोषणा ENDS IN -ना AND IS A
//   NOUN**, the सूचना (u44) / प्रार्थना (u51) class. No verb is carded in this unit.
//
// ⚠️ SUBSTRING TRAPS, CHECKED AGAINST `findWholeWord`'s REAL BOUNDARY TEST.
// `isLetter` is `/\p{L}/` only, so a MĀTRĀ, an ANUSVĀRA and a HALANT do NOT block
// a match. FOUR fire; six look like they should and CANNOT:
//   THESE FIRE:
//   • बादल (u16l4, a cloud) ⊃ दल — the ा before it is \p{M}.
//   • दलील (u39l3, a point made in argument) ⊃ दल — the ी after it is \p{M}.
//   • भ्रष्टाचार ⊃ चार (u2l1, four) — the ा before चार is \p{M}. Pre-existing in
//     this corpus: प्रचार (u44l4) and विचार (u47l2) fire identically.
//   • हड़ताल — see below, it does NOT fire; listed here only so it is not re-checked.
//   THESE CANNOT FIRE, because the neighbouring character IS a letter:
//   • मतदान / मतदाता ⊃ मत (u22l4, do not) — द follows.
//   • उम्मीदवार ⊃ उम्मीद (u27l1, hope) — व follows. Named in the hint as the hook.
//   • हड़ताल ⊃ ताल (u58l1, a rhythm) — ड़ precedes.
//   • गठबंधन vs बंद (u5l1) — NOT a substring at all (ध ≠ द).
//   • सांसद vs संसद — NEITHER is a substring of the other (ा vs ं after स).
//   • नीति ⊃ नी — not a front; राजनीति is not carded anywhere.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): गठबंधन gathbandhan and राष्ट्र raashtra are RETROFLEX
// (ठ, ष्ट) with no dental twin; मतदान, संविधान, सुधार are DENTAL. 24 new readings,
// 24 distinct, zero collisions against all 1,382. ⚠️ ONE READING PAIR IS ONE MĀTRĀ
// APART AND BOTH ARE IN THIS UNIT — संसद sansad vs सांसद saansad; the length of the
// first a is the whole difference, which is unit 1's कम/काम rule in a new place.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit. Zero free passes.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: राष्ट्रपति,
// प्रधानमंत्री, घोटाला (a scam — भ्रष्टाचार covers the field), जनमत, आरक्षण.
export const HI_UNIT88 = {
  id: "hi-u88",
  lang: "hi",
  title: "चुनाव और दल",
  order: 88,
  stage: "b1",
  lessons: [
    {
      id: "hi-u88l1",
      unit: 88,
      lesson: 1,
      title: "Going to the polls",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that an election was held, that polling opened at seven, how many voters a district has, and that each party chose its candidate and ran a campaign.",
      items: [
        { id: "hi-u88l1-chunaav", type: "vocab", front: "चुनाव", reading: "chunaav", meaning: "an election", accept: ["a general election"], example: { jp: "इस साल चुनाव के बाद नई सरकार आई।", en: "This year a new government came in after the election." }, drill: { jp: "इस साल चुनाव के बाद नई सरकार आई", en: "This year a new government came in after the election" }, hint: "CHU-NAAV, masculine and consonant-final, so the plural is the bare form. 🚨 BUILT STRAIGHT OFF चुनना, to choose (unit 18) — the choosing itself, exactly as सुधार (l4) is built off सुधारना. The frames are चुनाव होना, an election takes place, and चुनाव लड़ना, to contest one." },
        { id: "hi-u88l1-matdaan", type: "vocab", front: "मतदान", reading: "matdaan", meaning: "polling", accept: ["the act of voting", "balloting"], example: { jp: "मतदान सुबह सात बजे शुरू हुआ और शाम तक चला।", en: "Polling began at seven in the morning and went on until evening." }, drill: { jp: "मतदान सुबह सात बजे शुरू हुआ", en: "Polling began at seven in the morning" }, hint: "MAT-DAAN, masculine. Two halves: मत, an opinion given, plus दान, a giving. ⚠️ NOT वोट (unit 42): a वोट is the one mark you make, मतदान is the whole act of voting. ⚠️ AND मत, do not (unit 22), is a string inside it — but the द that follows is a letter, so the router cannot match it." },
        { id: "hi-u88l1-matdaataa", type: "vocab", front: "मतदाता", reading: "matdaataa", meaning: "a voter", accept: ["a registered voter", "a member of the electorate"], example: { jp: "इस ज़िले में बीस लाख मतदाता हैं।", en: "In this district there are two million voters." }, drill: { jp: "इस ज़िले में बहुत मतदाता हैं", en: "In this district there are a great many voters" }, hint: "MAT-DAA-TAA, masculine — and ⚠️ IT DOES NOT CHANGE FOR A WOMAN. The -ता here is the AGENT suffix, one who does the thing, and it is fixed, exactly like नेता (unit 42). Same मत + दान as the last card, with दाता, a giver, in place of दान." },
        { id: "hi-u88l1-ummiidvaar", type: "vocab", front: "उम्मीदवार", reading: "ummiidvaar", meaning: "a candidate", accept: ["a person standing for election", "an applicant"], example: { jp: "हर दल ने अपना उम्मीदवार चुना।", en: "Every party chose its own candidate." }, drill: { jp: "हर दल ने अपना उम्मीदवार चुना", en: "Every party chose its own candidate" }, hint: "UM-MIID-VAAR, masculine. GEMINATION म्म — you hear both m's, um-miid. 🚨 BUILT ON उम्मीद, hope (unit 27), and that is the whole picture of the word: a candidate is one who carries a hope. उम्मीद sits inside it, but the व that follows is a letter, so the router cannot match it. Also of a job applicant." },
        { id: "hi-u88l1-dal", type: "vocab", front: "दल", reading: "dal", meaning: "a political party", accept: ["a party", "an organised group"], example: { jp: "संसद में सबसे बड़े दल की सरकार बनती है।", en: "The government is formed by the largest party in parliament." }, drill: { jp: "सबसे बड़े दल की सरकार बनी", en: "The government of the largest party was formed" }, hint: "DAL, masculine and consonant-final. ⚠️ READ IT AGAINST दाल daal, lentils (unit 13) — one mātrā apart, and the length of the a is the only thing keeping them apart, which is unit 1's कम/काम rule exactly. 🚨 TWO TAUGHT WORDS HIDE IT AND NEITHER IS RELATED: बादल, a cloud (unit 16), and दलील (unit 39) — in both, the neighbouring character is a mātrā, not a letter." },
        { id: "hi-u88l1-abhiyaan", type: "vocab", front: "अभियान", reading: "abhiyaan", meaning: "a campaign", accept: ["an organised drive"], example: { jp: "चुनाव से पहले हर दल ने अपना अभियान शुरू किया।", en: "Before the election every party started its own campaign." }, drill: { jp: "चुनाव से पहले अभियान शुरू हुआ", en: "The campaign began before the election" }, hint: "A-BHI-YAAN, masculine and consonant-final. भ carries a puff of air. ⚠️ WIDER THAN प्रचार (unit 44, publicity): प्रचार is the noise you make, an अभियान is the organised push behind it — and the same word is used for a health drive or a cleanliness drive, not only for an election." },
      ],
    },
    {
      id: "hi-u88l2",
      unit: 88,
      lesson: 2,
      title: "Parliament and the constitution",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Tell parliament apart from a member of it, say what rights the constitution gives a citizen, and talk about a bill, a committee and a representative.",
      items: [
        { id: "hi-u88l2-sansad", type: "vocab", front: "संसद", reading: "sansad", meaning: "parliament", accept: ["the national parliament"], example: { jp: "यह कानून संसद ने बनाया।", en: "Parliament made this law." }, drill: { jp: "यह कानून संसद ने बनाया", en: "Parliament made this law" }, hint: "SAN-SAD — ⚠️ FEMININE **AND CONSONANT-FINAL**, so nothing in the shape says so: संसद बड़ी है, not बड़ा. The ं before स is the matching nasal, so it reads san. 🚨 READ IT AGAINST THE NEXT CARD — सांसद is a MEMBER of it, and one mātrā is the whole difference." },
        { id: "hi-u88l2-saansad", type: "vocab", front: "सांसद", reading: "saansad", meaning: "a member of parliament", accept: ["an MP"], example: { jp: "इस शहर के सांसद ने संसद में भाषण दिया।", en: "This city's member of parliament gave a speech in parliament." }, drill: { jp: "इस शहर के सांसद ने भाषण दिया", en: "This city's member of parliament gave a speech" }, hint: "SAAN-SAD, masculine, and it does not change for a woman. 🚨 ONE MĀTRĀ FROM संसद: the body is संसद with a SHORT a, a person in it is सांसद with a LONG aa. Neither is a string inside the other — after स comes ा in one and ं in the other — so the router keeps them apart; your ear has to as well." },
        { id: "hi-u88l2-samvidhaan", type: "vocab", front: "संविधान", reading: "samvidhaan", meaning: "a constitution", accept: ["the constitution of a country"], example: { jp: "देश का संविधान हर नागरिक को कुछ हक देता है।", en: "The country's constitution gives every citizen certain rights." }, drill: { jp: "संविधान हर नागरिक को हक देता है", en: "The constitution gives every citizen rights" }, hint: "SAM-VI-DHAAN, masculine. ⚠️ THE ं BEFORE व READS **m**, not n — samvidhaan, the labial nasal, the same way संपर्क is sampark (unit 43). ध carries a puff of air. ⚠️ Bigger than a कानून (unit 42): a कानून is one law, the संविधान is the book every law must obey." },
        { id: "hi-u88l2-vidheyak", type: "vocab", front: "विधेयक", reading: "vidheyak", meaning: "a bill in parliament", accept: ["a draft law", "a legislative bill"], example: { jp: "सांसदों ने इस विधेयक पर दो दिन बात की।", en: "The members of parliament talked about this bill for two days." }, drill: { jp: "सांसदों ने इस विधेयक पर बात की", en: "The members of parliament talked about this bill" }, hint: "VI-DHE-YAK, masculine and consonant-final. A कानून (unit 42) that is not a कानून yet — a draft the संसद has to agree to first. ⚠️ Not बिल (unit 37), which in Hindi is only the printed bill you pay in a shop; the two English words are one, the two Hindi words are not." },
        { id: "hi-u88l2-samiti", type: "vocab", front: "समिति", reading: "samiti", meaning: "a committee", accept: ["a working committee"], example: { jp: "सरकार ने इस मुद्दे पर एक समिति बनाई।", en: "The government set up a committee on this issue." }, drill: { jp: "सरकार ने एक नई समिति बनाई", en: "The government set up a new committee" }, hint: "SA-MI-TI — ⚠️ FEMININE, and ⚠️ THE FINAL ि IS SHORT: samiti, not samitii, which is unusual for a Hindi noun and is the thing to get right. A small group handed one job, where a पंचायत (unit 49) is a village's own standing council." },
        { id: "hi-u88l2-pratinidhi", type: "vocab", front: "प्रतिनिधि", reading: "pratinidhi", meaning: "a representative", accept: ["a delegate", "one who stands in for others"], example: { jp: "हर गाँव ने अपना एक प्रतिनिधि भेजा।", en: "Every village sent one representative of its own." }, drill: { jp: "हर गाँव ने अपना प्रतिनिधि भेजा", en: "Every village sent its own representative" }, hint: "PRA-TI-NI-DHI, masculine, and ⚠️ BOTH FINAL VOWELS ARE SHORT — pratinidhi. प्र is a stacked conjunct (unit 6) and ध carries a puff of air. One who stands in for others: a सांसद is a प्रतिनिधि, and so is the person your गाँव sends to a समिति." },
      ],
    },
    {
      id: "hi-u88l3",
      unit: 88,
      lesson: 3,
      title: "Policy, power and the nation",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a policy helped the poor, that in a democracy the power lies with the people, how long a king's rule or a government's term lasts, and that the flag belongs to the whole nation.",
      items: [
        { id: "hi-u88l3-niiti", type: "vocab", front: "नीति", reading: "niiti", meaning: "a policy", accept: ["a line a government takes"], example: { jp: "सरकार की नई नीति से गरीब लोगों को फ़ायदा हुआ।", en: "Poor people benefited from the government's new policy." }, drill: { jp: "सरकार की नई नीति अच्छी है", en: "The government's new policy is good" }, hint: "NII-TI — ⚠️ FEMININE. LONG ii then SHORT i: niiti. ⚠️ Not नियम (unit 32): a नियम is one rule you follow, a नीति is the whole line a government decides to take. It is the second half of राजनीति, politics — which is not carded anywhere." },
        { id: "hi-u88l3-loktantra", type: "vocab", front: "लोकतंत्र", reading: "loktantra", meaning: "democracy", accept: ["rule by the people"], example: { jp: "लोकतंत्र में सबसे बड़ी ताकत जनता के पास होती है।", en: "In a democracy the greatest power lies with the people." }, drill: { jp: "लोकतंत्र में ताकत जनता के पास होती है", en: "In a democracy the power lies with the people" }, hint: "LOK-TAN-TRA, masculine, and त्र **KEEPS ITS OWN a** at the end — loktantra, the same ending as सूत्र suutra (unit 87). Two halves: लोक, the people, plus तंत्र, a system. The ं before त is the matching dental nasal (unit 5)." },
        { id: "hi-u88l3-sattaa", type: "vocab", front: "सत्ता", reading: "sattaa", meaning: "political power", accept: ["the right to rule", "office"], example: { jp: "चुनाव जीतने के बाद वह दल सत्ता में आया।", en: "After winning the election that party came to power." }, drill: { jp: "वह दल चुनाव के बाद सत्ता में आया", en: "That party came to power after the election" }, hint: "SAT-TAA — ⚠️ FEMININE. GEMINATION त्त: you hear both t's, sat-taa, unit 1's doubling rule. ⚠️ Not ताकत (unit 20), which is strength in a body or a thing — सत्ता is the right to rule, and it lives in two frames: सत्ता में आना, to come to power, and सत्ता में होना." },
        { id: "hi-u88l3-shaasan", type: "vocab", front: "शासन", reading: "shaasan", meaning: "rule over a country", accept: ["governance", "a reign"], example: { jp: "उस राजा का शासन चालीस साल चला।", en: "That king's rule lasted forty years." }, drill: { jp: "उस राजा का शासन चालीस साल चला", en: "That king's rule lasted forty years" }, hint: "SHAA-SAN, masculine and consonant-final. ⚠️ Not सरकार (unit 42): a सरकार is the people in office right now, शासन is the RULING itself — which is why a राजा (unit 50) has one too, and a सरकार does not have to be elected to have one." },
        { id: "hi-u88l3-raashtra", type: "vocab", front: "राष्ट्र", reading: "raashtra", meaning: "a nation", accept: ["a nation as a people"], example: { jp: "झंडा पूरे राष्ट्र का है, किसी एक दल का नहीं।", en: "The flag belongs to the whole nation, not to any one party." }, drill: { jp: "झंडा पूरे राष्ट्र का है", en: "The flag belongs to the whole nation" }, hint: "RAASH-TRA, masculine, and त्र keeps its a — raashtra. ष्ट is ष stacked on the RETROFLEX ट (unit 6), and ष reads sh like श (§1a). ⚠️ THREE WORDS, THREE THINGS: a देश (unit 8) is the land on a map, a राज्य (unit 49) a province inside it, a राष्ट्र the people who feel they are one." },
        { id: "hi-u88l3-kaaryakaal", type: "vocab", front: "कार्यकाल", reading: "kaaryakaal", meaning: "a term of office", accept: ["a tenure"], example: { jp: "इस सरकार का कार्यकाल अगले साल पूरा होगा।", en: "This government's term of office will be complete next year." }, drill: { jp: "इस सरकार का कार्यकाल अगले साल पूरा होगा", en: "This government's term of office will be complete next year" }, hint: "KAAR-YA-KAAL, masculine. Two halves: कार्य, work, plus काल, a stretch of time — the years an office is held for. The र् is a half र riding on the य (unit 6). ⚠️ Not मियाद (unit 48), which is a deadline you must finish BY; a कार्यकाल simply ends when it ends." },
      ],
    },
    {
      id: "hi-u88l4",
      unit: 88,
      lesson: 4,
      title: "Coalitions, slogans and what goes wrong",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that three parties formed a coalition, that a leader proclaimed a policy from a stage, that a crowd raised a slogan, and that corruption broke the public's trust and the workers struck.",
      items: [
        { id: "hi-u88l4-gathbandhan", type: "vocab", front: "गठबंधन", reading: "gathbandhan", meaning: "a coalition", accept: ["an alliance"], example: { jp: "किसी एक दल की सरकार नहीं बनी, तो तीन दलों ने गठबंधन बनाया।", en: "No single party's government was formed, so three parties made a coalition." }, drill: { jp: "तीन दलों ने गठबंधन बनाया", en: "Three parties made a coalition" }, hint: "GATH-BAN-DHAN, masculine. RETROFLEX ठ — tongue curled back, then a puff — and then the ं before ध as the matching dental nasal. Two halves, both from बाँधना, to tie (unit 20): गठ, a tying, plus बंधन, a binding. Of a marriage too." },
        { id: "hi-u88l4-ghoshnaa", type: "vocab", front: "घोषणा", reading: "ghoshnaa", meaning: "a proclamation", accept: ["a formal declaration"], example: { jp: "नेता ने मंच से अपनी नई नीति की घोषणा की।", en: "The leader proclaimed his new policy from the stage." }, drill: { jp: "नेता ने नई नीति की घोषणा की", en: "The leader proclaimed the new policy" }, hint: "GHOSH-NAA — ⚠️ FEMININE, and ⚠️ IT ENDS IN -ना AND IS A NOUN, not a verb — the सूचना (unit 44) and प्रार्थना (unit 51) class, where the medial a drops in speech: ghosh-naa. ⚠️ Heavier than ऐलान (unit 39): an ऐलान is any announcement, a घोषणा is a formal one. The frame is घोषणा करना." },
        { id: "hi-u88l4-naaraa", type: "vocab", front: "नारा", reading: "naaraa", meaning: "a slogan", accept: ["a chanted slogan"], example: { jp: "भीड़ ने एक ही नारा बार बार लगाया।", en: "The crowd raised the same slogan again and again." }, drill: { jp: "भीड़ ने एक ही नारा लगाया", en: "The crowd raised a slogan" }, hint: "NAA-RAA, masculine and regular -ा, so the plural is नारे and the oblique नारे. ⚠️ READ IT AGAINST नाराज़ naaraaz, displeased (unit 27) — the same two syllables, then a ज़. The frame is नारा लगाना, to raise a slogan, never बोलना." },
        { id: "hi-u88l4-sudhaar", type: "vocab", front: "सुधार", reading: "sudhaar", meaning: "a reform", accept: ["an improvement made"], example: { jp: "कानून में एक बड़ा सुधार हुआ और अदालत का काम तेज़ हुआ।", en: "A big reform was made in the law and the court's work got faster." }, drill: { jp: "कानून में एक बड़ा सुधार हुआ", en: "A big reform was made in the law" }, hint: "SU-DHAAR, masculine and consonant-final, ध with a puff of air. Built straight off सुधारना, to correct (unit 45) — the correction itself, exactly the way चुनाव (l1) is built off चुनना. Of a law, a school, a whole system, and of a person's own conduct." },
        { id: "hi-u88l4-bhrashtaachaar", type: "vocab", front: "भ्रष्टाचार", reading: "bhrashtaachaar", meaning: "corruption", accept: ["graft", "dishonesty in office"], example: { jp: "भ्रष्टाचार के कारण जनता का भरोसा टूट गया।", en: "Because of corruption the public's trust broke." }, drill: { jp: "भ्रष्टाचार के कारण जनता का भरोसा टूटा", en: "Because of corruption the public's trust broke" }, hint: "BHRASH-TAA-CHAAR, masculine. 🚨 FOUR THINGS AT ONCE: भ्र is a stacked conjunct, ष्ट is a second one (both unit 6), भ carries a puff of air, and the ष reads sh (§1a). ⚠️ चार, four (unit 2), is a string at its end and the ा before it is a mātrā, so the router CAN match it there — exactly as it can inside प्रचार (unit 44) and विचार (unit 47)." },
        { id: "hi-u88l4-hartaal", type: "vocab", front: "हड़ताल", reading: "hartaal", meaning: "a workers' strike", accept: ["a strike", "a shutdown"], example: { jp: "मज़दूरों ने तीन दिन की हड़ताल की और कारखाना बंद रहा।", en: "The labourers held a three-day strike and the factory stayed shut." }, drill: { jp: "मज़दूरों ने तीन दिन की हड़ताल की", en: "The labourers held a three-day strike" }, hint: "HAR-TAAL — ⚠️ FEMININE **AND CONSONANT-FINAL**: हड़ताल लंबी थी. ड़ is the curled-back flap written r (unit 4), so hartaal and never hadtaal. ⚠️ ताल, a rhythm (unit 58), sits at its end, but ड़ is a letter so the router cannot match it. The frame is हड़ताल करना." },
      ],
    },
  ],
};
