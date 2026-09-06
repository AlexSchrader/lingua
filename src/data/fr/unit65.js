// FR Unit 65 — Les idées abstraites (slot: abstract ideas) — B1
// The most abstract vocab unit of the block: the mind and thought, truth and the
// real, values, and the structure of ideas (exception, contradiction, paradox).
// A2's l'idée, la raison, le sens, le but, la règle and the sibling blocks' le
// concept, la notion, la valeur, l'ensemble are all taught elsewhere and avoided;
// every front checked against the live 1,287 A1+A2 fronts and the sibling B1
// blocks. Two-clause examples on abstractions stay short and concrete in their
// supporting vocab. Conventions: fr/unit1.js.
export const FR_UNIT65 = {
  id: "fr-u65",
  lang: "fr",
  title: "Les idées abstraites",
  order: 65,
  stage: "b1",
  lessons: [
    {
      id: "fr-u65l1",
      unit: 65,
      lesson: 1,
      title: "Mind and thought",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the mind at work: la pensée, l'esprit, la conscience, la volonté.",
      items: [
        { id: "fr-u65l1-lapensee", type: "vocab", front: "la pensée", reading: "lapensee", meaning: "the thought", example: { jp: "Elle garde toujours une pensée pour ses amis.", en: "She always keeps a thought for her friends." }, accept: ["thought", "the thinking", "the idea"], hint: "A thought, or thinking itself — from penser. la libre pensée = free thought." },
        { id: "fr-u65l1-lesprit", type: "vocab", front: "l'esprit", reading: "lesprit", meaning: "the mind", example: { jp: "Garde l'esprit calme avant l'examen.", en: "Keep a calm mind before the exam." }, accept: ["mind", "the spirit", "the wit"], hint: "The mind or spirit. avoir l'esprit ouvert = to be open-minded. Also a ghost." },
        { id: "fr-u65l1-laconscience", type: "vocab", front: "la conscience", reading: "laconscience", meaning: "the awareness", example: { jp: "Elle a pris conscience du problème trop tard.", en: "She became aware of the problem too late." }, accept: ["awareness", "the conscience", "consciousness"], hint: "Both conscience (moral) and awareness. prendre conscience de = to become aware of." },
        { id: "fr-u65l1-lavolonte", type: "vocab", front: "la volonté", reading: "lavolonte", meaning: "the will", example: { jp: "Sans volonté, c'est difficile de changer.", en: "Without willpower, it's hard to change." }, accept: ["will", "the willpower", "the wish"], hint: "Willpower, or the will/wish. la bonne volonté = goodwill. From vouloir." },
        { id: "fr-u65l1-lamentalite", type: "vocab", front: "la mentalité", reading: "lamentalite", meaning: "the mentality", example: { jp: "Sa mentalité a changé après ce voyage.", en: "His mentality changed after this trip." }, accept: ["mentality", "the mindset", "the attitude"], hint: "A mindset or way of thinking — quelle mentalité ! Often a touch critical." },
        { id: "fr-u65l1-lareflexion", type: "vocab", front: "la réflexion", reading: "lareflexion", meaning: "reflection", example: { jp: "Après réflexion, il a décidé de rester.", en: "After some thought, he decided to stay." }, accept: ["reflection", "thought", "the remark"], hint: "Thinking something over — après réflexion = on reflection. Also a spoken remark." },
      ],
    },
    {
      id: "fr-u65l2",
      unit: 65,
      lesson: 2,
      title: "Truth and the real",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what is real or not: la vérité, la réalité, l'illusion, le symbole.",
      items: [
        { id: "fr-u65l2-laverite", type: "vocab", front: "la vérité", reading: "laverite", meaning: "the truth", example: { jp: "Il vaut mieux dire la vérité, même si c'est difficile.", en: "It's better to tell the truth, even if it's hard." }, drill: { jp: "Je dois dire la vérité", en: "I must tell the truth" }, accept: ["truth", "the truth"], hint: "The truth. dire la vérité = to tell the truth. The opposite is le mensonge." },
        { id: "fr-u65l2-larealite", type: "vocab", front: "la réalité", reading: "larealite", meaning: "reality", example: { jp: "La réalité est souvent différente de ce qu'on imagine.", en: "Reality is often different from what you imagine." }, accept: ["reality", "the reality"], hint: "Reality. en réalité = in fact, actually. From réel." },
        { id: "fr-u65l2-lexistence", type: "vocab", front: "l'existence", reading: "lexistence", meaning: "existence", example: { jp: "Il pose des questions sur le sens de l'existence.", en: "He asks questions about the meaning of existence." }, accept: ["existence", "the life"], hint: "Existence, or one's life as a whole — from exister. mener une existence calme." },
        { id: "fr-u65l2-lillusion", type: "vocab", front: "l'illusion", reading: "lillusion", meaning: "the illusion", example: { jp: "Le vrai bonheur est peut-être une illusion.", en: "True happiness is perhaps an illusion." }, accept: ["illusion", "the false hope"], hint: "An illusion or false hope — se faire des illusions = to kid oneself." },
        { id: "fr-u65l2-lesymbole", type: "vocab", front: "le symbole", reading: "lesymbole", meaning: "the symbol", example: { jp: "La couleur blanche est souvent un symbole de paix.", en: "White is often a symbol of peace." }, accept: ["symbol", "the sign", "the emblem"], hint: "A symbol — le symbole de la liberté. Also a written sign." },
        { id: "fr-u65l2-ladefinition", type: "vocab", front: "la définition", reading: "ladefinition", meaning: "the definition", example: { jp: "Il a donné une définition claire du problème.", en: "He gave a clear definition of the problem." }, accept: ["definition", "the meaning"], hint: "A definition — from définir, to define. par définition = by definition." },
      ],
    },
    {
      id: "fr-u65l3",
      unit: 65,
      lesson: 3,
      title: "Values",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name abstract values: la liberté, la morale, la sagesse, la foi.",
      items: [
        { id: "fr-u65l3-laliberte", type: "vocab", front: "la liberté", reading: "laliberte", meaning: "freedom", example: { jp: "Chacun a le droit à la liberté.", en: "Everyone has the right to freedom." }, accept: ["freedom", "liberty"], hint: "Freedom, liberty — one of the three French values. From libre." },
        { id: "fr-u65l3-lamorale", type: "vocab", front: "la morale", reading: "lamorale", meaning: "morals", example: { jp: "La morale nous dit ce qui est bien ou mal.", en: "Morality tells us what is right or wrong." }, accept: ["morals", "morality", "the moral"], hint: "Morals, or the moral of a story. faire la morale à = to lecture someone." },
        { id: "fr-u65l3-lasagesse", type: "vocab", front: "la sagesse", reading: "lasagesse", meaning: "wisdom", example: { jp: "Avec l'âge vient souvent la sagesse.", en: "With age, wisdom often comes." }, accept: ["wisdom"], hint: "Wisdom — la sagesse populaire = folk wisdom. From sage, wise." },
        { id: "fr-u65l3-lame", type: "vocab", front: "l'âme", reading: "lame", meaning: "the soul", example: { jp: "Il a mis toute son âme dans ce travail.", en: "He put his whole soul into this work." }, accept: ["soul", "the spirit"], hint: "The soul — corps et âme = body and soul. Note the accent: âme." },
        { id: "fr-u65l3-lafoi", type: "vocab", front: "la foi", reading: "lafoi", meaning: "faith", example: { jp: "Elle garde la foi même dans les moments difficiles.", en: "She keeps her faith even in hard times." }, accept: ["faith", "the belief"], hint: "Faith — religious, or faith in someone. Don't confuse it with la fois (time) or le foie (liver)!" },
        { id: "fr-u65l3-lavertu", type: "vocab", front: "la vertu", reading: "lavertu", meaning: "the virtue", example: { jp: "Chaque personne a ses qualités et ses vertus.", en: "Every person has their qualities and virtues." }, accept: ["virtue", "the merit"], hint: "A virtue — a good moral quality. The opposite is un défaut, a flaw." },
      ],
    },
    {
      id: "fr-u65l4",
      unit: 65,
      lesson: 4,
      title: "The shape of an idea",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about ideas as structures: l'essentiel, l'exception, la contradiction, le paradoxe.",
      items: [
        { id: "fr-u65l4-lessentiel", type: "vocab", front: "l'essentiel", reading: "lessentiel", meaning: "the main thing", example: { jp: "L'essentiel, c'est la bonne santé.", en: "The main thing is good health." }, accept: ["the main thing", "the essential", "the gist"], hint: "The key point — l'essentiel, c'est… = the main thing is… Also 'the gist'." },
        { id: "fr-u65l4-lexception", type: "vocab", front: "l'exception", reading: "lexception", meaning: "the exception", example: { jp: "Tout le monde doit venir à l'heure, sans exception.", en: "Everyone has to come on time, without exception." }, accept: ["exception"], hint: "An exception — à l'exception de = except for. l'exception qui confirme la règle." },
        { id: "fr-u65l4-lepointcommun", type: "vocab", front: "le point commun", reading: "lepointcommun", meaning: "the common ground", example: { jp: "Ces deux frères n'ont aucun point commun.", en: "These two brothers have nothing in common." }, accept: ["common ground", "the shared feature", "the thing in common"], hint: "A shared feature — avoir un point commun avec = to have something in common with." },
        { id: "fr-u65l4-lacontradiction", type: "vocab", front: "la contradiction", reading: "lacontradiction", meaning: "the contradiction", example: { jp: "Il y a une contradiction entre ce qu'il dit et ce qu'il fait.", en: "There's a contradiction between what he says and what he does." }, drill: { jp: "La contradiction est très grande", en: "The contradiction is very great" }, accept: ["contradiction"], hint: "A contradiction — from contredire, to contradict. esprit de contradiction = contrariness." },
        { id: "fr-u65l4-lesysteme", type: "vocab", front: "le système", reading: "lesysteme", meaning: "the system", example: { jp: "Il faut changer tout le système.", en: "The whole system needs to change." }, accept: ["system", "the setup"], hint: "A system — le système scolaire = the school system. Also 'the establishment'." },
        { id: "fr-u65l4-leparadoxe", type: "vocab", front: "le paradoxe", reading: "leparadoxe", meaning: "the paradox", example: { jp: "C'est un paradoxe : plus on a, plus on veut.", en: "It's a paradox: the more you have, the more you want." }, accept: ["paradox"], hint: "A paradox — something that seems to contradict itself but may be true." },
      ],
    },
  ],
};
