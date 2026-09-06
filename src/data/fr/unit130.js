// FR Unit 130 — Le temps et le rythme ("Time and pace") — B2
// Strand D, coverage unit 13 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 13 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 teach the everyday time words (maintenant,
// bientôt, déjà, toujours, souvent, autrefois, désormais, dorénavant, de nos
// jours, à long terme, tout à coup, d'un seul coup). This unit authors the more
// FORMAL / PRECISE time adverbials a B2 speaker uses to place and pace events —
// d'emblée, au préalable, sur-le-champ, au fil du temps. Grammar-as-vocab: the
// example carries the pattern. Every front checked against the 2,168 fronts and
// the sibling B2 blocks. Conventions: see fr/unit1.js.
export const FR_UNIT130 = {
  id: "fr-u130",
  lang: "fr",
  title: "Le temps et le rythme",
  order: 130,
  stage: "b2",
  lessons: [
    {
      id: "fr-u130l1",
      unit: 130,
      lesson: 1,
      title: "Right away",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something happens at once: aussitôt, sur-le-champ, d'emblée, sitôt, dans l'immédiat, incessamment.",
      items: [
        { id: "fr-u130l1-aussitot", type: "vocab", front: "aussitôt", reading: "aussitot", meaning: "immediately", example: { jp: "Aussitôt arrivé, il s'est mis au travail.", en: "As soon as he arrived, he got down to work." }, accept: ["immediately", "at once", "straight away", "as soon as"], hint: "aussitôt que = as soon as. Don't confuse with aussi tôt (as early)." },
        { id: "fr-u130l1-surlechamp", type: "vocab", front: "sur-le-champ", reading: "surlechamp", meaning: "on the spot", example: { jp: "Il a compris le problème et l'a réglé sur-le-champ.", en: "He understood the problem and fixed it on the spot." }, accept: ["on the spot", "right away", "immediately", "there and then"], hint: "Literally 'on the field'. Written with two hyphens." },
        { id: "fr-u130l1-demblee", type: "vocab", front: "d'emblée", reading: "demblee", meaning: "right from the start", example: { jp: "D'emblée, on sent que quelque chose ne va pas.", en: "Right from the start, you feel that something is wrong." }, accept: ["right from the start", "straight away", "immediately", "from the outset"], hint: "Without hesitation, from the very first moment." },
        { id: "fr-u130l1-sitot", type: "vocab", front: "sitôt", reading: "sitot", meaning: "as soon as", example: { jp: "Sitôt dit, sitôt fait : le travail était terminé.", en: "No sooner said than done: the work was finished." }, drill: { jp: "Sitôt dit sitôt fait", en: "No sooner said than done" }, accept: ["as soon as", "no sooner", "the moment"], hint: "A more literary aussitôt. sitôt dit, sitôt fait is a set phrase." },
        { id: "fr-u130l1-danslimmediat", type: "vocab", front: "dans l'immédiat", reading: "danslimmediat", meaning: "for the time being", example: { jp: "Dans l'immédiat, rien ne change ; on verra plus tard.", en: "For the time being, nothing changes; we'll see later." }, accept: ["for the time being", "for now", "right now", "in the immediate future"], hint: "For right now, as opposed to later. From immédiat." },
        { id: "fr-u130l1-incessamment", type: "vocab", front: "incessamment", reading: "incessamment", meaning: "any moment now", example: { jp: "Le train doit arriver incessamment, patientez un peu.", en: "The train should arrive any moment now; wait a little." }, accept: ["any moment now", "very soon", "shortly"], hint: "Confusingly, this means 'very soon', not 'without ceasing'. From cesser." },
      ],
    },
    {
      id: "fr-u130l2",
      unit: 130,
      lesson: 2,
      title: "Before and after",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Order events in time: au préalable, par la suite, entre-temps, tôt ou tard, sous peu, à l'avenir.",
      items: [
        { id: "fr-u130l2-auprealable", type: "vocab", front: "au préalable", reading: "auprealable", meaning: "beforehand", example: { jp: "Il faut réserver au préalable, sinon il n'y a plus de place.", en: "You have to book beforehand, otherwise there's no more room." }, accept: ["beforehand", "in advance", "first", "prior to that"], hint: "As a necessary first step. From préalable, prior." },
        { id: "fr-u130l2-parlasuite", type: "vocab", front: "par la suite", reading: "parlasuite", meaning: "later on", example: { jp: "Au début, ça allait ; par la suite, tout s'est compliqué.", en: "At first it was fine; later on, everything got complicated." }, accept: ["later on", "afterwards", "subsequently", "later"], hint: "At a later point in the story. From la suite, what follows." },
        { id: "fr-u130l2-entretemps", type: "vocab", front: "entre-temps", reading: "entretemps", meaning: "in the meantime", example: { jp: "Il est parti chercher du pain ; entre-temps, les invités sont arrivés.", en: "He went to get bread; in the meantime, the guests arrived." }, accept: ["in the meantime", "meanwhile", "in between"], hint: "During the gap between two moments. Written with a hyphen." },
        { id: "fr-u130l2-totoutard", type: "vocab", front: "tôt ou tard", reading: "totoutard", meaning: "sooner or later", example: { jp: "Tôt ou tard, la vérité finit toujours par sortir.", en: "Sooner or later, the truth always ends up coming out." }, accept: ["sooner or later", "eventually", "in the end"], hint: "Inevitably, at some unknown future point." },
        { id: "fr-u130l2-souspeu", type: "vocab", front: "sous peu", reading: "souspeu", meaning: "shortly", example: { jp: "Nous vous répondrons sous peu, merci de patienter.", en: "We will answer you shortly; thank you for waiting." }, accept: ["shortly", "soon", "before long"], hint: "In a short time. A touch formal, common in writing." },
        { id: "fr-u130l2-alavenir", type: "vocab", front: "à l'avenir", reading: "alavenir", meaning: "from now on", example: { jp: "À l'avenir, pense à prévenir avant de venir.", en: "From now on, remember to let me know before coming." }, accept: ["from now on", "in future", "henceforth"], hint: "From l'avenir, the future. Concerns everything still to come." },
      ],
    },
    {
      id: "fr-u130l3",
      unit: 130,
      lesson: 3,
      title: "Now and then",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the present and change: à présent, tantôt, par moments, au fil du temps, de bonne heure, momentanément.",
      items: [
        { id: "fr-u130l3-apresent", type: "vocab", front: "à présent", reading: "apresent", meaning: "now", example: { jp: "À présent que tu es là, on peut commencer.", en: "Now that you're here, we can begin." }, drill: { jp: "À présent tu peux commencer", en: "Now you can start" }, accept: ["now", "at present", "these days"], hint: "A slightly more formal maintenant. à présent que = now that." },
        { id: "fr-u130l3-tantot", type: "vocab", front: "tantôt", reading: "tantot", meaning: "sometimes", example: { jp: "Il est tantôt gentil, tantôt froid : on ne sait jamais.", en: "He's sometimes kind, sometimes cold: you never know." }, accept: ["sometimes", "now... now", "at times"], hint: "tantôt… tantôt… = sometimes one way, sometimes another. Also 'this afternoon' in some regions." },
        { id: "fr-u130l3-parmoments", type: "vocab", front: "par moments", reading: "parmoments", meaning: "at times", example: { jp: "Par moments, je me demande si j'ai fait le bon choix.", en: "At times, I wonder if I made the right choice." }, drill: { jp: "Par moments je me demande pourquoi", en: "At times I wonder why" }, accept: ["at times", "now and then", "occasionally", "sometimes"], hint: "Every so often, on and off." },
        { id: "fr-u130l3-aufildutemps", type: "vocab", front: "au fil du temps", reading: "aufildutemps", meaning: "over time", example: { jp: "Au fil du temps, ils sont devenus de vrais amis.", en: "Over time, they became real friends." }, accept: ["over time", "as time goes by", "gradually", "with time"], hint: "From le fil, the thread — following the thread of time." },
        { id: "fr-u130l3-debonneheure", type: "vocab", front: "de bonne heure", reading: "debonneheure", meaning: "early", example: { jp: "On est partis de bonne heure pour éviter les embouteillages.", en: "We left early to avoid the traffic jams." }, accept: ["early", "bright and early", "at an early hour"], hint: "Early in the day. A common alternative to tôt." },
        { id: "fr-u130l3-momentanement", type: "vocab", front: "momentanément", reading: "momentanement", meaning: "momentarily", example: { jp: "Le service est momentanément fermé pour travaux.", en: "The service is momentarily closed for works." }, accept: ["momentarily", "temporarily", "for the moment", "briefly"], hint: "For a short while, not permanently. From le moment." },
      ],
    },
    {
      id: "fr-u130l4",
      unit: 130,
      lesson: 4,
      title: "Always and never",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about lasting time: sans cesse, en permanence, à jamais, naguère, à terme, provisoirement.",
      items: [
        { id: "fr-u130l4-sanscesse", type: "vocab", front: "sans cesse", reading: "sanscesse", meaning: "constantly", example: { jp: "Il se plaint sans cesse, même quand tout va bien.", en: "He complains constantly, even when everything is fine." }, drill: { jp: "Il se plaint sans cesse", en: "He complains constantly" }, accept: ["constantly", "ceaselessly", "endlessly", "all the time"], hint: "Without stopping. From cesser, to cease." },
        { id: "fr-u130l4-enpermanence", type: "vocab", front: "en permanence", reading: "enpermanence", meaning: "permanently", example: { jp: "Une caméra surveille l'entrée en permanence.", en: "A camera watches the entrance permanently." }, accept: ["permanently", "constantly", "at all times", "round the clock"], hint: "All the time, without interruption. From permanent." },
        { id: "fr-u130l4-ajamais", type: "vocab", front: "à jamais", reading: "ajamais", meaning: "forever", example: { jp: "Ce jour restera à jamais dans ma mémoire.", en: "That day will remain forever in my memory." }, accept: ["forever", "for ever", "for all time", "eternally"], hint: "For all time to come. More literary than pour toujours." },
        { id: "fr-u130l4-naguere", type: "vocab", front: "naguère", reading: "naguere", meaning: "not long ago", example: { jp: "Cette rue, si calme naguère, est aujourd'hui très bruyante.", en: "This street, so quiet not long ago, is very noisy today." }, accept: ["not long ago", "formerly", "once", "a while back"], hint: "In the recent past. Literary; don't confuse with jadis (the distant past)." },
        { id: "fr-u130l4-aterme", type: "vocab", front: "à terme", reading: "aterme", meaning: "in the long run", example: { jp: "À terme, cette décision coûtera cher à tout le monde.", en: "In the long run, this decision will cost everyone dearly." }, accept: ["in the long run", "eventually", "ultimately", "in time"], hint: "By the time a process reaches its end. From le terme." },
        { id: "fr-u130l4-provisoirement", type: "vocab", front: "provisoirement", reading: "provisoirement", meaning: "temporarily", example: { jp: "Il loge provisoirement chez un ami, le temps de trouver mieux.", en: "He's staying temporarily at a friend's, until he finds something better." }, accept: ["temporarily", "provisionally", "for now"], hint: "For the time being, until something more lasting. From provisoire." },
      ],
    },
  ],
};
