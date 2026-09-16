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
  off3: 9, // third check ~9 cards after teach - LETTERS ONLY
  off4: 12, // fourth check ~12 cards after teach - DRAWN LETTERS ONLY
  missOffset: 2, // a missed check re-appears ~2 cards later
  maxMisses: 2, // after this many misses on a step, graduate anyway (as `hard`)
};

// Build the learning queue. All teaches run first in authored order (kana before
// vocab), then checks interleave by position. This guarantees a learner sees
// every item in the lesson before any recognition/recall checks appear — you
// can't be quizzed on はな before は and な have both been introduced.
// How many checks an item runs, from the CALLER. A question about the item's TYPE,
// never its identity - the engine stays content-agnostic and knows nothing about
// what any check does.
//
//   2  an ordinary word.
//   3  a letter you TYPE (e, n, ss, a) - Alex's unit-1 standard is "listen,
//      speak and type the accent", three behaviours that do not fit in two slots.
//   4  a letter you DRAW (kana, kanji, and later Mandarin and Hindi) - tracing is
//      a fourth behaviour on top of those three, so a drawn script gets one more
//      check than a typed one, not the same three.
export const MAX_CHECKS = 4;
const offsetFor = (opts, n) => opts[`off${n}`] ?? n * 3;

export function buildLearnQueue(ids, opts = LEARN_OPTS, checksFor = () => 2) {
  const teaches = ids.map((id) => ({ id, step: "teach" }));
  const checks = [];
  ids.forEach((id, i) => {
    const n = Math.min(Math.max(checksFor(id) | 0, 2), MAX_CHECKS);
    for (let c = 1; c <= n; c++) {
      checks.push({ id, step: `check${c}`, k: (i + offsetFor(opts, c)) * 10 + c });
    }
  });
  checks.sort((a, b) => a.k - b.k);
  return [...teaches, ...checks.map(({ id, step }) => ({ id, step }))];
}

export function initLearn(ids, opts = LEARN_OPTS, checksFor = () => 2) {
  const status = {};
  for (const id of ids) {
    const n = Math.min(Math.max(checksFor(id) | 0, 2), MAX_CHECKS);
    // A check this item does not run starts already PASSED, so graduation stays
    // one condition and no caller has to know how many checks an item has.
    const s = { m1: 0, m2: 0, m3: 0, m4: 0, clean: true, graduated: false };
    for (let c = 1; c <= MAX_CHECKS; c++) s[`c${c}`] = c > n;
    status[id] = s;
  }
  return { queue: buildLearnQueue(ids, opts, checksFor), pos: 0, status, opts };
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
    const n = cur.step.slice(-1); // "1" | "2" | "3" | "4"
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

    if (s.c1 && s.c2 && s.c3 && s.c4 && !s.graduated) {
      s.graduated = true;
      graduated = { id: cur.id, grade: s.clean ? "good" : "hard" };
    }
    status[cur.id] = s;
  }

  return { state: { ...st, queue, pos, status }, graduated };
}
