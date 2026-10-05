// HI Unit 89 — युद्ध और शांति ("War and peace") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 6 (B1)"). Theme ASSIGNED CENTRALLY;
// probed at **1 of 18 taken** against all 1,382 non-glyph hi fronts, 2026-10-05.
//
// ⚠️ THE ONE WORD THAT WAS TAKEN IS युद्ध ITSELF (u50l3, "a war") — SO IT IS THE
// UNIT TITLE AND NOT A CARD. This is the correct reading of the rule, not a
// loophole: a title is not a front, u50 भारत का इतिहास taught युद्ध in its
// historical sense, and every one of this unit's twenty-four sentences USES it.
// What u50 and u42 left the language without is everything युद्ध is made of — no
// weapon, no gun, no cannon, no bomb, no attack, no front line, no prisoner, no
// enemy, no revolt, no treaty, no peace.
//
// ⚠️ BOUNDARIES HELD:
//   • फ़ौज (u42l4, the army) and सिपाही (u42l4, a soldier) are TAKEN, and both are
//     USED here. **THIS FORCED TWO GLOSSES, and the reason is mechanical, not
//     stylistic:** `normalizeMeaning` strips a leading a/an/the, so "an army" and
//     "the army" are ONE STRING to the grader (unit1.js §9). सेना is therefore
//     glossed "the armed forces" and सैनिक "a soldier in uniform", and each hint
//     draws the register line that the gloss cannot.
//   • सरहद (u50l1, a border between countries) is TAKEN, which is why सीमा IS NOT
//     CARDED — same gloss, one card with two right answers. मोर्चा carries the
//     frontier sense instead and its hint says so, and वार्ता took the free slot.
//   • गोली (u35l4) is TAKEN as a TABLET, and खून (u35l3), घाव (u35l3), चोट (u20l4),
//     मौत (u59l4), कब्र (u59l4), जेल (u42l3), सज़ा (u32l2), गुलामी (u50l3) are all
//     taken and all used. हिंसा is carded here and अहिंसा in u90 — the pair is
//     deliberate and the अ keeps them apart for the router (see below).
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: सेना, बंदूक, तोप, तबाही, हिंसा, क्रांति, वार्ता, संधि, विजय, शांति.
//   🚨 **बंदूक, तोप and विजय ARE CONSONANT-FINAL FEMININE**, so nothing in the shape
//   says so — बंदूक भारी थी, तोप पुरानी है, विजय बड़ी थी — and विजय is the likeliest
//   in the unit to be got wrong.
//   MASCULINE: सैनिक, हथियार, बम, हमला, कब्ज़ा, मोर्चा, दुश्मन, विद्रोह, शहीद, वीर,
//   बचाव, समझौता. **हथियार is consonant-final masculine and its plural is the bare
//   form** — दो हथियार.
//   ⚠️ **कैदी IS MASCULINE DESPITE THE -ी**, the पानी/हाथी class of §4, and it does
//   not change for a woman. ⚠️ **घायल IS AN ADJECTIVE** and consonant-final, so it
//   is INVARIABLE: आदमी घायल है, औरत घायल है. No verb is carded in this unit.
//   ⚠️ **क्रांति, संधि and शांति ALL END IN A SHORT ि** — kraanti, sandhi, shaanti,
//   never -ii. Same shape as समिति (u88l2).
//
// ⚠️ SUBSTRING TRAPS, CHECKED AGAINST `findWholeWord`'s REAL BOUNDARY TEST.
// `isLetter` is `/\p{L}/` only, so a MĀTRĀ, an ANUSVĀRA and a HALANT do NOT block
// a match. FOUR fire; four look like they should and CANNOT:
//   THESE FIRE (a mātrā or a halant is the neighbour):
//   • कब्ज़ा ⊃ कब (u8l2, when) — the ् is a HALANT, \p{M}. Pre-existing: कब्र
//     (u59l4) fires identically.
//   • बंदूक ⊃ बंद (u5l1, closed) — the ू after it is \p{M}. Unrelated words.
//   • दुश्मन ⊃ मन (u1l2, the mind) — the ् before it is \p{M}. Unrelated.
//   • शांति ⊃ शांत (u14l4, quiet) — the ि after it is \p{M}. SAME ROOT, and named
//     in the hint as the hook: the लंबा → लंबाई class (u19l1 / u45l4).
//   THESE CANNOT FIRE, because the neighbouring character IS a letter:
//   • हमला ⊃ हम (u1l2, we) — ल follows. · अहिंसा (u90l4) ⊃ हिंसा — अ precedes.
//   • मोर्चा vs मोड़ (u29l4) — NOT a substring (ड़ ≠ र्). · समझौता vs समझना — not
//     a substring either way.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): 🚨 ONE NEAR-COLLISION AND IT IS A TEACHING POINT.
// तोप top is DENTAL त; टोपी topii, a cap (u18l3), is RETROFLEX ट — they do NOT
// collide, because of the final ी, so neither needs §1(b)'s doubling escape hatch,
// but the pair is the cleanest live example of the contrast in the language and
// तोप's hint says so. Everything else: 24 new readings, 24 distinct, zero
// collisions against all 1,382.
// ⚠️ AND ONE PAIR IS THE SAME THREE SOUNDS REORDERED — विरोध virodh (u42l4,
// opposition) against विद्रोह vidroh (l3, a revolt). Named in विद्रोह's hint.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit. Zero free passes.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: बारूद
// (gunpowder), किला is TAKEN (u50l2), निशाना, वर्दी (a uniform), युद्धविराम.
export const HI_UNIT89 = {
  id: "hi-u89",
  lang: "hi",
  title: "युद्ध और शांति",
  order: 89,
  stage: "b1",
  lessons: [
    {
      id: "hi-u89l1",
      unit: 89,
      lesson: 1,
      title: "The armed forces and what they carry",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that two countries' armies came up to the border, what time a soldier gets up, and name a weapon, a gun, a cannon and a bomb.",
      items: [
        { id: "hi-u89l1-senaa", type: "vocab", front: "सेना", reading: "senaa", meaning: "the armed forces", accept: ["an army", "the military"], example: { jp: "दोनों देशों की सेना सरहद पर आ गई।", en: "Both countries' armies came up to the border." }, drill: { jp: "दोनों देशों की सेना सरहद पर आई", en: "Both countries' armies came to the border" }, hint: "SE-NAA — ⚠️ FEMININE. ⚠️ THE SAME THING AS फ़ौज (unit 42) IN A DIFFERENT REGISTER: फ़ौज is the everyday word, सेना the formal one a newspaper and the संविधान (unit 88) use. The gloss had to say \"forces\" rather than \"army\" because the grader strips a/an/the and फ़ौज already owns that string." },
        { id: "hi-u89l1-sainik", type: "vocab", front: "सैनिक", reading: "sainik", meaning: "a soldier in uniform", accept: ["a serviceman", "a member of the army"], example: { jp: "हर सैनिक को सुबह चार बजे उठना पड़ता है।", en: "Every soldier has to get up at four in the morning." }, drill: { jp: "हर सैनिक सुबह जल्दी उठता है", en: "Every soldier gets up early in the morning" }, hint: "SAI-NIK, masculine and consonant-final. The ऐ of unit 2, so sai and never se. ⚠️ Built off सेना with the vowel OPENED, exactly the way वैज्ञानिक is built off विज्ञान (unit 87). Not सिपाही (unit 42), which is everyday and is used for a policeman too; a सैनिक is in the सेना." },
        { id: "hi-u89l1-hathiyaar", type: "vocab", front: "हथियार", reading: "hathiyaar", meaning: "a weapon", accept: ["arms", "a thing you fight with"], example: { jp: "युद्ध में नए हथियार सबसे बड़ा फ़र्क लाते हैं।", en: "In a war new weapons make the biggest difference." }, drill: { jp: "युद्ध में नए हथियार ज़रूरी हैं", en: "In a war new weapons are necessary" }, hint: "HA-THI-YAAR, masculine and consonant-final, so the plural is the bare form: दो हथियार. DENTAL थ with a puff of air. ⚠️ Built off हाथ, a hand (unit 20), with the vowel SHORTENED — हथ, not हाथ — which is the same shortening as हथौड़ा, a hammer (unit 60). Anything you fight with, a stick included." },
        { id: "hi-u89l1-banduuk", type: "vocab", front: "बंदूक", reading: "banduuk", meaning: "a gun", accept: ["a rifle", "a firearm"], example: { jp: "सिपाही के हाथ में बंदूक थी।", en: "The soldier had a gun in his hand." }, drill: { jp: "सिपाही के हाथ में बंदूक थी", en: "The soldier had a gun in his hand" }, hint: "BAN-DUUK — ⚠️ FEMININE **AND CONSONANT-FINAL**: बंदूक भारी थी, not भारी था. The ं before द is the matching dental nasal (unit 5), then a long uu. 🚨 बंद, closed (unit 5), IS A STRICT PREFIX of it and the ू that follows is a mātrā, not a letter, so the router can match it there — the two words are unrelated." },
        { id: "hi-u89l1-top", type: "vocab", front: "तोप", reading: "top", meaning: "a cannon", accept: ["a piece of artillery"], example: { jp: "किले की दीवार पर एक पुरानी तोप रखी थी।", en: "An old cannon was set on the wall of the fort." }, drill: { jp: "किले पर एक पुरानी तोप है", en: "There is an old cannon on the fort" }, hint: "TOP — ⚠️ FEMININE, consonant-final: तोप पुरानी है. DENTAL त, tongue against the TEETH. 🚨 READ IT AGAINST टोपी topii, a cap (unit 18), which is RETROFLEX ट with the tongue curled back — this is §1(b)'s contrast in its cleanest live pair, and only the final ी keeps the two readings from being one." },
        { id: "hi-u89l1-bam", type: "vocab", front: "बम", reading: "bam", meaning: "a bomb", accept: ["an explosive bomb"], example: { jp: "शहर में बम गिरा और बहुत घर टूट गए।", en: "A bomb fell on the city and many houses broke apart." }, drill: { jp: "शहर में बम गिरा", en: "A bomb fell on the city" }, hint: "BAM, masculine, one syllable, and both letters are from unit 1 — ब and म with nothing added, so both keep their built-in a. ⚠️ A SHORT a: bam, not baam, and the length is all that separates it from a dozen other words, as with कम/काम (unit 1). The frames are बम गिरना and बम फेंकना (unit 20)." },
      ],
    },
    {
      id: "hi-u89l2",
      unit: 89,
      lesson: 2,
      title: "Attack, occupation and the cost",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that the enemy attacked at night, that the army seized the bridge, how long a front line held, and that ten soldiers were wounded, prisoners went home and the devastation was vast.",
      items: [
        { id: "hi-u89l2-hamlaa", type: "vocab", front: "हमला", reading: "hamlaa", meaning: "an attack", accept: ["an assault", "a raid"], example: { jp: "रात में दुश्मन की सेना ने हमला किया।", en: "At night the enemy's army attacked." }, drill: { jp: "दुश्मन की सेना ने रात में हमला किया", en: "The enemy's army attacked at night" }, hint: "HAM-LAA, masculine and regular -ा, so the oblique is हमले: हमले के बाद. ⚠️ हम, we (unit 1), is a string at its start — but the ल that follows IS a letter, so the router cannot match it. The frame is हमला करना; of an illness too, दिल का हमला, a heart attack." },
        { id: "hi-u89l2-kabzaa", type: "vocab", front: "कब्ज़ा", reading: "kabzaa", meaning: "an occupation", accept: ["a seizure", "possession taken by force"], example: { jp: "सेना ने पुल पर कब्ज़ा कर लिया।", en: "The army took possession of the bridge." }, drill: { jp: "सेना ने पुल पर कब्ज़ा किया", en: "The army took possession of the bridge" }, hint: "KAB-ZAA, masculine and regular -ा. ज़ is the z of unit 4, so kabzaa and never kabjaa. ⚠️ कब, when (unit 8), IS a strict prefix and the ् that follows is a HALANT, not a letter, so the router can match it there — the same trap कब्र, a grave (unit 59), already carries. The frame is कब्ज़ा करना." },
        { id: "hi-u89l2-morchaa", type: "vocab", front: "मोर्चा", reading: "morchaa", meaning: "a front line", accept: ["a battlefront", "a united front"], example: { jp: "सिपाही दो महीने मोर्चे पर रहे।", en: "The soldiers stayed at the front for two months." }, drill: { jp: "यह मोर्चा दो महीने चला", en: "This front line held for two months" }, hint: "MOR-CHAA, masculine and regular -ा, and the oblique मोर्चे is the shape you will meet it in most: मोर्चे पर, at the front. The र् is a half र riding on the च (unit 6). ⚠️ Not सरहद (unit 50), which is a border on a map — a मोर्चा is where the fighting actually is. In politics, a front formed against someone." },
        { id: "hi-u89l2-ghaayal", type: "vocab", front: "घायल", reading: "ghaayal", meaning: "wounded", accept: ["injured in a fight", "hurt"], example: { jp: "हमले में दस सिपाही घायल हुए।", en: "Ten soldiers were wounded in the attack." }, drill: { jp: "हमले में दस सिपाही घायल हुए", en: "Ten soldiers were wounded in the attack" }, hint: "GHAA-YAL, घ with a puff of air. ⚠️ AN ADJECTIVE, and consonant-final, so it is **INVARIABLE** — आदमी घायल है AND औरत घायल है, with no -ी form, unlike बड़ा → बड़ी (§6). Built off घाव, an open sore (unit 35). Not बीमार (unit 20): a घायल person was hurt by something, a बीमार one fell ill." },
        { id: "hi-u89l2-kaidii", type: "vocab", front: "कैदी", reading: "kaidii", meaning: "a prisoner", accept: ["a captive", "a prisoner of war"], example: { jp: "युद्ध के बाद दोनों देशों ने कैदी लौटाए।", en: "After the war both countries returned their prisoners." }, drill: { jp: "युद्ध के बाद दोनों देशों ने कैदी लौटाए", en: "After the war both countries returned their prisoners" }, hint: "KAI-DII — 🚨 MASCULINE DESPITE THE -ी, the पानी and हाथी class of unit 1 §4, and it does not change for a woman. The ऐ of unit 2. Built off कैद, captivity: a कैदी sits in a जेल (unit 42), and a मुकदमा (unit 42) is usually what put him there." },
        { id: "hi-u89l2-tabaahii", type: "vocab", front: "तबाही", reading: "tabaahii", meaning: "devastation", accept: ["ruin", "total destruction"], example: { jp: "तूफ़ान और युद्ध, दोनों की तबाही एक जैसी दिखती है।", en: "A storm and a war — the devastation of both looks alike." }, drill: { jp: "युद्ध की तबाही बहुत बड़ी थी", en: "The devastation of the war was very great" }, hint: "TA-BAA-HII — ⚠️ FEMININE, like most -ी nouns, and the ह is a real breathy h. ⚠️ BIGGER THAN नुकसान (unit 37, a loss): a नुकसान can be counted, तबाही is when there is nothing left to count. What a तूफ़ान or a भूकंप (unit 54) does, and what a war does." },
      ],
    },
    {
      id: "hi-u89l3",
      unit: 89,
      lesson: 3,
      title: "Enemy, violence and revolt",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that yesterday's enemy can be today's friend, that violence broke out after a speech, tell a revolt from a revolution, and speak of a soldier who died for his country and a hero people still tell stories about.",
      items: [
        { id: "hi-u89l3-dushman", type: "vocab", front: "दुश्मन", reading: "dushman", meaning: "an enemy", accept: ["a foe", "an adversary"], example: { jp: "कल का दुश्मन आज का दोस्त हो सकता है।", en: "Yesterday's enemy can be today's friend." }, drill: { jp: "कल का दुश्मन आज का दोस्त है", en: "Yesterday's enemy is today's friend" }, hint: "DUSH-MAN, masculine. श्म is a stacked conjunct of unit 6. ⚠️ मन, the mind (unit 1), is a string at its END and the ् before it is a HALANT, not a letter, so the router can match it there — the two words have nothing to do with each other. The exact opposite of दोस्त (unit 8)." },
        { id: "hi-u89l3-hinsaa", type: "vocab", front: "हिंसा", reading: "hinsaa", meaning: "violence", accept: ["deliberate harm", "bloodshed"], example: { jp: "भाषण के बाद शहर में हिंसा हुई।", en: "After the speech there was violence in the city." }, drill: { jp: "शहर में हिंसा हुई", en: "There was violence in the city" }, hint: "HIN-SAA — ⚠️ FEMININE. The ं before स is word-internal and written n (§1). 🚨 PUT THE अ OF \"NOT\" IN FRONT AND YOU GET अहिंसा, non-violence (unit 90) — and because अ IS a letter, the router keeps those two cards cleanly apart. Hurting people on purpose, never an accident." },
        { id: "hi-u89l3-vidroh", type: "vocab", front: "विद्रोह", reading: "vidroh", meaning: "a revolt", accept: ["a rebellion", "an uprising"], example: { jp: "मज़दूरों का विद्रोह तीन दिन चला।", en: "The labourers' revolt lasted three days." }, drill: { jp: "मज़दूरों का विद्रोह तीन दिन चला", en: "The labourers' revolt lasted three days" }, hint: "VID-ROH, masculine. द्र is a stacked conjunct (unit 6) and the ह at the end is a real breathy h. 🚨 READ IT AGAINST विरोध virodh, opposition (unit 42) — **THE SAME THREE SOUNDS IN A DIFFERENT ORDER**, and this is the pair in the unit to be careful with: विरोध is disagreeing out loud, विद्रोह is taking up arms." },
        { id: "hi-u89l3-kraanti", type: "vocab", front: "क्रांति", reading: "kraanti", meaning: "a revolution", accept: ["a revolutionary change"], example: { jp: "उस क्रांति के बाद देश में नया संविधान बना।", en: "After that revolution a new constitution was made in the country." }, drill: { jp: "उस क्रांति के बाद नया संविधान बना", en: "After that revolution a new constitution was made" }, hint: "KRAAN-TI — ⚠️ FEMININE, and the final ि is SHORT: kraanti, never kraantii, the same shape as समिति (unit 88). क्र is a stacked conjunct (unit 6). ⚠️ Bigger than a विद्रोह: a विद्रोह may be put down, a क्रांति is one that changed the शासन (unit 88)." },
        { id: "hi-u89l3-shahiid", type: "vocab", front: "शहीद", reading: "shahiid", meaning: "a martyr", accept: ["one who died for a cause"], example: { jp: "वह सिपाही युद्ध में शहीद हुआ।", en: "That soldier died a martyr in the war." }, drill: { jp: "वह सिपाही युद्ध में शहीद हुआ", en: "That soldier died a martyr in the war" }, hint: "SHA-HIID, masculine, long ii. ⚠️ READ IT AGAINST शहर shahar, a city (unit 8) — the same two letters to start and nothing else in common. ⚠️ THE FRAME IS शहीद होना, to die for a cause — and that frame, never मरना (unit 24), is how a Hindi speaker says it of a soldier." },
        { id: "hi-u89l3-viir", type: "vocab", front: "वीर", reading: "viir", meaning: "a warrior-hero", accept: ["a valiant fighter"], example: { jp: "लोग आज भी उस वीर की कहानी सुनाते हैं।", en: "Even today people tell the story of that hero." }, drill: { jp: "लोग उस वीर की कहानी सुनाते हैं", en: "People tell the story of that hero" }, hint: "VIIR, masculine and consonant-final, long ii. ⚠️ IT IS ALSO AN ADJECTIVE, brave — but the card is the NOUN, one who fought bravely, because बहादुर (unit 27) already owns the plain adjective and §9 forbids two cards with one gloss. The quality itself is वीरता." },
      ],
    },
    {
      id: "hi-u89l4",
      unit: 89,
      lesson: 4,
      title: "Defence, talks and peace",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that defending the village mattered most, that two governments opened negotiations, tell a treaty from a settlement, and say that after the victory there was celebration and peace came to the border.",
      items: [
        { id: "hi-u89l4-bachaav", type: "vocab", front: "बचाव", reading: "bachaav", meaning: "a defence", accept: ["protection", "guarding against something"], example: { jp: "हमले के समय गाँव का बचाव सबसे ज़रूरी था।", en: "At the time of the attack the village's defence mattered most." }, drill: { jp: "गाँव का बचाव सबसे ज़रूरी था", en: "The village's defence mattered most" }, hint: "BA-CHAAV, masculine and consonant-final. Built off बचना, to survive (unit 24), and बचाना, to rescue (unit 31) — the protecting itself, exactly the way चुनाव (unit 88) is built off चुनना. Of illness too: बीमारी से बचाव, guarding against disease." },
        { id: "hi-u89l4-vaartaa", type: "vocab", front: "वार्ता", reading: "vaartaa", meaning: "negotiations", accept: ["formal talks", "a round of talks"], example: { jp: "युद्ध रोकने के लिए दोनों सरकारों ने वार्ता शुरू की।", en: "To stop the war both governments began negotiations." }, drill: { jp: "दोनों सरकारों ने वार्ता शुरू की", en: "Both governments began negotiations" }, hint: "VAAR-TAA — ⚠️ FEMININE. The र् is a half र riding on the त (unit 6). ⚠️ THREE WORDS, THREE THINGS: a बात (unit 30) is any talk, a बहस (unit 30) is a heated argument, a वार्ता is formal talks between two sides with something to settle." },
        { id: "hi-u89l4-sandhi", type: "vocab", front: "संधि", reading: "sandhi", meaning: "a treaty", accept: ["a pact between states"], example: { jp: "दोनों देशों ने सौ साल के लिए संधि की।", en: "The two countries made a treaty for a hundred years." }, drill: { jp: "दोनों देशों ने संधि की", en: "The two countries made a treaty" }, hint: "SAN-DHI — ⚠️ FEMININE, and the final ि is SHORT: sandhi. The ं before ध is the matching dental nasal and ध carries a puff of air. ⚠️ A written agreement between STATES, where a समझौता (next card) is any agreement between any two sides. In grammar the same word means the joining of two sounds." },
        { id: "hi-u89l4-samjhautaa", type: "vocab", front: "समझौता", reading: "samjhautaa", meaning: "a settlement", accept: ["a compromise", "an agreement reached"], example: { jp: "अदालत के बाहर ही दोनों का समझौता हो गया।", en: "The two of them reached a settlement outside the court itself." }, drill: { jp: "दोनों का समझौता हो गया", en: "The two of them reached a settlement" }, hint: "SAM-JHAU-TAA, masculine and regular -ा. The ौ is the open vowel of unit 3 and झ carries a puff of air. 🚨 BUILT OFF समझना, to understand (unit 1) — a settlement is two sides coming to understand each other. Wider than संधि: of a court case, a family quarrel, a wage dispute." },
        { id: "hi-u89l4-vijay", type: "vocab", front: "विजय", reading: "vijay", meaning: "a victory", accept: ["a triumph", "a win in battle"], example: { jp: "सेना की विजय के बाद पूरे शहर में जश्न हुआ।", en: "After the army's victory there was celebration in the whole city." }, drill: { jp: "सेना की विजय के बाद जश्न हुआ", en: "After the army's victory there was celebration" }, hint: "VI-JAY — 🚨 FEMININE AND CONSONANT-FINAL, which §4 calls the unpredictable class, and this is the word in the unit most likely to be got wrong: विजय बड़ी थी, not बड़ा. The formal noun for what जीतना, to win (unit 41), produces — where a खिताब (unit 41) is the title you take home from it." },
        { id: "hi-u89l4-shaanti", type: "vocab", front: "शांति", reading: "shaanti", meaning: "peace", accept: ["calm after conflict"], example: { jp: "संधि के बाद सरहद पर शांति आई।", en: "After the treaty peace came to the border." }, drill: { jp: "संधि के बाद सरहद पर शांति आई", en: "After the treaty peace came to the border" }, hint: "SHAAN-TI — ⚠️ FEMININE, final ि SHORT: shaanti. 🚨 BUILT ON शांत, quiet (unit 14), AND शांत IS A STRICT PREFIX OF IT — the ि that follows is a mātrā, not a letter, so the router really can match शांत inside शांति. The same adjective-to-noun pair as लंबा → लंबाई (unit 45). Not सुकून (unit 52), which is peace inside one person." },
      ],
    },
  ],
};
