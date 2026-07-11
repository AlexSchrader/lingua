import { useState, useMemo, useRef, useEffect } from "react";
import { C, F } from "../../theme.js";
import { deriveGrade } from "../../store/grading.js";
import { useStore } from "../../store/useStore.js";
import { sfxClick, sfxCorrect, sfxWrong } from "../../store/sfx.js";
import { sentenceTiles } from "../../store/cardRouting.js";

// Sentence builder (rung PRODUCED, in context): rebuild the item's example from
// word+particle tiles, shown the English gloss as the target. One distractor
// particle tile makes particle CHOICE part of the puzzle. App-judged like Build:
// the right assembly grades by speed, a wrong one grades `again` (Reset first to
// retry without penalty). Tokenized safely upstream (cardRouting.sentenceTiles).
export default function SentenceCard({ item, onGraded }) {
  const noSpeed = useStore((s) => s.settings?.noSpeedPressure ?? false);
  const spec = useMemo(() => sentenceTiles(item), [item.id]);
  const shownAt = useRef(performance.now());
  const [picked, setPicked] = useState([]);

  useEffect(() => {
    setPicked([]);
    shownAt.current = performance.now();
  }, [item.id]);

  const answer = spec?.answer ?? [];
  const tiles = spec?.tiles ?? [];
  const assembled = picked.map((i) => tiles[i]);
  const full = picked.length === answer.length;
  const correct = full && assembled.join("") === answer.join("");

  // Test hook: assemble the correct order + commit without tapping (no DnD in CI).
  useEffect(() => {
    window.__sentence = {
      solve: () => {
        const used = [];
        for (const tok of answer) {
          const i = tiles.findIndex((t, idx) => t === tok && !used.includes(idx));
          if (i >= 0) used.push(i);
        }
        setPicked(used);
      },
    };
    return () => { delete window.__sentence; };
  }, [answer, tiles]);

  if (!spec) return null; // safety — routing guards this, but never crash

  const commit = () => {
    if (correct) sfxCorrect(); else sfxWrong();
    onGraded(
      correct
        ? deriveGrade({ kind: "typed", correct: true, elapsedMs: performance.now() - shownAt.current, target: answer.join(""), noSpeed })
        : "again"
    );
  };

  return (
    <div data-testid="sentence-card" data-card-kind="sentence:build" style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}>
      <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600 }}>Build the sentence</div>

      <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 20, padding: 20, textAlign: "center" }}>
        <div style={{ fontSize: 15, color: C.ink }}>{item.example?.en}</div>
      </div>

      {/* Assembled row */}
      <div
        style={{
          minHeight: 56,
          borderRadius: 12,
          border: `1.5px solid ${full ? (correct ? C.matcha : C.shu) : C.line}`,
          background: C.surface,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          padding: "8px 10px",
          fontFamily: F.jp,
          fontSize: 20,
          color: full ? (correct ? C.matcha : C.shu) : C.ink,
        }}
      >
        {assembled.length ? assembled.map((t, i) => <span key={i}>{t}</span>) : <span style={{ color: C.locked, fontSize: 14, fontFamily: F.body }}>tap the tiles in order</span>}
      </div>

      {/* Tile tray */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
        {tiles.map((t, i) => {
          const used = picked.includes(i);
          return (
            <button
              key={i}
              disabled={used}
              onClick={() => { sfxClick(); setPicked((p) => [...p, i]); }}
              style={{
                padding: "12px 16px",
                borderRadius: 10,
                border: `1.5px solid ${C.ai}`,
                background: used ? C.lockedBg : C.aiSoft,
                color: used ? C.locked : C.aiDeep,
                fontFamily: F.jp,
                fontSize: 18,
                fontWeight: 700,
                cursor: used ? "default" : "pointer",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
        <button
          onClick={() => setPicked([])}
          style={{ padding: 16, borderRadius: 14, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
        >
          Reset
        </button>
        <button
          onClick={commit}
          disabled={!full}
          style={{ flex: 1, padding: 16, borderRadius: 14, border: "none", background: full ? C.ai : C.lockedBg, color: full ? "#fff" : C.locked, fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: full ? "pointer" : "default" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
