// NO Unit 121 — Kroppen · 2 (slot: coverage-b2-11) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 11 (B2)"; retitled per
// CLAUDE.md "No front language". Continues u18 Kropp og helse.
//
// MEASURED — AND READ THE CAVEAT, BECAUSE IT DECIDES HOW MUCH THE NUMBER IS
// WORTH. Screened the taught corpus against a canonical 37-part body inventory:
// 13 taught, 24 absent. u18 teaches en kropp, et hode, ei hånd, en fot, et øye,
// et øre, et ansikt, en munn, ei nese, hår, en arm, et bein, ei tann — the parts
// a beginner names when pointing at a face. Everything between the neck and the
// knee is missing: hals, nakke, skulder, albue, bryst, rygg, mage, hofte, kne,
// tå, finger, hud, blod, hjerne, muskel, lunge, lever, tunge.
//
// ⚠️ THIS IS NOT A CLOSED CLASS THE WAY THE NUMERALS ARE. A body-part list is
// ENUMERABLE and canonical — nobody argues about whether a shoulder is a body
// part — so an absence screen is meaningfully discriminating here, much more
// than it would be for a theme like "Arts and criticism", where any theme the
// course never covered screens 100% absent and the screen proves nothing. But
// the frame is still mine: I wrote the 37-part list. The honest claim is "of the
// canonical inventory I enumerated, 24 of 37 were absent", not "the screen
// discovered that the body was missing".
//
// The practical case is stronger than the count: u18 teaches en lege, feber, å
// hoste, et sår and u25 teaches en smerte and en skade, so the course can start
// a conversation with a doctor and cannot finish one — there is no way to say
// where it hurts.
//
// Conventions per no/unit1.js. Nouns carry en/ei/et; `blod` is a MASS noun and
// is taught bare (§1b). Readings are hand-written ASCII folds (ø→o, æ→ae, å→a).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT121 = {
  id: "no-u121",
  lang: "no",
  title: "Kroppen · 2",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "no-u121l1",
      unit: 121,
      lesson: 1,
      title: "Hals, skulder og arm",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts from the neck to the hand, and tell a doctor which one hurts.",
      items: [
        { id: "no-u121l1-enhals", type: "vocab", front: "en hals", reading: "enhals", meaning: "throat", example: { jp: "Jeg har vondt i halsen og kan nesten ikke snakke.", en: "My throat hurts and I can hardly speak." }, accept: ["neck (front)", "a throat"], drill: { jp: "Jeg har vondt i en hals", en: "I have a pain in a throat" }, hint: "Both the throat inside and the neck outside. Vondt i halsen is what you say at the doctor's, and halsbrann is heartburn." },
        { id: "no-u121l1-ennakke", type: "vocab", front: "en nakke", reading: "ennakke", meaning: "back of the neck", example: { jp: "Han har vondt i nakken etter den lange turen.", en: "His neck hurts after the long trip." }, accept: ["nape", "neck (behind)"], drill: { jp: "Han har vondt i en nakke", en: "He has a pain in a neck" }, hint: "⚠️ Norwegian splits what English calls the neck: hals is the front and throat, nakke is the back. Getting this pair wrong is the classic learner mistake at the doctor's." },
        { id: "no-u121l1-eiskulder", type: "vocab", front: "ei skulder", reading: "eiskulder", meaning: "shoulder", example: { jp: "Hun bar sekken på den ene skuldra hele dagen.", en: "She carried the rucksack on one shoulder all day." }, accept: ["a shoulder"], drill: { jp: "Hun bar sekken på ei skulder", en: "She carried the rucksack on one shoulder" }, hint: "Feminine in this course, so the definite is skuldra — you will also see skulderen in print, and both are correct Bokmål. Plural skuldre." },
        { id: "no-u121l1-enalbue", type: "vocab", front: "en albue", reading: "enalbue", meaning: "elbow", example: { jp: "Han slo albuen i døra på vei ut.", en: "He hit his elbow on the door on the way out." }, accept: ["an elbow"], drill: { jp: "Han slo en albue i døra", en: "He hit an elbow on the door" }, hint: "AL-bu-e, three syllables. Å albue seg fram means to elbow your way forward, exactly as in English." },
        { id: "no-u121l1-ethandledd", type: "vocab", front: "et håndledd", reading: "ethandledd", meaning: "wrist", example: { jp: "Legen så på håndleddet etter fallet.", en: "The doctor looked at the wrist after the fall." }, accept: ["a wrist"], drill: { jp: "Legen så på et håndledd", en: "The doctor looked at a wrist" }, hint: "hånd + ledd, a hand-joint. Et ledd is any joint, so the pattern repeats: kneledd, albueledd." },
        { id: "no-u121l1-entommel", type: "vocab", front: "en tommel", reading: "entommel", meaning: "thumb", example: { jp: "Hun holdt tommelen opp og smilte.", en: "She held her thumb up and smiled." }, accept: ["a thumb"], drill: { jp: "Hun holdt en tommel opp", en: "She held a thumb up" }, hint: "Plural tomler. Tommel opp is the Norwegian thumbs-up, and en tommelfinger is the same digit said the long way." },
      ],
    },
    {
      id: "no-u121l2",
      unit: 121,
      lesson: 2,
      title: "Overkroppen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the trunk of the body — chest, back, stomach, hip — and the finger and tongue.",
      items: [
        { id: "no-u121l2-etbryst", type: "vocab", front: "et bryst", reading: "etbryst", meaning: "chest", example: { jp: "Han kjente en smerte i brystet og ringte legen.", en: "He felt a pain in his chest and called the doctor." }, accept: ["breast", "a chest", "bosom"], drill: { jp: "Han kjente smerte i et bryst", en: "He felt pain in a chest" }, hint: "Neuter, unchanged in the plural: et bryst, to bryst. Smerte i brystet is the phrase that gets you seen immediately." },
        { id: "no-u121l2-enrygg", type: "vocab", front: "en rygg", reading: "enrygg", meaning: "back (body)", example: { jp: "Ryggen min blir vond av å sitte hele dagen.", en: "My back gets sore from sitting all day." }, accept: ["a back", "spine (loosely)"], drill: { jp: "Det er vondt i en rygg", en: "There is pain in a back" }, hint: "You already know en ryggsekk (u83), a back-sack — this is the word inside it. Vondt i ryggen is the commonest sick note in Norway." },
        { id: "no-u121l2-enmage", type: "vocab", front: "en mage", reading: "enmage", meaning: "stomach", example: { jp: "Barnet hadde vondt i magen etter middagen.", en: "The child had a stomach ache after dinner." }, accept: ["belly", "tummy", "a stomach"], drill: { jp: "Barnet hadde vondt i en mage", en: "The child had a pain in a stomach" }, hint: "MA-ge, with a hard g. Both the organ and the belly you can see — Norwegian does not distinguish them the way English does." },
        { id: "no-u121l2-eihofte", type: "vocab", front: "ei hofte", reading: "eihofte", meaning: "hip", example: { jp: "Bestemor fikk vondt i hofta og måtte til legen.", en: "Grandmother had pain in her hip and had to go to the doctor." }, accept: ["a hip"], drill: { jp: "Bestemor fikk vondt i ei hofte", en: "Grandmother had a pain in a hip" }, hint: "Feminine: hofta. A broken hip is one of the things Norwegian health writing talks about most, so the word is worth having." },
        { id: "no-u121l2-enfinger", type: "vocab", front: "en finger", reading: "enfinger", meaning: "finger", example: { jp: "Hun skar seg i fingeren på en kniv.", en: "She cut her finger on a knife." }, accept: ["a finger"], drill: { jp: "Hun skar seg i en finger", en: "She cut a finger" }, hint: "Plural fingrer or fingre, both correct. ⚠️ The thumb counts as one of the five in Norwegian, unlike in some languages." },
        { id: "no-u121l2-eitunge", type: "vocab", front: "ei tunge", reading: "eitunge", meaning: "tongue", example: { jp: "Ei tunge hjelper deg å smake på maten.", en: "A tongue helps you taste the food." }, accept: ["a tongue"], drill: { jp: "Ei tunge hjelper deg å smake", en: "A tongue helps you to taste" }, hint: "Feminine: tunga. Et tungemål is an old word for a language — the same picture as English 'mother tongue'." },
      ],
    },
    {
      id: "no-u121l3",
      unit: 121,
      lesson: 3,
      title: "Beina",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts of the leg and foot, and say where a walking injury is.",
      items: [
        { id: "no-u121l3-etkne", type: "vocab", front: "et kne", reading: "etkne", meaning: "knee", example: { jp: "Han falt og slo kneet mot gulvet.", en: "He fell and hit his knee against the floor." }, accept: ["a knee"], drill: { jp: "Han slo et kne mot gulvet", en: "He hit a knee against the floor" }, hint: "The k IS pronounced, unlike English: KNEH. ⚠️ Irregular plural knær, like tre → trær." },
        { id: "no-u121l3-eita", type: "vocab", front: "ei tå", reading: "eita", meaning: "toe", example: { jp: "Hun slo tåa i bordet om natta.", en: "She stubbed her toe on the table in the night." }, accept: ["a toe"], drill: { jp: "Hun slo ei tå i bordet", en: "She stubbed a toe on the table" }, hint: "Feminine: tåa. ⚠️ Irregular plural tær, rhyming with trær — two letters and a whole vowel change." },
        { id: "no-u121l3-etlar", type: "vocab", front: "et lår", reading: "etlar", meaning: "thigh", example: { jp: "Han fikk vondt i låret etter turen.", en: "His thigh hurt after the trip." }, accept: ["a thigh", "upper leg"], drill: { jp: "Han fikk vondt i et lår", en: "He got a pain in a thigh" }, hint: "Neuter with an unchanged plural: et lår, to lår. It is also the cut of meat on a dinner table — kyllinglår." },
        { id: "no-u121l3-enlegg", type: "vocab", front: "en legg", reading: "enlegg", meaning: "calf (of the leg)", example: { jp: "Leggen ble vond etter den lange turen.", en: "The calf went sore after the long walk." }, accept: ["lower leg", "a calf"], drill: { jp: "Det ble vondt i en legg", en: "It went sore in a calf" }, hint: "⚠️ A homograph: en legg is also a fold in cloth, and å legge is to lay. Only context separates them, which is why the hint says so." },
        { id: "no-u121l3-enankel", type: "vocab", front: "en ankel", reading: "enankel", meaning: "ankle", example: { jp: "Hun fikk vondt i ankelen i trappa.", en: "She got a pain in her ankle on the stairs." }, accept: ["an ankle"], drill: { jp: "Hun fikk vondt i en ankel", en: "She got a pain in an ankle" }, hint: "Plural ankler. Å vri ankelen — to twist an ankle — is the standard collocation and worth learning whole." },
        { id: "no-u121l3-enhael", type: "vocab", front: "en hæl", reading: "enhael", meaning: "heel", example: { jp: "De nye skoene ga henne vondt i hælen.", en: "The new shoes gave her a sore heel." }, accept: ["a heel"], drill: { jp: "Skoene ga vondt i en hæl", en: "The shoes gave a pain in a heel" }, hint: "æ is the a of \"cat\" held long: HAEL. The same word does duty for the heel of a shoe — høye hæler, high heels." },
      ],
    },
    {
      id: "no-u121l4",
      unit: 121,
      lesson: 4,
      title: "Inni kroppen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what is under the skin — organs, muscle, blood — well enough to read a health leaflet.",
      items: [
        { id: "no-u121l4-eihud", type: "vocab", front: "ei hud", reading: "eihud", meaning: "skin", example: { jp: "Sola er hard mot huda om sommeren.", en: "The sun is hard on the skin in summer." }, accept: ["the skin", "hide"], drill: { jp: "Sola er hard mot ei hud", en: "The sun is hard on a skin" }, hint: "Feminine: huda, also written huden. Et hudproblem is a skin condition, and hudkrem is the cream for it." },
        { id: "no-u121l4-blod", type: "vocab", front: "blod", reading: "blod", meaning: "blood", example: { jp: "Det var blod på kluten etter kuttet.", en: "There was blood on the cloth after the cut." }, accept: ["the blood"], drill: { jp: "Det var blod på kluten", en: "There was blood on the cloth" }, hint: "⚠️ A MASS noun, so it is taught bare with no article — the same rule as vann and melk (unit 1, §1b). Definite blodet. The d is silent: BLOO." },
        { id: "no-u121l4-enhjerne", type: "vocab", front: "en hjerne", reading: "enhjerne", meaning: "brain", example: { jp: "Hjernen trenger søvn for å fungere godt.", en: "The brain needs sleep in order to work well." }, accept: ["a brain", "mind"], drill: { jp: "En hjerne trenger søvn hver natt", en: "A brain needs sleep every night" }, hint: "The hj- is a plain y sound: YAER-ne. Same silent h as in hjem and hjerte, both of which you already know." },
        { id: "no-u121l4-enmuskel", type: "vocab", front: "en muskel", reading: "enmuskel", meaning: "muscle", example: { jp: "Han trener for å bygge muskler i beina.", en: "He trains to build muscles in his legs." }, accept: ["a muscle"], drill: { jp: "Han bygger en muskel i beina", en: "He builds a muscle in the legs" }, hint: "Plural muskler, dropping the e. Musklene er støle means the muscles ache — the standard complaint after a first gym session." },
        { id: "no-u121l4-eilunge", type: "vocab", front: "ei lunge", reading: "eilunge", meaning: "lung", example: { jp: "Røyk er ikke bra for lungene over tid.", en: "Smoke is not good for the lungs over time." }, accept: ["a lung"], drill: { jp: "Røyk er ikke bra for ei lunge", en: "Smoke is not good for a lung" }, hint: "Feminine: lunga, plural lunger. Å puste (u25) is what they do — this is the organ that does it." },
        { id: "no-u121l4-eilever", type: "vocab", front: "ei lever", reading: "eilever", meaning: "liver", example: { jp: "Ei lever er viktig for hele kroppen.", en: "A liver is important for the whole body." }, accept: ["a liver"], drill: { jp: "Ei lever er viktig for kroppen", en: "A liver is important for the body" }, hint: "⚠️ A homograph of å leve in the present tense — han lever, he lives. The noun is stressed LE-ver and the verb is too; only the article separates them." },
      ],
    },
  ],
};
