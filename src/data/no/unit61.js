// NO Unit 61 — Regler, lov og plikt ("Rules, permission, obligation") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Rules, permission, obligation"; retitled per CLAUDE.md → "No
// front language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8.
//
// ⚠ THE MODALS ARE ALREADY TAUGHT — A2's u13l2 has å kunne, å ville, å skulle,
// å måtte, å burde and å få, and `bør` is one of the language's two documented
// infinitive exceptions (unit1.js §2). So u61 does NOT re-teach "must". It teaches
// what sits AROUND the modals: the law that makes the obligation (l1), the words
// for being under one (l2), the people who enforce it (l3), and the unwritten
// rules nobody enforces at all (l4).
//
// ⚠ `å slippe` IS THE MOST VALUABLE CARD IN THIS UNIT and it is the one an English
// speaker has no word for. Å slippe å gjøre noe is to be SPARED having to do it —
// the exact opposite of å måtte, expressed positively. English needs a whole
// clause ("I don't have to", "I got out of it"). Norwegians use it constantly.
//
// ⚠ `å bryte` IS TAUGHT even though A2 teaches `å avbryte`, to interrupt. This is
// the second of the two borderline calls unit51.js B2 records: breaking a rule is
// not interrupting a person, and a learner cannot say "han brøt loven" without it.
//
// FIRST FEMININE of the unit: there is NONE. Every new noun here is masculine
// (en ordre, en vakt, en orden, en kontroll, en tradisjon, en norm) or neuter
// (et unntak, et hensyn, et politi). No en-/ei- note is owed. `en norm` is marked
// masculine for the reason unit58.js gives — normen, not *norma, is what is
// written.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): nødt → "nodt",
// uhøflig → "uhoflig".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT61 = {
  id: "no-u61",
  lang: "no",
  title: "Regler, lov og plikt",
  order: 61,
  stage: "b1",
  lessons: [
    // Lesson 1: what the law says. forbudt opens because it is the word a learner
    // READS on a Norwegian sign long before they ever say it.
    {
      id: "no-u61l1",
      unit: 61,
      lesson: 1,
      title: "Lov og forbud",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read and state a rule — say something is forbidden or permitted, that someone broke it, that there is an exception, that a ticket is valid, and warn someone.",
      items: [
        { id: "no-u61l1-forbudt", type: "vocab", front: "forbudt", reading: "forbudt", meaning: "forbidden", example: { jp: "Det er forbudt å kjøre her.", en: "It is forbidden to drive here." }, drill: { jp: "Det er forbudt å parkere her", en: "It is forbidden to park here" }, accept: ["prohibited", "banned", "not allowed", "off limits"], hint: "for-BUDT. The participle of å forby, to forbid, and it takes no ending in this use: det er forbudt. ⚠ It is what a Norwegian sign says — Adgang forbudt, no entry — so you will read it long before you need to say it." },
        { id: "no-u61l1-abryte", type: "vocab", front: "å bryte", reading: "abryte", meaning: "to break (a rule)", example: { jp: "Han brøt regelen og fikk ei bot.", en: "He broke the rule and got a fine." }, drill: { jp: "Det er lett å bryte en regel", en: "It is easy to break a rule" }, accept: ["break", "to violate", "violate", "to breach", "to break"], hint: "BRUE-te. Present bryter, past brøt, perfect har brutt. ⚠ A2 taught you å avbryte, to interrupt — this is the plain verb inside it. You bryter a rule, a promise or a bone; å brekke is the one for a leg." },
        { id: "no-u61l1-etunntak", type: "vocab", front: "et unntak", reading: "etunntak", meaning: "exception", example: { jp: "Et unntak gjør ikke en regel dårlig.", en: "An exception does not make a rule bad." }, drill: { jp: "Vi kan gjøre et unntak i dag", en: "We can make an exception today" }, accept: ["a special case", "an exemption", "an exception"], hint: "UNN-tak. Neuter: definite unntaket, plural unntak — no ending. Unn plus ta, to take away from. ⚠ Med unntak av means \"with the exception of\", and uten unntak means without exception." },
        { id: "no-u61l1-gyldig", type: "vocab", front: "gyldig", reading: "gyldig", meaning: "valid", example: { jp: "Billetten er gyldig i to timer.", en: "The ticket is valid for two hours." }, drill: { jp: "Denne billetten er gyldig nå", en: "This ticket is valid now" }, accept: ["in force", "good for", "current", "legally valid"], hint: "GUEL-di — silent g. Neuter gyldig, plural gyldige. Å gjelde is the verb behind it, to apply or be in force. ⚠ Ugyldig is void — what a referee says about a goal." },
        { id: "no-u61l1-aadvare", type: "vocab", front: "å advare", reading: "aadvare", meaning: "to warn", example: { jp: "Læreren advarer alle om dårlig vær.", en: "The teacher warns everyone about bad weather." }, drill: { jp: "Det er viktig å advare en venn", en: "It is important to warn a friend" }, accept: ["warn", "to caution", "caution", "to alert"], hint: "AD-va-re. Present advarer, past advarte. En advarsel is the warning itself. ⚠ The full frame is å advare noen MOT noe — to warn someone against something." },
        { id: "no-u61l1-enovertredelse", type: "vocab", front: "en overtredelse", reading: "enovertredelse", meaning: "a violation of a rule", example: { jp: "En overtredelse av loven kan koste deg dyrt.", en: "A violation of the law can cost you dearly." }, drill: { jp: "Dette er en overtredelse av loven", en: "This is a violation of the law" }, accept: ["a breach", "an infringement", "an offence"], hint: "O-ver-TRE-del-se. Masculine, like every -else word: definite overtredelsen, plural overtredelser. Over plus tre, to step — you stepped over the line. It is the noun for what å bryte does." },
      ],
    },
    // Lesson 2: being under an obligation, and the one word for escaping one.
    // nødt, å tvinge and å slippe are a three-card arc: forced, forced by someone,
    // let off. See the header on å slippe.
    {
      id: "no-u61l2",
      unit: 61,
      lesson: 2,
      title: "Plikt og nødvendighet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about having no choice — say you are obliged, that someone is forcing you, that you got out of it, name an order, say you obeyed, and show consideration.",
      items: [
        { id: "no-u61l2-nodt", type: "vocab", front: "nødt", reading: "nodt", meaning: "obliged", example: { jp: "Jeg er nødt til å gå nå.", en: "I have to go now." }, drill: { jp: "Vi er nødt til å vente", en: "We have to wait" }, accept: ["forced to", "have to", "obliged to", "compelled"], hint: "NUTT. ⚠ It lives inside one frame and almost never leaves it: å være nødt TIL Å gjøre noe. Stronger and more personal than må — jeg er nødt means I genuinely have no choice." },
        { id: "no-u61l2-aslippe", type: "vocab", front: "å slippe", reading: "aslippe", meaning: "to get out of", example: { jp: "Han slapp å betale fordi han var syk.", en: "He got out of paying because he was ill." }, drill: { jp: "Det er godt å slippe en eksamen", en: "It is good to get out of an exam" }, accept: ["avoid having to", "be let off", "to escape", "not have to"], hint: "SLIP-pe. Present slipper, past slapp, perfect har sluppet. ⚠⚠ This is the verb Norwegian has and English lacks: å slippe å gjøre noe is to be SPARED doing it — the opposite of å måtte, said positively. It also means to drop or release: ikke slipp den!" },
        { id: "no-u61l2-enordre", type: "vocab", front: "en ordre", reading: "enordre", meaning: "command", example: { jp: "En ordre fra sjefen er ikke et forslag.", en: "An order from the boss is not a suggestion." }, drill: { jp: "En ordre fra sjefen kom i går", en: "An order from the boss came yesterday" }, accept: ["an order", "an instruction", "a directive", "an order from above"], hint: "OR-dre. Masculine: definite ordren, plural ordrer. Two live senses: a command, and a purchase order in business. ⚠ Not the same word as en orden, which is tidiness — the final -e is the only thing telling them apart." },
        { id: "no-u61l2-aadlyde", type: "vocab", front: "å adlyde", reading: "aadlyde", meaning: "to obey", example: { jp: "Hunden adlyder ikke når den er sulten.", en: "The dog does not obey when it is hungry." }, drill: { jp: "Det er lett å adlyde en ordre", en: "It is easy to obey an order" }, accept: ["obey", "to follow orders", "follow orders", "to comply"], hint: "AD-lue-de. Ad, to, plus lyde, an old verb meaning to listen — to listen TO. Present adlyder, past adlød. Used about dogs, soldiers and children, and very rarely about adults." },
        { id: "no-u61l2-ethensyn", type: "vocab", front: "et hensyn", reading: "ethensyn", meaning: "consideration", example: { jp: "Et hensyn til naboene er viktig her.", en: "Consideration for the neighbours matters here." }, drill: { jp: "Vi må ta et hensyn her", en: "We have to show consideration here" }, accept: ["regard", "a concern", "thoughtfulness", "consideration"], hint: "HEN-suen. Neuter: definite hensynet, plural hensyn — no ending. ⚠ It lives in the phrase å ta hensyn TIL noen, to show consideration for someone — one of the most Norwegian things you can be asked to do. Hensynsfull is the adjective." },
        { id: "no-u61l2-obligatorisk", type: "vocab", front: "obligatorisk", reading: "obligatorisk", meaning: "compulsory", example: { jp: "Skolen er obligatorisk for alle barn i Norge.", en: "School is compulsory for all children in Norway." }, drill: { jp: "Møtet er obligatorisk for alle i dag", en: "The meeting is compulsory for everybody today" }, accept: ["mandatory", "required", "obligatory"], hint: "ob-li-ga-TO-risk. No -t in the neuter: -sk adjectives never take one, so et obligatorisk kurs. Plural obligatoriske. Frivillig is its opposite and sits in this same lesson." },
      ],
    },
    // Lesson 3: who enforces it. et politi carries the grammatical point learners
    // reliably get wrong — Norwegian treats the police as ONE thing, singular.
    {
      id: "no-u61l3",
      unit: 61,
      lesson: 3,
      title: "Orden og kontroll",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about who keeps order — name the police and a guard, say what protects you, describe tidiness and a check at the border, and say someone is suspected.",
      items: [
        { id: "no-u61l3-etpoliti", type: "vocab", front: "politiet", reading: "politiet", meaning: "the police", example: { jp: "Politiet kom raskt.", en: "The police came quickly." }, drill: { jp: "Politiet må være rettferdig", en: "The police have to be fair" }, accept: ["police", "a police force", "law enforcement"], hint: "po-li-TI. Neuter: definite politiet, and effectively no plural. ⚠ Norwegian treats it as ONE thing, not many people: politiet KOMMER, the police IS coming. En politimann or en politibetjent is the individual officer." },
        { id: "no-u61l3-abeskytte", type: "vocab", front: "å beskytte", reading: "abeskytte", meaning: "to protect", example: { jp: "En god jakke beskytter deg om vinteren.", en: "A good jacket protects you in the winter." }, drill: { jp: "Det er viktig å beskytte et barn", en: "It is important to protect a child" }, accept: ["protect", "to shield", "shield", "to safeguard"], hint: "be-SHUET-te. Be- plus skytte, from skjold, a shield. Present beskytter, past beskyttet. ⚠ The frame is å beskytte noen MOT noe. Beskyttelse is the protection itself." },
        { id: "no-u61l3-enorden", type: "vocab", front: "orden", reading: "orden", meaning: "tidiness", example: { jp: "Orden i huset gjør alt lettere.", en: "Tidiness in the house makes everything easier." }, drill: { jp: "Orden i huset er viktig", en: "Tidiness in the house is important" }, accept: ["orderliness", "arrangement", "order", "neatness"], hint: "OR-den. Masculine: definite ordenen, rarely plural — so it is taught bare (unit1.js §1b). ⚠ It is tidiness and proper arrangement, NOT a command — that is en ordre, with the -e. I orden! is the everyday \"all right, fine\"." },
        { id: "no-u61l3-enkontroll", type: "vocab", front: "en kontroll", reading: "enkontroll", meaning: "check", example: { jp: "En kontroll på grensen tar noen minutter.", en: "A check at the border takes a few minutes." }, drill: { jp: "En kontroll på grensen tar tid", en: "A check at the border takes time" }, accept: ["an inspection", "control", "a checkpoint", "a check"], hint: "kon-TROLL. Masculine: definite kontrollen, plural kontroller. ⚠ Both English senses: a check you go through, and control you have. Ute av kontroll is out of control, and å ha kontroll is to have a grip on it." },
        { id: "no-u61l3-amistenke", type: "vocab", front: "å mistenke", reading: "amistenke", meaning: "to suspect", example: { jp: "Politiet mistenker en mann fra byen.", en: "The police suspect a man from the city." }, drill: { jp: "Det er lett å mistenke en nabo", en: "It is easy to suspect a neighbour" }, accept: ["suspect", "to be suspicious of", "to have doubts about", "to suspect someone"], hint: "mis-TEN-ke. Mis-, wrongly or badly, plus tenke, to think — to think ill of. Present mistenker, past mistenkte. En mistanke is the suspicion, and mistenkelig means suspicious-looking." },
        { id: "no-u61l3-aetterforske", type: "vocab", front: "å etterforske", reading: "aetterforske", meaning: "to investigate a crime", example: { jp: "Politiet etterforsker saka, og de snakker med mange.", en: "The police are investigating the case, and they are talking to a lot of people." }, drill: { jp: "Det tar tid å etterforske en sak", en: "It takes time to investigate a case" }, accept: ["investigate", "to look into (officially)", "to probe"], hint: "ET-ter-fors-ke. Etter plus forske, to research — you research after the fact. Present etterforsker, past etterforsket. It is what police do; a journalist undersøker." },
      ],
    },
    // Lesson 4: the rules nobody wrote down. å takke and å nikke close the unit —
    // and the band's rules half — on the two smallest pieces of Norwegian etiquette
    // a newcomer is judged on: thanking for the food, and returning a nod.
    {
      id: "no-u61l4",
      unit: 61,
      lesson: 4,
      title: "Skikk og bruk",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the unwritten rules — call behaviour rude or inappropriate, name a tradition and a social norm, thank someone properly, say when a line was crossed, and greet with a nod.",
      items: [
        { id: "no-u61l4-uhoflig", type: "vocab", front: "uhøflig", reading: "uhoflig", meaning: "rude", example: { jp: "Det er uhøflig å snakke med mat i munnen.", en: "It is rude to talk with food in your mouth." }, drill: { jp: "Det er uhøflig å komme sent", en: "It is rude to arrive late" }, accept: ["impolite", "discourteous", "bad-mannered", "ill-mannered"], hint: "u-HUF-li — silent g. The u- flips høflig, which you already know, exactly as it flips enig and sikker. Neuter uhøflig, plural uhøflige." },
        { id: "no-u61l4-ennorm", type: "vocab", front: "en norm", reading: "ennorm", meaning: "norm", example: { jp: "En norm er ikke skrevet i en lov.", en: "A norm is not written into a law." }, drill: { jp: "En norm er ikke en lov", en: "A norm is not a law" }, accept: ["an unwritten rule", "a social standard", "a convention", "a norm"], hint: "NORM. Masculine: definite normen, plural normer. ⚠ A norm is what everybody does without being told; a rule is what somebody wrote down. Normal is built on it." },
        { id: "no-u61l4-atakke", type: "vocab", front: "å takke", reading: "atakke", meaning: "to thank", example: { jp: "Han takket for maten og gikk.", en: "He thanked for the food and left." }, drill: { jp: "Det er viktig å takke for maten", en: "It is important to thank for the food" }, accept: ["thank", "to say thank you", "say thanks", "to express thanks"], hint: "TAK-ke. Present takker, past takket. ⚠ Always with for: å takke FOR noe. Takk for maten, said to whoever cooked, is not optional in a Norwegian home — and å takke nei is how you decline politely." },
        { id: "no-u61l4-akrenke", type: "vocab", front: "å krenke", reading: "akrenke", meaning: "to offend", example: { jp: "Han mente ikke å krenke noen.", en: "He did not mean to offend anyone." }, drill: { jp: "Det er lett å krenke en person", en: "It is easy to offend a person" }, accept: ["offend", "to violate", "violate", "to insult", "to hurt someone's feelings"], hint: "KREN-ke. Present krenker, past krenket. ⚠ Much stronger than å irritere: to krenke someone is to injure their dignity or their rights. En krenkelse is a violation, in law as much as in feelings." },
        { id: "no-u61l4-anikke", type: "vocab", front: "å nikke", reading: "anikke", meaning: "to nod", example: { jp: "Hun nikket og sa ingenting.", en: "She nodded and said nothing." }, drill: { jp: "Det er nok å nikke her", en: "It is enough to nod here" }, accept: ["nod", "to nod your head", "give a nod"], hint: "NIK-ke. Present nikker, past nikket. ⚠ Worth knowing as etiquette rather than vocabulary: on a Norwegian path a nod is a COMPLETE greeting between strangers, and no words are expected to follow it." },
        { id: "no-u61l4-upassende", type: "vocab", front: "upassende", reading: "upassende", meaning: "inappropriate", example: { jp: "Det er upassende å snakke høyt på et museum.", en: "It is inappropriate to talk loudly in a museum." }, drill: { jp: "Det var upassende å le da", en: "It was inappropriate to laugh then" }, accept: ["out of place", "unseemly", "not done"], hint: "U-pas-sen-de. The u- that flips enig into uenig, on å passe — it does not fit the occasion. No endings at all: et upassende spørsmål, upassende ord. Milder than uhøflig: nobody was insulted, it just did not belong." },
      ],
    },
  ],
};
