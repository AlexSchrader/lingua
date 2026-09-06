// FR Unit 3 — La famille ("Family") — A1
// Family and people nouns (taught WITH their article — gender is part of the
// word), then the first possessives mon/ma/ton/ta and the size pair petit/grand.
// Conventions: see fr/unit1.js.
export const FR_UNIT3 = {
  id: "fr-u3",
  lang: "fr",
  title: "La famille",
  order: 4,
  stage: "a1",
  lessons: [
    {
      id: "fr-u3l1",
      unit: 3,
      lesson: 1,
      title: "Close family",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name your family — le père, la mère, le frère, la sœur, les parents — and link them with de.",
      items: [
        { id: "fr-u3l1-lafamille", type: "vocab", front: "la famille", reading: "lafamille", meaning: "family", example: { jp: "Voilà la famille !", en: "Here's the family!" }, drill: { jp: "Voilà la famille de Marie", en: "Here's Marie's family" }, accept: ["the family"] },
        { id: "fr-u3l1-de", type: "vocab", front: "de", reading: "de", meaning: "of", example: { jp: "C'est la mère de Paul.", en: "It's Paul's mother." }, drill: { jp: "C'est la mère de Paul", en: "That's Paul's mother" }, accept: ["from"], hint: "French says \"the mother of Paul\", never \"Paul's mother\" — de is that of. It also means from." },
        { id: "fr-u3l1-lepere", type: "vocab", front: "le père", reading: "lepere", meaning: "father", example: { jp: "C'est le père de Marie.", en: "That's Marie's father." }, drill: { jp: "Le père de Marie est ici", en: "Marie's father is here" }, accept: ["the father", "dad"] },
        { id: "fr-u3l1-lamere", type: "vocab", front: "la mère", reading: "lamere", meaning: "mother", example: { jp: "La mère de Paul est ici.", en: "Paul's mother is here." }, drill: { jp: "La mère de Paul est là", en: "Paul's mother is there" }, accept: ["the mother", "mom", "mum"] },
        { id: "fr-u3l1-lefrere", type: "vocab", front: "le frère", reading: "lefrere", meaning: "brother", example: { jp: "Paul, c'est le frère de Marie.", en: "Paul is Marie's brother." }, drill: { jp: "Le frère de Marie est grand", en: "Marie's brother is tall" }, accept: ["the brother"] },
        { id: "fr-u3l1-lasoeur", type: "vocab", front: "la sœur", reading: "lasoeur", meaning: "sister", example: { jp: "Marie, c'est la sœur de Paul.", en: "Marie is Paul's sister." }, drill: { jp: "La sœur de Paul est ici", en: "Paul's sister is here" }, accept: ["the sister"], hint: "œ is one letter (o+e squished together) — type soeur and it counts." },
        { id: "fr-u3l1-lesparents", type: "vocab", front: "les parents", reading: "lesparents", meaning: "parents", example: { jp: "Les parents de Marie ? Ici !", en: "Marie's parents? Here!" }, drill: { jp: "Voilà les parents de Marie", en: "Here are Marie's parents" }, accept: ["the parents"], hint: "les = \"the\" for plurals, masculine or feminine alike." },
      ],
    },
    {
      id: "fr-u3l2",
      unit: 3,
      lesson: 2,
      title: "People",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about people: l'homme, la femme, le garçon, la fille, l'enfant — and call someone l'ami / l'amie.",
      items: [
        { id: "fr-u3l2-lhomme", type: "vocab", front: "l'homme", reading: "lhomme", meaning: "man", example: { jp: "L'homme est là.", en: "The man is there." }, drill: { jp: "L'homme est ici", en: "The man is here" }, accept: ["the man"], hint: "le squishes to l' before a vowel sound: l'homme, l'amie, l'école. The h in homme is silent." },
        { id: "fr-u3l2-lafemme", type: "vocab", front: "la femme", reading: "lafemme", meaning: "woman", example: { jp: "La femme est ici.", en: "The woman is here." }, drill: { jp: "La femme de Paul est là", en: "Paul's wife is there" }, accept: ["the woman", "wife"], hint: "Pronounced \"fam\", not \"fem\" — and it also means wife." },
        { id: "fr-u3l2-legarcon", type: "vocab", front: "le garçon", reading: "legarcon", meaning: "boy", example: { jp: "Le garçon est ici.", en: "The boy is here." }, drill: { jp: "Le garçon est petit", en: "The boy is small" }, accept: ["the boy"] },
        { id: "fr-u3l2-lafille", type: "vocab", front: "la fille", reading: "lafille", meaning: "girl", example: { jp: "La fille est là.", en: "The girl is there." }, drill: { jp: "La fille est ici", en: "The girl is here" }, accept: ["the girl", "daughter"], hint: "Also \"daughter\" — la fille de Marie is Marie's daughter." },
        { id: "fr-u3l2-lenfant", type: "vocab", front: "l'enfant", reading: "lenfant", meaning: "child", example: { jp: "Voilà l'enfant de Marie !", en: "There's Marie's child!" }, drill: { jp: "Voilà l'enfant de Marie", en: "Here's Marie's child" }, accept: ["the child", "kid"] },
        { id: "fr-u3l2-lami", type: "vocab", front: "l'ami", reading: "lami", meaning: "friend (male)", example: { jp: "Paul est l'ami de Marie.", en: "Paul is Marie's friend." }, drill: { jp: "Paul est l'ami de Marie", en: "Paul is Marie's friend" }, accept: ["friend", "the friend"] },
        { id: "fr-u3l2-lamie", type: "vocab", front: "l'amie", reading: "lamie", meaning: "friend (female)", example: { jp: "Marie est l'amie de Paul.", en: "Marie is Paul's friend." }, drill: { jp: "Marie est l'amie de Paul", en: "Marie is Paul's friend" }, accept: ["friend", "the friend"], hint: "Same sound as l'ami — the extra e only shows in writing." },
      ],
    },
    {
      id: "fr-u3l3",
      unit: 3,
      lesson: 3,
      title: "Mine and yours",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whose it is with mon / ma / ton / ta, and size people up with petit and grand.",
      items: [
        { id: "fr-u3l3-mon", type: "vocab", front: "mon", reading: "mon", meaning: "my (masculine)", example: { jp: "C'est mon père.", en: "That's my father." }, drill: { jp: "C'est mon père", en: "That's my father" }, accept: ["my"], hint: "The possessive matches the NOUN's gender, not yours: mon père, ma mère — whoever you are." },
        { id: "fr-u3l3-ma", type: "vocab", front: "ma", reading: "ma", meaning: "my (feminine)", example: { jp: "Ma mère est ici.", en: "My mother is here." }, drill: { jp: "Ma mère est ici", en: "My mother is here" }, accept: ["my"] },
        { id: "fr-u3l3-ton", type: "vocab", front: "ton", reading: "ton", meaning: "your (masculine)", example: { jp: "Ton frère est là ?", en: "Is your brother there?" }, drill: { jp: "Ton frère est là", en: "Your brother is there" }, accept: ["your"] },
        { id: "fr-u3l3-ta", type: "vocab", front: "ta", reading: "ta", meaning: "your (feminine)", example: { jp: "Ta sœur est très grande !", en: "Your sister is very tall!" }, drill: { jp: "Ta sœur est ici", en: "Your sister is here" }, accept: ["your"] },
        { id: "fr-u3l3-petit", type: "vocab", front: "petit", reading: "petit", meaning: "small", example: { jp: "Le garçon est petit.", en: "The boy is small." }, drill: { jp: "Mon frère est petit", en: "My brother is small" }, accept: ["little", "short"] },
        { id: "fr-u3l3-grand", type: "vocab", front: "grand", reading: "grand", meaning: "big", example: { jp: "Mon frère est grand.", en: "My brother is tall." }, drill: { jp: "Le père de Paul est grand", en: "Paul's father is tall" }, accept: ["tall", "large"], hint: "For people, grand/petit usually mean tall/short." },
      ],
    },
  ],
};
