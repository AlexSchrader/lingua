// FR Unit 64 — Les émotions, nuances (slot: emotion, finer shades) — B1
// SCOPE BOUNDARY: A2 already teaches the basic feelings (content, triste,
// fatigué, en colère, inquiet, déçu, fier, jaloux). This unit is the finer
// register above them: relief and joy (ravi, ému, soulagé, comblé), dread and
// low spirits (l'angoisse, anxieux, déprimé, le chagrin), irritation (énervé,
// agacé, furieux, vexé) and embarrassment/tenderness (la honte, gêné, la
// tendresse, bouleversé). Their taught lexemes (joie/déçu/fier/jaloux) are
// deliberately avoided. Fronts checked against the live 1,287. Conventions: fr/unit1.js.
export const FR_UNIT64 = {
  id: "fr-u64",
  lang: "fr",
  title: "Les émotions, nuances",
  order: 64,
  stage: "b1",
  lessons: [
    {
      id: "fr-u64l1",
      unit: 64,
      lesson: 1,
      title: "Joy and relief",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the brighter feelings precisely: ravi, ému, soulagé, le bonheur.",
      items: [
        { id: "fr-u64l1-ravi", type: "vocab", front: "ravi", reading: "ravi", meaning: "delighted", example: { jp: "Ils sont ravis de leur nouvelle maison.", en: "They're delighted with their new house." }, accept: ["delighted", "thrilled", "overjoyed"], hint: "Delighted — stronger than content. ravi de vous rencontrer = delighted to meet you." },
        { id: "fr-u64l1-emu", type: "vocab", front: "ému", reading: "emu", meaning: "moved", example: { jp: "Il était ému par ce beau moment.", en: "He was moved by this lovely moment." }, accept: ["moved", "touched", "emotional"], hint: "Moved, touched — from émouvoir. ému aux larmes = moved to tears." },
        { id: "fr-u64l1-soulage", type: "vocab", front: "soulagé", reading: "soulage", meaning: "relieved", example: { jp: "Après l'examen, il était vraiment soulagé.", en: "After the exam, he was really relieved." }, accept: ["relieved"], hint: "Relieved — when a worry lifts. From soulager, to relieve." },
        { id: "fr-u64l1-enthousiaste", type: "vocab", front: "enthousiaste", reading: "enthousiaste", meaning: "enthusiastic", example: { jp: "Les enfants sont très enthousiastes à l'idée de partir.", en: "The children are very enthusiastic about the idea of leaving." }, accept: ["enthusiastic", "keen", "excited"], hint: "Enthusiastic, keen. The noun is l'enthousiasme." },
        { id: "fr-u64l1-lebonheur", type: "vocab", front: "le bonheur", reading: "lebonheur", meaning: "happiness", example: { jp: "Le vrai bonheur ne vient pas de l'argent.", en: "True happiness doesn't come from money." }, accept: ["happiness", "joy"], hint: "Happiness — the lasting state, not the moment. The opposite is le malheur." },
        { id: "fr-u64l1-comble", type: "vocab", front: "comblé", reading: "comble", meaning: "fulfilled", example: { jp: "Avec sa famille et son travail, elle est vraiment comblée.", en: "With her family and her work, she is truly fulfilled." }, accept: ["fulfilled", "content", "satisfied"], hint: "Completely fulfilled, wanting for nothing — from combler, to fill up." },
      ],
    },
    {
      id: "fr-u64l2",
      unit: 64,
      lesson: 2,
      title: "Dread and low spirits",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about fear and sadness with nuance: l'angoisse, anxieux, déprimé, le chagrin.",
      items: [
        { id: "fr-u64l2-langoisse", type: "vocab", front: "l'angoisse", reading: "langoisse", meaning: "the dread", example: { jp: "Avant chaque examen, il a une vraie angoisse.", en: "Before every exam, he feels real dread." }, accept: ["dread", "anguish", "the anxiety"], hint: "Deep anxiety or dread — stronger than l'inquiétude. Also a knot in the stomach." },
        { id: "fr-u64l2-anxieux", type: "vocab", front: "anxieux", reading: "anxieux", meaning: "anxious", example: { jp: "Elle est anxieuse avant chaque voyage en avion.", en: "She's anxious before every plane trip." }, accept: ["anxious", "worried", "nervous"], hint: "Anxious by nature. Feminine: anxieuse. The noun is l'anxiété." },
        { id: "fr-u64l2-lacrainte", type: "vocab", front: "la crainte", reading: "lacrainte", meaning: "the fear", example: { jp: "Sa plus grande crainte, c'est de rester seul.", en: "His greatest fear is being left alone." }, accept: ["fear", "the dread", "the worry"], hint: "A fear or dread — de crainte que + subjunctive. From craindre, to fear." },
        { id: "fr-u64l2-effraye", type: "vocab", front: "effrayé", reading: "effraye", meaning: "frightened", example: { jp: "Elle était effrayée par ce grand chien noir.", en: "She was frightened by that big black dog." }, drill: { jp: "Mon frère est très effrayé", en: "My brother is very frightened" }, accept: ["frightened", "scared", "terrified"], hint: "Frightened, scared — from effrayer. effrayant = frightening." },
        { id: "fr-u64l2-deprime", type: "vocab", front: "déprimé", reading: "deprime", meaning: "depressed", example: { jp: "Il est déprimé quand il pleut plusieurs jours.", en: "He gets depressed when it rains for several days." }, accept: ["depressed", "down", "low"], hint: "Down, depressed — un peu déprimé = a bit low. From la dépression." },
        { id: "fr-u64l2-lechagrin", type: "vocab", front: "le chagrin", reading: "lechagrin", meaning: "the sorrow", example: { jp: "Elle a un grand chagrin, mais elle ne veut pas en parler.", en: "She has a deep sorrow, but she doesn't want to talk about it." }, accept: ["sorrow", "grief", "heartache"], hint: "Sorrow, grief, heartache — un chagrin d'amour = heartbreak." },
      ],
    },
    {
      id: "fr-u64l3",
      unit: 64,
      lesson: 3,
      title: "Irritation and anger",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade anger from mild to strong: agacé, énervé, furieux, la haine.",
      items: [
        { id: "fr-u64l3-enerve", type: "vocab", front: "énervé", reading: "enerve", meaning: "irritated", example: { jp: "Il était énervé après cette longue journée.", en: "He was wound up after this long day." }, accept: ["irritated", "wound up", "annoyed", "worked up"], hint: "Wound up, irritated — s'énerver = to get worked up. Stronger than agacé." },
        { id: "fr-u64l3-agace", type: "vocab", front: "agacé", reading: "agace", meaning: "annoyed", example: { jp: "Elle est agacée par toutes ces questions.", en: "She's annoyed by all these questions." }, drill: { jp: "Mon frère est très agacé", en: "My brother is very annoyed" }, accept: ["annoyed", "irritated", "bothered"], hint: "Mildly irritated — from agacer. Ça m'agace ! = that bugs me!" },
        { id: "fr-u64l3-furieux", type: "vocab", front: "furieux", reading: "furieux", meaning: "furious", example: { jp: "Il était furieux d'apprendre la nouvelle.", en: "He was furious to hear the news." }, accept: ["furious", "raging", "livid"], hint: "Furious, raging — much stronger than en colère. Feminine: furieuse." },
        { id: "fr-u64l3-frustre", type: "vocab", front: "frustré", reading: "frustre", meaning: "frustrated", example: { jp: "Elle est frustrée de ne pas pouvoir aider.", en: "She's frustrated at not being able to help." }, accept: ["frustrated"], hint: "Frustrated, held back — from la frustration." },
        { id: "fr-u64l3-lahaine", type: "vocab", front: "la haine", reading: "lahaine", meaning: "hatred", example: { jp: "La haine entre les deux familles dure depuis des années.", en: "The hatred between the two families has lasted for years." }, accept: ["hatred", "hate"], hint: "Hatred — the opposite of l'amour. From haïr, to hate." },
        { id: "fr-u64l3-vexe", type: "vocab", front: "vexé", reading: "vexe", meaning: "hurt", example: { jp: "Il est vexé parce que personne ne l'a écouté.", en: "He's hurt because nobody listened to him." }, accept: ["hurt", "offended", "put out"], hint: "Hurt or offended in one's pride — se vexer = to take offence. Milder than furieux." },
      ],
    },
    {
      id: "fr-u64l4",
      unit: 64,
      lesson: 4,
      title: "Awkwardness and tenderness",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name subtler social feelings: la honte, gêné, la tendresse, bouleversé.",
      items: [
        { id: "fr-u64l4-lahonte", type: "vocab", front: "la honte", reading: "lahonte", meaning: "shame", example: { jp: "Il n'a pas honte de dire ce qu'il pense.", en: "He's not ashamed to say what he thinks." }, accept: ["shame", "the embarrassment"], hint: "Shame — avoir honte de = to be ashamed of. Also embarrassment: quelle honte !" },
        { id: "fr-u64l4-gene", type: "vocab", front: "gêné", reading: "gene", meaning: "embarrassed", example: { jp: "Elle était gênée de poser autant de questions.", en: "She was embarrassed to ask so many questions." }, accept: ["embarrassed", "awkward", "uncomfortable"], hint: "Embarrassed, awkward, or in the way — from gêner. Ça vous gêne ? = do you mind?" },
        { id: "fr-u64l4-latendresse", type: "vocab", front: "la tendresse", reading: "latendresse", meaning: "tenderness", example: { jp: "Entre ces deux personnes, il y a beaucoup de tendresse.", en: "Between these two people, there's a lot of tenderness." }, drill: { jp: "La tendresse est très importante", en: "Tenderness is very important" }, accept: ["tenderness", "affection", "fondness"], hint: "Tenderness, gentle affection — from tendre, tender/soft." },
        { id: "fr-u64l4-bouleverse", type: "vocab", front: "bouleversé", reading: "bouleverse", meaning: "shaken", example: { jp: "Elle était bouleversée par cette triste nouvelle.", en: "She was deeply shaken by this sad news." }, accept: ["shaken", "overwhelmed", "distraught", "devastated"], hint: "Deeply shaken, overwhelmed — from bouleverser, to turn upside down." },
        { id: "fr-u64l4-etonne", type: "vocab", front: "étonné", reading: "etonne", meaning: "astonished", example: { jp: "Je suis étonné qu'il ne soit pas encore là.", en: "I'm astonished that he isn't here yet." }, accept: ["astonished", "surprised", "amazed"], hint: "Astonished, surprised — from étonner. Ça m'étonne = that surprises me." },
        { id: "fr-u64l4-lapanique", type: "vocab", front: "la panique", reading: "lapanique", meaning: "panic", example: { jp: "Pas de panique, tout ira bien !", en: "No panic — everything will be fine!" }, accept: ["panic"], hint: "Panic — pas de panique ! = don't panic! From paniquer." },
      ],
    },
  ],
};
