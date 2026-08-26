// FR Unit 116 — La déférence et les formules de politesse (slot: register-3) — B2
// SLOT DEVIATION: the scaffold title was "Register 3 — 敬語: humble and honorific",
// which is Japanese keigo. French has no keigo, so this slot is rendered as the
// nearest honest French equivalent: the register of FORMAL DEFERENCE AND HONORIFIC
// ADDRESS (the very polite, humble, ceremonial voice). French title:
// "La déférence et les formules de politesse".
//
// B1 (u79/u80) already taught the EVERYDAY-formal layer: veuillez, je vous prie,
// cordialement, je vous remercie, je reste à votre disposition, dans l'attente de
// votre réponse, je me permets de, je vous serais reconnaissant, auriez-vous,
// pourriez-vous, puis-je. This B2 unit goes ONE LEVEL ABOVE, into ceremonial
// deference: honorific titles of address, humble self-positioning, high-register
// requests, and the fixed letter-closing formulae. None of the B1 fronts are reused.
// Every front checked against the 2,168 live fr fronts + block1 (u95-96).
export const FR_UNIT116 = {
  id: "fr-u116",
  lang: "fr",
  title: "La déférence et les formules de politesse",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "fr-u116l1",
      unit: 116,
      lesson: 1,
      title: "Honorific address",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Address a high official by their proper honorific title and open a deferential disagreement.",
      items: [
        { id: "fr-u116l1-mledirecteur", type: "vocab", front: "Monsieur le Directeur", reading: "monsieurledirecteur", meaning: "Mr. Director", example: { jp: "Monsieur le Directeur, je comprends votre décision, mais je reste inquiet pour mon poste.", en: "Mr. Director, I understand your decision, but I remain worried about my position." }, accept: ["mr director", "mr. director", "sir (the director)", "dear director"], hint: "Formal opening to a company or school head; capitalized in letters. Extends 'Madame, Monsieur' (Unit 79) and 'le Directeur' with the title of office." },
        { id: "fr-u116l1-mlapresidente", type: "vocab", front: "Madame la Présidente", reading: "madamelapresidente", meaning: "Madam President", example: { jp: "Madame la Présidente, je vous remercie de votre réponse, et je vous prie de croire à l'assurance de mon profond respect.", en: "Madam President, thank you for your reply, and please accept the assurance of my deepest respect." }, accept: ["madam president", "madam chairwoman", "madam chair"], hint: "Formal address to a woman heading a body or state; the feminine of 'le Président' (Unit 39) plus 'Madame'." },
        { id: "fr-u116l1-maitre", type: "vocab", front: "Maître", reading: "maitre", meaning: "Maître (title for a lawyer or notary)", example: { jp: "Maître, je vous remercie de votre réponse; grâce à vous, je comprends enfin la loi.", en: "Maître, thank you for your reply; thanks to you, I finally understand the law." }, accept: ["maitre", "counsel", "counsellor", "counselor"], hint: "The title used to address a lawyer or notary in place of Monsieur/Madame. Always capitalized; no everyday English equivalent." },
        { id: "fr-u116l1-excellence", type: "vocab", front: "Excellence", reading: "excellence", meaning: "Your Excellency", example: { jp: "Excellence, je vous prie de m'excuser, car je ne pourrai pas venir demain.", en: "Your Excellency, please excuse me, for I will not be able to come tomorrow." }, accept: ["your excellency", "excellency"], hint: "Address for an ambassador, bishop, or high dignitary; used with 'Votre Excellence' in the third person." },
        { id: "fr-u116l1-saufrespect", type: "vocab", front: "sauf votre respect", reading: "saufvotrerespect", meaning: "with all due respect", example: { jp: "Sauf votre respect, je ne suis pas d'accord avec cette décision.", en: "With all due respect, I do not agree with this decision." }, accept: ["with all due respect", "with respect", "with your leave"], hint: "A deferential preface to a disagreement — it softens the contradiction that follows. Built on 'le respect' (Unit 38)." },
        { id: "fr-u116l1-deference", type: "vocab", front: "en toute déférence", reading: "entoutedeference", meaning: "with all deference, most respectfully", example: { jp: "En toute déférence, je reste persuadé que vous avez raison.", en: "With all deference, I remain persuaded that you are right." }, accept: ["with all deference", "most respectfully", "in all deference"], hint: "A very formal marker of respect toward a superior; 'la déférence' = respectful submission (transparent cognate of 'deference')." },
      ],
    },
    {
      id: "fr-u116l2",
      unit: 116,
      lesson: 2,
      title: "Humble self-positioning",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Position yourself humbly before a superior — asking leave, hedging, or announcing a regretful obligation.",
      items: [
        { id: "fr-u116l2-permettezmoi", type: "vocab", front: "permettez-moi de", reading: "permettezmoide", meaning: "allow me to, permit me to", example: { jp: "Permettez-moi de vous présenter mon collègue, qui travaille avec moi depuis des années.", en: "Allow me to introduce my colleague, who has worked with me for years." }, accept: ["allow me to", "permit me to", "let me"], hint: "A polite request for permission to act or speak; a more direct way to ask leave than the self-effacing 'je me permets de' (Unit 80). Takes DE + infinitive." },
        { id: "fr-u116l2-joseespere", type: "vocab", front: "j'ose espérer", reading: "joseesperer", meaning: "I venture to hope, I dare hope", example: { jp: "J'ose espérer que vous comprendrez ma situation, car elle est difficile.", en: "I dare hope that you will understand my situation, for it is difficult." }, accept: ["i dare hope", "i venture to hope", "i would hope"], hint: "A humble, hopeful formula: 'oser' (Unit 81) + 'espérer' (Unit 49) — it turns a request into a modest wish." },
        { id: "fr-u116l2-sijepuis", type: "vocab", front: "si je puis me permettre", reading: "sijepuismepermettre", meaning: "if I may (be so bold)", example: { jp: "Si je puis me permettre, votre raisonnement me paraît un peu rapide.", en: "If I may, your reasoning seems a little hasty to me." }, accept: ["if i may", "if i may say so", "if i might"], hint: "A very deferential hedge before a remark; 'puis' is the formal literary variant of 'peux'. Compare 'puis-je' (Unit 79)." },
        { id: "fr-u116l2-contraint", type: "vocab", front: "je me vois contraint de", reading: "jemevoiscontraintde", meaning: "I find myself compelled to, I am obliged to", example: { jp: "Je me vois contraint de partir plus tôt, car ma mère est tombée malade.", en: "I find myself compelled to leave earlier, because my mother has fallen ill." }, accept: ["i am compelled to", "i find myself compelled to", "i am obliged to", "i have no choice but to"], hint: "A formal way to announce an obligation you regret; 'contraint' = forced. Note the preposition: contraint DE + infinitive." },
        { id: "fr-u116l2-nesaurais", type: "vocab", front: "je ne saurais", reading: "jenesaurais", meaning: "I could not, I would not know how to", example: { jp: "Je ne saurais vous remercier assez pour tout ce que vous avez fait.", en: "I could never thank you enough for all that you have done." }, accept: ["i could not", "i couldn't", "i would not know how to", "i cannot"], hint: "'Je ne saurais + infinitive' is a refined, softened 'je ne peux pas' — a conditional of politeness, not a real inability." },
        { id: "fr-u116l2-humilite", type: "vocab", front: "c'est avec humilité que", reading: "cestavechumiliteque", meaning: "it is with humility that", example: { jp: "C'est avec humilité que j'accepte cette responsabilité si importante.", en: "It is with great humility that I accept such an important responsibility." }, accept: ["it is with humility that", "with humility", "it is humbly that"], hint: "A ceremonial opener for accepting an honor or duty; 'l'humilité' = humility (transparent cognate). The cleft 'c'est ... que' foregrounds the manner." },
      ],
    },
    {
      id: "fr-u116l3",
      unit: 116,
      lesson: 3,
      title: "Deferential request",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a formal, deferential request in a letter or before an authority.",
      items: [
        { id: "fr-u116l3-sauraisgre", type: "vocab", front: "je vous saurais gré de", reading: "jevoussauraisgrede", meaning: "I would be grateful to you if you would", example: { jp: "Je vous saurais gré de me répondre avant la fin de la semaine.", en: "I would be grateful if you would reply to me before the end of the week." }, accept: ["i would be grateful", "i would be obliged", "i would appreciate it if you would"], hint: "A high-register 'I would be grateful'; 'savoir gré' is a fixed idiom. More formal than 'je vous serais reconnaissant' (Unit 80). Takes DE + infinitive." },
        { id: "fr-u116l3-obligeance", type: "vocab", front: "l'obligeance", reading: "lobligeance", meaning: "kindness, graciousness", example: { jp: "Auriez-vous l'obligeance de me rappeler l'heure du rendez-vous?", en: "Would you be so kind as to remind me of the time of the appointment?" }, accept: ["kindness", "graciousness", "obligingness", "the kindness"], hint: "Formal 'kindness': 'avoir l'obligeance de' = to be so kind as to. Pairs with 'auriez-vous' (Unit 80). Feminine noun." },
        { id: "fr-u116l3-daigner", type: "vocab", front: "daigner", reading: "daigner", meaning: "to deign, to condescend (to do)", example: { jp: "Le ministre a enfin daigné répondre à notre lettre, après des mois de silence.", en: "The minister finally deigned to reply to our letter, after months of silence." }, accept: ["to deign", "to condescend", "deign", "condescend"], hint: "To lower oneself to do something — often faintly ironic about someone acting superior. 'daigner + infinitive', no preposition." },
        { id: "fr-u116l3-solliciter", type: "vocab", front: "solliciter", reading: "solliciter", meaning: "to request, to seek (formally)", example: { jp: "Je me permets de solliciter un rendez-vous afin de discuter de mon dossier.", en: "I take the liberty of requesting an appointment in order to discuss my file." }, accept: ["to request", "to seek", "to apply for", "request", "solicit"], hint: "Formal 'to request / apply for': solliciter un poste, un entretien, une audience. Note: solliciter QUELQUE CHOSE (direct object, no preposition)." },
        { id: "fr-u116l3-vouloirbien", type: "vocab", front: "vouloir bien", reading: "vouloirbien", meaning: "to be so good as to, to kindly agree to", example: { jp: "Je vous prie de vouloir bien accepter mes excuses pour ce retard.", en: "Please be so kind as to accept my apologies for this delay." }, accept: ["to be so good as to", "to kindly", "to be willing to", "to consent to"], hint: "'vouloir bien' = to consent graciously — more deferential than plain 'vouloir'. Common in letters: veuillez bien..., je vous prie de vouloir bien..." },
        { id: "fr-u116l3-recommande", type: "vocab", front: "je me recommande de", reading: "jemerecommandede", meaning: "I refer to (someone) as my reference", example: { jp: "Je me recommande de Madame Martin, qui pourra vous parler de mon travail.", en: "I come recommended by Madame Martin, who will be able to tell you about my work." }, accept: ["i come recommended by", "i refer to", "i cite as my reference", "i am recommended by"], hint: "'se recommander de quelqu'un' = to cite someone as your reference or sponsor. A fixed reflexive idiom of formal introduction." },
      ],
    },
    {
      id: "fr-u116l4",
      unit: 116,
      lesson: 4,
      title: "Ceremonial closes",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Close a formal letter with the correct ceremonial sign-off formula.",
      items: [
        { id: "fr-u116l4-agreer", type: "vocab", front: "veuillez agréer", reading: "veuillezagreer", meaning: "please accept (formal letter close)", example: { jp: "Dans l'attente de votre réponse, veuillez agréer, Monsieur, l'assurance de mon profond respect.", en: "Awaiting your reply, please accept, Sir, the assurance of my deepest respect." }, accept: ["please accept", "kindly accept", "be pleased to accept"], hint: "The opening verb of the standard French letter-closing formula: 'Veuillez agréer ... l'expression de mes salutations'. Formal imperative of agréer; extends 'veuillez' (Unit 79)." },
        { id: "fr-u116l4-salutations", type: "vocab", front: "mes salutations distinguées", reading: "messalutationsdistinguees", meaning: "my distinguished regards (formal sign-off)", example: { jp: "Je vous prie de recevoir mes salutations distinguées, en vous remerciant encore.", en: "Please receive my distinguished regards, thanking you once again." }, accept: ["my distinguished regards", "yours faithfully", "yours sincerely", "distinguished regards"], hint: "The most common formal letter sign-off, following 'veuillez agréer'. 'distingué' = distinguished; note the feminine-plural agreement." },
        { id: "fr-u116l4-hommages", type: "vocab", front: "mes respectueux hommages", reading: "mesrespectueuxhommages", meaning: "my respectful regards (deferential sign-off)", example: { jp: "Je vous prie d'accepter mes respectueux hommages, chère Madame.", en: "Please accept my respectful regards, dear Madame." }, accept: ["my respectful regards", "my respectful compliments", "respectful regards"], hint: "A very deferential close, traditionally addressed by a man to a woman. 'l'hommage' = homage/tribute (used in the plural here)." },
        { id: "fr-u116l4-presenterhommages", type: "vocab", front: "présenter ses hommages", reading: "presenterseshommages", meaning: "to pay one's respects", example: { jp: "Il tient à présenter ses hommages au directeur avant de partir.", en: "He is keen to pay his respects to the director before leaving." }, accept: ["to pay one's respects", "to present one's compliments", "pay one's respects"], hint: "'présenter ses hommages à quelqu'un' = to pay one's respects. A ceremonial courtesy; extends 'présenter' (Unit 54)." },
        { id: "fr-u116l4-renouvelant", type: "vocab", front: "en vous renouvelant", reading: "envousrenouvelant", meaning: "in renewing to you (my thanks, my apologies)", example: { jp: "En vous renouvelant mes excuses pour ce retard, je reste à votre disposition.", en: "Renewing my apologies for this delay, I remain at your disposal." }, accept: ["in renewing to you", "renewing to you", "once again offering you"], hint: "A letter-closing gerund formula: 'en vous renouvelant mes remerciements / mes excuses, ...'. It sets up the final sign-off." },
        { id: "fr-u116l4-disposition", type: "vocab", front: "se tenir à votre entière disposition", reading: "seteniravotreentieredisposition", meaning: "to remain entirely at your disposal", example: { jp: "Notre équipe se tient à votre entière disposition pour toute question.", en: "Our team remains entirely at your disposal for any question." }, accept: ["to remain entirely at your disposal", "to be entirely at your disposal", "at your full disposal"], hint: "The heightened form of 'je reste à votre disposition' (Unit 79): 'entière' adds full, unreserved availability." },
      ],
    },
  ],
};
