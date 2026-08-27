// ES Unit 33 — La tecnología (slot: technology) — A2
// A1 gave the learner exactly one device — el móvil — and one verb for it, llamar.
// This unit is the rest of modern life: the machine on the desk, getting online,
// the words for messaging, and the small verbs (guardar, borrar, descargar) that
// a person actually uses a device to do. Many of these are near-cognates, which
// is the point — they land fast and free the learner to talk about something real.
// Examples use A1 vocab plus this unit; cognates used in examples are declared FREE.
//   FREE: internet, aplicación
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT33 = {
  id: "es-u33",
  lang: "es",
  title: "La tecnología",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "es-u33l1",
      unit: 33,
      lesson: 1,
      title: "Screens and devices",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the machines around you — el ordenador, la pantalla, el teléfono, el botón, la batería, el archivo.",
      items: [
        { id: "es-u33l1-elordenador", type: "vocab", front: "el ordenador", reading: "elordenador", meaning: "computer", example: { jp: "Trabajo con el ordenador todo el día.", en: "I work on the computer all day." }, accept: ["the computer", "PC"], hint: "Spain's word, from French ordinateur. Latin America says la computadora — both are right." },
        { id: "es-u33l1-lapantalla", type: "vocab", front: "la pantalla", reading: "lapantalla", meaning: "screen", example: { jp: "La pantalla del móvil es muy grande.", en: "The phone screen is very big." }, accept: ["the screen", "display"], hint: "A phone screen and a cinema screen are the same word — la pantalla." },
        { id: "es-u33l1-eltelefono", type: "vocab", front: "el teléfono", reading: "eltelefono", meaning: "telephone", example: { jp: "Mi teléfono no funciona hoy.", en: "My phone isn't working today." }, accept: ["the telephone", "phone"], hint: "El móvil (A1) is the one in your pocket; el teléfono is any phone, and the general word." },
        { id: "es-u33l1-elboton", type: "vocab", front: "el botón", reading: "elboton", meaning: "button", example: { jp: "El botón es pequeño.", en: "The button is small." }, accept: ["the button"], hint: "A button on a device and a button on a shirt — same word. Plural: los botones." },
        { id: "es-u33l1-labateria", type: "vocab", front: "la batería", reading: "labateria", meaning: "battery", example: { jp: "La batería del teléfono es nueva.", en: "The phone's battery is new." }, accept: ["the battery"], hint: "Also a drum kit — un músico toca la batería. Same word, two worlds." },
        { id: "es-u33l1-elarchivo", type: "vocab", front: "el archivo", reading: "elarchivo", meaning: "file", example: { jp: "Guardo el archivo en el ordenador.", en: "I save the file on the computer." }, accept: ["the file", "archive"], hint: "A computer file, and also an archive of old records — el archivo holds both." },
      ],
    },
    {
      id: "es-u33l2",
      unit: 33,
      lesson: 2,
      title: "Getting online",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle the basics of being online — la red, la página, el correo, la contraseña, el usuario, navegar.",
      items: [
        { id: "es-u33l2-lared", type: "vocab", front: "la red", reading: "lared", meaning: "network", example: { jp: "No tengo buena red aquí.", en: "I don't have a good connection here." }, accept: ["the net", "the web", "connection"], hint: "A net for fishing became the word for the internet — estar en la red is to be online." },
        { id: "es-u33l2-lapagina", type: "vocab", front: "la página", reading: "lapagina", meaning: "page", example: { jp: "Abro la página en el ordenador.", en: "I open the page on the computer." }, accept: ["the page", "webpage"], hint: "A page of a book and a web page — una página web. Plural: páginas." },
        { id: "es-u33l2-elcorreo", type: "vocab", front: "el correo", reading: "elcorreo", meaning: "email", example: { jp: "Te escribo un correo mañana.", en: "I'll write you an email tomorrow." }, accept: ["the mail", "the post", "email"], hint: "The post and email at once. To be exact: un correo electrónico is specifically email." },
        { id: "es-u33l2-lacontrasena", type: "vocab", front: "la contraseña", reading: "lacontrasena", meaning: "password", example: { jp: "Mi contraseña es muy larga.", en: "My password is very long." }, accept: ["the password"], hint: "contra + seña, a \"counter-sign\" — the secret word that gets you in." },
        { id: "es-u33l2-elusuario", type: "vocab", front: "el usuario", reading: "elusuario", meaning: "user", example: { jp: "El usuario tiene un nombre y una contraseña.", en: "The user has a name and a password." }, accept: ["the user"], hint: "From usar (A1, to use) — the one who uses the system. Feminine: la usuaria." },
        { id: "es-u33l2-navegar", type: "vocab", front: "navegar", reading: "navegar", meaning: "to browse", example: { jp: "Me gusta navegar por internet.", en: "I like browsing the internet." }, accept: ["to surf", "to navigate", "to sail"], hint: "The same verb as to sail a ship — you navigate the web. navegar por la red." },
      ],
    },
    {
      id: "es-u33l3",
      unit: 33,
      lesson: 3,
      title: "Messaging and calling",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Send and take messages — el mensaje, enviar, la llamada, el número, en línea, contactar.",
      items: [
        { id: "es-u33l3-elmensaje", type: "vocab", front: "el mensaje", reading: "elmensaje", meaning: "message", example: { jp: "Te envío un mensaje ahora.", en: "I'll send you a message now." }, accept: ["the message", "text"], hint: "A text or any message. Masculine like el tema, el problema: el mensaje." },
        { id: "es-u33l3-enviar", type: "vocab", front: "enviar", reading: "enviar", meaning: "to send", example: { jp: "Voy a enviar las fotos a mi madre.", en: "I'm going to send the photos to my mother." }, accept: ["to send off", "to dispatch"], hint: "A little more formal than mandar; both mean to send." },
        { id: "es-u33l3-lallamada", type: "vocab", front: "la llamada", reading: "lallamada", meaning: "call", example: { jp: "Tengo una llamada importante.", en: "I have an important call." }, accept: ["the call", "phone call"], hint: "The noun from llamar (A1, to call). Una llamada perdida is a missed call." },
        { id: "es-u33l3-elnumero", type: "vocab", front: "el número", reading: "elnumero", meaning: "number", example: { jp: "¿Cuál es tu número de teléfono?", en: "What's your phone number?" }, accept: ["the number", "figure"], hint: "A phone number, a house number, any number. From it: el número is also \"an issue\" of a magazine." },
        { id: "es-u33l3-enlinea", type: "vocab", front: "en línea", reading: "enlinea", meaning: "online", example: { jp: "Compro los billetes en línea.", en: "I buy the tickets online." }, accept: ["on line", "on the internet"], hint: "Literally \"in line\" = connected. Estoy en línea = I'm online." },
        { id: "es-u33l3-contactar", type: "vocab", front: "contactar", reading: "contactar", meaning: "to contact", example: { jp: "Voy a contactar con el hotel.", en: "I'm going to contact the hotel." }, accept: ["to get in touch", "to reach"], hint: "contactar con alguien — get in touch with someone. The noun is el contacto." },
      ],
    },
    {
      id: "es-u33l4",
      unit: 33,
      lesson: 4,
      title: "Making it work",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do things with a device — funcionar, conectar, guardar, borrar, descargar, la señal.",
      items: [
        { id: "es-u33l4-conectar", type: "vocab", front: "conectar", reading: "conectar", meaning: "to connect", example: { jp: "No puedo conectar el ordenador a la red.", en: "I can't connect the computer to the network." }, accept: ["to link", "to plug in"], hint: "Reflexive it means to log on: me conecto a internet." },
        { id: "es-u33l4-guardar", type: "vocab", front: "guardar", reading: "guardar", meaning: "to save", example: { jp: "Guardo las fotos en el móvil.", en: "I save the photos on my phone." }, accept: ["to keep", "to store", "to put away"], hint: "To save a file, and to keep anything safe — guardar un secreto, to keep a secret." },
        { id: "es-u33l4-borrar", type: "vocab", front: "borrar", reading: "borrar", meaning: "to delete", example: { jp: "Voy a borrar este mensaje.", en: "I'm going to delete this message." }, accept: ["to erase", "to rub out"], hint: "The opposite of guardar for files. Also to rub something out with una goma." },
        { id: "es-u33l4-descargar", type: "vocab", front: "descargar", reading: "descargar", meaning: "to download", example: { jp: "Descargo la aplicación en el teléfono.", en: "I download the app onto the phone." }, accept: ["to unload"], hint: "des- + cargar (to load): to un-load onto your device. The opposite, subir, is to upload." },
        { id: "es-u33l4-lasenal", type: "vocab", front: "la señal", reading: "lasenal", meaning: "signal", example: { jp: "No hay señal en el tren.", en: "There's no signal on the train." }, accept: ["the signal", "sign"], hint: "Phone signal, and any sign or signal. Sin señal = no reception." },
      ],
    },
  ],
};
