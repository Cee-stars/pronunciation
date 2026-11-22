#!/usr/bin/env node
/**
 * データの整合性検査。
 *
 *  1. relatedRules / related / contrasts.withId の参照先が実在するか
 *  2. 参照先が未執筆の場合、30日カリキュラムに予定として載っているか
 *  3. カリキュラムが参照する id のうち、未執筆のものがいくつ残っているか
 *
 * 未執筆の項目への参照は「準備中」と表示されるだけなので異常ではない。
 * 異常なのは、どこにも存在せず予定にもない id を参照している場合。
 */
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'src', 'data');
const SUBS = ['phonemes', 'rules', 'topics'];
const read = (p) => fs.readFileSync(p, 'utf8');

const written = new Map(); // id -> ファイル名
for (const sub of SUBS) {
  const dir = path.join(DATA, sub);
  for (const f of fs.readdirSync(dir)) {
    if (f === 'index.ts') continue;
    const m = read(path.join(dir, f)).match(/^\s*id: '([^']+)'/m);
    if (m) written.set(m[1], `${sub}/${f}`);
  }
}

const refs = new Map(); // id -> 参照元の集合
const addRef = (id, from) => {
  if (!refs.has(id)) refs.set(id, new Set());
  refs.get(id).add(from);
};
for (const sub of SUBS) {
  const dir = path.join(DATA, sub);
  for (const f of fs.readdirSync(dir)) {
    if (f === 'index.ts') continue;
    const s = read(path.join(dir, f));
    for (const block of s.matchAll(/(?:relatedRules|related):\s*\[([^\]]*)\]/g)) {
      for (const r of block[1].matchAll(/'([^']+)'/g)) addRef(r[1], `${sub}/${f}`);
    }
    for (const r of s.matchAll(/withId: '([^']+)'/g)) addRef(r[1], `${sub}/${f}`);
  }
}

const cur = read(path.join(DATA, 'curriculum.ts'));
const planned = new Set([
  ...[...cur.matchAll(/\b[prt]\('([^']+)'\)/g)].map((m) => m[1]),
]);

const unknown = [];
const pending = [];
for (const [id, from] of refs) {
  if (written.has(id)) continue;
  (planned.has(id) ? pending : unknown).push([id, [...from]]);
}

const curMissing = [...planned].filter((id) => !written.has(id));

console.log(`執筆済みエントリ: ${written.size}`);
console.log(`カリキュラム予定: ${planned.size}（未執筆 ${curMissing.length}）`);
console.log(`予定どおりの未執筆参照: ${pending.length}`);

if (unknown.length) {
  console.error(`\nエラー: 存在せずカリキュラムにも無い id への参照が ${unknown.length} 件あります。`);
  for (const [id, from] of unknown.sort()) {
    console.error(`  ${id}  <- ${from.join(', ')}`);
  }
  process.exit(1);
}
console.log('\nリンク切れなし（未執筆項目への参照はすべて予定に含まれています）。');
