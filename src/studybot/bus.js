// The bridge between Lingua's screens and the StudyBot hook. Components call
// these; in a normal build every body below folds away (STUDYBOT is the literal
// `false`), so production pays one empty function call and ships no hook.
//
// A component PUBLISHES what a learner can see right now (its "surface") and
// EMITS what just happened (feedback, done, tutor). It never publishes an answer
// before the learner has answered — publicItem() in ./core.js enforces the field
// list, and each card only emits `feedback` from the handler that reveals it.
import { useEffect, useRef } from "react";
import { STUDYBOT } from "./flag.js";
import { itemKind, subjectFor } from "./core.js";
import { itemLang } from "../store/itemLang.js";

// The identity fields of a card's item. `itemId` is the content id (stable across
// runs — ids only change in a flagged renumber); a card that drills something
// other than the item itself passes a suffix and its own kind.
export function botItem(item, { suffix = "", kind, ...rest } = {}) {
  if (!STUDYBOT || !item) return null;
  return {
    itemId: suffix ? `${item.id}:${suffix}` : item.id,
    subject: subjectFor(itemLang(item)),
    kind: kind ?? itemKind(item.type),
    ...rest,
  };
}

// ErrorBoundary calls this: the screen becomes "error" and an error event fires.
export function botCrash(error) {
  botEmit("crash", { message: error?.message || String(error ?? "") });
}

const surfaces = new Map(); // owner -> { level, screen, item, progress }
const sinks = new Set();

export function botSubscribe(fn) {
  sinks.add(fn);
  return () => sinks.delete(fn);
}

export function botSurfaces() {
  return [...surfaces.values()];
}

export function botEmit(name, data) {
  if (!STUDYBOT) return;
  for (const fn of sinks) fn(name, data);
}

// useBotSurface(level, surface, deps): publish while mounted, withdraw on unmount.
// level 1 = a runner/screen (lesson intro, done), level 2 = a card on top of it.
export function useBotSurface(level, surface, deps) {
  const owner = useRef(null);
  if (!owner.current) owner.current = {};
  useEffect(() => {
    if (!STUDYBOT) return undefined;
    const key = owner.current;
    if (surface) surfaces.set(key, { ...surface, level });
    else surfaces.delete(key);
    return () => surfaces.delete(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
