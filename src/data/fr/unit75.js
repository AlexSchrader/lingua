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
        { id: "fr-u75l1-lecouple", type: "vocab", front: "le couple", reading: "lecouple", meaning: "the couple", example: { jp: "Ce couple est ensemble depuis vingt ans, et ils ne se disputent presque jamais.", en: "This couple has been together for twenty years, and they almost never argue." }, drill: { jp: "Le couple est ensemble depuis vingt ans", en: "The couple has been together for twenty years" }, accept: ["couple", "the pair", "partnership"], hint: "A couple as two people together — un couple marié. Note it stays masculine whoever the two partners are." },
        { id: "fr-u75l1-lemariage", type: "vocab", front: "le mariage", reading: "lemariage", meaning: "the marriage", example: { jp: "Le mariage était en juin, si bien que toute la famille était là.", en: "The wedding was in June, so the whole family was there." }, drill: { jp: "Le mariage a lieu en septembre", en: "The wedding takes place in September" }, accept: ["wedding", "the wedding", "matrimony"], hint: "One word for both the wedding day and the marriage that follows." },
        { id: "fr-u75l1-ledivorce", type: "vocab", front: "le divorce", reading: "ledivorce", meaning: "the divorce", example: { jp: "Après le divorce, ils sont restés amis pour leurs enfants.", en: "After the divorce, they stayed friends for their children's sake." }, drill: { jp: "Le divorce a été très rapide", en: "The divorce was very quick" }, accept: ["divorce", "the separation", "a divorce", "the legal end of a marriage"], hint: "Divorce — demander le divorce is to file for it. The verb is divorcer, and it takes avoir in the past." },
        { id: "fr-u75l1-lamitie", type: "vocab", front: "l'amitié", reading: "lamitie", meaning: "friendship", example: { jp: "Leur amitié a duré toute leur vie, même quand ils habitaient loin.", en: "Their friendship lasted their whole life, even when they lived far apart." }, drill: { jp: "L'amitié a duré toute leur vie", en: "Their friendship lasted their whole life" }, accept: ["the friendship", "companionship", "a friendship", "the bond between friends"], hint: "From l'ami (Unit 3) — the bond rather than the person." },
        { id: "fr-u75l1-sentendre", type: "vocab", front: "s'entendre", reading: "sentendre", meaning: "to get along", example: { jp: "Ils s'entendent bien, pourtant ils ne sont pas du tout d'accord sur la politique.", en: "They get along well, yet they don't agree at all about politics." }, drill: { jp: "Ils vont bien s'entendre", en: "They're going to get along well" }, accept: ["to get on", "to hit it off", "to get along well"], hint: "The dictionary form of je m'entends bien avec (Unit 38)." },
        { id: "fr-u75l1-sedisputer", type: "vocab", front: "se disputer", reading: "sedisputer", meaning: "to argue", example: { jp: "Ils se disputent souvent, mais ça ne dure jamais longtemps.", en: "They argue often, but it never lasts long." }, drill: { jp: "Ils ne vont pas se disputer", en: "They aren't going to argue" }, accept: ["to quarrel", "to fight", "to row"], hint: "To argue or row — se disputer avec quelqu'un. Without the se, disputer un match means to play a match." },
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
        { id: "fr-u75l2-lelien", type: "vocab", front: "le lien", reading: "lelien", meaning: "the bond", example: { jp: "Le lien entre les deux frères est très fort, même s'ils habitent loin.", en: "The bond between the two brothers is very strong, even though they live far apart." }, drill: { jp: "Le lien est très fort", en: "The bond is very strong" }, accept: ["link", "the tie", "connection"], hint: "Also a link on a website — cliquez sur le lien." },
        { id: "fr-u75l2-lengagement", type: "vocab", front: "l'engagement", reading: "lengagement", meaning: "the commitment", example: { jp: "Le mariage est un engagement, donc il faut y penser sérieusement.", en: "Marriage is a commitment, so it needs serious thought." }, drill: { jp: "L'engagement est vraiment sérieux", en: "The commitment is really serious" }, accept: ["commitment", "the pledge", "involvement"], hint: "A commitment or pledge, and also political involvement — prendre un engagement. Masculine, hidden by l'; from s'engager." },
        { id: "fr-u75l2-larupture", type: "vocab", front: "la rupture", reading: "larupture", meaning: "the break-up", example: { jp: "Après la rupture, elle a déménagé dans une autre région.", en: "After the break-up, she moved to another region." }, drill: { jp: "La rupture a été difficile", en: "The break-up was hard" }, accept: ["break-up", "the split", "breach"], hint: "A break-up, and a breach or rupture generally — from rompre. Une rupture de contrat is a breach of contract." },
        { id: "fr-u75l2-rompre", type: "vocab", front: "rompre", reading: "rompre", meaning: "to break off", example: { jp: "Ils ont rompu l'année dernière, et personne n'a compris pourquoi.", en: "They broke up last year, and nobody understood why." }, drill: { jp: "Ils vont rompre cette année", en: "They are going to break up this year" }, accept: ["to break up", "to end it", "to sever"], hint: "To break off — rompre avec quelqu'un is to break up with someone. More formal and more final than casser, which speech prefers." },
        { id: "fr-u75l2-lageneration", type: "vocab", front: "la génération", reading: "lageneration", meaning: "the generation", example: { jp: "Sa génération a grandi avec internet, tandis que mes parents ont découvert ça plus tard.", en: "His generation grew up with the internet, whereas my parents discovered it later." }, drill: { jp: "La génération de mon père était différente", en: "My father's generation was different" }, accept: ["generation", "the age group", "a generation", "everyone born around one time"], hint: "A generation — la génération de mes parents. Feminine, like every -tion noun." },
        { id: "fr-u75l2-levoisinage", type: "vocab", front: "le voisinage", reading: "levoisinage", meaning: "the neighbourhood (the neighbours around you)", example: { jp: "Tout le voisinage s'entend bien, ce qui n'est pas toujours le cas en ville.", en: "The whole neighbourhood gets on well, which isn't always the case in a city." }, drill: { jp: "Le voisinage est très calme", en: "The neighbourhood is very quiet" }, accept: ["neighborhood", "the neighbours", "vicinity"], hint: "The PEOPLE around you, collectively; le quartier (Unit 39) is the place." },
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
        { id: "fr-u75l3-lasolidarite", type: "vocab", front: "la solidarité", reading: "lasolidarite", meaning: "solidarity", example: { jp: "Après l'inondation, la solidarité entre les habitants a été très forte.", en: "After the flood, the solidarity between residents was very strong." }, drill: { jp: "La solidarité compte beaucoup ici", en: "Solidarity counts for a lot here" }, accept: ["the solidarity", "mutual support", "standing together"], hint: "Standing together with others — a central word in French public life. Feminine, like every -té noun." },
        { id: "fr-u75l3-lappartenance", type: "vocab", front: "l'appartenance", reading: "lappartenance", meaning: "belonging", example: { jp: "L'appartenance à un groupe est importante, surtout quand on arrive dans un nouveau pays.", en: "Belonging to a group is important, especially when you arrive in a new country." }, drill: { jp: "L'appartenance au groupe reste forte", en: "Belonging to the group stays strong" }, accept: ["the belonging", "membership", "sense of belonging"], hint: "The sense of belonging to a group, from appartenir, to belong. Feminine, hidden by l': une appartenance." },
        { id: "fr-u75l3-lintegration", type: "vocab", front: "l'intégration", reading: "lintegration", meaning: "integration", example: { jp: "L'intégration prend du temps, et la langue joue un rôle très important.", en: "Integration takes time, and language plays a very important role." }, drill: { jp: "L'intégration prend beaucoup de temps", en: "Integration takes a lot of time" }, accept: ["the integration", "inclusion", "fitting in"], hint: "Integration into a society or a group, from intégrer. Feminine, like every -tion noun, and in France a loaded political word." },
        { id: "fr-u75l3-ladiversite", type: "vocab", front: "la diversité", reading: "ladiversite", meaning: "diversity", example: { jp: "La diversité de cette ville se voit dans ses restaurants.", en: "The diversity of this city can be seen in its restaurants." }, drill: { jp: "La diversité fait la richesse du pays", en: "Diversity makes the country's wealth" }, accept: ["the diversity", "variety", "range"], hint: "Diversity, of people or of anything else — la diversité culturelle. Feminine, like every -té noun." },
        { id: "fr-u75l3-lerole", type: "vocab", front: "le rôle", reading: "lerole", meaning: "the role", example: { jp: "Chacun a un rôle dans la famille, même si personne ne l'a jamais dit.", en: "Everyone has a role in the family, even if nobody ever said it." }, drill: { jp: "Le rôle est très important", en: "The role is very important" }, accept: ["role", "the part", "function"], hint: "Also an actor's part — jouer un rôle." },
        { id: "fr-u75l3-lestatut", type: "vocab", front: "le statut", reading: "lestatut", meaning: "the status", example: { jp: "Son statut a changé quand elle est devenue directrice.", en: "Her status changed when she became a director." }, drill: { jp: "Le statut de cette personne a changé", en: "This person's status has changed" }, accept: ["status", "the standing", "position"], hint: "Status or standing, and also a legal statute — the final t is silent. Masculine: le statut." },
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
        { id: "fr-u75l4-linegalite", type: "vocab", front: "l'inégalité", reading: "linegalite", meaning: "inequality", example: { jp: "L'inégalité entre les hommes et les femmes est encore très forte au travail.", en: "Inequality between men and women is still very strong at work." }, drill: { jp: "L'inégalité reste très forte", en: "Inequality stays very strong" }, accept: ["the inequality", "disparity", "unfairness"], hint: "Inequality: égal with in- in front. Feminine, hidden by l', and usually plural: les inégalités sociales." },
        { id: "fr-u75l4-ladiscrimination", type: "vocab", front: "la discrimination", reading: "ladiscrimination", meaning: "discrimination", example: { jp: "La discrimination est interdite par la loi, pourtant elle continue.", en: "Discrimination is forbidden by law, yet it continues." }, drill: { jp: "La discrimination est interdite ici", en: "Discrimination is banned here" }, accept: ["the discrimination", "unfair treatment", "bias"], hint: "Discrimination in the unfair sense, from discriminer. Feminine, like every -tion noun." },
        { id: "fr-u75l4-leprejuge", type: "vocab", front: "le préjugé", reading: "leprejuge", meaning: "the prejudice", example: { jp: "Il faut du temps pour changer les préjugés, parce qu'ils commencent très tôt.", en: "It takes time to change prejudices, because they start very early." }, drill: { jp: "Le préjugé vient souvent de la peur", en: "Prejudice often comes from fear" }, accept: ["prejudice", "the bias", "preconception"], hint: "A prejudice — literally pre-judged, from préjuger. Avoir des préjugés contre is to be prejudiced against." },
        { id: "fr-u75l4-exclure", type: "vocab", front: "exclure", reading: "exclure", meaning: "to exclude", example: { jp: "Personne ne veut exclure les nouveaux, mais ça arrive souvent.", en: "Nobody wants to exclude newcomers, but it happens often." }, drill: { jp: "Personne ne veut exclure les autres", en: "Nobody wants to exclude the others" }, accept: ["to leave out", "to shut out", "to expel"], hint: "To exclude or shut out, the opposite of inclure. The past participle is exclu, and l'exclusion is the noun." },
        { id: "fr-u75l4-tolerant", type: "vocab", front: "tolérant", reading: "tolerant", meaning: "tolerant", example: { jp: "Cette ville est tolérante, si bien que beaucoup de personnes viennent y habiter.", en: "This city is tolerant, so a lot of people come to live here." }, drill: { jp: "Mon frère est très tolérant", en: "My brother is very tolerant" }, accept: ["open-minded", "broad-minded", "accepting"], hint: "Tolerant or open-minded; the feminine tolérante sounds the final t. La tolérance is the noun." },
        { id: "fr-u75l4-leconflit", type: "vocab", front: "le conflit", reading: "leconflit", meaning: "the conflict", example: { jp: "Le conflit entre les deux familles dure depuis des années.", en: "The conflict between the two families has lasted for years." }, drill: { jp: "Le conflit dure depuis des années", en: "The conflict has lasted for years" }, accept: ["conflict", "the dispute", "clash"], hint: "A conflict or dispute, from the smallest row up to a war — the final t is silent. Un conflit d'intérêts is a conflict of interest." },
      ],
    },
  ],
};
