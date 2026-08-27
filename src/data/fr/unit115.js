// FR Unit 115 — Le discours : nuance et cohésion (slot: grammar-11) — B2
// B1's u78 already taught the entry-level connectors of nuance and structure —
// voire, en gros, dans l'ensemble, en quelque sorte, y compris, à vrai dire,
// d'une part, d'autre part. This B2 unit goes one register above them: the
// connectors an educated native reaches for in an op-ed, a lecture or an
// official note — the phrases that HEDGE a claim (tout porte à croire que,
// on ne saurait, force est de reconnaître), KNIT reference and cohesion
// (en l'occurrence, à cet égard, cela étant), hold a RESERVATION while
// conceding (il n'en reste pas moins que, tant s'en faut, en apparence), and
// LAND a considered stance at the close (en définitive, au fond, somme toute).
// None of the 24 reuse u78. Every front checked against the 2,168 live fr
// fronts + block1; every example uses only those live fronts + proper
// names/cognates. lang/unit/lesson are stamped in src/data/index.js.
export const FR_UNIT115 = {
  id: "fr-u115",
  lang: "fr",
  title: "Le discours : nuance et cohésion",
  order: 115,
  stage: "b2",
  lessons: [
    {
      id: "fr-u115l1",
      unit: 115,
      lesson: 1,
      title: "Hedging a claim",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Soften a claim you are not fully sure of, in a formal register.",
      items: [
        { id: "fr-u115l1-toutporte", type: "vocab", front: "tout porte à croire que", reading: "toutporteacroireque", meaning: "everything suggests that", example: { jp: "Tout porte à croire que la crise va s'aggraver, mais le gouvernement refuse encore de réagir.", en: "Everything suggests the crisis will get worse, yet the government still refuses to act." }, accept: ["everything suggests that", "all signs point to", "there is every reason to believe that"], hint: "Formal, confident hedge — 'all the evidence points to'. Takes the indicative; the speaker infers rather than states outright." },
        { id: "fr-u115l1-nestpasexclu", type: "vocab", front: "il n'est pas exclu que", reading: "ilnestpasexcluque", meaning: "it is not out of the question that", example: { jp: "Il n'est pas exclu que la réforme soit reportée, même si le ministre affirme le contraire.", en: "It is not out of the question that the reform will be postponed, even if the minister claims otherwise." }, accept: ["it is not out of the question that", "it's possible that", "it cannot be ruled out that"], hint: "From exclure (Unit 75): a fixed impersonal hedge meaning 'it can't be ruled out'. Takes the SUBJUNCTIVE (… soit …)." },
        { id: "fr-u115l1-nesaurait", type: "vocab", front: "on ne saurait", reading: "onnesaurait", meaning: "one cannot", example: { jp: "On ne saurait nier que la situation reste sérieuse, mais il faut éviter toute panique.", en: "One cannot deny that the situation remains serious, but we must avoid any panic." }, accept: ["one cannot", "one could not", "you can't really"], hint: "A formal, softened 'one cannot' — the conditional of savoir + infinitive. Gentler and more literary than 'on ne peut pas'." },
        { id: "fr-u115l1-aencroire", type: "vocab", front: "à en croire", reading: "aencroire", meaning: "if one is to believe", example: { jp: "À en croire la presse, la réforme aurait déjà échoué, mais rien n'est encore confirmé.", en: "If the press is to be believed, the reform has reportedly already failed, but nothing is confirmed yet." }, accept: ["if one is to believe", "according to", "going by"], hint: "'If X is to be believed' — flags an unverified source, so it often pairs with the journalistic conditional (aurait échoué)." },
        { id: "fr-u115l1-vraisemblance", type: "vocab", front: "selon toute vraisemblance", reading: "selontoutevraisemblance", meaning: "in all likelihood", example: { jp: "Selon toute vraisemblance, la réforme sera reportée, même si le ministre affirme le contraire.", en: "In all likelihood, the reform will be postponed, even if the minister claims otherwise." }, accept: ["in all likelihood", "in all probability", "by all appearances", "most likely"], hint: "A formal hedge — 'by every appearance'. From vraisemblable (likely); takes the indicative, unlike 'il n'est pas exclu que'." },
        { id: "fr-u115l1-forcereconnaitre", type: "vocab", front: "force est de reconnaître", reading: "forceestdereconnaitre", meaning: "one must acknowledge", example: { jp: "Force est de reconnaître que la crise a duré plus longtemps que prévu, malgré les efforts du gouvernement.", en: "There is no denying that the crisis lasted longer than expected, despite the government's efforts." }, accept: ["one must acknowledge", "there is no denying", "it must be admitted"], hint: "From reconnaître (Unit 49): 'force est de + infinitive' = one is compelled to — a reluctant concession, formal and written." },
      ],
    },
    {
      id: "fr-u115l2",
      unit: 115,
      lesson: 2,
      title: "Cohesion and reference",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Refer back and knit ideas together the way educated writing does.",
      items: [
        { id: "fr-u115l2-enloccurrence", type: "vocab", front: "en l'occurrence", reading: "enloccurrence", meaning: "in this case", example: { jp: "Il faut un vrai spécialiste, en l'occurrence un médecin, pour juger de ce traitement.", en: "You need a real specialist, in this case a doctor, to judge this treatment." }, accept: ["in this case", "as it happens", "in this particular instance"], hint: "Points from a general term down to the precise case at hand — 'in this specific instance'. Written register." },
        { id: "fr-u115l2-acetegard", type: "vocab", front: "à cet égard", reading: "acetegard", meaning: "in this respect", example: { jp: "La France a beaucoup investi dans la recherche ; à cet égard, les résultats restent positifs.", en: "France has invested heavily in research; in this respect, the results remain positive." }, accept: ["in this respect", "on this point", "in that regard"], hint: "Links back to one aspect just mentioned — 'on this particular point'. Formal cohesive marker." },
        { id: "fr-u115l2-dureste", type: "vocab", front: "du reste", reading: "dureste", meaning: "besides", example: { jp: "Le projet a été abandonné ; du reste, plus personne ne le soutient.", en: "The project was abandoned; besides, no one supports it anymore anyway." }, accept: ["besides", "moreover", "for that matter", "anyway"], hint: "Tacks on a further, clinching reason — 'besides, anyway'. Formal cousin of 'd'ailleurs'." },
        { id: "fr-u115l2-audemeurant", type: "vocab", front: "au demeurant", reading: "audemeurant", meaning: "for all that", example: { jp: "Cette remarque, au demeurant correcte, ne change rien à la décision finale.", en: "This remark, valid though it is, changes nothing about the final decision." }, accept: ["for all that", "incidentally", "otherwise", "besides"], hint: "Grants a minor aside without shifting the conclusion — 'for all that / otherwise'. Quite literary." },
        { id: "fr-u115l2-celaetant", type: "vocab", front: "cela étant", reading: "celaetant", meaning: "that being said", example: { jp: "Les preuves manquent encore ; cela étant, on ne peut pas exclure cette hypothèse.", en: "The evidence is still lacking; that being said, we cannot rule out this hypothesis." }, accept: ["that being said", "that being so", "that being the case"], hint: "'That being so' — concedes the prior point, then pivots to qualify it. Formal transition (short for cela étant donné)." },
        { id: "fr-u115l2-cecidit", type: "vocab", front: "ceci dit", reading: "cecidit", meaning: "that said", example: { jp: "Le film a reçu de bonnes critiques ; ceci dit, je ne l'ai pas trouvé si original.", en: "The film got good reviews; that said, I didn't find it all that original." }, accept: ["that said", "having said that", "that being said"], hint: "'That said' — walks back part of what you just granted. Slightly less formal and more spoken than 'cela étant'." },
      ],
    },
    {
      id: "fr-u115l3",
      unit: 115,
      lesson: 3,
      title: "Reservation and nuance",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grant a point and still hold on to your reservation.",
      items: [
        { id: "fr-u115l3-nenrestepasmoins", type: "vocab", front: "il n'en reste pas moins que", reading: "ilnenrestepasmoinsque", meaning: "the fact remains that", example: { jp: "Le gouvernement a fait des efforts ; il n'en reste pas moins que le chômage continue d'augmenter.", en: "The government has made efforts; the fact remains that unemployment keeps rising." }, accept: ["the fact remains that", "nonetheless it remains true that", "even so"], hint: "Concedes, then reasserts — 'and yet the fact remains that'. Takes the indicative; a hallmark of argued prose." },
        { id: "fr-u115l3-toujoursestil", type: "vocab", front: "toujours est-il que", reading: "toujoursestilque", meaning: "the fact remains", example: { jp: "On peut discuter des raisons ; toujours est-il que la pauvreté a augmenté cette année.", en: "We can debate the reasons; in any case, the fact is that poverty rose this year." }, accept: ["the fact remains", "be that as it may", "in any case the fact is"], hint: "Sets the debate aside to state what stands — 'be that as it may, the fact is'. Note the inversion (est-il); indicative follows." },
        { id: "fr-u115l3-tantsenfaut", type: "vocab", front: "tant s'en faut", reading: "tantsenfaut", meaning: "far from it", example: { jp: "La crise n'est pas terminée, tant s'en faut, et la situation peut encore empirer.", en: "The crisis is not over, far from it, and the situation may yet get worse." }, accept: ["far from it", "not by a long shot", "not nearly"], hint: "Reinforces a negative — the gap from 'true' is wide. Formal; drop it in after a 'ne … pas' clause." },
        { id: "fr-u115l3-premierevue", type: "vocab", front: "à première vue", reading: "apremierevue", meaning: "at first sight", example: { jp: "À première vue, la solution semble simple, mais elle soulève de nouveaux problèmes.", en: "At first sight, the solution seems simple, but it raises new problems." }, accept: ["at first sight", "on the face of it", "at first glance"], hint: "Sets up an appearance you are about to complicate — nearly always followed by a 'mais'." },
        { id: "fr-u115l3-enapparence", type: "vocab", front: "en apparence", reading: "enapparence", meaning: "outwardly", example: { jp: "En apparence, tout va bien, mais la réalité est bien plus complexe.", en: "Outwardly, everything is fine, but the reality is far more complex." }, accept: ["outwardly", "seemingly", "on the surface"], hint: "Contrasts surface with reality — 'on the surface'. Signals the truth underneath is different." },
        { id: "fr-u115l3-pourainsidire", type: "vocab", front: "pour ainsi dire", reading: "pourainsidire", meaning: "so to speak", example: { jp: "Après la réforme, ce service a pour ainsi dire disparu, sans que personne ne proteste.", en: "After the reform, this service has all but disappeared, without anyone protesting." }, accept: ["so to speak", "as it were", "practically"], hint: "Softens a figurative or exaggerated wording — 'so to speak'. Note the pairing with 'sans que' + subjunctive (proteste)." },
      ],
    },
    {
      id: "fr-u115l4",
      unit: 115,
      lesson: 4,
      title: "Summing up and stance",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Sum up and land your considered stance at the end of an argument.",
      items: [
        { id: "fr-u115l4-endefinitive", type: "vocab", front: "en définitive", reading: "endefinitive", meaning: "ultimately", example: { jp: "En définitive, ce débat a peu changé les choses, même si chacun garde encore son point de vue.", en: "Ultimately, this debate changed little, even if everyone still keeps their own point of view." }, accept: ["ultimately", "in the end", "when all is said and done"], hint: "Announces your settled conclusion — 'when all is said and done'. Formal close to an argument." },
        { id: "fr-u115l4-yregarderpres", type: "vocab", front: "à y regarder de près", reading: "ayregarderdepres", meaning: "on closer inspection", example: { jp: "À y regarder de près, cette solution coûte bien plus cher que prévu.", en: "On closer inspection, this solution costs much more than expected." }, accept: ["on closer inspection", "when you look closely", "looking more closely"], hint: "Signals that a first impression breaks down under scrutiny — 'looking closely'. Fixed phrase; note the expletive 'y'." },
        { id: "fr-u115l4-sommetoute", type: "vocab", front: "somme toute", reading: "sommetoute", meaning: "all in all", example: { jp: "Somme toute, le projet a réussi, même si quelques détails restent à régler.", en: "All in all, the project succeeded, even if a few details remain to be sorted out." }, accept: ["all in all", "when all's said", "on the whole"], hint: "A calm, weighed summary — 'all in all', not emphatic. Fairly formal." },
        { id: "fr-u115l4-aufond", type: "vocab", front: "au fond", reading: "aufond", meaning: "basically", example: { jp: "Au fond, ce débat n'est pas une question de faits, mais de valeurs, et c'est pourquoi il dure.", en: "At bottom, this debate isn't a question of facts but of values, and that's why it drags on." }, accept: ["basically", "at bottom", "deep down", "essentially"], hint: "Strips a matter to its real core — 'deep down, essentially'. Common in both speech and writing." },
        { id: "fr-u115l4-biendesegards", type: "vocab", front: "à bien des égards", reading: "abiendesegards", meaning: "in many respects", example: { jp: "À bien des égards, cette réforme ressemble à la précédente, sauf qu'elle va plus loin.", en: "In many respects, this reform resembles the previous one, except that it goes further." }, accept: ["in many respects", "in many ways", "in a number of respects"], hint: "Concedes a broad, multi-point similarity or partial truth — 'in many respects'." },
        { id: "fr-u115l4-enfindecompte", type: "vocab", front: "en fin de compte", reading: "enfindecompte", meaning: "in the end", example: { jp: "En fin de compte, ce n'est pas la technique qui a échoué, mais l'organisation.", en: "In the end, it wasn't the technique that failed, but the organization." }, accept: ["in the end", "when all is said and done", "ultimately"], hint: "A conclusion reached after weighing things up — 'all considered'. A touch less formal than 'en définitive'." },
      ],
    },
  ],
};
