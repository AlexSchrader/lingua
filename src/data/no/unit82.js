// NO Unit 82 — Verktøy og reparasjon (slot: coverage-b1-9) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 9 (B1)".
//
// u30 l1 is called "Housework and tools" and teaches cleaning — ei bøtte, å
// vaske, å tørke. u46 "Form og materiale" teaches å bygge, å brekke, å bøye and
// the materials. Between them there is no hammer, no screwdriver, no nail, no
// ladder and no glue: the corpus can describe a finished object and cannot name
// anything used to make one. In a country where people fix their own cabin, that
// is a real hole.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT82 = {
  id: "no-u82",
  lang: "no",
  title: "Verktøy og reparasjon",
  order: 82,
  stage: "b1",
  lessons: [
    {
      id: "no-u82l1",
      unit: 82,
      lesson: 1,
      title: "Verktøykassa",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the tools in the box and ask somebody to pass you one.",
      items: [
        { id: "no-u82l1-enhammer", type: "vocab", front: "en hammer", reading: "enhammer", meaning: "hammer", example: { jp: "Kan du gi meg hammeren som ligger på bordet?", en: "Can you pass me the hammer that's on the table?" }, accept: ["a mallet"], drill: { jp: "Gi meg en hammer her", en: "Pass me a hammer here" }, hint: "en hammer → hammeren, flertall hamre. Merk flertallet, som mister en e. Å hamre er verbet." },
        { id: "no-u82l1-enskrutrekker", type: "vocab", front: "en skrutrekker", reading: "enskrutrekker", meaning: "screwdriver", example: { jp: "Denne skrutrekkeren er for stor til de små skruene.", en: "This screwdriver is too big for the small screws." }, accept: ["a screw driver"], drill: { jp: "Jeg trenger en skrutrekker til dette", en: "I need a screwdriver for this" }, hint: "en skrutrekker → skrutrekkeren. Ei skrue + å trekke (u77): the thing that pulls a screw. Helt gjennomsiktig ord." },
        { id: "no-u82l1-eitang", type: "vocab", front: "ei tang", reading: "eitang", meaning: "pliers", example: { jp: "Uten ei tang får du aldri den spikeren ut.", en: "Without pliers you'll never get that nail out." }, accept: ["a pair of pliers", "pincers"], drill: { jp: "Uten ei tang går det ikke", en: "Without pliers it will not work" }, hint: "ei tang → tanga, flertall tenger. Entall på norsk der engelsk har flertall: ei tang, one pair of pliers." },
        { id: "no-u82l1-eisag", type: "vocab", front: "ei sag", reading: "eisag", meaning: "a saw (tool)", example: { jp: "Han lånte ei sag av naboen for å dele treet.", en: "He borrowed a saw from the neighbour to cut the tree in two." }, accept: ["a handsaw", "saw"], drill: { jp: "Han lånte ei sag av naboen", en: "He borrowed a saw from the neighbour" }, hint: "ei sag → saga, flertall sager. Verbet å sage. Ei motorsag er the chainsaw." },
        { id: "no-u82l1-enstige", type: "vocab", front: "en stige", reading: "enstige", meaning: "ladder", example: { jp: "Stigen er ikke lang nok til å komme opp på taket.", en: "The ladder isn't long enough to get up onto the roof." }, accept: ["a stepladder"], drill: { jp: "Vi må ha en stige her", en: "We have to have a ladder here" }, hint: "en stige → stigen, flertall stiger. Fra å stige, to climb. Ikke forveksl med en sti (neste enhet), a path." },
        { id: "no-u82l1-etvater", type: "vocab", front: "et vater", reading: "etvater", meaning: "a spirit level", example: { jp: "Du trenger et vater for å henge bildet helt rett.", en: "You need a spirit level to hang the picture completely straight." }, drill: { jp: "Han legger et vater på bordet", en: "He puts a spirit level on the table" }, accept: ["a level (tool)", "a bubble level"], hint: "VA-ter. Neuter: definite vateret, plural vater with no ending. Å være i vater is to be perfectly horizontal, and the little bubble in the middle is how you know." },
      ],
    },
    {
      id: "no-u82l2",
      unit: 82,
      lesson: 2,
      title: "Å feste ting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Fix one thing to another — nails, screws, bolts, glue and tape.",
      items: [
        { id: "no-u82l2-enspiker", type: "vocab", front: "en spiker", reading: "enspiker", meaning: "nail", example: { jp: "Det står en spiker ut av veggen, så vær forsiktig.", en: "There's a nail sticking out of the wall, so be careful." }, accept: ["a tack"], drill: { jp: "Det står en spiker ut", en: "There is a nail sticking out" }, hint: "en spiker → spikeren, flertall spikre eller spiker. Å spikre er verbet. En negl (not taught in this course) er neglen på fingeren — to helt ulike ord." },
        { id: "no-u82l2-eiskrue", type: "vocab", front: "ei skrue", reading: "eiskrue", meaning: "screw", example: { jp: "Ei skrue holder bedre enn en spiker i tre.", en: "A screw holds better than a nail in wood." }, accept: ["a bolt (small)"], drill: { jp: "Ei skrue holder bedre enn spiker", en: "A screw holds better than a nail" }, hint: "ei skrue → skrua, flertall skruer. Verbet å skru (u48) er allerede kjent." },
        { id: "no-u82l2-enbolt", type: "vocab", front: "en bolt", reading: "enbolt", meaning: "bolt", example: { jp: "Du trenger en lengre bolt for å feste dette godt.", en: "You need a longer bolt to fasten this properly." }, accept: ["a pin"], drill: { jp: "Du trenger en bolt til dette", en: "You need a bolt for this" }, hint: "en bolt → bolten, flertall bolter. Større enn ei skrue, og har alltid en mutter på den andre siden." },
        { id: "no-u82l2-lim", type: "vocab", front: "lim", reading: "lim", meaning: "glue", example: { jp: "Litt lim er nok, ellers blir det lim over alt.", en: "A little glue is enough, otherwise there is glue everywhere." }, accept: ["adhesive", "paste"], drill: { jp: "Litt lim er nok her", en: "A little glue is enough here" }, hint: "lim → limet. Massesubstantiv, alltid uten artikkel (regel 1b), sjelden i flertall. Verbet er å lime." },
        { id: "no-u82l2-enteip", type: "vocab", front: "en teip", reading: "enteip", meaning: "tape", example: { jp: "Vi satte en teip over vinduet til vi fikk et nytt.", en: "We put tape over the window until we got a new one." }, accept: ["sticky tape", "adhesive tape"], drill: { jp: "Vi satte en teip over vinduet", en: "We put tape over the window" }, hint: "en teip → teipen. Norsk skrivemåte av engelsk tape; tape ses også. Verbet er å teipe." },
        { id: "no-u82l2-abanke", type: "vocab", front: "å banke", reading: "abanke", meaning: "to knock (bang)", example: { jp: "Noen banket på døra klokka sju i går.", en: "Somebody knocked on the door at seven yesterday." }, accept: ["to bang", "to beat", "knock"], drill: { jp: "Det er nok å banke lett", en: "It is enough to knock lightly" }, hint: "å banke → banker, banket. Banke på døra, banke inn en spiker. Hjertet banker også." },
      ],
    },
    {
      id: "no-u82l3",
      unit: 82,
      lesson: 3,
      title: "Å gjøre jobben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Do the work — drill, fasten, loosen, fix, replace and sand.",
      items: [
        { id: "no-u82l3-abore", type: "vocab", front: "å bore", reading: "abore", meaning: "to drill", example: { jp: "Du må bore i veggen før du setter inn skrua.", en: "You have to drill in the wall before you put the screw in." }, accept: ["drill", "to bore"], drill: { jp: "Det er lett å bore her", en: "It is easy to drill here" }, hint: "å bore → borer, borte. En drill eller en bormaskin er maskinen. Merk at fortida borte ser ut som borte (u76) — ulike ord." },
        { id: "no-u82l3-afeste", type: "vocab", front: "å feste", reading: "afeste", meaning: "to fasten", example: { jp: "Vi festet hylla i veggen med fire lange skruer.", en: "We fastened the shelf to the wall with four long screws." }, accept: ["to attach", "to secure", "fasten"], drill: { jp: "Det er viktig å feste alt godt", en: "It is important to fasten everything properly" }, hint: "å feste → fester, festet. Fast (u46) er adjektivet. Et feste er the fixing point; en fest er a party — annet ord." },
        { id: "no-u82l3-alosne", type: "vocab", front: "å løsne", reading: "alosne", meaning: "to loosen", example: { jp: "Skruene har løsnet, så hele hylla henger dårlig.", en: "The screws have loosened, so the whole shelf hangs badly." }, accept: ["to come loose", "to slacken"], drill: { jp: "Vi må prøve å løsne den", en: "We have to try to loosen it" }, hint: "å løsne → løsner, løsnet. Fra løs, loose. Paret til å feste, og brukes både om det du gjør og det som skjer av seg selv." },
        { id: "no-u82l3-afikse", type: "vocab", front: "å fikse", reading: "afikse", meaning: "to fix", example: { jp: "Han fikser alt selv, og det tar alltid lengre tid.", en: "He fixes everything himself, and it always takes longer." }, accept: ["to sort out", "to repair", "fix"], drill: { jp: "Han begynner å fikse alt selv", en: "He starts fixing everything himself" }, hint: "å fikse → fikser. Uformelt; å reparere (u60) er ordet på verkstedet. Å fikse opp = to do up a place." },
        { id: "no-u82l3-aslipe", type: "vocab", front: "å slipe", reading: "aslipe", meaning: "to sand (grind)", example: { jp: "Vi må slipe bordet før vi maler det på nytt.", en: "We have to sand the table before we paint it again." }, accept: ["to grind", "to polish", "to sharpen"], drill: { jp: "Det tar tid å slipe hele bordet", en: "It takes time to sand the whole table" }, hint: "å slipe → sliper, slipte. Om tre: to sand. Om en kniv: to sharpen. Ikke det samme som å slippe, to drop." },
        { id: "no-u82l3-amontere", type: "vocab", front: "å montere", reading: "amontere", meaning: "to install a fitting", example: { jp: "De skal montere den nye ovnen i morgen tidlig.", en: "They are going to install the new stove tomorrow morning." }, drill: { jp: "Det tar tid å montere en ovn", en: "It takes time to install a stove" }, accept: ["to assemble", "to fit (in place)", "to mount"], hint: "mon-TE-re. Present monterer, past monterte. It covers both putting the parts together and fastening the finished thing to the wall — en montør is the person who does it for a living." },
      ],
    },
    {
      id: "no-u82l4",
      unit: 82,
      lesson: 4,
      title: "Maling og overflate",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Paint a surface and talk about what it looks like afterwards.",
      items: [
        { id: "no-u82l4-maling", type: "vocab", front: "maling", reading: "maling", meaning: "paint", example: { jp: "Vi kjøpte hvit maling til hele gangen.", en: "We bought white paint for the whole hallway." }, accept: ["a coat of paint"], drill: { jp: "Vi kjøpte maling i går", en: "We bought paint yesterday" }, hint: "maling → malinga. Fra å male (u35). Massesubstantiv, derfor bart oppslag (regel 1b): du kjøper en liter, ikke ei maling." },
        { id: "no-u82l4-enkost", type: "vocab", front: "en kost", reading: "enkost", meaning: "brush", example: { jp: "Vask kosten godt, ellers blir den hard i morgen.", en: "Wash the brush properly, otherwise it'll be hard tomorrow." }, accept: ["a paintbrush", "a broom"], drill: { jp: "Vi kjøpte en kost og maling", en: "We bought a brush and paint" }, hint: "en kost → kosten, flertall koster. Både malerkosten og feiekosten. NB: en kost betyr også food i faste uttrykk som kost og losji." },
        { id: "no-u82l4-etmalingsspann", type: "vocab", front: "et malingsspann", reading: "etmalingsspann", meaning: "paint tin", example: { jp: "Det står tre malingsspann igjen oppe på loftet.", en: "There are three paint tins left up in the attic." }, accept: ["a paint can", "a paint bucket"], drill: { jp: "Det står et malingsspann på loftet", en: "There is a paint tin in the attic" }, hint: "et malingsspann → malingsspannet, flertall malingsspann. Ei maling + et spann, a bucket." },
        { id: "no-u82l4-sandpapir", type: "vocab", front: "sandpapir", reading: "sandpapir", meaning: "sandpaper", example: { jp: "Bruk sandpapir først og en kost etterpå.", en: "Use sandpaper first and a brush afterwards." }, accept: ["glasspaper", "abrasive paper"], drill: { jp: "Bruk sandpapir og en kost", en: "Use sandpaper and a brush" }, hint: "sandpapir → sandpapiret. En sand + et papir (u18). Massesubstantiv, derfor bart oppslag. Brukes til å slipe for hånd." },
        { id: "no-u82l4-enflekk", type: "vocab", front: "en flekk", reading: "enflekk", meaning: "stain (spot)", example: { jp: "Det er en stor flekk på veggen bak døra.", en: "There's a big stain on the wall behind the door." }, accept: ["a mark", "a spot", "a blot"], drill: { jp: "Det er en flekk på veggen", en: "There is a stain on the wall" }, hint: "en flekk → flekken, flertall flekker. Både en flekk på skjorta og en flekk med sol på gulvet." },
        { id: "no-u82l4-eirulle", type: "vocab", front: "ei rulle", reading: "eirulle", meaning: "roller (roll)", example: { jp: "Med ei rulle går hele veggen mye fortere.", en: "With a roller the whole wall goes much faster." }, accept: ["a paint roller", "a roll"], drill: { jp: "Med ei rulle går det fortere", en: "With a roller it goes faster" }, hint: "ei rulle → rulla, flertall ruller. Fra å rulle. Også ei rulle med teip." },
      ],
    },
  ],
};
