// DE Unit 34 — Wissenschaft und Umwelt (slot: science) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// ⚠️ ADJACENCY, and it is the tightest in this block: the scaffold calls u26 "Nature
// and animals" and u34 "Nature and science", and u26 is the LEAD'S. So this unit does
// not touch nature at all — no animals, no plants, no landscape, no weather. It takes
// the SCIENCE side (how a thing is found out) and the ENVIRONMENT-AS-POLICY side (what
// we do about it). If you can photograph it out of a window it belongs to u26 or to
// A1's u8 Farben und Wetter.
// Rejected as already taught: der Grund (u29 — the lead's connector unit took it),
// das Ziel (u18), and der Müll — the lead's u21l3 took it while this unit was being
// written, and lower slot wins with no negotiation. der Strom replaced it. Rejected as the same lexeme: die Natur (~u2 natürlich), die Wirkung
// (~wirken, which u31 teaches three units earlier).
// der Versuch and untersuchen both sit near A1's suchen (u7) and are kept: Versuch is
// an attempt or a scientific trial and untersuchen is to investigate — neither is
// derivable from "to look for", and modern German treats all three as separate words.
export const DE_UNIT34 = {
  id: "de-u34",
  lang: "de",
  title: "Wissenschaft und Umwelt",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "de-u34l1",
      unit: 34,
      lesson: 1,
      title: "Forschen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how something gets found out: science, research, an experiment, a trial, investigating, discovering.",
      items: [
        { id: "de-u34l1-diewissenschaft", type: "vocab", front: "die Wissenschaft", reading: "diewissenschaft", meaning: "science", example: { jp: "Die Wissenschaft braucht Zeit und Geld.", en: "Science needs time and money." }, drill: { jp: "Die Wissenschaft braucht viel Zeit", en: "Science needs a lot of time" }, accept: ["science", "scholarship", "academia"], hint: "wissen (u19) plus -schaft, the ending that makes a field out of a word. Wider than English science: it covers history and languages too." },
        { id: "de-u34l1-dieforschung", type: "vocab", front: "die Forschung", reading: "dieforschung", meaning: "research", example: { jp: "Die Forschung dauert sehr lang, weil das Thema schwer ist.", en: "The research takes a very long time because the topic is difficult." }, drill: { jp: "Die Forschung kostet viel Geld", en: "The research costs a lot of money" }, accept: ["research", "investigation"], hint: "The activity, where die Wissenschaft is the whole field. From forschen, to research." },
        { id: "de-u34l1-dasexperiment", type: "vocab", front: "das Experiment", reading: "dasexperiment", meaning: "experiment", example: { jp: "Das Experiment funktioniert nicht, obwohl wir es genau machen.", en: "The experiment does not work, although we do it precisely." }, drill: { jp: "Das Experiment funktioniert heute nicht", en: "The experiment is not working today" }, accept: ["experiment", "trial"], hint: "ex-pe-ri-MENT, stress at the end. Ein Experiment machen is to run one — German makes experiments rather than conducting them." },
        { id: "de-u34l1-derversuch", type: "vocab", front: "der Versuch", reading: "derversuch", meaning: "attempt / trial", example: { jp: "Der Versuch zeigt, dass das Ergebnis richtig ist.", en: "The trial shows that the result is correct." }, drill: { jp: "Der Versuch ist sehr genau", en: "The trial is very precise" }, accept: ["attempt", "trial", "try", "test"], hint: "Two senses that stay apart by context: a scientific trial, and an attempt at anything — ein Versuch ist es wert, it's worth a try." },
        { id: "de-u34l1-untersuchen", type: "vocab", front: "untersuchen", reading: "untersuchen", meaning: "to investigate / examine", example: { jp: "Wir untersuchen das Wasser, weil es schmutzig ist.", en: "We are examining the water because it is dirty." }, drill: { jp: "Wir untersuchen die Luft hier", en: "We are examining the air here" }, accept: ["to investigate", "to examine", "to study", "examine"], hint: "Inseparable despite the unter-: ich untersuche, never ich suche unter. A doctor untersucht a patient too." },
        { id: "de-u34l1-entdecken", type: "vocab", front: "entdecken", reading: "entdecken", meaning: "to discover", example: { jp: "Wir entdecken das Problem sehr spät.", en: "We discover the problem very late." }, drill: { jp: "Die Kinder entdecken gern etwas", en: "The children like discovering things" }, accept: ["to discover", "to find out", "discover"], hint: "ent- plus decken, to cover — literally to un-cover. The same ent- turns up in entwickeln in lesson 4." },
      ],
    },
    {
      id: "de-u34l2",
      unit: 34,
      lesson: 2,
      title: "Messen und beweisen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report what you measured, what it showed, what caused it, and whether it proves anything.",
      items: [
        { id: "de-u34l2-messen", type: "vocab", front: "messen", reading: "messen", meaning: "to measure", example: { jp: "Wir messen die Temperatur oft.", en: "We measure the temperature often." }, drill: { jp: "Wir messen die Temperatur hier", en: "We measure the temperature here" }, accept: ["to measure", "measure"], hint: "A strong verb: du misst, er misst, with the vowel shortened. das Maß, the measurement, comes from it." },
        { id: "de-u34l2-dasergebnis", type: "vocab", front: "das Ergebnis", reading: "dasergebnis", meaning: "result", example: { jp: "Das Ergebnis ist gut, obwohl der Versuch schwer ist.", en: "The result is good, although the trial is difficult." }, drill: { jp: "Das Ergebnis ist sehr gut", en: "The result is very good" }, accept: ["result", "outcome", "finding"], hint: "er-GEHP-nis, and the b hardens to p. Plural die Ergebnisse, with the s doubled." },
        { id: "de-u34l2-beweisen", type: "vocab", front: "beweisen", reading: "beweisen", meaning: "to prove", example: { jp: "Wir können nichts beweisen, weil wir zu wenig wissen.", en: "We cannot prove anything because we know too little." }, drill: { jp: "Wir können das nicht beweisen", en: "We cannot prove that" }, accept: ["to prove", "to demonstrate", "prove"], hint: "Inseparable be- plus weisen, to point. Nothing to do with weiß, white, or with wissen — despite how close they all look." },
        { id: "de-u34l2-genau", type: "vocab", front: "genau", reading: "genau", meaning: "exact / precisely", example: { jp: "Die Zahl ist genau richtig.", en: "The number is exactly right." }, drill: { jp: "Das Ergebnis ist sehr genau", en: "The result is very precise" }, accept: ["exact", "precise", "precisely", "exactly"], hint: "Adjective and adverb both. On its own, Genau! is the commonest way a German says exactly, that's right — you will hear it constantly." },
        { id: "de-u34l2-dieursache", type: "vocab", front: "die Ursache", reading: "dieursache", meaning: "cause", example: { jp: "Wir suchen die Ursache für das Problem.", en: "We are looking for the cause of the problem." }, drill: { jp: "Die Ursache ist das Wasser", en: "The cause is the water" }, accept: ["cause", "reason", "root cause"], hint: "The thing that produced the effect. u29's der Grund is the reason you GIVE; die Ursache is the cause that actually operated." },
        { id: "de-u34l2-derfortschritt", type: "vocab", front: "der Fortschritt", reading: "derfortschritt", meaning: "progress", example: { jp: "Der Fortschritt ist gut, aber er kostet viel Geld.", en: "Progress is good, but it costs a lot of money." }, drill: { jp: "Der Fortschritt kostet sehr viel", en: "Progress costs a great deal" }, accept: ["progress", "advance", "advancement"], hint: "fort, away forward, plus der Schritt, the step — a step forward. Countable in German: Fortschritte machen, to make progress." },
      ],
    },
    {
      id: "de-u34l3",
      unit: 34,
      lesson: 3,
      title: "Die Umwelt",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the environment as something to be looked after — energy, rubbish, air, climate.",
      items: [
        { id: "de-u34l3-dieumwelt", type: "vocab", front: "die Umwelt", reading: "dieumwelt", meaning: "the environment", example: { jp: "Die Umwelt ist krank, deshalb müssen wir etwas machen.", en: "The environment is sick, therefore we have to do something." }, drill: { jp: "Wir schützen die Umwelt hier", en: "We protect the environment here" }, accept: ["environment", "the environment"], hint: "um plus die Welt (u18) — the world around us. Umweltschutz, environmental protection, is one of the most-used compounds in German public life." },
        { id: "de-u34l3-dieenergie", type: "vocab", front: "die Energie", reading: "dieenergie", meaning: "energy", example: { jp: "Die Energie kommt jetzt von der Sonne.", en: "The energy now comes from the sun." }, drill: { jp: "Die Energie kostet sehr viel", en: "Energy costs a great deal" }, accept: ["energy", "power"], hint: "e-ner-GEE, stress at the end and a soft g. The Energiewende, the energy transition, is a word you will meet in every German news bulletin." },
        { id: "de-u34l3-derstrom", type: "vocab", front: "der Strom", reading: "derstrom", meaning: "electricity / current", example: { jp: "Der Strom kommt jetzt von der Sonne.", en: "The electricity now comes from the sun." }, drill: { jp: "Der Strom ist sehr teuer", en: "The electricity is very expensive" }, accept: ["electricity", "power", "current"], hint: "The everyday word for mains electricity, and also a river current — the same image of something flowing. die Energie is the physics; der Strom is what the bill is for." },
        { id: "de-u34l3-schuetzen", type: "vocab", front: "schützen", reading: "schutzen", meaning: "to protect", example: { jp: "Wir schützen die Luft, damit die Kinder gesund bleiben.", en: "We protect the air so that the children stay healthy." }, drill: { jp: "Wir schützen die Umwelt zusammen", en: "We protect the environment together" }, accept: ["to protect", "to safeguard", "protect"], hint: "schützen vor is to protect against something. der Schutz is the noun, and Umweltschutz glues it to this lesson's first card." },
        { id: "de-u34l3-dieluft", type: "vocab", front: "die Luft", reading: "dieluft", meaning: "air", example: { jp: "Die Luft in der Stadt ist schlecht.", en: "The air in the city is bad." }, drill: { jp: "Die Luft ist heute kalt", en: "The air is cold today" }, accept: ["air"], hint: "LOOFT. An der frischen Luft means outdoors, in the fresh air — the phrase every German parent uses about children." },
        { id: "de-u34l3-dasklima", type: "vocab", front: "das Klima", reading: "dasklima", meaning: "climate", example: { jp: "Das Klima ist hier sehr warm.", en: "The climate is very warm here." }, drill: { jp: "Das Klima ist sehr warm", en: "The climate is very warm" }, accept: ["climate"], hint: "KLEE-ma. Distinct from das Wetter (u8): the weather is today, the climate is the long pattern behind it." },
      ],
    },
    {
      id: "de-u34l4",
      unit: 34,
      lesson: 4,
      title: "Stoff und Kraft",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what things are made of and what moves them — material, force, the earth, temperature, gas.",
      items: [
        { id: "de-u34l4-derstoff", type: "vocab", front: "der Stoff", reading: "derstoff", meaning: "material / substance", example: { jp: "Der Stoff ist neu, deshalb kostet er viel.", en: "The material is new, therefore it costs a lot." }, drill: { jp: "Der Stoff ist sehr teuer", en: "The material is very expensive" }, accept: ["material", "substance", "fabric", "stuff"], hint: "Three jobs in one word: a chemical substance, cloth for clothes, and the subject matter of a lesson — der Stoff für die Prüfung." },
        { id: "de-u34l4-entwickeln", type: "vocab", front: "entwickeln", reading: "entwickeln", meaning: "to develop", example: { jp: "Wir entwickeln ein Gerät, das wenig Energie braucht.", en: "We are developing a device that needs little energy." }, drill: { jp: "Wir entwickeln ein Gerät", en: "We are developing a device" }, accept: ["to develop", "develop"], hint: "The same ent- as entdecken in lesson 1, here on wickeln, to wind — to unwind a thing into what it becomes." },
        { id: "de-u34l4-dieerde", type: "vocab", front: "die Erde", reading: "dieerde", meaning: "earth / the Earth", example: { jp: "Die Erde ist nicht sehr groß.", en: "The Earth is not very big." }, drill: { jp: "Die Erde ist sehr alt", en: "The Earth is very old" }, accept: ["earth", "the earth", "soil", "ground"], hint: "The planet, and also the soil in a garden. Capitalised it is still die Erde — German capitalises every noun, so that gives you no clue here." },
        { id: "de-u34l4-diekraft", type: "vocab", front: "die Kraft", reading: "diekraft", meaning: "force / strength", example: { jp: "Die Kraft von dem Wind ist groß.", en: "The force of the wind is great." }, drill: { jp: "Die Kraft ist sehr groß", en: "The force is very great" }, accept: ["force", "strength", "power"], hint: "Physical force and personal strength alike. Plural umlauts: die Kräfte. English kraft paper is borrowed from it — strong paper." },
        { id: "de-u34l4-dietemperatur", type: "vocab", front: "die Temperatur", reading: "dietemperatur", meaning: "temperature — how warm a thing is", example: { jp: "Die Temperatur ist heute sehr hoch.", en: "The temperature is very high today." }, drill: { jp: "Die Temperatur ist heute hoch", en: "The temperature is high today" }, accept: ["temperature"], hint: "tem-pe-ra-TOOR, stress right at the end. German measures it in Grad Celsius and nothing else." },
        { id: "de-u34l4-dasgas", type: "vocab", front: "das Gas", reading: "dasgas", meaning: "gas", example: { jp: "Das Gas kommt aus der Erde.", en: "The gas comes out of the earth." }, drill: { jp: "Das Gas kommt aus der Erde", en: "The gas comes out of the earth" }, accept: ["gas"], hint: "GAHS, with a long a and an s said like z. Never petrol — that is das Benzin, and the American sense does not transfer." },
      ],
    },
  ],
};
