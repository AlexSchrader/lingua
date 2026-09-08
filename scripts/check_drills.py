#!/usr/bin/env python3
"""Python port of the drill rules in scripts/check-drills.mjs.

WHY THIS EXISTS: node.exe disappeared from this machine mid-block (C:\\Program
Files\\Node.js is gone), so check-drills.mjs — which the crew lead calls the only
real gate on a drill — cannot run. This ports the mechanical rules so authoring
can continue with verification instead of on faith.

IT IS NOT A REPLACEMENT FOR THE GATE. It checks the drill rules only. It does not
run validate:content, lint:curriculum, test:unit, audit, build or either Playwright
smoke, all of which need node. A block verified only by this script is NOT green.

Rules mirrored from check-drills.mjs:
  1. drill present, {jp, en} both non-empty
  2. the item's own front appears in jp as a whole word (letter boundaries)
  3. no interior sentence punctuation after the trailing one is stripped
  4. 3-8 whitespace tokens
  5. no punctuation-only token
  6. every word taught at or before that unit, or on a FREE line

Usage:  python scripts/check_drills.py [--verbose]
"""
import re, sys, glob, os, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOWELS = "aeiouyæøå"

ITEM_RE = re.compile(
    r'id: "(?P<id>[^"]+)", type: "(?P<type>[^"]+)", front: "(?P<front>[^"]*)", '
    r'reading: "(?P<reading>[^"]*)", meaning: "(?P<meaning>[^"]*)"')
DRILL_RE = re.compile(r'drill: \{ jp: "(?P<jp>[^"]*)", en: "(?P<en>[^"]*)" \}')
LESSON_RE = re.compile(r'lesson: (\d+),')

IRREG = {"være": ["er"], "ha": ["har"], "gå": ["går"], "gi": ["gir"], "se": ["ser"],
         "bo": ["bor"], "forstå": ["forstår"], "stå": ["står"], "vite": ["vet"],
         "få": ["får"], "si": ["sier"], "ta": ["tar"], "kunne": ["kan"],
         "ville": ["vil"], "skulle": ["skal"], "måtte": ["må"], "burde": ["bør"],
         "bli": ["blir"], "gjøre": ["gjør"]}
IRR_PL = {"tann": ["tenner", "tennene"], "bok": ["bøker", "bøkene"],
          "hånd": ["hender", "hendene"], "fot": ["føtter", "føttene"],
          "bror": ["brødre"], "søster": ["søstre"], "datter": ["døtre"],
          "mann": ["menn", "mennene"], "natt": ["netter"], "far": ["fedre"],
          "mor": ["mødre"], "øye": ["øyne", "øynene"], "mus": ["mus"]}
IRR_ADJ = {"liten": ["lita", "lite", "små", "lille"], "gammel": ["gammelt", "gamle"],
           "egen": ["eget", "egne"], "annen": ["annet", "andre"], "ny": ["nytt", "nye"],
           "bra": ["bra"], "blå": ["blått"], "grå": ["grått"]}
IRR_CMP = {"stor": ["større", "størst"], "liten": ["mindre", "minst"],
           "god": ["bedre", "best"], "gammel": ["eldre", "eldst"], "ung": ["yngre"],
           "lang": ["lengre", "lengst"], "mange": ["flere", "flest"],
           "mye": ["mer", "mest"], "vond": ["verre", "verst"]}


def load():
    units = {}
    for path in glob.glob(os.path.join(ROOT, "src/data/no/unit*.js")):
        n = int(re.search(r"unit(\d+)\.js", path).group(1))
        src = open(path, encoding="utf-8").read()
        free = set()
        for m in re.finditer(r"^//\s*FREE:\s*(.+)$", src, re.M):
            for w in re.split(r"[|,]", m.group(1)):
                w = w.strip().lower()
                if w:
                    free.add(w)
                    # a FREE word inflects, and the accent drops before the ending:
                    # kafé -> kafeen. check-drills.mjs does this with an NFD strip;
                    # omitting it made this port reject "kafeen" in no-u14l3, which
                    # node accepts. Port bug, not a content defect.
                    stem = unicodedata.normalize("NFD", w)
                    stem = "".join(c for c in stem if not unicodedata.combining(c))
                    free.add(stem)
                    for suf in ("en", "et", "a", "er", "ene", "n"):
                        free.add(w + suf)
                        free.add(stem + suf)
        items, lesson = [], 0
        for line in src.split("\n"):
            lm = LESSON_RE.search(line)
            if lm and "id:" not in line:
                lesson = int(lm.group(1))
            im = ITEM_RE.search(line)
            if im:
                d = DRILL_RE.search(line)
                items.append({"id": im.group("id"), "front": im.group("front"),
                              "unit": n, "lesson": lesson,
                              "drill": (d.group("jp"), d.group("en")) if d else None})
        units[n] = {"items": items, "free": free}
    return units


