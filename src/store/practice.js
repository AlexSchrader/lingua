// PRACTICE — the voluntary session, and the only one that ignores the schedule.
//
// Extracted from Review.jsx so it can be tested. It used to live inline in a
// useMemo, which meant the one selector in the app that decides WHICH words a
// learner meets had no test at all.
import { isReviewable, isMastered, masteryPct } from "./mastery.js";

export const PRACTICE_SIZE = 12;

// How many of those slots are reserved for words you already know.
//
// WHY ANY AT ALL. Alex, 2026-10-06: "even mastered words should be taught again
// occasionally does that make sense what im getting at?" It does, and practice was
// the one place that could have answered it and did not: it filtered
// `!isMastered(it)`, so the moment a word was mastered the ONLY route back to it
// was its FSRS interval - which, before the cap in srs.js, meant years.
//
// A reserved slice rather than a backfill, on purpose. Backfilling only when there
// are fewer than 12 unmastered words would mean mastered words never appear at all
// until a learner has nearly finished a language, which is exactly backwards: the
// learner who most needs old words refreshed is the one deep in new material.
//
// 3 of 12 is a quarter of the session. Enough that something old shows up every
// single time, small enough that practice is still mostly what it says it is -
// closing the widest gaps.
export const REFRESH_SLOTS = 3;

// Longest-unseen first. A card that has never been reviewed sorts oldest, which is
// right: it is the one the learner has gone longest without meeting.
function lastSeen(item) {
  const t = item?.srs?.last_review;
  const ms = t ? new Date(t).getTime() : 0;
  return Number.isFinite(ms) ? ms : 0;
}

// Spread the refreshers through the run instead of stacking them at one end.
//
// Not cosmetic. All twelve are played either way, but a block of your weakest items
// followed by a block of easy ones is a wall and then a victory lap; evenly spaced,
// a word you know lands every few cards. In an ND-first app the shape of the run is
// the thing being designed, not an afterthought - and a session that opens with
// three easy wins would mis-report how much you actually know.
function interleave(gaps, refreshers) {
  if (!refreshers.length) return gaps;
  if (!gaps.length) return refreshers;
  const out = [];
  const step = (gaps.length + refreshers.length) / refreshers.length;
  let gi = 0, ri = 0;
  for (let pos = 0; gi < gaps.length || ri < refreshers.length; pos++) {
    const wantRefresher = ri < refreshers.length && pos >= Math.round(ri * step) + 1;
    if (wantRefresher || gi >= gaps.length) out.push(refreshers[ri++]);
    else out.push(gaps[gi++]);
  }
  return out;
}

// The practice queue for one language.
//
// `items` is the store's item map. Everything the learner has STARTED in this
// language is eligible - practice is not filtered by SRS due-ness, which is the
// whole point of it existing: it is the only way to get passes the schedule will
// not offer for months.
export function buildPracticeQueue({ items, lang, size = PRACTICE_SIZE, refreshSlots = REFRESH_SLOTS }) {
  const started = Object.values(items ?? {}).filter(
    (it) => it && it.lang === lang && isReviewable(it)
  );

  // Widest gaps first - the thing furthest from mastery is the thing practice is for.
  const unmastered = started
    .filter((it) => !isMastered(it))
    .sort((a, b) => masteryPct(a) - masteryPct(b));

  // Words you already know, longest-unseen first.
  const mastered = started.filter(isMastered).sort((a, b) => lastSeen(a) - lastSeen(b));

  const refreshers = mastered.slice(0, Math.max(0, Math.min(refreshSlots, size)));
  const gaps = unmastered.slice(0, Math.max(0, size - refreshers.length));

  // A learner with nothing left unmastered gets a full run of refreshers rather
  // than a three-card session - the reserved slice is a floor, not a ceiling.
  const queue = interleave(gaps, refreshers);
  if (queue.length < size) {
    const seen = new Set(queue.map((it) => it.id));
    for (const it of mastered) {
      if (queue.length >= size) break;
      if (!seen.has(it.id)) queue.push(it);
    }
  }
  return queue.slice(0, size);
}
