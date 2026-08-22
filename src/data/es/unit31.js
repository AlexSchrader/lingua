// ES Unit 31 — El carácter (slot: personality) — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions unchanged from A1 (see es/unit1.js): front carries the article for
// nouns, reading is the ASCII fold, every vocab item has accept[].
//
// A1 gave the learner adjectives for THINGS — grande, bueno, bonito, feo, nuevo —
// but almost nothing for PEOPLE. You could say a house is pretty; you could not
// say your brother is kind or your boss is patient. This unit is the vocabulary
// of character: the good traits, the difficult ones, the nouns that name a
// personality, and the verbs for how people get on. Every trait is an adjective,
// so every example turns on ser (A1 u16) — es simpático, son generosos — which
// is exactly the copula this vocabulary exists to make useful.
// Examples use A1 vocab plus this unit; block 1 (u21–30) words are used where
// already introduced (contento, feliz, tranquilo from u22).
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT31 = {
  id: "es-u31",
  lang: "es",
  title: "El carácter",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "es-u31l1",
      unit: 31,
      lesson: 1,
      title: "The good in someone",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what is good about a person — amable, simpático, generoso, trabajador, paciente, honesto — using ser.",
      items: [
        { id: "es-u31l1-amable", type: "vocab", front: "amable", reading: "amable", meaning: "kind", example: { jp: "El profesor es muy amable con los estudiantes.", en: "The teacher is very kind to the students." }, accept: ["nice", "friendly", "gentle"], hint: "You hear amor inside it — kindness, the same root as love. One form for both genders: un hombre amable, una mujer amable." },
        { id: "es-u31l1-simpatico", type: "vocab", front: "simpático", reading: "simpatico", meaning: "nice", example: { jp: "Tu hermana es muy simpática.", en: "Your sister is very nice." }, accept: ["likeable", "friendly", "pleasant"], hint: "Nice as a person, not nice-looking (that's bonito). It agrees: simpático, simpática." },
        { id: "es-u31l1-generoso", type: "vocab", front: "generoso", reading: "generoso", meaning: "generous", example: { jp: "Mi tío es generoso; siempre paga la cuenta.", en: "My uncle is generous; he always pays the bill." }, accept: ["giving"] },
        { id: "es-u31l1-trabajador", type: "vocab", front: "trabajador", reading: "trabajador", meaning: "hard-working", example: { jp: "Mi padre es muy trabajador.", en: "My father is very hard-working." }, accept: ["industrious", "diligent"], hint: "The adjective built from trabajar (A1): the verb is to work, this describes someone who does a lot of it. Feminine: trabajadora." },
        { id: "es-u31l1-paciente", type: "vocab", front: "paciente", reading: "paciente", meaning: "patient", example: { jp: "La profesora es paciente con la clase.", en: "The teacher is patient with the class." }, accept: ["calm", "tolerant"], hint: "Same word as the noun for a hospital patient — one who waits and endures." },
        { id: "es-u31l1-honesto", type: "vocab", front: "honesto", reading: "honesto", meaning: "honest", example: { jp: "Es un hombre honesto de verdad.", en: "He's a truly honest man." }, accept: ["truthful", "sincere"], hint: "The h is silent, as always in Spanish: \"o-NES-to\"." },
      ],
    },
    {
      id: "es-u31l2",
      unit: 31,
      lesson: 2,
      title: "The difficult side",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the harder traits — tímido, serio, perezoso, antipático, egoísta, orgulloso — without being rude about it.",
      items: [
        { id: "es-u31l2-timido", type: "vocab", front: "tímido", reading: "timido", meaning: "shy", example: { jp: "Mi primo es tímido y no habla mucho.", en: "My cousin is shy and doesn't talk much." }, accept: ["timid", "bashful"] },
        { id: "es-u31l2-serio", type: "vocab", front: "serio", reading: "serio", meaning: "serious", example: { jp: "Mi jefe es una persona seria.", en: "My boss is a serious person." }, accept: ["solemn", "earnest"], hint: "Not the same as sad — a serious person just isn't playful. ¿En serio? means \"Really?\"." },
        { id: "es-u31l2-perezoso", type: "vocab", front: "perezoso", reading: "perezoso", meaning: "lazy", example: { jp: "Los domingos soy un poco perezoso.", en: "On Sundays I'm a little lazy." }, accept: ["idle", "slothful"], hint: "It's also the Spanish name for the sloth, the animal — the lazy one." },
        { id: "es-u31l2-antipatico", type: "vocab", front: "antipático", reading: "antipatico", meaning: "unpleasant", example: { jp: "Ese hombre es antipático hoy.", en: "That man is unpleasant today." }, accept: ["unfriendly", "disagreeable"], hint: "Just simpático with anti- on the front — the exact opposite, built the obvious way." },
        { id: "es-u31l2-egoista", type: "vocab", front: "egoísta", reading: "egoista", meaning: "selfish", example: { jp: "Mi primo es un poco egoísta.", en: "My cousin is a little selfish." }, accept: ["self-centred", "self-centered"], hint: "Ends in -a for both genders: un hombre egoísta, una mujer egoísta. The ego is right there in it." },
        { id: "es-u31l2-orgulloso", type: "vocab", front: "orgulloso", reading: "orgulloso", meaning: "proud", example: { jp: "Mi madre está orgullosa de su hijo.", en: "My mother is proud of her son." }, accept: ["arrogant", "conceited"], hint: "Proud of someone (a good thing) or too proud (a fault) — the same word carries both. Estar orgulloso de = proud of." },
      ],
    },
    {
      id: "es-u31l3",
      unit: 31,
      lesson: 3,
      title: "Naming a personality",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about people in the abstract — la persona, el carácter, la personalidad, parecer, la cualidad, el defecto.",
      items: [
        { id: "es-u31l3-lapersona", type: "vocab", front: "la persona", reading: "lapersona", meaning: "person", example: { jp: "Es una persona muy amable.", en: "She's a very kind person." }, accept: ["the person", "individual"], hint: "Always feminine, even about a man: Mi padre es una persona seria." },
        { id: "es-u31l3-elcaracter", type: "vocab", front: "el carácter", reading: "elcaracter", meaning: "character", example: { jp: "Tiene buen carácter.", en: "He has a good character." }, accept: ["the character", "temperament", "nature"], hint: "The accent moves in the plural: un carácter, dos caracteres." },
        { id: "es-u31l3-lapersonalidad", type: "vocab", front: "la personalidad", reading: "lapersonalidad", meaning: "personality", example: { jp: "Mi hermana tiene una personalidad difícil.", en: "My sister has a difficult personality." }, accept: ["the personality"], hint: "The -dad ending is Spanish's -ty: ciudad, universidad, personalidad." },
        { id: "es-u31l3-parecer", type: "vocab", front: "parecer", reading: "parecer", meaning: "to seem", example: { jp: "Parece simpático, pero es un poco serio.", en: "He seems nice, but he's a bit serious." }, accept: ["to appear", "to look"], hint: "What someone seems, not what they are — parece amable weighs less than es amable. ¿Qué te parece? = What do you think?" },
        { id: "es-u31l3-lacualidad", type: "vocab", front: "la cualidad", reading: "lacualidad", meaning: "quality", example: { jp: "Ser paciente es una buena cualidad.", en: "Being patient is a good quality." }, accept: ["the quality", "virtue", "trait"], hint: "A good trait in a person — not the quality of a product (that's la calidad, one letter off)." },
        { id: "es-u31l3-eldefecto", type: "vocab", front: "el defecto", reading: "eldefecto", meaning: "flaw", example: { jp: "Todos tenemos defectos.", en: "We all have flaws." }, accept: ["the flaw", "fault", "defect", "shortcoming"], hint: "The opposite of a cualidad — a fault of character, or a defect in a thing." },
      ],
    },
    {
      id: "es-u31l4",
      unit: 31,
      lesson: 4,
      title: "Getting on with people",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how people get along — agradable, raro, llevarse bien, caer bien, confiar, sonreír.",
      items: [
        { id: "es-u31l4-agradable", type: "vocab", front: "agradable", reading: "agradable", meaning: "pleasant", example: { jp: "Fue una tarde muy agradable.", en: "It was a very pleasant afternoon." }, accept: ["nice", "enjoyable", "agreeable"], hint: "For situations and people alike — una persona agradable, una comida agradable. Built on gustar's cousin agradar, to please." },
        { id: "es-u31l4-raro", type: "vocab", front: "raro", reading: "raro", meaning: "strange", example: { jp: "Es un poco raro, pero simpático.", en: "He's a bit strange, but nice." }, accept: ["odd", "weird", "rare"], hint: "Usually \"weird\", occasionally \"rare\" — ¡Qué raro! is \"How odd!\"." },
        { id: "es-u31l4-llevarsebien", type: "vocab", front: "llevarse bien", reading: "llevarsebien", meaning: "to get along", example: { jp: "Me llevo bien con mis hermanos.", en: "I get along well with my brothers and sisters." }, accept: ["to get on well", "to get along with"], hint: "Reflexive: me llevo bien, nos llevamos bien. Swap bien for mal to say the opposite: se llevan mal." },
        { id: "es-u31l4-caerbien", type: "vocab", front: "caer bien", reading: "caerbien", meaning: "to like (a person)", example: { jp: "Tu amiga me cae bien.", en: "I like your friend." }, accept: ["to get on with", "to come across well"], hint: "Works backwards like gustar: the person you like is the subject — me cae bien = literally \"she falls well on me\"." },
        { id: "es-u31l4-confiar", type: "vocab", front: "confiar", reading: "confiar", meaning: "to trust", example: { jp: "Confío en mis amigos.", en: "I trust my friends." }, accept: ["to rely on", "to have confidence in"], hint: "Trust IN someone: confiar en. The noun la confianza is the trust itself." },
        { id: "es-u31l4-sonreir", type: "vocab", front: "sonreír", reading: "sonreir", meaning: "to smile", example: { jp: "Siempre sonríe cuando me ve.", en: "She always smiles when she sees me." }, accept: ["to give a smile"], hint: "reír (block 1, u22) is to laugh; son- + reír is to smile — the quieter one. La sonrisa is the smile itself." },
      ],
    },
  ],
};
