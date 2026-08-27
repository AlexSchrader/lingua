// ES Unit 68 — Las relaciones (slot: relationships) — B1
// SCOPE BOUNDARY: block 1's Unit 57 is "emotion, finer shades", so this unit stays
// off feelings and takes RELATIONSHIPS as structures — the tie between two people,
// and the ties that hold a society together. A2 already owns the character
// adjectives and llevarse bien, confiar (u31), and the civic nouns la sociedad, el
// gobierno, la ley, el ciudadano (u32). Examples are two clauses. Every front is a
// level up.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT68 = {
  id: "es-u68",
  lang: "es",
  title: "Las relaciones",
  order: 68,
  stage: "b1",
  lessons: [
    {
      id: "es-u68l1",
      unit: 68,
      lesson: 1,
      title: "Close ties",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a relationship over time — el noviazgo, el matrimonio, el divorcio, el cariño, casarse, discutir.",
      items: [
        { id: "es-u68l1-elnoviazgo", type: "vocab", front: "el noviazgo", reading: "elnoviazgo", meaning: "the relationship", example: { jp: "Su noviazgo duró cinco años, así que la boda no sorprendió a nadie.", en: "Their relationship lasted five years, so the wedding surprised no one." }, accept: ["courtship", "the engagement", "going out"], hint: "From novio/novia (boyfriend/girlfriend) — the time a couple spends together before marriage." },
        { id: "es-u68l1-elmatrimonio", type: "vocab", front: "el matrimonio", reading: "elmatrimonio", meaning: "the marriage", example: { jp: "El matrimonio fue en junio, de modo que toda la familia pudo venir.", en: "The wedding was in June, so the whole family was able to come." }, accept: ["marriage", "the wedding", "matrimony"], hint: "Both the wedding and the marriage that follows — and also the married couple itself." },
        { id: "es-u68l1-eldivorcio", type: "vocab", front: "el divorcio", reading: "eldivorcio", meaning: "the divorce", example: { jp: "Después del divorcio, siguieron siendo amigos por sus hijos.", en: "After the divorce, they stayed friends for their children's sake." }, accept: ["divorce", "the separation"], hint: "The verb is divorciarse." },
        { id: "es-u68l1-elcarino", type: "vocab", front: "el cariño", reading: "elcarino", meaning: "affection", example: { jp: "Se tratan con mucho cariño, aunque discutan de vez en cuando.", en: "They treat each other with great affection, although they argue now and then." }, accept: ["fondness", "warmth", "love"], hint: "The warmth between people who care for each other. Con cariño closes a warm letter." },
        { id: "es-u68l1-casarse", type: "vocab", front: "casarse", reading: "casarse", meaning: "to get married", example: { jp: "Se casaron muy jóvenes, aunque sus familias no estaban de acuerdo.", en: "They got married very young, although their families didn't agree." }, accept: ["to marry", "to wed"], hint: "casarse con alguien — note it's \"with\", not \"to\". Nothing to do with casa, house, despite the look." },
        { id: "es-u68l1-discutir", type: "vocab", front: "discutir", reading: "discutir", meaning: "to argue", example: { jp: "Discuten a menudo, pero nunca dura mucho tiempo.", en: "They argue often, but it never lasts long." }, accept: ["to quarrel", "to have a row", "to discuss"], hint: "Careful: it usually means to argue/quarrel, not calmly \"to discuss\" — that's hablar de or debatir." },
      ],
    },
    {
      id: "es-u68l2",
      unit: 68,
      lesson: 2,
      title: "Ties that hold or break",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the bond itself — el vínculo, el compromiso, la ruptura, separarse, la generación, el vecindario.",
      items: [
        { id: "es-u68l2-elvinculo", type: "vocab", front: "el vínculo", reading: "elvinculo", meaning: "the bond", example: { jp: "El vínculo entre los dos hermanos es muy fuerte, aunque vivan lejos.", en: "The bond between the two brothers is very strong, even though they live far apart." }, accept: ["link", "the tie", "connection"] },
        { id: "es-u68l2-elcompromiso", type: "vocab", front: "el compromiso", reading: "elcompromiso", meaning: "the commitment", example: { jp: "El matrimonio es un compromiso, por lo que hay que pensarlo bien.", en: "Marriage is a commitment, which is why it needs careful thought." }, accept: ["commitment", "the pledge", "engagement"], hint: "Also an engagement to marry, and a compromise. Context tells them apart." },
        { id: "es-u68l2-laruptura", type: "vocab", front: "la ruptura", reading: "laruptura", meaning: "the break-up", example: { jp: "Después de la ruptura, se mudó a otra ciudad para empezar de nuevo.", en: "After the break-up, she moved to another city to start again." }, accept: ["break-up", "the split", "breach"], hint: "From romper (this lesson)." },
        { id: "es-u68l2-separarse", type: "vocab", front: "separarse", reading: "separarse", meaning: "to separate", example: { jp: "Se separaron hace un año, aunque siguen viviendo en la misma ciudad.", en: "They separated a year ago, although they still live in the same city." }, accept: ["to split up", "to part", "to break up"], hint: "separarse de alguien. The opposite, to get together, is juntarse." },
        { id: "es-u68l2-lageneracion", type: "vocab", front: "la generación", reading: "lageneracion", meaning: "the generation", example: { jp: "Su generación creció con internet, mientras que mis padres lo descubrieron más tarde.", en: "His generation grew up with the internet, whereas my parents discovered it later." }, accept: ["generation", "the age group"] },
        { id: "es-u68l2-elvecindario", type: "vocab", front: "el vecindario", reading: "elvecindario", meaning: "the neighbourhood", example: { jp: "Todo el vecindario se lleva bien, lo cual no siempre pasa en la ciudad.", en: "The whole neighbourhood gets on well, which isn't always the case in a city." }, accept: ["neighborhood", "the neighbours", "vicinity"], hint: "The PEOPLE around you, collectively; el barrio (A2) is the place." },
      ],
    },
    {
      id: "es-u68l3",
      unit: 68,
      lesson: 3,
      title: "Belonging",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a group and your place in it — la solidaridad, la integración, la diversidad, la identidad, pertenecer, la acogida.",
      items: [
        { id: "es-u68l3-lasolidaridad", type: "vocab", front: "la solidaridad", reading: "lasolidaridad", meaning: "solidarity", example: { jp: "Después de la inundación, la solidaridad entre los vecinos fue enorme.", en: "After the flood, the solidarity between neighbours was enormous." }, accept: ["the solidarity", "mutual support"] },
        { id: "es-u68l3-laintegracion", type: "vocab", front: "la integración", reading: "laintegracion", meaning: "integration", example: { jp: "La integración lleva tiempo, y la lengua tiene un papel muy importante.", en: "Integration takes time, and language plays a very important role." }, accept: ["the integration", "inclusion"] },
        { id: "es-u68l3-ladiversidad", type: "vocab", front: "la diversidad", reading: "ladiversidad", meaning: "diversity", example: { jp: "La diversidad de esta ciudad se nota en sus restaurantes y en sus fiestas.", en: "The diversity of this city can be seen in its restaurants and its festivals." }, accept: ["the diversity", "variety"] },
        { id: "es-u68l3-laidentidad", type: "vocab", front: "la identidad", reading: "laidentidad", meaning: "the identity", example: { jp: "La identidad de un pueblo está en su lengua y en sus costumbres, no solo en su historia.", en: "A people's identity lies in its language and its customs, not only in its history." }, accept: ["identity", "who someone is"], hint: "El documento de identidad is the ID card that proves who you are." },
        { id: "es-u68l3-pertenecer", type: "vocab", front: "pertenecer", reading: "pertenecer", meaning: "to belong", example: { jp: "Pertenecer a un grupo es importante, sobre todo cuando llegas a un país nuevo.", en: "Belonging to a group is important, especially when you arrive in a new country." }, accept: ["to be part of", "to be a member of"], hint: "pertenecer a algo. Like conocer, the yo form is pertenezco." },
        { id: "es-u68l3-laacogida", type: "vocab", front: "la acogida", reading: "laacogida", meaning: "the welcome", example: { jp: "La acogida de los vecinos fue muy buena, así que se sintió en casa enseguida.", en: "The neighbours' welcome was very warm, so he felt at home straight away." }, accept: ["the reception", "welcome"], hint: "The noun beside acoger, to take someone in. Un centro de acogida is a shelter." },
      ],
    },
    {
      id: "es-u68l4",
      unit: 68,
      lesson: 4,
      title: "When society fails people",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name social problems precisely — la desigualdad, la discriminación, el prejuicio, excluir, tolerante, el conflicto.",
      items: [
        { id: "es-u68l4-ladesigualdad", type: "vocab", front: "la desigualdad", reading: "ladesigualdad", meaning: "inequality", example: { jp: "La desigualdad entre hombres y mujeres sigue siendo fuerte en el trabajo.", en: "Inequality between men and women is still strong at work." }, accept: ["the inequality", "disparity"], hint: "des- + igualdad (from igual). The opposite is la igualdad, equality." },
        { id: "es-u68l4-ladiscriminacion", type: "vocab", front: "la discriminación", reading: "ladiscriminacion", meaning: "discrimination", example: { jp: "La discriminación está prohibida por la ley, y sin embargo continúa.", en: "Discrimination is forbidden by law, and yet it continues." }, accept: ["the discrimination", "unfair treatment"] },
        { id: "es-u68l4-elprejuicio", type: "vocab", front: "el prejuicio", reading: "elprejuicio", meaning: "the prejudice", example: { jp: "Cuesta cambiar los prejuicios, porque empiezan cuando somos muy pequeños.", en: "It's hard to change prejudices, because they begin when we're very small." }, accept: ["prejudice", "the bias", "preconception"], hint: "Literally a \"pre-judgement\" — pre + juicio, a judgment made in advance." },
        { id: "es-u68l4-excluir", type: "vocab", front: "excluir", reading: "excluir", meaning: "to exclude", example: { jp: "Nadie quiere excluir a los nuevos, pero pasa a menudo sin querer.", en: "Nobody wants to exclude the newcomers, but it often happens without meaning to." }, accept: ["to leave out", "to shut out"], hint: "The opposite is incluir, to include. Both take -uy- in the present: excluyo." },
        { id: "es-u68l4-tolerante", type: "vocab", front: "tolerante", reading: "tolerante", meaning: "tolerant", example: { jp: "Esta ciudad es tolerante, así que mucha gente distinta viene a vivir aquí.", en: "This city is tolerant, so many different people come to live here." }, accept: ["open-minded", "broad-minded"], hint: "The noun is la tolerancia; the verb tolerar, to put up with." },
        { id: "es-u68l4-elconflicto", type: "vocab", front: "el conflicto", reading: "elconflicto", meaning: "the conflict", example: { jp: "El conflicto entre las dos familias dura desde hace años, y nadie recuerda cómo empezó.", en: "The conflict between the two families has lasted for years, and nobody remembers how it started." }, accept: ["conflict", "the dispute", "clash"] },
      ],
    },
  ],
};
