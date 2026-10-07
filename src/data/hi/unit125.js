// HI Unit 125 — कारख़ाना और मज़दूर ("The factory and the worker") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then **unit124.js §C1–§C11 — this block's own record**.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 5 (B2)"). A **DELIBERATE MERGE**, and
// unit124.js §C5 says why: industry measured 10 free of 18 and labour 8 of 18 —
// each too thin to carry 24 cards alone, 18 free combined. **DO NOT RE-SPLIT
// THEM.** Splitting them back out ships two half-empty units, which is exactly
// what cost A2 104 re-authored cards.
//
// 🚨 THE TITLE NAMES TWO WORDS THIS UNIT DOES NOT TEACH, AND BOTH ARE ALREADY
// CARDED ELSEWHERE. **कारखाना is u60l? ("a factory") and मज़दूर is u28 ("a
// labourer")** — so the title is readable to a learner who reaches it, and
// neither word is re-carded here. ⚠️ AND THE TITLE SPELLS IT WITH THE NUKTA
// WHILE u60 SPELLS IT WITHOUT: unit124.js §C2 records that क़ ख़ ग़ appear in
// **zero of 2,328 hi fronts**, so कारख़ाना could not be carded even if the field
// were free. The theme is the factory; the word for it is u60's.
//
// MEASURED HOLE (taken/probed against the real 2,328-card corpus, 2026-10-06;
// the committed evidence is `scripts/qa/theme-holes.mjs` + `theme-holes-hi.txt`):
// A2's u28 taught the JOB — मज़दूर, कर्मचारी, मालिक, वेतन, नौकरी, अभ्यास — and
// u43 the MACHINE (मशीन, बैटरी, ईंधन, मरम्मत, जाल). u66 took उत्पादन, u76
// मज़दूरी and खपत, u85 ठेका, u88 हड़ताल, u94 ढलाई and गोदाम. So the corpus had a
// worker and a machine and **no plant, no shop floor, no shift, no productivity,
// no union, no pension, no bonus, no allowance, no layoff, no exploitation, no
// mine, no furnace and no safety gear**.
//
// ⚠️ CROSS-BLOCK BOUNDARY, AND IT IS THE ONE MOST LIKELY TO BE BROKEN TWICE:
// **THIS UNIT OWNS THE WORKER; BLOCK 1's u103 OWNS THE FIRM.** So निगम, विलय,
// अधिग्रहण, हिस्सेदार, दिवालिया, एकाधिकार and परिचालन appear in no card here —
// checked, not assumed.
//
// ⚠️ TWO REFUSALS SPECIFIC TO THIS UNIT:
//   • **कारख़ाना** — कारखाना@u60 is the same lexeme (unit124.js §C3).
//   • **पाली** ("a work shift") — it is the FEMININE PERFECTIVE of पालना@u59, the
//     same class as कड़ी/कड़ा, लड़ी/लड़ना and मानो/मानना that unit61.js §B4 names.
//     A front that is another card's inflection is one card with two answers, and
//     no probe in the repo compares strings to paradigms. **शिफ़्ट is carded
//     instead** — the loanword every Indian factory actually uses.
//
// ⚠️ GENDER TRAPS HERE: FEMININE and consonant-final, so nothing in the shape
// says so — **छँटनी is -ी, मशीनरी is -ी, चिमनी is -ी, सुरक्षा is -आ, लापरवाही is
// -ी, भट्ठी is -ी, खदान is CONSONANT-FINAL AND FEMININE**. MASCULINE despite the
// shape: **भत्ता, दस्ताना, पुर्ज़ा** (all regular -ा) and संयंत्र, संघ, शोषण,
// बोनस, पेंशन, शिफ़्ट. उत्पादकता is feminine like every -ता abstract (unit61
// §B6). कामगार, श्रमिक, नियोक्ता and प्रशिक्षु are masculine and FIXED for a
// woman, exactly like नेता (unit 42) and शोधकर्ता (unit 96).
export const HI_UNIT125 = {
  id: "hi-u125",
  lang: "hi",
  title: "कारख़ाना और मज़दूर",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "hi-u125l1",
      unit: 125,
      lesson: 1,
      title: "Inside the works",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe an industrial plant: its machinery, a spare part, the night shift, and whether productivity has gone up.",
      items: [
        { id: "hi-u125l1-sanyantra", type: "vocab", front: "संयंत्र", reading: "sanyantra", meaning: "an industrial plant", accept: ["a large installation that processes something"], example: { jp: "यह संयंत्र दिन रात चलता है और हज़ार लोग यहाँ काम करते हैं।", en: "This plant runs day and night and a thousand people work here." }, drill: { jp: "यह संयंत्र दिन रात चलता है", en: "This plant runs day and night" }, hint: "SAN-YAN-TRA, masculine, and त्र KEEPS ITS OWN a — sanyantra, like सत्र satra (unit 97) and सूत्र suutra (unit 87). The ं before य is nasalisation (unit 5). 🚨 यंत्र, a device (unit 43), IS THIS WORD WITHOUT ITS स AND THE ROUTER CAN MATCH IT, because the ं before it is a combining mark and not a letter — and the two really are related: a संयंत्र is यंत्र joined together. ⚠️ BIGGER AND MORE SPECIALISED THAN कारखाना (unit 60): a कारखाना makes things, a संयंत्र processes one input at scale — steel, cement, power." },
        { id: "hi-u125l1-purzaa", type: "vocab", front: "पुर्ज़ा", reading: "purzaa", meaning: "a machine part", accept: ["a component", "one piece of a machine"], example: { jp: "एक छोटा पुर्ज़ा टूट गया और पूरी मशीन बंद हो गई।", en: "One small part broke and the whole machine stopped." }, drill: { jp: "यह पुर्ज़ा बहुत पुराना है", en: "This part is very old" }, hint: "PUR-ZAA, masculine and regular -ा, so the oblique is पुर्ज़े. ज़ is the z of unit 4, a nukta on ज — purzaa, never purjaa. ⚠️ Not हिस्सा (unit 19), which is any part of any whole: a पुर्ज़ा is a MADE piece that fits one place in a machine, and a मरम्मत (unit 43) usually means replacing one." },
        { id: "hi-u125l1-mashiinrii", type: "vocab", front: "मशीनरी", reading: "mashiinrii", meaning: "the machinery of a plant taken together", accept: ["machinery", "all the machines of a works as one thing"], example: { jp: "नई मशीनरी आने से काम आधे समय में होने लगा।", en: "With the new machinery, the work started getting done in half the time." }, drill: { jp: "नई मशीनरी कल आ रही है", en: "The new machinery is coming tomorrow" }, hint: "MA-SHIIN-RII — ⚠️ FEMININE, and ⚠️ THE ई IN THE MIDDLE IS LONG while the final ी is long too: ma-shiin-rii. Built on मशीन, a machine (unit 43), ⚠️ which sits at its start with the ROUTER UNABLE TO MATCH IT, because the र that follows is a LETTER. A collective: one मशीन, but मशीनरी is never counted." },
        { id: "hi-u125l1-shift", type: "vocab", front: "शिफ़्ट", reading: "shift", meaning: "a work shift", accept: ["one of the stretches a working day is split into"], example: { jp: "रात की शिफ़्ट में सिर्फ़ दस लोग रहते हैं।", en: "On the night shift there are only ten people." }, drill: { jp: "उसकी शिफ़्ट रात को शुरू होती है", en: "His shift starts at night" }, hint: "SHIFT, masculine, ONE syllable, and ⚠️ **TWO STACKS IN FOUR LETTERS**: फ़्ट is the f of unit 4 with a RETROFLEX ट under a halant. 🚨 **पाली WAS REFUSED FOR THIS SLOT** — it is the feminine perfective of पालना, to bring up (unit 59), so it is already another card's form. The loanword is what a factory actually says." },
        { id: "hi-u125l1-audyogik", type: "vocab", front: "औद्योगिक", reading: "audyogik", meaning: "industrial", accept: ["to do with factories and plants"], example: { jp: "शहर के बाहर एक बड़ा औद्योगिक इलाका बन गया है।", en: "A big industrial area has come up outside the city." }, drill: { jp: "यह औद्योगिक इलाका नया है", en: "This industrial area is new" }, hint: "AU-DYO-GIK — an ADJECTIVE, so it does not change for gender: औद्योगिक इलाका, औद्योगिक नीति. It opens on the independent vowel औ (unit 1) and द्य is a stacked conjunct with a DENTAL द (unit 6). Built on उद्योग, industry, which this course does not card — this adjective carries the whole idea." },
        { id: "hi-u125l1-utpaadaktaa", type: "vocab", front: "उत्पादकता", reading: "utpaadaktaa", meaning: "productivity", accept: ["how much is produced for the same effort"], example: { jp: "नई मशीनरी से उत्पादकता बढ़ी लेकिन काम करने वाले कम हो गए।", en: "The new machinery raised productivity but there were fewer people working." }, drill: { jp: "इस साल उत्पादकता बहुत बढ़ी है", en: "Productivity has gone up a lot this year" }, hint: "UT-PAA-DAK-TAA — ⚠️ FEMININE, like every -ता abstract (unit61 §B6), and five syllables. Built on उत्पादन, production (unit 66). ⚠️ **NOT THE SAME NUMBER AS उत्पादन, AND THAT IS THE CARD:** उत्पादन is HOW MUCH came out; उत्पादकता is how much came out PER WORKER, so one can rise while the other falls." },
      ],
    },
    {
      id: "hi-u125l2",
      unit: 125,
      lesson: 2,
      title: "The people who work it",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the shop-floor worker, the employer and the apprentice, and say whether a job needs skilled or unskilled hands.",
      items: [
        { id: "hi-u125l2-kaamgaar", type: "vocab", front: "कामगार", reading: "kaamgaar", meaning: "a worker on the shop floor", accept: ["a hand employed in a works", "one of a factory's workforce"], example: { jp: "इस संयंत्र में तीन हज़ार कामगार काम करते हैं।", en: "Three thousand workers work in this plant." }, drill: { jp: "यहाँ तीन हज़ार कामगार काम करते हैं", en: "Three thousand workers work here" }, hint: "KAAM-GAAR, masculine and FIXED for a woman. काम, work (unit 7), plus the Persian -गार, one who does — ⚠️ and काम sits at its start with the ROUTER UNABLE TO MATCH IT, because the ग that follows is a LETTER. ⚠️ Not कर्मचारी (unit 28), who sits at a desk: a कामगार works with his hands." },
        { id: "hi-u125l2-shramik", type: "vocab", front: "श्रमिक", reading: "shramik", meaning: "one who lives by physical labour", accept: ["a working person in the legal and official sense", "labour as a class of person"], example: { jp: "कानून हर श्रमिक को आठ घंटे का दिन देता है।", en: "The law gives every worker an eight-hour day." }, drill: { jp: "कानून हर श्रमिक की मदद करता है", en: "The law helps every worker" }, hint: "SHRA-MIK, masculine and fixed for a woman. श्र is a stacked conjunct (unit 6) — श with र under it, said in one breath. ⚠️ **THE REGISTER IS THE WHOLE DIFFERENCE FROM मज़दूर (unit 28):** मज़दूर is what a person is called on site, श्रमिक is what the law, the ministry and the newspaper call him — so श्रमिक turns up in a सरकार sentence and मज़दूर in a गाँव one." },
        { id: "hi-u125l2-niyoktaa", type: "vocab", front: "नियोक्ता", reading: "niyoktaa", meaning: "an employer", accept: ["the party who gives the work and pays for it"], example: { jp: "अगर नियोक्ता वेतन न दे तो श्रमिक अदालत जा सकता है।", en: "If the employer does not pay, the worker can go to court." }, drill: { jp: "नियोक्ता हर महीने वेतन देता है", en: "The employer pays wages every month" }, hint: "NI-YOK-TAA, masculine, and the -ता agent suffix is FIXED for a woman — the same ending as नेता (unit 42), मतदाता (unit 88) and शोधकर्ता (unit 96), and ⚠️ unlike those, this one is NOT feminine: the -ता of an AGENT is masculine, the -ता of an ABSTRACT (उत्पादकता, l1) is feminine. ⚠️ Not मालिक (unit 28), who OWNS the place: a नियोक्ता is whoever holds the contract." },
        { id: "hi-u125l2-prashikshu", type: "vocab", front: "प्रशिक्षु", reading: "prashikshu", meaning: "an apprentice", accept: ["a learner taken on to be trained on the job"], example: { jp: "हर नया प्रशिक्षु पहले छह महीने सिर्फ़ देखता है।", en: "Every new apprentice only watches for the first six months." }, drill: { jp: "यह प्रशिक्षु अभी सीख रहा है", en: "This apprentice is still learning" }, hint: "PRA-SHIK-SHU, masculine and fixed for a woman, and ⚠️ **THE FINAL ु IS SHORT**. 🚨 BOTH sh LETTERS, ONE EACH — श in प्रश and ष inside क्ष (unit 6, read ksha) — so the word has three stacks: प्र, क्ष, and the ु hanging under it. ⚠️ Not छात्र (unit 6), who is in a school: a प्रशिक्षु is paid." },
        { id: "hi-u125l2-kushal", type: "vocab", front: "कुशल", reading: "kushal", meaning: "skilled", accept: ["trained to do the work properly"], example: { jp: "कुशल कामगार का वेतन ज़्यादा होता है।", en: "A skilled worker's pay is higher." }, drill: { jp: "कुशल कामगार यहाँ कम हैं", en: "Skilled workers are few here" }, hint: "KU-SHAL — an ADJECTIVE, so no gender change: कुशल कामगार, कुशल औरत. ⚠️ Not काबिल (unit 32), which is about a person's capacity in general, and not हुनर (unit 32), which is a NOUN: कुशल is the official word a job notice uses, against the next card." },
        { id: "hi-u125l2-akushal", type: "vocab", front: "अकुशल", reading: "akushal", meaning: "unskilled", accept: ["taken on for work that needs no training"], example: { jp: "अकुशल काम में मेहनत ज़्यादा और पैसा कम है।", en: "In unskilled work there is more effort and less money." }, drill: { jp: "अकुशल काम में पैसा कम है", en: "There is less money in unskilled work" }, hint: "A-KU-SHAL, adjective. 🚨 THE CARD BEFORE WITH अ- IN FRONT OF IT, which is Hindi's ordinary negator — the same pair as मुमकिन / नामुमकिन (unit 32). ⚠️ AND कुशल IS INSIDE IT WITH THE ROUTER UNABLE TO MATCH IT, because the अ before it is a LETTER, not a mātrā — checked, so a drill cannot blank the wrong half." },
      ],
    },
    {
      id: "hi-u125l3",
      unit: 125,
      lesson: 3,
      title: "What they are owed, and what they lose",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about the union, a pension, a bonus and an allowance — and about layoffs and exploitation when the work goes badly.",
      items: [
        { id: "hi-u125l3-sangh", type: "vocab", front: "संघ", reading: "sangh", meaning: "a trade union", accept: ["an association formed to bargain together", "a federation of bodies"], example: { jp: "संघ ने नियोक्ता से बात की और हड़ताल रुक गई।", en: "The union talked to the employer and the strike stopped." }, drill: { jp: "संघ ने नियोक्ता से बात की", en: "The union talked to the employer" }, hint: "SANGH, masculine, ONE syllable, and the final घ carries a puff of air after the nasal: sangh. ⚠️ Not दल (unit 88), which is political, and not संस्थान (unit 97): a संघ is people joining to bargain. It is the word behind हड़ताल (unit 88) — the strike is what the संघ calls." },
        { id: "hi-u125l3-penshan", type: "vocab", front: "पेंशन", reading: "penshan", meaning: "a pension", accept: ["money paid every month after the working years end"], example: { jp: "तीस साल काम करने के बाद उसे पेंशन मिलने लगी।", en: "After thirty-five years of work she began getting a pension." }, drill: { jp: "उसे हर महीने पेंशन मिलती है", en: "She gets a pension every month" }, hint: "PEN-SHAN — ⚠️ FEMININE, despite being consonant-final and a loanword: पेंशन मिलती है, पूरी पेंशन. The ं before श is nasalisation (unit 5). ⚠️ Not वेतन (unit 28): a वेतन is paid for work done this month, a पेंशन for work finished years ago." },
        { id: "hi-u125l3-bonas", type: "vocab", front: "बोनस", reading: "bonas", meaning: "a bonus", accept: ["an extra payment on top of the agreed pay"], example: { jp: "अच्छी फ़सल के साल कारखाना बोनस देता है।", en: "In a year with a good crop the factory gives a bonus." }, drill: { jp: "इस साल बोनस नहीं मिला", en: "There was no bonus this year" }, hint: "BO-NAS, masculine, consonant-final: दो बोनस. ⚠️ A loanword whose reading is NOT its gloss, so there is no free pass (§9): the card says बोनस and reads `bonas`, while the English answer is spelled with a u. ⚠️ Not भत्ता, two cards on: a भत्ता is owed every month, a बोनस only when the year was good." },
        { id: "hi-u125l3-bhattaa", type: "vocab", front: "भत्ता", reading: "bhattaa", meaning: "an allowance paid on top of pay", accept: ["a fixed extra for travel, housing or hardship"], example: { jp: "दूर के संयंत्र में काम करने पर अलग भत्ता मिलता है।", en: "For working at a far-off plant there is a separate allowance." }, drill: { jp: "उसे हर महीने अलग भत्ता मिलता है", en: "He gets a separate allowance every month" }, hint: "BHAT-TAA, masculine and regular -ा, so the oblique is भत्ते. भ carries a puff of air and त्त is GEMINATION of a DENTAL त — you hear both. ⚠️ Read it against भाता and बत्ती (unit 15): one long aa and one short i apart. Part of the pay packet, unlike बोनस." },
        { id: "hi-u125l3-chhantnii", type: "vocab", front: "छँटनी", reading: "chhantnii", meaning: "a layoff", accept: ["cutting the number of workers", "letting people go to save money"], example: { jp: "काम कम हुआ तो कारखाने में छँटनी शुरू हो गई।", en: "When the work fell off, layoffs began at the factory." }, drill: { jp: "कारखाने में छँटनी शुरू हो गई", en: "Layoffs have started at the factory" }, hint: "CHHANT-NII — ⚠️ FEMININE. छ is an aspirated ch, and ⚠️ **THE ँ SITS ON छ ITSELF**, nasalising it before a retroflex ट (unit 5). From छाँटना, to sort out, uncarded. ⚠️ Not हड़ताल (unit 88), which the workers do: a छँटनी is done TO them." },
        { id: "hi-u125l3-shoshan", type: "vocab", front: "शोषण", reading: "shoshan", meaning: "exploitation", accept: ["using someone's labour unfairly for gain"], example: { jp: "बिना कानून के श्रमिक का शोषण होता रहता है।", en: "Without the law, the worker goes on being exploited." }, drill: { jp: "यहाँ श्रमिक का शोषण होता है", en: "The workers are exploited here" }, hint: "SHO-SHAN, masculine. ⚠️ BOTH sh LETTERS, ONE EACH — श opening it and ष inside (§1a) — and the final ण is the RETROFLEX n, merged to n in the reading. The frame is शोषण होना or शोषण करना. ⚠️ The strongest word in the unit, and the reason संघ, पेंशन and भत्ता exist." },
      ],
    },
    {
      id: "hi-u125l4",
      unit: 125,
      lesson: 4,
      title: "The heavy end, and keeping safe",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the mine, the furnace and the chimney, and say that safety gear is worn and that carelessness causes accidents.",
      items: [
        { id: "hi-u125l4-khadaan", type: "vocab", front: "खदान", reading: "khadaan", meaning: "a mine dug for ore", accept: ["a working where coal or metal is cut out of the ground"], example: { jp: "कोयले की खदान में काम सबसे भारी माना जाता है।", en: "Work in a coal mine is reckoned the heaviest of all." }, drill: { jp: "कोयले की खदान यहाँ से दूर है", en: "The coal mine is far from here" }, hint: "KHA-DAAN — ⚠️ FEMININE and consonant-final, so nothing says so: बड़ी खदान, गहरी खदान. ख carries a puff of air and the द is DENTAL. ⚠️ **THE GLOSS SAYS \"dug for ore\" BECAUSE मेरा, 'mine' the possessive (unit 3), ALREADY OWNS THE BARE ENGLISH WORD** — the grader compares strings, and \"a mine\" is one of them." },
        { id: "hi-u125l4-bhatthii", type: "vocab", front: "भट्ठी", reading: "bhatthii", meaning: "a furnace", accept: ["a built fire hot enough to melt or fire things"], example: { jp: "लोहे का नया पुर्ज़ा भट्ठी की आग में बनता है।", en: "A new iron part is made in the fire of the furnace." }, drill: { jp: "भट्ठी की आग बहुत तेज़ है", en: "The fire of the furnace is very hot" }, hint: "BHAT-THII — ⚠️ FEMININE. भ carries a puff of air, and ट्ठी is GEMINATION OF A RETROFLEX — you hear both, and only the second has the puff: bhat-thii, tongue curled back. ⚠️ Not आग (unit 17), which is any fire: a भट्ठी is BUILT, and it is where ढलाई (unit 94) happens." },
        { id: "hi-u125l4-chimnii", type: "vocab", front: "चिमनी", reading: "chimnii", meaning: "a chimney", accept: ["the tall pipe that carries smoke out of a works"], example: { jp: "दूर से सिर्फ़ चिमनी का धुआँ दिखता है।", en: "From far away only the smoke from the chimney is visible." }, drill: { jp: "चिमनी का धुआँ दूर से दिखता है", en: "The chimney's smoke is visible from far off" }, hint: "CHIM-NII — ⚠️ FEMININE, and ⚠️ THE ि IS SHORT while the final ी is long: chim-nii. ⚠️ A loanword that does NOT gloss to its own reading (§9): `chimnii` against the English chimney. The one part of a संयंत्र a learner can see from the road." },
        { id: "hi-u125l4-surakshaa", type: "vocab", front: "सुरक्षा", reading: "surakshaa", meaning: "safety", accept: ["being kept from harm", "the arrangements that stop people getting hurt"], example: { jp: "खदान में सुरक्षा का ध्यान न रखना बहुत भारी पड़ सकता है।", en: "Not paying attention to safety in a mine can cost very dearly." }, drill: { jp: "खदान में सुरक्षा का ध्यान रखिए", en: "Mind the safety in the mine" }, hint: "SU-RAK-SHAA — ⚠️ FEMININE and -आ, which for once agrees with the rule. क्ष is one of unit 6's three stacked conjuncts, read **ksha**. ⚠️ Not रक्षा alone (which this course does not card) and ⚠️ **NOT प्रतिरक्षा, WHICH IS ANOTHER UNIT'S WORD** — a cross-block line, recorded in unit124.js §C8." },
        { id: "hi-u125l4-dastaanaa", type: "vocab", front: "दस्ताना", reading: "dastaanaa", meaning: "a glove", accept: ["a hand covering worn for work"], example: { jp: "भट्ठी के पास दस्ताना पहनना ज़रूरी है।", en: "Near the furnace it is necessary to wear a glove." }, drill: { jp: "भट्ठी के पास दस्ताना पहनिए", en: "Wear a glove near the furnace" }, hint: "DAS-TAA-NAA, masculine and regular -ा, so the oblique is दस्ताने — and in practice a pair is दस्ताने. स्त is a stacked conjunct with a DENTAL त (unit 6). 🚨 **ताना, a taunt (unit 135), IS THE LAST THREE LETTERS AND THE ROUTER CAN MATCH IT**, because the ् before it is a halant and not a letter — two unrelated words, checked rather than assumed." },
        { id: "hi-u125l4-laaparvaahii", type: "vocab", front: "लापरवाही", reading: "laaparvaahii", meaning: "carelessness", accept: ["not taking the trouble to be careful", "negligence"], example: { jp: "एक आदमी की लापरवाही से पूरी शिफ़्ट का काम रुक गया।", en: "One man's carelessness stopped a whole shift's work." }, drill: { jp: "उसकी लापरवाही से काम रुक गया", en: "His carelessness stopped the work" }, hint: "LAA-PAR-VAA-HII — ⚠️ FEMININE, four syllables, and the ह is HEARD. 🚨 **TWO TAUGHT FRONTS SIT INSIDE IT AND THE ROUTER CAN MATCH BOTH** — लापरवाह, careless (unit 53), with only the ी after it, and परवाह, caring (unit 82), with a ला before it that ends in a mātrā. This card is the ABSTRACT NOUN of the first, the way मज़दूरी (unit 76) is of मज़दूर (unit 28). ⚠️ It is the word a चेतावनी (unit 48) is given against, and the reason सुरक्षा is three cards back rather than a slogan." },
      ],
    },
  ],
};
