# -*- coding: utf-8 -*-
"""Fold-collision screen for Norwegian.

German found `schon` PERMANENTLY unteachable because `schön` was taught at u1 and
both fold to "schon" -- the reading is the typed answer key, so two fronts that
fold together can never both be taught. Norwegian folds harder than German:
aa -> a, ae <- ae, and oe -> o, so the exposure is larger.

This compares the FOLD of every front (not the authored `reading`, which is what
an author can get wrong) so it catches the collision even if the readings differ.

    python scripts/fold_collisions.py            report
    python scripts/fold_collisions.py --selftest prove the rule can fail
"""
import re, sys, unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FRONT = re.compile(r'front:\s*"([^"]*)"')


def fold(s: str) -> str:
    """Replicate normalizeReading for a Latin language, plus the oe fold the
    engine now does. Lowercase, strip spaces, ae/oe expand, diacritics drop."""
    s = s.strip().lower()
    s = s.replace(" ", "")
    s = s.replace("æ", "ae").replace("œ", "oe").replace("ø", "o")
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"['’ʼ-]", "", s)
    return s


def units():
    out = {}
    for p in sorted((ROOT / "src" / "data" / "no").glob("unit*.js")):
        n = int(re.search(r"unit(\d+)", p.name).group(1))
        out[n] = FRONT.findall(p.read_text(encoding="utf-8"))
    return out


def report(extra=None):
    by_fold = {}
    for n, fronts in sorted(units().items()):
        for f in fronts:
            by_fold.setdefault(fold(f), []).append((f, "u%d" % n))
    for f, tag in (extra or []):
        by_fold.setdefault(fold(f), []).append((f, tag))

    hits = 0
    for k, v in sorted(by_fold.items()):
        if len({a for a, _ in v}) > 1:
            print("  COLLIDE  %-14s <- %s" % (k, " / ".join("%s [%s]" % (a, b) for a, b in v)))
            hits += 1
    print("%d fold collision(s) across %d distinct folds" % (hits, len(by_fold)))
    return hits


if __name__ == "__main__":
    if "--selftest" in sys.argv:
        # A pair I KNOW folds together must be reported. If this passes silently
        # the check is inert -- the failure mode this crew keeps paying for.
        print("-- selftest --")
        probes = [("sor", "PROBE"), ("sør", "PROBE")]
        assert fold("sør") == "sor", "oe fold broken"
        assert fold("å") == "a", "aa fold broken"
        assert fold("klær") == "klaer", "ae fold broken"
        n = report(extra=probes)
        print("SELFTEST PASS - a known fold pair was reported" if n >= 1
              else "SELFTEST FAIL - the rule is inert")
        sys.exit(0 if n >= 1 else 1)
    sys.exit(1 if report() else 0)
