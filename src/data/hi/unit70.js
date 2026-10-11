// HI Unit 70 — दिक्कत और हल ("Trouble and the fix") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then unit61.js
// §B1–§B9.
//
// Slot KEPT, measured 9/18. A2 gave the learner हल (u32, "a solution"), दिक्कत
// (u47), मुसीबत (u48), जोखिम (u47), खतरा (u27), गलती (u22), नुकसान (u37) and
// शिकायत (u39) — enough to say something is wrong and nothing to say WHAT KIND of
// wrong. This unit cards the eight kinds Hindi distinguishes (a crisis, a bother,
// a disaster, a stumbling block, a shortcoming, a defect, a technical error, a
// failure) and the five ways out of them, including **जुगाड़**, which has no
// English equivalent and is one of the most culturally useful words in the band.
//
// ⚠️ FRONTS WANTED AND REFUSED:
//   TAKEN: हल (u32, "a solution") · दिक्कत, जोखिम (u47) · मुसीबत (u48) ·
//     खतरा (u27) · गलती (u22) · नुकसान, कमी (u37) · शिकायत (u39) · तनाव (u52,
//     "stress") · मरम्मत (u20, "a repair") · टालना (u22, "to put off") ·
//     कमज़ोर (u19).
//   GLOSS-REFUSED through normalizeMeaning: **समाधान** (हल u32 is "a solution") ·
//     **समस्या glossed "a problem"** — प्रश्न (u6) normalises to "problem", so it
//     is carded **"a problem to solve"** · **अड़चन glossed "a hitch"** (दिक्कत u47
//     owns it, so अड़चन is **"a stumbling block"**) · **उपाय glossed "a remedy"**
//     (दवा u20 owns it, so उपाय is **"a measure taken"**) · **हिचक glossed "a
//     hesitation" or "a holding back"** — झिझक (u52) owns both, so हिचक is
//     **"cold feet"** · **निबटारा** (it would be a second settling-word beside
//     निपटना in the same unit).
//   DERIVATIVE-REFUSED: **कमज़ोरी** beside कमज़ोर, weak (u19) — unit67.js's rule.
//     कमी (u37) covers the lack anyway, and दोष and खामी cover the fault.
//   ✅ AND FIVE THAT PASS unit69.js's -आव/-आवट TEST, so a later block does not
//     wrongly refuse them: **रुकावट** ← रुकना (u12) · **दबाव** ← दबाना (u43) ·
//     **सामना** ← सामने (u23) · **सुलझाना** (सुलझना is NOT taught) · **निपटना**
//     (no base taught). Suffixed derivations, not bare stems.
//
// ⚠️ ONE WORD WORTH MORE THAN ITS CARD, and it is why this unit exists in Hindi
// rather than being a translation of an English list: **जुगाड़ (l4)**. It names a
// fix improvised out of whatever is to hand — not a repair, not a trick, not a
// workaround, but the specifically Indian practice of making something work with
// the wrong parts. There is no English word and no Hindi synonym, and a learner
// who does not have it cannot follow an ordinary conversation about getting
// anything done. Its hint does the cultural work.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: समस्या, चुनौती, आपदा, बाधा, रुकावट, गड़बड़ी, खामी, विफलता,
//   तरकीब, **अड़चन and हिचक**. ⚠️ **अड़चन and हिचक are CONSONANT-FINAL**, so
//   nothing in the shape says so — अड़चन बड़ी थी, never बड़ा. And **आपदा and बाधा
//   are FEMININE IN -आ**, against the ending rule.
//   MASCULINE: संकट, झंझट, पेच, दबाव, दोष, संघर्ष, सामना, उपाय, विकल्प, जुगाड़.
//   **झंझट, पेच, दोष, उपाय, विकल्प and जुगाड़ are consonant-final masculine**, and
//   सामना is masculine -आ following the rule.
//   ⚠️ त्रुटि is FEMININE and ends in -ि, the rare always-feminine shape (the same
//   as अवधि, u69l4).
// RETROFLEX/DENTAL (unit1.js §1b): **अड़चन, गड़बड़ी and जुगाड़ all carry ड़, which
// reads r** (unit 1 §1c) — archan, garbarii, jugaar. **झंझट and संकट and निपटना
// end in or carry RETROFLEX ट**, merged to t. **त्रुटि is DENTAL त with a
// RETROFLEX ट** in one three-letter word, and both merge — truti. Checked against
// all 1,440 readings: 0 collisions.
// LOANWORD FREE-PASS CHECK (unit1.js §9): no loanwords. Zero free passes.
export const HI_UNIT70 = {
  id: "hi-u70",
  lang: "hi",
  title: "दिक्कत और हल",
  order: 70,
  stage: "b1",
  lessons: [
    {
      id: "hi-u70l1",
      unit: 70,
      lesson: 1,
      title: "Names for trouble",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Call something a problem to be solved, a challenge worth taking on, a crisis, a mere bother, an outright disaster, or a small stumbling block.",
      items: [
        { id: "hi-u70l1-samasyaa", type: "vocab", front: "समस्या", reading: "samasyaa", meaning: "a problem to solve", accept: ["a difficulty needing a fix", "a trouble to be sorted out", "an issue needing an answer"], example: { jp: "समस्या बड़ी नहीं है, पर उसका हल किसी को मालूम नहीं।", en: "The problem is not big, but nobody knows its solution." }, drill: { jp: "हर गाँव की अपनी समस्या है", en: "Every village has its own problem" }, hint: "SA-MAS-YAA — ⚠️ FEMININE, the -या class (unit 61's प्रतिक्रिया, unit 66's प्रक्रिया): समस्या बड़ी है, not बड़ा. ⚠️ Carded 'a problem to solve' and not 'a problem', because प्रश्न, a question (unit 6), normalises to 'problem'. Formal, where दिक्कत (unit 47) is the spoken word." },
        { id: "hi-u70l1-chunautii", type: "vocab", front: "चुनौती", reading: "chunautii", meaning: "a challenge", accept: ["a hard thing worth taking on", "a test of what one can do", "something difficult thrown at you"], example: { jp: "यह काम चुनौती है, पर नामुमकिन नहीं है।", en: "This work is a challenge, but it is not impossible." }, drill: { jp: "उसने यह चुनौती खुशी से ली", en: "He took on this challenge gladly" }, hint: "CHU-NAU-TII — FEMININE. The नौ carries the औ mātrā (unit 3). ⚠️ The one word in this lesson that is NOT negative: a चुनौती is difficulty you have chosen, which is why Hindi says चुनौती स्वीकार करना, to accept a challenge. चुनौती देना is to challenge someone." },
        { id: "hi-u70l1-sankat", type: "vocab", front: "संकट", reading: "sankat", meaning: "a crisis", accept: ["a dangerous turn of events", "a critical moment", "a point of grave danger"], example: { jp: "पानी का संकट हर साल गरमी में आता है और कोई उपाय नहीं निकलता।", en: "The water crisis comes every summer in the heat and no measure emerges." }, drill: { jp: "पानी का संकट हर साल आता है", en: "The water crisis comes every year" }, hint: "SAN-KAT, masculine, consonant-final, ending in RETROFLEX ट merged to t (unit 1 §1b). ⚠️ Heavier than मुसीबत, a spell of trouble (unit 48): a मुसीबत happens to a person, a संकट threatens a whole village, a country or a water supply. The word a news report uses." },
        { id: "hi-u70l1-jhanjhat", type: "vocab", front: "झंझट", reading: "jhanjhat", meaning: "a bother", accept: ["a tiresome hassle", "a nuisance", "a troublesome business"], example: { jp: "कागज़ का झंझट इतना है कि लोग अर्ज़ी ही नहीं देते।", en: "The paperwork bother is so much that people simply do not file an application." }, drill: { jp: "कागज़ का झंझट बहुत है", en: "The paperwork bother is a lot" }, hint: "JHAN-JHAT, masculine. ⚠️ TWO ASPIRATED झ with a ं between them reading n, and a RETROFLEX ट at the end — the same shape as झुँझलाहट (unit 67), and the two are from one root. A झंझट is not dangerous, only exhausting, and Hindi complains with it constantly: इस झंझट में कौन पड़े." },
        { id: "hi-u70l1-aapdaa", type: "vocab", front: "आपदा", reading: "aapdaa", meaning: "a disaster", accept: ["a calamity on a large scale", "a catastrophe", "a disaster striking many people"], example: { jp: "बाढ़ एक आपदा है और उसके बाद सरकार को जल्दी काम करना पड़ता है।", en: "A flood is a disaster and after it the government has to work quickly." }, drill: { jp: "बाढ़ एक बड़ी आपदा है", en: "A flood is a big disaster" }, hint: "AAP-DAA — ⚠️ FEMININE despite the -ा: आपदा आई, not आया. DENTAL द. ⚠️ Bigger than संकट above: a संकट can be slow and chronic, an आपदा is sudden and physical — a flood (unit 20), an earthquake (unit 54). आपदा प्रबंधन is disaster management, using प्रबंध from unit 66." },
        { id: "hi-u70l1-archan", type: "vocab", front: "अड़चन", reading: "archan", meaning: "a stumbling block", accept: ["a small thing getting in the way", "a hitch in the way", "a petty obstacle"], example: { jp: "एक छोटी अड़चन के कारण पूरा काम दो दिन रुका रहा।", en: "Because of one small stumbling block the whole work stayed stopped for two days." }, drill: { jp: "एक छोटी अड़चन के कारण काम रुका", en: "Because of one small stumbling block the work stopped" }, hint: "AR-CHAN — ⚠️ FEMININE AND CONSONANT-FINAL: अड़चन बड़ी थी, never बड़ा. The ड़ reads r (unit 1 §1c), so archan. ⚠️ Carded 'a stumbling block' and not 'a hitch', because दिक्कत (unit 47) owns that gloss. Smaller than every other word in this lesson — an अड़चन is annoying, not serious." },
      ],
    },
    {
      id: "hi-u70l2",
      unit: 70,
      lesson: 2,
      title: "What is in the way",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name an obstruction and an obstacle, describe a complication and a malfunctioning, say someone is under pressure, and admit you got cold feet.",
      items: [
        { id: "hi-u70l2-rukaavat", type: "vocab", front: "रुकावट", reading: "rukaavat", meaning: "an obstruction", accept: ["something stopping the way", "a blockage", "a thing put in the way"], example: { jp: "सड़क पर रुकावट थी, इसलिए बस दूसरे रास्ते से आई।", en: "There was an obstruction on the road, so the bus came by another route." }, drill: { jp: "काम में कोई रुकावट नहीं आई", en: "No obstruction came up in the work" }, hint: "RU-KAA-VAT — ⚠️ FEMININE AND CONSONANT-FINAL, ending in RETROFLEX ट merged to t. Built on रुकना, to stop (unit 12), with the -आवट suffix — a derived noun, not the bare stem, so it is cardable (unit 69's rule). ⚠️ Not ठहराव (unit 69), which is motion having stopped; a रुकावट is the THING in the way." },
        { id: "hi-u70l2-baadhaa", type: "vocab", front: "बाधा", reading: "baadhaa", meaning: "an obstacle", accept: ["a hindrance in the path", "a bar to going on", "something that holds one back"], example: { jp: "पैसे की बाधा न हो तो वह आगे पढ़ सकता था।", en: "Had there been no money obstacle he could have studied further." }, drill: { jp: "पैसे की बाधा सबसे बड़ी थी", en: "The money obstacle was the biggest" }, hint: "BAA-DHAA — ⚠️ FEMININE despite the -ा, with DENTAL ध: बाधा आई, not आया. ⚠️ More abstract than रुकावट above: a रुकावट is physical and in one place, a बाधा is any condition that holds you back — money, health, language. बाधा डालना is to obstruct someone." },
        { id: "hi-u70l2-pech", type: "vocab", front: "पेच", reading: "pech", meaning: "a complication", accept: ["a twist that makes it hard", "a knotty point", "a tangle in a matter"], example: { jp: "बात आसान लगती है, पर उसमें एक पेच है जो बाद में दिखता है।", en: "The matter looks easy, but there is a complication in it that shows up later." }, drill: { jp: "उसमें एक पेच है", en: "There is a complication in it" }, hint: "PECH, masculine, one syllable, consonant-final. ⚠️ It is also the physical word for a SCREW and for the twist of a kite string, and Hindi uses all three senses — पेचीदा, complicated, comes from it. A पेच is a twist in a thing, not a blockage: the work can proceed, it is just tangled." },
        { id: "hi-u70l2-garbarii", type: "vocab", front: "गड़बड़ी", reading: "garbarii", meaning: "a malfunctioning", accept: ["a thing not working as it should", "something gone wrong inside", "a fault in the working"], example: { jp: "मशीन में कोई गड़बड़ी है, वह चलती है पर ठीक नहीं चलती।", en: "There is some malfunctioning in the machine; it runs but does not run properly." }, drill: { jp: "हिसाब में कोई गड़बड़ी निकली", en: "Something had gone wrong in the accounts" }, hint: "GAR-BA-RII — FEMININE, -ी and predictable. ⚠️ TWO ड़ IN ONE WORD, both reading r (unit 1 §1c): garbarii. From गड़बड़, which is not taught. ⚠️ Not खराब, out of order (unit 43): खराब means it has stopped, गड़बड़ी means it works WRONG, which is harder to find." },
        { id: "hi-u70l2-dabaav", type: "vocab", front: "दबाव", reading: "dabaav", meaning: "pressure on someone", accept: ["being pushed to do something", "the push someone is under", "being leaned on"], example: { jp: "उस पर दबाव था कि वह अपना ऐतराज़ वापस ले ले।", en: "There was pressure on him to withdraw his objection." }, drill: { jp: "उस पर बहुत दबाव था", en: "There was a lot of pressure on him" }, hint: "DA-BAAV, masculine, with DENTAL द. Built on दबाना, to press (unit 43), with the -आव suffix (unit 69's rule). ⚠️ Not तनाव, stress (unit 52), which is INSIDE you; दबाव comes from outside — a person, a deadline, a government. Also the physical word for blood pressure." },
        { id: "hi-u70l2-hichak", type: "vocab", front: "हिचक", reading: "hichak", meaning: "cold feet", accept: ["a last-moment pulling-back", "hesitation at the last moment", "a flinching back"], example: { jp: "वह बोलने को तैयार था, पर आखिरी मिनट में हिचक हुई।", en: "He was ready to speak, but at the last minute he got cold feet." }, drill: { jp: "आखिरी मिनट में उसे हिचक हुई", en: "At the last minute he got cold feet" }, hint: "HI-CHAK — ⚠️ FEMININE AND CONSONANT-FINAL: हिचक हुई, never हुआ. ⚠️ Carded 'cold feet' because झिझक (unit 52) already owns BOTH 'hesitation' and 'a holding back' — the probe caught it (unit 61 §B4). A हिचक is at the last moment and about ACTING; झिझक is the general shyness." },
      ],
    },
    {
      id: "hi-u70l3",
      unit: 70,
      lesson: 3,
      title: "Where the lack is",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name a shortcoming, a defect in a made thing and a technical error in a document, report a failure, and describe the struggle and the confrontation that followed.",
      items: [
        { id: "hi-u70l3-khaamii", type: "vocab", front: "खामी", reading: "khaamii", meaning: "a shortcoming", accept: ["what is missing from a thing", "a weak point", "a gap in something"], example: { jp: "उसकी दलील में एक खामी थी, उसने सबूत का ज़िक्र नहीं किया।", en: "There was one shortcoming in his argument: he made no mention of proof." }, drill: { jp: "इस प्रणाली में एक खामी है", en: "There is one shortcoming in this system" }, hint: "KHAA-MII — FEMININE, -ी and predictable. Plain ख (unit 1 §7 keeps ख़ uncarded). ⚠️ **कमज़ोरी was REFUSED** as the bare abstract of कमज़ोर, weak (unit 19). A खामी is something ABSENT that should be there — in a plan, an argument, a design; दोष below is something present that should not be." },
        { id: "hi-u70l3-dosh", type: "vocab", front: "दोष", reading: "dosh", meaning: "a defect", accept: ["a fault built into a thing", "a flaw", "something wrong with a thing"], example: { jp: "हर आदमी में कोई गुण और कोई दोष होता है।", en: "Every person has some quality and some defect." }, drill: { jp: "हर आदमी में कोई दोष होता है", en: "Every person has some defect" }, hint: "DOSH, masculine, consonant-final, with ष reading sh (unit 1 §1a). ⚠️ **गुण और दोष is a fixed Hindi pair** and गुण is carded at unit 68 — this example teaches both halves. Not कसूर, the blame (unit 32), which is about who did it; a दोष is a flaw that is simply there." },
        { id: "hi-u70l3-truti", type: "vocab", front: "त्रुटि", reading: "truti", meaning: "a technical error", accept: ["a slip in a text", "a mistake in a calculation", "an error in what was written"], example: { jp: "कागज़ में एक त्रुटि रह गई और पूरा हिसाब बिगड़ गया।", en: "One error remained in the paper and the whole calculation was spoiled." }, drill: { jp: "हर त्रुटि ठीक की गई", en: "Every error was put right" }, hint: "TRU-TI — ⚠️ FEMININE and ends in -ि, the rare always-feminine shape (like अवधि, unit 69): त्रुटि रह गई, never रह गया. ⚠️ A DENTAL त्र and a RETROFLEX ट in three letters, both merged (unit 1 §1b). Formal and narrow: a त्रुटि is a slip in writing or arithmetic, where गलती (unit 22) is any mistake." },
        { id: "hi-u70l3-viphaltaa", type: "vocab", front: "विफलता", reading: "viphaltaa", meaning: "a failure", accept: ["a not-succeeding", "an unsuccessful attempt", "coming to nothing"], example: { jp: "पहली विफलता के बाद उसने तरीका बदला और दूसरी बार सफल हुआ।", en: "After the first failure he changed his method and succeeded the second time." }, drill: { jp: "हर विफलता कुछ सिखाती है", en: "Every failure teaches something" }, hint: "VI-PHAL-TAA — FEMININE, a -ता abstract. फल is fruit or outcome — the same फल inside फलस्वरूप (unit 62) — and वि- negates it. विफल itself is not taught, so this abstract is cardable (unit 67's rule). ⚠️ The opposite of सफल, successful (unit 32), which the learner already has." },
        { id: "hi-u70l3-sangharsh", type: "vocab", front: "संघर्ष", reading: "sangharsh", meaning: "a struggle", accept: ["a long hard effort against something", "a hard fight", "a drawn-out battle"], example: { jp: "उसका संघर्ष दस साल चला और आखिर में उसे हक मिला।", en: "His struggle ran ten years and in the end he got his right." }, drill: { jp: "यह संघर्ष आसान नहीं था", en: "This struggle was not easy" }, hint: "SAN-GHARSH, masculine. The ं reads n before घ, and ष reads sh. ⚠️ Not कोशिश, an attempt (unit 22): a कोशिश is one try, a संघर्ष is years of them against something resisting. The word a biography and a political speech both use." },
        { id: "hi-u70l3-saamnaa", type: "vocab", front: "सामना", reading: "saamnaa", meaning: "a confrontation", accept: ["facing a thing head-on", "a meeting face to face", "standing up to something"], example: { jp: "मुश्किल से भागने से कुछ नहीं होता, उसका सामना करना पड़ता है।", en: "Nothing comes of running from a difficulty; you have to face it." }, drill: { jp: "मुश्किल का सामना करना पड़ता है", en: "One has to face the difficulty" }, hint: "SAAM-NAA, masculine — the -आ follows the rule, unlike the -ना nouns unit 57 lists. Built on सामने, in front (unit 23). The frame is X का सामना करना, to face X. ⚠️ Not झगड़ा, a quarrel (unit 30): a सामना is meeting a thing you were avoiding, and it is as often a difficulty as a person." },
      ],
    },
    {
      id: "hi-u70l4",
      unit: 70,
      lesson: 4,
      title: "How to get out",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Propose a measure, offer an alternative option, name a trick that works and an improvised makeshift fix, and say you will untangle a problem and deal with it.",
      items: [
        { id: "hi-u70l4-upaay", type: "vocab", front: "उपाय", reading: "upaay", meaning: "a measure taken", accept: ["a step to put a thing right", "a remedy", "a way out that is tried"], example: { jp: "पानी के संकट का कोई उपाय ढूँढना पड़ेगा, वरना हर साल वही होगा।", en: "Some measure for the water crisis will have to be found, or else the same thing will happen every year." }, drill: { jp: "इस संकट का कोई उपाय ढूँढो", en: "Find some measure for this crisis" }, hint: "U-PAAY, masculine, consonant-final. ⚠️ Carded 'a measure taken' and not 'a remedy', because दवा, medicine (unit 20), owns that gloss. ⚠️ Not हल, a solution (unit 32): a हल solves the problem, an उपाय is a step you take about it, and you can take several." },
        { id: "hi-u70l4-vikalp", type: "vocab", front: "विकल्प", reading: "vikalp", meaning: "an option", accept: ["one of the choices available", "another course open to one", "another way one could go"], example: { jp: "हमारे पास दो विकल्प हैं और दोनों में कोई न कोई खामी है।", en: "We have two options and each one has some shortcoming or other." }, drill: { jp: "इसका कोई दूसरा विकल्प नहीं है", en: "There is no other option for this" }, hint: "VI-KALP, masculine, consonant-final: ल्प is ल with प stacked. ⚠️ Not चुनना, to choose (unit 29): a विकल्प is the THING you could choose, so Hindi says विकल्प चुनना. Also used for a substitute — इसका कोई विकल्प नहीं है, there is no substitute for this." },
        { id: "hi-u70l4-tarkiib", type: "vocab", front: "तरकीब", reading: "tarkiib", meaning: "a trick that works", accept: ["a knack for getting a thing done", "a clever device", "a handy way of doing it"], example: { jp: "उसने एक तरकीब बताई और काम आधे समय में हो गया।", en: "He told me a trick and the work got done in half the time." }, drill: { jp: "उसने एक अच्छी तरकीब बताई", en: "He told me a good trick" }, hint: "TAR-KEEB — FEMININE, and consonant-final, so nothing says so: तरकीब अच्छी थी, never अच्छा. ⚠️ Not तरीका, a method (unit 32): a तरीका is the standard way, a तरकीब is a clever shortcut somebody worked out. No disapproval in it — a तरकीब is admired." },
        { id: "hi-u70l4-jugaar", type: "vocab", front: "जुगाड़", reading: "jugaar", meaning: "a makeshift fix", accept: ["something rigged up out of what was to hand", "an improvised arrangement", "a workaround put together"], example: { jp: "पंखा टूट गया था, पर उसने तार से जुगाड़ कर दिया और वह चल पड़ा।", en: "The fan had broken, but he rigged up a makeshift fix with wire and it started running." }, drill: { jp: "उसने तार से जुगाड़ कर दिया", en: "He rigged up a makeshift fix with wire" }, hint: "JU-GAAR, masculine, consonant-final, with ड़ reading r (unit 1 §1c). ⚠️ **THERE IS NO ENGLISH WORD FOR THIS AND NO HINDI SYNONYM.** A जुगाड़ is a working fix improvised from the wrong parts — not a मरम्मत, repair (unit 20), which restores the thing, and not a तरकीब above, which is a clever method. Indians say it with pride. जुगाड़ करना, and a जुगाड़ू is the person who does it." },
        { id: "hi-u70l4-suljhaanaa", type: "vocab", front: "सुलझाना", reading: "suljhaanaa", meaning: "to untangle", accept: ["to sort out a tangled matter", "to unravel", "to clear up a knot"], example: { jp: "यह पेच किसी को सुलझाना पड़ेगा, अपने आप नहीं खुलेगा।", en: "Somebody will have to untangle this complication; it will not come open by itself." }, drill: { jp: "इस समस्या को सुलझाना होगा", en: "This problem will have to be untangled" }, hint: "SUL-JHAA-NAA, a regular -ना verb with ASPIRATED झ. Literally to untangle thread or hair, and Hindi uses it for a dispute, a misunderstanding or a sum. ⚠️ Fits पेच (lesson 2) exactly: a पेच is a twist, and you सुलझाना it. Its opposite is उलझना, and उलझन, confusion, is unit 57's." },
        { id: "hi-u70l4-nipatnaa", type: "vocab", front: "निपटना", reading: "nipatnaa", meaning: "to deal with something", accept: ["to get a thing off one's hands", "to get through something", "to see something through to the end"], example: { jp: "पहले इस झंझट से निपटना है, बाकी काम बाद में।", en: "First this bother has to be dealt with; the rest of the work afterwards." }, drill: { jp: "मुझे इस काम से निपटना है", en: "I have to deal with this work" }, hint: "NI-PAT-NAA, a regular -ना verb, with RETROFLEX ट merged to t (unit 1 §1b). ⚠️ The frame is X से निपटना, with से and never को. Not सुलझाना above: you सुलझाना a TANGLE and निपटना a TASK — निपटना means finished and off your plate, whether it was solved elegantly or not." },
      ],
    },
  ],
};
