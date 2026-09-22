// DE Unit 101 — Klima und Globalisierung (slot: environment-global) — B2
// Block 2 of German B2 (u101–u113). Conventions: see de/unit1.js (A1/A2) and
// de/unit51.js (B1 band constitution) — both still govern. What B2 adds is in
// de/unit106.js's header (grammar) and de/unit110.js's (register).
//
// RETITLED. The scaffold slot is "Environment and the global"; B1 already owns
// "Umwelt und Klima" (u65: der Klimawandel, die Erderwärmung, der Ausstoß,
// nachhaltig, erneuerbar, die Kohle, das Erdöl, recyceln, aussterben). This unit
// does NOT repeat that vocabulary: it takes the consequences (l1), the energy
// system (l2), the biology (l3) and the global frame (l4) — the B2 half of the
// theme, which is about scale and institutions rather than about rubbish bins.
// FREE: Informationen, Treibhausgase, Kraftwerken, Parteien, Gründen, Quellen, Solaranlage, Staaten, Firmen, Preise
export const DE_UNIT101 = {
  id: "de-u101",
  lang: "de",
  title: "Klima und Globalisierung",
  order: 101,
  stage: "b2",
  lessons: [
    {
      id: "de-u101l1",
      unit: 101,
      lesson: 1,
      title: "Wenn das Wetter zur Katastrophe wird",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name an extreme-weather event and its damage: a drought, a flood, high water, a natural disaster, the sea level, a glacier.",
      items: [
        { id: "de-u101l1-diedurre", type: "vocab", front: "die Dürre", reading: "diedurre", meaning: "the drought", example: { jp: "Weil es seit Monaten keinen Regen gab, leidet die ganze Stadt unter einer schweren Dürre.", en: "Because there has been no rain for months, the whole city is suffering from a severe drought." }, drill: { jp: "Die Dürre dauert seit Monaten", en: "The drought has lasted for months" }, accept: ["drought", "the drought", "the dry spell", "a long dry period"], hint: "dürr is dried-out. Not one hot day — months with no Regen." },
        { id: "de-u101l1-dieuberschwemmung", type: "vocab", front: "die Überschwemmung", reading: "dieuberschwemmung", meaning: "the flood", example: { jp: "Nach dem starken Regen gab es eine Überschwemmung, sodass die Leute ihre Häuser für eine Nacht nicht mehr erreichen konnten.", en: "After the heavy rain there was a flood, so people could no longer reach their houses for a night." }, drill: { jp: "Die Überschwemmung kam sehr schnell", en: "The flood came very quickly" }, accept: ["flood", "the flood", "the flooding", "the inundation"], hint: "schwemmen is to wash along; über- puts the water over everything." },
        { id: "de-u101l1-dashochwasser", type: "vocab", front: "das Hochwasser", reading: "dashochwasser", meaning: "the high water", example: { jp: "Das Hochwasser stieg die ganze Nacht weiter, obwohl der Regen schon nicht mehr so stark war.", en: "The high water kept rising all night, although the rain was no longer so heavy." }, drill: { jp: "Das Hochwasser steigt seit gestern", en: "The high water has been rising since yesterday" }, accept: ["high water", "the high water", "the high river level", "the flood water"], hint: "This is the LEVEL, not the event. Eine Überschwemmung is what happens when das Hochwasser leaves the Fluss." },
        { id: "de-u101l1-dienaturkatastrophe", type: "vocab", front: "die Naturkatastrophe", reading: "dienaturkatastrophe", meaning: "the natural disaster", example: { jp: "Nach einer Naturkatastrophe braucht die Bevölkerung sehr schnell Hilfe und klare Informationen.", en: "After a natural disaster the population needs help and clear information very quickly." }, drill: { jp: "Die Naturkatastrophe hat alles zerstört", en: "The natural disaster destroyed everything" }, accept: ["natural disaster", "the natural disaster", "the natural catastrophe"], hint: "die Katastrophe is a free cognate; the Natur- half says nobody caused it — no fire, no war, only das Wetter." },
        { id: "de-u101l1-dermeeresspiegel", type: "vocab", front: "der Meeresspiegel", reading: "dermeeresspiegel", meaning: "the sea level", example: { jp: "Der Meeresspiegel steigt weiter, weil die Erde durch den Klimawandel immer wärmer wird.", en: "The sea level keeps rising, because the Earth is getting ever warmer through climate change." }, drill: { jp: "Der Meeresspiegel steigt immer weiter", en: "The sea level keeps on rising" }, accept: ["sea level", "the sea level", "the level of the sea"], hint: "der Spiegel is a mirror and also a level: a flat surface you read a number off." },
        { id: "de-u101l1-dergletscher", type: "vocab", front: "der Gletscher", reading: "dergletscher", meaning: "the glacier", example: { jp: "Im Gebirge ist der Gletscher in dreißig Jahren deutlich kleiner geworden, und im Sommer schmilzt er sehr schnell.", en: "Up in the mountains the glacier has become noticeably smaller in thirty years, and in summer it melts very fast." }, drill: { jp: "Der Gletscher wird immer kleiner", en: "The glacier is getting smaller and smaller" }, accept: ["glacier", "the glacier", "the ice field"], hint: "GLET-scher, two syllables. Ice that moves, slowly, down a Berg." },
      ],
    },
    {
      id: "de-u101l2",
      unit: 101,
      lesson: 2,
      title: "Energie und Emissionen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss how a country makes its electricity: a greenhouse gas, an emission, a fuel, nuclear power, a solar installation, the energy transition.",
      items: [
        { id: "de-u101l2-dastreibhausgas", type: "vocab", front: "das Treibhausgas", reading: "dastreibhausgas", meaning: "the greenhouse gas", example: { jp: "Durch die Kohle in den Kraftwerken entstehen Treibhausgase, die das Klima der ganzen Erde beeinflussen.", en: "The coal in the power stations produces greenhouse gases that affect the climate of the whole Earth." }, drill: { jp: "Das Treibhausgas bleibt lange in der Luft", en: "The greenhouse gas stays in the air for a long time" }, accept: ["greenhouse gas", "the greenhouse gas"], hint: "das Treibhaus is a glass house for Pflanzen. The gas does the same thing to die Erde." },
        { id: "de-u101l2-dieemission", type: "vocab", front: "die Emission", reading: "dieemission", meaning: "the emission (measured)", example: { jp: "Die Regierung will, dass die Emissionen in wenigen Jahren deutlich sinken, aber die Wirtschaft fordert mehr Zeit.", en: "The government wants emissions to fall significantly within a few years, but industry is demanding more time." }, drill: { jp: "Die Emission muss deutlich sinken", en: "The emission has to fall significantly" }, accept: ["emission", "the emission", "the emissions", "the discharge"], hint: "A free cognate, but the stress is on the end: emi-SION. der Ausstoß (u65) is the everyday German word; die Emission is the one in the report." },
        { id: "de-u101l2-derbrennstoff", type: "vocab", front: "der Brennstoff", reading: "derbrennstoff", meaning: "the fuel", example: { jp: "Kohle und Erdöl sind Brennstoffe, und wer sie verbraucht, schadet dem Klima.", en: "Coal and crude oil are fuels, and whoever burns them harms the climate." }, drill: { jp: "Der Brennstoff kostet immer mehr", en: "The fuel costs more and more" }, accept: ["fuel", "the fuel", "the combustible", "the burning material"], hint: "brennen + der Stoff: stuff that burns. Petrol at the Tankstelle is der Kraftstoff." },
        { id: "de-u101l2-diekernkraft", type: "vocab", front: "die Kernkraft", reading: "diekernkraft", meaning: "nuclear power", example: { jp: "Über die Kernkraft diskutieren die Parteien schon sehr lange, weil es auf allen Seiten gute Gründe gibt.", en: "The parties have been arguing about nuclear power for a very long time, because there are good reasons on all sides." }, drill: { jp: "Die Kernkraft war lange sehr wichtig", en: "Nuclear power was very important for a long time" }, accept: ["nuclear power", "the nuclear power", "atomic power", "nuclear energy"], hint: "der Kern is the core of an apple and of an atom. Atomkraft is the everyday word; Kernkraft is the official one." },
        { id: "de-u101l2-diesolaranlage", type: "vocab", front: "die Solaranlage", reading: "diesolaranlage", meaning: "the solar installation", example: { jp: "Auf dem Dach steht seit einem Jahr eine Solaranlage, und die Schule braucht jetzt viel weniger Strom.", en: "A solar installation has stood on the roof for a year, and the school now needs far less electricity." }, drill: { jp: "Die Solaranlage liefert genug Strom", en: "The solar installation supplies enough electricity" }, accept: ["solar installation", "the solar installation", "the solar panels", "the solar array", "the solar system"], hint: "die Anlage (u72) is an installation of any kind. Solar- is free; the compound is the panels plus everything behind them." },
        { id: "de-u101l2-dieenergiewende", type: "vocab", front: "die Energiewende", reading: "dieenergiewende", meaning: "the energy transition", example: { jp: "Die Energiewende heißt, dass der Strom in Zukunft nur noch aus erneuerbaren Quellen kommt.", en: "The energy transition means that in future electricity will come only from renewable sources." }, drill: { jp: "Die Energiewende kostet sehr viel Geld", en: "The energy transition costs a great deal of money" }, accept: ["energy transition", "the energy transition", "the energy turnaround", "the switch to clean energy"], hint: "die Wende is a turn — the same word Germans use for 1989. Here it is a whole country turning away from Kohle." },
      ],
    },
    {
      id: "de-u101l3",
      unit: 101,
      lesson: 3,
      title: "Arten und Lebensräume",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what is being lost: species variety, a habitat, a population, wilderness, an ecosystem, and what it means to threaten one.",
      items: [
        { id: "de-u101l3-dieartenvielfalt", type: "vocab", front: "die Artenvielfalt", reading: "dieartenvielfalt", meaning: "the variety of species", example: { jp: "Die Artenvielfalt im Wald nimmt ab, weil immer mehr Pflanzen und Tiere aussterben.", en: "The variety of species in the forest is decreasing, because more and more plants and animals are dying out." }, drill: { jp: "Die Artenvielfalt nimmt weltweit ab", en: "Species variety is decreasing worldwide" }, accept: ["variety of species", "the variety of species", "biodiversity", "species diversity"], hint: "die Art (u58, 'the kind') + die Vielfalt. In a report you will also see die Biodiversität." },
        { id: "de-u101l3-derlebensraum", type: "vocab", front: "der Lebensraum", reading: "derlebensraum", meaning: "the habitat", example: { jp: "Wenn die Wiese zur Straße wird, geht der Lebensraum für viel mehr Tiere verloren, als man denkt.", en: "When the meadow becomes a road, the habitat is lost for far more animals than you would think." }, drill: { jp: "Der Lebensraum wird immer kleiner", en: "The habitat is getting smaller and smaller" }, accept: ["habitat", "the habitat", "the living space", "the range"], hint: "leben + der Raum: the room a Tier needs in order to live at all." },
        { id: "de-u101l3-derbestand", type: "vocab", front: "der Bestand", reading: "derbestand", meaning: "the stock (of a population)", example: { jp: "Der Bestand an Vögeln im Gebirge ist deutlich geringer als vor zwanzig Jahren.", en: "The stock of birds in the mountains is considerably smaller than twenty years ago." }, drill: { jp: "Der Bestand sinkt seit vielen Jahren", en: "The stock has been falling for many years" }, accept: ["stock", "the stock", "the population", "the holdings", "the inventory"], hint: "bestehen, to exist: what there still is of something. A shop uses the same word for its stock." },
        { id: "de-u101l3-diewildnis", type: "vocab", front: "die Wildnis", reading: "diewildnis", meaning: "the wilderness", example: { jp: "In Europa gibt es kaum noch echte Wildnis, weil der Mensch fast alle Landschaften braucht.", en: "In Europe there is hardly any real wilderness left, because people need almost every landscape." }, drill: { jp: "Die Wildnis ist in Europa selten", en: "Wilderness is rare in Europe" }, accept: ["wilderness", "the wilderness", "the wild", "untouched nature"], hint: "wild + the -nis ending that makes an abstract noun. Land where nobody has planned anything." },
        { id: "de-u101l3-dasokosystem", type: "vocab", front: "das Ökosystem", reading: "dasokosystem", meaning: "the ecosystem", example: { jp: "Ein Ökosystem hält nur dann, wenn alle Tiere und Pflanzen darin ihren Platz haben.", en: "An ecosystem only holds together when all the animals and plants in it have their place." }, drill: { jp: "Das Ökosystem reagiert sehr empfindlich", en: "The ecosystem reacts very sensitively" }, accept: ["ecosystem", "the ecosystem", "the ecological system"], hint: "Öko- from ökologisch. Spoken ÖKO-system, stress at the front." },
        { id: "de-u101l3-bedrohen", type: "vocab", front: "bedrohen", reading: "bedrohen", meaning: "to endanger", example: { jp: "Die Verschmutzung im Meer bedroht die Tiere dort stärker als das Wetter.", en: "Pollution in the sea endangers the animals there more than the weather does." }, drill: { jp: "Diese Stoffe bedrohen das Ökosystem", en: "These substances endanger the ecosystem" }, accept: ["to endanger", "endanger", "to threaten", "to put at risk", "to imperil"], hint: "be- + drohen, to threaten. bedroht (endangered) is the word on every list of Tiere." },
      ],
    },
    {
      id: "de-u101l4",
      unit: 101,
      lesson: 4,
      title: "Die globale Sicht",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Set a problem in a global frame: globalisation, worldwide, cross-border, an agreement, world trade, prosperity.",
      items: [
        { id: "de-u101l4-dieglobalisierung", type: "vocab", front: "die Globalisierung", reading: "dieglobalisierung", meaning: "globalisation", example: { jp: "Durch die Globalisierung hängen die Preise in einer kleinen Stadt davon ab, was auf der anderen Seite der Erde geschieht.", en: "Through globalisation, prices in a small town depend on what happens on the other side of the Earth." }, drill: { jp: "Die Globalisierung beeinflusst fast alles", en: "Globalisation affects almost everything" }, accept: ["globalisation", "globalization", "the globalisation", "the globalization"], hint: "Five syllables, stress on the SIE: globali-SIE-rung. The -ierung ending turns a foreign verb into a process." },
        { id: "de-u101l4-weltweit", type: "vocab", front: "weltweit", reading: "weltweit", meaning: "worldwide", example: { jp: "Die Zeitung schreibt, dass weltweit immer mehr Menschen in großen Städten wohnen und arbeiten.", en: "The newspaper writes that worldwide more and more people live and work in large cities." }, drill: { jp: "Der Ausstoß steigt weltweit weiter", en: "Emissions are still rising worldwide" }, accept: ["worldwide", "global", "globally", "all over the world"], hint: "die Welt + weit. Works as an adjective and as an adverb, with no ending change." },
        { id: "de-u101l4-grenzuberschreitend", type: "vocab", front: "grenzüberschreitend", reading: "grenzuberschreitend", meaning: "cross-border", example: { jp: "Die Verschmutzung der Luft ist grenzüberschreitend, deshalb hilft ein Gesetz in nur einem Staat wenig.", en: "Air pollution is cross-border, which is why a law in just one state helps little." }, drill: { jp: "Das Problem ist eindeutig grenzüberschreitend", en: "The problem is clearly cross-border" }, accept: ["cross-border", "transboundary", "across borders", "international"], hint: "die Grenze + überschreiten, to step over. Long, but every piece is a word you know." },
        { id: "de-u101l4-dasabkommen", type: "vocab", front: "das Abkommen", reading: "dasabkommen", meaning: "the accord", example: { jp: "In dem Abkommen haben sich über hundert Staaten auf ein gemeinsames Ziel geeinigt.", en: "In the accord more than a hundred states agreed on a shared goal." }, drill: { jp: "Das Abkommen gilt ab Januar", en: "The accord applies from January" }, accept: ["accord", "the accord", "the agreement", "the treaty", "the pact"], hint: "From abkommen, to come to terms. Between states — der Vertrag (u48) is what two people sign." },
        { id: "de-u101l4-derwelthandel", type: "vocab", front: "der Welthandel", reading: "derwelthandel", meaning: "world trade", example: { jp: "Der Welthandel wächst schneller als die Wirtschaft in den Staaten selbst, und das ändert die Politik.", en: "World trade is growing faster than the economy inside the states themselves, and that changes politics." }, drill: { jp: "Der Welthandel wächst seit Jahren", en: "World trade has been growing for years" }, accept: ["world trade", "the world trade", "global trade", "international trade"], hint: "der Handel is trade. Handeln also means to act — the same root, a merchant is someone who acts." },
        { id: "de-u101l4-derwohlstand", type: "vocab", front: "der Wohlstand", reading: "derwohlstand", meaning: "prosperity", example: { jp: "Der Wohlstand in einem Staat sagt wenig darüber, wie es den Menschen dort wirklich geht.", en: "Prosperity in a state says little about how people there are really doing." }, drill: { jp: "Der Wohlstand steigt nicht in allen Staaten", en: "Prosperity is not rising in all states" }, accept: ["prosperity", "the prosperity", "affluence", "wealth", "well-being"], hint: "wohl + der Stand: how well a society stands. Not one person's Reichtum but everyone's floor." },
      ],
    },
  ],
};
