// NO Unit 104 — Fortelling og journalistikk — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Media and narrative". Retitled in Norwegian per
// CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// WHY THIS IS NOT A THIRD MEDIA UNIT. B1 spends media twice — u55 `Nyheter og
// samfunn` (hendelse, debatt, ytring, oppslag) and u64 `Medier og underholdning`
// (serie, skuespiller, regissør, manus, anmeldelse, kritiker, handling). Between
// them the learner can say WHAT they watched and WHETHER it was good. What they
// cannot yet do is talk about HOW a thing is told — and that is the B2 half:
// genre, angle, narrator, the shape of a story, and the effect it has on a reader.
// Every card here is about CRAFT rather than content.
//
// GENDER — the -ing nouns dominate and §1 marks them all `ei`: vinkling,
// framstilling, skildring, innledning, avslutning, vending, spenning, nyhetssak
// (sak is feminine).
// ⚠ TWO THAT LOOK LIKE THEY SHOULD BE FEMININE AND ARE NOT:
//   `en ingress`    — no -ing ending at all; the word is ingress, not in-gress.
//                     Masculine: ingressen.
//   `en synsvinkel` — a compound takes the gender of its LAST part, and vinkel is
//                     masculine: synsvinkelen. Note it sits one lesson away from
//                     `ei vinkling`, which IS -ing and IS feminine. Same root,
//                     different gender, on purpose.
// ⚠ FIRST FEMININE IS `ei nyhetssak` (l1) and it carries the §1 recognition note.
// MASS NOUNS BARE per §1(b): `spenning` in the sense taught here (suspense as an
// atmosphere) is mass — "ei spenning" would be one electrical voltage.
//
// SCOPE: frozen base u1–u87 plus u101–u103 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT104 = {
  id: "no-u104",
  lang: "no",
  title: "Fortelling og journalistikk",
  order: 104,
  stage: "b2",
  lessons: [
    // Lesson 1: the genres. A Norwegian paper is organised by these words and a
    // reader who cannot tell them apart misreads the paper's intent.
    {
      id: "no-u104l1",
      unit: 104,
      lesson: 1,
      title: "Sjangrene i avisa",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Tell the parts of a Norwegian newspaper apart — reporting, opinion and the reader's own voice — and say which you are reading.",
      items: [
        { id: "no-u104l1-einyhetssak", type: "vocab", front: "ei nyhetssak", reading: "einyhetssak", meaning: "a news story", example: { jp: "Avisa hadde ei stor nyhetssak om skolen.", en: "The newspaper had a big news story about the school." }, accept: ["a news item", "a news report"], drill: { jp: "Avisa skrev ei nyhetssak om saken", en: "The newspaper wrote a news story about the case" }, hint: "⚠ FIRST FEMININE HERE. nyhet + -s- + sak, and sak is feminine: nyhetssaka. Moderate Bokmål writes nyhetssaken and that is what you will see in print — recognise both, produce the -a form. A nyhetssak reports; it does not argue." },
        { id: "no-u104l1-enreportasje", type: "vocab", front: "en reportasje", reading: "enreportasje", meaning: "a feature article", example: { jp: "Reportasjen viser en familie gjennom et helt år.", en: "The feature shows a family through a whole year." }, accept: ["a feature", "in-depth report", "reportage"], drill: { jp: "Journalisten skrev en reportasje om byen", en: "The journalist wrote a feature about the city" }, hint: "Masculine. Longer and more personal than ei nyhetssak: the journalist goes somewhere, stays a while, and describes it. Still reporting, not opinion — that distinction is the whole of l1." },
        { id: "no-u104l1-enkronikk", type: "vocab", front: "en kronikk", reading: "enkronikk", meaning: "an opinion piece", example: { jp: "Han skrev en kronikk om frafallet i skolen.", en: "He wrote an opinion piece about the dropout rate in schools." }, accept: ["a commentary piece", "an op-ed"], drill: { jp: "Avisa hadde en kronikk om saken", en: "The newspaper had an opinion piece about the case" }, hint: "Masculine. A signed argument by an outside expert, usually around 5000 characters — a genuine Norwegian institution. The paper prints it without endorsing it." },
        { id: "no-u104l1-enkommentator", type: "vocab", front: "en kommentator", reading: "enkommentator", meaning: "a commentator", example: { jp: "Kommentatoren mener at regjeringa tar feil.", en: "The commentator thinks the government is wrong." }, accept: ["a columnist", "an analyst"], drill: { jp: "Avisa har en kommentator i Oslo", en: "The newspaper has a commentator in Oslo" }, hint: "Masculine — -or nouns are, like en redaktør, en professor. The paper's OWN opinion voice, as against en kronikk, which comes from outside. Compare en kritiker (u64), who judges art rather than politics." },
        { id: "no-u104l1-eningress", type: "vocab", front: "en ingress", reading: "eningress", meaning: "a standfirst", example: { jp: "Ingressen sier det viktige med få ord.", en: "The standfirst says the important thing in few words." }, accept: ["an intro paragraph", "a lead", "a lede"], drill: { jp: "Saken har en ingress først", en: "The story has a standfirst first" }, hint: "⚠ MASCULINE — ingressen. It LOOKS like an -ing noun and is not: the word is ingress, from Latin, and there is no -ing suffix in it. The bold paragraph between ei overskrift (u48) and the article body." },
        { id: "no-u104l1-etleserinnlegg", type: "vocab", front: "et leserinnlegg", reading: "etleserinnlegg", meaning: "a letter to the editor", example: { jp: "Mange sendte et leserinnlegg om den nye avgiften.", en: "Many sent a letter to the editor about the new levy." }, accept: ["a reader's letter", "a reader contribution"], drill: { jp: "Hun sendte et leserinnlegg til avisa", en: "She sent a letter to the editor to the newspaper" }, hint: "leser + innlegg, from å legge inn. Neuter. Shorter than en kronikk and from an ordinary reader rather than an expert — the bottom rung of the opinion ladder, and the busiest." },
      ],
    },
    // Lesson 2: the part that is contested. Every word here is one a Norwegian
    // reader uses to accuse a paper of something.
    {
      id: "no-u104l2",
      unit: 104,
      lesson: 2,
      title: "Vinkling og troverdighet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how a story has been handled — the angle taken, whether the quoting is fair, and whether you believe it.",
      items: [
        { id: "no-u104l2-eivinkling", type: "vocab", front: "ei vinkling", reading: "eivinkling", meaning: "an angle (of coverage)", example: { jp: "Vinklinga i saken var tydelig fra første linje.", en: "The angle in the story was clear from the first line." }, accept: ["a slant", "the framing", "the take"], drill: { jp: "Avisa valgte ei vinkling i saken", en: "The newspaper chose an angle in the story" }, hint: "From en vinkel, an angle, + -ing — so feminine (§1): vinklinga. Every story has one and no story can avoid having one; the criticism is never \"it has a vinkling\" but \"it has THIS vinkling\"." },
        { id: "no-u104l2-troverdig", type: "vocab", front: "troverdig", reading: "troverdig", meaning: "credible", example: { jp: "Kilden virker troverdig, men vi sjekker likevel.", en: "The source seems credible, but we check anyway." }, accept: ["believable", "trustworthy", "convincing"], drill: { jp: "Denne kilden er troverdig og god", en: "This source is credible and good" }, hint: "å tro (u12) + verdig (u102) — worth believing. An -ig adjective, invariant in the neuter (§8b). Compare pålitelig (u54): pålitelig is about a source's TRACK RECORD, troverdig about how it strikes you now." },
        { id: "no-u104l2-asitere", type: "vocab", front: "å sitere", reading: "asitere", meaning: "to quote", example: { jp: "Journalisten siterte lederen helt riktig.", en: "The journalist quoted the leader entirely correctly." }, accept: ["to cite", "to quote verbatim"], drill: { jp: "Det er viktig å sitere kilden riktig", en: "It is important to quote the source correctly" }, hint: "The verb behind et sitat (u48). Norwegian press ethics turn on it: å sitere is to give the words as spoken, and å sitere feil is among the most serious complaints a paper can face." },
        { id: "no-u104l2-eiframstilling", type: "vocab", front: "ei framstilling", reading: "eiframstilling", meaning: "a portrayal", example: { jp: "Framstillinga av eleven var dårlig.", en: "The portrayal of the pupil was poor." }, accept: ["a presentation (of events)", "a depiction", "an account"], drill: { jp: "Dette er ei framstilling av saken", en: "This is a portrayal of the case" }, hint: "fram + å stille — how something is SET FORTH. Feminine, -ing. The neutral word for an account, so it takes its colour from the adjective: ei god framstilling, ei ensidig framstilling." },
        { id: "no-u104l2-tendensios", type: "vocab", front: "tendensiøs", reading: "tendensios", meaning: "slanted", example: { jp: "Mange mente at reportasjen var tendensiøs.", en: "Many thought the feature was slanted." }, accept: ["biased", "tendentious", "one-sided"], drill: { jp: "Denne artikkelen er tendensiøs og dårlig", en: "This article is slanted and poor" }, hint: "Note the ø fold in the reading (§3): tendensios. The formal accusation — it says the piece is BUILT to lead you somewhere. Heavier than ei vinkling, which every story unavoidably has." },
        { id: "no-u104l2-avri", type: "vocab", front: "å vri", reading: "avri", meaning: "to twist", example: { jp: "Han vrir på sannheten for å vinne debatten.", en: "He twists the truth in order to win the debate." }, accept: ["to spin", "to distort", "to turn"], drill: { jp: "Det er lett å vri på sannheten", en: "It is easy to twist the truth" }, hint: "Literally to wring or turn something — you vrir a wet cloth. Used of facts it is the plain accusation of dishonesty, and it takes på: å vri på noe. Present vrir, past vred." },
      ],
    },
    // Lesson 3: how a story is built. These are the words a Norwegian pupil is
    // taught in norskfaget, so they carry real cultural weight.
    {
      id: "no-u104l3",
      unit: 104,
      lesson: 3,
      title: "Fortellerens grep",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a story is put together — whose eyes you see through, how it opens and closes, and where it turns.",
      items: [
        { id: "no-u104l3-ensynsvinkel", type: "vocab", front: "en synsvinkel", reading: "ensynsvinkel", meaning: "a point of view", example: { jp: "Romanen bruker en ny synsvinkel hele veien.", en: "The novel uses a new point of view all the way through." }, accept: ["a perspective", "a viewpoint"], drill: { jp: "Boka har en synsvinkel jeg liker", en: "The book has a point of view I like" }, hint: "⚠ MASCULINE — syn + -s- + vinkel, and vinkel is masculine: synsvinkelen. Contrast ei vinkling in l2: same root, but -ing makes THAT one feminine. A vinkling is what a journalist chooses; a synsvinkel is whose eyes a story uses." },
        { id: "no-u104l3-eiskildring", type: "vocab", front: "ei skildring", reading: "eiskildring", meaning: "a description in words", example: { jp: "Skildringa av naturen er vakker og lang.", en: "The description of nature is beautiful and long." }, accept: ["a depiction", "a rendering"], drill: { jp: "Boka har ei skildring av byen", en: "The book has a description of the city" }, hint: "From å skildre. Feminine, -ing. Narrower than ei framstilling (l2): a skildring paints a scene, a framstilling presents a case. A nature skildring is close to a national genre in Norwegian letters." },
        { id: "no-u104l3-etforlop", type: "vocab", front: "et forløp", reading: "etforlop", meaning: "a course of events", example: { jp: "Avisa forklarte hele forløpet time for time.", en: "The newspaper explained the whole course of events hour by hour." }, accept: ["a sequence", "how it unfolded", "the progression"], drill: { jp: "Saken hadde et forløp over mange år", en: "The case had a course of events over many years" }, hint: "for + løp, a run. Neuter. Note the ø fold in the reading (§3): etforlop. Used of an illness too — et alvorlig forløp — which is where u102's register and this one meet." },
        { id: "no-u104l3-eiinnledning", type: "vocab", front: "ei innledning", reading: "eiinnledning", meaning: "an opening section", example: { jp: "Innledninga forteller hvorfor emnet er viktig.", en: "The opening section says why the subject is important." }, accept: ["an introduction", "a preamble"], drill: { jp: "Oppgaven trenger ei innledning først", en: "The assignment needs an opening section first" }, hint: "inn + å lede, to lead. Feminine, -ing. The paired term with ei avslutning below — every Norwegian school essay is marked on both, and they are the two places a reader decides whether to trust you." },
        { id: "no-u104l3-eiavslutning", type: "vocab", front: "ei avslutning", reading: "eiavslutning", meaning: "a closing section", example: { jp: "Avslutninga samler alt uten å si noe nytt.", en: "The closing section gathers everything without saying anything new." }, accept: ["a conclusion (of a text)", "an ending"], drill: { jp: "Vi skriver ei avslutning til slutt", en: "We write a closing section at the end" }, hint: "av + å slutte. Feminine, -ing. ⚠ NOT ei slutning (u74), which is a CONCLUSION YOU DRAW from evidence. An avslutning is where a text stops; a slutning is what it proves. One letter apart and entirely different words." },
        { id: "no-u104l3-eivending", type: "vocab", front: "ei vending", reading: "eivending", meaning: "a turn (in a story)", example: { jp: "Saken tok ei helt ny vending i går.", en: "The case took a completely new turn yesterday." }, accept: ["a twist", "a turn of events"], drill: { jp: "Historia tok ei vending til slutt", en: "The story took a turn in the end" }, hint: "From å vende (u45), to turn. Feminine, -ing. The set phrase is å ta ei vending, and it is as much at home in a news report as in a novel." },
      ],
    },
    // Lesson 4: what it does to the reader. The vocabulary of effect, which is the
    // part u64's anmeldelse lesson gestured at without supplying.
    {
      id: "no-u104l4",
      unit: 104,
      lesson: 4,
      title: "Virkningen på leseren",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a story did to you — whether it gripped, moved or engaged you, and what it was really saying.",
      items: [
        { id: "no-u104l4-gripende", type: "vocab", front: "gripende", reading: "gripende", meaning: "gripping", example: { jp: "Reportasjen var gripende fra første side.", en: "The feature was gripping from the first page." }, accept: ["moving", "powerful", "affecting"], drill: { jp: "Denne skildringa er gripende og vakker", en: "This description is gripping and beautiful" }, hint: "A present participle used as an adjective — å gripe, to grasp, + -ende — so it never changes: et gripende bilde, gripende historier. u107 makes this whole family its own lesson." },
        { id: "no-u104l4-aengasjere", type: "vocab", front: "å engasjere", reading: "aengasjere", meaning: "to engage", example: { jp: "Saken engasjerer mange unge over hele landet.", en: "The issue engages many young people all over the country." }, accept: ["to involve", "to stir up interest"], drill: { jp: "Avisa ønsker å engasjere flere unge", en: "The newspaper wants to engage more young people" }, hint: "Also reflexive: å engasjere seg i noe is to get involved in a cause. Et engasjert publikum is high praise in Norwegian public life — it means people cared enough to argue." },
        { id: "no-u104l4-spenning", type: "vocab", front: "spenning", reading: "spenning", meaning: "suspense", example: { jp: "Det er mye spenning i denne boka.", en: "There is a lot of suspense in this book." }, accept: ["tension", "excitement"], drill: { jp: "Boka har mye spenning hele veien", en: "The book has a lot of suspense all the way through" }, hint: "⚠ BARE, NO ARTICLE (§1b) in this sense — suspense is mass. \"Ei spenning\" exists but means one electrical voltage. From å spenne, to stretch tight, which is exactly the image. En spenningsroman is a thriller." },
        { id: "no-u104l4-abevore", type: "vocab", front: "å berøre", reading: "aberore", meaning: "to touch emotionally", example: { jp: "Filmen berørte meg mer enn jeg hadde ventet.", en: "The film touched me more than I had expected." }, accept: ["to move", "to affect", "to touch on"], drill: { jp: "Historia klarte å berøre mange barn", en: "The story managed to touch many children" }, hint: "be- + å røre, to stir. Two ø folds in the reading (§3): aberore. Also the formal verb for touching ON a subject — saken berører flere departementer — so context decides which sense." },
        { id: "no-u104l4-medrivende", type: "vocab", front: "medrivende", reading: "medrivende", meaning: "compelling", example: { jp: "Han skriver på en medrivende måte om vanskelige emner.", en: "He writes in a compelling way about difficult subjects." }, accept: ["absorbing", "sweeping you along", "engrossing"], drill: { jp: "Denne boka er medrivende og lang", en: "This book is compelling and long" }, hint: "med + å rive, to tear — literally \"tearing you along with it\". Another invariant -ende participle, like gripende above. The standard word of praise in a Norwegian book review." },
        { id: "no-u104l4-etbudskap", type: "vocab", front: "et budskap", reading: "etbudskap", meaning: "a message (of a work)", example: { jp: "Budskapet i filmen er tydelig og sterkt.", en: "The message of the film is clear and strong." }, accept: ["the point being made", "a moral"], drill: { jp: "Filmen har et budskap til alle", en: "The film has a message for everyone" }, hint: "From bud, a message-bearer. Neuter. NOT the everyday word for a text you send — that is ei melding. Et budskap is what a work MEANS, the thing a kronikk is written to deliver." },
      ],
    },
  ],
};
