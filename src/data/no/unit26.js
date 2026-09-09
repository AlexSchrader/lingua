// NO Unit 26 — Dyr i naturen ("Animals in the wild") — A2
// REVISITS A1 u19 Natur og dyr, which owns et dyr, en fugl, en hest, en sau, ei
// ku, en elg, et fjell, en skog, ei elv, ei strand, et tre, å svømme — plus u4's
// en katt and en hund and u6's en fisk. A1 NAMES the animal and the landscape it
// stands in. This unit is the animal itself: which wild ones there are, the parts
// of it, what it does to stay alive. No A1 front comes back.
//
// SCOPE CEDED, deliberately, after sweeping both sibling worktrees:
//   - block 2 u34 is nature-as-SCIENCE: en natur, ei plante, ei rot, et menneske,
//     et liv, å vokse, jord, luft, et miljø, ei kraft. Nothing here touches it.
//   - block 3 u45 is GEOGRAPHY (en dal, en fjord, en topp, en kyst, et hav, en
//     innsjø) and u43 is WEATHER (en storm, ei tåke, en is, ei stjerne, et blad).
//     So this unit takes no landform and no weather word — en bakke, en stein, ei
//     myr and en foss all screened free and were all left alone. Three units all
//     called "nature" only works if each one owns a different noun class.
//
// GENDER: ei flue, ei fjær, ei klo, ei hule are feminine so the definite -a is
// derivable (flua, fjæra, kloa, hula), per §1. `ei klo` pluralises irregularly to
// klør — flagged in its hint because no rule in the course predicts it.
//
// ⚠️ `vill` and the taught modal `vil` (å ville, u13) are one letter apart, and
// vill's plural/definite `ville` IS the past of that modal. The hint says so. No
// example or drill in this unit uses either form of ville, so the collision is
// named where the learner meets it and avoided everywhere else.
//
// Subordinators are A1's REAL set: at, fordi, hvis, men, eller, når. NOT `som`,
// `for` or `der` — untaught in A1's 480, and lint structurally cannot see that
// (lint.js:226 excuses `for` as an inflection of `fordi`). u29 claims all three.
//   FREE: Erling, Kari, Anna, Jonas, Oslo, Bergen, Norge | telefon | 2000
//   A FREE entry is exempt in EVERY unit, not just this one, so a word this
//   course teaches as a front must NEVER appear here — it would disable the
//   forward-reference check for that word corpus-wide.
export const NO_UNIT26 = {
  id: "no-u26",
  lang: "no",
  title: "Dyr i naturen",
  order: 26,
  stage: "a2",
  lessons: [
    {
      id: "no-u26l1",
      unit: 26,
      lesson: 1,
      title: "Wild animals",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the wild animals A1 left out — en ulv, en bjørn, en rev, en hare, en orm, en frosk.",
      items: [
        { id: "no-u26l1-enulv", type: "vocab", front: "en ulv", reading: "enulv", meaning: "wolf", example: { jp: "Ulven bor i skogen, men vi ser den sjelden.", en: "The wolf lives in the forest, but we seldom see it." }, accept: ["a wolf"], drill: { jp: "En ulv bor i skogen", en: "A wolf lives in the forest" }, hint: "ULV. Masculine: definite ulven, plural ulver. Norway has few of them and argues about all of them." },
        { id: "no-u26l1-enbjorn", type: "vocab", front: "en bjørn", reading: "enbjorn", meaning: "bear", example: { jp: "Bjørnen sover mye når det er kaldt, og den spiser ingenting.", en: "The bear sleeps a lot when it is cold, and it eats nothing." }, accept: ["a bear"], drill: { jp: "En bjørn sover veldig mye", en: "A bear sleeps a lot" }, hint: "BYURN — the silent j after b, and ø written o in the reading. Masculine: definite bjørnen, plural bjørner." },
        { id: "no-u26l1-enrev", type: "vocab", front: "en rev", reading: "enrev", meaning: "fox", example: { jp: "Reven tar en fugl hvis bonden ikke er ute.", en: "The fox takes a bird if the farmer is not outside." }, accept: ["a fox"], drill: { jp: "En rev tar en fugl", en: "A fox takes a bird" }, hint: "REV. Masculine: definite reven, plural rever. Rev is also red hair — rødt som en rev." },
        { id: "no-u26l1-enhare", type: "vocab", front: "en hare", reading: "enhare", meaning: "hare", example: { jp: "Haren blir hvit når det er kaldt, og vi ser den ikke i skogen.", en: "The hare turns white when it is cold, and we do not see it in the forest." }, accept: ["a hare", "rabbit"], drill: { jp: "En hare er rask og lett", en: "A hare is fast and light" }, hint: "HAA-re. Masculine: definite haren, plural harer. Careful: haren, not `har` — the verb å ha is a different word entirely." },
        { id: "no-u26l1-enorm", type: "vocab", front: "en orm", reading: "enorm", meaning: "snake", example: { jp: "Ormen ligger i sola, men den flytter seg når vi kommer.", en: "The snake lies in the sun, but it moves when we come." }, accept: ["a snake", "worm", "serpent"], drill: { jp: "En orm ligger i gresset", en: "A snake lies in the grass" }, hint: "ORM. Masculine: definite ormen, plural ormer. It covers both snakes and worms — a meitemark is the garden kind." },
        { id: "no-u26l1-enfrosk", type: "vocab", front: "en frosk", reading: "enfrosk", meaning: "frog", example: { jp: "Frosken hopper ned i vannet når barna kommer nær.", en: "The frog jumps down into the water when the children come close." }, accept: ["a frog"], drill: { jp: "En frosk hopper i vannet", en: "A frog jumps in the water" }, hint: "FROSK. Masculine: definite frosken, plural frosker. The sk stays hard, unlike in `å skje`." },
      ],
    },
    {
      id: "no-u26l2",
      unit: 26,
      lesson: 2,
      title: "Small creatures",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about insects and what a bird leaves behind — et insekt, ei flue, en maur, et egg, et reir, ei fjær.",
      items: [
        { id: "no-u26l2-etinsekt", type: "vocab", front: "et insekt", reading: "etinsekt", meaning: "insect", example: { jp: "Et insekt kommer inn når vi har vinduet åpent.", en: "An insect comes in when we have the window open." }, accept: ["an insect", "bug"], drill: { jp: "Et insekt er veldig lite", en: "An insect is very small" }, hint: "in-SEKT, stress on the end. Neuter: definite insektet, plural insekter." },
        { id: "no-u26l2-eiflue", type: "vocab", front: "ei flue", reading: "eiflue", meaning: "fly", example: { jp: "Flua sitter på vinduet, men den drar straks vi kommer nær.", en: "The fly sits on the window, but it leaves the moment we come close." }, accept: ["a fly"], drill: { jp: "Ei flue sitter på vinduet", en: "A fly sits on the window" }, hint: "FLOO-e. Feminine: definite flua, plural fluer. Not to be confused with et fly, an aeroplane, from u20." },
        { id: "no-u26l2-enmaur", type: "vocab", front: "en maur", reading: "enmaur", meaning: "ant", example: { jp: "Mauren er liten, men den er veldig sterk.", en: "The ant is small, but it is very strong." }, accept: ["an ant"], drill: { jp: "En maur er liten og sterk", en: "An ant is small and strong" }, hint: "MAUR, the au as in `au!`. Masculine: definite mauren, and the plural is maur unchanged." },
        { id: "no-u26l2-etegg", type: "vocab", front: "et egg", reading: "etegg", meaning: "egg", example: { jp: "Egget ligger i reiret, fordi fuglen vil ha det varmt.", en: "The egg lies in the nest, because the bird wants to keep it warm." }, accept: ["an egg"], drill: { jp: "Et egg ligger i gresset", en: "An egg lies in the grass" }, hint: "EGG. Neuter: definite egget, and the plural is egg unchanged — to egg, two eggs." },
        { id: "no-u26l2-etreir", type: "vocab", front: "et reir", reading: "etreir", meaning: "nest", example: { jp: "Fuglen lager et reir i treet fordi den skal ha unger.", en: "The bird makes a nest in the tree because it is going to have young." }, accept: ["a nest"], drill: { jp: "Et reir ligger høyt i treet", en: "A nest lies high in the tree" }, hint: "REIR, one syllable, the ei as in `nei`. Neuter: definite reiret, plural reir unchanged." },
        { id: "no-u26l2-eifjaer", type: "vocab", front: "ei fjær", reading: "eifjaer", meaning: "feather", example: { jp: "Ei fjær ligger i gresset, men vi finner ikke fuglen igjen.", en: "A feather lies in the grass, but we do not find the bird again." }, accept: ["a feather", "a spring"], drill: { jp: "Ei fjær er hvit og lett", en: "A feather is white and light" }, hint: "FYAER — æ written ae in the reading. Feminine: definite fjæra, plural fjær unchanged. It also means a metal spring." },
      ],
    },
    {
      id: "no-u26l3",
      unit: 26,
      lesson: 3,
      title: "Parts and packs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe an animal's body and where it lives — en hale, en vinge, ei klo, en pels, en flokk, ei hule.",
      items: [
        { id: "no-u26l3-enhale", type: "vocab", front: "en hale", reading: "enhale", meaning: "tail", example: { jp: "Hunden har en lang hale, og den er glad når du kommer hjem.", en: "The dog has a long tail, and it is happy when you come home." }, accept: ["a tail"], drill: { jp: "En hale kan bli lang", en: "A tail can get long" }, hint: "HAA-le. Masculine: definite halen, plural haler. A dog wags it — hunden logrer med halen." },
        { id: "no-u26l3-envinge", type: "vocab", front: "en vinge", reading: "envinge", meaning: "wing", example: { jp: "Fuglen har en vond vinge, og den kan ikke komme seg opp.", en: "The bird has a bad wing, and it cannot get itself up." }, accept: ["a wing"], drill: { jp: "En vinge er sterk og lett", en: "A wing is strong and light" }, hint: "VING-e, with a hard g. Masculine: definite vingen, plural vinger. An aeroplane has them too." },
        { id: "no-u26l3-eiklo", type: "vocab", front: "ei klo", reading: "eiklo", meaning: "claw", example: { jp: "Katta har ei klo i treet, og den kommer ikke ned igjen.", en: "The cat has a claw in the tree, and it does not come down again." }, accept: ["a claw", "talon"], drill: { jp: "Ei klo er sterk og lang", en: "A claw is strong and long" }, hint: "KLOO. Feminine: definite kloa. ⚠️ The plural is klør, not kloer — nothing in the course predicts that one, so learn it here. Sharp is skarp, which the course has not taught yet." },
        { id: "no-u26l3-enpels", type: "vocab", front: "en pels", reading: "enpels", meaning: "fur", example: { jp: "Pelsen blir lang når det er kaldt, og dyret orker vinteren.", en: "The fur gets long when it is cold, and the animal can stand the winter." }, accept: ["fur", "a coat", "pelt"], drill: { jp: "En pels blir lang og tung", en: "Fur gets long and heavy" }, hint: "PELS. Masculine: definite pelsen, plural pelser. It is the animal's coat and also a fur coat a person wears." },
        { id: "no-u26l3-enflokk", type: "vocab", front: "en flokk", reading: "enflokk", meaning: "flock", example: { jp: "En flokk med sauer går sakte opp i fjellet.", en: "A flock of sheep walks slowly up into the mountain." }, accept: ["a flock", "herd", "pack", "group"], drill: { jp: "En flokk med fugler er stor", en: "A flock of birds is big" }, hint: "FLOKK. Masculine: definite flokken, plural flokker. One word for flock, herd and pack — you say en flokk MED whatever it is." },
        { id: "no-u26l3-eihule", type: "vocab", front: "ei hule", reading: "eihule", meaning: "cave", example: { jp: "Bjørnen sover i ei hule, og den kommer ikke ut før det blir varmt.", en: "The bear sleeps in a cave, and it does not come out before it gets warm." }, accept: ["a cave", "den", "burrow"], drill: { jp: "Ei hule er mørk og kald", en: "A cave is dark and cold" }, hint: "HOO-le. Feminine: definite hula, plural huler. An animal's den and a hole in a mountain are the same word." },
      ],
    },
    {
      id: "no-u26l4",
      unit: 26,
      lesson: 4,
      title: "Staying alive",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what an animal does to live — å jakte, å krype, å grave, å plukke, vill, et gress.",
      items: [
        { id: "no-u26l4-ajakte", type: "vocab", front: "å jakte", reading: "ajakte", meaning: "to hunt", example: { jp: "Ulven jakter når det er mørkt, og den spiser sammen med flokken.", en: "The wolf hunts when it is dark, and it eats together with the pack." }, accept: ["hunt", "to go hunting"], drill: { jp: "Det er lett å jakte i skogen", en: "It is easy to hunt in the forest" }, hint: "YAK-te. Present jakter, past jaktet. You jakte PÅ something — reven jakter på en hare, from lesson 1." },
        { id: "no-u26l4-akrype", type: "vocab", front: "å krype", reading: "akrype", meaning: "to crawl", example: { jp: "Ormen kryper under et tre når den hører at noen kommer.", en: "The snake crawls under a tree when it hears that someone is coming." }, accept: ["crawl", "to creep"], drill: { jp: "Det er lett å krype under treet", en: "It is easy to crawl under the tree" }, hint: "KRUE-pe. Present kryper, past krøp, perfect krøpet — a strong verb, so the vowel changes and no -te ending appears." },
        { id: "no-u26l4-agrave", type: "vocab", front: "å grave", reading: "agrave", meaning: "to dig", example: { jp: "Hunden graver i hagen fordi den vil finne noe.", en: "The dog digs in the garden because it wants to find something." }, accept: ["dig", "to dig up"], drill: { jp: "Det er tungt å grave i hagen", en: "It is hard to dig in the garden" }, hint: "GRAA-ve. Present graver, past gravde. En grav is a grave — the noun is the same word standing still." },
        { id: "no-u26l4-aplukke", type: "vocab", front: "å plukke", reading: "aplukke", meaning: "to pick", example: { jp: "Barna plukker noe i gresset, og de kommer hjem sent.", en: "The children pick something in the grass, and they come home late." }, accept: ["pick", "to gather", "to pick up"], drill: { jp: "Det er fint å plukke noe i skogen", en: "It is nice to pick something in the forest" }, hint: "PLUK-ke. Present plukker, past plukket. It is the word for picking berries and flowers; for a thing on the floor it is å plukke opp." },
        { id: "no-u26l4-vill", type: "vocab", front: "vill", reading: "vill", meaning: "wild", example: { jp: "En vill hest er redd, men den blir rolig hvis vi venter.", en: "A wild horse is afraid, but it becomes calm if we wait." }, accept: ["untamed", "feral"], drill: { jp: "En hest kan bli vill", en: "A horse can turn wild" }, hint: "VILL. Neuter vilt — the double l collapses before the -t, like grønn/grønt. ⚠️ One letter from `vil` (å ville, u13), and vill's own plural form ville is that verb's past. Read the sentence, not the word." },
        { id: "no-u26l4-etgress", type: "vocab", front: "et gress", reading: "etgress", meaning: "grass", example: { jp: "Gresset blir grønt igjen når våren kommer.", en: "The grass turns green again when spring comes." }, accept: ["grass"], drill: { jp: "Et gress kan bli veldig høyt", en: "Grass can get very high" }, hint: "GRESS. Neuter: definite gresset. A mass noun, so you rarely need a plural — sauene spiser gress." },
      ],
    },
  ],
};
