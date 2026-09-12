// FR Unit 77 — Grammar 7 — passive, causative, indirect (slot: grammar-7) — B1
// The three ways French avoids naming who did something — and the reason a B1
// learner suddenly cannot read a news article or a sign, despite knowing the
// words. None of this exists below B1 in the pathway.
//
// AUTHORING NOTE: the passive is taught as CHUNKS (est construit, a été vendu)
// rather than as a rule, for the same reason A1 Unit 23 taught j'ai mangé
// instead of "the passé composé": the learner already owns être and the
// participles, so these land as recognisable pieces and the pattern can be seen
// before it is stated. The hints state the rule underneath each chunk.
//
// SCOPE BOUNDARY: no overlap with block 1's slots — none of u58–u70 is about
// voice or impersonal structures. Every front checked against the live corpus.
// Conventions: see fr/unit1.js.
export const FR_UNIT77 = {
  id: "fr-u77",
  lang: "fr",
  title: "Un peu de grammaire · 5",
  order: 77,
  stage: "b1",
  lessons: [
    {
      id: "fr-u77l1",
      unit: 77,
      lesson: 1,
      title: "When the doer disappears",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read a passive sentence: le pont est construit, la maison a été vendue, fabriqué par…",
      items: [
        { id: "fr-u77l1-estconstruit", type: "vocab", front: "est construit", reading: "estconstruit", meaning: "is built", example: { jp: "Ce pont est construit en métal, si bien qu'il dure très longtemps.", en: "This bridge is built of metal, so it lasts a very long time." }, accept: ["is being built", "gets built"], hint: "The passive is être + the participle, and the participle agrees: construit, construite, construits." },
        { id: "fr-u77l1-aetevendu", type: "vocab", front: "a été vendu", reading: "aetevendu", meaning: "was sold", example: { jp: "La maison a été vendue en une semaine, ce qui a surpris tout le monde.", en: "The house was sold in a week, which surprised everyone." }, accept: ["has been sold", "got sold"], hint: "Past passive stacks two auxiliaries: a été + participle. Long, but completely regular." },
        { id: "fr-u77l1-sontfabriques", type: "vocab", front: "sont fabriqués", reading: "sontfabriques", meaning: "are made", example: { jp: "Ces vêtements sont fabriqués en France, donc ils coûtent plus cher.", en: "These clothes are made in France, so they cost more." }, drill: { jp: "Ces vêtements sont fabriqués en France", en: "These clothes are made in France" }, accept: ["are manufactured", "are produced"] },
        { id: "fr-u77l1-par", type: "vocab", front: "par", reading: "par", meaning: "by", example: { jp: "Ce roman a été écrit par une femme dont personne ne connaît le vrai nom.", en: "This novel was written by a woman whose real name nobody knows." }, drill: { jp: "Ce roman a été écrit par une femme", en: "This novel was written by a woman" }, accept: ["through", "via", "by means of"], hint: "par names the doer in a passive. It also means \"per\": deux fois par semaine." },
        { id: "fr-u77l1-etreconnu", type: "vocab", front: "être connu", reading: "etreconnu", meaning: "to be known", example: { jp: "Cette région est connue pour ses paysages, et le tourisme y est important.", en: "This region is known for its landscapes, and tourism is important there." }, accept: ["to be famous", "to be well known"], hint: "être connu POUR something. From connaître (Unit 49)." },
        { id: "fr-u77l1-onditque", type: "vocab", front: "on dit que", reading: "onditque", meaning: "it is said that", example: { jp: "On dit que ce restaurant est le meilleur de la région, mais je n'y suis jamais allé.", en: "They say this restaurant is the best in the region, but I've never been." }, accept: ["they say", "people say", "it's said"], hint: "French prefers on + active where English reaches for a passive. This is the commonest \"passive\" of all." },
      ],
    },
    {
      id: "fr-u77l2",
      unit: 77,
      lesson: 2,
      title: "Having it done",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say you had something done rather than did it: je fais réparer, faire faire, permettre, obliger.",
      items: [
        { id: "fr-u77l2-fairefaire", type: "vocab", front: "faire faire", reading: "fairefaire", meaning: "to have something done", example: { jp: "Je vais faire faire une clé, parce que j'ai perdu la mienne.", en: "I'm going to have a key made, because I've lost mine." }, accept: ["to get done", "to have made"], hint: "faire + another verb = you arrange it, someone else does it. Two faires in a row is normal here." },
        { id: "fr-u77l2-jefaisreparer", type: "vocab", front: "je fais réparer", reading: "jefaisreparer", meaning: "I'm having it repaired", example: { jp: "Je fais réparer ma voiture, donc je prends le train cette semaine.", en: "I'm having my car repaired, so I'm taking the train this week." }, accept: ["i'm getting it fixed", "i have it repaired"], hint: "The everyday shape of faire faire. Note it's NOT \"je répare\" — that would mean you do it yourself." },
        { id: "fr-u77l2-permettre", type: "vocab", front: "permettre", reading: "permettre", meaning: "to allow", example: { jp: "Ce site permet de comparer les prix, ce qui est très utile.", en: "This site allows you to compare prices, which is very useful." }, accept: ["to permit", "to let", "to enable"], hint: "permettre DE + verb. And se permettre de = to take the liberty of." },
        { id: "fr-u77l2-obliger", type: "vocab", front: "obliger", reading: "obliger", meaning: "to force", example: { jp: "La pluie nous a obligés à rentrer plus tôt.", en: "The rain forced us to go home earlier." }, accept: ["to compel", "to oblige", "to make"], hint: "obliger quelqu'un À faire. The passive of it is je suis obligé de (Unit 44)." },
        { id: "fr-u77l2-empecher", type: "vocab", front: "empêcher", reading: "empecher", meaning: "to prevent", example: { jp: "Rien ne l'empêche de partir, sauf si sa famille refuse.", en: "Nothing prevents him from leaving, unless his family refuses." }, drill: { jp: "Rien ne peut empêcher son départ", en: "Nothing can prevent his departure" }, accept: ["to stop", "to hinder", "to keep from"], hint: "empêcher quelqu'un DE faire — the mirror of permettre de." },
        { id: "fr-u77l2-sefaire", type: "vocab", front: "se faire", reading: "sefaire", meaning: "to get (something done to you)", example: { jp: "Il s'est fait voler son portable dans le métro.", en: "He got his phone stolen on the underground." }, accept: ["to have done to oneself", "to get oneself"], hint: "se faire + verb is how French says \"I got my hair cut\" or \"he got robbed\" — the subject receives the action." },
      ],
    },
    {
      id: "fr-u77l3",
      unit: 77,
      lesson: 3,
      title: "It does itself",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the pronominal passive, which French prefers to the real one: ça se dit, ça se fait, ça se trouve.",
      items: [
        { id: "fr-u77l3-casedit", type: "vocab", front: "ça se dit", reading: "casedit", meaning: "people say that", example: { jp: "« Bonne continuation » ? Oui, ça se dit, surtout à la fin d'un message.", en: "\"Bonne continuation\" (all the best for what comes next)? Yes, people say that, especially at the end of a message." }, accept: ["that's said", "you can say that", "it is said"], hint: "The most useful question you can ask a native: est-ce que ça se dit ? — is that something people actually say?" },
        { id: "fr-u77l3-casefait", type: "vocab", front: "ça se fait", reading: "casefait", meaning: "that's done", example: { jp: "Arriver en retard chez quelqu'un, ça ne se fait pas vraiment en France.", en: "Turning up late at someone's house isn't really done in France." }, accept: ["that's acceptable", "it's the custom", "people do that"], hint: "Almost always heard in the negative — ça ne se fait pas is a rule of manners, not of grammar." },
        { id: "fr-u77l3-setrouver", type: "vocab", front: "se trouver", reading: "setrouver", meaning: "to be located", example: { jp: "La gare se trouve à côté du parc, donc c'est facile à trouver.", en: "The station is located next to the park, so it's easy to find." }, drill: { jp: "La gare doit se trouver ici", en: "The station must be located here" }, accept: ["to be situated", "to be found", "to lie"], hint: "Where French says se trouver, English usually just says \"is\"." },
        { id: "fr-u77l3-ilsagitde", type: "vocab", front: "il s'agit de", reading: "ilsagitde", meaning: "it's about", example: { jp: "Dans ce reportage, il s'agit du réchauffement et de ses effets.", en: "This report is about global warming and its effects." }, drill: { jp: "Dans ce livre il s'agit de la guerre", en: "This book is about the war" }, accept: ["it is a matter of", "it concerns", "this is about"], hint: "Impersonal only — you can never say \"je m'agis\". The subject is always il." },
        { id: "fr-u77l3-ilreste", type: "vocab", front: "il reste", reading: "ilreste", meaning: "there is left", example: { jp: "Il reste deux jours avant l'examen, et je n'ai rien fait.", en: "There are two days left before the exam, and I haven't done anything." }, accept: ["there remains", "there are left", "what's left"], hint: "Impersonal il — the thing that remains comes after the verb, not before it." },
        { id: "fr-u77l3-ilmanque", type: "vocab", front: "il manque", reading: "ilmanque", meaning: "there is missing", example: { jp: "Il manque une page dans ce livre, si bien qu'on ne comprend pas la fin.", en: "There's a page missing from this book, so you don't understand the ending." }, accept: ["there's a lack of", "is missing", "we're short of"], hint: "Also personal, with a twist: tu me manques = I miss you, literally \"you are lacking to me\"." },
      ],
    },
    {
      id: "fr-u77l4",
      unit: 77,
      lesson: 4,
      title: "Reporting without a source",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report something you can't vouch for: il paraît que, il suffit de, on raconte que.",
      items: [
        { id: "fr-u77l4-ilparaitque", type: "vocab", front: "il paraît que", reading: "ilparaitque", meaning: "apparently", example: { jp: "Il paraît que le film est très bon, mais je ne l'ai pas encore vu.", en: "Apparently the film is very good, but I haven't seen it yet." }, accept: ["it seems that", "i hear that", "rumour has it"], hint: "Marks hearsay: you're passing on what you were told, without vouching for it." },
        { id: "fr-u77l4-onraconteque", type: "vocab", front: "on raconte que", reading: "onraconteque", meaning: "the story goes that", example: { jp: "On raconte que cette maison est très vieille, pourtant personne n'en est sûr.", en: "The story goes that this house is very old, yet nobody is sure of it." }, accept: ["they say that", "people tell", "legend has it"] },
        { id: "fr-u77l4-ilsuffitde", type: "vocab", front: "il suffit de", reading: "ilsuffitde", meaning: "you just have to", example: { jp: "Il suffit de cliquer ici, et le fichier se télécharge tout seul.", en: "You just have to click here, and the file downloads by itself." }, accept: ["it is enough to", "all you need is", "simply"], hint: "The opposite of il faut in tone: il faut is a demand, il suffit de is a reassurance." },
        { id: "fr-u77l4-soidisant", type: "vocab", front: "soi-disant", reading: "soidisant", meaning: "supposedly", example: { jp: "Ce soi-disant scientifique n'a jamais travaillé dans une université.", en: "This so-called scientist has never worked in a university." }, drill: { jp: "Ce soi-disant scientifique travaille ici", en: "This supposed scientist works here" }, accept: ["so-called", "allegedly", "purportedly"], hint: "Carries doubt, often scorn — you are signalling that you don't believe the label." },
        { id: "fr-u77l4-dapres", type: "vocab", front: "d'après", reading: "dapres", meaning: "according to", example: { jp: "D'après les scientifiques, la situation va être difficile pendant longtemps.", en: "According to scientists, the situation will be difficult for a long time." }, drill: { jp: "D'après les scientifiques la situation est difficile", en: "According to the scientists the situation is difficult" }, accept: ["going by", "judging by", "as stated by"], hint: "Interchangeable with selon (Unit 43) before a person or a source." },
        { id: "fr-u77l4-lasource2", type: "vocab", front: "de source sûre", reading: "desourcesure", meaning: "from a reliable source", example: { jp: "Je le sais de source sûre, mais je ne peux pas vous dire qui me l'a dit.", en: "I know it from a reliable source, but I can't tell you who told me." }, accept: ["on good authority", "reliably"], hint: "The opposite move to il paraît que — here you ARE vouching for it." },
      ],
    },
  ],
};
