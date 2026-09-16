// NO Unit 57 — Følelser i finere nyanser ("Emotion, finer shades") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Emotion, finer shades"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ A2 TAUGHT THE BASIC FEELING WORDS: glad, trist, sint, redd, spent, skuffet,
// lettet, nervøs, stolt, sjalu, flau, ensom, bekymret, overrasket, sjenert,
// modig, omtenksom, utadvendt, nysgjerrig. u57 takes the DEGREES and the
// DISTINCTIONS above them: sint → rasende, flau → skamfull, glad → lykkelig,
// redd → å frykte, and the three pairs an English speaker collapses.
//
// ⚠ THE THREE DISTINCTIONS ENGLISH LOSES, and they are the reason this unit
// exists rather than being a longer list of adjectives:
//     sjalu vs misunnelig  — English says "jealous" for both. You are sjalu about
//                            someone you are afraid to LOSE, and misunnelig of
//                            what someone HAS. (l3)
//     glad vs lykkelig     — English says "happy" for both. Norwegians say glad
//                            constantly and lykkelig rarely, and mean it. (l2)
//     flau vs skamfull     — English says "embarrassed/ashamed" loosely. Flau is
//                            awkwardness; skamfull means you think you did
//                            wrong. (l1)
// Each pair's hint states the contrast against the A2 word explicitly, because
// the A2 word is already in the learner's mouth and will otherwise absorb the
// new one.
//
// FIRST FEMININE of the unit: there is NONE. Every new noun here is neuter
// (et humør) — everything else is an adjective or a verb. No en-/ei- note owed.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): rørt → "rort",
// fornøyd → "fornoyd", rastløs → "rastlos", å avsløre → "aavslore",
// å trøste → "atroste", et humør → "ethumor".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT57 = {
  id: "no-u57",
  lang: "no",
  title: "Følelser i finere nyanser",
  order: 57,
  stage: "b1",
  lessons: [
    // Lesson 1: feeling at full volume. Every card here is one step above a word
    // the learner already owns, and each hint names the A2 word it outranks.
    {
      id: "no-u57l1",
      unit: 57,
      lesson: 1,
      title: "Sterke følelser",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a feeling at full strength — furious rather than cross, hating, crying, dreading something, ashamed rather than merely embarrassed, and falling in love.",
      items: [
        { id: "no-u57l1-rasende", type: "vocab", front: "rasende", reading: "rasende", meaning: "furious", example: { jp: "Han var rasende da han hørte prisen.", en: "He was furious when he heard the price." }, drill: { jp: "Hun var rasende i går", en: "She was furious yesterday" }, accept: ["livid", "enraged", "seething", "raging"], hint: "RA-sen-de. Å rase is to rage, and -ende makes the ongoing form — you are in the middle of raging. It never takes an ending. ⚠ Far stronger than sint: sint is cross, rasende is out of control." },
        { id: "no-u57l1-ahate", type: "vocab", front: "å hate", reading: "ahate", meaning: "to hate", example: { jp: "Jeg hater å vente på en buss om vinteren.", en: "I hate waiting for a bus in the winter." }, drill: { jp: "Han begynner å hate vinteren", en: "He is starting to hate the winter" }, accept: ["hate", "to loathe", "loathe", "to detest"], hint: "HA-te. Present hater, past hatet. The exact opposite of å elske, and used just as freely in Norwegian as in English — jeg hater mandager." },
        { id: "no-u57l1-agrate", type: "vocab", front: "å gråte", reading: "agrate", meaning: "to cry", example: { jp: "Barnet gråt hele natta.", en: "The child cried all night." }, drill: { jp: "Det er godt å gråte noen ganger", en: "It is good to cry sometimes" }, accept: ["cry", "to weep", "weep", "to shed tears"], hint: "GRAW-te. Present gråter, past gråt, perfect har grått. ⚠ Not the same as å skrike, to scream — a small child can do both, and only one of them is gråte." },
        { id: "no-u57l1-afrykte", type: "vocab", front: "å frykte", reading: "afrykte", meaning: "to fear", example: { jp: "Mange frykter at været blir verre.", en: "Many people fear that the weather will get worse." }, drill: { jp: "Det er lett å frykte ei endring", en: "It is easy to fear a change" }, accept: ["fear", "to dread", "dread", "to be afraid of"], hint: "FRUEK-te. Present frykter, past fryktet. ⚠ Heavier and more formal than å være redd: you are redd of a dog and you frykter a war. En frykt is the noun." },
        { id: "no-u57l1-skamfull", type: "vocab", front: "skamfull", reading: "skamfull", meaning: "ashamed", example: { jp: "Han var skamfull etter det han sa.", en: "He was ashamed after what he said." }, drill: { jp: "Hun var skamfull hele dagen", en: "She was ashamed all day" }, accept: ["full of shame", "mortified", "shamefaced", "guilty and sorry"], hint: "SKAM-full. Ei skam, shame, plus full, full of it. Neuter skamfullt, plural skamfulle. ⚠ Much deeper than flau, which is only awkwardness — skamfull means you believe you did wrong." },
        { id: "no-u57l1-forelsket", type: "vocab", front: "forelsket", reading: "forelsket", meaning: "in love", example: { jp: "De ble forelsket den første sommeren.", en: "They fell in love that first summer." }, drill: { jp: "Han er forelsket i henne", en: "He is in love with her" }, accept: ["smitten", "infatuated", "head over heels", "in love with someone"], hint: "for-EL-sket. ⚠ Always with i: forelsket I noen, never *forelsket med. Norwegian separates the two stages sharply — å bli forelsket is falling for someone, and å elske is the settled love that comes later." },
      ],
    },
    // Lesson 2: the quiet good feelings, which Norwegian has more of than English
    // and uses more carefully. lykkelig carries the glad/lykkelig contrast.
    {
      id: "no-u57l2",
      unit: 57,
      lesson: 2,
      title: "Milde følelser",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the quiet good feelings — moved by something, grateful for it, safe, deeply happy, satisfied with a result, and in cheerful spirits.",
      items: [
        { id: "no-u57l2-rort", type: "vocab", front: "rørt", reading: "rort", meaning: "moved", example: { jp: "Hun ble rørt av brevet fra broren.", en: "She was moved by the letter from her brother." }, drill: { jp: "Han ble rørt av sangen", en: "He was moved by the song" }, accept: ["touched", "emotional", "choked up", "affected"], hint: "RURT. The past participle of å røre, to stir or to touch — your feelings have been stirred. Neuter rørt, plural rørte. Å bli rørt is the usual frame." },
        { id: "no-u57l2-takknemlig", type: "vocab", front: "takknemlig", reading: "takknemlig", meaning: "grateful", example: { jp: "Jeg er takknemlig fordi du kom.", en: "I am grateful because you came." }, drill: { jp: "Han er takknemlig i dag", en: "He is grateful today" }, accept: ["thankful", "appreciative", "full of thanks"], hint: "takk-NEM-li — silent g. Takk plus nem, quick to take — quick to take a kindness and mean it. Neuter takknemlig, plural takknemlige. ⚠ Always takknemlig FOR something." },
        { id: "no-u57l2-trygg", type: "vocab", front: "trygg", reading: "trygg", meaning: "safe", example: { jp: "Barna er trygge når de går til skolen her.", en: "The children are safe when they walk to school here." }, drill: { jp: "Byen er trygg om natta", en: "The city is safe at night" }, accept: ["secure", "at ease", "safe and sound", "reassured"], hint: "TRUEGG. Neuter trygt, plural trygge. ⚠ It means safe as in FEELING safe, not safe as in unharmed. Trygghet is one of the words Norwegian politics reaches for most, and it is hard to translate without losing the warmth." },
        { id: "no-u57l2-lykkelig", type: "vocab", front: "lykkelig", reading: "lykkelig", meaning: "deeply happy", example: { jp: "De var lykkelige hele sommeren.", en: "They were deeply happy all summer." }, drill: { jp: "Han var lykkelig den dagen", en: "He was deeply happy that day" }, accept: ["joyful", "blissful", "happy", "overjoyed"], hint: "LUEK-ke-li — silent g. Ei lykke, happiness or luck, plus -lig. ⚠ Much stronger than glad, which is the ordinary everyday \"happy\". Norwegians say glad constantly and lykkelig rarely — and they mean it when they do." },
        { id: "no-u57l2-fornoyd", type: "vocab", front: "fornøyd", reading: "fornoyd", meaning: "satisfied", example: { jp: "Sjefen er fornøyd med resultatet.", en: "The boss is satisfied with the result." }, drill: { jp: "Hun er fornøyd med jakka", en: "She is satisfied with the jacket" }, accept: ["pleased", "content", "happy with it", "satisfied with"], hint: "for-NOYD. ⚠ Always with med: fornøyd MED noe. Neuter fornøyd, plural fornøyde. It is the standard Norwegian verdict on a result — veldig fornøyd is real praise." },
        { id: "no-u57l2-munter", type: "vocab", front: "munter", reading: "munter", meaning: "cheerful", example: { jp: "Han er munter selv om det regner.", en: "He is cheerful even though it is raining." }, drill: { jp: "Hun er munter i dag", en: "She is cheerful today" }, accept: ["jolly", "in good spirits", "merry", "bright"], hint: "MUN-ter. Neuter muntert, plural muntre — ⚠ the -e- drops in the plural, exactly as in vakker → vakre. Cheerful in the outward, visible way: a munter person is good to be near." },
      ],
    },
    // Lesson 3: the low-grade bad feelings — the ones that last all day without
    // ever becoming a crisis. misunnelig carries the sjalu/misunnelig contrast.
    {
      id: "no-u57l3",
      unit: 57,
      lesson: 3,
      title: "Ubehag",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the low-grade bad feelings — irritated with someone, envious of what they have, fed up, stressed, unable to settle — and say what is bothering you.",
      items: [
        { id: "no-u57l3-irritert", type: "vocab", front: "irritert", reading: "irritert", meaning: "irritated", example: { jp: "Han blir irritert når bussen er forsinket.", en: "He gets irritated when the bus is late." }, drill: { jp: "Hun er irritert på meg", en: "She is irritated with me" }, accept: ["annoyed", "cross", "exasperated", "peeved"], hint: "i-ri-TERT. Neuter irritert, plural irriterte. ⚠ The preposition depends on what you are irritated at: irritert PÅ a person, irritert OVER a thing. Milder than sint, and it wears off." },
        { id: "no-u57l3-misunnelig", type: "vocab", front: "misunnelig", reading: "misunnelig", meaning: "envious", example: { jp: "Han er misunnelig på broren sin.", en: "He is envious of his brother." }, drill: { jp: "Hun er misunnelig på oss", en: "She is envious of us" }, accept: ["jealous of what they have", "covetous", "green with envy"], hint: "mis-UN-ne-li — silent g. Å misunne is to begrudge. ⚠ Not the same as sjalu, which you already know: you are misunnelig of what someone HAS, and sjalu about someone you are afraid to LOSE. English says \"jealous\" for both; Norwegian never does." },
        { id: "no-u57l3-oppgitt", type: "vocab", front: "oppgitt", reading: "oppgitt", meaning: "fed up", example: { jp: "Læreren var oppgitt etter en lang time.", en: "The teacher was exasperated after a long lesson." }, drill: { jp: "Han var oppgitt hele dagen", en: "He was exasperated all day" }, accept: ["exasperated", "at wit's end", "resigned", "despairing"], hint: "OPP-yitt. The participle of å gi opp, to give up — you have given up on the thing. Neuter oppgitt, plural oppgitte. It is exasperation with the fight gone out of it." },
        { id: "no-u57l3-stresset", type: "vocab", front: "stresset", reading: "stresset", meaning: "stressed", example: { jp: "Alle er stresset før en eksamen.", en: "Everyone is stressed before an exam." }, drill: { jp: "Han er stresset på arbeid", en: "He is stressed at work" }, accept: ["under stress", "frazzled", "wound up", "stressed out"], hint: "STRES-set. Borrowed whole from English and thoroughly Norwegian now. Neuter stresset, plural stressa or stressede. Å stresse is the verb, and ikke stress! means calm down." },
        { id: "no-u57l3-rastlos", type: "vocab", front: "rastløs", reading: "rastlos", meaning: "restless", example: { jp: "Han blir rastløs når han sitter stille.", en: "He gets restless when he sits still." }, drill: { jp: "Hun er rastløs i dag", en: "She is restless today" }, accept: ["fidgety", "unsettled", "antsy", "unable to settle"], hint: "RAST-los. Ei rast, a rest or a break, plus -løs, without — the same -løs that makes arbeidsløs, out of work. Neuter rastløst, plural rastløse." },
        { id: "no-u57l3-aplage", type: "vocab", front: "å plage", reading: "aplage", meaning: "to bother", example: { jp: "Trafikken plager naboene hver kveld.", en: "The traffic bothers the neighbours every evening." }, drill: { jp: "Det er lett å plage en nabo", en: "It is easy to bother a neighbour" }, accept: ["bother", "to pester", "pester", "to trouble", "to torment"], hint: "PLA-ge. Present plager, past plaget. Ei plage is the nuisance itself. Hva plager deg? is what a Norwegian doctor asks: \"what's troubling you?\"" },
      ],
    },
    // Lesson 4: what you do with a feeling once you have it. å skjule and å avsløre
    // are the pair; å tie sits with them because choosing silence is the third
    // option, and it is a verb English has no single word for.
    {
      id: "no-u57l4",
      unit: 57,
      lesson: 4,
      title: "Å vise og skjule",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Manage what shows — hide a feeling, give one away, comfort someone who is upset, deliberately say nothing, name the mood you are in, and react to news.",
      items: [
        { id: "no-u57l4-askjule", type: "vocab", front: "å skjule", reading: "askjule", meaning: "to hide", example: { jp: "Hun skjulte brevet i en skuff.", en: "She hid the letter in a drawer." }, drill: { jp: "Det er lett å skjule en følelse", en: "It is easy to hide a feeling" }, accept: ["hide", "to conceal", "conceal", "to cover up"], hint: "SHU-le — skj is the broad hush, the same sound as in ei skje. Present skjuler, past skjulte. You skjuler a thing or a feeling; you gjemmer something you mean to find again." },
        { id: "no-u57l4-aavslore", type: "vocab", front: "å avsløre", reading: "aavslore", meaning: "to reveal", example: { jp: "Avisa avslørte hele saka i går.", en: "The newspaper revealed the whole story yesterday." }, drill: { jp: "Det er lett å avsløre en fordom", en: "It is easy to expose a prejudice" }, accept: ["reveal", "to expose", "expose", "to give away", "to disclose"], hint: "AV-slo-re. Av plus sløre, to veil — to take the veil off. Present avslører, past avslørte. It is the word for an exposé in a newspaper and for a face that gives you away." },
        { id: "no-u57l4-atroste", type: "vocab", front: "å trøste", reading: "atroste", meaning: "to comfort", example: { jp: "Moren trøstet barnet som gråt.", en: "The mother comforted the child who was crying." }, drill: { jp: "Det er godt å trøste en venn", en: "It is good to comfort a friend" }, accept: ["comfort", "to console", "console", "to soothe"], hint: "TRUS-te. Present trøster, past trøstet. Ei trøst is the comfort itself, and en trøstepremie is a consolation prize." },
        { id: "no-u57l4-atie", type: "vocab", front: "å tie", reading: "atie", meaning: "to stay silent", example: { jp: "Han valgte å tie om det han visste.", en: "He chose to stay silent about what he knew." }, drill: { jp: "Det er lett å tie om noe", en: "It is easy to stay silent about something" }, accept: ["keep quiet", "to hold one's tongue", "to say nothing", "say nothing"], hint: "TI-e. Present tier, past tidde, perfect har tidd. ⚠ Å tie is to CHOOSE silence, where å være stille is merely to be quiet. Ti stille! is a sharp \"be quiet!\", and å tie noe i hjel is to kill a subject by never mentioning it." },
        { id: "no-u57l4-ethumor", type: "vocab", front: "et humør", reading: "ethumor", meaning: "mood", example: { jp: "Han er i godt humør i dag.", en: "He is in a good mood today." }, drill: { jp: "Et humør kan skifte raskt", en: "A mood can change quickly" }, accept: ["a mood", "spirits", "temper", "frame of mind"], hint: "hu-MUR. Neuter: definite humøret, and no plural. ⚠ FALSE FRIEND — it is not \"humour\" in the funny sense; that is humor, said HU-mor. Humør is the mood you are in: i godt humør, i dårlig humør." },
        { id: "no-u57l4-areagere", type: "vocab", front: "å reagere", reading: "areagere", meaning: "to react", example: { jp: "Hvordan reagerte hun på nyheten?", en: "How did she react to the news?" }, drill: { jp: "Det er lett å reagere raskt", en: "It is easy to react quickly" }, accept: ["react", "to respond", "respond", "to take it a certain way"], hint: "re-a-GE-re — the g is hard here, not a y. Present reagerer, past reagerte. ⚠ Always with på: å reagere PÅ noe. En reaksjon is the reaction." },
      ],
    },
  ],
};
