// FR Unit 114 — Les structures de l'écrit formel (slot: grammar-10) — B2
// B1 (u76-77) taught the everyday impersonals and the passive: il s'agit de,
// il reste, il manque, il paraît que, il suffit de, a été vendu, faire faire,
// se faire. This B2 unit goes one register above: the impersonal, formal and
// legal-administrative connectors of educated WRITTEN French — the voice of an
// op-ed, a statute, an official letter. Grammar-as-vocab: each example.jp
// carries the structure. None of the B1 impersonals is reused.
// Every front checked against the 2,168 live fr fronts + block1 (u95-107).
// Collision resolved: the planned L3 front "d'où" is already live (u59), so it
// was replaced with "dès lors" (same inferential slot; free in both lists).
export const FR_UNIT114 = {
  id: "fr-u114",
  lang: "fr",
  title: "Les structures de l'écrit formel",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "fr-u114l1",
      unit: 114,
      lesson: 1,
      title: "Impersonal statement",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State a rule or an observation in the impersonal, formal register of an official text.",
      items: [
        { id: "fr-u114l1-convient", type: "vocab", front: "il convient de", reading: "ilconvientde", meaning: "it is appropriate to / one should", example: { jp: "Il convient de rappeler que la loi s'applique à tous, sans exception.", en: "It bears recalling that the law applies to everyone, without exception." }, accept: ["it is appropriate to", "one should", "it is fitting to", "it is advisable to"], hint: "Formal 'one should / it is fitting to' + infinitive. The written, deferent way to say il faut — polite in a letter or a report, never in speech." },
        { id: "fr-u114l1-importe", type: "vocab", front: "il importe de", reading: "ilimportede", meaning: "it is important to / it matters to", example: { jp: "Il importe de bien choisir ses mots, car une phrase mal comprise peut tout changer.", en: "It matters to choose one's words carefully, for a misunderstood sentence can change everything." }, accept: ["it matters to", "it is important to", "it is essential to"], hint: "Impersonal verb, + de + infinitive. From important (Unit 16), but here the elevated 'it is important to' of formal prose — grander than c'est important." },
        { id: "fr-u114l1-forceconstater", type: "vocab", front: "force est de constater", reading: "forceestdeconstater", meaning: "one cannot but note / it must be acknowledged", example: { jp: "Force est de constater que la situation ne s'améliore pas, malgré tous nos efforts.", en: "One cannot but note that the situation is not improving, despite all our efforts." }, accept: ["one cannot but note", "it must be acknowledged", "one has to admit", "one is forced to note"], hint: "A fixed formal set-phrase: 'one is forced to note'. Builds on le constat (Unit 96 / constater) — used to concede a hard truth in an argument." },
        { id: "fr-u114l1-envade", type: "vocab", front: "il en va de", reading: "ilenvade", meaning: "the same holds for / it is the same with", example: { jp: "La confiance se perd vite, et il en va de même pour le respect.", en: "Trust is lost quickly, and the same holds for respect." }, accept: ["the same goes for", "the same holds for", "it is the same with"], hint: "Almost always il en va de même pour X = 'the same is true of X'. Formal way to extend a point to a second case." },
        { id: "fr-u114l1-ressort", type: "vocab", front: "il ressort que", reading: "ilressortque", meaning: "it emerges that / it follows that", example: { jp: "De cette enquête, il ressort que la plupart des habitants soutiennent la réforme.", en: "From this survey it emerges that most residents support the reform." }, accept: ["it emerges that", "it follows that", "it appears that", "it is clear that"], hint: "'It emerges (from analysis) that' — used to state a finding. Often De X, il ressort que… Takes the indicative." },
        { id: "fr-u114l1-savere", type: "vocab", front: "il s'avère que", reading: "ilsavereque", meaning: "it turns out that", example: { jp: "On croyait le problème réglé, mais il s'avère que rien n'a changé.", en: "We thought the problem was settled, but it turns out that nothing has changed." }, accept: ["it turns out that", "it proves to be that", "it emerges that"], hint: "The impersonal verb s'avérer (cf. avéré, Unit 96). Introduces a fact that contradicts what was assumed; + indicative." },
      ],
    },
    {
      id: "fr-u114l2",
      unit: 114,
      lesson: 2,
      title: "Formal connectors",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Cite a law, contract or authority the way an official document does.",
      items: [
        { id: "fr-u114l2-envertu", type: "vocab", front: "en vertu de", reading: "envertude", meaning: "by virtue of / under (a law)", example: { jp: "En vertu de la loi, tout citoyen a le droit de voter.", en: "By virtue of the law, every citizen has the right to vote." }, accept: ["by virtue of", "under", "pursuant to", "in accordance with"], hint: "Legal 'by virtue of / under'. From la vertu (Unit 65), here grammaticalized — you invoke a law or a rule as the ground for a right or duty." },
        { id: "fr-u114l2-autitre", type: "vocab", front: "au titre de", reading: "autitrede", meaning: "by way of / under (a heading)", example: { jp: "Au titre de la solidarité, l'État aide les familles les plus pauvres.", en: "By way of solidarity, the State helps the poorest families." }, accept: ["by way of", "under", "as", "in respect of"], hint: "Administrative 'by way of / under the heading of'. From le titre (Unit 57). Names the basis on which something is granted or claimed." },
        { id: "fr-u114l2-auxtermes", type: "vocab", front: "aux termes de", reading: "auxtermesde", meaning: "under the terms of", example: { jp: "Aux termes du contrat, chaque partie doit assumer ses responsabilités.", en: "Under the terms of the contract, each party must assume its responsibilities." }, accept: ["under the terms of", "pursuant to", "as stipulated by"], hint: "Legal, always plural: 'under the terms of (a contract/law)'. Do not confuse with au terme de (singular) = 'at the end of'." },
        { id: "fr-u114l2-euegard", type: "vocab", front: "eu égard à", reading: "euegarda", meaning: "in view of / considering", example: { jp: "Eu égard aux risques, le gouvernement a préféré attendre plutôt que de réagir trop vite.", en: "In view of the risks, the government preferred to wait rather than react too quickly." }, accept: ["in view of", "considering", "given", "having regard to"], hint: "Formal 'in view of / having regard to'. Frozen phrase (eu = past participle of avoir); the everyday equivalent is compte tenu de or vu." },
        { id: "fr-u114l2-alaune", type: "vocab", front: "à l'aune de", reading: "alaunede", meaning: "measured against / in the light of", example: { jp: "À l'aune de ces résultats, la nouvelle méthode paraît enfin efficace, même si tout n'est pas encore parfait.", en: "Measured against these results, the new method finally seems effective, even if not everything is perfect yet." }, accept: ["measured against", "in the light of", "judged by", "by the yardstick of"], hint: "Literary-formal 'measured by the yardstick of'. Une aune was an old unit of length; the phrase means judging one thing by the standard of another." },
        { id: "fr-u114l2-nonobstant", type: "vocab", front: "nonobstant", reading: "nonobstant", meaning: "notwithstanding / despite", example: { jp: "Nonobstant les critiques, le projet a été voté sans débat.", en: "Notwithstanding the criticism, the project was passed without debate." }, accept: ["notwithstanding", "despite", "in spite of"], hint: "Very formal, legal preposition = malgré. Governs a noun directly (nonobstant les critiques). You will meet it in statutes and official prose." },
      ],
    },
    {
      id: "fr-u114l3",
      unit: 114,
      lesson: 3,
      title: "Inference and consequence",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Spell out, in formal prose, what follows from a premise.",
      items: [
        { id: "fr-u114l3-sensuit", type: "vocab", front: "il s'ensuit que", reading: "ilsensuitque", meaning: "it follows that", example: { jp: "Le budget a été réduit, il s'ensuit que certains projets seront abandonnés.", en: "The budget has been cut; it follows that some projects will be abandoned." }, accept: ["it follows that", "consequently", "therefore it follows that"], hint: "'It follows (logically) that' — from s'ensuivre (cf. suivre, Unit 54). Draws the conclusion of an argument; + indicative." },
        { id: "fr-u114l3-endecoule", type: "vocab", front: "il en découle que", reading: "ilendecouleque", meaning: "from this it follows that", example: { jp: "Les coûts augmentent, il en découle que les prix montent aussi.", en: "Costs are rising; from this it follows that prices are going up too." }, accept: ["it follows that", "it results that", "from this it follows that", "hence"], hint: "découler = to flow from. 'From this it follows that' — a slightly more causal, image-based cousin of il s'ensuit que." },
        { id: "fr-u114l3-partant", type: "vocab", front: "partant", reading: "partant", meaning: "therefore / hence", example: { jp: "Il a rompu le contrat, partant, il doit payer une amende.", en: "He broke the contract; therefore, he must pay a fine." }, accept: ["therefore", "hence", "thus", "consequently"], hint: "partant = donc, but formal and written. A frozen connector (not the participle of partir); sits between commas to introduce the consequence." },
        { id: "fr-u114l3-cefaisant", type: "vocab", front: "ce faisant", reading: "cefaisant", meaning: "in doing so", example: { jp: "L'État a baissé les impôts, et ce faisant, il a creusé la dette.", en: "The State lowered taxes, and in doing so, deepened the debt." }, accept: ["in doing so", "by doing so", "in the process"], hint: "Formal 'in doing so' (faisant = gerund of faire). Points to a consequence of the very action just described — often an unintended one." },
        { id: "fr-u114l3-telleenseigne", type: "vocab", front: "à telle enseigne que", reading: "atelleenseigneque", meaning: "so much so that", example: { jp: "La crise s'est aggravée, à telle enseigne que le gouvernement a dû démissionner.", en: "The crisis worsened, so much so that the government had to resign." }, accept: ["so much so that", "to such a degree that", "to the point that"], hint: "Very formal/literary 'so much so that' = au point que / à tel point que. Introduces a striking consequence that proves the point." },
        { id: "fr-u114l3-deslors", type: "vocab", front: "dès lors", reading: "deslors", meaning: "therefore / from then on", example: { jp: "La preuve a disparu, dès lors, l'enquête ne peut plus avancer.", en: "The evidence has vanished; from that point on, the investigation can no longer move forward." }, accept: ["therefore", "consequently", "from then on", "from that point"], hint: "Formal 'consequently / from that point on' = donc, par conséquent. Careful: dès lors (therefore) is not dès que (as soon as, Unit 36)." },
      ],
    },
    {
      id: "fr-u114l4",
      unit: 114,
      lesson: 4,
      title: "Legal and written markers",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read and use the fixed markers of legal and administrative writing.",
      items: [
        { id: "fr-u114l4-ledit", type: "vocab", front: "ledit", reading: "ledit", meaning: "the said / the aforementioned", example: { jp: "Un témoin a parlé, mais ledit témoin a ensuite tout nié.", en: "A witness spoke, but the said witness then denied everything." }, accept: ["the said", "the aforementioned", "the aforesaid"], hint: "Legal 'the said' = le + dit (from dire). Refers back to a noun just named; it agrees: ledit / ladite / lesdits / lesdites." },
        { id: "fr-u114l4-susmentionne", type: "vocab", front: "susmentionné", reading: "susmentionne", meaning: "aforementioned / above-mentioned", example: { jp: "La loi susmentionnée n'a jamais été appliquée, car personne ne la contrôle.", en: "The aforementioned law has never been applied, because no one enforces it." }, accept: ["aforementioned", "above-mentioned", "aforesaid"], hint: "Administrative adjective, 'above-mentioned'. Placed after the noun and agrees with it (la loi susmentionnée). Sus- = 'above' in the document." },
        { id: "fr-u114l4-enlespece", type: "vocab", front: "en l'espèce", reading: "enlespece", meaning: "in the present case / in this instance", example: { jp: "La règle est claire, mais en l'espèce, elle ne s'applique pas.", en: "The rule is clear, but in the present case it does not apply." }, accept: ["in the present case", "in this instance", "in this case", "here"], hint: "Legal idiom 'in the case at hand'. Same word as l'espèce = species (Unit 72), but here a frozen sense — the everyday equivalent is dans ce cas précis." },
        { id: "fr-u114l4-cijoint", type: "vocab", front: "ci-joint", reading: "cijoint", meaning: "attached / enclosed (hereto)", example: { jp: "Veuillez trouver ci-joint la lettre que vous avez demandée.", en: "Please find enclosed the letter you requested." }, accept: ["attached", "enclosed", "hereto attached", "herewith"], hint: "Correspondence marker 'enclosed / attached hereto'. The set opener is Veuillez trouver ci-joint… When it precedes the noun it stays invariable." },
        { id: "fr-u114l4-toutesfins", type: "vocab", front: "à toutes fins utiles", reading: "atoutesfinsutiles", meaning: "for whatever purpose it may serve / for the record", example: { jp: "Je vous envoie ces informations à toutes fins utiles, au cas où elles vous aideraient.", en: "I am sending you this information for whatever use it may be, in case it should help you." }, accept: ["for whatever it may be worth", "for the record", "for all useful purposes", "just in case"], hint: "Administrative set-phrase, literally 'for all useful ends' — hedges why you are sending something: it may or may not be needed." },
        { id: "fr-u114l4-souscouvert", type: "vocab", front: "sous couvert de", reading: "souscouvertde", meaning: "under the guise of / under cover of", example: { jp: "Sous couvert de sécurité, l'État surveille désormais chaque citoyen.", en: "Under the guise of security, the State now monitors every citizen." }, accept: ["under the guise of", "under cover of", "under the pretext of", "in the name of"], hint: "Formal 'under the guise/pretext of' — flags that a stated reason hides the real one. (A second, neutral sense in letters: sous couvert de X = routed via X.)" },
      ],
    },
  ],
};
