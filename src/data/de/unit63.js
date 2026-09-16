// DE Unit 63 — Erfahrung und Erinnerung (slot: experience) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js.
//
// THEME: how German talks about what is remembered, not what happened. A2's u28
// "Zeit und Zeitadverbien" owns the clock and calendar words and u38/u39 own the
// Praeteritum; this unit takes the MEMORY vocabulary none of them carded — das
// Gedaechtnis, auswendig, praegen, verblassen — plus the "looking back" adverbs
// (einst, seither, laengst) that A1/A2 never taught. Deliberately NOT taken here
// because each is one lexeme with a front already taught: die Erinnerung (sich
// erinnern, u22), die Erfahrung (u31), die Vergangenheit (u28), damals (u28),
// neulich (u28). They are used in examples instead.
//
// STYLE NOTE FOR THE WHOLE BLOCK (u63-u75), learned from scripts/scope-strict-de.mjs:
// the resolver derives a participle only where the verb has NO ge- prefix (erlebt,
// bewahrt, verdraengt all resolve from their infinitive; gemacht, gesagt, gelernt do
// not). So the Perfekt is used here with inseparable-prefix verbs, and everything
// else is present or Praeteritum — the same tense mix u45-u50 uses. This is a
// resolver gap, not a content rule; it is reported in the hand-back.
// FREE: Anna, Thomas, Lena, Max, Berlin, Hamburg, Wien, Deutschland, Fotos, Jahre, Tage, Kinder, Bilder
export const DE_UNIT63 = {
  id: "de-u63",
  lang: "de",
  title: "Erfahrung und Erinnerung",
  order: 63,
  stage: "b1",
  lessons: [
    {
      id: "de-u63l1",
      unit: 63,
      lesson: 1,
      title: "Das Gedächtnis",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how well something stays in your head: memory, by heart, to shape, unforgettable, to fade, to push away.",
      items: [
        { id: "de-u63l1-dasgedachtnis", type: "vocab", front: "das Gedächtnis", reading: "dasgedachtnis", meaning: "the memory", example: { jp: "Mein Gedächtnis ist am Morgen besser als am Abend.", en: "My memory is better in the morning than in the evening." }, drill: { jp: "Das Gedächtnis arbeitet in der Nacht", en: "Memory works during the night" }, accept: ["memory", "the memory", "the recall"], hint: "The faculty itself. A single memory is die Erinnerung, from sich erinnern (u22)." },
        { id: "de-u63l1-auswendig", type: "vocab", front: "auswendig", reading: "auswendig", meaning: "by heart", example: { jp: "Sie kann das ganze Lied auswendig singen.", en: "She can sing the whole song by heart." }, drill: { jp: "Ich lerne die Wörter auswendig", en: "I learn the words by heart" }, accept: ["by heart", "from memory", "off by heart"], hint: "Always with a verb: auswendig lernen, auswendig können. Never sits before a noun." },
        { id: "de-u63l1-pragen", type: "vocab", front: "prägen", reading: "pragen", meaning: "to shape", example: { jp: "Die Jahre in Hamburg prägen mich bis heute.", en: "The years in Hamburg shape me to this day." }, drill: { jp: "Die Jahre in Hamburg prägen uns", en: "The years in Hamburg shape us" }, accept: ["to shape", "to form", "to leave a mark on"], hint: "Of a person or a time leaving a lasting mark. Literally: to stamp a coin." },
        { id: "de-u63l1-unvergesslich", type: "vocab", front: "unvergesslich", reading: "unvergesslich", meaning: "unforgettable", example: { jp: "Der Abend am Meer war für uns unvergesslich.", en: "The evening by the sea was unforgettable for us." }, drill: { jp: "Der Sommer war für uns unvergesslich", en: "The summer was unforgettable for us" }, accept: ["unforgettable", "memorable"], hint: "un + vergessen + lich, and vergessen keeps its double s." },
        { id: "de-u63l1-verblassen", type: "vocab", front: "verblassen", reading: "verblassen", meaning: "to fade", example: { jp: "Nach vielen Jahren verblassen auch die schönen Bilder im Kopf.", en: "After many years even the lovely images in your head fade." }, drill: { jp: "Die alten Fotos verblassen mit der Zeit", en: "The old photos fade with time" }, accept: ["to fade", "to pale", "to grow faint"], hint: "From blass, pale. Used of colours, photos and memories alike." },
        { id: "de-u63l1-verdrangen", type: "vocab", front: "verdrängen", reading: "verdrangen", meaning: "to push away", example: { jp: "Er hat die schwere Zeit in der Schule lange verdrängt.", en: "He pushed the hard time at school out of mind for a long time." }, drill: { jp: "Wir verdrängen die schweren Momente", en: "We push away the hard moments" }, accept: ["to push away", "to suppress", "to repress", "to displace"], hint: "To shove something out of mind, or out of a place: neue Häuser verdrängen die alten." },
      ],
    },
    {
      id: "de-u63l2",
      unit: 63,
      lesson: 2,
      title: "Erleben und schildern",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Tell someone what you went through: to experience, an experience, an event, to describe, an impression, to impress.",
      items: [
        { id: "de-u63l2-erleben", type: "vocab", front: "erleben", reading: "erleben", meaning: "to experience", example: { jp: "In den Jahren am Meer haben wir viel Schönes erlebt.", en: "In the years by the sea we experienced a lot of lovely things." }, drill: { jp: "Wir erleben den Sommer zusammen", en: "We experience the summer together" }, accept: ["to experience", "to live through", "to go through"], hint: "er + leben: to live something through. Its noun is das Erlebnis, the next card." },
        { id: "de-u63l2-daserlebnis", type: "vocab", front: "das Erlebnis", reading: "daserlebnis", meaning: "the experience", example: { jp: "Die Reise nach Wien war ein Erlebnis für die ganze Familie.", en: "The trip to Vienna was an experience for the whole family." }, drill: { jp: "Das Erlebnis bleibt lange im Kopf", en: "The experience stays in your head a long time" }, accept: ["experience", "the experience", "the adventure"], hint: "ONE thing you lived through. die Erfahrung (u31) is the skill left over afterwards." },
        { id: "de-u63l2-dasereignis", type: "vocab", front: "das Ereignis", reading: "dasereignis", meaning: "the event", example: { jp: "Für die Stadt war das Konzert am Meer ein großes Ereignis.", en: "For the city the concert by the sea was a great event." }, drill: { jp: "Das Ereignis war sehr wichtig", en: "The event was very important" }, accept: ["event", "the event", "the occurrence"], hint: "Something that happens, usually in public. A party is eine Feier; a landmark moment is ein Ereignis." },
        { id: "de-u63l2-schildern", type: "vocab", front: "schildern", reading: "schildern", meaning: "to describe", example: { jp: "Bitte schildern Sie mir genau, wie der Abend im Hotel war.", en: "Please describe to me exactly what the evening at the hotel was like." }, drill: { jp: "Wir schildern den Abend sehr genau", en: "We describe the evening very precisely" }, accept: ["to describe", "to recount", "to relate"], hint: "You schildern a course of events; for an object use beschreiben (u33)." },
        { id: "de-u63l2-beeindrucken", type: "vocab", front: "beeindrucken", reading: "beeindrucken", meaning: "to impress", example: { jp: "Der alte Bahnhof in Hamburg hat uns sehr beeindruckt.", en: "The old station in Hamburg impressed us a great deal." }, drill: { jp: "Die Bilder beeindrucken die Kinder", en: "The pictures impress the children" }, accept: ["to impress"], hint: "Three e's in a row: be + ein + drucken. beeindruckt sein = to be impressed." },
      ],
    },
    {
      id: "de-u63l3",
      unit: 63,
      lesson: 3,
      title: "Einst und seither",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place something in the past without giving a date: by now, at the time, once, since then, long since, recently.",
      items: [
        { id: "de-u63l3-mittlerweile", type: "vocab", front: "mittlerweile", reading: "mittlerweile", meaning: "by now", example: { jp: "Der kleine Laden an der Ecke ist mittlerweile sehr teuer.", en: "The little shop on the corner has become very expensive by now." }, drill: { jp: "Mittlerweile ist es viel besser", en: "By now it is much better" }, accept: ["by now", "meanwhile", "in the meantime", "these days"], hint: "mittler + Weile, a while. Marks how much has changed since the time you mean." },
        { id: "de-u63l3-seinerzeit", type: "vocab", front: "seinerzeit", reading: "seinerzeit", meaning: "at the time", example: { jp: "Seinerzeit war die Miete in der Stadt noch sehr billig.", en: "At the time the rent in the city was still very cheap." }, drill: { jp: "Seinerzeit gab es kein Telefon", en: "At the time there was no telephone" }, accept: ["at the time", "back then", "in those days"], hint: "One word, and formal. damals (u28) is the everyday word for the same thing." },
        { id: "de-u63l3-einst", type: "vocab", front: "einst", reading: "einst", meaning: "once", example: { jp: "Hier stand einst ein großes Hotel mit einem Garten.", en: "A big hotel with a garden once stood here." }, drill: { jp: "Hier war einst ein Markt", en: "There was once a market here" }, accept: ["once", "once upon a time", "formerly"], hint: "Literary and distant — the storybook 'once'. For a plain past use früher." },
        { id: "de-u63l3-seither", type: "vocab", front: "seither", reading: "seither", meaning: "since then", example: { jp: "Wir wohnen seit drei Jahren am Meer und seither sind wir ruhiger.", en: "We have lived by the sea for three years and since then we are calmer." }, drill: { jp: "Seither sehen wir uns selten", en: "Since then we rarely see each other" }, accept: ["since then", "ever since", "from then on"], hint: "seit + her. seitdem does the same job but can also open a clause; seither cannot." },
        { id: "de-u63l3-langst", type: "vocab", front: "längst", reading: "langst", meaning: "long since", example: { jp: "Das Geschäft an der Ecke gibt es längst nicht mehr.", en: "The shop on the corner has been gone for ages." }, drill: { jp: "Er ist längst nach Hause gegangen", en: "He went home long ago" }, accept: ["long since", "long ago", "long before now"], hint: "The superlative of lang, used for time. schon längst adds a note of impatience." },
        { id: "de-u63l3-kurzlich", type: "vocab", front: "kürzlich", reading: "kurzlich", meaning: "recently", example: { jp: "Kürzlich war mein alter Lehrer wieder in der Stadt.", en: "Recently my old teacher was in town again." }, drill: { jp: "Kürzlich waren wir am Meer", en: "Recently we were at the sea" }, accept: ["recently", "lately", "the other day"], hint: "From kurz. Same sense as neulich (u28); kürzlich is the more written of the two." },
      ],
    },
    {
      id: "de-u63l4",
      unit: 63,
      lesson: 4,
      title: "Bewahren und vermissen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about keeping and missing things: to preserve, to store, a diary, a keepsake, to miss, a look back.",
      items: [
        { id: "de-u63l4-bewahren", type: "vocab", front: "bewahren", reading: "bewahren", meaning: "to preserve", example: { jp: "Die Stadt hat ihr altes Zentrum sehr gut bewahrt.", en: "The city has preserved its old centre very well." }, drill: { jp: "Wir bewahren die alten Bilder", en: "We preserve the old pictures" }, accept: ["to preserve", "to keep", "to retain"], hint: "To keep something as it is. Ruhe bewahren = to keep calm." },
        { id: "de-u63l4-aufbewahren", type: "vocab", front: "aufbewahren", reading: "aufbewahren", meaning: "to store", example: { jp: "Die alten Bilder von meiner Großmutter bewahre ich im Schrank auf.", en: "I keep my grandmother's old pictures in the cupboard." }, drill: { jp: "Wir wollen die Fotos aufbewahren", en: "We want to store the photos" }, accept: ["to store", "to keep", "to put away safely"], hint: "Separable: ich bewahre es auf. Physical storage, where bewahren is abstract." },
        { id: "de-u63l4-dastagebuch", type: "vocab", front: "das Tagebuch", reading: "dastagebuch", meaning: "the diary", example: { jp: "Als Kind schrieb sie jeden Abend in ihr Tagebuch.", en: "As a child she wrote in her diary every evening." }, drill: { jp: "Das Tagebuch liegt neben dem Bett", en: "The diary is lying next to the bed" }, accept: ["diary", "the diary", "journal", "the journal"], hint: "der Tag + das Buch, and a compound takes the gender of its last part: das Tagebuch." },
        { id: "de-u63l4-dasandenken", type: "vocab", front: "das Andenken", reading: "dasandenken", meaning: "the keepsake", example: { jp: "Die kleine Uhr ist ein Andenken an meinen Großvater.", en: "The little watch is a keepsake from my grandfather." }, drill: { jp: "Das Andenken steht auf dem Tisch", en: "The keepsake is standing on the table" }, accept: ["keepsake", "the keepsake", "souvenir", "the souvenir", "memento"], hint: "An object that keeps a person in mind: ein Andenken an jemand Bestimmtes." },
        { id: "de-u63l4-derruckblick", type: "vocab", front: "der Rückblick", reading: "derruckblick", meaning: "the look back", example: { jp: "Im Rückblick war die schwere Zeit gut für uns.", en: "Looking back, the hard time was good for us." }, drill: { jp: "Der Rückblick zeigt viele gute Jahre", en: "The look back shows many good years" }, accept: ["the look back", "review", "retrospect", "the retrospective"], hint: "zurück + Blick. im Rückblick = in retrospect, the phrase you will actually use." },
      ],
    },
  ],
};
