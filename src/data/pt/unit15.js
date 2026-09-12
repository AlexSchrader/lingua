// PT Unit 15 — A casa e a mobília (slot: coverage-1) — A1
// The first of block 3's six closing units. Home is the biggest gap left after
// blocks 1-2: Unit 1 teaches a casa and Unit 7 teaches a casa de banho, but the
// learner still cannot name a single room, a single piece of furniture, or a
// single thing on the table. This unit fills that in and ends on the door.
//
// pt-PT marker carded here: o frigorífico (Brazil: a geladeira). The lesson-4
// pair puxar / empurrar is the most practically useful false friend in the
// language — PUXE is printed on nearly every door in Portugal and an English
// speaker reads it as "push" and shoves. The Spanish traps sited here are
// o copo (ES copo = a flake) and o prédio (ES predio = a plot of land).
// morar is glossed "to live (somewhere)" and its hint contrasts it explicitly
// with viver from Unit 4, so the two are learned as a pair, not as a duplicate.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT15 = {
  id: "pt-u15",
  lang: "pt",
  title: "A casa e a mobília",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "pt-u15l1",
      unit: 15,
      lesson: 1,
      title: "As divisões da casa",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the rooms of a Portuguese home, say which one something is in, and say where you live.",
      items: [
        { id: "pt-u15l1-oquarto", type: "vocab", front: "o quarto", reading: "oquarto", meaning: "bedroom", example: { jp: "O quarto de Ana é tranquilo.", en: "Ana's bedroom is tranquil." }, drill: { jp: "O quarto de Ana é tranquilo", en: "Ana's bedroom is tranquil" }, accept: ["the bedroom", "room", "the room"], hint: "KWAR-tu. It is the bedroom at home and simply the room at a hotel. It is also \"a quarter\" — um quarto de hora is fifteen minutes, which is how Portugal tells the time." },
        { id: "pt-u15l1-acozinha", type: "vocab", front: "a cozinha", reading: "acozinha", meaning: "kitchen", example: { jp: "A cozinha é ali, à direita.", en: "The kitchen is there, on the right." }, drill: { jp: "A cozinha é ali à direita", en: "The kitchen is there on the right" }, accept: ["the kitchen"], hint: "ku-ZI-nya, with the nh of Unit 1 and the z sound s takes between vowels. One root, three words across this level: a cozinha, cozinhar (to cook), o cozinheiro (the cook)." },
        { id: "pt-u15l1-asala", type: "vocab", front: "a sala", reading: "asala", meaning: "living room", example: { jp: "A sala é enorme e tranquila.", en: "The living room is enormous and tranquil." }, drill: { jp: "A sala é enorme e tranquila", en: "The living room is enormous and tranquil" }, accept: ["the living room", "lounge", "sitting room", "room"], hint: "SA-la. On its own it is the living room — a sala de estar in full. Add a word and it becomes any purpose-built room: uma sala de aula is a classroom. It is not a salada from Unit 6." },
        { id: "pt-u15l1-ojardim", type: "vocab", front: "o jardim", reading: "ojardim", meaning: "garden", example: { jp: "A casa de Tiago é aqui, e o jardim é enorme.", en: "Tiago's house is here, and the garden is enormous." }, drill: { jp: "O jardim de Tiago é enorme", en: "Tiago's garden is enormous" }, accept: ["the garden", "yard", "park"], hint: "zhar-DING — the j is the zh of a loja, and the final -im nasalises like sim. Portugal also calls a small public park um jardim; Lisbon's is o Jardim da Estrela." },
        { id: "pt-u15l1-opredio", type: "vocab", front: "o prédio", reading: "opredio", meaning: "building", example: { jp: "O prédio de Ana é moderno.", en: "Ana's building is modern." }, drill: { jp: "O prédio de Ana é moderno", en: "Ana's building is modern" }, accept: ["the building", "apartment block", "block of flats", "block"], hint: "PRE-di-u. An apartment block — the ordinary way Portuguese cities are built. FALSE FRIEND: Spanish predio is a plot of land or an estate; the Portuguese prédio is the building standing on it." },
        { id: "pt-u15l1-morar", type: "vocab", front: "morar", reading: "morar", meaning: "to live (somewhere)", example: { jp: "Moro numa casa em Coimbra.", en: "I live in a house in Coimbra." }, drill: { jp: "Morar em Lisboa é fantástico", en: "Living in Lisbon is fantastic" }, accept: ["to reside", "live", "to live", "reside", "to dwell", "to live somewhere"], hint: "mu-RAR: moro, moras, mora. This is where you RESIDE — an address. Viver from Unit 4 is the wider word, to be alive or to live a life. For \"I live in Lisbon\" a Portuguese speaker says moro em Lisboa. Note em + uma fusing into numa." },
      ],
    },
    {
      id: "pt-u15l2",
      unit: 15,
      lesson: 2,
      title: "A mobília",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the furniture in a Portuguese room and say which room a piece of it belongs to.",
      items: [
        { id: "pt-u15l2-amobilia", type: "vocab", front: "a mobília", reading: "amobilia", meaning: "furniture", example: { jp: "A mobília da sala é moderna.", en: "The living-room furniture is modern." }, drill: { jp: "A mobília da sala é moderna", en: "The living-room furniture is modern" }, accept: ["the furniture", "furnishings"], hint: "mu-BEE-lia. A collective word covering all the furniture at once, so like English it stays singular. A single piece is um móvel." },
        { id: "pt-u15l2-amesa", type: "vocab", front: "a mesa", reading: "amesa", meaning: "table", example: { jp: "A mesa da cozinha é enorme.", en: "The kitchen table is enormous." }, drill: { jp: "A mesa da cozinha é enorme", en: "The kitchen table is enormous" }, accept: ["the table"], hint: "ME-za — s between vowels says z, exactly as in a casa. The waiter who brings food to it is o empregado de mesa, which is what you actually call him in a restaurant." },
        { id: "pt-u15l2-acadeira", type: "vocab", front: "a cadeira", reading: "acadeira", meaning: "chair", example: { jp: "A cadeira do quarto é elegante.", en: "The bedroom chair is elegant." }, drill: { jp: "A cadeira do quarto é elegante", en: "The bedroom chair is elegant" }, accept: ["the chair", "seat"], hint: "ka-DAY-ra — ei is said \"ay\" in Lisbon. An armchair adds two words: uma cadeira de braços. In a university a cadeira is also a subject on your course." },
        { id: "pt-u15l2-acama", type: "vocab", front: "a cama", reading: "acama", meaning: "bed", example: { jp: "A cama do quarto de Ana é enorme.", en: "The bed in Ana's bedroom is enormous." }, drill: { jp: "A cama do quarto é enorme", en: "The bedroom bed is enormous" }, accept: ["the bed"], hint: "KA-ma, short and flat. Going to bed is ir para a cama, and making the bed is fazer a cama — the same fazer you met in Unit 3." },
        { id: "pt-u15l2-osofa", type: "vocab", front: "o sofá", reading: "osofa", meaning: "sofa", example: { jp: "O sofá da sala não é caro.", en: "The living-room sofa isn't expensive." }, drill: { jp: "O sofá da sala não é caro", en: "The living-room sofa isn't expensive" }, accept: ["the sofa", "couch", "settee"], hint: "su-FA — stressed on the accented a at the end, not SO-fa. That written accent is doing real work: it tells you where the stress falls." },
        { id: "pt-u15l2-oarmario", type: "vocab", front: "o armário", reading: "oarmario", meaning: "cupboard", example: { jp: "O armário do quarto é enorme.", en: "The bedroom wardrobe is enormous." }, drill: { jp: "O armário do quarto é moderno", en: "The bedroom wardrobe is modern" }, accept: ["the cupboard", "wardrobe", "closet", "cabinet"], hint: "ar-MA-riu. One word for cupboard, wardrobe and cabinet — the kitchen one and the bedroom one are both o armário. The kitchen sink unit is a banca, and that is genuinely a different word." },
      ],
    },
    {
      id: "pt-u15l3",
      unit: 15,
      lesson: 3,
      title: "Na cozinha",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Lay a Portuguese table — name the plate, the glass and the cutlery — and ask for the piece that is missing.",
      items: [
        { id: "pt-u15l3-ocopo", type: "vocab", front: "o copo", reading: "ocopo", meaning: "glass", example: { jp: "Um copo de água, por favor.", en: "A glass of water, please." }, drill: { jp: "O copo de vinho é enorme", en: "The wine glass is enormous" }, accept: ["the glass", "tumbler", "drinking glass"], hint: "KO-pu. FALSE FRIEND: Spanish copo is a flake — copo de nieve, a snowflake — and a Spanish drinking glass is un vaso. Here um copo is the everyday glass, and ir tomar um copo is to go out for a drink." },
        { id: "pt-u15l3-oprato", type: "vocab", front: "o prato", reading: "oprato", meaning: "plate", example: { jp: "O prato de peixe é delicioso.", en: "The fish dish is delicious." }, drill: { jp: "O prato de peixe é delicioso", en: "The fish dish is delicious" }, accept: ["the plate", "dish", "course"], hint: "PRA-tu. Two jobs, both useful: the physical plate, and the dish on a menu — o prato do dia is the day's special, which is how Portugal does lunch. Keep it apart from o rato of Unit 1: one letter, and one of them is a mouse." },
        { id: "pt-u15l3-afaca", type: "vocab", front: "a faca", reading: "afaca", meaning: "knife", example: { jp: "A faca do pão é enorme.", en: "The bread knife is enormous." }, drill: { jp: "A faca do pão é enorme", en: "The bread knife is enormous" }, accept: ["the knife"], hint: "FA-ka, hard c. Cutlery as a set is os talheres. Watch the cedilla: faca is a knife with a k sound, while faça (from fazer) is soft — the little hook is the whole difference." },
        { id: "pt-u15l3-ogarfo", type: "vocab", front: "o garfo", reading: "ogarfo", meaning: "fork", example: { jp: "Um garfo, por favor. E uma faca.", en: "A fork, please. And a knife." }, drill: { jp: "O garfo é da mesa da cozinha", en: "The fork is from the kitchen table" }, accept: ["the fork"], hint: "GAR-fu, hard g before a. Portugal eats fork in the left hand, knife in the right, and puts neither down between mouthfuls." },
        { id: "pt-u15l3-acolher", type: "vocab", front: "a colher", reading: "acolher", meaning: "spoon", example: { jp: "Uma faca, um garfo e uma colher, por favor.", en: "A knife, a fork and a spoon, please." }, drill: { jp: "A colher é do prato de sopa", en: "The spoon is from the soup dish" }, accept: ["the spoon", "spoonful"], hint: "ku-LYER, with the lh of o bilhete and the stress at the END — not KO-ler. A teaspoon is uma colher de chá, which is also how recipes measure. Spelled the same, the verb colher means to pick or harvest." },
        { id: "pt-u15l3-ofrigorifico", type: "vocab", front: "o frigorífico", reading: "ofrigorifico", meaning: "fridge", example: { jp: "O sumo do frigorífico é delicioso.", en: "The juice from the fridge is delicious." }, drill: { jp: "O frigorífico da cozinha é moderno", en: "The kitchen fridge is modern" }, accept: ["the fridge", "refrigerator", "the refrigerator"], hint: "PORTUGAL SAYS FRIGORÍFICO — fri-gu-REE-fi-ku, five syllables, and everybody shortens it to o frigo. Brazil says a geladeira, which is not used here. The freezer is o congelador." },
      ],
    },
    {
      id: "pt-u15l4",
      unit: 15,
      lesson: 4,
      title: "A porta e a chave",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Get into a Portuguese home or shop — and read the word printed on the door, which tells you to do the opposite of what an English speaker expects.",
      items: [
        { id: "pt-u15l4-aporta", type: "vocab", front: "a porta", reading: "aporta", meaning: "door", example: { jp: "A porta da casa de Ana é enorme.", en: "The door of Ana's house is enormous." }, drill: { jp: "A porta da casa é enorme", en: "The house door is enormous" }, accept: ["the door", "gate", "doorway"], hint: "POR-ta. Also the gate at an airport and the door of a car. Do not read the city into it: o Porto is the city, um porto is a harbour, a porta is a door." },
        { id: "pt-u15l4-ajanela", type: "vocab", front: "a janela", reading: "ajanela", meaning: "window", example: { jp: "A janela do quarto é enorme.", en: "The bedroom window is enormous." }, drill: { jp: "A janela do quarto é enorme", en: "The bedroom window is enormous" }, accept: ["the window"], hint: "zha-NE-la — j is zh, as in o jardim. A SHOP's window is not a janela but a montra, a different word for a different job; it arrives in Unit 16." },
        { id: "pt-u15l4-achave", type: "vocab", front: "a chave", reading: "achave", meaning: "key", example: { jp: "A chave é da porta do prédio.", en: "The key is for the building's door." }, drill: { jp: "A chave é da porta do prédio", en: "The key is for the building's door" }, accept: ["the key"], hint: "SHA-ve — ch is always \"sh\" in Portuguese, never the English \"ch\". Anything that turns is a chave: uma chave de fendas is a screwdriver, uma chave inglesa a spanner. Keep it apart from o chá of Unit 6." },
        { id: "pt-u15l4-puxar", type: "vocab", front: "puxar", reading: "puxar", meaning: "to pull", example: { jp: "Puxar a porta, não empurrar.", en: "Pull the door, don't push." }, drill: { jp: "Puxar a porta da loja", en: "To pull the shop door" }, accept: ["pull", "to draw", "to tug"], hint: "THE MOST USEFUL FALSE FRIEND IN PORTUGAL. Said \"poo-SHAR\", and it means PULL — printed on nearly every door in the country, where an English speaker reads \"push\" and shoves. Spanish pujar is to bid or strain; Spanish for pull is tirar, which in Portuguese means to take away." },
        { id: "pt-u15l4-empurrar", type: "vocab", front: "empurrar", reading: "empurrar", meaning: "to push", example: { jp: "Empurrar a porta do prédio.", en: "Push the building's door." }, drill: { jp: "Empurrar a porta do prédio", en: "To push the building's door" }, accept: ["push", "to shove", "to press"], hint: "eng-pu-RRAR, with the strong throat-r of a rua. This is the real word for push, and the other half of the door sign — what you actually see printed is PUXE and EMPURRE, the command forms of the two." },
        { id: "pt-u15l4-limpar", type: "vocab", front: "limpar", reading: "limpar", meaning: "to clean", example: { jp: "Limpar a cozinha e o quarto é o meu trabalho de hoje.", en: "Cleaning the kitchen and the bedroom is my job today." }, drill: { jp: "Limpar a cozinha é o meu trabalho", en: "Cleaning the kitchen is my job" }, accept: ["clean", "to clean up", "to wipe", "to tidy"], hint: "lim-PAR, nasal first syllable: limpo, limpas, limpa. The adjective is limpo (clean), its opposite sujo (dirty), and the person who cleans is uma empregada de limpeza." },
      ],
    },
  ],
};
