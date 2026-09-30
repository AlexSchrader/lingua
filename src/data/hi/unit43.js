// HI Unit 43 — तकनीक और संपर्क ("Technology and staying in touch") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 2 (u41–u50). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// SLOT KEPT — the scaffold called it "Technology and communication" and unit31.js §A8
// measured TECHNOLOGY at **5 of 13**, naming मोबाइल, इंटरनेट, ईमेल, तस्वीर and कैमरा
// as absent. Re-derived on the merged corpus: तस्वीर landed at u38l4, so four of that
// five are still missing, and so is every word for a screen, a charger, a battery, a
// password, a machine fault or a repair. u9 विदेशी शब्द taught फ़ोन, टीवी, लाइट and
// कंप्यूटर as LOANWORD DECODING PRACTICE, not as a technology unit — its job was the
// script. This unit is the technology.
//
// 🚨 TWELVE LOANWORD CANDIDATES WERE CUT TO NINE, AND THE ONE THAT MATTERED WAS CUT
// FOR THE §9 FREE-PASS REASON, MEASURED NOT GUESSED:
//     सिग्नल reads **signal** — identical to its own gloss after `normalizeMeaning`,
//     so `checkProduce` accepts the answer read straight off the prompt. Dropped, and
//     it is the fourth loanword this language has refused for this, after block 1's
//     पेट्रोल, हेलमेट and इंच.
//     नेटवर्क and वीडियो were dropped as well, not for a free pass but because nine
//     loanwords in 24 cards is already the ceiling: संपर्क and जाल took their slots,
//     and both are ordinary Hindi with no English inside them.
// EVERY REMAINING LOANWORD MEASURED WITH THE REAL `checkProduce`: मोबाइल mobaail ≠
// "a mobile phone" · स्क्रीन skriin ≠ "a screen" · चार्जर chaarjar ≠ "a charger" ·
// बैटरी baitrii ≠ "a battery" · सिम sim ≠ "a SIM card" · ऐप aip ≠ "an app" ·
// इंटरनेट intarnet ≠ "the internet" · ईमेल iimel ≠ "an email" · पासवर्ड paasvard ≠
// "a password" · कैमरा kaimraa ≠ "a camera" · मशीन mashiin ≠ "a machine". ZERO free
// passes. ऐप is the narrowest — aip against "app" — and it passes because §1 writes
// ऐ as ai and English writes it a.
//
// ⚠️ ONE DERIVED ADJECTIVE: चालू (switched on) comes from चलना, to go, taught in the
// activities unit. `derive()` generates no -आलू suffix, so it was out of scope before
// this unit, and the precedent for carding it is u40l4's नाप from नापना and u32l3's
// तैयारी from तैयार. Flagged rather than assumed.
//
// GENDER TRAPS (§4), each named in its own hint, and this unit is unusually
// feminine-heavy because so many of its loanwords came in that way:
//   ⚠️ स्क्रीन, बैटरी, मशीन, गड़बड़, मरम्मत, तकनीक, खोज and सुविधा are FEMININE, and
//   स्क्रीन, मशीन, गड़बड़, मरम्मत, तकनीक and खोज all end in a CONSONANT or -ी with
//   nothing in the shape to tell you. यह मशीन पुरानी है, never पुराना.
//   मोबाइल, चार्जर, सिम, ऐप, इंटरनेट, ईमेल, पासवर्ड, संपर्क, जाल, कैमरा, यंत्र,
//   आविष्कार, विकास and ईंधन are MASCULINE.
//   चालू is INVARIANT — चालू मशीन and चालू यंत्र both, with no feminine form.
//
// READINGS: §1's inherent-a rule does real work here. यंत्र is **yantr** with no
// final vowel, the way u6's प्रश्न is prashn and u39's तर्क is tark; कैमरा is
// **kaimraa** and not kaimaraa, because the medial schwa is syncopated. Checked
// against all 1008 readings — every one distinct.
// RETROFLEX/DENTAL (§1b): no new colliding pair. बैटरी baitrii, वोट→u42, टीम→u41,
// इंटरनेट intarnet, मरम्मत marammat, दबाना dabaanaa and चालू chaaluu have no
// counterpart in the corpus, so §1(b)'s doubling hatch fires nowhere here either.
export const HI_UNIT43 = {
  id: "hi-u43",
  lang: "hi",
  title: "तकनीक और संपर्क",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "hi-u43l1",
      unit: 43,
      lesson: 1,
      title: "The phone in your hand",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the parts of a mobile phone and say what is wrong with yours.",
      items: [
        { id: "hi-u43l1-mobaail", type: "vocab", front: "मोबाइल", reading: "mobaail", meaning: "a mobile phone", accept: ["a cell phone", "a handset"], example: { jp: "आजकल हर आदमी के पास मोबाइल है।", en: "These days everybody has a mobile phone." }, drill: { jp: "मेरा मोबाइल मेज़ पर है", en: "My mobile phone is on the table" }, hint: "MO-BAA-IL, MASCULINE, plural मोबाइल unchanged. The इ is written as an INDEPENDENT vowel because a mātrā cannot follow the ा of बा — unit 3's rule. फ़ोन is the telephone in general; a मोबाइल is the one in your pocket." },
        { id: "hi-u43l1-skriin", type: "vocab", front: "स्क्रीन", reading: "skriin", meaning: "a screen", accept: ["a phone display panel", "a monitor"], example: { jp: "उसके मोबाइल की स्क्रीन बहुत बड़ी है।", en: "His phone's screen is very big." }, drill: { jp: "यह स्क्रीन बहुत साफ़ है", en: "This screen is very clear" }, hint: "SKRIIN, ⚠️ FEMININE — यह स्क्रीन बड़ी है, plural स्क्रीनें — and it opens with स्क्र, the longest conjunct cluster in this course, three consonants stacked before a vowel finally arrives." },
        { id: "hi-u43l1-chaarjar", type: "vocab", front: "चार्जर", reading: "chaarjar", meaning: "a charger", accept: ["a phone charger", "a power adapter"], example: { jp: "मैंने अपना चार्जर घर पर छोड़ दिया।", en: "I left my charger at home." }, drill: { jp: "यह चार्जर बहुत धीरे चलता है", en: "This charger works very slowly" }, hint: "CHAAR-JAR, MASCULINE, with र् sitting on the चा and again on the ज. Its first three letters are चार, four — a different word, and the reading chaarjar keeps them apart from chaar." },
        { id: "hi-u43l1-baitrii", type: "vocab", front: "बैटरी", reading: "baitrii", meaning: "a battery", accept: ["a cell in a device", "a power pack"], example: { jp: "मोबाइल की बैटरी अभी पूरी है।", en: "The phone's battery is still full." }, drill: { jp: "इस मशीन की बैटरी नई है", en: "This machine's battery is new" }, hint: "BAI-TRII, FEMININE — बैटरी खाली है — with the ऐ mātrā read ai and र् on the RETROFLEX ट. बैटरी खत्म होना, for it to run out, is what you will actually say." },
        { id: "hi-u43l1-sim", type: "vocab", front: "सिम", reading: "sim", meaning: "a SIM card", accept: ["the chip in a phone", "a subscriber card"], example: { jp: "उसने दुकान से नया सिम लिया।", en: "He got a new SIM card at the shop." }, drill: { jp: "मेरा सिम बहुत पुराना है", en: "My SIM card is very old" }, hint: "SIM, MASCULINE, three letters and one syllable. The little card that carries your number — सिम कार्ड in full, सिम on its own in speech, which is how every Indian shop says it." },
        { id: "hi-u43l1-aip", type: "vocab", front: "ऐप", reading: "aip", meaning: "an app", accept: ["a phone application", "a piece of phone software"], example: { jp: "इस ऐप में हिंदी की किताब है।", en: "There is a Hindi book in this app." }, drill: { jp: "यह ऐप बहुत आसान है", en: "This app is very easy" }, hint: "AIP, MASCULINE, two letters — the INDEPENDENT ऐ of unit 1 plus प. ⚠️ The gloss is 'an app' and the reading is aip, because §1 writes ऐ as ai: close enough to trip you, not close enough to pass the dictation card." },
      ],
    },
    {
      id: "hi-u43l2",
      unit: 43,
      lesson: 2,
      title: "Online, and in touch",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the internet, email and passwords, and say you are in touch with somebody.",
      items: [
        { id: "hi-u43l2-intarnet", type: "vocab", front: "इंटरनेट", reading: "intarnet", meaning: "the internet", accept: ["the net", "the world wide web"], example: { jp: "गाँव में इंटरनेट बहुत धीरे चलता है।", en: "The internet is very slow in the village." }, drill: { jp: "इंटरनेट के बिना काम मुश्किल है", en: "Work is difficult without the internet" }, hint: "IN-TAR-NET, MASCULINE, uncountable, with the RETROFLEX ट twice and the ं before it read as a plain n. Hindi also calls it अंतरजाल, 'the inter-net', built on जाल below." },
        { id: "hi-u43l2-iimel", type: "vocab", front: "ईमेल", reading: "iimel", meaning: "an email", accept: ["an electronic letter", "email"], example: { jp: "मैंने कल उसे ईमेल भेजा।", en: "I sent him an email yesterday." }, drill: { jp: "यह ईमेल बहुत ज़रूरी है", en: "This email is very important" }, hint: "II-MEL, MASCULINE, opening with the INDEPENDENT ई of unit 1, so the first syllable is long. A चिट्ठी goes in a लिफ़ाफ़ा and an ईमेल does not. Reading iimel, English email — not the same string." },
        { id: "hi-u43l2-paasvard", type: "vocab", front: "पासवर्ड", reading: "paasvard", meaning: "a password", accept: ["a secret code", "a login code"], example: { jp: "अपना पासवर्ड किसी को मत बताओ।", en: "Do not tell anyone your password." }, drill: { jp: "मेरा पासवर्ड बहुत लंबा है", en: "My password is very long" }, hint: "PAAS-VARD, MASCULINE, with र् on the व. Its first three letters spell पास, 'near', from the places unit — a different word that happens to start the same way." },
        { id: "hi-u43l2-sampark", type: "vocab", front: "संपर्क", reading: "sampark", meaning: "contact", accept: ["being in touch", "a connection with someone"], example: { jp: "हम ईमेल से संपर्क रखते हैं।", en: "We keep in contact by email." }, drill: { jp: "मंत्री से संपर्क बहुत मुश्किल है", en: "Contact with the minister is very difficult" }, hint: "SAM-PARK, MASCULINE, uncountable, with the ं before प read as m and र् on the क. संपर्क करना is to get in touch; संपर्क में रहना is to stay in touch." },
        { id: "hi-u43l2-jaal", type: "vocab", front: "जाल", reading: "jaal", meaning: "a web", accept: ["a mesh", "a fishing net"], example: { jp: "मछली बड़े जाल में आई।", en: "The fish came into a big net." }, drill: { jp: "यह जाल बहुत मज़बूत है", en: "This net is very strong" }, hint: "JAAL, MASCULINE. A fishing net, a spider's web, and the जाल inside अंतरजाल, the Hindi word for the internet. जाल बिछाना is to lay a trap for someone." },
        { id: "hi-u43l2-kaimraa", type: "vocab", front: "कैमरा", reading: "kaimraa", meaning: "a camera", accept: ["a picture-taking device"], example: { jp: "उसने मोबाइल के कैमरे से तस्वीर ली।", en: "He took a picture with the phone's camera." }, drill: { jp: "यह कैमरा बहुत महँगा है", en: "This camera is very expensive" }, hint: "KAI-MRAA, MASCULINE, plural कैमरे, with the ऐ mātrā. ⚠️ Read it kaimraa and not kaimaraa — §1's rule that the medial inherent a is dropped where speech drops it. तस्वीर is what comes out of it." },
      ],
    },
    {
      id: "hi-u43l3",
      unit: 43,
      lesson: 3,
      title: "Machines, and what goes wrong with them",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say a machine is on, press the button, report the fault and ask for the repair.",
      items: [
        { id: "hi-u43l3-mashiin", type: "vocab", front: "मशीन", reading: "mashiin", meaning: "a machine", accept: ["a mechanical device", "an appliance"], example: { jp: "कपड़े धोने की मशीन बहुत पुरानी है।", en: "The clothes-washing machine is very old." }, drill: { jp: "यह मशीन बहुत तेज़ चलती है", en: "This machine runs very fast" }, hint: "MA-SHIIN, ⚠️ FEMININE — यह मशीन पुरानी है, plural मशीनें. Note धोने की मशीन: the oblique infinitive plus की is how Hindi names a machine by its job. यंत्र below is the formal twin." },
        { id: "hi-u43l3-yantr", type: "vocab", front: "यंत्र", reading: "yantr", meaning: "a device", accept: ["an instrument", "an apparatus"], example: { jp: "डॉक्टर ने एक छोटा यंत्र दिखाया।", en: "The doctor showed a small instrument." }, drill: { jp: "यह यंत्र बहुत काम का है", en: "This device is very useful" }, hint: "YANTR, MASCULINE, plural यंत्र unchanged, with the ं nasal and the त्र conjunct — and ⚠️ the final र carries NO vowel: yantr, the way प्रश्न is prashn and तर्क is tark. The formal word where मशीन is the everyday one." },
        { id: "hi-u43l3-dabaanaa", type: "vocab", front: "दबाना", reading: "dabaanaa", meaning: "to press", accept: ["to push down on", "to hold something down"], example: { jp: "उसने लाल बटन दबाया।", en: "He pressed the red button." }, drill: { jp: "बटन दबाना बहुत आसान है", en: "Pressing the button is very easy" }, hint: "DA-BAA-NAA, all DENTAL, and TRANSITIVE, so the past takes ने: उसने दबाया. Pressing a बटन, pressing a wound, and pressing somebody into silence — all दबाना. Its intransitive twin दबना is not carded." },
        { id: "hi-u43l3-chaaluu", type: "vocab", front: "चालू", reading: "chaaluu", meaning: "switched on", accept: ["in working order", "running"], example: { jp: "मशीन सुबह से चालू है।", en: "The machine has been on since morning." }, drill: { jp: "यह यंत्र अभी चालू है", en: "This device is on right now" }, hint: "CHAA-LUU, ⚠️ INVARIANT — चालू मशीन and चालू यंत्र both, with no feminine form at all. From चलना, to go. Of a person it means crafty, close to चालाक from the personality unit." },
        { id: "hi-u43l3-garbar", type: "vocab", front: "गड़बड़", reading: "garbar", meaning: "a malfunction", accept: ["a mess", "something gone wrong"], example: { jp: "इंटरनेट में कोई गड़बड़ है।", en: "There is some fault with the internet." }, drill: { jp: "इस मशीन में गड़बड़ है", en: "There is a fault in this machine" }, hint: "GAR-BAR, ⚠️ FEMININE — बड़ी गड़बड़ — with ड़ twice, both read r under §1(c). A technical fault, a muddle in the accounts, or a general mess. गड़बड़ होना is for something to go wrong." },
        { id: "hi-u43l3-marammat", type: "vocab", front: "मरम्मत", reading: "marammat", meaning: "a repair", accept: ["fixing something", "maintenance work"], example: { jp: "सरकार ने सड़क की मरम्मत की।", en: "The government repaired the road." }, drill: { jp: "इस छत की मरम्मत ज़रूरी है", en: "This roof needs repairing" }, hint: "MA-RAM-MAT, FEMININE, with the doubled म of §1's gemination. मरम्मत करना is to repair. सुधारना, from the transitive-verbs unit, is to correct something rather than mend it." },
      ],
    },
    {
      id: "hi-u43l4",
      unit: 43,
      lesson: 4,
      title: "Invention, discovery and progress",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about technology, inventions and how a place develops — the vocabulary a Hindi newspaper uses for it.",
      items: [
        { id: "hi-u43l4-takniik", type: "vocab", front: "तकनीक", reading: "takniik", meaning: "technology", accept: ["technical know-how", "a technical method"], example: { jp: "नई तकनीक ने पूरा काम बदल दिया।", en: "The new technology changed the whole job." }, drill: { jp: "यह तकनीक बहुत नई है", en: "This technology is very new" }, hint: "TAK-NIIK, ⚠️ FEMININE — नई तकनीक, plural तकनीकें. Technology in general and a particular technique. Its first two letters are तक, 'until', from the postpositions unit — a different word." },
        { id: "hi-u43l4-aavishkaar", type: "vocab", front: "आविष्कार", reading: "aavishkaar", meaning: "an invention", accept: ["inventing something", "a new creation"], example: { jp: "पहिया सबसे पुराना आविष्कार है।", en: "The wheel is the oldest invention." }, drill: { jp: "यह आविष्कार बहुत काम आया", en: "This invention proved very useful" }, hint: "AA-VISH-KAAR, MASCULINE, with ष — unit 4's second sh — stacked under a halant as ष्क. आविष्कार करना is to invent. A खोज is finding what was already there; an आविष्कार is making what was not." },
        { id: "hi-u43l4-khoj", type: "vocab", front: "खोज", reading: "khoj", meaning: "a discovery", accept: ["finding something out", "a hunt for something"], example: { jp: "उस खोज ने इलाज आसान किया।", en: "That discovery made the treatment easy." }, drill: { jp: "यह खोज बहुत ज़रूरी थी", en: "This discovery was very important" }, hint: "KHOJ, ⚠️ FEMININE — बड़ी खोज, नई खोज, plural खोजें — PLAIN ख. From खोजना, to search, which this course does not card: ढूँढना is the verb it teaches. Read khoj against खोना khonaa, to lose." },
        { id: "hi-u43l4-suvidhaa", type: "vocab", front: "सुविधा", reading: "suvidhaa", meaning: "a convenience", accept: ["a facility", "an amenity"], example: { jp: "इस होटल में हर सुविधा है।", en: "This hotel has every facility." }, drill: { jp: "यह सुविधा बहुत सस्ती है", en: "This facility is very cheap" }, hint: "SU-VI-DHAA, FEMININE — हर सुविधा — and the plural is सुविधाएँ with the INDEPENDENT एँ, because the word ends in a vowel. आराम is rest; a सुविधा is what makes rest possible." },
        { id: "hi-u43l4-vikaas", type: "vocab", front: "विकास", reading: "vikaas", meaning: "development", accept: ["growth of a place", "how something develops"], example: { jp: "गाँव का विकास बहुत धीरे हुआ।", en: "The village's development was very slow." }, drill: { jp: "इस शहर का विकास तेज़ है", en: "This city's development is fast" }, hint: "VI-KAAS, MASCULINE, uncountable. The development of a place, a country or a child. तरक्की, from the office unit, is one person getting on; विकास is a whole thing growing." },
        { id: "hi-u43l4-iindhan", type: "vocab", front: "ईंधन", reading: "iindhan", meaning: "fuel for a machine", accept: ["combustible material", "what a fire burns"], example: { jp: "गाड़ी का ईंधन बहुत महँगा हुआ।", en: "Fuel for the car has got very expensive." }, drill: { jp: "गाँव में ईंधन बहुत कम है", en: "There is very little fuel in the village" }, hint: "IIN-DHAN, MASCULINE, uncountable, opening with the INDEPENDENT ई plus the ं, which before the DENTAL ध is read n. तेल is oil you can also cook with; ईंधन is anything burnt for power — wood, coal, or what goes in a गाड़ी." },
      ],
    },
  ],
};
