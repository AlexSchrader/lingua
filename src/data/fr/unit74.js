// FR Unit 74 — Health and wellbeing (slot: health-wellbeing) — B1
// A1 Unit 15 taught the body and j'ai mal; A2 Unit 32 the doctor's visit
// (le rhume, la grippe, la douleur, la maladie, guérir, soigner, le rendez-vous,
// l'ordonnance, les urgences, le sommeil, le régime, l'exercice). B1 adds the
// two things those cannot say: the clinical frame (symptôme, diagnostic,
// traitement) and WELLBEING, which is mental as much as physical.
// Every front checked against the live 1,287 first. Conventions: fr/unit1.js.
export const FR_UNIT74 = {
  id: "fr-u74",
  lang: "fr",
  title: "La santé et le bien-être",
  order: 74,
  stage: "b1",
  lessons: [
    {
      id: "fr-u74l1",
      unit: 74,
      lesson: 1,
      title: "At the surgery",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a medical visit properly: un symptôme, un diagnostic, un traitement.",
      items: [
        { id: "fr-u74l1-lecabinet", type: "vocab", front: "le cabinet", reading: "lecabinet", meaning: "the surgery", example: { jp: "Le cabinet est fermé le samedi, donc il faut aller aux urgences.", en: "The surgery is closed on Saturdays, so you have to go to A&E." }, accept: ["doctor's office", "the practice", "consulting room"], hint: "Un cabinet médical. Nothing to do with furniture." },
        { id: "fr-u74l1-laconsultation", type: "vocab", front: "la consultation", reading: "laconsultation", meaning: "the appointment", example: { jp: "La consultation a duré vingt minutes, et le médecin m'a tout expliqué.", en: "The appointment lasted twenty minutes, and the doctor explained everything to me." }, accept: ["consultation", "the visit", "appointment"] },
        { id: "fr-u74l1-lesymptome", type: "vocab", front: "le symptôme", reading: "lesymptome", meaning: "the symptom", example: { jp: "J'ai décrit mes symptômes, puis le médecin m'a posé beaucoup de questions.", en: "I described my symptoms, then the doctor asked me a lot of questions." }, accept: ["symptom", "the sign"] },
        { id: "fr-u74l1-lediagnostic", type: "vocab", front: "le diagnostic", reading: "lediagnostic", meaning: "the diagnosis", example: { jp: "Le diagnostic était clair, si bien que le traitement a commencé tout de suite.", en: "The diagnosis was clear, so treatment started straight away." }, accept: ["diagnosis", "the finding"], hint: "The final c is pronounced: dia-gnos-TIK." },
        { id: "fr-u74l1-letraitement", type: "vocab", front: "le traitement", reading: "letraitement", meaning: "the treatment", example: { jp: "Ce traitement dure trois semaines, même si on se sent mieux avant.", en: "This treatment lasts three weeks, even if you feel better before then." }, accept: ["treatment", "the course", "therapy"] },
        { id: "fr-u74l1-levaccin", type: "vocab", front: "le vaccin", reading: "levaccin", meaning: "the vaccine", example: { jp: "Le vaccin est gratuit pour tout le monde, donc il n'y a pas d'excuse.", en: "The vaccine is free for everyone, so there's no excuse." }, accept: ["vaccine", "the jab", "vaccination"] },
      ],
    },
    {
      id: "fr-u74l2",
      unit: 74,
      lesson: 2,
      title: "When it lasts",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about long-term health: une maladie chronique, une épidémie, un handicap.",
      items: [
        { id: "fr-u74l2-chronique", type: "vocab", front: "chronique", reading: "chronique", meaning: "chronic", example: { jp: "C'est une maladie chronique, donc il faut vivre avec.", en: "It's a chronic illness, so you have to live with it." }, accept: ["long-term", "persistent", "ongoing"] },
        { id: "fr-u74l2-lepidemie", type: "vocab", front: "l'épidémie", reading: "lepidemie", meaning: "the epidemic", example: { jp: "Pendant l'épidémie, les écoles sont restées fermées plusieurs mois.", en: "During the epidemic, schools stayed closed for several months." }, accept: ["epidemic", "the outbreak"] },
        { id: "fr-u74l2-levirus", type: "vocab", front: "le virus", reading: "levirus", meaning: "the virus", example: { jp: "Ce virus se transmet vite, si bien qu'il faut se laver les mains souvent.", en: "This virus spreads fast, so you have to wash your hands often." }, accept: ["virus", "the bug"] },
        { id: "fr-u74l2-lehandicap", type: "vocab", front: "le handicap", reading: "lehandicap", meaning: "the disability", example: { jp: "Son handicap ne l'empêche pas de travailler, mais la ville n'est pas adaptée.", en: "His disability doesn't stop him working, but the city isn't adapted." }, accept: ["disability", "the impairment", "handicap"], hint: "The h is \"aspirated\": le handicap, not \"l'handicap\"." },
        { id: "fr-u74l2-laguerison", type: "vocab", front: "la guérison", reading: "laguerison", meaning: "the recovery", example: { jp: "La guérison a été lente, pourtant elle n'a jamais perdu courage.", en: "The recovery was slow, yet she never lost heart." }, accept: ["recovery", "healing", "the cure"], hint: "From guérir (Unit 32) — the noun for getting better." },
        { id: "fr-u74l2-respirer", type: "vocab", front: "respirer", reading: "respirer", meaning: "to breathe", example: { jp: "Respire lentement, et tu vas te sentir mieux.", en: "Breathe slowly, and you'll feel better." }, accept: ["to breathe in", "to get one's breath"] },
      ],
    },
    {
      id: "fr-u74l3",
      unit: 74,
      lesson: 3,
      title: "Mind and mood",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about mental health without drama: le bien-être, l'anxiété, le moral, se détendre.",
      items: [
        { id: "fr-u74l3-lebienetre", type: "vocab", front: "le bien-être", reading: "lebienetre", meaning: "wellbeing", example: { jp: "Le bien-être au travail compte autant que le salaire, selon cette enquête.", en: "Wellbeing at work matters as much as pay, according to this survey." }, accept: ["well-being", "the welfare", "comfort"] },
        { id: "fr-u74l3-lanxiete", type: "vocab", front: "l'anxiété", reading: "lanxiete", meaning: "anxiety", example: { jp: "L'anxiété est fréquente chez les étudiants, surtout avant les examens.", en: "Anxiety is common among students, especially before exams." }, accept: ["the anxiety", "worry", "nervousness"] },
        { id: "fr-u74l3-lemoral", type: "vocab", front: "le moral", reading: "lemoral", meaning: "spirits", example: { jp: "J'ai le moral aujourd'hui, tandis qu'hier tout allait mal.", en: "My spirits are good today, whereas yesterday everything was going badly." }, accept: ["morale", "the mood", "spirit"], hint: "avoir le moral = to be in good spirits; ne pas avoir le moral is the opposite." },
        { id: "fr-u74l3-latherapie", type: "vocab", front: "la thérapie", reading: "latherapie", meaning: "therapy", example: { jp: "Il suit une thérapie depuis un an, et ça l'aide beaucoup.", en: "He's been in therapy for a year, and it helps him a lot." }, accept: ["the therapy", "treatment", "counselling"] },
        { id: "fr-u74l3-sedetendre", type: "vocab", front: "se détendre", reading: "sedetendre", meaning: "to relax", example: { jp: "Je me détends en lisant, tandis que mon frère préfère courir.", en: "I relax by reading, whereas my brother prefers running." }, accept: ["to unwind", "to chill out", "to loosen up"] },
        { id: "fr-u74l3-lequilibre", type: "vocab", front: "l'équilibre", reading: "lequilibre", meaning: "the balance", example: { jp: "Il cherche un équilibre entre sa vie et son travail, mais ce n'est pas facile.", en: "He's looking for a balance between his life and his work, but it isn't easy." }, accept: ["balance", "the equilibrium", "stability"] },
      ],
    },
    {
      id: "fr-u74l4",
      unit: 74,
      lesson: 4,
      title: "Staying well",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what keeps you healthy: l'alimentation, la marche, le repos, une bonne habitude.",
      items: [
        { id: "fr-u74l4-lalimentation", type: "vocab", front: "l'alimentation", reading: "lalimentation", meaning: "diet", example: { jp: "Une bonne alimentation coûte cher, ce qui est un vrai problème.", en: "A good diet is expensive, which is a real problem." }, accept: ["the diet", "food", "nutrition"], hint: "What you eat in general. le régime (Unit 32) is a diet you go ON." },
        { id: "fr-u74l4-lamarche", type: "vocab", front: "la marche", reading: "lamarche", meaning: "walking", example: { jp: "La marche est le meilleur exercice, parce qu'on peut la faire partout.", en: "Walking is the best exercise, because you can do it anywhere." }, accept: ["the walk", "hiking", "step"], hint: "Also a stair — attention à la marche, mind the step." },
        { id: "fr-u74l4-lerepos", type: "vocab", front: "le repos", reading: "lerepos", meaning: "rest", example: { jp: "Le médecin lui a demandé du repos, donc il reste à la maison cette semaine.", en: "The doctor told him to rest, so he's staying home this week." }, accept: ["the rest", "break", "relaxation"] },
        { id: "fr-u74l4-lhabitude", type: "vocab", front: "l'habitude", reading: "lhabitude", meaning: "the habit", example: { jp: "J'ai pris l'habitude de marcher le matin, et maintenant ça me manque quand je ne le fais pas.", en: "I've got into the habit of walking in the morning, and now I miss it when I don't." }, accept: ["habit", "the custom", "routine"], hint: "d'habitude = usually. avoir l'habitude de = to be used to." },
        { id: "fr-u74l4-prevenir", type: "vocab", front: "prévenir", reading: "prevenir", meaning: "to prevent", example: { jp: "Il vaut mieux prévenir que guérir, comme on dit.", en: "Prevention is better than cure, as the saying goes." }, accept: ["to warn", "to avoid", "to head off"], hint: "Two jobs: to prevent, and to warn someone — préviens-moi si tu es en retard." },
        { id: "fr-u74l4-lerythme", type: "vocab", front: "le rythme", reading: "lerythme", meaning: "the pace", example: { jp: "Le rythme de vie en ville est trop rapide pour moi.", en: "The pace of life in the city is too fast for me." }, accept: ["rhythm", "pace", "the tempo"] },
      ],
    },
  ],
};
