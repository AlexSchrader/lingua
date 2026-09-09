// DE Unit 21 — Activities and routine (slot: routine) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
//
// This unit opens A2's REFLEXIVE verbs, which A1 never touched: sich waschen,
// sich anziehen, sich beeilen. A1 taught the accusative pronouns mich and dich
// at u13, so the learner already has the forms — what is new is that German uses
// them where English uses nothing at all ("ich wasche MICH", not "I wash").
// That is the single hardest thing in this unit and every hint carries it.
//
// Separable verbs appear here too (aufwachen, aufräumen, vorbereiten). Unlike A1,
// I can drill them: u20 gave modals and u29 gives subordinators, so the infinitive
// can be kept whole — "Wir müssen früh aufwachen". No item here is undrillable.
// ============================================================================
// CROSS-BLOCK COLLISION LEDGER — German A2. Maintained by block 1 (the lead).
// Blocks 2 and 3: READ THIS BEFORE YOU AUTHOR, and send me new entries.
//
// WHY IT EXISTS. Each seat sees a third of the corpus. A collision reported to
// one seat and fixed there never reaches the third, so the same word gets taught
// twice by two people who each screened honestly. Worse, an UNCOMMITTED sibling
// branch reads as EMPTY to every screening script — clearing a candidate against
// the branches is not clearing it. Only a written ledger closes that.
//
// RULE: LOWER SLOT NUMBER WINS, always, and it is not negotiable between crews.
// The higher slot re-glosses or swaps the card out. No exceptions, no trades.
//
// Measured 2026-09-08 across A1 + all three A2 branches, 888 cards.
//
// EXACT FRONT DUPLICATES — the higher slot must drop or replace:
//   nervös        block1 u22  WINS   vs  block2 u31
//   mutig         block1 u22  WINS   vs  block2 u31
//   der Ausweis   block1 u23  WINS   vs  block2 u32
//   frei          block1 u23  WINS   vs  block3 u42
//   wirken        block2 u31  WINS   vs  block3 u43
//   ähnlich       block2 u37  WINS   vs  block3 u43
//   der Gast      block2 u40  WINS   vs  block3 u42
//   süß           block2 u40  WINS   vs  block3 u41
//
// SHARED GLOSS, DIFFERENT WORD — normalizeMeaning strips a leading a/an/the/to
// and strips PARENTHETICALS, so a distinction in brackets does not survive. Put
// it after an em dash instead, which does survive: "because — verb to the end".
//   "mood"          block1 u22 die Laune WINS  vs block2 u40 die Stimmung
//   "nevertheless"  block1 u29 trotzdem  WINS  vs block2 u36 dennoch
//   "key"           A1 u15 der Schlüssel WINS  vs block2 u33 die Taste
//   "right"         A1 u7  rechts        WINS  vs block2 u32 das Recht
//   "work"          A1 u3  arbeiten      WINS  vs block2 u33 funktionieren
//   "warm"          A1 u8  warm          WINS  vs block2 u40 herzlich
//   "cheerful"      A1 u10 lustig        WINS  vs block2 u40 fröhlich
//   "together"      A1 u1  zusammen      WINS  vs block2 u32 gemeinsam
//   "full"          A1 u10 voll          WINS  vs block3 u42 satt
//   "appear"        block2 u35 auftreten WINS  vs block3 u43 aussehen
//
// NOT DEFECTS — checked and deliberately kept, listed so nobody re-opens them:
//   anziehen u17 / sich anziehen u21   different lexeme, hint carries the split
//   das Buch u1 / buchen u23           different part of speech
//   der Park u7 / parken u23           different part of speech
//   sauber u10 / putzen u21            adjective vs verb
//   u29's weil / dass / als / nachdem  distinguished after an em dash, which
//                                      normalizeMeaning keeps; A1's denn, das,
//                                      wann and nach stay clean
//   hätte u37 / hatte u39, könnte/konnte, würde/wurde — block 2's Konjunktiv II
//     against its Präteritum. The umlaut FOLDS, so the readings are identical and
//     a TYPED answer cannot tell the pair apart. That is a real cost and block 2
//     took it knowingly; it is not a bar, exactly as German already ships Sie/sie.
//
// OPEN, NOT YET ACTIONABLE — the three folded pairs above and A2 AUDIO.
// German audio today is A1 only (480/480). When A2 audio generates, each of those
// six cards becomes eligible for the ear route: cardRouting.js:518 pushes
// listen:choice and listen:type on nothing but hasAudio(item). listen:type grades
// the typed READING, and hätte and hatte both read "hatte" — so the two cards
// become the SAME QUESTION with the same accepted answer, and the learner has no
// way to tell which card is being asked. The spoken clips do differ (/hɛtə/ vs
// /hatə/), so nobody is graded unfairly; the defect is that the pair is
// indistinguishable, which the Sie/sie precedent does NOT cover — Sie and sie are
// disambiguated by the sentence on screen, and a bare listen:type card has none.
// DECIDE BEFORE A2 AUDIO GENERATES, not after: either keep one of each pair off
// the listen route, or give the pair readings that do not fold together.
// Raised by the crew lead's seat; recorded here because no single block can see it.
// ============================================================================
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT21 = {
  id: "de-u21",
  lang: "de",
  title: "Alltag und Routine",
  order: 21,
  stage: "a2",
  lessons: [
    {
      id: "de-u21l1",
      unit: 21,
      lesson: 1,
      title: "Der Morgen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe your morning in order — waking, washing, dressing — using the reflexive verbs German needs and English does not.",
      items: [
        { id: "de-u21l1-aufwachen", type: "vocab", front: "aufwachen", reading: "aufwachen", meaning: "to wake up", example: { jp: "Ich wache jeden Morgen früh auf.", en: "I wake up early every morning." }, drill: { jp: "Wir müssen früh aufwachen", en: "We have to wake up early" }, accept: ["to wake up", "wake up", "to awake"], hint: "Separable: ich wache … auf. Aufwachen is what happens to you; aufstehen, which you know from u20, is getting out of bed afterwards." },
        { id: "de-u21l1-duschen", type: "vocab", front: "duschen", reading: "duschen", meaning: "to shower", example: { jp: "Ich dusche immer am Morgen.", en: "I always shower in the morning." }, drill: { jp: "Wir duschen immer am Morgen", en: "We always shower in the morning" }, accept: ["to shower", "shower", "to have a shower"], hint: "Not reflexive, unlike its neighbours — you simply duschst. Die Dusche is the shower itself." },
        { id: "de-u21l1-sichwaschen", type: "vocab", front: "sich waschen", reading: "sichwaschen", meaning: "to wash oneself", example: { jp: "Die Kinder waschen sich vor dem Essen.", en: "The children wash before eating." }, drill: { jp: "Die Kinder müssen sich waschen", en: "The children have to wash" }, accept: ["to wash", "to wash oneself", "wash"], hint: "German says it out loud: ich wasche MICH. English drops the object entirely, which is why learners forget it. The sich changes with the person — mich, dich, sich." },
        { id: "de-u21l1-sichanziehen", type: "vocab", front: "sich anziehen", reading: "sichanziehen", meaning: "to get dressed", example: { jp: "Ich ziehe mich schnell an.", en: "I get dressed quickly." }, drill: { jp: "Die Kinder müssen sich anziehen", en: "The children have to get dressed" }, accept: ["to get dressed", "to dress", "get dressed"], hint: "Reflexive AND separable, so the pronoun goes in and the prefix goes out: ich ziehe mich an. u17's anziehen takes a garment; with sich it takes you." },
        { id: "de-u21l1-frueh", type: "vocab", front: "früh", reading: "fruh", meaning: "early", example: { jp: "Am Montag kommen wir sehr früh.", en: "On Monday we come very early." }, drill: { jp: "Am Montag kommen wir sehr früh", en: "On Monday we come very early" }, accept: ["early"], hint: "The opposite of the already-taught spät. Früher means both earlier and, on its own, \"in the old days\"." },
        { id: "de-u21l1-puenktlich", type: "vocab", front: "pünktlich", reading: "punktlich", meaning: "on time", example: { jp: "Der Zug ist heute pünktlich.", en: "The train is on time today." }, drill: { jp: "Der Zug ist heute pünktlich", en: "The train is on time today" }, accept: ["on time", "punctual", "punctually"], hint: "From der Punkt. A word Germans use about trains with some feeling; pünktlich um acht means at eight exactly." },
      ],
    },
    {
      id: "de-u21l2",
      unit: 21,
      lesson: 2,
      title: "Der Tagesablauf",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put the parts of a day in order — first this, then that, afterwards the other — and name the routine itself.",
      items: [
        { id: "de-u21l2-deralltag", type: "vocab", front: "der Alltag", reading: "deralltag", meaning: "everyday life", example: { jp: "Der Alltag ist oft sehr voll.", en: "Everyday life is often very full." }, drill: { jp: "Der Alltag ist oft sehr voll", en: "Everyday life is often very full" }, accept: ["everyday life", "daily life", "routine"], hint: "all + Tag: the all-days. Alltäglich means ordinary, and im Alltag means in day-to-day life." },
        { id: "de-u21l2-dertagesablauf", type: "vocab", front: "der Tagesablauf", reading: "dertagesablauf", meaning: "daily routine", example: { jp: "Mein Tagesablauf ist immer sehr voll.", en: "My daily routine is always very full." }, drill: { jp: "Der Tagesablauf ist immer voll", en: "The daily routine is always full" }, accept: ["daily routine", "the day's schedule", "routine"], hint: "Tag + es + Ablauf, three pieces stacked. The linking -s- is common in long German nouns and has no meaning of its own." },
        { id: "de-u21l2-zuerst", type: "vocab", front: "zuerst", reading: "zuerst", meaning: "first of all", example: { jp: "Zuerst dusche ich, dann esse ich.", en: "First I shower, then I eat." }, drill: { jp: "Zuerst dusche ich dann esse ich", en: "First I shower then I eat" }, accept: ["first", "first of all", "at first"], hint: "Put it first and the verb still comes second — zuerst DUSCHE ich. The A1 rule from u12 does not bend." },
        { id: "de-u21l2-danach", type: "vocab", front: "danach", reading: "danach", meaning: "after that", example: { jp: "Wir essen und danach gehen wir.", en: "We eat and after that we go." }, drill: { jp: "Danach gehen wir nach Hause", en: "After that we go home" }, accept: ["after that", "afterwards", "then"], hint: "Built from the preposition nach you know from u14. Danach points back at what you just said; nachdem, from u29, links a whole clause." },
        { id: "de-u21l2-spaeter", type: "vocab", front: "später", reading: "spater", meaning: "later", example: { jp: "Wir sprechen später über das Problem.", en: "We will talk about the problem later." }, drill: { jp: "Wir sprechen später über das Problem", en: "We will talk about the problem later" }, accept: ["later", "afterwards"], hint: "The comparative of spät, and you have met it since u2 inside bis später." },
        { id: "de-u21l2-sichbeeilen", type: "vocab", front: "sich beeilen", reading: "sichbeeilen", meaning: "to hurry", example: { jp: "Wir müssen uns beeilen, wir kommen zu spät.", en: "We have to hurry, we are going to be late." }, drill: { jp: "Die Kinder müssen sich beeilen", en: "The children have to hurry" }, accept: ["to hurry", "to rush", "hurry"], hint: "Reflexive and there is no non-reflexive version — you cannot beeilen anything but yourself. Beeil dich! is the everyday imperative." },
      ],
    },
    {
      id: "de-u21l3",
      unit: 21,
      lesson: 3,
      title: "Zu Hause helfen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you do around the house — tidying, cleaning, preparing something — and say you are getting it ready.",
      items: [
        { id: "de-u21l3-aufraeumen", type: "vocab", front: "aufräumen", reading: "aufraumen", meaning: "to tidy up", example: { jp: "Am Samstag räume ich das Zimmer auf.", en: "On Saturday I tidy up the room." }, drill: { jp: "Wir müssen das Zimmer aufräumen", en: "We have to tidy up the room" }, accept: ["to tidy up", "to clear up", "tidy"], hint: "Separable: ich räume auf. Aufgeräumt describes both a tidy room and a cheerful mood." },
        { id: "de-u21l3-putzen", type: "vocab", front: "putzen", reading: "putzen", meaning: "to clean", example: { jp: "Am Samstag putzen wir das Bad.", en: "On Saturday we clean the bathroom." }, drill: { jp: "Am Samstag putzen wir das Bad", en: "On Saturday we clean the bathroom" }, accept: ["to clean", "clean", "to scrub"], hint: "For scrubbing something physically. Also what you do to your teeth: Zähne putzen." },
        { id: "de-u21l3-vorbereiten", type: "vocab", front: "vorbereiten", reading: "vorbereiten", meaning: "to prepare", example: { jp: "Ich bereite das Essen vor.", en: "I prepare the meal." }, drill: { jp: "Wir wollen das Essen vorbereiten", en: "We want to prepare the meal" }, accept: ["to prepare", "to get ready", "prepare"], hint: "Separable: ich bereite vor. With sich it means to prepare yourself — sich auf eine Prüfung vorbereiten." },
        { id: "de-u21l3-dasgeschirr", type: "vocab", front: "das Geschirr", reading: "dasgeschirr", meaning: "the dishes", example: { jp: "Nach dem Essen wasche ich das Geschirr.", en: "After the meal I wash the dishes." }, drill: { jp: "Ich wasche das Geschirr", en: "I wash the dishes" }, accept: ["the dishes", "dishes", "crockery", "the washing-up"], hint: "Singular in German where English is plural — das Geschirr ist schmutzig. Geschirr spülen is the usual phrase for washing up." },
        { id: "de-u21l3-diewaesche", type: "vocab", front: "die Wäsche", reading: "diewasche", meaning: "the laundry", example: { jp: "Am Samstag mache ich die Wäsche.", en: "On Saturday I do the laundry." }, drill: { jp: "Am Samstag mache ich die Wäsche", en: "On Saturday I do the laundry" }, accept: ["the laundry", "laundry", "the washing"], hint: "Wäsche waschen is to do the laundry — the noun and the verb share a stem, which is why the phrase sounds doubled to an English ear." },
        { id: "de-u21l3-dermuell", type: "vocab", front: "der Müll", reading: "dermull", meaning: "the rubbish", example: { jp: "Der Müll ist heute voll.", en: "The rubbish is full today." }, drill: { jp: "Der Müll kommt am Montag", en: "The rubbish is collected on Monday" }, accept: ["the rubbish", "rubbish", "the trash", "the garbage"], hint: "Singular only, like das Geschirr. Germans separate it obsessively, so you will meet Restmüll, Biomüll and Papiermüll on every bin." },
      ],
    },
    {
      id: "de-u21l4",
      unit: 21,
      lesson: 4,
      title: "Wie oft?",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how often something happens — every day, twice a week, usually, hardly ever.",
      items: [
        { id: "de-u21l4-jeden", type: "vocab", front: "jeden Tag", reading: "jedentag", meaning: "every day", example: { jp: "Wir arbeiten jeden Tag bis fünf.", en: "We work every day until five." }, drill: { jp: "Wir arbeiten jeden Tag", en: "We work every day" }, accept: ["every day", "each day", "daily"], hint: "jeden is the accusative of jeder, and time expressions take the accusative in German: jeden Tag, jede Woche, jedes Jahr." },
        { id: "de-u21l4-zweimal", type: "vocab", front: "zweimal", reading: "zweimal", meaning: "twice", example: { jp: "Ich gehe zweimal in der Woche schwimmen.", en: "I go swimming twice a week." }, drill: { jp: "Ich gehe zweimal in der Woche schwimmen", en: "I go swimming twice a week" }, accept: ["twice", "two times"], hint: "Any number plus -mal makes a frequency: einmal, zweimal, dreimal, hundertmal." },
        { id: "de-u21l4-meistens", type: "vocab", front: "meistens", reading: "meistens", meaning: "usually", example: { jp: "Meistens esse ich zu Hause.", en: "Usually I eat at home." }, drill: { jp: "Meistens esse ich zu Hause", en: "Usually I eat at home" }, accept: ["usually", "mostly", "most of the time"], hint: "Stronger than the already-taught oft: meistens means it is the normal case, not merely frequent." },
        { id: "de-u21l4-kaum", type: "vocab", front: "kaum", reading: "kaum", meaning: "hardly", example: { jp: "Ich habe kaum Zeit für den Sport.", en: "I have hardly any time for sport." }, drill: { jp: "Ich habe kaum Zeit", en: "I have hardly any time" }, accept: ["hardly", "barely", "scarcely"], hint: "Sits between selten and nie, both of which you know from u12. Kaum jemand = hardly anyone." },
        { id: "de-u21l4-normalerweise", type: "vocab", front: "normalerweise", reading: "normalerweise", meaning: "normally", example: { jp: "Normalerweise arbeite ich bis fünf.", en: "Normally I work until five." }, drill: { jp: "Normalerweise arbeite ich bis fünf", en: "Normally I work until five" }, accept: ["normally", "usually", "as a rule"], hint: "The -weise ending turns an adjective into an adverb of manner, and German builds many of them this way: glücklicherweise, teilweise." },
        { id: "de-u21l4-derfeierabend", type: "vocab", front: "der Feierabend", reading: "derfeierabend", meaning: "the end of the working day", example: { jp: "Nach dem Feierabend gehen wir nach Hause.", en: "After work we go home." }, drill: { jp: "Der Feierabend ist um fünf", en: "The end of the working day is at five" }, accept: ["the end of the working day", "knocking-off time", "after work"], hint: "No English word does this job. Feierabend machen means to stop work for the day, and Schönen Feierabend! is what colleagues say as they leave." },
      ],
    },
  ],
};
