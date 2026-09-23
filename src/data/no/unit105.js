// NO Unit 105 — Blandede følelser — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Emotion, subtle and mixed". Retitled in Norwegian per
// CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// WHY THIS IS NOT A SECOND u57. B1's `Følelser i finere nyanser` (u57) already
// takes feelings past the basic set: rasende, skamfull, forelsket, rørt,
// takknemlig, misunnelig, oppgitt, rastløs. What it teaches is feelings ONE AT A
// TIME, each at its own strength. The B2 move is different in kind, not degree:
// feelings that are MIXED, feelings that CONTRADICT each other, and the vocabulary
// for standing outside a feeling and naming it — which is register and abstraction
// rather than more adjectives.
//
// GENDER — §1's -het/-else rule does almost all the work here and a skim gets it
// wrong every time. ALL of these are MASCULINE, none is `ei`:
//   en lettelse · en skuffelse · en erkjennelse · en innlevelse   (-else)
//   en ydmykhet                                                    (-het)
//   en resignasjon                                                 (-sjon)
// ⚠ FIRST AND ONLY FEMININE IN THIS UNIT is `ei undring` (l4) — -ing, so `ei` per
// §1 — and it carries the §1 recognition note. A unit this full of emotion nouns
// with only one feminine is itself the lesson.
// MASS NOUNS TAUGHT BARE per §1(b), each decided by §1's real test — is the
// indefinite singular idiomatic for the sense taught?
//   `vemod` · `avmakt` · `uro` · `stolthet` · `nostalgi` · `ubehag`
// None of these is counted: "en stolthet" and "et vemod" are not things a
// Norwegian says. Gender for the definite is named in each hint.
//
// SCOPE: frozen base u1–u87 plus u101–u104 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT105 = {
  id: "no-u105",
  lang: "no",
  title: "Blandede følelser",
  order: 105,
  stage: "b2",
  lessons: [
    // Lesson 1: two feelings at once. The whole unit turns on this lesson —
    // English reaches for "but" here, and Norwegian has single words.
    {
      id: "no-u105l1",
      unit: 105,
      lesson: 1,
      title: "To følelser på én gang",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that you feel two things at once — mixed, conflicting or genuinely undecided — instead of picking one.",
      items: [
        { id: "no-u105l1-blandet", type: "vocab", front: "blandet", reading: "blandet", meaning: "mixed", example: { jp: "Hun hadde et blandet inntrykk etter møtet.", en: "She had a mixed impression after the meeting." }, accept: ["of two minds", "combined"], drill: { jp: "Resultatet var blandet og vanskelig", en: "The result was mixed and difficult" }, hint: "The past participle of å blande, used as an adjective. Plural and definite take -e: blandede følelser is close to a set phrase. THE ordinary way a Norwegian declines to give a single verdict." },
        { id: "no-u105l1-motstridende", type: "vocab", front: "motstridende", reading: "motstridende", meaning: "conflicting", example: { jp: "Vi fikk motstridende opplysninger fra to kilder.", en: "We got conflicting information from two sources." }, accept: ["contradictory", "at odds"], drill: { jp: "Denne saken er motstridende og vanskelig", en: "This case is conflicting and difficult" }, hint: "mot + å stride, to fight — things fighting AGAINST each other. An invariant -ende participle like gripende (u104): et motstridende svar, motstridende følelser. Stronger than blandet, which merely sits side by side." },
        { id: "no-u105l1-ambivalent", type: "vocab", front: "ambivalent", reading: "ambivalent", meaning: "ambivalent", example: { jp: "Han er ambivalent til hele saken.", en: "He is ambivalent about the whole matter." }, accept: ["in two minds", "torn"], drill: { jp: "Jeg er ambivalent til dette forslaget", en: "I am ambivalent about this proposal" }, hint: "Takes til, not om: ambivalent TIL noe. A borrowed word and a slightly bookish one — it belongs to the register of a kronikk (u104), not a kitchen conversation." },
        { id: "no-u105l1-tvetydig", type: "vocab", front: "tvetydig", reading: "tvetydig", meaning: "ambiguous", example: { jp: "Svaret hans var tvetydig og kort.", en: "His answer was ambiguous and short." }, accept: ["equivocal", "open to two readings"], drill: { jp: "Denne setningen er tvetydig og vanskelig", en: "This sentence is ambiguous and difficult" }, hint: "tve- (two, as in twice) + tydig, from tydelig (u51) — readable two ways. ⚠ ABOUT THE WORDS, NOT THE FEELING: a person is ambivalent, a sentence is tvetydig. An -ig adjective, so invariant in the neuter (§8b)." },
        { id: "no-u105l1-vemod", type: "vocab", front: "vemod", reading: "vemod", meaning: "wistful sadness", example: { jp: "Det ligger et stille vemod over hele boka.", en: "A quiet wistfulness lies over the whole book." }, accept: ["melancholy", "wistfulness"], drill: { jp: "Hun kjente vemod etter turen", en: "She felt a wistful sadness after the trip" }, hint: "⚠ BARE, NO ARTICLE (§1b) — mass; \"et vemod\" is not said. Neuter for the definite: vemodet. Not sorrow and not depression (u67): vemod is the gentle ache of something lovely being over, and Norwegian literature runs on it." },
        { id: "no-u105l1-enlettelse", type: "vocab", front: "en lettelse", reading: "enlettelse", meaning: "a relief", example: { jp: "Det var en stor lettelse å høre at alt gikk bra.", en: "It was a great relief to hear that everything went well." }, accept: ["a weight off", "reassurance"], drill: { jp: "Svaret kom som en lettelse", en: "The answer came as a relief" }, hint: "⚠ MASCULINE. lett (u16, light) + -else, and §1 is explicit that -else has no feminine form: en lettelse, lettelsen. The feeling of weight coming OFF — which is why it so often sits beside vemod in the same sentence." },
      ],
    },
    // Lesson 2: the feelings that follow a loss of control. Norwegian names these
    // precisely and a learner reaching for English lands wide.
    {
      id: "no-u105l2",
      unit: 105,
      lesson: 2,
      title: "Skuffelse og avmakt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what a setback does to you — disappointment, despair, being overwhelmed, and the particular feeling of having no power at all.",
      items: [
        { id: "no-u105l2-enskuffelse", type: "vocab", front: "en skuffelse", reading: "enskuffelse", meaning: "a disappointment", example: { jp: "Resultatet var en skuffelse for hele familien.", en: "The result was a disappointment for the whole family." }, accept: ["a letdown", "a blow"], drill: { jp: "Dette ble en skuffelse for mange", en: "This became a disappointment for many" }, hint: "⚠ MASCULINE (-else, §1): en skuffelse, skuffelsen. The noun behind skuffende (u64). Used of the EVENT as well as the feeling — han var en skuffelse means the person let people down." },
        { id: "no-u105l2-enresignasjon", type: "vocab", front: "en resignasjon", reading: "enresignasjon", meaning: "resignation (giving up)", example: { jp: "Det lå en stille resignasjon over hele samtalen.", en: "A quiet resignation lay over the whole conversation." }, accept: ["acceptance of defeat", "giving in"], drill: { jp: "Han svarte med en resignasjon til slutt", en: "He answered with resignation in the end" }, hint: "⚠ MASCULINE — every -sjon noun is (§1 and u103l4). NOT quitting a job: that is å si opp. This is the inward act of stopping the fight, and Norwegian keeps the two senses apart where English does not." },
        { id: "no-u105l2-fortvilet", type: "vocab", front: "fortvilet", reading: "fortvilet", meaning: "in despair", example: { jp: "Hun var helt fortvilet etter ulykka.", en: "She was completely in despair after the accident." }, accept: ["desperate", "distraught"], drill: { jp: "Han var fortvilet etter ulykka", en: "He was in despair after the accident" }, hint: "From tvil (doubt, cf. å tvile u74) — for-tvilet is doubt taken all the way down. Stronger than lei seg and stronger than trist: this is the word for someone who cannot see a way out." },
        { id: "no-u105l2-overveldet", type: "vocab", front: "overveldet", reading: "overveldet", meaning: "overwhelmed", example: { jp: "Jeg ble overveldet av god hjelp.", en: "I was overwhelmed by good help." }, accept: ["swamped", "bowled over"], drill: { jp: "Hun var overveldet av alt arbeidet", en: "She was overwhelmed by all the work" }, hint: "Takes av for what does it: overveldet AV noe. ⚠ WORKS BOTH WAYS — you can be overveldet by kindness as easily as by work, which is why the example is the good version and the drill the hard one." },
        { id: "no-u105l2-avmakt", type: "vocab", front: "avmakt", reading: "avmakt", meaning: "powerlessness", example: { jp: "Mange kjenner avmakt når ingen svarer.", en: "Many feel powerlessness when nobody answers." }, accept: ["helplessness", "impotence"], drill: { jp: "Han kjente avmakt hele tida", en: "He felt powerlessness the whole time" }, hint: "⚠ BARE, NO ARTICLE (§1b) — mass. av + makt (u55) — power taken away. Feminine for the definite: avmakta. The exact word for facing an institution that will not move, so it belongs with u78 as much as with feelings." },
        { id: "no-u105l2-uro", type: "vocab", front: "uro", reading: "uro", meaning: "unease", example: { jp: "Det er uro i landet etter nyheten.", en: "There is unease in the country after the news." }, accept: ["disquiet", "restlessness", "unrest"], drill: { jp: "Det er mye uro her", en: "There is a lot of unease here" }, hint: "⚠ BARE (§1b) — mass. u- (the negative prefix from u71) + ro, calm. Feminine: uroa. Covers both an inner feeling and public unrest — uro i markedet, uro i kroppen — and the example uses the political sense." },
      ],
    },
    // Lesson 3: the quiet ones. These are the feelings a Norwegian will admit to
    // in writing rather than out loud, which makes them B2 register.
    {
      id: "no-u105l3",
      unit: 105,
      lesson: 3,
      title: "Stolthet og lengsel",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the quieter feelings — pride, humility, contentment and longing — and say what you feel them about.",
      items: [
        { id: "no-u105l3-stolthet", type: "vocab", front: "stolthet", reading: "stolthet", meaning: "pride", example: { jp: "Hun snakket om arbeidet sitt med stolthet.", en: "She spoke about her work with pride." }, accept: ["a sense of pride"], drill: { jp: "Han snakker om sønnen med stolthet", en: "He talks about his son with pride" }, hint: "⚠ BARE (§1b) — mass. stolt + -het, and -het is masculine (§1): stoltheten. ⚠ NORWEGIAN IS CAREFUL WITH THIS WORD. Janteloven makes open stolthet over oneself socially awkward; over your child or your work it is entirely safe." },
        { id: "no-u105l3-enydmykhet", type: "vocab", front: "en ydmykhet", reading: "enydmykhet", meaning: "humility", example: { jp: "Han snakket om prisen med ydmykhet.", en: "He spoke about the prize with humility." }, accept: ["modesty", "humbleness"], drill: { jp: "Han har en ydmykhet vi liker", en: "He has a humility we like" }, hint: "⚠ MASCULINE (-het, §1): en ydmykhet, ydmykheten. ⚠ NOT ydmyket, which means humiliated — that is something done TO you and is entirely negative. Ydmykhet is a virtue and one Norwegians praise openly." },
        { id: "no-u105l3-ubehag", type: "vocab", front: "ubehag", reading: "ubehag", meaning: "discomfort", example: { jp: "Hun kjente ubehag under hele møtet.", en: "She felt discomfort during the whole meeting." }, accept: ["unpleasantness", "unease (physical)"], drill: { jp: "Han kjente ubehag under møtet", en: "He felt discomfort during the meeting" }, hint: "⚠ BARE (§1b) — mass. u- + behag, pleasure. Neuter: ubehaget. Covers the physical and the social at once: ubehag i kroppen and ubehag ved å si nei are the same word." },
        { id: "no-u105l3-tilfreds", type: "vocab", front: "tilfreds", reading: "tilfreds", meaning: "quietly satisfied", example: { jp: "Han virket tilfreds med livet sitt.", en: "He seemed quietly satisfied with his life." }, accept: ["content", "at peace with"], drill: { jp: "Hun er tilfreds med svaret", en: "She is quietly satisfied with the answer" }, hint: "Takes med. ⚠ QUIETER THAN fornøyd (u57), which is the ordinary word for pleased with a result. Tilfreds is a settled state rather than a reaction — a person is tilfreds with a life, fornøyd with a meal. Invariant." },
        { id: "no-u105l3-nostalgi", type: "vocab", front: "nostalgi", reading: "nostalgi", meaning: "nostalgia", example: { jp: "Gamle bilder gir meg nostalgi.", en: "Old pictures give me nostalgia." }, accept: ["longing for the past"], drill: { jp: "Musikken gir henne nostalgi", en: "The music gives her nostalgia" }, hint: "⚠ BARE (§1b) — mass. Masculine: nostalgien. Close to vemod (l1) and worth keeping apart: vemod can be about anything passing, nostalgi is specifically about the past being gone." },
        { id: "no-u105l3-enlengsel", type: "vocab", front: "en lengsel", reading: "enlengsel", meaning: "a longing", example: { jp: "Han kjente en sterk lengsel etter familien.", en: "He felt a strong longing for his family." }, accept: ["a yearning", "an ache for"], drill: { jp: "Hun har en lengsel etter noe mer", en: "She has a longing for something more" }, hint: "Masculine; plural lengsler. Takes etter for what you long for. From lang — a longing is a LENGTHENING towards something. Compare å savne (u22), which needs a specific object; en lengsel can be for nothing nameable." },
      ],
    },
    // Lesson 4: standing outside a feeling and naming it. This is the register
    // move that makes the unit B2 rather than a longer u57.
    {
      id: "no-u105l4",
      unit: 105,
      lesson: 4,
      title: "Å sette ord på det",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk ABOUT feeling rather than from inside it — what you realise, what you push away and what you work through.",
      items: [
        { id: "no-u105l4-eiundring", type: "vocab", front: "ei undring", reading: "eiundring", meaning: "a sense of wonder", example: { jp: "Det er ei stor undring i måten han spør på.", en: "There is a great wonder in the way he asks." }, accept: ["wonderment", "curiosity"], drill: { jp: "Han møter verden med ei undring", en: "He meets the world with a sense of wonder" }, hint: "⚠ THE ONLY FEMININE IN THIS UNIT — -ing takes ei (§1), definite undringa, while moderate Bokmål writes undringen and that is what you meet in print. From å undre seg. Not doubt: undring is the pleasure of not yet knowing." },
        { id: "no-u105l4-enerkjennelse", type: "vocab", front: "en erkjennelse", reading: "enerkjennelse", meaning: "a realisation", example: { jp: "Det kom en tung erkjennelse til slutt.", en: "A heavy realisation came in the end." }, accept: ["an acknowledgement", "a dawning recognition"], drill: { jp: "Dette var en erkjennelse for henne", en: "This was a realisation for her" }, hint: "⚠ MASCULINE (-else, §1). From å kjenne (u1) with er- — coming to know something you had been avoiding. Heavier than en innsikt (u58): an innsikt is clever, an erkjennelse costs you something." },
        { id: "no-u105l4-afortrenge", type: "vocab", front: "å fortrenge", reading: "afortrenge", meaning: "to suppress", example: { jp: "Mange fortrenger vanskelige minner.", en: "Many suppress difficult memories." }, accept: ["to repress", "to push away", "to block out"], drill: { jp: "Det er lett å fortrenge slike minner", en: "It is easy to suppress such memories" }, hint: "for + å trenge (u13) — to push something out of the way. ⚠ NOT å skjule (u57), which is hiding a feeling from OTHERS. Fortrenge is hiding it from yourself, and it is the standard term in Norwegian psychology." },
        { id: "no-u105l4-abearbeide", type: "vocab", front: "å bearbeide", reading: "abearbeide", meaning: "to work through", example: { jp: "Han trenger tid til å bearbeide alt.", en: "He needs time to work through everything." }, accept: ["to process", "to come to terms with"], drill: { jp: "Hun begynner å bearbeide det vanskelige", en: "She begins to work through the difficult part" }, hint: "be- + arbeide (u13) — to work ON something until it changes. The exact opposite of å fortrenge above, and the pair is how Norwegian talks about grief. Also ordinary and unemotional: å bearbeide et manus (u64)." },
        { id: "no-u105l4-aromme", type: "vocab", front: "å romme", reading: "aromme", meaning: "to hold within", example: { jp: "Et menneske kan romme mange følelser samtidig.", en: "A person can hold many feelings at the same time." }, accept: ["to contain", "to have room for", "to encompass"], drill: { jp: "Boka klarer å romme hele livet", en: "The book manages to hold a whole life" }, hint: "From et rom, a room — to have room for. ⚠ THE WORD THIS WHOLE UNIT IS BUILT TOWARDS: it is how Norwegian says a person contains contradictory feelings without resolving them. Compare å omfatte (u58), which is cold and administrative." },
        { id: "no-u105l4-eninnlevelse", type: "vocab", front: "en innlevelse", reading: "eninnlevelse", meaning: "empathic immersion", example: { jp: "Hun leser med stor innlevelse.", en: "She reads with great immersion." }, accept: ["empathy (in performance)", "feeling oneself into"], drill: { jp: "Han spiller med en innlevelse alle ser", en: "He plays with an immersion everyone sees" }, hint: "⚠ MASCULINE (-else, §1). inn + å leve — living your way INTO something. Not quite empathy: it is what an actor, a reader or a good listener does, and Norwegian reviewers use it as the highest praise for a performance." },
      ],
    },
  ],
};
