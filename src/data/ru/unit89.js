// RU Unit 89 — Инструменты и починка ("Tools and mending") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 6 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// THE MEASURED HOLE, and it is the sharpest one in the block. `u32l4` teaches
// the ABSTRACT noun `инструмент` ("a tool") and `средство`; `u57l4` teaches
// `чинить` (to mend) and `ломать` (to break) — and the only concrete objects
// anywhere near them are `нож` (u29l1), `ключ` (u15l3), `ведро` and `тряпка`
// (u57l4). So the course can say "mend it" and cannot name one thing you would
// mend it with. All nine allocated fronts were free: молоток · гвоздь · пила ·
// лопата · верёвка · клей · игла · ножницы · топор.
//
// ⚠️ TWO PLURAL-ONLY NOUNS IN ONE UNIT, which is a first for Russian here.
// `ножницы` (l3) and `клещи` (l1) have no singular at all in the tool sense, so
// every sentence takes эти and a plural adjective. Both hints say so, because a
// learner who has only met -а/-о/consonant genders will otherwise try «одна
// ножница». The singular `клещ` exists and means a tick, the insect.
//
// ⚠️ FIVE VERBS REFUSED FOR THE SAME REASON, all of them the base-beside-
// derivative fault unit51.js §3 names: `пилить` (beside пила), `сверлить`
// (beside сверло), `клеить` (beside клей), `вбивать` (beside забивать, which is
// carded) and `мастерская` — the last one twice over, since it is also a
// substantivised adjective, barred by unit51.js §2(b), and `мастер` is taught at
// u42l4. `исправлять` is TAKEN (u48l3), and `исправить`/`поправить` were refused
// because the прав- root already carries правда · направо · правильный ·
// направление · право.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT89 = {
  id: "ru-u89",
  lang: "ru",
  title: "Инструменты и починка",
  order: 89,
  stage: "b1",
  lessons: [
    {
      id: "ru-u89l1",
      unit: 89,
      lesson: 1,
      title: "The hand tools",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the tools in a shed — hammer, saw, axe, spade, screwdriver, pincers — and say which of them is blunt.",
      items: [
        { id: "ru-u89l1-molotok", type: "vocab", front: "молоток", reading: "molotok", meaning: "a hammer", accept: ["a tool for driving nails", "what you hit a nail with", "a claw hammer"], example: { jp: "Этот молоток очень тяжёлый и старый.", en: "This hammer is very heavy and very old." }, drill: { jp: "Этот молоток лежит на столе", en: "This hammer is lying on the table" }, hint: "ma-la-TOK — stress on the last syllable, and both о before it reduce to a. MASCULINE. ⚠️ The о of the last syllable drops in every other form: молотка, молотком — the same class as станок in unit 87." },
        { id: "ru-u89l1-pila", type: "vocab", front: "пила", reading: "pila", meaning: "a saw", accept: ["a toothed tool for cutting wood", "a hand saw", "what you cut a board with"], example: { jp: "Эта пила уже совсем тупая.", en: "This saw is completely blunt already." }, drill: { jp: "Эта пила очень острая", en: "This saw is very sharp" }, hint: "pi-LA — stress on the ending. FEMININE (-а). ⚠️ Said of a person, пила is a nag. The verb пилить is deliberately not carded: same root, same unit, the rule unit 51 states." },
        { id: "ru-u89l1-topor", type: "vocab", front: "топор", reading: "topor", meaning: "an axe", accept: ["a chopping tool", "what you split wood with", "a hatchet"], example: { jp: "Этот топор очень старый, но ещё острый.", en: "This axe is very old, but still sharp." }, drill: { jp: "Топор лежит возле двери", en: "The axe is lying by the door" }, hint: "ta-POR — stress on the last syllable, and the о before it reduces to a. MASCULINE. ⚠️ Worth knowing as a figure of speech: «сделано топором» means done crudely, with no finesse." },
        { id: "ru-u89l1-lopata", type: "vocab", front: "лопата", reading: "lopata", meaning: "a spade", accept: ["a digging tool", "a shovel", "what you dig the ground with"], example: { jp: "Этой лопатой можно копать землю.", en: "You can dig the ground with this spade." }, drill: { jp: "Эта лопата очень тяжёлая", en: "This spade is very heavy" }, hint: "la-PA-ta — stress on PA, and the first о reduces to a. FEMININE (-а). The tool for копать from unit 57. ⚠️ Its diminutive лопатка is the shoulder blade and also a small trowel." },
        { id: "ru-u89l1-otvyortka", type: "vocab", front: "отвёртка", reading: "otvyortka", meaning: "a screwdriver", accept: ["a tool for turning screws", "what you turn a screw with", "a driver for screws"], example: { jp: "Эта отвёртка нужна для этого винта.", en: "This screwdriver is the one needed for this bolt." }, drill: { jp: "Эта отвёртка совсем маленькая", en: "This screwdriver is very small" }, hint: "at-VYORT-ka — stress on the ё, which unit 1 §7 requires you to write. FEMININE (-а). From вертеть, to turn. The bolt it turns is винт, in lesson 2." },
        { id: "ru-u89l1-kleshchi", type: "vocab", front: "клещи", reading: "kleshchi", meaning: "pincers", accept: ["a gripping tool", "pliers", "the tool that pulls nails out"], example: { jp: "Этими клещами можно держать железо.", en: "You can hold iron with these pincers." }, drill: { jp: "Эти клещи очень старые", en: "These pincers are very old" }, hint: "KLE-shchi — stress on the first syllable, with the long soft щ from unit 3. ⚠️ PLURAL ONLY — there is no «один клещ» for the tool, so it is always эти клещи, like ножницы in lesson 3. A клещ in the singular is a tick, the insect." },
      ],
    },
    {
      id: "ru-u89l2",
      unit: 89,
      lesson: 2,
      title: "What holds things together",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the things that fasten — nail, bolt, nut, glue, rope and wire — and say which one is too thin for the job.",
      items: [
        { id: "ru-u89l2-gvozd", type: "vocab", front: "гвоздь", reading: "gvozd", meaning: "a nail", accept: ["a metal pin for wood", "what you hammer into a board", "a carpenter's nail"], example: { jp: "Этот гвоздь совсем ржавый.", en: "This nail is completely rusty." }, drill: { jp: "Этот гвоздь очень длинный", en: "This nail is very long" }, hint: "GVOZD — one syllable, and the здь at the end is zd finished soft. MASCULINE. ⚠️ Its plural moves the stress onto the ending: гвоздИ. «Гвоздь программы» is the highlight of an evening." },
        { id: "ru-u89l2-vint", type: "vocab", front: "винт", reading: "vint", meaning: "a bolt", accept: ["a screw with a thread", "a threaded metal pin", "what a screwdriver turns"], example: { jp: "Этот винт держит всю полку.", en: "This bolt holds the whole shelf." }, drill: { jp: "Этот винт очень маленький", en: "This bolt is very small" }, hint: "VINT — one syllable. MASCULINE. ⚠️ Its plural is винтЫ, stress on the ending. It is also a ship's or a plane's propeller, and «по винтику» means piece by piece." },
        { id: "ru-u89l2-gayka", type: "vocab", front: "гайка", reading: "gayka", meaning: "a nut for a bolt", accept: ["the metal ring a bolt screws into", "a hex nut", "the counterpart of a bolt"], example: { jp: "Эта гайка не держится на винте.", en: "This nut will not stay on the bolt." }, drill: { jp: "Эта гайка совсем маленькая", en: "This nut is very small" }, hint: "GAY-ka — stress on the first syllable. FEMININE (-а). ⚠️ «Закрутить гайки» means to tighten the screws on people — a political phrase you will meet in the news." },
        { id: "ru-u89l2-kley", type: "vocab", front: "клей", reading: "kley", meaning: "glue", accept: ["adhesive", "what sticks two things together", "paste for sticking"], example: { jp: "Этот клей держит стекло и дерево.", en: "This glue holds glass and wood." }, drill: { jp: "Этот клей очень сильный", en: "This glue is very strong" }, hint: "KLEY — one syllable. MASCULINE, with no everyday plural. The verb клеить is not carded here: same root, same unit." },
        { id: "ru-u89l2-veryovka", type: "vocab", front: "верёвка", reading: "veryovka", meaning: "a rope", accept: ["a cord for tying", "a length of twisted cord", "string thick enough to pull with"], example: { jp: "Эта верёвка слишком тонкая для этого.", en: "This rope is too thin for this." }, drill: { jp: "Эта верёвка очень длинная", en: "This rope is very long" }, hint: "vi-RYOV-ka — stress on the ё, always written. FEMININE (-а). Any rope or heavy string. ⚠️ «Вить верёвки из кого-то» is to twist someone round your little finger." },
        { id: "ru-u89l2-provoloka", type: "vocab", front: "проволока", reading: "provoloka", meaning: "wire", accept: ["thin metal thread", "metal drawn out into a line", "fencing wire"], example: { jp: "Эта проволока сделана из меди.", en: "This wire is made of copper." }, drill: { jp: "Эта проволока очень тонкая", en: "This wire is very thin" }, hint: "PRO-va-la-ka — four syllables, stress on the FIRST, which surprises most learners. FEMININE (-а). From волочить, to drag: metal dragged out thin. ⚠️ Not the same as провод, an electrical lead." },
      ],
    },
    {
      id: "ru-u89l3",
      unit: 89,
      lesson: 3,
      title: "The small kit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the smaller things in a drawer — needle, scissors, scrubbing brush, paintbrush, ribbon and chain — and keep щётка and кисть apart.",
      items: [
        { id: "ru-u89l3-igla", type: "vocab", front: "игла", reading: "igla", meaning: "a needle for sewing", accept: ["a sewing needle", "the thin pointed tool for thread", "what you sew with"], example: { jp: "Эта игла слишком толстая для такой ткани.", en: "This needle is too thick for cloth like this." }, drill: { jp: "Эта игла очень тонкая", en: "This needle is very thin" }, hint: "ig-LA — stress on the ending. FEMININE (-а). ⚠️ Its plural moves the stress back: Иглы. The diminutive иголка is far commoner in speech, and a pine needle is игла too." },
        { id: "ru-u89l3-nozhnitsy", type: "vocab", front: "ножницы", reading: "nozhnitsy", meaning: "scissors", accept: ["a cutting tool with two blades", "shears", "what you cut paper with"], example: { jp: "Эти ножницы совсем тупые.", en: "These scissors are completely blunt." }, drill: { jp: "Эти ножницы очень острые", en: "These scissors are very sharp" }, hint: "NOZH-ni-tsy — stress on the first syllable. ⚠️ PLURAL ONLY, like клещи in lesson 1: эти ножницы, never «одна ножница». Built on нож from unit 29." },
        { id: "ru-u89l3-shchyotka", type: "vocab", front: "щётка", reading: "shchyotka", meaning: "a scrubbing brush", accept: ["a brush with stiff bristles", "a sweeping brush", "what you scrub with"], example: { jp: "Этой щёткой можно чистить обувь.", en: "You can clean shoes with this brush." }, drill: { jp: "Эта щётка совсем старая", en: "This brush is completely old" }, hint: "SHCHYOT-ka — stress on the ё, always written, and it opens with the long soft щ. FEMININE (-а). The stiff-bristled one. `кисть`, the next card, is the soft brush you paint with." },
        { id: "ru-u89l3-kist", type: "vocab", front: "кисть", reading: "kist", meaning: "a paintbrush", accept: ["a brush for paint", "an artist's brush", "a soft brush on a handle"], example: { jp: "Художник держит кисть в руке.", en: "The artist is holding a brush in his hand." }, drill: { jp: "Эта кисть совсем мокрая", en: "This brush is completely wet" }, hint: "KIST — one syllable, and the ь keeps the т soft. FEMININE despite the -ь. ⚠️ The same word means the hand from the wrist down, and a bunch of grapes — кисть винограда." },
        { id: "ru-u89l3-lenta", type: "vocab", front: "лента", reading: "lenta", meaning: "a ribbon", accept: ["a strip of cloth or tape", "a band of material", "tape on a roll"], example: { jp: "Эта лента слишком узкая для этой шапки.", en: "This ribbon is too narrow for this hat." }, drill: { jp: "Эта лента очень узкая", en: "This ribbon is very narrow" }, hint: "LEN-ta — stress on the first syllable. FEMININE (-а). A ribbon, a tape, a conveyor belt and a reel of film are all лента. ⚠️ In the news лента means a feed." },
        { id: "ru-u89l3-tsep", type: "vocab", front: "цепь", reading: "tsep", meaning: "a chain", accept: ["links of metal joined together", "a metal chain", "a chain for pulling or locking"], example: { jp: "Эта цепь держит ворота.", en: "This chain holds the gate." }, drill: { jp: "Эта цепь очень тяжёлая", en: "This chain is very heavy" }, hint: "TSEP — one syllable, and the ь keeps the п soft. FEMININE despite the -ь. ⚠️ Also a chain of events — цепь событий, with событие from unit 59 — and a mountain chain." },
      ],
    },
    {
      id: "ru-u89l4",
      unit: 89,
      lesson: 4,
      title: "Doing the job",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you actually do with the tools — drill a board, hammer the nails in straight, sharpen a knife and bend a wire.",
      items: [
        { id: "ru-u89l4-drel", type: "vocab", front: "дрель", reading: "drel", meaning: "a power drill", accept: ["a tool that bores holes", "an electric drill", "what you make a hole with"], example: { jp: "Эта дрель работает очень громко.", en: "This drill works very loudly." }, drill: { jp: "Дрель лежит на этом столе", en: "The drill is lying on this table" }, hint: "DREL — one syllable, and the ь keeps the л soft. FEMININE despite the -ь. From German. ⚠️ The bit that goes into it is сверло, the next card — they are two separate words in Russian." },
        { id: "ru-u89l4-sverlo", type: "vocab", front: "сверло", reading: "sverlo", meaning: "a drill bit", accept: ["the cutting piece of a drill", "the bit that bores", "what goes into a drill"], example: { jp: "Это сверло слишком толстое для такой доски.", en: "This bit is too thick for a board like this." }, drill: { jp: "Это сверло совсем тупое", en: "This bit is completely blunt" }, hint: "svir-LO — stress on the ending, and the е reduces to i. NEUTER (-о). ⚠️ Its plural moves the stress right back and takes ё: свЁрла. The verb сверлить is not carded — same root, same unit." },
        { id: "ru-u89l4-doska", type: "vocab", front: "доска", reading: "doska", meaning: "a plank", accept: ["a board of wood", "a flat length of timber", "a wooden board"], example: { jp: "Эта доска слишком тонкая для пола.", en: "This plank is too thin for a floor." }, drill: { jp: "Эта доска очень толстая", en: "This plank is very thick" }, hint: "das-KA — stress on the ending, and the о reduces to a. FEMININE (-а). ⚠️ Its plural moves the stress right back: дОски. Also a blackboard, a chessboard and a notice board." },
        { id: "ru-u89l4-zabivat", type: "vocab", front: "забивать", reading: "zabivat", meaning: "to hammer something in", accept: ["to drive a nail home", "to knock in with a hammer", "to bang something in"], example: { jp: "Гвозди нужно забивать очень ровно.", en: "Nails have to be hammered in very straight." }, drill: { jp: "Гвозди нужно забивать ровно", en: "Nails have to be hammered in straight" }, hint: "za-bi-VAT — stress on the last syllable, and both vowels before it reduce. ⚠️ Also the ordinary word for scoring a goal — забить гол — while in slang «забить на что-то» means not to bother with it at all." },
        { id: "ru-u89l4-tochit", type: "vocab", front: "точить", reading: "tochit", meaning: "to sharpen", accept: ["to put an edge on a blade", "to grind a tool sharp", "to hone"], example: { jp: "Нож нужно точить каждую неделю.", en: "A knife has to be sharpened every week." }, drill: { jp: "Этот нож нужно точить", en: "This knife needs sharpening" }, hint: "ta-CHIT — stress on the last syllable, and the о reduces to a. Its present tense is точу, точишь. ⚠️ It also means to wear away at — вода точит камень, water wears down stone." },
        { id: "ru-u89l4-gnut", type: "vocab", front: "гнуть", reading: "gnut", meaning: "to bend something", accept: ["to curve a thing out of shape", "to bow metal", "to force something into a bend"], example: { jp: "Эту проволоку легко гнуть руками.", en: "This wire is easy to bend by hand." }, drill: { jp: "Такое железо трудно гнуть", en: "Iron like this is hard to bend" }, hint: "GNUT — one syllable, opening with gn said together. Its present tense is гну, гнёшь. ⚠️ «Гнуть свою линию» is to stick to your own line regardless, with линия from unit 36." },
      ],
    },
  ],
};
