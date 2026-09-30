// HI Unit 60 — लोहा, लकड़ी और औज़ार ("Iron, wood and tools") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3, AND THE LAST UNIT OF THE A2 BAND. Conventions: unit1.js §1–§11,
// then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 11 (A2)"). lint's SCAFFOLD_TITLE_PATTERNS
// hard-errors on /^Vocabulary \d+$/, so the title had to change; the THEME changed
// because the slot named no topic at all and the corpus had a measured hole with
// nobody holding it.
//
// MEASURED HOLE: **tools were 0 of 14 and materials were 7 of 20.** Probed on the
// merged corpus of 1176 items, 2026-09-30:
//   • TOOLS — the whole language had NOT ONE. No tool, no hammer, no nail, no saw,
//     no rope, no wire. It had सुई (u35l4, a needle for an injection), चाकू (u36l1,
//     a kitchen knife), ताला and चाबी (u15l2) and झाड़ू (u15l3) — five household
//     objects, and no word for the class they belong to and nothing you build with.
//   • MATERIALS — कागज़ (u9l4), कपड़ा (u18l3), पत्थर (u21l3), तेल (u29l4),
//     चमड़ा and धागा (u40l3), मिट्टी (u54l2). Seven. **No iron, no wood, no glass,
//     no silver, no brick, no coal**, which means a learner who had finished 59
//     units could not answer "what is it made of" about a door, a window, a ring,
//     a wall or a bridge.
//   • TRADES were 7 of 20 — मालिक, मज़दूर, नाई, दुकानदार, किसान, दर्जी, इंजीनियर —
//     with no mechanic, no carpenter and no blacksmith, the three a village or a
//     town actually has on every street.
//
// ⚠️ WHY THIS THEME AND NOT THE OTHER TWO THE BLOCK CONSIDERED. Both were rejected
// on evidence, and the evidence is here so a later seat does not re-litigate it:
//   • LAW, COURT AND GOVERNMENT looked like the biggest hole (6 of 30). It is
//     **BLOCK 2's, explicitly** — unit31.js §A8 says "SOCIETY/STATE is 6 of 12
//     (सरकार, नेता, कानून, समाज, जनता absent) → u42", and block 2's front list
//     confirms it: u42 carded सरकार, नेता, मंत्री, कानून, अदालत, वोट, समाज, जनता,
//     नागरिक, अपराध, चोर, जेल, गवाह, मुकदमा, इंसाफ़, फ़ौज, सिपाही, झंडा. Eighteen of
//     the words this unit would have wanted. A lower slot wins, so the field is gone.
//   • MATERIALS-AS-SCIENCE could have gone to u44 "Nature and science". It did not:
//     block 2 rethemed u44 to the MEDIA (पत्रिका, सुर्खी, संपादक, पत्रकार…), so the
//     slot that might have owned lohaa and kaanch never did.
//   THE TEST APPLIED: tools and materials are orthogonal to all five of block 2's
//   themes (sport u41, state u42, technology u43, media u44, measurement u45) and to
//   its two grammar slots (u46 intransitive twins), so nothing here can be a
//   duplicate of a slot that merely had not been written yet.
//
// ⚠️ THREE FRONTS WERE PLANNED, CHECKED AGAINST BLOCK 2's LIST, AND DELETED BEFORE
// A LINE WAS WRITTEN. This is the check that is worth more than the unit:
//   मशीन (block 2 u43l3) · मरम्मत (block 2 u43l3) · टुकड़ा (block 2 u45l3).
//   All three are the natural vocabulary of a workshop and all three were already
//   carded on a branch this one cannot see. `validate:content` on THIS branch would
//   have stayed green and the merge would have failed. मोड़ना was dropped for a
//   softer reason: block 2's u46 cards मुड़ना, its intransitive twin, and one pair of
//   twins across two blocks is enough.
//
// ⚠️ FIVE MORE FRONTS WANTED AND REFUSED, each for a named reason:
//   • सोना — TAKEN, and this is the cleanest illustration of the front-uniqueness
//     rule in the language. सोना "gold" is blocked by सोना "to sleep" (u12l2), so
//     THE COURSE CANNOT TEACH GOLD AT ALL without a homograph, and it is not
//     smuggled into a sentence either, because the token सोने is in scope only as
//     the verb. चाँदी carries the precious-metal slot on its own. NAMED FOR A LATER
//     BLOCK: teach it through examples and a hint, the way u1 §6 handles का/के/की.
//   • पत्थर (u21l3) and कपड़ा (u18l3) — TAKEN, and both are USED in this unit's
//     sentences instead, which is what the lower-slot rule is for.
//   • कैंची (scissors) — no room at 24. The cutting-and-piercing field already has
//     चाकू (u36l1), सुई (u35l4) and this unit's आरी, and a fourth would crowd it.
//     NAMED FOR A LATER BLOCK with पेंच, गाँठ, परत, सीमेंट and पीतल.
//   • प्लास्टिक — refused on §9 grounds AND on value. A loanword whose gloss is its
//     own English word teaches nothing a learner does not already have, and u9's
//     twenty-four loanwords were each chosen because decoding them was the lesson.
//   • रबर — TAKEN by u34l1, where it is an ERASER. Same lexeme, so the material
//     sense cannot have a second card.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: लकड़ी, चाँदी, कील, आरी, रस्सी, ईंट, जंग. **कील, ईंट and जंग are
//   CONSONANT-FINAL**, so nothing in the shape says so — कील छोटी है, not छोटा — and
//   कील is the likeliest one in the unit to be got wrong.
//   MASCULINE: लोहा, काँच, कोयला, औज़ार, हथौड़ा, तार, कारखाना, बढ़ई, लोहार, छेद.
//   **औज़ार, तार and छेद are consonant-final masculine and their plural is the bare
//   form** — दो औज़ार, तीन छेद.
//   ⚠️ **मिस्त्री IS MASCULINE DESPITE THE -ी**, the पानी/हाथी class of §4, and it
//   does not change for a woman. It is the one gender fact in this unit that no
//   rule predicts.
//   जोड़ना, चिपकाना, ठोकना, खोदना, घिसना and पिघलना are VERBS, headworded -ना per §5.
//
// ⚠️ SUBSTRING TRAPS, CHECKED MECHANICALLY WITH `findWholeWord`'s REAL BOUNDARY TEST
// AND NOT BY EYE. `isLetter` is `/\p{L}/` ONLY (src/store/cardRouting.js:168), so a
// MĀTRĀ, an ANUSVĀRA and a HALANT do NOT block a match — which is the opposite of
// what "whole word" suggests and is why this list exists. EIGHT pairs fire:
//   A TAUGHT WORD SITS INSIDE ONE OF THIS UNIT'S FRONTS:
//   • चाँदी ⊃ चाँद (u5l2, the moon) — ी is \p{M}.
//   • रस्सी ⊃ रस (u13l2, juice) — the HALANT ् is \p{M}.
//   • चिपकाना ⊃ पकाना (u36l3, to cook) — ि is \p{M}.
//   • काँच ⊃ का, हथौड़ा ⊃ ड़ and मिस्त्री ⊃ त्र — harmless, because all three
//     are GLYPH cards or FREE words and a glyph routes only choice + type:produce.
//   ONE OF THIS UNIT'S FRONTS SITS INSIDE A TAUGHT WORD:
//   • नुकीला (u56l4, pointed) ⊃ कील.
//   • तारीख (u17l1), तारा (u21l4), तारीफ़ (u30l1) and लगातार (u38l2) all ⊃ तार.
//   • लोहार ⊃ लोहा and जंगल/जंगली ⊃ जंग — these two CANNOT fire, because the next
//     character is र and ल, which ARE letters. Checked rather than assumed.
//   THE RULE APPLIED: no drill in this unit contains any of the words above, and no
//   lower unit's drill contains one of this unit's fronts. A later seat editing any
//   of these twelve sentences must re-run that check.
// RETROFLEX/DENTAL (§1b): no new collision. ईंट iint and ठोकना thoknaa are
// RETROFLEX (ट, ठ) with no dental ईंत / थोकना in the corpus; तार taar, हथौड़ा
// hathauraa, खोदना khodnaa and छेद chhed are DENTAL with no retroflex twin.
// Checked against all 1176 readings: 24 new readings, 24 distinct, zero collisions.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT60 = {
  id: "hi-u60",
  lang: "hi",
  title: "लोहा, लकड़ी और औज़ार",
  order: 60,
  stage: "a2",
  lessons: [
    {
      id: "hi-u60l1",
      unit: 60,
      lesson: 1,
      title: "What a thing is made of",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say what a door, a window, a ring or a wall is made of — iron, wood, glass, silver, brick — and say what a village burns for heat.",
      items: [
        { id: "hi-u60l1-lohaa", type: "vocab", front: "लोहा", reading: "lohaa", meaning: "iron", accept: ["the metal iron"], example: { jp: "इस पुल में बहुत लोहा लगा है और वह सौ साल पुराना है।", en: "A great deal of iron has gone into this bridge, and it is a hundred years old." }, drill: { jp: "लोहा बहुत भारी होता है", en: "Iron is very heavy" }, hint: "LO-HAA, masculine and regular -ा, so the oblique is लोहे: लोहे का दरवाज़ा, an iron door — and THAT is the shape you will use it in most. ⚠️ लोहार, a blacksmith (l4), is built straight off it." },
        { id: "hi-u60l1-lakrii", type: "vocab", front: "लकड़ी", reading: "lakrii", meaning: "wood", accept: ["timber", "a piece of firewood"], example: { jp: "गाँव के लोग आज भी लकड़ी जलाकर खाना पकाते हैं।", en: "Village people still cook food by burning wood today." }, drill: { jp: "गाँव में लोग लकड़ी जलाते हैं", en: "In the village people burn wood" }, hint: "LAK-RII — ⚠️ FEMININE. ड़ is the curled-back flap of unit 4, written r: lakrii, not lakdii. 🚨 READ IT AGAINST लड़की larkii, a girl (unit 5) — the same four letters with क and ड़ swapped, and the commonest mix-up in Hindi. The material, where पेड़ (unit 14) is the living tree." },
        { id: "hi-u60l1-kaanch", type: "vocab", front: "काँच", reading: "kaanch", meaning: "glass", accept: ["the material glass"], example: { jp: "उसने पत्थर मारा और खिड़की का काँच तोड़ दिया।", en: "He threw a stone and broke the window glass." }, drill: { jp: "खिड़की का काँच साफ़ है", en: "The window glass is clean" }, hint: "KAANCH, masculine. The ँ nasalises the aa without a letter of its own (unit 5). ⚠️ THE MATERIAL, never the vessel — a drinking glass is a गिलास and a mirror is a शीशा, and शीशा confusingly also means glass, which is why the card is काँच: the stuff a window is made of." },
        { id: "hi-u60l1-chaandii", type: "vocab", front: "चाँदी", reading: "chaandii", meaning: "silver", accept: ["the metal silver"], example: { jp: "शादी में उसने चाँदी की अंगूठी पहनी थी।", en: "At the wedding she had worn a silver ring." }, drill: { jp: "उसकी अंगूठी चाँदी की है", en: "Her ring is of silver" }, hint: "CHAAN-DII — ⚠️ FEMININE, and the oblique is also चाँदी, so चाँदी की always. Named for the colour of चाँद, the moon (unit 5), which is the hook. 🚨 AND चाँद IS A STRICT PREFIX OF IT — ी is a mātrā, not a letter, so the router can match चाँद inside चाँदी; neither word's drill contains the other." },
        { id: "hi-u60l1-iint", type: "vocab", front: "ईंट", reading: "iint", meaning: "a brick", accept: ["a baked clay brick"], example: { jp: "मज़दूर सिर पर ईंट उठाकर छत तक ले गए।", en: "The labourers carried bricks on their heads up to the roof." }, drill: { jp: "मज़दूर सिर पर ईंट उठाकर चले", en: "The labourers walked carrying bricks on their heads" }, hint: "IINT — ⚠️ FEMININE, consonant-final, so the shape tells you nothing: ईंट भारी है. It opens with the INDEPENDENT ई because nothing comes before it, and the ं nasalises it (unit 5). RETROFLEX ट, tongue curled back. The plural is ईंटें. Made of मिट्टी (unit 54) and baked." },
        { id: "hi-u60l1-koylaa", type: "vocab", front: "कोयला", reading: "koylaa", meaning: "coal", accept: ["charcoal"], example: { jp: "सर्दी में लोग कोयला जलाकर हाथ गरम करते हैं।", en: "In winter people burn coal to warm their hands." }, drill: { jp: "सर्दी में लोग कोयला जलाते हैं", en: "In winter people burn coal" }, hint: "KOY-LAA, masculine and regular -ा. The य carries the y between the two vowels: koy-laa, not ko-ee-laa. ⚠️ Read it against कोयल, a cuckoo — one mātrā apart, and the bird is feminine. It is what a चूल्हा (unit 15) burns when there is no लकड़ी." },
      ],
    },
    {
      id: "hi-u60l2",
      unit: 60,
      lesson: 2,
      title: "In the toolbox",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name the tools the language had none of — a hammer, a nail, a saw, a rope, a wire — and say who keeps them and what they are for.",
      items: [
        { id: "hi-u60l2-auzaar", type: "vocab", front: "औज़ार", reading: "auzaar", meaning: "a tool", accept: ["an implement", "a piece of equipment"], example: { jp: "बढ़ई ने अपने औज़ार मेज़ पर रखे और काम शुरू किया।", en: "The carpenter put his tools on the table and started work." }, drill: { jp: "मिस्त्री अपने औज़ार थैले में रखता है", en: "The mechanic keeps his tools in a bag" }, hint: "AU-ZAAR, masculine and consonant-final, so the plural is the bare form: दो औज़ार. The au is the open vowel of औ (unit 2) and ज़ is a z (unit 4). ⚠️ The CLASS, not one object — a hammer, a saw, even a kitchen spoon — and figuratively too: पढ़ाई सबसे बड़ा औज़ार है." },
        { id: "hi-u60l2-hathauraa", type: "vocab", front: "हथौड़ा", reading: "hathauraa", meaning: "a hammer", accept: ["a mallet"], example: { jp: "उसने हथौड़ा उठाकर दीवार में कील ठोकी।", en: "He picked up the hammer and hammered a nail into the wall." }, drill: { jp: "उसने हथौड़ा उठाकर कील ठोकी", en: "He picked up the hammer and hammered in a nail" }, hint: "HA-THAU-RAA, masculine and regular -ा. ⚠️ THREE THINGS IN ONE WORD: DENTAL थ (tongue on the teeth, then a puff), the open ौ of unit 3, and ड़, the curled-back flap written r. Built off हाथ, a hand (unit 20), with the vowel SHORTENED — हथ, not हाथ, the same shortening as बूढ़ा → बुढ़ापा." },
        { id: "hi-u60l2-kiil", type: "vocab", front: "कील", reading: "kiil", meaning: "a nail", accept: ["a metal nail"], example: { jp: "उसके जूते में एक कील थी इसलिए पैर में चोट लगी।", en: "There was a nail in his shoe, so his foot got hurt." }, drill: { jp: "उसके जूते में एक कील थी", en: "There was a nail in his shoe" }, hint: "KIIL — ⚠️ FEMININE, consonant-final, and the one in this unit most likely to be got wrong: कील छोटी है, not छोटा. Long ii. The plural is कीलें. ⚠️ नुकीला, pointed (unit 56), contains it as a string and is a different word — keep the two apart when you read." },
        { id: "hi-u60l2-aarii", type: "vocab", front: "आरी", reading: "aarii", meaning: "a saw", accept: ["a handsaw"], example: { jp: "बढ़ई ने आरी से मोटी लकड़ी काटी।", en: "The carpenter cut the thick wood with a saw." }, drill: { jp: "बढ़ई ने आरी से लकड़ी काटी", en: "The carpenter cut wood with a saw" }, hint: "AA-RII — ⚠️ FEMININE. The independent आ because nothing precedes it, then री with a PLAIN र, not the curled-back ड़. ⚠️ Hindi uses ONE verb, काटना (unit 26), for all of it: an आरी cuts लकड़ी, a चाकू (unit 36) cuts food, कैंची cuts cloth." },
        { id: "hi-u60l2-rassii", type: "vocab", front: "रस्सी", reading: "rassii", meaning: "a rope", accept: ["a cord", "a length of rope"], example: { jp: "बच्चे रस्सी पकड़कर पेड़ पर चढ़ गए।", en: "The children climbed the tree holding the rope." }, drill: { jp: "बच्चे रस्सी पकड़कर पेड़ पर चढ़े", en: "The children climbed the tree holding the rope" }, hint: "RAS-SII — ⚠️ FEMININE. GEMINATION: स्स is स twice and you HEAR both, ras-sii — unit 1's doubling rule, the same mechanic that keeps कम apart from काम. ⚠️ रस, juice (unit 13), sits inside it as a string because a halant is not a letter; the two are unrelated." },
        { id: "hi-u60l2-taar", type: "vocab", front: "तार", reading: "taar", meaning: "a wire", accept: ["a cable", "a strand of wire"], example: { jp: "बिजली का तार दीवार के अंदर से जाता है।", en: "The electric wire runs inside the wall." }, drill: { jp: "बिजली का तार दीवार के अंदर है", en: "The electric wire is inside the wall" }, hint: "TAAR, masculine and consonant-final, so the plural is the bare form. DENTAL त. 🚨 FOUR TAUGHT WORDS CONTAIN IT AS A STRING and not one is related to it — तारीख (unit 17), तारा (unit 21), तारीफ़ (unit 30), लगातार (unit 38). It also means a telegram, and तार तार होना is to be in shreds." },
      ],
    },
    {
      id: "hi-u60l3",
      unit: 60,
      lesson: 3,
      title: "Joining, digging and wearing out",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say what you do to a material — join it, stick it, hammer it in, dig it, wear it down, melt it — using the verbs the corpus had no way to say.",
      items: [
        { id: "hi-u60l3-jornaa", type: "vocab", front: "जोड़ना", reading: "jornaa", meaning: "to join", accept: ["to fasten two things together", "to add up"], example: { jp: "उसने कुर्सी के दोनों हिस्से कील से जोड़े।", en: "He joined the two parts of the chair with a nail." }, drill: { jp: "दो तार जोड़ना आसान नहीं है", en: "Joining two wires is not easy" }, hint: "JOR-NAA. ⚠️ THE EXACT OPPOSITE OF तोड़ना, to break (unit 26), and the two rhyme because they are built the same way — tornaa against jornaa. ड़ is the curled-back flap. Of things AND of numbers: दो और दो जोड़ो means add two and two." },
        { id: "hi-u60l3-chipkaanaa", type: "vocab", front: "चिपकाना", reading: "chipkaanaa", meaning: "to stick", accept: ["to paste on", "to glue"], example: { jp: "उसने दीवार पर एक बड़ा चित्र चिपकाया।", en: "He stuck a large picture on the wall." }, drill: { jp: "दीवार पर चित्र चिपकाना आसान है", en: "Sticking a picture on the wall is easy" }, hint: "CHIP-KAA-NAA. The -आना shape of unit 31 lesson 2: a thing चिपकता है on its own, and you चिपकाते हैं it. ⚠️ पकाना, to cook (unit 36), sits inside it as a string because ि is a mātrā and not a letter — read carefully, the two have nothing to do with each other." },
        { id: "hi-u60l3-thoknaa", type: "vocab", front: "ठोकना", reading: "thoknaa", meaning: "to hammer in", accept: ["to knock in", "to drive in"], example: { jp: "बढ़ई ने लकड़ी में चार कीलें ठोकीं।", en: "The carpenter hammered four nails into the wood." }, drill: { jp: "लकड़ी में कील ठोकना मुश्किल नहीं है", en: "Hammering a nail into wood is not difficult" }, hint: "THOK-NAA, RETROFLEX ठ — tongue curled back, then a puff of air. ⚠️ THE BLOW IS THE POINT, and Hindi splits it by target: मारना (unit 31) is what you do to a person or an animal, ठोकना is what you do to a कील. Of a stamp onto paper too: मोहर ठोकना." },
        { id: "hi-u60l3-khodnaa", type: "vocab", front: "खोदना", reading: "khodnaa", meaning: "to dig", accept: ["to dig out", "to excavate"], example: { jp: "गाँव के लोगों ने मिलकर एक नया कुआँ खोदा।", en: "The village people together dug a new well." }, drill: { jp: "यहाँ नया कुआँ खोदना मुश्किल है", en: "Digging a new well here is difficult" }, hint: "KHOD-NAA, DENTAL द, and ख with a puff of air. Of the GROUND and what is in it — a कुआँ (unit 54), a खेत (unit 14), a नहर (unit 54). ⚠️ Not तोड़ना: you खोदते हैं earth, and you तोड़ते हैं a thing that was whole." },
        { id: "hi-u60l3-ghisnaa", type: "vocab", front: "घिसना", reading: "ghisnaa", meaning: "to wear down", accept: ["to wear out by rubbing", "to grind"], example: { jp: "रोज़ चलने से उसके जूते नीचे से घिस गए।", en: "From walking every day his shoes wore down underneath." }, drill: { jp: "पत्थर पर लोहा घिसना आसान नहीं है", en: "Wearing iron down on a stone is not easy" }, hint: "GHIS-NAA, घ with a puff of air. Of a shoe sole, a coin, a step — anything rubbed thin by use. ⚠️ IT WORKS BOTH WAYS with no change of form: जूता घिसा, the shoe wore down, and उसने चाकू घिसा, he ground the knife. One Hindi verb for what English splits into wear out and grind." },
        { id: "hi-u60l3-pighalnaa", type: "vocab", front: "पिघलना", reading: "pighalnaa", meaning: "to melt", accept: ["to become liquid", "to soften"], example: { jp: "बहुत गरमी में लोहा भी पिघल जाता है।", en: "In great heat even iron melts." }, drill: { jp: "लोहे का पिघलना आसान नहीं है", en: "The melting of iron is not easy" }, hint: "PI-GHAL-NAA, घ with a puff of air. ⚠️ INTRANSITIVE — the thing melts BY ITSELF: लोहा पिघला. To melt something is पिघलाना, the -आना pattern of unit 31, and this card is the plain verb because that is the one a learner meets first. Of metal, of ice, and of a person's anger." },
      ],
    },
    {
      id: "hi-u60l4",
      unit: 60,
      lesson: 4,
      title: "The workshop and the people in it",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a factory and the three tradesmen every Indian street has — a mechanic, a carpenter, a blacksmith — and say that iron has rusted or that something has a hole in it.",
      items: [
        { id: "hi-u60l4-kaarkhaanaa", type: "vocab", front: "कारखाना", reading: "kaarkhaanaa", meaning: "a factory", accept: ["a works", "a workshop"], example: { jp: "उसके पिता शहर के एक कारखाने में काम करते हैं।", en: "His father works in a factory in the city." }, drill: { jp: "शहर में एक बड़ा कारखाना है", en: "There is a big factory in the city" }, hint: "KAAR-KHAA-NAA, masculine and regular -ा, so the oblique is कारखाने and the oblique plural कारखानों. Built on -खाना, a PLACE, which Hindi uses for a whole family of buildings — the same half is in डाकखाना, a post office. Bigger than one man's workshop." },
        { id: "hi-u60l4-mistrii", type: "vocab", front: "मिस्त्री", reading: "mistrii", meaning: "a mechanic", accept: ["a repairman", "a fitter"], example: { jp: "पंखा बंद हो गया तो हमने मिस्त्री को बुलाया।", en: "The fan stopped, so we called the mechanic." }, drill: { jp: "पंखा ठीक करने के लिए मिस्त्री आया", en: "The mechanic came to fix the fan" }, hint: "MIS-TRII — 🚨 MASCULINE DESPITE THE -ी, the पानी and हाथी class of unit 1 §4, and it does NOT change for a woman. त्र is one of unit 6's three stacked conjuncts. Anyone who repairs machines, wiring or plumbing; a बढ़ई works लकड़ी and a लोहार works लोहा." },
        { id: "hi-u60l4-barhaii", type: "vocab", front: "बढ़ई", reading: "barhaii", meaning: "a carpenter", accept: ["a joiner", "a woodworker"], example: { jp: "बढ़ई ने दो दिन में नई मेज़ बनाई।", en: "The carpenter made a new table in two days." }, drill: { jp: "बढ़ई ने दो दिन में मेज़ बनाई", en: "The carpenter made the table in two days" }, hint: "BA-RHAII, masculine. ढ़ is the nukta flap of unit 4, written rh, and the ई at the end is INDEPENDENT because a mātrā cannot follow a mātrā (unit 3). ⚠️ He works लकड़ी (l1), so his औज़ार are the आरी and the हथौड़ा (l2) — three cards in this unit describe one man's day." },
        { id: "hi-u60l4-lohaar", type: "vocab", front: "लोहार", reading: "lohaar", meaning: "a blacksmith", accept: ["an ironsmith"], example: { jp: "लोहार आग में लोहा गरम करता है और फिर उसे ठोकता है।", en: "The blacksmith heats iron in the fire and then hammers it." }, drill: { jp: "लोहार आग में लोहा गरम करता है", en: "The blacksmith heats iron in the fire" }, hint: "LO-HAAR, masculine and consonant-final. ⚠️ Built straight off लोहा (l1) — the metal, then the man who works it — exactly as दुकानदार (unit 18) is built off दुकान. And लोहा IS a strict prefix of it, but the र that follows IS a letter, so the router cannot mis-match the two." },
        { id: "hi-u60l4-jang", type: "vocab", front: "जंग", reading: "jang", meaning: "rust", accept: ["rust on metal"], example: { jp: "बारिश के बाद लोहे के दरवाज़े पर जंग लग गई।", en: "After the rain rust appeared on the iron door." }, drill: { jp: "पुरानी कील पर जंग लगी है", en: "There is rust on the old nail" }, hint: "JANG — ⚠️ FEMININE: जंग लगी, not लगा. The ं before ग is the matching nasal, so it reads jang. ⚠️ Read it against जंगल, a forest (unit 21), and जंगली, wild (unit 55) — the same three letters to start and nothing to do with either. The frame is जंग लगना, never होना." },
        { id: "hi-u60l4-chhed", type: "vocab", front: "छेद", reading: "chhed", meaning: "a hole", accept: ["a hole through something", "a puncture"], example: { jp: "उसकी जेब में छेद था इसलिए सिक्का गिर गया।", en: "There was a hole in his pocket, so the coin fell out." }, drill: { jp: "उसकी जेब में एक छेद था", en: "There was a hole in his pocket" }, hint: "CHHED, masculine and consonant-final, so the plural is the bare form: तीन छेद. छ is च with a puff of air — chh, not ch. DENTAL द. ⚠️ A hole THROUGH something, made with a कील (l2); a hole in the GROUND you खोदते हैं (l3) and that one is a गड्ढा." },
      ],
    },
  ],
};
