// FR Unit 110 — L'enseignement supérieur et la recherche (slot: education-research) — B2
// B1 already taught school at the everyday/intermediate level: l'école, l'élève,
// le professeur, apprendre, étudier, la matière, l'examen, le cours, l'université.
// This B2 unit goes ONE REGISTER LEVEL ABOVE — education as an INSTITUTION and the
// ACADEMIC/RESEARCH register an educated native uses in an op-ed or a lecture:
// higher education & credentials (l'enseignement supérieur, un cursus, un diplôme,
// une bourse d'études, la scolarité, un doctorat), how research works (un chercheur,
// un laboratoire, une thèse de doctorat, une revue scientifique, la vulgarisation,
// un protocole), knowledge & pedagogy (la pédagogie, le savoir, le savoir-faire,
// l'apprentissage, la maîtrise, un colloque), and merit & inequality in education
// (le mérite, la méritocratie, la sélection, le décrochage scolaire, l'échec
// scolaire, les acquis).
// Every front checked against the 2,168 live fr fronts + block1 (u95-107). Every
// example uses only already-taught live vocab, proper names, or transparent cognates.
export const FR_UNIT110 = {
  id: "fr-u110",
  lang: "fr",
  title: "L'enseignement supérieur et la recherche",
  order: 110,
  stage: "b2",
  lessons: [
    {
      id: "fr-u110l1",
      unit: 110,
      lesson: 1,
      title: "Higher education",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about higher education, degrees and student funding as an institution, not just 'my school'.",
      items: [
        { id: "fr-u110l1-enseignementsup", type: "vocab", front: "l'enseignement supérieur", reading: "lenseignementsuperieur", meaning: "higher education", example: { jp: "Dans l'enseignement supérieur, les étudiants choisissent un domaine et l'étudient pendant plusieurs années.", en: "In higher education, students choose a field and study it for several years." }, accept: ["higher education", "tertiary education", "university education"], hint: "The institutional term for university-level study, after le lycée — contrast l'école (primary/secondary)." },
        { id: "fr-u110l1-cursus", type: "vocab", front: "un cursus", reading: "uncursus", meaning: "a course of study, degree programme", example: { jp: "Son cursus à l'université a duré cinq années, parce qu'elle a changé de domaine.", en: "Her degree programme lasted five years, because she changed fields." }, accept: ["a course of study", "a degree programme", "an academic track", "a curriculum"], hint: "The whole planned path of study, not a single class (le cours). Un cursus universitaire." },
        { id: "fr-u110l1-diplome", type: "vocab", front: "un diplôme", reading: "undiplome", meaning: "a degree, diploma, qualification", example: { jp: "Un diplôme ne garantit pas un bon salaire, mais il aide souvent à obtenir un métier.", en: "A degree does not guarantee a good salary, but it often helps you get a job." }, accept: ["a degree", "a diploma", "a qualification"], hint: "The credential itself. Obtenir / décrocher un diplôme; un diplômé = a graduate." },
        { id: "fr-u110l1-bourseetudes", type: "vocab", front: "une bourse d'études", reading: "uneboursedetudes", meaning: "a scholarship, study grant", example: { jp: "Une bourse d'études aide les étudiants pauvres, parce que sans elle l'université coûte trop cher.", en: "A scholarship helps poor students, because without it university costs too much." }, accept: ["a scholarship", "a study grant", "a bursary"], hint: "State or institutional funding for a student. 'Une bourse' alone can also mean the stock exchange — d'études fixes the sense." },
        { id: "fr-u110l1-scolarite", type: "vocab", front: "la scolarité", reading: "lascolarite", meaning: "schooling, period of formal education", example: { jp: "Dans ce pays, la scolarité est gratuite et obligatoire, mais l'université coûte cher.", en: "In this country, schooling is free and compulsory, but university is expensive." }, accept: ["schooling", "school education", "compulsory schooling"], hint: "From école / scolaire — the years one spends in formal education. La scolarité obligatoire = compulsory schooling." },
        { id: "fr-u110l1-doctorat", type: "vocab", front: "un doctorat", reading: "undoctorat", meaning: "a doctorate, PhD", example: { jp: "Elle a réussi son doctorat après cinq années de recherche, et travaille maintenant à l'université.", en: "She completed her doctorate after five years of research, and now works at the university." }, accept: ["a doctorate", "a PhD", "a doctoral degree"], hint: "The highest university degree, above the master's. Préparer / soutenir un doctorat." },
      ],
    },
    {
      id: "fr-u110l2",
      unit: 110,
      lesson: 2,
      title: "Research",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how scientific research works — labs, theses, journals and popularizing findings.",
      items: [
        { id: "fr-u110l2-chercheur", type: "vocab", front: "un chercheur", reading: "unchercheur", meaning: "a researcher", example: { jp: "Ces chercheurs étudient la même question depuis dix années, et ils n'ont pas encore de réponse.", en: "These researchers have been studying the same question for ten years, and they still don't have an answer." }, accept: ["a researcher", "a research scientist"], hint: "One who does research as a profession. Feminine: une chercheuse. Un chercheur en biologie." },
        { id: "fr-u110l2-laboratoire", type: "vocab", front: "un laboratoire", reading: "unlaboratoire", meaning: "a laboratory, lab", example: { jp: "Dans ce laboratoire, les scientifiques font la même expérience plusieurs fois pour vérifier chaque résultat.", en: "In this lab, the scientists do the same experiment several times to check each result." }, accept: ["a laboratory", "a lab", "a research lab"], hint: "Where experiments are run. Un laboratoire de recherche. Masculine despite the -oire ending." },
        { id: "fr-u110l2-thesedoctorat", type: "vocab", front: "une thèse de doctorat", reading: "unethesededoctorat", meaning: "a doctoral thesis, PhD dissertation", example: { jp: "Sa thèse de doctorat a duré six années, mais elle a enfin démontré son idée.", en: "Her doctoral thesis took six years, but she finally proved her idea." }, accept: ["a doctoral thesis", "a PhD thesis", "a doctoral dissertation"], hint: "The long written work for a doctorate. 'La thèse' alone = a thesis/claim in an argument; here the academic document." },
        { id: "fr-u110l2-revuescientifique", type: "vocab", front: "une revue scientifique", reading: "unerevuescientifique", meaning: "a scientific journal", example: { jp: "Les scientifiques présentent leurs résultats dans une revue scientifique, et d'autres vérifient ensuite ce travail.", en: "Scientists present their results in a scientific journal, and others then check the work." }, accept: ["a scientific journal", "a research journal", "an academic journal"], hint: "A peer-reviewed publication, not a magazine. 'Une revue' here = a journal, not a review." },
        { id: "fr-u110l2-vulgarisation", type: "vocab", front: "la vulgarisation", reading: "lavulgarisation", meaning: "popularization (of science/knowledge)", example: { jp: "La vulgarisation explique la science au public, sans jamais changer la vérité des résultats.", en: "Popularization explains science to the public, without ever changing the truth of the results." }, accept: ["popularization", "popularisation", "making science accessible"], hint: "Making expert knowledge clear for non-specialists. La vulgarisation scientifique — not pejorative in French." },
        { id: "fr-u110l2-protocole", type: "vocab", front: "un protocole", reading: "unprotocole", meaning: "a protocol", example: { jp: "Les chercheurs suivent un protocole précis, de sorte que l'expérience peut être vérifiée par d'autres.", en: "The researchers follow a precise protocol, so that the experiment can be checked by others." }, accept: ["a protocol", "a procedure", "a set of steps", "a set of rules"], hint: "The fixed set of steps an experiment or procedure follows; also diplomatic protocol. Distinct from la méthode (Unit 78)." },
      ],
    },
    {
      id: "fr-u110l3",
      unit: 110,
      lesson: 3,
      title: "Knowledge and pedagogy",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss knowledge, know-how, and how expertise is taught and shared.",
      items: [
        { id: "fr-u110l3-pedagogie", type: "vocab", front: "la pédagogie", reading: "lapedagogie", meaning: "pedagogy, teaching method", example: { jp: "Une bonne pédagogie rend une matière difficile plus simple, sans changer la vérité du cours.", en: "Good pedagogy makes a difficult subject simpler, without changing the truth of the course." }, accept: ["pedagogy", "teaching method", "the art of teaching"], hint: "The science/art of how to teach. Adjective pédagogique = 'clear, well-taught', a compliment in French." },
        { id: "fr-u110l3-savoir", type: "vocab", front: "le savoir", reading: "lesavoir", meaning: "knowledge (body of what is known)", example: { jp: "Le savoir ne coûte rien à partager, mais il demande beaucoup d'effort à obtenir.", en: "Knowledge costs nothing to share, but it takes a lot of effort to acquire." }, accept: ["knowledge", "learning"], hint: "The noun 'knowledge' (from the verb savoir). More abstract/collective than une connaissance (a single fact)." },
        { id: "fr-u110l3-savoirfaire", type: "vocab", front: "le savoir-faire", reading: "lesavoirfaire", meaning: "know-how, practical skill", example: { jp: "Ce métier demande un vrai savoir-faire, que l'on apprend surtout par l'expérience.", en: "This trade demands real know-how, which one learns mainly through experience." }, accept: ["know-how", "practical skill", "expertise"], hint: "Practical, hands-on competence — from savoir + faire. Borrowed into English as 'savoir-faire'; invariable in the plural." },
        { id: "fr-u110l3-apprentissage", type: "vocab", front: "l'apprentissage", reading: "lapprentissage", meaning: "learning (process), apprenticeship", example: { jp: "L'apprentissage se fait peu à peu, car une idée nouvelle demande souvent plusieurs exemples.", en: "Learning happens little by little, because a new idea often needs several examples." }, accept: ["learning", "the learning process", "apprenticeship"], hint: "From apprendre (Unit 31) — the process of learning, or a trade apprenticeship. Masculine (le/l')." },
        { id: "fr-u110l3-maitrise", type: "vocab", front: "la maîtrise", reading: "lamaitrise", meaning: "mastery, command (of a subject)", example: { jp: "La maîtrise d'un domaine demande des années de travail, mais elle rend ensuite le métier plus simple.", en: "Mastery of a field takes years of work, but it then makes the job easier." }, accept: ["mastery", "command", "a good grasp"], hint: "Full command of a skill or subject (from maîtriser). La maîtrise can also name a master's-level degree." },
        { id: "fr-u110l3-colloque", type: "vocab", front: "un colloque", reading: "uncolloque", meaning: "an academic conference, symposium", example: { jp: "Pendant ce colloque, des scientifiques de plusieurs pays présentent leurs résultats et partagent leurs idées.", en: "During this symposium, scientists from several countries present their results and share their ideas." }, accept: ["an academic conference", "a symposium", "a colloquium"], hint: "A formal, specialist academic meeting — more scholarly than une conférence (a public talk). Masculine." },
      ],
    },
    {
      id: "fr-u110l4",
      unit: 110,
      lesson: 4,
      title: "Merit and inequality",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about merit, selection and inequality in education, in an op-ed register.",
      items: [
        { id: "fr-u110l4-merite", type: "vocab", front: "le mérite", reading: "lemerite", meaning: "merit, worth (earned)", example: { jp: "Selon certains, seul le mérite décide de l'avenir, mais l'origine d'un élève compte souvent beaucoup aussi.", en: "According to some, merit alone decides one's future, but a student's background often counts a lot too." }, accept: ["merit", "worth", "desert"], hint: "Worth that is earned, not given. Avoir du mérite; à juste titre. Base of la méritocratie (next item)." },
        { id: "fr-u110l4-meritocratie", type: "vocab", front: "la méritocratie", reading: "lameritocratie", meaning: "meritocracy", example: { jp: "Dans une vraie méritocratie, seul l'effort décide de l'avenir, sans compter l'origine ou l'argent.", en: "In a true meritocracy, effort alone decides your future, regardless of background or money." }, accept: ["meritocracy", "rule by merit"], hint: "The system where position depends on merit — from le mérite. Often used sceptically, questioning whether it is real." },
        { id: "fr-u110l4-selection", type: "vocab", front: "la sélection", reading: "laselection", meaning: "selection (competitive admission)", example: { jp: "La sélection à l'université favorise souvent les élèves riches, et creuse ainsi les inégalités.", en: "Selection at university often favours wealthy students, and so widens inequalities." }, accept: ["selection", "competitive admission", "selective admission"], hint: "Choosing who is admitted, by results. La sélection à l'entrée — a recurring political debate in French education." },
        { id: "fr-u110l4-decrochage", type: "vocab", front: "le décrochage scolaire", reading: "ledecrochagescolaire", meaning: "dropping out of school, school dropout", example: { jp: "Le décrochage scolaire touche surtout les élèves pauvres, parce que l'école ne les aide pas assez.", en: "School dropout mainly affects poor students, because the school does not help them enough." }, accept: ["school dropout", "dropping out of school", "early school leaving"], hint: "Leaving school before finishing — the institutional term (from décrocher, 'to unhook/let go'). Scolaire from école." },
        { id: "fr-u110l4-echecscolaire", type: "vocab", front: "l'échec scolaire", reading: "lechecscolaire", meaning: "academic failure, failure at school", example: { jp: "L'échec scolaire dépend beaucoup de l'origine d'un élève, mais son effort compte aussi.", en: "Academic failure depends a lot on a student's background, but their effort matters too." }, accept: ["academic failure", "school failure", "failure at school"], hint: "Systemic failure to succeed at school, treated as a policy problem, not one bad grade. Masculine: l'échec." },
        { id: "fr-u110l4-acquis", type: "vocab", front: "les acquis", reading: "lesacquis", meaning: "learning outcomes, what has been learned", example: { jp: "Un examen vérifie les acquis d'un élève, mais il oublie souvent son vrai niveau.", en: "An exam checks a student's learning outcomes, but it often overlooks their true level." }, accept: ["learning outcomes", "what has been learned", "acquired knowledge"], hint: "What a learner has securely acquired (from acquérir). Also 'les acquis sociaux' = hard-won social rights." },
      ],
    },
  ],
};
