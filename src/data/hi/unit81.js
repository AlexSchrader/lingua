// HI Unit 81 — शब्द कैसे बनते हैं ("How words are built") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then §B1–§B7 in
// unit74.js — and §B5 there is the record of this unit's retheme.
//
// 🚨 RETHEMED SLOT (scaffold: "Grammar 8 — nuance, evidentiality, nominalization").
// lint hard-errors on that title, and the slot names THREE things. This unit takes
// the third, NOMINALIZATION, and the reason is a measurement:
//
// AN EVIDENTIALITY UNIT'S VOCABULARY IS 16/18 SPENT. A2 u57 सोचना और मानना plus
// u32 and u39 carded सोचना, जानना, समझना, मानना, याद, अंदाज़ा, तुलना, उम्मीद,
// इरादा, शक, भरोसा, ध्यान, गौर, कल्पना, हकीकत, यकीन, साबित, ज़ाहिर, नज़रिया, राय,
// सहमत, फ़ैसला, विचार, खयाल, दलील, सबूत, मुद्दा, तर्क. Vocab fronts are globally
// unique, so not one of them can be re-carded — and **block 1's u64 "Hedging and
// uncertainty" owns whatever is left of the field**. Writing a second evidentiality
// unit here would have meant inventing 24 cards for a filled shelf, or weakening
// the validator to force a duplicate in. Neither is allowed.
//
// ✅ AND THE EVIDENTIALITY IS STILL TAUGHT — AS A CONSTRUCTION WITH NO FRONT,
// which is the mechanism unit1.js §6 used for का/के/की/को and §A3 used for सकना.
// Hindi attributes a claim with three frames, all of them built out of words the
// course already has, and every lesson in this unit uses one:
//     सुना है कि…        "it is heard that" — the hearsay frame. l1, l3.
//     कहा जाता है कि…    "it is said that" — the PASSIVE from u80, put to work. l2.
//     लगता है कि…        "it seems that" — लगना (u22) impersonal. l4.
// A learner meets all three assembled and is never asked to produce one alone.
// ZERO 3rd-PERSON EXCEPTIONS spent; no validator weakened; no taken front re-used.
//
// ═════════════════════════════════════════════════════════════════════════════
// WHAT THIS UNIT ACTUALLY TEACHES: HINDI BUILDS WORDS AT BOTH ENDS, and the
// course had never said so. 24 cards, four machines.
// ═════════════════════════════════════════════════════════════════════════════
//   l1  VERB → NOUN with -आई and -आवट:  सुनना→सुनवाई · लिखना→लिखावट
//   l2  VERB → NOUN with -आव and -आवा:  बचाना→बचाव · दिखाना→दिखावा
//   l3  ADJECTIVE → NOUN with -आई and -ी: अच्छा→अच्छाई · सख्त→सख्ती
//   l4  THE PREFIX THAT REVERSES: बे-, ना-, अन-, गैर-, नि-
// ⚠️ THE PEDAGOGIC POINT IS THAT THE MACHINE IS PRODUCTIVE AND THE COURSE CANNOT
// CARD ITS OUTPUT. `scope-hi.mjs`'s derive() generates INFLECTIONS only, and
// unit31.js §A6 says so explicitly: "गरम does not generate गरमी, दुकान does not
// generate दुकानदार, and those stay separate fronts that must be taught." So every
// one of these 24 was out of scope until this unit — verified, not assumed — and
// after it the learner can read a hundred more he has never been carded.
//
// ⚠️ ONE FRONT WANTED AND REFUSED, and it is the सोना-for-gold class:
//   • **सुधार ("an improvement") — REFUSED because it is the BARE STEM of सुधारना,
//     to correct (u31l?).** unit41.js refused जीत and हार on exactly this ground —
//     "the bare stems of this unit's own जीतना and हारना … one lexeme on two
//     mastery tracks". The 50 units between u31 and u81 do not change what it is,
//     and सुधारना's accept list already contains "to improve", so the card would
//     add nothing. चुनाव took the slot: that one is a -आव noun whose meaning has
//     MOVED (चुनना is "to choose", चुनाव is "an election"), which is the test.
//   • NAMED FOR A LATER BLOCK, free and unspent: कड़वाहट, मिठास, गरमाहट, नरमी,
//     एकता, मानवता, महत्व, मिलावट, बोली, चौड़ाई, जानकार, बुद्धिमान, ताकतवर.
//     **थकावट is NOT on that list and must not be carded: थकान (u20) is
//     "tiredness" and accepts "fatigue" and "exhaustion".**
//
// 🚨 TWELVE SUBSTRING TRAPS — MORE THAN ANY UNIT IN THE LANGUAGE — AND THEY ARE
// INHERENT TO THE THEME. `isLetter` is /\p{L}/ only (src/store/cardRouting.js),
// so a MĀTRĀ does NOT block a `findWholeWord` match, and a derived word therefore
// almost always contains its base:
//   सच्चाई ⊃ सच (u2, ् is \p{M}) · अच्छाई ⊃ अच्छा (u6) · बुराई ⊃ बुरा (u24) ·
//   गहराई ⊃ गहरा (u16) · सख्ती ⊃ सख्त (u27) · मज़बूती ⊃ मज़बूत (u20) ·
//   चढ़ाई ⊃ nothing (चढ़ना is not चढ़) · नाकाम ⊃ काम (u4) · निडर ⊃ डर (u27) ·
//   बेबस ⊃ बस (u1) · बेईमान ⊃ nothing (ईमानदार is longer, not shorter) ·
//   गैरकानूनी ⊃ कानून — **BLOCKED**, because the character before it is र, a LETTER.
// THE RULE APPLIED, and a later seat editing any of these 24 sentences must
// re-run it: **no drill in this unit contains the base of its own front, and no
// drill of any base word contains the derived form.** Checked in both directions
// against all 1,608 cards, mechanically.
//
// GENDER TRAPS THIS UNIT ADDS (§4), and the suffix IS the rule here, which is the
// most useful thing in the unit:
//   ⚠️ **-आई AND -आवट AND -ी ARE ALWAYS FEMININE**: सुनवाई, चढ़ाई, लिखावट, बनावट,
//   सजावट, रुकावट, सच्चाई, अच्छाई, बुराई, गहराई, सख्ती, मज़बूती — twelve cards,
//   one rule, no exceptions in Hindi.
//   ⚠️ **-आव AND -आवा ARE ALWAYS MASCULINE**: बचाव, फैलाव, बहाव, घुमाव, चुनाव,
//   दिखावा. Six cards, one rule.
//   ADJECTIVES: **बेईमान, बेबस, नाकाम, अनपढ़ and निडर are INVARIANT** (unit53's
//   rule); **गैरकानूनी AGREES despite ending in -ी** — गैरकानूनी काम, गैरकानूनी
//   बात are both fine because -ी adjectives do not change, so it is invariant too.
//   Named on its card.
// RETROFLEX/DENTAL (§1b): no new collision. लिखावट likhaavat, बनावट banaavat,
// सजावट sajaavat and रुकावट rukaavat all end in RETROFLEX ट with no dental twin
// anywhere in the corpus; सख्ती sakhtii and मज़बूती mazbuutii are DENTAL त. The
// doubling hatch fires nowhere. ढ़ READS rh (§1c): चढ़ाई charhaaii and अनपढ़ anparh,
// matching पढ़ना parhnaa (u4l?) and बूढ़ा buurhaa (u10l?). GEMINATION: सच्चाई
// sacchaaii and अच्छाई acchaaii double, as the spelling requires.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT81 = {
  id: "hi-u81",
  lang: "hi",
  title: "शब्द कैसे बनते हैं",
  order: 81,
  stage: "b1",
  lessons: [
    {
      id: "hi-u81l1",
      unit: 81,
      lesson: 1,
      title: "The noun a verb makes: -आई and -आवट",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Build a noun off a verb with -आई or -आवट — a hearing, a climb, handwriting, the make of a thing, decoration, an obstruction.",
      items: [
        { id: "hi-u81l1-sunvaaii", type: "vocab", front: "सुनवाई", reading: "sunvaaii", meaning: "a hearing of a case", accept: ["the day a court listens to you", "being given a hearing"], example: { jp: "सुना है कि अगली सुनवाई अगले महीने है।", en: "It is heard that the next hearing is next month." }, drill: { jp: "अगली सुनवाई अगले महीने है", en: "The next hearing is next month" }, hint: "SUN-VAA-II — ⚠️ FEMININE, and **every -आई noun in Hindi is feminine**: that is the rule this lesson is for. Built off सुनना, to hear (unit 12). ⚠️ The example opens with सुना है कि — the HEARSAY frame, which this unit teaches as a construction with no card of its own." },
        { id: "hi-u81l1-charhaaii", type: "vocab", front: "चढ़ाई", reading: "charhaaii", meaning: "an uphill climb", accept: ["a steep rise in a path", "the going up of a slope"], example: { jp: "मंदिर तक की चढ़ाई दो घंटे की है।", en: "The climb up to the temple is two hours." }, drill: { jp: "मंदिर तक की चढ़ाई दो घंटे की है", en: "The climb to the temple is two hours" }, hint: "CHA-RHAA-II — ⚠️ FEMININE, from चढ़ना, to climb on (unit 29). ढ़ reads **rh** (§1c), as in पढ़ना parhnaa. ⚠️ Not ऊँचाई (unit 45), which is how high a thing IS: a चढ़ाई is the effort of getting up it." },
        { id: "hi-u81l1-likhaavat", type: "vocab", front: "लिखावट", reading: "likhaavat", meaning: "handwriting", accept: ["the way a person forms letters", "somebody's hand"], example: { jp: "उसकी लिखावट पढ़ना बहुत मुश्किल है।", en: "His handwriting is very hard to read." }, drill: { jp: "उसकी लिखावट पढ़ना मुश्किल है", en: "His handwriting is hard to read" }, hint: "LI-KHAA-VAT — ⚠️ FEMININE, and **every -आवट noun is feminine too**. From लिखना, to write (unit 6). The final ट is RETROFLEX — tongue curled back. Plain ख: unit 1 §7 keeps ख़ uncarded." },
        { id: "hi-u81l1-banaavat", type: "vocab", front: "बनावट", reading: "banaavat", meaning: "the make of a thing", accept: ["how a thing is built", "its construction"], example: { jp: "इस मंदिर की बनावट बहुत पुरानी है।", en: "The make of this temple is very old." }, drill: { jp: "इस मंदिर की बनावट बहुत पुरानी है", en: "This temple's construction is very old" }, hint: "BA-NAA-VAT — ⚠️ FEMININE. From बनाना, to make (unit 31). ⚠️ It also means artificiality in a person — बनावट से बात करना, to talk affectedly — which is where दिखावा (l2) comes close to it." },
        { id: "hi-u81l1-sajaavat", type: "vocab", front: "सजावट", reading: "sajaavat", meaning: "decoration", accept: ["the doing-up of a place", "how a place has been dressed"], example: { jp: "शादी की सजावट देखकर सब खुश हुए।", en: "Everyone was pleased on seeing the wedding decoration." }, drill: { jp: "शादी की सजावट बहुत अच्छी थी", en: "The wedding decoration was very good" }, hint: "SA-JAA-VAT — ⚠️ FEMININE. From सजाना, to decorate (unit 31). ⚠️ Note the gloss is the NOUN of the act, not the thing hung up — a decoration you can hold has no card in this course." },
        { id: "hi-u81l1-rukaavat", type: "vocab", front: "रुकावट", reading: "rukaavat", meaning: "an obstruction", accept: ["something standing in the way", "a hold-up"], example: { jp: "सड़क पर कोई रुकावट नहीं थी।", en: "There was no obstruction on the road." }, drill: { jp: "सड़क पर कोई रुकावट नहीं थी", en: "There was no obstruction on the road" }, hint: "RU-KAA-VAT — ⚠️ FEMININE. From रुकना, to stop (unit 12). ⚠️ Not मुश्किल (unit 6), which is 'difficult' and ACCEPTS 'a difficulty': a रुकावट is a physical or procedural thing in the path, not the hardness of a task." },
      ],
    },
    {
      id: "hi-u81l2",
      unit: 81,
      lesson: 2,
      title: "The noun a verb makes: -आव and -आवा",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Build a noun off a verb with -आव or -आवा — protection, a spread, a flow, a winding stretch, an election, showing off.",
      items: [
        { id: "hi-u81l2-bachaav", type: "vocab", front: "बचाव", reading: "bachaav", meaning: "protection from harm", accept: ["keeping out of harm's way", "a defence against something"], example: { jp: "कहा जाता है कि साफ़ पानी बीमारी से बचाव है।", en: "It is said that clean water is a protection against illness." }, drill: { jp: "साफ़ पानी बीमारी से बचाव करता है", en: "Clean water protects against illness" }, hint: "BA-CHAAV — ⚠️ MASCULINE, and **every -आव noun in Hindi is masculine**: that is this lesson's rule, and it is the exact mirror of l1's. From बचाना, to save (unit 31). ⚠️ The example opens with कहा जाता है कि — the PASSIVE from unit 80, used to attribute a claim to nobody in particular." },
        { id: "hi-u81l2-phailaav", type: "vocab", front: "फैलाव", reading: "phailaav", meaning: "the spread of a thing", accept: ["how far something has got", "the reach it has taken"], example: { jp: "शहर का फैलाव हर साल बढ़ता जाता है।", en: "The spread of the city goes on growing every year." }, drill: { jp: "शहर का फैलाव हर साल बढ़ता है", en: "The spread of the city grows every year" }, hint: "PHAI-LAAV — ⚠️ MASCULINE. From फैलना, to spread (unit 75) — ph is one puff of air, not f, and the ai is ऐ's open vowel. The verb is the process, the noun is the extent reached." },
        { id: "hi-u81l2-bahaav", type: "vocab", front: "बहाव", reading: "bahaav", meaning: "the flow of water", accept: ["the current of a river", "how fast a liquid runs"], example: { jp: "बारिश के बाद नदी का बहाव तेज़ हो गया।", en: "After the rain the river's flow became fast." }, drill: { jp: "बारिश के बाद नदी का बहाव तेज़ हुआ", en: "After the rain the river's flow became fast" }, hint: "BA-HAAV — ⚠️ MASCULINE. From बहना, to flow (unit 49). Also used of a crowd and of time: वक्त के बहाव में. Not लहर, a wave (unit 33), which is one movement on the surface." },
        { id: "hi-u81l2-ghumaav", type: "vocab", front: "घुमाव", reading: "ghumaav", meaning: "a winding stretch", accept: ["the way a road curves round", "a twist in something"], example: { jp: "पहाड़ की सड़क पर बहुत घुमाव हैं।", en: "There are many winding stretches on the mountain road." }, drill: { jp: "पहाड़ की सड़क पर बहुत घुमाव हैं", en: "There are many bends on the mountain road" }, hint: "GHU-MAAV — ⚠️ MASCULINE, consonant-final, so the plural is the bare form: बहुत घुमाव. From घुमाना (unit 80). ⚠️ Not मोड़ (unit 29), which is 'a turning' and accepts 'a bend' and 'a corner in a road' — a मोड़ is ONE corner, a घुमाव is a stretch that keeps curving." },
        { id: "hi-u81l2-chunaav", type: "vocab", front: "चुनाव", reading: "chunaav", meaning: "an election", accept: ["the holding of a vote", "a poll to choose a government"], example: { jp: "चुनाव के दिन सब दुकानें बंद रहती हैं।", en: "On the day of the election all the shops stay shut." }, drill: { jp: "चुनाव के दिन सब दुकानें बंद रहती हैं", en: "On election day all the shops stay shut" }, hint: "CHU-NAAV — ⚠️ MASCULINE. From चुनना, to choose (unit 18) — and this is the -आव noun whose meaning has MOVED furthest from its verb, which is exactly why it earns a card: चुनना is any choosing, चुनाव is the national event. Not वोट (unit 42), which is the one ballot you cast." },
        { id: "hi-u81l2-dikhaavaa", type: "vocab", front: "दिखावा", reading: "dikhaavaa", meaning: "showing off", accept: ["doing a thing only to be seen", "outward display"], example: { jp: "उसका यह पूरा काम सिर्फ़ दिखावा था।", en: "This whole work of his was only for show." }, drill: { jp: "उसका यह काम सिर्फ़ दिखावा था", en: "This work of his was only for show" }, hint: "DI-KHAA-VAA — ⚠️ MASCULINE, and the -आवा form is rarer than -आव: this is the only one the course cards. From दिखाना, to show (unit 26). दिखावा करना is to put it on; बिना दिखावे is 'without any fuss'." },
      ],
    },
    {
      id: "hi-u81l3",
      unit: 81,
      lesson: 3,
      title: "The noun an adjective makes",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Build a noun off an adjective — truthfulness, goodness, a vice, depth, strictness, sturdiness.",
      items: [
        { id: "hi-u81l3-sacchaaii", type: "vocab", front: "सच्चाई", reading: "sacchaaii", meaning: "truthfulness", accept: ["the quality of telling the truth", "honesty in what one says"], example: { jp: "सुना है कि उसकी सच्चाई पर कोई शक नहीं करता।", en: "It is heard that nobody doubts his truthfulness." }, drill: { jp: "उसकी सच्चाई पर कोई शक नहीं करता", en: "Nobody doubts his truthfulness" }, hint: "SAC-CHAA-II — ⚠️ FEMININE, like every -आई noun. Built on सच, truth (unit 2), with the च doubled. ⚠️ Glossed 'truthfulness' and not 'truth': सच IS 'truth' and accepts 'the truth', so this card had to take the QUALITY rather than the thing." },
        { id: "hi-u81l3-acchaaii", type: "vocab", front: "अच्छाई", reading: "acchaaii", meaning: "goodness", accept: ["the good in a person", "a good quality"], example: { jp: "हर आदमी में कोई अच्छाई होती है।", en: "There is some goodness in every man." }, drill: { jp: "हर आदमी में कोई अच्छाई होती है", en: "There is some goodness in every man" }, hint: "AC-CHAA-II — ⚠️ FEMININE. Built on अच्छा, good (unit 6), which ends in -आ — and **the -आ drops before -आई**: अच्छा → अच्छाई, not अच्छाआई. Same for बुरा → बुराई beside it." },
        { id: "hi-u81l3-buraaii", type: "vocab", front: "बुराई", reading: "buraaii", meaning: "a vice", accept: ["a bad quality in a person", "the bad in something"], example: { jp: "झूठ बोलना एक बड़ी बुराई है।", en: "Telling lies is a great vice." }, drill: { jp: "झूठ बोलना एक बड़ी बुराई है", en: "Telling lies is a great vice" }, hint: "BU-RAA-II — ⚠️ FEMININE, from बुरा, bad (unit 24). ⚠️ Glossed 'a vice' because बुरा ACCEPTS 'evil' and कसूर (unit 32) accepts 'wrongdoing' — both of the obvious glosses were taken, which is the commonest reason a B1 card's gloss looks odd." },
        { id: "hi-u81l3-gahraaii", type: "vocab", front: "गहराई", reading: "gahraaii", meaning: "depth", accept: ["how deep a thing is", "the deep part of something"], example: { jp: "इस नदी की गहराई कोई नहीं जानता।", en: "Nobody knows the depth of this river." }, drill: { jp: "इस नदी की गहराई कोई नहीं जानता", en: "Nobody knows this river's depth" }, hint: "GAH-RAA-II — ⚠️ FEMININE, from गहरा, deep (unit 16). It belongs beside ऊँचाई and लंबाई (unit 45), which are built the same way and were carded there — so this is the third of the four measurement -आई nouns, and चौड़ाई, width, is the one still free." },
        { id: "hi-u81l3-sakhtii", type: "vocab", front: "सख्ती", reading: "sakhtii", meaning: "strictness", accept: ["being hard on people", "severity in how one deals"], example: { jp: "नए मालिक की सख्ती से सब परेशान हैं।", en: "Everyone is troubled by the new owner's strictness." }, drill: { jp: "नए मालिक की सख्ती से सब परेशान हैं", en: "Everyone is troubled by the new owner's strictness" }, hint: "SAKH-TII — ⚠️ FEMININE, and **-ी on a consonant-final adjective is the other abstract-noun suffix**: सख्त → सख्ती, मज़बूत → मज़बूती. Plain ख. DENTAL त. ⚠️ It CONTAINS सख्त (unit 27), which is why neither card's sentence uses the other word." },
        { id: "hi-u81l3-mazbuutii", type: "vocab", front: "मज़बूती", reading: "mazbuutii", meaning: "sturdiness", accept: ["how solidly a thing is built", "firmness of make"], example: { jp: "इस पुल की मज़बूती सौ साल से साबित है।", en: "This bridge's sturdiness has been proven for a hundred years." }, drill: { jp: "इस पुल की मज़बूती साबित हो गई", en: "This bridge's sturdiness has been proven" }, hint: "MAZ-BUU-TII — ⚠️ FEMININE, with ज़ — a z. Built on मज़बूत, strong (unit 20) — and **spelled with the nukta because the base has it**: मज़बूती, never मजबूती. That is the बर्तन/बिलकुल trap (unit 51) and it is how you check any derived front. ⚠️ Glossed 'sturdiness' because ताकत (unit 20) IS 'strength'." },
      ],
    },
    {
      id: "hi-u81l4",
      unit: 81,
      lesson: 4,
      title: "The prefix that reverses",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Reverse a word with बे-, ना-, अन-, गैर- or नि- — dishonest, powerless, unsuccessful, unlettered, illegal, fearless.",
      items: [
        { id: "hi-u81l4-beiimaan", type: "vocab", front: "बेईमान", reading: "beiimaan", meaning: "dishonest", accept: ["not to be trusted with money", "crooked"], example: { jp: "लगता है कि वह दुकानदार बेईमान है।", en: "It seems that shopkeeper is dishonest." }, drill: { jp: "वह दुकानदार बेईमान निकला", en: "That shopkeeper turned out dishonest" }, hint: "BE-II-MAAN — ⚠️ INVARIANT (unit53's rule). **बे- is the Persian prefix that reverses**, and it is the commonest of the five: बे + ईमान (honesty) — so this is the opposite of ईमानदार (unit 27). ⚠️ The example opens with लगता है कि, the 'it seems that' frame this unit teaches as a construction." },
        { id: "hi-u81l4-bebas", type: "vocab", front: "बेबस", reading: "bebas", meaning: "powerless to act", accept: ["with no power to do anything", "unable to help oneself"], example: { jp: "बीमारी के सामने वह बिलकुल बेबस था।", en: "He was quite powerless against the illness." }, drill: { jp: "बीमारी के सामने वह बेबस था", en: "He was powerless against the illness" }, hint: "BE-BAS — ⚠️ INVARIANT. बे- again, on बस (control), which is NOT the बस that means a bus (unit 1) — and the two are the same string, so this word contains that front. ⚠️ Glossed 'powerless to act' because मजबूर (unit 32) ACCEPTS 'helpless': मजबूर is pushed into something, बेबस can do nothing at all." },
        { id: "hi-u81l4-naakaam", type: "vocab", front: "नाकाम", reading: "naakaam", meaning: "unsuccessful", accept: ["that did not come off", "having failed"], example: { jp: "दो बार कोशिश की और दोनों बार नाकाम रहा।", en: "He tried twice and was unsuccessful both times." }, drill: { jp: "दो बार कोशिश की और नाकाम रहा", en: "He tried twice and was unsuccessful" }, hint: "NAA-KAAM — ⚠️ INVARIANT. **ना- is the second reversing prefix**, on काम, work (unit 4) — so the word literally says 'no-work'. The opposite of सफल (unit 32). ⚠️ It CONTAINS काम, because the ा before it is a mātrā and does not block the match, so neither card's sentence uses the other word." },
        { id: "hi-u81l4-anparh", type: "vocab", front: "अनपढ़", reading: "anparh", meaning: "unlettered", accept: ["unable to read or write", "with no schooling"], example: { jp: "वह अनपढ़ है लेकिन हिसाब बहुत तेज़ है।", en: "He is unlettered but very quick at accounts." }, drill: { jp: "वह अनपढ़ है लेकिन हिसाब तेज़ है", en: "He is unlettered but quick at accounts" }, hint: "AN-PARH — ⚠️ INVARIANT. **अन- is the Sanskrit reversing prefix**, on पढ़ना, to read (unit 4) — and अनाथ (unit 78) is the same prefix on नाथ. ढ़ reads **rh** (§1c), like पढ़ना parhnaa. Said of a person, never of a thing." },
        { id: "hi-u81l4-gairkaanuunii", type: "vocab", front: "गैरकानूनी", reading: "gairkaanuunii", meaning: "illegal", accept: ["against the law", "not permitted by law"], example: { jp: "शहर में यह काम पूरी तरह गैरकानूनी है।", en: "In the city this is wholly illegal." }, drill: { jp: "यह काम पूरी तरह गैरकानूनी था", en: "This was wholly illegal" }, hint: "GAIR-KAA-NUU-NII — ⚠️ INVARIANT, even ending in -ी. **गैर- is the fourth reversing prefix**, on कानूनी, lawful, from कानून (unit 42). Plain ग — unit 1 §7 keeps ग़ uncarded. ⚠️ It contains कानून and the match CANNOT fire: the letter before it is र, and `findWholeWord` is blocked by a letter." },
        { id: "hi-u81l4-nidar", type: "vocab", front: "निडर", reading: "nidar", meaning: "fearless", accept: ["with no fear at all", "unafraid"], example: { jp: "वह अकेला और निडर आदमी है।", en: "He is a solitary and fearless man." }, drill: { jp: "वह अकेला और निडर आदमी है", en: "He is a solitary and fearless man" }, hint: "NI-DAR — ⚠️ INVARIANT. **नि- is the fifth reversing prefix**, on डर, fear (unit 27), and DENTAL द. ⚠️ Not बहादुर (unit 27), which accepts 'courageous': बहादुर acts in spite of fear, निडर has none to act in spite of. It contains डर, so neither sentence uses the other word." },
      ],
    },
  ],
};
