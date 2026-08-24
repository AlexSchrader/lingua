// ES Unit 41 — Verbos de acción · 2 ("Action verbs 2") — A2 COVERAGE (slot: coverage-a2-2)
// The second tier of everyday verbs: handling objects, money, the body, and time.
// Headworded in the infinitive (es/unit13.js); useful forms in examples and hints.
// Conventions and BLOCK-3 SCOPE: see es/unit40.js. Examples use only the A1 corpus
// plus fronts taught at or before this unit. FREE: María, Pablo, Ana, Madrid.
export const ES_UNIT41 = {
  id: "es-u41",
  lang: "es",
  title: "Verbos de acción · 2",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "es-u41l1",
      unit: 41,
      lesson: 1,
      title: "Tocar, guardar, romper",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle things: tocar la puerta, guardar el dinero, tirar la basura, romper un vaso.",
      items: [
        { id: "es-u41l1-tocar", type: "vocab", front: "tocar", reading: "tocar", meaning: "to touch / to play (music)", example: { jp: "El niño toca todo en la tienda.", en: "The child touches everything in the shop." }, accept: ["to feel", "to play (an instrument)"], hint: "Touch AND play an instrument: toco la puerta, toco el piano. Also \"to be someone's turn\": te toca a ti = it's your turn." },
        { id: "es-u41l1-recoger", type: "vocab", front: "recoger", reading: "recoger", meaning: "to pick up / collect", example: { jp: "Recojo a mi hijo de la escuela.", en: "I pick my son up from school." }, accept: ["to gather", "to fetch", "to tidy up"], hint: "recojo, recoges, recoge. Fetching a person or gathering things: recoger la mesa = to clear the table." },
        { id: "es-u41l1-guardar", type: "vocab", front: "guardar", reading: "guardar", meaning: "to keep / put away", example: { jp: "Guardo el dinero en el banco.", en: "I keep my money in the bank." }, accept: ["to store", "to save", "to hold on to"], hint: "Keep or store: guardar la ropa en el armario. Also guardar un secreto = to keep a secret." },
        { id: "es-u41l1-tirar", type: "vocab", front: "tirar", reading: "tirar", meaning: "to throw / throw away", example: { jp: "Voy a tirar esta ropa vieja.", en: "I'm going to throw out these old clothes." }, accept: ["to throw out", "to pull", "to drop"], hint: "Throw or bin something. On a door, tirar = pull (empujar = push). Tirar la comida = to waste food." },
        { id: "es-u41l1-romper", type: "vocab", front: "romper", reading: "romper", meaning: "to break", example: { jp: "El niño rompió el vaso.", en: "The child broke the glass." }, accept: ["to smash", "to tear", "to break up"], hint: "Its past participle is irregular: roto (u43) = broken. Romper con alguien = to break up with someone." },
        { id: "es-u41l1-mover", type: "vocab", front: "mover", reading: "mover", meaning: "to move (something)", example: { jp: "No puedo mover esta mesa.", en: "I can't move this table." }, accept: ["to shift"], hint: "muevo, mueves, mueve (o→ue). Moving an object. For moving house, Spanish uses mudarse. Reflexive moverse = to move oneself." },
      ],
    },
    {
      id: "es-u41l2",
      unit: 41,
      lesson: 2,
      title: "Pedir, gastar, ahorrar",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Deal with money and requests: pedir la cuenta, gastar dinero, ahorrar para un coche, prestar algo.",
      items: [
        { id: "es-u41l2-pedir", type: "vocab", front: "pedir", reading: "pedir", meaning: "to ask for / order", example: { jp: "Pido la cuenta, por favor.", en: "The bill, please." }, accept: ["to request", "to order"], hint: "pido, pides, pide (e→i). pedir asks FOR a thing (pido un café); preguntar (u40) asks a question. Don't mix them." },
        { id: "es-u41l2-gastar", type: "vocab", front: "gastar", reading: "gastar", meaning: "to spend (money)", example: { jp: "Gasto mucho dinero en ropa.", en: "I spend a lot of money on clothes." }, accept: ["to use up", "to waste"], hint: "gastar is spending MONEY; pasar (u40) is spending TIME. Gastar en + what you spend it on." },
        { id: "es-u41l2-ahorrar", type: "vocab", front: "ahorrar", reading: "ahorrar", meaning: "to save (up)", example: { jp: "Quiero ahorrar para un coche.", en: "I want to save up for a car." }, accept: ["to save money", "to put aside"], hint: "The opposite of gastar. Ahorrar para + the goal you're saving toward." },
        { id: "es-u41l2-devolver", type: "vocab", front: "devolver", reading: "devolver", meaning: "to return / give back", example: { jp: "Tengo que devolver el libro a la biblioteca.", en: "I have to return the book to the library." }, accept: ["to give back", "to take back"], hint: "devuelvo, devuelves, devuelve (o→ue). Giving a thing BACK; volver (u19) is a person coming back." },
        { id: "es-u41l2-prestar", type: "vocab", front: "prestar", reading: "prestar", meaning: "to lend", example: { jp: "¿Me prestas un bolígrafo?", en: "Can you lend me a pen?" }, accept: ["to loan"], hint: "prestar = to lend (give temporarily); pedir prestado = to borrow. Prestar atención = to pay attention." },
        { id: "es-u41l2-cobrar", type: "vocab", front: "cobrar", reading: "cobrar", meaning: "to charge / get paid", example: { jp: "Cobro el sueldo el lunes.", en: "I get paid on Monday." }, accept: ["to be paid", "to collect (money)"], hint: "The other side of pagar (u16): cobrar is receiving the money. ¿Cuánto cobras? = how much do you charge?" },
      ],
    },
    {
      id: "es-u41l3",
      unit: 41,
      lesson: 3,
      title: "Jugar, caer, andar",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the body in motion: jugar en el parque, saltar alto, caerse, andar por la ciudad.",
      items: [
        { id: "es-u41l3-jugar", type: "vocab", front: "jugar", reading: "jugar", meaning: "to play (a game)", example: { jp: "Los niños juegan en el parque.", en: "The children play in the park." }, accept: ["to play"], hint: "juego, juegas, juega — the only u→ue verb in Spanish. Playing a GAME; tocar (u41) is playing an instrument. Jugar a + a sport." },
        { id: "es-u41l3-saltar", type: "vocab", front: "saltar", reading: "saltar", meaning: "to jump", example: { jp: "El perro salta muy alto.", en: "The dog jumps very high." }, accept: ["to leap", "to skip"], hint: "Regular -ar. Saltar de la cama = to jump out of bed." },
        { id: "es-u41l3-caer", type: "vocab", front: "caer", reading: "caer", meaning: "to fall", example: { jp: "El niño se cae mucho.", en: "The child falls over a lot." }, accept: ["to fall down", "to drop"], hint: "caigo, caes, cae. Usually reflexive for people/things falling: me caí = I fell. Me cae bien = I like him/her (of a person)." },
        { id: "es-u41l3-andar", type: "vocab", front: "andar", reading: "andar", meaning: "to walk / go around", example: { jp: "Me gusta andar por la ciudad.", en: "I like walking around the city." }, accept: ["to go", "to work (a machine)"], hint: "A close friend of caminar. Also \"to work\" of a machine: el coche no anda = the car isn't running. Its past is irregular: anduve." },
        { id: "es-u41l3-empujar", type: "vocab", front: "empujar", reading: "empujar", meaning: "to push", example: { jp: "Empujo la puerta para entrar.", en: "I push the door to go in." }, accept: ["to shove"], hint: "The sign on a door: EMPUJAR (push) vs TIRAR (pull, u41). Regular -ar." },
        { id: "es-u41l3-girar", type: "vocab", front: "girar", reading: "girar", meaning: "to turn", example: { jp: "El coche gira en la esquina.", en: "The car turns at the corner." }, accept: ["to spin", "to turn around"], hint: "Turning a corner or spinning round. For directions: gira a la derecha / a la izquierda." },
      ],
    },
    {
      id: "es-u41l4",
      unit: 41,
      lesson: 4,
      title: "Acabar, durar, faltar",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about time and amounts running out: acabar el trabajo, durar dos horas, faltar dinero, sobrar comida.",
      items: [
        { id: "es-u41l4-acabar", type: "vocab", front: "acabar", reading: "acabar", meaning: "to finish / end", example: { jp: "Acabo el trabajo a las cinco.", en: "I finish work at five." }, accept: ["to end", "to complete", "to run out"], hint: "A synonym of terminar (u18). acabar de + a plain verb = to have just done: acabo de comer = I've just eaten." },
        { id: "es-u41l4-durar", type: "vocab", front: "durar", reading: "durar", meaning: "to last", example: { jp: "La reunión dura mucho tiempo.", en: "The meeting lasts a long time." }, accept: ["to go on for", "to take (time)"], hint: "How long something goes on for: la clase dura una hora. Regular -ar." },
        { id: "es-u41l4-tardar", type: "vocab", front: "tardar", reading: "tardar", meaning: "to take (time) / be late", example: { jp: "Tardo media hora en llegar.", en: "It takes me half an hour to get there." }, accept: ["to take time", "to be slow"], hint: "tardar EN + a verb = to take (so long) to do something. From tarde (u2, \"late\"): no tardes = don't be long." },
        { id: "es-u41l4-faltar", type: "vocab", front: "faltar", reading: "faltar", meaning: "to be missing / lacking", example: { jp: "Me falta dinero para el billete.", en: "I'm short of money for the ticket." }, accept: ["to be short of", "to need", "to be absent"], hint: "Works like gustar: me falta = I lack, me faltan dos = I'm two short. Faltar a clase = to miss class." },
        { id: "es-u41l4-sobrar", type: "vocab", front: "sobrar", reading: "sobrar", meaning: "to be left over", example: { jp: "Hoy sobra mucha comida.", en: "There's a lot of food left over today." }, accept: ["to be too much", "to remain"], hint: "The opposite of faltar: sobrar = to have more than enough. Las sobras = leftovers." },
        { id: "es-u41l4-ocupar", type: "vocab", front: "ocupar", reading: "ocupar", meaning: "to take up / occupy", example: { jp: "El coche ocupa toda la calle.", en: "The car takes up the whole street." }, accept: ["to fill", "to occupy"], hint: "Taking up space or a seat. Reflexive ocuparse de = to take care of / deal with something." },
      ],
    },
  ],
};
