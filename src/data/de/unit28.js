// DE Unit 28 — Time and adverbs (slot: time) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
// The CROSS-BLOCK COLLISION LEDGER is in de/unit21.js — read that before authoring.
//
// The most crowded slot in the language, and the screen mattered more here than
// anywhere. A1 u5 owns the clock, u9 the days and months, u12 immer, oft,
// manchmal, selten, dann and noch — and MY OWN u21 already spent zuerst, danach,
// später, jeden Tag, zweimal, meistens, kaum and normalerweise. All blocked.
//
// SEVEN CANDIDATES DROPPED BY THE SCREEN:
//   endlich        block 2's at u36
//   schließlich    block 2's at u36
//   der Feiertag   block 2's at u40
//   vorbei         canonical gloss "over" collides with A1 u14's über
//   letzt          canonical gloss "last" already claimed
//   die Dauer      one lexeme with u18's dauern
//   der Vermieter  belonged to u30 and is one lexeme with die Miete
//
// EVERY EXAMPLE AND DRILL HERE IS IN THE PERFEKT OR THE PRESENT, NEVER THE
// PRÄTERITUM. A1 u14 teaches the Perfekt (gewesen, gegangen, gekommen), and the
// Präteritum is block 2's, at u38 and u39 — units 10 and 11 AFTER this one. So
// "gestern war ich da" would use a tense the learner has not met; "gestern bin
// ich gekommen" is the form they actually have. That is why the past-time
// adverbs below all sit on bin/ist plus a participle.
//
// das Wochenende is kept alongside das Ende because a transparent COMPOUND of two
// taught words is composition, not one lexeme twice — the same call as Kleingeld
// in u27. They are in different lessons.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT28 = {
  id: "de-u28",
  lang: "de",
  title: "Zeit und Zeitadverbien",
  order: 28,
  stage: "a2",
  lessons: [
    {
      id: "de-u28l1",
      unit: 28,
      lesson: 1,
      title: "Gestern und übermorgen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Place events on the calendar around today — yesterday, the day before, the day after tomorrow, back then, recently, soon.",
      items: [
        { id: "de-u28l1-gestern", type: "vocab", front: "gestern", reading: "gestern", meaning: "yesterday", example: { jp: "Gestern bin ich nach Hause gekommen.", en: "Yesterday I came home." }, drill: { jp: "Gestern haben wir lange gearbeitet", en: "Yesterday we worked for a long time" }, accept: ["yesterday"], hint: "Takes the Perfekt in speech — Germans say gestern bin ich gekommen, not the simple past, which stays mostly in writing." },
        { id: "de-u28l1-vorgestern", type: "vocab", front: "vorgestern", reading: "vorgestern", meaning: "the day before yesterday", example: { jp: "Vorgestern bin ich zu Hause gewesen.", en: "The day before yesterday I was at home." }, drill: { jp: "Vorgestern sind wir in der Stadt gewesen", en: "The day before yesterday we were in town" }, accept: ["the day before yesterday", "day before yesterday", "two days ago"], hint: "vor + gestern, one word where English needs four. German builds these tidily and expects you to as well." },
        { id: "de-u28l1-ubermorgen", type: "vocab", front: "übermorgen", reading: "ubermorgen", meaning: "the day after tomorrow", example: { jp: "Übermorgen fahren wir nach Berlin.", en: "The day after tomorrow we travel to Berlin." }, drill: { jp: "Übermorgen kommt der Chef", en: "The day after tomorrow the boss is coming" }, accept: ["the day after tomorrow", "day after tomorrow", "in two days"], hint: "The mirror of vorgestern: über + morgen, beyond-tomorrow. Note German uses the present tense for the future here — fahren, not a will-form." },
        { id: "de-u28l1-damals", type: "vocab", front: "damals", reading: "damals", meaning: "back then", example: { jp: "Damals bin ich in Wien gewesen.", en: "Back then I was in Vienna." }, drill: { jp: "Damals haben wir sehr viel gearbeitet", en: "Back then we worked a great deal" }, accept: ["back then", "at that time", "in those days", "then"], hint: "For a distant past you are looking back on, not for u12's dann, which means next. Confusing the two is the commonest slip with this word." },
        { id: "de-u28l1-neulich", type: "vocab", front: "neulich", reading: "neulich", meaning: "recently", example: { jp: "Neulich bin ich im Museum gewesen.", en: "Recently I was at the museum." }, drill: { jp: "Neulich hat der Chef lange gearbeitet", en: "Recently the boss worked for a long time" }, accept: ["recently", "the other day", "lately"], hint: "Built on u10's neu. It means the other day — a specific recent occasion, not a stretch of time." },
        { id: "de-u28l1-bald", type: "vocab", front: "bald", reading: "bald", meaning: "soon", example: { jp: "Wir fahren bald nach Hause.", en: "We are going home soon." }, drill: { jp: "Der Zug kommt bald", en: "The train is coming soon" }, accept: ["soon", "shortly", "before long"], hint: "You have been saying it since u2 in bis bald, see you soon. Nothing to do with English bald." },
      ],
    },
    {
      id: "de-u28l2",
      unit: 28,
      lesson: 2,
      title: "Jetzt und gleich",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how immediate something is — right now, in a moment, at once, suddenly — and name a moment itself.",
      items: [
        { id: "de-u28l2-sofort", type: "vocab", front: "sofort", reading: "sofort", meaning: "immediately", example: { jp: "Der Arzt kommt sofort.", en: "The doctor is coming immediately." }, drill: { jp: "Der Arzt kommt sofort zu uns", en: "The doctor comes to us immediately" }, accept: ["immediately", "at once", "right away", "straight away"], hint: "The strongest of the three: sofort is now, gleich is in a minute, bald is sometime soon. Germans hold that ladder firmly." },
        { id: "de-u28l2-gerade", type: "vocab", front: "gerade", reading: "gerade", meaning: "right now", example: { jp: "Ich lese gerade die Zeitung.", en: "I am reading the newspaper right now." }, drill: { jp: "Wir essen gerade zu Hause", en: "We are eating at home right now" }, accept: ["right now", "just now", "at the moment", "just"], hint: "German has no continuous tense, so gerade is how it says -ing: ich lese gerade means I am reading. The same word also means straight." },
        { id: "de-u28l2-gleich", type: "vocab", front: "gleich", reading: "gleich", meaning: "in a moment", example: { jp: "Wir gehen gleich nach Hause.", en: "We are going home in a moment." }, drill: { jp: "Der Arzt kommt gleich", en: "The doctor is coming in a moment" }, accept: ["in a moment", "shortly", "in a minute", "right away"], hint: "Also means equal or same — gleich groß, the same size. Bis gleich is see you in a minute, as against u2's bis bald." },
        { id: "de-u28l2-plotzlich", type: "vocab", front: "plötzlich", reading: "plotzlich", meaning: "suddenly", example: { jp: "Plötzlich ist das Licht aus.", en: "Suddenly the light is off." }, drill: { jp: "Plötzlich ist es sehr dunkel", en: "Suddenly it is very dark" }, accept: ["suddenly", "all at once", "all of a sudden"], hint: "Put it first and the verb still comes second — plötzlich IST das Licht aus. The rule from u12 has not bent once." },
        { id: "de-u28l2-dermoment", type: "vocab", front: "der Moment", reading: "dermoment", meaning: "the moment", example: { jp: "Der Moment ist sehr schön.", en: "The moment is very lovely." }, drill: { jp: "Der Moment ist jetzt gut", en: "The moment is good now" }, accept: ["the moment", "moment"], hint: "Moment mal! is the everyday hang on a second. Im Moment means at the moment, and is the phrase you will use most." },
        { id: "de-u28l2-deraugenblick", type: "vocab", front: "der Augenblick", reading: "deraugenblick", meaning: "the instant", example: { jp: "Der Augenblick ist sehr kurz.", en: "The instant is very short." }, drill: { jp: "Der Augenblick ist immer zu kurz", en: "The instant is always too short" }, accept: ["the instant", "instant", "the split second", "the moment"], hint: "Auge + Blick, the glance of an eye — German's own word for what Moment borrows from Latin. Slightly more literary, and beautifully literal." },
      ],
    },
    {
      id: "de-u28l3",
      unit: 28,
      lesson: 3,
      title: "Vorher und nachher",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Order events relative to each other — before, after, so far, meanwhile — and say how often something happens.",
      items: [
        { id: "de-u28l3-vorher", type: "vocab", front: "vorher", reading: "vorher", meaning: "beforehand", example: { jp: "Wir essen vorher zu Hause.", en: "We eat at home beforehand." }, drill: { jp: "Vorher gehen wir in den Park", en: "Beforehand we go to the park" }, accept: ["beforehand", "before", "before that", "in advance"], hint: "Points back at something already mentioned, the way u21's danach points forward. For linking a whole clause you want u29's bevor." },
        { id: "de-u28l3-nachher", type: "vocab", front: "nachher", reading: "nachher", meaning: "afterwards", example: { jp: "Wir gehen nachher in den Park.", en: "We are going to the park afterwards." }, drill: { jp: "Nachher trinken wir Kaffee", en: "Afterwards we drink coffee" }, accept: ["afterwards", "later on", "after that", "later"], hint: "Close to u21's danach, with one difference worth holding: danach means after THAT, nachher just means later today." },
        { id: "de-u28l3-bisher", type: "vocab", front: "bisher", reading: "bisher", meaning: "so far", example: { jp: "Bisher ist das Wetter schön.", en: "So far the weather is lovely." }, drill: { jp: "Bisher ist der Zug pünktlich", en: "So far the train is on time" }, accept: ["so far", "up to now", "until now", "thus far"], hint: "bis + her, up-to-hither. It takes the present in German where English reaches for a perfect: bisher ist es gut, so far it has been good." },
        { id: "de-u28l3-inzwischen", type: "vocab", front: "inzwischen", reading: "inzwischen", meaning: "meanwhile", example: { jp: "Inzwischen ist der Zug hier.", en: "Meanwhile the train is here." }, drill: { jp: "Inzwischen ist es sehr spät", en: "Meanwhile it is very late" }, accept: ["meanwhile", "in the meantime", "by now", "since then"], hint: "Built on u14's zwischen, between. It carries both meanwhile and by now — the sense is always the gap between two points." },
        { id: "de-u28l3-haufig", type: "vocab", front: "häufig", reading: "haufig", meaning: "frequently", example: { jp: "Der Bus kommt häufig zu spät.", en: "The bus frequently arrives late." }, drill: { jp: "Wir gehen häufig in den Park", en: "We frequently go to the park" }, accept: ["frequently", "often", "commonly"], hint: "The bookish twin of u12's oft — same meaning, higher register. Der Haufen is a heap, and a frequent thing is one that heaps up." },
        { id: "de-u28l3-standig", type: "vocab", front: "ständig", reading: "standig", meaning: "constantly", example: { jp: "Das Kind fragt ständig nach dem Essen.", en: "The child constantly asks about the meal." }, drill: { jp: "Wir arbeiten ständig zu lange", en: "We constantly work too long" }, accept: ["constantly", "all the time", "continually", "permanently"], hint: "Stronger than häufig and usually a complaint. From stehen — something that stands there without stopping." },
      ],
    },
    {
      id: "de-u28l4",
      unit: 28,
      lesson: 4,
      title: "Vergangenheit und Zukunft",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about time as a thing: the past, the future, a beginning, an end, the weekend, and something happening sometime.",
      items: [
        { id: "de-u28l4-dievergangenheit", type: "vocab", front: "die Vergangenheit", reading: "dievergangenheit", meaning: "the past", example: { jp: "Wir sprechen über die Vergangenheit.", en: "We are talking about the past." }, drill: { jp: "Die Vergangenheit ist nicht immer schön", en: "The past is not always lovely" }, accept: ["the past", "past"], hint: "From vergangen, gone by — u14's gegangen is inside it. In Germany the word carries historical weight it does not carry in English." },
        { id: "de-u28l4-diezukunft", type: "vocab", front: "die Zukunft", reading: "diezukunft", meaning: "the future", example: { jp: "Die Zukunft ist für uns sehr gut.", en: "The future is very good for us." }, drill: { jp: "Die Zukunft ist nicht leicht", en: "The future is not easy" }, accept: ["the future", "future"], hint: "The same -kunft from kommen you met in u23's Unterkunft and Auskunft — the future is literally the coming-to." },
        { id: "de-u28l4-deranfang", type: "vocab", front: "der Anfang", reading: "deranfang", meaning: "the beginning", example: { jp: "Der Anfang vom Film ist gut.", en: "The beginning of the film is good." }, drill: { jp: "Der Anfang ist immer schwer", en: "The beginning is always hard" }, accept: ["the beginning", "beginning", "the start", "start"], hint: "From anfangen, to begin. Am Anfang means at the start, and aller Anfang ist schwer — every beginning is hard — is the proverb every learner gets told." },
        { id: "de-u28l4-dasende", type: "vocab", front: "das Ende", reading: "dasende", meaning: "the end", example: { jp: "Das Ende vom Buch ist traurig.", en: "The end of the book is sad." }, drill: { jp: "Das Ende kommt sehr schnell", en: "The end comes very fast" }, accept: ["the end", "end", "the ending", "the finish"], hint: "Neuter, and close to English end. Am Ende means in the end; zu Ende sein is to be over." },
        { id: "de-u28l4-daswochenende", type: "vocab", front: "das Wochenende", reading: "daswochenende", meaning: "the weekend", example: { jp: "Das Wochenende ist immer zu kurz.", en: "The weekend is always too short." }, drill: { jp: "Das Wochenende in Berlin ist schön", en: "The weekend in Berlin is lovely" }, accept: ["the weekend", "weekend"], hint: "u5's Woche plus das Ende above, stacked with no linking letter. Am Wochenende is at the weekend — am, not an." },
        { id: "de-u28l4-irgendwann", type: "vocab", front: "irgendwann", reading: "irgendwann", meaning: "sometime", example: { jp: "Irgendwann fahren wir nach Wien.", en: "Sometime we will travel to Vienna." }, drill: { jp: "Irgendwann kommt die Antwort", en: "Sometime the answer will come" }, accept: ["sometime", "at some point", "someday", "eventually"], hint: "irgend- attaches to u12's question words to make a vague version: wann becomes irgendwann, wo becomes irgendwo, wer becomes irgendwer. Learn the prefix, get the set." },
      ],
    },
  ],
};
