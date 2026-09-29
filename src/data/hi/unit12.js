// HI Unit 12 — रोज़ के काम ("The things you do every day") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT. The scaffold called this "Characters 2" — the Japanese
// interleaved-kanji strand. Hindi finishes its script at u6 (unit1.js §10 lists
// all five of these slots), so the name pointed at nothing and `src/data/lint.js`
// hard-errors on it. Block 1 set the pattern by rethinking u9 as loanwords.
//
// WHY VERBS, AND WHY HERE. Probed the merged u1–u10 corpus (240 cards) for what a
// CEFR A1 learner cannot yet do. The largest hole by a distance was MOVEMENT AND
// THE DAILY ROUTINE: block 1 taught ten verbs — देखना, पढ़ना, लिखना, बोलना, समझना,
// रहना, करना, सीखना, जानना, मिलना — and not one of them lets the learner GO
// anywhere, EAT, DRINK, GIVE, TAKE, ASK or WANT. A learner reaching u20 could read
// and write Hindi and still not say "I go home after work".
// It is placed at u12 deliberately rather than later: these 21 verbs are what
// u13–u20's example sentences are built out of. Fill the hole before the units
// that need it, not after.
//
// AGREEMENT — THE TRAP THIS UNIT WALKS INTO, AND HOW ITS DRILLS AVOID IT.
// §5 headwords every verb in the -ना infinitive, and a drill must contain the front
// VERBATIM (the router matches the exact string — an inflected form silently
// refuses cloze). So every verb drill here uses a frame that keeps the bare
// infinitive: `<V-ना> मुश्किल है`, `मुझे <masc. object> <V-ना> है`,
// `<V-ना> चाहता हूँ`, `<V-ना> सीखता हूँ`.
// ⚠️ AND THE ONE THAT IS EASY TO GET WRONG: after a FEMININE direct object the
// obligation infinitive AGREES — मुझे रोटी खानी है, never खाना है. Every
// `मुझे ... -ना है` drill in this unit takes a MASCULINE object (फल, पानी, बैग, काम)
// for that reason. After चाहना the infinitive does NOT agree and stays masculine
// (मैं रोटी खाना चाहता हूँ) — noted in चाहना's own hint, because it is the
// exception a learner will over-apply.
//
// FIRST-PERSON EXAMPLES ARE MASCULINE (-ता हूँ), following block 1 (u6l4
// hi-u6l4-samajhnaa: "मैं अब हिंदी समझना सीखता हूँ"). Feminine agreement is shown
// through मीना, the proper name u11 declared FREE for exactly this.
export const HI_UNIT12 = {
  id: "hi-u12",
  lang: "hi",
  title: "रोज़ के काम",
  order: 12,
  stage: "a1",
  lessons: [
    {
      id: "hi-u12l1",
      unit: 12,
      lesson: 1,
      title: "Coming and going",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you go, when you set out, and when you get back.",
      items: [
        { id: "hi-u12l1-jaanaa", type: "vocab", front: "जाना", reading: "jaanaa", meaning: "to go", accept: ["go", "to head for"], example: { jp: "मैं रोज़ स्कूल जाता हूँ।", en: "I go to school every day." }, drill: { jp: "वह अब घर जाना चाहता है", en: "He wants to go home now" }, hint: "JAA-NAA, and COUNT THE न. One न is जाना, to go. TWO is जानना jaannaa, to know (unit 8). Two different verbs that look almost the same on the page, so the doubled letter is the only thing telling you which you are reading." },
        { id: "hi-u12l1-aanaa", type: "vocab", front: "आना", reading: "aanaa", meaning: "to come", accept: ["come", "to turn up"], example: { jp: "मीना कल यहाँ आती है।", en: "Meena comes here tomorrow." }, drill: { jp: "यहाँ रोज़ आना बहुत अच्छा है", en: "Coming here every day is very good" }, hint: "AA-NAA, the opposite of जाना, and Hindi keeps the two glued together: आना-जाना as one phrase means movement, traffic, people passing through. आइए is the 'please come in' you get at the door." },
        { id: "hi-u12l1-chalnaa", type: "vocab", front: "चलना", reading: "chalnaa", meaning: "to walk", accept: ["walk", "to move along", "to run (of a machine)"], example: { jp: "मीना धीरे चलती है।", en: "Meena walks slowly." }, drill: { jp: "इस सड़क पर चलना अच्छा है", en: "Walking on this road is good" }, hint: "CHAL-NAA covers walking AND a machine running: घड़ी चलती है means the clock is going, not that it is out for a stroll. चलो! is how Hindi says 'let's go'." },
        { id: "hi-u12l1-nikalnaa", type: "vocab", front: "निकलना", reading: "nikalnaa", meaning: "to set out", accept: ["to leave", "to come out", "to emerge"], example: { jp: "मैं आठ बजे घर से निकलता हूँ।", en: "I set out from home at eight o'clock." }, drill: { jp: "जल्दी निकलना बहुत अच्छा है", en: "Setting out early is very good" }, hint: "NI-KAL-NAA is to come OUT of somewhere, which is why it means 'set out' when you are the one leaving a building. The place you leave always takes से, never को: घर से निकलना." },
        { id: "hi-u12l1-pahunchnaa", type: "vocab", front: "पहुँचना", reading: "pahunchnaa", meaning: "to arrive", accept: ["to reach", "reach", "to get there"], example: { jp: "वह देर से स्कूल पहुँचता है।", en: "He arrives at school late." }, drill: { jp: "समय पर पहुँचना मुश्किल है", en: "Arriving on time is difficult" }, hint: "PA-HUNCH-NAA. The ँ nasalises हु — let it hum, do not add a separate n before च. The destination takes पर or तक, not को: स्कूल पहुँचना, घर पर पहुँचना." },
        { id: "hi-u12l1-lautnaa", type: "vocab", front: "लौटना", reading: "lautnaa", meaning: "to return", accept: ["to come back", "to go back", "return"], example: { jp: "मैं रात को घर लौटता हूँ।", en: "I return home at night." }, drill: { jp: "गाँव लौटना बहुत अच्छा है", en: "Returning to the village is very good" }, hint: "LAUT-NAA, retroflex ट — tongue curled back to the roof of the mouth. It is both 'come back' and 'go back'; Hindi does not split the two the way English does, so direction comes from the rest of the sentence." },
      ],
    },
    {
      id: "hi-u12l2",
      unit: 12,
      lesson: 2,
      title: "Eating, drinking and sleeping",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you eat and drink, and talk about getting up and going to bed.",
      items: [
        { id: "hi-u12l2-khaanaa", type: "vocab", front: "खाना", reading: "khaanaa", meaning: "to eat", accept: ["eat", "to have a meal"], example: { jp: "मैं रोज़ फल खाता हूँ।", en: "I eat fruit every day." }, drill: { jp: "मुझे यह फल खाना है", en: "I have to eat this fruit" }, hint: "KHAA-NAA is ALSO the noun 'food' — one spelling doing two jobs, like English 'a drink'. That is why 'to cook' is खाना बनाना, literally 'to make food'. ⚠️ After a feminine object the -ना agrees: मुझे रोटी खानी है, not खाना है." },
        { id: "hi-u12l2-piinaa", type: "vocab", front: "पीना", reading: "piinaa", meaning: "to drink", accept: ["drink", "to smoke"], example: { jp: "मैं सुबह पानी पीता हूँ।", en: "I drink water in the morning." }, drill: { jp: "मुझे थोड़ा पानी पीना है", en: "I have to drink a little water" }, hint: "PII-NAA — and Hindi uses it for smoking too: सिगरेट पीना. Watch it against पीला piilaa (yellow, unit 16): one letter apart, न against ल, and the vowels are identical." },
        { id: "hi-u12l2-sonaa", type: "vocab", front: "सोना", reading: "sonaa", meaning: "to sleep", accept: ["sleep", "to go to bed", "to lie down"], example: { jp: "बच्चा रात को सोता है।", en: "The child sleeps at night." }, drill: { jp: "देर से सोना अच्छा नहीं है", en: "Sleeping late is not good" }, hint: "SO-NAA — and the identical word is the noun 'gold'. Nobody is ever confused, because one is a verb and one is a metal. 'To fall asleep' is सो जाना, sleeping plus going." },
        { id: "hi-u12l2-uthnaa", type: "vocab", front: "उठना", reading: "uthnaa", meaning: "to get up", accept: ["to rise", "to stand up", "get up"], example: { jp: "मैं सुबह जल्दी उठता हूँ।", en: "I get up early in the morning." }, drill: { jp: "सुबह जल्दी उठना मुश्किल है", en: "Getting up early is difficult" }, hint: "UTH-NAA, RETROFLEX ठ with a puff of air — curl the tongue back. Getting out of bed and standing up out of a chair are the same verb in Hindi. Its opposite, बैठना, is the next card." },
        { id: "hi-u12l2-baithnaa", type: "vocab", front: "बैठना", reading: "baithnaa", meaning: "to sit", accept: ["sit", "to sit down", "to be seated"], example: { jp: "वह कुर्सी पर बैठता है।", en: "He sits on the chair." }, drill: { jp: "यहाँ बैठना बहुत अच्छा है", en: "Sitting here is very good" }, hint: "BAITH-NAA, retroflex ठ again. बैठिए — 'please sit' — is the first thing said to you in a Hindi home, so learn to recognise it before you can produce it." },
        { id: "hi-u12l2-nahaanaa", type: "vocab", front: "नहाना", reading: "nahaanaa", meaning: "to bathe", accept: ["to wash", "to have a bath", "bathe"], example: { jp: "मैं सुबह नहाता हूँ।", en: "I bathe in the morning." }, drill: { jp: "मुझे अब नहाना है", en: "I have to bathe now" }, hint: "NA-HAA-NAA, and in most of India that means a bucket and a mug rather than a tub. It takes no object: you do not नहाना something, you just नहाना." },
      ],
    },
    {
      id: "hi-u12l3",
      unit: 12,
      lesson: 3,
      title: "Giving, asking and telling",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give something to someone, ask a question, and tell someone what you know.",
      items: [
        { id: "hi-u12l3-denaa", type: "vocab", front: "देना", reading: "denaa", meaning: "to give", accept: ["give", "to hand over", "to let"], example: { jp: "मैं उसे पानी देता हूँ।", en: "I give him water." }, drill: { jp: "मुझे यह काम उसे देना है", en: "I have to give this job to him" }, hint: "DE-NAA. The person who receives takes को: मैं करन को किताब देता हूँ. देना also builds permission onto other verbs — जाने देना is 'to let go'." },
        { id: "hi-u12l3-lenaa", type: "vocab", front: "लेना", reading: "lenaa", meaning: "to take", accept: ["take", "to get", "to receive"], example: { jp: "वह दुकान से किताब लेता है।", en: "He takes a book from the shop." }, drill: { jp: "मुझे यह बैग लेना है", en: "I have to take this bag" }, hint: "LE-NAA, the mirror of देना, and Hindi uses the pair to mark direction on other verbs: ले लेना is to take for yourself, दे देना to give away for good." },
        { id: "hi-u12l3-puuchhnaa", type: "vocab", front: "पूछना", reading: "puuchhnaa", meaning: "to ask", accept: ["ask", "to enquire", "to ask a question"], example: { jp: "बच्चे बहुत प्रश्न पूछते हैं।", en: "Children ask a lot of questions." }, drill: { jp: "प्रश्न पूछना बहुत अच्छा है", en: "Asking questions is very good" }, hint: "PUUCHH-NAA, with the breathy छ. ⚠️ The person you ask takes से, not को: मैं शिक्षक से पूछता हूँ — literally 'I ask FROM the teacher'. Getting that wrong is the commonest beginner slip with this verb." },
        { id: "hi-u12l3-bataanaa", type: "vocab", front: "बताना", reading: "bataanaa", meaning: "to tell", accept: ["tell", "to inform", "to explain"], example: { jp: "शिक्षक हमें नए शब्द बताते हैं।", en: "The teacher tells us new words." }, drill: { jp: "मुझे सब कुछ बताना है", en: "I have to tell everything" }, hint: "BA-TAA-NAA — to tell someone something, and the person told takes को. Read the middle letter carefully: बताना is 'tell', बनाना banaanaa is 'make', and they differ by one consonant." },
        { id: "hi-u12l3-sunnaa", type: "vocab", front: "सुनना", reading: "sunnaa", meaning: "to hear", accept: ["hear", "to listen", "listen"], example: { jp: "मैं हिंदी सुनता हूँ।", en: "I listen to Hindi." }, drill: { jp: "हिंदी सुनना और बोलना मुश्किल है", en: "Hearing and speaking Hindi is difficult" }, hint: "SUN-NAA, with a genuinely doubled न — hold the n, do not let it collapse. सुनिए means 'listen', and it is also how you get a shopkeeper's attention, the way English uses 'excuse me'." },
        { id: "hi-u12l3-banaanaa", type: "vocab", front: "बनाना", reading: "banaanaa", meaning: "to prepare", accept: ["to make", "make", "to build", "to cook"], example: { jp: "मीना रोज़ खाना बनाती है।", en: "Meena cooks food every day." }, drill: { jp: "खाना बनाना मुश्किल नहीं है", en: "Cooking is not difficult" }, hint: "BA-NAA-NAA — to make, prepare or build. खाना बनाना is the only way Hindi says 'to cook'; there is no separate cooking verb. Keep it apart from बताना bataanaa, to tell." },
      ],
    },
    {
      id: "hi-u12l4",
      unit: 12,
      lesson: 4,
      title: "Wanting, stopping and when",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you want, tell someone to stop, and place an action in your day.",
      items: [
        { id: "hi-u12l4-chaahnaa", type: "vocab", front: "चाहना", reading: "chaahnaa", meaning: "to want", accept: ["want", "to wish", "to desire"], example: { jp: "मैं हिंदी सीखना चाहता हूँ।", en: "I want to learn Hindi." }, drill: { jp: "सब कुछ चाहना अच्छा नहीं है", en: "Wanting everything is not good" }, hint: "CHAAH-NAA takes a bare infinitive after it, and THAT infinitive never changes: मैं रोटी खाना चाहता हूँ — खाना stays masculine even though रोटी is feminine. This is the one frame where -ना does NOT agree, so do not carry the rule over from मुझे ... है." },
        { id: "hi-u12l4-lagnaa", type: "vocab", front: "लगना", reading: "lagnaa", meaning: "to seem", accept: ["to feel", "to appear", "to take (of time)"], example: { jp: "यह काम मुश्किल लगता है।", en: "This job seems difficult." }, drill: { jp: "इस काम में समय लगना ठीक है", en: "It is fine for this work to take time" }, hint: "LAG-NAA is a workhorse. With an adjective it is 'seem' or 'feel': अच्छा लगता है, it feels good. With time it is 'take': एक घंटा लगता है. And मुझे भूख लगती है is how Hindi says 'I am hungry' — literally 'hunger attaches to me'." },
        { id: "hi-u12l4-ruknaa", type: "vocab", front: "रुकना", reading: "ruknaa", meaning: "to stop", accept: ["stop", "to halt", "to wait"], example: { jp: "बस यहाँ रुकती है।", en: "The bus stops here." }, drill: { jp: "यहाँ रुकना ठीक नहीं है", en: "Stopping here is not all right" }, hint: "RUK-NAA is both 'stop' and 'wait' — रुकिए! means hold on a moment. It is intransitive: things रुकना by themselves. To stop something ELSE you need a different verb, रोकना." },
        { id: "hi-u12l4-roz", type: "vocab", front: "रोज़", reading: "roz", meaning: "every day", accept: ["daily", "each day"], example: { jp: "मैं रोज़ हिंदी पढ़ता हूँ।", en: "I study Hindi every day." }, drill: { jp: "वह रोज़ सुबह जल्दी उठता है", en: "He gets up early every morning" }, hint: "ROZ, with the Persian ज़ — a z, not a j. It sits early in the sentence, well before the verb: मैं रोज़ काम करता हूँ. रोज़ाना means exactly the same and sounds more formal." },
        { id: "hi-u12l4-baad", type: "vocab", front: "बाद", reading: "baad", meaning: "afterwards", accept: ["after", "later", "subsequently"], example: { jp: "काम के बाद मैं घर जाता हूँ।", en: "After work I go home." }, drill: { jp: "इस काम के बाद मैं सोता हूँ", en: "After this job I sleep" }, hint: "BAAD arrives almost always as के बाद, 'after', with the thing it follows placed first: खाने के बाद, after eating. You will only ever meet it in के बाद and बाद में, so its gender never has to surface." },
        { id: "hi-u12l4-taiyaar", type: "vocab", front: "तैयार", reading: "taiyaar", meaning: "ready", accept: ["prepared", "set", "willing"], example: { jp: "मैं काम के लिए तैयार हूँ।", en: "I am ready for work." }, drill: { jp: "खाना अब तैयार है", en: "The food is ready now" }, hint: "TAI-YAAR does NOT change for gender or number — तैयार लड़का, तैयार लड़की, तैयार बच्चे, all identical. Every adjective ending in a consonant behaves this way; only the -ा ones agree. तैयार करना is 'to prepare'." },
      ],
    },
  ],
};
