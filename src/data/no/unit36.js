// NO Unit 36 — Grammatikk 4: å binde setninger ("Grammar 4 — compound and linked clauses") — A2
// Conventions per no/unit1.js §1-§8. Grammar has no item type: each subordinator is
// function-word vocab whose example carries the pattern. The DRILL stays a simple
// main clause; the EXAMPLE shows the subordinate clause the word introduces.
//
// THE REAL CONTENT IS WORD ORDER. A Norwegian subordinate clause keeps subject
// before verb and puts ikke BEFORE the verb (...fordi jeg IKKE kommer), and when the
// subordinate clause comes first, the main clause inverts — verb before subject
// (Hvis det regner, BLIR jeg hjemme). Every hint names which order the word triggers.
//
// SCOPE BOUNDARY: A1 owns the plain links (at, fordi, hvis, når, mens, før, og, eller,
// men, også). The crew lead's u29 "Connecting words" owns som/for/der and the
// sentence-adverb connectors (derfor, dessuten, likevel, altså, dermed). u29 had not
// landed when this was written, so this unit takes ONLY subordinating conjunctions and
// correlatives — the clause machinery neither A1 nor u29 claims — and no example uses
// a relative som. If u29 collides on any front, lower slot wins and it is ceded there.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT36 = {
  id: "no-u36",
  lang: "no",
  title: "Grammatikk 4: å binde setninger",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "no-u36l1",
      unit: 36,
      lesson: 1,
      title: "If and unless",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Set a condition on a clause — dersom, med mindre, i tilfelle, så sant, hvis ikke, ellers.",
      items: [
        { id: "no-u36l1-dersom", type: "vocab", front: "dersom", reading: "dersom", meaning: "if", example: { jp: "Dersom du vil, kan vi møtes i morgen.", en: "If you want, we can meet tomorrow." }, accept: ["provided that", "in case", "should"], drill: { jp: "Dersom du vil, kom", en: "If you want, come" }, hint: "A more formal hvis (A1). Fronting it inverts the main clause: Dersom du vil, KAN vi — verb before subject." },
        { id: "no-u36l1-medmindre", type: "vocab", front: "med mindre", reading: "medmindre", meaning: "unless", example: { jp: "Jeg kommer ikke med mindre du ringer meg først.", en: "I won't come unless you call me first." }, accept: ["except if", "save that"], drill: { jp: "Jeg blir hjemme med mindre du ringer", en: "I stay home unless you call" }, hint: "med mindre = unless. The clause after it keeps normal order: ...med mindre du ringer. Literally 'with less'." },
        { id: "no-u36l1-itilfelle", type: "vocab", front: "i tilfelle", reading: "itilfelle", meaning: "in case", example: { jp: "Ta med en jakke i tilfelle det blir kaldt i kveld.", en: "Bring a jacket in case it gets cold tonight." }, accept: ["just in case", "in the event that"], drill: { jp: "Ta med penger i tilfelle", en: "Bring money just in case" }, hint: "From et tilfelle, a case. Also used alone at the end: ...i tilfelle, 'just in case'." },
        { id: "no-u36l1-sasant", type: "vocab", front: "så sant", reading: "sasant", meaning: "as long as", example: { jp: "Vi drar på tur så sant været er fint.", en: "We'll go on a hike as long as the weather is nice." }, accept: ["provided that", "so long as"], drill: { jp: "Vi kommer så sant vi kan", en: "We'll come as long as we can" }, hint: "Literally 'so true' — sant is the neuter of sann, true. A condition you expect to hold." },
        { id: "no-u36l1-hvisikke", type: "vocab", front: "hvis ikke", reading: "hvisikke", meaning: "if not", example: { jp: "Skynd deg, hvis ikke kommer vi for sent på skolen.", en: "Hurry up, otherwise we'll be too late for school." }, accept: ["otherwise", "if you don't", "or else"], drill: { jp: "Kom nå, hvis ikke går vi", en: "Come now, otherwise we go" }, hint: "hvis (A1) + ikke. Standing alone it means 'if not / otherwise', and the clause after it inverts: hvis ikke KOMMER vi for sent." },
        { id: "no-u36l1-ellers", type: "vocab", front: "ellers", reading: "ellers", meaning: "otherwise", example: { jp: "Vi må gå nå, ellers rekker vi ikke bussen.", en: "We have to go now, otherwise we won't catch the bus." }, accept: ["or else", "apart from that"], drill: { jp: "Spis nå, ellers blir maten kald", en: "Eat now, otherwise the food gets cold" }, hint: "ellers = otherwise, and it inverts what follows: ellers REKKER vi ikke. Also 'apart from that': ellers går det bra." },
      ],
    },
    {
      id: "no-u36l2",
      unit: 36,
      lesson: 2,
      title: "Because and even though",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a reason or grant a point across a clause — siden, ettersom, selv om, enda, på grunn av, takket være.",
      items: [
        { id: "no-u36l2-siden", type: "vocab", front: "siden", reading: "siden", meaning: "since", example: { jp: "Siden du er her, kan du hjelpe meg litt.", en: "Since you're here, you can help me a bit." }, accept: ["as", "because", "seeing as"], drill: { jp: "Siden det regner, blir vi inne", en: "Since it's raining, we stay in" }, hint: "Reason and time both: siden du er her (as); for lenge siden (a long time ago). Fronting inverts: Siden du er her, KAN du." },
        { id: "no-u36l2-ettersom", type: "vocab", front: "ettersom", reading: "ettersom", meaning: "as", example: { jp: "Ettersom det er sent, går vi hjem nå.", en: "As it's late, we're going home now." }, accept: ["since", "seeing that", "because"], drill: { jp: "Ettersom det er sent, drar vi", en: "As it's late, we set off" }, hint: "A slightly formal siden, for a reason. Built on etter, after." },
        { id: "no-u36l2-selvom", type: "vocab", front: "selv om", reading: "selvom", meaning: "even though", example: { jp: "Selv om det regner, går vi en tur i skogen.", en: "Even though it's raining, we're going for a walk in the forest." }, accept: ["although", "even if"], drill: { jp: "Selv om det regner, går vi ut", en: "Even though it rains, we go out" }, hint: "The main concession word. Fronting it inverts: Selv om det regner, GÅR vi. Do not split it — selv alone means 'self'." },
        { id: "no-u36l2-enda", type: "vocab", front: "enda", reading: "enda", meaning: "even though", example: { jp: "Enda han er syk, går han på skolen hver dag.", en: "Even though he's ill, he goes to school every day." }, accept: ["although", "yet", "still"], drill: { jp: "Enda han er trøtt, jobber han", en: "Even though he's tired, he works" }, hint: "A spoken selv om. Careful: enda also means 'even more' before an adjective — enda større, even bigger." },
        { id: "no-u36l2-pagrunnav", type: "vocab", front: "på grunn av", reading: "pagrunnav", meaning: "because of", example: { jp: "Vi ble hjemme på grunn av det dårlige været.", en: "We stayed home because of the bad weather." }, accept: ["due to", "owing to"], drill: { jp: "Toget er sent på grunn av snø", en: "The train is late because of snow" }, hint: "på grunn av + a noun (from en grunn, a reason); fordi (A1) + a whole clause. Often shortened to pga. in writing." },
        { id: "no-u36l2-takketvaere", type: "vocab", front: "takket være", reading: "takketvaere", meaning: "thanks to", example: { jp: "Takket være læreren forstår jeg grammatikk nå.", en: "Thanks to the teacher, I understand grammar now." }, accept: ["owing to", "because of (positive)"], drill: { jp: "Takket være deg klarte vi det", en: "Thanks to you, we managed it" }, hint: "The positive på grunn av — it credits a good outcome. From å takke, to thank, plus være, to be." },
      ],
    },
    {
      id: "no-u36l3",
      unit: 36,
      lesson: 3,
      title: "When and how long",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Place a clause in time — da, etter at, så snart, så lenge, innen, inntil.",
      items: [
        { id: "no-u36l3-da", type: "vocab", front: "da", reading: "da", meaning: "when (past)", example: { jp: "Da jeg var ung, bodde jeg i en liten by.", en: "When I was young, I lived in a small town." }, accept: ["when", "as", "then"], drill: { jp: "Da jeg kom, sov alle", en: "When I arrived, everyone was asleep" }, hint: "da for a SINGLE moment in the past; når (A1) for something repeated or future. This split is one of the classic Norwegian tests." },
        { id: "no-u36l3-etterat", type: "vocab", front: "etter at", reading: "etterat", meaning: "after", example: { jp: "Etter at vi hadde spist, gikk vi en tur.", en: "After we had eaten, we went for a walk." }, accept: ["after (something happens)"], drill: { jp: "Etter at han kom, spiste vi", en: "After he came, we ate" }, hint: "etter (A1) + at joins a clause; etter alone takes a noun: etter middag. Fronting inverts: Etter at vi spiste, GIKK vi." },
        { id: "no-u36l3-sasnart", type: "vocab", front: "så snart", reading: "sasnart", meaning: "as soon as", example: { jp: "Ring meg så snart du er hjemme igjen.", en: "Call me as soon as you're home again." }, accept: ["the moment", "right after"], drill: { jp: "Vi drar så snart du er klar", en: "We leave as soon as you're ready" }, hint: "snart alone (A1) means 'soon'; så snart joins a clause — 'as soon as'." },
        { id: "no-u36l3-salenge", type: "vocab", front: "så lenge", reading: "salenge", meaning: "as long as", example: { jp: "Du kan bli her så lenge du vil.", en: "You can stay here as long as you like." }, accept: ["so long as", "while", "for as long as"], drill: { jp: "Bli så lenge du vil", en: "Stay as long as you like" }, hint: "Time, not condition: så lenge du vil = for as long as you want. From lenge, a long time." },
        { id: "no-u36l3-innen", type: "vocab", front: "innen", reading: "innen", meaning: "by", example: { jp: "Du må levere oppgaven innen fredag.", en: "You have to hand in the assignment by Friday." }, accept: ["before", "within", "by the time"], drill: { jp: "Kom innen klokka ni", en: "Come by nine o'clock" }, hint: "innen = by / no later than a deadline. innen fredag, by Friday; before a clause it means 'before': innen du drar." },
        { id: "no-u36l3-inntil", type: "vocab", front: "inntil", reading: "inntil", meaning: "until", example: { jp: "Vi venter her inntil bussen kommer.", en: "We wait here until the bus comes." }, accept: ["up until", "till", "right up to"], drill: { jp: "Bli inntil jeg kommer", en: "Stay until I come" }, hint: "inntil = until (a point), and 'right up against' physically: stolen står inntil veggen. til alone (A1) is 'to'." },
      ],
    },
    {
      id: "no-u36l4",
      unit: 36,
      lesson: 4,
      title: "So that, without, either",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Link clauses for purpose and result and offer alternatives — for at, slik at, uten at, i stedet for, enten, både.",
      items: [
        { id: "no-u36l4-forat", type: "vocab", front: "for at", reading: "forat", meaning: "so that", example: { jp: "Jeg snakker sakte for at alle skal forstå meg.", en: "I speak slowly so that everyone will understand me." }, accept: ["in order that", "so as to"], drill: { jp: "Jeg roper for at du skal høre", en: "I shout so that you'll hear" }, hint: "Purpose with a NEW subject, usually with skal: for at alle skal forstå. When the subject is the same, use for å + infinitive." },
        { id: "no-u36l4-slikat", type: "vocab", front: "slik at", reading: "slikat", meaning: "so that", example: { jp: "Hun forklarte alt på nytt, slik at vi forsto det.", en: "She explained everything again, so that we understood it." }, accept: ["in such a way that", "with the result that"], drill: { jp: "Skriv tydelig slik at alle leser det", en: "Write clearly so that everyone reads it" }, hint: "Result or purpose. slik alone means 'like this / such': slik gjør vi det, that's how we do it." },
        { id: "no-u36l4-utenat", type: "vocab", front: "uten at", reading: "utenat", meaning: "without", example: { jp: "Han gikk ut uten at noen så det.", en: "He went out without anyone seeing it." }, accept: ["without (someone doing)"], drill: { jp: "Hun dro uten at vi visste det", en: "She left without us knowing" }, hint: "uten (without) + at when a clause follows and its subject differs. Same subject: uten å + infinitive — uten å si noe, without saying anything." },
        { id: "no-u36l4-istedetfor", type: "vocab", front: "i stedet for", reading: "istedetfor", meaning: "instead of", example: { jp: "Vi tok toget i stedet for å kjøre bil.", en: "We took the train instead of driving." }, accept: ["rather than", "in place of"], drill: { jp: "Jeg drikker te i stedet for kaffe", en: "I drink tea instead of coffee" }, hint: "From et sted, a place (A1) — literally 'in the place of'. Takes a noun, or å + infinitive: i stedet for å kjøre." },
        { id: "no-u36l4-enten", type: "vocab", front: "enten", reading: "enten", meaning: "either", example: { jp: "Vi kan enten gå på kino eller spise ute.", en: "We can either go to the cinema or eat out." }, accept: ["either ... or"], drill: { jp: "Enten du eller jeg", en: "Either you or me" }, hint: "The pair enten ... eller = either ... or. Do not confuse enten with entré or with 'then' — it is only the 'either' half." },
        { id: "no-u36l4-bade", type: "vocab", front: "både", reading: "bade", meaning: "both", example: { jp: "Hun snakker både norsk og engelsk flytende.", en: "She speaks both Norwegian and English fluently." }, accept: ["both ... and"], drill: { jp: "Både du og jeg", en: "Both you and me" }, hint: "The pair både ... og = both ... and. Written with å: både, folded to bade in the reading." },
      ],
    },
  ],
};
