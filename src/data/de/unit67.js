// DE Unit 67 — Gesundheit und Wohlbefinden (slot: health) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// THEME. A2's u25 "Gesundheit und Koerper" owns the body and the symptom (die
// Wunde, die Tablette, das Rezept, die Apotheke, der Patient, untersuchen, die
// Behandlung, sich erholen, sich verletzen, sich entspannen, erschoepft are all
// already taught and are used here in examples). This unit takes the level above
// it: what happens in the clinic, what prevention is called, and the words for
// being unwell in the head rather than the body.
// NOT taken, each being one lexeme with a taught front: die Untersuchung
// (untersuchen, u25), die Verletzung (sich verletzen, u25), die Erschoepfung
// (erschoepft, u22) - l3 carries die Belastung instead. Pairs inside the unit were
// checked the same way — only die
// Impfung (not impfen), only die Pflege (not pflegen), only die Sucht (not
// suechtig) is carded.
// FREE: Anna, Thomas, Lena, Berlin, Jahre, Wochen, Kinder, Tage, Stunden, Minuten, Tabletten
export const DE_UNIT67 = {
  id: "de-u67",
  lang: "de",
  title: "Gesundheit und Wohlbefinden",
  order: 67,
  stage: "b1",
  lessons: [
    {
      id: "de-u67l1",
      unit: 67,
      lesson: 1,
      title: "In der Klinik",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow what happens at the clinic: a diagnosis, an operation, a procedure, a therapy, to heal, recovery.",
      items: [
        { id: "de-u67l1-diediagnose", type: "vocab", front: "die Diagnose", reading: "diediagnose", meaning: "the diagnosis", example: { jp: "Am Ende hat der Arzt die Diagnose genau erklärt.", en: "In the end the doctor explained the diagnosis precisely." }, drill: { jp: "Die Diagnose war leider nicht gut", en: "The diagnosis was unfortunately not good" }, accept: ["diagnosis", "the diagnosis"], hint: "Four syllables, hard g: di-a-GNOH-se. Plural: die Diagnosen." },
        { id: "de-u67l1-dieoperation", type: "vocab", front: "die Operation", reading: "dieoperation", meaning: "the operation", example: { jp: "Die Operation am Knie war sehr lang.", en: "The operation on the knee was very long." }, drill: { jp: "Die Operation dauert zwei Stunden", en: "The operation lasts two hours" }, accept: ["operation", "the operation", "surgery", "the surgery"], hint: "Stress the end: o-pe-ra-TSI-on. Short form in speech: die OP, said oh-PEH." },
        { id: "de-u67l1-dereingriff", type: "vocab", front: "der Eingriff", reading: "dereingriff", meaning: "the procedure", example: { jp: "Es war ein kleiner Eingriff und sie durfte am Abend nach Hause.", en: "It was a minor procedure and she was allowed home in the evening." }, drill: { jp: "Der Eingriff war sehr klein", en: "The procedure was very minor" }, accept: ["procedure", "the procedure", "the intervention", "the operation"], hint: "ein + greifen, to reach in. Also figurative: ein Eingriff in die Natur." },
        { id: "de-u67l1-dietherapie", type: "vocab", front: "die Therapie", reading: "dietherapie", meaning: "the therapy", example: { jp: "Die Therapie nach der Operation dauert noch viele Wochen.", en: "The therapy after the operation goes on for many more weeks." }, drill: { jp: "Die Therapie hilft dem Patienten sehr", en: "The therapy helps the patient a lot" }, accept: ["therapy", "the therapy", "the treatment"], hint: "th said as plain t: te-ra-PIE. Both physical and psychological." },
        { id: "de-u67l1-heilen", type: "vocab", front: "heilen", reading: "heilen", meaning: "to heal", example: { jp: "Die Wunde am Arm heilt ohne Salbe sehr gut.", en: "The wound on the arm heals very well without ointment." }, drill: { jp: "Die Ärzte können die Wunde heilen", en: "The doctors can heal the wound" }, accept: ["to heal", "to cure", "to mend"], hint: "Both sides: der Arzt heilt den Kranken, and die Wunde heilt." },
        { id: "de-u67l1-diegenesung", type: "vocab", front: "die Genesung", reading: "diegenesung", meaning: "the recovery", example: { jp: "Gute Genesung, und komm bald wieder in die Schule!", en: "Get well soon, and come back to school soon!" }, drill: { jp: "Die Genesung dauert viele Wochen", en: "The recovery takes many weeks" }, accept: ["recovery", "the recovery", "the convalescence"], hint: "Gute Genesung! is what you write on the card. Formal; sich erholen (u25) is the everyday verb." },
      ],
    },
    {
      id: "de-u67l2",
      unit: 67,
      lesson: 2,
      title: "Vorsorge und Medizin",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle medicines and prevention: a vaccination, prevention, an ointment, a dose, a side effect, blood pressure.",
      items: [
        { id: "de-u67l2-dieimpfung", type: "vocab", front: "die Impfung", reading: "dieimpfung", meaning: "the vaccination", example: { jp: "Vor der Reise braucht man noch eine Impfung vom Arzt.", en: "Before the trip you still need a vaccination from the doctor." }, drill: { jp: "Die Impfung ist für Kinder wichtig", en: "The vaccination is important for children" }, accept: ["vaccination", "the vaccination", "the jab", "the shot", "the immunisation"], hint: "From impfen. The mp is said as written: IMP-fung." },
        { id: "de-u67l2-dievorsorge", type: "vocab", front: "die Vorsorge", reading: "dievorsorge", meaning: "the check-up", example: { jp: "Zur Vorsorge geht mein Vater im Herbst zum Arzt.", en: "My father goes to the doctor in autumn for a check-up." }, drill: { jp: "Die Vorsorge ist besser als die Therapie", en: "Prevention is better than therapy" }, accept: ["prevention", "the prevention", "check-up", "the check-up", "the screening"], hint: "vor + sorgen: caring in advance. zur Vorsorge gehen is the fixed phrase." },
        { id: "de-u67l2-diesalbe", type: "vocab", front: "die Salbe", reading: "diesalbe", meaning: "the ointment", example: { jp: "Die Salbe aus der Apotheke hilft gegen die Schmerzen im Arm.", en: "The ointment from the pharmacy helps against the pain in the arm." }, drill: { jp: "Die Salbe hilft gegen die Wunde", en: "The ointment helps with the wound" }, accept: ["ointment", "the ointment", "the cream", "the salve"], hint: "Thicker than eine Creme, and always medical." },
        { id: "de-u67l2-diedosis", type: "vocab", front: "die Dosis", reading: "diedosis", meaning: "the dose", example: { jp: "Für ein kleines Kind ist die Dosis viel kleiner.", en: "For a small child the dose is much smaller." }, drill: { jp: "Die Dosis ist für Kinder kleiner", en: "The dose is smaller for children" }, accept: ["dose", "the dose", "the dosage"], hint: "Odd plural: die Dosen — which is also the plural of die Dose, a tin." },
        { id: "de-u67l2-dienebenwirkung", type: "vocab", front: "die Nebenwirkung", reading: "dienebenwirkung", meaning: "the side effect", example: { jp: "Die Tabletten helfen gut, aber sie haben eine Nebenwirkung.", en: "The tablets help well, but they have a side effect." }, drill: { jp: "Die Nebenwirkung kommt nach zwei Tagen", en: "The side effect comes after two days" }, accept: ["side effect", "the side effect"], hint: "neben (u14, beside) + Wirkung, effect. The effect standing beside the wanted one." },
        { id: "de-u67l2-derblutdruck", type: "vocab", front: "der Blutdruck", reading: "derblutdruck", meaning: "the blood pressure", example: { jp: "Vor der Therapie ist der Blutdruck sehr wichtig.", en: "Before the therapy the blood pressure is very important." }, drill: { jp: "Der Blutdruck ist heute zu hoch", en: "The blood pressure is too high today" }, accept: ["blood pressure", "the blood pressure"], hint: "das Blut (u25) + der Druck. hoher Blutdruck is the one people talk about." },
      ],
    },
    {
      id: "de-u67l3",
      unit: 67,
      lesson: 3,
      title: "Kopf und Seele",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how you are in yourself, not just in your body: stress, mental, chronic, strain, addiction, wellbeing.",
      items: [
        { id: "de-u67l3-derstress", type: "vocab", front: "der Stress", reading: "derstress", meaning: "the stress", example: { jp: "Der Stress bei der Arbeit macht viele Kollegen krank.", en: "Stress at work makes many colleagues ill." }, drill: { jp: "Der Stress bei der Arbeit ist groß", en: "The stress at work is great" }, accept: ["stress", "the stress"], hint: "English word, German gender: der Stress. Double s, so the reading is written with ss." },
        { id: "de-u67l3-seelisch", type: "vocab", front: "seelisch", reading: "seelisch", meaning: "mental", example: { jp: "Nach dem harten Jahr war sie seelisch am Ende.", en: "After the hard year she was mentally at the end of her tether." }, drill: { jp: "Die Arbeit ist seelisch sehr schwer", en: "The work is mentally very hard" }, accept: ["mental", "mentally", "emotional", "psychological"], hint: "From die Seele, the soul. Its opposite pair is the body word: seelisch und körperlich." },
        { id: "de-u67l3-chronisch", type: "vocab", front: "chronisch", reading: "chronisch", meaning: "chronic", example: { jp: "Die Schmerzen im Rücken sind chronisch und gehen nicht weg.", en: "The pain in the back is chronic and does not go away." }, drill: { jp: "Die Schmerzen sind leider chronisch", en: "The pain is unfortunately chronic" }, accept: ["chronic", "chronically", "long-term"], hint: "ch as a hard k: KROH-nisch. The opposite is akut." },
        { id: "de-u67l3-diebelastung", type: "vocab", front: "die Belastung", reading: "diebelastung", meaning: "the strain", example: { jp: "Vier Wochen ohne freien Tag sind eine große Belastung.", en: "Four weeks without a day off are a great strain." }, drill: { jp: "Die Belastung bei der Arbeit ist groß", en: "The strain at work is great" }, accept: ["strain", "the strain", "the burden", "the load", "the stress"], hint: "From die Last, a load. What puts you there; erschöpft (u22) is where it leaves you." },
        { id: "de-u67l3-diesucht", type: "vocab", front: "die Sucht", reading: "diesucht", meaning: "the addiction", example: { jp: "Eine Sucht ist schwer und braucht fast immer eine Therapie.", en: "An addiction is serious and almost always needs therapy." }, drill: { jp: "Die Sucht ist sehr schwer", en: "The addiction is very serious" }, accept: ["addiction", "the addiction", "the craving", "the mania"], hint: "Nothing to do with suchen. Plural with umlaut: die Süchte." },
        { id: "de-u67l3-daswohlbefinden", type: "vocab", front: "das Wohlbefinden", reading: "daswohlbefinden", meaning: "the wellbeing", example: { jp: "Für das Wohlbefinden ist Ruhe genauso wichtig wie Sport.", en: "For wellbeing, rest is as important as sport." }, drill: { jp: "Das Wohlbefinden ist sehr wichtig", en: "Wellbeing is very important" }, accept: ["wellbeing", "the wellbeing", "the well-being", "the comfort"], hint: "wohl + sich befinden, to find oneself. Formal, and exactly the word doctors use." },
      ],
    },
    {
      id: "de-u67l4",
      unit: 67,
      lesson: 4,
      title: "Gut für sich sorgen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about keeping yourself well: nutrition, care, to lose weight, to put on weight, a spa stay, complaints.",
      items: [
        { id: "de-u67l4-dieernahrung", type: "vocab", front: "die Ernährung", reading: "dieernahrung", meaning: "the diet", example: { jp: "Bei der Ernährung ist frisches Gemüse sehr wichtig.", en: "In your diet fresh vegetables are very important." }, drill: { jp: "Die Ernährung der Kinder ist wichtig", en: "Children's nutrition is important" }, accept: ["diet", "the diet", "nutrition", "the nutrition", "the food"], hint: "What you eat over time. eine Diät is the temporary kind you go on to lose weight." },
        { id: "de-u67l4-diepflege", type: "vocab", front: "die Pflege", reading: "diepflege", meaning: "the care", example: { jp: "Die Pflege von alten Eltern zu Hause ist harte Arbeit.", en: "Caring for old parents at home is hard work." }, drill: { jp: "Die Pflege zu Hause ist schwer", en: "Care at home is hard" }, accept: ["care", "the care", "the nursing", "the maintenance"], hint: "Of people, and of things: die Pflege vom Garten." },
        { id: "de-u67l4-abnehmen", type: "vocab", front: "abnehmen", reading: "abnehmen", meaning: "to lose weight", example: { jp: "Nach dem Winter will mein Bruder zwei Kilo abnehmen.", en: "After the winter my brother wants to lose two kilos." }, drill: { jp: "Wir wollen im Sommer abnehmen", en: "We want to lose weight in the summer" }, accept: ["to lose weight", "to take off", "to pick up", "to decrease"], hint: "Separable and strong: er nimmt ab. Also: to answer the phone." },
        { id: "de-u67l4-zunehmen", type: "vocab", front: "zunehmen", reading: "zunehmen", meaning: "to put on weight", example: { jp: "Im Winter nehmen viele zu, weil sie weniger Sport machen.", en: "In winter many people put on weight because they do less sport." }, drill: { jp: "Im Winter können wir zunehmen", en: "In winter we can put on weight" }, accept: ["to put on weight", "to gain weight", "to increase", "to grow"], hint: "The mirror of abnehmen. Also of anything that grows: der Wind nimmt zu." },
        { id: "de-u67l4-diekur", type: "vocab", front: "die Kur", reading: "diekur", meaning: "the spa stay", example: { jp: "Nach dem harten Jahr hat die Kasse ihm eine Kur bezahlt.", en: "After the hard year the health fund paid for a spa stay for him." }, drill: { jp: "Die Kur dauert drei Wochen", en: "The spa stay lasts three weeks" }, accept: ["spa stay", "the spa stay", "the cure", "the health retreat"], hint: "Very German: weeks of paid rest at a spa town. eine Kur machen." },
        { id: "de-u67l4-diebeschwerden", type: "vocab", front: "die Beschwerden", reading: "diebeschwerden", meaning: "the complaints", example: { jp: "Bitte sagen Sie mir genau, wo die Beschwerden sind.", en: "Please tell me exactly where the trouble is." }, drill: { jp: "Die Beschwerden sind heute besser", en: "The symptoms are better today" }, accept: ["complaints", "the complaints", "the symptoms", "the trouble", "the ailments"], hint: "Plural in the medical sense — what hurts. From schwer." },
      ],
    },
  ],
};
