// ES Unit 105 — Sentimientos encontrados ("Mixed and ambivalent feelings") — B2 (slot: emotions-mixed)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: feelings that pull two ways.
// Ambivalence proper (l1), resignation and going flat (l2), unease and wariness (l3),
// reluctance and hesitation (l4).
// Named single emotions (u57, u82) and intense emotion (u116) are not this unit's: every
// front here needs two clauses to translate, never one clean word.
// Rejected as already taught: la nostalgia (u63), ambiguo (u81), el remordimiento (u82).
// Rejected as the same lexeme: la vacilación (~u62 vacilar), la conformidad (~u74
// conformarse). Dropped in the hand lexeme sweep: ambivalente and reticente, because
// each sat in the same lesson as its own noun (la ambivalencia, la reticencia) — one
// lexeme on two cards is no new learning. Replaced by el desconcierto and renuente.
export const ES_UNIT105 = {
  id: "es-u105",
  lang: "es",
  title: "Sentimientos encontrados",
  order: 105,
  stage: "b2",
  lessons: [
    {
      id: "es-u105l1",
      unit: 105,
      lesson: 1,
      title: "Ambivalencia",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that you feel two opposite things at once, and that the feeling is sweet and sad together.",
      items: [
        { id: "es-u105l1-ambivalencia", type: "vocab", front: "la ambivalencia", reading: "laambivalencia", meaning: "ambivalence", example: { jp: "Su ambivalencia sobre el trabajo nuevo duró meses.", en: "Her ambivalence about the new job lasted months." }, accept: ["ambivalence", "mixed feelings"], hint: "Two opposite feelings held at the same time, neither winning. Not doubt about a fact — that is la duda (u76) — but doubt about how you feel." },
        { id: "es-u105l1-desconcierto", type: "vocab", front: "el desconcierto", reading: "eldesconcierto", meaning: "bewilderment", example: { jp: "Su respuesta creó mucho desconcierto entre todos.", en: "Her answer created a lot of bewilderment among everyone." }, accept: ["bewilderment", "confusion", "puzzlement", "disarray"], hint: "Not knowing what to think or feel — the state before a feeling settles into one. From concertar: things have stopped agreeing with each other." },
        { id: "es-u105l1-encontrado", type: "vocab", front: "encontrado", reading: "encontrado", meaning: "conflicting (of feelings)", example: { jp: "Tengo sentimientos encontrados sobre este cambio.", en: "I have conflicting feelings about this change." }, accept: ["conflicting", "mixed", "contradictory"], hint: "Almost always in the plural with sentimientos: sentimientos encontrados is the standard way to say mixed feelings. The image is of two things meeting head-on." },
        { id: "es-u105l1-agridulce", type: "vocab", front: "agridulce", reading: "agridulce", meaning: "bittersweet", example: { jp: "El día final fue agridulce para todos.", en: "The last day was bittersweet for everyone." }, accept: ["bittersweet"], hint: "Built from agrio + dulce, sour plus sweet, and used for food as well as farewells. One word for the whole two-way feeling." },
        { id: "es-u105l1-contradiccion", type: "vocab", front: "la contradicción", reading: "lacontradiccion", meaning: "contradiction", example: { jp: "Vivo en una contradicción: quiero irme y quiero quedarme.", en: "I live in a contradiction: I want to leave and I want to stay." }, accept: ["contradiction", "inconsistency"], hint: "Two things that cannot both be true, in an argument or in a person. Caer en una contradicción = to contradict yourself." },
        { id: "es-u105l1-incomodidad", type: "vocab", front: "la incomodidad", reading: "laincomodidad", meaning: "discomfort / awkwardness", example: { jp: "Nadie habló de la incomodidad de esa comida.", en: "Nobody mentioned the awkwardness of that meal." }, accept: ["discomfort", "awkwardness", "unease", "uneasiness"], hint: "Social discomfort more often than physical: the feeling of a room where something has not been said." },
      ],
    },
    {
      id: "es-u105l2",
      unit: 105,
      lesson: 2,
      title: "Resignación y desgana",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that you have stopped fighting something, that you cannot be bothered, or that something you believed in has gone flat.",
      items: [
        { id: "es-u105l2-resignacion", type: "vocab", front: "la resignación", reading: "laresignacion", meaning: "resignation (acceptance)", example: { jp: "Lo dijo con una resignación muy triste.", en: "He said it with a very sad resignation." }, accept: ["resignation", "acceptance", "forbearance"], hint: "Accepting what you cannot change, without being at peace with it. Never the leaving-a-job sense — that is la dimisión." },
        { id: "es-u105l2-resignarse", type: "vocab", front: "resignarse", reading: "resignarse", meaning: "to resign oneself", example: { jp: "Al final tuvo que resignarse y no decir nada.", en: "In the end she had to resign herself and say nothing." }, drill: { jp: "Resignarse no sirve de nada", en: "Resigning yourself is no use" }, accept: ["to resign oneself", "to accept", "to give in", "resign oneself"], hint: "Always reflexive, and usually followed by a: resignarse a vivir así. It marks the moment you stop pushing back." },
        { id: "es-u105l2-desgana", type: "vocab", front: "la desgana", reading: "ladesgana", meaning: "reluctance / listlessness", example: { jp: "Trabaja con desgana desde hace un año.", en: "He has been working listlessly for a year." }, accept: ["reluctance", "listlessness", "apathy", "lack of enthusiasm"], hint: "From des- + la gana, want: the absence of wanting to. Con desgana describes how you do the thing you are still doing." },
        { id: "es-u105l2-indiferencia", type: "vocab", front: "la indiferencia", reading: "laindiferencia", meaning: "indifference", example: { jp: "Su indiferencia fue peor que cualquier palabra.", en: "Her indifference was worse than any word." }, drill: { jp: "La indiferencia es muy dura", en: "The indifference is very hard" }, accept: ["indifference", "apathy", "coldness"], hint: "Not caring either way — which is why it wounds more than opposition. Con indiferencia is the manner." },
        { id: "es-u105l2-desapego", type: "vocab", front: "el desapego", reading: "eldesapego", meaning: "detachment", example: { jp: "Habla de su ciudad con un desapego raro.", en: "He talks about his city with a strange detachment." }, drill: { jp: "El desapego es muy raro", en: "The detachment is very odd" }, accept: ["detachment", "aloofness", "distance", "emotional distance"], hint: "A loosening of an attachment you used to have. It can be a loss or a discipline, and the word does not decide which." },
        { id: "es-u105l2-desencanto", type: "vocab", front: "el desencanto", reading: "eldesencanto", meaning: "disenchantment", example: { jp: "Después de las elecciones llegó el desencanto.", en: "After the elections came the disenchantment." }, accept: ["disenchantment", "disillusionment", "disappointment"], hint: "The flatness left when something you believed in stops convincing you. Literally the un-casting of a spell — el encanto is the charm." },
      ],
    },
    {
      id: "es-u105l3",
      unit: 105,
      lesson: 3,
      title: "Inquietud y recelo",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a worry you cannot pin down, and say that you do not quite trust something without accusing anyone.",
      items: [
        { id: "es-u105l3-inquietud", type: "vocab", front: "la inquietud", reading: "lainquietud", meaning: "unease / disquiet", example: { jp: "La noticia creó mucha inquietud entre los padres.", en: "The news created a lot of unease among the parents." }, accept: ["unease", "disquiet", "restlessness", "concern"], hint: "Worry without a clear object — quieto means still, so this is not being able to settle. In the plural, sus inquietudes are someone's interests." },
        { id: "es-u105l3-desasosiego", type: "vocab", front: "el desasosiego", reading: "eldesasosiego", meaning: "deep unease / restlessness", example: { jp: "Vivió esos meses con un desasosiego que no podía contar.", en: "He lived those months with an unease he could not put into words." }, accept: ["unease", "restlessness", "disquiet", "anxiety"], hint: "A literary, heavier inquietud — the word Pessoa's Libro del desasosiego carries in Spanish. Use it in writing, rarely in speech." },
        { id: "es-u105l3-aprension", type: "vocab", front: "la aprensión", reading: "laaprension", meaning: "apprehension / squeamishness", example: { jp: "Me da aprensión volver a ese hospital.", en: "Going back to that hospital gives me the creeps." }, accept: ["apprehension", "squeamishness", "dread", "unease"], hint: "Dar aprensión is the usual pattern. In Spain it leans towards physical squeamishness — the shrinking-back kind of fear, not el miedo (u22)." },
        { id: "es-u105l3-pesar", type: "vocab", front: "el pesar", reading: "elpesar", meaning: "regret / sorrow", example: { jp: "Dejó la ciudad con pesar, pero sin dudar.", en: "She left the city with regret, but without hesitating." }, accept: ["regret", "sorrow", "grief"], hint: "A quiet sorrow at something done or lost. As a conjunction, a pesar de means in spite of — the same weight, used differently." },
        { id: "es-u105l3-suspicacia", type: "vocab", front: "la suspicacia", reading: "lasuspicacia", meaning: "the suspiciousness", example: { jp: "No dijo nada, y eso creó suspicacias en el equipo.", en: "He said nothing, and that created suspicion in the team." }, accept: ["the suspiciousness", "suspicion", "mistrust", "wariness"], hint: "A readiness to read bad intentions into things. Often plural: levantar suspicacias. Suspicaz is the person." },
        { id: "es-u105l3-lazozobra", type: "vocab", front: "la zozobra", reading: "lazozobra", meaning: "anxiety / disquiet", example: { jp: "Vivieron semanas de zozobra sin noticias de él.", en: "They lived through weeks of anxiety with no news of him." }, accept: ["anxiety", "disquiet", "unease"], hint: "Literary, and specifically the unease of waiting: literally a boat about to capsize. Deeper than la inquietud, less physical than la angustia." },
      ],
    },
    {
      id: "es-u105l4",
      unit: 105,
      lesson: 4,
      title: "Reticencia y titubeo",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Show that you are doing something unwillingly, or hold back and hesitate without refusing outright.",
      items: [
        { id: "es-u105l4-reticencia", type: "vocab", front: "la reticencia", reading: "lareticencia", meaning: "reluctance / reticence", example: { jp: "Dijo que sí al trabajo, pero con reticencia.", en: "She said yes to the job, but reluctantly." }, accept: ["reluctance", "reticence", "hesitancy", "unwillingness"], hint: "Holding back from something you are nevertheless doing. In Spanish it leans on unwillingness more than on silence." },
        { id: "es-u105l4-renuente", type: "vocab", front: "renuente", reading: "renuente", meaning: "unwilling / loath", example: { jp: "Se quedó renuente a decir nada más.", en: "He remained unwilling to say anything more." }, accept: ["unwilling", "loath", "reluctant", "averse"], hint: "Renuente a + infinitive. Bookish, and a shade stronger than la reticencia in this same lesson: it leans towards refusing rather than merely holding back." },
        { id: "es-u105l4-areganadientes", type: "vocab", front: "a regañadientes", reading: "areganadientes", meaning: "grudgingly / unwillingly", example: { jp: "Pagó a regañadientes lo que no quería pagar.", en: "He grudgingly paid what he did not want to pay." }, accept: ["grudgingly", "unwillingly", "reluctantly", "under protest"], hint: "Literally with grinding teeth. It describes the doing, not the deciding: you did it, and you made sure everyone saw how you felt." },
        { id: "es-u105l4-titubear", type: "vocab", front: "titubear", reading: "titubear", meaning: "to hesitate / waver", example: { jp: "Titubeó un momento antes de decir que no.", en: "He hesitated for a moment before saying no." }, drill: { jp: "No hay que titubear tanto", en: "You should not hesitate so much" }, accept: ["to hesitate", "to waver", "to falter", "hesitate"], hint: "The visible hesitation — the pause, the half-started sentence. Sin titubear = without missing a beat." },
        { id: "es-u105l4-resistirse", type: "vocab", front: "resistirse", reading: "resistirse", meaning: "to be reluctant / resist", example: { jp: "Se resiste a creer que todo terminó.", en: "He is reluctant to believe it is all over." }, accept: ["to be reluctant", "to resist", "to refuse", "resist"], hint: "Reflexive and followed by a: resistirse a hacer algo. It is inner resistance, not physical — that would be resistir without the se." },
        { id: "es-u105l4-reparo", type: "vocab", front: "el reparo", reading: "elreparo", meaning: "misgiving / qualm", example: { jp: "No tuvo reparo en decirlo delante de todos.", en: "He had no qualms about saying it in front of everyone." }, accept: ["misgiving", "qualm", "scruple", "reservation"], hint: "Usually in the negative: no tener reparos = to have no hesitation about doing something awkward. Poner reparos is to raise objections." },
      ],
    },
  ],
};
