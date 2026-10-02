// PT Unit 98 — O risco e a incerteza (slot: risk-uncertainty) — B2
//
// WHAT MIGHT HAPPEN, AND WHAT IT WOULD COST. u54 taught hedging — a hipótese,
// provável, improvável, supor, arriscar, é capaz de — so the learner can
// already be unsure out loud. u47 gave o risco itself, u52 gave cause and
// effect (o impacto, desencadear, a repercussão), u60 gave problems. What none
// of them gives is the vocabulary of MANAGING an uncertain future: guarding
// against it in advance, and naming a consequence that will not be undone.
//
// SLOT BOUNDARIES:
//   o risco is SPENT at u47, arriscar and a probabilidade and improvável at
//   u54, estimar at u82, prevenir at u67, o impacto / desencadear / a
//   repercussão at u52, o prejuízo at u45, o desfecho at u52, acarretar at u52.
//   That is an unusually crowded neighbourhood, so nearly every front here is
//   the one those units left: arriscado beside o risco, a eventualidade beside
//   a probabilidade, acautelar beside prevenir, o revés beside o prejuízo.
//   BLOCKS 2 AND 3, NOTE: this slot cost 9 of my 95 planned collisions, more
//   than any other. Check u52 and u54 hard before writing anything about
//   likelihood or consequence.
//
// FALSE FRIEND FLAGGED IN l2: eventualmente in Portuguese means POSSIBLY, not
// 'eventually'. It is in the hint because it catches English speakers every
// time.
//
// Conventions: see unit1.js header (language) and unit88.js (B2 band).
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT98 = {
  id: "pt-u98",
  lang: "pt",
  title: "O risco e a incerteza",
  order: 98,
  stage: "b2",
  lessons: [
    {
      id: "pt-u98l1",
      unit: 98,
      lesson: 1,
      title: "O risco",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a danger in Portuguese — what is risky, what is imminent, what is simply reckless.",
      items: [
        { id: "pt-u98l1-arriscado", type: "vocab", front: "arriscado", reading: "arriscado", meaning: "risky", example: { jp: "O plano é arriscado mas é o que resta fazer neste momento.", en: "The plan is risky but it is what's left to do at this point." }, drill: { jp: "O plano é arriscado mas necessário", en: "The plan is risky but necessary" }, accept: ["risky", "chancy", "dicey", "hazardous"], hint: "a-rrish-KA-du, from o risco (Unit 47). Said of a plan or an action, never of a person — for someone who takes risks Portuguese says temerário or arrojado." },
        { id: "pt-u98l1-aameaca", type: "vocab", front: "a ameaça", reading: "aameaca", meaning: "threat", example: { jp: "A ameaça de chuva fez adiar o jogo para o dia seguinte.", en: "The threat of rain led to the match being postponed to the next day." }, drill: { jp: "A ameaça de chuva adiou tudo", en: "The threat of rain postponed everything" }, accept: ["threat", "the threat", "menace", "danger"], hint: "a-me-A-sa. Both a spoken threat and a looming danger — uma ameaça de chuva. Ameaçar is the verb, and it works both ways too." },
        { id: "pt-u98l1-mitigar", type: "vocab", front: "mitigar", reading: "mitigar", meaning: "to mitigate", example: { jp: "Não se consegue evitar o problema, mas consegue-se mitigar bastante.", en: "The problem can't be avoided, but it can be mitigated considerably." }, drill: { jp: "Podemos mitigar o problema mas não evitar", en: "We can mitigate the problem but not avoid it" }, accept: ["to mitigate", "mitigate", "to reduce", "to lessen", "to limit the damage of"], hint: "mi-ti-GAR. To reduce the harm of something you cannot stop. Now everywhere in Portuguese climate and finance writing — medidas de mitigação." },
        { id: "pt-u98l1-exporse", type: "vocab", front: "expor-se", reading: "exporse", meaning: "to expose oneself", example: { jp: "Quem investe tudo num só lugar expõe-se demasiado ao risco.", en: "Anyone who invests everything in one place exposes themselves too much to risk." }, drill: { jp: "Não vale a pena expor-se assim", en: "It's not worth exposing yourself like that" }, accept: ["to expose oneself", "expose oneself", "to leave oneself open", "to lay oneself open", "to run a risk"], hint: "esh-POR-se. To put yourself within reach of a risk — expor-se a. The plain expor is to display, or to set out an argument, so the reflexive is doing real work." },
        { id: "pt-u98l1-iminente", type: "vocab", front: "iminente", reading: "iminente", meaning: "imminent", example: { jp: "O perigo era iminente e não havia tempo nenhum para pensar.", en: "The danger was imminent and there was no time at all to think." }, drill: { jp: "O perigo era iminente e claro", en: "The danger was imminent and clear" }, accept: ["imminent", "impending", "about to happen", "looming"], hint: "i-mi-NEN-te. About to happen, any moment now. Do not confuse it with eminente, which means distinguished — one letter apart, and a slip even natives make." },
        { id: "pt-u98l1-temerario", type: "vocab", front: "temerário", reading: "temerario", meaning: "reckless", example: { jp: "Foi um gesto temerário que podia ter acabado muito mal.", en: "It was a reckless act that could have ended very badly." }, drill: { jp: "Foi um gesto temerário e perigoso", en: "It was a reckless and dangerous act" }, accept: ["reckless", "rash", "foolhardy", "daring"], hint: "te-me-RA-ri-u, from temer, to fear — someone who does not fear enough. In Portuguese law condução temerária is reckless driving." },
      ],
    },
    {
      id: "pt-u98l2",
      unit: 98,
      lesson: 2,
      title: "A probabilidade",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Weigh up what might happen in Portuguese — the scenario, the likelihood, the contingency you plan for.",
      items: [
        { id: "pt-u98l2-aeventualidade", type: "vocab", front: "a eventualidade", reading: "aeventualidade", meaning: "eventuality", example: { jp: "O plano prevê a eventualidade de o prazo não ser cumprido.", en: "The plan provides for the eventuality of the deadline not being met." }, drill: { jp: "A eventualidade de falhar preocupa todos", en: "The eventuality of failing worries everyone" }, accept: ["eventuality", "the eventuality", "possibility", "contingency", "possible case"], hint: "e-ven-twa-li-DA-de. A possible case you plan for. And beware its adverb: eventualmente in Portuguese means POSSIBLY, not 'eventually' — a classic false friend." },
        { id: "pt-u98l2-aleatorio", type: "vocab", front: "aleatório", reading: "aleatorio", meaning: "random", example: { jp: "A escolha foi aleatória para ninguém poder reclamar depois.", en: "The choice was random so that nobody could complain afterwards." }, drill: { jp: "A escolha foi feita de modo aleatório", en: "The choice was made in a random way" }, accept: ["random", "by chance", "arbitrary", "picked at random"], hint: "a-le-a-TO-ri-u. Decided by chance — ao acaso is the everyday phrase, aleatório the technical one. From Latin alea, the dice." },
        { id: "pt-u98l2-ocenario", type: "vocab", front: "o cenário", reading: "ocenario", meaning: "scenario", example: { jp: "O pior cenário é aquele que ninguém quer escrever no relatório.", en: "The worst scenario is the one nobody wants to write in the report." }, drill: { jp: "O cenário mais provável é este", en: "The most likely scenario is this one" }, accept: ["scenario", "the scenario", "situation", "case", "setting"], hint: "se-NA-ri-u. A possible course of events — and also the stage set in a theatre. Um cenário negro, a bleak outlook, is a fixture of Portuguese headlines." },
        { id: "pt-u98l2-averosimilhanca", type: "vocab", front: "a verosimilhança", reading: "averosimilhanca", meaning: "plausibility", example: { jp: "A verosimilhança da história é o que mais convence o leitor.", en: "The plausibility of the story is what convinces the reader most." }, drill: { jp: "A verosimilhança da história convence bastante", en: "The story's plausibility is quite convincing" }, accept: ["plausibility", "the plausibility", "likelihood", "believability", "credibility"], hint: "ve-ru-si-mi-LYAN-sa — from verdade and semelhante, 'resembling truth'. How believable a thing is. Portugal writes verosimilhança; Brazil verossimilhança, with a double s." },
        { id: "pt-u98l2-presumivel", type: "vocab", front: "presumível", reading: "presumivel", meaning: "presumed", example: { jp: "A causa presumível do atraso foi o tempo, mas ainda não há certeza.", en: "The presumed cause of the delay was the weather, but there is no certainty yet." }, drill: { jp: "A causa presumível foi o tempo", en: "The presumed cause was the weather" }, accept: ["presumed", "presumable", "likely", "supposed", "assumed"], hint: "pre-zu-MEE-vel, from presumir. What you assume for now, pending better information. Presumivelmente is very common in Portuguese news writing." },
        { id: "pt-u98l2-acontingencia", type: "vocab", front: "a contingência", reading: "acontingencia", meaning: "contingency", example: { jp: "O plano tem uma parte só para contingências que nunca acontecem.", en: "The plan has a section just for contingencies that never happen." }, drill: { jp: "A contingência do plano nunca foi usada", en: "The plan's contingency was never used" }, accept: ["contingency", "the contingency", "unforeseen event", "eventuality"], hint: "kon-tin-ZHEN-si-a. Something that may or may not happen, and the provision made for it. Um plano de contingência is a contingency plan." },
      ],
    },
    {
      id: "pt-u98l3",
      unit: 98,
      lesson: 3,
      title: "A precaução",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Take precautions in Portuguese — guard against a risk, write in a safeguard, get ahead of the problem.",
      items: [
        { id: "pt-u98l3-aprecaucao", type: "vocab", front: "a precaução", reading: "aprecaucao", meaning: "precaution", example: { jp: "A precaução custou pouco e evitou um problema enorme.", en: "The precaution cost little and avoided an enormous problem." }, drill: { jp: "A precaução evitou um problema enorme", en: "The precaution avoided an enormous problem" }, accept: ["precaution", "the precaution", "safety measure", "preventive step"], hint: "pre-kow-SOWN. A step taken in advance. Por precaução means just in case, and it is the standard Portuguese reason for anything cautious." },
        { id: "pt-u98l3-acautelar", type: "vocab", front: "acautelar", reading: "acautelar", meaning: "to guard against", example: { jp: "É preciso acautelar tudo o que pode correr mal no primeiro dia.", en: "You have to guard against everything that could go wrong on the first day." }, drill: { jp: "É preciso acautelar todos os riscos", en: "You have to guard against all the risks" }, accept: ["to guard against", "guard against", "to take precautions over", "to provide for", "to forestall"], hint: "a-kow-te-LAR, from cauteloso. To make provision against something going wrong. Acautelar-se, reflexive, is to look out for yourself." },
        { id: "pt-u98l3-asalvaguarda", type: "vocab", front: "a salvaguarda", reading: "asalvaguarda", meaning: "safeguard", example: { jp: "A salvaguarda existe no contrato e ninguém chegou a reparar nela.", en: "The safeguard is there in the contract and nobody ever noticed it." }, drill: { jp: "A salvaguarda está escrita no contrato", en: "The safeguard is written into the contract" }, accept: ["safeguard", "the safeguard", "protection", "guarantee", "protective clause"], hint: "sal-va-GWAR-da. A written protection against a specific risk. Salvaguardar is the verb, and it is what Portuguese law uses for protecting rights." },
        { id: "pt-u98l3-preventivo", type: "vocab", front: "preventivo", reading: "preventivo", meaning: "preventive", example: { jp: "O trabalho preventivo custa sempre menos do que o conserto depois.", en: "Preventive work always costs less than the repair afterwards." }, drill: { jp: "O trabalho preventivo custa sempre menos", en: "Preventive work always costs less" }, accept: ["preventive", "preventative", "precautionary", "preemptive"], hint: "pre-ven-TEE-vu. Done in order to stop something happening — manutenção preventiva. Prevenir (Unit 67) is the verb behind it." },
        { id: "pt-u98l3-oalerta", type: "vocab", front: "o alerta", reading: "oalerta", meaning: "alert", example: { jp: "O alerta chegou tarde e a água já tinha entrado nas casas.", en: "The alert came late and the water had already got into the houses." }, drill: { jp: "O alerta chegou tarde demais", en: "The alert came far too late" }, accept: ["alert", "the alert", "warning", "heads-up"], hint: "a-LER-ta. Note the gender: o alerta is masculine despite ending in -a. Estar alerta is to be on the lookout, and alerta amarelo is a weather warning level." },
        { id: "pt-u98l3-anteciparse", type: "vocab", front: "antecipar-se", reading: "anteciparse", meaning: "to get ahead of", example: { jp: "A empresa antecipou-se ao problema e mudou o plano mesmo a tempo.", en: "The company got ahead of the problem and changed the plan just in time." }, drill: { jp: "É melhor antecipar-se ao problema", en: "It's better to get ahead of the problem" }, accept: ["to get ahead of", "get ahead of", "to anticipate", "to preempt", "to act first"], hint: "an-te-si-PAR-se. To act before something happens — antecipar-se a. The plain antecipar is to bring a date forward: antecipar a reunião." },
      ],
    },
    {
      id: "pt-u98l4",
      unit: 98,
      lesson: 4,
      title: "As consequências",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how damage spreads in Portuguese — the setback, the snowball, the domino effect, the point of no return.",
      items: [
        { id: "pt-u98l4-irreversivel", type: "vocab", front: "irreversível", reading: "irreversivel", meaning: "irreversible", example: { jp: "O problema do rio pode ser irreversível se nada mudar agora.", en: "The river's problem may be irreversible if nothing changes now." }, drill: { jp: "O problema do rio é irreversível", en: "The river's problem is irreversible" }, accept: ["irreversible", "permanent", "impossible to undo", "irremediable"], hint: "i-rre-ver-SEE-vel. Cannot be undone. Portuguese doubles the r after the prefix ir-, which is why it is written and said with a strong rolled rr." },
        { id: "pt-u98l4-avolumarse", type: "vocab", front: "avolumar-se", reading: "avolumarse", meaning: "to snowball", example: { jp: "A dívida começou pequena mas foi-se avolumando com os anos.", en: "The debt started small but snowballed over the years." }, drill: { jp: "A dívida começou a avolumar-se depressa", en: "The debt started to snowball quickly" }, accept: ["to snowball", "snowball", "to mount up", "to grow steadily", "to swell"], hint: "a-vu-lu-MAR-se, from o volume. Of a debt, a problem or a queue growing bigger and bigger. Portuguese prefers it to crescer when the growth is unwelcome." },
        { id: "pt-u98l4-oreves", type: "vocab", front: "o revés", reading: "oreves", meaning: "setback", example: { jp: "O revés de maio pôs o projeto atrasado quase um ano inteiro.", en: "May's setback put the project almost a whole year behind." }, drill: { jp: "O revés de maio atrasou tudo", en: "May's setback delayed everything" }, accept: ["setback", "the setback", "reverse", "blow", "knock"], hint: "rre-VESH. A sudden turn for the worse. Ao revés means the wrong way round, and in tennis o revés is the backhand — all the same image of a reversal." },
        { id: "pt-u98l4-propagarse", type: "vocab", front: "propagar-se", reading: "propagarse", meaning: "to propagate", example: { jp: "O fogo propagou-se depressa por causa do vento seco daquela tarde.", en: "The fire propagated quickly because of the dry wind that afternoon." }, drill: { jp: "O fogo começou a propagar-se depressa", en: "The fire began to propagate quickly" }, accept: ["to propagate", "propagate", "to spread", "to travel", "to be transmitted"], hint: "pru-pa-GAR-se. Of fire, sound, disease or a rumour moving outward. Portuguese keeps the reflexive; the plain propagar is what a person does deliberately." },
        { id: "pt-u98l4-incalculavel", type: "vocab", front: "incalculável", reading: "incalculavel", meaning: "incalculable", example: { jp: "O prejuízo foi incalculável e ninguém tentou sequer pôr um número.", en: "The loss was incalculable and nobody even tried to put a number on it." }, drill: { jp: "O prejuízo foi simplesmente incalculável", en: "The loss was simply incalculable" }, accept: ["incalculable", "beyond measure", "untold", "immeasurable"], hint: "in-kal-ku-LA-vel. Too great to put a number to, usually of damage or loss. Portuguese reaches for it where English might say 'untold'." },
        { id: "pt-u98l4-oefeitodomino", type: "vocab", front: "o efeito dominó", reading: "oefeitodomino", meaning: "domino effect", example: { jp: "O problema numa fábrica teve um efeito dominó em toda a região.", en: "The problem at one factory had a domino effect across the whole region." }, drill: { jp: "O efeito dominó atingiu toda a região", en: "The domino effect reached the whole region" }, accept: ["domino effect", "the domino effect", "knock-on effect", "chain reaction", "cascade"], hint: "Portuguese borrowed the image whole — note the accent on the last syllable of dominó. Um efeito em cadeia is the equally common native version." },
      ],
    },
  ],
};
