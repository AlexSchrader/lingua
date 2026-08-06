import { UNITS } from './src/data/index.js';
const K=/[一-鿿]/;
const by={};
for(const u of UNITS){ if(u.lang!=='ja')continue; let t=0,k=0;
 for(const l of u.lessons||[]) for(const it of l.items||[]){ if(!it.example)continue; t++; if(K.test(it.example.jp))k++; }
 if(t) by[u.order]=`${k}/${t}`;
}
const keys=Object.keys(by).map(Number).sort((a,b)=>a-b);
console.log('kanji-in-example ratio, last 25 authored units:');
console.log(keys.slice(-25).map(o=>`u${o}:${by[o]}`).join('  '));
let T=0,Kc=0; for(const o of keys){const [a,b]=by[o].split('/').map(Number); Kc+=a; T+=b;}
console.log('CORPUS TOTAL', Kc+'/'+T, (100*Kc/T).toFixed(1)+'%');
