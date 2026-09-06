// ES Unit 35 — La cultura y el ocio (slot: culture) — A2
// The last thematic unit of the block, and the one that lets a learner talk about
// what they do for pleasure: the arts, going out, stories, and free time. A1's
// leisure vocabulary was almost nothing (el cine, el libro) — this fills it in.
// Grammar note: nearly every example runs on gustar and the A1 present tense, so
// the unit doubles as recall practice for them. Cognate fronts (música, arte,
// concierto…) are taught here; other cognates used in examples are declared FREE.
//   FREE: favorito, famoso, interesante, moderno, clásico, España
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT35 = {
  id: "es-u35",
  lang: "es",
  title: "La cultura y el ocio",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "es-u35l1",
      unit: 35,
      lesson: 1,
      title: "The arts",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the arts you enjoy — la cultura, el arte, la música, la película, la canción, el grupo.",
      items: [
        { id: "es-u35l1-lacultura", type: "vocab", front: "la cultura", reading: "lacultura", meaning: "culture", example: { jp: "Me gusta la cultura de España.", en: "I like the culture of Spain." }, drill: { jp: "La cultura de España es antigua", en: "Spain's culture is ancient" }, accept: ["the culture"], hint: "Both \"the arts\" and a people's way of life. Una persona culta is well-read." },
        { id: "es-u35l1-lamusica", type: "vocab", front: "la música", reading: "lamusica", meaning: "music", example: { jp: "Escucho música en el tren.", en: "I listen to music on the train." }, drill: { jp: "La música del grupo es buena", en: "The group's music is good" }, accept: ["the music"], hint: "The musician is el músico — same word, the stress just moves." },
        { id: "es-u35l1-lapelicula", type: "vocab", front: "la película", reading: "lapelicula", meaning: "film", example: { jp: "Vemos una película en el cine.", en: "We watch a film at the cinema." }, drill: { jp: "La película es muy larga", en: "The film is very long" }, accept: ["the film", "the movie", "movie"], hint: "The everyday short form is la peli. Also a thin \"film\" or layer of something." },
        { id: "es-u35l1-lacancion", type: "vocab", front: "la canción", reading: "lacancion", meaning: "song", example: { jp: "Es mi canción favorita.", en: "It's my favourite song." }, drill: { jp: "La canción es de mi grupo favorito", en: "The song is by my favourite group" }, accept: ["the song"], hint: "From cantar, to sing. Plural drops the accent: canción → canciones." },
        { id: "es-u35l1-elgrupo", type: "vocab", front: "el grupo", reading: "elgrupo", meaning: "group", example: { jp: "Mi grupo favorito toca esta noche.", en: "My favourite band is playing tonight." }, drill: { jp: "El grupo toca en el concierto", en: "The group is playing at the concert" }, accept: ["the group", "band"], hint: "A music band and any group of people — un grupo de amigos." },
        { id: "es-u35l1-laobra", type: "vocab", front: "la obra", reading: "laobra", meaning: "the work / the play", example: { jp: "Esta obra está en el museo desde hace años.", en: "This work has been in the museum for years." }, accept: ["the work", "the work of art", "the play"], hint: "Any made work: una obra de arte, una obra de teatro. En obras = under construction." },
      ],
    },
    {
      id: "es-u35l2",
      unit: 35,
      lesson: 2,
      title: "Going out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Make plans to go out — el concierto, la fiesta, la entrada, bailar, cantar, tocar.",
      items: [
        { id: "es-u35l2-elconcierto", type: "vocab", front: "el concierto", reading: "elconcierto", meaning: "concert", example: { jp: "El concierto empieza a las ocho.", en: "The concert starts at eight." }, drill: { jp: "El concierto es el sábado", en: "The concert is on Saturday" }, accept: ["the concert", "gig"], hint: "A straight cognate. Ir a un concierto — to go to a concert." },
        { id: "es-u35l2-lafiesta", type: "vocab", front: "la fiesta", reading: "lafiesta", meaning: "party", example: { jp: "Hay una fiesta en casa de mi amigo.", en: "There's a party at my friend's house." }, drill: { jp: "La fiesta es en mi casa", en: "The party is at my house" }, accept: ["the party", "celebration", "festival"], hint: "A party and a public holiday both — un día de fiesta is a day off." },
        { id: "es-u35l2-laentrada", type: "vocab", front: "la entrada", reading: "laentrada", meaning: "ticket", example: { jp: "Compro dos entradas para el concierto.", en: "I'm buying two tickets for the concert." }, drill: { jp: "La entrada del concierto es cara", en: "The concert ticket is expensive" }, accept: ["the ticket", "entrance", "admission"], hint: "The way in (from entrar) — and so the ticket that lets you in. El billete (A1) is for travel; la entrada for events." },
        { id: "es-u35l2-bailar", type: "vocab", front: "bailar", reading: "bailar", meaning: "to dance", example: { jp: "Me gusta bailar en las fiestas.", en: "I like dancing at parties." }, drill: { jp: "Quiero bailar en la fiesta", en: "I want to dance at the party" }, accept: ["to dance"], hint: "The dance itself is el baile." },
        { id: "es-u35l2-cantar", type: "vocab", front: "cantar", reading: "cantar", meaning: "to sing", example: { jp: "Canta muy bien en el grupo.", en: "She sings very well in the band." }, drill: { jp: "Quiero cantar una canción", en: "I want to sing a song" }, accept: ["to sing"], hint: "A singer is un cantante; la canción comes from here too." },
        { id: "es-u35l2-tocar", type: "vocab", front: "tocar", reading: "tocar", meaning: "to play (an instrument)", example: { jp: "Toca en un grupo de música.", en: "He plays in a band." }, drill: { jp: "Quiero tocar en el grupo", en: "I want to play in the group" }, accept: ["to touch", "to play"], hint: "To play an instrument, and to touch. A game is jugar (block 1) — Spanish splits what English joins into \"play\"." },
      ],
    },
    {
      id: "es-u35l3",
      unit: 35,
      lesson: 3,
      title: "Stories and books",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what you read — la historia, la novela, el autor, el personaje, contar, el cuento.",
      items: [
        { id: "es-u35l3-lanovela", type: "vocab", front: "la novela", reading: "lanovela", meaning: "novel", example: { jp: "Leo una novela muy larga.", en: "I'm reading a very long novel." }, drill: { jp: "La novela es muy larga", en: "The novel is very long" }, accept: ["the novel"], hint: "A novel; a TV soap opera is una telenovela." },
        { id: "es-u35l3-elautor", type: "vocab", front: "el autor", reading: "elautor", meaning: "author", example: { jp: "El autor de este libro es español.", en: "The author of this book is Spanish." }, drill: { jp: "El autor de la novela es español", en: "The novel's author is Spanish" }, accept: ["the author", "writer"], hint: "Feminine: la autora. The related word la autoridad is authority." },
        { id: "es-u35l3-elpersonaje", type: "vocab", front: "el personaje", reading: "elpersonaje", meaning: "character (in a story)", example: { jp: "Es un personaje muy interesante.", en: "It's a very interesting character." }, drill: { jp: "El personaje del cuento es un niño", en: "The character in the tale is a boy" }, accept: ["the character", "figure"], hint: "A character in a story — not personal character, which is el carácter (u31)." },
        { id: "es-u35l3-contar", type: "vocab", front: "contar", reading: "contar", meaning: "to tell", example: { jp: "Mi abuela cuenta buenas historias.", en: "My grandmother tells good stories." }, drill: { jp: "Quiero contar un cuento", en: "I want to tell a tale" }, accept: ["to count", "to recount"], hint: "To tell a story and to count numbers — same verb. Contar con alguien = to count on someone." },
        { id: "es-u35l3-elcuento", type: "vocab", front: "el cuento", reading: "elcuento", meaning: "tale", example: { jp: "Leo un cuento a mi hija.", en: "I read a story to my daughter." }, drill: { jp: "El cuento es para los niños", en: "The tale is for children" }, accept: ["the tale", "short story", "story"], hint: "A short made-up story, often for children — un cuento de hadas is a fairy tale. From contar." },
        { id: "es-u35l3-elcapitulo", type: "vocab", front: "el capítulo", reading: "elcapitulo", meaning: "the chapter", example: { jp: "Este capítulo es el más largo del libro.", en: "This chapter is the longest in the book." }, drill: { jp: "El capítulo es muy largo", en: "The chapter is very long" }, accept: ["the chapter", "the episode"], hint: "Of a book or a series: el capítulo tres, el último capítulo." },
      ],
    },
    {
      id: "es-u35l4",
      unit: 35,
      lesson: 4,
      title: "Free time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about leisure and hobbies — el ocio, el pasatiempo, el juego, divertirse, disfrutar, la afición.",
      items: [
        { id: "es-u35l4-elocio", type: "vocab", front: "el ocio", reading: "elocio", meaning: "leisure", example: { jp: "En mi tiempo de ocio leo libros.", en: "In my leisure time I read books." }, drill: { jp: "El ocio es importante para la salud", en: "Leisure is important for your health" }, accept: ["free time", "spare time"], hint: "Leisure as a concept — el tiempo de ocio, leisure time. The opposite of work." },
        { id: "es-u35l4-elpasatiempo", type: "vocab", front: "el pasatiempo", reading: "elpasatiempo", meaning: "hobby", example: { jp: "Mi pasatiempo favorito es cocinar.", en: "My favourite hobby is cooking." }, drill: { jp: "El pasatiempo de mi hijo es la música", en: "My son's hobby is music" }, accept: ["the pastime", "hobby"], hint: "pasa + tiempo — literally \"pass-time\", exactly the English pastime." },
        { id: "es-u35l4-eljuego", type: "vocab", front: "el juego", reading: "eljuego", meaning: "game", example: { jp: "Es un juego para toda la familia.", en: "It's a game for the whole family." }, drill: { jp: "El juego es para dos personas", en: "The game is for two people" }, accept: ["the game"], hint: "The noun beside jugar (block 1, to play). Los Juegos Olímpicos — the Olympic Games." },
        { id: "es-u35l4-divertirse", type: "vocab", front: "divertirse", reading: "divertirse", meaning: "to have fun", example: { jp: "Me divierto mucho con mis amigos.", en: "I have a lot of fun with my friends." }, drill: { jp: "Divertirse con los amigos es fácil", en: "Having fun with friends is easy" }, accept: ["to enjoy yourself", "to have a good time"], hint: "¡Que te diviertas! = Have fun! From it: divertido, fun or funny." },
        { id: "es-u35l4-disfrutar", type: "vocab", front: "disfrutar", reading: "disfrutar", meaning: "to enjoy", example: { jp: "Disfruto de un buen libro.", en: "I enjoy a good book." }, drill: { jp: "Quiero disfrutar del verano", en: "I want to enjoy the summer" }, accept: ["to enjoy"], hint: "disfrutar de algo — to enjoy something. Close to gustar, but here YOU do the enjoying." },
        { id: "es-u35l4-laaficion", type: "vocab", front: "la afición", reading: "laaficion", meaning: "hobby", example: { jp: "Mi afición es la música.", en: "My hobby is music." }, drill: { jp: "La afición de mi padre es el cine", en: "My father's hobby is the cinema" }, accept: ["the hobby", "interest", "passion"], hint: "A hobby you're keen on. Un aficionado is a fan — of a sport or a band." },
      ],
    },
  ],
};
