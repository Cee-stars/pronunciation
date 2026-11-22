#!/usr/bin/env node
/**
 * 一覧表示用の軽量メタデータを生成する。
 *
 * エントリ本体（解説・台本・FAQ まで含む）は Day ごとに遅延読み込みするため、
 * アプリ本体のバンドルには入れない。しかしホーム・音素一覧・検索結果の見出しは
 * 全エントリぶんを即座に出す必要があるので、小さい項目だけをここで抜き出す。
 *
 * 入力: src/data/index.ts（全エントリを eager に集めた索引。アプリは読み込まない）
 * 出力: src/data/meta.generated.ts
 *
 * データを足したら npm run gen:meta。build と dev の前に自動で走る。
 */
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'src', 'data', 'meta.generated.ts');

async function main() {
  const tmp = path.join(os.tmpdir(), `pron-meta-${process.pid}.cjs`);
  await esbuild.build({
    entryPoints: [path.join(ROOT, 'src', 'data', 'index.ts')],
    bundle: true,
    format: 'cjs',
    platform: 'node',
    outfile: tmp,
    logLevel: 'warning',
  });

  const data = require(tmp);
  fs.unlinkSync(tmp);

  const phonemes = data.phonemes.map((p) => ({
    kind: 'phoneme',
    id: p.id,
    ipa: p.ipa,
    type: p.type,
    group: p.group,
    keyword: p.keyword,
    nickname: p.nickname,
    oneLiner: p.oneLiner,
  }));
  const rules = data.rules.map((r) => ({
    kind: 'rule',
    id: r.id,
    title: r.title,
    titleEn: r.titleEn,
    genre: r.genre,
    oneLiner: r.oneLiner,
  }));
  const topics = data.topics.map((t) => ({
    kind: 'topic',
    id: t.id,
    title: t.title,
    titleEn: t.titleEn,
    genre: t.genre,
    oneLiner: t.oneLiner,
  }));

  const body = `// 自動生成ファイル。直接編集しないこと。
// 生成: npm run gen:meta （scripts/gen-meta.cjs が src/data/index.ts から抽出する）
import type { EntryMeta } from '../types';

export const phonemeMeta: EntryMeta[] = ${JSON.stringify(phonemes, null, 2)};

export const ruleMeta: EntryMeta[] = ${JSON.stringify(rules, null, 2)};

export const topicMeta: EntryMeta[] = ${JSON.stringify(topics, null, 2)};
`;

  fs.writeFileSync(OUT, body);
  const kb = (fs.statSync(OUT).size / 1024).toFixed(1);
  console.log(`meta.generated.ts: 音素 ${phonemes.length} / ルール ${rules.length} / 解説 ${topics.length}（${kb} kB）`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
