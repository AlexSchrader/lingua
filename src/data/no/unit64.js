// NO Unit 64 — Medier og underholdning · 2 ("Media and entertainment 2") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Media and entertainment"; retitled per CLAUDE.md → "No front
// language", and NUMBERED · 2 because u48 already carries "Medier og
// underholdning" at A2 (RUNBOOK §4: continue the · 2 numbering when a unit
// extends an earlier one). Conventions are unit1.js §1–§9. Bokmål.
//
// ⚠ THE OVERLAP WAS REAL AND IS RESOLVED BY DIVISION OF LABOUR, not by luck.
// u48 owns the NEWSROOM and the printed page — en artikkel, ei overskrift, en
// journalist, et intervju, en redaktør, ei spalte, en roman, et kapittel, en
// forfatter, en sjanger, et sitat, en kanal, en radio, en episode, en reklame.
// u35 owns the cultural institutions — et teater, en konsert, ei forestilling,
// ei utstilling, en kunstner, ei rolle, ei stjerne. So this unit takes what
// neither has: the PEOPLE who make a film, the parts of a piece of music, and
// the vocabulary of passing a verdict on it. Every front here was checked
// against all 1215 words in TAUGHT-WORDS.md before it was written.
//
// ⚠ Block 1 owns u55 "News and society". Nothing in this unit is news
// vocabulary for that reason — no nyhet, no avis-desk words, no politics.
//
// SCOPE: the frozen base (u1–u50) plus this unit's own earlier cards. See
// unit63.js's header for the list of words an English speaker expects that are
// NOT in the base.
// FIRST FEMININE is `ei tegning` (l3), carrying the en-/ei- recognition note
// unit1.js §1 requires of every unit.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT64 = {
  id: "no-u64",
  lang: "no",
  title: "Medier og underholdning · 2",
  order: 64,
  stage: "b1",
  lessons: [
    // Lesson 1: who makes a film, and who is in it.
    {
      id: "no-u64l1",
      unit: 64,
      lesson: 1,
      title: "Film og serie",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a film or series — who made it, who is in it and who you were rooting for.",
      items: [
        { id: "no-u64l1-serie", type: "vocab", front: "en serie", reading: "enserie", meaning: "a series", example: { jp: "Vi ser på en serie fra Norge hver fredag.", en: "We watch a series from Norway every Friday." }, accept: ["series", "show", "tv series"], drill: { jp: "Vi ser på en serie fra Norge", en: "We watch a series from Norway" }, hint: "Masculine: serien. One instalment of it is en episode (u48)." },
        { id: "no-u64l1-skuespiller", type: "vocab", front: "en skuespiller", reading: "enskuespiller", meaning: "an actor", example: { jp: "Den skuespilleren spiller alltid en helt.", en: "That actor always plays a hero." }, accept: ["actor", "actress"], drill: { jp: "Han er en skuespiller fra Bergen", en: "He is an actor from Bergen" }, hint: "et skuespill (a play) + -er, the one who does it. Masculine, and the same word for men and women: skuespilleren." },
        { id: "no-u64l1-regissor", type: "vocab", front: "en regissør", reading: "enregissor", meaning: "a director", example: { jp: "Regissøren har laget tre filmer om det samme stedet.", en: "The director has made three films about the same place." }, accept: ["director", "film director"], drill: { jp: "Hun er en regissør fra Oslo", en: "She is a director from Oslo" }, hint: "A French loan, said reh-shi-SØR with the stress at the end. Masculine: regissøren. ø folds to o in the reading." },
        { id: "no-u64l1-manus", type: "vocab", front: "et manus", reading: "etmanus", meaning: "a script", example: { jp: "Manuset var bedre enn filmen.", en: "The script was better than the film." }, accept: ["script", "screenplay", "manuscript"], drill: { jp: "Han skriver et manus til en film", en: "He is writing a script for a film" }, hint: "Neuter and unchanged in the plural: et manus, flere manus, manuset. Short for manuskript, and nobody says the long form." },
        { id: "no-u64l1-hovedperson", type: "vocab", front: "en hovedperson", reading: "enhovedperson", meaning: "a main character", example: { jp: "Hovedpersonen i boka er en ung lege.", en: "The main character in the book is a young doctor." }, accept: ["main character", "protagonist", "lead"], drill: { jp: "Boka har en hovedperson jeg liker", en: "The book has a main character I like" }, hint: "et hode becomes hoved- inside a compound and means \"main\": en hovedstad (u45), en hovedperson. Masculine." },
        { id: "no-u64l1-skurk", type: "vocab", front: "en skurk", reading: "enskurk", meaning: "a villain", example: { jp: "Det er ikke lett å spille en skurk.", en: "It is not easy to play a villain." }, accept: ["villain", "baddie", "crook"], drill: { jp: "Det er ikke lett å spille en skurk", en: "It is not easy to play a villain" }, hint: "Masculine: skurken. The opposite number to en helt (u35), in a story and in real life." },
      ],
    },
    // Lesson 2: the parts of a piece of music. u19 gave musikk and en sang; this
    // gives what you say ABOUT them.
    {
      id: "no-u64l2",
      unit: 64,
      lesson: 2,
      title: "Musikk og tekst",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about music you like — the band, the tune, the beat and the words.",
      items: [
        { id: "no-u64l2-band", type: "vocab", front: "et band", reading: "etband", meaning: "a band", example: { jp: "Bandet spiller i Oslo på lørdag.", en: "The band is playing in Oslo on Saturday." }, accept: ["band", "group"], drill: { jp: "De har et band i Bergen", en: "They have a band in Bergen" }, hint: "An English loan that took Norwegian gender: et band, bandet, flere band. Said with a Norwegian a, not an English one." },
        { id: "no-u64l2-lat", type: "vocab", front: "en låt", reading: "enlat", meaning: "a track", example: { jp: "Den låten hørte jeg på radioen i går.", en: "I heard that track on the radio yesterday." }, accept: ["track", "song", "tune"], drill: { jp: "Dette er en låt fra Norge", en: "This is a track from Norway" }, hint: "The everyday word for a track; en sang (u19) is the word you would write. Masculine: låten." },
        { id: "no-u64l2-melodi", type: "vocab", front: "en melodi", reading: "enmelodi", meaning: "a melody", example: { jp: "Melodien er lett å huske.", en: "The melody is easy to remember." }, accept: ["melody", "tune"], drill: { jp: "Dette er en melodi jeg husker", en: "This is a melody I remember" }, hint: "Masculine: melodien. Stress at the end: melo-DI." },
        { id: "no-u64l2-rytme", type: "vocab", front: "en rytme", reading: "enrytme", meaning: "a rhythm", example: { jp: "Musikken har en rask rytme.", en: "The music has a fast rhythm." }, accept: ["rhythm", "beat"], drill: { jp: "Musikken har en rytme jeg liker", en: "The music has a rhythm I like" }, hint: "Masculine: rytmen. Norwegian y is a tight, rounded ee — nothing like English y." },
        { id: "no-u64l2-instrument", type: "vocab", front: "et instrument", reading: "etinstrument", meaning: "an instrument", example: { jp: "Han spiller et instrument hver dag.", en: "He plays an instrument every day." }, accept: ["instrument", "musical instrument"], drill: { jp: "Han spiller et instrument hver dag", en: "He plays an instrument every day" }, hint: "Neuter: instrumentet. Norwegian spiller et instrument, exactly as English plays one." },
        { id: "no-u64l2-tekst", type: "vocab", front: "en tekst", reading: "entekst", meaning: "a text", example: { jp: "Teksten i den sangen er trist.", en: "The words of that song are sad." }, accept: ["text", "lyrics", "words"], drill: { jp: "Jeg leser en tekst på norsk", en: "I am reading a text in Norwegian" }, hint: "Masculine: teksten. Also the lyrics of a song — teksten til låten — where English switches to a different word altogether." },
      ],
    },
    // Lesson 3: what you say about a picture or a joke — and the two -ende
    // adjectives that never change.
    {
      id: "no-u64l3",
      unit: 64,
      lesson: 3,
      title: "Kunst og humor",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you find beautiful or funny, and talk about art you have seen.",
      items: [
        { id: "no-u64l3-kunstverk", type: "vocab", front: "et kunstverk", reading: "etkunstverk", meaning: "a work of art", example: { jp: "Maleriet er et kunstverk fra 2000.", en: "The painting is a work of art from 2000." }, accept: ["work of art", "artwork"], drill: { jp: "Maleriet er et kunstverk fra Norge", en: "The painting is a work of art from Norway" }, hint: "en kunst (u35) + et verk, a work. Neuter: kunstverket." },
        { id: "no-u64l3-galleri", type: "vocab", front: "et galleri", reading: "etgalleri", meaning: "a gallery", example: { jp: "Vi så en utstilling på et galleri i byen.", en: "We saw an exhibition at a gallery in town." }, accept: ["gallery", "art gallery"], drill: { jp: "Vi var på et galleri i Oslo", en: "We were at a gallery in Oslo" }, hint: "Neuter: galleriet. Stress at the end: galle-RI, like melodi and kafé." },
        { id: "no-u64l3-tegning", type: "vocab", front: "ei tegning", reading: "eitegning", meaning: "a drawing", example: { jp: "Tegninga på veggen er laget av et barn.", en: "The drawing on the wall was made by a child." }, accept: ["drawing", "sketch"], drill: { jp: "Barnet laget ei tegning til meg", en: "The child made a drawing for me" }, hint: "From å tegne (u35). -ing nouns are feminine: ei tegning, definite tegninga. Print also uses en tegning / tegningen — both are Bokmål; this course marks ei so the definite -a stays predictable." },
        { id: "no-u64l3-humor", type: "vocab", front: "humor", reading: "humor", meaning: "humour", example: { jp: "Han har en tørr humor som ikke alle forstår.", en: "He has a dry humour that not everyone understands." }, accept: ["humor", "sense of humour", "wit"], drill: { jp: "Han har humor som alle liker", en: "He has humour that everyone likes" }, hint: "⚠ A MASS noun, so no article on the card (unit1 §1b): han har humor. Masculine, definite humoren. It DOES take an article once you modify it — en tørr humor, as in this card's example — which is why the example and the front differ." },
        { id: "no-u64l3-vits", type: "vocab", front: "en vits", reading: "envits", meaning: "a joke", example: { jp: "Vitsen var ikke morsom, men alle lo.", en: "The joke was not funny, but everyone laughed." }, accept: ["joke", "gag"], drill: { jp: "Han fortalte en vits på norsk", en: "He told a joke in Norwegian" }, hint: "Masculine: vitsen, flere vitser. The verb is å spøke (u49), and the everyday phrase is å fortelle en vits." },
        { id: "no-u64l3-spennende", type: "vocab", front: "spennende", reading: "spennende", meaning: "exciting", example: { jp: "Filmen var veldig spennende.", en: "The film was very exciting." }, accept: ["thrilling", "gripping", "interesting"], drill: { jp: "Filmen var spennende og morsom", en: "The film was exciting and funny" }, hint: "An -ende adjective, built off a verb, and it NEVER changes: et spennende bilde, spennende filmer. The commonest compliment a Norwegian pays a story." },
      ],
    },
    // Lesson 4: the verdict. The two -ende adjectives from l3 come back as the
    // words you actually use in a review.
    {
      id: "no-u64l4",
      unit: 64,
      lesson: 4,
      title: "Anmeldelsen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Give a verdict on a film or a book and back it up with a reason.",
      items: [
        { id: "no-u64l4-anmeldelse", type: "vocab", front: "en anmeldelse", reading: "enanmeldelse", meaning: "a review", example: { jp: "Anmeldelsen i avisa var god, men jeg likte ikke boka.", en: "The review in the paper was good, but I did not like the book." }, accept: ["review", "critique"], drill: { jp: "Jeg leste en anmeldelse i avisa", en: "I read a review in the paper" }, hint: "⚠ -else nouns are MASCULINE with no feminine form: en anmeldelse, anmeldelsen. Never ei anmeldelse." },
        { id: "no-u64l4-kritiker", type: "vocab", front: "en kritiker", reading: "enkritiker", meaning: "a critic", example: { jp: "Kritikerne likte filmen, men det gjorde ikke publikum.", en: "The critics liked the film, but the audience did not." }, accept: ["critic", "reviewer"], drill: { jp: "Hun er en kritiker i Oslo", en: "She is a critic in Oslo" }, hint: "Masculine: kritikeren. -er on a stem makes the person who does it, the same ending as skuespiller and forsker." },
        { id: "no-u64l4-handling", type: "vocab", front: "ei handling", reading: "eihandling", meaning: "a plot", example: { jp: "Handlinga i boka er lett å følge.", en: "The plot of the book is easy to follow." }, accept: ["plot", "story", "action"], drill: { jp: "Boka har ei handling jeg liker", en: "The book has a plot I like" }, hint: "From å handle (u27). Feminine: handlinga. Two senses that sit side by side — the plot of a story, and an action somebody takes." },
        { id: "no-u64l4-skuffende", type: "vocab", front: "skuffende", reading: "skuffende", meaning: "disappointing", example: { jp: "Filmen var skuffende dårlig.", en: "The film was disappointingly bad." }, accept: ["poor", "underwhelming"], drill: { jp: "Filmen var skuffende og kjedelig", en: "The film was disappointing and boring" }, hint: "From å skuffe, to disappoint — skuffet (u22) is how YOU feel, skuffende is what the thing IS. Another -ende adjective, so it never changes." },
        { id: "no-u64l4-rorende", type: "vocab", front: "rørende", reading: "rorende", meaning: "moving", example: { jp: "Scenen var rørende og vakker.", en: "The scene was moving and beautiful." }, accept: ["touching", "heartwarming", "poignant"], drill: { jp: "Filmen var rørende og vakker", en: "The film was moving and beautiful" }, hint: "From å røre, to stir or touch. Said RØ-ren-de, and ø folds to o in the reading: rorende." },
        { id: "no-u64l4-etterningkast", type: "vocab", front: "et terningkast", reading: "etterningkast", meaning: "a dice score", example: { jp: "Filmen fikk et terningkast fem i avisa i går.", en: "The film got a five on the dice in the newspaper yesterday." }, drill: { jp: "Boka fikk et terningkast seks", en: "The book got a six on the dice" }, accept: ["a dice roll", "a star rating", "a score out of six"], hint: "TER-ning-kast. Ei terning is a die and et kast is a throw, so the compound is neuter after kast. Norwegian papers score films, books and restaurants 1–6 with a picture of a die — terningkast seks is the top mark there is." },
      ],
    },
  ],
};
