// PT Unit 99 — A identidade e a sociedade (slot: identity-society) — B2
//
// WHO PEOPLE ARE AND WHAT HOLDS THEM TOGETHER. u32 gave society and the
// citizen, u68 gave relationships and o preconceito, a minoria, a integração,
// a solidariedade, pertencer. u80 gave the stages of a life. What is missing is
// the language of BELONGING and its failure: where you are from, who is left
// out, and what a community is made of when it works.
//
// SLOT BOUNDARIES:
//   a identidade is SPENT at u44, a comunidade and a sociedade at u32, a
//   integração and a desigualdade and a solidariedade and o preconceito and a
//   minoria and pertencer at u68, a raiz and o antepassado at u63. A very full
//   neighbourhood — hence a singularidade rather than a identidade, a inclusão
//   rather than a integração, a disparidade rather than a desigualdade, a
//   entreajuda rather than a solidariedade, and l4 titled "O que nos liga"
//   rather than "A comunidade". Lower slot wins, every time.
//
// ⚠️ THE GUARD 3 CASE THAT COST THIS UNIT A WORD. l2 was planned with acolher,
// to take in. `a colher` — the spoon, pt-u15l3 — folds to exactly "acolher",
// so the grader would have accepted one word as the other. albergar replaced
// it. Blocks 2 and 3: run every front through normalizeReading before you
// commit to it. The failure is invisible until the test goes red.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT99 = {
  id: "pt-u99",
  lang: "pt",
  title: "A identidade e a sociedade",
  order: 99,
  stage: "b2",
  lessons: [
    {
      id: "pt-u99l1",
      unit: 99,
      lesson: 1,
      title: "A identidade",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where you are from in Portuguese — your birthplace, your ancestry, what you feel part of.",
      items: [
        { id: "pt-u99l1-asingularidade", type: "vocab", front: "a singularidade", reading: "asingularidade", meaning: "distinctiveness", example: { jp: "A singularidade desta aldeia está na língua que ainda se fala lá.", en: "This village's distinctiveness lies in the language still spoken there." }, drill: { jp: "A singularidade da aldeia é a língua", en: "The village's distinctiveness is its language" }, accept: ["distinctiveness", "uniqueness", "singularity", "what sets it apart"], hint: "sin-gu-la-ri-DA-de. What makes something one of a kind. Singular in Portuguese means both grammatically singular and remarkable — um caso singular." },
        { id: "pt-u99l1-identificarse", type: "vocab", front: "identificar-se", reading: "identificarse", meaning: "to identify (with)", example: { jp: "Muitos jovens não se identificam com nenhum dos lados deste debate.", en: "Many young people don't identify with either side of this debate." }, drill: { jp: "É fácil identificar-se com o protagonista", en: "It's easy to identify with the protagonist" }, accept: ["to identify with", "identify with", "to relate to", "to see oneself in"], hint: "i-den-ti-fi-KAR-se. With com: identificar-se com. It also covers showing your ID at a desk — identificar-se à entrada — so the reflexive does double duty." },
        { id: "pt-u99l1-enraizar", type: "vocab", front: "enraizar", reading: "enraizar", meaning: "to take root", example: { jp: "O costume enraizou-se e hoje ninguém sabe bem de onde veio.", en: "The custom took root and today nobody quite knows where it came from." }, drill: { jp: "O costume começou a enraizar-se cedo", en: "The custom began to take root early" }, accept: ["to take root", "take root", "to become established", "to put down roots", "to embed"], hint: "en-rrai-ZAR, built on a raiz (Unit 63). Of a plant, a habit or a community settling in for good. Enraizado, rooted, is the adjective." },
        { id: "pt-u99l1-apertenca", type: "vocab", front: "a pertença", reading: "apertenca", meaning: "belonging", example: { jp: "O sentimento de pertença é o que segura as pessoas na terra.", en: "The sense of belonging is what keeps people on the land." }, drill: { jp: "A pertença ao grupo é forte", en: "The belonging to the group is strong" }, accept: ["belonging", "the belonging", "sense of belonging", "membership"], hint: "per-TEN-sa, from pertencer (Unit 68). The feeling of being part of something. Portugal says a pertença; Brazil usually o pertencimento." },
        { id: "pt-u99l1-anaturalidade", type: "vocab", front: "a naturalidade", reading: "anaturalidade", meaning: "place of birth", example: { jp: "O papel pede o nome, a data de nascimento e a naturalidade.", en: "The form asks for the name, the date of birth and the place of birth." }, drill: { jp: "O papel pede sempre a naturalidade", en: "The form always asks for the place of birth" }, accept: ["place of birth", "birthplace", "the place of birth", "town of birth"], hint: "na-tu-ra-li-DA-de. On a Portuguese form this box means the town you were born in — NOT your nationality, which is a nacionalidade. Its other sense is naturalness of manner." },
        { id: "pt-u99l1-aascendencia", type: "vocab", front: "a ascendência", reading: "aascendencia", meaning: "ancestry", example: { jp: "A ascendência da família vem toda do mesmo vale do norte.", en: "The family's ancestry all comes from the same northern valley." }, drill: { jp: "A ascendência da família vem dali", en: "The family's ancestry comes from there" }, accept: ["ancestry", "the ancestry", "descent", "family origins", "lineage"], hint: "ash-sen-DEN-si-a. Who you come from, looking upward through the family — its mirror a descendência looks down. De ascendência portuguesa is on every emigration form." },
      ],
    },
    {
      id: "pt-u99l2",
      unit: 99,
      lesson: 2,
      title: "A diversidade",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about a mixed society in Portuguese — diversity, inclusion, migration, exchange.",
      items: [
        { id: "pt-u99l2-adiversidade", type: "vocab", front: "a diversidade", reading: "adiversidade", meaning: "diversity", example: { jp: "A diversidade da turma é hoje maior do que era há dez anos.", en: "The class's diversity is greater today than it was ten years ago." }, drill: { jp: "A diversidade da turma aumentou muito", en: "The class's diversity increased a lot" }, accept: ["diversity", "the diversity", "variety", "range", "mix"], hint: "di-ver-si-DA-de. Variety of any kind — a diversidade biológica, a diversidade cultural. The adjective diverso, confusingly, usually just means 'several'." },
        { id: "pt-u99l2-ainclusao", type: "vocab", front: "a inclusão", reading: "ainclusao", meaning: "inclusion", example: { jp: "A escola trabalha a inclusão desde o primeiro ano de todos.", en: "The school works on inclusion from everyone's first year." }, drill: { jp: "A escola trabalha a inclusão desde cedo", en: "The school works on inclusion from early on" }, accept: ["inclusion", "the inclusion", "inclusiveness", "bringing in"], hint: "in-klu-ZOWN. Making sure nobody is left out — a educação inclusiva is the standard phrase in Portuguese schools. Its opposite, a exclusão, arrives in the next lesson." },
        { id: "pt-u99l2-albergar", type: "vocab", front: "albergar", reading: "albergar", meaning: "to take in (to shelter)", example: { jp: "O país albergou milhares de pessoas que fugiam da guerra.", en: "The country took in thousands of people fleeing the war." }, drill: { jp: "O país vai albergar mais pessoas", en: "The country is going to take in more people" }, accept: ["to take in", "take in", "to shelter", "to house", "to accommodate"], hint: "al-ber-GAR, from o albergue, the hostel. To give shelter to people — and also to house a thing: o edifício alberga o museu." },
        { id: "pt-u99l2-omigrante", type: "vocab", front: "o migrante", reading: "omigrante", meaning: "migrant", example: { jp: "O migrante que chega hoje enfrenta as mesmas perguntas de sempre.", en: "The migrant arriving today faces the same questions as ever." }, drill: { jp: "O migrante enfrenta sempre as mesmas perguntas", en: "The migrant always faces the same questions" }, accept: ["migrant", "the migrant", "person who migrates"], hint: "mi-GRAN-te. The neutral word, covering both directions — where o emigrante leaves and o imigrante arrives. Portugal, which has been both, uses all three precisely." },
        { id: "pt-u99l2-plural", type: "vocab", front: "plural", reading: "plural", meaning: "plural (diverse)", example: { jp: "A sociedade é hoje mais plural do que os livros antigos contam.", en: "Society today is more plural than the old books say." }, drill: { jp: "A sociedade é hoje mais plural", en: "Society today is more plural" }, accept: ["plural", "diverse", "many-sided", "pluralistic"], hint: "plu-RAL. Beyond the grammatical sense, Portuguese uses it to mean made of many different parts — uma sociedade plural. It is meant as a compliment." },
        { id: "pt-u99l2-ointercambio", type: "vocab", front: "o intercâmbio", reading: "ointercambio", meaning: "exchange (programme)", example: { jp: "O intercâmbio entre as escolas já dura há mais de vinte anos.", en: "The exchange between the schools has been running for over twenty years." }, drill: { jp: "O intercâmbio entre as escolas continua", en: "The exchange between the schools continues" }, accept: ["exchange", "the exchange", "exchange programme", "interchange"], hint: "in-ter-KAM-bi-u. A two-way exchange of students, staff or ideas — fazer um intercâmbio. Written with a circumflex in both Portugal and Brazil." },
      ],
    },
    {
      id: "pt-u99l3",
      unit: 99,
      lesson: 3,
      title: "A desigualdade",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe who gets left out in Portuguese — the gap, the privilege, the vulnerable, the shortage.",
      items: [
        { id: "pt-u99l3-adisparidade", type: "vocab", front: "a disparidade", reading: "adisparidade", meaning: "disparity", example: { jp: "A disparidade entre as regiões do país continua a aumentar.", en: "The disparity between the country's regions keeps growing." }, drill: { jp: "A disparidade entre regiões continua grande", en: "The disparity between regions remains large" }, accept: ["disparity", "the disparity", "gap", "imbalance", "difference"], hint: "dish-pa-ri-DA-de. A measurable gap — a disparidade salarial, the pay gap. More precise and more formal than a diferença." },
        { id: "pt-u99l3-marginalizar", type: "vocab", front: "marginalizar", reading: "marginalizar", meaning: "to marginalise", example: { jp: "O sistema acaba por marginalizar quem não fala bem a língua.", en: "The system ends up marginalising those who don't speak the language well." }, drill: { jp: "O sistema pode marginalizar essas pessoas", en: "The system can marginalise those people" }, accept: ["to marginalise", "marginalise", "to marginalize", "to push to the edges", "to sideline"], hint: "mar-zhi-na-li-ZAR, from a margem (Unit 93). To push someone to the edge of society. Note that um marginal in Portuguese is a criminal, not a marginalised person." },
        { id: "pt-u99l3-excluir", type: "vocab", front: "excluir", reading: "excluir", meaning: "to exclude", example: { jp: "Nenhuma regra deve excluir justamente quem mais precisa de ajuda.", en: "No rule should exclude precisely those who most need help." }, drill: { jp: "Nenhuma regra deve excluir os pobres", en: "No rule should exclude the poor" }, accept: ["to exclude", "exclude", "to leave out", "to shut out", "to bar"], hint: "esh-klu-EER. To leave out or shut out. A exclusão social is the standard term, and excluindo does duty for the everyday 'excluding'." },
        { id: "pt-u99l3-oprivilegio", type: "vocab", front: "o privilégio", reading: "oprivilegio", meaning: "privilege", example: { jp: "O privilégio é difícil de ver quando se nasce dentro dele.", en: "Privilege is hard to see when you are born inside it." }, drill: { jp: "O privilégio é difícil de ver", en: "Privilege is hard to see" }, accept: ["privilege", "the privilege", "advantage", "special right"], hint: "pri-vi-LE-zhi-u. An advantage some have and others do not. Also used warmly in speech: foi um privilégio, it was a privilege — same word, no politics attached." },
        { id: "pt-u99l3-vulneravel", type: "vocab", front: "vulnerável", reading: "vulneravel", meaning: "vulnerable", example: { jp: "As famílias mais vulneráveis foram as primeiras a sentir a subida.", en: "The most vulnerable families were the first to feel the rise." }, drill: { jp: "Esta família é mais vulnerável agora", en: "This family is more vulnerable now" }, accept: ["vulnerable", "at risk", "exposed", "fragile"], hint: "vul-ne-RA-vel. Open to harm — grupos vulneráveis is in every Portuguese social report. A vulnerabilidade is the condition itself." },
        { id: "pt-u99l3-acarencia", type: "vocab", front: "a carência", reading: "acarencia", meaning: "deprivation", example: { jp: "A carência de médicos no interior do país já dura muitos anos.", en: "The shortage of doctors in the country's interior has lasted many years." }, drill: { jp: "A carência de médicos continua grave", en: "The shortage of doctors remains serious" }, accept: ["deprivation", "the deprivation", "shortage", "lack", "want"], hint: "ka-REN-si-a. A lack of something essential — carência de médicos, carência habitacional. Also emotional need: carência afetiva. Carecer de is the verb." },
      ],
    },
    {
      id: "pt-u99l4",
      unit: 99,
      lesson: 4,
      title: "O que nos liga",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe what holds a community together in Portuguese — mutual aid, volunteering, cohesion, collective effort.",
      items: [
        { id: "pt-u99l4-aentreajuda", type: "vocab", front: "a entreajuda", reading: "aentreajuda", meaning: "mutual aid", example: { jp: "A entreajuda entre vizinhos é o que segura a aldeia no inverno.", en: "Mutual aid between neighbours is what keeps the village going in winter." }, drill: { jp: "A entreajuda entre vizinhos é grande", en: "Mutual aid between neighbours is considerable" }, accept: ["mutual aid", "mutual help", "helping one another", "neighbourly help"], hint: "en-tre-a-ZHU-da — literally between-help. Neighbours helping neighbours, with no organisation behind it. A rural Portuguese word now used of cities too." },
        { id: "pt-u99l4-otecidosocial", type: "vocab", front: "o tecido social", reading: "otecidosocial", meaning: "social fabric", example: { jp: "O tecido social da cidade mudou muito quando a fábrica acabou.", en: "The city's social fabric changed a great deal when the factory closed." }, drill: { jp: "O tecido social da cidade mudou", en: "The city's social fabric changed" }, accept: ["social fabric", "the social fabric", "fabric of society", "social ties"], hint: "o tecido is cloth, and the image is identical to English: the weave that holds a society together, and which tears. Common in Portuguese journalism and policy writing." },
        { id: "pt-u99l4-mobilizar", type: "vocab", front: "mobilizar", reading: "mobilizar", meaning: "to mobilise", example: { jp: "A associação conseguiu mobilizar muita gente num só dia.", en: "The association managed to mobilise a lot of people in a single day." }, drill: { jp: "A associação conseguiu mobilizar muita gente", en: "The association managed to mobilise a lot of people" }, accept: ["to mobilise", "mobilise", "to mobilize", "to rally", "to get moving"], hint: "mu-bi-li-ZAR. To get people organised and moving for a cause. Its first sense is military; in Portuguese civic life it is now the commoner one." },
        { id: "pt-u99l4-ovoluntariado", type: "vocab", front: "o voluntariado", reading: "ovoluntariado", meaning: "volunteering", example: { jp: "O voluntariado ocupa-lhe os sábados desde que deixou de trabalhar.", en: "Volunteering has taken up his Saturdays since he stopped working." }, drill: { jp: "O voluntariado ocupa-lhe os sábados", en: "Volunteering takes up his Saturdays" }, accept: ["volunteering", "the volunteering", "voluntary work", "volunteer service"], hint: "vu-lun-ta-ri-A-du. The activity, not the person — o voluntário is the volunteer. Fazer voluntariado is the standard phrase." },
        { id: "pt-u99l4-acoesao", type: "vocab", front: "a coesão", reading: "acoesao", meaning: "cohesion", example: { jp: "A coesão do grupo desapareceu assim que o dinheiro acabou.", en: "The group's cohesion vanished as soon as the money ran out." }, drill: { jp: "A coesão do grupo desapareceu depressa", en: "The group's cohesion vanished quickly" }, accept: ["cohesion", "the cohesion", "unity", "togetherness", "solidity"], hint: "ku-e-ZOWN. What holds a group together. A coesão social and a coesão territorial are fixtures of European and Portuguese policy language." },
        { id: "pt-u99l4-coletivo", type: "vocab", front: "coletivo", reading: "coletivo", meaning: "collective", example: { jp: "O esforço coletivo valeu muito mais do que o talento de um só.", en: "The collective effort was worth far more than any one person's talent." }, drill: { jp: "O esforço coletivo valeu bem mais", en: "The collective effort was worth far more" }, accept: ["collective", "shared", "joint", "common"], hint: "ku-le-TEE-vu. Belonging to the group — o trabalho coletivo. Portugal has written coletivo since 1990; older texts have colectivo. In Brazil o coletivo is also the bus." },
      ],
    },
  ],
};
