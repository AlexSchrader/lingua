// ES Unit 67 — La salud y el bienestar (slot: health-wellbeing) — B1
// A1 taught the body and me duele; A2 the doctor's visit (enfermo, el médico, la
// medicina, el hospital, la salud). B1 adds the two things those cannot say: the
// clinical frame (el síntoma, el diagnóstico, el tratamiento) and WELLBEING, which
// is mental as much as physical. Examples are two clauses joined by a live
// connective. Every front is a level up on A1/A2.
//   FREE: importante
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT67 = {
  id: "es-u67",
  lang: "es",
  title: "La salud y el bienestar",
  order: 67,
  stage: "b1",
  lessons: [
    {
      id: "es-u67l1",
      unit: 67,
      lesson: 1,
      title: "At the clinic",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a medical visit properly — la consulta, el síntoma, el diagnóstico, el tratamiento, la vacuna, el análisis.",
      items: [
        { id: "es-u67l1-laconsulta", type: "vocab", front: "la consulta", reading: "laconsulta", meaning: "the appointment", example: { jp: "La consulta duró veinte minutos, y el médico me lo explicó todo con calma.", en: "The appointment lasted twenty minutes, and the doctor explained everything to me calmly." }, drill: { jp: "La consulta con el médico es hoy", en: "The appointment with the doctor is today" }, accept: ["consultation", "the surgery", "doctor's office"], hint: "Both the appointment itself and the room / practice where it happens." },
        { id: "es-u67l1-eldiagnostico", type: "vocab", front: "el diagnóstico", reading: "eldiagnostico", meaning: "the diagnosis", example: { jp: "El diagnóstico estaba claro, así que el tratamiento empezó enseguida.", en: "The diagnosis was clear, so treatment started straight away." }, drill: { jp: "El diagnóstico del médico es claro", en: "The doctor's diagnosis is clear" }, accept: ["diagnosis", "the finding"] },
        { id: "es-u67l1-eltratamiento", type: "vocab", front: "el tratamiento", reading: "eltratamiento", meaning: "the treatment", example: { jp: "Este tratamiento dura tres semanas, aunque uno se sienta mejor antes.", en: "This treatment lasts three weeks, even if you feel better before then." }, drill: { jp: "El tratamiento de mi padre es largo", en: "My father's treatment is long" }, accept: ["the course of treatment", "the therapy"], hint: "From tratar (u32). aunque + subjunctive (se sienta) for a hypothetical case." },
        { id: "es-u67l1-elanalisis", type: "vocab", front: "el análisis", reading: "elanalisis", meaning: "the test", example: { jp: "El análisis mostró que todo estaba bien, así que me quedé más tranquilo.", en: "The test showed that everything was fine, so I felt calmer." }, drill: { jp: "El análisis de sangre es mañana", en: "The blood test is tomorrow" }, accept: ["analysis", "the blood test", "test"], hint: "A medical test or any analysis. Same in singular and plural: el análisis, los análisis." },
        { id: "es-u67l1-laurgencia", type: "vocab", front: "la urgencia", reading: "laurgencia", meaning: "the emergency / urgency", example: { jp: "Lo llevaron a urgencias en mitad de la noche.", en: "They took him to A&E in the middle of the night." }, drill: { jp: "La urgencia del hospital está abierta", en: "The hospital emergency room is open" }, accept: ["the emergency", "urgency", "the emergency room"], hint: "In the plural, urgencias is the emergency department: ir a urgencias." },
        { id: "es-u67l1-larevision", type: "vocab", front: "la revisión", reading: "larevision", meaning: "the check-up", example: { jp: "Tengo una revisión con el médico en marzo.", en: "I have a check-up with the doctor in March." }, drill: { jp: "La revisión del año es mañana", en: "The yearly check-up is tomorrow" }, accept: ["the check-up", "the review", "the examination"], hint: "Routine, not because something hurts: una revisión anual." },
      ],
    },
    {
      id: "es-u67l2",
      unit: 67,
      lesson: 2,
      title: "When it lasts",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about long-term health — crónico, la epidemia, el virus, la discapacidad, la recuperación, respirar.",
      items: [
        { id: "es-u67l2-cronico", type: "vocab", front: "crónico", reading: "cronico", meaning: "chronic", example: { jp: "Es una enfermedad crónica, de modo que hay que aprender a vivir con ella.", en: "It's a chronic illness, so you have to learn to live with it." }, drill: { jp: "El dolor es crónico desde enero", en: "The pain has been chronic since January" }, accept: ["long-term", "persistent", "ongoing"], hint: "la enfermedad, illness, is A2 (u25); crónico is the B1 word for one that doesn't go away." },
        { id: "es-u67l2-laepidemia", type: "vocab", front: "la epidemia", reading: "laepidemia", meaning: "the epidemic", example: { jp: "Durante la epidemia, las escuelas estuvieron cerradas varios meses.", en: "During the epidemic, schools were closed for several months." }, drill: { jp: "La epidemia del invierno es dura", en: "The winter epidemic is hard" }, accept: ["epidemic", "the outbreak"] },
        { id: "es-u67l2-ladiscapacidad", type: "vocab", front: "la discapacidad", reading: "ladiscapacidad", meaning: "the disability", example: { jp: "Su discapacidad no lo detiene, pero la ciudad no está pensada para él.", en: "His disability doesn't stop him, but the city isn't designed for him." }, drill: { jp: "La discapacidad de mi vecino es física", en: "My neighbour's disability is physical" }, accept: ["disability", "the impairment"] },
        { id: "es-u67l2-larecuperacion", type: "vocab", front: "la recuperación", reading: "larecuperacion", meaning: "the recovery", example: { jp: "La recuperación fue lenta, y sin embargo ella no perdió el ánimo.", en: "The recovery was slow, and yet she didn't lose heart." }, drill: { jp: "La recuperación de mi madre es lenta", en: "My mother's recovery is slow" }, accept: ["recovery", "the healing"], hint: "The verb is recuperarse, to recover / get better." },
        { id: "es-u67l2-respirar", type: "vocab", front: "respirar", reading: "respirar", meaning: "to breathe", example: { jp: "Respira despacio, y verás que enseguida te sientes mejor.", en: "Breathe slowly, and you'll see that you soon feel better." }, drill: { jp: "Respirar aire puro es sano", en: "Breathing clean air is healthy" }, accept: ["to breathe in", "to catch one's breath"] },
        { id: "es-u67l2-larecaida", type: "vocab", front: "la recaída", reading: "larecaida", meaning: "the relapse", example: { jp: "Después de una recaída tuvo que empezar el tratamiento otra vez.", en: "After a relapse he had to start the treatment again." }, drill: { jp: "La recaída de mi tío es seria", en: "My uncle's relapse is serious" }, accept: ["the relapse", "the setback"], hint: "From recaer, to fall ill again. Usually with tener: tuvo una recaída." },
      ],
    },
    {
      id: "es-u67l3",
      unit: 67,
      lesson: 3,
      title: "Mind and mood",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about mental health without drama — el bienestar, la ansiedad, la terapia, relajarse, el equilibrio, el estrés.",
      items: [
        { id: "es-u67l3-elbienestar", type: "vocab", front: "el bienestar", reading: "elbienestar", meaning: "wellbeing", example: { jp: "El bienestar en el trabajo importa tanto como el sueldo, según esta encuesta.", en: "Wellbeing at work matters as much as pay, according to this survey." }, drill: { jp: "El bienestar de la familia es importante", en: "The family's wellbeing is important" }, accept: ["well-being", "welfare", "comfort"], hint: "bien + estar — literally \"being well\"." },
        { id: "es-u67l3-laansiedad", type: "vocab", front: "la ansiedad", reading: "laansiedad", meaning: "anxiety", example: { jp: "La ansiedad es muy común entre los estudiantes, sobre todo antes de los exámenes.", en: "Anxiety is very common among students, especially before exams." }, drill: { jp: "La ansiedad del examen es normal", en: "Exam anxiety is normal" }, accept: ["the anxiety", "worry", "nervousness"] },
        { id: "es-u67l3-laterapia", type: "vocab", front: "la terapia", reading: "laterapia", meaning: "therapy", example: { jp: "Va a terapia desde hace un año, y le está ayudando mucho.", en: "He's been in therapy for a year, and it's helping him a lot." }, drill: { jp: "La terapia de mi hermana funciona bien", en: "My sister's therapy is working well" }, accept: ["the therapy", "counselling"] },
        { id: "es-u67l3-relajarse", type: "vocab", front: "relajarse", reading: "relajarse", meaning: "to relax", example: { jp: "Yo me relajo leyendo, mientras que mi hermano prefiere salir a correr.", en: "I relax by reading, whereas my brother prefers going out for a run." }, drill: { jp: "Relajarse un poco es necesario", en: "Relaxing a little is necessary" }, accept: ["to unwind", "to chill out", "to loosen up"] },
        { id: "es-u67l3-elequilibrio", type: "vocab", front: "el equilibrio", reading: "elequilibrio", meaning: "the balance", example: { jp: "Busca un equilibrio entre su vida y su trabajo, aunque no es nada fácil.", en: "He's looking for a balance between his life and his work, although it isn't at all easy." }, drill: { jp: "El equilibrio entre trabajo y familia", en: "The balance between work and family" }, accept: ["balance", "the equilibrium", "stability"] },
        { id: "es-u67l3-elestres", type: "vocab", front: "el estrés", reading: "elestres", meaning: "stress", example: { jp: "El estrés le quita el sueño, por lo que está cansado todo el día.", en: "Stress robs him of sleep, which is why he's tired all day." }, drill: { jp: "El estrés del trabajo es enorme", en: "Work stress is enormous" }, accept: ["the stress", "pressure"], hint: "estar estresado = to be stressed. The accent falls on the e: es-TRÉS." },
      ],
    },
    {
      id: "es-u67l4",
      unit: 67,
      lesson: 4,
      title: "Staying well",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what keeps you healthy — la alimentación, el descanso, prevenir, el ritmo, el hábito, en forma.",
      items: [
        { id: "es-u67l4-laalimentacion", type: "vocab", front: "la alimentación", reading: "laalimentacion", meaning: "diet", example: { jp: "Una buena alimentación cuesta cara, lo cual es un problema de verdad.", en: "A good diet is expensive, which is a real problem." }, drill: { jp: "La alimentación de mi hijo es sana", en: "My son's diet is healthy" }, accept: ["the diet", "nutrition", "food"], hint: "What you eat in general. From alimentar, to feed. Los alimentos are foodstuffs." },
        { id: "es-u67l4-eldescanso", type: "vocab", front: "el descanso", reading: "eldescanso", meaning: "rest", example: { jp: "El médico le pidió descanso, así que se queda en casa esta semana.", en: "The doctor told him to rest, so he's staying home this week." }, drill: { jp: "El descanso del domingo es sagrado", en: "Sunday's rest is sacred" }, accept: ["the rest", "break", "relaxation"], hint: "The noun beside descansar, to rest (A1). Also half-time or an interval." },
        { id: "es-u67l4-prevenir", type: "vocab", front: "prevenir", reading: "prevenir", meaning: "to prevent", example: { jp: "Más vale prevenir que curar, como dice el refrán.", en: "Prevention is better than cure, as the saying goes." }, drill: { jp: "Prevenir es mejor que curar", en: "Prevention is better than cure" }, accept: ["to warn", "to avoid", "to head off"], hint: "Two jobs: to prevent, and to warn — te lo advierto is closer to a threat, prevenir is a friendly heads-up." },
        { id: "es-u67l4-elritmo", type: "vocab", front: "el ritmo", reading: "elritmo", meaning: "the pace", example: { jp: "El ritmo de vida en la ciudad es demasiado rápido para mí.", en: "The pace of life in the city is too fast for me." }, drill: { jp: "El ritmo de la ciudad es rápido", en: "The pace of the city is fast" }, accept: ["rhythm", "pace", "the tempo"] },
        { id: "es-u67l4-elhabito", type: "vocab", front: "el hábito", reading: "elhabito", meaning: "the habit", example: { jp: "Tengo el hábito de caminar cada mañana, así que me siento mejor durante el día.", en: "I have the habit of walking every morning, so I feel better during the day." }, drill: { jp: "El hábito del café es difícil", en: "The coffee habit is hard to break" }, accept: ["habit", "the routine", "custom"], hint: "A personal habit. La costumbre (A2) leans more toward a shared custom." },
        { id: "es-u67l4-enforma", type: "vocab", front: "en forma", reading: "enforma", meaning: "in shape", example: { jp: "Está en forma porque hace deporte, aunque ya no sea joven.", en: "He's in shape because he does sport, although he's no longer young." }, drill: { jp: "Quiero estar en forma este año", en: "I want to be in shape this year" }, accept: ["fit", "in good shape"], hint: "estar en forma = to be fit. mantenerse en forma = to keep in shape." },
      ],
    },
  ],
};
