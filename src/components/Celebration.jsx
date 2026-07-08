import { useEffect, useMemo } from "react";
import { sfxFanfare } from "../store/sfx.js";
import { useReduceMotion } from "../store/useReduceMotion.js";

// One-shot lesson-complete celebration: a soft fanfare + a confetti burst.
// Drop it into the completion screen; it fires once on mount. ND-considerate:
// the sound respects the SFX preference (gated in sfx.js), and the confetti is
// skipped entirely when the learner reduces motion (Settings toggle or OS
// prefers-reduced-motion) — finishing should feel good, never overwhelming.
const COLORS = ["#2A4A7B", "#7BA05B", "#D8632A", "#E8B84B", "#C45B7C"];

const KEYFRAMES = `
@keyframes lingua-confetti-fall {
  0%   { transform: translate(0, -10vh) rotate(0deg); opacity: 1; }
  100% { transform: translate(var(--drift), 110vh) rotate(720deg); opacity: 0; }
}`;

export default function Celebration({ pieces = 70 }) {
  const reduced = useReduceMotion();
  useEffect(() => {
    sfxFanfare();
  }, []);

  const confetti = useMemo(
    () =>
      reduced
        ? []
        : Array.from({ length: pieces }, (_, i) => ({
            left: Math.random() * 100,
            bg: COLORS[i % COLORS.length],
            delay: Math.random() * 0.5,
            duration: 2.4 + Math.random() * 1.6,
            w: 6 + Math.random() * 6,
            drift: (Math.random() - 0.5) * 160,
          })),
    [pieces, reduced]
  );

  if (reduced) return null;

  return (
    <div aria-hidden style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 60 }}>
      <style>{KEYFRAMES}</style>
      {confetti.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: `${p.left}%`,
            width: p.w,
            height: p.w * 0.6,
            background: p.bg,
            borderRadius: 2,
            "--drift": `${p.drift}px`,
            animation: `lingua-confetti-fall ${p.duration}s ${p.delay}s ease-in forwards`,
          }}
        />
      ))}
    </div>
  );
}
