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
//
// MERGE, 2026-09-12 (crew lead). It did collide: u29 landed dersom, med mindre,
// ellers, siden, selv om, enda, slik at, enten and både, all at a lower slot, so
// all nine are ceded and deleted here per the runbook's lower-slot-wins rule. The
// nine replacements keep the unit's own subject — clause machinery — and add the
// pair this unit was missing: the INFINITIVE half of each conjunction it teaches
// (for at / for å, uten at / uten å, etter at / etter å ha, plus ved å), with the
// same-subject vs different-subject split named in every hint. som om joins l1
// because the relative som is now taught at u29 and can be built on.
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
      title: "Condition and exception",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Set a condition on a clause, or lift one — i tilfelle, så sant, hvis ikke, uansett, bortsett fra, som om.",
      items: [
        { id: "no-u36l1-itilfelle", type: "vocab", front: "i tilfelle", reading: "itilfelle", meaning: "in case", example: { jp: "Ta med en jakke i tilfelle det blir kaldt i kveld.", en: "Bring a jacket in case it gets cold tonight." }, accept: ["just in case", "in the event that"], drill: { jp: "Ta med penger i tilfelle", en: "Bring money just in case" }, hint: "From et tilfelle, a case. Also used alone at the end: ...i tilfelle, 'just in case'." },
        { id: "no-u36l1-sasant", type: "vocab", front: "så sant", reading: "sasant", meaning: "provided that", example: { jp: "Vi drar på tur så sant været er fint.", en: "We'll go on a hike as long as the weather is nice." }, accept: ["as long as", "so long as", "if"], drill: { jp: "Vi kommer så sant vi kan", en: "We'll come as long as we can" }, hint: "Literally 'so true' — sant is the neuter of sann, true. A condition you expect to hold." },
        { id: "no-u36l1-hvisikke", type: "vocab", front: "hvis ikke", reading: "hvisikke", meaning: "if not", example: { jp: "Skynd deg, hvis ikke kommer vi for sent på skolen.", en: "Hurry up, otherwise we'll be too late for school." }, accept: ["otherwise", "if you don't", "or else"], drill: { jp: "Hvis ikke går vi nå", en: "Otherwise we are leaving now" }, hint: "hvis (A1) + ikke. Standing alone it means 'if not / otherwise', and the clause after it inverts: hvis ikke KOMMER vi for sent." },
        { id: "no-u36l1-uansett", type: "vocab", front: "uansett", reading: "uansett", meaning: "regardless", example: { jp: "Vi drar på tur uansett hva været sier.", en: "We're going on a hike regardless of what the weather says." }, accept: ["no matter what", "anyway", "in any case"], drill: { jp: "Vi drar uansett", en: "We are going anyway" }, hint: "u-an-SETT. It dismisses whatever follows: uansett hva, uansett når. Alone at the end of a sentence it means `anyway`." },
        { id: "no-u36l1-bortsettfra", type: "vocab", front: "bortsett fra", reading: "bortsettfra", meaning: "apart from", example: { jp: "Alle kom bortsett fra broren min, som var syk.", en: "Everyone came apart from my brother, who was ill." }, accept: ["except for", "other than", "besides"], drill: { jp: "Alle kom bortsett fra Kari", en: "Everyone came apart from Kari" }, hint: "bort (away) + sett (seen) + fra. It takes a noun: bortsett fra deg. For a whole clause, say bortsett fra at." },
        { id: "no-u36l1-somom", type: "vocab", front: "som om", reading: "somom", meaning: "as if", example: { jp: "Det ser ut som om det blir regn i kveld.", en: "It looks as if it's going to rain tonight." }, accept: ["as though", "like (as if)"], drill: { jp: "Han snakker som om han vet alt", en: "He talks as if he knows everything" }, hint: "som (u29) + om. Always about something that may not be true. Inside the clause the subject keeps its place before the verb." },
      ],
    },
    {
      id: "no-u36l2",
      unit: 36,
      lesson: 2,
      title: "Because and even though",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a reason, grant a point, or restate it — ettersom, på grunn av, takket være, til tross for, det vil si.",
      items: [
        { id: "no-u36l2-ettersom", type: "vocab", front: "ettersom", reading: "ettersom", meaning: "as", example: { jp: "Ettersom det er sent, går vi hjem nå.", en: "As it's late, we're going home now." }, accept: ["since", "seeing that", "because"], drill: { jp: "Vi drar ettersom det er sent", en: "We are off as it is late" }, hint: "A slightly formal siden, for a reason. Built on etter, after." },
        { id: "no-u36l2-pagrunnav", type: "vocab", front: "på grunn av", reading: "pagrunnav", meaning: "because of", example: { jp: "Vi går ikke ut på grunn av det dårlige været.", en: "We're not going out because of the bad weather." }, accept: ["due to", "owing to"], drill: { jp: "Toget er sent på grunn av snø", en: "The train is late because of snow" }, hint: "på grunn av + a noun (from en grunn, a reason); fordi (A1) + a whole clause. Often shortened to pga. in writing." },
        { id: "no-u36l2-takketvaere", type: "vocab", front: "takket være", reading: "takketvaere", meaning: "thanks to", example: { jp: "Takket være læreren forstår jeg norsk nå.", en: "Thanks to the teacher, I understand Norwegian now." }, accept: ["owing to", "because of (positive)"], drill: { jp: "Takket være deg er alt bra", en: "Thanks to you everything is fine" }, hint: "The positive på grunn av — it credits a good outcome. From å takke, to thank, plus være, to be." },
        { id: "no-u36l2-tiltrossfor", type: "vocab", front: "til tross for", reading: "tiltrossfor", meaning: "despite", example: { jp: "Til tross for regnet gikk vi en lang tur i skogen.", en: "Despite the rain we went for a long walk in the forest." }, accept: ["in spite of", "notwithstanding"], drill: { jp: "Vi gikk ut til tross for regnet", en: "We went out despite the rain" }, hint: "Takes a noun, like på grunn av: til tross for regnet. For a clause, u29's selv om does the job. This one is heavier and more written." },
        { id: "no-u36l2-detvilsi", type: "vocab", front: "det vil si", reading: "detvilsi", meaning: "that is", example: { jp: "Vi møtes i helga, det vil si lørdag eller søndag.", en: "We're meeting at the weekend, that is Saturday or Sunday." }, accept: ["i.e.", "in other words", "meaning"], drill: { jp: "Vi kommer sent det vil si etter åtte", en: "We are coming late that is after eight" }, hint: "Written dvs. It says the same thing again in plainer words. Literally `that will say`." },
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
        { id: "no-u36l3-da", type: "vocab", front: "da", reading: "da", meaning: "when (past)", example: { jp: "Da jeg var ung, likte jeg å bo i en liten by.", en: "When I was young, I liked living in a small town." }, accept: ["when", "as", "then"], drill: { jp: "Alle var hjemme da jeg kom", en: "Everyone was at home when I arrived" }, hint: "da for a SINGLE moment in the past; når (A1) for something repeated or future. This split is one of the classic Norwegian tests." },
        { id: "no-u36l3-etterat", type: "vocab", front: "etter at", reading: "etterat", meaning: "after (a whole clause)", example: { jp: "Etter at vi kom hjem, gikk vi en tur.", en: "After we got home, we went for a walk." }, accept: ["after", "once"], drill: { jp: "Vi spiste etter at han kom", en: "We ate after he came" }, hint: "etter (A1) + at joins a clause; etter alone takes a noun: etter middag. Fronting inverts: Etter at vi spiste, GIKK vi." },
        { id: "no-u36l3-sasnart", type: "vocab", front: "så snart", reading: "sasnart", meaning: "as soon as", example: { jp: "Ring meg så snart du kommer hjem.", en: "Call me as soon as you get home." }, accept: ["the moment", "right after"], drill: { jp: "Vi drar så snart du kommer", en: "We leave as soon as you come" }, hint: "snart alone (A1) means 'soon'; så snart joins a clause — 'as soon as'." },
        { id: "no-u36l3-salenge", type: "vocab", front: "så lenge", reading: "salenge", meaning: "as long as (in time)", example: { jp: "Du kan bli her så lenge du vil.", en: "You can stay here as long as you like." }, accept: ["as long as", "so long as", "while", "for as long as"], drill: { jp: "Bli så lenge du vil", en: "Stay as long as you like" }, hint: "Time, not condition: så lenge du vil = for as long as you want. From lenge, a long time." },
        { id: "no-u36l3-innen", type: "vocab", front: "innen", reading: "innen", meaning: "by", example: { jp: "Du må levere oppgaven innen fredag.", en: "You have to hand in the assignment by Friday." }, accept: ["before", "within", "by the time"], drill: { jp: "Kom innen klokka ni", en: "Come by nine o'clock" }, hint: "innen = by / no later than a deadline. innen fredag, by Friday; before a clause it means 'before': innen du drar." },
        { id: "no-u36l3-inntil", type: "vocab", front: "inntil", reading: "inntil", meaning: "until", example: { jp: "Vi venter her inntil bussen kommer.", en: "We wait here until the bus comes." }, accept: ["up until", "till", "right up to"], drill: { jp: "Bli inntil jeg kommer", en: "Stay until I come" }, hint: "inntil = until (a point), and 'right up against' physically: stolen står inntil veggen. til alone (A1) is 'to'." },
      ],
    },
    {
      id: "no-u36l4",
      unit: 36,
      lesson: 4,
      title: "Purpose, method and the infinitive",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say why something is done, and how — for at, uten at, i stedet for, for å, uten å, etter å ha, ved å.",
      items: [
        { id: "no-u36l4-forat", type: "vocab", front: "for at", reading: "forat", meaning: "so that (on purpose)", example: { jp: "Jeg snakker sakte for at alle skal forstå meg.", en: "I speak slowly so that everyone will understand me." }, accept: ["so that", "in order that"], drill: { jp: "Jeg sier det for at du skal høre", en: "I say it so that you will hear" }, hint: "Purpose with a NEW subject, usually with skal: for at alle skal forstå. When the subject is the same, use for å + infinitive." },
        { id: "no-u36l4-utenat", type: "vocab", front: "uten at", reading: "utenat", meaning: "without", example: { jp: "Han gikk ut uten at noen så det.", en: "He went out without anyone seeing it." }, accept: ["without (someone doing)"], drill: { jp: "Hun gikk uten at vi så det", en: "She left without us seeing it" }, hint: "uten (without) + at when a clause follows and its subject differs. Same subject: uten å + infinitive — uten å si noe, without saying anything." },
        { id: "no-u36l4-istedetfor", type: "vocab", front: "i stedet for", reading: "istedetfor", meaning: "instead of", example: { jp: "Vi bruker toget i stedet for å kjøre bil.", en: "We use the train instead of driving." }, accept: ["rather than", "in place of"], drill: { jp: "Jeg drikker vann i stedet for melk", en: "I drink water instead of milk" }, hint: "From et sted, a place (A1) — literally 'in the place of'. Takes a noun, or å + infinitive: i stedet for å kjøre." },
        { id: "no-u36l4-fora", type: "vocab", front: "for å", reading: "fora", meaning: "in order to", example: { jp: "Jeg står opp tidlig for å rekke bussen.", en: "I get up early in order to catch the bus." }, accept: ["to (in order to)", "so as to"], drill: { jp: "Jeg jobber for å tjene penger", en: "I work in order to earn money" }, hint: "for å + infinitive, when the subject is the same in both halves: jeg sparer for å reise. A different subject needs for at, above." },
        { id: "no-u36l4-utena", type: "vocab", front: "uten å", reading: "utena", meaning: "without doing", example: { jp: "Han gikk ut uten å si noe til oss.", en: "He went out without saying anything to us." }, accept: ["without -ing"], drill: { jp: "Han går uten å si noe", en: "He leaves without saying anything" }, hint: "uten å + infinitive, same subject throughout. A different subject takes uten at, above — the same split as for å / for at." },
        { id: "no-u36l4-etteraha", type: "vocab", front: "etter å ha", reading: "etteraha", meaning: "after having", example: { jp: "Etter å ha spist middag gikk vi en tur i parken.", en: "After having eaten dinner we went for a walk in the park." }, accept: ["after -ing", "having"], drill: { jp: "Etter å ha spist ble han trøtt", en: "After having eaten he got tired" }, hint: "etter å ha + the participle: etter å ha spist. Same subject as the main clause; otherwise use etter at, above." },
        { id: "no-u36l4-veda", type: "vocab", front: "ved å", reading: "veda", meaning: "by doing", example: { jp: "Du lærer norsk ved å snakke med naboene dine.", en: "You learn Norwegian by talking to your neighbours." }, accept: ["by -ing", "through"], drill: { jp: "Han lærer norsk ved å lese", en: "He learns Norwegian by reading" }, hint: "ved å + infinitive names the METHOD: ved å øve. Not the same as med, which takes a noun." },
      ],
    },
  ],
};
