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
        { id: "es-u68l1-elnoviazgo", type: "vocab", front: "el noviazgo", reading: "elnoviazgo", meaning: "the relationship", example: { jp: "Su noviazgo duró cinco años, así que la boda no sorprendió a nadie.", en: "Their relationship lasted five years, so the wedding surprised no one." }, drill: { jp: "El noviazgo de mi hija es largo", en: "My daughter's relationship is long" }, accept: ["courtship", "the engagement", "going out"], hint: "From novio/novia (boyfriend/girlfriend) — the time a couple spends together before marriage." },
        { id: "es-u68l1-elmatrimonio", type: "vocab", front: "el matrimonio", reading: "elmatrimonio", meaning: "the marriage", example: { jp: "El matrimonio fue en junio, de modo que toda la familia pudo venir.", en: "The wedding was in June, so the whole family was able to come." }, drill: { jp: "El matrimonio de mis padres es feliz", en: "My parents' marriage is happy" }, accept: ["marriage", "the wedding", "matrimony"], hint: "Both the wedding and the marriage that follows — and also the married couple itself." },
        { id: "es-u68l1-eldivorcio", type: "vocab", front: "el divorcio", reading: "eldivorcio", meaning: "the divorce", example: { jp: "Después del divorcio, siguieron siendo amigos por sus hijos.", en: "After the divorce, they stayed friends for their children's sake." }, drill: { jp: "El divorcio de mi hermano es reciente", en: "My brother's divorce is recent" }, accept: ["divorce", "the separation"], hint: "The verb is divorciarse." },
        { id: "es-u68l1-elcarino", type: "vocab", front: "el cariño", reading: "elcarino", meaning: "affection", example: { jp: "Se tratan con mucho cariño, aunque discutan de vez en cuando.", en: "They treat each other with great affection, although they argue now and then." }, drill: { jp: "El cariño de mi abuela es enorme", en: "My grandmother's affection is enormous" }, accept: ["fondness", "warmth", "love"], hint: "The warmth between people who care for each other. Con cariño closes a warm letter." },
        { id: "es-u68l1-casarse", type: "vocab", front: "casarse", reading: "casarse", meaning: "to get married", example: { jp: "Se casaron muy jóvenes, aunque sus familias no estaban de acuerdo.", en: "They got married very young, although their families didn't agree." }, drill: { jp: "Casarse en verano es normal", en: "Getting married in summer is normal" }, accept: ["to marry", "to wed"], hint: "casarse con alguien — note it's \"with\", not \"to\". Nothing to do with casa, house, despite the look." },
        { id: "es-u68l1-elafecto", type: "vocab", front: "el afecto", reading: "elafecto", meaning: "affection", example: { jp: "Habla de sus abuelos con mucho afecto.", en: "She speaks about her grandparents with great affection." }, drill: { jp: "El afecto de la familia es importante", en: "The family's affection is important" }, accept: ["affection", "fondness", "warmth"], hint: "More formal than el cariño, the card before. Tomar afecto a alguien = to grow fond of someone." },
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
        { id: "es-u68l2-elvinculo", type: "vocab", front: "el vínculo", reading: "elvinculo", meaning: "the bond", example: { jp: "El vínculo entre los dos hermanos es muy fuerte, aunque vivan lejos.", en: "The bond between the two brothers is very strong, even though they live far apart." }, drill: { jp: "El vínculo entre los dos es fuerte", en: "The bond between the two is strong" }, accept: ["link", "the tie", "connection"] },
        { id: "es-u68l2-elcompromiso", type: "vocab", front: "el compromiso", reading: "elcompromiso", meaning: "the commitment", example: { jp: "El matrimonio es un compromiso, por lo que hay que pensarlo bien.", en: "Marriage is a commitment, which is why it needs careful thought." }, drill: { jp: "El compromiso con el equipo es serio", en: "The commitment to the team is serious" }, accept: ["commitment", "the pledge", "engagement"], hint: "Also an engagement to marry, and a compromise. Context tells them apart." },
        { id: "es-u68l2-laruptura", type: "vocab", front: "la ruptura", reading: "laruptura", meaning: "the break-up", example: { jp: "Después de la ruptura, se mudó a otra ciudad para empezar de nuevo.", en: "After the break-up, she moved to another city to start again." }, drill: { jp: "La ruptura de la pareja es reciente", en: "The couple's break-up is recent" }, accept: ["break-up", "the split", "breach"], hint: "From romper (A2), to break — the moment a relationship breaks." },
        { id: "es-u68l2-separarse", type: "vocab", front: "separarse", reading: "separarse", meaning: "to separate", example: { jp: "Se separaron hace un año, aunque siguen viviendo en la misma ciudad.", en: "They separated a year ago, although they still live in the same city." }, drill: { jp: "Separarse de un amigo es duro", en: "Separating from a friend is hard" }, accept: ["to split up", "to part", "to break up"], hint: "separarse de alguien. The opposite, to get together, is juntarse." },
        { id: "es-u68l2-lageneracion", type: "vocab", front: "la generación", reading: "lageneracion", meaning: "the generation", example: { jp: "Su generación creció con internet, mientras que mis padres lo descubrieron más tarde.", en: "His generation grew up with the internet, whereas my parents discovered it later." }, drill: { jp: "La generación de mis padres trabaja mucho", en: "My parents' generation works a lot" }, accept: ["generation", "the age group"] },
        { id: "es-u68l2-elvecindario", type: "vocab", front: "el vecindario", reading: "elvecindario", meaning: "the neighbourhood", example: { jp: "Todo el vecindario se lleva bien, lo cual no siempre pasa en la ciudad.", en: "The whole neighbourhood gets on well, which isn't always the case in a city." }, drill: { jp: "El vecindario es muy tranquilo", en: "The neighbourhood is very calm" }, accept: ["neighborhood", "the neighbours", "vicinity"], hint: "The PEOPLE around you, collectively; el barrio (A2) is the place." },
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
        { id: "es-u68l3-lasolidaridad", type: "vocab", front: "la solidaridad", reading: "lasolidaridad", meaning: "solidarity", example: { jp: "Después de la inundación, la solidaridad entre los vecinos fue enorme.", en: "After the flood, the solidarity between neighbours was enormous." }, drill: { jp: "La solidaridad del barrio es enorme", en: "The neighbourhood's solidarity is enormous" }, accept: ["the solidarity", "mutual support"] },
        { id: "es-u68l3-laintegracion", type: "vocab", front: "la integración", reading: "laintegracion", meaning: "integration", example: { jp: "La integración lleva tiempo, y la lengua tiene un papel muy importante.", en: "Integration takes time, and language plays a very important role." }, drill: { jp: "La integración del grupo es lenta", en: "The group's integration is slow" }, accept: ["the integration", "inclusion"] },
        { id: "es-u68l3-ladiversidad", type: "vocab", front: "la diversidad", reading: "ladiversidad", meaning: "diversity", example: { jp: "La diversidad de esta ciudad se nota en sus restaurantes y en sus fiestas.", en: "The diversity of this city can be seen in its restaurants and its festivals." }, drill: { jp: "La diversidad de la ciudad es enorme", en: "The city's diversity is enormous" }, accept: ["the diversity", "variety"] },
        { id: "es-u68l3-laidentidad", type: "vocab", front: "la identidad", reading: "laidentidad", meaning: "the identity", example: { jp: "La identidad de un pueblo está en su lengua y en sus costumbres, no solo en su historia.", en: "A people's identity lies in its language and its customs, not only in its history." }, drill: { jp: "La identidad del pueblo es fuerte", en: "The town's identity is strong" }, accept: ["identity", "who someone is"], hint: "El documento de identidad is the ID card that proves who you are." },
        { id: "es-u68l3-pertenecer", type: "vocab", front: "pertenecer", reading: "pertenecer", meaning: "to belong", example: { jp: "Pertenecer a un grupo es importante, sobre todo cuando llegas a un país nuevo.", en: "Belonging to a group is important, especially when you arrive in a new country." }, drill: { jp: "Pertenecer a un grupo es importante", en: "Belonging to a group is important" }, accept: ["to be part of", "to be a member of"], hint: "pertenecer a algo. Like conocer, the yo form is pertenezco." },
        { id: "es-u68l3-laacogida", type: "vocab", front: "la acogida", reading: "laacogida", meaning: "the welcome", example: { jp: "La acogida de los vecinos fue muy buena, así que se sintió en casa enseguida.", en: "The neighbours' welcome was very warm, so he felt at home straight away." }, drill: { jp: "La acogida del pueblo es cálida", en: "The town's welcome is warm" }, accept: ["the reception", "welcome"], hint: "The noun beside acoger, to take someone in. Un centro de acogida is a shelter." },
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
        { id: "es-u68l4-ladesigualdad", type: "vocab", front: "la desigualdad", reading: "ladesigualdad", meaning: "inequality", example: { jp: "La desigualdad entre hombres y mujeres sigue siendo fuerte en el trabajo.", en: "Inequality between men and women is still strong at work." }, drill: { jp: "La desigualdad del país es enorme", en: "The country's inequality is enormous" }, accept: ["the inequality", "disparity"], hint: "des- + igualdad (from igual). The opposite is la igualdad, equality." },
        { id: "es-u68l4-ladiscriminacion", type: "vocab", front: "la discriminación", reading: "ladiscriminacion", meaning: "discrimination", example: { jp: "La discriminación está prohibida por la ley, y sin embargo continúa.", en: "Discrimination is forbidden by law, and yet it continues." }, drill: { jp: "La discriminación es un problema serio", en: "Discrimination is a serious problem" }, accept: ["the discrimination", "unfair treatment"] },
        { id: "es-u68l4-excluir", type: "vocab", front: "excluir", reading: "excluir", meaning: "to exclude", example: { jp: "Nadie quiere excluir a los nuevos, pero pasa a menudo sin querer.", en: "Nobody wants to exclude the newcomers, but it often happens without meaning to." }, drill: { jp: "Excluir a alguien es muy grave", en: "Excluding someone is very serious" }, accept: ["to leave out", "to shut out"], hint: "The opposite is incluir, to include. Both take -uy- in the present: excluyo." },
        { id: "es-u68l4-tolerante", type: "vocab", front: "tolerante", reading: "tolerante", meaning: "tolerant", example: { jp: "Esta ciudad es tolerante, así que mucha gente distinta viene a vivir aquí.", en: "This city is tolerant, so many different people come to live here." }, drill: { jp: "Mi vecino es muy tolerante", en: "My neighbour is very tolerant" }, accept: ["open-minded", "broad-minded"], hint: "The noun is la tolerancia; the verb tolerar, to put up with." },
        { id: "es-u68l4-laexclusion", type: "vocab", front: "la exclusión", reading: "laexclusion", meaning: "exclusion", example: { jp: "La exclusión social afecta sobre todo a los más pobres.", en: "Social exclusion affects the poorest most of all." }, drill: { jp: "La exclusión del grupo es dura", en: "Exclusion from the group is harsh" }, accept: ["exclusion", "marginalization"], hint: "The noun of excluir, the card before it. La exclusión social is the fixed phrase." },
        { id: "es-u68l4-vulnerable", type: "vocab", front: "vulnerable", reading: "vulnerable", meaning: "vulnerable", example: { jp: "Los grupos más vulnerables necesitan más ayuda del estado.", en: "The most vulnerable groups need more help from the state." }, drill: { jp: "El barrio es especialmente vulnerable", en: "The neighbourhood is especially vulnerable" }, accept: ["vulnerable", "at risk"], hint: "Of the people a problem hits hardest: los colectivos vulnerables." },
      ],
    },
  ],
};
