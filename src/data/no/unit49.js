// NO Unit 49 — Å forklare og å fortelle ("Explaining and telling") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 10 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 gave the learner the bare speech verbs — å si, å snakke, å
// spørre, å svare, å fortelle (u12, u17) — enough to exchange information.
// This unit is what you do with speech once you can already speak: explain,
// describe, repeat, disagree, refuse, admit, complain, joke, lie. Eighteen of
// its twenty-four cards are verbs, because that is what this domain is.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// ⚠ NO FEMININE NOUN IN THE WHOLE UNIT, so there is no en-/ei- recognition note
// here. The only four nouns are en samtale, et uttrykk, en setning and en tale,
// plus et rykte and en lyd — every one masculine or neuter. A1 u17 was the same
// shape for the same reason. `en setning` is masculine: the -ning class permits
// a feminine in Bokmål, but `en` dominates and both sibling blocks standardised
// on it, so this block follows (see u47's header for the full note).
//
// ø IS WRITTEN o IN `reading` (§3): `å påstå` → "apasta" (three å's, all folded),
// `å spøke` → "aspoke".
//
// EVERY VERB DRILL USES AN å-TAKING FRAME. `å <verb>` must appear VERBATIM for
// the card to route, and Norwegian DROPS å after a modal — "vi må forklare" does
// not contain "å forklare". So the drills here run on det er <adj> å …, liker å,
// begynner å, prøver å, håper å and lover å, which are the frames A1 actually
// taught. This is a routing constraint, not a stylistic one.
//
// ⚠ RESERVE LIST — screened against A1's 480, this block's 240, both sibling A2
// branches (by headword), and the fold screen. Every collision resolves against
// this block; swap, don't rebuild.
//   l1 forklare:  å tolke · å utdype · å presisere
//   l2 diskutere: å motsi · å enes · å overtale
//   l3 følelser:  å sukke · å gjespe · å skryte
//   l4 nouns:     et ordtak · en beskjed? NO — block1 u21 · reserves: et innlegg · en tone
//
// SCOPE: examples and drills use A1's 480 plus u41–u47 plus this unit's earlier
// cards. Nothing leans on u21–u40 or on the unauthored u48, and nothing uses
// `som`, `om`, `hele`, `hver`, `ute`, `ved`, `der`, `for`, `mot`, `gjennom`,
// `mens`, `tid`, `mat`, `folk` or `hundre` — all confirmed untaught.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT49 = {
  id: "no-u49",
  lang: "no",
  title: "Å forklare og å fortelle",
  order: 49,
  stage: "a2",
  lessons: [
    // Lesson 1: making yourself understood.
    {
      id: "no-u49l1",
      unit: 49,
      lesson: 1,
      title: "Å gjøre seg forstått",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Make yourself understood — explain, describe, mention, repeat, translate, spell.",
      items: [
        { id: "no-u49l1-aforklare", type: "vocab", front: "å forklare", reading: "aforklare", meaning: "to explain", example: { jp: "Læreren forklarer en oppgave fordi elevene ikke forstår den.", en: "The teacher explains a task because the pupils do not understand it." }, drill: { jp: "Det er lett å forklare en oppgave", en: "It is easy to explain a task" }, accept: ["explain", "to clarify", "clarify", "to account for"], hint: "for-KLAH-re, present forklarer. Built on klar from unit 43 — to make a thing clear. Ei forklaring is an explanation." },
        { id: "no-u49l1-abeskrive", type: "vocab", front: "å beskrive", reading: "abeskrive", meaning: "to describe", example: { jp: "Han beskriver en kamp, og vi liker å høre det.", en: "He describes a match, and we like to hear it." }, drill: { jp: "Det er lett å beskrive en farge", en: "It is easy to describe a colour" }, accept: ["describe", "to depict", "depict", "to portray"], hint: "be-SKREE-ve, present beskriver. Be- plus skrive, to write — a prefix that turns a verb into something you do TO an object. Ei beskrivelse is a description." },
        { id: "no-u49l1-anevne", type: "vocab", front: "å nevne", reading: "anevne", meaning: "to mention", example: { jp: "Hun nevner et navn, men hun sier ikke mer enn det.", en: "She mentions a name, but she does not say more than that." }, drill: { jp: "Det er lett å nevne et navn", en: "It is easy to mention a name" }, accept: ["mention", "to name", "name", "to bring up"], hint: "NEV-ne, present nevner. Built on et navn from A1 unit 3 — to put a name to something. Å nevne is a light touch; å fortelle is the whole story." },
        { id: "no-u49l1-agjenta", type: "vocab", front: "å gjenta", reading: "agjenta", meaning: "to repeat", example: { jp: "Kan du gjenta en setning hvis jeg ikke hører den?", en: "Can you repeat a sentence if I do not hear it?" }, drill: { jp: "Det er viktig å gjenta et ord", en: "It is important to repeat a word" }, accept: ["repeat", "to say again", "say again", "to reiterate"], hint: "YEN-ta — gj is a silent g plus a y sound, as in å gjøre. Present gjentar. Gjen- is a prefix meaning again, the same one in gjensyn, a reunion." },
        { id: "no-u49l1-aoversette", type: "vocab", front: "å oversette", reading: "aoversette", meaning: "to translate", example: { jp: "Vi oversetter et ord til norsk når vi ikke kjenner det.", en: "We translate a word into Norwegian when we do not know it." }, drill: { jp: "Det er tungt å oversette ei bok", en: "It is hard to translate a book" }, accept: ["translate", "to render", "render"], hint: "OH-ver-set-te, present oversetter. Over plus sette, to set across — the same picture Latin drew when it built \"translate\". En oversettelse is a translation." },
        { id: "no-u49l1-astave", type: "vocab", front: "å stave", reading: "astave", meaning: "to spell", example: { jp: "Kan du stave et navn, fordi jeg vil skrive det?", en: "Can you spell a name, because I want to write it?" }, drill: { jp: "Det er lett å stave et kort ord", en: "It is easy to spell a short word" }, accept: ["spell", "to spell out", "spell out"], hint: "STAH-ve, present staver. Norwegian spelling is close enough to the sound that this verb comes up far less than it does in English — which is a mercy the ø, æ and å partly repay." },
      ],
    },
    // Lesson 2: disagreeing.
    {
      id: "no-u49l2",
      unit: 49,
      lesson: 2,
      title: "Å være uenig",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Disagree — discuss, claim, interrupt, quarrel, refuse, admit.",
      items: [
        { id: "no-u49l2-adiskutere", type: "vocab", front: "å diskutere", reading: "adiskutere", meaning: "to discuss", example: { jp: "De diskuterer en film, men de liker den ikke.", en: "They discuss a film, but they do not like it." }, drill: { jp: "Det er hyggelig å diskutere et bilde", en: "It is nice to discuss a picture" }, accept: ["discuss", "to debate", "debate", "to argue about"], hint: "dis-kue-TEH-re, stress late. Present diskuterer. Neutral — a diskusjon is not a fight, where å krangle two cards down certainly is." },
        { id: "no-u49l2-apasta", type: "vocab", front: "å påstå", reading: "apasta", meaning: "to claim", example: { jp: "Han påstår at han vinner, men ingen tror på ham.", en: "He claims that he is winning, but nobody believes him." }, drill: { jp: "Det er lett å påstå noe", en: "It is easy to claim something" }, accept: ["claim", "to assert", "assert", "to allege", "maintain"], hint: "PAW-staw, present påstår — three å's in the infinitive, all folded to a in the reading: apasta. På plus stå, to stand on: to stand on a statement. En påstand is a claim, and it carries a hint of doubt." },
        { id: "no-u49l2-aavbryte", type: "vocab", front: "å avbryte", reading: "aavbryte", meaning: "to interrupt", example: { jp: "Barnet avbryter en samtale fordi det vil si noe.", en: "The child interrupts a conversation because it wants to say something." }, drill: { jp: "Det er ikke fint å avbryte noen", en: "It is not nice to interrupt somebody" }, accept: ["interrupt", "to break off", "break off", "to cut short"], hint: "AHV-bree-te, present avbryter. Av plus bryte, to break — to break something off. Norwegians interrupt each other markedly less than southern Europeans do, and notice when you do it." },
        { id: "no-u49l2-akrangle", type: "vocab", front: "å krangle", reading: "akrangle", meaning: "to quarrel", example: { jp: "De krangler ofte, men de er glade.", en: "They quarrel often, but they are happy." }, drill: { jp: "Det er tungt å krangle med noen", en: "It is hard to quarrel with somebody" }, accept: ["quarrel", "to argue", "argue", "to squabble", "to row"], hint: "KRANG-le, present krangler. A real argument with raised voices, unlike å diskutere. En krangel is the row itself." },
        { id: "no-u49l2-anekte", type: "vocab", front: "å nekte", reading: "anekte", meaning: "to refuse", example: { jp: "Hun nekter å gå hjem fordi hun vil bli.", en: "She refuses to go home because she wants to stay." }, drill: { jp: "Det er lett å nekte en gjest", en: "It is easy to refuse a guest" }, accept: ["refuse", "to deny", "deny", "to decline"], hint: "NEK-te, present nekter. Two jobs: to refuse to do a thing (nekte å gå) and to deny an accusation (nekte for noe). Note nekter å gå — å survives after nekte, which is why this verb behaves in a drill and a modal does not." },
        { id: "no-u49l2-ainnromme", type: "vocab", front: "å innrømme", reading: "ainnromme", meaning: "to admit", example: { jp: "Han innrømmer at han er sint, og alle blir glade.", en: "He admits that he is angry, and everyone gets happy." }, drill: { jp: "Det er tungt å innrømme noe", en: "It is hard to admit something" }, accept: ["admit", "to concede", "concede", "to acknowledge"], hint: "INN-rum-me, present innrømmer, hand-folded to ainnromme. Inn plus rømme, to give room — to make room for a fact you would rather not. Å ta feil is to be wrong, and it is the phrase this verb usually follows." },
      ],
    },
    // Lesson 3: how a thing is said.
    {
      id: "no-u49l3",
      unit: 49,
      lesson: 3,
      title: "Måten noe blir sagt på",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how something was said — complain, praise, shout, whisper, joke, lie.",
      items: [
        { id: "no-u49l3-aklage", type: "vocab", front: "å klage", reading: "aklage", meaning: "to complain", example: { jp: "Gjestene klager fordi suppa er kald, og kokken blir sint.", en: "The guests complain because the soup is cold, and the cook gets angry." }, drill: { jp: "Det er lett å klage på været", en: "It is easy to complain about the weather" }, accept: ["complain", "to grumble", "grumble", "to make a complaint"], hint: "KLAH-ge, present klager. Å klage PÅ noe. Ei klage is a complaint, including a formal one — a Norwegian will klage to a shop in writing without embarrassment." },
        { id: "no-u49l3-arose", type: "vocab", front: "å rose", reading: "arose", meaning: "to praise", example: { jp: "Læreren roser en elev fordi oppgaven er god.", en: "The teacher praises a pupil because the task is good." }, drill: { jp: "Det er hyggelig å rose noen", en: "It is nice to praise somebody" }, accept: ["praise", "to compliment", "compliment", "to commend"], hint: "ROO-se, present roser. Nothing to do with ei rose, a flower — a different word that happens to look the same. Norwegians praise sparingly, which makes it land harder when they do." },
        { id: "no-u49l3-arope", type: "vocab", front: "å rope", reading: "arope", meaning: "to shout", example: { jp: "Et publikum roper når et lag lager et mål.", en: "An audience shouts when a team scores a goal." }, drill: { jp: "Det er ikke fint å rope", en: "It is not nice to shout" }, accept: ["shout", "to call out", "call out", "to yell"], hint: "ROO-pe, present roper. To call out, not necessarily in anger — å rope på noen is to call somebody over. Å skrike is the one with fear or pain in it." },
        { id: "no-u49l3-ahviske", type: "vocab", front: "å hviske", reading: "ahviske", meaning: "to whisper", example: { jp: "Barna hvisker i en samtale fordi de ikke vil at vi hører.", en: "The children whisper in a conversation because they do not want us to hear." }, drill: { jp: "Det er lett å hviske et navn", en: "It is easy to whisper a name" }, accept: ["whisper", "to murmur", "murmur"], hint: "VIS-ke, present hvisker — hv- is a silent h, the same trick as in hva and hvor from A1 unit 1. The exact opposite of å rope." },
        { id: "no-u49l3-aspoke", type: "vocab", front: "å spøke", reading: "aspoke", meaning: "to joke", example: { jp: "Han spøker ofte, men nå mener han det.", en: "He jokes often, but now he means it." }, drill: { jp: "Det er hyggelig å spøke med noen", en: "It is nice to joke with somebody" }, accept: ["joke", "to jest", "jest", "to kid"], hint: "SPUR-ke, present spøker, hand-folded to aspoke. Ei spøk is a joke. The same verb also means to haunt — det spøker i huset, the house is haunted — which is a good deal of range for one word." },
        { id: "no-u49l3-alyve", type: "vocab", front: "å lyve", reading: "alyve", meaning: "to lie", example: { jp: "Hun lyver aldri, og derfor tror alle på henne.", en: "She never lies, and that is why everyone believes her." }, drill: { jp: "Det er ikke fint å lyve", en: "It is not nice to lie" }, accept: ["lie", "to tell a lie", "tell a lie", "to fib"], hint: "LUE-ve, present lyver. To tell an untruth — nothing to do with å ligge, to lie down, which A1 unit 13 taught. English confuses the two; Norwegian never has." },
      ],
    },
    // Lesson 4: the nouns of talk. Every one masculine or neuter — see header.
    {
      id: "no-u49l4",
      unit: 49,
      lesson: 4,
      title: "Ord om ord",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of talk — samtale, uttrykk, setning, tale, rykte, lyd.",
      items: [
        { id: "no-u49l4-ensamtale", type: "vocab", front: "en samtale", reading: "ensamtale", meaning: "conversation", example: { jp: "En samtale med en nabo er hyggelig, men den blir ofte kort.", en: "A conversation with a neighbour is nice, but it often gets short." }, drill: { jp: "Vi har en samtale i kveld", en: "We have a conversation tonight" }, accept: ["a talk", "a chat", "a dialogue"], hint: "SAM-tah-le. Masculine: definite samtalen, plural samtaler. Sam- means together, so a talking-together. En samtale is longer and more deliberate than a chat." },
        { id: "no-u49l4-etuttrykk", type: "vocab", front: "et uttrykk", reading: "etuttrykk", meaning: "expression", example: { jp: "Et uttrykk er tungt å oversette, og derfor lærer vi det godt.", en: "An expression is hard to translate, and that is why we learn it well." }, drill: { jp: "Vi lærer et uttrykk i dag", en: "We learn an expression today" }, accept: ["a phrase", "a term", "a look"], hint: "UET-trykk. Neuter: definite uttrykket, plural uttrykk, unchanged. Ut plus trykk, a pressing-out. Both a set phrase and the expression on a face." },
        { id: "no-u49l4-ensetning", type: "vocab", front: "en setning", reading: "ensetning", meaning: "sentence", example: { jp: "En setning på norsk er ikke lang, og vi skriver den godt.", en: "A sentence in Norwegian is not long, and we write it well." }, drill: { jp: "Vi skriver en setning i ei bok", en: "We write a sentence in a book" }, accept: ["a clause", "a phrase"], hint: "SETT-ning. Masculine: definite setningen, plural setninger. Built on å sette — a setting-together of words. The V2 rule its own example describes is the one unit1.js §4 has been modelling since A1." },
        { id: "no-u49l4-entale", type: "vocab", front: "en tale", reading: "entale", meaning: "speech", example: { jp: "En tale er kort hvis den er god, og lang hvis den ikke er det.", en: "A speech is short if it is good, and long if it is not." }, drill: { jp: "Sjefen har en tale i kveld", en: "The boss has a speech tonight" }, accept: ["an address", "a talk"], hint: "TAH-le. Masculine: definite talen, plural taler. Å holde en tale is to give a speech — Norwegian HOLDS one. The seventeenth of May is built out of them." },
        { id: "no-u49l4-etrykte", type: "vocab", front: "et rykte", reading: "etrykte", meaning: "rumour", example: { jp: "Et rykte går i ei bygd, og ofte er det ikke godt.", en: "A rumour goes round a village, and often it is not good." }, drill: { jp: "Et rykte går i byen", en: "A rumour is going round the town" }, accept: ["a rumor", "gossip", "a reputation"], hint: "RUEK-te. Neuter: definite ryktet, plural rykter. Both a rumour and a reputation — et godt rykte is a good name. Note et rykte GÅR: a rumour walks in Norwegian." },
        { id: "no-u49l4-enlyd", type: "vocab", front: "en lyd", reading: "enlyd", meaning: "sound", example: { jp: "En lyd kommer fra et rom, men vi vet ikke hva det er.", en: "A sound comes from a room, but we do not know what it is." }, drill: { jp: "Det kommer en lyd fra kjøkkenet", en: "A sound comes from the kitchen" }, accept: ["a noise", "a tone"], hint: "LUED — the d is silent. Masculine: definite lyden, plural lyder. Any sound at all, and also a speech sound: A1 unit 1 was about the lyder Norwegian has and English does not." },
      ],
    },
  ],
};
