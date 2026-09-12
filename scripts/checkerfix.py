# -*- coding: utf-8 -*-
# Two gaps in check-drills.mjs, both found by the block-3 seat.
#
# 1. SCOPE IS RESOLVED PER UNIT, NOT PER LESSON. Exactly the blind spot my own
#    unit7.js header warns about for examples — it applies to drills identically
#    and I did not apply it. It caught seven: u15l1 bukse/kjole/jakke and u15l2
#    skjerf drilled verbs from l3/l4; u19l1 "en sang" used synger from item 5 of
#    its own lesson; u19l2 "ei elv" used a verb from l4; u19l4 kaste used a noun
#    from later in l4.
# 2. THE DUPLICATE GUARD CATCHES EXACT IDENTITY BUT NOT A PREFIX. "Vi sover i et
#    telt" and "Jeg sender ei melding" are truncations of their own example, so
#    they carry no second context — the same defect, one character short of
#    being caught. Fourth revision of this one guard.
import io

p = 'scripts/check-drills.mjs'
s = io.open(p, encoding='utf-8').read()

# --- 1. lesson-granular scope -------------------------------------------------
old = '  const add = (w, u) => { const p = born.get(w); if (p === undefined || u < p) born.set(w, u); };'
assert old in s, 'add anchor'
s = s.replace(old, '  const add = (w, u) => { const p = born.get(w); if (p === undefined || u < p) born.set(w, u); };', 1)

old_u = 'for (const i of items) {\n  const bare = i.front.replace(/^(en |ei |et |å )/, "").toLowerCase();'
new_u = 'for (const i of items) {\n  const slot = i.u * 100 + i.l;   // lesson granularity, not unit\n  const bare = i.front.replace(/^(en |ei |et |å )/, "").toLowerCase();'
assert old_u in s, 'loop anchor'
s = s.replace(old_u, new_u, 1)
s = s.replace(', i.u);', ', slot);')          # every add(...) inside the loop
s = s.replace('add(w, i.u)', 'add(w, slot)')

old_cmp = '    const at = born.get(w);\n    if (at === undefined) bad.push(`"${w}" is taught NOWHERE`);\n    else if (at > item.u) bad.push(`"${w}" first taught u${at}, used at u${item.u}`);'
new_cmp = ('    const at = born.get(w);\n'
           '    const here = item.u * 100 + item.l;\n'
           '    if (at === undefined) bad.push(`"${w}" is taught NOWHERE`);\n'
           '    else if (at > here) bad.push(`"${w}" first taught u${Math.floor(at / 100)}l${at % 100}, used at u${item.u}l${item.l}`);')
assert old_cmp in s, 'compare anchor'
s = s.replace(old_cmp, new_cmp, 1)

# --- 2. prefix/truncation duplicates ------------------------------------------
old_d = '  if (flat(d.jp) === flat(item.example?.jp)) bad.push("drill IS the example (no second context — the whole point of the field)");'
new_d = ('  const fd = flat(d.jp), fe = flat(item.example?.jp);\n'
         '  // Exact identity OR a truncation of it — a prefix carries no second context\n'
         '  // either, and was passing one character short of being caught.\n'
         '  if (fd === fe) bad.push("drill IS the example (no second context — the whole point of the field)");\n'
         '  else if (fe && fd && (fe.startsWith(fd + " ") || fd.startsWith(fe + " ")))\n'
         '    bad.push("drill is a TRUNCATION of the example (still no second context)");')
assert old_d in s, 'dupe anchor'
s = s.replace(old_d, new_d, 1)

io.open(p, 'w', encoding='utf-8', newline='').write(s)
print('check-drills: lesson-granular scope + truncation detection')
