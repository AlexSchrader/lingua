// HI Unit 74 — सिनेमा और रंगमंच ("Cinema and the stage") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2 (u74–u86), FIRST UNIT OF THE RANGE. Conventions: unit1.js §1–§11,
// then unit31.js §A1–§A8. Both BIND. §B1–§B7 at the foot of this file are B1
// block 2's own conventions, settled here as the first unit of the range.
//
// 🚨 RETHEMED SLOT (scaffold: "Media and entertainment"). `src/data/lint.js`
// SCAFFOLD_TITLES carries that exact string, so a Devanagari title is compulsory.
// The theme also had to NARROW, and the measurement is why:
//
// THE SLOT WAS BRIEFED AT 9/18 TAKEN AND IT IS WORSE THAN THAT. Probed against
// the live 1,440-card corpus (`node scripts/check-front.mjs hi …`, 2026-10-05),
// **ten** of the obvious media fronts are already carded, across two A2 units:
//   u44 खबर और मीडिया  → कार्यक्रम, प्रसारण, चैनल, विज्ञापन, पत्रकार, संपादक, खबर
//   u58 संगीत और कला   → नाटक, अभिनय, मंच, कलाकार, बजाना, गीत, धुन, कला
//   u41 खेल और मुकाबला → दर्शक (a spectator — so the AUDIENCE already has a word)
// So "media" as a field is spent. What is NOT carded is the FILM and the
// PERFORMANCE: the corpus could name a stage, a play and an artist, and could not
// name a film, a scene, a line of dialogue, a screenplay, an actor or a director.
//
// ⚠️ BOUNDARY WITH BLOCK 3's u91, ISSUED CENTRALLY AND BINDING. This unit owns
// SCREEN AND STAGE; block 3's u91 owns THE WRITTEN WORK AND THE GALLERY
// (साहित्य, अध्याय, कथानक, पात्र, समीक्षा, शैली, रूपक, प्रदर्शनी, मूर्तिकला,
// चित्रकला, संग्रहालय). **अभिनेता is this unit's.** Consequences:
//   • किरदार is carded here as "a part an actor plays". **पात्र is block 3's** and
//     means the character as a figure in a story. Two words, two senses, two
//     blocks — and if either seat glosses its word "a character" they collide
//     through `normalizeMeaning`. This one is glossed off the ACTOR, never the story.
//   • नाटक is TAKEN (u58) so the stage lesson here is the TROUPE and the
//     SPECTACLE, not the play.
//
// ⚠️ FOUR FRONTS WANTED AND REFUSED, each for a named reason — a later seat will
// want the same four:
//   • पुरस्कार (an award) — REFUSED ON AN accept[] COLLISION, not on the front.
//     इनाम (u41l4) is glossed "a prize" and **accepts "an award"**, so one typed
//     word would be right for two cards. `check-front.mjs` reports पुरस्कार FREE
//     and it is the gloss, not the front, that blocks it. NAMED FOR A LATER BLOCK:
//     card it only if u41's accept list loses "an award".
//   • निर्माता (a producer) — a JOB TITLE, and job-title nouns are allocated to
//     block 3's u96. अभिनेता and निर्देशक are this unit's by the central
//     allocation; निर्माता is not, so it stays unspent rather than being argued.
//   • प्रशंसक's obvious gloss, "a fan" — **पंखा (u9l2) IS "a fan"**, the ceiling kind,
//     and `lint:curriculum`'s gloss-collision check caught it. The card is glossed
//     "an admirer of a performer". This one is worth copying: the collision is
//     between two completely unrelated fields and no amount of reading the
//     entertainment vocabulary would have predicted it.
//   • हास्य (comedy) and सर्कस (a circus) — both FREE, no room at 24. NAMED FOR A
//     LATER BLOCK beside पुरस्कार and निर्माता.
//
// ⚠️ नाच IS THE DERIVED NOUN OF नाचना (u26l3), AND THE GLOSS IS WHAT MAKES IT
// LEGAL. The corpus's own precedent allows a derived noun in a different unit —
// खेल/खेलना (u41/u26), नाप/नापना (u40), तैयारी/तैयार (u32), सिलाई (u40) — but
// नाचना is glossed "to dance", which `normalizeMeaning` strips to **dance**, and
// a नाच glossed "a dance" would strip to the same string. It is carded "a dance
// performance" so the two prompts cannot answer each other. `scope-hi.mjs`
// generates no -च suffix, so नाच was out of scope until this unit.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: फ़िल्म, पटकथा, मंडली, कठपुतली. **फ़िल्म is CONSONANT-FINAL**, so
//   nothing in the shape says so — फ़िल्म लंबी है, not लंबा — and it is the one in
//   the unit most likely to be got wrong.
//   MASCULINE: सिनेमा, धारावाहिक, दृश्य, संवाद, अभिनेता, निर्देशक, नायक, खलनायक,
//   किरदार, सितारा, रंगमंच, मुखौटा, तमाशा, नाच, मनोरंजन, प्रशंसक.
//   **अभिनेता is MASCULINE despite the -ा and does NOT take the -े plural** —
//   दो अभिनेता, never दो अभिनेते — the पिता/नेता class of §4. सिनेमा is the same.
//   ADJECTIVES: **लोकप्रिय, मशहूर and रोमांचक are INVARIANT** (unit53's rule);
//   **उबाऊ is invariant too** despite looking like a vowel-final adjective.
//
// ⚠️ TWO NEAR-PAIRS AND ONE MARK TO EXPLAIN:
//   • सितारा sitaaraa (a film star) against तारा taaraa (u21l4, a star in the sky).
//     Different lexemes — one is not a form of the other — and §1's doubling is not
//     involved; the readings differ in their first syllable. Both hints say so.
//   • दृश्य opens with ृ, ऋ's MĀTRĀ, which unit1.js §7 left uncarded and said
//     appears "once, in कृपया (u7l2)". It now appears TWICE; this card's hint
//     teaches the mark the way कृपया's does. Read as **ri**: drishya.
//   • संवाद's ं sits before व, which is not a stop, so §1's homorganic rule does
//     not apply and it is written **n**: sanvaad. Same as संसार sansaar (u5l1),
//     संयोग sanyog (u47) and इंसान insaan (u53).
// RETROFLEX/DENTAL (§1b): no new collision. पटकथा patkathaa and कठपुतली
// kathputlii are RETROFLEX (ट, ठ) with no dental पतकथा / कथपुतली in the corpus;
// संवाद sanvaad, निर्देशक nirdeshak and धारावाहिक dhaaraavaahik are DENTAL with no
// retroflex twin. §1(b)'s doubling hatch fires NOWHERE in this unit.
// SUBSTRING TRAPS (§`findWholeWord`, `isLetter` is /\p{L}/ only, so a mātrā does
// NOT block a match): **रंगमंच ⊃ रंग (u16l1) and ⊃ मंच (u58l2) — NEITHER FIRES**,
// because the character beside each is ग or म, which ARE letters. Checked rather
// than assumed. खलनायक ⊃ नायक is blocked the same way (ल is a letter).
// LOANWORD FREE-PASS CHECK (§9), measured with the real `checkProduce`:
//   फ़िल्म film → glossed "a motion picture", NOT "a film" — the gloss would have
//   BEEN the transliteration, which is the exact defect §9 names.
//   सिनेमा sinemaa ≠ "a cinema hall". Zero free passes.
// ════════════════════════════════════════════════════════════════════════════
// B1 BLOCK 2 CONVENTIONS (u74-u86) — settled here, as the first unit of the range,
// the way unit31.js, unit41.js and unit51.js did for A2. Numbered so a later block
// can cite one. unit1.js §1–§11 and unit31.js §A1–§A8 both still BIND and are not
// restated.
// ════════════════════════════════════════════════════════════════════════════
//
// B1. SHAPE IS UNCHANGED: 4 lessons × EXACTLY 6 cards, matching all 120 A1 and all
//     40 A2 lessons. 13 units, 312 cards.
//     ⚠️ ALL THIRTEEN SLOT TITLES WERE SCAFFOLD TITLES and all thirteen are
//     retitled in Devanagari. `src/data/lint.js` SCAFFOLD_TITLES carries every B1
//     theme name verbatim ("Media and entertainment", "Environment and place",
//     "Money and the economy", "Health and wellbeing", "Relationships and
//     society", the three "Grammar N — ..." strings and both "Register N — ..."
//     strings) and SCAFFOLD_TITLE_PATTERNS matches /^Vocabulary \d+ \(B1\)$/, so a
//     Devanagari title is compulsory on all 13 — not a style choice.
//
// B2. WHAT B1 MEANS HERE, and it is not A2 with longer words. A2 left the learner
//     able to NAME things and narrate a past. B1 is where he starts RELATING them:
//     a condition on a clause, a cause chain, an attributed opinion, a concession,
//     a hedge. So every unit in this range carries one of those in its sentences
//     even when its cards are nouns — u76 relates production to consumption, u77
//     relates a habit to an outcome, u78 relates a person to how he is treated.
//
// B3. 🚨 THE PASSIVE IS CLOSED AT u80, AND IT WAS DEFERRED "TO B1" BY TWO FILES
//     WITH NO UNIT NAMED. unit1.js §6's deferred list says "the PASSIVE
//     (किया जाता है) → B1" and unit31.js §A5 repeats it; A2 block 2 confirmed it
//     did not re-open it. u80 निष्क्रिय और प्रेरणार्थक teaches it, so those two
//     deferred entries are now answered rather than left reading as a live
//     instruction.
//
// B4. A CAUSATIVE IS NOT A LEXEME DUPLICATE, and u80 cards six -वाना verbs on that
//     basis. The corpus has always taught causative pairs in different units —
//     उठना/उठाना, रुकना/रोकना, गिरना/गिराना, बचना/बचाना — and A2 u48 taught
//     the -आना causative as a class. -वाना is the THIRD degree and a different
//     dictionary entry: बनाना is to make a thing, बनवाना is to have somebody else
//     make it. `scope-hi.mjs` generates no -वाना, so none was in scope before u80.
//     ⚠️ THE LINE THAT IS NOT CROSSED: an INFLECTION is never carded twice —
//     बड़ा/बड़ी stays banned (unit1.js §6), and no verb's own conjugated form is ever
//     a front.
//
// B5. u81 IS RETHEMED OFF EVIDENTIALITY, AND THE EVIDENTIALITY IS STILL TAUGHT.
//     The slot reads "Grammar 8 — nuance, evidentiality, nominalization". The
//     mental vocabulary an evidentiality unit needs is 16/18 SPENT: A2 u57
//     सोचना और मानना plus u32 and u39 took सोचना, जानना, समझना, मानना, याद,
//     अंदाज़ा, तुलना, उम्मीद, इरादा, शक, भरोसा, ध्यान, गौर, कल्पना — and block 1's
//     u64 "Hedging and uncertainty" owns what is left. So u81 takes the THIRD
//     thing the slot names, NOMINALIZATION, and teaches it as word formation: the
//     -आई/-आवट/-आव suffixes, the -ई/-ी abstract nouns, and the बे-/ना-/अन-/गैर-/नि-
//     prefixes. EVIDENTIALITY IS TAUGHT IN ITS HINTS AND EXAMPLES AS A
//     CONSTRUCTION WITH NO FRONT — सुना है कि, कहा जाता है कि, लगता है कि — which
//     is the mechanism unit1.js §6 used for का/के/की/को and §A3 used for सकना.
//     ZERO 3rd-PERSON EXCEPTIONS SPENT; no validator weakened.
//
// B6. 🚨 MOST B1 REFUSALS ARE `accept[]` REFUSALS, NOT FRONT REFUSALS, AND
//     `check-front.mjs` CANNOT SEE THEM. Measured across this range: of the fronts
//     wanted and refused, ELEVEN were reported FREE by check-front.mjs and were
//     blocked by a taught card's accept list, which `normalizeMeaning`
//     (src/store/answer.js) treats as a right answer. The worst case was
//     स्वास्थ्य, blocked by सेहत (u20), whose accept list contains BOTH
//     "wellbeing" AND "fitness" — three of the four words that card wanted.
//     THE RULE THIS RANGE FOLLOWED: before writing a card, read the taught
//     near-synonym's WHOLE ITEM, not just its front. The corpus has reached the
//     point where the GLOSS is scarcer than the front.
//
// B7. ⚠️ TOOLING GAP FOUND AND DELIBERATELY NOT FIXED. `scope-hi.mjs`'s derive()
//     has no rule for an ई-FINAL noun's oblique plural: भाई (u10) does not generate
//     भाइयों, so "दोनों भाइयों में" reads as out of scope while the identical
//     sentence with लड़कों passes. It is the SAME CLASS as the consonant-final
//     plural A2 block 2 added and the oblique infinitive A2 block 3 added
//     (unit31.js §A6), so it would qualify.
//     IT WAS LEFT ALONE ON PURPOSE: blocks 1 and 3 are authoring in parallel
//     against a measured baseline (band 136, A1 u7+ 0), and widening the checker
//     mid-flight would move the number they are measuring against with nothing
//     red to tell them. The sentence was rewritten instead. WHOEVER MERGES THIS
//     BAND: add ई → इयों/इयाँ to derive(), measure both ways, and record the
//     before/after the way §A6 does.
//
// ─────────────────────────────────────────────────────────────────────────────
// FREE — what B1 block 2 adds to unit1.js's, unit11.js's and unit31.js's lists.
// Same test as always: closed-class grammar or a proper name, met in a sentence,
// never produced alone.
// ─────────────────────────────────────────────────────────────────────────────
//   • THE INFLECTIONS OF सब — सबका, सबकी, सबके, सबको. Same class and the same
//     omission: सब is a taught front (u1l4) and `derive()` treats it as a
//     consonant-final noun, so it generates सबें and सबों and nothing a learner
//     would ever write. Measured: six B1 sentences flagged on सबका/सबके/सबको
//     while the identical sentence with उनका passed.
//   • शर्मा — a surname, free by RUNBOOK §4, exactly like करन (unit1.js) and
//     मीना (unit11.js). It is what a Hindi sentence calls a man you address as
//     साहब (u82l2), and the course had no surname at all.
//   • THE PROXIMATE DEMONSTRATIVE POSSESSIVES — इसका, इसकी, इसके, इसमें. unit1.js
//     already declares the DISTAL set (उसका, उसकी, उसके, उसमें) and the obliques
//     इस/इन/उस/उन, and says in so many words that "the possessives built on the
//     pronouns" belong on this line. The proximate four were simply missed: they
//     are the same closed class, inflections of यह that no suffix rule generates
//     and no unit teaches. Measured on this branch: four B1 sentences flagged on
//     इसका alone while the identical sentence with उसका passed.
// FREE: इसका | इसकी | इसके
// FREE: सबका | सबकी | सबके | सबको | शर्मा
export const HI_UNIT74 = {
  id: "hi-u74",
  lang: "hi",
  title: "सिनेमा और रंगमंच",
  order: 74,
  stage: "b1",
  lessons: [
    {
      id: "hi-u74l1",
      unit: 74,
      lesson: 1,
      title: "On the screen",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about a film and a television serial — its scenes, its dialogue and the screenplay it was written from.",
      items: [
        { id: "hi-u74l1-film", type: "vocab", front: "फ़िल्म", reading: "film", meaning: "a motion picture", accept: ["a feature film", "a movie", "a picture shown in a cinema"], example: { jp: "कल रात हमने घर पर एक नई फ़िल्म देखी।", en: "Last night we watched a new film at home." }, drill: { jp: "यह फ़िल्म बहुत लंबी है", en: "This film is very long" }, hint: "FILM, with फ़ — an f, unit 4's letter. ⚠️ FEMININE and CONSONANT-FINAL, so the shape tells you nothing: फ़िल्म लंबी है, never लंबा. It is glossed 'a motion picture' on purpose — §9 forbids a loanword whose gloss is its own reading." },
        { id: "hi-u74l1-sinemaa", type: "vocab", front: "सिनेमा", reading: "sinemaa", meaning: "a cinema hall", accept: ["a picture house", "the building where films are shown", "a movie theatre"], example: { jp: "शहर का नया सिनेमा स्टेशन के पास बना है।", en: "The city's new cinema has been built near the station." }, drill: { jp: "यह सिनेमा घर के पास है", en: "This cinema is near the house" }, hint: "SI-NE-MAA, masculine — ⚠️ and like पिता and नेता it does NOT take the -े plural: दो सिनेमा, never दो सिनेमे. The PLACE, not the art form: the film itself is फ़िल्म." },
        { id: "hi-u74l1-dhaaraavaahik", type: "vocab", front: "धारावाहिक", reading: "dhaaraavaahik", meaning: "a television serial", accept: ["a serial drama", "a story told in parts on air", "a programme in weekly episodes"], example: { jp: "माँ हर रात यह धारावाहिक देखती हैं।", en: "Mother watches this serial every night." }, drill: { jp: "माँ यह धारावाहिक रोज़ देखती हैं", en: "Mother watches this serial every day" }, hint: "DHAA-RAA-VAA-HIK, masculine, all DENTAL ध. Literally 'running in a stream', which is what a serial does. Not कार्यक्रम (unit 44), which is any programme on air — a धारावाहिक is the one that continues next week." },
        { id: "hi-u74l1-drishya", type: "vocab", front: "दृश्य", reading: "drishya", meaning: "a scene", accept: ["a shot in a film", "what is in view", "a view before the eye"], example: { jp: "इस फ़िल्म का पहला दृश्य बहुत अच्छा था।", en: "The first scene of this film was very good." }, drill: { jp: "इस फ़िल्म का पहला दृश्य अच्छा था", en: "The first scene of this film was good" }, hint: "DRISH-YA, masculine. ⚠️ It opens with ृ, the MĀTRĀ of ऋ — the mark unit 1 §7 left uncarded and you have met once, in कृपया. Read it **ri**. The श्य is श and य stacked, as in वाक्य (unit 6)." },
        { id: "hi-u74l1-sanvaad", type: "vocab", front: "संवाद", reading: "sanvaad", meaning: "a line of dialogue", accept: ["spoken lines in a play", "what the characters say to each other", "the talk written for a scene"], example: { jp: "इस नाटक के संवाद बहुत अच्छे हैं।", en: "The dialogue in this play is very good." }, drill: { jp: "इस नाटक के संवाद अच्छे हैं", en: "This play's dialogue is good" }, hint: "SAN-VAAD, masculine, DENTAL द. ⚠️ Its ं sits before व, which is not a stop, so §1's homorganic rule does not fire and the reading is plain **n** — like संसार (unit 5). Not बात (unit 30), a spoken matter: a संवाद is written in advance for somebody to say. बातचीत is taught NOWHERE in Hindi — checked with `npm run taught -- hi`, not assumed." },
        { id: "hi-u74l1-patkathaa", type: "vocab", front: "पटकथा", reading: "patkathaa", meaning: "a screenplay", accept: ["a film script", "the written plan of a film", "the script a film is shot from"], example: { jp: "अच्छी फ़िल्म के लिए अच्छी पटकथा ज़रूरी है।", en: "A good screenplay is essential for a good film." }, drill: { jp: "इस फ़िल्म की पटकथा नई है", en: "This film's screenplay is new" }, hint: "PAT-KA-THAA — ⚠️ FEMININE, so पटकथा अच्छी है. RETROFLEX ट in पट (a screen) plus कथा (a tale): the tale written for the screen. The थ is DENTAL — tongue on the teeth." },
      ],
    },
    {
      id: "hi-u74l2",
      unit: 74,
      lesson: 2,
      title: "The people on the screen",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the actor, the director, the hero, the villain and the star — and talk about the part an actor plays.",
      items: [
        { id: "hi-u74l2-abhinetaa", type: "vocab", front: "अभिनेता", reading: "abhinetaa", meaning: "an actor", accept: ["someone who acts for a living", "a screen performer", "a man who plays parts"], example: { jp: "यह अभिनेता गाँव से आया था और अब मशहूर है।", en: "This actor came from a village and is famous now." }, drill: { jp: "यह अभिनेता हर फ़िल्म में अलग लगता है", en: "This actor looks different in every film" }, hint: "A-BHI-NE-TAA, masculine. ⚠️ Like पिता और नेता it does NOT take the -े plural: दो अभिनेता, never दो अभिनेते. Built on अभिनय, acting (unit 58). भ is bh with a puff of air. Not कलाकार (unit 58), which is any artist." },
        { id: "hi-u74l2-nirdeshak", type: "vocab", front: "निर्देशक", reading: "nirdeshak", meaning: "a film director", accept: ["the person who directs a film", "someone who directs actors", "the one in charge of making a film"], example: { jp: "निर्देशक ने यह दृश्य तीन बार बनाया।", en: "The director made this scene three times." }, drill: { jp: "निर्देशक ने यह दृश्य बनाया", en: "The director made this scene" }, hint: "NIR-DE-SHAK, masculine, DENTAL द. The र् is र with the halant, written as the little hook over the next letter. Not मालिक (unit 28), an owner — a निर्देशक tells people what to do on a film, and owns nothing." },
        { id: "hi-u74l2-naayak", type: "vocab", front: "नायक", reading: "naayak", meaning: "a hero", accept: ["the leading good character", "the man the story is about", "the central good figure"], example: { jp: "इस फ़िल्म का नायक एक गरीब मज़दूर है।", en: "The hero of this film is a poor labourer." }, drill: { jp: "इस फ़िल्म का नायक गरीब है", en: "The hero of this film is poor" }, hint: "NAA-YAK, masculine. Not बहादुर, brave (unit 27), which is what a person IS — a नायक is the part the story gives him. The feminine is नायिका, named here and used in no sentence." },
        { id: "hi-u74l2-khalnaayak", type: "vocab", front: "खलनायक", reading: "khalnaayak", meaning: "a villain", accept: ["the bad character in a story", "the one the hero fights", "the figure who works against the hero"], example: { jp: "अच्छा खलनायक अच्छे नायक से ज़्यादा याद रहता है।", en: "A good villain is remembered more than a good hero." }, drill: { jp: "इस फ़िल्म का खलनायक बहुत सख्त है", en: "This film's villain is very harsh" }, hint: "KHAL-NAA-YAK, masculine. खल (wicked) plus नायक — so the word tells you what it is. ⚠️ It CONTAINS नायक and the match cannot fire, because the letter before it is ल: `findWholeWord` is blocked by a letter, not by a mātrā. Plain ख — unit 1 §7 keeps ख़ uncarded." },
        { id: "hi-u74l2-kirdaar", type: "vocab", front: "किरदार", reading: "kirdaar", meaning: "a part an actor plays", accept: ["a role on screen", "the person an actor becomes", "the character an actor takes on"], example: { jp: "उसने इस फ़िल्म में एक किसान का किरदार किया।", en: "He played the part of a farmer in this film." }, drill: { jp: "उसने एक किसान का किरदार किया", en: "He played the part of a farmer" }, hint: "KIR-DAAR, masculine, DENTAL द. ⚠️ Glossed off the ACTOR on purpose: a किरदार is what the actor DOES. The figure inside the story is पात्र, which a later unit teaches — do not gloss either one 'a character'. The verb is करना or निभाना (unit 46)." },
        { id: "hi-u74l2-sitaaraa", type: "vocab", front: "सितारा", reading: "sitaaraa", meaning: "a film star", accept: ["a famous performer", "the big name on a poster", "a celebrated actor"], example: { jp: "वह सितारा अब फ़िल्म नहीं बनाता।", en: "That star does not make films any more." }, drill: { jp: "हर सितारा गाँव से नहीं आता", en: "Not every star comes from a village" }, hint: "SI-TAA-RAA, masculine, regular -ा. ⚠️ Read it against तारा taaraa, a star in the sky (unit 21): two different words, and the readings part in the first syllable. In Hindi as in English, the sky word became the fame word." },
      ],
    },
    {
      id: "hi-u74l3",
      unit: 74,
      lesson: 3,
      title: "On the stage",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about the theatre as an art — a troupe, a mask, a puppet, a dance performance and a public spectacle.",
      items: [
        { id: "hi-u74l3-rangmanch", type: "vocab", front: "रंगमंच", reading: "rangmanch", meaning: "the theatre as an art", accept: ["theatre work", "the world of the stage", "the stage as a craft"], example: { jp: "वह फ़िल्म छोड़कर रंगमंच पर काम करने लगा।", en: "He left films and began working in the theatre." }, drill: { jp: "वह रंगमंच पर काम करने लगा", en: "He began working in the theatre" }, hint: "RANG-MANCH, masculine. रंग (unit 16) plus मंच (unit 58): literally the coloured stage. ⚠️ Not मंच, which is the PLATFORM you stand on — रंगमंच is the whole art. Its ं comes before च, so §1's homorganic rule gives plain n." },
        { id: "hi-u74l3-mandlii", type: "vocab", front: "मंडली", reading: "mandlii", meaning: "a troupe", accept: ["a company of performers", "a group that performs together", "a band of players"], example: { jp: "यह मंडली हर साल गाँव जाती है और नाटक करती है।", en: "This troupe goes to the village every year and puts on a play." }, drill: { jp: "मंडली में बारह लोग हैं", en: "There are twelve people in the troupe" }, hint: "MAND-LII — ⚠️ FEMININE: मंडली आई, not आया. RETROFLEX ड, tongue curled back. The medial inherent a is not said (§1), so mandlii and not mandalii. Not टीम (unit 41), which plays a match — a मंडली performs." },
        { id: "hi-u74l3-mukhautaa", type: "vocab", front: "मुखौटा", reading: "mukhautaa", meaning: "a mask", accept: ["a face covering worn to perform", "a false face", "a covering worn over the face"], example: { jp: "उसने मुखौटा पहना और लोगों ने उसे नहीं पहचाना।", en: "He put on a mask and people did not recognise him." }, drill: { jp: "उसने मुखौटा पहना और चला गया", en: "He put on a mask and went off" }, hint: "MU-KHAU-TAA, masculine, regular -ा. RETROFLEX ट. The au is औ's open vowel (unit 2). Built off मुँह, a mouth or face (unit 20). Hindi also uses it the way English uses 'a front': मुखौटा उतारना, to drop the mask." },
        { id: "hi-u74l3-kathputlii", type: "vocab", front: "कठपुतली", reading: "kathputlii", meaning: "a puppet", accept: ["a doll worked on strings", "a figure made to move on strings", "a stringed figure in a show"], example: { jp: "बच्चे कठपुतली का तमाशा देखकर खुश हो गए।", en: "The children were happy after watching the puppet show." }, drill: { jp: "बच्चे कठपुतली का तमाशा देखते हैं", en: "The children watch the puppet show" }, hint: "KATH-PUT-LII — ⚠️ FEMININE. कठ (wood) plus पुतली (a little figure). Both ठ and त matter: ठ is RETROFLEX with a puff, त is DENTAL. Not गुड़िया (unit 41), a doll a child holds — a कठपुतली is worked on strings for an audience." },
        { id: "hi-u74l3-tamaashaa", type: "vocab", front: "तमाशा", reading: "tamaashaa", meaning: "a public spectacle", accept: ["a show put on in the open", "something people gather to watch", "a spectacle got up in public"], example: { jp: "सड़क पर तमाशा देखने के लिए बहुत लोग जमा थे।", en: "Many people were gathered on the road to watch the spectacle." }, drill: { jp: "सड़क पर तमाशा देखने लोग जमा थे", en: "People were gathered on the road to watch the show" }, hint: "TA-MAA-SHAA, masculine, regular -ा, DENTAL त. ⚠️ It carries a second, sharper sense a learner will hear constantly: तमाशा बनाना is to make a scene, and तमाशा देखना is to stand and gawp instead of helping." },
        { id: "hi-u74l3-naach", type: "vocab", front: "नाच", reading: "naach", meaning: "a dance performance", accept: ["dancing put on for an audience", "a dance item", "a dance done before people"], example: { jp: "शादी में उनका नाच सबसे अच्छा था।", en: "Their dance at the wedding was the best." }, drill: { jp: "शादी में उनका नाच अच्छा था", en: "Their dance at the wedding was good" }, hint: "NAACH, masculine, long aa. ⚠️ The noun of नाचना, to dance (unit 26), in a different unit — the खेल/खेलना precedent — and it is glossed 'a dance PERFORMANCE' because a plain 'a dance' would normalise to the same string as 'to dance' and the two cards would answer each other." },
      ],
    },
    {
      id: "hi-u74l4",
      unit: 74,
      lesson: 4,
      title: "What the audience makes of it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that something is entertainment, popular, famous, thrilling or boring — and name a fan.",
      items: [
        { id: "hi-u74l4-manoranjan", type: "vocab", front: "मनोरंजन", reading: "manoranjan", meaning: "entertainment", accept: ["amusement provided to people", "being entertained", "something laid on to amuse people"], example: { jp: "उसके लिए किताबें पढ़ना ही मनोरंजन है।", en: "For him reading books is entertainment in itself." }, drill: { jp: "उसके लिए किताबें पढ़ना मनोरंजन है", en: "For him reading books is entertainment" }, hint: "MA-NO-RAN-JAN, masculine. Built on मन, the mind (unit 1): what colours the mind. ⚠️ Not आराम, rest (unit 15) — मनोरंजन takes your attention, आराम gives it back." },
        { id: "hi-u74l4-prashansak", type: "vocab", front: "प्रशंसक", reading: "prashansak", meaning: "an admirer of a performer", accept: ["a follower of a star", "somebody devoted to a performer", "a fan of someone"], example: { jp: "इस अभिनेता के प्रशंसक पूरे देश में हैं।", en: "This actor's fans are all over the country." }, drill: { jp: "इस अभिनेता के प्रशंसक देश में हैं", en: "This actor's fans are in the country" }, hint: "PRA-SHAN-SAK, masculine, consonant-final, so the plural is the bare form: बहुत प्रशंसक. Its ं sits before स, not a stop, so the reading is plain n — like इंसान (unit 53). ⚠️ IT CANNOT BE GLOSSED 'a fan': पंखा (unit 9) IS 'a fan' and lint caught the collision. Not दर्शक (unit 41) either, who merely watches — a प्रशंसक admires." },
        { id: "hi-u74l4-lokapriya", type: "vocab", front: "लोकप्रिय", reading: "lokapriya", meaning: "popular", accept: ["liked by a lot of people", "widely liked", "in favour with the public"], example: { jp: "यह धारावाहिक गाँवों में बहुत लोकप्रिय है।", en: "This serial is very popular in the villages." }, drill: { jp: "यह धारावाहिक गाँवों में लोकप्रिय है", en: "This serial is popular in the villages" }, hint: "LO-KA-PRI-YA — ⚠️ INVARIANT (unit 53's rule): लोकप्रिय फ़िल्म and लोकप्रिय अभिनेता both. लोक (the people) plus प्रिय (dear). Not मशहूर: a lot of people LIKE something लोकप्रिय, a lot of people merely KNOW something मशहूर." },
        { id: "hi-u74l4-mashhuur", type: "vocab", front: "मशहूर", reading: "mashhuur", meaning: "famous", accept: ["well known to everybody", "that everyone has heard of", "with a name everybody knows"], example: { jp: "यह मंडली अपने नाच के लिए मशहूर है।", en: "This troupe is famous for its dance." }, drill: { jp: "वह अभिनेता अब मशहूर हो गया", en: "That actor has become famous now" }, hint: "MASH-HUUR — ⚠️ INVARIANT. Say the श and the ह separately: mash-huur, not ma-shuur. Fame is neutral in Hindi too: एक मशहूर खलनायक is perfectly ordinary." },
        { id: "hi-u74l4-romaanchak", type: "vocab", front: "रोमांचक", reading: "romaanchak", meaning: "thrilling", accept: ["exciting to watch", "that makes the hair stand up", "that keeps you on edge"], example: { jp: "फ़िल्म का आखिरी दृश्य सबसे रोमांचक था।", en: "The last scene of the film was the most thrilling." }, drill: { jp: "फ़िल्म का आखिरी दृश्य रोमांचक था", en: "The film's last scene was thrilling" }, hint: "RO-MAAN-CHAK — ⚠️ INVARIANT. From रोमांच, the prickle on the skin: Hindi's word for thrilling is literally about goosebumps. Its ं comes before च, so plain n. Plain ख nowhere here; the क is plain क." },
        { id: "hi-u74l4-ubaauu", type: "vocab", front: "उबाऊ", reading: "ubaauu", meaning: "boring", accept: ["dull to sit through", "that makes you lose interest", "that drags on"], example: { jp: "यह पटकथा इतनी उबाऊ थी कि लोग सो गए।", en: "This screenplay was so boring that people fell asleep." }, drill: { jp: "यह पटकथा बहुत उबाऊ थी", en: "This screenplay was very boring" }, hint: "U-BAA-UU — ⚠️ INVARIANT even though it ends in a vowel: उबाऊ फ़िल्म and उबाऊ नाटक both. The ऊ at the end is the INDEPENDENT letter, because a mātrā cannot follow a mātrā (§1). From उबना, to be fed up." },
      ],
    },
  ],
};
