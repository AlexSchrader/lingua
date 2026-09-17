// NO Unit 60 — Problemer og løsninger ("Problems and solutions") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Problems and solutions"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ `å løse` IS DELIBERATELY NOT TAUGHT, and this is the clearest case in the
// band of unit51.js B2's rejected-derivation test. A2 teaches `ei løsning`, a
// solution. The verb å løse means exactly that and nothing more: a learner who
// owns løsning gains no new meaning from løse, only a second mastery track for
// one word. So this unit — the one whose whole title is about solutions — never
// teaches the word "to solve". What it teaches instead is what you actually DO:
// undersøke, gjennomgå, overvinne, reparere, and the noun for the way out.
//
// ⚠ `å lykkes` (l4) and `å skyldes` (u52l1) are the band's two S-VERBS, and they
// are the only ones. A Norwegian s-verb has no conjugation to learn — lykkes is
// the infinitive AND the present, past lyktes. Both hints say so, because a
// learner who tries to say *lykkeser has misread the whole class.
//
// FIRST FEMININE of the unit is `ei utfordring` (l1) and it carries the en-/ei-
// recognition note unit51.js B4 requires. It is the unit's only feminine.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): å undersøke → "aundersoke",
// å støtte → "astotte", å fullføre → "afullfore".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT60 = {
  id: "no-u60",
  lang: "no",
  title: "Problemer og løsninger",
  order: 60,
  stage: "b1",
  lessons: [
    // Lesson 1: the vocabulary of it going wrong, graded. en tabbe is lighter than
    // en feil (A2) and et uhell is lighter than ei ulykke (A2) — both hints say so
    // against the word the learner already has.
    {
      id: "no-u60l1",
      unit: 60,
      lesson: 1,
      title: "Når noe går galt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say something has gone wrong and how badly — name a blunder and a mishap, say a person or a machine failed, say you were disturbed, and call the whole thing a challenge.",
      items: [
        { id: "no-u60l1-galt", type: "vocab", front: "galt", reading: "galt", meaning: "wrong", example: { jp: "Noe er galt med bilen i dag.", en: "Something is wrong with the car today." }, drill: { jp: "Noe er galt med telefonen", en: "Something is wrong with the phone" }, accept: ["amiss", "not right", "incorrect", "the matter"], hint: "GALT. The neuter of gal, and the neuter is the form the everyday phrases use: hva er galt? what's wrong? Det gikk galt, it went wrong. ⚠ Gal about a PERSON means mad, not mistaken." },
        { id: "no-u60l1-entabbe", type: "vocab", front: "en tabbe", reading: "entabbe", meaning: "blunder", example: { jp: "Han gjorde en tabbe og glemte avtalen.", en: "He made a blunder and forgot the appointment." }, drill: { jp: "Hun gjorde en tabbe i går", en: "She made a blunder yesterday" }, accept: ["a slip-up", "a gaffe", "a mistake", "a blunder"], hint: "TAB-be. Masculine: definite tabben, plural tabber. ⚠ Lighter than en feil, which you already know: en feil is an error in the work, en tabbe is an embarrassing one you made yourself. Å tabbe seg ut is to make a fool of yourself." },
        { id: "no-u60l1-asvikte", type: "vocab", front: "å svikte", reading: "asvikte", meaning: "to let down", example: { jp: "Han sviktet oss da vi trengte ham.", en: "He let us down when we needed him." }, drill: { jp: "Det er lett å svikte en venn", en: "It is easy to let a friend down" }, accept: ["fail someone", "to give way", "to break down", "to betray"], hint: "SVIK-te. Present svikter, past sviktet. Two jobs: a person who svikter lets you down, and a thing that svikter gives way. Et svik is a betrayal." },
        { id: "no-u60l1-aforstyrre", type: "vocab", front: "å forstyrre", reading: "aforstyrre", meaning: "to disturb", example: { jp: "Unnskyld, forstyrrer jeg?", en: "Sorry, am I disturbing you?" }, drill: { jp: "Det er lett å forstyrre en samtale", en: "It is easy to disturb a conversation" }, accept: ["disturb", "to interrupt", "interrupt", "to bother"], hint: "for-STUER-re. Present forstyrrer, past forstyrret. ⚠ Ikke forstyrr is what the sign on a hotel door says. It is about breaking someone's concentration, where å plage is about making them unhappy." },
        { id: "no-u60l1-eiutfordring", type: "vocab", front: "ei utfordring", reading: "eiutfordring", meaning: "challenge", example: { jp: "Ei utfordring er ikke det samme som et problem.", en: "A challenge is not the same thing as a problem." }, drill: { jp: "Dette er ei utfordring for alle", en: "This is a challenge for everyone" }, accept: ["a test", "something difficult", "a challenge"], hint: "UT-for-dring. Feminine: definite utfordringa, plural utfordringer. You will also see ei utfordring written en utfordring / utfordringen — Bokmål allows both, and print leans on the en- form; this course writes ei because ei is what tells you the definite ends in -a. Å utfordre is to challenge. ⚠ Norwegian working life uses it exactly as English does: as the polite word for a problem." },
        { id: "no-u60l1-etuhell", type: "vocab", front: "et uhell", reading: "etuhell", meaning: "mishap", example: { jp: "Et uhell på kjøkkenet skjer ofte.", en: "A mishap in the kitchen happens often." }, drill: { jp: "Et uhell skjer av og til", en: "A mishap happens now and then" }, accept: ["an accident", "a mischance", "bad luck", "a mishap"], hint: "U-hell. Neuter: definite uhellet, plural uhell — no ending. The u- flips et hell, luck. ⚠ Much lighter than ei ulykke: et uhell is spilling the coffee, ei ulykke is the crash. Ved et uhell means by accident." },
      ],
    },
    // Lesson 2: working it out. Note what is NOT here — see the header on å løse.
    {
      id: "no-u60l2",
      unit: 60,
      lesson: 2,
      title: "Å finne ut av det",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Work a problem out — investigate it, go through it point by point, get past it, name the way out, repair what broke, and keep the whole thing practical.",
      items: [
        { id: "no-u60l2-aundersoke", type: "vocab", front: "å undersøke", reading: "aundersoke", meaning: "to investigate", example: { jp: "Legen undersøker pasienten grundig.", en: "The doctor examines the patient thoroughly." }, drill: { jp: "Det er viktig å undersøke ei sak", en: "It is important to investigate a matter" }, accept: ["examine", "to look into", "look into", "to check out", "investigate"], hint: "UN-der-so-ke. Under plus søke, to search — to search underneath. Present undersøker, past undersøkte. A doctor undersøker a patient and the police undersøker a case: Norwegian uses one word for both." },
        { id: "no-u60l2-agjennomga", type: "vocab", front: "å gjennomgå", reading: "agjennomga", meaning: "to go through", example: { jp: "Vi gjennomgår alle tallene i dag.", en: "We are going through all the figures today." }, drill: { jp: "Det er viktig å gjennomgå alt", en: "It is important to go through everything" }, accept: ["review", "to go over", "go over", "to undergo"], hint: "YEN-nom-gaw. Gjennom plus gå. Present gjennomgår, past gjennomgikk. ⚠ Two very different senses: to review something item by item, and to UNDERGO something — han gjennomgikk en operasjon." },
        { id: "no-u60l2-aovervinne", type: "vocab", front: "å overvinne", reading: "aovervinne", meaning: "to overcome", example: { jp: "Hun overvant alle problemer i år.", en: "She overcame every problem this year." }, drill: { jp: "Det er lett å overvinne et problem", en: "It is easy to overcome a problem" }, accept: ["overcome", "to conquer", "conquer", "to get past", "to surmount"], hint: "O-ver-vin-ne. Over plus vinne, to win — to win out over. Present overvinner, past overvant, perfect har overvunnet. ⚠ The same i → a → u vowel ladder as å forsvinne in u59." },
        { id: "no-u60l2-enutvei", type: "vocab", front: "en utvei", reading: "enutvei", meaning: "way out", example: { jp: "Det er alltid en utvei her.", en: "There is always a way out here." }, drill: { jp: "Vi trenger en utvei nå", en: "We need a way out now" }, accept: ["an escape route", "a solution", "an out", "a way out"], hint: "UT-vei. Masculine: definite utveien, plural utveier. Ut plus vei. ⚠ Siste utvei is the last resort, and en nødutvei is a fire exit." },
        { id: "no-u60l2-areparere", type: "vocab", front: "å reparere", reading: "areparere", meaning: "to repair", example: { jp: "Han reparerer sykkelen i dag.", en: "He is repairing the bicycle today." }, drill: { jp: "Det er lett å reparere en sykkel", en: "It is easy to repair a bicycle" }, accept: ["repair", "to fix", "fix", "to mend"], hint: "re-pa-RE-re. Present reparerer, past reparerte. En reparasjon is the repair itself. Norwegians say fikse just as often in speech, but reparere is what the receipt says." },
        { id: "no-u60l2-praktisk", type: "vocab", front: "praktisk", reading: "praktisk", meaning: "practical", example: { jp: "En praktisk plan er bedre enn en vakker.", en: "A practical plan is better than a beautiful one." }, drill: { jp: "Dette er en praktisk plan", en: "This is a practical plan" }, accept: ["hands-on", "sensible", "workable", "handy"], hint: "PRAK-tisk. Neuter praktisk, plural praktiske. ⚠ Praktisk talt means \"practically\" in the sense of almost: praktisk talt ferdig, practically done." },
      ],
    },
    // Lesson 3: help. en innsats is the one to notice — Norwegian school and
    // working life praise effort as a thing separate from success, and there is no
    // single English noun that does the same job.
    {
      id: "no-u60l3",
      unit: 60,
      lesson: 3,
      title: "Hjelp og støtte",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get behind someone — give advice, encourage them, seize a chance, name the effort they put in, and say what you gave up for it.",
      items: [
        { id: "no-u60l3-etrad", type: "vocab", front: "et råd", reading: "etrad", meaning: "advice", example: { jp: "Et godt råd koster ingenting.", en: "Good advice costs nothing." }, drill: { jp: "Han ga meg et råd i går", en: "He gave me a piece of advice yesterday" }, accept: ["a piece of advice", "a tip", "counsel", "advice"], hint: "RAWD — the d is silent. Neuter: definite rådet, plural råd, no ending. ⚠ Two further lives: et råd is also a council, and å ha råd til noe means to afford it — one of the most-used phrases in the language." },
        { id: "no-u60l3-aoppmuntre", type: "vocab", front: "å oppmuntre", reading: "aoppmuntre", meaning: "to encourage", example: { jp: "Læreren oppmuntrer alle elevene hver dag.", en: "The teacher encourages all the pupils every day." }, drill: { jp: "Det er godt å oppmuntre en elev", en: "It is good to encourage a pupil" }, accept: ["encourage", "to cheer on", "cheer on", "to buoy up"], hint: "OPP-mun-tre. Opp plus munter, cheerful — to lift someone up into good spirits. Present oppmuntrer, past oppmuntret. Oppmuntrende is the adjective, encouraging." },
        { id: "no-u60l3-agripe", type: "vocab", front: "å gripe", reading: "agripe", meaning: "to seize", example: { jp: "Han grep hånda mi og holdt den.", en: "He seized my hand and held it." }, drill: { jp: "Det er lett å gripe en sjanse", en: "It is easy to seize a chance" }, accept: ["seize", "to grab", "grab", "to grasp", "to take hold of"], hint: "GRI-pe. Present griper, past grep, perfect har grepet. ⚠ Å gripe inn is to step in and intervene, and gripende means moving, of a film or a story. Et begrep, which you met in u58, is built on this verb." },
        { id: "no-u60l3-eninnsats", type: "vocab", front: "en innsats", reading: "eninnsats", meaning: "effort", example: { jp: "En god innsats er viktigere enn et godt resultat.", en: "A good effort matters more than a good result." }, drill: { jp: "Han gjorde en innsats i går", en: "He made an effort yesterday" }, accept: ["a contribution", "input", "commitment", "effort"], hint: "INN-sats. Masculine: definite innsatsen, plural innsatser. Inn plus sats, a stake — what you put IN. ⚠ In Norwegian school and working life, praise for innsats is deliberately separate from praise for the result." },
        { id: "no-u60l3-aofre", type: "vocab", front: "å ofre", reading: "aofre", meaning: "to sacrifice", example: { jp: "Hun ofret ferien for å hjelpe familien.", en: "She sacrificed her holiday to help the family." }, drill: { jp: "Det er lett å ofre en ferie", en: "It is easy to sacrifice a holiday" }, accept: ["sacrifice", "to give up", "give up", "to forgo"], hint: "OF-re. Present ofrer, past ofret. Et offer is the sacrifice — ⚠ and also the victim, the same word doing double duty. Å ofre seg is to give yourself up for someone." },
      ],
    },
    // Lesson 4: getting there. å gi opp is a separable verb and its hint warns
    // about the trap: oppgi, written together, is a different verb entirely.
    {
      id: "no-u60l4",
      unit: 60,
      lesson: 4,
      title: "Å komme i mål",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get to the end of it — say you succeeded, achieved a goal, nearly gave up, finished the thing off, name the outcome, and say it happened at last.",
      items: [
        { id: "no-u60l4-alykkes", type: "vocab", front: "å lykkes", reading: "alykkes", meaning: "to succeed", example: { jp: "Han lykkes med alt han prøver.", en: "He succeeds at everything he tries." }, drill: { jp: "Det er lett å lykkes her", en: "It is easy to succeed here" }, accept: ["succeed", "to manage it", "to come off", "to work out"], hint: "LUEK-kes. ⚠ An s-verb, like å skyldes in u52: lykkes is BOTH the infinitive and the present — there is no *lykkeser — and the past is lyktes. The frame is å lykkes MED noe, and det lyktes ikke means it did not work out." },
        { id: "no-u60l4-aoppna", type: "vocab", front: "å oppnå", reading: "aoppna", meaning: "to achieve", example: { jp: "Vi oppnådde alt vi ville i år.", en: "We achieved everything we wanted this year." }, drill: { jp: "Det er lett å oppnå et mål", en: "It is easy to achieve a goal" }, accept: ["achieve", "to attain", "attain", "to obtain", "to secure"], hint: "OPP-naw. Opp plus nå, to reach — to reach up to. Present oppnår, past oppnådde. You oppnår a result, an agreement or a goal; it is never used for reaching a place." },
        { id: "no-u60l4-agiopp", type: "vocab", front: "å gi opp", reading: "agiopp", meaning: "to give up", example: { jp: "Ikke gi opp nå, du er nesten ferdig.", en: "Don't give up now, you are almost finished." }, drill: { jp: "Det er lett å gi opp her", en: "It is easy to give up here" }, accept: ["give up", "to quit", "quit", "to abandon", "to throw in the towel"], hint: "gi OPP. Present gir opp, past ga opp. ⚠ The opp stays BEHIND the verb: han ga opp, never *han oppga — which is a different verb meaning to state or declare. Oppgitt, which you met in u57, is this one's participle." },
        { id: "no-u60l4-afullfore", type: "vocab", front: "å fullføre", reading: "afullfore", meaning: "to complete", example: { jp: "Hun fullførte utdanninga i år.", en: "She completed her education this year." }, drill: { jp: "Det er viktig å fullføre et kurs", en: "It is important to complete a course" }, accept: ["complete", "to finish", "finish", "to see it through"], hint: "FULL-fo-re. Full plus føre, to lead all the way. Present fullfører, past fullførte. ⚠ Stronger than å slutte, which only means to stop: you fullfører a course, and you slutter smoking." },
        { id: "no-u60l4-etutfall", type: "vocab", front: "et utfall", reading: "etutfall", meaning: "outcome", example: { jp: "Et utfall er umulig å vite nå.", en: "An outcome is impossible to know now." }, drill: { jp: "Et utfall er ikke sikkert", en: "An outcome is not certain" }, accept: ["a result", "how it turns out", "an upshot", "an outcome"], hint: "UT-fall. Neuter: definite utfallet, plural utfall — no ending. Ut plus falle, to fall out: how it falls out. ⚠ More neutral than et resultat, which implies somebody measured it." },
      ],
    },
  ],
};
