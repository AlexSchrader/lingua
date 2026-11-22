// window.StudyBot 1.0 — the test hook Doodle (the user's desktop pet) studies
// through. Contract: docs/STUDYBOT.md. Loaded ONLY by main.jsx in a
// `--mode studybot` build (STUDYBOT in ./flag.js), never in production.
//
// The rules it keeps:
//   1. state() and actions() show what a learner SEES, nothing more. The item
//      comes from what the card published (filtered through publicItem), the
//      actions from the visible, enabled controls on screen. The answer only
//      arrives in the `feedback` event, which a card emits after the answer.
//   2. testAccount is true only when no account can load (no Supabase client,
//      no signed-in user).
//   3. act() is a tap: it refuses a control that is disabled, covered, or still
//      behind a card's entrance guard (CardBreath), exactly as a finger would
//      miss it, and then clicks it. It never writes progress itself.
import { VERSION } from "../version.js";
import { isCloudConfigured } from "../lib/supabase.js";
import { useStore, activeLangId } from "../store/useStore.js";
import { LANGUAGES, UNITS, isLive } from "../data/index.js";
import { langName } from "../data/languages.js";
import { AUDIO_IDS } from "../data/audioManifest.js";
import { botSubscribe, botSurfaces } from "./bus.js";
import {
  STUDYBOT_VERSION,
  cleanPath,
  languageStatus,
  createEvents,
  pickSurface,
  plainText,
  progressOf,
  publicItem,
  roundRect,
  screenForPath,
  slug,
  uniqueIds,
} from "./core.js";

const CONTROLS = 'button, input:not([type="hidden"]), textarea, a[href], [role="button"], [role="tab"], canvas[data-bot]';

let crashed = false;

function isVisible(el) {
  const r = el.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return false;
  if (el.closest('[aria-hidden="true"]')) return false;
  const cs = getComputedStyle(el);
  return cs.visibility !== "hidden" && cs.display !== "none" && Number(cs.opacity) !== 0;
}

function labelOf(el) {
  if (el.dataset.botLabel) return el.dataset.botLabel;
  const aria = el.getAttribute("aria-label");
  if (aria) return aria;
  if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return el.placeholder || el.name || "Text";
  return el.innerText || el.textContent || "";
}

function kindOf(el) {
  if (el.dataset.botKind) return el.dataset.botKind;
  if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return "field";
  if (el.tagName === "CANVAS") return "draw";
  if (el.dataset.testid === "option") return "choice";
  if (el.dataset.testid === "tile") return "tile";
  if (el.getAttribute("role") === "tab" || el.closest("nav")) return "tab";
  return "button";
}

// Every control a learner could tap right now, with a stable id per screen.
function scan() {
  const root = document.getElementById("root") || document.body;
  const els = [...root.querySelectorAll(CONTROLS)].filter((el) => !el.disabled && isVisible(el));
  let option = 0;
  let tile = 0;
  const raw = els.map((el) => {
    const label = plainText(labelOf(el));
    let id = el.dataset.bot || "";
    // Choice ids match state().item.choices: both follow the card's option order.
    if (!id && el.dataset.testid === "option") id = `c${option++}`;
    if (!id && el.dataset.testid === "tile") id = `t${tile++}`;
    if (!id) id = slug(label) || kindOf(el);
    return { el, id, label, kind: kindOf(el) };
  });
  const ids = uniqueIds(raw.map((a) => a.id));
  return raw.map((a, i) => ({ ...a, id: ids[i] }));
}

// The page's main scroller: the scrollable element (or the document) showing the
// most of the window. Lingua scrolls inside AppShell's <main>, Onboarding's column,
// or the document, depending on the screen.
function scroller() {
  const root = document.getElementById("root") || document.body;
  const can = (el) => el.scrollHeight - el.clientHeight > 2;
  let best = null;
  let bestArea = 0;
  const doc = document.scrollingElement;
  if (doc && can(doc)) {
    best = doc;
    bestArea = window.innerWidth * window.innerHeight;
  }
  for (const el of root.querySelectorAll("*")) {
    if (!can(el)) continue;
    const oy = getComputedStyle(el).overflowY;
    if (oy !== "auto" && oy !== "scroll") continue;
    const r = el.getBoundingClientRect();
    const w = Math.max(0, Math.min(r.right, window.innerWidth) - Math.max(r.left, 0));
    const h = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
    if (w * h > bestArea) {
      best = el;
      bestArea = w * h;
    }
  }
  return best;
}

