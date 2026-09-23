// NO Unit 126 — Hverdagsbevegelser (slot: coverage-b2-16) — B2
// COVERAGE UNIT, block 3, and the LAST unit of the Norwegian B2 band. Scaffolded
// "Vocabulary 16 (B2)"; retitled per CLAUDE.md "No front language".
//
// MEASURED, AND THE SCREEN'S OWN NEGATIVE RESULT IS PART OF THE FINDING. I
// probed 40 everyday physical verbs against the corpus expecting a large hole
// and found the opposite: å brette, å blande, å skjære, å koke, å steke, å
// sparke, å lime, å peke, å nikke, å hviske, å rope, å bære, å trekke, å bøye,
// å slippe, å holde, å samle and å stryke are ALL already taught, across u41
// (cooking), u42 (clothes), u44 (sport), u45, u46, u49, u61 and u77. The
// everyday-verb space is well covered and this unit is deliberately smaller in
// ambition than u114 or u117 — it fills what is genuinely left rather than
// pretending to a hole that is not there.
//
// What IS left is one coherent group: verbs of HANDLING and of the FACE, the
// two places the corpus never went. å løfte, å skyve, å dytte, å klemme, å
// knyte, å rive, å gni, å klø, å stikke, å vri, å strekke, å smøre, å tygge, å
// svelge, å bite, å slikke, å gjespe, å blunke, å riste, å vinke, å tråkke, å
// krabbe, å fange, å skrike. Every one verified absent before it was written.
// They pair with u121 Kroppen · 2: that unit names the parts, this one moves
// them.
//
// ⚠️ HONEST LABEL: this is a CHOSEN theme, not a closed class. There is no
// canonical list of "everyday physical verbs", so the absence screen here proves
// only that these particular words are new — not that this was the biggest
// remaining gap. Where u114 (numerals), u115 (ordinals), u117 (months) and u120
// (formal quantifiers) screened closed classes and the absence was
// discriminating, this one did not, and the hand-back says so.
//
// ─────────────────────────────────────────────────────────────────────────────
// TWO BAND-WIDE MEASUREMENTS, recorded here because this is the last unit of the
// Norwegian B2 band and because measurement evidence belongs in a header, where
// it can be argued with, and never on a card.
//
// 1. DRILL VOCABULARY SCOPE — MEASURED, and the tooling claim needs correcting.
//    `tests/unit/drill-scope.test.mjs` (merged 2026-09-22 after a German B2 block
//    shipped 144 out-of-scope drills green) is GERMAN-ONLY and says so in its own
//    header; `scripts/check-drills.mjs` tests Norwegian drills for BUILDABILITY,
//    not scope. But it is NOT true that nothing measures Norwegian drill scope:
//    `scripts/scope-strict.mjs` reads `drill?.jp` alongside `example?.jp`
//    (line 78) and takes a unit range, so `node scripts/scope-strict.mjs 114 126`
//    IS a drill-scope check. It is manual and range-scoped — exactly what
//    `check-drills-de` was before it got a ratchet — so the gap is a RATCHET, not
//    an oracle.
//    Measured on all 312 drills in u114–u126: 47 residual out-of-scope tokens
//    across examples and drills, 23 of them touching a drill, and every one is an
//    inflection `forms()` cannot generate (past tenses slo/skar/bar, -s forms
//    betales/møtes, definites and plurals pengene/hendene/reglene), two
//    transparent numeral compounds (tjueni, nittisju), `mi`, and one declared
//    proper name. A second pass that GENERATES NOTHING — so it over-reports
//    instead of under-reporting, the safe direction — found no genuine forward
//    reference. Started at 122 hits; ~45 were real and were rewritten.
//
// 2. WORDS THE CORPUS USES AND NEVER TEACHES — A NEGATIVE RESULT, and it is worth
//    recording precisely because German's equivalent scan was positive. Ranked
//    every token in every Norwegian example and drill that no taught front can
//    generate: 19 appear 3+ times, and on inspection ALL NINETEEN are inflections
//    the generator misses (gamle←gammel, lite/lita/små←liten, begynte←å begynne,
//    flere←mange, lenger/lengre←lang, reglene←en regel, definites of the FREE
//    loanwords). Norwegian has no `der Briefkasten`-shaped hole of a word leaned
//    on and never carded. The ONE genuine case in the whole corpus was bare
//    `fram` — used in u62l4's example AND drill, a front nowhere — and u119l1
//    closes it.
//
// Conventions per no/unit1.js: infinitives with å (§2). Readings are
// hand-written ASCII folds.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT126 = {
  id: "no-u126",
  lang: "no",
  title: "Hverdagsbevegelser",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "no-u126l1",
      unit: 126,
      lesson: 1,
      title: "Å ta og å slippe",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe handling a thing — lifting, pushing, squeezing, tying, tearing.",
      items: [
        { id: "no-u126l1-alofte", type: "vocab", front: "å løfte", reading: "alofte", meaning: "to lift", example: { jp: "Han klarte ikke å løfte kofferten selv.", en: "He could not lift the suitcase himself." }, accept: ["lift", "raise", "pick up"], drill: { jp: "Det er tungt å løfte kofferten", en: "It is heavy to lift the suitcase" }, hint: "Regular -et verb: løfter, løftet, løftet. Løft med beina, ikke med ryggen is the standard Norwegian safety line." },
        { id: "no-u126l1-askyve", type: "vocab", front: "å skyve", reading: "askyve", meaning: "to push (slide)", example: { jp: "Vi måtte skyve bilen ut av veien.", en: "We had to push the car out of the road." }, accept: ["push", "shove", "slide"], drill: { jp: "Det er tungt å skyve bilen", en: "It is heavy to push the car" }, hint: "Irregular: skyver, skjøv, skjøvet. A steady push along a surface — for a sudden one, see å dytte below." },
        { id: "no-u126l1-adytte", type: "vocab", front: "å dytte", reading: "adytte", meaning: "to shove", example: { jp: "Hun dyttet døra igjen med skulderen.", en: "She shoved the door shut with her shoulder." }, accept: ["shove", "nudge", "push (sharply)"], drill: { jp: "Det går an å dytte døra igjen", en: "It is possible to shove the door shut" }, hint: "Regular -et verb. Sharper and more sudden than å skyve, and much commoner in speech." },
        { id: "no-u126l1-aklemme", type: "vocab", front: "å klemme", reading: "aklemme", meaning: "to hug", example: { jp: "Hun klemte barnet før det gikk på skolen.", en: "She hugged the child before it went to school." }, accept: ["hug", "squeeze", "press"], drill: { jp: "Det er godt å klemme barnet", en: "It is good to hug the child" }, hint: "Regular -te verb: klemmer, klemte, klemt. Both to hug and to squeeze — en klem is the hug itself." },
        { id: "no-u126l1-aknyte", type: "vocab", front: "å knyte", reading: "aknyte", meaning: "to tie (a knot)", example: { jp: "Barnet lærte å knyte skoene sine i år.", en: "The child learned to tie its shoes this year." }, accept: ["tie", "knot", "do up"], drill: { jp: "Barnet lærte å knyte skoene", en: "The child learned to tie its shoes" }, hint: "The k IS said, as in kne: KNY-te. Irregular: knyter, knyttet, knyttet. En knute is the knot." },
        { id: "no-u126l1-arive", type: "vocab", front: "å rive", reading: "arive", meaning: "to tear", example: { jp: "Han rev papiret i to like deler.", en: "He tore the paper into two equal parts." }, accept: ["tear", "rip", "pull down"], drill: { jp: "Det er lett å rive papiret", en: "It is easy to tear the paper" }, hint: "Irregular: river, rev, revet. Also to demolish a building — huset ble revet — and to grate cheese, revet ost." },
      ],
    },
    {
      id: "no-u126l2",
      unit: 126,
      lesson: 2,
      title: "Hender og fingre",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe what hands do — rubbing, scratching, twisting, stretching, spreading.",
      items: [
        { id: "no-u126l2-agni", type: "vocab", front: "å gni", reading: "agni", meaning: "to rub", example: { jp: "Hun gned øynene og våknet skikkelig.", en: "She rubbed her eyes and woke up properly." }, accept: ["rub", "scrub", "chafe"], drill: { jp: "Det hjelper å gni hendene sammen", en: "It helps to rub the hands together" }, hint: "Irregular: gnir, gned, gnidd. Hard g before n. Å gni seg i øynene is the standard collocation." },
        { id: "no-u126l2-aklo", type: "vocab", front: "å klø", reading: "aklo", meaning: "to itch", example: { jp: "Ryggen min klør etter turen i skogen.", en: "My back itches after the walk in the forest." }, accept: ["itch", "scratch"], drill: { jp: "Ryggen begynte å klø igjen", en: "The back started to itch again" }, hint: "⚠️ Does DOUBLE duty: det klør means it itches, and å klø seg means to scratch yourself. Norwegian uses one verb where English needs two." },
        { id: "no-u126l2-astikke", type: "vocab", front: "å stikke", reading: "astikke", meaning: "to poke", example: { jp: "Ikke stikk fingeren i den varme ovnen.", en: "Do not poke your finger into the hot oven." }, accept: ["poke", "stick", "sting", "stab"], drill: { jp: "Ikke prøv å stikke fingeren der", en: "Do not try to poke your finger there" }, hint: "Irregular: stikker, stakk, stukket. Also what a wasp does, and in speech 'to leave': jeg stikker nå, I am off." },
        { id: "no-u126l2-avri", type: "vocab", front: "å vri", reading: "avri", meaning: "to twist", example: { jp: "Du må vri på nøkkelen i døra.", en: "You have to twist the key in the door." }, accept: ["twist", "wring", "turn"], drill: { jp: "Det er lett å vri nøkkelen", en: "It is easy to twist the key" }, hint: "Irregular: vrir, vred, vridd. Also to wring out washing — vri opp klærne — and to sprain, as in u121's ankelen." },
        { id: "no-u126l2-astrekke", type: "vocab", front: "å strekke", reading: "astrekke", meaning: "to stretch", example: { jp: "Hun strakk armene over hodet etter søvnen.", en: "She stretched her arms above her head after sleeping." }, accept: ["stretch", "extend", "reach out"], drill: { jp: "Det er godt å strekke armene", en: "It is good to stretch the arms" }, hint: "Irregular: strekker, strakk, strukket. Reflexively, å strekke seg is to stretch yourself — or to make an effort." },
        { id: "no-u126l2-asmore", type: "vocab", front: "å smøre", reading: "asmore", meaning: "to spread (butter)", example: { jp: "Han smurte brød til barna.", en: "He buttered bread for the children." }, accept: ["butter", "smear", "grease", "wax"], drill: { jp: "Det tar tid å smøre brødet", en: "It takes time to butter the bread" }, hint: "Irregular: smører, smurte, smurt. Å smøre matpakka — making the packed lunch — is a daily Norwegian ritual, and it is also how you wax skis." },
      ],
    },
    {
      id: "no-u126l3",
      unit: 126,
      lesson: 3,
      title: "Munn og ansikt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe what the face and mouth do — chewing, swallowing, biting, yawning, blinking.",
      items: [
        { id: "no-u126l3-atygge", type: "vocab", front: "å tygge", reading: "atygge", meaning: "to chew", example: { jp: "Du må tygge maten godt før du svelger.", en: "You have to chew your food well before you swallow." }, accept: ["chew", "masticate"], drill: { jp: "Det er viktig å tygge maten", en: "It is important to chew the food" }, hint: "Regular -et verb: tygger, tygget, tygget. Tyggegummi is chewing gum, and it is the word most learners meet first." },
        { id: "no-u126l3-asvelge", type: "vocab", front: "å svelge", reading: "asvelge", meaning: "to swallow", example: { jp: "Det gjør vondt å svelge når halsen er sår.", en: "It hurts to swallow when your throat is sore." }, accept: ["swallow", "gulp"], drill: { jp: "Det gjør vondt å svelge nå", en: "It hurts to swallow now" }, hint: "Regular -te verb: svelger, svelget, svelget. Vondt å svelge is the phrase a doctor asks about — it pairs with en hals from u121." },
        { id: "no-u126l3-abite", type: "vocab", front: "å bite", reading: "abite", meaning: "to bite", example: { jp: "Hunden bet aldri noen på hele livet.", en: "The dog never bit anyone in its whole life." }, accept: ["bite", "nip"], drill: { jp: "Hunden pleier ikke å bite folk", en: "The dog does not usually bite people" }, hint: "Irregular: biter, bet, bitt. Å bite tennene sammen — to grit your teeth — is the same picture as in English." },
        { id: "no-u126l3-aslikke", type: "vocab", front: "å slikke", reading: "aslikke", meaning: "to lick", example: { jp: "Katten slikket melka opp fra skåla.", en: "The cat licked the milk up from the bowl." }, accept: ["lick", "lap"], drill: { jp: "Katten liker å slikke skåla", en: "The cat likes to licking the bowl" }, hint: "Regular -et verb. Å slikke sol means to sunbathe, which is a very Norwegian way of putting it." },
        { id: "no-u126l3-agjespe", type: "vocab", front: "å gjespe", reading: "agjespe", meaning: "to yawn", example: { jp: "Han gjespet gjennom hele det lange møtet.", en: "He yawned through the whole long meeting." }, accept: ["yawn"], drill: { jp: "Han begynte å gjespe i møtet", en: "He started to yawn in the meeting" }, hint: "gj- is a plain y: YES-pe, the same silent g as in gjøre. Regular -et verb." },
        { id: "no-u126l3-ablunke", type: "vocab", front: "å blunke", reading: "ablunke", meaning: "to blink", example: { jp: "Hun blunket i det sterke lyset fra sola.", en: "She blinked in the strong light from the sun." }, accept: ["blink", "wink"], drill: { jp: "Hun begynte å blunke i lyset", en: "She started to blink in the light" }, hint: "One verb for both blinking and winking — å blunke til noen is to wink at someone. Regular -et verb." },
      ],
    },
    {
      id: "no-u126l4",
      unit: 126,
      lesson: 4,
      title: "Hele kroppen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe whole-body movement and sound — shaking, waving, treading, crawling, catching.",
      items: [
        { id: "no-u126l4-ariste", type: "vocab", front: "å riste", reading: "ariste", meaning: "to shake", example: { jp: "Hun ristet på hodet og sa nei.", en: "She shook her head and said no." }, accept: ["shake", "rattle", "jolt"], drill: { jp: "Hun pleier å riste på hodet", en: "She usually shakes her head" }, hint: "Regular -et verb. Å riste på hodet is the fixed phrase for shaking your head — note the på, which English does not have." },
        { id: "no-u126l4-avinke", type: "vocab", front: "å vinke", reading: "avinke", meaning: "to wave", example: { jp: "Barna vinket til toget fra brua.", en: "The children waved to the train from the bridge." }, accept: ["wave", "beckon", "signal"], drill: { jp: "Barna pleier å vinke til toget", en: "The children usually wave at the train" }, hint: "Regular -et verb, and it takes til: å vinke TIL noen. Ei vinge (u26) is a wing — close in sound and unrelated." },
        { id: "no-u126l4-atrakke", type: "vocab", front: "å tråkke", reading: "atrakke", meaning: "to tread", example: { jp: "Ikke tråkk i hagen med de skoene.", en: "Do not tread in the garden with those shoes." }, accept: ["tread", "step on", "trample"], drill: { jp: "Du må ikke prøve å tråkke der", en: "You must not try to tread there" }, hint: "Regular -et verb, always with a preposition: tråkke på, tråkke i. Å tråkke i salaten is the Norwegian for putting your foot in it." },
        { id: "no-u126l4-akrabbe", type: "vocab", front: "å krabbe", reading: "akrabbe", meaning: "to crawl on hands and knees", example: { jp: "Barnet begynte å krabbe da det var sju måneder.", en: "The child started to crawl when it was seven months old." }, accept: ["crawl", "creep on all fours"], drill: { jp: "Barnet begynte å krabbe i sommer", en: "The child started to crawl this summer" }, hint: "Named after en krabbe (u123), the crab. Å krype (u26) is the creeping of insects and snakes; krabbe is on hands and knees." },
        { id: "no-u126l4-afange", type: "vocab", front: "å fange", reading: "afange", meaning: "to catch", example: { jp: "Han klarte å fange ballen med én hånd.", en: "He managed to catch the ball with one hand." }, accept: ["catch", "capture", "trap"], drill: { jp: "Det er vanskelig å fange ballen", en: "It is difficult to catch the ball" }, hint: "Regular -et verb. Both catching a thrown thing and catching an animal — å fange fisk. Å ta imot is the gentler 'receive'." },
        { id: "no-u126l4-askrike", type: "vocab", front: "å skrike", reading: "askrike", meaning: "to scream", example: { jp: "Måkene skriker over havna hele dagen.", en: "The seagulls scream over the harbour all day." }, accept: ["scream", "shriek", "cry out"], drill: { jp: "Måkene pleier å skrike om morgenen", en: "The seagulls usually scream in the morning" }, hint: "Irregular: skriker, skrek, skreket. Louder and more alarmed than å rope (u49), which is simply calling out." },
      ],
    },
  ],
};
