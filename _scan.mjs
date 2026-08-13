import { UNITS } from './src/data/index.js';
const ja=UNITS.filter(u=>u.lang==='ja').sort((a,b)=>a.order-b.order);
const B=[99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117];
const taughtKanji=new Map(), metInVocab=new Map(), wordAt=new Map();
for(const u of ja) for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items){
  if(it.type==='kanji'&&!taughtKanji.has(it.front)) taughtKanji.set(it.front,u.order);
  if(it.type==='vocab') for(const ch of it.front) if(/[\u4e00-\u9fff]/.test(ch)&&!metInVocab.has(ch)) metInVocab.set(ch,u.order);
  if(it.type!=='kana'&&!wordAt.has(it.front)) wordAt.set(it.front,u.order);
}}
console.log('=== C: untaught / forward-ref kanji in block-1 examples ===');
for(const u of ja){ if(!B.includes(u.order)) continue;
 for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items){
  const bad=[];
  for(const ch of it.example.jp){ if(!/[\u4e00-\u9fff]/.test(ch)) continue;
    const f=Math.min(taughtKanji.get(ch)??Infinity, metInVocab.get(ch)??Infinity);
    if(f>u.order) bad.push(`${ch}(${f===Infinity?'NEVER':'u'+f})`); }
  if(bad.length) console.log(' ',it.id,[...new Set(bad)].join(' '),'|',it.example.jp);
 }}}
console.log('=== D: target front absent from own example (kanji only) ===');
for(const u of ja){ if(!B.includes(u.order)) continue; for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items)
  if(it.type==='kanji'&&!it.example.jp.includes(it.front)) console.log(' ',it.id,it.front,'|',it.example.jp); }}
console.log('=== in-lesson reading collisions ===');
for(const u of ja){ if(!B.includes(u.order)) continue; for(const l of u.lessons){ if(l.locked) continue;
  const r=new Map(); for(const it of l.items){ if(!r.has(it.reading)) r.set(it.reading,[]); r.get(it.reading).push(it.id+':'+it.front); }
  for(const [k,v] of r) if(v.length>1) console.log(' ',l.id,k,v.join(' ')); }}
console.log('=== duplicate example glosses involving block 1 ===');
const byEn=new Map();
for(const u of ja) for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items){
  const k=it.example.en.toLowerCase().replace(/[^a-z ]/g,'').trim();
  if(!byEn.has(k)) byEn.set(k,[]); byEn.get(k).push(`${it.id}(u${u.order})`); }}
for(const [k,v] of byEn) if(v.length>1&&v.some(x=>/\(u(99|1[0-1][0-9])\)/.test(x))) console.log(' ',v.join(' == '),'|',k);
console.log('=== single-clause examples (no comma, one sentence) ===');
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
for(const p of ['方しん','地しん','気もち','まに合','一さつ','想い出','未だ','しょう油']) for(const u of ja){ if(!B.includes(u.order)) continue;
  for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items) if(it.example.jp.includes(p)) console.log(' ',p,it.id,'|',it.example.jp); }}
console.log('=== suru-fronts ===');
for(const u of ja){ if(!B.includes(u.order)) continue; for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items)
  if(it.front.endsWith('する')) console.log(' ',it.id,it.front); }}
