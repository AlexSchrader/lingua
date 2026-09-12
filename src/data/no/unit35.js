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
        { id: "no-u35l1-enkultur", type: "vocab", front: "en kultur", reading: "enkultur", meaning: "culture", example: { jp: "Vi lærer om norsk kultur på skolen.", en: "We learn about Norwegian culture at school." }, accept: ["a culture"], drill: { jp: "Norsk kultur er interessant", en: "Norwegian culture is interesting" }, hint: "Masculine: en kultur → kulturen. Straight from Latin, as in English. The adjective is kulturell." },
        { id: "no-u35l1-enkunst", type: "vocab", front: "en kunst", reading: "enkunst", meaning: "art", example: { jp: "Bestemor er glad i kunst og musikk.", en: "Grandmother is fond of art and music." }, accept: ["an art", "the arts"], drill: { jp: "Jeg liker moderne kunst", en: "I like modern art" }, hint: "en kunst → kunsten. glad i = fond of, from A1. Watch the near-twin kunstig, which means artificial." },
        { id: "no-u35l1-etteater", type: "vocab", front: "et teater", reading: "etteater", meaning: "theatre", example: { jp: "Vi går på teater når vi er i byen.", en: "We go to the theatre when we're in the city." }, accept: ["a theatre", "theater"], drill: { jp: "Teateret er gammelt", en: "The theatre is old" }, hint: "Neuter: et teater → teateret. gå på teater, with no article, is 'to go to the theatre'. A play is et teaterstykke." },
        { id: "no-u35l1-enkonsert", type: "vocab", front: "en konsert", reading: "enkonsert", meaning: "concert", example: { jp: "Vi skal på konsert i kveld, hvis vi rekker det.", en: "We're going to a concert tonight, if we make it in time." }, accept: ["a concert", "gig"], drill: { jp: "Konserten var fin", en: "The concert was nice" }, hint: "en konsert → konserten. gå på konsert. The final t is pronounced." },
        { id: "no-u35l1-etmaleri", type: "vocab", front: "et maleri", reading: "etmaleri", meaning: "painting", example: { jp: "Dette maleriet er veldig gammelt og dyrt.", en: "This painting is very old and expensive." }, accept: ["a painting", "picture"], drill: { jp: "Maleriet er stort", en: "The painting is big" }, hint: "Neuter: et maleri → maleriet, plural malerier. From å male, to paint. The -eri ending names a place or product, and here it is neuter." },
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
        { id: "no-u35l2-enforestilling", type: "vocab", front: "en forestilling", reading: "enforestilling", meaning: "show", example: { jp: "Forestillingen begynner klokka sju, så vi må dra nå.", en: "The show starts at seven, so we have to set off now." }, accept: ["a performance", "showing"], drill: { jp: "Forestillingen var lang", en: "The show was long" }, hint: "en forestilling → forestillingen. Also a mental picture: jeg har ingen forestilling om det, 'I have no idea about it'." },
        { id: "no-u35l2-enstjerne", type: "vocab", front: "en stjerne", reading: "enstjerne", meaning: "star", example: { jp: "Han ble en stjerne etter den nye filmen sin.", en: "He became a star after his new film." }, accept: ["a star"], drill: { jp: "Hun er en stjerne", en: "She is a star" }, hint: "en stjerne → stjernen. stj is said like sh: SHER-ne. A film star and a star in the sky, the same word." },
        { id: "no-u35l2-enrolle", type: "vocab", front: "en rolle", reading: "enrolle", meaning: "role", example: { jp: "Hun spiller en viktig rolle i filmen.", en: "She plays an important role in the film." }, accept: ["a role", "a part"], drill: { jp: "Rollen er viktig", en: "The role is important" }, hint: "en rolle → rollen. å spille en rolle, to play a role — on a stage and in life alike." },
        { id: "no-u35l2-enutstilling", type: "vocab", front: "en utstilling", reading: "enutstilling", meaning: "exhibition", example: { jp: "Det er en ny utstilling på museet i dag.", en: "There's a new exhibition at the museum today." }, accept: ["an exhibition", "a display"], drill: { jp: "Utstillingen er gratis", en: "The exhibition is free" }, hint: "en utstilling → utstillingen. Literally 'out-setting', ut + stille — you set things out for people to see." },
        { id: "no-u35l2-aopptre", type: "vocab", front: "å opptre", reading: "aopptre", meaning: "to perform", example: { jp: "Bandet skal opptre på torget i kveld.", en: "The band is going to perform in the square tonight." }, accept: ["perform", "to appear"], drill: { jp: "De opptrer i kveld", en: "They perform tonight" }, hint: "opp + tre, 'step up' onto a stage. Present opptrer. Also 'to behave': opptre pent means to behave nicely." },
        { id: "no-u35l2-aunderholde", type: "vocab", front: "å underholde", reading: "aunderholde", meaning: "to entertain", example: { jp: "Klovnen underholder barna mens foreldrene spiser.", en: "The clown entertains the children while the parents eat." }, accept: ["entertain", "to amuse"], drill: { jp: "Musikken underholder oss", en: "The music entertains us" }, hint: "under + holde, literally 'hold up'. Present underholder. The noun underholdning is entertainment." },
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
        { id: "no-u35l3-enfortelling", type: "vocab", front: "en fortelling", reading: "enfortelling", meaning: "tale", example: { jp: "Bestemor leser en fortelling for barna hver kveld.", en: "Grandmother reads a tale to the children every evening." }, accept: ["a tale", "a narrative", "story"], drill: { jp: "Fortellingen er lang", en: "The tale is long" }, hint: "en fortelling → fortellingen. From å fortelle, to tell (A1) — the -ing ending turns the verb into the thing told." },
        { id: "no-u35l3-eteventyr", type: "vocab", front: "et eventyr", reading: "eteventyr", meaning: "fairy tale", example: { jp: "Barna liker gamle eventyr fra Norge.", en: "The children like old fairy tales from Norway." }, accept: ["a fairy tale", "an adventure"], drill: { jp: "Eventyret er gammelt", en: "The fairy tale is old" }, hint: "Neuter: et eventyr → eventyret, plural eventyr (unchanged). Also an adventure — et eventyr på fjellet." },
        { id: "no-u35l3-enhistorie", type: "vocab", front: "en historie", reading: "enhistorie", meaning: "story", example: { jp: "Bestefar forteller alltid den samme historien.", en: "Grandfather always tells the same story." }, accept: ["a story", "history", "tale"], drill: { jp: "Historien er sann", en: "The story is true" }, hint: "en historie → historien. One word for a story and for History the subject, exactly as in French and Spanish." },
        { id: "no-u35l3-etdikt", type: "vocab", front: "et dikt", reading: "etdikt", meaning: "poem", example: { jp: "Hun skrev et kort dikt til bursdagen min.", en: "She wrote a short poem for my birthday." }, accept: ["a poem"], drill: { jp: "Diktet er kort", en: "The poem is short" }, hint: "Neuter: et dikt → diktet, plural dikt (unchanged). From å dikte, to make things up — a poet is en dikter." },
        { id: "no-u35l3-enhelt", type: "vocab", front: "en helt", reading: "enhelt", meaning: "hero", example: { jp: "I boka er en vanlig gutt helten.", en: "In the book, an ordinary boy is the hero." }, accept: ["a hero"], drill: { jp: "Helten redder alle", en: "The hero saves everyone" }, hint: "en helt → helten. Do not confuse it with the adverb helt, 'completely' — same spelling, different word." },
        { id: "no-u35l3-entittel", type: "vocab", front: "en tittel", reading: "entittel", meaning: "title", example: { jp: "Jeg husker ikke tittelen på filmen.", en: "I don't remember the title of the film." }, accept: ["a title", "heading"], drill: { jp: "Tittelen er lang", en: "The title is long" }, hint: "en tittel → tittelen, plural titler (the second t drops out). Also a person's title, like doktor." },
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
        { id: "no-u35l4-enhobby", type: "vocab", front: "en hobby", reading: "enhobby", meaning: "hobby", example: { jp: "Fotografering er en dyr hobby, men jeg elsker den.", en: "Photography is an expensive hobby, but I love it." }, accept: ["a hobby", "pastime"], drill: { jp: "Musikk er en hobby", en: "Music is a hobby" }, hint: "en hobby → hobbyen, plural hobbyer. An English loan, kept whole." },
        { id: "no-u35l4-eninteresse", type: "vocab", front: "en interesse", reading: "eninteresse", meaning: "interest", example: { jp: "Vi har mange felles interesser, derfor er vi gode venner.", en: "We have many shared interests, so we're good friends." }, accept: ["an interest"], drill: { jp: "Kunst er en interesse", en: "Art is an interest" }, hint: "en interesse → interessen. The verb is å interessere seg for, to be interested in." },
        { id: "no-u35l4-etspill", type: "vocab", front: "et spill", reading: "etspill", meaning: "game", example: { jp: "Vi spiller et spill sammen hver fredag.", en: "We play a game together every Friday." }, accept: ["a game", "play"], drill: { jp: "Spillet er morsomt", en: "The game is fun" }, hint: "Neuter: et spill → spillet, plural spill (unchanged). The noun beside the A1 verb å spille, to play." },
        { id: "no-u35l4-amale", type: "vocab", front: "å male", reading: "amale", meaning: "to paint", example: { jp: "Faren min maler bilder på søndager, for da har han god tid.", en: "My father paints pictures on Sundays, because then he has plenty of time." }, accept: ["paint"], drill: { jp: "Jeg maler et bilde", en: "I paint a picture" }, hint: "å male → maler. A painting is et maleri (this unit). Also to grind coffee, å male kaffe — the same spelling, a different verb." },
        { id: "no-u35l4-ategne", type: "vocab", front: "å tegne", reading: "ategne", meaning: "to draw", example: { jp: "Datteren min tegner dyr når hun har fri.", en: "My daughter draws animals when she has time off." }, accept: ["draw", "to sketch"], drill: { jp: "Barna tegner på papir", en: "The children draw on paper" }, hint: "å tegne → tegner. The g is silent: TAI-ne. A drawing is en tegning, and et tegn (A1) is a sign." },
        { id: "no-u35l4-amoreseg", type: "vocab", front: "å more seg", reading: "amoreseg", meaning: "to have fun", example: { jp: "Barna morer seg mens de venter på bussen.", en: "The children have fun while they wait for the bus." }, accept: ["to enjoy oneself", "have a good time"], drill: { jp: "Vi morer oss sammen", en: "We have fun together" }, hint: "A reflexive verb: jeg morer meg, du morer deg, han morer seg. From moro, fun — the same root as morsom (u31)." },
      ],
    },
  ],
};
