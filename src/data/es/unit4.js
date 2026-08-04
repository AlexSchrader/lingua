// ES Unit 4 — Family (slot: family) — A1
// ─────────────────────────────────────────────────────────────────────────────
// The family tree, taught outward from the learner: parents and children, then
// siblings and grandparents, then partners, aunts, uncles and the household cat.
// Lesson 4 supplies the three structural words the first three lean on — tengo /
// tiene / son, plus un / una / mis. They are taught last but used throughout the
// unit, which is allowed (the rule is unit-level, not lesson-level) and keeps the
// vocabulary lessons from opening with grammar. Conventions: see es/unit1.js.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT4 = {
  id: "es-u4",
  lang: "es",
  title: "Family",
  order: 4,
  stage: "a1",
  lessons: [
    // Lesson 1: the immediate family
    {
      id: "es-u4l1",
      unit: 4,
      lesson: 1,
      title: "Parents and children",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the people you live with — la familia, la madre, el padre, el hijo, la hija — and cover both parents at once with los padres.",
      items: [
        { id: "es-u4l1-lafamilia", type: "vocab", front: "la familia", reading: "lafamilia", meaning: "family", example: { jp: "Mi familia es enorme.", en: "My family is enormous." }, accept: ["the family", "relatives"], hint: "fa-MEE-lia. The li is one quick glide, not \"lee-ah\"." },
        { id: "es-u4l1-lamadre", type: "vocab", front: "la madre", reading: "lamadre", meaning: "mother", example: { jp: "Mi madre es de México.", en: "My mother is from Mexico." }, accept: ["mom", "mum", "mother"], hint: "In everyday speech you will hear mamá at least as often." },
        { id: "es-u4l1-elpadre", type: "vocab", front: "el padre", reading: "elpadre", meaning: "father", example: { jp: "Mi padre es de España.", en: "My father is from Spain." }, accept: ["dad", "father"], hint: "Papá in everyday speech. El padre is also how you address a priest." },
        { id: "es-u4l1-elhijo", type: "vocab", front: "el hijo", reading: "elhijo", meaning: "son", example: { jp: "Tengo un hijo.", en: "I have a son." }, accept: ["the son", "boy", "child"], hint: "Silent h, throaty j: EE-ho." },
        { id: "es-u4l1-lahija", type: "vocab", front: "la hija", reading: "lahija", meaning: "daughter", example: { jp: "Tengo una hija.", en: "I have a daughter." }, accept: ["the daughter", "girl", "child"], hint: "EE-ha. Together, los hijos means the children — sons and daughters both." },
        { id: "es-u4l1-lospadres", type: "vocab", front: "los padres", reading: "lospadres", meaning: "parents", example: { jp: "Mis padres son de España.", en: "My parents are from Spain." }, accept: ["the parents", "mom and dad", "folks"], hint: "The masculine plural is the default for a mixed pair, so los padres normally means a mother and a father rather than two fathers." },
      ],
    },
    // Lesson 2: siblings, grandparents, cousins
    {
      id: "es-u4l2",
      unit: 4,
      lesson: 2,
      title: "Brothers, sisters, grandparents",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the rest of the tree — el hermano, la hermana, el abuelo, la abuela, los abuelos, el primo.",
      items: [
        { id: "es-u4l2-elhermano", type: "vocab", front: "el hermano", reading: "elhermano", meaning: "brother", example: { jp: "Tengo un hermano.", en: "I have a brother." }, accept: ["the brother", "sibling"], hint: "Silent h once more: er-MA-no." },
        { id: "es-u4l2-lahermana", type: "vocab", front: "la hermana", reading: "lahermana", meaning: "sister", example: { jp: "Mi hermana es muy elegante.", en: "My sister is very elegant." }, accept: ["the sister", "sibling"], hint: "And los hermanos means the siblings as a group." },
        { id: "es-u4l2-elabuelo", type: "vocab", front: "el abuelo", reading: "elabuelo", meaning: "grandfather", example: { jp: "Mi abuelo es de España.", en: "My grandfather is from Spain." }, accept: ["grandpa", "granddad", "grandad"], hint: "a-BWE-lo — the ue is one glide. Abuelito is the affectionate version." },
        { id: "es-u4l2-laabuela", type: "vocab", front: "la abuela", reading: "laabuela", meaning: "grandmother", example: { jp: "Mi abuela tiene una casa en México.", en: "My grandmother has a house in Mexico." }, accept: ["grandma", "granny", "gran"], hint: "Two a's meet and run together: la-BWE-la." },
        { id: "es-u4l2-losabuelos", type: "vocab", front: "los abuelos", reading: "losabuelos", meaning: "grandparents", example: { jp: "Mis abuelos son de México.", en: "My grandparents are from Mexico." }, accept: ["the grandparents", "grandma and grandpa"], hint: "Same trick as los padres — one masculine plural for the pair." },
        { id: "es-u4l2-elprimo", type: "vocab", front: "el primo", reading: "elprimo", meaning: "cousin", example: { jp: "Mi primo es mi amigo también.", en: "My cousin is my friend too." }, accept: ["the cousin", "male cousin"], hint: "La prima for a female cousin. In Spain, calling someone primo can also mean they are being taken for a ride." },
      ],
    },
    // Lesson 3: partners, small people, and the cat
    {
      id: "es-u4l3",
      unit: 4,
      lesson: 3,
      title: "Married life and pets",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Introduce your household — el esposo, la esposa, el bebé, el tío, la tía — and the cat that lives in it.",
      items: [
        { id: "es-u4l3-elesposo", type: "vocab", front: "el esposo", reading: "elesposo", meaning: "husband", example: { jp: "Mi esposo es de España.", en: "My husband is from Spain." }, accept: ["the husband", "spouse"], hint: "El marido is just as common, and slightly warmer." },
        { id: "es-u4l3-laesposa", type: "vocab", front: "la esposa", reading: "laesposa", meaning: "wife", example: { jp: "Mi esposa es de México.", en: "My wife is from Mexico." }, accept: ["the wife", "spouse"], hint: "La mujer also means wife in everyday speech — the same word you learned for \"woman\"." },
        { id: "es-u4l3-elbebe", type: "vocab", front: "el bebé", reading: "elbebe", meaning: "baby", example: { jp: "Mi hermana tiene un bebé.", en: "My sister has a baby." }, accept: ["the baby", "infant"], hint: "Accent on the last e: be-BÉ. El bebé stays masculine even for a baby girl." },
        { id: "es-u4l3-eltio", type: "vocab", front: "el tío", reading: "eltio", meaning: "uncle", example: { jp: "Mi tío es el hermano de mi madre.", en: "My uncle is my mother's brother." }, accept: ["the uncle"], hint: "TEE-o. Among friends in Spain, tío also means \"mate\" or \"guy\"." },
        { id: "es-u4l3-latia", type: "vocab", front: "la tía", reading: "latia", meaning: "aunt", example: { jp: "Mi tía es la hermana de mi padre.", en: "My aunt is my father's sister." }, accept: ["the aunt", "auntie"], hint: "TEE-a. Los tíos covers an aunt and uncle together." },
        { id: "es-u4l3-elgato", type: "vocab", front: "el gato", reading: "elgato", meaning: "cat", example: { jp: "Mi abuela tiene un gato.", en: "My grandmother has a cat." }, accept: ["the cat", "kitty", "tomcat"], hint: "Hard g before a: GA-to. La gata if she is female." },
      ],
    },
    // Lesson 4: the structural words the whole unit runs on
    {
      id: "es-u4l4",
      unit: 4,
      lesson: 4,
      title: "Saying who you have",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what family you have and what someone else has — tengo, tiene, son — and put a or my in front of it with un, una and mis.",
      items: [
        { id: "es-u4l4-tengo", type: "vocab", front: "tengo", reading: "tengo", meaning: "I have", example: { jp: "Tengo una familia enorme.", en: "I have an enormous family." }, accept: ["i've got", "i have got"], hint: "Also how you give your age: tengo… años, literally \"I have… years\"." },
        { id: "es-u4l4-tiene", type: "vocab", front: "tiene", reading: "tiene", meaning: "he has", example: { jp: "Mi hermano tiene un gato.", en: "My brother has a cat." }, accept: ["she has", "has", "you have (formal)", "it has"], hint: "One form for he, she and polite usted — Spanish trusts context to tell them apart." },
        { id: "es-u4l4-son", type: "vocab", front: "son", reading: "son", meaning: "they are", example: { jp: "Mis padres son de México.", en: "My parents are from Mexico." }, accept: ["are", "they're", "you are (plural)"], hint: "The plural of es. The set so far: yo soy, tú eres, él es, ellos son." },
        { id: "es-u4l4-un", type: "vocab", front: "un", reading: "un", meaning: "a (masculine)", example: { jp: "Hay un gato en la casa.", en: "There's a cat in the house." }, accept: ["an", "one"], hint: "Goes with the words that take el: un hermano, un gato, un museo." },
        { id: "es-u4l4-una", type: "vocab", front: "una", reading: "una", meaning: "a (feminine)", example: { jp: "Tengo una hermana.", en: "I have a sister." }, accept: ["an", "one"], hint: "Goes with the words that take la: una hermana, una casa, una silla." },
        { id: "es-u4l4-mis", type: "vocab", front: "mis", reading: "mis", meaning: "my (plural)", example: { jp: "Mis abuelos son de España.", en: "My grandparents are from Spain." }, accept: ["my"], hint: "mi for one thing, mis for several: mi hijo, mis hijos. The possessive agrees with what is owned, not with you." },
      ],
    },
  ],
};
