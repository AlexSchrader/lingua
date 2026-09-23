// PT Unit 120 — O tempo, a sequência e a duração (slot: coverage-b2-10) — B2
// FORMAL TIME ADVERBS AND THE NOUNS OF DURATION. The scaffold title was
// "Vocabulary 10 (B2)".
//
// WHY THIS UNIT IS MEASURED AND NOT CHOSEN, which matters because most coverage
// themes are chosen and should say so. Adverbs of time and sequence are a CLOSED
// CLASS, so an absence screen over a declared inventory is discriminating: if the
// inventory is written down from a reference grammar first and the corpus checked
// second, "absent" is a finding rather than an artefact of what was looked for.
// Block 3 declared the inventory, then probed it. Of 12 formal temporal adverbs,
// 7 were taught NOWHERE in 87 authored pt units: doravante, outrora,
// posteriormente, previamente, simultaneamente, paulatinamente,
// subsequentemente. This unit teaches those and their neighbours.
// (Contrast: an OPEN theme screens 100% absent whenever it was simply never
// covered, which is why block 3 does not call its other twelve slots measured.)
//
// ⚠️ CROSS-BLOCK HAZARD FOR BLOCK 1 TO RESOLVE. u108 Grammar 11 — discourse,
// cohesion, hedged claims and u110 Register 4 are block 2's, and unwritten when
// this unit was authored. Sequencing adverbs could legitimately live there. Block
// 3 took only the LEXICAL adverbs and left the connectives (contudo, todavia,
// porém, não obstante, por conseguinte, nomeadamente, aliás) untouched for u108 —
// they are measured absent too and the full list is in the hand-back. If u108
// also took these, the duplicate fronts fail validate:content at merge and the
// fix is block 1's call, not a silent deletion by whoever merges second.
//
// SLOT BOUNDARIES:
//   u28 owns entretanto, logo, depressa, apenas; u59 gradualmente; u86
//   imediatamente, o intervalo; u75 seguinte. All used here, none re-taught.
//   entretanto and imediatamente were in the first draft and are already taught —
//   replaced by desde logo and de imediato, which are different expressions.
//   paulatinamente is glossed "little by little" and NOT "gradually", because
//   gradualmente (u59) already owns that gloss.
// Conventions: see unit1.js header. lang/unit/lesson stamped in src/data/index.js.
export const PT_UNIT120 = {
  id: "pt-u120",
  lang: "pt",
  title: "O tempo, a sequência e a duração",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "pt-u120l1",
      unit: 120,
      lesson: 1,
      title: "Antes e depois",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Order events in formal written Portuguese — beforehand, subsequently, formerly, from now on.",
      items: [
        { id: "pt-u120l1-previamente", type: "vocab", front: "previamente", reading: "previamente", meaning: "beforehand", example: { jp: "Os documentos têm de ser enviados previamente ao serviço.", en: "The documents have to be sent to the office beforehand." }, drill: { jp: "Os documentos são enviados previamente", en: "The documents are sent beforehand" }, accept: ["beforehand", "previously", "in advance", "prior to", "ahead of time"], hint: "pre-vi-a-MEN-te. Before the thing in question, with the sense of as a precondition — marcação previamente feita, an appointment made in advance." },
        { id: "pt-u120l1-posteriormente", type: "vocab", front: "posteriormente", reading: "posteriormente", meaning: "subsequently", example: { jp: "A decisão foi tomada e posteriormente explicada a todos.", en: "The decision was taken and subsequently explained to everyone." }, drill: { jp: "A decisão foi posteriormente explicada", en: "The decision was subsequently explained" }, accept: ["subsequently", "later", "afterwards", "at a later date", "thereafter"], hint: "posh-te-ri-or-MEN-te. The formal counterpart of previamente. In writing it does the work depois does in speech — a report says posteriormente, a friend says depois." },
        { id: "pt-u120l1-outrora", type: "vocab", front: "outrora", reading: "outrora", meaning: "formerly", example: { jp: "A aldeia outrora cheia tem agora vinte pessoas.", en: "The village, once full, now has twenty people." }, drill: { jp: "A aldeia outrora cheia está vazia", en: "The village once full is empty" }, accept: ["formerly", "once", "in former times", "of old", "in days gone by"], hint: "ow-TRO-ra. In times past, with a note of distance and often of loss. Literary rather than conversational, and common in Portuguese writing about the interior." },
        { id: "pt-u120l1-doravante", type: "vocab", front: "doravante", reading: "doravante", meaning: "from now on", example: { jp: "Doravante todos os pedidos passam a ser feitos por escrito.", en: "From now on all requests are to be made in writing." }, drill: { jp: "Doravante os pedidos são por escrito", en: "From now on requests are in writing" }, accept: ["from now on", "henceforth", "hereafter", "from this point on", "in future"], hint: "du-ra-VAN-te. The formal henceforth, announcing a rule that starts now. Almost exclusively written — a notice, a contract, a circular. Never in conversation." },
        { id: "pt-u120l1-desdelogo", type: "vocab", front: "desde logo", reading: "desdelogo", meaning: "from the outset", example: { jp: "Desde logo ficou claro que o prazo não chegava.", en: "From the outset it was clear the deadline was not enough." }, drill: { jp: "Desde logo ficou claro o problema", en: "From the outset the problem was clear" }, accept: ["from the outset", "from the start", "right away", "straight away", "at once", "for a start"], hint: "DEZH-de LO-gu. Two senses that share a root: from the very beginning, and — in argument — for a start, introducing the first of several reasons. Both are common in Portuguese prose." },
        { id: "pt-u120l1-sucessivamente", type: "vocab", front: "sucessivamente", reading: "sucessivamente", meaning: "one after another", example: { jp: "Os nomes foram chamados sucessivamente até ao fim da lista.", en: "The names were called one after another to the end of the list." }, drill: { jp: "Os nomes foram chamados sucessivamente", en: "The names were called one after another" }, accept: ["one after another", "successively", "in succession", "consecutively", "and so on"], hint: "su-se-si-va-MEN-te. In an unbroken series. E assim sucessivamente is the fixed phrase for and so on — the Portuguese equivalent of et cetera in a list." },
      ],
    },
    {
      id: "pt-u120l2",
      unit: 120,
      lesson: 2,
      title: "Ao mesmo tempo, a tempo",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that things happen together, promptly, in good time or too late, in formal Portuguese.",
      items: [
        { id: "pt-u120l2-simultaneamente", type: "vocab", front: "simultaneamente", reading: "simultaneamente", meaning: "simultaneously", example: { jp: "As duas obras começaram simultaneamente nos dois lados da rua.", en: "The two works began simultaneously on both sides of the street." }, drill: { jp: "As obras começaram simultaneamente", en: "The works began simultaneously" }, accept: ["simultaneously", "at the same time", "concurrently", "at once", "together"], hint: "si-mul-ta-ne-a-MEN-te. Six syllables and worth practising. Em simultâneo is the shorter phrase Portuguese speech actually prefers; the adverb belongs to writing." },
        { id: "pt-u120l2-paralelamente", type: "vocab", front: "paralelamente", reading: "paralelamente", meaning: "in parallel", example: { jp: "Paralelamente ao curso, trabalhava à noite num café.", en: "Alongside the course, he worked nights in a café." }, drill: { jp: "Paralelamente ao curso trabalhava à noite", en: "Alongside the course he worked nights" }, accept: ["in parallel", "alongside", "at the same time as", "concurrently", "in tandem"], hint: "pa-ra-le-la-MEN-te. Two things running side by side, usually with paralelamente a. Slightly more about arrangement than simultaneamente, which is purely about clock time." },
        { id: "pt-u120l2-deimediato", type: "vocab", front: "de imediato", reading: "deimediato", meaning: "right away", example: { jp: "O erro foi corrigido de imediato pelos serviços.", en: "The error was corrected right away by the office." }, drill: { jp: "O erro foi corrigido de imediato", en: "The error was corrected right away" }, accept: ["right away", "immediately", "at once", "straight away", "instantly"], hint: "de i-me-di-A-tu. The adverbial phrase. Imediatamente (u86) is the single word; de imediato is what a Portuguese official statement writes, and it is slightly more emphatic." },
        { id: "pt-u120l2-prontamente", type: "vocab", front: "prontamente", reading: "prontamente", meaning: "promptly", example: { jp: "Respondeu prontamente a todas as perguntas que lhe fizeram.", en: "He answered promptly all the questions he was asked." }, drill: { jp: "Respondeu prontamente a todas as perguntas", en: "He answered promptly all the questions" }, accept: ["promptly", "readily", "without delay", "willingly", "swiftly"], hint: "pron-ta-MEN-te, from pronto. Carries willingness as well as speed — responding prontamente is obliging, not merely fast. That shade distinguishes it from de imediato." },
        { id: "pt-u120l2-atempadamente", type: "vocab", front: "atempadamente", reading: "atempadamente", meaning: "in good time", example: { jp: "O pedido foi entregue atempadamente e por isso foi aceite.", en: "The application was submitted in good time and so was accepted." }, drill: { jp: "O pedido foi entregue atempadamente", en: "The application was submitted in good time" }, accept: ["in good time", "in due time", "timely", "on time", "within the deadline", "in a timely manner"], hint: "a-tem-pa-da-MEN-te. Within the period allowed — the word a Portuguese deadline notice uses. Not merely early: it means before the prazo ran out." },
        { id: "pt-u120l2-tardiamente", type: "vocab", front: "tardiamente", reading: "tardiamente", meaning: "belatedly", example: { jp: "A resposta chegou tardiamente e já não servia para nada.", en: "The reply arrived belatedly and was no longer any use." }, drill: { jp: "A resposta chegou tardiamente", en: "The reply arrived belatedly" }, accept: ["belatedly", "late", "tardily", "too late", "after the event"], hint: "tar-di-a-MEN-te. Later than it should have been, with a note of reproach. The exact opposite of atempadamente, and the two often appear in the same paragraph." },
      ],
    },
    {
      id: "pt-u120l3",
      unit: 120,
      lesson: 3,
      title: "Devagar, de repente",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe the pace at which something changes in Portuguese — by degrees, all at once, steadily, at intervals.",
      items: [
        { id: "pt-u120l3-paulatinamente", type: "vocab", front: "paulatinamente", reading: "paulatinamente", meaning: "little by little", example: { jp: "A cidade foi mudando paulatinamente ao longo de trinta anos.", en: "The city changed little by little over thirty years." }, drill: { jp: "A cidade foi mudando paulatinamente", en: "The city changed little by little" }, accept: ["little by little", "bit by bit", "slowly", "by degrees", "step by step", "gradually"], hint: "pau-la-ti-na-MEN-te. Slowly and steadily, with patience implied. Glossed little by little rather than gradually because gradualmente already holds that gloss at u59 — the two are otherwise close." },
        { id: "pt-u120l3-progressivamente", type: "vocab", front: "progressivamente", reading: "progressivamente", meaning: "progressively", example: { jp: "As regras foram ficando progressivamente mais duras.", en: "The rules became progressively harsher." }, drill: { jp: "As regras ficaram progressivamente mais duras", en: "The rules became progressively harsher" }, accept: ["progressively", "increasingly", "by stages", "steadily", "more and more"], hint: "pru-gre-si-va-MEN-te. Change moving consistently in one direction. Unlike paulatinamente it says nothing about speed, only that each step goes further the same way." },
        { id: "pt-u120l3-repentinamente", type: "vocab", front: "repentinamente", reading: "repentinamente", meaning: "all of a sudden", example: { jp: "O tempo mudou repentinamente e começou a chover.", en: "The weather changed all of a sudden and it began to rain." }, drill: { jp: "O tempo mudou repentinamente", en: "The weather changed all of a sudden" }, accept: ["all of a sudden", "suddenly", "abruptly", "out of the blue", "unexpectedly"], hint: "rre-pen-ti-na-MEN-te. Without warning, from um repente, an impulse. De repente is the everyday phrase; repentinamente is its written form." },
        { id: "pt-u120l3-bruscamente", type: "vocab", front: "bruscamente", reading: "bruscamente", meaning: "abruptly", example: { jp: "Parou bruscamente no meio da rua sem avisar ninguém.", en: "He stopped abruptly in the middle of the street without warning anyone." }, drill: { jp: "Parou bruscamente no meio da rua", en: "He stopped abruptly in the middle of the street" }, accept: ["abruptly", "sharply", "brusquely", "suddenly and roughly", "curtly"], hint: "brush-ka-MEN-te. Suddenly AND roughly — the manner is part of the meaning, which is what separates it from repentinamente. Of a person's reply it means curtly." },
        { id: "pt-u120l3-continuamente", type: "vocab", front: "continuamente", reading: "continuamente", meaning: "continuously", example: { jp: "A máquina trabalha continuamente durante toda a noite.", en: "The machine works continuously all night long." }, drill: { jp: "A máquina trabalha continuamente à noite", en: "The machine works continuously at night" }, accept: ["continuously", "continually", "without a break", "constantly", "non-stop"], hint: "kon-ti-nu-a-MEN-te. Without interruption. Portuguese, like English, blurs continuously and continually in speech, but in a technical text this one means with no gaps." },
        { id: "pt-u120l3-periodicamente", type: "vocab", front: "periodicamente", reading: "periodicamente", meaning: "periodically", example: { jp: "Os aparelhos são vistos periodicamente por quem os instalou.", en: "The appliances are checked periodically by whoever installed them." }, drill: { jp: "Os aparelhos são vistos periodicamente", en: "The appliances are checked periodically" }, accept: ["periodically", "at intervals", "from time to time", "regularly", "at regular intervals"], hint: "pe-ri-o-di-ka-MEN-te. At recurring intervals, with regularity implied — the opposite of continuamente, and the word a maintenance contract uses." },
      ],
    },
    {
      id: "pt-u120l4",
      unit: 120,
      lesson: 4,
      title: "Quanto tempo dura",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how long something lasts or stays in force in Portuguese, and about pauses and delays.",
      items: [
        { id: "pt-u120l4-aduracao", type: "vocab", front: "a duração", reading: "aduracao", meaning: "duration", example: { jp: "A duração do curso é de dois anos.", en: "The duration of the course is two years." }, drill: { jp: "A duração do curso é de dois anos", en: "The duration of the course is two years" }, accept: ["duration", "the duration", "length", "length of time", "running time"], hint: "du-ra-SOWN. How long a thing goes on, from durar. On a Portuguese film listing a duração is the running time." },
        { id: "pt-u120l4-avigencia", type: "vocab", front: "a vigência", reading: "avigencia", meaning: "period of validity", example: { jp: "A vigência do contrato acaba no fim do ano.", en: "The contract's period of validity ends at the end of the year." }, drill: { jp: "A vigência do contrato acaba em dezembro", en: "The contract's validity ends in December" }, accept: ["period of validity", "the period of validity", "term", "currency", "period in force", "duration of effect"], hint: "vi-ZHEN-si-a, from vigorar, to be in force. The stretch of time a rule or contract is binding. Em vigor means currently in force — the adjectival form of the same idea." },
        { id: "pt-u120l4-apermanencia", type: "vocab", front: "a permanência", reading: "apermanencia", meaning: "length of stay", example: { jp: "A permanência no país passou de um ano.", en: "The stay in the country went past a year." }, drill: { jp: "A permanência no país passou de um ano", en: "The stay in the country went past a year" }, accept: ["length of stay", "the length of stay", "stay", "the stay", "residence", "remaining"], hint: "per-ma-NEN-si-a. How long somebody stays somewhere — the word on Portuguese immigration and hotel forms alike. Also permanence in the abstract sense." },
        { id: "pt-u120l4-odecurso", type: "vocab", front: "o decurso", reading: "odecurso", meaning: "passage of time", example: { jp: "No decurso do ano foram feitas muitas mudanças.", en: "In the course of the year many changes were made." }, drill: { jp: "O decurso do tempo mudou tudo", en: "The passage of time changed everything" }, accept: ["passage of time", "the passage of time", "course", "the course", "lapse of time", "running"], hint: "de-KOOR-su. Almost always in the phrase no decurso de, in the course of. Formal writing's alternative to durante, and it suggests the period unfolding rather than merely elapsing." },
        { id: "pt-u120l4-ainterrupcao", type: "vocab", front: "a interrupção", reading: "ainterrupcao", meaning: "interruption", example: { jp: "A interrupção do serviço durou duas horas.", en: "The interruption of the service lasted two hours." }, drill: { jp: "A interrupção do serviço durou duas horas", en: "The interruption of the service lasted two hours" }, accept: ["interruption", "the interruption", "break", "the break", "stoppage", "outage"], hint: "in-te-rru-SOWN. A stop in something that was running. Sem interrupção is without a break, and the phrase a Portuguese timetable uses for a continuous service." },
        { id: "pt-u120l4-oadiamento", type: "vocab", front: "o adiamento", reading: "oadiamento", meaning: "postponement", example: { jp: "O adiamento da reunião foi decidido na véspera.", en: "The postponement of the meeting was decided the day before." }, drill: { jp: "O adiamento da reunião foi decidido ontem", en: "The postponement of the meeting was decided yesterday" }, accept: ["postponement", "the postponement", "deferral", "delay", "putting off", "adjournment"], hint: "a-di-a-MEN-tu, from adiar, to put off — literally to push to another dia. A deliberate move to a later date, unlike o atraso, which is simply being late." },
      ],
    },
  ],
};
