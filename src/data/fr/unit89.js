// FR Unit 89 — Le hasard et le risque ("Chance and risk") — B1
// Strand D, coverage unit 9 of 14 (block 3). Slot: coverage-b1-9 (generic
// "Vocabulary 9 (B1)"); given a real theme so the lessons cohere — slot number kept.
// Luck, danger and caution. Deliberately NOT hedging — the crew board assigns modal
// nuance (il se peut que, il semblerait, avoir tendance à, quant à) to block 1's
// u61, so nothing here overlaps that. See unit84.js for the block-3 strategy.
export const FR_UNIT89 = {
  id: "fr-u89",
  lang: "fr",
  title: "Le hasard et le risque",
  order: 89,
  stage: "b1",
  lessons: [
    {
      id: "fr-u89l1",
      unit: 89,
      lesson: 1,
      title: "Luck and risk",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how things might turn out: chance, luck, a risk — take one, dare, or avoid it.",
      items: [
        { id: "fr-u89l1-lehasard", type: "vocab", front: "le hasard", reading: "lehasard", meaning: "chance", example: { jp: "C'est le hasard qui a décidé.", en: "It was chance that decided." }, accept: ["the chance", "randomness", "coincidence"], hint: "Aspirate h, so it stays le hasard — never l'hasard." },
        { id: "fr-u89l1-lachance", type: "vocab", front: "la chance", reading: "lachance", meaning: "luck", example: { jp: "J'ai eu de la chance.", en: "I was lucky." }, accept: ["the luck", "good fortune"], hint: "« avoir de la chance » is how French says to be lucky — you HAVE luck, you aren't lucky." },
        { id: "fr-u89l1-lerisque", type: "vocab", front: "le risque", reading: "lerisque", meaning: "risk", example: { jp: "Il n'y a aucun risque.", en: "There's no risk at all." }, accept: ["the risk", "hazard"] },
        { id: "fr-u89l1-risquer", type: "vocab", front: "risquer", reading: "risquer", meaning: "to put at risk", example: { jp: "Je ne veux pas risquer mon travail.", en: "I don't want to risk my job." }, accept: ["risk", "chance it", "endanger"] },
        { id: "fr-u89l1-oser", type: "vocab", front: "oser", reading: "oser", meaning: "to dare", example: { jp: "Je n'ose pas lui parler.", en: "I don't dare speak to them." }, accept: ["have the nerve", "venture"] },
        { id: "fr-u89l1-eviter", type: "vocab", front: "éviter", reading: "eviter", meaning: "to avoid", example: { jp: "Il vaut mieux éviter le centre-ville.", en: "It's better to avoid the town centre." }, accept: ["steer clear of", "dodge", "prevent"] },
      ],
    },
    {
      id: "fr-u89l2",
      unit: 89,
      lesson: 2,
      title: "As it happens",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "React to how something turned out: by chance, just in case, too bad, all the better — and name the unexpected.",
      items: [
        { id: "fr-u89l2-parhasard", type: "vocab", front: "par hasard", reading: "parhasard", meaning: "by chance", example: { jp: "Je l'ai vu par hasard dans la rue.", en: "I saw him by chance in the street." }, accept: ["by accident", "as it happens", "by coincidence"] },
        { id: "fr-u89l2-aucasou", type: "vocab", front: "au cas où", reading: "aucasou", meaning: "just in case", example: { jp: "Je prends un manteau au cas où.", en: "I'm taking a coat just in case." }, accept: ["in case", "if need be"] },
        { id: "fr-u89l2-tantpis", type: "vocab", front: "tant pis", reading: "tantpis", meaning: "too bad", example: { jp: "C'est fermé ? Tant pis.", en: "It's closed? Too bad." }, accept: ["never mind", "oh well", "so be it"], hint: "The everyday shrug. Its cheerful twin is tant mieux." },
        { id: "fr-u89l2-tantmieux", type: "vocab", front: "tant mieux", reading: "tantmieux", meaning: "all the better", example: { jp: "Il ne pleut pas ? Tant mieux !", en: "It's not raining? All the better!" }, accept: ["good", "so much the better", "great"] },
        { id: "fr-u89l2-limprevu", type: "vocab", front: "l'imprévu", reading: "limprevu", meaning: "the unexpected", example: { jp: "Je n'aime pas l'imprévu.", en: "I don't like the unexpected." }, accept: ["the unforeseen", "unexpected event"], hint: "Masculine. prévu = planned, so im-prévu = not planned." },
        { id: "fr-u89l2-lasurprise", type: "vocab", front: "la surprise", reading: "lasurprise", meaning: "surprise", example: { jp: "Quelle bonne surprise !", en: "What a nice surprise!" }, accept: ["the surprise"] },
      ],
    },
    {
      id: "fr-u89l3",
      unit: 89,
      lesson: 3,
      title: "Being careful",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle danger: name it, call someone careful or reckless, take a precaution, be wary — and pay attention.",
      items: [
        { id: "fr-u89l3-ledanger", type: "vocab", front: "le danger", reading: "ledanger", meaning: "danger", example: { jp: "Il n'y a pas de danger ici.", en: "There's no danger here." }, accept: ["the danger", "peril"] },
        { id: "fr-u89l3-prudent", type: "vocab", front: "prudent", reading: "prudent", meaning: "careful", example: { jp: "Mon frère est prudent sur la route.", en: "My brother is careful on the road." }, accept: ["cautious", "prudent", "safe"] },
        { id: "fr-u89l3-imprudent", type: "vocab", front: "imprudent", reading: "imprudent", meaning: "reckless", example: { jp: "C'était imprudent de partir seul.", en: "It was reckless to leave alone." }, accept: ["careless", "unwise", "rash"] },
        { id: "fr-u89l3-laprecaution", type: "vocab", front: "la précaution", reading: "laprecaution", meaning: "safeguard", example: { jp: "Je prends mes précautions.", en: "I'm taking precautions." }, accept: ["precaution", "the precaution"] },
        { id: "fr-u89l3-semefier", type: "vocab", front: "se méfier", reading: "semefier", meaning: "to be wary", example: { jp: "Il faut se méfier de ce site.", en: "You should be wary of this website." }, accept: ["distrust", "watch out for", "be suspicious"], hint: "You are wary OF something: se méfier de." },
        { id: "fr-u89l3-faireattention", type: "vocab", front: "faire attention", reading: "faireattention", meaning: "to pay attention", example: { jp: "Il faut faire attention sur la route.", en: "You have to pay attention on the road." }, accept: ["watch out", "be careful", "mind"] },
      ],
    },
    {
      id: "fr-u89l4",
      unit: 89,
      lesson: 4,
      title: "All of a sudden",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Frame an event that broke the pattern: suddenly, abruptly, luckily, at worst, except — and in spite of something.",
      items: [
        { id: "fr-u89l4-soudain", type: "vocab", front: "soudain", reading: "soudain", meaning: "all of a sudden", example: { jp: "Soudain, tout devient sombre.", en: "Suddenly, everything goes dark." }, accept: ["suddenly", "sudden", "out of nowhere"] },
        { id: "fr-u89l4-brusquement", type: "vocab", front: "brusquement", reading: "brusquement", meaning: "abruptly", example: { jp: "La voiture s'arrête brusquement.", en: "The car stops abruptly." }, accept: ["sharply", "roughly", "all at once"] },
        { id: "fr-u89l4-parchance", type: "vocab", front: "par chance", reading: "parchance", meaning: "as luck would have it", example: { jp: "Par chance, le magasin était ouvert.", en: "Luckily, the shop was open." }, accept: ["luckily", "fortunately", "by good fortune"] },
        { id: "fr-u89l4-aupire", type: "vocab", front: "au pire", reading: "aupire", meaning: "at worst", example: { jp: "Au pire, on prend le bus.", en: "At worst, we take the bus." }, accept: ["worst case", "if the worst comes to the worst"] },
        { id: "fr-u89l4-sauf", type: "vocab", front: "sauf", reading: "sauf", meaning: "except", example: { jp: "Tout le monde est venu sauf lui.", en: "Everyone came except him." }, accept: ["apart from", "but", "other than"] },
        { id: "fr-u89l4-malgre", type: "vocab", front: "malgré", reading: "malgre", meaning: "in spite of", example: { jp: "Nous sortons malgré la pluie.", en: "We're going out in spite of the rain." }, accept: ["despite", "notwithstanding"], hint: "Followed straight by a noun: malgré la pluie. Never « malgré que » in careful French." },
      ],
    },
  ],
};
