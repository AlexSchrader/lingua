// HI Unit 92 — विदेश और प्रवास ("Abroad and migration") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 9 (B1)"). Theme ASSIGNED CENTRALLY;
// probed at **3 of 16 taken** against all 1,382 non-glyph hi fronts, 2026-10-05.
//
// MEASURED HOLE: A2's u33 सफ़र taught the MECHANICS of travelling — रेल, पटरी,
// जहाज़, उड़ान, पासपोर्ट, बंदरगाह, टिकटघर, लाइन, देरी, अटैची, वापसी — and u49/u50
// taught the map (सरहद, इलाका, राज्य, महानगर, देहात, बस्ती). Neither gave the
// learner a word for LEAVING FOR GOOD: no abroad, no migration, no visa, no
// embassy, no refugee, no immigrant, no exile, no citizenship, no continent.
// A learner could buy a ticket and could not say why they were going.
//
// ⚠️ THE THREE PROBE WORDS ALREADY TAKEN, AND WHAT REPLACED EACH:
//   • पासपोर्ट (u33l3) and उड़ान (u33l3) are TAKEN, and both are USED here.
//   • बंदरगाह (u33l4, a harbour) is TAKEN, which is why no port word is carded.
//   • परंपरा (u47l1) and रिवाज़ (u47l1) are TAKEN, so संस्कृति carries the culture
//     slot and its hint draws the line between all three.
//   • विदेशी IS NOT CARDED on purpose: it is the same lexeme as विदेश in another
//     form (and विदेश is a strict prefix of it with a mātrā in between, so the
//     router would match). अनिवासी and मातृभूमि took the free slots instead.
//   • सोना, gold, IS NOT USED IN A SENTENCE HERE and the smuggling example was
//     rewritten to avoid it — unit60.js records that the token सोने is in scope
//     only as the VERB सोना, to sleep (u12l2), so "सोने की तस्करी" would have put
//     an out-of-scope reading in front of the learner while scope-hi stayed green.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: विदाई, नागरिकता, तस्करी, मुद्रा, संस्कृति, मातृभूमि.
//   🚨 **THREE FRONTS END IN -ी AND ARE MASCULINE** — शरणार्थी, आप्रवासी, अनिवासी,
//   the पानी/हाथी class of §4 — and none of the three changes for a woman.
//   🚨 **स्थायी AND अस्थायी END IN -ी AND DO NOT CHANGE AT ALL**: स्थायी काम AND
//   स्थायी नौकरी, because the -ी is part of the word and not a feminine ending.
//   ⚠️ **संस्कृति AND मातृभूमि END IN A SHORT ि** — sanskriti, maatribhuumi.
//   MASCULINE: विदेश, प्रवास, स्वदेश, तबादला, वीज़ा, दूतावास, राजदूत, आवेदन,
//   निर्वासन, विनिमय, अल्पसंख्यक, महाद्वीप. बसना is the unit's ONLY VERB, -ना per §5.
//
// ⚠️ SUBSTRING TRAPS. 🚨 THIS UNIT HAS A SECOND FIRES/DOES-NOT-FIRE PAIR AND BOTH
// MEMBERS ARE IN THE SAME LESSON, which is the clearest way to teach the rule:
//   • विदेश ⊃ देश (u8l2, a country) — **FIRES.** The ि before देश is a mātrā, and
//     `isLetter` is `/\p{L}/` only.
//   • स्वदेश ⊃ देश — **CANNOT FIRE.** The व before देश is a letter.
//   Same second half, same lesson, opposite answers; both hints say so.
// THE REST, each CHECKED rather than assumed, and NONE of them fires:
//   • नागरिकता ⊃ नागरिक (u42l2) — त follows. · आप्रवासी ⊃ प्रवास — आ precedes.
//   • अस्थायी ⊃ स्थायी — अ precedes, and अ IS a letter (the अहिंसा/हिंसा pattern
//     of u90l4). · बसना ⊃ बस (u1l4, a bus) — न follows.
//   • अल्पसंख्यक vs संख्या (u11l4) — NOT a substring either way (क ≠ ा).
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): शरणार्थी sharnaarthii is RETROFLEX (ण) with no dental
// twin; स्थायी sthaayii, अस्थायी asthaayii, दूतावास duutaavaas, राजदूत raajduut and
// तबादला tabaadlaa are DENTAL. 24 new readings, 24 distinct, zero collisions
// against all 1,382.
// ⚠️ FOUR READING PAIRS ARE ONE FEATURE APART and each is named in its own hint:
// मुद्रा mudraa vs मुद्दा muddaa (u47l2) — a र-stack against a doubled द ·
// राजदूत raajduut vs राज़ raaz (u47l3) — a plain ज against a NUKTA ज़ ·
// तबादला tabaadlaa vs तबाही tabaahii (u89l2) · विनिमय vinimay vs समय samay (u11l1).
// LOANWORD FREE-PASS CHECK (§9): ONE loanword, वीज़ा viizaa, glossed "a visa" —
// `normalizeMeaning` gives "visa" and the reading is "viizaa", so reading the gloss
// aloud does NOT answer the card. Zero free passes. Checked, not assumed.
// 🚨 SCRIPT NOTE: संस्कृति and मातृभूमि are the THIRD and FOURTH words in the whole
// course to use the ृ MĀTRĀ, after कृपया (u7l2) and कृति (u91l4). unit1.js §7
// leaves ृ uncarded and teaches it in the hint of each word that needs it; both
// hints here do that. Still uncarded, still correct.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: वतन (स्वदेश
// and मातृभूमि already fill the field), निर्वासित, बिरादरी, आवेदनपत्र.
export const HI_UNIT92 = {
  id: "hi-u92",
  lang: "hi",
  title: "विदेश और प्रवास",
  order: 92,
  stage: "b1",
  lessons: [
    {
      id: "hi-u92l1",
      unit: 92,
      lesson: 1,
      title: "Leaving the country",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that someone went abroad to study and came home twenty years later, that migration from village to city grew, and talk about a farewell, a job transfer and a family that settled somewhere for good.",
      items: [
        { id: "hi-u92l1-videsh", type: "vocab", front: "विदेश", reading: "videsh", meaning: "a foreign country", accept: ["abroad", "another country"], example: { jp: "वह पढ़ाई के लिए विदेश चला गया।", en: "He went abroad to study." }, drill: { jp: "विदेश जाना उसका सपना था", en: "Going abroad was his dream" }, hint: "VI-DESH, masculine. 🚨 देश, a country (unit 8), IS A STRING INSIDE IT, and the ि before it is a mātrā and not a letter, so the router **CAN** match it there. ⚠️ CONTRAST स्वदेश two cards down, where it cannot. The frame is विदेश जाना, never विदेश में जाना." },
        { id: "hi-u92l1-pravaas", type: "vocab", front: "प्रवास", reading: "pravaas", meaning: "migration", accept: ["going to live elsewhere", "a long stay away"], example: { jp: "गाँव से शहर का प्रवास हर पीढ़ी में बढ़ा।", en: "Migration from village to city grew with every generation." }, drill: { jp: "गाँव से शहर का प्रवास बढ़ा", en: "Migration from village to city grew" }, hint: "PRA-VAAS, masculine. प्र is a stacked conjunct (unit 6). Built on वास, a dwelling — the same वास as दूतावास (l2) and छात्रावास (unit 97). ⚠️ Not सफ़र (unit 29): a सफ़र is a journey you come back from, प्रवास is going to live somewhere else." },
        { id: "hi-u92l1-svadesh", type: "vocab", front: "स्वदेश", reading: "svadesh", meaning: "one's own country", accept: ["one's homeland on paper", "the country one belongs to"], example: { jp: "बीस साल बाद वह स्वदेश लौटा।", en: "Twenty years later he returned to his own country." }, drill: { jp: "हर आदमी को स्वदेश याद आता है", en: "Every man remembers his own country" }, hint: "SVA-DESH, masculine. स्व, one's own — a stacked conjunct (unit 6) — plus देश (unit 8). 🚨 AND HERE THE ROUTER **CANNOT** MATCH देश, because the व in front is a letter. Compare विदेश in this same lesson, where it can: same second half, opposite answer." },
        { id: "hi-u92l1-vidaaii", type: "vocab", front: "विदाई", reading: "vidaaii", meaning: "a farewell occasion", accept: ["a farewell", "a send-off", "a parting ceremony"], example: { jp: "दफ़्तर में उसकी विदाई का छोटा कार्यक्रम हुआ।", en: "A small farewell programme was held for her at the office." }, drill: { jp: "दफ़्तर में उसकी विदाई का कार्यक्रम हुआ", en: "A farewell programme was held for her at the office" }, hint: "VI-DAA-II — ⚠️ FEMININE. The last ई is INDEPENDENT because a mātrā cannot follow a mātrā (unit 3), exactly as in पढ़ाई (unit 34) and बढ़ई (unit 60). ⚠️ Not अलविदा (unit 7), which is the WORD you say; विदाई is the occasion — and it is what an Indian family calls a daughter's leaving after her शादी." },
        { id: "hi-u92l1-tabaadlaa", type: "vocab", front: "तबादला", reading: "tabaadlaa", meaning: "a job transfer", accept: ["a posting to another place"], example: { jp: "पिता का तबादला दूसरे शहर में हो गया।", en: "Father's transfer to another city came through." }, drill: { jp: "पिता का तबादला दूसरे शहर में हुआ", en: "Father's transfer to another city came through" }, hint: "TA-BAAD-LAA, masculine and regular -ा, so the oblique is तबादले. ⚠️ Read it against तबाही tabaahii, devastation (unit 89) — the same two opening syllables and no relation. Of a government servant above all: the सरकार (unit 42) moves you and you go." },
        { id: "hi-u92l1-basnaa", type: "vocab", front: "बसना", reading: "basnaa", meaning: "to settle down", accept: ["to settle somewhere for good", "to come to live"], example: { jp: "उसका परिवार तीन पीढ़ी पहले यहाँ बसा था।", en: "His family had settled here three generations ago." }, drill: { jp: "यहाँ बसना उसके लिए आसान नहीं था", en: "Settling here was not easy for him" }, hint: "BAS-NAA, and ⚠️ THE UNIT'S ONLY VERB, headworded -ना per §5. ⚠️ बस, a bus (unit 1), is a string at its start, but the न that follows is a letter, so the router cannot match it. Not रहना (unit 1): रहना is living somewhere now, बसना is arriving and staying for good — which is where बस्ती (unit 49) comes from." },
      ],
    },
    {
      id: "hi-u92l2",
      unit: 92,
      lesson: 2,
      title: "Papers and permission",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that an embassy gave someone a six-month visa, that a new ambassador arrived, that citizenship came after ten years, and that an application was sent and a job is not permanent.",
      items: [
        { id: "hi-u92l2-viizaa", type: "vocab", front: "वीज़ा", reading: "viizaa", meaning: "a visa", accept: ["an entry permit in a passport"], example: { jp: "दूतावास ने उसे छह महीने का वीज़ा दिया।", en: "The embassy gave him a six-month visa." }, drill: { jp: "उसका वीज़ा अगले महीने पूरा होगा", en: "His visa runs out next month" }, hint: "VII-ZAA, masculine. ज़ is the z of unit 4, so viizaa and never viijaa, and the ii is long. ⚠️ A LOANWORD, and its READING IS NOT ITS GLOSS — viizaa against \"visa\" — so saying the prompt aloud will not answer the card (§9). It goes inside a पासपोर्ट (unit 33), which Hindi borrowed too." },
        { id: "hi-u92l2-duutaavaas", type: "vocab", front: "दूतावास", reading: "duutaavaas", meaning: "an embassy", accept: ["a country's mission abroad"], example: { jp: "हर बड़े देश का दूतावास इस शहर में है।", en: "Every large country's embassy is in this city." }, drill: { jp: "हर देश का दूतावास इस शहर में है", en: "Every country's embassy is in this city" }, hint: "DUU-TAA-VAAS, masculine. Two halves: दूत, a messenger, plus वास, a dwelling — the same वास as प्रवास (l1) and छात्रावास (unit 97). It is the house of a राजदूत, the next card, and where you go for a वीज़ा." },
        { id: "hi-u92l2-raajduut", type: "vocab", front: "राजदूत", reading: "raajduut", meaning: "an ambassador", accept: ["a country's chief envoy"], example: { jp: "नया राजदूत कल अपने देश से आया।", en: "The new ambassador arrived from his country yesterday." }, drill: { jp: "राजदूत ने दूतावास में बात की", en: "The ambassador spoke at the embassy" }, hint: "RAAJ-DUUT, masculine. राज, rule, plus दूत, a messenger — a king's messenger, which is exactly what the job once was. ⚠️ READ IT AGAINST राज़ raaz, a secret (unit 47), whose ज़ carries a NUKTA dot: this word's ज is plain, so raaj and never raaz." },
        { id: "hi-u92l2-naagriktaa", type: "vocab", front: "नागरिकता", reading: "naagriktaa", meaning: "citizenship", accept: ["the status of being a citizen"], example: { jp: "दस साल रहने के बाद उसे नागरिकता मिली।", en: "After living there ten years he got citizenship." }, drill: { jp: "दस साल बाद उसे नागरिकता मिली", en: "After ten years he got citizenship" }, hint: "NAA-GRIK-TAA — ⚠️ FEMININE, like every -ता abstract noun, including नैतिकता in unit 90's title. Built on नागरिक, a citizen (unit 42), plus -ता, the suffix that turns a person into a condition. ⚠️ नागरिक sits inside it, but the त that follows is a letter, so the router cannot match it." },
        { id: "hi-u92l2-aavedan", type: "vocab", front: "आवेदन", reading: "aavedan", meaning: "a formal application", accept: ["an official application"], example: { jp: "उसने वीज़ा के लिए आवेदन भेजा।", en: "He sent an application for a visa." }, drill: { jp: "यह आवेदन अभी तक नहीं आया", en: "This application has not come yet" }, hint: "AA-VE-DAN, masculine, opening with the independent आ. ⚠️ THE GLOSS HAD TO SAY \"FORMAL\", because the grader strips a/an/the and \"an application\" is already अर्ज़ी's string (unit 34). The difference is real: an अर्ज़ी is a letter you write by hand, an आवेदन is the official one, usually on a प्रपत्र (unit 93)." },
        { id: "hi-u92l2-sthaayii", type: "vocab", front: "स्थायी", reading: "sthaayii", meaning: "permanent", accept: ["lasting", "not for a fixed term"], example: { jp: "उसका काम स्थायी नहीं, सिर्फ़ दो साल का है।", en: "His job is not permanent, it is only for two years." }, drill: { jp: "उसका काम स्थायी नहीं है", en: "His job is not permanent" }, hint: "STHAA-YII, an ADJECTIVE. स्थ is a stacked conjunct with a DENTAL थ (unit 6). 🚨 IT ENDS IN -ी AND STILL DOES NOT CHANGE — स्थायी काम AND स्थायी नौकरी alike, because the -ी is part of the word and not the feminine ending of §6. Its opposite is अस्थायी (l3)." },
      ],
    },
    {
      id: "hi-u92l3",
      unit: 92,
      lesson: 3,
      title: "Those who had to go",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that refugees came after a war, that every fourth person in a city is an immigrant, that non-residents send money home, and talk about exile, smuggling and temporary work.",
      items: [
        { id: "hi-u92l3-sharnaarthii", type: "vocab", front: "शरणार्थी", reading: "sharnaarthii", meaning: "a refugee", accept: ["one who fled and sought shelter"], example: { jp: "युद्ध के बाद लाखों शरणार्थी इस देश में आए।", en: "After the war hundreds of thousands of refugees came into this country." }, drill: { jp: "युद्ध के बाद लाखों शरणार्थी आए", en: "After the war hundreds of thousands of refugees came" }, hint: "SHAR-NAAR-THII — 🚨 MASCULINE DESPITE THE -ी, the पानी and हाथी class of unit 1 §4, and it does not change for a woman. Two halves: शरण, shelter, plus अर्थी, one who seeks. The ण is the RETROFLEX n, tongue curled back, written plain n (§1b)." },
        { id: "hi-u92l3-aapravaasii", type: "vocab", front: "आप्रवासी", reading: "aapravaasii", meaning: "an immigrant", accept: ["one who came in from abroad"], example: { jp: "इस शहर में हर चौथा आदमी आप्रवासी है।", en: "In this city every fourth man is an immigrant." }, drill: { jp: "यहाँ बहुत आप्रवासी काम करते हैं", en: "Many immigrants work here" }, hint: "AA-PRA-VAA-SII — ⚠️ MASCULINE DESPITE THE -ी, and it does not change for a woman. Built on प्रवास (l1) with आ-, the direction INTO: one who CAME. ⚠️ प्रवास sits inside it, but the आ in front is a letter, so the router cannot match it." },
        { id: "hi-u92l3-anivaasii", type: "vocab", front: "अनिवासी", reading: "anivaasii", meaning: "a non-resident Indian", accept: ["one who lives abroad but keeps the passport"], example: { jp: "अनिवासी हर साल बहुत पैसा घर भेजते हैं।", en: "Non-residents send a great deal of money home every year." }, drill: { jp: "अनिवासी हर साल पैसा घर भेजते हैं", en: "Non-residents send money home every year" }, hint: "A-NI-VAA-SII — ⚠️ MASCULINE DESPITE THE -ी. Three parts: अ, not, plus नि-वासी, a dweller. 🚨 THE WORD AN INDIAN FAMILY ACTUALLY USES for a relative living abroad who still holds the passport — the opposite side of the coin from आप्रवासी, who came into YOUR country." },
        { id: "hi-u92l3-nirvaasan", type: "vocab", front: "निर्वासन", reading: "nirvaasan", meaning: "exile", accept: ["banishment", "being sent out of a country"], example: { jp: "राजा ने उसे दस साल का निर्वासन दिया।", en: "The king gave him ten years of exile." }, drill: { jp: "निर्वासन सबसे सख्त सज़ा थी", en: "Exile was the harshest punishment" }, hint: "NIR-VAA-SAN, masculine. निर्, out — with the र् as a half र (unit 6) — plus वासन, dwelling: being made to live outside. ⚠️ Not सज़ा (unit 32), which is any punishment; निर्वासन is one particular सज़ा, and in the old stories it is the राजा's (unit 50) favourite one." },
        { id: "hi-u92l3-taskarii", type: "vocab", front: "तस्करी", reading: "taskarii", meaning: "smuggling", accept: ["running goods across a border illegally"], example: { jp: "पुलिस ने सरहद पर तस्करी का सामान पकड़ा।", en: "The police caught smuggled goods at the border." }, drill: { jp: "पुलिस ने तस्करी का सामान पकड़ा", en: "The police caught smuggled goods" }, hint: "TAS-KA-RII — ⚠️ FEMININE. स्क is a stacked conjunct (unit 6) — the same stack as संस्करण sanskaran (unit 91) and संस्कृति (l4). Taking goods across a सरहद (unit 50) without paying the टैक्स (unit 37); the person who does it is a तस्कर." },
        { id: "hi-u92l3-asthaayii", type: "vocab", front: "अस्थायी", reading: "asthaayii", meaning: "temporary", accept: ["for a fixed short term", "not lasting"], example: { jp: "यह काम अस्थायी है और छह महीने चलेगा।", en: "This work is temporary and will run for six months." }, drill: { jp: "उसकी नौकरी अस्थायी है", en: "His job is temporary" }, hint: "AS-THAA-YII, an ADJECTIVE, and like स्थायी (l2) it does NOT change for gender. 🚨 स्थायी WITH THE अ OF \"NOT\" IN FRONT — and because अ IS a letter, the router keeps the two cards cleanly apart, exactly the way अहिंसा and हिंसा stay apart (unit 90)." },
      ],
    },
    {
      id: "hi-u92l4",
      unit: 92,
      lesson: 4,
      title: "Money, culture and the wider world",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that every country has its own currency, get money changed at a bank, say that a country's culture shows in its food, and speak of a motherland, a minority community and a continent.",
      items: [
        { id: "hi-u92l4-mudraa", type: "vocab", front: "मुद्रा", reading: "mudraa", meaning: "a currency", accept: ["the money a country issues"], example: { jp: "हर देश की अपनी मुद्रा होती है।", en: "Every country has its own currency." }, drill: { jp: "इस देश की मुद्रा सस्ती है", en: "This country has a cheap currency" }, hint: "MUD-RAA — ⚠️ FEMININE. द्र is a stacked conjunct (unit 6). ⚠️ READ IT AGAINST मुद्दा muddaa, an issue (unit 47) — a र-stack against a DOUBLED द, and the two words are unrelated. Not पैसा (unit 18), which is money itself; a मुद्रा is the kind a country issues." },
        { id: "hi-u92l4-vinimay", type: "vocab", front: "विनिमय", reading: "vinimay", meaning: "an exchange of money", accept: ["a currency exchange", "a swap"], example: { jp: "बैंक में विनिमय का काम जल्दी हुआ।", en: "The money exchange was done quickly at the bank." }, drill: { jp: "विनिमय का काम बैंक करता है", en: "The bank does the exchange work" }, hint: "VI-NI-MAY, masculine. ⚠️ READ IT AGAINST समय samay, time (unit 11) — the same -मय ending and nothing else in common. The idea is swapping: you take one मुद्रा to a बैंक (unit 9) and come away with another." },
        { id: "hi-u92l4-sanskriti", type: "vocab", front: "संस्कृति", reading: "sanskriti", meaning: "culture", accept: ["a people's whole way of living"], example: { jp: "हर देश की संस्कृति उसके खाने में दिखती है।", en: "Every country's culture shows in its food." }, drill: { jp: "देश की संस्कृति उसके खाने में दिखती है", en: "A country's culture shows in its food" }, hint: "SANS-KRI-TI — ⚠️ FEMININE, and ⚠️ THE FINAL ि IS SHORT: sanskriti. 🚨 THE ृ MĀTRĀ, reading **ri** — the third word in the course to carry it, after कृपया (unit 7) and कृति (unit 91). ⚠️ Wider than रिवाज़ and परंपरा (unit 47): a रिवाज़ is one custom, a परंपरा one handed-down line, संस्कृति all of it at once." },
        { id: "hi-u92l4-maatribhuumi", type: "vocab", front: "मातृभूमि", reading: "maatribhuumi", meaning: "the motherland", accept: ["the land one feels one belongs to"], example: { jp: "वह साठ साल बाद अपनी मातृभूमि देखने आया।", en: "He came to see his motherland after sixty years." }, drill: { jp: "वह अपनी मातृभूमि देखने आया", en: "He came to see his motherland" }, hint: "MAA-TRI-BHUU-MI — ⚠️ FEMININE, and ⚠️ THE FINAL ि IS SHORT: bhuumi, never bhuumii. 🚨 THE ृ MĀTRĀ A FOURTH TIME: मातृ is the formal word for mother, भूमि for land. ⚠️ Not स्वदेश (l1): स्वदेश is the country on your passport, मातृभूमि the one you feel is yours." },
        { id: "hi-u92l4-alpsankhyak", type: "vocab", front: "अल्पसंख्यक", reading: "alpsankhyak", meaning: "a minority community", accept: ["a group that is few in number"], example: { jp: "संविधान हर अल्पसंख्यक को अपनी भाषा का हक देता है।", en: "The constitution gives every minority community the right to its own language." }, drill: { jp: "संविधान अल्पसंख्यक को हक देता है", en: "The constitution gives a minority community rights" }, hint: "ALP-SANKH-YAK, masculine, and also an adjective. Three parts: अल्प, few, plus संख्या, a number (unit 11), plus -क. ⚠️ THE ं BEFORE ख IS THE MATCHING NASAL, so it reads sankh (unit 5). Its opposite, बहुसंख्यक, is not carded anywhere." },
        { id: "hi-u92l4-mahaadviip", type: "vocab", front: "महाद्वीप", reading: "mahaadviip", meaning: "a continent", accept: ["one of the world's great land masses"], example: { jp: "इस महाद्वीप में पचास से ज़्यादा देश हैं।", en: "There are more than fifty countries on this continent." }, drill: { jp: "इस महाद्वीप में पचास देश हैं", en: "There are fifty countries on this continent" }, hint: "MA-HAAD-VIIP, masculine. Two halves: महा, great, plus द्वीप, an island — a great island, which is literally what a continent looked like on an old map. द्व is a stacked conjunct (unit 6). ⚠️ Read it against महानगर, a metropolis (unit 49), which shares the महा." },
      ],
    },
  ],
};
