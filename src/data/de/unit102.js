// DE Unit 102 — Gesundheitswesen und Pflege (slot: health-systems) — B2
// Block 2 of German B2 (u101–u113). Conventions: de/unit1.js and de/unit51.js.
//
// NOT a repeat of u67 "Gesundheit und Wohlbefinden" (B1), which owns the body and
// the patient: die Diagnose, die Operation, die Therapie, heilen, die Impfung, die
// Nebenwirkung, die Pflege, die Vorsorge. This unit is the SYSTEM around the
// patient — who pays (l1), who does the caring (l2), what spreads and how it is
// contained (l3), and the paperwork of a treatment decision (l4). That is the B2
// step: institutions and abstraction rather than symptoms.
//
// die Pflege is taught (u67) and three of l2's fronts are compounds of it. That is
// the lesson, not an accident: German builds the whole care profession out of one
// noun, and a learner who cannot read die Pflegekraft off die Pflege cannot read a
// job ad.
// FREE: Anna, Thomas, Kliniken, Formulare, Termine, Patienten, Pandemie, Quarantäne, Test, Tests
export const DE_UNIT102 = {
  id: "de-u102",
  lang: "de",
  title: "Gesundheitswesen und Pflege",
  order: 102,
  stage: "b2",
  lessons: [
    {
      id: "de-u102l1",
      unit: 102,
      lesson: 1,
      title: "Wer bezahlt und wer behandelt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how care is organised and paid for: the health system, the insurance fund, provision, the family doctor, the specialist, the clinic.",
      items: [
        { id: "de-u102l1-dasgesundheitswesen", type: "vocab", front: "das Gesundheitswesen", reading: "dasgesundheitswesen", meaning: "the health system", example: { jp: "Über das Gesundheitswesen diskutieren die Parteien vor der Wahl, weil es fast alle Menschen betrifft.", en: "The parties argue about the health system before the election, because it affects almost everybody." }, drill: { jp: "Das Gesundheitswesen kostet den Staat viel", en: "The health system costs the state a lot" }, accept: ["health system", "the health system", "the health service", "healthcare", "the healthcare system"], hint: "das Wesen as a suffix means 'the whole apparatus of': Schulwesen, Bankwesen, Gesundheitswesen." },
        { id: "de-u102l1-diekrankenkasse", type: "vocab", front: "die Krankenkasse", reading: "diekrankenkasse", meaning: "the health insurance fund", example: { jp: "Die Krankenkasse hat die Kur bezahlt, aber die Salbe musste er selbst bezahlen.", en: "The insurance fund paid for the spa treatment, but he had to pay for the ointment himself." }, drill: { jp: "Die Krankenkasse bezahlt diese Therapie nicht", en: "The insurance fund does not pay for this therapy" }, accept: ["health insurance fund", "the health insurance fund", "the health insurer", "the sickness fund", "the health insurance"], hint: "krank + die Kasse, the till. Not a company you choose freely — in Germany it is a public fund." },
        { id: "de-u102l1-dieversorgung", type: "vocab", front: "die Versorgung", reading: "dieversorgung", meaning: "the provision", example: { jp: "Im Gebirge ist die Versorgung mit Ärzten deutlich schlechter als in einer großen Stadt.", en: "Up in the mountains the provision of doctors is noticeably worse than in a large city." }, drill: { jp: "Die Versorgung mit Ärzten wird schlechter", en: "Provision of doctors is getting worse" }, accept: ["provision", "the provision", "the supply", "the care provided", "the coverage"], hint: "versorgen, to see that somebody has what they need. Works for Ärzte, for Strom and for a family." },
        { id: "de-u102l1-derhausarzt", type: "vocab", front: "der Hausarzt", reading: "derhausarzt", meaning: "the family doctor", example: { jp: "Der Hausarzt sieht seine Patienten seit Jahren und sagt deshalb schnell, was zu tun ist.", en: "The family doctor has been seeing his patients for years and therefore says quickly what is to be done." }, drill: { jp: "Der Hausarzt hat heute keinen Termin", en: "The family doctor has no appointment today" }, accept: ["family doctor", "the family doctor", "the GP", "the general practitioner"], hint: "das Haus + der Arzt. The first Arzt you go to; everything else starts here." },
        { id: "de-u102l1-derfacharzt", type: "vocab", front: "der Facharzt", reading: "derfacharzt", meaning: "the specialist doctor", example: { jp: "Für den Blutdruck hat ihn der Hausarzt zu einem Facharzt geschickt, und dort wartete er drei Monate.", en: "For his blood pressure the family doctor sent him to a specialist, and there he waited three months." }, drill: { jp: "Der Facharzt hat erst im Sommer Zeit", en: "The specialist has no time until the summer" }, accept: ["specialist doctor", "the specialist doctor", "the specialist", "the consultant"], hint: "das Fach (u24), a subject or field. An Arzt who has one only." },
        { id: "de-u102l1-dieklinik", type: "vocab", front: "die Klinik", reading: "dieklinik", meaning: "the clinic", example: { jp: "Die Klinik in der Stadt macht nur schwere Eingriffe am Herzen.", en: "The clinic in town does only serious operations on the heart." }, drill: { jp: "Die Klinik liegt mitten in der Stadt", en: "The clinic lies in the middle of town" }, accept: ["clinic", "the clinic", "the specialist hospital"], hint: "Stress the I: KLI-nik. A Krankenhaus (u11) takes everyone; eine Klinik usually does one thing." },
      ],
    },
    {
      id: "de-u102l2",
      unit: 102,
      lesson: 2,
      title: "Pflege und Betreuung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about looking after someone long-term: the carer, the care home, the looking-after, in need of care, a relative, welfare.",
      items: [
        { id: "de-u102l2-diepflegekraft", type: "vocab", front: "die Pflegekraft", reading: "diepflegekraft", meaning: "the carer", example: { jp: "In der Klinik gibt es seit Jahren zu wenige Pflegekräfte, obwohl der Beruf gebraucht wird wie kaum ein anderer.", en: "For years the clinic has had too few carers, although the profession is needed like almost no other." }, drill: { jp: "Die Pflegekraft arbeitet auch nachts", en: "The carer works at night as well" }, accept: ["carer", "the carer", "the care worker", "the nurse", "the nursing staff member"], hint: "die Pflege (u67) + die Kraft. German counts staff in Kräfte: Fachkraft, Lehrkraft, Pflegekraft." },
        { id: "de-u102l2-daspflegeheim", type: "vocab", front: "das Pflegeheim", reading: "daspflegeheim", meaning: "the care home", example: { jp: "Der Weg ins Pflegeheim war für die ganze Familie schwerer als alles davor.", en: "The road to the care home was harder for the whole family than anything before it." }, drill: { jp: "Das Pflegeheim liegt direkt am Park", en: "The care home is right next to the park" }, accept: ["care home", "the care home", "the nursing home", "the residential home"], hint: "das Heim is a home in the institutional sense — Kinderheim, Altenheim, Pflegeheim." },
        { id: "de-u102l2-diebetreuung", type: "vocab", front: "die Betreuung", reading: "diebetreuung", meaning: "the looking-after", example: { jp: "Die Betreuung zu Hause ist billiger als eine Klinik, aber sie belastet die Angehörigen sehr.", en: "Being looked after at home is cheaper than a clinic, but it puts a heavy load on the relatives." }, drill: { jp: "Die Betreuung dauert oft viele Jahre", en: "The looking-after often lasts many years" }, accept: ["looking-after", "the looking-after", "the care", "the supervision", "the support"], hint: "betreuen, to look after. Wider than Pflege: a child, a project or a group of Studenten can all be betreut." },
        { id: "de-u102l2-pflegebedurftig", type: "vocab", front: "pflegebedürftig", reading: "pflegebedurftig", meaning: "in need of care", example: { jp: "Seit dem Eingriff ist die alte Frau pflegebedürftig und kann nicht mehr ohne Hilfe leben.", en: "Since the operation the old woman has been in need of care and can no longer live without help." }, drill: { jp: "Ihre Mutter ist seit Januar pflegebedürftig", en: "Her mother has needed care since January" }, accept: ["in need of care", "needing care", "dependent on care", "in need of nursing"], hint: "die Pflege + bedürftig, in need of. The official word that unlocks money from the Kasse." },
        { id: "de-u102l2-derangehorige", type: "vocab", front: "der Angehörige", reading: "derangehorige", meaning: "the next of kin", example: { jp: "Nur die Angehörigen dürfen den Befund hören, wenn der Patient selbst nicht antworten kann.", en: "Only the next of kin may hear the findings if the patient cannot answer himself." }, drill: { jp: "Der Angehörige wartet vor dem Zimmer", en: "The next of kin is waiting outside the room" }, accept: ["next of kin", "the next of kin", "the relative", "the family member", "the dependant"], hint: "angehören, to belong to. It takes adjective endings: ein Angehöriger, die Angehörigen." },
        { id: "de-u102l2-diefursorge", type: "vocab", front: "die Fürsorge", reading: "diefursorge", meaning: "the welfare", example: { jp: "Die Fürsorge für alte Menschen war früher Sache der Familie und ist heute Sache des Staates.", en: "Welfare for old people used to be the family's business and today is the state's business." }, drill: { jp: "Die Fürsorge ist bei diesem Beruf wichtig", en: "Welfare matters a lot in this profession" }, accept: ["welfare", "the welfare", "the duty of care", "the caring responsibility"], hint: "für + die Sorge (u22): worrying FOR somebody, made into a duty." },
      ],
    },
    {
      id: "de-u102l3",
      unit: 102,
      lesson: 3,
      title: "Ansteckung und Verlauf",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a news report about disease spreading: a pandemic, an epidemic, a pathogen, immunity, quarantine, transmission.",
      items: [
        { id: "de-u102l3-diepandemie", type: "vocab", front: "die Pandemie", reading: "diepandemie", meaning: "the pandemic", example: { jp: "In der Pandemie hat sich gezeigt, wie schnell ein Gesetz den Alltag aller ändern kann.", en: "During the pandemic it became clear how quickly a law can change everybody's daily life." }, drill: { jp: "Die Pandemie hat viel geändert", en: "The pandemic changed a great deal of things" }, accept: ["pandemic", "the pandemic", "the global outbreak"], hint: "Stress the end: pande-MIE. Worldwide — eine Epidemie stops at a border." },
        { id: "de-u102l3-dieseuche", type: "vocab", front: "die Seuche", reading: "dieseuche", meaning: "the plague", example: { jp: "Früher kam nach einem sehr kalten Winter oft eine Seuche, weil die Menschen zu wenig zu essen hatten.", en: "In earlier times a plague often followed a very cold winter, because people had too little to eat." }, drill: { jp: "Die Seuche kam mit den Schiffen", en: "The plague came with the ships" }, accept: ["plague", "the plague", "the epidemic", "the pestilence"], hint: "The old, heavy word. A Tierseuche is what closes a farm today." },
        { id: "de-u102l3-dererreger", type: "vocab", front: "der Erreger", reading: "dererreger", meaning: "the pathogen", example: { jp: "Der Erreger ist so klein, dass man ihn nur mit sehr guten Geräten sehen kann.", en: "The pathogen is so small that you can only see it with very good equipment." }, drill: { jp: "Der Erreger bleibt im kalten Wasser", en: "The pathogen stays alive in cold water" }, accept: ["pathogen", "the pathogen", "the germ", "the causative agent", "the bug"], hint: "erregen, to stir up. The thing that stirs up the Krankheit — not the Krankheit itself." },
        { id: "de-u102l3-dieimmunitat", type: "vocab", front: "die Immunität", reading: "dieimmunitat", meaning: "immunity", example: { jp: "Nach der Impfung hält die Immunität ein paar Jahre, dann sinkt der Schutz wieder.", en: "After the vaccination immunity lasts a few years, then the protection falls again." }, drill: { jp: "Die Immunität hält nicht für immer", en: "Immunity does not last for ever" }, accept: ["immunity", "the immunity", "the resistance"], hint: "Stress the very end: immuni-TÄT. The same word covers a politician nobody may prosecute." },
        { id: "de-u102l3-diequarantane", type: "vocab", front: "die Quarantäne", reading: "diequarantane", meaning: "the quarantine", example: { jp: "Wer aus der Stadt kam, musste zwei Wochen in Quarantäne, auch ganz ohne Beschwerden.", en: "Anyone coming from the city had to spend two weeks in quarantine, even with no complaints at all." }, drill: { jp: "Die Quarantäne dauert zwei Wochen", en: "The quarantine lasts two weeks" }, accept: ["quarantine", "the quarantine", "the isolation period"], hint: "From Italian quaranta, forty — forty days on a ship. German says karan-TÄ-ne." },
        { id: "de-u102l3-dieansteckung", type: "vocab", front: "die Ansteckung", reading: "dieansteckung", meaning: "the transmission of infection", example: { jp: "Die Ansteckung geschieht vor allem dort, wo Leute lange zusammen sind, deshalb hilft frische Luft so viel.", en: "Infection happens above all where people are together for a long time, which is why fresh air helps so much." }, drill: { jp: "Die Ansteckung passiert oft im Gespräch", en: "Infection often happens in conversation" }, accept: ["transmission of infection", "the transmission of infection", "the infection", "catching it", "the contagion"], hint: "anstecken is to pin something on somebody — and to pass an illness to them." },
      ],
    },
    {
      id: "de-u102l4",
      unit: 102,
      lesson: 4,
      title: "Befund und Einwilligung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle the paperwork of a treatment: consent, the risk briefing, the findings, a referral, a sick note, follow-up care.",
      items: [
        { id: "de-u102l4-dieeinwilligung", type: "vocab", front: "die Einwilligung", reading: "dieeinwilligung", meaning: "the consent", example: { jp: "Ohne die Einwilligung des Patienten darf die Klinik den Eingriff nicht durchführen.", en: "Without the patient's consent the clinic may not carry out the operation." }, drill: { jp: "Die Einwilligung muss vor dem Eingriff kommen", en: "The consent must come before the operation" }, accept: ["consent", "the consent", "the permission", "the agreement", "the authorisation"], hint: "einwilligen, to agree to. Stronger than erlauben (u48): it is your own body." },
        { id: "de-u102l4-dieaufklarung", type: "vocab", front: "die Aufklärung", reading: "dieaufklarung", meaning: "the briefing on risks", example: { jp: "Vor der Operation muss die Aufklärung auch seltene Nebenwirkungen erklären, so schwer das Gespräch auch ist.", en: "Before the operation the briefing must also explain rare side effects, however hard the conversation is." }, drill: { jp: "Die Aufklärung erfolgt vor dem Eingriff", en: "The briefing takes place before the operation" }, accept: ["briefing on risks", "the briefing on risks", "the explanation of risks", "informing the patient", "the enlightenment"], hint: "aufklären, to clear up. The same noun names the 18th century and the talk parents dread." },
        { id: "de-u102l4-derbefund", type: "vocab", front: "der Befund", reading: "derbefund", meaning: "the findings", example: { jp: "Der Befund kam erst nach zwei Wochen, und so lange konnte niemand etwas sagen.", en: "The findings did not come until two weeks later, and for that long nobody could say anything." }, drill: { jp: "Der Befund kommt in einer Woche", en: "The findings arrive in a week" }, accept: ["findings", "the findings", "the result", "the medical report", "the test result"], hint: "From finden: what was found. ohne Befund on a letter means nothing was wrong." },
        { id: "de-u102l4-dieuberweisung", type: "vocab", front: "die Überweisung", reading: "dieuberweisung", meaning: "the referral", example: { jp: "Für den Facharzt braucht man eine Überweisung, sonst bezahlt die Kasse den Termin nicht.", en: "For the specialist you need a referral, otherwise the fund will not pay for the appointment." }, drill: { jp: "Die Überweisung gilt nur drei Monate", en: "The referral is only valid for three months" }, accept: ["referral", "the referral", "the referral letter", "the bank transfer"], hint: "überweisen, to send across — money OR a patient. Here it is the patient." },
        { id: "de-u102l4-dasattest", type: "vocab", front: "das Attest", reading: "dasattest", meaning: "the doctor's note", example: { jp: "Wer länger als drei Tage krank ist, muss dem Chef ein Attest schicken.", en: "Anyone ill for more than three days has to send the boss a doctor's note." }, drill: { jp: "Das Attest gilt ab heute", en: "The note is valid from today" }, accept: ["doctor's note", "the doctor's note", "the medical certificate", "the sick note"], hint: "Stress the end: at-TEST. Der Schein (u27) is the everyday word; das Attest is what the Arbeitgeber wants." },
        { id: "de-u102l4-dienachsorge", type: "vocab", front: "die Nachsorge", reading: "dienachsorge", meaning: "the follow-up care", example: { jp: "Nach der Genesung ist die Nachsorge genauso wichtig wie die Therapie selbst.", en: "After recovery the follow-up care is just as important as the therapy itself." }, drill: { jp: "Die Nachsorge läuft über zwei Jahre", en: "The follow-up care runs for two years" }, accept: ["follow-up care", "the follow-up care", "the aftercare", "the check-ups afterwards"], hint: "nach + die Sorge. Its pair is die Vorsorge (u67), which comes before anything happens." },
      ],
    },
  ],
};
