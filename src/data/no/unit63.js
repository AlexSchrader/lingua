// NO Unit 63 — Erfaring og minne ("Experience and memory") — B1
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF BLOCK 2 (u63–u75). Slot scaffolded "Experience and memory";
// retitled per CLAUDE.md → "No front language". Conventions are unit1.js §1–§9
// and bind every card here. Bokmål, not Nynorsk.
//
// WHAT THIS UNIT IS FOR. A1/A2 gave the learner the past tense (u14, u38, u39)
// and the words for feelings (u17, u22), but nothing for talking about a LIFE:
// the childhood you had, the moment things turned, the person you looked up to,
// what the whole thing taught you. That is the first thing a B1 speaker is asked
// for — "fortell litt om deg selv" past the name and the job — so it opens the
// band.
//
// ⚠⚠ SCOPE — AND USE THE CHECKER, DO NOT HAND-AUDIT LIKE I FIRST DID.
// `node scripts/scope-strict.mjs 63 75` takes three seconds, is Norwegian-
// specific, and takes a unit range as arguments. It exists BECAUSE
// lint:curriculum's isInflection heuristic exempts any token sharing three
// leading characters with a taught stem — which is how `som`, `for` and `der`
// passed a clean lint run, and how this block's first pass used `mellom`,
// `gjennom`, `hele`, `begge` and `få` with nothing reported. I hand-audited
// instead, asserted a 312-card scope guarantee from it, and the checker's FIRST
// run falsified the assertion: `morgenen` (u67l4) and `maskiner` (u75) were
// genuinely out of scope, plus four more the hand pass had waved through.
// Run it before you claim scope. Its residual for u63–u75 is 47 hits, every one
// adjudicated to an inflection of a front taught at or before its unit (32 from
// this block, 13 from the frozen base) or a §6 free cognate (2) — zero genuine
// out-of-scope words. `--selftest` proves the checker still bites.
//
// Examples and drills use the frozen base (u1–u50, per
// src/data/no/TAUGHT-WORDS.md) plus this unit's own earlier cards. Nothing here
// leans on u51–u62 (block 1) or u76–u87 (block 3) — they were unauthored stubs
// while this was written and their words are not mine to use or to teach.
// AVOIDED THROUGHOUT THE BLOCK because they are NOT in the base, though an
// English speaker expects them: folk, en jobb, vanskelig, hele, ute, inne,
// alene, hjemme, foreldre, ei jente, en gutt, fremdeles, en morgen (bare),
// en kveld (bare). `der` is not in the base either — it is taught in u69 and
// used freely from there on.
//
// ⚠ Å-VERBS AND THE DRILL. unit1.js §2 headwords the infinitive, and a drill
// must contain its own front verbatim — so every å-verb drill in this block uses
// an å-taking frame (det er lett å …, jeg liker å …, han pleier å …, vi prøver
// å …). All four frame verbs are in the base: å like u3, å prøve u15, å pleie
// u21, lett u10. unit1.js §5's frame table is missing å prøve and å pleie and
// says they are "a front NOWHERE in the corpus" — that is stale, they are u15
// and u21. Flagged to block 1 rather than edited here; unit1.js is block 1's
// file and is live.
// ⚠ NEVER a modal frame: Norwegian drops the å after kan/vil/skal/må, so the
// front would not be in the sentence at all (unit1.js §5).
//
// GENDER, the rule that keeps tripping crews (unit1.js §1):
//   -else  MASCULINE, no feminine form → en hendelse. NEVER ei.
//   -ing/-ning  feminine → påvirkning, definite påvirkninga.
//   -dom   masculine → en barndom, en lærdom.
// ⚠ THIS UNIT HAS NO FEMININE NOUN TO MARK, so there is no en-/ei- recognition
// note to carry. `påvirkning` is feminine but is a MASS noun and so is taught
// bare (§1b) — it was `ei påvirkning` until the §1b sweep below.
//
// ø IS FOLDED BY HAND in `reading`, ø→o (unit1.js §3): et høydepunkt →
// "ethoydepunkt". æ likewise → ae: en milepæl → "enmilepael", en lærdom →
// "enlaerdom".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT63 = {
  id: "no-u63",
  lang: "no",
  title: "Erfaring og minne",
  order: 63,
  stage: "b1",
  lessons: [
    // Lesson 1: where a life story starts — the childhood and the memories of it.
    {
      id: "no-u63l1",
      unit: 63,
      lesson: 1,
      title: "Minner fra barndommen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about your own childhood and the memories you still carry from it.",
      items: [
        { id: "no-u63l1-minne", type: "vocab", front: "et minne", reading: "etminne", meaning: "a memory", example: { jp: "Jeg har et godt minne fra den dagen i Bergen.", en: "I have a good memory from that day in Bergen." }, accept: ["memory"], drill: { jp: "Dette er et minne fra Oslo", en: "This is a memory from Oslo" }, hint: "Neuter: minnet, flere minner. Beware the adjective: et godt minne, not et god minne." },
        { id: "no-u63l1-barndom", type: "vocab", front: "en barndom", reading: "enbarndom", meaning: "a childhood", example: { jp: "Erling hadde en fin barndom i en liten by.", en: "Erling had a nice childhood in a small town." }, accept: ["childhood"], drill: { jp: "Han hadde en barndom i Norge", en: "He had a childhood in Norway" }, hint: "barn + -dom. The suffix -dom builds an abstract noun and is always masculine: barndommen, en lærdom, en rikdom." },
        { id: "no-u63l1-oppvekst", type: "vocab", front: "en oppvekst", reading: "enoppvekst", meaning: "an upbringing", example: { jp: "Kari forteller ofte om oppveksten sin i Bergen.", en: "Kari often talks about her upbringing in Bergen." }, accept: ["upbringing", "childhood years"], drill: { jp: "Det var en oppvekst uten problemer", en: "It was an upbringing without problems" }, hint: "Literally \"the growing up\" — from å vokse opp, the next card. Masculine: oppveksten." },
        { id: "no-u63l1-vokseopp", type: "vocab", front: "å vokse opp", reading: "avokseopp", meaning: "to grow up", example: { jp: "Barna vokser opp fort her i byen.", en: "The children grow up fast here in town." }, accept: ["grow up", "to be raised"], drill: { jp: "Det er fint å vokse opp her", en: "It is nice to grow up here" }, hint: "å vokse (u34) + opp (u13). Present vokser opp, past vokste opp. The particle never moves: vokser opp, ikke vokser ikke opp." },
        { id: "no-u63l1-nostalgisk", type: "vocab", front: "nostalgisk", reading: "nostalgisk", meaning: "nostalgic", example: { jp: "Gamle bilder gjør meg nostalgisk.", en: "Old pictures make me nostalgic." }, accept: ["wistful"], drill: { jp: "Gamle bilder gjør meg nostalgisk", en: "Old pictures make me nostalgic" }, hint: "Adjectives ending in -isk take NO -t in the neuter: et nostalgisk bilde, not et nostalgiskt." },
        { id: "no-u63l1-mimre", type: "vocab", front: "å mimre", reading: "amimre", meaning: "to reminisce", example: { jp: "Erling mimrer om gamle dager når han er i Oslo.", en: "Erling reminisces about the old days when he is in Oslo." }, accept: ["reminisce", "to look back fondly"], drill: { jp: "Vi liker å mimre om gamle dager", en: "We like to reminisce about the old days" }, hint: "mimrer, mimret. Warm and everyday, almost always with om: mimre om gamle dager." },
      ],
    },
    // Lesson 2: the moments a life story is told in — the event, the turn, the peak.
    {
      id: "no-u63l2",
      unit: 63,
      lesson: 2,
      title: "Store øyeblikk",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the big moments in a life story and say why each one mattered.",
      items: [
        { id: "no-u63l2-vendepunkt", type: "vocab", front: "et vendepunkt", reading: "etvendepunkt", meaning: "a turning point", example: { jp: "Det året i Bergen ble et vendepunkt for Kari.", en: "That year in Bergen became a turning point for Kari." }, accept: ["turning point"], drill: { jp: "Det året ble et vendepunkt for henne", en: "That year became a turning point for her" }, hint: "å vende (u45) + punkt — the point where things turn. Neuter: vendepunktet." },
        { id: "no-u63l2-hoydepunkt", type: "vocab", front: "et høydepunkt", reading: "ethoydepunkt", meaning: "a highlight", example: { jp: "Konserten var et høydepunkt på turen.", en: "The concert was a highlight of the trip." }, accept: ["highlight", "high point"], drill: { jp: "Konserten var et høydepunkt på turen", en: "The concert was a highlight of the trip" }, hint: "høyde + punkt, the high point. Neuter: høydepunktet. Note ø in the reading folds to o: ethoydepunkt." },
        { id: "no-u63l2-milepael", type: "vocab", front: "en milepæl", reading: "enmilepael", meaning: "a milestone", example: { jp: "Å bestå eksamen var en milepæl for henne.", en: "Passing the exam was a milestone for her." }, accept: ["milestone"], drill: { jp: "Eksamen var en milepæl for henne", en: "The exam was a milestone for her" }, hint: "ei mil (u47) + en pæl, a post. Masculine: milepælen, flere milepæler. æ folds to ae: enmilepael." },
        { id: "no-u63l2-markere", type: "vocab", front: "å markere", reading: "amarkere", meaning: "to mark", example: { jp: "Vi markerer dagen hvert år med en middag.", en: "We mark the day every year with a dinner." }, accept: ["mark", "to commemorate"], drill: { jp: "Vi pleier å markere dagen hvert år", en: "We usually mark the day every year" }, hint: "markerer, markerte. For occasions rather than pens: markere dagen, markere en avtale." },
        { id: "no-u63l2-feire", type: "vocab", front: "å feire", reading: "afeire", meaning: "to celebrate", example: { jp: "De feirer jul i Norge hvert år.", en: "They celebrate Christmas in Norway every year." }, accept: ["celebrate"], drill: { jp: "Vi liker å feire jul sammen", en: "We like to celebrate Christmas together" }, hint: "feirer, feiret. Norwegians feirer jul and feirer bursdag — the verb does the work English gives to \"have\"." },
      ],
    },
    // Lesson 3: what forms a person — the influence, the model, the lesson taken away.
    {
      id: "no-u63l3",
      unit: 63,
      lesson: 3,
      title: "Det som preger deg",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who shaped you and what an experience taught you.",
      items: [
        { id: "no-u63l3-prege", type: "vocab", front: "å prege", reading: "aprege", meaning: "to shape", example: { jp: "Barndommen preger et helt liv.", en: "Childhood shapes a whole life." }, accept: ["shape", "to mark", "to leave a mark on"], drill: { jp: "Det er lett å prege et barn", en: "It is easy to shape a child" }, hint: "preger, preget. What leaves its stamp on a person — barndommen preger deg. Not the same as å forandre (u40), which changes something." },
        { id: "no-u63l3-forbilde", type: "vocab", front: "et forbilde", reading: "etforbilde", meaning: "a role model", example: { jp: "Erling er et forbilde for mange i byen.", en: "Erling is a role model for many in town." }, accept: ["role model", "example to follow"], drill: { jp: "Erling er et forbilde i byen", en: "Erling is a role model in town" }, hint: "for + bilde (u16) — the picture you hold in front of you. Neuter: forbildet." },
        { id: "no-u63l3-inspirere", type: "vocab", front: "å inspirere", reading: "ainspirere", meaning: "to inspire", example: { jp: "Boka inspirerte mange unge til å skrive.", en: "The book inspired many young people to write." }, accept: ["inspire"], drill: { jp: "Det er lett å inspirere et barn", en: "It is easy to inspire a child" }, hint: "inspirerer, inspirerte. Borrowed verbs nearly all join the -ere class, and that class is completely regular." },
        { id: "no-u63l3-pavirkning", type: "vocab", front: "påvirkning", reading: "pavirkning", meaning: "influence", example: { jp: "Musikk har stor påvirkning på oss alle.", en: "Music has a big influence on all of us." }, accept: ["an influence", "effect", "impact"], drill: { jp: "Musikk har stor påvirkning på oss", en: "Music has a big influence on us" }, hint: "From å påvirke (u40). ⚠ A MASS noun, so no article on the card (unit1 §1b) — the idiom is ha stor påvirkning på noe, never ha ei påvirkning. Feminine, definite påvirkninga." },
        { id: "no-u63l3-laerdom", type: "vocab", front: "en lærdom", reading: "enlaerdom", meaning: "a lesson learned", example: { jp: "Den dårlige erfaringa ga meg en viktig lærdom.", en: "The bad experience gave me an important lesson." }, accept: ["lesson", "moral", "takeaway"], drill: { jp: "Det ble en lærdom for meg", en: "It became a lesson for me" }, hint: "å lære (u1) + -dom. NOT the school lesson — that is ei lekse (u18). Masculine: lærdommen." },
        { id: "no-u63l3-erfaren", type: "vocab", front: "erfaren", reading: "erfaren", meaning: "experienced", example: { jp: "Han er en erfaren sjåfør og kjører rolig.", en: "He is an experienced driver and drives calmly." }, accept: ["seasoned", "practised"], drill: { jp: "Han er en erfaren sjåfør i Oslo", en: "He is an experienced driver in Oslo" }, hint: "The adjective behind ei erfaring (u50). Neuter erfarent, plural and definite erfarne." },
      ],
    },
    // Lesson 4: looking back from now — what you recognise, what you keep, what an
    // older generation did differently.
    {
      id: "no-u63l4",
      unit: 63,
      lesson: 4,
      title: "Å se tilbake",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Look back on how things used to be and say what has been kept and what has changed.",
      items: [
        { id: "no-u63l4-gjenkjenne", type: "vocab", front: "å gjenkjenne", reading: "agjenkjenne", meaning: "to recognize", example: { jp: "Jeg gjenkjente ikke gata etter alle årene.", en: "I did not recognize the street after all those years." }, accept: ["recognize", "recognise", "to know again"], drill: { jp: "Jeg klarte ikke å gjenkjenne byen", en: "I could not recognize the town" }, hint: "gjen- is Norwegian's re-: gjenkjenne, gjenta, gjenvinne. Built on å kjenne (u1). Present gjenkjenner, past gjenkjente." },
        { id: "no-u63l4-dukkeopp", type: "vocab", front: "å dukke opp", reading: "adukkeopp", meaning: "to turn up", example: { jp: "Et gammelt bilde dukket opp i en skuff.", en: "An old photo turned up in a drawer." }, accept: ["turn up", "to appear", "to show up"], drill: { jp: "Han pleier å dukke opp sent", en: "He usually turns up late" }, hint: "dukker opp, dukket opp. For people and things that appear with no warning — never announced, never planned." },
        { id: "no-u63l4-generasjon", type: "vocab", front: "en generasjon", reading: "engenerasjon", meaning: "a generation", example: { jp: "Hver generasjon har sin egen musikk.", en: "Every generation has its own music." }, accept: ["generation"], drill: { jp: "Han er en generasjon eldre enn meg", en: "He is a generation older than me" }, hint: "Masculine: generasjonen. Every -sjon noun is masculine and stressed on the last syllable: generaSJON." },
        { id: "no-u63l4-tradisjon", type: "vocab", front: "en tradisjon", reading: "entradisjon", meaning: "a tradition", example: { jp: "Å feire jul sammen er en gammel tradisjon her.", en: "Celebrating Christmas together is an old tradition here." }, accept: ["tradition", "custom"], drill: { jp: "Dette er en tradisjon i Norge", en: "This is a tradition in Norway" }, hint: "Masculine: tradisjonen. Close to en skikk (u50), but a tradisjon is repeated on purpose and a skikk is simply how things are done." },
        { id: "no-u63l4-ettilbakeblikk", type: "vocab", front: "et tilbakeblikk", reading: "ettilbakeblikk", meaning: "a look back", example: { jp: "Vi tok et tilbakeblikk på året som gikk.", en: "We took a look back at the year that passed." }, accept: ["a retrospect", "a flashback", "retrospective"], drill: { jp: "Vi tok et tilbakeblikk på året", en: "We took a look back at the year" }, hint: "tilbake + et blikk (a look). Om film er et tilbakeblikk et flashback. Bestemt form tilbakeblikket." },
      ],
    },
  ],
};
