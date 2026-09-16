// DE Unit 62 — Pläne und Absichten (slot: plans and intentions) — B1
// Block 1 (u51–u62) — THE LAST UNIT OF BLOCK 1. BAND CONVENTIONS: see the header
// of de/unit51.js, which is the B1 constitution blocks 2 and 3 read first.
//
// THEME: intending something, and coping when it does not happen. A2 already has
// planen, vorbereiten, beschließen, entscheiden, das Ziel, der Wunsch, der Termin,
// buchen, reservieren, absagen, einladen. B1 adds the intention itself (l1),
// getting to a goal (l2), organizing other people (l3), and the plan breaking
// (l4).
// ⚠️ l4 teaches `trotz` + GENITIVE, the pair to `wegen` in u52 l1. Those two are
// the band's whole genitive-preposition set and they are deliberately split
// across the first and last unit of the block, so the second one lands as
// recognition rather than as a new rule.
// ⚠️ vorhaben's drill is "Man kann viel vorhaben" and it is the one drill in this
// block that is stretched rather than natural. The front is separable, so a
// finite clause splits it (Was hast du vor?) and findWholeWord misses it; the
// modal construction is the only shape that keeps it contiguous. Flagged in the
// hand-back rather than hidden.
// FREE: Aufträge, Lehrerin, Zeiten
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT62 = {
  id: "de-u62",
  lang: "de",
  title: "Pläne und Absichten",
  order: 62,
  stage: "b1",
  lessons: [
    {
      id: "de-u62l1",
      unit: 62,
      lesson: 1,
      title: "Was ich vorhabe",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you intend to do: what you are up to, what your intention is, what happens in future and shortly, doing it in good time — and pushing it back.",
      items: [
        { id: "de-u62l1-vorhaben", type: "vocab", front: "vorhaben", reading: "vorhaben", meaning: "to intend", example: { jp: "Was hast du am Wochenende vor, oder weißt du es noch nicht?", en: "What are you doing at the weekend, or don't you know yet?" }, drill: { jp: "Man kann viel vorhaben", en: "You can intend a lot" }, accept: ["to intend", "intend", "to plan", "plan", "to have planned", "to be up to"], hint: "vor + haben: to have a thing out in front of you. Separable, so it splits: Was hast du vor? = What are you up to?" },
        { id: "de-u62l1-dieabsicht", type: "vocab", front: "die Absicht", reading: "dieabsicht", meaning: "the intention", example: { jp: "Meine Absicht war gut, aber das Ergebnis war am Ende leider schlecht.", en: "My intention was good, but unfortunately the result was bad in the end." }, drill: { jp: "Die Absicht bleibt immer gleich", en: "The intention always stays the same" }, accept: ["intention", "the intention", "intent", "the intent", "purpose", "the purpose", "aim"], hint: "ab + sehen: what you have in view. mit Absicht = on purpose; ohne Absicht = by accident." },
        { id: "de-u62l1-kunftig", type: "vocab", front: "künftig", reading: "kunftig", meaning: "in future", example: { jp: "Künftig arbeiten wir auch am Samstag, weil die Aufträge immer mehr werden.", en: "In future we'll work on Saturdays too, because there are more and more orders." }, drill: { jp: "Künftig arbeiten wir am Samstag", en: "In future we work on Saturdays" }, accept: ["in future", "in the future", "from now on", "future", "henceforth"], hint: "From die Zukunft, which you already have. More formal than in Zukunft — the word of letters and notices." },
        { id: "de-u62l1-demnachst", type: "vocab", front: "demnächst", reading: "demnachst", meaning: "shortly", example: { jp: "Demnächst kommt eine neue Regel, aber niemand weiß genau wann.", en: "A new rule is coming shortly, but nobody knows exactly when." }, drill: { jp: "Demnächst kommt eine neue Regel", en: "A new rule is coming shortly" }, accept: ["shortly", "soon", "before long", "in the near future", "any day now"], hint: "dem + nächst (nearest): at the nearest point ahead. A shade less immediate than bald." },
        { id: "de-u62l1-rechtzeitig", type: "vocab", front: "rechtzeitig", reading: "rechtzeitig", meaning: "in good time", example: { jp: "Wenn wir rechtzeitig fahren, schaffen wir den Zug und müssen nicht laufen.", en: "If we set off in good time we'll make the train and won't have to run." }, drill: { jp: "Wir müssen rechtzeitig am Bahnhof sein", en: "We have to be at the station in good time" }, accept: ["in good time", "in time", "on time", "punctually", "timely", "early enough"], hint: "recht + die Zeit: at the right time, i.e. early enough. pünktlich is exactly on the dot; rechtzeitig is not too late." },
        { id: "de-u62l1-verschieben", type: "vocab", front: "verschieben", reading: "verschieben", meaning: "to postpone", example: { jp: "Wir müssen den Termin verschieben, weil der Chef seit Montag krank ist.", en: "We have to postpone the appointment, because the boss has been ill since Monday." }, drill: { jp: "Wir müssen den Termin verschieben", en: "We have to postpone the appointment" }, accept: ["to postpone", "postpone", "to put off", "put off", "to move", "to reschedule", "to shift"], hint: "ver- + schieben (to push): to push it further away. Inseparable, unlike the plain schieben you already know." },
      ],
    },
    {
      id: "de-u62l2",
      unit: 62,
      lesson: 2,
      title: "Ziele erreichen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about getting somewhere: reaching the goal, the will behind it, a challenge, an opportunity, what you give up for it, and saying you definitely will.",
      items: [
        { id: "de-u62l2-erreichen", type: "vocab", front: "erreichen", reading: "erreichen", meaning: "to reach", example: { jp: "Wir haben das Ziel erreicht, obwohl die Zeit am Ende sehr knapp war.", en: "We reached the goal, although time was very tight at the end." }, drill: { jp: "Wir wollen das Ziel erreichen", en: "We want to reach the goal" }, accept: ["to reach", "reach", "to achieve", "achieve", "to attain", "to get hold of", "to get through to"], hint: "er- + reichen: to get all the way there. Also of people on the phone: Ich erreiche ihn nicht." },
        { id: "de-u62l2-derwille", type: "vocab", front: "der Wille", reading: "derwille", meaning: "the will", example: { jp: "Ohne Willen hilft auch das beste Buch nicht, das wissen die Lehrer.", en: "Without will even the best book doesn't help — the teachers know that." }, drill: { jp: "Der Wille ist sehr stark", en: "The will is very strong" }, accept: ["will", "the will", "willpower", "the willpower", "volition", "intention"], hint: "From wollen. It declines oddly: der Wille, den Willen, dem Willen. Wo ein Wille ist, ist ein Weg." },
        { id: "de-u62l2-dieherausforderung", type: "vocab", front: "die Herausforderung", reading: "dieherausforderung", meaning: "the challenge", example: { jp: "Die neue Stelle ist eine Herausforderung, aber sie macht ihm viel Freude.", en: "The new job is a challenge, but it gives him a lot of joy." }, drill: { jp: "Die Herausforderung macht ihm Freude", en: "The challenge gives him joy" }, accept: ["challenge", "the challenge", "test", "the test"], hint: "heraus + fordern (u55): to call somebody out. A long word, and extremely common — Germans use it wherever English says 'challenge'." },
        { id: "de-u62l2-diegelegenheit", type: "vocab", front: "die Gelegenheit", reading: "diegelegenheit", meaning: "the opportunity", example: { jp: "Er hatte die Gelegenheit, im Ausland zu arbeiten, aber er wollte nicht weg.", en: "He had the opportunity to work abroad, but he didn't want to leave." }, drill: { jp: "Die Gelegenheit kommt selten", en: "The opportunity comes rarely" }, accept: ["opportunity", "the opportunity", "chance", "the chance", "occasion", "the occasion"], hint: "From gelegen (well-placed): a moment that lies right. bei Gelegenheit = some time when it suits." },
        { id: "de-u62l2-verzichten", type: "vocab", front: "verzichten", reading: "verzichten", meaning: "to do without", example: { jp: "Auf den Urlaub verzichten wir, weil wir für die neue Wohnung sparen müssen.", en: "We're doing without the holiday, because we have to save for the new flat." }, drill: { jp: "Wir wollen auf nichts verzichten", en: "We don't want to do without anything" }, accept: ["to do without", "do without", "to give up", "give up", "to forgo", "to renounce", "to waive"], hint: "auf etwas verzichten — the preposition is always auf + accusative. It is a choice you make, not a loss you suffer." },
        { id: "de-u62l2-bestimmt", type: "vocab", front: "bestimmt", reading: "bestimmt", meaning: "definitely", example: { jp: "Er kommt bestimmt noch, weil er es mir heute Morgen gesagt hat.", en: "He'll definitely still come, because he told me this morning." }, drill: { jp: "Er kommt bestimmt noch heute", en: "He is definitely still coming today" }, accept: ["definitely", "certainly", "surely", "for sure", "certain", "particular", "specific"], hint: "Two jobs: 'definitely' as an adverb, and 'a certain' as an adjective — ein bestimmtes Wort. From bestimmen, to determine." },
      ],
    },
    {
      id: "de-u62l3",
      unit: 62,
      lesson: 3,
      title: "Termine und Treffen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Organize something with other people: arrange to meet, go along with somebody, name the event, sign up for it, host it, and say when it takes place.",
      items: [
        { id: "de-u62l3-sichverabreden", type: "vocab", front: "sich verabreden", reading: "sichverabreden", meaning: "to arrange to meet", example: { jp: "Wir haben uns für Samstag verabredet, und ich freue mich schon sehr.", en: "We've arranged to meet on Saturday, and I'm already looking forward to it." }, drill: { jp: "Hier kann man sich verabreden", en: "You can arrange to meet here" }, accept: ["to arrange to meet", "arrange to meet", "to make a date", "to agree to meet", "to meet up"], hint: "From reden (to talk): to talk a meeting into place. sich mit jemandem verabreden; verabredet sein = to have plans." },
        { id: "de-u62l3-begleiten", type: "vocab", front: "begleiten", reading: "begleiten", meaning: "to accompany", example: { jp: "Meine Schwester begleitet mich zum Arzt, weil ich große Angst habe.", en: "My sister is coming with me to the doctor, because I'm very afraid." }, drill: { jp: "Zwei Kollegen begleiten uns morgen", en: "Two colleagues are accompanying us tomorrow" }, accept: ["to accompany", "accompany", "to go with", "go with", "to escort", "to come along with"], hint: "be- + leiten (to lead): to go along beside somebody. Inseparable: sie begleitet mich." },
        { id: "de-u62l3-dieveranstaltung", type: "vocab", front: "die Veranstaltung", reading: "dieveranstaltung", meaning: "the event", example: { jp: "Die Veranstaltung war gut, obwohl viel weniger Gäste gekommen sind.", en: "The event was good, although far fewer guests came." }, drill: { jp: "Die Veranstaltung findet am Samstag statt", en: "The event takes place on Saturday" }, accept: ["event", "the event", "function", "the function", "occasion", "the occasion"], hint: "From veranstalten, to put on. Unlike das Ereignis (u55), somebody has to ORGANIZE a Veranstaltung." },
        { id: "de-u62l3-anmelden", type: "vocab", front: "anmelden", reading: "anmelden", meaning: "to register", example: { jp: "Man muss sich für den Kurs anmelden, sonst darf man nicht kommen.", en: "You have to register for the course, otherwise you may not come." }, drill: { jp: "Wir müssen uns heute anmelden", en: "We have to register today" }, accept: ["to register", "register", "to sign up", "sign up", "to enrol", "to enroll", "to announce", "to report"], hint: "an + melden (to report). sich anmelden = to register yourself; einen Besuch anmelden = to announce a visit." },
        { id: "de-u62l3-dergastgeber", type: "vocab", front: "der Gastgeber", reading: "dergastgeber", meaning: "the host", example: { jp: "Der Gastgeber hat den ganzen Tag gekocht, und es hat sich sehr gelohnt.", en: "The host cooked all day, and it was really worth it." }, drill: { jp: "Der Gastgeber hat viel gekocht", en: "The host cooked a lot" }, accept: ["host", "the host", "the person hosting"], hint: "der Gast + geben: the one who gives the guests their place. A woman is die Gastgeberin." },
        { id: "de-u62l3-stattfinden", type: "vocab", front: "stattfinden", reading: "stattfinden", meaning: "to take place", example: { jp: "Das Fest findet am Samstag statt, auch wenn es den ganzen Tag regnet.", en: "The party takes place on Saturday, even if it rains all day." }, drill: { jp: "Das Fest soll am Samstag stattfinden", en: "The party is supposed to take place on Saturday" }, accept: ["to take place", "take place", "to happen", "happen", "to be held", "to occur"], hint: "die Statt (an old word for place) + finden. Separable: es findet statt. Of arranged events — never of accidents." },
      ],
    },
    {
      id: "de-u62l4",
      unit: 62,
      lesson: 4,
      title: "Wenn es anders kommt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Cope when a plan breaks: at short notice, something cancelled, the timing of it, adjusting, carrying on despite it, and saying it is urgent.",
      items: [
        { id: "de-u62l4-kurzfristig", type: "vocab", front: "kurzfristig", reading: "kurzfristig", meaning: "at short notice", example: { jp: "Er hat kurzfristig abgesagt, deshalb sind wir am Ende ohne ihn gefahren.", en: "He cancelled at short notice, so in the end we travelled without him." }, drill: { jp: "Er hat kurzfristig den Termin abgesagt", en: "He cancelled the appointment at short notice" }, accept: ["at short notice", "short-term", "short term", "last-minute", "on short notice"], hint: "kurz + die Frist (u56): with a short deadline. The exact pair to langfristig (u59)." },
        { id: "de-u62l4-ausfallen", type: "vocab", front: "ausfallen", reading: "ausfallen", meaning: "to be cancelled", example: { jp: "Der Kurs fällt heute aus, weil die Lehrerin seit gestern krank ist.", en: "The course is cancelled today, because the teacher has been ill since yesterday." }, drill: { jp: "Der Kurs kann heute ausfallen", en: "The course can be cancelled today" }, accept: ["to be cancelled", "be cancelled", "to be canceled", "to not take place", "to fall through", "to fail", "to drop out"], hint: "aus + fallen: to fall out of the schedule. Separable: der Kurs fällt aus. Also of power: der Strom fällt aus." },
        { id: "de-u62l4-derzeitpunkt", type: "vocab", front: "der Zeitpunkt", reading: "derzeitpunkt", meaning: "the point in time", example: { jp: "Der Zeitpunkt war schlecht, weil der Chef gerade im Urlaub war.", en: "The timing was bad, because the boss was on holiday just then." }, drill: { jp: "Der Zeitpunkt passt uns nicht", en: "The timing does not suit us" }, accept: ["moment", "the moment", "point in time", "the point in time", "timing", "the timing", "time"], hint: "die Zeit + der Punkt: one point on the line, not a stretch of it. Compare der Zeitraum (u59), which is the stretch." },
        { id: "de-u62l4-anpassen", type: "vocab", front: "anpassen", reading: "anpassen", meaning: "to adapt", example: { jp: "Wir müssen die Zeiten anpassen, weil das Wetter am Wochenende schlecht wird.", en: "We have to adjust the times, because the weather will be bad at the weekend." }, drill: { jp: "Wir müssen die Zeiten anpassen", en: "We have to adjust the times" }, accept: ["to adapt", "adapt", "to adjust", "adjust", "to fit", "to tailor", "to suit"], hint: "an + passen: to make it fit onto something. sich anpassen = to adapt yourself. Separable: wir passen es an." },
        { id: "de-u62l4-trotz", type: "vocab", front: "trotz", reading: "trotz", meaning: "despite", example: { jp: "Trotz des Regens ist das Fest am Samstag sehr gut gelaufen.", en: "Despite the rain the party on Saturday went very well." }, drill: { jp: "Trotz des Regens bleiben wir hier", en: "Despite the rain we are staying here" }, accept: ["despite", "in spite of", "notwithstanding", "for all"], hint: "Takes the GENITIVE, like wegen in u52: trotz des Regens, trotz der Kälte. The trotzdem you know is built on it." },
        { id: "de-u62l4-dringend", type: "vocab", front: "dringend", reading: "dringend", meaning: "urgent", example: { jp: "Die Nachricht war dringend, deshalb habe ich die Besprechung unterbrochen.", en: "The message was urgent, so I interrupted the meeting." }, drill: { jp: "Die Nachricht war sehr dringend", en: "The message was very urgent" }, accept: ["urgent", "urgently", "pressing", "badly", "desperately"], hint: "From dringen, to press through. As an adverb it strengthens a need: Ich brauche das dringend." },
      ],
    },
  ],
};
