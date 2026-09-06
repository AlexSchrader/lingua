// DE Unit 15 — Zu Hause (slot: vocabulary 1) — A1
// Block 3 (u15–u20). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT. The scaffold called u15–u20 "Vocabulary 1..6",
// which marks the slot and not a theme, so block 3's first job was to pick six
// themes that close what u1–u14 actually left open. u7 "Die Stadt" took the
// buildings a learner walks past — das Haus, die Wohnung, der Bahnhof — but
// nothing inside one. That is this unit: rooms, furniture, and the things in a
// room you point at every day.
//
// Rejected as already taught: die Küche and die Tür (both u1 — the sounds unit
// spent them on ü and ie), das Haus and die Wohnung (u7).
// Rejected as the same lexeme: das Wohnzimmer (wohnen u1 + das Zimmer here, so a
// learner with both gets it free), die Größe (~groß u1).
// Kept deliberately, both compounds of a word taught elsewhere: das Schlafzimmer
// and der Kühlschrank. u11 set the precedent with das Krankenhaus over u7's das
// Haus — a German compound whose meaning you cannot assemble from its parts is a
// word, not a derivation, and neither "sleep-room" nor "cool-cupboard" is
// guessable from Schlaf/kühl, which are not taught at all.
// FREE: Sofa, Balkon, Lampe, Meter | Betten, Stühle, Zimmer, Fenster, Schlüssel, Bilder, Wände, Möbel
export const DE_UNIT15 = {
  id: "de-u15",
  lang: "de",
  title: "Zu Hause",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "de-u15l1",
      unit: 15,
      lesson: 1,
      title: "Die Räume",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the rooms of a home and say which one you are in: Ich bin im Bad.",
      items: [
        { id: "de-u15l1-daszimmer", type: "vocab", front: "das Zimmer", reading: "daszimmer", meaning: "the room", example: { jp: "Das Zimmer ist klein, aber sehr schön.", en: "The room is small, but very beautiful." }, accept: ["the room"], hint: "One of the handful of German nouns whose plural is identical to the singular: ein Zimmer, zwei Zimmer." },
        { id: "de-u15l1-dasschlafzimmer", type: "vocab", front: "das Schlafzimmer", reading: "dasschlafzimmer", meaning: "the bedroom", example: { jp: "Im Schlafzimmer ist es sehr ruhig.", en: "It is very quiet in the bedroom." }, drill: { jp: "Das Schlafzimmer ist sehr klein", en: "The bedroom is very small" }, accept: ["the bedroom"], hint: "Schlaf + Zimmer. German builds rooms this way, and the last noun always decides the gender — das Zimmer, so das Schlafzimmer." },
        { id: "de-u15l1-dasbad", type: "vocab", front: "das Bad", reading: "dasbad", meaning: "the bathroom", example: { jp: "Das Bad ist hinter der Küche.", en: "The bathroom is behind the kitchen." }, accept: ["the bathroom", "the bath"], hint: "Short for das Badezimmer, and far more common. It also means a bath you sit in." },
        { id: "de-u15l1-derflur", type: "vocab", front: "der Flur", reading: "derflur", meaning: "the hallway", example: { jp: "Der Flur ist lang und dunkel.", en: "The hallway is long and dark." }, accept: ["the hallway", "the corridor", "the hall"], hint: "The passage the front door opens into. Nothing to do with English floor — that is der Boden." },
        { id: "de-u15l1-dergarten", type: "vocab", front: "der Garten", reading: "dergarten", meaning: "the garden", example: { jp: "Im Garten ist es jetzt sehr schön.", en: "It is very lovely in the garden now." }, drill: { jp: "Der Garten ist sehr schön", en: "The garden is very beautiful" }, accept: ["the garden", "the yard"], hint: "English garden is the same word, one consonant shifted. Der Kindergarten is literally the children's garden." },
        { id: "de-u15l1-derkeller", type: "vocab", front: "der Keller", reading: "derkeller", meaning: "the cellar", example: { jp: "Im Keller ist es immer kalt.", en: "It is always cold in the cellar." }, drill: { jp: "Der Keller ist kalt", en: "The cellar is cold" }, accept: ["the cellar", "the basement"], hint: "Almost every German house has one, and it is where the bicycles and the beer live." },
      ],
    },
    {
      id: "de-u15l2",
      unit: 15,
      lesson: 2,
      title: "Die Möbel",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the furniture in a room and say what is where, using the dative you learned in u14: Der Stuhl ist neben dem Tisch.",
      items: [
        { id: "de-u15l2-dasbett", type: "vocab", front: "das Bett", reading: "dasbett", meaning: "the bed", example: { jp: "Das Bett im Schlafzimmer ist neu.", en: "The bed in the bedroom is new." }, accept: ["the bed"], hint: "Ins Bett gehen is to go to bed. Two t's — one is not enough." },
        { id: "de-u15l2-dertisch", type: "vocab", front: "der Tisch", reading: "dertisch", meaning: "the table", example: { jp: "Das Brot ist auf dem Tisch.", en: "The bread is on the table." }, drill: { jp: "Der Tisch ist sehr groß", en: "The table is very big" }, accept: ["the table", "the desk"], hint: "Auf dem Tisch, on the table — dative, because nothing is moving. Also the word for a desk." },
        { id: "de-u15l2-derstuhl", type: "vocab", front: "der Stuhl", reading: "derstuhl", meaning: "the chair", example: { jp: "Der Stuhl ist neben dem Tisch.", en: "The chair is next to the table." }, accept: ["the chair"], hint: "Plural umlauts: ein Stuhl, zwei Stühle. English stool is the same root, but a Stuhl has a back." },
        { id: "de-u15l2-derschrank", type: "vocab", front: "der Schrank", reading: "derschrank", meaning: "the cupboard / wardrobe", example: { jp: "Der Schrank ist zu groß für das Zimmer.", en: "The wardrobe is too big for the room." }, accept: ["the cupboard", "the wardrobe", "the closet"], hint: "Any tall closed piece of furniture — clothes, dishes or books. The one in the kitchen is a Küchenschrank." },
        { id: "de-u15l2-dassofa", type: "vocab", front: "das Sofa", reading: "dassofa", meaning: "the sofa", example: { jp: "Wir essen oft zusammen auf dem Sofa.", en: "We often eat together on the sofa." }, drill: { jp: "Das Sofa ist neu", en: "The sofa is new" }, accept: ["the sofa", "the couch"], hint: "Spelled as in English and neuter. Die Couch also exists and is feminine." },
        { id: "de-u15l2-dasregal", type: "vocab", front: "das Regal", reading: "dasregal", meaning: "the shelf", example: { jp: "Die Bücher sind im Regal.", en: "The books are on the shelf." }, drill: { jp: "Das Regal ist neu und groß", en: "The shelf is new and big" }, accept: ["the shelf", "the shelves", "the bookcase"], hint: "A whole shelf unit, not one plank. Stress the second syllable: re-GAL." },
      ],
    },
    {
      id: "de-u15l3",
      unit: 15,
      lesson: 3,
      title: "Im Zimmer",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe the room itself — its window, walls, floor and stairs — and say where something hangs or stands.",
      items: [
        { id: "de-u15l3-dasfenster", type: "vocab", front: "das Fenster", reading: "dasfenster", meaning: "the window", example: { jp: "Das Fenster im Bad ist sehr klein.", en: "The window in the bathroom is very small." }, accept: ["the window"], hint: "Another noun whose plural does not change: ein Fenster, drei Fenster." },
        { id: "de-u15l3-diewand", type: "vocab", front: "die Wand", reading: "diewand", meaning: "the wall", example: { jp: "Die Wand hinter dem Bett ist blau.", en: "The wall behind the bed is blue." }, accept: ["the wall"], hint: "An inside wall. The wall around a garden is die Mauer — German splits what English calls one thing." },
        { id: "de-u15l3-derboden", type: "vocab", front: "der Boden", reading: "derboden", meaning: "the floor", example: { jp: "Der Boden ist kalt, aber sauber.", en: "The floor is cold, but clean." }, accept: ["the floor", "the ground"], hint: "The surface you stand on, indoors or out. A floor of a building is der Stock." },
        { id: "de-u15l3-dietreppe", type: "vocab", front: "die Treppe", reading: "dietreppe", meaning: "the stairs", example: { jp: "Die Treppe in den Keller ist sehr alt.", en: "The stairs down to the cellar are very old." }, accept: ["the stairs", "the staircase", "the steps"], hint: "Singular in German where English is plural: die Treppe ist, the stairs are." },
        { id: "de-u15l3-dielampe", type: "vocab", front: "die Lampe", reading: "dielampe", meaning: "the lamp", example: { jp: "Die Lampe über dem Tisch ist kaputt.", en: "The lamp above the table is broken." }, accept: ["the lamp"], hint: "Über dem Tisch — dative again, because the lamp is not going anywhere." },
        { id: "de-u15l3-derteppich", type: "vocab", front: "der Teppich", reading: "derteppich", meaning: "the carpet", example: { jp: "Der Teppich im Flur ist alt und schmutzig.", en: "The carpet in the hallway is old and dirty." }, accept: ["the carpet", "the rug"], hint: "Both a fitted carpet and a loose rug. The ch at the end is the soft one, as in ich." },
      ],
    },
    {
      id: "de-u15l4",
      unit: 15,
      lesson: 4,
      title: "Sachen im Haus",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the everyday objects in a home and say who something belongs to: Das ist mein Schlüssel.",
      items: [
        { id: "de-u15l4-derschlussel", type: "vocab", front: "der Schlüssel", reading: "derschlussel", meaning: "the key", example: { jp: "Mein Schlüssel ist nicht hier.", en: "My key is not here." }, drill: { jp: "Der Schlüssel ist nicht hier", en: "The key is not here" }, accept: ["the key"], hint: "Plural is identical: ein Schlüssel, zwei Schlüssel. You may type schlussel or schlüssel — the umlaut folds." },
        { id: "de-u15l4-dasbild", type: "vocab", front: "das Bild", reading: "dasbild", meaning: "the picture", example: { jp: "Das Bild an der Wand ist sehr alt.", en: "The picture on the wall is very old." }, accept: ["the picture", "the painting", "the photo"], hint: "A picture of any kind — painted, printed or photographed." },
        { id: "de-u15l4-derspiegel", type: "vocab", front: "der Spiegel", reading: "derspiegel", meaning: "the mirror", example: { jp: "Im Bad ist ein Spiegel.", en: "There is a mirror in the bathroom." }, drill: { jp: "Der Spiegel ist im Bad", en: "The mirror is in the bathroom" }, accept: ["the mirror"], hint: "Also the name of Germany's best-known news magazine, Der Spiegel." },
        { id: "de-u15l4-daslicht", type: "vocab", front: "das Licht", reading: "daslicht", meaning: "the light (illumination)", example: { jp: "Das Licht im Flur ist noch an.", en: "The light in the hallway is still on." }, accept: ["the light"], hint: "The thing that shines, not the adjective — hell is bright and leicht is light in weight (both u10)." },
        { id: "de-u15l4-derkuhlschrank", type: "vocab", front: "der Kühlschrank", reading: "derkuhlschrank", meaning: "the fridge", example: { jp: "Die Milch ist im Kühlschrank.", en: "The milk is in the fridge." }, drill: { jp: "Der Kühlschrank ist sehr kalt", en: "The fridge is very cold" }, accept: ["the fridge", "the refrigerator"], hint: "Kühl, cool, plus Schrank, cupboard — a cool cupboard, which is exactly what it is." },
        { id: "de-u15l4-daskissen", type: "vocab", front: "das Kissen", reading: "daskissen", meaning: "the cushion", example: { jp: "Das Kissen auf dem Sofa ist rot.", en: "The cushion on the sofa is red." }, accept: ["the cushion", "the pillow"], hint: "Both the one on the sofa and the one you sleep on — German does not split them." },
      ],
    },
  ],
};
