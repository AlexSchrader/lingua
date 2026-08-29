// ES Unit 99 — Identity and society (slot: identity) — B2
// Authored: block 1, group 1. 4 lessons x 6 cards.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it.
//   OWNS: Belonging at the scale of a society — difference, integration, minority,
//         cohesion, prejudice as a social force.
//   NOT:  Personal relationships and close ties (u68) and public health or education
//         systems (u102, u103).
export const ES_UNIT99 = {
  id: "es-u99",
  lang: "es",
  title: "La identidad y la sociedad",
  order: 99,
  stage: "b2",
  lessons: [
    {
      id: "es-u99l1",
      unit: 99,
      lesson: 1,
      title: "El grupo y el arraigo",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about belonging to a group: name a collective and the social fabric, speak of cohesion and roots, and refer to an ethnic group or a line of descent.",
      items: [
        { id: "es-u99l1-elcolectivo", type: "vocab", front: "el colectivo", reading: "elcolectivo", meaning: "the group / community", example: { jp: "El colectivo lleva años pidiendo lo mismo.", en: "The group has been asking for the same thing for years." }, accept: ["the group", "the community", "the collective"], hint: "A group defined by something shared: el colectivo médico, el colectivo de vecinos. Neutral and very common in the press." },
        { id: "es-u99l1-lacohesion", type: "vocab", front: "la cohesión", reading: "lacohesion", meaning: "cohesion", example: { jp: "El paro ha debilitado la cohesión de todo el barrio.", en: "Unemployment has weakened the cohesion of the whole neighbourhood." }, accept: ["cohesion", "the cohesion", "unity"], hint: "What holds a society together. La cohesión social is the standard phrase in policy documents." },
        { id: "es-u99l1-eltejidosocial", type: "vocab", front: "el tejido social", reading: "eltejidosocial", meaning: "the social fabric", example: { jp: "La fábrica sostenía el tejido social de todo el pueblo.", en: "The factory held up the social fabric of the whole town." }, accept: ["the social fabric", "the social fibre", "the community fabric"], hint: "Literally the social weave. The everyday web of ties that a crisis can tear." },
        { id: "es-u99l1-elarraigo", type: "vocab", front: "el arraigo", reading: "elarraigo", meaning: "the roots / attachment", example: { jp: "La fiesta tiene mucho arraigo en los pueblos del valle.", en: "The festival is deeply rooted in the villages of the valley." }, accept: ["the roots", "the attachment", "rootedness"], hint: "From raíz. Tener arraigo = to be deeply rooted. Its opposite, el desarraigo, is uprootedness." },
        { id: "es-u99l1-laetnia", type: "vocab", front: "la etnia", reading: "laetnia", meaning: "the ethnic group", example: { jp: "En el país conviven muchas etnias distintas.", en: "Many different ethnic groups live side by side in the country." }, accept: ["the ethnic group", "the ethnicity", "the people"], hint: "Étnico is the adjective. Neutral where la raza is loaded and largely avoided." },
        { id: "es-u99l1-ellinaje", type: "vocab", front: "el linaje", reading: "ellinaje", meaning: "the lineage", example: { jp: "Presumía de un linaje que nadie podía comprobar.", en: "He boasted of a lineage nobody could verify." }, accept: ["the lineage", "the ancestry", "the descent", "the bloodline"], hint: "A line of descent, usually a distinguished one. More formal and older-sounding than la familia." },
      ],
    },
    {
      id: "es-u99l2",
      unit: 99,
      lesson: 2,
      title: "La mezcla y la diferencia",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a mixed society: name cultural mixing and pluralism, say groups coexist, and distinguish what is native from what came from outside.",
      items: [
        { id: "es-u99l2-elmestizaje", type: "vocab", front: "el mestizaje", reading: "elmestizaje", meaning: "cultural mixing", example: { jp: "La cocina del país es fruto de un largo mestizaje.", en: "The country's cooking is the fruit of a long process of mixing." }, accept: ["cultural mixing", "the mixing", "blending", "miscegenation"], hint: "Of peoples and of cultures. In Latin America it carries a large historical weight." },
        { id: "es-u99l2-elpluralismo", type: "vocab", front: "el pluralismo", reading: "elpluralismo", meaning: "pluralism", example: { jp: "Defienden el pluralismo como una riqueza, no como un problema.", en: "They defend pluralism as a richness, not as a problem." }, accept: ["pluralism", "the pluralism"], hint: "The principle that many ways of living can share one society. Plural is the adjective." },
        { id: "es-u99l2-lacoexistencia", type: "vocab", front: "la coexistencia", reading: "lacoexistencia", meaning: "coexistence", example: { jp: "La coexistencia de los dos idiomas no siempre fue fácil.", en: "The coexistence of the two languages was not always easy." }, accept: ["coexistence", "the coexistence", "living side by side"], hint: "Sharing the same space. La convivencia adds warmth: getting along, not merely coexisting." },
        { id: "es-u99l2-autoctono", type: "vocab", front: "autóctono", reading: "autoctono", meaning: "native / indigenous", example: { jp: "Solo dos de esas especies son autóctonas.", en: "Only two of those species are native." }, accept: ["native", "indigenous", "local"], hint: "Of peoples, plants and customs that originated where they are. Its opposite is foráneo." },
        { id: "es-u99l2-foraneo", type: "vocab", front: "foráneo", reading: "foraneo", meaning: "foreign / from elsewhere", example: { jp: "Rechazaban toda costumbre foránea.", en: "They rejected every custom from elsewhere." }, accept: ["foreign", "from elsewhere", "outside", "alien"], hint: "More formal than extranjero and not tied to nationality: it just means not from here." },
        { id: "es-u99l2-elcrisol", type: "vocab", front: "el crisol", reading: "elcrisol", meaning: "the melting pot", example: { jp: "La ciudad fue un crisol de idiomas y culturas.", en: "The city was a melting pot of languages and cultures." }, accept: ["the melting pot", "the crucible"], hint: "Literally the crucible a metalworker melts in. Un crisol de culturas is the set phrase." },
      ],
    },
    {
      id: "es-u99l3",
      unit: 99,
      lesson: 3,
      title: "El prejuicio y el estigma",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name prejudice as a social force: talk about stereotypes, racism, xenophobia and intolerance, and describe a stigma or a wary suspicion of outsiders.",
      items: [
        { id: "es-u99l3-elestereotipo", type: "vocab", front: "el estereotipo", reading: "elestereotipo", meaning: "the stereotype", example: { jp: "La serie repite todos los estereotipos sobre la región.", en: "The series repeats every stereotype about the region." }, accept: ["the stereotype", "the cliché"], hint: "A fixed image applied to a whole group. Estereotipado = stereotyped." },
        { id: "es-u99l3-elracismo", type: "vocab", front: "el racismo", reading: "elracismo", meaning: "racism", example: { jp: "El racismo en el estadio obligó a suspender el partido.", en: "The racism in the stadium forced the match to be suspended." }, accept: ["racism", "the racism"], hint: "Racista covers both the person and the adjective: un comentario racista." },
        { id: "es-u99l3-laxenofobia", type: "vocab", front: "la xenofobia", reading: "laxenofobia", meaning: "xenophobia", example: { jp: "La crisis alimentó la xenofobia en varias ciudades.", en: "The crisis fed xenophobia in several cities." }, accept: ["xenophobia", "the xenophobia", "fear of foreigners"], hint: "Fear or hatred of foreigners specifically. The initial x is pronounced like an s." },
        { id: "es-u99l3-laintolerancia", type: "vocab", front: "la intolerancia", reading: "laintolerancia", meaning: "intolerance", example: { jp: "Respondieron a la intolerancia con una marcha pacífica.", en: "They answered intolerance with a peaceful march." }, accept: ["intolerance", "the intolerance", "bigotry"], hint: "Refusing to accept difference. Also medical: la intolerancia a la lactosa." },
        { id: "es-u99l3-elestigma", type: "vocab", front: "el estigma", reading: "elestigma", meaning: "the stigma", example: { jp: "Todavía existe un fuerte estigma sobre este tema.", en: "There is still a strong stigma about this subject." }, accept: ["the stigma", "the mark", "the shame"], hint: "Masculine despite the -a. Estigmatizar = to stigmatise." },
        { id: "es-u99l3-elrecelo", type: "vocab", front: "el recelo", reading: "elrecelo", meaning: "the wariness / mistrust", example: { jp: "En el pueblo los trataron con recelo durante años.", en: "In the village they were treated with wariness for years." }, accept: ["the wariness", "the mistrust", "the suspicion", "misgiving"], hint: "Quiet, unspoken distrust of the unfamiliar. Recelar de alguien is the verb." },
      ],
    },
    {
      id: "es-u99l4",
      unit: 99,
      lesson: 4,
      title: "La brecha y la exclusión",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a divided society: name a gap and a rift, refer to a ghetto and the outskirts, say a group was segregated, and name a privilege.",
      items: [
        { id: "es-u99l4-labrecha", type: "vocab", front: "la brecha", reading: "labrecha", meaning: "the gap", example: { jp: "La brecha entre el campo y la ciudad no deja de crecer.", en: "The gap between the countryside and the city keeps growing." }, accept: ["the gap", "the divide", "the gulf", "the breach"], hint: "La brecha salarial = the pay gap; la brecha digital = the digital divide." },
        { id: "es-u99l4-lafractura", type: "vocab", front: "la fractura", reading: "lafractura", meaning: "the rift", example: { jp: "El referéndum dejó una fractura que aún dura.", en: "The referendum left a rift that still lasts." }, accept: ["the rift", "the fracture", "the split", "the break"], hint: "Deeper than una brecha: something that was whole has broken. Also a bone fracture." },
        { id: "es-u99l4-elgueto", type: "vocab", front: "el gueto", reading: "elgueto", meaning: "the ghetto", example: { jp: "Aquellas políticas crearon verdaderos guetos en la ciudad.", en: "Those policies created real ghettos in the city." }, accept: ["the ghetto"], hint: "Spelled as it sounds in Spanish. Used of any quarter where one group is shut in." },
        { id: "es-u99l4-segregar", type: "vocab", front: "segregar", reading: "segregar", meaning: "to segregate", example: { jp: "Durante años se segregó a los estudiantes por su origen.", en: "For years students were segregated by their origin." }, accept: ["to segregate", "to separate out", "to set apart"], hint: "To separate a group and keep it apart. La segregación is the noun." },
        { id: "es-u99l4-laperiferia", type: "vocab", front: "la periferia", reading: "laperiferia", meaning: "the outskirts / margins", example: { jp: "Los servicios nunca llegaron a la periferia.", en: "Services never reached the outskirts." }, accept: ["the outskirts", "the margins", "the periphery", "the outer edge"], hint: "The edge of a city, and figuratively the edge of society. Periférico is the adjective." },
        { id: "es-u99l4-elprivilegio", type: "vocab", front: "el privilegio", reading: "elprivilegio", meaning: "the privilege", example: { jp: "Nació con privilegios que nunca tuvo que pedir.", en: "He was born with privileges he never had to ask for." }, accept: ["the privilege", "the advantage"], hint: "An advantage one group holds and rarely notices. Privilegiado = privileged." },
      ],
    },
  ],
};
