// DE Unit 37 — Vergleich und Konjunktiv (slot: grammar-5) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// The slot asks for conditionals, ability and comparison. Comparison and ability are
// straightforward; the CONDITIONAL is handled as Konjunktiv II (l3), because German's
// if-clause is built from würde/wäre/hätte and u29 already owns wenn and falls. So
// this unit teaches the FORMS the conditional needs, not the conjunctions that
// introduce it — those are the lead's and are used here, not retaught.
// ⚠️ als is NOT taught here even though the comparative needs it (größer ALS). u29
// took als for its when-clause and lower slot wins; it appears in examples instead.
// je and desto moved in from u36, where they could not work: they need comparatives.
// Rejected as the same lexeme: der Vergleich (~vergleichen in this same lesson);
// die Möglichkeit (~möglich, same lesson); unmöglich (transparent un- prefixing);
// schlechter and am besten were dropped in favour of the IRREGULAR comparatives
// besser and lieber, which are the ones a rule cannot give you.
export const DE_UNIT37 = {
  id: "de-u37",
  lang: "de",
  title: "Vergleich und Konjunktiv",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "de-u37l1",
      unit: 37,
      lesson: 1,
      title: "Vergleichen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Set two things side by side and say whether they are the same, similar or different.",
      items: [
        { id: "de-u37l1-vergleichen", type: "vocab", front: "vergleichen", reading: "vergleichen", meaning: "to compare", example: { jp: "Wir vergleichen die Preise, bevor wir kaufen.", en: "We compare the prices before we buy." }, drill: { jp: "Wir vergleichen die Preise hier", en: "We compare the prices here" }, accept: ["to compare", "compare"], hint: "Inseparable ver- on gleichen. Vergleichen mit is to compare with — German uses mit where English often uses to." },
        { id: "de-u37l1-derunterschied", type: "vocab", front: "der Unterschied", reading: "derunterschied", meaning: "difference", example: { jp: "Der Unterschied ist klein, obwohl die Preise verschieden sind.", en: "The difference is small, although the prices are different." }, drill: { jp: "Der Unterschied ist sehr klein", en: "The difference is very small" }, accept: ["difference", "distinction"], hint: "unter plus scheiden, to separate — what separates two things underneath. Einen Unterschied machen is to make a difference." },
        { id: "de-u37l1-gleich", type: "vocab", front: "gleich", reading: "gleich", meaning: "the same / equal", example: { jp: "Die Zimmer sind gleich, obwohl die Häuser verschieden sind.", en: "The rooms are the same, although the houses are different." }, drill: { jp: "Die zwei Zimmer sind gleich", en: "The two rooms are the same" }, accept: ["same", "the same", "equal", "identical"], hint: "It has a second, very common life as an adverb meaning in a moment: Ich komme gleich. Context keeps them apart." },
        { id: "de-u37l1-aehnlich", type: "vocab", front: "ähnlich", reading: "ahnlich", meaning: "similar", example: { jp: "Das Buch ist ähnlich, aber nicht gleich.", en: "The book is similar, but not the same." }, drill: { jp: "Die zwei Bücher sind ähnlich", en: "The two books are similar" }, accept: ["similar", "alike", "like"], hint: "The step below gleich. Jemandem ähnlich sehen is to look like someone — with a DATIVE person: er sieht seinem Vater ähnlich." },
        { id: "de-u37l1-genauso", type: "vocab", front: "genauso", reading: "genauso", meaning: "just as / exactly as", example: { jp: "Das Handy ist genauso teuer wie das hier.", en: "The phone is just as expensive as this one." }, drill: { jp: "Das Handy ist genauso teuer", en: "The phone is just as expensive" }, accept: ["just as", "exactly as", "equally"], hint: "genau (u34) plus so. It pairs with wie (u3) for equality — genauso … wie — where a real comparison would take als." },
        { id: "de-u37l1-verschieden", type: "vocab", front: "verschieden", reading: "verschieden", meaning: "different / various", example: { jp: "Die Preise sind verschieden, deshalb vergleichen wir sie.", en: "The prices are different, therefore we compare them." }, drill: { jp: "Die Preise sind sehr verschieden", en: "The prices are very different" }, accept: ["different", "various", "differing", "diverse"], hint: "Before a plural noun it means various: verschiedene Bücher. After ist it means different from each other." },
      ],
    },
    {
      id: "de-u37l2",
      unit: 37,
      lesson: 2,
      title: "Mehr oder weniger",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say more, less, better and rather — the four comparatives no rule gives you — and link two of them.",
      items: [
        { id: "de-u37l2-mehr", type: "vocab", front: "mehr", reading: "mehr", meaning: "more", example: { jp: "Wir brauchen mehr Zeit für die Aufgabe.", en: "We need more time for the task." }, drill: { jp: "Wir brauchen mehr Zeit", en: "We need more time" }, accept: ["more"], hint: "The irregular comparative of viel (u10) — not vieler. Nicht mehr means not any more, which is the form you will use daily." },
        { id: "de-u37l2-weniger", type: "vocab", front: "weniger", reading: "weniger", meaning: "less / fewer", example: { jp: "Ich habe weniger Geld als er.", en: "I have less money than he does." }, drill: { jp: "Ich habe weniger Geld", en: "I have less money" }, accept: ["less", "fewer"], hint: "From wenig (u10), and unlike English it covers both less and fewer — German does not make that distinction." },
        { id: "de-u37l2-besser", type: "vocab", front: "besser", reading: "besser", meaning: "better", example: { jp: "Das Ergebnis ist besser als am Montag.", en: "The result is better than on Monday." }, drill: { jp: "Das Ergebnis ist heute besser", en: "The result is better today" }, accept: ["better"], hint: "The irregular comparative of gut (u2), exactly as English good goes to better. Regular adjectives just add -er: klein, kleiner." },
        { id: "de-u37l2-lieber", type: "vocab", front: "lieber", reading: "lieber", meaning: "rather / preferably", example: { jp: "Ich trinke lieber Tee als Kaffee.", en: "I would rather drink tea than coffee." }, drill: { jp: "Ich trinke lieber Tee", en: "I would rather drink tea" }, accept: ["rather", "preferably", "would rather", "prefer"], hint: "The irregular comparative of gern (u2). Ich trinke lieber Tee is how German says I prefer tea — with an adverb, not a verb." },
        { id: "de-u37l2-je", type: "vocab", front: "je", reading: "je", meaning: "the — first half of the pair je … desto", example: { jp: "Je mehr wir üben, desto besser ist das Ergebnis.", en: "The more we practise, the better the result is." }, drill: { jp: "Je mehr wir üben desto besser", en: "The more we practise the better" }, accept: ["the", "the more"], hint: "Always paired with desto. The je half sends its verb to the END — je mehr wir ÜBEN — because it is a subordinate clause, the u29 rule." },
        { id: "de-u37l2-desto", type: "vocab", front: "desto", reading: "desto", meaning: "the — second half of the pair je … desto", example: { jp: "Je länger wir warten, desto weniger Zeit haben wir.", en: "The longer we wait, the less time we have." }, drill: { jp: "Je mehr wir lernen desto besser", en: "The more we learn the better" }, accept: ["the", "the better", "all the"], hint: "The answering half. After desto the verb comes SECOND, not last — so the two halves of the pair use opposite word order." },
      ],
    },
    {
      id: "de-u37l3",
      unit: 37,
      lesson: 3,
      title: "Konjunktiv II",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what would be the case if things were different — the polite and hypothetical forms.",
      items: [
        { id: "de-u37l3-waere", type: "vocab", front: "wäre", reading: "ware", meaning: "would be", example: { jp: "Das wäre gut, wenn wir mehr Zeit hätten.", en: "That would be good if we had more time." }, drill: { jp: "Das wäre sehr gut", en: "That would be very good" }, accept: ["would be", "were"], hint: "The Konjunktiv II of sein. Wäre is what you use for anything unreal or polite — Das wäre schön is warmer than Das ist schön." },
        { id: "de-u37l3-haette", type: "vocab", front: "hätte", reading: "hatte", meaning: "would have", example: { jp: "Ich hätte gern einen Kaffee.", en: "I would like a coffee." }, drill: { jp: "Ich hätte gern einen Kaffee", en: "I would like a coffee" }, accept: ["would have", "had"], hint: "From haben. Ich hätte gern is THE way to order anything in a German café — more polite than ich will and commoner than ich möchte." },
        { id: "de-u37l3-koennte", type: "vocab", front: "könnte", reading: "konnte", meaning: "could / would be able to", example: { jp: "Ich könnte morgen kommen, falls du auch kommst.", en: "I could come tomorrow if you come too." }, drill: { jp: "Ich könnte morgen kommen", en: "I could come tomorrow" }, accept: ["could", "would be able to", "might"], hint: "From können (u20), with an umlaut that changes everything: konnte is a plain past, könnte is hypothetical. The two dots are the whole difference." },
        { id: "de-u37l3-wuerde", type: "vocab", front: "würde", reading: "wurde", meaning: "would", example: { jp: "Ich würde gern mehr lernen, aber ich habe keine Zeit.", en: "I would like to learn more, but I have no time." }, drill: { jp: "Ich würde gern mehr lernen", en: "I would like to learn more" }, accept: ["would"], hint: "The all-purpose would: würde plus an infinitive at the end. It is how German builds a conditional for almost every verb except sein and haben." },
        { id: "de-u37l3-derwunsch", type: "vocab", front: "der Wunsch", reading: "derwunsch", meaning: "wish", example: { jp: "Mein Wunsch wäre ein Jahr ohne Arbeit.", en: "My wish would be a year without work." }, drill: { jp: "Der Wunsch ist sehr groß", en: "The wish is very great" }, accept: ["wish", "desire", "request"], hint: "The noun the Konjunktiv exists to express. Its plural umlauts: die Wünsche. In a shop, Haben Sie noch einen Wunsch? means anything else?" },
        { id: "de-u37l3-hoffentlich", type: "vocab", front: "hoffentlich", reading: "hoffentlich", meaning: "hopefully", example: { jp: "Hoffentlich ist das Wetter morgen besser.", en: "Hopefully the weather will be better tomorrow." }, drill: { jp: "Hoffentlich ist das Wetter besser", en: "Hopefully the weather is better" }, accept: ["hopefully", "I hope", "let us hope"], hint: "Built from u29's hoffen. Unlike English hopefully it is never criticised — it is simply the normal word, and it takes first position." },
      ],
    },
    {
      id: "de-u37l4",
      unit: 37,
      lesson: 4,
      title: "Fähigkeit und Möglichkeit",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what someone is able to do, what conditions it needs, and whether it worked out.",
      items: [
        { id: "de-u37l4-diefaehigkeit", type: "vocab", front: "die Fähigkeit", reading: "diefahigkeit", meaning: "ability", example: { jp: "Die Fähigkeit zu warten ist gut für einen Lehrer.", en: "The ability to wait is good for a teacher." }, drill: { jp: "Die Fähigkeit ist sehr selten", en: "The ability is very rare" }, accept: ["ability", "skill", "capability"], hint: "From fähig, able. It is the noun behind können (u20) — what you can do, named as a thing." },
        { id: "de-u37l4-schaffen", type: "vocab", front: "schaffen", reading: "schaffen", meaning: "to manage / get done", example: { jp: "Wir schaffen die Aufgabe heute, wenn wir zusammen arbeiten.", en: "We will get the task done today if we work together." }, drill: { jp: "Wir schaffen die Arbeit heute", en: "We will get the work done today" }, accept: ["to manage", "to get done", "to achieve", "manage"], hint: "The everyday word for pulling something off in time: Ich schaffe das. It also means to create, in a more formal register." },
        { id: "de-u37l4-gelingen", type: "vocab", front: "gelingen", reading: "gelingen", meaning: "to succeed / turn out well", example: { jp: "Der Versuch kann gelingen, falls wir genau messen.", en: "The trial can succeed if we measure precisely." }, drill: { jp: "Die Versuche gelingen sehr gut", en: "The trials succeed very well" }, accept: ["to succeed", "to turn out well", "to work out", "succeed"], hint: "The THING succeeds, not the person: der Versuch gelingt mir, the trial succeeds for me. The person goes in the dative." },
        { id: "de-u37l4-moeglich", type: "vocab", front: "möglich", reading: "moglich", meaning: "possible", example: { jp: "Es ist möglich, dass der Zug später kommt.", en: "It is possible that the train comes later." }, drill: { jp: "Das ist heute nicht möglich", en: "That is not possible today" }, accept: ["possible", "feasible"], hint: "From mögen. So bald wie möglich means as soon as possible — the phrase you will need most." },
        { id: "de-u37l4-diebedingung", type: "vocab", front: "die Bedingung", reading: "diebedingung", meaning: "condition", example: { jp: "Die Bedingung ist, dass wir zusammen kommen.", en: "The condition is that we come together." }, drill: { jp: "Die Bedingung ist sehr schwer", en: "The condition is very hard" }, accept: ["condition", "requirement", "term"], hint: "The thing that must hold. Unter einer Bedingung is on one condition — the phrase that ends a negotiation." },
        { id: "de-u37l4-klappen", type: "vocab", front: "klappen", reading: "klappen", meaning: "to work out", example: { jp: "Hoffentlich klappt es morgen, obwohl die Zeit kurz ist.", en: "Hopefully it will work out tomorrow, although time is short." }, drill: { jp: "Hoffentlich klappen die Termine morgen", en: "Hopefully the appointments work out tomorrow" }, accept: ["to work out", "to go well", "to come off", "work out"], hint: "Colloquial and extremely common: Hat es geklappt? — did it work out? Almost always used with es as its subject." },
      ],
    },
  ],
};
