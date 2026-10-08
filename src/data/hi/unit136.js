// HI Unit 136 — हस्तशिल्प और बुनाई ("Handicraft and weaving") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136) — **THE LAST UNIT OF THE BLOCK, OF THE B2 BAND AND OF
// HINDI AS SCAFFOLDED.** Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 16 (B2)"). Theme ASSIGNED CENTRALLY and
// probed at **6 of 18 taken** against the real 2,328-card corpus, 2026-10-06
// (committed evidence: `scripts/qa/theme-holes.mjs` + `theme-holes-hi.txt`).
//
// MEASURED HOLE: u40 is a CLOTH unit — धागा, सिलाई, ऊन, रेशम, चमड़ा — and u60 a
// TOOLS-AND-MATERIALS unit (लोहा, लकड़ी, हथौड़ा, आरी, कील, ईंट); u34 gave
// कारीगर, u32 हुनर, u80 बुनना, u44 छपाई, u81 सजावट, u51 मूर्ति, u91 मूर्तिकला,
// u54 मिट्टी, u15 बर्तन, u35 सुई. So the corpus had thread, a tailor's stitching
// and a craftsman and **no loom, no spinning wheel, no spindle, no weave, no
// cotton plant, no jute, no khadi, no dyeing, no printing block, no embroidery,
// no zari, no carving, no chisel, no potter's wheel and no mould.**
//
// 🚨🚨 FOUR REFUSALS, AND THREE OF THEM ARE THE MOST MECHANICALLY INTERESTING IN
// THE WHOLE BLOCK — every one passed `front-taken.mjs`:
//   • **सूत ("yarn") WAS REFUSED** — सूट@u40 (a suit) reads `suut` and §1b merges
//     the RETROFLEX ट with the DENTAL त in every word reading. §1b's escape hatch
//     says the RETROFLEX member doubles, but सूट is an A2 file this block may not
//     touch, so the candidate was dropped. **सूती (l2) is carded instead**, and it
//     reads `suutii`, which collides with nothing.
//   • **कातना ("to spin") WAS REFUSED** — काटना@u26 reads `kaatnaa`, the same
//     shape, and the same reasoning applies. **बुनावट (l2) took the slot.**
//   • **बुनकर ("a weaver") WAS REFUSED, AND NO PROBE IN THE REPO WOULD HAVE SEEN
//     IT.** बुनकर is also the CONJUNCTIVE PARTICIPLE of बुनना, to weave
//     (unit 80) — "having woven" — so it is already a generated form of a taught
//     verb, the same class as छापा / छापना that cost u130 a card. `scope-hi`
//     dates a generated form to its VERB's unit, so carding बुनकर at u136 would
//     have re-dated the string and could have put earlier sentences out of
//     scope. **जुलाहा (l1) is carded instead** — the traditional word, and no
//     verb's form. ⚠️ The sweep that finds this class is
//     `node scripts/tmp/b3-inflcheck.mjs`; run it on any -कर, -ता, -ा or -ी
//     candidate before writing the card.
//   • **हथकरघा ("a handloom") WAS REFUSED** — करघा is carded in the same lesson,
//     and हथकरघा is हथ + करघा with a **mātrā** before it, so `findWholeWord`
//     matches the shorter card inside the longer one: the स्नातक /
//     स्नातकोत्तर shape u97 refused. Say हथकरघा anyway; it just cannot be a card.
//   • **दस्तकारी and शिल्प WERE REFUSED** on glosses: दस्तकारी would gloss to
//     handicraft, which हस्तशिल्प (l1) owns, and शिल्प is a STRING INSIDE both
//     हस्तशिल्प and शिल्पकार.
//
// ⚠️ THREE OF THIS UNIT'S FRONTS ARE -आई ACTION NOUNS AND NONE IS AN INFLECTION:
// बुनाई, रंगाई and कढ़ाई — the same sanctioned pattern as जुताई and मड़ाई
// (u124), उतराई (u127), भरपाई (u135) and the course's own कटाई@u81, सिलाई@u40
// and सिंचाई@u75. A noun built from a verb is a second lexeme; a FORM of that
// verb is not. That is the line, and it is why बुनाई ships and बुनकर does not.
//
// ⚠️ GENDER: FEMININE — तकली, बुनावट (consonant-final and unmarked), रुई, खादी,
// रंगाई, कढ़ाई, ज़री, नक्काशी, छेनी, बुनाई, कपास (consonant-final and unmarked).
// MASCULINE — हस्तशिल्प, शिल्पकार, जुलाहा (-आ), कुम्हार, करघा, चरखा, जूट, ठप्पा,
// चाक, साँचा. सूती, हुनरमंद and परंपरागत are ADJECTIVES; सूती does NOT change
// for gender although it ends in -ी.
// FREE: गाँधी
export const HI_UNIT136 = {
  id: "hi-u136",
  lang: "hi",
  title: "हस्तशिल्प और बुनाई",
  order: 136,
  stage: "b2",
  lessons: [
    {
      id: "hi-u136l1",
      unit: 136,
      lesson: 1,
      title: "The craft and the craftsman",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name handicraft and the people who live by it — a craft master, a weaver, a potter — and say that a skill is handed down by tradition.",
      items: [
        { id: "hi-u136l1-hastashilp", type: "vocab", front: "हस्तशिल्प", reading: "hastashilp", meaning: "handicraft", accept: ["things made by hand rather than by machine"], example: { jp: "इस राज्य का हस्तशिल्प विदेश तक जाता है।", en: "This state's handicraft goes as far as abroad." }, drill: { jp: "इस राज्य का हस्तशिल्प विदेश जाता है", en: "This state's handicraft goes abroad" }, hint: "HAS-TA-SHILP, masculine, consonant-final: दो तरह का हस्तशिल्प. स्त is a stacked conjunct with a DENTAL त (unit 6) and ल्प closes the word on two consonants. हस्त, a hand, plus शिल्प, craft. ⚠️ **शिल्प IS NOT CARDED ANYWHERE** — it is a string inside this front AND inside शिल्पकार, the next card, so carding it would have put a shorter card inside two longer ones." },
        { id: "hi-u136l1-shilpkaar", type: "vocab", front: "शिल्पकार", reading: "shilpkaar", meaning: "a master of a hand craft", accept: ["one who makes craft objects by hand as a trade"], example: { jp: "गाँव के शिल्पकार अब मशीन से हार जाते हैं।", en: "The village's craft masters now lose out to the machine." }, drill: { jp: "गाँव के शिल्पकार मशीन से हार जाते हैं", en: "The village's craft masters lose out to the machine" }, hint: "SHILP-KAAR, masculine and FIXED for a woman. शिल्प, craft, plus -कार, a doer — the same -कार as लेखाकार (unit 96) and शोधकर्ता's cousin. ⚠️ **THE GLOSS IS LONG BECAUSE कारीगर (unit 34) OWNS \"a craftsman\"** — the grader compares strings. A कारीगर may work for a factory; a शिल्पकार makes the object himself." },
        { id: "hi-u136l1-julaahaa", type: "vocab", front: "जुलाहा", reading: "julaahaa", meaning: "a weaver", accept: ["one whose trade is weaving cloth on a loom"], example: { jp: "पहले हर गाँव में दो तीन जुलाहा रहते थे।", en: "Earlier there were two or three weavers in every village." }, drill: { jp: "पहले हर गाँव में जुलाहा रहते थे", en: "Earlier there were weavers in every village" }, hint: "JU-LAA-HAA, masculine and regular -ा, so the oblique is जुलाहे, and the ह is HEARD. 🚨 **बुनकर WAS REFUSED FOR THIS SLOT AND IT IS WORTH KNOWING WHY:** बुनकर is also the conjunctive participle of बुनना, to weave (unit 80) — \"having woven\" — so it is already a FORM of a taught verb, the class that cost u130 its छापा card. जुलाहा is nobody's inflection." },
        { id: "hi-u136l1-kumhaar", type: "vocab", front: "कुम्हार", reading: "kumhaar", meaning: "a potter", accept: ["one who makes clay vessels for a living"], example: { jp: "कुम्हार मिट्टी से एक घंटे में दस बर्तन बना लेता है।", en: "A potter makes ten pots from clay in an hour." }, drill: { jp: "कुम्हार मिट्टी से दस बर्तन बना लेता है", en: "A potter makes ten pots from clay" }, hint: "KUM-HAAR, masculine and fixed for a woman. म्ह is म stacked under a halant with ह (unit 6) — you hear the m and then the breath: kum-haar. ⚠️ His two tools are both in l4: the चाक and the साँचा, and his material is मिट्टी (unit 54)." },
        { id: "hi-u136l1-hunarmand", type: "vocab", front: "हुनरमंद", reading: "hunarmand", meaning: "skilled with the hands", accept: ["having a real craft in the fingers"], example: { jp: "हुनरमंद आदमी को काम कहीं भी मिल जाता है।", en: "A man skilled with his hands finds work anywhere." }, drill: { jp: "हुनरमंद आदमी को काम मिल जाता है", en: "A skilled man finds work" }, hint: "HU-NAR-MAND — an ADJECTIVE, so no gender change: हुनरमंद आदमी, हुनरमंद औरत. Built on हुनर, a skill (unit 32), plus the Persian -मंद — ⚠️ **AND हुनर SITS AT ITS START WITH THE ROUTER UNABLE TO MATCH IT**, because the म that follows is a LETTER. ⚠️ नरम, soft (unit 19), IS matchable inside it though, which is pure coincidence of spelling. ⚠️ Not कुशल (unit 125), which a job notice uses: हुनरमंद is said with admiration." },
        { id: "hi-u136l1-paramparaagat", type: "vocab", front: "परंपरागत", reading: "paramparaagat", meaning: "handed down by tradition", accept: ["done the way it has always been done"], example: { jp: "यह परंपरागत काम पिता से बेटे तक आता है।", en: "This traditional work comes down from father to son." }, drill: { jp: "यह परंपरागत काम पिता से आया है", en: "This traditional work came from the father" }, hint: "PA-RAM-PA-RAA-GAT — an ADJECTIVE, five syllables, no gender change. Built on परंपरा, a tradition (unit 38) — ⚠️ **AND परंपरा SITS AT ITS START WITH THE ROUTER UNABLE TO MATCH IT**, because the ग that follows is a LETTER: checked, not assumed. The -गत ending means 'gone into', and it makes an adjective of any noun." },
      ],
    },
    {
      id: "hi-u136l2",
      unit: 136,
      lesson: 2,
      title: "Spinning and weaving",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe weaving on a loom, name the spinning wheel and the spindle, and say that a cloth is cotton and describe its weave.",
      items: [
        { id: "hi-u136l2-bunaaii", type: "vocab", front: "बुनाई", reading: "bunaaii", meaning: "weaving", accept: ["the making of cloth by crossing threads"], example: { jp: "एक साड़ी की बुनाई में बीस दिन लग जाते हैं।", en: "The weaving of one sari takes twenty days." }, drill: { jp: "एक साड़ी की बुनाई में बीस दिन लगते", en: "Weaving one sari takes twenty days" }, hint: "BU-NAA-II — ⚠️ FEMININE, and the double ii is TWO syllables: bu-naa-ii. From बुनना, to weave (unit 80). 🚨 **IT IS AN -आई ACTION NOUN, NOT AN INFLECTION, AND THAT IS THE LINE THIS UNIT TURNS ON:** a NOUN built from a verb is a second lexeme and may be carded; a FORM of that verb may not — which is why बुनाई ships and बुनकर (l1's hint) does not." },
        { id: "hi-u136l2-karghaa", type: "vocab", front: "करघा", reading: "karghaa", meaning: "a loom", accept: ["the frame cloth is woven on"], example: { jp: "घर के अंदर रखा करघा अब भी चलता है।", en: "The loom kept inside the house still works." }, drill: { jp: "यह करघा अब भी चलता है", en: "This loom still works" }, hint: "KAR-GHAA, masculine and regular -ा, so the oblique is करघे, and घ carries a puff of air. 🚨 **हथकरघा, a handloom, WAS REFUSED:** this card sits inside it with a mātrā before it, so the router would blank the shorter one — the स्नातक / स्नातकोत्तर shape u97 refused. The word is ordinary Hindi; it just cannot be a card beside this one." },
        { id: "hi-u136l2-charkhaa", type: "vocab", front: "चरखा", reading: "charkhaa", meaning: "a spinning wheel", accept: ["the wheel that turns raw fibre into thread"], example: { jp: "चरखा गाँधी के बाद एक निशानी भी बन गया।", en: "After Gandhi the spinning wheel also became a symbol." }, drill: { jp: "चरखा एक निशानी भी बन गया", en: "The spinning wheel also became a symbol" }, hint: "CHAR-KHAA, masculine and regular -ा, so the oblique is चरखे, and ख carries a puff of air. ⚠️ **IT IS ON THE INDIAN FLAG'S HISTORY AND IN EVERY SCHOOLBOOK**, which is why it is worth a card even though almost nobody uses one: a learner will meet the word about Gandhi before they meet it about cloth. Its output is खादी (l3)." },
        { id: "hi-u136l2-taklii", type: "vocab", front: "तकली", reading: "taklii", meaning: "a hand spindle", accept: ["the small stick a thread is twisted onto by hand"], example: { jp: "तकली से काम धीरे होता है पर कहीं भी हो सकता है।", en: "Work with a hand spindle is slow but can be done anywhere." }, drill: { jp: "तकली से काम धीरे होता है", en: "Work with a hand spindle is slow" }, hint: "TAK-LII — ⚠️ FEMININE, with a DENTAL त and ⚠️ **THE FINAL ी LONG**: tak-lii. ⚠️ The simplest machine in the unit, and the point of the card is the contrast with the चरखा: a तकली is one stick in the hand, a चरखा has a wheel — and both make the same thread." },
        { id: "hi-u136l2-suutii", type: "vocab", front: "सूती", reading: "suutii", meaning: "made of cotton", accept: ["woven from cotton thread"], example: { jp: "गरमी में सूती कपड़ा ही पहना जाता है।", en: "In the heat only cotton cloth is worn." }, drill: { jp: "गरमी में सूती कपड़ा ही पहना जाता है", en: "Only cotton cloth is worn in the heat" }, hint: "SUU-TII — an ADJECTIVE, and ⚠️ **IT DOES NOT CHANGE FOR GENDER ALTHOUGH IT ENDS IN -ी**: सूती कपड़ा, सूती साड़ी. ⚠️ **सूत, the yarn itself, WAS REFUSED:** सूट@u40 (a suit) reads `suut` and §1b merges the RETROFLEX ट with the DENTAL त, so the two would be one dictation card with two answers. This adjective reads `suutii` and collides with nothing." },
        { id: "hi-u136l2-bunaavat", type: "vocab", front: "बुनावट", reading: "bunaavat", meaning: "the weave of a cloth", accept: ["how tightly and in what pattern a cloth is woven"], example: { jp: "दोनों साड़ियों का रंग एक है पर बुनावट अलग।", en: "Both saris are the same colour but the weave is different." }, drill: { jp: "दोनों साड़ियों की बुनावट अलग है", en: "The weave of the two saris is different" }, hint: "BU-NAA-VAT — ⚠️ FEMININE and consonant-final, so nothing in the shape says so: अच्छी बुनावट. The ट is RETROFLEX, merged to t (§1b). ⚠️ Not बुनाई, three cards back: बुनाई is the WORK, बुनावट is the RESULT you can feel. ⚠️ **कातना WAS REFUSED FOR THIS SLOT** — काटना (unit 26) reads `kaatnaa` too." },
      ],
    },
    {
      id: "hi-u136l3",
      unit: 136,
      lesson: 3,
      title: "Fibre and dye",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name cotton wool, the cotton plant, jute and khadi, and talk about dyeing cloth and printing it with a block.",
      items: [
        { id: "hi-u136l3-ruii", type: "vocab", front: "रुई", reading: "ruii", meaning: "cotton wool", accept: ["the soft white fibre before it is spun"], example: { jp: "रुई से पहले धागा बनता है, फिर कपड़ा।", en: "From cotton wool thread is made first, then cloth." }, drill: { jp: "रुई से पहले धागा बनता है", en: "Thread is made from cotton wool first" }, hint: "RU-II — ⚠️ FEMININE, and ⚠️ **TWO VOWELS AND ONE CONSONANT IN THREE LETTERS**: ru-ii, with the ु SHORT and the independent ई long. ⚠️ Not कपास, the next card: कपास is the PLANT in the field, रुई is what comes off it, and धागा (unit 40) is what रुई becomes." },
        { id: "hi-u136l3-kapaas", type: "vocab", front: "कपास", reading: "kapaas", meaning: "the cotton plant", accept: ["the crop cotton is picked from"], example: { jp: "इस ज़िले में कपास की खेती सौ साल से होती है।", en: "Cotton has been farmed in this district for a hundred years." }, drill: { jp: "इस ज़िले में कपास की खेती होती है", en: "Cotton is farmed in this district" }, hint: "KA-PAAS — ⚠️ FEMININE and consonant-final, so nothing in the shape says so: अच्छी कपास. ⚠️ **IT TIES THIS UNIT BACK TO u124**: कपास is a फ़सल, it needs बुआई and कटाई, and this unit's रुई, सूती and खादी all start in that field. ⚠️ Not रुई, the card before, which is the picked fibre." },
        { id: "hi-u136l3-juut", type: "vocab", front: "जूट", reading: "juut", meaning: "jute", accept: ["the coarse fibre sacks and mats are made from"], example: { jp: "जूट से बनी बोरी भारी वज़न उठा लेती है।", en: "A sack made of jute takes a heavy weight." }, drill: { jp: "जूट से बनी बोरी भारी वज़न उठाती है", en: "A jute sack takes a heavy weight" }, hint: "JUUT, masculine, ONE syllable, ⚠️ **THE ऊ LONG**, and the ट RETROFLEX, merged to t (§1b): juut. ⚠️ Read it against जूता, a shoe (unit 18) — a DENTAL त there and a retroflex ट here, so the two are not the same word with an ending. Its product is the बोरी of u127." },
        { id: "hi-u136l3-khaadii", type: "vocab", front: "खादी", reading: "khaadii", meaning: "hand-spun hand-woven cloth", accept: ["cloth made on a charkha and a handloom"], example: { jp: "खादी मशीन से नहीं बनती, इसलिए महँगी पड़ती है।", en: "Khadi is not made by machine, so it comes out expensive." }, drill: { jp: "खादी मशीन से नहीं बनती", en: "Khadi is not made by machine" }, hint: "KHAA-DII — ⚠️ FEMININE, ख with a puff of air and a DENTAL द. ⚠️ Read it against खाद, fertiliser (u124l3) — ⚠️ **AND खाद SITS AT ITS START WITH THE ROUTER ABLE TO MATCH IT**, because the ी after it is a mātrā. Two unrelated words, checked rather than assumed. ⚠️ The gloss describes the PROCESS, because that is literally what the word means." },
        { id: "hi-u136l3-rangaaii", type: "vocab", front: "रंगाई", reading: "rangaaii", meaning: "dyeing", accept: ["putting colour into cloth or thread"], example: { jp: "रंगाई के बाद कपड़ा दो दिन धूप में रखा जाता है।", en: "After the dyeing the cloth is kept in the sun for two days." }, drill: { jp: "रंगाई के बाद कपड़ा धूप में रखते हैं", en: "After dyeing the cloth is kept in the sun" }, hint: "RAN-GAA-II — ⚠️ FEMININE, the -आई family again, and the ं before ग is the matching velar nasal (§1). From रँगना, to dye, uncarded. ⚠️ Built on रंग, colour (unit 16) — 🚨 **AND रंग SITS AT ITS START WITH THE ROUTER ABLE TO MATCH IT**, because the ा that follows it is a mātrā and not a letter: the छात्रावास shape (unit 97), named so a drill cannot blank the shorter card unnoticed." },
        { id: "hi-u136l3-thappaa", type: "vocab", front: "ठप्पा", reading: "thappaa", meaning: "a printing block", accept: ["the carved block pressed onto cloth to print a pattern", "a stamp or seal"], example: { jp: "हर ठप्पा लकड़ी से हाथ से काटा जाता है।", en: "Every printing block is cut from wood by hand." }, drill: { jp: "हर ठप्पा हाथ से काटा जाता है", en: "Every printing block is cut by hand" }, hint: "THAP-PAA, masculine and regular -ा, so the oblique is ठप्पे. It opens on the RETROFLEX ठ with a puff of air, merged to th (§1b), and प्प is GEMINATION — you hear both p's. ⚠️ **TWO LIVE SENSES AND BOTH ARE IN THE ACCEPT LIST** — the craft block this lesson needs, and an office stamp, which is the sense a learner meets on a form. Related to छपाई (unit 44)." },
      ],
    },
    {
      id: "hi-u136l4",
      unit: 136,
      lesson: 4,
      title: "Needle, chisel and wheel",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name embroidery, gold thread work and carving, and the chisel, potter's wheel and mould they are done with — the last lesson of the language.",
      items: [
        { id: "hi-u136l4-karhaaii", type: "vocab", front: "कढ़ाई", reading: "karhaaii", meaning: "embroidery", accept: ["pattern worked onto cloth with a needle and thread"], example: { jp: "इस साड़ी की कढ़ाई तीन औरतों ने मिलकर की।", en: "Three women did the embroidery of this sari together." }, drill: { jp: "इस साड़ी की कढ़ाई तीन औरतों ने की", en: "Three women did this sari's embroidery" }, hint: "KA-RHAA-II — ⚠️ FEMININE, the -आई family, and 🚨 **ढ़ IS THE ASPIRATED CURLED-BACK FLAP WRITTEN rh** (unit 4): ka-rhaa-ii, never ka-dhaa-ii. ⚠️ Read it against पढ़ाई, studying (unit 34), which has the same ढ़ — `parhaaii` and `karhaaii`. ⚠️ Not सिलाई (unit 40), which JOINS cloth: कढ़ाई decorates it." },
        { id: "hi-u136l4-zarii", type: "vocab", front: "ज़री", reading: "zarii", meaning: "gold thread work", accept: ["metal thread woven or stitched into cloth"], example: { jp: "ज़री का काम शादी के कपड़ों पर ही होता है।", en: "Zari work is done only on wedding clothes." }, drill: { jp: "ज़री का काम शादी पर होता है", en: "Zari work is done at a wedding" }, hint: "ZA-RII — ⚠️ FEMININE. ज़ is the z of unit 4, a nukta on ज — za-rii, never ja-rii, and that one dot is the whole word. ⚠️ Read it against जरी without the dot, which is not a word this course teaches, and against ज़रा, a little (unit 30) — ⚠️ **OF WHICH THIS FRONT IS THE MECHANICAL -ी FORM**, which `scripts/tmp/b3-inflcheck.mjs` flags; ज़रा is an ADVERB and has no real feminine, so the two are a spelling coincidence and nothing more. Checked, not assumed. The frame is ज़री का काम." },
        { id: "hi-u136l4-nakkaashii", type: "vocab", front: "नक्काशी", reading: "nakkaashii", meaning: "carving", accept: ["pattern cut into wood or stone with a tool"], example: { jp: "पुराने दरवाज़े की नक्काशी आज कोई नहीं बना सकता।", en: "Nobody today can make the carving of that old door." }, drill: { jp: "पुराने दरवाज़े की नक्काशी बहुत अच्छी है", en: "The carving of the old door is very fine" }, hint: "NAK-KAA-SHII — ⚠️ FEMININE. GEMINATION in क्क — you hear both k's, the doubling rule of unit 1. ⚠️ Not मूर्तिकला (unit 91), which makes a FIGURE: नक्काशी is pattern cut INTO a surface that stays a door or a pillar. Its tool is the next card." },
        { id: "hi-u136l4-chhenii", type: "vocab", front: "छेनी", reading: "chhenii", meaning: "a chisel", accept: ["the steel blade struck with a hammer to cut stone or wood"], example: { jp: "छेनी और हथौड़े से पत्थर पर नक्काशी होती है।", en: "Carving on stone is done with a chisel and a hammer." }, drill: { jp: "छेनी से पत्थर पर काम होता है", en: "Work on stone is done with a chisel" }, hint: "CHHE-NII — ⚠️ FEMININE. छ is an aspirated ch — a puff of air — so chhe and never che. ⚠️ **ITS PARTNER हथौड़ा IS ALREADY CARDED AT unit 60**, which is why the example can name both: u60 owns the TOOLS as objects, and this unit owns what they are used FOR." },
        { id: "hi-u136l4-chaak", type: "vocab", front: "चाक", reading: "chaak", meaning: "a potter's wheel", accept: ["the turning disc a pot is shaped on"], example: { jp: "चाक घूमता है और मिट्टी बर्तन बन जाती है।", en: "The wheel turns and the clay becomes a pot." }, drill: { jp: "चाक घूमता है और मिट्टी बर्तन बनती है", en: "The wheel turns and the clay becomes a pot" }, hint: "CHAAK, masculine, ONE syllable. ⚠️ **चाकू, a knife (unit 36), IS THIS WORD WITH A ू ADDED, AND THE ROUTER CAN MATCH THE SHORTER ONE INSIDE IT** — they are in different units, so the two cards stand; named here rather than discovered by a learner whose drill blanks the wrong half. The कुम्हार of l1 is who turns it." },
        { id: "hi-u136l4-saanchaa", type: "vocab", front: "साँचा", reading: "saanchaa", meaning: "a mould", accept: ["the hollow form something soft is pressed into to take its shape"], example: { jp: "एक साँचे से सौ बर्तन एक जैसे बनते हैं।", en: "From one mould a hundred identical pots are made." }, drill: { jp: "एक साँचा सौ बर्तन एक जैसे बनाता है", en: "One mould makes a hundred identical pots" }, hint: "SAAN-CHAA, masculine and regular -ा, so the oblique is साँचे — which is the form in the EXAMPLE, while the DRILL uses the direct साँचा, so a learner meets both. 🚨 **THE ँ IS THE CHANDRABINDU ON A LONG आ** (unit 5), written n: saan-chaa. ⚠️ **THE LAST CARD OF THE LANGUAGE AS SCAFFOLDED**, and a fitting one: a साँचा is how one pair of hands makes a hundred of a thing." },
      ],
    },
  ],
};
