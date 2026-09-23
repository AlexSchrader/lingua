// NO Unit 123 — Dyr · 2 (slot: coverage-b2-13) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 13 (B2)"; retitled per
// CLAUDE.md "No front language". Continues u20 Natur og dyr and u26.
//
// MEASURED, same caveat as u121 and u122 — the inventory is canonical but I
// enumerated it. Of a 29-animal list the corpus teaches 17: en hund, en katt, en
// hest, ei ku, en sau, en elg, en fugl, en fisk, ei mus, en rev, en ulv, en
// bjørn, en hare, et insekt, ei flue, en maur, en orm. What is missing is a
// pattern rather than a scatter:
//   • THE FARM, half done — ku and sau are taught, gris, høne, hane, geit, lam
//     and kalv are not, in a country where the farm is the standing image of the
//     countryside.
//   • THE SEA, absent entirely — en hval, en sel, en krabbe, ei reke, en laks,
//     et skjell. This is the gap that matters most in Norwegian: the coast is
//     the country, laks is its biggest export, and u83 Friluftsliv already talks
//     about being out in it.
//   • BIRDS, one of them — en fugl is taught as the category and not one species
//     is named. Ei måke and ei ørn are the two any visitor sees.
//
// FREE: Norge, Lofoten, Sverige
//
// Conventions per no/unit1.js. Readings are hand-written ASCII folds.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT123 = {
  id: "no-u123",
  lang: "no",
  title: "Dyr · 2",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "no-u123l1",
      unit: 123,
      lesson: 1,
      title: "På gården",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the animals on a Norwegian farm, and their young.",
      items: [
        { id: "no-u123l1-engris", type: "vocab", front: "en gris", reading: "engris", meaning: "pig", example: { jp: "Bonden har både griser og sauer.", en: "The farmer has both pigs and sheep." }, accept: ["a pig", "hog", "swine"], drill: { jp: "Bonden har en gris her", en: "The farmer has a pig here" }, hint: "Hard g: GREES. Also an insult for a messy person, exactly as in English — du er en gris." },
        { id: "no-u123l1-eihone", type: "vocab", front: "ei høne", reading: "eihone", meaning: "hen", example: { jp: "Høna legger egg nesten hver dag.", en: "The hen lays eggs almost every day." }, accept: ["a hen", "chicken (female)"], drill: { jp: "Ei høne legger egg hver dag", en: "A hen lays an egg every day" }, hint: "Feminine: høna. Et egg you already have from u26 — this is the bird that produces it. The meat on your plate is kylling." },
        { id: "no-u123l1-enhane", type: "vocab", front: "en hane", reading: "enhane", meaning: "rooster", example: { jp: "En hane står ute tidlig om morgenen.", en: "A rooster is outside early in the morning." }, accept: ["a cock", "cockerel"], drill: { jp: "En hane står ute om morgenen", en: "A rooster is outside in the morning" }, hint: "⚠️ A homograph: en hane is also a tap on a pipe — vannhane, water tap. The farmyard sense came first." },
        { id: "no-u123l1-eigeit", type: "vocab", front: "ei geit", reading: "eigeit", meaning: "goat", example: { jp: "Geitene går i fjellet om sommeren.", en: "The goats walk in the mountains in summer." }, accept: ["a goat"], drill: { jp: "Ei geit går i fjellet", en: "A goat walks in the mountains" }, hint: "Feminine: geita, plural geiter. Geitost — brown goat's cheese — is the thing Norway is most often teased about." },
        { id: "no-u123l1-etlam", type: "vocab", front: "et lam", reading: "etlam", meaning: "lamb", example: { jp: "Sauen fikk to lam i april.", en: "The sheep had two lambs in April." }, accept: ["a lamb"], drill: { jp: "Sauen fikk et lam i april", en: "The sheep had a lamb in April" }, hint: "Neuter with an unchanged plural: et lam, to lam. ⚠️ Not to be confused with the adjective lam, paralysed — same spelling, different word." },
        { id: "no-u123l1-enkalv", type: "vocab", front: "en kalv", reading: "enkalv", meaning: "calf (young cow)", example: { jp: "Kua og kalven står sammen ute.", en: "The cow and the calf are standing together outside." }, accept: ["a calf"], drill: { jp: "Kua og en kalv står sammen", en: "The cow and a calf are standing together" }, hint: "The young of ei ku (u20). ⚠️ Unrelated to en legg (u121), which is the calf of your own leg — English shares one word where Norwegian has two." },
      ],
    },
    {
      id: "no-u123l2",
      unit: 123,
      lesson: 2,
      title: "Småkryp",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the small creatures you meet outdoors, and say which ones sting.",
      items: [
        { id: "no-u123l2-eibie", type: "vocab", front: "ei bie", reading: "eibie", meaning: "bee", example: { jp: "Biene er viktige for maten vi spiser.", en: "Bees are important for the food we eat." }, accept: ["a bee", "honeybee"], drill: { jp: "Ei bie er viktig for maten", en: "A bee is important for the food" }, hint: "Feminine: bia, plural bier. Two syllables: BI-e. Honning is what it makes." },
        { id: "no-u123l2-enveps", type: "vocab", front: "en veps", reading: "enveps", meaning: "wasp", example: { jp: "Det var en veps i glasset på bordet.", en: "There was a wasp in the glass on the table." }, accept: ["a wasp"], drill: { jp: "Det var en veps i glasset", en: "There was a wasp in the glass" }, hint: "Unchanged in the plural: en veps, to veps. The one Norwegians actually worry about at an outdoor lunch — bees rarely sting." },
        { id: "no-u123l2-enedderkopp", type: "vocab", front: "en edderkopp", reading: "enedderkopp", meaning: "spider", example: { jp: "Det henger en edderkopp i hjørnet av rommet.", en: "There is a spider hanging in the corner of the room." }, accept: ["a spider"], drill: { jp: "Det henger en edderkopp i rommet", en: "There is a spider hanging in the room" }, hint: "edder is an old word for venom, kopp the cup of its body. None in Norway is dangerous to people." },
        { id: "no-u123l2-enmygg", type: "vocab", front: "en mygg", reading: "enmygg", meaning: "mosquito", example: { jp: "Det er mye mygg i skogen om kvelden.", en: "There are a lot of mosquitoes in the forest in the evening." }, accept: ["a mosquito", "midge", "gnat"], drill: { jp: "Det er en mygg i rommet", en: "There is a mosquito in the room" }, hint: "Unchanged in the plural, and usually used as a mass: mye mygg. In a northern Norwegian summer it is the word you will hear most outdoors." },
        { id: "no-u123l2-ensommerfugl", type: "vocab", front: "en sommerfugl", reading: "ensommerfugl", meaning: "butterfly", example: { jp: "En sommerfugl satte seg på blomsten.", en: "A butterfly landed on the flower." }, accept: ["a butterfly"], drill: { jp: "En sommerfugl satte seg på blomsten", en: "A butterfly landed on the flower" }, hint: "sommer + fugl, a summer-bird — a far more transparent word than the English one. Sommerfugler i magen is the same idiom as butterflies in the stomach." },
        { id: "no-u123l2-eilarve", type: "vocab", front: "ei larve", reading: "eilarve", meaning: "caterpillar", example: { jp: "Larva spiser gress hele dagen.", en: "The caterpillar eats grass all day." }, accept: ["a caterpillar", "grub", "larva"], drill: { jp: "Ei larve spiser gress hele dagen", en: "A caterpillar eats grass all day" }, hint: "Feminine: larva. Covers every insect larva, not only the one that becomes a butterfly." },
      ],
    },
    {
      id: "no-u123l3",
      unit: 123,
      lesson: 3,
      title: "I havet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what lives in the sea along the Norwegian coast — and what ends up on the plate.",
      items: [
        { id: "no-u123l3-enhval", type: "vocab", front: "en hval", reading: "enhval", meaning: "whale", example: { jp: "Vi så en hval fra båten utenfor Bergen.", en: "We saw a whale from the boat off Bergen." }, accept: ["a whale"], drill: { jp: "Vi så en hval fra båten", en: "We saw a whale from the boat" }, hint: "Silent h, as in hva and hvor: VAL. Whale-watching is hvalsafari, and Norway is one of few countries that still hunts them." },
        { id: "no-u123l3-ensel", type: "vocab", front: "en sel", reading: "ensel", meaning: "seal (animal)", example: { jp: "En sel lå og sov ved vannet.", en: "A seal lay sleeping by the water." }, accept: ["a seal"], drill: { jp: "En sel lå og sov her", en: "A seal lay sleeping here" }, hint: "⚠️ A homograph with two more words: å selge's stem and ei seter. Context does all the work — the animal is what you meet at the coast." },
        { id: "no-u123l3-enkrabbe", type: "vocab", front: "en krabbe", reading: "enkrabbe", meaning: "crab", example: { jp: "Barna fant en krabbe i vannet.", en: "The children found a crab in the water." }, accept: ["a crab"], drill: { jp: "Barna fant en krabbe i vannet", en: "The children found a crab in the water" }, hint: "The verb å krabbe means to crawl — the animal gave its name to the movement, not the other way round." },
        { id: "no-u123l3-eireke", type: "vocab", front: "ei reke", reading: "eireke", meaning: "prawn", example: { jp: "Vi spiste reker ute i sola.", en: "We ate prawns outside in the sun." }, accept: ["a prawn", "shrimp"], drill: { jp: "Vi spiste ei reke i sola", en: "We ate a prawn in the sun" }, hint: "Feminine: reka, plural reker. Rekeaften — a summer evening of prawns, bread and beer outdoors — is a fixed Norwegian institution." },
        { id: "no-u123l3-enlaks", type: "vocab", front: "en laks", reading: "enlaks", meaning: "salmon", example: { jp: "Laks er den viktigste fisken Norge selger.", en: "Salmon is the most important fish Norway sells." }, accept: ["a salmon"], drill: { jp: "Vi kjøpte en laks på torget", en: "We bought a salmon at the market" }, hint: "Unchanged in the plural: en laks, to laks. Norway's largest food export by a wide margin, and the word turns up constantly in the news." },
        { id: "no-u123l3-etskjell", type: "vocab", front: "et skjell", reading: "etskjell", meaning: "shell (sea creature)", example: { jp: "Vi fant mange skjell på stranda.", en: "We found a lot of shells on the beach." }, accept: ["a shell", "mussel", "clam"], drill: { jp: "Vi fant et skjell på stranda", en: "We found a shell on the beach" }, hint: "skj is the broad sh from unit 1: SHELL. Both the shell itself and the animal inside it — blåskjell are mussels." },
      ],
    },
    {
      id: "no-u123l4",
      unit: 123,
      lesson: 4,
      title: "Fugler og ville dyr",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the birds and wild animals anyone spends a week in Norway will see.",
      items: [
        { id: "no-u123l4-eiorn", type: "vocab", front: "ei ørn", reading: "eiorn", meaning: "eagle", example: { jp: "Ei ørn satt høyt oppe i fjellet.", en: "An eagle sat high up in the mountain." }, accept: ["an eagle"], drill: { jp: "Ei ørn satt i fjellet", en: "An eagle sat in the mountain" }, hint: "Feminine: ørna. Norway has the largest sea eagle population in Europe, so this is not an exotic word here." },
        { id: "no-u123l4-eimake", type: "vocab", front: "ei måke", reading: "eimake", meaning: "seagull", example: { jp: "Måkene tok maten rett fra hånda hans.", en: "The seagulls took the food straight from his hand." }, accept: ["a gull", "a seagull"], drill: { jp: "Ei måke tok maten fra hånda", en: "A seagull took the food from the hand" }, hint: "Feminine: måka. Also spelt måse in parts of the country. Every coastal town argues about them." },
        { id: "no-u123l4-eiand", type: "vocab", front: "ei and", reading: "eiand", meaning: "duck", example: { jp: "Det svømmer ei and i vannet i parken.", en: "There is a duck swimming in the water in the park." }, accept: ["a duck"], drill: { jp: "Det svømmer ei and i vannet", en: "There is a duck swimming in the water" }, hint: "⚠️ Feminine anda, and the plural is IRREGULAR: ender. Do not confuse it with the conjunction-looking and — context and the article separate them." },
        { id: "no-u123l4-eirotte", type: "vocab", front: "ei rotte", reading: "eirotte", meaning: "rat", example: { jp: "De så ei rotte ved søppelkassa.", en: "They saw a rat by the rubbish bin." }, accept: ["a rat"], drill: { jp: "De så ei rotte ved søppelkassa", en: "They saw a rat by the rubbish bin" }, hint: "Feminine: rotta. The double t is short and sharp. Ei mus (u20) is the harmless one; rotte is the one that gets reported." },
        { id: "no-u123l4-etekorn", type: "vocab", front: "et ekorn", reading: "etekorn", meaning: "squirrel", example: { jp: "Et ekorn løp opp i treet.", en: "A squirrel ran up the tree." }, accept: ["a squirrel"], drill: { jp: "Et ekorn løp opp i treet", en: "A squirrel ran up the tree" }, hint: "Neuter with an unchanged plural: et ekorn, to ekorn. The Norwegian ones are red-brown and in every city park." },
        { id: "no-u123l4-enslange", type: "vocab", front: "en slange", reading: "enslange", meaning: "snake (general word)", example: { jp: "Det finnes bare én slange du må passe på.", en: "There is only one snake you have to watch out for." }, accept: ["a snake", "serpent"], drill: { jp: "Det er en slange i hagen", en: "There is a snake in the garden" }, hint: "⚠️ En orm (u26) is already taught for the adder specifically; slange is the general word and also a garden hose. Huggorm is the venomous one." },
      ],
    },
  ],
};
