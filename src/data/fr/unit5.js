// FR Unit 5 — Les nombres ("Numbers") — A1
// (Header used to say "Unit 4"; the object below is `fr-u5`, order 5. Corrected 2026-09-24.)
// Counting 0–12, the quantity words, and `le numéro` — the label kind of number,
// as opposed to `le nombre`, the quantity kind, which a later unit owns.
// NOTE the deliberate gap: the number
// "one" is NOT a separate item — un/une (Unit 2) already IS the number one
// (same word as the article), exactly like the ja に homograph rule: one front,
// one home, taught through a hint instead of a duplicate item.
// Conventions: see fr/unit1.js.
export const FR_UNIT5 = {
  id: "fr-u5",
  lang: "fr",
  title: "Les nombres",
  order: 5,
  stage: "a1",
  lessons: [
    {
      id: "fr-u5l1",
      unit: 5,
      lesson: 1,
      title: "Zero to six",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from zéro to six.",
      items: [
        { id: "fr-u5l1-zero", type: "vocab", front: "zéro", reading: "zero", meaning: "zero", example: { jp: "Zéro, un, deux, trois !", en: "Zero, one, two, three!" }, drill: { jp: "Zéro un deux trois", en: "Zero one two three" }, accept: ["0", "zero", "nought", "nil"], hint: "\"zay-ROH\" — the é is the closed \"ay\" you met in le bébé, and the stress lands on the second syllable. Same word as English, very different music." },
        { id: "fr-u5l1-deux", type: "vocab", front: "deux", reading: "deux", meaning: "two", example: { jp: "Deux cafés, s'il vous plaît.", en: "Two coffees, please." }, drill: { jp: "Voilà deux amis", en: "Here are two friends" }, accept: ["2", "two", "number two"], hint: "Where's one? You know it — un/une, the same word as the article \"a\"." },
        { id: "fr-u5l1-trois", type: "vocab", front: "trois", reading: "trois", meaning: "three", example: { jp: "Un, deux, trois !", en: "One, two, three!" }, drill: { jp: "Trois enfants ici", en: "Three children here" }, accept: ["3", "three", "number three"], hint: "\"trwah\" — oi is always \"wah\" and the s is silent. It rhymes with moi and toi, which is the quickest way to lock the sound in." },
        { id: "fr-u5l1-quatre", type: "vocab", front: "quatre", reading: "quatre", meaning: "four", example: { jp: "Quatre pizzas, s'il vous plaît !", en: "Four pizzas, please!" }, drill: { jp: "Quatre garçons et une fille", en: "Four boys and one girl" }, accept: ["4", "four", "number four"], hint: "\"KAH-truh\" — qu is a hard k and the final -re is barely a breath. Fast speech flattens it to \"kat\"." },
        { id: "fr-u5l1-cinq", type: "vocab", front: "cinq", reading: "cinq", meaning: "five", example: { jp: "Trois, quatre, cinq…", en: "Three, four, five…" }, drill: { jp: "Voilà cinq enfants", en: "Here are five children" }, accept: ["5", "five", "number five"], hint: "\"sank\" — a nasal vowel, then a hard k you really do pronounce, unusually for a final consonant. Before a noun it often drops: cinq pommes is \"san pom\"." },
        { id: "fr-u5l1-six", type: "vocab", front: "six", reading: "six", meaning: "six", example: { jp: "Cinq, six… et voilà !", en: "Five, six… and there you go!" }, drill: { jp: "Six parents ici", en: "Six parents here" }, accept: ["6", "six", "number six"], hint: "Sounds like \"seess\" — not like English six." },
      ],
    },
    {
      id: "fr-u5l2",
      unit: 5,
      lesson: 2,
      title: "Seven to twelve",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from sept to douze.",
      items: [
        { id: "fr-u5l2-sept", type: "vocab", front: "sept", reading: "sept", meaning: "seven", example: { jp: "Six, sept, huit…", en: "Six, seven, eight…" }, drill: { jp: "Sept garçons et sept filles", en: "Seven boys and seven girls" }, accept: ["7", "seven", "number seven"], hint: "The p is silent: \"set\"." },
        { id: "fr-u5l2-huit", type: "vocab", front: "huit", reading: "huit", meaning: "eight", example: { jp: "Huit, s'il vous plaît !", en: "Eight, please!" }, drill: { jp: "Voilà huit enfants", en: "Here are eight children" }, accept: ["8", "eight", "number eight"], hint: "\"weet\" — the h is silent and ui is one glide, exactly as in le biscuit. The t is silent too, so four letters give you two sounds." },
        { id: "fr-u5l2-neuf", type: "vocab", front: "neuf", reading: "neuf", meaning: "nine", example: { jp: "Neuf ? Non, huit !", en: "Nine? No, eight!" }, drill: { jp: "Neuf femmes et neuf hommes", en: "Nine women and nine men" }, accept: ["9", "nine", "brand new", "new"], hint: "neuf is also the word for \"brand new\" — context tells you which." },
        { id: "fr-u5l2-dix", type: "vocab", front: "dix", reading: "dix", meaning: "ten", example: { jp: "Huit, neuf, dix !", en: "Eight, nine, ten!" }, drill: { jp: "Dix enfants ici", en: "Ten children here" }, accept: ["10", "ten", "number ten"], hint: "On its own it is \"deess\", like six. Before a noun it becomes \"dee\", and before a vowel the x wakes up as a z: dix euros, \"dee-ZUH-roh\"." },
        { id: "fr-u5l2-onze", type: "vocab", front: "onze", reading: "onze", meaning: "eleven", example: { jp: "Dix, onze, douze.", en: "Ten, eleven, twelve." }, drill: { jp: "Onze garçons et une fille", en: "Eleven boys and one girl" }, accept: ["11", "eleven", "number eleven"], hint: "\"onz\" — a nasal o, then a buzzing z. Eleven to sixteen each get their own word; from dix-sept on, French goes back to building them out of ten." },
        { id: "fr-u5l2-douze", type: "vocab", front: "douze", reading: "douze", meaning: "twelve", example: { jp: "Douze pizzas ? Oui !", en: "Twelve pizzas? Yes!" }, drill: { jp: "Voilà douze enfants", en: "Here are twelve children" }, accept: ["12", "twelve", "number twelve", "a dozen"], hint: "\"dooz\" — ou is the plain \"oo\" of English \"food\", not the tight u of la flûte. Une douzaine is a dozen." },
      ],
    },
    {
      id: "fr-u5l3",
      unit: 5,
      lesson: 3,
      title: "How many?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask combien, answer with beaucoup, un peu, plus or moins, and give a numéro.",
      items: [
        { id: "fr-u5l3-combien", type: "vocab", front: "combien", reading: "combien", meaning: "how many", example: { jp: "C'est combien ?", en: "How much is it?" }, drill: { jp: "C'est combien madame", en: "How much is it madam" }, accept: ["how much", "how many?", "how much is it"], hint: "C'est combien ? is THE price question — four syllables that buy everything." },
        { id: "fr-u5l3-beaucoup", type: "vocab", front: "beaucoup", reading: "beaucoup", meaning: "a lot", example: { jp: "Merci beaucoup !", en: "Thank you very much!" }, drill: { jp: "Merci beaucoup madame", en: "Thank you very much madam" }, accept: ["much", "many", "very much"], hint: "\"boh-KOO\" — eau is \"oh\", ou is \"oo\", and the final p is silent. You will meet it most in merci beaucoup; its opposite is un peu." },
        { id: "fr-u5l3-unpeu", type: "vocab", front: "un peu", reading: "unpeu", meaning: "a little", example: { jp: "Un peu, s'il vous plaît.", en: "A little, please." }, drill: { jp: "Un peu s'il vous plaît", en: "A little please" }, accept: ["a bit", "a little bit", "slightly"], hint: "\"uhn PUH\" — nasal un, then a short rounded eu made with your lips pushed forward. The opposite of beaucoup: un peu de lait." },
        { id: "fr-u5l3-plus", type: "vocab", front: "plus", reading: "plus", meaning: "more", example: { jp: "Plus de café, s'il vous plaît.", en: "More coffee, please." }, drill: { jp: "Un peu plus s'il vous plaît", en: "A little more please" }, accept: ["more of", "extra", "further"], hint: "One word, two pronunciations with opposite jobs: \"ploo\" for everyday more, with the s silent, and \"plooss\" in arithmetic or before a vowel." },
        { id: "fr-u5l3-moins", type: "vocab", front: "moins", reading: "moins", meaning: "less", example: { jp: "Moins, merci — ça va !", en: "Less, thanks — that's fine!" }, drill: { jp: "Un peu moins merci", en: "A little less thanks" }, accept: ["fewer", "minus", "less of", "not as much"], hint: "\"mwan\" — oi is \"wah\", nasalised by the n that follows, and the s is silent. The opposite of plus; it is also minus in arithmetic." },
        { id: "fr-u5l3-lenumero", type: "vocab", front: "le numéro", reading: "lenumero", meaning: "the number (of a phone or a house)", example: { jp: "C'est le numéro six, madame.", en: "It's number six, madam." }, drill: { jp: "C'est le numéro six", en: "It is number six" }, accept: ["number", "the number", "phone number", "house number"], hint: "A numéro labels one thing — a phone, a house, a room. Combien asks how many; a numéro is which one." },
      ],
    },
  ],
};
