// PT Unit 80 — As fases da vida (slot: coverage-b1-7) — B1
// A LIFE FROM ONE END TO THE OTHER. A1 u4 gives the corpus the people (a criança,
// o bebé, o avô, o filho) and u3 a idade, but no word for any STAGE of a life and
// no verb for moving through one. This unit is chronology: born, growing up,
// adolescence, adulthood, ageing, dying, and the generations either side of you.
//
// SLOT BOUNDARIES (crew-lead ruling, checked and approved):
//   u68 Relações e sociedade (block 2) owns who somebody KNOWS; this unit owns
//   how old they are and what stage they are at. A card about a bond belongs to
//   u68 and u68 wins on slot order — so casar (u39), o casamento (u39) and
//   acompanhar (u39) are used in examples here and taught nowhere.
//   A2 u48 owns o passado, a memória, a época and a tradição; u28 o século and a
//   década. All used, none re-taught.
//   u59 Mudança ao longo do tempo (block 1) owns change as a PROCESS; this unit
//   only ever means a human life.
//
// One lexeme per family, deliberately: nascer without o nascimento, morrer
// without a morte, reformar-se without a reforma, a herança without herdar.
// Each pair is one word with two mastery tracks and no new learning — the trap
// RUNBOOK section 4 names, which a green validator cannot see.
// criar is carded for raising a child; a criança (u4) is its old relative, and
// the hint says so rather than letting the learner meet the pair by accident.
// CORPUS GAPS met while authoring, logged not fixed: vir and pouco are taught by
// no unit in u1-u50 — both A1-basic, both lower-slot work, so examples here use
// sair and nada instead. Reported to the crew lead.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT80 = {
  id: "pt-u80",
  lang: "pt",
  title: "As fases da vida",
  order: 80,
  stage: "b1",
  lessons: [
    {
      id: "pt-u80l1",
      unit: 80,
      lesson: 1,
      title: "O princípio",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the start of a life in Portuguese — being born, growing up, childhood, the teenage years.",
      items: [
        { id: "pt-u80l1-nascer", type: "vocab", front: "nascer", reading: "nascer", meaning: "to be born", example: { jp: "A minha mãe nasceu numa aldeia do campo e foi para a cidade jovem.", en: "My mother was born in a village in the countryside and went to the city young." }, drill: { jp: "Nascer numa aldeia pequena é bom", en: "Being born in a small village is good" }, accept: ["be born", "to be born", "to come into the world", "to rise"], hint: "nash-SER: nasço, nasces, nasce. Portuguese uses one word where English needs three — nasci em Lisboa, I was born in Lisbon. The sun does it too: o sol nasce às sete." },
        { id: "pt-u80l1-ainfancia", type: "vocab", front: "a infância", reading: "ainfancia", meaning: "childhood", example: { jp: "A infância do meu pai no campo foi difícil mas feliz.", en: "My father's childhood in the countryside was hard but happy." }, drill: { jp: "A infância do meu pai foi difícil", en: "My father's childhood was hard" }, accept: ["the childhood", "childhood", "early years", "the early years"], hint: "in-FAN-si-a. The years, where a criança is the person living them. Um amigo de infância is a childhood friend — the phrase Portuguese reaches for when a friendship is old." },
        { id: "pt-u80l1-crescer", type: "vocab", front: "crescer", reading: "crescer", meaning: "to grow up", example: { jp: "Os filhos cresceram na casa da aldeia e hoje vivem na cidade.", en: "The children grew up in the village house and today they live in the city." }, drill: { jp: "Os filhos vão crescer na cidade", en: "The children are going to grow up in the city" }, accept: ["grow", "to grow", "grow up", "to grow up", "to increase"], hint: "kresh-SER: cresço, cresces, cresce. Children grow up, plants grow, and so do prices and cities. Acrescentar, to add, is built from it." },
        { id: "pt-u80l1-aadolescencia", type: "vocab", front: "a adolescência", reading: "aadolescencia", meaning: "adolescence", example: { jp: "A adolescência é o tempo em que tudo muda muito depressa.", en: "Adolescence is the time when everything changes very fast." }, drill: { jp: "A adolescência muda tudo muito", en: "Adolescence changes everything a lot" }, accept: ["adolescence", "the teenage years", "teenage years", "youth"], hint: "a-du-lesh-SEN-si-a. The formal word for the teenage years; um adolescente is the person. In speech a Portuguese parent is more likely to say quando ele era mais novo." },
        { id: "pt-u80l1-ajuventude", type: "vocab", front: "a juventude", reading: "ajuventude", meaning: "youth", example: { jp: "A juventude do meu avô foi no tempo da guerra.", en: "My grandfather's youth was in the time of the war." }, drill: { jp: "A juventude do meu avô foi difícil", en: "My grandfather's youth was hard" }, accept: ["the youth", "youth", "young days", "young people"], hint: "zhu-ven-TOO-de, from jovem. Both your own young years and young people as a group — a juventude de hoje, the youth of today, with the same faint sigh as in English." },
        { id: "pt-u80l1-educar", type: "vocab", front: "educar", reading: "educar", meaning: "to bring up", example: { jp: "Educar uma criança na cidade é difícil para os pais.", en: "Bringing up a child in the city is hard for the parents." }, drill: { jp: "Educar uma criança é difícil", en: "Bringing up a child is hard" }, accept: ["educate", "to educate", "bring up", "to bring up", "to raise"], hint: "e-du-KAR. Wider than schooling: educar is the whole job of raising a person, manners included. Bem-educado in Portuguese means polite, not well-schooled — a false friend worth keeping." },
      ],
    },
    {
      id: "pt-u80l2",
      unit: 80,
      lesson: 2,
      title: "A vida adulta",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Describe an adult life in Portuguese — the path it took, who it raised, who it looks after.",
      items: [
        { id: "pt-u80l2-oadulto", type: "vocab", front: "o adulto", reading: "oadulto", meaning: "adult", example: { jp: "O adulto paga mais e a criança paga menos.", en: "An adult pays more and a child pays less." }, drill: { jp: "O adulto paga mais no comboio", en: "The adult pays more on the train" }, accept: ["the adult", "adult", "grown-up", "the grown-up"], hint: "a-DOOL-tu. Also an adjective — a vida adulta. On a ticket machine you will meet it as the price category, sitting next to criança and sénior." },
        { id: "pt-u80l2-amaturidade", type: "vocab", front: "a maturidade", reading: "amaturidade", meaning: "maturity", example: { jp: "A maturidade não chega com a idade mas com a experiência.", en: "Maturity doesn't come with age but with experience." }, drill: { jp: "A maturidade não chega com a idade", en: "Maturity doesn't come with age" }, accept: ["the maturity", "maturity", "adulthood", "ripeness"], hint: "ma-tu-ri-DA-de. Of a person and of fruit alike — maduro is ripe and mature at once, which is a nicer image than the English word carries." },
        { id: "pt-u80l2-avida", type: "vocab", front: "a vida", reading: "avida", meaning: "life", example: { jp: "A vida na aldeia é mais calma do que a vida na cidade.", en: "Life in the village is calmer than life in the city." }, drill: { jp: "A vida na aldeia é calma", en: "Life in the village is calm" }, accept: ["the life", "life", "living", "lifetime"], hint: "VEE-da. Note the everyday uses: assim é a vida, that's life; ganhar a vida, to earn a living; toda a vida, your whole life long." },
        { id: "pt-u80l2-opercurso", type: "vocab", front: "o percurso", reading: "opercurso", meaning: "path", example: { jp: "O percurso do meu pai no trabalho foi sempre na empresa da cidade.", en: "My father's path at work was always in the city company." }, drill: { jp: "O percurso do meu pai foi difícil", en: "My father's path was a hard one" }, accept: ["the path", "path", "route", "the route", "career", "journey"], hint: "per-KUR-su. A physical route — o percurso do autocarro — and the shape of a life or a career. Percurso profissional is what a Portuguese CV calls your work history." },
        { id: "pt-u80l2-criar", type: "vocab", front: "criar", reading: "criar", meaning: "to raise", example: { jp: "Os meus avós criaram cinco filhos numa casa pequena.", en: "My grandparents raised five children in a small house." }, drill: { jp: "Os avós vão criar cinco filhos", en: "The grandparents are going to raise five children" }, accept: ["raise", "to raise", "to bring up", "to create", "to breed"], hint: "kri-AR. To raise a child or an animal, and also to create — criar uma empresa. A criança you met in Unit 4 is the old past participle of this verb: literally, the one being raised." },
        { id: "pt-u80l2-cuidar", type: "vocab", front: "cuidar", reading: "cuidar", meaning: "to look after", example: { jp: "A minha mãe cuida do avô todos os dias.", en: "My mother looks after my grandfather every day." }, drill: { jp: "A mãe vai cuidar do avô", en: "My mother is going to look after my grandfather" }, accept: ["look after", "to look after", "to care for", "to take care of", "to tend"], hint: "kui-DAR, always with de: cuidar DOS filhos. Cuidado! on its own is careful! — the noun doing warning duty, which is how you will meet this family first." },
      ],
    },
    {
      id: "pt-u80l3",
      unit: 80,
      lesson: 3,
      title: "A velhice",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Speak about old age and death in Portuguese without reaching for a euphemism you don't have yet.",
      items: [
        { id: "pt-u80l3-envelhecer", type: "vocab", front: "envelhecer", reading: "envelhecer", meaning: "to grow old", example: { jp: "Os meus avós envelheceram na aldeia onde nasceram.", en: "My grandparents grew old in the village where they were born." }, drill: { jp: "Os avós vão envelhecer na aldeia", en: "My grandparents are going to grow old in the village" }, accept: ["age", "to age", "grow old", "to grow old", "to get older"], hint: "en-ve-lye-SER, lh. Velho, old, with en- turning it into a process. It works on wine and cheese as well, where English switches to mature." },
        { id: "pt-u80l3-avelhice", type: "vocab", front: "a velhice", reading: "avelhice", meaning: "old age", example: { jp: "A velhice no campo é mais calma do que na cidade.", en: "Old age in the countryside is calmer than in the city." }, drill: { jp: "A velhice no campo é calma", en: "Old age in the countryside is calm" }, accept: ["the old age", "old age", "later life", "the later years"], hint: "ve-LYEE-se. The stage, where velho is the adjective. Portuguese also says a terceira idade, the third age, when it wants to be gentle about it." },
        { id: "pt-u80l3-idoso", type: "vocab", front: "idoso", reading: "idoso", meaning: "elderly", example: { jp: "O vizinho idoso vive ali há muitos anos e conhece toda a rua.", en: "The elderly neighbour has lived there for many years and knows the whole street." }, drill: { jp: "O vizinho idoso conhece a rua", en: "The elderly neighbour knows the street" }, accept: ["elderly", "old", "aged", "senior"], hint: "i-DO-zu, built on a idade. The polite word: um lar de idosos is a care home, where velho about a person can sound blunt." },
        { id: "pt-u80l3-reformarse", type: "vocab", front: "reformar-se", reading: "reformarse", meaning: "to retire", example: { jp: "O meu pai reformou-se no ano passado e agora cuida do jardim.", en: "My father retired last year and now looks after the garden." }, drill: { jp: "O meu pai vai reformar-se este ano", en: "My father is going to retire this year" }, accept: ["retire", "to retire", "to go into retirement", "to stop working"], hint: "rre-for-MAR-se. A reformado is a retired person and a reforma is the pension — so in Portugal you do not draw a pension, you ARE reformado. Brazil uses aposentar-se instead." },
        { id: "pt-u80l3-morrer", type: "vocab", front: "morrer", reading: "morrer", meaning: "to die", example: { jp: "O meu avô morreu no inverno e a família toda voltou à aldeia.", en: "My grandfather died in the winter and the whole family came back to the village." }, drill: { jp: "O avô vai morrer na aldeia", en: "My grandfather is going to die in the village" }, accept: ["die", "to die", "to pass away", "to be dying"], hint: "mu-RRER: morro, morres, morre. Plain and unavoidable. The gentler faleceu is what a newspaper prints, and morrer de fome or morrer de calor is everyday exaggeration, exactly as in English." },
        { id: "pt-u80l3-oluto", type: "vocab", front: "o luto", reading: "oluto", meaning: "mourning", example: { jp: "A família ficou de luto durante um ano e vestiu preto.", en: "The family was in mourning for a year and wore black." }, drill: { jp: "O luto da família foi difícil", en: "The family's mourning was hard" }, accept: ["the mourning", "mourning", "grief", "bereavement"], hint: "LOO-tu. Estar de luto is to be in mourning, and in Portuguese villages the black clothes that went with it were worn for years. Dia de luto nacional is a national day of mourning." },
      ],
    },
    {
      id: "pt-u80l4",
      unit: 80,
      lesson: 4,
      title: "As gerações",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place yourself in a line of people in Portuguese — the generation, the ancestors, what came down to you.",
      items: [
        { id: "pt-u80l4-ageracao", type: "vocab", front: "a geração", reading: "ageracao", meaning: "generation", example: { jp: "A geração dos meus avós trabalhou no campo toda a vida.", en: "My grandparents' generation worked in the fields their whole life." }, drill: { jp: "A geração dos avós trabalhou muito", en: "My grandparents' generation worked hard" }, accept: ["the generation", "generation", "age group"], hint: "zhe-ra-SOWN. Also used of machines and phones — a nova geração. A geração de 60 is how Portugal refers to the people who came of age in a particular decade." },
        { id: "pt-u80l4-oantepassado", type: "vocab", front: "o antepassado", reading: "oantepassado", meaning: "ancestor", example: { jp: "Os antepassados da minha mãe saíram do campo para a cidade no século passado.", en: "My mother's ancestors came from the countryside to the city in the last century." }, drill: { jp: "O antepassado saiu do campo", en: "The ancestor left the countryside" }, accept: ["the ancestor", "ancestor", "forebear", "forefather"], hint: "an-te-pa-SA-du — literally the one who passed before. Almost always plural: os antepassados. Portuguese families keep them close, and a village will still tell you which house was whose." },
        { id: "pt-u80l4-odescendente", type: "vocab", front: "o descendente", reading: "odescendente", meaning: "descendant", example: { jp: "Os descendentes da família ainda vivem na aldeia do avô.", en: "The family's descendants still live in my grandfather's village." }, drill: { jp: "O descendente vive na aldeia", en: "The descendant lives in the village" }, accept: ["the descendant", "descendant", "offspring"], hint: "desh-sen-DEN-te. The mirror of antepassado. Ser descendente de is to be descended from, which is how a Portuguese passport application phrases it." },
        { id: "pt-u80l4-aheranca", type: "vocab", front: "a herança", reading: "aheranca", meaning: "inheritance", example: { jp: "A herança do avô foi a casa da aldeia e mais nada.", en: "My grandfather's inheritance was the village house and nothing else." }, drill: { jp: "A herança do avô foi a casa", en: "My grandfather's inheritance was the house" }, accept: ["the inheritance", "inheritance", "legacy", "heritage"], hint: "e-RAN-sa, the h silent as always. Money and houses, and also what a country carries: a herança cultural. Herdar is the verb, and um herdeiro is the heir." },
        { id: "pt-u80l4-aorigem", type: "vocab", front: "a origem", reading: "aorigem", meaning: "origin", example: { jp: "A origem da família é uma aldeia pequena no norte do país.", en: "The family's origin is a small village in the north of the country." }, drill: { jp: "A origem da família é uma aldeia", en: "The family's origin is a village" }, accept: ["the origin", "origin", "origins", "background", "source"], hint: "u-RI-zhem. Where a person, a word or a custom started. Ser de origem portuguesa is to be of Portuguese origin — the phrase millions of people abroad use about themselves." },
        { id: "pt-u80l4-araiz", type: "vocab", front: "a raiz", reading: "araiz", meaning: "root", example: { jp: "As raízes da minha família estão no campo e não na cidade.", en: "My family's roots are in the countryside and not in the city." }, drill: { jp: "A raiz da família está no campo", en: "The family's root is in the countryside" }, accept: ["the root", "root", "roots", "the roots"], hint: "rra-EESH, plural raízes. A plant's root, a word's root, and a family's — ter raízes em is to have roots in. The stress falls on the i, which the accent on raízes marks." },
      ],
    },
  ],
};
