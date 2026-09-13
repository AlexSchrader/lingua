// PT Unit 79 — O movimento e o gesto (slot: coverage-b1-6) — B1
// HOW A BODY MOVES, AND WHAT IT DOES WITH ITS HANDS. A1-A2 give the corpus the
// travel verbs (ir, vir, chegar u20, sair u19, voltar u21, correr u19) and the
// two postures (sentar-se, deitar-se u21). Everything between them is missing:
// crossing, approaching, backing off, grabbing, letting go, slipping, pointing,
// waving. That is this unit.
//
// SLOT BOUNDARIES:
//   empurrar (u15) and puxar (u15) were on the first slate and are SPENT — the
//   crew lead caught both. They are used in examples here and taught nowhere.
//   levantar is u45 (to withdraw money), correr and tocar u19, arrumar u21,
//   deitar-se/sentar-se u21 — none re-taught.
//   u74 Os verbos · 2 (block 2) owns general action verbs; the partition agreed
//   with that seat is word class to them, DOMAIN to me — these 24 are all bodily
//   motion or handling, none of them general-purpose.
//   A2 u46 A geografia e as direções owns direction as PLACE; this unit owns it
//   as movement.
//
// largar and soltar are a deliberate near-pair, taught one lesson apart with the
// difference in both hints: largar is letting a thing go from your hand, soltar
// is releasing something that was held, tied or shut in.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT79 = {
  id: "pt-u79",
  lang: "pt",
  title: "O movimento e o gesto",
  order: 79,
  stage: "b1",
  lessons: [
    {
      id: "pt-u79l1",
      unit: 79,
      lesson: 1,
      title: "Ir e vir",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Move through a Portuguese sentence — cross it, come closer, back away, carry on, or stop.",
      items: [
        { id: "pt-u79l1-deslocarse", type: "vocab", front: "deslocar-se", reading: "deslocarse", meaning: "to travel (to get around)", example: { jp: "O chefe desloca-se de comboio para o trabalho todas as semanas.", en: "The boss travels to work by train every week." }, drill: { jp: "Deslocar-se de comboio é melhor", en: "Travelling by train is better" }, accept: ["travel", "to travel", "to get around", "to move", "to commute"], hint: "desh-lu-KAR-se. The formal verb for getting from A to B — what a timetable, a company or a doctor's note says, where speech would use ir. Uma deslocação is the trip itself." },
        { id: "pt-u79l1-atravessar", type: "vocab", front: "atravessar", reading: "atravessar", meaning: "to cross", example: { jp: "A turma atravessou a rua devagar porque a chuva era forte.", en: "The class crossed the street slowly because the rain was heavy." }, drill: { jp: "Vou atravessar a rua devagar", en: "I'm going to cross the street slowly" }, accept: ["cross", "to cross", "to go across", "to get across"], hint: "a-tra-ve-SAR, from través, across. A street, a river, a country — and a bad patch: atravessar uma fase difícil is what Portuguese says where English goes through one." },
        { id: "pt-u79l1-afastarse", type: "vocab", front: "afastar-se", reading: "afastarse", meaning: "to move away", example: { jp: "O cão afastou-se do fogo e foi para o jardim.", en: "The dog moved away from the fire and went into the garden." }, drill: { jp: "Afastar-se do fogo é melhor", en: "Moving away from the fire is better" }, accept: ["move away", "to move away", "to back away", "to step back", "to distance yourself"], hint: "a-fash-TAR-se, always with de. Longe, far, is the idea behind it. Also used of people drifting apart — afastámo-nos, we grew apart." },
        { id: "pt-u79l1-aproximarse", type: "vocab", front: "aproximar-se", reading: "aproximarse", meaning: "to approach", example: { jp: "O comboio aproximou-se da cidade e o som ficou forte.", en: "The train approached the city and the sound grew loud." }, drill: { jp: "O comboio vai aproximar-se da cidade", en: "The train is going to approach the city" }, accept: ["approach", "to approach", "to come closer", "to get closer", "to draw near"], hint: "a-pro-si-MAR-se, with de — the exact mirror of afastar-se. Próximo, near, is inside it, and so is the English proximity." },
        { id: "pt-u79l1-seguir", type: "vocab", front: "seguir", reading: "seguir", meaning: "to follow", example: { jp: "Segui o carro do vizinho e depois voltei para casa.", en: "I followed the neighbour's car and then came back home." }, drill: { jp: "Vou seguir o carro do vizinho", en: "I'm going to follow the neighbour's car" }, accept: ["follow", "to follow", "to carry on", "to go on", "to keep going"], hint: "se-GEER, u silent: sigo, segues, segue. To follow a car, a rule or an idea — and to carry on: siga! is what a Portuguese police officer says when you are free to move." },
        { id: "pt-u79l1-percorrer", type: "vocab", front: "percorrer", reading: "percorrer", meaning: "to cover", example: { jp: "A equipa percorreu a cidade toda a correr numa manhã de chuva.", en: "The team covered the whole city running on a rainy morning." }, drill: { jp: "A equipa vai percorrer a cidade", en: "The team is going to cover the city" }, accept: ["cover", "to cover", "to travel", "to go through", "to walk the length of"], hint: "per-ku-RRER, and it follows correr: percorro, percorres, percorre. Covering a distance end to end — a road, a country, a list with your eyes. Um percurso is what you covered." },
      ],
    },
    {
      id: "pt-u79l2",
      unit: 79,
      lesson: 2,
      title: "As mãos",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say what your hands are doing in Portuguese — grabbing it, holding it, letting it go, dragging it, shifting it.",
      items: [
        { id: "pt-u79l2-agarrar", type: "vocab", front: "agarrar", reading: "agarrar", meaning: "to grab", example: { jp: "O pai agarrou o cão na rua antes de ele chegar ao carro.", en: "My father grabbed the dog in the street before it reached the car." }, drill: { jp: "Vou agarrar o cão na rua", en: "I'm going to grab the dog in the street" }, accept: ["grab", "to grab", "to grasp", "to catch", "to seize"], hint: "a-ga-RRAR, strong rr. A garra is a claw — you grab with your claws. Quick and firm, where segurar is what you do afterwards." },
        { id: "pt-u79l2-segurar", type: "vocab", front: "segurar", reading: "segurar", meaning: "to hold", example: { jp: "A mãe segurou o livro com as duas mãos na aula.", en: "My mother held the book with both hands in the lesson." }, drill: { jp: "Vou segurar o livro na aula", en: "I'm going to hold the book in the lesson" }, accept: ["hold", "to hold", "to hold on to", "to keep hold of", "to support"], hint: "se-gu-RAR, from seguro, safe: holding is making something safe. That is also why um seguro is an insurance policy and segurar can mean to insure." },
        { id: "pt-u79l2-largar", type: "vocab", front: "largar", reading: "largar", meaning: "to let go of", example: { jp: "O cão largou o pão no jardim e foi dormir.", en: "The dog let go of the bread in the garden and went to sleep." }, drill: { jp: "Vou largar o pão no jardim", en: "I'm going to let go of the bread in the garden" }, accept: ["let go", "to let go", "to let go of", "to drop", "to put down"], hint: "lar-GAR, from largo, wide — your hand opens wide and the thing goes. Larga isso! is drop that! It also means to quit: largou o trabalho." },
        { id: "pt-u79l2-soltar", type: "vocab", front: "soltar", reading: "soltar", meaning: "to release (to set free)", example: { jp: "O vizinho soltou o cão no jardim e ele começou a correr.", en: "The neighbour released the dog into the garden and it started running." }, drill: { jp: "Vou soltar o cão no jardim", en: "I'm going to release the dog into the garden" }, accept: ["release", "to release", "to let loose", "to set free", "to untie"], hint: "sol-TAR, from solto, loose. Largar opens your hand; soltar opens the cage — it frees something that was held, tied or shut in. Soltar uma gargalhada is to let out a laugh." },
        { id: "pt-u79l2-arrastar", type: "vocab", front: "arrastar", reading: "arrastar", meaning: "to drag", example: { jp: "A turma arrastou as duas mesas para a janela.", en: "The class dragged the two tables over to the window." }, drill: { jp: "Vou arrastar a mesa para a janela", en: "I'm going to drag the table to the window" }, accept: ["drag", "to drag", "to haul", "to pull along"], hint: "a-rrash-TAR, strong rr. Along the ground, with the noise that implies. Arrastar-se is to drag yourself, of a person on a bad morning or of a meeting that will not end." },
        { id: "pt-u79l2-mexer", type: "vocab", front: "mexer", reading: "mexer", meaning: "to meddle with", example: { jp: "Ninguém quis mexer no telemóvel do professor na aula.", en: "Nobody wanted to touch the teacher's mobile in the lesson." }, drill: { jp: "Não vou mexer no telemóvel", en: "I'm not going to touch the mobile" }, accept: ["to touch", "to move", "to fiddle with", "to stir"], hint: "me-SHER. Mexer EM is to touch or meddle with something — não mexas nisso. Without em it is to stir a pot, and mexer-se is to get a move on." },
      ],
    },
    {
      id: "pt-u79l3",
      unit: 79,
      lesson: 3,
      title: "O corpo em movimento",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe what a body did in Portuguese — jumped, fell, slipped, tripped, leaned over, turned.",
      items: [
        { id: "pt-u79l3-saltar", type: "vocab", front: "saltar", reading: "saltar", meaning: "to jump", example: { jp: "O cão saltou pela janela e foi para a rua.", en: "The dog jumped out through the window and went into the street." }, drill: { jp: "O cão vai saltar pela janela", en: "The dog is going to jump through the window" }, accept: ["jump", "to jump", "to leap", "to skip", "to hop"], hint: "sal-TAR. Also to skip something — saltar uma página, saltar o pequeno-almoço. Um salto is both a jump and the heel of a shoe." },
        { id: "pt-u79l3-cair", type: "vocab", front: "cair", reading: "cair", meaning: "to fall", example: { jp: "O livro caiu da mesa e o som acordou o cão.", en: "The book fell off the table and the sound woke the dog." }, drill: { jp: "O livro vai cair da mesa", en: "The book is going to fall off the table" }, accept: ["fall", "to fall", "to fall over", "to drop", "to fall down"], hint: "ka-EER, two syllables: caio, cais, cai. Rain, night and prices all caem in Portuguese. Cair bem is said of food that agreed with you and of a remark that landed well." },
        { id: "pt-u79l3-escorregar", type: "vocab", front: "escorregar", reading: "escorregar", meaning: "to slip", example: { jp: "É fácil escorregar na rua quando a chuva é forte.", en: "It's easy to slip in the street when the rain is heavy." }, drill: { jp: "Escorregar na rua é fácil", en: "Slipping in the street is easy" }, accept: ["slip", "to slip", "to slide", "to skid"], hint: "esh-ku-rre-GAR. Your feet go and you may or may not fall — escorregar is the sliding, cair is the landing. Um escorrega is a playground slide." },
        { id: "pt-u79l3-tropecar", type: "vocab", front: "tropeçar", reading: "tropecar", meaning: "to trip", example: { jp: "O pai tropeçou na cadeira do quarto à noite.", en: "My father tripped on the bedroom chair at night." }, drill: { jp: "Tropeçar na cadeira é fácil", en: "Tripping on the chair is easy" }, accept: ["trip", "to trip", "to stumble", "to trip over"], hint: "tru-pe-SAR, with ç. Tropeçar EM whatever caught your foot. Used of speech too: tropeçou nas palavras, he stumbled over his words." },
        { id: "pt-u79l3-inclinarse", type: "vocab", front: "inclinar-se", reading: "inclinarse", meaning: "to lean", example: { jp: "A professora inclinou-se para a janela e olhou para a rua.", en: "The teacher leaned towards the window and looked out at the street." }, drill: { jp: "Inclinar-se para a janela é fácil", en: "Leaning towards the window is easy" }, accept: ["lean", "to lean", "to lean over", "to bend", "to tilt"], hint: "in-kli-NAR-se. The body tips without the feet moving. Non-reflexively it tilts an object, and figuratively inclino-me para a primeira ideia is I lean towards the first idea." },
        { id: "pt-u79l3-virar", type: "vocab", front: "virar", reading: "virar", meaning: "to turn", example: { jp: "O carro virou na primeira rua e parou ali.", en: "The car turned into the first street and stopped there." }, drill: { jp: "O carro vai virar na rua", en: "The car is going to turn into the street" }, accept: ["turn", "to turn", "to turn round", "to flip", "to turn over"], hint: "vi-RAR. Turning a corner, turning a page, flipping a steak. Virar-se para alguém is to turn to face someone, and às vezes tudo se vira, sometimes everything turns around." },
      ],
    },
    {
      id: "pt-u79l4",
      unit: 79,
      lesson: 4,
      title: "O gesto e o passo",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the movement itself in Portuguese — a gesture, a step, the traffic — and point, wave or hug with it.",
      items: [
        { id: "pt-u79l4-ogesto", type: "vocab", front: "o gesto", reading: "ogesto", meaning: "gesture", example: { jp: "O gesto do professor na aula foi claro para a turma.", en: "The teacher's gesture in the lesson was clear to the class." }, drill: { jp: "O gesto do professor foi claro", en: "The teacher's gesture was clear" }, accept: ["the gesture", "gesture", "sign", "movement"], hint: "ZHESH-tu. A movement of the hand, and a kind act: foi um gesto bonito is said of a thoughtful thing somebody did, exactly as in English." },
        { id: "pt-u79l4-apontar", type: "vocab", front: "apontar", reading: "apontar", meaning: "to point", example: { jp: "O professor apontou para a janela e a turma olhou.", en: "The teacher pointed at the window and the class looked." }, drill: { jp: "Vou apontar para a janela", en: "I'm going to point at the window" }, accept: ["point", "to point", "to point at", "to point out", "to jot down"], hint: "a-pon-TAR, from ponta, the tip. Apontar PARA is to point at. It also means to jot down — apontar o número — which is why os apontamentos are lecture notes." },
        { id: "pt-u79l4-acenar", type: "vocab", front: "acenar", reading: "acenar", meaning: "to wave", example: { jp: "A mãe acenou da janela e o pai acenou da rua.", en: "My mother waved from the window and my father waved from the street." }, drill: { jp: "Vou acenar da janela", en: "I'm going to wave from the window" }, accept: ["wave", "to wave", "to beckon", "to nod", "to signal"], hint: "a-se-NAR, from aceno, a sign. Waving hello or goodbye, and also nodding — acenou que sim is he nodded yes." },
        { id: "pt-u79l4-abracar", type: "vocab", front: "abraçar", reading: "abracar", meaning: "to hug", example: { jp: "A família abraçou o avô no dia do aniversário.", en: "The family hugged our grandfather on his birthday." }, drill: { jp: "Vou abraçar o avô hoje", en: "I'm going to hug my grandfather today" }, accept: ["hug", "to hug", "to embrace", "to put your arms around"], hint: "a-bra-SAR, ç. O braço, the arm, is inside it. Um abraço is the hug — and it is how the Portuguese sign off almost every email to somebody they like." },
        { id: "pt-u79l4-omovimento", type: "vocab", front: "o movimento", reading: "omovimento", meaning: "movement", example: { jp: "O movimento dos carros na rua começa logo de manhã.", en: "The movement of cars in the street starts first thing in the morning." }, drill: { jp: "O movimento dos carros é forte", en: "The movement of the cars is heavy" }, accept: ["the movement", "movement", "motion", "traffic", "activity"], hint: "mu-vi-MEN-tu. Movement, and the traffic or bustle of a place: há muito movimento aqui means this street is busy. Uma loja com movimento is a shop that does well." },
        { id: "pt-u79l4-osinal", type: "vocab", front: "o sinal", reading: "osinal", meaning: "sign", example: { jp: "O sinal do professor na aula é claro para toda a turma.", en: "The teacher's sign in the lesson is clear to the whole class." }, drill: { jp: "O sinal do professor é claro", en: "The teacher's sign is clear" }, accept: ["the sign", "sign", "signal", "the signal", "mark"], hint: "si-NAL. A hand sign, a road sign, a signal on your phone — and a deposit you leave on a purchase. Dar sinal de vida is to show a sign of life." },
      ],
    },
  ],
};
