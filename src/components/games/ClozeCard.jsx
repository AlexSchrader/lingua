import { useState, useMemo, useEffect } from "react";
import { C, F } from "../../theme.js";
import { buildOptions } from "../../store/distractors.js";
import { deriveGrade } from "../../store/grading.js";
import { sfxCorrect, sfxWrong } from "../../store/sfx.js";
import { blankExample } from "../../store/cardRouting.js";
import { useItemAudio } from "../../store/itemAudio.js";

// Cloze (rung RECALLED, in context): the target word is blanked out of its own
// example sentence and you pick the word that belongs — tests comprehension, not
// isolated recall. The English gloss is shown so the answer is derivable (never a
// coin-flip). Options are JA words (front + same-type peers) via buildOptions'
// field override. Grades on the shared choice path: correct → good, wrong → again.
export default function ClozeCard({ item, allItems, onGraded }) {
  const options = useMemo(() => buildOptions(item, allItems, 4, "front"), [item.id]);
  const [picked, setPicked] = useState(null);
  // Reinforce the word's pronunciation once picked (respects the auto-pronounce setting).
  const { playIfEnabled } = useItemAudio(item, { autoplay: false });

  useEffect(() => setPicked(null), [item.id]);

  const answered = picked !== null;
  const grade = answered ? deriveGrade({ kind: "mc", correct: options[picked].correct }) : null;
  const blanked = blankExample(item);

  return (
    <div data-testid="cloze-card" style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}>
      <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600 }}>Which word completes the sentence?</div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          background: C.surface,
          border: `1px solid ${C.line}`,
          borderRadius: 20,
          padding: "24px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 14, color: C.inkSoft }}>{item.example?.en}</div>
        <div style={{ fontFamily: F.jp, fontSize: 28, fontWeight: 500, lineHeight: 1.5 }}>{blanked}</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {options.map((o, i) => {
          let bg = C.surface;
          let border = C.line;
          let color = C.ink;
          if (answered) {
            if (o.correct) {
              bg = C.matcha; border = C.matcha; color = "#fff";
            } else if (i === picked) {
              bg = C.shu; border = C.shu; color = "#fff";
            } else {
              color = C.locked;
            }
          }
          return (
            <button
              key={i}
              data-testid="option"
              data-correct={String(o.correct)}
              disabled={answered}
              onClick={() => { if (answered) return; options[i].correct ? sfxCorrect() : sfxWrong(); setPicked(i); playIfEnabled(); }}
              style={{
                padding: "16px 12px",
                borderRadius: 12,
                border: `1.5px solid ${border}`,
                background: bg,
                color,
                fontSize: 18,
                fontWeight: 600,
                fontFamily: F.jp,
                cursor: answered ? "default" : "pointer",
                minHeight: 56,
              }}
            >
              {o.text}
            </button>
          );
        })}
      </div>

      {answered && (
        <button
          onClick={() => onGraded(grade)}
          style={{ padding: 16, borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
        >
          Continue
        </button>
      )}
    </div>
  );
}
