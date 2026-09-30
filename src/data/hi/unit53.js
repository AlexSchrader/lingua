// HI Unit 53 — और स्वभाव ("More on character") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 4 (A2)"), and the title follows the
// language's OWN house style rather than inventing one: A1 block 3 named its
// extension slots और गिनती (u25) and और रोज़ के काम (u26), so a unit extending u27
// मन और स्वभाव is और स्वभाव. RUNBOOK §4's "continue the · 2 numbering" rule, in the
// form Hindi already uses.
//
// MEASURED HOLE: **character words were 6 of 24.** u27l4 taught होशियार, आलसी,
// ईमानदार, बहादुर, सख्त, चालाक — six, and they are the six a children's story
// needs. The corpus could not call anyone stubborn, stingy, selfish, rude, shy,
// generous, sensible, careless, reliable or cruel, and — the gap that decided the
// theme — **it had no word for a HUMAN BEING and no word for a DISPOSITION.**
// आदमी (u5l4) is a man, लोग (u14l4) is people; इंसान, the word that means a person
// as opposed to an animal, was absent from 960 cards, and u27's own title uses
// स्वभाव while no card teaches it. Both are carded here, in l1, as the two nouns
// the other twenty-two adjectives hang off.
//
// ⚠️ FIVE FRONTS WANTED AND REFUSED:
//   • शांत — TAKEN at u14l4 ("quiet", of a place). The lower slot wins.
//   • सीधा — TAKEN at u14l2 ("straight", of a road). Its character sense
//     ("straightforward") ALSO collides with आसान's accept list through
//     normalizeMeaning, so it was doubly blocked.
//   • आदत — TAKEN at u24l4. Used in this unit's sentences instead.
//   • अजीब, मासूम, नम्र, गुण, चुप — no room at 24, and each is a real remainder.
//     NAMED FOR A LATER BLOCK: अजीब (strange), मासूम (innocent), नम्र (humble),
//     गुण (a good quality), चुप (silent). चुप is the one a B1 seat should take first
//     — the corpus has no word for saying nothing.
//   • मिज़ाज — dropped beside स्वभाव, which is the one a learner meets first.
//
// GENDER AND AGREEMENT (§4/§6) — this unit is 22 adjectives and 2 nouns, so the
// live question is not gender but WHETHER IT AGREES, and every hint says which:
//   ⚠️ INVARIANT, all of them ending in -ी or a consonant: ज़िद्दी, घमंडी, कंजूस,
//   खुदगर्ज़, बदतमीज़, ज़ालिम, समझदार, बेवकूफ़, गंभीर, भरोसेमंद, लापरवाह, मेहनती,
//   सुस्त, दयालु, शरीफ़, नेक, उदार, डरपोक, खुशमिज़ाज. A Hindi adjective agrees only
//   when it ends in -आ, and NONE of these does — so ज़िद्दी लड़का AND ज़िद्दी लड़की,
//   never ज़िद्दिी. This is the single most useful thing in the unit and it is in
//   every hint.
//   AGREES: फुर्तीला → फुर्तीली, शर्मीला → शर्मीली. Two of twenty-two, and they are
//   the -ीला suffix, which is -आ underneath.
//   NOUNS: इंसान is MASCULINE (इंसान अच्छा है, even of a woman — the word itself is
//   masculine); स्वभाव is MASCULINE.
//
// RETROFLEX/DENTAL (§1b): no new pair. डरपोक darpok has a RETROFLEX ड and there is
// no dental दरपोक; तमीज़ tamiiz and बदतमीज़ badtamiiz are DENTAL त with no retroflex
// twin; सुस्त sust is dental. The hatch fires nowhere.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT53 = {
  id: "hi-u53",
  lang: "hi",
  title: "और स्वभाव",
  order: 53,
  stage: "a2",
  lessons: [
    {
      id: "hi-u53l1",
      unit: 53,
      lesson: 1,
      title: "A person, a nature, and the good sort",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say what a person is like as a person — kind, decent, virtuous, generous — using the two nouns the whole unit hangs off.",
      items: [
        { id: "hi-u53l1-insaan", type: "vocab", front: "इंसान", reading: "insaan", meaning: "a human being", accept: ["a fellow human", "a human"], example: { jp: "मुश्किल में एक इंसान दूसरे इंसान की मदद करता है।", en: "In difficulty one human being helps another." }, drill: { jp: "वह बहुत अच्छा इंसान है", en: "He is a very good human being" }, hint: "IN-SAAN, ⚠️ MASCULINE — and masculine even of a woman, because the WORD is masculine: वह अच्छी इंसान है is wrong, वह अच्छा इंसान है is right. The ं before स is written as n. Not आदमी (a man) and not लोग (people): इंसान is a person as against an animal." },
        { id: "hi-u53l1-svabhaav", type: "vocab", front: "स्वभाव", reading: "svabhaav", meaning: "a disposition", accept: ["someone's nature", "temperament"], example: { jp: "उसका स्वभाव बचपन से ऐसा ही है।", en: "His nature has been like this since childhood." }, drill: { jp: "उसका स्वभाव बहुत अच्छा है", en: "His nature is very good" }, hint: "SVA-BHAAV, masculine, opening with the स्व conjunct — स and व stacked, said in one breath. The way a person IS, not the way they are behaving today, which is मूड. आदत (unit 24) is a habit you picked up; स्वभाव is what you were born with." },
        { id: "hi-u53l1-dayaalu", type: "vocab", front: "दयालु", reading: "dayaalu", meaning: "kind-hearted", accept: ["merciful", "full of kindness"], example: { jp: "वह डॉक्टर इतना दयालु है कि बीमार मरीज़ों से पैसे नहीं लेता।", en: "That doctor is so kind-hearted that he takes no money from sick patients." }, drill: { jp: "वह एक दयालु इंसान है", en: "He is a kind-hearted person" }, hint: "DA-YAA-LU, INVARIANT — दयालु आदमी, दयालु औरत, no -ी form, because it does not end in -आ. Built off दया, compassion (unit 27), with the -लु suffix: full of दया." },
        { id: "hi-u53l1-shariif", type: "vocab", front: "शरीफ़", reading: "shariif", meaning: "decent", accept: ["respectable", "well-behaved"], example: { jp: "वे शरीफ़ लोग हैं और किसी से झगड़ा नहीं करते।", en: "They are decent people and quarrel with nobody." }, drill: { jp: "वह बहुत शरीफ़ लड़का है", en: "He is a very decent boy" }, hint: "SHA-RIIF, INVARIANT, with फ़ — an f. Of a person who keeps out of trouble and treats people properly. ⚠️ Said with a flat voice it is a compliment; said slowly it is sarcasm, and Hindi uses it both ways." },
        { id: "hi-u53l1-nek", type: "vocab", front: "नेक", reading: "nek", meaning: "virtuous", accept: ["righteous", "good-hearted"], example: { jp: "उसने पूरी उम्र नेक काम किए।", en: "He did virtuous deeds all his life." }, drill: { jp: "वह एक नेक आदमी था", en: "He was a virtuous man" }, hint: "NEK, INVARIANT, three letters, DENTAL न. Higher and more religious than अच्छा: नेक is good in the way a holy book means good. नेक काम, a good deed, is its commonest pairing." },
        { id: "hi-u53l1-udaar", type: "vocab", front: "उदार", reading: "udaar", meaning: "generous", accept: ["open-handed", "liberal in giving"], example: { jp: "वह इतना उदार है कि अपना खाना भी बाँट देता है।", en: "He is so generous that he shares even his own food." }, drill: { jp: "उनका दिल बहुत उदार है", en: "Their heart is very generous" }, hint: "U-DAAR, INVARIANT, DENTAL द. Generous with money and also broad-minded about people — उदार सोच is an open outlook. Its opposite in this unit is कंजूस, which is only ever about money." },
      ],
    },
    {
      id: "hi-u53l2",
      unit: 53,
      lesson: 2,
      title: "The people who are hard to live with",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say that someone is stubborn, arrogant, stingy, selfish, rude or cruel — and hear that none of these six changes its ending.",
      items: [
        { id: "hi-u53l2-ziddii", type: "vocab", front: "ज़िद्दी", reading: "ziddii", meaning: "stubborn", accept: ["obstinate", "wilful"], example: { jp: "यह बच्चा इतना ज़िद्दी है कि किसी की नहीं सुनता।", en: "This child is so stubborn that he listens to nobody." }, drill: { jp: "मेरी बहन बहुत ज़िद्दी है", en: "My sister is very stubborn" }, hint: "ZID-DII, INVARIANT — ज़िद्दी लड़का AND ज़िद्दी लड़की. GEMINATION: the द is doubled and you hear both, zid-dii. With ज़ — a z. Of a child who will not be talked out of it." },
        { id: "hi-u53l2-ghamandii", type: "vocab", front: "घमंडी", reading: "ghamandii", meaning: "arrogant", accept: ["conceited", "full of pride"], example: { jp: "तरक्की के बाद वह इतना घमंडी हो गया कि पुराने दोस्तों से बात भी नहीं करता।", en: "After his promotion he became so arrogant that he does not even speak to old friends." }, drill: { jp: "वह आदमी बहुत घमंडी है", en: "That man is very arrogant" }, hint: "GHA-MAN-DII, INVARIANT. RETROFLEX ड — tongue curled back — and the ं before it is the matching retroflex nasal. Different from गर्व (unit 27), which is pride you are entitled to: घमंड is pride nobody else can see the reason for." },
        { id: "hi-u53l2-kanjuus", type: "vocab", front: "कंजूस", reading: "kanjuus", meaning: "stingy", accept: ["miserly", "tight-fisted"], example: { jp: "वह इतना कंजूस है कि एक रुपया भी खर्च नहीं करता।", en: "He is so stingy that he does not spend even one rupee." }, drill: { jp: "मेरा पड़ोसी बहुत कंजूस है", en: "My neighbour is very stingy" }, hint: "KAN-JUUS, INVARIANT, long uu. Only about money, never about feelings. Note बचत (unit 37) is saving, which is a virtue — कंजूस is the same behaviour described by someone who wanted the money." },
        { id: "hi-u53l2-khudgarz", type: "vocab", front: "खुदगर्ज़", reading: "khudgarz", meaning: "selfish", accept: ["self-serving", "out for oneself"], example: { jp: "ऐसे खुदगर्ज़ लोग सिर्फ़ अपना काम देखते हैं।", en: "Such selfish people look only at their own work." }, drill: { jp: "वह बहुत खुदगर्ज़ इंसान है", en: "He is a very selfish person" }, hint: "KHUD-GARZ, INVARIANT, with ज़ — a z. You know the first half: खुद, oneself (unit 23). र्ज़ is र riding above ज़. Plain क, not क़ — unit 1 §7 keeps all three Perso-Arabic letters uncarded and unused." },
        { id: "hi-u53l2-badtamiiz", type: "vocab", front: "बदतमीज़", reading: "badtamiiz", meaning: "rude", accept: ["ill-mannered", "insolent"], example: { jp: "वह लड़का शिक्षक के सामने भी बदतमीज़ रहता है।", en: "That boy is rude even in front of the teacher." }, drill: { jp: "वह लड़का बहुत बदतमीज़ है", en: "That boy is very rude" }, hint: "BAD-TA-MIIZ, INVARIANT, DENTAL त, with ज़. बद- is the Persian 'bad' prefix; तमीज़ is manners, which is the next card. A strong word — calling someone बदतमीज़ to their face starts an argument." },
        { id: "hi-u53l2-zaalim", type: "vocab", front: "ज़ालिम", reading: "zaalim", meaning: "cruel", accept: ["tyrannical", "merciless"], example: { jp: "उस ज़ालिम मालिक ने मज़दूरों को पूरा वेतन नहीं दिया।", en: "That cruel owner did not give the labourers their full salary." }, drill: { jp: "वह मालिक बहुत ज़ालिम था", en: "That owner was very cruel" }, hint: "ZAA-LIM, INVARIANT, with ज़ — a z. Of a person with power who uses it badly, which is why it goes with मालिक, अफ़सर and सरकार. In film songs it is also flung affectionately at a lover, which is a joke on how strong the word is." },
      ],
    },
    {
      id: "hi-u53l3",
      unit: 53,
      lesson: 3,
      title: "Sensible, foolish, reliable, careless",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Judge someone's judgement — sensible or foolish, serious or careless, reliable or not — and name manners as a thing you can have.",
      items: [
        { id: "hi-u53l3-samajhdaar", type: "vocab", front: "समझदार", reading: "samajhdaar", meaning: "sensible", accept: ["level-headed", "having good judgement"], example: { jp: "वह इतनी समझदार है कि मुश्किल में भी शांत रहती है।", en: "She is so sensible that she stays calm even in difficulty." }, drill: { jp: "मेरी बेटी बहुत समझदार है", en: "My daughter is very sensible" }, hint: "SA-MAJH-DAAR, INVARIANT — समझदार लड़का AND समझदार लड़की. Built off समझना, to understand (unit 6), with the -दार suffix that means 'holding': one who holds understanding. Compare दुकानदार, a shopkeeper (unit 18), the same suffix." },
        { id: "hi-u53l3-bevakuuf", type: "vocab", front: "बेवकूफ़", reading: "bevakuuf", meaning: "foolish", accept: ["stupid", "an idiot"], example: { jp: "मैंने बेवकूफ़ की तरह उसे सब पैसे दे दिए।", en: "Like a fool I gave him all the money." }, drill: { jp: "मैंने बहुत बेवकूफ़ काम किया", en: "I did a very foolish thing" }, hint: "BE-VA-KUUF, INVARIANT, with फ़ — an f — and long uu. The same बे- prefix as बेचैनी (unit 52). Works as an adjective AND as a noun: बेवकूफ़ आदमी, or just बेवकूफ़! It is an insult, not a joke." },
        { id: "hi-u53l3-gambhiir", type: "vocab", front: "गंभीर", reading: "gambhiir", meaning: "grave in manner", accept: ["solemn", "sober"], example: { jp: "बात सुनकर उसका मुँह गंभीर हो गया।", en: "Hearing the matter, his face turned grave." }, drill: { jp: "वह हमेशा गंभीर रहता है", en: "He is always grave" }, hint: "GAM-BHIIR, INVARIANT. The ं before भ is the matching nasal, so it reads gam, not gan. Of a person who does not joke, and also of a situation that is serious: गंभीर बीमारी. Read it against भारी, heavy (unit 19) — different word, same weight." },
        { id: "hi-u53l3-bharosemand", type: "vocab", front: "भरोसेमंद", reading: "bharosemand", meaning: "reliable", accept: ["dependable", "to be relied on"], example: { jp: "उसे भरोसेमंद आदमी समझकर मालिक ने चाबी दे दी।", en: "Taking him for a reliable man, the owner gave him the key." }, drill: { jp: "वह हमारा सबसे भरोसेमंद आदमी है", en: "He is our most reliable man" }, hint: "BHA-RO-SE-MAND, INVARIANT. Built off भरोसा, trust (unit 27), in its oblique form भरोसे, plus -मंद, 'possessing'. Of a person AND of a thing: भरोसेमंद गाड़ी, a car that starts." },
        { id: "hi-u53l3-laaparvaah", type: "vocab", front: "लापरवाह", reading: "laaparvaah", meaning: "careless", accept: ["negligent", "slapdash"], example: { jp: "वह इतना लापरवाह है कि रोज़ कुछ भूल जाता है।", en: "He is so careless that he forgets something every day." }, drill: { jp: "वह ड्राइवर बहुत लापरवाह है", en: "That driver is very careless" }, hint: "LAA-PAR-VAAH, INVARIANT. ला- is a third Persian negative prefix, beside बे- and बद-: परवाह is caring, so लापरवाह is not caring. Of someone who is not lazy — आलसी (unit 27) — but simply does not check." },
        { id: "hi-u53l3-tamiiz", type: "vocab", front: "तमीज़", reading: "tamiiz", meaning: "good manners", accept: ["manners", "courtesy"], example: { jp: "बड़ों से बात करने की तमीज़ हर बच्चे को सीखनी चाहिए।", en: "Every child should learn the manners of speaking to elders." }, drill: { jp: "इस लड़के में तमीज़ नहीं है", en: "This boy has no manners" }, hint: "TA-MIIZ — ⚠️ FEMININE, consonant-final, with DENTAL त and ज़: तमीज़ अच्छी है. The frame is X में तमीज़ है — manners are IN a person, not had BY them. बदतमीज़ (l2) is this word with बद- in front of it." },
      ],
    },
    {
      id: "hi-u53l4",
      unit: 53,
      lesson: 4,
      title: "Quick, slow, shy and cheerful",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Describe how much energy and confidence someone has — hard-working or sluggish, nimble or shy — and meet the two adjectives in this unit that DO change their ending.",
      items: [
        { id: "hi-u53l4-mehnatii", type: "vocab", front: "मेहनती", reading: "mehnatii", meaning: "hard-working", accept: ["industrious", "a hard worker"], example: { jp: "वह इतनी मेहनती है कि रोज़ सुबह पाँच बजे उठती है।", en: "She is so hard-working that she gets up at five every morning." }, drill: { jp: "वह लड़का बहुत मेहनती है", en: "That boy is very hard-working" }, hint: "MEH-NA-TII, INVARIANT — मेहनती लड़का AND मेहनती लड़की, because -ी adjectives do not agree. Built off मेहनत, hard work (unit 34). Praise, and the first thing said about a student in a report." },
        { id: "hi-u53l4-sust", type: "vocab", front: "सुस्त", reading: "sust", meaning: "sluggish", accept: ["listless", "slow-moving"], example: { jp: "बहुत काम के बाद सब लोग सुस्त हो जाते हैं।", en: "After a lot of work everyone turns sluggish." }, drill: { jp: "आज मैं बहुत सुस्त हूँ", en: "I am very sluggish today" }, hint: "SUST, INVARIANT, DENTAL त. Of a body without energy, not of a lazy character — आलसी (unit 27) is a choice, सुस्त is a state, and a fever makes you सुस्त without making you आलसी." },
        { id: "hi-u53l4-phurtiilaa", type: "vocab", front: "फुर्तीला", reading: "phurtiilaa", meaning: "nimble", accept: ["quick on one's feet", "agile"], example: { jp: "वह लड़का इतना फुर्तीला है कि किसी से पहले पहुँच जाता है।", en: "That boy is so nimble that he arrives before anyone else." }, drill: { jp: "वह बच्चा बहुत फुर्तीला है", en: "That child is very nimble" }, hint: "PHUR-TII-LAA — ⚠️ THIS ONE AGREES, because it ends in -आ: फुर्तीला लड़का, फुर्तीली लड़की, फुर्तीले बच्चे. फ with a real puff of air, and र्ती is र above त. Of the body, never of the mind — quick-witted is होशियार." },
        { id: "hi-u53l4-sharmiilaa", type: "vocab", front: "शर्मीला", reading: "sharmiilaa", meaning: "shy", accept: ["bashful", "timid"], example: { jp: "वह इतनी शर्मीली है कि नए लोगों के सामने बोलती नहीं।", en: "She is so shy that she does not speak in front of new people." }, drill: { jp: "वह लड़का बहुत शर्मीला है", en: "That boy is very shy" }, hint: "SHAR-MII-LAA — ⚠️ AGREES, the second of the two in this unit: शर्मीला लड़का, शर्मीली लड़की. Built off शर्म, shame (unit 27), with the same -ीला suffix as फुर्तीला. Shy, not ashamed — शर्मीला is a character, शर्म is a feeling." },
        { id: "hi-u53l4-darpok", type: "vocab", front: "डरपोक", reading: "darpok", meaning: "cowardly", accept: ["a coward", "easily frightened"], example: { jp: "रात में अकेले न जाने वाले को लोग डरपोक कहते हैं।", en: "People call someone who will not go out alone at night a coward." }, drill: { jp: "वह इतना डरपोक क्यों है", en: "Why is he so cowardly" }, hint: "DAR-POK, INVARIANT, RETROFLEX ड — tongue curled back. Built off डर, fear (unit 27). The opposite of बहादुर (unit 27), and used as a noun too: डरपोक! shouted across a playground." },
        { id: "hi-u53l4-khushmizaaj", type: "vocab", front: "खुशमिज़ाज", reading: "khushmizaaj", meaning: "cheerful", accept: ["good-humoured", "sunny-natured"], example: { jp: "वह इतने खुशमिज़ाज हैं कि हर मरीज़ उनके पास बैठना चाहता है।", en: "He is so cheerful that every patient wants to sit beside him." }, drill: { jp: "हमारे शिक्षक बहुत खुशमिज़ाज हैं", en: "Our teacher is very cheerful" }, hint: "KHUSH-MI-ZAAJ, INVARIANT, with ज़ — a z. You know the first half: खुश, happy (unit 8). मिज़ाज is a temperament, so this is 'of happy temperament' — a lasting character, where खुश is how you are today." },
      ],
    },
  ],
};
