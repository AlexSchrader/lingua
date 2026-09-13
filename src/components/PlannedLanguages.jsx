import { useState } from "react";
import { C, F } from "../theme.js";

// A collapsible "coming soon" list of planned (no-content-yet) languages. Keeps the
// big language surfaces — onboarding, the Ladder "add a language" flow, Stats — from
// dumping ~19 flat rows: the live/available ones stay prominent, the roadmap folds
// into one expander. Non-interactive (planned languages can't be started).
// `progressFor(id)` (optional) returns { done, total } for a language a crew has
// started but not finished. "Planned" is honest about a language nobody has touched
// and a lie about one that is three units in, so those rows say how far along they
// are instead. Counted in UNITS: a locked stub carries no items, so an item total
// does not exist until the band is authored.
export default function PlannedLanguages({ langs, label = "more languages coming soon", progressFor }) {
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
              {(() => {
                // Guard on `done`, not on `p`. authoringProgress() returns null only
                // for a language with NO UNITS AT ALL — a freshly scaffolded one has
                // its full complement of locked stubs and zero authored, so it comes
                // back truthy as { done: 0, total: 20 } and this rendered "0/20 UNITS".
                // That is the lie the comment above warns about, pointing the other
                // way: nobody has touched it, so it is planned. AddLangRow in
                // Ladder.jsx already guards correctly (`!p || !p.done`); this matches it.
                const p = progressFor?.(l.id);
                return (
                  <span style={{ fontSize: 10, color: C.inkSoft, fontWeight: 700, background: C.lockedBg, padding: "2px 8px", borderRadius: 999, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {p?.done ? `${p.done}/${p.total} units` : "planned"}
                  </span>
                );
              })()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
