// DE Unit 70 — Passiv und Konjunktiv II (slot: grammar 7) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// RETHEMED SLOT. The scaffold calls this "Grammar 7 — passive, causative,
// indirect", which is the Japanese shape: Japanese has a causative form and an
// indirect-speech particle, and German has neither as a form you can card.
// German's B1 problem in this slot is the PASSIVE and the KONJUNKTIV II, so that
// is what it teaches. Per CLAUDE.md "No front language".
//
// ⚠️ ONE FRONT NEEDS DEFENDING, and the crew lead should read this before merging.
// `worden` looks like a lexeme duplicate of `wurde` (u39, "became - past of
// werden"), and this block's own rule is to reject those. It is carded anyway,
// deliberately: `wurde` is taught there as the plain past of BECOME, with no
// passive in sight, while `worden` is the participle that exists ONLY to build
// the Perfekt passive (ist gemacht worden) and cannot be derived from `wurde` by
// any learner who has not been shown it. It is new learning, not a second mastery
// track on a word already known. If the lead disagrees, the cheap fix is to drop
// it for `veranlassen` and let l1 carry the passive through its five agentless
// verbs alone.
//
// Konjunktiv II: A2's u37 already took waere, haette, koennte and wuerde, so l3
// takes the four forms it left (duerfte, muesste, braeuchte, wuesste) plus the two
// strong-verb Konjunktive a B1 learner meets constantly (kaeme, gaebe).
// ⚠️ `sein` IS DECLARED FREE BELOW, and it is the one declaration in this block
// that is not a proper noun or a plural. Reason: u1 teaches sein's finite forms as
// SEPARATE FRONTS (ist, bin, bist, sind - see de/unit1.js, deliberate simplification
// (b)), so the infinitive `sein` is a form of a taught verb that the resolver cannot
// reach from any front. Without the declaration every modal sentence in l3 reads as
// out of scope. It licenses the bare token only, so the untaught POSSESSIVE forms
// (seine, seinem, seinen) still report, which is what we want.
// FREE: Anna, Thomas, Lena, Max, Berlin, Hamburg, Jahre, Kinder, Minuten, sein
export const DE_UNIT70 = {
  id: "de-u70",
  lang: "de",
  title: "Passiv und Konjunktiv II",
  order: 70,
  stage: "b1",
  lessons: [
    {
      id: "de-u70l1",
      unit: 70,
      lesson: 1,
      title: "Wenn niemand handelt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what was done without naming who did it: the passive participle, to be carried out, to take place, to happen, to arise, to turn out.",
      items: [
        { id: "de-u70l1-worden", type: "vocab", front: "worden", reading: "worden", meaning: "been (passive)", example: { jp: "Das alte Haus ist im Sommer sehr gut bezahlt worden.", en: "The old house was paid for very well in the summer." }, drill: { jp: "Die Arbeit ist gut bezahlt worden", en: "The work was paid for well" }, accept: ["been", "been (passive)", "the passive participle", "got", "was"], hint: "The passive Perfekt ends in worden, never in geworden: es ist bezahlt worden." },
        { id: "de-u70l1-erfolgen", type: "vocab", front: "erfolgen", reading: "erfolgen", meaning: "to be carried out", example: { jp: "Die Antwort von der Firma erfolgt in den Tagen danach.", en: "The answer from the firm comes in the days after that." }, drill: { jp: "Die Antwort kann bald erfolgen", en: "The answer can come soon" }, accept: ["to take place", "to occur", "to come", "to ensue", "to be carried out"], hint: "Official German for 'it happens'. You will read it on every form and letter." },
        { id: "de-u70l1-geschehen", type: "vocab", front: "geschehen", reading: "geschehen", meaning: "to happen", example: { jp: "Nach dem harten Winter ist in der Stadt viel geschehen.", en: "After the hard winter a lot happened in the city." }, drill: { jp: "Hier kann noch viel geschehen", en: "A lot can still happen here" }, accept: ["to happen", "to occur", "to come about"], hint: "Perfect with sein and no extra ge-: es ist geschehen. Gern geschehen! = you're welcome." },
        { id: "de-u70l1-sichergeben", type: "vocab", front: "sich ergeben", reading: "sichergeben", meaning: "to come about", example: { jp: "Aus dem langen Streit hat sich am Ende eine gute Lösung ergeben.", en: "Out of the long argument a good solution arose in the end." }, drill: { jp: "Die Frage kann sich ergeben", en: "The question can arise" }, accept: ["to arise", "to come up", "to result", "to emerge", "to surrender", "arise"], hint: "Of a question or a chance arising. Of a soldier it means to surrender." },
        { id: "de-u70l1-sichherausstellen", type: "vocab", front: "sich herausstellen", reading: "sichherausstellen", meaning: "to turn out", example: { jp: "Es kann sich herausstellen, dass die Lösung von gestern falsch war.", en: "It can turn out that yesterday's solution was wrong." }, drill: { jp: "Das kann sich herausstellen", en: "That can turn out" }, accept: ["to turn out", "to emerge", "to prove to be", "to become clear"], hint: "Almost always with es and dass: Es hat sich herausgestellt, dass …" },
      ],
    },
    {
      id: "de-u70l2",
      unit: 70,
      lesson: 2,
      title: "Statt Passiv: die -bar-Formen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say a thing CAN be done to something, in one word: doable, readable, edible, visible, audible, conceivable.",
      items: [
        { id: "de-u70l2-machbar", type: "vocab", front: "machbar", reading: "machbar", meaning: "doable", example: { jp: "Der Plan ist hart, aber mit vier Kollegen ist er machbar.", en: "The plan is tough, but with four colleagues it is doable." }, drill: { jp: "Der Plan ist gut machbar", en: "The plan is quite doable" }, accept: ["doable", "feasible", "manageable", "possible"], hint: "-bar on a verb stem means 'can be …-ed'. It is German's shortest passive." },
        { id: "de-u70l2-lesbar", type: "vocab", front: "lesbar", reading: "lesbar", meaning: "readable", example: { jp: "Der Text auf dem alten Bild ist kaum noch lesbar.", en: "The text on the old picture is hardly readable any more." }, drill: { jp: "Der Text ist kaum lesbar", en: "The text is hardly readable" }, accept: ["readable", "legible"], hint: "lesen + bar. leserlich is about handwriting; lesbar also about content." },
        { id: "de-u70l2-essbar", type: "vocab", front: "essbar", reading: "essbar", meaning: "edible", example: { jp: "Nach vier Tagen ist das Brot leider nicht mehr essbar.", en: "After four days the bread is unfortunately no longer edible." }, drill: { jp: "Das Brot ist noch essbar", en: "The bread is still edible" }, accept: ["edible", "eatable", "fit to eat"], hint: "essen + bar, with the double s kept." },
        { id: "de-u70l2-sichtbar", type: "vocab", front: "sichtbar", reading: "sichtbar", meaning: "visible", example: { jp: "Bei gutem Wetter ist das Gebirge von der Stadt aus sichtbar.", en: "In good weather the mountains are visible from the city." }, drill: { jp: "Der Berg ist heute gut sichtbar", en: "The mountain is clearly visible today" }, accept: ["visible", "in sight", "apparent"], hint: "Built on die Sicht, not on sehen. The opposite is unsichtbar." },
        { id: "de-u70l2-horbar", type: "vocab", front: "hörbar", reading: "horbar", meaning: "audible", example: { jp: "Der Zug am Bahnhof ist bis in den Garten hörbar.", en: "The train at the station is audible as far as the garden." }, drill: { jp: "Die Musik ist gut hörbar", en: "The music is clearly audible" }, accept: ["audible", "hearable"], hint: "hören + bar, keeping the umlaut." },
        { id: "de-u70l2-denkbar", type: "vocab", front: "denkbar", reading: "denkbar", meaning: "conceivable", example: { jp: "Es ist denkbar, dass die Firma im Winter mehr Kollegen braucht.", en: "It is conceivable that the firm will need more colleagues in winter." }, drill: { jp: "Eine bessere Lösung ist denkbar", en: "A better solution is conceivable" }, accept: ["conceivable", "imaginable", "thinkable", "possible"], hint: "Es ist denkbar, dass … is the polite way to float an idea." },
      ],
    },
    {
      id: "de-u70l3",
      unit: 70,
      lesson: 3,
      title: "Konjunktiv II der Modalverben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Soften a claim or a wish with the subjunctive: might, ought to, would need, would know, would come, there would be.",
      items: [
        { id: "de-u70l3-durfte", type: "vocab", front: "dürfte", reading: "durfte", meaning: "might well", example: { jp: "Der Zug dürfte in zehn Minuten am Bahnhof sein.", en: "The train should be at the station in ten minutes." }, drill: { jp: "Das dürfte richtig sein", en: "That should be right" }, accept: ["might well", "should", "is probably", "would be allowed to"], hint: "The Konjunktiv II of dürfen, but the everyday sense is a careful 'probably'." },
        { id: "de-u70l3-musste", type: "vocab", front: "müsste", reading: "musste", meaning: "ought to", example: { jp: "Der Chef müsste jetzt schon im Haus sein.", en: "The boss ought to be in the building by now." }, drill: { jp: "Er müsste jetzt hier sein", en: "He ought to be here by now" }, accept: ["ought to", "should", "would have to"], hint: "Umlaut is the whole difference: musste is 'had to', müsste is 'ought to'." },
        { id: "de-u70l3-brauchte", type: "vocab", front: "bräuchte", reading: "brauchte", meaning: "would need", example: { jp: "Für die Arbeit am Wochenende bräuchte ich noch zwei Kollegen.", en: "For the weekend work I would need two more colleagues." }, drill: { jp: "Ich bräuchte mehr Zeit", en: "I would need more time" }, accept: ["would need", "could do with", "would require"], hint: "Same umlaut trap: brauchte is 'needed', bräuchte is 'would need'." },
        { id: "de-u70l3-wusste", type: "vocab", front: "wüsste", reading: "wusste", meaning: "would know", example: { jp: "Ich wüsste gern, warum die Antwort lange dauert.", en: "I would like to know why the answer is taking long." }, drill: { jp: "Ich wüsste gern mehr", en: "I would like to know more" }, accept: ["would know", "would like to know"], hint: "From wissen. Ich wüsste gern … is the polite German for 'I want to know'." },
        { id: "de-u70l3-kame", type: "vocab", front: "käme", reading: "kame", meaning: "would come", example: { jp: "Mein Bruder käme gern mit, aber er hat am Samstag Arbeit.", en: "My brother would gladly come along, but he has work on Saturday." }, drill: { jp: "Er käme gern mit", en: "He would gladly come along" }, accept: ["would come", "would be coming"], hint: "Strong verbs build Konjunktiv II from the past with an umlaut: kam becomes käme." },
        { id: "de-u70l3-gabe", type: "vocab", front: "gäbe", reading: "gabe", meaning: "there would be", example: { jp: "Ohne den Streit gäbe es heute eine viel bessere Lösung.", en: "Without the argument there would be a much better solution today." }, drill: { jp: "Es gäbe eine bessere Lösung", en: "There would be a better solution" }, accept: ["there would be", "would give", "would be"], hint: "Almost always as es gäbe, the Konjunktiv of es gibt." },
      ],
    },
    {
      id: "de-u70l4",
      unit: 70,
      lesson: 4,
      title: "Irreale Fälle",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what nearly happened or would happen: almost, in your place, supposing, provided that, otherwise, apart from that.",
      items: [
        { id: "de-u70l4-andeinerstelle", type: "vocab", front: "an deiner Stelle", reading: "andeinerstelle", meaning: "in your place", example: { jp: "An deiner Stelle würde ich noch eine Woche warten.", en: "In your place I would wait another week." }, drill: { jp: "An deiner Stelle würde ich warten", en: "In your place I would wait" }, accept: ["in your place", "if I were you", "in your shoes"], hint: "The polite German way to give advice. Formally: an Ihrer Stelle." },
        { id: "de-u70l4-angenommen", type: "vocab", front: "angenommen", reading: "angenommen", meaning: "supposing", example: { jp: "Angenommen es regnet, dann bleiben wir im Hotel.", en: "Supposing it rains, then we will stay at the hotel." }, drill: { jp: "Angenommen es regnet morgen", en: "Supposing it rains tomorrow" }, accept: ["supposing", "assuming", "let us say", "given that"], hint: "From annehmen, to assume. Opens a thought experiment, often with dann after it." },
        { id: "de-u70l4-vorausgesetzt", type: "vocab", front: "vorausgesetzt", reading: "vorausgesetzt", meaning: "provided that", example: { jp: "Wir fahren am Samstag, vorausgesetzt das Auto ist wieder gut.", en: "We are travelling on Saturday, provided the car is all right again." }, drill: { jp: "Vorausgesetzt wir haben genug Zeit", en: "Provided we have enough time" }, accept: ["provided that", "providing", "assuming", "on condition that"], hint: "Stronger than angenommen: this one names a real condition, not a guess." },
        { id: "de-u70l4-andernfalls", type: "vocab", front: "andernfalls", reading: "andernfalls", meaning: "failing that", example: { jp: "Wir müssen jetzt gehen, andernfalls kommen wir zu spät.", en: "We have to go now, otherwise we will be late." }, drill: { jp: "Andernfalls kommen wir zu spät", en: "Otherwise we will be late" }, accept: ["otherwise", "or else", "failing that", "if not"], hint: "The written form of sonst (u29). Very common in letters from an office." },
        { id: "de-u70l4-ansonsten", type: "vocab", front: "ansonsten", reading: "ansonsten", meaning: "apart from that", example: { jp: "Der Preis ist hoch, ansonsten ist das Angebot sehr gut.", en: "The price is high, apart from that the offer is very good." }, drill: { jp: "Ansonsten ist es sehr gut", en: "Apart from that it is very good" }, accept: ["apart from that", "otherwise", "other than that", "for the rest"], hint: "Not the same as andernfalls: ansonsten sums up the rest, it does not warn." },
      ],
    },
  ],
};
