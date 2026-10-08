// HI Unit 126 — ऊर्जा और बिजली ("Energy and electricity") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 6 (B2)"). Theme ASSIGNED CENTRALLY and
// probed at **8 of 18 taken** against the real 2,328-card corpus, 2026-10-06
// (committed evidence: `scripts/qa/theme-holes.mjs` + `theme-holes-hi.txt`).
//
// 🚨 BOTH TITLE WORDS ARE ALREADY CARDED AND NEITHER IS RE-CARDED HERE:
// **ऊर्जा is u87 ("physical energy") and बिजली is u15 ("electricity")**. The
// title is readable; the theme is what the corpus lacked around those two words.
//
// MEASURED HOLE: u15 gave बिजली, u87 ऊर्जा and परमाणु, u60 कोयला and तार, u43
// ईंधन and बैटरी, u86 जनरेटर, बिजलीघर and कटौती, u76 खपत and आपूर्ति, u45
// तापमान, u85 धारा. So a learner could say the power had been cut and **could
// not name a single source, fuel, machine or circuit part** — no solar, no wind,
// no hydro, no reactor, no petrol, no diesel, no steam, no turbine, no circuit,
// no conductor, no resistance, no voltage, no grid, no cable, no bulb.
//
// ⚠️ THREE-WAY BOUNDARY, READ ALL OF IT:
//   • **THIS UNIT OWNS THE SOURCE** — सौर, पवन, टरबाइन, भाप, विद्युत.
//   • **BLOCK 2's u122 (chemistry) OWNS THE REACTION** — अभिक्रिया, उत्प्रेरक and
//     विलयन appear in no card here.
//   • **u133 OWNS LIGHT** — प्रकाश, किरण, लेंस, अपवर्तन, वर्णक्रम are its, not
//     this unit's, which is why बल्ब here is glossed as the OBJECT and not as a
//     source of light.
//
// ⚠️ TWO REFUSALS SPECIFIC TO THIS UNIT, both for the same mechanical reason:
//   • **कुचालक ("an insulator") WAS REFUSED.** चालक is carded in the same lesson
//     and कुचालक is कु + चालक with a **mātrā** before it, so `findWholeWord`
//     matches the shorter card inside the longer one — the identical shape u97
//     refused for स्नातक / स्नातकोत्तर. One front, two cards, one blankable
//     string. The insulator is taught in चालक's hint instead, as a construction.
//   • **बाँध ("a dam") WAS REFUSED.** It is the bare imperative of बाँधना, to tie
//     (unit 20) — the same class as मानो / मानना that unit61.js §B4 names, and
//     nothing in the repo compares a front to a verb paradigm. जलविद्युत carries
//     the hydro ground instead.
//   • **जनित्र WAS REFUSED** on a gloss, not a form: जनरेटर@u86 already means a
//     machine that makes power. मोटर is carded instead, as the machine that
//     CONSUMES it.
//
// ⚠️ जलविद्युत (l1) AND विद्युत (l3) ARE BOTH CARDED, AND THAT IS SAFE —
// CHECKED, NOT ASSUMED. विद्युत sits inside जलविद्युत with a **ल** before it,
// and ल is a LETTER, so `findWholeWord` cannot match it: the same proof u97 used
// for शोधग्रंथ. Both hints say so.
//
// ⚠️ GENDER: FEMININE and unmarked — **ऊष्मा (-आ, against the rule), गैस, भाप,
// केबल**. MASCULINE — रिएक्टर, जलविद्युत, पेट्रोल, डीज़ल, इंजन, टरबाइन, विद्युत,
// परिपथ, चालक, प्रतिरोध, वोल्टेज, स्विच, ग्रिड, संचरण, बल्ब, ट्रांसफ़ॉर्मर, मोटर.
// सौर, पवन and नवीकरणीय are used attributively and take no gender of their own.
export const HI_UNIT126 = {
  id: "hi-u126",
  lang: "hi",
  title: "ऊर्जा और बिजली",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "hi-u126l1",
      unit: 126,
      lesson: 1,
      title: "Where the power comes from",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name solar, wind, hydro and nuclear power, say which sources are renewable, and talk about heat as a quantity.",
      items: [
        { id: "hi-u126l1-saur", type: "vocab", front: "सौर", reading: "saur", meaning: "solar", accept: ["run off the sun's light"], example: { jp: "छत पर सौर बिजली का इंतज़ाम लगाने से हर महीने पैसा बचता है।", en: "Putting a solar electricity arrangement on the roof saves money every month." }, drill: { jp: "छत पर सौर बिजली बनती है", en: "Solar electricity is made on the roof" }, hint: "SAUR — an ADJECTIVE used before a noun, so no gender change: सौर बिजली, सौर ऊर्जा. 🚨 THE DIPHTHONG औ, which is one vowel and not two (unit 3) — saur, never sa-ur. Built on सूर्य, the sun, which this course does not card; सूरज (unit 17) is the everyday word." },
        { id: "hi-u126l1-pavan", type: "vocab", front: "पवन", reading: "pavan", meaning: "wind as a power source", accept: ["moving air harnessed to turn something"], example: { jp: "समुद्र के पास पवन से बिजली बनाना सबसे सस्ता पड़ता है।", en: "Near the sea, making electricity from wind works out cheapest." }, drill: { jp: "यहाँ पवन से बिजली बनती है", en: "Electricity is made from wind here" }, hint: "PA-VAN, masculine, consonant-final. ⚠️ **THE GLOSS SAYS \"as a power source\" BECAUSE हवा (unit 17) OWNS THE AIR**, and the grader compares strings: पवन is the formal word, and in modern Hindi it turns up almost only in पवन ऊर्जा and पवन चक्की. For weather, a learner still says हवा." },
        { id: "hi-u126l1-jalvidyut", type: "vocab", front: "जलविद्युत", reading: "jalvidyut", meaning: "hydroelectricity", accept: ["power made by falling water"], example: { jp: "पहाड़ की नदियों से मिलने वाली जलविद्युत पूरे राज्य को चलाती है।", en: "The hydroelectricity that comes from the mountain rivers runs the whole state." }, drill: { jp: "यह जलविद्युत पहाड़ से आती है", en: "This hydroelectricity comes from the mountains" }, hint: "JAL-VID-YUT, masculine. जल, water, plus विद्युत, which is carded in l3 — 🚨 **AND THE ROUTER CANNOT MATCH विद्युत INSIDE IT**, because the ल before it is a LETTER, not a mātrā: the same proof u97 used for शोधग्रंथ. द्य is a stacked conjunct with a DENTAL द (unit 6). ⚠️ **बाँध, a dam, IS NOT CARDED** — it is the bare imperative of बाँधना (unit 20)." },
        { id: "hi-u126l1-riektar", type: "vocab", front: "रिएक्टर", reading: "riektar", meaning: "a reactor", accept: ["the vessel where a nuclear reaction is kept going"], example: { jp: "परमाणु रिएक्टर बंद करने में कई दिन लगते हैं।", en: "Shutting down a nuclear reactor takes several days." }, drill: { jp: "परमाणु रिएक्टर अभी बंद है", en: "The nuclear reactor is shut down at present" }, hint: "RI-EK-TAR, masculine, and ⚠️ **THE इ IS A FULL INDEPENDENT VOWEL IN THE MIDDLE OF THE WORD** — रि then ए, which is rare and is why it is written with the letter ए and not a mātrā: ri-ek, three vowel sounds in a row. Goes with परमाणु (unit 87). ⚠️ The REACTION itself is another unit's word (see the header)." },
        { id: "hi-u126l1-naviikaraniiy", type: "vocab", front: "नवीकरणीय", reading: "naviikaraniiy", meaning: "renewable", accept: ["that does not run out because it is made again"], example: { jp: "सौर और पवन नवीकरणीय हैं, कोयला नहीं।", en: "Solar and wind are renewable; coal is not." }, drill: { jp: "सौर और पवन नवीकरणीय हैं", en: "Solar and wind are renewable" }, hint: "NA-VII-KA-RA-NIIY — an ADJECTIVE, five syllables, and ⚠️ **TWO LONG ई's IN ONE WORD** with a short a between them. The ण is the RETROFLEX n. Built from नया, new (unit 6) in its Sanskritic form नव-. ⚠️ The longest front in this block, and it is worth it: it is the single word the whole energy argument turns on." },
        { id: "hi-u126l1-uushmaa", type: "vocab", front: "ऊष्मा", reading: "uushmaa", meaning: "heat as physics measures it", accept: ["thermal energy", "the quantity of heat in a thing"], example: { jp: "कोयले की ऊष्मा से पानी भाप बन जाता है।", en: "The heat of the coal turns the water into steam." }, drill: { jp: "कोयले की ऊष्मा से पानी गरम होता है", en: "The coal's heat makes the water hot" }, hint: "UUSH-MAA — ⚠️ FEMININE and -आ, which for once agrees with unit1 §4. It opens on the independent long ऊ (unit 1), and ष्म is ष stacked on म (unit 6) — ⚠️ the ष is the RETROFLEX sh, written sh like श (§1a). ⚠️ **THE GLOSS NAMES PHYSICS BECAUSE गरमी AND ऊर्जा (unit 87) ARE BOTH ALREADY STRINGS THE GRADER OWNS.**" },
      ],
    },
    {
      id: "hi-u126l2",
      unit: 126,
      lesson: 2,
      title: "The fuel you burn",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name petrol and diesel, say that burning a fuel releases heat, and that steam drives a turbine and an engine runs on it.",
      items: [
        { id: "hi-u126l2-petrol", type: "vocab", front: "पेट्रोल", reading: "petrol", meaning: "motor fuel for a car engine", accept: ["petrol", "the light fuel a car engine runs on"], example: { jp: "पेट्रोल महँगा हुआ तो लोग बस से जाने लगे।", en: "When petrol got expensive, people started going by bus." }, drill: { jp: "पेट्रोल बहुत महँगा हो गया है", en: "Petrol has become very expensive" }, hint: "PET-ROL, masculine, consonant-final, and ट्र is a stacked conjunct — a RETROFLEX ट with र under it (unit 6). 🚨 **ITS GLOSS IS NOT THE WORD \"petrol\", AND THAT IS NOT A STYLE CHOICE:** the reading IS `petrol`, so `checkProduce`, which accepts a card's own reading, let the learner type the prompt straight back. `tests/unit/free-pass.test.mjs` caught it and named this card by id; the gloss now describes the fuel and \"petrol\" sits in the accept list (§9)." },
        { id: "hi-u126l2-diizal", type: "vocab", front: "डीज़ल", reading: "diizal", meaning: "diesel", accept: ["the heavy fuel a truck or generator runs on"], example: { jp: "गाँव का जनरेटर डीज़ल से चलता है।", en: "The village generator runs on diesel." }, drill: { jp: "यह जनरेटर डीज़ल से चलता है", en: "This generator runs on diesel" }, hint: "DII-ZAL, masculine. ⚠️ **A RETROFLEX ड AND A NUKTA IN FOUR LETTERS**: ड is the curled-back d, merged to d in the reading (§1b), and ज़ is the z of unit 4. ⚠️ Read it against दीवाली and दीवार (unit 15), which open on a DENTAL द — the tongue is in a different place." },
        { id: "hi-u126l2-dahan", type: "vocab", front: "दहन", reading: "dahan", meaning: "burning that releases heat", accept: ["the burning of a fuel to get work out of it"], example: { jp: "इंजन में ईंधन का दहन होता है, और उससे निकली ऊष्मा पुर्ज़े को धक्का देती है।", en: "In an engine the fuel is burnt, and the heat that comes out of it pushes the part." }, drill: { jp: "इंजन में ईंधन का दहन होता है", en: "In an engine the fuel is burnt" }, hint: "DA-HAN, masculine, both consonants plain. ⚠️ **NOT जलना, which anything can do**: दहन is burning that RELEASES USABLE HEAT, which is the only kind an engine or a power station cares about. 🚨 **गैस WAS REMOVED FROM THIS SLOT**: u122l1 owns it as a state of matter — a substance with no shape of its own — and the cooking-cylinder sense cannot share the front, because `normalizeMeaning` would accept one typed answer for both cards." },
        { id: "hi-u126l2-bhaap", type: "vocab", front: "भाप", reading: "bhaap", meaning: "steam", accept: ["water turned to vapour by heat"], example: { jp: "भट्ठी का पानी भाप बनकर टरबाइन को घुमाता है।", en: "The furnace's water becomes steam and turns the turbine." }, drill: { jp: "भाप टरबाइन को घुमाती है", en: "The steam turns the turbine" }, hint: "BHAAP — ⚠️ FEMININE and consonant-final: गरम भाप, भाप निकलती है. भ carries a puff of air. ⚠️ **IT IS THE LINK BETWEEN THIS LESSON AND THE LAST ONE:** ऊष्मा (l1) makes भाप, भाप turns the टरबाइन, and that is how coal becomes बिजली — three cards, one chain." },
        { id: "hi-u126l2-injan", type: "vocab", front: "इंजन", reading: "injan", meaning: "an engine", accept: ["the machine that turns fuel into movement"], example: { jp: "इंजन में तेल कम हो तो वह गरम हो जाता है।", en: "If there is too little oil in the engine, it gets hot." }, drill: { jp: "इस गाड़ी का इंजन बहुत पुराना है", en: "This vehicle's engine is very old" }, hint: "IN-JAN, masculine, consonant-final, opening on the independent इ with a ं on it (unit 5). ⚠️ Not मशीन (unit 43), which is any machine: an इंजन specifically BURNS something to make movement, which is why this card sits in the fuel lesson and not in l4 with the मोटर, that runs on बिजली." },
        { id: "hi-u126l2-tarbaain", type: "vocab", front: "टरबाइन", reading: "tarbaain", meaning: "a turbine", accept: ["the bladed wheel that steam or water spins"], example: { jp: "जलविद्युत में पानी सीधे टरबाइन पर गिरता है।", en: "In hydroelectricity the water falls straight onto the turbine." }, drill: { jp: "पानी सीधे टरबाइन पर गिरता है", en: "The water falls straight onto the turbine" }, hint: "TAR-BAA-IN, masculine. It opens on the RETROFLEX ट, merged to t in the reading (§1b), and ⚠️ **THE बाइ IS बा + इ, TWO SOUNDS** — tar-baa-in, three syllables, not the English two. The one machine that both भाप and जलविद्युत need." },
      ],
    },
    {
      id: "hi-u126l3",
      unit: 126,
      lesson: 3,
      title: "The circuit",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about current, a circuit, a conductor, a resistor and voltage, and say that a switch breaks the circuit.",
      items: [
        { id: "hi-u126l3-vidyut", type: "vocab", front: "विद्युत", reading: "vidyut", meaning: "electric current", accept: ["the flow of charge itself", "electricity as a measured flow"], example: { jp: "तार में विद्युत चलती है, यह आँख से नहीं दिखता।", en: "Current flows in the wire; this is not visible to the eye." }, drill: { jp: "तार में विद्युत चलती है", en: "Current flows in the wire" }, hint: "VID-YUT — ⚠️ FEMININE and consonant-final, and द्य is a stacked conjunct with a DENTAL द (unit 6). 🚨 **IT IS NOT A SECOND CARD FOR बिजली (unit 15), AND THE GLOSS IS WHAT KEEPS IT HONEST:** बिजली is the supply you pay for and that goes off; विद्युत is the measurable FLOW in a wire, which is why this card lives in a lesson about परिपथ and प्रतिरोध. ⚠️ It also sits inside जलविद्युत (l1), where the ल before it blocks the router." },
        { id: "hi-u126l3-paripath", type: "vocab", front: "परिपथ", reading: "paripath", meaning: "an electrical circuit", accept: ["the closed loop current runs round"], example: { jp: "परिपथ कहीं से टूट जाए तो बल्ब नहीं जलेगा।", en: "If the circuit breaks anywhere, the bulb will not light." }, drill: { jp: "परिपथ टूटने से बल्ब नहीं जलता", en: "The bulb does not light if the circuit breaks" }, hint: "PA-RI-PATH, masculine, consonant-final, and ⚠️ **BOTH थ AND प ARE PLAIN HERE**: परि- (around) plus पथ, a path — the way round. The थ is DENTAL and carries a puff of air (§1b). ⚠️ Not रास्ता (unit 29): a परिपथ is a path that has to come back to where it started, which is the whole idea." },
        { id: "hi-u126l3-chaalak", type: "vocab", front: "चालक", reading: "chaalak", meaning: "a conductor of electricity", accept: ["a material current can pass through"], example: { jp: "लोहा अच्छा चालक है और लकड़ी नहीं।", en: "Iron is a good conductor and wood is not." }, drill: { jp: "लोहा अच्छा चालक है", en: "Iron is a good conductor" }, hint: "CHAA-LAK, masculine. ⚠️ **THE GLOSS NAMES ELECTRICITY BECAUSE चालक ALSO MEANS A DRIVER**, and ड्राइवर (unit 29) already owns that string. 🚨 **कुचालक, an insulator, IS DELIBERATELY NOT CARDED:** it is कु + चालक with a mātrā before this very front, so the router would blank the shorter card inside the longer one — the shape u97 refused for स्नातक. Say it as कुचालक anyway; it is ordinary Hindi, it just cannot be a card." },
        { id: "hi-u126l3-pratirodhak", type: "vocab", front: "प्रतिरोधक", reading: "pratirodhak", meaning: "a resistor", accept: ["the part put in a circuit to hold the current back"], example: { jp: "परिपथ में प्रतिरोधक लगाने पर विद्युत कम हो जाती है, और बल्ब कम रोशनी देता है।", en: "Putting a resistor in the circuit reduces the current, and the bulb gives less light." }, drill: { jp: "प्रतिरोधक से परिपथ में विद्युत कम होती है", en: "A resistor reduces the current in the circuit" }, hint: "PRA-TI-RO-DHAK, masculine, the -अक doer-suffix. ✅ प्रतिरोध (u108l2) is BLOCKED inside it by the final क — one letter does the whole job. 🚨 **AND THAT IS WHY THIS CARD IS A COMPONENT AND NOT A PROPERTY**: u108l2 owns प्रतिरोध as the standing against a force, so this lesson teaches the PART that does the standing, which is what a circuit diagram labels anyway." },
        { id: "hi-u126l3-voltej", type: "vocab", front: "वोल्टेज", reading: "voltej", meaning: "voltage", accept: ["the push that drives current along a wire"], example: { jp: "वोल्टेज कम हो जाए तो पंखा धीरे चलता है।", en: "If the voltage drops, the fan runs slowly." }, drill: { jp: "वोल्टेज कम होने से पंखा धीरे चलता है", en: "The fan runs slowly because the voltage is low" }, hint: "VOL-TEJ, masculine. ल्ट is ल stacked on a RETROFLEX ट (unit 6). ⚠️ Read it against तेज़, fast or sharp (unit 16), which ends in the NUKTA ज़ — this word ends in a plain ज, so voltej and not voltez. One dot is the whole difference." },
        { id: "hi-u126l3-svich", type: "vocab", front: "स्विच", reading: "svich", meaning: "a switch", accept: ["the thing you press to break or make the circuit"], example: { jp: "स्विच दबाने से परिपथ बंद या चालू होता है।", en: "Pressing the switch closes or opens the circuit." }, drill: { jp: "स्विच दबाने से बल्ब जलता है", en: "Pressing the switch lights the bulb" }, hint: "SVICH, masculine, ONE syllable: स्व is a stacked conjunct, so the word opens on two consonants together — svich, never savich, the same opening as स्नातक (unit 97). ⚠️ Speakers say both svich and switch; the card takes the spelling Hindi writes." },
      ],
    },
    {
      id: "hi-u126l4",
      unit: 126,
      lesson: 4,
      title: "From the grid to the bulb",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe how power reaches a house — the grid, transmission, a cable, a transformer — and what it runs when it gets there.",
      items: [
        { id: "hi-u126l4-grid", type: "vocab", front: "ग्रिड", reading: "grid", meaning: "a power grid", accept: ["the national network all the plants feed into"], example: { jp: "हर संयंत्र अपनी बिजली ग्रिड में डालता है।", en: "Every plant puts its electricity into the grid." }, drill: { jp: "हर संयंत्र बिजली ग्रिड में भेजता है", en: "Every plant sends electricity into the grid" }, hint: "GRID, masculine, ONE syllable: ग्र is a stacked conjunct and ड is the RETROFLEX d, merged to d in the reading (§1b). ⚠️ **IT IS WHY A कटौती (unit 86) IN ONE STATE CAN COME FROM ANOTHER STATE'S PLANT** — the grid is the reason the supply is shared." },
        { id: "hi-u126l4-paareshan", type: "vocab", front: "पारेषण", reading: "paareshan", meaning: "transmission over distance", accept: ["the carrying of power a long way from where it is made"], example: { jp: "ग्रिड से घर तक पारेषण में कुछ ऊर्जा रास्ते में ही कम हो जाती है।", en: "In transmission from the grid to the house some of the energy is lost on the way." }, drill: { jp: "ग्रिड से घर तक पारेषण होता है", en: "Transmission runs from the grid to the house" }, hint: "PAA-RE-SHAN, masculine — ष is RETROFLEX and so is the ण. पार, across, plus एषण, a sending. ⚠️ **IT IS WHAT A POWER UTILITY ACTUALLY PRINTS** — विद्युत पारेषण on the bill — so a learner meets it on paper before anywhere else. 🚨 **संचरण WAS REMOVED FROM THIS SLOT**: u121l2 owns it as the circulation of blood, and the electrical sense had to find its own word rather than share a front." },
        { id: "hi-u126l4-kebal", type: "vocab", front: "केबल", reading: "kebal", meaning: "a thick insulated power cable", accept: ["a heavy sheathed wire that carries current underground or overhead"], example: { jp: "सड़क के नीचे मोटा केबल डाला गया है।", en: "A thick cable has been laid under the road." }, drill: { jp: "सड़क के नीचे मोटा केबल है", en: "There is a thick cable under the road" }, hint: "KE-BAL — ⚠️ FEMININE in careful usage and masculine in speech; this course treats it as FEMININE: मोटी केबल. ⚠️ **THE GLOSS IS LONG BECAUSE तार (unit 60) OWNS \"a cable\"** — the grader compares strings. The difference is real: a तार is one bare wire, a केबल is several wrapped together." },
        { id: "hi-u126l4-balb", type: "vocab", front: "बल्ब", reading: "balb", meaning: "a light bulb", accept: ["the glass globe that lights a room"], example: { jp: "कमरे का बल्ब कल रात ही गया।", en: "The room's bulb went only last night." }, drill: { jp: "कमरे का बल्ब कल गया", en: "The room's bulb went yesterday" }, hint: "BALB, masculine, ONE syllable, and ल्ब is ल stacked on ब — two consonants closing a single syllable, which Hindi allows. ⚠️ **IT IS CARDED AS AN OBJECT, NOT AS LIGHT**: प्रकाश, किरण and उजाला are u133's, a cross-block line recorded in unit124.js §C8." },
        { id: "hi-u126l4-traansformar", type: "vocab", front: "ट्रांसफ़ॉर्मर", reading: "traansformar", meaning: "a transformer", accept: ["the box that steps the voltage up or down"], example: { jp: "गली का ट्रांसफ़ॉर्मर जल गया और पूरी गली अंधेरे में रही।", en: "The street's transformer burnt out and the whole street stayed in the dark." }, drill: { jp: "गली का ट्रांसफ़ॉर्मर कल जल गया", en: "The street's transformer burnt out yesterday" }, hint: "TRAANS-FOR-MAR, masculine, and the LONGEST FRONT IN THIS BLOCK at nine letters. Three hard things at once: ट्र is a stacked conjunct, फ़ is the f of unit 4, and 🚨 **ॉ IS THE CANDRA-O**, the mark Hindi uses for the English o of 'form' — the same mark as डॉक्टर (unit 35) and कॉलोनी (unit 86), read **o**. It changes the वोल्टेज (l3), which is why it burns out." },
        { id: "hi-u126l4-motar", type: "vocab", front: "मोटर", reading: "motar", meaning: "an electric motor", accept: ["the machine that turns current back into movement"], example: { jp: "पानी की मोटर बिजली जाने पर रुक जाती है।", en: "The water motor stops when the power goes." }, drill: { jp: "पानी की मोटर बिजली से चलती है", en: "The water motor runs on electricity" }, hint: "MO-TAR — ⚠️ FEMININE, despite being consonant-final: पानी की मोटर चलती है. The ट is RETROFLEX, merged to t (§1b). 🚨 **THE EXACT OPPOSITE OF THE इंजन (l2), AND THAT PAIR IS THE POINT:** an इंजन burns fuel to make movement, a मोटर spends बिजली to make it. ⚠️ **जनित्र WAS REFUSED** for this slot — जनरेटर (unit 86) already owns the machine that makes power." },
      ],
    },
  ],
};
