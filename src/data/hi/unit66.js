// HI Unit 66 — काम का तरीका ("How the work is done") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then unit61.js
// §B1–§B9. This unit adds nothing to them.
//
// Slot KEPT, RETITLED **काम का तरीका**. Measured **5/18 — the emptiest slot in
// block 1's range**, and that is not an accident: A2 u34 दफ़्तर और कक्षा carded
// the PLACE of work (दफ़्तर, क्लर्क, अफ़सर, मालिक, नौकरी, तनख्वाह, छुट्टी,
// साक्षात्कार, तरक्की) and u37 the MONEY of it, while nothing anywhere carded
// the SHAPE of work — the process, the step, the framework, the standard, the
// capacity. A learner at u65 can say where they work and what they are paid and
// cannot say how anything gets done.
//
// 🚨 THIS UNIT SPENDS ZERO JOB TITLES, AND THAT IS A COMMITMENT, NOT A
// PREFERENCE. unit61 §B9 records it as one of the three cross-block boundaries:
// **u96 पेशे और पद (block 3) owns the JOB-TITLE NOUNS** — प्रबंधक, सचिव,
// लेखाकार, शोधकर्ता, तकनीशियन, ठेकेदार, विक्रेता, रसोइया, पायलट, प्लंबर,
// अनुवादक, सलाहकार, साझेदार, प्रशिक्षक, निरीक्षक, measured 1/16 and all still
// free. Without this line u66 and u96 are the same unit twice, which is exactly
// the failure that cost A2 104 re-authored cards across three languages.
//   THE LINE BLOCK 1 DREW AND HELD, and it runs through three near-pairs:
//     ✅ **प्रबंध**, management, the abstract noun   ❌ प्रबंधक, the manager
//     ✅ **निरीक्षण**, a checking-over              ❌ निरीक्षक, the inspector
//     ✅ **पद**, a post held, which is a SLOT in an organisation and not a trade
//   पद is the closest call in the unit and it stays, because "what post do you
//   hold" is a process question — the title that fills the post is u96's.
//
// ⚠️ FRONTS WANTED AND REFUSED:
//   TAKEN: तरीका, असर, नतीजा, मकसद (u32) · दफ़्तर, मालिक, अफ़सर, क्लर्क,
//     तरक्की (u34) · नियम (u32) · इंतज़ाम (u19, "an arrangement made in
//     advance") · दर्जा (u47) · कुल (u19) · हिसाब (u18).
//   GLOSS-REFUSED through normalizeMeaning: **अनुक्रम** (it would be a second "a
//     sequence" beside क्रम in the same unit) · **ओहदा** (a second "a post held"
//     beside पद) · **व्यवस्था glossed "an arrangement"** — इंतज़ाम (u19) owns
//     that, so व्यवस्था is carded **"an orderly arrangement"**, which is also
//     what the word actually means · **प्रारूप glossed "a draft"** — मसौदा is
//     u93's (block 3), so प्रारूप is carded **"a template"**.
//   READING-CHECKED AND CLEAR: चक्र reads chakra and does NOT collide with
//     साइकिल, a bicycle (u9) — but the GLOSS did, so चक्र is "a recurring cycle"
//     rather than "a cycle". Same for प्रवाह, "a steady stream", because बहना
//     (u49) already owns "a flow", and निरीक्षण, "a checking-over", because
//     जाँच (u35) owns "an inspection". Three glosses moved by the probe, not by
//     eye — unit61 §B4.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE, and this unit is unusually full of them because the -ता/-ा
//   abstract suffixes are feminine: प्रक्रिया, व्यवस्था, प्रणाली, गुणवत्ता,
//   कार्यवाही, दक्षता, क्षमता. ⚠️ **व्यवस्था and प्रक्रिया are the two most likely
//   to be got wrong**, because -आ and -या read masculine everywhere else except
//   for the -या class (unit 61's प्रतिक्रिया).
//   MASCULINE: चरण, ढाँचा, उत्पादन, नियोजन, क्रम, प्रारूप, मानक, निरीक्षण,
//   समन्वय, कार्यभार, संचालन, प्रबंध, चक्र, प्रवाह, पद. **ढाँचा is masculine -आ,
//   which for once follows the rule**, and पद is consonant-final masculine.
//   INVARIANT (unit53's rule): सुचारु, नियमित. ⚠️ **सुचारु does NOT agree despite
//   the -ु**: सुचारु व्यवस्था, सुचारु काम.
// RETROFLEX/DENTAL (unit1.js §1b): **गुणवत्ता has a RETROFLEX ण AND a doubled
// dental त्त** — gunvattaa, and both merge, so the hint carries the contrast.
// निरीक्षण and चरण are retroflex ण. प्रारूप, उत्पादन and प्रक्रिया are all dental.
// Checked against all 1,440 readings: 0 collisions.
// LOANWORD FREE-PASS CHECK (unit1.js §9): no loanwords. Zero free passes.
export const HI_UNIT66 = {
  id: "hi-u66",
  lang: "hi",
  title: "काम का तरीका",
  order: 66,
  stage: "b1",
  lessons: [
    {
      id: "hi-u66l1",
      unit: 66,
      lesson: 1,
      title: "Step by step",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name a process and the step you are on, put things in a sequence, describe a steady stream of work and a cycle that keeps coming round, and say a thing is done at regular intervals.",
      items: [
        { id: "hi-u66l1-prakriyaa", type: "vocab", front: "प्रक्रिया", reading: "prakriyaa", meaning: "a process", accept: ["the way a thing is carried out", "a set of steps gone through", "a procedure"], example: { jp: "पासपोर्ट की प्रक्रिया लंबी है, पर उसका हर चरण साफ़ लिखा है।", en: "The passport process is long, but every step of it is clearly written out." }, drill: { jp: "यह प्रक्रिया बहुत लंबी है", en: "This process is very long" }, hint: "PRA-KRI-YAA — ⚠️ FEMININE, the -या class (unit 61's प्रतिक्रिया). The क्रि is क with र stacked plus the ि mātrā — NOT the ृ mark. ⚠️ Not तरीका, a method (unit 32): a तरीका is HOW you choose to do it, a प्रक्रिया is the fixed sequence an office or a machine puts you through." },
        { id: "hi-u66l1-charan", type: "vocab", front: "चरण", reading: "charan", meaning: "a step in a process", accept: ["a stage of a sequence", "a phase", "one leg of a longer job"], example: { jp: "काम तीन चरण में होगा और हर चरण के बाद निरीक्षण होगा।", en: "The work will happen in three steps and after every step there will be a checking-over." }, drill: { jp: "यह काम तीन चरण में होगा", en: "This work will happen in three steps" }, hint: "CHA-RAN, masculine, with RETROFLEX ण merged to n (unit 1 §1b). Literally a foot, hence a pace. ⚠️ Not कदम, a footstep (unit 29), which is the physical step; a चरण is one labelled phase of a plan. And not स्तर, a tier (unit 63), which is stacked rather than sequential." },
        { id: "hi-u66l1-kram", type: "vocab", front: "क्रम", reading: "kram", meaning: "a sequence", accept: ["the order things come in", "an ordering", "the succession things follow"], example: { jp: "कागज़ को क्रम में रखो, वरना कोई ब्यौरा नहीं मिलेगा।", en: "Keep the papers in sequence, or else no breakdown of details will be found." }, drill: { jp: "सब काम क्रम से होना चाहिए", en: "All the work should happen in sequence" }, hint: "KRAM, masculine, one syllable: क with र stacked. The root inside क्रमिक, step-by-step (unit 62), and सिलसिलेवार (unit 62) does the adverbial job. ⚠️ **अनुक्रम was REFUSED** as a second 'a sequence' in the same unit. क्रम से means 'in order', and क्रम टूटना is for a sequence to break." },
        { id: "hi-u66l1-pravaah", type: "vocab", front: "प्रवाह", reading: "pravaah", meaning: "a steady stream", accept: ["a continuous flowing", "an unbroken flow", "the current of something"], example: { jp: "दफ़्तर में कागज़ का प्रवाह कभी नहीं रुकता, और वही थकान की वजह है।", en: "The stream of paper in the office never stops, and that is the reason for the tiredness." }, drill: { jp: "कागज़ का प्रवाह कभी नहीं रुकता", en: "The stream of paper never stops" }, hint: "PRA-VAAH, masculine. ⚠️ Carded as 'a steady stream' and not 'a flow', because बहना, to flow (unit 49), already owns that gloss — unit 61 §B4. Used for a river, for traffic, for speech (धाराप्रवाह बोलना is to speak fluently) and for work arriving without a break." },
        { id: "hi-u66l1-chakra", type: "vocab", front: "चक्र", reading: "chakra", meaning: "a recurring cycle", accept: ["a round that comes back to the start", "a repeating loop", "a circle of events that comes round again"], example: { jp: "हर साल वही चक्र चलता है, बारिश, उपज, बाज़ार, और फिर बारिश।", en: "The same cycle runs every year — rain, yield, market, and then rain again." }, drill: { jp: "यह चक्र कभी नहीं रुकता", en: "This cycle never stops" }, hint: "CHAK-RA, masculine: च, then क with र stacked. Literally a wheel. ⚠️ Carded 'a recurring cycle' and not 'a cycle', because साइकिल, a bicycle (unit 9), already owns that gloss — the loanword got there first. Not पहिया, a wheel (unit 33), which is the object." },
        { id: "hi-u66l1-niyamit", type: "vocab", front: "नियमित", reading: "niyamit", meaning: "done at regular intervals", accept: ["regular", "at set intervals", "kept to a routine"], example: { jp: "नियमित पढ़ाई से ज़्यादा फ़ायदा होता है, एक दिन में सब पढ़ने से नहीं।", en: "Regular study gives more benefit than reading everything in one day." }, drill: { jp: "नियमित काम से नतीजा अच्छा आता है", en: "Regular work brings a good result" }, hint: "NI-YA-MIT, INVARIANT: नियमित काम, नियमित जाँच. Built on नियम, a rule (unit 32) — literally 'ruled', brought under a rule. ⚠️ Not हमेशा, always (unit 8), and not लगातार, continuously (unit 38): नियमित means at EVEN INTERVALS, with gaps in between, which is exactly what spaced study is." },
      ],
    },
    {
      id: "hi-u66l2",
      unit: 66,
      lesson: 2,
      title: "Framework and arrangement",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Describe the framework a thing is built on, the orderly arrangement that keeps it going and the system behind it, and talk about management, running an operation, and coordinating two sides.",
      items: [
        { id: "hi-u66l2-dhaanchaa", type: "vocab", front: "ढाँचा", reading: "dhaanchaa", meaning: "a framework", accept: ["the skeleton of a thing", "a structure", "the frame a thing is built on"], example: { jp: "पूरी किताब का ढाँचा पहले बनाओ, लिखना उसके बाद आसान हो जाएगा।", en: "Make the framework of the whole book first; writing will become easy after that." }, drill: { jp: "पहले पूरी किताब का ढाँचा बनाओ", en: "First make the framework of the whole book" }, hint: "DHAAN-CHAA, masculine — and the -आ follows the rule for once. ⚠️ Opens with RETROFLEX ढ (tongue curled back, with a puff of air), merged to dh in the reading (unit 1 §1b), and the ँ before च reads n. Literally the frame of a building or a body; Hindi uses it for the shape of anything planned." },
        { id: "hi-u66l2-vyavasthaa", type: "vocab", front: "व्यवस्था", reading: "vyavasthaa", meaning: "an orderly arrangement", accept: ["things put in good order", "an arrangement made", "a setting-up of order"], example: { jp: "बैठने की व्यवस्था अच्छी थी, इसलिए सबको सब कुछ सुनाई दिया।", en: "The seating arrangement was good, so everyone could hear everything." }, drill: { jp: "खाने की व्यवस्था हो गई", en: "The arrangement for food has been made" }, hint: "VYA-VAS-THAA — ⚠️ FEMININE despite the -ा, and **one of the two likeliest gender errors in the unit**: व्यवस्था अच्छी थी, not अच्छा. The व्य is व with य stacked, and स्था is स with थ stacked. ⚠️ Not इंतज़ाम (unit 19), which this course glosses 'an arrangement made in advance' — a व्यवस्था is the standing order of things, not one booking." },
        { id: "hi-u66l2-pranaalii", type: "vocab", front: "प्रणाली", reading: "pranaalii", meaning: "a system", accept: ["a worked-out way of running something", "an organised method", "a working scheme"], example: { jp: "नई प्रणाली में हर काम का ब्यौरा अपने आप लिखा जाता है।", en: "In the new system the breakdown of details for every job gets written automatically." }, drill: { jp: "नई प्रणाली में सब अपने आप होता है", en: "In the new system everything happens automatically" }, hint: "PRA-NAA-LII — FEMININE, and -ी makes it predictable. RETROFLEX ण merged to n. ⚠️ The three words in this lesson are a ladder: a ढाँचा is the shape, a व्यवस्था is things being in order, a प्रणाली is a designed MACHINE for doing it — a school system, a tax system." },
        { id: "hi-u66l2-prabandh", type: "vocab", front: "प्रबंध", reading: "prabandh", meaning: "management", accept: ["the running of an organisation", "the managing of something", "the handling of a concern"], example: { jp: "काम अच्छा था, पर प्रबंध कमज़ोर था और इसलिए समय निकल गया।", en: "The work was good, but the management was weak and so the time ran out." }, drill: { jp: "इस दफ़्तर का प्रबंध कमज़ोर है", en: "This office's management is weak" }, hint: "PRA-BANDH, masculine. The ं reads n before ध (unit 1 §1). ⚠️ **This is the abstract noun ONLY. प्रबंधक, the manager, belongs to unit 96 and is NOT taught here** — unit 61 §B9 draws that line, and it is why this unit cards no job titles at all. प्रबंध करना is to arrange or manage something." },
        { id: "hi-u66l2-sanchaalan", type: "vocab", front: "संचालन", reading: "sanchaalan", meaning: "running an operation", accept: ["the day-to-day operating of something", "the operating of a thing", "keeping something going"], example: { jp: "मशीन का संचालन आसान है, पर उसकी मरम्मत कोई नहीं जानता।", en: "Operating the machine is easy, but nobody knows how to repair it." }, drill: { jp: "इस दुकान का संचालन वह करता है", en: "He runs the operation of this shop" }, hint: "SAN-CHAA-LAN, masculine, with the ं reading n before च. चलाना, to drive (unit 29), is the everyday verb; संचालन is the formal noun — of a machine, a meeting, a programme. ⚠️ प्रबंध above is DECIDING how a thing runs; संचालन is actually running it day to day." },
        { id: "hi-u66l2-samanvay", type: "vocab", front: "समन्वय", reading: "samanvay", meaning: "coordination", accept: ["two sides working in step", "bringing things into step", "working together in order"], example: { jp: "दोनों गुटों में समन्वय नहीं था, इसलिए एक ही काम दो बार हुआ।", en: "There was no coordination between the two factions, so the same work happened twice." }, drill: { jp: "समन्वय के बिना काम नहीं होगा", en: "Without coordination the work will not happen" }, hint: "SA-MAN-VAY, masculine. The न्व is न with व stacked. Built on सम, 'equal' — the same सम in समानता and समतुल्य (unit 63). ⚠️ Not समझौता, which is agreeing to terms: समन्वय is two parties who already agree managing to act in step, and its absence is why work gets done twice." },
      ],
    },
    {
      id: "hi-u66l3",
      unit: 66,
      lesson: 3,
      title: "How good, how much",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about quality and the standard a thing has to meet, name efficiency and capacity, say a system is running smoothly, and call for a checking-over.",
      items: [
        { id: "hi-u66l3-gunvattaa", type: "vocab", front: "गुणवत्ता", reading: "gunvattaa", meaning: "quality", accept: ["how good a thing is made", "the standard of its make", "how well something is made"], example: { jp: "कीमत कम है, पर गुणवत्ता भी कम है, और एक साल में कपड़ा खराब हो जाएगा।", en: "The price is low, but the quality is low too, and in a year the cloth will go bad." }, drill: { jp: "कीमत कम है और गुणवत्ता भी कम", en: "The price is low and the quality is low too" }, hint: "GUN-VAT-TAA — ⚠️ FEMININE, like every -ता abstract (unit 61 §B6). ⚠️ TWO MERGED CONTRASTS IN ONE WORD: the ण is RETROFLEX n and the त्त is a doubled DENTAL t, and unit 1 §1b flattens both — gunvattaa. Built on गुण, an inherent quality (unit 68), which is the countable thing; गुणवत्ता is the overall standard." },
        { id: "hi-u66l3-maanak", type: "vocab", front: "मानक", reading: "maanak", meaning: "a standard to meet", accept: ["a benchmark", "a required level", "the level a thing must reach"], example: { jp: "हर कारखाने को यही मानक मानना पड़ता है, वरना कपड़ा बिक नहीं सकता।", en: "Every factory has to accept this same standard, or else the cloth cannot be sold." }, drill: { jp: "यह काम मानक से नीचे है", en: "This work is below the standard" }, hint: "MAA-NAK, masculine. Built on मानना, to accept (unit 26) — literally what is accepted. ⚠️ Not नियम, a rule (unit 32): a नियम says what you must DO, a मानक says what the RESULT has to reach. And not पैमाना (unit 63), which is the scale you measure on rather than the mark you must hit." },
        { id: "hi-u66l3-dakshtaa", type: "vocab", front: "दक्षता", reading: "dakshtaa", meaning: "efficiency", accept: ["skill at getting a thing done", "competence", "getting more done with less"], example: { jp: "नई प्रणाली से दक्षता बढ़ी और वही काम आधे समय में होने लगा।", en: "Efficiency rose with the new system and the same work started getting done in half the time." }, drill: { jp: "उसकी दक्षता सबसे ज़्यादा है", en: "His efficiency is the highest" }, hint: "DAKSH-TAA — FEMININE, another -ता abstract. The क्ष is one of unit 6's three conjuncts. ⚠️ Not हुनर, a skill (unit 32): a हुनर is a craft you possess, दक्षता is how little waste there is in how you work. The word a report on a factory or an office uses." },
        { id: "hi-u66l3-kshamtaa", type: "vocab", front: "क्षमता", reading: "kshamtaa", meaning: "capacity", accept: ["how much a thing can take", "the amount a thing can hold", "what someone is able to do"], example: { jp: "इस कमरे की क्षमता चालीस लोगों की है, और आज साठ आ गए।", en: "This room's capacity is of forty people, and today sixty turned up." }, drill: { jp: "इस बस की क्षमता कम है", en: "This bus has a small capacity" }, hint: "KSHAM-TAA — FEMININE, and it OPENS with the क्ष conjunct (unit 6), read ksh. ⚠️ Not काबिल, capable (unit 32), which is about a person being up to a job: क्षमता is a measurable ceiling — of a room, a machine, a battery, or a person's workload." },
        { id: "hi-u66l3-suchaaru", type: "vocab", front: "सुचारु", reading: "suchaaru", meaning: "running smoothly", accept: ["going without a hitch", "going along easily", "with nothing out of place"], example: { jp: "सब कुछ सुचारु चल रहा था, फिर बिजली चली गई।", en: "Everything was running smoothly, then the electricity went." }, drill: { jp: "काम अब सुचारु हो गया", en: "The work is running smoothly now" }, hint: "SU-CHAA-RU — ⚠️ INVARIANT despite the -ु: सुचारु व्यवस्था, सुचारु काम, never सुचारी. सु- is a 'good' prefix. ⚠️ Mostly used adverbially with चलना — सुचारु रूप से चलना — and it is the word a notice uses to say a service is normal." },
        { id: "hi-u66l3-niriikshan", type: "vocab", front: "निरीक्षण", reading: "niriikshan", meaning: "a checking-over", accept: ["a formal looking-at", "an inspection", "an official going-round"], example: { jp: "अफ़सर ने पूरे कारखाने का निरीक्षण किया और दो गलती लिखीं।", en: "The officer did a checking-over of the whole factory and wrote down two mistakes." }, drill: { jp: "निरीक्षण कल सुबह होगा", en: "The checking-over will be tomorrow morning" }, hint: "NI-RIIK-SHAN, masculine, with the क्ष conjunct and a RETROFLEX ण, both merged. ⚠️ Carded 'a checking-over' and not 'an inspection', because जाँच (unit 35) owns that gloss. ⚠️ **निरीक्षक, the inspector, is unit 96's and is NOT taught here** — this unit cards no job titles (unit 61 §B9)." },
      ],
    },
    {
      id: "hi-u66l4",
      unit: 66,
      lesson: 4,
      title: "The load of the work",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about production and the planning of work, name the course of action taken and the template it follows, complain about a workload, and say what post someone holds.",
      items: [
        { id: "hi-u66l4-utpaadan", type: "vocab", front: "उत्पादन", reading: "utpaadan", meaning: "production", accept: ["the making of goods", "the turning-out of goods", "what is produced"], example: { jp: "इस साल कपड़े का उत्पादन बढ़ा, पर गुणवत्ता पर असर पड़ा।", en: "This year cloth production rose, but there was an effect on quality." }, drill: { jp: "उत्पादन अब पहले से ज़्यादा है", en: "Production is more now than before" }, hint: "UT-PAA-DAN, masculine, all DENTAL त and द. Shares its उत्- root with उत्पत्ति, an origin (unit 62) — a bringing forth. ⚠️ Not उपज (unit 62), which is what a FIELD yields: उत्पादन is what a factory or an industry turns out, and it is the word an economy is measured by." },
        { id: "hi-u66l4-niyojan", type: "vocab", front: "नियोजन", reading: "niyojan", meaning: "planning of work", accept: ["the laying-out of a programme", "the planning of how work will go", "arranging work in advance"], example: { jp: "अच्छे नियोजन के बिना हर चरण पर दिक्कत आती है।", en: "Without good planning a hitch comes at every step." }, drill: { jp: "अच्छे नियोजन के बिना दिक्कत आती है", en: "Without good planning a hitch comes" }, hint: "NI-YO-JAN, masculine. Formal, and the word a government or a company uses — परिवार नियोजन is family planning. ⚠️ Narrower than योजना, a plan (unit 72): a योजना is the plan itself, नियोजन is the ACT of laying work out in order, which is why it sits in this unit and not that one." },
        { id: "hi-u66l4-kaaryvaahii", type: "vocab", front: "कार्यवाही", reading: "kaaryvaahii", meaning: "a course of action", accept: ["proceedings taken", "action taken", "the steps formally taken"], example: { jp: "शिकायत के बाद दफ़्तर ने कार्यवाही शुरू की, पर नतीजा अभी नहीं आया।", en: "After the complaint the office started a course of action, but the result has not come yet." }, drill: { jp: "शिकायत के बाद कार्यवाही शुरू हुई", en: "After the complaint a course of action started" }, hint: "KAARY-VAA-HII — ⚠️ FEMININE, -ी and predictable. कार्य is work and वाही is 'carrying' — literally the carrying forward of a matter. ⚠️ The word for the formal steps an office takes AFTER something goes wrong, and also for the minutes of a meeting. कार्यवाही करना is to take action." },
        { id: "hi-u66l4-praaruup", type: "vocab", front: "प्रारूप", reading: "praaruup", meaning: "a template", accept: ["a set form to fill in", "a format", "a blank form to go by"], example: { jp: "अर्ज़ी का प्रारूप दफ़्तर से मिलता है, अपने मन से मत लिखो।", en: "The template for the application is available from the office; do not write it out of your own head." }, drill: { jp: "प्रारूप के बिना अर्ज़ी मत लिखो", en: "Do not write the application without the template" }, hint: "PRAA-ROOP, masculine, with the long oo of ऊ. रूप is a form or shape. ⚠️ Carded 'a template' rather than 'a draft', because **मसौदा, the draft, is unit 93's** (block 3) — unit 61 §B9. A प्रारूप is the blank shape; a मसौदा is a first attempt at filling it." },
        { id: "hi-u66l4-kaaryabhaar", type: "vocab", front: "कार्यभार", reading: "kaaryabhaar", meaning: "a workload", accept: ["how much work one is carrying", "the load of work on someone", "the amount of work given"], example: { jp: "उसका कार्यभार इतना बढ़ गया कि छुट्टी लेना नामुमकिन हो गया।", en: "His workload grew so much that taking leave became impossible." }, drill: { jp: "उसका कार्यभार बहुत बढ़ गया है", en: "His workload has grown a great deal" }, hint: "KAAR-YA-BHAAR, masculine. कार्य is work and भार is a load — the same भार inside भारी, heavy (unit 19). ⚠️ Not बोझ, a load (unit 33), which is a physical weight; a कार्यभार is the quantity of work assigned to one person, and it is what a transfer letter hands over." },
        { id: "hi-u66l4-pad", type: "vocab", front: "पद", reading: "pad", meaning: "a post held", accept: ["a position in an organisation", "an office someone holds", "a place on the staff"], example: { jp: "वह इस पद पर पाँच साल रहा और उसके बाद तरक्की मिली।", en: "He was in this post for five years and after that got a promotion." }, drill: { jp: "इस पद के लिए कोई नहीं आया", en: "Nobody came for this post" }, hint: "PAD, masculine, one syllable, consonant-final, with DENTAL द. A SLOT in an organisation — one that stays when the person leaves. ⚠️ **The job TITLE that fills the slot is unit 96's** (unit 61 §B9); पद is the slot. Not नौकरी, a job (unit 34), which is the employment, and not दर्जा, a degree (unit 47)." },
      ],
    },
  ],
};
