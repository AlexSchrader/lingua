// NO Unit 22 — Følelser og stemning ("Feelings and states") — A2
// Goes DEEPER than A1 u17 Hverdag og følelser, which owns glad, trist, sint,
// redd, å le, å smile, å tenke, å huske, å glemme, å synes, å håpe, å mene.
// Those four adjectives are the whole A1 emotional range; this unit adds the
// states you need to say WHY you feel something and how strongly.
//
// Conventions per unit1.js §1-§8 and the u21 header. Subordinators are A1's set
// (at, fordi, hvis, men, eller, når, som) — om, siden, selv om and uansett are
// NOT taught yet and belong to u29 Connecting words.
//   FREE: Erling, Kari, Anna, Jonas, Oslo, Bergen, Norge | kafé, telefon, restaurant, park, problem, person, taxi | 2000
export const NO_UNIT22 = {
  id: "no-u22",
  lang: "no",
  title: "Følelser og stemning",
  order: 22,
  stage: "a2",
  lessons: [
    {
      id: "no-u22l1",
      unit: 22,
      lesson: 1,
      title: "Nerves and pride",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how you feel before and after something difficult — nervøs, spent, stolt, lettet — not only whether you are glad or sad.",
      items: [
        { id: "no-u22l1-enfolelse", type: "vocab", front: "en følelse", reading: "enfolelse", meaning: "feeling", example: { jp: "Det er en god følelse når du klarer noe du trener på.", en: "It is a good feeling when you manage something you practise." }, accept: ["a feeling", "emotion", "sense"], drill: { jp: "Han forstår en følelse", en: "He understands a feeling" }, hint: "FUR-le-se, from å føle, to feel. Masculine: definite følelsen, plural følelser." },
        { id: "no-u22l1-nervos", type: "vocab", front: "nervøs", reading: "nervos", meaning: "nervous", example: { jp: "Jeg er alltid nervøs når jeg skal snakke norsk med noen nye.", en: "I am always nervous when I have to speak Norwegian with someone new." }, accept: ["anxious", "jittery", "on edge"], drill: { jp: "Erling er nervøs i dag", en: "Erling is nervous today" }, hint: "ner-VURS. Neuter nervøst, plural nervøse — regular. Note the V2 in the example: når opens a subordinate clause, so its own verb stays put." },
        { id: "no-u22l1-spent", type: "vocab", front: "spent", reading: "spent", meaning: "excited", example: { jp: "Barna er spente fordi de skal reise til Bergen i morgen.", en: "The children are excited because they are going to travel to Bergen tomorrow." }, accept: ["eager", "looking forward", "keyed up", "tense"], hint: "SPENT. It covers excited AND tense — context decides. Plural spente, as in the example.", drill: { jp: "Kari er spent på turen", en: "Kari is excited about the trip" } },
        { id: "no-u22l1-stolt", type: "vocab", front: "stolt", reading: "stolt", meaning: "proud", example: { jp: "Læreren er stolt av elevene, fordi alle klarte oppgaven.", en: "The teacher is proud of the pupils, because they all managed the task." }, accept: ["proud of"], drill: { jp: "Jeg er stolt av deg", en: "I am proud of you" }, hint: "STOLT. You are proud AV something — av is A1 u13. Plural stolte." },
        { id: "no-u22l1-lettet", type: "vocab", front: "lettet", reading: "lettet", meaning: "relieved", example: { jp: "Jeg blir lettet når sjefen sier at vi ikke må jobbe på søndag.", en: "I am relieved whenever the boss says that we do not have to work on Sunday." }, accept: ["relief"], hint: "LET-tet, from lett (A1 u10, easy) — the weight comes off. Used with å bli: jeg ble lettet.", drill: { jp: "Vi er lettet nå", en: "We are relieved now" } },
        { id: "no-u22l1-flau", type: "vocab", front: "flau", reading: "flau", meaning: "embarrassed", example: { jp: "Han blir flau når han glemmer navnet til en venn.", en: "He gets embarrassed whenever he forgets a friend's name." }, accept: ["ashamed", "awkward", "sheepish"], drill: { jp: "Jeg er litt flau nå", en: "I am a little embarrassed now" }, hint: "FLAU, one syllable rhyming with \"now\". Neuter flaut, plural flaue." },
      ],
    },
    {
      id: "no-u22l2",
      unit: 22,
      lesson: 2,
      title: "Worry and calm",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that something worries you or does not — bekymret, rolig, sikker, usikker — and reassure someone.",
      items: [
        { id: "no-u22l2-bekymret", type: "vocab", front: "bekymret", reading: "bekymret", meaning: "worried", example: { jp: "Mora hans er bekymret fordi han ikke ringer i dag.", en: "His mother is worried because he is not calling today." }, accept: ["concerned", "anxious"], drill: { jp: "Kari er bekymret i dag", en: "Kari is worried today" }, hint: "be-KUEM-ret. You are worried FOR something: bekymret for. Plural bekymrede, though bekymret is common for all." },
        { id: "no-u22l2-rolig", type: "vocab", front: "rolig", reading: "rolig", meaning: "calm", example: { jp: "Det er rolig i parken i kveld, når alle andre reiser.", en: "It is calm in the park tonight, when everyone else is leaving." }, accept: ["quiet", "peaceful", "relaxed"], drill: { jp: "Erling er alltid rolig", en: "Erling is always calm" }, hint: "ROO-li, silent -ig g. Ta det rolig is the everyday \"take it easy\"." },
        { id: "no-u22l2-sikker", type: "vocab", front: "sikker", reading: "sikker", meaning: "sure", example: { jp: "Jeg er sikker på at toget går klokka ni, fordi jeg leser det her.", en: "I am sure that the train leaves at nine, because I read it here." }, accept: ["certain", "safe", "confident"], drill: { jp: "Jeg er sikker på det", en: "I am sure about it" }, hint: "SIK-ker. Sure PÅ something. Neuter sikkert, which also works alone as an adverb meaning \"probably\"." },
        { id: "no-u22l2-usikker", type: "vocab", front: "usikker", reading: "usikker", meaning: "unsure", example: { jp: "Vi er usikre på hva vi skal gjøre, men vi bestemmer oss i kveld.", en: "We are unsure what we should do, but we will make up our minds tonight." }, accept: ["uncertain", "insecure", "unsafe"], drill: { jp: "Han er usikker på svaret", en: "He is unsure about the answer" }, hint: "OO-sik-ker. u- is Norwegian's un-, and it is productive: sikker/usikker, vanlig/uvanlig. Plural usikre." },
        { id: "no-u22l2-abryseg", type: "vocab", front: "å bry seg", reading: "abryseg", meaning: "to care", example: { jp: "Jeg bryr meg og ringer familien min i dag.", en: "I care and call my family today." }, accept: ["care", "to mind", "to be bothered"], drill: { jp: "Det er fint å bry seg", en: "It is nice to care" }, hint: "BRUE seg. The seg changes with the person: jeg bryr MEG. The imperative drops the -r: Ikke bry deg om det! means don't worry about it — never \"bryr deg\"." },
        { id: "no-u22l2-atale", type: "vocab", front: "å tåle", reading: "atale", meaning: "to tolerate", example: { jp: "Jeg tåler kaldt vær, men jeg liker ikke når det regner mye.", en: "I can stand cold weather, but I do not like it when it rains a lot." }, accept: ["tolerate", "to stand", "stand", "to bear", "to put up with"], drill: { jp: "Det er tungt å tåle mye", en: "It is hard to tolerate a lot" }, hint: "TAW-le. Physical or emotional both — jeg tåler ikke kaffe, jeg tåler ikke støy." },
      ],
    },
    {
      id: "no-u22l3",
      unit: 22,
      lesson: 3,
      title: "Missing and minding",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say you miss someone, that something surprised or disappointed you, and that you are alone — å savne, overrasket, skuffet, ensom.",
      items: [
        { id: "no-u22l3-asavne", type: "vocab", front: "å savne", reading: "asavne", meaning: "to miss", example: { jp: "Jeg savner familien min når jeg jobber i en annen by.", en: "I miss my family when I work in another city." }, accept: ["miss", "to long for", "to lack"], drill: { jp: "Det er tungt å savne noen", en: "It is hard to miss someone" }, hint: "SAV-ne. Missing a PERSON or thing you want back. It does not mean missing a bus — that is å ikke rekke, from u21." },
        { id: "no-u22l3-overrasket", type: "vocab", front: "overrasket", reading: "overrasket", meaning: "surprised", example: { jp: "Vi blir overrasket når Kari kommer, fordi hun aldri sier noe.", en: "We are surprised whenever Kari turns up, because she never says anything." }, accept: ["astonished", "taken aback"], drill: { jp: "Jeg er overrasket i dag", en: "I am surprised today" }, hint: "OV-er-ras-ket, built on over. Used with å bli for the moment it happens: jeg ble overrasket." },
        { id: "no-u22l3-skuffet", type: "vocab", front: "skuffet", reading: "skuffet", meaning: "disappointed", example: { jp: "Elevene var skuffet fordi turen ble avlyst i dag.", en: "The pupils were disappointed because the trip was cancelled today." }, accept: ["let down", "disillusioned"], drill: { jp: "Han er skuffet nå", en: "He is disappointed now" }, hint: "SKUF-fet — the sk before u is a hard sk, not the sh of skje. Ei skuffe is a drawer; unrelated." },
        { id: "no-u22l3-ensom", type: "vocab", front: "ensom", reading: "ensom", meaning: "lonely", example: { jp: "Han er ensom i den store byen, men han begynner å møte nye venner.", en: "He is lonely in the big city, but he is starting to meet new friends." }, accept: ["alone", "solitary"], drill: { jp: "Det er tungt å være ensom", en: "It is hard to be lonely" }, hint: "EN-som — én (one) plus -som. Lonely, not merely alone: alene is alone without the sadness." },
        { id: "no-u22l3-anyte", type: "vocab", front: "å nyte", reading: "anyte", meaning: "to enjoy", example: { jp: "Vi nyter en rolig kveld når vi ikke må gjøre noe.", en: "We enjoy a calm evening when we do not have to do anything." }, accept: ["enjoy", "to savour", "to relish"], drill: { jp: "Det er godt å nyte en pause", en: "It is good to enjoy a break" }, hint: "NUE-te. Stronger and more deliberate than å like — you savour something. Past nøt." },
        { id: "no-u22l3-eistemning", type: "vocab", front: "ei stemning", reading: "eistemning", meaning: "mood", example: { jp: "Det var ei fin stemning i parken, fordi alle kjente hverandre.", en: "There was a nice mood in the park, because everyone knew each other." }, accept: ["atmosphere", "a mood", "vibe"], drill: { jp: "Det er ei stemning her", en: "There is a mood here" }, hint: "STEM-ning, from ei stemme, a voice. Feminine: definite stemninga. Note the drill: an indefinite subject cannot open a locative clause, so it is Det er ei stemning, never \"Ei stemning er her\"." },
      ],
    },
    {
      id: "no-u22l4",
      unit: 22,
      lesson: 4,
      title: "Limits and closeness",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about how close or distant things are, and where your limits lie — et forhold, en grense, en avstand, sjalu.",
      items: [
        { id: "no-u22l4-etforhold", type: "vocab", front: "et forhold", reading: "etforhold", meaning: "relationship", example: { jp: "De har et godt forhold, fordi de snakker sammen.", en: "They have a good relationship, because they talk together." }, accept: ["a relationship", "ratio", "circumstance"], drill: { jp: "Kari har et forhold i Oslo", en: "Kari has a relationship in Oslo" }, hint: "FOR-hold. Neuter: definite forholdet, plural forhold unchanged. It stretches from a romance to a working relationship to circumstances in general." },
        { id: "no-u22l4-engrense", type: "vocab", front: "en grense", reading: "engrense", meaning: "limit", example: { jp: "Alle har en grense, og det er bra å si fra tidlig.", en: "Everyone has a limit, and it is good to speak up early." }, accept: ["a limit", "border", "boundary"], drill: { jp: "Jeg har en grense her", en: "I have a limit here" }, hint: "GREN-se. The same word for a national border and a personal boundary. Masculine: definite grensen." },
        { id: "no-u22l4-enavstand", type: "vocab", front: "en avstand", reading: "enavstand", meaning: "distance", example: { jp: "Det er en lang avstand til Bergen, så vi tar toget.", en: "There is a long distance to Bergen, so we take the train." }, accept: ["a distance", "gap", "space"], drill: { jp: "En avstand er ikke lang", en: "A distance is not long" }, hint: "AV-stand — av plus stand, \"standing off\". Used for physical distance and for keeping your distance from someone." },
        { id: "no-u22l4-sjalu", type: "vocab", front: "sjalu", reading: "sjalu", meaning: "jealous", example: { jp: "Han blir sjalu når han ser at vennen hans kjøper en ny bil.", en: "He gets jealous whenever he sees his friend buying a new car." }, accept: ["envious"], drill: { jp: "Hun er litt sjalu nå", en: "She is a little jealous now" }, hint: "sha-LOO — the sj hush from A1 unit 1, and the stress on the end. It does not change form: sjalu for every gender and number." },
        { id: "no-u22l4-ataenke", type: "vocab", front: "å tenke seg", reading: "atenkeseg", meaning: "to imagine", example: { jp: "Jeg kan tenke meg at det er tungt å bo langt fra familien.", en: "I can imagine that it is hard to live far from family." }, accept: ["imagine", "to picture", "to consider"], drill: { jp: "Det er lett å tenke seg det", en: "It is easy to imagine it" }, hint: "A1 taught å tenke, to think. With seg it becomes to imagine — jeg kan tenke meg. Tenk deg! on its own means \"imagine that!\"" },
        { id: "no-u22l4-hverandre", type: "vocab", front: "hverandre", reading: "hverandre", meaning: "each other", example: { jp: "De to søstrene hjelper hverandre, når en av dem har mye å gjøre.", en: "The two sisters help each other, when one of them has a lot to do." }, accept: ["one another"], drill: { jp: "Vi hjelper hverandre alltid", en: "We always help each other" }, hint: "ver-AN-dre — silent h, like hva and hvor. It never changes and never starts a sentence." },
      ],
    },
  ],
};
