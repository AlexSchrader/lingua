// NO Unit 48 — Medier og underholdning ("Media and entertainment") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 9 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 u19 taught en film, musikk, en sang and en kino — the things you
// consume. This unit is the machinery around them: who writes the news, what a
// broadcast is made of, how a story is built, and what you do to follow any of it.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// ⚠ THIS WAS THE WHOLE-THEME COLLISION RISK, AND IT PARTLY LANDED. The crew lead
// flagged before authoring that a media unit sits between block 2's u33 Teknologi
// og kontakt and its u35 Kultur og fritid. u33 turned out to hold `ei side`,
// `et program` AND `en skjerm` — three of this unit's fourteen planned media
// fronts — and the shared ledger reserves `å underholde` to u35. All four were
// dropped BEFORE a card was written, not discovered at merge: ei spalte, et
// opptak, et innslag and å formidle took the slots, each re-screened against
// A1's 480, this block's own 240, both live sibling branches by headword, and
// the fold screen. Sending the five themes for sign-off before authoring is what
// bought that; it cost one message and saved a unit.
// A fifth candidate died to this block's OWN corpus: `et klipp` collides on stem
// with `å klippe` in u46. Caught by scripts/screen-fronts.mjs, which compares
// candidates against each other and not only against what is already taught.
//
// FIRST FEMININE OF THE UNIT is `ei overskrift` (l1) and it carries the en-/ei-
// recognition note §1 requires. -skrift nouns are feminine (skrifta), so this
// one is genuinely `ei` — unlike `en redaktør` and `en scene`, both masculine.
//
// ø IS WRITTEN o IN `reading` (§3): `en redaktør` → "enredaktor". That is the
// only ø in the unit.
//
// ⚠ RESERVE LIST — screened against A1's 480, this block's 240, both live
// sibling branches, and the fold screen. Every collision resolves against this
// block; swap, don't rebuild.
//   l1 nyheter:     et opplag · en pressemann · ei kilde
//   l2 kringkasting: en sending? NO — stem clash with A1's `å sende` ·
//                    reserves: et lydspor · en pause? NO — block1 u21 · en trailer
//   l3 historier:   et vers · en helt · et sammendrag
//   l4 å følge med: å laste · å streame · å sitere
//
// SCOPE: examples and drills use A1's 480 plus u41–u47 and u49–u50 plus this
// unit's earlier cards. Nothing leans on u21–u40, and nothing uses `som`, `om`,
// `hele`, `hver`, `ute`, `ved`, `der`, `for`, `mot`, `gjennom`, `mens`, `tid`,
// `mat`, `folk`, `hundre`, `mellom`, `begge` or `fort` — every one confirmed
// untaught by scripts/scope-strict.mjs, which does not use lint's isInflection
// exemption and therefore sees what a clean lint run does not.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT48 = {
  id: "no-u48",
  lang: "no",
  title: "Medier og underholdning",
  order: 48,
  stage: "a2",
  lessons: [
    // Lesson 1: who makes the news.
    {
      id: "no-u48l1",
      unit: 48,
      lesson: 1,
      title: "Nyheter",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the news — artikkel, overskrift, journalist, intervju, redaktør, spalte — and say who wrote what.",
      items: [
        { id: "no-u48l1-enartikkel", type: "vocab", front: "en artikkel", reading: "enartikkel", meaning: "article", example: { jp: "En artikkel er lang, men en overskrift er kort.", en: "An article is long, but a headline is short." }, drill: { jp: "Vi leser en artikkel i dag", en: "We read an article today" }, accept: ["a piece", "a story"], hint: "ar-TIK-kel. Masculine: definite artikkelen, and the plural drops the e: artikler. The same word is the grammatical article — en, ei and et are artikler, which is a small joke this course has been making since unit 1." },
        { id: "no-u48l1-eioverskrift", type: "vocab", front: "ei overskrift", reading: "eioverskrift", meaning: "headline", example: { jp: "Ei overskrift skal være kort, fordi alle leser den.", en: "A headline should be short, because everyone reads it." }, drill: { jp: "Vi leser ei overskrift i dag", en: "We read a headline today" }, accept: ["a heading", "a title"], hint: "OH-ver-skrift. Feminine: definite overskrifta, plural overskrifter. Over plus skrift, a writing-above. You will also see ei overskrift written en overskrift / overskriften; Bokmål allows both, and this course writes ei because ei is what tells you the definite ends in -a." },
        { id: "no-u48l1-enjournalist", type: "vocab", front: "en journalist", reading: "enjournalist", meaning: "journalist", example: { jp: "En journalist skriver en artikkel når noe er viktig i byen.", en: "A journalist writes an article when something is important in the town." }, drill: { jp: "En journalist skriver mye", en: "A journalist writes a lot" }, accept: ["a reporter", "a newspaperman"], hint: "shoor-na-LIST — the j is a French zh here, not the Norwegian y, which is unusual and worth hearing once. Masculine: definite journalisten, plural journalister." },
        { id: "no-u48l1-etintervju", type: "vocab", front: "et intervju", reading: "etintervju", meaning: "interview", example: { jp: "Et intervju er tungt hvis en journalist spør godt.", en: "An interview is hard if a journalist asks well." }, drill: { jp: "Vi ser et intervju i kveld", en: "We watch an interview tonight" }, accept: ["an interview"], hint: "in-ter-VYUE. Neuter: definite intervjuet, plural intervjuer. Å intervjue is the verb. Note the spelling: Norwegian wrote the English sound down as it heard it, vju rather than view." },
        { id: "no-u48l1-enredaktor", type: "vocab", front: "en redaktør", reading: "enredaktor", meaning: "editor", example: { jp: "En redaktør leser alt før vi ser det.", en: "An editor reads everything before we see it." }, drill: { jp: "En redaktør leser en artikkel", en: "An editor reads an article" }, accept: ["an editor-in-chief"], hint: "re-dak-TUR, hand-folded to enredaktor. Masculine: definite redaktøren, plural redaktører. French again, like sjåfør and frisør in A1 unit 18 — the -ør ending marks a whole family of borrowed job titles." },
        { id: "no-u48l1-eispalte", type: "vocab", front: "ei spalte", reading: "eispalte", meaning: "column", example: { jp: "Ei spalte er en del av en artikkel, og den er ikke lang.", en: "A column is a part of an article, and it is not long." }, drill: { jp: "Det er ei spalte i en artikkel", en: "There is a column in an article" }, accept: ["a newspaper column", "a strip"], hint: "SPAL-te. Feminine: definite spalta, plural spalter. Both the narrow block a page is set in and the regular piece one writer produces — English uses \"column\" for both in exactly the same way." },
      ],
    },
    // Lesson 2: what a broadcast is made of.
    {
      id: "no-u48l2",
      unit: 48,
      lesson: 2,
      title: "Kringkasting",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about broadcasting — kanal, radio, episode, reklame, opptak, innslag — and say what is on.",
      items: [
        { id: "no-u48l2-enkanal", type: "vocab", front: "en kanal", reading: "enkanal", meaning: "channel", example: { jp: "En kanal viser en film i kveld, men vi ser den ikke.", en: "A channel shows a film tonight, but we do not watch it." }, drill: { jp: "Vi bytter en kanal", en: "We change a channel" }, accept: ["a station"], hint: "ka-NAHL, stress at the end. Masculine: definite kanalen, plural kanaler. A television channel and a waterway both — the same double life the word has in English." },
        { id: "no-u48l2-enradio", type: "vocab", front: "en radio", reading: "enradio", meaning: "radio", example: { jp: "En radio står på et bord, og bestefar hører på den.", en: "A radio is on a table, and grandfather listens to it." }, drill: { jp: "Det står en radio på hylla", en: "There is a radio standing on the shelf" }, accept: ["a wireless"], hint: "RAH-di-o. Masculine: definite radioen, plural radioer. NRK, the state broadcaster, is what most Norwegians mean when they say radioen — one institution standing in for the whole medium." },
        { id: "no-u48l2-enepisode", type: "vocab", front: "en episode", reading: "enepisode", meaning: "episode", example: { jp: "En episode er kort, men en roman er lang.", en: "An episode is short, but a novel is long." }, drill: { jp: "Vi ser en episode i kveld", en: "We watch an episode tonight" }, accept: ["an instalment", "an installment"], hint: "e-pi-SOO-de. Masculine: definite episoden, plural episoder. Also an incident in life — en trist episode is an unhappy business, not a piece of television." },
        { id: "no-u48l2-enreklame", type: "vocab", front: "en reklame", reading: "enreklame", meaning: "advert", example: { jp: "En reklame kommer alltid når en episode er god.", en: "An advert always comes when an episode is good." }, drill: { jp: "Det kommer en reklame nå", en: "An advert is coming now" }, accept: ["an advertisement", "a commercial", "advertising"], hint: "re-KLAH-me. Masculine: definite reklamen, plural reklamer. Both a single advert and advertising as a whole. NRK carries none, which is why Norwegians notice them on the commercial channels." },
        { id: "no-u48l2-etopptak", type: "vocab", front: "et opptak", reading: "etopptak", meaning: "recording", example: { jp: "Et opptak er godt hvis vi hører godt.", en: "A recording is good if we hear well." }, drill: { jp: "Vi hører på et opptak", en: "We listen to a recording" }, accept: ["a take", "an admission"], hint: "OPP-tahk. Neuter: definite opptaket, and the plural is opptak, unchanged. Opp plus ta — a taking-up. It also means admission to a school, which is a second sense worth knowing before you meet it on a form." },
        { id: "no-u48l2-etinnslag", type: "vocab", front: "et innslag", reading: "etinnslag", meaning: "feature", example: { jp: "Et innslag er kort, og derfor liker barna det.", en: "A feature is short, and that is why the children like it." }, drill: { jp: "Det er et innslag i kveld", en: "There is a feature tonight" }, accept: ["an item", "a segment", "a contribution"], hint: "INN-slahg. Neuter: definite innslaget, and the plural is innslag, unchanged. One item inside a longer programme — the news bulletin's individual stories are innslag." },
      ],
    },
    // Lesson 3: how a story is built.
    {
      id: "no-u48l3",
      unit: 48,
      lesson: 3,
      title: "Historier",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a story — roman, historie, forfatter, kapittel, rolle, scene — and say who wrote it and who is in it.",
      items: [
        { id: "no-u48l3-enroman", type: "vocab", front: "en roman", reading: "enroman", meaning: "novel", example: { jp: "En roman er tung å lese hvis den er veldig lang.", en: "A novel is hard to read if it is very long." }, drill: { jp: "Vi leser en roman sammen", en: "We read a novel together" }, accept: ["a work of fiction"], hint: "ro-MAHN, stress at the end. Masculine: definite romanen, plural romaner. Ei bok from A1 unit 18 is the object; en roman is what is written in it." },
        { id: "no-u48l3-eihistorie", type: "vocab", front: "ei historie", reading: "eihistorie", meaning: "story", example: { jp: "Ei historie er god hvis vi vil lese mer.", en: "A story is good if we want to read more." }, drill: { jp: "Bestefar forteller ei historie", en: "Grandfather tells a story" }, accept: ["a tale", "history", "an account"], hint: "his-TOO-ri-e. Feminine: definite historia, plural historier. Both a story you tell and history as a subject — et fag from A1 unit 18. Context does all the work, and it almost never fails." },
        { id: "no-u48l3-enforfatter", type: "vocab", front: "en forfatter", reading: "enforfatter", meaning: "author", example: { jp: "En forfatter skriver en roman, men det tar mange år.", en: "An author writes a novel, but it takes many years." }, drill: { jp: "En forfatter skriver ei bok", en: "An author writes a book" }, accept: ["a writer", "a novelist"], hint: "for-FAT-ter. Masculine: definite forfatteren, plural forfattere. Built the way en lærer and en selger were, with the -er that turns a verb into a doer. Norway produces an improbable number of them per head." },
        { id: "no-u48l3-etkapittel", type: "vocab", front: "et kapittel", reading: "etkapittel", meaning: "chapter", example: { jp: "Et kapittel er kort, og derfor leser barna et i kveld.", en: "A chapter is short, and that is why the children read one tonight." }, drill: { jp: "Vi leser et kapittel i kveld", en: "We read a chapter tonight" }, accept: ["a section"], hint: "ka-PIT-tel. Neuter: definite kapittelet or kapitlet, and the plural drops the e: kapitler. Both spellings of the definite are correct, which is unusual enough to be worth a line." },
        { id: "no-u48l3-eirolle", type: "vocab", front: "ei rolle", reading: "eirolle", meaning: "role", example: { jp: "Ei rolle er stor hvis en person er i mange scener.", en: "A role is big if a person is in many scenes." }, drill: { jp: "Hun har ei rolle i en film", en: "She has a role in a film" }, accept: ["a part", "a function"], hint: "ROL-le. Feminine: definite rolla, plural roller. An acting part, and a person's function generally. Det spiller ingen rolle means \"it does not matter\" — literally, it plays no part." },
        { id: "no-u48l3-enscene", type: "vocab", front: "en scene", reading: "enscene", meaning: "scene", example: { jp: "En scene er kort, men den blir god hvis alle spiller godt.", en: "A scene is short, but it gets good if everyone acts well." }, drill: { jp: "Vi ser en scene i en film", en: "We watch a scene in a film" }, accept: ["a stage", "a sequence"], hint: "SEH-ne — the c is silent and the s does the work. Masculine: definite scenen, plural scener, so this one is NOT marked ei. Both a scene in a story and the physical stage it is played on." },
      ],
    },
    // Lesson 4: what you do with all of it. Six å-verbs, six å-frames.
    {
      id: "no-u48l4",
      unit: 48,
      lesson: 4,
      title: "Å følge med",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Follow the media — recommend, update, spread, switch on, browse, convey.",
      items: [
        { id: "no-u48l4-aanbefale", type: "vocab", front: "å anbefale", reading: "aanbefale", meaning: "to recommend", example: { jp: "Jeg anbefaler en roman hvis du liker ei lang historie.", en: "I recommend a novel if you like a long story." }, drill: { jp: "Det er lett å anbefale en film", en: "It is easy to recommend a film" }, accept: ["recommend", "to advise", "advise", "to suggest"], hint: "AN-be-fah-le, present anbefaler. En anbefaling is a recommendation. The verb is long but perfectly regular — nothing about it changes shape." },
        { id: "no-u48l4-aoppdatere", type: "vocab", front: "å oppdatere", reading: "aoppdatere", meaning: "to update", example: { jp: "En journalist oppdaterer en artikkel når noe er nytt.", en: "A journalist updates an article when something is new." }, drill: { jp: "Det er lett å oppdatere en artikkel", en: "It is easy to update an article" }, accept: ["update", "to bring up to date", "to refresh"], hint: "opp-da-TEH-re, present oppdaterer. Opp plus datere, to date — to bring the date forward. Norwegian borrowed the English idea and rebuilt it out of its own parts, which is what it usually does." },
        { id: "no-u48l4-aspre", type: "vocab", front: "å spre", reading: "aspre", meaning: "to spread", example: { jp: "Noe sprer seg i ei bygd hvis mange snakker.", en: "Something spreads in a village if many people talk." }, drill: { jp: "Det er lett å spre noe", en: "It is easy to spread something" }, accept: ["spread", "to disperse", "to circulate"], hint: "SPREH, present sprer — a one-syllable verb, so the present is the infinitive plus -r. Å spre seg is to spread by itself, which is what news and rumours do." },
        { id: "no-u48l4-askru", type: "vocab", front: "å skru", reading: "askru", meaning: "to switch", example: { jp: "Vi skrur på en radio når vi vil høre en episode.", en: "We switch on a radio when we want to hear an episode." }, drill: { jp: "Det er lett å skru på en radio", en: "It is easy to switch on a radio" }, accept: ["switch", "to turn", "turn", "to screw"], hint: "SKRUE, present skrur. Å skru PÅ is to switch on and å skru AV is to switch off — the particle carries the meaning, and the bare verb means to screw. En skrue is a screw." },
        { id: "no-u48l4-abla", type: "vocab", front: "å bla", reading: "abla", meaning: "to browse", example: { jp: "Jeg blar i ei bok når jeg venter på en buss.", en: "I leaf through a book when I am waiting for a bus." }, drill: { jp: "Det er hyggelig å bla i ei bok", en: "It is nice to leaf through a book" }, accept: ["browse", "to leaf through", "leaf through", "to flick through"], hint: "BLAH, present blar. Built on et blad from unit 43 — a leaf, so to leaf through, exactly the picture English draws. Å bla i noe, always with i." },
        { id: "no-u48l4-aformidle", type: "vocab", front: "å formidle", reading: "aformidle", meaning: "to convey", example: { jp: "En forfatter formidler ei historie, og alle forstår den.", en: "An author conveys a story, and everyone understands it." }, drill: { jp: "Det er tungt å formidle noe", en: "It is hard to convey something" }, accept: ["convey", "to communicate", "communicate", "to pass on"], hint: "for-MID-le, present formidler. To carry a thing from one person to another — a story, a feeling, a message. Built on midel, a means: to get something across BY some means." },
      ],
    },
  ],
};
