// Real spaced repetition via FSRS. This module is the single seam between the
// app and the scheduling algorithm: screens and the store only ever call
// newCard / schedule / isDue, so the algorithm can be tuned (or swapped for
// trained weights) without touching anything else.
import { fsrs, generatorParameters, createEmptyCard, Rating } from "ts-fsrs";

// A WORD YOU KNOW MUST NEVER DISAPPEAR. Alex, 2026-10-06: "my fear is ill be mid
// A2 and review is just focused on A2 words and even mastered words should be
// taught again occasionally."
//
// He was right, and the numbers are the argument. ts-fsrs defaults
// maximum_interval to 36,500 days - a hundred years - and with the stock weights a
// word answered correctly every time is scheduled like this:
//
//   review 4 -> day 57     (month 2)
//   review 5 -> day 210    (month 7)
//   review 6 -> day 689    (month 23)
//   review 7 -> day 2,017  (year 5.5)
//
// So between month 7 and month 23 - the whole of A2 for most learners - a
// well-known A1 word is reviewed ZERO times, and after that it is gone for years.
// Nothing filtered it out by level; the schedule simply parked it past the horizon.
//
// 365 DAYS, AND THE NUMBER IS LOAD-BOUND, NOT TASTE. Steady-state daily reviews is
// roughly (items at rung >= 1) / (cap in days). REVIEW_CAP is 20/day, so:
//
//   1,200 items (mid-A2)   365-day cap -> ~3/day      180-day cap -> ~7/day
//   4,000 items (B2)       365-day cap -> ~11/day     180-day cap -> ~22/day
//
// A 180-day cap generates more daily reviews than the cap allows once a learner
// reaches B2, which builds a permanent backlog - the exact death-spiral REVIEW_CAP
// exists to prevent. 365 keeps the worst case inside the budget and still
// guarantees nothing can vanish for more than a year. The voluntary top-up is
// Practice, which now includes mastered words (see buildPracticeQueue).
//
// FSRS is optimising for RECOGNISING a word at 90% retention. Staying fluent in it
// is a different and harder target, and the algorithm does not model it. This cap
// is the app disagreeing with the algorithm on purpose.
//
// NOTE: this changes SCHEDULING, not stored cards. An item already scheduled three
// years out keeps that date until its next review, when the cap applies. No
// migration is run, because rewriting due dates is destructive to learner state
// and is Alex's call separately.
export const MAX_INTERVAL_DAYS = 365;

// FSRS parameters kept in one exported place so we can tune (or load trained
// weights) later. enable_fuzz spreads due dates slightly to avoid pile-ups.
export const FSRS_PARAMS = generatorParameters({
  enable_fuzz: true,
  maximum_interval: MAX_INTERVAL_DAYS,
});

const f = fsrs(FSRS_PARAMS);

const GRADE = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
};

// A brand-new FSRS card (State.New, due now).
export const newCard = () => createEmptyCard(Date.now());

// Run FSRS for one review and return the updated card. The returned card
// carries due, stability, difficulty, state, reps, lapses, last_review, etc.
// Tolerates cards whose date fields are ISO strings (rehydrated from storage).
export function schedule(card, grade, now = new Date()) {
  return f.repeat(card, now)[GRADE[grade]].card;
}

// Is this card due for review at `now`? Works whether card.due is a Date
// (fresh) or an ISO string (rehydrated from localStorage).
export const isDue = (card, now = Date.now()) =>
  new Date(card.due).getTime() <= now;

// Start of tomorrow (local) as a Date — used when a lesson introduces an item
// and we want its first review the next day rather than immediately.
export function startOfTomorrow() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 1);
  return d;
}
