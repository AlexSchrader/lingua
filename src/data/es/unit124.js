// ES Unit 124 — Materials and objects (slot: materials) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: What things are MADE of — timber, alloy, glass, textile, fibre, and the parts
//         and fittings of objects.
//   NOT:  Describing surfaces and condition at B1 (u75) and the arts of making (u121).
//
// Rejected as already taught: el engranaje (u90). u75 owns the surface adjectives
// (liso, áspero, grueso, fino), so this unit stays with the substances and the parts
// themselves and leaves the describing to u75.
export const ES_UNIT124 = {
  id: "es-u124",
  lang: "es",
  title: "Materiales y objetos",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "es-u124l1",
      unit: 124,
      lesson: 1,
      title: "La madera, la piedra y el vidrio",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a building or an object is made of: timber, oak, marble, clay and glass.",
      items: [
        { id: "es-u124l1-lamadera", type: "vocab", front: "la madera", reading: "lamadera", meaning: "the wood / timber", example: { jp: "Todas las sillas de la casa son de madera.", en: "All the chairs in the house are wooden." }, accept: ["the wood", "the timber"], hint: "The material. A tree is un árbol and firewood is la leña — Spanish keeps the three apart." },
        { id: "es-u124l1-elroble", type: "vocab", front: "el roble", reading: "elroble", meaning: "the oak", example: { jp: "La mesa es de roble y pesa muchísimo.", en: "The table is oak and weighs a great deal." }, accept: ["the oak", "the oak tree", "the oak wood"], hint: "Both the tree and the timber. Estar como un roble = to be in excellent health." },
        { id: "es-u124l1-laviga", type: "vocab", front: "la viga", reading: "laviga", meaning: "the beam", example: { jp: "Las vigas de la casa son muy antiguas.", en: "The beams of the house are very old." }, accept: ["the beam", "the joist", "the girder"], hint: "Wood, steel or concrete — the horizontal piece that carries the weight." },
        { id: "es-u124l1-elmarmol", type: "vocab", front: "el mármol", reading: "elmarmol", meaning: "the marble", example: { jp: "La escultura es de mármol blanco.", en: "The sculpture is of white marble." }, accept: ["the marble"], hint: "Stressed on the first syllable: MÁR-mol. De mármol also describes a face that shows nothing." },
        { id: "es-u124l1-laarcilla", type: "vocab", front: "la arcilla", reading: "laarcilla", meaning: "the clay", example: { jp: "Trabaja la arcilla con las manos, sin herramientas.", en: "She works the clay with her hands, without tools." }, accept: ["the clay"], hint: "The raw material of pottery. El barro is the same stuff when it is mud on the ground." },
        { id: "es-u124l1-elvidrio", type: "vocab", front: "el vidrio", reading: "elvidrio", meaning: "the glass (material)", example: { jp: "Las botellas de vidrio se reciclan aparte.", en: "Glass bottles are recycled separately." }, accept: ["the glass", "the glass material"], hint: "The substance. El cristal is the finer or clearer kind, and in Spain also the everyday word for a windowpane." },
      ],
    },
    {
      id: "es-u124l2",
      unit: 124,
      lesson: 2,
      title: "El metal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name metals and what is made from them: iron, steel, copper, bronze, an alloy and wire.",
      items: [
        { id: "es-u124l2-elhierro", type: "vocab", front: "el hierro", reading: "elhierro", meaning: "the iron", example: { jp: "La puerta es de hierro y pesa mucho.", en: "The gate is made of iron and is very heavy." }, accept: ["the iron"], hint: "Silent h, as always. The metal, not the appliance — that is la plancha." },
        { id: "es-u124l2-elacero", type: "vocab", front: "el acero", reading: "elacero", meaning: "the steel", example: { jp: "El puente nuevo es de acero y cristal.", en: "The new bridge is steel and glass." }, accept: ["the steel"], hint: "Iron worked with carbon. Acero inoxidable is stainless steel, on every kitchen label." },
        { id: "es-u124l2-elcobre", type: "vocab", front: "el cobre", reading: "elcobre", meaning: "the copper", example: { jp: "El precio del cobre ha subido mucho este año.", en: "The price of copper has risen a lot this year." }, accept: ["the copper"], hint: "The reddish metal of pipes and wiring. Chile's great export, and the reason the word is in the news there." },
        { id: "es-u124l2-elbronce", type: "vocab", front: "el bronce", reading: "elbronce", meaning: "the bronze", example: { jp: "En la plaza hay una escultura de bronce muy antigua.", en: "In the square there is a very old bronze sculpture." }, accept: ["the bronze"], hint: "Copper and tin together — the first alloy people made, and still the metal of statues." },
        { id: "es-u124l2-laaleacion", type: "vocab", front: "la aleación", reading: "laaleacion", meaning: "the alloy", example: { jp: "Usan una aleación muy ligera.", en: "They use a very light alloy." }, accept: ["the alloy", "the metal mixture"], hint: "Two metals melted into one material with new properties. El bronce is the classic example." },
        { id: "es-u124l2-elalambre", type: "vocab", front: "el alambre", reading: "elalambre", meaning: "the wire", example: { jp: "Arregló la silla con un alambre fino.", en: "He fixed the chair with a thin wire." }, accept: ["the wire"], hint: "Bare metal wire. An electrical cable with its cover is un cable — the two are not interchangeable." },
      ],
    },
    {
      id: "es-u124l3",
      unit: 124,
      lesson: 3,
      title: "La tela y la fibra",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what something is woven from: cloth, linen, cotton, silk, leather and fibre in general.",
      items: [
        { id: "es-u124l3-lafibra", type: "vocab", front: "la fibra", reading: "lafibra", meaning: "the fibre", example: { jp: "Es una fibra muy resistente que dura años.", en: "It is a very hard-wearing fibre that lasts for years." }, accept: ["the fibre", "the fiber", "the strand"], hint: "The single thread the cloth is made of, natural or not. Fibra óptica and tener mucha fibra, to be tough, are the same word." },
        { id: "es-u124l3-latela", type: "vocab", front: "la tela", reading: "latela", meaning: "the cloth / piece of fabric", example: { jp: "Compró dos metros de tela para las cortinas.", en: "She bought two metres of cloth for the curtains." }, accept: ["the cloth", "the material", "the fabric"], hint: "The stuff you buy by the metre and cut. La fibra is the thread it is spun from; la tela is the piece in your hands." },
        { id: "es-u124l3-ellino", type: "vocab", front: "el lino", reading: "ellino", meaning: "the linen", example: { jp: "En verano lleva camisas de lino.", en: "In summer he wears linen shirts." }, accept: ["the linen", "the flax"], hint: "The plant and its cloth. Its great virtue and its great fault are the same: it wrinkles." },
        { id: "es-u124l3-elalgodon", type: "vocab", front: "el algodón", reading: "elalgodon", meaning: "the cotton", example: { jp: "Esta camisa es de algodón fino.", en: "This shirt is made of fine cotton." }, accept: ["the cotton"], hint: "From the Arabic al-qutn — one of the many Spanish words that came in that way." },
        { id: "es-u124l3-laseda", type: "vocab", front: "la seda", reading: "laseda", meaning: "the silk", example: { jp: "El vestido de seda costó más que todo lo demás.", en: "The silk dress cost more than everything else." }, accept: ["the silk"], hint: "Como la seda means it went perfectly smoothly — of a journey, a meeting or an engine." },
        { id: "es-u124l3-elcuero", type: "vocab", front: "el cuero", reading: "elcuero", meaning: "the leather", example: { jp: "Los zapatos son de cuero y se pueden arreglar.", en: "The shoes are leather and can be repaired." }, accept: ["the leather", "the hide"], hint: "In Spain la piel is often used for leather goods; cuero is the material everywhere in Latin America." },
      ],
    },
    {
      id: "es-u124l4",
      unit: 124,
      lesson: 4,
      title: "Las piezas y los ajustes",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the small parts that hold an object together and make it work: screw, nut, hinge, lever, handle and spring.",
      items: [
        { id: "es-u124l4-eltornillo", type: "vocab", front: "el tornillo", reading: "eltornillo", meaning: "the screw", example: { jp: "Falta un tornillo y por eso se mueve la puerta.", en: "There is a screw missing and that is why the door moves." }, accept: ["the screw", "the bolt"], hint: "Le falta un tornillo is said of a person who is not quite right in the head." },
        { id: "es-u124l4-latuerca", type: "vocab", front: "la tuerca", reading: "latuerca", meaning: "the nut", example: { jp: "Aprieta bien la tuerca antes de seguir.", en: "Tighten the nut properly before going on." }, accept: ["the nut", "the nut of a bolt"], hint: "The partner of el tornillo. Apretar las tuercas = to turn the screw on somebody." },
        { id: "es-u124l4-labisagra", type: "vocab", front: "la bisagra", reading: "labisagra", meaning: "the hinge", example: { jp: "Las bisagras hacen ruido cada vez que abres.", en: "The hinges make a noise every time you open it." }, accept: ["the hinge"], hint: "Doors, lids and glasses. In politics, a party bisagra is the one that decides which side governs." },
        { id: "es-u124l4-lapalanca", type: "vocab", front: "la palanca", reading: "lapalanca", meaning: "the lever", example: { jp: "Con una palanca larga se mueve sin esfuerzo.", en: "With a long lever it moves effortlessly." }, accept: ["the lever", "the crowbar"], hint: "The machine and the metaphor: una palanca de cambio is a gear lever, and tener palanca is to have connections." },
        { id: "es-u124l4-elmango", type: "vocab", front: "el mango", reading: "elmango", meaning: "the handle", example: { jp: "Se rompió el mango y ya no se puede usar.", en: "The handle broke and it can no longer be used." }, accept: ["the handle", "the haft", "the grip"], hint: "The handle you hold in your fist — knives, hammers, pans. A door handle is el picaporte or la manilla. The fruit is the same word." },
        { id: "es-u124l4-elmuelle", type: "vocab", front: "el muelle", reading: "elmuelle", meaning: "the spring", example: { jp: "Se rompió un muelle y la puerta ya no funciona bien.", en: "A spring broke and the door no longer works properly." }, accept: ["the spring", "the coil", "the coiled spring"], hint: "The coiled metal one, in a mattress or a mechanism. The same noun is also a quay — el muelle del puerto." },
      ],
    },
  ],
};
