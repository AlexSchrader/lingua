// HI Unit 55 — जानवर, कीड़े और पौधे ("Animals, insects and plants") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 6 (A2)"). MEASURED HOLE: **living
// creatures were 12 of 38 — and THE WORD जानवर WAS NOT ONE OF THEM.** u21 जानवर और
// कुदरत taught कुत्ता, बिल्ली, गाय, मुर्गी, बकरी, चूहा, हाथी, बंदर, शेर, साँप,
// चिड़िया, मछली: a dog, a cat and a zoo. The corpus had **no horse, no donkey, no
// camel, no buffalo, no ox, no sheep, no bear, no deer, no rabbit, no insect, no
// fly, no mosquito, no butterfly, no tail, no feather, no plant and no root** —
// and, exactly as with इंसान in u53, **the CATEGORY WORD was in u21's own title
// and in no card.** In a country where the buffalo, the ox and the camel are
// working animals, that is not a decorative gap.
//
// ⚠️ ONE FRONT WAS DROPPED FOR A READING COLLISION, AND IT IS THE ड़ CASE unit1.js
// §1(c) SAID TO WATCH FOR: **मोर, a peacock, reads `mor` — and मोड़, a turning
// (u29l4), ALREADY reads `mor`,** because §1(c) merges ड़ → r with र. Two words,
// one reading, which is one dictation card with two right answers. §1(c) offers no
// doubling hatch for ड़ (that is §1(b)'s, for the retroflex/dental pairs), and
// renaming a u29 card's reading would change the answer of a shipped item. **So
// मोर is DROPPED, and this is the first ड़ collision the language has hit** — §1(c)
// said "no block-1 pair collides — check before you add one", and this is the check
// firing. A later block wanting मोर must first decide what मोड़ becomes.
//
// ⚠️ FIVE MORE FRONTS WERE TAKEN BY LOWER SLOTS: पेड़ (u14l3), बगीचा (u14l3),
// अंडा (u36l4), ऊन and चमड़ा (both u40l3, as CLOTH rather than as animal produce).
// AND EIGHTEEN GOOD CANDIDATES HAD NO ROOM AT 24: भेड़, गिलहरी, उल्लू, बत्तख,
// चींटी, मकड़ी, छिपकली, मेंढक, सींग, घोंसला, शहद, गमला, टहनी, छाल, चरना, भौंकना,
// पालतू, झुंड. **NAMED FOR A LATER BLOCK, in the order a B1 seat
// should take them: कीड़ा's relatives (मकड़ी, मेंढक, छिपकली), the farm remainder
// (भेड़, बत्तख, घोंसला, शहद), and the two verbs (चरना, भौंकना) — the corpus has no
// verb an animal does.**
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: भैंस, लोमड़ी, मक्खी, तितली, पूँछ, जड़. भैंस, पूँछ and जड़
//   are CONSONANT-FINAL, so nothing in the shape says so — भैंस काली है, जड़ गहरी है.
//   MASCULINE: जानवर, घोड़ा, गधा, ऊँट, बैल, भालू, हिरण, सूअर, खरगोश, कबूतर, कौआ,
//   तोता, कीड़ा, मच्छर, पौधा, काँटा, पंख. भालू is masculine despite the -ू, like
//   साधु (u51); ऊँट and हिरण are consonant-final masculine.
//   जंगली is an ADJECTIVE and INVARIANT — जंगली जानवर, जंगली बिल्ली.
//
// ⚠️ ONE PAIR SEPARATED BY LENGTH ALONE, and §1 is what carries it: पंख pankh, a
// feather, against पंखा pankhaa, a fan (u9l2). One mātrā, and the readings differ
// only by the doubled aa. **The MĀTRĀ-PREFIX TRAP applies to it in the engine:**
// `findWholeWord`'s boundary test is \p{L} and ा is \p{M}, so a search for पंख
// MATCHES INSIDE पंखा. Neither card's drill contains the other word — checked
// mechanically, both ways — and a later block editing either one must keep it that way.
// Same shape, also checked clear: जड़ appears inside no longer word in any drill.
// RETROFLEX/DENTAL (§1b): no new pair. तोता totaa is DENTAL त with no retroflex
// टोटा in the corpus; ऊँट uunt and काँटा kaantaa are RETROFLEX ट with no dental
// twin; कीड़ा kiiraa is the ड़ flap. Checked against all 1056 readings.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT55 = {
  id: "hi-u55",
  lang: "hi",
  title: "जानवर, कीड़े और पौधे",
  order: 55,
  stage: "a2",
  lessons: [
    {
      id: "hi-u55l1",
      unit: 55,
      lesson: 1,
      title: "The animals that work for people",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Use the word for an animal, and name the five that pull, carry and give milk — a horse, a donkey, a camel, a buffalo, an ox.",
      items: [
        { id: "hi-u55l1-jaanvar", type: "vocab", front: "जानवर", reading: "jaanvar", meaning: "an animal", accept: ["a beast"], example: { jp: "गाँव के हर घर में कोई जानवर रहता है।", en: "In every house in the village some animal lives." }, drill: { jp: "इस जंगल में बहुत जानवर हैं", en: "There are many animals in this forest" }, hint: "JAAN-VAR, masculine. The middle a is swallowed: jaan-var, not jaa-na-var. You have seen it in unit 21's title जानवर और कुदरत; this is the card for it. Of any animal, wild or kept — a bird is a चिड़िया and also a जानवर." },
        { id: "hi-u55l1-ghoraa", type: "vocab", front: "घोड़ा", reading: "ghoraa", meaning: "a horse", accept: ["a stallion"], example: { jp: "मेले में एक सफ़ेद घोड़ा भी था और बच्चे उस पर बैठे।", en: "There was a white horse at the fair too and the children sat on it." }, drill: { jp: "उसका घोड़ा बहुत तेज़ दौड़ता है", en: "His horse runs very fast" }, hint: "GHO-RAA, masculine and regular -ा — घोड़ी is a mare, and that is a different animal, not an agreement form. ड़ is the curled-back flap of unit 4, written r. Read it against घोड़ी and घड़ी gharii, a clock (unit 9)." },
        { id: "hi-u55l1-gadhaa", type: "vocab", front: "गधा", reading: "gadhaa", meaning: "a donkey", accept: ["an ass"], example: { jp: "धोबी का गधा रोज़ कपड़े लेकर जाता है।", en: "The washerman's donkey takes clothes away every day." }, drill: { jp: "धोबी के पास एक गधा है", en: "The washerman has a donkey" }, hint: "GA-DHAA, masculine and regular, with a DENTAL ध — tongue on the teeth, then a puff of air. ⚠️ Calling a person गधा means idiot, and it is one of the commonest mild insults in Hindi — so hear it in that sense too." },
        { id: "hi-u55l1-uunt", type: "vocab", front: "ऊँट", reading: "uunt", meaning: "a camel", accept: ["a desert camel"], example: { jp: "रेत के बीच ऊँट दिन भर चलता रहता है।", en: "Among the sand the camel keeps walking all day." }, drill: { jp: "रेत में ऊँट आराम से चलता है", en: "The camel walks easily in the sand" }, hint: "UUNT, ⚠️ MASCULINE and consonant-final: ऊँट बड़ा है. It opens with the INDEPENDENT long vowel ऊ, because nothing comes before it, and the ँ nasalises it. RETROFLEX ट at the end, tongue curled back." },
        { id: "hi-u55l1-bhains", type: "vocab", front: "भैंस", reading: "bhains", meaning: "a buffalo", accept: ["a water buffalo"], example: { jp: "हमारी भैंस रोज़ सुबह पाँच लीटर दूध देती है।", en: "Our buffalo gives five litres of milk every morning." }, drill: { jp: "हमारी भैंस बहुत दूध देती है", en: "Our buffalo gives a lot of milk" }, hint: "BHAINS — ⚠️ FEMININE, consonant-final, so the shape tells you nothing: भैंस काली है, not काला. The ऐ is the open vowel of unit 2 and the ं nasalises it. In India most milk is buffalo milk, not cow milk, so this is the commoner animal of the two." },
        { id: "hi-u55l1-bail", type: "vocab", front: "बैल", reading: "bail", meaning: "an ox", accept: ["a bullock"], example: { jp: "किसान दो बैल लेकर खेत में गया।", en: "The farmer took two oxen and went into the field." }, drill: { jp: "किसान के दो बैल खेत में हैं", en: "The farmer's two oxen are in the field" }, hint: "BAIL, masculine, consonant-final — so the plural is also बैल: दो बैल. Read it against बेल and बाल baal, hair (unit 20): the ऐ of बैल is the open vowel, further back than े." },
      ],
    },
    {
      id: "hi-u55l2",
      unit: 55,
      lesson: 2,
      title: "The animals nobody keeps",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name five wild animals and say that an animal is wild rather than kept.",
      items: [
        { id: "hi-u55l2-bhaaluu", type: "vocab", front: "भालू", reading: "bhaaluu", meaning: "a bear", accept: ["a wild bear"], example: { jp: "जंगल के अंदर हमें एक काला भालू दिखा।", en: "Inside the forest we saw a black bear." }, drill: { jp: "जंगल में एक काला भालू था", en: "There was a black bear in the forest" }, hint: "BHAA-LUU, ⚠️ MASCULINE despite the -ू, like साधु (unit 51) and पानी. Long aa and long uu, both held. भ with a puff of air. In stories the भालू is slow and good-natured, where the शेर is the danger." },
        { id: "hi-u55l2-hiran", type: "vocab", front: "हिरण", reading: "hiran", meaning: "a deer", accept: ["a stag"], example: { jp: "सुबह जंगल के किनारे दो हिरण घास खा रहे थे।", en: "In the morning two deer were eating grass at the edge of the forest." }, drill: { jp: "दो हिरण घास खा रहे थे", en: "Two deer were eating grass" }, hint: "HI-RAN, masculine and consonant-final, so the plural is also हिरण: दो हिरण. The ण is the RETROFLEX n — tongue curled back — and unit 1 §1(b) writes it plain n in a word reading. Also spelled हिरन; both are current." },
        { id: "hi-u55l2-lomrii", type: "vocab", front: "लोमड़ी", reading: "lomrii", meaning: "a fox", accept: ["a vixen"], example: { jp: "कहानी में लोमड़ी हमेशा चालाक होती है।", en: "In the story the fox is always cunning." }, drill: { jp: "कहानी की लोमड़ी बहुत चालाक थी", en: "The fox in the story was very cunning" }, hint: "LOM-RII — ⚠️ FEMININE, and it looks it. ड़ is the curled-back flap, written r, so it is lom-rii and not lo-ma-dii. The fox of every Hindi children's story, and चालाक (unit 27) is the word that always comes with it." },
        { id: "hi-u55l2-suuar", type: "vocab", front: "सूअर", reading: "suuar", meaning: "a pig", accept: ["a boar", "a hog"], example: { jp: "गली के पीछे कचरे में एक सूअर घूम रहा था।", en: "Behind the lane a pig was wandering in the rubbish." }, drill: { jp: "कचरे में एक सूअर घूम रहा था", en: "A pig was wandering in the rubbish" }, hint: "SUU-AR, masculine. Two syllables: the अ is an INDEPENDENT vowel, because a mātrā cannot follow the ू — the same rule as कुआँ and धुआँ (unit 54). ⚠️ A strong insult when aimed at a person; know that before you use it." },
        { id: "hi-u55l2-khargosh", type: "vocab", front: "खरगोश", reading: "khargosh", meaning: "a rabbit", accept: ["a hare", "a bunny"], example: { jp: "बच्चों ने घर में एक सफ़ेद खरगोश रखा।", en: "The children kept a white rabbit at home." }, drill: { jp: "बच्चों के पास सफ़ेद खरगोश है", en: "The children have a white rabbit" }, hint: "KHAR-GOSH, masculine, ख with a puff of air. Plain ख, not ख़ — unit 1 §7 keeps all three Perso-Arabic letters uncarded and unused, so this is written with the ordinary letter." },
        { id: "hi-u55l2-janglii", type: "vocab", front: "जंगली", reading: "janglii", meaning: "living in the wild", accept: ["untamed", "feral"], example: { jp: "जंगली जानवर को घर में रखना ठीक नहीं है।", en: "It is not right to keep a wild animal at home." }, drill: { jp: "यह एक जंगली जानवर है", en: "This is a wild animal" }, hint: "JANG-LII, INVARIANT — जंगली जानवर AND जंगली बिल्ली, because -ी adjectives do not agree (unit 53). Built off जंगल, a forest (unit 21). ⚠️ Of a PERSON it means uncivilised and is an insult." },
      ],
    },
    {
      id: "hi-u55l3",
      unit: 55,
      lesson: 3,
      title: "Birds overhead, insects in the room",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name three birds and the three insects that actually turn up in a house — and use the word for an insect itself.",
      items: [
        { id: "hi-u55l3-kabuutar", type: "vocab", front: "कबूतर", reading: "kabuutar", meaning: "a pigeon", accept: ["a dove"], example: { jp: "छत पर कबूतर पूरे दिन बैठे रहते हैं।", en: "Pigeons sit on the roof all day." }, drill: { jp: "छत पर दो कबूतर बैठे हैं", en: "Two pigeons are sitting on the roof" }, hint: "KA-BUU-TAR, masculine and consonant-final, so the plural is also कबूतर: दो कबूतर. Long uu in the middle. DENTAL त. In cities they are everywhere, and feeding them is a small daily act of religion for many people." },
        { id: "hi-u55l3-kauaa", type: "vocab", front: "कौआ", reading: "kauaa", meaning: "a crow", accept: ["a raven"], example: { jp: "कौआ खिड़की पर बैठकर बहुत देर बोलता रहा।", en: "The crow sat on the window and kept cawing for a long time." }, drill: { jp: "एक कौआ खिड़की पर बैठा है", en: "A crow is sitting on the window" }, hint: "KAU-AA, masculine. The au of कौ is the open vowel of औ (unit 2), and the आ after it is INDEPENDENT because a mātrā cannot follow a mātrā. Also spelled कौवा; both are current. The bird of every Hindi fable about cleverness." },
        { id: "hi-u55l3-totaa", type: "vocab", front: "तोता", reading: "totaa", meaning: "a parrot", accept: ["a green parrot"], example: { jp: "उसके घर में एक हरा तोता है जो हमारी बात दोहराता है।", en: "In his house there is a green parrot that repeats what we say." }, drill: { jp: "उसका हरा तोता बहुत बोलता है", en: "His green parrot talks a lot" }, hint: "TO-TAA, masculine and regular -ा, with a DENTAL त — tongue on the teeth, not the English t. तोते जैसा पढ़ना, 'to read like a parrot', is what Hindi calls learning by heart without understanding." },
        { id: "hi-u55l3-kiiraa", type: "vocab", front: "कीड़ा", reading: "kiiraa", meaning: "an insect", accept: ["a bug", "a worm"], example: { jp: "बरसात में घर के अंदर बहुत कीड़े आ जाते हैं।", en: "In the rainy season a lot of insects come into the house." }, drill: { jp: "इस पत्ते पर एक कीड़ा है", en: "There is an insect on this leaf" }, hint: "KII-RAA, masculine and regular -ा — the plural कीड़े is what you will hear most, because they come in numbers. ड़ is the curled-back flap, written r. Any small crawling thing: an insect, a grub, a worm." },
        { id: "hi-u55l3-makkhii", type: "vocab", front: "मक्खी", reading: "makkhii", meaning: "a fly", accept: ["a housefly"], example: { jp: "मिठाई पर मक्खी बैठी थी इसलिए माँ ने उसे अंदर रखा।", en: "A fly had settled on the sweet so mother put it inside." }, drill: { jp: "मिठाई पर एक मक्खी बैठी है", en: "A fly is sitting on the sweet" }, hint: "MAK-KHII — ⚠️ FEMININE. GEMINATION with a twist: क्ख is क then ख, so you hear the k AND the puff — mak-khii. Two mātrā and two conjuncts in three letters." },
        { id: "hi-u55l3-machchhar", type: "vocab", front: "मच्छर", reading: "machchhar", meaning: "a mosquito", accept: ["a biting mosquito"], example: { jp: "रात को इतने मच्छर थे कि मुझे नींद नहीं आई।", en: "There were so many mosquitoes at night that I got no sleep." }, drill: { jp: "इस कमरे में बहुत मच्छर हैं", en: "There are a lot of mosquitoes in this room" }, hint: "MACH-CHHAR, masculine and consonant-final, so the plural is also मच्छर: बहुत मच्छर. च्छ is च then छ — the plain one then the breathy one, both heard. The reason every Indian bed has a net over it." },
      ],
    },
    {
      id: "hi-u55l4",
      unit: 55,
      lesson: 4,
      title: "What grows, and what an animal has",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a plant, its root and its thorn, and the parts an animal has that a person does not — a tail, a feather — plus the insect everybody likes.",
      items: [
        { id: "hi-u55l4-paudhaa", type: "vocab", front: "पौधा", reading: "paudhaa", meaning: "a plant", accept: ["a sapling", "a young plant"], example: { jp: "हमने आँगन में एक छोटा पौधा लगाया।", en: "We planted a small plant in the courtyard." }, drill: { jp: "आँगन में एक छोटा पौधा है", en: "There is a small plant in the courtyard" }, hint: "PAU-DHAA, masculine and regular -ा, with a DENTAL ध. The au of पौ is the open vowel of औ. Smaller than a पेड़, a tree (unit 14) — a पौधा is what you can still move in a pot. The verb is लगाना, to plant." },
        { id: "hi-u55l4-jar", type: "vocab", front: "जड़", reading: "jar", meaning: "a root", accept: ["the roots of a plant"], example: { jp: "इस पेड़ की जड़ ज़मीन के बहुत अंदर तक जाती है।", en: "This tree's root goes very deep into the ground." }, drill: { jp: "इस पेड़ की जड़ बहुत गहरी है", en: "This tree's root is very deep" }, hint: "JAR — ⚠️ FEMININE, consonant-final: जड़ गहरी है, not गहरा. ड़ is the curled-back flap, written r, so jar and not jad. Used figuratively too: किसी बात की जड़ is the root of a matter." },
        { id: "hi-u55l4-kaantaa", type: "vocab", front: "काँटा", reading: "kaantaa", meaning: "a thorn", accept: ["a prickle", "a spine on a plant"], example: { jp: "फूल तोड़ते हुए उसके हाथ में काँटा लगा।", en: "While picking the flower a thorn caught her hand." }, drill: { jp: "इस फूल के पास एक काँटा है", en: "There is a thorn beside this flower" }, hint: "KAAN-TAA, masculine and regular -ा. RETROFLEX ट, and the ँ nasalises the aa without adding a letter. It is ALSO the word for a table fork and for a fish bone — three things that stick into you, one word." },
        { id: "hi-u55l4-titlii", type: "vocab", front: "तितली", reading: "titlii", meaning: "a butterfly", accept: ["a moth"], example: { jp: "बगीचे में एक पीली तितली फूल पर बैठी।", en: "In the garden a yellow butterfly settled on a flower." }, drill: { jp: "एक पीली तितली फूल पर बैठी", en: "A yellow butterfly settled on a flower" }, hint: "TIT-LII — ⚠️ FEMININE, and both त are DENTAL: tit-lii, tongue on the teeth both times. The only कीड़ा in Hindi that nobody wants to kill, which is why it turns up in songs and not in complaints." },
        { id: "hi-u55l4-puunchh", type: "vocab", front: "पूँछ", reading: "puunchh", meaning: "a tail", accept: ["an animal's tail"], example: { jp: "कुत्ते की पूँछ छोटी होती है और बिल्ली की लंबी।", en: "A dog's tail is short and a cat's is long." }, drill: { jp: "इस कुत्ते की पूँछ बहुत छोटी है", en: "This dog's tail is very short" }, hint: "PUUNCHH — ⚠️ FEMININE, consonant-final: पूँछ लंबी है. Long uu with the ँ over it, then छ with a puff of air. ⚠️ Read it against पूछना puuchhnaa, to ask (unit 12): one is a noun with a nasal, the other a verb without." },
        { id: "hi-u55l4-pankh", type: "vocab", front: "पंख", reading: "pankh", meaning: "a feather", accept: ["a wing", "plumage"], example: { jp: "ज़मीन पर एक काला पंख गिरा था।", en: "A black feather had fallen on the ground." }, drill: { jp: "ज़मीन पर एक काला पंख था", en: "There was a black feather on the ground" }, hint: "PANKH, masculine, and the ं before ख is the matching nasal. ⚠️ Read it against पंखा pankhaa, a fan (unit 9): ONE MĀTRĀ apart, and only §1's length-by-doubling keeps pankh and pankhaa from being one card. One word covers a feather and a wing." },
      ],
    },
  ],
};
