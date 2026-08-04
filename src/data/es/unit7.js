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
//     Sevilla, Carlos, María) + transparent cognates and naturalized English
//     borrowings (taxi, café, clase, fiesta, festival, concierto, examen,
//     importante, moderno, famoso, tranquilo); the en gloss always carries the
//     meaning. That list is closed — anything outside it has to be taught first.
//   - DELIBERATE A1 SIMPLIFICATIONS (known tradeoffs, revisit at A2):
//     (a) block 2 owns no verbs — Strand C (units 12-14) teaches them. Examples
//     are built from the four patterns a learner can already parse: "X es Y",
//     "X está en Y", "hay un/una X", "el X es ADJ". That is deliberate, not
//     thin — it is exactly the sentence frame the grammar units formalize later.
//     (b) a small closed set of high-frequency function words (el/la/los/las,
//     un/una, es/son, está/están, hay, y, no, en, de, a, al, muy, qué, dónde)
//     appears in examples before any formal teaching, glossed by the en line —
//     the same allowance fr/unit1.js documents.
//   - Unit titles stay in English, as the scaffold set them: the shared base all
//     three blocks branched from, and a Spanish title is unreadable on day one.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT7 = {
  id: "es-u7",
  lang: "es",
  title: "Town and places",
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
        { id: "es-u7l2-banco", type: "vocab", front: "el banco", reading: "elbanco", meaning: "bank", example: { jp: "Hay un banco en el centro.", en: "There's a bank in the centre." }, accept: ["the bank", "bench", "park bench"], hint: "El banco is both the bank and the park bench — context decides which one." },
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
      canDo: "Name the buildings a town is made of: la escuela, la universidad, la biblioteca, el museo, la iglesia, el hotel.",
      items: [
        { id: "es-u7l3-escuela", type: "vocab", front: "la escuela", reading: "laescuela", meaning: "school", example: { jp: "Hay una escuela en el pueblo.", en: "There's a school in the town." }, accept: ["the school"], hint: "Spanish never starts a word with s + consonant, so it adds an e: escuela, España, estación." },
        { id: "es-u7l3-universidad", type: "vocab", front: "la universidad", reading: "launiversidad", meaning: "university", example: { jp: "La universidad está en el centro de la ciudad.", en: "The university is in the city centre." }, accept: ["college", "the university"], hint: "Another -dad word, so another feminine one: la universidad." },
        { id: "es-u7l3-biblioteca", type: "vocab", front: "la biblioteca", reading: "labiblioteca", meaning: "library", example: { jp: "Hay una biblioteca en la universidad.", en: "There's a library at the university." }, accept: ["the library"], hint: "The pair to keep straight: biblioteca = library (you borrow), librería = bookshop (you buy)." },
        { id: "es-u7l3-museo", type: "vocab", front: "el museo", reading: "elmuseo", meaning: "museum", example: { jp: "El museo de la ciudad es muy famoso.", en: "The city museum is very famous." }, accept: ["the museum"] },
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
      canDo: "Say how you travel and where you catch it: la estación, el tren, el autobús, la parada, el coche, el aeropuerto.",
      items: [
        { id: "es-u7l4-estacion", type: "vocab", front: "la estación", reading: "laestacion", meaning: "station", example: { jp: "La estación está en el centro.", en: "The station is in the centre." }, accept: ["the station", "train station"], hint: "Also means \"season\" — las cuatro estaciones are the four seasons of the year." },
        { id: "es-u7l4-tren", type: "vocab", front: "el tren", reading: "eltren", meaning: "train", example: { jp: "Hay un tren a Madrid.", en: "There's a train to Madrid." }, accept: ["the train"] },
        { id: "es-u7l4-autobus", type: "vocab", front: "el autobús", reading: "elautobus", meaning: "bus", example: { jp: "El autobús está en la plaza.", en: "The bus is in the square." }, accept: ["the bus", "coach"], hint: "The stress lands on the last syllable, and that is what the accent marks: au-to-BÚS." },
        { id: "es-u7l4-parada", type: "vocab", front: "la parada", reading: "laparada", meaning: "stop", example: { jp: "Hay una parada de autobús en la calle Mayor.", en: "There's a bus stop on Calle Mayor." }, accept: ["bus stop", "the stop"], hint: "From parar, to stop — a parada is where the bus stops for a moment." },
        { id: "es-u7l4-coche", type: "vocab", front: "el coche", reading: "elcoche", meaning: "car", example: { jp: "El coche está en la calle.", en: "The car is in the street." }, accept: ["the car", "automobile"], hint: "In Spain el coche; in most of Latin America you'll hear el carro or el auto." },
        { id: "es-u7l4-aeropuerto", type: "vocab", front: "el aeropuerto", reading: "elaeropuerto", meaning: "airport", example: { jp: "Hay un tren al aeropuerto.", en: "There's a train to the airport." }, accept: ["the airport"], hint: "aero + puerto — an air port. And al is just a + el squeezed together." },
      ],
    },
  ],
};
