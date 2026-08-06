// ES Unit 7 — Town and places (slot: places) — A1
// FIRST UNIT OF BLOCK 2 (units 7-11 — the rest of Strand B).
// AUTHORING CONVENTIONS FOR SPANISH (all es units) — these follow src/data/fr/unit1.js:
//   - `front` is real orthography (accents, ñ, spaces); `reading` is its ASCII
//     fold (the contract requires [a-z]+) — the answer checker folds typed
//     accents back to it, so learners may type either form.
//   - `example.jp` holds the SPANISH sentence (the field name is historical —
//     "jp" = target language); `example.en` the English gloss.
//   - Nouns are taught WITH their article (el/la) so gender is learned as part
//     of the word, never as an afterthought.
//   - Examples stay inside taught vocab + proper names (Madrid, Barcelona,
//     Sevilla, Carlos, María, and Calle Mayor) + transparent cognates and
//     naturalized English borrowings (taxi, café, clase, fiesta, festival,
//     concierto, examen, importante, moderno, famoso, tranquilo); the en gloss
//     always carries the meaning. That list is closed — anything outside it has
//     to be taught first, or declared as a block-1 dependency in a unit header
//     (units 9 and 11 each declare theirs).
//   - DELIBERATE A1 SIMPLIFICATIONS (known tradeoffs, revisit at A2):
//     (a) block 2 TEACHES no conjugation. It does teach ten verb-containing
//     fixed phrases as single lexical items — hace calor / hace frío / hace sol
//     / está nublado / llueve in unit 8 lesson 4, and me duele / tengo frío /
//     tengo calor / tengo hambre / tengo sed in unit 11 lessons 3-4. Those are
//     phrases you memorize whole, which is how A1 actually meets them; the verbs
//     themselves (hacer, tener, doler, llover, estar) stay Strand C's to teach.
//     (b) beyond those, examples are built from four frames a learner can parse
//     from the en gloss — "X es Y", "X está en Y", "hay un/una X", "el X es ADJ"
//     — which means the copulas and the existential (es/son, está/están, hay)
//     appear untaught in most of the 121 examples, alongside a closed set of
//     function words (el/la/los/las, un/una, y, no, en, de, a, al, muy, qué).
//     ⚠️ MEASURED AGAINST THE OTHER BLOCKS, 2026-08-05 — most of that allowance
//     turned out to be covered, and this is the honest accounting. Block 1's
//     sounds unit teaches es, son, hay, y, no, en, de, un, una, muy, qué as real
//     cards at units 1-6, all BEFORE this block, so those are not forward
//     references at all. What genuinely remains untaught until unit 12 is the
//     definite articles (el/la/los/las), estar (está/están) and a/al. Roughly a
//     third of the examples here lean on one of those.
//     That residue is a hole in the STANDARD, not a local shortcut: the band
//     template puts all grammar at units 12-14, after all ten thematic units, so
//     no example sentence in units 2-11 of any Latin-script language can avoid
//     an untaught article or copula. Escalated to Alex; fr will hit it too.
//     NOTE for the merge seat: `lint:curriculum`'s example-scope check only
//     warns when a word is taught LATER in the same language, so these surface
//     as warnings on the COMBINED tree and are silent on this branch alone.
//   - UNIT titles are in Spanish (La ciudad, Los colores y el tiempo…), matching
//     how ja and fr name theirs; LESSON titles and canDo lines stay in English,
//     since those are what a beginner reads to know what a lesson is for. This
//     block first shipped with English unit titles copied from the scaffold —
//     Alex overrode that in 24fabd0, and Spanish is the right call. ⚠️ BLOCKS 1
//     AND 3: the scaffold's English titles are still on units 1-6 and 12-20, so
//     the Ladder reads mixed until you rename yours too. Match this convention.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT7 = {
  id: "es-u7",
  lang: "es",
  title: "La ciudad",
  order: 7,
  stage: "a1",
  lessons: [
    {
      id: "es-u7l1",
      unit: 7,
      lesson: 1,
      title: "Places in town",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the parts of a town — la ciudad, el pueblo, el centro, la plaza, el parque, la calle — and say what is where.",
      items: [
        { id: "es-u7l1-ciudad", type: "vocab", front: "la ciudad", reading: "laciudad", meaning: "city", example: { jp: "Barcelona es una ciudad de España.", en: "Barcelona is a city in Spain." }, accept: ["the city"], hint: "Feminine: la ciudad. The -dad ending is Spanish's -ty (ciudad / city, universidad / university), and every -dad word is feminine." },
        { id: "es-u7l1-pueblo", type: "vocab", front: "el pueblo", reading: "elpueblo", meaning: "town", example: { jp: "No es una ciudad, es un pueblo.", en: "It isn't a city, it's a town." }, accept: ["village", "small town", "the town"], hint: "El pueblo also means \"the people\" — a pueblo is a place small enough to be one." },
        { id: "es-u7l1-centro", type: "vocab", front: "el centro", reading: "elcentro", meaning: "centre", example: { jp: "El centro de la ciudad es muy moderno.", en: "The city centre is very modern." }, accept: ["center", "downtown", "the centre", "city centre"], hint: "El centro is where the shops and the plaza are — the downtown." },
        { id: "es-u7l1-plaza", type: "vocab", front: "la plaza", reading: "laplaza", meaning: "square", example: { jp: "Hay una plaza en el centro.", en: "There's a square in the centre." }, accept: ["town square", "the square", "plaza"], hint: "The open square every Spanish town is built around. English borrowed the word unchanged." },
        { id: "es-u7l1-parque", type: "vocab", front: "el parque", reading: "elparque", meaning: "park", example: { jp: "El parque está en el centro.", en: "The park is in the centre." }, accept: ["the park"], hint: "Spanish writes the k sound before e or i as qu — parque, not parke." },
        { id: "es-u7l1-calle", type: "vocab", front: "la calle", reading: "lacalle", meaning: "street", example: { jp: "La calle Mayor está en el centro.", en: "Calle Mayor is in the centre." }, accept: ["road", "the street"], hint: "The double l sounds like the y in \"yes\": CA-ye. Almost every Spanish town has a Calle Mayor — the main street." },
      ],
    },
    {
      id: "es-u7l2",
      unit: 7,
      lesson: 2,
      title: "Shops and services",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you buy things and run errands: la tienda, el mercado, el supermercado, la farmacia, el banco, la librería.",
      items: [
        { id: "es-u7l2-tienda", type: "vocab", front: "la tienda", reading: "latienda", meaning: "shop", example: { jp: "Hay una tienda en la plaza.", en: "There's a shop in the square." }, accept: ["store", "the shop"], hint: "Also the word for a tent — both are things you put up and open." },
        { id: "es-u7l2-mercado", type: "vocab", front: "el mercado", reading: "elmercado", meaning: "market", example: { jp: "El mercado está en el centro.", en: "The market is in the centre." }, accept: ["the market", "marketplace"] },
        { id: "es-u7l2-supermercado", type: "vocab", front: "el supermercado", reading: "elsupermercado", meaning: "supermarket", example: { jp: "Hay un supermercado en la calle Mayor.", en: "There's a supermarket on Calle Mayor." }, accept: ["the supermarket", "grocery store"], hint: "súper + mercado — the big version of the word you just learned." },
        { id: "es-u7l2-farmacia", type: "vocab", front: "la farmacia", reading: "lafarmacia", meaning: "pharmacy", example: { jp: "La farmacia está en la plaza.", en: "The pharmacy is in the square." }, accept: ["chemist", "drugstore", "the pharmacy"], hint: "Look for the green cross — that's a farmacia in every Spanish-speaking country." },
        { id: "es-u7l2-banco", type: "vocab", front: "el banco", reading: "elbanco", meaning: "bank", example: { jp: "Hay un banco en el centro.", en: "There's a bank in the centre." }, accept: ["the bank"], hint: "El banco is both the bank and the park bench — context decides which one." },
        { id: "es-u7l2-libreria", type: "vocab", front: "la librería", reading: "lalibreria", meaning: "bookshop", example: { jp: "La librería está en la calle Mayor.", en: "The bookshop is on Calle Mayor." }, accept: ["bookstore", "the bookshop", "book shop"], hint: "False friend: a librería SELLS books. A library is la biblioteca — next lesson." },
      ],
    },
    {
      id: "es-u7l3",
      unit: 7,
      lesson: 3,
      title: "Public buildings",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the buildings a town is made of: la escuela, la universidad, la biblioteca, el cine, la iglesia, el hotel.",
      items: [
        { id: "es-u7l3-escuela", type: "vocab", front: "la escuela", reading: "laescuela", meaning: "school", example: { jp: "Hay una escuela en el pueblo.", en: "There's a school in the town." }, accept: ["the school"], hint: "Spanish never starts a word with s + consonant, so it adds an e: escuela, España, estación." },
        { id: "es-u7l3-universidad", type: "vocab", front: "la universidad", reading: "launiversidad", meaning: "university", example: { jp: "La universidad está en el centro de la ciudad.", en: "The university is in the city centre." }, accept: ["college", "the university"], hint: "Another -dad word, so another feminine one: la universidad." },
        { id: "es-u7l3-biblioteca", type: "vocab", front: "la biblioteca", reading: "labiblioteca", meaning: "library", example: { jp: "Hay una biblioteca en la universidad.", en: "There's a library at the university." }, accept: ["the library"], hint: "The pair to keep straight: biblioteca = library (you borrow), librería = bookshop (you buy)." },
        { id: "es-u7l3-cine", type: "vocab", front: "el cine", reading: "elcine", meaning: "cinema", example: { jp: "Hay un cine en el centro.", en: "There's a cinema in the centre." }, accept: ["the cinema", "movie theater", "movies", "movie theatre"], hint: "Ir al cine is to go to the movies. Short for cinematógrafo — the c before i is an s sound: SI-ne." },
        { id: "es-u7l3-iglesia", type: "vocab", front: "la iglesia", reading: "laiglesia", meaning: "church", example: { jp: "La iglesia está en la plaza.", en: "The church is in the square." }, accept: ["the church"], hint: "Same root as \"ecclesiastical\". The g is hard here, like in \"glue\" — Spanish g only turns throaty before e or i: i-GLE-sia." },
        { id: "es-u7l3-hotel", type: "vocab", front: "el hotel", reading: "elhotel", meaning: "hotel", example: { jp: "Hay un hotel en la calle Mayor.", en: "There's a hotel on Calle Mayor." }, accept: ["the hotel"], hint: "Spelled like English, said without the h — the Spanish h is always silent: o-TEL." },
      ],
    },
    {
      id: "es-u7l4",
      unit: 7,
      lesson: 4,
      title: "Getting around",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how you travel and where you catch it: la estación, el tren, el autobús, la parada, el metro, el aeropuerto.",
      items: [
        { id: "es-u7l4-estacion", type: "vocab", front: "la estación", reading: "laestacion", meaning: "station", example: { jp: "La estación está en el centro.", en: "The station is in the centre." }, accept: ["the station", "train station"], hint: "Also means \"season\" — las cuatro estaciones are the four seasons of the year." },
        { id: "es-u7l4-tren", type: "vocab", front: "el tren", reading: "eltren", meaning: "train", example: { jp: "Hay un tren a Madrid.", en: "There's a train to Madrid." }, accept: ["the train"] },
        { id: "es-u7l4-autobus", type: "vocab", front: "el autobús", reading: "elautobus", meaning: "bus", example: { jp: "El autobús está en la plaza.", en: "The bus is in the square." }, accept: ["the bus", "coach"], hint: "The stress lands on the last syllable, and that is what the accent marks: au-to-BÚS." },
        { id: "es-u7l4-parada", type: "vocab", front: "la parada", reading: "laparada", meaning: "stop", example: { jp: "Hay una parada de autobús en la calle Mayor.", en: "There's a bus stop on Calle Mayor." }, accept: ["bus stop", "the stop"], hint: "From parar, to stop — a parada is where the bus stops for a moment." },
        { id: "es-u7l4-metro", type: "vocab", front: "el metro", reading: "elmetro", meaning: "underground", example: { jp: "Hay una parada de metro en el centro.", en: "There's an underground stop in the centre." }, accept: ["subway", "metro", "the underground", "tube"], hint: "Madrid and Barcelona both have one. El metro is also a metre of length — context decides." },
        { id: "es-u7l4-aeropuerto", type: "vocab", front: "el aeropuerto", reading: "elaeropuerto", meaning: "airport", example: { jp: "Hay un tren al aeropuerto.", en: "There's a train to the airport." }, accept: ["the airport"], hint: "aero + puerto — an air port. And al is just a + el squeezed together." },
      ],
    },
  ],
};
