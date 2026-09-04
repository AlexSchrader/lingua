// NO Unit 11 — Kropp og helse ("Body and health") — A1
// Conventions are declared in no/unit1.js and bind every unit.
//
// TWO LESSONS OF BODY, TWO OF WHAT GOES WRONG WITH IT. The unit is built around
// one frame the learner needs whole: **ha vondt i** — jeg har vondt i hodet, i
// øret, i tanna. It is introduced on `et hode` (l1), completed by `vond` and
// `å gjøre` (l3), and used across the unit, because a body-part card the learner
// cannot put in a sentence about pain is a card that does nothing.
//
// THREE BARE NOUNS, all under unit1.js §1(b) and all for the same reason — the
// indefinite singular is not idiomatic for the sense being taught:
//   `hår`   — the hair on a head is mass; "et hår" is one single strand.
//   `feber` — Norwegian says å ha feber with no article, as English says "have flu".
//   `helse` — god helse. ("en god helse" is attested, so this one is a judgement
//     about the A1 sense being taught rather than a claim that the article is
//     ungrammatical. Flagged by truth-agent; the call stands, the reason is narrower.)
// Each hint names the gender and the definite (håret, feberen, helsa).
//
// ø IS DENSE HERE — et øye, et øre, å gjøre, å høre, trøtt — and every one of those
// readings is hand-folded ø→o per unit1.js §3. The engine fix is still outstanding
// (BUILD-CHECKLIST.md → Feature CC backlog), so those five cards accept the exact
// front string and the folded key, but lose case and space tolerance until it lands.
//
// `hår` FOLDS ONTO `har`. The reading is "har", which is also the present of å ha.
// The two never collide as fronts (`hår` vs `å ha`) and no other card reads "har",
// but the hint says so out loud rather than letting the learner discover it.
//
// NEUTER -t: `Hun har mørkt hår.` and the vondt of ha vondt i are the only places
// the learner meets a derived neuter here, and both are named in their hints.
// Deriving one is still u14's job — unit1.js §8(b).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT11 = {
  id: "no-u11",
  lang: "no",
  title: "Kropp og helse",
  order: 11,
  stage: "a1",
  lessons: [
    // Lesson 1: head, hand, foot, eye, ear — and the ha vondt i frame.
    {
      id: "no-u11l1",
      unit: 11,
      lesson: 1,
      title: "The body",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the head, hands, feet, eyes and ears, and say that one of them hurts: Jeg har vondt i hodet.",
      items: [
        { id: "no-u11l1-enkropp", type: "vocab", front: "en kropp", reading: "enkropp", meaning: "body", example: { jp: "Kroppen min er kald.", en: "My body is cold." }, accept: ["a body"], hint: "Masculine: en kropp → kroppen. Watch where the possessive sits — kroppen min, definite noun first, then min. That is the everyday order; min kropp is correct too but sounds formal." },
        { id: "no-u11l1-ethode", type: "vocab", front: "et hode", reading: "ethode", meaning: "head", example: { jp: "Hun har vondt i hodet.", en: "She has a headache." }, accept: ["a head"], hint: "Neuter: et hode → hodet. The d IS pronounced here — HOO-de — but the -t of the definite is not, which is true of every definite neuter: huset, flagget, øyet. Learn ha vondt i as one piece — jeg har vondt i hodet, \"I have a pain in the head\". It is how Norwegian reports every ache there is." },
        { id: "no-u11l1-eihand", type: "vocab", front: "ei hånd", reading: "eihand", meaning: "hand", example: { jp: "Han har ei kald hånd.", en: "He has a cold hand." }, accept: ["a hand"], hint: "Feminine: ei hånd → hånda, plural hender. You will also see en hånd / hånden — Bokmål allows both, and this course writes ei so the definite -a is predictable. The d is silent: HONN." },
        { id: "no-u11l1-enfot", type: "vocab", front: "en fot", reading: "enfot", meaning: "foot", example: { jp: "I dag er foten min vond.", en: "Today my foot is sore." }, accept: ["a foot", "leg"], hint: "Masculine: en fot → foten, plural føtter — the vowel changes. til fots is \"on foot\". Note the order once more: i dag opens, er comes second, foten min follows." },
        { id: "no-u11l1-etoye", type: "vocab", front: "et øye", reading: "etoye", meaning: "eye", example: { jp: "Øynene er blå.", en: "The eyes are blue." }, accept: ["an eye"], hint: "Neuter: et øye → øyet, said UH-ye. The plural is irregular and you will meet it constantly — øyne, definite øynene." },
        { id: "no-u11l1-etore", type: "vocab", front: "et øre", reading: "etore", meaning: "ear", example: { jp: "Har du vondt i øret?", en: "Does your ear hurt?" }, accept: ["an ear"], hint: "Neuter: et øre → øret, plural ører. It is the same family as å høre, \"to hear\", which arrives in lesson 4 — a hook, not a trap." },
      ],
    },
    // Lesson 2: the face and the limbs.
    {
      id: "no-u11l2",
      unit: 11,
      lesson: 2,
      title: "The face and the limbs",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the face, mouth, nose, hair, arms and legs, and describe someone by them.",
      items: [
        { id: "no-u11l2-etansikt", type: "vocab", front: "et ansikt", reading: "etansikt", meaning: "face", example: { jp: "Jeg kjenner ansiktet.", en: "I recognise the face." }, accept: ["a face"], hint: "Neuter: et ansikt → ansiktet. Built from an- (\"toward\") and sikt (\"sight\") — the side of you that is turned toward other people." },
        { id: "no-u11l2-enmunn", type: "vocab", front: "en munn", reading: "enmunn", meaning: "mouth", example: { jp: "Barnet har noe i munnen.", en: "The child has something in its mouth." }, accept: ["a mouth"], hint: "Masculine: en munn → munnen. The double n clips the vowel short — the tight u of gul, cut off. Hold munn! is \"be quiet\" — literally \"hold mouth\"." },
        { id: "no-u11l2-einese", type: "vocab", front: "ei nese", reading: "einese", meaning: "nose", example: { jp: "Nesa er kald.", en: "The nose is cold." }, accept: ["a nose"], hint: "Feminine: ei nese → nesa, plural neser. You will also see en nese / nesen; both are Bokmål." },
        { id: "no-u11l2-har", type: "vocab", front: "hår", reading: "har", meaning: "hair", example: { jp: "Hun har mørkt hår.", en: "She has dark hair." }, accept: ["the hair"], hint: "A mass noun — the hair on a head, not one strand — so no en/ei/et. Neuter all the same: håret. Two things to notice: the answer key folds to har, which is also the present of å ha; and hår is neuter, so mørk picks up a -t. Unit 14 makes that a rule." },
        { id: "no-u11l2-enarm", type: "vocab", front: "en arm", reading: "enarm", meaning: "arm", example: { jp: "Armen min er vond.", en: "My arm is sore." }, accept: ["an arm"], hint: "Masculine: en arm → armen, plural armer. The same word as English, but the a is long and open: AARM." },
        { id: "no-u11l2-etbein", type: "vocab", front: "et bein", reading: "etbein", meaning: "leg", example: { jp: "Erling har lange bein.", en: "Erling has long legs." }, accept: ["a leg", "bone", "a bone"], hint: "Neuter: et bein → beinet. The indefinite plural takes no ending at all — lange bein — which is normal for short neuter nouns. It means both the leg and the bone inside it, and is also spelled ben; both are correct." },
      ],
    },
    // Lesson 3: ill, well, sore — and the doctor.
    {
      id: "no-u11l3",
      unit: 11,
      lesson: 3,
      title: "Being ill",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you are ill or better, that something hurts, and that you are going to the doctor.",
      items: [
        { id: "no-u11l3-syk", type: "vocab", front: "syk", reading: "syk", meaning: "ill", example: { jp: "Jeg er syk i dag.", en: "I am ill today." }, accept: ["sick", "unwell"], hint: "SUEK, with the tight y of lys. The same syk sits inside sykehus, the hospital from unit 7 — literally a \"sick house\"." },
        { id: "no-u11l3-frisk", type: "vocab", front: "frisk", reading: "frisk", meaning: "healthy", example: { jp: "Nå er Erling frisk.", en: "Erling is well now." }, accept: ["well", "fresh", "fit", "recovered"], hint: "FRISK. Of a person it means recovered or in good health; of air or water it means fresh. It is the answer to er du syk? — Nei, jeg er frisk." },
        { id: "no-u11l3-vond", type: "vocab", front: "vond", reading: "vond", meaning: "painful", example: { jp: "Jeg har en vond fot.", en: "I have a sore foot." }, accept: ["sore", "bad", "hurting", "aching"], hint: "VOONN, with the d silent. The form you will use most is the neuter vondt, locked inside ha vondt i — jeg har vondt i hodet, i øret, i tanna. Take that frame whole for now; unit 14 explains where the -t comes from." },
        { id: "no-u11l3-agjore", type: "vocab", front: "å gjøre", reading: "agjore", meaning: "to do", example: { jp: "Hva gjør du i kveld?", en: "What are you doing tonight?" }, accept: ["do", "to make", "make"], hint: "Present gjør, said YURR — gj is a plain y sound, like the g of gi. Det gjør vondt, \"it hurts\", is the other half of ha vondt i: one says what you have, the other says what it does." },
        { id: "no-u11l3-enlege", type: "vocab", front: "en lege", reading: "enlege", meaning: "doctor", example: { jp: "Jeg går til legen i morgen.", en: "I am going to the doctor tomorrow." }, accept: ["a doctor", "physician", "gp"], hint: "Masculine: en lege → legen, plural leger. LEH-ge, with a hard g. Everyone in Norway is assigned a fastlege — a permanent GP — unless they ask to change." },
        { id: "no-u11l3-feber", type: "vocab", front: "feber", reading: "feber", meaning: "fever", example: { jp: "Barnet har feber.", en: "The child has a fever." }, accept: ["a fever", "temperature", "a temperature"], hint: "Taught bare: Norwegian says å ha feber with no article, the way English says \"to have flu\". Masculine when it does take one — feberen. FEH-ber." },
      ],
    },
    // Lesson 4: teeth, tiredness, sleep, help, hearing, health.
    {
      id: "no-u11l4",
      unit: 11,
      lesson: 4,
      title: "At the doctor's",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you are tired, that your tooth hurts, that you cannot hear — and ask someone to help.",
      items: [
        { id: "no-u11l4-eitann", type: "vocab", front: "ei tann", reading: "eitann", meaning: "tooth", example: { jp: "Jeg har vondt i tanna.", en: "I have toothache." }, accept: ["a tooth"], hint: "Feminine: ei tann → tanna, plural tenner — the vowel changes, like fot → føtter. A tannlege is a dentist: literally a tooth-doctor." },
        { id: "no-u11l4-trott", type: "vocab", front: "trøtt", reading: "trott", meaning: "tired", example: { jp: "I kveld er jeg trøtt.", en: "I am tired tonight." }, accept: ["sleepy", "weary"], hint: "TRUHT. Also spelled trett — both are correct Bokmål, and trøtt is the commoner. The plural is trøtte; the neuter stays trøtt, since it already ends in double t." },
        { id: "no-u11l4-asove", type: "vocab", front: "å sove", reading: "asove", meaning: "to sleep", example: { jp: "Barnet sover nå.", en: "The child is sleeping now." }, accept: ["sleep"], hint: "Present sover: SOH-ver. Sov godt! is \"sleep well\", the ordinary Norwegian goodnight." },
        { id: "no-u11l4-ahjelpe", type: "vocab", front: "å hjelpe", reading: "ahjelpe", meaning: "to help", example: { jp: "Legen hjelper meg.", en: "The doctor is helping me." }, accept: ["help", "to assist", "assist"], hint: "Silent h in front of j, exactly like hva and hvor: YEL-pe, present hjelper. The noun is hjelp, and Hjelp! is the shout." },
        { id: "no-u11l4-ahore", type: "vocab", front: "å høre", reading: "ahore", meaning: "to hear", example: { jp: "Jeg hører ikke noe.", en: "I cannot hear anything." }, accept: ["hear", "to listen", "listen"], hint: "HUH-re, present hører — the same family as et øre. Jeg hører ikke is how you say \"I can't hear\": Norwegian does not need a word for \"can\" in this one." },
        { id: "no-u11l4-helse", type: "vocab", front: "helse", reading: "helse", meaning: "health", example: { jp: "Erling har god helse.", en: "Erling is in good health." }, accept: ["the health"], hint: "Taught bare — god helse, no article, the way English says \"good health\". Feminine when it takes one: helsa. The whole public system is named after it, helsevesenet." },
      ],
    },
  ],
};
