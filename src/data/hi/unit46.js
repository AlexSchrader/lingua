// HI Unit 46 — टूट गया, कर दिया ("It broke, he did it") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 2 (u41–u50). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
// SLOT KEPT AND RETITLED. The scaffold called it "Grammar 4 — compound and linked
// clauses"; unit31.js §A5 and unit1.js §6 both assign the COMPOUND (VECTOR) VERBS here
// by name. The LINKED-CLAUSES half of the old title is spent — u39 took the joining
// words and the correlative pairs (हालाँकि, जबकि, चूँकि, ताकि, वरना, बल्कि, उतना) — so
// this unit is the compounds, which is the half that had nobody.
//
// ═════════════════════════════════════════════════════════════════════════════
// THE RULE THIS UNIT OWES. unit31.js §A5 is explicit that the vector compounds are
// ALREADY MET — in eight examples across u35–u40, because Hindi cannot be written
// naturally without हो गया and ले लो — and that "what u46 owes is the RULE, not the
// first sighting". Here it is, and it is taught in the hints and examples of all four
// lessons, the same construction-with-no-front mechanism §A3 used for सकना.
// ═════════════════════════════════════════════════════════════════════════════
//
// R1. THE SHAPE. A compound is the BARE STEM of the main verb plus a second verb that
//     carries all the grammar. The main verb loses its ending completely:
//         टूट गया · कर दिया · खा लिया · हँस पड़ा · काँप उठा
//     The bare stem is in scope from u31 (§A6 added it to `derive()`), and the second
//     verb is always one of a handful the course taught in A1. So the learner already
//     owns every piece; what is new is WHICH ONE TO PICK.
//
// R2. THE VECTOR TAKES THE TENSE AND THE AGREEMENT, NOT THE MAIN VERB. उसने किताब पढ़
//     ली — ली is feminine because किताब is, and पढ़ never changes. Get this backwards
//     and you produce पढ़ी ली, which is not Hindi.
//
// R3. WHICH VECTOR, AND WHAT EACH ADDS — the actual content of this unit:
//     • जाना   the change is COMPLETE and the subject is now different, and there is no
//              going back. टूट गया, सो गया, खो गया, भूल गया, मर गया, बन गया. Overwhelmingly
//              with INTRANSITIVE verbs, which is why lesson 1 is six of them.
//     • लेना   the doer did it FOR THEMSELVES and got the benefit. खा लिया, पढ़ ली,
//              माँग लिया, सँभाल लिया, जुटा लिया.
//     • देना   the action went to SOMEBODY ELSE, or was decisive and final. बता दिया,
//              सौंप दिया, लौटा दी, चुका दिया, हटा दिया. Lesson 2 is the लेना/देना contrast,
//              which is the one an English speaker cannot hear at all.
//     • पड़ना  it happened SUDDENLY and unwilled. हँस पड़ा, रो पड़ी, गिर पड़ा.
//     • उठना  it BURST out of the subject. काँप उठा, चिल्ला उठा, बोल उठा.
//
// R4. ⚠️ A COMPOUND IS NOT USED IN THE NEGATIVE. उसने खाना नहीं खाया — never नहीं खा
//     लिया. The vector asserts that the thing definitely happened, so negating it
//     contradicts the vector. This is the single commonest learner error and no
//     sentence in this unit breaks it.
//
// R5. ⚠️ THE ने-ERGATIVE STILL APPLIES, and it is decided by the MAIN verb. उसने
//     किताब पढ़ ली takes ने because पढ़ना is transitive; गिलास टूट गया takes none
//     because टूटना is not. u31's three rules are unchanged by the compound.
//
// ⚠️ THERE IS NO FRONT FOR ANY VECTOR, AND THAT IS NOT A GAP. जाना, लेना, देना, पड़ना
// (this unit) and उठना are all already cards — u12 and u46 — so carding them again
// would be one lexeme on two mastery tracks, the बड़ा/बड़ी defect §6 bans. What this
// unit cards instead is 24 VERBS THAT ARE ALMOST ALWAYS SAID WITH A VECTOR, so every
// example is a worked instance of R3.
//
// ⚠️ TWELVE OF THE 24 ARE THE MISSING HALF OF A TRANSITIVE/INTRANSITIVE PAIR, and the
// corpus's own rule is that the two halves live in DIFFERENT units — उठना u12 / उठाना
// u31, रुकना u12 / रोकना u31, गिरना u24 / गिराना u31, बचना u24 / बचाना u31. This unit
// obeys it: टूटना against u26's तोड़ना, खुलना against u26's खोलना, बनना against u12's
// बनाना, बिकना against u18's बेचना, मिटना against u49's मिटाना, छूटना against u26's
// छोड़ना, लौटाना against u12's लौटना, मुड़ना against the noun मोड़ (u29l4). ⚠️ AND NO
// PAIR SITS IN ONE UNIT: मिटना is here and मिटाना is u49 for exactly that reason.
// Every gloss differs in a WORD and not in a parenthetical, per §9 — "to come apart"
// against "to break", "to come open" against "to open", "to go for a price" against
// "to sell" — and zero of them collide through `normalizeMeaning`, measured.
//
// ⚠️ EVERY VERB CARD USES §A2's SPLIT, unchanged: the EXAMPLE carries the compound
// (which contains a bare stem and a conjugated vector, never the infinitive), and the
// DRILL carries the INFINITIVE in its verbal-noun use — "X करना मुश्किल है" — because a
// drill must contain its front verbatim and route `canCloze` + `canSentence`. Measured
// with the real router: 24/24 route both.
//
// ⚠️ ONE NEAR-COLLISION THAT IS WORTH THE WHOLE UNIT: पड़ना parnaa against पढ़ना
// parhnaa (u4l1, to read). One dot under the letter, and §1(c) makes ड़ read r while
// ढ़ reads rh. Both are extremely common. Named in पड़ना's hint.
// RETROFLEX/DENTAL (§1b): checked against all 1080 readings. टालना taalnaa has u15's
// ताला taalaa beside it and no dental counterpart; टूटना, टकराना, निपटाना, जुटाना,
// समेटना, मिटना and फिसलना have none either. The doubling hatch fires nowhere here.
export const HI_UNIT46 = {
  id: "hi-u46",
  lang: "hi",
  title: "टूट गया, कर दिया",
  order: 46,
  stage: "a2",
  lessons: [
    {
      id: "hi-u46l1",
      unit: 46,
      lesson: 1,
      title: "जाना — it is done and it cannot be undone",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say a thing broke, opened, sold or got lost by itself, using जाना to mark that the change is complete.",
      items: [
        { id: "hi-u46l1-tuutnaa", type: "vocab", front: "टूटना", reading: "tuutnaa", meaning: "to come apart", accept: ["to snap in two", "to break of itself"], example: { jp: "गिरते ही गिलास टूट गया।", en: "The glass broke the moment it fell." }, drill: { jp: "गिलास टूटना आसान होता है", en: "A glass breaks easily" }, hint: "TUUT-NAA, RETROFLEX ट twice, and INTRANSITIVE — the glass does it to itself, so NO ने: गिलास टूटा. तोड़ना, from the activities unit, is what YOU do to it: उसने गिलास तोड़ा. Nearly always said with जाना, because a broken glass stays broken." },
        { id: "hi-u46l1-khulnaa", type: "vocab", front: "खुलना", reading: "khulnaa", meaning: "to come open", accept: ["to open of itself", "to be undone"], example: { jp: "हवा से दरवाज़ा खुल गया।", en: "The door came open in the wind." }, drill: { jp: "यह ताला खुलना मुश्किल है", en: "This lock is hard to open" }, hint: "KHUL-NAA, INTRANSITIVE and the twin of खोलना, to open — दरवाज़ा खुला against उसने दरवाज़ा खोला. A दुकान खुलती है in the morning, and a राज़ खुल जाता है the moment somebody tells it." },
        { id: "hi-u46l1-bannaa", type: "vocab", front: "बनना", reading: "bannaa", meaning: "to turn into something", accept: ["to end up as", "to get made"], example: { jp: "वह पढ़कर डॉक्टर बन गया।", en: "He studied and became a doctor." }, drill: { jp: "डॉक्टर बनना बहुत मुश्किल है", en: "Becoming a doctor is very difficult" }, hint: "BAN-NAA, INTRANSITIVE, with the doubled न of §1's gemination, and the twin of बनाना, to prepare: खाना बना against माँ ने खाना बनाया. With जाना it is the ordinary way to say somebody became something — बन गया." },
        { id: "hi-u46l1-biknaa", type: "vocab", front: "बिकना", reading: "biknaa", meaning: "to go for a price", accept: ["to get sold", "to be on sale"], example: { jp: "पूरा सामान एक दिन में बिक गया।", en: "All the goods sold in one day." }, drill: { jp: "यह गाड़ी बिकना मुश्किल है", en: "This car is hard to sell" }, hint: "BIK-NAA, INTRANSITIVE and the twin of बेचना, to sell, from the money unit: सामान बिका against दुकानदार ने सामान बेचा. ⚠️ Hindi says the THING sells itself, and the price takes में — यह सौ रुपये में बिका." },
        { id: "hi-u46l1-mitnaa", type: "vocab", front: "मिटना", reading: "mitnaa", meaning: "to be wiped out", accept: ["to get erased", "to disappear for good"], example: { jp: "पानी से सब कुछ मिट गया।", en: "Everything was wiped out by the water." }, drill: { jp: "पुरानी बात मिटना आसान नहीं", en: "An old matter is not easy to wipe out" }, hint: "MIT-NAA, INTRANSITIVE, retroflex ट, and the twin of मिटाना, to erase, which the continuous unit cards — deliberately in a different unit, so one lexeme never has two cards in one place. Writing मिटती है; a whole city मिट जाता है in a history book." },
        { id: "hi-u46l1-chhuutnaa", type: "vocab", front: "छूटना", reading: "chhuutnaa", meaning: "to be left behind", accept: ["to get missed", "to slip away"], example: { jp: "जल्दी में मेरा बैग घर पर छूट गया।", en: "In the rush my bag got left at home." }, drill: { jp: "ट्रेन छूटना बहुत बुरा होता है", en: "Missing the train is very bad" }, hint: "CHHUUT-NAA, INTRANSITIVE and the twin of छोड़ना, to leave: बैग छूटा against उसने बैग छोड़ा. ⚠️ Of a train it means the train left WITHOUT you — ट्रेन छूट गई is 'I missed the train', and the train is the subject." },
      ],
    },
    {
      id: "hi-u46l2",
      unit: 46,
      lesson: 2,
      title: "लेना for me, देना for you",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Mark who an action was for — लेना when you kept the benefit, देना when it went to somebody else.",
      items: [
        { id: "hi-u46l2-maangnaa", type: "vocab", front: "माँगना", reading: "maangnaa", meaning: "to ask for", accept: ["to request something", "to demand"], example: { jp: "उसने पिता से पैसे माँग लिए।", en: "He asked his father for money and got it." }, drill: { jp: "मदद माँगना बुरा नहीं है", en: "Asking for help is not a bad thing" }, hint: "MAANG-NAA, TRANSITIVE so the past takes ने, with the ँ of unit 5. With लेना the asker GOT what he asked for — माँग लिया. पूछना is to ask a question; माँगना is to ask FOR a thing." },
        { id: "hi-u46l2-saumpnaa", type: "vocab", front: "सौंपना", reading: "saumpnaa", meaning: "to entrust", accept: ["to hand over formally", "to put in someone's charge"], example: { jp: "मालिक ने पूरा काम उसे सौंप दिया।", en: "The owner handed the whole job over to him." }, drill: { jp: "किसी को काम सौंपना आसान नहीं", en: "Entrusting a job to somebody is not easy" }, hint: "SAUMP-NAA, TRANSITIVE, with the औ mātrā and the ं before प read as m. ⚠️ Nearly always with देना — सौंप दिया — because handing over is BY DEFINITION for somebody else, which is exactly what देना marks." },
        { id: "hi-u46l2-lautaanaa", type: "vocab", front: "लौटाना", reading: "lautaanaa", meaning: "to give something back", accept: ["to return an object", "to hand back"], example: { jp: "मैंने किताब उसे कल लौटा दी।", en: "I gave the book back to him yesterday." }, drill: { jp: "पैसे लौटाना ज़रूरी होता है", en: "Giving money back matters" }, hint: "LAU-TAA-NAA, TRANSITIVE and the twin of लौटना, to return, from the activities unit — वह लौटा, he came back, against उसने किताब लौटाई, he gave the book back. देना again: लौटा दिया. Note दी agrees with किताब, not with मैंने — that is rule R2." },
        { id: "hi-u46l2-chukaanaa", type: "vocab", front: "चुकाना", reading: "chukaanaa", meaning: "to pay off", accept: ["to settle a debt", "to clear what is owed"], example: { jp: "उसने पूरा कर्ज़ चुका दिया।", en: "He paid off the whole debt." }, drill: { jp: "कर्ज़ चुकाना बहुत मुश्किल है", en: "Paying off a debt is very difficult" }, hint: "CHU-KAA-NAA, TRANSITIVE. कर्ज़ चुकाना is to clear a debt, कीमत चुकाना to pay a price. With देना it is gone for good — चुका दिया. भरना is what you do to a form; चुकाना is what you do to a bill." },
        { id: "hi-u46l2-dilaanaa", type: "vocab", front: "दिलाना", reading: "dilaanaa", meaning: "to get something for someone", accept: ["to have something given", "to arrange for someone to receive"], example: { jp: "पिता ने बेटी को नई साइकिल दिला दी।", en: "The father got his daughter a new bicycle." }, drill: { jp: "बच्चों को किताब दिलाना ज़रूरी है", en: "Getting books for children matters" }, hint: "DI-LAA-NAA, TRANSITIVE — the second causative of देना: देना is to give, दिलाना is to CAUSE somebody to be given. ⚠️ Its bare stem is दिल, which is also the word for the heart from the body unit: a different word entirely." },
        { id: "hi-u46l2-nibhaanaa", type: "vocab", front: "निभाना", reading: "nibhaanaa", meaning: "to fulfil", accept: ["to carry out a duty", "to keep up an obligation"], example: { jp: "उसने अपना फ़र्ज़ ठीक निभाया।", en: "He carried out his duty properly." }, drill: { jp: "अपना फ़र्ज़ निभाना ज़रूरी है", en: "Carrying out your duty matters" }, hint: "NI-BHAA-NAA, TRANSITIVE, aspirated भ. फ़र्ज़ निभाना, वादा निभाना, रिश्ता निभाना — a duty, a promise or a relationship kept up over time. मानना is to accept a thing once; निभाना is to keep doing it." },
      ],
    },
    {
      id: "hi-u46l3",
      unit: 46,
      lesson: 3,
      title: "पड़ना and उठना — the sudden ones",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Mark an action as sudden and unwilled — हँस पड़ा, काँप उठा — and use the six verbs that live in that frame.",
      items: [
        { id: "hi-u46l3-parnaa", type: "vocab", front: "पड़ना", reading: "parnaa", meaning: "to fall over", accept: ["to land and stay there", "to lie where it landed"], example: { jp: "यह सुनकर वह हँस पड़ा।", en: "Hearing this he burst out laughing." }, drill: { jp: "किसी पर बोझ पड़ना ठीक नहीं", en: "A load falling on somebody is not right" }, hint: "PAR-NAA, INTRANSITIVE, ड़ read r — ⚠️ and NOT पढ़ना parhnaa, to read, which differs by ONE DOT. Two jobs: to fall or lie (बोझ पड़ा), and as the VECTOR for something sudden and unwilled — हँस पड़ा, रो पड़ी. It also builds obligation: जाना पड़ता है, I have to go." },
        { id: "hi-u46l3-jhuknaa", type: "vocab", front: "झुकना", reading: "jhuknaa", meaning: "to bend down", accept: ["to stoop", "to bow"], example: { jp: "वह पैर छूने के लिए झुक गया।", en: "He bent down to touch her feet." }, drill: { jp: "बोझ उठाने में झुकना पड़ता है", en: "You have to bend to lift a load" }, hint: "JHUK-NAA, INTRANSITIVE, so no ने. To bend the body, and to give in — वह किसी के सामने नहीं झुकता, he bows to nobody. झुकाना, to bend something else, is not carded in this course." },
        { id: "hi-u46l3-murnaa", type: "vocab", front: "मुड़ना", reading: "murnaa", meaning: "to turn around", accept: ["to turn a corner", "to face the other way"], example: { jp: "गाड़ी चौराहे पर बाएँ मुड़ गई।", en: "The car turned left at the crossroads." }, drill: { jp: "यहाँ से दाएँ मुड़ना ठीक है", en: "Turning right from here is fine" }, hint: "MUR-NAA, INTRANSITIVE, ड़ read r. Of a road, a vehicle or a person. The noun मोड़, a turning, is already taught in the travel unit — same root, and this is its verb." },
        { id: "hi-u46l3-phisalnaa", type: "vocab", front: "फिसलना", reading: "phisalnaa", meaning: "to skid", accept: ["to slide on something", "to lose your footing"], example: { jp: "गीले फ़र्श पर उसका पैर फिसल गया।", en: "His foot slipped on the wet floor." }, drill: { jp: "बारिश में फिसलना आसान होता है", en: "Slipping in the rain is easy" }, hint: "PHI-SAL-NAA, INTRANSITIVE, ⚠️ with PLAIN फ read ph — फ़ with the dot underneath is the f, and this word does not have it. Of a foot, a vehicle or a wet hand. Usually with जाना: फिसल गया." },
        { id: "hi-u46l3-takraanaa", type: "vocab", front: "टकराना", reading: "takraanaa", meaning: "to collide", accept: ["to crash into something", "to run into"], example: { jp: "दो गाड़ियाँ पुल पर टकरा गईं।", en: "Two cars collided on the bridge." }, drill: { jp: "किसी से टकराना अच्छा नहीं होता", en: "Colliding with somebody is not good" }, hint: "TAK-RAA-NAA, retroflex ट, and what you hit takes से: दीवार से टकराना. Vehicles, people in a crowd, and two plans that clash. NO ने — nothing is being done TO the wall." },
        { id: "hi-u46l3-kaanpnaa", type: "vocab", front: "काँपना", reading: "kaanpnaa", meaning: "to tremble", accept: ["to shiver", "to shake with fear"], example: { jp: "सर्दी में उसका पूरा शरीर काँप उठा।", en: "His whole body began to shake in the cold." }, drill: { jp: "डर से काँपना बुरा लगता है", en: "Trembling with fear feels bad" }, hint: "KAANP-NAA, INTRANSITIVE, with the ँ of unit 5 read as n. With cold, with fear, with age. ⚠️ Its vector is उठना — काँप उठा — which is the vector for something that BURSTS out of you rather than merely happening." },
      ],
    },
    {
      id: "hi-u46l4",
      unit: 46,
      lesson: 4,
      title: "Dealing with it — six verbs that take a vector",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Move a thing aside, take charge of it, put it off, settle it, scrape it together or tidy it away — each with the right vector.",
      items: [
        { id: "hi-u46l4-hataanaa", type: "vocab", front: "हटाना", reading: "hataanaa", meaning: "to move something aside", accept: ["to remove", "to shift out of the way"], example: { jp: "उसने मेज़ दरवाज़े से हटा दी।", en: "He moved the table away from the door." }, drill: { jp: "यह कचरा हटाना ज़रूरी है", en: "Clearing this rubbish away matters" }, hint: "HA-TAA-NAA, TRANSITIVE so the past takes ने, all DENTAL. Its intransitive twin हटना, to move aside, is not carded. With देना it is out of the way for good — हटा दिया, and दी agrees with मेज़." },
        { id: "hi-u46l4-sambhaalnaa", type: "vocab", front: "सँभालना", reading: "sambhaalnaa", meaning: "to look after", accept: ["to take charge of", "to steady something"], example: { jp: "बड़ी बहन ने पूरा घर सँभाल लिया।", en: "The elder sister took charge of the whole house." }, drill: { jp: "पूरा घर सँभालना मुश्किल होता है", en: "Taking charge of a whole house is difficult" }, hint: "SAM-BHAAL-NAA, TRANSITIVE, with the ँ over the स and an aspirated भ. To take charge of a house, a shop or a child, and to steady something about to fall: सँभालो! — careful. With लेना she took it on HERSELF." },
        { id: "hi-u46l4-taalnaa", type: "vocab", front: "टालना", reading: "taalnaa", meaning: "to put off", accept: ["to postpone", "to push a thing later"], example: { jp: "उसने अपना फ़ैसला अगले हफ़्ते तक टाल दिया।", en: "He put his decision off until next week." }, drill: { jp: "ज़रूरी काम टालना ठीक नहीं", en: "Putting off important work is not right" }, hint: "TAAL-NAA, TRANSITIVE, RETROFLEX ट — ⚠️ taalnaa against ताला taalaa, a lock, from the house unit: only §1(b)'s retroflex reading and the ending keep them apart. बात टालना is to dodge a question; काम टालना is to postpone a job." },
        { id: "hi-u46l4-niptaanaa", type: "vocab", front: "निपटाना", reading: "niptaanaa", meaning: "to settle a matter", accept: ["to get something finished", "to dispose of a job"], example: { jp: "उसने सुबह ही पूरा हिसाब निपटा दिया।", en: "He settled the whole account first thing in the morning." }, drill: { jp: "यह मुकदमा निपटाना आसान नहीं", en: "Settling this court case is not easy" }, hint: "NI-PTAA-NAA, TRANSITIVE, retroflex ट. To finish a thing off and be rid of it — a job, a मुकदमा, a queue of people. Its intransitive twin निपटना is not carded. With देना: निपटा दिया." },
        { id: "hi-u46l4-jutaanaa", type: "vocab", front: "जुटाना", reading: "jutaanaa", meaning: "to muster", accept: ["to gather together", "to scrape up"], example: { jp: "उसने मुकदमे के लिए पैसे जुटा लिए।", en: "He scraped together money for the court case." }, drill: { jp: "इतने पैसे जुटाना मुश्किल है", en: "Scraping together this much money is difficult" }, hint: "JU-TAA-NAA, TRANSITIVE, retroflex ट. To collect what is scattered — money, people, and हिम्मत: हिम्मत जुटाना, to muster courage. With लेना it is for yourself — जुटा लिए." },
        { id: "hi-u46l4-sametnaa", type: "vocab", front: "समेटना", reading: "sametnaa", meaning: "to gather up", accept: ["to tidy away", "to bundle together"], example: { jp: "माँ ने सब खिलौने समेट दिए।", en: "Mother gathered up all the toys." }, drill: { jp: "पूरा कमरा समेटना बहुत काम है", en: "Tidying a whole room away is a lot of work" }, hint: "SA-MET-NAA, TRANSITIVE, retroflex ट. To gather scattered things into one place — clothes, खिलौने, papers. जुटाना collects what you NEED; समेटना clears what is lying about." },
      ],
    },
  ],
};
