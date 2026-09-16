// DE Unit 65 — Umwelt und Klima (slot: environment) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// THEME and RETHEME. The scaffold slot is "Environment and place". German already
// has the PLACE half twice over — A1's u7 "Die Stadt", A2's u26 "Natur und Tiere"
// and u50 "Wetter und Jahreszeiten" — and A2's u34 "Wissenschaft und Umwelt"
// already carded die Umwelt, das Klima, der Muell, die Energie, der Strom, das Gas,
// der Boden and schuetzen. So the slot is rethemed to CLIMATE AND CONSUMPTION, the
// half none of them reach: what warming is called, what is thrown away, where the
// power comes from. The place words that are left (die Landschaft, das Gebirge,
// die Kueste, die Wiese) sit in l4 so the slot still honours its name.
// Per CLAUDE.md "No front language", retitling and rethemeing a scaffold slot is
// ordinary authoring, not an escalation.
// FREE: Anna, Thomas, Berlin, Hamburg, Deutschland, Europa, Tiere, Jahre, Kinder, Häuser
export const DE_UNIT65 = {
  id: "de-u65",
  lang: "de",
  title: "Umwelt und Klima",
  order: 65,
  stage: "b1",
  lessons: [
    {
      id: "de-u65l1",
      unit: 65,
      lesson: 1,
      title: "Der Klimawandel",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what is happening to the climate: climate change, global warming, emissions, to use up, thrifty, sustainable.",
      items: [
        { id: "de-u65l1-derklimawandel", type: "vocab", front: "der Klimawandel", reading: "derklimawandel", meaning: "climate change", example: { jp: "Der Klimawandel ist in Europa schon am Wetter zu sehen.", en: "Climate change can already be seen in Europe in the weather." }, drill: { jp: "Der Klimawandel ist ein großes Problem", en: "Climate change is a big problem" }, accept: ["climate change", "the climate change"], hint: "das Klima (u34) + der Wandel, a change. The gender comes from Wandel." },
        { id: "de-u65l1-dieerderwarmung", type: "vocab", front: "die Erderwärmung", reading: "dieerderwarmung", meaning: "global warming", example: { jp: "Wegen der Erderwärmung ist das Wasser im Meer immer wärmer.", en: "Because of global warming the water in the sea is warmer and warmer." }, drill: { jp: "Die Erderwärmung macht das Meer wärmer", en: "Global warming makes the sea warmer" }, accept: ["global warming", "the global warming"], hint: "die Erde + Erwärmung, from warm. Say the two w's clearly: ER-de-er-WÄR-mung." },
        { id: "de-u65l1-derausstoss", type: "vocab", front: "der Ausstoß", reading: "derausstoss", meaning: "the emissions", example: { jp: "Der Ausstoß von Gas ist in der Stadt viel stärker als auf dem Berg.", en: "Gas emissions are much stronger in the city than up the mountain." }, drill: { jp: "Der Ausstoß von Gas steigt", en: "Gas emissions are rising" }, accept: ["emissions", "the emissions", "the output", "the discharge"], hint: "aus + stoßen, to push out. ß here, so the reading is written with ss." },
        { id: "de-u65l1-verbrauchen", type: "vocab", front: "verbrauchen", reading: "verbrauchen", meaning: "to use up", example: { jp: "Das alte Haus verbraucht im Winter sehr viel Energie.", en: "The old house uses up a great deal of energy in winter." }, drill: { jp: "Wir verbrauchen zu viel Strom", en: "We use up too much electricity" }, accept: ["to use up", "to consume", "to use"], hint: "brauchen is to need; ver- makes it 'use until it is gone'." },
        { id: "de-u65l1-sparsam", type: "vocab", front: "sparsam", reading: "sparsam", meaning: "thrifty", example: { jp: "Meine Großmutter war immer sehr sparsam mit Wasser und Strom.", en: "My grandmother was always very sparing with water and electricity." }, drill: { jp: "Wir sind sehr sparsam mit Wasser", en: "We are very sparing with water" }, accept: ["thrifty", "sparing", "economical", "frugal"], hint: "From sparen (u27). Of a person or of a machine: ein sparsames Auto." },
        { id: "de-u65l1-nachhaltig", type: "vocab", front: "nachhaltig", reading: "nachhaltig", meaning: "sustainable", example: { jp: "Die Firma will nachhaltig arbeiten und weniger Gas verbrauchen.", en: "The company wants to work sustainably and use up less gas." }, drill: { jp: "Das Hotel arbeitet sehr nachhaltig", en: "The hotel works very sustainably" }, accept: ["sustainable", "sustainably", "lasting"], hint: "The word was born in German forestry: cut only what grows back." },
      ],
    },
    {
      id: "de-u65l2",
      unit: 65,
      lesson: 2,
      title: "Abfall und Wiederverwertung",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deal with rubbish properly: waste, a bin, to separate, to recycle, to throw away, pollution.",
      items: [
        { id: "de-u65l2-derabfall", type: "vocab", front: "der Abfall", reading: "derabfall", meaning: "the waste", example: { jp: "Der Abfall aus der Küche kommt in die grüne Tonne.", en: "The waste from the kitchen goes in the green bin." }, drill: { jp: "Der Abfall liegt neben der Tür", en: "The waste is lying next to the door" }, accept: ["waste", "the waste", "rubbish", "the rubbish", "garbage"], hint: "ab + fallen: what falls off. der Müll (u34) is the everyday word; Abfall is the official one." },
        { id: "de-u65l2-dietonne", type: "vocab", front: "die Tonne", reading: "dietonne", meaning: "the bin", example: { jp: "Vor dem Haus in der Straße steht eine große Tonne.", en: "There is a big bin in front of the house on the street." }, drill: { jp: "Die Tonne steht vor dem Haus", en: "The bin is standing in front of the house" }, accept: ["bin", "the bin", "the barrel", "the tonne"], hint: "Also the weight: eine Tonne, a metric ton. Same word, both senses." },
        { id: "de-u65l2-trennen", type: "vocab", front: "trennen", reading: "trennen", meaning: "to separate", example: { jp: "In Deutschland trennen die Familien den Müll zu Hause.", en: "In Germany families separate their rubbish at home." }, drill: { jp: "Wir trennen den Müll zu Hause", en: "We separate the rubbish at home" }, accept: ["to separate", "to sort", "to divide"], hint: "Müll trennen is the everyday use. With sich it means to split up." },
        { id: "de-u65l2-recyceln", type: "vocab", front: "recyceln", reading: "recyceln", meaning: "to recycle", example: { jp: "Glas kann man fast ohne Ende recyceln.", en: "Glass can be recycled almost endlessly." }, drill: { jp: "Wir wollen das alte Glas recyceln", en: "We want to recycle the old glass" }, accept: ["to recycle"], hint: "An English word with a German ending: ri-SEI-keln. Also: die Wiederverwertung." },
        { id: "de-u65l2-wegwerfen", type: "vocab", front: "wegwerfen", reading: "wegwerfen", meaning: "to throw away", example: { jp: "Das Brot ist noch gut, wir werfen es nicht weg.", en: "The bread is still good, we are not throwing it away." }, drill: { jp: "Wir wollen nichts wegwerfen", en: "We do not want to throw anything away" }, accept: ["to throw away", "to throw out", "to discard"], hint: "Separable, and strong: er wirft es weg." },
        { id: "de-u65l2-dieverschmutzung", type: "vocab", front: "die Verschmutzung", reading: "dieverschmutzung", meaning: "the pollution", example: { jp: "Die Verschmutzung in der Luft ist in großen Städten sehr stark.", en: "Air pollution is very strong in big cities." }, drill: { jp: "Die Verschmutzung im Fluss wächst", en: "The pollution in the river is growing" }, accept: ["pollution", "the pollution", "the contamination", "the dirtying"], hint: "From schmutzig (u30). Of air, water or soil." },
      ],
    },
    {
      id: "de-u65l3",
      unit: 65,
      lesson: 3,
      title: "Energie und Ressourcen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where power comes from: a power station, coal, renewable, a resource, a wind turbine, crude oil.",
      items: [
        { id: "de-u65l3-daskraftwerk", type: "vocab", front: "das Kraftwerk", reading: "daskraftwerk", meaning: "the power station", example: { jp: "Das alte Kraftwerk am Fluss macht keinen Strom mehr.", en: "The old power station by the river no longer makes electricity." }, drill: { jp: "Das Kraftwerk steht am Fluss", en: "The power station stands by the river" }, accept: ["power station", "the power station", "power plant", "the power plant"], hint: "die Kraft (u45) + das Werk, a works. Gender from Werk: das Kraftwerk." },
        { id: "de-u65l3-diekohle", type: "vocab", front: "die Kohle", reading: "diekohle", meaning: "the coal", example: { jp: "Im alten Haus kommt die Wärme noch aus Kohle.", en: "In the old house the warmth still comes from coal." }, drill: { jp: "Die Kohle kommt aus der Erde", en: "Coal comes out of the ground" }, accept: ["coal", "the coal"], hint: "Colloquially also money: Kohle haben = to be loaded." },
        { id: "de-u65l3-erneuerbar", type: "vocab", front: "erneuerbar", reading: "erneuerbar", meaning: "renewable", example: { jp: "Wind und Sonne sind erneuerbar, Kohle und Erdöl sind es nicht.", en: "Wind and sun are renewable, coal and crude oil are not." }, drill: { jp: "Der Wind ist erneuerbar und sauber", en: "Wind is renewable and clean" }, accept: ["renewable"], hint: "From neu: able to be made new again. erneuerbare Energien is the fixed phrase." },
        { id: "de-u65l3-dieressource", type: "vocab", front: "die Ressource", reading: "dieressource", meaning: "the resource", example: { jp: "Sauberes Wasser ist eine Ressource, die nicht ohne Ende bleibt.", en: "Clean water is a resource that does not last without end." }, drill: { jp: "Die Ressource Wasser ist sehr wichtig", en: "The resource water is very important" }, accept: ["resource", "the resource"], hint: "French spelling, double s: re-SUR-se. Usually used in the plural: Ressourcen." },
        { id: "de-u65l3-daswindrad", type: "vocab", front: "das Windrad", reading: "daswindrad", meaning: "the wind turbine", example: { jp: "Hinter der Stadt stehen jetzt vier große Windräder.", en: "There are four big wind turbines behind the city now." }, drill: { jp: "Das Windrad steht auf dem Berg", en: "The wind turbine stands on the mountain" }, accept: ["wind turbine", "the wind turbine", "windmill", "the wind wheel"], hint: "der Wind + das Rad (u19, wheel). Plural with umlaut: die Windräder." },
        { id: "de-u65l3-daserdol", type: "vocab", front: "das Erdöl", reading: "daserdol", meaning: "the crude oil", example: { jp: "Ohne Erdöl wäre es schwer, ein altes Auto zu fahren.", en: "Without crude oil it would be hard to drive an old car." }, drill: { jp: "Das Erdöl kommt aus dem Meer", en: "Crude oil comes out of the sea" }, accept: ["crude oil", "the crude oil", "petroleum", "oil"], hint: "die Erde + das Öl (u41). Cooking oil is just Öl; the ground kind is Erdöl." },
      ],
    },
    {
      id: "de-u65l4",
      unit: 65,
      lesson: 4,
      title: "Landschaft und Arten",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe the land and what lives on it: landscape, mountains, coast, meadow, a species, to die out.",
      items: [
        { id: "de-u65l4-dielandschaft", type: "vocab", front: "die Landschaft", reading: "dielandschaft", meaning: "the landscape", example: { jp: "Die Landschaft am Fluss ist flach und sehr grün.", en: "The landscape by the river is flat and very green." }, drill: { jp: "Die Landschaft am Meer ist schön", en: "The landscape by the sea is beautiful" }, accept: ["landscape", "the landscape", "the scenery", "the countryside"], hint: "Land + schaft, the ending that makes a collective: die Freundschaft, die Wirtschaft." },
        { id: "de-u65l4-dasgebirge", type: "vocab", front: "das Gebirge", reading: "dasgebirge", meaning: "the mountains", example: { jp: "Im Gebirge ist die Luft im Sommer noch kalt.", en: "Up in the mountains the air is still cold in summer." }, drill: { jp: "Das Gebirge ist sehr hoch", en: "The mountain range is very high" }, accept: ["mountains", "the mountains", "the mountain range", "the massif"], hint: "der Berg is one mountain; das Gebirge is the whole range. Ge- + noun often collects." },
        { id: "de-u65l4-diekuste", type: "vocab", front: "die Küste", reading: "diekuste", meaning: "the coast", example: { jp: "An der Küste ist der Wind auch im Sommer sehr stark.", en: "On the coast the wind is very strong even in summer." }, drill: { jp: "Die Küste ist hier sehr schön", en: "The coast is very beautiful here" }, accept: ["coast", "the coast", "the shore", "the coastline"], hint: "an der Küste = on the coast. der Strand (u23) is the sand you stand on." },
        { id: "de-u65l4-diewiese", type: "vocab", front: "die Wiese", reading: "diewiese", meaning: "the meadow", example: { jp: "Auf der Wiese hinter dem Haus stehen zwei alte Bäume.", en: "There are two old trees in the meadow behind the house." }, drill: { jp: "Die Wiese hinter dem Haus ist grün", en: "The meadow behind the house is green" }, accept: ["meadow", "the meadow", "the field", "the grass"], hint: "Grass for animals or for lying on. das Feld (u26) is grown for food." },
        { id: "de-u65l4-dieart", type: "vocab", front: "die Art", reading: "dieart", meaning: "the species", example: { jp: "Im Wald bei uns gibt es eine Art, die es sonst fast nicht gibt.", en: "In the forest near us there is a species that hardly exists anywhere else." }, drill: { jp: "Die Art gibt es hier im Wald", en: "The species exists here in the forest" }, accept: ["species", "the species", "kind", "the kind", "sort", "the type"], hint: "Everyday it means 'kind': eine Art Brot. In biology it is a species." },
        { id: "de-u65l4-aussterben", type: "vocab", front: "aussterben", reading: "aussterben", meaning: "to die out", example: { jp: "Ohne den Wald können viele Tiere in wenigen Jahren aussterben.", en: "Without the forest many animals can die out within a few years." }, drill: { jp: "Viele Arten können hier aussterben", en: "Many species can die out here" }, accept: ["to die out", "to become extinct", "to go extinct"], hint: "Separable and strong: die Art stirbt aus. Perfect with sein: sie ist ausgestorben." },
      ],
    },
  ],
};
