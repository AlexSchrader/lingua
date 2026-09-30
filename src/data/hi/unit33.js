// HI Unit 33 — रेल और हवाई जहाज़ ("Rail and air") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// WHY THIS SLOT KEPT ITS THEME, AND WHAT IT MAY NOT TOUCH. u29 सफ़र already owns
// the JOURNEY as an idea — सफ़र, यात्री, दूरी, मंज़िल, मोड़, सवारी, पहिया, गति,
// इंतज़ार, अड्डा, चौराहा, नक्शा, खतरा, चढ़ना, उतरना, ठहरना, घूमना. The probe still
// found travel at **8 of 18**: the course could say "a journey" and could not say
// a train, a flight, a seat, a delay, a passport or a boat. So this unit is the
// MACHINERY of travel, and it re-teaches nothing of u29's.
// ⚠️ THREE WORDS WERE DROPPED FOR BEING SYNONYMS OF u29's, and they are named here
// so nobody adds them later thinking they are missing:
//   • यात्रा — a pure synonym of सफ़र (u29l1, "a journey"). Not carded anywhere.
//   • भाड़ा — किराया (u15l4) already carries "a fare" in its accept[].
//   • रफ़्तार — गति (u29l4) is "speed". One speed word is enough.
//
// ⚠️ हवाई IS IN THE TITLE AND IS NOT IN ANY SENTENCE, ON PURPOSE. हवाई जहाज़ is
// THE word for an aeroplane, but हवाई is an adjective derived from हवा (u16l4) that
// no rule generates and that no learner produces alone — so it fails the FREE test
// (closed-class or a proper name) and it is not a word worth a card. It is taught
// in जहाज़'s hint instead, where a learner meets it and is never asked for it.
// The same reasoning keeps it out of every example: `scripts/scope-hi.mjs` checks
// examples and drills, and it is right to.
//
// ⚠️ TWO LOANWORDS WERE REJECTED FOR A §9 FREE PASS, MEASURED WITH checkProduce.
// पेट्रोल reads `petrol` and हेलमेट reads `helmet` — identical to the English a
// learner would type off the gloss, so `checkProduce` would accept the prompt as
// the answer. ड्राइवर (draaivar vs "driver") and धक्का took their places. Every
// other loanword here was checked the same way: रेल rel, सीट siit, लाइन laain,
// पासपोर्ट paasport, रिक्शा rikshaa, अटैची ataichii — none folds to its own gloss.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   रेल, पटरी, सीट, लाइन, देरी, नाव, लहर, सुरंग, अटैची, कंघी, वापसी are FEMININE —
//   and नाव, लहर and सुरंग end in a consonant, which §4 warns is unpredictable.
//   जहाज़, बंदरगाह, टिकटघर, पासपोर्ट, रिक्शा, ड्राइवर, जाम, फुटपाथ, कंबल, शोर are
//   MASCULINE. छाता and धक्का are MASCULINE -ा, regular. उड़ान is FEMININE.
//
// RETROFLEX/DENTAL: no new pair, checked against all 792 readings. पटरी patrii,
// सीट siit, अटैची ataichii, फुटपाथ phutpaath (retroflex ट and dental थ in one
// word) and उड़ान uraan have no counterpart in the corpus — no पतरी, सीत, अतैची,
// फुतपाथ or उरान — so §1(b)'s doubling hatch fires nowhere new.
export const HI_UNIT33 = {
  id: "hi-u33",
  lang: "hi",
  title: "रेल और हवाई जहाज़",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "hi-u33l1",
      unit: 33,
      lesson: 1,
      title: "Take the train",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Buy a ticket, find your seat and ask about a delay at an Indian railway station.",
      items: [
        { id: "hi-u33l1-rel", type: "vocab", front: "रेल", reading: "rel", meaning: "the railway", accept: ["a train", "the trains", "rail"], example: { jp: "यह रेल हमारे शहर तक जाती है।", en: "This train goes as far as our city." }, drill: { jp: "यह रेल बहुत तेज़ चलती है", en: "This train runs very fast" }, hint: "REL, FEMININE — so जाती है, not जाता है. गाड़ी (u14) is any vehicle and can mean a train too; रेल is the railway itself. रेलगाड़ी is the full compound." },
        { id: "hi-u33l1-patrii", type: "vocab", front: "पटरी", reading: "patrii", meaning: "a railway track", accept: ["the rails", "a train track"], example: { jp: "पटरी के पास खेलना मना है।", en: "Playing near the track is not allowed." }, drill: { jp: "पटरी पर मत चलो", en: "Do not walk on the track" }, hint: "PAT-RII, FEMININE, plural पटरियाँ, retroflex ट. Compare रोटी rotii, a flatbread — same ending, different letter. And note मना है from u32: infinitive plus मना है is how a Hindi sign says no." },
        { id: "hi-u33l1-tikatghar", type: "vocab", front: "टिकटघर", reading: "tikatghar", meaning: "the ticket office", accept: ["the booking office", "the ticket window"], example: { jp: "टिकटघर स्टेशन के अंदर है।", en: "The ticket office is inside the station." }, drill: { jp: "टिकटघर में बहुत भीड़ थी", en: "There was a big crowd in the ticket office" }, hint: "TI-KAT-GHAR, MASCULINE — टिकट (u9) plus घर (u2), literally 'ticket house'. Hindi builds a lot of nouns this way, and you can usually read a new one straight off its parts." },
        { id: "hi-u33l1-laain", type: "vocab", front: "लाइन", reading: "laain", meaning: "a queue", accept: ["a line of people", "a row", "standing in line"], example: { jp: "टिकट के लिए लाइन बहुत लंबी थी।", en: "The queue for tickets was very long." }, drill: { jp: "लाइन में बहुत लोग थे", en: "There were a lot of people in the queue" }, hint: "LAA-IN, FEMININE, and spelled with इ as a separate letter because the English 'line' has two vowel sounds running together. लाइन लगाना is to form a queue." },
        { id: "hi-u33l1-siit", type: "vocab", front: "सीट", reading: "siit", meaning: "a seat", accept: ["a place to sit", "a reserved place"], example: { jp: "रेल में मेरी सीट खिड़की के पास थी।", en: "My seat on the train was next to the window." }, drill: { jp: "यह सीट मेरी नहीं है", en: "This seat is not mine" }, hint: "SIIT, FEMININE, retroflex ट and a long ii. कुर्सी (u9) is the piece of furniture; सीट is your allotted place on a train, a bus or a plane." },
        { id: "hi-u33l1-derii", type: "vocab", front: "देरी", reading: "derii", meaning: "a delay", accept: ["lateness", "running late", "being held up"], example: { jp: "आज रेल में दो घंटे की देरी है।", en: "There is a two-hour delay on the train today." }, drill: { jp: "इस काम में बहुत देरी हुई", en: "There was a lot of delay in this work" }, hint: "DE-RII, FEMININE — the noun of देर (u11), which is the lateness itself. देरी होना is to be delayed, and हुई is होना's irregular past in the feminine." },
      ],
    },
    {
      id: "hi-u33l2",
      unit: 33,
      lesson: 2,
      title: "Fly and sail",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about a flight and a boat trip, and say what you need at a border.",
      items: [
        { id: "hi-u33l2-jahaaz", type: "vocab", front: "जहाज़", reading: "jahaaz", meaning: "a ship", accept: ["a vessel", "a boat", "an aeroplane", "a plane"], example: { jp: "यह जहाज़ समुद्र में बहुत तेज़ चलता है।", en: "This ship travels very fast on the sea." }, drill: { jp: "बड़ा जहाज़ बंदरगाह में है", en: "The big ship is in the harbour" }, hint: "JA-HAAZ, MASCULINE, with the ज़ of unit 4. On its own it is a ship — and हवाई जहाज़, an 'air ship', is how Hindi says aeroplane. That is the phrase in this unit's title." },
        { id: "hi-u33l2-uraan", type: "vocab", front: "उड़ान", reading: "uraan", meaning: "a flight", accept: ["a flight on a plane", "flying"], example: { jp: "हमारी उड़ान कल सुबह है।", en: "Our flight is tomorrow morning." }, drill: { jp: "आज हमारी उड़ान नहीं है", en: "Our flight is not today" }, hint: "U-RAAN, FEMININE, with the curled-back ड़ of §1(c) — so it reads with an r, not a d. It is the noun of उड़ना, to fly, which Hindi has not carded; the flight itself is the word you need." },
        { id: "hi-u33l2-paasport", type: "vocab", front: "पासपोर्ट", reading: "paasport", meaning: "a passport", accept: ["travel papers", "the book you show at a border"], example: { jp: "बाहर जाने के लिए पासपोर्ट चाहिए।", en: "You need a passport to go abroad." }, drill: { jp: "मेरा पासपोर्ट थैले में है", en: "My passport is in the bag" }, hint: "PAAS-PORT, MASCULINE. Read it slowly — the र् sits on top of the ट as a little hook, which unit 6 taught as a conjunct. Note चाहिए again: needed, and it never changes shape." },
        { id: "hi-u33l2-bandargaah", type: "vocab", front: "बंदरगाह", reading: "bandargaah", meaning: "a harbour", accept: ["a port", "a dock", "where ships come in"], example: { jp: "इस शहर का बंदरगाह बहुत पुराना है।", en: "This city's harbour is very old." }, drill: { jp: "बंदरगाह में बहुत जहाज़ थे", en: "There were many ships in the harbour" }, hint: "BAN-DAR-GAAH, MASCULINE, and the ं before द is said through the nose as an n. Nothing to do with बंदर, a monkey — the -गाह ending is Persian for 'place'." },
        { id: "hi-u33l2-naav", type: "vocab", front: "नाव", reading: "naav", meaning: "a rowing boat", accept: ["a small boat", "a canoe"], example: { jp: "हम छोटी नाव में बैठकर नदी में गए।", en: "We sat in a small boat and went out onto the river." }, drill: { jp: "नदी में एक छोटी नाव थी", en: "There was a small boat on the river" }, hint: "NAAV, FEMININE despite the consonant ending — so छोटी नाव. A small rowing or paddling boat; a big one is a जहाज़. Read it against नाम naam, a name — one letter apart." },
        { id: "hi-u33l2-lahar", type: "vocab", front: "लहर", reading: "lahar", meaning: "a wave", accept: ["a wave of water", "a swell"], example: { jp: "समुद्र की लहरें आज बहुत ऊँची हैं।", en: "The sea's waves are very high today." }, drill: { jp: "समुद्र में एक बड़ी लहर थी", en: "There was a big wave on the sea" }, hint: "LA-HAR, FEMININE, plural लहरें — a consonant-final feminine takes ें, not एँ, which is §4's paradigm. समुद्र is u21's; the wave on it is this unit's." },
      ],
    },
    {
      id: "hi-u33l3",
      unit: 33,
      lesson: 3,
      title: "On the road",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get across a city by road: hail a rickshaw, talk to a driver and complain about the traffic.",
      items: [
        { id: "hi-u33l3-rikshaa", type: "vocab", front: "रिक्शा", reading: "rikshaa", meaning: "a rickshaw", accept: ["an auto", "a three-wheeler"], example: { jp: "हम स्टेशन से घर तक रिक्शा में गए।", en: "We went from the station to the house by rickshaw." }, drill: { jp: "रिक्शा बाज़ार के बाहर रुका", en: "The rickshaw stopped outside the market" }, hint: "RIK-SHAA, MASCULINE — the क्ष conjunct unit 6 taught, said ksh. In most Indian cities it now means the little three-wheeled auto, not a pulled cart." },
        { id: "hi-u33l3-draaivar", type: "vocab", front: "ड्राइवर", reading: "draaivar", meaning: "a driver", accept: ["someone who drives", "a chauffeur"], example: { jp: "बस के ड्राइवर ने गाड़ी रोकी।", en: "The bus driver stopped the vehicle." }, drill: { jp: "इस गाड़ी का ड्राइवर कौन है", en: "Who is this vehicle's driver?" }, hint: "DRAAI-VAR, MASCULINE, opening with the ड् plus र conjunct. चलाना (u29) is the verb; this is the person. And रोकी is u31's — the object गाड़ी is feminine, so the past verb is too." },
        { id: "hi-u33l3-dhakkaa", type: "vocab", front: "धक्का", reading: "dhakkaa", meaning: "a shove", accept: ["a push", "a bump", "a jolt"], example: { jp: "भीड़ में किसी ने मुझे धक्का दिया।", en: "Someone shoved me in the crowd." }, drill: { jp: "बस में मुझे धक्का लगा", en: "I got shoved on the bus" }, hint: "DHAK-KAA, MASCULINE, with the doubled क of §1's gemination and a dental ध. धक्का देना is to shove someone; धक्का लगना is to get shoved — Hindi's usual pair of 'do it' and 'have it happen to you'." },
        { id: "hi-u33l3-surang", type: "vocab", front: "सुरंग", reading: "surang", meaning: "a tunnel", accept: ["an underground passage"], example: { jp: "रेल पहाड़ की सुरंग से निकली।", en: "The train came out of the mountain tunnel." }, drill: { jp: "यह सुरंग बहुत लंबी है", en: "This tunnel is very long" }, hint: "SU-RANG, FEMININE despite the consonant ending, plural सुरंगें. The ं before ग is the nasal §1 writes as n. Not रंग, a colour (u16) — one letter longer and a different word." },
        { id: "hi-u33l3-jaam", type: "vocab", front: "जाम", reading: "jaam", meaning: "a traffic jam", accept: ["a jam", "gridlock", "traffic at a standstill"], example: { jp: "सुबह सड़क पर बहुत जाम था।", en: "There was a big traffic jam on the road this morning." }, drill: { jp: "आज बाज़ार में जाम है", en: "There is a jam at the market today" }, hint: "JAAM, MASCULINE, long aa — read it against काम kaam, work (u1l2), and नाम naam, a name. जाम लगना is for a jam to form." },
        { id: "hi-u33l3-phutpaath", type: "vocab", front: "फुटपाथ", reading: "phutpaath", meaning: "the pavement", accept: ["the sidewalk", "the footpath"], example: { jp: "फुटपाथ पर चलना ठीक होता है।", en: "Walking on the pavement is the right thing." }, drill: { jp: "बच्चे फुटपाथ पर चल रहे थे", en: "The children were walking on the pavement" }, hint: "PHUT-PAATH, MASCULINE, and it carries both t sounds at once: a RETROFLEX ट in the middle and a DENTAL थ at the end, which §1(b) merges in the reading and your tongue does not. सड़क (u5) is the road; this is the edge you walk on." },
      ],
    },
    {
      id: "hi-u33l4",
      unit: 33,
      lesson: 4,
      title: "What you take with you",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Pack for a trip and talk about the journey home.",
      items: [
        { id: "hi-u33l4-ataichii", type: "vocab", front: "अटैची", reading: "ataichii", meaning: "a suitcase", accept: ["a case", "a travel bag"], example: { jp: "मेरी अटैची में सब सामान है।", en: "All my things are in the suitcase." }, drill: { jp: "यह अटैची बहुत भारी है", en: "This suitcase is very heavy" }, hint: "A-TAI-CHII, FEMININE, retroflex ट — from English 'attaché case'. सामान (u18) is the stuff; the अटैची is what it goes in. थैला (u18) is a soft bag." },
        { id: "hi-u33l4-chhaataa", type: "vocab", front: "छाता", reading: "chhaataa", meaning: "an umbrella", accept: ["a parasol", "a brolly"], example: { jp: "बारिश में छाता ज़रूरी है।", en: "An umbrella is essential in the rain." }, drill: { jp: "मेरा छाता बहुत पुराना है", en: "My umbrella is very old" }, hint: "CHHAA-TAA, MASCULINE, plural छाते, aspirated छ. It shades you from धूप (u16) as well as from बारिश — in India it is at least as often a sun umbrella." },
        { id: "hi-u33l4-kambal", type: "vocab", front: "कंबल", reading: "kambal", meaning: "a blanket", accept: ["a rug", "a cover to keep warm"], example: { jp: "सर्दी में रेल में कंबल मिलता है।", en: "You get a blanket on the train in winter." }, drill: { jp: "मुझे एक और कंबल चाहिए", en: "I need one more blanket" }, hint: "KAM-BAL, MASCULINE, and the ं before ब is said as an m — that is the homorganic rule of §1 doing its work. चादर (u15) is the sheet under you; the कंबल is the warm one on top." },
        { id: "hi-u33l4-kanghii", type: "vocab", front: "कंघी", reading: "kanghii", meaning: "a comb", accept: ["a hairbrush", "something to comb hair with"], example: { jp: "मेरी कंघी अटैची में है।", en: "My comb is in the suitcase." }, drill: { jp: "यह कंघी मेरी बहन की है", en: "This comb is my sister's" }, hint: "KAN-GHII, FEMININE, plural कंघियाँ, with the aspirated घ. कंघी करना is to comb your hair — Hindi says 'do a comb' rather than using a verb for it." },
        { id: "hi-u33l4-vaapsii", type: "vocab", front: "वापसी", reading: "vaapsii", meaning: "the return trip", accept: ["the journey back", "coming back", "the return"], example: { jp: "हमारी वापसी का टिकट कल का है।", en: "Our return ticket is for tomorrow." }, drill: { jp: "वापसी में बहुत देरी हुई", en: "There was a lot of delay on the way back" }, hint: "VAAP-SII, FEMININE. लौटना (u12) is the verb for going back; वापसी is the trip itself. वापस आना is the everyday 'come back'." },
        { id: "hi-u33l4-shor", type: "vocab", front: "शोर", reading: "shor", meaning: "noise", accept: ["a racket", "din", "loud noise"], example: { jp: "स्टेशन पर बहुत शोर था।", en: "There was a lot of noise at the station." }, drill: { jp: "रेल में बहुत शोर होता है", en: "There is a lot of noise on the train" }, hint: "SHOR, MASCULINE, uncountable — no शोरें. शोर करना is to make a racket. शांति (u5) is its opposite, and an Indian station is the best place in the world to learn the difference." },
      ],
    },
  ],
};
