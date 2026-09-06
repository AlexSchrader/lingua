// DE Unit 18 — Reisen und Verkehr (slot: vocabulary 4) — A1
// Block 3 (u15–u20). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT. u7 "Die Stadt" put the learner at der Bahnhof and
// taught gehen and fahren, then stopped — it never named a single vehicle, and
// it could not, because a town unit is about places. This unit takes what you
// travel IN, what you need at the station, and what you pack.
//
// Rejected as already taught: der Bahnhof, fahren, gehen, der Weg, die Karte
// (all u7), das Hotel and das Restaurant (u7 — used in examples here).
// Rejected as the same lexeme: die Reise and reisen — u2 already teaches the
// phrase gute Reise, so the noun is in the learner's mouth from the second unit
// and the seat that owns u2 owns it. der Urlaub and die Ferien do that job here.
// Also rejected: die Abfahrt and die Ankunft, which are the -t nouns of abfahren
// and ankommen, both taught in lesson 3 of this same unit.
// Kept deliberately: abfahren and ankommen, whose ab- and an- are not decorative
// — a learner who knows fahren and kommen still cannot get "depart" and "arrive"
// out of them, and the separable-verb pattern is A1 grammar no earlier unit
// covers. einsteigen and umsteigen are built on steigen, which is taught nowhere,
// so they are wholly new.
// FREE: Bus, Taxi, Ticket, Meter, Kilometer, Europa | Züge, Busse, Koffer, Grenzen, Zimmer, Schuhe, Jahre
export const DE_UNIT18 = {
  id: "de-u18",
  lang: "de",
  title: "Reisen und Verkehr",
  order: 18,
  stage: "a1",
  lessons: [
    {
      id: "de-u18l1",
      unit: 18,
      lesson: 1,
      title: "Verkehrsmittel",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what you travel in and say how you get somewhere: Ich fahre mit dem Zug.",
      items: [
        { id: "de-u18l1-derzug", type: "vocab", front: "der Zug", reading: "derzug", meaning: "the train", example: { jp: "Der Zug nach Berlin ist sehr schnell.", en: "The train to Berlin is very fast." }, accept: ["the train"], hint: "Mit dem Zug fahren — the vehicle takes mit plus the dative, every time." },
        { id: "de-u18l1-derbus", type: "vocab", front: "der Bus", reading: "derbus", meaning: "the bus", example: { jp: "Der Bus kommt um neunzehn Uhr.", en: "The bus comes at seven in the evening." }, accept: ["the bus"], hint: "Same word as English, but the plural doubles the s: die Busse." },
        { id: "de-u18l1-diebahn", type: "vocab", front: "die Bahn", reading: "diebahn", meaning: "the railway", example: { jp: "Die Bahn ist heute nicht teuer.", en: "The railway is not expensive today." }, accept: ["the railway", "the train", "the tram"], hint: "The system rather than the vehicle — die Deutsche Bahn. In a city, die S-Bahn and die U-Bahn." },
        { id: "de-u18l1-dasflugzeug", type: "vocab", front: "das Flugzeug", reading: "dasflugzeug", meaning: "the aeroplane", example: { jp: "Das Flugzeug nach Wien ist voll.", en: "The plane to Vienna is full." }, accept: ["the aeroplane", "the plane", "the airplane"], hint: "Flug, flight, plus Zeug, gear — a flight-thing. German names machines this way constantly." },
        { id: "de-u18l1-dasfahrrad", type: "vocab", front: "das Fahrrad", reading: "dasfahrrad", meaning: "the bicycle", example: { jp: "Mein Fahrrad ist im Keller.", en: "My bicycle is in the cellar." }, drill: { jp: "Das Fahrrad ist im Keller", en: "The bicycle is in the cellar" }, accept: ["the bicycle", "the bike"], hint: "Fahr, from fahren, plus Rad, wheel. Everyone says das Rad for short." },
        { id: "de-u18l1-dasschiff", type: "vocab", front: "das Schiff", reading: "dasschiff", meaning: "the ship", example: { jp: "Das Schiff ist sehr groß und weiß.", en: "The ship is very big and white." }, accept: ["the ship", "the boat"], hint: "Ship and Schiff are the same word — German writes the sh sound as sch." },
      ],
    },
    {
      id: "de-u18l2",
      unit: 18,
      lesson: 2,
      title: "Am Bahnhof",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Buy a ticket, find your stop, read the timetable, and say where you are going.",
      items: [
        { id: "de-u18l2-derflughafen", type: "vocab", front: "der Flughafen", reading: "derflughafen", meaning: "the airport", example: { jp: "Der Flughafen ist weit von der Stadt.", en: "The airport is far from the city." }, accept: ["the airport"], hint: "Flug, flight, plus Hafen, harbour — a harbour for flights, which is exactly what an airport is." },
        { id: "de-u18l2-diehaltestelle", type: "vocab", front: "die Haltestelle", reading: "diehaltestelle", meaning: "the stop", example: { jp: "Die Haltestelle ist neben der Post.", en: "The stop is next to the post office." }, accept: ["the stop", "the bus stop"], hint: "Halte, from halten to stop, plus Stelle, place — the place where it stops." },
        { id: "de-u18l2-diefahrkarte", type: "vocab", front: "die Fahrkarte", reading: "diefahrkarte", meaning: "the ticket", example: { jp: "Eine Fahrkarte nach Hamburg kostet vierzig Euro.", en: "A ticket to Hamburg costs forty euros." }, drill: { jp: "Die Fahrkarte ist im Koffer", en: "The ticket is in the suitcase" }, accept: ["the ticket"], hint: "Fahr plus Karte, both from u7 — but the compound is a fixed word, and das Ticket is just as common." },
        { id: "de-u18l2-derfahrplan", type: "vocab", front: "der Fahrplan", reading: "derfahrplan", meaning: "the timetable", example: { jp: "Der Fahrplan ist dort an der Wand.", en: "The timetable is on the wall over there." }, accept: ["the timetable", "the schedule"], hint: "Every German station has one on the wall — yellow for departures, white for arrivals." },
        { id: "de-u18l2-dasziel", type: "vocab", front: "das Ziel", reading: "dasziel", meaning: "the destination", example: { jp: "Mein Ziel ist München.", en: "My destination is Munich." }, drill: { jp: "Das Ziel ist München", en: "The destination is Munich" }, accept: ["the destination", "the goal", "the target"], hint: "Where you are headed, and also a goal in life. Note the ie — said zeel." },
        { id: "de-u18l2-warten", type: "vocab", front: "warten", reading: "warten", meaning: "to wait", example: { jp: "Wir warten hier auf den Bus.", en: "We are waiting for the bus here." }, accept: ["to wait", "to wait for"], hint: "warten AUF plus the accusative — you wait on something, not for it, in German." },
      ],
    },
    {
      id: "de-u18l3",
      unit: 18,
      lesson: 3,
      title: "Unterwegs",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe a journey as it happens: departing, changing, arriving, and how long it takes.",
      items: [
        { id: "de-u18l3-abfahren", type: "vocab", front: "abfahren", reading: "abfahren", meaning: "to depart", example: { jp: "Der Zug fährt um acht Uhr ab.", en: "The train departs at eight o'clock." }, accept: ["to depart", "to leave", "to set off"], hint: "Separable: the ab- goes to the end — der Zug fährt … ab. From fahren, but you would never guess depart from drive." },
        { id: "de-u18l3-ankommen", type: "vocab", front: "ankommen", reading: "ankommen", meaning: "to arrive", example: { jp: "Wir kommen um zehn Uhr in Wien an.", en: "We arrive in Vienna at ten o'clock." }, accept: ["to arrive", "to get there"], hint: "The other half of abfahren, and separable in the same way: wir kommen … an." },
        { id: "de-u18l3-einsteigen", type: "vocab", front: "einsteigen", reading: "einsteigen", meaning: "to board", example: { jp: "Bitte einsteigen!", en: "All aboard, please!" }, drill: { jp: "Bitte jetzt einsteigen", en: "Please board now" }, accept: ["to board", "to get on", "to get in"], hint: "The announcement you hear on every German platform. steigen means to climb — you climb in." },
        { id: "de-u18l3-umsteigen", type: "vocab", front: "umsteigen", reading: "umsteigen", meaning: "to change trains", example: { jp: "In Köln steigen wir um.", en: "We change trains in Cologne." }, drill: { jp: "Bitte in Köln umsteigen", en: "Please change in Cologne" }, accept: ["to change trains", "to change", "to transfer"], hint: "um- means around or over: you climb over into another train. The single most useful travel verb in Germany." },
        { id: "de-u18l3-dauern", type: "vocab", front: "dauern", reading: "dauern", meaning: "to last", example: { jp: "Die Reise dauert drei Stunden.", en: "The journey lasts three hours." }, drill: { jp: "Die Reisen dauern drei Stunden", en: "The journeys take three hours" }, accept: ["to last", "to take (time)"], hint: "Only about time, and the subject is the event: die Fahrt dauert lange, the trip takes a long time." },
        { id: "de-u18l3-diegrenze", type: "vocab", front: "die Grenze", reading: "diegrenze", meaning: "the border", example: { jp: "Nach der Grenze sind wir in Österreich.", en: "After the border we are in Austria." }, drill: { jp: "Die Grenze ist nicht weit", en: "The border is not far" }, accept: ["the border", "the boundary", "the limit"], hint: "Also a limit in the abstract sense. English borrowed it late and unusually — from Polish, through German." },
      ],
    },
    {
      id: "de-u18l4",
      unit: 18,
      lesson: 4,
      title: "Im Urlaub",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a holiday: where you are going, what you are taking, and what you need to cross a border.",
      items: [
        { id: "de-u18l4-derurlaub", type: "vocab", front: "der Urlaub", reading: "derurlaub", meaning: "the holiday", example: { jp: "Im Urlaub sind wir immer in Österreich.", en: "On holiday we are always in Austria." }, drill: { jp: "Der Urlaub ist sehr schön", en: "The holiday is very lovely" }, accept: ["the holiday", "the vacation", "the leave"], hint: "Time off work. School holidays are die Ferien — German keeps the two apart." },
        { id: "de-u18l4-derkoffer", type: "vocab", front: "der Koffer", reading: "derkoffer", meaning: "the suitcase", example: { jp: "Mein Koffer ist zu schwer.", en: "My suitcase is too heavy." }, drill: { jp: "Der Koffer ist sehr schwer", en: "The suitcase is very heavy" }, accept: ["the suitcase", "the case"], hint: "Plural is identical: ein Koffer, zwei Koffer. English coffer is the same word, and once meant the same box." },
        { id: "de-u18l4-dasgepack", type: "vocab", front: "das Gepäck", reading: "dasgepack", meaning: "the luggage", example: { jp: "Das Gepäck ist jetzt im Zug.", en: "The luggage is on the train now." }, accept: ["the luggage", "the baggage"], hint: "Never plural, exactly like English luggage: das Gepäck ist, the luggage is." },
        { id: "de-u18l4-dasausland", type: "vocab", front: "das Ausland", reading: "dasausland", meaning: "abroad", example: { jp: "Meine Tochter arbeitet im Ausland.", en: "My daughter works abroad." }, drill: { jp: "Das Ausland ist weit", en: "Abroad is far away" }, accept: ["abroad", "foreign countries", "overseas"], hint: "A noun where English uses an adverb: im Ausland, in the abroad. Aus, out, plus Land." },
        { id: "de-u18l4-derpass", type: "vocab", front: "der Pass", reading: "derpass", meaning: "the passport", example: { jp: "Mein Pass ist in der Tasche.", en: "My passport is in the bag." }, drill: { jp: "Der Pass ist im Koffer", en: "The passport is in the suitcase" }, accept: ["the passport"], hint: "Short for der Reisepass. Nothing to do with passen, to fit, which you met in u17." },
        { id: "de-u18l4-diewelt", type: "vocab", front: "die Welt", reading: "diewelt", meaning: "the world", example: { jp: "Die Welt ist groß und ich habe wenig Zeit.", en: "The world is big and I have little time." }, drill: { jp: "Die Welt ist sehr groß", en: "The world is very big" }, accept: ["the world"], hint: "Auf der Welt, in the world. Die ganze Welt is the whole world." },
      ],
    },
  ],
};
