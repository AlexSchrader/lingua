// ES Unit 52 — Causa y consecuencia (slot: cause-consequence) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 taught the CONNECTORS that link a cause to a result — porque, por eso, así
// que, ya que, por lo tanto, debido a, gracias a (u29, u36). What it can't do is
// name the machinery: a cause, a consequence, an effect, a factor. B1 turns the
// connector into content — the nouns and verbs of why things happen and what
// follows. Examples stay two-clause and indicative (subjunctive waits for u69-71);
// the A2 connectors do the joining. Every A2 causal word is used and re-taught
// nowhere; la causa, el resultado, depender, resultar and evitar are A1/A2 and
// appear only in examples here.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT52 = {
  id: "es-u52",
  lang: "es",
  title: "Causa y consecuencia",
  order: 52,
  stage: "b1",
  lessons: [
    {
      id: "es-u52l1",
      unit: 52,
      lesson: 1,
      title: "What causes what",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a cause, not just point at one — causar, provocar, el motivo, el origen, deberse a, el factor.",
      items: [
        { id: "es-u52l1-elmotivo", type: "vocab", front: "el motivo", reading: "elmotivo", meaning: "reason", example: { jp: "No entiendo el motivo de su decisión.", en: "I don't understand the reason for his decision." }, accept: ["the motive", "cause"], hint: "The reason behind an action; near la razón (A2) but leans on the why-someone-did-it. Con motivo de = on the occasion of." },
        { id: "es-u52l1-elorigen", type: "vocab", front: "el origen", reading: "elorigen", meaning: "origin", example: { jp: "El origen del problema es más profundo de lo que parece.", en: "The origin of the problem is deeper than it seems." }, accept: ["the source", "root"], hint: "Where something starts. En su origen = originally. Plural moves the stress: los orígenes." },
        { id: "es-u52l1-deberse", type: "vocab", front: "deberse a", reading: "debersea", meaning: "to be due to", example: { jp: "El retraso se debe al mal tiempo.", en: "The delay is due to the bad weather." }, accept: ["to be because of", "to stem from"], hint: "deber (A2, to owe) turned reflexive: algo SE DEBE A una causa. The standard way to state a cause formally." },
        { id: "es-u52l1-elfactor", type: "vocab", front: "el factor", reading: "elfactor", meaning: "factor", example: { jp: "El dinero es un factor importante, pero no el único.", en: "Money is an important factor, but not the only one." }, accept: ["the element", "aspect"], hint: "One of several things that shape a result. Un factor clave = a key factor." },
        { id: "es-u52l1-originar", type: "vocab", front: "originar", reading: "originar", meaning: "to give rise to", example: { jp: "La falta de lluvia originó una crisis en el campo.", en: "The lack of rain gave rise to a crisis in the countryside." }, accept: ["to cause", "to bring about", "to give rise to"], hint: "More formal than causar. Reflexive originarse en = to originate in." },
        { id: "es-u52l1-desencadenar", type: "vocab", front: "desencadenar", reading: "desencadenar", meaning: "to trigger / set off", example: { jp: "La noticia desencadenó una fuerte reacción en el país.", en: "The news triggered a strong reaction in the country." }, accept: ["to trigger", "to set off", "to unleash"], hint: "Literally 'to unchain'. For the one event that starts a chain: desencadenar una crisis." },
      ],
    },
    {
      id: "es-u52l2",
      unit: 52,
      lesson: 2,
      title: "Effects and results",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what follows — la consecuencia, el efecto, el impacto, afectar, influir, generar.",
      items: [
        { id: "es-u52l2-elefecto", type: "vocab", front: "el efecto", reading: "elefecto", meaning: "effect", example: { jp: "El nuevo horario tuvo un efecto positivo en el trabajo.", en: "The new schedule had a positive effect on the work." }, accept: ["the impact"], hint: "positivo, negativo — new here but transparent. Hacer efecto = to take effect (a medicine, a rule)." },
        { id: "es-u52l2-elimpacto", type: "vocab", front: "el impacto", reading: "elimpacto", meaning: "impact", example: { jp: "La noticia tuvo un gran impacto en toda la gente.", en: "The news had a big impact on everyone." }, accept: ["the effect", "shock"], hint: "A strong, often sudden effect. Stronger than el efecto." },
        { id: "es-u52l2-repercutir", type: "vocab", front: "repercutir", reading: "repercutir", meaning: "to have an impact on", example: { jp: "La subida de los precios repercute en toda la economía.", en: "The rise in prices has an impact on the whole economy." }, accept: ["to affect", "to have an impact", "to have repercussions"], hint: "repercutir EN algo. Same family as el impacto in this lesson." },
        { id: "es-u52l2-larepercusion", type: "vocab", front: "la repercusión", reading: "larepercusion", meaning: "the repercussion / impact", example: { jp: "La decisión tuvo una repercusión enorme en el sector.", en: "The decision had an enormous impact on the sector." }, accept: ["the repercussion", "the impact", "the effect"], hint: "Often plural: las repercusiones de una decisión. The noun of repercutir." },
        { id: "es-u52l2-acarrear", type: "vocab", front: "acarrear", reading: "acarrear", meaning: "to bring about / entail", example: { jp: "Ese cambio acarrea muchos problemas para los trabajadores.", en: "That change brings about a lot of problems for the workers." }, accept: ["to entail", "to bring about", "to lead to"], hint: "Almost always for consequences nobody wanted: acarrea gastos, acarrea riesgos." },
        { id: "es-u52l2-traducirseen", type: "vocab", front: "traducirse en", reading: "traducirseen", meaning: "to result in", example: { jp: "El esfuerzo de todos se tradujo en mejores resultados.", en: "Everyone's effort resulted in better results." }, accept: ["to result in", "to translate into", "to lead to"], hint: "Reflexive here: algo SE traduce EN otra cosa. The abstract becomes something concrete." },
      ],
    },
    {
      id: "es-u52l3",
      unit: 52,
      lesson: 3,
      title: "Leading to, following from",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Trace a chain — contribuir, llevar a, surgir, de ahí, por lo visto, superar.",
      items: [
        { id: "es-u52l3-contribuir", type: "vocab", front: "contribuir", reading: "contribuir", meaning: "to contribute", example: { jp: "Todos contribuyen al proyecto con su trabajo.", en: "Everyone contributes to the project with their work." }, accept: ["to help", "to play a part"], hint: "contribuir A algo. Contribuye a que… drives a whole result. Like influir, it takes -uir: contribuyo, contribuyes." },
        { id: "es-u52l3-llevara", type: "vocab", front: "llevar a", reading: "llevara", meaning: "to lead to", example: { jp: "Ese pequeño error llevó a un problema muy grande.", en: "That small mistake led to a very big problem." }, accept: ["to result in", "to bring about"], hint: "llevar (A1, to carry) + a: one thing carries you TO another. Un problema lleva a otro." },
        { id: "es-u52l3-deahi", type: "vocab", front: "de ahí", reading: "deahi", meaning: "hence", example: { jp: "No estudió nada; de ahí el mal resultado.", en: "He didn't study at all; hence the bad result." }, accept: ["that's why", "from there"], hint: "de + ahí (A1, there): literally \"from there\", pointing at a result. De ahí que… (with subjunctive) comes later." },
        { id: "es-u52l3-porlovisto", type: "vocab", front: "por lo visto", reading: "porlovisto", meaning: "apparently", example: { jp: "Por lo visto, el plan cambió a última hora.", en: "Apparently, the plan changed at the last minute." }, accept: ["seemingly", "by all accounts"], hint: "From ver (A1). Reports something you've heard but didn't see yourself — near al parecer." },
        { id: "es-u52l3-conducira", type: "vocab", front: "conducir a", reading: "conducira", meaning: "to lead to", example: { jp: "Esa política condujo a un aumento del paro.", en: "That policy led to a rise in unemployment." }, accept: ["to lead to", "to result in"], hint: "Conducir on its own is to drive; conducir A is where a process ends up." },
        { id: "es-u52l3-desembocaren", type: "vocab", front: "desembocar en", reading: "desembocaren", meaning: "to end up in / lead to", example: { jp: "La discusión desembocó en una pelea entre los dos.", en: "The argument ended up in a fight between the two of them." }, accept: ["to end in", "to lead to", "to result in"], hint: "A river desemboca into the sea; a situation ends the same way, usually badly." },
      ],
    },
    {
      id: "es-u52l4",
      unit: 52,
      lesson: 4,
      title: "Enabling and preventing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what makes something possible or blocks it — impedir, el obstáculo, favorecer, fomentar, el propósito, el fin.",
      items: [
        { id: "es-u52l4-elobstaculo", type: "vocab", front: "el obstáculo", reading: "elobstaculo", meaning: "obstacle", example: { jp: "El dinero fue el mayor obstáculo para el plan.", en: "Money was the biggest obstacle to the plan." }, accept: ["the barrier", "hurdle"], hint: "Something in the way. Stress on the TÁ: obs-TÁ-cu-lo." },
        { id: "es-u52l4-favorecer", type: "vocab", front: "favorecer", reading: "favorecer", meaning: "to favour", example: { jp: "El buen tiempo favorece el turismo en verano.", en: "Good weather favours tourism in the summer." }, accept: ["to help", "to benefit"], hint: "To help something along. From el favor (A1) + a favor (u51). Favorezco in the yo form." },
        { id: "es-u52l4-fomentar", type: "vocab", front: "fomentar", reading: "fomentar", meaning: "to promote", example: { jp: "La escuela fomenta la lectura desde pequeños.", en: "The school promotes reading from a young age." }, accept: ["to encourage", "to foster"], hint: "To actively encourage a good habit or activity. la lectura is new but comes straight from leer (A1)." },
        { id: "es-u52l4-elproposito", type: "vocab", front: "el propósito", reading: "elproposito", meaning: "purpose", example: { jp: "El propósito de la reunión es decidir juntos.", en: "The purpose of the meeting is to decide together." }, accept: ["the aim", "intention"], hint: "The aim behind an action. A propósito = on purpose (and also \"by the way\")." },
        { id: "es-u52l4-elfin", type: "vocab", front: "el fin", reading: "elfin", meaning: "purpose", example: { jp: "El fin de todo esto es aprender de los errores.", en: "The purpose of all this is to learn from mistakes." }, accept: ["the end", "goal"], hint: "Both the end and the goal of something. Con el fin de = in order to. Not just el fin de semana (A1)." },
        { id: "es-u52l4-obstaculizar", type: "vocab", front: "obstaculizar", reading: "obstaculizar", meaning: "to hinder / obstruct", example: { jp: "La falta de dinero obstaculiza el proyecto desde el principio.", en: "The lack of money has hindered the project from the start." }, accept: ["to hinder", "to obstruct", "to get in the way of"], hint: "The verb behind el obstáculo, the first card of this lesson." },
      ],
    },
  ],
};