function scrollActions() {
  const el = scroller();
  if (!el) return [];
  const isDoc = el === document.scrollingElement;
  const r = isDoc ? { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight } : el.getBoundingClientRect();
  const out = [];
  if (el.scrollTop > 2) out.push({ el, id: "scroll-up", label: "Scroll up", kind: "scroll", dir: -1, r });
  if (el.scrollTop + el.clientHeight < el.scrollHeight - 2) out.push({ el, id: "scroll-down", label: "Scroll down", kind: "scroll", dir: 1, r });
  return out;
}

function centerOf(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

// Would a finger at the control's centre land on it? False while it is covered
// or still behind CardBreath's pointer-events guard.
function reachable(el) {
  const { x, y } = centerOf(el);
  if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) return false;
  const hit = document.elementFromPoint(x, y);
  return !!hit && (hit === el || el.contains(hit));
}

function setFieldValue(el, text) {
  const proto = el.tagName === "TEXTAREA" ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  el.focus();
  if (setter) setter.call(el, text);
  else el.value = text;
  el.dispatchEvent(new Event("input", { bubbles: true }));
}

// One finger stroke on the drawing pad: down, moves, up. `path` is points in
// 0..1 of the pad (cleanPath); without one, a straight line across the middle.
function swipe(el, path) {
  const r = el.getBoundingClientRect();
  const pts = cleanPath(path) ?? Array.from({ length: 8 }, (_, i) => [0.3 + (0.4 * i) / 7, 0.5]);
  const fire = (type, [px, py]) =>
    el.dispatchEvent(
      new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 1, pointerType: "mouse", isPrimary: true, clientX: r.left + px * r.width, clientY: r.top + py * r.height, buttons: type === "pointerup" ? 0 : 1 })
    );
  fire("pointerdown", pts[0]);
  for (const p of pts.slice(1)) fire("pointermove", p);
  fire("pointerup", pts[pts.length - 1]);
}

const nextFrame = () => new Promise((res) => requestAnimationFrame(() => setTimeout(res, 0)));

