// FR Unit 75 — Relationships and society (slot: relationships) — B1
// SCOPE BOUNDARY: block 1's Unit 64 is "emotion, finer shades", so this unit
// stays off feelings and takes RELATIONSHIPS as structures — the tie between two
// people, and the ties that make a society. A2 Unit 38 already owns the character
// adjectives and je m'entends bien avec, la confiance, le respect; A2 Unit 39 the
// civic nouns (la société, le citoyen, la loi). Every front checked against the
// live 1,287 first. Conventions: see fr/unit1.js.
export const FR_UNIT75 = {
  id: "fr-u75",
  lang: "fr",
  title: "Les relations",
  order: 75,
  stage: "b1",
  lessons: [
    {
      id: "fr-u75l1",
      unit: 75,
      lesson: 1,
      title: "Close ties",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a relationship over time: un couple, le mariage, s'entendre, se disputer.",
      items: [
        { id: "fr-u75l1-lecouple", type: "vocab", front: "le couple", reading: "lecouple", meaning: "the couple", example: { jp: "Ce couple est ensemble depuis vingt ans, et ils ne se disputent presque jamais.", en: "This couple has been together for twenty years, and they almost never argue." }, accept: ["couple", "the pair", "partnership"] },
        { id: "fr-u75l1-lemariage", type: "vocab", front: "le mariage", reading: "lemariage", meaning: "the marriage", example: { jp: "Le mariage a eu lieu en juin, si bien que toute la famille a pu venir.", en: "The wedding took place in June, so the whole family was able to come." }, accept: ["wedding", "the wedding", "matrimony"], hint: "One word for both the wedding day and the marriage that follows." },
        { id: "fr-u75l1-ledivorce", type: "vocab", front: "le divorce", reading: "ledivorce", meaning: "the divorce", example: { jp: "Après le divorce, ils sont restés amis pour leurs enfants.", en: "After the divorce, they stayed friends for their children's sake." }, accept: ["divorce", "the separation"] },
        { id: "fr-u75l1-lamitie", type: "vocab", front: "l'amitié", reading: "lamitie", meaning: "friendship", example: { jp: "Leur amitié a duré toute leur vie, même quand ils habitaient loin.", en: "Their friendship lasted their whole life, even when they lived far apart." }, accept: ["the friendship", "companionship"], hint: "From l'ami (Unit 3) — the bond rather than the person." },
        { id: "fr-u75l1-sentendre", type: "vocab", front: "s'entendre", reading: "sentendre", meaning: "to get along", example: { jp: "Ils s'entendent bien, pourtant ils ne sont pas du tout d'accord sur la politique.", en: "They get along well, yet they don't agree at all about politics." }, accept: ["to get on", "to hit it off"], hint: "The dictionary form of je m'entends bien avec (Unit 38)." },
        { id: "fr-u75l1-sedisputer", type: "vocab", front: "se disputer", reading: "sedisputer", meaning: "to argue", example: { jp: "Ils se disputent souvent, mais ça ne dure jamais longtemps.", en: "They argue often, but it never lasts long." }, accept: ["to quarrel", "to fight", "to row"] },
      ],
    },
    {
      id: "fr-u75l2",
      unit: 75,
      lesson: 2,
      title: "Ties that hold or break",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the bond itself: un lien, un engagement, une rupture, une génération.",
      items: [
        { id: "fr-u75l2-lelien", type: "vocab", front: "le lien", reading: "lelien", meaning: "the bond", example: { jp: "Le lien entre les deux frères est très fort, malgré la distance.", en: "The bond between the two brothers is very strong, despite the distance." }, accept: ["link", "the tie", "connection"], hint: "Also a link on a website — cliquez sur le lien." },
        { id: "fr-u75l2-lengagement", type: "vocab", front: "l'engagement", reading: "lengagement", meaning: "the commitment", example: { jp: "Le mariage est un engagement, donc il faut y réfléchir sérieusement.", en: "Marriage is a commitment, so it needs serious thought." }, accept: ["commitment", "the pledge", "involvement"] },
        { id: "fr-u75l2-larupture", type: "vocab", front: "la rupture", reading: "larupture", meaning: "the break-up", example: { jp: "Après la rupture, elle a déménagé dans une autre région.", en: "After the break-up, she moved to another region." }, accept: ["break-up", "the split", "breach"] },
        { id: "fr-u75l2-rompre", type: "vocab", front: "rompre", reading: "rompre", meaning: "to break off", example: { jp: "Ils ont rompu l'année dernière, et personne n'a compris pourquoi.", en: "They broke up last year, and nobody understood why." }, accept: ["to break up", "to end it", "to sever"] },
        { id: "fr-u75l2-lageneration", type: "vocab", front: "la génération", reading: "lageneration", meaning: "the generation", example: { jp: "Sa génération a grandi avec internet, tandis que la mienne a découvert ça plus tard.", en: "His generation grew up with the internet, whereas mine discovered it later." }, accept: ["generation", "the age group"] },
        { id: "fr-u75l2-levoisinage", type: "vocab", front: "le voisinage", reading: "levoisinage", meaning: "the neighbourhood", example: { jp: "Tout le voisinage s'entend bien, ce qui est plutôt rare en ville.", en: "The whole neighbourhood gets on well, which is fairly rare in a city." }, accept: ["neighborhood", "the neighbours", "vicinity"], hint: "The PEOPLE around you, collectively; le quartier (Unit 39) is the place." },
      ],
    },
    {
      id: "fr-u75l3",
      unit: 75,
      lesson: 3,
      title: "Belonging",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a group and your place in it: la solidarité, l'appartenance, le rôle, le statut.",
      items: [
        { id: "fr-u75l3-lasolidarite", type: "vocab", front: "la solidarité", reading: "lasolidarite", meaning: "solidarity", example: { jp: "Après l'inondation, la solidarité entre les habitants a été impressionnante.", en: "After the flood, the solidarity between residents was impressive." }, accept: ["the solidarity", "mutual support"] },
        { id: "fr-u75l3-lappartenance", type: "vocab", front: "l'appartenance", reading: "lappartenance", meaning: "belonging", example: { jp: "Le sentiment d'appartenance est important, surtout quand on arrive dans un nouveau pays.", en: "A sense of belonging is important, especially when you arrive in a new country." }, accept: ["the belonging", "membership"] },
        { id: "fr-u75l3-lintegration", type: "vocab", front: "l'intégration", reading: "lintegration", meaning: "integration", example: { jp: "L'intégration prend du temps, et la langue joue un rôle énorme.", en: "Integration takes time, and language plays an enormous role." }, accept: ["the integration", "inclusion"] },
        { id: "fr-u75l3-ladiversite", type: "vocab", front: "la diversité", reading: "ladiversite", meaning: "diversity", example: { jp: "La diversité de cette ville se voit dans ses restaurants.", en: "The diversity of this city can be seen in its restaurants." }, accept: ["the diversity", "variety"] },
        { id: "fr-u75l3-lerole", type: "vocab", front: "le rôle", reading: "lerole", meaning: "the role", example: { jp: "Chacun a un rôle dans la famille, même si personne ne l'a jamais dit à voix haute.", en: "Everyone has a role in the family, even if nobody ever said it out loud." }, accept: ["role", "the part", "function"], hint: "Also an actor's part — jouer un rôle." },
        { id: "fr-u75l3-lestatut", type: "vocab", front: "le statut", reading: "lestatut", meaning: "the status", example: { jp: "Son statut a changé quand elle est devenue directrice.", en: "Her status changed when she became a director." }, accept: ["status", "the standing", "position"] },
      ],
    },
    {
      id: "fr-u75l4",
      unit: 75,
      lesson: 4,
      title: "When society fails people",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name social problems precisely: l'inégalité, la discrimination, un préjugé, exclure.",
      items: [
        { id: "fr-u75l4-linegalite", type: "vocab", front: "l'inégalité", reading: "linegalite", meaning: "inequality", example: { jp: "L'inégalité entre les hommes et les femmes existe encore au travail.", en: "Inequality between men and women still exists at work." }, accept: ["the inequality", "disparity"] },
        { id: "fr-u75l4-ladiscrimination", type: "vocab", front: "la discrimination", reading: "ladiscrimination", meaning: "discrimination", example: { jp: "La discrimination est interdite par la loi, pourtant elle continue.", en: "Discrimination is forbidden by law, yet it continues." }, accept: ["the discrimination", "prejudice"] },
        { id: "fr-u75l4-leprejuge", type: "vocab", front: "le préjugé", reading: "leprejuge", meaning: "the prejudice", example: { jp: "Il faut du temps pour changer les préjugés, parce qu'ils commencent très tôt.", en: "It takes time to change prejudices, because they start very early." }, accept: ["prejudice", "the bias", "preconception"] },
        { id: "fr-u75l4-exclure", type: "vocab", front: "exclure", reading: "exclure", meaning: "to exclude", example: { jp: "Personne ne veut exclure les nouveaux, mais ça arrive quand même.", en: "Nobody wants to exclude newcomers, but it happens all the same." }, accept: ["to leave out", "to shut out", "to expel"] },
        { id: "fr-u75l4-tolerant", type: "vocab", front: "tolérant", reading: "tolerant", meaning: "tolerant", example: { jp: "Cette ville est tolérante, si bien que beaucoup de gens viennent y vivre.", en: "This city is tolerant, so a lot of people come to live here." }, accept: ["open-minded", "broad-minded"] },
        { id: "fr-u75l4-leconflit", type: "vocab", front: "le conflit", reading: "leconflit", meaning: "the conflict", example: { jp: "Le conflit entre les deux familles dure depuis des années.", en: "The conflict between the two families has lasted for years." }, accept: ["conflict", "the dispute", "clash"] },
      ],
    },
  ],
};
