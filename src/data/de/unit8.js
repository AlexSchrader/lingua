// DE Unit 8 — Farben und Wetter (slot: colors-weather) — A1
// Block 2 (u8–u14). Conventions are settled in de/unit1.js — read that header first.
// This unit owns the COLOURS outright (block 1 took none) and the WEATHER. Block 1
// left `es` taught at u5l3 precisely so this unit can say "Es regnet".
// Temperature words live here rather than in u10 "Beschreiben" because weather is
// unsayable without them: Es ist kalt IS the weather. u10 keeps the rest of the
// describing space (brightness, size, quality, character).
// Two ß fronts here — weiß and heiß — so both readings are HAND-WRITTEN with ss
// ("weiss", "heiss") per the unit1.js rule: NFD leaves ß standing and the contract
// rejects a reading containing it.
// heiß is NOT a relative of u3's heißen despite the shared look: different words,
// different origins, no shared meaning. Kept deliberately.
// ⚠️ DELIBERATE PAIRS, flagged so a lexeme sweep does not read them as an accident:
// lesson 3 teaches der Regen AND regnen, der Schnee AND schneien. That derivation is
// the lesson, not a duplicate — German weather is said with an impersonal es and a
// weather VERB (Es regnet), which no amount of knowing the noun would give a learner,
// while the nouns carry gender the verbs cannot teach. Both are needed and both are
// among the commonest words in the domain. The merge seat may overrule this; if it
// does, drop the nouns and keep the verbs, since Es regnet is the harder half.
export const DE_UNIT8 = {
  id: "de-u8",
  lang: "de",
  title: "Farben und Wetter",
  order: 8,
  stage: "a1",
  lessons: [
    {
      id: "de-u8l1",
      unit: 8,
      lesson: 1,
      title: "Die Grundfarben",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the colour of something you can point at: Die Tomate ist rot.",
      items: [
        { id: "de-u8l1-rot", type: "vocab", front: "rot", reading: "rot", meaning: "red", example: { jp: "Die Tomate ist rot.", en: "The tomato is red." }, accept: ["red"], hint: "Colour words go after ist and take no ending there: Die Tomate ist rot. Endings only appear before a noun, which is a later story." },
        { id: "de-u8l1-blau", type: "vocab", front: "blau", reading: "blau", meaning: "blue", example: { jp: "Das Auto ist blau.", en: "The car is blue." }, accept: ["blue"], hint: "au is one sound, like English \"ow\" in cow: BLOW. Same au as in Frau (u4)." },
        { id: "de-u8l1-gelb", type: "vocab", front: "gelb", reading: "gelb", meaning: "yellow", example: { jp: "Die Banane ist gelb.", en: "The banana is yellow." }, accept: ["yellow"], hint: "The b at the end is said like p: GELP. German hardens b, d and g at the end of a word." },
        { id: "de-u8l1-gruen", type: "vocab", front: "grün", reading: "grun", meaning: "green", example: { jp: "Der Apfel ist grün.", en: "The apple is green." }, accept: ["green"], hint: "ü is the tight-lipped u of Tür (u1): say \"ee\" with your lips rounded. You may type gruen or grün." },
        { id: "de-u8l1-schwarz", type: "vocab", front: "schwarz", reading: "schwarz", meaning: "black", example: { jp: "Der Kaffee ist schwarz.", en: "The coffee is black." }, accept: ["black"], hint: "sch is one sound, English \"sh\", and w is said as v: SHVARTS. Same sch as in Schule (u1)." },
        { id: "de-u8l1-weiss", type: "vocab", front: "weiß", reading: "weiss", meaning: "white", example: { jp: "Die Milch ist weiß.", en: "The milk is white." }, accept: ["white"], hint: "ß is a sharp s after a long vowel — VYSS. You may type weiß or weiss; both are accepted." },
      ],
    },
    {
      id: "de-u8l2",
      unit: 8,
      lesson: 2,
      title: "Mehr Farben",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the rest of the everyday colours, and ask about colour as a topic: Blau ist meine Farbe.",
      items: [
        { id: "de-u8l2-braun", type: "vocab", front: "braun", reading: "braun", meaning: "brown", example: { jp: "Das Brot ist braun.", en: "The bread is brown." }, accept: ["brown"], hint: "Almost the English word with the au of blau: BROWN. One of the easiest colours to remember." },
        { id: "de-u8l2-grau", type: "vocab", front: "grau", reading: "grau", meaning: "grey", example: { jp: "Der Tag ist grau.", en: "The day is grey." }, accept: ["grey", "gray"], hint: "Rhymes with blau and braun — the three au colours together. Both English spellings are accepted." },
        { id: "de-u8l2-rosa", type: "vocab", front: "rosa", reading: "rosa", meaning: "pink", example: { jp: "Das Haus ist rosa.", en: "The house is pink." }, accept: ["pink", "rose"], hint: "Never changes its form, whatever the noun — rosa is one of a small set of colours that take no endings at all." },
        { id: "de-u8l2-orange", type: "vocab", front: "orange", reading: "orange", meaning: "orange (colour)", example: { jp: "Der Saft ist orange.", en: "The juice is orange." }, accept: ["orange"], hint: "Said the French way, o-RAHNZH, not the English way. Like rosa, it usually takes no ending." },
        { id: "de-u8l2-diefarbe", type: "vocab", front: "die Farbe", reading: "diefarbe", meaning: "colour", example: { jp: "Blau ist meine Farbe.", en: "Blue is my colour." }, drill: { jp: "Die Farbe ist sehr schön", en: "The colour is very beautiful" }, accept: ["colour", "color", "the colour", "the color"], hint: "The noun behind all of them. Feminine, so meine and not mein — mein was taught at u4 and takes an e before a feminine noun." },
        { id: "de-u8l2-bunt", type: "vocab", front: "bunt", reading: "bunt", meaning: "colourful", example: { jp: "Der Markt ist bunt.", en: "The market is colourful." }, accept: ["colourful", "colorful", "multicoloured", "bright"], hint: "Many colours at once. It is the word for a market, a shirt or a crowd — never for one single bright colour." },
      ],
    },
    {
      id: "de-u8l3",
      unit: 8,
      lesson: 3,
      title: "Das Wetter",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what the sky is doing — sun, rain, fog, snow, a thunderstorm — and say it the subjectless German way the hints show: Es regnet.",
      items: [
        { id: "de-u8l3-daswetter", type: "vocab", front: "das Wetter", reading: "daswetter", meaning: "weather", example: { jp: "Das Wetter ist heute gut.", en: "The weather is good today." }, accept: ["weather", "the weather"], hint: "Wie ist das Wetter? is the whole question. German says the weather IS good, exactly as English does." },
        { id: "de-u8l3-diesonne", type: "vocab", front: "die Sonne", reading: "diesonne", meaning: "sun", example: { jp: "Die Sonne ist sehr warm.", en: "The sun is very warm." }, accept: ["sun", "the sun"], hint: "Feminine — die Sonne. Sonntag, the day in the next unit, is built straight out of it." },
        { id: "de-u8l3-derregen", type: "vocab", front: "der Regen", reading: "derregen", meaning: "rain", example: { jp: "Der Regen kommt.", en: "The rain is coming." }, accept: ["rain", "the rain"], hint: "German makes the verb straight from the noun and drops the e: der Regen → es regnet, it is raining. Weather verbs always take the empty subject es." },
        { id: "de-u8l3-dernebel", type: "vocab", front: "der Nebel", reading: "dernebel", meaning: "fog", example: { jp: "Heute ist der Nebel sehr grau.", en: "Today the fog is very grey." }, accept: ["fog", "the fog", "mist"], hint: "Neblig is the adjective: Es ist neblig. Common on German autumn mornings, and on every motorway warning sign." },
        { id: "de-u8l3-derschnee", type: "vocab", front: "der Schnee", reading: "derschnee", meaning: "snow", example: { jp: "Der Schnee ist weiß.", en: "The snow is white." }, accept: ["snow", "the snow"], hint: "Neblig is the adjective: Es ist neblig. Common on German autumn mornings and on every motorway warning sign." },
        { id: "de-u8l3-dasgewitter", type: "vocab", front: "das Gewitter", reading: "dasgewitter", meaning: "thunderstorm", example: { jp: "Das Gewitter kommt schnell.", en: "The thunderstorm is coming fast." }, accept: ["thunderstorm", "the thunderstorm", "storm"], hint: "Gewitter is thunder AND lightning together, not just a heavy shower — for that Germans say ein Schauer." },
      ],
    },
    {
      id: "de-u8l4",
      unit: 8,
      lesson: 4,
      title: "Warm und kalt",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how warm or cold something is, and describe the sky and the wind.",
      items: [
        { id: "de-u8l4-derwind", type: "vocab", front: "der Wind", reading: "derwind", meaning: "wind", example: { jp: "Der Wind ist kalt.", en: "The wind is cold." }, accept: ["wind", "the wind"], hint: "The w is a v: VINT, and the d at the end hardens to t — the same rule that makes gelb sound like GELP." },
        { id: "de-u8l4-diewolke", type: "vocab", front: "die Wolke", reading: "diewolke", meaning: "cloud", example: { jp: "Die Wolke ist grau.", en: "The cloud is grey." }, accept: ["cloud", "the cloud"], hint: "VOL-ke. Nothing to do with Volk — one letter apart and completely unrelated." },
        { id: "de-u8l4-kalt", type: "vocab", front: "kalt", reading: "kalt", meaning: "cold", example: { jp: "Das Wasser ist kalt.", en: "The water is cold." }, accept: ["cold"], hint: "Mir ist kalt is how German says I am cold — literally to-me is cold. That mir is dative and arrives at u14." },
        { id: "de-u8l4-warm", type: "vocab", front: "warm", reading: "warm", meaning: "warm", example: { jp: "Die Küche ist warm.", en: "The kitchen is warm." }, accept: ["warm"], hint: "The same word as English, said with a v: VARM." },
        { id: "de-u8l4-heiss", type: "vocab", front: "heiß", reading: "heiss", meaning: "hot", example: { jp: "Der Tee ist heiß.", en: "The tea is hot." }, accept: ["hot"], hint: "HYSS. It only looks like heißen (u3, to be called) — the two are unrelated words. Type heiß or heiss; both work." },
        { id: "de-u8l4-derhimmel", type: "vocab", front: "der Himmel", reading: "derhimmel", meaning: "sky", example: { jp: "Der Himmel ist blau.", en: "The sky is blue." }, accept: ["sky", "the sky", "heaven"], hint: "One word for both sky and heaven — German does not separate them the way English does." },
      ],
    },
  ],
};
