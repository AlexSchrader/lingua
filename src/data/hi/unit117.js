// HI Unit 117 — करके, करते हुए, किया हुआ ("Having done, while doing, left done") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit111.js §C1–§C6.
//
// SLOT KEPT (scaffold: "Grammar 10 — formal written structures"), RETITLED IN
// HINDI per unit1.js §10, and NARROWED to the कृदंत — the participle — above
// u79, u80 and u83.
//
// ⚠️ THE SCAFFOLD TITLE WAS "formal written structures" AND THAT SLOT IS SPENT.
// u83 दफ़्तरी और औपचारिक भाषा is ENTIRELY the formal written register: तथा,
// अथवा, परंतु, किंतु, अपितु, यद्यपि, अनुसार, विरुद्ध, सहित, अन्यथा, तथापि,
// तत्पश्चात, आवश्यक, प्राप्त, उपलब्ध, तत्काल, निर्धारित, उल्लेख, महोदय, सादर,
// निवेदन, खेद, स्वीकृति, औपचारिक — **all 24 of them.** u79 जुड़े हुए वाक्य took
// the phrase-postpositions (द्वारा, विपरीत, तहत, बतौर, खिलाफ, समेत, सिवाय, बगैर,
// एवज़, खातिर, बाबत, मद्देनज़र) and u80 निष्क्रिय और प्रेरणार्थक took the passive
// and the causative with 24 verbs. A second "formal structures" unit would have
// re-authored u83.
//
// ═════════════════════════════════════════════════════════════════════════════
// WHAT THIS UNIT IS — THE ONE PIECE OF HINDI SYNTAX NOTHING OWNED
// ═════════════════════════════════════════════════════════════════════════════
// The कृदंत is how Hindi chains clauses without a connective at all, and it is
// unavoidable in any real sentence past A2. Four forms, one per lesson:
//     -कर / -करके   having done one thing, THEN the next (खाकर चला गया)
//     -ते हुए        doing it AS you do something else (हँसते हुए बोला)
//     -आ हुआ        left IN that state (लटका हुआ, टूटा हुआ)
//     -ने वाला      the one that DOES it (पढ़ने वाला) · and जो … वह
// The learner has MET all four since A2 — unit31.js §A5 records the same thing
// about compound verbs — but no unit has ever owned the rule.
//
// 🚨 HOW A GRAMMAR UNIT GETS 24 FRONTS: IT CARDS THE VERBS, NOT THE FORMS.
// This is u80's shape, not u47's, and it is deliberate. A participle has no front
// of its own — -कर and -ते हुए are suffixes, and unit1.js §3 forbids carding a
// bare mark for the same reason it forbids carding a mātrā. So the 24 fronts are
// **24 verbs CHOSEN because their participle is the natural way to use them**:
// लटका हुआ, बिखरा हुआ, काँपते हुए, हाँफते हुए, मंडराता हुआ. Each lesson's
// examples are built in that lesson's form, and the lesson TITLE names the form.
// A seat that tries to card -कर instead will produce an item that cannot route.
//
// ⚠️ EVERY DRILL USES THE BARE -ना INFINITIVE, NOT THE PARTICIPLE, and that is
// not laziness — it is the only shape that routes. `tests/unit/drill-corpus.test.mjs`
// requires the item's own `front` inside its own drill as a WHOLE WORD, and
// लटकते/लटका/लटकने do not contain लटकना. RUNBOOK §4's German note is the same
// defect in another language. **So: the EXAMPLE carries the participle and
// teaches the grammar; the DRILL carries the infinitive and feeds the router.**
// That split is u80's exact pattern (`बुना जाता है` in the example, `बुनना
// मुश्किल है` in the drill) and §B3 describes the same split for B1's abstracts.
//
// GENDER (§4): **NO NOUN IS CARDED IN THIS UNIT.** All 24 fronts are VERBS,
// headworded in the -ना infinitive per unit1.js §5, with **ZERO 3rd-person
// exceptions** — the §5 test was applied to all 24 and answered no every time,
// because every one carries a natural short sentence in the infinitive (ऐसे
// रेंगना मुश्किल है · कागज़ कुतरना चूहे की आदत है). **STILL ZERO IN THE WHOLE
// LANGUAGE.** Nineteen are INTRANSITIVE and five are transitive (निगलना, चबाना,
// घूरना, कुतरना, निहारना), which is named in each hint because it decides whether
// the -आ हुआ form is even available.
//
// ⚠️ SUBSTRING AND HOMOGRAPH TRAPS, each checked (`isLetter` is `/\p{L}/`):
//   • लुढ़कना ⊃ ढ़? ढ़ is a nukta letter, not a front. **AND THE NUKTA IS
//     DECOMPOSED** — ढ + ़ (U+0922 U+093C), never precomposed ढ़ (U+095C). §C5.
//     Same for लड़खड़ाना, which carries ड़ twice.
//   • बिखरना vs बिखेरना — **बिखेरना IS NOT A FRONT ANYWHERE**, checked. The pair
//     is the ordinary Hindi intransitive/transitive doublet (बिखरना, it scatters /
//     बिखेरना, somebody scatters it) and only the intransitive is carded, the same
//     call unit1.js §6 records for adjectives: one lexeme, one card.
//   • लटकना vs टाँगना / लटकाना — neither is a front. ⚠️ **टाँका (u112l3, MINE) IS
//     NOT RELATED and is not a substring of anything here.**
//   • चबाना ⊃ बाना? Not a front. निगलना ⊃ निगल? Not a front.
//   • उमड़ना vs उभरना — different verbs, different strings, and उभरना is not a
//     front. घूरना vs घूमना (u29) — **ONE LETTER APART, र against म**, and both
//     are real Hindi verbs: ghuurnaa against ghuumnaa. Named in the hint, because
//     no tool catches it and a learner will mix them.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): टहलना tahalnaa, लटकना lataknaa, भटकना bhataknaa,
// कुतरना kutarnaa and सिमटना simatnaa carry RETROFLEX ट; तरसना's dental twin was
// checked in u116 and none of these five has one in the corpus, so the doubling
// escape hatch is not needed — measured, not assumed. लुढ़कना lurhaknaa uses ढ़ →
// rh (unit 1 §1c) and लड़खड़ाना larkharaanaa uses ड़ → r twice.
// 24 new readings, 24 distinct, zero collisions against all 2,270.
// ⚠️ TWO READING PAIRS ARE CLOSE and each is named in its own hint: घूरना
// ghuurnaa against घूमना ghuumnaa (u29) · टहलना tahalnaa against तहलना, which is
// not a word. थरथराना tharthraanaa repeats its own first syllable, which is the
// hook rather than a trap.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: टाँगना, फिसलना (TAKEN, u46), समेटना (TAKEN, u46), झुकना (TAKEN, u46),
// काँपना (TAKEN, u46 — which is why थरथराना carries the shaking here), सिहरना,
// टपकना (TAKEN, u49 — which is why रिसना carries the leaking), मुड़ना, तानना,
// चिपकना (REFUSED — चिपकाना u60 is the same lexeme's transitive and is glossed
// "to stick"; कुतरना replaced it).
export const HI_UNIT117 = {
  id: "hi-u117",
  lang: "hi",
  title: "करके, करते हुए, किया हुआ",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "hi-u117l1",
      unit: 117,
      lesson: 1,
      title: "-कर — having done one thing, then the next",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Chain two actions with -कर, where the first finishes before the second starts, using six verbs whose -कर form is the natural way to say them.",
      items: [
        { id: "hi-u117l1-jhaanknaa", type: "vocab", front: "झाँकना", reading: "jhaanknaa", meaning: "to peep", accept: ["to look in quickly without going in"], example: { jp: "खिड़की से झाँककर उसने देखा कि कमरे में कोई नहीं है, और तब दरवाज़ा खोला।", en: "Peeping in through the window he saw that nobody was in the room, and only then opened the door." }, drill: { jp: "खिड़की से झाँकना ठीक नहीं है", en: "Peeping in through the window is not right" }, hint: "JHAANK-NAA, INTRANSITIVE with से. झ carries a puff of air and the ँ is the candrabindu of unit 5, written n. 🚨 THE EXAMPLE IS THE GRAMMAR: झाँककर … देखा — the -कर form says the peeping FINISHED before the seeing began. Hindi lets you stack three or four of these with no connective at all." },
        { id: "hi-u117l1-tahalnaa", type: "vocab", front: "टहलना", reading: "tahalnaa", meaning: "to walk about idly", accept: ["to go up and down with nowhere to be"], example: { jp: "शाम को पार्क में थोड़ा टहलकर वह घर लौट आता है, और तब खाना खाता है।", en: "Having strolled a little in the park in the evening he comes back home, and then eats." }, drill: { jp: "शाम को पार्क में टहलना अच्छा लगता है", en: "Walking about in the park in the evening feels good" }, hint: "TA-HAL-NAA, INTRANSITIVE. ट is RETROFLEX — curl the tongue back — and the reading merges it with dental त (unit 1 §1b), so tahalnaa is written with ट. ⚠️ THE GLOSS IS DELIBERATELY NOT 'TO STROLL': सैर (unit 29) is glossed 'an outing' and accepts 'a stroll', and घूमना accepts 'to stroll about' (unit 1 §9)." },
        { id: "hi-u117l1-dubaknaa", type: "vocab", front: "दुबकना", reading: "dubaknaa", meaning: "to huddle", accept: ["to pull yourself small into a corner"], example: { jp: "शोर सुनकर बच्चा कंबल में दुबककर चुप पड़ा रहा, और किसी ने उसे देखा भी नहीं।", en: "Hearing the noise the child huddled into the blanket and lay quiet, and nobody even saw him." }, drill: { jp: "कंबल में दुबकना बच्चे की आदत है", en: "Huddling into the blanket is the child's habit" }, hint: "DU-BAK-NAA, INTRANSITIVE, both d and b plain. ⚠️ Always small, always hiding, and almost always with में or के पीछे. ⚠️ The example stacks TWO -कर forms — सुनकर … दुबककर — which is ordinary Hindi and the reason this form is worth a lesson: three clauses, no connective." },
        { id: "hi-u117l1-simatnaa", type: "vocab", front: "सिमटना", reading: "simatnaa", meaning: "to shrink back", accept: ["to draw yourself in to take less room"], example: { jp: "भीड़ में सिमटकर बैठने के बाद भी उसे जगह नहीं मिली, और वह उठ गया।", en: "Even after shrinking back to sit in the crowd he got no room, and he got up." }, drill: { jp: "भीड़ में सिमटना किसी को अच्छा नहीं लगता", en: "Nobody likes shrinking back in a crowd" }, hint: "SI-MAT-NAA, INTRANSITIVE. ट is RETROFLEX. ⚠️ Also used of things — a cloth, a town, a whole business — so सिमटना means 'to contract' as well: कारोबार सिमट गया, the business shrank. The physical sense is the one to learn first and the metaphor follows free." },
        { id: "hi-u117l1-nigalnaa", type: "vocab", front: "निगलना", reading: "nigalnaa", meaning: "to swallow", accept: ["to take a thing down the throat whole"], example: { jp: "गोली पानी के साथ निगलकर वह सो गया, और दस मिनट में दर्द कम हो गया।", en: "Having swallowed the tablet with water he went to sleep, and in ten minutes the pain eased." }, drill: { jp: "गोली पानी के साथ निगलना आसान है", en: "Swallowing the tablet with water is easy" }, hint: "NI-GAL-NAA, **TRANSITIVE** — it takes an object, so the -आ हुआ form of lesson 3 would be available to it. Both न and ल are DENTAL. ⚠️ Not खाना: खाना involves chewing, निगलना is straight down — and Hindi uses it of anger too, गुस्सा निगल जाना, to swallow your anger." },
        { id: "hi-u117l1-chabaanaa", type: "vocab", front: "चबाना", reading: "chabaanaa", meaning: "to chew", accept: ["to work food between the teeth"], example: { jp: "रोटी ठीक से चबाकर खाने पर पेट बेहतर रहता है, और डॉक्टर यही कहते हैं।", en: "If bread is eaten properly chewed the stomach stays better, and that is just what doctors say." }, drill: { jp: "रोटी ठीक से चबाना ज़रूरी है", en: "Chewing bread properly is necessary" }, hint: "CHA-BAA-NAA, **TRANSITIVE**. ⚠️ The pair with निगलना one card above is the whole of eating in two verbs: you चबाना first and निगलना after, which is also the order of their -कर forms in a sentence. Hindi says चबा-चबाकर बोलना of somebody speaking with exaggerated care." },
      ],
    },
    {
      id: "hi-u117l2",
      unit: 117,
      lesson: 2,
      title: "-ते हुए — doing it as you go",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say that two things are happening at once with -ते हुए, where the first describes HOW the second is done, using six verbs of unsteady movement.",
      items: [
        { id: "hi-u117l2-bhataknaa", type: "vocab", front: "भटकना", reading: "bhataknaa", meaning: "to lose one's way", accept: ["to go on and on without finding the place"], example: { jp: "जंगल में भटकते हुए उन्हें शाम हो गई, और तब तक रास्ता साफ़ नहीं दिख रहा था।", en: "Wandering lost in the forest, evening came upon them, and by then the path was not clearly visible." }, drill: { jp: "जंगल में भटकना बहुत बुरा होता है", en: "Losing your way in the forest is very bad" }, hint: "BHA-TAK-NAA, INTRANSITIVE, भ with a puff of air and a RETROFLEX ट. 🚨 THE GLOSS IS DELIBERATELY NOT 'TO WANDER': घूमना (unit 29) is glossed exactly that. ⚠️ -ते हुए says the two things are SIMULTANEOUS — the evening came WHILE they were lost — against -कर in lesson 1, where one finishes first." },
        { id: "hi-u117l2-rengnaa", type: "vocab", front: "रेंगना", reading: "rengnaa", meaning: "to crawl", accept: ["to move along flat on the ground"], example: { jp: "ज़मीन पर रेंगते हुए एक कीड़ा दीवार तक पहुँचा, और वहीं रुक गया।", en: "Crawling along the ground an insect reached the wall, and stopped right there." }, drill: { jp: "ऐसे रेंगना बहुत मुश्किल है", en: "Crawling like that is very hard" }, hint: "RENG-NAA, INTRANSITIVE. The ं is before ग, a stop, so unit 1 §1 writes it as the homorganic n. ⚠️ Used of babies, insects, snakes — and of traffic: गाड़ियाँ रेंग रही थीं, the cars were crawling. The metaphor is the same one English has." },
        { id: "hi-u117l2-haanphnaa", type: "vocab", front: "हाँफना", reading: "haanphnaa", meaning: "to pant", accept: ["to breathe hard after effort"], example: { jp: "सीढ़ियाँ चढ़कर वह हाँफते हुए कमरे में आया, और कुछ कहने से पहले कुर्सी पर बैठ गया।", en: "Having climbed the stairs he came into the room panting, and sat down on a chair before saying anything." }, drill: { jp: "इतनी सीढ़ियाँ चढ़कर हाँफना आम बात है", en: "Panting after climbing so many stairs is ordinary" }, hint: "HAANPH-NAA, INTRANSITIVE. The ँ is written n, and फ carries a puff of air — haanphnaa, with ph. ⚠️ The example has BOTH forms in one sentence — चढ़कर (lesson 1's -कर) and हाँफते हुए (this lesson's) — which is how Hindi actually builds a sentence, and worth reading twice." },
        { id: "hi-u117l2-larkharaanaa", type: "vocab", front: "लड़खड़ाना", reading: "larkharaanaa", meaning: "to stagger", accept: ["to walk as if about to fall"], example: { jp: "वह लड़खड़ाते हुए चला, और दो कदम बाद दीवार का सहारा ले लिया।", en: "He walked staggering, and after two steps took the support of the wall." }, drill: { jp: "ऐसे लड़खड़ाना ठीक नहीं लगता", en: "Staggering like that does not look right" }, hint: "LAR-KHA-RAA-NAA, INTRANSITIVE. 🚨 ड़ TWICE, and unit 1 §1c reads it r — so larkharaanaa, never ladkhadaanaa. ⚠️ **THE NUKTA IS DECOMPOSED HERE**: ड + ़, two codepoints, never the precomposed ड़ (§C5) — identical on screen and a different string, which once made scope-hi report a taught word as untaught." },
        { id: "hi-u117l2-dagamgaanaa", type: "vocab", front: "डगमगाना", reading: "dagamgaanaa", meaning: "to totter", accept: ["to rock as if it will tip over"], example: { jp: "नाव पानी में डगमगाते हुए आगे बढ़ी, और बीच में दो बार लगा कि वह रुक जाएगी।", en: "The boat went forward tottering in the water, and twice in the middle it seemed it would stop." }, drill: { jp: "भरी नाव में डगमगाना बुरा होता है", en: "Tottering in a loaded boat is bad" }, hint: "DA-GAM-GAA-NAA, INTRANSITIVE, and the first ड is RETROFLEX, merged with dental द in the reading. ⚠️ The pair with लड़खड़ाना one card above is person against THING: a man लड़खड़ाना, a boat or a table डगमगाना. Hindi also says सरकार डगमगा रही है of a government about to fall." },
        { id: "hi-u117l2-ghuurnaa", type: "vocab", front: "घूरना", reading: "ghuurnaa", meaning: "to stare", accept: ["to look hard at somebody without stopping"], example: { jp: "वह चुप घूरते हुए बैठा रहा, और उसकी इस आदत से सब लोग परेशान थे।", en: "He went on sitting there staring silently, and everybody was troubled by this habit of his." }, drill: { jp: "किसी को ऐसे घूरना अच्छी बात नहीं", en: "Staring at somebody like that is not a good thing" }, hint: "GHUUR-NAA, **TRANSITIVE** — घ with a puff of air and a LONG ू. 🚨 **ONE LETTER FROM घूमना (unit 29), र AGAINST म** — ghuurnaa against ghuumnaa, 'to wander' — and both are real verbs in constant use. No tool catches this pair; check which one you mean. Always rude in Hindi." },
      ],
    },
    {
      id: "hi-u117l3",
      unit: 117,
      lesson: 3,
      title: "-आ हुआ — left in that state",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe the state a thing has been left in with -आ हुआ, where nobody is named as having done it, using six verbs of things that have given way.",
      items: [
        { id: "hi-u117l3-lataknaa", type: "vocab", front: "लटकना", reading: "lataknaa", meaning: "to hang", accept: ["to be held from above with nothing below"], example: { jp: "दीवार पर एक पुरानी तस्वीर टेढ़ी लटकी हुई थी, और किसी ने सालों से उसे सीधा नहीं किया था।", en: "An old picture hung crooked on the wall, and nobody had straightened it in years." }, drill: { jp: "दीवार पर तस्वीर लटकना अब बंद हो गया", en: "The picture hanging on the wall has now stopped" }, hint: "LA-TAK-NAA, INTRANSITIVE, with a RETROFLEX ट. 🚨 THE EXAMPLE IS THE GRAMMAR: लटकी हुई थी — the -आ हुआ form, agreeing with the feminine तस्वीर, so it is लटकी हुई and not लटका हुआ. ⚠️ Hindi also says काम लटक गया of work left unfinished, which is the same image." },
        { id: "hi-u117l3-kutarnaa", type: "vocab", front: "कुतरना", reading: "kutarnaa", meaning: "to gnaw", accept: ["to bite away at a thing a little at a time"], example: { jp: "अलमारी में कुतरी हुई किताबें मिलीं, और तब पता चला कि वहाँ चूहे रहते हैं।", en: "Gnawed books were found in the cupboard, and only then did it come out that mice were living there." }, drill: { jp: "कागज़ कुतरना चूहे की आदत है", en: "Gnawing paper is a mouse's habit" }, hint: "KU-TAR-NAA, **TRANSITIVE**, and both consonants are DENTAL — kutarnaa, with no retroflex anywhere, which is unusual in a verb of this shape. ⚠️ **कुतरी हुई किताबें** in the example is the -आ हुआ form agreeing with a FEMININE PLURAL — the form changes four ways, like any -आ adjective. Only a transitive verb gives the passive sense this card has." },
        { id: "hi-u117l3-bikharnaa", type: "vocab", front: "बिखरना", reading: "bikharnaa", meaning: "to scatter", accept: ["to end up spread about in all directions"], example: { jp: "मेज़ पर बिखरे हुए कागज़ देखकर उसे समझ आ गया कि कोई जल्दी में निकला है।", en: "Seeing the papers scattered on the table he understood that somebody had left in a hurry." }, drill: { jp: "मेज़ पर कागज़ बिखरना रोज़ की बात है", en: "Papers scattering on the table is an everyday thing" }, hint: "BI-KHAR-NAA, INTRANSITIVE. ⚠️ **बिखेरना, 'to scatter something', IS THE TRANSITIVE TWIN AND IS NOT CARDED ANYWHERE** — one lexeme, one card, the same call unit1.js §6 records for adjectives. The -आ हुआ form of an INTRANSITIVE verb, as here, says only what state a thing is in and names nobody." },
        { id: "hi-u117l3-lurhaknaa", type: "vocab", front: "लुढ़कना", reading: "lurhaknaa", meaning: "to roll over", accept: ["to go over and over down a slope"], example: { jp: "पहाड़ से लुढ़का हुआ पत्थर रास्ते के बीच पड़ा था, और गाड़ियाँ उसके पास से निकल रही थीं।", en: "A stone that had rolled down from the hill lay in the middle of the road, and cars were going past it." }, drill: { jp: "पहाड़ से पत्थर लुढ़कना आम बात है", en: "A stone rolling down from a hill is ordinary" }, hint: "LU-RHAK-NAA, INTRANSITIVE. 🚨 ढ़ IS THE FOURTH NUKTA LETTER (unit 4) AND IS READ rh (unit 1 §1c) — so lurhaknaa, never ludhaknaa. ⚠️ **THE NUKTA IS DECOMPOSED**: ढ + ़, two codepoints (§C5). ⚠️ लुढ़का हुआ is masculine here, agreeing with पत्थर." },
        { id: "hi-u117l3-umarnaa", type: "vocab", front: "उमड़ना", reading: "umarnaa", meaning: "to well up", accept: ["to rise up all at once and overflow"], example: { jp: "उमड़ी हुई भीड़ को देखकर पुलिस ने दोनों रास्ते बंद कर दिए।", en: "Seeing the crowd that had welled up, the police closed both roads." }, drill: { jp: "ऐसी भीड़ उमड़ना किसी ने नहीं सोचा था", en: "Nobody had thought such a crowd would well up" }, hint: "U-MAR-NAA, INTRANSITIVE, with ड़ read r (unit 1 §1c) and **DECOMPOSED** as ड + ़ (§C5). ⚠️ Used of three things in Hindi and all three are worth knowing: a crowd, a cloud, and tears — आँसू उमड़ आए. उमड़ी हुई is feminine here, agreeing with भीड़." },
        { id: "hi-u117l3-risnaa", type: "vocab", front: "रिसना", reading: "risnaa", meaning: "to seep", accept: ["to come through slowly where it should not"], example: { jp: "बारिश के बाद छत से रिसा हुआ पानी दीवार पर साफ़ दिख रहा था।", en: "After the rain the water that had seeped from the roof showed plainly on the wall." }, drill: { jp: "छत से पानी रिसना आम बात है", en: "Water seeping from the roof is ordinary" }, hint: "RIS-NAA, INTRANSITIVE, s DENTAL. 🚨 THE GLOSS IS DELIBERATELY NOT 'TO DRIP': टपकना (unit 49) owns that, and the two are genuinely different — टपकना is drop by drop and audible, रिसना is slow and silent and leaves a mark. Hindi also says खबर रिस गई of news leaking." },
      ],
    },
    {
      id: "hi-u117l4",
      unit: 117,
      lesson: 4,
      title: "-ने वाला and जो … वह — the one that does it",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Turn a whole clause into a describing word with -ने वाला, and build the same thing the long way with जो … वह, using six verbs of light and sound.",
      items: [
        { id: "hi-u117l4-guunjnaa", type: "vocab", front: "गूँजना", reading: "guunjnaa", meaning: "to resound", accept: ["to fill a space with sound that comes back"], example: { jp: "मंदिर में गूँजने वाली घंटी की आवाज़ दूर गाँव तक सुनी जा सकती थी।", en: "The sound of the bell resounding in the temple could be heard as far as the distant village." }, drill: { jp: "मंदिर में घंटी गूँजना रोज़ का काम है", en: "The bell resounding in the temple is a daily thing" }, hint: "GUUNJ-NAA, INTRANSITIVE. The ँ is written n and the ू is LONG. 🚨 THE EXAMPLE IS THE GRAMMAR: गूँजने वाली — the OBLIQUE infinitive गूँजने plus वाली, agreeing with the feminine घंटी. -ने वाला turns a whole clause into one describing word, which no connective can do." },
        { id: "hi-u117l4-jhilmilaanaa", type: "vocab", front: "झिलमिलाना", reading: "jhilmilaanaa", meaning: "to shimmer", accept: ["to shine unsteadily, going on and off"], example: { jp: "जो तारे दूर से झिलमिलाते हैं, वे सच में सूरज जैसे ही बड़े होते हैं।", en: "The stars that shimmer from far away are in fact as big as the sun." }, drill: { jp: "दूर से तारे झिलमिलाना बंद नहीं करते", en: "From far away the stars do not stop shimmering" }, hint: "JHIL-MI-LAA-NAA, INTRANSITIVE, झ with a puff of air. 🚨 THE EXAMPLE USES THE OTHER FORM: जो … वे — the full relative clause, which is what -ने वाला is short for. Hindi offers both and the short one is commoner in speech. ⚠️ Not चमकना (unit 49), which is steady shining." },
        { id: "hi-u117l4-mandraanaa", type: "vocab", front: "मंडराना", reading: "mandraanaa", meaning: "to hover", accept: ["to stay circling above without landing"], example: { jp: "ऊपर मंडराने वाली चिड़िया नीचे की मछली देख रही थी, और बहुत देर तक वैसी ही रही।", en: "The bird hovering above was watching the fish below, and stayed that way for a long time." }, drill: { jp: "चिड़िया का ऊपर मंडराना अच्छा लगता है", en: "A bird hovering above looks good" }, hint: "MAN-DRAA-NAA, INTRANSITIVE. The ं is before ड, a stop, so unit 1 §1 writes it as the homorganic n, and the ड is RETROFLEX. ⚠️ Also used of a danger: खतरा मंडरा रहा है, the danger is hovering — which is the commonest newspaper use of the word." },
        { id: "hi-u117l4-tharthraanaa", type: "vocab", front: "थरथराना", reading: "tharthraanaa", meaning: "to quiver", accept: ["to shake in small fast movements"], example: { jp: "जो हाथ डर से थरथराते हैं, उनसे कोई छोटा काम नहीं हो सकता।", en: "Hands that quiver with fear cannot do any small work." }, drill: { jp: "डर से हाथ थरथराना अपने आप होता है", en: "Hands quivering with fear happens by itself" }, hint: "THAR-THRAA-NAA, INTRANSITIVE, and both थ are DENTAL with a puff of air. 🚨 THE WORD REPEATS ITS OWN FIRST SYLLABLE — थर-थर — which is how Hindi builds a whole class of shaking and rattling verbs, and that is the hook rather than a trap. ⚠️ काँपना (unit 46) is bigger, slower shaking; this is fine and fast." },
        { id: "hi-u117l4-chhalaknaa", type: "vocab", front: "छलकना", reading: "chhalaknaa", meaning: "to spill over", accept: ["to go over the edge because it is too full"], example: { jp: "जो गिलास ऊपर तक भरा हो, वह चलते हुए छलक ही जाता है।", en: "A glass filled right to the top is bound to spill over while you walk." }, drill: { jp: "भरे गिलास से पानी छलकना तय है", en: "Water spilling from a full glass is certain" }, hint: "CHHA-LAK-NAA, INTRANSITIVE, छ with a puff of air — chhalaknaa with chh. ⚠️ Only ever because it is TOO FULL, never because it was knocked — so Hindi also says खुशी छलक रही थी, the happiness was spilling over. ⚠️ The example has जो … वह AND चलते हुए, two of this unit's four forms in one sentence." },
        { id: "hi-u117l4-nihaarnaa", type: "vocab", front: "निहारना", reading: "nihaarnaa", meaning: "to gaze", accept: ["to look at a thing long and gently"], example: { jp: "माँ की पुरानी तस्वीर निहारने वाला वह आदमी देर तक कुछ नहीं बोला।", en: "The man gazing at his mother's old photograph said nothing for a long while." }, drill: { jp: "तस्वीर को देर तक निहारना बुरा नहीं है", en: "Gazing at a picture for long is not bad" }, hint: "NI-HAAR-NAA, **TRANSITIVE**, both n DENTAL. 🚨 THE OPPOSITE OF घूरना IN LESSON 2, and the pair is the point: both mean looking without stopping, घूरना is rude and निहारना is tender. Hindi keeps them apart absolutely, and no English single word does." },
      ],
    },
  ],
};
