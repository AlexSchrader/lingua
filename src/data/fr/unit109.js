// FR Unit 109 — Health as a public system (slot: health-systems) — B2
// B1 Unit 74 taught health at the intermediate/clinical level: le symptôme, le
// diagnostic, le traitement, la guérison, guérir, la douleur, le bien-être — the
// patient in front of the doctor. This B2 unit goes ONE register above: health as
// a PUBLIC SYSTEM, as ETHICS and as ACCESS — the policy/institutional voice of an
// op-ed or a lecture: le système de santé, la santé publique, l'accès aux soins,
// la prise en charge, les inégalités de santé, la prévention, le dépistage, une
// pandémie, l'éthique médicale, le consentement, la dignité.
// Every front checked against the 2,168 live fr fronts + block1.
export const FR_UNIT109 = {
  id: "fr-u109",
  lang: "fr",
  title: "La santé publique et le soin",
  order: 109,
  stage: "b2",
  lessons: [
    {
      id: "fr-u109l1",
      unit: 109,
      lesson: 1,
      title: "The system and its funding",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Explain how a public health system is organised and paid for.",
      items: [
        { id: "fr-u109l1-lesystemedesante", type: "vocab", front: "le système de santé", reading: "lesystemedesante", meaning: "the healthcare system", example: { jp: "Le système de santé français protège toute la population, mais il coûte de plus en plus cher.", en: "The French healthcare system protects the whole population, but it costs more and more." }, accept: ["the healthcare system", "the health system", "the health-care system"], hint: "Le système DE santé — the whole institution, not one hospital. Compare le système (Unit 65)." },
        { id: "fr-u109l1-lasantepublique", type: "vocab", front: "la santé publique", reading: "lasantepublique", meaning: "public health", example: { jp: "La santé publique, c'est protéger toute la population, surtout les plus pauvres.", en: "Public health means protecting the whole population, especially the poorest." }, accept: ["public health"], hint: "Health as a collective, policy matter — vaccination, prévention — not one patient's santé." },
        { id: "fr-u109l1-lessoins", type: "vocab", front: "les soins", reading: "lessoins", meaning: "care / medical care", example: { jp: "Dans ce pays, les soins sont gratuits à l'hôpital, donc personne n'a peur d'y aller.", en: "In this country, care is free at the hospital, so no one is afraid to go." }, accept: ["care", "medical care", "treatment"], hint: "Almost always plural: les soins. l'accès aux soins, donner des soins." },
        { id: "fr-u109l1-lasecuritesociale", type: "vocab", front: "la Sécurité sociale", reading: "lasecuritesociale", meaning: "the (French) social security", example: { jp: "La Sécurité sociale rembourse les soins de tous les citoyens, ce qui protège les familles pauvres.", en: "Social Security reimburses the care of every citizen, which protects poor families." }, accept: ["social security", "the social security system", "national health insurance"], hint: "France's public health insurer, funded by la cotisation. Often just la Sécu in speech." },
        { id: "fr-u109l1-lacotisation", type: "vocab", front: "la cotisation", reading: "lacotisation", meaning: "the (social-insurance) contribution", example: { jp: "La cotisation est prise sur chaque salaire, et cet argent aide à soigner tout le monde.", en: "The contribution is taken from every wage, and this money helps to treat everyone." }, accept: ["the contribution", "the payment", "social insurance contribution"], hint: "The money taken from wages to fund la Sécu — not a tax (l'impôt, Unit 73), a cotisation." },
        { id: "fr-u109l1-leremboursement", type: "vocab", front: "le remboursement", reading: "leremboursement", meaning: "the reimbursement", example: { jp: "Le remboursement aide les malades à se soigner, si bien que même les plus pauvres ne renoncent pas.", en: "Reimbursement helps the sick to get treatment, so that even the poorest don't give up." }, accept: ["the reimbursement", "the refund", "reimbursement"], hint: "The noun from rembourser (Unit 73): what la Sécu pays back to you." },
      ],
    },
    {
      id: "fr-u109l2",
      unit: 109,
      lesson: 2,
      title: "Access and inequality",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss who can get care and who is left out.",
      items: [
        { id: "fr-u109l2-laccesauxsoins", type: "vocab", front: "l'accès aux soins", reading: "laccesauxsoins", meaning: "access to care", example: { jp: "L'accès aux soins reste difficile à la campagne, tandis qu'en ville il y a beaucoup de médecins.", en: "Access to care remains difficult in the countryside, whereas in the city there are lots of doctors." }, accept: ["access to care", "access to healthcare", "healthcare access"], hint: "The phrase in every health debate: l'accès aux soins. soins stays plural." },
        { id: "fr-u109l2-lapriseencharge", type: "vocab", front: "la prise en charge", reading: "lapriseencharge", meaning: "the (medical/financial) handling", example: { jp: "La prise en charge des malades chroniques coûte cher, mais l'hôpital ne refuse personne.", en: "Handling chronically ill patients is expensive, but the hospital turns no one away." }, accept: ["the coverage", "the handling", "care provision", "taking charge"], hint: "Institutional term: who takes responsibility (and pays) for a patient — la prise en charge." },
        { id: "fr-u109l2-linegalitesdesante", type: "vocab", front: "les inégalités de santé", reading: "linegalitesdesante", meaning: "health inequalities", example: { jp: "Les inégalités de santé sont fortes, car les plus pauvres vivent souvent moins longtemps.", en: "Health inequalities are stark, because the poorest often live for less time." }, accept: ["health inequalities", "health inequality", "inequalities in health"], hint: "A plural collocation from l'inégalité (Unit 75): the health gap between rich and poor." },
        { id: "fr-u109l2-ledesertmedical", type: "vocab", front: "le désert médical", reading: "ledesertmedical", meaning: "the medical desert (underserved area)", example: { jp: "Dans un désert médical, il faut attendre des mois pour voir un médecin, si bien que beaucoup renoncent.", en: "In a medical desert, you have to wait months to see a doctor, so many give up." }, accept: ["the medical desert", "medical desert", "an underserved area"], hint: "Une zone rurale sans médecins = un désert médical. médical agrees masc. here." },
        { id: "fr-u109l2-lapenurie", type: "vocab", front: "la pénurie", reading: "lapenurie", meaning: "the shortage", example: { jp: "La pénurie de médecins touche surtout les campagnes, tandis que les villes en ont beaucoup.", en: "The shortage of doctors hits the countryside above all, whereas cities have plenty of them." }, accept: ["the shortage", "shortage", "the scarcity"], hint: "Une pénurie DE — a serious lack of something needed: une pénurie de médecins, de médicaments." },
        { id: "fr-u109l2-lesoignant", type: "vocab", front: "le soignant", reading: "lesoignant", meaning: "the carer / healthcare worker", example: { jp: "Après la crise, les soignants ont besoin de repos, pourtant ils continuent à aider les malades.", en: "After the crisis, care workers need rest, yet they keep on helping the sick." }, accept: ["the carer", "the caregiver", "healthcare worker", "care worker"], hint: "From soigner (Unit 32): anyone who gives care — nurse, aide, doctor. les soignants = the care staff." },
      ],
    },
    {
      id: "fr-u109l3",
      unit: 109,
      lesson: 3,
      title: "Prevention and public-health crisis",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about prevention, screening, and how a society responds to a pandemic.",
      items: [
        { id: "fr-u109l3-laprevention", type: "vocab", front: "la prévention", reading: "laprevention", meaning: "prevention", example: { jp: "La prévention coûte moins cher que le traitement, car il vaut mieux prévenir que guérir.", en: "Prevention costs less than treatment, because it's better to prevent than to cure." }, accept: ["prevention"], hint: "The noun from prévenir (Unit 74): stopping illness before it starts, not treating it after." },
        { id: "fr-u109l3-ledepistage", type: "vocab", front: "le dépistage", reading: "ledepistage", meaning: "the screening (medical testing)", example: { jp: "Le dépistage permet de voir la maladie plus tôt, si bien que le traitement commence plus vite.", en: "Screening makes it possible to spot the illness earlier, so that treatment starts sooner." }, accept: ["the screening", "screening", "early detection", "testing"], hint: "Testing a healthy population to catch disease early: le dépistage du cancer. From dépister." },
        { id: "fr-u109l3-lapandemie", type: "vocab", front: "la pandémie", reading: "lapandemie", meaning: "the pandemic", example: { jp: "Une pandémie touche plusieurs pays à la fois, tandis qu'une épidémie reste dans une seule région.", en: "A pandemic strikes several countries at once, whereas an epidemic stays within one region." }, accept: ["the pandemic", "pandemic"], hint: "Bigger than une épidémie (Unit 74): a pandémie crosses countries and continents." },
        { id: "fr-u109l3-leconfinement", type: "vocab", front: "le confinement", reading: "leconfinement", meaning: "the lockdown", example: { jp: "Pendant le confinement, personne ne pouvait sortir, ce qui a protégé les plus fragiles.", en: "During lockdown, no one could go out, which protected the most vulnerable." }, accept: ["the lockdown", "lockdown", "confinement"], hint: "The 2020 word: staying home to slow a virus. le confinement / le déconfinement." },
        { id: "fr-u109l3-lesperancedevie", type: "vocab", front: "l'espérance de vie", reading: "lesperancedevie", meaning: "life expectancy", example: { jp: "L'espérance de vie augmente d'année en année, mais elle baisse chez les plus pauvres.", en: "Life expectancy rises year after year, but it falls among the poorest." }, accept: ["life expectancy", "the life expectancy"], hint: "How many years one can expect to live on average — a key santé publique statistic." },
        { id: "fr-u109l3-lavaccination", type: "vocab", front: "la vaccination", reading: "lavaccination", meaning: "vaccination", example: { jp: "La vaccination protège aussi les autres, car un malade de moins, c'est un risque de moins.", en: "Vaccination protects others too, because one fewer sick person is one fewer risk." }, accept: ["vaccination", "the vaccination", "immunisation"], hint: "The act/campaign, not the substance: from le vaccin (Unit 74). la vaccination de masse." },
      ],
    },
    {
      id: "fr-u109l4",
      unit: 109,
      lesson: 4,
      title: "Medical ethics",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss the ethics of care: consent, confidentiality, and dignity.",
      items: [
        { id: "fr-u109l4-equite", type: "vocab", front: "l'équité", reading: "lequite", meaning: "fairness, equity", example: { jp: "L'équité exige les mêmes soins pour chaque malade, même quand il est pauvre.", en: "Equity demands the same care for every patient, even when he is poor." }, accept: ["fairness", "equity", "equity in access", "fairness in access"], hint: "Fair treatment for all — l'équité de l'accès aux soins. Stronger than mere equality: it weighs need, not just sameness." },
        { id: "fr-u109l4-leconsentement", type: "vocab", front: "le consentement", reading: "leconsentement", meaning: "consent", example: { jp: "Sans le consentement du malade, le médecin ne peut rien faire, même quand la vie est en danger.", en: "Without the patient's consent, the doctor can do nothing, even when life is in danger." }, accept: ["consent", "the consent"], hint: "le consentement éclairé = informed consent. From consentir à — to agree to." },
        { id: "fr-u109l4-ladeontologie", type: "vocab", front: "la déontologie", reading: "ladeontologie", meaning: "professional ethics / code of conduct", example: { jp: "La déontologie oblige le médecin à protéger chaque malade, même le plus pauvre.", en: "The code of conduct requires the doctor to protect every patient, even the poorest." }, accept: ["professional ethics", "the code of conduct", "deontology", "medical code of ethics"], hint: "The written rules of a profession: la déontologie médicale, la déontologie du journaliste." },
        { id: "fr-u109l4-lesecretmedical", type: "vocab", front: "le secret médical", reading: "lesecretmedical", meaning: "medical confidentiality", example: { jp: "Le secret médical protège le malade, si bien que le médecin ne dit rien à personne.", en: "Medical confidentiality protects the patient, so that the doctor tells no one anything." }, accept: ["medical confidentiality", "doctor-patient confidentiality", "medical secrecy"], hint: "Doctor-patient confidentiality. secret here is a noun: le secret médical." },
        { id: "fr-u109l4-autonomie", type: "vocab", front: "l'autonomie", reading: "lautonomie", meaning: "autonomy", example: { jp: "L'autonomie du malade doit être respectée, si bien que le médecin explique tout avant de soigner.", en: "The patient's autonomy must be respected, so the doctor explains everything before treating." }, accept: ["autonomy", "self-determination", "patient autonomy", "the autonomy"], hint: "The patient's right to decide for themselves — a pillar of l'éthique médicale, alongside le consentement." },
        { id: "fr-u109l4-lacharnementtherapeutique", type: "vocab", front: "l'acharnement thérapeutique", reading: "lacharnementtherapeutique", meaning: "aggressive/futile over-treatment", example: { jp: "L'acharnement thérapeutique continue les soins sans vrai résultat, si bien que beaucoup de malades le refusent.", en: "Futile over-treatment continues care with no real result, so that many patients refuse it." }, accept: ["aggressive over-treatment", "futile medical treatment", "overtreatment", "relentless treatment"], hint: "Continuing treatment with no hope of cure — a major fin-de-vie debate in France." },
      ],
    },
  ],
};
