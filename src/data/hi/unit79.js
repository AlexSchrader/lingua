// HI Unit 79 — जुड़े हुए वाक्य ("Joined sentences") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2, AND THE FIRST OF ITS THREE GRAMMAR SLOTS. Conventions: unit1.js
// §1–§11, unit31.js §A1–§A8, then §B1–§B7 in unit74.js.
//
// 🚨 RETHEMED SLOT (scaffold: "Grammar 6 — linked and subordinate clauses").
// lint hard-errors on that title. The THEME is kept — this unit is about joining
// clauses — but the CONTENT had to move, and the measurement is why:
//
// THE ORDINARY SUBORDINATORS ARE ALL GONE. Probed against the live 1,560-card
// corpus, every connective a "subordinate clauses" unit would reach for first is
// already carded: जबकि, बल्कि, वरना, चूँकि, ताकि, हालाँकि, तभी (u39 जोड़ने वाले
// शब्द) · बजाय, अलावा, बारे, बीच, बिना, दौरान, तरफ़, जो, जहाँ, जितना, वाला, जैसा,
// वैसा (u23 परसर्ग) · बशर्ते, बावजूद (u47 conditionals) · दरअसल, यानी (u30) ·
// क्योंकि (u22) · अगर, और, भी (u1–u8). **Twenty-four of them** — a whole unit's
// worth, already taught.
// WHAT IS NOT TAUGHT is the layer above: the COMPOUND POSTPOSITION, the thing
// that lets a whole noun phrase do the work of a clause — के मुताबिक, के तहत,
// के खिलाफ, के एवज़ में, के मद्देनज़र, के विपरीत. Hindi subordinates with these
// constantly and the corpus had **exactly one**: ज़रिए, at u23l?. So the slot keeps
// its job and changes its material.
//
// 🚨 AND THAT ONE EXCEPTION IS THE MOST IMPORTANT FINDING IN THIS FILE, BECAUSE
// IT NEARLY SHIPPED. This unit originally carded **ज़रिये** ("by means of") and
// `check-front.mjs` reported it FREE — correctly, because the corpus spells it
// **ज़रिए**, with the independent ए rather than ये. Two strings, ONE WORD, and the
// GLOSS was identical too: u23's ज़रिए is glossed "by means of" and accepts
// "through" and "by way of". **The बर्तन/बिलकुल trap** that unit51.js records for
// रिवाज़/रिवाज, firing a second time.
// WHAT CAUGHT IT: a DUPLICATE-READING probe over all 1,703 readings, not a front
// probe and not a gloss probe. Both spellings read **zariye**, so the language's
// fronts-to-distinct-readings invariant broke while `validate:content` stayed
// green. विपरीत replaced it. **RUN A READING PROBE, NOT ONLY `check-front.mjs`**:
// a front probe cannot see a spelling variant and a gloss probe cannot see which
// of two spellings the corpus chose.
//
// ═════════════════════════════════════════════════════════════════════════════
// WHAT THIS UNIT TEACHES AS A CONSTRUCTION, WITH NO FRONT OF ITS OWN — the
// mechanism unit1.js §6 used for का/के/की/को and §A3 used for सकना.
// ═════════════════════════════════════════════════════════════════════════════
//   1. THE COMPOUND POSTPOSITION IS के + X. Every card in l1 and l2 is the X. The
//      के is FREE (unit1.js) and never a card, so the PATTERN is taught in the
//      hints: a noun goes oblique, के follows it, and the card's word closes it.
//      नियम के मुताबिक · उम्मीद के विपरीत · कानून के तहत. ⚠️ ONE OF THE TWELVE
//      TAKES में AS WELL — के एवज़ में (l2) — and its hint says so. TWO TAKE
//      NO के AT ALL: बतौर goes BEFORE its noun, and समेत follows it bare. TWO TAKE
//      की AND NOT के: खातिर and बाबत. Each is named on its own card, because none
//      of it is predictable from the word.
//   2. की/के AGREEMENT ON THE POSTPOSITION. खिलाफ and तहत take के; खातिर and
//      बाबत take की. This is not predictable and it is named on every card.
//   3. THE CORRELATIVE SKELETON. Hindi joins clauses in PAIRS — जो…वह, जहाँ…वहाँ,
//      जितना…उतना, जैसे ही…वैसे ही — and all eight of those words are already
//      taught (u23, u39). This unit's l3 and l4 sentences USE the skeleton so the
//      learner meets it assembled, which is what A2 never gave him.
//   4. THE CONJUNCTIVE PARTICIPLE -कर. `scope-hi.mjs` has generated it since A2
//      block 1, so it is in scope everywhere, and no unit has ever taught the
//      RULE: V-कर means "having done V, then". Taught in l3's hints.
//
// ⚠️ THREE FRONTS WANTED AND REFUSED, and the FIRST ONE IS THE MOST IMPORTANT
// REFUSAL IN THE BLOCK:
//   • **वैसे ("by the way") — REFUSED BECAUSE CARDING IT WOULD HAVE BROKEN SCOPE
//     BACKWARDS.** वैसा is a taught front (u39l2, "that way"), and `derive()`
//     generates वैसे from it as the -े form. `scope-hi.mjs`'s precedence rule
//     (unit31.js §A6) says a string that is itself a taught front is licensed by
//     its own unit and by NOTHING EARLIER — so making वैसे a front at u79 would
//     have taken it OUT of scope for u39–u78. That is the exact कहना→कहीं defect
//     §A6 was written to catch, and `check-front.mjs` reports वैसे FREE, because
//     the front genuinely is. **The only thing that catches this class is asking
//     whether a taught -ना or -ा front derives the string you want to card.**
//     Checked for every one of this unit's 24: मानो and चाहे are the other two
//     that derive (from मानना u26 and चाहना), and both are carded anyway, because
//     — measured with a token probe over all 1,560 cards — NO existing sentence
//     uses either string, so nothing loses scope. वैसे is used, so वैसे is out.
//   • दरमियान — refused on GLOSS: बीच (u23) is "the middle" and ACCEPTS
//     "between"; दौरान (u23) is "in the course of" and accepts "during". Both
//     senses are taken. DROPPED.
//   • अनुसार, विरुद्ध, सहित, अन्यथा, तथापि — all FREE, all deliberately
//     left for **u83** of this block, where they are carded as the FORMAL twins
//     of खिलाफ, समेत, वरना and हालाँकि. Taking them here would have left u83 with
//     nothing to contrast. *(This line also named फलस्वरूप as u83's formal twin of
//     नतीजतन. Both have since moved: u62 कारण और नतीजा keeps फलस्वरूप AND नतीजतन,
//     so the pair now sits inside one block-1 unit and neither word is u79's or
//     u83's. B1 cross-block dedupe, 2026-10-06.)*
//   • NAMED FOR A LATER BLOCK, free and unspent: अनुरूप, प्रति, यूँ, हवाले,
//     वास्ते, निमित्त, ज्यों, त्यों. *(This list used to name विपरीत, बनिस्बत and
//     अतएव too, and all three are now carded — विपरीत in l1 here, बनिस्बत at u63,
//     अतएव in l4 here.)*
//
// ⚠️ NO GENDER IN THIS UNIT, AND THAT IS NOT AN OVERSIGHT. Twenty-three of the
// twenty-four fronts are POSTPOSITIONS or ADVERBS, which Hindi does not inflect
// for gender at all, so §4's "name the gender in the hint" has nothing to attach
// to. **मद्देनज़र is the one that could be mistaken for a noun and is not** — it
// is a frozen Persian phrase. Each hint says what the word's class is instead.
//
// ⚠️ TWO HOMOGRAPHS CARDED ON PURPOSE, each with the clash in its hint. This is
// the बहाना precedent (unit57l2): a word that looks exactly like a verb form:
//   • मानो "as if" is spelled and read exactly like the FAMILIAR IMPERATIVE of
//     मानना, to accept (u26l1) — मानो! "believe it!". One word, two jobs, and
//     Hindi tells them apart by position: मानो at the head of a clause is "as if".
//   • चाहे "whether / even if" is the SUBJUNCTIVE of चाहना, to want. Same story:
//     चाहे…चाहे… at the head of two clauses is "whether…or…".
// ⚠️ FOUR CARDS LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06), every
// one of them to an EARLIER block-1 slot, so all four are still in scope here:
//   मुताबिक → u65 खबर कहाँ से आई   ·  गोया   → u64 हो सकता है
//   नतीजतन  → u62 कारण और नतीजा   ·  फ़िलहाल → u72 योजना और इरादा
// द्वारा (l1), अर्थात (l3), अमूमन (l4) and अतएव (l4) replaced them, each inside the
// word class of the lesson it joined: a compound postposition, a clause opener,
// and two discourse markers.
//
// RETROFLEX/DENTAL (§1b): no new collision. तहत tahat, समेत samet, बाबत baabat
// and अर्थात arthaat are all DENTAL त with no retroflex twin
// in the corpus. The doubling hatch fires nowhere in this unit. GEMINATION:
// अलबत्ता albattaa and मद्देनज़र maddenazar double, as the spelling requires.
// MULTI-WORD FRONT: जैसे ही is written with a space and its reading has none —
// jaisehii — matching कोई बात नहीं koiibaatnahiin (u7l4) and हवाई जहाज़
// havaaiijahaaz (u9l3). ⚠️ And carding it does NOT un-licence जैसे, because the
// explicit front is the whole two-word string, not its first word. Checked.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT79 = {
  id: "hi-u79",
  lang: "hi",
  title: "जुड़े हुए वाक्य",
  order: 79,
  stage: "b1",
  lessons: [
    {
      id: "hi-u79l1",
      unit: 79,
      lesson: 1,
      title: "The postposition that takes a whole phrase",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that something was done by an authority, is contrary to something, is under the terms of a law, is in the capacity of somebody, is against something, or includes something.",
      items: [
        { id: "hi-u79l1-dvaaraa", type: "vocab", front: "द्वारा", reading: "dvaaraa", meaning: "by the hand of", accept: ["through the agency of", "done by, in a passive sentence"], example: { jp: "यह काम सरकार के द्वारा किया गया।", en: "This work was done by the government." }, drill: { jp: "यह काम सरकार के द्वारा किया गया", en: "This work was done by the government" }, hint: "DVAA-RAA, a POSTPOSITION and not a noun, so it has NO gender in spite of the -ा. ⚠️ It takes के: सरकार के द्वारा, अदालत के द्वारा, and the noun before के goes OBLIQUE (unit 23's paradigm). The द्व is DENTAL द and व stacked. It names the DOER of a passive sentence, where ने (unit 26) names the doer of an active one. ⚠️ It sits inside गुरुद्वारा (unit 51), which is ONE word and not two — the two never meet in a sentence." },
        { id: "hi-u79l1-vipariit", type: "vocab", front: "विपरीत", reading: "vipariit", meaning: "contrary to", accept: ["the opposite of what was said", "running counter to a thing"], example: { jp: "नतीजा हमारी उम्मीद के विपरीत निकला।", en: "The result turned out contrary to our expectation." }, drill: { jp: "नतीजा हमारी उम्मीद के विपरीत निकला", en: "The result turned out contrary to our expectation" }, hint: "VI-PA-RIIT, a POSTPOSITION, DENTAL त. ⚠️ It takes के. Not खिलाफ (l1), which is to be ON THE OTHER SIDE from something: विपरीत means the thing CONTRADICTS what was expected, and it is the word a report uses — उम्मीद के विपरीत, नियम के विपरीत." },
        { id: "hi-u79l1-tahat", type: "vocab", front: "तहत", reading: "tahat", meaning: "under the terms of", accept: ["within the scope of a rule", "as provided for by"], example: { jp: "इस कानून के तहत दहेज माँगना अपराध है।", en: "Under this law demanding a dowry is a crime." }, drill: { jp: "इस कानून के तहत दहेज माँगना अपराध है", en: "Under this law demanding a dowry is a crime" }, hint: "TA-HAT, a POSTPOSITION, both DENTAL त. ⚠️ It takes के. Not नीचे (unit 5), which is physically under something: के तहत is only ever about a rule, a scheme or an agreement covering you." },
        { id: "hi-u79l1-bataur", type: "vocab", front: "बतौर", reading: "bataur", meaning: "in the capacity of", accept: ["acting as", "in the role of"], example: { jp: "वह बतौर मेज़बान सबसे पहले पहुँचा।", en: "He arrived first in the capacity of host." }, drill: { jp: "वह बतौर मेज़बान सबसे पहले पहुँचा", en: "He arrived first as the host" }, hint: "BA-TAUR, a POSTPOSITION — and ⚠️ UNLIKE THE OTHERS IT TAKES NOTHING: बतौर comes BEFORE its noun, with no के at all. बतौर मेज़बान, बतौर अभिनेता. The au is औ's open vowel (unit 2)." },
        { id: "hi-u79l1-khilaaf", type: "vocab", front: "खिलाफ", reading: "khilaaf", meaning: "against", accept: ["in opposition to", "on the other side from"], example: { jp: "पूरा गाँव इस फ़ैसले के खिलाफ था।", en: "The whole village was against this decision." }, drill: { jp: "पूरा गाँव इस फ़ैसले के खिलाफ था", en: "The whole village was against this decision" }, hint: "KHI-LAAF, a POSTPOSITION. ⚠️ It takes के. Plain ख — unit 1 §7 keeps ख़ uncarded, so this is written खिलाफ and not ख़िलाफ़. Its formal twin is विरुद्ध, carded in unit 83 — a Hindi newspaper writes विरुद्ध and a Hindi speaker says खिलाफ." },
        { id: "hi-u79l1-samet", type: "vocab", front: "समेत", reading: "samet", meaning: "including", accept: ["and that as well", "counting it in"], example: { jp: "किराया समेत पूरा हिसाब दे दो।", en: "Give the whole account including the rent." }, drill: { jp: "किराया समेत पूरा हिसाब दे दो", en: "Give the whole account including the rent" }, hint: "SA-MET, a POSTPOSITION, DENTAL त. ⚠️ Unlike the others it takes NOTHING and FOLLOWS its noun directly: किराया समेत, परिवार समेत. Its formal twin is सहित, carded in unit 83 — same meaning, same position, different register." },
      ],
    },
    {
      id: "hi-u79l2",
      unit: 79,
      lesson: 2,
      title: "Except it, without it, for its sake",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say except for something, without something, in exchange for it, for its sake, in the matter of it, and in view of it.",
      items: [
        { id: "hi-u79l2-sivaay", type: "vocab", front: "सिवाय", reading: "sivaay", meaning: "except for", accept: ["all but that one", "leaving that one out"], example: { jp: "उसके सिवाय सब लोग आ गए।", en: "Everyone came except for him." }, drill: { jp: "उसके सिवाय सब लोग आ गए", en: "Everyone came except for him" }, hint: "SI-VAAY, a POSTPOSITION. ⚠️ It takes के: उसके सिवाय, इसके सिवाय. Not अलावा (unit 23), which is 'besides' and ADDS: सिवाय takes away. A Hindi sentence with सिवाय almost always has नहीं or सब in it." },
        { id: "hi-u79l2-bagair", type: "vocab", front: "बगैर", reading: "bagair", meaning: "without, in everyday speech", accept: ["with none of", "in the absence of it, colloquially"], example: { jp: "पानी के बगैर कोई पेड़ नहीं बढ़ता।", en: "Without water no tree grows." }, drill: { jp: "पानी के बगैर कोई पेड़ नहीं बढ़ता", en: "Without water no tree grows" }, hint: "BA-GAIR, a POSTPOSITION. ⚠️ Its gloss names the register on purpose: बिना (unit 23) IS 'without', so this card cannot use that word alone. The two differ in feel, not meaning — बिना is neutral, बगैर is the one you hear in speech. ⚠️ बगैर takes के AFTER its noun: पानी के बगैर, while बिना goes before." },
        { id: "hi-u79l2-evaz", type: "vocab", front: "एवज़", reading: "evaz", meaning: "in exchange for", accept: ["in return for", "as the price of"], example: { jp: "काम के एवज़ में उसे खाना और पैसा मिला।", en: "In exchange for the work he got food and money." }, drill: { jp: "काम के एवज़ में उसे पैसा मिला", en: "In exchange for the work he got money" }, hint: "E-VAZ, a POSTPOSITION ending in ज़ — a z. ⚠️ IT TAKES BOTH SIDES: के एवज़ में, with a में at the end. Three of this lesson's six behave that way and each hint says so. Not बदले, which Hindi also uses and this course does not card." },
        { id: "hi-u79l2-khaatir", type: "vocab", front: "खातिर", reading: "khaatir", meaning: "for the sake of", accept: ["out of regard for", "for somebody's benefit"], example: { jp: "बच्चों की खातिर उसने शहर छोड़ दिया।", en: "For the children's sake he left the city." }, drill: { jp: "बच्चों की खातिर उसने शहर छोड़ दिया", en: "For the children's sake he left the city" }, hint: "KHAA-TIR, a POSTPOSITION, DENTAL त. ⚠️ IT TAKES की, NOT के — बच्चों की खातिर, मेरी खातिर — and that is not predictable: खिलाफ and तहत take के. Plain ख. Heavier than के लिए, 'for': खातिर implies a sacrifice." },
        { id: "hi-u79l2-baabat", type: "vocab", front: "बाबत", reading: "baabat", meaning: "in the matter of", accept: ["on the question of", "with reference to"], example: { jp: "किराये की बाबत मालिक से बात हुई।", en: "There was a word with the owner in the matter of the rent." }, drill: { jp: "किराये की बाबत मालिक से बात हुई", en: "There was a word with the owner about the rent" }, hint: "BAA-BAT, a POSTPOSITION, DENTAL त. ⚠️ It takes की, like खातिर. ⚠️ Glossed 'in the matter of' because बारे (unit 23) is 'concerning' and ACCEPTS 'about' and 'regarding' — बाबत is the office word for the same job." },
        { id: "hi-u79l2-maddenazar", type: "vocab", front: "मद्देनज़र", reading: "maddenazar", meaning: "in view of", accept: ["taking that into account", "given that fact"], example: { jp: "महामारी के मद्देनज़र स्कूल बंद रहे।", en: "In view of the epidemic the schools stayed shut." }, drill: { jp: "महामारी के मद्देनज़र स्कूल बंद रहे", en: "In view of the epidemic the schools stayed shut" }, hint: "MAD-DE-NA-ZAR — ⚠️ it LOOKS like a noun and is not: it is a frozen Persian phrase (मद्दे + नज़र, 'in the matter of the eye') and takes no gender. DENTAL द doubled, and ज़ — a z. It takes के. This is how a Hindi notice opens when it is about to explain itself." },
      ],
    },
    {
      id: "hi-u79l3",
      unit: 79,
      lesson: 3,
      title: "As if, so that, the moment that",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Open a clause with as if, so that, whether, hence, or the moment that, restate one in plainer words — and join two actions with the -कर form.",
      items: [
        { id: "hi-u79l3-maano", type: "vocab", front: "मानो", reading: "maano", meaning: "as if", accept: ["as though", "you would think that"], example: { jp: "वह ऐसे बोल रहा था मानो सब जानता हो।", en: "He was talking as if he knew everything." }, drill: { jp: "वह ऐसे बोला मानो सब जानता हो", en: "He spoke as if he knew everything" }, hint: "MAA-NO, a CLAUSE OPENER. ⚠️ Spelled and read exactly like मानो!, the familiar imperative of मानना, to accept (unit 26) — the बहाना trap (unit 57). Position tells them apart: at the head of a clause it is 'as if'. ⚠️ The verb after it goes SUBJUNCTIVE: जानता हो, not जानता है." },
        { id: "hi-u79l3-arthaat", type: "vocab", front: "अर्थात", reading: "arthaat", meaning: "which is to say, in a written voice", accept: ["put another way, in writing", "in other words"], example: { jp: "वह सबसे बड़ा है अर्थात सब उसकी बात मानते हैं।", en: "He is the eldest, which is to say everybody does as he says." }, drill: { jp: "वह सबसे बड़ा है अर्थात सब उसे मानते हैं", en: "He is the eldest, which is to say all obey him" }, hint: "AR-THAA-T, a CLAUSE OPENER, not a noun, so no gender. The र् is र with a halant, drawn as the hook over the थ, which is DENTAL, as is the final त. ⚠️ Glossed with its register because यानी (unit 30) already holds 'that is to say': अर्थात belongs to a written page, यानी to a conversation. It RESTATES the clause before it in plainer words and never adds a new fact." },
        { id: "hi-u79l3-jisse", type: "vocab", front: "जिससे", reading: "jisse", meaning: "with the result that", accept: ["so that, looking at the outcome", "and therefore"], example: { jp: "बारिश हुई जिससे खेत बच गया।", en: "It rained, with the result that the field was saved." }, drill: { jp: "बारिश हुई जिससे खेत बच गया", en: "It rained and so the field was saved" }, hint: "JIS-SE, a CLAUSE JOINER, built from जिस (FREE since unit 1) plus से. ⚠️ Glossed 'with the result that' because ताकि (unit 39) is 'so that' and accepts 'in order that'. The difference is real: ताकि is the PURPOSE you intended, जिससे is the RESULT that followed." },
        { id: "hi-u79l3-chaahe", type: "vocab", front: "चाहे", reading: "chaahe", meaning: "whether", accept: ["no matter which of two", "it makes no difference if"], example: { jp: "चाहे गरमी हो चाहे सर्दी वह रोज़ चलता है।", en: "Whether it is hot or cold he walks every day." }, drill: { jp: "चाहे गरमी हो चाहे सर्दी वह चलता है", en: "Whether hot or cold he walks" }, hint: "CHAA-HE, a CLAUSE OPENER, and ⚠️ it is the SUBJUNCTIVE of चाहना, to want — the same trap as मानो. At the head of a clause it is 'whether'. ⚠️ IT COMES IN PAIRS: चाहे X चाहे Y, 'whether X or Y', and the verb after it is subjunctive: हो, not है." },
        { id: "hi-u79l3-lihaazaa", type: "vocab", front: "लिहाज़ा", reading: "lihaazaa", meaning: "hence", accept: ["and so, for that reason", "it follows that"], example: { jp: "सबूत नहीं था लिहाज़ा मुकदमा नहीं चला।", en: "There was no proof, hence the case did not proceed." }, drill: { jp: "सबूत नहीं था लिहाज़ा मुकदमा नहीं चला", en: "There was no proof, hence the case did not go on" }, hint: "LI-HAA-ZAA, a CLAUSE JOINER with ज़ — a z, and it does NOT agree despite the -ा. ⚠️ Glossed 'hence' because इसलिए (unit 22) is 'therefore' and accepts 'so' and 'for this reason'. लिहाज़ा is the one a lawyer or a leader uses." },
        { id: "hi-u79l3-jaisehii", type: "vocab", front: "जैसे ही", reading: "jaisehii", meaning: "the moment that", accept: ["as soon as", "no sooner than"], example: { jp: "जैसे ही बिजली गई पूरे गाँव में अंधेरा हो गया।", en: "The moment the power went it went dark in the whole village." }, drill: { jp: "जैसे ही बिजली गई अंधेरा हो गया", en: "The moment the power went it went dark" }, hint: "JAI-SE-HII, a TWO-WORD front written with a space and a reading with none — like कोई बात नहीं (unit 7). Built from जैसा (unit 23) and ही. ⚠️ Its partner in the second clause is वैसे ही, which this course does not card: जैसे ही…, तो… is the commoner shape and the one the example uses." },
      ],
    },
    {
      id: "hi-u79l4",
      unit: 79,
      lesson: 4,
      title: "Anyway, for instance, admittedly",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Steer what you are saying — set an objection aside, give an instance, state the general rule, concede a point, and close an argument with a consequence.",
      items: [
        { id: "hi-u79l4-baharhaal", type: "vocab", front: "बहरहाल", reading: "baharhaal", meaning: "in any case", accept: ["be that as it may", "whatever the position is"], example: { jp: "बहरहाल अब कुछ नहीं हो सकता।", en: "In any case nothing can be done now." }, drill: { jp: "बहरहाल अब कुछ नहीं हो सकता", en: "In any case nothing can be done now" }, hint: "BA-HAR-HAAL, a DISCOURSE MARKER, and it opens the sentence. Built on हाल, the current state (unit 38). ⚠️ It does the job English does with 'anyway' when you are closing a subject down, not the one खैर does when you are shrugging." },
        { id: "hi-u79l4-maslan", type: "vocab", front: "मसलन", reading: "maslan", meaning: "for instance", accept: ["by way of illustration", "to take a case"], example: { jp: "कुछ काम मुश्किल हैं मसलन खेत में पानी देना।", en: "Some jobs are hard, for instance watering the field." }, drill: { jp: "कुछ काम मुश्किल हैं मसलन खेत का काम", en: "Some jobs are hard, for instance field work" }, hint: "MAS-LAN, a DISCOURSE MARKER. The -न ending is Arabic adverbial, the same shape as नतीजतन in this lesson. ⚠️ Glossed 'for instance' because उदाहरण (unit 32) is 'an example' — that one is the NOUN, this one is what you say before giving one." },
        { id: "hi-u79l4-amuuman", type: "vocab", front: "अमूमन", reading: "amuuman", meaning: "as a general rule", accept: ["usually, taking things on the whole", "in the generality of cases"], example: { jp: "अमूमन यह दुकान आठ बजे खुलती है, पर आज बंद है।", en: "As a general rule this shop opens at eight, but today it is shut." }, drill: { jp: "अमूमन यह दुकान आठ बजे खुलती है", en: "As a general rule this shop opens at eight" }, hint: "A-MUU-MAN, a DISCOURSE MARKER, no gender. An Arabic adverbial, like नतीजतन (unit 62) and मसलन beside it. ⚠️ Not अक्सर (unit 30), which is 'often' and counts how MANY times: अमूमन states the rule a case may break, which is why the example then breaks it." },
        { id: "hi-u79l4-khair", type: "vocab", front: "खैर", reading: "khair", meaning: "anyway, let it pass", accept: ["never mind that", "well, moving on"], example: { jp: "खैर जो हुआ वह अब नहीं बदलेगा।", en: "Anyway, what has happened will not change now." }, drill: { jp: "खैर जो हुआ वह अब नहीं बदलेगा", en: "Anyway what has happened will not change" }, hint: "KHAIR, a DISCOURSE MARKER. Plain ख. ⚠️ Its own meaning is 'wellbeing' — खैरियत — and as a marker it means you are letting something go rather than arguing it. The commonest single word in spoken Hindi for changing the subject." },
        { id: "hi-u79l4-ataev", type: "vocab", front: "अतएव", reading: "ataev", meaning: "and therefore, in a literary voice", accept: ["this being so", "from which it follows that"], example: { jp: "सबूत पूरे नहीं थे अतएव अदालत ने कुछ नहीं कहा।", en: "The evidence was incomplete and therefore the court said nothing." }, drill: { jp: "सबूत पूरे नहीं थे अतएव अदालत चुप रही", en: "The evidence was incomplete and therefore the court stayed silent" }, hint: "A-TA-EV, a DISCOURSE MARKER, no gender. Four letters and no mātrā at all: अ-त-ए-व, with ए as the INDEPENDENT letter because nothing precedes it to carry a mark (§1). ⚠️ Glossed with its register because इसलिए (unit 22) holds 'so' and लिहाज़ा (l3) holds 'hence': अतएव is the bookish one, and it closes an argument rather than a story." },
        { id: "hi-u79l4-albattaa", type: "vocab", front: "अलबत्ता", reading: "albattaa", meaning: "it must be granted", accept: ["it is true that", "granted, though"], example: { jp: "काम अच्छा है अलबत्ता पैसा कम है।", en: "The work is good; admittedly the money is poor." }, drill: { jp: "काम अच्छा है अलबत्ता पैसा कम है", en: "The work is good, admittedly the money is poor" }, hint: "AL-BAT-TAA, a DISCOURSE MARKER, and it does NOT agree despite the -ा. The त्त is doubled, DENTAL both times. ⚠️ It concedes the point you are about to weaken — the same job हालाँकि (unit 39) does inside a clause, but अलबत्ता stands on its own between two sentences." },
      ],
    },
  ],
};
