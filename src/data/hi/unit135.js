// HI Unit 135 — झगड़ा और सुलह ("The quarrel and the making-up") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 15 (B2)"). Theme ASSIGNED CENTRALLY at
// **4 of 18 taken** — and this is the slot where that number is most misleading
// in the whole block. **BOTH TITLE WORDS ARE ALREADY CARDED** (झगड़ा@u30,
// सुलह@u78) and this unit's own probe of 64 conflict candidates found **32
// already taken**: u57 इलज़ाम, बहाना and उलझन; u61 विवाद, मतभेद and तटस्थ; u65
// खंडन, पक्षपात and निष्पक्ष; u71 माफ़ी, जवाबदेही and रियायत; u30 बहस and
// फ़ैसला; u89 समझौता; u67 पछतावा and आक्रोश; u52 अफ़सोस and तनाव; u85 हर्जाना;
// u94 दरार; u81 नरमी; u90 संयम; u83 खेद; u32 कसूर; u70 सुलझाना; u26 समझाना;
// u49 डाँटना; u51 मनाना; u6 क्षमा.
// ⚠️ **THE ABSTRACT GLOSS SPACE IS THE TIGHTEST RESOURCE IN THE LANGUAGE**
// (unit61.js §B4), and B1 already spent the obvious half of this field. Every
// gloss here was run through `gloss-taken.mjs` before the card was written.
//
// 🚨 ONE REFUSAL, AND IT IS THE FOURTH LEXEME-DUPLICATE OF THE BLOCK:
//   • **गलतफ़हमी ("a misunderstanding") WAS REFUSED** — गलतफहमी@u57 is the same
//     lexeme spelled without the nukta on फ. `front-taken.mjs` passed it, because
//     it compares strings; `reading-taken.mjs` caught it, because both read
//     `galatfahmii`. **शिकवा (l1) took the slot.** unit124.js §C3 is the record.
//
// ⚠️ THE HARDEST PAIR IN THIS BLOCK IS IN l2 AND IT IS DELIBERATE: **तकरार
// `takraar` and टकराव `takraav`.** §1b merges the DENTAL त and the RETROFLEX ट to
// t in every word reading, so the two readings differ only in their last letter.
// They do NOT collide (`reading-taken.mjs` run on both), so §1b's doubling escape
// hatch is not triggered and must not be applied — but they are near-homophones,
// so both hints say which letter is written and point at the other card.
//
// ⚠️ GENDER: FEMININE — फटकार (consonant-final and unmarked), तकरार
// (consonant-final), भिड़ंत (consonant-final), रंजिश (consonant-final), दुश्मनी,
// नाराज़गी, भरपाई, सहिष्णुता (-ता). MASCULINE — आरोप, स्पष्टीकरण, शिकवा (-आ,
// masculine with the rule), ताना, उलाहना, कलह, टकराव, मनमुटाव, अलगाव, मध्यस्थ,
// निपटारा, सद्भाव, राज़ीनामा. भड़कना, उकसाना and रूठना are -ना INFINITIVES
// (unit1.js §5 — still zero 3rd-person exceptions in the whole language).
export const HI_UNIT135 = {
  id: "hi-u135",
  lang: "hi",
  title: "झगड़ा और सुलह",
  order: 135,
  stage: "b2",
  lessons: [
    {
      id: "hi-u135l1",
      unit: 135,
      lesson: 1,
      title: "Laying the blame",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Make a charge you cannot prove, and name the grievance, the rebuke, the taunt, the reproach and the loss of good name that go with it.",
      items: [
        { id: "hi-u135l1-tohmat", type: "vocab", front: "तोहमत", reading: "tohmat", meaning: "a charge made without proof", accept: ["something laid at somebody's door with nothing behind it"], example: { jp: "बिना सबूत की तोहमत रिश्ते को उसी तरह तोड़ देती है जैसे कोई असली आरोप।", en: "A charge made without proof breaks a relationship just as a real accusation does." }, drill: { jp: "बिना सबूत की तोहमत रिश्ता तोड़ देती है", en: "A charge without proof breaks a relationship" }, hint: "TOH-MAT. ⚠️ **FEMININE AND CONSONANT-FINAL**, so nothing in the shape says so — the §B6 class (ज़िद, छाप, पहल, दर, डींग, ढील). झूठी तोहमत, never झूठा. 🚨 **आरोप WAS REMOVED FROM THIS SLOT**: u102l2 owns it as the formal charge a court deals with — and a तोहमत is precisely the one with nothing behind it, which is what a quarrel actually produces." },
        { id: "hi-u135l1-badnaamii", type: "vocab", front: "बदनामी", reading: "badnaamii", meaning: "the damage done to a name", accept: ["the loss of standing that is left when the quarrel is over"], example: { jp: "झगड़ा निपट भी जाए तो बदनामी रह जाती है, और वही सबसे देर तक याद रहती है।", en: "Even once the quarrel is settled the loss of good name remains, and that is what is remembered longest." }, drill: { jp: "झगड़ा निपटने पर भी बदनामी रह जाती है", en: "Even when the quarrel is settled the bad name remains" }, hint: "BAD-NAA-MII, feminine, which the long ी gets right. बद-, bad, the Persian prefix of बदतर, plus नाम, a name — ✅ and नाम CANNOT be matched inside it, because the द before it is a letter. ⚠️ **IT IS THE CONSEQUENCE CARD IN THIS LESSON**: the other five are things people say, this is what is left afterwards. 🚨 **स्पष्टीकरण WAS REMOVED FROM THIS SLOT**: u118l2 owns it as a clarification given in writing." },
        { id: "hi-u135l1-shikvaa", type: "vocab", front: "शिकवा", reading: "shikvaa", meaning: "a grievance held against someone", accept: ["a complaint somebody carries about how they were treated"], example: { jp: "उसका शिकवा पैसे का नहीं, बात के तरीके का था।", en: "His grievance was not about the money but about the way of speaking." }, drill: { jp: "उसका शिकवा पैसे का नहीं था", en: "His grievance was not about the money" }, hint: "SHIK-VAA, masculine and regular -ा, and ⚠️ THE ि IS SHORT: shik-vaa. ⚠️ Not शिकायत (unit 39), which is FILED with somebody: a शिकवा is carried quietly and is usually said to the person themselves. 🚨 **गलतफ़हमी WAS REFUSED FOR THIS SLOT** — गलतफहमी (unit 57) is the same lexeme without the nukta, and only `reading-taken.mjs` saw it (unit124.js §C3)." },
        { id: "hi-u135l1-phatkaar", type: "vocab", front: "फटकार", reading: "phatkaar", meaning: "a rebuke", accept: ["a sharp telling-off from somebody senior"], example: { jp: "अदालत की फटकार के बाद सरकार ने काम शुरू किया।", en: "After the court's rebuke the government started the work." }, drill: { jp: "अदालत की फटकार के बाद काम शुरू हुआ", en: "The work started after the court's rebuke" }, hint: "PHAT-KAAR — ⚠️ FEMININE and consonant-final: कड़ी फटकार, फटकार मिली. फ carries a puff of air and is NOT the nukta फ़ — phat, never fat, the same dot that separates फुर्ती from फ़रार (units 131 and 130). The ट is RETROFLEX. ⚠️ Not डाँटना (unit 49): a फटकार comes from above and is often on the record." },
        { id: "hi-u135l1-taanaa", type: "vocab", front: "ताना", reading: "taanaa", meaning: "a taunt", accept: ["a remark made to needle somebody about something"], example: { jp: "हर बार वही ताना सुनकर वह चुप हो जाती थी।", en: "Hearing the same taunt every time, she would fall silent." }, drill: { jp: "वही ताना सुनकर वह चुप हो जाती थी", en: "Hearing the same taunt she would fall silent" }, hint: "TAA-NAA, masculine and regular -ा, so the oblique is ताने, and the DENTAL त. ⚠️ **THE FRAME IS ताना मारना, NEVER ताना कहना.** 🚨 **IT IS ALSO THE LAST THREE LETTERS OF दस्ताना, a glove (unit 125), WHERE THE ROUTER CAN MATCH IT** — two unrelated words, checked rather than assumed. In weaving ताना is the warp, and तानना, to stretch, is not carded." },
        { id: "hi-u135l1-ulaahnaa", type: "vocab", front: "उलाहना", reading: "ulaahnaa", meaning: "a reproach made to someone's face", accept: ["telling somebody directly that they let you down"], example: { jp: "माँ का उलाहना सबसे भारी पड़ता है।", en: "A mother's reproach weighs the heaviest." }, drill: { jp: "माँ का उलाहना सबसे भारी पड़ता है", en: "A mother's reproach weighs heaviest" }, hint: "U-LAAH-NAA, masculine and regular -ा, and the ह is HEARD: u-laah-naa. ⚠️ **IT IS NOT AN INFINITIVE ALTHOUGH IT ENDS IN -ना** — उलाहना is a NOUN, and there is no verb उलाहना; the frame is उलाहना देना. ⚠️ The gentlest of the four blame words here: an आरोप is public, a फटकार official, a ताना cruel, an उलाहना hurt." },
      ],
    },
    {
      id: "hi-u135l2",
      unit: 135,
      lesson: 2,
      title: "When it flares",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe a wrangle, household strife, a clash and a head-on confrontation, and say that somebody flared up or was provoked.",
      items: [
        { id: "hi-u135l2-takraar", type: "vocab", front: "तकरार", reading: "takraar", meaning: "a wrangle", accept: ["an argument that goes back and forth and settles nothing"], example: { jp: "छोटी बात पर तकरार आधे घंटे चली।", en: "The wrangle over a small thing went on for half an hour." }, drill: { jp: "छोटी बात पर तकरार आधे घंटे चली", en: "The wrangle over a small thing lasted half an hour" }, hint: "TAK-RAAR — ⚠️ FEMININE and consonant-final: लंबी तकरार. 🚨 **IT OPENS ON THE DENTAL त, AND टकराव TWO CARDS ON OPENS ON THE RETROFLEX ट.** §1b merges both to t, so the readings are `takraar` and `takraav` and only the LAST letter tells them apart on a dictation card. They do not collide, so no doubling is needed — but learn which letter is written." },
        { id: "hi-u135l2-kalah", type: "vocab", front: "कलह", reading: "kalah", meaning: "strife in a household", accept: ["long-running bad feeling inside a family"], example: { jp: "घर की कलह बाहर किसी को नहीं दिखती।", en: "A household's strife is not visible to anybody outside." }, drill: { jp: "घर की कलह बाहर नहीं दिखती", en: "Household strife is not visible outside" }, hint: "KA-LAH — ⚠️ FEMININE and consonant-final, and the final ह is HEARD: ka-lah. ⚠️ Not झगड़ा (unit 30), which is one quarrel with a beginning and an end: कलह is the WEATHER of a house, going on for years, which is why the example says it cannot be seen from outside." },
        { id: "hi-u135l2-takraav", type: "vocab", front: "टकराव", reading: "takraav", meaning: "a clash", accept: ["two sides coming up against each other"], example: { jp: "दोनों विभागों में टकराव पुराना है।", en: "The clash between the two departments is an old one." }, drill: { jp: "दोनों विभागों में टकराव पुराना है", en: "The clash between the two departments is old" }, hint: "TAK-RAAV, masculine. 🚨 **IT OPENS ON THE RETROFLEX ट — TONGUE CURLED BACK — WHILE तकरार TWO CARDS BACK OPENS ON THE DENTAL त.** Readings `takraav` and `takraar`. From टकराना, to collide. ⚠️ Not विवाद (unit 61), which is a dispute over a question: a टकराव is between PARTIES and may be about nothing but each other." },
        { id: "hi-u135l2-bhirant", type: "vocab", front: "भिड़ंत", reading: "bhirant", meaning: "a head-on confrontation", accept: ["two sides meeting face to face in the open"], example: { jp: "सड़क पर दोनों गुटों की भिड़ंत हो गई।", en: "The two factions had a confrontation on the street." }, drill: { jp: "सड़क पर दोनों गुटों की भिड़ंत हुई", en: "The two factions confronted each other on the street" }, hint: "BHI-RANT — ⚠️ FEMININE and consonant-final: बड़ी भिड़ंत. भ carries a puff of air, ड़ is the curled-back flap written **r** (unit 4), and the ं before त is the matching DENTAL nasal (§1). From भिड़ना, to come up against. ⚠️ A भिड़ंत is a single physical meeting; the टकराव before it can go on for years." },
        { id: "hi-u135l2-bharaknaa", type: "vocab", front: "भड़कना", reading: "bharaknaa", meaning: "to flare up", accept: ["to lose one's temper suddenly", "to catch fire and blaze"], example: { jp: "एक ही बात पर वह भड़क गया और कमरे से निकल गया।", en: "At one single remark he flared up and walked out of the room." }, drill: { jp: "छोटी बात पर भड़कना ठीक नहीं", en: "It is not right to flare up over a small thing" }, hint: "BHA-RAK-NAA — a -ना INFINITIVE, as every Hindi verb card is (unit1.js §5). भ carries a puff of air and ड़ is the curled-back flap written r. ⚠️ **TWO LIVE SENSES AND BOTH ARE IN THE ACCEPT LIST** — a person and a fire, and Hindi uses the same word for both. ⚠️ Its CAUSATIVE भड़काना, to incite, is deliberately not carded: the next card covers that ground." },
        { id: "hi-u135l2-uksaanaa", type: "vocab", front: "उकसाना", reading: "uksaanaa", meaning: "to provoke", accept: ["to work on somebody until they act"], example: { jp: "किसी ने उसे उकसाया और वह लड़ने चला गया।", en: "Somebody provoked him and he went off to fight." }, drill: { jp: "किसी को उकसाना अच्छी बात नहीं", en: "Provoking somebody is not a good thing" }, hint: "UK-SAA-NAA — a -ना INFINITIVE. ⚠️ **IT IS TRANSITIVE AND भड़कना IS NOT, WHICH IS THE WHOLE PAIR:** somebody उकसाता है and the other person भड़क जाता है. ⚠️ Its own causative-looking twin भड़काना would have meant the same thing, and carding two forms of one root was refused — see the hint above." },
      ],
    },
    {
      id: "hi-u135l3",
      unit: 135,
      lesson: 3,
      title: "What it leaves behind",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name a grudge, enmity, a coolness between people and estrangement, express displeasure, and say somebody is sulking.",
      items: [
        { id: "hi-u135l3-ranjish", type: "vocab", front: "रंजिश", reading: "ranjish", meaning: "a grudge kept alive", accept: ["old bad feeling somebody will not let go of"], example: { jp: "बीस साल की रंजिश एक बात से नहीं जाती, उसे समय लगता है।", en: "A twenty-year grudge does not go with one conversation; it takes time." }, drill: { jp: "पुरानी रंजिश एक बात से नहीं जाती", en: "An old grudge does not go with one conversation" }, hint: "RAN-JISH — ⚠️ FEMININE and consonant-final: पुरानी रंजिश. ⚠️ THE ि IS SHORT, and the ं before ज is the matching palatal nasal (§1). ⚠️ Not गुस्सा (unit 27), which passes: a रंजिश is KEPT, which is why it is measured in years." },
        { id: "hi-u135l3-dushmanii", type: "vocab", front: "दुश्मनी", reading: "dushmanii", meaning: "enmity", accept: ["being enemies as a standing state"], example: { jp: "दो परिवारों की दुश्मनी अगली पीढ़ी तक चली।", en: "The two families' enmity went on into the next generation." }, drill: { jp: "दो परिवारों की दुश्मनी अगली पीढ़ी तक चली", en: "The two families' enmity lasted into the next generation" }, hint: "DUSH-MA-NII — ⚠️ FEMININE. श्म is श stacked under a halant with म (unit 6). Built on दुश्मन, an enemy (unit 89) — 🚨 **AND दुश्मन SITS INSIDE IT WITH THE ROUTER ABLE TO MATCH IT**, because the ी after it is a mātrā. A noun plus its abstract are two lexemes and both may be carded, as मज़दूर (unit 28) and मज़दूरी (unit 76) already are." },
        { id: "hi-u135l3-manmutaav", type: "vocab", front: "मनमुटाव", reading: "manmutaav", meaning: "a coolness between people", accept: ["an unspoken falling-out that nobody names"], example: { jp: "दोनों पड़ोसियों में मनमुटाव है पर बात कोई नहीं करता।", en: "There is a coolness between the two neighbours but nobody talks about it." }, drill: { jp: "दोनों पड़ोसियों में मनमुटाव है", en: "There is a coolness between the two neighbours" }, hint: "MAN-MU-TAAV, masculine. मन, the mind (unit 1), plus मुटाव, a thickening — ⚠️ **AND मन SITS AT ITS START WITH THE ROUTER UNABLE TO MATCH IT**, because the म that follows is a LETTER. 🚨 **THE MILDEST WORD IN THIS LESSON AND THE MOST USEFUL:** a मनमुटाव has no quarrel in it at all, which is exactly why the example says nobody mentions it." },
        { id: "hi-u135l3-algaav", type: "vocab", front: "अलगाव", reading: "algaav", meaning: "estrangement", accept: ["two people or groups having come apart"], example: { jp: "मनमुटाव बढ़कर अलगाव बन गया।", en: "The coolness grew and became a complete estrangement." }, drill: { jp: "मनमुटाव बढ़कर पूरा अलगाव बन गया", en: "The coolness grew into complete estrangement" }, hint: "AL-GAAV, masculine, opening on the independent अ. Built on अलग, separate (unit 19) — ⚠️ **AND अलग SITS INSIDE IT WITH THE ROUTER ABLE TO MATCH IT**, because the ा after it is a mātrā. ⚠️ Not तलाक: an अलगाव needs no paper and may be between countries, parties or brothers." },
        { id: "hi-u135l3-naaraazgii", type: "vocab", front: "नाराज़गी", reading: "naaraazgii", meaning: "displeasure", accept: ["being annoyed with somebody and letting it show"], example: { jp: "उसकी नाराज़गी आँखों से ही दिख गई।", en: "Her displeasure showed in her eyes alone." }, drill: { jp: "उसकी नाराज़गी आँखों से दिख गई", en: "Her displeasure showed in her eyes" }, hint: "NAA-RAAZ-GII — ⚠️ FEMININE. ज़ is the z of unit 4. Built on नाराज़, annoyed (unit 27) — ⚠️ **AND नाराज़ SITS AT ITS START WITH THE ROUTER UNABLE TO MATCH IT**, because the ग that follows is a LETTER. ⚠️ Lighter than रंजिश: a नाराज़गी is meant to be noticed and then undone, which is what l4 is for." },
        { id: "hi-u135l3-ruuthnaa", type: "vocab", front: "रूठना", reading: "ruuthnaa", meaning: "to sulk", accept: ["to go quiet and withdraw so that somebody has to come after you"], example: { jp: "बच्चा रूठकर कोने में बैठ गया।", en: "The child sulked and sat down in the corner." }, drill: { jp: "छोटी बात पर रूठना ठीक नहीं", en: "It is not right to sulk over a small thing" }, hint: "RUUTH-NAA — a -ना INFINITIVE, ⚠️ THE ऊ LONG, and ठ is the RETROFLEX th with a puff of air, merged to th in the reading (§1b): ruuth, tongue curled back. 🚨 **ITS PARTNER IS मनाना, to coax somebody round (unit 51)** — रूठना and मनाना are a fixed pair in Hindi life, and the second one is already carded." },
      ],
    },
    {
      id: "hi-u135l4",
      unit: 135,
      lesson: 4,
      title: "Putting it right",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Bring in a mediator, settle a dispute, make good a loss, and talk about goodwill, coming back together and a written settlement.",
      items: [
        { id: "hi-u135l4-madhyasth", type: "vocab", front: "मध्यस्थ", reading: "madhyasth", meaning: "a mediator", accept: ["a third person both sides agree to listen to"], example: { jp: "दोनों तरफ़ ने एक मध्यस्थ चुना और बात आगे बढ़ी।", en: "Both sides chose a mediator and the matter moved forward." }, drill: { jp: "दोनों तरफ़ ने एक मध्यस्थ चुना", en: "Both sides chose a mediator" }, hint: "MADH-YASTH, masculine and FIXED for a woman. 🚨 **TWO STACKS AND THE WORD CLOSES ON ONE**: ध्य is ध with य under it, and स्थ is स with a DENTAL थ under it (both unit 6) — madh-yasth, and the final थ carries a puff of air. मध्य, the middle, plus स्थ, standing. ⚠️ Not तटस्थ (unit 61), which only means neutral: a मध्यस्थ ACTS." },
        { id: "hi-u135l4-nipataaraa", type: "vocab", front: "निपटारा", reading: "nipataaraa", meaning: "a settling of a dispute", accept: ["finishing a matter off so it does not come back"], example: { jp: "दो साल बाद मामले का निपटारा हो गया।", en: "After two years the matter was settled." }, drill: { jp: "दो साल बाद मामले का निपटारा हुआ", en: "The matter was settled after two years" }, hint: "NI-PA-TAA-RAA, masculine and regular -ा, so the oblique is निपटारे. ⚠️ THE ि IS SHORT and the ट is RETROFLEX. From निपटना, to be dealt with. ⚠️ Not फ़ैसला (unit 30), which somebody HANDS DOWN, and not समझौता (unit 89), which both sides SIGN: a निपटारा is the matter being OVER, however that happened." },
        { id: "hi-u135l4-bharpaaii", type: "vocab", front: "भरपाई", reading: "bharpaaii", meaning: "making good a loss", accept: ["paying or doing enough to cover what was lost"], example: { jp: "नुकसान की भरपाई कंपनी ने की।", en: "The company made good the loss." }, drill: { jp: "नुकसान की भरपाई कंपनी ने की", en: "The company made good the loss" }, hint: "BHAR-PAA-II — ⚠️ FEMININE, the -आई family again (जुताई, मड़ाई, उतराई — units 124 and 127). भरना, to fill (unit 18), plus पाई. ⚠️ Not हर्जाना (unit 85), which is money a court ORDERS: a भरपाई may be done willingly and need not be money at all." },
        { id: "hi-u135l4-sadbhaav", type: "vocab", front: "सद्भाव", reading: "sadbhaav", meaning: "goodwill between communities", accept: ["people of different kinds living well together"], example: { jp: "दंगे के बाद मोहल्ले में सद्भाव लौटने में साल लगा।", en: "After the riot it took a year for goodwill to return to the neighbourhood." }, drill: { jp: "मोहल्ले में सद्भाव लौटने में साल लगा", en: "It took a year for goodwill to return to the neighbourhood" }, hint: "SAD-BHAAV, masculine. द्भ is a DENTAL द with भ stacked under it (unit 6), and भ carries a puff of air — sad-bhaav, said in one breath. सत्, good, plus भाव, feeling. ⚠️ **THE PUBLIC WORD, NOT THE PRIVATE ONE:** a सद्भाव is between groups, which is why it answers a दंगा (unit 130)." },
        { id: "hi-u135l4-melmilaap", type: "vocab", front: "मेलमिलाप", reading: "melmilaap", meaning: "a coming back together after a quarrel", accept: ["the mending of a relationship rather than a case"], example: { jp: "मध्यस्थ के बैठने से मेलमिलाप हुआ, और दोनों परिवार फिर एक मेज़ पर आ गए।", en: "With the mediator sitting down a reconciliation came about, and the two families came back to one table." }, drill: { jp: "मध्यस्थ के बैठने से मेलमिलाप हो गया", en: "With the mediator sitting down a reconciliation came about" }, hint: "MEL-MI-LAAP, masculine. मेल, a matching, plus मिलाप, a meeting — a doubled compound of the kind Hindi likes, where both halves mean nearly the same thing on purpose. ⚠️ **NOT निपटारा two cards up**: a निपटारा closes the FILE, a मेलमिलाप repairs the RELATIONSHIP, and either can happen without the other. 🚨 **सहिष्णुता WAS REMOVED FROM THIS SLOT**: u109l4 owns it, where bearing what one dislikes belongs to identity and inclusion." },
        { id: "hi-u135l4-raaziinaamaa", type: "vocab", front: "राज़ीनामा", reading: "raaziinaamaa", meaning: "a written agreement ending a case", accept: ["a signed paper by which both sides drop the matter"], example: { jp: "अदालत के बाहर राज़ीनामा हो गया और मामला बंद हुआ।", en: "A settlement was reached outside court and the matter was closed." }, drill: { jp: "अदालत के बाहर राज़ीनामा हो गया", en: "A settlement was reached outside court" }, hint: "RAA-ZII-NAA-MAA, masculine and regular -ा, so the oblique is राज़ीनामे. ज़ is the z of unit 4. राज़ी, agreed, plus -नामा, a document — the same -नामा as इकरारनामा (unit 85). 🚨 **नाम, a name (unit 1), SITS INSIDE IT AND THE ROUTER CAN MATCH IT**, because the ी before it is a mātrā: coincidence of spelling, checked rather than assumed." },
      ],
    },
  ],
};
