// NO Unit 29 — Bindeord ("Connecting words") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 gave the plainest joins — og, men, eller, fordi, at, når, hvis, mens,
// derfor. A2 is where a speaker stops listing clauses and starts steering them:
// adding, sequencing, drawing a contrast, offering an alternative. Every item is
// a connector, taught as function-word vocab whose EXAMPLE carries the pattern.
//
// WORD ORDER is the real lesson here, not the meaning. Norwegian is V2: a fronted
// connector inverts the subject and verb — "Dessuten ER det billig", never
// "Dessuten det er". Subordinators (selv om, siden, dersom) push the verb to
// after the subject in their own clause. The hints flag the movement on each one;
// the drill keeps the pattern short enough to see.
// A1 conventions bind (no/unit1.js): ø→o, æ→ae, å→a in `reading`.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT29 = {
  id: "no-u29",
  lang: "no",
  title: "Bindeord",
  order: 29,
  stage: "a2",
  lessons: [
    {
      id: "no-u29l1",
      unit: 29,
      lesson: 1,
      title: "Adding to what you said",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Pile on another point, or hang one on a noun — dessuten, i tillegg, samt, både … og, for eksempel, nemlig, som.",
      items: [
        { id: "no-u29l1-dessuten", type: "vocab", front: "dessuten", reading: "dessuten", meaning: "besides", example: { jp: "Huset er billig, og dessuten ligger det nær byen.", en: "The house is cheap, and besides, it's near the town." }, accept: ["moreover", "furthermore", "also"], drill: { jp: "Dessuten er det billig", en: "Besides, it is cheap" }, hint: "DESS-uten. Fronting it inverts the verb: dessuten LIGGER det, never \"dessuten det ligger\". Adds a second reason to the first." },
        { id: "no-u29l1-itillegg", type: "vocab", front: "i tillegg", reading: "itillegg", meaning: "in addition", example: { jp: "Jeg må vaske huset, og i tillegg må jeg handle.", en: "I have to clean the house, and in addition I have to do the shopping." }, accept: ["additionally", "on top of that", "as well"], drill: { jp: "I tillegg jobber han mye", en: "In addition he works a lot" }, hint: "Same V2 jump as dessuten. i tillegg til noe = in addition to something." },
        { id: "no-u29l1-samt", type: "vocab", front: "samt", reading: "samt", meaning: "as well as", example: { jp: "Vi trenger melk og brød, samt litt vann.", en: "We need milk and bread, as well as a little water." }, accept: ["and also", "plus", "together with"], drill: { jp: "brød samt melk", en: "bread as well as milk" }, hint: "SAMT. A formal \"and\" for the last item in a list — you'll meet it in writing more than in speech." },
        { id: "no-u29l1-bade", type: "vocab", front: "både", reading: "bade", meaning: "both", example: { jp: "Han snakker norsk både hjemme og på jobb.", en: "He speaks Norwegian both at home and at work." }, accept: ["both (… and)"], drill: { jp: "både du og jeg", en: "both you and I" }, hint: "BOH-de. Always paired: både X OG Y. The og is not optional." },
        { id: "no-u29l1-foreksempel", type: "vocab", front: "for eksempel", reading: "foreksempel", meaning: "for example", example: { jp: "Jeg liker dyr, for eksempel hunder og katter.", en: "I like animals, for example dogs and cats." }, accept: ["for instance", "e.g."], drill: { jp: "for eksempel en hund", en: "for example a dog" }, hint: "Written short as f.eks. Built on et eksempel, an example — the noun on its own comes later, at u32." },
        { id: "no-u29l1-nemlig", type: "vocab", front: "nemlig", reading: "nemlig", meaning: "you see", example: { jp: "Jeg kan ikke komme i kveld, jeg er nemlig syk.", en: "I can't come tonight — you see, I'm ill." }, accept: ["namely", "as it happens", "the thing is"], drill: { jp: "Han er nemlig lærer", en: "He is a teacher, you see" }, hint: "NEM-li. Sits right after the verb and explains the thing you just said. Not a word you front." },
        { id: "no-u29l1-som", type: "vocab", front: "som", reading: "som", meaning: "that (relative)", example: { jp: "Mannen som bor her, jobber på sykehuset.", en: "The man who lives here works at the hospital." }, accept: ["who", "which", "who/which/that"], drill: { jp: "Jeg kjenner mannen som bor her", en: "I know the man who lives here" }, hint: "SOM. One word for who, which and that — and Norwegian never drops it: boka SOM jeg leste. Inside its own clause the subject stays before the verb." },
      ],
    },
    {
      id: "no-u29l2",
      unit: 29,
      lesson: 2,
      title: "Order and result",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put steps in order and mark a result — først, deretter, til slutt, altså, dermed, slik at, siden.",
      items: [
        { id: "no-u29l2-deretter", type: "vocab", front: "deretter", reading: "deretter", meaning: "then", example: { jp: "Først spiser vi middag, og deretter ser vi en film.", en: "First we eat dinner, and then we watch a film." }, accept: ["after that", "next", "afterwards"], drill: { jp: "Deretter går vi hjem", en: "Then we go home" }, hint: "der-ET-ter. The step-by-step \"then\", more formal than så. Fronts and inverts: deretter SER vi." },
        { id: "no-u29l2-tilslutt", type: "vocab", front: "til slutt", reading: "tilslutt", meaning: "in the end", example: { jp: "Vi ventet en stund, og til slutt fant vi huset.", en: "We waited a while, and finally we found the house." }, accept: ["finally", "at last", "lastly"], drill: { jp: "Til slutt sov barnet", en: "Finally the child slept" }, hint: "From en slutt, an end (A1). Marks the last thing in a sequence." },
        { id: "no-u29l2-altsa", type: "vocab", front: "altså", reading: "altsa", meaning: "so", example: { jp: "Butikken er stengt, du må altså komme i morgen.", en: "The shop is closed, so you have to come tomorrow." }, accept: ["therefore", "that is", "in other words"], drill: { jp: "Du kommer altså i dag", en: "So you are coming today" }, hint: "ALT-so. Draws a conclusion, or restates: altså = \"which means\". Softer than derfor (A1)." },
        { id: "no-u29l2-dermed", type: "vocab", front: "dermed", reading: "dermed", meaning: "thereby", example: { jp: "Toget var forsinket, og dermed kom vi for sent.", en: "The train was delayed, and thereby we arrived too late." }, accept: ["thus", "as a result", "and so"], drill: { jp: "Dermed er vi ferdige", en: "So we are finished" }, hint: "DER-me. States a direct result of what came before. Fronts and inverts: dermed KOM vi." },
        { id: "no-u29l2-slikat", type: "vocab", front: "slik at", reading: "slikat", meaning: "so that", example: { jp: "Jeg skriver det ned, slik at jeg ikke glemmer det.", en: "I'll write it down, so that I don't forget it." }, accept: ["in order that", "so"], drill: { jp: "slik at alle forstår", en: "so that everyone understands" }, hint: "Introduces a purpose or result clause. In that clause the verb follows the subject: slik at jeg IKKE glemmer." },
        { id: "no-u29l2-siden", type: "vocab", front: "siden", reading: "siden", meaning: "since", example: { jp: "Siden det regner, blir vi hjemme i dag.", en: "Since it's raining, we're staying home today." }, accept: ["because", "as", "seeing as"], drill: { jp: "Siden i går har det regnet", en: "It has rained since yesterday" }, hint: "A reason both already know, like fordi but often first. Also \"since (a time)\": siden i går = since yesterday." },
        { id: "no-u29l2-forst", type: "vocab", front: "først", reading: "forst", meaning: "first", example: { jp: "Først må vi handle, og deretter kan vi lage middag.", en: "First we have to shop, and after that we can make dinner." }, accept: ["at first", "firstly"], drill: { jp: "Først spiser vi frokost", en: "First we eat breakfast" }, hint: "FØRST — ø written o in the reading. It opens the sequence først … deretter … til slutt. Fronting it inverts: Først MÅ vi handle." },
      ],
    },
    {
      id: "no-u29l3",
      unit: 29,
      lesson: 3,
      title: "Contrast",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Push against what you just said — likevel, selv om, imidlertid, derimot, tvert imot, enda.",
      items: [
        { id: "no-u29l3-likevel", type: "vocab", front: "likevel", reading: "likevel", meaning: "anyway", example: { jp: "Det var dyrt, men vi kjøpte det likevel.", en: "It was expensive, but we bought it anyway." }, accept: ["still", "nevertheless", "even so"], drill: { jp: "Likevel kom han", en: "He came anyway" }, hint: "LEE-ke-vel. Concedes the first point and carries on: dyrt, men likevel. Fronts and inverts." },
        { id: "no-u29l3-selvom", type: "vocab", front: "selv om", reading: "selvom", meaning: "even though", example: { jp: "Selv om det var kaldt, gikk vi en lang tur.", en: "Even though it was cold, we went for a long walk." }, accept: ["although", "even if"], drill: { jp: "selv om jeg er trøtt", en: "even though I'm tired" }, hint: "SELL-om. A subordinator: the verb stays after the subject inside its clause. When it fronts, the MAIN verb inverts: …, GIKK vi." },
        { id: "no-u29l3-imidlertid", type: "vocab", front: "imidlertid", reading: "imidlertid", meaning: "however", example: { jp: "Planen var god. Været var imidlertid dårlig.", en: "The plan was good. The weather, however, was bad." }, accept: ["nevertheless", "yet"], drill: { jp: "Han kom imidlertid for sent", en: "He arrived too late, however" }, hint: "i-MID-ler-ti. A formal, written \"however\" — heavier than men. Often set off by commas." },
        { id: "no-u29l3-derimot", type: "vocab", front: "derimot", reading: "derimot", meaning: "on the other hand", example: { jp: "Jeg liker vann. Melk, derimot, drikker jeg aldri.", en: "I like water. Milk, on the other hand, I never drink." }, accept: ["by contrast", "whereas"], drill: { jp: "Han sa derimot nei", en: "He said no, by contrast" }, hint: "DER-ee-mot. Sets one thing directly against another — sharper than men." },
        { id: "no-u29l3-tvertimot", type: "vocab", front: "tvert imot", reading: "tvertimot", meaning: "on the contrary", example: { jp: "Han var ikke sint. Tvert imot, han var glad.", en: "He was not angry. On the contrary, he was happy." }, accept: ["quite the opposite", "far from it"], drill: { jp: "Tvert imot liker jeg det", en: "On the contrary, I like it" }, hint: "tvert ee-MOT. Flatly reverses what was just said or expected. Stronger than derimot." },
        { id: "no-u29l3-enda", type: "vocab", front: "enda", reading: "enda", meaning: "even", example: { jp: "I dag er det enda kaldere enn i går.", en: "Today it's even colder than yesterday." }, accept: ["still", "yet more"], drill: { jp: "enda bedre enn før", en: "even better than before" }, hint: "EN-da. Before a comparative it means \"even\": enda kaldere. Don't confuse it with ennå (still, not yet), taught in u28." },
      ],
    },
    {
      id: "no-u29l4",
      unit: 29,
      lesson: 4,
      title: "Alternatives and conditions",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Offer a choice or a condition — enten … eller, verken … eller, ellers, heller, dersom, med mindre.",
      items: [
        { id: "no-u29l4-enten", type: "vocab", front: "enten", reading: "enten", meaning: "either", example: { jp: "Vi kan enten ta bussen eller gå.", en: "We can either take the bus or walk." }, accept: ["either (… or)"], drill: { jp: "enten i dag eller i morgen", en: "either today or tomorrow" }, hint: "EN-ten. Always paired: enten X ELLER Y. The two-sided version of eller (A1)." },
        { id: "no-u29l4-verken", type: "vocab", front: "verken", reading: "verken", meaning: "neither", example: { jp: "Han spiste verken frokost eller middag i dag.", en: "He ate neither breakfast nor dinner today." }, accept: ["neither (… nor)"], drill: { jp: "verken du eller jeg", en: "neither you nor I" }, hint: "VER-ken. The negative pair: verken X ELLER Y = neither X nor Y. Note it still takes eller, not \"nor\"." },
        { id: "no-u29l4-ellers", type: "vocab", front: "ellers", reading: "ellers", meaning: "otherwise", example: { jp: "Du må skynde deg, ellers rekker du ikke toget.", en: "You have to hurry, otherwise you won't catch the train." }, accept: ["or else", "if not"], drill: { jp: "Skynd deg ellers går vi", en: "Hurry or else we leave" }, hint: "EL-lers. Names what happens if not — the threat after a warning. Also \"else\": noe annet? nei, ellers takk." },
        { id: "no-u29l4-heller", type: "vocab", front: "heller", reading: "heller", meaning: "rather", example: { jp: "Jeg vil heller bli hjemme enn å gå ut i dag.", en: "I'd rather stay home than go out today." }, accept: ["preferably", "instead"], drill: { jp: "Jeg tar heller vann", en: "I'd rather have water" }, hint: "HEL-ler. vil heller = would rather; heller enn = rather than. In a negative it means \"either\": jeg vet det ikke heller." },
        { id: "no-u29l4-dersom", type: "vocab", front: "dersom", reading: "dersom", meaning: "if (more formal)", example: { jp: "Dersom det blir fint vær, drar vi på tur.", en: "If the weather turns nice, we'll go on a trip." }, accept: ["if", "provided that", "in case"], drill: { jp: "dersom du vil", en: "if you want" }, hint: "DER-som. A slightly more formal hvis (A1) — same job, same clause order: dersom det BLIR fint." },
        { id: "no-u29l4-medmindre", type: "vocab", front: "med mindre", reading: "medmindre", meaning: "unless", example: { jp: "Vi drar klokka åtte, med mindre du vil vente.", en: "We're leaving at eight, unless you want to wait." }, accept: ["except if"], drill: { jp: "med mindre det regner", en: "unless it rains" }, hint: "The negative condition: unless = if … not. med mindre du VIL — verb after subject in the clause." },
      ],
    },
  ],
};
