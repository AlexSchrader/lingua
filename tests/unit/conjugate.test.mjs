import { test } from "node:test";
import assert from "node:assert/strict";
import { conjugate, CONJ_FORMS } from "../../src/store/conjugate.js";

// [masu, group, {form: expected, ...}]
const CASES = [
  // godan — regular across the euphonic families
  ["のみます", "godan", { dict: "のむ", te: "のんで", ta: "のんだ", nai: "のまない", potential: "のめる", volitional: "のもう", ba: "のめば", tara: "のんだら" }],
  ["かきます", "godan", { dict: "かく", te: "かいて", ta: "かいた", nai: "かかない", potential: "かける", volitional: "かこう" }],
  ["およぎます", "godan", { dict: "およぐ", te: "およいで", ta: "およいだ" }],
  ["はなします", "godan", { dict: "はなす", te: "はなして", ta: "はなした" }],
  ["かいます", "godan", { dict: "かう", te: "かって", ta: "かった", nai: "かわない", potential: "かえる" }], // う-verb: nai is わ
  ["あそびます", "godan", { dict: "あそぶ", te: "あそんで", ta: "あそんだ" }],
  ["とります", "godan", { dict: "とる", te: "とって", nai: "とらない" }],
  // godan exceptions
  ["いきます", "godan", { dict: "いく", te: "いって", ta: "いった", nai: "いかない", tara: "いったら" }], // 行く: NOT いいて
  ["あります", "godan", { dict: "ある", nai: "ない", te: "あって", ta: "あった" }],                     // ある: nai = ない
  ["かえります", "godan", { dict: "かえる", te: "かえって", nai: "かえらない" }],                       // 帰る: looks ichidan, is godan
  // ichidan
  ["たべます", "ichidan", { dict: "たべる", te: "たべて", ta: "たべた", nai: "たべない", potential: "たべられる", volitional: "たべよう", ba: "たべれば", tara: "たべたら" }],
  ["みます", "ichidan", { dict: "みる", te: "みて", nai: "みない" }],
  ["おきます", "ichidan", { dict: "おきる", te: "おきて" }],
  // irregular
  ["きます", "irregular", { dict: "くる", te: "きて", ta: "きた", nai: "こない", potential: "こられる", volitional: "こよう", ba: "くれば", tara: "きたら" }],
  ["そうじします", "irregular", { dict: "そうじする", te: "そうじして", ta: "そうじした", nai: "そうじしない", potential: "そうじできる" }],
];

for (const [masu, group, forms] of CASES) {
  test(`${masu} (${group})`, () => {
    for (const [form, expected] of Object.entries(forms)) {
      assert.equal(conjugate(masu, group, form), expected, `${masu} ${form}`);
    }
  });
}

test("every N4 form is produced for a sample of each group", () => {
  for (const [masu, group] of [["のみます", "godan"], ["たべます", "ichidan"], ["きます", "irregular"]]) {
    for (const f of CONJ_FORMS) assert.ok(conjugate(masu, group, f), `${masu} ${f} should conjugate`);
  }
});

test("bad input returns null", () => {
  assert.equal(conjugate("たべる", "ichidan", "te"), null); // not a ます-form
  assert.equal(conjugate("のみます", "godan", "keigo"), null); // unknown form
});
