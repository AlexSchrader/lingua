# BUILD-BRIEF — conjugation engine: B1/N3 forms (passive · causative · imperative)

**Lane:** Feature CC (engine — `src/store/conjugate.js`). **Blocks:** B1 grammar units.
**Why:** B1/N3's grammar backbone is 受身 (passive), 使役 (causative), and 使役受身
(causative-passive), plus imperative/prohibition. The current engine (`CONJ_FORMS =
dict·nai·ta·te·tara·ba·potential·volitional`) has none of them, so B1 conjugation-drill
units can't be authored until these ship. Same tagged-data contract as A2 (item carries
`{ group, conjForm }`; the card calls `conjugate(front, group, form)` and checks kana).

## Add these `conjForm` values

| form | godan rule (stem い-col → …) | ichidan | irregular |
|------|------------------------------|---------|-----------|
| `passive` (受身 ～られる) | あ-col + れる (かく→かかれる; う-verb→わ: かう→かわれる) | drop る + られる (たべる→たべられる) | する→される, くる→こられる |
| `causative` (使役 ～せる) | あ-col + せる (かく→かかせる; かう→かわせる) | drop る + させる (たべる→たべさせる) | する→させる, くる→こさせる |
| `causative_passive` (使役受身 ～させられる) | あ-col + せられる (godan short form: かく→かかされる is colloquial — teach the full かかせられる) | drop る + させられる | する→させられる, くる→こさせられる |
| `imperative` (命令 ～ろ/え) | え-col (かく→かけ) | drop る + ろ (たべる→たべろ) | する→しろ, くる→こい |
| `prohibitive` (禁止 ～な) | dict + な (かく→かくな) | dict + な (たべる→たべるな) | する→するな, くる→くるな |

**Notes for the implementer**
- `passive` and potential collide for ichidan (both たべられる) — that's correct Japanese
  (context disambiguates); no special handling needed.
- Reuse the existing `GODAN` column map — passive/causative are just the あ-column + a new
  suffix, exactly like `nai` already does (`pre + g.a + "ない"` → `pre + g.a + "れる"`/`"せる"`).
- Irregulars (`SURU`/`KURU`) need the new keys added to their form objects. `IKU`/`ARU`
  follow the godan rule for these (いく→いかれる/いかせる; ある has no passive/causative —
  return null, and no drill will request it).
- Extend `CONJ_FORM_LABEL` and the `CONJ_FORMS` array; add unit tests in
  `tests/unit/conjugate.test.mjs` mirroring the A2 coverage (one case per group per form).
- Contract already allows `conjForm` from `CONJ_FORMS`, so once the array grows, the new
  values validate automatically. Confirm `lint.js` still passes (the group/conjForm
  allowlist + conjForm front-uniqueness exemption land with the A2 reconciliation).

## When it ships
B1 grammar units follow A2's exact pattern (U40–44): one form per unit, grouped by
euphonic family, examples modelling the form. Curriculum CC authors them then.
Until then, B1 vocab (this session's work) proceeds independently.
