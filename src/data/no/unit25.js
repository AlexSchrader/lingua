// NO Unit 25 — Helse og sykdom ("Health and the body") — A2
// REVISITS A1 u11 Kropp og helse, which owns en kropp, et hode, ei hånd, en fot,
// et øye, et øre, et ansikt, en munn, ei nese, hår, en arm, et bein, syk, frisk,
// vond, å gjøre, en lege, feber, ei tann, trøtt, å sove, å hjelpe, å høre, helse.
// A1 names the BODY PARTS and says you are ill. This unit is what happens NEXT —
// the symptom, the appointment, the treatment, getting better. No A1 front back.
//
// Three candidates were screened out before authoring, all by scripts/free.mjs on
// the LEXEME pass rather than the exact one — the class front-uniqueness cannot
// see: `ei hvile` (relative of A1 u17 `å hvile`), `ei prøve` (A1 u15 `å prøve`),
// and `å undersøke` (my own u24 `å søke`). Each would have validated clean while
// being one word taught twice.
//
// GENDER, with the exception carried per the band convention: -ing nouns take
// EITHER in Bokmål so the course marks them `ei` — ei behandling, ei øving, ei
// bedring — because §1 exists so the definite is derivable and -inga is what a
// learner predicts. ⚠️ `retning` and `setning` are the masculine-only exceptions.
// `medisin`, `forkjølelse`, `skade` and `søvn` are masculine, so they take en.
//
// Subordinators are A1's REAL set: at, fordi, hvis, men, eller, når. NOT `som`,
// `for` or `der` — untaught in A1's 480, and lint structurally cannot see that
// (lint.js:226 excuses `som` as an inflection of `sommer`). u29 claims all three.
//   FREE: Erling, Kari, Anna, Jonas, Oslo, Bergen, Norge | telefon, doktor, tablett, allergi, resept, pasient, operasjon | 2000
export const NO_UNIT25 = {
  id: "no-u25",
  lang: "no",
  title: "Helse og sykdom",
  order: 25,
  stage: "a2",
  lessons: [
    {
      id: "no-u25l1",
      unit: 25,
      lesson: 1,
      title: "Symptoms",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a symptom rather than only saying you are ill — en smerte, å hoste, et sår, en forkjølelse.",
      items: [
        { id: "no-u25l1-ensmerte", type: "vocab", front: "en smerte", reading: "ensmerte", meaning: "pain", example: { jp: "Smerten kom sent, men den er bedre nå når jeg har sovet.", en: "The pain came late, but it is better now that I have slept." }, accept: ["a pain", "ache", "hurt"], drill: { jp: "En smerte kommer sakte", en: "A pain comes slowly" }, hint: "SMER-te. Masculine: definite smerten, plural smerter. A1's `vond` is the adjective — det gjør vondt; en smerte is the thing itself." },
        { id: "no-u25l1-ahoste", type: "vocab", front: "å hoste", reading: "ahoste", meaning: "to cough", example: { jp: "Barnet hoster mye i kveld, fordi det har vært kaldt i huset.", en: "The child coughs a lot this evening, because it has been cold in the house." }, accept: ["cough"], drill: { jp: "Det er vondt å hoste mye", en: "It is painful to cough a lot" }, hint: "HOS-te. Present hoster, past hostet. En hoste is the noun — å ha hoste, to have a cough." },
        { id: "no-u25l1-etsar", type: "vocab", front: "et sår", reading: "etsar", meaning: "wound", example: { jp: "Såret på hånda er lite, men legen sier at jeg må vaske det.", en: "The wound on the hand is small, but the doctor says I have to wash it." }, accept: ["a wound", "sore", "cut"], drill: { jp: "Et sår kan bli vondt", en: "A wound can get painful" }, hint: "SOR, with the rounded å. Neuter: definite såret, plural sår unchanged. As an adjective it means sore — jeg er sår." },
        { id: "no-u25l1-ablo", type: "vocab", front: "å blø", reading: "ablo", meaning: "to bleed", example: { jp: "Nesa blør når det er kaldt, men det slutter etter en time.", en: "The nose bleeds when it is cold, but it stops after an hour." }, accept: ["bleed"], drill: { jp: "Det er vondt å blø mye", en: "It is painful to bleed a lot" }, hint: "BLUR. Present blør, past blødde. Related to blod, blood — the ø is written o in the reading, as always." },
        { id: "no-u25l1-enforkjolelse", type: "vocab", front: "en forkjølelse", reading: "enforkjolelse", meaning: "cold", example: { jp: "Forkjølelsen tar en uke, men han er mye bedre nå.", en: "The cold takes a week, but he is much better now." }, accept: ["a cold", "head cold"], drill: { jp: "En forkjølelse tar ei uke", en: "A cold takes a week" }, hint: "for-HYUR-lel-se — the thin kj from A1 unit 1. Masculine: definite forkjølelsen. Built on kald, cold — literally a chilling." },
        { id: "no-u25l1-enallergi", type: "vocab", front: "en allergi", reading: "enallergi", meaning: "allergy", example: { jp: "Hun har en allergi, så hun spiser ikke det legen sa at hun må unngå.", en: "She has an allergy, so she does not eat what the doctor said she has to avoid." }, accept: ["an allergy"], drill: { jp: "En allergi kan bli vond", en: "An allergy can become painful" }, hint: "al-ler-GEE, stress on the end. Definite allergien. You HAVE an allergy MOT something — allergi mot melk." },
      ],
    },
    {
      id: "no-u25l2",
      unit: 25,
      lesson: 2,
      title: "Inside the body",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what the body does and when it is worn out — et hjerte, å puste, en søvn, å slite.",
      items: [
        { id: "no-u25l2-ethjerte", type: "vocab", front: "et hjerte", reading: "ethjerte", meaning: "heart", example: { jp: "Hjertet jobber raskt når du trener, men det blir rolig igjen.", en: "The heart works fast when you exercise, but it becomes calm again." }, accept: ["a heart"], drill: { jp: "Et hjerte er sterkt", en: "A heart is strong" }, hint: "YER-te — the h is silent before j, exactly like A1's et hjem. Neuter: definite hjertet, plural hjerter." },
        { id: "no-u25l2-apuste", type: "vocab", front: "å puste", reading: "apuste", meaning: "to breathe", example: { jp: "Det er tungt å puste når du har en forkjølelse og nesa er vond.", en: "It is hard to breathe when you have a cold and the nose is sore." }, accept: ["breathe"], drill: { jp: "Det er godt å puste rolig", en: "It is good to breathe calmly" }, hint: "PUS-te. Present puster. Pust dypt! is what a doctor says — breathe deeply." },
        { id: "no-u25l2-ensovn", type: "vocab", front: "en søvn", reading: "ensovn", meaning: "sleep", example: { jp: "Søvnen er viktig, fordi kroppen blir frisk igjen når du sover.", en: "Sleep is important, because the body gets well again when you sleep." }, accept: ["the sleep", "slumber"], drill: { jp: "En søvn på ti timer er lang", en: "A sleep of ten hours is long" }, hint: "SURVN. Masculine: definite søvnen. A1 taught the verb å sove; this is the noun, and the two look less alike than they are." },
        { id: "no-u25l2-enskade", type: "vocab", front: "en skade", reading: "enskade", meaning: "injury", example: { jp: "Skaden er ikke stor, men han kan ikke trene på to uker.", en: "The injury is not big, but he cannot exercise for two weeks." }, accept: ["an injury", "damage", "harm"], drill: { jp: "En skade tar to uker", en: "An injury takes two weeks" }, hint: "SKAA-de. Masculine: definite skaden, plural skader. It covers injury to a body and damage to a thing." },
        { id: "no-u25l2-etblodtrykk", type: "vocab", front: "et blodtrykk", reading: "etblodtrykk", meaning: "blood pressure", example: { jp: "Legen ser på blodtrykket i dag, fordi det var høyt tidligere.", en: "The doctor looks at the blood pressure today, because it was high earlier." }, accept: ["blood pressure"], drill: { jp: "Et blodtrykk kan bli høyt", en: "Blood pressure can get high" }, hint: "BLOO-trykk — blod (blood) plus trykk (pressure). Neuter: definite blodtrykket." },
        { id: "no-u25l2-aslite", type: "vocab", front: "å slite", reading: "aslite", meaning: "to struggle", example: { jp: "Hun sliter med søvnen, men hun sover bedre når hun trener.", en: "She struggles with sleep, but she sleeps better when she exercises." }, accept: ["struggle", "to toil", "to have a hard time", "to wear out"], drill: { jp: "Det er tungt å slite mye", en: "It is hard to struggle a lot" }, hint: "SLEE-te. You slite MED something — å slite med søvnen. It also means to wear something out." },
      ],
    },
    {
      id: "no-u25l3",
      unit: 25,
      lesson: 3,
      title: "At the doctor",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Get seen and get treated — en pasient, ei behandling, en resept, en medisin, ei pille, en operasjon.",
      items: [
        { id: "no-u25l3-enpasient", type: "vocab", front: "en pasient", reading: "enpasient", meaning: "patient", example: { jp: "Pasienten venter på legen, fordi behandlinga begynner klokka ni.", en: "The patient is waiting for the doctor, because the treatment starts at nine." }, accept: ["a patient"], drill: { jp: "En pasient venter på legen", en: "A patient waits for the doctor" }, hint: "pa-si-ENT, stress on the end. Definite pasienten, plural pasienter." },
        { id: "no-u25l3-eibehandling", type: "vocab", front: "ei behandling", reading: "eibehandling", meaning: "treatment", example: { jp: "Behandlinga tar tre uker, men han kan jobbe hvis han vil.", en: "The treatment takes three weeks, but he can work if he wants to." }, accept: ["a treatment", "therapy", "handling"], drill: { jp: "Ei behandling tar tre uker", en: "A treatment takes three weeks" }, hint: "be-HAND-ling — built on hånd, hand. Feminine: definite behandlinga, per the band's -ing convention." },
        { id: "no-u25l3-enresept", type: "vocab", front: "en resept", reading: "enresept", meaning: "prescription", example: { jp: "Legen skriver en resept, og du henter medisinen i en butikk.", en: "The doctor writes a prescription, and you collect the medicine in a shop." }, accept: ["a prescription"], drill: { jp: "Du henter en resept i dag", en: "You collect a prescription today" }, hint: "re-SEPT, stress on the end. Definite resepten. In Norway you fetch it på apoteket." },
        { id: "no-u25l3-enmedisin", type: "vocab", front: "en medisin", reading: "enmedisin", meaning: "medicine", example: { jp: "Medisinen hjelper mye, men jeg må ta den i to uker.", en: "The medicine helps a lot, but I have to take it for two weeks." }, accept: ["medication", "a medicine", "drug"], drill: { jp: "En medisin hjelper mye", en: "A medicine helps a lot" }, hint: "me-di-SEEN, stress on the end. MASCULINE: definite medisinen — not an -ing noun, so it does not take ei." },
        { id: "no-u25l3-eipille", type: "vocab", front: "ei pille", reading: "eipille", meaning: "pill", example: { jp: "Pilla er lita, men den hjelper godt hvis du tar den tidlig.", en: "The pill is small, but it helps well if you take it early." }, accept: ["a pill", "tablet"], drill: { jp: "Ei pille er lita", en: "A pill is small" }, hint: "PIL-le. Feminine: definite pilla. Note the drill takes `lita`, the feminine of liten — the ei marking is what tells you to." },
        { id: "no-u25l3-enoperasjon", type: "vocab", front: "en operasjon", reading: "enoperasjon", meaning: "operation", example: { jp: "Operasjonen var lang, men pasienten kom hjem etter fire dager.", en: "The operation was long, but the patient came home after four days." }, accept: ["an operation", "surgery"], drill: { jp: "En operasjon tar en time", en: "An operation takes an hour" }, hint: "o-pe-ra-SHOON — the sj hush inside -sjon, the ending that turns a verb into a noun. Definite operasjonen." },
      ],
    },
    {
      id: "no-u25l4",
      unit: 25,
      lesson: 4,
      title: "Getting better",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that you are recovering and what keeps you well — ei bedring, en kur, sunn, å unngå.",
      items: [
        { id: "no-u25l4-eibedring", type: "vocab", front: "ei bedring", reading: "eibedring", meaning: "improvement", example: { jp: "Det er ei bedring i dag, men legen sier at han må hvile.", en: "There is an improvement today, but the doctor says he has to rest." }, accept: ["an improvement", "recovery"], drill: { jp: "Det er ei bedring nå", en: "There is an improvement now" }, hint: "BEH-dring, from bedre (A1's comparative of god). Feminine: definite bedringa. God bedring! is what you say to someone ill — get well soon." },
        { id: "no-u25l4-enkur", type: "vocab", front: "en kur", reading: "enkur", meaning: "cure", example: { jp: "Det finnes ingen kur, men medisinen gjør at smerten blir mindre.", en: "There is no cure, but the medicine makes the pain smaller." }, accept: ["a cure", "course of treatment", "remedy"], drill: { jp: "En kur kan bli lang", en: "A cure can be long" }, hint: "KOOR. Masculine: definite kuren. En kur is also a course of pills — å ta en kur." },
        { id: "no-u25l4-etsykehjem", type: "vocab", front: "et sykehjem", reading: "etsykehjem", meaning: "nursing home", example: { jp: "Bestemora bor på et sykehjem, og vi besøker henne ofte.", en: "Grandmother lives in a nursing home, and we visit her often." }, accept: ["a nursing home", "care home"], drill: { jp: "Et sykehjem er alltid rolig", en: "A nursing home is always calm" }, hint: "SUE-ke-yem — syke (sick) plus hjem (A1 u4), and the silent h before j again. Neuter: definite sykehjemmet, with the m doubling." },
        { id: "no-u25l4-eioving", type: "vocab", front: "ei øving", reading: "eioving", meaning: "exercise", example: { jp: "Øvinga er lett, men du må gjøre den ofte.", en: "The exercise is easy, but you have to do it often." }, accept: ["an exercise", "practice", "drill"], drill: { jp: "Ei øving er lett", en: "An exercise is easy" }, hint: "UR-ving. Feminine: definite øvinga, per the band's -ing convention. A single physio movement, not A1's å trene, which is the whole activity." },
        { id: "no-u25l4-sunn", type: "vocab", front: "sunn", reading: "sunn", meaning: "healthy", example: { jp: "Middagen på sykehjemmet er sunn, fordi kokken lager alt.", en: "The dinner at the nursing home is healthy, because the cook makes everything." }, accept: ["wholesome", "good for you"], drill: { jp: "En middag kan bli sunn", en: "A dinner can be healthy" }, hint: "SUNN. Neuter sunt — the double n collapses before the -t, like grønn/grønt. A1's `frisk` means not ill; sunn means good for you." },
        { id: "no-u25l4-aunnga", type: "vocab", front: "å unngå", reading: "aunnga", meaning: "to avoid", example: { jp: "Han må unngå melk, fordi allergien blir verre når han drikker den.", en: "He has to avoid milk, because the allergy gets worse when he drinks it." }, accept: ["avoid", "to steer clear of", "to escape"], drill: { jp: "Det er lett å unngå melk", en: "It is easy to avoid milk" }, hint: "UNN-gaw — unn plus gå (A1 u1). Present unngår, past unngikk, following å gå exactly." },
      ],
    },
  ],
};
