// HI Unit 100 — तंत्र और संरचना ("System and structure") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit98.js §C1–§C9.
//
// ✅ SLOT KEPT AS TITLED, AND IT IS THE CLEANEST HOLE IN THE BAND: the scaffold
// slot is "Systems and abstraction" and the pool measured **0 of 24 taken** —
// the only B2 slot of mine to come back entirely free on the first probe. The
// one word that was taken, परस्पर (u62l3), was dropped from the pool, not from
// the theme.
// WHY THE SLOT SURVIVED when u68 अमूर्त विचार spent the abstract nouns: u68
// carded the abstractions a person THINKS WITH — अवधारणा, बोध, विवेक, प्रतीक,
// सार, तत्व, मूल, कसौटी, संदर्भ. Nothing in it describes a SYSTEM: how its parts
// hang together, what it does on its own, where its edge is. unit61.js §B9 flagged
// this slot as healthy and the measurement holds.
//
// ⚠️ THREE CANDIDATES DROPPED, AND ONE OF THEM IS A CROSS-BLOCK BOUNDARY:
//   • **अनुकूलन IS u121's** (§C9.7), not this unit's. It was in the first pool and
//     is allocated to biology, where adaptation is the subject. This unit uses
//     ढाँचागत and अंतर्निहित for the same region of meaning.
//   • **संतुलन IS TAKEN at u63l2** (तुलना और मात्रा). परिधि took the slot.
//   • **परस्पर IS TAKEN at u62l3.** आपसी, the everyday word for the same relation,
//     is free and is carded instead — and l2's hint names the pair, because a
//     learner who knows परस्पर will reach for it.
//   • Also drafted and left FREE for a later block: केंद्रक, संकुल, समुच्चय,
//     स्तरीकरण, अंतर्वस्तु, सुव्यवस्थित, विन्यास-adjacent coinages.
//
// 🚨 प्रतिपुष्टि (l3) CARRIES पुष्टि (u99l1) INSIDE IT AND THE MATCH FIRES.
// `findWholeWord`'s boundary test is `/\p{L}/u` and the ि before पुष्टि in
// प्रतिपुष्टि is `\p{M}`, so a search for पुष्टि succeeds inside this word. Both
// units are block 1's, the decision to card both is recorded in unit99.js, and
// **no sentence in this unit contains पुष्टि** — each card searches only its own
// example and drill (`findFrontInExample`), so neither card can mis-blank.
// ⚠️ AND उपतंत्र (l1) CARRIES तंत्र, THIS UNIT'S OWN TITLE WORD, AND THAT MATCH IS
// BLOCKED: the प before तंत्र in उपतंत्र is a \p{L} letter. The two sit in the
// SAME LESSON deliberately, because the pair is the point — and they are safe
// only because of that letter. Had the prefix been उ- with a mātrā, they could
// not have shared a lesson. This is the fires/does-not-fire split unit97.js
// recorded for छात्रावास and छात्रवृत्ति.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4):
//   ⚠️ FEMININE: संरचना · निर्भरता · जटिलता · प्रतिपुष्टि · परिधि · क्रियाविधि.
//   ⚠️ **संरचना IS FEMININE DESPITE THE -ा** — one of the -ना nouns unit 57 warns
//   about (भावना, प्रार्थना) and unit 61 repeats (आलोचना, चर्चा, प्रेरणा):
//   संरचना जटिल है, never जटिल था.
//   ⚠️ **प्रतिपुष्टि, परिधि AND क्रियाविधि ALL END IN A SHORT ि** — pratipushti,
//   paridhi, kriyaavidhi, never -ii. Same class as पुष्टि (u99l1), अतिशयोक्ति
//   (u98l3), समिति (u88l2), कृति (u91l4).
//   ⚠️ **निर्भरता AND जटिलता ARE -ता ABSTRACTS, SO FEMININE** (unit 61 §B6),
//   and both end in -आ, which reads masculine everywhere else in the course.
//   MASCULINE: तंत्र · घटक · उपतंत्र · विन्यास · अंतर्संबंध · पदानुक्रम · सोपान ·
//   विखंडन · प्रतिरूप · एकीकरण · विकेंद्रीकरण.
//   INVARIANT ADJECTIVES: समग्र · आपसी · अभिन्न · स्वचालित · ढाँचागत ·
//   आधारभूत · अंतर्निहित.
//   ⚠️ **आपसी IS INVARIANT DESPITE THE -ी**, like राज़ी (u61l1): आपसी बात, आपसी
//   भरोसा. It is not an -ी feminine noun and it never changes.
//   NO VERB IS CARDED IN THIS UNIT — the vocabulary is all nouns and adjectives,
//   which is what a structural unit is. Still ZERO 3rd-person exceptions.
export const HI_UNIT100 = {
  id: "hi-u100",
  lang: "hi",
  title: "तंत्र और संरचना",
  order: 100,
  stage: "b2",
  lessons: [
    {
      id: "hi-u100l1",
      unit: 100,
      lesson: 1,
      title: "A system and its parts",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about something as a system rather than a thing: name the system, the way it is put together, one component, a system sitting inside it, the arrangement chosen, and the whole taken together.",
      items: [
        { id: "hi-u100l1-tantra", type: "vocab", front: "तंत्र", reading: "tantra", meaning: "a system taken as a whole", accept: ["a working apparatus"], example: { jp: "शहर का पानी का तंत्र सौ साल पुराना है, इसलिए हर साल कोई हिस्सा टूटता है।", en: "The city's water system is a hundred years old, so some part of it breaks every year." }, drill: { jp: "शहर का पानी का तंत्र पुराना है", en: "The city's water system is old" }, hint: "TAN-TRA, masculine. The त्र is the conjunct of unit 6 and it is one syllable — tan-tra. ⚠️ Not प्रणाली, a system (unit 66), and the split is worth holding: a प्रणाली is a WAY of doing something, a procedure; a तंत्र is a MACHINE of parts that runs. A दफ़्तर has a प्रणाली for leave and a तंत्र for water." },
        { id: "hi-u100l1-sanrachnaa", type: "vocab", front: "संरचना", reading: "sanrachnaa", meaning: "the way a thing is put together", accept: ["the internal make-up of something"], example: { jp: "इस कंपनी की संरचना बहुत सीधी है, क्योंकि उसमें सिर्फ़ तीन विभाग हैं।", en: "This company's structure is very simple, because it has only three departments." }, drill: { jp: "इस कंपनी की संरचना सीधी है", en: "This company's structure is simple" }, hint: "SAN-RACH-NAA — ⚠️ FEMININE DESPITE THE -ा, one of the -ना nouns unit 57 warns about: संरचना सीधी है, never सीधा. ⚠️ Not ढाँचा, a framework (unit 66): a ढाँचा is the bare frame you could point at, a संरचना is the whole internal arrangement, including what you cannot see." },
        { id: "hi-u100l1-ghatak", type: "vocab", front: "घटक", reading: "ghatak", meaning: "a component", accept: ["one working part of a system"], example: { jp: "मशीन का एक घटक खराब हुआ और पूरा तंत्र रुक गया।", en: "One component of the machine went bad and the whole system stopped." }, drill: { jp: "मशीन का एक घटक खराब हुआ", en: "One component of the machine went bad" }, hint: "GHA-TAK, masculine, and the ट is retroflex (unit 1 §1b). ⚠️ Not हिस्सा, a part (unit 19): a हिस्सा is any piece you could cut off, a घटक is a part that DOES something — take it out and the तंत्र stops, which is the example's whole point. Not पुर्ज़ा either; that word belongs to unit 125." },
        { id: "hi-u100l1-upatantra", type: "vocab", front: "उपतंत्र", reading: "upatantra", meaning: "a system sitting inside a bigger one", accept: ["a subsystem"], example: { jp: "हर बड़े तंत्र में छोटे उपतंत्र होते हैं, और एक के रुकने से बाकी नहीं रुकते।", en: "Every big system has smaller subsystems in it, and one stopping does not stop the rest." }, drill: { jp: "इस तंत्र में तीन उपतंत्र हैं", en: "This system has three subsystems" }, hint: "U-PA-TAN-TRA, masculine. उप- is the 'under, lesser' prefix. ✅ SUBSTRING CHECKED, AND THIS IS WHY THE TWO CAN SHARE A LESSON: a search for तंत्र inside उपतंत्र is BLOCKED, because the प before it is a \\p{L} letter. Had the prefix ended in a mātrā the match would have fired and the pair would have had to be split across units." },
        { id: "hi-u100l1-vinyaas", type: "vocab", front: "विन्यास", reading: "vinyaas", meaning: "the arrangement chosen", accept: ["the layout something is given"], example: { jp: "कमरे का विन्यास बदलने से काम आसान हो गया, और कुछ नया नहीं खरीदा गया।", en: "Changing the room's arrangement made the work easier, and nothing new was bought." }, drill: { jp: "कमरे का विन्यास बदलने से काम आसान हुआ", en: "Changing the room's arrangement made the work easier" }, hint: "VIN-YAAS, masculine. The न्या is न with य stacked carrying the ा mātrā. ⚠️ Not संरचना above: a संरचना is how a thing IS built, a विन्यास is how it has been LAID OUT, and a विन्यास can be changed in an afternoon while a संरचना cannot. That contrast is the example." },
        { id: "hi-u100l1-samagra", type: "vocab", front: "समग्र", reading: "samagra", meaning: "taken all together", accept: ["considered as one whole"], example: { jp: "एक घटक देखकर राय बनाना गलती है, समग्र तंत्र देखना ज़रूरी है।", en: "Forming an opinion from one component is a mistake; it is necessary to look at the system as a whole." }, drill: { jp: "समग्र तंत्र देखना ज़रूरी है", en: "It is necessary to look at the whole system" }, hint: "SA-MAG-RA, INVARIANT: समग्र तंत्र, समग्र राय. The ग्र is ग with र stacked (unit 6). ⚠️ Not पूरा, whole (unit 19): पूरा means nothing is missing, समग्र means you are looking at it ALL AT ONCE rather than part by part. It is the written word; पूरा is the spoken one." },
      ],
    },
    {
      id: "hi-u100l2",
      unit: 100,
      lesson: 2,
      title: "How the parts relate",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe the relations inside a system: the link between two parts, one part's dependence on another, a relation running both ways, a chain of rank, one step in a graded series, and a part you cannot take out.",
      items: [
        { id: "hi-u100l2-antarsambandh", type: "vocab", front: "अंतर्संबंध", reading: "antarsambandh", meaning: "the link between two parts", accept: ["an interconnection"], example: { jp: "कीमत और उपज का अंतर्संबंध साफ़ है, पर उसकी वजह इतनी साफ़ नहीं।", en: "The link between price and yield is clear, but its reason is not so clear." }, drill: { jp: "कीमत और उपज का अंतर्संबंध साफ़ है", en: "The link between price and yield is clear" }, hint: "AN-TAR-SAM-BANDH, masculine. अंतर् is 'between' and संबंध is a relation (unit 78). ⚠️ The र् is a bare र with the halant, so there is no vowel after it — antar, then sambandh. Not असर, an effect (unit 32): an असर runs one way, an अंतर्संबंध is the fact that the two move together, with no claim about which causes which." },
        { id: "hi-u100l2-nirbhartaa", type: "vocab", front: "निर्भरता", reading: "nirbhartaa", meaning: "dependence on something else", accept: ["the state of needing something else"], example: { jp: "एक ही बाज़ार पर निर्भरता में खतरा है, क्योंकि मंदी में कोई दूसरा रास्ता नहीं बचता।", en: "There is a danger in dependence on a single market, because in a downturn no other way is left." }, drill: { jp: "एक ही बाज़ार पर निर्भरता में खतरा है", en: "There is a danger in dependence on a single market" }, hint: "NIR-BHAR-TAA — ⚠️ FEMININE, a -ता abstract (unit 61 §B6), and it ends in -आ which reads masculine everywhere else: निर्भरता खतरनाक है, never खतरनाक था. The frame is X पर निर्भरता. ⚠️ Not भरोसा, trust (unit 27): भरोसा is a choice you make, निर्भरता is a position you are stuck in." },
        { id: "hi-u100l2-aapsii", type: "vocab", front: "आपसी", reading: "aapsii", meaning: "running both ways between two sides", accept: ["two-way between both sides"], example: { jp: "दोनों विभागों की आपसी निर्भरता इतनी है कि एक के रुकने से दूसरा भी रुक जाता है।", en: "The mutual dependence of the two departments is such that one stopping stops the other too." }, drill: { jp: "दोनों विभागों की आपसी निर्भरता बहुत है", en: "The mutual dependence of the two departments is great" }, hint: "AAP-SII — ⚠️ INVARIANT DESPITE THE -ी, like राज़ी (unit 61): आपसी बात, आपसी भरोसा, आपसी निर्भरता. It is not a feminine noun and it never changes for gender. ⚠️ परस्पर, the तत्सम word for the same relation, IS TAKEN at unit 62 — a learner who knows it will reach for it, and आपसी is the everyday word that was free." },
        { id: "hi-u100l2-padaanukram", type: "vocab", front: "पदानुक्रम", reading: "padaanukram", meaning: "a chain of rank", accept: ["a hierarchy of positions"], example: { jp: "इस दफ़्तर का पदानुक्रम बहुत लंबा है, इसलिए एक सवाल का जवाब आने में हफ़्ते लगते हैं।", en: "This office's chain of rank is very long, so an answer to one question takes weeks to arrive." }, drill: { jp: "इस दफ़्तर का पदानुक्रम बहुत लंबा है", en: "This office's chain of rank is very long" }, hint: "PA-DAA-NU-KRAM, masculine. पद is a post (unit 96) and अनुक्रम is a sequence — so the posts in order. ⚠️ Not दर्जा, a rank (unit 47): a दर्जा is ONE position, a पदानुक्रम is the whole ladder of them. The क्र is क with र stacked (unit 6)." },
        { id: "hi-u100l2-sopaan", type: "vocab", front: "सोपान", reading: "sopaan", meaning: "one step in a graded series", accept: ["a rung in a graded sequence"], example: { jp: "सीखना एक सोपान के बाद दूसरे सोपान पर जाता है, और कोई सोपान छोड़ा नहीं जा सकता।", en: "Learning goes from one step to the next step, and no step can be skipped." }, drill: { jp: "सीखना एक सोपान के बाद दूसरे पर जाता है", en: "Learning goes from one step to the next" }, hint: "SO-PAAN, masculine. Literally a stair. ⚠️ Not स्तर, a tier (unit 63), and not पड़ाव, a stopping-place (unit 61): a स्तर is a LEVEL you are at, a पड़ाव is where you rest, a सोपान is a STEP you take to get to the next one. The series is what makes it a सोपान." },
        { id: "hi-u100l2-abhinna", type: "vocab", front: "अभिन्न", reading: "abhinna", meaning: "inseparable from the whole", accept: ["that cannot be taken out"], example: { jp: "यह विभाग कंपनी का अभिन्न हिस्सा है, इसलिए उसे अलग बेचा नहीं जा सकता।", en: "This department is an inseparable part of the company, so it cannot be sold off separately." }, drill: { jp: "यह विभाग कंपनी का अभिन्न हिस्सा है", en: "This department is an inseparable part of the company" }, hint: "A-BHIN-NA, INVARIANT: अभिन्न हिस्सा, अभिन्न घटक. भिन्न is 'separate' and अ- negates it. The न्न is a real doubled n, held. ⚠️ Stronger than ज़रूरी, important (unit 19): something ज़रूरी is needed, something अभिन्न cannot be removed and still leave the same thing behind." },
      ],
    },
    {
      id: "hi-u100l3",
      unit: 100,
      lesson: 3,
      title: "How a system behaves",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe what a system does rather than what it is: its complexity, running by itself, the mechanism behind it, breaking apart, feeding its own output back in, and where its edge lies.",
      items: [
        { id: "hi-u100l3-jatiltaa", type: "vocab", front: "जटिलता", reading: "jatiltaa", meaning: "complexity", accept: ["the state of having too many parts"], example: { jp: "नियमों की जटिलता इतनी बढ़ गई कि जनता को समझाना मुश्किल हो गया।", en: "The complexity of the rules grew so much that explaining them to the public became difficult." }, drill: { jp: "नियमों की जटिलता बहुत बढ़ गई", en: "The complexity of the rules grew a great deal" }, hint: "JA-TIL-TAA — ⚠️ FEMININE, a -ता abstract ending in -आ (unit 61 §B6): जटिलता बढ़ी, never बढ़ा. Built on जटिल, complicated, which is not itself carded. ⚠️ Not मुश्किल, difficult (unit 6): something मुश्किल is hard for YOU, जटिलता is a property of the THING — it has too many parts, whoever is looking." },
        { id: "hi-u100l3-svachaalit", type: "vocab", front: "स्वचालित", reading: "svachaalit", meaning: "running by itself", accept: ["automatic, needing nobody"], example: { jp: "यह तंत्र स्वचालित है, इसलिए रात में भी कोई आदमी वहाँ नहीं रहता।", en: "This system runs by itself, so even at night no person stays there." }, drill: { jp: "यह तंत्र स्वचालित है", en: "This system runs by itself" }, hint: "SVA-CHAA-LIT, INVARIANT: स्वचालित तंत्र, स्वचालित मशीन. स्व is 'self' — the स्व is स with व stacked (unit 6) — and चालित is 'driven', from चलना (unit 12). ⚠️ It does not mean easy or new; it means no person is in the loop, which is exactly what the example's second clause says." },
        { id: "hi-u100l3-kriyaavidhi", type: "vocab", front: "क्रियाविधि", reading: "kriyaavidhi", meaning: "the mechanism by which something works", accept: ["the inner working of a process"], example: { jp: "दवा का असर सब जानते हैं, पर उसकी क्रियाविधि पर शोध अभी चल रहा है।", en: "Everyone knows the medicine's effect, but research on its mechanism is still going on." }, drill: { jp: "इस दवा की क्रियाविधि पर शोध चल रहा है", en: "Research on this medicine's mechanism is going on" }, hint: "KRI-YAA-VI-DHI — ⚠️ FEMININE, AND IT ENDS IN A SHORT ि: kriyaavidhi, never -ii. क्रिया is an action and विधि a method. ⚠️ THE क्रि IS क with र stacked TAKING THE ि MĀTRĀ, not the ृ mark — kri, with a full short i, exactly as unit 61's प्रतिक्रिया hint says. Not तरीका, a method (unit 32): a तरीका is how YOU do something, a क्रियाविधि is how the thing works inside." },
        { id: "hi-u100l3-vikhandan", type: "vocab", front: "विखंडन", reading: "vikhandan", meaning: "a breaking apart into pieces", accept: ["the splitting up of a whole"], example: { jp: "बड़ी कंपनी का विखंडन हुआ और उसकी जगह चार छोटी कंपनियाँ बनीं।", en: "The big company was broken up and four small companies came in its place." }, drill: { jp: "बड़ी कंपनी का विखंडन हुआ", en: "The big company was broken up" }, hint: "VI-KHAN-DAN, masculine. Plain ख, because unit 1 §7 keeps ख़ uncarded. The ड is retroflex and the reading merges it to d (unit 1 §1b). ⚠️ The opposite of lesson 4's एकीकरण, and the two are deliberately split across lessons so the pair is met twice. Not टूटना, to break: a विखंडन is deliberate and leaves working pieces." },
        { id: "hi-u100l3-pratipushti", type: "vocab", front: "प्रतिपुष्टि", reading: "pratipushti", meaning: "a system's own output fed back in", accept: ["feedback inside a system"], example: { jp: "अच्छे तंत्र में प्रतिपुष्टि होती है, यानी जो निकलता है वही उसे सुधारने के लिए लौटता है।", en: "A good system has feedback, which is to say what comes out returns in order to improve it." }, drill: { jp: "अच्छे तंत्र में प्रतिपुष्टि होती है", en: "A good system has feedback" }, hint: "PRA-TI-PUSH-TI — ⚠️ FEMININE, SHORT ि at the end. It is प्रति, 'back', on पुष्टि, confirmation (unit 99) — the same relation प्रतिवाद (unit 98) has to वाद. 🚨 AND A SEARCH FOR पुष्टि FIRES INSIDE THIS WORD, because the ि before it is a mātrā and `findWholeWord` only blocks a \\p{L} letter. The two are carded on purpose; neither unit's sentences contain the other word, and each card only ever searches its own." },
        { id: "hi-u100l3-paridhi", type: "vocab", front: "परिधि", reading: "paridhi", meaning: "the outer edge of a system", accept: ["the boundary something runs up to"], example: { jp: "यह सवाल हमारे काम की परिधि से बाहर है, इसलिए जवाब दूसरा विभाग देगा।", en: "This question is outside the boundary of our work, so another department will answer it." }, drill: { jp: "यह सवाल हमारे काम की परिधि से बाहर है", en: "This question is outside the boundary of our work" }, hint: "PA-RI-DHI — ⚠️ FEMININE, AND A SHORT ि AT THE END, the third in this unit after प्रतिपुष्टि and क्रियाविधि. Literally a circumference. ⚠️ Not हद, a limit (unit 23): a हद is a line somebody drew and can move, a परिधि is where the thing itself stops being the thing. (सीमा is not carded anywhere in Hindi — checked, not assumed.)" },
      ],
    },
    {
      id: "hi-u100l4",
      unit: 100,
      lesson: 4,
      title: "Seeing the whole shape",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Stand back from a system: use a model that stands in for the real thing, say a problem is built into the structure, name what is foundational, and describe power being pulled together or pushed outward.",
      items: [
        { id: "hi-u100l4-pratiruup", type: "vocab", front: "प्रतिरूप", reading: "pratiruup", meaning: "a model standing in for the real thing", accept: ["a working likeness of something"], example: { jp: "असली पुल बनाने से पहले उसका छोटा प्रतिरूप बनाया गया और पानी में उसकी जाँच की गई।", en: "Before building the real bridge a small model of it was made and a check of it was done in water." }, drill: { jp: "पुल का छोटा प्रतिरूप बनाया गया", en: "A small model of the bridge was made" }, hint: "PRA-TI-RUUP, masculine. प्रति is 'standing for' — the same prefix as प्रतिदर्श (unit 99) — and रूप, a form, which is not itself carded in Hindi. ⚠️ Not नकली, counterfeit (unit 24): a नकली thing is meant to pass as real, a प्रतिरूप is openly a stand-in you can learn from. And not प्रतिदर्श: that is a sample OF the thing, this is a likeness INSTEAD of it." },
        { id: "hi-u100l4-dhaanchaagat", type: "vocab", front: "ढाँचागत", reading: "dhaanchaagat", meaning: "built into the structure itself", accept: ["structural rather than accidental"], example: { jp: "यह खामी ढाँचागत है, इसलिए एक आदमी बदलने से कुछ नहीं होगा।", en: "This shortcoming is built into the structure, so changing one person will achieve nothing." }, drill: { jp: "यह खामी ढाँचागत है", en: "This shortcoming is built into the structure" }, hint: "DHAAN-CHAA-GAT, INVARIANT: ढाँचागत खामी, ढाँचागत वजह. Built on ढाँचा, a framework (unit 66), plus -गत 'belonging to'. The ढ is retroflex and the ाँ carries the nasalisation, written n (unit 1 §1). ⚠️ THE POINT OF THE WORD IS THE SECOND CLAUSE: calling a problem ढाँचागत is a claim that no individual caused it and no individual can fix it." },
        { id: "hi-u100l4-aadhaarbhuut", type: "vocab", front: "आधारभूत", reading: "aadhaarbhuut", meaning: "foundational to everything above it", accept: ["that everything else rests on"], example: { jp: "पढ़ना और लिखना आधारभूत हुनर हैं, और उनके बिना बाकी सब मुश्किल रहता है।", en: "Reading and writing are foundational skills, and without them everything else stays difficult." }, drill: { jp: "पढ़ना और लिखना आधारभूत हुनर हैं", en: "Reading and writing are foundational skills" }, hint: "AA-DHAAR-BHUUT, INVARIANT: आधारभूत हुनर, आधारभूत नियम. Built on आधार, a basis (unit 62) — the same root निराधार negates (unit 98) — plus भूत 'become'. ⚠️ Not ज़रूरी, important (unit 19): many things are ज़रूरी, but something आधारभूत is what the other things are STANDING ON, which is why removing it brings them down." },
        { id: "hi-u100l4-antarnihit", type: "vocab", front: "अंतर्निहित", reading: "antarnihit", meaning: "sitting inside something unstated", accept: ["inherent, there without being said"], example: { jp: "इस नियम में एक अंतर्निहित अपेक्षा है कि सब लोग पढ़ सकते हैं।", en: "There is an unstated expectation inside this rule that everyone can read." }, drill: { jp: "इस नियम में एक अंतर्निहित अपेक्षा है", en: "There is an unstated expectation inside this rule" }, hint: "AN-TAR-NI-HIT, INVARIANT: अंतर्निहित अपेक्षा, अंतर्निहित खतरा. अंतर् is 'within' — the same half as अंतर्संबंध (lesson 2), with the same bare र् — and निहित is 'placed'. ⚠️ Not छिपा, hidden: nobody hid an अंतर्निहित assumption, it was simply never said out loud, which is what makes it worth naming." },
        { id: "hi-u100l4-ekiikaran", type: "vocab", front: "एकीकरण", reading: "ekiikaran", meaning: "the joining of separate parts into one", accept: ["integration into a single whole"], example: { jp: "तीन विभागों के एकीकरण से काम तेज़ हुआ, पर कुछ लोगों का काम चला गया।", en: "The integration of the three departments made the work faster, but some people's jobs went." }, drill: { jp: "तीन विभागों का एकीकरण हुआ", en: "The three departments were integrated" }, hint: "E-KII-KA-RAN, masculine. Built straight on एक, one (unit 2): -ीकरण is the 'making into' ending, so the making of many into one. ⚠️ The opposite of lesson 3's विखंडन, and the pair is split across lessons on purpose. Compare विकेंद्रीकरण below, which uses the same -ीकरण ending and runs the other way." },
        { id: "hi-u100l4-vikendriikaran", type: "vocab", front: "विकेंद्रीकरण", reading: "vikendriikaran", meaning: "the pushing of power outward from the centre", accept: ["decentralisation"], example: { jp: "विकेंद्रीकरण के बाद हर शहर अपना फ़ैसला खुद लेता है, और ऊपर से पूछना नहीं पड़ता।", en: "After decentralisation every city takes its own decision, and there is no need to ask higher up." }, drill: { jp: "विकेंद्रीकरण के बाद हर शहर अपना फ़ैसला लेता है", en: "After decentralisation every city takes its own decision" }, hint: "VI-KEN-DRII-KA-RAN, masculine, the longest word in the unit. वि- is 'apart', केंद्र, a centre, is not itself carded in Hindi, and -ीकरण is the same 'making into' ending as एकीकरण above. The द्री is द with र stacked taking the ी mātrā. ⚠️ It is about WHERE the deciding happens, not about how much of it there is — the amount of power is unchanged." },
      ],
    },
  ],
};
