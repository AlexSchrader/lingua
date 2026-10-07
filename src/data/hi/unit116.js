// HI Unit 116 — अगर ऐसा हुआ होता ("Had it happened that way") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit111.js §C1–§C6.
//
// SLOT KEPT (scaffold: "Grammar 9 — conditional nuance and counterfactuals"),
// RETITLED IN HINDI per unit1.js §10, and NARROWED above u47 अगर और काश.
//
// ⚠️ THE SCAFFOLD TITLE WAS IN ENGLISH, which `src/data/lint.js` hard-errors on
// for an authored unit. The new title names the construction the unit teaches —
// अगर … हुआ होता — rather than a theme, which is the right shape for a grammar
// slot and matches u79 जुड़े हुए वाक्य and u83 दफ़्तरी और औपचारिक भाषा.
//
// ═════════════════════════════════════════════════════════════════════════════
// WHAT THIS UNIT IS, AND HOW IT DIFFERS FROM u47
// ═════════════════════════════════════════════════════════════════════════════
// u47 अगर और काश teaches the CONDITIONAL AS A SENTENCE SHAPE and carded the
// nouns a stake is named with: दिक्कत, मामला, गुंजाइश, अंजाम, जोखिम, संभावना,
// काश, किस्मत, संयोग, भ्रम, वाकई, सूरत, बेहतर, बढ़िया, खराब, तुलना, दर्जा, खूबी,
// मर्ज़ी, गुज़ारिश, बशर्ते, बेहद, बावजूद, भले. **ALL TWENTY-FOUR ARE SPENT.**
// u39 took the connectives (बल्कि, हालाँकि, जबकि, चूँकि, ताकि, वरना, शर्त, तय),
// u79 took चाहे, मानो, लिहाज़ा, जिससे, अतएव, अलबत्ता, बहरहाल, मसलन, अमूमन, खैर,
// u83 took the formal twins (यद्यपि, तथापि, अन्यथा, अपितु, किंतु, परंतु) and u64
// took the hedges (आशंका, कयास, संभावित, अनिश्चित, यकीनन, गोया, प्रतीत, मालूम,
// संदिग्ध, स्पष्ट, अनुमानित, तकरीबन). **SO THE CONNECTIVE SPACE IS CLOSED AND
// THIS UNIT COULD NOT BE BUILT OUT OF CONNECTIVES.**
//
// 🚨 WHAT IT IS BUILT OUT OF INSTEAD, and this is the decision a later seat
// should not undo: **the LEXICON OF THE ROAD NOT TAKEN.** The constructions —
// अगर … होता तो … होता · काश … होता · चाहे … भी · भले ही … भी · के बावजूद —
// are ALL ALREADY AVAILABLE as taught or FREE words, so they need no fronts of
// their own and are carried entirely in the examples and the lesson titles. That
// is the mechanism unit1.js §6 used for का/के/की/को and unit31.js §A3 for सकना,
// and it is the only way a fourth conditional unit is authorable at all.
// Twelve of the 24 fronts are VERBS, which is u80's shape (24 verbs carrying the
// passive and the causative) rather than u47's.
//
// ⚠️ ONE CARD REFUSED FOR A REASON WORTH RECORDING:
//   • **अटकल WAS REFUSED.** Glossed "a conjecture" it collides with कयास (u64),
//     which is glossed exactly that and accepts "speculation put about" — and the
//     two words are near-synonyms, so a differing gloss would not have saved it
//     (the u112 शल्यक्रिया lesson). उबरना took the l4 slot and is a different
//     idea rather than a second name for one.
//   • **संभव and असंभव WERE REFUSED**: मुमकिन and नामुमकिन (u32) own "possible"
//     and "impossible", and that whole unit teaches ability as a CONSTRUCTION
//     already.
//   • **मानो IS TAKEN AT u79** and is additionally the imperative of मानना (u26),
//     the standing inflection-homograph hazard §C6 lists. The "as if"
//     counterfactual is taught here in examples only.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: नौबत, एहतियात is MASCULINE (see below) — so नौबत is the only
//   feminine NOUN in this unit, and it is **CONSONANT-FINAL**, so nothing in the
//   shape says so: **नौबत आ गई**, never आ गया. §B6's worst class.
//   MASCULINE: हालात, सबब, एहतियात.
//   ⚠️ **हालात IS A PLURAL AND TAKES PLURAL AGREEMENT** — हालात ऐसे हैं, never
//   ऐसा है. It is the Arabic plural of हाल (unit 38), which is the singular the
//   course already teaches, and that makes it the one genuine grammar trap among
//   this unit's nouns.
//   ADJECTIVES: काल्पनिक, अपरिहार्य, सशर्त, वैकल्पिक, प्रतिकूल, दुर्लभ, अटल —
//   **ALL SEVEN ARE CONSONANT-FINAL OR -य AND NONE CHANGES FORM AT ALL**, which
//   is the easy half of a unit this abstract.
//   परिणामस्वरूप and निस्संदेह are ADVERBS and do not agree with anything.
//   VERBS, all twelve headworded in the -ना infinitive per unit1.js §5, with
//   **ZERO 3rd-person exceptions** — the test was applied to all twelve and
//   answered no each time, because every one carries a natural short sentence in
//   the infinitive (इस पर पछताना बेकार है · मौका चूकना आसान है):
//   पछताना, चूकना, गँवाना, तरसना, मुकरना, कोसना, तौलना, आँकना, भाँपना, झेलना,
//   उबरना. **STILL ZERO IN THE WHOLE LANGUAGE.**
//
// ⚠️ SUBSTRING TRAPS, each checked (`isLetter` is `/\p{L}/`):
//   • परिणामस्वरूप ⊃ परिणाम (u62l?, an outcome) — **CANNOT FIRE**: the स after it
//     is a letter. Named in the hint as the hook: the word literally means
//     "in the form of the outcome".
//   • हालात ⊃ हाल (u38l?, the state of a thing) — **CANNOT FIRE**: the ा after
//     हाल is… a MĀTRĀ, which does NOT block a match. **MEASURED: IT FIRES.** The
//     hint says so and makes it the hook, because हालात IS हाल's plural. No drill
//     in this unit contains हाल on its own.
//   • प्रतिकूल ⊃ कूल? Not a front. दुर्लभ ⊃ लभ? Not a front.
//   • चूकना vs चुकना — **चुकना IS NOT A FRONT ANYWHERE**, checked; the two differ
//     in vowel length and read chuuknaa against chuknaa, so even if it were
//     carded later there is no reading collision. Named in the hint, because the
//     pair is a real trap for a learner.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): अटल atal is RETROFLEX ट and was checked against अतल,
// which is not a front — no collision, so the doubling escape hatch is not
// needed. एहतियात ehtiyaat, तौलना taulnaa and तरसना tarasnaa are DENTAL.
// 24 new readings, 24 distinct, zero collisions against all 2,270.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: अटकल / संभव / असंभव / मानो (ALL FOUR REFUSED above, with the reason),
// हरगिज़ (TAKEN, u38), निश्चित, अनिवार्य (TAKEN, u71), ललचाना, अड़ना, थमना,
// खटकना, ठुकराना, सुलझना, उलझना, निखरना.
export const HI_UNIT116 = {
  id: "hi-u116",
  lang: "hi",
  title: "अगर ऐसा हुआ होता",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "hi-u116l1",
      unit: 116,
      lesson: 1,
      title: "अगर … होता तो — the case that did not happen",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Build a past counterfactual — अगर X होता तो Y होता — and name the hypothetical case, the circumstances, the pass things came to, the cause behind it and what was unavoidable.",
      items: [
        { id: "hi-u116l1-kaalpanik", type: "vocab", front: "काल्पनिक", reading: "kaalpanik", meaning: "hypothetical", accept: ["made up in order to think with"], example: { jp: "अगर यह सवाल काल्पनिक होता तो मैं हँस देता, पर यह सचमुच हुआ था।", en: "If this question were hypothetical I would have laughed, but it really happened." }, drill: { jp: "यह सवाल पूरी तरह काल्पनिक है", en: "This question is entirely hypothetical" }, hint: "KAAL-PA-NIK, an ADJECTIVE, consonant-final, so it does not change form at all. ल्प is ल with a halant then प. From कल्पना, imagining. 🚨 THE EXAMPLE IS THE GRAMMAR: अगर … होता तो … देता is the PAST COUNTERFACTUAL, and both halves use the -ता form with no tense marker at all. That shape is this unit's whole subject." },
        { id: "hi-u116l1-haalaat", type: "vocab", front: "हालात", reading: "haalaat", meaning: "the circumstances", accept: ["everything around a thing, taken together"], example: { jp: "अगर हालात और होते तो वह गाँव छोड़कर कभी नहीं जाता।", en: "Had the circumstances been otherwise he would never have left the village." }, drill: { jp: "उस समय हालात बहुत मुश्किल थे", en: "At that time the circumstances were very hard" }, hint: "HAA-LAAT, masculine and 🚨 **A PLURAL THAT TAKES PLURAL AGREEMENT** — हालात ऐसे हैं, never ऐसा है. It is the Arabic plural of हाल, the state of a thing (unit 38), which the course already teaches as a singular. ⚠️ हाल IS A MATCHABLE STRING INSIDE IT, because the ा after it is a mātrā — and that is the hook, not a defect." },
        { id: "hi-u116l1-naubat", type: "vocab", front: "नौबत", reading: "naubat", meaning: "the pass a thing comes to", accept: ["the bad point a matter finally reaches"], example: { jp: "अगर उन्होंने पहले बात कर ली होती तो यह नौबत ही नहीं आती।", en: "If they had talked it over earlier this pass would never have been reached." }, drill: { jp: "बात यहाँ तक आने की नौबत आ गई", en: "It came to the pass of the matter reaching this far" }, hint: "NAU-BAT. ⚠️ FEMININE AND CONSONANT-FINAL — the only feminine noun in this unit and §B6's worst class: **नौबत आ गई**, never आ गया. The ौ is the au of unit 3, one sound. ⚠️ Always BAD in Hindi, and always with आना: नौबत आ गई. You never say a good नौबत." },
        { id: "hi-u116l1-sabab", type: "vocab", front: "सबब", reading: "sabab", meaning: "the underlying cause", accept: ["what was really behind it"], example: { jp: "सबब कोई और था, और अगर वह पहले खुलकर बता देता तो झगड़ा ही न होता।", en: "The real cause was something else, and had he said it openly earlier there would have been no quarrel at all." }, drill: { jp: "इस सबब को कोई नहीं जानता था", en: "Nobody knew this underlying cause" }, hint: "SA-BAB, masculine and consonant-final, three letters and two of them ब. ⚠️ Not वजह or कारण (units 23): those are the reason you GIVE, a सबब is what was actually behind it — so Hindi often uses सबब where English says 'the root of it'. The word is from Arabic." },
        { id: "hi-u116l1-parinaamsvaruup", type: "vocab", front: "परिणामस्वरूप", reading: "parinaamsvaruup", meaning: "as a consequence", accept: ["and so, following from that"], example: { jp: "बारिश देर से आई, और परिणामस्वरूप पूरे ज़िले में खेत सूखे रह गए।", en: "The rain came late, and as a consequence the fields in the whole district stayed dry." }, drill: { jp: "परिणामस्वरूप पूरा काम रुक गया", en: "As a consequence the whole work stopped" }, hint: "PA-RI-NAAM-SVA-RUUP, an ADVERB, so it agrees with nothing — the longest front in this unit. परिणाम, an outcome (unit 62), plus स्वरूप, in the form of. ⚠️ परिणाम IS A STRING INSIDE IT AND THE ROUTER CANNOT MATCH IT: the स after it is a letter. ⚠️ A WRITTEN word — u83's register — where speech says इसलिए." },
        { id: "hi-u116l1-aparihaarya", type: "vocab", front: "अपरिहार्य", reading: "aparihaarya", meaning: "unavoidable", accept: ["that could not have gone any other way"], example: { jp: "अगर कोई और रास्ता होता तो वे यह न करते — पर उस समय यह अपरिहार्य था।", en: "Had there been any other way they would not have done this — but at that time it was unavoidable." }, drill: { jp: "उस समय यह फ़ैसला अपरिहार्य था", en: "At that time this decision was unavoidable" }, hint: "A-PA-RI-HAAR-YA, an ADJECTIVE ending in -य, and it does not change form at all. अ-, not, plus परिहार्य, avoidable. र्य is र with its halant above the य. 🚨 THE WORD A COUNTERFACTUAL EXISTS TO ARGUE WITH: say अपरिहार्य and you are claiming that no अगर … होता तो sentence is available." },
      ],
    },
    {
      id: "hi-u116l2",
      unit: 116,
      lesson: 2,
      title: "काश — regret for what did not happen",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Use काश with the -ता form to say what you wish had happened, and name the six things people do about a chance that is gone.",
      items: [
        { id: "hi-u116l2-pachhtaanaa", type: "vocab", front: "पछताना", reading: "pachhtaanaa", meaning: "to be sorry afterwards", accept: ["to wish later that you had done otherwise"], example: { jp: "काश उसने तब पूछ लिया होता — अब पछताने से कुछ नहीं होगा।", en: "If only he had asked at the time — being sorry now will achieve nothing." }, drill: { jp: "इस पर पछताना ठीक नहीं है", en: "Being sorry about this is no good" }, hint: "PACH-TAA-NAA. छ carries a puff of air and the त is DENTAL, so pachhtaanaa with chh. 🚨 THE GLOSS IS DELIBERATELY NOT 'TO REGRET': अफ़सोस (unit 52) is glossed 'regret' and `normalizeMeaning` would have made the two cards one (unit 1 §9). ⚠️ The example is the whole काश pattern: काश + the perfective + होता." },
        { id: "hi-u116l2-chuuknaa", type: "vocab", front: "चूकना", reading: "chuuknaa", meaning: "to miss one's chance", accept: ["to let the moment go by"], example: { jp: "काश वह उस दिन स्टेशन पहुँच गया होता — एक मौका चूकने से दस साल बदल गए।", en: "If only he had got to the station that day — missing one chance changed ten years." }, drill: { jp: "मौका चूकना बहुत आसान है", en: "It is very easy to miss a chance" }, hint: "CHUUK-NAA. ⚠️ THE VOWEL IS LONG — chuuknaa — and that length is the whole card: चुकना with a short ु means 'to be finished', reads chuknaa, and is not taught anywhere in this course. One mātrā apart, two different verbs. ⚠️ Hindi uses it with मौका and with गाड़ी, never with a person." },
        { id: "hi-u116l2-ganvaanaa", type: "vocab", front: "गँवाना", reading: "ganvaanaa", meaning: "to squander", accept: ["to lose a thing through your own doing"], example: { jp: "काश उसने वह ज़मीन न गँवाई होती, क्योंकि आज वही ज़मीन बहुत महँगी है।", en: "If only he had not squandered that land, because today that same land is very expensive." }, drill: { jp: "इतना पैसा गँवाना ठीक नहीं था", en: "Squandering so much money was not right" }, hint: "GAN-VAA-NAA. The ँ is the candrabindu of unit 5, written n (unit 1 §1). ⚠️ Not खोना, to lose: a thing you खोना is gone by accident, a thing you गँवाना you threw away — so the word carries blame, which is exactly why it belongs in a काश sentence." },
        { id: "hi-u116l2-tarasnaa", type: "vocab", front: "तरसना", reading: "tarasnaa", meaning: "to pine for", accept: ["to want a thing for a long time and not get it"], example: { jp: "शहर में सब कुछ था, पर वह सालों तक अपने गाँव की हवा के लिए तरसता रहा।", en: "Everything was there in the city, but for years he pined for the air of his own village." }, drill: { jp: "घर के लिए तरसना बहुत बुरा है", en: "Pining for home is very bad" }, hint: "TA-RAS-NAA, both t and s DENTAL, and the inherent a in the middle IS said: tarasnaa. ⚠️ Hindi needs के लिए — किसी चीज़ के लिए तरसना — and the wanting must be LONG: you cannot तरसना for an afternoon. ⚠️ Not चाहना, which is simply to want." },
        { id: "hi-u116l2-mukarnaa", type: "vocab", front: "मुकरना", reading: "mukarnaa", meaning: "to go back on one's word", accept: ["to deny later what you agreed to"], example: { jp: "काश यह बात कागज़ पर लिख ली गई होती, क्योंकि अब वह साफ़ मुकर रहा है।", en: "If only this had been written down on paper, because now he is plainly going back on it." }, drill: { jp: "अब वह अपनी बात से मुकरना चाहता है", en: "Now he wants to go back on his word" }, hint: "MU-KAR-NAA. ⚠️ Hindi needs अपनी बात से — बात से मुकरना — and the sense is always DISHONEST, never a change of mind: somebody who मुकरना pretends there was no agreement. That is why the example's काश is about writing it down." },
        { id: "hi-u116l2-kosnaa", type: "vocab", front: "कोसना", reading: "kosnaa", meaning: "to curse", accept: ["to call down bad luck on somebody out loud"], example: { jp: "काश वह उस दिन चुप रह जाता — अब वह अपनी किस्मत को कोसता है और किसी से बात नहीं करता।", en: "If only he had stayed quiet that day — now he curses his own luck and talks to nobody." }, drill: { jp: "किस्मत को कोसना ठीक नहीं है", en: "Cursing one's luck is no good" }, hint: "KOS-NAA, s DENTAL. ⚠️ Not गाली देना, which is swearing AT a person in the moment: कोसना is a long, muttering, often helpless cursing, and Hindi most often applies it to किस्मत (unit 47) — which is why that is the example and the drill." },
      ],
    },
    {
      id: "hi-u116l3",
      unit: 116,
      lesson: 3,
      title: "चाहे … भी — the grudging concession",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Concede a point without giving up the argument — चाहे … भी, भले ही … भी, के बावजूद — and say that a thing is conditional, an alternative, unfavourable, rare, a precaution or unshakeable.",
      items: [
        { id: "hi-u116l3-sashart", type: "vocab", front: "सशर्त", reading: "sashart", meaning: "conditional", accept: ["given only if something else holds"], example: { jp: "चाहे मदद मिल भी जाए, वह सशर्त होगी — और शर्त पूरी करना आसान नहीं है।", en: "Even if help is given, it will be conditional — and meeting the condition is not easy." }, drill: { jp: "यह मदद पूरी तरह सशर्त है", en: "This help is entirely conditional" }, hint: "SA-SHART, an ADJECTIVE, consonant-final and unchanging. स-, with, plus शर्त, a condition (unit 39) — and र्त is र with its halant above a DENTAL त. 🚨 THE EXAMPLE IS THE GRAMMAR: चाहे … भी जाए is the CONCESSIVE, and the verb goes into the subjunctive, never the plain present." },
        { id: "hi-u116l3-vaikalpik", type: "vocab", front: "वैकल्पिक", reading: "vaikalpik", meaning: "alternative", accept: ["offered as the other way of doing it"], example: { jp: "भले ही पहला रास्ता बंद हो, एक वैकल्पिक रास्ता हमेशा रखा जाता है।", en: "Even if the first route is closed, an alternative route is always kept." }, drill: { jp: "एक वैकल्पिक रास्ता हमेशा रखा जाता है", en: "An alternative route is always kept" }, hint: "VAI-KAL-PIK, an ADJECTIVE, consonant-final and unchanging. The ै is the ai of unit 3, one sound. From विकल्प, an option (unit 70), with the vowel lengthened — a regular Sanskrit pattern you have met in विज्ञान → वैज्ञानिक. ⚠️ भले ही … हो is the second concessive shape of this lesson." },
        { id: "hi-u116l3-pratikuul", type: "vocab", front: "प्रतिकूल", reading: "pratikuul", meaning: "unfavourable", accept: ["working against what you want"], example: { jp: "मौसम प्रतिकूल होने के बावजूद वे निकल पड़े, और शाम तक शिखर के नीचे पहुँच गए।", en: "Despite the weather being unfavourable they set out, and by evening had reached below the peak." }, drill: { jp: "मौसम उस दिन बहुत प्रतिकूल था", en: "The weather was very unfavourable that day" }, hint: "PRA-TI-KUUL, an ADJECTIVE, consonant-final and unchanging. प्रति-, against, plus कूल, a bank or slope — literally against the current. ⚠️ के बावजूद is the THIRD concessive shape in this lesson, and unlike चाहे and भले ही it takes a NOUN or an oblique infinitive before it, never a clause." },
        { id: "hi-u116l3-durlabh", type: "vocab", front: "दुर्लभ", reading: "durlabh", meaning: "rare", accept: ["hard to come by at all"], example: { jp: "चाहे पैसा हो भी, ऐसी किताब अब दुर्लभ है और किसी दुकान में नहीं मिलती।", en: "Even if one has the money, such a book is now rare and is found in no shop." }, drill: { jp: "ऐसी किताब अब बहुत दुर्लभ है", en: "Such a book is now very rare" }, hint: "DUR-LABH, an ADJECTIVE, consonant-final and unchanging, भ with a puff of air. दुर्-, hard, plus लभ, obtaining. ⚠️ Not कम, which means there is little of it: दुर्लभ means it can hardly be GOT, however much money you have — which is what the example's चाहे concedes." },
        { id: "hi-u116l3-ehtiyaat", type: "vocab", front: "एहतियात", reading: "ehtiyaat", meaning: "a precaution", accept: ["care taken in advance in case"], example: { jp: "भले ही खतरा कम हो, एहतियात के लिए दोनों पुल बंद कर दिए गए।", en: "Even if the danger is small, both bridges were closed as a precaution." }, drill: { jp: "एहतियात के लिए दोनों पुल बंद हुए", en: "Both bridges were closed as a precaution" }, hint: "EH-TI-YAAT, masculine and consonant-final, त DENTAL. ⚠️ Hindi says एहतियात के तौर पर or एहतियात के लिए — 'by way of a precaution' — and एहतियात करना is wrong: you take it, you do not do it. The word is from Arabic and is everyday rather than formal." },
        { id: "hi-u116l3-atal", type: "vocab", front: "अटल", reading: "atal", meaning: "unshakeable", accept: ["that will not be moved whatever is said"], example: { jp: "चाहे सब लोग उसके खिलाफ बोलें, वह अपने फ़ैसले पर अटल रहा।", en: "Even if everybody spoke against him, he stayed unshakeable on his decision." }, drill: { jp: "वह अपने फ़ैसले पर अटल रहा", en: "He stayed unshakeable on his decision" }, hint: "A-TAL, an ADJECTIVE, consonant-final and unchanging. ट is RETROFLEX — curl the tongue back — and the reading merges it with dental त (unit 1 §1b), so atal is written with ट. ⚠️ It is also a man's given name in India, which is worth knowing before you meet it in a headline. Hindi says किसी बात पर अटल रहना." },
      ],
    },
    {
      id: "hi-u116l4",
      unit: 116,
      lesson: 4,
      title: "Weighing it after the fact",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Judge a decision once it is too late to change: weigh it up, appraise it, say you sensed it coming, that you endured it, that you came through it — and that something is beyond doubt.",
      items: [
        { id: "hi-u116l4-taulnaa", type: "vocab", front: "तौलना", reading: "taulnaa", meaning: "to weigh up", accept: ["to set two choices against each other"], example: { jp: "अगर उसने दोनों तरफ़ के नुकसान तौल लिए होते तो वह दूसरा रास्ता चुनता।", en: "Had he weighed up the loss on both sides he would have chosen the other way." }, drill: { jp: "दोनों तरफ़ के नुकसान तौलना ज़रूरी है", en: "Weighing up the loss on both sides is necessary" }, hint: "TAUL-NAA, both consonants DENTAL and the ौ is the au of unit 3, one sound. ⚠️ The literal sense — weighing vegetables on a scale — is alive, which is why the metaphor reads plainly in Hindi: you put the two outcomes on the pans. Not नापना (unit 31), which is measuring a length." },
        { id: "hi-u116l4-aanknaa", type: "vocab", front: "आँकना", reading: "aanknaa", meaning: "to appraise", accept: ["to judge roughly how much a thing is worth"], example: { jp: "किसी काम को शुरू से ठीक आँकना मुश्किल है, और अगर आसान होता तो कोई कभी घाटे में न जाता।", en: "Judging a piece of work rightly from the start is hard, and if it were easy nobody would ever make a loss." }, drill: { jp: "इस काम को ठीक आँकना मुश्किल है", en: "Appraising this work rightly is hard" }, hint: "AANK-NAA. The ँ is the candrabindu of unit 5, written n. ⚠️ Not अंदाज़ा लगाना (unit 45), which is a guess: आँकना is a judgement you would defend — of a cost, a person, a risk — so Hindi uses it where English says 'rate' or 'size up'." },
        { id: "hi-u116l4-bhaanpnaa", type: "vocab", front: "भाँपना", reading: "bhaanpnaa", meaning: "to sense in advance", accept: ["to catch what is coming before it shows"], example: { jp: "अगर उसने उनका इरादा पहले भाँप लिया होता तो वह उस कमरे में जाता ही नहीं।", en: "Had he sensed their intention beforehand he would never have gone into that room." }, drill: { jp: "उनका इरादा पहले भाँपना मुश्किल था", en: "Sensing their intention beforehand was hard" }, hint: "BHAANP-NAA, भ with a puff of air and the ँ written n. ⚠️ Always about something HIDDEN and always too EARLY to be sure: you भाँपना a mood, an intention, a trick. Hindi has no good single English match, which is why the gloss is a phrase." },
        { id: "hi-u116l4-jhelnaa", type: "vocab", front: "झेलना", reading: "jhelnaa", meaning: "to endure", accept: ["to go on bearing a thing you did not choose"], example: { jp: "चाहे गलती किसी और की हो, नतीजा उसी को झेलना पड़ा और किसी ने कुछ नहीं कहा।", en: "Even if the mistake was somebody else's, it was he who had to endure the outcome, and nobody said anything." }, drill: { jp: "नतीजा उसी को झेलना पड़ा", en: "It was he who had to endure the outcome" }, hint: "JHEL-NAA, झ with a puff of air. ⚠️ Hindi nearly always puts it with पड़ना — झेलना पड़ा — because the whole point is that you had no choice. Not सहना, which can be dignified: झेलना is put-upon, and it is the verb a काश sentence is usually about." },
        { id: "hi-u116l4-ubarnaa", type: "vocab", front: "उबरना", reading: "ubarnaa", meaning: "to come through something bad", accept: ["to get clear of a bad stretch at last"], example: { jp: "उस नुकसान से उबरने में तीन साल लगे, और अगर परिवार साथ न होता तो इतने में भी न होता।", en: "It took three years to come through that loss, and had the family not been with him it would not have happened even in that time." }, drill: { jp: "उस नुकसान से उबरना आसान नहीं था", en: "Coming through that loss was not easy" }, hint: "U-BAR-NAA. ⚠️ Hindi needs से — किसी चीज़ से उबरना — and the thing is always bad: an illness, a loss, a habit. ⚠️ Not बचना (unit 24), which is escaping BEFORE it hits: उबरना is afterwards, which is why it closes a unit about hindsight." },
        { id: "hi-u116l4-nissandeh", type: "vocab", front: "निस्संदेह", reading: "nissandeh", meaning: "beyond doubt", accept: ["with nothing left to argue about"], example: { jp: "चाहे बाकी बातों पर बहस हो, यह निस्संदेह उसका सबसे अच्छा फ़ैसला था।", en: "Even if the rest is argued over, this was beyond doubt his best decision." }, drill: { jp: "यह निस्संदेह उसका सबसे अच्छा फ़ैसला था", en: "This was beyond doubt his best decision" }, hint: "NIS-SAN-DEH, an ADVERB, so it agrees with nothing. निः-, without, plus संदेह, doubt — but 🚨 **WRITTEN WITH स्स AND NOT WITH THE VISARGA**. unit61.js §B1 bans ः from every front because the mark is taught nowhere in u1–u6, and this spelling is the one that survives that ban. The स्स is doubled in the reading: nissandeh." },
      ],
    },
  ],
};
