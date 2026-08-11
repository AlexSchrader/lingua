// FR Unit 31 — Encore des verbes ("More verbs") — A1 GRAMMAR, closes the last gap
// Added on the content-auditor's finding, which was right and which my own syllabus
// probe missed: units 28–30 finished être / avoir / aller / faire / -er, but left
// TWO high-frequency areas stuck in the first person.
//
//   1. THE MODALS. The corpus had `je veux`, `je peux`, `je sais` (fr-u9l3) and
//      fr-u28 added `on peut` — and nothing else. "Tu veux un café ?" is one of the
//      highest-frequency utterances in spoken French, and a learner could not build
//      it. Finishing the regular verbs while leaving vouloir/pouvoir/savoir ragged
//      was, in the auditor's words, the largest remaining hole — larger than the
//      comparatives that unit 30 spends a whole lesson on.
//   2. THE PAST, OUTSIDE THE FIRST PERSON. fr-u24 teaches the passé composé only as
//      j'ai mangé / je suis allé. It IS compositional — a learner who has the full
//      avoir and être paradigms from fr-u28 can assemble `il a mangé` themselves —
//      but it is never modelled, and A1 comprehension puts third-person past in
//      front of a learner constantly (any story, any account of a weekend).
//
// L3 also carries the participle-agreement rule (elle est partie), which only
// becomes visible once the past exists outside je. Conventions: see fr/unit1.js.
export const FR_UNIT31 = {
  id: "fr-u31",
  lang: "fr",
  title: "Encore des verbes",
  order: 31,
  stage: "a1",
  lessons: [
    {
      id: "fr-u31l1",
      unit: 31,
      lesson: 1,
      title: "Who wants what",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use vouloir for everyone: tu veux, il veut, on veut, nous voulons, vous voulez, ils veulent.",
      items: [
        { id: "fr-u31l1-tuveux", type: "vocab", front: "tu veux", reading: "tuveux", meaning: "you want", example: { jp: "Tu veux un café ?", en: "Do you want a coffee?" }, accept: ["do you want", "you'd like"], hint: "Learn this one cold — offering something is most of what you'll do in a French kitchen. Rising voice turns it into the question." },
        { id: "fr-u31l1-ilveut", type: "vocab", front: "il veut", reading: "ilveut", meaning: "he wants", example: { jp: "Il veut un croissant.", en: "He wants a croissant." }, accept: ["he'd like"] },
        { id: "fr-u31l1-elleveut", type: "vocab", front: "elle veut", reading: "elleveut", meaning: "she wants", example: { jp: "Elle veut voir la mer.", en: "She wants to see the sea." }, accept: ["she'd like"], hint: "After a modal the second verb stays in the infinitive — elle veut VOIR, never \"elle veut voit\"." },
        { id: "fr-u31l1-onveut", type: "vocab", front: "on veut", reading: "onveut", meaning: "we want (spoken)", example: { jp: "On veut manger maintenant.", en: "We want to eat now." }, accept: ["one wants"] },
        { id: "fr-u31l1-nousvoulons", type: "vocab", front: "nous voulons", reading: "nousvoulons", meaning: "we want (formal)", example: { jp: "Nous voulons partir tout de suite.", en: "We want to leave right away." }, accept: ["we'd like"] },
        { id: "fr-u31l1-vousvoulez", type: "vocab", front: "vous voulez", reading: "vousvoulez", meaning: "you want (polite/plural)", example: { jp: "Vous voulez du thé, madame ?", en: "Would you like some tea, ma'am?" }, accept: ["do you want", "you'd like"], hint: "In a shop, je voudrais is the softened version of je veux — but vous voulez ? asked of you is perfectly polite." },
        { id: "fr-u31l1-ilsveulent", type: "vocab", front: "ils veulent", reading: "ilsveulent", meaning: "they want", example: { jp: "Ils veulent faire les courses.", en: "They want to do the shopping." }, accept: ["they'd like"] },
      ],
    },
    {
      id: "fr-u31l2",
      unit: 31,
      lesson: 2,
      title: "What you can do",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Finish pouvoir: tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.",
      items: [
        { id: "fr-u31l2-tupeux", type: "vocab", front: "tu peux", reading: "tupeux", meaning: "you can", example: { jp: "Tu peux voir la mer d'ici !", en: "You can see the sea from here!" }, accept: ["are you able", "could you"] },
        { id: "fr-u31l2-ilpeut", type: "vocab", front: "il peut", reading: "ilpeut", meaning: "he can", example: { jp: "Il peut manger avec nous.", en: "He can eat with us." }, accept: ["he is able", "he may"] },
        { id: "fr-u31l2-nouspouvons", type: "vocab", front: "nous pouvons", reading: "nouspouvons", meaning: "we can", example: { jp: "Nous pouvons partir maintenant.", en: "We can leave now." }, accept: ["we are able", "we may"] },
        { id: "fr-u31l2-vouspouvez", type: "vocab", front: "vous pouvez", reading: "vouspouvez", meaning: "you can (polite/plural)", example: { jp: "Vous pouvez voir le médecin demain.", en: "You can see the doctor tomorrow." }, accept: ["you are able", "you may"], hint: "The polite request frame: vous pouvez + infinitive, s'il vous plaît. It softens anything you need." },
        { id: "fr-u31l2-ilspeuvent", type: "vocab", front: "ils peuvent", reading: "ilspeuvent", meaning: "they can", example: { jp: "Ils peuvent boire du vin.", en: "They can drink wine." }, accept: ["they are able", "they may"] },
      ],
    },
    {
      id: "fr-u31l3",
      unit: 31,
      lesson: 3,
      title: "What you know",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Finish savoir: tu sais, il sait, elle sait, nous savons, vous savez, ils savent — and savoir + infinitive for \"knows how to\".",
      items: [
        { id: "fr-u31l3-tusais", type: "vocab", front: "tu sais", reading: "tusais", meaning: "you know", example: { jp: "Tu sais où est la gare ?", en: "Do you know where the station is?" }, accept: ["do you know"], hint: "savoir is knowing a FACT or a skill. Knowing a person is a different verb (connaître) — that one waits for A2." },
        { id: "fr-u31l3-ilsait", type: "vocab", front: "il sait", reading: "ilsait", meaning: "he knows", example: { jp: "Il sait faire un gâteau.", en: "He knows how to make a cake." }, accept: ["he can"], hint: "savoir + infinitive is English \"knows HOW to\" — il sait faire, il sait manger proprement. French needs no word for \"how\"." },
        { id: "fr-u31l3-ellesait", type: "vocab", front: "elle sait", reading: "ellesait", meaning: "she knows", example: { jp: "Elle sait où est la pharmacie.", en: "She knows where the pharmacy is." }, accept: ["she is aware"] },
        { id: "fr-u31l3-noussavons", type: "vocab", front: "nous savons", reading: "noussavons", meaning: "we know", example: { jp: "Nous savons où est le restaurant.", en: "We know where the restaurant is." }, accept: ["we are aware"] },
        { id: "fr-u31l3-voussavez", type: "vocab", front: "vous savez", reading: "voussavez", meaning: "you know (polite/plural)", example: { jp: "Vous savez où est le métro ?", en: "Do you know where the metro is?" }, accept: ["do you know"] },
        { id: "fr-u31l3-ilssavent", type: "vocab", front: "ils savent", reading: "ilssavent", meaning: "they know", example: { jp: "Ils savent faire la cuisine.", en: "They know how to cook." }, accept: ["they are aware"], hint: "savoir is irregular but short: sais, sais, sait, savons, savez, savent. Worth learning as a block." },
      ],
    },
    {
      id: "fr-u31l4",
      unit: 31,
      lesson: 4,
      title: "The past, for everyone else",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Tell what other people did: il a mangé, elle a fait, nous avons vu, vous avez pris, ils ont eu — il est allé, elle est partie.",
      items: [
        { id: "fr-u31l4-ilamange", type: "vocab", front: "il a mangé", reading: "ilamange", meaning: "he ate", example: { jp: "Il a mangé tout le pain !", en: "He ate all the bread!" }, accept: ["he has eaten", "he did eat"], hint: "Nothing new to learn — it's the avoir you already have plus the same participle from j'ai mangé. Swap the person, keep the rest." },
        { id: "fr-u31l4-elleafait", type: "vocab", front: "elle a fait", reading: "elleafait", meaning: "she did", example: { jp: "Elle a fait un gâteau hier.", en: "She made a cake yesterday." }, accept: ["she made", "she has done"] },
        { id: "fr-u31l4-nousavonsvu", type: "vocab", front: "nous avons vu", reading: "nousavonsvu", meaning: "we saw", example: { jp: "Nous avons vu la mer !", en: "We saw the sea!" }, accept: ["we have seen", "we did see"] },
        { id: "fr-u31l4-vousavezpris", type: "vocab", front: "vous avez pris", reading: "vousavezpris", meaning: "you took", example: { jp: "Vous avez pris le train ?", en: "Did you take the train?" }, accept: ["you have taken", "did you take"] },
        { id: "fr-u31l4-ilsonteu", type: "vocab", front: "ils ont eu", reading: "ilsonteu", meaning: "they had", example: { jp: "Ils ont eu un enfant.", en: "They had a child." }, accept: ["they have had"], hint: "The participle of avoir is eu, said simply \"ew\" — two letters, one sound, no trace of the verb it comes from." },
        { id: "fr-u31l4-ilestalle", type: "vocab", front: "il est allé", reading: "ilestalle", meaning: "he went", example: { jp: "Il est allé au marché ce matin.", en: "He went to the market this morning." }, accept: ["he has gone", "he did go"], hint: "Verbs of coming and going take être, not avoir — il EST allé, never \"il a allé\"." },
        { id: "fr-u31l4-elleestpartie", type: "vocab", front: "elle est partie", reading: "elleestpartie", meaning: "she left", example: { jp: "Elle est partie à sept heures.", en: "She left at seven o'clock." }, accept: ["she has left", "she did leave"], hint: "The être verbs AGREE with who did it: il est parti, elle est partiE, elles sont partiES. The avoir ones never do." },
      ],
    },
  ],
};
