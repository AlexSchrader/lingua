// ES Unit 40 — Verbos de acción · 1 ("Action verbs 1") — A2 COVERAGE (slot: coverage-a2-1)
// Strand D, the frequency-fill pass. A1 taught the survival verbs; A2 coverage adds
// the next tier of everyday verbs that show up in almost any conversation. Verbs are
// headworded in the infinitive (A1 convention, es/unit13.js); the useful conjugated
// forms live in the examples and hints.
//
// Conventions: see es/unit36.js. BLOCK-3 SCOPE: examples use only the A1 corpus
// (u1–u20) plus fronts this block teaches at or before this unit. FREE: proper
// names María, Pablo, Ana, Madrid; cognate el problema.
export const ES_UNIT40 = {
  id: "es-u40",
  lang: "es",
  title: "Verbos de acción · 1",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "es-u40l1",
      unit: 40,
      lesson: 1,
      title: "Pasar, quedarse, seguir",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about moving through and staying: pasar por el centro, quedarse en casa, seguir el camino.",
      items: [
        { id: "es-u40l1-pasar", type: "vocab", front: "pasar", reading: "pasar", meaning: "to pass / to happen", example: { jp: "¿Qué pasa? No pasa nada.", en: "What's happening? Nothing's happening." }, accept: ["to happen", "to spend (time)", "to come in", "to go through"], hint: "A workhorse: pasar por (go past/through), pasar tiempo (spend time), and ¿qué pasa? = what's up? / what's wrong?" },
        { id: "es-u40l1-quedarse", type: "vocab", front: "quedarse", reading: "quedarse", meaning: "to stay", example: { jp: "Hoy me quedo en casa.", en: "Today I'm staying home." }, accept: ["to remain", "to stay behind"], hint: "Reflexive: me quedo, te quedas, se queda. Plain quedar means \"to arrange to meet\": quedamos a las cinco = let's meet at five." },
        { id: "es-u40l1-seguir", type: "vocab", front: "seguir", reading: "seguir", meaning: "to follow / to keep on", example: { jp: "Sigo el mismo camino todos los días.", en: "I follow the same road every day." }, accept: ["to continue", "to go on"], hint: "sigo, sigues, sigue. seguir + a verb in -ando/-iendo means \"keep on doing\": sigo trabajando = I keep working." },
        { id: "es-u40l1-parar", type: "vocab", front: "parar", reading: "parar", meaning: "to stop", example: { jp: "El autobús para en la esquina.", en: "The bus stops at the corner." }, accept: ["to halt", "to pull up"], hint: "The bus-stop verb — la parada (u17) comes from it. Reflexive pararse = to come to a stop / to stand up (in Latin America)." },
        { id: "es-u40l1-entrar", type: "vocab", front: "entrar", reading: "entrar", meaning: "to go in / enter", example: { jp: "Entro en la tienda para comprar pan.", en: "I go into the shop to buy bread." }, accept: ["to enter", "to come in"], hint: "entrar en (Spain) or entrar a (Latin America) + a place. The opposite of salir (u17)." },
        { id: "es-u40l1-regresar", type: "vocab", front: "regresar", reading: "regresar", meaning: "to return / go back", example: { jp: "Regreso a casa a las seis.", en: "I get back home at six." }, accept: ["to come back", "to go back", "to return"], hint: "A clear synonym of volver (u19); regresar is very common in Latin America. Regreso pronto = I'll be back soon." },
      ],
    },
    {
      id: "es-u40l2",
      unit: 40,
      lesson: 2,
      title: "Mirar, oír, sentir",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the senses: mirar la calle, oír música, sentir frío, encontrar las llaves.",
      items: [
        { id: "es-u40l2-mirar", type: "vocab", front: "mirar", reading: "mirar", meaning: "to look / watch", example: { jp: "Miro por la ventana.", en: "I look out of the window." }, accept: ["to look at", "to watch"], hint: "mirar is looking on purpose; ver (u13) is just seeing. In Spain mirar la tele, in much of Latin America ver la tele." },
        { id: "es-u40l2-oir", type: "vocab", front: "oír", reading: "oir", meaning: "to hear", example: { jp: "No oigo bien la música.", en: "I can't hear the music well." }, accept: ["to hear"], hint: "oigo, oyes, oye. Hearing (oír) is passive; listening on purpose is escuchar (u19). ¡Oye! = Hey! / Listen!" },
        { id: "es-u40l2-notar", type: "vocab", front: "notar", reading: "notar", meaning: "to notice", example: { jp: "Noto que hoy estás cansado.", en: "I notice you're tired today." }, accept: ["to note", "to sense", "to tell"], hint: "For sensing a change or a mood: noto que… = I can tell that… Reflexive se nota = it shows." },
        { id: "es-u40l2-sentir", type: "vocab", front: "sentir", reading: "sentir", meaning: "to feel", example: { jp: "Siento mucho frío.", en: "I feel very cold." }, accept: ["to be sorry", "to sense"], hint: "siento, sientes, siente. Lo siento (u2) is literally \"I feel it\" = I'm sorry. Reflexive me siento bien = I feel well." },
        { id: "es-u40l2-encontrar", type: "vocab", front: "encontrar", reading: "encontrar", meaning: "to find", example: { jp: "No encuentro las llaves.", en: "I can't find the keys." }, accept: ["to come across", "to meet"], hint: "encuentro, encuentras, encuentra (o→ue). Reflexive encontrarse con = to run into someone; encontrarse bien = to feel well." },
        { id: "es-u40l2-conocer", type: "vocab", front: "conocer", reading: "conocer", meaning: "to know (a person / place)", example: { jp: "Conozco muy bien esta ciudad.", en: "I know this city very well." }, accept: ["to be familiar with", "to meet"], hint: "conozco, conoces, conoce. This is knowing a PERSON or PLACE; knowing a fact is saber (u36). Note the a before a person: conozco a María." },
      ],
    },
    {
      id: "es-u40l3",
      unit: 40,
      lesson: 3,
      title: "Explicar, preguntar, contar",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle information: explicar la lección, preguntar la hora, contar algo, mostrar el camino.",
      items: [
        { id: "es-u40l3-explicar", type: "vocab", front: "explicar", reading: "explicar", meaning: "to explain", example: { jp: "El profesor explica la lección.", en: "The teacher explains the lesson." }, accept: ["to make clear"], hint: "explico, explicas, explica. ¿Me lo explicas? = Can you explain it to me?" },
        { id: "es-u40l3-preguntar", type: "vocab", front: "preguntar", reading: "preguntar", meaning: "to ask (a question)", example: { jp: "Voy a preguntar la hora.", en: "I'm going to ask the time." }, accept: ["to ask", "to inquire"], hint: "preguntar = ask a question; pedir (u41) = ask FOR a thing. La pregunta (u18) is the noun. Don't confuse with pedir." },
        { id: "es-u40l3-recibir", type: "vocab", front: "recibir", reading: "recibir", meaning: "to receive", example: { jp: "Recibo dinero de mis padres.", en: "I get money from my parents." }, accept: ["to get"], hint: "recibo, recibes, recibe. A regular -ir verb. Recibir a alguien also means to welcome someone." },
        { id: "es-u40l3-contar", type: "vocab", front: "contar", reading: "contar", meaning: "to tell / to count", example: { jp: "Mi abuela me cuenta muchas cosas.", en: "My grandmother tells me lots of things." }, accept: ["to count", "to recount", "to narrate"], hint: "cuento, cuentas, cuenta (o→ue). Two jobs: tell a story AND count numbers. Contar con = to count on / rely on." },
        { id: "es-u40l3-mostrar", type: "vocab", front: "mostrar", reading: "mostrar", meaning: "to show", example: { jp: "Te muestro el camino a la estación.", en: "I'll show you the way to the station." }, accept: ["to display", "to point out"], hint: "muestro, muestras, muestra (o→ue). A more formal enseñar (u18), which also means \"to show\"." },
        { id: "es-u40l3-ofrecer", type: "vocab", front: "ofrecer", reading: "ofrecer", meaning: "to offer", example: { jp: "La tienda ofrece buenos precios.", en: "The shop offers good prices." }, accept: ["to give", "to provide"], hint: "ofrezco, ofreces, ofrece. Like conocer, the yo form adds a z: ofrezco." },
      ],
    },
    {
      id: "es-u40l4",
      unit: 40,
      lesson: 4,
      title: "Intentar, conseguir, cambiar",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about trying and change: intentar hablar, conseguir trabajo, ganar dinero, perder las llaves.",
      items: [
        { id: "es-u40l4-intentar", type: "vocab", front: "intentar", reading: "intentar", meaning: "to try", example: { jp: "Intento hablar español todos los días.", en: "I try to speak Spanish every day." }, accept: ["to attempt", "to try to"], hint: "intento, intentas, intenta + a plain verb. A close friend of tratar de (u50): intento comer = trato de comer." },
        { id: "es-u40l4-conseguir", type: "vocab", front: "conseguir", reading: "conseguir", meaning: "to get / manage to", example: { jp: "Este año conseguí un buen trabajo.", en: "This year I got a good job." }, accept: ["to obtain", "to achieve", "to succeed in"], hint: "consigo, consigues, consigue (like seguir, u40). conseguir + a plain verb = to manage to do: conseguí dormir = I managed to sleep." },
        { id: "es-u40l4-ganar", type: "vocab", front: "ganar", reading: "ganar", meaning: "to win / earn", example: { jp: "Mi hermano gana mucho dinero.", en: "My brother earns a lot of money." }, accept: ["to earn", "to gain", "to beat"], hint: "One verb for winning a game AND earning money. Ganar a alguien = to beat someone." },
        { id: "es-u40l4-perder", type: "vocab", front: "perder", reading: "perder", meaning: "to lose / miss", example: { jp: "Siempre pierdo las llaves.", en: "I always lose my keys." }, accept: ["to miss", "to waste"], hint: "pierdo, pierdes, pierde (e→ie). Also \"to miss\" a bus or train: perder el tren. Perder el tiempo = to waste time." },
        { id: "es-u40l4-cambiar", type: "vocab", front: "cambiar", reading: "cambiar", meaning: "to change", example: { jp: "Quiero cambiar de trabajo.", en: "I want to change jobs." }, accept: ["to swap", "to exchange"], hint: "The verb behind el cambio (u16, \"change/coins\"). cambiar de + noun = to change one's…: cambiar de casa, cambiar de idea." },
        { id: "es-u40l4-ocurrir", type: "vocab", front: "ocurrir", reading: "ocurrir", meaning: "to happen / occur", example: { jp: "¿Qué te ocurre? Pareces cansado.", en: "What's wrong with you? You look tired." }, accept: ["to occur", "to take place"], hint: "A more formal pasar (u40). ¿Qué ocurre? = what's happening? Se me ocurre una idea = an idea occurs to me." },
      ],
    },
  ],
};
