// DE Unit 58 — Abstrakte Begriffe (slot: abstract ideas) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: the nouns an argument is actually made of. A2's vocabulary is
// picturable — home, food, travel, the body. This unit is the opposite: der
// Begriff, die Wahrheit, die Bedeutung, der Sinn, der Wert, das Prinzip, die
// Seele, der Geist, das Schicksal. There is nothing to draw, so every card leans
// harder on its example and its hint than an A2 card does.
// ⚠️ THE -HEIT / -KEIT / -NIS FAMILY IS THE LESSON UNDER THE LESSON. die
// Wahrheit, die Gerechtigkeit (u55), die Freiheit (u55), die Einzelheit, das
// Geheimnis, das Ereignis (u55) all derive from an adjective the learner already
// has, and the hints name the pattern rather than hiding it. Blocks 2 and 3: the
// derivation is FAIR GAME as a front when the noun is high-frequency and its
// meaning is not simply "the adjective, as a noun" — but check the base word is
// really taught first.
// ⚠️ MEMORY IS NOT TAKEN HERE. die Erinnerung and sich erinnern belong to u63
// "Experience and memory" (block 2). l3 takes der Traum and das Geheimnis, which
// are the inner life rather than recollection, and stops.
// FREE: Bedeutungen, Freunden, Pausen, Einzelheiten
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT58 = {
  id: "de-u58",
  lang: "de",
  title: "Abstrakte Begriffe",
  order: 58,
  stage: "b1",
  lessons: [
    {
      id: "de-u58l1",
      unit: 58,
      lesson: 1,
      title: "Wahrheit und Sinn",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the words an argument is built from: the concept, the truth, the meaning, the point of a thing, plain reason, and the exception to the rule.",
      items: [
        { id: "de-u58l1-derbegriff", type: "vocab", front: "der Begriff", reading: "derbegriff", meaning: "the concept", example: { jp: "Der Begriff ist schwer zu erklären, weil man ihn nicht sehen kann.", en: "The concept is hard to explain, because you can't see it." }, drill: { jp: "Der Begriff kommt aus der Forschung", en: "The concept comes from research" }, accept: ["concept", "the concept", "term", "the term", "notion", "the notion", "idea"], hint: "From begreifen (to grasp): what your mind can get hold of. im Begriff sein, etwas zu tun = to be about to do it." },
        { id: "de-u58l1-diewahrheit", type: "vocab", front: "die Wahrheit", reading: "diewahrheit", meaning: "the truth", example: { jp: "Die Wahrheit ist manchmal hart, aber am Ende hilft sie mehr.", en: "The truth is sometimes harsh, but in the end it helps more." }, drill: { jp: "Die Wahrheit ist manchmal hart", en: "The truth is sometimes harsh" }, accept: ["truth", "the truth"], hint: "wahr (true) + -heit. die Wahrheit sagen = to tell the truth. wahrscheinlich (u54) is built on the same wahr." },
        { id: "de-u58l1-diebedeutung", type: "vocab", front: "die Bedeutung", reading: "diebedeutung", meaning: "the meaning", example: { jp: "Das Wort hat zwei Bedeutungen, deshalb gibt es oft ein Missverständnis.", en: "The word has two meanings, which is why there is often a misunderstanding." }, drill: { jp: "Die Bedeutung kommt aus dem Zusammenhang", en: "The meaning comes from the context" }, accept: ["meaning", "the meaning", "significance", "the significance", "importance", "the importance", "sense"], hint: "From bedeuten, to mean. It also does 'importance': von großer Bedeutung = of great importance." },
        { id: "de-u58l1-dersinn", type: "vocab", front: "der Sinn", reading: "dersinn", meaning: "the sense", example: { jp: "Der Sinn der Übung ist nicht das Ergebnis, sondern der Weg.", en: "The point of the exercise isn't the result, but the path." }, drill: { jp: "Der Sinn zeigt sich am Ende", en: "The point shows itself in the end" }, accept: ["sense", "the sense", "meaning", "the meaning", "point", "the point", "purpose"], hint: "Das hat keinen Sinn = that makes no sense. Also the five senses — and the root under der Unsinn (u51)." },
        { id: "de-u58l1-dievernunft", type: "vocab", front: "die Vernunft", reading: "dievernunft", meaning: "good sense", example: { jp: "Am Ende hat die Vernunft gewonnen, und wir sind zu Hause geblieben.", en: "In the end good sense won, and we stayed at home." }, drill: { jp: "Die Vernunft hat am Ende gewonnen", en: "Good sense won in the end" }, accept: ["reason", "the reason", "common sense", "the common sense", "sense", "rationality"], hint: "NOT der Grund, which is a reason WHY. This is the faculty of thinking straight. vernünftig = sensible." },
        { id: "de-u58l1-dieausnahme", type: "vocab", front: "die Ausnahme", reading: "dieausnahme", meaning: "the exception", example: { jp: "Es gibt eine Ausnahme für Kinder, die noch nicht sechs Jahre alt sind.", en: "There is an exception for children who aren't six years old yet." }, drill: { jp: "Die Ausnahme gilt für Kinder", en: "The exception applies to children" }, accept: ["exception", "the exception"], hint: "aus + nehmen: what is taken out of the rule. eine Ausnahme machen = to make an exception." },
      ],
    },
    {
      id: "de-u58l2",
      unit: 58,
      lesson: 2,
      title: "Wert und Prinzip",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what people stand for: what a thing is worth, a principle, honour, the opposite of something, a claim you are entitled to, and fate.",
      items: [
        { id: "de-u58l2-derwert", type: "vocab", front: "der Wert", reading: "derwert", meaning: "the value", example: { jp: "Der Wert der alten Uhr ist hoch, aber verkaufen will sie niemand.", en: "The value of the old clock is high, but nobody wants to sell it." }, drill: { jp: "Der Wert steigt seit Jahren", en: "The value has been rising for years" }, accept: ["value", "the value", "worth", "the worth"], hint: "Money value and moral value in one word: Werte haben = to have principles. wert sein = to be worth." },
        { id: "de-u58l2-dasprinzip", type: "vocab", front: "das Prinzip", reading: "dasprinzip", meaning: "the principle", example: { jp: "Aus Prinzip nimmt er kein Geld für die Arbeit, auch von Freunden nicht.", en: "On principle he takes no money for the work, not even from friends." }, drill: { jp: "Das Prinzip gilt auch für Kinder", en: "The principle applies to children too" }, accept: ["principle", "the principle", "rule", "the rule"], hint: "Plural Prinzipien. aus Prinzip = on principle; im Prinzip = in principle, which in German also means 'in theory, but…'." },
        { id: "de-u58l2-dieehre", type: "vocab", front: "die Ehre", reading: "dieehre", meaning: "the honour", example: { jp: "Es ist mir eine Ehre, hier vor so vielen Gästen zu sprechen.", en: "It is an honour for me to speak here in front of so many guests." }, drill: { jp: "Die Ehre war sehr groß", en: "The honour was very great" }, accept: ["honour", "the honour", "honor", "the honor", "privilege", "the privilege"], hint: "ehrlich (honest) comes straight from it. zu Ehren von = in honour of; das Ehrenwort = word of honour." },
        { id: "de-u58l2-dasgegenteil", type: "vocab", front: "das Gegenteil", reading: "dasgegenteil", meaning: "the opposite", example: { jp: "Er hat genau das Gegenteil getan, und niemand hat das verstanden.", en: "He did exactly the opposite, and nobody understood it." }, drill: { jp: "Das Gegenteil ist auch möglich", en: "The opposite is also possible" }, accept: ["opposite", "the opposite", "reverse", "the reverse", "contrary", "the contrary"], hint: "gegen + der Teil: the part facing you. im Gegenteil = on the contrary, and it works as a whole answer." },
        { id: "de-u58l2-deranspruch", type: "vocab", front: "der Anspruch", reading: "deranspruch", meaning: "the claim", example: { jp: "Wer lange gearbeitet hat, hat auch einen Anspruch auf Urlaub.", en: "Whoever has worked a long time also has a claim to holiday." }, drill: { jp: "Der Anspruch steht im Vertrag", en: "The claim is in the contract" }, accept: ["claim", "the claim", "entitlement", "the entitlement", "right", "the right", "standard", "demand"], hint: "an + sprechen: what you speak up for. Anspruch auf etwas haben = to be entitled to something." },
        { id: "de-u58l2-dasschicksal", type: "vocab", front: "das Schicksal", reading: "dasschicksal", meaning: "the fate", example: { jp: "Das Schicksal hat es gut mit uns gemeint, denn wir haben den Zug knapp geschafft.", en: "Fate meant well by us, because we just barely made the train." }, drill: { jp: "Das Schicksal war sehr hart", en: "Fate was very hard" }, accept: ["fate", "the fate", "destiny", "the destiny", "lot", "the lot"], hint: "From schicken (to send): what is sent to you. Of a person's life, and of a plan: das Schicksal des Projekts." },
      ],
    },
    {
      id: "de-u58l3",
      unit: 58,
      lesson: 3,
      title: "Geist und Geheimnis",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the inner life: the soul, the mind, a dream, a conscience, a wonder, and a secret you are keeping.",
      items: [
        { id: "de-u58l3-dieseele", type: "vocab", front: "die Seele", reading: "dieseele", meaning: "the soul", example: { jp: "Musik tut der Seele gut, auch wenn der Tag sehr schwer war.", en: "Music does the soul good, even when the day was very hard." }, drill: { jp: "Die Seele braucht viel Zeit", en: "The soul needs a lot of time" }, accept: ["soul", "the soul", "psyche", "the psyche", "spirit"], hint: "mit Leib und Seele = with body and soul. seelisch is the German word for 'mental' in a health context." },
        { id: "de-u58l3-dergeist", type: "vocab", front: "der Geist", reading: "dergeist", meaning: "the mind", example: { jp: "Ein müder Geist arbeitet schlecht, deshalb hilft eine kurze Pause.", en: "A tired mind works badly, which is why a short break helps." }, drill: { jp: "Der Geist braucht auch Pausen", en: "The mind needs breaks too" }, accept: ["mind", "the mind", "spirit", "the spirit", "ghost", "the ghost", "intellect"], hint: "Three senses in one word: mind, spirit, ghost. begeistert (u57) is built straight on it." },
        { id: "de-u58l3-dertraum", type: "vocab", front: "der Traum", reading: "dertraum", meaning: "the dream", example: { jp: "Der Traum war sehr lang, aber am Morgen wusste ich nichts mehr.", en: "The dream was very long, but in the morning I knew nothing any more." }, drill: { jp: "Der Traum bleibt im Kopf", en: "The dream stays in your head" }, accept: ["dream", "the dream"], hint: "Both the one at night and the one for your life. Plural Träume; von etwas träumen = to dream of something." },
        { id: "de-u58l3-dasgewissen", type: "vocab", front: "das Gewissen", reading: "dasgewissen", meaning: "the conscience", example: { jp: "Ein schlechtes Gewissen hat er nicht, obwohl der Streit von ihm kam.", en: "He doesn't have a bad conscience, although the quarrel came from him." }, drill: { jp: "Das Gewissen war nicht ruhig", en: "The conscience was not calm" }, accept: ["conscience", "the conscience"], hint: "From wissen: what you know about yourself. ein schlechtes Gewissen haben = to have a guilty conscience." },
        { id: "de-u58l3-daswunder", type: "vocab", front: "das Wunder", reading: "daswunder", meaning: "the wonder", example: { jp: "Es ist kein Wunder, dass er müde ist, denn er hat kaum geschlafen.", en: "It's no wonder that he's tired, because he has hardly slept." }, drill: { jp: "Das Wunder war sehr groß", en: "The wonder was very great" }, accept: ["wonder", "the wonder", "miracle", "the miracle", "marvel", "the marvel"], hint: "Kein Wunder! = no wonder! sich wundern = to be surprised, the everyday use of the same root." },
        { id: "de-u58l3-dasgeheimnis", type: "vocab", front: "das Geheimnis", reading: "dasgeheimnis", meaning: "the secret", example: { jp: "Das Geheimnis hat er nie erzählt, obwohl ihn viele danach gefragt haben.", en: "He never told the secret, although many people asked him about it." }, drill: { jp: "Das Geheimnis bleibt in der Familie", en: "The secret stays in the family" }, accept: ["secret", "the secret", "mystery", "the mystery"], hint: "geheim (secret) + -nis, a neuter ending like das Ergebnis. ein Geheimnis haben; geheim halten = to keep secret." },
      ],
    },
    {
      id: "de-u58l4",
      unit: 58,
      lesson: 4,
      title: "Woher und wovon",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a thing in the abstract: where it came from, what kind it is, whether it was chance, the detail and the feature — and say what applies to whom.",
      items: [
        { id: "de-u58l4-derursprung", type: "vocab", front: "der Ursprung", reading: "derursprung", meaning: "the origin", example: { jp: "Der Ursprung des Wortes liegt weit in der Vergangenheit.", en: "The origin of the word lies far back in the past." }, drill: { jp: "Der Ursprung liegt in der Vergangenheit", en: "The origin lies in the past" }, accept: ["origin", "the origin", "source", "the source", "beginning", "the beginning", "root"], hint: "ur- (primal) + der Sprung (the leap): where a thing first leapt into being. ursprünglich = originally." },
        { id: "de-u58l4-dieart", type: "vocab", front: "die Art", reading: "dieart", meaning: "the kind", example: { jp: "Die Art der Arbeit macht mir Freude, obwohl sie sehr schwer ist.", en: "The kind of work gives me joy, although it is very hard." }, drill: { jp: "Die Art ist sehr besonders", en: "The kind is very special" }, accept: ["kind", "the kind", "sort", "the sort", "type", "the type", "way", "the way", "manner", "species"], hint: "Three jobs: a kind of thing, a species of animal, and a person's manner — Das ist nicht seine Art." },
        { id: "de-u58l4-derzufall", type: "vocab", front: "der Zufall", reading: "derzufall", meaning: "the coincidence", example: { jp: "Es war ein Zufall, dass wir uns am Bahnhof getroffen haben.", en: "It was a coincidence that we met at the station." }, drill: { jp: "Der Zufall hilft uns manchmal", en: "Chance sometimes helps us" }, accept: ["coincidence", "the coincidence", "chance", "the chance", "accident", "the accident", "fluke"], hint: "zu + fallen: what falls to you. durch Zufall = by chance; zufällig = by accident, coincidentally." },
        { id: "de-u58l4-dieeinzelheit", type: "vocab", front: "die Einzelheit", reading: "dieeinzelheit", meaning: "the detail", example: { jp: "Die Einzelheiten kann ich morgen erklären, heute habe ich keine Zeit.", en: "I can explain the details tomorrow; today I have no time." }, drill: { jp: "Die Einzelheit steht im Bericht", en: "The detail is in the report" }, accept: ["detail", "the detail", "particular", "the particular", "point", "the point", "specific"], hint: "einzeln (individual) + -heit. Usually plural: die Einzelheiten. The borrowed everyday word is das Detail." },
        { id: "de-u58l4-dasmerkmal", type: "vocab", front: "das Merkmal", reading: "dasmerkmal", meaning: "the feature", example: { jp: "Ein Merkmal von gutem Deutsch ist die richtige Reihenfolge der Wörter.", en: "A feature of good German is the correct order of the words." }, drill: { jp: "Das Merkmal zeigt sich sehr deutlich", en: "The feature shows very clearly" }, accept: ["feature", "the feature", "characteristic", "the characteristic", "trait", "the trait", "mark", "the mark"], hint: "merken (to notice) + das Mal (the mark): the mark you notice a thing by." },
        { id: "de-u58l4-gelten", type: "vocab", front: "gelten", reading: "gelten", meaning: "to be valid", example: { jp: "Die Regel gilt auch für Kinder, aber nicht am Wochenende.", en: "The rule is valid for children too, but not at the weekend." }, drill: { jp: "Die alten Regeln gelten weiter", en: "The old rules are still valid" }, accept: ["to apply", "apply", "to be valid", "be valid", "to hold", "hold", "to count", "to be in force"], hint: "Strong verb: es gilt, es galt. als etwas gelten = to be regarded as something." },
      ],
    },
  ],
};
