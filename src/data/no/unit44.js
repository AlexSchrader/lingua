// NO Unit 44 — Sport og trening ("Sport and training") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 5 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 u19 taught the outdoor half of Norwegian leisure — å svømme,
// å fiske, å hoppe, å kaste, en ball, en ski, en tur — as friluftsliv rather
// than as sport. This unit takes organised sport: the match, the people around
// it, where it is played, and how it ends.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// ⚠ TWO FRONTS WERE LOST TO A SIBLING BEFORE A CARD WAS WRITTEN. `å trene` and
// `en pause` are both taught in block 1's u21, which this seat found by screening
// against the sibling BRANCH rather than only the frozen A1 base. Lower slot wins
// (RUNBOOK §4), so both are theirs. `å slå` and `en medalje` took the slots, each
// re-screened against A1, against this block's own 240, and against u21–u40.
// A unit about training that cannot teach `å trene` is the cost of holding the
// highest slots in a band, and it is exactly what the reserve list below is for.
//
// FIRST FEMININE OF THE UNIT is `ei skøyte` (l3) — lessons 1 and 2 have no
// feminine noun at all — and it carries the en-/ei- recognition note §1 requires.
// `en hall` is masculine in Bokmål (hallen), so it is NOT marked ei.
//
// ø IS WRITTEN o IN `reading` (§3): `å løpe` → "alope", `ei skøyte` → "eiskoyte",
// `en øvelse` → "enovelse" (masculine: -else nouns have no feminine option).
//
// ⚠ RESERVE LIST — screened against A1's 480, this block's 240, and the sibling
// A2 branches. Every collision resolves against this block; swap, don't rebuild.
//   l1 folka:      en kaptein · et forbund · en tilskuer
//   l2 å gjøre:    å score · å kaste? NO — A1 u19 · reserves: å hive · å bøye? NO — my u46
//   l3 stedet:     ei løype · et basseng · en garderobe
//   l4 resultat:   et poengtall · ei liste · en runde
//
// SCOPE: examples and drills use A1's 480 plus u41–u43 plus this unit's earlier
// cards. Nothing leans on u21–u40, and nothing uses `som`, `om`, `hele`, `hver`,
// `ute`, `ved`, `mens` or `tid` — all confirmed untaught by
// scripts/scope-strict.mjs.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT44 = {
  id: "no-u44",
  lang: "no",
  title: "Sport og trening",
  order: 44,
  stage: "a2",
  lessons: [
    // Lesson 1: the match and everybody standing round it.
    {
      id: "no-u44l1",
      unit: 44,
      lesson: 1,
      title: "Kampen og folka",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a match — kamp, mål, dommer, publikum, supporter, idrett — and say who is watching and who decides.",
      items: [
        { id: "no-u44l1-enkamp", type: "vocab", front: "en kamp", reading: "enkamp", meaning: "match", example: { jp: "Vi ser en kamp på kino fordi det regner.", en: "We watch a match at the cinema because it is raining." }, drill: { jp: "Det er en kamp i kveld", en: "There is a match tonight" }, accept: ["a game", "a fight", "a contest", "a struggle"], hint: "KAMP. Masculine: definite kampen, plural kamper. A sporting match and a fight or a struggle — en kamp mot sykdom is a fight against illness, the same reach as English \"struggle\"." },
        { id: "no-u44l1-etmal", type: "vocab", front: "et mål", reading: "etmal", meaning: "goal", example: { jp: "Erling lager et mål, og alle blir veldig glade.", en: "Erling scores a goal, and everyone gets very happy." }, drill: { jp: "Det kommer et mål i kampen", en: "A goal comes in the match" }, accept: ["an aim", "a target", "a goal"], hint: "MAWL, with the rounded å. Neuter: definite målet, and the plural is mål, unchanged. Three senses at once: the goal you score, the goal you aim at in life, and a measure. Note å lage et mål — Norwegian MAKES a goal where English scores one." },
        { id: "no-u44l1-endommer", type: "vocab", front: "en dommer", reading: "endommer", meaning: "referee", example: { jp: "En dommer ser alt, men publikum er ofte sint.", en: "A referee sees everything, but the audience is often angry." }, drill: { jp: "En dommer ser på kampen", en: "A referee watches the match" }, accept: ["an umpire", "a judge", "a ref"], hint: "DOM-mer. Masculine: definite dommeren, plural dommere. From å dømme, to judge — the -er ending builds a doer, exactly as it built en lærer from å lære. The same word is a judge in a courtroom." },
        { id: "no-u44l1-etpublikum", type: "vocab", front: "et publikum", reading: "etpublikum", meaning: "audience", example: { jp: "Et publikum blir glad når det kommer et mål.", en: "An audience gets happy when a goal comes." }, drill: { jp: "Det er et publikum på stadion", en: "There is an audience at the stadium" }, accept: ["the public", "a crowd", "spectators"], hint: "pue-BLEE-kum. Neuter: definite publikummet. It is grammatically singular even though it means many people, so both the verb and any adjective stay singular: Publikum er glad, never \"Publikum er glade\"." },
        { id: "no-u44l1-ensupporter", type: "vocab", front: "en supporter", reading: "ensupporter", meaning: "supporter", example: { jp: "En supporter blir sint hvis dommeren ikke ser alt.", en: "A supporter gets angry if the referee does not see everything." }, drill: { jp: "En supporter liker en idrett", en: "A supporter likes a sport" }, accept: ["a fan", "a follower"], hint: "sup-POR-ter. Masculine: definite supporteren, plural supportere. Borrowed straight from English and kept the English sense — a fan of a team, not a person who props something up." },
        { id: "no-u44l1-enidrett", type: "vocab", front: "en idrett", reading: "enidrett", meaning: "sport", example: { jp: "Ski er en idrett alle i Norge kjenner, men ikke alle liker den.", en: "Skiing is a sport everyone in Norway knows, but not everyone likes it." }, drill: { jp: "Ski er en idrett i Norge", en: "Skiing is a sport in Norway" }, accept: ["athletics", "a sport"], hint: "EE-drett. Masculine: definite idretten, plural idretter. The native word, where sport is the borrowed one — both are used, but idrett is what the schools and the clubs call it." },
      ],
    },
    // Lesson 2: what the players actually do. All six are å-verbs, so every
    // drill uses an å-taking frame: a modal would swallow the å.
    {
      id: "no-u44l2",
      unit: 44,
      lesson: 2,
      title: "Å vinne og å tape",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what happens in a match — beat, run, kick, win, lose, compete — and say who won.",
      items: [
        { id: "no-u44l2-asla", type: "vocab", front: "å slå", reading: "asla", meaning: "to beat", example: { jp: "Vi slår Bergen hvis alle spiller godt.", en: "We beat Bergen if everyone plays well." }, drill: { jp: "Det er fint å slå Bergen", en: "It is nice to beat Bergen" }, accept: ["beat", "to hit", "hit", "to strike", "defeat"], hint: "SHLAW, present slår — a one-syllable verb, so the present is the infinitive plus -r. To hit, and to beat an opponent. Å slå på is to switch something on, which is the sense you will meet on a machine." },
        { id: "no-u44l2-alope", type: "vocab", front: "å løpe", reading: "alope", meaning: "to run", example: { jp: "Barna løper på banen etter at kampen er slutt.", en: "The children run on the pitch after the match is over." }, drill: { jp: "Det er godt å løpe i skogen", en: "It is good to run in the forest" }, accept: ["run", "to jog", "jog", "to race"], hint: "LUR-pe, present løper, hand-folded to alope. Å springe means the same thing and is commoner in some dialects; løpe is the standard written word." },
        { id: "no-u44l2-asparke", type: "vocab", front: "å sparke", reading: "asparke", meaning: "to kick", example: { jp: "Han sparker en ball fordi han vil lage et mål.", en: "He kicks a ball because he wants to score a goal." }, drill: { jp: "Det er lett å sparke en ball", en: "It is easy to kick a ball" }, accept: ["kick", "to boot", "to sack"], hint: "SPAR-ke, present sparker. A ball, a door, a stone. Å sparke noen also means to sack somebody from a job — the same joke English makes with \"boot\"." },
        { id: "no-u44l2-avinne", type: "vocab", front: "å vinne", reading: "avinne", meaning: "to win", example: { jp: "Vi vinner en kamp hvis vi lager to mål.", en: "We win a match if we score two goals." }, drill: { jp: "Alle håper å vinne en kamp", en: "Everyone hopes to win a match" }, accept: ["win", "to gain", "gain", "to be victorious"], hint: "VIN-ne, present vinner. En vinner is the winner. Note the drill frame: håper å vinne — after håpe the infinitive keeps its å, where after a modal it would drop." },
        { id: "no-u44l2-atape", type: "vocab", front: "å tape", reading: "atape", meaning: "to lose", example: { jp: "De taper en kamp, men supporterne er glade.", en: "They lose a match, but the supporters are happy." }, drill: { jp: "Ingen liker å tape en kamp", en: "Nobody likes to lose a match" }, accept: ["lose", "to be defeated", "to suffer a loss"], hint: "TAH-pe, present taper. Of a match or of money. Å miste is to lose an OBJECT you cannot find — Norwegian keeps the two apart where English does not." },
        { id: "no-u44l2-akonkurrere", type: "vocab", front: "å konkurrere", reading: "akonkurrere", meaning: "to compete", example: { jp: "Vi konkurrerer i en idrett, og et publikum ser på kampen.", en: "We compete in a sport, and an audience watches the match." }, drill: { jp: "Det er tungt å konkurrere i en idrett", en: "It is hard to compete in a sport" }, accept: ["compete", "to contend", "contend"], hint: "kon-kue-REH-re, stress late. Present konkurrerer. En konkurranse is a competition — a long word, but it behaves regularly all the way through." },
      ],
    },
    // Lesson 3: where sport happens. `ei skøyte` is the unit's first feminine.
    {
      id: "no-u44l3",
      unit: 44,
      lesson: 3,
      title: "Bane og utstyr",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say where sport happens and what you need — bane, hall, skøyte, sykkel, stadion — and say you are climbing.",
      items: [
        { id: "no-u44l3-enbane", type: "vocab", front: "en bane", reading: "enbane", meaning: "pitch", example: { jp: "En bane er våt etter at det har regnet.", en: "A pitch is wet after it has rained." }, drill: { jp: "Barna løper på en bane", en: "The children run on a pitch" }, accept: ["a track", "a court", "a field", "a course"], hint: "BAH-ne. Masculine: definite banen, plural baner. A football pitch, a running track, a tennis court and a railway line are all en bane — the word means a prepared surface you move along." },
        { id: "no-u44l3-enhall", type: "vocab", front: "en hall", reading: "enhall", meaning: "hall", example: { jp: "Vi spiller i en hall når det er et uvær.", en: "We play in a hall when there is bad weather." }, drill: { jp: "Det er en hall i byen", en: "There is a hall in the town" }, accept: ["an arena", "a sports hall", "an indoor arena"], hint: "HALL. Masculine — definite hallen, plural haller — so this one is NOT marked ei. Ei svømmehall is where you swim, and in a country this cold, an indoor hall is where half the season happens." },
        { id: "no-u44l3-eiskoyte", type: "vocab", front: "ei skøyte", reading: "eiskoyte", meaning: "skate", example: { jp: "Barna bruker ei skøyte når isen er tykk.", en: "The children use a skate when the ice is thick." }, drill: { jp: "Det ligger ei skøyte på isen", en: "There is a skate lying on the ice" }, accept: ["an ice skate", "a skate"], hint: "SHOY-te — sk before ø is the broad sh, and the reading folds ø to o: eiskoyte. Feminine: definite skøyta, plural skøyter. You will also see ei skøyte written en skøyte / skøyten; Bokmål allows both, and this course writes ei because ei predicts the -a definite. Å gå på skøyter is to skate." },
        { id: "no-u44l3-ensykkel", type: "vocab", front: "en sykkel", reading: "ensykkel", meaning: "bicycle", example: { jp: "Jeg bruker en sykkel når det er fint vær.", en: "I use a bicycle when the weather is nice." }, drill: { jp: "Det står en sykkel på gulvet", en: "There is a bicycle standing on the floor" }, accept: ["a bike", "a cycle"], hint: "SUEK-kel. Masculine: definite sykkelen, and the plural drops the e: sykler. Å sykle is the verb, built straight off it." },
        { id: "no-u44l3-etstadion", type: "vocab", front: "et stadion", reading: "etstadion", meaning: "stadium", example: { jp: "Et stadion er stort, og et publikum kan sitte godt.", en: "A stadium is big, and an audience can sit comfortably." }, drill: { jp: "Vi går til et stadion", en: "We go to a stadium" }, accept: ["an arena", "a ground", "a stadium"], hint: "STAH-di-on. Neuter: definite stadionet, though many Norwegians say stadion for both. Ullevaal Stadion in Oslo is the one the national lag plays on." },
        { id: "no-u44l3-aklatre", type: "vocab", front: "å klatre", reading: "aklatre", meaning: "to climb", example: { jp: "Vi klatrer i et fjell hvis været er klart.", en: "We climb a mountain if the weather is clear." }, drill: { jp: "Det er tungt å klatre i et fjell", en: "It is hard to climb a mountain" }, accept: ["climb", "to scale", "scale", "to clamber"], hint: "KLAT-re, present klatrer. Rock, tree, ladder. With a country shaped like this one, klatring is a mainstream sport rather than a specialist one." },
      ],
    },
    // Lesson 4: how it ends.
    {
      id: "no-u44l4",
      unit: 44,
      lesson: 4,
      title: "Resultat",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report how it ended — resultat, seier, poeng, rekord, øvelse, medalje — and name an event.",
      items: [
        { id: "no-u44l4-etresultat", type: "vocab", front: "et resultat", reading: "etresultat", meaning: "result", example: { jp: "Et resultat kommer etter at kampen er slutt.", en: "A result comes after the match is over." }, drill: { jp: "Vi venter på et resultat", en: "We wait for a result" }, accept: ["an outcome", "a score", "a finding"], hint: "re-suel-TAHT, stress at the end. Neuter: definite resultatet, plural resultater. A match score, an exam mark, the outcome of anything." },
        { id: "no-u44l4-enseier", type: "vocab", front: "en seier", reading: "enseier", meaning: "victory", example: { jp: "En seier er fin, men en rekord er bedre.", en: "A victory is nice, but a record is better." }, drill: { jp: "Det blir en seier i kveld", en: "There will be a victory tonight" }, accept: ["a win", "a triumph"], hint: "SAY-er. Masculine: definite seieren, plural seire — the plural drops a syllable. Å seire is the verb, though å vinne is what people actually say." },
        { id: "no-u44l4-etpoeng", type: "vocab", front: "et poeng", reading: "etpoeng", meaning: "point", example: { jp: "Vi får et poeng hvis vi ikke taper kampen.", en: "We get a point if we do not lose the match." }, drill: { jp: "Et poeng er ikke mye", en: "One point is not much" }, accept: ["a score", "a mark"], hint: "po-ENG, and the g is barely there. Neuter: definite poenget, and the plural is poeng, unchanged. Also the point of an argument — poenget er at ..., \"the point is that ...\"." },
        { id: "no-u44l4-enrekord", type: "vocab", front: "en rekord", reading: "enrekord", meaning: "record", example: { jp: "Han lager en rekord, og derfor kjenner alle navnet hans.", en: "He sets a record, and that is why everyone knows his name." }, drill: { jp: "Det er en rekord i Norge", en: "There is a record in Norway" }, accept: ["a best", "a record"], hint: "re-KORD. Masculine: definite rekorden, plural rekorder. Only the sporting or statistical sense — a music record is ei plate, and a written record is et register." },
        { id: "no-u44l4-enovelse", type: "vocab", front: "en øvelse", reading: "enovelse", meaning: "event", example: { jp: "En øvelse begynner klokka ti, og alle er klare.", en: "An event starts at ten o'clock, and everyone is ready." }, drill: { jp: "Det er en øvelse i dag", en: "There is an event today" }, accept: ["an exercise", "a discipline", "a drill"], hint: "UR-vel-se, hand-folded to enovelse. Masculine: definite øvelsen, plural øvelser — nouns in -else are masculine in Bokmål with no feminine option, which is why this one is NOT marked ei. Built on å øve, to practise: an exercise you do, and a numbered event at a sports meeting." },
        { id: "no-u44l4-enmedalje", type: "vocab", front: "en medalje", reading: "enmedalje", meaning: "medal", example: { jp: "Hun får en medalje fordi hun vinner en øvelse.", en: "She gets a medal because she wins an event." }, drill: { jp: "Erling vinner en medalje", en: "Erling wins a medal" }, accept: ["a medallion"], hint: "me-DAL-je — lj is an l plus a y sound. Masculine: definite medaljen, plural medaljer. Norway counts them obsessively every February; gull, sølv and bronse are the three." },
      ],
    },
  ],
};