export function install() {
  if (window.StudyBot) return window.StudyBot;
  const events = createEvents();
  // Which languages exist and which are complete: fixed for a build, so worked out once.
  const languages = languageStatus({ languages: LANGUAGES, units: UNITS, audioIds: AUDIO_IDS, isLive, nameOf: langName });
  const emitError = (data) => events.emit("error", data);

  // Components emit feedback / done / tutor through the bus.
  botSubscribe((name, data) => {
    if (name === "crash") {
      crashed = true;
      emitError({ message: plainText(data?.message || "The app crashed"), source: "throw" });
      return;
    }
    events.emit(name, data);
  });

  // --- errors: thrown, console, failed requests ---
  window.addEventListener(
    "error",
    (e) => {
      const t = e.target;
      if (t && t !== window && (t.src || t.href)) {
        emitError({ message: `Failed to load ${t.tagName.toLowerCase()}`, source: "request", url: String(t.src || t.href).split("?")[0] });
      } else {
        emitError({ message: plainText(e.message || e.error?.message || "Error"), source: "throw" });
      }
    },
    true
  );
  window.addEventListener("unhandledrejection", (e) => {
    emitError({ message: plainText(e.reason?.message || String(e.reason ?? "Unhandled rejection")), source: "throw" });
  });
  const origError = console.error.bind(console);
  console.error = (...args) => {
    try {
      emitError({ message: plainText(args.map((a) => (a instanceof Error ? a.message : typeof a === "string" ? a : safeJson(a))).join(" ")), source: "console" });
    } catch {
      /* never let reporting break logging */
    }
    origError(...args);
  };
  const origFetch = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    // Reported without its query string: the tutor's URL can carry a secret.
    const url = String(typeof input === "string" ? input : input?.url ?? input).split("?")[0];
    try {
      const res = await origFetch(input, init);
      if (res.status >= 400) emitError({ message: `Request failed (${res.status})`, source: "request", url, status: res.status });
      return res;
    } catch (err) {
      emitError({ message: plainText(err?.message || "Request failed"), source: "request", url });
      throw err;
    }
  };

  // --- state ---
  function state() {
    const surfaces = botSurfaces();
    const top = pickSurface(surfaces);
    const screen = crashed ? "error" : top?.screen ?? screenForPath(window.location.pathname);
    const item = !crashed && top?.item ? publicItem(top.item) : null;
    // The language he is in now (the active one), as a subject name; null before he picks.
    const profile = useStore.getState().profile;
    const active = profile?.languages?.length ? activeLangId(profile) : null;
    const language = active ? languages.find((l) => l.id === active)?.subject ?? active : null;
    return { screen, item, progress: progressOf(surfaces), language };
  }

  let lastScreen = state().screen;
  function checkScreen() {
    const now = state().screen;
    if (now !== lastScreen) {
      events.emit("screen", { from: lastScreen, to: now });
      lastScreen = now;
    }
  }
  setInterval(checkScreen, 200);

  // Every control on the page, on screen or not, plus scroll-down / scroll-up when
  // the page can scroll that way. `offscreen: true` marks a control whose centre is
  // outside the window: scroll first (or act() scrolls it into view itself).
  function actions() {
    const controls = scan().map(({ el, id, label, kind }) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const a = { id, label, kind, rect: roundRect(r) };
      if (cx < 0 || cy < 0 || cx > window.innerWidth || cy > window.innerHeight) a.offscreen = true;
      return a;
    });
    const scrolls = scrollActions().map(({ id, label, kind, r }) => ({ id, label, kind, rect: roundRect(r) }));
    return [...controls, ...scrolls];
  }

  async function act(id, value) {
    const scroll = scrollActions().find((a) => a.id === String(id));
    if (scroll) {
      // About one screen, like a swipe: 80% of what the scroller shows.
      scroll.el.scrollBy({ top: scroll.dir * Math.round(scroll.el.clientHeight * 0.8), behavior: "instant" });
      await nextFrame();
      checkScreen();
      return { ok: true };
    }
    const found = scan().find((a) => a.id === String(id));
    if (!found) return { ok: false, error: "no such action" };
    const { el, kind } = found;
    if (!reachable(el)) {
      el.scrollIntoView({ block: "center", inline: "nearest" });
      await nextFrame();
      if (!reachable(el)) return { ok: false, error: "not reachable (covered, off screen, or still appearing)" };
    }
    if (kind === "field") {
      if (value != null) setFieldValue(el, plainText(value));
      else el.focus();
    } else if (kind === "draw") {
      if (value != null && !cleanPath(value)) return { ok: false, error: "a path is 2-64 [x, y] points in 0..1 of the pad" };
      swipe(el, value);
    } else {
      el.click();
    }
    await nextFrame();
    checkScreen();
    return { ok: true };
  }

  function hello() {
    const signedIn = !!useStore.getState().auth?.user;
    return {
      app: "lingua",
      version: STUDYBOT_VERSION,
      appVersion: VERSION,
      testAccount: !isCloudConfigured && !signedIn,
      subjects: languages.filter((l) => l.complete).map((l) => l.subject),
      languages: languages.map((l) => ({ ...l })),
    };
  }

  const api = Object.freeze({
    version: STUDYBOT_VERSION,
    hello,
    state,
    actions,
    act,
    on: (name, handler) => events.on(name, handler),
    take: () => events.take(),
  });
  Object.defineProperty(window, "StudyBot", { value: api, writable: false, configurable: false, enumerable: false });
  return api;
}

function safeJson(v) {
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}
