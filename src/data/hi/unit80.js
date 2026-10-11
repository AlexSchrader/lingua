// HI Unit 80 — निष्क्रिय और प्रेरणार्थक ("The passive and the causative") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then §B1–§B7 in
// unit74.js. **This unit closes the last grammar item on Hindi's deferred list.**
//
// 🚨 RETHEMED TITLE ONLY (scaffold: "Grammar 7 — passive, causative, indirect").
// lint hard-errors on that string, so the title is in Devanagari; the THEME is
// kept exactly, because this slot is the one two earlier files pointed at:
//   unit1.js §6, deferred list: "the PASSIVE (किया जाता है) → B1. Three
//   interacting rules on top of the ergative, and no A2 syllabus needs it."
//   unit31.js §A5 repeats it; A2 block 2's unit41.js header confirms "WHAT IS
//   STILL DEFERRED AFTER THIS BLOCK: the PASSIVE → B1 … Block 2 did not re-open
//   it."
// Neither named a unit. **It is this one**, and after it Hindi has no deferred
// grammar left: the ergative closed at u31, ability at u32, the imperfect at u38,
// compounds at u46, the subjunctive and conditionals at u47, the future at u48,
// the continuous at u49, the correlatives at u39 and u23.
//
// ═════════════════════════════════════════════════════════════════════════════
// THE THREE CONSTRUCTIONS, TAUGHT WITH NO FRONT OF THEIR OWN — the mechanism
// unit1.js §6 used for का/के/की/को and §A3 used for सकना.
// ═════════════════════════════════════════════════════════════════════════════
//   1. THE PASSIVE IS PERFECTIVE-STEM + जाना. किया जाता है · बुना जाता है ·
//      लूटा गया · पोंछी जाती है. Every piece is already in scope: the perfective
//      is u31's and जाना is u12's, so the learner can READ it the moment he is
//      told what it is. The l1 and l2 examples are 12 sightings of it.
//      ⚠️ THE AGENT IS NORMALLY ABSENT, and that is the point of it in Hindi:
//      कचरा ज़मीन में दफ़नाया जाता है says who does nothing about who does it.
//      When an agent IS named it takes से — उनसे यह काम नहीं किया गया — and that
//      is in l2's hints.
//      ⚠️ AND THE SECOND, COMMONER USE IS INABILITY: मुझसे यह नहीं खाया गया,
//      "I could not bring myself to eat it". A learner meets this constantly and
//      no A2 unit could explain it, because it needs the passive.
//   2. THE -वाना DOUBLE CAUSATIVE is "to have it done by somebody else", against
//      the -आना causative (A2 u48) which is "to make somebody do it":
//          करना  (do it yourself) → करवाना  (have it done)
//          बनाना (make it)        → बनवाना  (have it made)
//      l3 is six of them. See §B4 in unit74.js for why a causative is NOT a
//      lexeme duplicate: the corpus has taught उठना/उठाना, रुकना/रोकना,
//      गिरना/गिराना and बचना/बचाना in separate units since A1, and `scope-hi.mjs`
//      generates no -वाना, so none of the six was in scope before this unit.
//   3. INDIRECT SPEECH, which the slot's third word names. Hindi does NOT shift
//      the tense the way English does: उसने कहा कि वह आएगा is "he said he WOULD
//      come", with आएगा — the future — left exactly as he said it. कि is FREE
//      (unit1.js) and owned as a front by a u3 glyph card, so there is nothing to
//      card: the rule lives in l4's hints, where four of the six examples use it.
//
// 🚨 EVERY VERB CARD IN THIS UNIT USES unit31.js §A2's SPLIT, AND A PASSIVE UNIT
// CANNOT BE WRITTEN WITHOUT IT. A drill must contain its item's `front` verbatim
// (src/data/lint.js, and `findWholeWord` in src/store/cardRouting.js) and every
// verb front is the -ना infinitive under §5 — but a passive sentence contains
// बुना, not बुनना. So:
//   • `example` carries the PASSIVE or the CAUSATIVE — that is the teaching.
//   • `drill`   carries the INFINITIVE in its verbal-noun use — "X बुनना मुश्किल
//     है" — which §5 records as a natural free-standing Hindi sentence and which
//     cloze and sentence:build can both take apart.
// unit31.js wrote this split for the ergative; it is reused verbatim here.
//
// ⚠️ ONE FRONT WANTED AND REFUSED: **आरोप** ("an accusation") — refused on GLOSS.
// इलज़ाम (u57l2) is "an accusation" and accepts "a charge laid against someone".
// An indirect-speech lesson wanted it and did not get it. NAMED FOR A LATER
// BLOCK, free and unspent: गाड़ना, सींचना, जोतना, निगलना, चबाना, मोड़ना, छुड़ाना,
// चढ़ाना, उतारना, पढ़ाना, धुलवाना, जमानत's neighbours.
//
// ⚠️ NO GENDER IN THIS UNIT: all 24 fronts are VERBS, headworded in the -ना
// infinitive per §5, so §4 has nothing to attach to. ZERO 3rd-PERSON EXCEPTIONS
// are spent — every one of the 24 carries a natural infinitive drill, which is
// the test §5 sets.
// ⚠️ TRANSITIVITY IS NAMED ON EVERY CARD, because the passive only forms on a
// TRANSITIVE verb and all 24 of these are transitive on purpose. ढकना is the one
// a learner may doubt: it is transitive (खाना ढकना), and its intransitive twin
// ढकना-in-the-ने-less sense is not carded.
// RETROFLEX/DENTAL (§1b): three RETROFLEX verbs and no collision — लपेटना
// lapetnaa, लूटना luutnaa and कटवाना katvaanaa carry ट, and ढकना dhaknaa carries
// ढ, with no dental लपेतना / लूतना / कतवाना / धकना anywhere in the corpus.
// पीसना piisnaa, छानना chhaannaa, वसूलना vasuulnaa and पोंछना ponchhnaa are
// DENTAL or non-coronal with no retroflex twin. The doubling hatch fires nowhere.
// ड़ READS r (§1c): निचोड़ना nichornaa, रगड़ना ragarnaa, उड़ाना uraanaa, दौड़ाना
// dauraanaa. GEMINATION: बुनना bunnaa and छानना chhaannaa double, as the spelling
// requires. SUBSTRING TRAPS: checked all six -वाना fronts against their bases and
// **none fires** — बनाना is ब+न+ा+न+ा and बनवाना is ब+न+व+ा+न+ा, so the base is
// not a substring of the causative. Same for करना/करवाना, काटना/कटवाना,
// छापना/छपवाना, माँगना/मँगवाना.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT80 = {
  id: "hi-u80",
  lang: "hi",
  title: "निष्क्रिय और प्रेरणार्थक",
  order: 80,
  stage: "b1",
  lessons: [
    {
      id: "hi-u80l1",
      unit: 80,
      lesson: 1,
      title: "It is done, and nobody is named",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that something is woven, ground, strained, dissolved, wrapped or covered — without naming who does it.",
      items: [
        { id: "hi-u80l1-bunnaa", type: "vocab", front: "बुनना", reading: "bunnaa", meaning: "to weave", accept: ["to knit", "to make cloth on a loom", "to work thread into cloth"], example: { jp: "यह कपड़ा गाँव में हाथ से बुना जाता है।", en: "This cloth is woven by hand in the village." }, drill: { jp: "यह कपड़ा हाथ से बुनना मुश्किल है", en: "This cloth is hard to weave by hand" }, hint: "BUN-NAA, TRANSITIVE. The न is doubled in the spelling and in the reading (§1): bunnaa, not bunaa. ⚠️ The example is the PASSIVE — बुना जाता है, perfective stem plus जाना — and the drill is the infinitive, because a drill must contain the front verbatim (§A2). Of cloth and of wool both." },
        { id: "hi-u80l1-piisnaa", type: "vocab", front: "पीसना", reading: "piisnaa", meaning: "to grind to a powder", accept: ["to crush fine", "to mill", "to reduce a thing to flour"], example: { jp: "यह दवा पीसकर दी जाती है।", en: "This medicine is given ground up." }, drill: { jp: "यह दवा पीसना आसान है", en: "This medicine is easy to grind" }, hint: "PIIS-NAA, TRANSITIVE, long ii. ⚠️ पीसकर in the example is the CONJUNCTIVE PARTICIPLE — V-कर, 'having done V' — which unit 79 l3 teaches as a rule and `scope-hi.mjs` has generated since A2. आटा, flour (unit 36), is what you get when you पीसना गेहूँ." },
        { id: "hi-u80l1-chhaannaa", type: "vocab", front: "छानना", reading: "chhaannaa", meaning: "to strain through a cloth or sieve", accept: ["to sieve", "to filter the bits out", "to pass a liquid through a cloth"], example: { jp: "चाय छानकर दी जाती है।", en: "Tea is given strained." }, drill: { jp: "चाय को छानना ज़रूरी है", en: "It is essential to strain the tea" }, hint: "CHHAAN-NAA, TRANSITIVE. छ is ch with a puff of air and the न is doubled. In India tea is boiled with the leaves in it, so छानना is a daily verb. Also used figuratively: पूरा शहर छान लिया, 'I combed the whole city'." },
        { id: "hi-u80l1-gholnaa", type: "vocab", front: "घोलना", reading: "gholnaa", meaning: "to dissolve something in liquid", accept: ["to stir a thing into water", "to mix in until it disappears", "to make a thing melt into liquid"], example: { jp: "दवा को पानी में घोला जाता है।", en: "The medicine is dissolved in water." }, drill: { jp: "दवा को पानी में घोलना है", en: "The medicine is to be dissolved in water" }, hint: "GHOL-NAA, TRANSITIVE. घ is gh with a puff of air. ⚠️ The thing dissolved takes को and the liquid takes में: X को Y में घोलना. Not मिलाना, to mix (unit 36), where both things stay visible." },
        { id: "hi-u80l1-lapetnaa", type: "vocab", front: "लपेटना", reading: "lapetnaa", meaning: "to wrap", accept: ["to wind something round", "to roll a thing up in something", "to put a wrapping round something"], example: { jp: "किताब को कागज़ में लपेटा जाता है।", en: "The book is wrapped in paper." }, drill: { jp: "किताब को कागज़ में लपेटना है", en: "The book is to be wrapped in paper" }, hint: "LA-PET-NAA, TRANSITIVE, RETROFLEX ट — tongue curled back. ⚠️ Not बाँधना, to tie (unit 26): बाँधना needs a knot, लपेटना needs only a turn around. Of a parcel, a bandage and a scarf." },
        { id: "hi-u80l1-dhaknaa", type: "vocab", front: "ढकना", reading: "dhaknaa", meaning: "to cover a thing over", accept: ["to put a lid on something", "to keep something out of the air", "to lay a cloth over a thing"], example: { jp: "खाना ढककर रखा जाता है।", en: "Food is kept covered." }, drill: { jp: "खाना ढकना ज़रूरी है", en: "It is essential to cover the food" }, hint: "DHAK-NAA, TRANSITIVE, and ढ is a RETROFLEX dh — tongue curled back, then a puff. ⚠️ It is the one verb in this unit a learner may think is intransitive and it is not: खाना ढकना, 'to cover the food'. Not बंद करना (unit 5), which shuts a thing." },
      ],
    },
    {
      id: "hi-u80l2",
      unit: 80,
      lesson: 2,
      title: "Done to you, or not done at all",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that something was looted, collected, buried, wrung out, scrubbed or wiped — and say that you could not bring yourself to do a thing.",
      items: [
        { id: "hi-u80l2-luutnaa", type: "vocab", front: "लूटना", reading: "luutnaa", meaning: "to loot", accept: ["to plunder", "to strip a place of everything", "to rob a place of its goods"], example: { jp: "रास्ते में उनका पूरा सामान लूटा गया।", en: "All their goods were looted on the way." }, drill: { jp: "किसी का सामान लूटना अपराध है", en: "Looting somebody's goods is a crime" }, hint: "LUUT-NAA, TRANSITIVE, RETROFLEX ट, long uu. ⚠️ Not चुराना, to steal (unit 31), which is done quietly and to one thing: लूटना is open and takes the lot. ⚠️ The example's लूटा गया is the PASSIVE with the robbers unnamed, which is exactly how a Hindi newspaper writes it." },
        { id: "hi-u80l2-vasuulnaa", type: "vocab", front: "वसूलना", reading: "vasuulnaa", meaning: "to collect money that is owed", accept: ["to recover a payment", "to exact a due", "to get in what is owed"], example: { jp: "किराया हर महीने वसूला जाता है।", en: "The rent is collected every month." }, drill: { jp: "किराया हर महीने वसूलना पड़ता है", en: "The rent has to be collected every month" }, hint: "VA-SUUL-NAA, TRANSITIVE, long uu. ⚠️ Not लेना, to take (unit 18): वसूलना is used when the money was ALREADY owed and has to be got out of somebody. Of rent, of a fine, of a debt." },
        { id: "hi-u80l2-dafnaanaa", type: "vocab", front: "दफ़नाना", reading: "dafnaanaa", meaning: "to bury", accept: ["to put under the ground", "to inter", "to lay a body in the ground"], example: { jp: "कचरा ज़मीन में दफ़नाया जाता है।", en: "Rubbish is buried in the ground." }, drill: { jp: "कचरा ज़मीन में दफ़नाना ठीक नहीं", en: "Burying rubbish in the ground is not right" }, hint: "DAF-NAA-NAA, TRANSITIVE, with फ़ — an f — and DENTAL द. ⚠️ The agent is absent in the example and that is the whole point of the Hindi passive: the sentence says the rubbish gets buried and declines to say by whom. When an agent IS named it takes से: नगरपालिका से यह नहीं किया गया." },
        { id: "hi-u80l2-nichornaa", type: "vocab", front: "निचोड़ना", reading: "nichornaa", meaning: "to wring out", accept: ["to squeeze the water out", "to squeeze a fruit dry", "to twist the liquid out of a thing"], example: { jp: "धोने के बाद कपड़ा निचोड़ा जाता है।", en: "After washing, the cloth is wrung out." }, drill: { jp: "कपड़ा धोकर निचोड़ना पड़ता है", en: "After washing, the cloth has to be wrung out" }, hint: "NI-CHOR-NAA, TRANSITIVE. ड़ reads **r** (§1c), so nichornaa. Of a wet cloth and of a lemon. ⚠️ धोकर in the drill is the conjunctive participle of धोना, to wash (unit 26) — V-कर, 'having washed'." },
        { id: "hi-u80l2-ragarnaa", type: "vocab", front: "रगड़ना", reading: "ragarnaa", meaning: "to rub", accept: ["to scrub", "to work at a thing with pressure", "to press and move a thing to and fro"], example: { jp: "बर्तन रगड़कर साफ़ किया जाता है।", en: "A pot is cleaned by scrubbing." }, drill: { jp: "बर्तन को रगड़ना पड़ता है", en: "The pot has to be scrubbed" }, hint: "RA-GAR-NAA, TRANSITIVE. ड़ reads **r** (§1c). ⚠️ Also the commonest Hindi metaphor for grinding effort: सालों से यही काम रगड़ रहा है. Not पोंछना (l2), which only passes over a surface — रगड़ना presses." },
        { id: "hi-u80l2-ponchhnaa", type: "vocab", front: "पोंछना", reading: "ponchhnaa", meaning: "to wipe", accept: ["to wipe clean", "to pass a cloth over", "to dry a surface with a cloth"], example: { jp: "मेज़ रोज़ पोंछी जाती है।", en: "The table is wiped every day." }, drill: { jp: "मेज़ रोज़ पोंछना ज़रूरी है", en: "It is essential to wipe the table every day" }, hint: "PONCHH-NAA, TRANSITIVE. The ं comes before छ, a stop, so §1's homorganic rule gives n; छ is ch with a puff. ⚠️ The example's पोंछी agrees with मेज़, which is FEMININE (unit 9) — in the passive the verb agrees with the thing done to, exactly as in the ergative (§A1 rule 2)." },
      ],
    },
    {
      id: "hi-u80l3",
      unit: 80,
      lesson: 3,
      title: "Having it done by somebody else",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that you had something built, done, sent for, printed, stitched or cut — by somebody else.",
      items: [
        { id: "hi-u80l3-banvaanaa", type: "vocab", front: "बनवाना", reading: "banvaanaa", meaning: "to have something built", accept: ["to get a thing made", "to commission the making of something", "to have a thing put up for one"], example: { jp: "उन्होंने गाँव में एक मंदिर बनवाया।", en: "They had a temple built in the village." }, drill: { jp: "नया घर बनवाना बहुत महँगा है", en: "Having a new house built is very expensive" }, hint: "BAN-VAA-NAA, TRANSITIVE, and this is the DOUBLE CAUSATIVE: बनाना (unit 31) is to make it yourself, बनवाना is to have somebody else make it. ⚠️ The -वा- is the whole difference, and Hindi uses it constantly for anything you pay a workman to do." },
        { id: "hi-u80l3-karvaanaa", type: "vocab", front: "करवाना", reading: "karvaanaa", meaning: "to have something done", accept: ["to get a job done by somebody", "to arrange for a thing to be done", "to have a thing seen to"], example: { jp: "उसने अपना इलाज शहर में करवाया।", en: "He had his treatment done in the city." }, drill: { jp: "इलाज शहर में करवाना पड़ा", en: "The treatment had to be got done in the city" }, hint: "KAR-VAA-NAA, TRANSITIVE, the double causative of करना (unit 8). ⚠️ The commonest -वाना verb in the language: anything from a haircut to a court case is करवाया. करना is you; करवाना is somebody else, on your instructions." },
        { id: "hi-u80l3-mangvaanaa", type: "vocab", front: "मँगवाना", reading: "mangvaanaa", meaning: "to send for something", accept: ["to have a thing fetched", "to order something in", "to call for a thing to be brought"], example: { jp: "उसने बाज़ार से दवा मँगवाई।", en: "He sent to the market for medicine." }, drill: { jp: "बाज़ार से दवा मँगवाना आसान है", en: "Sending to the market for medicine is easy" }, hint: "MANG-VAA-NAA, TRANSITIVE. The ँ is written n (§1). The double causative of माँगना, to ask for (unit 18) — so the chain is माँगना (ask) → मँगाना (have brought) → मँगवाना (send somebody to bring it). ⚠️ Note the vowel shortens: माँ becomes मँ." },
        { id: "hi-u80l3-chhapvaanaa", type: "vocab", front: "छपवाना", reading: "chhapvaanaa", meaning: "to get something printed", accept: ["to have a thing put into print", "to pay for printing", "to have something run off at a press"], example: { jp: "उन्होंने अपनी किताब शहर में छपवाई।", en: "They had their book printed in the city." }, drill: { jp: "किताब छपवाना महँगा काम है", en: "Getting a book printed is an expensive business" }, hint: "CHHAP-VAA-NAA, TRANSITIVE, the double causative of छापना, to print (unit 31). ⚠️ The base vowel shortens again: छापना becomes छप-, the same shift as माँगना → मँग-. A publisher छापता है; an author छपवाता है." },
        { id: "hi-u80l3-silvaanaa", type: "vocab", front: "सिलवाना", reading: "silvaanaa", meaning: "to have clothes stitched", accept: ["to get a garment made by a tailor", "to have something sewn to measure", "to have a garment stitched for one"], example: { jp: "उसने शादी के लिए नया कुर्ता सिलवाया।", en: "He had a new kurta stitched for the wedding." }, drill: { jp: "नया कुर्ता सिलवाना ज़रूरी था", en: "A new kurta had to be stitched" }, hint: "SIL-VAA-NAA, TRANSITIVE. Its base सीना, to sew, is not carded — सिलाई, sewing (unit 40), is the noun the course has — so this is the first VERB of the tailor's shop. In India you rarely buy a kurta; you सिलवाते हैं one." },
        { id: "hi-u80l3-katvaanaa", type: "vocab", front: "कटवाना", reading: "katvaanaa", meaning: "to have something cut", accept: ["to get a thing cut by somebody", "to have a haircut", "to have a thing trimmed"], example: { jp: "वह हर महीने नाई से बाल कटवाता है।", en: "He has his hair cut by the barber every month." }, drill: { jp: "बाल कटवाना ज़रूरी हो गया", en: "Getting a haircut became necessary" }, hint: "KAT-VAA-NAA, TRANSITIVE, RETROFLEX ट, the double causative of काटना, to cut (unit 26) — with the same vowel shortening, काट- to कट-. ⚠️ The person who does it takes से: नाई से बाल कटवाना, which is the same से the passive uses for an agent." },
      ],
    },
    {
      id: "hi-u80l4",
      unit: 80,
      lesson: 4,
      title: "Making somebody do it, and reporting what was said",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that somebody was made to laugh, cry, run or go away — and report what a person said without shifting the tense.",
      items: [
        { id: "hi-u80l4-hansaanaa", type: "vocab", front: "हँसाना", reading: "hansaanaa", meaning: "to make somebody laugh", accept: ["to get a laugh out of a person", "to amuse", "to set a person laughing"], example: { jp: "उसने कहा कि वह लोगों को हँसाएगा।", en: "He said he would make people laugh." }, drill: { jp: "लोगों को हँसाना आसान नहीं है", en: "Making people laugh is not easy" }, hint: "HAN-SAA-NAA, TRANSITIVE, the -आना causative of हँसना, to laugh (unit 24). ⚠️ THE EXAMPLE IS INDIRECT SPEECH AND HINDI DOES NOT SHIFT THE TENSE: उसने कहा कि वह हँसाएगा keeps the FUTURE हँसाएगा where English moves to 'would'. कि is FREE — never a card." },
        { id: "hi-u80l4-rulaanaa", type: "vocab", front: "रुलाना", reading: "rulaanaa", meaning: "to make somebody cry", accept: ["to bring a person to tears", "to reduce somebody to crying", "to set somebody crying"], example: { jp: "उस फ़िल्म के आखिरी दृश्य ने लोगों को रुलाया।", en: "The last scene of that film made people cry." }, drill: { jp: "किसी को रुलाना अच्छी बात नहीं", en: "Making somebody cry is not a good thing" }, hint: "RU-LAA-NAA, TRANSITIVE, the -आना causative of रोना, to cry (unit 24). ⚠️ The vowel changes rather than lengthening: रो- becomes रु-, which no rule predicts and which is why the pair is worth a card. The one who is made to cry takes को." },
        { id: "hi-u80l4-ghumaanaa", type: "vocab", front: "घुमाना", reading: "ghumaanaa", meaning: "to take somebody around", accept: ["to show a person round a place", "to walk somebody about", "to take a person about"], example: { jp: "उसने कहा कि वह मेहमान को पूरा शहर घुमाएगा।", en: "He said he would show the guest the whole city." }, drill: { jp: "मेहमान को शहर घुमाना अच्छा लगा", en: "Showing the guest the city was a pleasure" }, hint: "GHU-MAA-NAA, TRANSITIVE, the -आना causative of घूमना, to wander (unit 29) — with the long ऊ shortened to ु, the same shift as माँगना → मँगवाना. Also 'to turn a thing round': चाबी घुमाना." },
        { id: "hi-u80l4-uraanaa", type: "vocab", front: "उड़ाना", reading: "uraanaa", meaning: "to fly something", accept: ["to send a thing up into the air", "to let a kite up", "to make a thing go up in the air"], example: { jp: "बच्चे छत पर पतंग उड़ा रहे थे।", en: "The children were flying a kite on the roof." }, drill: { jp: "छत पर पतंग उड़ाना आसान नहीं है", en: "Flying a kite on the roof is not easy" }, hint: "U-RAA-NAA, TRANSITIVE. ड़ reads **r** (§1c), so uraanaa. The -आना causative of उड़ना, to fly, which this course does not card — so this is the only flying verb Hindi teaches, and पतंग, a kite (unit 41), is what it flies. Also 'to blow money': पैसा उड़ाना." },
        { id: "hi-u80l4-dauraanaa", type: "vocab", front: "दौड़ाना", reading: "dauraanaa", meaning: "to make something run", accept: ["to drive an animal fast", "to set a thing running", "to make a thing go at speed"], example: { jp: "उसने घोड़े को खेत तक दौड़ाया।", en: "He made the horse run as far as the field." }, drill: { jp: "घोड़े को दौड़ाना आसान नहीं है", en: "Making the horse run is not easy" }, hint: "DAU-RAA-NAA, TRANSITIVE, DENTAL द, with औ's open vowel (unit 2) and ड़ as **r**. The -आना causative of दौड़ना, to run (unit 26). Also of a vehicle: गाड़ी दौड़ाना. The one made to run takes को." },
        { id: "hi-u80l4-bhagaanaa", type: "vocab", front: "भगाना", reading: "bhagaanaa", meaning: "to drive somebody away", accept: ["to chase a thing off", "to make somebody flee", "to send a person packing"], example: { jp: "किसान ने खेत से कुत्ते को भगाया।", en: "The farmer drove the dog out of the field." }, drill: { jp: "कुत्ते को भगाना पड़ा", en: "The dog had to be driven away" }, hint: "BHA-GAA-NAA, TRANSITIVE, भ is bh with a puff of air. The -आना causative of भागना, to run away (unit 48) — with the long आ shortened, भाग- to भग-. ⚠️ Compare निकलना, to set out (unit 12), which is INTRANSITIVE and is what the dog does; भगाना is what you do to him. निकालना, the transitive 'take out', is taught NOWHERE in Hindi — checked, not assumed." },
      ],
    },
  ],
};
