// FR Unit 96 — Les preuves et les sources (slot: evidence and sources) — B2
// B1 taught la preuve, démontrer, la source (u71), le témoin, l'origine. B2 goes
// up to the register of VERIFICATION: judging a source (fiable, crédible,
// recouper, citer), the kinds of evidence (l'indice, le témoignage, les données,
// étayer, corroborer), contesting it (démentir, contredire, biaisé, factuel) and
// establishing truth (établir, l'authenticité, avéré, la véracité). Fronts checked
// against the 2,168 live fr fronts and the taught lexemes. Conventions: fr/unit1.js.
export const FR_UNIT96 = {
  id: "fr-u96",
  lang: "fr",
  title: "Les preuves et les sources",
  order: 96,
  stage: "b2",
  lessons: [
    {
      id: "fr-u96l1",
      unit: 96,
      lesson: 1,
      title: "Judging a source",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Weigh how trustworthy information is: fiable, crédible, vérifier, recouper.",
      items: [
        { id: "fr-u96l1-fiable", type: "vocab", front: "fiable", reading: "fiable", meaning: "reliable", example: { jp: "Ce n'est pas une information très fiable.", en: "It's not very reliable information." }, drill: { jp: "Cette source n'est pas fiable", en: "This source isn't reliable" }, accept: ["reliable", "trustworthy", "dependable"], hint: "Reliable, trustworthy — une source fiable. From se fier à, to trust." },
        { id: "fr-u96l1-credible", type: "vocab", front: "crédible", reading: "credible", meaning: "credible", example: { jp: "Personne ne trouve son histoire crédible.", en: "Nobody finds his story credible." }, drill: { jp: "Son histoire reste peu crédible", en: "His story stays barely credible" }, accept: ["credible", "believable", "convincing"], hint: "Believable — the opposite is peu crédible. From la crédibilité." },
        { id: "fr-u96l1-verifier", type: "vocab", front: "vérifier", reading: "verifier", meaning: "to check", example: { jp: "Il vaut mieux vérifier une information avant d'y croire.", en: "It's better to check a piece of information before believing it." }, drill: { jp: "Je vais vérifier cette information", en: "I'm going to check this information" }, accept: ["to check", "to verify"], hint: "To check, verify — vérifier une source, vérifier les faits." },
        { id: "fr-u96l1-recouper", type: "vocab", front: "recouper", reading: "recouper", meaning: "to cross-check", example: { jp: "Il faut recouper plusieurs sources pour être sûr.", en: "You have to cross-check several sources to be sure." }, drill: { jp: "Mieux vaut recouper ces témoignages", en: "Better to cross-check these testimonies" }, accept: ["to cross-check", "to corroborate", "to match up"], hint: "To cross-check — recouper des informations. When sources agree, elles se recoupent." },
        { id: "fr-u96l1-lareference", type: "vocab", front: "la référence", reading: "lareference", meaning: "the reference", example: { jp: "Il donne toujours ses références.", en: "He always gives his references." }, drill: { jp: "La référence manque dans cet article", en: "The reference is missing in this article" }, accept: ["reference", "the source"], hint: "A reference or source citation — les références en bas de page. Also a job reference." },
        { id: "fr-u96l1-citer", type: "vocab", front: "citer", reading: "citer", meaning: "to quote", example: { jp: "Elle a cité plusieurs sources dans son article.", en: "She cited several sources in her article." }, drill: { jp: "Tu peux citer cet auteur", en: "You can quote this author" }, accept: ["to quote", "to cite", "to name"], hint: "To quote or cite — citer un auteur, citer ses sources. The noun is une citation." },
      ],
    },
    {
      id: "fr-u96l2",
      unit: 96,
      lesson: 2,
      title: "Kinds of evidence",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what backs a claim up: un indice, un témoignage, des données, étayer.",
      items: [
        { id: "fr-u96l2-lindice", type: "vocab", front: "l'indice", reading: "lindice", meaning: "the clue", example: { jp: "La police a enfin trouvé un indice sérieux.", en: "The police finally found a serious clue." }, drill: { jp: "L'indice était vraiment petit", en: "The clue was really small" }, accept: ["clue", "the sign", "the lead", "the index"], hint: "A clue or sign — un indice de culpabilité. Also an index (of prices): l'indice des prix." },
        { id: "fr-u96l2-letemoignage", type: "vocab", front: "le témoignage", reading: "letemoignage", meaning: "the testimony", example: { jp: "Plusieurs témoignages confirment la même chose.", en: "Several accounts confirm the same thing." }, drill: { jp: "Le témoignage change tout", en: "The testimony changes everything" }, accept: ["testimony", "the account", "the statement"], hint: "An eyewitness account — from témoin (witness) and témoigner (to testify)." },
        { id: "fr-u96l2-attester", type: "vocab", front: "attester", reading: "attester", meaning: "to attest", example: { jp: "Rien n'atteste que cette histoire soit vraie.", en: "Nothing attests that this story is true." }, drill: { jp: "Rien ne peut attester ça", en: "Nothing can attest to that" }, accept: ["to attest", "to certify", "to confirm"], hint: "To certify or bear witness that — attester de la qualité. Formal." },
        { id: "fr-u96l2-etayer", type: "vocab", front: "étayer", reading: "etayer", meaning: "to back up", example: { jp: "Il faut étayer cette idée avec de vrais exemples.", en: "You have to back up this idea with real examples." }, drill: { jp: "On doit étayer cette idée", en: "We must back up this idea" }, accept: ["to back up", "to support", "to prop up"], hint: "To support / back up an argument — étayer une thèse. Literally to prop up a wall." },
        { id: "fr-u96l2-corroborer", type: "vocab", front: "corroborer", reading: "corroborer", meaning: "to corroborate", example: { jp: "Ces résultats corroborent cette hypothèse.", en: "These results corroborate this hypothesis." }, drill: { jp: "Ces faits vont corroborer l'hypothèse", en: "These facts will corroborate the hypothesis" }, accept: ["to corroborate", "to confirm", "to back up"], hint: "To confirm with further evidence — corroborer un témoignage. Formal." },
        { id: "fr-u96l2-lesdonnees", type: "vocab", front: "les données", reading: "lesdonnees", meaning: "the data", example: { jp: "Ces données montrent un vrai changement.", en: "This data shows a real change." }, drill: { jp: "Les données montrent autre chose", en: "The data show something else" }, accept: ["data", "the figures"], hint: "Data — les données personnelles = personal data. Also 'the givens' of a problem." },
      ],
    },
    {
      id: "fr-u96l3",
      unit: 96,
      lesson: 3,
      title: "Contesting a claim",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Push back on shaky evidence: démentir, contredire, biaisé, factuel.",
      items: [
        { id: "fr-u96l3-dementir", type: "vocab", front: "démentir", reading: "dementir", meaning: "to deny", example: { jp: "Le gouvernement a démenti la nouvelle.", en: "The government denied the news." }, drill: { jp: "Le président va démentir cette nouvelle", en: "The president is going to deny this news" }, accept: ["to deny", "to refute", "to rebut"], hint: "To deny / refute officially — démentir une rumeur. The noun is un démenti." },
        { id: "fr-u96l3-contredire", type: "vocab", front: "contredire", reading: "contredire", meaning: "to contradict", example: { jp: "Ces nouveaux résultats contredisent son idée.", en: "These new results contradict his idea." }, drill: { jp: "Personne ne veut le contredire", en: "Nobody wants to contradict him" }, accept: ["to contradict"], hint: "To contradict — contredire quelqu'un / un fait. se contredire = to contradict oneself." },
        { id: "fr-u96l3-biaise", type: "vocab", front: "biaisé", reading: "biaise", meaning: "biased", example: { jp: "Ce sondage semble un peu biaisé.", en: "This poll seems a bit biased." }, drill: { jp: "Ce résultat semble biaisé", en: "This result seems biased" }, accept: ["biased", "skewed", "slanted"], hint: "Biased, skewed — une question biaisée. From biais, a slant." },
        { id: "fr-u96l3-douteux", type: "vocab", front: "douteux", reading: "douteux", meaning: "dubious", example: { jp: "Ce résultat me paraît douteux.", en: "This result seems dubious to me." }, drill: { jp: "Son argument reste douteux", en: "His argument stays dubious" }, accept: ["dubious", "doubtful", "shady", "questionable"], hint: "Doubtful, dubious, shady — un résultat douteux. From le doute." },
        { id: "fr-u96l3-leconstat", type: "vocab", front: "le constat", reading: "leconstat", meaning: "the finding", example: { jp: "Le constat est simple : rien n'a changé.", en: "The finding is simple: nothing has changed." }, drill: { jp: "Le constat est vraiment clair", en: "The finding is really clear" }, accept: ["finding", "the observation", "the report"], hint: "A statement of fact / finding — faire le constat que… Also an accident report." },
        { id: "fr-u96l3-factuel", type: "vocab", front: "factuel", reading: "factuel", meaning: "factual", example: { jp: "Reste factuel : donne seulement les faits.", en: "Stay factual: give only the facts." }, drill: { jp: "Son rapport reste très factuel", en: "His report stays very factual" }, accept: ["factual"], hint: "Factual — un compte rendu factuel. Sticking to the facts, no opinion." },
      ],
    },
    {
      id: "fr-u96l4",
      unit: 96,
      lesson: 4,
      title: "Settling the truth",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about pinning down what's true: établir, confirmer, l'authenticité, avéré.",
      items: [
        { id: "fr-u96l4-etablir", type: "vocab", front: "établir", reading: "etablir", meaning: "to establish", example: { jp: "Il faut établir la vérité avant de juger.", en: "You have to establish the truth before judging." }, drill: { jp: "On doit établir les faits", en: "We must establish the facts" }, accept: ["to establish", "to set out", "to draw up"], hint: "To establish — établir un fait, établir un lien. Also to set up: établir un contact." },
        { id: "fr-u96l4-confirmer", type: "vocab", front: "confirmer", reading: "confirmer", meaning: "to confirm", example: { jp: "Ces résultats confirment l'hypothèse de départ.", en: "These results confirm the original hypothesis." }, drill: { jp: "Tu dois confirmer cette date", en: "You have to confirm this date" }, accept: ["to confirm"], hint: "To confirm — confirmer une nouvelle, confirmer un rendez-vous. Opposite: infirmer." },
        { id: "fr-u96l4-lauthenticite", type: "vocab", front: "l'authenticité", reading: "lauthenticite", meaning: "authenticity", example: { jp: "L'authenticité de cette histoire n'est pas sûre.", en: "The authenticity of this story isn't certain." }, drill: { jp: "L'authenticité reste à prouver", en: "The authenticity still has to be proved" }, accept: ["authenticity", "the genuineness"], hint: "Genuineness — vérifier l'authenticité. From authentique." },
        { id: "fr-u96l4-avere", type: "vocab", front: "avéré", reading: "avere", meaning: "confirmed", example: { jp: "C'est un fait avéré : plus personne n'en doute.", en: "It's an established fact: nobody doubts it anymore." }, drill: { jp: "Le danger est maintenant avéré", en: "The danger is now confirmed" }, accept: ["confirmed", "established", "proven"], hint: "Established, proven true — un fait avéré. From s'avérer, to turn out to be." },
        { id: "fr-u96l4-laveracite", type: "vocab", front: "la véracité", reading: "laveracite", meaning: "the truthfulness", example: { jp: "Rien ne confirme la véracité de cette histoire.", en: "Nothing confirms the truthfulness of this story." }, drill: { jp: "La véracité pose encore problème", en: "The truthfulness is still a problem" }, accept: ["truthfulness", "the accuracy", "the veracity"], hint: "The truth/accuracy of a claim — vérifier la véracité des faits. From véridique." },
        { id: "fr-u96l4-impartial", type: "vocab", front: "impartial", reading: "impartial", meaning: "impartial", example: { jp: "Dans ce débat, il reste vraiment impartial.", en: "In this debate, he remains truly impartial." }, drill: { jp: "Le rédacteur reste vraiment impartial", en: "The editor stays really impartial" }, accept: ["impartial", "unbiased", "neutral"], hint: "Impartial, unbiased — un jury impartial. The opposite is partial (biased)." },
      ],
    },
  ],
};
