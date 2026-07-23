import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, Lock } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { milestoneCatalog } from "../data/milestones.js";
import { C, F } from "../theme.js";

// Display grouping for the milestone `family` tags, in climb order.
const FAMILY_ORDER = ["script", "kanji", "vocab", "level"];
const FAMILY_LABEL = { script: "Writing system", kanji: "Kanji", vocab: "Vocabulary", level: "Levels" };

function Section({ title, children }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.inkSoft, marginBottom: 12 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>
  );
}

// One achievement row. Earned reads the PERSISTED set (earned-once, never revoked);
// locked shows live progress toward it so the goal is visible, not hidden.
function Row({ label, earned, have, need }) {
  const pct = need > 0 ? Math.min(100, Math.round((have / need) * 100)) : 0;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, opacity: earned ? 1 : 0.55 }}>
      <div
        style={{
          width: 34, height: 34, borderRadius: 999, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: earned ? C.aiSoft : C.lockedBg,
        }}
      >
        {earned ? <Award size={18} color={C.matcha} /> : <Lock size={15} color={C.locked} />}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: earned ? C.ink : C.inkSoft }}>{label}</div>
        {!earned && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 5 }}>
            <div style={{ flex: 1, height: 5, background: C.lockedBg, borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${pct}%`, height: "100%", background: C.ai }} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.inkSoft, fontFamily: F.mono, whiteSpace: "nowrap" }}>
              {have}/{need}
            </span>
          </div>
        )}
      </div>
      {earned && (
        <span style={{ fontSize: 11, fontWeight: 700, color: C.matcha, whiteSpace: "nowrap", flexShrink: 0 }}>Unlocked</span>
      )}
    </div>
  );
}

// Full achievements view — every milestone in the catalog, earned ones lit and
// locked ones greyed with their progress. Opened from the header award counter.
export default function Achievements() {
  const navigate = useNavigate();
  const items = useStore((s) => s.items);
  const milestonesEarned = useStore((s) => s.milestonesEarned);

  const { groups, earnedCount, total } = useMemo(() => {
    const catalog = milestoneCatalog();
    const earnedSet = new Set(milestonesEarned ?? []);
    const groups = {};
    for (const m of catalog) {
      const { have, need } = m.progress(items);
      const fam = FAMILY_ORDER.includes(m.family) ? m.family : "other";
      (groups[fam] ??= []).push({ id: m.id, label: m.label, earned: earnedSet.has(m.id), have, need });
    }
    return { groups, earnedCount: earnedSet.size, total: catalog.length };
  }, [items, milestonesEarned]);

  const families = [...FAMILY_ORDER, "other"].filter((f) => groups[f]?.length);

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          aria-label="Back"
          onClick={() => navigate(-1)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 999, border: "none", background: "transparent", color: C.inkSoft, cursor: "pointer", padding: 0 }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
            <Award size={20} color={C.matcha} /> Achievements
          </div>
          <div style={{ fontSize: 13, color: C.inkSoft }}>{earnedCount} of {total} unlocked — capability, not activity.</div>
        </div>
      </div>

      {families.map((fam) => (
        <Section key={fam} title={FAMILY_LABEL[fam] ?? "More"}>
          {groups[fam].map((m) => (
            <Row key={m.id} label={m.label} earned={m.earned} have={m.have} need={m.need} />
          ))}
        </Section>
      ))}
    </div>
  );
}
