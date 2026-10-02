// PT Unit 94 — A ciência e a tecnologia (slot: science-tech) — B2
//
// HOW A CLAIM IS TESTED, AND WHAT THE MACHINE IS CALLED. u34 gave a ciência, a
// descoberta, o clima, a poluição — science as a topic to have opinions about.
// u33 gave a internet, a rede, o ficheiro, o utilizador, a aplicação — the
// computer as an everyday object. Neither gives the learner the vocabulary of
// METHOD (trial, replication, deviation, threshold) or of the machinery behind
// the screen (algorithm, database, encryption).
//
// SLOT BOUNDARIES:
//   a ciência, a descoberta, o clima at u34; a internet, a rede, o ficheiro, o
//   utilizador, a aplicação at u33; a experiência and a análise earlier; a
//   hipótese at u54; a precisão at u82; o avanço at u85; o dado / a amostra /
//   o método at u84. Used in examples, none re-carded — this unit takes o
//   ensaio beside a experiência, a exatidão beside a precisão, o desvio and o
//   limiar which nothing else covers.
//   u90 (mine) owns models and abstraction — a variável and o parâmetro live
//   there, not here, so l2 stays on physical measurement.
//
// PT-PT SPECIFICS: o telemóvel (not o celular), o ficheiro (not o arquivo) for
// a computer file, and base DE dados (not banco de dados).
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT94 = {
  id: "pt-u94",
  lang: "pt",
  title: "A ciência e a tecnologia",
  order: 94,
  stage: "b2",
  lessons: [
    {
      id: "pt-u94l1",
      unit: 94,
      lesson: 1,
      title: "A investigação científica",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a study was done in Portuguese — the trial, the replication, the observation, the finding.",
      items: [
        { id: "pt-u94l1-oensaio", type: "vocab", front: "o ensaio", reading: "oensaio", meaning: "trial (experiment)", example: { jp: "O ensaio durou seis meses e envolveu mais de mil pessoas.", en: "The trial lasted six months and involved more than a thousand people." }, drill: { jp: "O ensaio durou seis meses", en: "The trial lasted six months" }, accept: ["trial", "the trial", "experiment", "test", "assay"], hint: "en-SAI-u. A controlled test — um ensaio clínico is a clinical trial. It is also the literary essay and, in the theatre, a rehearsal, so context works hard here." },
        { id: "pt-u94l1-replicar", type: "vocab", front: "replicar", reading: "replicar", meaning: "to replicate", example: { jp: "Outro grupo tentou replicar a experiência e não conseguiu chegar lá.", en: "Another group tried to replicate the experiment and couldn't get there." }, drill: { jp: "Ninguém conseguiu replicar a experiência", en: "Nobody managed to replicate the experiment" }, accept: ["to replicate", "replicate", "to reproduce", "to repeat", "to redo"], hint: "rre-pli-KAR. To run the same study again and see whether the same answer comes out — the test that matters most in science. It also means to answer back sharply." },
        { id: "pt-u94l1-empirico", type: "vocab", front: "empírico", reading: "empirico", meaning: "empirical", example: { jp: "O argumento é empírico: parte de dados e não de teoria.", en: "The argument is empirical: it starts from data and not from theory." }, drill: { jp: "O trabalho é empírico e recente", en: "The work is empirical and recent" }, accept: ["empirical", "evidence-based", "observational", "based on observation"], hint: "em-PEE-ri-ku. Based on what was observed rather than on reasoning alone. In Portuguese it can be mildly dismissive too: um saber empírico is know-how without theory behind it." },
        { id: "pt-u94l1-aconstatacao", type: "vocab", front: "a constatação", reading: "aconstatacao", meaning: "finding", example: { jp: "A constatação mais importante do estudo cabe numa só linha.", en: "The study's most important finding fits into a single line." }, drill: { jp: "A constatação do estudo foi clara", en: "The study's finding was clear" }, accept: ["finding", "the finding", "observation", "realisation", "what was established"], hint: "konsh-ta-ta-SOWN. What you establish to be the case simply by looking — constatar is the verb. Weaker than a conclusão, which reasons beyond what was actually seen." },
        { id: "pt-u94l1-olaboratorio", type: "vocab", front: "o laboratório", reading: "olaboratorio", meaning: "laboratory", example: { jp: "O laboratório da universidade trabalha com hospitais de todo o país.", en: "The university laboratory works with hospitals from all over the country." }, drill: { jp: "O laboratório fica na universidade", en: "The laboratory is at the university" }, accept: ["laboratory", "the laboratory", "lab", "the lab"], hint: "la-bu-ra-TO-ri-u. Students shorten it to o labe. It is also where blood tests are done — ir ao laboratório in Portugal usually means exactly that, not research." },
        { id: "pt-u94l1-aobservacao", type: "vocab", front: "a observação", reading: "aobservacao", meaning: "observation", example: { jp: "A observação durou anos e foi feita sempre no mesmo lugar.", en: "The observation lasted years and was always done in the same place." }, drill: { jp: "A observação durou vários anos", en: "The observation lasted several years" }, accept: ["observation", "the observation", "watching", "monitoring", "remark"], hint: "ob-ser-va-SOWN. Both the careful watching and the remark that comes out of it. Em observação, of a patient in a Portuguese hospital, means under monitoring." },
      ],
    },
    {
      id: "pt-u94l2",
      unit: 94,
      lesson: 2,
      title: "A medição",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about measuring in Portuguese — how exact it is, how far it strays, and where the cut-off sits.",
      items: [
        { id: "pt-u94l2-aexatidao", type: "vocab", front: "a exatidão", reading: "aexatidao", meaning: "exactness", example: { jp: "A exatidão do relógio importa muito mais do que o seu aspeto.", en: "The clock's exactness matters far more than how it looks." }, drill: { jp: "A exatidão do relógio importa muito", en: "The clock's exactness matters a lot" }, accept: ["exactness", "exactitude", "accuracy", "precision", "correctness"], hint: "ei-za-ti-DOWNG. How close a value sits to the true one. Com exatidão means exactly. Portugal has written exatidão since 1990; older books have exactidão." },
        { id: "pt-u94l2-odesvio", type: "vocab", front: "o desvio", reading: "odesvio", meaning: "deviation", example: { jp: "Um desvio pequeno no início dá um erro enorme no fim.", en: "A small deviation at the start gives an enormous error at the end." }, drill: { jp: "O desvio do resultado foi pequeno", en: "The deviation in the result was small" }, accept: ["deviation", "the deviation", "divergence", "departure", "detour"], hint: "desh-VEE-u. How far a value strays from where it should be — and, on the road, a diversion. Desviar is to turn something aside." },
        { id: "pt-u94l2-calibrar", type: "vocab", front: "calibrar", reading: "calibrar", meaning: "to calibrate", example: { jp: "É preciso calibrar a máquina antes de começar a medir seja o que for.", en: "You have to calibrate the machine before starting to measure anything at all." }, drill: { jp: "É preciso calibrar a máquina primeiro", en: "You have to calibrate the machine first" }, accept: ["to calibrate", "calibrate", "to adjust", "to set", "to tune"], hint: "ka-li-BRAR. To set an instrument against a known reference so its readings can be trusted. O calibre is the bore of a barrel — the original measured thing." },
        { id: "pt-u94l2-oinstrumento", type: "vocab", front: "o instrumento", reading: "oinstrumento", meaning: "instrument", example: { jp: "O instrumento mede a temperatura da água de hora a hora.", en: "The instrument measures the water temperature hour by hour." }, drill: { jp: "O instrumento mede a temperatura", en: "The instrument measures the temperature" }, accept: ["instrument", "the instrument", "device", "tool", "gauge"], hint: "insh-tru-MEN-tu. Both the measuring device and the musical one — tocar um instrumento. In the plural os instrumentos can also be a surgeon's tools." },
        { id: "pt-u94l2-mensuravel", type: "vocab", front: "mensurável", reading: "mensuravel", meaning: "measurable", example: { jp: "O efeito existe mas não é mensurável com estes aparelhos antigos.", en: "The effect exists but isn't measurable with these old instruments." }, drill: { jp: "O efeito não é mensurável ainda", en: "The effect isn't measurable yet" }, accept: ["measurable", "quantifiable", "able to be measured"], hint: "men-su-RA-vel. Able to be given a number. It carries the Latin root that also gives a mensuração; the everyday verb stays plain medir." },
        { id: "pt-u94l2-olimiar", type: "vocab", front: "o limiar", reading: "olimiar", meaning: "threshold", example: { jp: "Abaixo deste limiar o aparelho simplesmente não regista nada.", en: "Below this threshold the instrument simply doesn't record anything." }, drill: { jp: "O limiar do aparelho é baixo", en: "The instrument threshold is low" }, accept: ["threshold", "the threshold", "cut-off", "limit", "tipping point"], hint: "li-mi-AR. The value at which something starts to happen — o limiar da dor is the pain threshold. Its first sense is the doorstep, which is exactly the same image." },
      ],
    },
    {
      id: "pt-u94l3",
      unit: 94,
      lesson: 3,
      title: "A tecnologia",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about what is behind the screen in Portuguese — the device, the algorithm, the database, the encryption.",
      items: [
        { id: "pt-u94l3-odispositivo", type: "vocab", front: "o dispositivo", reading: "odispositivo", meaning: "device", example: { jp: "O dispositivo liga-se à rede sem precisar de fios nenhuns.", en: "The device connects to the network without needing any wires." }, drill: { jp: "O dispositivo liga-se à rede", en: "The device connects to the network" }, accept: ["device", "the device", "gadget", "unit", "apparatus"], hint: "dish-pu-zi-TEE-vu. Any purpose-built piece of kit — a phone, a sensor, a medical implant. In law it is also the operative part of a ruling." },
        { id: "pt-u94l3-oalgoritmo", type: "vocab", front: "o algoritmo", reading: "oalgoritmo", meaning: "algorithm", example: { jp: "O algoritmo escolhe as notícias que cada pessoa vê primeiro.", en: "The algorithm chooses the news each person sees first." }, drill: { jp: "O algoritmo escolhe as notícias", en: "The algorithm chooses the news" }, accept: ["algorithm", "the algorithm", "procedure", "the code"], hint: "al-gu-REET-mu. From the name of the Persian mathematician al-Khwarizmi, by way of Latin. In Portugal the everyday complaint about social media is precisely o algoritmo." },
        { id: "pt-u94l3-abasededados", type: "vocab", front: "a base de dados", reading: "abasededados", meaning: "database", example: { jp: "A base de dados guarda os registos de mais de cem anos.", en: "The database holds the records of more than a hundred years." }, drill: { jp: "A base de dados guarda tudo", en: "The database holds everything" }, accept: ["database", "the database", "data bank", "records system"], hint: "Note the shape: base DE dados, with de, where English simply stacks the two nouns. Portugal says base de dados; Brazil usually banco de dados." },
        { id: "pt-u94l3-programar", type: "vocab", front: "programar", reading: "programar", meaning: "to code", example: { jp: "Ela aprendeu a programar sozinha com vídeos da internet.", en: "She learned to code on her own from videos on the internet." }, drill: { jp: "Ela aprendeu a programar sozinha", en: "She learned to code on her own" }, accept: ["to code", "code", "to program", "to programme", "to write software"], hint: "pru-gra-MAR. To write software — and also to schedule something, programar uma reunião. O programador is the developer." },
        { id: "pt-u94l3-automatizar", type: "vocab", front: "automatizar", reading: "automatizar", meaning: "to automate", example: { jp: "A empresa automatizou quase tudo e o trabalho mudou por completo.", en: "The company automated almost everything and the work changed completely." }, drill: { jp: "A empresa quer automatizar o processo", en: "The company wants to automate the process" }, accept: ["to automate", "automate", "to mechanise", "to make automatic"], hint: "ow-tu-ma-ti-ZAR. To make a process run without a person in it. A automatização is the process; automático is the ordinary adjective you already meet on doors." },
        { id: "pt-u94l3-encriptar", type: "vocab", front: "encriptar", reading: "encriptar", meaning: "to encrypt", example: { jp: "As mensagens são encriptadas antes de saírem do telemóvel.", en: "The messages are encrypted before they leave the phone." }, drill: { jp: "Vamos encriptar as mensagens todas", en: "We are going to encrypt all the messages" }, accept: ["to encrypt", "encrypt", "to encode", "to scramble"], hint: "en-krip-TAR. A recent borrowing, fully at home now — mensagens encriptadas. Portugal also writes cifrar for the same idea in more formal or academic text." },
      ],
    },
    {
      id: "pt-u94l4",
      unit: 94,
      lesson: 4,
      title: "A inovação",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about something new in Portuguese — the prototype, the patent, whether it is feasible, whether it can scale.",
      items: [
        { id: "pt-u94l4-escalar", type: "vocab", front: "escalar", reading: "escalar", meaning: "to scale up", example: { jp: "A ideia funciona numa escola, mas ninguém sabe se dá para escalar.", en: "The idea works in one school, but nobody knows whether it can scale up." }, drill: { jp: "É difícil escalar este modelo", en: "It's hard to scale up this model" }, accept: ["to scale up", "scale up", "to scale", "to grow", "to roll out widely"], hint: "esh-ka-LAR. Its old sense is to climb — escalar uma montanha. The business sense, growing a thing without breaking it, came in from English and is now everywhere in Portuguese tech." },
        { id: "pt-u94l4-apatente", type: "vocab", front: "a patente", reading: "apatente", meaning: "patent", example: { jp: "A patente protege a ideia durante vinte anos a contar do registo.", en: "The patent protects the idea for twenty years from registration." }, drill: { jp: "A patente protege a ideia", en: "The patent protects the idea" }, accept: ["patent", "the patent", "registered right"], hint: "pa-TEN-te. The registered right to an invention — registar uma patente. As an adjective it means plain or obvious: é patente que, it is evident that." },
        { id: "pt-u94l4-inovador", type: "vocab", front: "inovador", reading: "inovador", meaning: "innovative", example: { jp: "O método é inovador mas ainda não foi testado fora do laboratório.", en: "The method is innovative but hasn't been tested outside the laboratory yet." }, drill: { jp: "O método é inovador e simples", en: "The method is innovative and simple" }, accept: ["innovative", "groundbreaking", "novel", "pioneering"], hint: "i-nu-va-DOR. Doing something in a genuinely new way. The feminine is inovadora, and a inovação is what every Portuguese funding form asks you to demonstrate." },
        { id: "pt-u94l4-oprototipo", type: "vocab", front: "o protótipo", reading: "oprototipo", meaning: "prototype", example: { jp: "O protótipo funcionou à terceira tentativa e depois parou outra vez.", en: "The prototype worked on the third attempt and then stopped again." }, drill: { jp: "O protótipo funcionou à terceira tentativa", en: "The prototype worked on the third attempt" }, accept: ["prototype", "the prototype", "first model", "working model"], hint: "pru-TO-ti-pu. The first working version, built to be tested and then thrown away. Stress the TO — learners often put it on the ti." },
        { id: "pt-u94l4-viavel", type: "vocab", front: "viável", reading: "viavel", meaning: "feasible", example: { jp: "A ideia é boa mas não é viável com o dinheiro que existe agora.", en: "The idea is good but isn't feasible with the money there is now." }, drill: { jp: "A ideia não é viável agora", en: "The idea isn't feasible right now" }, accept: ["feasible", "viable", "workable", "doable", "practicable"], hint: "vi-A-vel, from via, a way — something there is a route to. Inviável is its constant partner, and a viabilidade is what a feasibility study measures." },
        { id: "pt-u94l4-aengenharia", type: "vocab", front: "a engenharia", reading: "aengenharia", meaning: "engineering", example: { jp: "A engenharia da ponte levou mais tempo do que a construção.", en: "The engineering of the bridge took longer than the building work." }, drill: { jp: "A engenharia da ponte foi difícil", en: "The engineering of the bridge was hard" }, accept: ["engineering", "the engineering", "engineering work"], hint: "en-zhe-nya-REE-a. The discipline, and the cleverness of a design. O engenheiro is used as a title before the surname in Portugal, much like Doutor." },
      ],
    },
  ],
};
