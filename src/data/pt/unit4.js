// PT Unit 4 — A família ("Family") — A1
// The relatives, and the possessives that come with them. Portuguese keeps the
// definite article in front of a possessive — o meu pai, a minha mãe — which is
// Portugal's habit far more strictly than Brazil's, so it is taught that way from
// the first card. a mãe and a mulher are already taught in u1 (the sounds unit
// legitimately owns ordinary words, RUNBOOK §6) and are used here in examples.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT4 = {
  id: "pt-u4",
  lang: "pt",
  title: "A família",
  order: 4,
  stage: "a1",
  lessons: [
    {
      id: "pt-u4l1",
      unit: 4,
      lesson: 1,
      title: "Os meus pais",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the people in your immediate family and say which of them are yours, using the article-plus-possessive that Portugal insists on.",
      items: [
        { id: "pt-u4l1-afamilia", type: "vocab", front: "a família", reading: "afamilia", meaning: "family", example: { jp: "A família de Ana é de Coimbra.", en: "Ana's family is from Coimbra." }, drill: { jp: "A família de Ana é de Coimbra", en: "Ana's family is from Coimbra" }, accept: ["the family", "relatives"], hint: "fa-MI-lia, stressed on the MI — the accent says so. In Portugal a família usually means the whole extended set, not just parents and children." },
        { id: "pt-u4l1-opai", type: "vocab", front: "o pai", reading: "opai", meaning: "father", example: { jp: "O pai de Tiago é médico.", en: "Tiago's father is a doctor." }, drill: { jp: "O pai de Tiago é médico", en: "Tiago's father is a doctor" }, accept: ["the father", "dad", "daddy"], hint: "Rhymes with \"eye\". The plural os pais means \"the parents\" — mother and father together — which is a shortcut Portuguese uses constantly." },
        { id: "pt-u4l1-omeu", type: "vocab", front: "o meu", reading: "omeu", meaning: "my", example: { jp: "O meu pai é professor.", en: "My father is a teacher." }, drill: { jp: "O meu pai é professor", en: "My father is a teacher" }, accept: ["mine", "my (masculine)"], hint: "Keep the o. Portugal says o meu pai, o meu carro — dropping the article sounds foreign here, even though Brazil often does. Plural: os meus." },
        { id: "pt-u4l1-aminha", type: "vocab", front: "a minha", reading: "aminha", meaning: "my (feminine)", example: { jp: "A minha mãe é portuguesa.", en: "My mother is Portuguese." }, drill: { jp: "A minha mãe é portuguesa", en: "My mother is Portuguese" }, accept: ["my", "mine", "mine (feminine)"], hint: "The possessive agrees with the THING owned, not with the owner — a man and a woman both say a minha mãe. Note the nh from Unit 1: mi-NYA. Plural: as minhas." },
        { id: "pt-u4l1-ofilho", type: "vocab", front: "o filho", reading: "ofilho", meaning: "son", example: { jp: "O filho de Maria também é estudante.", en: "Maria's son is a student too." }, drill: { jp: "O filho de Maria é estudante", en: "Maria's son is a student" }, accept: ["the son", "boy", "child"], hint: "FEE-lyu — the lh again. os filhos covers \"the children\" of a family as well as \"the sons\"." },
        { id: "pt-u4l1-afilha", type: "vocab", front: "a filha", reading: "afilha", meaning: "daughter", example: { jp: "A filha de Pedro é a Maria.", en: "Pedro's daughter is Maria." }, drill: { jp: "A filha de Pedro é Maria", en: "Pedro's daughter is Maria" }, accept: ["the daughter", "girl"], hint: "Same word, feminine ending: FEE-lya. Swapping a final -o for a final -a is the commonest gender switch in the language." },
      ],
    },
    {
      id: "pt-u4l2",
      unit: 4,
      lesson: 2,
      title: "Irmãos, avós e primos",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about your brothers, sisters and grandparents — and hear the difference between avô and avó, which is one vowel and two different people.",
      items: [
        { id: "pt-u4l2-oirmao", type: "vocab", front: "o irmão", reading: "oirmao", meaning: "brother", example: { jp: "O meu irmão é estudante.", en: "My brother is a student." }, drill: { jp: "O irmão de Ana é estudante", en: "Ana's brother is a student" }, accept: ["the brother", "sibling"], hint: "The -ão nasal from Unit 1. Plural os irmãos means brothers, or brothers and sisters together — the same shortcut as os pais." },
        { id: "pt-u4l2-airma", type: "vocab", front: "a irmã", reading: "airma", meaning: "sister", example: { jp: "A minha irmã é professora.", en: "My sister is a teacher." }, drill: { jp: "A irmã de Ana é professora", en: "Ana's sister is a teacher" }, accept: ["the sister"], hint: "The feminine drops the -o off the nasal: ir-MAN. Plural as irmãs." },
        { id: "pt-u4l2-oavo", type: "vocab", front: "o avô", reading: "oavo", meaning: "grandfather", example: { jp: "O meu avô é de Braga.", en: "My grandfather is from Braga." }, drill: { jp: "O avô de Tiago é de Braga", en: "Tiago's grandfather is from Braga" }, accept: ["the grandfather", "grandad", "grandpa"], hint: "The circumflex ô means a CLOSED o — a-VOH, lips rounded tight. This is the open-versus-closed vowel contrast Unit 1 promised, and here it decides which grandparent you mean." },
        { id: "pt-u4l2-aavo", type: "vocab", front: "a avó", reading: "aavo", meaning: "grandmother", example: { jp: "A minha avó é muito importante.", en: "My grandmother is very important." }, drill: { jp: "A avó de Tiago é de Coimbra", en: "Tiago's grandmother is from Coimbra" }, accept: ["the grandmother", "grandma", "granny"], hint: "The other accent, the other vowel: ó is OPEN, a-VAW, jaw dropped like the o in \"or\". avô and avó differ by nothing else. Plural os avós = the grandparents." },
        { id: "pt-u4l2-oprimo", type: "vocab", front: "o primo", reading: "oprimo", meaning: "cousin", example: { jp: "O primo de Tiago é médico.", en: "Tiago's cousin is a doctor." }, drill: { jp: "O primo de Tiago é médico", en: "Tiago's cousin is a doctor" }, accept: ["the cousin", "male cousin"], hint: "A woman cousin is a prima. Portuguese has no single word covering both — you must pick a gender, so you always know which cousin is meant." },
        { id: "pt-u4l2-ohomem", type: "vocab", front: "o homem", reading: "ohomem", meaning: "man", example: { jp: "O homem é o pai de Ana.", en: "The man is Ana's father." }, drill: { jp: "O homem é o pai de Ana", en: "The man is Ana's father" }, accept: ["the man", "guy", "male"], hint: "O-maing. The h is silent, exactly as in Spanish, and that final -em is nasal. Pairs with a mulher from Unit 1. Plural os homens." },
      ],
    },
    {
      id: "pt-u4l3",
      unit: 4,
      lesson: 3,
      title: "A família toda",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the wider family — aunts, uncles, partners and the children — and describe who belongs to whom.",
      items: [
        { id: "pt-u4l3-otio", type: "vocab", front: "o tio", reading: "otio", meaning: "uncle", example: { jp: "O meu tio é professor em Lisboa.", en: "My uncle is a teacher in Lisbon." }, drill: { jp: "O tio de Ana é professor", en: "Ana's uncle is a teacher" }, accept: ["the uncle"], hint: "TEE-u, two syllables. os tios can mean the uncles, or an aunt and uncle as a pair — the masculine plural covers a mixed group, which is a rule that runs through the whole language." },
        { id: "pt-u4l3-atia", type: "vocab", front: "a tia", reading: "atia", meaning: "aunt", example: { jp: "A tia de Ana é médica.", en: "Ana's aunt is a doctor." }, drill: { jp: "A tia de Ana é médica", en: "Ana's aunt is a doctor" }, accept: ["the aunt", "auntie"], hint: "TEE-a. Portuguese children often call any friendly adult woman tia — it softens into something closer to \"auntie\"." },
        { id: "pt-u4l3-omarido", type: "vocab", front: "o marido", reading: "omarido", meaning: "husband", example: { jp: "O marido de Maria é inglês.", en: "Maria's husband is English." }, drill: { jp: "O marido de Maria é inglês", en: "Maria's husband is English" }, accept: ["the husband", "spouse"], hint: "For a wife, Portugal usually just says a mulher — the same word as \"woman\", from Unit 1. a esposa exists but sounds formal." },
        { id: "pt-u4l3-obebe", type: "vocab", front: "o bebé", reading: "obebe", meaning: "baby", example: { jp: "O bebé é o filho de Ana.", en: "The baby is Ana's son." }, drill: { jp: "O bebé é o filho de Ana", en: "The baby is Ana's son" }, accept: ["the baby", "infant"], hint: "Watch the accent: Portugal writes bebé with an acute, Brazil writes bebê with a circumflex. Same word, and the accent is the passport." },
        { id: "pt-u4l3-acrianca", type: "vocab", front: "a criança", reading: "acrianca", meaning: "child", example: { jp: "A criança é a filha de Pedro.", en: "The child is Pedro's daughter." }, drill: { jp: "A criança é a filha de Pedro", en: "The child is Pedro's daughter" }, accept: ["the child", "kid", "youngster"], hint: "cri-AN-sa — cedilla plus nasal. It is FEMININE whatever the child's gender: a criança, even for a boy." },
        { id: "pt-u4l3-onamorado", type: "vocab", front: "o namorado", reading: "onamorado", meaning: "boyfriend", example: { jp: "O namorado de Ana é português.", en: "Ana's boyfriend is Portuguese." }, drill: { jp: "O namorado de Ana é português", en: "Ana's boyfriend is Portuguese" }, accept: ["the boyfriend", "partner"], hint: "From namorar, to date. A girlfriend is a namorada. Portugal uses it for a serious relationship, not a first date." },
      ],
    },
    {
      id: "pt-u4l4",
      unit: 4,
      lesson: 4,
      title: "Nós, o cão e o gato",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Say what you like and name the animals in the house — with the Portuguese word for dog, which is not the Brazilian one.",
      items: [
        { id: "pt-u4l4-oteu", type: "vocab", front: "o teu", reading: "oteu", meaning: "your", example: { jp: "O teu irmão é estudante?", en: "Is your brother a student?" }, drill: { jp: "O teu irmão é estudante", en: "Your brother is a student" }, accept: ["yours", "your (informal)"], hint: "The tu possessive, so it goes with everyone you would call tu. Feminine a tua. For the polite register you would say o seu instead." },
        { id: "pt-u4l4-nos", type: "vocab", front: "nós", reading: "nos", meaning: "we", example: { jp: "Nós também somos de Lisboa.", en: "We are from Lisbon too." }, drill: { jp: "Nós somos de Lisboa", en: "We are from Lisbon" }, accept: ["us", "we are"], hint: "The accent matters — nós is \"we\", nos without it is \"us\" as an object. The verb form to go with it ends in -mos: somos, falamos, temos." },
        { id: "pt-u4l4-ocao", type: "vocab", front: "o cão", reading: "ocao", meaning: "dog", example: { jp: "O meu cão chama-se Bobi.", en: "My dog is called Bobi." }, drill: { jp: "O cão de Tiago é enorme", en: "Tiago's dog is enormous" }, accept: ["the dog", "hound"], hint: "PORTUGAL SAYS CÃO. Brazil says o cachorro, which in Portugal means a puppy or a hot dog. Nasal again — kãw — and the plural is os cães." },
        { id: "pt-u4l4-ogato", type: "vocab", front: "o gato", reading: "ogato", meaning: "cat", example: { jp: "A minha irmã tem um gato e um cão.", en: "My sister has a cat and a dog." }, drill: { jp: "O gato e o cão de Ana", en: "Ana's cat and dog" }, accept: ["the cat", "tomcat"], hint: "GA-tu, hard g. Feminine a gata. A kitten is um gatinho — -inho is Portuguese's everyday diminutive and it attaches to almost any noun." },
        { id: "pt-u4l4-gostar", type: "vocab", front: "gostar", reading: "gostar", meaning: "to like", example: { jp: "Eu gosto do meu trabalho.", en: "I like my work." }, drill: { jp: "Gostar de Portugal é fantástico", en: "Liking Portugal is fantastic" }, accept: ["like", "to enjoy", "enjoy"], hint: "It always drags a de behind it: gostar DE. And de fuses with the article — gosto do café, gosto da casa. Never gostar something directly." },
        { id: "pt-u4l4-viver", type: "vocab", front: "viver", reading: "viver", meaning: "to live", example: { jp: "Viver em Lisboa é fantástico.", en: "Living in Lisbon is fantastic." }, drill: { jp: "Viver em Lisboa é fantástico", en: "Living in Lisbon is fantastic" }, accept: ["live", "to be alive"], hint: "An -er verb: vivo, vives, vive. For \"I live at an address\" Portugal more often uses morar — vivo em Lisboa and moro em Lisboa are both right." },
      ],
    },
  ],
};
