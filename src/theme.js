// Two palettes, one set of tokens. Components read `C.token` (a getter) so they
// always reflect the active theme. Getters return CONCRETE hex (not CSS vars),
// so canvas/SVG colors (TraceCard) and string-alpha (`${C.ai}33`) keep working
// unchanged. App applies the theme each render via setActiveTheme(), driven by
// the persisted `settings.theme` (light / dark / system).
const PALETTES = {
  light: {
    washi: "#F1EDE2",
    surface: "#FBFAF5",
    ink: "#1B1A17",
    inkSoft: "#6A655A",
    ai: "#2A4A7B",
    aiDeep: "#1E3559",
    aiSoft: "#E5EAF2",
    line: "#DDD8CA",
    locked: "#B4AF9F",
    lockedBg: "#E8E5DB",
    shu: "#C2502E",
    shuSoft: "#FCEEEA",
    matcha: "#3F7A55",
    matchaSoft: "#EAF3EC",
  },
  dark: {
    washi: "#17160F",
    surface: "#211F1A",
    ink: "#ECE7DB",
    inkSoft: "#A29B8B",
    ai: "#5486CE",
    aiDeep: "#9DBEEC",
    aiSoft: "#233349",
    line: "#34302A",
    locked: "#726C60",
    lockedBg: "#2C2A24",
    shu: "#E27E58",
    shuSoft: "#3A2620",
    matcha: "#6BB183",
    matchaSoft: "#223A2A",
  },
};

// --- Per-language accent -----------------------------------------------------
// The app has ONE accent identity (the `ai` blue + its deep/soft variants). We
// shift ONLY that accent per active language, leaving every neutral (washi paper,
// ink, lines, locked, plus the semantic shu/matcha) shared — so readability and the
// paper aesthetic stay constant and only the "colour of the app" changes.
//
// Each language is one hue; the accent is DERIVED at saturation/lightness targets
// calibrated to the original Japanese palette, so ja reproduces its exact colours
// and every other hue gets the same muted, tasteful feel (no per-hue hand-tuning to
// drift). A language with no hue here — and ja itself — falls through to the base
// palette unchanged, so this can never alter the established Japanese look.
const LANG_HUE = {
  es: 8,    // Spain — warm terracotta red
  fr: 226,  // France — royal blue
  de: 44,   // Germany — gold
  it: 150,  // Italy — green
  pt: 168,  // Portugal — teal-green
  no: 348,  // Norway — rose red
  sv: 205,  // Sweden — sky blue
  nl: 26,   // Netherlands — orange
  pl: 342,  // Poland — crimson
  tr: 358,  // Türkiye — red
  id: 12,   // Indonesia — red
  vi: 48,   // Vietnam — gold
  ko: 190,  // Korea — teal
  ru: 234,  // Russia — blue
  sw: 128,  // Swahili — green
  yo: 96,   // Yoruba — olive green
  tw: 40,   // Twi — Ghana gold
  zh: 4,    // Mandarin — red
  hi: 30,   // Hindi — saffron
  en: 214,  // English — classic blue (US/UK share it)
  ht: 224,  // Haitian Creole — Haiti royal blue
};

// [saturation, lightness] per accent token per mode — read off the original ja
// palette so hue 217 here reproduces the existing #2A4A7B / #1E3559 / #E5EAF2 etc.
const ACCENT_SL = {
  light: { ai: [49, 33], aiDeep: [48, 23], aiSoft: [33, 92] },
  dark: { ai: [53, 57], aiDeep: [60, 75], aiSoft: [35, 21] },
};
const ACCENT_KEYS = new Set(["ai", "aiDeep", "aiSoft"]);

// HSL → #rrggbb (concrete hex, so canvas/SVG/alpha-string usages keep working).
function hslHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const c = l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
    return Math.round(255 * c).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// The three accent tokens for a language + mode, or null to use the base palette
// (ja and any unlisted language → unchanged).
function accentFor(lang, mode) {
  const h = LANG_HUE[lang];
  if (!h) return null;
  const sl = ACCENT_SL[mode];
  return {
    ai: hslHex(h, sl.ai[0], sl.ai[1]),
    aiDeep: hslHex(h, sl.aiDeep[0], sl.aiDeep[1]),
    aiSoft: hslHex(h, sl.aiSoft[0], sl.aiSoft[1]),
  };
}

let _theme = "light";
let _lang = null;

// Set the active palette. Safe to call in render (idempotent module write).
export function setActiveTheme(name) {
  if (PALETTES[name]) _theme = name;
}

// Set the active language, which recolours the accent. null / unlisted / ja keeps
// the base palette. Safe to call in render.
export function setActiveLang(lang) {
  _lang = lang || null;
}

// Resolve a preference (light|dark|system) + the OS dark flag to a palette name.
export function resolveTheme(pref, systemDark) {
  if (pref === "dark") return "dark";
  if (pref === "light") return "light";
  return systemDark ? "dark" : "light";
}

export const C = {};
for (const key of Object.keys(PALETTES.light)) {
  Object.defineProperty(C, key, {
    enumerable: true,
    get: () => {
      if (ACCENT_KEYS.has(key)) {
        const a = accentFor(_lang, _theme);
        if (a) return a[key];
      }
      return PALETTES[_theme][key];
    },
  });
}

export const F = {
  disp: "'Space Grotesk','Segoe UI',system-ui,sans-serif",
  body: "'Inter',system-ui,sans-serif",
  mono: "ui-monospace,'SF Mono',Menlo,monospace",
  jp: "'Hiragino Kaku Gothic ProN','Yu Gothic','Noto Sans JP',sans-serif",
};
