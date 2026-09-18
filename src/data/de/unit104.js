// DE Unit 104 — Medien und Erzählung ("Media and narrative") — B2 (slot: media-narrative)
// THEME CONTRACT (block 2, u101–u113): this unit owns HOW a story is made and told —
// research and reporting (l1), narrative and point of view (l2), sharpening and staging
// (l3), reach and outrage (l4). The media the learner consumes (Sendung, Kanal, Serie,
// Schlagzeile, Publikum) belongs to u35/u45/u55/u64 and is used here, not re-taught.
// Evidence and source-criticism words (Quelle, Beleg, belegen) are block 1's u89.
// Conventions: front = real orthography, reading = its ASCII fold (ä→a, ö→o, ü→u, ß→ss).
export const DE_UNIT104 = {
  id: "de-u104",
  lang: "de",
  title: "Medien und Erzählung",
  order: 104,
  stage: "b2",
  lessons: [
    {
      id: "de-u104l1",
      unit: 104,
      lesson: 1,
      title: "Recherche und Meldung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a piece of news comes about: the digging behind it, the short factual item, the opinion piece beside it, and whether the outlet is a serious one.",
      items: [
        { id: "de-u104l1-dierecherche", type: "vocab", front: "die Recherche", reading: "dierecherche", meaning: "investigative research (for a story)", example: { jp: "Die Recherche hat ein halbes Jahr gedauert, der Text war am Ende zwei Seiten lang.", en: "The research took half a year; the piece was two pages long in the end." }, drill: { jp: "Die Recherche hat ein Jahr gedauert", en: "The research took a year" }, accept: ["research", "investigation", "investigative research", "enquiry"], hint: "French loan, pronounced re-SHERSH. Journalistic digging — academic work is die Forschung (u34) instead." },
        { id: "de-u104l1-daszitat", type: "vocab", front: "das Zitat", reading: "daszitat", meaning: "quotation (someone else's words, reproduced)", example: { jp: "Ein Zitat ohne den Satz davor kann fast alles bedeuten.", en: "A quotation without the sentence before it can mean almost anything." }, drill: { jp: "Das Zitat stammt aus einem alten Brief", en: "The quotation comes from an old letter" }, accept: ["quotation", "quote", "citation"], hint: "Zitieren is the verb. In German journalism the argument is usually about the Zitat im Kontext — the quote with its surroundings." },
        { id: "de-u104l1-diemeldung", type: "vocab", front: "die Meldung", reading: "diemeldung", meaning: "news item (short factual report)", example: { jp: "Am Morgen war es nur eine kurze Meldung, am Abend stand es überall.", en: "In the morning it was only a short news item; by evening it was everywhere." }, drill: { jp: "Die Meldung kam sehr früh am Morgen", en: "The news item came very early in the morning" }, accept: ["news item", "report", "news flash", "notice"], hint: "From melden, to report. Short and factual; der Bericht (u55) is the longer, worked-out piece." },
        { id: "de-u104l1-derjournalist", type: "vocab", front: "der Journalist", reading: "derjournalist", meaning: "journalist", example: { jp: "Der Journalist hat mit zwanzig Leuten gesprochen und keinen Namen genannt.", en: "The journalist spoke with twenty people and named nobody." }, drill: { jp: "Der Journalist nennt keine einzige Quelle", en: "The journalist names not a single source" }, accept: ["journalist", "reporter"], hint: "Pronounced the French way: zhoor-na-LIST. Weak noun — den Journalisten, dem Journalisten. Female: die Journalistin." },
        { id: "de-u104l1-derkommentar", type: "vocab", front: "der Kommentar", reading: "derkommentar", meaning: "opinion piece (signed commentary)", example: { jp: "Der Kommentar steht neben der Meldung, damit man beide auseinanderhalten kann.", en: "The opinion piece stands next to the news item so that the two can be told apart." }, drill: { jp: "Der Kommentar steht neben der Meldung", en: "The opinion piece stands next to the news item" }, accept: ["commentary", "opinion piece", "comment", "editorial"], hint: "In a paper it is a signed opinion. Online it is also the reader's comment below the text — same word, other floor." },
        { id: "de-u104l1-serios", type: "vocab", front: "seriös", reading: "serios", meaning: "reputable (to be taken seriously)", example: { jp: "Eine seriöse Zeitung schreibt auch dann nichts, wenn die Geschichte gut klingt, aber niemand sie bestätigt.", en: "A reputable paper writes nothing even when the story sounds good but nobody confirms it." }, drill: { jp: "Diese Zeitung gilt als besonders seriös", en: "This paper counts as particularly reputable" }, accept: ["reputable", "serious", "respectable", "trustworthy"], hint: "False friend trap: seriös is about reliability, not about being solemn. A funny paper can be seriös; a boring one may not be." },
      ],
    },
    {
      id: "de-u104l2",
      unit: 104,
      lesson: 2,
      title: "Erzählen und darstellen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Analyse how a story is built: whose account it is, who appears in it, how events run, and from which point of view it is told.",
      items: [
        { id: "de-u104l2-dieerzahlung", type: "vocab", front: "die Erzählung", reading: "dieerzahlung", meaning: "narrative (the account being told)", example: { jp: "Beide Seiten haben ihre eigene Erzählung, und die Fakten passen in beide.", en: "Both sides have their own narrative, and the facts fit into both." }, drill: { jp: "Die Erzählung der Gegenseite klingt anders", en: "The other side's narrative sounds different" }, accept: ["narrative", "account", "story", "tale"], hint: "Also a literary form — a short story. In media talk it is the narrative, the shape a side gives the events." },
        { id: "de-u104l2-diedarstellung", type: "vocab", front: "die Darstellung", reading: "diedarstellung", meaning: "portrayal (how something is presented)", example: { jp: "Die Darstellung im Fernsehen war nicht falsch, aber sie ließ die Hälfte weg.", en: "The portrayal on television was not wrong, but it left out half of it." }, drill: { jp: "Die Darstellung im Fernsehen war einseitig", en: "The portrayal on television was one-sided" }, accept: ["portrayal", "presentation", "depiction", "account"], hint: "dar + stellen, to place before you. Nach Darstellung der Polizei … is the standard phrase for according to the police." },
        { id: "de-u104l2-diesichtweise", type: "vocab", front: "die Sichtweise", reading: "diesichtweise", meaning: "way of seeing (someone's take on events)", example: { jp: "Das Buch zeigt nur eine Sichtweise, und es sagt das auch selbst.", en: "The book shows only one way of seeing it, and it says so itself." }, drill: { jp: "Die Sichtweise der Familie fehlt völlig", en: "The family's way of seeing it is missing" }, accept: ["way of seeing", "view", "take", "outlook"], hint: "Softer than die Meinung (u51): a Sichtweise is where somebody stands, not what they claim." },
        { id: "de-u104l2-diefigur", type: "vocab", front: "die Figur", reading: "diefigur", meaning: "character (person in a story)", example: { jp: "Die interessanteste Figur in dem Buch sagt fast nichts.", en: "The most interesting character in the book says almost nothing." }, drill: { jp: "Die Figur bleibt bis zum Schluss unklar", en: "The character stays unclear until the end" }, accept: ["character", "figure", "persona"], hint: "In a novel a character; about a body, a figure: eine gute Figur haben. Never the number — that is die Zahl." },
        { id: "de-u104l2-derverlauf", type: "vocab", front: "der Verlauf", reading: "derverlauf", meaning: "course (how events unfold over time)", example: { jp: "Im Verlauf des Abends wurde aus einem Streit eine Debatte.", en: "In the course of the evening an argument turned into a debate." }, drill: { jp: "Der Verlauf des Abends war überraschend", en: "The course of the evening was surprising" }, accept: ["course", "progression", "development", "sequence"], hint: "From verlaufen, to run its course. Im Verlauf + genitive is the standard written way to say during." },
        { id: "de-u104l2-dieperspektive", type: "vocab", front: "die Perspektive", reading: "dieperspektive", meaning: "point of view (angle a story is told from)", example: { jp: "Erzählt man dieselbe Woche aus der Perspektive der Kinder, klingt sie ganz anders.", en: "If you tell the same week from the children's point of view, it sounds completely different." }, drill: { jp: "Die Perspektive der Kinder fehlt völlig", en: "The children's point of view is completely missing" }, accept: ["point of view", "perspective", "angle", "viewpoint"], hint: "Also prospects, in the plural: berufliche Perspektiven. Context tells you which sense is meant." },
      ],
    },
    {
      id: "de-u104l3",
      unit: 104,
      lesson: 3,
      title: "Zuspitzen und inszenieren",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the moves that turn a story into a louder story: sharpening it, bending it, staging it for the camera, and the tabloid register that lives on all three.",
      items: [
        { id: "de-u104l3-zuspitzen", type: "vocab", front: "zuspitzen", reading: "zuspitzen", meaning: "to sharpen (make a claim pointier than it is)", example: { jp: "Eine Schlagzeile muss zuspitzen, sonst liest sie niemand — und genau da beginnt das Problem.", en: "A headline has to sharpen things, or nobody reads it — and that is exactly where the problem starts." }, drill: { jp: "Die Zeitung will das Thema zuspitzen", en: "The paper wants to sharpen the topic" }, accept: ["to sharpen", "to exaggerate", "to put pointedly", "to escalate"], hint: "From die Spitze, the point. Reflexively it is escalation: die Lage spitzt sich zu = the situation is coming to a head." },
        { id: "de-u104l3-verzerren", type: "vocab", front: "verzerren", reading: "verzerren", meaning: "to distort (bend out of true)", example: { jp: "Ein einziger Satz ohne den Rest verzerrt die ganze Aussage.", en: "A single sentence without the rest distorts the whole statement." }, drill: { jp: "Kurze Ausschnitte können jede Aussage verzerren", en: "Short excerpts can distort any statement" }, accept: ["to distort", "distort", "to skew", "to twist"], hint: "Works on pictures, sound, faces and facts alike: ein verzerrtes Bild. Stronger and more deliberate than zuspitzen." },
        { id: "de-u104l3-deraufhanger", type: "vocab", front: "der Aufhänger", reading: "deraufhanger", meaning: "news hook (the peg a story hangs on)", example: { jp: "Der Aufhänger war ein alter Brief, das Thema selbst ist zwanzig Jahre alt.", en: "The hook was an old letter; the topic itself is twenty years old." }, drill: { jp: "Der Aufhänger war ein alter Brief", en: "The hook was an old letter" }, accept: ["hook", "news hook", "peg", "angle"], hint: "From aufhängen — what the story is hung on. Without one, an editor will not run a piece however important it is." },
        { id: "de-u104l3-inszenieren", type: "vocab", front: "inszenieren", reading: "inszenieren", meaning: "to stage (arrange so it looks spontaneous)", example: { jp: "Man kann ein Gespräch am Küchentisch genauso inszenieren wie eine große Rede.", en: "You can stage a conversation at the kitchen table just as much as a big speech." }, drill: { jp: "Sie inszenieren das Treffen sehr genau", en: "They stage the meeting very precisely" }, accept: ["to stage", "to stage-manage", "to produce", "stage"], hint: "From die Szene. Reflexive for people who perform themselves: er inszeniert sich gern = he likes to put on a show." },
        { id: "de-u104l3-reisserisch", type: "vocab", front: "reißerisch", reading: "reisserisch", meaning: "sensationalist (loud and lurid)", example: { jp: "Die Schlagzeile war reißerisch, der Text darunter erstaunlich vorsichtig.", en: "The headline was sensationalist; the text underneath was surprisingly careful." }, drill: { jp: "Die Schlagzeile klingt einfach zu reißerisch", en: "The headline simply sounds too sensationalist" }, accept: ["sensationalist", "lurid", "sensational", "over the top"], hint: "From reißen, to rip: a headline that rips your attention away. Always negative." },
        { id: "de-u104l3-derboulevard", type: "vocab", front: "der Boulevard", reading: "derboulevard", meaning: "tabloid press", example: { jp: "Was der Boulevard am Montag druckt, steht am Dienstag in den seriösen Zeitungen.", en: "What the tabloid press prints on Monday is in the serious papers on Tuesday." }, drill: { jp: "Der Boulevard lebt von solchen Geschichten", en: "The tabloid press lives on stories like that" }, accept: ["tabloid press", "tabloids", "popular press"], hint: "The wide street, then the papers sold on it: die Boulevardpresse, die Boulevardzeitung. Pronounced bu-le-VAHR." },
      ],
    },
    {
      id: "de-u104l4",
      unit: 104,
      lesson: 4,
      title: "Reichweite und Empörung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss attention online: how far something travels, what decides that, and how quickly a story becomes outrage, scandal and then a debate.",
      items: [
        { id: "de-u104l4-diereichweite", type: "vocab", front: "die Reichweite", reading: "diereichweite", meaning: "reach (how many people something gets to)", example: { jp: "Ein kurzes Video hat oft mehr Reichweite als eine lange Recherche.", en: "A short video often has more reach than a long investigation." }, drill: { jp: "Die Reichweite ist über Nacht gewachsen", en: "The reach has grown overnight" }, accept: ["reach", "range", "audience reach", "coverage"], hint: "reichen + Weite, how far it carries. Also physical: die Reichweite eines Autos — how far it drives on a charge." },
        { id: "de-u104l4-dieplattform", type: "vocab", front: "die Plattform", reading: "dieplattform", meaning: "platform (online service where content is shared)", example: { jp: "Jede Plattform hat eigene Regeln, und niemand außerhalb kennt sie genau.", en: "Every platform has its own rules, and nobody outside knows them exactly." }, drill: { jp: "Die Plattform ändert ihre Regeln ständig", en: "The platform changes its rules constantly" }, accept: ["platform", "online platform", "service"], hint: "Same word as a station platform (der Bahnsteig is more usual there); in media talk it is always the online service." },
        { id: "de-u104l4-deralgorithmus", type: "vocab", front: "der Algorithmus", reading: "deralgorithmus", meaning: "algorithm", example: { jp: "Der Algorithmus zeigt dir, was dich lange hält, nicht was dir gut tut.", en: "The algorithm shows you what holds you for a long time, not what does you good." }, drill: { jp: "Der Algorithmus entscheidet über jede Reichweite", en: "The algorithm decides every reach" }, accept: ["algorithm"], hint: "Plural die Algorithmen. Stress on the third syllable: al-go-RITH-mus." },
        { id: "de-u104l4-dieemporung", type: "vocab", front: "die Empörung", reading: "dieemporung", meaning: "outrage (public indignation)", example: { jp: "Die Empörung war groß, hielt aber keine drei Tage.", en: "The outrage was great, but it did not last three days." }, drill: { jp: "Die Empörung hielt keine drei Tage", en: "The outrage did not last three days" }, accept: ["outrage", "indignation", "uproar", "anger"], hint: "Stronger and more public than Ärger (u57): Empörung is something a group performs together." },
        { id: "de-u104l4-derskandal", type: "vocab", front: "der Skandal", reading: "derskandal", meaning: "scandal", example: { jp: "Aus einer Meldung wurde erst ein Skandal, als die alten Briefe auftauchten.", en: "A news item only became a scandal when the old letters turned up." }, drill: { jp: "Der Skandal beschäftigt das Land seit Wochen", en: "The scandal has occupied the country for weeks" }, accept: ["scandal", "outrage", "affair"], hint: "Note the German stress: skan-DAL. Der Skandal um X is the fixed way to name whose scandal it is." },
        { id: "de-u104l4-diedebatte", type: "vocab", front: "die Debatte", reading: "diedebatte", meaning: "debate (extended public argument)", example: { jp: "Nach dem Skandal begann eine Debatte, die viel wichtiger war als der Fall selbst.", en: "After the scandal a debate began that was much more important than the case itself." }, drill: { jp: "Die Debatte läuft seit vielen Wochen", en: "The debate has been running for many weeks" }, accept: ["debate", "public debate", "discussion"], hint: "Bigger and more public than die Diskussion: a Debatte has sides, a Diskussion only participants." },
      ],
    },
  ],
};
