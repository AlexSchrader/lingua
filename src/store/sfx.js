// Synthesized sound effects via Web Audio API — no audio files, no network.
// All functions are fire-and-forget; errors are swallowed silently.
//
// Sounds are tuned to be ND-friendly: correct is warm/encouraging,
// wrong is gentle (not a harsh buzzer), click is barely-there. They also respect
// the user's "Sound effects" preference — off means total silence here (a real
// need for sound-sensitive learners studying in quiet/shared spaces).

import { useStore } from "./useStore.js";

// Read the live preference at call time. Defaults to on if the store isn't ready.
function sfxOn() {
  try { return useStore.getState().settings?.sfx ?? true; } catch { return true; }
}

let _ctx = null;

function ac() {
  if (!_ctx) _ctx = new AudioContext();
  if (_ctx.state === "suspended") _ctx.resume();
  return _ctx;
}

function safe(fn) {
  if (!sfxOn()) return;
  try { fn(ac()); } catch {}
}

// Very short tick — confirms a button tap without competing with content audio.
export function sfxClick() {
  safe((ctx) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.connect(g);
    g.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = 900;
    const t = ctx.currentTime;
    g.gain.setValueAtTime(0.1, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    osc.start(t);
    osc.stop(t + 0.05);
  });
}

// Warm three-note ascending chime: C5 → E5 → G5.
export function sfxCorrect() {
  safe((ctx) => {
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.connect(g);
      g.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.1;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.2, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
      osc.start(t);
      osc.stop(t + 0.3);
    });
  });
}

// Lesson-complete fanfare — a warm major arpeggio (C5 E5 G5 C6) with a soft
// attack so it celebrates without startling. Gated by the SFX preference via safe().
export function sfxFanfare() {
  safe((ctx) => {
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.connect(g);
      g.connect(ctx.destination);
      osc.type = "triangle";
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.12;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.2, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      osc.start(t);
      osc.stop(t + 0.55);
    });
  });
}

// Rung-up: a bright, quick two-note *step up* (G5 → D6, a rising fifth) that fires
// when an item climbs a mastery rung mid-review. Distinct from the 3-note "correct"
// chime — this one carries information (you moved up the ladder), not just "right".
// Higher and terser so it reads as a step, not a full celebration. Gated by safe().
export function sfxRungUp() {
  safe((ctx) => {
    [783.99, 1174.66].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.connect(g);
      g.connect(ctx.destination);
      osc.type = "triangle";
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.085;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.18, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      osc.start(t);
      osc.stop(t + 0.24);
    });
  });
}

// Gentle descending slide — soft "oops", not a harsh buzzer.
export function sfxWrong() {
  safe((ctx) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.connect(g);
    g.connect(ctx.destination);
    osc.type = "sine";
    const t = ctx.currentTime;
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(160, t + 0.22);
    g.gain.setValueAtTime(0.18, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    osc.start(t);
    osc.stop(t + 0.25);
  });
}
