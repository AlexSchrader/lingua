// The language of a single item — resolved, never assumed.
//
// Items seeded from the curriculum always carry `lang` (seedItems stamps it). Items
// persisted before the app had more than one language do NOT, and every call site
// that needed a language for one of those had grown its own `item.lang ?? "ja"`.
// Eleven copies of the same literal, each of them a silent decision that an
// unlabelled item is Japanese — which was true of the saves that motivated it and
// false of everything since.
//
// The item id already carries the answer: ids are `<lang>-u<n>l<n>-<slug>`, so a
// pre-i18n Japanese save reads back as "ja" from its own data instead of from a
// hardcoded default, and a future save from any other language reads back as that
// language. Nothing is guessed; when the id carries no prefix either, the answer is
// null — "unknown", which callers must handle as *not* any particular language.
const ID_LANG = /^([a-z]{2})-u\d+l\d+/;

export function itemLang(item) {
  if (item?.lang) return item.lang;
  const m = typeof item?.id === "string" ? item.id.match(ID_LANG) : null;
  return m ? m[1] : null;
}

// Convenience for the Japanese-script branches (kana fonts, rōmaji folding, the
// kana-keyboard ramp). Those are genuinely language-specific behaviour, not a
// default — the point is only that they must fire on a *known* Japanese item.
export const isJapaneseItem = (item) => itemLang(item) === "ja";
