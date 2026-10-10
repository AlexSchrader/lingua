// HI Unit 90 — आत्मा और नैतिकता ("The soul and morality") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 7 (B1)"). Theme ASSIGNED CENTRALLY;
// probed at **2 of 18 taken** against all 1,382 non-glyph hi fronts, 2026-10-05.
//
// 🚨 THE SLOT IS THE PHILOSOPHY, NOT THE RITUAL, AND THAT BOUNDARY IS WHY IT IS
// NOT A SECOND u51. A2's u51 धर्म और त्योहार already spent the whole FESTIVAL AND
// RITUAL surface: धर्म, भगवान, पूजा, प्रार्थना, मंदिर, पवित्र, मूर्ति, व्रत, रोज़ा,
// नमाज़, भजन, प्रसाद, तिलक, गिरजाघर, गुरुद्वारा, पंडित, साधु, शुभ, मेला, जुलूस.
// Every one of those is USED in this unit's sentences and NOT re-taught. What u51
// left the language without is what any of it is FOR — no soul, no sin, no merit,
// no rebirth, no liberation, no scripture, no sect, no atheist, no philosophy, and
// no word for a moral question at all.
//
// ⚠️ TWO OF THE EIGHTEEN PROBE WORDS WERE ALREADY TAKEN AND ARE NOT CARDED HERE:
//   • कर्म (u6l3, a deed) — so this unit teaches पाप and पुण्य, the two kinds of
//     कर्म, and uses कर्म in the field without a second card.
//   • दर्शन was free; ध्यान (u22l4, attention), दया (u27l4, compassion) and क्षमा
//     (u6l2, forgiveness) were NOT, so विवेक, संयम and त्याग carry l4 instead.
// ⚠️ AND नरक (hell) WAS DROPPED AT 24, not forgotten: मोक्ष, पुनर्जन्म and स्वर्ग
// already fill l1 and a fourth afterlife word would crowd it. Named at the bottom.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: आत्मा, आस्था, अहिंसा.
//   🚨 **आत्मा IS FEMININE DESPITE THE -ा**, against §4's "-ा is usually masculine",
//   and it is the one gender fact in this unit no rule predicts: आत्मा रहती है.
//   MASCULINE: पाप, पुण्य, पुनर्जन्म, मोक्ष, स्वर्ग, तीर्थ, ग्रंथ, उपदेश, गुरु,
//   शिष्य, अनुष्ठान, संप्रदाय, नास्तिक, दर्शन, सत्य, अंधविश्वास, त्याग, संयम,
//   अहंकार, लोभ.
//
// ⚠️ ONE CARD LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06): विवेक
// → kept at u68 अमूर्त विचार, block 1's earlier slot. Still in scope for u90's
// sentences, and no u90 sentence uses it. अंधविश्वास replaced it, and it is the
// better card for l3 anyway, because the lesson already had आस्था and नास्तिक and
// no word for what a sceptic calls somebody else's faith.
//   ⚠️ **नैतिक AND नास्तिक ARE CONSONANT-FINAL ADJECTIVES, SO BOTH ARE INVARIABLE**
//   — नैतिक सवाल AND नैतिक बात, with no -ी form, unlike बड़ा → बड़ी (§6).
//   ⚠️ **गुरु HAS TWO SHORT u's** — guru, never guruu. No verb is carded in this unit.
//   ⚠️ **FOUR FRONTS END IN A य THAT KEEPS ITS OWN a** — पुण्य punya, शिष्य shishya,
//   सत्य satya, संप्रदाय sampradaay — the same ending as सूत्र suutra (u87l2) and
//   छात्र chhaatra (u6l4).
//
// ⚠️ SUBSTRING TRAPS, CHECKED AGAINST `findWholeWord`'s REAL BOUNDARY TEST.
// `isLetter` is `/\p{L}/` only, so a MĀTRĀ, an ANUSVĀRA and a HALANT do NOT block
// a match. TWO fire; SIX look like they should and CANNOT — and the six are the
// point of this list, because every one of them was checked rather than assumed:
//   THESE FIRE:
//   • पुनर्जन्म ⊃ जन्म (u26l1, a birth) — the ् before it is a HALANT, \p{M}. The
//     same trap जन्मदिन (u17l4) carries from the other side. Named in the hint.
//   • सत्यापन (u93l2) ⊃ सत्य — the ा after it is \p{M}. Recorded in both files.
//   THESE CANNOT FIRE, because the neighbouring character IS a letter:
//   • उपदेश ⊃ देश (u8l2, a country) — प precedes it.
//   • गुरुवार (u17l4) ⊃ गुरु · गुरुद्वारा (u51l3) ⊃ गुरु · गुरुत्व (u87l4) ⊃ गुरु
//     — व, द and त follow. THREE taught words contain this front and none matches.
//   • शोधग्रंथ (u97l4) ⊃ ग्रंथ — ध precedes it.
//   • अहिंसा ⊃ हिंसा (u89l3) — अ precedes it, and अ IS a letter. This is the pair
//     the band is built on and it is clean.
//   • स्वर्ग ⊃ स्वर — स्वर is NOT a front anywhere (it appears only in a u6l4 band
//     sentence, and u1.js §8 makes the band sentence-exempt), so nothing to match.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): पुण्य punya and अनुष्ठान anushthaan are RETROFLEX (ण्य,
// ष्ठ) with no dental twin in the corpus; तीर्थ tiirth, आस्था aasthaa, नास्तिक
// naastik, ग्रंथ granth and सत्य satya are DENTAL. 24 new readings, 24 distinct,
// zero collisions against all 1,382.
// ⚠️ TWO READING PAIRS ARE THE SAME SOUNDS REORDERED and each is named in its hint:
// संयम sanyam against समय samay (u11l1, time) — the likeliest mix-up in the unit —
// and दर्शन darshan against दर्शक darshak (u41l1, a spectator), which are genuinely
// the same root.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit. Zero free passes.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: नरक (hell),
// विनम्रता (humility), क्रोध (गुस्सा u27l1 owns the gloss), मुक्ति (मोक्ष covers it),
// तपस्या.
export const HI_UNIT90 = {
  id: "hi-u90",
  lang: "hi",
  title: "आत्मा और नैतिकता",
  order: 90,
  stage: "b1",
  lessons: [
    {
      id: "hi-u90l1",
      unit: 90,
      lesson: 1,
      title: "The soul and what happens to it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that the soul lives on after death, tell a sin from a meritorious act, explain what rebirth means, and name liberation and heaven.",
      items: [
        { id: "hi-u90l1-aatmaa", type: "vocab", front: "आत्मा", reading: "aatmaa", meaning: "the soul", accept: ["the spirit", "the self that survives death", "the inner self"], example: { jp: "कई धर्म मानते हैं कि मौत के बाद भी आत्मा रहती है।", en: "Many religions hold that the soul lives on even after death." }, drill: { jp: "मौत के बाद भी आत्मा रहती है", en: "The soul lives on even after death" }, hint: "AAT-MAA — 🚨 FEMININE DESPITE THE -ा, and it is the one gender fact in this unit that no rule predicts: आत्मा रहती है, not रहता. त्म is a stacked conjunct (unit 6) and the independent आ opens it. ⚠️ Not मन (unit 1): मन is the mind and the feelings, which go with the body; the आत्मा is what does not." },
        { id: "hi-u90l1-paap", type: "vocab", front: "पाप", reading: "paap", meaning: "a sin", accept: ["a religious wrong", "wrongdoing", "an offence against religion"], example: { jp: "उसने माना कि झूठ बोलना भी एक पाप है।", en: "He accepted that telling a lie is also a sin." }, drill: { jp: "झूठ बोलना भी एक पाप है", en: "Telling a lie is also a sin" }, hint: "PAAP, masculine and consonant-final, so the plural is the bare form: दो पाप. Long aa. ⚠️ THREE WORDS, THREE THINGS: a गलती (unit 22) is a mistake, an अपराध (unit 42) is a crime an अदालत punishes, a पाप is a wrong against धर्म itself. The frame is पाप करना." },
        { id: "hi-u90l1-punya", type: "vocab", front: "पुण्य", reading: "punya", meaning: "a meritorious act", accept: ["religious merit", "a good deed that earns merit", "credit earned by a good act"], example: { jp: "लोग कहते हैं कि गरीब को खाना देना बड़ा पुण्य है।", en: "People say that giving food to the poor is a great act of merit." }, drill: { jp: "गरीब को खाना देना बड़ा पुण्य है", en: "Giving food to the poor is a great act of merit" }, hint: "PUN-YA, masculine, and the final य **KEEPS ITS OWN a** — punya, the same ending as सूत्र suutra (unit 87). ण is the RETROFLEX n, tongue curled back, stacked under the halant (unit 6). ⚠️ THE EXACT OPPOSITE OF पाप, and Hindi names the two together: पाप और पुण्य. Both are kinds of कर्म (unit 6)." },
        { id: "hi-u90l1-punarjanm", type: "vocab", front: "पुनर्जन्म", reading: "punarjanm", meaning: "rebirth", accept: ["reincarnation", "being born again", "coming back in another body"], example: { jp: "पुनर्जन्म का मतलब है कि आत्मा फिर नया शरीर लेती है।", en: "Rebirth means that the soul takes a new body again." }, drill: { jp: "पुनर्जन्म में आत्मा नया शरीर लेती है", en: "In rebirth the soul takes a new body" }, hint: "PU-NAR-JANM, masculine. Two halves: पुनर्, again — with the र् as a half र (unit 6) — plus जन्म, a birth (unit 26). ⚠️ जन्म IS a string inside it and the ् before it is a HALANT, not a letter, so the router can match it there; it is the same trap जन्मदिन (unit 17) carries from the other side." },
        { id: "hi-u90l1-moksh", type: "vocab", front: "मोक्ष", reading: "moksh", meaning: "release from rebirth", accept: ["liberation", "spiritual release", "freedom from the cycle of birth"], example: { jp: "हर धर्म अपने तरीके से मोक्ष की बात करता है।", en: "Every religion talks about liberation in its own way." }, drill: { jp: "हर धर्म मोक्ष की बात करता है", en: "Every religion talks about liberation" }, hint: "MOKSH, masculine and consonant-final. क्ष is one of unit 6's three stacked conjuncts and reads ksh — the same letter you already have in क्षमा kshamaa and अक्षर akshar (unit 6). ⚠️ Not आज़ादी (unit 32), which is political freedom: मोक्ष is getting out of the पुनर्जन्म cycle for good." },
        { id: "hi-u90l1-svarg", type: "vocab", front: "स्वर्ग", reading: "svarg", meaning: "heaven", accept: ["paradise", "the abode of the gods", "where the good are said to go"], example: { jp: "कहानियों में अच्छे लोग मरने के बाद स्वर्ग जाते हैं।", en: "In the stories good people go to heaven after they die." }, drill: { jp: "अच्छे लोग मरने के बाद स्वर्ग जाते हैं", en: "Good people go to heaven after they die" }, hint: "SVARG, masculine. 🚨 THREE CONSONANTS AND ONE VOWEL: स्व is a stacked conjunct and the र् is a half र, both from unit 6 — svarg. ⚠️ Read it against स्वागत svaagat, a welcome (unit 7) — the same स्व and then a different word entirely. Its opposite, नरक, is not carded." },
      ],
    },
    {
      id: "hi-u90l2",
      unit: 90,
      lesson: 2,
      title: "Pilgrimage, scripture and teacher",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that millions visit a place of pilgrimage, that a priest opened a scripture, that a holy man gave a sermon, and speak of a spiritual master, his disciples and a rite held at home.",
      items: [
        { id: "hi-u90l2-tiirth", type: "vocab", front: "तीर्थ", reading: "tiirth", meaning: "a place of pilgrimage", accept: ["a holy site people travel to", "a sacred place visited on a journey", "a shrine people make a journey to"], example: { jp: "हर साल लाखों लोग उस तीर्थ पर जाते हैं।", en: "Every year hundreds of thousands of people go to that place of pilgrimage." }, drill: { jp: "लाखों लोग उस तीर्थ पर जाते हैं", en: "Hundreds of thousands of people go to that place of pilgrimage" }, hint: "TIIRTH, masculine and consonant-final. The र् is a half र riding on the थ (unit 6), and थ is DENTAL with a puff of air. ⚠️ Not मंदिर (unit 5): a मंदिर is one building, a तीर्थ is a whole place people travel to — a town, a river bank, a mountain. The journey is a तीर्थयात्रा." },
        { id: "hi-u90l2-granth", type: "vocab", front: "ग्रंथ", reading: "granth", meaning: "a scripture", accept: ["a holy book", "a weighty volume", "a sacred text"], example: { jp: "पंडित ने ग्रंथ खोला और एक पाठ पढ़ा।", en: "The priest opened the scripture and read a passage." }, drill: { jp: "पंडित ने ग्रंथ खोला और पढ़ा", en: "The priest opened the scripture and read" }, hint: "GRANTH, masculine. ग्र is a stacked conjunct (unit 6), then the ं as the matching nasal and a DENTAL थ. ⚠️ Not किताब (unit 7): any book is a किताब, a ग्रंथ is a holy or a very weighty one. 🚨 It is the second half of शोधग्रंथ, a thesis (unit 97), where the ध in front of it is a letter, so the router keeps the two apart." },
        { id: "hi-u90l2-updesh", type: "vocab", front: "उपदेश", reading: "updesh", meaning: "a sermon", accept: ["religious teaching given aloud", "moral instruction", "a discourse on how to live"], example: { jp: "साधु ने नदी के किनारे बैठकर उपदेश दिया।", en: "The holy man sat on the river bank and gave a sermon." }, drill: { jp: "साधु ने नदी के किनारे उपदेश दिया", en: "The holy man gave a sermon on the river bank" }, hint: "UP-DESH, masculine. ⚠️ देश, a country (unit 8), SITS AT ITS END and the router **CANNOT** match it, because the प in front is a letter — checked, not assumed. ⚠️ Not भाषण (unit 42): a भाषण is any public address, an उपदेश tells you how to live. The frame is उपदेश देना." },
        { id: "hi-u90l2-guru", type: "vocab", front: "गुरु", reading: "guru", meaning: "a spiritual master", accept: ["a guru", "a teacher of how to live", "a master one learns from"], example: { jp: "उस गुरु के पास हर रोज़ नए लोग आते हैं।", en: "New people come to that master every day." }, drill: { jp: "उस गुरु के पास नए लोग आते हैं", en: "New people come to that master" }, hint: "GU-RU, masculine, and ⚠️ BOTH VOWELS ARE SHORT — guru, never guruu. 🚨 THREE TAUGHT WORDS CONTAIN IT AND THE ROUTER CAN MATCH NONE: गुरुवार (unit 17), गुरुद्वारा (unit 51) and गुरुत्व (unit 87) — in all three the next character is a letter. Its oldest sense is heavy, which is why it gave गुरुत्व its name." },
        { id: "hi-u90l2-shishya", type: "vocab", front: "शिष्य", reading: "shishya", meaning: "a disciple", accept: ["a follower of a teacher", "a pupil of a master", "one who learns from a guru"], example: { jp: "गुरु के साथ उसके शिष्य भी बैठे थे।", en: "His disciples were sitting with the master too." }, drill: { jp: "गुरु के साथ उसके शिष्य बैठे थे", en: "His disciples were sitting with the master" }, hint: "SHISH-YA, masculine, and the final य keeps its own a — shishya, like पुण्य punya (l1). ष्य is ष stacked on य (unit 6), and ष reads sh like श (§1a). ⚠️ Not छात्र (unit 6): a छात्र sits in a कक्षा (unit 34) and has many teachers, a शिष्य follows one गुरु." },
        { id: "hi-u90l2-anushthaan", type: "vocab", front: "अनुष्ठान", reading: "anushthaan", meaning: "a rite", accept: ["a ceremony with fixed steps", "a ritual", "a set of acts done in order"], example: { jp: "शादी से पहले घर में एक छोटा अनुष्ठान हुआ।", en: "Before the wedding a small rite was held at home." }, drill: { jp: "घर में एक छोटा अनुष्ठान हुआ", en: "A small rite was held at home" }, hint: "A-NUSH-THAAN, masculine. ष्ठ is ष stacked on the RETROFLEX ठ (unit 6) — tongue curled back, then a puff: anush-thaan. ⚠️ NARROWER THAN पूजा (unit 51): पूजा is worship in general, an अनुष्ठान is one set ceremony with fixed steps, which is why a शादी (unit 10) has several." },
      ],
    },
    {
      id: "hi-u90l3",
      unit: 90,
      lesson: 3,
      title: "Faith, doubt and philosophy",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that someone's faith has been deep since childhood, that one religion holds many sects, that a person is an atheist who still goes to the festivals, and talk about philosophy, truthfulness and superstition.",
      items: [
        { id: "hi-u90l3-aasthaa", type: "vocab", front: "आस्था", reading: "aasthaa", meaning: "religious faith", accept: ["faith held without proof", "belief one holds firmly", "trust in what cannot be proved"], example: { jp: "उसकी आस्था बचपन से ही गहरी थी।", en: "Her faith had been deep right from childhood." }, drill: { jp: "उसकी आस्था बचपन से गहरी थी", en: "Her faith had been deep from childhood" }, hint: "AAS-THAA — ⚠️ FEMININE. स्थ is a stacked conjunct (unit 6) with a DENTAL थ. ⚠️ THREE WORDS, THREE THINGS: भरोसा (unit 27) is trust in a PERSON, यकीन (unit 57) is being sure of a FACT, आस्था is faith you do not ask for proof of." },
        { id: "hi-u90l3-sampradaay", type: "vocab", front: "संप्रदाय", reading: "sampradaay", meaning: "a sect", accept: ["a branch within a religion", "a denomination", "a group within a faith"], example: { jp: "एक ही धर्म में कई संप्रदाय होते हैं।", en: "Within a single religion there are several sects." }, drill: { jp: "इस संप्रदाय के लोग यहाँ रहते हैं", en: "People of this sect live here" }, hint: "SAM-PRA-DAAY, masculine. ⚠️ THE ं BEFORE प READS **m** — sampradaay, the labial nasal, exactly as in संपर्क sampark (unit 43) and संविधान samvidhaan (unit 88). प्र is a stacked conjunct (unit 6). A branch INSIDE a धर्म, never a धर्म of its own." },
        { id: "hi-u90l3-naastik", type: "vocab", front: "नास्तिक", reading: "naastik", meaning: "an atheist", accept: ["one who believes in no god", "godless", "one who denies God"], example: { jp: "वह नास्तिक है, लेकिन हर त्योहार में जाता है।", en: "He is an atheist, but he goes to every festival." }, drill: { jp: "वह नास्तिक है लेकिन त्योहार में जाता है", en: "He is an atheist but he goes to the festivals" }, hint: "NAAS-TIK, masculine and ALSO an adjective — and consonant-final, so it is **INVARIABLE**: वह नास्तिक है for a man and for a woman alike. स्त is a stacked conjunct with a DENTAL त (unit 6). Built on the same root as आस्था with the न of \"not\" in front — one who has no आस्था." },
        { id: "hi-u90l3-darshan", type: "vocab", front: "दर्शन", reading: "darshan", meaning: "philosophy", accept: ["a philosophical system", "a viewing of an idol", "the study of first questions"], example: { jp: "भारत का दर्शन हज़ारों साल पुराना है।", en: "India's philosophy is thousands of years old." }, drill: { jp: "भारत का दर्शन बहुत पुराना है", en: "India's philosophy is very old" }, hint: "DAR-SHAN, masculine. The र् is a half र (unit 6). 🚨 READ IT AGAINST दर्शक darshak, a spectator (unit 41) — one letter apart at the end, and genuinely the SAME ROOT, to see. ⚠️ Its other everyday sense is a viewing of a मूर्ति (unit 51), दर्शन करना — but the card is the field of thought." },
        { id: "hi-u90l3-satya", type: "vocab", front: "सत्य", reading: "satya", meaning: "truthfulness as a principle", accept: ["truth as a thing to live by", "truth held as a rule of life", "being true in word and deed"], example: { jp: "उसके लिए सत्य सबसे बड़ा नियम था।", en: "For him truthfulness was the greatest rule of all." }, drill: { jp: "सत्य बोलना आसान नहीं है", en: "Speaking the truth is not easy" }, hint: "SAT-YA, masculine, and the final य keeps its own a — satya, like पुण्य punya (l1). त्य is त STACKED on य (unit 6), not a doubled त. ⚠️ NOT सच (unit 2), and the gloss says why: सच is the truth of one statement, सत्य is truthfulness as a thing to live by. 🚨 It is a strict prefix of सत्यापन (unit 93) and the ा there is a mātrā, so the router can match it." },
        { id: "hi-u90l3-andhvishvaas", type: "vocab", front: "अंधविश्वास", reading: "andhvishvaas", meaning: "superstition", accept: ["a belief held with no reason behind it", "blind belief", "a groundless belief people keep"], example: { jp: "कुछ लोग इसे आस्था कहते हैं और कुछ अंधविश्वास।", en: "Some people call it faith and some superstition." }, drill: { jp: "कुछ लोग इसे अंधविश्वास कहते हैं", en: "Some people call it superstition" }, hint: "AN-DH-VISH-VAAS, masculine, consonant-final: दो अंधविश्वास. Two pieces, and **this course cards NEITHER on its own**, which is why the compound needed a card: अंध (blind — the same root as अंधेरा, darkness, unit 56) plus विश्वास (belief, whose everyday twin भरोसा is unit 27). Its ं sits before ध, a DENTAL stop, so §1's homorganic rule still gives n. ⚠️ **IT IS THE WORD THIS LESSON NEEDS AGAINST आस्था**, four cards back: an आस्था is faith a believer owns, an अंधविश्वास is what somebody else calls it, and the example puts both in one sentence on purpose." },
      ],
    },
    {
      id: "hi-u90l4",
      unit: 90,
      lesson: 4,
      title: "What a good person does",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a question is moral rather than legal, speak of a parent's sacrifice, explain non-violence, and name self-restraint, egotism and greed.",
      items: [
        { id: "hi-u90l4-naitik", type: "vocab", front: "नैतिक", reading: "naitik", meaning: "to do with right and wrong", accept: ["moral", "ethical", "bearing on right and wrong"], example: { jp: "यह सवाल कानून का नहीं, नैतिक है।", en: "This question is not one of law, it is a moral one." }, drill: { jp: "उसने नैतिक कारण से मना किया", en: "He refused for a moral reason" }, hint: "NAI-TIK, an ADJECTIVE, consonant-final and so **INVARIABLE** — नैतिक सवाल AND नैतिक बात, with no -ी form, unlike बड़ा → बड़ी (§6). The ऐ of unit 2, so nai and never ne. ⚠️ Not ईमानदार (unit 27), which is honest about money and facts; नैतिक is about right and wrong itself. The noun is नैतिकता, in this unit's title." },
        { id: "hi-u90l4-tyaag", type: "vocab", front: "त्याग", reading: "tyaag", meaning: "renunciation", accept: ["a sacrifice made willingly", "giving something up", "the giving up of what one wants"], example: { jp: "माँ और पिता का त्याग बच्चे बाद में समझते हैं।", en: "Children understand a mother's and father's sacrifice only later." }, drill: { jp: "माँ और पिता का त्याग बड़ा होता है", en: "A mother's and father's sacrifice is great" }, hint: "TYAAG, masculine and consonant-final. त्य is त stacked on य (unit 6) — the same conjunct as सत्य satya (l3). ⚠️ Not छोड़ना (unit 20): छोड़ना is leaving a thing behind, त्याग is giving up something you WANTED, on purpose, for someone else. The frame is त्याग करना." },
        { id: "hi-u90l4-ahinsaa", type: "vocab", front: "अहिंसा", reading: "ahinsaa", meaning: "non-violence", accept: ["the principle of harming nothing", "refusal to hurt any living thing", "not using force at all"], example: { jp: "अहिंसा का मतलब है किसी को चोट न पहुँचाना।", en: "Non-violence means not causing anyone an injury." }, drill: { jp: "अहिंसा का मतलब चोट न पहुँचाना है", en: "Non-violence means not causing injury" }, hint: "A-HIN-SAA — ⚠️ FEMININE. 🚨 हिंसा, violence (unit 89), WITH THE अ OF \"NOT\" IN FRONT — and because अ IS a letter, the router keeps the two cards cleanly apart even though one contains the other. India's best-known political idea, and also a rule about food and speech, not only about fighting." },
        { id: "hi-u90l4-sanyam", type: "vocab", front: "संयम", reading: "sanyam", meaning: "self-restraint", accept: ["holding oneself back", "self-control", "keeping a check on oneself"], example: { jp: "गुस्से में संयम रखना सबसे मुश्किल है।", en: "Keeping self-restraint in anger is the hardest thing of all." }, drill: { jp: "गुस्से में संयम रखना मुश्किल है", en: "Keeping self-restraint in anger is difficult" }, hint: "SAN-YAM, masculine. ⚠️ The ं before य is written **n** — sanyam. 🚨 READ IT AGAINST समय samay, time (unit 11) — the same four sounds in a different order, and the likeliest mix-up in this unit. Not सब्र (unit 52): सब्र is waiting without complaining, संयम is holding yourself back from doing it." },
        { id: "hi-u90l4-ahankaar", type: "vocab", front: "अहंकार", reading: "ahankaar", meaning: "egotism", accept: ["an inflated sense of self", "conceit", "too high an opinion of oneself"], example: { jp: "पैसे के बाद उसमें अहंकार आ गया।", en: "After the money, egotism came into him." }, drill: { jp: "अहंकार हर रिश्ता तोड़ देता है", en: "Egotism breaks every relationship" }, hint: "A-HAN-KAAR, masculine. Two halves: अहं, the I, plus कार, a making — the making of an I. The ं before क is the matching nasal (unit 5). ⚠️ THREE WORDS, THREE THINGS: गर्व (unit 27) is pride you may be entitled to, घमंडी (unit 53) is the person, अहंकार is the fault itself — and in दर्शन it is exactly what मोक्ष requires you to lose." },
        { id: "hi-u90l4-lobh", type: "vocab", front: "लोभ", reading: "lobh", meaning: "greed", accept: ["covetousness", "wanting more than one needs", "a grasping after more"], example: { jp: "लोभ में आकर उसने झूठ बोला।", en: "Giving in to greed, he told a lie." }, drill: { jp: "लोभ सबसे बड़ा पाप है", en: "Greed is the greatest sin" }, hint: "LOBH, masculine and consonant-final, भ with a puff of air. ⚠️ READ IT AGAINST लोग log, people (unit 14), and लोहा lohaa, iron (unit 60) — three words that start the same and share nothing at all. Not कंजूस (unit 53): a कंजूस will not SPEND, लोभ is wanting MORE." },
      ],
    },
  ],
};
