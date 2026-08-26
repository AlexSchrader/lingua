// FR Unit 98 — La nuance et le degré (slot: nuance and degree) — B2
// B1 taught the comparative (u60) and la nuance (u61). B2 adds the precise
// language of DEGREE: small vs large (négligeable, minime, considérable),
// magnitude (l'ampleur, l'intensité, la proportion), intensifying/softening
// (accentuer, atténuer, excessif, démesuré) and calibrated approximation (dans
// une certaine mesure, sensiblement, le seuil). Fronts checked against the 2,168
// live fr fronts (écart, degré, à peine, davantage avoided). Conventions: fr/unit1.js.
export const FR_UNIT98 = {
  id: "fr-u98",
  lang: "fr",
  title: "La nuance et le degré",
  order: 98,
  stage: "b2",
  lessons: [
    {
      id: "fr-u98l1",
      unit: 98,
      lesson: 1,
      title: "How much",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grade an amount precisely: relativement, considérable, négligeable, minime.",
      items: [
        { id: "fr-u98l1-relativement", type: "vocab", front: "relativement", reading: "relativement", meaning: "relatively", example: { jp: "Ce problème reste relativement simple à comprendre.", en: "This problem stays relatively simple to understand." }, accept: ["relatively", "fairly", "comparatively"], hint: "Relatively, comparatively — relativement peu. From relatif." },
        { id: "fr-u98l1-considerable", type: "vocab", front: "considérable", reading: "considerable", meaning: "considerable", example: { jp: "Il a fait des progrès considérables cette année.", en: "He made considerable progress this year." }, accept: ["considerable", "significant", "substantial"], hint: "Large, significant — une somme considérable. From considérer." },
        { id: "fr-u98l1-negligeable", type: "vocab", front: "négligeable", reading: "negligeable", meaning: "negligible", example: { jp: "La différence de prix est négligeable.", en: "The price difference is negligible." }, accept: ["negligible", "insignificant", "tiny"], hint: "Small enough to ignore — une somme non négligeable = a not-inconsiderable sum." },
        { id: "fr-u98l1-minime", type: "vocab", front: "minime", reading: "minime", meaning: "minimal", example: { jp: "Les changements restent minimes.", en: "The changes remain minimal." }, accept: ["minimal", "tiny", "slight"], hint: "Very small — un risque minime. From the Latin for 'smallest'." },
        { id: "fr-u98l1-infime", type: "vocab", front: "infime", reading: "infime", meaning: "tiny", example: { jp: "Il reste une chance infime de réussir.", en: "There's a tiny chance of succeeding left." }, accept: ["tiny", "minuscule", "infinitesimal"], hint: "Even smaller than minime — une quantité infime. Vanishingly small." },
        { id: "fr-u98l1-modere", type: "vocab", front: "modéré", reading: "modere", meaning: "moderate", example: { jp: "Il garde toujours un ton modéré.", en: "He always keeps a moderate tone." }, accept: ["moderate", "restrained", "middle-of-the-road"], hint: "Moderate, restrained — des prix modérés, des idées modérées. From modérer." },
      ],
    },
    {
      id: "fr-u98l2",
      unit: 98,
      lesson: 2,
      title: "Magnitude",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about scale and extent: l'ampleur, la proportion, l'intensité, notable.",
      items: [
        { id: "fr-u98l2-lampleur", type: "vocab", front: "l'ampleur", reading: "lampleur", meaning: "the scale", example: { jp: "Personne n'avait vu l'ampleur du problème.", en: "Nobody had seen the scale of the problem." }, accept: ["scale", "the extent", "the magnitude"], hint: "The sheer size / extent — prendre de l'ampleur = to grow. From ample." },
        { id: "fr-u98l2-laproportion", type: "vocab", front: "la proportion", reading: "laproportion", meaning: "the proportion", example: { jp: "La proportion de jeunes augmente chaque année.", en: "The proportion of young people rises every year." }, accept: ["proportion", "the share", "the ratio"], hint: "A share or ratio — une forte proportion de. toutes proportions gardées = all things considered." },
        { id: "fr-u98l2-lintensite", type: "vocab", front: "l'intensité", reading: "lintensite", meaning: "the intensity", example: { jp: "L'intensité du travail est parfois difficile.", en: "The intensity of the work is sometimes hard." }, accept: ["intensity", "the strength"], hint: "How strong something is — l'intensité d'une couleur, d'un effort. From intense." },
        { id: "fr-u98l2-notable", type: "vocab", front: "notable", reading: "notable", meaning: "notable", example: { jp: "Il y a eu un progrès notable cette année.", en: "There was a notable improvement this year." }, accept: ["notable", "noticeable", "significant"], hint: "Worth noting, significant — une différence notable. From noter." },
        { id: "fr-u98l2-sensible", type: "vocab", front: "sensible", reading: "sensible", meaning: "noticeable", example: { jp: "La hausse des prix est très sensible.", en: "The rise in prices is very noticeable." }, accept: ["noticeable", "marked", "sensitive"], hint: "False friend! Not 'sensible' — it means noticeable / marked, or (of a person) sensitive." },
        { id: "fr-u98l2-marginal", type: "vocab", front: "marginal", reading: "marginal", meaning: "marginal", example: { jp: "Ce phénomène reste marginal pour le moment.", en: "This phenomenon stays marginal for the moment." }, accept: ["marginal", "minor", "fringe"], hint: "On the margins, minor — un rôle marginal. From la marge." },
      ],
    },
    {
      id: "fr-u98l3",
      unit: 98,
      lesson: 3,
      title: "Turning it up or down",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Intensify or soften: accentuer, atténuer, excessif, démesuré.",
      items: [
        { id: "fr-u98l3-accentuer", type: "vocab", front: "accentuer", reading: "accentuer", meaning: "to heighten", example: { jp: "La crise a accentué les problèmes de la région.", en: "The crisis heightened the region's problems." }, accept: ["to heighten", "to accentuate", "to increase"], hint: "To make more marked / stronger — accentuer un effet. Opposite: atténuer." },
        { id: "fr-u98l3-attenuer", type: "vocab", front: "atténuer", reading: "attenuer", meaning: "to soften", example: { jp: "Ces mots ont atténué sa colère.", en: "These words softened his anger." }, accept: ["to soften", "to ease", "to lessen"], hint: "To make weaker / milder — atténuer la douleur, un choc. Opposite: accentuer." },
        { id: "fr-u98l3-excessif", type: "vocab", front: "excessif", reading: "excessif", meaning: "excessive", example: { jp: "Sa colère semble vraiment excessive.", en: "His anger seems really excessive." }, accept: ["excessive", "over the top"], hint: "Too much, over the top — une réaction excessive. From l'excès." },
        { id: "fr-u98l3-demesure", type: "vocab", front: "démesuré", reading: "demesure", meaning: "disproportionate", example: { jp: "Il a une ambition démesurée.", en: "He has a disproportionate ambition." }, accept: ["disproportionate", "excessive", "boundless"], hint: "Beyond all measure — un orgueil démesuré. From dé- + mesure." },
        { id: "fr-u98l3-graduel", type: "vocab", front: "graduel", reading: "graduel", meaning: "gradual", example: { jp: "Le changement se fait de façon graduelle.", en: "The change happens in a gradual way." }, accept: ["gradual", "step-by-step"], hint: "Step by step, not sudden — un retour graduel. From le degré/grade." },
        { id: "fr-u98l3-subtil", type: "vocab", front: "subtil", reading: "subtil", meaning: "subtle", example: { jp: "Il y a une différence subtile entre ces deux mots.", en: "There's a subtle difference between these two words." }, accept: ["subtle", "fine", "delicate"], hint: "Fine, hard to catch — une subtile ironie. The noun is la subtilité." },
      ],
    },
    {
      id: "fr-u98l4",
      unit: 98,
      lesson: 4,
      title: "Calibrating a claim",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Hedge a degree precisely: dans une certaine mesure, plus ou moins, sensiblement, un seuil.",
      items: [
        { id: "fr-u98l4-dansunecertainemesure", type: "vocab", front: "dans une certaine mesure", reading: "dansunecertainemesure", meaning: "to some extent", example: { jp: "Je suis d'accord avec toi, dans une certaine mesure.", en: "I agree with you, to some extent." }, accept: ["to some extent", "to a certain degree", "up to a point"], hint: "Up to a point — hedges how far a statement holds." },
        { id: "fr-u98l4-plusoumoins", type: "vocab", front: "plus ou moins", reading: "plusoumoins", meaning: "more or less", example: { jp: "Le résultat est plus ou moins le même.", en: "The result is more or less the same." }, accept: ["more or less", "roughly", "sort of"], hint: "More or less, roughly — c'est plus ou moins fini." },
        { id: "fr-u98l4-legerement", type: "vocab", front: "légèrement", reading: "legerement", meaning: "slightly", example: { jp: "Les prix ont légèrement augmenté ce mois-ci.", en: "Prices rose slightly this month." }, accept: ["slightly", "a little"], hint: "Slightly, a touch — légèrement différent. From léger, light." },
        { id: "fr-u98l4-sensiblement", type: "vocab", front: "sensiblement", reading: "sensiblement", meaning: "noticeably", example: { jp: "La situation s'est sensiblement améliorée.", en: "The situation has improved noticeably." }, accept: ["noticeably", "appreciably", "markedly"], hint: "By a noticeable amount — sensiblement plus cher. Also 'roughly': sensiblement égal." },
        { id: "fr-u98l4-leseuil", type: "vocab", front: "le seuil", reading: "leseuil", meaning: "the threshold", example: { jp: "Le prix a dépassé un certain seuil.", en: "The price went past a certain threshold." }, accept: ["threshold", "the limit", "the doorstep"], hint: "A threshold / cut-off point — franchir un seuil. Also a doorstep." },
        { id: "fr-u98l4-moindre", type: "vocab", front: "moindre", reading: "moindre", meaning: "the slightest", example: { jp: "Il abandonne à la moindre difficulté.", en: "He gives up at the slightest difficulty." }, accept: ["the slightest", "the least", "lesser"], hint: "The least / slightest — sans le moindre doute. le moindre mal = the lesser evil." },
      ],
    },
  ],
};
