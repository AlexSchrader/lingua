// DE Unit 104 — Erzählung und Bericht (slot: media-narrative) — B2
// Block 2 of German B2 (u101–u113). Conventions: de/unit1.js and de/unit51.js.
//
// RETITLED AND RETHEMED. The scaffold says "Media and narrative"; B1 already owns
// the media APPARATUS (u64 "Medien und Unterhaltung": die Sendung, der Sender,
// das Drehbuch, die Handlung, der Regisseur, die Schlagzeile, die Reportage) and
// the press as an institution (u55: der Bericht, die Quelle, die Presse, die
// Redaktion, veröffentlichen). What is missing is the B2 half: how a story is
// BUILT (l1), how an event is reported (l2), the adverbs a critic uses for HOW it
// was told (l3), and what a report does to its reader (l4).
//
// die Erzählung is derived from erzählen (u29) and die Darstellung from
// darstellen. Both are ordinary B2 nominalisation, not accidental duplicates —
// but they are named here so the crew lead can overrule if it disagrees.
// FREE: Anna, Lena, Thomas, Figuren, Zeugen, Augenzeugen, Details, Reporter, Video, Videos, Fotos
export const DE_UNIT104 = {
  id: "de-u104",
  lang: "de",
  title: "Erzählung und Bericht",
  order: 104,
  stage: "b2",
  lessons: [
    {
      id: "de-u104l1",
      unit: 104,
      lesson: 1,
      title: "Wie eine Geschichte gebaut ist",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the shape of a story: the narrative, a character, the climax, a twist, the punchline, the course it takes.",
      items: [
        { id: "de-u104l1-dieerzahlung", type: "vocab", front: "die Erzählung", reading: "dieerzahlung", meaning: "the narrative", example: { jp: "Die Erzählung beginnt am Ende und geht dann zurück, was am Anfang schwer zu verstehen ist.", en: "The narrative begins at the end and then goes back, which is hard to understand at the start." }, drill: { jp: "Die Erzählung beginnt mitten im Streit", en: "The narrative begins in the middle of the argument" }, accept: ["narrative", "the narrative", "the story as told", "the tale", "the account"], hint: "erzählen (u29) made into a noun. die Geschichte (u59) is WHAT happened; die Erzählung is how it is told." },
        { id: "de-u104l1-diefigur", type: "vocab", front: "die Figur", reading: "diefigur", meaning: "the character in a story", example: { jp: "Keine Figur in dem Buch ist ganz gut oder ganz schlecht, und deshalb glaubt man ihnen.", en: "No character in the book is entirely good or entirely bad, and that is why you believe them." }, drill: { jp: "Die Figur bleibt bis zum Ende unklar", en: "The character stays unclear until the end" }, accept: ["character in a story", "the character in a story", "the character", "the figure"], hint: "Stress the end: fi-GUR. der Held (u64) is the main one; jede Figur is anyone in the book." },
        { id: "de-u104l1-derhohepunkt", type: "vocab", front: "der Höhepunkt", reading: "derhohepunkt", meaning: "the climax", example: { jp: "Der Höhepunkt kommt erst in der letzten halben Stunde, und bis dahin passiert wenig.", en: "The climax does not come until the last half hour, and little happens before then." }, drill: { jp: "Der Höhepunkt kommt viel zu spät", en: "The climax comes far too late" }, accept: ["climax", "the climax", "the high point", "the peak", "the highlight"], hint: "die Höhe + der Punkt. Used for a story, a career and an evening out." },
        { id: "de-u104l1-diewendung", type: "vocab", front: "die Wendung", reading: "diewendung", meaning: "the twist", example: { jp: "Nach der Wendung in der Mitte liest man das ganze Buch mit anderen Augen.", en: "After the twist in the middle you read the whole book with different eyes." }, drill: { jp: "Die Wendung kam für alle überraschend", en: "The twist came as a surprise to everyone" }, accept: ["twist", "the twist", "the turn", "the turning point", "the change of direction"], hint: "wenden, to turn. The same noun also means a set phrase — eine feste Wendung (u111)." },
        { id: "de-u104l1-diepointe", type: "vocab", front: "die Pointe", reading: "diepointe", meaning: "the punchline", example: { jp: "Wer die Pointe schon kennt, lacht nicht mehr, so gut sie auch ist.", en: "Anyone who already knows the punchline no longer laughs, however good it is." }, drill: { jp: "Die Pointe kommt immer zum Schluss", en: "The punchline always comes at the end" }, accept: ["punchline", "the punchline", "the point of the joke", "the payoff", "the sting in the tail"], hint: "French, and German keeps the sound: po-EN-te. The one sentence a whole joke was built for." },
        { id: "de-u104l1-derverlauf", type: "vocab", front: "der Verlauf", reading: "derverlauf", meaning: "the course of events", example: { jp: "Im Verlauf des Buches ändert sich die Figur so stark, dass man sie am Ende kaum wiedererkennt.", en: "In the course of the book the character changes so much that you barely recognise her at the end." }, drill: { jp: "Der Verlauf war von Anfang an klar", en: "The course of events was clear from the start" }, accept: ["course of events", "the course of events", "the course", "the progression", "the way it unfolded"], hint: "verlaufen, to run its course. A Krankheit, a Gespräch and a Geschichte all have einen Verlauf." },
      ],
    },
    {
      id: "de-u104l2",
      unit: 104,
      lesson: 2,
      title: "Melden und berichten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report an incident the way a news desk does: a news item, an eyewitness, an account, an incident, the sequence of events, the coverage.",
      items: [
        { id: "de-u104l2-diemeldung", type: "vocab", front: "die Meldung", reading: "diemeldung", meaning: "the news item", example: { jp: "Die erste Meldung war kurz und ohne Namen, denn die Presse wusste noch fast nichts.", en: "The first news item was short and without names, because the press still knew almost nothing." }, drill: { jp: "Die Meldung kam um sechs Uhr", en: "The news item came at six o'clock" }, accept: ["news item", "the news item", "the report", "the bulletin", "the notification"], hint: "melden, to report in. Shorter than der Bericht (u55): a Meldung is three sentences on the hour." },
        { id: "de-u104l2-deraugenzeuge", type: "vocab", front: "der Augenzeuge", reading: "deraugenzeuge", meaning: "the eyewitness", example: { jp: "Der Augenzeuge hat alles gesehen, aber seine Aussage passt nicht zu den Fotos.", en: "The eyewitness saw everything, but his statement does not match the photos." }, drill: { jp: "Der Augenzeuge stand direkt daneben", en: "The eyewitness was standing right beside it" }, accept: ["eyewitness", "the eyewitness", "the witness who saw it", "the observer"], hint: "das Auge (u11) + der Zeuge (u75). A Zeuge may have only heard; ein Augenzeuge saw." },
        { id: "de-u104l2-diedarstellung", type: "vocab", front: "die Darstellung", reading: "diedarstellung", meaning: "the account given", example: { jp: "Nach der Darstellung der Firma war niemand in Gefahr, aber die Zeugen sagen etwas anderes.", en: "According to the firm's account nobody was in danger, but the witnesses say something different." }, drill: { jp: "Die Darstellung der Firma war falsch", en: "The firm's account was wrong" }, accept: ["account given", "the account given", "the version of events", "the presentation", "the depiction"], hint: "darstellen, to set something out. Always somebody's version — nach Darstellung der Polizei." },
        { id: "de-u104l2-dervorfall", type: "vocab", front: "der Vorfall", reading: "dervorfall", meaning: "the incident", example: { jp: "Über den Vorfall in der Schule hat zuerst niemand gesprochen, und erst nach einer Woche kam eine Meldung.", en: "At first nobody spoke about the incident at the school, and only after a week did a news item appear." }, drill: { jp: "Der Vorfall liegt drei Wochen zurück", en: "The incident was three weeks ago" }, accept: ["incident", "the incident", "the occurrence", "the episode"], hint: "vor + fallen: something that fell out in front of people. Neutral — it does not say how bad it was." },
        { id: "de-u104l2-derhergang", type: "vocab", front: "der Hergang", reading: "derhergang", meaning: "the sequence of events", example: { jp: "Den Hergang konnte die Polizei erst nach vielen Gesprächen mit den Zeugen genau zeigen.", en: "Only after many conversations with the witnesses could the police set out exactly how it happened." }, drill: { jp: "Der Hergang ist bis heute unklar", en: "The sequence of events is unclear to this day" }, accept: ["sequence of events", "the sequence of events", "how it happened", "the course of the incident", "the circumstances"], hint: "her + gehen: how the thing came to pass, step by step. The word the Polizei uses." },
        { id: "de-u104l2-dieberichterstattung", type: "vocab", front: "die Berichterstattung", reading: "dieberichterstattung", meaning: "the coverage", example: { jp: "Die Berichterstattung war so laut, dass die Familie ihre Wohnung nicht mehr ohne Reporter erreichen konnte.", en: "The coverage was so loud that the family could no longer reach their flat without reporters." }, drill: { jp: "Die Berichterstattung dauerte mehrere Wochen", en: "The coverage lasted several weeks" }, accept: ["coverage", "the coverage", "the reporting", "the news coverage"], hint: "der Bericht (u55) + erstatten, to render. Long, but it is one fixed word and you will meet it daily." },
      ],
    },
    {
      id: "de-u104l3",
      unit: 104,
      lesson: 3,
      title: "Wie es erzählt wird",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge HOW something was told: sober, vivid, detailed, matter-of-fact, one-sided, distorted.",
      items: [
        { id: "de-u104l3-nuchtern", type: "vocab", front: "nüchtern", reading: "nuchtern", meaning: "sober in tone", example: { jp: "Der Bericht bleibt nüchtern, obwohl der Vorfall selbst furchtbar war.", en: "The report stays sober, although the incident itself was terrible." }, drill: { jp: "Der Bericht bleibt angenehm nüchtern", en: "The report stays pleasantly sober" }, accept: ["sober in tone", "sober", "matter-of-fact", "level-headed", "unemotional", "not having eaten"], hint: "Two senses, both alive: nüchtern zum Arzt means with an empty stomach; ein nüchterner Bericht has no feeling in it." },
        { id: "de-u104l3-anschaulich", type: "vocab", front: "anschaulich", reading: "anschaulich", meaning: "vivid", example: { jp: "Sie hat den Hergang so anschaulich erzählt, dass alle im Zimmer das Bild vor Augen hatten.", en: "She told the sequence of events so vividly that everyone in the room had the picture before their eyes." }, drill: { jp: "Die Studie erklärt das sehr anschaulich", en: "The study explains it very vividly" }, accept: ["vivid", "vividly", "graphic", "easy to picture", "illustrative"], hint: "anschauen, to look at. Language you can SEE — the opposite of abstrakt." },
        { id: "de-u104l3-ausfuhrlich", type: "vocab", front: "ausführlich", reading: "ausfuhrlich", meaning: "in full detail", example: { jp: "Der Zeuge hat ausführlich geantwortet, und die Aussage war am Ende zwanzig Seiten lang.", en: "The witness answered in full detail, and the statement was twenty pages long in the end." }, drill: { jp: "Die Zeitung berichtet heute sehr ausführlich", en: "The newspaper reports in great detail today" }, accept: ["in full detail", "detailed", "in detail", "at length", "thorough"], hint: "ausführen, to carry out fully. Its opposite in a newsroom is kurz." },
        { id: "de-u104l3-sachlich", type: "vocab", front: "sachlich", reading: "sachlich", meaning: "objective", example: { jp: "Im Streit ist es schwer, sachlich zu bleiben, aber genau das erwartet die Redaktion.", en: "In an argument it is hard to stay objective, but that is exactly what the editorial office expects." }, drill: { jp: "Bleiben wir bitte ganz sachlich", en: "Let us please stay completely objective" }, accept: ["objective", "objectively", "factual", "matter-of-fact", "impersonal"], hint: "die Sache (u15) + -lich: sticking to the thing itself. nüchtern is about TONE; sachlich is about content." },
        { id: "de-u104l3-einseitig", type: "vocab", front: "einseitig", reading: "einseitig", meaning: "one-sided", example: { jp: "Die Berichterstattung war einseitig, weil die Presse nur mit einer Partei gesprochen hat.", en: "The coverage was one-sided, because the press spoke only to one party." }, drill: { jp: "Die Darstellung ist eindeutig einseitig", en: "The account is clearly one-sided" }, accept: ["one-sided", "biased", "partial", "slanted"], hint: "eine Seite (u33) + -ig. Not a lie — just only half the room." },
        { id: "de-u104l3-verzerrt", type: "vocab", front: "verzerrt", reading: "verzerrt", meaning: "distorted", example: { jp: "Ein kurzes Video ohne den Anfang zeigt den Hergang verzerrt, auch wenn jedes Bild echt ist.", en: "A short video without the beginning shows the sequence of events in a distorted way, even if every picture is genuine." }, drill: { jp: "Das Bild wirkt hier stark verzerrt", en: "The picture seems badly distorted here" }, accept: ["distorted", "warped", "skewed", "misrepresented"], hint: "verzerren, to pull out of shape. A face, a sound and a Statistik can all be verzerrt." },
      ],
    },
    {
      id: "de-u104l4",
      unit: 104,
      lesson: 4,
      title: "Wirkung und Wahrheit",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Weigh what a report does to its reader: the effect, a sensation, sensationalist, a false report, research, a commentary.",
      items: [
        { id: "de-u104l4-diewirkung", type: "vocab", front: "die Wirkung", reading: "diewirkung", meaning: "the effect", example: { jp: "Die Wirkung von einem Bild ist oft stärker als die Wirkung von tausend Wörtern.", en: "The effect of one picture is often stronger than the effect of a thousand words." }, drill: { jp: "Die Wirkung war stärker als erwartet", en: "The effect was stronger than expected" }, accept: ["effect", "the effect", "the impact", "the influence"], hint: "wirken (u31) as a noun. die Folge (u52) comes AFTER; die Wirkung is what the thing DOES." },
        { id: "de-u104l4-diesensation", type: "vocab", front: "die Sensation", reading: "diesensation", meaning: "the sensational story", example: { jp: "Aus einem kleinen Vorfall hat die Zeitung eine Sensation gemacht, und danach war die Stadt voll von Reportern.", en: "The newspaper turned a small incident into a sensation, and after that the town was full of reporters." }, drill: { jp: "Die Sensation hielt genau zwei Tage", en: "The sensation lasted exactly two days" }, accept: ["sensational story", "the sensational story", "the sensation", "the scoop"], hint: "German says zenza-TSI-on, and it is a noun of the press, not of feeling." },
        { id: "de-u104l4-reisserisch", type: "vocab", front: "reißerisch", reading: "reisserisch", meaning: "sensationalist", example: { jp: "Die Schlagzeile war so reißerisch, dass der Beitrag darunter sie gar nicht halten konnte.", en: "The headline was so sensationalist that the article beneath it could not live up to it at all." }, drill: { jp: "Die Schlagzeile war ziemlich reißerisch", en: "The headline was pretty sensationalist" }, accept: ["sensationalist", "lurid", "sensational", "hyped-up", "clickbait"], hint: "reißen, to rip: writing that rips your attention away. ß, so the reading is written with ss." },
        { id: "de-u104l4-diefalschmeldung", type: "vocab", front: "die Falschmeldung", reading: "diefalschmeldung", meaning: "the false report", example: { jp: "Die Falschmeldung stand zwei Stunden im Netz, aber gelesen haben sie eine Million Menschen.", en: "The false report was online for two hours, but a million people read it." }, drill: { jp: "Die Falschmeldung war schnell wieder weg", en: "The false report was quickly gone again" }, accept: ["false report", "the false report", "the fake news story", "the incorrect report", "the canard"], hint: "falsch (u20) + die Meldung. Not the same as a Lüge: a Falschmeldung can be an honest mistake." },
        { id: "de-u104l4-dierecherche", type: "vocab", front: "die Recherche", reading: "dierecherche", meaning: "the journalistic research", example: { jp: "Die Recherche hat zwei Jahre gedauert, und erst danach hat die Redaktion den Bericht veröffentlicht.", en: "The research took two years, and only afterwards did the editorial office publish the report." }, drill: { jp: "Die Recherche dauerte fast zwei Jahre", en: "The research took almost two years" }, accept: ["journalistic research", "the journalistic research", "the research", "the investigation", "the digging"], hint: "French again: re-SCHER-sche. die Forschung (u34) is science; die Recherche is a reporter with a telephone." },
        { id: "de-u104l4-derkommentar", type: "vocab", front: "der Kommentar", reading: "derkommentar", meaning: "the opinion piece", example: { jp: "Der Kommentar steht neben dem Bericht, damit der Leser sieht, wo die Meinung anfängt.", en: "The opinion piece stands beside the report, so that the reader sees where the opinion begins." }, drill: { jp: "Der Kommentar steht auf Seite zwei", en: "The opinion piece is on page two" }, accept: ["opinion piece", "the opinion piece", "the commentary", "the comment", "the editorial"], hint: "Stress the end: komen-TAR. In a German paper it is marked as one, on purpose." },
      ],
    },
  ],
};
