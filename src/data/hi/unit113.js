// HI Unit 113 — भाषा और अनुवाद ("Language and translation") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit111.js §C1–§C6.
//
// 🚨 RETHEMED SLOT (scaffold: "Education and research"). THE SCAFFOLD THEME IS
// DEAD, measured at **2 of 18 taken** on the new theme and effectively 16/18 on
// the old one: u97 उच्च शिक्षा took the whole of higher study (विश्वविद्यालय,
// महाविद्यालय, संस्थान, विभाग, छात्रावास, पुस्तकालय, दाखिला, शुल्क, सत्र,
// पाठ्यक्रम, व्याख्यान, प्रोफ़ेसर, कुलपति, छात्रवृत्ति, उपाधि, स्नातक, अध्ययन,
// निबंध, शोधग्रंथ, परिशिष्ट, योग्यता, प्रस्तुति, संगोष्ठी, विशेषज्ञ) and u87
// विज्ञान और शोध took research (शोध, प्रयोगशाला, नमूना, परिकल्पना, कोशिका, अणु,
// परमाणु, जीव, ग्रह, खगोल, दूरबीन, ब्रह्मांड, सूत्र, रसायन…). u34 दफ़्तर और पढ़ाई
// owns school. An "education and research" unit at u113 would have been the
// third authoring of one field — RUNBOOK §0's 104-card failure, exactly.
//
// MEASURED HOLE THE SLOT WAS RETHEMED INTO. The course teaches Hindi in Hindi
// and has no words FOR language: u6 carded अक्षर, शब्द and वाक्य as part of the
// script band, u4 carded भाषा, u91 carded अनुवाद, छंद, शैली and रूपक as
// literature, u74 carded संवाद as screen dialogue, u96 carded अनुवादक as a job
// title, and u89 carded संधि as a treaty. Beyond that: **no noun, no pronoun, no
// adjective, no verb as a part of speech, no tense, no grammar, no vowel, no
// consonant, no script, no spelling, no pronunciation, no accent, no dictionary,
// no vocabulary, no synonym, no antonym, no idiom, no proverb, no
// transliteration, no original text, no adaptation, no interpreter, no mother
// tongue and no word for fluent.** A learner who has reached B2 in Hindi cannot
// say "that is an idiom" or "check the spelling". 2 of 18 probe words taken.
//
// ⚠️ THIS UNIT TEACHES THE METALANGUAGE THE REST OF THE COURSE HAS BEEN USING IN
// ENGLISH. Every hint in all 112 previous units says "masculine", "the oblique",
// "a stacked conjunct" in English, because there was no Hindi for it. From here
// there is. That is the reason the slot is worth a B2 unit rather than being
// merged into u91: it is not literature vocabulary, it is the words for the
// machine the learner has been operating for 112 units.
//
// ⚠️ अनुवाद IS IN THE TITLE AND IS NOT CARDED HERE — it is u91l?'s. §C4 allows a
// title to name a word the unit does not teach, and three titles in this block
// do. अनुवादक, the translator, is u96's (job titles). What this unit cards on the
// translation side is the PROCESS and the ROLE nobody owns: लिप्यंतरण, मूलपाठ,
// रूपांतर, दुभाषिया. Do not "fix" the title by re-carding अनुवाद.
//
// ⚠️ ONE FRONT KEPT ACROSS A KNOWN SUBSTRING MATCH, recorded because a later seat
// will meet it: **क्रिया (l1, "a verb") IS A MATCHABLE STRING INSIDE अभिक्रिया
// (u122l3, "a chemical reaction")** — the ि of अभि before it is a MĀTRĀ, not a
// letter, so `findWholeWord` CAN fire. Both are mine, in different units, with
// unrelated meanings, and अभिक्रिया was assigned to u122 centrally. This is the
// same call u97 made on छात्रावास ⊃ छात्र: the compound is a separate lexeme and
// both ship, with the overlap named in both hints. **No drill in either unit
// contains the other's front.** क्रियान्वयन (u114l4, also mine) ⊃ क्रिया CANNOT
// fire — the न after it is a letter.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: संज्ञा, क्रिया, लिपि, वर्तनी, शब्दावली, कहावत, मातृभाषा.
//   ⚠️ **संज्ञा AND क्रिया ARE FEMININE IN -आ**, against the rule (§B6), and they
//   are the two most likely to be got wrong because they sit side by side in l1
//   with विशेषण, which is masculine. ⚠️ **लिपि ENDS IN A SHORT ि** — lipi, never
//   lipii — the same shape as समिति (u88) and कृति (u91). ⚠️ **वर्तनी AND
//   शब्दावली ARE FEMININE WITH A LONG ी**, which the rule gets right for once.
//   ⚠️ **कहावत IS FEMININE AND CONSONANT-FINAL**, so nothing in the shape says so.
//   MASCULINE: सर्वनाम, विशेषण, काल, व्याकरण, स्वर, व्यंजन, उच्चारण, लहजा,
//   शब्दकोश, पर्यायवाची, विलोम, मुहावरा, लिप्यंतरण, मूलपाठ, रूपांतर, दुभाषिया.
//   ⚠️ **लहजा, मुहावरा AND दुभाषिया ARE MASCULINE IN -आ**, which is the rule, and
//   **पर्यायवाची IS MASCULINE DESPITE THE -ी** — the same exception class as पानी
//   (unit 1 §4). धाराप्रवाह is used as an ADVERB and does not agree at all.
//   ⚠️ **दुभाषिया DOES NOT CHANGE FOR A WOMAN.**
//
// ⚠️ SUBSTRING TRAPS, each checked (`isLetter` is `/\p{L}/`; a MĀTRĀ or HALANT
// does not block a match, a LETTER does). THIS UNIT HAS THE BLOCK'S BEST
// FIRES/DOES-NOT-FIRE PAIR, and both members sit in adjacent lessons:
//   • शब्दावली ⊃ शब्द (u6l4, a word) — **FIRES.** The ा after शब्द is a mātrā.
//   • शब्दकोश ⊃ शब्द — **CANNOT FIRE.** The क after it is a letter.
//   One front, two compounds, opposite answers; both hints say so.
//   • मातृभाषा ⊃ भाषा (u4l?, a language) — **FIRES.** The ृ before it is ऋ's
//     mātrā, a MARK, so it does not block the match. Named in the hint as the hook.
//   • मूलपाठ ⊃ मूल (u62, the root of a thing) — CANNOT FIRE, प follows · AND
//     ⊃ पाठ (u28l2, a lesson) — CANNOT FIRE, ल precedes. TWO taught fronts inside
//     one word, NEITHER matchable.
//   • सर्वनाम ⊃ नाम (u3, a name) — CANNOT FIRE, व precedes. Still the hook: a
//     pronoun stands in for a name, and that is exactly what the Hindi says.
//   • दुभाषिया ⊃ भाषा? NOT a substring — भाषि, with a short ि, is a different
//     string from भाषा. Checked rather than assumed.
//   • लिप्यंतरण ⊃ लिपि? NOT a substring — लिप्य has a halant and य where लिपि has
//     a short ि.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// 🚨 SCRIPT NOTE: मातृभाषा is the **seventh** word in the course to use the ृ
// MĀTRĀ, after कृपया (u7l2), कृति (u91l4), संस्कृति and मातृभूमि (u92l4), वृत्त
// (u95l1) and छात्रवृत्ति (u97l2) — and the same मातृ as मातृभूमि, which is the
// hook. Still uncarded per unit1.js §7 and §B2, still taught in the hint.
//
// RETROFLEX/DENTAL (§1b): वर्तनी vartanii, मूलपाठ muulpaath and रूपांतर ruupaantar
// are DENTAL; no word in this unit carries a retroflex that would collide with a
// dental twin, so the doubling escape hatch is not needed — checked, not assumed.
// 24 new readings, 24 distinct, zero collisions against all 2,270.
// ⚠️ ONE READING PAIR IS CLOSE and is named in its hint: स्वर svar against सर
// (not a front) and सवेरा — and more usefully against स्वर's own neighbour
// व्यंजन vyanjan, where व begins both.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords, so no card can accept its own
// prompt read aloud.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: भाषाविज्ञान (linguistics), लोकोक्ति (REFUSED — कहावत in l3 is the word a
// learner needs and लोककथा u73 is already close), द्विभाषी, उपसर्ग and प्रत्यय
// (u81 already teaches the prefix and the suffix as word-formation, through
// बेईमान/नाकाम and -आई/-आवट, so the TERMS would be a second layer on taught
// material), वाक्यांश, शुद्धि, कोश (REFUSED — शब्दकोश in l3 carries it), अर्थ
// (REFUSED — मतलब u8 owns "meaning" and अर्थ would collide through
// `normalizeMeaning`), धातु (the verb root — the front is u122l2's, as "a metal").
export const HI_UNIT113 = {
  id: "hi-u113",
  lang: "hi",
  title: "भाषा और अनुवाद",
  order: 113,
  stage: "b2",
  lessons: [
    {
      id: "hi-u113l1",
      unit: 113,
      lesson: 1,
      title: "The parts of speech, named in Hindi",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say in Hindi what a noun, a pronoun, an adjective, a verb and a tense are, and use the word for grammar itself.",
      items: [
        { id: "hi-u113l1-sangyaa", type: "vocab", front: "संज्ञा", reading: "sangyaa", meaning: "a noun", accept: ["the word class that names a thing"], example: { jp: "हिंदी में हर संज्ञा अपने विशेषण को भी बदल देती है, इसलिए एक शब्द से पूरा वाक्य बदल जाता है।", en: "In Hindi every noun changes its adjective too, so one word changes the whole sentence." }, drill: { jp: "हर संज्ञा का अपना विशेषण होता है", en: "Every noun has its own adjective" }, hint: "SAN-GYAA. ⚠️ FEMININE IN -आ, against the rule (unit 1 §4) — यह संज्ञा नई है, never यह संज्ञा नया है. ज्ञ is one of unit 6's three letter-conjuncts and is read gya, not gna: संज्ञा is sangyaa. 🚨 This is the word 112 units of hints have been calling 'a noun' in English." },
        { id: "hi-u113l1-sarvanaam", type: "vocab", front: "सर्वनाम", reading: "sarvanaam", meaning: "a pronoun", accept: ["a word standing in place of a name"], example: { jp: "यह, वह, मैं और आप सब सर्वनाम हैं, और हिंदी में तीन तरह का आप भी है।", en: "यह, वह, मैं and आप are all pronouns, and in Hindi there are three levels of आप besides." }, drill: { jp: "यह और वह दोनों सर्वनाम हैं", en: "यह and वह are both pronouns" }, hint: "SAR-VA-NAAM, masculine. सर्व, all, plus नाम, a name (unit 3) — a word that stands for ANY name, which is exactly what a pronoun does. ⚠️ नाम IS A STRING INSIDE IT AND THE ROUTER CANNOT MATCH IT, because the व before it is a letter. र्व is र with its halant written above the व." },
        { id: "hi-u113l1-visheshan", type: "vocab", front: "विशेषण", reading: "visheshan", meaning: "an adjective", accept: ["the word class that describes a thing"], example: { jp: "हिंदी में विशेषण अपनी संज्ञा के साथ बदलता है, इसलिए बड़ा लड़का और बड़ी लड़की दोनों ठीक हैं।", en: "In Hindi an adjective changes with its noun, so बड़ा लड़का and बड़ी लड़की are both correct." }, drill: { jp: "विशेषण अपनी संज्ञा के साथ बदलता है", en: "An adjective changes with its noun" }, hint: "VI-SHE-SHAN, masculine — the odd one out in a lesson whose first two cards are feminine. ⚠️ TWO DIFFERENT SH LETTERS: श in the middle and ष at the end, and unit 1 §1a merges both to sh, so the reading cannot tell you which is written. The ण is RETROFLEX, merged with न in the reading." },
        { id: "hi-u113l1-kriyaa", type: "vocab", front: "क्रिया", reading: "kriyaa", meaning: "a verb", accept: ["the word class that names an action"], example: { jp: "हिंदी में हर क्रिया अपने साथ एक काल लाती है, और उसी से पता चलता है कि काम कब हुआ।", en: "In Hindi every verb carries a tense with it, and that is what tells you when the action happened." }, drill: { jp: "हर क्रिया अपने साथ एक काल लाती है", en: "Every verb carries a tense with it" }, hint: "KRI-YAA. ⚠️ FEMININE IN -आ, against the rule, like संज्ञा two cards above. क्र is क with a halant then र. ⚠️ क्रिया also means an action in general, which is why the gloss names the word CLASS. 🚨 It is a matchable string inside अभिक्रिया, a chemical reaction (unit 122) — the ि before it is a mātrā — but the two are different words and no drill mixes them." },
        { id: "hi-u113l1-kaal", type: "vocab", front: "काल", reading: "kaal", meaning: "grammatical tense", accept: ["which time a verb puts an action in"], example: { jp: "जब काल बदलता है तो क्रिया बदलती है, पर संज्ञा वैसी ही रहती है।", en: "When the tense changes the verb changes, but the noun stays as it was." }, drill: { jp: "काल बदलने पर क्रिया बदलती है", en: "When the tense changes the verb changes" }, hint: "KAAL, masculine and consonant-final, both consonants DENTAL. ⚠️ Outside grammar काल means a period of time, and in older Hindi death — so the gloss says 'grammatical' to keep it apart. It is the same काल as in आपातकाल, an emergency (unit 112), where it cannot be matched because the त before it is a letter." },
        { id: "hi-u113l1-vyaakaran", type: "vocab", front: "व्याकरण", reading: "vyaakaran", meaning: "grammar", accept: ["the rules a language actually runs on"], example: { jp: "व्याकरण सीखे बिना भी लोग बोल लेते हैं, पर लिखते समय हर गलती दिख जाती है।", en: "People manage to speak even without learning grammar, but when writing every mistake shows." }, drill: { jp: "व्याकरण सीखे बिना भी लोग बोल लेते हैं", en: "People speak even without learning grammar" }, hint: "VYAA-KA-RAN, masculine. व्य is a stacked conjunct — व with a halant, then य — the same stack that opens व्यंजन in the next lesson. The ण is RETROFLEX. ⚠️ Not नियम (unit 32), which is one rule of any kind: व्याकरण is the whole system, and Hindi treats it as a single uncountable thing." },
      ],
    },
    {
      id: "hi-u113l2",
      unit: 113,
      lesson: 2,
      title: "Sounds, letters and spelling",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name a vowel, a consonant, a writing system, the spelling, the pronunciation and somebody's accent.",
      items: [
        { id: "hi-u113l2-svar", type: "vocab", front: "स्वर", reading: "svar", meaning: "a vowel", accept: ["a sound made with the mouth open"], example: { jp: "हिंदी में ग्यारह स्वर हैं, और हर एक को किसी व्यंजन के साथ भी लिखा जा सकता है।", en: "Hindi has eleven vowels, and each of them can also be written together with a consonant." }, drill: { jp: "हिंदी में ग्यारह स्वर हैं", en: "Hindi has eleven vowels" }, hint: "SVAR, masculine and consonant-final. स्व is a stacked conjunct: स with a halant, then व. ⚠️ स्वर also means a musical note and, in older writing, a voice — so a singer's स्वर and a letter's स्वर are the same word. ⚠️ ONE SOUND, NOT TWO: svar, never su-var." },
        { id: "hi-u113l2-vyanjan", type: "vocab", front: "व्यंजन", reading: "vyanjan", meaning: "a consonant", accept: ["a sound the mouth closes on"], example: { jp: "हर व्यंजन अपने साथ छोटा अ लाता है, और उसी वजह से क अकेला भी बोला जा सकता है।", en: "Every consonant carries a short a with it, which is why क can be said on its own." }, drill: { jp: "हर व्यंजन अपने साथ छोटा अ लाता है", en: "Every consonant carries a short a with it" }, hint: "VYAN-JAN, masculine. व्य again, as in व्याकरण, and the ं before ज is a stop so unit 1 §1 writes it n. 🚨 This card names the mechanism unit 1 §3 built the whole script band on — the abugida. ⚠️ व्यंजन ALSO means a cooked dish in Hindi, which is why the gloss is about sound." },
        { id: "hi-u113l2-lipi", type: "vocab", front: "लिपि", reading: "lipi", meaning: "a writing system", accept: ["the set of letters a language is written in"], example: { jp: "हिंदी की लिपि बहुत पुरानी है, और वही लिपि कुछ और भाषाएँ भी काम में लाती हैं।", en: "Hindi's script is very old, and some other languages use that same script too." }, drill: { jp: "हिंदी की लिपि बहुत पुरानी है", en: "Hindi's script is very old" }, hint: "LI-PI, feminine. ⚠️ **IT ENDS IN A SHORT ि, NOT A LONG ी** — lipi, never lipii — the same shape as समिति (unit 88) and कृति (unit 91), and the commonest spelling mistake in the word. ⚠️ Not भाषा: a भाषा is the language, a लिपि is only the marks, and one लिपि can carry several भाषा — which is what the example says." },
        { id: "hi-u113l2-vartanii", type: "vocab", front: "वर्तनी", reading: "vartanii", meaning: "spelling", accept: ["which letters a word is written with"], example: { jp: "बोलने में कोई फ़र्क नहीं पड़ता, पर लिखने में वर्तनी ठीक न हो तो मतलब बदल जाता है।", en: "It makes no difference in speech, but in writing, if the spelling is not right the meaning changes." }, drill: { jp: "लिखने में वर्तनी ठीक होनी चाहिए", en: "In writing the spelling must be right" }, hint: "VAR-TA-NII, feminine with a long ी, which the rule gets right. र्त is र with its halant above the त, and the त is DENTAL. ⚠️ This is the word for the problem unit 1 §1a describes: श and ष both read sh, so the reading cannot tell you the वर्तनी — only the hint can." },
        { id: "hi-u113l2-ucchaaran", type: "vocab", front: "उच्चारण", reading: "ucchaaran", meaning: "pronunciation", accept: ["how a word is actually said aloud"], example: { jp: "उसकी वर्तनी ठीक है पर उच्चारण में ट और त का फ़र्क अब भी नहीं आता।", en: "His spelling is correct but his pronunciation still does not get the difference between ट and त." }, drill: { jp: "उसका उच्चारण अब बहुत साफ़ है", en: "His pronunciation is very clear now" }, hint: "UCH-CHAA-RAN, masculine. च्च is a DOUBLED consonant written with a halant — unit 1 §1 says gemination is doubled in the reading too, so ucchaaran. The ण is RETROFLEX. ⚠️ The pair वर्तनी/उच्चारण is the whole of unit 1 §1b in two words: the spelling keeps ट and त apart, the reading does not, and only the उच्चारण does." },
        { id: "hi-u113l2-lahjaa", type: "vocab", front: "लहजा", reading: "lahjaa", meaning: "an accent in speech", accept: ["the way a region or a person sounds"], example: { jp: "वह हिंदी ठीक बोलता है, पर लहजा सुनकर लोग फ़ौरन बता देते हैं कि वह कहाँ का है।", en: "He speaks Hindi correctly, but on hearing his accent people say at once where he is from." }, drill: { jp: "लहजा सुनकर लोग बता देते हैं", en: "On hearing the accent people can tell" }, hint: "LAH-JAA, masculine in -आ, which is the rule. ⚠️ Not बोली, which is a whole dialect with its own words — a लहजा is only the SOUND, so two people using the same words can have different लहजा. The word is from Arabic and is everyday rather than formal." },
      ],
    },
    {
      id: "hi-u113l3",
      unit: 113,
      lesson: 3,
      title: "Words about words",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Use a dictionary, name your vocabulary, and tell a synonym from an antonym and an idiom from a proverb.",
      items: [
        { id: "hi-u113l3-shabdkosh", type: "vocab", front: "शब्दकोश", reading: "shabdkosh", meaning: "a dictionary", accept: ["the book that lists what words mean"], example: { jp: "शब्दकोश में हर शब्द के साथ उसका मतलब भी लिखा होता है, इसलिए वह सीखने में बहुत काम आता है।", en: "A dictionary writes each word's meaning beside it, which is why it is so useful in learning." }, drill: { jp: "शब्दकोश में हर शब्द का मतलब होता है", en: "A dictionary has each word's meaning" }, hint: "SHABD-KOSH, masculine. शब्द, a word (unit 6), plus कोश, a treasury. 🚨 शब्द IS A STRING INSIDE IT AND THE ROUTER **CANNOT** MATCH IT, because the क after it is a letter. ⚠️ CONTRAST शब्दावली in the next card, where it CAN — same front, two compounds, opposite answers." },
        { id: "hi-u113l3-shabdaavalii", type: "vocab", front: "शब्दावली", reading: "shabdaavalii", meaning: "a vocabulary", accept: ["all the words one person or one field uses"], example: { jp: "दो साल में उसकी शब्दावली इतनी बढ़ गई कि वह अखबार बिना शब्दकोश के पढ़ लेता है।", en: "In two years his vocabulary grew so much that he reads the newspaper without a dictionary." }, drill: { jp: "दो साल में उसकी शब्दावली बहुत बढ़ गई", en: "In two years his vocabulary grew a lot" }, hint: "SHABD-AA-VA-LII, feminine with a long ी. शब्द plus आवली, a row or string of things. 🚨 शब्द IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT, because the ा after it is a MĀTRĀ, not a letter — the opposite answer to शब्दकोश one card above, and the deciding character is simply the next one." },
        { id: "hi-u113l3-paryaayvaachii", type: "vocab", front: "पर्यायवाची", reading: "paryaayvaachii", meaning: "a synonym", accept: ["another word meaning the same thing"], example: { jp: "रास्ता और सड़क एक दूसरे के पर्यायवाची हैं, पर एक किसी भी रास्ते के लिए चलता है और दूसरा सिर्फ़ शहर में।", en: "रास्ता and सड़क are synonyms of each other, but one works for any way through and the other only in a town." }, drill: { jp: "रास्ता और सड़क एक दूसरे के पर्यायवाची हैं", en: "रास्ता and सड़क are synonyms of each other" }, hint: "PAR-YAAY-VAA-CHII. ⚠️ MASCULINE DESPITE THE -ी ENDING — the same exception class as पानी (unit 1 §4) — so यह पर्यायवाची, and never यह पर्यायवाची है वाली. ⚠️ Two true synonyms are rarely both cardable here: this course teaches खून and NOT रक्त, because glossing both as 'blood' would be one gloss on two cards (unit 1 §9) — so a पर्यायवाची is often a word the learner only ever meets." },
        { id: "hi-u113l3-vilom", type: "vocab", front: "विलोम", reading: "vilom", meaning: "an antonym", accept: ["the word that means the opposite"], example: { jp: "सस्ता का विलोम महँगा है, और बच्चों को यह जोड़ा सबसे पहले सिखाया जाता है।", en: "The antonym of सस्ता is महँगा, and children are taught this pair first of all." }, drill: { jp: "सस्ता का विलोम महँगा है", en: "The antonym of सस्ता is महँगा" }, hint: "VI-LOM, masculine and consonant-final. ⚠️ The pair with पर्यायवाची one card above is how an Indian school teaches vocabulary, and both words appear on every exam paper — which is why a learner meets them as a pair or not at all." },
        { id: "hi-u113l3-muhaavraa", type: "vocab", front: "मुहावरा", reading: "muhaavraa", meaning: "an idiom", accept: ["a set phrase whose words do not add up"], example: { jp: "हर मुहावरा अपने शब्दों से नहीं समझा जा सकता, इसलिए उसे अलग से याद करना पड़ता है।", en: "No idiom can be understood from its own words, so it has to be learned separately." }, drill: { jp: "हर मुहावरा अलग से याद करना पड़ता है", en: "Every idiom has to be learned separately" }, hint: "MU-HAAV-RAA, masculine in -आ, which is the rule. ⚠️ The inherent a in the middle is NOT said — unit 1 §1 writes the reading as it is spoken, so muhaavraa and never muhaavaraa. ⚠️ Not a कहावत in the next card: a मुहावरा is a PHRASE you drop into your own sentence." },
        { id: "hi-u113l3-kahaavat", type: "vocab", front: "कहावत", reading: "kahaavat", meaning: "a proverb", accept: ["a whole saying people quote as it is"], example: { jp: "गाँव में हर बात के लिए एक कहावत है, और बूढ़े लोग बहस के बीच उसे फ़ौरन बोल देते हैं।", en: "In the village there is a proverb for everything, and old people come out with one at once in the middle of an argument." }, drill: { jp: "हर बात के लिए एक कहावत है", en: "There is a proverb for everything" }, hint: "KA-HAA-VAT. ⚠️ FEMININE AND CONSONANT-FINAL (§B6), so nothing in the shape says so — यह कहावत पुरानी है, never पुराना. From कहना, to say (unit 22) — a कहावत is simply 'a said thing'. ⚠️ Unlike a मुहावरा it is a COMPLETE sentence and is quoted whole." },
      ],
    },
    {
      id: "hi-u113l4",
      unit: 113,
      lesson: 4,
      title: "Carrying it into another language",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about moving a text between languages: transliteration, the original, an adaptation, the interpreter, a person who has two of them, and speaking without stumbling.",
      items: [
        { id: "hi-u113l4-lipyantaran", type: "vocab", front: "लिप्यंतरण", reading: "lipyantaran", meaning: "transliteration", accept: ["writing one script's words in another script"], example: { jp: "यह किताब अंग्रेज़ी में नहीं है — इसमें हिंदी के शब्द अंग्रेज़ी अक्षरों में हैं, और उसे लिप्यंतरण कहते हैं।", en: "This book is not in English — it has Hindi words in English letters, and that is called transliteration." }, drill: { jp: "इसे लिप्यंतरण कहते हैं", en: "This is called transliteration" }, hint: "LI-PYAN-TA-RAN, masculine. लिपि, a script (lesson 2), plus अंतरण, a carrying across — but the ि of लिपि turns into प्य when the two join, so **लिपि IS NOT A SUBSTRING HERE** and the router cannot match it. ⚠️ This is exactly what every `reading` field in this course is: the Hindi word written in Latin letters." },
        { id: "hi-u113l4-muulpaath", type: "vocab", front: "मूलपाठ", reading: "muulpaath", meaning: "the original text", accept: ["the version a translation was made from"], example: { jp: "अनुवाद पढ़ने में आसान था, पर मूलपाठ देखने पर पता चला कि दो पूरे हिस्से छोड़ दिए गए थे।", en: "The translation was easy to read, but on looking at the original it turned out two whole parts had been left out." }, drill: { jp: "मूलपाठ देखने पर पता चला", en: "On looking at the original it came out" }, hint: "MUUL-PAATH, masculine. मूल, the root or original of a thing (unit 62), plus पाठ, a text or lesson (unit 28). 🚨 TWO TAUGHT FRONTS INSIDE ONE WORD AND NEITHER CAN BE MATCHED: मूल is followed by the letter प, and पाठ is preceded by the letter ल. The ठ is RETROFLEX." },
        { id: "hi-u113l4-ruupaantar", type: "vocab", front: "रूपांतर", reading: "ruupaantar", meaning: "an adaptation", accept: ["a version changed to suit a new form"], example: { jp: "फ़िल्म उस उपन्यास का रूपांतर है, इसलिए कहानी वही है पर आधे पात्र नए हैं।", en: "The film is an adaptation of that novel, so the story is the same but half the characters are new." }, drill: { jp: "फ़िल्म उस उपन्यास का रूपांतर है", en: "The film is an adaptation of that novel" }, hint: "RUU-PAAN-TAR, masculine. रूप, a form, plus अंतर, a change — and the ं is before त, a stop, so unit 1 §1 writes it n. ⚠️ Not an अनुवाद (unit 91): a translation tries to keep the same thing, a रूपांतर deliberately changes form — a novel into a film, a poem into a song." },
        { id: "hi-u113l4-dubhaashiyaa", type: "vocab", front: "दुभाषिया", reading: "dubhaashiyaa", meaning: "an interpreter", accept: ["one who turns speech into another language as it happens"], example: { jp: "मीटिंग में दोनों तरफ़ एक दुभाषिया बैठा था, और हर वाक्य के बाद थोड़ी देर रुकना पड़ता था।", en: "An interpreter sat on each side at the meeting, and after every sentence there had to be a short pause." }, drill: { jp: "मीटिंग में एक दुभाषिया बैठा था", en: "An interpreter was sitting at the meeting" }, hint: "DU-BHAA-SHI-YAA, masculine in -आ, and ⚠️ IT DOES NOT CHANGE FOR A WOMAN. दु-, two, plus भाषा — a two-language person. ⚠️ **भाषा IS NOT A SUBSTRING**: भाषि, with a short ि, is a different string, so the router cannot match it here — unlike मातृभाषा in the next card, where it can. ⚠️ Not अनुवादक (unit 96), who works with WRITING." },
        { id: "hi-u113l4-dvibhaashii", type: "vocab", front: "द्विभाषी", reading: "dvibhaashii", meaning: "able to use two languages", accept: ["having two languages rather than one"], example: { jp: "द्विभाषी आदमी दोनों भाषा में सोच लेता है, इसलिए अनुवाद उसके लिए आसान रहता है।", en: "A bilingual person can think in both languages, which is why translation stays easy for him." }, drill: { jp: "द्विभाषी आदमी दोनों भाषा में सोचता है", en: "A bilingual person thinks in both languages" }, hint: "DVI-BHAA-SHII, an INVARIANT adjective used as a noun too. द्वि-, two, plus भाषी, speaking — and ✅ भाषा (unit 4) is NOT a substring, because भाषी ends in ी. ⚠️ **NOT दुभाषिया, two cards up**: a दुभाषिया does the JOB of interpreting for other people, while a द्विभाषी person simply has two languages and may never interpret for anyone. They share a root and a lesson deliberately. 🚨 **मातृभाषा WAS REMOVED FROM THIS SLOT** — u109l1 owns it, where the tongue you grew up in belongs to identity." },
        { id: "hi-u113l4-dhaaraapravaah", type: "vocab", front: "धाराप्रवाह", reading: "dhaaraapravaah", meaning: "fluent", accept: ["speaking on without stopping to search"], example: { jp: "अब वह धाराप्रवाह बोलता है, और बीच में शब्द ढूँढने के लिए रुकता भी नहीं।", en: "Now he speaks fluently, and does not even stop midway to look for a word." }, drill: { jp: "अब वह धाराप्रवाह बोलता है", en: "Now he speaks fluently" }, hint: "DHAA-RAA-PRA-VAAH, used as an ADVERB, so it does not agree with anything — the easy half. धारा, a stream, plus प्रवाह, a flowing: speech that runs like water. ⚠️ It is about not STOPPING, not about being correct — a learner can be धाराप्रवाह and still get every gender wrong, which is why this unit cards वर्तनी and उच्चारण separately." },
      ],
    },
  ],
};
