// FR Unit 121 — La justice et le droit ("Justice and the law") — B2
// Strand D, coverage unit 4 of 13 (block 3, units 121-133). The slot is a generic
// "Vocabulary 4 (B2)" frequency pass; each coverage unit here is given a real theme
// so the four lessons cohere — DEVIATION FROM THE SLOT NAME ONLY, slot number kept.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 (u1-94) already teach la loi, le droit, la
// justice, le règlement, la preuve, l'enquête, la sanction, l'amende. This unit
// authors the register above them — the machinery of a criminal case: the crime
// itself, the investigation, the courtroom, and the verdict. Every front was
// checked against the live 2,168 A1+A2+B1 fronts AND the sibling B2 blocks before
// writing (le témoin, le témoignage, plaider are taken and deliberately avoided).
// Conventions: see fr/unit1.js.
export const FR_UNIT121 = {
  id: "fr-u121",
  lang: "fr",
  title: "La justice et le droit",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "fr-u121l1",
      unit: 121,
      lesson: 1,
      title: "The crime",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name an offence and who it harms: le crime, le délit, le meurtre, le voleur, la victime.",
      items: [
        { id: "fr-u121l1-lecrime", type: "vocab", front: "le crime", reading: "lecrime", meaning: "the crime", example: { jp: "Ce crime reste un mystère, car personne n'a rien vu cette nuit-là.", en: "This crime remains a mystery, because nobody saw anything that night." }, accept: ["crime", "the crime"], hint: "The serious end of the scale — a délit is the lesser offence." },
        { id: "fr-u121l1-ledelit", type: "vocab", front: "le délit", reading: "ledelit", meaning: "the offence", example: { jp: "Ce petit délit n'est pas grave, mais la police doit quand même réagir.", en: "This minor offence isn't serious, but the police still have to react." }, accept: ["offence", "the offence", "misdemeanour"], hint: "A minor crime. en flagrant délit = caught in the act." },
        { id: "fr-u121l1-lemeurtre", type: "vocab", front: "le meurtre", reading: "lemeurtre", meaning: "the murder", example: { jp: "Le meurtre a eu lieu la nuit, et depuis, tout le quartier a peur.", en: "The murder took place at night, and ever since, the whole neighbourhood is afraid." }, accept: ["murder", "the murder", "the killing"], hint: "The unlawful killing itself; the killer is un meurtrier." },
        { id: "fr-u121l1-levoleur", type: "vocab", front: "le voleur", reading: "levoleur", meaning: "the thief", example: { jp: "Le voleur est entré par la fenêtre pendant que la famille dormait.", en: "The thief came in through the window while the family was sleeping." }, accept: ["thief", "the thief", "robber", "burglar"], hint: "The person; the act is le vol, which you already know." },
        { id: "fr-u121l1-lavictime", type: "vocab", front: "la victime", reading: "lavictime", meaning: "the victim", example: { jp: "La victime a tout raconté à la police, car elle voulait que justice soit faite.", en: "The victim told the police everything, because she wanted justice to be done." }, drill: { jp: "La victime a tout raconté", en: "The victim told everything" }, accept: ["victim", "the victim"], hint: "Always feminine, even for a man: il est la victime." },
        { id: "fr-u121l1-commettre", type: "vocab", front: "commettre", reading: "commettre", meaning: "to commit", example: { jp: "Celui qui a commis ce crime sera puni un jour ou l'autre.", en: "Whoever committed this crime will be punished sooner or later." }, accept: ["to commit", "to perpetrate"], hint: "commettre un crime, une erreur. Past participle: commis." },
      ],
    },
    {
      id: "fr-u121l2",
      unit: 121,
      lesson: 2,
      title: "The investigation",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a case: accuser, le suspect, enquêter, s'enfuir, poursuivre.",
      items: [
        { id: "fr-u121l2-accuser", type: "vocab", front: "accuser", reading: "accuser", meaning: "to accuse", example: { jp: "On l'accuse d'un vol, mais aucune preuve ne le montre vraiment.", en: "They accuse him of a theft, but no evidence really shows it." }, accept: ["to accuse", "to charge", "to blame"], hint: "accuser quelqu'un de quelque chose = to accuse someone of something." },
        { id: "fr-u121l2-lesuspect", type: "vocab", front: "le suspect", reading: "lesuspect", meaning: "the suspect", example: { jp: "Le suspect nie tout, pourtant plusieurs personnes l'ont reconnu.", en: "The suspect denies everything, yet several people recognised him." }, accept: ["suspect", "the suspect"], hint: "Also an adjective: un comportement suspect = suspicious behaviour." },
        { id: "fr-u121l2-enqueter", type: "vocab", front: "enquêter", reading: "enqueter", meaning: "to investigate", example: { jp: "La police enquête depuis des semaines, mais elle n'a encore rien trouvé.", en: "The police have been investigating for weeks, but they still haven't found anything." }, accept: ["to investigate", "to look into", "to inquire"], hint: "enquêter sur une affaire. The noun l'enquête you already know." },
        { id: "fr-u121l2-senfuir", type: "vocab", front: "s'enfuir", reading: "senfuir", meaning: "to flee", example: { jp: "Le voleur a réussi à s'enfuir avant que la police arrive.", en: "The thief managed to flee before the police arrived." }, accept: ["to flee", "to run away", "to escape"], hint: "Reflexive. Past participle: enfui. Stronger and more sudden than partir." },
        { id: "fr-u121l2-laccusation", type: "vocab", front: "l'accusation", reading: "laccusation", meaning: "the accusation", example: { jp: "Cette accusation est grave, il faut donc être sûr des faits.", en: "This accusation is serious, so you have to be sure of the facts." }, accept: ["accusation", "the accusation", "the charge"], hint: "In court, l'accusation is also the prosecution side, facing la défense." },
        { id: "fr-u121l2-inculper", type: "vocab", front: "inculper", reading: "inculper", meaning: "to charge", example: { jp: "La police vient de l'inculper, car les preuves sont nombreuses.", en: "The police have just charged him, because the evidence is plentiful." }, accept: ["to charge", "to indict", "to press charges against"], hint: "To formally accuse of a crime. inculper quelqu'un de. Noun: l'inculpation." },
      ],
    },
    {
      id: "fr-u121l3",
      unit: 121,
      lesson: 3,
      title: "In court",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a trial: le tribunal, le procès, le juge, l'avocat, le jury, la défense.",
      items: [
        { id: "fr-u121l3-laudience", type: "vocab", front: "l'audience", reading: "laudience", meaning: "the hearing", example: { jp: "L'audience était pleine, car tout le monde attendait le résultat.", en: "The hearing was full, because everyone was waiting for the outcome." }, drill: { jp: "L'audience était vraiment pleine", en: "The hearing was really full" }, accept: ["hearing", "the hearing", "the session", "the audience"], hint: "A court session. Also an audience or viewership in the media sense." },
        { id: "fr-u121l3-leproces", type: "vocab", front: "le procès", reading: "leproces", meaning: "the trial", example: { jp: "Le procès a duré trois jours, et la salle restait silencieuse.", en: "The trial lasted three days, and the room stayed silent." }, drill: { jp: "Le procès a duré trois jours", en: "The trial lasted three days" }, accept: ["trial", "the trial", "the lawsuit"], hint: "faire un procès à quelqu'un = to sue someone. Not le processus (process)." },
        { id: "fr-u121l3-lejuge", type: "vocab", front: "le juge", reading: "lejuge", meaning: "the judge", example: { jp: "Le juge a écouté tout le monde avant de prendre sa décision.", en: "The judge listened to everyone before making his decision." }, accept: ["judge", "the judge"], hint: "The person. The verb juger you learned in the argument unit." },
        { id: "fr-u121l3-lavocat", type: "vocab", front: "l'avocat", reading: "lavocat", meaning: "the lawyer", example: { jp: "Son avocat a bien parlé, si bien que le jury a longtemps hésité.", en: "His lawyer spoke well, so much so that the jury hesitated for a long time." }, accept: ["lawyer", "the lawyer", "attorney", "the barrister"], hint: "Same word as avocat, the avocado — context tells them apart." },
        { id: "fr-u121l3-lejury", type: "vocab", front: "le jury", reading: "lejury", meaning: "the jury", example: { jp: "Le jury a longuement discuté avant d'annoncer sa décision.", en: "The jury discussed at length before announcing its decision." }, drill: { jp: "Le jury a longuement discuté", en: "The jury discussed at length" }, accept: ["jury", "the jury", "the panel"], hint: "Also the panel of a competition or an exam." },
        { id: "fr-u121l3-ladefense", type: "vocab", front: "la défense", reading: "ladefense", meaning: "the defence", example: { jp: "La défense a présenté de nouveaux faits, ce qui a tout changé.", en: "The defence presented new facts, which changed everything." }, accept: ["defence", "the defence", "the defense"], hint: "The lawyer's side facing l'accusation; also self-defence, légitime défense." },
      ],
    },
    {
      id: "fr-u121l4",
      unit: 121,
      lesson: 4,
      title: "The verdict",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give the outcome: coupable, innocent, condamner, acquitter, la peine, la prison.",
      items: [
        { id: "fr-u121l4-laculpabilite", type: "vocab", front: "la culpabilité", reading: "laculpabilite", meaning: "guilt", example: { jp: "Le jury n'a eu aucun doute sur sa culpabilité, malgré les efforts de son avocat.", en: "The jury had no doubt about his guilt, despite his lawyer's efforts." }, accept: ["guilt", "the guilt", "culpability"], hint: "The state of being guilty, from coupable. Also the feeling: un sentiment de culpabilité." },
        { id: "fr-u121l4-ladetention", type: "vocab", front: "la détention", reading: "ladetention", meaning: "detention", example: { jp: "Il a passé six mois en détention avant même son procès.", en: "He spent six months in detention even before his trial." }, drill: { jp: "La détention a duré six mois", en: "The detention lasted six months" }, accept: ["detention", "the detention", "custody", "imprisonment"], hint: "Being held in custody. Also la détention d'une arme = possession of a weapon." },
        { id: "fr-u121l4-ecrouer", type: "vocab", front: "écrouer", reading: "ecrouer", meaning: "to imprison", example: { jp: "Le juge a décidé de l'écrouer, ce qui a surpris tout le monde.", en: "The judge decided to imprison him, which surprised everyone." }, accept: ["to imprison", "to jail", "to lock up", "to remand"], hint: "The formal legal word for putting someone in prison. From l'écrou, the bolt." },
        { id: "fr-u121l4-acquitter", type: "vocab", front: "acquitter", reading: "acquitter", meaning: "to acquit", example: { jp: "Comme il n'y avait aucune preuve, le juge a dû l'acquitter.", en: "As there was no evidence at all, the judge had to acquit him." }, accept: ["to acquit", "to clear", "to find not guilty"], hint: "The opposite of condamner — to declare not guilty." },
        { id: "fr-u121l4-lapeine", type: "vocab", front: "la peine", reading: "lapeine", meaning: "the sentence", example: { jp: "Sa peine est lourde, mais elle correspond à la gravité du crime.", en: "His sentence is heavy, but it matches the seriousness of the crime." }, drill: { jp: "La peine est très lourde", en: "The sentence is very heavy" }, accept: ["sentence", "the sentence", "the penalty"], hint: "The legal penalty here. The same word means sorrow, and effort (ça vaut la peine)." },
        { id: "fr-u121l4-laprison", type: "vocab", front: "la prison", reading: "laprison", meaning: "prison", example: { jp: "Il a passé cinq ans en prison, puis il a essayé de recommencer sa vie.", en: "He spent five years in prison, then he tried to start his life over." }, drill: { jp: "La prison est très loin", en: "The prison is very far away" }, accept: ["prison", "the prison", "jail"], hint: "en prison = in prison. The prisoner is un prisonnier." },
      ],
    },
  ],
};
