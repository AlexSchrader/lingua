// DE Unit 20 — Alltag und Modalverben (slot: vocabulary 6) — A1
// Block 3 (u15–u20). Conventions: see de/unit1.js. LAST UNIT OF GERMAN A1.
//
// THEME CHOSEN BY THIS SEAT, and it is the one gap that was not a topic at all.
// u12–u14 gave the learner word order and the whole case system, which is a lot
// of grammar — but between them they taught exactly two verbs, brauchen and
// helfen. A learner arriving here can decline a noun three ways and still cannot
// say I can, I must, I would like, I know, I see. That is what this unit fixes:
// the six modal verbs first, then the highest-frequency everyday verbs, then the
// ones for being at home and for a free afternoon.
// Placing it last is deliberate — every verb here can take an object from any of
// the nineteen units before it, so the examples get to use the whole language.
//
// Rejected as already taught: haben, lieben (u4), essen, trinken (u6), gehen,
// fahren, finden, suchen (u7), helfen, brauchen (u13, u14), wohnen, hören,
// sprechen (u1), arbeiten, studieren, kommen, heißen (u3) — all used freely in
// the examples instead.
// Rejected as the same lexeme: mögen. möchten is its subjunctive, and the two
// would be one word on two cards; möchten is far the more useful at A1, so it
// takes the slot and mögen is named in its hint.
// Also rejected: stehen. verstehen (u19) and aufstehen (here) are both built on
// it, and three cards on one stem in adjacent units is a poor use of three slots
// — the base verb is the one a learner can most easily infer from the other two.
// FREE: Sofa, Tennis, Gitarre, Pizza, Party, Radio | Bücher, Kinder, Wörter, Schuhe, Zimmer, Stunden, Freunde, Jahre
export const DE_UNIT20 = {
  id: "de-u20",
  lang: "de",
  title: "Alltag und Modalverben",
  order: 20,
  stage: "a1",
  lessons: [
    {
      id: "de-u20l1",
      unit: 20,
      lesson: 1,
      title: "Die Modalverben",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you can, must, want and are allowed to do — and send the second verb to the end of the sentence, where German keeps it.",
      items: [
        { id: "de-u20l1-konnen", type: "vocab", front: "können", reading: "konnen", meaning: "to be able to", example: { jp: "Ich kann sehr gut schwimmen.", en: "I can swim very well." }, drill: { jp: "Die Kinder können sehr gut schwimmen", en: "The children can swim very well." }, accept: ["can", "to be able to", "to be able"], hint: "The second verb goes to the very end in the infinitive: ich kann … schwimmen. Irregular: ich kann, du kannst, wir können." },
        { id: "de-u20l1-mussen", type: "vocab", front: "müssen", reading: "mussen", meaning: "must / to have to", example: { jp: "Wir müssen in Köln umsteigen.", en: "We have to change trains in Cologne." }, accept: ["must", "to have to", "to need to"], hint: "ich muss, du musst, wir müssen. Careful: ich muss nicht means I do not have to, never I must not." },
        { id: "de-u20l1-wollen", type: "vocab", front: "wollen", reading: "wollen", meaning: "to want to", example: { jp: "Sie will einen Mantel kaufen.", en: "She wants to buy a coat." }, drill: { jp: "Wir wollen hier bleiben", en: "We want to stay here." }, accept: ["to want", "to want to"], hint: "ich will, du willst. A false friend for English speakers: will is want, not the future tense." },
        { id: "de-u20l1-durfen", type: "vocab", front: "dürfen", reading: "durfen", meaning: "to be allowed to", example: { jp: "Hier dürfen die Kinder spielen.", en: "The children are allowed to play here." }, accept: ["may", "to be allowed to", "to be permitted"], hint: "About permission, where können is about ability. Darf ich? is the polite way to ask for anything." },
        { id: "de-u20l1-sollen", type: "vocab", front: "sollen", reading: "sollen", meaning: "to be supposed to", example: { jp: "Was soll ich dem Chef sagen?", en: "What am I supposed to tell the boss?" }, drill: { jp: "Die Schüler sollen die Wörter schreiben", en: "The pupils are supposed to write the words." }, accept: ["should", "to be supposed to", "ought to"], hint: "Someone else's instruction or expectation: du sollst warten, you are to wait." },
        { id: "de-u20l1-mochten", type: "vocab", front: "möchten", reading: "mochten", meaning: "would like", example: { jp: "Ich möchte einen Kaffee, bitte.", en: "I would like a coffee, please." }, drill: { jp: "Wir möchten einen Kaffee trinken", en: "We would like to drink a coffee." }, accept: ["would like", "to would like"], hint: "The politest way to order or ask for anything in German. It is really the subjunctive of mögen, to like, but you meet it first and use it far more." },
      ],
    },
    {
      id: "de-u20l2",
      unit: 20,
      lesson: 2,
      title: "Alltagsverben",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the six verbs that carry most German sentences: do, say, see, give, take and know.",
      items: [
        { id: "de-u20l2-machen", type: "vocab", front: "machen", reading: "machen", meaning: "to do / make", example: { jp: "Was machst du am Sonntag?", en: "What are you doing on Sunday?" }, drill: { jp: "Wir machen das heute zusammen", en: "We are doing that together today." }, accept: ["to do", "to make"], hint: "Was machst du? is both what are you doing and what do you do for a living. Probably the most-used verb in spoken German." },
        { id: "de-u20l2-sagen", type: "vocab", front: "sagen", reading: "sagen", meaning: "to say", example: { jp: "Sie sagt nichts und geht.", en: "She says nothing and leaves." }, drill: { jp: "Die Eltern sagen dem Kind nichts", en: "The parents say nothing to the child." }, accept: ["to say", "to tell"], hint: "The person told is dative: sag mir, tell me. Sagen is to say; sprechen (u1) is to speak." },
        { id: "de-u20l2-sehen", type: "vocab", front: "sehen", reading: "sehen", meaning: "to see (with the eyes)", example: { jp: "Vom Fenster sehen wir den Park.", en: "From the window we see the park." }, accept: ["to see", "to look"], hint: "Vowel shift again: ich sehe, but er sieht. Not the same as u2's bis bald, which is a goodbye, not this verb." },
        { id: "de-u20l2-geben", type: "vocab", front: "geben", reading: "geben", meaning: "to give", example: { jp: "Der Lehrer gibt dem Schüler ein Buch.", en: "The teacher gives the pupil a book." }, drill: { jp: "Wir geben dem Kind ein Buch", en: "We give the child a book." }, accept: ["to give"], hint: "Two objects: person dative, thing accusative — exactly u13 and u14 together. u13's es gibt, there is, is built from it." },
        { id: "de-u20l2-nehmen", type: "vocab", front: "nehmen", reading: "nehmen", meaning: "to take", example: { jp: "Wir nehmen den Bus zum Bahnhof.", en: "We take the bus to the station." }, accept: ["to take"], hint: "Badly irregular: ich nehme, du nimmst, er nimmt. Worth learning as three separate shapes." },
        { id: "de-u20l2-wissen", type: "vocab", front: "wissen", reading: "wissen", meaning: "to know", example: { jp: "Ich weiß, wo das Museum ist.", en: "I know where the museum is." }, drill: { jp: "Wir wissen es nicht", en: "We do not know." }, accept: ["to know", "to know a fact"], hint: "For facts. Knowing a person or a place is kennen — German splits what English calls knowing. ich weiß, du weißt." },
      ],
    },
    {
      id: "de-u20l3",
      unit: 20,
      lesson: 3,
      title: "Zu Hause",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe an ordinary day at home: getting up, sitting, lying down, staying in, and sleeping.",
      items: [
        { id: "de-u20l3-schlafen", type: "vocab", front: "schlafen", reading: "schlafen", meaning: "to sleep", example: { jp: "Das Kind schläft im Bett.", en: "The child is sleeping in bed." }, drill: { jp: "Die Kinder schlafen im Bett", en: "The children are sleeping in bed." }, accept: ["to sleep"], hint: "Vowel shift: ich schlafe, er schläft. das Schlafzimmer in u15 is built on it." },
        { id: "de-u20l3-aufstehen", type: "vocab", front: "aufstehen", reading: "aufstehen", meaning: "to get up", example: { jp: "Am Montag stehe ich um sechs Uhr auf.", en: "On Monday I get up at six o'clock." }, drill: { jp: "Wir müssen morgen aufstehen", en: "We have to get up tomorrow." }, accept: ["to get up", "to stand up", "to rise"], hint: "Separable — the auf- goes to the end: ich stehe … auf. Watch the word order in the example." },
        { id: "de-u20l3-sitzen", type: "vocab", front: "sitzen", reading: "sitzen", meaning: "to sit", example: { jp: "Wir sitzen zusammen auf dem Sofa.", en: "We are sitting together on the sofa." }, accept: ["to sit", "to be sitting"], hint: "Being seated, not the act of sitting down — that is sich setzen. Takes the dative for where." },
        { id: "de-u20l3-liegen", type: "vocab", front: "liegen", reading: "liegen", meaning: "to lie", example: { jp: "Die Zeitung liegt auf dem Tisch.", en: "The newspaper is lying on the table." }, drill: { jp: "Die Bücher liegen auf dem Tisch", en: "The books are lying on the table." }, accept: ["to lie", "to be lying", "to be situated"], hint: "Used constantly for where a thing IS: das Buch liegt dort. Also for towns — Wien liegt in Österreich." },
        { id: "de-u20l3-bleiben", type: "vocab", front: "bleiben", reading: "bleiben", meaning: "to stay", example: { jp: "Heute bleiben wir hier.", en: "Today we are staying here." }, accept: ["to stay", "to remain"], hint: "zu Hause bleiben, to stay at home. In the perfect it takes sein, not haben: ich bin geblieben." },
        { id: "de-u20l3-denken", type: "vocab", front: "denken", reading: "denken", meaning: "to think", example: { jp: "Ich denke oft an meine Großeltern.", en: "I often think about my grandparents." }, drill: { jp: "Wir denken oft an die Familie", en: "We often think about the family." }, accept: ["to think"], hint: "denken AN plus accusative for thinking about someone. English think and denken are the same old word." },
      ],
    },
    {
      id: "de-u20l4",
      unit: 20,
      lesson: 4,
      title: "Freizeit",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you do in your free time — and, with u20's modal verbs, what you can and want to do. This is the last lesson of German A1.",
      items: [
        { id: "de-u20l4-spielen", type: "vocab", front: "spielen", reading: "spielen", meaning: "to play", example: { jp: "Die Kinder spielen im Garten.", en: "The children are playing in the garden." }, accept: ["to play"], hint: "Games, sport and instruments all use it: Tennis spielen, Gitarre spielen. English play is the same root as das Spiel." },
        { id: "de-u20l4-schwimmen", type: "vocab", front: "schwimmen", reading: "schwimmen", meaning: "to swim", example: { jp: "Im Urlaub schwimmen wir sehr oft.", en: "On holiday we swim very often." }, accept: ["to swim"], hint: "Swim and schwimmen are the same word — German writes the sw sound as schw." },
        { id: "de-u20l4-tanzen", type: "vocab", front: "tanzen", reading: "tanzen", meaning: "to dance", example: { jp: "Meine Schwester tanzt sehr gut.", en: "My sister dances very well." }, drill: { jp: "Wir tanzen sehr gern zusammen", en: "We very much like dancing together." }, accept: ["to dance"], hint: "The z is ts: TAN-tsen. Same word as English dance, arrived from French in both languages." },
        { id: "de-u20l4-singen", type: "vocab", front: "singen", reading: "singen", meaning: "to sing", example: { jp: "Wir singen sehr gern zusammen.", en: "We very much like singing together." }, accept: ["to sing"], hint: "Sing and singen — identical but for the ending. das Lied is a song." },
        { id: "de-u20l4-kochen", type: "vocab", front: "kochen", reading: "kochen", meaning: "to cook", example: { jp: "Am Sonntag kocht mein Vater.", en: "On Sunday my father cooks." }, drill: { jp: "Wir kochen heute zusammen", en: "We are cooking together today." }, accept: ["to cook", "to boil"], hint: "Also to boil: das Wasser kocht. der Koch is a cook — not to be confused with der Chef, the boss." },
        { id: "de-u20l4-laufen", type: "vocab", front: "laufen", reading: "laufen", meaning: "to run", example: { jp: "Er läuft am Morgen im Park.", en: "He runs in the park in the morning." }, drill: { jp: "Die Kinder laufen jetzt in den Park", en: "The children are running to the park now." }, accept: ["to run", "to walk", "to go"], hint: "Run, but in much of Germany simply to walk — ich laufe zur Schule. Vowel shift: er läuft." },
      ],
    },
  ],
};
