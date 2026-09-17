// NO Unit 62 — Planer og hensikter ("Plans and intentions") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Plans and intentions"; retitled per CLAUDE.md → "No front
// language". LAST UNIT OF BLOCK 1 (u51–u62).
// Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ A2 ALREADY TEACHES THE FUTURE ITSELF — kommer til å, skal til å, planlegger å,
// tenker å, en plan, å planlegge, en hensikt, et mål, å bestemme, ei beslutning,
// et forslag, ei framtid. So u62 does not re-teach "I'm going to". It teaches the
// DECIDING (l1), the EXPECTING (l2), the ARRANGING (l3) and the LONG GAME (l4).
//
// ⚠ `å nå` (to reach) IS DELIBERATELY LEFT UNTAUGHT and is on unit51.js B8's list
// for blocks 2 and 3. It is a top-50 Norwegian verb and block 1 never found an
// honest slot for it — u60l4 needed `å oppnå` (to achieve), which is built on it,
// and teaching both in one block would be the derivation trap B2 warns about.
// WHICHEVER BLOCK TAKES IT: `å oppnå` is already spoken for, so teach the bare
// verb in its own right — å nå bussen, å nå fram, å nå en frist.
//
// FIRST FEMININE of the unit: there is NONE — every new noun here is masculine
// (en utsikt, en karriere) or neuter (et utkast, et opplegg). No en-/ei- note owed.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): å sørge → "asorge".
// ⚠ `å se fram til` folds to "aseframtil" — the whole front with spaces removed,
// not just the verb.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT62 = {
  id: "no-u62",
  lang: "no",
  title: "Planer og hensikter",
  order: 62,
  stage: "b1",
  lessons: [
    // Lesson 1: committing. å ombestemme closes the loop on å satse and å sikte —
    // deciding, aiming, and then changing your mind, which is the honest sequence.
    {
      id: "no-u62l1",
      unit: 62,
      lesson: 1,
      title: "Å bestemme seg",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Commit to a course of action — go for something, aim at it, change your mind, write a first draft, decide what comes first, and tie yourself to it.",
      items: [
        { id: "no-u62l1-asatse", type: "vocab", front: "å satse", reading: "asatse", meaning: "to go for it", example: { jp: "Vi satser på at været blir bra.", en: "We are banking on the weather being good." }, drill: { jp: "Det er lett å satse på noe", en: "It is easy to bet on something" }, accept: ["bet on", "to go all in", "to commit to", "to invest in"], hint: "SAT-se. Present satser, past satset. From en sats, a stake — you put your money on it. ⚠ Always å satse PÅ noe. Norwegians use it about a career choice as readily as about a bet." },
        { id: "no-u62l1-asikte", type: "vocab", front: "å sikte", reading: "asikte", meaning: "to aim", example: { jp: "Vi sikter på en bedre stilling.", en: "We are aiming for a better position." }, drill: { jp: "Vi begynner å sikte høyere nå", en: "We are starting to aim higher now" }, accept: ["aim", "to target", "to set your sights", "aim for"], hint: "SIK-te. Present sikter, past siktet. Aiming a rifle and aiming at a goal, one word. ⚠ Å sikte PÅ noe is to aim at it; å sikte NOEN, in a courtroom, is to charge them." },
        { id: "no-u62l1-aombestemme", type: "vocab", front: "å ombestemme", reading: "aombestemme", meaning: "to change one's mind", example: { jp: "Hun ombestemte seg i går.", en: "She changed her mind yesterday." }, drill: { jp: "Det er lett å ombestemme seg", en: "It is easy to change your mind" }, accept: ["change your mind", "to have second thoughts", "reconsider", "to think again"], hint: "OM-be-stem-me. Om, around, plus bestemme, to decide — to decide the other way round. ⚠ ALWAYS reflexive: å ombestemme SEG, never on its own. Present ombestemmer seg, past ombestemte seg." },
        { id: "no-u62l1-etutkast", type: "vocab", front: "et utkast", reading: "etutkast", meaning: "draft", example: { jp: "Et utkast er ikke ferdig ennå.", en: "A draft is not finished yet." }, drill: { jp: "Han skrev et utkast i går", en: "He wrote a draft yesterday" }, accept: ["a rough version", "an outline", "a first go", "a draft"], hint: "UT-kast. Neuter: definite utkastet, plural utkast — no ending. Ut plus kaste, to throw: what you throw out first and tidy up afterwards." },
        { id: "no-u62l1-aprioritere", type: "vocab", front: "å prioritere", reading: "aprioritere", meaning: "to prioritise", example: { jp: "Vi må prioritere de viktigste oppgavene.", en: "We have to prioritise the most important tasks." }, drill: { jp: "Det er viktig å prioritere riktig", en: "It is important to prioritise correctly" }, accept: ["prioritize", "to put first", "rank by importance", "prioritise"], hint: "pri-o-ri-TE-re. Present prioriterer, past prioriterte. En prioritet is a priority. ⚠ Norwegian working life leans on it hard: det er ikke prioritert is the polite way of saying nobody is going to do it." },
        { id: "no-u62l1-abinde", type: "vocab", front: "å binde", reading: "abinde", meaning: "to tie", example: { jp: "Han bandt sekken godt før turen.", en: "He tied the backpack up well before the trip." }, drill: { jp: "Det er lett å binde en sekk", en: "It is easy to tie a backpack" }, accept: ["tie", "to bind", "bind", "to fasten", "to commit"], hint: "BIN-ne. Present binder, past bandt, perfect har bundet — the i → a → u ladder once more, as in forsvinne, overvinne and tvinge. ⚠ Å binde seg is to commit yourself, and bindende means binding, of a contract." },
      ],
    },
    // Lesson 2: what you expect to happen. å forvente is placed against A2's
    // å vente in its own hint — waiting and expecting are one word in careless
    // English and two in Norwegian.
    {
      id: "no-u62l2",
      unit: 62,
      lesson: 2,
      title: "Framtid og planer",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you expect — expect a result, count on someone, foresee a problem, name the prospects ahead, and talk about the long run and about doing things in advance.",
      items: [
        { id: "no-u62l2-aforvente", type: "vocab", front: "å forvente", reading: "aforvente", meaning: "to expect", example: { jp: "Vi forventer mye av det nye kurset.", en: "We expect a lot from the new course." }, drill: { jp: "Det er lett å forvente mye her", en: "It is easy to expect a lot here" }, accept: ["expect", "to anticipate", "anticipate", "to look for"], hint: "for-VEN-te. For plus vente, to wait — to wait for it as if it will certainly come. Present forventer, past forventet. ⚠ Å vente is to WAIT; å forvente is to EXPECT. En forventning is the expectation." },
        { id: "no-u62l2-aregnemed", type: "vocab", front: "å regne med", reading: "aregnemed", meaning: "to count on", example: { jp: "Jeg regner med at han kommer snart.", en: "I count on him coming soon." }, drill: { jp: "Du kan begynne å regne med oss", en: "You can start counting on us" }, accept: ["count on", "to reckon on", "to assume", "to bank on"], hint: "REY-ne med. Å regne alone is to calculate — or to rain, which is spelled the same and is a different word. Regne MED is to include it in your calculation, hence to count on it. Present regner med, past regnet med." },
        { id: "no-u62l2-aforutse", type: "vocab", front: "å forutse", reading: "aforutse", meaning: "to foresee", example: { jp: "Ingen kunne forutse dette resultatet.", en: "Nobody could foresee this result." }, drill: { jp: "Det er lett å forutse et problem", en: "It is easy to foresee a problem" }, accept: ["foresee", "to predict", "predict", "to anticipate"], hint: "FOR-ut-se. For plus ut plus se — to see out ahead. Present forutser, past forutså. ⚠ Uforutsett means unforeseen, and it is the word every Norwegian insurance form asks about." },
        { id: "no-u62l2-enutsikt", type: "vocab", front: "en utsikt", reading: "enutsikt", meaning: "prospect", example: { jp: "En utsikt til bedre vær gjør alle glade.", en: "The prospect of better weather makes everyone happy." }, drill: { jp: "En utsikt til bedre vær er god", en: "A prospect of better weather is good" }, accept: ["an outlook", "a view", "the chances", "a prospect"], hint: "UT-sikt. Masculine: definite utsikten, plural utsikter. Ut plus sikt, sight. ⚠ Two everyday senses: the literal view from a window, and the prospects ahead — gode utsikter, good prospects." },
        { id: "no-u62l2-pasikt", type: "vocab", front: "på sikt", reading: "pasikt", meaning: "in the long run", example: { jp: "På sikt blir dette billigere for alle.", en: "In the long run this gets cheaper for everyone." }, drill: { jp: "På sikt blir dette bedre", en: "In the long run this gets better" }, accept: ["in the longer term", "over time", "eventually", "down the line"], hint: "paw SIKT. Two words, one adverb — literally \"on sight\", as far ahead as you can see. It fronts the clause and drags V2 with it: På sikt BLIR det bedre. Kort sikt and lang sikt are short and long term." },
        { id: "no-u62l2-paforhand", type: "vocab", front: "på forhånd", reading: "paforhand", meaning: "in advance", example: { jp: "Vi betalte på forhånd for rommet.", en: "We paid in advance for the room." }, drill: { jp: "Vi betalte på forhånd i går", en: "We paid in advance yesterday" }, accept: ["beforehand", "ahead of time", "up front", "in advance"], hint: "paw FOR-hawn — the d is silent. På plus forhånd, the fore-hand, before the hand is played. ⚠ Takk på forhånd, \"thanks in advance\", is how a Norwegian email asks you for something." },
      ],
    },
    // Lesson 3: the practical arranging. et opplegg is the one with no English
    // equivalent — it is the whole SHAPE of how a thing will be run, and et fint
    // opplegg is real praise.
    {
      id: "no-u62l3",
      unit: 62,
      lesson: 3,
      title: "Å ordne det praktiske",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Arrange the practical side — book something, get hold of what you need, describe the whole setup, cancel when you must, make sure of a detail, and work out the figures beforehand.",
      items: [
        { id: "no-u62l3-abestille", type: "vocab", front: "å bestille", reading: "abestille", meaning: "to order", example: { jp: "Jeg bestilte et bord på restauranten.", en: "I booked a table at the restaurant." }, drill: { jp: "Det er lett å bestille en billett", en: "It is easy to book a ticket" }, accept: ["book", "to reserve", "reserve", "to place an order"], hint: "be-STIL-le. Present bestiller, past bestilte. ⚠ One word covers both: you bestiller food in a restaurant and a room in a hotel. En bestilling is the order or the booking." },
        { id: "no-u62l3-askaffe", type: "vocab", front: "å skaffe", reading: "askaffe", meaning: "to get hold of", example: { jp: "Kan du skaffe en ny nøkkel?", en: "Can you get hold of a new key?" }, drill: { jp: "Det er lett å skaffe en billett", en: "It is easy to get hold of a ticket" }, accept: ["obtain", "procure", "to source", "to provide"], hint: "SKAF-fe. Present skaffer, past skaffet. ⚠ Stronger than å få: å skaffe means you go and arrange it yourself. Å skaffe seg noe is to acquire it for yourself." },
        { id: "no-u62l3-etopplegg", type: "vocab", front: "et opplegg", reading: "etopplegg", meaning: "arrangement", example: { jp: "Et opplegg for hele dagen er klart.", en: "An arrangement for the whole day is ready." }, drill: { jp: "Et opplegg for dagen er klart", en: "An arrangement for the day is ready" }, accept: ["a plan", "a setup", "a programme", "how it is organised"], hint: "OPP-legg. Neuter: definite opplegget, plural opplegg — no ending. Opp plus legge, to lay out. ⚠ Very Norwegian and hard to translate: et opplegg is the whole SHAPE of how something will be run, and et fint opplegg is genuine praise." },
        { id: "no-u62l3-aavlyse", type: "vocab", front: "å avlyse", reading: "aavlyse", meaning: "to cancel", example: { jp: "De avlyste konserten på grunn av været.", en: "They cancelled the concert because of the weather." }, drill: { jp: "Det er lett å avlyse en konsert", en: "It is easy to cancel a concert" }, accept: ["cancel", "to call off", "call off", "to scrap"], hint: "AV-lue-se. Av plus lyse, to announce — to un-announce. Present avlyser, past avlyste. ⚠ You avlyser an EVENT; you kansellerer a flight or a ticket, and you sier opp a job." },
        { id: "no-u62l3-asorge", type: "vocab", front: "å sørge for", reading: "asorgefor", meaning: "to make sure", example: { jp: "Sørg for at alle får beskjed.", en: "Make sure everyone gets word." }, drill: { jp: "Det er viktig å sørge for alt", en: "It is important to see to everything" }, accept: ["see to it", "to provide for", "to grieve", "make sure"], hint: "SUR-ge. Present sørger, past sørget. ⚠ Two senses that feel unrelated and share one verb: å sørge FOR noe is to see to it, and å sørge on its own is to grieve. The for is the whole difference." },
        { id: "no-u62l3-aberegne", type: "vocab", front: "å beregne", reading: "aberegne", meaning: "to calculate", example: { jp: "Vi beregner en time til hver oppgave.", en: "We allow an hour for each task." }, drill: { jp: "Det er lett å beregne en pris", en: "It is easy to calculate a price" }, accept: ["calculate", "to work out", "work out", "to estimate", "to budget for"], hint: "be-REY-ne. Be- plus regne, to reckon. Present beregner, past beregnet. ⚠ It means working a figure out IN ADVANCE — beregnet ankomst is estimated arrival, which you will read on every Norwegian departure board." },
      ],
    },
    // Lesson 4: the long game, and the last lesson of block 1. tålmodig closes the
    // block on purpose: it is the quality the whole band has been asking of the
    // learner, and it is built on å tåle plus mot — the courage to bear it.
    {
      id: "no-u62l4",
      unit: 62,
      lesson: 4,
      title: "Langsiktige mål",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the long game — call a plan long-term, fulfil a requirement, settle somewhere for good, describe a career, look forward to something, and be patient about all of it.",
      items: [
        { id: "no-u62l4-langsiktig", type: "vocab", front: "langsiktig", reading: "langsiktig", meaning: "long-term", example: { jp: "En langsiktig plan er bedre enn en rask.", en: "A long-term plan is better than a quick one." }, drill: { jp: "Dette er en langsiktig plan", en: "This is a long-term plan" }, accept: ["long-range", "strategic", "over the long haul", "for the long run"], hint: "LANG-sik-ti — silent g. Lang plus sikt, the same sikt as in på sikt. Neuter langsiktig, plural langsiktige. Kortsiktig is the opposite." },
        { id: "no-u62l4-aoppfylle", type: "vocab", front: "å oppfylle", reading: "aoppfylle", meaning: "to fulfil", example: { jp: "Han oppfylte alle krav til stillinga.", en: "He fulfilled every requirement for the post." }, drill: { jp: "Det er lett å oppfylle et krav", en: "It is easy to fulfil a requirement" }, accept: ["fulfill", "to meet", "meet a requirement", "to satisfy"], hint: "OPP-fuel-le. Opp plus fylle, to fill — to fill it right up. Present oppfyller, past oppfylte. You oppfyller a requirement, a promise, or a dream." },
        { id: "no-u62l4-abosette", type: "vocab", front: "å bosette", reading: "abosette", meaning: "to settle", example: { jp: "De bosatte seg i Bergen for ti år siden.", en: "They settled in Bergen ten years ago." }, drill: { jp: "Det er lett å bosette seg her", en: "It is easy to settle here" }, accept: ["settle down", "to make your home", "to take up residence", "settle"], hint: "BU-set-te. Bo, to live, plus sette, to set — to set yourself down to live somewhere. ⚠ Always reflexive: å bosette SEG. Present bosetter seg, past bosatte seg." },
        { id: "no-u62l4-enkarriere", type: "vocab", front: "en karriere", reading: "enkarriere", meaning: "career", example: { jp: "En karriere tar mange år å bygge.", en: "A career takes many years to build." }, drill: { jp: "Hun har en karriere i Oslo", en: "She has a career in Oslo" }, accept: ["a professional life", "a working life", "a career"], hint: "ka-ri-Æ-re. Masculine: definite karrieren, plural karrierer. ⚠ Note the double r and the stress on the third syllable. Et yrke is the trade you have; en karriere is the road through it." },
        { id: "no-u62l4-aseframtil", type: "vocab", front: "å se fram til", reading: "aseframtil", meaning: "to look forward to", example: { jp: "Jeg ser fram til sommeren i Norge.", en: "I look forward to the summer in Norway." }, drill: { jp: "Det er godt å se fram til noe", en: "It is good to look forward to something" }, accept: ["look forward to", "to anticipate happily", "be looking forward to"], hint: "se FRAM til. Three words, one verb, and they never separate: jeg ser fram til det. Present ser fram til, past så fram til. ⚠ Framover is written as one word, but fram til stays as two." },
        { id: "no-u62l4-talmodig", type: "vocab", front: "tålmodig", reading: "talmodig", meaning: "patient (not hurrying)", example: { jp: "Hun er tålmodig med alle elevene.", en: "She is patient with all the pupils." }, drill: { jp: "Du må være tålmodig her", en: "You have to be patient here" }, accept: ["patient with someone", "forbearing", "willing to wait", "long-suffering", "patient"], hint: "tawl-MO-di — silent g. Å tåle, to bear, plus mot, courage: the courage to bear it. Neuter tålmodig, plural tålmodige. Utålmodig is impatient, and tålmodighet is patience." },
      ],
    },
  ],
};
