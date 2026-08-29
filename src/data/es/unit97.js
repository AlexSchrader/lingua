// ES Unit 97 — Ethics and responsibility (slot: ethics) — B2
// Authored: block 1, group 1. 4 lessons x 6 cards.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it.
//   OWNS: Moral reasoning — right and wrong, duty, culpability, dilemma, integrity,
//         consent.
//   NOT:  Rules, permission and punishment (u61) and legal liability (u92, u114). If a
//         rulebook decides it, it is u61's.
export const ES_UNIT97 = {
  id: "es-u97",
  lang: "es",
  title: "La ética y la responsabilidad",
  order: 97,
  stage: "b2",
  lessons: [
    {
      id: "es-u97l1",
      unit: 97,
      lesson: 1,
      title: "El bien y el mal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Frame a moral question: name ethics and a dilemma, speak of virtues and vices, and say how someone acted in moral terms.",
      items: [
        { id: "es-u97l1-laetica", type: "vocab", front: "la ética", reading: "laetica", meaning: "ethics", example: { jp: "La ética no siempre coincide con lo que permite la ley.", en: "Ethics does not always coincide with what the law allows." }, accept: ["ethics", "the ethics"], hint: "The study of right and wrong, and a profession's code. Ético is the adjective." },
        { id: "es-u97l1-eldilema", type: "vocab", front: "el dilema", reading: "eldilema", meaning: "the dilemma", example: { jp: "Se enfrentaba a un dilema sin buena salida.", en: "He faced a dilemma with no good way out." }, accept: ["the dilemma", "the quandary"], hint: "Masculine despite the -a ending, like el problema and el tema." },
        { id: "es-u97l1-lavirtud", type: "vocab", front: "la virtud", reading: "lavirtud", meaning: "the virtue", example: { jp: "La paciencia es una virtud poco valorada hoy.", en: "Patience is an undervalued virtue today." }, accept: ["the virtue", "the strength", "the merit"], hint: "A moral quality, and also a strong point in general. Virtuoso means virtuous as well as brilliant." },
        { id: "es-u97l1-elvicio", type: "vocab", front: "el vicio", reading: "elvicio", meaning: "the vice", example: { jp: "Todos tenemos algún vicio que preferimos no confesar.", en: "We all have some vice we would rather not admit to." }, accept: ["the vice", "the bad habit", "the failing"], hint: "The opposite of virtud, and in everyday speech simply a bad habit. Vicioso = depraved." },
        { id: "es-u97l1-obrar", type: "vocab", front: "obrar", reading: "obrar", meaning: "to act (morally)", example: { jp: "Obró de buena fe, aunque el resultado fuera malo.", en: "He acted in good faith, even though the outcome was bad." }, accept: ["to act", "to behave", "to proceed"], hint: "Formal, and almost always about conduct judged right or wrong: obrar bien, obrar con honradez." },
        { id: "es-u97l1-moralmente", type: "vocab", front: "moralmente", reading: "moralmente", meaning: "morally", example: { jp: "Lo que hizo era legal, pero moralmente discutible.", en: "What he did was legal, but morally questionable." }, accept: ["morally", "ethically"], hint: "Very often paired against legal: legal pero moralmente inaceptable." },
      ],
    },
    {
      id: "es-u97l2",
      unit: 97,
      lesson: 2,
      title: "La integridad",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe someone's moral character: call them a person of integrity, name honesty and uprightness, mention scruples, and speak of dignity and loyalty.",
      items: [
        { id: "es-u97l2-laintegridad", type: "vocab", front: "la integridad", reading: "laintegridad", meaning: "integrity", example: { jp: "Nadie ha puesto nunca en duda su integridad.", en: "Nobody has ever cast doubt on her integrity." }, accept: ["integrity", "the integrity", "uprightness"], hint: "Íntegro describes the person. The word also means wholeness: la integridad del edificio." },
        { id: "es-u97l2-lahonradez", type: "vocab", front: "la honradez", reading: "lahonradez", meaning: "honesty / decency", example: { jp: "Devolvió el dinero por pura honradez.", en: "He gave the money back out of sheer honesty." }, accept: ["honesty", "decency", "uprightness"], hint: "Honesty as a settled character trait, not just telling the truth once. Honrado is the adjective." },
        { id: "es-u97l2-larectitud", type: "vocab", front: "la rectitud", reading: "larectitud", meaning: "uprightness", example: { jp: "Actuó con la misma rectitud en público y en privado.", en: "He acted with the same uprightness in public and in private." }, accept: ["uprightness", "rectitude", "straightness"], hint: "From recto, straight. Doing the right thing even when nobody is watching." },
        { id: "es-u97l2-elescrupulo", type: "vocab", front: "el escrúpulo", reading: "elescrupulo", meaning: "the scruple", example: { jp: "Mintió sin el menor escrúpulo.", en: "He lied without the slightest scruple." }, accept: ["the scruple", "the qualm", "the misgiving"], hint: "Usually in the negative: sin escrúpulos = unscrupulous. Escrupuloso also means meticulous." },
        { id: "es-u97l2-ladignidad", type: "vocab", front: "la dignidad", reading: "ladignidad", meaning: "dignity", example: { jp: "Perdió el puesto, pero conservó la dignidad.", en: "He lost the post, but kept his dignity." }, accept: ["dignity", "the dignity", "self-respect"], hint: "Digno means both dignified and worthy: digno de confianza = trustworthy." },
        { id: "es-u97l2-lalealtad", type: "vocab", front: "la lealtad", reading: "lalealtad", meaning: "loyalty", example: { jp: "Le exigían lealtad ciega al partido.", en: "They demanded blind loyalty to the party from him." }, accept: ["loyalty", "the loyalty", "allegiance"], hint: "Lealtad A alguien. Standing by someone when it costs you something." },
      ],
    },
    {
      id: "es-u97l3",
      unit: 97,
      lesson: 3,
      title: "La culpa y el reproche",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Assign moral blame: speak of guilt, reproach someone, condemn conduct, point to a failure to act, and name the harm done.",
      items: [
        { id: "es-u97l3-laculpabilidad", type: "vocab", front: "la culpabilidad", reading: "laculpabilidad", meaning: "guilt / culpability", example: { jp: "Su culpabilidad quedó clara para todo el mundo.", en: "His culpability was clear to everyone." }, accept: ["guilt", "culpability", "blameworthiness"], hint: "Being to blame, not the feeling of guilt — that is el sentimiento de culpa." },
        { id: "es-u97l3-reprochar", type: "vocab", front: "reprochar", reading: "reprochar", meaning: "to reproach", example: { jp: "Le reprocharon no haber dicho nada a tiempo.", en: "They reproached him for not having said anything in time." }, accept: ["to reproach", "to blame", "to take to task"], hint: "reprochar algo A alguien. Personal and reproachful, softer than accusing formally." },
        { id: "es-u97l3-censurar", type: "vocab", front: "censurar", reading: "censurar", meaning: "to condemn / censure", example: { jp: "Varios países censuraron públicamente la decisión.", en: "Several countries publicly condemned the decision." }, accept: ["to condemn", "to censure", "to criticise", "to censor"], hint: "Public disapproval. It also means to censor a text, so context decides which sense." },
        { id: "es-u97l3-laomision", type: "vocab", front: "la omisión", reading: "laomision", meaning: "the omission / failure to act", example: { jp: "Se le acusa por omisión, no por lo que hizo.", en: "He is accused over what he failed to do, not what he did." }, accept: ["the omission", "the failure to act", "the oversight"], hint: "Por omisión = by failing to act. Ethically, not stopping harm can weigh as much as causing it." },
        { id: "es-u97l3-elperjuicio", type: "vocab", front: "el perjuicio", reading: "elperjuicio", meaning: "the harm", example: { jp: "La decisión causó un grave perjuicio a los vecinos.", en: "The decision caused serious harm to the residents." }, accept: ["the harm", "the damage", "the detriment"], hint: "Do not confuse it with el prejuicio, prejudice — one letter apart, wholly different." },
        { id: "es-u97l3-reprobable", type: "vocab", front: "reprobable", reading: "reprobable", meaning: "reprehensible", example: { jp: "Su conducta fue reprobable aunque no fuera delito.", en: "His conduct was reprehensible even if it was not a crime." }, accept: ["reprehensible", "blameworthy", "objectionable"], hint: "Deserving condemnation. Formal, and common in editorials and official statements." },
      ],
    },
    {
      id: "es-u97l4",
      unit: 97,
      lesson: 4,
      title: "El consentimiento y la equidad",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss fairness to others: name consent, fairness and impartiality, and contrast selflessness with selfishness and hypocrisy.",
      items: [
        { id: "es-u97l4-elconsentimiento", type: "vocab", front: "el consentimiento", reading: "elconsentimiento", meaning: "consent", example: { jp: "Usaron sus datos sin su consentimiento.", en: "They used her data without her consent." }, accept: ["consent", "the consent", "permission"], hint: "Consentir is the verb. Sin el consentimiento de = without the consent of." },
        { id: "es-u97l4-laequidad", type: "vocab", front: "la equidad", reading: "laequidad", meaning: "fairness / equity", example: { jp: "Reparten el trabajo con equidad entre los dos turnos.", en: "They share the work fairly between the two shifts." }, accept: ["fairness", "equity", "even-handedness"], hint: "Giving each what they are due, which is not always giving each the same. Equitativo is the adjective." },
        { id: "es-u97l4-laimparcialidad", type: "vocab", front: "la imparcialidad", reading: "laimparcialidad", meaning: "impartiality", example: { jp: "Se espera imparcialidad de quien tiene que decidir.", en: "Impartiality is expected of whoever has to decide." }, accept: ["impartiality", "neutrality", "even-handedness"], hint: "Taking no side. Imparcial is the adjective; parcial means biased as well as partial." },
        { id: "es-u97l4-elaltruismo", type: "vocab", front: "el altruismo", reading: "elaltruismo", meaning: "altruism", example: { jp: "Ayudó por altruismo y no esperaba nada a cambio.", en: "He helped out of altruism and expected nothing in return." }, accept: ["altruism", "selflessness", "unselfishness"], hint: "Altruista works as both noun and adjective. Its opposite is el egoísmo." },
        { id: "es-u97l4-elegoismo", type: "vocab", front: "el egoísmo", reading: "elegoismo", meaning: "selfishness", example: { jp: "Lo que parecía prudencia era puro egoísmo.", en: "What looked like caution was pure selfishness." }, accept: ["selfishness", "egoism", "self-interest"], hint: "Egoísta is the person and the adjective. Not the same as el ego." },
        { id: "es-u97l4-lahipocresia", type: "vocab", front: "la hipocresía", reading: "lahipocresia", meaning: "hypocrisy", example: { jp: "Exigir a los demás lo que uno no cumple es hipocresía.", en: "Demanding of others what you do not do yourself is hypocrisy." }, accept: ["hypocrisy", "the hypocrisy"], hint: "Hipócrita is the person. A very common charge in political argument." },
      ],
    },
  ],
};
