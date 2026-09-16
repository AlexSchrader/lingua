// Session-local learning queue (Brief A.1). New items run a fixed in-session
// sequence — teach, then an interleaved recognition check, then a recall check —
// before graduating to FSRS spaced review. This is hand-rolled (NOT ts-fsrs
// learning state, which is wall-clock minutes); spacing here is by queue
// POSITION within one sitting. FSRS/rung/XP fire only at graduation, never per
// check — the runner calls store.graduateItem once when an item passes.
//
// Pure + ephemeral: the runner holds this in component state; nothing persists.
// An abandoned session just re-teaches next time.

export const LEARN_OPTS = {
  off1: 3, // recognition check ~3 cards after teach
  off2: 6, // recall check ~6 cards after teach
  off3: 9, // production check ~9 cards after teach - THIRD-CHECK ITEMS ONLY
  missOffset: 2, // a missed check re-appears ~2 cards later
  maxMisses: 2, // after this many misses on a step, graduate anyway (as `hard`)
};

// Build the learning queue. All teaches run first in authored order (kana before
// vocab), then checks interleave by position. This guarantees a learner sees
// every item in the lesson before any recognition/recall checks appear — you
// can't be quizzed on はな before は and な have both been introduced.
// Some items need a THIRD check. `needsThird(id)` is supplied by the caller and is
// a question about the item's TYPE, never its identity - the engine stays
// content-agnostic. Today it is true for letters: Alex's unit-1 standard is
// "listen, speak and type the accent", which is three behaviours and does not fit
// in two slots. Every other item keeps the two-check shape unchanged.
export function buildLearnQueue(ids, opts = LEARN_OPTS, needsThird = () => false) {
  const teaches = ids.map((id) => ({ id, step: "teach" }));
  const checks = [];
  ids.forEach((id, i) => {
    checks.push({ id, step: "check1", k: (i + opts.off1) * 10 + 1 });
    checks.push({ id, step: "check2", k: (i + opts.off2) * 10 + 2 });
    if (needsThird(id)) checks.push({ id, step: "check3", k: (i + (opts.off3 ?? 9)) * 10 + 3 });
  });
  checks.sort((a, b) => a.k - b.k);
  return [...teaches, ...checks.map(({ id, step }) => ({ id, step }))];
}

export function initLearn(ids, opts = LEARN_OPTS, needsThird = () => false) {
  const status = {};
  for (const id of ids) {
    // c3 starts TRUE for a two-check item, so graduation stays ONE condition and
    // no caller has to know how many checks a given item runs.
    status[id] = {
      c1: false, c2: false, c3: !needsThird(id),
      m1: 0, m2: 0, m3: 0,
      clean: true, graduated: false,
    };
  }
  return { queue: buildLearnQueue(ids, opts, needsThird), pos: 0, status, opts };
}

export function currentStep(st) {
  return st.pos < st.queue.length ? st.queue[st.pos] : null;
}

// Advance the queue by one step.
//   result: { pass, clean } for a check; null/undefined for a teach.
// Returns { state, graduated } where graduated is { id, grade } the one time an
// item passes both checks (grade `good` if clean, else `hard`), else null.
export function answerStep(st, result) {
  const cur = st.queue[st.pos];
  if (!cur) return { state: st, graduated: null };

  const queue = st.queue.slice();
  const status = { ...st.status };
  const pos = st.pos + 1;
  let graduated = null;

  if (cur.step !== "teach") {
    const s = { ...status[cur.id] };
    const n = cur.step.slice(-1); // "1" | "2" | "3"
    const passKey = `c${n}`;
    const missKey = `m${n}`;

    if (result && result.pass) {
      s[passKey] = true;
      if (!result.clean) s.clean = false;
    } else {
      s[missKey] += 1;
      s.clean = false;
      if (s[missKey] < st.opts.maxMisses) {
        // repeat this step a couple of cards later
        const at = Math.min(pos + st.opts.missOffset, queue.length);
        queue.splice(at, 0, { id: cur.id, step: cur.step });
      } else {
        s[passKey] = true; // graduate anyway, no frustration loop
      }
    }

    if (s.c1 && s.c2 && s.c3 && !s.graduated) {
      s.graduated = true;
      graduated = { id: cur.id, grade: s.clean ? "good" : "hard" };
    }
    status[cur.id] = s;
  }

  return { state: { ...st, queue, pos, status }, graduated };
}
