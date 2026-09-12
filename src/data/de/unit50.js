// DE Unit 50 — Wetter und Jahreszeiten (slot: vocabulary 11 (A2)) — A2
// Block 3 (u41–u50), coverage pass — the LAST unit of German A2. Conventions: see
// de/unit1.js.
//
// THEME: weather beyond the A1 basics. A1's "colours and weather" teaches Sonne,
// Regen, Schnee, Wind, warm/kalt; this unit takes the storm/sky/season vocabulary
// that was never carded (der Blitz, das Gewitter, der Frost, der Tau). Distinct
// from block 2's u34 "Wissenschaft und Umwelt" (ecology, not weather) — checked at
// FRONT and LEXEME level against A1 + all three A2 blocks. Fold: die Kälte→diekalte,
// stürmisch→sturmisch. Examples use only vocab introduced at or before u50.
export const DE_UNIT50 = {
  id: "de-u50",
  lang: "de",
  title: "Wetter und Jahreszeiten",
  order: 50,
  stage: "a2",
  lessons: [
    {
      id: "de-u50l1",
      unit: 50,
      lesson: 1,
      title: "Das Gewitter",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a storm: storm, thunder, lightning, thunderstorm, hail, a shower.",
      items: [
        { id: "de-u50l1-dersturm", type: "vocab", front: "der Sturm", reading: "dersturm", meaning: "the storm", example: { jp: "Der Sturm ist heute sehr stark.", en: "The storm is very strong today." }, drill: { jp: "Der Sturm kommt am Abend", en: "The storm comes in the evening" }, accept: ["storm", "the storm", "the gale"], hint: "A windstorm. Plural has an umlaut: die Stürme." },
        { id: "de-u50l1-derdonner", type: "vocab", front: "der Donner", reading: "derdonner", meaning: "the thunder", example: { jp: "Nach dem Blitz kommt der Donner.", en: "The thunder comes after the lightning." }, drill: { jp: "Der Donner ist laut", en: "The thunder is loud" }, accept: ["thunder", "the thunder"], hint: "The sound. Donnerstag (Thursday) is 'Thor's day', built on it." },
        { id: "de-u50l1-derblitz", type: "vocab", front: "der Blitz", reading: "derblitz", meaning: "the lightning", example: { jp: "Der Blitz war sehr hell.", en: "The lightning was very bright." }, drill: { jp: "Der Blitz ist gefährlich", en: "The lightning is dangerous" }, accept: ["lightning", "the lightning", "the flash"], hint: "A bolt of lightning, and a camera flash. blitzschnell = lightning-fast." },
        { id: "de-u50l1-dasgewitter", type: "vocab", front: "das Gewitter", reading: "dasgewitter", meaning: "the thunderstorm", example: { jp: "Am Abend gibt es ein Gewitter.", en: "There is a thunderstorm in the evening." }, drill: { jp: "Das Gewitter kommt näher", en: "The thunderstorm is coming closer" }, accept: ["thunderstorm", "the thunderstorm", "the storm"], hint: "Thunder and lightning together. From das Wetter, the weather." },
        { id: "de-u50l1-derhagel", type: "vocab", front: "der Hagel", reading: "derhagel", meaning: "the hail", example: { jp: "Der Hagel macht das Auto kaputt.", en: "The hail damages the car." }, drill: { jp: "Der Hagel fällt laut", en: "The hail falls loudly" }, accept: ["hail", "the hail"], hint: "Ice falling from the sky. The verb is hageln: es hagelt." },
        { id: "de-u50l1-derschauer", type: "vocab", front: "der Schauer", reading: "derschauer", meaning: "the shower", example: { jp: "Am Nachmittag kommt ein kurzer Schauer.", en: "A short shower comes in the afternoon." }, drill: { jp: "Der Schauer ist vorbei", en: "The shower is over" }, accept: ["shower", "the shower", "the rain shower"], hint: "A brief burst of rain. Not a bathroom shower (that's die Dusche)." },
      ],
    },
    {
      id: "de-u50l2",
      unit: 50,
      lesson: 2,
      title: "Kälte und Hitze",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about cold and heat: frost, the cold, the heat, freeze, melt, the thaw.",
      items: [
        { id: "de-u50l2-derfrost", type: "vocab", front: "der Frost", reading: "derfrost", meaning: "the frost", example: { jp: "In der Nacht gibt es Frost.", en: "There is frost during the night." }, drill: { jp: "Der Frost ist stark", en: "The frost is hard" }, accept: ["frost", "the frost"], hint: "Freezing weather. Related to frieren and English 'frost'." },
        { id: "de-u50l2-diekalte", type: "vocab", front: "die Kälte", reading: "diekalte", meaning: "the cold", example: { jp: "Die Kälte im Winter ist hart.", en: "The cold in winter is harsh." }, drill: { jp: "Ich mag die Kälte nicht", en: "I don't like the cold" }, accept: ["the cold", "the coldness", "the chill"], hint: "The noun from kalt. The opposite is die Wärme / die Hitze." },
        { id: "de-u50l2-diehitze", type: "vocab", front: "die Hitze", reading: "diehitze", meaning: "the heat", example: { jp: "Die Hitze im Sommer ist groß.", en: "The heat in summer is great." }, drill: { jp: "Die Hitze ist schlimm", en: "The heat is dreadful" }, accept: ["the heat"], hint: "The noun from heiß. Stronger than die Wärme (warmth)." },
        { id: "de-u50l2-frieren", type: "vocab", front: "frieren", reading: "frieren", meaning: "to freeze", example: { jp: "Im Winter friere ich oft.", en: "In winter I am often cold." }, drill: { jp: "Wir frieren sehr", en: "We are very cold" }, accept: ["to freeze", "to be cold"], hint: "Mostly of a person being cold: ich friere. Water freezing is gefrieren." },
        { id: "de-u50l2-schmelzen", type: "vocab", front: "schmelzen", reading: "schmelzen", meaning: "to melt", example: { jp: "Der Schnee schmilzt in der Sonne.", en: "The snow melts in the sun." }, drill: { jp: "Der Schnee und das Eis schmelzen", en: "The snow and the ice melt" }, accept: ["to melt", "to thaw"], hint: "Stem change: es schmilzt. Ice, snow, chocolate, metal." },
        { id: "de-u50l2-dastauwetter", type: "vocab", front: "das Tauwetter", reading: "dastauwetter", meaning: "the thaw", example: { jp: "Im Frühling kommt das Tauwetter.", en: "The thaw comes in spring." }, drill: { jp: "Das Tauwetter beginnt", en: "The thaw is beginning" }, accept: ["thaw", "the thaw"], hint: "der Tau (dew) sense aside, here it is the warm spell that melts snow." },
      ],
    },
    {
      id: "de-u50l3",
      unit: 50,
      lesson: 3,
      title: "Wie ist der Himmel?",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the sky: cloudy, foggy, sunny, overcast, stormy, mild.",
      items: [
        { id: "de-u50l3-wolkig", type: "vocab", front: "wolkig", reading: "wolkig", meaning: "cloudy", example: { jp: "Heute ist es wolkig und grau.", en: "Today it is cloudy and grey." }, drill: { jp: "Es ist heute wolkig", en: "It is cloudy today" }, accept: ["cloudy"], hint: "From die Wolke, the cloud. bewölkt (next but one) is a heavier overcast." },
        { id: "de-u50l3-neblig", type: "vocab", front: "neblig", reading: "neblig", meaning: "foggy", example: { jp: "Am Morgen ist es oft neblig.", en: "In the morning it is often foggy." }, drill: { jp: "Es ist sehr neblig", en: "It is very foggy" }, accept: ["foggy", "misty"], hint: "From der Nebel, the fog." },
        { id: "de-u50l3-sonnig", type: "vocab", front: "sonnig", reading: "sonnig", meaning: "sunny", example: { jp: "Morgen wird es sonnig und warm.", en: "Tomorrow it will be sunny and warm." }, drill: { jp: "Der Tag ist sonnig", en: "The day is sunny" }, accept: ["sunny"], hint: "From die Sonne, the sun." },
        { id: "de-u50l3-bewolkt", type: "vocab", front: "bewölkt", reading: "bewolkt", meaning: "overcast", example: { jp: "Es ist heute stark bewölkt.", en: "It is heavily overcast today." }, drill: { jp: "Der Himmel ist bewölkt", en: "The sky is overcast" }, accept: ["overcast", "cloudy"], hint: "The sky fully covered in cloud — heavier than wolkig." },
        { id: "de-u50l3-sturmisch", type: "vocab", front: "stürmisch", reading: "sturmisch", meaning: "stormy", example: { jp: "Das Wetter am Meer ist oft stürmisch.", en: "The weather by the sea is often stormy." }, drill: { jp: "Es ist heute stürmisch", en: "It is stormy today" }, accept: ["stormy", "wild"], hint: "From der Sturm. Also of applause or a welcome: enthusiastic." },
        { id: "de-u50l3-mild", type: "vocab", front: "mild", reading: "mild", meaning: "mild", example: { jp: "Der Winter ist dieses Jahr mild.", en: "The winter is mild this year." }, drill: { jp: "Das Wetter ist mild", en: "The weather is mild" }, accept: ["mild", "gentle"], hint: "Of weather, and of taste: milder Käse, mild cheese." },
      ],
    },
    {
      id: "de-u50l4",
      unit: 50,
      lesson: 4,
      title: "Sonne und Jahreszeiten",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Round it off: the shade, the sunshine, the rainbow, the degree, the dew, the season.",
      items: [
        { id: "de-u50l4-derschatten", type: "vocab", front: "der Schatten", reading: "derschatten", meaning: "the shade", example: { jp: "Im Sommer sitze ich gern im Schatten.", en: "In summer I like to sit in the shade." }, drill: { jp: "Der Schatten ist groß", en: "The shade is big" }, accept: ["shade", "the shade", "the shadow"], hint: "Both shade and a shadow. Plural is the same: die Schatten." },
        { id: "de-u50l4-dersonnenschein", type: "vocab", front: "der Sonnenschein", reading: "dersonnenschein", meaning: "the sunshine", example: { jp: "Nach dem Regen kommt der Sonnenschein.", en: "After the rain comes the sunshine." }, drill: { jp: "Der Sonnenschein ist schön", en: "The sunshine is lovely" }, accept: ["sunshine", "the sunshine"], hint: "die Sonne + der Schein (shine). Also an affectionate name for a cheerful person." },
        { id: "de-u50l4-derregenbogen", type: "vocab", front: "der Regenbogen", reading: "derregenbogen", meaning: "the rainbow", example: { jp: "Nach dem Regen sehe ich einen Regenbogen.", en: "After the rain I see a rainbow." }, drill: { jp: "Der Regenbogen ist bunt", en: "The rainbow is colourful" }, accept: ["rainbow", "the rainbow"], hint: "der Regen (rain) + der Bogen (arc, bow)." },
        { id: "de-u50l4-dergrad", type: "vocab", front: "der Grad", reading: "dergrad", meaning: "the degree", example: { jp: "Heute sind es zwanzig Grad.", en: "It is twenty degrees today." }, drill: { jp: "Der Grad ist wichtig", en: "The degree is important" }, accept: ["degree", "the degree"], hint: "Degrees of temperature, and of an angle. Stays singular after a number: 20 Grad." },
        { id: "de-u50l4-dertau", type: "vocab", front: "der Tau", reading: "dertau", meaning: "the dew", example: { jp: "Am Morgen liegt Tau auf den Blumen.", en: "In the morning there is dew on the flowers." }, drill: { jp: "Der Tau ist kalt", en: "The dew is cold" }, accept: ["dew", "the dew"], hint: "The water that forms overnight. Not to be confused with das Tau, a ship's rope." },
        { id: "de-u50l4-diejahreszeit", type: "vocab", front: "die Jahreszeit", reading: "diejahreszeit", meaning: "the season", example: { jp: "Der Herbst ist meine liebste Jahreszeit.", en: "Autumn is my favourite season." }, drill: { jp: "Die Jahreszeit ist schön", en: "The season is beautiful" }, accept: ["season", "the season"], hint: "das Jahr (year) + die Zeit (time). The four: Frühling, Sommer, Herbst, Winter." },
      ],
    },
  ],
};
