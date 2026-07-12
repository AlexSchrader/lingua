import { useState } from "react";
import { C, F } from "../theme.js";

// A collapsible "coming soon" list of planned (no-content-yet) languages. Keeps the
// big language surfaces — onboarding, the Ladder "add a language" flow, Stats — from
// dumping ~19 flat rows: the live/available ones stay prominent, the roadmap folds
// into one expander. Non-interactive (planned languages can't be started).
export default function PlannedLanguages({ langs, label = "more languages coming soon" }) {
  const [open, setOpen] = useState(false);
  if (!langs?.length) return null;
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ display: "flex", alignItems: "center", gap: 6, width: "100%", border: "none", background: "transparent", color: C.inkSoft, fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer", padding: "8px 0", textAlign: "left" }}
      >
        <span style={{ width: 10 }}>{open ? "▾" : "▸"}</span> {langs.length} {label}
      </button>
      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4, paddingLeft: 16 }}>
          {langs.map((l) => (
            <div key={l.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
              <span style={{ color: C.inkSoft }}>{l.flag} {l.name}</span>
              <span style={{ fontSize: 10, color: C.inkSoft, fontWeight: 700, background: C.lockedBg, padding: "2px 8px", borderRadius: 999, textTransform: "uppercase", letterSpacing: 0.5 }}>Planned</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
