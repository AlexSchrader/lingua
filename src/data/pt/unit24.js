// PT Unit 24 — O emprego e a formação — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT24 = {
  id: "pt-u24",
  lang: "pt",
  title: "O emprego e a formação",
  order: 24,
  stage: "a2",
  lessons: [
    {
      id: "pt-u24l1",
      unit: 24,
      lesson: 1,
      title: "A candidatura",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Apply for a Portuguese job — send a CV, sign a contract, and name the post you are applying for.",
      items: [
        { id: "pt-u24l1-acandidatura", type: "vocab", front: "a candidatura", reading: "acandidatura", meaning: "application", example: { jp: "Enviei a candidatura na segunda-feira e ainda não tive resposta.", en: "I sent the application on Monday and still haven't had a reply." }, drill: { jp: "A candidatura é muito importante", en: "The application is very important" }, accept: ["the application", "job application", "candidacy"], hint: "kan-di-da-TU-ra. o candidato is the applicant. Note Portuguese uses it for jobs, universities and elections alike — one word for all three." },
        { id: "pt-u24l1-ocontrato", type: "vocab", front: "o contrato", reading: "ocontrato", meaning: "contract", example: { jp: "Li o contrato todo antes de assinar o meu nome.", en: "I read the whole contract before signing my name." }, drill: { jp: "O contrato começa em janeiro", en: "The contract begins in January" }, accept: ["the contract", "agreement", "the agreement"], hint: "kon-TRA-tu. A contrato sem termo is a permanent contract and a contrato a prazo a fixed-term one — the prazo you meet in the next lesson." },
        { id: "pt-u24l1-ocargo", type: "vocab", front: "o cargo", reading: "ocargo", meaning: "post", example: { jp: "O cargo de chefe ficou livre quando o Pedro mudou de empresa.", en: "The manager's post came free when Pedro changed company." }, drill: { jp: "O cargo de chefe está livre", en: "The manager's post is free" }, accept: ["the post", "position", "the position", "role"], hint: "KAR-gu. It is the position in a hierarchy, where o emprego would be the job as a whole. Ocupar um cargo is to hold a post." },
        { id: "pt-u24l1-oestagio", type: "vocab", front: "o estágio", reading: "oestagio", meaning: "internship", example: { jp: "Fiz um estágio de seis meses numa empresa do Porto.", en: "I did a six-month internship at a company in Porto." }, drill: { jp: "O estágio na empresa é bom", en: "The internship at the company is good" }, accept: ["the internship", "traineeship", "placement", "work placement"], hint: "esh-TA-zhiu. Do not read the English stage into it — this is a work placement, not a phase and not a platform. o estagiário is the intern." },
        { id: "pt-u24l1-ocurriculo", type: "vocab", front: "o currículo", reading: "ocurriculo", meaning: "CV", example: { jp: "Atualizei o currículo e mandei-o para três empresas.", en: "I updated my CV and sent it to three companies." }, drill: { jp: "O currículo do estudante é bom", en: "The student's CV is good" }, accept: ["the CV", "résumé", "resume", "curriculum vitae"], hint: "ku-RREE-ku-lu, strong initial r. Portugal says currículo or CV; the full curriculum vitae is written but rarely said. It also means a school curriculum." },
        { id: "pt-u24l1-despedir", type: "vocab", front: "despedir", reading: "despedir", meaning: "to dismiss", example: { jp: "A empresa despediu vinte pessoas quando fechou a fábrica.", en: "The company dismissed twenty people when it closed the factory." }, drill: { jp: "Despedir um colega é difícil", en: "Dismissing a colleague is hard" }, accept: ["dismiss", "fire", "to fire", "sack", "lay off"], hint: "despeço, despedes, despede. Reflexive it flips completely: despedir-se is to say goodbye, or to resign. The context does all the work." },
      ],
    },
    {
      id: "pt-u24l2",
      unit: 24,
      lesson: 2,
      title: "As tarefas",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the work itself — the project, the deadline, the report — and say how you got it done.",
      items: [
        { id: "pt-u24l2-oprojeto", type: "vocab", front: "o projeto", reading: "oprojeto", meaning: "project", example: { jp: "O projeto novo começa em março e dura um ano.", en: "The new project begins in March and lasts a year." }, drill: { jp: "O projeto novo começa em março", en: "The new project begins in March" }, accept: ["the project", "scheme", "plan"], hint: "pru-ZHE-tu. Since the 1990 accord Portugal writes projeto without the old silent c of projecto — one of the most visible changes the reform made." },
        { id: "pt-u24l2-oprazo", type: "vocab", front: "o prazo", reading: "oprazo", meaning: "deadline", example: { jp: "O prazo acaba na sexta-feira e ainda falta muito trabalho.", en: "The deadline ends on Friday and there is still a lot of work left." }, drill: { jp: "O prazo acaba na sexta-feira", en: "The deadline ends on Friday" }, accept: ["the deadline", "time limit", "term", "period"], hint: "PRA-zu. Dentro do prazo is on time, fora do prazo is late. A curto prazo and a longo prazo are short and long term." },
        { id: "pt-u24l2-orelatorio", type: "vocab", front: "o relatório", reading: "orelatorio", meaning: "report", example: { jp: "Escrevi o relatório todo numa noite e entreguei-o de manhã.", en: "I wrote the whole report in one night and handed it in that morning." }, drill: { jp: "O relatório do chefe é grande", en: "The boss's report is big" }, accept: ["the report", "write-up"], hint: "rre-la-TO-riu, strong initial r. From relatar, to relate or recount — the same root English uses in relate." },
        { id: "pt-u24l2-apresentar", type: "vocab", front: "apresentar", reading: "apresentar", meaning: "to present", example: { jp: "Apresentei os resultados à equipa na reunião de ontem.", en: "I presented the results to the team at yesterday's meeting." }, drill: { jp: "Apresentar os resultados à equipa", en: "Presenting the results to the team" }, accept: ["present", "to introduce", "introduce", "show"], hint: "a-pre-zen-TAR. It also means to introduce people — apresento-te a minha irmã. And apresentar-se is to introduce yourself, which is where Unit 3 got its title." },
        { id: "pt-u24l2-resolver", type: "vocab", front: "resolver", reading: "resolver", meaning: "to solve", example: { jp: "Resolvemos o problema do computador sem chamar ninguém.", en: "We solved the computer problem without calling anyone." }, drill: { jp: "Resolver o problema do computador", en: "Solving the computer problem" }, accept: ["solve", "to sort out", "sort out", "resolve", "fix"], hint: "re-zol-VER, s as z. It covers solving, sorting out and deciding. Está resolvido is the everyday it's sorted." },
        { id: "pt-u24l2-organizar", type: "vocab", front: "organizar", reading: "organizar", meaning: "to organise", example: { jp: "A minha colega organizou a viagem toda em dois dias.", en: "My colleague organised the whole trip in two days." }, drill: { jp: "Organizar a viagem em dois dias", en: "Organising the trip in two days" }, accept: ["organise", "organize", "to arrange", "arrange", "sort"], hint: "or-ga-ni-ZAR. Portugal spells it with a z, not an s. Organizar-se is to get yourself organised, and a organização is the noun." },
      ],
    },
    {
      id: "pt-u24l3",
      unit: 24,
      lesson: 3,
      title: "Os estudos",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about training and qualifications beyond the degree you already know how to name.",
      items: [
        { id: "pt-u24l3-aformacao", type: "vocab", front: "a formação", reading: "aformacao", meaning: "training", example: { jp: "A formação em línguas ajudou-me muito a encontrar trabalho.", en: "Training in languages helped me a lot to find work." }, drill: { jp: "A formação é muito importante", en: "Training is very important" }, accept: ["the training", "education", "background", "qualification"], hint: "for-ma-SAWNG, the -ção ending from Unit 3. It covers both formal training and someone's whole educational background — qual é a sua formação?" },
        { id: "pt-u24l3-odiploma", type: "vocab", front: "o diploma", reading: "odiploma", meaning: "diploma", example: { jp: "Recebi o diploma dois meses depois de acabar o curso.", en: "I got the diploma two months after finishing the course." }, drill: { jp: "O diploma do curso é novo", en: "The course diploma is new" }, accept: ["the diploma", "certificate", "qualification"], hint: "di-PLO-ma. It ends in -a and is MASCULINE — o diploma — like o problema and o sistema. That whole Greek-derived family breaks the usual rule." },
        { id: "pt-u24l3-omestrado", type: "vocab", front: "o mestrado", reading: "omestrado", meaning: "master's degree", example: { jp: "Estou a fazer um mestrado em história na universidade de Coimbra.", en: "I'm doing a master's in history at the university of Coimbra." }, drill: { jp: "O mestrado é muito difícil", en: "The master's is very hard" }, accept: ["the master's", "masters", "master's degree", "MA"], hint: "mesh-TRA-du. The Portuguese sequence is a licenciatura from Unit 17, then o mestrado, then o doutoramento. Note estar A fazer — the pt-PT progressive." },
        { id: "pt-u24l3-abolsa", type: "vocab", front: "a bolsa", reading: "abolsa", meaning: "grant", example: { jp: "Sem a bolsa não teria conseguido pagar as propinas.", en: "Without the grant I wouldn't have managed to pay the fees." }, drill: { jp: "A bolsa paga as propinas todas", en: "The grant pays all the fees" }, accept: ["the grant", "scholarship", "the scholarship", "bursary"], hint: "BOL-sa. It also means a bag or purse, and the stock exchange — a Bolsa de Lisboa. Same word, three worlds, context decides." },
        { id: "pt-u24l3-inscreverse", type: "vocab", front: "inscrever-se", reading: "inscreverse", meaning: "to enrol", example: { jp: "Inscrevi-me no curso de português na semana passada.", en: "I enrolled in the Portuguese course last week." }, drill: { jp: "Inscrever-se no curso de português", en: "Enrolling in the Portuguese course" }, accept: ["enrol", "enroll", "to register", "register", "sign up"], hint: "inscrevo-me, inscreves-te, inscreve-se — enclisis again. It takes EM for what you enrol in: inscrever-se NUM curso. a inscrição is the enrolment." },
        { id: "pt-u24l3-acarreira", type: "vocab", front: "a carreira", reading: "acarreira", meaning: "career", example: { jp: "A carreira dela mudou completamente depois do mestrado.", en: "Her career changed completely after the master's." }, drill: { jp: "A carreira do professor é boa", en: "The teacher's career is good" }, accept: ["the career", "professional life"], hint: "ka-RRAY-ra, strong rr. It also means a lane on a road or a run in sport — the idea underneath is a course you run along." },
      ],
    },
    {
      id: "pt-u24l4",
      unit: 24,
      lesson: 4,
      title: "Falar de trabalho",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Hold your end of a work conversation — explain, disagree, agree and suggest something better.",
      items: [
        { id: "pt-u24l4-explicar", type: "vocab", front: "explicar", reading: "explicar", meaning: "to explain", example: { jp: "O professor explicou a matéria outra vez porque ninguém percebeu.", en: "The teacher explained the material again because nobody understood." }, drill: { jp: "Explicar o exame ao estudante", en: "Explaining the exam to the student" }, accept: ["explain", "to clarify", "clarify"], hint: "esh-pli-KAR. In the I form the c becomes qu to keep the hard sound: explico. That spelling shift runs through every -car verb." },
        { id: "pt-u24l4-discutir", type: "vocab", front: "discutir", reading: "discutir", meaning: "to discuss", example: { jp: "Discutimos o projeto durante duas horas e não decidimos nada.", en: "We discussed the project for two hours and decided nothing." }, drill: { jp: "Discutir o projeto é difícil", en: "Discussing the project is hard" }, accept: ["discuss", "to argue", "argue", "debate"], hint: "dish-ku-TEER. Careful — in Portuguese it leans harder toward arguing than English discuss does. For a calm exchange Portugal would say falar sobre or conversar." },
        { id: "pt-u24l4-decidir", type: "vocab", front: "decidir", reading: "decidir", meaning: "to decide", example: { jp: "Decidimos mudar de empresa depois de falar com o chefe.", en: "We decided to change company after speaking to the boss." }, drill: { jp: "Decidir mudar de empresa hoje", en: "Deciding to change company today" }, accept: ["decide", "to settle", "settle", "make up your mind"], hint: "de-si-DEER. a decisão is the decision, with the -são ending that pairs with -ção. Decidir-se is to make your own mind up." },
        { id: "pt-u24l4-concordar", type: "vocab", front: "concordar", reading: "concordar", meaning: "to agree", example: { jp: "Concordo contigo mas acho que o prazo é curto demais.", en: "I agree with you but I think the deadline is too short." }, drill: { jp: "Concordar com o novo prazo", en: "Agreeing with the new deadline" }, accept: ["agree", "to be in agreement", "be in agreement"], hint: "kon-kor-DAR. Takes COM for who or what you agree with. The opposite is discordar, and de acordo is the noun phrase — estamos de acordo." },
        { id: "pt-u24l4-aopiniao", type: "vocab", front: "a opinião", reading: "aopiniao", meaning: "opinion", example: { jp: "Na minha opinião o projeto precisa de mais tempo.", en: "In my opinion the project needs more time." }, drill: { jp: "A opinião do chefe é importante", en: "The boss's opinion is important" }, accept: ["the opinion", "view", "point of view"], hint: "o-pi-ni-AWNG, the -ão nasal. Na minha opinião is the fixed phrase and the plural is as opiniões, with the õe spelling from Unit 1." },
        { id: "pt-u24l4-sugerir", type: "vocab", front: "sugerir", reading: "sugerir", meaning: "to suggest", example: { jp: "Sugeri à equipa que começássemos o relatório mais cedo.", en: "I suggested to the team that we start the report earlier." }, drill: { jp: "Sugerir um projeto novo à equipa", en: "Suggesting a new project to the team" }, accept: ["suggest", "to propose", "propose", "recommend"], hint: "su-zhe-REER. Like sentir the e turns to i in the I form: sugiro. a sugestão is the suggestion — note the g becomes st, an old Latin habit." },
      ],
    },
  ],
};
