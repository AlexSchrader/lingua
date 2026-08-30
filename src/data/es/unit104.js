// ES Unit 104 — La prensa y el encuadre ("Media and narrative") — B2 (slot: media-narrative)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: how a story is FRAMED.
// Editorial line and bias (l1), disinformation (l2), spread and virality (l3), the press
// as an institution (l4).
// The B1 press vocabulary (u55, u64: la prensa, el titular, el reportaje, la portada, la
// redacción) and storytelling as an art (u121) stay theirs — used here only as examples.
// Rejected as already taught: el enfoque, el marco (u71), la audiencia, la portada,
// la redacción (u64), el rumor (u54), la repercusión (u52), el alcance (u76).
export const ES_UNIT104 = {
  id: "es-u104",
  lang: "es",
  title: "La prensa y el encuadre",
  order: 104,
  stage: "b2",
  lessons: [
    {
      id: "es-u104l1",
      unit: 104,
      lesson: 1,
      title: "Sesgo y línea editorial",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how a paper leans and how a story is angled: bias, impartiality, the narrative, the frame and the agenda.",
      items: [
        { id: "es-u104l1-sesgo", type: "vocab", front: "el sesgo", reading: "elsesgo", meaning: "bias / slant", example: { jp: "Cada periódico cuenta la misma noticia con su sesgo.", en: "Each newspaper tells the same story with its own slant." }, accept: ["bias", "slant", "skew"], hint: "A lean you can measure, not a lie. Con sesgo is the neutral way to name it; the accusation is stronger: está sesgado." },
        { id: "es-u104l1-imparcialidad", type: "vocab", front: "la imparcialidad", reading: "laimparcialidad", meaning: "impartiality", example: { jp: "La imparcialidad total es difícil para cualquier periodista.", en: "Total impartiality is difficult for any journalist." }, accept: ["impartiality", "neutrality", "even-handedness"], hint: "Not taking a side — the standard the press claims for itself. The opposite of el sesgo, and the word an ombudsman uses." },
        { id: "es-u104l1-narrativa", type: "vocab", front: "la narrativa", reading: "lanarrativa", meaning: "narrative (a framing)", example: { jp: "Los dos partidos tienen su propia narrativa sobre el mismo hecho.", en: "The two parties each have their own narrative about the same fact." }, accept: ["narrative", "story", "framing", "storyline"], hint: "Not a story with characters — the shape a side gives to events so they mean what it wants. Imponer una narrativa is the political move." },
        { id: "es-u104l1-encuadre", type: "vocab", front: "el encuadre", reading: "elencuadre", meaning: "framing (of a story)", example: { jp: "El encuadre de la noticia cambia lo que el público entiende.", en: "The framing of the story changes what the public understands." }, accept: ["framing", "frame", "angle"], hint: "From a picture frame: what you leave inside the edges and what you cut. El marco (u71) is a structure; el encuadre is a choice." },
        { id: "es-u104l1-sensacionalista", type: "vocab", front: "sensacionalista", reading: "sensacionalista", meaning: "sensationalist", example: { jp: "La prensa sensacionalista busca el escándalo antes que la verdad.", en: "The sensationalist press looks for scandal before truth." }, accept: ["sensationalist", "sensational", "tabloid"], hint: "Same form for both genders. It describes a whole style of paper — what English calls the tabloids." },
        { id: "es-u104l1-agenda", type: "vocab", front: "la agenda", reading: "laagenda", meaning: "agenda (what gets covered)", example: { jp: "La prensa decide la agenda de lo que la gente habla.", en: "The press decides the agenda of what people talk about." }, accept: ["agenda", "priorities"], hint: "The set of topics treated as important. Marcar la agenda = to set the agenda. It is also a diary, which is the everyday sense." },
      ],
    },
    {
      id: "es-u104l2",
      unit: 104,
      lesson: 2,
      title: "Bulos y desinformación",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about false information and how it is used: hoaxes, disinformation, post-truth, twisting and manipulation.",
      items: [
        { id: "es-u104l2-desinformacion", type: "vocab", front: "la desinformación", reading: "ladesinformacion", meaning: "disinformation", example: { jp: "La desinformación se difunde antes que la verdad.", en: "Disinformation spreads before the truth does." }, accept: ["disinformation", "misinformation", "fake news"], hint: "False information spread on purpose. The des- prefix marks the intent: not an absence of information but an attack on it." },
        { id: "es-u104l2-bulo", type: "vocab", front: "el bulo", reading: "elbulo", meaning: "hoax / fake story", example: { jp: "Ese bulo sobre el hospital lo creyó mucha gente.", en: "A lot of people believed that hoax about the hospital." }, accept: ["hoax", "fake story", "false rumour", "fake news story"], hint: "One concrete false story, usually online. Shorter and more everyday than la desinformación, which names the whole practice." },
        { id: "es-u104l2-posverdad", type: "vocab", front: "la posverdad", reading: "laposverdad", meaning: "post-truth", example: { jp: "En la posverdad, el hecho importa menos que la opinión.", en: "In post-truth, the fact matters less than the opinion." }, accept: ["post-truth", "posttruth"], hint: "The condition where feeling beats fact. Written as one word in Spanish, from post- + la verdad (u45)." },
        { id: "es-u104l2-tergiversar", type: "vocab", front: "tergiversar", reading: "tergiversar", meaning: "to twist / misrepresent", example: { jp: "El periódico tergiversó sus palabras para crear polémica.", en: "The paper twisted his words to create controversy." }, accept: ["to twist", "to misrepresent", "to distort", "twist"], hint: "To report something real in a shape that changes its meaning. Stronger than exaggerating, weaker than inventing." },
        { id: "es-u104l2-manipular", type: "vocab", front: "manipular", reading: "manipular", meaning: "to manipulate", example: { jp: "Es fácil manipular una foto y difundirla como verdadera.", en: "It is easy to manipulate a photo and spread it as real." }, accept: ["to manipulate", "manipulate", "to doctor"], hint: "Works on people and on evidence alike: manipular a la opinión pública, manipular los datos. Always an accusation." },
        { id: "es-u104l2-propaganda", type: "vocab", front: "la propaganda", reading: "lapropaganda", meaning: "propaganda", example: { jp: "En la guerra, la prensa es solo propaganda.", en: "In war, the press is nothing but propaganda." }, accept: ["propaganda"], hint: "Information shaped to serve power. In Spain it also means commercial advertising material — la propaganda del buzón." },
      ],
    },
    {
      id: "es-u104l3",
      unit: 104,
      lesson: 3,
      title: "Difusión y viralidad",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a story travels: going viral, spreading, amplifying, echoing, and breaking a story first.",
      items: [
        { id: "es-u104l3-viral", type: "vocab", front: "viral", reading: "viral", meaning: "viral", example: { jp: "Ese mensaje se hizo viral en pocas horas.", en: "That message went viral in a few hours." }, accept: ["viral"], hint: "Hacerse viral is the fixed way to say it went viral. The medical sense came first, and the metaphor is the same: it spreads by contact." },
        { id: "es-u104l3-difusion", type: "vocab", front: "la difusión", reading: "ladifusion", meaning: "spread / circulation", example: { jp: "La difusión de la noticia fue muy grande en la red.", en: "The story's spread on the network was very wide." }, accept: ["spread", "circulation", "dissemination", "reach"], hint: "How widely something travels. Un medio de gran difusión is a paper a lot of people actually see." },
        { id: "es-u104l3-difundir", type: "vocab", front: "difundir", reading: "difundir", meaning: "to spread / circulate", example: { jp: "No hay que difundir una noticia sin leerla.", en: "You should not spread a story without reading it." }, accept: ["to spread", "to circulate", "to broadcast", "spread"], hint: "The verb behind la difusión. Difundir un bulo is what everyone does by accident; the reflexive difundirse is the story doing it by itself." },
        { id: "es-u104l3-altavoz", type: "vocab", front: "el altavoz", reading: "elaltavoz", meaning: "megaphone / amplifier (figurative)", example: { jp: "La red es un altavoz para cualquier opinión.", en: "The network is a megaphone for any opinion." }, accept: ["megaphone", "loudspeaker", "amplifier", "platform"], hint: "Literally a loudspeaker; in media talk, whatever makes one voice louder than it was. Servir de altavoz a alguien is rarely a compliment." },
        { id: "es-u104l3-eco", type: "vocab", front: "el eco", reading: "eleco", meaning: "echo / pick-up (coverage)", example: { jp: "La noticia tuvo mucho eco en la prensa del país.", en: "The story got a lot of pick-up in the country's press." }, accept: ["echo", "pick-up", "resonance", "coverage"], hint: "Tener eco = to be picked up and repeated. Hacerse eco de algo is what a paper does when it reports someone else's story." },
        { id: "es-u104l3-primicia", type: "vocab", front: "la primicia", reading: "laprimicia", meaning: "scoop / exclusive", example: { jp: "El periodista tuvo la primicia y la publicó primero.", en: "The journalist had the scoop and published it first." }, accept: ["scoop", "exclusive", "breaking story"], hint: "From primero: the story nobody else has yet. Dar la primicia is the whole competitive point of a newsroom." },
      ],
    },
    {
      id: "es-u104l4",
      unit: 104,
      lesson: 4,
      title: "La prensa como institución",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss the press as an institution: censorship, controversy, scandal, print runs and morbid curiosity.",
      items: [
        { id: "es-u104l4-censura", type: "vocab", front: "la censura", reading: "lacensura", meaning: "censorship", example: { jp: "Bajo la censura, ningún periódico podía contar eso.", en: "Under censorship, no newspaper could report that." }, accept: ["censorship", "censure"], hint: "The state cutting what may be published. La autocensura is the more common modern problem: the paper cutting itself." },
        { id: "es-u104l4-censurar", type: "vocab", front: "censurar", reading: "censurar", meaning: "to censor / to condemn", example: { jp: "El gobierno censuró las fotos de la guerra.", en: "The government censored the photos of the war." }, accept: ["to censor", "to condemn", "censor"], hint: "Two senses that stay apart by context: to block publication, and to criticise sharply — censurar la actitud de alguien." },
        { id: "es-u104l4-polemica", type: "vocab", front: "la polémica", reading: "lapolemica", meaning: "controversy / row", example: { jp: "Sus palabras crearon una polémica que duró semanas.", en: "His words created a controversy that lasted weeks." }, accept: ["controversy", "row", "furore", "dispute"], hint: "A public argument in the media. As an adjective, polémico describes the thing that started it: una decisión polémica." },
        { id: "es-u104l4-escandalo", type: "vocab", front: "el escándalo", reading: "elescandalo", meaning: "scandal", example: { jp: "El escándalo obligó al partido a cambiar de líder.", en: "The scandal forced the party to change leader." }, accept: ["scandal", "outrage"], hint: "Wrongdoing made public, plus the noise around it. Un escándalo needs someone to have done something; una polémica only needs disagreement." },
        { id: "es-u104l4-tirada", type: "vocab", front: "la tirada", reading: "latirada", meaning: "print run / circulation", example: { jp: "La tirada del periódico bajó mucho en diez años.", en: "The paper's print run fell a lot in ten years." }, accept: ["print run", "circulation", "readership"], hint: "How many copies are printed, and by extension how big a paper is. From tirar in its printing sense." },
        { id: "es-u104l4-morbo", type: "vocab", front: "el morbo", reading: "elmorbo", meaning: "morbid fascination", example: { jp: "Esa historia se vendió bien solo por el morbo.", en: "That story sold well purely on morbid fascination." }, accept: ["morbid fascination", "morbid curiosity", "ghoulish interest"], hint: "The pull of what we should not want to look at. Tener morbo = to be darkly fascinating; the adjective is morboso." },
      ],
    },
  ],
};
