// FR Unit 117 — La voix institutionnelle et publique (slot: register-4) — B2
// B1 (u79-80) taught interpersonal politeness formulas (veuillez, je vous prie,
// je me permets de) and A2/B1 taught the everyday civic words (la loi, le
// gouvernement, le règlement, la presse). This B2 unit goes one level above: the
// IMPERSONAL register of officialdom — the voice of public notices, administration,
// decrees and journalism. Distinct from u116 (interpersonal deference) and u114
// (formal connectors): u117 is the VOCABULARY and VOICE of institutions themselves.
// Every front checked against the 2,168 live fr fronts + block1 (u95-107); no collisions.
export const FR_UNIT117 = {
  id: "fr-u117",
  lang: "fr",
  title: "La voix institutionnelle et publique",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "fr-u117l1",
      unit: 117,
      lesson: 1,
      title: "Official notice",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Understand who an official public notice addresses and what it requires of them.",
      items: [
        { id: "fr-u117l1-presente", type: "vocab", front: "par la présente", reading: "parlapresente", meaning: "hereby, by this letter", example: { jp: "Par la présente, le responsable annonce que le bureau sera fermé pendant les vacances d'été.", en: "The manager hereby announces that the office will be closed during the summer holidays." }, accept: ["hereby", "by this letter", "by the present letter"], hint: "Opens an official letter/notice: 'par la présente (lettre)' = by this present document. Very formal written register." },
        { id: "fr-u117l1-connaissance", type: "vocab", front: "il est porté à la connaissance de", reading: "ilestportealaconnaissancede", meaning: "it is brought to the attention of", example: { jp: "Il est porté à la connaissance du public que la bibliothèque sera fermée lundi.", en: "It is brought to the attention of the public that the library will be closed on Monday." }, accept: ["it is brought to the attention of", "notice is hereby given to", "it is hereby notified to", "the public is informed that"], hint: "Frozen impersonal notice formula. The everyday equivalent is just 'on vous informe que' — this is the officialese version." },
        { id: "fr-u117l1-usagers", type: "vocab", front: "les usagers", reading: "lesusagers", meaning: "users, the public (of a service)", example: { jp: "Les usagers doivent garder leur billet jusqu'à la fin du voyage, car on peut le demander à tout moment.", en: "Users must keep their ticket until the end of the journey, since it may be asked for at any time." }, accept: ["the users", "users", "service users", "the public"], hint: "Administrative word for the people who use a public service — not 'clients'. Standard on signs and notices." },
        { id: "fr-u117l1-interesses", type: "vocab", front: "les intéressés", reading: "lesinteresses", meaning: "those concerned, the interested parties", example: { jp: "Les intéressés recevront une réponse par lettre, à condition qu'ils répondent avant la date limite.", en: "Those concerned will receive a reply by letter, provided that they respond before the deadline." }, accept: ["those concerned", "the interested parties", "the parties concerned", "interested parties"], hint: "Admin term for the specific people a decision applies to. Substantivized adjective — always plural here." },
        { id: "fr-u117l1-presentreglement", type: "vocab", front: "le présent règlement", reading: "lepresentreglement", meaning: "this regulation, the present rules (herein)", example: { jp: "Le présent règlement définit les règles du service, et chacun doit s'y conformer.", en: "The present regulation defines the rules of the service, and everyone must comply with it." }, accept: ["this regulation", "the present regulation", "these regulations", "this set of rules"], hint: "'le présent + noun' = 'this X, herein' — legal/admin determiner. From le règlement (Unit 68); note 'présent' before the noun means 'this very one'." },
        { id: "fr-u117l1-pouvoirspublics", type: "vocab", front: "les pouvoirs publics", reading: "lespouvoirspublics", meaning: "the public authorities, the government (as actor)", example: { jp: "Les pouvoirs publics ont décidé d'augmenter la sécurité dans les gares, malgré le coût.", en: "The public authorities have decided to increase security in stations, despite the cost." }, accept: ["the public authorities", "public authorities", "the authorities"], hint: "Fixed plural — the collective 'State/government' seen as the body that acts. From le pouvoir (Unit 62)." },
      ],
    },
    {
      id: "fr-u117l2",
      unit: 117,
      lesson: 2,
      title: "What an institution does",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State what an institution has formally decided, using the precise official verb.",
      items: [
        { id: "fr-u117l2-statuer", type: "vocab", front: "statuer", reading: "statuer", meaning: "to rule, to hand down a formal decision", example: { jp: "La justice devra statuer sur ce cas, car les deux parties attendent une décision depuis des mois.", en: "The court will have to rule on this case, because both parties have been awaiting a decision for months." }, accept: ["to rule", "to give a ruling", "to rule on", "to decide officially"], hint: "An authority handing down a binding decision. Takes SUR: statuer sur une affaire. Heavier than 'décider'." },
        { id: "fr-u117l2-enteriner", type: "vocab", front: "entériner", reading: "enteriner", meaning: "to ratify, to formally confirm/endorse", example: { jp: "Le gouvernement a fini par entériner la réforme, après de longs débats.", en: "The government ended up ratifying the reform, after long debates." }, accept: ["to ratify", "to endorse", "to formally approve", "to confirm"], hint: "To give official, final approval to something already agreed — makes it definitive. Not 'to decide' but 'to seal'." },
        { id: "fr-u117l2-edicter", type: "vocab", front: "édicter", reading: "edicter", meaning: "to enact, to issue (a rule)", example: { jp: "Le gouvernement peut édicter de nouvelles règles, si bien que chaque entreprise devra changer ses méthodes.", en: "The government can issue new rules, so every company will have to change its methods." }, accept: ["to enact", "to issue", "to lay down", "to decree", "to enact into law"], hint: "To lay down rules by authority — édicter une règle, une loi. From dicter: to 'dictate' an official rule." },
        { id: "fr-u117l2-notifier", type: "vocab", front: "notifier", reading: "notifier", meaning: "to notify (officially, in writing)", example: { jp: "L'administration doit notifier sa décision par lettre, afin que l'usager puisse la contester à temps.", en: "The administration must officially notify its decision by letter, so that the user can contest it in time." }, accept: ["to notify", "to give formal notice", "to notify officially"], hint: "Formal written notice of a decision — carries legal weight (starts appeal deadlines). Much stronger than 'dire'." },
        { id: "fr-u117l2-acter", type: "vocab", front: "acter", reading: "acter", meaning: "to formally record, to put on record", example: { jp: "Les ministres ont acté leur décision, et l'ont ensuite annoncée à la presse.", en: "The ministers formally recorded their decision, and then announced it to the press." }, accept: ["to formally record", "to note officially", "to put on record", "to take formal note of"], hint: "Now-standard admin/business usage: to make a decision official 'on the record'. Related to un acte (a formal act/deed)." },
        { id: "fr-u117l2-mandater", type: "vocab", front: "mandater", reading: "mandater", meaning: "to mandate, to appoint/commission (to act)", example: { jp: "Le gouvernement a mandaté un expert pour étudier le problème, car la situation restait difficile.", en: "The government commissioned an expert to study the problem, because the situation remained difficult." }, accept: ["to mandate", "to commission", "to appoint", "to give a mandate to"], hint: "To officially empower someone to act on your behalf: mandater qqn POUR faire qch." },
      ],
    },
    {
      id: "fr-u117l3",
      unit: 117,
      lesson: 3,
      title: "Regulatory reference",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Point to the rule, law, or purpose that an official measure is based on.",
      items: [
        { id: "fr-u117l3-conformement", type: "vocab", front: "conformément à", reading: "conformementa", meaning: "in accordance with, in compliance with", example: { jp: "Conformément au règlement, les usagers doivent garder le silence, afin que chacun puisse travailler.", en: "In accordance with the rules, users must keep quiet, so that everyone can work." }, accept: ["in accordance with", "in compliance with", "in line with", "as per"], hint: "Formal 'following the rule'. Takes À: conformément À la loi. Cf. se conformer (Unit 68)." },
        { id: "fr-u117l3-application", type: "vocab", front: "en application de", reading: "enapplicationde", meaning: "pursuant to, under (a law/decree)", example: { jp: "En application de la nouvelle loi, les magasins doivent fermer plus tôt, ce que beaucoup de clients regrettent.", en: "Pursuant to the new law, shops must close earlier, which many customers regret." }, accept: ["pursuant to", "under", "in application of", "by virtue of"], hint: "'Carrying out' a specific law or decree — heavier and more legal than 'selon'. From l'application (Unit 40)." },
        { id: "fr-u117l3-auxfins", type: "vocab", front: "aux fins de", reading: "auxfinsde", meaning: "for the purpose(s) of", example: { jp: "Aux fins de cette enquête, chaque témoin devra répondre à plusieurs questions, sans exception.", en: "For the purposes of this investigation, each witness will have to answer several questions, without exception." }, accept: ["for the purpose of", "for the purposes of", "with a view to"], hint: "Very formal 'in order to'. Takes DE + noun or infinitive. From la fin (Unit 47), here in the sense 'end/goal'." },
        { id: "fr-u117l3-rappele", type: "vocab", front: "il est rappelé que", reading: "ilestrappeleque", meaning: "it is recalled that, a reminder that", example: { jp: "Il est rappelé que le silence est obligatoire dans la bibliothèque, surtout pendant les examens.", en: "It is recalled that silence is compulsory in the library, especially during exams." }, accept: ["it is recalled that", "please note that", "a reminder that", "it is hereby recalled that"], hint: "Impersonal notice reminder — the officialese 'just a reminder'. From rappeler (Unit 70), fixed in the passive." },
        { id: "fr-u117l3-objet", type: "vocab", front: "faire l'objet de", reading: "fairelobjetde", meaning: "to be the subject of, to undergo (formal)", example: { jp: "Le règlement va faire l'objet d'une réforme, car il est trop ancien.", en: "The regulation is going to undergo a reform, because it is too old." }, accept: ["to be the subject of", "to undergo", "to be subject to"], hint: "Admin idiom: X fait l'objet DE Y = Y is carried out on X. The everyday version is just 'on va réformer le règlement'. From l'objet (Unit 52)." },
        { id: "fr-u117l3-circulaire", type: "vocab", front: "une circulaire", reading: "unecirculaire", meaning: "a circular, an administrative directive", example: { jp: "Une circulaire présente les règles à suivre, si bien que chaque service applique la même méthode.", en: "A circular sets out the rules to follow, so that each department applies the same method." }, accept: ["a circular", "an administrative circular", "a directive", "a memo", "an official circular"], hint: "An internal administrative note telling services how to apply a rule uniformly. Feminine: une circulaire." },
      ],
    },
    {
      id: "fr-u117l4",
      unit: 117,
      lesson: 4,
      title: "Public and press voice",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow how institutions speak through the press and how citizens can formally respond.",
      items: [
        { id: "fr-u117l4-communique", type: "vocab", front: "un communiqué", reading: "uncommunique", meaning: "a press release, an official statement", example: { jp: "Dans un communiqué, le gouvernement a annoncé de nouvelles règles, sans donner de détails.", en: "In a press release, the government announced new rules, without giving any details." }, accept: ["a press release", "an official statement", "a communiqué", "a statement"], hint: "The official written statement a body issues to the press. Masculine: un communiqué." },
        { id: "fr-u117l4-directive", type: "vocab", front: "une directive", reading: "unedirective", meaning: "a directive, an official instruction", example: { jp: "La nouvelle directive oblige les entreprises à trier leurs déchets, ce qui coûte cher à certaines.", en: "The new directive requires companies to sort their waste, which is expensive for some of them." }, accept: ["a directive", "an official instruction", "a directive order"], hint: "A binding instruction from an authority (often EU/administrative). Feminine: une directive." },
        { id: "fr-u117l4-undecret", type: "vocab", front: "un décret", reading: "undecret", meaning: "a decree", example: { jp: "Le gouvernement a pris un nouveau décret, mais beaucoup de citoyens le trouvent difficile à appliquer.", en: "The government issued a new decree, but many citizens find it hard to apply." }, accept: ["a decree", "decree", "an executive order", "an order"], hint: "A binding act issued by the executive, ranking below a loi. On dit prendre or publier un décret. (un porte-parole is taught in Unit 111.)" },
        { id: "fr-u117l4-instance", type: "vocab", front: "une instance", reading: "uneinstance", meaning: "an official body, an authority", example: { jp: "Cette instance internationale surveille le respect des règles, et présente ses résultats chaque année.", en: "This international body monitors compliance with the rules, and presents its findings every year." }, accept: ["a body", "an authority", "an official body", "a governing body"], hint: "Formal word for an official decision-making body; often plural: les instances dirigeantes. Not 'an instance/example'." },
        { id: "fr-u117l4-saisir", type: "vocab", front: "saisir", reading: "saisir", meaning: "to refer a matter to, to bring before (an authority)", example: { jp: "Les habitants peuvent saisir la justice, s'ils jugent la décision trop dure.", en: "Residents can bring the matter before the courts, if they consider the decision too harsh." }, accept: ["to refer to", "to bring before", "to refer a matter to", "to bring a case before"], hint: "Institutional sense: saisir un tribunal / une autorité = formally bring a matter before it. NOT 'to grab' here." },
        { id: "fr-u117l4-rendrepublic", type: "vocab", front: "rendre public", reading: "rendrepublic", meaning: "to make public, to disclose", example: { jp: "Le ministre a décidé de rendre publics les résultats de l'enquête, malgré les critiques.", en: "The minister decided to make the findings of the investigation public, despite the criticism." }, accept: ["to make public", "to disclose", "to release publicly", "to make something public"], hint: "rendre + adjective = 'to make X (adj)'. Agreement with the object: rendre publicS les résultats (masc. pl.)." },
      ],
    },
  ],
};
