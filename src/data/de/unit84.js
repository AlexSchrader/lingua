// DE Unit 84 — Partikeln und Gesprächswörter (slot: coverage-b1-11) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. u12 teaches doch, u29 and u36 teach the CONJUNCTIONS that join
// clauses. None of those is the German MODAL PARTICLE: the unstressed little word
// that carries the speaker's attitude and has no English equivalent. A learner
// without them sounds blunt in every sentence they speak, and can be understood
// while never sounding like a person. B1 is where it bites, because B1 is where
// sentences become turns of speech.
//
// 🚨 COLLISION RISK — LESSON 2 MAY NOT SURVIVE THE MERGE, AND THE LEAD DECIDES.
// The B1 grammar slots are unauthored stubs on this branch; their titles read, in
// full and verbatim:
//     u69  "Grammar 6 — linked and subordinate clauses"
//     u70  "Grammar 7 — passive, causative, indirect"
//     u71  "Grammar 8 — nuance, EVIDENTIALITY, nominalization"
//     u54  "Hedging and uncertainty"        u73  "Register 2 — softening and formality"
// ⚠️ An earlier version of this header paraphrased u71 as "subordination, the
// passive and nominalisation" — which kept the one word that did not clash and
// dropped the two that do. LESSON 2 OF THIS UNIT (angeblich, anscheinend,
// offenbar, womöglich, wohl, vermutlich) IS EVIDENTIALITY, and it is also
// hedging; LESSON 1 (mal, bloß, eben, einfach, nun, gar) is softening. On
// TAUGHT-WORDS.md's "lower slot wins" rule, u54, u71 and u73 all beat u84 and
// these cards are the ones deleted. Flagged, not resolved: cross-block
// reconciliation is block 1's job (CLAUDE.md "Block 1 is the CREW LEAD", step 4).
//
// FRONTS DROPPED as already taught, used in examples only:
//   doch (u12) · denn (u12) · ja (u2) · also (u29) · zwar and immerhin and
//   uebrigens and allerdings (u36) · ruhig (u10) · schliesslich (u36) ·
//   naemlich (u29) · vielleicht (u12).
// ⚠️ TWO DROPPED FOR COLLISIONS, and both are words a German speaker uses daily —
// FLAGGED FOR THE LEAD, because neither is replaceable by what is carded here:
//   "schon" — its READING FOLD is "schon", identical to schoen (u1, beautiful).
//   "halt"  — the southern twin of eben; lexeme of halten (u44).
// ⚠️ SS READING BY HAND: bloss.
// ⚠️ DRILL PUNCTUATION. lint forbids sentence-internal punctuation in a drill, so
// "wie gesagt" and "ehrlich gesagt" are drilled MID-SENTENCE, where German needs
// no comma, rather than in front position, where it would.
export const DE_UNIT84 = {
  id: "de-u84",
  lang: "de",
  title: "Partikeln und Gesprächswörter",
  order: 84,
  stage: "b1",
  lessons: [
    {
      id: "de-u84l1",
      unit: 84,
      lesson: 1,
      title: "Die Bitte weicher machen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Soften a German request with the little words that keep an order friendly.",
      items: [
        { id: "de-u84l1-eben", type: "vocab", front: "eben", reading: "eben", meaning: "that is just how it is", example: { jp: "Er hat eben keine Zeit.", en: "He just doesn't have time." }, drill: { jp: "Das ist eben nicht leicht", en: "That's just not easy" }, accept: ["just", "simply", "that's how it is", "precisely"], hint: "The shrug word: da kann man eben nichts machen. Also means 'a moment ago'." },
        { id: "de-u84l1-einfach", type: "vocab", front: "einfach", reading: "einfach", meaning: "simply", example: { jp: "Sie will einfach nicht kommen.", en: "She simply won't come." }, drill: { jp: "Er will einfach nicht mehr", en: "He simply doesn't want to any more" }, accept: ["simply", "plainly", "easy", "straightforward"], hint: "Both 'easy' (das ist einfach) and 'just' (mach es einfach)." },
        { id: "de-u84l1-nun", type: "vocab", front: "nun", reading: "nun", meaning: "well then", example: { jp: "Nun, was machen wir jetzt?", en: "Well, what do we do now?" }, drill: { jp: "Nun müssen wir schnell gehen", en: "Now we have to go quickly" }, accept: ["well", "well then", "now then", "so"], hint: "A softer, more written jetzt. Nun ja… is the German 'Well…'." },
        { id: "de-u84l1-gar", type: "vocab", front: "gar", reading: "gar", meaning: "at all, with a negative", example: { jp: "Ich habe gar keine Zeit.", en: "I have no time at all." }, drill: { jp: "Das ist gar nicht teuer", en: "That is not expensive at all" }, accept: ["at all", "whatsoever", "not in the slightest"], hint: "As a particle it only strengthens a negative: gar nicht, gar kein. (A separate adjective gar = cooked through.)" },
        { id: "de-u84l1-zufallig", type: "vocab", front: "zufällig", reading: "zufallig", meaning: "by any chance", example: { jp: "Hast du zufällig Zeit, oder passt es dir heute gar nicht?", en: "Do you have time by any chance, or does it not suit you at all today?" }, drill: { jp: "Hast du zufällig etwas Zeit", en: "Do you have any time by chance" }, accept: ["by any chance", "by chance", "happen to", "accidentally", "coincidentally"], hint: "From der Zufall. In a question it is pure politeness: Hast du zufällig…? = Do you happen to have…?" },
        { id: "de-u84l1-ausnahmsweise", type: "vocab", front: "ausnahmsweise", reading: "ausnahmsweise", meaning: "just this once", example: { jp: "Können wir ausnahmsweise um sieben arbeiten, weil der Zug früher fährt?", en: "Could we work at seven just this once, because the train leaves earlier?" }, drill: { jp: "Können wir ausnahmsweise früher gehen", en: "Could we leave earlier just this once" }, accept: ["just this once", "as an exception", "exceptionally", "for once"], hint: "From die Ausnahme: by way of exception. It asks for one and promises it will not become a habit." },
      ],
    },
    {
      id: "de-u84l2",
      unit: 84,
      lesson: 2,
      title: "Wie sicher bin ich",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how sure you are: probably, evidently, apparently, allegedly, possibly.",
      items: [
        { id: "de-u84l2-wohl", type: "vocab", front: "wohl", reading: "wohl", meaning: "no doubt", example: { jp: "Das ist wohl ein Problem.", en: "That is probably a problem." }, drill: { jp: "Er kommt wohl heute nicht", en: "He probably isn't coming today" }, accept: ["probably", "I suppose", "no doubt", "I dare say", "presumably"], hint: "The most German of hedges. Also 'well' in sich wohl fühlen." },
        { id: "de-u84l2-anscheinend", type: "vocab", front: "anscheinend", reading: "anscheinend", meaning: "seemingly", example: { jp: "Anscheinend kommt der Bus heute nicht.", en: "Apparently the bus isn't coming today." }, drill: { jp: "Anscheinend ist der Makler krank", en: "The estate agent is apparently ill" }, accept: ["apparently", "seemingly", "by the look of it", "it seems", "evidently"], hint: "der Schein = the appearance. It LOOKS so; offenbar says it IS so." },
        { id: "de-u84l2-womoglich", type: "vocab", front: "womöglich", reading: "womoglich", meaning: "conceivably", example: { jp: "Womöglich kommt die Rechnung zu spät.", en: "The bill will possibly come too late." }, drill: { jp: "Womöglich ist die Frist zu kurz", en: "The deadline is possibly too short" }, accept: ["possibly", "conceivably", "it may be that", "quite possibly", "maybe", "perhaps"], hint: "wo + möglich. Slightly worried, where vielleicht is neutral." },
        { id: "de-u84l2-zweifellos", type: "vocab", front: "zweifellos", reading: "zweifellos", meaning: "beyond question", example: { jp: "Das ist zweifellos der beste Weg, auch wenn er länger dauert.", en: "That is beyond question the best way, even if it takes longer." }, drill: { jp: "Das ist zweifellos der beste", en: "That is beyond question the best" }, accept: ["beyond question", "undoubtedly", "without doubt", "doubtless", "unquestionably"], hint: "der Zweifel + -los (without). The -los ending makes a genuinely new word, the way kostenlos does." },
        { id: "de-u84l2-eindeutig", type: "vocab", front: "eindeutig", reading: "eindeutig", meaning: "unmistakably", example: { jp: "Die Zahlen sind eindeutig, deshalb müssen wir die Regel ändern.", en: "The numbers are unmistakable, so we have to change the rule." }, drill: { jp: "Die Zahlen sind völlig eindeutig", en: "The numbers are completely unmistakable" }, accept: ["unmistakably", "unmistakable", "unambiguous", "clear-cut", "unequivocal", "definite"], hint: "ein + deutig, from deuten (to interpret): open to ONE reading only. Stronger than deutlich, which is merely easy to see." },
        { id: "de-u84l2-gewiss", type: "vocab", front: "gewiss", reading: "gewiss", meaning: "certainly", example: { jp: "Er kommt gewiss noch, denn er hat es fest versprochen.", en: "He'll certainly still come, because he firmly promised it." }, drill: { jp: "Er kommt gewiss noch heute", en: "He will certainly come today" }, accept: ["certainly", "surely", "for certain", "assuredly", "a certain"], hint: "NOT das Gewissen, the conscience — a different word that merely looks the same. gewiss also means 'a certain': ein gewisser Herr Meier." },
      ],
    },
    {
      id: "de-u84l3",
      unit: 84,
      lesson: 3,
      title: "Einräumen und einordnen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Concede a point, brush one aside, and say what holds whatever happens.",
      items: [
        { id: "de-u84l3-ohnehin", type: "vocab", front: "ohnehin", reading: "ohnehin", meaning: "as it is anyway", example: { jp: "Die Wohnung ist ohnehin zu teuer.", en: "The flat is too expensive as it is anyway." }, drill: { jp: "Wir müssen ohnehin zum Amt", en: "We have to go to the office as it is" }, accept: ["as it is", "as it is anyway", "in any case", "regardless"], hint: "The written cousin of sowieso. Same job, one register up." },
        { id: "de-u84l3-durchaus", type: "vocab", front: "durchaus", reading: "durchaus", meaning: "quite, granting the point", example: { jp: "Der Preis ist durchaus hoch.", en: "The price is quite high." }, drill: { jp: "Das ist durchaus gut", en: "That is quite good" }, accept: ["quite", "certainly", "perfectly well", "by all means", "absolutely"], hint: "Concedes with force: das ist durchaus richtig. durchaus nicht = definitely not." },
        { id: "de-u84l3-freilich", type: "vocab", front: "freilich", reading: "freilich", meaning: "admittedly", example: { jp: "Das ist freilich richtig, aber der Preis ist einfach zu hoch.", en: "That is admittedly right, but the price is simply too high." }, drill: { jp: "Das ist freilich richtig", en: "That is admittedly right" }, accept: ["admittedly", "of course", "to be sure", "granted", "certainly"], hint: "Concedes the other side before you push back: freilich…, aber… In the south it is also a plain yes." },
        { id: "de-u84l3-letztlich", type: "vocab", front: "letztlich", reading: "letztlich", meaning: "ultimately", example: { jp: "Letztlich hat die Vernunft gewonnen, obwohl der Streit lange gedauert hat.", en: "Ultimately good sense won, although the quarrel lasted a long time." }, drill: { jp: "Letztlich hat die Vernunft gewonnen", en: "Ultimately good sense won" }, accept: ["ultimately", "in the end", "when all is said and done", "at bottom"], hint: "From letzt (last): at the last. It weighs the final balance, where schließlich merely marks the end of a sequence." },
        { id: "de-u84l3-vielmehr", type: "vocab", front: "vielmehr", reading: "vielmehr", meaning: "rather", example: { jp: "Das Problem ist nicht das Geld, vielmehr ist es die Zeit.", en: "The problem isn't the money — rather, it's the time." }, drill: { jp: "Das ist vielmehr ein Zufall", en: "That is rather a coincidence" }, accept: ["rather", "on the contrary", "instead", "more precisely"], hint: "viel + mehr, but it does NOT mean 'much more' — it corrects what was just said: nicht X, vielmehr Y." },
        { id: "de-u84l3-gleichwohl", type: "vocab", front: "gleichwohl", reading: "gleichwohl", meaning: "all the same", example: { jp: "Der Preis ist hoch, gleichwohl war die Arbeit notwendig.", en: "The price is high; nevertheless the work was necessary." }, drill: { jp: "Gleichwohl war die Arbeit notwendig", en: "Nevertheless the work was necessary" }, accept: ["nevertheless", "all the same", "even so", "nonetheless"], hint: "gleich + wohl, frozen into one word. The written cousin of trotzdem." },
      ],
    },
    {
      id: "de-u84l4",
      unit: 84,
      lesson: 4,
      title: "Das Gespräch führen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Steer a longer turn of speech: sum up, refer back, flag a blunt point, deny flatly.",
      items: [
        { id: "de-u84l4-imgrunde", type: "vocab", front: "im Grunde", reading: "imgrunde", meaning: "basically", example: { jp: "Im Grunde hat er recht.", en: "Basically he is right." }, drill: { jp: "Im Grunde ist das kein Problem", en: "Basically that is not a problem" }, accept: ["basically", "fundamentally", "at bottom", "essentially"], hint: "der Grund = the bottom. Im Grunde genommen = basically speaking." },
        { id: "de-u84l4-wiegesagt", type: "vocab", front: "wie gesagt", reading: "wiegesagt", meaning: "as I said", example: { jp: "Wie gesagt, wir kommen am Montag.", en: "As I said, we're coming on Monday." }, drill: { jp: "Das ist wie gesagt kein Problem", en: "That is as I said not a problem" }, accept: ["as I said", "as mentioned", "like I said", "as already said"], hint: "Lets you repeat yourself without sounding as if you are repeating yourself." },
        { id: "de-u84l4-ehrlichgesagt", type: "vocab", front: "ehrlich gesagt", reading: "ehrlichgesagt", meaning: "to be honest", example: { jp: "Ehrlich gesagt, das Zimmer ist zu klein.", en: "To be honest, the room is too small." }, drill: { jp: "Das ist ehrlich gesagt zu teuer", en: "That is to be honest too expensive" }, accept: ["to be honest", "honestly", "frankly", "to tell the truth"], hint: "ehrlich = honest. It warns that the next thing will be blunt." },
        { id: "de-u84l4-sozusagen", type: "vocab", front: "sozusagen", reading: "sozusagen", meaning: "so to speak", example: { jp: "Er ist sozusagen der Chef hier.", en: "He is the boss here, so to speak." }, drill: { jp: "Das ist sozusagen unser Zimmer", en: "That is so to speak our room" }, accept: ["so to speak", "as it were", "in a manner of speaking"], hint: "so + zu + sagen. It flags the word beside it as not quite literal." },
        { id: "de-u84l4-nebenbei", type: "vocab", front: "nebenbei", reading: "nebenbei", meaning: "incidentally", example: { jp: "Nebenbei hat er noch erzählt, dass er bald in Urlaub fährt.", en: "Incidentally he also mentioned that he's going on holiday soon." }, drill: { jp: "Nebenbei hat er das erzählt", en: "Incidentally he mentioned that" }, accept: ["incidentally", "by the way", "in passing", "on the side"], hint: "neben + bei: alongside the main thing. nebenbei arbeiten = to have a job on the side." },
        { id: "de-u84l4-kurzgesagt", type: "vocab", front: "kurz gesagt", reading: "kurzgesagt", meaning: "in short", example: { jp: "Kurz gesagt, wir haben zu wenig Zeit und viel zu viel Arbeit.", en: "In short, we have too little time and far too much work." }, drill: { jp: "Kurz gesagt wir brauchen Zeit", en: "In short we need time" }, accept: ["in short", "to put it briefly", "in a word", "briefly"], hint: "Sits with wie gesagt and ehrlich gesagt — the -gesagt family that frames what you are about to say." },
      ],
    },
  ],
};
