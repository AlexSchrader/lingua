// NO Unit 118 — Preposisjoner · 3 (slot: coverage-b2-8) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 8 (B2)"; retitled per CLAUDE.md
// "No front language". Continues the numbering of u76 Preposisjoner og
// plassering, which was the B1 coverage seat's first slot and closed the bare
// SPATIAL set (bak, foran, mellom, hos, gjennom, langs, blant, utenfor).
//
// MEASURED. Screened all 2025 taught `no` fronts against a 51-item Bokmål
// preposition inventory: 30 taught, 21 absent. Discounting variants and
// archaisms, what is genuinely missing is one coherent group — the preposition
// the learner meets in WRITING rather than in a room: overfor, framfor, ovenfor,
// nedenfor, omkring, via, per, grunnet, vedrørende, plus the multi-word
// prepositional phrases that carry most formal Norwegian (ved hjelp av, på vegne
// av, som følge av, i henhold til, med hensyn til, i samsvar med, i forbindelse
// med). u36 teaches four of those phrases (inntil, bortsett fra, på grunn av, til
// tross for) and stops; this finishes the set.
//
// ⚠️ A preposition inventory IS a closed class, so an absence screen is
// discriminating here. The GROUPING into lessons below is mine and is not a
// measurement — I chose to sort them by register and function.
//
// Conventions per no/unit1.js. Prepositions are bare fronts. Multi-word
// prepositional phrases are single lexical items and are taught whole, under the
// §7 frozen-formula licence. Readings are hand-written ASCII folds, spaces
// dropped.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT118 = {
  id: "no-u118",
  lang: "no",
  title: "Preposisjoner · 3",
  order: 118,
  stage: "b2",
  lessons: [
    {
      id: "no-u118l1",
      unit: 118,
      lesson: 1,
      title: "Overfor og ovenfor",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place one thing opposite, in front of, above or below another — including in the abstract.",
      items: [
        { id: "no-u118l1-overfor", type: "vocab", front: "overfor", reading: "overfor", meaning: "opposite (facing)", example: { jp: "Banken ligger rett overfor kirka.", en: "The bank is right opposite the church." }, accept: ["across from", "facing", "towards (a person)"], drill: { jp: "Banken ligger rett overfor kirka", en: "The bank is right opposite the church" }, hint: "Face to face across a space. Also of people, where it means 'towards': hun er ærlig overfor meg." },
        { id: "no-u118l1-framfor", type: "vocab", front: "framfor", reading: "framfor", meaning: "rather than", example: { jp: "Jeg tar heller toget framfor bilen.", en: "I would rather take the train than the car." }, accept: ["in preference to", "before (in front of)", "over"], drill: { jp: "Jeg tar toget framfor bilen", en: "I take the train rather than the car" }, hint: "Mostly a comparison — this one over that one. It can also be physical, in front of, but foran (u76) is the ordinary word for that." },
        { id: "no-u118l1-ovenfor", type: "vocab", front: "ovenfor", reading: "ovenfor", meaning: "above (higher up than)", example: { jp: "Hytta ligger ovenfor veien på fjellet.", en: "The cabin is above the road on the mountain." }, accept: ["up above", "higher than", "further up"], drill: { jp: "Hytta ligger ovenfor veien", en: "The cabin is above the road" }, hint: "Higher up on a slope or a page, without touching — against over, which can mean directly on top. ⚠️ One letter from overfor, and a different word." },
        { id: "no-u118l1-nedenfor", type: "vocab", front: "nedenfor", reading: "nedenfor", meaning: "below (lower down than)", example: { jp: "Butikken ligger nedenfor skolen i samme gate.", en: "The shop is below the school in the same street." }, accept: ["down below", "lower than", "further down"], drill: { jp: "Butikken ligger nedenfor skolen", en: "The shop is below the school" }, hint: "The pair to ovenfor, built the same way from ned. In a document, se nedenfor means 'see below'." },
        { id: "no-u118l1-omkring", type: "vocab", front: "omkring", reading: "omkring", meaning: "round about", example: { jp: "Det bor mange folk omkring innsjøen.", en: "A lot of people live round about the lake." }, accept: ["around", "about", "surrounding"], drill: { jp: "Det bor folk omkring innsjøen", en: "People live round about the lake" }, hint: "A more bookish rundt (u45). Before a number it means 'approximately': omkring tjue personer." },
        { id: "no-u118l1-innimellom", type: "vocab", front: "innimellom", reading: "innimellom", meaning: "now and then", example: { jp: "Han jobber hjemme innimellom når det passer.", en: "He works from home now and then when it suits." }, accept: ["occasionally", "in between", "from time to time"], drill: { jp: "Han jobber hjemme innimellom", en: "He works from home now and then" }, hint: "Written as one word it is the time adverb 'occasionally'; written inni mellom it is the literal 'in between them'. Both exist and the spelling decides." },
      ],
    },
    {
      id: "no-u118l2",
      unit: 118,
      lesson: 2,
      title: "Veien om og på vegne av",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say by what route, by what means, and on whose behalf something was done.",
      items: [
        { id: "no-u118l2-via", type: "vocab", front: "via", reading: "via", meaning: "by way of", example: { jp: "Vi reiste til Bergen via Oslo med tog.", en: "We travelled to Bergen by way of Oslo by train." }, accept: ["through", "by route of"], drill: { jp: "Vi reiste til Bergen via Oslo", en: "We travelled to Bergen by way of Oslo" }, hint: "VI-a, two syllables. Used of routes and of intermediaries alike: jeg fikk beskjeden via sjefen." },
        { id: "no-u118l2-per", type: "vocab", front: "per", reading: "per", meaning: "per (for each)", example: { jp: "Prisen er hundre kroner per person.", en: "The price is a hundred kroner per person." }, accept: ["for each", "a (per unit)", "by"], drill: { jp: "Prisen er hundre kroner per person", en: "The price is a hundred kroner per person" }, hint: "Both 'for each' and 'by means of': per telefon, per e-post. Often written pr. in forms and price lists." },
        { id: "no-u118l2-vedhjelpav", type: "vocab", front: "ved hjelp av", reading: "vedhjelpav", meaning: "by means of", example: { jp: "De åpnet døra ved hjelp av en nøkkel fra naboen.", en: "They opened the door by means of a key from the neighbour." }, accept: ["with the help of", "using", "by use of"], drill: { jp: "De åpnet døra ved hjelp av en nøkkel", en: "They opened the door with the help of a key" }, hint: "A frozen three-word preposition — do not put an article on hjelp. The everyday alternative is simply med." },
        { id: "no-u118l2-iformav", type: "vocab", front: "i form av", reading: "iformav", meaning: "in the form of", example: { jp: "Hun fikk betalt i form av en gave.", en: "She was paid in the form of a gift." }, accept: ["as", "by way of", "in the shape of"], drill: { jp: "Hun fikk betalt i form av en gave", en: "She was paid in the form of a gift" }, hint: "Names the shape a thing arrived in. Common in official writing, where it often replaces a plain som." },
        { id: "no-u118l2-pavegneav", type: "vocab", front: "på vegne av", reading: "pavegneav", meaning: "on behalf of", example: { jp: "Jeg skriver på vegne av hele avdelingen.", en: "I am writing on behalf of the whole department." }, accept: ["for", "representing", "in the name of"], drill: { jp: "Jeg skriver på vegne av avdelingen", en: "I am writing on behalf of the department" }, hint: "The standard opening of a formal letter written for someone else. Vegne exists only inside this phrase." },
        { id: "no-u118l2-uavhengigav", type: "vocab", front: "uavhengig av", reading: "uavhengigav", meaning: "regardless of", example: { jp: "Alle får samme pris uavhengig av alder.", en: "Everyone gets the same price regardless of age." }, accept: ["independent of", "irrespective of", "no matter"], drill: { jp: "Alle får samme pris uavhengig av alder", en: "Everyone gets the same price regardless of age" }, hint: "u- + avhengig, not dependent. Also stands alone as an adjective: landet ble uavhengig i 1905." },
      ],
    },
    {
      id: "no-u118l3",
      unit: 118,
      lesson: 3,
      title: "Årsak og hensyn",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give the official reason for something, and say what was taken into account.",
      items: [
        { id: "no-u118l3-grunnet", type: "vocab", front: "grunnet", reading: "grunnet", meaning: "owing to", example: { jp: "Toget er forsinket grunnet arbeid på veien.", en: "The train is delayed owing to work on the road." }, accept: ["due to", "because of", "on account of"], drill: { jp: "Toget er forsinket grunnet arbeid", en: "The train is delayed owing to work" }, hint: "The clipped official version of på grunn av (u36) — this is the one on station signs and notices. Never used in speech." },
        { id: "no-u118l3-somfolgeav", type: "vocab", front: "som følge av", reading: "somfolgeav", meaning: "as a consequence of", example: { jp: "Prisene steg som følge av de nye reglene.", en: "Prices rose as a consequence of the new rules." }, accept: ["as a result of", "following", "consequent on"], drill: { jp: "Prisene steg som følge av reglene", en: "Prices rose as a consequence of the rules" }, hint: "Points forward from cause to effect, where grunnet points back from effect to cause. En følge (u25) is the consequence itself." },
        { id: "no-u118l3-medhensyntil", type: "vocab", front: "med hensyn til", reading: "medhensyntil", meaning: "with regard to", example: { jp: "Med hensyn til prisen er vi enige.", en: "With regard to the price we are agreed." }, accept: ["regarding", "concerning", "as regards"], drill: { jp: "Med hensyn til prisen er vi enige", en: "With regard to the price we are agreed" }, hint: "Abbreviated mht. in writing. Et hensyn is a consideration, and å ta hensyn til means to take account of someone." },
        { id: "no-u118l3-nardetgjelder", type: "vocab", front: "når det gjelder", reading: "nardetgjelder", meaning: "when it comes to", example: { jp: "Når det gjelder mat er han svært forsiktig.", en: "When it comes to food he is very careful." }, accept: ["as for", "with respect to", "speaking of"], drill: { jp: "Når det gjelder mat er han forsiktig", en: "When it comes to food he is careful" }, hint: "The spoken cousin of med hensyn til, and much commoner. It opens a sentence and the verb still comes second after it — V2 holds." },
        { id: "no-u118l3-ihenholdtil", type: "vocab", front: "i henhold til", reading: "ihenholdtil", meaning: "pursuant to", example: { jp: "Vedtaket ble gjort i henhold til loven.", en: "The decision was made pursuant to the law." }, accept: ["in accordance with", "according to", "under (a rule)"], drill: { jp: "Vedtaket ble gjort i henhold til loven", en: "The decision was made pursuant to the law" }, hint: "Abbreviated ihht. Strictly legal register — a letter from the council, never a conversation. Ifølge (u70) is the everyday 'according to'." },
        { id: "no-u118l3-isamsvarmed", type: "vocab", front: "i samsvar med", reading: "isamsvarmed", meaning: "in conformity with", example: { jp: "Bygget er reist i samsvar med reglene.", en: "The building was put up in conformity with the rules." }, accept: ["in accordance with", "consistent with", "matching"], drill: { jp: "Bygget er reist i samsvar med reglene", en: "The building was put up in conformity with the rules" }, hint: "samsvar is agreement between two things. Claims a match; i henhold til only claims a source." },
      ],
    },
    {
      id: "no-u118l4",
      unit: 118,
      lesson: 4,
      title: "I brev og skjema",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read and write the prepositions that hold a formal Norwegian letter together.",
      items: [
        { id: "no-u118l4-vedrorende", type: "vocab", front: "vedrørende", reading: "vedrorende", meaning: "concerning (in a heading)", example: { jp: "Brevet er vedrørende søknaden din.", en: "The letter is concerning your application." }, accept: ["regarding", "re:", "about"], drill: { jp: "Brevet er vedrørende søknaden din", en: "The letter is concerning your application" }, hint: "Abbreviated vedr. and almost always in the subject line of a letter. Angående (u72) is the same thing one notch less stiff." },
        { id: "no-u118l4-herved", type: "vocab", front: "herved", reading: "herved", meaning: "hereby", example: { jp: "Vi bekrefter herved at plassen er din.", en: "We hereby confirm that the place is yours." }, accept: ["by this", "with this"], drill: { jp: "Vi bekrefter herved at plassen er din", en: "We hereby confirm that the place is yours" }, hint: "her + ved, this letter being the means. It marks the sentence that performs the act rather than describing it." },
        { id: "no-u118l4-iforbindelsemed", type: "vocab", front: "i forbindelse med", reading: "iforbindelsemed", meaning: "in connection with", example: { jp: "Vi ringer i forbindelse med møtet på fredag.", en: "We are calling in connection with the meeting on Friday." }, accept: ["about", "relating to", "to do with"], drill: { jp: "Vi ringer i forbindelse med møtet", en: "We are calling in connection with the meeting" }, hint: "The workhorse of Norwegian office writing — abbreviated ifm. It says only that the two things are related, which is often exactly the point." },
        { id: "no-u118l4-medforbeholdom", type: "vocab", front: "med forbehold om", reading: "medforbeholdom", meaning: "subject to (a proviso)", example: { jp: "Vi bekrefter plassen med forbehold om nok folk.", en: "We confirm the place subject to there being enough people." }, accept: ["subject to", "with the proviso", "conditional on"], drill: { jp: "Vi bekrefter plassen med forbehold om plass", en: "We confirm the place subject to there being room" }, hint: "Et forbehold is a reservation you keep in hand. Å ta forbehold (u73) is the verb; this is the prepositional frame." },
        { id: "no-u118l4-pabakgrunnav", type: "vocab", front: "på bakgrunn av", reading: "pabakgrunnav", meaning: "on the basis of", example: { jp: "Vedtaket ble gjort på bakgrunn av nye tall.", en: "The decision was made on the basis of new figures." }, accept: ["based on", "in the light of", "in view of"], drill: { jp: "Vedtaket ble gjort på bakgrunn av tall", en: "The decision was made on the basis of figures" }, hint: "en bakgrunn is the background. It names the evidence behind a decision rather than its cause — that is grunnet." },
        { id: "no-u118l4-itradmed", type: "vocab", front: "i tråd med", reading: "itradmed", meaning: "in line with", example: { jp: "Forslaget er i tråd med det vi ble enige om.", en: "The proposal is in line with what we agreed." }, accept: ["consistent with", "in keeping with", "matching"], drill: { jp: "Forslaget er i tråd med avtalen", en: "The proposal is in line with the agreement" }, hint: "en tråd is a thread — the same picture as English 'in line with'. Softer than i samsvar med, which sounds like a rule is being checked." },
      ],
    },
  ],
};
