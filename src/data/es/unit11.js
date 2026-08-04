// ES Unit 11 — Body and health (slot: body-health) — A1
// Block 2, last unit. Conventions: see the header of src/data/es/unit7.js.
// THE ONE PLACE THIS BLOCK TEACHES VERB-SHAPED WORDS. Lessons 3 and 4 teach
// me duele / tengo frío / tengo calor / tengo hambre / tengo sed as fixed
// phrases, not as conjugation. That is the runbook's "grammar has no item type"
// rule applied honestly: the pattern lives in the example sentences, and unit 13
// still owns doler and tener as verbs. A body unit that can't say "my head hurts"
// teaches labels, not language.
// Lessons 1-2 stay verb-free — body parts are described with the colors and
// adjectives from units 8 and 10, which is also why this unit sits after them.
export const ES_UNIT11 = {
  id: "es-u11",
  lang: "es",
  title: "Body and health",
  order: 11,
  stage: "a1",
  lessons: [
    {
      id: "es-u11l1",
      unit: 11,
      lesson: 1,
      title: "Head and face",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what's on your head: el pelo, la cabeza, la cara, el ojo, la nariz, la boca.",
      items: [
        { id: "es-u11l1-pelo", type: "vocab", front: "el pelo", reading: "elpelo", meaning: "hair", example: { jp: "El pelo de María es negro.", en: "María's hair is black." }, accept: ["the hair"], hint: "Singular in Spanish — el pelo is all of it at once, not \"hairs\"." },
        { id: "es-u11l1-cabeza", type: "vocab", front: "la cabeza", reading: "lacabeza", meaning: "head", example: { jp: "El pelo está en la cabeza.", en: "The hair is on the head." }, accept: ["the head"], hint: "Same root as \"captain\" and \"capital\" — all of them are about the head of something." },
        { id: "es-u11l1-cara", type: "vocab", front: "la cara", reading: "lacara", meaning: "face", example: { jp: "La cara de Carlos está limpia.", en: "Carlos's face is clean." }, accept: ["the face"], hint: "Don't mix it up with caro, expensive — one letter apart." },
        { id: "es-u11l1-ojo", type: "vocab", front: "el ojo", reading: "elojo", meaning: "eye", example: { jp: "Los ojos de María son azules.", en: "María's eyes are blue." }, accept: ["the eye", "eyes"], hint: "You have two: el ojo → los ojos. ¡Ojo! on its own means \"watch out!\"" },
        { id: "es-u11l1-nariz", type: "vocab", front: "la nariz", reading: "lanariz", meaning: "nose", example: { jp: "La nariz está en la cara.", en: "The nose is on the face." }, accept: ["the nose"], hint: "Same root as \"nasal\"." },
        { id: "es-u11l1-boca", type: "vocab", front: "la boca", reading: "laboca", meaning: "mouth", example: { jp: "La nariz y la boca están en la cara.", en: "The nose and the mouth are on the face." }, accept: ["the mouth"], hint: "Also the mouth of a river or a street — la boca del metro is the subway entrance." },
      ],
    },
    {
      id: "es-u11l2",
      unit: 11,
      lesson: 2,
      title: "The rest of the body",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the body from the shoulders down: el cuerpo, el brazo, la mano, el dedo, la pierna, el pie.",
      items: [
        { id: "es-u11l2-cuerpo", type: "vocab", front: "el cuerpo", reading: "elcuerpo", meaning: "body", example: { jp: "En el cuerpo hay mucha agua.", en: "There's a lot of water in the body." }, accept: ["the body"], hint: "Same root as \"corporal\" and \"corpse\"." },
        { id: "es-u11l2-brazo", type: "vocab", front: "el brazo", reading: "elbrazo", meaning: "arm", example: { jp: "El brazo es largo.", en: "The arm is long." }, accept: ["the arm"], hint: "English \"embrace\" comes from the same root — what you do with los brazos." },
        { id: "es-u11l2-mano", type: "vocab", front: "la mano", reading: "lamano", meaning: "hand", example: { jp: "La mano está en el brazo.", en: "The hand is on the arm." }, accept: ["the hand"], hint: "Ends in -o but it's feminine: la mano, las manos. One of the few exceptions worth memorising." },
        { id: "es-u11l2-dedo", type: "vocab", front: "el dedo", reading: "eldedo", meaning: "finger", example: { jp: "En la mano hay cinco dedos.", en: "There are five fingers on the hand." }, accept: ["the finger", "toe", "digit"], hint: "Spanish uses one word for both ends — a toe is un dedo del pie, a \"finger of the foot\"." },
        { id: "es-u11l2-pierna", type: "vocab", front: "la pierna", reading: "lapierna", meaning: "leg", example: { jp: "En el cuerpo hay dos piernas.", en: "There are two legs on the body." }, accept: ["the leg"] },
        { id: "es-u11l2-pie", type: "vocab", front: "el pie", reading: "elpie", meaning: "foot", example: { jp: "El pie está en la pierna.", en: "The foot is on the leg." }, accept: ["the foot"], hint: "Same root as \"pedal\" and \"pedestrian\". A pie means \"on foot\"." },
      ],
    },
    {
      id: "es-u11l3",
      unit: 11,
      lesson: 3,
      title: "Saying it hurts",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what hurts and where to go about it: me duele, la espalda, enfermo, el hospital, el médico, la medicina.",
      items: [
        { id: "es-u11l3-meduele", type: "vocab", front: "me duele", reading: "meduele", meaning: "it hurts", example: { jp: "Me duele la cabeza.", en: "My head hurts." }, accept: ["my ... hurts", "it aches", "i have a pain"], hint: "Literally \"it pains me\", so the body part is the subject: me duele la cabeza. Two of them and it becomes me duelen: me duelen los pies." },
        { id: "es-u11l3-espalda", type: "vocab", front: "la espalda", reading: "laespalda", meaning: "back", example: { jp: "Me duele la espalda.", en: "My back hurts." }, accept: ["the back", "upper back"], hint: "The back of a body only — the back of a room is el fondo." },
        { id: "es-u11l3-enfermo", type: "vocab", front: "enfermo", reading: "enfermo", meaning: "sick", example: { jp: "Carlos está enfermo hoy.", en: "Carlos is sick today." }, accept: ["ill", "unwell"], hint: "Always with estar — está enfermo means ill right now, which is the point." },
        { id: "es-u11l3-hospital", type: "vocab", front: "el hospital", reading: "elhospital", meaning: "hospital", example: { jp: "Hay un hospital en el centro de la ciudad.", en: "There's a hospital in the city centre." }, accept: ["the hospital"], hint: "Silent h again: os-pi-TAL, with the stress on the end." },
        { id: "es-u11l3-medico", type: "vocab", front: "el médico", reading: "elmedico", meaning: "doctor", example: { jp: "El médico está en el hospital.", en: "The doctor is at the hospital." }, accept: ["the doctor", "physician", "gp"], hint: "La médica for a woman. El doctor / la doctora works too." },
        { id: "es-u11l3-medicina", type: "vocab", front: "la medicina", reading: "lamedicina", meaning: "medicine", example: { jp: "Hay medicina en la farmacia.", en: "There's medicine at the pharmacy." }, accept: ["the medicine", "medication", "drug"] },
      ],
    },
    {
      id: "es-u11l4",
      unit: 11,
      lesson: 4,
      title: "How you feel",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how you're doing: tengo frío, tengo calor, tengo hambre, tengo sed, cansado, la salud.",
      items: [
        { id: "es-u11l4-tengofrio", type: "vocab", front: "tengo frío", reading: "tengofrio", meaning: "I'm cold", example: { jp: "Hoy hace frío y tengo frío.", en: "It's cold today and I'm cold." }, accept: ["i am cold", "i feel cold"], hint: "Spanish HAS cold rather than being it: tengo frío. Compare hace frío, which is the weather, not you." },
        { id: "es-u11l4-tengocalor", type: "vocab", front: "tengo calor", reading: "tengocalor", meaning: "I'm hot", example: { jp: "En agosto tengo calor.", en: "In August I'm hot." }, accept: ["i am hot", "i feel hot"], hint: "Same pattern as tengo frío — and the weather version is still hace calor." },
        { id: "es-u11l4-tengohambre", type: "vocab", front: "tengo hambre", reading: "tengohambre", meaning: "I'm hungry", example: { jp: "Hoy tengo mucha hambre.", en: "I'm very hungry today." }, accept: ["i am hungry", "i feel hungry"], hint: "Mucha, not muy — because hambre is a noun. Literally \"I have much hunger\"." },
        { id: "es-u11l4-tengosed", type: "vocab", front: "tengo sed", reading: "tengosed", meaning: "I'm thirsty", example: { jp: "Hace calor y tengo sed.", en: "It's hot and I'm thirsty." }, accept: ["i am thirsty", "i feel thirsty"] },
        { id: "es-u11l4-cansado", type: "vocab", front: "cansado", reading: "cansado", meaning: "tired", example: { jp: "Carlos está cansado.", en: "Carlos is tired." }, accept: ["worn out", "sleepy", "exhausted"], hint: "A state, so estar: está cansado. Cansada for a woman." },
        { id: "es-u11l4-salud", type: "vocab", front: "la salud", reading: "lasalud", meaning: "health", example: { jp: "La salud es muy importante.", en: "Health is very important." }, accept: ["the health", "wellbeing"], hint: "¡Salud! is also the toast you raise a glass with — and what you say when someone sneezes." },
      ],
    },
  ],
};
