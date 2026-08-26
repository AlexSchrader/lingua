import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Globe, Info, AlertTriangle, FlaskConical, ChevronRight, LogOut, Cloud, CheckCircle2, Mic, Award, Bell, Eye } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { LANGUAGES, isLive } from "../data/index.js";
import { langName } from "../data/languages.js";
import { enterPreview, buildPreviewState, buildFreshPreviewState } from "../store/preview.js";
import { PERSIST_VERSION } from "../store/migrate.js";
import { triggersSupported, notificationsSupported, notificationPermission, requestReminderPermission, scheduleDailyReminder, cancelReminders } from "../lib/reminders.js";
import { C, F } from "../theme.js";
import { VERSION } from "../version.js";

function Section({ title, children }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.inkSoft, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );
}

function Row({ icon: Icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0" }}>
      {Icon && <Icon size={16} color={C.inkSoft} />}
      <span style={{ flex: 1, fontSize: 14 }}>{label}</span>
      <span style={{ fontSize: 14, color: C.inkSoft, fontFamily: F.mono }}>{value}</span>
    </div>
  );
}

function Toggle({ label, desc, checked, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{label}</div>
        {desc && <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 2, lineHeight: 1.35 }}>{desc}</div>}
      </div>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        style={{
          width: 46,
          height: 28,
          borderRadius: 999,
          flexShrink: 0,
          border: "none",
          cursor: "pointer",
          padding: 3,
          background: checked ? C.ai : C.locked,
          display: "flex",
          justifyContent: checked ? "flex-end" : "flex-start",
          alignItems: "center",
          transition: "background 150ms",
        }}
      >
        <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#fff", display: "block" }} />
      </button>
    </div>
  );
}

