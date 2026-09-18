// DE Unit 105 — Gemischte Gefühle ("Mixed feelings") — B2 (slot: emotion-subtle)
// THEME CONTRACT (block 2, u101–u113): this unit owns feelings that are MIXED or that
// keep working on you — being torn (l1), what stays behind afterwards (l2), being under
// pressure (l3), feeling with or against someone (l4). The plain emotions (froh,
// traurig, wütend, dankbar, enttäuscht, erschöpft, gelassen, erleichtert, die Sehnsucht)
// belong to u22/u57 and are used here as contrast, never re-taught.
// Conventions: front = real orthography, reading = its ASCII fold (ä→a, ö→o, ü→u, ß→ss).
export const DE_UNIT105 = {
  id: "de-u105",
  lang: "de",
  title: "Gemischte Gefühle",
  order: 105,
  stage: "b2",
  lessons: [
    {
      id: "de-u105l1",
      unit: 105,
      lesson: 1,
      title: "Zwiespalt und Wehmut",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that you feel two things at once about the same thing — torn, wistful, or quietly disillusioned — instead of picking one plain emotion.",
      items: [
        { id: "de-u105l1-dieambivalenz", type: "vocab", front: "die Ambivalenz", reading: "dieambivalenz", meaning: "ambivalence (two opposed feelings at once)", example: { jp: "Seine Ambivalenz gegenüber der neuen Stelle war allen im Zimmer klar.", en: "His ambivalence towards the new job was clear to everyone in the room." }, drill: { jp: "Die Ambivalenz war deutlich zu spüren", en: "The ambivalence was clearly noticeable" }, accept: ["ambivalence", "mixed feelings"], hint: "The formal word; in speech Germans say gemischte Gefühle. Ambivalenz gegenüber + dative." },
        { id: "de-u105l1-zwiespaltig", type: "vocab", front: "zwiespältig", reading: "zwiespaltig", meaning: "conflicted (of a feeling or an impression)", example: { jp: "Der Abend war schön, aber ich ging mit einem zwiespältigen Gefühl nach Hause.", en: "The evening was nice, but I went home with a conflicted feeling." }, drill: { jp: "Mein Eindruck bleibt bis heute zwiespältig", en: "My impression remains conflicted to this day" }, accept: ["conflicted", "ambivalent", "mixed", "divided"], hint: "Zwie- is an old two-: der Zwiespalt is the split down the middle. Used of Gefühl, Eindruck, Verhältnis." },
        { id: "de-u105l1-diezerrissenheit", type: "vocab", front: "die Zerrissenheit", reading: "diezerrissenheit", meaning: "inner turmoil (being pulled in two directions)", example: { jp: "Die Zerrissenheit dieser Jahre ist in jedem Bild zu sehen.", en: "The inner turmoil of those years can be seen in every picture." }, drill: { jp: "Die Zerrissenheit zieht sich durch das Buch", en: "The inner turmoil runs through the book" }, accept: ["inner turmoil", "inner conflict", "being torn", "dividedness"], hint: "From zerreißen, to rip apart. Heavier than zwiespältig — this is a state, not a mood." },
        { id: "de-u105l1-diewehmut", type: "vocab", front: "die Wehmut", reading: "diewehmut", meaning: "wistfulness (sweet sadness about what is past)", example: { jp: "Mit Wehmut denkt sie an die kleine Wohnung, in der alles eng und laut war.", en: "She thinks with wistfulness of the small flat where everything was cramped and loud." }, drill: { jp: "Die Wehmut kommt erst nach Jahren", en: "The wistfulness only comes after years" }, accept: ["wistfulness", "melancholy", "nostalgia", "bittersweet sadness"], hint: "Weh (ache) + Mut (spirit): sadness you would not want to give up. Die Sehnsucht (u57) pulls towards something; Wehmut looks back." },
        { id: "de-u105l1-dieernuchterung", type: "vocab", front: "die Ernüchterung", reading: "dieernuchterung", meaning: "disillusionment (after the excitement fades)", example: { jp: "Auf die erste Woche folgte eine große Ernüchterung, und danach ging es ihm besser.", en: "The first week was followed by a great disillusionment, and after that he felt better." }, drill: { jp: "Die Ernüchterung kam schon am Dienstag", en: "The disillusionment came as early as Tuesday" }, accept: ["disillusionment", "sobering", "come-down", "disenchantment"], hint: "From nüchtern, sober: the morning after the enthusiasm. Not as bitter as die Enttäuschung — just clear-eyed." },
        { id: "de-u105l1-nachdenklich", type: "vocab", front: "nachdenklich", reading: "nachdenklich", meaning: "pensive (left thinking about something)", example: { jp: "Das Buch war nicht traurig, aber ich war danach den ganzen Abend nachdenklich.", en: "The book was not sad, but afterwards I was pensive the whole evening." }, drill: { jp: "Der Satz hat mich sehr nachdenklich gemacht", en: "The sentence made me very pensive" }, accept: ["pensive", "thoughtful", "reflective"], hint: "jemanden nachdenklich machen is the standard collocation: to give someone pause." },
      ],
    },
    {
      id: "de-u105l2",
      unit: 105,
      lesson: 2,
      title: "Was nachwirkt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name feelings that stay after the event: a grudge you keep, regret for what you did, shame, awkwardness, and being hurt by something someone said.",
      items: [
        { id: "de-u105l2-dergroll", type: "vocab", front: "der Groll", reading: "dergroll", meaning: "grudge (quiet lasting resentment)", example: { jp: "Nach so vielen Jahren trägt er immer noch einen Groll gegen seinen Bruder.", en: "After so many years he still carries a grudge against his brother." }, drill: { jp: "Der Groll sitzt seit Jahren tief", en: "The grudge has sat deep for years" }, accept: ["grudge", "resentment", "rancour", "ill will"], hint: "Groll gegen jemanden hegen is the literary collocation; einen Groll tragen is the everyday one. Quiet, never loud — that would be die Wut." },
        { id: "de-u105l2-diereue", type: "vocab", front: "die Reue", reading: "diereue", meaning: "remorse (regret over one's own act)", example: { jp: "Vor Gericht zeigte er keine Reue, und genau das hat man ihm angelastet.", en: "In court he showed no remorse, and that is exactly what was held against him." }, drill: { jp: "Die Reue kam viel zu spät", en: "The remorse came far too late" }, accept: ["remorse", "regret", "repentance", "contrition"], hint: "Reue is about what *you* did; das Bedauern is regret that something happened at all." },
        { id: "de-u105l2-verbittert", type: "vocab", front: "verbittert", reading: "verbittert", meaning: "embittered (soured by long disappointment)", example: { jp: "Nach dem zweiten Bescheid war sie verbittert und wollte nichts mehr versuchen.", en: "After the second decision she was embittered and did not want to try anything more." }, drill: { jp: "Der lange Streit hat ihn verbittert", en: "The long quarrel has embittered him" }, accept: ["embittered", "bitter", "soured", "resentful"], hint: "From bitter. Unlike gekränkt, which is a wound, verbittert is what is left years after nobody apologised." },
        { id: "de-u105l2-diescham", type: "vocab", front: "die Scham", reading: "diescham", meaning: "shame (over what you are or did)", example: { jp: "Aus Scham hat sie ein halbes Jahr niemandem davon erzählt.", en: "Out of shame she told nobody about it for half a year." }, drill: { jp: "Die Scham war stärker als die Angst", en: "The shame was stronger than the fear" }, accept: ["shame", "sense of shame"], hint: "Deeper than peinlich (u22), which is only embarrassing. Sich schämen is the verb: ich schäme mich." },
        { id: "de-u105l2-dieverlegenheit", type: "vocab", front: "die Verlegenheit", reading: "dieverlegenheit", meaning: "awkwardness (embarrassment in a moment)", example: { jp: "In seiner Verlegenheit hat er über das Wetter geredet.", en: "In his awkwardness he talked about the weather." }, drill: { jp: "Die Verlegenheit stand ihm im Gesicht", en: "The awkwardness was written on his face" }, accept: ["awkwardness", "embarrassment", "discomfiture"], hint: "Light and social, unlike Scham. In Verlegenheit bringen = to put someone on the spot." },
        { id: "de-u105l2-gekrankt", type: "vocab", front: "gekränkt", reading: "gekrankt", meaning: "hurt (wounded in one's pride)", example: { jp: "Er war gekränkt, weil ihn niemand gefragt hatte, obwohl es um seine Arbeit ging.", en: "He was hurt because nobody had asked him, although it was about his work." }, drill: { jp: "Sie war von dem Satz tief gekränkt", en: "She was deeply hurt by that sentence" }, accept: ["hurt", "offended", "wounded", "slighted"], hint: "From kränken, to wound someone's feelings — same root as krank. It is always the pride that is hit." },
      ],
    },
    {
      id: "de-u105l3",
      unit: 105,
      lesson: 3,
      title: "Unter Druck",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how much is too much: being overwhelmed, wound up, unsettled, tense, uneasy — and keeping or losing your composure.",
      items: [
        { id: "de-u105l3-uberfordert", type: "vocab", front: "überfordert", reading: "uberfordert", meaning: "overwhelmed (asked for more than one can give)", example: { jp: "Mit drei Kindern und der Pflege der Mutter war sie einfach überfordert.", en: "With three children and caring for her mother she was simply overwhelmed." }, drill: { jp: "Mit dieser Aufgabe war er überfordert", en: "He was overwhelmed by this task" }, accept: ["overwhelmed", "out of one's depth", "overtaxed", "overburdened"], hint: "über + fordern, to demand too much. Its opposite is a real German word too: unterfordert, bored by too little." },
        { id: "de-u105l3-aufgewuhlt", type: "vocab", front: "aufgewühlt", reading: "aufgewuhlt", meaning: "churned up (emotionally stirred)", example: { jp: "Nach dem Gespräch war ich zu aufgewühlt, um zu schlafen.", en: "After the conversation I was too churned up to sleep." }, drill: { jp: "Nach dem Anruf war sie völlig aufgewühlt", en: "After the call she was completely churned up" }, accept: ["churned up", "agitated", "stirred up", "shaken"], hint: "From wühlen, to dig or root around — the sea is aufgewühlt too. Strong feeling, direction unspecified." },
        { id: "de-u105l3-verunsichert", type: "vocab", front: "verunsichert", reading: "verunsichert", meaning: "unsettled (made unsure of oneself)", example: { jp: "Die vielen Fragen haben ihn eher verunsichert als überzeugt.", en: "The many questions unsettled him rather than convinced him." }, drill: { jp: "Die Kritik hat das Team verunsichert", en: "The criticism has unsettled the team" }, accept: ["unsettled", "made insecure", "unnerved", "thrown"], hint: "ver + unsicher: someone else did this to you. Sich unsicher fühlen is the state without the cause." },
        { id: "de-u105l3-angespannt", type: "vocab", front: "angespannt", reading: "angespannt", meaning: "tense (strung tight, of a person or a situation)", example: { jp: "Die Stimmung im Büro war seit dem Bericht angespannt.", en: "The mood in the office had been tense since the report." }, drill: { jp: "Die Stimmung bleibt weiterhin sehr angespannt", en: "The mood remains very tense" }, accept: ["tense", "strained", "on edge", "taut"], hint: "spannen is to stretch a rope; angespannt is the rope under load. Works for Stimmung, Lage, Muskeln and Finanzen." },
        { id: "de-u105l3-mulmig", type: "vocab", front: "mulmig", reading: "mulmig", meaning: "uneasy (vaguely apprehensive)", example: { jp: "Mir war mulmig, als ich das leere Haus von außen sah.", en: "I felt uneasy when I saw the empty house from outside." }, drill: { jp: "Mir wurde bei dem Gedanken mulmig", en: "The thought made me uneasy" }, accept: ["uneasy", "queasy", "apprehensive", "uncomfortable"], hint: "Almost always impersonal with the dative: mir ist mulmig. Quiet stomach-level unease, not real Angst." },
        { id: "de-u105l3-diebeherrschung", type: "vocab", front: "die Beherrschung", reading: "diebeherrschung", meaning: "self-control (keeping a grip on yourself)", example: { jp: "Er hat die Beherrschung verloren, und alle im Zimmer haben es gesehen.", en: "He lost his self-control, and everyone in the room saw it." }, drill: { jp: "Sie hat die Beherrschung nie verloren", en: "She never lost her self-control" }, accept: ["self-control", "composure", "restraint", "temper"], hint: "From beherrschen, to master. Die Beherrschung verlieren is the fixed phrase — it is always the losing that gets said." },
      ],
    },
    {
      id: "de-u105l4",
      unit: 105,
      lesson: 4,
      title: "Mitfühlen und Zuversicht",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how you feel towards other people and towards what is coming: pity, compassion, malicious glee, goodwill, being moved, and quiet confidence.",
      items: [
        { id: "de-u105l4-dasmitleid", type: "vocab", front: "das Mitleid", reading: "dasmitleid", meaning: "pity (feeling sorry for someone)", example: { jp: "Er wollte kein Mitleid, sondern nur jemanden, der zuhört.", en: "He did not want pity, just somebody who listens." }, drill: { jp: "Das Mitleid hat ihr nicht geholfen", en: "The pity did not help her" }, accept: ["pity", "compassion", "sympathy"], hint: "Careful — Mitleid looks down a little. Between equals Germans prefer das Mitgefühl." },
        { id: "de-u105l4-dasmitgefuhl", type: "vocab", front: "das Mitgefühl", reading: "dasmitgefuhl", meaning: "compassion (feeling with someone as an equal)", example: { jp: "Ein Satz mit echtem Mitgefühl hilft mehr als eine lange Erklärung.", en: "One sentence with genuine compassion helps more than a long explanation." }, drill: { jp: "Das Mitgefühl war deutlich zu spüren", en: "The compassion was clearly noticeable" }, accept: ["compassion", "empathy", "sympathy", "fellow feeling"], hint: "mit + Gefühl: feeling *with*, not sorry *for*. The standard word in a condolence card: mein aufrichtiges Mitgefühl." },
        { id: "de-u105l4-dieschadenfreude", type: "vocab", front: "die Schadenfreude", reading: "dieschadenfreude", meaning: "malicious glee (pleasure at another's misfortune)", example: { jp: "Ein bisschen Schadenfreude war dabei, das gibt er selbst zu.", en: "There was a bit of malicious glee in it, as he himself admits." }, drill: { jp: "Die Schadenfreude war kaum zu übersehen", en: "The malicious glee was hard to miss" }, accept: ["malicious glee", "schadenfreude", "gloating"], hint: "Schaden (u79) + Freude: the word English borrowed whole because it had none. Germans use it about themselves, half-jokingly." },
        { id: "de-u105l4-wohlwollend", type: "vocab", front: "wohlwollend", reading: "wohlwollend", meaning: "benevolent (well-disposed towards someone)", example: { jp: "Der Chef hat wohlwollend zugehört, entschieden hat trotzdem jemand anderes.", en: "The boss listened benevolently; somebody else decided all the same." }, drill: { jp: "Die Kritik war insgesamt sehr wohlwollend", en: "The criticism was very benevolent overall" }, accept: ["benevolent", "well-disposed", "kindly", "sympathetic"], hint: "wohl + wollen — wishing you well. Often faintly ironic about superiors: ein wohlwollendes Nicken." },
        { id: "de-u105l4-geruhrt", type: "vocab", front: "gerührt", reading: "geruhrt", meaning: "moved (touched, close to tears)", example: { jp: "Sie war so gerührt, dass sie erst nach einer Weile etwas sagen konnte.", en: "She was so moved that she could only say something after a while." }, drill: { jp: "Alle im Zimmer waren sichtlich gerührt", en: "Everyone in the room was visibly moved" }, accept: ["moved", "touched", "affected"], hint: "From rühren, to stir — the same image as English *stirred*. Zu Tränen gerührt is the fixed phrase." },
        { id: "de-u105l4-dertrost", type: "vocab", front: "der Trost", reading: "dertrost", meaning: "comfort (consolation given to someone)", example: { jp: "Ein kurzer Anruf war in dieser Woche ihr einziger Trost.", en: "A short phone call was her only comfort that week." }, drill: { jp: "Der Trost kam von einer Nachbarin", en: "The comfort came from a neighbour" }, accept: ["comfort", "consolation", "solace"], hint: "Trösten is the verb. Ein schwacher Trost — cold comfort — is the phrase you will hear most." },
      ],
    },
  ],
};
