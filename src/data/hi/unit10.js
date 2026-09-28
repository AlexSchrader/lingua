// HI Unit 10 — परिवार ("The family") — A1
// ⚠️ HINDI FAMILY WORDS ARE NOT A TRANSLATION OF ENGLISH ONES, and this unit is
// authored around that rather than against it. English has one uncle; Hindi has
// चाचा (father's younger brother), ताऊ (father's elder brother), मामा (mother's
// brother), फूफा and मौसा (the aunts' husbands) — five words, because which side
// of the family someone is on decides how you address them. Lessons 2 and 3 teach
// the PAIRED sets चाचा/चाची and मामा/मामी and दादा/दादी and नाना/नानी, because the
// pairing is the pattern: the -आ form is the man, the -ई form is the woman.
// The rest (ताऊ, फूफा, मौसी, भतीजा, भांजी) is deferred to A2 as one lesson.
// ⚠️ EVERY GLOSS NAMES THE SIDE OF THE FAMILY, which is also what keeps the glosses
// distinct: four cards glossed "an uncle" would be one prompt with four right
// answers (unit1.js §9).
export const HI_UNIT10 = {
  id: "hi-u10",
  lang: "hi",
  title: "परिवार",
  order: 10,
  stage: "a1",
  lessons: [
    {
      id: "hi-u10l1",
      unit: 10,
      lesson: 1,
      title: "Parents, children, husband and wife",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the people in your immediate household in Hindi.",
      items: [
        { id: "hi-u10l1-maan", type: "vocab", front: "माँ", reading: "maan", meaning: "mother", accept: ["mum", "mummy", "mom"], example: { jp: "मेरी माँ हिंदी और अंग्रेज़ी बोलती हैं।", en: "My mother speaks Hindi and English." }, drill: { jp: "मेरी माँ यहाँ रहती हैं", en: "My mother lives here" }, hint: "MAAN, feminine — and it is the candrabindu from unit 5, so the aa goes through the nose and there is no n to tap. The formal word is माता; माँ is what you call her." },
        { id: "hi-u10l1-pitaa", type: "vocab", front: "पिता", reading: "pitaa", meaning: "father", accept: ["dad", "papa"], example: { jp: "इस स्कूल में मेरे पिता एक शिक्षक हैं।", en: "My father is a teacher at this school." }, drill: { jp: "मेरे पिता एक शिक्षक हैं", en: "My father is a teacher" }, hint: "pi-TAA. ⚠️ MASCULINE, even though it ends in -आ, and it takes PLURAL agreement out of respect: मेरे पिता हैं, never मेरा पिता है. That respect-plural is normal for elders in Hindi. पापा is the everyday word." },
        { id: "hi-u10l1-betaa", type: "vocab", front: "बेटा", reading: "betaa", meaning: "a son", accept: ["son", "boy", "my boy"], example: { jp: "मेरी बेटी घर पर है और मेरा बेटा स्कूल में है।", en: "My daughter is at home and my son is at school." }, drill: { jp: "मेरा बेटा स्कूल में है", en: "My son is at school" }, hint: "BE-taa, masculine — retroflex ट, so tongue curled back. Older people say बेटा to any young man at all, the way English says son; it is warm, not familiar." },
        { id: "hi-u10l1-betii", type: "vocab", front: "बेटी", reading: "betii", meaning: "a daughter", accept: ["daughter", "girl"], example: { jp: "उनकी बेटी हिंदी सीखती है।", en: "Their daughter is learning Hindi." }, drill: { jp: "मेरी बेटी हिंदी सीखती है", en: "My daughter is learning Hindi" }, hint: "BE-tee, feminine. The cleanest -आ to -ी pair in the language beside लड़का / लड़की: बेटा becomes बेटी and nothing else changes." },
        { id: "hi-u10l1-pati", type: "vocab", front: "पति", reading: "pati", meaning: "a husband", accept: ["spouse (male)", "my husband"], example: { jp: "उनके पति इस शहर में काम करते हैं।", en: "Her husband works in this city." }, drill: { jp: "मेरे पति यहाँ काम करते हैं", en: "My husband works here" }, hint: "PA-ti, masculine, short इ at the end — not pitaa, which is father: पति is pa-ti, पिता is pi-taa. Same three letters in a different order." },
        { id: "hi-u10l1-patnii", type: "vocab", front: "पत्नी", reading: "patnii", meaning: "a wife", accept: ["spouse (female)", "my wife"], example: { jp: "मेरी पत्नी हिंदी और अंग्रेज़ी दोनों बोलती हैं।", en: "My wife speaks both Hindi and English." }, drill: { jp: "मेरी पत्नी यहाँ रहती हैं", en: "My wife lives here" }, hint: "PAT-nee, feminine — त्न is a halant stack from unit 6, so say the t and the n with nothing between. In speech many people use बीवी or the English wife instead." },
      ],
    },
    {
      id: "hi-u10l2",
      unit: 10,
      lesson: 2,
      title: "Brothers, sisters, and which uncle",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name a brother, a sister, and an uncle or aunt from either side of your family.",
      items: [
        { id: "hi-u10l2-bhaaii", type: "vocab", front: "भाई", reading: "bhaaii", meaning: "a brother", accept: ["brother", "bro"], example: { jp: "मेरे दो भाई इस शहर में रहते हैं।", en: "My two brothers live in this city." }, drill: { jp: "मेरे दो भाई यहाँ रहते हैं", en: "My two brothers live here" }, hint: "BHAA-ee, masculine, breathy भ. ⚠️ Hindi has no one word for brother alone: बड़ा भाई is the elder, छोटा भाई the younger, and which one it is always gets said. भाई also means mate to a stranger." },
        { id: "hi-u10l2-bahan", type: "vocab", front: "बहन", reading: "bahan", meaning: "a sister", accept: ["sister", "sis"], example: { jp: "मेरी छोटी बहन इस स्कूल में है।", en: "My younger sister is at this school." }, drill: { jp: "मेरी छोटी बहन यहाँ है", en: "My younger sister is here" }, hint: "BA-han, feminine — and the ह at the end keeps a faint a, like सुबह in unit 5. दीदी is what you actually call an elder sister; बहन is the word for the relationship." },
        { id: "hi-u10l2-chaachaa", type: "vocab", front: "चाचा", reading: "chaachaa", meaning: "a father's younger brother", accept: ["uncle", "paternal uncle"], example: { jp: "मेरे चाचा गाँव में रहते हैं और मेरे मामा शहर में।", en: "My uncle lives in the village and my mother's brother in the city." }, drill: { jp: "मेरे चाचा यहाँ रहते हैं", en: "My uncle lives here" }, hint: "CHAA-chaa, masculine, and the gloss is the lesson: this is specifically your FATHER'S YOUNGER brother. His elder brother is ताऊ, a different word and a different level of deference." },
        { id: "hi-u10l2-chaachii", type: "vocab", front: "चाची", reading: "chaachii", meaning: "a father's younger brother's wife", accept: ["aunt", "paternal aunt by marriage"], example: { jp: "मेरी चाची मेरे चाचा की पत्नी हैं।", en: "My aunt is my uncle's wife." }, drill: { jp: "मेरी चाची बहुत अच्छी हैं", en: "My aunt is very kind" }, hint: "CHAA-chee, feminine — चाचा with the -ी ending, and THAT is the pattern: the man is -आ, his wife is -ी. It runs through चाचा/चाची, मामा/मामी, दादा/दादी and नाना/नानी." },
        { id: "hi-u10l2-maamaa", type: "vocab", front: "मामा", reading: "maamaa", meaning: "a mother's brother", accept: ["uncle", "maternal uncle"], example: { jp: "मेरे मामा का घर बहुत बड़ा है।", en: "My uncle's house is very big." }, drill: { jp: "मेरे मामा का घर बड़ा है", en: "My uncle's house is big" }, hint: "MAA-maa, masculine — your MOTHER'S brother, either age. ⚠️ Do not hear माँ in it: माँ is maan with a nasal aa, मामा is maamaa with two clean ones." },
        { id: "hi-u10l2-maamii", type: "vocab", front: "मामी", reading: "maamii", meaning: "a mother's brother's wife", accept: ["aunt", "maternal aunt by marriage"], example: { jp: "मेरी मामी एक दुकान में काम करती हैं।", en: "My aunt works in a shop." }, drill: { jp: "मेरी मामी एक दुकान में हैं", en: "My aunt is in a shop" }, hint: "MAA-mee, feminine — मामा plus -ी, the same pattern again. Your mother's SISTER is मौसी, a different word entirely, and that one is A2's." },
      ],
    },
    {
      id: "hi-u10l3",
      unit: 10,
      lesson: 3,
      title: "Grandparents, on both sides",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name your grandparents on your father's side and on your mother's side, and use the word for family.",
      items: [
        { id: "hi-u10l3-daadaa", type: "vocab", front: "दादा", reading: "daadaa", meaning: "a father's father", accept: ["grandfather", "paternal grandfather"], example: { jp: "मेरे दादा बहुत बूढ़े हैं।", en: "My grandfather is very old." }, drill: { jp: "मेरे दादा गाँव में रहते हैं", en: "My grandfather lives in the village" }, hint: "DAA-daa, masculine, with the DENTAL द — tongue on the teeth. Your father's father, and in most families the head of the household. Called दादा जी to his face." },
        { id: "hi-u10l3-daadii", type: "vocab", front: "दादी", reading: "daadii", meaning: "a father's mother", accept: ["grandmother", "paternal grandmother"], example: { jp: "मेरी दादी मेरे पिता की माँ हैं।", en: "My grandmother is my father's mother." }, drill: { jp: "मेरी दादी यहाँ रहती हैं", en: "My grandmother lives here" }, hint: "DAA-dee, feminine — दादा plus -ी. Your father's mother. दादी माँ is the affectionate form, doubling up the two words for the same warmth." },
        { id: "hi-u10l3-naanaa", type: "vocab", front: "नाना", reading: "naanaa", meaning: "a mother's father", accept: ["grandfather", "maternal grandfather"], example: { jp: "मेरे नाना मेरी माँ के पिता हैं।", en: "My grandfather is my mother's father." }, drill: { jp: "मेरे नाना का गाँव यहाँ है", en: "My grandfather's village is here" }, hint: "NAA-naa, masculine — your MOTHER'S father, and the whole point of having a separate word: नाना and दादा are never interchangeable. Your mother's parents' house is your ननिहाल, a place with its own name." },
        { id: "hi-u10l3-naanii", type: "vocab", front: "नानी", reading: "naanii", meaning: "a mother's mother", accept: ["grandmother", "maternal grandmother"], example: { jp: "मेरी नानी गाँव के उस घर में अकेली रहती हैं।", en: "My grandmother lives alone in that house in the village." }, drill: { jp: "मेरी नानी गाँव में रहती हैं", en: "My grandmother lives in the village" }, hint: "NAA-nee, feminine — नाना plus -ी. Four grandparents, four words, and the pattern covers all of them: दादा दादी on the father's side, नाना नानी on the mother's." },
        { id: "hi-u10l3-rishtedaar", type: "vocab", front: "रिश्तेदार", reading: "rishtedaar", meaning: "a relative", accept: ["relation", "kin", "family member"], example: { jp: "हमारे बहुत रिश्तेदार इस शहर में हैं।", en: "We have a lot of relatives in this city." }, drill: { jp: "मेरे बहुत रिश्तेदार यहाँ हैं", en: "I have a lot of relatives here" }, hint: "rish-te-DAAR, masculine — रिश्ता (a relationship) plus -दार (one who holds), a Persian pattern Hindi uses everywhere: दुकानदार is a shopkeeper. Note the श्त stack." },
        { id: "hi-u10l3-parivaar", type: "vocab", front: "परिवार", reading: "parivaar", meaning: "a family", accept: ["family", "household"], example: { jp: "मेरा परिवार बड़ा है और सब गाँव में रहते हैं।", en: "My family is big and they all live in the village." }, drill: { jp: "मेरा परिवार बहुत बड़ा है", en: "My family is very big" }, hint: "pa-ri-VAAR, masculine. ⚠️ It means the WHOLE extended family — grandparents, uncles, cousins, all of it — not the four people English usually means. That is also the name of this unit." },
      ],
    },
    {
      id: "hi-u10l4",
      unit: 10,
      lesson: 4,
      title: "Talking about your own people",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that someone is your own, describe them as young or elderly, and say whether they are alone or both together.",
      items: [
        { id: "hi-u10l4-apnaa", type: "vocab", front: "अपना", reading: "apnaa", meaning: "one's own", accept: ["my own", "his own", "her own", "their own"], example: { jp: "मैं अपना काम अपने घर पर करता हूँ।", en: "I do my own work at my own house." }, drill: { jp: "मैं अपना काम करता हूँ", en: "I do my own work" }, hint: "AP-naa, and Hindi will not let you skip it. ⚠️ When the owner IS the subject you must use अपना, not मेरा: मैं अपना घर देखता हूँ, never मैं मेरा घर. It bends to whoever the subject is — my own, your own, his own, all one word." },
        { id: "hi-u10l4-shaadii", type: "vocab", front: "शादी", reading: "shaadii", meaning: "a marriage", accept: ["wedding", "a marriage ceremony"], example: { jp: "मेरी बहन की शादी इस शहर में है।", en: "My sister's wedding is in this city." }, drill: { jp: "मेरी बहन की शादी यहाँ है", en: "My sister's wedding is here" }, hint: "SHAA-dee, feminine, from Persian. It covers both the state of being married and the ceremony, so शादी है can mean there is a wedding or she is married — the sentence tells you which." },
        { id: "hi-u10l4-javaan", type: "vocab", front: "जवान", reading: "javaan", meaning: "young", accept: ["youthful", "in one's prime"], example: { jp: "मेरे चाचा जल्दी काम करते हैं और अब भी जवान हैं।", en: "My uncle works quickly and is still young." }, drill: { jp: "मेरे चाचा अब भी जवान हैं", en: "My uncle is still young" }, hint: "ja-VAAN. ⚠️ Only of PEOPLE, and it means a grown young adult, not a child — a child is छोटा. It does not change for gender. As a noun a जवान is a soldier." },
        { id: "hi-u10l4-buurhaa", type: "vocab", front: "बूढ़ा", reading: "buurhaa", meaning: "elderly", accept: ["old (of a person)", "aged"], example: { jp: "वह आदमी बहुत बूढ़ा है, पर अब भी अकेला रहता है।", en: "That man is very old, but he still lives alone." }, drill: { jp: "वह बहुत बूढ़ा आदमी है", en: "He is a very old man" }, hint: "BOO-rhaa — long ू underneath, then the breathy flapped ढ़, so buurhaa and never buudhaa. ⚠️ ONLY of people, and bluntly: use पुराना for things and बुज़ुर्ग when you want to be respectful about a person." },
        { id: "hi-u10l4-donon", type: "vocab", front: "दोनों", reading: "donon", meaning: "both", accept: ["the two of them", "both of them"], example: { jp: "मेरे दोनों भाई यहाँ रहते हैं और हिंदी बोलते हैं।", en: "Both my brothers live here and speak Hindi." }, drill: { jp: "मेरे दोनों भाई हिंदी बोलते हैं", en: "Both my brothers speak Hindi" }, hint: "DO-non, built straight off दो (two) from unit 3 with the nasal ending. It goes in front of the noun: दोनों भाई, both brothers. For all of them it is सब, from unit 2." },
        { id: "hi-u10l4-akelaa", type: "vocab", front: "अकेला", reading: "akelaa", meaning: "alone", accept: ["by oneself", "single", "solitary"], example: { jp: "वह इस बड़े घर में अकेला रहता है।", en: "He lives alone in this big house." }, drill: { jp: "वह इस घर में अकेला रहता है", en: "He lives alone in this house" }, hint: "a-KE-laa, masculine form; feminine अकेली. It means physically on your own, with no judgement in it — lonely is a different word, अकेलापन, and that is the noun." },
      ],
    },
  ],
};
