// DE Unit 47 — Mengen und Behälter (slot: vocabulary 8 (A2)) — A2
// Block 3 (u41–u50), coverage pass. Conventions: see de/unit1.js.
//
// THEME: containers and amounts — the everyday nouns for what things come in
// (die Flasche, das Glas, die Tüte, das Stück are already taught; the rest of the
// set is open). Fronts checked at FRONT and LEXEME level against A1 + all three A2
// blocks. READING-FOLD NOTE: "gießen" carries a hand-written reading (giessen) —
// ß does not fold (see de/unit1.js). Checked füllen→fullen against fühlen→fuhlen:
// distinct, no clash. Examples and drills use only vocab introduced at or before u47:
// verified by `node scripts/scope-strict-de.mjs 45 50`, which applies NO inflection
// excuse and reports 0 out-of-scope tokens across u45-u50.
// fast is carded in l2 as a FALSE FRIEND: an English reader parses "fast leer" as
// 'quickly empty'. It is used before it is carded nowhere; the card precedes die Tube.
export const DE_UNIT47 = {
  id: "de-u47",
  lang: "de",
  title: "Mengen und Behälter",
  order: 47,
  stage: "a2",
  lessons: [
    {
      id: "de-u47l1",
      unit: 47,
      lesson: 1,
      title: "Kartons und Tüten",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what things are packed in: parcel, box, packet, sack, bag.",
      items: [
        { id: "de-u47l1-daspaket", type: "vocab", front: "das Paket", reading: "daspaket", meaning: "the parcel", example: { jp: "Das Paket ist heute mit der Post gekommen.", en: "The parcel came with the post today." }, drill: { jp: "Das Paket ist schwer", en: "The parcel is heavy" }, accept: ["parcel", "the parcel", "the package"], hint: "A posted package. Also a software or holiday package." },
        { id: "de-u47l1-derkarton", type: "vocab", front: "der Karton", reading: "derkarton", meaning: "the cardboard box", example: { jp: "Die Bücher sind in einem großen Karton.", en: "The books are in a big cardboard box." }, drill: { jp: "Der Karton ist leer", en: "The box is empty" }, accept: ["cardboard box", "the box", "the carton", "the cardboard"], hint: "The material and a box made of it. Said 'kar-TONG'." },
        { id: "de-u47l1-dieschachtel", type: "vocab", front: "die Schachtel", reading: "dieschachtel", meaning: "the small box", example: { jp: "In der Schachtel sind alte Fotos.", en: "There are old photos in the box." }, drill: { jp: "Die Schachtel ist klein", en: "The box is small" }, accept: ["small box", "the box", "the packet"], hint: "A small box — for matches, chocolates. eine Schachtel Pralinen." },
        { id: "de-u47l1-diepackung", type: "vocab", front: "die Packung", reading: "diepackung", meaning: "the pack", example: { jp: "Die Packung Nudeln ist leer.", en: "The packet of pasta is empty." }, drill: { jp: "Die Packung ist leer", en: "The pack is empty" }, accept: ["pack", "the pack", "the packet"], hint: "From packen, to pack. eine Packung Nudeln, a packet of pasta." },
        { id: "de-u47l1-dersack", type: "vocab", front: "der Sack", reading: "dersack", meaning: "the sack", example: { jp: "Der Sack ist voll mit Kartoffeln.", en: "The sack is full of potatoes." }, drill: { jp: "Der Sack ist sehr schwer", en: "The sack is very heavy" }, accept: ["sack", "the sack", "the bag"], hint: "A big rough bag. Plural has an umlaut: die Säcke." },
        { id: "de-u47l1-derbeutel", type: "vocab", front: "der Beutel", reading: "derbeutel", meaning: "the bag", example: { jp: "Ich trage die Äpfel in einem Beutel.", en: "I carry the apples in a bag." }, drill: { jp: "Der Beutel ist voll", en: "The bag is full" }, accept: ["bag", "the bag", "the pouch"], hint: "A soft small bag. der Teebeutel = the teabag." },
      ],
    },
    {
      id: "de-u47l2",
      unit: 47,
      lesson: 2,
      title: "Dosen und Kannen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what liquids and food come in: can, barrel, tube, jug, pot, tank.",
      items: [
        { id: "de-u47l2-diedose", type: "vocab", front: "die Dose", reading: "diedose", meaning: "the can", example: { jp: "In der Dose ist noch Suppe.", en: "There is still soup in the can." }, drill: { jp: "Die Dose ist kalt", en: "The can is cold" }, accept: ["can", "the can", "the tin"], hint: "A metal tin, or a small plastic box with a lid." },
        { id: "de-u47l2-dasfass", type: "vocab", front: "das Fass", reading: "dasfass", meaning: "the barrel", example: { jp: "Das Fass ist voll mit Wasser.", en: "The barrel is full of water." }, drill: { jp: "Das Fass ist sehr groß", en: "The barrel is very big" }, accept: ["barrel", "the barrel", "the cask"], hint: "Bier vom Fass = beer on tap. (Ends in ss, not ß.)" },
        { id: "de-u47l2-fast", type: "vocab", front: "fast", reading: "fast", meaning: "almost", example: { jp: "Es ist fast acht Uhr.", en: "It is almost eight o'clock." }, drill: { jp: "Das Fass ist fast voll", en: "The barrel is almost full" }, accept: ["almost", "nearly"], hint: "A FALSE FRIEND: German fast means almost, never quick. Quick is schnell." },
        { id: "de-u47l2-dietube", type: "vocab", front: "die Tube", reading: "dietube", meaning: "the tube", example: { jp: "Die Tube ist fast leer.", en: "The tube is almost empty." }, drill: { jp: "Die Tube ist klein", en: "The tube is small" }, accept: ["tube", "the tube"], hint: "A squeezable tube — toothpaste, glue. Not a train tube (that's die U-Bahn)." },
        { id: "de-u47l2-derkrug", type: "vocab", front: "der Krug", reading: "derkrug", meaning: "the jug", example: { jp: "Auf dem Tisch steht ein Krug Wasser.", en: "There is a jug of water on the table." }, drill: { jp: "Der Krug ist voll", en: "The jug is full" }, accept: ["jug", "the jug", "the pitcher"], hint: "A heavy jug or stein. Plural has an umlaut: die Krüge." },
        { id: "de-u47l2-diekanne", type: "vocab", front: "die Kanne", reading: "diekanne", meaning: "the pot", example: { jp: "Sie macht eine Kanne Kaffee.", en: "She makes a pot of coffee." }, drill: { jp: "Die Kanne ist heiß", en: "The pot is hot" }, accept: ["pot", "the pot", "the jug", "the pitcher"], hint: "For pouring — die Kaffeekanne, die Teekanne, die Gießkanne (watering can)." },
        { id: "de-u47l2-dertank", type: "vocab", front: "der Tank", reading: "dertank", meaning: "the tank", example: { jp: "Das Auto hat einen großen Tank.", en: "The car has a big tank." }, drill: { jp: "Der Tank ist voll", en: "The tank is full" }, accept: ["tank", "the tank", "the fuel tank"], hint: "A fuel or water tank. The verb tanken = to fill up with fuel." },
      ],
    },
    {
      id: "de-u47l3",
      unit: 47,
      lesson: 3,
      title: "Schüsseln und Eimer",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name open containers and their parts: bowl, bucket, vase, crate, lid, handle.",
      items: [
        { id: "de-u47l3-dieschussel", type: "vocab", front: "die Schüssel", reading: "dieschussel", meaning: "the bowl", example: { jp: "Der Salat ist in einer großen Schüssel.", en: "The salad is in a big bowl." }, drill: { jp: "Die Schüssel ist aus Glas", en: "The bowl is made of glass" }, accept: ["bowl", "the bowl"], hint: "A big serving bowl. A small one for eating is die Schale." },
        { id: "de-u47l3-dereimer", type: "vocab", front: "der Eimer", reading: "dereimer", meaning: "the bucket", example: { jp: "Sie holt einen Eimer Wasser.", en: "She fetches a bucket of water." }, drill: { jp: "Der Eimer ist voll", en: "The bucket is full" }, accept: ["bucket", "the bucket", "the pail"], hint: "der Mülleimer = the rubbish bin." },
        { id: "de-u47l3-dievase", type: "vocab", front: "die Vase", reading: "dievase", meaning: "the vase", example: { jp: "Die Blumen stehen in einer Vase.", en: "The flowers are standing in a vase." }, drill: { jp: "Die Vase ist sehr schön", en: "The vase is very beautiful" }, accept: ["vase", "the vase"], hint: "The 'V' is said as 'V' here, not 'F' — 'VAH-zeh'." },
        { id: "de-u47l3-diekiste", type: "vocab", front: "die Kiste", reading: "diekiste", meaning: "the crate", example: { jp: "Die Kiste ist zu schwer zum Tragen.", en: "The crate is too heavy to carry." }, drill: { jp: "Die Kiste ist aus Holz", en: "The crate is made of wood" }, accept: ["crate", "the crate", "the box"], hint: "A sturdy wooden or plastic crate — eine Kiste Bier." },
        { id: "de-u47l3-derdeckel", type: "vocab", front: "der Deckel", reading: "derdeckel", meaning: "the lid", example: { jp: "Der Deckel von der Dose ist weg.", en: "The lid of the can is gone." }, drill: { jp: "Der Deckel ist zu", en: "The lid is shut" }, accept: ["lid", "the lid", "the cap", "the cover"], hint: "From decken, to cover. The top of a pot or jar." },
        { id: "de-u47l3-derhenkel", type: "vocab", front: "der Henkel", reading: "derhenkel", meaning: "the handle", example: { jp: "Der Henkel von der Kanne ist kaputt.", en: "The handle of the pot is broken." }, drill: { jp: "Der Henkel ist ab", en: "The handle has come off" }, accept: ["handle", "the handle"], hint: "The loop handle of a cup, bag or pot — distinct from der Griff, a grip you hold in the hand." },
      ],
    },
    {
      id: "de-u47l4",
      unit: 47,
      lesson: 4,
      title: "Füllen und leeren",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about amounts and filling: the amount, the container, the contents, fill, empty, pour.",
      items: [
        { id: "de-u47l4-diemenge", type: "vocab", front: "die Menge", reading: "diemenge", meaning: "the amount", example: { jp: "Eine große Menge Wasser läuft aus dem Fass.", en: "A large amount of water runs out of the barrel." }, drill: { jp: "Die Menge ist groß", en: "The amount is large" }, accept: ["amount", "the amount", "the quantity", "the crowd"], hint: "An amount or quantity — and also a crowd of people." },
        { id: "de-u47l4-derbehalter", type: "vocab", front: "der Behälter", reading: "derbehalter", meaning: "the container", example: { jp: "Im Behälter ist frisches Wasser.", en: "There is fresh water in the container." }, drill: { jp: "Der Behälter ist groß", en: "The container is big" }, accept: ["container", "the container", "the receptacle"], hint: "The general word for any container. From behalten, to keep/hold." },
        { id: "de-u47l4-derinhalt", type: "vocab", front: "der Inhalt", reading: "derinhalt", meaning: "the contents", example: { jp: "Was ist der Inhalt von dem Paket?", en: "What are the contents of the parcel?" }, drill: { jp: "Der Inhalt ist wichtig", en: "The contents are important" }, accept: ["contents", "the contents", "the content"], hint: "What is inside — also the contents of a book or a talk." },
        { id: "de-u47l4-fullen", type: "vocab", front: "füllen", reading: "fullen", meaning: "to fill", example: { jp: "Ich fülle das Glas mit Wasser.", en: "I fill the glass with water." }, drill: { jp: "Wir füllen die Flasche", en: "We fill the bottle" }, accept: ["to fill"], hint: "füllen mit = to fill with. ausfüllen = to fill in a form." },
        { id: "de-u47l4-leeren", type: "vocab", front: "leeren", reading: "leeren", meaning: "to empty", example: { jp: "Er leert den Eimer in den Garten.", en: "He empties the bucket into the garden." }, drill: { jp: "Wir leeren die Dose", en: "We empty the can" }, accept: ["to empty"], hint: "From leer, empty. The opposite of füllen." },
        { id: "de-u47l4-giessen", type: "vocab", front: "gießen", reading: "giessen", meaning: "to pour", example: { jp: "Ich gieße Wasser in das Glas.", en: "I pour water into the glass." }, drill: { jp: "Wir gießen die Blumen", en: "We water the flowers" }, accept: ["to pour", "to water"], hint: "To pour, and to water plants — die Blumen gießen. Note the ß: the reading is giessen." },
      ],
    },
  ],
};
