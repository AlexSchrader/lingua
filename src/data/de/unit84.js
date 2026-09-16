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
        { id: "de-u84l1-mal", type: "vocab", front: "mal", reading: "mal", meaning: "just, softening a request", example: { jp: "Sag mal, wo ist das Amt?", en: "Tell me, where is the public office?" }, drill: { jp: "Zeig mir mal das Buch", en: "Just show me the book" }, accept: ["just", "just for a moment", "go on", "would you"], hint: "Short for einmal. It turns an order into a friendly nudge: Guck mal!" },
        { id: "de-u84l1-bloss", type: "vocab", front: "bloß", reading: "bloss", meaning: "only, with urgency", example: { jp: "Komm bloß nicht zu spät!", en: "Just don't be late!" }, drill: { jp: "Das kostet bloß zehn Euro", en: "That only costs ten euros" }, accept: ["only", "merely", "for goodness sake", "whatever you do"], hint: "Two jobs: 'only' (bloß zehn Euro) and an urgent warning (bloß nicht!)." },
        { id: "de-u84l1-eben", type: "vocab", front: "eben", reading: "eben", meaning: "that is just how it is", example: { jp: "Er hat eben keine Zeit.", en: "He just doesn't have time." }, drill: { jp: "Das ist eben nicht leicht", en: "That's just not easy" }, accept: ["just", "simply", "that's how it is", "precisely"], hint: "The shrug word: da kann man eben nichts machen. Also means 'a moment ago'." },
        { id: "de-u84l1-einfach", type: "vocab", front: "einfach", reading: "einfach", meaning: "simply", example: { jp: "Sie will einfach nicht kommen.", en: "She simply won't come." }, drill: { jp: "Er will einfach nicht mehr", en: "He simply doesn't want to any more" }, accept: ["simply", "plainly", "easy", "straightforward"], hint: "Both 'easy' (das ist einfach) and 'just' (mach es einfach)." },
        { id: "de-u84l1-nun", type: "vocab", front: "nun", reading: "nun", meaning: "well then", example: { jp: "Nun, was machen wir jetzt?", en: "Well, what do we do now?" }, drill: { jp: "Nun müssen wir schnell gehen", en: "Now we have to go quickly" }, accept: ["well", "well then", "now then", "so"], hint: "A softer, more written jetzt. Nun ja… is the German 'Well…'." },
        { id: "de-u84l1-gar", type: "vocab", front: "gar", reading: "gar", meaning: "at all, with a negative", example: { jp: "Ich habe gar keine Zeit.", en: "I have no time at all." }, drill: { jp: "Das ist gar nicht teuer", en: "That is not expensive at all" }, accept: ["at all", "whatsoever", "not in the slightest"], hint: "As a particle it only strengthens a negative: gar nicht, gar kein. (A separate adjective gar = cooked through.)" },
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
        { id: "de-u84l2-wohl", type: "vocab", front: "wohl", reading: "wohl", meaning: "probably", example: { jp: "Das ist wohl ein Problem.", en: "That is probably a problem." }, drill: { jp: "Er kommt wohl heute nicht", en: "He probably isn't coming today" }, accept: ["probably", "I suppose", "no doubt", "I dare say"], hint: "The most German of hedges. Also 'well' in sich wohl fühlen." },
        { id: "de-u84l2-vermutlich", type: "vocab", front: "vermutlich", reading: "vermutlich", meaning: "presumably", example: { jp: "Vermutlich kommt die Sendung morgen.", en: "The consignment will presumably come tomorrow." }, drill: { jp: "Vermutlich kommt er nicht mehr", en: "He presumably isn't coming any more" }, accept: ["presumably", "most likely", "I assume", "my guess is"], hint: "vermuten = to suspect. A guess you would defend if challenged." },
        { id: "de-u84l2-angeblich", type: "vocab", front: "angeblich", reading: "angeblich", meaning: "allegedly", example: { jp: "Angeblich ist die Wohnung teuer.", en: "The flat is allegedly expensive." }, drill: { jp: "Angeblich ist der Chef krank", en: "The boss is allegedly ill" }, accept: ["allegedly", "supposedly", "reportedly", "so they say"], hint: "angeben = to claim. It marks the claim as someone else's, not yours." },
        { id: "de-u84l2-offenbar", type: "vocab", front: "offenbar", reading: "offenbar", meaning: "evidently", example: { jp: "Offenbar ist hier niemand.", en: "Evidently there is nobody here." }, drill: { jp: "Offenbar ist das Telefon defekt", en: "The phone is evidently out of order" }, accept: ["evidently", "obviously", "clearly", "plainly"], hint: "offen + bar: it lies open. Stronger than anscheinend — you can see it." },
        { id: "de-u84l2-anscheinend", type: "vocab", front: "anscheinend", reading: "anscheinend", meaning: "apparently", example: { jp: "Anscheinend kommt der Bus heute nicht.", en: "Apparently the bus isn't coming today." }, drill: { jp: "Anscheinend ist der Makler krank", en: "The estate agent is apparently ill" }, accept: ["apparently", "seemingly", "by the look of it", "it seems"], hint: "der Schein = the appearance. It LOOKS so; offenbar says it IS so." },
        { id: "de-u84l2-womoglich", type: "vocab", front: "womöglich", reading: "womoglich", meaning: "possibly", example: { jp: "Womöglich kommt die Rechnung zu spät.", en: "The bill will possibly come too late." }, drill: { jp: "Womöglich ist die Frist zu kurz", en: "The deadline is possibly too short" }, accept: ["possibly", "conceivably", "it may be that", "quite possibly"], hint: "wo + möglich. Slightly worried, where vielleicht is neutral." },
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
        { id: "de-u84l3-eigentlich", type: "vocab", front: "eigentlich", reading: "eigentlich", meaning: "actually", example: { jp: "Eigentlich wollte ich heute nicht arbeiten.", en: "Actually I didn't want to work today." }, drill: { jp: "Eigentlich ist das nicht teuer", en: "Actually that isn't expensive" }, accept: ["actually", "in fact", "really", "strictly speaking"], hint: "Introduces the true version behind the surface one. Also: eigen = own." },
        { id: "de-u84l3-uberhaupt", type: "vocab", front: "überhaupt", reading: "uberhaupt", meaning: "in the first place", example: { jp: "Hast du überhaupt Zeit?", en: "Do you even have time in the first place?" }, drill: { jp: "Das ist überhaupt kein Problem", en: "That is no problem whatsoever" }, accept: ["in the first place", "at all", "in general", "anyway"], hint: "überhaupt nicht = not at all. It also opens the bigger question: überhaupt, warum?" },
        { id: "de-u84l3-sowieso", type: "vocab", front: "sowieso", reading: "sowieso", meaning: "anyway", example: { jp: "Ich gehe sowieso in die Stadt.", en: "I'm going into town anyway." }, drill: { jp: "Das machen wir sowieso morgen", en: "We're doing that tomorrow anyway" }, accept: ["anyway", "anyhow", "either way", "in any event"], hint: "so + wie + so: it happens regardless. Spoken German's favourite." },
        { id: "de-u84l3-ohnehin", type: "vocab", front: "ohnehin", reading: "ohnehin", meaning: "as it is anyway", example: { jp: "Die Wohnung ist ohnehin zu teuer.", en: "The flat is too expensive as it is anyway." }, drill: { jp: "Wir müssen ohnehin zum Amt", en: "We have to go to the office as it is" }, accept: ["as it is", "as it is anyway", "in any case", "regardless"], hint: "The written cousin of sowieso. Same job, one register up." },
        { id: "de-u84l3-jedenfalls", type: "vocab", front: "jedenfalls", reading: "jedenfalls", meaning: "at any rate", example: { jp: "Ich weiß es nicht, jedenfalls nicht genau.", en: "I don't know, at any rate not exactly." }, drill: { jp: "Jedenfalls ist der Antrag hier", en: "At any rate the application is here" }, accept: ["at any rate", "at least", "whatever the case", "in any event"], hint: "jeder + der Fall: in every case. It often closes a paragraph." },
        { id: "de-u84l3-durchaus", type: "vocab", front: "durchaus", reading: "durchaus", meaning: "quite, granting the point", example: { jp: "Der Preis ist durchaus hoch.", en: "The price is quite high." }, drill: { jp: "Das ist durchaus gut", en: "That is quite good" }, accept: ["quite", "certainly", "perfectly well", "by all means", "absolutely"], hint: "Concedes with force: das ist durchaus richtig. durchaus nicht = definitely not." },
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
        { id: "de-u84l4-irgendwie", type: "vocab", front: "irgendwie", reading: "irgendwie", meaning: "somehow", example: { jp: "Irgendwie ist das nicht richtig.", en: "Somehow that isn't right." }, drill: { jp: "Irgendwie ist das zu teuer", en: "Somehow that is too expensive" }, accept: ["somehow", "in some way", "kind of", "sort of"], hint: "irgend- + wie. The family: irgendwo, irgendwann, irgendwer, irgendetwas." },
        { id: "de-u84l4-keineswegs", type: "vocab", front: "keineswegs", reading: "keineswegs", meaning: "by no means", example: { jp: "Das ist keineswegs richtig.", en: "That is by no means right." }, drill: { jp: "Das ist keineswegs zu teuer", en: "That is by no means too expensive" }, accept: ["by no means", "not at all", "in no way", "certainly not"], hint: "kein + der Weg: in no way. A flat, formal denial." },
      ],
    },
  ],
};
