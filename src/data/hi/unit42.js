// HI Unit 42 — समाज और सरकार ("Society and the state") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 2 (u41–u50). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// SLOT KEPT — the scaffold called it "Society and daily life" and the society half
// was measured to have a real remainder. unit31.js §A8 recorded SOCIETY/STATE as
// **6 of 12**, naming सरकार, नेता, कानून, समाज and जनता as absent. Re-derived on the
// merged 960-card corpus before authoring: all five are still absent, and so is
// every word for a court, a crime, a citizen, a soldier or a vote. The "daily life"
// half of the old title IS spent — u12 रोज़ के काम and u26 और रोज़ के काम own the
// routine — so this unit keeps the society reading of the slot and drops the other.
//
// ⚠️ FOUR SYNONYMS OF TAUGHT WORDS WERE REFUSED BY NAME, extending unit31.js's list
// of nine so that block 3 does not re-add them:
//     अधिकार  = हक (u32l3, "an entitlement")
//     जुर्म    = अपराध (this unit) — one of the two had to go; अपराध is the one a
//               newspaper headline uses, and u44 is the newspaper unit
//     सेना     = फ़ौज (this unit, l4)
//     मुल्क    = देश (u8l1) — which is why u50's country unit uses राज्य and इलाका
//               instead of a second word for "a country"
// And one was refused for the §9 free-pass reason rather than synonymy: वोट vot is
// carded but **पुलिस is already u9's**, so no second word for the police is taught.
//
// ⚠️ TWO AGENT NOUNS OF TAUGHT VERBS, and the precedent is u18l4's दुकानदार beside
// u14's दुकान: चोर (a thief) sits beside चुराना (u31l3, to steal), and नागरिक has no
// verb at all. `scripts/scope-hi.mjs` generates neither — its own header says
// "दुकान does not generate दुकानदार, and those stay separate fronts that must be
// taught" — so both are ordinary new fronts.
//
// GENDER TRAPS (§4), each named in its own hint:
//   ⚠️ सरकार, अदालत, फ़ौज, जनता, आबादी and सेवा are FEMININE — and सरकार, अदालत and
//   फ़ौज all end in a CONSONANT, so nothing in the shape tells you. भारत सरकार ने
//   कानून बदला, and यह सरकार नई है, never नया.
//   नेता is MASCULINE despite the -ा (regular), सिपाही and मंत्री are MASCULINE
//   despite the -ी, like पानी, दर्जी and नाई.
//   समाज, कानून, अपराध, चोर, जेल — ⚠️ जेल is FEMININE, गवाह, मुकदमा, झंडा, विरोध,
//   भाषण, वोट, नागरिक are MASCULINE.
//   गरीब and अमीर AGREE (गरीब आदमी, गरीब औरत — both invariant in the direct
//   singular because they end in a consonant; the plural oblique is गरीबों).
//
// RETROFLEX/DENTAL (§1b): no new colliding pair, checked against all 960 readings
// plus block 2's own. अदालत adaalat, अपराध apraadh, मुकदमा mukadmaa and नेता netaa
// are all DENTAL and no retroflex counterpart exists in the corpus. §1(b)'s doubling
// hatch fires nowhere here.
// ⚠️ ONE MARK-BOUNDARY PAIR THIS UNIT CREATES, and it is the same class as u40's
// सूट/सूत note: **कदम (u48l1) whole-word-matches INSIDE मुकदमा**, because the
// router's boundary test is `\p{L}` and both seams here are mātrā. Neither word
// appears in the other's example or drill, and `selfcheck-hi-a2-block2.mjs` checks
// it mechanically rather than by eye. Named so it is not rediscovered.
// ⚠️ AND ONE NEAR-COLLISION WORTH ITS HINT: कानून kaanuun against कान kaan, the ear
// — only §1's length-by-doubling separates the first syllable, and कान sits inside
// कानून for the same `\p{M}` reason.
export const HI_UNIT42 = {
  id: "hi-u42",
  lang: "hi",
  title: "समाज और सरकार",
  order: 42,
  stage: "a2",
  lessons: [
    {
      id: "hi-u42l1",
      unit: 42,
      lesson: 1,
      title: "The government and the law",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the parts of a state — government, leader, minister, law, court, vote — and say what each one did.",
      items: [
        { id: "hi-u42l1-sarkaar", type: "vocab", front: "सरकार", reading: "sarkaar", meaning: "the government", accept: ["the state authorities", "an administration"], example: { jp: "सरकार ने नया कानून बनाया।", en: "The government made a new law." }, drill: { jp: "यह सरकार बहुत नई है", en: "This government is very new" }, hint: "SAR-KAAR, ⚠️ FEMININE despite the consonant ending — यह सरकार नई है, never नया. §4's warning in full: the shape tells you nothing. सरकारी, 'government-run', is the adjective you will see on every board." },
        { id: "hi-u42l1-netaa", type: "vocab", front: "नेता", reading: "netaa", meaning: "a leader", accept: ["a politician", "the head of a party"], example: { jp: "उस नेता का भाषण बहुत लंबा था।", en: "That leader's speech was very long." }, drill: { jp: "गाँव का नेता बहुत होशियार है", en: "The village leader is very shrewd" }, hint: "NE-TAA, MASCULINE and regular for a -ा noun, plural नेता unchanged, DENTAL त and न. It covers a party politician and the person at the front of any group. A कप्तान leads a टीम instead." },
        { id: "hi-u42l1-mantrii", type: "vocab", front: "मंत्री", reading: "mantrii", meaning: "a minister", accept: ["a cabinet member", "a secretary of state"], example: { jp: "मंत्री ने अपना फ़ैसला बदल दिया।", en: "The minister changed his decision." }, drill: { jp: "मंत्री ने पूरा हिसाब देखा", en: "The minister looked at the full account" }, hint: "MAN-TRII, ⚠️ MASCULINE despite the -ी, like पानी and दर्जी, with the त्र conjunct and the ं nasal. प्रधानमंत्री is the prime minister — the same word with 'chief' in front." },
        { id: "hi-u42l1-kaanuun", type: "vocab", front: "कानून", reading: "kaanuun", meaning: "a law", accept: ["legislation", "the rule of law"], example: { jp: "हर नागरिक को कानून मानना ज़रूरी है।", en: "Obeying the law matters for every citizen." }, drill: { jp: "यह कानून बहुत पुराना है", en: "This law is very old" }, hint: "KAA-NUUN, MASCULINE, PLAIN क — no क़ anywhere in this course. ⚠️ Read it against कान kaan, an ear: both start कान, and only §1's long uu keeps them apart. नियम is a rule you set; a कानून is passed." },
        { id: "hi-u42l1-adaalat", type: "vocab", front: "अदालत", reading: "adaalat", meaning: "a court of law", accept: ["a law court", "a tribunal"], example: { jp: "अदालत ने उस आदमी को छोड़ दिया।", en: "The court let the man go." }, drill: { jp: "अदालत शहर के बीच है", en: "The court is in the middle of town" }, hint: "A-DAA-LAT, ⚠️ FEMININE despite the consonant ending — यह अदालत, इस अदालत में. All DENTAL letters. A दरबार, in the last unit of this band, is a king's court instead." },
        { id: "hi-u42l1-vot", type: "vocab", front: "वोट", reading: "vot", meaning: "a vote", accept: ["a ballot", "the act of voting"], example: { jp: "उसने पहली बार वोट डाला।", en: "He cast a vote for the first time." }, drill: { jp: "हर नागरिक का वोट बराबर है", en: "Every citizen's vote is equal" }, hint: "VOT, MASCULINE, retroflex ट, plural वोट unchanged. Borrowed from English and the phrase is वोट डालना, 'to throw a vote' — डालना is the verb the course has had since the activities units." },
      ],
    },
    {
      id: "hi-u42l2",
      unit: 42,
      lesson: 2,
      title: "The people, rich and poor",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about society, the public and the population, and say who is rich and who is poor.",
      items: [
        { id: "hi-u42l2-samaaj", type: "vocab", front: "समाज", reading: "samaaj", meaning: "society", accept: ["the community", "social life"], example: { jp: "हमारे समाज में औरत का काम बदल गया।", en: "In our society women's work has changed." }, drill: { jp: "समाज बहुत धीरे बदलता है", en: "Society changes very slowly" }, hint: "SA-MAAJ, MASCULINE, uncountable. Society as a whole, and also a particular community — मज़दूर समाज. Read the long aa in the middle against संसार, the world, which is the wider word." },
        { id: "hi-u42l2-jantaa", type: "vocab", front: "जनता", reading: "jantaa", meaning: "the general public", accept: ["the people at large", "the populace"], example: { jp: "जनता ने सरकार से सवाल पूछा।", en: "The public put a question to the government." }, drill: { jp: "जनता इस कानून से खुश नहीं", en: "The public is not happy with this law" }, hint: "JAN-TAA, ⚠️ FEMININE despite the -ा — जनता खुश है, and always SINGULAR even though English says 'the people are'. लोग is people you can count; जनता is the public as one body." },
        { id: "hi-u42l2-naagrik", type: "vocab", front: "नागरिक", reading: "naagrik", meaning: "a citizen", accept: ["a national of a country", "a member of the public"], example: { jp: "हर नागरिक को यह हक मिलता है।", en: "Every citizen gets this entitlement." }, drill: { jp: "वह भारत का नागरिक है", en: "He is a citizen of India" }, hint: "NAAG-RIK, MASCULINE, plural नागरिक unchanged. From नगर, a city — a citizen is literally a city-dweller, and नागरिकता is citizenship. The क is PLAIN, never क़." },
        { id: "hi-u42l2-gariib", type: "vocab", front: "गरीब", reading: "gariib", meaning: "poor", accept: ["badly off", "with no money"], example: { jp: "उस गाँव के लोग बहुत गरीब थे।", en: "The people of that village were very poor." }, drill: { jp: "यह गाँव बहुत गरीब है", en: "This village is very poor" }, hint: "GA-RIIB, INVARIANT in the direct singular because it ends in a consonant — गरीब आदमी and गरीब औरत both — and the oblique plural is गरीबों. Read it against करीब, which this course does not card, and against गरीबी, poverty, which it does not either." },
        { id: "hi-u42l2-amiir", type: "vocab", front: "अमीर", reading: "amiir", meaning: "rich", accept: ["wealthy", "well off"], example: { jp: "उस अमीर आदमी ने पूरा मकसद बताया।", en: "That rich man explained his whole purpose." }, drill: { jp: "यह शहर बहुत अमीर है", en: "This city is very rich" }, hint: "A-MIIR, INVARIANT like गरीब and its exact opposite. महँगा is what a thing costs; अमीर is what a person has. अमीरी, richness, is not carded." },
        { id: "hi-u42l2-aabaadii", type: "vocab", front: "आबादी", reading: "aabaadii", meaning: "the population", accept: ["how many people live somewhere", "inhabitants"], example: { jp: "इस शहर की आबादी बहुत बढ़ी।", en: "This city's population grew a lot." }, drill: { jp: "गाँव की आबादी बहुत कम है", en: "The village's population is very small" }, hint: "AA-BAA-DII, FEMININE — इस शहर की आबादी. From आबाद, 'settled', which is why so many Indian city names end in -ābād. संख्या is a number you write down; आबादी is how many people there are." },
      ],
    },
    {
      id: "hi-u42l3",
      unit: 42,
      lesson: 3,
      title: "Crime, the court and justice",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Report a crime and follow what happens next — the thief, the witness, the case and the verdict.",
      items: [
        { id: "hi-u42l3-apraadh", type: "vocab", front: "अपराध", reading: "apraadh", meaning: "a crime", accept: ["an offence", "a criminal act"], example: { jp: "उसने कोई बड़ा अपराध नहीं किया।", en: "He did not commit any big crime." }, drill: { jp: "यह अपराध बहुत पुराना है", en: "This crime is very old" }, hint: "AP-RAADH, MASCULINE, with the प्र conjunct and the aspirated DENTAL ध. A कसूर is a fault you own up to; an अपराध is what a कानून forbids. जुर्म means the same and this course does not teach it." },
        { id: "hi-u42l3-chor", type: "vocab", front: "चोर", reading: "chor", meaning: "a thief", accept: ["a robber", "someone who steals"], example: { jp: "चोर ने रात में ताला तोड़ा।", en: "The thief broke the lock in the night." }, drill: { jp: "चोर बगीचे से निकला", en: "The thief came out of the garden" }, hint: "CHOR, MASCULINE, plural चोर unchanged, feminine चोरनी. It goes with चुराना, to steal, from the transitive-verbs unit. चोरी is the theft itself and is not carded. Not चोट, an injury." },
        { id: "hi-u42l3-jel", type: "vocab", front: "जेल", reading: "jel", meaning: "a jail", accept: ["a prison", "being locked up"], example: { jp: "अदालत ने उसे जेल भेज दिया।", en: "The court sent him to jail." }, drill: { jp: "जेल शहर से बहुत दूर है", en: "The jail is a long way from the city" }, hint: "JEL, ⚠️ FEMININE — इस जेल में, यह जेल पुरानी है. Borrowed from English gaol. सज़ा is the punishment; जेल is the building. Not जेब, a pocket, one letter away." },
        { id: "hi-u42l3-gavaah", type: "vocab", front: "गवाह", reading: "gavaah", meaning: "a witness", accept: ["someone who saw it happen", "a deponent"], example: { jp: "अदालत में एक ही गवाह आया।", en: "Only one witness came to the court." }, drill: { jp: "उस काम का कोई गवाह नहीं", en: "There is no witness to that deed" }, hint: "GA-VAAH, MASCULINE, plural गवाह unchanged, with the breathy ह at the end which Hindi never drops. गवाही is the testimony and is not carded. The ही in the example is the emphatic particle, 'only one'." },
        { id: "hi-u42l3-mukadmaa", type: "vocab", front: "मुकदमा", reading: "mukadmaa", meaning: "a court case", accept: ["a lawsuit", "legal proceedings"], example: { jp: "यह मुकदमा दस साल चला।", en: "This case went on for ten years." }, drill: { jp: "मुकदमा अभी अदालत में है", en: "The case is still in court" }, hint: "MU-KAD-MAA, MASCULINE, plural मुकदमे, PLAIN क. मुकदमा करना is to sue somebody. ⚠️ It contains the letters of कदम, a footstep, which the future unit cards — two unrelated words, and neither appears in the other's sentences." },
        { id: "hi-u42l3-insaaf", type: "vocab", front: "इंसाफ़", reading: "insaaf", meaning: "justice", accept: ["fairness", "a fair outcome"], example: { jp: "गरीब लोगों को इंसाफ़ कम मिलता है।", en: "Poor people get less justice." }, drill: { jp: "उसे अदालत से इंसाफ़ मिला", en: "He got justice from the court" }, hint: "IN-SAAF, MASCULINE, uncountable, with the फ़ of unit 4 and the ं before स read as a plain n. इंसाफ़ करना is to do right by someone. Not साफ़ saaf, clean, though the last syllable is spelled the same." },
      ],
    },
    {
      id: "hi-u42l4",
      unit: 42,
      lesson: 4,
      title: "The army, the flag and the protest",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about serving a country and about objecting to it — army, soldier, flag, protest, speech, service.",
      items: [
        { id: "hi-u42l4-fauj", type: "vocab", front: "फ़ौज", reading: "fauj", meaning: "the army", accept: ["the armed forces", "a military force"], example: { jp: "उसका बेटा फ़ौज में काम करता है।", en: "His son works in the army." }, drill: { jp: "फ़ौज उस जगह पर तैयार थी", en: "The army was ready at that place" }, hint: "FAUJ, ⚠️ FEMININE — यह फ़ौज, इस फ़ौज में — with the फ़ of unit 4 and the औ mātrā. सेना means the same and this course does not teach it, so फ़ौज is the only word you need." },
        { id: "hi-u42l4-sipaahii", type: "vocab", front: "सिपाही", reading: "sipaahii", meaning: "a soldier", accept: ["a trooper", "a constable"], example: { jp: "एक सिपाही दरवाज़े पर बैठा था।", en: "A soldier was sitting at the door." }, drill: { jp: "सिपाही ने पूरा रास्ता रोका", en: "The soldier blocked the whole road" }, hint: "SI-PAA-HII, ⚠️ MASCULINE despite the -ी, like मंत्री above and पानी before it. A fighting soldier and, in older Indian English, a police constable — the word 'sepoy' is this one." },
        { id: "hi-u42l4-jhandaa", type: "vocab", front: "झंडा", reading: "jhandaa", meaning: "a flag", accept: ["a banner", "a standard"], example: { jp: "स्कूल की छत पर झंडा था।", en: "There was a flag on the school roof." }, drill: { jp: "यह झंडा तीन रंग का है", en: "This flag has three colours" }, hint: "JHAN-DAA, MASCULINE, plural झंडे, with the ं before the RETROFLEX ड read as n. The national flag and a party banner, both. झंडा फहराना, to hoist it, is not carded." },
        { id: "hi-u42l4-virodh", type: "vocab", front: "विरोध", reading: "virodh", meaning: "opposition", accept: ["a protest", "objection"], example: { jp: "जनता ने उस कानून का विरोध किया।", en: "The public opposed that law." }, drill: { jp: "इस फ़ैसले का विरोध बहुत हुआ", en: "There was a lot of opposition to this decision" }, hint: "VI-RODH, MASCULINE, aspirated DENTAL ध. The frame is X का विरोध करना, 'to oppose X'. इनकार is refusing to do a thing; विरोध is standing against it in public." },
        { id: "hi-u42l4-bhaashan", type: "vocab", front: "भाषण", reading: "bhaashan", meaning: "a public address", accept: ["a speech given to a crowd", "an oration"], example: { jp: "नेता का भाषण एक घंटा चला।", en: "The leader's address went on for an hour." }, drill: { jp: "उसने बहुत अच्छा भाषण दिया", en: "He gave a very good address" }, hint: "BHAA-SHAN, MASCULINE, with ष (the second sh, unit 4) and the RETROFLEX ण, both read plainly as sh and n. From भाषा, a language. भाषण देना is to give one." },
        { id: "hi-u42l4-sevaa", type: "vocab", front: "सेवा", reading: "sevaa", meaning: "serving others", accept: ["looking after people", "attendance on someone"], example: { jp: "उस नर्स ने सालों तक सेवा की।", en: "That nurse served for years." }, drill: { jp: "बूढ़े लोगों की सेवा ज़रूरी है", en: "Looking after old people matters" }, hint: "SE-VAA, FEMININE, uncountable — सेवा करना, to serve or care for somebody. It is what you do for parents, patients and guests, not a job: नौकरी is the job. Not सेब, an apple." },
      ],
    },
  ],
};
