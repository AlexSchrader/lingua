// FR Unit 28 — Toute la conjugaison ("The whole conjugation") — A1 GRAMMAR
// The first of three units closing the gap between "A1 core" and A1 EXAM-complete.
//
// Units 1–26 teach verbs as je/tu CHUNKS, which is the right on-ramp — a beginner
// needs "je voudrais" long before they need a paradigm. But an A1 exam expects the
// full present tense of the high-frequency verbs, and a probe of the corpus found
// the paradigms ragged: être was missing only `elles sont`, avoir only `elles ont`,
// while faire had 2 of 6 forms and regular -er had 2 of 6. A learner could say
// "je parle" and "tu parles" and then stall completely on "they speak".
//
// This unit finishes the paradigms rather than restating them: every item here is a
// form NOT already taught, so nothing is re-learned and no front collides. The
// pattern is the lesson — L3 runs the same six endings across two -er verbs so the
// rule is visible, not memorized twice.
//
// NOTE: `il fait` is already taught (weather, fr-u13) and `je mange` in fr-u5, so
// those slots are deliberately absent here. Conventions: see fr/unit1.js.
export const FR_UNIT28 = {
  id: "fr-u28",
  lang: "fr",
  title: "Toute la conjugaison",
  order: 28,
  stage: "a1",
  lessons: [
    {
      id: "fr-u28l1",
      unit: 28,
      lesson: 1,
      title: "All of them",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Finish être, avoir and aller: elles sont, elles ont, ils vont, vous allez — plus on and ce sont.",
      items: [
        { id: "fr-u28l1-ellessont", type: "vocab", front: "elles sont", reading: "ellessont", meaning: "they are (feminine)", example: { jp: "Mes sœurs ? Elles sont à Paris.", en: "My sisters? They are in Paris." }, accept: ["they are"], hint: "A group of women is elles; a group of men, or any mix, is ils. One man in a room of a hundred women makes it ils." },
        { id: "fr-u28l1-ellesont", type: "vocab", front: "elles ont", reading: "ellesont", meaning: "they have (feminine)", example: { jp: "Elles ont deux enfants.", en: "They have two children." }, accept: ["they have"], hint: "Say them apart with care: elles SONT = they are, elles ONT = they have. The liaison makes \"elles ont\" sound like \"el-zon\"." },
        { id: "fr-u28l1-cesont", type: "vocab", front: "ce sont", reading: "cesont", meaning: "these are", example: { jp: "Ce sont mes amis.", en: "These are my friends." }, accept: ["those are", "they are"], hint: "The plural of c'est. One thing: c'est mon ami. Several: ce sont mes amis." },
        { id: "fr-u28l1-ilsvont", type: "vocab", front: "ils vont", reading: "ilsvont", meaning: "they go", example: { jp: "Ils vont au restaurant ce soir.", en: "They're going to the restaurant tonight." }, accept: ["they're going", "they are going"] },
        { id: "fr-u28l1-vousallez", type: "vocab", front: "vous allez", reading: "vousallez", meaning: "you go (polite/plural)", example: { jp: "Vous allez au marché, madame ?", en: "Are you going to the market, ma'am?" }, accept: ["you're going", "you are going"], hint: "Also the polite \"how are you\": comment allez-vous ? — literally \"how do you go?\"." },
        { id: "fr-u28l1-onva", type: "vocab", front: "on va", reading: "onva", meaning: "we go (spoken)", example: { jp: "On va au marché ?", en: "Shall we go to the market?" }, accept: ["we're going", "shall we go", "one goes"], hint: "In real speech, on replaces nous almost always — on va is far more common than nous allons. It takes the il/elle form." },
        { id: "fr-u28l1-onpeut", type: "vocab", front: "on peut", reading: "onpeut", meaning: "we can", example: { jp: "On peut manger ici ?", en: "Can we eat here?" }, accept: ["can we", "one can"] },
      ],
    },
    {
      id: "fr-u28l2",
      unit: 28,
      lesson: 2,
      title: "Faire, in full",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Conjugate faire all the way through — and ask qu'est-ce que tu fais ?",
      items: [
        { id: "fr-u28l2-tufais", type: "vocab", front: "tu fais", reading: "tufais", meaning: "you do", example: { jp: "Tu fais le dîner ce soir ?", en: "Are you making dinner tonight?" }, accept: ["you make", "you're doing", "you're making"] },
        { id: "fr-u28l2-ellefait", type: "vocab", front: "elle fait", reading: "ellefait", meaning: "she does", example: { jp: "Elle fait ses courses le samedi.", en: "She does her shopping on Saturdays." }, accept: ["she makes", "she's doing", "she's making"] },
        { id: "fr-u28l2-nousfaisons", type: "vocab", front: "nous faisons", reading: "nousfaisons", meaning: "we do", example: { jp: "Nous faisons un gâteau pour ma mère.", en: "We're making a cake for my mother." }, accept: ["we make", "we're doing", "we're making"], hint: "Spelt fai-, said \"fuh-ZON\" — faire is the only verb you will meet at A1 that does this." },
        { id: "fr-u28l2-vousfaites", type: "vocab", front: "vous faites", reading: "vousfaites", meaning: "you do (polite/plural)", example: { jp: "Qu'est-ce que vous faites demain ?", en: "What are you doing tomorrow?" }, accept: ["you make", "you're doing"], hint: "One of only three verbs ending -tes instead of -ez: vous faites, vous êtes, vous dites." },
        { id: "fr-u28l2-ilsfont", type: "vocab", front: "ils font", reading: "ilsfont", meaning: "they do", example: { jp: "Ils font le dîner à sept heures.", en: "They make dinner at seven o'clock." }, accept: ["they make", "they're doing"] },
        { id: "fr-u28l2-ellesfont", type: "vocab", front: "elles font", reading: "ellesfont", meaning: "they do (feminine)", example: { jp: "Elles font les courses au supermarché.", en: "They do the shopping at the supermarket." }, accept: ["they make", "they're doing"], hint: "faire covers making, doing, taking photos, and the weather. When in doubt, it is probably faire." },
        { id: "fr-u28l2-questcequetufais", type: "vocab", front: "qu'est-ce que tu fais", reading: "questcequetufais", meaning: "what are you doing?", example: { jp: "Qu'est-ce que tu fais ce soir ?", en: "What are you doing tonight?" }, accept: ["what do you do", "what are you up to"], hint: "The single most-used question between friends. Swap tu fais for vous faites to be polite." },
      ],
    },
    {
      id: "fr-u28l3",
      unit: 28,
      lesson: 3,
      title: "The -er pattern, all six",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Run one ending set across every -er verb: -e, -es, -e, -ons, -ez, -ent.",
      items: [
        { id: "fr-u28l3-ilparle", type: "vocab", front: "il parle", reading: "ilparle", meaning: "he speaks", example: { jp: "Il parle français et anglais.", en: "He speaks French and English." }, accept: ["he talks", "he's speaking"], hint: "je parle, tu parles, il parle all sound IDENTICAL — the endings are silent. Only the pronoun tells your ear who is talking." },
        { id: "fr-u28l3-nousparlons", type: "vocab", front: "nous parlons", reading: "nousparlons", meaning: "we speak", example: { jp: "Nous parlons avec le professeur.", en: "We're speaking with the teacher." }, accept: ["we talk", "we're speaking"] },
        { id: "fr-u28l3-vousparlez", type: "vocab", front: "vous parlez", reading: "vousparlez", meaning: "you speak (polite/plural)", example: { jp: "Vous parlez très bien !", en: "You speak very well!" }, accept: ["you talk", "you're speaking"] },
        { id: "fr-u28l3-ilsparlent", type: "vocab", front: "ils parlent", reading: "ilsparlent", meaning: "they speak", example: { jp: "Ils parlent trop vite pour moi.", en: "They speak too fast for me." }, accept: ["they talk", "they're speaking"], hint: "-ent is silent too: ils parlent sounds exactly like il parle. Four of the six forms are one sound." },
        { id: "fr-u28l3-nousmangeons", type: "vocab", front: "nous mangeons", reading: "nousmangeons", meaning: "we eat", example: { jp: "Nous mangeons à midi.", en: "We eat at noon." }, accept: ["we're eating", "we are eating"], hint: "The extra e keeps the g soft: mangeons, not \"mangons\". Verbs in -cer solve the same problem a different way, with a cedilla: nous commençons." },
        { id: "fr-u28l3-vousmangez", type: "vocab", front: "vous mangez", reading: "vousmangez", meaning: "you eat (polite/plural)", example: { jp: "Vous mangez de la viande ?", en: "Do you eat meat?" }, accept: ["you're eating", "you are eating"] },
        { id: "fr-u28l3-ilsmangent", type: "vocab", front: "ils mangent", reading: "ilsmangent", meaning: "they eat", example: { jp: "Ils mangent des fruits le matin.", en: "They eat fruit in the morning." }, accept: ["they're eating", "they are eating"], hint: "Learn the six endings once — -e, -es, -e, -ons, -ez, -ent — and you can conjugate the thousands of verbs that end in -er." },
      ],
    },
  ],
};
