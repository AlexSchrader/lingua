// ES Unit 121 — Literature and the arts of making (slot: creation) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: MAKING a work — verse, stanza, plot, staging, canvas, sculpture, score,
//         publication.
//   NOT:  Judging a work (u96) and leisure arts at A2 (u35).
//
// Rejected as already taught: la trama + el guion (u64), el desenlace (u86), publicar
// (u55, so la publicación is out too), el taller (u84), el paisaje (u26), el cuadro
// (u15), la portada (u64), el estreno (u64). The plot words being gone, lesson 2 takes
// the telling and the printing instead.
export const ES_UNIT121 = {
  id: "es-u121",
  lang: "es",
  title: "Hacer la obra: letras y artes",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "es-u121l1",
      unit: 121,
      lesson: 1,
      title: "El verso",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how a poem is built: name the line, the stanza, the rhyme and the metre, and tell verse from prose.",
      items: [
        { id: "es-u121l1-elverso", type: "vocab", front: "el verso", reading: "elverso", meaning: "the line of verse", example: { jp: "El primer verso del poema da nombre al libro entero.", en: "The first line of the poem gives the whole book its name." }, accept: ["the line of verse", "the verse", "the line"], hint: "Careful: un verso is one line, not a stanza. En verso = in verse, as opposed to en prosa." },
        { id: "es-u121l1-laestrofa", type: "vocab", front: "la estrofa", reading: "laestrofa", meaning: "the stanza", example: { jp: "La última estrofa repite el primer verso.", en: "The last stanza repeats the first line." }, accept: ["the stanza", "the verse (group of lines)"], hint: "The group of lines separated by a blank line. This is the English verse that verso is not." },
        { id: "es-u121l1-larima", type: "vocab", front: "la rima", reading: "larima", meaning: "the rhyme", example: { jp: "Escribió el poema sin rima y sin puntuación.", en: "He wrote the poem without rhyme and without punctuation." }, accept: ["the rhyme", "the rhyming"], hint: "The verb rimar works like English: rimar CON algo. Bécquer's poems are called Rimas." },
        { id: "es-u121l1-lametrica", type: "vocab", front: "la métrica", reading: "lametrica", meaning: "the metre / metrics", example: { jp: "La métrica de estos versos es muy regular.", en: "The metre of these lines is very regular." }, accept: ["the metre", "the meter", "the metrics"], hint: "How many syllables each line carries, and where the stress falls. A whole discipline in Spanish literature classes." },
        { id: "es-u121l1-elsoneto", type: "vocab", front: "el soneto", reading: "elsoneto", meaning: "the sonnet", example: { jp: "Escribió un soneto para el aniversario de su madre.", en: "He wrote a sonnet for his mother's anniversary." }, accept: ["the sonnet"], hint: "Fourteen lines in a fixed shape — the form Spanish poets have used since the sixteenth century." },
        { id: "es-u121l1-laprosa", type: "vocab", front: "la prosa", reading: "laprosa", meaning: "the prose", example: { jp: "Su prosa es sencilla, casi como si hablara.", en: "His prose is simple, almost as if he were speaking." }, accept: ["the prose"], hint: "Everything not in verse. En prosa is the standard contrast with en verso." },
      ],
    },
    {
      id: "es-u121l2",
      unit: 121,
      lesson: 2,
      title: "El relato y la edición",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a text from draft to book: name the narrator, the draft, the manuscript, the preface and the publishing house.",
      items: [
        { id: "es-u121l2-elnarrador", type: "vocab", front: "el narrador", reading: "elnarrador", meaning: "the narrator", example: { jp: "El narrador no cuenta nunca lo que piensa el personaje.", en: "The narrator never tells us what the character thinks." }, accept: ["the narrator", "the storyteller"], hint: "The voice inside the book, never the author outside it — the distinction Spanish criticism insists on." },
        { id: "es-u121l2-elrelato", type: "vocab", front: "el relato", reading: "elrelato", meaning: "the (short) story / account", example: { jp: "Publicó un libro de relatos antes de la primera novela.", en: "He published a book of short stories before his first novel." }, accept: ["the short story", "the account", "the tale"], hint: "Both the literary short story and any first-hand account — el relato del testigo." },
        { id: "es-u121l2-elborrador", type: "vocab", front: "el borrador", reading: "elborrador", meaning: "the draft", example: { jp: "El primer borrador tenía el doble de páginas.", en: "The first draft was twice as long." }, accept: ["the draft", "the rough draft", "the rough copy"], hint: "From borrar, to erase: the version made to be crossed out. It is also the board rubber in a classroom." },
        { id: "es-u121l2-elmanuscrito", type: "vocab", front: "el manuscrito", reading: "elmanuscrito", meaning: "the manuscript", example: { jp: "El manuscrito apareció muchos años después de su muerte.", en: "The manuscript turned up many years after his death." }, accept: ["the manuscript"], hint: "Literally written by hand, but used of any unpublished text sent to a publisher." },
        { id: "es-u121l2-elprologo", type: "vocab", front: "el prólogo", reading: "elprologo", meaning: "the preface / prologue", example: { jp: "El prólogo lo escribió otro autor, no ella.", en: "The preface was written by another author, not by her." }, accept: ["the preface", "the prologue", "the foreword"], hint: "At the front of the book; el epílogo closes it. In Spain a prestigious prólogo sells the book." },
        { id: "es-u121l2-laeditorial", type: "vocab", front: "la editorial", reading: "laeditorial", meaning: "the publishing house", example: { jp: "Ninguna editorial quiso el manuscrito al principio.", en: "No publishing house wanted the manuscript at first." }, accept: ["the publishing house", "the publisher", "the press"], hint: "Feminine for the company; el editorial, masculine, is a newspaper leader column." },
      ],
    },
    {
      id: "es-u121l3",
      unit: 121,
      lesson: 3,
      title: "La escena",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a play is put on: the stage directions, the production, the cast, the set, the curtain and the machinery behind it.",
      items: [
        { id: "es-u121l3-latramoya", type: "vocab", front: "la tramoya", reading: "latramoya", meaning: "the stage machinery", example: { jp: "Toda la tramoya se mueve sin que el público la vea.", en: "All the stage machinery moves without the audience seeing it." }, accept: ["the stage machinery", "the stage works", "the machinery behind the scenes"], hint: "The ropes and platforms that move the set. Figuratively, la tramoya política is the machinery nobody is meant to see." },
        { id: "es-u121l3-elmontaje", type: "vocab", front: "el montaje", reading: "elmontaje", meaning: "the production / staging", example: { jp: "Es un montaje muy sencillo, con cuatro actores y una silla.", en: "It is a very simple production, with four actors and one chair." }, accept: ["the production", "the staging", "the mounting"], hint: "This particular version of the play. In cinema the same word means the edit." },
        { id: "es-u121l3-elreparto", type: "vocab", front: "el reparto", reading: "elreparto", meaning: "the cast", example: { jp: "El reparto cambió por completo en la segunda temporada.", en: "The cast changed completely in the second season." }, accept: ["the cast", "the casting"], hint: "From repartir, to hand out: the parts distributed among the actors. Also home delivery — reparto a domicilio." },
        { id: "es-u121l3-eldecorado", type: "vocab", front: "el decorado", reading: "eldecorado", meaning: "the set / scenery", example: { jp: "El decorado se cambia dos veces durante la obra.", en: "The set is changed twice during the play." }, accept: ["the set", "the scenery", "the stage set"], hint: "The built world on stage. Note the noun is masculine and takes no article change: un decorado." },
        { id: "es-u121l3-eltelon", type: "vocab", front: "el telón", reading: "eltelon", meaning: "the curtain", example: { jp: "El telón cayó y el público se quedó en silencio.", en: "The curtain fell and the audience stayed silent." }, accept: ["the curtain", "the theatre curtain"], hint: "Only the theatre curtain — a window curtain is una cortina. El telón de fondo is the backdrop, literal or figurative." },
        { id: "es-u121l3-laescenografia", type: "vocab", front: "la escenografía", reading: "laescenografia", meaning: "the set design", example: { jp: "La escenografía era más impresionante que la obra.", en: "The set design was more impressive than the play itself." }, accept: ["the set design", "the scenery", "the staging"], hint: "The whole visual design of a staging, where el decorado is the built scenery itself." },
      ],
    },
    {
      id: "es-u121l4",
      unit: 121,
      lesson: 4,
      title: "El lienzo y la partitura",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the materials of the studio: the canvas, the sketch, the brushstroke, the chisel and the score.",
      items: [
        { id: "es-u121l4-ellienzo", type: "vocab", front: "el lienzo", reading: "ellienzo", meaning: "the canvas", example: { jp: "Trabajó en el mismo lienzo durante casi dos años.", en: "He worked on the same canvas for almost two years." }, accept: ["the canvas", "the painting"], hint: "Both the cloth and the finished painting on it. Originally a piece of linen — el lino." },
        { id: "es-u121l4-elboceto", type: "vocab", front: "el boceto", reading: "elboceto", meaning: "the sketch", example: { jp: "Se conservan varios bocetos de la misma obra.", en: "Several sketches of the same work survive." }, accept: ["the sketch", "the study", "the rough drawing"], hint: "What el borrador is to a text, el boceto is to an image." },
        { id: "es-u121l4-lapincelada", type: "vocab", front: "la pincelada", reading: "lapincelada", meaning: "the brushstroke", example: { jp: "Se ven las pinceladas desde muy cerca.", en: "You can see the brushstrokes from very close up." }, accept: ["the brushstroke", "the stroke", "the touch"], hint: "From el pincel, the brush. Figuratively, unas pinceladas is a quick sketch of a subject in words." },
        { id: "es-u121l4-laescultura", type: "vocab", front: "la escultura", reading: "laescultura", meaning: "the sculpture", example: { jp: "La escultura pesa más de dos toneladas.", en: "The sculpture weighs more than two tonnes." }, accept: ["the sculpture", "the statue"], hint: "The discipline and the single work alike. Esculpir is the verb." },
        { id: "es-u121l4-elcincel", type: "vocab", front: "el cincel", reading: "elcincel", meaning: "the chisel", example: { jp: "Usa un cincel muy fino para los detalles.", en: "He uses a very fine chisel for the details." }, accept: ["the chisel"], hint: "For stone and metal. A woodworker's chisel is un formón, though cincel is understood everywhere." },
        { id: "es-u121l4-lapartitura", type: "vocab", front: "la partitura", reading: "lapartitura", meaning: "the score", example: { jp: "Toca sin partitura, todo de memoria.", en: "He plays without the score, entirely from memory." }, accept: ["the score", "the sheet music"], hint: "The written music, not the performance. Nothing to do with partir — it comes from the Italian partitura." },
      ],
    },
  ],
};
