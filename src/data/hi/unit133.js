// HI Unit 133 — रोशनी और रंग ("Light and colour") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 13 (B2)"). Theme ASSIGNED CENTRALLY at
// **2 of 18 taken** — and again the slot number understates it: this unit's own
// probe of 33 light-and-colour candidates found **12 already carded**. u56 is an
// everyday light-and-dark unit (रोशनी, चमक, अंधेरा, रंगीन, धुंधला); u16 is the
// basic colours (रंग, फीका, नारंगी, भूरा, गुलाबी, plus लाल, नीला, हरा, पीला,
// काला, सफ़ेद); u54 छाया; u95 पारदर्शी; u87 दूरबीन; u40 चश्मा; u60 चाँदी.
//
// 🚨 **THIS UNIT OWNS THE OPTICS, u56 OWNS THE EVERYDAY LIGHT, u16 OWNS THE BASIC
// COLOURS.** That is the whole shape of the file, and it is why प्रकाश is glossed
// as physics and उजाला as a place being lit — rather than as "light", which
// लाइट@u9 and जलाना@u31 already own as a string.
//
// ⚠️ CROSS-BLOCK: **u126 owns the SOURCE** (सौर, पवन, विद्युत, भाप, टरबाइन) and
// **block 2's u122 owns the REACTION** (अभिक्रिया, उत्प्रेरक, विलयन). Neither set
// appears here. This unit takes LIGHT, which is why u126's बल्ब is an object.
//
// ⚠️ THREE REFUSALS:
//   • **धुँधला WAS REFUSED** — धुंधला@u56 is the same lexeme with ं for ँ
//     (unit124.js §C3). The fold caught it; `front-taken.mjs` passed it, because
//     it compares strings. मटमैला (l4) carries the dull end of the scale instead.
//   • **पराबैंगनी ("ultraviolet") WAS REFUSED.** बैंगनी is carded in the same
//     lesson, and पराबैंगनी is परा + बैंगनी with a **mātrā** before it, so
//     `findWholeWord` matches the shorter card inside the longer one — the shape
//     u97 refused for स्नातक / स्नातकोत्तर. छटा took the slot.
//   • **धुंध ("mist") WAS REFUSED** on judgement, not mechanics: it and धुंधला@u56
//     are one root, and कोहरा@u54 already carries the weather sense.
//
// ⚠️ GENDER: FEMININE — किरण (consonant-final and unmarked), तीव्रता (-ता, like
// every such abstract), चकाचौंध (consonant-final), आभा, तरंग (consonant-final),
// छटा. MASCULINE — प्रकाश, उजाला, लेंस, दर्पण, अपवर्तन, परावर्तन, प्रतिबिंब,
// प्रिज़्म, वर्णक्रम, इंद्रधनुष, प्रकीर्णन, आवर्धन. सूक्ष्मदर्शी is MASCULINE
// despite the -ी. बैंगनी, चमकीला, स्लेटी, मटमैला and सुनहरा are ADJECTIVES —
// ⚠️ **and बैंगनी and स्लेटी do NOT change for gender although they end in -ी**,
// while चमकीला, मटमैला and सुनहरा DO: चमकीली, मटमैली, सुनहरी.
export const HI_UNIT133 = {
  id: "hi-u133",
  lang: "hi",
  title: "रोशनी और रंग",
  order: 133,
  stage: "b2",
  lessons: [
    {
      id: "hi-u133l1",
      unit: 133,
      lesson: 1,
      title: "Light itself",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about light as a thing that can be measured — a ray, how strongly a place is lit, glare, and the glow around something.",
      items: [
        { id: "hi-u133l1-prakaash", type: "vocab", front: "प्रकाश", reading: "prakaash", meaning: "light as physics studies it", accept: ["light as a thing that travels and can be measured"], example: { jp: "प्रकाश सीधी रेखा में चलता है, यही पहला नियम है।", en: "Light travels in a straight line — that is the first rule." }, drill: { jp: "प्रकाश सीधी रेखा में चलता है", en: "Light travels in a straight line" }, hint: "PRA-KAASH, masculine. प्र is a stacked conjunct, so the word opens on two consonants together. ⚠️ **THE GLOSS NAMES PHYSICS FOR A MECHANICAL REASON** (§9): लाइट@u9 and जलाना@u31 both already own the bare string \"light\", and रोशनी@u56 owns \"brightness\" with \"glow\" and \"illumination\" accepted. प्रकाश is the word a textbook uses, and this lesson is the textbook." },
        { id: "hi-u133l1-kiran", type: "vocab", front: "किरण", reading: "kiran", meaning: "a ray", accept: ["one thin line of light"], example: { jp: "सुबह की पहली किरण खिड़की से अंदर आई।", en: "The morning's first ray came in through the window." }, drill: { jp: "सुबह की पहली किरण खिड़की से आई", en: "The first ray of morning came through the window" }, hint: "KI-RAN — ⚠️ FEMININE and consonant-final, so nothing in the shape says so: पहली किरण, किरण आई. ⚠️ THE ि IS SHORT, and the final ण is the RETROFLEX n, merged to n in the reading (§1b). ⚠️ Also a common given name, which is why the example makes the sense plain." },
        { id: "hi-u133l1-ujaalaa", type: "vocab", front: "उजाला", reading: "ujaalaa", meaning: "light filling a place", accept: ["a place being lit rather than dark"], example: { jp: "बल्ब जलते ही पूरे कमरे में उजाला हो गया।", en: "The moment the bulb came on there was light all over the room." }, drill: { jp: "बल्ब जलते ही कमरे में उजाला हो गया", en: "There was light in the room as soon as the bulb came on" }, hint: "U-JAA-LAA, masculine and regular -ा, so the oblique is उजाले. 🚨 **THE EXACT OPPOSITE OF अंधेरा (unit 56), AND IT WORKS THE SAME WAY** — used as a NOUN where English uses an adjective: उजाला हो गया, 'light happened', for 'it got light'. ⚠️ The gloss says \"filling a place\" because रोशनी@u56 owns brightness as a quality." },
        { id: "hi-u133l1-tiivrataa", type: "vocab", front: "तीव्रता", reading: "tiivrataa", meaning: "intensity", accept: ["how strong something is, measured"], example: { jp: "दूर जाने पर प्रकाश की तीव्रता कम हो जाती है।", en: "On going further away the intensity of the light goes down." }, drill: { jp: "दूर जाने पर प्रकाश की तीव्रता कम होती है", en: "The intensity of light falls with distance" }, hint: "TIIV-RA-TAA — ⚠️ FEMININE, like every -ता abstract (unit61 §B6). व्र is व with र stacked under it (unit 6), so the first syllable closes on two consonants: tiiv-ra. Built on तीव्र, intense. ⚠️ Works for sound and for an earthquake too, not only light." },
        { id: "hi-u133l1-chakaachaundh", type: "vocab", front: "चकाचौंध", reading: "chakaachaundh", meaning: "glare", accept: ["light so strong the eye cannot look at it"], example: { jp: "सामने से आती गाड़ी की चकाचौंध में कुछ नहीं दिखा।", en: "In the glare of the oncoming vehicle nothing was visible." }, drill: { jp: "गाड़ी की चकाचौंध में कुछ नहीं दिखा", en: "Nothing was visible in the vehicle's glare" }, hint: "CHA-KAA-CHAUNDH — ⚠️ FEMININE and consonant-final. 🚨 **THE DIPHTHONG औ WITH A ं ON IT**, then ध with a puff of air: chaundh. A reduplicating word — चका-चौंध — the same sound-doubling as चकमक. ⚠️ Not चमक (unit 56), which is pleasant: चकाचौंध hurts." },
        { id: "hi-u133l1-aabhaa", type: "vocab", front: "आभा", reading: "aabhaa", meaning: "a halo of light around a thing", accept: ["a soft glow a thing seems to give off"], example: { jp: "दीये के चारों तरफ़ एक हल्की आभा दिखती थी।", en: "A faint halo could be seen all round the lamp." }, drill: { jp: "दीये के चारों तरफ़ हल्की आभा दिखती थी", en: "A faint halo was visible round the lamp" }, hint: "AA-BHAA — ⚠️ FEMININE and -आ, which for once agrees with the rule. It opens on the independent long आ (unit 1) and भ carries a puff of air. ⚠️ **THE GLOSS SAYS \"halo\" BECAUSE रोशनी@u56 ACCEPTS \"glow\"** — the grader compares strings. Used figuratively too, of a person's presence." },
      ],
    },
    {
      id: "hi-u133l2",
      unit: 133,
      lesson: 2,
      title: "Bending and bouncing",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Explain what a lens, a mirror and a prism do — refraction, reflection, and the image that comes back.",
      items: [
        { id: "hi-u133l2-lens", type: "vocab", front: "लेंस", reading: "lens", meaning: "a lens", accept: ["a curved piece of glass that bends light"], example: { jp: "मोटे लेंस से प्रकाश का रास्ता ज़्यादा बदलता है।", en: "A thick lens changes the path of light more." }, drill: { jp: "मोटे लेंस से प्रकाश का रास्ता बदलता है", en: "A thick lens changes the path of light" }, hint: "LENS, masculine, ONE syllable, and it closes on two consonants: न्स, with the ं written as the nasal before स (§1). ⚠️ A loanword that does not gloss to its reading (§9). It is what a चश्मा (unit 40), a दूरबीन (unit 87) and a सूक्ष्मदर्शी (l4) are all built out of." },
        { id: "hi-u133l2-darpan", type: "vocab", front: "दर्पण", reading: "darpan", meaning: "a mirror", accept: ["a polished surface that throws back an image"], example: { jp: "दर्पण में जो दिखता है वह प्रतिबिंब है, चीज़ नहीं।", en: "What is seen in a mirror is an image, not the thing." }, drill: { jp: "दर्पण में जो दिखता है वह प्रतिबिंब है", en: "What is seen in a mirror is an image" }, hint: "DAR-PAN, masculine. र्प writes the र as a hook over the प (unit 6), and the final ण is the RETROFLEX n. ⚠️ **THE FORMAL WORD, AND शीशा IS THE EVERYDAY ONE** — शीशा is not carded anywhere, so दर्पण carries the whole idea. It is also the word a Hindi poem uses, which is worth knowing." },
        { id: "hi-u133l2-apavartan", type: "vocab", front: "अपवर्तन", reading: "apavartan", meaning: "refraction", accept: ["the bending of light as it goes from one thing into another"], example: { jp: "पानी में डाली लकड़ी टूटी दिखती है, यह अपवर्तन है।", en: "A piece of wood put in water looks broken — this is refraction." }, drill: { jp: "पानी में लकड़ी का अपवर्तन दिखता है", en: "The refraction of the wood shows in the water" }, hint: "A-PA-VAR-TAN, masculine. र्त writes the र as a hook over a DENTAL त (unit 6). अप- (away) plus वर्तन, turning. ⚠️ **READ IT AGAINST THE NEXT CARD, BECAUSE THE PREFIX IS THE WHOLE DIFFERENCE:** अपवर्तन bends light THROUGH a thing, परावर्तन sends it BACK off one." },
        { id: "hi-u133l2-paraavartan", type: "vocab", front: "परावर्तन", reading: "paraavartan", meaning: "reflection", accept: ["light being thrown back off a surface"], example: { jp: "दर्पण से प्रकाश का परावर्तन होता है और वह वापस आ जाता है।", en: "Light is reflected off a mirror and comes back." }, drill: { jp: "दर्पण से प्रकाश का परावर्तन होता है", en: "Light is reflected off a mirror" }, hint: "PA-RAA-VAR-TAN, masculine. परा- (back) plus the same वर्तन as the card before. 🚨 **THE PAIR अपवर्तन / परावर्तन IS THE HARDEST THING IN THIS UNIT TO KEEP APART, AND THE LETTER THAT DOES IT IS THE SECOND ONE** — प**अ**वर्तन bends, प**रा**वर्तन returns. ⚠️ Neither contains the other as a string; checked." },
        { id: "hi-u133l2-pratibimb", type: "vocab", front: "प्रतिबिंब", reading: "pratibimb", meaning: "an image formed in a mirror", accept: ["what a reflecting surface shows", "a reflected likeness"], example: { jp: "पानी में पेड़ का प्रतिबिंब नीचे की तरफ़ दिखता है।", en: "A tree's image in water appears pointing downwards." }, drill: { jp: "पानी में पेड़ का प्रतिबिंब दिखता है", en: "A tree's image is visible in the water" }, hint: "PRA-TI-BIMB, masculine, and ⚠️ THE ि IS SHORT: pra-ti. The ं before ब is the matching labial nasal (§1), so the word closes on -mb. प्रति- (towards) plus बिंब, a disc. ⚠️ Not तस्वीर (unit 16): a प्रतिबिंब only exists while the thing is in front of the mirror." },
        { id: "hi-u133l2-prizm", type: "vocab", front: "प्रिज़्म", reading: "prizm", meaning: "a prism", accept: ["the glass wedge that opens light into its colours"], example: { jp: "प्रिज़्म से गुज़रते ही सफ़ेद प्रकाश के सब रंग अलग हो जाते हैं।", en: "As soon as it passes through a prism, all the colours of white light come apart." }, drill: { jp: "प्रिज़्म से सफ़ेद प्रकाश के रंग अलग होते हैं", en: "A prism separates the colours of white light" }, hint: "PRIZM, masculine, ONE syllable, and ⚠️ **THREE HARD THINGS IN FIVE LETTERS**: प्र opens it on two consonants, ज़ is the z of unit 4, and ज़्म closes it on two more — pri-zm, with no vowel at the end. ⚠️ It is what makes the वर्णक्रम of the next lesson visible." },
      ],
    },
    {
      id: "hi-u133l3",
      unit: 133,
      lesson: 3,
      title: "The spectrum",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the spectrum, the rainbow and a wave, explain why the sky is blue, and name violet and a play of colour.",
      items: [
        { id: "hi-u133l3-varnakram", type: "vocab", front: "वर्णक्रम", reading: "varnakram", meaning: "a spectrum", accept: ["the band of colours light comes apart into"], example: { jp: "प्रिज़्म के पीछे पूरा वर्णक्रम दीवार पर दिखा।", en: "Behind the prism the whole spectrum showed on the wall." }, drill: { jp: "प्रिज़्म के पीछे वर्णक्रम दीवार पर दिखा", en: "The spectrum showed on the wall behind the prism" }, hint: "VAR-NA-KRAM, masculine. वर्ण, a letter or a colour, plus क्रम, an order — and क्र is a stacked conjunct (unit 6). ⚠️ **वर्ण IS THE SAME WORD AS IN वर्णमाला, the alphabet, WHICH IS unit 1's OWN TITLE** — one word for a letter and for a colour, and this card is the colour sense in order." },
        { id: "hi-u133l3-indradhanush", type: "vocab", front: "इंद्रधनुष", reading: "indradhanush", meaning: "a rainbow", accept: ["the coloured arc after rain"], example: { jp: "बारिश रुकने के बाद आसमान में इंद्रधनुष दिखा।", en: "After the rain stopped a rainbow appeared in the sky." }, drill: { jp: "बारिश के बाद आसमान में इंद्रधनुष दिखा", en: "A rainbow appeared in the sky after the rain" }, hint: "IN-DRA-DHA-NUSH, masculine, four syllables, opening on the independent इ with a ं (unit 5). द्र is a stacked conjunct with a DENTAL द (unit 6). इंद्र, the rain god, plus धनुष, a bow — Indra's bow, which is the picture the word carries. ⚠️ Neither half is carded, so neither is a matchable string." },
        { id: "hi-u133l3-tarang", type: "vocab", front: "तरंग", reading: "tarang", meaning: "a wave in physics", accept: ["light or sound travelling as a wave"], example: { jp: "प्रकाश एक तरंग है और उसकी लंबाई रंग तय करती है।", en: "Light is a wave, and its length decides the colour." }, drill: { jp: "प्रकाश एक तरंग है", en: "Light is a wave" }, hint: "TA-RANG — ⚠️ FEMININE and consonant-final: एक तरंग, लंबी तरंग. The ं before ग is the matching velar nasal (§1). ⚠️ **THE GLOSS SAYS \"in physics\" BECAUSE लहर (unit 33) OWNS \"a wave\"** — a लहर is water you can see, a तरंग is what light and sound are. Also used of a mood." },
        { id: "hi-u133l3-prakiirnan", type: "vocab", front: "प्रकीर्णन", reading: "prakiirnan", meaning: "scattering of light", accept: ["light being thrown off in all directions by small particles"], example: { jp: "आसमान नीला इसलिए है कि हवा में प्रकीर्णन होता है।", en: "The sky is blue because there is scattering in the air." }, drill: { jp: "हवा में प्रकीर्णन से आसमान नीला दिखता है", en: "Scattering in the air makes the sky look blue" }, hint: "PRA-KIIR-NAN, masculine. प्र opens it on two consonants, र्ण writes the र as a hook over the RETROFLEX ण, and the final ण is retroflex too — ⚠️ **TWO RETROFLEX n's IN ONE WORD**, both merged to n in the reading (§1b). It is the one card in this unit that answers a question a child actually asks." },
        { id: "hi-u133l3-baingnii", type: "vocab", front: "बैंगनी", reading: "baingnii", meaning: "violet", accept: ["the colour at the far end of the spectrum"], example: { jp: "वर्णक्रम के एक सिरे पर लाल है और दूसरे पर बैंगनी।", en: "At one end of the spectrum is red and at the other violet." }, drill: { jp: "वर्णक्रम के दूसरे सिरे पर बैंगनी है", en: "At the other end of the spectrum is violet" }, hint: "BAING-NII — an ADJECTIVE, and ⚠️ **IT DOES NOT CHANGE FOR GENDER ALTHOUGH IT ENDS IN -ी**: बैंगनी रंग, बैंगनी साड़ी. The ऐ is ONE vowel with a ं on it (unit 5). From बैंगन, the aubergine — the same naming habit as नारंगी from नारंगी the orange (unit 16). 🚨 **पराबैंगनी, ultraviolet, WAS REFUSED**: this card sits inside it after a mātrā, so the router would blank the shorter one." },
        { id: "hi-u133l3-chhataa", type: "vocab", front: "छटा", reading: "chhataa", meaning: "a play of colour", accept: ["a spread of shades seen together", "a splendour of colour"], example: { jp: "शाम के आसमान की छटा हर दिन अलग होती है।", en: "The evening sky's play of colour is different every day." }, drill: { jp: "शाम के आसमान की छटा अलग होती है", en: "The evening sky's colour is different" }, hint: "CHHA-TAA — ⚠️ FEMININE and -आ, against the rule. छ is an aspirated ch — a puff of air — and the ट is RETROFLEX, merged to t (§1b). ⚠️ **READ IT AGAINST छत, a roof (unit 2), AND छाता, an umbrella** — three words, one छ, and the vowel lengths are what keep them apart: chhat, chhaataa, chhataa." },
      ],
    },
    {
      id: "hi-u133l4",
      unit: 133,
      lesson: 4,
      title: "Seeing more, seeing less",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Use a microscope and talk about magnification, and describe something as shiny, slate grey, muddy or golden.",
      items: [
        { id: "hi-u133l4-suukshmadarshii", type: "vocab", front: "सूक्ष्मदर्शी", reading: "suukshmadarshii", meaning: "a microscope", accept: ["the instrument that makes very small things visible"], example: { jp: "सूक्ष्मदर्शी के बिना यह कीट दिखता ही नहीं।", en: "Without a microscope this insect is simply not visible." }, drill: { jp: "सूक्ष्मदर्शी के बिना यह कीट नहीं दिखता", en: "This insect is not visible without a microscope" }, hint: "SUUKSH-MA-DAR-SHII — ⚠️ **MASCULINE DESPITE THE -ी**: बड़ा सूक्ष्मदर्शी. सूक्ष्म, very fine, plus दर्शी, seeing. 🚨 **क्ष्म IS A THREE-PIECE STACK** — क्ष (unit 6, read ksha) with म under it — and the ऊ before it is LONG: suuksh-ma. ⚠️ Its partner is दूरबीन (unit 87), which does the opposite end." },
        { id: "hi-u133l4-aavardhan", type: "vocab", front: "आवर्धन", reading: "aavardhan", meaning: "magnification", accept: ["how many times bigger a lens makes a thing look"], example: { jp: "इस लेंस का आवर्धन सौ गुना है।", en: "This lens's magnification is a hundred times." }, drill: { jp: "इस लेंस का आवर्धन सौ गुना है", en: "This lens's magnification is a hundred times" }, hint: "AA-VAR-DHAN, masculine, opening on the independent long आ. र्ध writes the र as a hook over a DENTAL ध, which carries a puff of air (unit 6). ⚠️ Read it against अपवर्तन and परावर्तन (l2) — three words in one unit built on -वर्/-वर्ध, and only the first letters tell them apart. गुना is unit 45's." },
        { id: "hi-u133l4-chamkiilaa", type: "vocab", front: "चमकीला", reading: "chamkiilaa", meaning: "shiny", accept: ["that throws light back brightly"], example: { jp: "चमकीला कागज़ प्रकाश को सीधे आँख में भेज देता है।", en: "Shiny paper sends light straight into the eye." }, drill: { jp: "चमकीला कागज़ प्रकाश आँख में भेजता है", en: "Shiny paper sends light into the eye" }, hint: "CHAM-KII-LAA — an ADJECTIVE that DOES change for gender: चमकीला कागज़, चमकीली साड़ी. Built on चमक, a gleam (unit 56) — 🚨 **AND चमक SITS INSIDE IT WITH THE ROUTER ABLE TO MATCH IT**, because the ी after it is a mātrā. A noun and the adjective built from it are two lexemes; the hint is here so a drill cannot blank the shorter one unnoticed." },
        { id: "hi-u133l4-sletii", type: "vocab", front: "स्लेटी", reading: "sletii", meaning: "slate grey", accept: ["the grey of a writing slate"], example: { jp: "बारिश से पहले आसमान स्लेटी हो जाता है।", en: "Before rain the sky turns slate grey." }, drill: { jp: "बारिश से पहले आसमान स्लेटी हो जाता है", en: "The sky turns grey before rain" }, hint: "SLE-TII — an ADJECTIVE, and ⚠️ **IT DOES NOT CHANGE FOR GENDER ALTHOUGH IT ENDS IN -ी**, like बैंगनी (l3): स्लेटी रंग, स्लेटी साड़ी. स्ल is a stacked conjunct, so it opens on two consonants — sle, never sale. From स्लेट, the school slate, and the ट is RETROFLEX." },
        { id: "hi-u133l4-matmailaa", type: "vocab", front: "मटमैला", reading: "matmailaa", meaning: "dull and muddy in colour", accept: ["the colour of dirty water", "greyish brown and unclear"], example: { jp: "बाढ़ के बाद नदी का पानी कई दिन मटमैला रहा।", en: "After the flood the river water stayed muddy for several days." }, drill: { jp: "बाढ़ के बाद नदी का पानी मटमैला रहा", en: "The river water stayed muddy after the flood" }, hint: "MAT-MAI-LAA — an ADJECTIVE that DOES change for gender: मटमैला पानी, मटमैली नदी. The ट is RETROFLEX and the ऐ is ONE vowel (unit 3). From मटमैल, the colour of clay. ⚠️ **धुँधला WAS REFUSED AND THIS CARD STANDS WHERE IT WOULD HAVE**: धुंधला@u56 is the same lexeme with ं for ँ (unit124.js §C3)." },
        { id: "hi-u133l4-sunahraa", type: "vocab", front: "सुनहरा", reading: "sunahraa", meaning: "golden in colour", accept: ["the colour of gold", "yellow with a shine on it"], example: { jp: "शाम की धूप में खेत का गेहूँ सुनहरा दिखता है।", en: "In the evening sun the field's wheat looks golden." }, drill: { jp: "शाम की धूप में गेहूँ सुनहरा दिखता है", en: "The wheat looks golden in the evening sun" }, hint: "SU-NAH-RAA — an ADJECTIVE that DOES change for gender: सुनहरा रंग, सुनहरी किरण. The ह is HEARD. Built on सोना, gold (unit 18), whose ओ SHORTENS to u when the word grows — su-nah-raa, never sona-hraa. ⚠️ Not चाँदी (unit 60), the metal: this is the COLOUR, which is why it describes गेहूँ (unit 124)." },
      ],
    },
  ],
};
