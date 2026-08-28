// ES Unit 64 — Los medios de comunicación (slot: media) — B1
// First unit of block 2. B1 changes three things (BUILD-BRIEF-language-blueprint
// §"B1 and B2"): topics are abstract, the canDo names a discourse move, and — the
// one visible on every card — EXAMPLES ARE TWO CLAUSES joined by the connective
// being practised. The sentence is the lesson, not decoration around a word.
//
// SCOPE BOUNDARY: block 1's Unit 55 is "news and society", so this unit takes
// media as a CRAFT and an INDUSTRY (how a story is made, broadcast and judged) and
// leaves news-as-current-affairs to 55. A2 already owns the everyday nouns — la
// noticia, el periódico, la revista, informar (u32); la película, la música, el
// autor, el personaje (u35); el cine, el libro (A1). Every front is genuinely a
// level up. Cognates used in examples are declared FREE.
//   FREE: importante, interesante, famoso
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT64 = {
  id: "es-u64",
  lang: "es",
  title: "Los medios de comunicación",
  order: 64,
  stage: "b1",
  lessons: [
    {
      id: "es-u64l1",
      unit: 64,
      lesson: 1,
      title: "The press",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about where a story comes from — la prensa, el titular, el reportaje, la investigación, la fuente, el redactor.",
      items: [
        { id: "es-u64l1-lainvestigacion", type: "vocab", front: "la investigación", reading: "lainvestigacion", meaning: "the investigation", example: { jp: "La investigación duró dos años, así que casi todos habían olvidado el caso.", en: "The investigation lasted two years, so almost everyone had forgotten the case." }, accept: ["investigation", "inquiry", "research"], hint: "Both a journalistic or police investigation and scientific research — la investigación científica." },
        { id: "es-u64l1-elredactor", type: "vocab", front: "el redactor", reading: "elredactor", meaning: "the editor", example: { jp: "El redactor leyó mi artículo y luego me pidió que lo cambiara entero.", en: "The editor read my article and then asked me to change it completely." }, accept: ["editor", "the sub-editor", "writer"], hint: "From redactar, to draft. The one in charge is el redactor jefe." },
        { id: "es-u64l1-elcorresponsal", type: "vocab", front: "el corresponsal", reading: "elcorresponsal", meaning: "the correspondent", example: { jp: "El periódico tiene un corresponsal en México desde hace años.", en: "The newspaper has had a correspondent in Mexico for years." }, accept: ["the correspondent", "the foreign reporter"], hint: "A journalist posted somewhere to report from there: corresponsal de guerra, corresponsal en Roma." },
        { id: "es-u64l1-laportada", type: "vocab", front: "la portada", reading: "laportada", meaning: "the front page / cover", example: { jp: "La noticia salió en la portada de todos los periódicos.", en: "The story ran on the front page of every newspaper." }, accept: ["the front page", "the cover"], hint: "Front page of a paper, cover of a book or a record. Salir en portada = to make the front page." },
        { id: "es-u64l1-laredaccion", type: "vocab", front: "la redacción", reading: "laredaccion", meaning: "the newsroom / editorial team", example: { jp: "En la redacción trabajan más de cincuenta personas.", en: "More than fifty people work in the newsroom." }, accept: ["the newsroom", "the editorial team", "the writing"], hint: "Both the room and the people in it. At school it is also an essay." },
        { id: "es-u64l1-verificar", type: "vocab", front: "verificar", reading: "verificar", meaning: "to verify / fact-check", example: { jp: "Antes de publicar hay que verificar todos los datos.", en: "Before publishing you have to verify all the facts." }, accept: ["to verify", "to check", "to fact-check"], hint: "The standard word in journalism: verificar una fuente antes de publicar." },
      ],
    },
    {
      id: "es-u64l2",
      unit: 64,
      lesson: 2,
      title: "Broadcast",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how something reaches an audience — el canal, emitir, en directo, el espectador, el oyente, la suscripción.",
      items: [
        { id: "es-u64l2-elcanal", type: "vocab", front: "el canal", reading: "elcanal", meaning: "the channel", example: { jp: "Este canal pone sobre todo películas, mientras que el otro pone sobre todo deporte.", en: "This channel mostly shows films, whereas the other mostly shows sport." }, accept: ["channel", "the network", "canal"], hint: "A TV channel and a water canal — el Canal de Panamá. Same word." },
        { id: "es-u64l2-emitir", type: "vocab", front: "emitir", reading: "emitir", meaning: "to broadcast", example: { jp: "Van a emitir el concierto el sábado, para que todos puedan verlo en casa.", en: "They're going to broadcast the concert on Saturday, so that everyone can watch it at home." }, accept: ["to air", "to show", "to transmit"], hint: "Note the subjunctive after para que: para que puedan, not \"para que pueden\"." },
        { id: "es-u64l2-endirecto", type: "vocab", front: "en directo", reading: "endirecto", meaning: "live", example: { jp: "El programa es en directo, así que todo el mundo lo ve al mismo tiempo.", en: "The programme is live, so everyone watches it at the same time." }, accept: ["live", "live broadcast", "on air"], hint: "en directo = live; the opposite is en diferido, recorded earlier." },
        { id: "es-u64l2-elespectador", type: "vocab", front: "el espectador", reading: "elespectador", meaning: "the viewer", example: { jp: "A los espectadores les gustó el final, aunque los críticos lo encontraron demasiado simple.", en: "Viewers liked the ending, although the critics found it too simple." }, accept: ["viewer", "the spectator", "audience member"] },
        { id: "es-u64l2-eloyente", type: "vocab", front: "el oyente", reading: "eloyente", meaning: "the listener", example: { jp: "Los oyentes pueden llamar durante el programa, de modo que participan en directo.", en: "Listeners can call in during the programme, so they take part live." }, accept: ["listener", "the radio listener"], hint: "From oír, to hear — the radio twin of el espectador." },
        { id: "es-u64l2-lasuscripcion", type: "vocab", front: "la suscripción", reading: "lasuscripcion", meaning: "the subscription", example: { jp: "Pagué una suscripción al periódico, ya que lo leía todos los días.", en: "I paid for a subscription to the newspaper, since I was reading it every day." }, accept: ["subscription", "membership"], hint: "The verb is suscribirse a algo." },
      ],
    },
    {
      id: "es-u64l3",
      unit: 64,
      lesson: 3,
      title: "Behind a story",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a film or book is made — el guion, el director, la trama, el escritor, el rodaje, el estreno.",
      items: [
        { id: "es-u64l3-elguion", type: "vocab", front: "el guion", reading: "elguion", meaning: "the script", example: { jp: "El guion es muy bueno, pero la película no tuvo éxito en el cine.", en: "The script is very good, but the film wasn't a success in cinemas." }, accept: ["script", "screenplay"], hint: "The person who writes it is el guionista. Modern spelling drops the accent: guion." },
        { id: "es-u64l3-eldirector", type: "vocab", front: "el director", reading: "eldirector", meaning: "the director", example: { jp: "Este director trabaja despacio, así que sus películas salen muy de vez en cuando.", en: "This director works slowly, so his films come out very rarely." }, accept: ["director", "the film-maker", "manager"], hint: "A film director and the head of a company are the same word. Feminine: la directora." },
        { id: "es-u64l3-latrama", type: "vocab", front: "la trama", reading: "latrama", meaning: "the plot", example: { jp: "La trama es complicada al principio, pero al final todo queda claro.", en: "The plot is complicated at the start, but by the end everything is clear." }, accept: ["plot", "the storyline"], hint: "The plot of a story, and also a plot in the sense of a scheme." },
        { id: "es-u64l3-elescritor", type: "vocab", front: "el escritor", reading: "elescritor", meaning: "the writer", example: { jp: "Este escritor ha publicado diez libros, y sin embargo poca gente conoce su nombre.", en: "This writer has published ten books, and yet few people know his name." }, accept: ["writer", "author"], hint: "From escribir (A1). Feminine: la escritora. El autor (u35) is more about a specific work." },
        { id: "es-u64l3-elrodaje", type: "vocab", front: "el rodaje", reading: "elrodaje", meaning: "the filming", example: { jp: "El rodaje duró seis meses, mientras que la película dura solo dos horas.", en: "The filming lasted six months, whereas the film lasts only two hours." }, accept: ["shooting", "the shoot"], hint: "From rodar, to film (literally \"to roll\", from the old reels)." },
        { id: "es-u64l3-elestreno", type: "vocab", front: "el estreno", reading: "elestreno", meaning: "the premiere", example: { jp: "El estreno fue anoche, de modo que hoy ya hay muchas críticas.", en: "The premiere was last night, so there are already lots of reviews today." }, accept: ["premiere", "the release", "opening"], hint: "The verb estrenar also means to use or wear something for the first time — estrenar zapatos." },
      ],
    },
    {
      id: "es-u64l4",
      unit: 64,
      lesson: 4,
      title: "Judging it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "React to what you've seen or read — la crítica, el premio, la audiencia, la publicidad, la encuesta, el entretenimiento.",
      items: [
        { id: "es-u64l4-lacritica", type: "vocab", front: "la crítica", reading: "lacritica", meaning: "the review", example: { jp: "Leí la crítica antes de ver la película, lo cual no fue muy buena idea.", en: "I read the review before seeing the film, which wasn't a very good idea." }, accept: ["review", "criticism", "the critic"], hint: "La crítica is the review; el crítico is the person who writes it." },
        { id: "es-u64l4-elpremio", type: "vocab", front: "el premio", reading: "elpremio", meaning: "the award", example: { jp: "La película ganó un premio importante, aunque a mucha gente no le gustó.", en: "The film won a major award, although a lot of people didn't like it." }, accept: ["prize", "the award"], hint: "A prize you win. El premio gordo is the jackpot; ganar un premio, to win an award." },
        { id: "es-u64l4-laaudiencia", type: "vocab", front: "la audiencia", reading: "laaudiencia", meaning: "the audience", example: { jp: "La audiencia del programa bajó este año, así que van a cambiarlo.", en: "The programme's audience fell this year, so they're going to change it." }, accept: ["audience", "the ratings", "viewers"], hint: "The viewing figures of a show. In a court, also a hearing." },
        { id: "es-u64l4-lapublicidad", type: "vocab", front: "la publicidad", reading: "lapublicidad", meaning: "the advertising", example: { jp: "Hay demasiada publicidad durante el programa, así que cambio de canal.", en: "There are too many adverts during the programme, so I change channel." }, accept: ["advertising", "the ad", "commercials"], hint: "Everyone shortens it to la publi. One advert is un anuncio." },
        { id: "es-u64l4-laencuesta", type: "vocab", front: "la encuesta", reading: "laencuesta", meaning: "the survey", example: { jp: "Según esta encuesta, mucha gente ya no ve las noticias en la televisión.", en: "According to this survey, a lot of people no longer watch the news on television." }, accept: ["survey", "poll", "the opinion poll"] },
        { id: "es-u64l4-elentretenimiento", type: "vocab", front: "el entretenimiento", reading: "elentretenimiento", meaning: "entertainment", example: { jp: "Para él, el cine es entretenimiento; para mí, en cambio, es un arte.", en: "For him, cinema is entertainment; for me, on the other hand, it's an art." }, accept: ["entertainment", "amusement"], hint: "From entretener, to entertain. The adjective is entretenido, fun/enjoyable." },
      ],
    },
  ],
};
