// NO Unit 83 — Friluftsliv (slot: coverage-b1-10) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 10 (B1)".
//
// u19 "Fritid og friluftsliv" is named for this and teaches en tur, å fiske, en
// ski, et telt (u20), ei hytte (u20), et kart (u20) — the nouns. u45 teaches the
// landscape. What no unit teaches is the practice: en sti, en ryggsekk, ei
// matpakke, et bål, å telte, ei turhytte, et føre, et snøskred — and
// `allemannsretten`, the legal right to walk and sleep on anyone's uncultivated
// land, which is the single idea Norwegian outdoor life is built on and which no
// English-speaking learner arrives already holding.
//
// ⚠ `allemannsretten` is taught in the DEFINITE form, against the usual rule that
// a front is indefinite. It is a named legal concept and is never said any other
// way — the same licence `bompenger` and `dagpenger` get as plural-only nouns
// (unit1.js rule 1a). Documented rather than silently done.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT83 = {
  id: "no-u83",
  lang: "no",
  title: "Friluftsliv",
  order: 83,
  stage: "b1",
  lessons: [
    {
      id: "no-u83l1",
      unit: 83,
      lesson: 1,
      title: "På tur",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Pack for a walk and describe the route — the path, the pack, the packed lunch and the summit.",
      items: [
        { id: "no-u83l1-ensti", type: "vocab", front: "en sti", reading: "ensti", meaning: "path", example: { jp: "Stien går langs vannet og oppover mot toppen.", en: "The path runs along the water and up towards the summit." }, accept: ["a trail", "a track"], drill: { jp: "Det går en sti langs vannet", en: "A path runs along the water" }, hint: "en sti → stien, flertall stier. Smalere enn en vei (u20) — bare til fots. Ikke det samme som en stige (u82)." },
        { id: "no-u83l1-enryggsekk", type: "vocab", front: "en ryggsekk", reading: "enryggsekk", meaning: "rucksack", example: { jp: "Ryggsekken min er altfor tung til en hel dag.", en: "My rucksack is far too heavy for a whole day." }, accept: ["a backpack", "a rucksack"], drill: { jp: "Han har en ryggsekk og et kart", en: "He has a rucksack and a map" }, hint: "en ryggsekk → ryggsekken. Rygg + en sekk (u18). Kalles ofte bare sekken." },
        { id: "no-u83l1-eimatpakke", type: "vocab", front: "ei matpakke", reading: "eimatpakke", meaning: "packed lunch", example: { jp: "Alle har med ei matpakke, også de som er på jobb.", en: "Everybody brings a packed lunch, the ones at work too." }, accept: ["a lunch pack", "sandwiches"], drill: { jp: "Alle har med ei matpakke", en: "Everybody brings a packed lunch" }, hint: "ei matpakke → matpakka. Brødskiver i papir — en norsk institusjon, ikke bare et måltid." },
        { id: "no-u83l1-etkompass", type: "vocab", front: "et kompass", reading: "etkompass", meaning: "compass", example: { jp: "Ta med et kompass i tillegg til kartet.", en: "Bring a compass in addition to the map." }, accept: ["a magnetic compass"], drill: { jp: "Ta med et kompass i sekken", en: "Bring a compass in the pack" }, hint: "et kompass → kompasset, flertall kompass. Kart (u20) og kompass er det faste paret." },
        { id: "no-u83l1-enfjelltopp", type: "vocab", front: "en fjelltopp", reading: "enfjelltopp", meaning: "mountain peak", example: { jp: "Vi så tre fjelltopper som fremdeles hadde snø.", en: "We saw three mountain peaks that still had snow." }, accept: ["a summit", "a mountain top"], drill: { jp: "Vi så en fjelltopp med snø", en: "We saw a mountain peak with snow" }, hint: "en fjelltopp → fjelltoppen, flertall fjelltopper. Et fjell (u19) + en topp (u45); sammensetningen arver kjønnet til siste ledd, derfor hankjønn." },
        { id: "no-u83l1-eifrukt", type: "vocab", front: "ei frukt", reading: "eifrukt", meaning: "fruit", example: { jp: "Ta med ei frukt i tillegg til matpakka.", en: "Bring a piece of fruit in addition to the packed lunch." }, accept: ["a piece of fruit"], drill: { jp: "Ta med ei frukt i sekken", en: "Bring a piece of fruit in the pack" }, hint: "ei frukt → frukta, flertall frukter. Både ett stykke og hele kategorien: jeg liker frukt." },
      ],
    },
    {
      id: "no-u83l2",
      unit: 83,
      lesson: 2,
      title: "Å overnatte ute",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Spend a night outdoors — pitch a tent, light a fire, or reach a mountain hut.",
      items: [
        { id: "no-u83l2-atelte", type: "vocab", front: "å telte", reading: "atelte", meaning: "to camp (in a tent)", example: { jp: "Vi teltet ved vannet i to netter uten å se folk.", en: "We camped by the water for two nights without seeing anybody." }, accept: ["to tent", "to camp"], drill: { jp: "Det er fint å telte her", en: "It is nice to camp here" }, hint: "å telte → telter, teltet. Fra et telt (u20). Å campe brukes om bobil og campingplass." },
        { id: "no-u83l2-ensovepose", type: "vocab", front: "en sovepose", reading: "ensovepose", meaning: "sleeping bag", example: { jp: "Soveposen min er ikke varm nok til fjellet om høsten.", en: "My sleeping bag isn't warm enough for the mountains in autumn." }, accept: ["a sleep sack"], drill: { jp: "Ta med en sovepose og et telt", en: "Bring a sleeping bag and a tent" }, hint: "en sovepose → soveposen. Å sove (u11) + en pose (u47). Et liggeunderlag går under." },
        { id: "no-u83l2-etbal", type: "vocab", front: "et bål", reading: "etbal", meaning: "campfire", example: { jp: "Vi satt rundt bålet til det ble helt mørkt.", en: "We sat around the fire until it got completely dark." }, accept: ["a bonfire", "an open fire"], drill: { jp: "Vi satt rundt et bål ute", en: "We sat around a campfire outside" }, hint: "et bål → bålet, flertall bål. Forbudt i skogen mellom 15. april og 15. september. En brann (u87) er ilden du ikke vil ha." },
        { id: "no-u83l2-eibalpanne", type: "vocab", front: "ei bålpanne", reading: "eibalpanne", meaning: "fire bowl", example: { jp: "I hagen bruker vi ei bålpanne, for der er det lov.", en: "In the garden we use a fire bowl, because there it's allowed." }, accept: ["a fire pit", "a brazier"], drill: { jp: "Vi bruker ei bålpanne i hagen", en: "We use a fire bowl in the garden" }, hint: "ei bålpanne → bålpanna. Et bål + ei panne (not taught in this course). Holder ilden av bakken, som er hele poenget." },
        { id: "no-u83l2-eiturhytte", type: "vocab", front: "ei turhytte", reading: "eiturhytte", meaning: "mountain hut", example: { jp: "Det ligger ei turhytte to timer lenger inn i fjellet.", en: "There's a mountain hut two hours further into the mountains." }, accept: ["a trekking hut", "a mountain cabin"], drill: { jp: "Det ligger ei turhytte lenger inn", en: "There is a mountain hut further in" }, hint: "ei turhytte → turhytta. En tur (u19) + ei hytte (u20). Mange står ulåste med mat og ved i, og du betaler etterpå." },
        { id: "no-u83l2-afyre", type: "vocab", front: "å fyre", reading: "afyre", meaning: "to make a fire", example: { jp: "Han fyrte i ovnen med en gang vi kom inn.", en: "He lit the stove as soon as we came in." }, accept: ["to light a fire", "to stoke"], drill: { jp: "Det er lurt å fyre med en gang", en: "It is sensible to make a fire straight away" }, hint: "å fyre → fyrer, fyrte. Om ovn og peis. Å fyre opp = to get it going. Å fyre opp = to get it going." },
      ],
    },
    {
      id: "no-u83l3",
      unit: 83,
      lesson: 3,
      title: "Ut i marka",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the ground you walk on, what you pick, and why you are allowed to be there.",
      items: [
        { id: "no-u83l3-allemannsretten", type: "vocab", front: "allemannsretten", reading: "allemannsretten", meaning: "right to roam", example: { jp: "Allemannsretten gir deg lov til å gå nesten over alt.", en: "The right to roam allows you to walk almost everywhere." }, accept: ["the freedom to roam", "public right of access"], drill: { jp: "Allemannsretten gjelder i hele landet", en: "The right to roam applies in the whole country" }, hint: "Alltid bestemt form — ordet finnes ikke som 'en allemannsrett'. Alle + en mann + en rett: everybody's right. Gjelder utmark, ikke hagen til folk." },
        { id: "no-u83l3-eimyr", type: "vocab", front: "ei myr", reading: "eimyr", meaning: "bog (marsh)", example: { jp: "Stien går over ei myr, så ta med gode sko.", en: "The path goes across a bog, so bring good shoes." }, accept: ["a marsh", "a swamp", "a moor"], drill: { jp: "Stien går over ei myr", en: "The path goes across a bog" }, hint: "ei myr → myra, flertall myrer. Våt, bløt mark. Ei myr ser tørr ut og er det aldri." },
        { id: "no-u83l3-abade", type: "vocab", front: "å bade", reading: "abade", meaning: "to swim (bathe)", example: { jp: "Vi badet i vannet selv om det var ganske kaldt.", en: "We swam in the lake even though it was quite cold." }, accept: ["to bathe", "to have a swim"], drill: { jp: "Det er godt å bade her", en: "It is good to swim here" }, hint: "å bade → bader, badet. Å bade er utendørs og for moro; å svømme (u19) er selve bevegelsen." },
        { id: "no-u83l3-etbaer", type: "vocab", front: "et bær", reading: "etbaer", meaning: "berry", example: { jp: "Det er mye bær i skogen i august hvert år.", en: "There are lots of berries in the forest in August every year." }, accept: ["berries"], drill: { jp: "Barna fant et bær i skogen", en: "The children found a berry in the forest" }, hint: "et bær → bæret, flertall bær. Blåbær og multer er de viktigste. Allemannsretten dekker bær og sopp." },
        { id: "no-u83l3-ensopp", type: "vocab", front: "en sopp", reading: "ensopp", meaning: "mushroom", example: { jp: "Ikke spis en sopp du ikke kjenner igjen.", en: "Don't eat a mushroom you don't recognise." }, accept: ["a fungus", "a toadstool"], drill: { jp: "Ikke spis en sopp du ikke kjenner", en: "Do not eat a mushroom you do not know" }, hint: "en sopp → soppen, flertall sopper. Også mould on a wall. Apoteket sjekker soppen din gratis om høsten." },
        { id: "no-u83l3-fore", type: "vocab", front: "føre", reading: "fore", meaning: "going (conditions underfoot)", example: { jp: "Det er godt føre i dag, så turen går fort.", en: "The conditions are good today, so the trip goes quickly." }, accept: ["the going", "ground conditions", "the snow conditions"], drill: { jp: "Det er godt føre i dag", en: "The going is good today" }, hint: "føre → føret. Står alltid uten artikkel, og er derfor bart oppslag: godt føre, dårlig føre. Om snø, is og bakke — engelsk har ikke ett ord for det." },
      ],
    },
    {
      id: "no-u83l4",
      unit: 83,
      lesson: 4,
      title: "Vinterfriluftsliv",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Go out in winter — ski trips, tracks, summits, and the weather that turns you back.",
      items: [
        { id: "no-u83l4-enskitur", type: "vocab", front: "en skitur", reading: "enskitur", meaning: "ski trip", example: { jp: "Vi tar en skitur hver søndag hele vinteren.", en: "We go on a ski trip every Sunday all winter." }, accept: ["a ski outing", "cross-country trip"], drill: { jp: "Vi tar en skitur hver søndag", en: "We go on a ski trip every Sunday" }, hint: "en skitur → skituren, flertall skiturer. En ski (u19) + en tur (u19). Alltid langrenn, aldri slalåm." },
        { id: "no-u83l4-etskispor", type: "vocab", front: "et skispor", reading: "etskispor", meaning: "ski track", example: { jp: "Skisporet var nytt, så det gikk lett hele veien.", en: "The ski track was new, so it went easily all the way." }, accept: ["a ski trail", "a groomed track"], drill: { jp: "Det går et skispor forbi hytta", en: "A ski track runs past the cabin" }, hint: "et skispor → skisporet, flertall skispor. Et spor (not taught in this course) + ski. Kommunen legger dem, og folk følger med på når." },
        { id: "no-u83l4-entopptur", type: "vocab", front: "en topptur", reading: "entopptur", meaning: "summit trip", example: { jp: "En topptur tar hele dagen og krever godt vær.", en: "A summit trip takes all day and requires good weather." }, accept: ["a peak trip", "a summit hike"], drill: { jp: "En topptur tar hele dagen", en: "A summit trip takes all day" }, hint: "en topptur → toppturen. En topp (u45) + en tur. Opp og ned igjen samme dag." },
        { id: "no-u83l4-etsnoskred", type: "vocab", front: "et snøskred", reading: "etsnoskred", meaning: "avalanche", example: { jp: "Det gikk et snøskred over veien i natt.", en: "An avalanche came down over the road last night." }, accept: ["a snowslide", "a slide"], drill: { jp: "Det gikk et snøskred i natt", en: "An avalanche came down last night" }, hint: "et snøskred → snøskredet, flertall snøskred. Snø (u8) + et skred. Verbet er å gå: et skred GÅR, det faller ikke." },
        { id: "no-u83l4-kuling", type: "vocab", front: "kuling", reading: "kuling", meaning: "strong wind (gale)", example: { jp: "Det blåser kuling på fjellet, så vi går ned igjen.", en: "There's a gale on the mountain, so we are going down again." }, accept: ["a gale", "a stiff breeze"], drill: { jp: "Det blåser kuling på fjellet", en: "There is a gale on the mountain" }, hint: "kuling → kulinga. Massesubstantiv i praksis: det blåser kuling, aldri ei kuling. Mellom bris og storm på skalaen. Meldinga sier kuling, og da snur folk." },
        { id: "no-u83l4-friluftsliv", type: "vocab", front: "friluftsliv", reading: "friluftsliv", meaning: "outdoor life", example: { jp: "Friluftsliv betyr mye mer enn en tur i skogen for folk her.", en: "Outdoor life means much more than a walk in the forest for people here." }, accept: ["open-air life", "the outdoors"], drill: { jp: "Friluftsliv betyr mye for folk", en: "Outdoor life means a lot to people" }, hint: "friluftsliv → friluftslivet. Fri + luft (u34) + liv (u34). Massesubstantiv, derfor bart oppslag. Ordet er norsk og har ingen presis engelsk oversettelse." },
      ],
    },
  ],
};
