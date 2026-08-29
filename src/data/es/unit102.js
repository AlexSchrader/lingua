// ES Unit 102 — La sanidad y los cuidados ("Health systems and care") — B2 (slot: health-systems)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: medicine as a SYSTEM.
// The system and who pays for it (l1), epidemiology and prevention policy (l2), access
// and cost (l3), care work and bioethics (l4).
// Symptoms, treatment and the clinic visit stay with u67/u85 and appear here only as
// already-taught example vocabulary. Rejected as already taught: la epidemia (u67),
// la vacuna, la dosis (u85); rejected as the same lexeme: la vacunación (~u85 la vacuna),
// la prevención (~u67 prevenir), la prestación (~u27 prestar).
export const ES_UNIT102 = {
  id: "es-u102",
  lang: "es",
  title: "La sanidad y los cuidados",
  order: 102,
  stage: "b2",
  lessons: [
    {
      id: "es-u102l1",
      unit: 102,
      lesson: 1,
      title: "El sistema sanitario",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a health system as a system: what it covers, who pays for it, and whether it reaches everyone equally.",
      items: [
        { id: "es-u102l1-sanidad", type: "vocab", front: "la sanidad", reading: "lasanidad", meaning: "the health service (public system)", example: { jp: "La sanidad pública llega a casi toda la población.", en: "The public health service reaches almost the whole population." }, accept: ["health service", "public health system", "healthcare system", "health care"], hint: "The institution, not the condition: la salud (u11) is your health, la sanidad is the system that looks after it." },
        { id: "es-u102l1-sanitario", type: "vocab", front: "sanitario", reading: "sanitario", meaning: "health (adjective) / health worker", example: { jp: "Cada región tiene su propio sistema sanitario.", en: "Each region has its own health system." }, accept: ["health", "healthcare", "medical", "health worker"], hint: "Adjective first — el sistema sanitario, el gasto sanitario — and as a noun it means the staff: los sanitarios trabajaron sin descanso." },
        { id: "es-u102l1-cobertura", type: "vocab", front: "la cobertura", reading: "lacobertura", meaning: "coverage", example: { jp: "La cobertura del seguro no incluye este tratamiento.", en: "The insurance coverage does not include this treatment." }, accept: ["coverage", "cover"], hint: "How much of a population, or of a cost, is covered. From cubrir; the same noun covers phone signal — no hay cobertura." },
        { id: "es-u102l1-copago", type: "vocab", front: "el copago", reading: "elcopago", meaning: "co-payment", example: { jp: "El copago obliga a pagar una parte del tratamiento.", en: "The co-payment obliges you to pay part of the treatment." }, accept: ["co-payment", "copayment", "user fee"], hint: "The share the patient pays themselves. Built transparently from co- + pago, and it is one of the sharpest words in any health debate." },
        { id: "es-u102l1-financiacion", type: "vocab", front: "la financiación", reading: "lafinanciacion", meaning: "funding / financing", example: { jp: "La financiación del hospital viene del Estado.", en: "The hospital's funding comes from the state." }, accept: ["funding", "financing", "finance"], hint: "Where the money comes from, as a standing arrangement. La financiación pública vs la financiación privada is the whole argument in one pair." },
        { id: "es-u102l1-equidad", type: "vocab", front: "la equidad", reading: "laequidad", meaning: "equity / fairness", example: { jp: "Con equidad, la salud no depende del dinero de cada familia.", en: "With equity, health does not depend on each family's money." }, accept: ["equity", "fairness"], hint: "Not the same as equality: la equidad gives each person what they need, which may not be the same amount." },
      ],
    },
    {
      id: "es-u102l2",
      unit: 102,
      lesson: 2,
      title: "Brotes y salud pública",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about an outbreak and how a population is protected: spread, screening, and death rates.",
      items: [
        { id: "es-u102l2-brote", type: "vocab", front: "el brote", reading: "elbrote", meaning: "outbreak", example: { jp: "Un brote apareció en tres hospitales de la región.", en: "An outbreak appeared in three hospitals in the region." }, accept: ["outbreak", "flare-up"], hint: "The first cluster of cases, before anyone calls it anything bigger. Literally a bud on a plant — the image is of something breaking out." },
        { id: "es-u102l2-pandemia", type: "vocab", front: "la pandemia", reading: "lapandemia", meaning: "pandemic", example: { jp: "La pandemia cambió la vida de mucha gente.", en: "The pandemic changed a lot of people's lives." }, accept: ["pandemic"], hint: "Bigger than la epidemia (u67), which stays in one place: pan- means across everything." },
        { id: "es-u102l2-contagio", type: "vocab", front: "el contagio", reading: "elcontagio", meaning: "transmission / spread", example: { jp: "El contagio fue muy alto durante todo el año.", en: "Transmission was very high all year." }, accept: ["transmission", "spread", "contagion", "infection"], hint: "The passing of a disease from person to person, as a measurable quantity — el riesgo de contagio." },
        { id: "es-u102l2-contagiar", type: "vocab", front: "contagiar", reading: "contagiar", meaning: "to pass on (a disease)", example: { jp: "Es fácil contagiar a otras personas sin saberlo.", en: "It is easy to pass it on to other people without knowing." }, accept: ["to pass on", "to infect", "to spread", "infect"], hint: "You contagias someone else; you te contagias when you catch it. It works for laughter too: contagiar la risa." },
        { id: "es-u102l2-cribado", type: "vocab", front: "el cribado", reading: "elcribado", meaning: "screening", example: { jp: "El cribado permite ver la enfermedad muy pronto.", en: "Screening makes it possible to see the disease very early." }, accept: ["screening", "screening programme", "screening program"], hint: "Testing a whole healthy group to find the few cases. From cribar, to sieve — you are passing a population through a mesh." },
        { id: "es-u102l2-mortalidad", type: "vocab", front: "la mortalidad", reading: "lamortalidad", meaning: "mortality (death rate)", example: { jp: "La mortalidad de esta enfermedad bajó mucho desde entonces.", en: "The mortality of this disease fell a lot since then." }, accept: ["mortality", "death rate", "mortality rate"], hint: "A rate, not a death: la mortalidad infantil is the standard measure of how a health system is doing." },
      ],
    },
    {
      id: "es-u102l3",
      unit: 102,
      lesson: 3,
      title: "Acceso, espera y coste",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss access to care: waiting lists, the local clinic, insurers, and what a drug costs.",
      items: [
        { id: "es-u102l3-acceso", type: "vocab", front: "el acceso", reading: "elacceso", meaning: "access", example: { jp: "El acceso a un médico no es fácil en todas las regiones.", en: "Access to a doctor is not easy in every region." }, accept: ["access", "entry"], hint: "Whether you can get to something at all — the first question in any health-system argument. El acceso a is the fixed pattern." },
        { id: "es-u102l3-listadeespera", type: "vocab", front: "la lista de espera", reading: "lalistadeespera", meaning: "waiting list", example: { jp: "La lista de espera para una operación es muy larga.", en: "The waiting list for an operation is very long." }, accept: ["waiting list", "wait list"], hint: "Built from esperar (u17). In Spain it is the single number people use to judge la sanidad." },
        { id: "es-u102l3-ambulatorio", type: "vocab", front: "el ambulatorio", reading: "elambulatorio", meaning: "local health centre", example: { jp: "Fui al ambulatorio del barrio porque el hospital estaba lejos.", en: "I went to the neighbourhood health centre because the hospital was far away." }, accept: ["health centre", "health center", "clinic", "local clinic"], hint: "The neighbourhood clinic you go to first, below the hospital. El centro de salud means the same thing in most of Spain." },
        { id: "es-u102l3-aseguradora", type: "vocab", front: "la aseguradora", reading: "laaseguradora", meaning: "insurer / insurance company", example: { jp: "La aseguradora no quiso pagar el tratamiento.", en: "The insurer refused to pay for the treatment." }, accept: ["insurer", "insurance company"], hint: "The company behind el seguro (u23). Feminine because the full phrase is la compañía aseguradora." },
        { id: "es-u102l3-farmaco", type: "vocab", front: "el fármaco", reading: "elfarmaco", meaning: "drug (medicine)", example: { jp: "El nuevo fármaco es demasiado caro para muchos países.", en: "The new drug is too expensive for many countries." }, accept: ["drug", "medicine", "pharmaceutical"], hint: "The technical word a report uses where speech says la medicina. Never the illegal sense — that is la droga." },
        { id: "es-u102l3-esperanzadevida", type: "vocab", front: "la esperanza de vida", reading: "laesperanzadevida", meaning: "life expectancy", example: { jp: "La esperanza de vida subió mucho gracias a la sanidad pública.", en: "Life expectancy rose a lot thanks to the public health service." }, accept: ["life expectancy"], hint: "A fixed phrase, always singular. It is the headline number for comparing whole countries." },
      ],
    },
    {
      id: "es-u102l4",
      unit: 102,
      lesson: 4,
      title: "Cuidados, dependencia y consentimiento",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about care work and the ethics around it: carers, dependency, ageing, consent and confidentiality.",
      items: [
        { id: "es-u102l4-cuidador", type: "vocab", front: "el cuidador", reading: "elcuidador", meaning: "carer / caregiver", example: { jp: "El cuidador pasa muchas horas con la misma persona.", en: "The carer spends many hours with the same person." }, accept: ["carer", "caregiver", "caretaker"], hint: "La cuidadora in the feminine, which is who it usually is — the gendered shape of care work is part of what this unit is about." },
        { id: "es-u102l4-cuidados", type: "vocab", front: "los cuidados", reading: "loscuidados", meaning: "care (the work of caring)", example: { jp: "Los cuidados en casa son más baratos que un hospital.", en: "Care at home is cheaper than a hospital." }, accept: ["care", "caring", "nursing care"], hint: "Plural for the activity as a whole. Los cuidados paliativos = palliative care; the singular el cuidado means carefulness." },
        { id: "es-u102l4-dependencia", type: "vocab", front: "la dependencia", reading: "ladependencia", meaning: "dependency (needing care)", example: { jp: "La dependencia aumenta con los años.", en: "Dependency increases with the years." }, accept: ["dependency", "dependence", "reliance"], hint: "From depender (u32). In health policy it is a legal status: una persona en situación de dependencia has a right to support." },
        { id: "es-u102l4-envejecimiento", type: "vocab", front: "el envejecimiento", reading: "elenvejecimiento", meaning: "ageing (of a population)", example: { jp: "El envejecimiento de la población cambia el gasto público.", en: "The ageing of the population changes public spending." }, accept: ["ageing", "aging", "population ageing"], hint: "The process, applied to a whole society rather than a face. Related to la vejez (u63), which is the state, not the process." },
        { id: "es-u102l4-consentimiento", type: "vocab", front: "el consentimiento", reading: "elconsentimiento", meaning: "consent", example: { jp: "Sin el consentimiento de la persona no se puede hacer nada.", en: "Without the person's consent nothing can be done." }, accept: ["consent", "permission"], hint: "The bioethics word: el consentimiento informado is the signed agreement after the risks were explained." },
        { id: "es-u102l4-confidencialidad", type: "vocab", front: "la confidencialidad", reading: "laconfidencialidad", meaning: "confidentiality", example: { jp: "La confidencialidad protege lo que dice cada persona.", en: "Confidentiality protects what each person says." }, accept: ["confidentiality", "privacy"], hint: "The duty not to repeat what you learned professionally. Wider than un secreto: it binds the institution, not just the individual." },
      ],
    },
  ],
};