// Daily local reminder. Best-effort + honest: fires while the app is closed only
// where the browser supports scheduled notifications (Chromium/installed PWA); the
// note tells the truth elsewhere. Scheduling lives in src/lib/reminders.js.
function RemindersSection() {
  const reminderTime = useStore((s) => s.profile?.reminderTime ?? null);
  const setReminderTime = useStore((s) => s.setReminderTime);
  const [busy, setBusy] = useState(false);
  const on = !!reminderTime;
  const supported = triggersSupported();
  // "denied" is only truly *blocked* when notifications are supported; reminders.js
  // also returns "denied" for the unsupported case, which isn't a block.
  const blocked = notificationsSupported() && notificationPermission() === "denied";

  const toggle = async (v) => {
    if (busy) return;
    setBusy(true);
    if (!v) {
      await cancelReminders();
      setReminderTime(null);
    } else {
      const perm = await requestReminderPermission();
      if (perm === "granted") {
        const time = reminderTime || "19:00";
        setReminderTime(time);
        await scheduleDailyReminder(time);
      }
    }
    setBusy(false);
  };

  const changeTime = async (time) => {
    setReminderTime(time);
    await scheduleDailyReminder(time);
  };

  return (
    <Section title="Reminders">
      <Toggle
        label="Daily reminder"
        desc="A gentle nudge to practice, at a time you choose."
        checked={on}
        onChange={toggle}
      />
      {on && (
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
          <span style={{ flex: 1, fontSize: 14 }}>Remind me at</span>
          <input
            type="time"
            value={reminderTime}
            onChange={(e) => changeTime(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: 10, border: `1.5px solid ${C.line}`, background: C.surface, color: C.ink, fontSize: 15, fontFamily: F.body, outline: "none" }}
          />
        </div>
      )}
      <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 10, lineHeight: 1.4, display: "flex", gap: 8 }}>
        <Bell size={14} style={{ flexShrink: 0, marginTop: 2 }} />
        <span>
          {supported
            ? "Reminders fire on this device even when Lingua is closed — best with the app added to your home screen."
            : "Your browser can't schedule reminders while the app is closed (common on iPhone). Reliable reminders across your devices are coming with account sync."}
          {blocked && " Notifications are blocked in your browser settings — turn them on there to use reminders."}
        </span>
      </div>
    </Section>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const resetAll = useStore((s) => s.resetAll);
  const languages = useStore((s) => s.languages);
  const milestonesEarned = useStore((s) => s.milestonesEarned);
  const devMode = useStore((s) => s.devMode);
  const unlockDevMode = useStore((s) => s.unlockDevMode);
  const disableDevMode = useStore((s) => s.disableDevMode);
  const settings = useStore((s) => s.settings);
  const setSetting = useStore((s) => s.setSetting);
  const auth = useStore((s) => s.auth);
  const signOut = useStore((s) => s.signOut);
  const activeLang = useStore((s) => s.profile?.activeLang);
  const items = useStore((s) => s.items);
  // Rōmaji and furigana are scaffolds for a language written in a script the learner
  // can't yet read. Offering them to a French learner is offering to switch off a
  // crutch they never had — and the copy talks about kana and kanji, which reads as
  // "this app is really for someone else". Keyed on whether the learner actually has
  // glyph items, not on a hardcoded "ja", so a future Hangul or Cyrillic track gets
  // them automatically.
  const hasGlyphScript = Object.values(items).some(
    (it) => it.lang === activeLang && (it.type === "kana" || it.type === "kanji")
  );
  const [confirming, setConfirming] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);

  // The language this learner is ACTUALLY studying. This was `languages.ja ??
  // LANGUAGES[0]` — a hardcoded Japanese lookup left from when Japanese was the
  // only language — so a French learner's About panel read "Learning: 🇯🇵 Japanese ·
  // pre-A1". Falls back to the catalog head only when there is no active language
  // at all (pre-onboarding), which is the one case where any answer is arbitrary.
  const learning = languages[activeLang] ?? languages.ja ?? LANGUAGES[0];

  const doReset = () => {
    resetAll();
    setConfirming(false);
    navigate("/");
  };

  const tryUnlock = () => {
    if (unlockDevMode(code)) {
      setCode("");
      setCodeError(false);
      navigate("/dev");
    } else {
      setCodeError(true);
    }
  };

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700 }}>Settings</div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>Manage your progress and the app.</div>
      </div>

      <Section title="About">
        <Row icon={Info} label="Version" value={VERSION} />
        <Row icon={Globe} label="Learning" value={`${learning.flag} ${learning.name} · ${learning.level}`} />
        <Row icon={Award} label="Milestones" value={milestonesEarned?.length ?? 0} />
      </Section>

      <Section title="Account">
        {!auth?.configured ? (
          <div style={{ fontSize: 13, color: C.inkSoft, lineHeight: 1.4 }}>
            Account sync isn't configured on this build yet. Once it's set up, you'll sign in here
            and your progress will follow you to any device.
          </div>
        ) : auth.user ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Cloud size={18} color={C.ai} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {auth.user.username ?? auth.user.email ?? "Signed in"}
                </div>
                {auth.user.email && (
                  <div style={{ fontSize: 12, color: C.inkSoft, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {auth.user.email}
                  </div>
                )}
                <div style={{ fontSize: 12, color: auth.status === "error" ? C.shu : C.inkSoft, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                  {auth.status === "synced" && <><CheckCircle2 size={12} color={C.matcha} /> Progress synced to your account</>}
                  {auth.status === "syncing" && "Syncing…"}
                  {auth.status === "error" && `Sync error: ${auth.error ?? "unknown"}`}
                  {(auth.status === "idle" || !auth.status) && "Signed in"}
                </div>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 12, borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              <LogOut size={16} /> Sign out
            </button>
          </div>
        ) : (
          <div style={{ fontSize: 13, color: C.inkSoft }}>Signed out.</div>
        )}
      </Section>

      <Section title="Appearance">
        <div style={{ display: "flex", gap: 8 }}>
          {[["system", "System"], ["light", "Light"], ["dark", "Dark"]].map(([val, label]) => {
            const on = (settings?.theme ?? "system") === val;
            return (
              <button
                key={val}
                onClick={() => setSetting("theme", val)}
                style={{
                  flex: 1,
                  padding: "11px 8px",
                  borderRadius: 12,
                  border: `1.5px solid ${on ? C.ai : C.line}`,
                  background: on ? C.aiSoft : C.surface,
                  color: on ? C.aiDeep : C.inkSoft,
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: F.body,
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: C.inkSoft, margin: "16px 0 8px" }}>Text size</div>
        <div style={{ display: "flex", gap: 8 }}>
          {[["small", "Small"], ["default", "Default"], ["large", "Large"]].map(([val, label]) => {
            const on = (settings?.textSize ?? "default") === val;
            return (
              <button
                key={val}
                onClick={() => setSetting("textSize", val)}
                style={{
                  flex: 1,
                  padding: "11px 8px",
                  borderRadius: 12,
                  border: `1.5px solid ${on ? C.ai : C.line}`,
                  background: on ? C.aiSoft : C.surface,
                  color: on ? C.aiDeep : C.inkSoft,
                  fontSize: val === "small" ? 12 : val === "large" ? 16 : 14,
                  fontWeight: 700,
                  fontFamily: F.body,
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Sound">
        <Toggle
          label="Sound effects"
          desc="Gentle chimes on correct and incorrect answers."
          checked={settings?.sfx ?? true}
          onChange={(v) => setSetting("sfx", v)}
        />
        <Toggle
          label="Auto-play pronunciation"
          desc="Say each new word aloud when it appears. The speaker button still works either way."
          checked={settings?.autoplayAudio ?? true}
          onChange={(v) => setSetting("autoplayAudio", v)}
        />
      </Section>

      <Section title="Display">
        {hasGlyphScript && (
          <>
            <Toggle
              label="Show romaji"
              desc="Show the romaji reading under each character on the Ladder and on new-word cards. Turn off to read kana and kanji without the crutch."
              checked={settings?.showRomaji ?? true}
              onChange={(v) => setSetting("showRomaji", v)}
            />
            <Toggle
              label="Furigana"
              desc="Show the reading above kanji on new-word cards, and kana readings inside example sentences where the lesson provides them — so you can read a word before you know its kanji. A scaffold you can switch off as the kanji become familiar."
              checked={settings?.furigana ?? true}
              onChange={(v) => setSetting("furigana", v)}
            />
          </>
        )}
        <Toggle
          label="Reduce motion"
          desc="Freeze the mascot to a still and skip the finish-line confetti. Calmer if animation is distracting. (Your device's reduced-motion setting is always respected too.)"
          checked={settings?.reduceMotion ?? false}
          onChange={(v) => setSetting("reduceMotion", v)}
        />
      </Section>

      <Section title="Practice">
        <Toggle
          label="No speed pressure"
          desc="Grade answers on whether they're right, not how fast. A correct answer counts the same whether it took you two seconds or twenty — no timing, no rush. (You'll still see items again on their normal schedule.)"
          checked={settings?.noSpeedPressure ?? false}
          onChange={(v) => setSetting("noSpeedPressure", v)}
        />
        {/* This paragraph described the JAPANESE typing path — rōmaji through A1, kana
            from A2 — to every learner, including French ones who have no kana and no
            rōmaji. Same class as the romaji/furigana toggles above, which were already
            gated on hasGlyphScript; this copy just never got the same treatment. The
            Latin-script version states the rule that actually applies there: accents
            are optional, because the answer checker folds them (store/answer.js). */}
        <div style={{ fontSize: 13, color: C.inkSoft, lineHeight: 1.4, marginTop: 12 }}>
          {hasGlyphScript ? (
            <>
              Producing a word asks you to type it in {langName(activeLang)}. Through A1 you can
              answer in rōmaji (no {langName(activeLang)} keyboard needed); from A2 you'll type the
              kana. Tiles (build) and typing the meaning always work too.
            </>
          ) : (
            <>
              Producing a word asks you to type it in {langName(activeLang)}. Accents and
              apostrophes are optional — <em>sil vous plait</em> is accepted for{" "}
              <em>s'il vous plaît</em>. Tiles (build) and typing the meaning always work too.
            </>
          )}
        </div>
        <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 10, lineHeight: 1.4, display: "flex", gap: 8 }}>
          <Mic size={14} style={{ flexShrink: 0, marginTop: 2 }} />
          <span>
            Speaking cards ask permission to use your mic. Each short clip is sent to ElevenLabs to
            check the pronunciation, then discarded — your audio is never stored. Speaking is bonus
            practice; skip it and nothing is blocked.
          </span>
        </div>
      </Section>

      <RemindersSection />

      <Section title="Progress">
        {!confirming ? (
          <button
            onClick={() => setConfirming(true)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: 14,
              borderRadius: 12,
              border: `1.5px solid ${C.shu}`,
              background: C.surface,
              color: C.shu,
              fontSize: 15,
              fontWeight: 700,
              fontFamily: F.body,
              cursor: "pointer",
            }}
          >
            <RotateCcw size={18} />
            Reset all progress
          </button>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                color: C.shu,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
              This wipes every item's progress and your milestones back to a fresh
              start. It can't be undone.
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setConfirming(false)}
                style={{
                  flex: 1,
                  padding: 14,
                  borderRadius: 12,
                  border: `1.5px solid ${C.line}`,
                  background: C.surface,
                  color: C.inkSoft,
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: F.body,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={doReset}
                style={{
                  flex: 1,
                  padding: 14,
                  borderRadius: 12,
                  border: "none",
                  background: C.shu,
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: F.body,
                  cursor: "pointer",
                }}
              >
                Reset everything
              </button>
            </div>
          </div>
        )}
      </Section>

      <Section title="Dev Mode">
        {devMode ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              onClick={() => navigate("/dev")}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.ai}`, background: C.aiSoft, color: C.aiDeep, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              <FlaskConical size={18} />
              <span style={{ flex: 1, textAlign: "left" }}>Open dev panel</span>
              <ChevronRight size={18} />
            </button>
            {/* The panel previews one screen at a time; this previews the APP. Pick a
                language and you drop into the REAL app AS a learner of that one — Today,
                Ladder, lessons, Stats, every screen, real navigation, and its own accent
                theme — on a separate localStorage key, so nothing touches the deck you
                actually study on. EVERY catalog language is here so you can feel each
                one's look; live ones start at B2 with real content, planned ones show the
                themed shell ("no content yet"). "All languages" starts every live one
                (active on the first) to feel the multi-language switcher. */}
            <div style={{ fontSize: 12, fontWeight: 700, color: C.inkSoft, textTransform: "uppercase", letterSpacing: 0.4, padding: "2px 2px 0" }}>
              Preview the app (throwaway profile)
            </div>
            {[...LANGUAGES]
              .sort((a, b) => (isLive(b.id) ? 1 : 0) - (isLive(a.id) ? 1 : 0))
              .map((l) => {
                const live = isLive(l.id);
                return (
                  <button
                    key={l.id}
                    onClick={() =>
                      enterPreview(
                        buildPreviewState({
                          langs: [l.id],
                          catalog: LANGUAGES,
                          version: PERSIST_VERSION,
                        })
                      )
                    }
                    style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: live ? C.ink : C.inkSoft, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
                  >
                    <span style={{ fontSize: 18 }}>{l.flag}</span>
                    <span style={{ flex: 1, textAlign: "left" }}>
                      Preview the {l.name} app
                      {!live && <span style={{ color: C.inkSoft, fontWeight: 600 }}> · no content yet</span>}
                    </span>
                    <ChevronRight size={18} />
                  </button>
                );
              })}
            <button
              onClick={() =>
                enterPreview(
                  buildPreviewState({
                    langs: LANGUAGES.filter((l) => isLive(l.id)).map((l) => l.id),
                    catalog: LANGUAGES,
                    version: PERSIST_VERSION,
                  })
                )
              }
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              <Eye size={18} />
              <span style={{ flex: 1, textAlign: "left" }}>Preview all languages</span>
              <ChevronRight size={18} />
            </button>
            {/* The brand-new-user flow: empty, not onboarded, so preview drops into
                onboarding → language pick → lesson 1, exactly like a fresh install.
                The others start unlocked; this one starts you at day zero. */}
            <button
              onClick={() =>
                enterPreview(
                  buildFreshPreviewState({
                    catalog: LANGUAGES,
                    version: PERSIST_VERSION,
                  })
                )
              }
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              <Eye size={18} />
              <span style={{ flex: 1, textAlign: "left" }}>Preview as a new user (onboarding → lesson 1)</span>
              <ChevronRight size={18} />
            </button>
            <button
              onClick={disableDevMode}
              style={{ width: "100%", padding: 12, borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              Disable Dev Mode
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 13, color: C.inkSoft }}>Enter the playtest code to unlock.</div>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setCodeError(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") tryUnlock();
                }}
                placeholder="Code"
                aria-label="Dev Mode code"
                autoCapitalize="characters"
                autoCorrect="off"
                spellCheck={false}
                style={{ flex: 1, padding: "12px 14px", borderRadius: 12, border: `1.5px solid ${codeError ? C.shu : C.line}`, background: C.surface, color: C.ink, fontSize: 15, fontFamily: F.mono, outline: "none" }}
              />
              <button
                onClick={tryUnlock}
                style={{ padding: "12px 18px", borderRadius: 12, border: "none", background: C.ai, color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
              >
                Unlock
              </button>
            </div>
            {codeError && (
              <div style={{ fontSize: 13, color: C.shu, fontWeight: 600 }}>Not the right code.</div>
            )}
          </div>
        )}
      </Section>

      {/* The flag follows the language being learned. It was hardcoded to 🇯🇵, so a
          French learner got a Japanese flag stamped on the bottom of their own
          settings screen — a small thing that quietly says the app is somebody
          else's. Falls back to a neutral globe when no language is active yet. */}
      <div data-testid="version-watermark" style={{ textAlign: "center", fontFamily: F.mono, fontSize: 11, color: C.locked, opacity: 0.6 }}>
        {LANGUAGES.find((l) => l.id === activeLang)?.flag ?? "🌍"} {VERSION}
      </div>
    </div>
  );
}
