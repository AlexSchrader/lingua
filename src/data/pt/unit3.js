// PT Unit 3 — Apresentar-se ("Introducing yourself") — A1
// Name, origin, age, occupation — the four things you are asked in the first
// minute. Also the first place the learner meets Portugal's clitic placement:
// chamo-me, not "me chamo" (which is the Brazilian order). That is taught as a
// fixed chunk here; u12 Grammar 1 owns the rule.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT3 = {
  id: "pt-u3",
  lang: "pt",
  title: "Apresentar-se",
  order: 3,
  stage: "a1",
  lessons: [
    {
      id: "pt-u3l1",
      unit: 3,
      lesson: 1,
      title: "Chamo-me…",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say your name, ask someone theirs, and answer when you are introduced.",
      items: [
        { id: "pt-u3l1-eu", type: "vocab", front: "eu", reading: "eu", meaning: "I", example: { jp: "Eu sou de Lisboa.", en: "I am from Lisbon." }, drill: { jp: "Eu sou de Lisboa", en: "I am from Lisbon" }, accept: ["me", "i am"], hint: "Portuguese usually drops it — the verb ending already says who is speaking. You add eu only for emphasis or contrast: EU sou português." },
        { id: "pt-u3l1-chamome", type: "vocab", front: "chamo-me", reading: "chamome", meaning: "my name is", example: { jp: "Chamo-me Tiago. E tu?", en: "My name is Tiago. And you?" }, drill: { jp: "Chamo-me Tiago e sou português", en: "My name is Tiago and I am Portuguese" }, accept: ["i am called", "i'm called", "im called", "i'm named"], hint: "Literally \"I call myself\". Note the ORDER: Portugal hangs the little me on the back with a hyphen. Brazil puts it in front — me chamo — and that is the single fastest way to hear which side of the Atlantic someone learned on." },
        { id: "pt-u3l1-comotechamas", type: "vocab", front: "como te chamas", reading: "comotechamas", meaning: "what is your name", example: { jp: "Olá! Como te chamas?", en: "Hi! What's your name?" }, drill: { jp: "Olá como te chamas", en: "Hi what is your name" }, accept: ["what's your name", "whats your name", "what are you called"], hint: "The tu version — te and the -s ending both mark it. Polite: Como se chama? Literally both ask \"how do you call yourself?\"" },
        { id: "pt-u3l1-onome", type: "vocab", front: "o nome", reading: "onome", meaning: "name", example: { jp: "Ana é um nome português.", en: "Ana is a Portuguese name." }, drill: { jp: "O nome de Ana é português", en: "Ana's name is Portuguese" }, accept: ["the name", "first name"], hint: "NO-me. Your surname is o apelido in Portugal — Brazil says o sobrenome for that, and uses apelido to mean a nickname. Same word, two countries, two meanings." },
        { id: "pt-u3l1-prazer", type: "vocab", front: "prazer", reading: "prazer", meaning: "pleased to meet you", example: { jp: "Muito prazer, Maria!", en: "Pleased to meet you, Maria!" }, drill: { jp: "Muito prazer Maria", en: "Pleased to meet you Maria" }, accept: ["pleasure", "nice to meet you", "a pleasure"], hint: "The noun means \"pleasure\"; said on its own at an introduction it is the whole formula. Muito prazer is the fuller version." },
        { id: "pt-u3l1-sou", type: "vocab", front: "sou", reading: "sou", meaning: "I am", example: { jp: "Eu sou o Tiago.", en: "I'm Tiago." }, drill: { jp: "Eu sou o Tiago", en: "I am Tiago" }, accept: ["i'm", "im", "i am"], hint: "Goes with é from Unit 1 — same verb, different person. And notice the article before the name: Portugal says o Tiago, a Ana, where English would never say \"the Tiago\"." },
      ],
    },
    {
      id: "pt-u3l2",
      unit: 3,
      lesson: 2,
      title: "De onde és?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you are from, what country you are in, and which languages you speak.",
      items: [
        { id: "pt-u3l2-deondees", type: "vocab", front: "de onde és", reading: "deondees", meaning: "where are you from", example: { jp: "De onde és, Ana?", en: "Where are you from, Ana?" }, drill: { jp: "De onde és Ana", en: "Where are you from Ana" }, accept: ["where are you from?", "where do you come from", "where you from"], hint: "de (of/from) plus onde (where). Answer with sou de + the place: Sou de Lisboa. The polite version is De onde é?" },
        { id: "pt-u3l2-em", type: "vocab", front: "em", reading: "em", meaning: "in", example: { jp: "Estou em Portugal.", en: "I'm in Portugal." }, drill: { jp: "Estou em Portugal", en: "I am in Portugal" }, accept: ["on", "at", "into"], hint: "One preposition covers in, on and at. It fuses with the article: em + o = no, em + a = na — no carro, na rua. You will see those fused forms constantly." },
        { id: "pt-u3l2-opais", type: "vocab", front: "o país", reading: "opais", meaning: "country", example: { jp: "O país de Ana é Portugal.", en: "Ana's country is Portugal." }, drill: { jp: "O país de Ana é Portugal", en: "Ana's country is Portugal" }, accept: ["the country", "nation"], hint: "pa-EESH — the accent on the í splits it into two syllables, and the final s shushes. Do not confuse it with o pai (father)." },
        { id: "pt-u3l2-portugues", type: "vocab", front: "português", reading: "portugues", meaning: "Portuguese", example: { jp: "O Tiago é português.", en: "Tiago is Portuguese." }, drill: { jp: "O Tiago é português", en: "Tiago is Portuguese" }, accept: ["portuguese language", "portuguese (man)"], hint: "One word for the language, the nationality and the adjective. A woman is portuguesa — the ê loses its hat when the -a arrives. Languages are not capitalised in Portuguese." },
        { id: "pt-u3l2-ingles", type: "vocab", front: "inglês", reading: "ingles", meaning: "English", example: { jp: "Não sou inglês, sou português.", en: "I'm not English, I'm Portuguese." }, drill: { jp: "Não sou inglês sou português", en: "I am not English I am Portuguese" }, accept: ["english language", "englishman", "british"], hint: "Same shape as português, same feminine trick: inglesa. The -ês ending marks a whole family of nationalities — francês, chinês, japonês." },
        { id: "pt-u3l2-falar", type: "vocab", front: "falar", reading: "falar", meaning: "to speak", example: { jp: "Falar português é importante.", en: "Speaking Portuguese is important." }, drill: { jp: "Falar português é importante", en: "Speaking Portuguese is important" }, accept: ["to talk", "speak", "talk"], hint: "The dictionary form of every Portuguese verb ends in -ar, -er or -ir. This one is the biggest, easiest family: falo (I speak), falas (you speak), fala (he/she speaks)." },
      ],
    },
    {
      id: "pt-u3l3",
      unit: 3,
      lesson: 3,
      title: "Quantos anos tens?",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Ask someone's age and give your own, and say when your birthday is.",
      items: [
        { id: "pt-u3l3-ter", type: "vocab", front: "ter", reading: "ter", meaning: "to have", example: { jp: "Ter um carro é caro.", en: "Having a car is expensive." }, drill: { jp: "Ter um carro é caro", en: "Having a car is expensive" }, accept: ["have", "to own", "own"], hint: "The workhorse verb: tenho (I have), tens (you have), tem (he/she has). Portuguese uses it where English uses \"to be\" for age and for hunger — you HAVE twenty years." },
        { id: "pt-u3l3-aidade", type: "vocab", front: "a idade", reading: "aidade", meaning: "age", example: { jp: "A idade não é um problema.", en: "Age isn't a problem." }, drill: { jp: "A idade não é um problema", en: "Age is not a problem" }, accept: ["the age", "how old"], hint: "i-DA-de. The -dade ending is Portuguese's -ity, so it marks a whole set of abstract nouns: a cidade, a universidade, a verdade." },
        { id: "pt-u3l3-oano", type: "vocab", front: "o ano", reading: "oano", meaning: "year", example: { jp: "Um ano em Portugal!", en: "A year in Portugal!" }, drill: { jp: "O ano em Portugal é bom", en: "The year in Portugal is good" }, accept: ["the year"], hint: "A-nu. No tilde — that matters, because it is the tilde that separates ano from the nasal words of Unit 2." },
        { id: "pt-u3l3-oaniversario", type: "vocab", front: "o aniversário", reading: "oaniversario", meaning: "birthday", example: { jp: "Parabéns! Feliz aniversário, Ana!", en: "Congratulations! Happy birthday, Ana!" }, drill: { jp: "O aniversário de Ana é fantástico", en: "Ana's birthday is fantastic" }, accept: ["the birthday", "anniversary"], hint: "Covers both a birthday and an anniversary. The everyday wish, though, is just Parabéns! — Portugal rarely says the longer phrase." },
        { id: "pt-u3l3-fazer", type: "vocab", front: "fazer", reading: "fazer", meaning: "to do", example: { jp: "Fazer anos é bom.", en: "Having a birthday is good." }, drill: { jp: "Fazer anos é bom", en: "Having a birthday is good" }, accept: ["to make", "do", "make"], hint: "Do and make are one verb: faço (I do), fazes (you do), faz (he/she does). Fazer anos is the idiom for having a birthday — literally \"to make years\"." },
        { id: "pt-u3l3-quantosanostens", type: "vocab", front: "quantos anos tens", reading: "quantosanostens", meaning: "how old are you", example: { jp: "Quantos anos tens, Ana?", en: "How old are you, Ana?" }, drill: { jp: "Quantos anos tens Ana", en: "How old are you Ana" }, accept: ["how old are you?", "what is your age", "how many years"], hint: "Literally \"how many years do you have?\" — never \"how old ARE you\". Answer the same way: Tenho vinte anos. Polite version: Quantos anos tem?" },
      ],
    },
    {
      id: "pt-u3l4",
      unit: 3,
      lesson: 4,
      title: "O que fazes?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you do for a living or what you study, and name a few common jobs.",
      items: [
        { id: "pt-u3l4-estudar", type: "vocab", front: "estudar", reading: "estudar", meaning: "to study", example: { jp: "Estudar português é importante.", en: "Studying Portuguese is important." }, drill: { jp: "Estudar português é importante", en: "Studying Portuguese is important" }, accept: ["study", "to learn"], hint: "Another -ar verb, so it behaves exactly like falar: estudo, estudas, estuda." },
        { id: "pt-u3l4-oestudante", type: "vocab", front: "o estudante", reading: "oestudante", meaning: "student", example: { jp: "Ana é estudante em Coimbra.", en: "Ana is a student in Coimbra." }, drill: { jp: "O estudante de Coimbra é português", en: "The Coimbra student is Portuguese" }, accept: ["the student", "pupil"], hint: "Same form for a man and a woman — only the article changes: o estudante, a estudante. And note that Portuguese drops the \"a\" when stating a job: Ana é estudante, not \"é uma estudante\"." },
        { id: "pt-u3l4-oprofessor", type: "vocab", front: "o professor", reading: "oprofessor", meaning: "teacher", example: { jp: "O professor de Ana é português.", en: "Ana's teacher is Portuguese." }, drill: { jp: "O professor de Ana é português", en: "Ana's teacher is Portuguese" }, accept: ["the teacher", "professor", "lecturer"], hint: "Double ss, so a hard s — pru-fe-SSOR, not a z. The feminine is a professora. It covers a schoolteacher as well as a university professor." },
        { id: "pt-u3l4-omedico", type: "vocab", front: "o médico", reading: "omedico", meaning: "doctor", example: { jp: "O senhor Pedro é médico.", en: "Mr. Pedro is a doctor." }, drill: { jp: "O médico de Braga é famoso", en: "The Braga doctor is famous" }, accept: ["the doctor", "physician", "gp"], hint: "MÉ-di-ku, stressed on the first syllable — that is what the accent is telling you. Feminine a médica." },
        { id: "pt-u3l4-aprofissao", type: "vocab", front: "a profissão", reading: "aprofissao", meaning: "profession", example: { jp: "A profissão de Ana é importante.", en: "Ana's profession is important." }, drill: { jp: "A profissão de Ana é importante", en: "Ana's profession is important" }, accept: ["the profession", "job", "occupation", "career"], hint: "The -ão ending from Unit 1, on an abstract noun. English -tion is very often Portuguese -ção or -ssão: profissão, estação, lição." },
        { id: "pt-u3l4-tambem", type: "vocab", front: "também", reading: "tambem", meaning: "also", example: { jp: "Eu também sou estudante.", en: "I'm a student too." }, drill: { jp: "Eu também sou estudante", en: "I am a student too" }, accept: ["too", "as well", "additionally", "either"], hint: "tam-BAING — both syllables nasal. In a negative sentence Portuguese switches to também não: Eu também não falo inglês." },
      ],
    },
  ],
};
