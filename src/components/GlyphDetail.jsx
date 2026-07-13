import { useEffect } from "react";
import { X, Volume2 } from "lucide-react";
import { KANJIVG } from "../data/kanjivg.js";
import { useItemAudio } from "../store/itemAudio.js";
import { masteryPct, isMastered } from "../store/mastery.js";
import { C, F } from "../theme.js";

// A view-only study card for a learned kana/kanji — opened by tapping its chip on
// the Ladder. Shows the glyph drawn in stroke order (animated), its reading,
// meaning/example if any, a replay-audio button, and where it sits on the mastery
// track. Reference only: nothing here grades or moves progress (that's the review
// system's job). Auto-plays the pronunciation on open (respects the audio setting).
const STROKE_KEYFRAMES = "@keyframes glyph-stroke{to{stroke-dashoffset:0}}";

// A single kana/kanji shows at 96px; but this view also renders whole words that
// have no single-glyph stroke data (vocab like さようなら, yōon like きょ). Sizing
// those at 96 balloons and wraps them — so scale down by character count to keep a
// word on one clean line inside the ~280px card.
function glyphFontSize(front) {
  const n = [...(front ?? "")].length;
  if (n <= 1) return 96;
  if (n === 2) return 80;
  if (n === 3) return 64;
  if (n === 4) return 54;
  if (n <= 6) return 44;
  return 34;
}

export default function GlyphDetail({ item, onClose }) {
  const strokes = KANJIVG[item.front] ?? [];
  const { play, active } = useItemAudio(item);
  const mastered = isMastered(item);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
    >
      <style>{STROKE_KEYFRAMES}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 320, background: C.surface, border: `1px solid ${C.line}`, borderRadius: 20, padding: "8px 20px 22px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
      >
        <button onClick={onClose} aria-label="Close" style={{ alignSelf: "flex-end", border: "none", background: "transparent", color: C.inkSoft, cursor: "pointer", padding: 4 }}>
          <X size={20} />
        </button>

        {/* Stroke-order reveal — faint full glyph underneath, colored strokes drawn in sequence. */}
        {strokes.length > 0 ? (
          <svg key={item.id} viewBox="0 0 109 109" style={{ width: 180, height: 180 }} aria-label={item.front}>
            {strokes.map((d, i) => (
              <path key={`bg${i}`} d={d} fill="none" stroke={C.lockedBg} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            ))}
            {strokes.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke={C.ai}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: `glyph-stroke 0.55s ease ${i * 0.45}s forwards` }}
              />
            ))}
          </svg>
        ) : (
          <div style={{ fontFamily: F.jp, fontSize: glyphFontSize(item.front), fontWeight: 500, lineHeight: 1.15, textAlign: "center", maxWidth: "100%", wordBreak: "break-word" }}>{item.front}</div>
        )}

        <div style={{ fontFamily: F.mono, fontSize: 22, fontWeight: 700, color: C.ai }}>{item.reading}</div>
        {item.meaning && <div style={{ fontSize: 16, fontWeight: 600 }}>{item.meaning}</div>}
        {item.example && (
          <div style={{ fontSize: 13, color: C.inkSoft, textAlign: "center", lineHeight: 1.4 }}>
            <span style={{ fontFamily: F.jp }}>{item.example.jp}</span> — {item.example.en}
          </div>
        )}

        <button
          onClick={play}
          aria-label="Play pronunciation"
          style={{ width: 48, height: 48, borderRadius: "50%", border: `1px solid ${active ? C.ai : C.line}`, background: active ? C.ai : C.washi, color: active ? "#fff" : C.ai, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 150ms" }}
        >
          <Volume2 size={20} />
        </button>

        <div style={{ fontSize: 12, fontWeight: 700, color: mastered ? C.matcha : C.inkSoft }}>
          {mastered ? "Mastered ✓" : `Mastery ${Math.round(masteryPct(item) * 100)}%`}
        </div>
      </div>
    </div>
  );
}