def build_taught(units):
    born, free = {}, set()
    for n in sorted(units):
        free |= units[n]["free"]
        for it in units[n]["items"]:
            slot = n
            front = it["front"].lower()
            bare = re.sub(r"^(en |ei |et |å )", "", front)
            def add(w):
                if w and (w not in born or slot < born[w]):
                    born[w] = slot
            for w in front.split():
                add(w)
            add(bare)
            if front.startswith("å "):
                for f in IRREG.get(bare, []):
                    add(f)
                add(bare + "r"); add(re.sub(r"e$", "er", bare))
                add(re.sub(r"e$", "te", bare)); add(re.sub(r"e$", "et", bare))
            elif re.match(r"^(en|ei|et) ", front):
                for s in ("en", "et", "a", "er", "ene", "ne", "e"):
                    add(bare + s)
                for s in ("a", "en", "er", "ene"):
                    add(re.sub(r"e$", s, bare))
                add(re.sub(r"el$", "ler", bare))
                if re.search(r"[%s][bdfglmnprtk]$" % VOWELS, bare):
                    d = bare + bare[-1]
                    for s in ("et", "en", "er", "a", "ene"):
                        add(d + s)
                for f in IRR_PL.get(bare, []):
                    add(f)
            else:
                for s in ("t", "e", "a", "en", "et", "ene", "ne", "er", "ere", "est", "este"):
                    add(bare + s)
                add(re.sub(r"(nn|mm|ll|tt)$", lambda m: m.group(0)[0] + "t", bare))
                add(re.sub(r"e$", "ere", bare)); add(re.sub(r"e$", "a", bare))
                for f in IRR_ADJ.get(bare, []) + IRR_CMP.get(bare, []):
                    add(f)
    return born, free


def whole_word(hay, needle):
    H, N = hay.lower(), needle.lower()
    i = H.find(N)
    while i >= 0:
        before = hay[i - 1] if i > 0 else ""
        after = hay[i + len(N)] if i + len(N) < len(hay) else ""
        if not before.isalpha() and not after.isalpha():
            return True
        i = H.find(N, i + 1)
    return False


SELFTEST = [
    # (drill jp, front, unit, substring expected in the complaint)
    ("En snill lege hjelper alle", "snill", 31, None),            # control: must PASS
    ("En god snill lege hjelper", "en lege", 31, "whole word"),   # adjective splits the front
    ("Vi ma bestemme noe", "å bestemme", 31, "whole word"),       # modal drops the å
    ("Han er snill. Han er grei", "snill", 31, "interior"),       # interior punctuation
    ("Snill", "snill", 31, "tokens"),                             # too few tokens
    ("En snill lege hjelper alle barna i hele landet i dag", "snill", 31, "tokens"),
    ("En snill lege hjelper zzqqvv", "snill", 31, "NOWHERE"),     # untaught word
    ("En snill lege hjelper hele", "snill", 31, "NOWHERE"),       # real untaught word
]


def selftest():
    """Prove every rule can fail. A checker that cannot fail is worse than none."""
    units = load()
    born, free = build_taught(units)
    ok = True
    for jp, front, unit, expect in SELFTEST:
        bad = check_one(jp, "en", front, unit, born, free)
        got = "; ".join(bad)
        if expect is None:
            good = not bad
        else:
            good = any(expect in b for b in bad)
        ok = ok and good
        print("  %s  %-52s -> %s" % ("PASS" if good else "FAIL", jp[:52],
                                     got if got else "<clean>"))
    print()
    print("selftest: %s" % ("all rules can fail as intended" if ok else "** A RULE DID NOT FIRE **"))
    return 0 if ok else 1


def check_one(jp, en, front, unit, born, free):
    bad = []
    stripped = re.sub(r"\s*[。！？.!?]+\s*$", "", jp)
    if not en.strip():
        bad.append("empty en")
    if not whole_word(stripped, front):
        bad.append('front "%s" not present as a whole word' % front)
    if re.search(r"[.!?…—–]", stripped):
        bad.append("interior sentence punctuation")
    toks = [t for t in stripped.split() if t]
    if not 3 <= len(toks) <= 8:
        bad.append("%d tokens (must be 3-8)" % len(toks))
    if any(not re.search(r"[^\W\d_]", t, re.U) for t in toks):
        bad.append("punctuation-only tile")
    for w in re.findall(r"[a-zæøåé]+", stripped.lower()):
        if w in free or len(w) < 2:
            continue
        at = born.get(w)
        if at is None:
            bad.append('"%s" is taught NOWHERE' % w)
        elif at > unit:
            bad.append('"%s" first taught u%d, used at u%d' % (w, at, unit))
    return bad


def main():
    if "--selftest" in sys.argv:
        return selftest()
    verbose = "--verbose" in sys.argv
    units = load()
    born, free = build_taught(units)
    valid = broken = missing = 0
    for n in sorted(units):
        for it in units[n]["items"]:
            if not it["drill"]:
                missing += 1
                continue
            jp, en = it["drill"]
            bad = []
            stripped = re.sub(r"\s*[。！？.!?]+\s*$", "", jp)
            if not en.strip():
                bad.append("empty en")
            if not whole_word(stripped, it["front"]):
                bad.append('front "%s" not present as a whole word' % it["front"])
            if re.search(r"[.!?…—–]", stripped):
                bad.append("interior sentence punctuation")
            toks = [t for t in stripped.split() if t]
            if not 3 <= len(toks) <= 8:
                bad.append("%d tokens (must be 3-8)" % len(toks))
            if any(not re.search(r"[^\W\d_]", t, re.U) for t in toks):
                bad.append("punctuation-only tile")
            for w in re.findall(r"[a-zæøåé]+", stripped.lower()):
                if w in free or len(w) < 2:
                    continue
                at = born.get(w)
                if at is None:
                    bad.append('"%s" is taught NOWHERE' % w)
                elif at > it["unit"]:
                    bad.append('"%s" first taught u%d, used at u%d' % (w, at, it["unit"]))
            if bad:
                broken += 1
                print("  X %-28s %s   <<%s>>" % (it["id"], "; ".join(bad), jp))
            else:
                valid += 1
                if verbose:
                    print("  ok %-28s %s" % (it["id"], jp))
    total = sum(len(u["items"]) for u in units.values())
    print("\ndrills: %d valid - %d broken - %d not yet written - %d items total"
          % (valid, broken, missing, total))
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main())
