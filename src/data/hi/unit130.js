// HI Unit 130 — जुर्म और पुलिस ("Crime and the police") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 10 (B2)"). Theme ASSIGNED CENTRALLY and
// probed at **7 of 18 taken** against the real 2,328-card corpus, 2026-10-06
// (committed evidence: `scripts/qa/theme-holes.mjs` + `theme-holes-hi.txt`).
//
// 🚨 पुलिस IS u9's AND IS NOT RE-CARDED, and neither is अपराध (u42), जेल (u42),
// सज़ा (u32), सिपाही (u42), गवाह (u42), जाँच (u35), सबूत (u39), शिकायत (u39),
// संदिग्ध (u64), थाना (u86), बंदूक (u89), गोली (u35) or तस्करी (u92) — thirteen
// words this field already had, which is why the lesson shapes are what they are.
//
// 🚨🚨 THE SINGLE MOST IMPORTANT LINE IN THIS FILE — THE CROSS-BLOCK BOUNDARY,
// GIVEN CENTRALLY AND CHECKED HERE RATHER THAN TRUSTED:
//   **THIS UNIT OWNS THE STREET. BLOCK 1's u102 OWNS THE COURT.**
//   MINE: चोरी · हत्या · जुर्म · दंगा · अपहरण · रिश्वत · गश्त · सुराग ·
//         फ़रार · जालसाज़ी — and this unit's own additions वारदात, डकैती, गिरोह,
//         अपराधी, तलाशी, नाकेबंदी, धरपकड़, वर्दी, पूछताछ, मुखबिर, हवालात, हथकड़ी.
//   **THEIRS, AND IN NO CARD HERE:** न्यायाधीश · ज़मानत · अपील · अभियुक्त · वादी ·
//         प्रतिवादी · जिरह · सम्मन · **हिरासत** · याचिका · अवमानना.
//   ⚠️ **हवालात (l4) IS NOT हिरासत AND THAT IS WHY IT IS CARDABLE.** A हिरासत is
//   the LEGAL STATE of being held, which the court orders; a हवालात is the ROOM
//   at the थाना (unit 86) with a barred door. The lead's own note on this
//   boundary was *"without this line both seats card हिरासत"* — so the room is
//   named, the state is not, and the hint says so on the card itself.
//
// ⚠️ TWO REFUSALS SPECIFIC TO THIS UNIT:
//   • 🚨 **छापा ("a raid") WAS REFUSED, AND ONLY `scope-hi` CAUGHT IT.** छापा is
//     the MASCULINE PERFECTIVE of छापना, to print (unit 31) — the कड़ी / लड़ी /
//     मानो class unit61.js §B4 names, which no front, gloss or reading probe can
//     see. Carding it registered छापा as a u130 front and put **six EARLIER
//     sentences out of scope at once** (u44l1, u64l3 ×2, u65l1 ×2, u65l2), because
//     scope-hi's `born` map then dated the word to u130 instead of u31. **दबिश is
//     carded instead** — the word Indian police Hindi actually uses for a swoop.
//     ⚠️ A dedicated paradigm sweep over all 312 of this block's fronts found no
//     second case: `node scripts/tmp/b3-inflcheck.mjs` reports only उतराई@u127,
//     which is the sanctioned -आई ACTION NOUN from उतरना@u29, the same pattern as
//     कटाई@u81, सिलाई@u40 and सिंचाई@u75.
//   • **चश्मदीद ("an eyewitness") WAS REFUSED** — प्रत्यक्षदर्शी@u65 already
//     means exactly that, and `gloss-taken.mjs` caught it. हवालात took the slot.
//   • **लूट WAS REFUSED** on a gloss, not a form. लूटना@u80 is glossed "to loot"
//     and accepts "to plunder", and `normalizeMeaning` strips a leading "to " —
//     so "plunder" and "loot" are both strings the grader already owns. डकैती
//     carries the armed-robbery ground instead.
//   • **सुराग IS AUTHORED WITHOUT THE NUKTA** (unit124.js §C2): क़ ख़ ग़ appear in
//     zero of 2,328 hi fronts and are carded nowhere. The brief spelled it
//     सुराग़; the corpus convention wins, as it does for कारखाना@u60.
//
// ⚠️ GENDER, and this unit is full of unmarked feminines: FEMININE — हत्या (-आ,
// against the rule), डकैती, चोरी, जालसाज़ी, ठगी, रिश्वत (consonant-final),
// तलाशी, नाकेबंदी, धरपकड़ (consonant-final), वर्दी, पूछताछ (consonant-final),
// हथकड़ी, गश्त (consonant-final), वारदात (consonant-final). MASCULINE — अपहरण,
// दंगा, गिरोह, जुर्म, अपराधी, छापा, सुराग, मुखबिर, हवालात. फ़रार is an ADJECTIVE.
export const HI_UNIT130 = {
  id: "hi-u130",
  lang: "hi",
  title: "जुर्म और पुलिस",
  order: 130,
  stage: "b2",
  lessons: [
    {
      id: "hi-u130l1",
      unit: 130,
      lesson: 1,
      title: "What happened on the street",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Report a murder, a kidnapping, a riot, an armed robbery and the gang behind it.",
      items: [
        { id: "hi-u130l1-hatyaa", type: "vocab", front: "हत्या", reading: "hatyaa", meaning: "a murder", accept: ["the killing of a person on purpose"], example: { jp: "पुलिस ने हत्या का मामला दर्ज किया।", en: "The police registered a case of murder." }, drill: { jp: "पुलिस ने हत्या का मामला दर्ज किया", en: "The police registered a murder case" }, hint: "HAT-YAA — ⚠️ FEMININE, and ⚠️ **-आ AGAINST THE RULE** (unit1 §4): हत्या हुई, एक हत्या. त्य is a DENTAL त with य stacked under it, said in one breath (unit 6) — the same stack as तथ्य (unit 87). ⚠️ Not मौत (unit 20), which is any death: a हत्या is a death somebody caused." },
        { id: "hi-u130l1-apaharan", type: "vocab", front: "अपहरण", reading: "apaharan", meaning: "a kidnapping", accept: ["carrying a person off by force"], example: { jp: "बच्चे के अपहरण की खबर पूरे शहर में फैल गई।", en: "The news of the child's kidnapping spread through the whole city." }, drill: { jp: "बच्चे के अपहरण की खबर फैल गई", en: "The news of the child's kidnapping spread" }, hint: "A-PA-HA-RAN, masculine, four syllables, the ह HEARD and the final ण the RETROFLEX n. अप- (away) plus हरण, taking. ⚠️ Read it against आभरण and आहरण — the अप- prefix is the one that makes it a crime, the same अप- as अपराध (unit 42)." },
        { id: "hi-u130l1-dangaa", type: "vocab", front: "दंगा", reading: "dangaa", meaning: "a riot", accept: ["a crowd turning violent in the streets"], example: { jp: "दंगा रोकने के लिए पूरी रात गश्त होती रही।", en: "To stop a riot, patrolling went on all night." }, drill: { jp: "दंगा रोकने के लिए गश्त होती रही", en: "There was patrolling to stop a riot" }, hint: "DAN-GAA, masculine and regular -ा, so the oblique is दंगे — and in practice the PLURAL दंगे is commoner than the singular. The ं before ग is the matching velar nasal (§1). ⚠️ Not लड़ाई (unit 30), which is two people: a दंगा needs a crowd and a direction." },
        { id: "hi-u130l1-vaardaat", type: "vocab", front: "वारदात", reading: "vaardaat", meaning: "a criminal incident", accept: ["an occurrence the police have to come out for"], example: { jp: "यह वारदात रात दो बजे की है।", en: "This incident is from two o'clock at night." }, drill: { jp: "यह वारदात रात दो बजे की है", en: "This incident happened at two at night" }, hint: "VAAR-DAAT — ⚠️ FEMININE and consonant-final: बड़ी वारदात, वारदात हुई. The द is DENTAL. ⚠️ **THE WIDEST WORD IN THE LESSON AND A USEFUL ONE:** a वारदात does not say WHICH crime — it is what a newspaper writes before anyone knows, and what a police diary calls the event." },
        { id: "hi-u130l1-dakaitii", type: "vocab", front: "डकैती", reading: "dakaitii", meaning: "an armed gang robbery", accept: ["robbery by several men carrying weapons"], example: { jp: "बैंक में डकैती सुबह खुलते ही हुई।", en: "The bank robbery happened as soon as it opened in the morning." }, drill: { jp: "बैंक में डकैती सुबह ही हुई", en: "The bank robbery happened in the morning itself" }, hint: "DA-KAI-TII — ⚠️ FEMININE. It opens on the RETROFLEX ड, merged to d (§1b), and ⚠️ **THE ऐ IS ONE VOWEL** (unit 3): da-kai-tii. ⚠️ **लूट WAS REFUSED FOR THIS SLOT**, because लूटना (unit 80) already owns both \"to loot\" and \"to plunder\" and the grader strips the leading \"to\". Not चोरी (l2): a चोरी is quiet, a डकैती is armed." },
        { id: "hi-u130l1-giroh", type: "vocab", front: "गिरोह", reading: "giroh", meaning: "a criminal gang", accept: ["a band of men who work crime together"], example: { jp: "यह काम एक आदमी का नहीं, पूरे गिरोह का है।", en: "This is not one man's work but a whole gang's." }, drill: { jp: "यह काम पूरे गिरोह का है", en: "This is a whole gang's work" }, hint: "GI-ROH, masculine, consonant-final, ⚠️ THE ि SHORT, and the final ह is HEARD: gi-roh. ⚠️ Not दल (unit 88), which is political, and not टीम (unit 41): a गिरोह is named only for crime, which is why the word carries its judgement with it." },
      ],
    },
    {
      id: "hi-u130l2",
      unit: 130,
      lesson: 2,
      title: "Taking what is not yours",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name theft, forgery, a swindle and a bribe, and talk about an offence and the person who committed it.",
      items: [
        { id: "hi-u130l2-chorii", type: "vocab", front: "चोरी", reading: "chorii", meaning: "theft", accept: ["taking a thing quietly without right"], example: { jp: "दुकान में चोरी रात को हुई और किसी ने नहीं देखा।", en: "The theft in the shop happened at night and nobody saw it." }, drill: { jp: "दुकान में चोरी रात को हुई", en: "The theft in the shop happened at night" }, hint: "CHO-RII — ⚠️ FEMININE. Built on चोर, a thief (unit 44) — ⚠️ **AND चोर SITS INSIDE IT WITH THE ROUTER ABLE TO MATCH IT**, because the ी after it is a mātrā: the छात्रावास shape (unit 97). The frame is चोरी करना or चोरी होना, and चोरी-चोरी adverbially means 'on the quiet'." },
        { id: "hi-u130l2-jaalsaazii", type: "vocab", front: "जालसाज़ी", reading: "jaalsaazii", meaning: "forgery", accept: ["making a false paper or signature to cheat with"], example: { jp: "कागज़ों में जालसाज़ी पकड़ी गई तो सौदा रुक गया।", en: "When the forgery in the papers was caught, the deal stopped." }, drill: { jp: "कागज़ों में जालसाज़ी पकड़ी गई", en: "The forgery in the papers was caught" }, hint: "JAAL-SAA-ZII — ⚠️ FEMININE. ज़ is the z of unit 4. Built from जाल, a net (unit 43), plus -साज़, a maker — ⚠️ **AND जाल SITS AT ITS START WITH THE ROUTER UNABLE TO MATCH IT**, because the स that follows is a LETTER. ⚠️ Not धोखा (unit 32), which is any deception: जालसाज़ी needs a forged OBJECT." },
        { id: "hi-u130l2-thagii", type: "vocab", front: "ठगी", reading: "thagii", meaning: "a swindle", accept: ["cheating somebody out of money by a trick"], example: { jp: "सस्ते सामान के नाम पर यह सीधी ठगी थी।", en: "In the name of cheap goods this was a plain swindle." }, drill: { jp: "सस्ते सामान के नाम पर ठगी हुई", en: "There was a swindle in the name of cheap goods" }, hint: "THA-GII — ⚠️ FEMININE. It opens on the RETROFLEX ठ with a puff of air — tongue curled back, merged to th (§1b), so `thagii` and not the dental th of थाली (unit 36). From ठगना, to cheat, uncarded. ⚠️ Not जालसाज़ी, the card before: a ठगी is done with words, a जालसाज़ी with paper." },
        { id: "hi-u130l2-rishvat", type: "vocab", front: "रिश्वत", reading: "rishvat", meaning: "a bribe", accept: ["money paid to get an official to bend"], example: { jp: "रिश्वत देने और लेने, दोनों पर सज़ा है।", en: "There is punishment for both giving and taking a bribe." }, drill: { jp: "रिश्वत देने और लेने पर सज़ा है", en: "There is punishment for giving and taking a bribe" }, hint: "RISH-VAT — ⚠️ FEMININE and consonant-final: बड़ी रिश्वत, रिश्वत ली. श्व is a stacked conjunct — श with व under it (unit 6), the same stack as विश्वविद्यालय (unit 97) and विश्वास (unit 90). The frames are रिश्वत देना and रिश्वत लेना, and the example puts both in one sentence on purpose." },
        { id: "hi-u130l2-jurm", type: "vocab", front: "जुर्म", reading: "jurm", meaning: "a punishable wrong", accept: ["what the law treats as a wrong and punishes"], example: { jp: "रिश्वत लेना भी जुर्म है, सिर्फ़ चोरी नहीं।", en: "Taking a bribe is also a punishable wrong, not only theft." }, drill: { jp: "रिश्वत लेना भी जुर्म है", en: "Taking a bribe is also an offence" }, hint: "JURM, masculine, ONE syllable, and र्म closes it with the र written as a hook over the म (unit 6). ⚠️ **THE GLOSS IS \"a punishable wrong\" BECAUSE अपराध (unit 42) ALREADY OWNS BOTH \"a crime\" AND \"an offence\"** — the grader compares strings and both were taken. The two words are near-twins in meaning; जुर्म is the Urdu-side one a policeman says." },
        { id: "hi-u130l2-apraadhii", type: "vocab", front: "अपराधी", reading: "apraadhii", meaning: "a criminal", accept: ["one who has committed a crime"], example: { jp: "पुलिस को अपराधी का नाम मुखबिर से मिला।", en: "The police got the criminal's name from an informer." }, drill: { jp: "पुलिस को अपराधी का नाम मिला", en: "The police got the criminal's name" }, hint: "AP-RAA-DHII, masculine and FIXED for a woman. Built on अपराध, a crime (unit 42) — 🚨 **AND अपराध SITS INSIDE IT WITH THE ROUTER ABLE TO MATCH IT**, because the ी after it is a mātrā. A noun and the agent noun built from it are two lexemes and both may be carded; the hint is here so a drill cannot blank the shorter one unnoticed." },
      ],
    },
    {
      id: "hi-u130l3",
      unit: 130,
      lesson: 3,
      title: "The police at work",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe what the police do on the ground — patrol, swoop, search, cordon, round-up — and the uniform they do it in.",
      items: [
        { id: "hi-u130l3-gasht", type: "vocab", front: "गश्त", reading: "gasht", meaning: "a patrol", accept: ["going round an area again and again to watch it"], example: { jp: "रात की गश्त दो सिपाही मिलकर करते हैं।", en: "The night patrol is done by two constables together." }, drill: { jp: "रात की गश्त दो सिपाही करते हैं", en: "Two constables do the night patrol" }, hint: "GASHT — ⚠️ FEMININE and consonant-final: रात की गश्त, गश्त होती है. श्त is श stacked on a DENTAL त (unit 6), so the word closes on two consonants. ⚠️ Not चक्कर, a round trip: a गश्त is done to BE SEEN, which is the whole point of it." },
                { id: "hi-u130l3-dabish", type: "vocab", front: "दबिश", reading: "dabish", meaning: "a police swoop on a place", accept: ["arriving without warning to search and seize"], example: { jp: "सुबह चार बजे गोदाम पर दबिश दी गई।", en: "At four in the morning a swoop was made on the warehouse." }, drill: { jp: "सुबह चार बजे गोदाम पर दबिश हुई", en: "There was a swoop on the warehouse at four in the morning" }, hint: "DA-BISH — ⚠️ FEMININE and consonant-final, so nothing in the shape says so: बड़ी दबिश, दबिश हुई. The द is DENTAL and ⚠️ THE ि IS SHORT: da-bish. ⚠️ **THE FRAME IS दबिश देना OR दबिश पड़ना, NEVER दबिश करना.** 🚨 **छापा WAS REFUSED FOR THIS SLOT AND ONLY scope-hi CAUGHT IT:** छापा is the masculine perfective of छापना, to print (unit 31) — the कड़ी / लड़ी / मानो class unit61.js §B4 names — and carding it put six EARLIER sentences out of scope at once. Not हमला (unit 89), which is war." },
        { id: "hi-u130l3-talaashii", type: "vocab", front: "तलाशी", reading: "talaashii", meaning: "a search of a person or place", accept: ["going through somebody's things or pockets looking for something"], example: { jp: "तलाशी में घर से कुछ नहीं मिला।", en: "Nothing was found in the house during the search." }, drill: { jp: "तलाशी में घर से कुछ नहीं मिला", en: "Nothing was found in the house in the search" }, hint: "TA-LAA-SHII — ⚠️ FEMININE. From तलाश, a search for something, with -ी turning it into the OFFICIAL act — ⚠️ and if तलाश were carded the router could match it here, because the ी is a mātrā; it is not carded, so the point is moot and was checked. ⚠️ Not जाँच (unit 35), which examines: a तलाशी goes through pockets." },
        { id: "hi-u130l3-naakebandii", type: "vocab", front: "नाकेबंदी", reading: "naakebandii", meaning: "a cordon put across the roads", accept: ["sealing the ways in and out of an area"], example: { jp: "वारदात के बाद पूरे शहर में नाकेबंदी कर दी गई।", en: "After the incident a cordon was thrown round the whole city." }, drill: { jp: "वारदात के बाद शहर में नाकेबंदी हुई", en: "There was a cordon in the city after the incident" }, hint: "NAA-KE-BAN-DII — ⚠️ FEMININE, four syllables. नाका, a checkpoint, in its oblique form नाके, plus बंदी, a closing — from बंद, shut (unit 12). The ं before द is the matching DENTAL nasal (§1). ⚠️ The word a learner meets on a news channel the hour a फ़रार (l4) suspect is being hunted." },
        { id: "hi-u130l3-dharpakar", type: "vocab", front: "धरपकड़", reading: "dharpakar", meaning: "a round-up of suspects", accept: ["picking up a number of people at once for questioning"], example: { jp: "दंगे के बाद मोहल्ले में धरपकड़ शुरू हुई।", en: "After the riot a round-up began in the neighbourhood." }, drill: { jp: "दंगे के बाद मोहल्ले में धरपकड़ हुई", en: "There was a round-up in the neighbourhood after the riot" }, hint: "DHAR-PA-KAR — ⚠️ FEMININE and consonant-final: बड़ी धरपकड़, धरपकड़ हुई. 🚨 **TWO VERB STEMS WELDED TOGETHER** — धर from धरना, to seize, and पकड़ from पकड़ना, to catch (unit 20) — which is a live Hindi word-making pattern (आनाजाना, लेनदेन). The final ड़ is the curled-back flap written r (unit 4)." },
        { id: "hi-u130l3-vardii", type: "vocab", front: "वर्दी", reading: "vardii", meaning: "a uniform", accept: ["the clothing a force is issued and must wear on duty"], example: { jp: "वर्दी में आया आदमी सबको दूर से दिख जाता है।", en: "A man who comes in uniform is seen by everyone from far off." }, drill: { jp: "वर्दी में आया आदमी दूर से दिखता है", en: "A man in uniform is seen from far off" }, hint: "VAR-DII — ⚠️ FEMININE: नई वर्दी, वर्दी पहनी. र्द writes the र as a hook over the DENTAL द (unit 6). ⚠️ Not कपड़े (unit 16): a वर्दी is ISSUED, and the whole force wears the same one — which is why a सिपाही (unit 42) out of वर्दी is a different thing from one in it." },
      ],
    },
    {
      id: "hi-u130l4",
      unit: 130,
      lesson: 4,
      title: "Following it up",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about a clue, questioning and an informer, and say that one man is in the lock-up in handcuffs and the other is still on the run.",
      items: [
        { id: "hi-u130l4-suraag", type: "vocab", front: "सुराग", reading: "suraag", meaning: "a clue", accept: ["the small thing that shows which way to look"], example: { jp: "तीन दिन तक एक भी सुराग नहीं मिला।", en: "For three days not a single clue was found." }, drill: { jp: "तीन दिन तक सुराग नहीं मिला", en: "No clue was found for three days" }, hint: "SU-RAAG, masculine, consonant-final: दो सुराग. 🚨 **AUTHORED WITHOUT THE NUKTA ON ग, ON PURPOSE** — क़ ख़ ग़ appear in zero of the language's 2,328 fronts and are carded nowhere (unit1.js §7), so a learner has never been shown one. ⚠️ Not सबूत (unit 39), which PROVES: a सुराग only points, and it is what पूछताछ starts from." },
        { id: "hi-u130l4-puuchhtaachh", type: "vocab", front: "पूछताछ", reading: "puuchhtaachh", meaning: "questioning", accept: ["being asked question after question by the police"], example: { jp: "उसे सिर्फ़ पूछताछ के लिए थाने बुलाया गया।", en: "He was called to the police station only for questioning." }, drill: { jp: "उसे पूछताछ के लिए थाने बुलाया गया", en: "He was called to the station for questioning" }, hint: "PUUCH-TAACH — ⚠️ FEMININE and consonant-final: पूछताछ हुई, लंबी पूछताछ. 🚨 **BOTH HALVES END IN AN ASPIRATED छ** — from पूछना, to ask (unit 8), doubled with the rhyming ताछ, the same word-making pattern as धरपकड़ (l3). ⚠️ Not सवाल (unit 8), which is one question." },
        { id: "hi-u130l4-mukhbir", type: "vocab", front: "मुखबिर", reading: "mukhbir", meaning: "an informer", accept: ["somebody inside who quietly tells the police things"], example: { jp: "गिरोह का एक आदमी पुलिस का मुखबिर निकला।", en: "One man of the gang turned out to be a police informer." }, drill: { jp: "गिरोह का एक आदमी मुखबिर निकला", en: "One man of the gang turned out to be an informer" }, hint: "MUKH-BIR, masculine and used for a woman too, ख with a puff of air and ⚠️ THE ि SHORT: mukh-bir. ⚠️ Not गवाह (unit 42), who speaks in the open: a मुखबिर is never named, which is why the two can never be the same card." },
        { id: "hi-u130l4-havaalaat", type: "vocab", front: "हवालात", reading: "havaalaat", meaning: "a police lock-up", accept: ["the barred room at a police station where somebody is held overnight"], example: { jp: "रात भर दोनों आदमी हवालात में रहे।", en: "Both men stayed in the lock-up all night." }, drill: { jp: "रात भर दोनों आदमी हवालात में रहे", en: "Both men were in the lock-up all night" }, hint: "HA-VAA-LAAT, masculine, and the ह is HEARD. 🚨 **IT IS A ROOM, NOT A LEGAL STATE, AND THAT IS WHY THIS CARD EXISTS WHILE हिरासत DOES NOT.** हिरासत — custody as a court orders it — belongs to another unit, a cross-block line recorded in unit124.js §C8. A हवालात has a barred door and is inside the थाना (unit 86); हिरासत has neither." },
        { id: "hi-u130l4-hathkarii", type: "vocab", front: "हथकड़ी", reading: "hathkarii", meaning: "handcuffs", accept: ["the iron rings locked round a prisoner's wrists"], example: { jp: "हथकड़ी पहनाकर उसे अदालत ले जाया गया।", en: "He was taken to court with handcuffs put on him." }, drill: { jp: "हथकड़ी पहनाकर उसे अदालत ले गए", en: "They took him to court in handcuffs" }, hint: "HATH-KA-RII — ⚠️ FEMININE and ⚠️ **USED IN THE SINGULAR FOR THE PAIR**: हथकड़ी लगाई, not हथकड़ियाँ — the same licence as चश्मा and पतलून (unit 40). हाथ, a hand (unit 8), SHORTENS to हथ in a compound, and ड़ is the curled-back flap written r (unit 4)." },
        { id: "hi-u130l4-faraar", type: "vocab", front: "फ़रार", reading: "faraar", meaning: "on the run from the law", accept: ["absconding", "gone and not to be found"], example: { jp: "एक आदमी पकड़ा गया और दूसरा अब भी फ़रार है।", en: "One man was caught and the other is still on the run." }, drill: { jp: "दूसरा आदमी अब भी फ़रार है", en: "The other man is still on the run" }, hint: "FA-RAAR — an ADJECTIVE, so no gender change: वह फ़रार है, वे फ़रार हैं. फ़ is the f of unit 4, a nukta on फ — faraar, never pharaar. ⚠️ The frame is फ़रार होना or फ़रार हो जाना. It is the state that makes a नाकेबंदी (l3) worth doing, which is why the two sit in one unit." },
      ],
    },
  ],
};
