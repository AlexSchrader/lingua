// FR Unit 30 — Le voyage ("Travel and transport") — A2
// A1's u19 taught the vehicles and the bare journey (billet, valise, aéroport,
// départ, arrivée, je prends / je monte / je descends / je conduis). This unit is
// the A2 layer on top: the road itself, booking a stay, the station and the
// airport, and going somewhere as a visitor.
// Two front-collision notes, resolved by the lower-slot-wins rule:
//   - la carte is already taught (u11l3, a payment card), so a street map is
//     taught here as le plan, which is what a French speaker says anyway.
//   - personne is already taught (u21l2, nobody), so examples never use it in its
//     other sense of a person — deux personnes would read as two nobodies.
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT30 = {
  id: "fr-u30",
  lang: "fr",
  title: "Le voyage",
  order: 30,
  stage: "a2",
  lessons: [
    {
      id: "fr-u30l1",
      unit: 30,
      lesson: 1,
      title: "On the road",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a car journey: the road, the motorway, a bridge, the red light, petrol, and who has a licence.",
      items: [
        { id: "fr-u30l1-laroute", type: "vocab", front: "la route", reading: "laroute", meaning: "road", example: { jp: "Je prends la route de Paris.", en: "I'm taking the road to Paris." }, accept: ["the road", "route"], hint: "la rue is a street in town; la route is the road between towns." },
        { id: "fr-u30l1-lautoroute", type: "vocab", front: "l'autoroute", reading: "lautoroute", meaning: "motorway", example: { jp: "Sur l'autoroute, je conduis vite.", en: "On the motorway I drive fast." }, accept: ["highway", "freeway", "the motorway"] },
        { id: "fr-u30l1-lepont", type: "vocab", front: "le pont", reading: "lepont", meaning: "bridge", example: { jp: "Le pont est très vieux.", en: "The bridge is very old." }, accept: ["the bridge"] },
        { id: "fr-u30l1-lefeurouge", type: "vocab", front: "le feu rouge", reading: "lefeurouge", meaning: "traffic light", example: { jp: "Devant l'école, il y a un feu rouge.", en: "There's a traffic light in front of the school." }, accept: ["red light", "the traffic lights", "stop light"], hint: "Literally the red fire — French names the light by its colour." },
        { id: "fr-u30l1-lessence", type: "vocab", front: "l'essence", reading: "lessence", meaning: "petrol", example: { jp: "Je cherche de l'essence pour la voiture.", en: "I'm looking for petrol for the car." }, accept: ["gas", "gasoline", "fuel"] },
        { id: "fr-u30l1-lepermis", type: "vocab", front: "le permis", reading: "lepermis", meaning: "driving licence", example: { jp: "Mon frère a le permis.", en: "My brother has his driving licence." }, accept: ["licence", "license", "driving license"] },
      ],
    },
    {
      id: "fr-u30l2",
      unit: 30,
      lesson: 2,
      title: "Holidays",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Organise a trip: say you're on holiday, book a room, and talk about your passport, luggage and stay.",
      items: [
        { id: "fr-u30l2-lesvacances", type: "vocab", front: "les vacances", reading: "lesvacances", meaning: "holidays", example: { jp: "En août, je suis en vacances.", en: "In August I'm on holiday." }, accept: ["vacation", "the holidays", "holiday"], hint: "Always plural in French, even for one week off." },
        { id: "fr-u30l2-lepasseport", type: "vocab", front: "le passeport", reading: "lepasseport", meaning: "passport", example: { jp: "Mon passeport est dans mon sac.", en: "My passport is in my bag." }, accept: ["the passport"] },
        { id: "fr-u30l2-lesbagages", type: "vocab", front: "les bagages", reading: "lesbagages", meaning: "luggage", example: { jp: "Mes bagages sont à l'hôtel.", en: "My luggage is at the hotel." }, accept: ["baggage", "the bags", "suitcases"] },
        { id: "fr-u30l2-lareservation", type: "vocab", front: "la réservation", reading: "lareservation", meaning: "booking", example: { jp: "J'ai une réservation à l'hôtel.", en: "I have a booking at the hotel." }, accept: ["reservation", "the booking"] },
        { id: "fr-u30l2-reserver", type: "vocab", front: "réserver", reading: "reserver", meaning: "to book", example: { jp: "Je vais réserver une chambre.", en: "I'm going to book a room." }, accept: ["book", "to reserve"] },
        { id: "fr-u30l2-lesejour", type: "vocab", front: "le séjour", reading: "lesejour", meaning: "stay", example: { jp: "Mon séjour à Paris est court.", en: "My stay in Paris is short." }, accept: ["the stay", "a stay", "visit"] },
      ],
    },
    {
      id: "fr-u30l3",
      unit: 30,
      lesson: 3,
      title: "Station and airport",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle a departure: find your flight, the platform, your seat, the timetable — and say the bus is delayed.",
      items: [
        { id: "fr-u30l3-levol", type: "vocab", front: "le vol", reading: "levol", meaning: "flight", example: { jp: "Le vol pour Paris est à midi.", en: "The flight to Paris is at midday." }, accept: ["the flight", "a flight"] },
        { id: "fr-u30l3-lequai", type: "vocab", front: "le quai", reading: "lequai", meaning: "platform", example: { jp: "Le train est sur le quai.", en: "The train is on the platform." }, accept: ["the platform", "quay"] },
        { id: "fr-u30l3-laplace", type: "vocab", front: "la place", reading: "laplace", meaning: "seat", example: { jp: "J'ai une place dans le train.", en: "I have a seat on the train." }, drill: { jp: "Dans le train je trouve la place", en: "On the train I find the seat" }, accept: ["a seat", "the seat", "space"], hint: "Also the square in the middle of a town — la place is a spot, whether you sit in it or stand in it." },
        { id: "fr-u30l3-leretard", type: "vocab", front: "le retard", reading: "leretard", meaning: "delay", example: { jp: "Le bus a du retard.", en: "The bus is delayed." }, accept: ["the delay", "lateness"], hint: "French says the bus HAS delay: le bus a du retard." },
        { id: "fr-u30l3-lhoraire", type: "vocab", front: "l'horaire", reading: "lhoraire", meaning: "timetable", example: { jp: "L'horaire est sur le mur.", en: "The timetable is on the wall." }, accept: ["schedule", "the timetable", "opening hours"] },
        { id: "fr-u30l3-ladouane", type: "vocab", front: "la douane", reading: "ladouane", meaning: "customs", example: { jp: "La douane est à l'aéroport.", en: "Customs is at the airport." }, accept: ["the customs", "border control"] },
      ],
    },
    {
      id: "fr-u30l4",
      unit: 30,
      lesson: 4,
      title: "Seeing the place",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about travelling as a visitor: travel, visit, the museum, the map, tourists, and going abroad.",
      items: [
        { id: "fr-u30l4-voyager", type: "vocab", front: "voyager", reading: "voyager", meaning: "to travel", example: { jp: "J'aime voyager en train.", en: "I like travelling by train." }, accept: ["travel", "to go travelling"], hint: "The verb behind le voyage, which you already know." },
        { id: "fr-u30l4-visiter", type: "vocab", front: "visiter", reading: "visiter", meaning: "to visit (a place)", example: { jp: "Je vais visiter Paris avec ma famille.", en: "I'm going to visit Paris with my family." }, accept: ["visit", "to tour"], hint: "For places, not people — you visit a city, but you go and see a friend." },
        { id: "fr-u30l4-lemusee", type: "vocab", front: "le musée", reading: "lemusee", meaning: "museum", example: { jp: "Le musée est fermé le lundi.", en: "The museum is closed on Mondays." }, accept: ["the museum", "gallery"] },
        { id: "fr-u30l4-leplan", type: "vocab", front: "le plan", reading: "leplan", meaning: "map (of a town)", example: { jp: "Où est le plan de la ville ?", en: "Where is the map of the town?" }, accept: ["street map", "the map", "plan"], hint: "la carte stretches to cover a map too (its own card in Unit 11 says so), but for a street map a French speaker reaches for le plan." },
        { id: "fr-u30l4-letouriste", type: "vocab", front: "le touriste", reading: "letouriste", meaning: "tourist", example: { jp: "Il y a beaucoup de touristes à Paris.", en: "There are a lot of tourists in Paris." }, accept: ["the tourist", "visitor"] },
        { id: "fr-u30l4-letranger", type: "vocab", front: "l'étranger", reading: "letranger", meaning: "abroad", example: { jp: "J'aime voyager à l'étranger.", en: "I like travelling abroad." }, accept: ["overseas", "foreign countries", "a foreigner"], hint: "à l'étranger is abroad; un étranger on its own is a foreigner or a stranger." },
      ],
    },
  ],
};
