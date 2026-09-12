// NO Unit 35 — Kultur og fritid ("Culture and leisure") — A2
// Conventions are declared in no/unit1.js §1-§8 and bind every unit: indefinite
// noun fronts with en/ei/et (feminine marked ei), verbs headworded å + infinitive,
// ø written o and æ written ae in `reading`, example.jp holds the Norwegian, every
// item carries a tokenizable `drill`. At A2 the EXAMPLE may take a subordinate
// clause (at / fordi / hvis / når / mens, all A1); the DRILL stays simple.
//
// THE LINE THIS UNIT HOLDS: the arts as a DOMAIN, plus free-time built on top of
// A1. A1 already owns musikk, en film, en sang, ei bok, en kino and the verbs å
// danse, å synge, å spille, å lese — this unit does not re-teach any of them; it
// names the wider field (kultur, kunst, teater) and what you do in your own time.
// Cognate lemmas used in examples are declared FREE below.
//   FREE: interessant, populær, moderne, et museum, klassisk
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT35 = {
  id: "no-u35",
  lang: "no",
  title: "Kultur og fritid",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "no-u35l1",
      unit: 35,
      lesson: 1,
      title: "The arts",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the arts as a field — culture, art, the theatre, a concert, a painting, an artist — beyond the everyday music and film A1 already gave you.",
      items: [
        { id: "no-u35l1-enkultur", type: "vocab", front: "en kultur", reading: "enkultur", meaning: "culture", example: { jp: "Vi lærer om norsk kultur på skolen.", en: "We learn about Norwegian culture at school." }, accept: ["a culture"], drill: { jp: "En kultur kan være gammel", en: "A culture can be old" }, hint: "Masculine: en kultur → kulturen. Straight from Latin, as in English. The adjective is kulturell." },
        { id: "no-u35l1-enkunst", type: "vocab", front: "en kunst", reading: "enkunst", meaning: "art", example: { jp: "Bestemor er glad i kunst og musikk.", en: "Grandmother is fond of art and music." }, accept: ["an art", "the arts"], drill: { jp: "Musikk er en kunst", en: "Music is an art" }, hint: "en kunst → kunsten. glad i = fond of, from A1. Watch the near-twin kunstig, which means artificial." },
        { id: "no-u35l1-etteater", type: "vocab", front: "et teater", reading: "etteater", meaning: "theatre", example: { jp: "Vi går på teater når vi er i byen.", en: "We go to the theatre when we're in the city." }, accept: ["a theatre", "theater"], drill: { jp: "Byen har et teater", en: "The city has a theatre" }, hint: "Neuter: et teater → teateret. gå på teater, with no article, is 'to go to the theatre'. A play is et teaterstykke." },
        { id: "no-u35l1-enkonsert", type: "vocab", front: "en konsert", reading: "enkonsert", meaning: "concert", example: { jp: "Vi skal på konsert i kveld, hvis vi rekker det.", en: "We're going to a concert tonight, if we make it in time." }, accept: ["a concert", "gig"], drill: { jp: "Vi går på en konsert", en: "We go to a concert" }, hint: "en konsert → konserten. gå på konsert. The final t is pronounced." },
        { id: "no-u35l1-etmaleri", type: "vocab", front: "et maleri", reading: "etmaleri", meaning: "painting", example: { jp: "Dette maleriet er veldig gammelt og dyrt.", en: "This painting is very old and expensive." }, accept: ["a painting", "picture"], drill: { jp: "Hun har et maleri", en: "She has a painting" }, hint: "Neuter: et maleri → maleriet, plural malerier. From å male, to paint. The -eri ending names a place or product, and here it is neuter." },
        { id: "no-u35l1-enkunstner", type: "vocab", front: "en kunstner", reading: "enkunstner", meaning: "artist", example: { jp: "Broren min vil bli kunstner når han blir stor.", en: "My brother wants to be an artist when he grows up." }, accept: ["an artist"], drill: { jp: "En kunstner lager kunst", en: "An artist makes art" }, hint: "en kunstner → kunstneren. Built from kunst + -ner. Note bli kunstner drops the article: 'become an artist'." },
      ],
    },
    {
      id: "no-u35l2",
      unit: 35,
      lesson: 2,
      title: "Going out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a performance — a show, a star, a role, an exhibition — and say who performs and entertains.",
      items: [
        { id: "no-u35l2-enforestilling", type: "vocab", front: "en forestilling", reading: "enforestilling", meaning: "show", example: { jp: "Forestillingen begynner klokka sju, så vi må dra nå.", en: "The show starts at seven, so we have to set off now." }, accept: ["a performance", "showing"], drill: { jp: "Vi ser en forestilling", en: "We watch a show" }, hint: "en forestilling → forestillingen. Also a mental picture: jeg har ingen forestilling om det, 'I have no idea about it'." },
        { id: "no-u35l2-enstjerne", type: "vocab", front: "en stjerne", reading: "enstjerne", meaning: "star", example: { jp: "Han ble en stjerne etter den nye filmen.", en: "He became a star after the new film." }, accept: ["a star"], drill: { jp: "Hun er en stjerne", en: "She is a star" }, hint: "en stjerne → stjernen. stj is said like sh: SHER-ne. A film star and a star in the sky, the same word." },
        { id: "no-u35l2-enrolle", type: "vocab", front: "en rolle", reading: "enrolle", meaning: "role", example: { jp: "Hun spiller en viktig rolle i filmen.", en: "She plays an important role in the film." }, accept: ["a role", "a part"], drill: { jp: "Hun har en rolle", en: "She has a role" }, hint: "en rolle → rollen. å spille en rolle, to play a role — on a stage and in life alike." },
        { id: "no-u35l2-enutstilling", type: "vocab", front: "en utstilling", reading: "enutstilling", meaning: "exhibition", example: { jp: "Det er en ny utstilling i byen i dag.", en: "There's a new exhibition in town today." }, accept: ["an exhibition", "a display"], drill: { jp: "Byen har en utstilling", en: "The city has an exhibition" }, hint: "en utstilling → utstillingen. Literally 'out-setting', ut + stille — you set things out for people to see." },
        { id: "no-u35l2-aopptre", type: "vocab", front: "å opptre", reading: "aopptre", meaning: "to perform", example: { jp: "Hun skal opptre på torget i kveld.", en: "She's going to perform in the square tonight." }, accept: ["perform", "to appear"], drill: { jp: "Hun liker å opptre", en: "She likes to perform" }, hint: "opp + tre, 'step up' onto a stage. Present opptrer. Also 'to behave': opptre pent means to behave nicely." },
        { id: "no-u35l2-aunderholde", type: "vocab", front: "å underholde", reading: "aunderholde", meaning: "to entertain", example: { jp: "Faren min underholder barna mens vi spiser.", en: "My father entertains the children while we eat." }, accept: ["entertain", "to amuse"], drill: { jp: "Det er fint å underholde barna", en: "It's nice to entertain the children" }, hint: "under + holde, literally 'hold up'. Present underholder. The noun underholdning is entertainment." },
      ],
    },
    {
      id: "no-u35l3",
      unit: 35,
      lesson: 3,
      title: "Books and stories",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about stories and what you read — a tale, a fairy tale, a story, a poem, a hero, a title.",
      items: [
        { id: "no-u35l3-enfortelling", type: "vocab", front: "en fortelling", reading: "enfortelling", meaning: "tale", example: { jp: "Bestemor leser en fortelling for barna hver kveld.", en: "Grandmother reads a tale to the children every evening." }, accept: ["a tale", "a narrative", "story"], drill: { jp: "Han leser en fortelling", en: "He reads a tale" }, hint: "en fortelling → fortellingen. From å fortelle, to tell (A1) — the -ing ending turns the verb into the thing told." },
        { id: "no-u35l3-eteventyr", type: "vocab", front: "et eventyr", reading: "eteventyr", meaning: "fairy tale", example: { jp: "Barna liker gamle eventyr fra Norge.", en: "The children like old fairy tales from Norway." }, accept: ["a fairy tale", "an adventure"], drill: { jp: "Barna liker et eventyr", en: "The children like a fairy tale" }, hint: "Neuter: et eventyr → eventyret, plural eventyr (unchanged). Also an adventure — et eventyr på fjellet." },
        { id: "no-u35l3-enhistorie", type: "vocab", front: "en historie", reading: "enhistorie", meaning: "story", example: { jp: "Bestefar forteller alltid en god historie.", en: "Grandfather always tells a good story." }, accept: ["a story", "history", "tale"], drill: { jp: "Hun forteller en historie", en: "She tells a story" }, hint: "en historie → historien. One word for a story and for History the subject, exactly as in French and Spanish." },
        { id: "no-u35l3-etdikt", type: "vocab", front: "et dikt", reading: "etdikt", meaning: "poem", example: { jp: "Hun skrev et kort dikt til meg.", en: "She wrote a short poem for me." }, accept: ["a poem"], drill: { jp: "Han skriver et dikt", en: "He writes a poem" }, hint: "Neuter: et dikt → diktet, plural dikt (unchanged). From å dikte, to make things up — a poet is en dikter." },
        { id: "no-u35l3-enhelt", type: "vocab", front: "en helt", reading: "enhelt", meaning: "hero", example: { jp: "Helten i boka er en ung mann.", en: "The hero in the book is a young man." }, accept: ["a hero"], drill: { jp: "Mannen er en helt", en: "The man is a hero" }, hint: "en helt → helten. Do not confuse it with the adverb helt, 'completely' — same spelling, different word." },
        { id: "no-u35l3-entittel", type: "vocab", front: "en tittel", reading: "entittel", meaning: "title", example: { jp: "Jeg husker ikke tittelen på filmen.", en: "I don't remember the title of the film." }, accept: ["a title", "heading"], drill: { jp: "Boka har en tittel", en: "The book has a title" }, hint: "en tittel → tittelen, plural titler (the second t drops out). Also a person's title, like doktor." },
      ],
    },
    {
      id: "no-u35l4",
      unit: 35,
      lesson: 4,
      title: "Free time and hobbies",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you do in your free time — a hobby, an interest, a game — and use the verbs paint, draw and have fun.",
      items: [
        { id: "no-u35l4-enhobby", type: "vocab", front: "en hobby", reading: "enhobby", meaning: "hobby", example: { jp: "Å male er en dyr hobby, men jeg elsker den.", en: "Painting is an expensive hobby, but I love it." }, accept: ["a hobby", "pastime"], drill: { jp: "Musikk er en hobby", en: "Music is a hobby" }, hint: "en hobby → hobbyen, plural hobbyer. An English loan, kept whole." },
        { id: "no-u35l4-eninteresse", type: "vocab", front: "en interesse", reading: "eninteresse", meaning: "interest", example: { jp: "Vi har mange interesser, derfor er vi gode venner.", en: "We have many interests, so we're good friends." }, accept: ["an interest"], drill: { jp: "Kunst er en interesse", en: "Art is an interest" }, hint: "en interesse → interessen. The verb is å interessere seg for, to be interested in." },
        { id: "no-u35l4-etspill", type: "vocab", front: "et spill", reading: "etspill", meaning: "game", example: { jp: "Vi spiller et spill sammen hver fredag.", en: "We play a game together every Friday." }, accept: ["a game", "play"], drill: { jp: "Han kjøper et spill i dag", en: "He buys a game today" }, hint: "Neuter: et spill → spillet, plural spill (unchanged). The noun beside the A1 verb å spille, to play." },
        { id: "no-u35l4-amale", type: "vocab", front: "å male", reading: "amale", meaning: "to paint", example: { jp: "Faren min maler bilder på søndager, fordi han liker det.", en: "My father paints pictures on Sundays, because he likes it." }, accept: ["paint"], drill: { jp: "Jeg liker å male", en: "I like to paint" }, hint: "å male → maler. A painting is et maleri (this unit). Careful with å måle, to measure (u34) — it folds to the same typed answer, so either spelling is accepted; the card always shows you the front." },
        { id: "no-u35l4-ategne", type: "vocab", front: "å tegne", reading: "ategne", meaning: "to draw", example: { jp: "Datteren min tegner dyr hver dag.", en: "My daughter draws animals every day." }, accept: ["draw", "to sketch"], drill: { jp: "Barna liker å tegne", en: "The children like to draw" }, hint: "å tegne → tegner. The g is silent: TAI-ne. A drawing is en tegning, and et tegn (A1) is a sign." },
        { id: "no-u35l4-amoreseg", type: "vocab", front: "å more seg", reading: "amoreseg", meaning: "to have fun", example: { jp: "Barna morer seg mens de venter på bussen.", en: "The children have fun while they wait for the bus." }, accept: ["to enjoy oneself", "have a good time"], drill: { jp: "Det er lett å more seg", en: "It's easy to have fun" }, hint: "A reflexive verb: jeg morer meg, du morer deg, han morer seg. From moro, fun — the same root as morsom (u31)." },
      ],
    },
  ],
};
