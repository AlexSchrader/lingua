// NO Unit 70 — Grammatikk 7: passiv og indirekte tale — B1 GRAMMAR
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Grammar 7 — passive, causative, indirect". Retitled in
// Norwegian per CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// ═════════════════════════════════════════════════════════════════════════════
// THE S-FORMS AND THE PARTICIPLES ARE CARDS ON PURPOSE. READ THIS BEFORE
// DEDUPING THEM.
// ═════════════════════════════════════════════════════════════════════════════
// l1's `selges · brukes · kalles · åpnes · kreves · finnes` and l2's `betalt ·
// glemt · sendt · valgt · ødelagt · kjent` are inflected forms of verbs the
// corpus already teaches (å bruke u17, å kreve u40, å finne u7, å betale u7,
// å glemme u17, å sende u20, å velge u15, å ødelegge u52, å kjenne u1).
// RUNBOOK §4 warns against exactly this shape — "compare LEXEMES, not strings" —
// and it is right to, because an ACCIDENTAL infinitive/inflection pair is one
// word with two mastery tracks. These are not accidental, and the precedent is
// this corpus's own: **no/unit14.js makes `snakket`, `var`, `gikk`, `ble` cards
// for the past tense, and no/unit39.js makes `har spist`, `har skrevet`,
// `har fått` cards for the perfect** — for the same reason. There is no
// conjugation card type for Norwegian (unit12.js), so the ONLY way a grammar
// unit can teach the passive is to make the passive form the card.
// ⚠ AND THE JUSTIFICATION IS NARROWER THAN AN EARLIER DRAFT OF THIS HEADER SAID.
// It claimed the -s passive "is not derivable", which the card below contradicts
// in its own first line ("take the infinitive and add -s"). The honest version:
// SOME of these are drilled for the PATTERN rather than because they could not
// be derived — selges, brukes, kalles, åpnes and kreves are regular, and the
// learner needs the form in the mouth, not a rule on paper. The genuinely
// underivable ones are the strong participles: valgt and ødelagt cannot be got
// from å velge and å ødelegge by any rule the learner has.
// MERGE SEAT / BLOCK 1: do not delete these twelve as duplicate lexemes. If they
// go, the band has no passive at all. The ids, explicitly:
//   no-u70l1-selges · no-u70l1-brukes · no-u70l1-kalles · no-u70l1-apnes ·
//   no-u70l1-kreves · no-u70l1-finnes · no-u70l2-betalt · no-u70l2-glemt ·
//   no-u70l2-sendt · no-u70l2-valgt · no-u70l2-odelagt · no-u70l2-kjent
// ⚠ `npm run check:lexemes` will report these clean and that is NOT evidence —
// its variants() is a kana engine and returns "free" for any Norwegian input
// (recorded at BUILD-CHECKLIST.md and in no/unit14.js's header). Run it; do not
// read a clean result as confirmation.
// ⚠ THREE OF THESE PASSIVES HAVE NO INFINITIVE CARD ANYWHERE IN THE CORPUS —
// ✅ RESOLVED ON MERGE DAY 2026-09-17. Until today `å selge`, `å kalle` and `å åpne`
// were fronts in ZERO units, so the learner got a mastery track on the PASSIVE of
// three verbs they had never been taught to produce, while unit1.js §2 makes the
// infinitive the citation form. They are now taught, BEFORE this unit:
//   å selge  → no-u66l4-aselge  (Penger og økonomi)
//   å åpne   → no-u56l1-aapne   (Arbeid og framgangsmåte)
//   å kalle  → no-u58l4-akalle  (Abstrakte begreper)
//
// The merge seat first REFUSED this, arguing that an infinitive beside its s-passive
// is the very duplicate the first half of this header defends against. That argument
// was self-defeating and the Truth Layer said so: this unit ALREADY ships nine such
// pairs on purpose (å bruke u17/brukes, å finne u7/finnes, å kreve u40/kreves,
// å betale u7/betalt, å glemme u17/glemt, å sende u20/sendt, å velge u15/valgt,
// å ødelegge u52/ødelagt, å kjenne u1/kjent). Either those nine are legitimate grammar
// cards — in which case three more infinitives create nothing new — or they are
// duplicates, in which case shipping nine while refusing three is incoherent. The
// nine are legitimate, for the reason above: Norwegian has no conjugation card type,
// so the only way to teach the passive is to make the passive form the card. Adding
// the three infinitives is therefore the same shape, already sanctioned nine times.
//
// ⚠ DO NOT re-add an UNTAUGHT marker for these three here. All three ARE taught
// now, so GUARD 2 (tests/unit/corpus-guards.test.mjs) would correctly call it a lie.
//
// l3 is the causative (å la, and the til å / i å family), l4 is reported speech.
// Those are ordinary new verbs, with no inflection question attached.
//
// GENDER: no new nouns in this unit at all — it is four lessons of verbs,
// participles and one preposition.
//
// SCOPE: frozen base u1–u50 plus u63–u69 plus this unit's earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT70 = {
  id: "no-u70",
  lang: "no",
  title: "Grammatikk 7: passiv og indirekte tale",
  order: 70,
  stage: "b1",
  lessons: [
    // Lesson 1: the -s passive — the form on signs, in adverts and in rules.
    {
      id: "no-u70l1",
      unit: 70,
      lesson: 1,
      title: "S-passiv",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read and write the -s passive you meet on signs, in adverts and in rules.",
      items: [
        { id: "no-u70l1-selges", type: "vocab", front: "selges", reading: "selges", meaning: "is sold", example: { jp: "Huset selges til høyeste pris.", en: "The house is sold at the highest price." }, accept: ["is for sale", "are sold", "to be sold"], drill: { jp: "Huset selges i mai", en: "The house is sold in May" }, hint: "⚠ THE RULE OF THIS LESSON: take the infinitive and add -s. selge → selges. No hjelpeverb and no agent — this is the sign in the window, the headline in the advert. The verb å selge is not taught on its own anywhere; you meet it here first." },
        { id: "no-u70l1-brukes", type: "vocab", front: "brukes", reading: "brukes", meaning: "is used", example: { jp: "Dette ordet brukes ikke lenger.", en: "This word is no longer used." }, accept: ["are used", "is in use", "to be used"], drill: { jp: "Dette ordet brukes ikke lenger", en: "This word is no longer used" }, hint: "å bruke (u17) + -s. The -s passive is most at home in the present tense and in general statements — det brukes mye plast." },
        { id: "no-u70l1-kalles", type: "vocab", front: "kalles", reading: "kalles", meaning: "is called by others", example: { jp: "Denne fisken kalles noe annet i Bergen.", en: "This fish is called something else in Bergen." }, accept: ["is called", "are called", "is known as"], drill: { jp: "Denne fisken kalles noe annet her", en: "This fish is called something else here" }, hint: "From å kalle, to call. Compare heter (u3), which a PERSON uses about themselves: jeg heter Erling, but byen kalles Bjørgvin." },
        { id: "no-u70l1-apnes", type: "vocab", front: "åpnes", reading: "apnes", meaning: "is opened", example: { jp: "Butikken åpnes klokka ni hver dag.", en: "The shop is opened at nine every day." }, accept: ["opens", "are opened", "to be opened"], drill: { jp: "Butikken åpnes klokka ni", en: "The shop is opened at nine" }, hint: "From åpen (u7) → å åpne → åpnes. On a Norwegian door you will read åpnes and stenges rather than a full sentence." },
        { id: "no-u70l1-kreves", type: "vocab", front: "kreves", reading: "kreves", meaning: "is required", example: { jp: "Det kreves et pass på flyplassen.", en: "A passport is required at the airport." }, accept: ["are required", "is needed", "to be required"], drill: { jp: "Det kreves et pass her", en: "A passport is required here" }, hint: "å kreve (u40) + -s. Almost always with det in front: det kreves … — the standard way a Norwegian rule is written." },
        { id: "no-u70l1-finnes", type: "vocab", front: "finnes", reading: "finnes", meaning: "exists", example: { jp: "Det finnes mange gode kafeer i Oslo.", en: "There are many good cafés in Oslo." }, accept: ["there is", "there are", "to exist"], drill: { jp: "Det finnes mange kafeer i Oslo", en: "There are many cafés in Oslo" }, hint: "The one -s verb here that has stopped being a passive: det finnes = there is, there exists. Follows å finne (u7): finnes, fantes, har funnes." },
      ],
    },
    // Lesson 2: the participle, and the two passives it builds.
    {
      id: "no-u70l2",
      unit: 70,
      lesson: 2,
      title: "Perfektum partisipp",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Build the other passive — er/blir plus a participle — and tell the two apart.",
      items: [
        { id: "no-u70l2-betalt", type: "vocab", front: "betalt", reading: "betalt", meaning: "paid", example: { jp: "Regninga er betalt.", en: "The bill is paid." }, accept: ["been paid", "settled"], drill: { jp: "Regninga er betalt i dag", en: "The bill is paid today" }, hint: "⚠ THE RULE OF THIS LESSON: the participle of å betale (u7). With ER it describes a STATE — regninga er betalt, it is done. With HAR it makes the perfect — jeg har betalt (u39)." },
        { id: "no-u70l2-glemt", type: "vocab", front: "glemt", reading: "glemt", meaning: "forgotten", example: { jp: "Navnet hennes er glemt av alle.", en: "Her name is forgotten by everyone." }, accept: ["been forgotten"], drill: { jp: "Navnet er glemt av alle", en: "The name is forgotten by everyone" }, hint: "From å glemme (u17). av marks the agent, where English uses \"by\": glemt av alle." },
        { id: "no-u70l2-sendt", type: "vocab", front: "sendt", reading: "sendt", meaning: "sent", example: { jp: "Brevet ble sendt i går.", en: "The letter was sent yesterday." }, accept: ["been sent", "dispatched"], drill: { jp: "Brevet ble sendt i går", en: "The letter was sent yesterday" }, hint: "⚠ THE OTHER HALF OF THE RULE: BLI + participle describes the EVENT, er + participle describes the state. Brevet ble sendt (it happened at a moment) against brevet er sendt (it is out of the house)." },
        { id: "no-u70l2-valgt", type: "vocab", front: "valgt", reading: "valgt", meaning: "chosen", example: { jp: "Hun ble valgt til sjef.", en: "She was chosen as boss." }, accept: ["been chosen", "elected", "selected"], drill: { jp: "Hun ble valgt til sjef", en: "She was chosen as boss" }, hint: "From å velge (u15) — an irregular one: velger, valgte, har valgt. In politics it is the word for elected." },
        { id: "no-u70l2-odelagt", type: "vocab", front: "ødelagt", reading: "odelagt", meaning: "destroyed", example: { jp: "Bilen ble ødelagt i ulykken.", en: "The car was destroyed in the accident." }, accept: ["been destroyed", "broken", "ruined"], drill: { jp: "Bilen ble ødelagt i ulykken", en: "The car was destroyed in the accident" }, hint: "From å ødelegge (u52): ødelegger, ødela, har ødelagt. It is an adjective too — en ødelagt telefon." },
        { id: "no-u70l2-kjent", type: "vocab", front: "kjent", reading: "kjent", meaning: "known", example: { jp: "Han er kjent i Norge og i Europa.", en: "He is known in Norway and in Europe." }, accept: ["famous", "well known", "familiar"], drill: { jp: "Han er kjent i Norge", en: "He is known in Norway" }, hint: "From å kjenne (u1), and a full adjective in its own right: en kjent skuespiller (u64). Kjent folk is how Norwegians say celebrities." },
      ],
    },
    // Lesson 3: making someone else do it. The til å / i å family sits together
    // here on purpose — four of these six verbs take it.
    {
      id: "no-u70l3",
      unit: 70,
      lesson: 3,
      title: "Å la og å få gjort",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that you let, made, stopped or persuaded someone into doing something.",
      items: [
        { id: "no-u70l3-la", type: "vocab", front: "å la", reading: "ala", meaning: "to let", example: { jp: "La meg hjelpe deg med det.", en: "Let me help you with that." }, accept: ["let", "to allow", "to leave"], drill: { jp: "Det er lett å la barna velge", en: "It is easy to let the children choose" }, hint: "lar, lot, har latt. ⚠ The verb after it takes NO å: la meg gå, never la meg å gå. Same rule as after the modals (unit1 §5)." },
        { id: "no-u70l3-tvinge", type: "vocab", front: "å tvinge", reading: "atvinge", meaning: "to force", example: { jp: "Ingen kan tvinge deg til å skrive under.", en: "Nobody can force you to sign." }, accept: ["force", "to compel", "to make someone"], drill: { jp: "Ingen har rett til å tvinge deg", en: "Nobody has the right to force you" }, hint: "tvinger, tvang, har tvunget. Takes til å: tvinge noen til å gjøre noe — and here the å DOES come back, because til å is one of the frames that keeps it." },
        { id: "no-u70l3-overtale", type: "vocab", front: "å overtale", reading: "aovertale", meaning: "to persuade", example: { jp: "Hun overtalte meg til å bli med.", en: "She persuaded me to come along." }, accept: ["persuade", "to talk someone into"], drill: { jp: "Det er lett å overtale ham", en: "It is easy to persuade him" }, hint: "over + å tale (en tale, u49). overtaler, overtalte. til å again." },
        { id: "no-u70l3-oppfordre", type: "vocab", front: "å oppfordre", reading: "aoppfordre", meaning: "to urge", example: { jp: "Legen oppfordret ham til å trene mer.", en: "The doctor urged him to exercise more." }, accept: ["urge", "to encourage", "to call on"], drill: { jp: "Vi pleier å oppfordre alle til å komme", en: "We usually urge everyone to come" }, hint: "opp + fordre. oppfordrer, oppfordret — and til å, like tvinge and overtale. The whole family takes a preposition; only å la goes bare." },
        { id: "no-u70l3-apalegge", type: "vocab", front: "å pålegge", reading: "apalegge", meaning: "to impose (require of)", example: { jp: "Sjefen kan ikke pålegge deg å jobbe hver helg.", en: "The boss cannot require you to work every weekend." }, accept: ["to order", "to require", "to enjoin"], drill: { jp: "Det er ikke lov å pålegge deg det", en: "It is not allowed to require that of you" }, hint: "på + å legge → pålegger, påla. Sterkere enn å oppfordre og mer formelt enn å tvinge — det er ordet en sjef eller en lov bruker. Alltid å pålegge NOEN å gjøre noe."},
      ],
    },
    // Lesson 4: reporting what somebody else said.
    {
      id: "no-u70l4",
      unit: 70,
      lesson: 4,
      title: "Indirekte tale",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report what somebody else said, and mark how much you stand behind it.",
      items: [
        { id: "no-u70l4-antyde", type: "vocab", front: "å antyde", reading: "aantyde", meaning: "to hint", example: { jp: "Hun antydet at prisen kunne bli lavere.", en: "She hinted that the price could come down." }, accept: ["hint", "to suggest", "to imply"], drill: { jp: "Han prøvde å antyde noe mer", en: "He tried to hint at something more" }, hint: "an + å tyde, to read a sign. antyder, antydet. The polite way to raise something without saying it outright." },
        { id: "no-u70l4-gjengi", type: "vocab", front: "å gjengi", reading: "agjengi", meaning: "to recount", example: { jp: "Avisa gjenga samtalen ord for ord.", en: "The paper reproduced the conversation word for word." }, accept: ["reproduce", "to render", "to report", "to quote"], drill: { jp: "Det er lett å gjengi en samtale", en: "It is easy to recount a conversation" }, hint: "gjen- (again) + å gi (u1) — to give back what was said. gjengir, gjenga, har gjengitt, following gi exactly." },
        { id: "no-u70l4-tilfoye", type: "vocab", front: "å tilføye", reading: "atilfoye", meaning: "to add", example: { jp: "Han tilføyde at han ikke var sikker.", en: "He added that he was not sure." }, accept: ["add", "to append", "to add in speech"], drill: { jp: "Han pleier å tilføye noe til slutt", en: "He usually adds something at the end" }, hint: "til + å føye. tilføyer, tilføyde. In reported speech this is the standard \"he added\"; for adding numbers Norwegian uses å legge til." },
        { id: "no-u70l4-ifolge", type: "vocab", front: "ifølge", reading: "ifolge", meaning: "according to", example: { jp: "Ifølge avisa blir det dyrere i år.", en: "According to the paper it will be more expensive this year." }, accept: ["as stated by", "per"], drill: { jp: "Ifølge avisa blir det dyrere", en: "According to the paper it gets more expensive" }, hint: "i + følge (å følge, u45). A preposition, so a noun follows it directly: ifølge Erling, ifølge avisa. Fronting it triggers V2 — Ifølge avisa BLIR det …" },
        { id: "no-u70l4-abemerke", type: "vocab", front: "å bemerke", reading: "abemerke", meaning: "to remark", example: { jp: "Han bemerket at rapporten kom altfor seint.", en: "He remarked that the report came far too late." }, accept: ["to observe", "to comment", "to note"], drill: { jp: "Hun pleier å bemerke slikt", en: "She usually remarks on such things" }, hint: "be- + å merke → bemerker, bemerket. Brukes når du gjengir hva noen sa — litt mer formelt enn å si, og oftest om noe kort."},
      ],
    },
  ],
};
