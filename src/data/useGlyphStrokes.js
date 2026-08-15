import { useEffect, useState } from "react";

// Stroke paths for one glyph, fetched on demand.
//
// kanjivg.js is 508 KB — the single largest module in the app — and only two
// surfaces ever draw a glyph: TraceCard and GlyphDetail. Importing it statically
// put every stroke of all 710 glyphs into the entry chunk, so a Spanish learner
// downloaded the Japanese stroke library before seeing their first card.
//
// The module is loaded once, on the first trace card, and cached for the session.
// `KANJIVG_CHARS` (2 KB) still answers the yes/no "is this traceable" question
// synchronously at routing time, so nothing has to await just to pick a card.
let cache = null;
let inflight = null;

function loadStrokes() {
  if (cache) return Promise.resolve(cache);
  inflight ??= import("./kanjivg.js").then((m) => {
    cache = m.KANJIVG;
    inflight = null;
    return cache;
  });
  return inflight;
}

// Returns [] until the module resolves. Both callers already handle an empty
// array — it is the same shape as a glyph with no stroke data — so the first
// paint degrades to "no guide yet" rather than a crash, and the strokes appear
// a frame later. In practice the module is already cached after the first trace
// card of the session.
export function useGlyphStrokes(front) {
  const [strokes, setStrokes] = useState(() => cache?.[front] ?? []);

  useEffect(() => {
    let alive = true;
    if (cache) {
      setStrokes(cache[front] ?? []);
      return;
    }
    loadStrokes().then((map) => {
      if (alive) setStrokes(map[front] ?? []);
    });
    return () => {
      alive = false;
    };
  }, [front]);

  return strokes;
}
