// HI Unit 62 — कारण और नतीजा ("Cause and consequence") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then unit61.js
// §B1–§B9. This unit adds nothing to them.
//
// Slot KEPT. Measured 10/18 — A2 u23 owns कारण and वजह, u32 owns नतीजा, असर,
// फ़र्क and उदाहरण, u39 owns चूँकि and वरना, u47 owns अंजाम and संयोग. What is
// LEFT is the part a B1 learner actually cannot say: not "the reason", which A1
// gave them, but **where a thing came from, what it produced, and how the links
// run from one to the next.**
//
// ⚠️ TWO FRONTS REFUSED FOR A REASON NO VALIDATOR CATCHES, AND BOTH ARE WORTH
// NAMING BECAUSE THE WORDS ARE OBVIOUS CHOICES FOR A "CHAIN" LESSON:
//   • **कड़ी** ("a link in a chain") IS THE FEMININE OF कड़ा, stiff (u19). Same
//     spelling, same reading karii, two different words. `contract.js`'s
//     front-uniqueness map would pass it — कड़ा and कड़ी are different strings —
//     and `scripts/scope-hi.mjs` GENERATES कड़ी from कड़ा, so the card would be a
//     homograph of an inflection the learner already owns. Refused.
//   • **लड़ी** ("a string of things") IS THE FEMININE PERFECTIVE OF लड़ना, to
//     fight (u48). Identical problem, identical refusal.
//   The chain is taught with संबंध and जुड़ाव instead, which belong to no other
//   lexeme. **A later block wanting a "chain" word: check it against the
//   -ा/-ी/-े paradigm of every taught front first, not just against the front
//   list.**
//
// 🚨 ONE READING COLLISION FOUND AND AVOIDED, AND THIS IS THE FIRST TIME unit1.js
// §1b's ESCAPE HATCH HAS COME DUE IN HINDI.
//   **दर** ("a rate") reads `dar`. **डर** ("fear", u27) ALSO reads `dar`, because
//   §1b merges retroflex ड and dental द to d. One reading, two words — which is
//   one dictation card with two right answers, and the language's
//   1,440-fronts-to-1,440-distinct-readings invariant breaks.
//   §1b's hatch says **the RETROFLEX member doubles**, so the correct repair is
//   डर → `ddar`. **BLOCK 1 DID NOT MAKE THAT REPAIR**, because डर sits in u27,
//   an A1 block-3 file, outside this block's range — and dropping one B1 noun is
//   cheaper than reaching across a band to re-read an already-voiced A1 card.
//   संतुलन is carded instead. ⚠️ **IF A LATER BLOCK NEEDS दर, the fix is to change
//   डर's reading to `ddar` in unit27.js** — readings are not ids, so no mastery is
//   wiped, and the audio is keyed on the id, so no clip is orphaned. Named here
//   so the next seat finds a decision and not a mystery.
//
// ⚠️ ONE MORE REFUSAL: **अनुमानित** ("estimated") was drafted into u63l3 and moved
// to u64, because its base अनुमान is carded at u64l3 — teaching the derivative one
// unit BEFORE the base it is built from. Order matters even when scope does not
// complain, and scope-hi would not have complained: it derives forward only.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: उत्पत्ति, पृष्ठभूमि, प्रेरणा, भूमिका, **उपज**. उपज is
//   CONSONANT-FINAL, so nothing in the shape says so — उपज अच्छी थी, not अच्छा.
//   And पृष्ठभूमि is -ि, which is rare and always feminine.
//   MASCULINE: मूल, आधार, परिणाम, प्रभाव, दुष्प्रभाव, संबंध, जुड़ाव, योगदान, दखल,
//   बुनियाद is FEMININE — **बुनियाद is the one most likely to be got wrong in this
//   unit**, because it looks like every consonant-final masculine noun and is not:
//   बुनियाद मज़बूत है, not मज़बूत… the adjective here is invariant, so the giveaway
//   is बुनियाद पक्की थी.
//   INVARIANT (unit53's rule): निर्भर, क्रमिक, परस्पर, सिलसिलेवार, प्रत्यक्ष,
//   अप्रत्यक्ष, प्रमुख. ADVERBS: फलस्वरूप, नतीजतन — neither agrees with anything.
// ृ (unit61 §B2): **पृष्ठभूमि** is one of B1's four uses of ऋ's uncarded mātrā. Its
// hint says so and says it reads ri. The ष्ठ is ष with ठ stacked, read shth.
// RETROFLEX/DENTAL (unit1.js §1b): दखल, दुष्प्रभाव and आधार are all DENTAL द/ध
// with no retroflex twin in the corpus. The one real pair is दर/डर, handled above.
// LOANWORD FREE-PASS CHECK (unit1.js §9): no loanwords. Zero free passes.
export const HI_UNIT62 = {
  id: "hi-u62",
  lang: "hi",
  title: "कारण और नतीजा",
  order: 62,
  stage: "b1",
  lessons: [
    {
      id: "hi-u62l1",
      unit: 62,
      lesson: 1,
      title: "Where the root is",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Point to the root of a problem rather than its surface, give the background a thing grew out of, name what inspired it and what it rests on, and say that one thing depends on another.",
      items: [
        { id: "hi-u62l1-mool", type: "vocab", front: "मूल", reading: "mool", meaning: "the root cause", accept: ["the source of a thing", "the original"], example: { jp: "हमने नतीजे पर बात की, पर इस दिक्कत का मूल कोई नहीं देख रहा था।", en: "We talked about the result, but nobody was looking at the root of the problem." }, drill: { jp: "इस दिक्कत का मूल कहीं और है", en: "The root of the problem is somewhere else" }, hint: "MOOL, masculine, with the long oo of ऊ. ⚠️ Not जड़, a root (unit 55), which is the thing in the ground — मूल is the abstract root, the origin a thing grew from. मूल रूप से means 'originally'." },
        { id: "hi-u62l1-utpatti", type: "vocab", front: "उत्पत्ति", reading: "utpatti", meaning: "an origin", accept: ["how a thing came into being"], example: { jp: "इस शब्द की उत्पत्ति पुरानी है और आज कोई उसका मूल नहीं जानता।", en: "The origin of this word is old and today nobody knows its root." }, drill: { jp: "इस शब्द की उत्पत्ति पुरानी है", en: "The origin of this word is old" }, hint: "UT-PAT-TI — FEMININE, like every -ति abstract in Hindi (unit 61 §B6). The त्प is त with प stacked and the त्ति is a real doubled t, held. ⚠️ Not शुरुआत, a beginning (unit 22): a शुरुआत is when something started, an उत्पत्ति is how it came to exist at all." },
        { id: "hi-u62l1-prishthbhuumi", type: "vocab", front: "पृष्ठभूमि", reading: "prishthbhuumi", meaning: "a background", accept: ["the setting behind something"], example: { jp: "खबर पढ़ने से पहले उसकी पृष्ठभूमि जानना ज़रूरी है, वरना आप बुरे निष्कर्ष पर पहुँचेंगे।", en: "Before reading the news it is necessary to know its background, or else you will reach a wrong conclusion." }, drill: { jp: "इस खबर की पृष्ठभूमि जानना ज़रूरी है", en: "Knowing the background of this news is necessary" }, hint: "PRISHTH-BHUU-MI — ⚠️ FEMININE, and ⚠️ TWO HARD BITS. The ृ on प is ऋ's mātrā, the mark unit 1 §7 left uncarded and you first met in कृपया (unit 7): it reads ri. The ष्ठ is ष with ठ stacked, read shth. पृष्ठ is a page and भूमि is ground — literally the ground behind the page." },
        { id: "hi-u62l1-prernaa", type: "vocab", front: "प्रेरणा", reading: "prernaa", meaning: "an inspiration", accept: ["what spurs someone on"], example: { jp: "उसकी किताब मेरे लिए प्रेरणा बनी, और इस प्रेरणा से मैंने हिंदी सीखना शुरू किया।", en: "His book became an inspiration for me, and from that inspiration I started learning Hindi." }, drill: { jp: "उसकी किताब मेरी प्रेरणा बनी", en: "His book became my inspiration" }, hint: "PRER-NAA — ⚠️ FEMININE despite the -ा, another of the -ना nouns unit 57 lists (भावना, आलोचना): प्रेरणा अच्छी थी, not अच्छा. The reading drops the schwa after र. ⚠️ Not वजह, a reason (unit 23): a वजह explains, a प्रेरणा moves you." },
        { id: "hi-u62l1-aadhaar", type: "vocab", front: "आधार", reading: "aadhaar", meaning: "a basis", accept: ["the ground a claim rests on"], example: { jp: "आपकी दलील का आधार क्या है, कोई सबूत है या सिर्फ़ अंदाज़ा?", en: "What is the basis of your argument — is there any proof, or only a guess?" }, drill: { jp: "आपकी दलील का आधार क्या है", en: "What is the basis of your argument" }, hint: "AA-DHAAR, masculine, with DENTAL ध (tongue on the teeth, unit 1 §1b). The frame is X के आधार पर, on the basis of X. ⚠️ Not बुनियाद (lesson 3), which is the physical foundation of a building used figuratively; an आधार is what a claim stands on." },
        { id: "hi-u62l1-nirbhar", type: "vocab", front: "निर्भर", reading: "nirbhar", meaning: "dependent on something", accept: ["resting on something else"], example: { jp: "पूरा नतीजा एक बात पर निर्भर है, कि बारिश समय पर हो।", en: "The whole result is dependent on one thing, that the rain comes on time." }, drill: { jp: "यह पूरी बात मौसम पर निर्भर है", en: "This whole thing is dependent on the weather" }, hint: "NIR-BHAR, INVARIANT: निर्भर आदमी, निर्भर औरत. The frame is X पर निर्भर होना, with पर (unit 23) and never से. ⚠️ Not मजबूर, left with no choice (unit 32): मजबूर is being forced, निर्भर is simply resting on something." },
      ],
    },
    {
      id: "hi-u62l2",
      unit: 62,
      lesson: 2,
      title: "What came out of it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the consequence of an action, the sway one thing has over another, an unwanted side effect, and what a process yielded — and join cause to effect with two B1 connectives.",
      items: [
        { id: "hi-u62l2-parinaam", type: "vocab", front: "परिणाम", reading: "parinaam", meaning: "a consequence", accept: ["what a thing leads to"], example: { jp: "उसने नियम तोड़ा और उसका परिणाम पूरे गुट को सहना पड़ा।", en: "He broke the rule and the whole faction had to bear its consequence." }, drill: { jp: "इस फ़ैसले का परिणाम बुरा था", en: "The consequence of this decision was bad" }, hint: "PA-RI-NAAM, masculine, with RETROFLEX ण (tongue curled back), merged to n in the reading. ⚠️ Not नतीजा, a result (unit 32), and the difference is real: a नतीजा is what came out, a परिणाम is what FOLLOWS ON from it. A test has a नतीजा; breaking a rule has a परिणाम." },
        { id: "hi-u62l2-prabhaav", type: "vocab", front: "प्रभाव", reading: "prabhaav", meaning: "sway over something", accept: ["influence", "a hold over something"], example: { jp: "नेता का प्रभाव अखबार पर साफ़ दिखता है, और इसलिए खबर तटस्थ नहीं रहती।", en: "The leaders' sway over the newspaper is clearly visible, and that is why the news does not stay neutral." }, drill: { jp: "उसका प्रभाव पूरे दफ़्तर पर है", en: "He has sway over the whole office" }, hint: "PRA-BHAAV, masculine. The frame is X पर प्रभाव, sway over X. ⚠️ Not असर, an effect (unit 32): an असर is what one event does once, a प्रभाव is a standing hold one thing has over another. A medicine has असर; a powerful person has प्रभाव." },
        { id: "hi-u62l2-dushprabhaav", type: "vocab", front: "दुष्प्रभाव", reading: "dushprabhaav", meaning: "a side effect", accept: ["an unwanted effect"], example: { jp: "दवा ने बुखार कम कर दिया, पर उसका एक दुष्प्रभाव भी था और नींद नहीं आई।", en: "The medicine brought the fever down, but it also had one side effect and sleep did not come." }, drill: { jp: "इस दवा का एक दुष्प्रभाव भी है", en: "This medicine has one side effect too" }, hint: "DUSH-PRA-BHAAV, masculine. दुष् is a 'bad' prefix and the rest is प्रभाव above, so literally a bad sway — the ष reads sh (unit 1 §1a). Hindi uses it for medicines, policies and decisions alike: anything whose good effect came with a cost." },
        { id: "hi-u62l2-upaj", type: "vocab", front: "उपज", reading: "upaj", meaning: "a product of something", accept: ["what a thing yields", "a yield"], example: { jp: "यह गुस्सा अचानक नहीं आया, यह सालों के पूर्वाग्रह की उपज है।", en: "This anger did not come suddenly; it is the product of years of prejudice." }, drill: { jp: "यह गुस्सा पुराने पूर्वाग्रह की उपज है", en: "This anger is the product of old prejudice" }, hint: "U-PAJ — ⚠️ FEMININE AND CONSONANT-FINAL, so nothing in the shape tells you: उपज अच्छी थी, never अच्छा. Literally a crop, what a field yields, and Hindi uses it figuratively for whatever a situation produced. Masculine-looking and feminine: name it every time." },
        { id: "hi-u62l2-phalsvaruup", type: "vocab", front: "फलस्वरूप", reading: "phalsvaruup", meaning: "as a result", accept: ["in consequence"], example: { jp: "बारिश कम हुई, फलस्वरूप फल की उपज आधी रह गई।", en: "There was little rain; as a result the fruit yield was left at half." }, drill: { jp: "बारिश कम हुई फलस्वरूप उपज घटी", en: "There was little rain so as a result the yield fell" }, hint: "PHAL-SVA-ROOP, an ADVERB — it agrees with nothing. फल is fruit or outcome and स्वरूप is 'in the form of', so literally 'in the form of the outcome'. ⚠️ More formal than इसलिए, therefore (unit 22): फलस्वरूप belongs in writing, a news report or a report card, not in speech." },
        { id: "hi-u62l2-natiijatan", type: "vocab", front: "नतीजतन", reading: "natiijatan", meaning: "consequently", accept: ["and so it followed"], example: { jp: "किसी ने नियम नहीं पढ़ा, नतीजतन आधे लोग दूसरा कागज़ लेकर आए।", en: "Nobody read the rule; consequently half the people came with the wrong paper." }, drill: { jp: "किसी ने नियम नहीं पढ़ा नतीजतन गलती हुई", en: "Nobody read the rule so consequently a mistake happened" }, hint: "NA-TII-JA-TAN, an ADVERB. Built on नतीजा, a result (unit 32), with the Arabic -an ending Hindi borrows for adverbs. ⚠️ Lighter and more spoken than फलस्वरूप above, and a Hindi newsreader uses it constantly. Both sit at the FRONT of the consequence clause, never at the end." },
      ],
    },
    {
      id: "hi-u62l3",
      unit: 62,
      lesson: 3,
      title: "Link by link",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Describe a connection between two things, a linkage that holds them together, a step-by-step process, a mutual effect, the foundation underneath it all, and events told one after another.",
      items: [
        { id: "hi-u62l3-sambandh", type: "vocab", front: "संबंध", reading: "sambandh", meaning: "a link between two things", accept: ["a bearing on something", "a connection"], example: { jp: "इस बात का उस फ़ैसले से कोई संबंध नहीं है, दोनों अलग मुद्दे हैं।", en: "This matter has no link with that decision; the two are separate issues." }, drill: { jp: "इन दो बातों का कोई संबंध नहीं है", en: "These two things have no link" }, hint: "SAM-BANDH, masculine. ⚠️ TWO NASALS, and both are written as ं before a stop under unit 1 §1: the first reads m before ब, the second n before ध. Not रिश्ता, a relationship (unit 59), which is between PEOPLE — a संबंध is between facts, ideas or events." },
        { id: "hi-u62l3-juraav", type: "vocab", front: "जुड़ाव", reading: "juraav", meaning: "a linkage", accept: ["an attachment between things"], example: { jp: "गाँव और शहर का जुड़ाव सड़क से हुआ, और उसके बाद बाज़ार बड़ा हो गया।", en: "The linkage of the village and the town happened by road, and after that the market grew big." }, drill: { jp: "गाँव और शहर का जुड़ाव सड़क से हुआ", en: "The linkage of village and town happened by road" }, hint: "JU-RAAV, masculine. The ड़ reads r (unit 1 §1c), so juraav — ⚠️ one letter away from जुराब, a sock (unit 9), which is juraab. Built on जोड़ना, to join (unit 31): a संबंध is the fact that two things relate, a जुड़ाव is the thing that actually holds them together." },
        { id: "hi-u62l3-kramik", type: "vocab", front: "क्रमिक", reading: "kramik", meaning: "step-by-step", accept: ["gradual and ordered"], example: { jp: "सब कुछ अचानक नहीं बदला, वह क्रमिक था और किसी को दिखा भी नहीं।", en: "The change did not come suddenly; it was step-by-step and nobody even saw it." }, drill: { jp: "यह सुधार क्रमिक था", en: "This change was step-by-step" }, hint: "KRA-MIK, INVARIANT: क्रमिक बदलाव, क्रमिक प्रगति. The क्र is क with र stacked underneath. Built on क्रम, an order or sequence — which unit 66 cards. ⚠️ Not धीरे, slowly (unit 19): धीरे is the speed, क्रमिक is that the steps came in order." },
        { id: "hi-u62l3-paraspar", type: "vocab", front: "परस्पर", reading: "paraspar", meaning: "mutual", accept: ["running both ways"], example: { jp: "दोनों बातों का असर परस्पर है, हर एक दूसरे को बदलती है।", en: "The effect of the two things is mutual; each one changes the other." }, drill: { jp: "दोनों का असर परस्पर है", en: "The effect of the two is mutual" }, hint: "PA-RAS-PAR, INVARIANT: परस्पर असर, परस्पर मदद. Literally 'one upon the other'. ⚠️ The word a learner needs when a cause and its effect feed each other — exactly the thing a one-way कारण (unit 23) cannot describe." },
        { id: "hi-u62l3-buniyaad", type: "vocab", front: "बुनियाद", reading: "buniyaad", meaning: "a foundation", accept: ["what a thing is built on"], example: { jp: "इस पूरे काम की बुनियाद भरोसा है, और भरोसा टूटे तो कुछ नहीं बचता।", en: "The foundation of this whole undertaking is trust, and if trust breaks nothing is left." }, drill: { jp: "इस काम की बुनियाद भरोसा है", en: "The foundation of this work is trust" }, hint: "BU-NI-YAAD — ⚠️ FEMININE, and consonant-final, so nothing says so: बुनियाद पक्की थी, never पक्का. **This is the gender most likely to be got wrong in the unit.** Literally the foundation dug for a building; Hindi uses it for anything built on something. आधार (lesson 1) is what a CLAIM rests on; a बुनियाद is what a whole thing is built on." },
        { id: "hi-u62l3-silsilevaar", type: "vocab", front: "सिलसिलेवार", reading: "silsilevaar", meaning: "one after another", accept: ["in sequence"], example: { jp: "उसने पूरी बात सिलसिलेवार बताई, पहले वजह, फिर नतीजा, फिर उसका परिणाम।", en: "He told the whole thing one after another — first the reason, then the result, then its consequence." }, drill: { jp: "उसने पूरी बात सिलसिलेवार बताई", en: "He told the whole thing one after another" }, hint: "SIL-SI-LE-VAAR, INVARIANT and usually used as an adverb. Built on सिलसिला, a chain of events (unit 49), plus -वार, 'by the'. ⚠️ Not क्रमिक above: क्रमिक says the steps were gradual, सिलसिलेवार says you are TELLING them in order." },
      ],
    },
    {
      id: "hi-u62l4",
      unit: 62,
      lesson: 4,
      title: "Whose hand was in it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Credit someone's contribution, name the role they played and the interference they ran, and separate a cause you saw first-hand from one you only inferred.",
      items: [
        { id: "hi-u62l4-yogdaan", type: "vocab", front: "योगदान", reading: "yogdaan", meaning: "a contribution", accept: ["a part someone added"], example: { jp: "इस काम में उसका योगदान सबसे बड़ा था, पर उसने कभी ज़िक्र नहीं किया।", en: "His contribution to this work was the biggest, but he never mentioned it." }, drill: { jp: "इस काम में उसका योगदान बड़ा था", en: "His contribution to this work was big" }, hint: "YOG-DAAN, masculine. योग is 'joining' and दान is 'giving', so literally what you give into a joint effort. ⚠️ Not मदद, help (unit 7): मदद is helping a person out, a योगदान is your share of a thing being built." },
        { id: "hi-u62l4-bhuumikaa", type: "vocab", front: "भूमिका", reading: "bhuumikaa", meaning: "a role played", accept: ["the part someone had in it"], example: { jp: "इस विवाद में अखबार की भूमिका छोटी नहीं थी, उसने ही पहली खबर छापी।", en: "The newspaper's role in this controversy was not small; it was the one that printed the first report." }, drill: { jp: "इस विवाद में अखबार की भूमिका बड़ी थी", en: "The newspaper's role in this controversy was big" }, hint: "BHUU-MI-KAA — FEMININE, and here the -ा ending is honest for once. भूमि is ground, so literally the ground you stand on in a situation. ⚠️ Also means the preface of a book, and in a play it is the part an actor takes — same word, three uses." },
        { id: "hi-u62l4-dakhal", type: "vocab", front: "दखल", reading: "dakhal", meaning: "interference", accept: ["a butting-in"], example: { jp: "सरकार के दखल के बाद ही यह फ़ैसला बदला, वरना कुछ नहीं होता।", en: "This decision changed only after the government's interference; otherwise nothing would have happened." }, drill: { jp: "सरकार के दखल से फ़ैसला बदला", en: "The decision changed through the government's interference" }, hint: "DA-KHAL, masculine, consonant-final, with DENTAL द and plain ख (unit 1 §7 keeps ख़ uncarded). दखल देना is to interfere, and दखल रखना is to have a working knowledge of something — the second sense surprises learners." },
        { id: "hi-u62l4-pratyaksh", type: "vocab", front: "प्रत्यक्ष", reading: "pratyaksh", meaning: "witnessed first-hand", accept: ["seen with one's own eyes", "immediate"], example: { jp: "उसने जो बताया वह प्रत्यक्ष नहीं था, उसने भी किसी और से सुना था।", en: "What he reported was not first-hand; he too had heard it from someone else." }, drill: { jp: "यह बात प्रत्यक्ष नहीं थी", en: "This matter was not first-hand" }, hint: "PRA-TYAKSH, INVARIANT: प्रत्यक्ष सबूत, प्रत्यक्ष वजह. The क्ष is one of unit 6's three conjuncts, read ksha, here closing the word as ksh. अक्ष is the eye, so literally 'before the eye'. ⚠️ Not सीधा, straight (unit 14) — that is a direction, this is about evidence." },
        { id: "hi-u62l4-apratyaksh", type: "vocab", front: "अप्रत्यक्ष", reading: "apratyaksh", meaning: "indirect", accept: ["known only at second hand"], example: { jp: "बारिश का असर कीमत पर अप्रत्यक्ष है, पर वह असर हर बाज़ार में दिखता है।", en: "Rain's effect on prices is indirect, but that effect shows in every market." }, drill: { jp: "इस बात का असर अप्रत्यक्ष है", en: "Its effect is indirect" }, hint: "A-PRA-TYAKSH, INVARIANT. The अ- prefix negates प्रत्यक्ष above, the same way it negates सहमत to give असहमत (unit 61). ⚠️ The pair is the single most useful thing in this lesson: Hindi marks first-hand against inferred knowledge constantly, and unit 65 builds the whole reporting vocabulary on top of it." },
        { id: "hi-u62l4-pramukh", type: "vocab", front: "प्रमुख", reading: "pramukh", meaning: "foremost", accept: ["the leading one of several"], example: { jp: "इस मुश्किल की कई वजह हैं, पर प्रमुख वजह पानी की कमी है।", en: "This problem has several reasons, but the foremost reason is the shortage of water." }, drill: { jp: "प्रमुख वजह पानी की कमी है", en: "The foremost reason is the shortage of water" }, hint: "PRA-MUKH, INVARIANT: प्रमुख वजह, प्रमुख कारण. मुख is a face or mouth, so literally 'at the front'. ⚠️ Not मुख्य, main (unit 19), which they share a root with: मुख्य says it is the important one, प्रमुख says it is the FIRST of several — the word you want when you are ranking causes." },
      ],
    },
  ],
};
