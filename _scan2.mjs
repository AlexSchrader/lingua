import { UNITS } from './src/data/index.js';
const ja=UNITS.filter(u=>u.lang==='ja').sort((a,b)=>a.order-b.order);
const B=[99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117];
console.log('=== duplicate example glosses involving block 1 ===');
const byEn=new Map();
for(const u of ja) for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items){ if(!it.example) continue;
  const k=it.example.en.toLowerCase().replace(/[^a-z ]/g,'').trim();
  if(!byEn.has(k)) byEn.set(k,[]); byEn.get(k).push(`${it.id}(u${u.order})`); }}
for(const [k,v] of byEn) if(v.length>1&&v.some(x=>/\(u(99|1[0-1][0-9])\)/.test(x))) console.log(' ',v.join(' == '),'|',k);
console.log('=== duplicate example.jp (normalised, whole corpus) ===');
const byJp=new Map();
for(const u of ja) for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items){ if(!it.example) continue;
  const k=it.example.jp.replace(/\s/g,''); if(!byJp.has(k)) byJp.set(k,[]); byJp.get(k).push(`${it.id}(u${u.order})`); }}
for(const [k,v] of byJp) if(v.length>1) console.log(' ',v.join(' == '),'|',k);
console.log('=== single-clause examples ===');
let n=0; for(const u of ja){ if(!B.includes(u.order)) continue; for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items){
  if(!it.example.jp.includes('、')&&(it.example.jp.match(/。/g)||[]).length<2){ n++; console.log(' ',it.id,'|',it.example.jp);} }}}
console.log(' total:',n);
console.log('=== non-ASCII in English fields ===');
for(const u of ja){ if(!B.includes(u.order)) continue; for(const l of u.lessons){ if(l.locked) continue;
  for(const it of l.items){ for(const a of (it.accept||[])) if(/[^\x00-\x7F]/.test(a)) console.log('  ACCEPT',it.id,a);
    if(/[^\x00-\x7F]/.test(it.meaning||'')) console.log('  MEANING',it.id,it.meaning);
    if(/[^\x00-\x7F]/.test(it.example.en)) console.log('  EN',it.id,it.example.en); }}}
console.log('=== no bunsetsu spacing ===');
for(const u of ja){ if(!B.includes(u.order)) continue; for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items)
  if(!/\s/.test(it.example.jp)) console.log(' ',it.id,'|',it.example.jp); }}
console.log('=== mixed half-kana spellings ===');
for(const p of ['方しん','地しん','気もち','まに合','一さつ','想い出','未だ','しょう油','三章']) for(const u of ja){ if(!B.includes(u.order)) continue;
  for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items) if(it.example.jp.includes(p)) console.log(' ',p,it.id,'|',it.example.jp); }}
console.log('=== fronts ending in する ===');
for(const u of ja){ if(!B.includes(u.order)) continue; for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items)
  if(it.front.endsWith('する')) console.log(' ',it.id,it.front); }}
console.log('=== kanji reading vs example usage spot list ===');
for(const id of ['ja-u102l1-omote','ja-u100l2-so','ja-u115l2-mi','ja-u106l2-wa','ja-u109l1-tai'])
 for(const u of ja) for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items) if(it.id===id) console.log(' ',it.id,it.front,it.reading,'|',it.example.jp); }
