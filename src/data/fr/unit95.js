// FR Unit 95 — La rhétorique et la persuasion (slot: argument and persuasion) — B2
// FIRST UNIT OF FRENCH B2. B1's u58 already teaches ARGUMENTATION (l'argument,
// soutenir, réfuter, convaincre, persuader, concéder…). So B2 goes one level up:
// rhetoric as a CRAFT — the art of speaking (la rhétorique, l'éloquence,
// l'orateur), the devices (le sophisme, l'ironie, l'insinuation) and the tactics
// of persuasion (manipuler, séduire, flatter, rallier). Every front checked
// against the 2,168 live fr fronts (A1+A2+B1) and the taught lexemes it must not
// re-teach (convaincre, persuader, l'argument, concéder). Conventions: fr/unit1.js.
export const FR_UNIT95 = {
  id: "fr-u95",
  lang: "fr",
  title: "La rhétorique et la persuasion",
  order: 95,
  stage: "b2",
  lessons: [
    {
      id: "fr-u95l1",
      unit: 95,
      lesson: 1,
      title: "The art of speaking",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about skilled public speech: la rhétorique, l'éloquence, un orateur, plaider.",
      items: [
        { id: "fr-u95l1-larhetorique", type: "vocab", front: "la rhétorique", reading: "larhetorique", meaning: "rhetoric", example: { jp: "Son discours n'est que de la rhétorique, sans vraie solution.", en: "His speech is just rhetoric, with no real solution." }, accept: ["rhetoric", "the rhetoric"], hint: "The art of persuasive speech — often faintly negative: ce n'est que de la rhétorique." },
        { id: "fr-u95l1-leloquence", type: "vocab", front: "l'éloquence", reading: "leloquence", meaning: "eloquence", example: { jp: "Son éloquence a convaincu tout le public.", en: "His eloquence convinced the whole audience." }, accept: ["eloquence", "the eloquence"], hint: "The gift of speaking well and movingly — from éloquent." },
        { id: "fr-u95l1-lorateur", type: "vocab", front: "l'orateur", reading: "lorateur", meaning: "the speaker", example: { jp: "C'est un orateur brillant, écouté par tout le public.", en: "He's a brilliant speaker, listened to by the whole audience." }, accept: ["speaker", "the orator", "the public speaker"], hint: "A public speaker, especially a skilled one. Une oratrice for a woman." },
        { id: "fr-u95l1-eloquent", type: "vocab", front: "éloquent", reading: "eloquent", meaning: "eloquent", example: { jp: "Son silence était plus éloquent que de longs discours.", en: "His silence was more eloquent than any long speech." }, drill: { jp: "Son silence était très éloquent", en: "His silence was very eloquent" }, accept: ["eloquent", "telling"], hint: "Eloquent — or, of a fact or a silence, telling: un chiffre éloquent." },
        { id: "fr-u95l1-plaider", type: "vocab", front: "plaider", reading: "plaider", meaning: "to plead", example: { jp: "Elle a plaidé pour cette idée devant tout le monde.", en: "She argued for this idea in front of everyone." }, accept: ["to plead", "to argue for", "to make the case"], hint: "To plead (a case in court) or to argue for — plaider pour / en faveur de." },
        { id: "fr-u95l1-percutant", type: "vocab", front: "percutant", reading: "percutant", meaning: "hard-hitting", example: { jp: "Il a terminé son discours par une phrase percutante.", en: "He ended his speech with a hard-hitting sentence." }, drill: { jp: "Son discours était très percutant", en: "His speech was very hard-hitting" }, accept: ["hard-hitting", "striking", "punchy"], hint: "Hard-hitting, striking — un argument percutant. From percuter, to strike." },
      ],
    },
    {
      id: "fr-u95l2",
      unit: 95,
      lesson: 2,
      title: "Devices and moves",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the tricks of argument: un sophisme, une objection, l'ironie, insinuer.",
      items: [
        { id: "fr-u95l2-lesophisme", type: "vocab", front: "le sophisme", reading: "lesophisme", meaning: "the fallacy", example: { jp: "Ce beau raisonnement n'est en fait qu'un sophisme.", en: "This fine-sounding reasoning is in fact just a fallacy." }, drill: { jp: "Le sophisme est très clair", en: "The fallacy is very clear" }, accept: ["fallacy", "the sophism", "the false argument"], hint: "An argument that looks valid but isn't — from the ancient Sophists." },
        { id: "fr-u95l2-lobjection", type: "vocab", front: "l'objection", reading: "lobjection", meaning: "the objection", example: { jp: "Personne n'a pu répondre à son objection.", en: "Nobody could answer his objection." }, accept: ["objection", "the counterpoint"], hint: "A point raised against an argument — soulever une objection. From objecter." },
        { id: "fr-u95l2-lareplique", type: "vocab", front: "la réplique", reading: "lareplique", meaning: "the retort", example: { jp: "Il n'a pas trouvé de réplique à cette question.", en: "He couldn't find a comeback to that question." }, accept: ["retort", "the comeback", "the reply", "the line"], hint: "A quick reply or comeback — also an actor's line, or a replica." },
        { id: "fr-u95l2-lironie", type: "vocab", front: "l'ironie", reading: "lironie", meaning: "irony", example: { jp: "Son ironie est parfois difficile à comprendre.", en: "His irony is sometimes hard to understand." }, accept: ["irony", "the irony"], hint: "Saying the opposite of what you mean, to mock or amuse. ironique = ironic." },
        { id: "fr-u95l2-insinuer", type: "vocab", front: "insinuer", reading: "insinuer", meaning: "to insinuate", example: { jp: "Sans le dire vraiment, elle a insinué le contraire.", en: "Without quite saying it, she insinuated the opposite." }, accept: ["to insinuate", "to imply", "to hint"], hint: "To suggest something unpleasant without stating it — Qu'est-ce que tu insinues ?" },
        { id: "fr-u95l2-sousentendre", type: "vocab", front: "sous-entendre", reading: "sousentendre", meaning: "to imply", example: { jp: "Il sous-entend souvent bien plus qu'il ne dit.", en: "He often implies far more than he says." }, accept: ["to imply", "to hint at", "to suggest"], hint: "To mean something without saying it outright. The noun is le sous-entendu." },
      ],
    },
    {
      id: "fr-u95l3",
      unit: 95,
      lesson: 3,
      title: "Tactics of persuasion",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how people are won over — fairly or not: manipuler, séduire, flatter, prôner.",
      items: [
        { id: "fr-u95l3-manipuler", type: "vocab", front: "manipuler", reading: "manipuler", meaning: "to manipulate", example: { jp: "Elle sait manipuler ceux qui l'écoutent.", en: "She knows how to manipulate those who listen to her." }, accept: ["to manipulate", "to handle"], hint: "To manipulate people — or to handle an object: manipuler avec soin." },
        { id: "fr-u95l3-seduire", type: "vocab", front: "séduire", reading: "seduire", meaning: "to win over", example: { jp: "Son idée a séduit tout le monde très vite.", en: "Her idea won everyone over very quickly." }, drill: { jp: "Son idée va séduire tout le monde", en: "His idea is going to win everyone over" }, accept: ["to win over", "to seduce", "to charm", "to appeal to"], hint: "To seduce, or to win over / appeal to — une idée séduisante = an attractive idea." },
        { id: "fr-u95l3-flatter", type: "vocab", front: "flatter", reading: "flatter", meaning: "to flatter", example: { jp: "Il passe son temps à flatter le patron.", en: "He spends his time flattering the boss." }, accept: ["to flatter"], hint: "To flatter — se faire flatter. se vanter is to flatter oneself / boast." },
        { id: "fr-u95l3-exagerer", type: "vocab", front: "exagérer", reading: "exagerer", meaning: "to exaggerate", example: { jp: "Tu exagères un peu : ce n'est pas si difficile.", en: "You're exaggerating a bit: it's not that hard." }, drill: { jp: "Tu vas exagérer un peu", en: "You are going to exaggerate a little" }, accept: ["to exaggerate", "to overdo it"], hint: "To exaggerate — also 'to go too far': là, tu exagères !" },
        { id: "fr-u95l3-vanter", type: "vocab", front: "vanter", reading: "vanter", meaning: "to praise", example: { jp: "Elle vante ce restaurant à tous ses amis.", en: "She praises this restaurant to all her friends." }, accept: ["to praise", "to talk up", "to sing the praises of"], hint: "To praise, talk up — vanter les mérites de. se vanter = to boast." },
        { id: "fr-u95l3-proner", type: "vocab", front: "prôner", reading: "proner", meaning: "to advocate", example: { jp: "Elle prône le respect des règles pour tous.", en: "She advocates respect for the rules for everyone." }, accept: ["to advocate", "to preach", "to call for"], hint: "To advocate / call for openly — prôner la paix, prôner le changement." },
      ],
    },
    {
      id: "fr-u95l4",
      unit: 95,
      lesson: 4,
      title: "Carrying the room",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about winning agreement: l'adhésion, un consensus, rallier, une polémique.",
      items: [
        { id: "fr-u95l4-ladhesion", type: "vocab", front: "l'adhésion", reading: "ladhesion", meaning: "the support", example: { jp: "Cette idée a l'adhésion de presque tout le monde.", en: "This idea has almost everyone's support." }, accept: ["support", "the backing", "the buy-in", "membership"], hint: "Buy-in, agreement — emporter l'adhésion. Also joining/membership: from adhérer." },
        { id: "fr-u95l4-leconsensus", type: "vocab", front: "le consensus", reading: "leconsensus", meaning: "the consensus", example: { jp: "Après un long débat, ils ont trouvé un consensus.", en: "After a long debate, they reached a consensus." }, drill: { jp: "Le consensus est très difficile", en: "The consensus is very difficult" }, accept: ["consensus", "the agreement"], hint: "General agreement — parvenir à un consensus. From the Latin, 'agreement'." },
        { id: "fr-u95l4-rallier", type: "vocab", front: "rallier", reading: "rallier", meaning: "to rally", example: { jp: "Il a réussi à rallier tout le monde à son idée.", en: "He managed to rally everyone to his idea." }, accept: ["to rally", "to win over", "to bring round"], hint: "To bring people round to a view — rallier qqn à sa cause. se rallier à = to come round to." },
        { id: "fr-u95l4-souligner", type: "vocab", front: "souligner", reading: "souligner", meaning: "to stress", example: { jp: "Je voudrais souligner un point important.", en: "I'd like to stress an important point." }, accept: ["to stress", "to underline", "to point out", "to emphasise"], hint: "To underline a word, or to stress a point — souligner l'importance de." },
        { id: "fr-u95l4-insister", type: "vocab", front: "insister", reading: "insister", meaning: "to insist", example: { jp: "Elle insiste toujours sur les mêmes détails.", en: "She always insists on the same details." }, drill: { jp: "Elle va insister sur les détails", en: "She is going to insist on the details" }, accept: ["to insist", "to stress", "to press the point"], hint: "insister sur = to stress / dwell on; insister pour = to insist on doing." },
        { id: "fr-u95l4-lapolemique", type: "vocab", front: "la polémique", reading: "lapolemique", meaning: "the controversy", example: { jp: "Son livre a provoqué une vraie polémique.", en: "His book sparked a real controversy." }, accept: ["controversy", "the row", "the polemic"], hint: "A heated public dispute — une polémique éclate. From polémique, controversial." },
      ],
    },
  ],
};
