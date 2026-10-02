import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, Lock } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { LANGUAGES, isLive } from "../data/index.js";
import { milestonesForLangs } from "../data/milestones.js";
import LangChip from "../components/LangChip.jsx";
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

// Full achievements view — every milestone for the languages this learner has
// started, earned ones lit and locked ones greyed with their progress. Opened from
// the header award counter.
export default function Achievements() {
  const navigate = useNavigate();
  const items = useStore((s) => s.items);
  const milestonesEarned = useStore((s) => s.milestonesEarned);
  const profile = useStore((s) => s.profile);

  // Only languages the learner has actually started AND that have content — a
  // started language with no units can't have milestones to show.
  const myLangs = useMemo(
    () => (profile?.languages ?? []).filter((id) => isLive(id)),
    [profile?.languages]
  );

  // The switcher mirrors Stats' Mastery panel: one language at a time, plus "All".
  // It only APPEARS at two or more languages — a lone chip for a single-language
  // learner is noise, and the unscoped catalog is what made this screen wrong in the
  // first place. Defaults to the language you're actually studying.
  const [scope, setScope] = useState(() => profile?.activeLang ?? null);
  const multi = myLangs.length > 1;
  const effectiveScope = multi ? scope : myLangs[0] ?? null;

  const { groups, earnedCount, total } = useMemo(() => {
    // `null`/unknown scope and the "all" tab both fall through to every started
    // language; milestonesForLangs treats an empty list as "no scoping" so a learner
    // mid-onboarding sees the full catalog rather than an empty screen.
    const langs =
      effectiveScope && effectiveScope !== "all" && myLangs.includes(effectiveScope)
        ? [effectiveScope]
        : myLangs;
    const catalog = milestonesForLangs(langs);
    const earnedSet = new Set(milestonesEarned ?? []);
    const groups = {};
    for (const m of catalog) {
      const { have, need } = m.progress(items);
      const fam = FAMILY_ORDER.includes(m.family) ? m.family : "other";
      (groups[fam] ??= []).push({ id: m.id, label: m.label, earned: earnedSet.has(m.id), have, need });
    }
    // Count earned WITHIN scope, so "12 of 40" can't read as 12-of-a-denominator
    // that includes another language's milestones (or exceed it, for a learner who
    // earned Japanese badges before adding a second language).
    const earnedCount = catalog.filter((m) => earnedSet.has(m.id)).length;
    return { groups, earnedCount, total: catalog.length };
  }, [items, milestonesEarned, myLangs, effectiveScope]);

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

      {/* Same switcher as Stats' Mastery panel, and it appears on the same terms:
          only once a second language is being learned. One language → no row, because
          a lone chip is noise. */}
      {multi && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {myLangs.map((id) => {
            const l = LANGUAGES.find((x) => x.id === id);
            return (
              <LangChip
                key={id}
                label={`${l?.flag ?? ""} ${l?.name ?? id}`.trim()}
                on={effectiveScope === id}
                onClick={() => setScope(id)}
              />
            );
          })}
          <LangChip label="All languages" on={effectiveScope === "all"} onClick={() => setScope("all")} />
        </div>
      )}

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
