// NO Unit 9 — Dager og måneder ("Days and months") — A1
// Conventions are declared in no/unit1.js and bind every unit.
//
// THE FROZEN TIME ADVERBIALS LAND HERE. unit1.js §7 pre-authorises exactly four
// fronts — i dag, i morgen, i går, i kveld — as single lexical items, because each
// is otherwise unresolvable (morgen was frozen inside god morgen and never taught
// alone; dag is taught as en dag, so the compound carries a taught noun stripped of
// its article; i går collides with går, the present of å gå). Three of them are in
// lesson 1. **i går is deliberately NOT here — it is the first card of u14l1**,
// because Norwegian cannot use it with a present-tense verb, and u14 is where the
// past tense arrives. Teaching it at u9 would have bought a card the learner could
// not put in a sentence for six units. The licence is not extended any further:
// i natt, i sommer and the rest stay untaught.
//
// WEEKDAYS AND MONTHS ARE TAUGHT BARE — a §1 judgement call, not an oversight.
// unit1.js §1 asks the real question: is the indefinite singular idiomatic for the
// sense being taught? For a weekday it is not. The sense here is the time
// adverbial — på mandag, "on Monday" — and "en mandag" means "one Monday, some
// Monday", which is a different statement. So the front is bare and the hint names
// the gender and definite (en mandag → mandagen). Same for the months.
// AND THE SIBLING LANGUAGES ALREADY SETTLED THIS, IN BOTH DIRECTIONS, BY THIS TEST.
// French — which RUNBOOK §3 item 6 designates as the authority for Latin-script
// encoding conventions — teaches its weekdays BARE (`lundi`, `mardi`). Spanish
// teaches them WITH the article (`el lunes`), because Spanish's time adverbial
// carries one, and teaches its months bare. Two languages, opposite answers, one
// question: what form is the time adverbial in THIS language? Norwegian's is bare,
// so Norwegian's cards are bare. This is not a loosening of unit1.js §1 — it is §1's
// own stated test, applied where block 1 happened not to need it.
//
// FOUR MONTH NAMES, NOT TWELVE. januar, mai, august and desember — one per season,
// each carrying a real sentence. The other eight are near-identical to English and
// are listed in the januar hint; spending eight cards on transparent cognates would
// buy the learner almost nothing, and RUNBOOK §4 warns against exactly that.
//
// NOT TAKEN HERE, AND FLAGGED FOR BLOCK 3: the numbers above ti. Block 1 stops at
// ti and elleve upward is unclaimed. It needs about ten cards and this unit has
// none free, so it belongs in one of block 3's coverage units (u15–u20) rather
// than being fragmented across two blocks.
//
// V2 is modelled hard in this unit, because a time adverbial is the commonest
// thing to front in Norwegian and the inversion it forces is the pattern English
// speakers get wrong: I dag er været bra · I morgen kommer Erling · På mandag
// jobber jeg · I helga er vi i Bergen · Neste uke kommer Kari · I august begynner
// skolen. u12 states the rule; this unit supplies the examples it will point at.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT9 = {
  id: "no-u9",
  lang: "no",
  title: "Dager og måneder",
  order: 9,
  stage: "a1",
  lessons: [
    // Lesson 1: the time frame — today, tomorrow, tonight, week, weekend, next.
    {
      id: "no-u9l1",
      unit: 9,
      lesson: 1,
      title: "Today, tomorrow, tonight",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place something in time — today, tomorrow, tonight, this weekend, next week — and put the verb second when you do.",
      items: [
        { id: "no-u9l1-idag", type: "vocab", front: "i dag", reading: "idag", meaning: "today", example: { jp: "I dag er været bra.", en: "The weather is good today." }, accept: ["this day"], hint: "Two words, always — i dag, never idag. Literally \"in day\". Watch what it does to the sentence: when i dag opens, the verb er comes second and været is pushed behind it." },
        { id: "no-u9l1-imorgen", type: "vocab", front: "i morgen", reading: "imorgen", meaning: "tomorrow", example: { jp: "I morgen kommer Erling.", en: "Erling is coming tomorrow." }, accept: ["the next day"], hint: "Two words again. Do not confuse it with god morgen — same word morgen, different job. \"Tomorrow morning\" is i morgen tidlig." },
        { id: "no-u9l1-ikveld", type: "vocab", front: "i kveld", reading: "ikveld", meaning: "tonight", example: { jp: "Vi spiser middag i kveld.", en: "We are having dinner tonight." }, accept: ["this evening"], hint: "The same kveld as god kveld, in a fixed pair of its own. Norwegian counts the evening as part of today, so i kveld is the evening still ahead of you." },
        { id: "no-u9l1-eiuke", type: "vocab", front: "ei uke", reading: "eiuke", meaning: "week", example: { jp: "Ei uke er sju dager.", en: "A week is seven days." }, accept: ["a week"], hint: "Feminine: ei uke → uka, plural uker. You will also see en uke / uken — Bokmål allows both and print often uses the en form; this course writes ei because ei tells you the definite ends in -a." },
        { id: "no-u9l1-eihelg", type: "vocab", front: "ei helg", reading: "eihelg", meaning: "weekend", example: { jp: "I helga er vi i Bergen.", en: "At the weekend we are in Bergen." }, accept: ["a weekend"], hint: "Feminine: ei helg → helga. i helga is \"at the weekend\", and god helg! is what Norwegians say to each other on a Friday afternoon." },
        { id: "no-u9l1-neste", type: "vocab", front: "neste", reading: "neste", meaning: "next", example: { jp: "Neste uke kommer Kari.", en: "Kari is coming next week." }, accept: ["the next", "following", "coming"], hint: "Never changes shape — neste uke, neste dag, neste år — and it takes no article in front of it: neste uke, not \"ei neste uke\"." },
      ],
    },
    // Lesson 2: Monday to Saturday.
    {
      id: "no-u9l2",
      unit: 9,
      lesson: 2,
      title: "The days of the week",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the days from Monday to Saturday and say which day something happens on: På mandag jobber jeg.",
      items: [
        { id: "no-u9l2-mandag", type: "vocab", front: "mandag", reading: "mandag", meaning: "Monday", example: { jp: "På mandag jobber jeg.", en: "On Monday I work." }, accept: ["on monday"], hint: "Lowercase, always — Norwegian never capitalises a weekday. Taught bare because that is how a day is used: på mandag. As a plain noun it is masculine, en mandag → mandagen, but \"en mandag\" means \"some Monday\", which is a different thing to say. The -dag on the end is the dag you already know." },
        { id: "no-u9l2-tirsdag", type: "vocab", front: "tirsdag", reading: "tirsdag", meaning: "Tuesday", example: { jp: "Er det tirsdag i dag?", en: "Is it Tuesday today?" }, accept: ["on tuesday"], hint: "TEERSH-dag — rs runs together into a sh sound, the same way it does in norsk. Named for Tyr, the Norse war god behind English Tuesday." },
        { id: "no-u9l2-onsdag", type: "vocab", front: "onsdag", reading: "onsdag", meaning: "Wednesday", example: { jp: "På onsdag går vi på kino.", en: "On Wednesday we are going to the cinema." }, accept: ["on wednesday"], hint: "ONS-dag. In ordinary speech the final -g of every weekday goes quiet — manda, tirsda, onsda. Odin's day — the same god is hiding inside English Wednesday." },
        { id: "no-u9l2-torsdag", type: "vocab", front: "torsdag", reading: "torsdag", meaning: "Thursday", example: { jp: "Torsdag er en god dag.", en: "Thursday is a good day." }, accept: ["on thursday"], hint: "TOSH-dag. Thor's day. Notice this example does not invert: torsdag is the subject here, not a time adverbial, so the verb is second because it follows the subject." },
        { id: "no-u9l2-fredag", type: "vocab", front: "fredag", reading: "fredag", meaning: "Friday", example: { jp: "På fredag spiser vi pizza.", en: "On Friday we eat pizza." }, accept: ["on friday"], hint: "Frigg's day. Fredagstaco — Friday tacos — is a real national habit, and fredagspils is the beer that goes with it." },
        { id: "no-u9l2-lordag", type: "vocab", front: "lørdag", reading: "lordag", meaning: "Saturday", example: { jp: "På lørdag er butikken åpen.", en: "On Saturday the shop is open." }, accept: ["on saturday"], hint: "LUR-dag, ø folded to o in the answer key. From laugardagr, \"washing day\" — Saturday was the day you had a bath." },
      ],
    },
    // Lesson 3: Sunday, and the months.
    {
      id: "no-u9l3",
      unit: 9,
      lesson: 3,
      title: "Sunday and the months",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name Sunday and four months, and say what happens in a given month: I august begynner skolen.",
      items: [
        { id: "no-u9l3-sondag", type: "vocab", front: "søndag", reading: "sondag", meaning: "Sunday", example: { jp: "På søndag er butikken stengt.", en: "On Sunday the shop is closed." }, accept: ["on sunday"], hint: "SUN-dag. Sunday closing is law in Norway rather than habit — søndagsstengt. lørdag and søndag together are helga." },
        { id: "no-u9l3-enmaned", type: "vocab", front: "en måned", reading: "enmaned", meaning: "month", example: { jp: "En måned er fire uker.", en: "A month is four weeks." }, accept: ["a month"], hint: "Masculine: en måned → måneden, plural måneder. The d is silent: MAW-ne. Built on måne, the moon — the same idea as English month." },
        { id: "no-u9l3-januar", type: "vocab", front: "januar", reading: "januar", meaning: "January", example: { jp: "I januar snør det mye.", en: "It snows a lot in January." }, accept: ["jan"], hint: "Lowercase, like the weekdays. All twelve are close to English — januar, februar, mars, april, mai, juni, juli, august, september, oktober, november, desember — so learning the pattern here gives you the other eleven." },
        { id: "no-u9l3-mai", type: "vocab", front: "mai", reading: "mai", meaning: "May", example: { jp: "Mai er en god måned.", en: "May is a good month." }, accept: ["may"], hint: "Said MY. The seventeenth of May — 17. mai — is Norway's constitution day: flags, brass bands and children's parades in every town, and by far the biggest day of the year." },
        { id: "no-u9l3-august", type: "vocab", front: "august", reading: "august", meaning: "August", example: { jp: "I august begynner skolen.", en: "School starts in August." }, accept: [], hint: "ow-GUST, with the stress on the second half. The Norwegian school year begins here, after the long summer break." },
        { id: "no-u9l3-desember", type: "vocab", front: "desember", reading: "desember", meaning: "December", example: { jp: "I desember er det mørkt.", en: "In December it is dark." }, accept: ["dec"], hint: "Spelled with s, not c — Norwegian has almost no c of its own. In Oslo the sun is down before four in the afternoon in desember." },
      ],
    },
    // Lesson 4: the four seasons, plus Christmas and the holidays.
    {
      id: "no-u9l4",
      unit: 9,
      lesson: 4,
      title: "The seasons",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the four seasons and say when Christmas and the holidays fall.",
      items: [
        { id: "no-u9l4-envar", type: "vocab", front: "en vår", reading: "envar", meaning: "spring", example: { jp: "I mai er det vår i Norge.", en: "In May it is spring in Norway." }, accept: ["a spring", "springtime", "the spring"], hint: "Masculine: en vår → våren. Careful — vår is also the word for \"our\", spelled exactly the same; only the sentence tells you which one you are reading." },
        { id: "no-u9l4-ensommer", type: "vocab", front: "en sommer", reading: "ensommer", meaning: "summer", example: { jp: "I august er sommeren varm.", en: "In August the summer is warm." }, accept: ["a summer", "summertime", "the summer"], hint: "Masculine: en sommer → sommeren. The double m keeps the o short: SOM-mer. The Norwegian summer is short and taken seriously — much of the country simply stops working through juli." },
        { id: "no-u9l4-enhost", type: "vocab", front: "en høst", reading: "enhost", meaning: "autumn", example: { jp: "Høsten er våt og mørk.", en: "The autumn is wet and dark." }, accept: ["a fall", "fall", "the autumn", "harvest"], hint: "Masculine: en høst → høsten. HURST. The same word is the harvest — høst is both the season and what you bring in during it." },
        { id: "no-u9l4-envinter", type: "vocab", front: "en vinter", reading: "envinter", meaning: "winter", example: { jp: "I januar er vinteren kald.", en: "In January the winter is cold." }, accept: ["a winter", "wintertime", "the winter"], hint: "Masculine: en vinter → vinteren. The standard Norwegian answer to a long winter is a proverb: det finnes ikke dårlig vær, bare dårlige klær — there is no bad weather, only bad clothing." },
        { id: "no-u9l4-eijul", type: "vocab", front: "ei jul", reading: "eijul", meaning: "Christmas", example: { jp: "I desember er det jul.", en: "It is Christmas in December." }, accept: ["a christmas", "yule", "yuletide"], hint: "Feminine: ei jul → jula. Said YOOL — it is the same old word as English Yule, which Norwegian kept when English swapped to Christmas. God jul! is Merry Christmas." },
        { id: "no-u9l4-enferie", type: "vocab", front: "en ferie", reading: "enferie", meaning: "holiday", example: { jp: "Nå har vi ferie.", en: "Now we are on holiday." }, accept: ["a holiday", "vacation", "a vacation", "break", "the holidays"], hint: "Masculine: en ferie → ferien, plural ferier. Three syllables: FEH-ri-e. Norway takes fellesferie — a shared holiday — through most of juli." },
      ],
    },
  ],
};
