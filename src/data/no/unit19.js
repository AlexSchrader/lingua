// NO Unit 19 — Fritid og friluftsliv ("Free time and the outdoors") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded as "Vocabulary 5"; retitled and rethemed per CLAUDE.md → "No
// front language" and the block-3 plan in unit15.js.
//
// WHY THIS THEME. Friluftsliv — literally "open-air life" — is not a hobby in
// Norway, it is the default way of spending a day off, and an A1 learner who
// cannot say skog, fjell, tur or ski cannot follow an ordinary Monday-morning
// conversation about the weekend. Block 1 gave the learner en sjø and ei øy;
// block 2 owns the weather and the seasons. What was left unowned is the
// landscape itself, the animals in it, and what people do there — which is this
// unit.
//
// Conventions are declared in no/unit1.js and bind every unit. Bokmål, not
// Nynorsk.
//
// ⚠ TWO HOMOGRAPHS OF TAUGHT WORDS ARE TAUGHT HERE, DELIBERATELY, AND BOTH SAY
// SO ON THEIR OWN CARD:
//   • `et tre`, tree (l2) — spelled exactly like `tre`, the number three (u5l1).
//   • `et dyr`, animal (l3) — spelled exactly like `dyr`, expensive (u7l4).
// These are not duplicates and not a validator loophole: they are two pairs of
// genuinely distinct Norwegian words that happen to share a spelling. The article
// usually separates them — but NOT always, and the article is not the defence.
// `tre trær` has no article in it at all, and the neuter plural of `et dyr` is
// `dyr`, unchanged, so `Dyr er dyre` is two different words spelled the same with
// nothing but sense between them. The defence that actually holds is that these
// are two lexemes each, and that the alternative was an animals lesson with no
// word for "animal" and a nature lesson with no word for "tree". Block 1 saw the second one coming and said so in its
// own hint — "Spelled exactly like et dyr, an animal — context does all the
// work" (u7l4) — which is as close to a pre-authorisation as a hint can get.
// The alternative was an animals lesson with no word for "animal" and a nature
// lesson with no word for "tree". Both hints cross-reference the earlier card,
// so the learner meets the collision as a taught fact rather than a surprise.
// MERGE SEAT: these will not show as duplicate fronts (the strings differ) and
// they must not be "fixed" as lexeme duplicates — they are homographs.
//
// A DERIVATIONAL PAIR IS TAUGHT ON PURPOSE, IN ONE LESSON: `å synge` and `en
// sang` (l1), sing and song. RUNBOOK §4 warns against teaching a word twice
// through its inflections; this is not that — they are two lexemes and two parts
// of speech, and putting them side by side in the same lesson with a hint that
// names the relationship turns the risk into the teaching point.
// ONE OTHER DERIVED FRONT EXISTS IN THIS BLOCK, named here rather than left to
// be found: `å fiske` (l4) is built on block 1's `en fisk` (u6). That is
// derivation, not inflection — the -e verb ending is not guessable — so its hint
// says where it comes from, exactly as å synge's does. Those two are the only
// ones: everything else clears a stem-level sweep of all 312 fronts in blocks 1
// and 3 combined, which is the check `npm run check:lexemes` cannot do here
// (it imports JA_UNITS and reports "free" for any Norwegian input).
//
// ø IS HAND-FOLDED, ø→o (unit1.js §3): `å svømme` → "asvomme". That is the only
// ø in the unit.
//
// FIRST FEMININE OF THE UNIT is `ei elv` (l2) and it carries the en-/ei-
// recognition note unit1.js requires. (l1 has no feminine noun — musikk is
// masculine.)
//
// V2: "Nå går vi en tur i skogen." (l2) is this unit's fronted-XP declarative.
//
// LESSON ORDER: l2's et tre is standing there before l3 puts a bird in it, and
// l1's å spille is taught before l4 plays ball. Checked by eye —
// check-lang-scope.mjs resolves scope per UNIT, never per LESSON (unit7.js).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT19 = {
  id: "no-u19",
  lang: "no",
  title: "Fritid og friluftsliv",
  order: 19,
  stage: "a1",
  lessons: [
    // Lesson 1: what people do indoors for pleasure. NOUNS FIRST, then the
    // verbs that take them — å spille needs an object to be the right verb
    // (without one it is å leke), so musikk has to be on the table before it.
    {
      id: "no-u19l1",
      unit: 19,
      lesson: 1,
      title: "Musikk og film",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you play, sing or dance, that you are listening to music, and that you are watching a film at the cinema.",
      items: [
        { id: "no-u19l1-musikk", type: "vocab", front: "musikk", reading: "musikk", meaning: "music", example: { jp: "Jeg hører på musikk nå.", en: "I am listening to music now." }, accept: ["the music"], drill: { jp: "Vi hører på musikk", en: "We listen to music" }, hint: "mu-SIKK, stress at the end. A mass noun, so the front carries no article — you cannot buy \"a music\". Masculine: definite musikken. Note å høre PÅ from unit 17: listening on purpose, not just hearing." },
        { id: "no-u19l1-ensang", type: "vocab", front: "en sang", reading: "ensang", meaning: "song", example: { jp: "Anna liker en sang på norsk.", en: "Anna likes a song in Norwegian." }, accept: ["a song", "tune", "a tune", "singing"], drill: { jp: "Vi hører en sang", en: "We hear a song" }, hint: "SANG. Masculine: definite sangen, plural sanger. Taught right beside å synge on purpose: sang is the thing, synge is the doing, and the vowel change between them is the same one English made between song and sing." },
        { id: "no-u19l1-enfilm", type: "vocab", front: "en film", reading: "enfilm", meaning: "film", example: { jp: "Vi ser en film på kino.", en: "We are watching a film at the cinema." }, accept: ["a movie", "movie", "a film"], drill: { jp: "Vi ser en film i kveld", en: "We are watching a film tonight" }, hint: "FILM. Masculine: definite filmen, plural filmer. Note på kino with no article at all — unit 7 flagged that phrase on en kino, and this is it doing its job." },
        { id: "no-u19l1-aspille", type: "vocab", front: "å spille", reading: "aspille", meaning: "to play", example: { jp: "Erling spiller musikk i en park.", en: "Erling is playing music in a park." }, accept: ["play", "to perform", "perform", "to act", "act"], drill: { jp: "Kari liker å spille musikk", en: "Kari likes to play music" }, hint: "SPIL-le, present spiller. For an instrument, a game or a role, and it wants an object — jeg spiller piano, han spiller musikk. Children playing about with no rules is å leke, a different verb entirely, so \"spiller i en park\" on its own would be the wrong one." },
        { id: "no-u19l1-asynge", type: "vocab", front: "å synge", reading: "asynge", meaning: "to sing", example: { jp: "Barna synger på skolen.", en: "The children are singing at school." }, accept: ["sing", "to chant", "chant"], drill: { jp: "Barna liker å synge en sang", en: "The children like to sing a song" }, hint: "SUENG-e, present synger. The letters ng spell a SINGLE sound here — the ng of English \"singer\", with no separate g released after it. En sang, taught just above, is what comes out: the same pair as English sing and song." },
        { id: "no-u19l1-adanse", type: "vocab", front: "å danse", reading: "adanse", meaning: "to dance", example: { jp: "Vi danser i stua.", en: "We are dancing in the living room." }, accept: ["dance", "to have a dance"], drill: { jp: "Vi begynner å danse nå", en: "We are starting to dance now" }, hint: "DAN-se, present danser. En dans is a dance, and et dansegulv is a dance floor — dans welded onto the gulv of unit 16." },
      ],
    },
    // Lesson 2: the landscape.
    {
      id: "no-u19l2",
      unit: 19,
      lesson: 2,
      title: "Ute i naturen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the Norwegian landscape — fjell, skog, elv, tre, strand — and say you are going for a walk in it.",
      items: [
        { id: "no-u19l2-etfjell", type: "vocab", front: "et fjell", reading: "etfjell", meaning: "mountain", example: { jp: "Det er et fjell nær Bergen.", en: "There is a mountain near Bergen." }, accept: ["a mountain", "hill", "fell"], drill: { jp: "Et fjell er høyt", en: "A mountain is tall" }, hint: "FYELL — fj is f plus a y sound. Neuter: definite fjellet, plural fjell, unchanged. På fjellet means up in the mountains generally, and it is where a large part of Norway goes at Easter." },
        { id: "no-u19l2-enskog", type: "vocab", front: "en skog", reading: "enskog", meaning: "forest", example: { jp: "Vi går i skogen.", en: "We are walking in the forest." }, accept: ["a forest", "wood", "woods", "a wood"], drill: { jp: "En skog er mørk", en: "A forest is dark" }, hint: "SKOOG — hard sk, and the g is sounded. Masculine: definite skogen, plural skoger. Å gå i skogen is not an expedition; it is what a Norwegian does on an ordinary Sunday." },
        { id: "no-u19l2-eielv", type: "vocab", front: "ei elv", reading: "eielv", meaning: "river", example: { jp: "Det er ei elv i skogen.", en: "There is a river in the forest." }, accept: ["a river", "stream"], drill: { jp: "Vi ser ei elv i skogen", en: "We see a river in the forest" }, hint: "ELV. Feminine: definite elva, plural elver. You will also see en elv / elven; Bokmål allows both and print uses the en form freely, but this course writes ei because ei predicts the -a definite. A small one is en bekk." },
        { id: "no-u19l2-ettre", type: "vocab", front: "et tre", reading: "ettre", meaning: "tree", example: { jp: "Det står et tre i hagen.", en: "There is a tree standing in the garden." }, accept: ["a tree", "wood", "timber"], drill: { jp: "Et tre er grønt", en: "A tree is green" }, hint: "TREH. Neuter: definite treet, plural trær. ⚠ Spelled exactly like tre, the number three from unit 5 — two unrelated words that happen to look alike, and the article or the plural usually separates them, but not always: tre trær is \"three trees\" with no article anywhere in it, and only sense tells you which is which. It also means wood as a material." },
        { id: "no-u19l2-eistrand", type: "vocab", front: "ei strand", reading: "eistrand", meaning: "beach", example: { jp: "Det er ei strand nær en sjø.", en: "There is a beach near a lake." }, accept: ["a beach", "shore", "seaside", "coast"], drill: { jp: "Vi går til ei strand", en: "We walk to a beach" }, hint: "STRANN — the d is silent. Feminine: definite stranda, plural strender. Beach or shore, by a lake or by the sea alike." },
        { id: "no-u19l2-entur", type: "vocab", front: "en tur", reading: "entur", meaning: "walk", example: { jp: "Nå går vi en tur i skogen.", en: "Now we are going for a walk in the forest." }, accept: ["a walk", "hike", "a hike", "trip", "outing", "a trip"], drill: { jp: "Vi går en tur i skogen", en: "We go for a walk in the forest" }, hint: "TUER, tight u. Masculine: definite turen, plural turer. Å gå tur is THE Norwegian activity — a walk taken for its own sake, in any weather. And note the V2 order again: nå in front, går second, vi behind it." },
      ],
    },
    // Lesson 3: the animals in that landscape.
    {
      id: "no-u19l3",
      unit: 19,
      lesson: 3,
      title: "Dyr",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the animals of a Norwegian landscape — fugl, hest, ku, sau, elg — and say what an animal is and where it lives.",
      items: [
        { id: "no-u19l3-etdyr", type: "vocab", front: "et dyr", reading: "etdyr", meaning: "animal", example: { jp: "En hund er et dyr.", en: "A dog is an animal." }, accept: ["an animal", "beast", "creature", "a creature"], drill: { jp: "Et dyr bor i en skog", en: "An animal lives in a forest" }, hint: "DUER. Neuter: definite dyret, plural dyr, unchanged. ⚠ Spelled exactly like dyr, \"expensive\", from unit 7 — whose own hint warned you this card was coming. Two different words. The article helps — et dyr is the animal — but the plural is dyr too, so Dyr er dyre, \"animals are expensive\", is both words in one sentence with no article in sight. Context really does do the work. En bil er dyr, but en bil er ikke et dyr." },
        { id: "no-u19l3-enfugl", type: "vocab", front: "en fugl", reading: "enfugl", meaning: "bird", example: { jp: "Det sitter en fugl i et tre.", en: "There is a bird sitting in a tree." }, accept: ["a bird"], drill: { jp: "Vi ser en fugl i skogen", en: "We see a bird in the forest" }, hint: "FUEL — the g is silent. Masculine: definite fuglen, plural fugler. English \"fowl\" is the very same old word, narrowed down to the ones you eat." },
        { id: "no-u19l3-enhest", type: "vocab", front: "en hest", reading: "enhest", meaning: "horse", example: { jp: "Bonden har en hest.", en: "The farmer has a horse." }, accept: ["a horse", "stallion", "mare"], drill: { jp: "Det står en hest i en skog", en: "There is a horse standing in a forest" }, hint: "HEST. Masculine: definite hesten, plural hester. Å ri is to ride one — and en hest is what en bonde from unit 18 keeps on the gård." },
        { id: "no-u19l3-eiku", type: "vocab", front: "ei ku", reading: "eiku", meaning: "cow", example: { jp: "Ei ku gir melk.", en: "A cow gives milk." }, accept: ["a cow"], drill: { jp: "Det står ei ku på et fjell", en: "There is a cow standing on a mountain" }, hint: "KUE, with the tight Norwegian u. Feminine: definite kua, and the plural is kuer or kyr — both current standard Bokmål, with kyr the form a dictionary lists first. Norwegian cows spend their summers loose på fjellet." },
        { id: "no-u19l3-ensau", type: "vocab", front: "en sau", reading: "ensau", meaning: "sheep", example: { jp: "Det går en sau på fjellet.", en: "There is a sheep out on the mountain." }, accept: ["a sheep", "ewe", "ram"], drill: { jp: "En sau går på et fjell", en: "A sheep walks on a mountain" }, hint: "SOU, rhyming with English \"how\". Masculine: definite sauen, plural sauer — Norwegian counts sheep in the ordinary way, where English cannot. Their wool is the ull of unit 15." },
        { id: "no-u19l3-enelg", type: "vocab", front: "en elg", reading: "enelg", meaning: "moose", example: { jp: "Det er en elg i skogen.", en: "There is a moose in the forest." }, accept: ["an elk", "elk", "a moose", "european elk"], drill: { jp: "En elg går i en skog", en: "A moose walks in a forest" }, hint: "ELG, both consonants sounded. Masculine: definite elgen, plural elger. The animal on the warning signs along every Norwegian road. British English calls it an elk and American English a moose — same animal, and elg is neither confusing nor optional if you drive at dusk." },
      ],
    },
    // Lesson 4: sport and play, out in that landscape.
    {
      id: "no-u19l4",
      unit: 19,
      lesson: 4,
      title: "Sport og lek",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you swim, fish, jump or throw, name a ball and a ski, and say you are out skiing in the forest.",
      items: [
        { id: "no-u19l4-asvomme", type: "vocab", front: "å svømme", reading: "asvomme", meaning: "to swim", example: { jp: "Vi svømmer i en sjø.", en: "We are swimming in a lake." }, accept: ["swim", "to go swimming", "go swimming"], drill: { jp: "Det er godt å svømme i ei elv", en: "It is good to swim in a river" }, hint: "SVUM-me, present svømmer, hand-folded to asvomme. En svømmehall is an indoor pool — and given the water temperature, that is where Norwegians swim most of the year." },
        { id: "no-u19l4-afiske", type: "vocab", front: "å fiske", reading: "afiske", meaning: "to fish", example: { jp: "Erling fisker i ei elv.", en: "Erling is fishing in a river." }, accept: ["fish", "to go fishing", "go fishing", "to angle", "angle"], drill: { jp: "Erling liker å fiske i en sjø", en: "Erling likes to fish in a lake" }, hint: "FIS-ke, present fisker. Straight from en fisk in unit 6 — the noun with a verb ending welded on, the same move English makes turning a fish into \"to fish\"." },
        { id: "no-u19l4-ahoppe", type: "vocab", front: "å hoppe", reading: "ahoppe", meaning: "to jump", example: { jp: "Barna hopper i senga.", en: "The children are jumping on the bed." }, accept: ["jump", "to leap", "leap", "to hop", "hop"], drill: { jp: "Det er lett å hoppe over noe", en: "It is easy to jump over something" }, hint: "HOP-pe, present hopper. Å hoppe på ski is ski jumping — a sport Norway more or less invented and still expects to win." },
        { id: "no-u19l4-akaste", type: "vocab", front: "å kaste", reading: "akaste", meaning: "to throw", example: { jp: "Kari kaster et eple til meg.", en: "Kari throws an apple to me." }, accept: ["throw", "to toss", "toss", "to chuck", "to cast"], drill: { jp: "Det er lett å kaste noe", en: "It is easy to throw something" }, hint: "KAS-te, present kaster. Also to throw something away: å kaste noe. English \"cast\" is the same Norse word, kept for fishing lines and film crews." },
        { id: "no-u19l4-enball", type: "vocab", front: "en ball", reading: "enball", meaning: "ball", example: { jp: "Barna spiller ball i hagen.", en: "The children are playing ball in the garden." }, accept: ["a ball"], drill: { jp: "Vi kaster en ball", en: "We throw a ball" }, hint: "BALL. Masculine: definite ballen, plural baller. Å spille ball takes no article at all — the same bare-noun pattern as kjøre bil in unit 7. Football is fotball, one word." },
        { id: "no-u19l4-enski", type: "vocab", front: "en ski", reading: "enski", meaning: "ski", example: { jp: "Erling går på ski i skogen.", en: "Erling is skiing in the forest." }, accept: ["a ski", "skis"], drill: { jp: "En ski er lang", en: "A ski is long" }, hint: "SHEE — sk before i is the broad sh, so it is NOT said the English way. Masculine: definite skien, and the plural is ski, unchanged. The phrase is what you will actually use: å gå på ski, to ski, with no article. English borrowed the word and mispronounced it." },
      ],
    },
  ],
};
