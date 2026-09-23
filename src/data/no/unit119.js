// NO Unit 119 — Retning og bevegelse · 2 (slot: coverage-b2-9) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 9 (B2)"; retitled per CLAUDE.md
// "No front language". Continues u45 Retning og geografi and u76 lesson 2.
//
// MEASURED, and this is the second half of a hole the B1 coverage seat found and
// half-closed. u13l3 teaches the MOTION adverbs ut, inn, opp, ned, bort,
// tilbake; u76l2 added the STATIC partners ute, inne, oppe, nede, hjemme, borte.
// Screened again now, what is still missing from that same system is:
//   • fram / framme — the one pair the B1 seat did not reach. `framover` (u45)
//     and `fram til` are taught, but bare `fram` is a front NOWHERE, while being
//     USED in u62's examples (no-u62l4-aseframtil, example and drill). A word
//     the corpus leans on and never teaches is a defect, not a preference.
//   • hit / dit and herfra / derfra — the deictic pairs. The corpus teaches her
//     and der (place) and stops; it has no way to say "come HERE" as against
//     "be here", which is the same motion/static split one step over.
//   • the -over series of directions: bakover, innover, utover, nedover,
//     bortover, nordover. `framover` and `oppover` ARE taught (u45l1, u76l3) —
//     so this is a paradigm with two of eight filled.
//
// ⚠️ The screen is discriminating because these are closed paradigms with named
// members. Lesson 4's verbs of motion are NOT a closed class and were chosen,
// not measured; they are here because the paradigm lessons needed a partner and
// every one of them was verified absent before it was written.
//
// Conventions per no/unit1.js. Readings are hand-written ASCII folds.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT119 = {
  id: "no-u119",
  lang: "no",
  title: "Retning og bevegelse · 2",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "no-u119l1",
      unit: 119,
      lesson: 1,
      title: "Hit, dit og herfra",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Tell someone to come here or go there, and say where you are coming from.",
      items: [
        { id: "no-u119l1-hit", type: "vocab", front: "hit", reading: "hit", meaning: "to here", example: { jp: "Kan du komme hit et øyeblikk?", en: "Can you come here for a moment?" }, accept: ["over here", "this way", "hither"], drill: { jp: "Kan du komme hit nå", en: "Can you come here now" }, hint: "Motion TO the speaker. Her (u3) is where you already are: kom hit, og så er du her. Same split as ut and ute." },
        { id: "no-u119l1-dit", type: "vocab", front: "dit", reading: "dit", meaning: "to there", example: { jp: "Vi må dit før butikken stenger.", en: "We have to get there before the shop closes." }, accept: ["over there", "that way", "thither"], drill: { jp: "Vi må dit før butikken stenger", en: "We have to get there before the shop closes" }, hint: "Motion AWAY, to a place already mentioned. Der is the place, dit is the road to it — and Norwegian will not accept der for both." },
        { id: "no-u119l1-herfra", type: "vocab", front: "herfra", reading: "herfra", meaning: "from here", example: { jp: "Det er to timer herfra til Bergen.", en: "It is two hours from here to Bergen." }, accept: ["away from here", "from this place"], drill: { jp: "Det er to timer herfra til Bergen", en: "It is two hours from here to Bergen" }, hint: "her + fra, written as one word. Norwegian does not say fra her — the compound is the only correct form." },
        { id: "no-u119l1-derfra", type: "vocab", front: "derfra", reading: "derfra", meaning: "from there", example: { jp: "Vi tok bussen derfra og hjem.", en: "We took the bus from there and home." }, accept: ["away from there", "from that place"], drill: { jp: "Vi tok bussen derfra og hjem", en: "We took the bus from there and home" }, hint: "The partner to herfra, and equally compulsory: fra der is wrong except before a clause (fra der vi står)." },
        { id: "no-u119l1-fram", type: "vocab", front: "fram", reading: "fram", meaning: "forward (to a destination)", example: { jp: "Toget kom fram nesten en time for sent.", en: "The train arrived almost an hour late." }, accept: ["forwards", "ahead", "there (arrived)"], drill: { jp: "Toget kom fram en time for sent", en: "The train arrived an hour late" }, hint: "Å komme fram is the ordinary Norwegian for 'to arrive' — nothing to do with å ankomme, which belongs on a timetable. Also written frem; both are correct Bokmål." },
        { id: "no-u119l1-framme", type: "vocab", front: "framme", reading: "framme", meaning: "arrived (at the front)", example: { jp: "Er vi framme snart?", en: "Are we nearly there?" }, accept: ["there (at the place)", "at the front", "arrived"], drill: { jp: "Er vi framme snart", en: "Are we nearly there" }, hint: "The static partner of fram, and the last pair in the ut/ute series. It is also the phrase every Norwegian child says in the back of a car." },
      ],
    },
    {
      id: "no-u119l2",
      unit: 119,
      lesson: 2,
      title: "Retningen på -over",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say which way something is moving — backwards, inwards, outwards, downwards, northwards.",
      items: [
        { id: "no-u119l2-bakover", type: "vocab", front: "bakover", reading: "bakover", meaning: "backwards", example: { jp: "Han så seg bakover før han svingte.", en: "He looked backwards before he turned." }, accept: ["back", "to the rear", "rearwards"], drill: { jp: "Han så seg bakover før han svingte", en: "He looked backwards before he turned" }, hint: "bak + over. The -over ending turns a place word into a direction: bak is behind, bakover is towards behind." },
        { id: "no-u119l2-innover", type: "vocab", front: "innover", reading: "innover", meaning: "inwards", example: { jp: "Veien går innover i dalen.", en: "The road goes inwards into the valley." }, accept: ["further in", "into the interior"], drill: { jp: "Veien går innover i dalen", en: "The road goes inwards into the valley" }, hint: "Used constantly of Norwegian geography — innover landet means away from the coast, which is how the country is actually described." },
        { id: "no-u119l2-utover", type: "vocab", front: "utover", reading: "utover", meaning: "outwards", example: { jp: "Båten gikk utover fjorden i god fart.", en: "The boat went outwards down the fjord at a good speed." }, accept: ["further out", "outward", "beyond"], drill: { jp: "Båten gikk utover fjorden", en: "The boat went outwards down the fjord" }, hint: "Also of time and amount: utover kvelden, as the evening wore on; utover det, beyond that." },
        { id: "no-u119l2-nedover", type: "vocab", front: "nedover", reading: "nedover", meaning: "downwards", example: { jp: "Vi gikk nedover mot sjøen etter middag.", en: "We walked downwards towards the sea after dinner." }, accept: ["down", "downhill", "further down"], drill: { jp: "Vi gikk nedover mot sjøen", en: "We walked downwards towards the sea" }, hint: "The partner of oppover (u76). Also of prices: prisene går nedover." },
        { id: "no-u119l2-bortover", type: "vocab", front: "bortover", reading: "bortover", meaning: "along away", example: { jp: "Hun gikk bortover gata uten å se seg tilbake.", en: "She walked off along the street without looking back." }, accept: ["along", "off along", "further along"], drill: { jp: "Hun gikk bortover gata", en: "She walked off along the street" }, hint: "Along a surface and away from the speaker. Langs (u76) says which line you follow; bortover says you are leaving along it." },
        { id: "no-u119l2-nordover", type: "vocab", front: "nordover", reading: "nordover", meaning: "northwards", example: { jp: "Vi kjører nordover langs kysten i morgen.", en: "We are driving northwards along the coast tomorrow." }, accept: ["north", "to the north", "up north"], drill: { jp: "Vi kjører nordover langs kysten", en: "We are driving northwards along the coast" }, hint: "All four compass points take the same ending: nordover, sørover, østover, vestover. In a country this long, nordover does most of the work." },
      ],
    },
    {
      id: "no-u119l3",
      unit: 119,
      lesson: 3,
      title: "Unna og forbi",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something is out of the way, gone, coming towards you, or going past.",
      items: [
        { id: "no-u119l3-unna", type: "vocab", front: "unna", reading: "unna", meaning: "out of the way", example: { jp: "Kan du flytte bilen litt unna?", en: "Can you move the car a bit out of the way?" }, accept: ["away", "clear of", "aside"], drill: { jp: "Kan du flytte bilen litt unna", en: "Can you move the car a bit out of the way" }, hint: "Distance away from something specific: to meter unna. Also 'avoid' in å komme unna, to get away with." },
        { id: "no-u119l3-vekk", type: "vocab", front: "vekk", reading: "vekk", meaning: "gone (away for good)", example: { jp: "Nøkkelen var vekk da vi kom hjem.", en: "The key was gone when we got home." }, accept: ["away", "lost", "off"], drill: { jp: "Nøkkelen var vekk da vi kom hjem", en: "The key was gone when we got home" }, hint: "Stronger than borte (u76): borte is absent, vekk is gone. Å kaste vekk is to throw away." },
        { id: "no-u119l3-imot", type: "vocab", front: "imot", reading: "imot", meaning: "towards (facing)", example: { jp: "Vinden sto rett imot oss hele veien.", en: "The wind was straight against us the whole way." }, accept: ["against", "counter to", "opposed to"], drill: { jp: "Vinden sto rett imot oss", en: "The wind was straight against us" }, hint: "Mot (u26) with an i- that adds force or opposition. Å ha noe imot betyr to object; ingenting imot means no objection at all." },
        { id: "no-u119l3-tvers", type: "vocab", front: "tvers", reading: "tvers", meaning: "straight across", example: { jp: "Butikken ligger tvers over gata.", en: "The shop is straight across the street." }, accept: ["across", "right through", "crosswise"], drill: { jp: "Butikken ligger tvers over gata", en: "The shop is straight across the street" }, hint: "Never alone: tvers over, tvers gjennom, på tvers. På kryss og tvers means in every direction." },
        { id: "no-u119l3-apassere", type: "vocab", front: "å passere", reading: "apassere", meaning: "to go past", example: { jp: "Bussen passerer skolen hver time.", en: "The bus goes past the school every hour." }, accept: ["to pass", "pass by", "go by"], drill: { jp: "Det er lett å passere skolen", en: "It is easy to go past the school" }, hint: "Regular -te verb: passerer, passerte, passert. Also of time and limits: klokka har passert ni." },
        { id: "no-u119l3-anaermeseg", type: "vocab", front: "å nærme seg", reading: "anaermeseg", meaning: "to draw nearer", example: { jp: "Toget nærmet seg byen sakte.", en: "The train drew nearer to the town slowly." }, accept: ["to approach", "get closer", "come near"], drill: { jp: "Det er fint å nærme seg fjellet", en: "It is lovely to draw nearer to the mountain" }, hint: "A reflexive verb, so seg is part of the word and changes with the subject: jeg nærmer meg, vi nærmer oss. Built on nær (u7)." },
      ],
    },
    {
      id: "no-u119l4",
      unit: 119,
      lesson: 4,
      title: "Kroppen i bevegelse",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a body moves through a space — slipping, stumbling, standing up, leaning.",
      items: [
        { id: "no-u119l4-abevegeseg", type: "vocab", front: "å bevege seg", reading: "abevegeseg", meaning: "to move (oneself)", example: { jp: "Pasienten kunne ikke bevege seg etter skaden.", en: "The patient could not move after the injury." }, accept: ["to move about", "stir", "shift"], drill: { jp: "Det gjør vondt å bevege seg", en: "It hurts to move" }, hint: "Reflexive. Å flytte (u16) moves a THING somewhere; å bevege seg is the body itself moving at all." },
        { id: "no-u119l4-askli", type: "vocab", front: "å skli", reading: "askli", meaning: "to slip (on a surface)", example: { jp: "Pass på så du ikke sklir på isen.", en: "Be careful you do not slip on the ice." }, accept: ["to slide", "slide", "skid"], drill: { jp: "Det er lett å skli på isen", en: "It is easy to slip on the ice" }, hint: "Irregular: sklir, skled, sklidd. About the surface, not the foot — for losing your footing generally, use å snuble." },
        { id: "no-u119l4-asnuble", type: "vocab", front: "å snuble", reading: "asnuble", meaning: "to trip over", example: { jp: "Han snublet i trappa og falt.", en: "He tripped on the stairs and fell." }, accept: ["to stumble", "trip", "stumble"], drill: { jp: "Det er lett å snuble i trappa", en: "It is easy to trip on the stairs" }, hint: "Your foot catches on something. Also figurative in exams and speeches: å snuble i ordene." },
        { id: "no-u119l4-afalle", type: "vocab", front: "å falle", reading: "afalle", meaning: "to fall downwards", example: { jp: "Prisene faller når mange selger.", en: "Prices fall when many people are selling." }, accept: ["to drop", "fall", "come down", "to fall"], drill: { jp: "Det er lett å falle her", en: "It is easy to fall here" }, hint: "Irregular: faller, falt, falt. Covers prices, temperatures and people alike — prisene faller." },
        { id: "no-u119l4-areiseseg", type: "vocab", front: "å reise seg", reading: "areiseseg", meaning: "to get to one's feet", example: { jp: "Alle reiste seg da sangen begynte.", en: "Everyone got to their feet when the song began." }, accept: ["to stand up", "rise", "get up"], drill: { jp: "Alle begynte å reise seg", en: "Everyone started to stand up" }, hint: "Same verb as å reise, to travel (u7), with seg bolted on — and the meaning changes completely. Å stå opp is getting out of bed." },
        { id: "no-u119l4-aleneseg", type: "vocab", front: "å lene seg", reading: "aleneseg", meaning: "to lean (oneself)", example: { jp: "Hun lente seg mot veggen og ventet.", en: "She leaned against the wall and waited." }, accept: ["to lean", "prop oneself", "recline"], drill: { jp: "Det er godt å lene seg tilbake", en: "It is good to lean back" }, hint: "Reflexive, and it takes mot or tilbake. Å lene seg på noen is to rely on them, exactly as in English." },
      ],
    },
  ],
};
