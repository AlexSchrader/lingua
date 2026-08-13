import { UNITS } from './src/data/index.js';
const ja=UNITS.filter(u=>u.lang==='ja');
const ids=process.argv.slice(2);
for(const u of ja) for(const l of u.lessons){ if(l.locked) continue; for(const it of l.items)
  if(ids.includes(it.id)) console.log(`${it.id}\n  front=${it.front} reading=${it.reading} meaning=${it.meaning}\n  jp: ${it.example.jp}\n  en: ${it.example.en}\n  hint: ${it.hint||'-'}\n`); }
