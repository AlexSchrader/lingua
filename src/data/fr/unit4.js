// FR Unit 4 — Les nombres ("Numbers") — A1
// Counting 0–12 plus the quantity words. NOTE the deliberate gap: the number
// "one" is NOT a separate item — un/une (Unit 2) already IS the number one
// (same word as the article), exactly like the ja に homograph rule: one front,
// one home, taught through a hint instead of a duplicate item.
// Conventions: see fr/unit1.js.
export const FR_UNIT4 = {
  id: "fr-u4",
  lang: "fr",
  title: "Les nombres",
  order: 5,
  stage: "a1",
  lessons: [
    {
      id: "fr-u4l1",
      unit: 4,
      lesson: 1,
      title: "Zero to six",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from zéro to six.",
      items: [
        { id: "fr-u4l1-zero", type: "vocab", front: "zéro", reading: "zero", meaning: "zero", example: { jp: "Zéro, un, deux, trois !", en: "Zero, one, two, three!" }, drill: { jp: "Zéro un deux trois", en: "Zero one two three" }, accept: ["0"] },
        { id: "fr-u4l1-deux", type: "vocab", front: "deux", reading: "deux", meaning: "two", example: { jp: "Deux cafés, s'il vous plaît.", en: "Two coffees, please." }, drill: { jp: "Un deux trois quatre", en: "One two three four" }, accept: ["2"], hint: "Where's one? You know it — un/une, the same word as the article \"a\"." },
        { id: "fr-u4l1-trois", type: "vocab", front: "trois", reading: "trois", meaning: "three", example: { jp: "Un, deux, trois !", en: "One, two, three!" }, drill: { jp: "Un deux trois", en: "One two three" }, accept: ["3"] },
        { id: "fr-u4l1-quatre", type: "vocab", front: "quatre", reading: "quatre", meaning: "four", example: { jp: "Quatre pizzas, s'il vous plaît !", en: "Four pizzas, please!" }, drill: { jp: "Trois quatre cinq six", en: "Three four five six" }, accept: ["4"] },
        { id: "fr-u4l1-cinq", type: "vocab", front: "cinq", reading: "cinq", meaning: "five", example: { jp: "Trois, quatre, cinq…", en: "Three, four, five…" }, drill: { jp: "Quatre cinq six", en: "Four five six" }, accept: ["5"] },
        { id: "fr-u4l1-six", type: "vocab", front: "six", reading: "six", meaning: "six", example: { jp: "Cinq, six… et voilà !", en: "Five, six… and there you go!" }, drill: { jp: "Cinq six sept", en: "Five six seven" }, accept: ["6"], hint: "Sounds like \"seess\" — not like English six." },
      ],
    },
    {
      id: "fr-u4l2",
      unit: 4,
      lesson: 2,
      title: "Seven to twelve",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from sept to douze.",
      items: [
        { id: "fr-u4l2-sept", type: "vocab", front: "sept", reading: "sept", meaning: "seven", example: { jp: "Six, sept, huit…", en: "Six, seven, eight…" }, drill: { jp: "Six sept huit", en: "Six seven eight" }, accept: ["7"], hint: "The p is silent: \"set\"." },
        { id: "fr-u4l2-huit", type: "vocab", front: "huit", reading: "huit", meaning: "eight", example: { jp: "Huit, s'il vous plaît !", en: "Eight, please!" }, drill: { jp: "Sept huit neuf", en: "Seven eight nine" }, accept: ["8"] },
        { id: "fr-u4l2-neuf", type: "vocab", front: "neuf", reading: "neuf", meaning: "nine", example: { jp: "Neuf ? Non, huit !", en: "Nine? No, eight!" }, drill: { jp: "Huit neuf dix", en: "Eight nine ten" }, accept: ["9"], hint: "neuf is also the word for \"brand new\" — context tells you which." },
        { id: "fr-u4l2-dix", type: "vocab", front: "dix", reading: "dix", meaning: "ten", example: { jp: "Huit, neuf, dix !", en: "Eight, nine, ten!" }, drill: { jp: "Neuf dix onze", en: "Nine ten eleven" }, accept: ["10"] },
        { id: "fr-u4l2-onze", type: "vocab", front: "onze", reading: "onze", meaning: "eleven", example: { jp: "Dix, onze, douze.", en: "Ten, eleven, twelve." }, drill: { jp: "Dix onze douze", en: "Ten eleven twelve" }, accept: ["11"] },
        { id: "fr-u4l2-douze", type: "vocab", front: "douze", reading: "douze", meaning: "twelve", example: { jp: "Douze pizzas ? Oui !", en: "Twelve pizzas? Yes!" }, drill: { jp: "Onze et douze", en: "Eleven and twelve" }, accept: ["12"] },
      ],
    },
    {
      id: "fr-u4l3",
      unit: 4,
      lesson: 3,
      title: "How many?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask combien and answer with beaucoup, un peu, plus or moins.",
      items: [
        { id: "fr-u4l3-combien", type: "vocab", front: "combien", reading: "combien", meaning: "how many", example: { jp: "C'est combien ?", en: "How much is it?" }, drill: { jp: "C'est combien madame", en: "How much is it madam" }, accept: ["how much"], hint: "C'est combien ? is THE price question — four syllables that buy everything." },
        { id: "fr-u4l3-beaucoup", type: "vocab", front: "beaucoup", reading: "beaucoup", meaning: "a lot", example: { jp: "Merci beaucoup !", en: "Thank you very much!" }, drill: { jp: "Merci beaucoup madame", en: "Thank you very much madam" }, accept: ["much", "many", "very much"] },
        { id: "fr-u4l3-unpeu", type: "vocab", front: "un peu", reading: "unpeu", meaning: "a little", example: { jp: "Un peu, s'il vous plaît.", en: "A little, please." }, drill: { jp: "Un peu s'il vous plaît", en: "A little please" }, accept: ["a bit", "a little bit"] },
        { id: "fr-u4l3-plus", type: "vocab", front: "plus", reading: "plus", meaning: "more", example: { jp: "Plus de café, s'il vous plaît.", en: "More coffee, please." }, drill: { jp: "Un peu plus s'il vous plaît", en: "A little more please" }, accept: [] },
        { id: "fr-u4l3-moins", type: "vocab", front: "moins", reading: "moins", meaning: "less", example: { jp: "Moins, merci — ça va !", en: "Less, thanks — that's fine!" }, drill: { jp: "Un peu moins merci", en: "A little less thanks" }, accept: ["fewer", "minus"] },
      ],
    },
  ],
};
