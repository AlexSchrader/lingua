// HI Unit 63 — तुलना और मात्रा ("Comparison and quantity") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then unit61.js
// §B1–§B9. This unit adds nothing to them.
//
// Slot KEPT, and RETITLED from "Comparison and degree" to **तुलना और मात्रा**,
// because DEGREE IS ALREADY SPENT and quantity is not. Measured 9/18. A2 u38
// पहले ऐसा होता था carded the whole degree-and-manner adverb set (its header
// records it: adverbs were 4/16 and u38 filled them), u47 owns तुलना itself and
// मुकाबला and बेहद, u45 owns तिगुना and दुगुना, u23 owns हद and जितना, u39 owns
// बल्कि and उतना. So "how much more" is done.
// What is NOT done is the ARITHMETIC OF COMPARISON — the average, the ratio, the
// tier, the majority, the unit of measure. unit61 §B9 records this as decided:
// **quantity abstraction is this unit's, and no coverage slot takes it.**
//
// 🚨 THE READING COLLISION THAT COST THIS UNIT A CARD IS RECORDED IN unit62.js,
// NOT HERE, because that is where a later seat will look for the §1b escape
// hatch. One line of it, so this file is not silent: **दर ("a rate") was REFUSED
// because it reads `dar` and डर (fear, u27) already does.** संतुलन is carded
// instead. The repair, if a later block needs दर, is डर → `ddar` in unit27.js.
//
// ⚠️ SIX MORE FRONTS WANTED AND REFUSED:
//   TAKEN: बराबर (u19) · कुल (u19) · नाप (u40) · हद (u23) · मुकाबला (u41) ·
//     बल्कि (u39) · तिगुना (u45) · दुगुना (u45) · प्रतिशत (u45) · तुलना (u47).
//   SAME-LEXEME-REFUSED, and only the GLOSS probe caught the second one:
//     **बराबरी** is the bare derivative of बराबर (u19), unit57.js's rule —
//     समानता is carded instead. **दुगना** looks free as a front and IS दुगुना
//     (u45) spelled differently; `chk2.mjs` passed it and `gloss.mjs` caught it.
//     That is the whole argument for running both probes, not one.
//   GLOSS-REFUSED through normalizeMeaning: **शेष** (बाकी u22 is "what is left
//     over") · **भाग** (हिस्सा u19 is "a part") · **माप** (नाप u40 is "a
//     measurement") · **समाधान** is u70's problem.
//   DEFERRED ON ORDER, not on scope: **अनुमानित** ("estimated") was drafted into
//     l3 and moved to u64l3, because its base अनुमान is carded at u64 — one unit
//     LATER. `scope-hi.mjs` derives forward only and would never have flagged it.
//   ⚠️ AND ONE REFUSED FOR A REASON PECULIAR TO THIS COURSE: **मात्रा**, the
//     obvious word for "a quantity", is THE technical term this language uses for
//     the Devanagari vowel MARKS — unit 1 §3, unit 3's whole theme, and dozens of
//     hints. Carding it with an unrelated gloss would collide with sixty units of
//     metalanguage in the learner's head, and no tool can see that. तादाद is
//     carded instead. Named here because every later block will reach for मात्रा.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: समानता, श्रेणी, तादाद, इकाई, **बढ़त**. बढ़त is CONSONANT-FINAL,
//   so nothing in the shape says so — उसकी बढ़त बड़ी थी, not बड़ा.
//   MASCULINE: अनुपात, स्तर, पैमाना, अंश, फ़ासला, अंतराल, संतुलन, गुना. **पैमाना is
//   masculine and -आ for once agrees with the rule**, which makes it the easy one.
//   INVARIANT (unit53's rule): न्यूनतम, अधिकतम, समतुल्य, अतिरिक्त, सम, विषम.
//   ⚠️ **सम and विषम do NOT agree** despite सम looking like a stem: सम संख्या,
//   विषम संख्या, and never समी or विषमी.
// RETROFLEX/DENTAL (unit1.js §1b): **तादाद taadaad is all DENTAL** — त, द, द —
// with no retroflex twin anywhere in the corpus. अतिरिक्त is dental त twice.
// बढ़त has ढ़, which reads rh (unit 1 §1c), so barhat. Checked against all 1,440
// readings: 0 collisions after दर was dropped.
// LOANWORD FREE-PASS CHECK (unit1.js §9): no loanwords. Zero free passes.
export const HI_UNIT63 = {
  id: "hi-u63",
  lang: "hi",
  title: "तुलना और मात्रा",
  order: 63,
  stage: "b1",
  lessons: [
    {
      id: "hi-u63l1",
      unit: 63,
      lesson: 1,
      title: "More, less, the same",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say how many times over one thing exceeds another, compare two things against each other, name the smallest and largest possible, and say two things are alike or outright equivalent.",
      items: [
        { id: "hi-u63l1-gunaa", type: "vocab", front: "गुना", reading: "gunaa", meaning: "times over", accept: ["-fold"], example: { jp: "इस साल उपज पिछले साल से तीन गुना हुई, और किसान खुश थे।", en: "This year the yield was three times over last year's, and the farmers were happy." }, drill: { jp: "यह उपज तीन गुना हुई", en: "This yield was three times over" }, hint: "GU-NAA, masculine, and it always FOLLOWS its number: तीन गुना, दस गुना. ⚠️ दुगुना (unit 45) and तिगुना (unit 45) are the fused forms for two and three; गुना is the general one you use for every other number. The frame is X से N गुना, N times more than X." },
        { id: "hi-u63l1-banisbat", type: "vocab", front: "बनिस्बत", reading: "banisbat", meaning: "compared with", accept: ["as against"], example: { jp: "पिछले साल बनिस्बत इस साल बारिश कम हुई, फलस्वरूप उपज भी घटी।", en: "Compared with last year, there was less rain this year; as a result the yield also fell." }, drill: { jp: "पिछले साल बनिस्बत इस साल बारिश कम हुई", en: "Compared with last year there was less rain this year" }, hint: "BA-NIS-BAT, INVARIANT and used like a postposition: X बनिस्बत Y, or X के बनिस्बत. ⚠️ Not तुलना, a comparison (unit 47), which is the NOUN; बनिस्बत is how you actually say 'compared with' inside a sentence. Formal, and common in writing and the news." },
        { id: "hi-u63l1-nyuuntam", type: "vocab", front: "न्यूनतम", reading: "nyuuntam", meaning: "the least amount", accept: ["the minimum"], example: { jp: "इस काम के लिए न्यूनतम तीन लोग चाहिए, कम लोगों में कुछ नहीं होगा।", en: "This work needs a minimum of three people; with fewer than that nothing will happen." }, drill: { jp: "इस काम के लिए न्यूनतम तीन लोग चाहिए", en: "This work needs a minimum of three people" }, hint: "NYUUN-TAM, INVARIANT: न्यूनतम कीमत, न्यूनतम समय. The न्यू is न with य stacked, then the long uu of ऊ. The -तम ending is Hindi's superlative, the same one in अधिकतम below. ⚠️ Not कम, less (unit 1) — कम is a comparison, न्यूनतम is a floor nothing can go below." },
        { id: "hi-u63l1-adhiktam", type: "vocab", front: "अधिकतम", reading: "adhiktam", meaning: "the most amount", accept: ["the maximum"], example: { jp: "एक दिन में अधिकतम कितने पाठ पढ़ सकते हैं, यह हर आदमी पर निर्भर है।", en: "How many cards one can read in a day at the most depends on each person." }, drill: { jp: "एक दिन में अधिकतम दस पाठ पढ़िए", en: "Read at the most ten cards in a day" }, hint: "A-DHIK-TAM, INVARIANT, with DENTAL ध. Built on अधिक, 'more', with the same -तम superlative as न्यूनतम. ⚠️ The pair न्यूनतम/अधिकतम is what a form, a price list or a rule uses — ज़्यादा and कम (unit 6) are for talking." },
        { id: "hi-u63l1-samaantaa", type: "vocab", front: "समानता", reading: "samaantaa", meaning: "a likeness", accept: ["a sameness between things"], example: { jp: "हिंदी और अंग्रेज़ी में थोड़ी समानता है, पर उनका अक्षर एक जैसा नहीं है।", en: "There is a likeness between the two languages, but their letters are not alike." }, drill: { jp: "हिंदी और अंग्रेज़ी में समानता कम है", en: "There is a likeness between the two languages" }, hint: "SA-MAAN-TAA — FEMININE, like every -ता abstract in Hindi (unit 61 §B6). Built on समान, 'alike'. ⚠️ बराबरी was REFUSED here as the bare derivative of बराबर, equal (unit 19) — unit 57's rule. समानता is a different word, not a second track for बराबर." },
        { id: "hi-u63l1-samtulya", type: "vocab", front: "समतुल्य", reading: "samtulya", meaning: "equivalent", accept: ["worth the same as"], example: { jp: "एक किलो के समतुल्य कितने ग्राम होते हैं, यह बच्चा पहले दिन सीखता है।", en: "How many grams are equivalent to one kilo is something a child learns on the first day." }, drill: { jp: "यह एक किलो के समतुल्य है", en: "This is equivalent to one kilo" }, hint: "SAM-TUL-YA, INVARIANT: समतुल्य कीमत, समतुल्य मात्रा. सम is 'equal' and तुल्य is 'weighed against', from the same root as तराजू, a pair of scales (unit 45). ⚠️ Stronger than समानता above: a समानता is a resemblance, समतुल्य means it will do instead." },
      ],
    },
    {
      id: "hi-u63l2",
      unit: 63,
      lesson: 2,
      title: "The average and the scale",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Give an average figure, state a ratio, place something on a tier, name the scale you are measuring on and the count of things in it, and say when a balance has been struck.",
      items: [
        { id: "hi-u63l2-ausat", type: "vocab", front: "औसत", reading: "ausat", meaning: "an average figure", accept: ["the mean of several"], example: { jp: "एक कक्षा में औसत बीस बच्चे होते हैं, पर इस साल तादाद कम है।", en: "There are on average twenty-five children in a class, but this year the count is low." }, drill: { jp: "एक कक्षा में औसत बीस बच्चे होते हैं", en: "A class has on average twenty-five children" }, hint: "AU-SAT, masculine, opening with the औ of unit 2 — the open vowel, not ओ. ⚠️ Not साधारण, ordinary (unit 19), which this course glosses as 'average' in the everyday sense: औसत is the NUMBER you get by dividing, and that is the only thing it means here." },
        { id: "hi-u63l2-anupaat", type: "vocab", front: "अनुपात", reading: "anupaat", meaning: "a ratio", accept: ["a proportion between two amounts"], example: { jp: "आटे और पानी का अनुपात ठीक रखो, वरना रोटी सख्त हो जाएगी।", en: "Keep the ratio of flour and water right, or else the flatbread will turn hard." }, drill: { jp: "आटे और पानी का अनुपात ठीक रखो", en: "Keep the ratio of flour and water right" }, hint: "A-NU-PAAT, masculine, all DENTAL त. The frame is X और Y का अनुपात. ⚠️ The word a recipe, a report and a news bulletin all use. Two numbers set against each other, where औसत above is one number standing for many." },
        { id: "hi-u63l2-star", type: "vocab", front: "स्तर", reading: "star", meaning: "a tier", accept: ["a level something sits at"], example: { jp: "उसकी हिंदी का स्तर अब बहुत ऊपर है, वह अखबार बिना मदद पढ़ लेता है।", en: "The level of his Hindi is very high now; he reads the newspaper without help." }, drill: { jp: "उसकी हिंदी का स्तर ऊपर है", en: "The level of his Hindi is high" }, hint: "STAR, masculine, one syllable: स with त stacked, then र. ⚠️ Not बराबर, equal (unit 19), which this course glosses 'level' in the flat sense — a स्तर is a RUNG, one of several stacked. The word a school, a report and this app's own ladder would use." },
        { id: "hi-u63l2-paimaanaa", type: "vocab", front: "पैमाना", reading: "paimaanaa", meaning: "a scale for measuring", accept: ["a yardstick"], example: { jp: "पैसा एक पैमाना है, पर अकेला पैमाना नहीं है।", en: "Money is one scale of success, but it is not the only scale." }, drill: { jp: "पैसा एक बड़ा पैमाना है", en: "Money is one scale of success" }, hint: "PAI-MAA-NAA, masculine — the -आ ending tells the truth here, unlike आलोचना (unit 61) and प्रेरणा (unit 62). Opens with ऐ (unit 2). ⚠️ Not तराजू, a pair of scales (unit 45), which is the object; a पैमाना is the standard you judge BY." },
        { id: "hi-u63l2-taadaad", type: "vocab", front: "तादाद", reading: "taadaad", meaning: "a count of things", accept: ["a number of items", "how many there are"], example: { jp: "बच्चों की तादाद हर साल बढ़ती है, इसलिए एक और कक्षा खोलनी पड़ी।", en: "The count of children grows every year, so one more class had to be opened." }, drill: { jp: "बच्चों की तादाद हर साल बढ़ती है", en: "The count of children grows every year" }, hint: "TAA-DAAD — ⚠️ FEMININE and consonant-final: तादाद ज़्यादा थी, never ज़्यादा… the adjective is invariant, so the giveaway is तादाद बड़ी थी. All three consonants are DENTAL (unit 1 §1b). ⚠️ मात्रा was REFUSED for this gloss: it is this course's own word for a Devanagari vowel MARK (unit 3), and the clash would be in the learner's head where no tool can see it." },
        { id: "hi-u63l2-santulan", type: "vocab", front: "संतुलन", reading: "santulan", meaning: "a balance between things", accept: ["an even footing"], example: { jp: "काम और आराम में संतुलन रखना सीखो, वरना थकान एक दिन हरा देगी।", en: "Learn to keep a balance between work and rest, or else tiredness will beat you one day." }, drill: { jp: "काम और आराम में संतुलन रखो", en: "Keep a balance between work and rest" }, hint: "SAN-TU-LAN, masculine. The ं before त reads n (unit 1 §1). Same तुल root as समतुल्य (lesson 1) — the scales again. संतुलन बनाना is to strike a balance, संतुलन बिगड़ना is for it to be upset." },
      ],
    },
    {
      id: "hi-u63l3",
      unit: 63,
      lesson: 3,
      title: "How many of them",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say a majority or a minority wanted something, sort things into categories, name a fraction of a whole, ask for something extra, and tell an even number from an odd one.",
      items: [
        { id: "hi-u63l3-bahumat", type: "vocab", front: "बहुमत", reading: "bahumat", meaning: "a majority", accept: ["the larger part of a group"], example: { jp: "बहुमत इस सुझाव के पक्ष में था, इसलिए फ़ैसला उस दिन हो गया।", en: "The majority was in favour of this suggestion, so the decision happened right there." }, drill: { jp: "बहुमत इस सुझाव के पक्ष में था", en: "The majority was in favour of this suggestion" }, hint: "BA-HU-MAT, masculine. बहु is 'many' and मत is an opinion — literally the opinion of the many, the same मत inside मतभेद (unit 61). ⚠️ Not ज़्यादातर, mostly (unit 38), which is an adverb: a बहुमत is a countable group of people who outvoted the rest." },
        { id: "hi-u63l3-alpmat", type: "vocab", front: "अल्पमत", reading: "alpmat", meaning: "a minority", accept: ["the smaller part of a group"], example: { jp: "अल्पमत की राय भी सुननी चाहिए, वरना फ़ैसला सर्वसम्मत नहीं कहा जा सकता।", en: "The minority's opinion should be heard too, or else the decision cannot be called unanimous." }, drill: { jp: "अल्पमत की राय भी सुननी चाहिए", en: "The minority's opinion should be heard too" }, hint: "ALP-MAT, masculine. अल्प is 'few' — ल्प is ल with प stacked — against बहु, 'many', above. ⚠️ The pair बहुमत/अल्पमत is how Hindi reports every vote, in a village council (unit 42) or a national one, and neither word exists in the course before this lesson." },
        { id: "hi-u63l3-shrenii", type: "vocab", front: "श्रेणी", reading: "shrenii", meaning: "a category", accept: ["a class things are sorted into"], example: { jp: "टिकट तीन श्रेणी में मिलता है और हर श्रेणी की कीमत अलग है।", en: "The ticket is available in three categories and each category's price is different." }, drill: { jp: "टिकट तीन श्रेणी में मिलता है", en: "The ticket comes in three categories" }, hint: "SHRE-NII — FEMININE. The श्र is श with र stacked, read shr, and the ण is RETROFLEX n, merged to n in the reading (unit 1 §1b). ⚠️ Not कक्षा, a class (unit 9), which is a room of children; a श्रेणी is a bucket you sort things into — tickets, grades, kinds of anything." },
        { id: "hi-u63l3-ansh", type: "vocab", front: "अंश", reading: "ansh", meaning: "a fraction", accept: ["a share of a whole"], example: { jp: "उसने कहानी का एक अंश पढ़कर सुनाया, पूरी किताब नहीं।", en: "He read out one fraction of the story, not the whole book." }, drill: { jp: "उसने कहानी का एक अंश सुनाया", en: "He read out one fraction of the story" }, hint: "ANSH, masculine. The ं before श reads n, and श reads sh (unit 1 §1a). ⚠️ Not हिस्सा, a part (unit 19): a हिस्सा is any piece, an अंश is a piece understood as a FRACTION of a whole — an excerpt, a percentage, a share." },
        { id: "hi-u63l3-atirikt", type: "vocab", front: "अतिरिक्त", reading: "atirikt", meaning: "extra", accept: ["over and above what is there"], example: { jp: "अगर समय कम पड़े तो अतिरिक्त आधा घंटा मिल सकता है।", en: "If time runs short, an extra half hour can be had." }, drill: { jp: "मुझे अतिरिक्त आधा घंटा चाहिए", en: "I need an extra half hour" }, hint: "A-TI-RIKT, INVARIANT: अतिरिक्त समय, अतिरिक्त कीमत. The क्त is क with त stacked. The frame X के अतिरिक्त means 'besides X'. ⚠️ Not और, more (unit 2): और asks for more of the same, अतिरिक्त is a formal addition beyond the stated amount." },
        { id: "hi-u63l3-sam", type: "vocab", front: "सम", reading: "sam", meaning: "even-numbered", accept: ["divisible by two"], example: { jp: "दो, चार और छह सम संख्या हैं, और उन्हें दो से बाँटा जा सकता है।", en: "Two, four and six are even numbers, and they can be divided by two." }, drill: { jp: "दो और चार सम संख्या हैं", en: "Two and four are even numbers" }, hint: "SAM, INVARIANT and one syllable: सम संख्या, सम तादाद — never समी. The same सम, 'equal', that opens समतुल्य and समानता (lesson 1), here meaning a number that splits evenly. ⚠️ Its partner विषम, odd, is in lesson 4." },
      ],
    },
    {
      id: "hi-u63l4",
      unit: 63,
      lesson: 4,
      title: "The gap and the lead",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name a lead one side has, the space between two things and the interval of time between two events, call a number odd, subtract one amount from another, and name the unit you are counting in.",
      items: [
        { id: "hi-u63l4-barhat", type: "vocab", front: "बढ़त", reading: "barhat", meaning: "a lead over others", accept: ["being ahead", "the distance one is in front by"], example: { jp: "आधे खेल के बाद हमारी टीम की बढ़त दो गोल की थी।", en: "After half the game our team's lead was of two goals." }, drill: { jp: "हमारी टीम की बढ़त दो गोल की थी", en: "Our team's lead was of two goals" }, hint: "BAR-HAT — ⚠️ FEMININE AND CONSONANT-FINAL, so nothing in the shape says so: उसकी बढ़त बड़ी थी, never बड़ा. The ढ़ reads rh (unit 1 §1c). Built on बढ़ना, to grow (unit 24), but a different word: बढ़ना is the growing, a बढ़त is the distance you are ahead by." },
        { id: "hi-u63l4-faaslaa", type: "vocab", front: "फ़ासला", reading: "faaslaa", meaning: "a space in between", accept: ["a gap", "the stretch between two things"], example: { jp: "दोनों गाँव के बीच का फ़ासला पैदल एक घंटे का है।", en: "The gap between the two villages is an hour on foot." }, drill: { jp: "दोनों गाँव के बीच फ़ासला बड़ा है", en: "The gap between the two villages is of one hour" }, hint: "FAAS-LAA, masculine, with फ़ (unit 4) and never plain फ. ⚠️ Not दूरी, distance (unit 29), and not फ़र्क, a difference (unit 32): a फ़ासला is the EMPTY SPACE between two things, measured in steps, hours or rupees. Hindi also uses it for a social distance someone keeps." },
        { id: "hi-u63l4-antraal", type: "vocab", front: "अंतराल", reading: "antraal", meaning: "an interval", accept: ["a pause between two events"], example: { jp: "दो पाठ के बीच थोड़ा अंतराल रखना अच्छा है, तभी दिमाग आराम करता है।", en: "Keeping a short interval between two cards is good; only then does the mind settle." }, drill: { jp: "दो पाठ के बीच थोड़ा अंतराल रखो", en: "Keep a short interval between two cards" }, hint: "AN-TRAAL, masculine. The ं before त reads n (unit 1 §1), and the त is DENTAL. ⚠️ फ़ासला above is a gap in SPACE, an अंतराल is a gap in TIME. The word a film's intermission uses, and the one this app's own spacing would use." },
        { id: "hi-u63l4-visham", type: "vocab", front: "विषम", reading: "visham", meaning: "uneven", accept: ["odd-numbered", "not matching up"], example: { jp: "तीन और पाँच विषम संख्या हैं, और उन्हें दो से बराबर नहीं बाँट सकते।", en: "Three and five are odd numbers, and they cannot be divided equally by two." }, drill: { jp: "तीन और पाँच विषम संख्या हैं", en: "Three and five are odd numbers" }, hint: "VI-SHAM, INVARIANT: विषम संख्या, विषम हालत — never विषमी. The ष reads sh, exactly like श (unit 1 §1a), and the hint on every ष word says which letter is written. The partner of सम (lesson 3), and it also means 'difficult and lopsided' of a situation." },
        { id: "hi-u63l4-ghataanaa", type: "vocab", front: "घटाना", reading: "ghataanaa", meaning: "to subtract", accept: ["to take away an amount", "to reduce"], example: { jp: "दस में से तीन घटाओ तो सात बचता है, यह पहली कक्षा का काम है।", en: "Subtract three from ten and seven is left; this is first-class work." }, drill: { jp: "दस में से तीन घटाना आसान है", en: "Subtracting three from ten is easy" }, hint: "GHA-TAA-NAA, a regular -ना verb and the causative of घटना, to fall — RETROFLEX ट, merged to t (unit 1 §1b). The frame is X में से Y घटाना. ⚠️ The pair with जोड़ना, to join (unit 31), which also means to add: Hindi does its arithmetic with जोड़ना and घटाना." },
        { id: "hi-u63l4-ikaaii", type: "vocab", front: "इकाई", reading: "ikaaii", meaning: "a unit of measure", accept: ["the single thing you count in"], example: { jp: "लंबाई की इकाई मीटर है और वज़न की इकाई किलो।", en: "The unit of length is the metre and the unit of weight is the kilo." }, drill: { jp: "लंबाई की इकाई मीटर है", en: "The unit of length is the metre" }, hint: "I-KAA-II — FEMININE, and all three syllables are vowels or near it: इ, का, ई. Built on एक, one. ⚠️ The word that makes मीटर, किलो, लीटर and ग्राम (units 45 and 19) into a system instead of four separate words." },
      ],
    },
  ],
};
