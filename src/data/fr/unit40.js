// FR Unit 40 — Technology and communication (slot: technology) — A2
// A1 gave the learner le téléphone and l'ordinateur (Unit 25) and nothing else;
// this unit is the whole rest of the device vocabulary a learner needs to use a
// phone in French. NOTE: la souris (mouse) is deliberately absent — A1 Unit 25
// already teaches it as the animal, and a word gets one home (contract.js
// front-uniqueness). The pointing device is taught in examples instead.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–39.
export const FR_UNIT40 = {
  id: "fr-u40",
  lang: "fr",
  title: "La technologie",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "fr-u40l1",
      unit: 40,
      lesson: 1,
      title: "Screens and devices",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the things on your desk and in your pocket: l'écran, le clavier, le portable, la tablette.",
      items: [
        { id: "fr-u40l1-lecran", type: "vocab", front: "l'écran", reading: "lecran", meaning: "the screen", example: { jp: "Mon écran est trop petit.", en: "My screen is too small." }, accept: ["screen", "display", "monitor"] },
        { id: "fr-u40l1-leclavier", type: "vocab", front: "le clavier", reading: "leclavier", meaning: "the keyboard", example: { jp: "J'écris sur mon clavier.", en: "I type on my keyboard." }, drill: { jp: "J'écris sur le clavier", en: "I write on the keyboard" }, accept: ["keyboard", "the keyboard"], hint: "A French keyboard is AZERTY, not QWERTY — the top row starts differently." },
        { id: "fr-u40l1-leportable", type: "vocab", front: "le portable", reading: "leportable", meaning: "the mobile phone", example: { jp: "Mon portable est dans mon sac.", en: "My mobile is in my bag." }, accept: ["mobile", "cell phone", "cellphone", "laptop"], hint: "Portable = anything you carry. Usually the phone; sometimes the laptop." },
        { id: "fr-u40l1-latablette", type: "vocab", front: "la tablette", reading: "latablette", meaning: "the tablet", example: { jp: "Ma mère lit sur sa tablette.", en: "My mother reads on her tablet." }, accept: ["tablet", "the tablet", "ipad"] },
        { id: "fr-u40l1-labatterie", type: "vocab", front: "la batterie", reading: "labatterie", meaning: "the battery", example: { jp: "Mon portable a une bonne batterie.", en: "My phone has a good battery." }, accept: ["battery", "the battery"], hint: "Also the drums in a band — une batterie." },
        { id: "fr-u40l1-lecasque", type: "vocab", front: "le casque", reading: "lecasque", meaning: "the headphones", example: { jp: "J'écoute de la musique avec mon casque.", en: "I listen to music with my headphones." }, accept: ["headphones", "helmet", "headset"], hint: "Same word as a helmet — un casque is anything you put on your head." },
      ],
    },
    {
      id: "fr-u40l2",
      unit: 40,
      lesson: 2,
      title: "Online",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get yourself online in French: sur internet, un site, le réseau, mon mot de passe, mon profil.",
      items: [
        { id: "fr-u40l2-internet", type: "vocab", front: "internet", reading: "internet", meaning: "the internet", example: { jp: "Je cherche le prix sur internet.", en: "I'm looking up the price on the internet." }, accept: ["internet", "the net", "the web"], hint: "No article: sur internet, never \"sur l'internet\"." },
        { id: "fr-u40l2-lesite", type: "vocab", front: "le site", reading: "lesite", meaning: "the website", example: { jp: "Le site de la gare donne les heures des trains.", en: "The station website gives the train times." }, accept: ["site", "website", "web site"] },
        { id: "fr-u40l2-lereseau", type: "vocab", front: "le réseau", reading: "lereseau", meaning: "the network", example: { jp: "Il n'y a pas de réseau ici.", en: "There's no signal here." }, accept: ["network", "signal", "the network"], hint: "Also the social kind: les réseaux sociaux." },
        { id: "fr-u40l2-lemotdepasse", type: "vocab", front: "le mot de passe", reading: "lemotdepasse", meaning: "the password", example: { jp: "Mon mot de passe est trop facile.", en: "My password is too easy." }, accept: ["password", "the password"], hint: "Literally \"word of passing\" — three words, one idea." },
        { id: "fr-u40l2-lapplication", type: "vocab", front: "l'application", reading: "lapplication", meaning: "the app", example: { jp: "Cette application est gratuite.", en: "This app is free." }, accept: ["app", "application", "the app"], hint: "Everyone shortens it to une appli." },
        { id: "fr-u40l2-leprofil", type: "vocab", front: "le profil", reading: "leprofil", meaning: "the profile", example: { jp: "J'ai un profil sur ce site.", en: "I have a profile on this site." }, drill: { jp: "Le profil est sur le site", en: "The profile is on the site" }, accept: ["profile", "the profile"] },
      ],
    },
    {
      id: "fr-u40l3",
      unit: 40,
      lesson: 3,
      title: "Messages",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Send and answer messages: j'envoie un message, je réponds à ton mail, une photo, une vidéo.",
      items: [
        { id: "fr-u40l3-lemessage", type: "vocab", front: "le message", reading: "lemessage", meaning: "the message", example: { jp: "J'ai un message de ma sœur.", en: "I have a message from my sister." }, accept: ["message", "text", "the message"] },
        { id: "fr-u40l3-lemail", type: "vocab", front: "le mail", reading: "lemail", meaning: "the email", example: { jp: "Je regarde mes mails le matin.", en: "I check my emails in the morning." }, accept: ["email", "e-mail", "the email"], hint: "Officially le courriel — but in real life everyone says un mail." },
        { id: "fr-u40l3-jenvoie", type: "vocab", front: "j'envoie", reading: "jenvoie", meaning: "I send", example: { jp: "J'envoie un message à Marie.", en: "I'm sending Marie a message." }, accept: ["i'm sending", "i send"] },
        { id: "fr-u40l3-jereponds", type: "vocab", front: "je réponds", reading: "jereponds", meaning: "I answer", example: { jp: "Je réponds à ton message ce soir.", en: "I'll answer your message this evening." }, accept: ["i reply", "i respond", "i'm answering"], hint: "répondre À someone or something — the à is not optional." },
        { id: "fr-u40l3-laphoto", type: "vocab", front: "la photo", reading: "laphoto", meaning: "the photo", example: { jp: "Je prends une photo de la mer.", en: "I'm taking a photo of the sea." }, accept: ["photo", "picture", "photograph"], hint: "You TAKE a photo with prendre, exactly like English." },
        { id: "fr-u40l3-lavideo", type: "vocab", front: "la vidéo", reading: "lavideo", meaning: "the video", example: { jp: "Cette vidéo est très drôle.", en: "This video is very funny." }, accept: ["video", "clip", "the video"] },
      ],
    },
    {
      id: "fr-u40l4",
      unit: 40,
      lesson: 4,
      title: "Using it",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you're doing with the device: j'allume, j'éteins, je télécharge, je clique, en ligne.",
      items: [
        { id: "fr-u40l4-jallume", type: "vocab", front: "j'allume", reading: "jallume", meaning: "I turn on", example: { jp: "J'allume mon ordinateur le matin.", en: "I turn my computer on in the morning." }, accept: ["i switch on", "i turn on", "i light"], hint: "Also \"I light\": j'allume une lampe. The opposite is j'éteins." },
        { id: "fr-u40l4-jeteins", type: "vocab", front: "j'éteins", reading: "jeteins", meaning: "I turn off", example: { jp: "J'éteins mon portable la nuit.", en: "I turn my phone off at night." }, accept: ["i switch off", "i turn off", "i put out"] },
        { id: "fr-u40l4-jetelecharge", type: "vocab", front: "je télécharge", reading: "jetelecharge", meaning: "I download", example: { jp: "Je télécharge un film.", en: "I'm downloading a film." }, accept: ["i'm downloading", "i download"], hint: "In practice télécharger means download. Uploading is téléverser, or just uploader." },
        { id: "fr-u40l4-jeclique", type: "vocab", front: "je clique", reading: "jeclique", meaning: "I click", example: { jp: "Je clique sur la photo.", en: "I click on the photo." }, accept: ["i'm clicking", "i click"], hint: "cliquer SUR something — you click on it, as in English." },
        { id: "fr-u40l4-enligne", type: "vocab", front: "en ligne", reading: "enligne", meaning: "online", example: { jp: "J'achète mes billets en ligne.", en: "I buy my tickets online." }, accept: ["on line", "on the internet"], hint: "Literally \"in line\" — but it never means queueing. That's faire la queue." },
        { id: "fr-u40l4-lefichier", type: "vocab", front: "le fichier", reading: "lefichier", meaning: "the file", example: { jp: "Ce fichier est trop grand.", en: "This file is too big." }, accept: ["file", "document", "the file"] },
      ],
    },
  ],
};
