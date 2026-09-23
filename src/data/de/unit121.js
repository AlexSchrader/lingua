// DE Unit 121 — Gesprochenes Deutsch (slot: coverage-b2-11) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// ⚠️ WHY A WHOLE UNIT OF SHORT FORMS, and it is a real B2 gap rather than slang
// for its own sake. drin, dran, drauf, rum, ran, runter and rueber are the forms
// a German actually says for darin, daran, darauf, herum, heran, herunter and
// herueber. A learner who has only the long forms understands a textbook and
// then cannot follow a conversation, because the spoken language contracts every
// one of them. All seven are in the top 2000 by frequency (ranks in the hints)
// and all seven were taught NOWHERE across the 2714 claimed fronts.
//
// Self-check: rein was DROPPED — it collides in sense with the adjective rein
// (pure), and as the contraction of herein it is the same lexeme as heraus
// (u118). One card, not two, and u118 already owns that family.
// FREE: gemacht, gesagt, weber, angerufen, lag
export const DE_UNIT121 = {
  id: "de-u121",
  lang: "de",
  title: "Gesprochenes Deutsch",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "de-u121l1",
      unit: 121,
      lesson: 1,
      title: "Drin, dran, drauf",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow spoken German when it swallows the long forms — in it, on it, at it, and the two most common of all.",
      items: [
        { id: "de-u121l1-drin", type: "vocab", front: "drin", reading: "drin", meaning: "in it (spoken)", example: { jp: "Mach den Schrank bitte zu, weil das Brot sonst hart wird und nichts anderes mehr drin Platz hat.", en: "Please shut the cupboard, because otherwise the bread goes hard and nothing else fits in it." }, drill: { jp: "In dem Brief steht nichts drin", en: "There is nothing in the letter" }, accept: ["in it", "inside", "in there", "within"], hint: "Rank 459. The spoken form of darin. Da ist nichts mehr drin is also idiomatic for 'nothing more is possible' — of a negotiation as much as a box." },
        { id: "de-u121l1-dran", type: "vocab", front: "dran", reading: "dran", meaning: "at it", example: { jp: "Wer ist jetzt dran, oder sollen wir einfach von vorne beginnen?", en: "Whose turn is it now, or should we simply start from the beginning?" }, drill: { jp: "Jetzt bist du endlich dran", en: "Now it is finally your turn" }, accept: ["at it", "on it", "up", "one's turn", "attached"], hint: "Rank 470. Spoken daran. dran sein is 'to be next' — the everyday way to take turns. gut dran sein means to be well off." },
        { id: "de-u121l1-drauf", type: "vocab", front: "drauf", reading: "drauf", meaning: "on it", example: { jp: "Das Buch lag auf dem Tisch, und drauf stand nur ein Name.", en: "The book lay on the table, and on it there was only a name." }, drill: { jp: "Auf dem Foto sind wir alle drauf", en: "We are all on the photo" }, accept: ["on it", "on top", "on there", "upon it"], hint: "Rank 658. Spoken darauf. drauf sein describes a mood — gut drauf sein, to be in good spirits — which no textbook form carries." },
        { id: "de-u121l1-rum", type: "vocab", front: "rum", reading: "rum", meaning: "around (spoken)", example: { jp: "Die Kinder laufen den ganzen Tag im Garten rum, und am Abend sind sie dann wirklich müde.", en: "The children run around in the garden all day, and in the evening they really are tired." }, drill: { jp: "Wir sitzen nur rum und warten", en: "We just sit around and wait" }, accept: ["around", "round", "about"], hint: "Rank 1129. Spoken herum (u118). Attaches to verbs freely — rumsitzen, rumlaufen, rumstehen — and always carries a hint of aimlessness." },
        { id: "de-u121l1-ran", type: "vocab", front: "ran", reading: "ran", meaning: "up close", example: { jp: "Geh ruhig näher ran, weil man von hier aus kaum etwas lesen kann.", en: "Do go closer, because from here you can hardly read anything." }, drill: { jp: "Komm bitte näher ran", en: "Please come up closer" }, accept: ["up", "up close", "closer", "over", "at it"], hint: "Rank 1422. Spoken heran. As a bare command — Ran! — it means 'get to it'. ranrufen and rangehen are what people say for answering the phone." },
      ],
    },
    {
      id: "de-u121l2",
      unit: 121,
      lesson: 2,
      title: "Runter, rüber, gucken",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the spoken words for down, across and looking — the ones a textbook replaces with longer forms.",
      items: [
        { id: "de-u121l2-runter", type: "vocab", front: "runter", reading: "runter", meaning: "down (spoken)", example: { jp: "Komm bitte runter, das Essen steht seit zehn Minuten auf dem Tisch.", en: "Please come down; the food has been on the table for ten minutes." }, drill: { jp: "Die Preise gehen langsam runter", en: "The prices are slowly going down" }, accept: ["down", "downwards", "downstairs"], hint: "Rank 505. Spoken herunter and hinunter at once — speech has stopped distinguishing them. runterladen is what everyone says for 'to download'." },
        { id: "de-u121l2-rueber", type: "vocab", front: "rüber", reading: "rueber", meaning: "across (spoken)", example: { jp: "Bring den Stuhl bitte rüber, weil wir auf dieser Seite noch einen Platz brauchen.", en: "Please bring the chair across, because we still need a seat on this side." }, drill: { jp: "Wir gehen kurz rüber zum Nachbarn", en: "We are going across to the neighbour for a moment" }, accept: ["across", "over", "over there", "round"], hint: "Rank 1100. Spoken herüber. Pairs with drüben (u118), which is the position — you go rüber in order to be drüben." },
        { id: "de-u121l2-drueber", type: "vocab", front: "drüber", reading: "drueber", meaning: "about it (spoken)", example: { jp: "Wir müssen noch mal drüber reden, weil im Moment jeder etwas anderes verstanden hat.", en: "We have to talk about it again, because at the moment everyone has understood something different." }, drill: { jp: "Reden wir morgen noch mal drüber", en: "Let us talk about it again tomorrow" }, accept: ["about it", "over it", "above it", "on it"], hint: "Rank 1812. Spoken darüber, and like it, both literal (above) and topical (about). drüber reden is the ordinary way to say 'talk it over'." },
        { id: "de-u121l2-gucken", type: "vocab", front: "gucken", reading: "gucken", meaning: "to look (spoken)", example: { jp: "Guck mal aus dem Fenster, weil der Himmel gerade eine schöne Farbe hat.", en: "Have a look out of the window, because the sky has a beautiful colour right now." }, drill: { jp: "Wir gucken heute Abend einen Film", en: "We are watching a film this evening" }, accept: ["to look", "look", "to watch", "watch", "to have a look"], hint: "Rank 1892. The everyday northern word where books write schauen or sehen. Fernsehen gucken is what people actually say. In the south, schauen wins instead." },
        { id: "de-u121l2-hauen", type: "vocab", front: "hauen", reading: "hauen", meaning: "to hit", example: { jp: "Die Kinder sollen sich nicht hauen, auch dann nicht, wenn einer von ihnen im Recht ist.", en: "The children should not hit each other, not even when one of them is in the right." }, drill: { jp: "Er will niemanden hauen", en: "He does not want to hit anyone" }, accept: ["to hit", "hit", "to strike", "strike", "to whack", "to bash"], hint: "Rank 1940. Blunt and physical, where schlagen is the neutral word. abhauen — to clear off — is far commoner than the simple verb and worth recognising." },
      ],
    },
    {
      id: "de-u121l3",
      unit: 121,
      lesson: 3,
      title: "Job, Deal und Show",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the English borrowings modern German has absorbed, with the right gender and plural.",
      items: [
        { id: "de-u121l3-derjob", type: "vocab", front: "der Job", reading: "derjob", meaning: "the job", example: { jp: "Der Job ist gut bezahlt, aber er kostet fast jeden Abend in der Woche.", en: "The job is well paid, but it costs almost every evening of the week." }, drill: { jp: "Der Job beginnt erst im Mai", en: "The job begins only in May" }, accept: ["job", "the job", "position", "work"], hint: "Rank 482. Masculine, plural Jobs. Lighter than die Stelle (u24) or der Beruf — a Job can be temporary or casual in a way a Beruf never is." },
        { id: "de-u121l3-derdeal", type: "vocab", front: "der Deal", reading: "derdeal", meaning: "the deal", example: { jp: "Der Deal war am Ende doch gut, obwohl beide Seiten lange nichts geben wollten.", en: "The deal was good in the end after all, although for a long time neither side wanted to give anything." }, drill: { jp: "Der Deal war für alle gut", en: "The deal was good for everyone" }, accept: ["deal", "the deal", "bargain", "agreement"], hint: "Rank 1803. Business and journalism; das Geschäft (u18) is the older and broader word. Abgemacht (u51) is what you say to close one." },
        { id: "de-u121l3-dieshow", type: "vocab", front: "die Show", reading: "dieshow", meaning: "the show", example: { jp: "Die Show im Fernsehen dauert zwei Stunden, und danach spricht die halbe Stadt darüber.", en: "The show on television lasts two hours, and afterwards half the city speaks about it." }, drill: { jp: "Die Show beginnt um acht", en: "The show begins at eight" }, accept: ["show", "the show", "programme", "program"], hint: "Rank 1398. Feminine, pronounced as in English. eine Show abziehen is to make a scene — the borrowed word carries the same edge it has in English." },
        { id: "de-u121l3-dasfernsehen", type: "vocab", front: "das Fernsehen", reading: "dasfernsehen", meaning: "the television", example: { jp: "Im Fernsehen kommt heute nichts, was den Abend wirklich retten könnte.", en: "There's nothing on television today that could really rescue the evening." }, drill: { jp: "Das Fernsehen läuft den ganzen Tag", en: "The television runs all day" }, accept: ["television", "the television", "TV", "broadcasting"], hint: "Tier B — the corpus was already using this word with no card. fern (far) + sehen (to see). ⚠️ Careful: das Fernsehen is the MEDIUM; the physical set is der Fernseher." },
        { id: "de-u121l3-deridiot", type: "vocab", front: "der Idiot", reading: "deridiot", meaning: "the idiot", example: { jp: "Nenn ihn nicht Idiot, auch wenn der Fehler wirklich leicht zu vermeiden gewesen wäre.", en: "Don't call him an idiot, even if the mistake really would have been easy to avoid." }, drill: { jp: "Der Idiot hat alles kaputt gemacht", en: "The idiot broke everything" }, accept: ["idiot", "the idiot", "fool", "moron"], hint: "Rank 1875. Weak masculine: den Idioten, dem Idioten. Genuinely rude — included because a learner needs to RECOGNISE it, not to use it." },
      ],
    },
    {
      id: "de-u121l4",
      unit: 121,
      lesson: 4,
      title: "Glückwunsch und Neuigkeit",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Congratulate someone, pass on news, and say that a thing is modern, named, or that you are taken with it.",
      items: [
        { id: "de-u121l4-derglueckwunsch", type: "vocab", front: "der Glückwunsch", reading: "derglueckwunsch", meaning: "the congratulation", example: { jp: "Der Glückwunsch kam mit dem Brief, weil die zwei sonst nie zu erreichen sind.", en: "The congratulation came with the letter, because the two are otherwise never reachable." }, drill: { jp: "Der Glückwunsch kam viel zu spät", en: "The congratulation came far too late" }, accept: ["congratulation", "the congratulation", "good wishes", "congratulations"], hint: "Rank 1469. Herzlichen Glückwunsch! is the standard congratulation and the standard happy-birthday. ⚠️ das Glück itself cannot be taught — glücklich (u10) already owns that root." },
        { id: "de-u121l4-dieneuigkeit", type: "vocab", front: "die Neuigkeit", reading: "dieneuigkeit", meaning: "the piece of news", example: { jp: "Die Neuigkeit war am Morgen schon im ganzen Haus, obwohl sie niemand laut gesagt hatte.", en: "The piece of news was all through the house by morning, although nobody had said it out loud." }, drill: { jp: "Die Neuigkeit kam für alle plötzlich", en: "The piece of news came suddenly for everyone" }, accept: ["news", "the news", "piece of news", "tidings"], hint: "Rank 1844. Countable, unlike English 'news' — eine Neuigkeit, zwei Neuigkeiten. die Nachricht (u33) is the news report; a Neuigkeit is simply something new to you." },
        { id: "de-u121l4-modern", type: "vocab", front: "modern", reading: "modern", meaning: "up to date", example: { jp: "Die Küche ist modern, aber der Rest der Wohnung sieht aus wie vor vierzig Jahren.", en: "The kitchen is modern, but the rest of the flat looks like forty years ago." }, drill: { jp: "Das Haus ist sehr modern", en: "The house is very modern" }, accept: ["modern", "contemporary", "up to date", "fashionable"], hint: "Tier B — used in the corpus with no card behind it. ⚠️ Stress matters: moDERN is the adjective, MOdern a rare verb meaning to rot. The written word is identical." },
        { id: "de-u121l4-namens", type: "vocab", front: "namens", reading: "namens", meaning: "by the name of", example: { jp: "Ein Mann namens Weber hat heute Morgen zweimal angerufen und will bis Freitag eine Antwort.", en: "A man by the name of Weber called twice this morning and wants an answer by Friday." }, drill: { jp: "Ein Kind namens Anna wartet draußen", en: "A child by the name of Anna is waiting outside" }, accept: ["by the name of", "named", "called", "on behalf of"], hint: "Rank 1403. Stands right after the noun and needs no article. In formal letters it also means 'on behalf of' — namens der Firma." },
        { id: "de-u121l4-angetan", type: "vocab", front: "angetan", reading: "angetan", meaning: "taken (with something)", example: { jp: "Alle waren von dem neuen Plan angetan, obwohl noch niemand die genauen Kosten kannte.", en: "Everyone was taken with the new plan, although nobody yet knew the exact costs." }, drill: { jp: "Der Chef war sehr angetan", en: "The boss was very taken with it" }, accept: ["taken", "impressed", "pleased", "keen", "charmed"], hint: "Rank 1899. Always von etwas angetan sein — a warm but measured approval, the sort a German uses instead of enthusiasm. Only ever used in this phrase." },
      ],
    },
  ],
};
